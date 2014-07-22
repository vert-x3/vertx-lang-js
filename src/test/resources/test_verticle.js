
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

console.log("in test verticle");


exports.vertxStop = function() {
  console.log("in vertx.stop!");
  vertx.eventBus().send("testComplete", "foo");
}


