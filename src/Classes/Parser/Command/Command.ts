import { IObserver } from '../../Observer/interfaces/observer.interface';
import { ICommand, IHandleCallback } from '../interfaces/command.interface';
import Subscriber from '../../Observer/Subscriber/Subscriber';
import { ICommandOption } from '../interfaces/commandOption.interface';
import { ICommandArgument } from '../interfaces/commandArgument.interface';
import { ISubscriber } from '../../Observer/interfaces/subscriber.interface';
import { IParseArgvRes } from '../interfaces/parser.interface';

class Command implements ICommand {
  name: string;
  description?: string | undefined;
  private readonly opts: ICommandOption[];
  private readonly args: ICommandArgument[];
  private _observer: IObserver | null;

  constructor(name: string, description?: string) {
    this.name = name;
    this.description = description;
    this.opts = [];
    this.args = [];
    this._observer = null;
  }

  get options() {
    return this.opts;
  }

  get arguments() {
    return this.args;
  }

  get observer() {
    return this._observer;
  }

  /** Sets automatically, when command added through the parser */
  set observer(observer) {
    this._observer = observer;
  }

  addOption(commandOption: ICommandOption) {
    this.opts.push(commandOption);

    return this;
  }

  addArgument(commandArgument: ICommandArgument) {
    this.args.push(commandArgument);

    return this;
  }

  handle(callback: ISubscriber['notify']) {
    if (this._observer)
      this._observer.observe(this.name, new Subscriber(callback));
  }
}

export default Command;
