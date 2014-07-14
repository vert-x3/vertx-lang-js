
/*
 Rhino-Require is Public Domain
 <http://en.wikipedia.org/wiki/Public_Domain>

 The author or authors of this code dedicate any and all copyright interest
 in this code to the public domain. We make this dedication for the benefit
 of the public at large and to the detriment of our heirs and successors. We
 intend this dedication to be an overt act of relinquishment in perpetuity of
 all present and future rights to this code under copyright law.
 */

/*
This version originally based on version found at https://github.com/micmath/Rhino-Require
which was published under public domain (see above)

But, tbh, it's been more or less rewritten since then.
 */

(function(global) {

  var System = Packages.java.lang.System;

  String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };

  var require = global.require = function(id) { /*debug*///console.log('require('+id+')');

    if (typeof arguments[0] !== 'string' || arguments.length != 1) throw 'USAGE: require(moduleId)';

    // try and load from classpath
    var moduleUri = loadFromClasspath(id);

    var moduleContent;

    try {
      var scanner = new java.util.Scanner(moduleUri.openStream()).useDelimiter("\\Z");
      moduleContent = String( scanner.next() );
    } catch (e) {
      throw "Can't find module " + id + " on classpath";
    }

    var exports = require.cache[moduleUri];

    if (!exports) {
      exports = {};
      var func = "function(exports, module) {" + moduleContent + "}";
      __engine.put("javax.script.filename", id);
      // We need to eval using the Java engine otherwise we lose the script name in error messages
      var f = __engine.eval(func);
      var module = { id: id, uri: moduleUri, exports: exports };
      f(exports, module);
      exports = module.exports || exports;
      require.cache[id] = exports;
    }

    return exports;
  }

  require.cache = {}; // cache module exports. Like: {id: exported}

  function loadFromClasspath(id) {
    var cl = java.lang.Thread.currentThread().getContextClassLoader();
    if (cl == null) {
      throw "tccl not set!";
    }
    if (!id.endsWith(".js")) {
      id += ".js";
    }
    return cl.getResource(id);
  }

})(this);