package io.vertx.test.lang.js;

import org.junit.Test;

/**
 *
 * This test tests all the different types of methods, return values and parameters that can be used in generated
 * APIs.
 *
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class ConstantTCKTest extends JSTestBase {

  @Override
  protected String getTestFile() {
    return "constant_tck_test.js";
  }

  @Test public void testBasic() throws Exception { runTest(); }
  @Test public void testVertxGen() throws Exception { runTest(); }
  @Test public void testDataObject() throws Exception { runTest(); }
  @Test public void testJson() throws Exception { runTest(); }
  @Test public void testEnum() throws Exception { runTest(); }
  @Test public void testThrowable() throws Exception { runTest(); }
  @Test public void testObject() throws Exception { runTest(); }
  @Test public void testNullable() throws Exception { runTest(); }
  @Test public void testList() throws Exception { runTest(); }
  @Test public void testSet() throws Exception { runTest(); }
  @Test public void testMap() throws Exception { runTest(); }
}
