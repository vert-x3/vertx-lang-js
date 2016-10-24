var Assert = org.junit.Assert;

var GenericsTCK = require('testmodel-js/generics_tck');
var RefedInterface1 = require('testmodel-js/refed_interface1');

var obj = new GenericsTCK(new Packages.io.vertx.codegen.testmodel.GenericsTCKImpl());
var refed_obj = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());
var refed_obj2 = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());

function testMethodWithUserTypeParameterizedReturn() {
  var ret = obj.methodWithUserTypeParameterizedReturn();
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  var val = ret.getValue();
  Assert.assertNotEquals('undefined', typeof val._jdel);
  Assert.assertEquals('foo', val.getString());

  refed_obj.setString("the_string")
  ret.setValue(refed_obj);
  val = ret.getValue();
  Assert.assertNotEquals('undefined', typeof val._jdel);
  Assert.assertEquals('the_string', val.getString());
}

function testMethodWithClassTypeParameterizedReturn() {
  var ret = obj.methodWithClassTypeParameterizedReturn(RefedInterface1);
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  var val = ret.getValue();
  Assert.assertNotEquals('undefined', typeof val._jdel);
  Assert.assertEquals('foo', val.getString());

  refed_obj.setString("the_string")
  ret.setValue(refed_obj);
  val = ret.getValue();
  Assert.assertNotEquals('undefined', typeof val._jdel);
  Assert.assertEquals('the_string', val.getString());

  ret = obj.methodWithClassTypeParameterizedReturn(Object);
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  val = ret.getValue();
  Assert.assertEquals("stilton", val["cheese"]);

  ret.setValue({"wine":"condrieu"});
  val = ret.getValue();
  Assert.assertEquals("condrieu", val["wine"]);
}

function testMethodWithHandlerClassTypeParameterized() {
  var count = 0;
  obj.methodWithHandlerClassTypeParameterized(RefedInterface1, function(ret) {
    Assert.assertNotEquals('undefined', typeof ret._jdel);
    var val = ret.getValue();
    Assert.assertNotEquals('undefined', typeof val._jdel);
    Assert.assertEquals('foo', val.getString());
    count++;
  });
  Assert.assertEquals(1, count, 0);

  ret = obj.methodWithHandlerClassTypeParameterized(Object, function(ret) {
    Assert.assertNotEquals('undefined', typeof ret._jdel);
    var val = ret.getValue();
    Assert.assertEquals("stilton", val["cheese"]);
    count++;
  });
  Assert.assertEquals(2, count, 0);
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

  var ret = obj.interfaceWithVariableArg('whatever', String, 'the_string_arg');
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  var val = ret.getValue();
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






