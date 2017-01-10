var Assert = org.junit.Assert;

var ClassParamOverload = require('extra-js/class_param_overload');
var overload = ClassParamOverload.create();

var that = this;

function testTypeVarReturn() {
  Assert.assertEquals("wibble", overload.typeVarReturn());
  Assert.assertEquals(5, overload.typeVarReturn(Number), 0);
}

function testParameterizedReturn() {
  Assert.assertEquals("cheese", overload.parameterizedReturn().get());
  Assert.assertEquals(10, overload.parameterizedReturn(Number).get(), 0);
}

function testTypeVarParam() {
  Assert.assertEquals(true, overload.typeVarParam("wibble"));
  Assert.assertEquals(true, overload.typeVarParam(Number, 20));
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();






