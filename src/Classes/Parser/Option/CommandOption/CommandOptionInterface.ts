import { ICommandOption } from '../../interfaces/commandOption.interface';

class CommandOptionInterface {
  commandOption: ICommandOption;

  constructor(commandOption: ICommandOption) {
    this.commandOption = commandOption;
  }

  parseOptionPattern(optionPattern: string) {
    this.commandOption.parseOptionPattern(optionPattern);
  }
}

export default CommandOptionInterface;
