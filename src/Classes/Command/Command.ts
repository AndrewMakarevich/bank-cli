import { IObserver } from '../Observer/interfaces/observer.interface';
import { ICommand, IHandleCallback } from './interfaces/command.interface';
import Subscriber from '../Observer/Subscriber/Subscriber';
import { ISubscriber } from '../Observer/interfaces/subscriber.interface';
import CommandOptionInterface from './CommandOption/CommandOptionInterface';
import CommandArgumentInterface from './CommandArgument/CommandArgumentInterface';
import { ICommandOption } from './interfaces/commandOption.interface';
import { ICommandArgument } from './interfaces/commandArgument.interface';

class Command implements ICommand {
  name: string;
  description?: string | undefined;
  private readonly optionsArr: CommandOptionInterface[];
  private readonly argumentsArr: CommandArgumentInterface[];
  private _observer: IObserver | null;

  constructor(name: string, description?: string) {
    this.name = name;
    this.description = description;
    this.optionsArr = [];
    this.argumentsArr = [];
    this._observer = null;
  }

  get options() {
    return this.optionsArr;
  }

  get arguments() {
    return this.argumentsArr;
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

    this.optionsArr.push(newOption);

    return this;
  }

  addArgument(commandArgument: ICommandArgument) {
    const newArgument = new CommandArgumentInterface(commandArgument);

    this.argumentsArr.push(newArgument);

    return this;
  }

  handle(callback: ISubscriber['notify']) {
    if (this._observer)
      this._observer.observe(this.name, new Subscriber(callback));
  }
}

export default Command;
