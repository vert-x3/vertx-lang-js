package io.vertx.test.lang.js;

import org.junit.Test;

/**
 *
 * This test tests all the different types of methods, return values and parameters that can be used in generated
 * APIs.
 *
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class APITest extends JSTestBase {

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
  public void testDataObjectParam() throws Exception {
    runTest();
  }

  @Test
  public void testNullDataObjectParam() throws Exception {
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
  public void testMethodWithHandlerListVertxGen() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerListAbstractVertxGen() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerSetVertxGen() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerSetAbstractVertxGen() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerListJsonObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerListNullJsonObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerSetJsonObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerSetNullJsonObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerListJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerListNullJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerSetJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerSetNullJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultListVertxGen() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultListAbstractVertxGen() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultSetVertxGen() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultSetAbstractVertxGen() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultListJsonObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultListNullJsonObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultSetJsonObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultSetNullJsonObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultListJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultListNullJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultSetJsonArray() throws Exception {
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
  public void testNullJsonHandlerParams() throws Exception {
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
  public void testEnumParam() throws Exception {
    runTest();
  }


  @Test
  public void testMethodWithListParams() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithSetParams() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithMapParams() throws Exception {
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
  public void testAbstractVertxGenReturn() throws Exception {
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
  public void testMapReturn() throws Exception {
    runTest();
  }

  @Test
  public void testMapStringReturn() throws Exception {
    runTest();
  }

  @Test
  public void testMapJsonObjectReturn() throws Exception {
    runTest();
  }

  @Test
  public void testMapJsonArrayReturn() throws Exception {
    runTest();
  }

  @Test
  public void testMapLongReturn() throws Exception {
    runTest();
  }

  @Test
  public void testMapNullReturn() throws Exception {
    runTest();
  }

  @Test
  public void testListStringReturn() throws Exception {
    runTest();
  }

  @Test
  public void testListLongReturn() throws Exception {
    runTest();
  }

  @Test
  public void testListJsonObjectReturn() throws Exception {
    runTest();
  }

  @Test
  public void testListJsonArrayReturn() throws Exception {
    runTest();
  }

  @Test
  public void testListVertxGenReturn() throws Exception {
    runTest();
  }

  @Test
  public void testSetStringReturn() throws Exception {
    runTest();
  }

  @Test
  public void testSetLongReturn() throws Exception {
    runTest();
  }

  @Test
  public void testSetJsonObjectReturn() throws Exception {
    runTest();
  }

  @Test
  public void testSetJsonArrayReturn() throws Exception {
    runTest();
  }

  @Test
  public void testSetVertxGenReturn() throws Exception {
    runTest();
  }


  @Test
  public void testThrowableReturn() throws Exception {
    runTest();
  }
}
