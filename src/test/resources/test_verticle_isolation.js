/**
 * Tests the Javascript global variable isolation within a verticle. Sets up a scoped counter and an accidentally
 * globally scoped variable (x). Increments both of them after a delay and validates that both are what are expected
 * at each interval.
 *
 * This test will fail when multiple verticle instances on multiple threads are updating the same global space.
 *
 * This is only a simple example of the multi threaded isolation issue: jvm npm has a very serious race condition
 * where multiple verticle instances make use of require which causes the JVM NPM internal caching to fail and provide
 * undefined dependencies to multiple verticles. This is fixed by the per verticle isolation.
 */
var counter = 0,// Internal, private counter limited to the Verticle scope by require
  period = Math.floor((Math.random() * 200) + 1) + 50;// Just to stagger the Verticles updating between 50ms and 250ms intervals.
  x = 0; // Example of an accidental leak, but could be in any included NPM module (without isolation could be any include
         // by any Verticle deployed in the same JVM). Will be global for all Verticle instances if Isolation is not correct.

var reportIterations = 10;

vertx.setPeriodic( period, function() {
  // We increment both in the same way
  counter++;
  x++;

  if (x != counter) {
    // They are different, there is no point continuing as this is a failure of the Verticle isolation.
    vertx.eventBus().send("test_verticle_isolation", "fail");

  } else if ( counter % 10 == 0) {
    // Items are equal, which is what we want
    if (counter >= reportIterations) {
      vertx.eventBus().send("test_verticle_isolation", "ok");
    }
  }
});

