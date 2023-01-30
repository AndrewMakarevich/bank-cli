import CommandInterface from '../../Command/CommandInterface';
import { ICommand } from '../../Command/interfaces/command.interface';
import { IObserver } from '../../Observer/interfaces/observer.interface';

export interface IParser {
  existCommands: Map<string, CommandInterface>;
  observer: IObserver;

  addCommand: (command: ICommand) => CommandInterface;
  parse: () => IParseArgumentsResult;
}

export type IParsedOption = Record<string, string | boolean>;

export type IParsedArgument = Record<string, string | boolean>;

export interface IParseArgumentsResult {
  command: string;
  givenOptions: IParsedOption;
  givenArguments: IParsedArgument;
}
