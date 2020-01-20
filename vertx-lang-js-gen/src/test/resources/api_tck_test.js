var Assert = org.junit.Assert;

var TestInterface = require('testmodel-js/test_interface');
var RefedInterface1 = require('testmodel-js/refed_interface1');
var RefedInterface2 = require('testmodel-js/refed_interface2');
var Factory = require('testmodel-js/factory');
var SubInterface = require('acme-js/sub_interface');
var MyInterface = require('acme-js/my_interface');

var obj = new TestInterface(new Packages.io.vertx.codegen.testmodel.TestInterfaceImpl());
var refed_obj = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());
var refed_obj2 = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());
var refed2_obj = new RefedInterface2(new Packages.io.vertx.codegen.testmodel.RefedInterface2Impl());

var that = this;

var testUtils = require("test_utils");
var assertEquals = testUtils.assertEquals;

function testMethodWithBasicParams() {
  obj.methodWithBasicParams(123, 12345, 1234567, 1265615234, 12.345, 12.34566, true, 'X', 'foobar');
}

function testMethodWithBasicBoxedParams() {
  obj.methodWithBasicBoxedParams(123, 12345, 1234567, 1265615234, 12.345, 12.34566, true, 'X');
}

function testMethodWithHandlerBasicTypes() {
  var count = 0;
  obj.methodWithHandlerBasicTypes(function(b) {
    assertEquals("number", typeof b);
    assertEquals(123, b);
    count++;
  }, function(s) {
    assertEquals("number", typeof s);
    assertEquals(12345, s);
    count++;
  }, function (i) {
    assertEquals("number", typeof i);
    assertEquals(1234567, i);
    count++;
  }, function (l) {
    assertEquals("number", typeof l);
    assertEquals(1265615234, l);
    count++;
  }, function (f) {
    assertEquals("number", typeof f);
    assertEquals(12.345, f);
    count++;
  }, function(d) {
    assertEquals("number", typeof d);
    assertEquals(12.34566, d);
    count++;
  }, function (bool) {
    assertEquals("boolean", typeof bool);
    Assert.assertTrue(bool);
    count++;
  }, function (char) {
    // TODO - it seems that Nashorn passes Java chars as object and doesn't convert them to String automatically
    assertEquals("object", typeof char); // !!
    if (typeof char === "object") {
      console.log("Nashorn is returning char from Java API as object into JS, not string!");
    }
    // hence we do '' + char to convert to String
    assertEquals('X', '' + char);
    count++;
  }, function (str) {
    assertEquals("string", typeof str);
    assertEquals("quux!", str);
    count++;
  });
  assertEquals(9, count);
}

function testMethodWithHandlerAsyncResultBasicTypes() {
  var count = 0;
  obj.methodWithHandlerAsyncResultByte(false, function(b, err) {
    assertEquals("number", typeof b);
    assertEquals(123, b);
    Assert.assertNull(err);
    count++;
  });
  obj.methodWithHandlerAsyncResultShort(false, function(s, err) {
    assertEquals("number", typeof s);
    assertEquals(12345, s);
    Assert.assertNull(err);
    count++;
  });
  obj.methodWithHandlerAsyncResultInteger(false, function (i, err) {
    assertEquals("number", typeof i);
    assertEquals(1234567, i);
    Assert.assertNull(err);
    count++;
  });
  obj.methodWithHandlerAsyncResultLong(false, function (l, err) {
    assertEquals("number", typeof l);
    assertEquals(1265615234, l);
    Assert.assertNull(err);
    count++;
  });
  obj.methodWithHandlerAsyncResultFloat(false, function (f, err) {
    assertEquals("number", typeof f);
    assertEquals(12.345, f);
    Assert.assertNull(err);
    count++;
  });
  obj.methodWithHandlerAsyncResultDouble(false, function(d, err) {
    assertEquals("number", typeof d);
    assertEquals(12.34566, d);
    Assert.assertNull(err);
    count++;
  });
  obj.methodWithHandlerAsyncResultBoolean(false, function (bool, err) {
    assertEquals("boolean", typeof bool);
    Assert.assertTrue(bool);
    Assert.assertNull(err);
    count++;
  });
  obj.methodWithHandlerAsyncResultCharacter(false, function (char, err) {
    // TODO - it seems that Nashorn passes Java chars as object and doesn't convert them to String automatically
    assertEquals("object", typeof char); // !!
    if (typeof char === "object") {
      console.log("Nashorn is returning char from Java API as object into JS, not string!");
    }
    // hence we do '' + char to convert to String
    assertEquals('X', '' + char);
    Assert.assertNull(err);
    count++;
  });
  obj.methodWithHandlerAsyncResultString(false, function (str, err) {
    assertEquals("string", typeof str);
    assertEquals("quux!", str);
    Assert.assertNull(err);
    count++;
  });
  assertEquals(9, count);
}

