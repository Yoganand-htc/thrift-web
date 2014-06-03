package intellify.client;

import intellify.sensor.CaliperEvent;
import intellify.sensor.JavaSensor;
import intellify.server.JavaSensorServer;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

import org.apache.thrift.TException;
import org.apache.thrift.protocol.TBinaryProtocol;
import org.apache.thrift.protocol.TProtocol;
import org.apache.thrift.transport.TSocket;
import org.apache.thrift.transport.TTransport;

@Path("/javasensor")
public class JavaSensorClient {
	static{
		JavaSensorServer server = new JavaSensorServer();
	}
	
	@GET
	@Path("/{param}")
	public Response getMsg(@PathParam("param") String msg) {
		
		
		try {
			  System.out.println("Entering get method..." + msg);
			
		      TTransport transport;
		      transport = new TSocket("localhost", 9090);
		      transport.open();
		      TProtocol protocol = new  TBinaryProtocol(transport);
		      JavaSensor.Client client = new JavaSensor.Client(protocol);

		      String output = "Java Sensor say : " +  perform(client, msg);

		      transport.close();
		      
		      return Response.status(200).entity(output).build();
		    } catch (TException x) {
		      x.printStackTrace();
		    } 
		return null;
	}
	
	private String perform(JavaSensor.Client client, String msg) throws TException
	  {
		CaliperEvent ce = new CaliperEvent();
		ce.setName("caliperEvent");
		ce.setValue(msg);
		return client.measure(ce);
	  }
	
}
