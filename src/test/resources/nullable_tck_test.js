var Assert = org.junit.Assert;

var TestInterface = require('testmodel-js/test_interface');
var RefedInterface1 = require('testmodel-js/refed_interface1');

var obj = new TestInterface(new Packages.io.vertx.codegen.testmodel.TestInterfaceImpl());
var refed_obj = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());
var refed_obj2 = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());

var NullableTCK = require('testmodel-js/nullable_tck');
var nullableTCK = new NullableTCK(new Packages.io.vertx.codegen.testmodel.NullableTCKImpl());

var DataObjectTCK = require('testmodel-js/data_object_tck');
var dataObjectTCK = new DataObjectTCK(new Packages.io.vertx.codegen.testmodel.DataObjectTCKImpl());

var that = this;

var testUtils = require("test_utils");
var assertEquals = testUtils.assertEquals;

function testNullableByte() {
  testNullable('Byte', 67, function(val) { assertEquals(67, val) });
}

function testNullableShort() {
  testNullable('Short', 1024, function(val) { assertEquals(1024, val) });
}

function testNullableInteger() {
  testNullable('Integer', 1234567, function(val) { assertEquals(1234567, val) });
}

function testNullableLong() {
  testNullable('Long', 9876543210, function(val) { assertEquals(9876543210, val) });
}

function testNullableFloat() {
  testNullable('Float', 3.14, function(val) { assertEquals(new Packages.java.lang.Float(3.14), val) });
}

function testNullableDouble() {
  testNullable('Double', 3.1415926, function(val) { assertEquals(3.1415926, val) });
}

function testNullableBoolean() {
  testNullable('Boolean', true, function(val) { assertEquals(true, val) });
}

function testNullableString() {
  testNullable('String', 'the_string_value', function(val) { assertEquals('the_string_value', val) });
}

function testNullableChar() {
  testNullable('Char', 'f', function(val) { assertEquals('f', "" + val) });
}

function testNullableJsonObject() {
  testNullable('JsonObject', {"foo":"wibble","bar":3}, function(json) {
    assertEquals("wibble", json["foo"]);
    assertEquals(3, json["bar"]);
  });
}

function testNullableJsonArray() {
  testNullable('JsonArray', ["one","two","three"], function(array) {
    assertEquals("one", array[0]);
    assertEquals("two", array[1]);
    assertEquals("three", array[2]);
  });
}

function testNullableApi() {
  refed_obj.setString('lovely_dae');
  testNullable('Api', refed_obj, function(api_obj) {
    assertEquals('lovely_dae', api_obj.getString());
  });
}

function testNullableDataObject() {
  testNullable('DataObject', {"foo":"foo_value","bar":12345,"wibble":3.5}, function(data_obj) {
    assertEquals('foo_value', data_obj.foo);
    assertEquals(12345, data_obj.bar);
    assertEquals(3.5, data_obj.wibble);
  });
}

function testNullableEnum() {
  testNullable('Enum', "TIM", function(enumVal) { assertEquals("TIM", enumVal); });
}

function testNullableGenEnum() {
  testNullable('GenEnum', "MIKE", function(enumVal) { assertEquals("MIKE", enumVal); });
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
  assertEquals(4, count);
  Assert.assertNull(nullableTCK['methodWithNullable' + type + 'Return'](false));
  check(nullableTCK['methodWithNullable' + type + 'Return'](true));
}

function testNullableTypeVariable() {
  nullableTCK.methodWithNullableTypeVariableParam(false, "whatever");
  nullableTCK.methodWithNullableTypeVariableParam(true, null);
  var count = 0;
  nullableTCK.methodWithNullableTypeVariableHandler(true, "wibble", function(res) {
    assertEquals("wibble", res);
    count++;
  });
  nullableTCK.methodWithNullableTypeVariableHandler(false, "wibble", function(res) {
    assertEquals(null, res);
    count++;
  });
  nullableTCK.methodWithNullableTypeVariableHandlerAsyncResult(true, "sausage", function(res, err) {
    assertEquals("sausage", res);
    Assert.assertNull(err);
    count++;
  });
  nullableTCK.methodWithNullableTypeVariableHandlerAsyncResult(false, "sausage", function(res, err) {
    assertEquals(null, res);
    Assert.assertNull(err);
    count++;
  });
  assertEquals(4, count);
  assertEquals("fizz1", nullableTCK.methodWithNullableTypeVariableReturn(true, "fizz1"));
  assertEquals(null, nullableTCK.methodWithNullableTypeVariableReturn(false, "fizz2"));
}

