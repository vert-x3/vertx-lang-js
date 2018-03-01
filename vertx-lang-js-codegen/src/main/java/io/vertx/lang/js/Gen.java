/*
 * Copyright 2014 Red Hat, Inc.
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

package io.vertx.lang.js;


import io.vertx.codegen.Generator;
import io.vertx.codegen.Helper;

/**
 * Actually run the generation
 *
 * TODO - we should wrap this in a Maven MOJO so it can run as part of the build lifecyle
 *
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class Gen {

  public static void main(String[] args) {
    try {
      new Gen().run();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  public void run() throws Exception {
    Generator gen = new Generator();
    gen.genAndApply("io.vertx.core", packageName -> !packageName.contains("impl"),
      clazz -> "src/main/resources/vertx/" +  Helper.convertCamelCaseToUnderscores(clazz.getSimpleName()) + ".js",
      "vertx-js/template/js.templ");
  }
}
