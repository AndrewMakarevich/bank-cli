#!/usr/bin/env node
import Observer from './Classes/Observer/Observer';
import CommandArgument from './Classes/Parser/Argument/CommandArgument';
import Command from './Classes/Parser/Command/Command';
import CommandOption from './Classes/Parser/Option/CommandOption/CommandOption';
import Parser from './Classes/Parser/Parser';
import ParserInterface from './Classes/Parser/ParserInterface';

const parser = new ParserInterface(new Parser(new Observer()));

parser
  .addCommand(new Command('split', 'Split given string'))
  .addOption(
    new CommandOption(
      '-f | --@first',
      'If therre are should be shown only first splitted chunk'
    )
  )
  .addOption(new CommandOption('-s|--@silly'))
  .addArgument(new CommandArgument('string', 'String to split'))
  .addArgument(new CommandArgument('oneMore', 'One more string'))
  .handle((payload) => {
    const { command, opts, args } = payload;
    console.log('handle command execution', command, opts, args);
  });

parser
  .addCommand(new Command('my'))
  .addOption(new CommandOption('-l|--@large'))
  .addArgument(new CommandArgument('amount'))
  .handle((payload) => {
    const { command, opts, args } = payload;
    console.log('handle my command execution', command, opts, args);
  });

const parseRes = parser.parse();
