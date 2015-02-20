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

}
