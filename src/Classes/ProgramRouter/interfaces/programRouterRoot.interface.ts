import { IProgram } from '../../Program/interfaces/program.interface';
import {
  IProgramRouterMiddlewares,
  IProgramRouter,
} from './programRouter.interface';

export interface IProgramRouterRoot extends IProgramRouter {
  program: IProgram;
}
