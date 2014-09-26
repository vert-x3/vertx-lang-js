var Assert = org.junit.Assert;

var CountDownLatch = java.util.concurrent.CountDownLatch;
var TimeUnit = java.util.concurrent.TimeUnit;

// Use an embedded Vert.x
var Vertx = require("vertx-js/vertx");

var console = require("vertx-js/util/console");

function testStopCalled() {
  var vertx = Vertx.vertx();
  var latch = new CountDownLatch(1);
  vertx.deployVerticle("js:test_verticle", function(deploymentID, err) {

    Assert.assertNotNull(deploymentID);
    Assert.assertNull(err);

    vertx.eventBus().consumer("testComplete").handler(function(msg) {
      // Verticle will send a message if vertxStop is called
      Assert.assertEquals("foo", msg.body());
      latch.countDown();
    })

    vertx.undeployVerticle(deploymentID, function (v, err) {
      Assert.assertNull(v);
      Assert.assertNull(err);
    });
  });

  Assert.assertTrue(latch.await(2, TimeUnit.MINUTES));
}

function testFailureInStop() {

  var vertx = Vertx.vertx();
  var latch = new CountDownLatch(1);
  vertx.deployVerticle("js:test_verticle_fail", function(deploymentID, err) {

    Assert.assertNotNull(deploymentID);
    Assert.assertNull(err);

    vertx.undeployVerticle(deploymentID, function (v, err) {
      Assert.assertNull(v);
      Assert.assertNotNull(err);
      latch.countDown();
    });
  });

  Assert.assertTrue(latch.await(2, TimeUnit.MINUTES));
}

function testStoppedOKIfNoVertxStop() {
  var vertx = Vertx.vertx();
  var latch = new CountDownLatch(1);
  vertx.deployVerticle("js:test_verticle_no_vertxstop", function(deploymentID, err) {

    Assert.assertNotNull(deploymentID);
    Assert.assertNull(err);

    vertx.undeployVerticle(deploymentID, function (v, err) {
      Assert.assertNull(v);
      Assert.assertNull(err);
      latch.countDown();
    });
  });

  Assert.assertTrue(latch.await(2, TimeUnit.MINUTES));
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();