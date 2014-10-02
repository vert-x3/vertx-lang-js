console.log("in example server, vertx is " + vertx);

var options = {
  host: "localhost",
  port: 8080
};

vertx.createHttpServer(options).requestHandler(function(req) {
  var metrics = vertx.metrics();
  var name = req.path().substring(1).replace("/", ".");
  var metric = metrics[name];
  if (metric) {
    req.response().end(JSON.stringify(metric) + '\n');
  } else {
    var validStart = name.startsWith("vertx.");
    var validNames = Object.keys(metrics).filter(function (n) {
      if (validStart) {
        return n.startsWith(name);
      } else {
        return true;
      }
    });
    req.response().setStatusCode(404);
    req.response().end(JSON.stringify(validNames) + '\n');
  }
}).listen();