var Assert = org.junit.Assert;
var RefedInterface1 = require('testmodel-js/refed_interface1');
var FunctionParamTCK = require('testmodel-js/function_param_tck');
var tck = new FunctionParamTCK(new Packages.io.vertx.codegen.testmodel.FunctionParamTCKImpl());
var refed_obj = new RefedInterface1(new Packages.io.vertx.codegen.testmodel.RefedInterface1Impl());

function testBasicParam() {
  var list = tck.methodWithBasicParam(
    function(arg) {
      Assert.assertEquals(100, arg, 0);
      return "ok0";
    },
    function(arg) {
      Assert.assertEquals(1000, arg, 0);
      return "ok1";
    },
    function(arg) {
      Assert.assertEquals(100000, arg, 0);
      return "ok2";
    },
    function(arg) {
      Assert.assertEquals(10000000000, arg);
      return "ok3";
    },
    function(arg) {
      Assert["assertEquals(float, float, float)"](3.5, arg, 0.001);
      return "ok4";
    },
    function(arg) {
      Assert.assertEquals(0.01, arg, 0.0001);
      return "ok5";
    },
    function(arg) {
      Assert.assertTrue(arg);
      return "ok6";
    },
    function(arg) {
      Assert.assertEquals('F', '' + arg);
      return "ok7";
    },
    function(arg) {
      Assert.assertEquals('wibble', arg);
      return "ok8";
    }
  );
  Assert.assertEquals(9, list.length, 0);
  for (var i = 0;i < 9;i++) {
    Assert.assertEquals("ok" + i, list[i]);
  }
}

function testJsonParam() {
  var list = tck.methodWithJsonParam(
    function(arg) {
      Assert.assertEquals(1, arg.one, 0);
      Assert.assertEquals(2, arg.two, 0);
      Assert.assertEquals(3, arg.three, 0);
      return "ok0";
    },
    function(arg) {
      Assert["assertEquals(long,long)"](3, arg.length);
      Assert.assertEquals("one", arg[0]);
      Assert.assertEquals("two", arg[1]);
      Assert.assertEquals("three", arg[2]);
      return "ok1";
    }
  );
  Assert.assertEquals(2, list.length, 0);
  for (var i = 0;i < 2;i++) {
    Assert.assertEquals("ok" + i, list[i]);
  }
}

function testVoidParam() {
  Assert.assertEquals("ok", tck.methodWithVoidParam(function(arg) {
    Assert.assertNull(arg);
    return "ok";
  }));
}

function testUserTypeParam() {
  Assert.assertEquals("ok", tck.methodWithUserTypeParam(refed_obj, function(arg) {
    refed_obj.setString("foobarjuu");
    Assert.assertEquals("foobarjuu", arg.getString());
    return "ok";
  }));
}

function testObjectParam() {
  Assert.assertEquals("ok", tck.methodWithObjectParam(123, function(arg) {
    Assert.assertEquals(123, arg, 0.01);
    return "ok"
  }));
  Assert.assertEquals("ok", tck.methodWithObjectParam("the-string-arg", function(arg) {
    Assert.assertEquals("the-string-arg", arg);
    return "ok"
  }));
}

function testDataObjectParam() {
  Assert.assertEquals("ok", tck.methodWithDataObjectParam(function(arg) {
    Assert.assertEquals("foo_value", arg.foo);
    Assert.assertEquals(3, arg.bar, 0);
    Assert.assertEquals(0.01, arg.wibble, 0);
    return "ok"
  }));
}

function testEnumParam() {
  Assert.assertEquals("ok", tck.methodWithEnumParam(function(arg) {
    Assert.assertEquals("TIM", arg);
    return "ok"
  }));
}

function testListParam() {
  Assert.assertEquals("ok", tck.methodWithListParam(function(arg) {
    Assert.assertEquals("one", arg[0]);
    Assert.assertEquals("two", arg[1]);
    Assert.assertEquals("three", arg[2]);
    return "ok"
  }));
}

function testSetParam() {
  Assert.assertEquals("ok", tck.methodWithSetParam(function(arg) {
    Assert.assertEquals("one", arg[0]);
    Assert.assertEquals("two", arg[1]);
    Assert.assertEquals("three", arg[2]);
    return "ok"
  }));
}

function testMapParam() {
  Assert.assertEquals("ok", tck.methodWithMapParam(function(arg) {
    Assert.assertEquals("one", arg["one"]);
    Assert.assertEquals("two", arg["two"]);
    Assert.assertEquals("three", arg["three"]);
    return "ok"
  }));
}

function testGenericParam() {
  Assert.assertEquals("ok", tck.methodWithGenericParam("the-string", function(arg) {
    Assert.assertEquals("the-string", arg);
    return "ok"
  }));
  Assert.assertEquals("ok", tck.methodWithGenericParam({"some":"json"}, function(arg) {
    Assert.assertEquals("json", arg.some);
    return "ok"
  }));
}

function testGenericUserTypeParam() {
  Assert.assertEquals("ok", tck.methodWithGenericUserTypeParam("the-string", function(arg) {
    Assert.assertEquals("the-string", arg.getValue());
    return "ok"
  }));
  Assert.assertEquals("ok", tck.methodWithGenericUserTypeParam({"some":"json"}, function(arg) {
    Assert.assertEquals("json", arg.getValue().some);
    return "ok"
  }));
}

function testNullableListParam() {
  Assert.assertEquals("ok", tck.methodWithNullableListParam(
    function(arg) {
      return arg == null ? "ok" : "fail";
    }
  ));
}

function testBasicReturn() {
  Assert.assertEquals("ok", tck.methodWithBasicReturn(
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
  Assert.assertEquals("ok", tck.methodWithJsonReturn(
    function(arg) {
      return { "foo": "foo_value", "bar": 10, "wibble": 0.1};
    },
    function(arg) {
      return ["one","two","three"];
    }
  ));
}

function testObjectReturn() {
  Assert.assertEquals("ok", tck.methodWithObjectReturn(
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
  Assert.assertEquals("ok", tck.methodWithDataObjectReturn(
    function(arg) {
      return { "foo": "wasabi", "bar": 6, "wibble": 0.01};
    }
  ));
}

function testEnumReturn() {
  Assert.assertEquals("ok", tck.methodWithEnumReturn(
    function(arg) {
      return "NICK";
    }
  ));
}

function testListReturn() {
  Assert.assertEquals("ok", tck.methodWithListReturn(
    function(arg) {
      return ["one", "two", "three"];
    }
  ));
}

function testSetReturn() {
  Assert.assertEquals("ok", tck.methodWithSetReturn(
    function(arg) {
      return ["one", "two", "three"];
    }
  ));
}

function testMapReturn() {
  Assert.assertEquals("ok", tck.methodWithMapReturn(
    function(arg) {
      return { "one":"one", "two":"two", "three":"three"};
    }
  ));
}

function testGenericReturn() {
  Assert.assertEquals("ok", tck.methodWithGenericReturn(
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
  Assert.assertEquals("ok", tck.methodWithGenericUserTypeReturn(
    function(arg) {
      return arg;
    }
  ));
}

function testNullableListReturn() {
  Assert.assertEquals("ok", tck.methodWithNullableListReturn(
    function(arg) {
      return null;
    }
  ));
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();
