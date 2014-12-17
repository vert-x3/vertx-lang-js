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

function testRequireNotFound() {
  try {
    require("nosuchmodule");
  } catch (e) {
    Assert.assertEquals("Cannot find module nosuchmodule", e.message);
  }
}

function testBrokenModule() {
  try {
    require("brokenmodule");
  } catch (e) {
    Assert.assertEquals("Cannot load module brokenmodule", e.message);
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
  Assert.assertSame(testMod1, testMod2);
  Assert.assertSame(testMod2, testMod3);
}

function testRequireNPMModule() {
  var testMod1 = require("src/test/npm/testmod1");
  Assert.assertEquals("hello from testmod1", testMod1);
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();