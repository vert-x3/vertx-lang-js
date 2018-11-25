package io.vertx.test.codegen;

import io.vertx.codegen.annotations.VertxGen;

/**
 * @author <a href="mailto:julien@julienviet.com">Julien Viet</a>
 */
@VertxGen
public interface InterfaceExtendingInterfaceWithMethod extends InterfaceWithMethod {

  public static InterfaceExtendingInterfaceWithMethod create() {
    return new InterfaceExtendingInterfaceWithMethod() {
      @Override
      public String meth2(Integer arg) {
        return "meth2(" + arg + ")";
      }
      @Override
      public String meth1() {
        return "meth1()";
      }
      @Override
      public String meth1(String arg) {
        return "meth1(" + arg + ")";
      }
      @Override
      public String meth2() {
        return "meth2()";
      }
      @Override
      public String meth2(String arg) {
        return "meth2(" + arg + ")";
      }
    };
  }

  // Don't provide meth1

  // Overload meth2
  String meth2(Integer arg);
  static String static_meth2(Integer arg) { return "static_meth2(" + arg + ")"; }
}
