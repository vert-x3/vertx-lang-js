var utils = {};

utils.convRuntimeReturn = function(ret) {
  if (ret instanceof io.vertx.core.json.JsonObject || ret instanceof io.vertx.json.JsonArray) {
    return JSON.parse(ret.encode());
  } else {
    return ret;
  }
};

utils.convJSObjectToJsonObject = function(param) {
  return new io.vertx.core.json.JsonObject(JSON.stringify(param));
};

utils.convJSArrayToJsonArray = function(param) {
  return new io.vertx.core.json.JsonArray(JSON.stringify(param));
};

utils.convRuntimeParam = function(param) {
  if (param == null) {
    return param;
  }
  if (typeof param === 'object') {
    if (param instanceof Array) {
      return utils.convJSObjectToJsonObject(param);
    }
    return utils.convJSArrayToJsonArray(param);
  }
  return param;
};

module.exports = utils;
