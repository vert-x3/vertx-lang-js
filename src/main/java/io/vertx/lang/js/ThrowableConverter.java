package io.vertx.lang.js;

import java.util.concurrent.Callable;

/**
 * @author <a href="mailto:julien@julienviet.com">Julien Viet</a>
 */
public class ThrowableConverter {

  public static Throwable catchAndReturnThrowable(Callable<?> c) {
    try {
      c.call();
    } catch (Throwable t) {
      return t;
    }
    throw new AssertionError("Should not happen");
  }

}
