var TestSuite = require('vertx-unit-js/test_suite');

var suite = TestSuite.create("my_suite").
    before(function(context) {
        var async = context.async();
        vertx.deployVerticle("js:it/unit/coordinated/server", function(id, err) {
            context.assertTrue(err === null);
            async.complete();
        });
    }).test("server_get", function(context) {
        var async = context.async();
        var client = vertx.createHttpClient({});
        client.request("GET", 8080, "localhost", "/path", function(resp) {
            context.assertTrue(resp.statusCode() == 200);
            async.complete();
        }).end();
    });

suite.run(vertx, { reporters : [{ to: "bus:test"}] });
