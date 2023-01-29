import {
  ICommandParams,
  IProgramRouterMiddlewares,
} from './interfaces/programRouter.interface';

class ProgramRouter {
  commandPart: string;
  middlewares: IProgramRouterMiddlewares;
  commandParams?: ICommandParams;

  constructor(
    commandPart: string,
    middlewares: IProgramRouterMiddlewares,
    commandParams?: ICommandParams
  ) {
    this.commandPart = commandPart;
    this.middlewares = middlewares;
    this.commandParams = commandParams;
  }
}

export default ProgramRouter;
