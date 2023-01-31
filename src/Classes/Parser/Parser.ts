import { IObserver } from '../Observer/interfaces/observer.interface';
import CommandInterface from '../Command/CommandInterface';
import { ICommand } from '../Command/interfaces/command.interface';
import {
  IParsedOption,
  IParsedArgument,
  IParser,
  IParseCmdArgumentsResponse,
} from './interfaces/parser.interface';

class Parser implements IParser {
  private readonly _observer: IObserver;
  private readonly _existCommands: Map<string, ICommand>;

  constructor(observer: IObserver) {
    this._observer = observer;
    this._existCommands = new Map();
  }

  get existCommands() {
    return this._existCommands;
  }

  get observer() {
    return this._observer;
  }

  addCommand(command: ICommand): ICommand {
    const newCommand = new CommandInterface(command);

    if (this._existCommands.get(newCommand.name)) {
      throw Error(
        `Command with such name ${newCommand.name} is already exists`
      );
    }

    newCommand.observer = this._observer;
    this._existCommands.set(newCommand.name, command);

    return newCommand;
  }

  parseAsOption(option: string, command: ICommand): IParsedOption | null {
    const match = option.match(
      /(?<=(--|-))(?<optName>[a-zA-Z0-9]+)(=(?<optArg>[a-zA-Z0-9]+))?/
    );

    if (match?.groups) {
      let { optName: newOptionName, optArg: newOptionArgument } = match.groups;

      let optionExists = false;

      for (const opt of command.options ?? []) {
        const newOptionNameExists = opt.availableNames.includes(newOptionName);

        if (newOptionNameExists) {
          optionExists = true;
          newOptionName = opt.mainName;
          break;
        }
      }

      return optionExists
        ? { [newOptionName]: newOptionArgument || true }
        : null;
    }

    return null;
  }

  parseAsArgument(
    arg: string,
    argumentsPattern: string[]
  ): IParsedArgument | null {
    if (/^[a-zA-Z0-9]+$/.test(arg)) {
      const argName = argumentsPattern.shift();

      if (argName) return { [argName]: arg };

      return null;
    }

    return null;
  }

  // TODO: renname function and argv const
  parseArguments(): IParseCmdArgumentsResponse {
    const cmdArgumentsArr = process.argv.slice(2);
    let withoutCommand = false;
    let command = '';

    if (
      cmdArgumentsArr[0].startsWith('-') ||
      cmdArgumentsArr[0].startsWith('--')
    ) {
      withoutCommand = true;
    } else {
      command = cmdArgumentsArr[0];
    }

    const currCommandInstance = this.existCommands.get(command);

    if (!currCommandInstance) throw Error('Incorrect command');

    const currCommandArgumentsPattern = [
      ...currCommandInstance.arguments.map(({ name }) => name),
    ];

    const givenOptions: IParsedOption = {};
    const givenArguments: IParsedArgument = {};

    cmdArgumentsArr.forEach((cmdArgument, index) => {
      if (index === 0 && !withoutCommand) return;

      const newOption = this.parseAsOption(cmdArgument, currCommandInstance);

      if (newOption) {
        const newOptionName = Object.keys(newOption)[0]; // parseAsOption method always return object with one key or null

        if (!givenOptions[newOptionName])
          return (givenOptions[newOptionName] = newOption[newOptionName]);
      }

      if (currCommandArgumentsPattern.length === 0) return;

      const newArgument = this.parseAsArgument(
        cmdArgument,
        currCommandArgumentsPattern
      );

      if (newArgument) {
        const newArgumentName = Object.keys(newArgument)[0];

        if (!givenArguments[newArgumentName]) {
          givenArguments[newArgumentName] = newArgument[newArgumentName];
        }
      }
    });

    return { command, givenOptions, givenArguments };
  }

  parse() {
    const parseRes = this.parseArguments();
    const { command, givenArguments, givenOptions } = parseRes;

    this._observer.notify(command, { command, givenArguments, givenOptions });

    return parseRes;
  }
}

export default Parser;
