package io.vertx.test.lang.js;

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public abstract class JSTestBase {

  protected String getMethodName() {
    return Thread.currentThread().getStackTrace()[3].getMethodName();
  }

  protected abstract String getTestFile();

  protected void runTest() throws Exception {
    new JSRunner().run(getTestFile(), getMethodName());
  }
  
  protected void runTest(String testName) throws Exception {
    new JSRunner().run(getTestFile(), testName);
  }
}
