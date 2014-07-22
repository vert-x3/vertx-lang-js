var Assert = org.junit.Assert;

function testDeployVerticle() {
  vertx.deployVerticle("js:test_verticle", {}, function(deploymenID, err) {

    // hmm need some way of testing async in JS
  });
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();