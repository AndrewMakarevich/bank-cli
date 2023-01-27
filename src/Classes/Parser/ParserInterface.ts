import { ICommand } from './interfaces/command.interface';
import { IParser } from './interfaces/parser.interface';

class ParserInterface {
  parser: IParser;

  constructor(parser: IParser) {
    this.parser = parser;
  }

  get existsCommands() {
    return this.parser.existCommands;
  }

  get observer() {
    return this.parser.observer;
  }

  addCommand(command: ICommand) {
    return this.parser.addCommand(command);
  }

  parse() {
    return this.parser.parse();
  }
}

export default ParserInterface;
