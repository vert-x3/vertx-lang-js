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
import java.util.Scanner;

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class JSVerticleFactory implements VerticleFactory {

  static {
    ClasspathFileResolver.init();
  }

  private static final String JVM_NPM = "vertx-js/util/jvm-npm.js";

  private Vertx vertx;
  private ScriptEngine engine;
  private ScriptObjectMirror futureJSClass;

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

  public class JSVerticle extends AbstractVerticle {

    private static final String VERTX_START_FUNCTION = "vertxStart";
    private static final String VERTX_START_ASYNC_FUNCTION = "vertxStartAsync";
    private static final String VERTX_STOP_FUNCTION = "vertxStop";
    private static final String VERTX_STOP_ASYNC_FUNCTION = "vertxStopAsync";

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

      exports = (ScriptObjectMirror) engine.eval("require.noCache('" + verticleName + "');");
      if (functionExists(VERTX_START_FUNCTION)) {
        exports.callMember(VERTX_START_FUNCTION);
        startFuture.complete();
      } else if (functionExists(VERTX_START_ASYNC_FUNCTION)) {
        Object wrappedFuture = futureJSClass.newObject(startFuture);
        exports.callMember(VERTX_START_ASYNC_FUNCTION, wrappedFuture);
      } else {
        startFuture.complete();
      }
    }

    @Override
    public void stop(Future<Void> stopFuture) throws Exception {
      if (functionExists(VERTX_STOP_FUNCTION)) {
        exports.callMember(VERTX_STOP_FUNCTION);
        stopFuture.complete();
      } else if (functionExists(VERTX_STOP_ASYNC_FUNCTION)) {
        Object wrappedFuture = futureJSClass.newObject(stopFuture);
        exports.callMember(VERTX_STOP_ASYNC_FUNCTION, wrappedFuture);
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

      URL url = getClass().getClassLoader().getResource(JVM_NPM);
      if (url == null) {
        throw new IllegalStateException("Cannot find " + JVM_NPM + " on classpath");
      }
      try (Scanner scanner = new Scanner(url.openStream(), "UTF-8").useDelimiter("\\A")) {
        String jvmNpm = scanner.next();
        String jvmNpmPath = ClasspathFileResolver.resolveFilename(JVM_NPM);
        jvmNpm += "\n//# sourceURL=" + jvmNpmPath;
        engine.eval(jvmNpm);
      } catch (Exception e) {
        throw new IllegalStateException(e);
      }

      try {
        futureJSClass = (ScriptObjectMirror) engine.eval("require('vertx-js/future');");
        // Put the globals in
        engine.put("__jvertx", vertx);
        String globs =
          "var Vertx = require('vertx-js/vertx'); var vertx = new Vertx(__jvertx); var console = require('vertx-js/util/console');" +
          "var setTimeout = function(callback,delay) { return vertx.setTimer(delay, callback); };" +
          "var clearTimeout = function(id) { vertx.cancelTimer(id); };" +
          "var setInterval = function(callback, delay) { return vertx.setPeriodic(delay, callback); };" +
          "var clearInterval = clearTimeout;" +
          "var parent = this; var global = this;";
        engine.eval(globs);
      } catch (ScriptException e) {
        throw new IllegalStateException("Failed to eval: " + e.getMessage(), e);
      }
    }
  }

}
