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

/** @module testmodel-js/collection_tck */
var utils = require('vertx-js/util/utils');
var RefedInterface1 = require('testmodel-js/refed_interface1');
var RefedInterface2 = require('testmodel-js/refed_interface2');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JCollectionTCK = io.vertx.codegen.testmodel.CollectionTCK;
var TestDataObject = io.vertx.codegen.testmodel.TestDataObject;

/**

 @class
*/
var CollectionTCK = function(j_val) {

  var j_collectionTCK = j_val;
  var that = this;

  /**

   @public
   @param listString {Array.<string>} 
   @param listByte {Array.<number>} 
   @param listShort {Array.<number>} 
   @param listInt {Array.<number>} 
   @param listLong {Array.<number>} 
   @param listJsonObject {Array.<Object>} 
   @param listJsonArray {Array.<todo>} 
   @param listVertxGen {Array.<RefedInterface1>} 
   @param listDataObject {Array.<Object>} 
   @param listEnum {Array.<Object>} 
   */
  this.methodWithListParams = function(listString, listByte, listShort, listInt, listLong, listJsonObject, listJsonArray, listVertxGen, listDataObject, listEnum) {
    var __args = arguments;
    if (__args.length === 10 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'object' && __args[2] instanceof Array && typeof __args[3] === 'object' && __args[3] instanceof Array && typeof __args[4] === 'object' && __args[4] instanceof Array && typeof __args[5] === 'object' && __args[5] instanceof Array && typeof __args[6] === 'object' && __args[6] instanceof Array && typeof __args[7] === 'object' && __args[7] instanceof Array && typeof __args[8] === 'object' && __args[8] instanceof Array && typeof __args[9] === 'object' && __args[9] instanceof Array) {
      j_collectionTCK["methodWithListParams(java.util.List,java.util.List,java.util.List,java.util.List,java.util.List,java.util.List,java.util.List,java.util.List,java.util.List,java.util.List)"](utils.convParamListBasicOther(listString), utils.convParamListByte(listByte), utils.convParamListShort(listShort), utils.convParamListBasicOther(listInt), utils.convParamListLong(listLong), utils.convParamListJsonObject(listJsonObject), utils.convParamListJsonArray(listJsonArray), utils.convParamListVertxGen(listVertxGen), utils.convParamListDataObject(listDataObject, function(json) { return new TestDataObject(json); }), utils.convParamListEnum(listEnum, function(val) { return Packages.io.vertx.codegen.testmodel.TestEnum.valueOf(val); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param setString {Array.<string>} 
   @param setByte {Array.<number>} 
   @param setShort {Array.<number>} 
   @param setInt {Array.<number>} 
   @param setLong {Array.<number>} 
   @param setJsonObject {Array.<Object>} 
   @param setJsonArray {Array.<todo>} 
   @param setVertxGen {Array.<RefedInterface1>} 
   @param setDataObject {Array.<Object>} 
   @param setEnum {Array.<Object>} 
   */
  this.methodWithSetParams = function(setString, setByte, setShort, setInt, setLong, setJsonObject, setJsonArray, setVertxGen, setDataObject, setEnum) {
    var __args = arguments;
    if (__args.length === 10 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'object' && __args[1] instanceof Array && typeof __args[2] === 'object' && __args[2] instanceof Array && typeof __args[3] === 'object' && __args[3] instanceof Array && typeof __args[4] === 'object' && __args[4] instanceof Array && typeof __args[5] === 'object' && __args[5] instanceof Array && typeof __args[6] === 'object' && __args[6] instanceof Array && typeof __args[7] === 'object' && __args[7] instanceof Array && typeof __args[8] === 'object' && __args[8] instanceof Array && typeof __args[9] === 'object' && __args[9] instanceof Array) {
      j_collectionTCK["methodWithSetParams(java.util.Set,java.util.Set,java.util.Set,java.util.Set,java.util.Set,java.util.Set,java.util.Set,java.util.Set,java.util.Set,java.util.Set)"](utils.convParamSetBasicOther(setString), utils.convParamSetByte(setByte), utils.convParamSetShort(setShort), utils.convParamSetBasicOther(setInt), utils.convParamSetLong(setLong), utils.convParamSetJsonObject(setJsonObject), utils.convParamSetJsonArray(setJsonArray), utils.convParamSetVertxGen(setVertxGen), utils.convParamSetDataObject(setDataObject, function(json) { return new TestDataObject(json); }), utils.convParamSetEnum(setEnum, function(val) { return Packages.io.vertx.codegen.testmodel.TestEnum.valueOf(val); }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param mapString {Array.<string>} 
   @param mapByte {Array.<string>} 
   @param mapShort {Array.<string>} 
   @param mapInt {Array.<string>} 
   @param mapLong {Array.<string>} 
   @param mapJsonObject {Array.<string>} 
   @param mapJsonArray {Array.<string>} 
   @param mapVertxGen {Array.<string>} 
   */
  this.methodWithMapParams = function(mapString, mapByte, mapShort, mapInt, mapLong, mapJsonObject, mapJsonArray, mapVertxGen) {
    var __args = arguments;
    if (__args.length === 8 && (typeof __args[0] === 'object' && __args[0] != null) && (typeof __args[1] === 'object' && __args[1] != null) && (typeof __args[2] === 'object' && __args[2] != null) && (typeof __args[3] === 'object' && __args[3] != null) && (typeof __args[4] === 'object' && __args[4] != null) && (typeof __args[5] === 'object' && __args[5] != null) && (typeof __args[6] === 'object' && __args[6] != null) && (typeof __args[7] === 'object' && __args[7] != null)) {
      j_collectionTCK["methodWithMapParams(java.util.Map,java.util.Map,java.util.Map,java.util.Map,java.util.Map,java.util.Map,java.util.Map,java.util.Map)"](mapString, utils.convParamMapByte(mapByte), utils.convParamMapShort(mapShort), mapInt, utils.convParamMapLong(mapLong), utils.convParamMapJsonObject(mapJsonObject), utils.convParamMapJsonArray(mapJsonArray), utils.convParamMapVertxGen(mapVertxGen));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listStringHandler {function} 
   @param listIntHandler {function} 
   @param setStringHandler {function} 
   @param setIntHandler {function} 
   */
  this.methodWithHandlerListAndSet = function(listStringHandler, listIntHandler, setStringHandler, setIntHandler) {
    var __args = arguments;
    if (__args.length === 4 && typeof __args[0] === 'function' && typeof __args[1] === 'function' && typeof __args[2] === 'function' && typeof __args[3] === 'function') {
      j_collectionTCK["methodWithHandlerListAndSet(io.vertx.core.Handler,io.vertx.core.Handler,io.vertx.core.Handler,io.vertx.core.Handler)"](function(jVal) {
      listStringHandler(jVal);
    }, function(jVal) {
      listIntHandler(jVal);
    }, function(jVal) {
      setStringHandler(utils.convReturnSet(jVal));
    }, function(jVal) {
      setIntHandler(utils.convReturnSet(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultListString = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultListString(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultListInteger = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultListInteger(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(ar.result(), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerListVertxGen = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerListVertxGen(io.vertx.core.Handler)"](function(jVal) {
      listHandler(utils.convReturnListSetVertxGen(jVal, RefedInterface1));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerListAbstractVertxGen = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerListAbstractVertxGen(io.vertx.core.Handler)"](function(jVal) {
      listHandler(utils.convReturnListSetVertxGen(jVal, RefedInterface2));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerListJsonObject = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerListJsonObject(io.vertx.core.Handler)"](function(jVal) {
      listHandler(utils.convReturnListSetJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerListComplexJsonObject = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerListComplexJsonObject(io.vertx.core.Handler)"](function(jVal) {
      listHandler(utils.convReturnListSetJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerListJsonArray = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerListJsonArray(io.vertx.core.Handler)"](function(jVal) {
      listHandler(utils.convReturnListSetJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerListComplexJsonArray = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerListComplexJsonArray(io.vertx.core.Handler)"](function(jVal) {
      listHandler(utils.convReturnListSetJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerListDataObject = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerListDataObject(io.vertx.core.Handler)"](function(jVal) {
      listHandler(utils.convReturnListSetDataObject(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerListEnum = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerListEnum(io.vertx.core.Handler)"](function(jVal) {
      listHandler(utils.convReturnListSetEnum(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultSetString = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultSetString(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   */
  this.methodWithHandlerAsyncResultSetInteger = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultSetInteger(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        handler(utils.convReturnSet(ar.result()), null);
      } else {
        handler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerSetVertxGen = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerSetVertxGen(io.vertx.core.Handler)"](function(jVal) {
      listHandler(utils.convReturnListSetVertxGen(jVal, RefedInterface1));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerSetAbstractVertxGen = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerSetAbstractVertxGen(io.vertx.core.Handler)"](function(jVal) {
      listHandler(utils.convReturnListSetVertxGen(jVal, RefedInterface2));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerSetJsonObject = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerSetJsonObject(io.vertx.core.Handler)"](function(jVal) {
      listHandler(utils.convReturnListSetJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerSetComplexJsonObject = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerSetComplexJsonObject(io.vertx.core.Handler)"](function(jVal) {
      listHandler(utils.convReturnListSetJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerSetJsonArray = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerSetJsonArray(io.vertx.core.Handler)"](function(jVal) {
      listHandler(utils.convReturnListSetJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param setHandler {function} 
   */
  this.methodWithHandlerSetComplexJsonArray = function(setHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerSetComplexJsonArray(io.vertx.core.Handler)"](function(jVal) {
      setHandler(utils.convReturnListSetJson(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param setHandler {function} 
   */
  this.methodWithHandlerSetDataObject = function(setHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerSetDataObject(io.vertx.core.Handler)"](function(jVal) {
      setHandler(utils.convReturnListSetDataObject(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param setHandler {function} 
   */
  this.methodWithHandlerSetEnum = function(setHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerSetEnum(io.vertx.core.Handler)"](function(jVal) {
      setHandler(utils.convReturnListSetEnum(jVal));
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerAsyncResultListVertxGen = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultListVertxGen(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        listHandler(utils.convReturnListSetVertxGen(ar.result(), RefedInterface1), null);
      } else {
        listHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerAsyncResultListAbstractVertxGen = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultListAbstractVertxGen(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        listHandler(utils.convReturnListSetVertxGen(ar.result(), RefedInterface2), null);
      } else {
        listHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerAsyncResultListJsonObject = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultListJsonObject(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        listHandler(utils.convReturnListSetJson(ar.result()), null);
      } else {
        listHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerAsyncResultListComplexJsonObject = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultListComplexJsonObject(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        listHandler(utils.convReturnListSetJson(ar.result()), null);
      } else {
        listHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerAsyncResultListJsonArray = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultListJsonArray(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        listHandler(utils.convReturnListSetJson(ar.result()), null);
      } else {
        listHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerAsyncResultListComplexJsonArray = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultListComplexJsonArray(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        listHandler(utils.convReturnListSetJson(ar.result()), null);
      } else {
        listHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerAsyncResultListDataObject = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultListDataObject(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        listHandler(utils.convReturnListSetDataObject(ar.result()), null);
      } else {
        listHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerAsyncResultListEnum = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultListEnum(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        listHandler(utils.convReturnListSetEnum(ar.result()), null);
      } else {
        listHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerAsyncResultSetVertxGen = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultSetVertxGen(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        listHandler(utils.convReturnListSetVertxGen(ar.result(), RefedInterface1), null);
      } else {
        listHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerAsyncResultSetAbstractVertxGen = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultSetAbstractVertxGen(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        listHandler(utils.convReturnListSetVertxGen(ar.result(), RefedInterface2), null);
      } else {
        listHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerAsyncResultSetJsonObject = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultSetJsonObject(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        listHandler(utils.convReturnListSetJson(ar.result()), null);
      } else {
        listHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerAsyncResultSetComplexJsonObject = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultSetComplexJsonObject(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        listHandler(utils.convReturnListSetJson(ar.result()), null);
      } else {
        listHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerAsyncResultSetJsonArray = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultSetJsonArray(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        listHandler(utils.convReturnListSetJson(ar.result()), null);
      } else {
        listHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param listHandler {function} 
   */
  this.methodWithHandlerAsyncResultSetComplexJsonArray = function(listHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultSetComplexJsonArray(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        listHandler(utils.convReturnListSetJson(ar.result()), null);
      } else {
        listHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param setHandler {function} 
   */
  this.methodWithHandlerAsyncResultSetDataObject = function(setHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultSetDataObject(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        setHandler(utils.convReturnListSetDataObject(ar.result()), null);
      } else {
        setHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param setHandler {function} 
   */
  this.methodWithHandlerAsyncResultSetEnum = function(setHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_collectionTCK["methodWithHandlerAsyncResultSetEnum(io.vertx.core.Handler)"](function(ar) {
      if (ar.succeeded()) {
        setHandler(utils.convReturnListSetEnum(ar.result()), null);
      } else {
        setHandler(null, ar.cause());
      }
    });
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {Array.<string>}
   */
  this.methodWithMapReturn = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnMap(j_collectionTCK["methodWithMapReturn(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {Array.<string>}
   */
  this.methodWithMapStringReturn = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnMap(j_collectionTCK["methodWithMapStringReturn(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {Array.<string>}
   */
  this.methodWithMapLongReturn = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnMap(j_collectionTCK["methodWithMapLongReturn(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {Array.<string>}
   */
  this.methodWithMapIntegerReturn = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnMap(j_collectionTCK["methodWithMapIntegerReturn(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {Array.<string>}
   */
  this.methodWithMapShortReturn = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnMap(j_collectionTCK["methodWithMapShortReturn(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {Array.<string>}
   */
  this.methodWithMapByteReturn = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnMap(j_collectionTCK["methodWithMapByteReturn(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {Array.<string>}
   */
  this.methodWithMapCharacterReturn = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnMap(j_collectionTCK["methodWithMapCharacterReturn(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {Array.<string>}
   */
  this.methodWithMapBooleanReturn = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnMap(j_collectionTCK["methodWithMapBooleanReturn(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {Array.<string>}
   */
  this.methodWithMapFloatReturn = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnMap(j_collectionTCK["methodWithMapFloatReturn(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {Array.<string>}
   */
  this.methodWithMapDoubleReturn = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnMap(j_collectionTCK["methodWithMapDoubleReturn(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {Array.<string>}
   */
  this.methodWithMapJsonObjectReturn = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnMap(j_collectionTCK["methodWithMapJsonObjectReturn(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {Array.<string>}
   */
  this.methodWithMapComplexJsonObjectReturn = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnMap(j_collectionTCK["methodWithMapComplexJsonObjectReturn(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {Array.<string>}
   */
  this.methodWithMapJsonArrayReturn = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnMap(j_collectionTCK["methodWithMapJsonArrayReturn(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param handler {function} 
   @return {Array.<string>}
   */
  this.methodWithMapComplexJsonArrayReturn = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      return utils.convReturnMap(j_collectionTCK["methodWithMapComplexJsonArrayReturn(io.vertx.core.Handler)"](function(jVal) {
      handler(jVal);
    }));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<string>}
   */
  this.methodWithListStringReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_collectionTCK["methodWithListStringReturn()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<number>}
   */
  this.methodWithListLongReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetLong(j_collectionTCK["methodWithListLongReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<RefedInterface1>}
   */
  this.methodWithListVertxGenReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetVertxGen(j_collectionTCK["methodWithListVertxGenReturn()"](), RefedInterface1);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<Object>}
   */
  this.methodWithListJsonObjectReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetJson(j_collectionTCK["methodWithListJsonObjectReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<Object>}
   */
  this.methodWithListComplexJsonObjectReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetJson(j_collectionTCK["methodWithListComplexJsonObjectReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<todo>}
   */
  this.methodWithListJsonArrayReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetJson(j_collectionTCK["methodWithListJsonArrayReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<todo>}
   */
  this.methodWithListComplexJsonArrayReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetJson(j_collectionTCK["methodWithListComplexJsonArrayReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<Object>}
   */
  this.methodWithListDataObjectReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetDataObject(j_collectionTCK["methodWithListDataObjectReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<Object>}
   */
  this.methodWithListEnumReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetEnum(j_collectionTCK["methodWithListEnumReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<string>}
   */
  this.methodWithSetStringReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnSet(j_collectionTCK["methodWithSetStringReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<number>}
   */
  this.methodWithSetLongReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetLong(j_collectionTCK["methodWithSetLongReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<RefedInterface1>}
   */
  this.methodWithSetVertxGenReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetVertxGen(j_collectionTCK["methodWithSetVertxGenReturn()"](), RefedInterface1);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<Object>}
   */
  this.methodWithSetJsonObjectReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetJson(j_collectionTCK["methodWithSetJsonObjectReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<Object>}
   */
  this.methodWithSetComplexJsonObjectReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetJson(j_collectionTCK["methodWithSetComplexJsonObjectReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<todo>}
   */
  this.methodWithSetJsonArrayReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetJson(j_collectionTCK["methodWithSetJsonArrayReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<todo>}
   */
  this.methodWithSetComplexJsonArrayReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetJson(j_collectionTCK["methodWithSetComplexJsonArrayReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<Object>}
   */
  this.methodWithSetDataObjectReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetDataObject(j_collectionTCK["methodWithSetDataObjectReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<Object>}
   */
  this.methodWithSetEnumReturn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetEnum(j_collectionTCK["methodWithSetEnumReturn()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_collectionTCK;
};

CollectionTCK._jclass = utils.getJavaClass("io.vertx.codegen.testmodel.CollectionTCK");
CollectionTCK._create = function(jdel) {
  // A bit of jiggery pokery to create the object given a reference to the constructor function
  var obj = Object.create(CollectionTCK.prototype, {});
  CollectionTCK.apply(obj, arguments);
  return obj;
}
// We export the Constructor function
module.exports = CollectionTCK;