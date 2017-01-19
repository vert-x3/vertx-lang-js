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

/** @module testmodel-js/data_object_tck */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JDataObjectTCK = io.vertx.codegen.testmodel.DataObjectTCK;
var DataObjectWithMaps = io.vertx.codegen.testmodel.DataObjectWithMaps;
var DataObjectWithOnlyJsonObjectConstructor = io.vertx.codegen.testmodel.DataObjectWithOnlyJsonObjectConstructor;
var DataObjectWithLists = io.vertx.codegen.testmodel.DataObjectWithLists;
var DataObjectWithNestedBuffer = io.vertx.codegen.testmodel.DataObjectWithNestedBuffer;
var DataObjectWithValues = io.vertx.codegen.testmodel.DataObjectWithValues;

/**
 todo:
 - Buffer support

 @class
*/
var DataObjectTCK = function(j_val) {

  var j_dataObjectTCK = j_val;
  var that = this;

  /**

   @public

   @return {Object}
   */
  this.getDataObjectWithValues = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnDataObject(j_dataObjectTCK["getDataObjectWithValues()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param dataObject {Object} 
   */
  this.setDataObjectWithValues = function(dataObject) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_dataObjectTCK["setDataObjectWithValues(io.vertx.codegen.testmodel.DataObjectWithValues)"](dataObject != null ? new DataObjectWithValues(new JsonObject(Java.asJSONCompatible(dataObject))) : null);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Object}
   */
  this.getDataObjectWithLists = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnDataObject(j_dataObjectTCK["getDataObjectWithLists()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param dataObject {Object} 
   */
  this.setDataObjectWithLists = function(dataObject) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_dataObjectTCK["setDataObjectWithLists(io.vertx.codegen.testmodel.DataObjectWithLists)"](dataObject != null ? new DataObjectWithLists(new JsonObject(Java.asJSONCompatible(dataObject))) : null);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Object}
   */
  this.getDataObjectWithMaps = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnDataObject(j_dataObjectTCK["getDataObjectWithMaps()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param dataObject {Object} 
   */
  this.setDataObjectWithMaps = function(dataObject) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_dataObjectTCK["setDataObjectWithMaps(io.vertx.codegen.testmodel.DataObjectWithMaps)"](dataObject != null ? new DataObjectWithMaps(new JsonObject(Java.asJSONCompatible(dataObject))) : null);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param dataObject {Object} 
   */
  this.methodWithOnlyJsonObjectConstructorDataObject = function(dataObject) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_dataObjectTCK["methodWithOnlyJsonObjectConstructorDataObject(io.vertx.codegen.testmodel.DataObjectWithOnlyJsonObjectConstructor)"](dataObject != null ? new DataObjectWithOnlyJsonObjectConstructor(new JsonObject(Java.asJSONCompatible(dataObject))) : null);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param dataObject {Object} 
   */
  this.setDataObjectWithBuffer = function(dataObject) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_dataObjectTCK["setDataObjectWithBuffer(io.vertx.codegen.testmodel.DataObjectWithNestedBuffer)"](dataObject != null ? new DataObjectWithNestedBuffer(new JsonObject(Java.asJSONCompatible(dataObject))) : null);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_dataObjectTCK;
};

DataObjectTCK._jclass = utils.getJavaClass("io.vertx.codegen.testmodel.DataObjectTCK");
DataObjectTCK._jtype = {
  accept: function(obj) {
    return DataObjectTCK._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(DataObjectTCK.prototype, {});
    DataObjectTCK.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
DataObjectTCK._create = function(jdel) {
  var obj = Object.create(DataObjectTCK.prototype, {});
  DataObjectTCK.apply(obj, arguments);
  return obj;
}
module.exports = DataObjectTCK;