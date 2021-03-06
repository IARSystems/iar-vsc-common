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

var SessionSynchronizer_SyncTo_args = function(args) {
  this.who = null;
  this.destState = null;
  if (args) {
    if (args.who !== undefined && args.who !== null) {
      this.who = args.who;
    }
    if (args.destState !== undefined && args.destState !== null) {
      this.destState = args.destState;
    }
  }
};
SessionSynchronizer_SyncTo_args.prototype = {};
SessionSynchronizer_SyncTo_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.who = input.readI32();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I32) {
        this.destState = input.readI32();
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

SessionSynchronizer_SyncTo_args.prototype.write = function(output) {
  output.writeStructBegin('SessionSynchronizer_SyncTo_args');
  if (this.who !== null && this.who !== undefined) {
    output.writeFieldBegin('who', Thrift.Type.I32, 1);
    output.writeI32(this.who);
    output.writeFieldEnd();
  }
  if (this.destState !== null && this.destState !== undefined) {
    output.writeFieldBegin('destState', Thrift.Type.I32, 2);
    output.writeI32(this.destState);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SessionSynchronizer_SyncTo_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
SessionSynchronizer_SyncTo_result.prototype = {};
SessionSynchronizer_SyncTo_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.I32) {
        this.success = input.readI32();
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

SessionSynchronizer_SyncTo_result.prototype.write = function(output) {
  output.writeStructBegin('SessionSynchronizer_SyncTo_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SessionSynchronizer_CurrentState_args = function(args) {
  this.who = null;
  if (args) {
    if (args.who !== undefined && args.who !== null) {
      this.who = args.who;
    }
  }
};
SessionSynchronizer_CurrentState_args.prototype = {};
SessionSynchronizer_CurrentState_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.I32) {
        this.who = input.readI32();
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

SessionSynchronizer_CurrentState_args.prototype.write = function(output) {
  output.writeStructBegin('SessionSynchronizer_CurrentState_args');
  if (this.who !== null && this.who !== undefined) {
    output.writeFieldBegin('who', Thrift.Type.I32, 1);
    output.writeI32(this.who);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SessionSynchronizer_CurrentState_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
SessionSynchronizer_CurrentState_result.prototype = {};
SessionSynchronizer_CurrentState_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.I32) {
        this.success = input.readI32();
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

SessionSynchronizer_CurrentState_result.prototype.write = function(output) {
  output.writeStructBegin('SessionSynchronizer_CurrentState_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SessionSynchronizer_AllStates_args = function(args) {
};
SessionSynchronizer_AllStates_args.prototype = {};
SessionSynchronizer_AllStates_args.prototype.read = function(input) {
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

SessionSynchronizer_AllStates_args.prototype.write = function(output) {
  output.writeStructBegin('SessionSynchronizer_AllStates_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SessionSynchronizer_AllStates_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [null]);
    }
  }
};
SessionSynchronizer_AllStates_result.prototype = {};
SessionSynchronizer_AllStates_result.prototype.read = function(input) {
  input.readStructBegin();
  while (true) {
    var ret = input.readFieldBegin();
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid) {
      case 0:
      if (ftype == Thrift.Type.LIST) {
        this.success = [];
        var _rtmp337 = input.readListBegin();
        var _size36 = _rtmp337.size || 0;
        for (var _i38 = 0; _i38 < _size36; ++_i38) {
          var elem39 = null;
          elem39 = input.readI32();
          this.success.push(elem39);
        }
        input.readListEnd();
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

SessionSynchronizer_AllStates_result.prototype.write = function(output) {
  output.writeStructBegin('SessionSynchronizer_AllStates_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.I32, this.success.length);
    for (var iter40 in this.success) {
      if (this.success.hasOwnProperty(iter40)) {
        iter40 = this.success[iter40];
        output.writeI32(iter40);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var SessionSynchronizerClient = exports.Client = function(output, pClass) {
  this.output = output;
  this.pClass = pClass;
  this._seqid = 0;
  this._reqs = {};
};
Thrift.inherits(SessionSynchronizerClient, HeartbeatServiceClient);
SessionSynchronizerClient.prototype.seqid = function() { return this._seqid; };
SessionSynchronizerClient.prototype.new_seqid = function() { return this._seqid += 1; };

SessionSynchronizerClient.prototype.SyncTo = function(who, destState, callback) {
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
    this.send_SyncTo(who, destState);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_SyncTo(who, destState);
  }
};

SessionSynchronizerClient.prototype.send_SyncTo = function(who, destState) {
  var output = new this.pClass(this.output);
  var params = {
    who: who,
    destState: destState
  };
  var args = new SessionSynchronizer_SyncTo_args(params);
  try {
    output.writeMessageBegin('SyncTo', Thrift.MessageType.CALL, this.seqid());
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

SessionSynchronizerClient.prototype.recv_SyncTo = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SessionSynchronizer_SyncTo_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('SyncTo failed: unknown result');
};

SessionSynchronizerClient.prototype.CurrentState = function(who, callback) {
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
    this.send_CurrentState(who);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_CurrentState(who);
  }
};

SessionSynchronizerClient.prototype.send_CurrentState = function(who) {
  var output = new this.pClass(this.output);
  var params = {
    who: who
  };
  var args = new SessionSynchronizer_CurrentState_args(params);
  try {
    output.writeMessageBegin('CurrentState', Thrift.MessageType.CALL, this.seqid());
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

SessionSynchronizerClient.prototype.recv_CurrentState = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SessionSynchronizer_CurrentState_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('CurrentState failed: unknown result');
};

SessionSynchronizerClient.prototype.AllStates = function(callback) {
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
    this.send_AllStates();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_AllStates();
  }
};

SessionSynchronizerClient.prototype.send_AllStates = function() {
  var output = new this.pClass(this.output);
  var args = new SessionSynchronizer_AllStates_args();
  try {
    output.writeMessageBegin('AllStates', Thrift.MessageType.CALL, this.seqid());
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

SessionSynchronizerClient.prototype.recv_AllStates = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new SessionSynchronizer_AllStates_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('AllStates failed: unknown result');
};
var SessionSynchronizerProcessor = exports.Processor = function(handler) {
  this._handler = handler;
};
Thrift.inherits(SessionSynchronizerProcessor, HeartbeatServiceProcessor);
SessionSynchronizerProcessor.prototype.process = function(input, output) {
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
SessionSynchronizerProcessor.prototype.process_SyncTo = function(seqid, input, output) {
  var args = new SessionSynchronizer_SyncTo_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.SyncTo.length === 2) {
    Q.fcall(this._handler.SyncTo.bind(this._handler),
      args.who,
      args.destState
    ).then(function(result) {
      var result_obj = new SessionSynchronizer_SyncTo_result({success: result});
      output.writeMessageBegin("SyncTo", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("SyncTo", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.SyncTo(args.who, args.destState, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new SessionSynchronizer_SyncTo_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("SyncTo", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("SyncTo", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
SessionSynchronizerProcessor.prototype.process_CurrentState = function(seqid, input, output) {
  var args = new SessionSynchronizer_CurrentState_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.CurrentState.length === 1) {
    Q.fcall(this._handler.CurrentState.bind(this._handler),
      args.who
    ).then(function(result) {
      var result_obj = new SessionSynchronizer_CurrentState_result({success: result});
      output.writeMessageBegin("CurrentState", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("CurrentState", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.CurrentState(args.who, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new SessionSynchronizer_CurrentState_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("CurrentState", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("CurrentState", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
SessionSynchronizerProcessor.prototype.process_AllStates = function(seqid, input, output) {
  var args = new SessionSynchronizer_AllStates_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.AllStates.length === 0) {
    Q.fcall(this._handler.AllStates.bind(this._handler)
    ).then(function(result) {
      var result_obj = new SessionSynchronizer_AllStates_result({success: result});
      output.writeMessageBegin("AllStates", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("AllStates", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.AllStates(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new SessionSynchronizer_AllStates_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("AllStates", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("AllStates", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
