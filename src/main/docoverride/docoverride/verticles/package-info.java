/*
 * Copyright 2014 Red Hat, Inc.
 *
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  and Apache License v2.0 which accompanies this distribution.
 *
 *  The Eclipse Public License is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  The Apache License v2.0 is available at
 *  http://www.opensource.org/licenses/apache2.0.php
 *
 *  You may elect to redistribute this code under either of these licenses.
 */

/**
 * === Writing Verticles
 *
 * JavaScript verticles are implemented either as http://wiki.commonjs.org/wiki/Modules/1.1[CommonJS modules] or
 * https://www.npmjs.com/[NPM] modules
 *
 * Here's an example JavaScript verticle written as a CommonJS module.
 *
 * JavaScript verticles will have the following globals pre-set as a convenience:
 *
 * * +vertx+ - A reference to the Vertx object
 * * +console+ A reference to the <<console, console>> object
 *
 * [source, javascript]
 * ----
 * // the vertx and console objects can be used directly as:
 * vertx.setPeriodic(1000, function() {
 *   console.log('Timer has fired');
 * });
 *
 * // Optional - called when verticle is undeployed
 * exports.vertxStop = function() {
 *   console.log('stop called');
 * }
 * ----
 *
 * When the verticle is deployed the body of the script will be executed.
 *
 * Optionally a `vertxStop` callback can be defined to be notified when the verticle is undeployed. Notice that such
 * a registration is made using `exports.vertxStop = function() { ...  }`.
 *
 * === The console
 *
 * In addition to the `vertx` object, JavaScript verticles have access to a `console` object that let them print
 * messages. The messages are printed on Java `System.out` and `System.err`:
 *
 * [source, javascript]
 * ----
 * console.log("hello"); // Print on System.out
 * console.warn("warning, something wrong is happening"); // Print on System.err
 * console.error("something terrible happened"); // Print on System.err
 * ----
 *
 * === Defining a start method
 *
 * By default, when your verticle is deployed, vert.x execute the body of the javascript file. However, you can
 * define a start method as follows:
 *
 * [source, javascript]
 * ----
 * exports.vertxStart = function() {
 *  console.log("This is my verticle and it is starting...");
 * }
 * ----
 *
 * As for `vertStop` seen above, the method is defined on the `exports` object.
 *
 * IMPORTANT: Even with a `vertxStart` method defined, vert.x executes the body of the file.
 *
 * === Asynchronous Verticle start and stop
 *
 * Sometimes you want to do something in your verticle start-up which takes some time and you don't want the verticle to
 * be considered deployed until that happens. For example you might want to deploy other verticles in the start method.
 *
 * You can't block waiting for the other verticles to deploy in your start method as that would break the Golden Rule.
 *
 * So how can you do this?
 *
 * The way to do it is to implement the *asynchronous* start method. This version of the method takes a `Future` object
 * as a parameter. When the method returns the verticle will *not* be considered deployed yet. Some time later, after
 * you've done everything you need to do (e.g. start other verticles), you can call complete on the Future (or fail) to
 * signal that you're done.
 *
 * Here's an example:
 *
 * [source, javascript]
 * ----
 * exports.vertxStartAsync = function(startFuture) {
 *  vertx.deployVerticle("verticle.js", function(res) {
 *    if (err) {
 *      startFuture.fail();
 *    } else {
 *      startFuture.complete();
 *    }
 *  });
 * };
 * ----
 *
 * Similarly, there is an asynchronous version of the `stop` method too. You use this if you want to do some verticle
 * cleanup that takes some time.
 *
 * [source, javascript]
 * ----
 * exports.vertxStopAsync = function(stopFuture) {
 *  obj.doSomethingThatTakesTimes(function(r, err) {
 *    if (err) {
 *      stopFuture.fail();
 *   } else {
 *      stopFuture.complete();
 *   }
 *  });
 * };
 * ----
 *
 * INFO: You don't need to manually undeploy child verticles started by a verticle, in the verticle's stop method.
 * Vert.x will automatically undeploy any child verticles when the parent is undeployed.
 */
@Document(fileName = "override/verticles.adoc")
package docoverride.verticles;

import io.vertx.docgen.Document;