function testMethodWithHandlerAsyncResultBasicTypesFails() {
  var count = 0;
  obj.methodWithHandlerAsyncResultByte(true, function(b, err) {
    Assert.assertNull(b);
    Assert.assertNotNull(err);
    assertEquals("foobar!", err.getMessage());
     count++;
  });
  obj.methodWithHandlerAsyncResultShort(true, function(s, err) {
    Assert.assertNull(s);
    Assert.assertNotNull(err);
    assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultInteger(true, function (i, err) {
    Assert.assertNull(i);
    Assert.assertNotNull(err);
    assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultLong(true, function (l, err) {
    Assert.assertNull(l);
    Assert.assertNotNull(err);
    assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultFloat(true, function (f, err) {
    Assert.assertNull(f);
    Assert.assertNotNull(err);
    assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultDouble(true, function(d, err) {
    Assert.assertNull(d);
    Assert.assertNotNull(err);
    assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultBoolean(true, function (bool, err) {
    Assert.assertNull(bool);
    Assert.assertNotNull(err);
    assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultCharacter(true, function (char, err) {
    Assert.assertNull(char);
    Assert.assertNotNull(err);
    assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultString(true, function (str, err) {
    Assert.assertNull(str);
    Assert.assertNotNull(err);
    assertEquals("foobar!", err.getMessage());
    count++;
  });
  assertEquals(9, count);
}

function testMethodWithUserTypes() {
  refed_obj.setString("aardvarks");
  obj.methodWithUserTypes(refed_obj);
}

function testMethodWithOverloadedUserTypes() {
  assertEquals("refed1", obj.methodWithOverloadedUserTypes(refed_obj));
  assertEquals("refed2", obj.methodWithOverloadedUserTypes(refed2_obj));
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
    assertEquals("foo", option.foo);
    assertEquals(123, option.bar);
    assertEquals(0.0, option.wibble);
    count++;
  });
  assertEquals(1, count);
}

function testMethodWithHandlerAsyncResultDataObject() {
  var count = 0;

  obj.methodWithHandlerAsyncResultDataObject(false, function(option, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof option === 'object');
    assertEquals("foo", option.foo);
    assertEquals(123, option.bar);
    assertEquals(0.0, option.wibble);
    count++;
  });
  assertEquals(1, count);
}

function testMethodWithHandlerAsyncResultDataObjectFails() {
  var count = 0;
  obj.methodWithHandlerAsyncResultDataObject(true, function(option, err) {
    Assert.assertNull(option);
    Assert.assertNotNull(err);
    assertEquals("foobar!", err.getMessage());
    count++;
  });
  assertEquals(1, count);
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
  assertEquals(result, "the-result");
  handler(obj);
  assertEquals(result, obj._jdel);
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
  assertEquals(result, "the-result");
  succeedingHandler(null, "the-error");
  assertEquals(result.getMessage(), "the-error");
  succeedingHandler(obj);
  assertEquals(result, obj._jdel);
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
    assertEquals("echidnas", refedObj.getString());
    count++;
  });
  assertEquals(1, count);
}

function testMethodWithHandlerAsyncResultUserTypes() {
  var count = 0;
  obj.methodWithHandlerAsyncResultUserTypes(function(refedObj, err) {
    Assert.assertNull(err);
    assertEquals("cheetahs", refedObj.getString());
    count++;
  });
  assertEquals(1, count);
}

function testMethodWithConcreteHandlerUserTypeSubtype() {
  var count = 0;
  obj.methodWithConcreteHandlerUserTypeSubtype(Factory.createConcreteHandlerUserType(function(refedObj) {
    assertEquals("echidnas", refedObj.getString());
    count++;
  }));
  assertEquals(1, count);
}

function testMethodWithAbstractHandlerUserTypeSubtype() {
  var count = 0;
  obj.methodWithAbstractHandlerUserTypeSubtype(Factory.createAbstractHandlerUserType(function(refedObj) {
    assertEquals("echidnas", refedObj.getString());
    count++;
  }));
  assertEquals(1, count);
}

function testMethodWithConcreteHandlerUserTypeSubtypeExtension() {
  var count = 0;
  obj.methodWithConcreteHandlerUserTypeSubtypeExtension(Factory.createConcreteHandlerUserTypeExtension(function(refedObj) {
    assertEquals("echidnas", refedObj.getString());
    count++;
  }));
  assertEquals(1, count);
}

function testMethodWithHandlerVoid() {
  var count = 0;
  obj.methodWithHandlerVoid(function() {
    count++;
  });
  assertEquals(1, count);
}

function testMethodWithHandlerAsyncResultVoid() {
  var count = 0;
  obj.methodWithHandlerAsyncResultVoid(false, function(v, err) {
    Assert.assertNull(err);
    count++;
  });
  assertEquals(1, count);
}

function testMethodWithHandlerAsyncResultVoidFails() {
  var count = 0;
  obj.methodWithHandlerAsyncResultVoid(true, function(v, err) {
    Assert.assertNotNull(err);
    assertEquals("foo!", err.getMessage());
    count++;
  });
  assertEquals(1, count);
}

function testMethodWithHandlerThrowable() {
  var count = 0;
  obj.methodWithHandlerThrowable(function(t) {
    Assert.assertNotNull(t);
    assertEquals("cheese!", t.getMessage());
    count++;
  });
  assertEquals(1, count);
}

function testMethodWithHandlerGenericUserType() {
  function runTest(value, assert) {
    var count = 0;
    obj.methodWithHandlerGenericUserType(value, function(refedObj) {
      assertEquals("[object Object]", refedObj.toString()); // Make sure we don't have a Java object
      assert(refedObj.getValue());
      count++;
    });
    assertEquals(1, count);
  }
  runTest("string_value", function(value) { assertEquals("string_value", value) });
  runTest({"key":"key_value"}, function(value) { assertEquals("key_value", value["key"]) });
  runTest(["foo","bar","juu"], function(value) { assertEquals(["foo","bar","juu"], value) });
}

function testMethodWithHandlerAsyncResultGenericUserType() {
  function runTest(value, assert) {
    var count = 0;
    obj.methodWithHandlerAsyncResultGenericUserType(value, function(refedObj, err) {
      Assert.assertNotNull(refedObj);
      Assert.assertNull(err);
      assertEquals("[object Object]", refedObj.toString()); // Make sure we don't have a Java object
      assert(refedObj.getValue());
      count++;
    });
    assertEquals(1, count);
  }
  runTest("string_value", function(value) { assertEquals("string_value", value) });
  runTest({"key":"key_value"}, function(value) { assertEquals("key_value", value["key"]) });
  runTest(["foo","bar","juu"], function(value) { assertEquals(["foo","bar","juu"], value) });
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
        assertEquals("foo", res);
        count++;
    });
    assertEquals(1, count);
    count = 0;
    obj.methodWithGenericHandler("Ref", function(res) {
        assertEquals("bar", res.getString());
        count++;
    });
    assertEquals(1, count);
    count = 0;
    obj.methodWithGenericHandler("JsonObject", function(res) {
        assertEquals("hello", res.foo);
        assertEquals(123, res.bar);
        count++;
    });
    assertEquals(1, count);
    count = 0;
    obj.methodWithGenericHandler("JsonArray", function(res) {
        assertEquals("foo", res[0]);
        assertEquals("bar", res[1]);
        assertEquals("wib", res[2]);
        count++;
    });
    assertEquals(1, count);
  count = 0;
  obj.methodWithGenericHandler("JsonObjectComplex", function(res) {
    Assert.assertTrue(typeof res === 'object');
    Assert.assertTrue(typeof res.outer === 'object');
    assertEquals("hello", res.outer.foo);
    Assert.assertTrue(res.bar instanceof Array);
    assertEquals("this", res.bar[0]);
    assertEquals("that", res.bar[1]);
    count++;
  });
  assertEquals(1, count);
}

function testMethodWithGenericHandlerAsyncResult() {
    var count = 0;
    obj.methodWithGenericHandlerAsyncResult("String", function (res, err) {
        Assert.assertNull(err);
        assertEquals("foo", res);
        count++;
    });
    assertEquals(1, count);
    count = 0;
    obj.methodWithGenericHandlerAsyncResult("Ref", function (res, err) {
        Assert.assertNull(err);
        assertEquals("bar", res.getString());
        count++;
    });
    assertEquals(1, count);
    count = 0;
    obj.methodWithGenericHandlerAsyncResult("JsonObject", function (res, err) {
        Assert.assertNull(err);
        assertEquals("hello", res.foo);
        assertEquals(123, res.bar);
        count++;
    });
    assertEquals(1, count);
    count = 0;
    obj.methodWithGenericHandlerAsyncResult("JsonObjectComplex", function (res, err) {
      Assert.assertNull(err);
      Assert.assertTrue(typeof res === 'object');
      Assert.assertTrue(typeof res.outer === 'object');
      assertEquals("hello", res.outer.foo);
      Assert.assertTrue(res.bar instanceof Array);
      assertEquals("this", res.bar[0]);
      assertEquals("that", res.bar[1]);
      count++;
    });
    assertEquals(1, count);
    count = 0;
    obj.methodWithGenericHandlerAsyncResult("JsonArray", function (res, err) {
        assertEquals("foo", res[0]);
        assertEquals("bar", res[1]);
        assertEquals("wib", res[2]);
        count++;
    });
    assertEquals(1, count);
}

function testBasicReturns() {
  var ret = obj.methodWithByteReturn();
  assertEquals(ret, 123);
  ret = obj.methodWithShortReturn();
  assertEquals(ret, 12345);
  ret = obj.methodWithIntReturn();
  assertEquals(ret, 12345464);
  ret = obj.methodWithLongReturn();
  assertEquals(65675123, ret);
  ret = obj.methodWithFloatReturn();
  assertEquals(1.23, ret);
  ret = obj.methodWithDoubleReturn();
  assertEquals(3.34535, ret);
  ret = obj.methodWithBooleanReturn();
  Assert.assertTrue(ret);
  ret = obj.methodWithCharReturn();
  assertEquals("Y", "" + ret);
  ret = obj.methodWithStringReturn();
  assertEquals("orangutan", ret);
}

function testVertxGenReturn() {
  var ret = obj.methodWithVertxGenReturn();
  assertEquals("chaffinch", ret.getString());
  Assert.assertTrue(ret._jdel);
}

function testVertxGenNullReturn() {
  var ret = obj.methodWithVertxGenNullReturn();
  Assert.assertNull(ret);
}

function testAbstractVertxGenReturn() {
  var ret = obj.methodWithAbstractVertxGenReturn();
  assertEquals("abstractchaffinch", ret.getString());
  Assert.assertTrue(ret._jdel);
}

function testDataObjectReturn() {
  var ret = obj.methodWithDataObjectReturn();
  Assert.assertTrue(typeof ret === 'object');
  assertEquals("foo", ret.foo);
  assertEquals(123, ret.bar);
  assertEquals(0.0, ret.wibble);
}

function testDataObjectNullReturn() {
  var ret = obj.methodWithDataObjectNullReturn();
  Assert.assertNull(ret);
}

function testOverloadedMethods() {
  refed_obj.setString("dog");
  var ret = obj.overloadedMethod("cat", refed_obj);
  assertEquals("meth1", ret);
  ret = obj.overloadedMethod("cat", refed_obj, 12345, function(animal) {
    assertEquals("giraffe", animal);
    called = true;
  });
  assertEquals("meth2", ret);
  Assert.assertTrue(called);
  called = false;
  ret = obj.overloadedMethod("cat", function(animal) {
    assertEquals("giraffe", animal);
    called = true;
  });
  assertEquals("meth3", ret);
  Assert.assertTrue(called);
  called = false;
  ret = obj.overloadedMethod("cat", refed_obj, function(animal) {
    assertEquals("giraffe", animal);
    called = true;
  });
  assertEquals("meth4", ret);
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
  assertEquals("hello", ret.foo);
  assertEquals(123, ret.bar);

  ret = obj.methodWithGenericReturn("JsonArray");
  Assert.assertTrue(typeof ret === 'object');
  Assert.assertTrue(ret instanceof Array)
  assertEquals("foo", ret[0]);
  assertEquals("bar", ret[1]);
  assertEquals("wib", ret[2]);
}

function testFluentMethod() {
  var ret = obj.fluentMethod("bar");
  ret.fluentMethod("bar");
  Assert.assertTrue(obj === ret);
}

function testStaticFactoryMethod() {
  var ret = TestInterface.staticFactoryMethod("bar");
  Assert.assertTrue(typeof ret === 'object');
  assertEquals("bar", ret.getString());
}

function testMethodWithCachedReturn() {
  var ret = obj.methodWithCachedReturn("bar");
  Assert.assertTrue(typeof ret === 'object');
  assertEquals("bar", ret.getString());
  var ret2 = obj.methodWithCachedReturn("bar");
  Assert.assertTrue(ret === ret2);
  var ret3 = obj.methodWithCachedReturn("bar");
  Assert.assertTrue(ret2 === ret3);
}

function testJsonReturns() {
  var ret = obj.methodWithJsonObjectReturn();
  Assert.assertTrue(typeof ret === 'object')
  assertEquals("stilton", ret.cheese);
  ret = obj.methodWithJsonArrayReturn();
  Assert.assertTrue(typeof ret === 'object')
  Assert.assertTrue(ret instanceof Array)
  assertEquals("socks", ret[0]);
  assertEquals("shoes", ret[1]);
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
    assertEquals("stilton", jsonObject.cheese);
    count++;
  }, function(jsonArray) {
    Assert.assertTrue(typeof jsonArray === 'object')
    Assert.assertTrue(jsonArray instanceof Array)
    assertEquals("socks", jsonArray[0]);
    assertEquals("shoes", jsonArray[1]);
    count++;
  });
  assertEquals(2, count);
}

function testComplexJsonHandlerParams() {
  var count = 0;
  obj.methodWithHandlerComplexJson(function(jsonObject) {
    Assert.assertTrue(typeof jsonObject === 'object');
    Assert.assertTrue(typeof jsonObject.outer === 'object');
    assertEquals("tartan", jsonObject.outer.socks);
    Assert.assertTrue(jsonObject.list instanceof Array);
    assertEquals("yellow", jsonObject.list[0]);
    assertEquals("blue", jsonObject.list[1]);
    count++;
  }, function(jsonArray) {
    Assert.assertTrue(jsonArray instanceof Array);
    Assert.assertTrue(jsonArray[0] instanceof Array);
    Assert.assertTrue(typeof jsonArray[0][0] === 'object');
    assertEquals("hello", jsonArray[0][0].foo);
    Assert.assertTrue(typeof jsonArray[1][0] === 'object');
    assertEquals("bye", jsonArray[1][0].bar);
    count++;
  });
  assertEquals(2, count);
}

function testJsonHandlerAsyncResultParams() {

  var count = 0;
  obj.methodWithHandlerAsyncResultJsonObject(function(jsonObject, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof jsonObject === 'object')
    assertEquals("stilton", jsonObject.cheese);
    count++;
  });
  obj.methodWithHandlerAsyncResultJsonArray(function(jsonArray, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof jsonArray === 'object')
    Assert.assertTrue(jsonArray instanceof Array)
    assertEquals("socks", jsonArray[0]);
    assertEquals("shoes", jsonArray[1]);
    count++;
  });
  assertEquals(2, count);
}

function testComplexJsonHandlerAsyncResultParams() {
  var count = 0;
  obj.methodWithHandlerAsyncResultComplexJsonObject(function(jsonObject, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof jsonObject === 'object');
    Assert.assertTrue(typeof jsonObject.outer === 'object');
    assertEquals("tartan", jsonObject.outer.socks);
    Assert.assertTrue(jsonObject.list instanceof Array);
    assertEquals("yellow", jsonObject.list[0]);
    assertEquals("blue", jsonObject.list[1]);
    count++;
  });
  obj.methodWithHandlerAsyncResultComplexJsonArray(function(jsonArray, err) {
    Assert.assertNull(err);
    Assert.assertTrue(jsonArray instanceof Array);
    Assert.assertTrue(typeof jsonArray[0] === 'object');
    assertEquals("hello", jsonArray[0].foo);
    Assert.assertTrue(typeof jsonArray[1] === 'object');
    assertEquals("bye", jsonArray[1].bar);
    count++;
  });
  assertEquals(2, count);
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
  assertEquals(2, count);
}

function testEnumParam() {
  var ret = obj.methodWithEnumParam("sausages", "TIM");
  assertEquals("sausagesTIM", ret);
}

function testEnumReturn() {
  var ret = obj.methodWithEnumReturn("JULIEN");
  assertEquals("JULIEN", ret);
}

function testThrowableReturn() {
  var ret = obj.methodWithThrowableReturn("bogies");
  assertEquals("bogies", ret.getMessage());
}

function testThrowableParam(undefined) {
  try {
    undefined.does_not_exist();
    Assert.fail();
  } catch (e) {
    var msg = obj.methodWithThrowableParam(e);
    assertEquals('TypeError: Cannot read property "does_not_exist" from undefined', msg);
  }
}

function testSuperMethodOverloadedBySubclass() {
  assertEquals(0, obj.superMethodOverloadedBySubclass());
  assertEquals(1, obj.superMethodOverloadedBySubclass("sstring_arg"));
}

function testCustomModule() {
  var my = MyInterface.create();
  var testInterface = my.method();
  testInterface.methodWithBasicParams(123, 12345, 1234567, 1265615234, 12.345, 12.34566, true, 'X', 'foobar');
  var sub = my.sub();
  assertEquals("olleh", sub.reverse("hello"));
}

function testMethodWithHandlerAsyncResultTranslatedToFuture() {
  var count = 0;
  obj.methodWithHandlerAsyncResultUserTypes().setHandler(function(refedObj, err) {
    Assert.assertNull(err);
    assertEquals("cheetahs", refedObj.getString());
    count++;
  });
  assertEquals(1, count);
}

function testMethodWithHandlerAsyncResultTranslatedToFutureFails() {
  var count = 0;
  obj.methodWithHandlerAsyncResultDataObject(true).setHandler(function(option, err) {
    Assert.assertNull(option);
    Assert.assertNotNull(err);
    assertEquals("java.lang.Exception: foobar!", err.getMessage());
    count++;
  });
  assertEquals(1, count);
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();






