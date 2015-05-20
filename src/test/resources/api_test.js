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
  obj.methodWithObjectParam('null', null);
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

function testNullDataObjectParam() {
  obj.methodWithNullDataObjectParam(null);
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
  Assert.assertTrue(ret._jdel);
}

function testAbstractVertxGenReturn() {
  var ret = obj.methodWithAbstractVertxGenReturn();
  Assert.assertEquals("abstractchaffinch", ret.getString());
  Assert.assertTrue(ret._jdel);
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

function testThrowableReturn() {
  var ret = obj.methodWithThrowableReturn("bogies");
  Assert.assertEquals("bogies", ret.getMessage());
}

// TODO should test more than just List<Long>
function testMethodWithListParams() {
  obj.methodWithListParams(["foo", "bar"], [2, 3], [12, 13], [1234, 1345], [123, 456], [{foo: "bar"}, {eek: "wibble"}], [["foo"], ["blah"]], [refed_obj.setString("foo"), refed_obj2.setString("bar")], [{"foo":"String 1","bar":1,"wibble":1.1}, {"foo":"String 2","bar": 2,"wibble": 2.2}]);
}

function testMethodWithSetParams() {
  obj.methodWithSetParams(["foo", "bar"], [2, 3], [12, 13], [1234, 1345], [123, 456], [{foo: "bar"}, {eek: "wibble"}], [["foo"], ["blah"]], [refed_obj.setString("foo"), refed_obj2.setString("bar")], [{"foo":"String 1","bar":1,"wibble":1.1}, {"foo":"String 2","bar": 2,"wibble": 2.2}]);
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

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();






