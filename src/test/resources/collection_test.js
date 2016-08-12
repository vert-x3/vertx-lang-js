/*
 * Copyright 2016 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

var Assert = org.junit.Assert;

var CollectionTCK = require('testmodel-js/collection_tck');
var RefedInterface1 = require('testmodel-js/refed_interface1');

var tck = new CollectionTCK(new Packages.io.vertx.codegen.testmodel.CollectionTCKImpl());
var refed_obj = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());
var refed_obj2 = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());

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
  tck.methodWithListOfDataObjectsParam(dataObjects);
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
  tck.methodWithSetOfDataObjectsParam(dataObjects);
}

function testMethodWithHandlerListAndSet() {
  var count = 0;
  tck.methodWithHandlerListAndSet(function (listString) {
    Assert.assertTrue(typeof listString === 'object');
    Assert.assertEquals("foo", listString[0]);
    Assert.assertEquals("bar", listString[1]);
    Assert.assertEquals("wibble", listString[2]);
    count++;
  }, function (listInt) {
    Assert.assertTrue(typeof listInt === 'object');
    Assert.assertEquals(5, listInt[0], 0);
    Assert.assertEquals(12, listInt[1], 0);
    Assert.assertEquals(100, listInt[2], 0);
    count++;
  }, function (setString) {
    Assert.assertTrue(typeof setString === 'object');
    Assert.assertEquals("foo", setString[0]);
    Assert.assertEquals("bar", setString[1]);
    Assert.assertEquals("wibble", setString[2]);
    count++;
  }, function (setInt) {
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
  tck.methodWithHandlerAsyncResultListString(function (listString, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof listString === 'object');
    Assert.assertEquals("foo", listString[0]);
    Assert.assertEquals("bar", listString[1]);
    Assert.assertEquals("wibble", listString[2]);
    count++;
  });
  tck.methodWithHandlerAsyncResultListInteger(function (listInt, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof listInt === 'object');
    Assert.assertEquals(5, listInt[0], 0);
    Assert.assertEquals(12, listInt[1], 0);
    Assert.assertEquals(100, listInt[2], 0);
    count++;
  });
  tck.methodWithHandlerAsyncResultSetString(function (setString, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof setString === 'object');
    Assert.assertEquals("foo", setString[0]);
    Assert.assertEquals("bar", setString[1]);
    Assert.assertEquals("wibble", setString[2]);
    count++;
  });
  tck.methodWithHandlerAsyncResultSetInteger(function (setInt, err) {
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
  tck.methodWithHandlerListVertxGen(function (listVertxGen) {
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
  tck.methodWithHandlerListAbstractVertxGen(function (listVertxGen) {
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
  tck.methodWithHandlerAsyncResultListVertxGen(function (listVertxGen, err) {
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
  tck.methodWithHandlerAsyncResultListAbstractVertxGen(function (listVertxGen, err) {
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
  tck.methodWithHandlerSetVertxGen(function (setVertxGen) {
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
  tck.methodWithHandlerSetAbstractVertxGen(function (setVertxGen) {
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
  tck.methodWithHandlerAsyncResultSetVertxGen(function (setVertxGen, err) {
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
  tck.methodWithHandlerAsyncResultSetAbstractVertxGen(function (setVertxGen, err) {
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
  tck.methodWithHandlerListJsonObject(function (listJsonObject) {
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
  tck.methodWithHandlerListNullJsonObject(function (listJsonObject) {
    Assert.assertTrue(typeof listJsonObject === 'object');
    Assert.assertNull(listJsonObject[0]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerListComplexJsonObject() {
  var count = 0;
  tck.methodWithHandlerListComplexJsonObject(function (listJsonObject) {
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
  tck.methodWithHandlerAsyncResultListJsonObject(function (listJsonObject, err) {
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
  tck.methodWithHandlerAsyncResultListComplexJsonObject(function (listJsonObject, err) {
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
  tck.methodWithHandlerAsyncResultListNullJsonObject(function (listJsonObject, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof listJsonObject === 'object');
    Assert.assertNull(listJsonObject[0]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerSetJsonObject() {
  var count = 0;
  tck.methodWithHandlerSetJsonObject(function (setJsonObject) {
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
  tck.methodWithHandlerSetNullJsonObject(function (setJsonObject) {
    Assert.assertTrue(typeof setJsonObject === 'object');
    Assert.assertNull(setJsonObject[0]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerSetComplexJsonObject() {
  var count = 0;
  tck.methodWithHandlerSetComplexJsonObject(function (setJsonObject) {
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
  tck.methodWithHandlerAsyncResultSetJsonObject(function (setJsonObject, err) {
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
  tck.methodWithHandlerAsyncResultSetNullJsonObject(function (setJsonObject, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof setJsonObject === 'object');
    Assert.assertNull(setJsonObject[0]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultSetComplexJsonObject() {
  var count = 0;
  tck.methodWithHandlerAsyncResultSetComplexJsonObject(function (setJsonObject, err) {
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
  tck.methodWithHandlerListJsonArray(function (listJsonArray) {
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
  tck.methodWithHandlerListNullJsonArray(function (listJsonArray) {
    Assert.assertTrue(typeof listJsonArray === 'object');
    Assert.assertNull(listJsonArray[0]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerListComplexJsonArray() {
  var count = 0;
  tck.methodWithHandlerListComplexJsonArray(function (listJsonArray) {
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
  tck.methodWithHandlerAsyncResultListJsonArray(function (listJsonArray, err) {
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
  tck.methodWithHandlerAsyncResultListNullJsonArray(function (listJsonArray, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof listJsonArray === 'object');
    Assert.assertNull(listJsonArray[0]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultListComplexJsonArray() {
  var count = 0;
  tck.methodWithHandlerAsyncResultListComplexJsonArray(function (listJsonArray, err) {
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
  tck.methodWithHandlerSetJsonArray(function (setJsonArray) {
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
  tck.methodWithHandlerSetNullJsonArray(function (setJsonArray) {
    Assert.assertTrue(typeof setJsonArray === 'object');
    Assert.assertNull(setJsonArray[0]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerSetComplexJsonArray() {
  var count = 0;
  tck.methodWithHandlerSetComplexJsonArray(function (setJsonArray) {
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
  tck.methodWithHandlerAsyncResultSetJsonArray(function (setJsonArray, err) {
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
  tck.methodWithHandlerAsyncResultSetNullJsonArray(function (setJsonArray, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof setJsonArray === 'object');
    Assert.assertNull(setJsonArray[0]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultSetComplexJsonArray() {
  var count = 0;
  tck.methodWithHandlerAsyncResultSetComplexJsonArray(function (setJsonArray, err) {
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
  tck.methodWithHandlerAsyncResultListDataObject(function (listDataObject) {
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
  tck.methodWithHandlerAsyncResultListNullDataObject(function (listDataObject) {
    Assert.assertTrue(typeof listDataObject === 'object');
    Assert.assertNull(listDataObject[0]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerSetDataObject() {
  var count = 0;
  tck.methodWithHandlerAsyncResultSetDataObject(function (setDataObject) {
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
  tck.methodWithHandlerAsyncResultSetNullDataObject(function (setDataObject) {
    Assert.assertTrue(typeof setDataObject === 'object');
    Assert.assertNull(setDataObject[0]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultListDataObject() {
  var count = 0;
  tck.methodWithHandlerAsyncResultListDataObject(function (listDataObject, err) {
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
  tck.methodWithHandlerAsyncResultListNullDataObject(function (listDataObject, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof listDataObject === 'object');
    Assert.assertNull(listDataObject[0]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultSetDataObject() {
  var count = 0;
  tck.methodWithHandlerAsyncResultSetDataObject(function (setDataObject, err) {
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
  tck.methodWithHandlerAsyncResultSetNullDataObject(function (setDataObject, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof setDataObject === 'object');
    Assert.assertNull(setDataObject[0]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerListEnum() {
  var count = 0;
  tck.methodWithHandlerListEnum(function (listEnum) {
    Assert.assertTrue(typeof listEnum === 'object');
    Assert.assertEquals('TIM', listEnum[0]);
    Assert.assertEquals('JULIEN', listEnum[1]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerSetEnum() {
  var count = 0;
  tck.methodWithHandlerListEnum(function (setEnum) {
    Assert.assertTrue(typeof setEnum === 'object');
    Assert.assertEquals('TIM', setEnum[0]);
    Assert.assertEquals('JULIEN', setEnum[1]);
    count++;
  });
  Assert.assertEquals(1, count, 0);
}

function testMethodWithHandlerAsyncResultListEnum() {
  var count = 0;
  tck.methodWithHandlerAsyncResultListEnum(function (listEnum, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof listEnum === 'object');
    Assert.assertEquals('TIM', listEnum[0]);
    Assert.assertEquals('JULIEN', listEnum[1]);
    count++;
  });
}

function testMethodWithHandlerAsyncResultSetEnum() {
  var count = 0;
  tck.methodWithHandlerAsyncResultListEnum(function (setEnum, err) {
    Assert.assertNull(err);
    Assert.assertTrue(typeof setEnum === 'object');
    Assert.assertEquals('TIM', setEnum[0]);
    Assert.assertEquals('JULIEN', setEnum[1]);
    count++;
  });
}

function testMapReturn() {
  var count = 0;
  var map = tck.methodWithMapReturn(function (op) {
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
  map.forEach(function (value, key) {
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
  var map = tck.methodWithMapStringReturn(function () {
  });
  Assert.assertTrue(typeof map === 'object');
  Assert.assertEquals("bar", map["foo"]);
  Assert.assertEquals("bar", map.foo);
  Assert.assertTrue(typeof map["foo"] === 'string');
}

function testMapJsonObjectReturn() {
  var map = tck.methodWithMapJsonObjectReturn(function () {
  });
  Assert.assertTrue(typeof map === 'object');
  var json = map["foo"];
  Assert.assertTrue(typeof json === 'object');
  Assert.assertEquals("eek", json["wibble"]);
  var count = 0;
  map.forEach(function (val, index) {
    Assert.assertTrue(count == 0);
    Assert.assertEquals("foo", index);
    Assert.assertTrue(typeof val === 'object');
    Assert.assertEquals("eek", val["wibble"]);
  });
}

function testMapComplexJsonObjectReturn() {
  var map = tck.methodWithMapComplexJsonObjectReturn(function () {
  });
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
  var map = tck.methodWithMapJsonArrayReturn(function () {
  });
  Assert.assertTrue(typeof map === 'object');
  var arr = map["foo"];
  Assert.assertTrue(typeof arr === 'object');
  Assert.assertTrue(arr instanceof Array);
  Assert.assertEquals("wibble", arr[0]);
}

function testMapLongReturn() {
  var map = tck.methodWithMapLongReturn(function () {
  });
  Assert.assertTrue(typeof map === 'object');
  Assert.assertTrue(123 === map["foo"]);
  Assert.assertTrue(123 === map.foo);
  Assert.assertTrue(typeof map["foo"] === 'number');
}

function testMapNullReturn() {
  var map = tck.methodWithNullMapReturn();
  Assert.assertTrue(map === null);
}

function testListStringReturn() {
  var list = tck.methodWithListStringReturn();
  Assert.assertTrue(typeof list === 'object');
  Assert.assertEquals("foo", list[0]);
  Assert.assertEquals("bar", list[1]);
  Assert.assertEquals("wibble", list[2]);
}

function testListLongReturn() {
  var list = tck.methodWithListLongReturn();
  Assert.assertTrue(typeof list === 'object');
  Assert.assertTrue(123 === list[0]);
  Assert.assertTrue(456 === list[1]);
}

function testListJsonObjectReturn() {
  var list = tck.methodWithListJsonObjectReturn();
  Assert.assertTrue(typeof list === 'object');
  Assert.assertTrue(list instanceof Array);
  var obj1 = list[0];
  var obj2 = list[1];
  Assert.assertEquals("bar", obj1.foo);
  Assert.assertEquals("eek", obj2.blah);
}

function testListComplexJsonObjectReturn() {
  var list = tck.methodWithListComplexJsonObjectReturn();
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
  var list = tck.methodWithListJsonArrayReturn();
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
  var list = tck.methodWithListComplexJsonArrayReturn();
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
  var list = tck.methodWithListVertxGenReturn();
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
  var listDataObject = tck.methodWithListDataObjectReturn();
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
  var listEnum = tck.methodWithListEnumReturn();
  Assert.assertTrue(typeof listEnum === 'object');
  Assert.assertEquals("JULIEN", listEnum[0]);
  Assert.assertEquals("TIM", listEnum[1]);
}

function testSetStringReturn() {
  var setString = tck.methodWithSetStringReturn();
  Assert.assertTrue(typeof setString === 'object');
  Assert.assertEquals("foo", setString[0]);
  Assert.assertEquals("bar", setString[1]);
  Assert.assertEquals("wibble", setString[2]);
}

function testSetLongReturn() {
  var list = tck.methodWithSetLongReturn();
  Assert.assertTrue(typeof list === 'object');
  Assert.assertTrue(123 === list[0]);
  Assert.assertTrue(456 === list[1]);
}

function testSetJsonObjectReturn() {
  var list = tck.methodWithSetJsonObjectReturn();
  Assert.assertTrue(typeof list === 'object');
  Assert.assertTrue(list instanceof Array);
  var obj1 = list[0];
  var obj2 = list[1];
  Assert.assertEquals("bar", obj1.foo);
  Assert.assertEquals("eek", obj2.blah);
}

function testSetComplexJsonObjectReturn() {
  var list = tck.methodWithSetComplexJsonObjectReturn();
  Assert.assertTrue(typeof list === 'object');
  Assert.assertTrue(list instanceof Array);
  var obj1 = list[0];
  Assert.assertEquals("tartan", obj1.outer.socks);
  Assert.assertEquals("yellow", obj1.list[0]);
  Assert.assertEquals("blue", obj1.list[1]);
}

function testSetJsonArrayReturn() {
  var list = tck.methodWithSetJsonArrayReturn();
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
  var _set = tck.methodWithSetComplexJsonArrayReturn();
  var arr1 = _set[0];
  var arr2 = _set[1];
  Assert.assertTrue(arr1 instanceof Array);
  Assert.assertTrue(arr2 instanceof Array);
  Assert.assertEquals("hello", arr1[0].foo);
  Assert.assertEquals("bye", arr2[0].bar);
}

function testSetVertxGenReturn() {
  var list = tck.methodWithSetVertxGenReturn();
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
  var setDataObject = tck.methodWithSetDataObjectReturn();
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
  var setEnum = tck.methodWithSetEnumReturn();
  Assert.assertTrue(typeof setEnum === 'object');
  Assert.assertEquals("JULIEN", setEnum[0]);
  Assert.assertEquals("TIM", setEnum[1]);
}

function testMapComplexJsonArrayReturn() {
  var map = tck.methodWithMapComplexJsonArrayReturn(function () {
  });
  Assert.assertTrue(typeof map === 'object');
  var complex = map["foo"];
  Assert.assertTrue(complex instanceof Array);
  Assert.assertEquals("hello", complex[0].foo);
  Assert.assertEquals("bye", complex[1].bar);
}

function testMethodWithListParams() {
  tck.methodWithListParams(["foo", "bar"], [2, 3], [12, 13], [1234, 1345], [123, 456], [{foo: "bar"}, {eek: "wibble"}], [["foo"], ["blah"]], [refed_obj.setString("foo"), refed_obj2.setString("bar")], [{
    "foo": "String 1",
    "bar": 1,
    "wibble": 1.1
  }, {"foo": "String 2", "bar": 2, "wibble": 2.2}], ["JULIEN", "TIM"]);
}

function testMethodWithSetParams() {
  tck.methodWithSetParams(["foo", "bar"], [2, 3], [12, 13], [1234, 1345], [123, 456], [{foo: "bar"}, {eek: "wibble"}], [["foo"], ["blah"]], [refed_obj.setString("foo"), refed_obj2.setString("bar")], [{
    "foo": "String 1",
    "bar": 1,
    "wibble": 1.1
  }, {"foo": "String 2", "bar": 2, "wibble": 2.2}], ["JULIEN", "TIM"]);
}

function testMethodWithMapParams() {
  tck.methodWithMapParams({foo: "bar", eek: "wibble"}, {foo: 2, eek: 3}, {foo: 12, eek: 13}, {foo: 1234, eek: 1345},
    {foo: 123, eek: 456}, {foo: {foo: "bar"}, eek: {eek: "wibble"}}, {foo: ["foo"], eek: ["blah"]},
    {foo: refed_obj.setString("foo"), eek: refed_obj2.setString("bar")});
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();
