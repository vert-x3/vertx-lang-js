var Assert = org.junit.Assert;

var GenericsTCK = require('testmodel-js/generics_tck');
var RefedInterface1 = require('testmodel-js/refed_interface1');

var obj = new GenericsTCK(new Packages.io.vertx.codegen.testmodel.GenericsTCKImpl());
var refed_obj = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());
var refed_obj2 = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());

var testUtils = require("test_utils");
var assertEquals = testUtils.assertEquals;

function assertApiType(obj) {
  Assert.assertNotEquals('undefined', typeof obj._jdel);
  return obj;
}

/*
function assertEquals(expected, actual) {
  assertEquals(expected, actual)
}

function assertEquals(expected, actual) {
  Assert["assertEquals(float, float, float)"](expected, actual)
}

function assertEquals(expected, actual) {
  Assert["assertEquals(double, double, double)"](expected, actual)
}
*/

function setter(values, index) {
  return function(val) {
    values[index] = val;
  };
}

function asyncResultSetter(values, index) {
  return function(val, err) {
    Assert.assertNull(err);
    values[index] = val;
  };
}

function testMethodWithBasicParameterizedReturn() {
  checkMethodWithBasicParameterized([
    obj.methodWithByteParameterizedReturn(),
    obj.methodWithShortParameterizedReturn(),
    obj.methodWithIntegerParameterizedReturn(),
    obj.methodWithLongParameterizedReturn(),
    obj.methodWithFloatParameterizedReturn(),
    obj.methodWithDoubleParameterizedReturn(),
    obj.methodWithBooleanParameterizedReturn(),
    obj.methodWithCharacterParameterizedReturn(),
    obj.methodWithStringParameterizedReturn()
  ]);
}

function testMethodWithHandlerBasicParameterized() {
  var values = [];
  obj.methodWithHandlerByteParameterized(setter(values, 0));
  obj.methodWithHandlerShortParameterized(setter(values, 1));
  obj.methodWithHandlerIntegerParameterized(setter(values, 2));
  obj.methodWithHandlerLongParameterized(setter(values, 3));
  obj.methodWithHandlerFloatParameterized(setter(values, 4));
  obj.methodWithHandlerDoubleParameterized(setter(values, 5));
  obj.methodWithHandlerBooleanParameterized(setter(values, 6));
  obj.methodWithHandlerCharacterParameterized(setter(values, 7));
  obj.methodWithHandlerStringParameterized(setter(values, 8));
  checkMethodWithBasicParameterized(values);
}

function testMethodWithHandlerAsyncResultBasicParameterized() {
  var values = [];
  obj.methodWithHandlerAsyncResultByteParameterized(asyncResultSetter(values, 0));
  obj.methodWithHandlerAsyncResultShortParameterized(asyncResultSetter(values, 1));
  obj.methodWithHandlerAsyncResultIntegerParameterized(asyncResultSetter(values, 2));
  obj.methodWithHandlerAsyncResultLongParameterized(asyncResultSetter(values, 3));
  obj.methodWithHandlerAsyncResultFloatParameterized(asyncResultSetter(values, 4));
  obj.methodWithHandlerAsyncResultDoubleParameterized(asyncResultSetter(values, 5));
  obj.methodWithHandlerAsyncResultBooleanParameterized(asyncResultSetter(values, 6));
  obj.methodWithHandlerAsyncResultCharacterParameterized(asyncResultSetter(values, 7));
  obj.methodWithHandlerAsyncResultStringParameterized(asyncResultSetter(values, 8));
  checkMethodWithBasicParameterized(values);
}

function testMethodWithFunctionParamBasicParameterized() {
  var values = [];
  obj.methodWithFunctionParamByteParameterized(setter(values, 0));
  obj.methodWithFunctionParamShortParameterized(setter(values, 1));
  obj.methodWithFunctionParamIntegerParameterized(setter(values, 2));
  obj.methodWithFunctionParamLongParameterized(setter(values, 3));
  obj.methodWithFunctionParamFloatParameterized(setter(values, 4));
  obj.methodWithFunctionParamDoubleParameterized(setter(values, 5));
  obj.methodWithFunctionParamBooleanParameterized(setter(values, 6));
  obj.methodWithFunctionParamCharacterParameterized(setter(values, 7));
  obj.methodWithFunctionParamStringParameterized(setter(values, 8));
  checkMethodWithBasicParameterized(values);
}

