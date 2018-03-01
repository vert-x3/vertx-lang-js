var Assert = org.junit.Assert;
var RefedInterface1 = require('testmodel-js/refed_interface1');
var FunctionParamTCK = require('testmodel-js/function_param_tck');
var tck = new FunctionParamTCK(new Packages.io.vertx.codegen.testmodel.FunctionParamTCKImpl());
var refed_obj = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());

var testUtils = require("test_utils");
var assertEquals = testUtils.assertEquals;

function testBasicParam() {
  var list = tck.methodWithBasicParam(
    function(arg) {
      assertEquals(100, arg);
      return "ok0";
    },
    function(arg) {
      assertEquals(1000, arg);
      return "ok1";
    },
    function(arg) {
      assertEquals(100000, arg);
      return "ok2";
    },
    function(arg) {
      assertEquals(10000000000, arg);
      return "ok3";
    },
    function(arg) {
      assertEquals(3.5, arg);
      return "ok4";
    },
    function(arg) {
      assertEquals(0.01, arg);
      return "ok5";
    },
    function(arg) {
      Assert.assertTrue(arg);
      return "ok6";
    },
    function(arg) {
      assertEquals('F', '' + arg);
      return "ok7";
    },
    function(arg) {
      assertEquals('wibble', arg);
      return "ok8";
    }
  );
  assertEquals(9, list.length);
  for (var i = 0;i < 9;i++) {
    assertEquals("ok" + i, list[i]);
  }
}

function testJsonParam() {
  var list = tck.methodWithJsonParam(
    function(arg) {
      assertEquals(1, arg.one);
      assertEquals(2, arg.two);
      assertEquals(3, arg.three);
      return "ok0";
    },
    function(arg) {
      assertEquals(3, arg.length);
      assertEquals("one", arg[0]);
      assertEquals("two", arg[1]);
      assertEquals("three", arg[2]);
      return "ok1";
    }
  );
  assertEquals(2, list.length);
  for (var i = 0;i < 2;i++) {
    assertEquals("ok" + i, list[i]);
  }
}

function testVoidParam() {
  assertEquals("ok", tck.methodWithVoidParam(function(arg) {
    Assert.assertNull(arg);
    return "ok";
  }));
}

function testUserTypeParam() {
  assertEquals("ok", tck.methodWithUserTypeParam(refed_obj, function(arg) {
    refed_obj.setString("foobarjuu");
    assertEquals("foobarjuu", arg.getString());
    return "ok";
  }));
}

function testObjectParam() {
  assertEquals("ok", tck.methodWithObjectParam(123, function(arg) {
    assertEquals(123, arg);
    return "ok"
  }));
  assertEquals("ok", tck.methodWithObjectParam("the-string-arg", function(arg) {
    assertEquals("the-string-arg", arg);
    return "ok"
  }));
}

function testDataObjectParam() {
  assertEquals("ok", tck.methodWithDataObjectParam(function(arg) {
    assertEquals("foo_value", arg.foo);
    assertEquals(3, arg.bar);
    assertEquals(0.01, arg.wibble);
    return "ok"
  }));
}

function testEnumParam() {
  assertEquals("ok", tck.methodWithEnumParam(function(arg) {
    assertEquals("TIM", arg);
    return "ok"
  }));
}

function testListParam() {
  assertEquals("ok", tck.methodWithListParam(function(arg) {
    assertEquals("one", arg[0]);
    assertEquals("two", arg[1]);
    assertEquals("three", arg[2]);
    return "ok"
  }));
}

function testSetParam() {
  assertEquals("ok", tck.methodWithSetParam(function(arg) {
    assertEquals("one", arg[0]);
    assertEquals("two", arg[1]);
    assertEquals("three", arg[2]);
    return "ok"
  }));
}

function testMapParam() {
  assertEquals("ok", tck.methodWithMapParam(function(arg) {
    assertEquals("one", arg["one"]);
    assertEquals("two", arg["two"]);
    assertEquals("three", arg["three"]);
    return "ok"
  }));
}

function testGenericParam() {
  assertEquals("ok", tck.methodWithGenericParam("the-string", function(arg) {
    assertEquals("the-string", arg);
    return "ok"
  }));
  assertEquals("ok", tck.methodWithGenericParam({"some":"json"}, function(arg) {
    assertEquals("json", arg.some);
    return "ok"
  }));
}

function testGenericUserTypeParam() {
  assertEquals("ok", tck.methodWithGenericUserTypeParam("the-string", function(arg) {
    assertEquals("the-string", arg.getValue());
    return "ok"
  }));
  assertEquals("ok", tck.methodWithGenericUserTypeParam({"some":"json"}, function(arg) {
    assertEquals("json", arg.getValue().some);
    return "ok"
  }));
}

function testNullableListParam() {
  assertEquals("ok", tck.methodWithNullableListParam(
    function(arg) {
      return arg == null ? "ok" : "fail";
    }
  ));
}

function testBasicReturn() {
  assertEquals("ok", tck.methodWithBasicReturn(
    function(arg) {
      return 10;
    },
    function(arg) {
      return 1000;
    },
    function(arg) {
      return 100000;
    },
    function(arg) {
      return 10000000000;
    },
    function(arg) {
      return 0.01;
    },
    function(arg) {
      return 0.00001;
    },
    function(arg) {
      return true;
    },
    function(arg) {
      return 'C';
    },
    function(arg) {
      return "the-return";
    }
  ));
}

function testJsonReturn() {
  assertEquals("ok", tck.methodWithJsonReturn(
    function(arg) {
      return { "foo": "foo_value", "bar": 10, "wibble": 0.1};
    },
    function(arg) {
      return ["one","two","three"];
    }
  ));
}

function testObjectReturn() {
  assertEquals("ok", tck.methodWithObjectReturn(
    function(arg) {
      switch (arg) {
        case 0:
          return "the-string";
        case 1:
          return 123;
        case 2:
          return true;
        case 3:
          return {"foo":"foo_value"};
        case 4:
          return ["foo","bar"];
      }
      return null;
    }
  ));
}

function testDataObjectReturn() {
  assertEquals("ok", tck.methodWithDataObjectReturn(
    function(arg) {
      return { "foo": "wasabi", "bar": 6, "wibble": 0.01};
    }
  ));
}

function testEnumReturn() {
  assertEquals("ok", tck.methodWithEnumReturn(
    function(arg) {
      return "NICK";
    }
  ));
}

function testListReturn() {
  assertEquals("ok", tck.methodWithListReturn(
    function(arg) {
      return ["one", "two", "three"];
    }
  ));
}

function testSetReturn() {
  assertEquals("ok", tck.methodWithSetReturn(
    function(arg) {
      return ["one", "two", "three"];
    }
  ));
}

function testMapReturn() {
  assertEquals("ok", tck.methodWithMapReturn(
    function(arg) {
      return { "one":"one", "two":"two", "three":"three"};
    }
  ));
}

function testGenericReturn() {
  assertEquals("ok", tck.methodWithGenericReturn(
    function(arg) {
      switch (arg) {
        case 0:
          return "the-string";
        case 1:
          return 123;
        case 2:
          return true;
        case 3:
          return {"foo":"foo_value"};
        case 4:
          return ["foo","bar"];
      }
      return null;
    }
  ));
}

function testGenericUserTypeReturn() {
  assertEquals("ok", tck.methodWithGenericUserTypeReturn(
    function(arg) {
      return arg;
    }
  ));
}

function testNullableListReturn() {
  assertEquals("ok", tck.methodWithNullableListReturn(
    function(arg) {
      return null;
    }
  ));
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();
