import { ICommand } from '../interfaces/command.interface';
import { ICommandArgument } from '../interfaces/commandArgument.interface';
import { ICommandOption } from '../interfaces/commandOption.interface';

class CommandInterface {
  private readonly command: ICommand;

  constructor(command: ICommand) {
    this.command = command;
  }

  get options() {
    return this.command.options;
  }

  get arguments() {
    return this.command.arguments;
  }

  addOption(commandOption: ICommandOption) {
    return this.command.addOption(commandOption);
  }

  addArgument(commandArgument: ICommandArgument) {
    return this.command.addArgument(commandArgument);
  }
}

export default CommandInterface;
