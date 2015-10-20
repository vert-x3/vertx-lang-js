/*
 * Copyright 2014 Red Hat, Inc.
 *
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  and Apache License v2.0 which accompanies this distribution.
 *
 *  The Eclipse Public License is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  The Apache License v2.0 is available at
 *  http://www.opensource.org/licenses/apache2.0.php
 *
 *  You may elect to redistribute this code under either of these licenses.
 */

package io.vertx.lang.js;

import jdk.nashorn.api.scripting.ScriptObjectMirror;

import java.util.HashMap;
import java.util.Map;

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class VertxGenConverterMap extends HashMap<String, Object> {


  public VertxGenConverterMap(Map<String, Object> other) {
    for (Map.Entry<String, Object> entry: other.entrySet()) {
      if (entry.getValue() == null) {
        put(entry.getKey(), null);
      } else {
        if (!(entry.getValue() instanceof ScriptObjectMirror)) {
          throw new IllegalArgumentException("Array does not contain objects");
        }
        ScriptObjectMirror mirror = (ScriptObjectMirror)entry.getValue();
        if (mirror.hasMember("_jdel")) {
          put(entry.getKey(), mirror.getMember("_jdel"));
        } else {
          throw new IllegalArgumentException("Object in array is not @VertxGen object");
        }
      }
    }
  }
}
