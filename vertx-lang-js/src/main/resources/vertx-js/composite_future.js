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

/** @module vertx-js/composite_future */
var utils = require('vertx-js/util/utils');
var Future = require('vertx-js/future');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JCompositeFuture = io.vertx.core.CompositeFuture;

/**

 @class
*/
var CompositeFuture = function(j_val) {

  var j_compositeFuture = j_val;
  var that = this;
  Future.call(this, j_val, CompositeFuture._jtype);

  /**
   Returns true if a wrapped future is completed

   @public
   @param index {number} the wrapped future index 
   @return {boolean}
   */
  this.isComplete = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_compositeFuture["isComplete()"]();
    }  else if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_compositeFuture["isComplete(int)"](__args[0]);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set the result. Any handler will be called, if there is one, and the future will be marked as completed.

   @public
   @param result {CompositeFuture} the result 
   */
  this.complete = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_compositeFuture["complete()"]();
    }  else if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_compositeFuture["complete(io.vertx.core.CompositeFuture)"](__args[0]._jdel);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Set the failure. Any handler will be called, if there is one, and the future will be marked as completed.

   @public
   @param failureMessage {string} the failure message 
   */
  this.fail = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object') {
      j_compositeFuture["fail(java.lang.Throwable)"](utils.convParamThrowable(__args[0]));
    }  else if (__args.length === 1 && typeof __args[0] === 'string') {
      j_compositeFuture["fail(java.lang.String)"](__args[0]);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   The result of the operation. This will be null if the operation failed.

   @public

   @return {CompositeFuture} the result or null if the operation failed.
   */
  this.result = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(CompositeFuture, j_compositeFuture["result()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns a cause of a wrapped future

   @public
   @param index {number} the wrapped future index 
   @return {todo}
   */
  this.cause = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnThrowable(j_compositeFuture["cause()"]());
    }  else if (__args.length === 1 && typeof __args[0] ==='number') {
      return utils.convReturnThrowable(j_compositeFuture["cause(int)"](__args[0]));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns true if a wrapped future is succeeded

   @public
   @param index {number} the wrapped future index 
   @return {boolean}
   */
  this.succeeded = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_compositeFuture["succeeded()"]();
    }  else if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_compositeFuture["succeeded(int)"](__args[0]);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns true if a wrapped future is failed

   @public
   @param index {number} the wrapped future index 
   @return {boolean}
   */
  this.failed = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_compositeFuture["failed()"]();
    }  else if (__args.length === 1 && typeof __args[0] ==='number') {
      return j_compositeFuture["failed(int)"](__args[0]);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Compose this future with a provided <code>next</code> future.<p>
  
   When this (the one on which <code>compose</code> is called) future succeeds, the <code>handler</code> will be called with
   the completed value, this handler should complete the next future.<p>
  
   If the <code>handler</code> throws an exception, the returned future will be failed with this exception.<p>
  
   When this future fails, the failure will be propagated to the <code>next</code> future and the <code>handler</code>
   will not be called.

   @public
   @param handler {function} the handler 
   @param next {Future} the next future 
   @return {Future} the next future, used for chaining
   */
  this.compose = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(Future, j_compositeFuture["compose(java.util.function.Function)"](function(jVal) {
      var jRet = __args[0](utils.convReturnVertxGen(CompositeFuture, jVal));
      return jRet._jdel;
    }), undefined);
    }  else if (__args.length === 2 && typeof __args[0] === 'function' && typeof __args[1] === 'object' && __args[1]._jdel) {
      return utils.convReturnVertxGen(Future, j_compositeFuture["compose(io.vertx.core.Handler,io.vertx.core.Future)"](function(jVal) {
      __args[0](utils.convReturnVertxGen(CompositeFuture, jVal));
    }, __args[1]._jdel), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Map the result of a future to a specific <code>value</code>.<p>
  
   When this future succeeds, this <code>value</code> will complete the future returned by this method call.<p>
  
   When this future fails, the failure will be propagated to the returned future.

   @public
   @param value {Object} the value that eventually completes the mapped future 
   @return {Future} the mapped future
   */
  this.map = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnVertxGen(Future, j_compositeFuture["map(java.util.function.Function)"](function(jVal) {
      var jRet = __args[0](utils.convReturnVertxGen(CompositeFuture, jVal));
      return utils.convParamTypeUnknown(jRet);
    }), undefined);
    }  else if (__args.length === 1 && typeof __args[0] !== 'function') {
      return utils.convReturnVertxGen(Future, j_compositeFuture["map(java.lang.Object)"](utils.convParamTypeUnknown(__args[0])), undefined);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {function} an handler completing this future
   */
  this.completer = function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedcompleter == null) {
        that.cachedcompleter = utils.convReturnHandlerAsyncResult(j_compositeFuture["completer()"](), function(result) { return result._jdel; });
      }
      return that.cachedcompleter;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {CompositeFuture}
   */
  this.setHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_compositeFuture["setHandler(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnVertxGen(CompositeFuture, ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Returns the result of a wrapped future

   @public
   @param index {number} the wrapped future index 
   @return {Object}
   */
  this.resultAt = function(index) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      return utils.convReturnTypeUnknown(j_compositeFuture["resultAt(int)"](index));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number} the number of wrapped future
   */
  this.size = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_compositeFuture["size()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_compositeFuture;
};

CompositeFuture._jclass = utils.getJavaClass("io.vertx.core.CompositeFuture");
CompositeFuture._jtype = {
  accept: function(obj) {
    return CompositeFuture._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(CompositeFuture.prototype, {});
    CompositeFuture.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
CompositeFuture._create = function(jdel) {
  var obj = Object.create(CompositeFuture.prototype, {});
  CompositeFuture.apply(obj, arguments);
  return obj;
}
/**
 Like {@link CompositeFuture#all} but with 6 futures.

 @memberof module:vertx-js/composite_future
 @param f1 {Future} 
 @param f2 {Future} 
 @param f3 {Future} 
 @param f4 {Future} 
 @param f5 {Future} 
 @param f6 {Future} 
 @return {CompositeFuture}
 */
CompositeFuture.all = function() {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
    return utils.convReturnVertxGen(CompositeFuture, JCompositeFuture["all(java.util.List)"](utils.convParamListVertxGen(__args[0])));
  }else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'object' && __args[1]._jdel) {
    return utils.convReturnVertxGen(CompositeFuture, JCompositeFuture["all(io.vertx.core.Future,io.vertx.core.Future)"](__args[0]._jdel, __args[1]._jdel));
  }else if (__args.length === 3 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'object' && __args[2]._jdel) {
    return utils.convReturnVertxGen(CompositeFuture, JCompositeFuture["all(io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future)"](__args[0]._jdel, __args[1]._jdel, __args[2]._jdel));
  }else if (__args.length === 4 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'object' && __args[3]._jdel) {
    return utils.convReturnVertxGen(CompositeFuture, JCompositeFuture["all(io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future)"](__args[0]._jdel, __args[1]._jdel, __args[2]._jdel, __args[3]._jdel));
  }else if (__args.length === 5 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'object' && __args[4]._jdel) {
    return utils.convReturnVertxGen(CompositeFuture, JCompositeFuture["all(io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future)"](__args[0]._jdel, __args[1]._jdel, __args[2]._jdel, __args[3]._jdel, __args[4]._jdel));
  }else if (__args.length === 6 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'object' && __args[4]._jdel && typeof __args[5] === 'object' && __args[5]._jdel) {
    return utils.convReturnVertxGen(CompositeFuture, JCompositeFuture["all(io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future)"](__args[0]._jdel, __args[1]._jdel, __args[2]._jdel, __args[3]._jdel, __args[4]._jdel, __args[5]._jdel));
  } else throw new TypeError('function invoked with invalid arguments');
};

/**
 Like {@link CompositeFuture#any} but with 6 futures.

 @memberof module:vertx-js/composite_future
 @param f1 {Future} 
 @param f2 {Future} 
 @param f3 {Future} 
 @param f4 {Future} 
 @param f5 {Future} 
 @param f6 {Future} 
 @return {CompositeFuture}
 */
CompositeFuture.any = function() {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
    return utils.convReturnVertxGen(CompositeFuture, JCompositeFuture["any(java.util.List)"](utils.convParamListVertxGen(__args[0])));
  }else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'object' && __args[1]._jdel) {
    return utils.convReturnVertxGen(CompositeFuture, JCompositeFuture["any(io.vertx.core.Future,io.vertx.core.Future)"](__args[0]._jdel, __args[1]._jdel));
  }else if (__args.length === 3 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'object' && __args[2]._jdel) {
    return utils.convReturnVertxGen(CompositeFuture, JCompositeFuture["any(io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future)"](__args[0]._jdel, __args[1]._jdel, __args[2]._jdel));
  }else if (__args.length === 4 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'object' && __args[3]._jdel) {
    return utils.convReturnVertxGen(CompositeFuture, JCompositeFuture["any(io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future)"](__args[0]._jdel, __args[1]._jdel, __args[2]._jdel, __args[3]._jdel));
  }else if (__args.length === 5 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'object' && __args[4]._jdel) {
    return utils.convReturnVertxGen(CompositeFuture, JCompositeFuture["any(io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future)"](__args[0]._jdel, __args[1]._jdel, __args[2]._jdel, __args[3]._jdel, __args[4]._jdel));
  }else if (__args.length === 6 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'object' && __args[4]._jdel && typeof __args[5] === 'object' && __args[5]._jdel) {
    return utils.convReturnVertxGen(CompositeFuture, JCompositeFuture["any(io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future)"](__args[0]._jdel, __args[1]._jdel, __args[2]._jdel, __args[3]._jdel, __args[4]._jdel, __args[5]._jdel));
  } else throw new TypeError('function invoked with invalid arguments');
};

