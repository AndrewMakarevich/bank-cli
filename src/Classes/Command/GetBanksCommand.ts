import Command from './Command';
import CommandArgument from './CommandArgument/CommandArgument';
import CommandArgumentInterface from './CommandArgument/CommandArgumentInterface';
import CommandOption from './CommandOption/CommandOption';
import CommandOptionInterface from './CommandOption/CommandOptionInterface';

class GetBanksCommand extends Command {
  constructor(name: string) {
    super(name, 'Lists matched banks');

    this.addDefaultOptions();
    this.addDefaultArguments();
    this.addDefaultHandler();
  }

  private addDefaultOptions() {
    const option = (optionPattern: string, description?: string) => {
      return new CommandOptionInterface(
        new CommandOption(optionPattern, description)
      );
    };

    this.addOption(option('-n|--@name', 'Specify name of the banks')).addOption(
      option('-i|-@id|--identifier', 'Specify id of the bank')
    );
  }

  private addDefaultArguments() {
    const argument = (name: string, description?: string) => {
      return new CommandArgumentInterface(
        new CommandArgument(name, description)
      );
    };

    this.addArgument(
      argument('queryString', 'Specify common query string for banks query')
    );
  }

  private addDefaultHandler() {
    this.handle(({ command, optionsObj, argumentsObj }) => {
      console.log(
        'Get banks command executed with :',
        optionsObj,
        argumentsObj
      );
    });
  }
}

export default GetBanksCommand;
