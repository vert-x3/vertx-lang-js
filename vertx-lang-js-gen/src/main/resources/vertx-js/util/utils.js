var JsonObject = Packages.io.vertx.core.json.JsonObject;
var JsonArray = Packages.io.vertx.core.json.JsonArray;
var asList = java.util.Arrays.asList;
var Character = Java.type("java.lang.Character");
var Long = Java.type("java.lang.Long");
var LongArrayType = Java.type("java.lang.Long[]");
var ShortArrayType = Java.type("java.lang.Short[]");
var ByteArrayType = Java.type("java.lang.Byte[]");
var ObjectArrayType = Java.type("java.lang.Object[]");
var VertxGenConverterList = Java.type("io.vertx.lang.js.VertxGenConverterList");
var VertxGenConverterSet = Java.type("io.vertx.lang.js.VertxGenConverterSet");
var JavaArraySetWrapper = Java.type("io.vertx.lang.js.JavaArraySetWrapper");
var ListConverterSet = Java.type("io.vertx.lang.js.ListConverterSet");
var VertxGenConverterMap = Java.type("io.vertx.lang.js.VertxGenConverterMap");
var LongConverterMap = Java.type("io.vertx.lang.js.LongConverterMap");
var ShortConverterMap = Java.type("io.vertx.lang.js.ShortConverterMap");
var ByteConverterMap = Java.type("io.vertx.lang.js.ByteConverterMap");
var ThrowableConverter = Java.type("io.vertx.lang.js.ThrowableConverter");
var SucceededResult = Packages.io.vertx.lang.js.SucceededResult;
var FailedResult = Packages.io.vertx.lang.js.FailedResult;

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
    if (typeof param._jdel !== 'undefined'  && param._jdel) {
      return param._jdel;
    }
    return utils.convParamJsonObject(param);
  }
  return param;
};

utils.convParamThrowable = function(err) {
  return ThrowableConverter.catchAndReturnThrowable(function() {
    throw err;
  });
};

utils.convParamByte = function(n) {
  return n == null ? null : n.byteValue();
};

utils.convParamShort = function(n) {
  return n == null ? null : n.shortValue();
};

utils.convParamInteger = function(n) {
  return n == null ? null : n.intValue();
};

utils.convParamLong = function(n) {
  return n == null ? null : n.longValue();
};

utils.convParamFloat = function(n) {
  return n == null ? null : n.floatValue();
};

utils.convParamDouble = function(n) {
  return n == null ? null : n.doubleValue();
};

utils.convParamCharacter = function(c) {
  return c == null ? null : new Character(c.charCodeAt(0));
};

utils.convParamListLong = function(arr) {
  return arr == null ? null : asList(Java.to(arr, LongArrayType));
};

utils.convParamListShort = function(arr) {
  return arr == null ? null : asList(Java.to(arr, ShortArrayType));
};

utils.convParamListByte = function(arr) {
  return arr == null ? null: asList(Java.to(arr, ByteArrayType));
};

utils.convParamListBasicOther = function(arr) {
  return arr == null ? null: asList(Java.to(arr, ObjectArrayType));
};

utils.convParamSetBasicOther = function(arr) {
  return arr == null ? null : new ListConverterSet(arr);
};

utils.convParamSetLong = function(arr) {
  return arr == null ? null : new JavaArraySetWrapper(Java.to(arr, LongArrayType));
};

utils.convParamSetShort = function(arr) {
  return arr == null ? null : new JavaArraySetWrapper(Java.to(arr, ShortArrayType));
};

utils.convParamSetByte = function(arr) {
  return arr == null ? null : new JavaArraySetWrapper(Java.to(arr, ByteArrayType));
};

utils.convParamListVertxGen = function(arr) {
  return arr == null ? null : new VertxGenConverterList(arr);
};

utils.convParamSetVertxGen = function(arr) {
  return arr == null ? null : new VertxGenConverterSet(arr);
};

utils.convParamMapLong = function(arr) {
  return arr == null ? null : new LongConverterMap(arr);
};

utils.convParamMapShort = function(arr) {
  return arr == null ? null : new ShortConverterMap(arr);
};

utils.convParamMapByte = function(arr) {
  return arr == null ? null : new ByteConverterMap(arr);
};

utils.convParamMapVertxGen = function(arr) {
  return arr == null ? null : new VertxGenConverterMap(arr);
};

