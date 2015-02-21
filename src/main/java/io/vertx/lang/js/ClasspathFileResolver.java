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

import io.vertx.core.Vertx;
import io.vertx.core.VertxException;

import java.io.File;
import java.io.InputStream;
import java.net.URI;
import java.net.URL;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class ClasspathFileResolver {

  private static List<String> sourceDirs = Arrays.asList("src/main/resources", "src/test/resources");
  private static List<File> sourceDirFiles;
  private static boolean enabled;
  private static File DEBUG_JS_SOURCE_DIR = new File(".vertx/debug-js");

  public static void init() {
    sourceDirFiles = new ArrayList<>(sourceDirs.size());
    for (String dir: sourceDirs) {
      File f = new File(dir);
      if (f.exists()) {
        enabled = true;
        sourceDirFiles.add(f);
      }
    }
    if (enabled) {
      if (DEBUG_JS_SOURCE_DIR.exists()) {
        Vertx vertx = Vertx.vertx();
        vertx.fileSystem().deleteRecursive(DEBUG_JS_SOURCE_DIR.getAbsolutePath(), true, res -> {
          if (res.failed()) {
            res.cause().printStackTrace();
          }
        });
        vertx.close();
      } else {
        DEBUG_JS_SOURCE_DIR.mkdirs();
      }
    }
  }

  public static String resolveFilename(String scriptName) {

    if (enabled) {
      // This is a hack to get Nashorn debugging working, as it doesn't work if the script is in the target directory
      // which it will be when running in the IDE as IntelliJ copies
      // src/main/resources and src/test/resources to target/classes during make!!

      // We assume that the JavaScript source is in one of the source dirs

      for (File sourceDir: sourceDirFiles) {
        File source = new File(sourceDir, scriptName);
        if (source.exists()) {
          return source.getPath();
        }
      }

      // Maybe source file is in a jar?
      ClassLoader cl = Thread.currentThread().getContextClassLoader();
      cl = cl == null ? ClasspathFileResolver.class.getClassLoader() : cl;

      URL url = cl.getResource(scriptName);
      if (url != null) {
        try {
          URI uri = url.toURI();
          if (uri.getScheme().equals("jar")) {

            File target = new File(DEBUG_JS_SOURCE_DIR, scriptName);
            if (!target.exists()) {
              target.getParentFile().mkdirs();
              Path path = target.toPath();
              try (InputStream is = url.openStream()) {
                Files.copy(is, path);
              }
            }

            return target.getPath();
          }
        } catch (Exception e) {
          throw new VertxException(e);
        }
      }

      return null;
    } else {
      return null;
    }
  }
}
