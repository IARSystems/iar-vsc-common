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
import cspy_ttypes = require('./cspy_types');
import ServiceRegistry_ttypes = require('./ServiceRegistry_types');


import ttypes = require('./ampsync_types');
import SessionState = ttypes.SessionState
import LowLevelAction = ttypes.LowLevelAction
import CoreLowLevelResult = ttypes.CoreLowLevelResult
import WhatNext = ttypes.WhatNext
import CoreStatus = ttypes.CoreStatus
import Tools = ttypes.Tools
import AMP_VERSION = ttypes.AMP_VERSION
import CORES_REGISTRY_SERVICE = ttypes.CORES_REGISTRY_SERVICE
import PARTNER_REGISTRY_SERVICE = ttypes.PARTNER_REGISTRY_SERVICE
import EVENT_BUS_SERVICE = ttypes.EVENT_BUS_SERVICE
import SESSION_SYNCHRONIZER_SERVICE = ttypes.SESSION_SYNCHRONIZER_SERVICE
import GATE_KEEPER_SERVICE = ttypes.GATE_KEEPER_SERVICE
import MULTI_CORE_LOG_SERVICE = ttypes.MULTI_CORE_LOG_SERVICE
import SOFT_CTI_SERVICE = ttypes.SOFT_CTI_SERVICE
import CPU_STATUS_POLL_CONTROL_SERVICE = ttypes.CPU_STATUS_POLL_CONTROL_SERVICE
import DEBUGGER_STARTER_SERVICE = ttypes.DEBUGGER_STARTER_SERVICE
import PARTNER_REGISTRY_PARTNER_SET_EVENT = ttypes.PARTNER_REGISTRY_PARTNER_SET_EVENT
import PARTNER_REGISTRY_PARTNER_IS_ALIVE_EVENT = ttypes.PARTNER_REGISTRY_PARTNER_IS_ALIVE_EVENT
import PARTNER_REGISTRY_PARTNER_IS_DECEASED_EVENT = ttypes.PARTNER_REGISTRY_PARTNER_IS_DECEASED_EVENT
import PARTNER_REGISTRY_EVENT_PARTNER_ID = ttypes.PARTNER_REGISTRY_EVENT_PARTNER_ID
import CORES_REGISTRY_UPDATED_EVENT = ttypes.CORES_REGISTRY_UPDATED_EVENT
import EVENT_SENDING_PARTNERID_KEY = ttypes.EVENT_SENDING_PARTNERID_KEY
import SESSION_SYNCHRONIZER_SYNCSTART_EVENT = ttypes.SESSION_SYNCHRONIZER_SYNCSTART_EVENT
import SESSION_SYNCHRONIZER_FROM_KEY = ttypes.SESSION_SYNCHRONIZER_FROM_KEY
import SESSION_SYNCHRONIZER_TO_KEY = ttypes.SESSION_SYNCHRONIZER_TO_KEY
import SESSION_SYNCHRONIZER_SYNCSTART_SENDING_PARTNER_KEY = ttypes.SESSION_SYNCHRONIZER_SYNCSTART_SENDING_PARTNER_KEY
import SESSION_SYNCHRONIZER_SYNCCOMMIT_EVENT = ttypes.SESSION_SYNCHRONIZER_SYNCCOMMIT_EVENT
import SESSION_SYNCHRONIZER_DEBUGGERSTART_EVENT = ttypes.SESSION_SYNCHRONIZER_DEBUGGERSTART_EVENT
import SESSION_SYNCHRONIZER_DEBUGGERENDSESSION_EVENT = ttypes.SESSION_SYNCHRONIZER_DEBUGGERENDSESSION_EVENT
import SESSION_SYNCHRONIZER_DEBUGGERTERMINATE_EVENT = ttypes.SESSION_SYNCHRONIZER_DEBUGGERTERMINATE_EVENT
import SESSION_SYNCHRONIZER_DEBUGGERDISCONNECT_EVENT = ttypes.SESSION_SYNCHRONIZER_DEBUGGERDISCONNECT_EVENT
import SESSION_SYNCHRONIZER_EVENT_PARTNER_ID = ttypes.SESSION_SYNCHRONIZER_EVENT_PARTNER_ID
import EXEC_CONTROL_GO_EVENT = ttypes.EXEC_CONTROL_GO_EVENT
import EXEC_CONTROL_STOP_EVENT = ttypes.EXEC_CONTROL_STOP_EVENT
import EXEC_CONTROL_MULTISTOP_EVENT = ttypes.EXEC_CONTROL_MULTISTOP_EVENT
import EXEC_CONTROL_MULTIGO_EVENT = ttypes.EXEC_CONTROL_MULTIGO_EVENT
import EXEC_CONTROL_SET_RUNALL_EVENT = ttypes.EXEC_CONTROL_SET_RUNALL_EVENT
import EXEC_CONTROL_SET_RUNONE_EVENT = ttypes.EXEC_CONTROL_SET_RUNONE_EVENT
import EXEC_CONTROL_EVENT_CORE_KEY_PREFIX = ttypes.EXEC_CONTROL_EVENT_CORE_KEY_PREFIX
import SOFT_CTI_STOP_ALL_EVENT = ttypes.SOFT_CTI_STOP_ALL_EVENT
import SOFT_CTI_EVENT_CORE_KEY_PREFIX = ttypes.SOFT_CTI_EVENT_CORE_KEY_PREFIX
import SOFT_CTI_EVENT_ID_KEY_PREFIX = ttypes.SOFT_CTI_EVENT_ID_KEY_PREFIX
import CPU_STATUS_POLL_CONTROL_DISABLE_EVENT = ttypes.CPU_STATUS_POLL_CONTROL_DISABLE_EVENT
import CPU_STATUS_POLL_CONTROL_ENABLE_EVENT = ttypes.CPU_STATUS_POLL_CONTROL_ENABLE_EVENT
import DEBUGGER_STARTER_TOOL_TO_START_KEY = ttypes.DEBUGGER_STARTER_TOOL_TO_START_KEY
import DEBUGKERNEL_EXEC_STARTED_EVENT = ttypes.DEBUGKERNEL_EXEC_STARTED_EVENT
import DEBUGKERNEL_EXEC_STOPPED_EVENT = ttypes.DEBUGKERNEL_EXEC_STOPPED_EVENT
import DEBUGKERNEL_RESET_EVENT = ttypes.DEBUGKERNEL_RESET_EVENT
import DEBUGKERNEL_BEGIN_SESSION_EVENT = ttypes.DEBUGKERNEL_BEGIN_SESSION_EVENT
import DEBUGKERNEL_END_SESSION_EVENT = ttypes.DEBUGKERNEL_END_SESSION_EVENT
import DEBUGKERNEL_MEMMOY_CHANGED_EVENT = ttypes.DEBUGKERNEL_MEMMOY_CHANGED_EVENT
import DEBUGKERNEL_SENDER = ttypes.DEBUGKERNEL_SENDER
import UnknownPartner = ttypes.UnknownPartner
import EventBusRegistrationFailed = ttypes.EventBusRegistrationFailed
import FailedToStartPartner = ttypes.FailedToStartPartner
import PartnerInformation = ttypes.PartnerInformation
import CoreInfo = ttypes.CoreInfo
import CoreRange = ttypes.CoreRange
import Event = ttypes.Event
import NumberOfCoresInfo = ttypes.NumberOfCoresInfo

declare class Client {
  #output: thrift.TTransport;
  #pClass: thrift.TProtocol;
  #_seqid: number;

  constructor(output: thrift.TTransport, pClass: { new(trans: thrift.TTransport): thrift.TProtocol });

  Log(cores: CoreRange, color: number, timeStamp: string, text: string): Q.Promise<void>;

  Log(cores: CoreRange, color: number, timeStamp: string, text: string, callback?: (error: void, response: void)=>void): void;
}

declare class Processor {
  #_handler: object;

  constructor(handler: object);
  process(input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_Log(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
}
