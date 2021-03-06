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


import ttypes = require('./optionmanager_types');
import OptionErrorCode = ttypes.OptionErrorCode
import OptionType = ttypes.OptionType
import OPTION_SERVICE_NAME = ttypes.OPTION_SERVICE_NAME
import OptionError = ttypes.OptionError
import OptionDefinition = ttypes.OptionDefinition
import EnumeratedOptionValue = ttypes.EnumeratedOptionValue
import EnumeratedOptionType = ttypes.EnumeratedOptionType
import OptionConfiguration = ttypes.OptionConfiguration
import OptionPresentation = ttypes.OptionPresentation
import OptionCategory = ttypes.OptionCategory
import ConfigurationPresentation = ttypes.ConfigurationPresentation
import ToolDefinition = ttypes.ToolDefinition
import Toolchain = ttypes.Toolchain
import VerifierError = ttypes.VerifierError

/**
 * Interface of the option manager service towards Thrift
 * clients. Those might not reside in the same process as the service handler itself,
 * therefore all types manipulated by this interface need to be serializable.
 * <p>
 * One typical use case is an Eclipse frontend reading options in an EW project
 * file and/or manipulating its build configurations.
 * 
 */
declare class Client {
  #output: thrift.TTransport;
  #pClass: thrift.TProtocol;
  #_seqid: number;

  constructor(output: thrift.TTransport, pClass: { new(trans: thrift.TTransport): thrift.TProtocol });

  /**
   * Get the currently registered definition of an option.
   * 
   * @throws OptionError if id is not known to the option manager
   */
  getOptionDefinition(id: string): Q.Promise<OptionDefinition>;

  /**
   * Get the currently registered definition of an option.
   * 
   * @throws OptionError if id is not known to the option manager
   */
  getOptionDefinition(id: string, callback?: (error: ttypes.OptionError, response: OptionDefinition)=>void): void;

  /**
   * Register a new option configuration
   * 
   * @param config
   */
  addConfiguration(config: OptionConfiguration): Q.Promise<void>;

  /**
   * Register a new option configuration
   * 
   * @param config
   */
  addConfiguration(config: OptionConfiguration, callback?: (error: ttypes.OptionError, response: void)=>void): void;

  /**
   * Define how a configuration and its options are presented to the user
   * 
   * @param configPresentation
   */
  addConfigurationPresentation(configPresentation: ConfigurationPresentation): Q.Promise<void>;

  /**
   * Define how a configuration and its options are presented to the user
   * 
   * @param configPresentation
   */
  addConfigurationPresentation(configPresentation: ConfigurationPresentation, callback?: (error: ttypes.OptionError, response: void)=>void): void;

  /**
   * Get the presentation information for the given configuration ID.
   * The presentations can be inherited from parent configurations, and all those which are found
   * are returned - possibly none.
   * 
   * @return a (possiblt empty) list of ConfigurationPresentation.
   * 
   */
  getConfigurationPresentation(configId: string): Q.Promise<ConfigurationPresentation[]>;

  /**
   * Get the presentation information for the given configuration ID.
   * The presentations can be inherited from parent configurations, and all those which are found
   * are returned - possibly none.
   * 
   * @return a (possiblt empty) list of ConfigurationPresentation.
   * 
   */
  getConfigurationPresentation(configId: string, callback?: (error: ttypes.OptionError, response: ConfigurationPresentation[])=>void): void;

  /**
   * Remove a previously-declared configuration presentation.
   */
  removeConfigurationPresentation(id: string): Q.Promise<void>;

  /**
   * Remove a previously-declared configuration presentation.
   */
  removeConfigurationPresentation(id: string, callback?: (error: ttypes.OptionError, response: void)=>void): void;

  /**
   * Get the currently registered option configuration for the provided id.
   * 
   * @throws OptionError if id is not known to the option manager
   */
  getOptionConfiguration(id: string): Q.Promise<OptionConfiguration>;

  /**
   * Get the currently registered option configuration for the provided id.
   * 
   * @throws OptionError if id is not known to the option manager
   */
  getOptionConfiguration(id: string, callback?: (error: ttypes.OptionError, response: OptionConfiguration)=>void): void;

  /**
   * Remove an option configuration
   * 
   * @param configId
   */
  removeOptionConfiguration(id: string): Q.Promise<void>;

  /**
   * Remove an option configuration
   * 
   * @param configId
   */
  removeOptionConfiguration(id: string, callback?: (error: ttypes.OptionError, response: void)=>void): void;

  /**
   * * Runs all registered configuration verifiers for the given configuration
   * * and all of its parent configurations. The hierarchy of configurations is
   * * traversed bottom-up and left-to-right.
   *    * <p>
   *    * Note that the configuration verifiers need to be registered directly
   *    * with the option handler implementation - adding verifiers from a client interface
   *    * is not supported as of now.
   * *
   * * @param config
   * * @return
   */
  verifyOptionConfiguration(config: OptionConfiguration): Q.Promise<VerifierError[]>;

