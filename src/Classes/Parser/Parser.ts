import CommandInterface from '../Command/CommandInterface';
import { ICommand } from '../Command/interfaces/command.interface';
import { IObserver } from '../Observer/interfaces/observer.interface';
import {
  IParsedOption,
  IParsedArgument,
  IParser,
  IParseArgumentsResult,
} from './interfaces/parser.interface';

class Parser implements IParser {
  private readonly _observer: IObserver;
  private readonly _existCommands: Map<string, CommandInterface>;

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

  addCommand(command: ICommand): CommandInterface {
    const newCommand = new CommandInterface(command);

    newCommand.observer = this._observer;
    this._existCommands.set(newCommand.name, newCommand);

    return newCommand;
  }

  private parseAsOption(
    option: string,
    command: CommandInterface
  ): IParsedOption | null {
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

  private parseAsArgument(
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

  private parseArguments(): IParseArgumentsResult {
    const recievedArguments = process.argv.slice(2);
    let withoutCommand = false;
    let command = '';

    if (
      recievedArguments[0].startsWith('-') ||
      recievedArguments[0].startsWith('--')
    ) {
      withoutCommand = true;
    } else {
      command = recievedArguments[0];
    }

    const currCommandInstance = this.existCommands.get(command);

    if (!currCommandInstance) throw Error('Icorrect command');

    const currCommandArgumentsPattern = [
      ...currCommandInstance.arguments.map(({ name }) => name),
    ];

    const givenOptions: IParsedOption = {};
    const givenArguments: IParsedArgument = {};

    recievedArguments.forEach((arg, index) => {
      if (index === 0 && !withoutCommand) return;

      const newOption = this.parseAsOption(arg, currCommandInstance);

      if (newOption) {
        const newOptionName = Object.keys(newOption)[0];

        if (!givenOptions[newOptionName])
          return (givenOptions[newOptionName] = newOption[newOptionName]);
      }

      if (currCommandArgumentsPattern.length === 0) return;

      const newArgument = this.parseAsArgument(
        arg,
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
    const parseResult = this.parseArguments();
    const {
      command,
      givenArguments: argumentsObj,
      givenOptions: optionsObj,
    } = parseResult;

    this._observer.notify(command, { command, argumentsObj, optionsObj });

    return parseResult;
  }
}

export default Parser;
