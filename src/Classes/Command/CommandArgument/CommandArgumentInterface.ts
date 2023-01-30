import { ICommandArgument } from '../interfaces/commandArgument.interface';

class CommandArgumentInterface {
  argument: ICommandArgument;

  constructor(argument: ICommandArgument) {
    this.argument = argument;
  }

  get name() {
    return this.argument.name;
  }

  get description() {
    return this.argument.description;
  }
}

export default CommandArgumentInterface;
