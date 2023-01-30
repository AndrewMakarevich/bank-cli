import { IObserver } from '../Observer/interfaces/observer.interface';
import CommandArgumentInterface from './CommandArgument/CommandArgumentInterface';
import { ICommand } from './interfaces/command.interface';
import CommandOptionInterface from './CommandOption/CommandOptionInterface';

class CommandInterface {
  private readonly command: ICommand;

  constructor(command: ICommand) {
    this.command = command;
  }

  get name() {
    return this.command.name;
  }

  set name(name: string) {
    this.command.name = name;
  }

  get description() {
    return this.command.description;
  }

  set description(description: string | undefined) {
    this.command.description = description;
  }

  get observer() {
    return this.command.observer;
  }

  set observer(observer: IObserver | null) {
    this.command.observer = observer;
  }

  get options() {
    return this.command.options;
  }

  get arguments() {
    return this.command.arguments;
  }

  addOption(commandOption: CommandOptionInterface) {
    return this.command.addOption(commandOption);
  }

  addArgument(commandArgument: CommandArgumentInterface) {
    return this.command.addArgument(commandArgument);
  }
}

export default CommandInterface;
