package io.vertx.test.lang.js;

import org.junit.Test;

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class TimeoutTest extends JSTestBase {
  @Override
  protected String getTestFile() {
    return "js_timeout_test.js";
  }

  @Test
  public void testSetTimeout() throws Exception {
    runTest();
  }

  @Test
  public void testClearTimeout() throws Exception {
    runTest();
  }

  @Test
  public void testSetInterval() throws Exception {
    runTest();
  }

  @Test
  public void testClearInterval() throws Exception {
    runTest();
  }

}
