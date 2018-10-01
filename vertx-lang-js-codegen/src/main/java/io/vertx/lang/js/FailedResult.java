package io.vertx.lang.js;

import io.vertx.core.AsyncResult;

/**
 * @author <a href="mailto:julien@julienviet.com">Julien Viet</a>
 */
public class FailedResult<T> implements AsyncResult<T> {

  final Throwable cause;

  public FailedResult(Object cause) {
    this.cause = cause instanceof Throwable ? (Throwable) cause : new Exception(cause.toString());
  }

  @Override
  public T result() {
    return null;
  }

  @Override
  public Throwable cause() {
    return cause;
  }

  @Override
  public boolean succeeded() {
    return false;
  }

  @Override
  public boolean failed() {
    return true;
  }
}
