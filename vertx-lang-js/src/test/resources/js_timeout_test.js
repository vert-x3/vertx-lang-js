var TimeUnit = java.util.concurrent.TimeUnit;
var Assert = org.junit.Assert;
var CountDownLatch = java.util.concurrent.CountDownLatch;
var Vertx = require("vertx-js/vertx");

function testSetTimeout() {

  var latch = new CountDownLatch(1);
  var vertx = Vertx.vertx();
  vertx.eventBus().consumer("done").handler(function() {
    latch.countDown();
  });
  vertx.deployVerticle("js:test_set_timeout");
  Assert.assertTrue(latch.await(2, TimeUnit.MINUTES));

}

function testClearTimeout() {

  var latch = new CountDownLatch(1);
  var vertx = Vertx.vertx();
  vertx.eventBus().consumer("done").handler(function(msg) {
    Assert.assertEquals("bar", msg.body());
    latch.countDown();
  });
  vertx.deployVerticle("js:test_clear_timeout");
  Assert.assertTrue(latch.await(2, TimeUnit.MINUTES));

}

function testSetInterval() {

  var latch = new CountDownLatch(1);
  var vertx = Vertx.vertx();
  vertx.eventBus().consumer("done").handler(function() {
    latch.countDown();
  });
  vertx.deployVerticle("js:test_set_interval");
  Assert.assertTrue(latch.await(2, TimeUnit.MINUTES));

}

function testClearInterval() {

  var latch = new CountDownLatch(1);
  var vertx = Vertx.vertx();
  vertx.eventBus().consumer("done").handler(function(msg) {
    Assert.assertEquals("bar", msg.body());
    latch.countDown();
  });
  vertx.deployVerticle("js:test_clear_interval");
  Assert.assertTrue(latch.await(2, TimeUnit.MINUTES));

}

this[testName]();