package intellify.sensor.processor;

import intellify.event.CaliperEvent;
import intellify.sensor.JavaSensor;

public class JavaSensorProcessor implements JavaSensor {

	@Override
	public String measure(CaliperEvent ce) throws Exception {
		// TODO Auto-generated method stub
		String result = ce.getData();
		System.out.println("Receiving the event..." + ce.getEvent() +"..data.." + ce.getData());
		return result;
	}

}