  /**
   * * Runs all registered configuration verifiers for the given configuration
   * * and all of its parent configurations. The hierarchy of configurations is
   * * traversed bottom-up and left-to-right.
   *    * <p>
   *    * Note that the configuration verifiers need to be registered directly
   *    * with the option handler implementation - adding verifiers from a client interface
   *    * is not supported as of now.
   * *
   * * @param config
   * * @return
   */
  verifyOptionConfiguration(config: OptionConfiguration, callback?: (error: void, response: VerifierError[])=>void): void;

  /**
   * Get the build tool definition for the given id, or <code>null</code> if
   * none is registered
   * 
   * @param toolId
   *            unique id of the build tool, e.g. "iar.arm.compiler"
   * @return
   */
  getTool(id: string): Q.Promise<ToolDefinition>;

  /**
   * Get the build tool definition for the given id, or <code>null</code> if
   * none is registered
   * 
   * @param toolId
   *            unique id of the build tool, e.g. "iar.arm.compiler"
   * @return
   */
  getTool(id: string, callback?: (error: ttypes.OptionError, response: ToolDefinition)=>void): void;

  /**
   * Get a list of command line arguments for the specified tool
   * 
   * @param configId
   *            unique id of an option configuration to generate a command
   *            line for
   * @param toolId
   *            unique id of the build tool, e.g. "iar.arm.compiler"
   * @return a list of command line arguments for the tool, excluding the tool
   *         executable name
   */
  getToolCommandLine(configId: string, toolId: string): Q.Promise<string[]>;

  /**
   * Get a list of command line arguments for the specified tool
   * 
   * @param configId
   *            unique id of an option configuration to generate a command
   *            line for
   * @param toolId
   *            unique id of the build tool, e.g. "iar.arm.compiler"
   * @return a list of command line arguments for the tool, excluding the tool
   *         executable name
   */
  getToolCommandLine(configId: string, toolId: string, callback?: (error: ttypes.OptionError, response: string[])=>void): void;

  /**
   * Get the serialized value of an option (whether local or inherited) within an option
   * configuration or its ancestors.
   * 
   * @param configId
   * @param optionId
   * @return
   */
  getOptionValue(configId: string, optionId: string): Q.Promise<string>;

  /**
   * Get the serialized value of an option (whether local or inherited) within an option
   * configuration or its ancestors.
   * 
   * @param configId
   * @param optionId
   * @return
   */
  getOptionValue(configId: string, optionId: string, callback?: (error: ttypes.OptionError, response: string)=>void): void;

  /**
   * Get the value of a string option. Will throw if the option type is not
   * {@link OptionType#string}
   * 
   * @param configId
   *            Id of option configuration to derive the value from. The
   *            configuration ancestors or the option default value might be
   *            used to derive the value if it is not defined locally.
   * @param id
   *            unique id of the option
   * @return the option value
   */
  getOptionValueAsString(configId: string, id: string): Q.Promise<string>;

  /**
   * Get the value of a string option. Will throw if the option type is not
   * {@link OptionType#string}
   * 
   * @param configId
   *            Id of option configuration to derive the value from. The
   *            configuration ancestors or the option default value might be
   *            used to derive the value if it is not defined locally.
   * @param id
   *            unique id of the option
   * @return the option value
   */
  getOptionValueAsString(configId: string, id: string, callback?: (error: ttypes.OptionError, response: string)=>void): void;

  /**
   * Get the value of a string option. Will throw if the option type is not
   * {@link OptionType#Boolean}
   * 
   * @param configId
   *            Id of option configuration to derive the value from. The
   *            configuration ancestors or the option default value might be
   *            used to derive the value if it is not defined locally.
   * @param id
   *            unique id of the option
   * @return the option value
   */
  getOptionValueAsBoolean(configId: string, id: string): Q.Promise<boolean>;

  /**
   * Get the value of a string option. Will throw if the option type is not
   * {@link OptionType#Boolean}
   * 
   * @param configId
   *            Id of option configuration to derive the value from. The
   *            configuration ancestors or the option default value might be
   *            used to derive the value if it is not defined locally.
   * @param id
   *            unique id of the option
   * @return the option value
   */
  getOptionValueAsBoolean(configId: string, id: string, callback?: (error: ttypes.OptionError, response: boolean)=>void): void;

