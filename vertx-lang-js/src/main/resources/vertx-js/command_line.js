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

/** @module vertx-js/command_line */
var utils = require('vertx-js/util/utils');
var CLI = require('vertx-js/cli');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JCommandLine = io.vertx.core.cli.CommandLine;
var Option = io.vertx.core.cli.Option;
var Argument = io.vertx.core.cli.Argument;

/**

 @class
*/
var CommandLine = function(j_val) {

  var j_commandLine = j_val;
  var that = this;

  /**

   @public

   @return {CLI} the model of this command line object.
   */
  this.cli = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnVertxGen(CLI, j_commandLine["cli()"]());
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**

   @public

   @return {Array.<string>} the ordered list of arguments. Arguments are command line arguments not matching an option.
   */
  this.allArguments = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_commandLine["allArguments()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets the value of an option with the matching name (can be the long name, short name or arg name).

   @public
   @param name {string} the name 
   @return {Object} the value, <code>null</code> if not set
   */
  this.getOptionValue = function(name) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnTypeUnknown(j_commandLine["getOptionValue(java.lang.String)"](name));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets the value of an argument with the given index.

   @public
   @param index {number} the index 
   @return {Object} the value, <code>null</code> if not set
   */
  this.getArgumentValue = function() {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnTypeUnknown(j_commandLine["getArgumentValue(java.lang.String)"](__args[0]));
    }  else if (__args.length === 1 && typeof __args[0] ==='number') {
      return utils.convReturnTypeUnknown(j_commandLine["getArgumentValue(int)"](__args[0]));
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets the value of an option marked as a flag.
   <p/>
   Calling this method an a non-flag option throws an IllegalStateException.

   @public
   @param name {string} the option name 
   @return {boolean} <code>true</code> if the flag has been set in the command line, <code>false</code> otherwise.
   */
  this.isFlagEnabled = function(name) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return j_commandLine["isFlagEnabled(java.lang.String)"](name);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Checks whether or not the given option has been assigned in the command line.

   @public
   @param option {Object} the option 
   @return {boolean} <code>true</code> if the option has received a value,  otherwise.
   */
  this.isOptionAssigned = function(option) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_commandLine["isOptionAssigned(io.vertx.core.cli.Option)"](option != null ? new Option(new JsonObject(JSON.stringify(option))) : null);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets the raw values of the given option. Raw values are simple "String", not converted to the option type.

   @public
   @param option {Object} the option 
   @return {Array.<string>} the list of values, empty if none
   */
  this.getRawValues = function(option) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_commandLine["getRawValues(io.vertx.core.cli.Option)"](option != null ? new Option(new JsonObject(JSON.stringify(option))) : null);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets the raw values of the given option. Raw values are simple "String", not converted to the option type.

   @public
   @param option {Object} the option 
   @return {Array.<string>} the list of values, empty if none
   */
  this.getRawValuesForOption = function(option) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_commandLine["getRawValuesForOption(io.vertx.core.cli.Option)"](option != null ? new Option(new JsonObject(JSON.stringify(option))) : null);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets the raw values of the given argument. Raw values are simple "String", not converted to the argument type.

   @public
   @param argument {Object} the argument 
   @return {Array.<string>} the list of values, empty if none
   */
  this.getRawValuesForArgument = function(argument) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_commandLine["getRawValuesForArgument(io.vertx.core.cli.Argument)"](argument != null ? new Argument(new JsonObject(JSON.stringify(argument))) : null);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets the raw value of the given option. Raw values are the values as given in the user command line.

   @public
   @param option {Object} the option 
   @return {string} the value, <code>null</code> if none.
   */
  this.getRawValueForOption = function(option) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_commandLine["getRawValueForOption(io.vertx.core.cli.Option)"](option != null ? new Option(new JsonObject(JSON.stringify(option))) : null);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Checks whether or not the given option accept more values.

   @public
   @param option {Object} the option 
   @return {boolean}  if the option accepts more values,  otherwise.
   */
  this.acceptMoreValues = function(option) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_commandLine["acceptMoreValues(io.vertx.core.cli.Option)"](option != null ? new Option(new JsonObject(JSON.stringify(option))) : null);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Gets the raw value of the given argument. Raw values are the values as given in the user command line.

   @public
   @param arg {Object} the argument 
   @return {string} the value, <code>null</code> if none.
   */
  this.getRawValueForArgument = function(arg) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_commandLine["getRawValueForArgument(io.vertx.core.cli.Argument)"](arg != null ? new Argument(new JsonObject(JSON.stringify(arg))) : null);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Checks whether or not the given argument has been assigned in the command line.

   @public
   @param arg {Object} the argument 
   @return {boolean} <code>true</code> if the argument has received a value,  otherwise.
   */
  this.isArgumentAssigned = function(arg) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_commandLine["isArgumentAssigned(io.vertx.core.cli.Argument)"](arg != null ? new Argument(new JsonObject(JSON.stringify(arg))) : null);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Checks whether or not the given option has been seen in the user command line.

   @public
   @param option {Object} the option 
   @return {boolean} <code>true</code> if the user command line has used the option
   */
  this.isSeenInCommandLine = function(option) {
    var __args = arguments;
    if (__args.length === 1 && (typeof __args[0] === 'object' && __args[0] != null)) {
      return j_commandLine["isSeenInCommandLine(io.vertx.core.cli.Option)"](option != null ? new Option(new JsonObject(JSON.stringify(option))) : null);
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Checks whether or not the command line is valid, i.e. all constraints from arguments and options have been
   satisfied. This method is used when the parser validation is disabled.

   @public

   @return {boolean} <code>true</code> if the current {@link CommandLine} object is valid.  otherwise.
   */
  this.isValid = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_commandLine["isValid()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  /**
   Checks whether or not the user has passed a "help" option and is asking for help.

   @public

   @return {boolean} <code>true</code> if the user command line has enabled a "Help" option,  otherwise.
   */
  this.isAskingForHelp = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_commandLine["isAskingForHelp()"]();
    } else throw new TypeError('function invoked with invalid arguments');
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_commandLine;
};

CommandLine._jclass = utils.getJavaClass("io.vertx.core.cli.CommandLine");
CommandLine._jtype = {
  accept: function(obj) {
    return CommandLine._jclass.isInstance(obj._jdel);
  },
  wrap: function(jdel) {
    var obj = Object.create(CommandLine.prototype, {});
    CommandLine.apply(obj, arguments);
    return obj;
  },
  unwrap: function(obj) {
    return obj._jdel;
  }
};
CommandLine._create = function(jdel) {
  var obj = Object.create(CommandLine.prototype, {});
  CommandLine.apply(obj, arguments);
  return obj;
}
/**
 Creates a command line object from the {@link CLI}. This object is intended to be used by
 the parser to set the argument and option values.

 @memberof module:vertx-js/command_line
 @param cli {CLI} the CLI definition 
 @return {CommandLine} the command line object
 */
CommandLine.create = function(cli) {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
    return utils.convReturnVertxGen(CommandLine, JCommandLine["create(io.vertx.core.cli.CLI)"](cli._jdel));
  } else throw new TypeError('function invoked with invalid arguments');
};

module.exports = CommandLine;