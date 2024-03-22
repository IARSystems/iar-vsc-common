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



declare enum LogSeverity {
  kDebug = -1,
  kUser = 0,
  kMinorInfo = 1,
  kInfo = 2,
  kWarning = 3,
  kError = 4,
  kAlert = 5,
  kSuper = 6,
}

declare class SrcPos {
  public row: number;
  public col: number;

    constructor(args?: { row: number; col: number; });
  read(input: Object): void;
  write(input: Object): void;
}

/**
 * An entry in a log, matches IfLogServer::Entry
 */
declare class LogEntry {
  public category: string;
  public sender: string;
  public text: string;
  public severity: LogSeverity;
  public path: string;
  public srcPos: SrcPos;
  public srcEndPos: SrcPos;
  public timestamp: Int64;
  public entryId: Int64;
  public isSubEntry: boolean;

    constructor(args?: { category: string; sender: string; text: string; severity: LogSeverity; path: string; srcPos: SrcPos; srcEndPos: SrcPos; timestamp: Int64; entryId: Int64; isSubEntry: boolean; });
  read(input: Object): void;
  write(input: Object): void;
}

declare var LOGSINK_ID: string;