utils.convParamMapJsonObject = function(arr) {
  if (arr) {
    var newmap = {};
    for (var key in arr) {
      if (arr.hasOwnProperty(key)) {
        var val = arr[key];
        if (val) {
          newmap[key] = new JsonObject(JSON.stringify(val));
        } else {
          newmap[key] = null;
        }
      }
    }
    return newmap;
  } else {
    return null;
  }
};

utils.convParamMapJsonArray = function(arr) {
  if (arr) {
    var newmap = {};
    for (var key in arr) {
      if (arr.hasOwnProperty(key)) {
        var val = arr[key];
        if (val) {
          newmap[key] = new JsonArray(JSON.stringify(val));
        } else {
          newmap[key] = null;
        }
      }
    }
    return newmap;
  } else {
    return null;
  }
};

utils.convParamMapObject = function(val) {
  if (val) {
    return new JsonObject(JSON.stringify(val)).copy().getMap();
  } else {
    return null;
  }
};

utils.convParamMapDataObjectAnnotated = function(arr, constructor) {
  if (arr) {
    var newmap = {};
    for (var key in arr) {
      if (arr.hasOwnProperty(key)) {
        var val = arr[key];
        newmap[key] = val != null ? constructor(new JsonObject(JSON.stringify(val))) : null;
      }
    }
    return newmap;
  } else {
    return null;
  }
};

utils.convParamMapWithJsonMapper = function(arr, deserializer, cast) {
  if (arr) {
    var newmap = {};
    for (var key in arr) {
      if (arr.hasOwnProperty(key)) {
        var val = arr[key];
        if (cast !== undefined)
          newmap[key] = val != null ? deserializer.deserialize(cast(JSON.stringify(val))) : null;
        else
          newmap[key] = val != null ? deserializer.deserialize(val) : null;
      }
    }
    return newmap;
  } else {
    return null;
  }
};

utils.convParamMapEnum = function(arr, constructor) {
  if (arr) {
    var newmap = {};
    for (var key in arr) {
      if (arr.hasOwnProperty(key)) {
        var val = arr[key];
        newmap[key] = val != null ? constructor(val) : null;
      }
    }
    return newmap;
  } else {
    return null;
  }
};

utils.convParamListJsonObject = function(arr) {
  if (arr) {
    var len = arr.length;
    var newarr = [];
    for (var i = 0; i < len; i++) {
      var elem = arr[i];
      newarr[i] = elem != null ? new JsonObject(JSON.stringify(elem)) : elem;
    }
    return newarr;
  } else {
    return null;
  }
};

utils.convParamListJsonArray = function(arr) {
  if (arr) {
    var len = arr.length;
    var newarr = [];
    for (var i = 0; i < len; i++) {
      var elem = arr[i];
      newarr[i] = elem != null ? new JsonArray(JSON.stringify(elem)) : null;
    }
    return newarr;
  } else {
    return null;
  }
};

utils.convParamListObject = function(arr) {
  if (arr) {
    return new JsonArray(JSON.stringify(arr)).copy().getList();
  } else {
    return null;
  }
};

utils.convParamListDataObjectAnnotated = function(arr, constructor) {
  if (arr) {
    var len = arr.length;
    var newarr = [];
    for (var i = 0; i < len; i++) {
      var elem = arr[i];
      newarr[i] = elem != null ? constructor(new JsonObject(JSON.stringify(elem))) : null;
    }
    return newarr;
  } else {
    return null;
  }
};

utils.convParamListWithJsonMapper = function(arr, deserializer, cast) {
  if (arr) {
    var len = arr.length;
    var newarr = [];
    for (var i = 0; i < len; i++) {
      var elem = arr[i];
      if (cast !== undefined)
        newarr[i] = elem != null ? deserializer.deserialize(cast(JSON.stringify(elem))) : null;
      else
        newarr[i] = elem != null ? deserializer.deserialize(elem) : null;
    }
    return newarr;
  } else {
    return null;
  }
};

utils.convParamListEnum = function(arr, constructor) {
  if (arr) {
    var len = arr.length;
    var newarr = [];
    for (var i = 0; i < len; i++) {
      var elem = arr[i];
      newarr[i] = elem != null ? constructor(elem) : null;
    }
    return newarr;
  } else {
    return null;
  }
};

utils.convParamSetJsonObject = function(arr) {
  return arr == null ? null : new ListConverterSet(utils.convParamListJsonObject(arr));
};

utils.convParamSetObject = function(arr) {
  return arr == null ? null : new ListConverterSet(utils.convParamListObject(arr));
};

