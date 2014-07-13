package io.vertx.test.lang.js;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.net.URL;
import java.util.Scanner;

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class JSRunner {

  public void run(String scriptName, String testName) throws Exception {
    run(scriptName, testName, true, true);
  }

  public void run(String scriptName, String testName, boolean provideRequire, boolean provideConsole) throws Exception {
    ScriptEngineManager mgr = new ScriptEngineManager();
    ScriptEngine engine = mgr.getEngineByName("nashorn");
    if (provideRequire) {
      load("vertx-js/util/require.js", engine);
      if (provideConsole) {
        engine.eval("var console = require('vertx-js/util/console'); var testName = '" + testName + "';");
      }
    }

    load(scriptName, engine);
  }

  private void load(String scriptName, ScriptEngine engine) throws Exception {
    URL url = getClass().getClassLoader().getResource(scriptName);
    if (url == null) {
      throw new IllegalStateException("Cannot find " + scriptName + " on classpath");
    }
    try (Scanner scanner = new Scanner(url.openStream(), "UTF-8").useDelimiter("\\A")) {
      String source = scanner.next();
      engine.eval(source);
    }
  }
}
