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

/** @module vertx-js/message_producer */
var utils = require('vertx-js/util/utils');
var WriteStream = require('vertx-js/write_stream');
var Message = require('vertx-js/message');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JMessageProducer = io.vertx.core.eventbus.MessageProducer;
var DeliveryOptions = io.vertx.core.eventbus.DeliveryOptions;

/**
 Represents a stream of message that can be written to.
 <p>

 @class
*/
var MessageProducer = function(j_val, j_arg_0) {

  var j_messageProducer = j_val;
  var that = this;
  var j_T = typeof j_arg_0 !== 'undefined' ? j_arg_0 : utils.unknown_jtype;
  WriteStream.call(this, j_val);

  /**
   Same as {@link MessageProducer#end} but writes some data to the stream before ending.

   @public
   @param t {Object} 
   */
  this.end = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_messageProducer["end()"]();
    }  else if (__args.length === 1 && j_T.accept(__args[0])) {
      j_messageProducer["end(java.lang.Object)"](j_T.unwrap(__args[0]));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   This will return <code>true</code> if there are more bytes in the write queue than the value set using {@link MessageProducer#setWriteQueueMaxSize}

   @public

   @return {boolean} true if write queue is full
   */
  this.writeQueueFull = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_messageProducer["writeQueueFull()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param message {Object} 
   @param replyHandler {function} 
   @return {MessageProducer}
   */
  this.send = function() {
    var __args = arguments;
    if (__args.length === 1 && j_T.accept(__args[0])) {
      return utils.convReturnVertxGen(MessageProducer, j_messageProducer["send(java.lang.Object)"](j_T.unwrap(__args[0])), undefined);
    }  else if (__args.length === 2 && j_T.accept(__args[0]) && typeof __args[1] === 'function') {
      return utils.convReturnVertxGen(MessageProducer, j_messageProducer["send(java.lang.Object,io.vertx.core.Handler)"](j_T.unwrap(__args[0]), function(ar) {
      if (ar.succeeded()) {
        __args[1](utils.convReturnVertxGen(Message, ar.result(), undefined), null);
      } else {
        __args[1](null, ar.cause());
      }
    }), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {MessageProducer}
   */
  this.exceptionHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_messageProducer["exceptionHandler(io.vertx.core.Handler)"](handler == null ? null : function(jVal) {
      handler(utils.convReturnThrowable(jVal));
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param data {Object} 
   @return {MessageProducer}
   */
  this.write = function(data) {
    var __args = arguments;
    if (__args.length === 1 && j_T.accept(__args[0])) {
      j_messageProducer["write(java.lang.Object)"](j_T.unwrap(data));
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param maxSize {number} 
   @return {MessageProducer}
   */
  this.setWriteQueueMaxSize = function(maxSize) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_messageProducer["setWriteQueueMaxSize(int)"](maxSize);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {MessageProducer}
   */
  this.drainHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_messageProducer["drainHandler(io.vertx.core.Handler)"](handler);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Update the delivery options of this producer.

   @public
   @param options {Object} the new options 
   @return {MessageProducer} this producer object
   */
  this.deliveryOptions = function(options) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_messageProducer["deliveryOptions(io.vertx.core.eventbus.DeliveryOptions)"](options != null ? new DeliveryOptions(new JsonObject(JSON.stringify(options))) : null);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} The address to which the producer produces messages.
   */
  this.address = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_messageProducer["address()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Closes the producer, this method should be called when the message producer is not used anymore.

   @public

   */
  this.close = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_messageProducer["close()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_messageProducer;
};

MessageProducer._jclass = utils.getJavaClass("io.vertx.core.eventbus.MessageProducer");
MessageProducer._jtype = {
  accept: function(obj) {
    return MessageProducer._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(MessageProducer.prototype, {});
    MessageProducer.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
MessageProducer._create = function(jdel) {
  var obj = Object.create(MessageProducer.prototype, {});
  MessageProducer.apply(obj, arguments);
  return obj;
}
module.exports = MessageProducer;