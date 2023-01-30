import { ISubscriber } from '../../Observer/interfaces/subscriber.interface';
import { ICommand } from '../interfaces/command.interface';
import { ICommandArgument } from '../interfaces/commandArgument.interface';
import { ICommandOption } from '../interfaces/commandOption.interface';

class CommandInterface {
  private readonly command: ICommand;

  constructor(command: ICommand) {
    this.command = command;
  }

  get name() {
    return this.command.name;
  }

  get description() {
    return this.command.description;
  }

  get options() {
    return this.command.options;
  }

  get arguments() {
    return this.command.arguments;
  }

  get observer() {
    return this.command.observer;
  }

  set observer(observer) {
    this.command.observer = observer;
  }

  addOption(commandOption: ICommandOption) {
    return this.command.addOption(commandOption);
  }

  addArgument(commandArgument: ICommandArgument) {
    return this.command.addArgument(commandArgument);
  }

  handle(callback: ISubscriber['notify']) {
    this.command.handle(callback);
  }
}

export default CommandInterface;
