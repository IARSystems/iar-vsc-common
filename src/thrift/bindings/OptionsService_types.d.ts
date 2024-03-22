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



declare class CreateSessionResponse {
  public sessionId: shared_ttypes.Id;
  public success: shared_ttypes.Success;

    constructor(args?: { sessionId: shared_ttypes.Id; success: shared_ttypes.Success; });
  read(input: Object): void;
  write(input: Object): void;
}

declare class DestroySessionRequest {
  public sessionId: shared_ttypes.Id;

    constructor(args?: { sessionId: shared_ttypes.Id; });
  read(input: Object): void;
  write(input: Object): void;
}

declare class DestroySessionResponse {
  public sessionId: shared_ttypes.Id;
  public success: shared_ttypes.Success;

    constructor(args?: { sessionId: shared_ttypes.Id; success: shared_ttypes.Success; });
  read(input: Object): void;
  write(input: Object): void;
}

declare class Tree {
  public id: shared_ttypes.Id;
  public data: string;

    constructor(args?: { id: shared_ttypes.Id; data: string; });
  read(input: Object): void;
  write(input: Object): void;
}

declare class GetTreeRequest {
  public sessionId: shared_ttypes.Id;
  public treeId: shared_ttypes.Id;

    constructor(args?: { sessionId: shared_ttypes.Id; treeId: shared_ttypes.Id; });
  read(input: Object): void;
  write(input: Object): void;
}

declare class GetTreeResponse {
  public sessionId: shared_ttypes.Id;
  public tree: Tree;
  public success: shared_ttypes.Success;

    constructor(args?: { sessionId: shared_ttypes.Id; tree: Tree; success: shared_ttypes.Success; });
  read(input: Object): void;
  write(input: Object): void;
}

declare var SERVICE_ID: string;