/**
 Like {@link CompositeFuture#join} but with 6 futures.

 @memberof module:vertx-js/composite_future
 @param f1 {Future} 
 @param f2 {Future} 
 @param f3 {Future} 
 @param f4 {Future} 
 @param f5 {Future} 
 @param f6 {Future} 
 @return {CompositeFuture}
 */
CompositeFuture.join = function() {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
    return utils.convReturnVertxGen(CompositeFuture, JCompositeFuture["join(java.util.List)"](utils.convParamListVertxGen(__args[0])));
  }else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'object' && __args[1]._jdel) {
    return utils.convReturnVertxGen(CompositeFuture, JCompositeFuture["join(io.vertx.core.Future,io.vertx.core.Future)"](__args[0]._jdel, __args[1]._jdel));
  }else if (__args.length === 3 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'object' && __args[2]._jdel) {
    return utils.convReturnVertxGen(CompositeFuture, JCompositeFuture["join(io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future)"](__args[0]._jdel, __args[1]._jdel, __args[2]._jdel));
  }else if (__args.length === 4 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'object' && __args[3]._jdel) {
    return utils.convReturnVertxGen(CompositeFuture, JCompositeFuture["join(io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future)"](__args[0]._jdel, __args[1]._jdel, __args[2]._jdel, __args[3]._jdel));
  }else if (__args.length === 5 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'object' && __args[4]._jdel) {
    return utils.convReturnVertxGen(CompositeFuture, JCompositeFuture["join(io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future)"](__args[0]._jdel, __args[1]._jdel, __args[2]._jdel, __args[3]._jdel, __args[4]._jdel));
  }else if (__args.length === 6 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'object' && __args[1]._jdel && typeof __args[2] === 'object' && __args[2]._jdel && typeof __args[3] === 'object' && __args[3]._jdel && typeof __args[4] === 'object' && __args[4]._jdel && typeof __args[5] === 'object' && __args[5]._jdel) {
    return utils.convReturnVertxGen(CompositeFuture, JCompositeFuture["join(io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future,io.vertx.core.Future)"](__args[0]._jdel, __args[1]._jdel, __args[2]._jdel, __args[3]._jdel, __args[4]._jdel, __args[5]._jdel));
  } else throw new TypeError('function invoked with invalid arguments');
};

module.exports = CompositeFuture;