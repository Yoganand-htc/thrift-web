
namespace cpp intellify.sensor
namespace d intellify.sensor
namespace java intellify.sensor
namespace php intellify.sensor
namespace perl intellify.sensor

struct CaliperEvent{
	1: string name,
	2: string value,
}

/**
 * Structs can also be exceptions, if they are nasty.
 */
exception InvalidEvent {
  1: i32 what,
  2: string why
}

service JavaSensor{

	string measure(1: CaliperEvent ce) throws (1:InvalidEvent ie)
}