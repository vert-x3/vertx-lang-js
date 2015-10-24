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

/** @module testmodel-js/nullable_tck */
var utils = require('vertx-js/util/utils');
var RefedInterface1 = require('testmodel-js/refed_interface1');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JNullableTCK = io.vertx.codegen.testmodel.NullableTCK;
var TestDataObject = io.vertx.codegen.testmodel.TestDataObject;

/**

 @class
*/
var NullableTCK = function(j_val) {

  var j_nullableTCK = j_val;
  var that = this;

  /**

   @public
   @param param {number} 
   @return {boolean}
   */
  this.methodWithNonNullableByteParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_nullableTCK["methodWithNonNullableByteParam(java.lang.Byte)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {number} 
   */
  this.methodWithNullableByteParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && (typeof __args[1] ==='number' || __args[1] == null)) {
      j_nullableTCK["methodWithNullableByteParam(boolean,java.lang.Byte)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableByteHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableByteHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableByteHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableByteHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {number}
   */
  this.methodWithNullableByteReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_nullableTCK["methodWithNullableByteReturn(boolean)"](notNull);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {number} 
   @return {boolean}
   */
  this.methodWithNonNullableShortParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_nullableTCK["methodWithNonNullableShortParam(java.lang.Short)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {number} 
   */
  this.methodWithNullableShortParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && (typeof __args[1] ==='number' || __args[1] == null)) {
      j_nullableTCK["methodWithNullableShortParam(boolean,java.lang.Short)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableShortHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableShortHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableShortHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableShortHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {number}
   */
  this.methodWithNullableShortReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_nullableTCK["methodWithNullableShortReturn(boolean)"](notNull);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {number} 
   @return {boolean}
   */
  this.methodWithNonNullableIntegerParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_nullableTCK["methodWithNonNullableIntegerParam(java.lang.Integer)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {number} 
   */
  this.methodWithNullableIntegerParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && (typeof __args[1] ==='number' || __args[1] == null)) {
      j_nullableTCK["methodWithNullableIntegerParam(boolean,java.lang.Integer)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableIntegerHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableIntegerHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableIntegerHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableIntegerHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {number}
   */
  this.methodWithNullableIntegerReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_nullableTCK["methodWithNullableIntegerReturn(boolean)"](notNull);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {number} 
   @return {boolean}
   */
  this.methodWithNonNullableLongParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_nullableTCK["methodWithNonNullableLongParam(java.lang.Long)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {number} 
   */
  this.methodWithNullableLongParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && (typeof __args[1] ==='number' || __args[1] == null)) {
      j_nullableTCK["methodWithNullableLongParam(boolean,java.lang.Long)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableLongHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableLongHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableLongHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableLongHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {number}
   */
  this.methodWithNullableLongReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_nullableTCK["methodWithNullableLongReturn(boolean)"](notNull);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {number} 
   @return {boolean}
   */
  this.methodWithNonNullableFloatParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_nullableTCK["methodWithNonNullableFloatParam(java.lang.Float)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {number} 
   */
  this.methodWithNullableFloatParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && (typeof __args[1] ==='number' || __args[1] == null)) {
      j_nullableTCK["methodWithNullableFloatParam(boolean,java.lang.Float)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableFloatHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableFloatHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableFloatHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableFloatHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {number}
   */
  this.methodWithNullableFloatReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_nullableTCK["methodWithNullableFloatReturn(boolean)"](notNull);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {number} 
   @return {boolean}
   */
  this.methodWithNonNullableDoubleParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_nullableTCK["methodWithNonNullableDoubleParam(java.lang.Double)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {number} 
   */
  this.methodWithNullableDoubleParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && (typeof __args[1] ==='number' || __args[1] == null)) {
      j_nullableTCK["methodWithNullableDoubleParam(boolean,java.lang.Double)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableDoubleHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableDoubleHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableDoubleHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableDoubleHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {number}
   */
  this.methodWithNullableDoubleReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_nullableTCK["methodWithNullableDoubleReturn(boolean)"](notNull);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {boolean} 
   @return {boolean}
   */
  this.methodWithNonNullableBooleanParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_nullableTCK["methodWithNonNullableBooleanParam(java.lang.Boolean)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {boolean} 
   */
  this.methodWithNullableBooleanParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && (typeof __args[1] ==='boolean' || __args[1] == null)) {
      j_nullableTCK["methodWithNullableBooleanParam(boolean,java.lang.Boolean)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableBooleanHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableBooleanHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableBooleanHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableBooleanHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {boolean}
   */
  this.methodWithNullableBooleanReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_nullableTCK["methodWithNullableBooleanReturn(boolean)"](notNull);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {string} 
   @return {boolean}
   */
  this.methodWithNonNullableStringParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_nullableTCK["methodWithNonNullableStringParam(java.lang.String)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {string} 
   */
  this.methodWithNullableStringParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && (typeof __args[1] === 'string' || __args[1] == null)) {
      j_nullableTCK["methodWithNullableStringParam(boolean,java.lang.String)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableStringHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableStringHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableStringHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableStringHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {string}
   */
  this.methodWithNullableStringReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_nullableTCK["methodWithNullableStringReturn(boolean)"](notNull);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {string} 
   @return {boolean}
   */
  this.methodWithNonNullableCharParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='string') {
      return j_nullableTCK["methodWithNonNullableCharParam(java.lang.Character)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {string} 
   */
  this.methodWithNullableCharParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && (typeof __args[1] ==='string' || __args[1] == null)) {
      j_nullableTCK["methodWithNullableCharParam(boolean,java.lang.Character)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableCharHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableCharHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableCharHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableCharHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {string}
   */
  this.methodWithNullableCharReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_nullableTCK["methodWithNullableCharReturn(boolean)"](notNull);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Object} 
   @return {boolean}
   */
  this.methodWithNonNullableJsonObjectParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_nullableTCK["methodWithNonNullableJsonObjectParam(io.vertx.core.json.JsonObject)"](utils.convParamJsonObject(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Object} 
   */
  this.methodWithNullableJsonObjectParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object') {
      j_nullableTCK["methodWithNullableJsonObjectParam(boolean,io.vertx.core.json.JsonObject)"](expectNull, utils.convParamJsonObject(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableJsonObjectHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableJsonObjectHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableJsonObjectHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableJsonObjectHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Object}
   */
  this.methodWithNullableJsonObjectReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnJson(j_nullableTCK["methodWithNullableJsonObjectReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {todo} 
   @return {boolean}
   */
  this.methodWithNonNullableJsonArrayParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableJsonArrayParam(io.vertx.core.json.JsonArray)"](utils.convParamJsonArray(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {todo} 
   */
  this.methodWithNullableJsonArrayParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableJsonArrayParam(boolean,io.vertx.core.json.JsonArray)"](expectNull, utils.convParamJsonArray(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableJsonArrayHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableJsonArrayHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableJsonArrayHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableJsonArrayHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {todo}
   */
  this.methodWithNullableJsonArrayReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnJson(j_nullableTCK["methodWithNullableJsonArrayReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {RefedInterface1} 
   @return {boolean}
   */
  this.methodWithNonNullableApiParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      return j_nullableTCK["methodWithNonNullableApiParam(io.vertx.codegen.testmodel.RefedInterface1)"](param._jdel);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {RefedInterface1} 
   */
  this.methodWithNullableApiParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] == null || __args[1]._jdel)) {
      j_nullableTCK["methodWithNullableApiParam(boolean,io.vertx.codegen.testmodel.RefedInterface1)"](expectNull, param == null ? null : param._jdel);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableApiHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableApiHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnVertxGen(jVal, RefedInterface1));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableApiHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableApiHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(ar.result(), RefedInterface1), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {RefedInterface1}
   */
  this.methodWithNullableApiReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnVertxGen(j_nullableTCK["methodWithNullableApiReturn(boolean)"](notNull), RefedInterface1);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Object} 
   @return {boolean}
   */
  this.methodWithNonNullableDataObjectParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_nullableTCK["methodWithNonNullableDataObjectParam(io.vertx.codegen.testmodel.TestDataObject)"](param != null ? new TestDataObject(new JsonObject(JSON.stringify(param))) : null);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Object} 
   */
  this.methodWithNullableDataObjectParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object') {
      j_nullableTCK["methodWithNullableDataObjectParam(boolean,io.vertx.codegen.testmodel.TestDataObject)"](expectNull, param != null ? new TestDataObject(new JsonObject(JSON.stringify(param))) : null);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableDataObjectHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableDataObjectHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnDataObject(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableDataObjectHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableDataObjectHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnDataObject(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Object}
   */
  this.methodWithNullableDataObjectReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnDataObject(j_nullableTCK["methodWithNullableDataObjectReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Object} 
   @return {boolean}
   */
  this.methodWithNonNullableEnumParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_nullableTCK["methodWithNonNullableEnumParam(io.vertx.codegen.testmodel.TestEnum)"](io.vertx.codegen.testmodel.TestEnum.valueOf(__args[0]));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Object} 
   */
  this.methodWithNullableEnumParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && (typeof __args[1] === 'string' || __args[1] == null)) {
      j_nullableTCK["methodWithNullableEnumParam(boolean,io.vertx.codegen.testmodel.TestEnum)"](expectNull, __args[1] == null ? null : io.vertx.codegen.testmodel.TestEnum.valueOf(__args[1]));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableEnumHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableEnumHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnEnum(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableEnumHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableEnumHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnEnum(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Object}
   */
  this.methodWithNullableEnumReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnEnum(j_nullableTCK["methodWithNullableEnumReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Object} 
   @return {boolean}
   */
  this.methodWithNonNullableGenEnumParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_nullableTCK["methodWithNonNullableGenEnumParam(io.vertx.codegen.testmodel.TestGenEnum)"](io.vertx.codegen.testmodel.TestGenEnum.valueOf(__args[0]));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Object} 
   */
  this.methodWithNullableGenEnumParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && (typeof __args[1] === 'string' || __args[1] == null)) {
      j_nullableTCK["methodWithNullableGenEnumParam(boolean,io.vertx.codegen.testmodel.TestGenEnum)"](expectNull, __args[1] == null ? null : io.vertx.codegen.testmodel.TestGenEnum.valueOf(__args[1]));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableGenEnumHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableGenEnumHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnEnum(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableGenEnumHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableGenEnumHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnEnum(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Object}
   */
  this.methodWithNullableGenEnumReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnEnum(j_nullableTCK["methodWithNullableGenEnumReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Object} 
   */
  this.methodWithNullableTypeVariableParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && true) {
      j_nullableTCK["methodWithNullableTypeVariableParam(boolean,java.lang.Object)"](expectNull, utils.convParamTypeUnknown(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param value {Object} 
   @param handler {function} 
   */
  this.methodWithNullableTypeVariableHandler = function(notNull, value, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] ==='boolean' && true && typeof __args[2] === 'function') {
      j_nullableTCK["methodWithNullableTypeVariableHandler(boolean,java.lang.Object,io.vertx.core.Handler)"](notNull, utils.convParamTypeUnknown(value), function(jVal) {
      handler(utils.convReturnTypeUnknown(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param value {Object} 
   @param handler {function} 
   */
  this.methodWithNullableTypeVariableHandlerAsyncResult = function(notNull, value, handler) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] ==='boolean' && true && typeof __args[2] === 'function') {
      j_nullableTCK["methodWithNullableTypeVariableHandlerAsyncResult(boolean,java.lang.Object,io.vertx.core.Handler)"](notNull, utils.convParamTypeUnknown(value), function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnTypeUnknown(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param value {Object} 
   @return {Object}
   */
  this.methodWithNullableTypeVariableReturn = function(notNull, value) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && true) {
      return utils.convReturnTypeUnknown(j_nullableTCK["methodWithNullableTypeVariableReturn(boolean,java.lang.Object)"](notNull, utils.convParamTypeUnknown(value)));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   @return {boolean}
   */
  this.methodWithNonNullableListByteParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableListByteParam(java.util.List)"](utils.convParamListByte(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<number>} 
   */
  this.methodWithNullableListByteParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableListByteParam(boolean,java.util.List)"](expectNull, utils.convParamListByte(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListByteHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListByteHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListByteHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListByteHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<number>}
   */
  this.methodWithNullableListByteReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_nullableTCK["methodWithNullableListByteReturn(boolean)"](notNull);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   @return {boolean}
   */
  this.methodWithNonNullableListShortParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableListShortParam(java.util.List)"](utils.convParamListShort(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<number>} 
   */
  this.methodWithNullableListShortParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableListShortParam(boolean,java.util.List)"](expectNull, utils.convParamListShort(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListShortHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListShortHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListShortHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListShortHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<number>}
   */
  this.methodWithNullableListShortReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_nullableTCK["methodWithNullableListShortReturn(boolean)"](notNull);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   @return {boolean}
   */
  this.methodWithNonNullableListIntegerParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableListIntegerParam(java.util.List)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<number>} 
   */
  this.methodWithNullableListIntegerParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableListIntegerParam(boolean,java.util.List)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListIntegerHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListIntegerHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListIntegerHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListIntegerHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<number>}
   */
  this.methodWithNullableListIntegerReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_nullableTCK["methodWithNullableListIntegerReturn(boolean)"](notNull);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   @return {boolean}
   */
  this.methodWithNonNullableListLongParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableListLongParam(java.util.List)"](utils.convParamListLong(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<number>} 
   */
  this.methodWithNullableListLongParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableListLongParam(boolean,java.util.List)"](expectNull, utils.convParamListLong(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListLongHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListLongHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListLongHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListLongHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<number>}
   */
  this.methodWithNullableListLongReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_nullableTCK["methodWithNullableListLongReturn(boolean)"](notNull);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   @return {boolean}
   */
  this.methodWithNonNullableListFloatParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableListFloatParam(java.util.List)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<number>} 
   */
  this.methodWithNullableListFloatParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableListFloatParam(boolean,java.util.List)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListFloatHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListFloatHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListFloatHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListFloatHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<number>}
   */
  this.methodWithNullableListFloatReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_nullableTCK["methodWithNullableListFloatReturn(boolean)"](notNull);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   @return {boolean}
   */
  this.methodWithNonNullableListDoubleParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableListDoubleParam(java.util.List)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<number>} 
   */
  this.methodWithNullableListDoubleParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableListDoubleParam(boolean,java.util.List)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListDoubleHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListDoubleHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListDoubleHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListDoubleHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<number>}
   */
  this.methodWithNullableListDoubleReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_nullableTCK["methodWithNullableListDoubleReturn(boolean)"](notNull);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<boolean>} 
   @return {boolean}
   */
  this.methodWithNonNullableListBooleanParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableListBooleanParam(java.util.List)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<boolean>} 
   */
  this.methodWithNullableListBooleanParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableListBooleanParam(boolean,java.util.List)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListBooleanHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListBooleanHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListBooleanHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListBooleanHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<boolean>}
   */
  this.methodWithNullableListBooleanReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_nullableTCK["methodWithNullableListBooleanReturn(boolean)"](notNull);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   @return {boolean}
   */
  this.methodWithNonNullableListStringParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableListStringParam(java.util.List)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<string>} 
   */
  this.methodWithNullableListStringParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableListStringParam(boolean,java.util.List)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListStringHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListStringHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListStringHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListStringHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<string>}
   */
  this.methodWithNullableListStringReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_nullableTCK["methodWithNullableListStringReturn(boolean)"](notNull);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   @return {boolean}
   */
  this.methodWithNonNullableListCharParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableListCharParam(java.util.List)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<string>} 
   */
  this.methodWithNullableListCharParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableListCharParam(boolean,java.util.List)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListCharHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListCharHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListCharHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListCharHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<string>}
   */
  this.methodWithNullableListCharReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return j_nullableTCK["methodWithNullableListCharReturn(boolean)"](notNull);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<Object>} 
   @return {boolean}
   */
  this.methodWithNonNullableListJsonObjectParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableListJsonObjectParam(java.util.List)"](utils.convParamListJsonObject(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<Object>} 
   */
  this.methodWithNullableListJsonObjectParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableListJsonObjectParam(boolean,java.util.List)"](expectNull, utils.convParamListJsonObject(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListJsonObjectHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListJsonObjectHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnListSetJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListJsonObjectHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListJsonObjectHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<Object>}
   */
  this.methodWithNullableListJsonObjectReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnListSetJson(j_nullableTCK["methodWithNullableListJsonObjectReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<todo>} 
   @return {boolean}
   */
  this.methodWithNonNullableListJsonArrayParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableListJsonArrayParam(java.util.List)"](utils.convParamListJsonArray(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<todo>} 
   */
  this.methodWithNullableListJsonArrayParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableListJsonArrayParam(boolean,java.util.List)"](expectNull, utils.convParamListJsonArray(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListJsonArrayHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListJsonArrayHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnListSetJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListJsonArrayHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListJsonArrayHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<todo>}
   */
  this.methodWithNullableListJsonArrayReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnListSetJson(j_nullableTCK["methodWithNullableListJsonArrayReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<RefedInterface1>} 
   @return {boolean}
   */
  this.methodWithNonNullableListApiParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableListApiParam(java.util.List)"](utils.convParamListVertxGen(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<RefedInterface1>} 
   */
  this.methodWithNullableListApiParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableListApiParam(boolean,java.util.List)"](expectNull, utils.convParamListVertxGen(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListApiHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListApiHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnListSetVertxGen(jVal, RefedInterface1));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListApiHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListApiHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetVertxGen(ar.result(), RefedInterface1), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<RefedInterface1>}
   */
  this.methodWithNullableListApiReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnListSetVertxGen(j_nullableTCK["methodWithNullableListApiReturn(boolean)"](notNull), RefedInterface1);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<Object>} 
   @return {boolean}
   */
  this.methodWithNonNullableListDataObjectParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableListDataObjectParam(java.util.List)"](utils.convParamListDataObject(param, function(json) { return new TestDataObject(json); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<Object>} 
   */
  this.methodWithNullableListDataObjectParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableListDataObjectParam(boolean,java.util.List)"](expectNull, utils.convParamListDataObject(param, function(json) { return new TestDataObject(json); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListDataObjectHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListDataObjectHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnListSetDataObject(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListDataObjectHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListDataObjectHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetDataObject(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<Object>}
   */
  this.methodWithNullableListDataObjectReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnListSetDataObject(j_nullableTCK["methodWithNullableListDataObjectReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<Object>} 
   @return {boolean}
   */
  this.methodWithNonNullableListEnumParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableListEnumParam(java.util.List)"](utils.convParamListEnum(param, function(val) { return Packages.io.vertx.codegen.testmodel.TestEnum.valueOf(val); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<Object>} 
   */
  this.methodWithNullableListEnumParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableListEnumParam(boolean,java.util.List)"](expectNull, utils.convParamListEnum(param, function(val) { return Packages.io.vertx.codegen.testmodel.TestEnum.valueOf(val); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListEnumHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListEnumHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnListSetEnum(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListEnumHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListEnumHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetEnum(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<Object>}
   */
  this.methodWithNullableListEnumReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnListSetEnum(j_nullableTCK["methodWithNullableListEnumReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<Object>} 
   @return {boolean}
   */
  this.methodWithNonNullableListGenEnumParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableListGenEnumParam(java.util.List)"](utils.convParamListEnum(param, function(val) { return Packages.io.vertx.codegen.testmodel.TestGenEnum.valueOf(val); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<Object>} 
   */
  this.methodWithNullableListGenEnumParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableListGenEnumParam(boolean,java.util.List)"](expectNull, utils.convParamListEnum(param, function(val) { return Packages.io.vertx.codegen.testmodel.TestGenEnum.valueOf(val); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListGenEnumHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListGenEnumHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnListSetEnum(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableListGenEnumHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableListGenEnumHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetEnum(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<Object>}
   */
  this.methodWithNullableListGenEnumReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnListSetEnum(j_nullableTCK["methodWithNullableListGenEnumReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   @return {boolean}
   */
  this.methodWithNonNullableSetByteParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableSetByteParam(java.util.Set)"](utils.convParamSetByte(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<number>} 
   */
  this.methodWithNullableSetByteParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableSetByteParam(boolean,java.util.Set)"](expectNull, utils.convParamSetByte(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetByteHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetByteHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnSet(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetByteHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetByteHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<number>}
   */
  this.methodWithNullableSetByteReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnSet(j_nullableTCK["methodWithNullableSetByteReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   @return {boolean}
   */
  this.methodWithNonNullableSetShortParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableSetShortParam(java.util.Set)"](utils.convParamSetShort(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<number>} 
   */
  this.methodWithNullableSetShortParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableSetShortParam(boolean,java.util.Set)"](expectNull, utils.convParamSetShort(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetShortHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetShortHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnSet(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetShortHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetShortHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<number>}
   */
  this.methodWithNullableSetShortReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnSet(j_nullableTCK["methodWithNullableSetShortReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   @return {boolean}
   */
  this.methodWithNonNullableSetIntegerParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableSetIntegerParam(java.util.Set)"](utils.convParamSetBasicOther(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<number>} 
   */
  this.methodWithNullableSetIntegerParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableSetIntegerParam(boolean,java.util.Set)"](expectNull, param == null ? null : utils.convParamSetBasicOther(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetIntegerHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetIntegerHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnSet(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetIntegerHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetIntegerHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<number>}
   */
  this.methodWithNullableSetIntegerReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnSet(j_nullableTCK["methodWithNullableSetIntegerReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   @return {boolean}
   */
  this.methodWithNonNullableSetLongParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableSetLongParam(java.util.Set)"](utils.convParamSetLong(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<number>} 
   */
  this.methodWithNullableSetLongParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableSetLongParam(boolean,java.util.Set)"](expectNull, utils.convParamSetLong(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetLongHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetLongHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnSet(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetLongHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetLongHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<number>}
   */
  this.methodWithNullableSetLongReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnSet(j_nullableTCK["methodWithNullableSetLongReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   @return {boolean}
   */
  this.methodWithNonNullableSetFloatParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableSetFloatParam(java.util.Set)"](utils.convParamSetBasicOther(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<number>} 
   */
  this.methodWithNullableSetFloatParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableSetFloatParam(boolean,java.util.Set)"](expectNull, param == null ? null : utils.convParamSetBasicOther(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetFloatHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetFloatHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnSet(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetFloatHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetFloatHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<number>}
   */
  this.methodWithNullableSetFloatReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnSet(j_nullableTCK["methodWithNullableSetFloatReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   @return {boolean}
   */
  this.methodWithNonNullableSetDoubleParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableSetDoubleParam(java.util.Set)"](utils.convParamSetBasicOther(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<number>} 
   */
  this.methodWithNullableSetDoubleParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableSetDoubleParam(boolean,java.util.Set)"](expectNull, param == null ? null : utils.convParamSetBasicOther(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetDoubleHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetDoubleHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnSet(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetDoubleHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetDoubleHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<number>}
   */
  this.methodWithNullableSetDoubleReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnSet(j_nullableTCK["methodWithNullableSetDoubleReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<boolean>} 
   @return {boolean}
   */
  this.methodWithNonNullableSetBooleanParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableSetBooleanParam(java.util.Set)"](utils.convParamSetBasicOther(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<boolean>} 
   */
  this.methodWithNullableSetBooleanParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableSetBooleanParam(boolean,java.util.Set)"](expectNull, param == null ? null : utils.convParamSetBasicOther(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetBooleanHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetBooleanHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnSet(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetBooleanHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetBooleanHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<boolean>}
   */
  this.methodWithNullableSetBooleanReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnSet(j_nullableTCK["methodWithNullableSetBooleanReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   @return {boolean}
   */
  this.methodWithNonNullableSetStringParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableSetStringParam(java.util.Set)"](utils.convParamSetBasicOther(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<string>} 
   */
  this.methodWithNullableSetStringParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableSetStringParam(boolean,java.util.Set)"](expectNull, param == null ? null : utils.convParamSetBasicOther(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetStringHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetStringHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnSet(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetStringHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetStringHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<string>}
   */
  this.methodWithNullableSetStringReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnSet(j_nullableTCK["methodWithNullableSetStringReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   @return {boolean}
   */
  this.methodWithNonNullableSetCharParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableSetCharParam(java.util.Set)"](utils.convParamSetBasicOther(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<string>} 
   */
  this.methodWithNullableSetCharParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableSetCharParam(boolean,java.util.Set)"](expectNull, param == null ? null : utils.convParamSetBasicOther(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetCharHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetCharHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnSet(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetCharHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetCharHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<string>}
   */
  this.methodWithNullableSetCharReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnSet(j_nullableTCK["methodWithNullableSetCharReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<Object>} 
   @return {boolean}
   */
  this.methodWithNonNullableSetJsonObjectParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableSetJsonObjectParam(java.util.Set)"](utils.convParamSetJsonObject(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<Object>} 
   */
  this.methodWithNullableSetJsonObjectParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableSetJsonObjectParam(boolean,java.util.Set)"](expectNull, utils.convParamSetJsonObject(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetJsonObjectHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetJsonObjectHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnListSetJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetJsonObjectHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetJsonObjectHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<Object>}
   */
  this.methodWithNullableSetJsonObjectReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnListSetJson(j_nullableTCK["methodWithNullableSetJsonObjectReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<todo>} 
   @return {boolean}
   */
  this.methodWithNonNullableSetJsonArrayParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableSetJsonArrayParam(java.util.Set)"](utils.convParamSetJsonArray(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<todo>} 
   */
  this.methodWithNullableSetJsonArrayParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableSetJsonArrayParam(boolean,java.util.Set)"](expectNull, utils.convParamSetJsonArray(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetJsonArrayHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetJsonArrayHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnListSetJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetJsonArrayHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetJsonArrayHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<todo>}
   */
  this.methodWithNullableSetJsonArrayReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnListSetJson(j_nullableTCK["methodWithNullableSetJsonArrayReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<RefedInterface1>} 
   @return {boolean}
   */
  this.methodWithNonNullableSetApiParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableSetApiParam(java.util.Set)"](utils.convParamSetVertxGen(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<RefedInterface1>} 
   */
  this.methodWithNullableSetApiParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableSetApiParam(boolean,java.util.Set)"](expectNull, utils.convParamSetVertxGen(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetApiHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetApiHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnListSetVertxGen(jVal, RefedInterface1));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetApiHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetApiHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetVertxGen(ar.result(), RefedInterface1), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<RefedInterface1>}
   */
  this.methodWithNullableSetApiReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnListSetVertxGen(j_nullableTCK["methodWithNullableSetApiReturn(boolean)"](notNull), RefedInterface1);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<Object>} 
   @return {boolean}
   */
  this.methodWithNonNullableSetDataObjectParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableSetDataObjectParam(java.util.Set)"](utils.convParamSetDataObject(param, function(json) { return new TestDataObject(json); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<Object>} 
   */
  this.methodWithNullableSetDataObjectParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableSetDataObjectParam(boolean,java.util.Set)"](expectNull, utils.convParamSetDataObject(param, function(json) { return new TestDataObject(json); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetDataObjectHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetDataObjectHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnListSetDataObject(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetDataObjectHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetDataObjectHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetDataObject(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<Object>}
   */
  this.methodWithNullableSetDataObjectReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnListSetDataObject(j_nullableTCK["methodWithNullableSetDataObjectReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<Object>} 
   @return {boolean}
   */
  this.methodWithNonNullableSetEnumParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableSetEnumParam(java.util.Set)"](utils.convParamSetEnum(param, function(val) { return Packages.io.vertx.codegen.testmodel.TestEnum.valueOf(val); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<Object>} 
   */
  this.methodWithNullableSetEnumParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableSetEnumParam(boolean,java.util.Set)"](expectNull, utils.convParamSetEnum(param, function(val) { return Packages.io.vertx.codegen.testmodel.TestEnum.valueOf(val); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetEnumHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetEnumHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnListSetEnum(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetEnumHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetEnumHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetEnum(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<Object>}
   */
  this.methodWithNullableSetEnumReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnListSetEnum(j_nullableTCK["methodWithNullableSetEnumReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<Object>} 
   @return {boolean}
   */
  this.methodWithNonNullableSetGenEnumParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return j_nullableTCK["methodWithNonNullableSetGenEnumParam(java.util.Set)"](utils.convParamSetEnum(param, function(val) { return Packages.io.vertx.codegen.testmodel.TestGenEnum.valueOf(val); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<Object>} 
   */
  this.methodWithNullableSetGenEnumParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object' && (__args[1] instanceof Array || __args[1] == null)) {
      j_nullableTCK["methodWithNullableSetGenEnumParam(boolean,java.util.Set)"](expectNull, utils.convParamSetEnum(param, function(val) { return Packages.io.vertx.codegen.testmodel.TestGenEnum.valueOf(val); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetGenEnumHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetGenEnumHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnListSetEnum(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableSetGenEnumHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableSetGenEnumHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetEnum(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<Object>}
   */
  this.methodWithNullableSetGenEnumReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnListSetEnum(j_nullableTCK["methodWithNullableSetGenEnumReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   @return {boolean}
   */
  this.methodWithNonNullableMapByteParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_nullableTCK["methodWithNonNullableMapByteParam(java.util.Map)"](utils.convParamMapByte(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<string>} 
   */
  this.methodWithNullableMapByteParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object') {
      j_nullableTCK["methodWithNullableMapByteParam(boolean,java.util.Map)"](expectNull, utils.convParamMapByte(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapByteHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapByteHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapByteHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapByteHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<string>}
   */
  this.methodWithNullableMapByteReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnMap(j_nullableTCK["methodWithNullableMapByteReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   @return {boolean}
   */
  this.methodWithNonNullableMapShortParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_nullableTCK["methodWithNonNullableMapShortParam(java.util.Map)"](utils.convParamMapShort(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<string>} 
   */
  this.methodWithNullableMapShortParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object') {
      j_nullableTCK["methodWithNullableMapShortParam(boolean,java.util.Map)"](expectNull, utils.convParamMapShort(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapShortHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapShortHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapShortHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapShortHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<string>}
   */
  this.methodWithNullableMapShortReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnMap(j_nullableTCK["methodWithNullableMapShortReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   @return {boolean}
   */
  this.methodWithNonNullableMapIntegerParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_nullableTCK["methodWithNonNullableMapIntegerParam(java.util.Map)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<string>} 
   */
  this.methodWithNullableMapIntegerParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object') {
      j_nullableTCK["methodWithNullableMapIntegerParam(boolean,java.util.Map)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapIntegerHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapIntegerHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapIntegerHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapIntegerHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<string>}
   */
  this.methodWithNullableMapIntegerReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnMap(j_nullableTCK["methodWithNullableMapIntegerReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   @return {boolean}
   */
  this.methodWithNonNullableMapLongParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_nullableTCK["methodWithNonNullableMapLongParam(java.util.Map)"](utils.convParamMapLong(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<string>} 
   */
  this.methodWithNullableMapLongParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object') {
      j_nullableTCK["methodWithNullableMapLongParam(boolean,java.util.Map)"](expectNull, utils.convParamMapLong(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapLongHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapLongHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapLongHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapLongHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<string>}
   */
  this.methodWithNullableMapLongReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnMap(j_nullableTCK["methodWithNullableMapLongReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   @return {boolean}
   */
  this.methodWithNonNullableMapFloatParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_nullableTCK["methodWithNonNullableMapFloatParam(java.util.Map)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<string>} 
   */
  this.methodWithNullableMapFloatParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object') {
      j_nullableTCK["methodWithNullableMapFloatParam(boolean,java.util.Map)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapFloatHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapFloatHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapFloatHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapFloatHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<string>}
   */
  this.methodWithNullableMapFloatReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnMap(j_nullableTCK["methodWithNullableMapFloatReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   @return {boolean}
   */
  this.methodWithNonNullableMapDoubleParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_nullableTCK["methodWithNonNullableMapDoubleParam(java.util.Map)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<string>} 
   */
  this.methodWithNullableMapDoubleParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object') {
      j_nullableTCK["methodWithNullableMapDoubleParam(boolean,java.util.Map)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapDoubleHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapDoubleHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapDoubleHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapDoubleHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<string>}
   */
  this.methodWithNullableMapDoubleReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnMap(j_nullableTCK["methodWithNullableMapDoubleReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   @return {boolean}
   */
  this.methodWithNonNullableMapBooleanParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_nullableTCK["methodWithNonNullableMapBooleanParam(java.util.Map)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<string>} 
   */
  this.methodWithNullableMapBooleanParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object') {
      j_nullableTCK["methodWithNullableMapBooleanParam(boolean,java.util.Map)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapBooleanHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapBooleanHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapBooleanHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapBooleanHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<string>}
   */
  this.methodWithNullableMapBooleanReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnMap(j_nullableTCK["methodWithNullableMapBooleanReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   @return {boolean}
   */
  this.methodWithNonNullableMapStringParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_nullableTCK["methodWithNonNullableMapStringParam(java.util.Map)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<string>} 
   */
  this.methodWithNullableMapStringParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object') {
      j_nullableTCK["methodWithNullableMapStringParam(boolean,java.util.Map)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapStringHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapStringHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapStringHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapStringHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<string>}
   */
  this.methodWithNullableMapStringReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnMap(j_nullableTCK["methodWithNullableMapStringReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   @return {boolean}
   */
  this.methodWithNonNullableMapCharParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_nullableTCK["methodWithNonNullableMapCharParam(java.util.Map)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<string>} 
   */
  this.methodWithNullableMapCharParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object') {
      j_nullableTCK["methodWithNullableMapCharParam(boolean,java.util.Map)"](expectNull, param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapCharHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapCharHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapCharHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapCharHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<string>}
   */
  this.methodWithNullableMapCharReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnMap(j_nullableTCK["methodWithNullableMapCharReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   @return {boolean}
   */
  this.methodWithNonNullableMapJsonObjectParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_nullableTCK["methodWithNonNullableMapJsonObjectParam(java.util.Map)"](utils.convParamMapJsonObject(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<string>} 
   */
  this.methodWithNullableMapJsonObjectParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object') {
      j_nullableTCK["methodWithNullableMapJsonObjectParam(boolean,java.util.Map)"](expectNull, utils.convParamMapJsonObject(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapJsonObjectHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapJsonObjectHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapJsonObjectHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapJsonObjectHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<string>}
   */
  this.methodWithNullableMapJsonObjectReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnMap(j_nullableTCK["methodWithNullableMapJsonObjectReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   @return {boolean}
   */
  this.methodWithNonNullableMapJsonArrayParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_nullableTCK["methodWithNonNullableMapJsonArrayParam(java.util.Map)"](utils.convParamMapJsonArray(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<string>} 
   */
  this.methodWithNullableMapJsonArrayParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object') {
      j_nullableTCK["methodWithNullableMapJsonArrayParam(boolean,java.util.Map)"](expectNull, utils.convParamMapJsonArray(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapJsonArrayHandler = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapJsonArrayHandler(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableMapJsonArrayHandlerAsyncResult = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_nullableTCK["methodWithNullableMapJsonArrayHandlerAsyncResult(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {Array.<string>}
   */
  this.methodWithNullableMapJsonArrayReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnMap(j_nullableTCK["methodWithNullableMapJsonArrayReturn(boolean)"](notNull));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   @return {boolean}
   */
  this.methodWithNonNullableMapApiParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_nullableTCK["methodWithNonNullableMapApiParam(java.util.Map)"](utils.convParamMapVertxGen(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param param {Array.<string>} 
   */
  this.methodWithNullableMapApiParam = function(expectNull, param) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'object') {
      j_nullableTCK["methodWithNullableMapApiParam(boolean,java.util.Map)"](expectNull, utils.convParamMapVertxGen(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   */
  this.methodWithListNullableByteParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithListNullableByteParam(java.util.List)"](utils.convParamListByte(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableByteHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableByteHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableByteHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableByteHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<number>}
   */
  this.methodWithListNullableByteReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_nullableTCK["methodWithListNullableByteReturn()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   */
  this.methodWithListNullableShortParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithListNullableShortParam(java.util.List)"](utils.convParamListShort(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableShortHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableShortHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableShortHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableShortHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<number>}
   */
  this.methodWithListNullableShortReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_nullableTCK["methodWithListNullableShortReturn()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   */
  this.methodWithListNullableIntegerParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithListNullableIntegerParam(java.util.List)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableIntegerHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableIntegerHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableIntegerHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableIntegerHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<number>}
   */
  this.methodWithListNullableIntegerReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_nullableTCK["methodWithListNullableIntegerReturn()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   */
  this.methodWithListNullableLongParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithListNullableLongParam(java.util.List)"](utils.convParamListLong(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableLongHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableLongHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableLongHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableLongHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<number>}
   */
  this.methodWithListNullableLongReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_nullableTCK["methodWithListNullableLongReturn()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<boolean>} 
   */
  this.methodWithListNullableBooleanParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithListNullableBooleanParam(java.util.List)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableBooleanHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableBooleanHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableBooleanHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableBooleanHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<boolean>}
   */
  this.methodWithListNullableBooleanReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_nullableTCK["methodWithListNullableBooleanReturn()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   */
  this.methodWithListNullableFloatParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithListNullableFloatParam(java.util.List)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableFloatHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableFloatHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableFloatHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableFloatHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<number>}
   */
  this.methodWithListNullableFloatReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_nullableTCK["methodWithListNullableFloatReturn()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   */
  this.methodWithListNullableDoubleParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithListNullableDoubleParam(java.util.List)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableDoubleHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableDoubleHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableDoubleHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableDoubleHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<number>}
   */
  this.methodWithListNullableDoubleReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_nullableTCK["methodWithListNullableDoubleReturn()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   */
  this.methodWithListNullableStringParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithListNullableStringParam(java.util.List)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableStringHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableStringHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableStringHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableStringHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<string>}
   */
  this.methodWithListNullableStringReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_nullableTCK["methodWithListNullableStringReturn()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   */
  this.methodWithListNullableCharParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithListNullableCharParam(java.util.List)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableCharHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableCharHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableCharHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableCharHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<string>}
   */
  this.methodWithListNullableCharReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_nullableTCK["methodWithListNullableCharReturn()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<Object>} 
   */
  this.methodWithListNullableJsonObjectParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithListNullableJsonObjectParam(java.util.List)"](utils.convParamListJsonObject(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableJsonObjectHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableJsonObjectHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnListSetJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableJsonObjectHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableJsonObjectHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<Object>}
   */
  this.methodWithListNullableJsonObjectReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetJson(j_nullableTCK["methodWithListNullableJsonObjectReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<todo>} 
   */
  this.methodWithListNullableJsonArrayParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithListNullableJsonArrayParam(java.util.List)"](utils.convParamListJsonArray(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableJsonArrayHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableJsonArrayHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnListSetJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableJsonArrayHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableJsonArrayHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<todo>}
   */
  this.methodWithListNullableJsonArrayReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetJson(j_nullableTCK["methodWithListNullableJsonArrayReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<RefedInterface1>} 
   */
  this.methodWithListNullableApiParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithListNullableApiParam(java.util.List)"](utils.convParamListVertxGen(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableApiHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableApiHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnListSetVertxGen(jVal, RefedInterface1));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableApiHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableApiHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetVertxGen(ar.result(), RefedInterface1), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<RefedInterface1>}
   */
  this.methodWithListNullableApiReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetVertxGen(j_nullableTCK["methodWithListNullableApiReturn()"](), RefedInterface1);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<Object>} 
   */
  this.methodWithListNullableDataObjectParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithListNullableDataObjectParam(java.util.List)"](utils.convParamListDataObject(param, function(json) { return new TestDataObject(json); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableDataObjectHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableDataObjectHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnListSetDataObject(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableDataObjectHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableDataObjectHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetDataObject(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<Object>}
   */
  this.methodWithListNullableDataObjectReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetDataObject(j_nullableTCK["methodWithListNullableDataObjectReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<Object>} 
   */
  this.methodWithListNullableEnumParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithListNullableEnumParam(java.util.List)"](utils.convParamListEnum(param, function(val) { return Packages.io.vertx.codegen.testmodel.TestEnum.valueOf(val); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableEnumHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableEnumHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnListSetEnum(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableEnumHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableEnumHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetEnum(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<Object>}
   */
  this.methodWithListNullableEnumReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetEnum(j_nullableTCK["methodWithListNullableEnumReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<Object>} 
   */
  this.methodWithListNullableGenEnumParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithListNullableGenEnumParam(java.util.List)"](utils.convParamListEnum(param, function(val) { return Packages.io.vertx.codegen.testmodel.TestGenEnum.valueOf(val); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableGenEnumHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableGenEnumHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnListSetEnum(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithListNullableGenEnumHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithListNullableGenEnumHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetEnum(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<Object>}
   */
  this.methodWithListNullableGenEnumReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetEnum(j_nullableTCK["methodWithListNullableGenEnumReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   */
  this.methodWithSetNullableByteParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithSetNullableByteParam(java.util.Set)"](utils.convParamSetByte(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableByteHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableByteHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnSet(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableByteHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableByteHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<number>}
   */
  this.methodWithSetNullableByteReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnSet(j_nullableTCK["methodWithSetNullableByteReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   */
  this.methodWithSetNullableShortParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithSetNullableShortParam(java.util.Set)"](utils.convParamSetShort(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableShortHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableShortHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnSet(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableShortHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableShortHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<number>}
   */
  this.methodWithSetNullableShortReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnSet(j_nullableTCK["methodWithSetNullableShortReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   */
  this.methodWithSetNullableIntegerParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithSetNullableIntegerParam(java.util.Set)"](utils.convParamSetBasicOther(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableIntegerHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableIntegerHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnSet(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableIntegerHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableIntegerHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<number>}
   */
  this.methodWithSetNullableIntegerReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnSet(j_nullableTCK["methodWithSetNullableIntegerReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   */
  this.methodWithSetNullableLongParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithSetNullableLongParam(java.util.Set)"](utils.convParamSetLong(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableLongHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableLongHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnSet(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableLongHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableLongHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<number>}
   */
  this.methodWithSetNullableLongReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnSet(j_nullableTCK["methodWithSetNullableLongReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<boolean>} 
   */
  this.methodWithSetNullableBooleanParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithSetNullableBooleanParam(java.util.Set)"](utils.convParamSetBasicOther(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableBooleanHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableBooleanHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnSet(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableBooleanHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableBooleanHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<boolean>}
   */
  this.methodWithSetNullableBooleanReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnSet(j_nullableTCK["methodWithSetNullableBooleanReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   */
  this.methodWithSetNullableFloatParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithSetNullableFloatParam(java.util.Set)"](utils.convParamSetBasicOther(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableFloatHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableFloatHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnSet(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableFloatHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableFloatHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<number>}
   */
  this.methodWithSetNullableFloatReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnSet(j_nullableTCK["methodWithSetNullableFloatReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<number>} 
   */
  this.methodWithSetNullableDoubleParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithSetNullableDoubleParam(java.util.Set)"](utils.convParamSetBasicOther(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableDoubleHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableDoubleHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnSet(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableDoubleHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableDoubleHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<number>}
   */
  this.methodWithSetNullableDoubleReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnSet(j_nullableTCK["methodWithSetNullableDoubleReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   */
  this.methodWithSetNullableStringParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithSetNullableStringParam(java.util.Set)"](utils.convParamSetBasicOther(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableStringHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableStringHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnSet(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableStringHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableStringHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<string>}
   */
  this.methodWithSetNullableStringReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnSet(j_nullableTCK["methodWithSetNullableStringReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   */
  this.methodWithSetNullableCharParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithSetNullableCharParam(java.util.Set)"](utils.convParamSetBasicOther(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableCharHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableCharHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnSet(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableCharHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableCharHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<string>}
   */
  this.methodWithSetNullableCharReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnSet(j_nullableTCK["methodWithSetNullableCharReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<Object>} 
   */
  this.methodWithSetNullableJsonObjectParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithSetNullableJsonObjectParam(java.util.Set)"](utils.convParamSetJsonObject(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableJsonObjectHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableJsonObjectHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnListSetJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableJsonObjectHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableJsonObjectHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<Object>}
   */
  this.methodWithSetNullableJsonObjectReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetJson(j_nullableTCK["methodWithSetNullableJsonObjectReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<todo>} 
   */
  this.methodWithSetNullableJsonArrayParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithSetNullableJsonArrayParam(java.util.Set)"](utils.convParamSetJsonArray(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableJsonArrayHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableJsonArrayHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnListSetJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableJsonArrayHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableJsonArrayHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetJson(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<todo>}
   */
  this.methodWithSetNullableJsonArrayReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetJson(j_nullableTCK["methodWithSetNullableJsonArrayReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<RefedInterface1>} 
   */
  this.methodWithSetNullableApiParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithSetNullableApiParam(java.util.Set)"](utils.convParamSetVertxGen(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableApiHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableApiHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnListSetVertxGen(jVal, RefedInterface1));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableApiHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableApiHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetVertxGen(ar.result(), RefedInterface1), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<RefedInterface1>}
   */
  this.methodWithSetNullableApiReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetVertxGen(j_nullableTCK["methodWithSetNullableApiReturn()"](), RefedInterface1);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<Object>} 
   */
  this.methodWithSetNullableDataObjectParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithSetNullableDataObjectParam(java.util.Set)"](utils.convParamSetDataObject(param, function(json) { return new TestDataObject(json); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableDataObjectHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableDataObjectHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnListSetDataObject(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableDataObjectHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableDataObjectHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetDataObject(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<Object>}
   */
  this.methodWithSetNullableDataObjectReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetDataObject(j_nullableTCK["methodWithSetNullableDataObjectReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<Object>} 
   */
  this.methodWithSetNullableEnumParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithSetNullableEnumParam(java.util.Set)"](utils.convParamSetEnum(param, function(val) { return Packages.io.vertx.codegen.testmodel.TestEnum.valueOf(val); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableEnumHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableEnumHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnListSetEnum(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableEnumHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableEnumHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetEnum(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<Object>}
   */
  this.methodWithSetNullableEnumReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetEnum(j_nullableTCK["methodWithSetNullableEnumReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<Object>} 
   */
  this.methodWithSetNullableGenEnumParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_nullableTCK["methodWithSetNullableGenEnumParam(java.util.Set)"](utils.convParamSetEnum(param, function(val) { return Packages.io.vertx.codegen.testmodel.TestGenEnum.valueOf(val); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableGenEnumHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableGenEnumHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnListSetEnum(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithSetNullableGenEnumHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithSetNullableGenEnumHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnListSetEnum(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<Object>}
   */
  this.methodWithSetNullableGenEnumReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetEnum(j_nullableTCK["methodWithSetNullableGenEnumReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   */
  this.methodWithMapNullableByteParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_nullableTCK["methodWithMapNullableByteParam(java.util.Map)"](utils.convParamMapByte(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableByteHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableByteHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableByteHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableByteHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<string>}
   */
  this.methodWithMapNullableByteReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnMap(j_nullableTCK["methodWithMapNullableByteReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   */
  this.methodWithMapNullableShortParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_nullableTCK["methodWithMapNullableShortParam(java.util.Map)"](utils.convParamMapShort(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableShortHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableShortHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableShortHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableShortHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<string>}
   */
  this.methodWithMapNullableShortReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnMap(j_nullableTCK["methodWithMapNullableShortReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   */
  this.methodWithMapNullableIntegerParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_nullableTCK["methodWithMapNullableIntegerParam(java.util.Map)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableIntegerHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableIntegerHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableIntegerHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableIntegerHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<string>}
   */
  this.methodWithMapNullableIntegerReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnMap(j_nullableTCK["methodWithMapNullableIntegerReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   */
  this.methodWithMapNullableLongParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_nullableTCK["methodWithMapNullableLongParam(java.util.Map)"](utils.convParamMapLong(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableLongHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableLongHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableLongHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableLongHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<string>}
   */
  this.methodWithMapNullableLongReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnMap(j_nullableTCK["methodWithMapNullableLongReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   */
  this.methodWithMapNullableBooleanParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_nullableTCK["methodWithMapNullableBooleanParam(java.util.Map)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableBooleanHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableBooleanHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableBooleanHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableBooleanHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<string>}
   */
  this.methodWithMapNullableBooleanReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnMap(j_nullableTCK["methodWithMapNullableBooleanReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   */
  this.methodWithMapNullableFloatParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_nullableTCK["methodWithMapNullableFloatParam(java.util.Map)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableFloatHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableFloatHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableFloatHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableFloatHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<string>}
   */
  this.methodWithMapNullableFloatReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnMap(j_nullableTCK["methodWithMapNullableFloatReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   */
  this.methodWithMapNullableDoubleParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_nullableTCK["methodWithMapNullableDoubleParam(java.util.Map)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableDoubleHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableDoubleHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableDoubleHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableDoubleHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<string>}
   */
  this.methodWithMapNullableDoubleReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnMap(j_nullableTCK["methodWithMapNullableDoubleReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   */
  this.methodWithMapNullableStringParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_nullableTCK["methodWithMapNullableStringParam(java.util.Map)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableStringHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableStringHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableStringHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableStringHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<string>}
   */
  this.methodWithMapNullableStringReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnMap(j_nullableTCK["methodWithMapNullableStringReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   */
  this.methodWithMapNullableCharParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_nullableTCK["methodWithMapNullableCharParam(java.util.Map)"](param);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableCharHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableCharHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableCharHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableCharHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<string>}
   */
  this.methodWithMapNullableCharReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnMap(j_nullableTCK["methodWithMapNullableCharReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   */
  this.methodWithMapNullableJsonObjectParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_nullableTCK["methodWithMapNullableJsonObjectParam(java.util.Map)"](utils.convParamMapJsonObject(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableJsonObjectHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableJsonObjectHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableJsonObjectHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableJsonObjectHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<string>}
   */
  this.methodWithMapNullableJsonObjectReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnMap(j_nullableTCK["methodWithMapNullableJsonObjectReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   */
  this.methodWithMapNullableJsonArrayParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_nullableTCK["methodWithMapNullableJsonArrayParam(java.util.Map)"](utils.convParamMapJsonArray(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableJsonArrayHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableJsonArrayHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnMap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithMapNullableJsonArrayHandlerAsyncResult = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_nullableTCK["methodWithMapNullableJsonArrayHandlerAsyncResult(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnMap(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<string>}
   */
  this.methodWithMapNullableJsonArrayReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnMap(j_nullableTCK["methodWithMapNullableJsonArrayReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param param {Array.<string>} 
   */
  this.methodWithMapNullableApiParam = function(param) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_nullableTCK["methodWithMapNullableApiParam(java.util.Map)"](utils.convParamMapVertxGen(param));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableHandler = function(expectNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && (typeof __args[1] === 'function' || __args[1] == null)) {
      j_nullableTCK["methodWithNullableHandler(boolean,io.vertx.core.Handler)"](expectNull, handler == null ? null : function(jVal) {
      handler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expectNull {boolean} 
   @param handler {function} 
   */
  this.methodWithNullableHandlerAsyncResult = function(expectNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && (typeof __args[1] === 'function' || __args[1] == null)) {
      j_nullableTCK["methodWithNullableHandlerAsyncResult(boolean,io.vertx.core.Handler)"](expectNull, handler == null ? null : function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_nullableTCK;
};

// We export the Constructor function
module.exports = NullableTCK;