package io.vertx.test.lang.js;

import org.junit.Test;

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class RequireTest extends JSTestBase {

  @Override
  protected String getTestFile() {
    return "require_test.js";
  }

  @Test
  public void testRequireNoExtension() throws Exception {
    runTest();
  }

  @Test
  public void testRequireWithExtension() throws Exception {
    runTest();
  }

  @Test
  public void testRequireInDirectoryNoExtension() throws Exception {
    runTest();
  }

  @Test
  public void testRequireInDirectoryWithExtension() throws Exception {
    runTest();
  }

  @Test
  public void testRequireNotFound() throws Exception {
    runTest();
  }

  @Test
  public void testBrokenModuleSyntaxError() throws Exception {
    runTest();
  }

  @Test
  public void testBrokenModuleTypeErrorInMainBody() throws Exception {
    runTest();
  }

  @Test
  public void testBrokenModuleTypeErrorInFunction() throws Exception {
    runTest();
  }

  @Test
  public void testTopLevelIsolated() throws Exception {
    runTest();
  }

  @Test
  public void testCachedRequires() throws Exception {
    runTest();
  }

  @Test
  public void testRequireNPMModule() throws Exception {
    runTest();
  }

  @Test
  public void testRequireNPMModuleUsingNodePath() throws Exception {
    runTest();
  }
  
  @Test
  public void testRequireNPMModuleUsingClassPath() throws Exception {
  	class TestThread extends Thread {
  		public String result;
  		public void run() {
  			try {
  				runTest("testRequireNPMModuleUsingClassPath");
  				result = "PASS";
  			} catch (Throwable t) { result = t.getMessage(); }
  		}
  	}
  	TestThread test = new TestThread();
  	test.setContextClassLoader(new java.net.URLClassLoader(new java.net.URL[] { new java.io.File("src/test/npm/zip/my_npm_module.zip").toURI().toURL() }));
  	test.start();
  	test.join();
  	org.junit.Assert.assertEquals("PASS", test.result);
  }

  @Test
  public void testMultipleConcurrentRequires() throws Exception {
    runTest();
  }
}
