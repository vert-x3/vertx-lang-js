var RequiredResource = require("test_multiple_concurrent_requires_required.js");

if (RequiredResource == null) {
  vertx.eventBus().send("test_multiple_concurrent_requires", "failed: Resource is null");
} else if (RequiredResource.testProperty == null) {
  vertx.eventBus().send("test_multiple_concurrent_requires", "failed: Property is null");
} else {
  vertx.eventBus().send("test_multiple_concurrent_requires", "ok");
}
