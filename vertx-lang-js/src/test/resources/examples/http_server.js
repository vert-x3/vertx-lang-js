console.log("in example server, vertx is " + vertx);

var options = {
  host: "localhost",
  port: 8080
};

vertx.createHttpServer(options).requestHandler(function(req) {
  req.response().writeStringAndEnd("<html>hello world</html>");
}).listen();


module.exports = {};

module.exports.vertxStop = function() {
  console.log("in vertxStop!");
}