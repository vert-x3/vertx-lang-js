package io.vertx.test.lang.js;

import org.junit.Test;

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class AsyncStartTest extends JSTestBase {
  @Override
  protected String getTestFile() {
    return "async_start_test.js";
  }

  @Test
  public void testAsyncStartStop() throws Exception {
    runTest();
  }

  @Test
  public void testAsyncStartStopWithFuture() throws Exception {
    runTest();
  }
}