function testNullableObject() {
  nullableTCK.methodWithNullableObjectParam(false, "object_param");
  nullableTCK.methodWithNullableObjectParam(true, null);
}

function testNullableListByte() {
  testNullableList('Byte', [12,24,-12], function(expected, actual) { assertEquals(expected, actual); });
}

function testNullableListShort() {
  testNullableList('Short', [520,1040,-520], function(expected, actual) { assertEquals(expected, actual); });
}

function testNullableListInteger() {
  testNullableList('Integer', [12345,54321,-12345], function(expected, actual) { assertEquals(expected, actual); });
}

function testNullableListLong() {
  testNullableList('Long', [123456789,987654321,-123456789], function(expected, actual) { assertEquals(new Packages.java.lang.Double(expected), new Packages.java.lang.Double(actual)); });
}

function testNullableListFloat() {
  // todo : make this pass
  // testNullableList('Float', [1.1,2.2,3.3], function(expected, actual) { assertEquals(expected, actual); });
}

function testNullableListDouble() {
  testNullableList('Double', [1.11,2.22,3.33], function(expected, actual) { assertEquals(expected, actual); });
}

function testNullableListBoolean() {
  testNullableList('Boolean', [true,false,true], assertEquals);
}

function testNullableListString() {
  testNullableList('String', ['first','second','third'], assertEquals);
}

function testNullableListChar() {
  // todo : make this pass
  // testNullableList('Char', ['x','y','z'], assertEquals);
}

