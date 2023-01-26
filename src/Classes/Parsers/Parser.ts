import Command from '../Commands/Command';
import { IArgument, IOption, IParseArgsRes, type ICommand } from './interfaces';

class Parser {
  private readonly processArgs: string[];
  private readonly existCommands: Map<string, ICommand>;

  constructor() {
    this.processArgs = process.argv.slice(2);
    this.existCommands = new Map();
  }

  createCommand(name: string, description: string): Command {
    const newCommand = new Command(name, description);

    this.existCommands.set(name, newCommand);

    return newCommand;
  }

  private parseAsOption(option: string): IOption | null {
    const match = option.match(
      /(?<=(--|-))(?<optName>[a-zA-Z0-9]+)(=(?<optArg>[a-zA-Z0-9]+))?/
    );

    if (match?.groups) {
      const { optName, optArg } = match.groups;

      return { name: optName, argument: optArg || true };
    }

    return null;
  }

  private parseAsArgument(
    arg: string,
    settledArgsPattern: string[]
  ): IArgument | null {
    if (/^[a-zA-Z0-9]+$/.test(arg)) {
      const argPattern = settledArgsPattern.shift();

      if (argPattern) return { name: argPattern, value: arg };

      return null;
    }

    return null;
  }

  parseArgv(): IParseArgsRes {
    const argv = process.argv.slice(2);
    let withoutCommand = false;
    let command = '';

    if (argv[0].startsWith('-') || argv[0].startsWith('--')) {
      withoutCommand = true;
    } else {
      command = argv[0];
    }

    const currCommandInstance = this.existCommands.get(command);

    if (!currCommandInstance) throw Error('Icorrect command');

    const givenOpts: IOption[] = [];
    const givenArgs: IArgument[] = [];

    argv.forEach((arg, index) => {
      if (index === 0 && !withoutCommand) return;

      const newOption = this.parseAsOption(arg);
      if (newOption) {
        let optionExists = false;

        for (const opt of currCommandInstance.opts ?? []) {
          const mainOptName = opt.availableNames.find(
            (name) => name === newOption.name
          );

          if (mainOptName) {
            optionExists = true;
            newOption.name = opt.mainName;
            break;
          }
        }

        if (!optionExists) return;

        return givenOpts.push(newOption);
      }

      const newArgument = this.parseAsArgument(arg, []);
      if (newArgument) givenArgs.push(newArgument);
    });

    return { command, givenOpts, givenArgs };
  }

  parse() {
    return this.parseArgv();
  }
}

export default Parser;
