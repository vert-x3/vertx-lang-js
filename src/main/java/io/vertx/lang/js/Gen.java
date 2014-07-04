package io.vertx.lang.js;


import io.vertx.codegen.Generator;
import io.vertx.core.Context;
import io.vertx.core.MultiMap;
import io.vertx.core.Vertx;
import io.vertx.core.buffer.Buffer;
import io.vertx.core.http.HttpClient;
import io.vertx.core.http.HttpClientRequest;
import io.vertx.core.http.HttpClientResponse;
import io.vertx.core.http.HttpServer;
import io.vertx.core.http.HttpServerFileUpload;
import io.vertx.core.http.HttpServerRequest;
import io.vertx.core.http.HttpServerResponse;
import io.vertx.core.http.ServerWebSocket;
import io.vertx.core.http.WebSocket;
import io.vertx.core.http.WebSocketBase;
import io.vertx.core.http.WebSocketFrame;
import io.vertx.core.net.NetClient;
import io.vertx.core.net.NetServer;
import io.vertx.core.net.NetSocket;
import io.vertx.core.net.SocketAddress;
import io.vertx.core.streams.ReadStream;
import io.vertx.core.streams.WriteStream;

/**
 * Actually run the generation
 *
 * TODO - we should wrap this in a Maven MOJO so it can run as part of the build lifecyle
 *
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class Gen {

  public static void main(String[] args) {
    try {
      new Gen().run();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }

  public void run() throws Exception {
    Generator gen = new Generator();
    String outRoot = "src/main/resources/vertx/";
    gen.processFromClasspath(Vertx.class, outRoot + "vertx.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(NetClient.class, outRoot + "net_client.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(NetServer.class, outRoot + "net_server.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(NetSocket.class, outRoot + "net_socket.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(ReadStream.class, outRoot + "read_stream.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(WriteStream.class, outRoot + "write_stream.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(Buffer.class, outRoot + "buffer.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(SocketAddress.class, outRoot + "socket_address.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(HttpClient.class, outRoot + "http_client.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(HttpClientResponse.class, outRoot + "http_client_response.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(HttpClientRequest.class, outRoot + "http_client_request.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(MultiMap.class, outRoot + "multi_map.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(HttpServer.class, outRoot + "http_server.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(HttpServerResponse.class, outRoot + "http_server_response.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(HttpServerRequest.class, outRoot + "http_server_request.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(HttpServerFileUpload.class, outRoot + "http_server_file_upload.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(ServerWebSocket.class, outRoot + "server_web_socket.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(WebSocket.class, outRoot + "web_socket.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(WebSocketBase.class, outRoot + "web_socket_base.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(WebSocketFrame.class, outRoot + "web_socket_frame.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(Context.class, outRoot + "context.js", "src/main/resources/templates/js.templ");
  }
}
