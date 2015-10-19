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
  public void testListOfDataObjectsParam() throws Exception {
    runTest();
  }

  @Test
  public void testSetOfDataObjectsParam() throws Exception {
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
  public void testMethodWithHandlerListComplexJsonObject() throws Exception {
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
  public void testMethodWithHandlerSetComplexJsonObject() throws Exception {
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
  public void testMethodWithHandlerListComplexJsonArray() throws Exception {
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
  public void testMethodWithHandlerSetComplexJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerNullListDataObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerListDataObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerSetDataObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerNullSetDataObject() throws Exception {
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
  public void testMethodWithHandlerAsyncResultListComplexJsonObject() throws Exception {
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
  public void testMethodWithHandlerAsyncResultSetComplexJsonObject() throws Exception {
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
  public void testMethodWithHandlerAsyncResultListComplexJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultSetJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultSetNullJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultSetComplexJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultNullListDataObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultListDataObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultSetDataObject() throws Exception {
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

  @Test
  public void testMethodWithHandlerListEnum() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerSetEnum() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultListEnum() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultSetEnum() throws Exception {
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
  public void testMapComplexJsonArrayReturn() throws Exception {
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
  public void testMapComplexJsonObjectReturn() throws Exception {
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
  public void testListComplexJsonObjectReturn() throws Exception {
    runTest();
  }

  @Test
  public void testListJsonArrayReturn() throws Exception {
    runTest();
  }

  @Test
  public void testListComplexJsonArrayReturn() throws Exception {
    runTest();
  }

  @Test
  public void testListVertxGenReturn() throws Exception {
    runTest();
  }

  @Test
  public void testListDataObjectReturn() throws Exception {
    runTest();
  }

  @Test
  public void testListEnumReturn() throws Exception {
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
  public void testSetComplexJsonObjectReturn() throws Exception {
    runTest();
  }

  @Test
  public void testSetJsonArrayReturn() throws Exception {
    runTest();
  }

  @Test
  public void testSetComplexJsonArrayReturn() throws Exception {
    runTest();
  }

  @Test
  public void testSetVertxGenReturn() throws Exception {
    runTest();
  }

  @Test
  public void testSetDataObjectReturn() throws Exception {
    runTest();
  }

  @Test
  public void testSetEnumReturn() throws Exception {
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
  public void testCustomModule() throws Exception {
    runTest();
  }

  @Test
  public void testNullableByte() throws Exception {
    runTest();
  }

  @Test
  public void testNullableShort() throws Exception {
    runTest();
  }

  @Test
  public void testNullableInteger() throws Exception {
    runTest();
  }

  @Test
  public void testNullableFloat() throws Exception {
    runTest();
  }

  @Test
  public void testNullableDouble() throws Exception {
    runTest();
  }

  @Test
  public void testNullableBoolean() throws Exception {
    runTest();
  }

  @Test
  public void testNullableString() throws Exception {
    runTest();
  }

  @Test
  public void testNullableChar() throws Exception {
    runTest();
  }

  @Test
  public void testNullableJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testNullableJsonObject() throws Exception {
    runTest();
  }

  @Test
  public void testNullableApi() throws Exception {
    runTest();
  }

  @Test
  public void testNullableDataObject() throws Exception {
    runTest();
  }

  @Test
  public void testNullableEnum() throws Exception {
    runTest();
  }

  @Test
  public void testGenericNullableTypeVariable() throws Exception {
    runTest();
  }

  @Test
  public void testNullableHandler() throws Exception {
    runTest();
  }

  @Test
  public void testNullableListByte() throws Exception {
    runTest();
  }

  @Test
  public void testNullableListShort() throws Exception {
    runTest();
  }

  @Test
  public void testNullableListInteger() throws Exception {
    runTest();
  }

  @Test
  public void testNullableListLong() throws Exception {
    runTest();
  }

  @Test
  public void testNullableListFloat() throws Exception {
    runTest();
  }

  @Test
  public void testNullableListDouble() throws Exception {
    runTest();
  }

  @Test
  public void testNullableListBoolean() throws Exception {
    runTest();
  }

  @Test
  public void testNullableListString() throws Exception {
    runTest();
  }

  @Test
  public void testNullableListChar() throws Exception {
    runTest();
  }

  @Test
  public void testNullableListJsonObject() throws Exception {
    runTest();
  }

  @Test
  public void testNullableListJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testNullableListApi() throws Exception {
    runTest();
  }

  @Test
  public void testNullableListDataObject() throws Exception {
    runTest();
  }

  @Test
  public void testNullableListEnum() throws Exception {
    runTest();
  }

  @Test
  public void testNullableSetString() throws Exception {
    runTest();
  }

  @Test
  public void testNullableMapString() throws Exception {
    runTest();
  }

  @Test
  public void testListNullableInteger() throws Exception {
    runTest();
  }

  @Test
  public void testListNullableBoolean() throws Exception {
    runTest();
  }

  @Test
  public void testListNullableString() throws Exception {
    runTest();
  }

  @Test
  public void testListNullableJsonObject() throws Exception {
    runTest();
  }

  @Test
  public void testListNullableJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testListNullableApi() throws Exception {
    runTest();
  }

  @Test
  public void testListNullableDataObject() throws Exception {
    runTest();
  }
}
