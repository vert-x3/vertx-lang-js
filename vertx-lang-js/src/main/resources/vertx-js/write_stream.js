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

/** @module vertx-js/write_stream */
var utils = require('vertx-js/util/utils');
var StreamBase = require('vertx-js/stream_base');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JWriteStream = io.vertx.core.streams.WriteStream;

/**

 Represents a stream of data that can be written to.
 <p>
 @class
*/
var WriteStream = function(j_val, j_arg_0) {

  var j_writeStream = j_val;
  var that = this;
  var j_T = typeof j_arg_0 !== 'undefined' ? j_arg_0 : utils.unknown_jtype;
  StreamBase.call(this, j_val);

  /**
   Set an exception handler on the write stream.

   @public
   @param handler {function} the exception handler 
   @return {WriteStream} a reference to this, so the API can be used fluently
   */
  this.exceptionHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_writeStream["exceptionHandler(io.vertx.core.Handler)"](handler == null ? null : function(jVal) {
      handler(utils.convReturnThrowable(jVal));
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Write some data to the stream. The data is put on an internal write queue, and the write actually happens
   asynchronously. To avoid running out of memory by putting too much on the write queue,
   check the {@link WriteStream#writeQueueFull} method before writing. This is done automatically if using a {@link Pump}.

   @public
   @param data {Object} the data to write 
   @return {WriteStream} a reference to this, so the API can be used fluently
   */
  this.write = function(data) {
    var __args = arguments;
    if (__args.length === 1 && j_T.accept(__args[0])) {
      j_writeStream["write(java.lang.Object)"](j_T.unwrap(data));
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Same as {@link WriteStream#end} but writes some data to the stream before ending.

   @public
   @param t {Object} 
   */
  this.end = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_writeStream["end()"]();
    }  else if (__args.length === 1 && j_T.accept(__args[0])) {
      j_writeStream["end(java.lang.Object)"](j_T.unwrap(__args[0]));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set the maximum size of the write queue to <code>maxSize</code>. You will still be able to write to the stream even
   if there is more than <code>maxSize</code> items in the write queue. This is used as an indicator by classes such as
   <code>Pump</code> to provide flow control.
   <p/>
   The value is defined by the implementation of the stream, e.g in bytes for a
   {@link NetSocket}, the number of {@link Message} for a
   {@link MessageProducer}, etc...

   @public
   @param maxSize {number} the max size of the write stream 
   @return {WriteStream} a reference to this, so the API can be used fluently
   */
  this.setWriteQueueMaxSize = function(maxSize) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_writeStream["setWriteQueueMaxSize(int)"](maxSize);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   This will return <code>true</code> if there are more bytes in the write queue than the value set using {@link WriteStream#setWriteQueueMaxSize}

   @public

   @return {boolean} true if write queue is full
   */
  this.writeQueueFull = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_writeStream["writeQueueFull()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a drain handler on the stream. If the write queue is full, then the handler will be called when the write
   queue is ready to accept buffers again. See {@link Pump} for an example of this being used.
   <p/>
   The stream implementation defines when the drain handler, for example it could be when the queue size has been
   reduced to <code>maxSize / 2</code>.

   @public
   @param handler {function} the handler 
   @return {WriteStream} a reference to this, so the API can be used fluently
   */
  this.drainHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'function' || __args[0] == null)) {
      j_writeStream["drainHandler(io.vertx.core.Handler)"](handler);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_writeStream;
};

WriteStream._jclass = utils.getJavaClass("io.vertx.core.streams.WriteStream");
WriteStream._jtype = {
  accept: function(obj) {
    return WriteStream._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(WriteStream.prototype, {});
    WriteStream.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
WriteStream._create = function(jdel) {
  var obj = Object.create(WriteStream.prototype, {});
  WriteStream.apply(obj, arguments);
  return obj;
}
module.exports = WriteStream;