package io.vertx.test.codegen;

import io.vertx.codegen.annotations.VertxGen;
import io.vertx.test.codegen.impl.ClassParamOverloadImpl;

/**
 * @author <a href="mailto:julien@julienviet.com">Julien Viet</a>
 */
@VertxGen
public interface ClassParamOverload {

  static ClassParamOverload create() {
    return new ClassParamOverloadImpl();
  }

  <T> T typeVarReturn();

  <T> T typeVarReturn(Class<T> type);

  <T> GenericHolder<T> parameterizedReturn();

  <T> GenericHolder<T> parameterizedReturn(Class<T> type);

  <T> boolean typeVarParam(T t);

  <T> boolean typeVarParam(Class<T> type, T t);

}
