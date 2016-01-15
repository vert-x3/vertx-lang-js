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

function testListOfDataObjectsParam() {
  var dataObjects = [
    {
      foo: "hello",
      bar: 123,
      wibble: 1.23
    },
    {
      foo: "world",
      bar: 123,
      wibble: 1.23
    }
  ];
  obj.methodWithListOfDataObjectsParam(dataObjects);
}

function testSetOfDataObjectsParam() {
  var dataObjects = [
    {
      foo: "hello",
      bar: 123,
      wibble: 1.23
    },
    {
      foo: "world",
      bar: 123,
      wibble: 1.23
    }
  ];
  obj.methodWithSetOfDataObjectsParam(dataObjects);
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
    Assert.assertTrue(listVertxGen[0]._jdel);
    Assert.assertTrue(listVertxGen[1]._jdel);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerListAbstractVertxGen() {
    var count = 0;
    obj.methodWithHandlerListAbstractVertxGen(function(listVertxGen) {
      Assert.assertTrue(typeof listVertxGen === 'object');
      Assert.assertTrue(typeof listVertxGen[0] === 'object');
      Assert.assertEquals("abstractfoo", listVertxGen[0].getString());
      Assert.assertTrue(typeof listVertxGen[1] === 'object');
      Assert.assertEquals("abstractbar", listVertxGen[1].getString());
      Assert.assertTrue(listVertxGen[0]._jdel);
      Assert.assertTrue(listVertxGen[1]._jdel);
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
    Assert.assertTrue(listVertxGen[0]._jdel);
    Assert.assertTrue(listVertxGen[1]._jdel);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultListAbstractVertxGen() {
    var count = 0;
    obj.methodWithHandlerAsyncResultListAbstractVertxGen(function(listVertxGen, err) {
      Assert.assertNull(err);
      Assert.assertTrue(typeof listVertxGen === 'object');
      Assert.assertTrue(typeof listVertxGen[0] === 'object');
      Assert.assertEquals("abstractfoo", listVertxGen[0].getString());
      Assert.assertTrue(typeof listVertxGen[1] === 'object');
      Assert.assertEquals("abstractbar", listVertxGen[1].getString());
      Assert.assertTrue(listVertxGen[0]._jdel);
      Assert.assertTrue(listVertxGen[1]._jdel);
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
    Assert.assertTrue(setVertxGen[0]._jdel);
    Assert.assertTrue(setVertxGen[1]._jdel);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerSetAbstractVertxGen() {
    var count = 0;
    obj.methodWithHandlerSetAbstractVertxGen(function(setVertxGen) {
      Assert.assertTrue(typeof setVertxGen === 'object');
      Assert.assertTrue(typeof setVertxGen[0] === 'object');
      Assert.assertEquals("abstractfoo", setVertxGen[0].getString());
      Assert.assertTrue(typeof setVertxGen[1] === 'object');
      Assert.assertEquals("abstractbar", setVertxGen[1].getString());
      Assert.assertTrue(setVertxGen[0]._jdel);
      Assert.assertTrue(setVertxGen[1]._jdel);
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
    Assert.assertTrue(setVertxGen[0]._jdel);
    Assert.assertTrue(setVertxGen[1]._jdel);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultSetAbstractVertxGen() {
    var count = 0;
    obj.methodWithHandlerAsyncResultSetAbstractVertxGen(function(setVertxGen, err) {
      Assert.assertNull(err);
      Assert.assertTrue(typeof setVertxGen === 'object');
      Assert.assertTrue(typeof setVertxGen[0] === 'object');
      Assert.assertEquals("abstractfoo", setVertxGen[0].getString());
      Assert.assertTrue(typeof setVertxGen[1] === 'object');
      Assert.assertEquals("abstractbar", setVertxGen[1].getString());
      Assert.assertTrue(setVertxGen[0]._jdel);
      Assert.assertTrue(setVertxGen[1]._jdel);
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

function testMethodWithHandlerListComplexJsonObject() {
  var count = 0;
  obj.methodWithHandlerListComplexJsonObject(function(listJsonObject) {
    Assert.assertTrue(typeof listJsonObject === 'object');
    Assert.assertTrue(typeof listJsonObject[0] === 'object');
    Assert.assertTrue(typeof listJsonObject[0].outer === 'object');
    Assert.assertEquals("tartan", listJsonObject[0].outer.socks);
    Assert.assertTrue(listJsonObject[0].list instanceof Array);
    Assert.assertEquals("yellow", listJsonObject[0].list[0]);
    Assert.assertEquals("blue", listJsonObject[0].list[1]);
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

function testMethodWithHandlerAsyncResultListComplexJsonObject() {
  var count = 0;
  obj.methodWithHandlerAsyncResultListComplexJsonObject(function(listJsonObject, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof listJsonObject === 'object');
    Assert.assertTrue(typeof listJsonObject[0] === 'object');
    Assert.assertTrue(typeof listJsonObject[0].outer === 'object');
    Assert.assertEquals("tartan", listJsonObject[0].outer.socks);
    Assert.assertTrue(listJsonObject[0].list instanceof Array);
    Assert.assertEquals("yellow", listJsonObject[0].list[0]);
    Assert.assertEquals("blue", listJsonObject[0].list[1]);
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

function testMethodWithHandlerSetComplexJsonObject() {
  var count = 0;
  obj.methodWithHandlerSetComplexJsonObject(function(setJsonObject) {
    Assert.assertTrue(typeof setJsonObject === 'object');
    Assert.assertTrue(typeof setJsonObject[0] === 'object');
    Assert.assertTrue(typeof setJsonObject[0].outer === 'object');
    Assert.assertEquals("tartan", setJsonObject[0].outer.socks);
    Assert.assertTrue(setJsonObject[0].list instanceof Array);
    Assert.assertEquals("yellow", setJsonObject[0].list[0]);
    Assert.assertEquals("blue", setJsonObject[0].list[1]);
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

function testMethodWithHandlerAsyncResultSetComplexJsonObject() {
  var count = 0;
  obj.methodWithHandlerAsyncResultSetComplexJsonObject(function(setJsonObject, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof setJsonObject === 'object');
    Assert.assertTrue(typeof setJsonObject[0] === 'object');
    Assert.assertTrue(typeof setJsonObject[0].outer === 'object');
    Assert.assertEquals("tartan", setJsonObject[0].outer.socks);
    Assert.assertTrue(setJsonObject[0].list instanceof Array);
    Assert.assertEquals("yellow", setJsonObject[0].list[0]);
    Assert.assertEquals("blue", setJsonObject[0].list[1]);
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

function testMethodWithHandlerListComplexJsonArray() {
  var count = 0;
  obj.methodWithHandlerListComplexJsonArray(function(listJsonArray) {
    Assert.assertTrue(typeof listJsonArray === 'object');
    Assert.assertTrue(listJsonArray[0] instanceof Array);
    Assert.assertTrue(typeof listJsonArray[0][0] === 'object');
    Assert.assertEquals("hello", listJsonArray[0][0].foo);
    Assert.assertTrue(listJsonArray[1] instanceof Array);
    Assert.assertTrue(typeof listJsonArray[1][0] === 'object');
    Assert.assertEquals("bye", listJsonArray[1][0].bar);
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

function testMethodWithHandlerAsyncResultListComplexJsonArray() {
  var count = 0;
  obj.methodWithHandlerAsyncResultListComplexJsonArray(function(listJsonArray, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof listJsonArray === 'object');
    Assert.assertTrue(listJsonArray[0] instanceof Array);
    Assert.assertTrue(typeof listJsonArray[0][0] === 'object');
    Assert.assertEquals("hello", listJsonArray[0][0].foo);
    Assert.assertTrue(listJsonArray[1] instanceof Array);
    Assert.assertTrue(typeof listJsonArray[1][0] === 'object');
    Assert.assertEquals("bye", listJsonArray[1][0].bar);
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

function testMethodWithHandlerSetComplexJsonArray() {
  var count = 0;
  obj.methodWithHandlerSetComplexJsonArray(function(setJsonArray) {
    Assert.assertTrue(typeof setJsonArray === 'object');
    Assert.assertTrue(setJsonArray[0] instanceof Array);
    Assert.assertTrue(typeof setJsonArray[0][0] === 'object');
    Assert.assertEquals("hello", setJsonArray[0][0].foo);
    Assert.assertTrue(setJsonArray[1] instanceof Array);
    Assert.assertTrue(typeof setJsonArray[1][0] === 'object');
    Assert.assertEquals("bye", setJsonArray[1][0].bar);
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

function testMethodWithHandlerAsyncResultSetComplexJsonArray() {
  var count = 0;
  obj.methodWithHandlerAsyncResultSetComplexJsonArray(function(setJsonArray, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof setJsonArray === 'object');
    Assert.assertTrue(setJsonArray[0] instanceof Array);
    Assert.assertTrue(typeof setJsonArray[0][0] === 'object');
    Assert.assertEquals("hello", setJsonArray[0][0].foo);
    Assert.assertTrue(setJsonArray[1] instanceof Array);
    Assert.assertTrue(typeof setJsonArray[1][0] === 'object');
    Assert.assertEquals("bye", setJsonArray[1][0].bar);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerListDataObject() {
  var count = 0;
  obj.methodWithHandlerAsyncResultListDataObject(function(listDataObject) {
    Assert.assertTrue(typeof listDataObject === 'object');
    Assert.assertTrue(typeof listDataObject[0] === 'object');
    Assert.assertTrue(listDataObject[0] instanceof Object);
    Assert.assertEquals("String 1", listDataObject[0].foo);
    Assert.assertEquals(1, listDataObject[0].bar, 0);
    Assert.assertEquals(1.1, listDataObject[0].wibble, 0);
    Assert.assertTrue(typeof listDataObject[1] === 'object');
    Assert.assertTrue(listDataObject[1] instanceof Object);
    Assert.assertEquals("String 2", listDataObject[1].foo);
    Assert.assertEquals(2, listDataObject[1].bar, 0);
    Assert.assertEquals(2.2, listDataObject[1].wibble, 0);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerNullListDataObject() {
  var count = 0;
  obj.methodWithHandlerAsyncResultListNullDataObject(function(listDataObject) {
    Assert.assertTrue(typeof listDataObject === 'object');
    Assert.assertNull(listDataObject[0]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerSetDataObject() {
  var count = 0;
  obj.methodWithHandlerAsyncResultSetDataObject(function(setDataObject) {
    Assert.assertTrue(typeof setDataObject === 'object');
    Assert.assertTrue(typeof setDataObject[0] === 'object');
    Assert.assertTrue(setDataObject[0] instanceof Object);
    Assert.assertEquals("String 1", setDataObject[0].foo);
    Assert.assertEquals(1, setDataObject[0].bar, 0);
    Assert.assertEquals(1.1, setDataObject[0].wibble, 0);
    Assert.assertTrue(typeof setDataObject[1] === 'object');
    Assert.assertTrue(setDataObject[1] instanceof Object);
    Assert.assertEquals("String 2", setDataObject[1].foo);
    Assert.assertEquals(2, setDataObject[1].bar, 0);
    Assert.assertEquals(2.2, setDataObject[1].wibble, 0);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerNullSetDataObject() {
  var count = 0;
  obj.methodWithHandlerAsyncResultSetNullDataObject(function(setDataObject) {
    Assert.assertTrue(typeof setDataObject === 'object');
    Assert.assertNull(setDataObject[0]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultListDataObject() {
  var count = 0;
  obj.methodWithHandlerAsyncResultListDataObject(function(listDataObject, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof listDataObject === 'object');
    Assert.assertTrue(typeof listDataObject[0] === 'object');
    Assert.assertTrue(listDataObject[0] instanceof Object);
    Assert.assertEquals("String 1", listDataObject[0].foo);
    Assert.assertEquals(1, listDataObject[0].bar, 0);
    Assert.assertEquals(1.1, listDataObject[0].wibble, 0);
    Assert.assertTrue(typeof listDataObject[1] === 'object');
    Assert.assertTrue(listDataObject[1] instanceof Object);
    Assert.assertEquals("String 2", listDataObject[1].foo);
    Assert.assertEquals(2, listDataObject[1].bar, 0);
    Assert.assertEquals(2.2, listDataObject[1].wibble, 0);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultNullListDataObject() {
  var count = 0;
  obj.methodWithHandlerAsyncResultListNullDataObject(function(listDataObject, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof listDataObject === 'object');
    Assert.assertNull(listDataObject[0]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultSetDataObject() {
  var count = 0;
  obj.methodWithHandlerAsyncResultSetDataObject(function(setDataObject, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof setDataObject === 'object');
    Assert.assertTrue(typeof setDataObject[0] === 'object');
    Assert.assertTrue(setDataObject[0] instanceof Object);
    Assert.assertEquals("String 1", setDataObject[0].foo);
    Assert.assertEquals(1, setDataObject[0].bar, 0);
    Assert.assertEquals(1.1, setDataObject[0].wibble, 0);
    Assert.assertTrue(typeof setDataObject[1] === 'object');
    Assert.assertTrue(setDataObject[1] instanceof Object);
    Assert.assertEquals("String 2", setDataObject[1].foo);
    Assert.assertEquals(2, setDataObject[1].bar, 0);
    Assert.assertEquals(2.2, setDataObject[1].wibble, 0);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultNullSetDataObject() {
  var count = 0;
  obj.methodWithHandlerAsyncResultSetNullDataObject(function(setDataObject, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof setDataObject === 'object');
    Assert.assertNull(setDataObject[0]);
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

function testMethodWithHandlerListEnum() {
  var count = 0;
  obj.methodWithHandlerListEnum(function(listEnum) {
    Assert.assertTrue(typeof listEnum === 'object');
    Assert.assertEquals('TIM', listEnum[0]);
    Assert.assertEquals('JULIEN', listEnum[1]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerSetEnum() {
  var count = 0;
  obj.methodWithHandlerListEnum(function(setEnum) {
    Assert.assertTrue(typeof setEnum === 'object');
    Assert.assertEquals('TIM', setEnum[0]);
    Assert.assertEquals('JULIEN', setEnum[1]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultListEnum() {
  var count = 0;
  obj.methodWithHandlerAsyncResultListEnum(function(listEnum, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof listEnum === 'object');
    Assert.assertEquals('TIM', listEnum[0]);
    Assert.assertEquals('JULIEN', listEnum[1]);
    count++;
  });
}

function testMethodWithHandlerAsyncResultSetEnum() {
  var count = 0;
  obj.methodWithHandlerAsyncResultListEnum(function(setEnum, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof setEnum === 'object');
    Assert.assertEquals('TIM', setEnum[0]);
    Assert.assertEquals('JULIEN', setEnum[1]);
    count++;
  });
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

function testMapComplexJsonArrayReturn() {
  var map = obj.methodWithMapComplexJsonArrayReturn(function() {});
  Assert.assertTrue(typeof map === 'object');
  var complex = map["foo"];
  Assert.assertTrue(complex instanceof Array);
  Assert.assertEquals("hello", complex[0].foo);
  Assert.assertEquals("bye", complex[1].bar);
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

function testMapReturn() {
  var count = 0;
  var map = obj.methodWithMapReturn(function(op) {
    switch (count) {
      case 0: {
        Assert.assertEquals('put(foo,bar)', op);
        break;
      }
      case 1: {
        Assert.assertEquals('get(foo)', op);
        break;
      }
      case 2: {
        Assert.assertEquals('get(foo)', op);
        break;
      }
      case 3: {
        Assert.assertEquals('put(wibble,quux)', op);
        break;
      }
      case 4: {
        Assert.assertEquals('size()', op);
        break;
      }
      case 5: {
        Assert.assertEquals('get(wibble)', op);
        break;
      }
      case 6: {
        Assert.assertEquals('remove(wibble)', op);
        break;
      }
      case 7: {
        Assert.assertEquals('size()', op);
        break;
      }
      case 8: {
        Assert.assertEquals('put(blah,123)', op);
        break;
      }
      case 9: {
        Assert.assertEquals('entrySet()', op);
        break;
      }
      case 10: {
        Assert.assertEquals('keySet()', op);
        break
      }
      case 11: {
        Assert.assertEquals('get(foo)', op);
        break;
      }
      case 12: {
        Assert.assertEquals('get(blah)', op);
        break;
      }
      case 13: {
        Assert.assertEquals('clear()', op);
        break;
      }
      case 14: {
        Assert.assertEquals('size()', op);
        break;
      }
      default :
        Assert.fail("Unexpected method call # " + count + " for op `" + op + "`");
    }
    count++;
  });
  map["foo"] = "bar";
  Assert.assertEquals("bar", map["foo"]);
  Assert.assertEquals("bar", map.foo);
  map.wibble = "quux";
  Assert.assertEquals(2, map.size(), 0);
  Assert.assertEquals("quux", map["wibble"]);
  Assert.assertTrue(delete map["wibble"]);
  Assert.assertEquals(1, map.size(), 0);

  // Test iteration forEach / for in
  map["blah"] = 123;
  var keyCount = 0;
  map.forEach(function(value, key) {
    if (keyCount++ == 0) {
      Assert.assertEquals("foo", key);
      Assert.assertEquals("bar", value);
    } else {
      Assert.assertEquals("blah", key);
      Assert.assertEquals(123, value, 0);
    }
  });
  Assert.assertEquals(2, keyCount, 0);

  keyCount = 0;
  for (var k in map) {
    if (keyCount++ == 0) {
      Assert.assertEquals("bar", map[k]);
    } else {
      Assert.assertEquals(123, map[k], 0);
    }
  }

  Assert.assertEquals(13, count, 0);

  map.clear();

  Assert.assertEquals(0, map.size(), 0);

  // TODO: This should pass if Object.keys is supported for JSAdapter (see utils#convMap)
  /*keyCount = 0;
  Object.keys(map).forEach(function(key) {
    if (keyCount++ == 0) {
      Assert.assertEquals("bar", map[key]);
    } else {
      Assert.assertEquals(123, map[key], 0);
    }
  });
  Assert.assertEquals(2, keyCount, 0);
  */
}

function testMapStringReturn() {
  var map = obj.methodWithMapStringReturn(function() {});
  Assert.assertTrue(typeof map === 'object');
  Assert.assertEquals("bar", map["foo"]);
  Assert.assertEquals("bar", map.foo);
  Assert.assertTrue(typeof map["foo"] === 'string');
}

function testMapJsonObjectReturn() {
  var map = obj.methodWithMapJsonObjectReturn(function() {});
  Assert.assertTrue(typeof map === 'object');
  var json = map["foo"];
  Assert.assertTrue(typeof json === 'object');
  Assert.assertEquals("eek", json["wibble"]);
  var count = 0;
  map.forEach(function(val, index) {
    Assert.assertTrue(count == 0);
    Assert.assertEquals("foo", index);
    Assert.assertTrue(typeof val === 'object');
    Assert.assertEquals("eek", val["wibble"]);
  });
}

function testMapComplexJsonObjectReturn() {
  var map = obj.methodWithMapComplexJsonObjectReturn(function() {});
  Assert.assertTrue(typeof map === 'object');
  var complex = map["foo"];
  Assert.assertTrue(typeof complex === 'object');
  Assert.assertTrue(typeof complex.outer === 'object');
  Assert.assertEquals("tartan", complex.outer.socks);
  Assert.assertTrue(complex.list instanceof Array);
  Assert.assertEquals("yellow", complex.list[0]);
  Assert.assertEquals("blue", complex.list[1]);
}

function testMapJsonArrayReturn() {
  var map = obj.methodWithMapJsonArrayReturn(function() {});
  Assert.assertTrue(typeof map === 'object');
  var arr = map["foo"];
  Assert.assertTrue(typeof arr === 'object');
  Assert.assertTrue(arr instanceof Array);
  Assert.assertEquals("wibble", arr[0]);
}

function testMapLongReturn() {
  var map = obj.methodWithMapLongReturn(function() {});
  Assert.assertTrue(typeof map === 'object');
  Assert.assertTrue(123 === map["foo"]);
  Assert.assertTrue(123 === map.foo);
  Assert.assertTrue(typeof map["foo"] === 'number');
}

function testMapNullReturn() {
  var map = obj.methodWithNullMapReturn();
  Assert.assertTrue(map === null);
}

function testListStringReturn() {
  var list = obj.methodWithListStringReturn();
  Assert.assertTrue(typeof list === 'object');
  Assert.assertEquals("foo", list[0]);
  Assert.assertEquals("bar", list[1]);
  Assert.assertEquals("wibble", list[2]);
}

function testListLongReturn() {
  var list = obj.methodWithListLongReturn();
  Assert.assertTrue(typeof list === 'object');
  Assert.assertTrue(123 === list[0]);
  Assert.assertTrue(456 === list[1]);
}

function testListJsonObjectReturn() {
  var list = obj.methodWithListJsonObjectReturn();
  Assert.assertTrue(typeof list === 'object');
  Assert.assertTrue(list instanceof Array);
  var obj1 = list[0];
  var obj2 = list[1];
  Assert.assertEquals("bar", obj1.foo);
  Assert.assertEquals("eek", obj2.blah);
}

function testListComplexJsonObjectReturn() {
  var list = obj.methodWithListComplexJsonObjectReturn();
  Assert.assertTrue(typeof list === 'object');
  Assert.assertTrue(list instanceof Array);
  var json1 = list[0];
  Assert.assertTrue(typeof json1 === 'object');
  Assert.assertTrue(typeof json1.outer === 'object');
  Assert.assertEquals("tartan", json1.outer.socks);
  Assert.assertTrue(json1.list instanceof Array);
  Assert.assertEquals("yellow", json1.list[0]);
  Assert.assertEquals("blue", json1.list[1]);
}

function testListJsonArrayReturn() {
  var list = obj.methodWithListJsonArrayReturn();
  Assert.assertTrue(typeof list === 'object');
  Assert.assertTrue(list instanceof Array);
  var arr1 = list[0];
  var arr2 = list[1];
  Assert.assertTrue(arr1 instanceof Array);
  Assert.assertTrue(arr2 instanceof Array);
  Assert.assertEquals("foo", arr1[0]);
  Assert.assertEquals("blah", arr2[0]);
}

function testListComplexJsonArrayReturn() {
  var list = obj.methodWithListComplexJsonArrayReturn();
  Assert.assertTrue(typeof list === 'object');
  Assert.assertTrue(list instanceof Array);
  var json1 = list[0];
  Assert.assertTrue(json1 instanceof Array);
  Assert.assertEquals("hello", json1[0].foo);
  var json2 = list[1];
  Assert.assertTrue(json2 instanceof Array);
  Assert.assertEquals("bye", json2[0].bar);
}

function testListVertxGenReturn() {
  var list = obj.methodWithListVertxGenReturn();
  Assert.assertTrue(typeof list === 'object');
  //Assert.assertTrue(list instanceof Array);
  var obj1 = list[0];
  var obj2 = list[1];
  Assert.assertTrue(typeof obj1 === 'object');
  Assert.assertTrue(typeof obj2 === 'object');
  Assert.assertEquals("foo", obj1.getString());
  Assert.assertTrue(obj1._jdel);
  Assert.assertEquals("bar", obj2.getString());
  Assert.assertTrue(obj2._jdel);
}

function testListDataObjectReturn() {
  var listDataObject = obj.methodWithListDataObjectReturn();
  Assert.assertTrue(typeof listDataObject === 'object');
  Assert.assertTrue(typeof listDataObject[0] === 'object');
  Assert.assertTrue(listDataObject[0] instanceof Object);
  Assert.assertEquals("String 1", listDataObject[0].foo);
  Assert.assertEquals(1, listDataObject[0].bar, 0);
  Assert.assertEquals(1.1, listDataObject[0].wibble, 0);
  Assert.assertTrue(typeof listDataObject[1] === 'object');
  Assert.assertTrue(listDataObject[1] instanceof Object);
  Assert.assertEquals("String 2", listDataObject[1].foo);
  Assert.assertEquals(2, listDataObject[1].bar, 0);
  Assert.assertEquals(2.2, listDataObject[1].wibble, 0);
}

function testListEnumReturn() {
  var listEnum = obj.methodWithListEnumReturn();
  Assert.assertTrue(typeof listEnum === 'object');
  Assert.assertEquals("JULIEN", listEnum[0]);
  Assert.assertEquals("TIM", listEnum[1]);
}

function testSetStringReturn() {
  var setString = obj.methodWithSetStringReturn();
  Assert.assertTrue(typeof setString === 'object');
  Assert.assertEquals("foo", setString[0]);
  Assert.assertEquals("bar", setString[1]);
  Assert.assertEquals("wibble", setString[2]);
}

function testSetLongReturn() {
  var list = obj.methodWithSetLongReturn();
  Assert.assertTrue(typeof list === 'object');
  Assert.assertTrue(123 === list[0]);
  Assert.assertTrue(456 === list[1]);
}

function testSetJsonObjectReturn() {
  var list = obj.methodWithSetJsonObjectReturn();
  Assert.assertTrue(typeof list === 'object');
  Assert.assertTrue(list instanceof Array);
  var obj1 = list[0];
  var obj2 = list[1];
  Assert.assertEquals("bar", obj1.foo);
  Assert.assertEquals("eek", obj2.blah);
}

function testSetComplexJsonObjectReturn() {
  var list = obj.methodWithSetComplexJsonObjectReturn();
  Assert.assertTrue(typeof list === 'object');
  Assert.assertTrue(list instanceof Array);
  var obj1 = list[0];
  Assert.assertEquals("tartan", obj1.outer.socks);
  Assert.assertEquals("yellow", obj1.list[0]);
  Assert.assertEquals("blue", obj1.list[1]);
}

function testSetJsonArrayReturn() {
  var list = obj.methodWithSetJsonArrayReturn();
  Assert.assertTrue(typeof list === 'object');
  Assert.assertTrue(list instanceof Array);
  var arr1 = list[0];
  var arr2 = list[1];
  Assert.assertTrue(arr1 instanceof Array);
  Assert.assertTrue(arr2 instanceof Array);
  Assert.assertEquals("foo", arr1[0]);
  Assert.assertEquals("blah", arr2[0]);
}

function testSetComplexJsonArrayReturn() {
  var _set = obj.methodWithSetComplexJsonArrayReturn();
  var arr1 = _set[0];
  var arr2 = _set[1];
  Assert.assertTrue(arr1 instanceof Array);
  Assert.assertTrue(arr2 instanceof Array);
  Assert.assertEquals("hello", arr1[0].foo);
  Assert.assertEquals("bye", arr2[0].bar);
}

function testSetVertxGenReturn() {
  var list = obj.methodWithSetVertxGenReturn();
  Assert.assertTrue(typeof list === 'object');
  Assert.assertTrue(list instanceof Array);
  var obj1 = list[0];
  var obj2 = list[1];
  Assert.assertTrue(typeof obj1 === 'object');
  Assert.assertTrue(typeof obj2 === 'object');
  Assert.assertEquals("foo", obj1.getString());
  Assert.assertTrue(obj1._jdel);
  Assert.assertEquals("bar", obj2.getString());
  Assert.assertTrue(obj2._jdel);
}

function testSetDataObjectReturn() {
  var setDataObject = obj.methodWithSetDataObjectReturn();
  Assert.assertTrue(typeof setDataObject === 'object');
  Assert.assertTrue(typeof setDataObject[0] === 'object');
  Assert.assertTrue(setDataObject[0] instanceof Object);
  Assert.assertEquals("String 1", setDataObject[0].foo);
  Assert.assertEquals(1, setDataObject[0].bar, 0);
  Assert.assertEquals(1.1, setDataObject[0].wibble, 0);
  Assert.assertTrue(typeof setDataObject[1] === 'object');
  Assert.assertTrue(setDataObject[1] instanceof Object);
  Assert.assertEquals("String 2", setDataObject[1].foo);
  Assert.assertEquals(2, setDataObject[1].bar, 0);
  Assert.assertEquals(2.2, setDataObject[1].wibble, 0);
}

function testSetEnumReturn() {
  var setEnum = obj.methodWithSetEnumReturn();
  Assert.assertTrue(typeof setEnum === 'object');
  Assert.assertEquals("JULIEN", setEnum[0]);
  Assert.assertEquals("TIM", setEnum[1]);
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

// TODO should test more than just List<Long>
function testMethodWithListParams() {
  obj.methodWithListParams(["foo", "bar"], [2, 3], [12, 13], [1234, 1345], [123, 456], [{foo: "bar"}, {eek: "wibble"}], [["foo"], ["blah"]], [refed_obj.setString("foo"), refed_obj2.setString("bar")], [{"foo":"String 1","bar":1,"wibble":1.1}, {"foo":"String 2","bar": 2,"wibble": 2.2}], ["JULIEN","TIM"]);
}

function testMethodWithSetParams() {
  obj.methodWithSetParams(["foo", "bar"], [2, 3], [12, 13], [1234, 1345], [123, 456], [{foo: "bar"}, {eek: "wibble"}], [["foo"], ["blah"]], [refed_obj.setString("foo"), refed_obj2.setString("bar")], [{"foo":"String 1","bar":1,"wibble":1.1}, {"foo":"String 2","bar": 2,"wibble": 2.2}], ["JULIEN","TIM"]);
}

function testMethodWithMapParams() {
  obj.methodWithMapParams({foo: "bar", eek: "wibble"}, {foo: 2, eek: 3}, {foo:12, eek:13}, {foo:1234, eek:1345},
    {foo: 123, eek: 456}, {foo: {foo: "bar"}, eek: {eek: "wibble"}}, {foo: ["foo"], eek: ["blah"]},
    {foo: refed_obj.setString("foo"), eek: refed_obj2.setString("bar")});
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

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();






