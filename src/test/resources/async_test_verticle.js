
exports.vertxStartAsync = function(startFuture) {
  vertx.setTimer(1100, function() {
    startFuture.complete();
  });
};

exports.vertxStopAsync = function(stopFuture) {

  vertx.setTimer(1100, function() {
    stopFuture.complete();
  });

}


