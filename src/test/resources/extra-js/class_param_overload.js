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

/** @module extra-js/class_param_overload */
var utils = require('vertx-js/util/utils');
var GenericHolder = require('extra-js/generic_holder');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JClassParamOverload = io.vertx.test.codegen.ClassParamOverload;

/**

 @class
*/
var ClassParamOverload = function(j_val) {

  var j_classParamOverload = j_val;
  var that = this;

  /**

   @public
   @param type {todo} 
   @return {Object}
   */
  this.typeVarReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnTypeUnknown(j_classParamOverload["typeVarReturn()"]());
    }  else if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.get_jtype(__args[0]).wrap(j_classParamOverload["typeVarReturn(java.lang.Class)"](utils.get_jclass(__args[0])));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param type {todo} 
   @return {GenericHolder}
   */
  this.parameterizedReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(GenericHolder, j_classParamOverload["parameterizedReturn()"](), undefined);
    }  else if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(GenericHolder, j_classParamOverload["parameterizedReturn(java.lang.Class)"](utils.get_jclass(__args[0])), utils.get_jtype(__args[0]));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param type {todo} 
   @param t {Object} 
   @return {boolean}
   */
  this.typeVarParam = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] !== 'function') {
      return j_classParamOverload["typeVarParam(java.lang.Object)"](utils.convParamTypeUnknown(__args[0]));
    }  else if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] !== 'function') {
      return j_classParamOverload["typeVarParam(java.lang.Class,java.lang.Object)"](utils.get_jclass(__args[0]), utils.get_jtype(__args[0]).unwrap(__args[1]));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_classParamOverload;
};

ClassParamOverload._jclass = utils.getJavaClass("io.vertx.test.codegen.ClassParamOverload");
ClassParamOverload._jtype = {
  accept: function(obj) {
    return ClassParamOverload._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(ClassParamOverload.prototype, {});
    ClassParamOverload.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
ClassParamOverload._create = function(jdel) {
  var obj = Object.create(ClassParamOverload.prototype, {});
  ClassParamOverload.apply(obj, arguments);
  return obj;
}
/**

 @memberof module:extra-js/class_param_overload

 @return {ClassParamOverload}
 */
ClassParamOverload.create = function() {
  var __args = arguments;
  if (__args.length === 0) {
    return utils.convReturnVertxGen(ClassParamOverload, JClassParamOverload["create()"]());
  } else throw new TypeError('function invoked with invalid arguments');
};

module.exports = ClassParamOverload;