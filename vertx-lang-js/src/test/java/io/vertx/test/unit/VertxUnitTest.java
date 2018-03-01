package io.vertx.test.unit;

import io.vertx.core.json.JsonObject;
import io.vertx.ext.unit.collect.EventBusCollector;
import io.vertx.test.core.VertxTestBase;
import org.junit.Test;

/**
 * @author <a href="mailto:julien@julienviet.com">Julien Viet</a>
 */
public class VertxUnitTest extends VertxTestBase {

  @Test
  public void testAssertionsJs() throws Exception {
    testAssertions("js:unit/verticle/assertions");
  }

  private void testAssertions(String verticle) throws Exception {
    vertx.eventBus().<JsonObject>consumer("assert_tests").bodyStream().handler(msg -> {
      String type = msg.getString("type");
      switch (type) {
        case EventBusCollector.EVENT_TEST_CASE_END:
          String name = msg.getString("name");
          if (name.startsWith("fail_")) {
            assertNotNull(msg.getValue("failure"));
          } else {
            assertEquals(null, msg.getValue("failure"));
          }
          break;
        case EventBusCollector.EVENT_TEST_SUITE_END:
          testComplete();
          break;
      }
    });
    vertx.deployVerticle(verticle, ar -> {
      assertTrue(ar.succeeded());
    });
    await();
  }

  @Test
  public void testJavaScriptTimer() {
    vertx.deployVerticle("js:unit/verticle/timer", ar -> {
      assertTrue(ar.succeeded());
      testComplete();
    });
    await();
  }

  @Test
  public void testJavaScriptFailure() {
    vertx.deployVerticle("js:unit/verticle/failing", ar -> {
      assertTrue(ar.failed());
      assertEquals("Error: the_failure", ar.cause().getMessage());
      testComplete();
    });
    await();
  }

  @org.junit.Test
  public void testCoordinated() {
    vertx.eventBus().<JsonObject>consumer("test").handler(msg -> {
      switch (msg.body().getString("type")) {
        case EventBusCollector.EVENT_TEST_SUITE_ERROR:
          // Replace with data object when done
          fail("Unexpected failure " + msg.body().getJsonObject("failure"));
          break;
        case EventBusCollector.EVENT_TEST_SUITE_END:
          testComplete();
          break;
      }
    });
    vertx.deployVerticle("js:unit/verticle/coordinated/test", ar -> {
      assertTrue(ar.succeeded());
    });
    await();
  }
}
