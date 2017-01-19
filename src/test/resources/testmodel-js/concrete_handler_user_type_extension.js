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

/** @module testmodel-js/concrete_handler_user_type_extension */
var utils = require('vertx-js/util/utils');
var RefedInterface1 = require('testmodel-js/refed_interface1');
var ConcreteHandlerUserType = require('testmodel-js/concrete_handler_user_type');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JConcreteHandlerUserTypeExtension = Java.type('io.vertx.codegen.testmodel.ConcreteHandlerUserTypeExtension');

/**

 @class
*/
var ConcreteHandlerUserTypeExtension = function(j_val) {

  var j_concreteHandlerUserTypeExtension = j_val;
  var that = this;
  ConcreteHandlerUserType.call(this, j_val);

  /**

   @public
   @param arg0 {RefedInterface1} 
   */
  this.handle = function(arg0) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_concreteHandlerUserTypeExtension["handle(io.vertx.codegen.testmodel.RefedInterface1)"](arg0._jdel);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_concreteHandlerUserTypeExtension;
};

ConcreteHandlerUserTypeExtension._jclass = utils.getJavaClass("io.vertx.codegen.testmodel.ConcreteHandlerUserTypeExtension");
ConcreteHandlerUserTypeExtension._jtype = {
  accept: function(obj) {
    return ConcreteHandlerUserTypeExtension._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(ConcreteHandlerUserTypeExtension.prototype, {});
    ConcreteHandlerUserTypeExtension.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
ConcreteHandlerUserTypeExtension._create = function(jdel) {
  var obj = Object.create(ConcreteHandlerUserTypeExtension.prototype, {});
  ConcreteHandlerUserTypeExtension.apply(obj, arguments);
  return obj;
}
module.exports = ConcreteHandlerUserTypeExtension;