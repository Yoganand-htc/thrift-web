/**
 * This Thrift file can be included by other Thrift files that want to share
 * these definitions.
 */

namespace cpp intellify.event
namespace d intellify.event
namespace java intellify.event
namespace perl intellify.event
namespace php intellify.event

struct CaliperEvent{
	1: string event;
	2: string data;
}

service CaliperEventService{
}