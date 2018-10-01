package io.vertx.test.lang.js;

import io.vertx.lang.js.ClasspathFileResolver;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import java.io.File;
import java.io.InputStream;
import java.net.JarURLConnection;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.util.jar.JarFile;

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
      if (url.getProtocol().equals("jar")) {
        try {
          JarURLConnection connection = (JarURLConnection) url.openConnection();
          JarFile f = connection.getJarFile();
          Path path = Files.createTempFile("vertx", ".dat");
          try (InputStream in = f.getInputStream(connection.getJarEntry())) {
            Files.copy(in, path, StandardCopyOption.REPLACE_EXISTING);
          }
          file = path.toFile().getAbsolutePath();
        } catch (Exception e) {
          throw new AssertionError(e);
        }
      } else {
        file = url.getFile();
      }
    }
    if (File.separatorChar != '/') {
      file = file.replace(File.separatorChar, '/');
    }
    engine.eval("load('" + file + "');");
  }
}

