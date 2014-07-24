var JsonObject = Packages.io.vertx.core.json.JsonObject;
var JsonArray = Packages.io.vertx.core.json.JsonArray;

var utils = {};

utils.convRuntimeReturn = function(ret) {
  if (ret instanceof JsonObject || ret instanceof JsonArray) {
    return JSON.parse(ret.encode());
  } else {
    return ret;
  }
};

utils.convJSObjectToJsonObject = function(param) {
  return new JsonObject(JSON.stringify(param));
};

utils.convJSArrayToJsonArray = function(param) {
  return new JsonArray(JSON.stringify(param));
};

utils.convRuntimeParam = function(param) {
  if (param == null) {
    return param;
  }
  if (typeof param === 'object') {
    if (param instanceof Array) {
      return utils.convJSArrayToJsonArray(param);
    }
    return utils.convJSObjectToJsonObject(param);
  }
  return param;
};

/*
Nashorn doesn't automatically convert Sets to JS Arrays so we have to do this manually
Note that this involves copying - so best to avoid Set in the API!
 */
utils.convSet = function(jSet) {
  return new java.util.ArrayList(jSet);
}

utils.convListSetJson = function(jList) {
  var arr = [];
  arr.length = jList.size();
  var iter = jList.iterator();
  var pos = 0;
  while (iter.hasNext()) {
    var jJson = iter.next();
    arr[pos++] = JSON.parse(jJson.encode());
  }
  return arr;
}

utils.convListSetVertxGen = function(jList, constructorFunction) {
  var arr = [];
  arr.length = jList.size();
  var iter = jList.iterator();
  var pos = 0;
  while (iter.hasNext()) {
    var jVertxGen = iter.next();
    // A bit of jiggery pokery to create the object given a reference to the constructor function
    var obj = Object.create(constructorFunction.prototype, {});
    constructorFunction.apply(obj, [jVertxGen]);
    arr[pos++] = obj;
  }
  return arr;
}


module.exports = utils;
