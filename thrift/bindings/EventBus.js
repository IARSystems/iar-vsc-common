//
// Autogenerated by Thrift Compiler (0.14.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
"use strict";

var thrift = require('thrift');
var Thrift = thrift.Thrift;
var Q = thrift.Q;
var Int64 = require('node-int64');

var shared_ttypes = require('./shared_types');
var cspy_ttypes = require('./cspy_types');
var ServiceRegistry_ttypes = require('./ServiceRegistry_types');


var HeartbeatService = require('./HeartbeatService');
var HeartbeatServiceClient = HeartbeatService.Client;
var HeartbeatServiceProcessor = HeartbeatService.Processor;
var ttypes = require('./ampsync_types');
//HELPER FUNCTIONS AND STRUCTURES

var EventBus_Fire_args = function(args) {
  this.toBeFired = null;
  if (args) {
    if (args.toBeFired !== undefined && args.toBeFired !== null) {
      this.toBeFired = new ttypes.Event(args.toBeFired);
    }
  }
};
EventBus_Fire_args.prototype = {};
EventBus_Fire_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.toBeFired = new ttypes.Event();
        this.toBeFired.read(input);
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

EventBus_Fire_args.prototype.write = function(output) {
  output.writeStructBegin('EventBus_Fire_args');
  if (this.toBeFired !== null && this.toBeFired !== undefined) {
    output.writeFieldBegin('toBeFired', Thrift.Type.STRUCT, 1);
    this.toBeFired.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var EventBus_Fire_result = function(args) {
};
EventBus_Fire_result.prototype = {};
EventBus_Fire_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    input.skip(ftype);
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

EventBus_Fire_result.prototype.write = function(output) {
  output.writeStructBegin('EventBus_Fire_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var EventBus_Register_args = function(args) {
  this.clientLocation = null;
  this.myId = null;
  if (args) {
    if (args.clientLocation !== undefined && args.clientLocation !== null) {
      this.clientLocation = new ServiceRegistry_ttypes.ServiceLocation(args.clientLocation);
    }
    if (args.myId !== undefined && args.myId !== null) {
      this.myId = args.myId;
    }
  }
};
EventBus_Register_args.prototype = {};
EventBus_Register_args.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.clientLocation = new ServiceRegistry_ttypes.ServiceLocation();
        this.clientLocation.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.myId = input.readI32();
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

EventBus_Register_args.prototype.write = function(output) {
  output.writeStructBegin('EventBus_Register_args');
  if (this.clientLocation !== null && this.clientLocation !== undefined) {
    output.writeFieldBegin('clientLocation', Thrift.Type.STRUCT, 1);
    this.clientLocation.write(output);
    output.writeFieldEnd();
  }
  if (this.myId !== null && this.myId !== undefined) {
    output.writeFieldBegin('myId', Thrift.Type.I32, 2);
    output.writeI32(this.myId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var EventBus_Register_result = function(args) {
  this.regFaild = null;
  if (args instanceof ttypes.EventBusRegistrationFailed) {
    this.regFaild = args;
    return;
  }
  if (args) {
    if (args.regFaild !== undefined && args.regFaild !== null) {
      this.regFaild = args.regFaild;
    }
  }
};
EventBus_Register_result.prototype = {};
EventBus_Register_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.regFaild = new ttypes.EventBusRegistrationFailed();
        this.regFaild.read(input);
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

EventBus_Register_result.prototype.write = function(output) {
  output.writeStructBegin('EventBus_Register_result');
  if (this.regFaild !== null && this.regFaild !== undefined) {
    output.writeFieldBegin('regFaild', Thrift.Type.STRUCT, 1);
    this.regFaild.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var EventBusClient = exports.Client = function(output, pClass) {
  this.output = output;
  this.pClass = pClass;
  this._seqid = 0;
  this._reqs = {};
};
Thrift.inherits(EventBusClient, HeartbeatServiceClient);
EventBusClient.prototype.seqid = function() { return this._seqid; };
EventBusClient.prototype.new_seqid = function() { return this._seqid += 1; };

EventBusClient.prototype.Fire = function(toBeFired, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_Fire(toBeFired);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_Fire(toBeFired);
  }
};

EventBusClient.prototype.send_Fire = function(toBeFired) {
  var output = new this.pClass(this.output);
  var params = {
    toBeFired: toBeFired
  };
  var args = new EventBus_Fire_args(params);
  try {
    output.writeMessageBegin('Fire', Thrift.MessageType.ONEWAY, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    this.output.flush();
    var callback = this._reqs[this.seqid()] || function() {};
    delete this._reqs[this.seqid()];
    callback(null);
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

EventBusClient.prototype.Register = function(clientLocation, myId, callback) {
  this._seqid = this.new_seqid();
  if (callback === undefined) {
    var _defer = Q.defer();
    this._reqs[this.seqid()] = function(error, result) {
      if (error) {
        _defer.reject(error);
      } else {
        _defer.resolve(result);
      }
    };
    this.send_Register(clientLocation, myId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_Register(clientLocation, myId);
  }
};

EventBusClient.prototype.send_Register = function(clientLocation, myId) {
  var output = new this.pClass(this.output);
  var params = {
    clientLocation: clientLocation,
    myId: myId
  };
  var args = new EventBus_Register_args(params);
  try {
    output.writeMessageBegin('Register', Thrift.MessageType.CALL, this.seqid());
    args.write(output);
    output.writeMessageEnd();
    return this.output.flush();
  }
  catch (e) {
    delete this._reqs[this.seqid()];
    if (typeof output.reset === 'function') {
      output.reset();
    }
    throw e;
  }
};

EventBusClient.prototype.recv_Register = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new EventBus_Register_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.regFaild) {
    return callback(result.regFaild);
  }
  callback(null);
};
var EventBusProcessor = exports.Processor = function(handler) {
  this._handler = handler;
};
Thrift.inherits(EventBusProcessor, HeartbeatServiceProcessor);
EventBusProcessor.prototype.process = function(input, output) {
  var r = input.readMessageBegin();
  if (this['process_' + r.fname]) {
    return this['process_' + r.fname].call(this, r.rseqid, input, output);
  } else {
    input.skip(Thrift.Type.STRUCT);
    input.readMessageEnd();
    var x = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN_METHOD, 'Unknown function ' + r.fname);
    output.writeMessageBegin(r.fname, Thrift.MessageType.EXCEPTION, r.rseqid);
    x.write(output);
    output.writeMessageEnd();
    output.flush();
  }
};
EventBusProcessor.prototype.process_Fire = function(seqid, input, output) {
  var args = new EventBus_Fire_args();
  args.read(input);
  input.readMessageEnd();
  this._handler.Fire(args.toBeFired);
};
EventBusProcessor.prototype.process_Register = function(seqid, input, output) {
  var args = new EventBus_Register_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.Register.length === 2) {
    Q.fcall(this._handler.Register.bind(this._handler),
      args.clientLocation,
      args.myId
    ).then(function(result) {
      var result_obj = new EventBus_Register_result({success: result});
      output.writeMessageBegin("Register", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      if (err instanceof ttypes.EventBusRegistrationFailed) {
        result = new EventBus_Register_result(err);
        output.writeMessageBegin("Register", Thrift.MessageType.REPLY, seqid);
      } else {
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("Register", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.Register(args.clientLocation, args.myId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.EventBusRegistrationFailed) {
        result_obj = new EventBus_Register_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("Register", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("Register", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
