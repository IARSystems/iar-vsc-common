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

var PartnerRegistry_GetAllPartners_args = function(args) {
};
PartnerRegistry_GetAllPartners_args.prototype = {};
PartnerRegistry_GetAllPartners_args.prototype.read = function(input) {
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

PartnerRegistry_GetAllPartners_args.prototype.write = function(output) {
  output.writeStructBegin('PartnerRegistry_GetAllPartners_args');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PartnerRegistry_GetAllPartners_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = Thrift.copyList(args.success, [ttypes.PartnerInformation]);
    }
  }
};
PartnerRegistry_GetAllPartners_result.prototype = {};
PartnerRegistry_GetAllPartners_result.prototype.read = function(input) {
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
        var _rtmp315 = input.readListBegin();
        var _size14 = _rtmp315.size || 0;
        for (var _i16 = 0; _i16 < _size14; ++_i16) {
          var elem17 = null;
          elem17 = new ttypes.PartnerInformation();
          elem17.read(input);
          this.success.push(elem17);
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

PartnerRegistry_GetAllPartners_result.prototype.write = function(output) {
  output.writeStructBegin('PartnerRegistry_GetAllPartners_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.LIST, 0);
    output.writeListBegin(Thrift.Type.STRUCT, this.success.length);
    for (var iter18 in this.success) {
      if (this.success.hasOwnProperty(iter18)) {
        iter18 = this.success[iter18];
        iter18.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PartnerRegistry_GetPartnerInfo_args = function(args) {
  this.who = null;
  if (args) {
    if (args.who !== undefined && args.who !== null) {
      this.who = args.who;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field who is unset!');
    }
  }
};
PartnerRegistry_GetPartnerInfo_args.prototype = {};
PartnerRegistry_GetPartnerInfo_args.prototype.read = function(input) {
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

PartnerRegistry_GetPartnerInfo_args.prototype.write = function(output) {
  output.writeStructBegin('PartnerRegistry_GetPartnerInfo_args');
  if (this.who !== null && this.who !== undefined) {
    output.writeFieldBegin('who', Thrift.Type.I32, 1);
    output.writeI32(this.who);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PartnerRegistry_GetPartnerInfo_result = function(args) {
  this.success = null;
  this.partner = null;
  if (args instanceof ttypes.UnknownPartner) {
    this.partner = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ttypes.PartnerInformation(args.success);
    }
    if (args.partner !== undefined && args.partner !== null) {
      this.partner = args.partner;
    }
  }
};
PartnerRegistry_GetPartnerInfo_result.prototype = {};
PartnerRegistry_GetPartnerInfo_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ttypes.PartnerInformation();
        this.success.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.partner = new ttypes.UnknownPartner();
        this.partner.read(input);
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

PartnerRegistry_GetPartnerInfo_result.prototype.write = function(output) {
  output.writeStructBegin('PartnerRegistry_GetPartnerInfo_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  if (this.partner !== null && this.partner !== undefined) {
    output.writeFieldBegin('partner', Thrift.Type.STRUCT, 1);
    this.partner.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PartnerRegistry_AcknowledgePartnerIsAlive_args = function(args) {
  this.myId = null;
  if (args) {
    if (args.myId !== undefined && args.myId !== null) {
      this.myId = args.myId;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field myId is unset!');
    }
  }
};
PartnerRegistry_AcknowledgePartnerIsAlive_args.prototype = {};
PartnerRegistry_AcknowledgePartnerIsAlive_args.prototype.read = function(input) {
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
        this.myId = input.readI32();
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

PartnerRegistry_AcknowledgePartnerIsAlive_args.prototype.write = function(output) {
  output.writeStructBegin('PartnerRegistry_AcknowledgePartnerIsAlive_args');
  if (this.myId !== null && this.myId !== undefined) {
    output.writeFieldBegin('myId', Thrift.Type.I32, 1);
    output.writeI32(this.myId);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PartnerRegistry_AcknowledgePartnerIsAlive_result = function(args) {
  this.partner = null;
  if (args instanceof ttypes.UnknownPartner) {
    this.partner = args;
    return;
  }
  if (args) {
    if (args.partner !== undefined && args.partner !== null) {
      this.partner = args.partner;
    }
  }
};
PartnerRegistry_AcknowledgePartnerIsAlive_result.prototype = {};
PartnerRegistry_AcknowledgePartnerIsAlive_result.prototype.read = function(input) {
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
        this.partner = new ttypes.UnknownPartner();
        this.partner.read(input);
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

PartnerRegistry_AcknowledgePartnerIsAlive_result.prototype.write = function(output) {
  output.writeStructBegin('PartnerRegistry_AcknowledgePartnerIsAlive_result');
  if (this.partner !== null && this.partner !== undefined) {
    output.writeFieldBegin('partner', Thrift.Type.STRUCT, 1);
    this.partner.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PartnerRegistry_IsPartnerAlive_args = function(args) {
  this.who = null;
  if (args) {
    if (args.who !== undefined && args.who !== null) {
      this.who = args.who;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field who is unset!');
    }
  }
};
PartnerRegistry_IsPartnerAlive_args.prototype = {};
PartnerRegistry_IsPartnerAlive_args.prototype.read = function(input) {
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

PartnerRegistry_IsPartnerAlive_args.prototype.write = function(output) {
  output.writeStructBegin('PartnerRegistry_IsPartnerAlive_args');
  if (this.who !== null && this.who !== undefined) {
    output.writeFieldBegin('who', Thrift.Type.I32, 1);
    output.writeI32(this.who);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PartnerRegistry_IsPartnerAlive_result = function(args) {
  this.success = null;
  this.partner = null;
  if (args instanceof ttypes.UnknownPartner) {
    this.partner = args;
    return;
  }
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = args.success;
    }
    if (args.partner !== undefined && args.partner !== null) {
      this.partner = args.partner;
    }
  }
};
PartnerRegistry_IsPartnerAlive_result.prototype = {};
PartnerRegistry_IsPartnerAlive_result.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.BOOL) {
        this.success = input.readBool();
      } else {
        input.skip(ftype);
      }
      break;
      case 1:
      if (ftype == Thrift.Type.STRUCT) {
        this.partner = new ttypes.UnknownPartner();
        this.partner.read(input);
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

PartnerRegistry_IsPartnerAlive_result.prototype.write = function(output) {
  output.writeStructBegin('PartnerRegistry_IsPartnerAlive_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.BOOL, 0);
    output.writeBool(this.success);
    output.writeFieldEnd();
  }
  if (this.partner !== null && this.partner !== undefined) {
    output.writeFieldBegin('partner', Thrift.Type.STRUCT, 1);
    this.partner.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PartnerRegistry_SetPartnerInfo_args = function(args) {
  this.information = null;
  if (args) {
    if (args.information !== undefined && args.information !== null) {
      this.information = new ttypes.PartnerInformation(args.information);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field information is unset!');
    }
  }
};
PartnerRegistry_SetPartnerInfo_args.prototype = {};
PartnerRegistry_SetPartnerInfo_args.prototype.read = function(input) {
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
        this.information = new ttypes.PartnerInformation();
        this.information.read(input);
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

PartnerRegistry_SetPartnerInfo_args.prototype.write = function(output) {
  output.writeStructBegin('PartnerRegistry_SetPartnerInfo_args');
  if (this.information !== null && this.information !== undefined) {
    output.writeFieldBegin('information', Thrift.Type.STRUCT, 1);
    this.information.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PartnerRegistry_SetPartnerInfo_result = function(args) {
};
PartnerRegistry_SetPartnerInfo_result.prototype = {};
PartnerRegistry_SetPartnerInfo_result.prototype.read = function(input) {
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

PartnerRegistry_SetPartnerInfo_result.prototype.write = function(output) {
  output.writeStructBegin('PartnerRegistry_SetPartnerInfo_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PartnerRegistry_SetAllPartners_args = function(args) {
  this.allPartners = null;
  if (args) {
    if (args.allPartners !== undefined && args.allPartners !== null) {
      this.allPartners = Thrift.copyList(args.allPartners, [ttypes.PartnerInformation]);
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field allPartners is unset!');
    }
  }
};
PartnerRegistry_SetAllPartners_args.prototype = {};
PartnerRegistry_SetAllPartners_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.LIST) {
        this.allPartners = [];
        var _rtmp320 = input.readListBegin();
        var _size19 = _rtmp320.size || 0;
        for (var _i21 = 0; _i21 < _size19; ++_i21) {
          var elem22 = null;
          elem22 = new ttypes.PartnerInformation();
          elem22.read(input);
          this.allPartners.push(elem22);
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

PartnerRegistry_SetAllPartners_args.prototype.write = function(output) {
  output.writeStructBegin('PartnerRegistry_SetAllPartners_args');
  if (this.allPartners !== null && this.allPartners !== undefined) {
    output.writeFieldBegin('allPartners', Thrift.Type.LIST, 1);
    output.writeListBegin(Thrift.Type.STRUCT, this.allPartners.length);
    for (var iter23 in this.allPartners) {
      if (this.allPartners.hasOwnProperty(iter23)) {
        iter23 = this.allPartners[iter23];
        iter23.write(output);
      }
    }
    output.writeListEnd();
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PartnerRegistry_SetAllPartners_result = function(args) {
};
PartnerRegistry_SetAllPartners_result.prototype = {};
PartnerRegistry_SetAllPartners_result.prototype.read = function(input) {
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

PartnerRegistry_SetAllPartners_result.prototype.write = function(output) {
  output.writeStructBegin('PartnerRegistry_SetAllPartners_result');
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

var PartnerRegistryClient = exports.Client = function(output, pClass) {
  this.output = output;
  this.pClass = pClass;
  this._seqid = 0;
  this._reqs = {};
};
Thrift.inherits(PartnerRegistryClient, HeartbeatServiceClient);
PartnerRegistryClient.prototype.seqid = function() { return this._seqid; };
PartnerRegistryClient.prototype.new_seqid = function() { return this._seqid += 1; };

PartnerRegistryClient.prototype.GetAllPartners = function(callback) {
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
    this.send_GetAllPartners();
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_GetAllPartners();
  }
};

PartnerRegistryClient.prototype.send_GetAllPartners = function() {
  var output = new this.pClass(this.output);
  var args = new PartnerRegistry_GetAllPartners_args();
  try {
    output.writeMessageBegin('GetAllPartners', Thrift.MessageType.CALL, this.seqid());
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

PartnerRegistryClient.prototype.recv_GetAllPartners = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PartnerRegistry_GetAllPartners_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('GetAllPartners failed: unknown result');
};

PartnerRegistryClient.prototype.GetPartnerInfo = function(who, callback) {
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
    this.send_GetPartnerInfo(who);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_GetPartnerInfo(who);
  }
};

PartnerRegistryClient.prototype.send_GetPartnerInfo = function(who) {
  var output = new this.pClass(this.output);
  var params = {
    who: who
  };
  var args = new PartnerRegistry_GetPartnerInfo_args(params);
  try {
    output.writeMessageBegin('GetPartnerInfo', Thrift.MessageType.CALL, this.seqid());
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

PartnerRegistryClient.prototype.recv_GetPartnerInfo = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PartnerRegistry_GetPartnerInfo_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.partner) {
    return callback(result.partner);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('GetPartnerInfo failed: unknown result');
};

PartnerRegistryClient.prototype.AcknowledgePartnerIsAlive = function(myId, callback) {
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
    this.send_AcknowledgePartnerIsAlive(myId);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_AcknowledgePartnerIsAlive(myId);
  }
};

PartnerRegistryClient.prototype.send_AcknowledgePartnerIsAlive = function(myId) {
  var output = new this.pClass(this.output);
  var params = {
    myId: myId
  };
  var args = new PartnerRegistry_AcknowledgePartnerIsAlive_args(params);
  try {
    output.writeMessageBegin('AcknowledgePartnerIsAlive', Thrift.MessageType.CALL, this.seqid());
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

PartnerRegistryClient.prototype.recv_AcknowledgePartnerIsAlive = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PartnerRegistry_AcknowledgePartnerIsAlive_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.partner) {
    return callback(result.partner);
  }
  callback(null);
};

PartnerRegistryClient.prototype.IsPartnerAlive = function(who, callback) {
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
    this.send_IsPartnerAlive(who);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_IsPartnerAlive(who);
  }
};

PartnerRegistryClient.prototype.send_IsPartnerAlive = function(who) {
  var output = new this.pClass(this.output);
  var params = {
    who: who
  };
  var args = new PartnerRegistry_IsPartnerAlive_args(params);
  try {
    output.writeMessageBegin('IsPartnerAlive', Thrift.MessageType.CALL, this.seqid());
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

PartnerRegistryClient.prototype.recv_IsPartnerAlive = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PartnerRegistry_IsPartnerAlive_result();
  result.read(input);
  input.readMessageEnd();

  if (null !== result.partner) {
    return callback(result.partner);
  }
  if (null !== result.success) {
    return callback(null, result.success);
  }
  return callback('IsPartnerAlive failed: unknown result');
};

PartnerRegistryClient.prototype.SetPartnerInfo = function(information, callback) {
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
    this.send_SetPartnerInfo(information);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_SetPartnerInfo(information);
  }
};

PartnerRegistryClient.prototype.send_SetPartnerInfo = function(information) {
  var output = new this.pClass(this.output);
  var params = {
    information: information
  };
  var args = new PartnerRegistry_SetPartnerInfo_args(params);
  try {
    output.writeMessageBegin('SetPartnerInfo', Thrift.MessageType.CALL, this.seqid());
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

PartnerRegistryClient.prototype.recv_SetPartnerInfo = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PartnerRegistry_SetPartnerInfo_result();
  result.read(input);
  input.readMessageEnd();

  callback(null);
};

PartnerRegistryClient.prototype.SetAllPartners = function(allPartners, callback) {
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
    this.send_SetAllPartners(allPartners);
    return _defer.promise;
  } else {
    this._reqs[this.seqid()] = callback;
    this.send_SetAllPartners(allPartners);
  }
};

PartnerRegistryClient.prototype.send_SetAllPartners = function(allPartners) {
  var output = new this.pClass(this.output);
  var params = {
    allPartners: allPartners
  };
  var args = new PartnerRegistry_SetAllPartners_args(params);
  try {
    output.writeMessageBegin('SetAllPartners', Thrift.MessageType.CALL, this.seqid());
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

PartnerRegistryClient.prototype.recv_SetAllPartners = function(input,mtype,rseqid) {
  var callback = this._reqs[rseqid] || function() {};
  delete this._reqs[rseqid];
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(input);
    input.readMessageEnd();
    return callback(x);
  }
  var result = new PartnerRegistry_SetAllPartners_result();
  result.read(input);
  input.readMessageEnd();

  callback(null);
};
var PartnerRegistryProcessor = exports.Processor = function(handler) {
  this._handler = handler;
};
Thrift.inherits(PartnerRegistryProcessor, HeartbeatServiceProcessor);
PartnerRegistryProcessor.prototype.process = function(input, output) {
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
PartnerRegistryProcessor.prototype.process_GetAllPartners = function(seqid, input, output) {
  var args = new PartnerRegistry_GetAllPartners_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.GetAllPartners.length === 0) {
    Q.fcall(this._handler.GetAllPartners.bind(this._handler)
    ).then(function(result) {
      var result_obj = new PartnerRegistry_GetAllPartners_result({success: result});
      output.writeMessageBegin("GetAllPartners", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("GetAllPartners", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.GetAllPartners(function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new PartnerRegistry_GetAllPartners_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("GetAllPartners", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("GetAllPartners", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
PartnerRegistryProcessor.prototype.process_GetPartnerInfo = function(seqid, input, output) {
  var args = new PartnerRegistry_GetPartnerInfo_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.GetPartnerInfo.length === 1) {
    Q.fcall(this._handler.GetPartnerInfo.bind(this._handler),
      args.who
    ).then(function(result) {
      var result_obj = new PartnerRegistry_GetPartnerInfo_result({success: result});
      output.writeMessageBegin("GetPartnerInfo", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      if (err instanceof ttypes.UnknownPartner) {
        result = new PartnerRegistry_GetPartnerInfo_result(err);
        output.writeMessageBegin("GetPartnerInfo", Thrift.MessageType.REPLY, seqid);
      } else {
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("GetPartnerInfo", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.GetPartnerInfo(args.who, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.UnknownPartner) {
        result_obj = new PartnerRegistry_GetPartnerInfo_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("GetPartnerInfo", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("GetPartnerInfo", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
PartnerRegistryProcessor.prototype.process_AcknowledgePartnerIsAlive = function(seqid, input, output) {
  var args = new PartnerRegistry_AcknowledgePartnerIsAlive_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.AcknowledgePartnerIsAlive.length === 1) {
    Q.fcall(this._handler.AcknowledgePartnerIsAlive.bind(this._handler),
      args.myId
    ).then(function(result) {
      var result_obj = new PartnerRegistry_AcknowledgePartnerIsAlive_result({success: result});
      output.writeMessageBegin("AcknowledgePartnerIsAlive", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      if (err instanceof ttypes.UnknownPartner) {
        result = new PartnerRegistry_AcknowledgePartnerIsAlive_result(err);
        output.writeMessageBegin("AcknowledgePartnerIsAlive", Thrift.MessageType.REPLY, seqid);
      } else {
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("AcknowledgePartnerIsAlive", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.AcknowledgePartnerIsAlive(args.myId, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.UnknownPartner) {
        result_obj = new PartnerRegistry_AcknowledgePartnerIsAlive_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("AcknowledgePartnerIsAlive", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("AcknowledgePartnerIsAlive", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
PartnerRegistryProcessor.prototype.process_IsPartnerAlive = function(seqid, input, output) {
  var args = new PartnerRegistry_IsPartnerAlive_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.IsPartnerAlive.length === 1) {
    Q.fcall(this._handler.IsPartnerAlive.bind(this._handler),
      args.who
    ).then(function(result) {
      var result_obj = new PartnerRegistry_IsPartnerAlive_result({success: result});
      output.writeMessageBegin("IsPartnerAlive", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      if (err instanceof ttypes.UnknownPartner) {
        result = new PartnerRegistry_IsPartnerAlive_result(err);
        output.writeMessageBegin("IsPartnerAlive", Thrift.MessageType.REPLY, seqid);
      } else {
        result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("IsPartnerAlive", Thrift.MessageType.EXCEPTION, seqid);
      }
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.IsPartnerAlive(args.who, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined') || err instanceof ttypes.UnknownPartner) {
        result_obj = new PartnerRegistry_IsPartnerAlive_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("IsPartnerAlive", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("IsPartnerAlive", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
PartnerRegistryProcessor.prototype.process_SetPartnerInfo = function(seqid, input, output) {
  var args = new PartnerRegistry_SetPartnerInfo_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.SetPartnerInfo.length === 1) {
    Q.fcall(this._handler.SetPartnerInfo.bind(this._handler),
      args.information
    ).then(function(result) {
      var result_obj = new PartnerRegistry_SetPartnerInfo_result({success: result});
      output.writeMessageBegin("SetPartnerInfo", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("SetPartnerInfo", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.SetPartnerInfo(args.information, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new PartnerRegistry_SetPartnerInfo_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("SetPartnerInfo", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("SetPartnerInfo", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
PartnerRegistryProcessor.prototype.process_SetAllPartners = function(seqid, input, output) {
  var args = new PartnerRegistry_SetAllPartners_args();
  args.read(input);
  input.readMessageEnd();
  if (this._handler.SetAllPartners.length === 1) {
    Q.fcall(this._handler.SetAllPartners.bind(this._handler),
      args.allPartners
    ).then(function(result) {
      var result_obj = new PartnerRegistry_SetAllPartners_result({success: result});
      output.writeMessageBegin("SetAllPartners", Thrift.MessageType.REPLY, seqid);
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    }).catch(function (err) {
      var result;
      result = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
      output.writeMessageBegin("SetAllPartners", Thrift.MessageType.EXCEPTION, seqid);
      result.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  } else {
    this._handler.SetAllPartners(args.allPartners, function (err, result) {
      var result_obj;
      if ((err === null || typeof err === 'undefined')) {
        result_obj = new PartnerRegistry_SetAllPartners_result((err !== null || typeof err === 'undefined') ? err : {success: result});
        output.writeMessageBegin("SetAllPartners", Thrift.MessageType.REPLY, seqid);
      } else {
        result_obj = new Thrift.TApplicationException(Thrift.TApplicationExceptionType.UNKNOWN, err.message);
        output.writeMessageBegin("SetAllPartners", Thrift.MessageType.EXCEPTION, seqid);
      }
      result_obj.write(output);
      output.writeMessageEnd();
      output.flush();
    });
  }
};
