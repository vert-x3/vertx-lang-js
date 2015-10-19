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

import java.util.HashSet;
import java.util.List;

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class VertxGenConverterSet extends HashSet {

  public VertxGenConverterSet(List other) {
    for (Object entry: other) {
      if (entry == null) {
        add(null);
      } else {
        if (!(entry instanceof ScriptObjectMirror)) {
          throw new IllegalArgumentException("Array does not contain objects");
        }
        ScriptObjectMirror mirror = (ScriptObjectMirror)entry;
        if (mirror.hasMember("_jdel")) {
          add(mirror.getMember("_jdel"));
        } else {
          throw new IllegalArgumentException("Object in array is not @VertxGen object");
        }
      }
    }
  }
}
