import { IProgram } from './interfaces/program.interface';

class ProgramInterface {
  program: IProgram;

  constructor(program: IProgram) {
    this.program = program;
  }

  get name() {
    return this.program.name;
  }

  get description() {
    return this.program.description;
  }

  get parser() {
    return this.program.parser;
  }

  addHelpTableCommand() {
    this.program.addHelpTableCommand();
  }
}

export default ProgramInterface;
