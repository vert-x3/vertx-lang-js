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

/** @module testmodel-js/reified_generic_refed_interface */
var utils = require('vertx-js/util/utils');
var GenericRefedInterface = require('testmodel-js/generic_refed_interface');
var RefedInterface1 = require('testmodel-js/refed_interface1');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JReifiedGenericRefedInterface = io.vertx.codegen.testmodel.ReifiedGenericRefedInterface;

/**

 @class
*/
var ReifiedGenericRefedInterface = function(j_val) {

  var j_reifiedGenericRefedInterface = j_val;
  var that = this;
  GenericRefedInterface.call(this, j_val);

  /**

   @public
   @param value {RefedInterface1} 
   */
  this.setValue = function(value) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_reifiedGenericRefedInterface["setValue(io.vertx.codegen.testmodel.RefedInterface1)"](value._jdel);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {RefedInterface1}
   */
  this.getValue = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(j_reifiedGenericRefedInterface["getValue()"](), RefedInterface1);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_reifiedGenericRefedInterface;
};

// We export the Constructor function
module.exports = ReifiedGenericRefedInterface;