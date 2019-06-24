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

/** @module vertx-js/future */
var utils = require('vertx-js/util/utils');
var Promise = require('vertx-js/promise');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JsonArray = io.vertx.core.json.JsonArray;
var JFuture = Java.type('io.vertx.core.Future');

/**
 Represents the result of an action that may, or may not, have occurred yet.
 <p>

 @class
*/
var Future = function(j_val, j_arg_0) {

  var j_future = j_val;
  var that = this;
  var j_T = typeof j_arg_0 !== 'undefined' ? j_arg_0 : utils.unknown_jtype;
  var __super_future = this.future;
  var __super_succeededFuture = this.succeededFuture;
  var __super_succeededFuture = this.succeededFuture;
  var __super_failedFuture = this.failedFuture;
  var __super_failedFuture = this.failedFuture;
  var __super_isComplete = this.isComplete;
  var __super_setHandler = this.setHandler;
  var __super_getHandler = this.getHandler;
  var __super_result = this.result;
  var __super_cause = this.cause;
  var __super_succeeded = this.succeeded;
  var __super_failed = this.failed;
  var __super_compose = this.compose;
  var __super_map = this.map;
  var __super_map = this.map;
  var __super_mapEmpty = this.mapEmpty;
  var __super_recover = this.recover;
  var __super_otherwise = this.otherwise;
  var __super_otherwise = this.otherwise;
  var __super_otherwiseEmpty = this.otherwiseEmpty;
  /**
   Has the future completed?
   <p>
   It's completed if it's either succeeded or failed.

   @public

   @return {boolean} true if completed, false if not
   */
  this.isComplete =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_future["isComplete()"]() ;
    } else if (typeof __super_isComplete != 'undefined') {
      return __super_isComplete.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set a handler for the result.
   <p>
   If the future has already been completed it will be called immediately. Otherwise it will be called when the
   future is completed.

   @public
   @param handler {function} the Handler that will be called with the result 
   @return {Future} a reference to this, so it can be used fluently
   */
  this.setHandler =  function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_future["setHandler(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          handler(j_T.wrap(ar.result()), null);
        } else {
          handler(null, ar.cause());
        }
      }) ;
      return that;
    } else if (__args.length === 0) {
      j_future["setHandler(io.vertx.core.Handler)"](function(ar) {
        if (ar.succeeded()) {
          function() { /* Ignore callback */ }(j_T.wrap(ar.result()), null);
        } else {
          function() { /* Ignore callback */ }(null, ar.cause());
        }
      }) ;
      return that;
    } else if (typeof __super_setHandler != 'undefined') {
      return __super_setHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {function} the handler for the result
   */
  this.getHandler =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnHandlerAsyncResult(j_future["getHandler()"](), function(result) { return j_T.unwrap(result); }) ;
    } else if (typeof __super_getHandler != 'undefined') {
      return __super_getHandler.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   The result of the operation. This will be null if the operation failed.

   @public

   @return {Object} the result or null if the operation failed.
   */
  this.result =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_T.wrap(j_future["result()"]()) ;
    } else if (typeof __super_result != 'undefined') {
      return __super_result.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   A Throwable describing failure. This will be null if the operation succeeded.

   @public

   @return {todo} the cause or null if the operation succeeded.
   */
  this.cause =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnThrowable(j_future["cause()"]()) ;
    } else if (typeof __super_cause != 'undefined') {
      return __super_cause.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Did it succeed?

   @public

   @return {boolean} true if it succeded or false otherwise
   */
  this.succeeded =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_future["succeeded()"]() ;
    } else if (typeof __super_succeeded != 'undefined') {
      return __super_succeeded.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Did it fail?

   @public

   @return {boolean} true if it failed or false otherwise
   */
  this.failed =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_future["failed()"]() ;
    } else if (typeof __super_failed != 'undefined') {
      return __super_failed.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Compose this future with a <code>mapper</code> function.<p>

   When this future (the one on which <code>compose</code> is called) succeeds, the <code>mapper</code> will be called with
   the completed value and this mapper returns another future object. This returned future completion will complete
   the future returned by this method call.<p>

   If the <code>mapper</code> throws an exception, the returned future will be failed with this exception.<p>

   When this future fails, the failure will be propagated to the returned future and the <code>mapper</code>
   will not be called.

   @public
   @param mapper {function} the mapper function 
   @return {Future} the composed future
   */
  this.compose =  function(mapper) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(Future, j_future["compose(java.util.function.Function)"](function(jVal) {
        var jRet = mapper(j_T.wrap(jVal));
        return jRet._jdel;
      }), undefined) ;
    } else if (typeof __super_compose != 'undefined') {
      return __super_compose.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Map the result of a future to a specific <code>value</code>.<p>

   When this future succeeds, this <code>value</code> will complete the future returned by this method call.<p>

   When this future fails, the failure will be propagated to the returned future.

   @public
   @param value {Object} the value that eventually completes the mapped future 
   @return {Future} the mapped future
   */
  this.map =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(Future, j_future["map(java.util.function.Function)"](function(jVal) {
        var jRet = __args[0](j_T.wrap(jVal));
        return utils.convParamTypeUnknown(jRet);
      }), undefined) ;
    } else if (__args.length === 1 && typeof __args[0] !== 'function') {
      return utils.convReturnVertxGen(Future, j_future["map(java.lang.Object)"](utils.convParamTypeUnknown(__args[0])), undefined) ;
    } else if (typeof __super_map != 'undefined') {
      return __super_map.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Map the result of a future to <code>null</code>.<p>

   This is a conveniency for <code>future.map((T) null)</code> or <code>future.map((Void) null)</code>.<p>

   When this future succeeds, <code>null</code> will complete the future returned by this method call.<p>

   When this future fails, the failure will be propagated to the returned future.

   @public

   @return {Future} the mapped future
   */
  this.mapEmpty =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(Future, j_future["mapEmpty()"](), undefined) ;
    } else if (typeof __super_mapEmpty != 'undefined') {
      return __super_mapEmpty.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Handles a failure of this Future by returning the result of another Future.
   If the mapper fails, then the returned future will be failed with this failure.

   @public
   @param mapper {function} A function which takes the exception of a failure and returns a new future. 
   @return {Future} A recovered future
   */
  this.recover =  function(mapper) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(Future, j_future["recover(java.util.function.Function)"](function(jVal) {
        var jRet = mapper(utils.convReturnThrowable(jVal));
        return jRet._jdel;
      }), undefined) ;
    } else if (typeof __super_recover != 'undefined') {
      return __super_recover.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Map the failure of a future to a specific <code>value</code>.<p>

   When this future fails, this <code>value</code> will complete the future returned by this method call.<p>

   When this future succeeds, the result will be propagated to the returned future.

   @public
   @param value {Object} the value that eventually completes the mapped future 
   @return {Future} the mapped future
   */
  this.otherwise =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(Future, j_future["otherwise(java.util.function.Function)"](function(jVal) {
        var jRet = __args[0](utils.convReturnThrowable(jVal));
        return j_T.unwrap(jRet);
      }), undefined) ;
    } else if (__args.length === 1 && j_T.accept(__args[0])) {
      return utils.convReturnVertxGen(Future, j_future["otherwise(java.lang.Object)"](j_T.unwrap(__args[0])), undefined) ;
    } else if (typeof __super_otherwise != 'undefined') {
      return __super_otherwise.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Map the failure of a future to <code>null</code>.<p>

   This is a convenience for <code>future.otherwise((T) null)</code>.<p>

   When this future fails, the <code>null</code> value will complete the future returned by this method call.<p>

   When this future succeeds, the result will be propagated to the returned future.

   @public

   @return {Future} the mapped future
   */
  this.otherwiseEmpty =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(Future, j_future["otherwiseEmpty()"](), undefined) ;
    } else if (typeof __super_otherwiseEmpty != 'undefined') {
      return __super_otherwiseEmpty.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_future;
};

