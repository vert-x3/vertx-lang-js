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
import io.vertx.core.Promise;
import io.vertx.core.Verticle;
import io.vertx.core.Vertx;
import io.vertx.core.spi.VerticleFactory;
import jdk.nashorn.api.scripting.ScriptObjectMirror;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.net.URL;
import java.util.Scanner;
import java.util.concurrent.Callable;

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class JSVerticleFactory implements VerticleFactory {

  static {
    ClasspathFileResolver.init();
  }

  /**
   * By default we will add an empty `process` global with an `env` property which contains the environment
   * variables - this allows Vert.x to work well with libraries such as React which expect to run on Node.js
   * and expect to have this global set, and which fail when it is not set.
   * To disable this then provide a system property with this name and set to any value.
   */
  public static final String DISABLE_NODEJS_PROCESS_ENV_PROP_NAME = "vertx.disableNodeJSProcessENV";

  private static final boolean ADD_NODEJS_PROCESS_ENV = System.getProperty(DISABLE_NODEJS_PROCESS_ENV_PROP_NAME) == null;

  private static final String JVM_NPM = "vertx-js/util/jvm-npm.js";

  private Vertx vertx;
  private Future<ScriptEngine> engineFuture;
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
  public void createVerticle(String verticleName, ClassLoader classLoader, Promise<Callable<Verticle>> promise) {
    synchronized (this) {
      if (engineFuture == null) {
        engineFuture = vertx.executeBlocking(p -> {
          p.complete(init());
        });
      }
    }
    Future<Callable<Verticle>> fut = engineFuture.map(
      engine -> () -> new JSVerticle(engine, VerticleFactory.removePrefix(verticleName))
    );
    fut.onComplete(promise);
  }

  public class JSVerticle extends AbstractVerticle {

    private static final String VERTX_START_FUNCTION = "vertxStart";
    private static final String VERTX_START_ASYNC_FUNCTION = "vertxStartAsync";
    private static final String VERTX_STOP_FUNCTION = "vertxStop";
    private static final String VERTX_STOP_ASYNC_FUNCTION = "vertxStopAsync";

    private final String verticleName;
    private final ScriptEngine engine;

    private JSVerticle(ScriptEngine engine, String verticleName) {
      this.engine = engine;
      this.verticleName = verticleName;
    }

    private ScriptObjectMirror exports;

    private boolean functionExists(String functionName) {
      Object som = exports.getMember(functionName);
      return som != null && !som.toString().equals("undefined");
    }

    @Override
    public void start(Promise<Void> startFuture) throws Exception {

      /*
      NOTE:
      When we deploy a verticle we use require.noCache as each verticle instance must have the module evaluated.
      Also we run verticles in JS strict mode (with "use strict") -this means they cannot declare globals
      and other restrictions. We do this for isolation.
      However when doing a normal 'require' from inside a verticle we do not use strict mode as many JavaScript
      modules are written poorly and would fail to run otherwise.
       */
      exports = (ScriptObjectMirror) engine.eval("require.noCache('" + verticleName + "', null, true);");
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
    public void stop(Promise<Void> stopFuture) throws Exception {
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

  private ScriptEngine init() {
    ScriptEngineManager mgr = new ScriptEngineManager();
    ScriptEngine engine = mgr.getEngineByName("nashorn");
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
      futureJSClass = (ScriptObjectMirror) engine.eval("require('vertx-js/promise');");
      // Put the globals in
      engine.put("__jvertx", vertx);
      String globs =
        "var Vertx = require('vertx-js/vertx'); var vertx = new Vertx(__jvertx);" +
          "var console = require('vertx-js/util/console');" +
          "var setTimeout = function(callback,delay) { return vertx.setTimer(delay, callback).doubleValue(); };" +
          "var clearTimeout = function(id) { vertx.cancelTimer(id); };" +
          "var setInterval = function(callback, delay) { return vertx.setPeriodic(delay, callback).doubleValue(); };" +
          "var clearInterval = clearTimeout;" +
          "var parent = this;" +
          "var global = this;";
      if (ADD_NODEJS_PROCESS_ENV) {
        globs += "var process = {}; process.env=java.lang.System.getenv();";
      }
      engine.eval(globs);
    } catch (ScriptException e) {
      throw new IllegalStateException("Failed to eval: " + e.getMessage(), e);
    }
    return engine;
  }

}
