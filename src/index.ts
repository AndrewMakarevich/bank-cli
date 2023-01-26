#!/usr/bin/env node
// import { Command } from 'commander';

// const program = new Command('globalProgram');

import Command from './Classes/Commands/Command';
import CommandOption from './Classes/Options/CommandOption';
import Parser from './Classes/Parsers/Parser';

// program
//   .name('Bank-CLI')
//   .description('CLI to manage banks and their customers')
//   .version('1.0.0');

// program
//   .command('split')
//   .description('Split a string into substrings and display as an array')
//   .argument('<string>', 'string to split')
//   .option('--first', 'display just the first substring')
//   .option('-s, --separator <char>', 'separator character', ',')
//   .action((str, options: { first: boolean; separator: string }) => {
//     const limit = options.first ? 1 : undefined;
//     console.log(options.separator);
//     console.log(str.split(options.separator, limit));
//   });

// program
//   .command('get-users')
//   .description('Lists all dbUsers')
//   .argument('<age>', 'age of the user')
//   .option('-u, --username <username>', 'Specify users username to find')
//   .action((age, options) => {
//     console.log(age, options);
//   });

// program.parse();

const parser = new Parser();

parser
  .createCommand('split', 'Allows to split')
  .addOption(
    new CommandOption(
      '-f | --@first',
      'If therre are should be shown only first splitted chunk'
    )
  );

console.log(parser.parse());
