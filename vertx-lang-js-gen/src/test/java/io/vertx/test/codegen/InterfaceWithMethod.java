package io.vertx.test.codegen;

import io.vertx.codegen.annotations.VertxGen;

/**
 * @author <a href="mailto:julien@julienviet.com">Julien Viet</a>
 */
@VertxGen
public interface InterfaceWithMethod {

  String meth1();
  String meth1(String arg);

  String meth2();
  String meth2(String arg);

  static String static_meth1() { return "static_meth1()"; }
  static String static_meth1(String arg) { return "static_meth1(" +  arg + ")"; }
  static String static_meth2() { return "static_meth2()"; }
  static String static_meth2(String arg) { return "static_meth2(" +  arg + ")"; }

}
