package io.vertx.test.codegen.impl;

import io.vertx.test.codegen.ClassParamOverload;
import io.vertx.test.codegen.GenericHolder;

/**
 * @author <a href="mailto:julien@julienviet.com">Julien Viet</a>
 */
@SuppressWarnings("unchecked")
public class ClassParamOverloadImpl implements ClassParamOverload {

  @Override
  public <T> T typeVarReturn() {
    return (T) "wibble";
  }

  @Override
  public <T> T typeVarReturn(Class<T> type) {
    if (type != Long.class) {
      throw new AssertionError("Unexpected type " + type);
    }
    return type.cast(5L);
  }

  @Override
  public <T> GenericHolder<T> parameterizedReturn() {
    return () -> (T) "cheese";
  }

  @Override
  public <T> GenericHolder<T> parameterizedReturn(Class<T> type) {
    if (type != Long.class) {
      throw new AssertionError("Unexpected type");
    }
    return () -> type.cast(10L);
  }

  @Override
  public <T> boolean typeVarParam(T t) {
    return "wibble".equals(t);
  }

  @Override
  public <T> boolean typeVarParam(Class<T> type, T t) {
    return type == Long.class && (Long)t == 20L;
  }
}
