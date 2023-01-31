import {
  red,
  redBright,
  blue,
  yellow,
  greenBright,
  magenta,
  bold,
} from 'colorette';

import CommandArgument from '../Command/CommandArgument/CommandArgument';
import Command from '../Command/Command';
import { ICommand } from '../Command/interfaces/command.interface';
import ParserInterface from '../Parser/ParserInterface';
import { IProgram } from './interfaces/program.interface';
import CommandOptionInterface from '../Command/CommandOption/CommandOptionInterface';
import CommandArgumentInterface from '../Command/CommandArgument/CommandArgumentInterface';
import { IParseCmdArgumentsResponse } from '../Parser/interfaces/parser.interface';

class Program implements IProgram {
  name?: string;
  description?: string;
  parser?: ParserInterface | null;

  constructor(name = '', description = '', parser?: ParserInterface) {
    this.name = name;
    this.description = description;
    this.parser = parser ?? null;
  }

  addHelpTableCommand() {
    if (!this.parser) return;

    this.parser
      .addCommand(new Command('help', 'Shows help table'))
      .addArgument(new CommandArgument('commandHelpWith'))
      .handle(this.onShowHelpTable.bind(this));
  }

  onShowHelpTable(payload: IParseCmdArgumentsResponse) {
    if (!this.parser) return;

    const { givenArguments } = payload;
    const commandToHelpWith = givenArguments.commandHelpWith;

    if (commandToHelpWith) {
      const command = this.parser.existCommands.get(commandToHelpWith);

      if (!command) {
        console.log(
          redBright(`Such command(${String(commandToHelpWith)}) doesn't exists`)
        );

        return;
      }

      const commandHelpStr = this.getCommandHelpString(command);

      console.log(commandHelpStr);
      return;
    }

    const applicationHeaderStr = `Help node fore the ${this.getProgramHeaderStr()}`;

    const commandsNames: string[] = Array.from(
      this.parser.existCommands.keys()
    );

    const commandsStrs = commandsNames
      .map((commandName) => {
        const command = this.parser?.existCommands.get(commandName);

        if (!command) return '';

        return this.getCommandHelpString(command);
      })
      .join('---------------------------------------------------\n');

    console.log(`${redBright(applicationHeaderStr)}\n\n${commandsStrs}`);
  }

  private getProgramHeaderStr() {
    // prettier-ignore
    return `${String(this.name)} Application\nDescription:${String(this.description)}`;
  }

  private getCommandHelpString({
    name,
    description,
    arguments: args,
    options: opts,
  }: ICommand) {
    // prettier-ignore
    const commandHeaderStr = `${blue("Command")} ${yellow(name)} ${args.map((arg) => `<${greenBright(arg.name)}>`).join(" ")} ${description??''} \n\n`;

    const argumentsString = args
      .map((arg) => this.getArgumentStr(arg))
      .join('');
    const commandArgumentsStr = argumentsString.trim()
      ? red('Arguments:\n') + argumentsString + '\n'
      : '';

    const optionsString = opts.map((opt) => this.getOptionStr(opt)).join('');
    const commandOptsStr = optionsString
      ? magenta('Options(starts with - or --):\n') + optionsString
      : '';

    return commandHeaderStr + commandArgumentsStr + commandOptsStr;
  }

  private getOptionStr(option: CommandOptionInterface) {
    return (
      '  ' +
      bold(option.availableNames.join('|')) +
      '  ' +
      (option.description ?? '') +
      '\n'
    );
  }

  private getArgumentStr(argument: CommandArgumentInterface) {
    // prettier-ignore
    return `  ${argument.description ? `<${greenBright(argument.name)}>  ${argument.description}` : ''}\n`;
  }
}

export default Program;
