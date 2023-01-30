import { IObserver } from '../../Observer/interfaces/observer.interface';
import { ISubscriber } from '../../Observer/interfaces/subscriber.interface';
import CommandArgumentInterface from '../CommandArgument/CommandArgumentInterface';
import CommandOptionInterface from '../CommandOption/CommandOptionInterface';

export interface ICommand {
  name: string;
  description?: string;
  options: CommandOptionInterface[];
  arguments: CommandArgumentInterface[];
  observer: IObserver | null;

  addOption: (CommandOption: CommandOptionInterface) => ICommand;
  addArgument: (CommandArgument: CommandArgumentInterface) => ICommand;
  handle: (callback: ISubscriber['notify']) => void;
}
