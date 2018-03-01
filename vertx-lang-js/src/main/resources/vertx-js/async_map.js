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

/** @module vertx-js/async_map */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JAsyncMap = io.vertx.core.shareddata.AsyncMap;

/**

 An asynchronous map.

 @class
*/
var AsyncMap = function(j_val, j_arg_0, j_arg_1) {

  var j_asyncMap = j_val;
  var that = this;
  var j_K = typeof j_arg_0 !== 'undefined' ? j_arg_0 : utils.unknown_jtype;
  var j_V = typeof j_arg_1 !== 'undefined' ? j_arg_1 : utils.unknown_jtype;

  /**
   Get a value from the map, asynchronously.

   @public
   @param k {Object} the key 
   @param resultHandler {function} - this will be called some time later with the async result. 
   */
  this.get = function(k, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && j_K.accept(__args[0]) && typeof __args[1] === 'function') {
      j_asyncMap["get(java.lang.Object,io.vertx.core.Handler)"](j_K.unwrap(k), function(ar) {
      if (ar.succeeded()) {
        resultHandler(j_V.wrap(ar.result()), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Like {@link AsyncMap#put} but specifying a time to live for the entry. Entry will expire and get evicted after the
   ttl.

   @public
   @param k {Object} the key 
   @param v {Object} the value 
   @param ttl {number} The time to live (in ms) for the entry 
   @param completionHandler {function} the handler 
   */
  this.put = function() {
    var __args = arguments;
    if (__args.length === 3 && j_K.accept(__args[0]) && j_V.accept(__args[1]) && typeof __args[2] === 'function') {
      j_asyncMap["put(java.lang.Object,java.lang.Object,io.vertx.core.Handler)"](j_K.unwrap(__args[0]), j_V.unwrap(__args[1]), function(ar) {
      if (ar.succeeded()) {
        __args[2](null, null);
      } else {
        __args[2](null, ar.cause());
      }
    });
    }  else if (__args.length === 4 && j_K.accept(__args[0]) && j_V.accept(__args[1]) && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      j_asyncMap["put(java.lang.Object,java.lang.Object,long,io.vertx.core.Handler)"](j_K.unwrap(__args[0]), j_V.unwrap(__args[1]), __args[2], function(ar) {
      if (ar.succeeded()) {
        __args[3](null, null);
      } else {
        __args[3](null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Link {@link AsyncMap#putIfAbsent} but specifying a time to live for the entry. Entry will expire and get evicted
   after the ttl.

   @public
   @param k {Object} the key 
   @param v {Object} the value 
   @param ttl {number} The time to live (in ms) for the entry 
   @param completionHandler {function} the handler 
   */
  this.putIfAbsent = function() {
    var __args = arguments;
    if (__args.length === 3 && j_K.accept(__args[0]) && j_V.accept(__args[1]) && typeof __args[2] === 'function') {
      j_asyncMap["putIfAbsent(java.lang.Object,java.lang.Object,io.vertx.core.Handler)"](j_K.unwrap(__args[0]), j_V.unwrap(__args[1]), function(ar) {
      if (ar.succeeded()) {
        __args[2](j_V.wrap(ar.result()), null);
      } else {
        __args[2](null, ar.cause());
      }
    });
    }  else if (__args.length === 4 && j_K.accept(__args[0]) && j_V.accept(__args[1]) && typeof __args[2] ==='number' && typeof __args[3] === 'function') {
      j_asyncMap["putIfAbsent(java.lang.Object,java.lang.Object,long,io.vertx.core.Handler)"](j_K.unwrap(__args[0]), j_V.unwrap(__args[1]), __args[2], function(ar) {
      if (ar.succeeded()) {
        __args[3](j_V.wrap(ar.result()), null);
      } else {
        __args[3](null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Remove a value from the map, asynchronously.

   @public
   @param k {Object} the key 
   @param resultHandler {function} - this will be called some time later to signify the value has been removed 
   */
  this.remove = function(k, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && j_K.accept(__args[0]) && typeof __args[1] === 'function') {
      j_asyncMap["remove(java.lang.Object,io.vertx.core.Handler)"](j_K.unwrap(k), function(ar) {
      if (ar.succeeded()) {
        resultHandler(j_V.wrap(ar.result()), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Remove a value from the map, only if entry already exists with same value.

   @public
   @param k {Object} the key 
   @param v {Object} the value 
   @param resultHandler {function} - this will be called some time later to signify the value has been removed 
   */
  this.removeIfPresent = function(k, v, resultHandler) {
    var __args = arguments;
    if (__args.length === 3 && j_K.accept(__args[0]) && j_V.accept(__args[1]) && typeof __args[2] === 'function') {
      j_asyncMap["removeIfPresent(java.lang.Object,java.lang.Object,io.vertx.core.Handler)"](j_K.unwrap(k), j_V.unwrap(v), function(ar) {
      if (ar.succeeded()) {
        resultHandler(ar.result(), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Replace the entry only if it is currently mapped to some value

   @public
   @param k {Object} the key 
   @param v {Object} the new value 
   @param resultHandler {function} the result handler will be passed the previous value 
   */
  this.replace = function(k, v, resultHandler) {
    var __args = arguments;
    if (__args.length === 3 && j_K.accept(__args[0]) && j_V.accept(__args[1]) && typeof __args[2] === 'function') {
      j_asyncMap["replace(java.lang.Object,java.lang.Object,io.vertx.core.Handler)"](j_K.unwrap(k), j_V.unwrap(v), function(ar) {
      if (ar.succeeded()) {
        resultHandler(j_V.wrap(ar.result()), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Replace the entry only if it is currently mapped to a specific value

   @public
   @param k {Object} the key 
   @param oldValue {Object} the existing value 
   @param newValue {Object} the new value 
   @param resultHandler {function} the result handler 
   */
  this.replaceIfPresent = function(k, oldValue, newValue, resultHandler) {
    var __args = arguments;
    if (__args.length === 4 && j_K.accept(__args[0]) && j_V.accept(__args[1]) && j_V.accept(__args[2]) && typeof __args[3] === 'function') {
      j_asyncMap["replaceIfPresent(java.lang.Object,java.lang.Object,java.lang.Object,io.vertx.core.Handler)"](j_K.unwrap(k), j_V.unwrap(oldValue), j_V.unwrap(newValue), function(ar) {
      if (ar.succeeded()) {
        resultHandler(ar.result(), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Clear all entries in the map

   @public
   @param resultHandler {function} called on completion 
   */
  this.clear = function(resultHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_asyncMap["clear(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        resultHandler(null, null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Provide the number of entries in the map

   @public
   @param resultHandler {function} handler which will receive the number of entries 
   */
  this.size = function(resultHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_asyncMap["size(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        resultHandler(ar.result(), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_asyncMap;
};

AsyncMap._jclass = utils.getJavaClass("io.vertx.core.shareddata.AsyncMap");
AsyncMap._jtype = {
  accept: function(obj) {
    return AsyncMap._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(AsyncMap.prototype, {});
    AsyncMap.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
AsyncMap._create = function(jdel) {
  var obj = Object.create(AsyncMap.prototype, {});
  AsyncMap.apply(obj, arguments);
  return obj;
}
module.exports = AsyncMap;