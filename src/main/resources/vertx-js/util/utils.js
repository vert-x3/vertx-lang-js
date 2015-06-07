var JsonObject = Packages.io.vertx.core.json.JsonObject;
var JsonArray = Packages.io.vertx.core.json.JsonArray;
var asList = java.util.Arrays.asList;
var LongArrayType = Java.type("java.lang.Long[]");
var ShortArrayType = Java.type("java.lang.Short[]");
var ByteArrayType = Java.type("java.lang.Byte[]");
var VertxGenConverterList = Java.type("io.vertx.lang.js.VertxGenConverterList");
var VertxGenConverterSet = Java.type("io.vertx.lang.js.VertxGenConverterSet");
var JavaArraySetWrapper = Java.type("io.vertx.lang.js.JavaArraySetWrapper");
var ListConverterSet = Java.type("io.vertx.lang.js.ListConverterSet");
var VertxGenConverterMap = Java.type("io.vertx.lang.js.VertxGenConverterMap");
var LongConverterMap = Java.type("io.vertx.lang.js.LongConverterMap");
var ShortConverterMap = Java.type("io.vertx.lang.js.ShortConverterMap");
var ByteConverterMap = Java.type("io.vertx.lang.js.ByteConverterMap");

var utils = {};

// Param conversion

// Convert JS JSON object param to Java JsonObject
utils.convParamJsonObject = function(param) {
  return param != null ? new JsonObject(JSON.stringify(param)) : null;
};

// Convert JS Array param to Java JsonArray
utils.convParamJsonArray = function(param) {
  return param != null ? new JsonArray(JSON.stringify(param)) : null;
};

// Convert Object type param (e.g. eventbus send)
utils.convParamTypeUnknown = function(param) {
  if (param == null) {
    return param;
  }
  if (typeof param === 'object') {
    if (param instanceof Array) {
      return utils.convParamJsonArray(param);
    }
    return utils.convParamJsonObject(param);
  }
  return param;
};


utils.convParamListLong = function(arr) {
  return asList(Java.to(arr, LongArrayType));
}

utils.convParamListShort = function(arr) {
  return asList(Java.to(arr, ShortArrayType));
}

utils.convParamListByte = function(arr) {
  return asList(Java.to(arr, ByteArrayType));
}

utils.convParamSetBasicOther = function(arr) {
  return new ListConverterSet(arr);
}

utils.convParamSetLong = function(arr) {
  return new JavaArraySetWrapper(Java.to(arr, LongArrayType));
}

utils.convParamSetShort = function(arr) {
  return new JavaArraySetWrapper(Java.to(arr, ShortArrayType));
}

utils.convParamSetByte = function(arr) {
  return new JavaArraySetWrapper(Java.to(arr, ByteArrayType));
}

utils.convParamListVertxGen = function(arr) {
  return new VertxGenConverterList(arr);
}

utils.convParamSetVertxGen = function(arr) {
  return new VertxGenConverterSet(arr);
}

utils.convParamMapLong = function(arr) {
  return new LongConverterMap(arr);
}

utils.convParamMapShort = function(arr) {
  return new ShortConverterMap(arr);
}

utils.convParamMapByte = function(arr) {
  return new ByteConverterMap(arr);
}

utils.convParamMapVertxGen = function(arr) {
  return new VertxGenConverterMap(arr);
}

utils.convParamMapJsonObject = function(arr) {
  var newmap = {};
  for (var key in arr) {
    if (arr.hasOwnProperty(key)) {
      var val = arr[key];
      newmap[key] = new JsonObject(JSON.stringify(val));
    }
  }
  return newmap;
}

utils.convParamMapJsonArray = function(arr) {
  var newmap = {};
  for (var key in arr) {
    if (arr.hasOwnProperty(key)) {
      var val = arr[key];
      newmap[key] = new JsonArray(JSON.stringify(val));
    }
  }
  return newmap;
}

utils.convParamListJsonObject = function(arr) {
  var len = arr.length;
  var newarr = [];
  for (var i = 0; i < len; i++) {
    var elem = arr[i];
    newarr[i] = new JsonObject(JSON.stringify(elem));
  }
  return newarr;
}

