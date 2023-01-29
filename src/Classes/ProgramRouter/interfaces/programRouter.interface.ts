export interface IProgramRouter {
  commandPart: string;
  middlewares: IProgramRouterMiddlewares;
  commandParams?: ICommandParams;
}

export interface ICommandParams {
  description?: string;
  opts: Array<{ name: string; description?: string }>;
  args: Array<{
    name: string;
    description?: string;
  }>;
}

export type IProgramRouterMiddlewares = Array<
  IDefaultMiddleware | IErrorMiddleware | IProgramRouter
>;

export type IErrorMiddleware = (err: any, payload: any, next: INextFC) => void;
export type IDefaultMiddleware = (payload: any, next: INextFC) => void;
export type INextFC = (err?: any) => void;
