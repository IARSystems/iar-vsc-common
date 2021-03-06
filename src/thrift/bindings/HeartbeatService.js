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


var ttypes = require('./shared_types');
//HELPER FUNCTIONS AND STRUCTURES

var HeartbeatService_isAlive_args = function(args) {
};
HeartbeatService_isAlive_args.prototype = {};
HeartbeatService_isAlive_args.prototype.read = function(input) {
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

HeartbeatService_isAlive_args.prototype.write = function(output) {
  output.writeStructBegin('HeartbeatService_isAlive_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var HeartbeatService_isAlive_result = function(args) {
};
HeartbeatService_isAlive_result.prototype = {};
HeartbeatService_isAlive_result.prototype.read = function(input) {
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

HeartbeatService_isAlive_result.prototype.write = function(output) {
  output.writeStructBegin('HeartbeatService_isAlive_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var HeartbeatServiceClient = exports.Client = function(output, pClass) {
  this.output = output;
  this.pClass = pClass;
  this._seqid = 0;
  this._reqs = {};
};
HeartbeatServiceClient.prototype = {};
HeartbeatServiceClient.prototype.seqid = function() { return this._seqid; };
HeartbeatServiceClient.prototype.new_seqid = function() { return this._seqid += 1; };

HeartbeatServiceClient.prototype.isAlive = function(callback) {
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
    this.send_isAlive();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_isAlive();
  }
};

HeartbeatServiceClient.prototype.send_isAlive = function() {
  var output = new this.pClass(this.output);
  var args = new HeartbeatService_isAlive_args();
  try {
    output.writeMessageBegin('isAlive', Thrift.MessageType.CALL, this.seqid());
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

HeartbeatServiceClient.prototype.recv_isAlive = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new HeartbeatService_isAlive_result();
  result.read(input);
  input.readMessageEnd();

  callback(null);
};
var HeartbeatServiceProcessor = exports.Processor = function(handler) {
  this._handler = handler;
};
HeartbeatServiceProcessor.prototype.process = function(input, output) {
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
HeartbeatServiceProcessor.prototype.process_isAlive = function(seqid, input, output) {
  var args = new HeartbeatService_isAlive_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.isAlive.length === 0) {
    Q.fcall(this._handler.isAlive.bind(this._handler)
    ).then(function(result) {
      var result_obj = new HeartbeatService_isAlive_result({success: result});
      output.writeMessageBegin("isAlive", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("isAlive", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.isAlive(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new HeartbeatService_isAlive_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("isAlive", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("isAlive", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
