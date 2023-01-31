import { ICommandArgument } from '../interfaces/commandArgument.interface';

class CommandArgumentInterface {
  argument: ICommandArgument;

  constructor(commandArgument: ICommandArgument) {
    this.argument = commandArgument;
  }

  get name() {
    return this.argument.name;
  }

  set name(name: string) {
    this.argument.name = name;
  }

  get description() {
    return this.argument.description;
  }

  set description(description: string | undefined) {
    this.argument.description = description;
  }
}

export default CommandArgumentInterface;
