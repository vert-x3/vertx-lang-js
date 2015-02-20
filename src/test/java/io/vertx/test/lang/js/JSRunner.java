package io.vertx.test.lang.js;

import io.vertx.lang.js.ClasspathFileResolver;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;
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

    String file = ClasspathFileResolver.resolveFilename(scriptName);
    if (file == null) {
      URL url = getClass().getClassLoader().getResource(scriptName);
      if (url == null) {
        throw new IllegalStateException("Cannot find " + scriptName + " on classpath");
      }
      file = url.getFile();
    }
    engine.eval("load('" + file + "');");

  }
}

