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

/** @module testmodel-js/test_interface */
var utils = require('vertx-js/util/utils');
var GenericRefedInterface = require('testmodel-js/generic_refed_interface');
var RefedInterface1 = require('testmodel-js/refed_interface1');
var AbstractHandlerUserType = require('testmodel-js/abstract_handler_user_type');
var ConcreteHandlerUserType = require('testmodel-js/concrete_handler_user_type');
var ConcreteHandlerUserTypeExtension = require('testmodel-js/concrete_handler_user_type_extension');
var SuperInterface1 = require('testmodel-js/super_interface1');
var RefedInterface2 = require('testmodel-js/refed_interface2');
var SuperInterface2 = require('testmodel-js/super_interface2');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JTestInterface = io.vertx.codegen.testmodel.TestInterface;
var TestDataObject = io.vertx.codegen.testmodel.TestDataObject;

/**

 @class
*/
var TestInterface = function(j_val) {

  var j_testInterface = j_val;
  var that = this;
  SuperInterface1.call(this, j_val);
  SuperInterface2.call(this, j_val);

  /**

   @public
   @param b {number} 
   @param s {number} 
   @param i {number} 
   @param l {number} 
   @param f {number} 
   @param d {number} 
   @param bool {boolean} 
   @param ch {string} 
   @param str {string} 
   */
  this.otherSuperMethodWithBasicParams = function(b, s, i, l, f, d, bool, ch, str) {
    var __args = arguments;
    if (__args.length === 9 && typeof __args[0] ==='number' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] ==='number' && typeof __args[4] ==='number' && typeof __args[5] ==='number' && typeof __args[6] ==='boolean' && typeof __args[7] ==='string' && typeof __args[8] === 'string') {
      j_testInterface["otherSuperMethodWithBasicParams(byte,short,int,long,float,double,boolean,char,java.lang.String)"](b, s, i, l, f, d, bool, ch, str);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param b {number} 
   @param s {number} 
   @param i {number} 
   @param l {number} 
   @param f {number} 
   @param d {number} 
   @param bool {boolean} 
   @param ch {string} 
   @param str {string} 
   */
  this.superMethodWithBasicParams = function(b, s, i, l, f, d, bool, ch, str) {
    var __args = arguments;
    if (__args.length === 9 && typeof __args[0] ==='number' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] ==='number' && typeof __args[4] ==='number' && typeof __args[5] ==='number' && typeof __args[6] ==='boolean' && typeof __args[7] ==='string' && typeof __args[8] === 'string') {
      j_testInterface["superMethodWithBasicParams(byte,short,int,long,float,double,boolean,char,java.lang.String)"](b, s, i, l, f, d, bool, ch, str);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param s {string} 
   @return {number}
   */
  this.superMethodOverloadedBySubclass = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_testInterface["superMethodOverloadedBySubclass()"]();
    }  else if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_testInterface["superMethodOverloadedBySubclass(java.lang.String)"](__args[0]);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param b {number} 
   @param s {number} 
   @param i {number} 
   @param l {number} 
   @param f {number} 
   @param d {number} 
   @param bool {boolean} 
   @param ch {string} 
   @param str {string} 
   */
  this.methodWithBasicParams = function(b, s, i, l, f, d, bool, ch, str) {
    var __args = arguments;
    if (__args.length === 9 && typeof __args[0] ==='number' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] ==='number' && typeof __args[4] ==='number' && typeof __args[5] ==='number' && typeof __args[6] ==='boolean' && typeof __args[7] ==='string' && typeof __args[8] === 'string') {
      j_testInterface["methodWithBasicParams(byte,short,int,long,float,double,boolean,char,java.lang.String)"](b, s, i, l, f, d, bool, ch, str);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param b {number} 
   @param s {number} 
   @param i {number} 
   @param l {number} 
   @param f {number} 
   @param d {number} 
   @param bool {boolean} 
   @param ch {string} 
   */
  this.methodWithBasicBoxedParams = function(b, s, i, l, f, d, bool, ch) {
    var __args = arguments;
    if (__args.length === 8 && typeof __args[0] ==='number' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] ==='number' && typeof __args[4] ==='number' && typeof __args[5] ==='number' && typeof __args[6] ==='boolean' && typeof __args[7] ==='string') {
      j_testInterface["methodWithBasicBoxedParams(java.lang.Byte,java.lang.Short,java.lang.Integer,java.lang.Long,java.lang.Float,java.lang.Double,java.lang.Boolean,java.lang.Character)"](utils.convParamByte(b), utils.convParamShort(s), utils.convParamInteger(i), utils.convParamLong(l), utils.convParamFloat(f), utils.convParamDouble(d), bool, utils.convParamCharacter(ch));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param byteHandler {function} 
   @param shortHandler {function} 
   @param intHandler {function} 
   @param longHandler {function} 
   @param floatHandler {function} 
   @param doubleHandler {function} 
   @param booleanHandler {function} 
   @param charHandler {function} 
   @param stringHandler {function} 
   */
  this.methodWithHandlerBasicTypes = function(byteHandler, shortHandler, intHandler, longHandler, floatHandler, doubleHandler, booleanHandler, charHandler, stringHandler) {
    var __args = arguments;
    if (__args.length === 9 && typeof __args[0] === 'function' && typeof __args[1] === 'function' && typeof __args[2] === 'function' && typeof __args[3] === 'function' && typeof __args[4] === 'function' && typeof __args[5] === 'function' && typeof __args[6] === 'function' && typeof __args[7] === 'function' && typeof __args[8] === 'function') {
      j_testInterface["methodWithHandlerBasicTypes(io.vertx.core.Handler,io.vertx.core.Handler,io.vertx.core.Handler,io.vertx.core.Handler,io.vertx.core.Handler,io.vertx.core.Handler,io.vertx.core.Handler,io.vertx.core.Handler,io.vertx.core.Handler)"](function(jVal) {
      byteHandler(jVal);
    }, function(jVal) {
      shortHandler(jVal);
    }, function(jVal) {
      intHandler(jVal);
    }, function(jVal) {
      longHandler(utils.convReturnLong(jVal));
    }, function(jVal) {
      floatHandler(jVal);
    }, function(jVal) {
      doubleHandler(jVal);
    }, function(jVal) {
      booleanHandler(jVal);
    }, function(jVal) {
      charHandler(jVal);
    }, function(jVal) {
      stringHandler(jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expected {string} 
   @return {function}
   */
  this.methodWithHandlerStringReturn = function(expected) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnHandler(j_testInterface["methodWithHandlerStringReturn(java.lang.String)"](expected), function(result) { return result; });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {function}
   */
  this.methodWithHandlerGenericReturn = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnHandler(j_testInterface["methodWithHandlerGenericReturn(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnTypeUnknown(jVal));
    }), function(result) { return utils.convParamTypeUnknown(result); });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expected {string} 
   @return {function}
   */
  this.methodWithHandlerVertxGenReturn = function(expected) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnHandler(j_testInterface["methodWithHandlerVertxGenReturn(java.lang.String)"](expected), function(result) { return result._jdel; });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param sendFailure {boolean} 
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultByte = function(sendFailure, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_testInterface["methodWithHandlerAsyncResultByte(boolean,io.vertx.core.Handler)"](sendFailure, function(ar) {
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
   @param sendFailure {boolean} 
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultShort = function(sendFailure, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_testInterface["methodWithHandlerAsyncResultShort(boolean,io.vertx.core.Handler)"](sendFailure, function(ar) {
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
   @param sendFailure {boolean} 
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultInteger = function(sendFailure, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_testInterface["methodWithHandlerAsyncResultInteger(boolean,io.vertx.core.Handler)"](sendFailure, function(ar) {
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
   @param sendFailure {boolean} 
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultLong = function(sendFailure, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_testInterface["methodWithHandlerAsyncResultLong(boolean,io.vertx.core.Handler)"](sendFailure, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnLong(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param sendFailure {boolean} 
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultFloat = function(sendFailure, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_testInterface["methodWithHandlerAsyncResultFloat(boolean,io.vertx.core.Handler)"](sendFailure, function(ar) {
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
   @param sendFailure {boolean} 
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultDouble = function(sendFailure, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_testInterface["methodWithHandlerAsyncResultDouble(boolean,io.vertx.core.Handler)"](sendFailure, function(ar) {
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
   @param sendFailure {boolean} 
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultBoolean = function(sendFailure, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_testInterface["methodWithHandlerAsyncResultBoolean(boolean,io.vertx.core.Handler)"](sendFailure, function(ar) {
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
   @param sendFailure {boolean} 
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultCharacter = function(sendFailure, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_testInterface["methodWithHandlerAsyncResultCharacter(boolean,io.vertx.core.Handler)"](sendFailure, function(ar) {
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
   @param sendFailure {boolean} 
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultString = function(sendFailure, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_testInterface["methodWithHandlerAsyncResultString(boolean,io.vertx.core.Handler)"](sendFailure, function(ar) {
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
   @param sendFailure {boolean} 
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultDataObject = function(sendFailure, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_testInterface["methodWithHandlerAsyncResultDataObject(boolean,io.vertx.core.Handler)"](sendFailure, function(ar) {
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
   @param expected {string} 
   @param fail {boolean} 
   @return {function}
   */
  this.methodWithHandlerAsyncResultStringReturn = function(expected, fail) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] ==='boolean') {
      return utils.convReturnHandlerAsyncResult(j_testInterface["methodWithHandlerAsyncResultStringReturn(java.lang.String,boolean)"](expected, fail), function(result) { return result; });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {function}
   */
  this.methodWithHandlerAsyncResultGenericReturn = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnHandlerAsyncResult(j_testInterface["methodWithHandlerAsyncResultGenericReturn(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnTypeUnknown(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    }), function(result) { return utils.convParamTypeUnknown(result); });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param expected {string} 
   @param fail {boolean} 
   @return {function}
   */
  this.methodWithHandlerAsyncResultVertxGenReturn = function(expected, fail) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] ==='boolean') {
      return utils.convReturnHandlerAsyncResult(j_testInterface["methodWithHandlerAsyncResultVertxGenReturn(java.lang.String,boolean)"](expected, fail), function(result) { return result._jdel; });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param refed {RefedInterface1} 
   */
  this.methodWithUserTypes = function(refed) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_testInterface["methodWithUserTypes(io.vertx.codegen.testmodel.RefedInterface1)"](refed._jdel);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param str {string} 
   @param obj {Object} 
   */
  this.methodWithObjectParam = function(str, obj) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] !== 'function') {
      j_testInterface["methodWithObjectParam(java.lang.String,java.lang.Object)"](str, utils.convParamTypeUnknown(obj));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param dataObject {Object} 
   */
  this.methodWithDataObjectParam = function(dataObject) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_testInterface["methodWithDataObjectParam(io.vertx.codegen.testmodel.TestDataObject)"](dataObject != null ? new TestDataObject(new JsonObject(JSON.stringify(dataObject))) : null);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerUserTypes = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_testInterface["methodWithHandlerUserTypes(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnVertxGen(RefedInterface1, jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultUserTypes = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_testInterface["methodWithHandlerAsyncResultUserTypes(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(RefedInterface1, ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {ConcreteHandlerUserType} 
   */
  this.methodWithConcreteHandlerUserTypeSubtype = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_testInterface["methodWithConcreteHandlerUserTypeSubtype(io.vertx.codegen.testmodel.ConcreteHandlerUserType)"](handler._jdel);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {AbstractHandlerUserType} 
   */
  this.methodWithAbstractHandlerUserTypeSubtype = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_testInterface["methodWithAbstractHandlerUserTypeSubtype(io.vertx.codegen.testmodel.AbstractHandlerUserType)"](handler._jdel);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {ConcreteHandlerUserTypeExtension} 
   */
  this.methodWithConcreteHandlerUserTypeSubtypeExtension = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_testInterface["methodWithConcreteHandlerUserTypeSubtypeExtension(io.vertx.codegen.testmodel.ConcreteHandlerUserTypeExtension)"](handler._jdel);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerVoid = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_testInterface["methodWithHandlerVoid(io.vertx.core.Handler)"](handler);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param sendFailure {boolean} 
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultVoid = function(sendFailure, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_testInterface["methodWithHandlerAsyncResultVoid(boolean,io.vertx.core.Handler)"](sendFailure, function(ar) {
      if (ar.succeeded()) {
        handler(null, null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerThrowable = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_testInterface["methodWithHandlerThrowable(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnThrowable(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerDataObject = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_testInterface["methodWithHandlerDataObject(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnDataObject(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param value {Object} 
   @param handler {function} 
   */
  this.methodWithHandlerGenericUserType = function(value, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] !== 'function' && typeof __args[1] === 'function') {
      j_testInterface["methodWithHandlerGenericUserType(java.lang.Object,io.vertx.core.Handler)"](utils.convParamTypeUnknown(value), function(jVal) {
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param value {Object} 
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultGenericUserType = function(value, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] !== 'function' && typeof __args[1] === 'function') {
      j_testInterface["methodWithHandlerAsyncResultGenericUserType(java.lang.Object,io.vertx.core.Handler)"](utils.convParamTypeUnknown(value), function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(GenericRefedInterface, ar.result(), undefined), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number}
   */
  this.methodWithByteReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_testInterface["methodWithByteReturn()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number}
   */
  this.methodWithShortReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_testInterface["methodWithShortReturn()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number}
   */
  this.methodWithIntReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_testInterface["methodWithIntReturn()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number}
   */
  this.methodWithLongReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_testInterface["methodWithLongReturn()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number}
   */
  this.methodWithFloatReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_testInterface["methodWithFloatReturn()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number}
   */
  this.methodWithDoubleReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_testInterface["methodWithDoubleReturn()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean}
   */
  this.methodWithBooleanReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_testInterface["methodWithBooleanReturn()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string}
   */
  this.methodWithCharReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_testInterface["methodWithCharReturn()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string}
   */
  this.methodWithStringReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_testInterface["methodWithStringReturn()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {RefedInterface1}
   */
  this.methodWithVertxGenReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(RefedInterface1, j_testInterface["methodWithVertxGenReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {RefedInterface1}
   */
  this.methodWithVertxGenNullReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(RefedInterface1, j_testInterface["methodWithVertxGenNullReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {RefedInterface2}
   */
  this.methodWithAbstractVertxGenReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(RefedInterface2, j_testInterface["methodWithAbstractVertxGenReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Object}
   */
  this.methodWithDataObjectReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnDataObject(j_testInterface["methodWithDataObjectReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Object}
   */
  this.methodWithDataObjectNullReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnDataObject(j_testInterface["methodWithDataObjectNullReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param value {Object} 
   @return {GenericRefedInterface}
   */
  this.methodWithGenericUserTypeReturn = function(value) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] !== 'function') {
      return utils.convReturnVertxGen(GenericRefedInterface, j_testInterface["methodWithGenericUserTypeReturn(java.lang.Object)"](utils.convParamTypeUnknown(value)), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param str {string} 
   @param refed {RefedInterface1} 
   @param period {number} 
   @param handler {function} 
   @return {string}
   */
  this.overloadedMethod = function() {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      return j_testInterface["overloadedMethod(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
      __args[1](jVal);
    });
    }  else if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel) {
      return j_testInterface["overloadedMethod(java.lang.String,io.vertx.codegen.testmodel.RefedInterface1)"](__args[0], __args[1]._jdel);
    }  else if (__args.length === 3 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'function') {
      return j_testInterface["overloadedMethod(java.lang.String,io.vertx.codegen.testmodel.RefedInterface1,io.vertx.core.Handler)"](__args[0], __args[1]._jdel, function(jVal) {
      __args[2](jVal);
    });
    }  else if (__args.length === 4 && typeof __args[0] === 'string' && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      return j_testInterface["overloadedMethod(java.lang.String,io.vertx.codegen.testmodel.RefedInterface1,long,io.vertx.core.Handler)"](__args[0], __args[1]._jdel, __args[2], function(jVal) {
      __args[3](jVal);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param type {string} 
   @return {Object}
   */
  this.methodWithGenericReturn = function(type) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnTypeUnknown(j_testInterface["methodWithGenericReturn(java.lang.String)"](type));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param type {string} 
   @param u {Object} 
   */
  this.methodWithGenericParam = function(type, u) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] !== 'function') {
      j_testInterface["methodWithGenericParam(java.lang.String,java.lang.Object)"](type, utils.convParamTypeUnknown(u));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param type {string} 
   @param handler {function} 
   */
  this.methodWithGenericHandler = function(type, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_testInterface["methodWithGenericHandler(java.lang.String,io.vertx.core.Handler)"](type, function(jVal) {
      handler(utils.convReturnTypeUnknown(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param type {string} 
   @param asyncResultHandler {function} 
   */
  this.methodWithGenericHandlerAsyncResult = function(type, asyncResultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_testInterface["methodWithGenericHandlerAsyncResult(java.lang.String,io.vertx.core.Handler)"](type, function(ar) {
      if (ar.succeeded()) {
        asyncResultHandler(utils.convReturnTypeUnknown(ar.result()), null);
      } else {
        asyncResultHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param str {string} 
   @return {TestInterface}
   */
  this.fluentMethod = function(str) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_testInterface["fluentMethod(java.lang.String)"](str);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param foo {string} 
   @return {RefedInterface1}
   */
  this.methodWithCachedReturn = function(foo) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      if (that.cachedmethodWithCachedReturn == null) {
        that.cachedmethodWithCachedReturn = utils.convReturnVertxGen(RefedInterface1, j_testInterface["methodWithCachedReturn(java.lang.String)"](foo));
      }
      return that.cachedmethodWithCachedReturn;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param arg {number} 
   @return {number}
   */
  this.methodWithCachedReturnPrimitive = function(arg) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      if (that.cachedmethodWithCachedReturnPrimitive == null) {
        that.cachedmethodWithCachedReturnPrimitive = j_testInterface["methodWithCachedReturnPrimitive(int)"](arg);
      }
      return that.cachedmethodWithCachedReturnPrimitive;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<RefedInterface1>}
   */
  this.methodWithCachedListReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedmethodWithCachedListReturn == null) {
        that.cachedmethodWithCachedListReturn = utils.convReturnListSetVertxGen(j_testInterface["methodWithCachedListReturn()"](), RefedInterface1);
      }
      return that.cachedmethodWithCachedListReturn;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Object}
   */
  this.methodWithJsonObjectReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnJson(j_testInterface["methodWithJsonObjectReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Object}
   */
  this.methodWithNullJsonObjectReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnJson(j_testInterface["methodWithNullJsonObjectReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Object}
   */
  this.methodWithComplexJsonObjectReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnJson(j_testInterface["methodWithComplexJsonObjectReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {todo}
   */
  this.methodWithJsonArrayReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnJson(j_testInterface["methodWithJsonArrayReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {todo}
   */
  this.methodWithNullJsonArrayReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnJson(j_testInterface["methodWithNullJsonArrayReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {todo}
   */
  this.methodWithComplexJsonArrayReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnJson(j_testInterface["methodWithComplexJsonArrayReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param jsonObject {Object} 
   @param jsonArray {todo} 
   */
  this.methodWithJsonParams = function(jsonObject, jsonArray) {
    var __args = arguments;
    if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'object' && __args[1] instanceof Array) {
      j_testInterface["methodWithJsonParams(io.vertx.core.json.JsonObject,io.vertx.core.json.JsonArray)"](utils.convParamJsonObject(jsonObject), utils.convParamJsonArray(jsonArray));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param jsonObject {Object} 
   @param jsonArray {todo} 
   */
  this.methodWithNullJsonParams = function(jsonObject, jsonArray) {
    var __args = arguments;
    if (__args.length === 2 && (typeof __args[0] === 'object' && __args[0] != null) && typeof __args[1] === 'object' && __args[1] instanceof Array) {
      j_testInterface["methodWithNullJsonParams(io.vertx.core.json.JsonObject,io.vertx.core.json.JsonArray)"](utils.convParamJsonObject(jsonObject), utils.convParamJsonArray(jsonArray));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param jsonObjectHandler {function} 
   @param jsonArrayHandler {function} 
   */
  this.methodWithHandlerJson = function(jsonObjectHandler, jsonArrayHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] === 'function') {
      j_testInterface["methodWithHandlerJson(io.vertx.core.Handler,io.vertx.core.Handler)"](function(jVal) {
      jsonObjectHandler(utils.convReturnJson(jVal));
    }, function(jVal) {
      jsonArrayHandler(utils.convReturnJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param jsonObjectHandler {function} 
   @param jsonArrayHandler {function} 
   */
  this.methodWithHandlerComplexJson = function(jsonObjectHandler, jsonArrayHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] === 'function') {
      j_testInterface["methodWithHandlerComplexJson(io.vertx.core.Handler,io.vertx.core.Handler)"](function(jVal) {
      jsonObjectHandler(utils.convReturnJson(jVal));
    }, function(jVal) {
      jsonArrayHandler(utils.convReturnJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultJsonObject = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_testInterface["methodWithHandlerAsyncResultJsonObject(io.vertx.core.Handler)"](function(ar) {
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
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultNullJsonObject = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_testInterface["methodWithHandlerAsyncResultNullJsonObject(io.vertx.core.Handler)"](function(ar) {
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
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultComplexJsonObject = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_testInterface["methodWithHandlerAsyncResultComplexJsonObject(io.vertx.core.Handler)"](function(ar) {
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
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultJsonArray = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_testInterface["methodWithHandlerAsyncResultJsonArray(io.vertx.core.Handler)"](function(ar) {
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
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultNullJsonArray = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_testInterface["methodWithHandlerAsyncResultNullJsonArray(io.vertx.core.Handler)"](function(ar) {
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
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultComplexJsonArray = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_testInterface["methodWithHandlerAsyncResultComplexJsonArray(io.vertx.core.Handler)"](function(ar) {
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
   @param strVal {string} 
   @param weirdo {Object} 
   @return {string}
   */
  this.methodWithEnumParam = function(strVal, weirdo) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return j_testInterface["methodWithEnumParam(java.lang.String,io.vertx.codegen.testmodel.TestEnum)"](strVal, io.vertx.codegen.testmodel.TestEnum.valueOf(weirdo));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param strVal {string} 
   @return {Object}
   */
  this.methodWithEnumReturn = function(strVal) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnEnum(j_testInterface["methodWithEnumReturn(java.lang.String)"](strVal));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param strVal {string} 
   @param weirdo {Object} 
   @return {string}
   */
  this.methodWithGenEnumParam = function(strVal, weirdo) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'string') {
      return j_testInterface["methodWithGenEnumParam(java.lang.String,io.vertx.codegen.testmodel.TestGenEnum)"](strVal, io.vertx.codegen.testmodel.TestGenEnum.valueOf(weirdo));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param strVal {string} 
   @return {Object}
   */
  this.methodWithGenEnumReturn = function(strVal) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnEnum(j_testInterface["methodWithGenEnumReturn(java.lang.String)"](strVal));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param strVal {string} 
   @return {todo}
   */
  this.methodWithThrowableReturn = function(strVal) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnThrowable(j_testInterface["methodWithThrowableReturn(java.lang.String)"](strVal));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param t {todo} 
   @return {string}
   */
  this.methodWithThrowableParam = function(t) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object') {
      return j_testInterface["methodWithThrowableParam(java.lang.Throwable)"](utils.convParamThrowable(t));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_testInterface;
};

TestInterface._jclass = utils.getJavaClass("io.vertx.codegen.testmodel.TestInterface");
TestInterface._jtype = {
  accept: function(obj) {
    return TestInterface._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    // A bit of jiggery pokery to create the object given a reference to the constructor function
    var obj = Object.create(TestInterface.prototype, {});
    TestInterface.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
TestInterface._create = function(jdel) {
  // A bit of jiggery pokery to create the object given a reference to the constructor function
  var obj = Object.create(TestInterface.prototype, {});
  TestInterface.apply(obj, arguments);
  return obj;
}
/**

 @memberof module:testmodel-js/test_interface
 @param foo {string} 
 @return {RefedInterface1}
 */
TestInterface.staticFactoryMethod = function(foo) {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'string') {
    return utils.convReturnVertxGen(RefedInterface1, JTestInterface["staticFactoryMethod(java.lang.String)"](foo));
  } else throw new TypeError('function invoked with invalid arguments');
};

// We export the Constructor function
module.exports = TestInterface;