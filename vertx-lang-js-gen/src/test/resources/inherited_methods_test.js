var Assert = org.junit.Assert;
var InterfaceWithMethod = require("extra-js/interface_with_method")
var InterfaceExtendingInterfaceWithMethod = require("extra-js/interface_extending_interface_with_method")
var o = InterfaceExtendingInterfaceWithMethod.create()
var testUtils = require("test_utils");
var assertEquals = testUtils.assertEquals;

function testCallInheritedMethods() {
  // Call meth2() defined by InterfaceWithMethod
  assertEquals("meth2()", o.meth2());
  // Call meth2(String) defined by InterfaceWithMethod
  assertEquals("meth2(the-string)", o.meth2("the-string"));
  // Call meth1() defined by InterfaceWithMethod
  assertEquals("meth1()", o.meth1());
  // Call meth1(String) defined by InterfaceWithMethod
  assertEquals("meth1(the-string)", o.meth1("the-string"));
}

function testCallMethodOverloadingInheritedMethods() {
  // Call meth2(Integer) defined by InterfaceExtendingInterfaceWithMethod
  assertEquals("meth2(4)", o.meth2(4));
}

function assertThrowError(fn) {
  var called = false;
  try {
    fn()
    called = true;
  } catch(expected) {
  }
  assertEquals(false, called);
}

function testCallStaticMethods() {
  // Call meth2() defined by InterfaceWithMethod
  assertEquals("static_meth2()", InterfaceWithMethod.static_meth2());
  assertThrowError(function() { InterfaceExtendingInterfaceWithMethod.static_meth2(); });
  assertEquals("static_meth2(the-string)", InterfaceWithMethod.static_meth2("the-string"));
  assertThrowError(function() { InterfaceExtendingInterfaceWithMethod.static_meth2("the-string"); });
  // Call meth2(String) defined by InterfaceWithMethod
  assertEquals("static_meth2(the-string)", InterfaceWithMethod.static_meth2("the-string"));
  assertThrowError(function() { InterfaceExtendingInterfaceWithMethod.static_meth2("the-string"); });
  // Call meth1() defined by InterfaceWithMethod
  assertEquals("static_meth1()", InterfaceWithMethod.static_meth1());
  assertThrowError(function() { InterfaceExtendingInterfaceWithMethod.static_meth1(); });
  // Call meth1(String) defined by InterfaceWithMethod
  assertEquals("static_meth1(the-string)", InterfaceWithMethod.static_meth1("the-string"));
  assertThrowError(function() { InterfaceExtendingInterfaceWithMethod.static_meth1("the-string"); });
  // Call meth2(Integer) defined by InterfaceExtendingInterfaceWithMethod
  assertEquals("static_meth2(4)", InterfaceExtendingInterfaceWithMethod.static_meth2(4));
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();
