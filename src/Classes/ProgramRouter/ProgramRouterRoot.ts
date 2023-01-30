import CommandArgument from '../Parser/Argument/CommandArgument';
import Command from '../Parser/Command/Command';
import CommandOption from '../Parser/Option/CommandOption/CommandOption';
import { IProgram } from '../Program/interfaces/program.interface';
import {
  ICommandParams,
  IDefaultMiddleware,
  IErrorMiddleware,
  INextFC,
  IProgramRouter,
  IProgramRouterMiddlewares,
} from './interfaces/programRouter.interface';
import ProgramRouter from './ProgramRouter';

class ProgramRouterRoot implements IProgramRouter {
  program: IProgram;
  commandPart: string;
  middlewares: IProgramRouterMiddlewares;
  commandParams?: ICommandParams;

  constructor(
    program: IProgram,
    commandPart: string,
    middlewares: IProgramRouterMiddlewares,
    commandParams?: ICommandParams
  ) {
    this.program = program;
    this.commandPart = commandPart;
    this.middlewares = middlewares;
    this.commandParams = commandParams;

    this.formCommands();
  }

  private isDefaultMiddleware(
    middleware: any
  ): middleware is IDefaultMiddleware {
    return typeof middleware === 'function' && middleware.length === 2;
  }

  private isErrorMiddleware(middleware: any): middleware is IErrorMiddleware {
    return typeof middleware === 'function' && middleware.length === 3;
  }

  private divideMiddlewares(
    middlewares: Array<IDefaultMiddleware | IErrorMiddleware>
  ) {
    const defaultMiddlewares: IDefaultMiddleware[] = [];
    const errorMiddlewares: IErrorMiddleware[] = [];

    middlewares.forEach((middleware) => {
      if (this.isDefaultMiddleware(middleware)) {
        defaultMiddlewares.push(middleware);
      }

      if (this.isErrorMiddleware(middleware)) {
        errorMiddlewares.push(middleware);
      }
    });

    return { defaultMiddlewares, errorMiddlewares };
  }

  private getNextFunction(
    payload: any,
    middlewares: Array<IDefaultMiddleware | IErrorMiddleware>
  ) {
    const { defaultMiddlewares, errorMiddlewares } =
      this.divideMiddlewares(middlewares);

    let currDefaultMiddlewareIndex = 0;
    let currErrMiddlewareIndex = 0;

    const next: INextFC = (err) => {
      if (err) {
        const middleware = errorMiddlewares[currErrMiddlewareIndex++];
        if (middleware) middleware(err, payload, next);
      } else {
        const middleware = defaultMiddlewares[currDefaultMiddlewareIndex++];
        if (middleware) middleware(payload, next);
      }
    };

    return next;
  }

  private addCommandByParams(
    commandName: string,
    params: ICommandParams,
    middlewares: Array<IDefaultMiddleware | IErrorMiddleware>
  ) {
    if (!this.program.parser) return;

    const newCommand = new Command(commandName, params.description);
    this.program.parser.addCommand(newCommand);

    params.opts.forEach(({ name, description }) => {
      newCommand.addOption(new CommandOption(name, description));
    });

    params.args.forEach(({ name, description }) => {
      newCommand.addArgument(new CommandArgument(name, description));
    });

    newCommand.handle((payload) => {
      this.getNextFunction(payload, middlewares)();
    });
  }

  formCommands(
    currCommandName = '',
    currentRouter: IProgramRouter = this,
    globalMiddlewares: Array<IDefaultMiddleware | IErrorMiddleware> = []
  ) {
    const localMiddlewares: Array<IDefaultMiddleware | IErrorMiddleware> = [
      ...globalMiddlewares,
    ];

    currentRouter.middlewares.forEach((middleware) => {
      if (middleware instanceof ProgramRouter) {
        const newCommandName = currCommandName + middleware.commandPart;
        this.formCommands(newCommandName, middleware, [...localMiddlewares]);
      } else if (typeof middleware === 'function') {
        localMiddlewares.push(middleware);
      }
    });

    if (currentRouter.commandParams) {
      this.addCommandByParams(currCommandName, currentRouter.commandParams, [
        ...localMiddlewares,
      ]);
    }
  }
}

export default ProgramRouterRoot;
