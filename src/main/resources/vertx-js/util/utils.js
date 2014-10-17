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
  return param != null ? new JsonObject(JSON.stringify(param)) : null;
};

utils.convJsonToJS = function(param) {
    return param != null ? JSON.parse(param.encode()) : null;
};

utils.convJSArrayToJsonArray = function(param) {
  return param != null ? new JsonArray(JSON.stringify(param)) : null;
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
};

utils.convListSetJson = function(jList) {
  var arr = [];
  arr.length = jList.size();
  var iter = jList.iterator();
  var pos = 0;
  while (iter.hasNext()) {
    var elem = iter.next();
    if (elem instanceof JsonObject || elem instanceof JsonArray) {
      elem = JSON.parse(elem.encode());
    }
    arr[pos++] = elem;
  }
  return arr;
};

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
};

utils.convMap = function(jMap) {
  if (jMap) {
    // Object.keys is not supported. hasOwnKeys is called on ScriptObject which does not get proxied down
    // to JSAdapter.
    return new JSAdapter({
      __get__: function (name) {
        return utils.convRuntimeReturn(jMap.get(name));
      },

      __put__: function (name, value) {
        jMap.put(name, utils.convRuntimeParam(value));
      },

      __call__: function (name, arg1, arg2) {
        switch (name) {
          case "size":
          {
            return jMap.size();
          }
          case "forEach":
          {
            if (typeof arg1 == 'function') {
              utils.convSet(jMap.keySet()).forEach(arg1);
            } else {
              throw new TypeError(arg1 + " is not a function");
            }
            break;
          }
          default :
            console.log("WARN: Unsupported method call " + name + " for wrapped map object.");
        }
      },

      __new__: function (arg1, arg2) {
      },

      __getIds__: function () {
        return utils.convSet(jMap.keySet());
      },

      __getValues__: function () {
        return utils.convListSetJson(jMap.values());
      },

      __has__: function (name) {
        return jMap.containsKey(name);
      },

      __delete__: function (name) {
        return jMap.remove(name);
      }
    });
  } else {
    return null;
  }
};

utils.invalidArgs = function() {
  throw new TypeError('function invoked with invalid arguments');
};

module.exports = utils;
