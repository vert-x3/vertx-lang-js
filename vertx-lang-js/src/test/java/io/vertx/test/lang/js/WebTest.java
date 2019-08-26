package io.vertx.test.lang.js;

import org.junit.Test;

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class WebTest extends JSTestBase {
  @Override
  protected String getTestFile() {
    return "js_web_test.js";
  }

  @Test
  public void testCookies() throws Exception {
    runTest();
  }
}