  /**
   * Get the value of a string option. Will throw if the option type is not
   * {@link OptionType#Enumerated}
   * 
   * @param configId
   *            Id of option configuration to derive the value from. The
   *            configuration ancestors or the option default value might be
   *            used to derive the value if it is not defined locally.
   * @param id
   *            unique id of the option
   * @return the enumerated value id of the option, see
   *         {@link IIarEnumeratedOptionValue}
   */
  getOptionValueAsEnumerated(configId: string, id: string): Q.Promise<string>;

  /**
   * Get the value of a string option. Will throw if the option type is not
   * {@link OptionType#Enumerated}
   * 
   * @param configId
   *            Id of option configuration to derive the value from. The
   *            configuration ancestors or the option default value might be
   *            used to derive the value if it is not defined locally.
   * @param id
   *            unique id of the option
   * @return the enumerated value id of the option, see
   *         {@link IIarEnumeratedOptionValue}
   */
  getOptionValueAsEnumerated(configId: string, id: string, callback?: (error: ttypes.OptionError, response: string)=>void): void;

  /**
   * Get the value of a string option. Will throw if the option type is not
   * {@link OptionType#StringList}, {@link OptionType#IncludePaths} or
   * {@link OptionType#PreprocessorSymbols}
   * 
   * @param configId
   *            Id of option configuration to derive the value from. The
   *            configuration ancestors or the option default value might be
   *            used to derive the value if it is not defined locally.
   * @param id
   *            unique id of the option
   * @return the option value
   */
  getOptionValueAsStringList(configId: string, id: string): Q.Promise<string[]>;

  /**
   * Get the value of a string option. Will throw if the option type is not
   * {@link OptionType#StringList}, {@link OptionType#IncludePaths} or
   * {@link OptionType#PreprocessorSymbols}
   * 
   * @param configId
   *            Id of option configuration to derive the value from. The
   *            configuration ancestors or the option default value might be
   *            used to derive the value if it is not defined locally.
   * @param id
   *            unique id of the option
   * @return the option value
   */
  getOptionValueAsStringList(configId: string, id: string, callback?: (error: ttypes.OptionError, response: string[])=>void): void;

  /**
   * Get the enumerated type definition for the given id
   * 
   * @param enumeratedTypeId
   * @return an {@link EnumeratedOptionType}, or <code>null</code> if
   *         undefined
   */
  getEnumeratedType(enumeratedTypeId: string): Q.Promise<EnumeratedOptionType>;

  /**
   * Get the enumerated type definition for the given id
   * 
   * @param enumeratedTypeId
   * @return an {@link EnumeratedOptionType}, or <code>null</code> if
   *         undefined
   */
  getEnumeratedType(enumeratedTypeId: string, callback?: (error: ttypes.OptionError, response: EnumeratedOptionType)=>void): void;

  /**
   * Evaluate a previously-registered condition on the provided configuration.
   * <p>
   * The condition is referred to by its id, and needs to be registered directly
   * with the option handler implementation - adding conditions from a client interface
   * is not supported as of now.
   * 
   * @param conditionId unique id of the condition to evaluate
   * @param configurationId unique id of the configuration on which to evaluate the condition
   */
  evaluateCondition(conditionId: string, configurationId: string): Q.Promise<boolean>;

  /**
   * Evaluate a previously-registered condition on the provided configuration.
   * <p>
   * The condition is referred to by its id, and needs to be registered directly
   * with the option handler implementation - adding conditions from a client interface
   * is not supported as of now.
   * 
   * @param conditionId unique id of the condition to evaluate
   * @param configurationId unique id of the configuration on which to evaluate the condition
   */
  evaluateCondition(conditionId: string, configurationId: string, callback?: (error: ttypes.OptionError, response: boolean)=>void): void;

  /**
   * Evaluate a previously-registered filter for an enumerated option in the provided configuration.
   * <p>
   * The filter is referred to by its id, and needs to be registered directly
   * with the option handler implementation - adding filters from a client interface
   * is not supported as of now.
   * 
   * @param filterId unique id of the filter to evaluate
   * @param configurationId unique id of the configuration on which the option to filter is present
   * @param optionId unique id of the enumerated option whose values should be filtered
   */
  evaluateEnumeratedOptionFilter(filterId: string, configurationId: string, optionId: string): Q.Promise<EnumeratedOptionValue[]>;

  /**
   * Evaluate a previously-registered filter for an enumerated option in the provided configuration.
   * <p>
   * The filter is referred to by its id, and needs to be registered directly
   * with the option handler implementation - adding filters from a client interface
   * is not supported as of now.
   * 
   * @param filterId unique id of the filter to evaluate
   * @param configurationId unique id of the configuration on which the option to filter is present
   * @param optionId unique id of the enumerated option whose values should be filtered
   */
  evaluateEnumeratedOptionFilter(filterId: string, configurationId: string, optionId: string, callback?: (error: ttypes.OptionError, response: EnumeratedOptionValue[])=>void): void;

