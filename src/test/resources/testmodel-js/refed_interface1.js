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

/** @module testmodel-js/refed_interface1 */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JRefedInterface1 = Java.type('io.vertx.codegen.testmodel.RefedInterface1');

/**

 @class
*/
var RefedInterface1 = function(j_val) {

  var j_refedInterface1 = j_val;
  var that = this;

  /**

   @public

   @return {string}
   */
  this.getString = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_refedInterface1["getString()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param str {string} 
   @return {RefedInterface1}
   */
  this.setString = function(str) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_refedInterface1["setString(java.lang.String)"](str);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_refedInterface1;
};

RefedInterface1._jclass = utils.getJavaClass("io.vertx.codegen.testmodel.RefedInterface1");
RefedInterface1._jtype = {
  accept: function(obj) {
    return RefedInterface1._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(RefedInterface1.prototype, {});
    RefedInterface1.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
RefedInterface1._create = function(jdel) {
  var obj = Object.create(RefedInterface1.prototype, {});
  RefedInterface1.apply(obj, arguments);
  return obj;
}
module.exports = RefedInterface1;