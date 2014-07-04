var options = {
  host: "localhost",
  port: 8080
};

vertx.createHttpServer(options).requestHandler(function(req) {
  req.response().writeStringAndEnd("<html>hello world</html>");
}).listen();