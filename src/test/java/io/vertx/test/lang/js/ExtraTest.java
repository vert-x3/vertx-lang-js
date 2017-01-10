package io.vertx.test.lang.js;

import org.junit.Test;

/**
 *
 * This test tests all the different types of methods, return values and parameters that can be used in generated
 * APIs.
 *
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class ExtraTest extends JSTestBase {

  @Override
  protected String getTestFile() {
    return "extra_test.js";
  }

  // Test params

  @Test
  public void testTypeVarReturn() throws Exception {
    runTest();
  }

  @Test
  public void testParameterizedReturn() throws Exception {
    runTest();
  }

  @Test
  public void testTypeVarParam() throws Exception {
    runTest();
  }
}
