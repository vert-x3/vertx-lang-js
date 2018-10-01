var eb = vertx.eventBus();
var id = setTimeout(function() {
  eb.send("done", "foo");
}, 100);
clearTimeout(id);
setTimeout(function() {
  eb.send("done", "bar");
}, 2000);