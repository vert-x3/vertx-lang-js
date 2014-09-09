
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

exports.vertxStop = function() {
  vertx.eventBus().send("testComplete", "foo");
}


