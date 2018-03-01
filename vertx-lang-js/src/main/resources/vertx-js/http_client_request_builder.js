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

/** @module vertx-js/http_client_request_builder */
var utils = require('vertx-js/util/utils');
var HttpClientResponse = require('vertx-js/http_client_response');
var Buffer = require('vertx-js/buffer');
var ReadStream = require('vertx-js/read_stream');
var HttpClientResponseBuilder = require('vertx-js/http_client_response_builder');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JHttpClientRequestBuilder = io.vertx.core.http.HttpClientRequestBuilder;

/**

 @class
*/
var HttpClientRequestBuilder = function(j_val) {

  var j_httpClientRequestBuilder = j_val;
  var that = this;

  /**

   @public
   @param method {Object} 
   @return {HttpClientRequestBuilder}
   */
  this.method = function(method) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequestBuilder, j_httpClientRequestBuilder["method(io.vertx.core.http.HttpMethod)"](io.vertx.core.http.HttpMethod.valueOf(method)));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param port {number} 
   @return {HttpClientRequestBuilder}
   */
  this.port = function(port) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return utils.convReturnVertxGen(HttpClientRequestBuilder, j_httpClientRequestBuilder["port(int)"](port));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param host {string} 
   @return {HttpClientRequestBuilder}
   */
  this.host = function(host) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequestBuilder, j_httpClientRequestBuilder["host(java.lang.String)"](host));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param requestURI {string} 
   @return {HttpClientRequestBuilder}
   */
  this.requestURI = function(requestURI) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequestBuilder, j_httpClientRequestBuilder["requestURI(java.lang.String)"](requestURI));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param name {string} 
   @param value {string} 
   @return {HttpClientRequestBuilder}
   */
  this.putHeader = function(name, value) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return utils.convReturnVertxGen(HttpClientRequestBuilder, j_httpClientRequestBuilder["putHeader(java.lang.String,java.lang.String)"](name, value));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param stream {ReadStream} 
   @param handler {function} 
   */
  this.send = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_httpClientRequestBuilder["send(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        __args[0](utils.convReturnVertxGen(HttpClientResponse, ar.result()), null);
      } else {
        __args[0](null, ar.cause());
      }
    });
    }  else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      j_httpClientRequestBuilder["send(io.vertx.core.streams.ReadStream,io.vertx.core.Handler)"](__args[0]._jdel, function(ar) {
      if (ar.succeeded()) {
        __args[1](utils.convReturnVertxGen(HttpClientResponse, ar.result()), null);
      } else {
        __args[1](null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {HttpClientResponseBuilder}
   */
  this.bufferBody = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(HttpClientResponseBuilder, j_httpClientRequestBuilder["bufferBody()"](), Buffer._jtype);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_httpClientRequestBuilder;
};

HttpClientRequestBuilder._jclass = utils.getJavaClass("io.vertx.core.http.HttpClientRequestBuilder");
HttpClientRequestBuilder._jtype = {
  accept: function(obj) {
    return HttpClientRequestBuilder._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(HttpClientRequestBuilder.prototype, {});
    HttpClientRequestBuilder.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
HttpClientRequestBuilder._create = function(jdel) {
  var obj = Object.create(HttpClientRequestBuilder.prototype, {});
  HttpClientRequestBuilder.apply(obj, arguments);
  return obj;
}
module.exports = HttpClientRequestBuilder;