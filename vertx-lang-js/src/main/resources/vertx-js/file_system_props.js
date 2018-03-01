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

/** @module vertx-js/file_system_props */
var utils = require('vertx-js/util/utils');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JFileSystemProps = io.vertx.core.file.FileSystemProps;

/**
 Represents properties of the file system.


 @class
*/
var FileSystemProps = function(j_val) {

  var j_fileSystemProps = j_val;
  var that = this;

  /**

   @public

   @return {number} The total space on the file system, in bytes
   */
  this.totalSpace = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_fileSystemProps["totalSpace()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number} The total un-allocated space on the file system, in bytes
   */
  this.unallocatedSpace = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_fileSystemProps["unallocatedSpace()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {number} The total usable space on the file system, in bytes
   */
  this.usableSpace = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_fileSystemProps["usableSpace()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_fileSystemProps;
};

FileSystemProps._jclass = utils.getJavaClass("io.vertx.core.file.FileSystemProps");
FileSystemProps._jtype = {
  accept: function(obj) {
    return FileSystemProps._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(FileSystemProps.prototype, {});
    FileSystemProps.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
FileSystemProps._create = function(jdel) {
  var obj = Object.create(FileSystemProps.prototype, {});
  FileSystemProps.apply(obj, arguments);
  return obj;
}
module.exports = FileSystemProps;