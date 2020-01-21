var TimeUnit = java.util.concurrent.TimeUnit;
var Assert = org.junit.Assert;
var CountDownLatch = java.util.concurrent.CountDownLatch;
var Vertx = require("vertx-js/vertx");
var Router = require("vertx-web-js/router");
var Cookie = require("vertx-js/cookie");
var HttpHeaders = require("vertx-js/http_headers");

function testCookies() {

  var latch = new CountDownLatch(1);
  var vertx = Vertx.vertx();

  var cookie1 = null;
  var router = Router.router(vertx);
  router.route().handler(function (routingContext) {
    var response = routingContext.response();
    cookie1 = routingContext.getCookie("cookie1");
    routingContext.addCookie(Cookie.cookie("cookie2", "apple"));
    response.end("Hello World from Vert.x-Web!");
  });
  var server = vertx.createHttpServer();
  server.requestHandler(router.handle).listen(8080);

  var client = vertx.createHttpClient();
  var cookie2 = null;
  client.get(8080, "localhost", "/some-uri", HttpHeaders.set("cookie", "cookie1=banana"), function (response) {
    console.log("Received response with status code " + response.statusCode());
    cookie2 = response.getHeader("set-cookie");
    latch.countDown();
  });

  Assert.assertTrue(latch.await(2, TimeUnit.MINUTES));
  vertx.close();
  Assert.assertNotNull(cookie1);
  Assert.assertEquals("cookie1", cookie1.getName());
  Assert.assertEquals("banana", cookie1.getValue());
  Assert.assertEquals("cookie2=apple", cookie2);
}

this[testName]();