  /**
   * Define an option
   * 
   * @param optionDefinition
   *                          desrciption of the option being registered
   */
  addOptionDefinition(optionDefinition: OptionDefinition): Q.Promise<void>;

  /**
   * Define an option
   * 
   * @param optionDefinition
   *                          desrciption of the option being registered
   */
  addOptionDefinition(optionDefinition: OptionDefinition, callback?: (error: ttypes.OptionError, response: void)=>void): void;

  /**
   * Unregister an option
   * 
   * @param optionId the unique id of the option to remove
   */
  removeOption(optionId: string): Q.Promise<void>;

  /**
   * Unregister an option
   * 
   * @param optionId the unique id of the option to remove
   */
  removeOption(optionId: string, callback?: (error: ttypes.OptionError, response: void)=>void): void;

  /**
   * Register a new build tool
   * 
   * 
   * @param tool
   *            description of the tool being registered
   */
  addTool(tool: ToolDefinition): Q.Promise<void>;

  /**
   * Register a new build tool
   * 
   * 
   * @param tool
   *            description of the tool being registered
   */
  addTool(tool: ToolDefinition, callback?: (error: ttypes.OptionError, response: void)=>void): void;

  /**
   * Unregister a build tool
   * 
   * @param id
   *            unique id of the tool, e.g. "iar.arm.tool.compiler"
   */
  removeTool(id: string): Q.Promise<void>;

  /**
   * Unregister a build tool
   * 
   * @param id
   *            unique id of the tool, e.g. "iar.arm.tool.compiler"
   */
  removeTool(id: string, callback?: (error: ttypes.OptionError, response: void)=>void): void;

  /**
   * Register an enumerated type
   * 
   * @param type
   */
  addEnumeratedType(type: EnumeratedOptionType): Q.Promise<void>;

  /**
   * Register an enumerated type
   * 
   * @param type
   */
  addEnumeratedType(type: EnumeratedOptionType, callback?: (error: ttypes.OptionError, response: void)=>void): void;

  /**
   * Unregister an enumerated type
   * 
   * @param typeId the type to remove
   */
  removeEnumeratedType(typeId: string): Q.Promise<void>;

  /**
   * Unregister an enumerated type
   * 
   * @param typeId the type to remove
   */
  removeEnumeratedType(typeId: string, callback?: (error: ttypes.OptionError, response: void)=>void): void;

  /**
   * Registers a new toolchain and its default configurations
   * 
   * @param toolchain
   */
  addToolchain(toolchain: Toolchain): Q.Promise<void>;

  /**
   * Registers a new toolchain and its default configurations
   * 
   * @param toolchain
   */
  addToolchain(toolchain: Toolchain, callback?: (error: ttypes.OptionError, response: void)=>void): void;

  /**
   * Unregisters a toolchain and its default configurations
   * 
   * @param toolchainId
   */
  removeToolchain(toolchainId: string): Q.Promise<void>;

  /**
   * Unregisters a toolchain and its default configurations
   * 
   * @param toolchainId
   */
  removeToolchain(toolchainId: string, callback?: (error: ttypes.OptionError, response: void)=>void): void;

  /**
   * Get a previously registered toolchain
   * 
   * @param toolchainId
   */
  getToolchain(toolchainId: string): Q.Promise<Toolchain>;

  /**
   * Get a previously registered toolchain
   * 
   * @param toolchainId
   */
  getToolchain(toolchainId: string, callback?: (error: ttypes.OptionError, response: Toolchain)=>void): void;

  /**
   * Get a list of all previously-registered toolchains
   * 
   */
  getToolchains(): Q.Promise<Toolchain[]>;

  /**
   * Get a list of all previously-registered toolchains
   * 
   */
  getToolchains(callback?: (error: ttypes.OptionError, response: Toolchain[])=>void): void;
}

declare class Processor {
  #_handler: object;

  constructor(handler: object);
  process(input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_getOptionDefinition(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_addConfiguration(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_addConfigurationPresentation(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_getConfigurationPresentation(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_removeConfigurationPresentation(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_getOptionConfiguration(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_removeOptionConfiguration(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_verifyOptionConfiguration(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_getTool(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_getToolCommandLine(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_getOptionValue(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_getOptionValueAsString(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_getOptionValueAsBoolean(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_getOptionValueAsEnumerated(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_getOptionValueAsStringList(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_getEnumeratedType(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_evaluateCondition(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_evaluateEnumeratedOptionFilter(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_addOptionDefinition(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_removeOption(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_addTool(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_removeTool(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_addEnumeratedType(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_removeEnumeratedType(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_addToolchain(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_removeToolchain(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_getToolchain(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
  process_getToolchains(seqid: number, input: thrift.TProtocol, output: thrift.TProtocol): void;
}
