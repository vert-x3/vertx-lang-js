var Assert = org.junit.Assert;
var eb = vertx.eventBus();
var count = 0;
var id = setInterval(function() {
  if (count++ == 2) {
    clearInterval(id);
    eb.send("done", true);
  }
}, 2000);
Assert.assertNotNull(id);
