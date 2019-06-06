var Assert = org.junit.Assert;
var testUtils = require("test_utils");
var assertEquals = testUtils.assertEquals;
var assertContains = testUtils.assertContains;
var assertNull = Assert.assertNull;

var JsonCodecTCK = require('testmodel-js/json_codec_tck');
var jsonCodecTCK = new JsonCodecTCK(new Packages.io.vertx.codegen.testmodel.JsonCodecTCKImpl());

var that = this;

// JS number <-> Java Integer <-> MyPojoToInteger

function testMethodWithTypeToIntegerParam() {
  jsonCodecTCK.methodWithTypeToIntegerParam(1);
}

function testMethodWithListOfTypeToIntegerParam() {
  jsonCodecTCK.methodWithListOfTypeToIntegerParam([1, 2]);
}

function testMethodWithSetOfTypeToIntegerParam() {
  jsonCodecTCK.methodWithSetOfTypeToIntegerParam([1, 2]);
}

function testMethodWithMapOfTypeToIntegerParam() {
  jsonCodecTCK.methodWithMapOfTypeToIntegerParam({a: 1, b: 2});
}

function testMethodWithTypeToIntegerReturn() {
  assertTypeToInteger(jsonCodecTCK.methodWithTypeToIntegerReturn());
}

function testMethodWithListOfTypeToIntegerReturn() {
  assertListSetTypeToInteger(jsonCodecTCK.methodWithListOfTypeToIntegerReturn());
}

function testMethodWithSetOfTypeToIntegerReturn() {
  assertListSetTypeToInteger(jsonCodecTCK.methodWithSetOfTypeToIntegerReturn());
}

function testMethodWithMapOfTypeToIntegerReturn() {
  assertMapTypeToInteger(jsonCodecTCK.methodWithMapOfTypeToIntegerReturn());
}

function testMethodWithHandlerTypeToIntegerParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerTypeToIntegerParam(function (result) {
    assertTypeToInteger(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerListOfTypeToIntegerParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerListOfTypeToIntegerParam(function (result) {
    assertListSetTypeToInteger(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerSetOfTypeToIntegerParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerSetOfTypeToIntegerParam(function (result) {
    assertListSetTypeToInteger(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerMapOfTypeToIntegerParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerMapOfTypeToIntegerParam(function (result) {
    assertMapTypeToInteger(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultTypeToIntegerParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerAsyncResultTypeToIntegerParam(function (result, err) {
    assertTypeToInteger(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultListOfTypeToIntegerParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerAsyncResultListOfTypeToIntegerParam(function (result, err) {
    assertListSetTypeToInteger(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultSetOfTypeToIntegerParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerAsyncResultSetOfTypeToIntegerParam(function (result, err) {
    assertListSetTypeToInteger(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultMapOfTypeToIntegerParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerAsyncResultMapOfTypeToIntegerParam(function (result, err) {
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
  jsonCodecTCK.methodWithTypeToStringParam("2019-04-03T14:30:05.083+02:00[Europe/Rome]");
}

function testMethodWithListOfTypeToStringParam() {
  jsonCodecTCK.methodWithListOfTypeToStringParam(["2019-04-03T14:30:05.083+02:00[Europe/Rome]", "2019-04-04T14:30:05.083+02:00[Europe/Rome]"]);
}

function testMethodWithSetOfTypeToStringParam() {
  jsonCodecTCK.methodWithSetOfTypeToStringParam(["2019-04-03T14:30:05.083+02:00[Europe/Rome]", "2019-04-04T14:30:05.083+02:00[Europe/Rome]"]);
}

function testMethodWithMapOfTypeToStringParam() {
  jsonCodecTCK.methodWithMapOfTypeToStringParam({a: "2019-04-03T14:30:05.083+02:00[Europe/Rome]", b: "2019-04-04T14:30:05.083+02:00[Europe/Rome]"});
}

function testMethodWithTypeToStringReturn() {
  assertTypeToString(jsonCodecTCK.methodWithTypeToStringReturn());
}

function testMethodWithListOfTypeToStringReturn() {
  assertListTypeToString(jsonCodecTCK.methodWithListOfTypeToStringReturn());
}

function testMethodWithSetOfTypeToStringReturn() {
  assertSetTypeToString(jsonCodecTCK.methodWithSetOfTypeToStringReturn());
}

function testMethodWithMapOfTypeToStringReturn() {
  assertMapTypeToString(jsonCodecTCK.methodWithMapOfTypeToStringReturn());
}

function testMethodWithHandlerTypeToStringParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerTypeToStringParam(function (result) {
    assertTypeToString(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerListOfTypeToStringParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerListOfTypeToStringParam(function (result) {
    assertListTypeToString(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerSetOfTypeToStringParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerSetOfTypeToStringParam(function (result) {
    assertSetTypeToString(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerMapOfTypeToStringParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerMapOfTypeToStringParam(function (result) {
    assertMapTypeToString(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultTypeToStringParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerAsyncResultTypeToStringParam(function (result, err) {
    assertTypeToString(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultListOfTypeToStringParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerAsyncResultListOfTypeToStringParam(function (result, err) {
    assertListTypeToString(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultSetOfTypeToStringParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerAsyncResultSetOfTypeToStringParam(function (result, err) {
    assertSetTypeToString(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultMapOfTypeToStringParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerAsyncResultMapOfTypeToStringParam(function (result, err) {
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
  jsonCodecTCK.methodWithTypeToJsonArrayParam([1, 2, 3]);
}

function testMethodWithListOfTypeToJsonArrayParam() {
  jsonCodecTCK.methodWithListOfTypeToJsonArrayParam([[1, 2, 3], [4, 5, 6]]);
}

function testMethodWithSetOfTypeToJsonArrayParam() {
  jsonCodecTCK.methodWithSetOfTypeToJsonArrayParam([[1, 2, 3], [4, 5, 6]]);
}

function testMethodWithMapOfTypeToJsonArrayParam() {
  jsonCodecTCK.methodWithMapOfTypeToJsonArrayParam({a: [1, 2, 3], b: [4, 5, 6]});
}

function testMethodWithTypeToJsonArrayReturn() {
  assertTypeToJsonArray(jsonCodecTCK.methodWithTypeToJsonArrayReturn());
}

function testMethodWithListOfTypeToJsonArrayReturn() {
  assertListTypeToJsonArray(jsonCodecTCK.methodWithListOfTypeToJsonArrayReturn());
}

function testMethodWithSetOfTypeToJsonArrayReturn() {
  assertSetTypeToJsonArray(jsonCodecTCK.methodWithSetOfTypeToJsonArrayReturn());
}

function testMethodWithMapOfTypeToJsonArrayReturn() {
  assertMapTypeToJsonArray(jsonCodecTCK.methodWithMapOfTypeToJsonArrayReturn());
}

function testMethodWithHandlerTypeToJsonArrayParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerTypeToJsonArrayParam(function (result) {
    assertTypeToJsonArray(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerListOfTypeToJsonArrayParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerListOfTypeToJsonArrayParam(function (result) {
    assertListTypeToJsonArray(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerSetOfTypeToJsonArrayParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerSetOfTypeToJsonArrayParam(function (result) {
    assertSetTypeToJsonArray(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerMapOfTypeToJsonArrayParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerMapOfTypeToJsonArrayParam(function (result) {
    assertMapTypeToJsonArray(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultTypeToJsonArrayParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerAsyncResultTypeToJsonArrayParam(function (result, err) {
    assertTypeToJsonArray(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultListOfTypeToJsonArrayParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerAsyncResultListOfTypeToJsonArrayParam(function (result, err) {
    assertListTypeToJsonArray(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultSetOfTypeToJsonArrayParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerAsyncResultSetOfTypeToJsonArrayParam(function (result, err) {
    assertSetTypeToJsonArray(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultMapOfTypeToJsonArrayParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerAsyncResultMapOfTypeToJsonArrayParam(function (result, err) {
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
  jsonCodecTCK.methodWithTypeToJsonObjectParam({v: 1});
}

function testMethodWithListOfTypeToJsonObjectParam() {
  jsonCodecTCK.methodWithListOfTypeToJsonObjectParam([{v: 1}, {v: 2}]);
}

function testMethodWithSetOfTypeToJsonObjectParam() {
  jsonCodecTCK.methodWithSetOfTypeToJsonObjectParam([{v: 1}, {v: 2}]);
}

function testMethodWithMapOfTypeToJsonObjectParam() {
  jsonCodecTCK.methodWithMapOfTypeToJsonObjectParam({a: {v: 1}, b: {v: 2}});
}

function testMethodWithTypeToJsonObjectReturn() {
  assertTypeToJsonObject(jsonCodecTCK.methodWithTypeToJsonObjectReturn());
}

function testMethodWithListOfTypeToJsonObjectReturn() {
  assertListTypeToJsonObject(jsonCodecTCK.methodWithListOfTypeToJsonObjectReturn());
}

function testMethodWithSetOfTypeToJsonObjectReturn() {
  assertSetTypeToJsonObject(jsonCodecTCK.methodWithSetOfTypeToJsonObjectReturn());
}

function testMethodWithMapOfTypeToJsonObjectReturn() {
  assertMapTypeToJsonObject(jsonCodecTCK.methodWithMapOfTypeToJsonObjectReturn());
}

function testMethodWithHandlerTypeToJsonObjectParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerTypeToJsonObjectParam(function (result) {
    assertTypeToJsonObject(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerListOfTypeToJsonObjectParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerListOfTypeToJsonObjectParam(function (result) {
    assertListTypeToJsonObject(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerSetOfTypeToJsonObjectParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerSetOfTypeToJsonObjectParam(function (result) {
    assertSetTypeToJsonObject(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerMapOfTypeToJsonObjectParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerMapOfTypeToJsonObjectParam(function (result) {
    assertMapTypeToJsonObject(result)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultTypeToJsonObjectParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerAsyncResultTypeToJsonObjectParam(function (result, err) {
    assertTypeToJsonObject(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultListOfTypeToJsonObjectParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerAsyncResultListOfTypeToJsonObjectParam(function (result, err) {
    assertListTypeToJsonObject(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultSetOfTypeToJsonObjectParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerAsyncResultSetOfTypeToJsonObjectParam(function (result, err) {
    assertSetTypeToJsonObject(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
}

function testMethodWithHandlerAsyncResultMapOfTypeToJsonObjectParam() {
  var count = 0
  jsonCodecTCK.methodWithHandlerAsyncResultMapOfTypeToJsonObjectParam(function (result, err) {
    assertMapTypeToJsonObject(result)
    assertNull(err)
    count++
  })
  assertEquals(1, count)
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






