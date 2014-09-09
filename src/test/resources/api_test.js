var Assert = org.junit.Assert;

var TestInterface = require('testmodel-js/test_interface');
var RefedInterface1 = require('testmodel-js/refed_interface1');

var obj = new TestInterface(new Packages.io.vertx.codegen.testmodel.TestInterfaceImpl());
var refed_obj = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());

var that = this;

function testMethodWithBasicParams() {
  obj.methodWithBasicParams(123, 12345, 1234567, 1265615234, 12.345, 12.34566, true, 'X', 'foobar');
}

function testMethodWithBasicBoxedParams() {
  obj.methodWithBasicParams(123, 12345, 1234567, 1265615234, 12.345, 12.34566, true, 'X', 'foobar');
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
  console.log("Starting test");
  var count = 0;
  obj.methodWithHandlerAsyncResultByte(true, function(b, err) {
    Assert.assertNull(b)
    Assert.assertNotNull(err);
    Assert.assertEquals("foobar!", err.getMessage());
    console.log("type:" + typeof err);
    count++;
  });
  obj.methodWithHandlerAsyncResultShort(true, function(s, err) {
    Assert.assertNull(s)
    Assert.assertNotNull(err);
    Assert.assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultInteger(true, function (i, err) {
    Assert.assertNull(i)
    Assert.assertNotNull(err);
    Assert.assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultLong(true, function (l, err) {
    Assert.assertNull(l)
    Assert.assertNotNull(err);
    Assert.assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultFloat(true, function (f, err) {
    Assert.assertNull(f)
    Assert.assertNotNull(err);
    Assert.assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultDouble(true, function(d, err) {
    Assert.assertNull(d)
    Assert.assertNotNull(err);
    Assert.assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultBoolean(true, function (bool, err) {
    Assert.assertNull(bool)
    Assert.assertNotNull(err);
    Assert.assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultCharacter(true, function (char, err) {
    Assert.assertNull(char)
    Assert.assertNotNull(err);
    Assert.assertEquals("foobar!", err.getMessage());
    count++;
  });
  obj.methodWithHandlerAsyncResultString(true, function (str, err) {
    Assert.assertNull(str)
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
  var jsonObj = {
    foo: "hello",
    bar: 123
  };
  obj.methodWithObjectParam("JsonObject", jsonObj);
  var jsonArr = ["foo", "bar", "wib"];
  obj.methodWithObjectParam("JsonArray", jsonArr);
}

function testOptionsParam() {
  var options = {
    foo: "hello",
    bar: 123,
    wibble: 1.23
  };
  obj.methodWithOptionsParam(options);
}

function testNullOptionsParam() {
    obj.methodWithNullOptionsParam(null);
}

function testMethodWithHandlerListAndSet() {
  var count = 0;
  obj.methodWithHandlerListAndSet(function(listString) {
    Assert.assertTrue(typeof listString === 'object');
    Assert.assertEquals("foo", listString[0]);
    Assert.assertEquals("bar", listString[1]);
    Assert.assertEquals("wibble", listString[2]);
    count++;
  }, function(listInt) {
    Assert.assertTrue(typeof listInt === 'object');
    Assert.assertEquals(5, listInt[0], 0);
    Assert.assertEquals(12, listInt[1], 0);
    Assert.assertEquals(100, listInt[2], 0);
    count++;
  }, function(setString) {
    Assert.assertTrue(typeof setString === 'object');
    Assert.assertEquals("foo", setString[0]);
    Assert.assertEquals("bar", setString[1]);
    Assert.assertEquals("wibble", setString[2])
    count++;
  }, function(setInt) {
    Assert.assertTrue(typeof setInt === 'object');
    Assert.assertEquals(5, setInt[0], 0);
    Assert.assertEquals(12, setInt[1], 0);
    Assert.assertEquals(100, setInt[2], 0);
    count++;
  });
  Assert.assertEquals(4, count, 0);
}

function testMethodWithHandlerAsyncResultListAndSet() {
  var count = 0;
  obj.methodWithHandlerAsyncResultListString(function(listString, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof listString === 'object');
    Assert.assertEquals("foo", listString[0]);
    Assert.assertEquals("bar", listString[1]);
    Assert.assertEquals("wibble", listString[2]);
    count++;
  });
  obj.methodWithHandlerAsyncResultListInteger(function(listInt, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof listInt === 'object');
    Assert.assertEquals(5, listInt[0], 0);
    Assert.assertEquals(12, listInt[1], 0);
    Assert.assertEquals(100, listInt[2], 0);
    count++;
  });
    obj.methodWithHandlerAsyncResultSetString(function(setString, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof setString === 'object');
    Assert.assertEquals("foo", setString[0]);
    Assert.assertEquals("bar", setString[1]);
    Assert.assertEquals("wibble", setString[2])
    count++;
  });
  obj.methodWithHandlerAsyncResultSetInteger(function(setInt, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof setInt === 'object');
    Assert.assertEquals(5, setInt[0], 0);
    Assert.assertEquals(12, setInt[1], 0);
    Assert.assertEquals(100, setInt[2], 0);
    count++;
  });
  Assert.assertEquals(4, count, 0);
}

function testMethodWithHandlerListVertxGen() {
  var count = 0;
  obj.methodWithHandlerListVertxGen(function(listVertxGen) {
    Assert.assertTrue(typeof listVertxGen === 'object');
    Assert.assertTrue(typeof listVertxGen[0] === 'object');
    Assert.assertEquals("foo", listVertxGen[0].getString());
    Assert.assertTrue(typeof listVertxGen[1] === 'object');
    Assert.assertEquals("bar", listVertxGen[1].getString());
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultListVertxGen() {
  var count = 0;
  obj.methodWithHandlerAsyncResultListVertxGen(function(listVertxGen, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof listVertxGen === 'object');
    Assert.assertTrue(typeof listVertxGen[0] === 'object');
    Assert.assertEquals("foo", listVertxGen[0].getString());
    Assert.assertTrue(typeof listVertxGen[1] === 'object');
    Assert.assertEquals("bar", listVertxGen[1].getString());
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerSetVertxGen() {
  var count = 0;
  obj.methodWithHandlerSetVertxGen(function(setVertxGen) {
    Assert.assertTrue(typeof setVertxGen === 'object');
    Assert.assertTrue(typeof setVertxGen[0] === 'object');
    Assert.assertEquals("foo", setVertxGen[0].getString());
    Assert.assertTrue(typeof setVertxGen[1] === 'object');
    Assert.assertEquals("bar", setVertxGen[1].getString());
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultSetVertxGen() {
  var count = 0;
  obj.methodWithHandlerAsyncResultSetVertxGen(function(setVertxGen, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof setVertxGen === 'object');
    Assert.assertTrue(typeof setVertxGen[0] === 'object');
    Assert.assertEquals("foo", setVertxGen[0].getString());
    Assert.assertTrue(typeof setVertxGen[1] === 'object');
    Assert.assertEquals("bar", setVertxGen[1].getString());
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerListJsonObject() {
  var count = 0;
  obj.methodWithHandlerListJsonObject(function(listJsonObject) {
    Assert.assertTrue(typeof listJsonObject === 'object');
    Assert.assertTrue(typeof listJsonObject[0] === 'object');
    Assert.assertEquals("stilton", listJsonObject[0].cheese);
    Assert.assertTrue(typeof listJsonObject[1] === 'object');
    Assert.assertEquals("tartan", listJsonObject[1].socks);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerListNullJsonObject() {
    var count = 0;
    obj.methodWithHandlerListNullJsonObject(function(listJsonObject) {
        Assert.assertTrue(typeof listJsonObject === 'object');
        Assert.assertNull(listJsonObject[0]);
        count++;
    });
    Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultListJsonObject() {
  var count = 0;
  obj.methodWithHandlerAsyncResultListJsonObject(function(listJsonObject, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof listJsonObject === 'object');
    Assert.assertTrue(typeof listJsonObject[0] === 'object');
    Assert.assertEquals("stilton", listJsonObject[0].cheese);
    Assert.assertTrue(typeof listJsonObject[1] === 'object');
    Assert.assertEquals("tartan", listJsonObject[1].socks);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultListNullJsonObject() {
    var count = 0;
    obj.methodWithHandlerAsyncResultListNullJsonObject(function(listJsonObject, err) {
        Assert.assertNull(err);
        Assert.assertTrue(typeof listJsonObject === 'object');
        Assert.assertNull(listJsonObject[0]);
        count++;
    });
    Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerSetJsonObject() {
  var count = 0;
  obj.methodWithHandlerSetJsonObject(function(setJsonObject) {
    Assert.assertTrue(typeof setJsonObject === 'object');
    Assert.assertTrue(typeof setJsonObject[0] === 'object');
    Assert.assertEquals("stilton", setJsonObject[0].cheese);
    Assert.assertTrue(typeof setJsonObject[1] === 'object');
    Assert.assertEquals("tartan", setJsonObject[1].socks);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerSetNullJsonObject() {
    var count = 0;
    obj.methodWithHandlerSetNullJsonObject(function(setJsonObject) {
        Assert.assertTrue(typeof setJsonObject === 'object');
        Assert.assertNull(setJsonObject[0]);
        count++;
    });
    Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultSetJsonObject() {
  var count = 0;
  obj.methodWithHandlerAsyncResultSetJsonObject(function(setJsonObject, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof setJsonObject === 'object');
    Assert.assertTrue(typeof setJsonObject[0] === 'object');
    Assert.assertEquals("stilton", setJsonObject[0].cheese);
    Assert.assertTrue(typeof setJsonObject[1] === 'object');
    Assert.assertEquals("tartan", setJsonObject[1].socks);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultSetNullJsonObject() {
    var count = 0;
    obj.methodWithHandlerAsyncResultSetNullJsonObject(function(setJsonObject, err) {
        Assert.assertNull(err);
        Assert.assertTrue(typeof setJsonObject === 'object');
        Assert.assertNull(setJsonObject[0]);
        count++;
    });
    Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerListJsonArray() {
  var count = 0;
  obj.methodWithHandlerListJsonArray(function(listJsonArray) {
    Assert.assertTrue(typeof listJsonArray === 'object');
    Assert.assertTrue(typeof listJsonArray[0] === 'object');
    Assert.assertTrue(listJsonArray[0] instanceof Array);
    Assert.assertEquals("green", listJsonArray[0][0]);
    Assert.assertEquals("blue", listJsonArray[0][1]);
    Assert.assertTrue(typeof listJsonArray[1] === 'object');
    Assert.assertTrue(listJsonArray[1] instanceof Array);
    Assert.assertEquals("yellow", listJsonArray[1][0]);
    Assert.assertEquals("purple", listJsonArray[1][1]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerListNullJsonArray() {
    var count = 0;
    obj.methodWithHandlerListNullJsonArray(function(listJsonArray) {
        Assert.assertTrue(typeof listJsonArray === 'object');
        Assert.assertNull(listJsonArray[0]);
        count++;
    });
    Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultListJsonArray() {
  var count = 0;
  obj.methodWithHandlerAsyncResultListJsonArray(function(listJsonArray, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof listJsonArray === 'object');
    Assert.assertTrue(typeof listJsonArray[0] === 'object');
    Assert.assertTrue(listJsonArray[0] instanceof Array);
    Assert.assertEquals("green", listJsonArray[0][0]);
    Assert.assertEquals("blue", listJsonArray[0][1]);
    Assert.assertTrue(typeof listJsonArray[1] === 'object');
    Assert.assertTrue(listJsonArray[1] instanceof Array);
    Assert.assertEquals("yellow", listJsonArray[1][0]);
    Assert.assertEquals("purple", listJsonArray[1][1]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultListNullJsonArray() {
    var count = 0;
    obj.methodWithHandlerAsyncResultListNullJsonArray(function(listJsonArray, err) {
        Assert.assertNull(err);
        Assert.assertTrue(typeof listJsonArray === 'object');
        Assert.assertNull(listJsonArray[0]);
        count++;
    });
    Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerSetJsonArray() {
  var count = 0;
  obj.methodWithHandlerSetJsonArray(function(setJsonArray) {
    Assert.assertTrue(typeof setJsonArray === 'object');
    Assert.assertTrue(typeof setJsonArray[0] === 'object');
    Assert.assertTrue(setJsonArray[0] instanceof Array);
    Assert.assertEquals("green", setJsonArray[0][0]);
    Assert.assertEquals("blue", setJsonArray[0][1]);
    Assert.assertTrue(typeof setJsonArray[1] === 'object');
    Assert.assertTrue(setJsonArray[1] instanceof Array);
    Assert.assertEquals("yellow", setJsonArray[1][0]);
    Assert.assertEquals("purple", setJsonArray[1][1]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerSetNullJsonArray() {
    var count = 0;
    obj.methodWithHandlerSetNullJsonArray(function(setJsonArray) {
        Assert.assertTrue(typeof setJsonArray === 'object');
        Assert.assertNull(setJsonArray[0]);
        count++;
    });
    Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultSetJsonArray() {
  var count = 0;
  obj.methodWithHandlerAsyncResultSetJsonArray(function(setJsonArray, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof setJsonArray === 'object');
    Assert.assertTrue(typeof setJsonArray[0] === 'object');
    Assert.assertTrue(setJsonArray[0] instanceof Array);
    Assert.assertEquals("green", setJsonArray[0][0]);
    Assert.assertEquals("blue", setJsonArray[0][1]);
    Assert.assertTrue(typeof setJsonArray[1] === 'object');
    Assert.assertTrue(setJsonArray[1] instanceof Array);
    Assert.assertEquals("yellow", setJsonArray[1][0]);
    Assert.assertEquals("purple", setJsonArray[1][1]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultSetNullJsonArray() {
    var count = 0;
    obj.methodWithHandlerAsyncResultSetNullJsonArray(function(setJsonArray, err) {
        Assert.assertNull(err);
        Assert.assertTrue(typeof setJsonArray === 'object');
        Assert.assertNull(setJsonArray[0]);
        count++;
    });
    Assert.assertEquals(1, count, 0);
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
}

function testListStringReturn() {
  var listString = obj.methodWithListStringReturn();
  Assert.assertTrue(typeof listString === 'object');
  Assert.assertEquals("foo", listString[0]);
  Assert.assertEquals("bar", listString[1]);
  Assert.assertEquals("wibble", listString[2]);
}

function testSetStringReturn() {
  var setString = obj.methodWithSetStringReturn();
  Assert.assertTrue(typeof setString === 'object');
  Assert.assertEquals("foo", setString[0]);
  Assert.assertEquals("bar", setString[1]);
  Assert.assertEquals("wibble", setString[2]);
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
  Assert.assertSame(obj, ret);
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
  Assert.assertSame(ret, ret2);
  var ret3 = obj.methodWithCachedReturn("bar");
  Assert.assertSame(ret2, ret3);
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

function testJsonParams() {
  var jsonObject = {
    cat: "lion",
    cheese: "cheddar"
  }
  var jsonArray = ["house", "spider"];
  obj.methodWithJsonParams(jsonObject, jsonArray);
}

function testNullJsonParams() {
   var jsonObject = {
     cat: "lion",
     cheese: "cheddar"
   }
   var jsonArray = ["house", "spider"];
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

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();






