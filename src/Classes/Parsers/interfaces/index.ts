import type CommandOption from '../../Options/CommandOption';

export interface ICommand {
  name: string;
  description?: string;
  opts?: ICommandOption[];
}

export interface ICommandOption {
  availableNames: string[];
  mainName: string;
  description?: string;

  parseOptionPattern: (optionPattern: string) => {
    availableNames: string[];
    mainName: string;
  };
}

export interface IOption {
  name: string;
  argument: string | boolean;
}

export interface IArgument {
  name: string;
  value: string;
}

export interface IParseArgsRes {
  command: string;
  givenOpts: IOption[];
  givenArgs: IArgument[];
}
