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

/** @module testmodel-js/super_interface1 */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JSuperInterface1 = io.vertx.codegen.testmodel.SuperInterface1;

/**

 @class
*/
var SuperInterface1 = function(j_val) {

  var j_superInterface1 = j_val;
  var that = this;

  /**

   @public
   @param b {number} 
   @param s {number} 
   @param i {number} 
   @param l {number} 
   @param f {number} 
   @param d {number} 
   @param bool {boolean} 
   @param ch {string} 
   @param str {string} 
   */
  this.superMethodWithBasicParams = function(b, s, i, l, f, d, bool, ch, str) {
    var __args = arguments;
    if (__args.length === 9 && typeof __args[0] ==='number' && typeof __args[1] ==='number' && typeof __args[2] ==='number' && typeof __args[3] ==='number' && typeof __args[4] ==='number' && typeof __args[5] ==='number' && typeof __args[6] ==='boolean' && typeof __args[7] ==='string' && typeof __args[8] === 'string') {
      j_superInterface1["superMethodWithBasicParams(byte,short,int,long,float,double,boolean,char,java.lang.String)"](b, s, i, l, f, d, bool, ch, str);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number}
   */
  this.superMethodOverloadedBySubclass = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_superInterface1["superMethodOverloadedBySubclass()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_superInterface1;
};

// We export the Constructor function
module.exports = SuperInterface1;