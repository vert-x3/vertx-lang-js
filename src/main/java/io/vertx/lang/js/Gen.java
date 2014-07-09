package io.vertx.lang.js;


import io.vertx.codegen.Generator;
import io.vertx.core.Context;
import io.vertx.core.MultiMap;
import io.vertx.core.Vertx;
import io.vertx.core.buffer.Buffer;
import io.vertx.core.datagram.DatagramPacket;
import io.vertx.core.datagram.DatagramSocket;
import io.vertx.core.dns.DnsClient;
import io.vertx.core.eventbus.EventBus;
import io.vertx.core.eventbus.Message;
import io.vertx.core.eventbus.Registration;
import io.vertx.core.file.AsyncFile;
import io.vertx.core.file.FileProps;
import io.vertx.core.file.FileSystem;
import io.vertx.core.file.FileSystemProps;
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
import io.vertx.core.streams.Pump;
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
    
    String outRoot = "src/main/resources/vertx/";
    processFromClasspath(Vertx.class, outRoot + "vertx.js", "src/main/resources/templates/js.templ");
    processFromClasspath(NetClient.class, outRoot + "net_client.js", "src/main/resources/templates/js.templ");
    processFromClasspath(NetServer.class, outRoot + "net_server.js", "src/main/resources/templates/js.templ");
    processFromClasspath(NetSocket.class, outRoot + "net_socket.js", "src/main/resources/templates/js.templ");
    processFromClasspath(ReadStream.class, outRoot + "read_stream.js", "src/main/resources/templates/js.templ");
    processFromClasspath(WriteStream.class, outRoot + "write_stream.js", "src/main/resources/templates/js.templ");
    processFromClasspath(Buffer.class, outRoot + "buffer.js", "src/main/resources/templates/js.templ");
    processFromClasspath(SocketAddress.class, outRoot + "socket_address.js", "src/main/resources/templates/js.templ");
    processFromClasspath(HttpClient.class, outRoot + "http_client.js", "src/main/resources/templates/js.templ");
    processFromClasspath(HttpClientResponse.class, outRoot + "http_client_response.js", "src/main/resources/templates/js.templ");
    processFromClasspath(HttpClientRequest.class, outRoot + "http_client_request.js", "src/main/resources/templates/js.templ");
    processFromClasspath(MultiMap.class, outRoot + "multi_map.js", "src/main/resources/templates/js.templ");
    processFromClasspath(HttpServer.class, outRoot + "http_server.js", "src/main/resources/templates/js.templ");
    processFromClasspath(HttpServerResponse.class, outRoot + "http_server_response.js", "src/main/resources/templates/js.templ");
    processFromClasspath(HttpServerRequest.class, outRoot + "http_server_request.js", "src/main/resources/templates/js.templ");
    processFromClasspath(HttpServerFileUpload.class, outRoot + "http_server_file_upload.js", "src/main/resources/templates/js.templ");
    processFromClasspath(ServerWebSocket.class, outRoot + "server_web_socket.js", "src/main/resources/templates/js.templ");
    processFromClasspath(WebSocket.class, outRoot + "web_socket.js", "src/main/resources/templates/js.templ");
    processFromClasspath(WebSocketBase.class, outRoot + "web_socket_base.js", "src/main/resources/templates/js.templ");
    processFromClasspath(WebSocketFrame.class, outRoot + "web_socket_frame.js", "src/main/resources/templates/js.templ");
    processFromClasspath(Context.class, outRoot + "context.js", "src/main/resources/templates/js.templ");
    processFromClasspath(DatagramSocket.class, outRoot + "datagram_socket.js", "src/main/resources/templates/js.templ");
    processFromClasspath(DatagramPacket.class, outRoot + "datagram_packet.js", "src/main/resources/templates/js.templ");
    processFromClasspath(DnsClient.class, outRoot + "dns_client.js", "src/main/resources/templates/js.templ");
    processFromClasspath(FileSystem.class, outRoot + "file_system.js", "src/main/resources/templates/js.templ");
    processFromClasspath(AsyncFile.class, outRoot + "async_file.js", "src/main/resources/templates/js.templ");
    processFromClasspath(FileProps.class, outRoot + "file_props.js", "src/main/resources/templates/js.templ");
    processFromClasspath(FileSystemProps.class, outRoot + "file_system_props.js", "src/main/resources/templates/js.templ");
    processFromClasspath(Pump.class, outRoot + "pump.js", "src/main/resources/templates/js.templ");
    processFromClasspath(EventBus.class, outRoot + "event_bus.js", "src/main/resources/templates/js.templ");
    processFromClasspath(Message.class, outRoot + "message.js", "src/main/resources/templates/js.templ");
    processFromClasspath(Registration.class, outRoot + "registration.js", "src/main/resources/templates/js.templ");
  }
  
  private void processFromClasspath(Class c, String outFileName, String templateFile) throws Exception {
    Generator gen = new Generator();
    gen.generateModel(c);
    gen.applyTemplate(outFileName, templateFile);
  }
}
