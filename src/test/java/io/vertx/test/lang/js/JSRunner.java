package io.vertx.test.lang.js;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
import java.io.File;
import java.net.URL;

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class JSRunner {

  public static void main(String[] args) {
    try {
      new JSRunner().run("eval_filename.js", "testBrokenModuleSyntaxError", true, true);
    } catch (ScriptException e) {
      System.out.println("message:" + e.getMessage());
      System.out.println("fileName:" + e.getFileName());
      System.out.println("lineNumber:" + e.getLineNumber());

    }
  }

  public void run(String scriptName, String testName) throws Exception {
    run(scriptName, testName, true, true);
  }

  public void run(String scriptName, String testName, boolean provideRequire, boolean provideConsole) throws ScriptException {
    ScriptEngineManager mgr = new ScriptEngineManager();
    ScriptEngine engine = mgr.getEngineByName("nashorn");
    if (provideRequire) {
      load("vertx-js/util/jvm-npm.js", engine);
      if (provideConsole) {
        engine.eval("var console = require('vertx-js/util/console'); var testName = '" + testName + "';");
      }
    }
    load(scriptName, engine);
  }



  private void load(String scriptName, ScriptEngine engine) throws ScriptException {

    // This is a hack to get Nashorn debugging working, as it doesn't work if the script is in the target directory
    // which it will be when running in the IDE as IntelliJ copies
    // src/main/resources and src/test/resources to target/classes during make!!

    String file = "src/main/resources/" + scriptName;
    File f = new File(file);
    if (!f.exists()) {
      file = "src/test/resources/" + scriptName;
      f = new File(file);
      if (!f.exists()) {
        URL url = getClass().getClassLoader().getResource(scriptName);
        if (url == null) {
          throw new IllegalStateException("Cannot find " + scriptName + " on classpath");
        }
        file = url.getFile();
      }
    }

    engine.eval("load('" + file + "');");

  }
}

