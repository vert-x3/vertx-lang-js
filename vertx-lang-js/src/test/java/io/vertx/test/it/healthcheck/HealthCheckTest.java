package io.vertx.test.it.healthcheck;

import io.vertx.core.Vertx;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.unit.Async;
import io.vertx.ext.unit.TestContext;
import io.vertx.ext.unit.junit.VertxUnitRunner;
import io.vertx.ext.web.client.WebClient;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Tests the usage of Status in JavaScript, and other language that can pass JSON Object as result to the future.
 *
 * @author <a href="http://escoffier.me">Clement Escoffier</a>
 */
@RunWith(VertxUnitRunner.class)
public class HealthCheckTest {

  private Vertx vertx;

  @Before
  public void setUp() {
    vertx = Vertx.vertx();
  }

  @After
  public void tearDown() {
    vertx.close();
  }

  @Test(timeout = 10000L)
  public void test(TestContext context) {
    Async deploy = context.async();
    System.out.println(">>> test: starting health check verticle");
    vertx.deployVerticle("it/healthcheck/verticle.js", context.asyncAssertSuccess(id -> deploy.complete()));

    deploy.await();

    WebClient client = WebClient.create(vertx);

    Async nothing = context.async();
    client.get(5050, "localhost", "/health/complete-with-nothing")
      .send(async -> {
        if (async.failed()) {
          context.fail(async.cause());
        }
        assertStatus(async.result().bodyAsJsonObject(), "UP");
        assertData(async.result().bodyAsJsonObject(), null);
        nothing.complete();
      });

    nothing.await();

    Async ok = context.async();
    client.get(5050, "localhost", "/health/complete-with-ok")
      .send(async -> {
        if (async.failed()) {
          context.fail(async.cause());
        }
        assertStatus(async.result().bodyAsJsonObject(), "UP");
        assertData(async.result().bodyAsJsonObject(), null);
        ok.complete();
      });

    Async ko = context.async();
    client.get(5050, "localhost", "/health/complete-with-ko")
      .send(async -> {
        if (async.failed()) {
          context.fail(async.cause());
        }
        assertStatus(async.result().bodyAsJsonObject(), "DOWN");
        assertData(async.result().bodyAsJsonObject(), null);
        ko.complete();
      });


    Async extra = context.async();
    client.get(5050, "localhost", "/health/complete-with-data")
      .send(async -> {
        if (async.failed()) {
          context.fail(async.cause());
        }
        assertStatus(async.result().bodyAsJsonObject(), "UP");
        assertData(async.result().bodyAsJsonObject(), new JsonObject().put("foo", "bar"));
        extra.complete();
      });
  }

  public void assertData(JsonObject obj, JsonObject expected) {
    Assert.assertEquals(obj.getJsonObject("data"), expected);
  }

  public void assertStatus(JsonObject obj, String expected) {
    String status = obj.getString("status", obj.getString("outcome"));
    assertThat(status).isEqualTo(expected);
  }
}
