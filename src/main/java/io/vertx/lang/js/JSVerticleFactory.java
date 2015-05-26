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

import javax.script.*;
import java.net.URL;
import java.util.Scanner;

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
  private static final String VERTICLE_GLOBALS = "vertx-js/util/verticle_globals.js";
  private static final String NODE_JS_PROCESS_ENV = "vertx-js/util/verticle_nodejs_process.js";

  private Vertx vertx;

  /** A single Script Engine is used for all Verticles, but each verticle is provided with its own Script Context to
   *  provide the required level of isolation between verticles. This has a very low memory overhead, good performance
   *  and good isolation.
   */
  private ScriptEngine engine;
  private ScriptContext defCtx; // the default context for the Script Engine - contains the core JS objects.

  private CompiledScript jvmNpmScriptCompiled; // a pre-compiled version of the JVM-NPM library
  private CompiledScript globalScriptCompiled; // a pre-compiled version of the VertX defined globals
  private CompiledScript nodeJSProcessScriptCompiled; // a pre-compiled version of the nodeJS Process script

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

    private ScriptObjectMirror futureJSClass;

    private SimpleScriptContext verticleScriptContext;

    private JSVerticle(String verticleName) {
      this.verticleName = verticleName;
    }

    private ScriptObjectMirror exports;

    private boolean functionExists(String functionName) {
      Object som = exports.getMember(functionName);
      return som != null && !som.toString().equals("undefined");
    }

    private void initializeScriptContext() {

      // Create a new Script Context for the Verticle (a global per verticle)
      verticleScriptContext = new SimpleScriptContext();

      // Copy the bindings from the default engine context into the verticle
      verticleScriptContext.setBindings(defCtx.getBindings( ScriptContext.ENGINE_SCOPE), ScriptContext.ENGINE_SCOPE);

      // Place the vertx object onto the context for all the 'required' functions
      Bindings bindings = new SimpleBindings();
      bindings.put("__jvertx", vertx);

      // Add the bindings to our Verticle context
      verticleScriptContext.setBindings(bindings, ScriptContext.ENGINE_SCOPE);

      try {
        // Install the JVM NPM component to the context
        jvmNpmScriptCompiled.eval(verticleScriptContext);

        // Retrieve a future object to use for the Verticle initialisation
        futureJSClass = (ScriptObjectMirror) engine.eval("require('vertx-js/future');", verticleScriptContext);

        globalScriptCompiled.eval(verticleScriptContext);

        if (ADD_NODEJS_PROCESS_ENV) {
          nodeJSProcessScriptCompiled.eval(verticleScriptContext);
        }

      } catch (ScriptException e) {
        throw new IllegalStateException("Failed to eval: " + e.getMessage(), e);
      }
    }

    @Override
    public void start(Future<Void> startFuture) throws Exception {
      vertx.executeBlocking(future -> {
        initializeScriptContext();

        try {
          exports = (ScriptObjectMirror) engine.eval("require.noCache('" + verticleName + "');", verticleScriptContext);

        } catch (Exception ex) {
          startFuture.fail(ex);
        }

        future.complete();
      }, res -> {
        if (res.succeeded()) {
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
      });
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

    ScriptEngineManager mgr = new ScriptEngineManager();
    engine = mgr.getEngineByName("nashorn");

    if (engine == null) {
      throw new IllegalStateException("Cannot find Nashorn JavaScript engine - maybe you are not running with Java 8 or later?");
    }

    // Get the default context for the script engine
    defCtx = engine.getContext();

    // Compile the JVM NPM and Global Object scripts for re-use in the Verticles
    jvmNpmScriptCompiled = compileClassPathResource(JVM_NPM);
    globalScriptCompiled = compileClassPathResource(VERTICLE_GLOBALS);

    if (ADD_NODEJS_PROCESS_ENV) {
      nodeJSProcessScriptCompiled = compileClassPathResource(NODE_JS_PROCESS_ENV);
    }
  }

  /**
   * Compiles a class path resource for later re-use from within the Scripting Engine. Currently doesn't impact Nashorn
   * execution too much, but may in the future. Means that the script needs only to be parsed once.
   *
   * @param resourceName The classpath uri to load the script from.
   * @return A compiled script which can be re-used from the Verticle Instances
   */
  private CompiledScript compileClassPathResource(String resourceName) throws IllegalStateException{
    URL resourceURL = getClass().getClassLoader().getResource(resourceName);
    if (resourceURL == null) {
      throw new IllegalStateException("Cannot find " + resourceName + " on classpath");
    }

    try (Scanner scanner = new Scanner(resourceURL.openStream(), "UTF-8").useDelimiter("\\A")) {
      String resourceBody = scanner.next();
      String resourcePath = ClasspathFileResolver.resolveFilename(resourceName);
      resourceBody += "\n//# sourceURL=" + resourcePath;

      // Compile code and return
      return ((Compilable) engine).compile(resourceBody);

    } catch (Exception e) {
      throw new IllegalStateException(e);
    }
  }

}
