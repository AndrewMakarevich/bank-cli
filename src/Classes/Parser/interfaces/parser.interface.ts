import { IObserver } from '../../Observer/interfaces/observer.interface';
import { ICommand } from './command.interface';

export interface IParser {
  existCommands: Map<string, ICommand>;
  observer: IObserver;

  addCommand: (command: ICommand) => ICommand;
  parseAsOption: (option: string, command: ICommand) => IParsedOption | null;
  parseAsArgument: (
    arg: string,
    argumentsPattern: string[]
  ) => IParsedArgument | null;
  parseArgv: () => IParseArgvRes;
  parse: () => IParseArgvRes;
}

export type IParsedOption = Record<string, string | boolean>;

export type IParsedArgument = Record<string, string | boolean>;

export interface IParseArgvRes {
  command: string;
  givenOpts: IParsedOption;
  givenArgs: IParsedArgument;
}
