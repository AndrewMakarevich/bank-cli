import { IObserver } from '../../Observer/interfaces/observer.interface';
import { ISubscriber } from '../../Observer/interfaces/subscriber.interface';
import {
  IParsedArgument,
  IParsedOption,
} from '../../Parser/interfaces/parser.interface';
import CommandArgumentInterface from '../CommandArgument/CommandArgumentInterface';
import CommandOptionInterface from '../CommandOption/CommandOptionInterface';
import { ICommandArgument } from './commandArgument.interface';
import { ICommandOption } from './commandOption.interface';

export interface ICommand {
  name: string;
  description?: string;
  options: CommandOptionInterface[];
  arguments: CommandArgumentInterface[];
  observer: IObserver | null;

  addOption: (CommandOption: ICommandOption) => ICommand;
  addArgument: (CommandArgument: ICommandArgument) => ICommand;
  handle: (callback: ISubscriber['notify']) => void;
}

export type IHandleCallback = (
  command: string,
  opts: IParsedOption[],
  args: IParsedArgument[]
) => void;
