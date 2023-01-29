#!/usr/bin/env node
import Observer from './Classes/Observer/Observer';
import CommandArgument from './Classes/Parser/Argument/CommandArgument';
import Command from './Classes/Parser/Command/Command';
import CommandOption from './Classes/Parser/Option/CommandOption/CommandOption';
import Parser from './Classes/Parser/Parser';
import ParserInterface from './Classes/Parser/ParserInterface';
import Program from './Classes/Program/Program';
import { INextFC } from './Classes/ProgramRouter/interfaces/programRouter.interface';
import ProgramRouter from './Classes/ProgramRouter/ProgramRouter';
import ProgramRouterRoot from './Classes/ProgramRouter/ProgramRouterRoot';

const parser = new ParserInterface(new Parser(new Observer()));

const program = new Program(
  'Bank-cli',
  'CLI Application for bank management',
  parser
);
program.addHelpTableCommand();

const getCommentRouter = new ProgramRouter(
  'Comments',
  [
    (payload: any, next: INextFC) => {
      console.log('get comm 1');
      next('err');
      console.log('after err');
    },
    (payload: any, next: INextFC) => {
      console.log('get comm 2');
      next();
    },
    (err: any, payload: any, next: INextFC) => {
      console.log(`Local err ${String(err)}`);
    },
  ],
  {
    description: 'Lists array of comments',
    opts: [{ name: '-f|--@first', description: 'Only first comment' }],
    args: [{ name: 'text', description: 'text to search by' }],
  }
);

const getRouter = new ProgramRouter(
  'get',
  [
    function err(err: any, payload: any, next: INextFC) {
      console.log(`Error ${String(err)}`);
      next(err);
    },
    function one(payload: any, next: INextFC) {
      console.log(1);
      next();
    },
    getCommentRouter,
    function two(payload: any, next: INextFC) {
      console.log(2);
      next();
    },
  ],
  {
    description: 'do something',
    opts: [{ name: '-d|--@do', description: 'do something' }],
    args: [{ name: 'text', description: 'text to search by' }],
  }
);

const routerRoot = new ProgramRouterRoot(program, '', [getRouter]);

parser.parse();
