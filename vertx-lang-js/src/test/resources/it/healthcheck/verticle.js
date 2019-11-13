module.exports = {
  vertxStartAsync: function (startFuture) {
    vertx.executeBlocking(function (blockingFuture) {
      try {
        var Router = require("vertx-web-js/router");
        var router = Router.router(vertx);

        var handler = require("vertx-health-checks-js/health_check_handler").create(vertx);

        handler.register("complete-with-ok", function (future) {
            future.complete({ok: true});
        });

        handler.register("complete-with-ko", function (future) {
          future.complete({ok: false});
        });

        handler.register("complete-with-data", function (future) {
          future.complete({ok: true, data: { foo: 'bar'}});
        });

        handler.register("complete-with-nothing", function (future) {
          future.complete();
        });

        router.get("/health/*").handler(handler.handle);

        var server = vertx.createHttpServer();
        server.requestHandler(router.handle).listen(5050);
        console.log('>>> verticle: now listening on port 5050')

        blockingFuture.complete()
      } catch(error) {
        blockingFuture.fail(error)
      }

    }, function(result, error) {
      error ? startFuture.fail(error) : startFuture.complete();
    })
  },

  vertxStop: function () {
    console.log('verticle stopped')
  }
};
