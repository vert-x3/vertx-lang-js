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

/** @module vertx-js/web_socket_frame */
var utils = require('vertx-js/util/utils');
var Buffer = require('vertx-js/buffer');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JWebSocketFrame = io.vertx.core.http.WebSocketFrame;

/**
 A WebSocket frame that represents either text or binary data.
 <p>
 A WebSocket message is composed of one or more WebSocket frames.
 <p>
 If there is a just a single frame in the message then a single text or binary frame should be created with final = true.
 <p>
 If there are more than one frames in the message, then the first frame should be a text or binary frame with
 final = false, followed by one or more continuation frames. The last continuation frame should have final = true.

 @class
*/
var WebSocketFrame = function(j_val) {

  var j_webSocketFrame = j_val;
  var that = this;

  /**

   @public

   @return {boolean} true if it's a text frame
   */
  this.isText = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_webSocketFrame["isText()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean} true if it's a binary frame
   */
  this.isBinary = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_webSocketFrame["isBinary()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean} true if it's a continuation frame
   */
  this.isContinuation = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_webSocketFrame["isContinuation()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the content of this frame as a UTF-8 string and returns the converted string. Only use this for text frames.
   */
  this.textData = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedtextData == null) {
        that.cachedtextData = j_webSocketFrame["textData()"]();
      }
      return that.cachedtextData;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Buffer} the data of the frame
   */
  this.binaryData = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedbinaryData == null) {
        that.cachedbinaryData = utils.convReturnVertxGen(Buffer, j_webSocketFrame["binaryData()"]());
      }
      return that.cachedbinaryData;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {boolean} true if this is the final frame.
   */
  this.isFinal = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_webSocketFrame["isFinal()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_webSocketFrame;
};

WebSocketFrame._jclass = utils.getJavaClass("io.vertx.core.http.WebSocketFrame");
WebSocketFrame._jtype = {
  accept: function(obj) {
    return WebSocketFrame._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(WebSocketFrame.prototype, {});
    WebSocketFrame.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
WebSocketFrame._create = function(jdel) {
  var obj = Object.create(WebSocketFrame.prototype, {});
  WebSocketFrame.apply(obj, arguments);
  return obj;
}
/**
 Create a binary WebSocket frame.

 @memberof module:vertx-js/web_socket_frame
 @param data {Buffer} the data for the frame 
 @param isFinal {boolean} true if it's the final frame in the WebSocket message 
 @return {WebSocketFrame} the frame
 */
WebSocketFrame.binaryFrame = function(data, isFinal) {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] ==='boolean') {
    return utils.convReturnVertxGen(WebSocketFrame, JWebSocketFrame["binaryFrame(io.vertx.core.buffer.Buffer,boolean)"](data._jdel, isFinal));
  } else throw new TypeError('function invoked with invalid arguments');
};

/**
 Create a text WebSocket frame.

 @memberof module:vertx-js/web_socket_frame
 @param str {string} the string for the frame 
 @param isFinal {boolean} true if it's the final frame in the WebSocket message 
 @return {WebSocketFrame} the frame
 */
WebSocketFrame.textFrame = function(str, isFinal) {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] ==='boolean') {
    return utils.convReturnVertxGen(WebSocketFrame, JWebSocketFrame["textFrame(java.lang.String,boolean)"](str, isFinal));
  } else throw new TypeError('function invoked with invalid arguments');
};

/**
 Create a continuation frame

 @memberof module:vertx-js/web_socket_frame
 @param data {Buffer} the data for the frame 
 @param isFinal {boolean} true if it's the final frame in the WebSocket message 
 @return {WebSocketFrame} the frame
 */
WebSocketFrame.continuationFrame = function(data, isFinal) {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] ==='boolean') {
    return utils.convReturnVertxGen(WebSocketFrame, JWebSocketFrame["continuationFrame(io.vertx.core.buffer.Buffer,boolean)"](data._jdel, isFinal));
  } else throw new TypeError('function invoked with invalid arguments');
};

module.exports = WebSocketFrame;