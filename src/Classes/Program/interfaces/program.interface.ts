import { IParser } from '../../Parser/interfaces/parser.interface';
import ParserInterface from '../../Parser/ParserInterface';

export interface IProgram {
  name?: string;
  description?: string;
  parser?: ParserInterface | null;
}
