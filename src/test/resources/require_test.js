var Assert = org.junit.Assert;

function testRequireNoExtension() {
  var testMod = require("test_mod");
  Assert.assertEquals("hello", testMod);
}

function testRequireWithExtension() {
  var testMod = require("test_mod.js");
  Assert.assertEquals("hello", testMod);
}

function testRequireInDirectoryNoExtension() {
  var testMod = require("somedir/test_mod2");
  Assert.assertEquals("socks", testMod);
}

function testRequireInDirectoryWithExtension() {
  var testMod = require("somedir/test_mod2.js");
  Assert.assertEquals("socks", testMod);
}

function testRequireRelative() {
  var testMod = require("somedir/../somedir/./test_mod3");
  Assert.assertEquals("socks", testMod);
}

function testRequireNotFound() {
  try {
    require("nosuchmodule");
  } catch (e) {
    Assert.assertEquals("Cannot find module nosuchmodule", e.message);
  }
}

function testBrokenModuleSyntaxError() {
  try {
    require("brokenmodule_syntaxerror");
    Assert.fail();
  } catch (e) {
    // FIXME - Nashorn issue where syntax error is not reported properly from line in eval.
    // So we just have to log the error to stderr in npm-jvm.js for now
    //Assert.assertTrue(e.message.contains("brokenmodule_syntaxerror.js@0:5:2 Expected ; but found ar"));
    //Assert.assertEquals("brokenmodule_syntaxerror.js", e.fileName);
    //Assert.assertEquals(5, e.lineNumber, 0);
    Assert.assertTrue(e instanceof SyntaxError);
  }
}

function testBrokenModuleTypeErrorInMainBody() {
  try {
    var blah = require("brokenmodule_typeerror");
    Assert.fail();
  } catch (e) {
    if (e.message.startsWith("234 has no such function \"substr\"")) {
      // Ok
    } else if (e.message.equals("num.substr is not a function")) {
      // Ok
    } else {
      Assert.fail("Unexpected error message " + e.message);
    }
    Assert.assertTrue(e.fileName.contains("brokenmodule_typeerror.js"));
    Assert.assertEquals(6, e.lineNumber, 0);
    Assert.assertTrue(e instanceof TypeError);
  }
}

function testBrokenModuleTypeErrorInFunction() {
  try {
    var blah = require("brokenmodule_typeerror2");
    blah();
    Assert.fail();
  } catch (e) {
    if (e.message.startsWith("234 has no such function \"substr\"")) {
      // Ok
    } else if (e.message.equals("num.substr is not a function")) {
      // Ok
    } else {
      Assert.fail("Unexpected error message " + e.message);
    }
    Assert.assertEquals(9, e.lineNumber, 0);
    Assert.assertTrue(e instanceof TypeError);
  }
}

function testTopLevelIsolated() {
  var testMod = require("test_mod");
  Assert.assertTrue(typeof someGlobal === 'undefined');
}

function testCachedRequires() {
  var testMod1 = require("test_mod_cached_require");
  var testMod2 = require("test_mod_cached_require");
  var testMod3 = require("test_mod_cached_require");
  Assert.assertTrue(testMod1 === testMod2);
  Assert.assertTrue(testMod2 === testMod3);
}

function testRequireNPMModule() {
  var testMod1 = require("src/test/npm/testmod1");
  Assert.assertEquals("hello from testmod1", testMod1);
}

function testRequireNPMModuleUsingNodePath() {
  var testMod1 = require("testmod1");
  Assert.assertEquals("hello from testmod1", testMod1);
}

function testRequireNPMModuleUsingClassPath() {
  var my_npm_verticle = require("my_npm_module.js");
  Assert.assertEquals("Hello vertx", my_npm_verticle);
}

/**
 * Test multiple verticle deployment with the Verticle requesting a require.
 *
 * Testing for issue where the result of the require is not the expected object when multiple verticles are
 * initiated concurrently.
 *
 * This issue should have been addressed by the introduction of per verticle contexts.
 *
 * The test defines two additional files: test_multiple_concurrent_requires_required.js and test_multiple_concurrent_requires_verticle.js.
 *
 * The first (...required.js) is a simple CommonJS pattern module which exports a property to callers.
 * The second (...verticle.js) is a simple verticle that requires the above file and reports back whether the property is there via the event bus.
 */
function testMultipleConcurrentRequires() {

  // Use an embedded Vert.x
  var Vertx = require("vertx-js/vertx");

  var console = require("vertx-js/util/console");

  // Count down latch so we can wait for the deployment to finish
  var CountDownLatch = java.util.concurrent.CountDownLatch;
  var TimeUnit = java.util.concurrent.TimeUnit;

  // The number of instances to start. Issue occurs at a much lower number of instances, but always seems to happen with this many.
  var numInstances = 20;

  var vertx = Vertx.vertx();
  var latch = new CountDownLatch(1);

  var count = 0;
  var tooMany = false;
  var requireFailedCount = 0;
  var requireOKCount = 0;

  vertx.eventBus().consumer("test_multiple_concurrent_requires", function( msg ) {
    count++;

    if (msg.body() == 'ok') {
      requireOKCount++;
    } else {
      requireFailedCount++;
    }

    if (count > numInstances) {
      tooMany = true;
    }
    if (count == numInstances) {
      // End on a timer to allow any further messages to arrive
      vertx.setTimer(500, function() {
        latch.countDown();
      });
    }
  });

  // Deploy a number of instances 
  vertx.deployVerticle("js:test_multiple_concurrent_requires_verticle", {instances: numInstances});
  Assert.assertTrue(latch.await(2, TimeUnit.MINUTES));
  Assert.assertFalse(tooMany);

  Assert.assertTrue( "Failure count must be 0", requireFailedCount == 0);
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();