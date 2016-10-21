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
}

function testMethodWithClassTypeParameterizedReturn() {
  var ret = obj.methodWithClassTypeParameterizedReturn(RefedInterface1);
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  var val = ret.getValue();
  Assert.assertNotEquals('undefined', typeof val._jdel);
  Assert.assertEquals('foo', val.getString());

  ret = obj.methodWithClassTypeParameterizedReturn(Object);
  Assert.assertNotEquals('undefined', typeof ret._jdel);
  val = ret.getValue();
  Assert.assertEquals("stilton", val["cheese"]);
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

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();






