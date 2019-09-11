var Assert = org.junit.Assert;
var testUtils = require("test_utils");
var assertEquals = testUtils.assertEquals;
var assertContains = testUtils.assertContains;
var assertNull = Assert.assertNull;

var JsonMapperTCK = require('testmodel-js/json_mapper_tck');
var jsonMapperTCK = new JsonMapperTCK(new Packages.io.vertx.codegen.testmodel.JsonMapperTCKImpl());

var that = this;

// JS number <-> Java Integer <-> MyPojoToInteger

function testMethodWithTypeToIntegerParam() {
  jsonMapperTCK.methodWithTypeToIntegerParam(1);
}

function testMethodWithListOfTypeToIntegerParam() {
  jsonMapperTCK.methodWithListOfTypeToIntegerParam([1, 2]);
}

function testMethodWithSetOfTypeToIntegerParam() {
  jsonMapperTCK.methodWithSetOfTypeToIntegerParam([1, 2]);
}

function testMethodWithMapOfTypeToIntegerParam() {
  jsonMapperTCK.methodWithMapOfTypeToIntegerParam({a: 1, b: 2});
}

function testMethodWithTypeToIntegerReturn() {
  assertTypeToInteger(jsonMapperTCK.methodWithTypeToIntegerReturn());
}

function testMethodWithListOfTypeToIntegerReturn() {
  assertListSetTypeToInteger(jsonMapperTCK.methodWithListOfTypeToIntegerReturn());
}

function testMethodWithSetOfTypeToIntegerReturn() {
  assertListSetTypeToInteger(jsonMapperTCK.methodWithSetOfTypeToIntegerReturn());
}

function testMethodWithMapOfTypeToIntegerReturn() {
  assertMapTypeToInteger(jsonMapperTCK.methodWithMapOfTypeToIntegerReturn());
}

function testMethodWithHandlerTypeToIntegerParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerTypeToIntegerParam(function (result) {
    assertTypeToInteger(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerListOfTypeToIntegerParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerListOfTypeToIntegerParam(function (result) {
    assertListSetTypeToInteger(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerSetOfTypeToIntegerParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerSetOfTypeToIntegerParam(function (result) {
    assertListSetTypeToInteger(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerMapOfTypeToIntegerParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerMapOfTypeToIntegerParam(function (result) {
    assertMapTypeToInteger(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultTypeToIntegerParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerAsyncResultTypeToIntegerParam(function (result, err) {
    assertTypeToInteger(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultListOfTypeToIntegerParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerAsyncResultListOfTypeToIntegerParam(function (result, err) {
    assertListSetTypeToInteger(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultSetOfTypeToIntegerParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerAsyncResultSetOfTypeToIntegerParam(function (result, err) {
    assertListSetTypeToInteger(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultMapOfTypeToIntegerParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerAsyncResultMapOfTypeToIntegerParam(function (result, err) {
    assertMapTypeToInteger(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function assertTypeToInteger(result) {
  assertEquals("number", typeof result)
  assertEquals(1, result)
}

function assertListSetTypeToInteger(result) {
  assertEquals("object", typeof result)
  assertEquals("number", typeof result[0])
  assertEquals(1, result[0])
  assertEquals("number", typeof result[1])
  assertEquals(2, result[1])
}

function assertMapTypeToInteger(result) {
  assertEquals("object", typeof result)
  assertEquals("number", typeof result["a"])
  assertEquals(1, result["a"])
  assertEquals("number", typeof result["b"])
  assertEquals(2, result["b"])
}

// JS string <-> Java String <-> ZonedDateTime

function testMethodWithTypeToStringParam() {
  jsonMapperTCK.methodWithTypeToStringParam("2019-04-03T14:30:05.083+02:00[Europe/Rome]");
}

function testMethodWithListOfTypeToStringParam() {
  jsonMapperTCK.methodWithListOfTypeToStringParam(["2019-04-03T14:30:05.083+02:00[Europe/Rome]", "2019-04-04T14:30:05.083+02:00[Europe/Rome]"]);
}

function testMethodWithSetOfTypeToStringParam() {
  jsonMapperTCK.methodWithSetOfTypeToStringParam(["2019-04-03T14:30:05.083+02:00[Europe/Rome]", "2019-04-04T14:30:05.083+02:00[Europe/Rome]"]);
}

function testMethodWithMapOfTypeToStringParam() {
  jsonMapperTCK.methodWithMapOfTypeToStringParam({a: "2019-04-03T14:30:05.083+02:00[Europe/Rome]", b: "2019-04-04T14:30:05.083+02:00[Europe/Rome]"});
}

function testMethodWithTypeToStringReturn() {
  assertTypeToString(jsonMapperTCK.methodWithTypeToStringReturn());
}

function testMethodWithListOfTypeToStringReturn() {
  assertListTypeToString(jsonMapperTCK.methodWithListOfTypeToStringReturn());
}

function testMethodWithSetOfTypeToStringReturn() {
  assertSetTypeToString(jsonMapperTCK.methodWithSetOfTypeToStringReturn());
}

function testMethodWithMapOfTypeToStringReturn() {
  assertMapTypeToString(jsonMapperTCK.methodWithMapOfTypeToStringReturn());
}

function testMethodWithHandlerTypeToStringParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerTypeToStringParam(function (result) {
    assertTypeToString(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerListOfTypeToStringParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerListOfTypeToStringParam(function (result) {
    assertListTypeToString(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerSetOfTypeToStringParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerSetOfTypeToStringParam(function (result) {
    assertSetTypeToString(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerMapOfTypeToStringParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerMapOfTypeToStringParam(function (result) {
    assertMapTypeToString(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultTypeToStringParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerAsyncResultTypeToStringParam(function (result, err) {
    assertTypeToString(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultListOfTypeToStringParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerAsyncResultListOfTypeToStringParam(function (result, err) {
    assertListTypeToString(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultSetOfTypeToStringParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerAsyncResultSetOfTypeToStringParam(function (result, err) {
    assertSetTypeToString(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultMapOfTypeToStringParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerAsyncResultMapOfTypeToStringParam(function (result, err) {
    assertMapTypeToString(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function assertTypeToString(result) {
  assertEquals("string", typeof result)
  assertEquals("2019-04-03T14:30:05.083+02:00[Europe/Rome]", result)
}

function assertListTypeToString(result) {
  assertEquals("object", typeof result)
  assertEquals("string", typeof result[0])
  assertEquals("2019-04-03T14:30:05.083+02:00[Europe/Rome]", result[0])
  assertEquals("string", typeof result[1])
  assertEquals("2019-04-04T14:30:05.083+02:00[Europe/Rome]", result[1])
}

function assertSetTypeToString(result) {
  assertEquals("object", typeof result)
  assertEquals("string", typeof result[0])
  assertEquals("string", typeof result[1])
  assertContains("2019-04-03T14:30:05.083+02:00[Europe/Rome]", result)
  assertContains("2019-04-04T14:30:05.083+02:00[Europe/Rome]", result)
}

function assertMapTypeToString(result) {
  assertEquals("object", typeof result)
  assertEquals("string", typeof result["a"])
  assertEquals("2019-04-03T14:30:05.083+02:00[Europe/Rome]", result["a"])
  assertEquals("string", typeof result["b"])
  assertEquals("2019-04-04T14:30:05.083+02:00[Europe/Rome]", result["b"])
}

// JS object <-> Java JsonArray <-> MyPojoToJsonArray

function testMethodWithTypeToJsonArrayParam() {
  jsonMapperTCK.methodWithTypeToJsonArrayParam([1, 2, 3]);
}

function testMethodWithListOfTypeToJsonArrayParam() {
  jsonMapperTCK.methodWithListOfTypeToJsonArrayParam([[1, 2, 3], [4, 5, 6]]);
}

function testMethodWithSetOfTypeToJsonArrayParam() {
  jsonMapperTCK.methodWithSetOfTypeToJsonArrayParam([[1, 2, 3], [4, 5, 6]]);
}

function testMethodWithMapOfTypeToJsonArrayParam() {
  jsonMapperTCK.methodWithMapOfTypeToJsonArrayParam({a: [1, 2, 3], b: [4, 5, 6]});
}

function testMethodWithTypeToJsonArrayReturn() {
  assertTypeToJsonArray(jsonMapperTCK.methodWithTypeToJsonArrayReturn());
}

function testMethodWithListOfTypeToJsonArrayReturn() {
  assertListTypeToJsonArray(jsonMapperTCK.methodWithListOfTypeToJsonArrayReturn());
}

function testMethodWithSetOfTypeToJsonArrayReturn() {
  assertSetTypeToJsonArray(jsonMapperTCK.methodWithSetOfTypeToJsonArrayReturn());
}

function testMethodWithMapOfTypeToJsonArrayReturn() {
  assertMapTypeToJsonArray(jsonMapperTCK.methodWithMapOfTypeToJsonArrayReturn());
}

function testMethodWithHandlerTypeToJsonArrayParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerTypeToJsonArrayParam(function (result) {
    assertTypeToJsonArray(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerListOfTypeToJsonArrayParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerListOfTypeToJsonArrayParam(function (result) {
    assertListTypeToJsonArray(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerSetOfTypeToJsonArrayParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerSetOfTypeToJsonArrayParam(function (result) {
    assertSetTypeToJsonArray(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerMapOfTypeToJsonArrayParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerMapOfTypeToJsonArrayParam(function (result) {
    assertMapTypeToJsonArray(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultTypeToJsonArrayParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerAsyncResultTypeToJsonArrayParam(function (result, err) {
    assertTypeToJsonArray(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultListOfTypeToJsonArrayParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerAsyncResultListOfTypeToJsonArrayParam(function (result, err) {
    assertListTypeToJsonArray(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultSetOfTypeToJsonArrayParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerAsyncResultSetOfTypeToJsonArrayParam(function (result, err) {
    assertSetTypeToJsonArray(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultMapOfTypeToJsonArrayParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerAsyncResultMapOfTypeToJsonArrayParam(function (result, err) {
    assertMapTypeToJsonArray(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function assertTypeToJsonArray(result) {
  assertEquals("object", typeof result)
  assertEquals(1, result[0])
  assertEquals(2, result[1])
  assertEquals(3, result[2])
}

function assertListTypeToJsonArray(result) {
  assertEquals("object", typeof result)
  assertEquals("object", typeof result[0])
  assertEquals(1, result[0][0])
  assertEquals(2, result[0][1])
  assertEquals(3, result[0][2])
  assertEquals("object", typeof result[1])
  assertEquals(4, result[1][0])
  assertEquals(5, result[1][1])
  assertEquals(6, result[1][2])
}

function assertSetTypeToJsonArray(result) {
  assertEquals("object", typeof result)
  assertEquals("object", typeof result[0])
  assertEquals(1, result[0][0])
  assertEquals(2, result[0][1])
  assertEquals(3, result[0][2])
  assertEquals("object", typeof result[1])
  assertEquals(4, result[1][0])
  assertEquals(5, result[1][1])
  assertEquals(6, result[1][2])
}

function assertMapTypeToJsonArray(result) {
  assertEquals("object", typeof result)
  assertEquals("object", typeof result["a"])
  assertEquals(1, result["a"][0])
  assertEquals(2, result["a"][1])
  assertEquals(3, result["a"][2])
  assertEquals("object", typeof result["b"])
  assertEquals(4, result["b"][0])
  assertEquals(5, result["b"][1])
  assertEquals(6, result["b"][2])
}

// JS object <-> Java JsonObject <-> MyPojoToJsonObject

function testMethodWithTypeToJsonObjectParam() {
  jsonMapperTCK.methodWithTypeToJsonObjectParam({v: 1});
}

function testMethodWithListOfTypeToJsonObjectParam() {
  jsonMapperTCK.methodWithListOfTypeToJsonObjectParam([{v: 1}, {v: 2}]);
}

function testMethodWithSetOfTypeToJsonObjectParam() {
  jsonMapperTCK.methodWithSetOfTypeToJsonObjectParam([{v: 1}, {v: 2}]);
}

function testMethodWithMapOfTypeToJsonObjectParam() {
  jsonMapperTCK.methodWithMapOfTypeToJsonObjectParam({a: {v: 1}, b: {v: 2}});
}

function testMethodWithTypeToJsonObjectReturn() {
  assertTypeToJsonObject(jsonMapperTCK.methodWithTypeToJsonObjectReturn());
}

function testMethodWithListOfTypeToJsonObjectReturn() {
  assertListTypeToJsonObject(jsonMapperTCK.methodWithListOfTypeToJsonObjectReturn());
}

function testMethodWithSetOfTypeToJsonObjectReturn() {
  assertSetTypeToJsonObject(jsonMapperTCK.methodWithSetOfTypeToJsonObjectReturn());
}

function testMethodWithMapOfTypeToJsonObjectReturn() {
  assertMapTypeToJsonObject(jsonMapperTCK.methodWithMapOfTypeToJsonObjectReturn());
}

function testMethodWithHandlerTypeToJsonObjectParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerTypeToJsonObjectParam(function (result) {
    assertTypeToJsonObject(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerListOfTypeToJsonObjectParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerListOfTypeToJsonObjectParam(function (result) {
    assertListTypeToJsonObject(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerSetOfTypeToJsonObjectParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerSetOfTypeToJsonObjectParam(function (result) {
    assertSetTypeToJsonObject(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerMapOfTypeToJsonObjectParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerMapOfTypeToJsonObjectParam(function (result) {
    assertMapTypeToJsonObject(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultTypeToJsonObjectParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerAsyncResultTypeToJsonObjectParam(function (result, err) {
    assertTypeToJsonObject(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultListOfTypeToJsonObjectParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerAsyncResultListOfTypeToJsonObjectParam(function (result, err) {
    assertListTypeToJsonObject(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultSetOfTypeToJsonObjectParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerAsyncResultSetOfTypeToJsonObjectParam(function (result, err) {
    assertSetTypeToJsonObject(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultMapOfTypeToJsonObjectParam() {
  var count = 0
  jsonMapperTCK.methodWithHandlerAsyncResultMapOfTypeToJsonObjectParam(function (result, err) {
    assertMapTypeToJsonObject(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithFunctionMappedParam() {
  jsonMapperTCK.methodWithFunctionMappedParam("en_US");
}

function testMethodWithListOfFunctionMappedParam() {
  jsonMapperTCK.methodWithListOfFunctionMappedParam(["en_US","en_GB"]);
}

function testMethodWithSetOfFunctionMappedParam() {
  jsonMapperTCK.methodWithSetOfFunctionMappedParam(["en_US","en_GB"]);
}

function testMethodWithMapOfFunctionMappedParam() {
  jsonMapperTCK.methodWithMapOfFunctionMappedParam({"en_US":"en_US","en_GB":"en_GB"});
}

function testMethodWithFunctionMappedReturn() {
  assertEquals("en_us", jsonMapperTCK.methodWithFunctionMappedReturn())
}

function testMethodWithListOfFunctionMappedReturn() {
  var list = jsonMapperTCK.methodWithListOfFunctionMappedReturn();
  assertEquals("en_us", list[0])
  assertEquals("en_gb", list[1])
}

function testMethodWithSetOfFunctionMappedReturn() {
  var set = jsonMapperTCK.methodWithSetOfFunctionMappedReturn();
  set.sort();
  assertEquals("en_gb", set[0]);
  assertEquals("en_us", set[1]);
}

function testMethodWithMapOfFunctionMappedReturn() {
  var map = jsonMapperTCK.methodWithMapOfFunctionMappedReturn();
  assertEquals("en_us", map["en_us"]);
  assertEquals("en_gb", map["en_gb"]);
}

function testMethodWithHandlerFunctionMapped() {
  var count = 0;
  jsonMapperTCK.methodWithHandlerFunctionMapped(function(res) {
    assertEquals("en_us", res);
    count++;
  })
  assertEquals(1, count);
}

function testMethodWithHandlerListOfFunctionMapped() {
  var count = 0;
  jsonMapperTCK.methodWithHandlerListOfFunctionMapped(function(list) {
    assertEquals("en_us", list[0]);
    assertEquals("en_gb", list[1]);
    count++;
  });
  assertEquals(1, count);
}

function testMethodWithHandlerSetOfFunctionMapped() {
  var count = 0;
  var set = jsonMapperTCK.methodWithHandlerSetOfFunctionMapped(function(set) {
    set.sort();
    assertEquals("en_gb", set[0])
    assertEquals("en_us", set[1])
    count++;
  });
  assertEquals(1, count);
}

function testMethodWithHandlerMapOfFunctionMapped() {
  var count = 0;
  jsonMapperTCK.methodWithHandlerMapOfFunctionMapped(function(map) {
    assertEquals("en_us", map["en_us"])
    assertEquals("en_gb", map["en_gb"])
    count++;
  });
  assertEquals(1, count);
}

function testMethodWithHandlerAsyncResultFunctionMapped() {
  var count = 0;
  jsonMapperTCK.methodWithHandlerAsyncResultFunctionMapped(function(res, err) {
    assertNull(err);
    assertEquals("en_us", res);
    count++;
  })
  assertEquals(1, count);
}

function testMethodWithHandlerAsyncResultListOfFunctionMapped() {
  var count = 0;
  jsonMapperTCK.methodWithHandlerAsyncResultListOfFunctionMapped(function(list, err) {
    assertNull(err);
    assertEquals("en_us", list[0]);
    assertEquals("en_gb", list[1]);
    count++;
  });
  assertEquals(1, count);
}

function testMethodWithHandlerAsyncResultSetOfFunctionMapped() {
  var count = 0;
  var set = jsonMapperTCK.methodWithHandlerAsyncResultSetOfFunctionMapped(function(set, err) {
    assertNull(err);
    set.sort();
    assertEquals("en_gb", set[0])
    assertEquals("en_us", set[1])
    count++;
  });
  assertEquals(1, count);
}

function testMethodWithHandlerAsyncResultMapOfFunctionMapped() {
  var count = 0;
  jsonMapperTCK.methodWithHandlerAsyncResultMapOfFunctionMapped(function(map, err) {
    assertNull(err);
    assertEquals("en_us", map["en_us"])
    assertEquals("en_gb", map["en_gb"])
    count++;
  });
  assertEquals(1, count);
}
function assertTypeToJsonObject(result) {
  assertEquals("object", typeof result)
  assertEquals(1, result.v)
}

function assertListTypeToJsonObject(result) {
  assertEquals("object", typeof result)
  assertEquals("object", typeof result[0])
  assertEquals(1, result[0].v)
  assertEquals("object", typeof result[1])
  assertEquals(2, result[1].v)
}

function assertSetTypeToJsonObject(result) {
  assertEquals("object", typeof result)
  assertEquals("object", typeof result[0])
  assertEquals("object", typeof result[1])

  assertContains({v: 1}, result)
  assertContains({v: 2}, result)
}

function assertMapTypeToJsonObject(result) {
  assertEquals("object", typeof result)
  assertEquals("object", typeof result["a"])
  assertEquals(1, result["a"].v)
  assertEquals("object", typeof result["b"])
  assertEquals(2, result["b"].v)
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();






