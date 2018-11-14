/*
 * Copyright 2016 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

package io.vertx.test.lang.js;

import org.junit.Test;

/**
 * @author Thomas Segismont
 */
public class CollectionTCKTest extends JSTestBase {

  @Override
  protected String getTestFile() {
    return "collection_tck_test.js";
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
  public void testMapComplexJsonArrayReturn() throws Exception {
    runTest();
  }

  @Test
  public void testMapObjectReturn() throws Exception {
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
  public void testListObjectReturn() throws Exception {
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
  public void testSetObjectReturn() throws Exception {
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
  public void testMethodWithHandlerListComplexJsonObject() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerSetJsonObject() throws Exception {
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
  public void testMethodWithHandlerListComplexJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerSetJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerSetComplexJsonArray() throws Exception {
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
  public void testMethodWithHandlerAsyncResultSetJsonObject() throws Exception {
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
  public void testMethodWithHandlerAsyncResultListComplexJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultSetJsonArray() throws Exception {
    runTest();
  }

  @Test
  public void testMethodWithHandlerAsyncResultSetComplexJsonArray() throws Exception {
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
}
