var Assert = org.junit.Assert;

var GenericsTCK = require('testmodel-js/generics_tck');
var RefedInterface1 = require('testmodel-js/refed_interface1');

var obj = new GenericsTCK(new Packages.io.vertx.codegen.testmodel.GenericsTCKImpl());
var refed_obj = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());
var refed_obj2 = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());

function assertApiType(obj) {
  Assert.assertNotEquals('undefined', typeof obj._jdel);
  return obj;
}

function assertNumberEquals(expected, actual) {
  Assert.assertEquals(expected, actual, 0)
}

function assertFloatEquals(expected, actual) {
  Assert["assertEquals(float, float, float)"](expected, actual, 0)
}

function assertDoubleEquals(expected, actual) {
  Assert["assertEquals(double, double, double)"](expected, actual, 0)
}

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

function checkMethodWithBasicParameterized(values) {
  var ret = assertApiType(values[0]);
  assertNumberEquals(ret.getValue(), 123);
  ret.setValue(124);
  assertNumberEquals(ret.getValue(), 124);
  ret = assertApiType(values[1]);
  assertNumberEquals(ret.getValue(), 1234);
  ret.setValue(1235);
  assertNumberEquals(ret.getValue(), 1235);
  ret = assertApiType(values[2]);
  assertNumberEquals(ret.getValue(), 123456);
  ret.setValue(1234568);
  assertNumberEquals(ret.getValue(), 1234568);
  ret = assertApiType(values[3]);
  assertNumberEquals(ret.getValue(), 123456789);
  ret.setValue(123456790);
  assertNumberEquals(ret.getValue(), 123456790);
  ret = assertApiType(values[4]);
  assertFloatEquals(ret.getValue(), 0.34);
  ret.setValue(0.35);
  assertFloatEquals(ret.getValue(), 0.35);
  ret = assertApiType(values[5]);
  assertDoubleEquals(ret.getValue(), 0.314);
  ret.setValue(0.3141);
  assertDoubleEquals(ret.getValue(), 0.3141);
  ret = assertApiType(values[6]);
  Assert.assertEquals(ret.getValue(), true);
  ret.setValue(false);
  Assert.assertEquals(ret.getValue(), false);
  ret = assertApiType(values[7]);
  Assert.assertEquals(ret.getValue() + "", "F");
  ret.setValue("G");
  Assert.assertEquals(ret.getValue() + "", "G");
  ret = assertApiType(values[8]);
  Assert.assertEquals(ret.getValue(), "zoumbawe");
  ret.setValue("the_string");
  Assert.assertEquals(ret.getValue(), "the_string");
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

function checkMethodWitJsonParameterized(values) {
  var ret = assertApiType(values[0]);
  var val = ret.getValue();
  Assert.assertTrue(typeof val === 'object');
  Assert.assertEquals(val.cheese, "stilton");
  ret.setValue({"cheese": "roquefort"});
  val = ret.getValue();
  Assert.assertTrue(typeof val === 'object');
  Assert.assertEquals(val.cheese, "roquefort");
  ret = assertApiType(values[1]);
  val = ret.getValue();
  Assert.assertTrue(val instanceof Array);
  Assert.assertEquals(val[0], "cheese");
  Assert.assertEquals(val[1], "stilton");
  ret.setValue(["cheese", "roquefort"]);
  val = ret.getValue();
  Assert.assertTrue(val instanceof Array);
  Assert.assertEquals(val[0], "cheese");
  Assert.assertEquals(val[1], "roquefort");
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

function checkMethodWitDataObjectParameterized(values) {
  var ret = values[0];
  var val = ret.getValue();
  Assert.assertTrue(typeof val === 'object');
  assertDoubleEquals(val.wibble, 3.14);
  assertNumberEquals(val.bar, 123456);
  Assert.assertEquals(val.foo, "foo_value");
  ret.setValue({"wibble": 0.1, "bar": 543321, "foo": "another_value"});
  val = ret.getValue();
  Assert.assertTrue(typeof val === 'object');
  assertDoubleEquals(val.wibble, 0.1);
  assertNumberEquals(val.bar, 543321);
  Assert.assertEquals(val.foo, "another_value");
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

function checkMethodWithEnumParameterized(values) {
  var ret = assertApiType(values[0]);
  Assert.assertEquals(ret.getValue(), "WESTON");
  ret.setValue("JULIEN");
  Assert.assertEquals(ret.getValue(), "JULIEN");
  ret = assertApiType(values[1]);
  Assert.assertEquals(ret.getValue(), "LELAND");
  ret.setValue("LAURA");
  Assert.assertEquals(ret.getValue(), "LAURA");
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

function checkMethodWithUserTypeParameterized(values) {
  var ret = values[0];
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  var val = ret.getValue();
  Assert.assertNotEquals('undefined', typeof val._jdel);
  Assert.assertEquals('foo', val.getString());

  refed_obj.setString("the_string");
  ret.setValue(refed_obj);
  val = ret.getValue();
  Assert.assertNotEquals('undefined', typeof val._jdel);
  Assert.assertEquals('the_string', val.getString());
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

function checkMethodWithClassTypeParameterized(values) {
  var ret = values[0];
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  var val = ret.getValue();
  assertNumberEquals(val, 123456789);

  ret = values[1];
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  val = ret.getValue();
  Assert.assertEquals(val, true);

  ret = values[2];
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  val = ret.getValue();
  Assert.assertEquals(val, "zoumbawe");

  ret = values[3];
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  val = ret.getValue();
  Assert.assertEquals("stilton", val["cheese"]);

  ret.setValue({"wine":"condrieu"});
  val = ret.getValue();
  Assert.assertEquals("condrieu", val["wine"]);

  ret = values[4];
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  val = ret.getValue();
  Assert.assertEquals("cheese", val[0]);
  Assert.assertEquals("stilton", val[1]);

  ret.setValue({"wine":"condrieu"});
  val = ret.getValue();
  Assert.assertEquals("condrieu", val["wine"]);

  ret = values[5];
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  val = ret.getValue();
  Assert.assertNotEquals('undefined', typeof val._jdel);
  Assert.assertEquals('foo', val.getString());

  refed_obj.setString("the_string");
  ret.setValue(refed_obj);
  val = ret.getValue();
  Assert.assertNotEquals('undefined', typeof val._jdel);
  Assert.assertEquals('the_string', val.getString());
}

function testInterfaceWithStringArg() {
  var ret = obj.interfaceWithStringArg('the_string_value');
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  var val = ret.getValue();
  Assert.assertEquals('string', typeof val);
  Assert.assertEquals('the_string_value', val);
}

function testInterfaceWithVariableArg() {
  refed_obj.setString('the_string_value');
  var ret = obj.interfaceWithVariableArg('whatever', RefedInterface1, refed_obj);
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  var val = ret.getValue();
  Assert.assertNotEquals('undefined', typeof val._jdel);
  Assert.assertEquals('the_string_value', val.getString());

  ret = obj.interfaceWithVariableArg('whatever', String, 'the_string_arg');
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  val = ret.getValue();
  Assert.assertEquals('undefined', typeof val._jdel);
  Assert.assertEquals('the_string_arg', val);
}

function testInterfaceWithApiArg() {
  refed_obj.setString('the_string_value');
  var ret = obj.interfaceWithApiArg(refed_obj);
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  var val = ret.getValue();
  Assert.assertNotEquals('undefined', typeof val._jdel);
  Assert.assertEquals('the_string_value', val.getString());
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();






