package io.vertx.test.lang.js;

import io.vertx.core.DeploymentOptions;
import io.vertx.core.Vertx;
import io.vertx.core.VertxFactory;

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class ExampleRunner {

  public static void main(String[] args) {
    Vertx vertx = VertxFactory.newVertx();
    for (int i = 0; i < 10; i++) {
      vertx.deployVerticle("js:echo_server", new DeploymentOptions(), ar -> {
        if (ar.succeeded()) {
          System.out.println("Succeeded");
        } else {
          System.out.println("Failed: " + ar.cause());
          ar.cause().printStackTrace();
        }
      });
    }
    try {
      Thread.sleep(100000);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
