var Assert = org.junit.Assert;

var TestInterface = require('testmodel-js/test_interface');
var RefedInterface1 = require('testmodel-js/refed_interface1');
var Factory = require('testmodel-js/factory');
var SubInterface = require('acme-js/sub_interface');
var MyInterface = require('acme-js/my_interface');

var obj = new TestInterface(new Packages.io.vertx.codegen.testmodel.TestInterfaceImpl());
var refed_obj = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());
var refed_obj2 = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());

var NullableTCK = require('testmodel-js/nullable_tck');
var nullableTCK = new NullableTCK(new Packages.io.vertx.codegen.testmodel.NullableTCKImpl());

var DataObjectTCK = require('testmodel-js/data_object_tck');
var dataObjectTCK = new DataObjectTCK(new Packages.io.vertx.codegen.testmodel.DataObjectTCKImpl());

var that = this;

function testMethodWithBasicParams() {
  obj.methodWithBasicParams(123, 12345, 1234567, 1265615234, 12.345, 12.34566, true, 'X', 'foobar');
}

function testMethodWithBasicBoxedParams() {
  obj.methodWithBasicBoxedParams(123, 12345, 1234567, 1265615234, 12.345, 12.34566, true, 'X');
}

function testMethodWithHandlerBasicTypes() {
  var count = 0;
  obj.methodWithHandlerBasicTypes(function(b) {
    Assert.assertEquals("number", typeof b);
    Assert.assertEquals(123, b, 0);
    count++;
  }, function(s) {
    Assert.assertEquals("number", typeof s);
    Assert.assertEquals(12345, s, 0);
    count++;
  }, function (i) {
    Assert.assertEquals("number", typeof i);
    Assert.assertEquals(1234567, i, 0);
    count++;
  }, function (l) {
    Assert.assertEquals("number", typeof l);
    Assert["assertEquals(double, double, double)"](1265615234, l, 0);
    count++;
  }, function (f) {
    Assert.assertEquals("number", typeof f);
    Assert["assertEquals(float, float, float)"](12.345, f, 0);
    count++;
  }, function(d) {
    Assert.assertEquals("number", typeof d);
    Assert["assertEquals(double, double, double)"](12.34566, d, 0);
    count++;
  }, function (bool) {
    Assert.assertEquals("boolean", typeof bool);
    Assert.assertTrue(bool);
    count++;
  }, function (char) {
    // TODO - it seems that Nashorn passes Java chars as object and doesn't convert them to String automatically
    Assert.assertEquals("object", typeof char); // !!
    if (typeof char === "object") {
      console.log("Nashorn is returning char from Java API as object into JS, not string!");
    }
    // hence we do '' + char to convert to String
    Assert.assertEquals('X', '' + char);
    count++;
  }, function (str) {
    Assert.assertEquals("string", typeof str);
    Assert.assertEquals("quux!", str);
    count++;
  });
  Assert.assertEquals(9, count, 0);
}

function testMethodWithHandlerAsyncResultBasicTypes() {
  var count = 0;
  obj.methodWithHandlerAsyncResultByte(false, function(b, err) {
    Assert.assertEquals("number", typeof b);
    Assert.assertEquals(123, b, 0);
    Assert.assertNull(err);
    count++;
  });
  obj.methodWithHandlerAsyncResultShort(false, function(s, err) {
    Assert.assertEquals("number", typeof s);
    Assert.assertEquals(12345, s, 0);
    Assert.assertNull(err);
    count++;
  });
  obj.methodWithHandlerAsyncResultInteger(false, function (i, err) {
    Assert.assertEquals("number", typeof i);
    Assert.assertEquals(1234567, i, 0);
    Assert.assertNull(err);
    count++;
  });
  obj.methodWithHandlerAsyncResultLong(false, function (l, err) {
    Assert.assertEquals("number", typeof l);
    Assert["assertEquals(double, double, double)"](1265615234, l, 0);
    Assert.assertNull(err);
    count++;
  });
  obj.methodWithHandlerAsyncResultFloat(false, function (f, err) {
    Assert.assertEquals("number", typeof f);
    Assert["assertEquals(float, float, float)"](12.345, f, 0);
    Assert.assertNull(err);
    count++;
  });
  obj.methodWithHandlerAsyncResultDouble(false, function(d, err) {
    Assert.assertEquals("number", typeof d);
    Assert["assertEquals(double, double, double)"](12.34566, d, 0);
    Assert.assertNull(err);
    count++;
  });
  obj.methodWithHandlerAsyncResultBoolean(false, function (bool, err) {
    Assert.assertEquals("boolean", typeof bool);
    Assert.assertTrue(bool);
    Assert.assertNull(err);
    count++;
  });
  obj.methodWithHandlerAsyncResultCharacter(false, function (char, err) {
    // TODO - it seems that Nashorn passes Java chars as object and doesn't convert them to String automatically
    Assert.assertEquals("object", typeof char); // !!
    if (typeof char === "object") {
      console.log("Nashorn is returning char from Java API as object into JS, not string!");
    }
    // hence we do '' + char to convert to String
    Assert.assertEquals('X', '' + char);
    Assert.assertNull(err);
    count++;
  });
  obj.methodWithHandlerAsyncResultString(false, function (str, err) {
    Assert.assertEquals("string", typeof str);
    Assert.assertEquals("quux!", str);
    Assert.assertNull(err);
    count++;
  });
  Assert.assertEquals(9, count, 0);
}

