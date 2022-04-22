//
// Autogenerated by Thrift Compiler (0.14.0)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//
import thrift = require('thrift');
import Thrift = thrift.Thrift;
import Q = thrift.Q;
import Int64 = require('node-int64');
import ServiceRegistry_ttypes = require('./ServiceRegistry_types');
import shared_ttypes = require('./shared_types');



declare enum CRunBreakAction {
  kStopAndLog = 0,
  kLog = 1,
  kIgnore = 2,
}

declare class CRunMessage {
  public id: number;
  public index: number;
  public core: number;
  public name: string;
  public text: string;
  public cycle: Int64;
  public repeatCount: number;
  public subMessages: CRunMessage[];
  public callStack: string[];
  public noStop: boolean;
  public runTo: shared_ttypes.Location;
  public userProgramCounter: shared_ttypes.Location;
  public extraSourceRanges: shared_ttypes.SourceRange[];
  public pcSourceRange: shared_ttypes.SourceRange;
  public tooltip: string;
  public breakAction: CRunBreakAction;

    constructor(args?: { id: number; index: number; core: number; name: string; text: string; cycle: Int64; repeatCount: number; subMessages: CRunMessage[]; callStack: string[]; noStop: boolean; runTo: shared_ttypes.Location; userProgramCounter: shared_ttypes.Location; extraSourceRanges: shared_ttypes.SourceRange[]; pcSourceRange: shared_ttypes.SourceRange; tooltip: string; breakAction: CRunBreakAction; });
  read(input: Object): void;
  write(input: Object): void;
}

declare var CRUN_DISPLAY_SERVICE: string;

declare var CRUN_BACKEND_SERVICE: string;