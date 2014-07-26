package io.vertx.test.lang.js;

import io.vertx.codegen.Generator;
import io.vertx.codegen.Helper;
import org.junit.Before;
import org.junit.Test;

/**
 *
 * This test tests all the different types of methods, return values and parameters that can be used in generated
 * APIs.
 *
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class APITest extends JSTestBase {

  @Before
  public void before() throws Exception {
    Generator gen = new Generator();
    System.setProperty("vertx-js.scriptDir", "vertx-js");
    gen.genAndApply("io.vertx.codegen.testmodel", packageName -> !packageName.contains("impl"),
                    clazz -> "target/classes/vertx-js/" + Helper.convertCamelCaseToUnderscores(clazz.getSimpleName()) + ".js",
                    "vertx-js/template/js.templ");
  }

  @Override
  protected String getTestFile() {
    return "api_test.js";
  }

  // Test params

  @Test
  public void testMethodWithBasicParams() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithBasicBoxedParams() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerBasicTypes() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultBasicTypes() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultBasicTypesFails() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithUserTypes() throws Exception {
    runTest();
  }

  @Test
  public void testObjectParam() throws Exception {
    runTest();
  }

  @Test
  public void testOptionsParam() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerListAndSet() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultListAndSet() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerUserTypes() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultUserTypes() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerVoid() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultVoid() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultVoidFails() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerThrowable() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerListVertxGen() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerSetVertxGen() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerListJsonObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerSetJsonObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerListJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerSetJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultListVertxGen() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultSetVertxGen() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultListJsonObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultSetJsonObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultListJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultSetJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithGenericParams() throws Exception {
    runTest();
  }

  // Test returns

  @Test
  public void testBasicReturns() throws Exception {
    runTest();
  }

  @Test
  public void testVertxGenReturn() throws Exception {
    runTest();
  }

  // TODO - could really test List and Set of all basic types instead of just String below

  @Test
  public void testListStringReturn() throws Exception {
    runTest();
  }

  @Test
  public void testSetStringReturn() throws Exception {
    runTest();
  }

  @Test
  public void testOverloadedMethods() throws Exception {
    runTest();
  }

  @Test
  public void testSuperInterfaces() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithGenericReturn() throws Exception {
    runTest();
  }

  @Test
  public void testFluentMethod() throws Exception {
    runTest();
  }

  @Test
  public void testStaticFactoryMethod() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithCachedReturn() throws Exception {
    runTest();
  }

  @Test
  public void testJsonReturns() throws Exception {
    runTest();
  }

  @Test
  public void testJsonParams() throws Exception {
    runTest();
  }

  @Test
  public void testJsonHandlerParams() throws Exception {
    runTest();
  }

  @Test
  public void testJsonHandlerAsyncResultParams() throws Exception {
    runTest();
  }

}
