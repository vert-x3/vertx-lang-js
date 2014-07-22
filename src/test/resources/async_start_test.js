var Assert = org.junit.Assert;

var CountDownLatch = java.util.concurrent.CountDownLatch;
var TimeUnit = java.util.concurrent.TimeUnit;

// Use an embedded Vert.x
var Vertx = require("vertx-js/vertx");

function testAsyncStartStop() {
  var vertx = Vertx.vertx();
  var latch = new CountDownLatch(1);
  var start = Date.now();
  vertx.deployVerticle("js:async_test_verticle", {}, function(deploymentID, err) {

    Assert.assertNotNull(deploymentID);
    Assert.assertNull(err);
    Assert.assertTrue(Date.now() - start > 1000);

    var start2 = Date.now();

    vertx.undeployVerticle(deploymentID, function (v, err) {
      Assert.assertNull(err);
      Assert.assertTrue(Date.now() - start2 > 1000);
      latch.countDown();
    });
  });

  Assert.assertTrue(latch.await(10, TimeUnit.SECONDS));
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();