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
    // With Java 9 : Long -> Integer in function returns which leads to CCE
    if (!System.getProperty("java.version").equals("9")) {
      runTest();
    } else {
      System.out.println("Skipping testTypeVarParam test on Java 9");
    }
  }
}
