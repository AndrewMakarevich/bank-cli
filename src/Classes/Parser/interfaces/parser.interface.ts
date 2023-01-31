import { IObserver } from '../../Observer/interfaces/observer.interface';
import { ICommand } from '../../Command/interfaces/command.interface';

export interface IParser {
  existCommands: Map<string, ICommand>;
  observer: IObserver;

  addCommand: (command: ICommand) => ICommand;
  parseAsOption: (option: string, command: ICommand) => IParsedOption | null;
  parseAsArgument: (
    arg: string,
    argumentsPattern: string[]
  ) => IParsedArgument | null;
  parseArguments: () => IParseCmdArgumentsResponse;
  parse: () => IParseCmdArgumentsResponse;
}

export type IParsedOption = Record<string, string | boolean>;

export type IParsedArgument = Record<string, string>;

export interface IParseCmdArgumentsResponse {
  command: string;
  givenOptions: IParsedOption;
  givenArguments: IParsedArgument;
}
