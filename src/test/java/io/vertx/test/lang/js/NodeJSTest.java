package io.vertx.test.lang.js;

import io.vertx.core.Vertx;
import io.vertx.ext.unit.Async;
import io.vertx.ext.unit.TestContext;
import io.vertx.ext.unit.junit.VertxUnitRunner;
import io.vertx.lang.js.JSVerticleFactory;

import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(VertxUnitRunner.class)
public class NodeJSTest {
	
	@Test
	public void testNodeJS(TestContext context) {
		Async async = context.async();
  	System.setProperty(JSVerticleFactory.ENABLE_NODEJS_VERTICLES_PROP_NAME, "true");
  	System.out.println(System.getProperty(JSVerticleFactory.ENABLE_NODEJS_VERTICLES_PROP_NAME));
    Vertx vertx = Vertx.vertx();
    vertx.deployVerticle("nodejs:target/test-classes/examples/http-server.zip", ar -> {
      if (ar.succeeded()) {
      	vertx.close();
        System.out.println("Succeeded in deploying");
      } else {
      	vertx.close();
        System.out.println("Failed: " + ar.cause());
        ar.cause().printStackTrace();
        context.fail(ar.cause());
      }
      async.complete();
    });
  }
}
