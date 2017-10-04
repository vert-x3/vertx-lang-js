var Assert = org.junit.Assert;

var ClassParamOverload = require('extra-js/class_param_overload');
var overload = ClassParamOverload.create();

var that = this;

var testUtils = require("test_utils");
var assertEquals = testUtils.assertEquals;

function testTypeVarReturn() {
  Assert.assertEquals("wibble", overload.typeVarReturn());
  assertEquals(5, overload.typeVarReturn(Number));
}

function testParameterizedReturn() {
  assertEquals("cheese", overload.parameterizedReturn().get());
  assertEquals(10, overload.parameterizedReturn(Number).get());
}

function testTypeVarParam() {
  assertEquals(true, overload.typeVarParam("wibble"));
  assertEquals(true, overload.typeVarParam(Number, 20));
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();






