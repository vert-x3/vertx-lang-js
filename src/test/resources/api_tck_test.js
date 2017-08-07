var Assert = org.junit.Assert;

var TestInterface = require('testmodel-js/test_interface');
var RefedInterface1 = require('testmodel-js/refed_interface1');
var Factory = require('testmodel-js/factory');
var SubInterface = require('acme-js/sub_interface');
var MyInterface = require('acme-js/my_interface');

var obj = new TestInterface(new Packages.io.vertx.codegen.testmodel.TestInterfaceImpl());
var refed_obj = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());
var refed_obj2 = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());

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
  Assert.assertEquals(result, obj._jdel);
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
  Assert.assertEquals(result, obj._jdel);
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

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();






