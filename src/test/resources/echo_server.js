var options = {
  host: "localhost",
  port: 1234
};

vertx.createNetServer(options).connectHandler(function(conn) {
  conn.dataHandler(function(buff) {
    conn.writeBuffer(buff);
  })
}).listen();