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


import ttypes = require('./cspy_types');
import DkNotifyConstant = ttypes.DkNotifyConstant
import DkCoreStatusConstants = ttypes.DkCoreStatusConstants
import DkLoggingCategoryConstant = ttypes.DkLoggingCategoryConstant
import BasicExprType = ttypes.BasicExprType
import DEBUGGER_SERVICE = ttypes.DEBUGGER_SERVICE
import DEBUGEVENT_SERVICE = ttypes.DEBUGEVENT_SERVICE
import CONTEXT_MANAGER_SERVICE = ttypes.CONTEXT_MANAGER_SERVICE
import MEMORY_SERVICE = ttypes.MEMORY_SERVICE
import SessionConfiguration = ttypes.SessionConfiguration
import DebugEvent = ttypes.DebugEvent
import InspectionContextChangedEvent = ttypes.InspectionContextChangedEvent
import BaseContextChangedEvent = ttypes.BaseContextChangedEvent
import LogEvent = ttypes.LogEvent
import Thread = ttypes.Thread
import ExprValue = ttypes.ExprValue
import ModuleData = ttypes.ModuleData
import NamedLocationMask = ttypes.NamedLocationMask
import NamedLocation = ttypes.NamedLocation
import ExtraDebugFile = ttypes.ExtraDebugFile
import ModuleLoadingOptions = ttypes.ModuleLoadingOptions
import ResetStyles = ttypes.ResetStyles
import DebugSettings = ttypes.DebugSettings

/**
 * Interface for receiving information about events in the debugger.
 */
declare class Client {
  #output: thrift.TTransport;
  #pClass: thrift.TProtocol;
  #_seqid: number;

  constructor(output: thrift.TTransport, pClass: { new(trans: thrift.TTransport): thrift.TProtocol });

  /**
   * Called whenever a debug event happens. See DkNotifySubscriber#Notify.
   */
  postDebugEvent(event: DebugEvent): Q.Promise<void>;

  /**
   * Called whenever a debug event happens. See DkNotifySubscriber#Notify.
   */
  postDebugEvent(event: DebugEvent, callback?: (error: void, response: void)=>void): void;

  /**
   * This one should not be oneway, since we need to make sure that the
   * client has actually recevied the message before proceeding. This will
   * otherwise prevent e.g. fatal error messages from being seen.
   */
  postLogEvent(event: LogEvent): Q.Promise<void>;

  /**
   * This one should not be oneway, since we need to make sure that the
   * client has actually recevied the message before proceeding. This will
   * otherwise prevent e.g. fatal error messages from being seen.
   */
  postLogEvent(event: LogEvent, callback?: (error: void, response: void)=>void): void;

  /**
   * Triggered on kDkInspectionContextChanged.
   */
  postInspectionContextChangedEvent(event: InspectionContextChangedEvent): Q.Promise<void>;

  /**
   * Triggered on kDkInspectionContextChanged.
   */
  postInspectionContextChangedEvent(event: InspectionContextChangedEvent, callback?: (error: void, response: void)=>void): void;

  /**
   * Triggered on kDkBaseContextChanged.
   */
  postBaseContextChangedEvent(event: BaseContextChangedEvent): Q.Promise<void>;

  /**
   * Triggered on kDkBaseContextChanged.
   */
  postBaseContextChangedEvent(event: BaseContextChangedEvent, callback?: (error: void, response: void)=>void): void;
}

declare class Processor {
  #_handler: object;

  constructor(handler: object);
  process(input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_postDebugEvent(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_postLogEvent(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_postInspectionContextChangedEvent(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_postBaseContextChangedEvent(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
}
