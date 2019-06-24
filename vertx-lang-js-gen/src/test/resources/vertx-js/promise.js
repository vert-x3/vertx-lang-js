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

/**
 * This code was copied from generated code from vertx-lang-js module (target/generated-sources/apt/vertx-js)
 */
/** @module vertx-js/promise */
var utils = require('vertx-js/util/utils');
var Future = require('vertx-js/future');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JsonArray = io.vertx.core.json.JsonArray;
var JPromise = Java.type('io.vertx.core.Promise');

/**
 Represents the writable side of an action that may, or may not, have occurred yet.
 <p>
 @class
*/
var Promise = function(j_val, j_arg_0) {

  var j_promise = j_val;
  var that = this;
  var j_T = typeof j_arg_0 !== 'undefined' ? j_arg_0 : utils.unknown_jtype;
  var __super_succeededPromise = this.succeededPromise;
  var __super_succeededPromise = this.succeededPromise;
  var __super_failedPromise = this.failedPromise;
  var __super_failedPromise = this.failedPromise;
  var __super_promise = this.promise;
  var __super_complete = this.complete;
  var __super_complete = this.complete;
  var __super_fail = this.fail;
  var __super_fail = this.fail;
  var __super_tryComplete = this.tryComplete;
  var __super_tryComplete = this.tryComplete;
  var __super_tryFail = this.tryFail;
  var __super_tryFail = this.tryFail;
  var __super_future = this.future;
  /**
   Calls <code>complete(null)</code>

   @public

   */
  this.complete =  function() {
    var __args = arguments;
    if (__args.length === 1 && j_T.accept(__args[0])) {
      j_promise["complete(java.lang.Object)"](j_T.unwrap(__args[0]));
    } else if (__args.length === 0) {
      j_promise["complete()"]();
    } else if (typeof __super_complete != 'undefined') {
      return __super_complete.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Calls {@link Promise#fail} with the <code>message</code>.

   @public
   @param message {string} the failure message 
   */
  this.fail =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object') {
      j_promise["fail(java.lang.Throwable)"](utils.convParamThrowable(__args[0]));
    } else if (__args.length === 1 && typeof __args[0] === 'string') {
      j_promise["fail(java.lang.String)"](__args[0]);
    } else if (typeof __super_fail != 'undefined') {
      return __super_fail.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Calls <code>tryComplete(null)</code>.

   @public

   @return {boolean} <code>false</code> when the future is already completed
   */
  this.tryComplete =  function() {
    var __args = arguments;
    if (__args.length === 1 && j_T.accept(__args[0])) {
      return j_promise["tryComplete(java.lang.Object)"](j_T.unwrap(__args[0])) ;
    } else if (__args.length === 0) {
      return j_promise["tryComplete()"]() ;
    } else if (typeof __super_tryComplete != 'undefined') {
      return __super_tryComplete.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Calls {@link Promise#fail} with the <code>message</code>.

   @public
   @param message {string} the failure message 
   @return {boolean} false when the future is already completed
   */
  this.tryFail =  function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object') {
      return j_promise["tryFail(java.lang.Throwable)"](utils.convParamThrowable(__args[0])) ;
    } else if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_promise["tryFail(java.lang.String)"](__args[0]) ;
    } else if (typeof __super_tryFail != 'undefined') {
      return __super_tryFail.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Future} the {@link Future} associated with this promise, it can be used to be aware of the promise completion
   */
  this.future =  function() {
    var __args = arguments;
    if (__args.length === 0) {
      if (that.cachedfuture == null) {
        that.cachedfuture = utils.convReturnVertxGen(Future, j_promise["future()"](), undefined);
      }
      return that.cachedfuture;
    } else if (typeof __super_future != 'undefined') {
      return __super_future.apply(this, __args);
    }
    else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_promise;
};

Promise._jclass = utils.getJavaClass("io.vertx.core.Promise");
Promise._jtype = {accept: function(obj) {
    return Promise._jclass.isInstance(obj._jdel);
  },wrap: function(jdel) {
    var obj = Object.create(Promise.prototype, {});
    Promise.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
Promise._create = function(jdel) {var obj = Object.create(Promise.prototype, {});
  Promise.apply(obj, arguments);
  return obj;
}
/**
 Created a succeeded promise with the specified <code>result</code>.

 @memberof module:vertx-js/promise
 @param result {Object} the result 
 @return {Promise} the promise
 */
Promise.succeededPromise =  function() {
  var __args = arguments;
  if (__args.length === 0) {
    return utils.convReturnVertxGen(Promise, JPromise["succeededPromise()"](), undefined) ;
  } else if (__args.length === 1 && typeof __args[0] !== 'function') {
    return utils.convReturnVertxGen(Promise, JPromise["succeededPromise(java.lang.Object)"](utils.convParamTypeUnknown(__args[0])), undefined) ;
  }else throw new TypeError('function invoked with invalid arguments');
};

/**
 Create a failed promise with the specified <code>failureMessage</code>.

 @memberof module:vertx-js/promise
 @param failureMessage {string} the failure message 
 @return {Promise} the promise
 */
Promise.failedPromise =  function() {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'object') {
    return utils.convReturnVertxGen(Promise, JPromise["failedPromise(java.lang.Throwable)"](utils.convParamThrowable(__args[0])), undefined) ;
  } else if (__args.length === 1 && typeof __args[0] === 'string') {
    return utils.convReturnVertxGen(Promise, JPromise["failedPromise(java.lang.String)"](__args[0]), undefined) ;
  }else throw new TypeError('function invoked with invalid arguments');
};

/**
 Create a promise that hasn't completed yet

 @memberof module:vertx-js/promise

 @return {Promise} the promise
 */
Promise.promise =  function() {
  var __args = arguments;
  if (__args.length === 0) {
    return utils.convReturnVertxGen(Promise, JPromise["promise()"](), undefined) ;
  }else throw new TypeError('function invoked with invalid arguments');
};

module.exports = Promise;
