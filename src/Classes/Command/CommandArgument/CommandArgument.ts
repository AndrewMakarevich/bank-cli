import { ICommandArgument } from '../interfaces/commandArgument.interface';

class CommandArgument implements ICommandArgument {
  name: string;
  description?: string;

  constructor(name: string, description?: string) {
    this.name = name;
    this.description = description;
  }
}

export default CommandArgument;