Future._jclass = utils.getJavaClass("io.vertx.core.Future");
Future._jtype = {accept: function(obj) {
    return Future._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(Future.prototype, {});
    Future.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
Future._create = function(jdel) {var obj = Object.create(Future.prototype, {});
  Future.apply(obj, arguments);
  return obj;
}
/**
 Create a future that hasn't completed yet and that is passed to the <code>handler</code> before it is returned.

 @memberof module:vertx-js/future
 @param handler {function} the handler 
 @return {Future} the future.
 */
Future.future =  function(handler) {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'function') {
    return utils.convReturnVertxGen(Future, JFuture["future(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnVertxGen(Promise, jVal, undefined));
    }), undefined) ;
  }else throw new TypeError('function invoked with invalid arguments');
};

/**
 Created a succeeded future with the specified result.

 @memberof module:vertx-js/future
 @param result {Object} the result 
 @return {Future} the future
 */
Future.succeededFuture =  function() {
  var __args = arguments;
  if (__args.length === 0) {
    return utils.convReturnVertxGen(Future, JFuture["succeededFuture()"](), undefined) ;
  } else if (__args.length === 1 && typeof __args[0] !== 'function') {
    return utils.convReturnVertxGen(Future, JFuture["succeededFuture(java.lang.Object)"](utils.convParamTypeUnknown(__args[0])), undefined) ;
  }else throw new TypeError('function invoked with invalid arguments');
};

/**
 Create a failed future with the specified failure message.

 @memberof module:vertx-js/future
 @param failureMessage {string} the failure message 
 @return {Future} the future
 */
Future.failedFuture =  function() {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'object') {
    return utils.convReturnVertxGen(Future, JFuture["failedFuture(java.lang.Throwable)"](utils.convParamThrowable(__args[0])), undefined) ;
  } else if (__args.length === 1 && typeof __args[0] === 'string') {
    return utils.convReturnVertxGen(Future, JFuture["failedFuture(java.lang.String)"](__args[0]), undefined) ;
  }else throw new TypeError('function invoked with invalid arguments');
};

module.exports = Future;