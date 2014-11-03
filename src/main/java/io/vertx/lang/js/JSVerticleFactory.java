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

  private Vertx vertx;
  private ScriptEngine engine;

  @Override
  public void init(Vertx vertx) {
    this.vertx = vertx;
    init();
  }

  @Override
  public String prefix() {
    return "js";
  }

  @Override
  public Verticle createVerticle(String verticleName, ClassLoader classLoader) throws Exception {
    return new JSVerticle(VerticleFactory.removePrefix(verticleName));
  }

  public class JSVerticle extends AbstractVerticle {

    private static final String VERTX_STOP_FUNCTION = "vertxStop";

    private final String verticleName;

    private JSVerticle(String verticleName) {
      this.verticleName = verticleName;
    }

    private ScriptObjectMirror exports;

    private boolean asyncStart;
    private boolean asyncStop;
    private Future<Void> startFuture;
    private Future<Void> stopFuture;

    @Override
    public void start(Future<Void> startFuture) throws Exception {
      engine.put("__verticle", this);
      exports = (ScriptObjectMirror)engine.eval("require('" + verticleName + "');");
      if (asyncStart) {
        this.startFuture = startFuture;
      } else {
        startFuture.complete();
      }
    }

    @Override
    public void stop(Future<Void> stopFuture) throws Exception {
      if (!exports.getMember(VERTX_STOP_FUNCTION).toString().equals("undefined")) {
        exports.callMember(VERTX_STOP_FUNCTION);
        if (asyncStop) {
          this.stopFuture = stopFuture;
        } else {
          stopFuture.complete();
        }
      } else {
        stopFuture.complete();
      }
    }

    // TODO - tests for this!
    public void started(boolean started) {
      if (startFuture != null) {
        if (started) {
          startFuture.complete();
        }
      } else if (!started) {
        asyncStart = true;
      }
    }

    public void stopped(boolean stopped) {
      if (stopFuture != null) {
        if (stopped) {
          stopFuture.complete();
        }
      } else if (!stopped) {
        asyncStop = true;
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
      URL url = getClass().getClassLoader().getResource("vertx-js/util/require.js");
      if (url == null) {
        throw new IllegalStateException("Cannot find vertx/util/require.js on classpath");
      }
      try (Scanner scanner = new Scanner(url.openStream(), "UTF-8").useDelimiter("\\A")) {
        String requireJS = scanner.next();
        engine.put(ScriptEngine.FILENAME, "require.js");
        engine.eval(requireJS);
      } catch (Exception e) {
        throw new IllegalStateException("Failed to load vertx/require.js", e);
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
        engine.eval("var parent = this;");
      } catch (ScriptException e) {
        throw new IllegalStateException("Failed to eval: " + e.getMessage(), e);
      }
    }
  }

}
