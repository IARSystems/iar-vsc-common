/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

/**
 * A thrift service implementation. This type lets you implement a service in a
 * type-safe way, to ensure that the handler implements all methods and that it
 * implements them with the correct types.
 * @typeParam Client The "Client" class generated by thrift for the service
 * @example
 * import * as MyService from "iar-vsc-common/thrift/bindings/MyService";
 * class MyServiceHandler implements ThriftServiceHandler<MyService.Client> {
 *   // Implementation...
 * }
 */
export type ThriftServiceHandler<Client> =
    Omit<Client, "isAlive" | "#output" | "#pClass" | "#_seqid">;
