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

/** @module vertx-js/record_parser */
var utils = require('vertx-js/util/utils');
var Buffer = require('vertx-js/buffer');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JRecordParser = io.vertx.core.parsetools.RecordParser;

/**
 A helper class which allows you to easily parse protocols which are delimited by a sequence of bytes, or fixed
 size records.
 <p>
 @class
*/
var RecordParser = function(j_val) {

  var j_recordParser = j_val;
  var that = this;

  /**

   @public
   @param output {function} 
   */
  this.setOutput = function(output) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_recordParser["setOutput(io.vertx.core.Handler)"](function(jVal) {
      output(utils.convReturnVertxGen(Buffer, jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Flip the parser into delimited mode, and where the delimiter can be represented
   by the delimiter <code>delim</code>.
   <p>
   This method can be called multiple times with different values of delim while data is being parsed.

   @public
   @param delim {Buffer} the new delimiter 
   */
  this.delimitedMode = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_recordParser["delimitedMode(java.lang.String)"](__args[0]);
    }  else if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_recordParser["delimitedMode(io.vertx.core.buffer.Buffer)"](__args[0]._jdel);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Flip the parser into fixed size mode, where the record size is specified by <code>size</code> in bytes.
   <p>
   This method can be called multiple times with different values of size while data is being parsed.

   @public
   @param size {number} the new record size 
   */
  this.fixedSizeMode = function(size) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_recordParser["fixedSizeMode(int)"](size);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   This method is called to provide the parser with data.

   @public
   @param buffer {Buffer} a chunk of data 
   */
  this.handle = function(buffer) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_recordParser["handle(io.vertx.core.buffer.Buffer)"](buffer._jdel);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_recordParser;
};

RecordParser._jclass = utils.getJavaClass("io.vertx.core.parsetools.RecordParser");
RecordParser._jtype = {
  accept: function(obj) {
    return RecordParser._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(RecordParser.prototype, {});
    RecordParser.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
RecordParser._create = function(jdel) {
  var obj = Object.create(RecordParser.prototype, {});
  RecordParser.apply(obj, arguments);
  return obj;
}
/**
 Create a new <code>RecordParser</code> instance, initially in delimited mode, and where the delimiter can be represented
 by the <code>Buffer</code> delim.
 <p>
 <code>output</code> Will receive whole records which have been parsed.

 @memberof module:vertx-js/record_parser
 @param delim {Buffer} the initial delimiter buffer 
 @param output {function} handler that will receive the output 
 @return {RecordParser}
 */
RecordParser.newDelimited = function() {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
    return utils.convReturnVertxGen(RecordParser, JRecordParser["newDelimited(java.lang.String,io.vertx.core.Handler)"](__args[0], function(jVal) {
    __args[1](utils.convReturnVertxGen(Buffer, jVal));
  }));
  }else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'function') {
    return utils.convReturnVertxGen(RecordParser, JRecordParser["newDelimited(io.vertx.core.buffer.Buffer,io.vertx.core.Handler)"](__args[0]._jdel, function(jVal) {
    __args[1](utils.convReturnVertxGen(Buffer, jVal));
  }));
  } else throw new TypeError('function invoked with invalid arguments');
};

/**
 Create a new <code>RecordParser</code> instance, initially in fixed size mode, and where the record size is specified
 by the <code>size</code> parameter.
 <p>
 <code>output</code> Will receive whole records which have been parsed.

 @memberof module:vertx-js/record_parser
 @param size {number} the initial record size 
 @param output {function} handler that will receive the output 
 @return {RecordParser}
 */
RecordParser.newFixed = function(size, output) {
  var __args = arguments;
  if (__args.length === 2 && typeof __args[0] ==='number' && typeof __args[1] === 'function') {
    return utils.convReturnVertxGen(RecordParser, JRecordParser["newFixed(int,io.vertx.core.Handler)"](size, function(jVal) {
    output(utils.convReturnVertxGen(Buffer, jVal));
  }));
  } else throw new TypeError('function invoked with invalid arguments');
};

module.exports = RecordParser;