function checkMethodWithBasicParameterized(values) {
  var ret = assertApiType(values[0]);
  assertEquals(ret.getValue(), 123);
  ret.setValue(124);
  assertEquals(ret.getValue(), 124);
  ret = assertApiType(values[1]);
  assertEquals(ret.getValue(), 1234);
  ret.setValue(1235);
  assertEquals(ret.getValue(), 1235);
  ret = assertApiType(values[2]);
  assertEquals(ret.getValue(), 123456);
  ret.setValue(1234567);
  assertEquals(ret.getValue(), 1234567);
  ret = assertApiType(values[3]);
  assertEquals(ret.getValue(), 123456789);
  ret.setValue(123456790);
  assertEquals(ret.getValue(), 123456790);
  ret = assertApiType(values[4]);
  assertEquals(ret.getValue(), 0.34);
  ret.setValue(0.35);
  assertEquals(ret.getValue(), 0.35);
  ret = assertApiType(values[5]);
  assertEquals(ret.getValue(), 0.314);
  ret.setValue(0.3141);
  assertEquals(ret.getValue(), 0.3141);
  ret = assertApiType(values[6]);
  assertEquals(ret.getValue(), true);
  ret.setValue(false);
  assertEquals(ret.getValue(), false);
  ret = assertApiType(values[7]);
  assertEquals(ret.getValue() + "", "F");
  ret.setValue("G");
  assertEquals(ret.getValue() + "", "G");
  ret = assertApiType(values[8]);
  assertEquals(ret.getValue(), "zoumbawe");
  ret.setValue("the_string");
  assertEquals(ret.getValue(), "the_string");
}

function testMethodWithJsonParameterizedReturn() {
  checkMethodWitJsonParameterized([
    obj.methodWithJsonObjectParameterizedReturn(),
    obj.methodWithJsonArrayParameterizedReturn()
  ])
}

function testMethodWithHandlerJsonParameterized() {
  var values = [];
  obj.methodWithHandlerJsonObjectParameterized(setter(values, 0));
  obj.methodWithHandlerJsonArrayParameterized(setter(values, 1));
  checkMethodWitJsonParameterized(values);
}

function testMethodWithHandlerAsyncResultJsonParameterized() {
  var values = [];
  obj.methodWithHandlerAsyncResultJsonObjectParameterized(asyncResultSetter(values, 0));
  obj.methodWithHandlerAsyncResultJsonArrayParameterized(asyncResultSetter(values, 1));
  checkMethodWitJsonParameterized(values);
}

function testMethodWithFunctionParamJsonParameterized() {
  var values = [];
  obj.methodWithFunctionParamJsonObjectParameterized(setter(values, 0));
  obj.methodWithFunctionParamJsonArrayParameterized(setter(values, 1));
  checkMethodWitJsonParameterized(values);
}

function checkMethodWitJsonParameterized(values) {
  var ret = assertApiType(values[0]);
  var val = ret.getValue();
  Assert.assertTrue(typeof val === 'object');
  assertEquals(val.cheese, "stilton");
  ret.setValue({"cheese": "roquefort"});
  val = ret.getValue();
  Assert.assertTrue(typeof val === 'object');
  assertEquals(val.cheese, "roquefort");
  ret = assertApiType(values[1]);
  val = ret.getValue();
  Assert.assertTrue(val instanceof Array);
  assertEquals(val[0], "cheese");
  assertEquals(val[1], "stilton");
  ret.setValue(["cheese", "roquefort"]);
  val = ret.getValue();
  Assert.assertTrue(val instanceof Array);
  assertEquals(val[0], "cheese");
  assertEquals(val[1], "roquefort");
}

function testMethodWithDataObjectParameterizedReturn() {
  checkMethodWitDataObjectParameterized([obj.methodWithDataObjectParameterizedReturn()]);
}

function testMethodWithHandlerDataObjectParameterized() {
  var values = [];
  obj.methodWithHandlerDataObjectParameterized(setter(values, 0));
  checkMethodWitDataObjectParameterized(values);
}

function testMethodWithHandlerAsyncResultDataObjectParameterized() {
  var values = [];
  obj.methodWithHandlerAsyncResultDataObjectParameterized(asyncResultSetter(values, 0));
  checkMethodWitDataObjectParameterized(values);
}

