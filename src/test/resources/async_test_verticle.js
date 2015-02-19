
exports.vertxStartAsync = function(startFuture) {
  if (startFuture._jdel === undefined) {
    startFuture.fail("Was expecting a proxy and not a native object");
  } else {
    vertx.setTimer(1100, function() {
      startFuture.complete();
    });
  }
};

exports.vertxStopAsync = function(stopFuture) {
  if (stopFuture._jdel === undefined) {
    stopFuture.fail("Was expecting a proxy and not a native object");
  } else {
    vertx.setTimer(1100, function() {
      stopFuture.complete();
    });
  }
};


