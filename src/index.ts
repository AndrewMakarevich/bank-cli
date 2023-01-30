#!/usr/bin/env node
import Observer from './Classes/Observer/Observer';
import ObserverInterface from './Classes/Observer/ObserverInterface';
import CommandArgument from './Classes/Parser/Argument/CommandArgument';
import Command from './Classes/Parser/Command/Command';
import CommandOption from './Classes/Parser/Option/CommandOption/CommandOption';
import Parser from './Classes/Parser/Parser';
import ParserInterface from './Classes/Parser/ParserInterface';
import Program from './Classes/Program/Program';
import ProgramInterface from './Classes/Program/ProgramInterface';
import { INextFC } from './Classes/ProgramRouter/interfaces/programRouter.interface';
import ProgramRouter from './Classes/ProgramRouter/ProgramRouter';
import ProgramRouterRoot from './Classes/ProgramRouter/ProgramRouterRoot';

const mainParserObserver = new ObserverInterface(new Observer());
const mainParser = new ParserInterface(new Parser(mainParserObserver));

const program = new ProgramInterface(
  new Program('Bank-cli', 'CLI Application for bank management', mainParser)
);
program.addHelpTableCommand();

const getBankRouter = new ProgramRouter(
  'Banks',
  [
    (payload: any, next: INextFC) => {
      // 3.1
      console.log('get banks first middleware');
      next('err');
      console.log('after err');
    },
    (payload: any, next: INextFC) => {
      // 3.2
      console.log('get banks second middleware');
      next();
    },
    (err: any, payload: any, next: INextFC) => {
      // 3. 3
      console.log(`get banks local error middleware ${String(err)}`);
    },
  ],
  { description: 'Lists array of banks', opts: [], args: [] }
);

const getCommentRouter = new ProgramRouter(
  'Comments',
  [
    (payload: any, next: INextFC) => {
      // 2.1
      console.log('get commments first middleware');
      next('err');
      console.log('after err');
    },
    (payload: any, next: INextFC) => {
      // 2.2
      console.log('get comments second middleware');
      next();
    },
    (err: any, payload: any, next: INextFC) => {
      // 2.3
      console.log(`get comments local error middleware ${String(err)}`);
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
      // 1
      console.log(`get error ${String(err)}`);
      next(err);
    },
    function one(payload: any, next: INextFC) {
      // 2
      console.log('first get middleware');
      next();
    },
    getCommentRouter,
    function two(payload: any, next: INextFC) {
      // 3
      console.log('second get middleware');
      next();
    },
    getBankRouter,
  ],
  {
    description: 'get something',
    opts: [{ name: '-d|--@do', description: 'do something' }],
    args: [{ name: 'text', description: 'text to search by' }],
  }
);

const routerRoot = new ProgramRouterRoot(program, '', [getRouter]);

mainParser.parse();
