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
var RefedInterface1 = require('testmodel-js/refed_interface1');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JGenericsTCK = io.vertx.codegen.testmodel.GenericsTCK;
var TestDataObject = io.vertx.codegen.testmodel.TestDataObject;

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
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithEnumParameterizedReturn()"](), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {GenericRefedInterface}
   */
  this.methodWithGenEnumParameterizedReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithGenEnumParameterizedReturn()"](), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {GenericRefedInterface}
   */
  this.methodWithUserTypeParameterizedReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithUserTypeParameterizedReturn()"](), RefedInterface1._create);
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
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
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
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
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
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, RefedInterface1._create));
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
  this.methodWithHandlerAsyncResultGenEnumParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerAsyncResultGenEnumParameterized(io.vertx.core.Handler)"](function(ar) {
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
  this.methodWithHandlerAsyncResultUserTypeParameterized = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_genericsTCK["methodWithHandlerAsyncResultUserTypeParameterized(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(GenericRefedInterface, ar.result(), RefedInterface1._create), null);
      } else {
        handler(null, ar.cause());
      }
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
      return utils.convReturnVertxGen(GenericRefedInterface, j_genericsTCK["methodWithClassTypeParameterizedReturn(java.lang.Class)"](utils.javaTypeOf(type)), __args[0]._create);
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
      j_genericsTCK["methodWithHandlerClassTypeParameterized(java.lang.Class,io.vertx.core.Handler)"](utils.javaTypeOf(type), function(jVal) {
      handler(utils.convReturnVertxGen(GenericRefedInterface, jVal, __args[0]._create));
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
      j_genericsTCK["methodWithHandlerAsyncResultClassTypeParameterized(java.lang.Class,io.vertx.core.Handler)"](utils.javaTypeOf(type), function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(GenericRefedInterface, ar.result(), __args[0]._create), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_genericsTCK;
};

GenericsTCK._jclass = utils.getJavaClass("io.vertx.codegen.testmodel.GenericsTCK");
GenericsTCK._create = function(jdel) {
  // A bit of jiggery pokery to create the object given a reference to the constructor function
  var obj = Object.create(GenericsTCK.prototype, {});
  GenericsTCK.apply(obj, arguments);
  return obj;
}
// We export the Constructor function
module.exports = GenericsTCK;