utils.convParamListJsonArray = function(arr) {
  var len = arr.length;
  var newarr = [];
  for (var i = 0; i < len; i++) {
    var elem = arr[i];
    newarr[i] = new JsonArray(JSON.stringify(elem));
  }
  return newarr;
}

utils.convParamListDataObject = function(arr, constructor) {
  var len = arr.length;
  var newarr = [];
  for (var i = 0; i < len; i++) {
    var elem = arr[i];
    newarr[i] = constructor(new JsonObject(JSON.stringify(elem)));
  }
  return newarr;
}

utils.convParamSetJsonObject = function(arr) {
  return new ListConverterSet(utils.convParamListJsonObject(arr));
}

utils.convParamSetJsonArray = function(arr) {
  return new ListConverterSet(utils.convParamListJsonArray(arr));
}

utils.convParamSetDataObject = function(arr, constructor) {
  return new ListConverterSet(utils.convParamListDataObject(arr, constructor));
}


// Return conversion

// This is used to convert the return value from any Generic method where we don't know the actual type
// or Throwable return
utils.convReturnTypeUnknown = function(ret) {
  if (ret instanceof JsonObject || ret instanceof JsonArray) {
    return JSON.parse(ret.encode());
  } else {
    return ret;
  }
};

// Convert a Java JsonObject/JsonArray return to JS JSON
utils.convReturnJson = function(param) {
  return param != null ? JSON.parse(param.encode()) : null;
};

/*
 Convert a set return
 Nashorn doesn't automatically convert Sets to JS Arrays so we have to do this manually
 Note that this involves copying - so best to avoid Set in the API!
 */
utils.convReturnSet = function(jSet) {
  return new java.util.ArrayList(jSet);
};

// Convert a list/set containing json return
utils.convReturnListSetJson = function(jList) {
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

// Convert a VertxGen return value
utils.convReturnVertxGen = function(jdel, constructorFunction) {
  if (jdel != null) {
    // A bit of jiggery pokery to create the object given a reference to the constructor function
    var obj = Object.create(constructorFunction.prototype, {});
    constructorFunction.apply(obj, [jdel]);
    return obj;
  }
  return null;
}

// Convert a list/set containing VertxGen return
utils.convReturnListSetVertxGen = function(jList, constructorFunction) {
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

// Convert a list/set containing data object return
utils.convReturnListSetDataObject = function(jList) {
  var arr = [];
  arr.length = jList.size();
  var iter = jList.iterator();
  var pos = 0;
  while (iter.hasNext()) {
    var elem = iter.next();
    arr[pos++] = elem != null ? JSON.parse(elem.toJson().encode()) : null;
  }
  return arr;
};

// Convert a map return
utils.convReturnMap = function(jMap) {
  if (jMap) {
    // Object.keys is not supported. hasOwnKeys is called on ScriptObject which does not get proxied down
    // to JSAdapter.
    return new JSAdapter({
      __get__: function (name) {
        return utils.convReturnTypeUnknown(jMap.get(name));
      },

      __put__: function (name, value) {
        jMap.put(name, utils.convParamTypeUnknown(value));
      },

      __call__: function (name, arg1, arg2) {
        switch (name) {
          case "size": {
            return jMap.size();
          }
          case "forEach": {
            if (typeof arg1 == 'function') {
              jMap.entrySet().forEach(function(entry) {
                arg1(utils.convReturnTypeUnknown(entry.getValue()), entry.getKey());
              });
            } else {
              throw new TypeError(arg1 + " is not a function");
            }
            break;
          }
          case "clear": {
            jMap.clear();
            break;
          }
          default :
            console.log("WARN: Unsupported method call " + name + " for wrapped map object.");
        }
      },

      __new__: function (arg1, arg2) {
      },

      __getIds__: function () {
        return utils.convReturnSet(jMap.keySet());
      },

      __getValues__: function () {
        return utils.convReturnListSetJson(jMap.values());
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
