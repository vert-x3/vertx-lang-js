/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

package io.vertx.lang.js;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.core.Verticle;
import io.vertx.core.Vertx;
import io.vertx.core.spi.VerticleFactory;
import jdk.nashorn.api.scripting.ScriptObjectMirror;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.net.URL;
import java.util.Map;
import java.util.Scanner;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class JSVerticleFactory implements VerticleFactory {

  private Vertx vertx;
  private ScriptEngine engine;

  @Override
  public void init(Vertx vertx) {
    this.vertx = vertx;
  }

  @Override
  public String prefix() {
    return "js";
  }

  @Override
  public Verticle createVerticle(String verticleName, ClassLoader classLoader) throws Exception {
    init();
    return new JSVerticle(VerticleFactory.removePrefix(verticleName));
  }

  private final Map<String, AtomicInteger> deployCounts = new ConcurrentHashMap<>();

  public class JSVerticle extends AbstractVerticle {

    private static final String VERTX_START_FUNCTION = "vertxStart";
    private static final String VERTX_START_ASYNC_FUNCTION = "vertxStartAsync";
    private static final String VERTX_STOP_FUNCTION = "vertxStop";
    private static final String VERTX_STOP_ASYNC_FUNCTION = "vertxStopAsync";
    private static final String VERTX_START_FUNCTION_IMPLICIT = "__vertxRunModule";

    private final String verticleName;

    private JSVerticle(String verticleName) {
      this.verticleName = verticleName;
    }

    private ScriptObjectMirror exports;

    private boolean functionExists(String functionName) {
      Object som = exports.getMember(functionName);
      return som != null && !som.toString().equals("undefined");
    }

    @Override
    public void start(Future<Void> startFuture) throws Exception {

      AtomicInteger newCount = new AtomicInteger();
      AtomicInteger count = deployCounts.putIfAbsent(verticleName, newCount);
      if (count != null) {
        newCount = count;
      }
      int cnt = newCount.incrementAndGet();
      boolean firstTime = cnt == 1; // First time this module has been deployed
      // We need to synchronize to make sure the same script doesn't get required concurrently (e.g.
      // if multiple instances are deployed) this can lead to race conditions and failures
      synchronized (newCount) {
        engine.put("__verticle", this);
        exports = (ScriptObjectMirror) engine.eval("require('" + verticleName + "');");

        if (functionExists(VERTX_START_FUNCTION)) {
          exports.callMember(VERTX_START_FUNCTION);
          startFuture.complete();
        } else if (functionExists(VERTX_START_ASYNC_FUNCTION)) {
          exports.callMember(VERTX_START_ASYNC_FUNCTION, startFuture);
        } else {
          // If there's no vertStart function and this is the first time this module has been deployed, then the
          // script will have now been run as the require was executed so we don't want to execute it again.
          // If it's not the first time, then the require will be cached so the script won't be run on the require
          // so we need to run it using the function reference to the script body that we add to the exports object
          if (!firstTime) {
            if (!functionExists(VERTX_START_FUNCTION_IMPLICIT)) {
              throw new IllegalStateException("exports object overwritten in " + verticleName);
            }
            exports.callMember(VERTX_START_FUNCTION_IMPLICIT);
          }
          startFuture.complete();
        }
      }
    }

    @Override
    public void stop(Future<Void> stopFuture) throws Exception {
      if (functionExists(VERTX_STOP_FUNCTION)) {
        exports.callMember(VERTX_STOP_FUNCTION);
        stopFuture.complete();
      } else if (functionExists(VERTX_STOP_ASYNC_FUNCTION)) {
        exports.callMember(VERTX_STOP_ASYNC_FUNCTION, stopFuture);
      } else {
        stopFuture.complete();
      }
    }
  }

  private synchronized void init() {
    if (engine == null) {
      ScriptEngineManager mgr = new ScriptEngineManager();
      engine = mgr.getEngineByName("nashorn");
      if (engine == null) {
        throw new IllegalStateException("Cannot find Nashorn JavaScript engine - maybe you are not running with Java 8 or later?");
      }
      URL url = getClass().getClassLoader().getResource("vertx-js/util/jvm-npm.js");
      if (url == null) {
        throw new IllegalStateException("Cannot find vertx/util/jvm-npm.js on classpath");
      }
      try (Scanner scanner = new Scanner(url.openStream(), "UTF-8").useDelimiter("\\A")) {
        String requireJS = scanner.next();
        engine.put(ScriptEngine.FILENAME, "jvm-npm.js");
        engine.eval(requireJS);
      } catch (Exception e) {
        throw new IllegalStateException("Failed to load vertx/jvm-npm.js", e);
      }
      try {
        // Put the globals in
        engine.put("__jvertx", vertx);
        // As a temporary hack we also put the engine itself in, this allows us to set script name from JS
        // which we need to do until # sourceURL = is supported so we can name evals
        engine.put("__engine", engine);
        engine.eval("var Vertx = require('vertx-js/vertx'); var vertx = new Vertx(__jvertx); var console = require('vertx-js/util/console');");
        engine.eval("var setTimeout = function(callback,delay) { return vertx.setTimer(delay, callback); };");
        engine.eval("var clearTimeout = function(id) { vertx.cancelTimer(id); };");
        engine.eval("var setInterval = function(callback, delay) { return vertx.setPeriodic(delay, callback); };");
        engine.eval("var clearInterval = clearTimeout;");
        engine.eval("var parent = this, global = this;");
      } catch (ScriptException e) {
        throw new IllegalStateException("Failed to eval: " + e.getMessage(), e);
      }
    }
  }

}
