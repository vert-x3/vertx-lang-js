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

import java.io.BufferedInputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.net.JarURLConnection;
import java.net.URI;
import java.net.URL;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.StandardCopyOption;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Enumeration;
import java.util.List;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;
import java.util.jar.JarEntry;
import java.util.jar.JarFile;

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
        CountDownLatch latch = new CountDownLatch(1);
        vertx.fileSystem().deleteRecursive(DEBUG_JS_SOURCE_DIR.getAbsolutePath(), true, res -> {
          if (res.failed()) {
            res.cause().printStackTrace();
          }
          latch.countDown();
        });
        try {
          latch.await(30, TimeUnit.SECONDS);
        } catch (InterruptedException ignore) {
        }
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
  
	public static void unzip(URL url) throws IOException {
		JarURLConnection connection = (JarURLConnection) url.openConnection();
		JarFile jar = connection.getJarFile();
		Path path = new File(jar.getName()).toPath();
		unzip(jar, path.getParent() == null ? path : path.getParent());
	}	
	
	public static void unzip(JarFile jar, Path dest) throws IOException {
		dest = dest.resolve(jar.getName().substring(0, jar.getName().lastIndexOf('.')));
		if (Files.exists(dest)) rmdir(dest);
		Files.createDirectories(dest);
		Enumeration<JarEntry> entries = jar.entries();
		while (entries.hasMoreElements()) {
			JarEntry e = entries.nextElement();
			if (e.isDirectory()) {
				Path path = dest.resolve(e.getName());
				if (Files.exists(path) && !Files.isDirectory(path)) Files.delete(path);
				Files.createDirectories(path);
			}
			else {
				InputStream is = new BufferedInputStream(jar.getInputStream(e));
				Files.copy(is, dest.resolve(e.getName()), StandardCopyOption.REPLACE_EXISTING);
				is.close();
			}
    }
	}
	
	public static void rmdir(Path directory) throws IOException {
    Files.walkFileTree(directory, new SimpleFileVisitor<Path>() {
      @Override
      public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
          Files.delete(file);
          return FileVisitResult.CONTINUE;
      }
  
      @Override
      public FileVisitResult postVisitDirectory(Path dir, IOException exc) throws IOException {
          Files.delete(dir);
          return FileVisitResult.CONTINUE;
      }
    });
	}
	
	public static String getJarPath(URL url) throws IOException {
		JarURLConnection connection = (JarURLConnection) url.openConnection();
		JarFile jar = connection.getJarFile();
		return jar.getName();
	}
	
	public static JarEntry getJarEntry(URL url, String name) throws IOException {
		JarURLConnection connection = (JarURLConnection) url.openConnection();
		JarFile jar = connection.getJarFile();
		return jar.getJarEntry(name);
	}
}
