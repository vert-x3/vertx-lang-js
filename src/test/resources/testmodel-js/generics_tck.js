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

/** @module testmodel-js/generics_tck */
var utils = require('vertx-js/util/utils');
var GenericRefedInterface = require('testmodel-js/generic_refed_interface');
var InterfaceWithApiArg = require('testmodel-js/interface_with_api_arg');
var InterfaceWithVariableArg = require('testmodel-js/interface_with_variable_arg');
var InterfaceWithStringArg = require('testmodel-js/interface_with_string_arg');
var RefedInterface1 = require('testmodel-js/refed_interface1');
var GenericNullableRefedInterface = require('testmodel-js/generic_nullable_refed_interface');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JGenericsTCK = Java.type('io.vertx.codegen.testmodel.GenericsTCK');
var TestDataObject = Java.type('io.vertx.codegen.testmodel.TestDataObject');

/**

 @class
*/
var GenericsTCK = function(j_val) {

  var j_genericsTCK = j_val;
  var that = this;

  /**

   @public

   @return {GenericRefedInterface}
   */
  this.methodWithByteParameterizedReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithByteParameterizedReturn()"](), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {GenericRefedInterface}
   */
  this.methodWithShortParameterizedReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithShortParameterizedReturn()"](), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {GenericRefedInterface}
   */
  this.methodWithIntegerParameterizedReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithIntegerParameterizedReturn()"](), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {GenericRefedInterface}
   */
  this.methodWithLongParameterizedReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithLongParameterizedReturn()"](), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {GenericRefedInterface}
   */
  this.methodWithFloatParameterizedReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithFloatParameterizedReturn()"](), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {GenericRefedInterface}
   */
  this.methodWithDoubleParameterizedReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithDoubleParameterizedReturn()"](), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {GenericRefedInterface}
   */
  this.methodWithBooleanParameterizedReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithBooleanParameterizedReturn()"](), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {GenericRefedInterface}
   */
  this.methodWithCharacterParameterizedReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithCharacterParameterizedReturn()"](), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {GenericRefedInterface}
   */
  this.methodWithStringParameterizedReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithStringParameterizedReturn()"](), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {GenericRefedInterface}
   */
  this.methodWithJsonObjectParameterizedReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithJsonObjectParameterizedReturn()"](), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {GenericRefedInterface}
   */
  this.methodWithJsonArrayParameterizedReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithJsonArrayParameterizedReturn()"](), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {GenericRefedInterface}
   */
  this.methodWithDataObjectParameterizedReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithDataObjectParameterizedReturn()"](), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {GenericRefedInterface}
   */
  this.methodWithEnumParameterizedReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithEnumParameterizedReturn()"](), utils.enum_jtype(io.vertx.codegen.testmodel.TestEnum));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {GenericRefedInterface}
   */
  this.methodWithGenEnumParameterizedReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithGenEnumParameterizedReturn()"](), utils.enum_jtype(io.vertx.codegen.testmodel.TestGenEnum));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {GenericRefedInterface}
   */
  this.methodWithUserTypeParameterizedReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithUserTypeParameterizedReturn()"](), RefedInterface1._jtype);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerByteParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerByteParameterized(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerShortParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerShortParameterized(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerIntegerParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerIntegerParameterized(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerLongParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerLongParameterized(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerFloatParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerFloatParameterized(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerDoubleParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerDoubleParameterized(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerBooleanParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerBooleanParameterized(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerCharacterParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerCharacterParameterized(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerStringParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerStringParameterized(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerJsonObjectParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerJsonObjectParameterized(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerJsonArrayParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerJsonArrayParameterized(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerDataObjectParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerDataObjectParameterized(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerEnumParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerEnumParameterized(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, utils.enum_jtype(io.vertx.codegen.testmodel.TestEnum)));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerGenEnumParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerGenEnumParameterized(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, utils.enum_jtype(io.vertx.codegen.testmodel.TestGenEnum)));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerUserTypeParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerUserTypeParameterized(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, RefedInterface1._jtype));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultByteParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerAsyncResultByteParameterized(io.vertx.core.Handler)"](function(ar) {
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
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultShortParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerAsyncResultShortParameterized(io.vertx.core.Handler)"](function(ar) {
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
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultIntegerParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerAsyncResultIntegerParameterized(io.vertx.core.Handler)"](function(ar) {
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
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultLongParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerAsyncResultLongParameterized(io.vertx.core.Handler)"](function(ar) {
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
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultFloatParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerAsyncResultFloatParameterized(io.vertx.core.Handler)"](function(ar) {
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
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultDoubleParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerAsyncResultDoubleParameterized(io.vertx.core.Handler)"](function(ar) {
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
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultBooleanParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerAsyncResultBooleanParameterized(io.vertx.core.Handler)"](function(ar) {
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
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultCharacterParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerAsyncResultCharacterParameterized(io.vertx.core.Handler)"](function(ar) {
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
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultStringParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerAsyncResultStringParameterized(io.vertx.core.Handler)"](function(ar) {
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
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultJsonObjectParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerAsyncResultJsonObjectParameterized(io.vertx.core.Handler)"](function(ar) {
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
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultJsonArrayParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerAsyncResultJsonArrayParameterized(io.vertx.core.Handler)"](function(ar) {
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
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultDataObjectParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerAsyncResultDataObjectParameterized(io.vertx.core.Handler)"](function(ar) {
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
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultEnumParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerAsyncResultEnumParameterized(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(GenericRefedInterface, ar.result(), utils.enum_jtype(io.vertx.codegen.testmodel.TestEnum)), null);
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
  this.methodWithHandlerAsyncResultGenEnumParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerAsyncResultGenEnumParameterized(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(GenericRefedInterface, ar.result(), utils.enum_jtype(io.vertx.codegen.testmodel.TestGenEnum)), null);
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
  this.methodWithHandlerAsyncResultUserTypeParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerAsyncResultUserTypeParameterized(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(GenericRefedInterface, ar.result(), RefedInterface1._jtype), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {todo} 
   */
  this.methodWithFunctionParamByteParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithFunctionParamByteParameterized(java.util.function.Function)"](function(jVal) {
      var jRet = handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {todo} 
   */
  this.methodWithFunctionParamShortParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithFunctionParamShortParameterized(java.util.function.Function)"](function(jVal) {
      var jRet = handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {todo} 
   */
  this.methodWithFunctionParamIntegerParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithFunctionParamIntegerParameterized(java.util.function.Function)"](function(jVal) {
      var jRet = handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {todo} 
   */
  this.methodWithFunctionParamLongParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithFunctionParamLongParameterized(java.util.function.Function)"](function(jVal) {
      var jRet = handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {todo} 
   */
  this.methodWithFunctionParamFloatParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithFunctionParamFloatParameterized(java.util.function.Function)"](function(jVal) {
      var jRet = handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {todo} 
   */
  this.methodWithFunctionParamDoubleParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithFunctionParamDoubleParameterized(java.util.function.Function)"](function(jVal) {
      var jRet = handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {todo} 
   */
  this.methodWithFunctionParamBooleanParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithFunctionParamBooleanParameterized(java.util.function.Function)"](function(jVal) {
      var jRet = handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {todo} 
   */
  this.methodWithFunctionParamCharacterParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithFunctionParamCharacterParameterized(java.util.function.Function)"](function(jVal) {
      var jRet = handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {todo} 
   */
  this.methodWithFunctionParamStringParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithFunctionParamStringParameterized(java.util.function.Function)"](function(jVal) {
      var jRet = handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {todo} 
   */
  this.methodWithFunctionParamJsonObjectParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithFunctionParamJsonObjectParameterized(java.util.function.Function)"](function(jVal) {
      var jRet = handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {todo} 
   */
  this.methodWithFunctionParamJsonArrayParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithFunctionParamJsonArrayParameterized(java.util.function.Function)"](function(jVal) {
      var jRet = handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {todo} 
   */
  this.methodWithFunctionParamDataObjectParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithFunctionParamDataObjectParameterized(java.util.function.Function)"](function(jVal) {
      var jRet = handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {todo} 
   */
  this.methodWithFunctionParamEnumParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithFunctionParamEnumParameterized(java.util.function.Function)"](function(jVal) {
      var jRet = handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, utils.enum_jtype(io.vertx.codegen.testmodel.TestEnum)));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {todo} 
   */
  this.methodWithFunctionParamGenEnumParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithFunctionParamGenEnumParameterized(java.util.function.Function)"](function(jVal) {
      var jRet = handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, utils.enum_jtype(io.vertx.codegen.testmodel.TestGenEnum)));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {todo} 
   */
  this.methodWithFunctionParamUserTypeParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithFunctionParamUserTypeParameterized(java.util.function.Function)"](function(jVal) {
      var jRet = handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, RefedInterface1._jtype));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param type {todo} 
   @return {GenericRefedInterface}
   */
  this.methodWithClassTypeParameterizedReturn = function(type) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithClassTypeParameterizedReturn(java.lang.Class)"](utils.get_jclass(type)), utils.get_jtype(__args[0]));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param type {todo} 
   @param handler {function} 
   */
  this.methodWithHandlerClassTypeParameterized = function(type, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] === 'function') {
      j_genericsTCK["methodWithHandlerClassTypeParameterized(java.lang.Class,io.vertx.core.Handler)"](utils.get_jclass(type), function(jVal) {
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, utils.get_jtype(__args[0])));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param type {todo} 
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultClassTypeParameterized = function(type, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] === 'function') {
      j_genericsTCK["methodWithHandlerAsyncResultClassTypeParameterized(java.lang.Class,io.vertx.core.Handler)"](utils.get_jclass(type), function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(GenericRefedInterface, ar.result(), utils.get_jtype(__args[0])), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param type {todo} 
   @param handler {todo} 
   */
  this.methodWithFunctionParamClassTypeParameterized = function(type, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] === 'function') {
      j_genericsTCK["methodWithFunctionParamClassTypeParameterized(java.lang.Class,java.util.function.Function)"](utils.get_jclass(type), function(jVal) {
      var jRet = handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, utils.get_jtype(__args[0])));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param type {todo} 
   @param u {Object} 
   */
  this.methodWithClassTypeParam = function(type, u) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] !== 'function') {
      j_genericsTCK["methodWithClassTypeParam(java.lang.Class,java.lang.Object)"](utils.get_jclass(type), utils.get_jtype(__args[0]).unwrap(u));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param type {todo} 
   @return {Object}
   */
  this.methodWithClassTypeReturn = function(type) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.get_jtype(__args[0]).wrap(j_genericsTCK["methodWithClassTypeReturn(java.lang.Class)"](utils.get_jclass(type)));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param type {todo} 
   @param f {function} 
   */
  this.methodWithClassTypeHandler = function(type, f) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] === 'function') {
      j_genericsTCK["methodWithClassTypeHandler(java.lang.Class,io.vertx.core.Handler)"](utils.get_jclass(type), function(jVal) {
      f(utils.get_jtype(__args[0]).wrap(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param type {todo} 
   @param f {function} 
   */
  this.methodWithClassTypeHandlerAsyncResult = function(type, f) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] === 'function') {
      j_genericsTCK["methodWithClassTypeHandlerAsyncResult(java.lang.Class,io.vertx.core.Handler)"](utils.get_jclass(type), function(ar) {
      if (ar.succeeded()) {
        f(utils.get_jtype(__args[0]).wrap(ar.result()), null);
      } else {
        f(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param type {todo} 
   @param f {todo} 
   */
  this.methodWithClassTypeFunctionParam = function(type, f) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] === 'function') {
      j_genericsTCK["methodWithClassTypeFunctionParam(java.lang.Class,java.util.function.Function)"](utils.get_jclass(type), function(jVal) {
      var jRet = f(utils.get_jtype(__args[0]).wrap(jVal));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param type {todo} 
   @param f {todo} 
   */
  this.methodWithClassTypeFunctionReturn = function(type, f) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] === 'function') {
      j_genericsTCK["methodWithClassTypeFunctionReturn(java.lang.Class,java.util.function.Function)"](utils.get_jclass(type), function(jVal) {
      var jRet = f(jVal);
      return utils.get_jtype(__args[0]).unwrap(jRet);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param value {RefedInterface1} 
   @return {InterfaceWithApiArg}
   */
  this.interfaceWithApiArg = function(value) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      return utils.convReturnVertxGen(InterfaceWithApiArg, j_genericsTCK["interfaceWithApiArg(io.vertx.codegen.testmodel.RefedInterface1)"](value._jdel));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param value {string} 
   @return {InterfaceWithStringArg}
   */
  this.interfaceWithStringArg = function(value) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnVertxGen(InterfaceWithStringArg, j_genericsTCK["interfaceWithStringArg(java.lang.String)"](value));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param value1 {Object} 
   @param type {todo} 
   @param value2 {Object} 
   @return {InterfaceWithVariableArg}
   */
  this.interfaceWithVariableArg = function(value1, type, value2) {
    var __args = arguments;
    if (__args.length === 3 && typeof __args[0] !== 'function' && typeof __args[1] === 'function' && typeof __args[2] !== 'function') {
      return utils.convReturnVertxGen(InterfaceWithVariableArg, j_genericsTCK["interfaceWithVariableArg(java.lang.Object,java.lang.Class,java.lang.Object)"](utils.convParamTypeUnknown(value1), utils.get_jclass(type), utils.get_jtype(__args[1]).unwrap(value2)), undefined, utils.get_jtype(__args[1]));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithHandlerGenericNullableApi = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_genericsTCK["methodWithHandlerGenericNullableApi(boolean,io.vertx.core.Handler)"](notNull, function(jVal) {
      handler(utils.convReturnVertxGen(GenericNullableRefedInterface, jVal, RefedInterface1._jtype));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultGenericNullableApi = function(notNull, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] ==='boolean' && typeof __args[1] === 'function') {
      j_genericsTCK["methodWithHandlerAsyncResultGenericNullableApi(boolean,io.vertx.core.Handler)"](notNull, function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(GenericNullableRefedInterface, ar.result(), RefedInterface1._jtype), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param notNull {boolean} 
   @return {GenericNullableRefedInterface}
   */
  this.methodWithGenericNullableApiReturn = function(notNull) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      return utils.convReturnVertxGen(GenericNullableRefedInterface, j_genericsTCK["methodWithGenericNullableApiReturn(boolean)"](notNull), RefedInterface1._jtype);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_genericsTCK;
};

GenericsTCK._jclass = utils.getJavaClass("io.vertx.codegen.testmodel.GenericsTCK");
GenericsTCK._jtype = {
  accept: function(obj) {
    return GenericsTCK._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(GenericsTCK.prototype, {});
    GenericsTCK.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
GenericsTCK._create = function(jdel) {
  var obj = Object.create(GenericsTCK.prototype, {});
  GenericsTCK.apply(obj, arguments);
  return obj;
}
module.exports = GenericsTCK;