package io.vertx.lang.js;

import io.vertx.core.AsyncResult;

/**
 * @author <a href="mailto:julien@julienviet.com">Julien Viet</a>
 */
public class SucceededResult<T> implements AsyncResult<T> {

  final T result;

  public SucceededResult(T result) {
    this.result = result;
  }

  @Override
  public T result() {
    return result;
  }

  @Override
  public Throwable cause() {
    return null;
  }

  @Override
  public boolean succeeded() {
    return true;
  }

  @Override
  public boolean failed() {
    return false;
  }
}
