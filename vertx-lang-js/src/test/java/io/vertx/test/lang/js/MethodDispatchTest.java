package io.vertx.test.lang.js;

import org.junit.Test;

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class MethodDispatchTest extends JSTestBase {
  @Override
  protected String getTestFile() {
    return "test_method_dispatch.js";
  }

  @Test
  public void testObjectArgumentShouldIncreaseTheArgumentCount() throws Exception {
    runTest();
  }

}