function testMethodWithHandlerAsyncResultBasicTypesFails() {
  var count = 0;
  obj.methodWithHandlerAsyncResultByte(true, function(b, err) {
    Assert.assertNull(b);
    Assert.assertNotNull(err);
    Assert.assertEquals("foobar!", err.getMessage());
     count++;
  });
  obj.methodWithHandlerAsyncResultShort(true, function(s, err) {
    Assert.assertNull(s);
    Assert.assertNotNull(err);
    Assert.assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultInteger(true, function (i, err) {
    Assert.assertNull(i);
    Assert.assertNotNull(err);
    Assert.assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultLong(true, function (l, err) {
    Assert.assertNull(l);
    Assert.assertNotNull(err);
    Assert.assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultFloat(true, function (f, err) {
    Assert.assertNull(f);
    Assert.assertNotNull(err);
    Assert.assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultDouble(true, function(d, err) {
    Assert.assertNull(d);
    Assert.assertNotNull(err);
    Assert.assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultBoolean(true, function (bool, err) {
    Assert.assertNull(bool);
    Assert.assertNotNull(err);
    Assert.assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultCharacter(true, function (char, err) {
    Assert.assertNull(char);
    Assert.assertNotNull(err);
    Assert.assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultString(true, function (str, err) {
    Assert.assertNull(str);
    Assert.assertNotNull(err);
    Assert.assertEquals("foobar!", err.getMessage());
    count++;
  });
  Assert.assertEquals(9, count, 0);
}

function testMethodWithUserTypes() {
  refed_obj.setString("aardvarks");
  obj.methodWithUserTypes(refed_obj);
}

function testObjectParam() {
  obj.methodWithObjectParam('string', 'wibble');
  obj.methodWithObjectParam('true', true);
  obj.methodWithObjectParam('false', false);
  obj.methodWithObjectParam('long', 123);
  obj.methodWithObjectParam('double', 123.456);
  var jsonObj = {
    foo: "hello",
    bar: 123
  };
  obj.methodWithObjectParam("JsonObject", jsonObj);
  var jsonArr = ["foo", "bar", "wib"];
  obj.methodWithObjectParam("JsonArray", jsonArr);
}

function testDataObjectParam() {
  var dataObject = {
    foo: "hello",
    bar: 123,
    wibble: 1.23
  };
  obj.methodWithDataObjectParam(dataObject);
}

function testMethodWithHandlerDataObject() {
  var count = 0;

  obj.methodWithHandlerDataObject(function(option) {
    Assert.assertTrue(typeof option === 'object');
    Assert.assertEquals("foo", option.foo);
    Assert.assertEquals(123, option.bar, 0);
    Assert.assertEquals(0.0, option.wibble, 0);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultDataObject() {
  var count = 0;

  obj.methodWithHandlerAsyncResultDataObject(false, function(option, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof option === 'object');
    Assert.assertEquals("foo", option.foo);
    Assert.assertEquals(123, option.bar, 0);
    Assert.assertEquals(0.0, option.wibble, 0);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultDataObjectFails() {
  var count = 0;
  obj.methodWithHandlerAsyncResultDataObject(true, function(option, err) {
    Assert.assertNull(option);
    Assert.assertNotNull(err);
    Assert.assertEquals("foobar!", err.getMessage());
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerStringReturn() {
  var handler = obj.methodWithHandlerStringReturn("the-result");
  handler("the-result");
  var failed = false;
  try {
    handler("not-expected");
  }  catch (e) {
    failed = true;
  }
  Assert.assertTrue(failed);
}

function testMethodWithHandlerGenericReturn() {
  var result;
  var handler = obj.methodWithHandlerGenericReturn(function(res) {
    result = res;
  });
  handler("the-result");
  Assert.assertEquals(result, "the-result");
  handler(obj);
  Assert.assertEquals(result, obj);
}

function testMethodWithHandlerVertxGenReturn() {
  var handler = obj.methodWithHandlerVertxGenReturn("the-result");
  refed_obj.setString("the-result");
  handler(refed_obj);
}

function testMethodWithHandlerAsyncResultStringReturn() {
  var succeedingHandler = obj.methodWithHandlerAsyncResultStringReturn("the-result", false);
  succeedingHandler("the-result");
  succeedingHandler("the-result", null);
  var failed = false;
  try {
    succeedingHandler("not-expected");
  }  catch (e) {
    failed = true;
  }
  Assert.assertTrue(failed);
  var failingHandler = obj.methodWithHandlerAsyncResultStringReturn("an-error", true);
  try {
    throw "an-error";
  } catch (e) {
    failingHandler("whatever", e);
  }
  failed = false;
  try {
    failingHandler("whatever");
  } catch (e) {
    failed = true;
  }
  Assert.assertTrue(failed);
}

function testMethodWithHandlerAsyncResultGenericReturn() {
  var result;
  var succeedingHandler = obj.methodWithHandlerAsyncResultGenericReturn(function(res ,err) {
    result = err != null ? err : res;
  });
  succeedingHandler("the-result");
  Assert.assertEquals(result, "the-result");
  succeedingHandler(null, "the-error");
  Assert.assertEquals(result.getMessage(), "the-error");
  succeedingHandler(obj);
  Assert.assertEquals(result, obj);
}

function testMethodWithHandlerAsyncResultVertxGenReturn() {
  var handler = obj.methodWithHandlerAsyncResultVertxGenReturn("the-async-result", false);
  refed_obj.setString("the-async-result");
  handler(refed_obj);
  var err;
  try {
    throw "it-fails";
  } catch (e) {
    err = e;
  }
  handler = obj.methodWithHandlerAsyncResultVertxGenReturn("it-fails", true);
  handler(null, err);
}

function testMethodWithHandlerUserTypes() {
  var count = 0;
  obj.methodWithHandlerUserTypes(function(refedObj) {
    Assert.assertEquals("echidnas", refedObj.getString());
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultUserTypes() {
  var count = 0;
  obj.methodWithHandlerAsyncResultUserTypes(function(refedObj, err) {
    Assert.assertNull(err);
    Assert.assertEquals("cheetahs", refedObj.getString());
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithConcreteHandlerUserTypeSubtype() {
  var count = 0;
  obj.methodWithConcreteHandlerUserTypeSubtype(Factory.createConcreteHandlerUserType(function(refedObj) {
    Assert.assertEquals("echidnas", refedObj.getString());
    count++;
  }));
  Assert.assertEquals(1, count, 0);
}

function testMethodWithAbstractHandlerUserTypeSubtype() {
  var count = 0;
  obj.methodWithAbstractHandlerUserTypeSubtype(Factory.createAbstractHandlerUserType(function(refedObj) {
    Assert.assertEquals("echidnas", refedObj.getString());
    count++;
  }));
  Assert.assertEquals(1, count, 0);
}

function testMethodWithConcreteHandlerUserTypeSubtypeExtension() {
  var count = 0;
  obj.methodWithConcreteHandlerUserTypeSubtypeExtension(Factory.createConcreteHandlerUserTypeExtension(function(refedObj) {
    Assert.assertEquals("echidnas", refedObj.getString());
    count++;
  }));
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerVoid() {
  var count = 0;
  obj.methodWithHandlerVoid(function() {
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultVoid() {
  var count = 0;
  obj.methodWithHandlerAsyncResultVoid(false, function(v, err) {
    Assert.assertNull(err);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultVoidFails() {
  var count = 0;
  obj.methodWithHandlerAsyncResultVoid(true, function(v, err) {
    Assert.assertNotNull(err);
    Assert.assertEquals("foo!", err.getMessage());
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerThrowable() {
  var count = 0;
  obj.methodWithHandlerThrowable(function(t) {
    Assert.assertNotNull(t);
    Assert.assertEquals("cheese!", t.getMessage());
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerGenericUserType() {
  function runTest(value, assert) {
    var count = 0;
    obj.methodWithHandlerGenericUserType(value, function(refedObj) {
      Assert.assertEquals("[object Object]", refedObj.toString()); // Make sure we don't have a Java object
      assert(refedObj.getValue());
      count++;
    });
    Assert.assertEquals(1, count, 0);
  }
  runTest("string_value", function(value) { Assert.assertEquals("string_value", value) });
  runTest({"key":"key_value"}, function(value) { Assert.assertEquals("key_value", value["key"]) });
  runTest(["foo","bar","juu"], function(value) { Assert.assertEquals(["foo","bar","juu"], value) });
}

function testMethodWithHandlerAsyncResultGenericUserType() {
  function runTest(value, assert) {
    var count = 0;
    obj.methodWithHandlerAsyncResultGenericUserType(value, function(refedObj, err) {
      Assert.assertNotNull(refedObj);
      Assert.assertNull(err);
      Assert.assertEquals("[object Object]", refedObj.toString()); // Make sure we don't have a Java object
      assert(refedObj.getValue());
      count++;
    });
    Assert.assertEquals(1, count, 0);
  }
  runTest("string_value", function(value) { Assert.assertEquals("string_value", value) });
  runTest({"key":"key_value"}, function(value) { Assert.assertEquals("key_value", value["key"]) });
  runTest(["foo","bar","juu"], function(value) { Assert.assertEquals(["foo","bar","juu"], value) });
}

function testMethodWithGenericParam() {
  obj.methodWithGenericParam("String", "foo");
  var jsonObj = {
    foo: "hello",
    bar: 123
  };
  obj.methodWithGenericParam("JsonObject", jsonObj);
  var jsonArr = ["foo", "bar", "wib"];
  obj.methodWithGenericParam("JsonArray", jsonArr);
}

function testMethodWithGenericHandler() {
    var count = 0;
    obj.methodWithGenericHandler("String", function(res) {
        Assert.assertEquals("foo", res);
        count++;
    });
    Assert.assertEquals(1, count, 0);
    count = 0;
    obj.methodWithGenericHandler("Ref", function(res) {
        Assert.assertEquals("bar", res.getString());
        count++;
    });
    Assert.assertEquals(1, count, 0);
    count = 0;
    obj.methodWithGenericHandler("JsonObject", function(res) {
        Assert.assertEquals("hello", res.foo);
        Assert.assertEquals(123, res.bar, 0);
        count++;
    });
    Assert.assertEquals(1, count, 0);
    count = 0;
    obj.methodWithGenericHandler("JsonArray", function(res) {
        Assert.assertEquals("foo", res[0]);
        Assert.assertEquals("bar", res[1]);
        Assert.assertEquals("wib", res[2]);
        count++;
    });
    Assert.assertEquals(1, count, 0);
  count = 0;
  obj.methodWithGenericHandler("JsonObjectComplex", function(res) {
    Assert.assertTrue(typeof res === 'object');
    Assert.assertTrue(typeof res.outer === 'object');
    Assert.assertEquals("hello", res.outer.foo);
    Assert.assertTrue(res.bar instanceof Array);
    Assert.assertEquals("this", res.bar[0]);
    Assert.assertEquals("that", res.bar[1]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithGenericHandlerAsyncResult() {
    var count = 0;
    obj.methodWithGenericHandlerAsyncResult("String", function (res, err) {
        Assert.assertNull(err);
        Assert.assertEquals("foo", res);
        count++;
    });
    Assert.assertEquals(1, count, 0);
    count = 0;
    obj.methodWithGenericHandlerAsyncResult("Ref", function (res, err) {
        Assert.assertNull(err);
        Assert.assertEquals("bar", res.getString());
        count++;
    });
    Assert.assertEquals(1, count, 0);
    count = 0;
    obj.methodWithGenericHandlerAsyncResult("JsonObject", function (res, err) {
        Assert.assertNull(err);
        Assert.assertEquals("hello", res.foo);
        Assert.assertEquals(123, res.bar, 0);
        count++;
    });
    Assert.assertEquals(1, count, 0);
    count = 0;
    obj.methodWithGenericHandlerAsyncResult("JsonObjectComplex", function (res, err) {
      Assert.assertNull(err);
      Assert.assertTrue(typeof res === 'object');
      Assert.assertTrue(typeof res.outer === 'object');
      Assert.assertEquals("hello", res.outer.foo);
      Assert.assertTrue(res.bar instanceof Array);
      Assert.assertEquals("this", res.bar[0]);
      Assert.assertEquals("that", res.bar[1]);
      count++;
    });
    Assert.assertEquals(1, count, 0);
    count = 0;
    obj.methodWithGenericHandlerAsyncResult("JsonArray", function (res, err) {
        Assert.assertEquals("foo", res[0]);
        Assert.assertEquals("bar", res[1]);
        Assert.assertEquals("wib", res[2]);
        count++;
    });
    Assert.assertEquals(1, count, 0);
}

function testBasicReturns() {
  var ret = obj.methodWithByteReturn();
  Assert.assertEquals(ret, 123, 0);
  ret = obj.methodWithShortReturn();
  Assert.assertEquals(ret, 12345, 0);
  ret = obj.methodWithIntReturn();
  Assert.assertEquals(ret, 12345464, 0);
  ret = obj.methodWithLongReturn();
  Assert["assertEquals(double, double, double)"](65675123, ret, 0);
  ret = obj.methodWithFloatReturn();
  Assert["assertEquals(float, float, float)"](1.23, ret, 0);
  ret = obj.methodWithDoubleReturn();
  Assert["assertEquals(double, double, double)"](3.34535, ret, 0);
  ret = obj.methodWithBooleanReturn();
  Assert.assertTrue(ret);
  ret = obj.methodWithCharReturn();
  Assert.assertEquals("Y", "" + ret);
  ret = obj.methodWithStringReturn();
  Assert.assertEquals("orangutan", ret);
}

function testVertxGenReturn() {
  var ret = obj.methodWithVertxGenReturn();
  Assert.assertEquals("chaffinch", ret.getString());
  Assert.assertTrue(ret._jdel);
}

function testVertxGenNullReturn() {
  var ret = obj.methodWithVertxGenNullReturn();
  Assert.assertNull(ret);
}

function testAbstractVertxGenReturn() {
  var ret = obj.methodWithAbstractVertxGenReturn();
  Assert.assertEquals("abstractchaffinch", ret.getString());
  Assert.assertTrue(ret._jdel);
}

function testDataObjectReturn() {
  var ret = obj.methodWithDataObjectReturn();
  Assert.assertTrue(typeof ret === 'object');
  Assert.assertEquals("foo", ret.foo);
  Assert.assertEquals(123, ret.bar, 0);
  Assert.assertEquals(0.0, ret.wibble, 0);
}

function testDataObjectNullReturn() {
  var ret = obj.methodWithDataObjectNullReturn();
  Assert.assertNull(ret);
}

function testOverloadedMethods() {
  refed_obj.setString("dog");
  var ret = obj.overloadedMethod("cat", refed_obj);
  Assert.assertEquals("meth1", ret);
  ret = obj.overloadedMethod("cat", refed_obj, 12345, function(animal) {
    Assert.assertEquals("giraffe", animal);
    called = true;
  });
  Assert.assertEquals("meth2", ret);
  Assert.assertTrue(called);
  called = false;
  ret = obj.overloadedMethod("cat", function(animal) {
    Assert.assertEquals("giraffe", animal);
    called = true;
  });
  Assert.assertEquals("meth3", ret);
  Assert.assertTrue(called);
  called = false;
  ret = obj.overloadedMethod("cat", refed_obj, function(animal) {
    Assert.assertEquals("giraffe", animal);
    called = true;
  });
  Assert.assertEquals("meth4", ret);
  Assert.assertTrue(called);

  try {
    obj.overloadedMethod("cat");
  } catch (e) {
    Assert.assertTrue(e instanceof TypeError)
  }
  try {
    obj.overloadedMethod("cat", refed_obj, 12345, function(animal) {}, "foo");
  } catch (e) {
    Assert.assertTrue(e instanceof TypeError)
  }

  try {
    obj.overloadedMethod(refed_obj);
  } catch (e) {
    Assert.assertTrue(e instanceof TypeError)
  }

  try {
    obj.overloadedMethod(function(animal) {});
  } catch (e) {
    Assert.assertTrue(e instanceof TypeError)
  }
}

function testSuperInterfaces() {
  obj.superMethodWithBasicParams(123, 12345, 1234567, 1265615234, 12.345, 12.34566, true, 'X', 'foobar');
  obj.otherSuperMethodWithBasicParams(123, 12345, 1234567, 1265615234, 12.345, 12.34566, true, 'X', 'foobar');
}

function testMethodWithGenericReturn() {
  // JsonObject should be converted to JS object
  var ret = obj.methodWithGenericReturn("JsonObject");
  Assert.assertTrue(typeof ret === 'object');
  Assert.assertEquals("hello", ret.foo);
  Assert.assertEquals(123, ret.bar, 0);

  ret = obj.methodWithGenericReturn("JsonArray");
  Assert.assertTrue(typeof ret === 'object');
  Assert.assertTrue(ret instanceof Array)
  Assert.assertEquals("foo", ret[0]);
  Assert.assertEquals("bar", ret[1]);
  Assert.assertEquals("wib", ret[2]);
}

function testFluentMethod() {
  var ret = obj.fluentMethod("bar");
  ret.fluentMethod("bar");
  Assert.assertTrue(obj === ret);
}

function testStaticFactoryMethod() {
  var ret = TestInterface.staticFactoryMethod("bar");
  Assert.assertTrue(typeof ret === 'object');
  Assert.assertEquals("bar", ret.getString());
}

function testMethodWithCachedReturn() {
  var ret = obj.methodWithCachedReturn("bar");
  Assert.assertTrue(typeof ret === 'object');
  Assert.assertEquals("bar", ret.getString());
  var ret2 = obj.methodWithCachedReturn("bar");
  Assert.assertTrue(ret === ret2);
  var ret3 = obj.methodWithCachedReturn("bar");
  Assert.assertTrue(ret2 === ret3);
}

function testJsonReturns() {
  var ret = obj.methodWithJsonObjectReturn();
  Assert.assertTrue(typeof ret === 'object')
  Assert.assertEquals("stilton", ret.cheese);
  ret = obj.methodWithJsonArrayReturn();
  Assert.assertTrue(typeof ret === 'object')
  Assert.assertTrue(ret instanceof Array)
  Assert.assertEquals("socks", ret[0]);
  Assert.assertEquals("shoes", ret[1]);
}

function testNullJsonReturns() {
    var ret = obj.methodWithNullJsonObjectReturn();
    Assert.assertNull(ret)
    ret = obj.methodWithNullJsonArrayReturn();
    Assert.assertNull(ret)
}

function testComplexJsonReturns() {
  var ret = obj.methodWithComplexJsonObjectReturn();
  assertTrue(typeof ret === 'object');
  assertTrue(typeof ret.outer === 'object');
  assertEquals("tartan", ret.outer.socks);
  assertTrue(ret.list instanceof Array);
  assertEquals("yellow", ret.list[0]);
  assertEquals("blue", ret.list[0]);
  ret = obj.methodWithComplexJsonArrayReturn();
  assertTrue(ret instanceof Array);
  assertTrue(typeof ret[0] === 'object');
  assertEquals("hello", ret[0].foo);
  assertTrue(typeof ret[1] === 'object');
  assertEquals("bye", ret[1].bar);
}

function testJsonParams() {
  var jsonObject = {
    cat: "lion",
    cheese: "cheddar"
  }
  var jsonArray = ["house", "spider"];
  obj.methodWithJsonParams(jsonObject, jsonArray);
}

function testNullJsonParams() {
   obj.methodWithNullJsonParams(null, null);
}

function testJsonHandlerParams() {

  var count = 0;
  obj.methodWithHandlerJson(function(jsonObject) {
    Assert.assertTrue(typeof jsonObject === 'object')
    Assert.assertEquals("stilton", jsonObject.cheese);
    count++;
  }, function(jsonArray) {
    Assert.assertTrue(typeof jsonArray === 'object')
    Assert.assertTrue(jsonArray instanceof Array)
    Assert.assertEquals("socks", jsonArray[0]);
    Assert.assertEquals("shoes", jsonArray[1]);
    count++;
  });
  Assert.assertEquals(2, count, 0);
}

function testNullJsonHandlerParams() {

    var count = 0;
    obj.methodWithHandlerNullJson(function(jsonObject) {
        Assert.assertTrue(typeof jsonObject === 'object')
        Assert.assertNull(jsonObject);
        count++;
    }, function(jsonArray) {
        Assert.assertTrue(typeof jsonArray === 'object')
        Assert.assertNull(jsonArray);
        count++;
    });
    Assert.assertEquals(2, count, 0);
}

function testComplexJsonHandlerParams() {
  var count = 0;
  obj.methodWithHandlerComplexJson(function(jsonObject) {
    Assert.assertTrue(typeof jsonObject === 'object');
    Assert.assertTrue(typeof jsonObject.outer === 'object');
    Assert.assertEquals("tartan", jsonObject.outer.socks);
    Assert.assertTrue(jsonObject.list instanceof Array);
    Assert.assertEquals("yellow", jsonObject.list[0]);
    Assert.assertEquals("blue", jsonObject.list[1]);
    count++;
  }, function(jsonArray) {
    Assert.assertTrue(jsonArray instanceof Array);
    Assert.assertTrue(jsonArray[0] instanceof Array);
    Assert.assertTrue(typeof jsonArray[0][0] === 'object');
    Assert.assertEquals("hello", jsonArray[0][0].foo);
    Assert.assertTrue(typeof jsonArray[1][0] === 'object');
    Assert.assertEquals("bye", jsonArray[1][0].bar);
    count++;
  });
  Assert.assertEquals(2, count, 0);
}

function testJsonHandlerAsyncResultParams() {

  var count = 0;
  obj.methodWithHandlerAsyncResultJsonObject(function(jsonObject, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof jsonObject === 'object')
    Assert.assertEquals("stilton", jsonObject.cheese);
    count++;
  });
  obj.methodWithHandlerAsyncResultJsonArray(function(jsonArray, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof jsonArray === 'object')
    Assert.assertTrue(jsonArray instanceof Array)
    Assert.assertEquals("socks", jsonArray[0]);
    Assert.assertEquals("shoes", jsonArray[1]);
    count++;
  });
  Assert.assertEquals(2, count, 0);
}

function testComplexJsonHandlerAsyncResultParams() {
  var count = 0;
  obj.methodWithHandlerAsyncResultComplexJsonObject(function(jsonObject, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof jsonObject === 'object');
    Assert.assertTrue(typeof jsonObject.outer === 'object');
    Assert.assertEquals("tartan", jsonObject.outer.socks);
    Assert.assertTrue(jsonObject.list instanceof Array);
    Assert.assertEquals("yellow", jsonObject.list[0]);
    Assert.assertEquals("blue", jsonObject.list[1]);
    count++;
  });
  obj.methodWithHandlerAsyncResultComplexJsonArray(function(jsonArray, err) {
    Assert.assertNull(err);
    Assert.assertTrue(jsonArray instanceof Array);
    Assert.assertTrue(typeof jsonArray[0] === 'object');
    Assert.assertEquals("hello", jsonArray[0].foo);
    Assert.assertTrue(typeof jsonArray[1] === 'object');
    Assert.assertEquals("bye", jsonArray[1].bar);
    count++;
  });
  Assert.assertEquals(2, count, 0);
}

function testNullJsonHandlerAsyncResultParams() {

  var count = 0;
  obj.methodWithHandlerAsyncResultNullJsonObject(function(jsonObject, err) {
      Assert.assertNull(err);
      Assert.assertTrue(typeof jsonObject === 'object')
      Assert.assertNull(jsonObject);
      count++;
  });
  obj.methodWithHandlerAsyncResultNullJsonArray(function(jsonArray, err) {
      Assert.assertNull(err);
      Assert.assertTrue(typeof jsonArray === 'object')
      Assert.assertNull(jsonArray);
      count++;
  });
  Assert.assertEquals(2, count, 0);
}

function testEnumParam() {
  var ret = obj.methodWithEnumParam("sausages", "TIM");
  Assert.assertEquals("sausagesTIM", ret);
}

function testEnumReturn() {
  var ret = obj.methodWithEnumReturn("JULIEN");
  Assert.assertEquals("JULIEN", ret);
}

function testThrowableReturn() {
  var ret = obj.methodWithThrowableReturn("bogies");
  Assert.assertEquals("bogies", ret.getMessage());
}

function testThrowableParam(undefined) {
  try {
    undefined.does_not_exist();
    Assert.fail();
  } catch (e) {
    var msg = obj.methodWithThrowableParam(e);
    Assert.assertEquals('TypeError: Cannot read property "does_not_exist" from undefined', msg);
  }
}

function testSuperMethodOverloadedBySubclass() {
  Assert.assertEquals(0, obj.superMethodOverloadedBySubclass(), 0);
  Assert.assertEquals(1, obj.superMethodOverloadedBySubclass("sstring_arg"), 0);
}

function testCustomModule() {
  var my = MyInterface.create();
  var testInterface = my.method();
  testInterface.methodWithBasicParams(123, 12345, 1234567, 1265615234, 12.345, 12.34566, true, 'X', 'foobar');
  var sub = my.sub();
  Assert.assertEquals("olleh", sub.reverse("hello"));
}

function testNullableByte() {
  testNullable('Byte', 67, function(val) { Assert.assertEquals(67, val, 0) });
}

function testNullableShort() {
  testNullable('Short', 1024, function(val) { Assert.assertEquals(1024, val, 0) });
}

function testNullableInteger() {
  testNullable('Integer', 1234567, function(val) { Assert.assertEquals(1234567, val, 0) });
}

function testNullableLong() {
  testNullable('Long', 9876543210, function(val) { Assert.assertEquals(9876543210, val, 0) });
}

function testNullableFloat() {
  testNullable('Float', 3.14, function(val) { Assert.assertEquals(new Packages.java.lang.Float(3.14), val, new Packages.java.lang.Float(0.0)) });
}

function testNullableDouble() {
  testNullable('Double', 3.1415926, function(val) { Assert.assertEquals(3.1415926, val, 0.0) });
}

function testNullableBoolean() {
  testNullable('Boolean', true, function(val) { Assert.assertEquals(true, val) });
}

function testNullableString() {
  testNullable('String', 'the_string_value', function(val) { Assert.assertEquals('the_string_value', val) });
}

function testNullableChar() {
  testNullable('Char', 'f', function(val) { Assert.assertEquals('f', "" + val) });
}

function testNullableJsonObject() {
  testNullable('JsonObject', {"foo":"wibble","bar":3}, function(json) {
    Assert.assertEquals("wibble", json["foo"]);
    Assert.assertEquals(3, json["bar"], 0);
  });
}

function testNullableJsonArray() {
  testNullable('JsonArray', ["one","two","three"], function(array) {
    Assert.assertEquals("one", array[0]);
    Assert.assertEquals("two", array[1]);
    Assert.assertEquals("three", array[2]);
  });
}

function testNullableApi() {
  refed_obj.setString('lovely_dae');
  testNullable('Api', refed_obj, function(api_obj) {
    Assert.assertEquals('lovely_dae', api_obj.getString());
  });
}

function testNullableDataObject() {
  testNullable('DataObject', {"foo":"foo_value","bar":12345,"wibble":3.5}, function(data_obj) {
    Assert.assertEquals('foo_value', data_obj.foo);
    Assert.assertEquals(12345, data_obj.bar, 0);
    Assert.assertEquals(3.5, data_obj.wibble, 0);
  });
}

function testNullableEnum() {
  testNullable('Enum', "TIM", function(enumVal) { Assert.assertEquals("TIM", enumVal); });
}

function testNullableGenEnum() {
  testNullable('GenEnum', "MIKE", function(enumVal) { Assert.assertEquals("MIKE", enumVal); });
}

function testNullable(type, expected, check) {
  var failed = nullableTCK['methodWithNonNullable' + type + 'Param'](expected);
  try {
    failed = nullableTCK['methodWithNonNullable' + type + 'Param'](null);
  } catch (e) {
  }
  Assert.assertFalse(failed);
  nullableTCK['methodWithNullable' + type + 'Param'](true, null);
  nullableTCK['methodWithNullable' + type + 'Param'](false, expected);
  var count = 0;
  nullableTCK['methodWithNullable' + type + 'Handler'](false, function(s) {
    Assert.assertNull(s);
    count++;
  });
  nullableTCK['methodWithNullable' + type + 'Handler'](true, function(s) {
    check(s);
    count++;
  });
  nullableTCK['methodWithNullable' + type + 'HandlerAsyncResult'](false, function(s, err) {
    Assert.assertNull(s);
    Assert.assertNull(err);
    count++;
  });
  nullableTCK['methodWithNullable' + type + 'HandlerAsyncResult'](true, function(s, err) {
    check(s);
    Assert.assertNull(err);
    count++;
  });
  Assert.assertEquals(4, count, 0);
  Assert.assertNull(nullableTCK['methodWithNullable' + type + 'Return'](false));
  check(nullableTCK['methodWithNullable' + type + 'Return'](true));
}

function testNullableTypeVariable() {
  nullableTCK.methodWithNullableTypeVariableParam(false, "whatever");
  nullableTCK.methodWithNullableTypeVariableParam(true, null);
  var count = 0;
  nullableTCK.methodWithNullableTypeVariableHandler(true, "wibble", function(res) {
    Assert.assertEquals("wibble", res);
    count++;
  });
  nullableTCK.methodWithNullableTypeVariableHandler(false, "wibble", function(res) {
    Assert.assertEquals(null, res);
    count++;
  });
  nullableTCK.methodWithNullableTypeVariableHandlerAsyncResult(true, "sausage", function(res, err) {
    Assert.assertEquals("sausage", res);
    Assert.assertNull(err);
    count++;
  });
  nullableTCK.methodWithNullableTypeVariableHandlerAsyncResult(false, "sausage", function(res, err) {
    Assert.assertEquals(null, res);
    Assert.assertNull(err);
    count++;
  });
  Assert.assertEquals(4, count, 0);
  Assert.assertEquals("fizz1", nullableTCK.methodWithNullableTypeVariableReturn(true, "fizz1"));
  Assert.assertEquals(null, nullableTCK.methodWithNullableTypeVariableReturn(false, "fizz2"));
}

function testNullableObject() {
  nullableTCK.methodWithNullableObjectParam(false, "object_param");
  nullableTCK.methodWithNullableObjectParam(true, null);
}

function testNullableListByte() {
  testNullableList('Byte', [12,24,-12], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testNullableListShort() {
  testNullableList('Short', [520,1040,-520], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testNullableListInteger() {
  testNullableList('Integer', [12345,54321,-12345], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testNullableListLong() {
  testNullableList('Long', [123456789,987654321,-123456789], function(expected, actual) { Assert.assertEquals(new Packages.java.lang.Double(expected), new Packages.java.lang.Double(actual), 0.0); });
}

function testNullableListFloat() {
  // todo : make this pass
  // testNullableList('Float', [1.1,2.2,3.3], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testNullableListDouble() {
  testNullableList('Double', [1.11,2.22,3.33], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testNullableListBoolean() {
  testNullableList('Boolean', [true,false,true], Assert.assertEquals);
}

function testNullableListString() {
  testNullableList('String', ['first','second','third'], Assert.assertEquals);
}

function testNullableListChar() {
  // todo : make this pass
  // testNullableList('Char', ['x','y','z'], Assert.assertEquals);
}

function testNullableListJsonObject() {
  testNullableList('JsonObject', [{"foo":"bar"},{"juu":3}], function(expected, actual) { Assert.assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testNullableListJsonArray() {
  testNullableList('JsonArray', [["foo","bar"],["juu"]], function(expected, actual) { Assert.assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testNullableListApi() {
  refed_obj.setString('refed_is_here');
  testNullableList('Api', [refed_obj], function(expected, actual) {});
}

function testNullableListDataObject() {
  testNullableList('DataObject', [{"foo":"foo_value","bar": 12345,"wibble":5.6}], function(expected, actual) { Assert.assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testNullableListEnum() {
  testNullableList('Enum', ["TIM","JULIEN"], Assert.assertEquals);
}

function testNullableListGenEnum() {
  testNullableList('GenEnum', ["BOB","LELAND"], Assert.assertEquals);
}

function testNullableList(type, expectedList, assertEquals) {
  var failed = nullableTCK['methodWithNonNullableList' + type + 'Param']([]);
  try {
    failed = nullableTCK['methodWithNonNullableList' + type + 'Param'](null);
  } catch (e) {
  }
  Assert.assertFalse(failed);
  var checkList = function(list) {
    for (var index = 0;index < expectedList.length;index++) {
      assertEquals(expectedList[index], list[index]);
    }
  };
  nullableTCK['methodWithNullableList' + type + 'Param'](false, expectedList);
  nullableTCK['methodWithNullableList' + type + 'Param'](true, null);
  var count = 0;
  nullableTCK['methodWithNullableList' + type + 'Handler'](false, function(res) {
    Assert.assertNull(res);
    count++;
  });
  nullableTCK['methodWithNullableList' + type + 'Handler'](true, function(res) {
    checkList(res);
    count++;
  });
  nullableTCK['methodWithNullableList' + type + 'HandlerAsyncResult'](false, function(res, err) {
    Assert.assertNull(res);
    Assert.assertNull(err);
    count++;
  });
  nullableTCK['methodWithNullableList' + type + 'HandlerAsyncResult'](true, function(res, err) {
    checkList(res);
    Assert.assertNull(err);
    count++;
  });
  Assert.assertEquals(4, count, 0);
  Assert.assertNull(nullableTCK['methodWithNullableList' + type + 'Return'](false));
  checkList(nullableTCK['methodWithNullableList' + type + 'Return'](true));
}

function testNullableSetByte() {
  testNullableSet('Byte', [12,24,-12], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testNullableSetShort() {
  testNullableSet('Short', [520,1040,-520], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testNullableSetInteger() {
  testNullableSet('Integer', [12345,54321,-12345], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testNullableSetLong() {
  testNullableSet('Long', [123456789,987654321,-123456789], function(expected, actual) { Assert.assertEquals(new Packages.java.lang.Double(expected), new Packages.java.lang.Double(actual), 0.0); });
}

function testNullableSetFloat() {
  // todo : make this pass
  // testNullableSet('Float', [1.1,2.2,3.3], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testNullableSetDouble() {
  testNullableSet('Double', [1.11,2.22,3.33], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testNullableSetBoolean() {
  testNullableSet('Boolean', [true,false], Assert.assertEquals);
}

function testNullableSetString() {
  testNullableSet('String', ['first','second','third'], Assert.assertEquals);
}

function testNullableSetChar() {
  // todo : make this pass
  // testNullableSet('Char', ['x','y','z'], Assert.assertEquals);
}

function testNullableSetJsonObject() {
  testNullableList('JsonObject', [{"foo":"bar"},{"juu":3}], function(expected, actual) { Assert.assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testNullableSetJsonArray() {
  testNullableSet('JsonArray', [["foo","bar"],["juu"]], function(expected, actual) { Assert.assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testNullableSetApi() {
  refed_obj.setString('refed_is_here');
  testNullableSet('Api', [refed_obj], function(expected, actual) {});
}

function testNullableSetDataObject() {
  testNullableSet('DataObject', [{"foo":"foo_value","bar": 12345,"wibble":5.6}], function(expected, actual) { Assert.assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testNullableSetEnum() {
  testNullableSet('Enum', ["TIM","JULIEN"], Assert.assertEquals);
}

function testNullableSetGenEnum() {
  testNullableSet('GenEnum', ["BOB","LELAND"], Assert.assertEquals);
}

function testNullableSet(type, expectedSet, assertEquals) {
  var failed = nullableTCK['methodWithNonNullableSet' + type + 'Param']([]);
  try {
    failed = nullableTCK['methodWithNonNullableSet' + type + 'Param'](null);
  } catch (e) {
  }
  Assert.assertFalse(failed);
  var checkSet = function(s) {
    for (var index = 0;index < expectedSet.length;index++) {
      assertEquals(expectedSet[index], s[index]);
    }
  };
  nullableTCK['methodWithNullableSet' + type + 'Param'](false, expectedSet);
  nullableTCK['methodWithNullableSet' + type + 'Param'](true, null);
  var count = 0;
  nullableTCK['methodWithNullableSet' + type + 'Handler'](false, function(res) {
    Assert.assertNull(res);
    count++;
  });
  nullableTCK['methodWithNullableSet' + type + 'Handler'](true, function(res) {
    checkSet(res);
    count++;
  });
  nullableTCK['methodWithNullableSet' + type + 'HandlerAsyncResult'](false, function(res, err) {
    Assert.assertNull(res);
    Assert.assertNull(err);
    count++;
  });
  nullableTCK['methodWithNullableSet' + type + 'HandlerAsyncResult'](true, function(res, err) {
    checkSet(res);
    Assert.assertNull(err);
    count++;
  });
  Assert.assertEquals(4, count, 0);
  Assert.assertNull(nullableTCK['methodWithNullableSet' + type + 'Return'](false));
  checkSet(nullableTCK['methodWithNullableSet' + type + 'Return'](true));
}

function testNullableMapByte() {
  testNullableMap('Byte', [1,2,3], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testNullableMapShort() {
  testNullableMap('Short', [1,2,3], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testNullableMapInteger() {
  testNullableMap('Integer', [1,2,3], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testNullableMapLong() {
  testNullableMap('Long', [1,2,3], function(expected, actual) { Assert.assertEquals(new Packages.java.lang.Double(expected), new Packages.java.lang.Double(actual), 0.0); });
}

function testNullableMapFloat() {
  // todo : make this pass
  // testNullableList('Float', [1.1,2.2,3.3], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testNullableMapDouble() {
  testNullableMap('Double', [1.11,2.22,3.33], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testNullableMapBoolean() {
  testNullableMap('Boolean', [true,false,true], Assert.assertEquals);
}

function testNullableMapString() {
  testNullableMap('String', ['first','second','third'], Assert.assertEquals);
}

function testNullableMapChar() {
  // todo : make this pass
  // testNullableList('Char', ['x','y','z'], Assert.assertEquals);
}

function testNullableMapJsonObject() {
  testNullableMap('JsonObject', [{"foo":"bar"},{"juu":3}], function(expected, actual) { Assert.assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testNullableMapJsonArray() {
  testNullableMap('JsonArray', [["foo","bar"],["juu"]], function(expected, actual) { Assert.assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testNullableMap(type, expectedMap, assertEquals) {
  testNullableMapIn(type, expectedMap);
  testNullableMapOut(type, expectedMap, assertEquals);
}

function testNullableMapIn(type, expectedMap) {
  var failed = nullableTCK['methodWithNonNullableMap' + type + 'Param']({});
  try {
    failed = nullableTCK['methodWithNonNullableMap' + type + 'Param'](null);
  } catch (e) {
  }
  Assert.assertFalse(failed);
  var map = {};
  for (var index = 0;index < expectedMap.length;index++) {
    var key = "" + (index + 1);
    map[key] = expectedMap[index];
  }
  nullableTCK['methodWithNullableMap' + type + 'Param'](false, map);
  nullableTCK['methodWithNullableMap' + type + 'Param'](true, null);
}

function testNullableMapOut(type, expectedMap, assertEquals) {
  var checkMap = function(s) {
    for (var index = 0;index < expectedMap.length;index++) {
      var key = "" + (index + 1);
      assertEquals(expectedMap[index], s[key]);
    }
  };
  var count = 0;
  nullableTCK['methodWithNullableMap' + type + 'Handler'](false, function(res) {
    Assert.assertNull(res);
    count++;
  });
  nullableTCK['methodWithNullableMap' + type + 'Handler'](true, function(res) {
    checkMap(res);
    count++;
  });
  nullableTCK['methodWithNullableMap' + type + 'HandlerAsyncResult'](false, function(res, err) {
    Assert.assertNull(res);
    Assert.assertNull(err);
    count++;
  });
  nullableTCK['methodWithNullableMap' + type + 'HandlerAsyncResult'](true, function(res, err) {
    checkMap(res);
    Assert.assertNull(err);
    count++;
  });
  Assert.assertEquals(4, count, 0);
  Assert.assertNull(nullableTCK['methodWithNullableMap' + type + 'Return'](false));
  checkMap(nullableTCK['methodWithNullableMap' + type + 'Return'](true));
}

function testListNullableByte() {
  testListNullable('Byte', [12,null,24], function(list) {
    Assert.assertEquals(3, list.length, 0);
    Assert.assertEquals(12, list[0], 0);
    Assert.assertEquals(null, list[1]);
    Assert.assertEquals(24, list[2], 0);
  });
}

function testListNullableShort() {
  testListNullable('Short', [520,null,1040], function(list) {
    Assert.assertEquals(3, list.length, 0);
    Assert.assertEquals(520, list[0], 0);
    Assert.assertEquals(null, list[1]);
    Assert.assertEquals(1040, list[2], 0);
  });
}

function testListNullableInteger() {
  testListNullable('Integer', [12345,null,54321], function(list) {
    Assert.assertEquals(3, list.length, 0);
    Assert.assertEquals(12345, list[0], 0);
    Assert.assertEquals(null, list[1]);
    Assert.assertEquals(54321, list[2], 0);
  });
}

function testListNullableLong() {
  testListNullable('Long', [123456789,null,987654321], function(list) {
    Assert.assertEquals(3, list.length, 0);
    Assert.assertEquals(Number(123456789), Number(list[0]), Number(0));
    Assert.assertEquals(null, list[1]);
    Assert.assertEquals(Number(987654321), Number(list[2]), Number(0));
  });
}

function testListNullableFloat() {
  // Todo make this pass, currently nashorn transforms to a List<Double> which can lead to class cast exceptions
/*
  testListNullable('Float', [1.1,null,3.3], function(list) {
    Assert.assertEquals(3, list.length, 0);
    Assert.assertEquals(1.1, list[0], 0);
    Assert.assertEquals(null, list[1]);
    Assert.assertEquals(3.3, list[2],0);
  });
*/
}

function testListNullableDouble() {
  testListNullable('Double', [1.11,null,3.33], function(list) {
    Assert.assertEquals(3, list.length, 0);
    Assert.assertEquals(1.11, list[0], 0);
    Assert.assertEquals(null, list[1]);
    Assert.assertEquals(3.33, list[2],0);
  });
}

function testListNullableBoolean() {
  testListNullable('Boolean', [true,null,false], function(list) {
    Assert.assertEquals(3, list.length, 0);
    Assert.assertEquals(true, list[0]);
    Assert.assertEquals(null, list[1]);
    Assert.assertEquals(false, list[2]);
  });
}

function testListNullableString() {
  testListNullable('String', ["first",null,"third"], function(list) {
    Assert.assertEquals(3, list.length, 0);
    Assert.assertEquals("first", list[0]);
    Assert.assertEquals(null, list[1]);
    Assert.assertEquals("third", list[2]);
  });
}

function testListNullableChar() {
  testListNullable('Char', ["F",null,"R"], function(list) {
    Assert.assertEquals(3, list.length, 0);
    Assert.assertEquals("F", list[0]);
    Assert.assertEquals(null, list[1]);
    Assert.assertEquals("R", list[2]);
  });
}

function testListNullableJsonObject() {
  testListNullable('JsonObject', [{"foo":"bar"},null,{"juu":3}], function(list) {
    Assert.assertEquals("bar", list[0].foo);
    Assert.assertEquals(null, list[1]);
    Assert.assertEquals(3, list[2].juu, 0);
  });
}

function testListNullableJsonArray() {
  testListNullable('JsonArray', [["foo","bar"],null,["juu"]], function(list) {
    Assert.assertEquals("foo", list[0][0]);
    Assert.assertEquals("bar", list[0][1]);
    Assert.assertEquals(null, list[1]);
    Assert.assertEquals("juu", list[2][0]);
  });
}

function testListNullableApi() {
  refed_obj.setString('first');
  refed_obj2.setString('third');
  testListNullable('Api', [refed_obj,null,refed_obj2], function(list) {
    Assert.assertEquals("first", list[0].getString());
    Assert.assertNull(list[1]);
    Assert.assertEquals("third", list[2].getString());
  });
}

function testListNullableDataObject() {
  testListNullable('DataObject', [{"foo":"first","bar":1,"wibble":1.1},null,{"foo":"third","bar":3,"wibble":3.3}], function(list) {
    Assert.assertEquals("first", list[0].foo);
    Assert.assertEquals(1, list[0].bar, 0);
    Assert.assertEquals(1.1, list[0].wibble, 0);
    Assert.assertNull(list[1]);
    Assert.assertEquals("third", list[2].foo);
    Assert.assertEquals(3, list[2].bar, 0);
    Assert.assertEquals(3.3, list[2].wibble, 0);
  });
}

function testListNullableEnum() {
  testListNullable('Enum', ['TIM',null,'JULIEN'], function(list) {
    Assert.assertEquals("TIM", list[0]);
    Assert.assertNull(list[1]);
    Assert.assertEquals("JULIEN", list[2]);
  });
}

function testListNullableGenEnum() {
  testListNullable('GenEnum', ['BOB',null,'LELAND'], function(list) {
    Assert.assertEquals("BOB", list[0]);
    Assert.assertNull(list[1]);
    Assert.assertEquals("LELAND", list[2]);
  });
}

function testListNullable(type, expectedList, checkList) {
  nullableTCK['methodWithListNullable' + type + 'Param'](expectedList);
  var count = 0;
  nullableTCK['methodWithListNullable' + type + 'Handler'](function(list) {
    checkList(list);
    count++;
  });
  nullableTCK['methodWithListNullable' + type + 'HandlerAsyncResult'](function(list, err) {
    checkList(list);
    Assert.assertNull(err);
    count++;
  });
  checkList(nullableTCK['methodWithListNullable' + type + 'Return']());
  Assert.assertEquals(2, count, 0);
}

function testSetNullableByte() {
  testSetNullable('Byte', [12,null,24], function(s) {
    Assert.assertEquals(3, s.length, 0);
    Assert.assertEquals(12, s[0], 0);
    Assert.assertEquals(null, s[1]);
    Assert.assertEquals(24, s[2], 0);
  });
}

function testSetNullableShort() {
  testSetNullable('Short', [520,null,1040], function(s) {
    Assert.assertEquals(3, s.length, 0);
    Assert.assertEquals(520, s[0], 0);
    Assert.assertEquals(null, s[1]);
    Assert.assertEquals(1040, s[2], 0);
  });
}

function testSetNullableInteger() {
  testSetNullable('Integer', [12345,null,54321], function(s) {
    Assert.assertEquals(3, s.length, 0);
    Assert.assertEquals(12345, s[0], 0);
    Assert.assertEquals(null, s[1]);
    Assert.assertEquals(54321, s[2], 0);
  });
}

function testSetNullableLong() {
  testSetNullable('Long', [123456789,null,987654321], function(s) {
    Assert.assertEquals(3, s.length, 0);
    Assert.assertEquals(Number(123456789), Number(s[0]), Number(0));
    Assert.assertEquals(null, s[1]);
    Assert.assertEquals(Number(987654321), Number(s[2]), Number(0));
  });
}

function testSetNullableFloat() {
  // Todo make this pass, currently nashorn transforms to a Set<Double> which can lead to class cast exceptions
  /*
   testSetNullable('Float', [1.1,null,3.3], function(s) {
   Assert.assertEquals(3, s.length, 0);
   Assert.assertEquals(1.1, s[0], 0);
   Assert.assertEquals(null, s[1]);
   Assert.assertEquals(3.3, s[2],0);
   });
   */
}

function testSetNullableDouble() {
  testSetNullable('Double', [1.11,null,3.33], function(s) {
    Assert.assertEquals(3, s.length, 0);
    Assert.assertEquals(1.11, s[0], 0);
    Assert.assertEquals(null, s[1]);
    Assert.assertEquals(3.33, s[2],0);
  });
}

function testSetNullableBoolean() {
  testSetNullable('Boolean', [true,null,false], function(s) {
    Assert.assertEquals(3, s.length, 0);
    Assert.assertEquals(true, s[0]);
    Assert.assertEquals(null, s[1]);
    Assert.assertEquals(false, s[2]);
  });
}

function testSetNullableString() {
  testSetNullable('String', ["first",null,"third"], function(s) {
    Assert.assertEquals(3, s.length, 0);
    Assert.assertEquals("first", s[0]);
    Assert.assertEquals(null, s[1]);
    Assert.assertEquals("third", s[2]);
  });
}

function testSetNullableChar() {
  testSetNullable('Char', ["F",null,"R"], function(s) {
    Assert.assertEquals(3, s.length, 0);
    Assert.assertEquals("F", s[0]);
    Assert.assertEquals(null, s[1]);
    Assert.assertEquals("R", s[2]);
  });
}

function testSetNullableJsonObject() {
  testSetNullable('JsonObject', [{"foo":"bar"},null,{"juu":3}], function(s) {
    Assert.assertEquals("bar", s[0].foo);
    Assert.assertEquals(null, s[1]);
    Assert.assertEquals(3, s[2].juu, 0);
  });
}

function testSetNullableJsonArray() {
  testSetNullable('JsonArray', [["foo","bar"],null,["juu"]], function(s) {
    Assert.assertEquals("foo", s[0][0]);
    Assert.assertEquals("bar", s[0][1]);
    Assert.assertEquals(null, s[1]);
    Assert.assertEquals("juu", s[2][0]);
  });
}

function testSetNullableApi() {
  refed_obj.setString('first');
  refed_obj2.setString('third');
  testSetNullable('Api', [refed_obj,null,refed_obj2], function(s) {
    Assert.assertEquals("first", s[0].getString());
    Assert.assertNull(s[1]);
    Assert.assertEquals("third", s[2].getString());
  });
}

function testSetNullableDataObject() {
  testSetNullable('DataObject', [{"foo":"first","bar":1,"wibble":1.1},null,{"foo":"third","bar":3,"wibble":3.3}], function(s) {
    Assert.assertEquals("first", s[0].foo);
    Assert.assertEquals(1, s[0].bar, 0);
    Assert.assertEquals(1.1, s[0].wibble, 0);
    Assert.assertNull(s[1]);
    Assert.assertEquals("third", s[2].foo);
    Assert.assertEquals(3, s[2].bar, 0);
    Assert.assertEquals(3.3, s[2].wibble, 0);
  });
}

function testSetNullableEnum() {
  testSetNullable('Enum', ['TIM',null,'JULIEN'], function(s) {
    Assert.assertEquals("TIM", s[0]);
    Assert.assertNull(s[1]);
    Assert.assertEquals("JULIEN", s[2]);
  });
}

function testSetNullableGenEnum() {
  testSetNullable('GenEnum', ['BOB',null,'LELAND'], function(s) {
    Assert.assertEquals("BOB", s[0]);
    Assert.assertNull(s[1]);
    Assert.assertEquals("LELAND", s[2]);
  });
}

function testSetNullable(type, expectedList, checkSet) {
  nullableTCK['methodWithSetNullable' + type + 'Param'](expectedList);
  var count = 0;
  nullableTCK['methodWithSetNullable' + type + 'Handler'](function(s) {
    checkSet(s);
    count++;
  });
  nullableTCK['methodWithSetNullable' + type + 'HandlerAsyncResult'](function(s, err) {
    checkSet(s);
    Assert.assertNull(err);
    count++;
  });
  checkSet(nullableTCK['methodWithSetNullable' + type + 'Return']());
  Assert.assertEquals(2, count, 0);
}

function testMapNullableByte() {
  testMapNullable('Byte', [12,null,24], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testMapNullableShort() {
  testMapNullable('Short', [520,null,1040], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testMapNullableInteger() {
  testMapNullable('Integer', [12345,null,54321], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testMapNullableLong() {
  testMapNullable('Long', [123456789,null,987654321], function(expected, actual) { Assert.assertEquals(new Packages.java.lang.Double(expected), new Packages.java.lang.Double(actual), 0.0); });
}

function testMapNullableFloat() {
  // todo : make this pass
  // testNullableList('Float', [1.1,2.2,3.3], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testMapNullableDouble() {
  testMapNullable('Double', [1.11,null,3.33], function(expected, actual) { Assert.assertEquals(expected, actual, 0); });
}

function testMapNullableBoolean() {
  testMapNullable('Boolean', [true,null,false], Assert.assertEquals);
}

function testMapNullableString() {
  testMapNullable('String', ['first',null,'third'], Assert.assertEquals);
}

function testMapNullableChar() {
  // todo : make this pass
  // testNullableList('Char', ['x','y','z'], Assert.assertEquals);
}

function testMapNullableJsonObject() {
  testMapNullable('JsonObject', [{"foo":"bar"},null,{"juu":3}], function(expected, actual) { Assert.assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testMapNullableJsonArray() {
  testMapNullable('JsonArray', [["foo","bar"],null,["juu"]], function(expected, actual) { Assert.assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testMapNullableApi() {
  refed_obj.setString('first');
  refed_obj2.setString('third');
  testMapNullableIn('Api', [refed_obj,null,refed_obj2], function(expected, actual) { Assert.assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testMapNullable(type, expectedMap, assertEquals) {
  testMapNullableIn(type, expectedMap);
  testMapNullableOut(type, expectedMap, assertEquals);
}

function testMapNullableIn(type, expectedMap) {
  var map = {};
  for (var index = 0;index < expectedMap.length;index++) {
    var key = "" + (index + 1);
    map[key] = expectedMap[index];
  }
  nullableTCK['methodWithMapNullable' + type + 'Param'](map);
}

function testMapNullableOut(type, expectedMap, assertEquals) {
  var checkMap = function(s) {
    for (var index = 0;index < expectedMap.length;index++) {
      var key = "" + (index + 1);
      var expectedValue = expectedMap[index];
      var actualValue = s[key];
      if (expectedValue != null) {
        assertEquals(expectedValue, actualValue);
      } else {
        Assert.assertNull(actualValue);
      }
    }
  };
  var count = 0;
  nullableTCK['methodWithMapNullable' + type + 'Handler'](function(res) {
    checkMap(res);
    count++;
  });
  nullableTCK['methodWithMapNullable' + type + 'HandlerAsyncResult'](function(res, err) {
    checkMap(res);
    Assert.assertNull(err);
    count++;
  });
  Assert.assertEquals(2, count, 0);
  checkMap(nullableTCK['methodWithMapNullable' + type + 'Return']());
}

function testNullableHandler() {
  var count = 0;
  nullableTCK.methodWithNullableHandler(true, null);
  nullableTCK.methodWithNullableHandler(false, function(res) {
    Assert.assertEquals("the_string_value", res);
    count++;
  });
  nullableTCK.methodWithNullableHandlerAsyncResult(true, null);
  nullableTCK.methodWithNullableHandlerAsyncResult(false, function(res, err) {
    Assert.assertEquals("the_string_value", res);
    Assert.assertNull(err);
    count++;
  });
  Assert.assertEquals(2, count, 0);
}

function testJsonOnlyConstructorDataObject() {
  var dataObject = { "foo" : "bar" };
  dataObjectTCK.methodWithOnlyJsonObjectConstructorDataObject(dataObject);
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();






