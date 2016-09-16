package io.vertx.test.lang.js;

import org.junit.Test;

/**
 *
 * This test tests all the different types of methods, return values and parameters that can be used in generated
 * APIs.
 *
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class ApiTCKTest extends JSTestBase {

  @Override
  protected String getTestFile() {
    return "api_tck_test.js";
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
  public void testDataObjectParam() throws Exception {
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
  public void testMethodWithConcreteHandlerUserTypeSubtype() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithAbstractHandlerUserTypeSubtype() throws Exception {
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
  public void testMethodWithHandlerGenericUserType() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultGenericUserType() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerDataObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultDataObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerStringReturn() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerGenericReturn() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerVertxGenReturn() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultStringReturn() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultGenericReturn() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultVertxGenReturn() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithGenericParam() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithGenericHandler() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithGenericHandlerAsyncResult() throws Exception {
    runTest();
  }

  @Test
  public void testJsonParams() throws Exception {
    runTest();
  }

// FIXME - temporarily commented out until we have proper support for nullable / not nullable params using
// codegen
//  @Test
//  public void testNullJsonParams() throws Exception {
//    runTest();
//  }

  @Test
  public void testJsonHandlerParams() throws Exception {
    runTest();
  }

  @Test
  public void testComplexJsonHandlerParams() throws Exception {
    runTest();
  }

  @Test
  public void testJsonHandlerAsyncResultParams() throws Exception {
    runTest();
  }

  @Test
  public void testNullJsonHandlerAsyncResultParams() throws Exception {
    runTest();
  }

  @Test
  public void testComplexJsonHandlerAsyncResultParams() throws Exception {
    runTest();
  }

  @Test
  public void testEnumParam() throws Exception {
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

  @Test
  public void testVertxGenNullReturn() throws Exception {
    runTest();
  }

  @Test
  public void testAbstractVertxGenReturn() throws Exception {
    runTest();
  }

  @Test
  public void testDataObjectReturn() throws Exception {
    runTest();
  }

  @Test
  public void testDataObjectNullReturn() throws Exception {
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
  public void testNullJsonReturns() throws Exception {
    runTest();
  }

  @Test
  public void testEnumReturn() throws Exception {
    runTest();
  }

  @Test
  public void testThrowableReturn() throws Exception {
    runTest();
  }

  @Test
  public void testThrowableParam() throws Exception {
    runTest();
  }

  @Test
  public void testSuperMethodOverloadedBySubclass() throws Exception {
    runTest();
  }

  @Test
  public void testCustomModule() throws Exception {
    runTest();
  }
}