utils.convParamSetJsonArray = function(arr) {
  return arr == null ? null : new ListConverterSet(utils.convParamListJsonArray(arr));
};

utils.convParamSetDataObjectAnnotated = function(arr, constructor) {
  return arr == null ? null : new ListConverterSet(utils.convParamListDataObjectAnnotated(arr, constructor));
};

utils.convParamSetWithJsonMapper = function(arr, deserializer, cast) {
  return arr == null ? null : new ListConverterSet(utils.convParamListWithJsonMapper(arr, deserializer, cast));
};

utils.convParamSetEnum = function(arr, constructor) {
  return arr == null ? null : new ListConverterSet(utils.convParamListEnum(arr, constructor));
};

// Return conversion

// This is used to convert the return value from any Generic method where we don't know the actual type
// or Throwable return
utils.convReturnTypeUnknown = function(ret) {
  if (ret instanceof JsonObject || ret instanceof JsonArray) {
    return JSON.parse(ret.encode());
  } else if (ret instanceof Long) {
    return ret.doubleValue();
  } else {
    return ret;
  }
};

utils.convReturnThrowable = function(ret) {
  try {
    throw ret;
  } catch (e) {
    return e;
  }
};

// Convert a Java JsonObject/JsonArray return to JS JSON
utils.convReturnJson = function(param) {
  return param != null ? JSON.parse(param.encode()) : null;
};

// Convert a java.lang.Long return to JS number
utils.convReturnLong = function(param) {
  return param != null ? param.doubleValue() : null;
};

/*
 Convert a set return
 Nashorn doesn't automatically convert Sets to JS Arrays so we have to do this manually
 Note that this involves copying - so best to avoid Set in the API!
 */
utils.convReturnSet = function(jSet) {
  return jSet != null ? new java.util.ArrayList(jSet) : null;
};

