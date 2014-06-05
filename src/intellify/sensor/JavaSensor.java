package intellify.sensor;

import intellify.event.CaliperEvent;

public interface JavaSensor {
	
	public String measure (CaliperEvent ce) throws Exception;
	
}
