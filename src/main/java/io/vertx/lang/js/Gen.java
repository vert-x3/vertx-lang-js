package io.vertx.lang.js;


import io.vertx.codegen.Generator;
import io.vertx.codegen.Helper;

/**
 * Actually run the generation
 *
 * TODO - we should wrap this in a Maven MOJO so it can run as part of the build lifecyle
 *
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class Gen {

  public static void main(String[] args) {
    try {
      new Gen().run();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  public void run() throws Exception {
    Generator gen = new Generator();
    gen.genAndApply("io.vertx.core", packageName -> !packageName.contains("impl"),
      clazz -> "src/main/resources/vertx/" +  Helper.convertCamelCaseToUnderscores(clazz.getSimpleName()) + ".js",
      "src/templates/js.templ");
  }
}
