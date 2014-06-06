package intellify.restclient;

import intellify.event.CaliperEvent;
import intellify.sensor.JavaSensor;
import intellify.sensor.processor.JavaSensorProcessor;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.log4j.Logger;




@Path("/javasensor")
public class JavaSensorRC {
	public static final Logger LOG = Logger.getLogger(JavaSensorRC.class);
	public static JavaSensor server = null;
	static {
		server = new JavaSensorProcessor();
	}

	@GET
	@Path("/get/{param}")
	public Response getMsg(@PathParam("param") String msg) {
		try {
			LOG.info("Entering getMsg method...");
			String output = "Java Sensor say : " + perform("caliperEvent", msg);
			return Response.status(200).entity(output).build();
		} catch (Exception x) {
			x.printStackTrace();
		}
		return null;
	}
	
	@GET
	@Path("/getJSON/{param}")
	@Produces(MediaType.APPLICATION_JSON)
	public CaliperEvent getJSON(@PathParam("param") String msg) {
		try {
			LOG.info("Entering getJSON method...");
			CaliperEvent ce = new CaliperEvent();
			ce.setEvent("caliperEvent");
			ce.setData(msg);
			server.measure(ce);
			return ce;
		} catch (Exception x) {
			x.printStackTrace();
		}
		return null;
	}
	
	
	 @POST
     @Path("/postJSON")
     @Consumes(MediaType.APPLICATION_JSON)
     public Response postJSON( CaliperEvent event ) {
		 try {
			 LOG.info("Entering postJSON method...");
			server.measure(event);
			String output = "JSON Object received from client :" + event.toString();
			return Response.status(200).entity(output).build();
		 } catch (Exception e) {
			e.printStackTrace();
		}
		return null;
     }


	private String perform(String event, String msg) throws Exception {
		CaliperEvent ce = new CaliperEvent();
		ce.setEvent(event);
		ce.setData(msg);
		return server.measure(ce);
	}

}
