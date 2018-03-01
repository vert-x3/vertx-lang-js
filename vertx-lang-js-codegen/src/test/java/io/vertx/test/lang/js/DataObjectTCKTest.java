package io.vertx.test.lang.js;

import org.junit.Test;

/**
 *
 * This test tests all the different types of methods, return values and parameters that can be used in generated
 * APIs.
 *
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class DataObjectTCKTest extends JSTestBase {

  @Override
  protected String getTestFile() {
    return "data_object_tck_test.js";
  }

  @Test
  public void testJsonOnlyConstructorDataObject() throws Exception {
    runTest();
  }
}