function testMethodWithFunctionParamDataObjectParameterized() {
  var values = [];
  obj.methodWithFunctionParamDataObjectParameterized(setter(values, 0));
  checkMethodWitDataObjectParameterized(values);
}

function checkMethodWitDataObjectParameterized(values) {
  var ret = values[0];
  var val = ret.getValue();
  Assert.assertTrue(typeof val === 'object');
  assertEquals(val.wibble, 3.14);
  assertEquals(val.bar, 123456);
  assertEquals(val.foo, "foo_value");
  ret.setValue({"wibble": 0.1, "bar": 543321, "foo": "another_value"});
  val = ret.getValue();
  Assert.assertTrue(typeof val === 'object');
  assertEquals(val.wibble, 0.1);
  assertEquals(val.bar, 543321);
  assertEquals(val.foo, "another_value");
}

function testMethodWithEnumParameterizedReturn() {
  checkMethodWithEnumParameterized([
    obj.methodWithEnumParameterizedReturn(),
    obj.methodWithGenEnumParameterizedReturn()]);
}

function testMethodWithHandlerEnumParameterized() {
  var values = [];
  obj.methodWithHandlerEnumParameterized(setter(values, 0));
  obj.methodWithHandlerGenEnumParameterized(setter(values, 1));
  checkMethodWithEnumParameterized(values);
}

function testMethodWithHandlerAsyncResultEnumParameterized() {
  var values = [];
  obj.methodWithHandlerAsyncResultEnumParameterized(asyncResultSetter(values, 0));
  obj.methodWithHandlerAsyncResultGenEnumParameterized(asyncResultSetter(values, 1));
  checkMethodWithEnumParameterized(values);
}

function testMethodWithFunctionParamEnumParameterized() {
  var values = [];
  obj.methodWithFunctionParamEnumParameterized(setter(values, 0));
  obj.methodWithFunctionParamGenEnumParameterized(setter(values, 1));
  checkMethodWithEnumParameterized(values);
}

function checkMethodWithEnumParameterized(values) {
  var ret = assertApiType(values[0]);
  assertEquals(ret.getValue(), "WESTON");
  ret.setValue("JULIEN");
  assertEquals(ret.getValue(), "JULIEN");
  ret = assertApiType(values[1]);
  assertEquals(ret.getValue(), "LELAND");
  ret.setValue("LAURA");
  assertEquals(ret.getValue(), "LAURA");
}

function testMethodWithUserTypeParameterizedReturn() {
  checkMethodWithUserTypeParameterized([obj.methodWithUserTypeParameterizedReturn()])
}

function testMethodWithHandlerUserTypeParameterized() {
  var values = [];
  obj.methodWithHandlerUserTypeParameterized(setter(values, 0));
  checkMethodWithUserTypeParameterized(values)
}

function testMethodWithHandlerAsyncResultUserTypeParameterized() {
  var values = [];
  obj.methodWithHandlerAsyncResultUserTypeParameterized(setter(values, 0));
  checkMethodWithUserTypeParameterized(values)
}

function testMethodWithFunctionParamUserTypeParameterized() {
  var values = [];
  obj.methodWithFunctionParamUserTypeParameterized(setter(values, 0));
  checkMethodWithUserTypeParameterized(values)
}

function checkMethodWithUserTypeParameterized(values) {
  var ret = values[0];
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  var val = ret.getValue();
  Assert.assertNotEquals('undefined', typeof val._jdel);
  assertEquals('foo', val.getString());

  refed_obj.setString("the_string");
  ret.setValue(refed_obj);
  val = ret.getValue();
  Assert.assertNotEquals('undefined', typeof val._jdel);
  assertEquals('the_string', val.getString());
}

function testMethodWithClassTypeParameterizedReturn() {
  checkMethodWithClassTypeParameterized([
    obj.methodWithClassTypeParameterizedReturn(Number),
    obj.methodWithClassTypeParameterizedReturn(Boolean),
    obj.methodWithClassTypeParameterizedReturn(String),
    obj.methodWithClassTypeParameterizedReturn(Object),
    obj.methodWithClassTypeParameterizedReturn(Array),
    obj.methodWithClassTypeParameterizedReturn(RefedInterface1)
  ]);
}

