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

/** @module vertx-js/cli */
var utils = require('vertx-js/util/utils');
var CommandLine = require('vertx-js/command_line');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JCLI = io.vertx.core.cli.CLI;
var Option = io.vertx.core.cli.Option;
var Argument = io.vertx.core.cli.Argument;

/**
 Interface defining a command-line interface (in other words a command such as 'run', 'ls'...).
 This interface is polyglot to ease reuse such as in Vert.x Shell.
 <p/>
 A command line interface has a name, and defines a set of options and arguments. Options are key-value pair such
 @class
*/
var CLI = function(j_val) {

  var j_cLI = j_val;
  var that = this;

  /**
   Parses the user command line interface and create a new {@link CommandLine} containing extracting values.

   @public
   @param arguments {Array.<string>} the arguments 
   @param validate {boolean} enable / disable parsing validation 
   @return {CommandLine} the creates command line
   */
  this.parse = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      return utils.convReturnVertxGen(CommandLine, j_cLI["parse(java.util.List)"](utils.convParamListBasicOther(__args[0])));
    }  else if (__args.length === 2 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] ==='boolean') {
      return utils.convReturnVertxGen(CommandLine, j_cLI["parse(java.util.List,boolean)"](utils.convParamListBasicOther(__args[0]), __args[1]));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the CLI name.
   */
  this.getName = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_cLI["getName()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the name of the CLI.

   @public
   @param name {string} the name 
   @return {CLI} the current {@link CLI} instance
   */
  this.setName = function(name) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_cLI["setName(java.lang.String)"](name);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the CLI description.
   */
  this.getDescription = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_cLI["getDescription()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public
   @param desc {string} 
   @return {CLI}
   */
  this.setDescription = function(desc) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_cLI["setDescription(java.lang.String)"](desc);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {string} the CLI summary.
   */
  this.getSummary = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_cLI["getSummary()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the summary of the CLI.

   @public
   @param summary {string} the summary 
   @return {CLI} the current {@link CLI} instance
   */
  this.setSummary = function(summary) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_cLI["setSummary(java.lang.String)"](summary);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Checks whether or not the current {@link CLI} instance is hidden.

   @public

   @return {boolean} <code>true</code> if the current {@link CLI} is hidden,  otherwise
   */
  this.isHidden = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_cLI["isHidden()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets whether or not the current instance of {@link CLI} must be hidden. Hidden CLI are not listed when
   displaying usages / help messages. In other words, hidden commands are for power user.

   @public
   @param hidden {boolean} enables or disables the hidden aspect of the CI 
   @return {CLI} the current {@link CLI} instance
   */
  this.setHidden = function(hidden) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='boolean') {
      j_cLI["setHidden(boolean)"](hidden);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets the list of options.

   @public

   @return {Array.<Object>} the list of options, empty if none.
   */
  this.getOptions = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetDataObject(j_cLI["getOptions()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Adds an option.

   @public
   @param option {Object} the option, must not be <code>null</code>. 
   @return {CLI} the current {@link CLI} instance
   */
  this.addOption = function(option) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_cLI["addOption(io.vertx.core.cli.Option)"](option != null ? new Option(new JsonObject(JSON.stringify(option))) : null);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Adds a set of options. Unlike {@link CLI#setOptions}}, this method does not remove the existing options.
   The given list is appended to the existing list.

   @public
   @param options {Array.<Object>} the options, must not be <code>null</code> 
   @return {CLI} the current {@link CLI} instance
   */
  this.addOptions = function(options) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_cLI["addOptions(java.util.List)"](utils.convParamListDataObject(options, function(json) { return new Option(json); }));
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the list of arguments.

   @public
   @param options {Array.<Object>} the list of options, must not be <code>null</code> 
   @return {CLI} the current {@link CLI} instance
   */
  this.setOptions = function(options) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_cLI["setOptions(java.util.List)"](utils.convParamListDataObject(options, function(json) { return new Option(json); }));
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets the list of defined arguments.

   @public

   @return {Array.<Object>} the list of argument, empty if none.
   */
  this.getArguments = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnListSetDataObject(j_cLI["getArguments()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Adds an argument.

   @public
   @param arg {Object} the argument, must not be <code>null</code> 
   @return {CLI} the current {@link CLI} instance
   */
  this.addArgument = function(arg) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      j_cLI["addArgument(io.vertx.core.cli.Argument)"](arg != null ? new Argument(new JsonObject(JSON.stringify(arg))) : null);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Adds a set of arguments. Unlike {@link CLI#setArguments}, this method does not remove the existing arguments.
   The given list is appended to the existing list.

   @public
   @param args {Array.<Object>} the arguments, must not be <code>null</code> 
   @return {CLI} the current {@link CLI} instance
   */
  this.addArguments = function(args) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_cLI["addArguments(java.util.List)"](utils.convParamListDataObject(args, function(json) { return new Argument(json); }));
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Sets the list of arguments.

   @public
   @param args {Array.<Object>} the list of arguments, must not be <code>null</code> 
   @return {CLI} the current {@link CLI} instance
   */
  this.setArguments = function(args) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0] instanceof Array) {
      j_cLI["setArguments(java.util.List)"](utils.convParamListDataObject(args, function(json) { return new Argument(json); }));
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets an <a href="../../dataobjects.html#Option">Option</a> based on its name (short name, long name or argument name).

   @public
   @param name {string} the name, must not be <code>null</code> 
   @return {Object} the <a href="../../dataobjects.html#Option">Option</a>, <code>null</code> if not found
   */
  this.getOption = function(name) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnDataObject(j_cLI["getOption(java.lang.String)"](name));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets an <a href="../../dataobjects.html#Argument">Argument</a> based on its index.

   @public
   @param index {number} the index, must be positive or zero. 
   @return {Object} the <a href="../../dataobjects.html#Argument">Argument</a>, <code>null</code> if not found.
   */
  this.getArgument = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnDataObject(j_cLI["getArgument(java.lang.String)"](__args[0]));
    }  else if (__args.length === 1 && typeof __args[0] ==='number') {
      return utils.convReturnDataObject(j_cLI["getArgument(int)"](__args[0]));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Removes an option identified by its name. This method does nothing if the option cannot be found.

   @public
   @param name {string} the option name 
   @return {CLI} the current {@link CLI} instance
   */
  this.removeOption = function(name) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      j_cLI["removeOption(java.lang.String)"](name);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Removes an argument identified by its index. This method does nothing if the argument cannot be found.

   @public
   @param index {number} the argument index 
   @return {CLI} the current {@link CLI} instance
   */
  this.removeArgument = function(index) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_cLI["removeArgument(int)"](index);
      return that;
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_cLI;
};

CLI._jclass = utils.getJavaClass("io.vertx.core.cli.CLI");
CLI._jtype = {
  accept: function(obj) {
    return CLI._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(CLI.prototype, {});
    CLI.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
CLI._create = function(jdel) {
  var obj = Object.create(CLI.prototype, {});
  CLI.apply(obj, arguments);
  return obj;
}
/**
 Creates an instance of {@link CLI} using the default implementation.

 @memberof module:vertx-js/cli
 @param name {string} the name of the CLI (must not be <code>null</code>) 
 @return {CLI} the created instance of {@link CLI}
 */
CLI.create = function(name) {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'string') {
    return utils.convReturnVertxGen(CLI, JCLI["create(java.lang.String)"](name));
  } else throw new TypeError('function invoked with invalid arguments');
};

module.exports = CLI;