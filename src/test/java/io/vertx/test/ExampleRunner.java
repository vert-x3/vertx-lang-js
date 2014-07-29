package io.vertx.test;

import io.vertx.core.DeploymentOptions;
import io.vertx.core.Vertx;

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class ExampleRunner {

  public static void main(String[] args) {
    Vertx vertx = Vertx.vertx();
    vertx.deployVerticle("js:examples/http_server", DeploymentOptions.options(), ar -> {
      if (ar.succeeded()) {
        System.out.println("Succeeded in deploying");
      } else {
        System.out.println("Failed: " + ar.cause());
        ar.cause().printStackTrace();
      }
    });
    try {
      Thread.sleep(100000);
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}
