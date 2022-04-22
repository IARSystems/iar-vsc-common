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



declare enum OptionErrorCode {
  Unknown = 0,
}

/**
 * An enumerated list of all possible option types.
 */
declare enum OptionType {
  String = 0,
  Boolean = 1,
  StringList = 2,
  Enumerated = 3,
  IncludePaths = 4,
  PreprocessorSymbols = 5,
}

/**
 * Generic error thrown by the option service.
 */
declare class OptionError extends Thrift.TException {
  public errorCode: OptionErrorCode;
  public detailMessage: string;

    constructor(args?: { errorCode: OptionErrorCode; detailMessage: string; });
  read(input: Object): void;
  write(input: Object): void;
}

/**
 * Defines the name and expected value format of an option (but not a default value).
 * 
 * If the option type is OptionType.Enumerated, the enumeratedOptionTypeId field must
 * be set to the id of an EnumeratedOptionType which has previously been registered with
 * the option manager.
 * 
 * Option default values are determined via OptionConfiguration instances
 * in a Toolchain definition. Those will also determine which options are available
 * in a user project among those which are defined.
 * 
 */
declare class OptionDefinition {
  public id: string;
  public name: string;
  public type: OptionType;
  public enumeratedOptionTypeId: string;

    constructor(args?: { id: string; name: string; type: OptionType; enumeratedOptionTypeId: string; });
  read(input: Object): void;
  write(input: Object): void;
}

/**
 * One of the possible values of an enumerated option
 */
declare class EnumeratedOptionValue {
  public id: string;
  public label: string;

    constructor(args?: { id: string; label: string; });
  read(input: Object): void;
  write(input: Object): void;
}

/**
 * An option type using multiple enumerated choices
 */
declare class EnumeratedOptionType {
  public id: string;
  public values: EnumeratedOptionValue[];

    constructor(args?: { id: string; values: EnumeratedOptionValue[]; });
  read(input: Object): void;
  write(input: Object): void;
}

/**
 * A container of option value assignments.
 * 
 * In order to validate a configuration, all the options appearing in the configuration
 * must have been registered with the service as an OptionDefinition previously.
 * 
 * A list of parent configurations is used to derive option values which are not
 * explicitly specified. The ancestor hierarchy should be examined bottom-up.
 * If multiple ancestors are specified, they should be examined in order of appearance
 * in the parent configuration list.
 */
declare class OptionConfiguration {
  public id: string;
  public name: string;
  public optionValues: { [k: string]: string; };
  public parentConfigurationIds: string[];

    constructor(args?: { id: string; name: string; optionValues: { [k: string]: string; }; parentConfigurationIds: string[]; });
  read(input: Object): void;
  write(input: Object): void;
}

/**
 * Defines how an option should be presented to the user, including e.g. when it is
 * enabled.
 */
declare class OptionPresentation {
  public optionId: string;
  public enabledCondition: string;
  public enumeratedOptionFilter: string;

    constructor(args?: { optionId: string; enabledCondition: string; enumeratedOptionFilter: string; });
  read(input: Object): void;
  write(input: Object): void;
}

/**
 * A category of options,corresponding to e.g. a tab in the option GUI.
 * 
 */
declare class OptionCategory {
  public name: string;
  public optionIds: OptionPresentation[];

    constructor(args?: { name: string; optionIds: OptionPresentation[]; });
  read(input: Object): void;
  write(input: Object): void;
}

/**
 * Provides GUI-specific information about a configuration.
 * Once associated with a configuration id, a GUI will use this object to
 * partition the options into different tabs.
 * 
 */
declare class ConfigurationPresentation {
  public id: string;
  public configurationId: string;
  public categories: OptionCategory[];

    constructor(args?: { id: string; configurationId: string; categories: OptionCategory[]; });
  read(input: Object): void;
  write(input: Object): void;
}

/**
 * Defines a build tool, e.g. a compiler.
 * 
 * A build tool is uniquely identified by its ID, and declares a set of input
 * and output file extensions to specify which files it is able to transform.
 * 
 */
declare class ToolDefinition {
  public id: string;
  public name: string;
  public executableName: string;
  public inputExtensions: string[];
  public outputExtensions: string[];
  public isTargetTool: boolean;

    constructor(args?: { id: string; name: string; executableName: string; inputExtensions: string[]; outputExtensions: string[]; isTargetTool: boolean; });
  read(input: Object): void;
  write(input: Object): void;
}

/**
 * Defines a hardware target for which projects can be built for.
 * 
 * A target defines a list of one or more "root" parent build configurations which
 * shall be used as parent of actual project configurations. Those parent configurations
 * will determine the available options for the target among those which have been defined
 * and their default value. Typical root configurations will define how the Debug and Release
 * options and their default values will be.
 */
declare class Toolchain {
  public id: string;
  public name: string;
  public rootConfigurations: OptionConfiguration[];
  public tools: ToolDefinition[];

    constructor(args?: { id: string; name: string; rootConfigurations: OptionConfiguration[]; tools: ToolDefinition[]; });
  read(input: Object): void;
  write(input: Object): void;
}

/**
 * An error as reported by a configuration verifier.
 */
declare class VerifierError {
  public optionId: string;
  public configurationId: string;
  public errorMessage: string;

    constructor(args?: { optionId: string; configurationId: string; errorMessage: string; });
  read(input: Object): void;
  write(input: Object): void;
}

declare var OPTION_SERVICE_NAME: string;