// Convert a list/set containing json return
utils.convReturnListSetJson = function(jList) {
  if (jList == null) {
    return null;
  }
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

// Convert a list/set containing object return
utils.convReturnListSetObject = function(jList) {
  if (jList == null) {
    return null;
  }
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

utils.getJavaClass = function(fqn) {
  var type = Java.type(fqn + "[]");
  return new type(0).getClass().getComponentType();
};

utils.typeMap = {};
utils.typeMap[Object] = utils.getJavaClass("io.vertx.core.json.JsonObject");
utils.typeMap[Array] = utils.getJavaClass("io.vertx.core.json.JsonArray");
utils.typeMap[Number] = utils.getJavaClass("java.lang.Long");
utils.typeMap[String] = utils.getJavaClass("java.lang.String");
utils.typeMap[Boolean] = utils.getJavaClass("java.lang.Boolean");

utils.get_jclass = function(type) {
  var jclass = type._jclass;
  if (jclass == null) {
    jclass = utils.typeMap[type];
  }
  return jclass;
};

utils.get_jtype = function(t) {
  if (typeof t._jtype === 'undefined') {
    if (t === Number) {
      return utils.number_jtype;
    }
    return utils.unknown_jtype;
  } else {
    return t._jtype;
  }
};

// Convert a VertxGen return value
utils.convReturnVertxGen = function(constructorFunction, jdel) {
  if (jdel != null) {
    return constructorFunction._create.apply(this, Array.prototype.slice.call(arguments, 1));
  }
  return null;
};

utils.convReturnEnum = function(jVal) {
  return jVal != null ? jVal.toString() : null;
};

// Convert a DataObject return value
utils.convReturnWithJsonMapper = function(dataObject, mapper, isJson) {
  if (dataObject != null) {
    if (isJson)
      return utils.convReturnJson(mapper.serialize(dataObject));
    else
      return mapper.serialize(dataObject);
  }
  return null;
};

// Convert a DataObject return value
utils.convReturnDataObjectAnnotated = function(dataObject) {
  if (dataObject != null) {
    return utils.convReturnJson(dataObject.toJson());
  }
  return null;
};

// Convert a list/set containing VertxGen return
utils.convReturnListSetVertxGen = function(jList, constructorFunction) {
  return utils.convReturnListSet(jList, function(elem) {
    var obj = Object.create(constructorFunction.prototype, {});
    constructorFunction.apply(obj, [elem]);
    return obj;
  });
};

// Convert a list/set containing data object with json codec return
utils.convReturnListSetWithJsonMapper = function(jList, serializer, isJson) {
  return utils.convReturnListSet(jList, function(elem) { return (isJson) ? JSON.parse(serializer.serialize(elem).encode()) : serializer.serialize(elem); });
};

// Convert a list/set containing data object annotated return
utils.convReturnListSetDataObjectAnnotated = function(jList) {
  return utils.convReturnListSet(jList, function(elem) { return JSON.parse(elem.toJson().encode()); });
};

// Convert a list/set containing enum return
utils.convReturnListSetEnum = function(jList) {
  return utils.convReturnListSet(jList, function(elem) { return elem.toString(); });
};

// Convert a list/set containing Long return
utils.convReturnListSetLong = function(jList) {
  return utils.convReturnListSet(jList, function(elem) { return elem.doubleValue(); });
};

// Convert a list/set containing
utils.convReturnListSet = function(jList, converter) {
  if (jList) {
    var arr = [];
    arr.length = jList.size();
    var iter = jList.iterator();
    var pos = 0;
    while (iter.hasNext()) {
      var elem = iter.next();
      arr[pos++] = elem != null ? converter(elem) : null;
    }
    return arr;
  } else {
    return null;
  }
};

utils.convReturnMapWithJsonMapper = function(jMap, serializer, deserializer, isJsonObject, isJsonArray) {
  return utils.convReturnMap(jMap,
    function(elem) {
      if (isJsonArray || isJsonObject)
        return JSON.parse(serializer.serialize(elem).encode());
      else
        return serializer.serialize(elem);
    },
    function(elem) {
      if (isJsonArray)
        return deserializer.deserialize(new JsonArray(JSON.stringify(elem)));
      else if (isJsonObject)
        return deserializer.deserialize(new JsonObject(JSON.stringify(elem)));
      else
        return deserializer.deserialize(JSON.stringify(elem));
    });
}

utils.convReturnMapDataObjectAnnotated = function(jMap, constructorFunction) {
  return utils.convReturnMap(jMap,
    function(elem) {
      return JSON.parse(elem.toJson().encode());
    },
    function(elem) {
      return constructorFunction(new JsonObject(JSON.stringify(elem)));
    });
}

utils.convReturnMapVertxGen = function(jMap, constructorFunction) {
  return utils.convReturnMap(jMap, function(elem) {
    var obj = Object.create(constructorFunction.prototype, {});
    constructorFunction.apply(obj, [elem]);
    return obj;
  }, function(elem) {
    return elem._jdel;
  });
}

utils.convReturnMapUnknown = function(jMap, toJS, toJava) {
  return utils.convReturnMap(jMap, utils.convReturnTypeUnknown, utils.convParamTypeUnknown);
}

// Convert a map return
utils.convReturnMap = function(jMap, toJS, toJava) {
  if (jMap) {
    // Object.keys is not supported. hasOwnKeys is called on ScriptObject which does not get proxied down
    // to JSAdapter.
    return new JSAdapter({
      __get__: function (name) {
        return toJS(jMap.get(name));
      },

      __put__: function (name, value) {
        jMap.put(name, toJava(value));
      },

      __call__: function (name, arg1, arg2) {
        switch (name) {
          case "size": {
            return jMap.size();
          }
          case "forEach": {
            if (typeof arg1 == 'function') {
              jMap.entrySet().forEach(function(entry) {
                arg1(toJS(entry.getValue()), entry.getKey());
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

// Convert a Handler<AsyncResult> return
utils.convReturnHandlerAsyncResult = function(handler, converter) {
  return function(result, err) {
    if (err == null) {
      handler.handle(new SucceededResult(converter(result)));
    } else {
      handler.handle(new FailedResult(err));
    }
  }
};

// Convert a Handler return
utils.convReturnHandler = function(handler, converter) {
  return function(result) {
    handler.handle(converter(result));
  }
};

//
utils.number_jtype = {
  accept: function(obj) {
    return typeof obj === 'number';
  },
  wrap: utils.convReturnLong,
  unwrap: utils.convParamLong
};

utils.unknown_jtype = {
  accept: function(obj) {
    return typeof obj !== 'function';
  },
  wrap: utils.convReturnTypeUnknown,
  unwrap: utils.convParamTypeUnknown
};

utils.enum_jtype = function(jEnum) {
  return {
    accept: function(val) {
      return typeof val === 'string';
    },
    wrap: utils.convReturnEnum,
    unwrap: jEnum.valueOf
  };
};


module.exports = utils;
