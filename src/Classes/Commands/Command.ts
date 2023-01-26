import { type ICommandOption, type ICommand } from '../Parsers/interfaces';

class Command implements ICommand {
  name: string;
  description?: string | undefined;
  opts?: ICommandOption[] | undefined;

  constructor(name: string, description?: string) {
    this.name = name;
    this.description = description;
    this.opts = [];
  }

  addOption(commandOption: ICommandOption) {
    this.opts?.push(commandOption);
  }
}

export default Command;
