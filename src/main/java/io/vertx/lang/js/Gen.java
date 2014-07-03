package io.vertx.lang.js;


import io.vertx.codegen.Generator;
import io.vertx.core.Vertx;
import io.vertx.core.buffer.Buffer;
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
    gen.processFromClasspath(NetServer.class, outRoot + "net_server.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(NetSocket.class, outRoot + "net_socket.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(ReadStream.class, outRoot + "read_stream.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(WriteStream.class, outRoot + "write_stream.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(Buffer.class, outRoot + "buffer.js", "src/main/resources/templates/js.templ");
    gen.processFromClasspath(SocketAddress.class, outRoot + "socket_address.js", "src/main/resources/templates/js.templ");
  }
}
