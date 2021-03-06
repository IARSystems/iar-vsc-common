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


import ttypes = require('./timeline_types');
import TIMELINE_FRONTEND_SERVICE = ttypes.TIMELINE_FRONTEND_SERVICE
import TIMELINE_BACKEND_SERVICE = ttypes.TIMELINE_BACKEND_SERVICE
import DbuTimelineDataAvailableNotification = ttypes.DbuTimelineDataAvailableNotification
import DbuTimelineChannelAvailableNotification = ttypes.DbuTimelineChannelAvailableNotification
import DbuTimelineChannelRemovedNotification = ttypes.DbuTimelineChannelRemovedNotification
import DbuTimelineCpuClockChangedNotification = ttypes.DbuTimelineCpuClockChangedNotification
import DbuTimelineEnablementChangedNotification = ttypes.DbuTimelineEnablementChangedNotification
import TimelineChannelInfo = ttypes.TimelineChannelInfo

/**
 * Listener service for timeline notifications, hosted by the frontend. As we only run a single frontend per session, we must include the partnerId in the communication.
 */
declare class Client {
  #output: thrift.TTransport;
  #pClass: thrift.TProtocol;
  #_seqid: number;

  constructor(output: thrift.TTransport, pClass: { new(trans: thrift.TTransport): thrift.TProtocol });

  dataAvailable(note: DbuTimelineDataAvailableNotification, partnerNamespace: string): Q.Promise<void>;

  dataAvailable(note: DbuTimelineDataAvailableNotification, partnerNamespace: string, callback?: (error: void, response: void)=>void): void;

  channelAvailable(note: DbuTimelineChannelAvailableNotification, partnerNamespace: string): Q.Promise<void>;

  channelAvailable(note: DbuTimelineChannelAvailableNotification, partnerNamespace: string, callback?: (error: void, response: void)=>void): void;

  channelRemoved(note: DbuTimelineChannelRemovedNotification, partnerNamespace: string): Q.Promise<void>;

  channelRemoved(note: DbuTimelineChannelRemovedNotification, partnerNamespace: string, callback?: (error: void, response: void)=>void): void;

  cpuClockChanged(note: DbuTimelineCpuClockChangedNotification, partnerNamespace: string): Q.Promise<void>;

  cpuClockChanged(note: DbuTimelineCpuClockChangedNotification, partnerNamespace: string, callback?: (error: void, response: void)=>void): void;

  enablementChanged(note: DbuTimelineEnablementChangedNotification, partnerNamespace: string): Q.Promise<void>;

  enablementChanged(note: DbuTimelineEnablementChangedNotification, partnerNamespace: string, callback?: (error: void, response: void)=>void): void;
}

declare class Processor {
  #_handler: object;

  constructor(handler: object);
  process(input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_dataAvailable(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_channelAvailable(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_channelRemoved(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_cpuClockChanged(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_enablementChanged(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
}
