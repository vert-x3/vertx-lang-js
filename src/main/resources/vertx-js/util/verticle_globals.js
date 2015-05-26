/**
 * Sets up the context for a Verticle. All globally accessible VertX APIs are to be defined here.
 */
var Vertx = require('vertx-js/vertx');
var vertx = new Vertx(__jvertx);  // Must be provided by the context bindings
var console = require('vertx-js/util/console');
var setTimeout = function(callback,delay) { return vertx.setTimer(delay, callback); };
var clearTimeout = function(id) { vertx.cancelTimer(id); };
var setInterval = function(callback, delay) { return vertx.setPeriodic(delay, callback); };
var clearInterval = clearTimeout;
var parent = this;
var global = this;