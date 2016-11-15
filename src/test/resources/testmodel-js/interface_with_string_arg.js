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

/** @module testmodel-js/interface_with_string_arg */
var utils = require('vertx-js/util/utils');
var GenericRefedInterface = require('testmodel-js/generic_refed_interface');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JInterfaceWithStringArg = io.vertx.codegen.testmodel.InterfaceWithStringArg;

/**

 @class
*/
var InterfaceWithStringArg = function(j_val) {

  var j_interfaceWithStringArg = j_val;
  var that = this;
  GenericRefedInterface.call(this, j_val, undefined);

  /**

   @public
   @param value {string} 
   @return {GenericRefedInterface}
   */
  this.setValue = function(value) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_interfaceWithStringArg["setValue(java.lang.String)"](value);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string}
   */
  this.getValue = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_interfaceWithStringArg["getValue()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   */
  this.meth = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_interfaceWithStringArg["meth()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_interfaceWithStringArg;
};

InterfaceWithStringArg._jclass = utils.getJavaClass("io.vertx.codegen.testmodel.InterfaceWithStringArg");
InterfaceWithStringArg._jtype = {
  accept: function(obj) {
    return InterfaceWithStringArg._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    // A bit of jiggery pokery to create the object given a reference to the constructor function
    var obj = Object.create(InterfaceWithStringArg.prototype, {});
    InterfaceWithStringArg.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
InterfaceWithStringArg._create = function(jdel) {
  // A bit of jiggery pokery to create the object given a reference to the constructor function
  var obj = Object.create(InterfaceWithStringArg.prototype, {});
  InterfaceWithStringArg.apply(obj, arguments);
  return obj;
}
// We export the Constructor function
module.exports = InterfaceWithStringArg;