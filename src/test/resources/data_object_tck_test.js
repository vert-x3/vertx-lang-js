var Assert = org.junit.Assert;

var TestInterface = require('testmodel-js/test_interface');
var RefedInterface1 = require('testmodel-js/refed_interface1');

var DataObjectTCK = require('testmodel-js/data_object_tck');
var dataObjectTCK = new DataObjectTCK(new Packages.io.vertx.codegen.testmodel.DataObjectTCKImpl());

var that = this;

function testJsonOnlyConstructorDataObject() {
  var dataObject = { "foo" : "bar" };
  dataObjectTCK.methodWithOnlyJsonObjectConstructorDataObject(dataObject);
}

if (typeof this[testName] === 'undefined') {
  throw "No such test: " + testName;
}

this[testName]();






