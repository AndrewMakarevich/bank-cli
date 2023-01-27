import { IObserver } from '../../Observer/interfaces/observer.interface';
import { ISubscriber } from '../../Observer/interfaces/subscriber.interface';
import { ICommandArgument } from './commandArgument.interface';
import { ICommandOption } from './commandOption.interface';
import { IParsedArgument, IParsedOption } from './parser.interface';

export interface ICommand {
  name: string;
  description?: string;
  options: ICommandOption[];
  arguments: ICommandArgument[];
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
