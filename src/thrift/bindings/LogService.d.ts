/// <reference path="HeartbeatService.d.ts" />
//
// Autogenerated by Thrift Compiler (0.14.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//

import thrift = require('thrift');
import Thrift = thrift.Thrift;
import Q = thrift.Q;
import Int64 = require('node-int64');
import shared_ttypes = require('./shared_types');


import ttypes = require('./logservice_types');
import LogSeverity = ttypes.LogSeverity
import LOGSERVICE_ID = ttypes.LOGSERVICE_ID
import SrcPos = ttypes.SrcPos
import LogEntry = ttypes.LogEntry
import HeartbeatService = require('./HeartbeatService');

/**
 * A receiver of LogEntry:s. This is a thrift clone of the IfLogServer
 * interface. Registering this service and starting the ThriftLogForwarder
 * service in the IDE platform lets you receive everything logged by the IDE
 * platform.
 */
declare class Client extends HeartbeatService.Client {
  #output: thrift.TTransport;
  #pClass: thrift.TProtocol;
  #_seqid: number;

  constructor(output: thrift.TTransport, pClass: { new(trans: thrift.TTransport): thrift.TProtocol });

  addCategory(category: string): Q.Promise<void>;

  addCategory(category: string, callback?: (error: void, response: void)=>void): void;

  removeCategory(category: string): Q.Promise<void>;

  removeCategory(category: string, callback?: (error: void, response: void)=>void): void;

  startSession(category: string): Q.Promise<void>;

  startSession(category: string, callback?: (error: void, response: void)=>void): void;

  postLogEntry(entry: LogEntry): Q.Promise<void>;

  postLogEntry(entry: LogEntry, callback?: (error: void, response: void)=>void): void;
}

declare class Processor extends HeartbeatService.Processor {
  #_handler: object;

  constructor(handler: object);
  process(input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_addCategory(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_removeCategory(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_startSession(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_postLogEntry(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
}
