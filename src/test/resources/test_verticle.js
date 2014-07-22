
// Make sure console globals are in scope

console.log("in test verticle");

if (typeof console !== 'object') {
  throw "No console global";
}

if (typeof require !== 'function') {
  throw "No require global";
}

if (typeof vertx !== 'object') {
  throw "No vertx global";
}


