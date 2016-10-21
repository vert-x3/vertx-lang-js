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

/** @module testmodel-js/factory */
var utils = require('vertx-js/util/utils');
var RefedInterface1 = require('testmodel-js/refed_interface1');
var ConcreteHandlerUserType = require('testmodel-js/concrete_handler_user_type');
var AbstractHandlerUserType = require('testmodel-js/abstract_handler_user_type');
var ConcreteHandlerUserTypeExtension = require('testmodel-js/concrete_handler_user_type_extension');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JFactory = io.vertx.codegen.testmodel.Factory;

/**

 @class
*/
var Factory = function(j_val) {

  var j_factory = j_val;
  var that = this;

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_factory;
};

Factory._jclass = utils.getJavaClass("io.vertx.codegen.testmodel.Factory");
Factory._create = function(jdel) {
  // A bit of jiggery pokery to create the object given a reference to the constructor function
  var obj = Object.create(Factory.prototype, {});
  Factory.apply(obj, arguments);
  return obj;
}
/**

 @memberof module:testmodel-js/factory
 @param handler {function} 
 @return {ConcreteHandlerUserType}
 */
Factory.createConcreteHandlerUserType = function(handler) {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'function') {
    return utils.convReturnVertxGen(ConcreteHandlerUserType, JFactory["createConcreteHandlerUserType(io.vertx.core.Handler)"](function(jVal) {
    handler(utils.convReturnVertxGen(RefedInterface1, jVal));
  }));
  } else throw new TypeError('function invoked with invalid arguments');
};

/**

 @memberof module:testmodel-js/factory
 @param handler {function} 
 @return {AbstractHandlerUserType}
 */
Factory.createAbstractHandlerUserType = function(handler) {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'function') {
    return utils.convReturnVertxGen(AbstractHandlerUserType, JFactory["createAbstractHandlerUserType(io.vertx.core.Handler)"](function(jVal) {
    handler(utils.convReturnVertxGen(RefedInterface1, jVal));
  }));
  } else throw new TypeError('function invoked with invalid arguments');
};

/**

 @memberof module:testmodel-js/factory
 @param handler {function} 
 @return {ConcreteHandlerUserTypeExtension}
 */
Factory.createConcreteHandlerUserTypeExtension = function(handler) {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'function') {
    return utils.convReturnVertxGen(ConcreteHandlerUserTypeExtension, JFactory["createConcreteHandlerUserTypeExtension(io.vertx.core.Handler)"](function(jVal) {
    handler(utils.convReturnVertxGen(RefedInterface1, jVal));
  }));
  } else throw new TypeError('function invoked with invalid arguments');
};

// We export the Constructor function
module.exports = Factory;