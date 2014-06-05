//
// Autogenerated by Thrift Compiler (0.9.1)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

JavaSensor_measure_args = function(args) {
  this.ce = null;
  if (args) {
    if (args.ce !== undefined) {
      this.ce = args.ce;
    }
  }
};
JavaSensor_measure_args.prototype = {};
JavaSensor_measure_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ce = new CaliperEvent();
        this.ce.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

JavaSensor_measure_args.prototype.write = function(output) {
  output.writeStructBegin('JavaSensor_measure_args');
  if (this.ce !== null && this.ce !== undefined) {
    output.writeFieldBegin('ce', Thrift.Type.STRUCT, 1);
    this.ce.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

JavaSensor_measure_result = function(args) {
  this.success = null;
  this.ie = null;
  if (args instanceof InvalidEvent) {
    this.ie = args;
    return;
  }
  if (args) {
    if (args.success !== undefined) {
      this.success = args.success;
    }
    if (args.ie !== undefined) {
      this.ie = args.ie;
    }
  }
};
JavaSensor_measure_result.prototype = {};
JavaSensor_measure_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 0:
      if (ftype == Thrift.Type.STRING) {
        this.success = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.ie = new InvalidEvent();
        this.ie.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

JavaSensor_measure_result.prototype.write = function(output) {
  output.writeStructBegin('JavaSensor_measure_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRING, 0);
    output.writeString(this.success);
    output.writeFieldEnd();
  }
  if (this.ie !== null && this.ie !== undefined) {
    output.writeFieldBegin('ie', Thrift.Type.STRUCT, 1);
    this.ie.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

JavaSensorClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
JavaSensorClient.prototype = {};
JavaSensorClient.prototype.measure = function(ce) {
  this.send_measure(ce);
  return this.recv_measure();
};

JavaSensorClient.prototype.send_measure = function(ce) {
  this.output.writeMessageBegin('measure', Thrift.MessageType.CALL, this.seqid);
  var args = new JavaSensor_measure_args();
  args.ce = ce;
  args.write(this.output);
  this.output.writeMessageEnd();
  return this.output.getTransport().flush();
};

JavaSensorClient.prototype.recv_measure = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new JavaSensor_measure_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.ie) {
    throw result.ie;
  }
  if (null !== result.success) {
    return result.success;
  }
  throw 'measure failed: unknown result';
};
