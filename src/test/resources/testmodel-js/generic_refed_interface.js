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

/** @module testmodel-js/generic_refed_interface */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JGenericRefedInterface = io.vertx.codegen.testmodel.GenericRefedInterface;

/**

 @class
*/
var GenericRefedInterface = function(j_val, j_arg_0) {

  var j_genericRefedInterface = j_val;
  var that = this;
  var j_T = typeof j_arg_0 === 'function' ? j_arg_0 : utils.convReturnTypeUnknown;

  /**

   @public
   @param value {Object} 
   */
  this.setValue = function(value) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] !== 'function') {
      j_genericRefedInterface["setValue(java.lang.Object)"](utils.convParamTypeUnknown(value));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Object}
   */
  this.getValue = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_T(j_genericRefedInterface["getValue()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_genericRefedInterface;
};

GenericRefedInterface._jclass = utils.getJavaClass("io.vertx.codegen.testmodel.GenericRefedInterface");
GenericRefedInterface._create = function(jdel) {
  // A bit of jiggery pokery to create the object given a reference to the constructor function
  var obj = Object.create(GenericRefedInterface.prototype, {});
  GenericRefedInterface.apply(obj, arguments);
  return obj;
}
// We export the Constructor function
module.exports = GenericRefedInterface;