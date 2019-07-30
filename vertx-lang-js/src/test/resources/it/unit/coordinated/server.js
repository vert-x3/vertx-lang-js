exports.vertxStartAsync = function(startFuture) {
  var server = vertx.createHttpServer({"port":8080,"host":"localhost"});
  server.requestStream().handler(function(req) {
    req.response().setChunked(true).end("Hello World");
  });
  server.listen(function(ar) {
    startFuture.complete();
  });
};
