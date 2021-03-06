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

var ServiceRegistry_ttypes = require('./ServiceRegistry_types');
var shared_ttypes = require('./shared_types');


var ListWindowBackend = require('./ListWindowBackend');
var ListWindowBackendClient = ListWindowBackend.Client;
var ListWindowBackendProcessor = ListWindowBackend.Processor;
var ttypes = require('./listwindow_types');
//HELPER FUNCTIONS AND STRUCTURES

var PowerLogSetup_setRate_args = function(args) {
  this.sampleRate = null;
  if (args) {
    if (args.sampleRate !== undefined && args.sampleRate !== null) {
      this.sampleRate = args.sampleRate;
    }
  }
};
PowerLogSetup_setRate_args.prototype = {};
PowerLogSetup_setRate_args.prototype.read = function(input) {
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
        this.sampleRate = input.readI32();
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

PowerLogSetup_setRate_args.prototype.write = function(output) {
  output.writeStructBegin('PowerLogSetup_setRate_args');
  if (this.sampleRate !== null && this.sampleRate !== undefined) {
    output.writeFieldBegin('sampleRate', Thrift.Type.I32, 1);
    output.writeI32(this.sampleRate);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PowerLogSetup_setRate_result = function(args) {
};
PowerLogSetup_setRate_result.prototype = {};
PowerLogSetup_setRate_result.prototype.read = function(input) {
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

PowerLogSetup_setRate_result.prototype.write = function(output) {
  output.writeStructBegin('PowerLogSetup_setRate_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PowerLogSetup_getRateOfSample_args = function(args) {
};
PowerLogSetup_getRateOfSample_args.prototype = {};
PowerLogSetup_getRateOfSample_args.prototype.read = function(input) {
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

PowerLogSetup_getRateOfSample_args.prototype.write = function(output) {
  output.writeStructBegin('PowerLogSetup_getRateOfSample_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PowerLogSetup_getRateOfSample_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
PowerLogSetup_getRateOfSample_result.prototype = {};
PowerLogSetup_getRateOfSample_result.prototype.read = function(input) {
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

PowerLogSetup_getRateOfSample_result.prototype.write = function(output) {
  output.writeStructBegin('PowerLogSetup_getRateOfSample_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PowerLogSetup_getMaxRate_args = function(args) {
};
PowerLogSetup_getMaxRate_args.prototype = {};
PowerLogSetup_getMaxRate_args.prototype.read = function(input) {
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

PowerLogSetup_getMaxRate_args.prototype.write = function(output) {
  output.writeStructBegin('PowerLogSetup_getMaxRate_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PowerLogSetup_getMaxRate_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
  }
};
PowerLogSetup_getMaxRate_result.prototype = {};
PowerLogSetup_getMaxRate_result.prototype.read = function(input) {
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

PowerLogSetup_getMaxRate_result.prototype.write = function(output) {
  output.writeStructBegin('PowerLogSetup_getMaxRate_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.I32, 0);
    output.writeI32(this.success);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PowerLogSetupClient = exports.Client = function(output, pClass) {
  this.output = output;
  this.pClass = pClass;
  this._seqid = 0;
  this._reqs = {};
};
Thrift.inherits(PowerLogSetupClient, ListWindowBackendClient);
PowerLogSetupClient.prototype.seqid = function() { return this._seqid; };
PowerLogSetupClient.prototype.new_seqid = function() { return this._seqid += 1; };

PowerLogSetupClient.prototype.setRate = function(sampleRate, callback) {
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
    this.send_setRate(sampleRate);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_setRate(sampleRate);
  }
};

PowerLogSetupClient.prototype.send_setRate = function(sampleRate) {
  var output = new this.pClass(this.output);
  var params = {
    sampleRate: sampleRate
  };
  var args = new PowerLogSetup_setRate_args(params);
  try {
    output.writeMessageBegin('setRate', Thrift.MessageType.CALL, this.seqid());
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

PowerLogSetupClient.prototype.recv_setRate = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PowerLogSetup_setRate_result();
  result.read(input);
  input.readMessageEnd();

  callback(null);
};

PowerLogSetupClient.prototype.getRateOfSample = function(callback) {
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
    this.send_getRateOfSample();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getRateOfSample();
  }
};

PowerLogSetupClient.prototype.send_getRateOfSample = function() {
  var output = new this.pClass(this.output);
  var args = new PowerLogSetup_getRateOfSample_args();
  try {
    output.writeMessageBegin('getRateOfSample', Thrift.MessageType.CALL, this.seqid());
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

PowerLogSetupClient.prototype.recv_getRateOfSample = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PowerLogSetup_getRateOfSample_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getRateOfSample failed: unknown result');
};

PowerLogSetupClient.prototype.getMaxRate = function(callback) {
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
    this.send_getMaxRate();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_getMaxRate();
  }
};

PowerLogSetupClient.prototype.send_getMaxRate = function() {
  var output = new this.pClass(this.output);
  var args = new PowerLogSetup_getMaxRate_args();
  try {
    output.writeMessageBegin('getMaxRate', Thrift.MessageType.CALL, this.seqid());
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

PowerLogSetupClient.prototype.recv_getMaxRate = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PowerLogSetup_getMaxRate_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('getMaxRate failed: unknown result');
};
var PowerLogSetupProcessor = exports.Processor = function(handler) {
  this._handler = handler;
};
Thrift.inherits(PowerLogSetupProcessor, ListWindowBackendProcessor);
PowerLogSetupProcessor.prototype.process = function(input, output) {
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
PowerLogSetupProcessor.prototype.process_setRate = function(seqid, input, output) {
  var args = new PowerLogSetup_setRate_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.setRate.length === 1) {
    Q.fcall(this._handler.setRate.bind(this._handler),
      args.sampleRate
    ).then(function(result) {
      var result_obj = new PowerLogSetup_setRate_result({success: result});
      output.writeMessageBegin("setRate", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("setRate", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.setRate(args.sampleRate, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new PowerLogSetup_setRate_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("setRate", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("setRate", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
PowerLogSetupProcessor.prototype.process_getRateOfSample = function(seqid, input, output) {
  var args = new PowerLogSetup_getRateOfSample_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getRateOfSample.length === 0) {
    Q.fcall(this._handler.getRateOfSample.bind(this._handler)
    ).then(function(result) {
      var result_obj = new PowerLogSetup_getRateOfSample_result({success: result});
      output.writeMessageBegin("getRateOfSample", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("getRateOfSample", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.getRateOfSample(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new PowerLogSetup_getRateOfSample_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getRateOfSample", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getRateOfSample", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
PowerLogSetupProcessor.prototype.process_getMaxRate = function(seqid, input, output) {
  var args = new PowerLogSetup_getMaxRate_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.getMaxRate.length === 0) {
    Q.fcall(this._handler.getMaxRate.bind(this._handler)
    ).then(function(result) {
      var result_obj = new PowerLogSetup_getMaxRate_result({success: result});
      output.writeMessageBegin("getMaxRate", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("getMaxRate", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.getMaxRate(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new PowerLogSetup_getMaxRate_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("getMaxRate", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("getMaxRate", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
