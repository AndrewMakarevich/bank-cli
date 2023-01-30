#!/usr/bin/env node
import GetBanksClientsCommand from './Classes/Command/GetBanksClientsCommand';
import GetBanksCommand from './Classes/Command/GetBanksCommand';
import Observer from './Classes/Observer/Observer';
import Parser from './Classes/Parser/Parser';
import ParserInterface from './Classes/Parser/ParserInterface';
import Program from './Classes/Program/Program';

const parser = new ParserInterface(new Parser(new Observer()));

parser.addCommand(new GetBanksCommand('getBanks'));
parser.addCommand(new GetBanksClientsCommand('getBanksClients'));

const program = new Program(
  'Bank-cli',
  'CLI Application for bank management',
  parser
);
program.addHelpTableCommand();

const parseRes = parser.parse();
console.log(parseRes);
