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

/** @module testmodel-js/function_param_tck */
var utils = require('vertx-js/util/utils');
var GenericRefedInterface = require('testmodel-js/generic_refed_interface');
var RefedInterface1 = require('testmodel-js/refed_interface1');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JFunctionParamTCK = io.vertx.codegen.testmodel.FunctionParamTCK;
var TestDataObject = io.vertx.codegen.testmodel.TestDataObject;

/**

 @class
*/
var FunctionParamTCK = function(j_val) {

  var j_functionParamTCK = j_val;
  var that = this;

  /**

   @public
   @param byteFunc {todo} 
   @param shortFunc {todo} 
   @param integerFunc {todo} 
   @param longFunc {todo} 
   @param floatFunc {todo} 
   @param doubleFunc {todo} 
   @param booleanFunc {todo} 
   @param charFunc {todo} 
   @param stringFunc {todo} 
   @return {Array.<string>}
   */
  this.methodWithBasicParam = function(byteFunc, shortFunc, integerFunc, longFunc, floatFunc, doubleFunc, booleanFunc, charFunc, stringFunc) {
    var __args = arguments;
    if (__args.length === 9 && typeof __args[0] === 'function' && typeof __args[1] === 'function' && typeof __args[2] === 'function' && typeof __args[3] === 'function' && typeof __args[4] === 'function' && typeof __args[5] === 'function' && typeof __args[6] === 'function' && typeof __args[7] === 'function' && typeof __args[8] === 'function') {
      return j_functionParamTCK["methodWithBasicParam(java.util.function.Function,java.util.function.Function,java.util.function.Function,java.util.function.Function,java.util.function.Function,java.util.function.Function,java.util.function.Function,java.util.function.Function,java.util.function.Function)"](function(jVal) {
      var jRet = byteFunc(jVal);
      return jRet;
    }, function(jVal) {
      var jRet = shortFunc(jVal);
      return jRet;
    }, function(jVal) {
      var jRet = integerFunc(jVal);
      return jRet;
    }, function(jVal) {
      var jRet = longFunc(utils.convReturnLong(jVal));
      return jRet;
    }, function(jVal) {
      var jRet = floatFunc(jVal);
      return jRet;
    }, function(jVal) {
      var jRet = doubleFunc(jVal);
      return jRet;
    }, function(jVal) {
      var jRet = booleanFunc(jVal);
      return jRet;
    }, function(jVal) {
      var jRet = charFunc(jVal);
      return jRet;
    }, function(jVal) {
      var jRet = stringFunc(jVal);
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param objectFunc {todo} 
   @param arrayFunc {todo} 
   @return {Array.<string>}
   */
  this.methodWithJsonParam = function(objectFunc, arrayFunc) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] === 'function') {
      return j_functionParamTCK["methodWithJsonParam(java.util.function.Function,java.util.function.Function)"](function(jVal) {
      var jRet = objectFunc(utils.convReturnJson(jVal));
      return jRet;
    }, function(jVal) {
      var jRet = arrayFunc(utils.convReturnJson(jVal));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param func {todo} 
   @return {string}
   */
  this.methodWithVoidParam = function(func) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return j_functionParamTCK["methodWithVoidParam(java.util.function.Function)"](func);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param arg {RefedInterface1} 
   @param func {todo} 
   @return {string}
   */
  this.methodWithUserTypeParam = function(arg, func) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
      return j_functionParamTCK["methodWithUserTypeParam(io.vertx.codegen.testmodel.RefedInterface1,java.util.function.Function)"](arg._jdel, function(jVal) {
      var jRet = func(utils.convReturnVertxGen(RefedInterface1, jVal));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param arg {Object} 
   @param func {todo} 
   @return {string}
   */
  this.methodWithObjectParam = function(arg, func) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] !== 'function' && typeof __args[1] === 'function') {
      return j_functionParamTCK["methodWithObjectParam(java.lang.Object,java.util.function.Function)"](utils.convParamTypeUnknown(arg), function(jVal) {
      var jRet = func(utils.convReturnTypeUnknown(jVal));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param func {todo} 
   @return {string}
   */
  this.methodWithDataObjectParam = function(func) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return j_functionParamTCK["methodWithDataObjectParam(java.util.function.Function)"](function(jVal) {
      var jRet = func(utils.convReturnDataObject(jVal));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param func {todo} 
   @return {string}
   */
  this.methodWithEnumParam = function(func) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return j_functionParamTCK["methodWithEnumParam(java.util.function.Function)"](function(jVal) {
      var jRet = func(utils.convReturnEnum(jVal));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param stringFunc {todo} 
   @return {string}
   */
  this.methodWithListParam = function(stringFunc) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return j_functionParamTCK["methodWithListParam(java.util.function.Function)"](function(jVal) {
      var jRet = stringFunc(jVal);
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param func {todo} 
   @return {string}
   */
  this.methodWithSetParam = function(func) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return j_functionParamTCK["methodWithSetParam(java.util.function.Function)"](function(jVal) {
      var jRet = func(utils.convReturnSet(jVal));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param func {todo} 
   @return {string}
   */
  this.methodWithMapParam = function(func) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return j_functionParamTCK["methodWithMapParam(java.util.function.Function)"](function(jVal) {
      var jRet = func(utils.convReturnMap(jVal));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param t {Object} 
   @param func {todo} 
   @return {string}
   */
  this.methodWithGenericParam = function(t, func) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] !== 'function' && typeof __args[1] === 'function') {
      return j_functionParamTCK["methodWithGenericParam(java.lang.Object,java.util.function.Function)"](utils.convParamTypeUnknown(t), function(jVal) {
      var jRet = func(utils.convReturnTypeUnknown(jVal));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param t {Object} 
   @param func {todo} 
   @return {string}
   */
  this.methodWithGenericUserTypeParam = function(t, func) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] !== 'function' && typeof __args[1] === 'function') {
      return j_functionParamTCK["methodWithGenericUserTypeParam(java.lang.Object,java.util.function.Function)"](utils.convParamTypeUnknown(t), function(jVal) {
      var jRet = func(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param byteFunc {todo} 
   @param shortFunc {todo} 
   @param integerFunc {todo} 
   @param longFunc {todo} 
   @param floatFunc {todo} 
   @param doubleFunc {todo} 
   @param booleanFunc {todo} 
   @param charFunc {todo} 
   @param stringFunc {todo} 
   @return {string}
   */
  this.methodWithBasicReturn = function(byteFunc, shortFunc, integerFunc, longFunc, floatFunc, doubleFunc, booleanFunc, charFunc, stringFunc) {
    var __args = arguments;
    if (__args.length === 9 && typeof __args[0] === 'function' && typeof __args[1] === 'function' && typeof __args[2] === 'function' && typeof __args[3] === 'function' && typeof __args[4] === 'function' && typeof __args[5] === 'function' && typeof __args[6] === 'function' && typeof __args[7] === 'function' && typeof __args[8] === 'function') {
      return j_functionParamTCK["methodWithBasicReturn(java.util.function.Function,java.util.function.Function,java.util.function.Function,java.util.function.Function,java.util.function.Function,java.util.function.Function,java.util.function.Function,java.util.function.Function,java.util.function.Function)"](function(jVal) {
      var jRet = byteFunc(jVal);
      return utils.convParamByte(jRet);
    }, function(jVal) {
      var jRet = shortFunc(jVal);
      return utils.convParamShort(jRet);
    }, function(jVal) {
      var jRet = integerFunc(jVal);
      return utils.convParamInteger(jRet);
    }, function(jVal) {
      var jRet = longFunc(jVal);
      return utils.convParamLong(jRet);
    }, function(jVal) {
      var jRet = floatFunc(jVal);
      return utils.convParamFloat(jRet);
    }, function(jVal) {
      var jRet = doubleFunc(jVal);
      return utils.convParamDouble(jRet);
    }, function(jVal) {
      var jRet = booleanFunc(jVal);
      return jRet;
    }, function(jVal) {
      var jRet = charFunc(jVal);
      return utils.convParamCharacter(jRet);
    }, function(jVal) {
      var jRet = stringFunc(jVal);
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param objectFunc {todo} 
   @param arrayFunc {todo} 
   @return {string}
   */
  this.methodWithJsonReturn = function(objectFunc, arrayFunc) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] === 'function') {
      return j_functionParamTCK["methodWithJsonReturn(java.util.function.Function,java.util.function.Function)"](function(jVal) {
      var jRet = objectFunc(jVal);
      return utils.convParamJsonObject(jRet);
    }, function(jVal) {
      var jRet = arrayFunc(jVal);
      return utils.convParamJsonArray(jRet);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param func {todo} 
   @return {string}
   */
  this.methodWithObjectReturn = function(func) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return j_functionParamTCK["methodWithObjectReturn(java.util.function.Function)"](function(jVal) {
      var jRet = func(jVal);
      return utils.convParamTypeUnknown(jRet);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param func {todo} 
   @return {string}
   */
  this.methodWithDataObjectReturn = function(func) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return j_functionParamTCK["methodWithDataObjectReturn(java.util.function.Function)"](function(jVal) {
      var jRet = func(jVal);
      return jRet != null ? new TestDataObject(new JsonObject(JSON.stringify(jRet))) : null;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param func {todo} 
   @return {string}
   */
  this.methodWithEnumReturn = function(func) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return j_functionParamTCK["methodWithEnumReturn(java.util.function.Function)"](function(jVal) {
      var jRet = func(jVal);
      return io.vertx.codegen.testmodel.TestEnum.valueOf(jRet);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param func {todo} 
   @return {string}
   */
  this.methodWithListReturn = function(func) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return j_functionParamTCK["methodWithListReturn(java.util.function.Function)"](function(jVal) {
      var jRet = func(jVal);
      return utils.convParamListBasicOther(jRet);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param func {todo} 
   @return {string}
   */
  this.methodWithSetReturn = function(func) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return j_functionParamTCK["methodWithSetReturn(java.util.function.Function)"](function(jVal) {
      var jRet = func(jVal);
      return utils.convParamSetBasicOther(jRet);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param func {todo} 
   @return {string}
   */
  this.methodWithMapReturn = function(func) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return j_functionParamTCK["methodWithMapReturn(java.util.function.Function)"](function(jVal) {
      var jRet = func(jVal);
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param func {todo} 
   @return {string}
   */
  this.methodWithGenericReturn = function(func) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return j_functionParamTCK["methodWithGenericReturn(java.util.function.Function)"](function(jVal) {
      var jRet = func(jVal);
      return utils.convParamTypeUnknown(jRet);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param func {todo} 
   @return {string}
   */
  this.methodWithGenericUserTypeReturn = function(func) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return j_functionParamTCK["methodWithGenericUserTypeReturn(java.util.function.Function)"](function(jVal) {
      var jRet = func(utils.convReturnVertxGen(GenericRefedInterface, jVal, undefined));
      return jRet._jdel;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param func {todo} 
   @return {string}
   */
  this.methodWithNullableListParam = function(func) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return j_functionParamTCK["methodWithNullableListParam(java.util.function.Function)"](function(jVal) {
      var jRet = func(jVal);
      return jRet;
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param func {todo} 
   @return {string}
   */
  this.methodWithNullableListReturn = function(func) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return j_functionParamTCK["methodWithNullableListReturn(java.util.function.Function)"](function(jVal) {
      var jRet = func(jVal);
      return utils.convParamListBasicOther(jRet);
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_functionParamTCK;
};

FunctionParamTCK._jclass = utils.getJavaClass("io.vertx.codegen.testmodel.FunctionParamTCK");
FunctionParamTCK._create = function(jdel) {
  // A bit of jiggery pokery to create the object given a reference to the constructor function
  var obj = Object.create(FunctionParamTCK.prototype, {});
  FunctionParamTCK.apply(obj, arguments);
  return obj;
}
// We export the Constructor function
module.exports = FunctionParamTCK;