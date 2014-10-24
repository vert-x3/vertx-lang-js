var Vertx = require("vertx-js/vertx");
var Assert = org.junit.Assert;
var CountDownLatch = java.util.concurrent.CountDownLatch;
var TimeUnit = java.util.concurrent.TimeUnit;

function testObjectArgumentShouldIncreaseTheArgumentCount() {
  var vertx = Vertx.vertx();
  var latch = new CountDownLatch(1);
  var eb = vertx.eventBus();
  eb.consumer("the-address").handler(function (msg) {
    msg.reply(null);
  });
  eb.send("the-address", "foo", function(msg, failure) {
    latch.countDown();
  });
  Assert.assertTrue(latch.await(10, TimeUnit.SECONDS));
}

this[testName]();