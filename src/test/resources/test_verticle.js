
// Make sure console globals are in scope

if (typeof console !== 'object') {
  throw "No console global";
}

if (typeof require !== 'function') {
  throw "No require global";
}

if (typeof vertx !== 'object') {
  throw "No vertx global";
}

if (typeof setTimeout !== 'function') {
  throw "No setTimeout global";
}

if (typeof clearTimeout !== 'function') {
  throw "No clearTimeout global";
}

if (typeof setInterval !== 'function') {
  throw "No setInterval global";
}

if (typeof clearInterval !== 'function') {
  throw "No clearInterval global";
}

if (typeof parent !== 'object') {
  throw "No parent global";
}

if (typeof global !== 'object') {
  throw "No global";
}

var proc = process;
if (java.lang.System.getProperty('vertx.disableNodeJSProcessENV') == null) {
  if (typeof proc !== 'object') {
    throw "No process object";
  }
  var env = proc.env;
  if (typeof env !== 'object') {
    throw "No env object";
  }
} else {
  if (typeof proc !== 'undefined') {
    throw "proc shouldn't be there!";
  }
}

exports.vertxStop = function() {
  vertx.eventBus().send("testComplete", "foo");
}