function testNullableListJsonObject() {
  testNullableList('JsonObject', [{"foo":"bar"},{"juu":3}], function(expected, actual) { assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testNullableListJsonArray() {
  testNullableList('JsonArray', [["foo","bar"],["juu"]], function(expected, actual) { assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testNullableListApi() {
  refed_obj.setString('refed_is_here');
  testNullableList('Api', [refed_obj], function(expected, actual) {});
}

function testNullableListDataObject() {
  testNullableList('DataObject', [{"foo":"foo_value","bar": 12345,"wibble":5.6}], function(expected, actual) { assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testNullableListEnum() {
  testNullableList('Enum', ["TIM","JULIEN"], assertEquals);
}

function testNullableListGenEnum() {
  testNullableList('GenEnum', ["BOB","LELAND"], assertEquals);
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
  assertEquals(4, count);
  Assert.assertNull(nullableTCK['methodWithNullableList' + type + 'Return'](false));
  checkList(nullableTCK['methodWithNullableList' + type + 'Return'](true));
}

function testNullableSetByte() {
  testNullableSet('Byte', [12,24,-12], function(expected, actual) { assertEquals(expected, actual); });
}

function testNullableSetShort() {
  testNullableSet('Short', [520,1040,-520], function(expected, actual) { assertEquals(expected, actual); });
}

function testNullableSetInteger() {
  testNullableSet('Integer', [12345,54321,-12345], function(expected, actual) { assertEquals(expected, actual); });
}

function testNullableSetLong() {
  testNullableSet('Long', [123456789,987654321,-123456789], function(expected, actual) { assertEquals(new Packages.java.lang.Double(expected), new Packages.java.lang.Double(actual)); });
}

function testNullableSetFloat() {
  // todo : make this pass
  // testNullableSet('Float', [1.1,2.2,3.3], function(expected, actual) { assertEquals(expected, actual); });
}

function testNullableSetDouble() {
  testNullableSet('Double', [1.11,2.22,3.33], function(expected, actual) { assertEquals(expected, actual); });
}

function testNullableSetBoolean() {
  testNullableSet('Boolean', [true,false], assertEquals);
}

function testNullableSetString() {
  testNullableSet('String', ['first','second','third'], assertEquals);
}

function testNullableSetChar() {
  // todo : make this pass
  // testNullableSet('Char', ['x','y','z'], assertEquals);
}

function testNullableSetJsonObject() {
  testNullableList('JsonObject', [{"foo":"bar"},{"juu":3}], function(expected, actual) { assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testNullableSetJsonArray() {
  testNullableSet('JsonArray', [["foo","bar"],["juu"]], function(expected, actual) { assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testNullableSetApi() {
  refed_obj.setString('refed_is_here');
  testNullableSet('Api', [refed_obj], function(expected, actual) {});
}

function testNullableSetDataObject() {
  testNullableSet('DataObject', [{"foo":"foo_value","bar": 12345,"wibble":5.6}], function(expected, actual) { assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testNullableSetEnum() {
  testNullableSet('Enum', ["TIM","JULIEN"], assertEquals);
}

function testNullableSetGenEnum() {
  testNullableSet('GenEnum', ["BOB","LELAND"], assertEquals);
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
  assertEquals(4, count);
  Assert.assertNull(nullableTCK['methodWithNullableSet' + type + 'Return'](false));
  checkSet(nullableTCK['methodWithNullableSet' + type + 'Return'](true));
}

function testNullableMapByte() {
  testNullableMap('Byte', [1,2,3], function(expected, actual) { assertEquals(expected, actual); });
}

function testNullableMapShort() {
  testNullableMap('Short', [1,2,3], function(expected, actual) { assertEquals(expected, actual); });
}

function testNullableMapInteger() {
  testNullableMap('Integer', [1,2,3], function(expected, actual) { assertEquals(expected, actual); });
}

function testNullableMapLong() {
  testNullableMap('Long', [1,2,3], function(expected, actual) { assertEquals(new Packages.java.lang.Double(expected), new Packages.java.lang.Double(actual)); });
}

function testNullableMapFloat() {
  // todo : make this pass
  // testNullableList('Float', [1.1,2.2,3.3], function(expected, actual) { assertEquals(expected, actual); });
}

function testNullableMapDouble() {
  testNullableMap('Double', [1.11,2.22,3.33], function(expected, actual) { assertEquals(expected, actual); });
}

function testNullableMapBoolean() {
  testNullableMap('Boolean', [true,false,true], assertEquals);
}

function testNullableMapString() {
  testNullableMap('String', ['first','second','third'], assertEquals);
}

function testNullableMapChar() {
  // todo : make this pass
  // testNullableList('Char', ['x','y','z'], assertEquals);
}

function testNullableMapJsonObject() {
  testNullableMap('JsonObject', [{"foo":"bar"},{"juu":3}], function(expected, actual) { assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testNullableMapJsonArray() {
  testNullableMap('JsonArray', [["foo","bar"],["juu"]], function(expected, actual) { assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
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
  assertEquals(4, count);
  Assert.assertNull(nullableTCK['methodWithNullableMap' + type + 'Return'](false));
  checkMap(nullableTCK['methodWithNullableMap' + type + 'Return'](true));
}

function testListNullableByte() {
  testListNullable('Byte', [12,null,24], function(list) {
    assertEquals(3, list.length);
    assertEquals(12, list[0]);
    assertEquals(null, list[1]);
    assertEquals(24, list[2]);
  });
}

function testListNullableShort() {
  testListNullable('Short', [520,null,1040], function(list) {
    assertEquals(3, list.length);
    assertEquals(520, list[0]);
    assertEquals(null, list[1]);
    assertEquals(1040, list[2]);
  });
}

function testListNullableInteger() {
  testListNullable('Integer', [12345,null,54321], function(list) {
    assertEquals(3, list.length);
    assertEquals(12345, list[0]);
    assertEquals(null, list[1]);
    assertEquals(54321, list[2]);
  });
}

function testListNullableLong() {
  testListNullable('Long', [123456789,null,987654321], function(list) {
    Assert.assertTrue(3 === list.length);
    assertEquals(Number(123456789), Number(list[0]));
    assertEquals(null, list[1]);
    assertEquals(Number(987654321), Number(list[2]));
  });
}

function testListNullableFloat() {
  // Todo make this pass, currently nashorn transforms to a List<Double> which can lead to class cast exceptions
  /*
   testListNullable('Float', [1.1,null,3.3], function(list) {
   assertEquals(3, list.length);
   assertEquals(1.1, list[0]);
   assertEquals(null, list[1]);
   assertEquals(3.3, list[2],0);
   });
   */
}

function testListNullableDouble() {
  testListNullable('Double', [1.11,null,3.33], function(list) {
    assertEquals(3, list.length);
    assertEquals(1.11, list[0]);
    assertEquals(null, list[1]);
    assertEquals(3.33, list[2]);
  });
}

function testListNullableBoolean() {
  testListNullable('Boolean', [true,null,false], function(list) {
    assertEquals(3, list.length);
    assertEquals(true, list[0]);
    assertEquals(null, list[1]);
    assertEquals(false, list[2]);
  });
}

function testListNullableString() {
  testListNullable('String', ["first",null,"third"], function(list) {
    assertEquals(3, list.length);
    assertEquals("first", list[0]);
    assertEquals(null, list[1]);
    assertEquals("third", list[2]);
  });
}

function testListNullableChar() {
  testListNullable('Char', ["F",null,"R"], function(list) {
    assertEquals(3, list.length);
    assertEquals("F", list[0]);
    assertEquals(null, list[1]);
    assertEquals("R", list[2]);
  });
}

function testListNullableJsonObject() {
  testListNullable('JsonObject', [{"foo":"bar"},null,{"juu":3}], function(list) {
    assertEquals("bar", list[0].foo);
    assertEquals(null, list[1]);
    assertEquals(3, list[2].juu);
  });
}

function testListNullableJsonArray() {
  testListNullable('JsonArray', [["foo","bar"],null,["juu"]], function(list) {
    assertEquals("foo", list[0][0]);
    assertEquals("bar", list[0][1]);
    assertEquals(null, list[1]);
    assertEquals("juu", list[2][0]);
  });
}

function testListNullableApi() {
  refed_obj.setString('first');
  refed_obj2.setString('third');
  testListNullable('Api', [refed_obj,null,refed_obj2], function(list) {
    assertEquals("first", list[0].getString());
    Assert.assertNull(list[1]);
    assertEquals("third", list[2].getString());
  });
}

function testListNullableDataObject() {
  testListNullable('DataObject', [{"foo":"first","bar":1,"wibble":1.1},null,{"foo":"third","bar":3,"wibble":3.3}], function(list) {
    assertEquals("first", list[0].foo);
    assertEquals(1, list[0].bar);
    assertEquals(1.1, list[0].wibble);
    Assert.assertNull(list[1]);
    assertEquals("third", list[2].foo);
    assertEquals(3, list[2].bar);
    assertEquals(3.3, list[2].wibble);
  });
}

function testListNullableEnum() {
  testListNullable('Enum', ['TIM',null,'JULIEN'], function(list) {
    assertEquals("TIM", list[0]);
    Assert.assertNull(list[1]);
    assertEquals("JULIEN", list[2]);
  });
}

function testListNullableGenEnum() {
  testListNullable('GenEnum', ['BOB',null,'LELAND'], function(list) {
    assertEquals("BOB", list[0]);
    Assert.assertNull(list[1]);
    assertEquals("LELAND", list[2]);
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
  assertEquals(2, count);
}

function testSetNullableByte() {
  testSetNullable('Byte', [12,null,24], function(s) {
    assertEquals(3, s.length);
    assertEquals(12, s[0]);
    assertEquals(null, s[1]);
    assertEquals(24, s[2]);
  });
}

function testSetNullableShort() {
  testSetNullable('Short', [520,null,1040], function(s) {
    assertEquals(3, s.length);
    assertEquals(520, s[0]);
    assertEquals(null, s[1]);
    assertEquals(1040, s[2]);
  });
}

function testSetNullableInteger() {
  testSetNullable('Integer', [12345,null,54321], function(s) {
    assertEquals(3, s.length);
    assertEquals(12345, s[0]);
    assertEquals(null, s[1]);
    assertEquals(54321, s[2]);
  });
}

function testSetNullableLong() {
  testSetNullable('Long', [123456789,null,987654321], function(s) {
    Assert.assertTrue(3 === s.length);
    assertEquals(Number(123456789), Number(s[0]));
    assertEquals(null, s[1]);
    assertEquals(Number(987654321), Number(s[2]));
  });
}

function testSetNullableFloat() {
  // Todo make this pass, currently nashorn transforms to a Set<Double> which can lead to class cast exceptions
  /*
   testSetNullable('Float', [1.1,null,3.3], function(s) {
   assertEquals(3, s.length);
   assertEquals(1.1, s[0]);
   assertEquals(null, s[1]);
   assertEquals(3.3, s[2],0);
   });
   */
}

function testSetNullableDouble() {
  testSetNullable('Double', [1.11,null,3.33], function(s) {
    assertEquals(3, s.length);
    assertEquals(1.11, s[0]);
    assertEquals(null, s[1]);
    assertEquals(3.33, s[2]);
  });
}

function testSetNullableBoolean() {
  testSetNullable('Boolean', [true,null,false], function(s) {
    assertEquals(3, s.length);
    assertEquals(true, s[0]);
    assertEquals(null, s[1]);
    assertEquals(false, s[2]);
  });
}

function testSetNullableString() {
  testSetNullable('String', ["first",null,"third"], function(s) {
    assertEquals(3, s.length);
    assertEquals("first", s[0]);
    assertEquals(null, s[1]);
    assertEquals("third", s[2]);
  });
}

function testSetNullableChar() {
  testSetNullable('Char', ["F",null,"R"], function(s) {
    assertEquals(3, s.length);
    assertEquals("F", s[0]);
    assertEquals(null, s[1]);
    assertEquals("R", s[2]);
  });
}

function testSetNullableJsonObject() {
  testSetNullable('JsonObject', [{"foo":"bar"},null,{"juu":3}], function(s) {
    assertEquals("bar", s[0].foo);
    assertEquals(null, s[1]);
    assertEquals(3, s[2].juu);
  });
}

function testSetNullableJsonArray() {
  testSetNullable('JsonArray', [["foo","bar"],null,["juu"]], function(s) {
    assertEquals("foo", s[0][0]);
    assertEquals("bar", s[0][1]);
    assertEquals(null, s[1]);
    assertEquals("juu", s[2][0]);
  });
}

function testSetNullableApi() {
  refed_obj.setString('first');
  refed_obj2.setString('third');
  testSetNullable('Api', [refed_obj,null,refed_obj2], function(s) {
    assertEquals("first", s[0].getString());
    Assert.assertNull(s[1]);
    assertEquals("third", s[2].getString());
  });
}

function testSetNullableDataObject() {
  testSetNullable('DataObject', [{"foo":"first","bar":1,"wibble":1.1},null,{"foo":"third","bar":3,"wibble":3.3}], function(s) {
    assertEquals("first", s[0].foo);
    assertEquals(1, s[0].bar);
    assertEquals(1.1, s[0].wibble);
    Assert.assertNull(s[1]);
    assertEquals("third", s[2].foo);
    assertEquals(3, s[2].bar);
    assertEquals(3.3, s[2].wibble);
  });
}

function testSetNullableEnum() {
  testSetNullable('Enum', ['TIM',null,'JULIEN'], function(s) {
    assertEquals("TIM", s[0]);
    Assert.assertNull(s[1]);
    assertEquals("JULIEN", s[2]);
  });
}

function testSetNullableGenEnum() {
  testSetNullable('GenEnum', ['BOB',null,'LELAND'], function(s) {
    assertEquals("BOB", s[0]);
    Assert.assertNull(s[1]);
    assertEquals("LELAND", s[2]);
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
  assertEquals(2, count);
}

function testMapNullableByte() {
  testMapNullable('Byte', [12,null,24], function(expected, actual) { assertEquals(expected, actual); });
}

function testMapNullableShort() {
  testMapNullable('Short', [520,null,1040], function(expected, actual) { assertEquals(expected, actual); });
}

function testMapNullableInteger() {
  testMapNullable('Integer', [12345,null,54321], function(expected, actual) { assertEquals(expected, actual); });
}

function testMapNullableLong() {
  testMapNullable('Long', [123456789,null,987654321], function(expected, actual) { assertEquals(new Packages.java.lang.Double(expected), new Packages.java.lang.Double(actual)); });
}

function testMapNullableFloat() {
  // todo : make this pass
  // testNullableList('Float', [1.1,2.2,3.3], function(expected, actual) { assertEquals(expected, actual); });
}

function testMapNullableDouble() {
  testMapNullable('Double', [1.11,null,3.33], function(expected, actual) { assertEquals(expected, actual); });
}

function testMapNullableBoolean() {
  testMapNullable('Boolean', [true,null,false], assertEquals);
}

function testMapNullableString() {
  testMapNullable('String', ['first',null,'third'], assertEquals);
}

function testMapNullableChar() {
  // todo : make this pass
  // testNullableList('Char', ['x','y','z'], assertEquals);
}

function testMapNullableJsonObject() {
  testMapNullable('JsonObject', [{"foo":"bar"},null,{"juu":3}], function(expected, actual) { assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testMapNullableJsonArray() {
  testMapNullable('JsonArray', [["foo","bar"],null,["juu"]], function(expected, actual) { assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
}

function testMapNullableApi() {
  refed_obj.setString('first');
  refed_obj2.setString('third');
  testMapNullableIn('Api', [refed_obj,null,refed_obj2], function(expected, actual) { assertEquals(JSON.stringify(expected),JSON.stringify(actual)); });
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
  assertEquals(2, count);
  checkMap(nullableTCK['methodWithMapNullable' + type + 'Return']());
}

function testNullableHandler() {
  var count = 0;
  nullableTCK.methodWithNullableHandler(true, null);
  nullableTCK.methodWithNullableHandler(false, function(res) {
    assertEquals("the_string_value", res);
    count++;
  });
  nullableTCK.methodWithNullableHandlerAsyncResult(true, null);
  nullableTCK.methodWithNullableHandlerAsyncResult(false, function(res, err) {
    assertEquals("the_string_value", res);
    Assert.assertNull(err);
    count++;
  });
  assertEquals(2, count);
}


this[testName]();