function testMethodWithHandlerClassTypeParameterized() {
  var values = [];
  obj.methodWithHandlerClassTypeParameterized(Number, setter(values, 0));
  obj.methodWithHandlerClassTypeParameterized(Boolean, setter(values, 1));
  obj.methodWithHandlerClassTypeParameterized(String, setter(values, 2));
  obj.methodWithHandlerClassTypeParameterized(Object, setter(values, 3));
  obj.methodWithHandlerClassTypeParameterized(Array, setter(values, 4));
  obj.methodWithHandlerClassTypeParameterized(RefedInterface1, setter(values, 5));
  checkMethodWithClassTypeParameterized(values);
}

function testMethodWithHandlerAsyncResultClassTypeParameterized() {
  var values = [];
  obj.methodWithHandlerAsyncResultClassTypeParameterized(Number, asyncResultSetter(values, 0));
  obj.methodWithHandlerAsyncResultClassTypeParameterized(Boolean, asyncResultSetter(values, 1));
  obj.methodWithHandlerAsyncResultClassTypeParameterized(String, asyncResultSetter(values, 2));
  obj.methodWithHandlerAsyncResultClassTypeParameterized(Object, asyncResultSetter(values, 3));
  obj.methodWithHandlerAsyncResultClassTypeParameterized(Array, asyncResultSetter(values, 4));
  obj.methodWithHandlerAsyncResultClassTypeParameterized(RefedInterface1, asyncResultSetter(values, 5));
  checkMethodWithClassTypeParameterized(values);
}

function testMethodWithFunctionParamClassTypeParameterized() {
  var values = [];
  obj.methodWithFunctionParamClassTypeParameterized(Number, setter(values, 0));
  obj.methodWithFunctionParamClassTypeParameterized(Boolean, setter(values, 1));
  obj.methodWithFunctionParamClassTypeParameterized(String, setter(values, 2));
  obj.methodWithFunctionParamClassTypeParameterized(Object, setter(values, 3));
  obj.methodWithFunctionParamClassTypeParameterized(Array, setter(values, 4));
  obj.methodWithFunctionParamClassTypeParameterized(RefedInterface1, setter(values, 5));
  checkMethodWithClassTypeParameterized(values);
}

function checkMethodWithClassTypeParameterized(values) {
  var ret = values[0];
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  var val = ret.getValue();
  assertEquals(val, 123456789);

  ret = values[1];
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  val = ret.getValue();
  assertEquals(val, true);

  ret = values[2];
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  val = ret.getValue();
  assertEquals(val, "zoumbawe");

  ret = values[3];
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  val = ret.getValue();
  assertEquals("stilton", val["cheese"]);

  ret.setValue({"wine":"condrieu"});
  val = ret.getValue();
  assertEquals("condrieu", val["wine"]);

  ret = values[4];
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  val = ret.getValue();
  assertEquals("cheese", val[0]);
  assertEquals("stilton", val[1]);

  ret.setValue({"wine":"condrieu"});
  val = ret.getValue();
  assertEquals("condrieu", val["wine"]);

  ret = values[5];
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  val = ret.getValue();
  Assert.assertNotEquals('undefined', typeof val._jdel);
  assertEquals('foo', val.getString());

  refed_obj.setString("the_string");
  ret.setValue(refed_obj);
  val = ret.getValue();
  Assert.assertNotEquals('undefined', typeof val._jdel);
  assertEquals('the_string', val.getString());
}

function testMethodWithClassTypeParam() {
  // obj.methodWithClassTypeParam(Number, 123456789);
  obj.methodWithClassTypeParam(Boolean, true);
  obj.methodWithClassTypeParam(String, "zoumbawe");
  obj.methodWithClassTypeParam(Object, {"cheese":"stilton"});
  obj.methodWithClassTypeParam(Array, ["cheese","stilton"]);
  obj.methodWithClassTypeParam(RefedInterface1, refed_obj.setString("foo"));
}

function testMethodWithClassTypeReturn() {
  checkMethodWithClassType([
    obj.methodWithClassTypeReturn(Number),
    obj.methodWithClassTypeReturn(Boolean),
    obj.methodWithClassTypeReturn(String),
    obj.methodWithClassTypeReturn(Object),
    obj.methodWithClassTypeReturn(Array),
    obj.methodWithClassTypeReturn(RefedInterface1)
  ]);
}

