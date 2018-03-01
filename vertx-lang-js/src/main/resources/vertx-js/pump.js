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

/** @module vertx-js/pump */
var utils = require('vertx-js/util/utils');
var WriteStream = require('vertx-js/write_stream');
var ReadStream = require('vertx-js/read_stream');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JPump = io.vertx.core.streams.Pump;

/**

 @class
*/
var Pump = function(j_val) {

  var j_pump = j_val;
  var that = this;

  /**
   Set the write queue max size to <code>maxSize</code>

   @public
   @param maxSize {number} the max size 
   @return {Pump} a reference to this, so the API can be used fluently
   */
  this.setWriteQueueMaxSize = function(maxSize) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_pump["setWriteQueueMaxSize(int)"](maxSize);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Start the Pump. The Pump can be started and stopped multiple times.

   @public

   @return {Pump} a reference to this, so the API can be used fluently
   */
  this.start = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_pump["start()"]();
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Stop the Pump. The Pump can be started and stopped multiple times.

   @public

   @return {Pump} a reference to this, so the API can be used fluently
   */
  this.stop = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_pump["stop()"]();
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Return the total number of items pumped by this pump.

   @public

   @return {number}
   */
  this.numberPumped = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_pump["numberPumped()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_pump;
};

Pump._jclass = utils.getJavaClass("io.vertx.core.streams.Pump");
Pump._jtype = {
  accept: function(obj) {
    return Pump._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(Pump.prototype, {});
    Pump.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
Pump._create = function(jdel) {
  var obj = Object.create(Pump.prototype, {});
  Pump.apply(obj, arguments);
  return obj;
}
/**
 Create a new <code>Pump</code> with the given <code>ReadStream</code> and <code>WriteStream</code> and
 <code>writeQueueMaxSize</code>

 @memberof module:vertx-js/pump
 @param rs {ReadStream} the read stream 
 @param ws {WriteStream} the write stream 
 @param writeQueueMaxSize {number} the max size of the write queue 
 @return {Pump} the pump
 */
Pump.pump = function() {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'object' && __args[1]._jdel) {
    return utils.convReturnVertxGen(Pump, JPump["pump(io.vertx.core.streams.ReadStream,io.vertx.core.streams.WriteStream)"](__args[0]._jdel, __args[1]._jdel));
  }else if (__args.length === 3 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] ==='number') {
    return utils.convReturnVertxGen(Pump, JPump["pump(io.vertx.core.streams.ReadStream,io.vertx.core.streams.WriteStream,int)"](__args[0]._jdel, __args[1]._jdel, __args[2]));
  } else throw new TypeError('function invoked with invalid arguments');
};

module.exports = Pump;