var Assert = org.junit.Assert;

var CountDownLatch = java.util.concurrent.CountDownLatch;
var TimeUnit = java.util.concurrent.TimeUnit;

// Use an embedded Vert.x
var Vertx = require("vertx-js/vertx");

function testStopCalled() {
  var vertx = Vertx.vertx();
  var latch = new CountDownLatch(1);
  vertx.deployVerticle("js:test_verticle", {}, function(deploymentID, err) {

    Assert.assertNotNull(deploymentID);
    Assert.assertNull(err);

    vertx.eventBus().registerHandler("testComplete", function(msg) {
      // Verticle will send a message if vertxStop is called
      Assert.assertEquals("foo", msg.body());
      latch.countDown();
    })

    vertx.undeployVerticle(deploymentID, function (err) {
      Assert.assertNull(err);
    });
  });

  Assert.assertTrue(latch.await(2, TimeUnit.MINUTES));
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();