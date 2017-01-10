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

/** @module testmodel-js/generic_nullable_refed_interface */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JGenericNullableRefedInterface = io.vertx.codegen.testmodel.GenericNullableRefedInterface;

/**

 @class
*/
var GenericNullableRefedInterface = function(j_val, j_arg_0) {

  var j_genericNullableRefedInterface = j_val;
  var that = this;
  var j_T = typeof j_arg_0 !== 'undefined' ? j_arg_0 : utils.unknown_jtype;

  /**

   @public

   @return {Object}
   */
  this.getValue = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_T.wrap(j_genericNullableRefedInterface["getValue()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_genericNullableRefedInterface;
};

GenericNullableRefedInterface._jclass = utils.getJavaClass("io.vertx.codegen.testmodel.GenericNullableRefedInterface");
GenericNullableRefedInterface._jtype = {
  accept: function(obj) {
    return GenericNullableRefedInterface._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(GenericNullableRefedInterface.prototype, {});
    GenericNullableRefedInterface.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
GenericNullableRefedInterface._create = function(jdel) {
  var obj = Object.create(GenericNullableRefedInterface.prototype, {});
  GenericNullableRefedInterface.apply(obj, arguments);
  return obj;
}
module.exports = GenericNullableRefedInterface;