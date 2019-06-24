var Assert = org.junit.Assert;

var CountDownLatch = java.util.concurrent.CountDownLatch;
var TimeUnit = java.util.concurrent.TimeUnit;

var Vertx = require("vertx-js/vertx");
var Buffer = require('vertx-js/buffer');

function testSendBuffer() {
  var vertx = Vertx.vertx();
  var latch = new CountDownLatch(1);

  var eventBus = vertx.eventBus();
  eventBus.consumer("foo", function (msg) {
    Assert.assertEquals("The quick brown fox jumps over the lazy dog", msg.body().toString());
    latch.countDown();
  }).completionHandler(function (v, err) {
    Assert.assertNull(err);
    eventBus.send("foo", Buffer.buffer("The quick brown fox jumps over the lazy dog"));
  });

  Assert.assertTrue(latch.await(2, TimeUnit.MINUTES));
}

function testSendReceiveWithFuture() {
  var vertx = Vertx.vertx();
  var latch = new CountDownLatch(1);

  var eventBus = vertx.eventBus();
  eventBus.consumer("echo", function (msg) {
    Assert.assertEquals("The quick brown fox jumps over the lazy dog", msg.body());
    msg.reply(msg.body());
  }).completionHandler(function (v, err) {
    Assert.assertNull(err);
    eventBus.request("echo", "The quick brown fox jumps over the lazy dog").setHandler(function (res, err2) {
      Assert.assertEquals("The quick brown fox jumps over the lazy dog", res.body());
      Assert.assertNull(err2);
      latch.countDown();
    });
  });

  Assert.assertTrue(latch.await(2, TimeUnit.MINUTES));
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();
