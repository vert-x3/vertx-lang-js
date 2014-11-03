var eb = vertx.eventBus();
var id = setInterval(function() {
  eb.send("done", "foo");
}, 100);
clearInterval(id);
setInterval(function() {
  eb.send("done", "bar");
}, 2000);