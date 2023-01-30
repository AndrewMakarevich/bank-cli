import {
  red,
  blue,
  yellow,
  redBright,
  greenBright,
  magenta,
  bold,
} from 'colorette';
import Command from '../Command/Command';
import CommandArgument from '../Command/CommandArgument/CommandArgument';
import CommandArgumentInterface from '../Command/CommandArgument/CommandArgumentInterface';
import CommandInterface from '../Command/CommandInterface';
import CommandOptionInterface from '../Command/CommandOption/CommandOptionInterface';
import ParserInterface from '../Parser/ParserInterface';
import { IProgram } from './interfaces/program.interface';

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
      .addArgument(
        new CommandArgumentInterface(new CommandArgument('commandHelpWith'))
      )
      .handle(this.onShowHelpTable.bind(this));
  }

  private onShowHelpTable(payload: any) {
    if (!this.parser) return;

    const { command, optionsObj, argumentsObj } = payload;
    const commandToHelpWith = argumentsObj.commandHelpWith;

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
    arguments: argumentsArr,
    options: optionsArr,
  }: CommandInterface) {
    // prettier-ignore
    const commandHeaderStr = `${blue("Command")} ${yellow(name)} ${argumentsArr.map((arg) => `<${greenBright(arg.name)}>`).join(" ")} ${description??''} \n\n`;

    const argumentsString = argumentsArr
      .map((arg) => this.getArgumentStr(arg))
      .join('');
    const commandArgumentsStr = argumentsString.trim()
      ? red('Arguments:\n') + argumentsString + '\n'
      : '';

    const optionsString = optionsArr
      .map((opt) => this.getOptionStr(opt))
      .join('');
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
