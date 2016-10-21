package io.vertx.test.lang.js;

import org.junit.Test;

/**
 *
 * This test tests all the different types of methods, return values and parameters that can be used in generated
 * APIs.
 *
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class GenericsTCKTest extends JSTestBase {

  @Override
  protected String getTestFile() {
    return "generics_tck_test.js";
  }

  // Test params

  @Test
  public void testMethodWithUserTypeParameterizedReturn() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithClassTypeParameterizedReturn() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerClassTypeParameterized() throws Exception {
    runTest();
  }
}
