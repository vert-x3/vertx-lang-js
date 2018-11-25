package io.vertx.test.lang.js;

import org.junit.Test;

public class InheritedMethodsTest extends JSTestBase {

  @Override
  protected String getTestFile() {
    return "inherited_methods_test.js";
  }

  @Test
  public void testCallInheritedMethods() throws Exception {
    runTest();
  }

  @Test
  public void testCallMethodOverloadingInheritedMethods() throws Exception {
    runTest();
  }

  @Test
  public void testCallStaticMethods() throws Exception {
    runTest();
  }
}
