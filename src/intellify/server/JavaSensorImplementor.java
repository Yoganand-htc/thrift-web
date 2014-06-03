package intellify.server;

import org.apache.thrift.TException;

import intellify.sensor.CaliperEvent;
import intellify.sensor.InvalidEvent;
import intellify.sensor.JavaSensor.Iface;

public class JavaSensorImplementor implements Iface {

	@Override
	public String measure(CaliperEvent ce) throws InvalidEvent, TException {
		// TODO Auto-generated method stub
		String result = ce.getValue();
		System.out.println("Receiving the event..." + ce.getName() +"..value.." + ce.getValue());
		return result;
	}

}
