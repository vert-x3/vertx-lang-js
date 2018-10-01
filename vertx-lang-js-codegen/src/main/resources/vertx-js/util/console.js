'use strict';

var formatRegExp = /%[sdj%]/g;

function format(f) {
  if (typeof f !== 'string') {
    var objects = [];
    for (var index = 0; index < arguments.length; index++) {
      objects.push(JSON.stringify(arguments[index]));
    }
    return objects.join(' ');
  }

  if (arguments.length === 1) return f;

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
        // falls through
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (x === null || (typeof x !== 'object' && typeof x !== 'symbol')) {
      str += ' ' + x;
    } else {
      str += ' ' + JSON.stringify(x);
    }
  }
  return str;
}

function Console(stdout, stderr) {
  if (!(this instanceof Console)) {
    return new Console(stdout, stderr);
  }
  if (!stdout || !(stdout instanceof java.io.PrintStream)) {
    throw new TypeError('Console expects a java.io.PrintStream instance');
  }
  if (!stderr) {
    stderr = stdout;
  } else if (!(stderr instanceof java.io.PrintStream)) {
    throw new TypeError('Console expects java.io.PrintStream instances');
  }

  var prop = {
    writable: true,
    enumerable: false,
    configurable: true
  };
  prop.value = stdout;
  Object.defineProperty(this, '_stdout', prop);
  prop.value = stderr;
  Object.defineProperty(this, '_stderr', prop);
  prop.value = {};
  Object.defineProperty(this, '_times', prop);

  // bind the prototype functions to this Console instance
  var keys = Object.keys(Console.prototype);
  for (var v = 0; v < keys.length; v++) {
    var k = keys[v];
    this[k] = this[k].bind(this);
  }
}

Console.prototype.log = function() {
  this._stdout.println(format.apply(null, arguments));
};


Console.prototype.info = Console.prototype.log;


Console.prototype.warn = function() {
  this._stderr.println(format.apply(null, arguments));
};


Console.prototype.error = Console.prototype.warn;


module.exports = new Console(java.lang.System.out, java.lang.System.err);
module.exports.Console = Console;