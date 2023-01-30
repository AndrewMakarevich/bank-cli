import { ICommandOption } from '../interfaces/commandOption.interface';

class CommandOptionInterface {
  option: ICommandOption;

  constructor(commandOption: ICommandOption) {
    this.option = commandOption;
  }

  get availableNames() {
    return this.option.availableNames;
  }

  get mainName() {
    return this.option.mainName;
  }

  get description() {
    return this.option.description;
  }

  parseOptionPattern(optionPattern: string) {
    return this.option.parseOptionPattern(optionPattern);
  }
}

export default CommandOptionInterface;
