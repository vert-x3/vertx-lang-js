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

/** @module vertx-js/http_client_response_builder */
var utils = require('vertx-js/util/utils');
var HttpResponse = require('vertx-js/http_response');
var Buffer = require('vertx-js/buffer');
var ReadStream = require('vertx-js/read_stream');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JHttpClientResponseBuilder = io.vertx.core.http.HttpClientResponseBuilder;

/**

 @class
*/
var HttpClientResponseBuilder = function(j_val, j_arg_0) {

  var j_httpClientResponseBuilder = j_val;
  var that = this;
  var j_T = typeof j_arg_0 !== 'undefined' ? j_arg_0 : utils.unknown_jtype;

  /**

   @public
   @param stream {ReadStream} 
   @param handler {function} 
   */
  this.send = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpClientResponseBuilder["send(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        __args[0](utils.convReturnVertxGen(HttpResponse, ar.result(), undefined), null);
      } else {
        __args[0](null, ar.cause());
      }
    });
    }  else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_httpClientResponseBuilder["send(io.vertx.core.streams.ReadStream,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
      if (ar.succeeded()) {
        __args[1](utils.convReturnVertxGen(HttpResponse, ar.result(), undefined), null);
      } else {
        __args[1](null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param encoding {string} 
   @return {HttpClientResponseBuilder}
   */
  this.asString = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(HttpClientResponseBuilder, j_httpClientResponseBuilder["asString()"](), undefined);
    }  else if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(HttpClientResponseBuilder, j_httpClientResponseBuilder["asString(java.lang.String)"](__args[0]), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {HttpClientResponseBuilder}
   */
  this.asJsonObject = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(HttpClientResponseBuilder, j_httpClientResponseBuilder["asJsonObject()"](), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param clazz {todo} 
   @return {HttpClientResponseBuilder}
   */
  this.as = function(clazz) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(HttpClientResponseBuilder, j_httpClientResponseBuilder["as(java.lang.Class)"](utils.get_jclass(clazz)), utils.get_jtype(clazz));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_httpClientResponseBuilder;
};

HttpClientResponseBuilder._jclass = utils.getJavaClass("io.vertx.core.http.HttpClientResponseBuilder");
HttpClientResponseBuilder._jtype = {
  accept: function(obj) {
    return HttpClientResponseBuilder._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(HttpClientResponseBuilder.prototype, {});
    HttpClientResponseBuilder.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
HttpClientResponseBuilder._create = function(jdel) {
  var obj = Object.create(HttpClientResponseBuilder.prototype, {});
  HttpClientResponseBuilder.apply(obj, arguments);
  return obj;
}
module.exports = HttpClientResponseBuilder;