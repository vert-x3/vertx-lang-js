package io.vertx.lang.js;

import io.vertx.core.DeploymentOptions;
import io.vertx.core.Future;
import io.vertx.core.json.DecodeException;
import io.vertx.core.json.JsonObject;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;
import io.vertx.core.spi.VerticleFactory;

import java.io.File;
import java.io.InputStream;
import java.net.URL;
import java.net.URLClassLoader;
import java.util.Collections;
import java.util.NoSuchElementException;
import java.util.Scanner;

/**
 * @author marcoellwanger
 * 
 * Experimental service factory to run node.js projects on the local fs
 */
public class NodeJSServiceFactory extends JSVerticleFactory {
	
	private final Logger log = LoggerFactory.getLogger(NodeJSServiceFactory.class);

  @Override
  public String prefix() {
    return "nodejs";
  }

  @Override
  public boolean requiresResolve() {
    return true;
  }
  
  @Override
  public void resolve(String identifier, DeploymentOptions deploymentOptions, ClassLoader classLoader, Future<String> resolution) {
    identifier = VerticleFactory.removePrefix(identifier);
    String descriptorFile = "package.json";
    try {
      JsonObject descriptor;
      String main;
      File file = new File(identifier);
      URLClassLoader urlc = new URLClassLoader(new URL[]{file.toURI().toURL()}, classLoader);
      try (InputStream is = urlc.getResourceAsStream(descriptorFile)) {
        if (is == null) {
        	urlc.close();
          throw new IllegalArgumentException("Cannot find service descriptor file " + descriptorFile + " on classpath");
        }
        try (Scanner scanner = new Scanner(is, "UTF-8").useDelimiter("\\A")) {
          String conf = scanner.next();
          descriptor = new JsonObject(conf);
        } catch (NoSuchElementException e) {
        	urlc.close();
          throw new IllegalArgumentException(descriptorFile + " is empty");
        } catch (DecodeException e) {
        	urlc.close();
          throw new IllegalArgumentException(descriptorFile + " contains invalid json");
        }
      }
      main = descriptor.getString("main");
      if (main == null) {
      	urlc.close();
        throw new IllegalArgumentException(descriptorFile + " does not contain a main field");
      } else if (! main.endsWith(".js")) main = main + ".js";

      deploymentOptions.setExtraClasspath(Collections.singletonList(file.getAbsolutePath()));
      deploymentOptions.setIsolationGroup("__vertx_maven_" + file.getName());
      super.resolve(main, deploymentOptions, urlc, resolution);
    } catch (Exception e) {
      resolution.fail(e);
    }
  }
}