function testMethodWithClassTypeHandler() {
  var values = [];
  obj.methodWithClassTypeHandler(Number, setter(values, 0));
  obj.methodWithClassTypeHandler(Boolean, setter(values, 1));
  obj.methodWithClassTypeHandler(String, setter(values, 2));
  obj.methodWithClassTypeHandler(Object, setter(values, 3));
  obj.methodWithClassTypeHandler(Array, setter(values, 4));
  obj.methodWithClassTypeHandler(RefedInterface1, setter(values, 5));
  checkMethodWithClassType(values);
}

function testMethodWithClassTypeHandlerAsyncResult() {
  var values = [];
  obj.methodWithClassTypeHandlerAsyncResult(Number, asyncResultSetter(values, 0));
  obj.methodWithClassTypeHandlerAsyncResult(Boolean, asyncResultSetter(values, 1));
  obj.methodWithClassTypeHandlerAsyncResult(String, asyncResultSetter(values, 2));
  obj.methodWithClassTypeHandlerAsyncResult(Object, asyncResultSetter(values, 3));
  obj.methodWithClassTypeHandlerAsyncResult(Array, asyncResultSetter(values, 4));
  obj.methodWithClassTypeHandlerAsyncResult(RefedInterface1, asyncResultSetter(values, 5));
  checkMethodWithClassType(values);
}

function testMethodWithClassTypeFunctionParam() {
  var values = [];
  obj.methodWithClassTypeFunctionParam(Number, setter(values, 0));
  obj.methodWithClassTypeFunctionParam(Boolean, setter(values, 1));
  obj.methodWithClassTypeFunctionParam(String, setter(values, 2));
  obj.methodWithClassTypeFunctionParam(Object, setter(values, 3));
  obj.methodWithClassTypeFunctionParam(Array, setter(values, 4));
  obj.methodWithClassTypeFunctionParam(RefedInterface1, setter(values, 5));
  checkMethodWithClassType(values);
}

function testMethodWithClassTypeFunctionReturn() {
  // obj.methodWithClassTypeParam(Number, 123456789);
  obj.methodWithClassTypeFunctionReturn(Boolean, function() { return true; });
  obj.methodWithClassTypeFunctionReturn(String, function() { return "zoumbawe"; });
  obj.methodWithClassTypeFunctionReturn(Object, function() { return {"cheese":"stilton"}; });
  obj.methodWithClassTypeFunctionReturn(Array, function() { return ["cheese","stilton"]; });
  obj.methodWithClassTypeFunctionReturn(RefedInterface1, function() { return refed_obj.setString("foo"); });
}

function checkMethodWithClassType(values) {
  assertEquals(values[0], 123456789);
  assertEquals(true, values[1]);
  assertEquals("zoumbawe", values[2]);
  var jsonObject = values[3];
  assertEquals("stilton", jsonObject["cheese"]);
  var jsonArray = values[4];
  assertEquals("cheese", jsonArray[0]);
  assertEquals("stilton", jsonArray[1]);
  var refed = values[5];
  Assert.assertNotEquals('undefined', typeof refed._jdel);
  assertEquals('foo', refed.getString());
}

function testInterfaceWithStringArg() {
  var ret = obj.interfaceWithStringArg('the_string_value');
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  var val = ret.getValue();
  assertEquals('string', typeof val);
  assertEquals('the_string_value', val);
}

function testInterfaceWithVariableArg() {
  refed_obj.setString('the_string_value');
  var ret = obj.interfaceWithVariableArg('whatever', RefedInterface1, refed_obj);
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  var val = ret.getValue();
  Assert.assertNotEquals('undefined', typeof val._jdel);
  assertEquals('the_string_value', val.getString());

  ret = obj.interfaceWithVariableArg('whatever', String, 'the_string_arg');
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  val = ret.getValue();
  assertEquals('undefined', typeof val._jdel);
  assertEquals('the_string_arg', val);
}

function testInterfaceWithApiArg() {
  refed_obj.setString('the_string_value');
  var ret = obj.interfaceWithApiArg(refed_obj);
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  var val = ret.getValue();
  Assert.assertNotEquals('undefined', typeof val._jdel);
  assertEquals('the_string_value', val.getString());
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();






