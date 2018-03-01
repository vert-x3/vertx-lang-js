var eb = vertx.eventBus();
setTimeout(function() {
  eb.send("done", true);
}, 2000);