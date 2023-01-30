import { IObserver } from '../Observer/interfaces/observer.interface';
import { ISubscriber } from '../Observer/interfaces/subscriber.interface';
import Subscriber from '../Observer/Subscriber/Subscriber';
import CommandArgumentInterface from './CommandArgument/CommandArgumentInterface';
import { ICommand } from './interfaces/command.interface';
import CommandOptionInterface from './CommandOption/CommandOptionInterface';
import { ICommandOption } from './interfaces/commandOption.interface';
import { ICommandArgument } from './interfaces/commandArgument.interface';

class Command implements ICommand {
  name: string;
  description?: string | undefined;
  _options: CommandOptionInterface[];
  _arguments: CommandArgumentInterface[];
  private _observer: IObserver | null;

  constructor(
    name: string,
    description?: string,
    optionsArr: CommandOptionInterface[] = [],
    argumentsArr: CommandArgumentInterface[] = []
  ) {
    this.name = name;
    this.description = description;
    this._options = optionsArr;
    this._arguments = argumentsArr;
    this._observer = null;
  }

  get options() {
    return this._options;
  }

  get arguments() {
    return this._arguments;
  }

  get observer() {
    return this._observer;
  }

  /** Sets automatically, when command added through the parser */
  set observer(observer) {
    this._observer = observer;
  }

  addOption(commandOption: ICommandOption) {
    const newOption = new CommandOptionInterface(commandOption);

    this._options.push(newOption);

    return this;
  }

  addArgument(commandArgument: ICommandArgument) {
    const newArgument = new CommandArgumentInterface(commandArgument);

    this._arguments.push(newArgument);

    return this;
  }

  handle(callback: ISubscriber['notify']) {
    if (this._observer)
      this._observer.observe(this.name, new Subscriber(callback));
  }
}

export default Command;
