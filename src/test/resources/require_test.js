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
    Assert.assertTrue(e.message.startsWith("234 has no such function \"substr\""));
    Assert.assertEquals("brokenmodule_typeerror.js", e.fileName);
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
    Assert.assertTrue(e.message.startsWith("234 has no such function \"substr\""));
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