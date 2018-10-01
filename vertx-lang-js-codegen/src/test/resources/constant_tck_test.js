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

var ConstantTCK = require('testmodel-js/constant_tck');
var RefedInterface1 = require('testmodel-js/refed_interface1');

var refed_obj = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());
var refed_obj2 = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());

var testUtils = require("test_utils");
var assertEquals = testUtils.assertEquals;

function testBasic() {
  assertEquals(ConstantTCK.BYTE, 123);
  assertEquals(ConstantTCK.SHORT, 12345);
  assertEquals(ConstantTCK.INT, 12345464);
  assertEquals(ConstantTCK.LONG, 65675123);
  assertEquals(ConstantTCK.FLOAT, 1.23);
  assertEquals(ConstantTCK.DOUBLE, 3.34535);
  Assert.assertTrue(ConstantTCK.BOOLEAN);
  assertEquals("Y", "" + ConstantTCK.CHAR);
  assertEquals("orangutan", ConstantTCK.STRING);
}

function testVertxGen() {
  var ret = ConstantTCK.VERTX_GEN;
  assertEquals("chaffinch", ret.getString());
  Assert.assertTrue(ret._jdel);
}

function testDataObject() {
  var ret = ConstantTCK.DATA_OBJECT;
  Assert.assertTrue(typeof ret === 'object');
  assertEquals("foo", ret.foo);
  assertEquals(123, ret.bar);
  assertEquals(0.0, ret.wibble);
}

function testJson() {
  var ret = ConstantTCK.JSON_OBJECT;
  Assert.assertTrue(typeof ret === 'object')
  assertEquals("stilton", ret.cheese);
  ret = ConstantTCK.JSON_ARRAY;
  Assert.assertTrue(typeof ret === 'object')
  Assert.assertTrue(ret instanceof Array)
  assertEquals("socks", ret[0]);
  assertEquals("shoes", ret[1]);
}

function testEnum() {
  assertEquals("JULIEN", ConstantTCK.ENUM);
}

function testThrowable() {
  assertEquals("test", ConstantTCK.THROWABLE.getMessage());
}

function testObject() {
  assertEquals(ConstantTCK.OBJECT, 4);
}

function testNullable() {
  var ret = ConstantTCK.NULLABLE_NON_NULL;
  assertEquals("chaffinch", ret.getString());
  Assert.assertTrue(ret._jdel);
  Assert.assertNull(ConstantTCK.NULLABLE_NULL)
}

function checkArray(array) {
  Assert.assertTrue(Array.isArray(array));
  assertEquals(array.length, 1);
}

function testList() {
  checkArray(ConstantTCK.LONG_LIST);
  assertEquals(ConstantTCK.LONG_LIST[0], 65675123);
  checkArray(ConstantTCK.VERTX_GEN_LIST);
  assertEquals(ConstantTCK.VERTX_GEN_LIST[0].getString(), 'chaffinch');
  checkArray(ConstantTCK.JSON_OBJECT_LIST);
  assertEquals(ConstantTCK.JSON_OBJECT_LIST[0]['cheese'], 'stilton');
  checkArray(ConstantTCK.JSON_ARRAY_LIST);
  assertEquals(ConstantTCK.JSON_ARRAY_LIST[0][0], 'socks');
  assertEquals(ConstantTCK.JSON_ARRAY_LIST[0][1], 'shoes');
  assertEquals(ConstantTCK.JSON_ARRAY_LIST[0].length, 2);
  checkArray(ConstantTCK.DATA_OBJECT_LIST);
  assertEquals("" + ConstantTCK.DATA_OBJECT_LIST[0].foo, 'foo');
  assertEquals("" + ConstantTCK.DATA_OBJECT_LIST[0].bar, 123);
  checkArray(ConstantTCK.ENUM_LIST);
  assertEquals("" + ConstantTCK.ENUM_LIST[0], 'JULIEN');
}

function testSet() {
  checkArray(ConstantTCK.LONG_SET);
  assertEquals(ConstantTCK.LONG_SET[0], 65675123);
  checkArray(ConstantTCK.VERTX_GEN_SET);
  assertEquals(ConstantTCK.VERTX_GEN_SET[0].getString(), 'chaffinch');
  checkArray(ConstantTCK.JSON_OBJECT_SET);
  assertEquals(ConstantTCK.JSON_OBJECT_SET[0]['cheese'], 'stilton');
  checkArray(ConstantTCK.JSON_ARRAY_SET);
  assertEquals(ConstantTCK.JSON_ARRAY_SET[0][0], 'socks');
  assertEquals(ConstantTCK.JSON_ARRAY_SET[0][1], 'shoes');
  assertEquals(ConstantTCK.JSON_ARRAY_SET[0].length, 2);
  checkArray(ConstantTCK.DATA_OBJECT_SET);
  assertEquals("" + ConstantTCK.DATA_OBJECT_SET[0].foo, 'foo');
  assertEquals("" + ConstantTCK.DATA_OBJECT_SET[0].bar, 123);
  checkArray(ConstantTCK.ENUM_SET);
  assertEquals("" + ConstantTCK.ENUM_SET[0], 'JULIEN');
}

function testMap() {
  assertEquals(ConstantTCK.LONG_MAP['foo'], 65675123);
  assertEquals(ConstantTCK.JSON_OBJECT_MAP['foo']['cheese'], 'stilton');
  assertEquals(ConstantTCK.JSON_ARRAY_MAP['foo'][0], 'socks');
  assertEquals(ConstantTCK.JSON_ARRAY_MAP['foo'][1], 'shoes');
  assertEquals(ConstantTCK.JSON_ARRAY_MAP['foo'].length, 2);
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();
