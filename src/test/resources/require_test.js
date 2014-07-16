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
    Assert.assertEquals("Can't find module nosuchmodule on classpath", e);
  }
}

function testBrokenModule() {
  try {
    require("brokenmodule");
  } catch (e) {
    Assert.assertTrue(e.message.indexOf("in brokenmodule at line number 5 at column number 2") != -1);
  }
}

function testTopLevelIsolated() {
  var testMod = require("test_mod");
  Assert.assertTrue(typeof someGlobal === 'undefined');
}

function testCachedRequires() {
  var testMod1 = require("test_mod");
  var testMod2 = require("test_mod");
  var testMod3 = require("test_mod");
  Assert.assertSame(testMod1, testMod2);
  Assert.assertSame(testMod2, testMod3);
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();