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

module.exports = utils;
