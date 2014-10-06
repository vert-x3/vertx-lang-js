
moduleStarted(false);

vertx.setTimer(1100, function() {
  moduleStarted(true);
});


exports.vertxStop = function() {

  moduleStopped(false);

  vertx.setTimer(1100, function() {
    moduleStopped(true);
  });


}


