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

/** @module acme-js/my_interface */
var utils = require('vertx-js/util/utils');
var SubInterface = require('acme-js/sub_interface');
var TestInterface = require('testmodel-js/test_interface');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JMyInterface = com.acme.pkg.MyInterface;

/**

 @class
*/
var MyInterface = function(j_val) {

  var j_myInterface = j_val;
  var that = this;

  /**

   @public

   @return {SubInterface}
   */
  this.sub = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(SubInterface, j_myInterface["sub()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {TestInterface}
   */
  this.method = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(TestInterface, j_myInterface["method()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_myInterface;
};

MyInterface._jclass = utils.getJavaClass("com.acme.pkg.MyInterface");
MyInterface._jtype = {
  accept: function(obj) {
    return MyInterface._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    // A bit of jiggery pokery to create the object given a reference to the constructor function
    var obj = Object.create(MyInterface.prototype, {});
    MyInterface.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
MyInterface._create = function(jdel) {
  // A bit of jiggery pokery to create the object given a reference to the constructor function
  var obj = Object.create(MyInterface.prototype, {});
  MyInterface.apply(obj, arguments);
  return obj;
}
/**

 @memberof module:acme-js/my_interface

 @return {MyInterface}
 */
MyInterface.create = function() {
  var __args = arguments;
  if (__args.length === 0) {
    return utils.convReturnVertxGen(MyInterface, JMyInterface["create()"]());
  } else throw new TypeError('function invoked with invalid arguments');
};

// We export the Constructor function
module.exports = MyInterface;