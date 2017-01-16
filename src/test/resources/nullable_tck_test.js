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
    Assert.assertTrue(3 === list.length);
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
    Assert.assertTrue(3 === s.length);
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


this[testName]();






