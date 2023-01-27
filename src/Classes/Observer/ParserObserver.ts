import {
  IParsedArgument,
  IParsedOption,
} from '../Parser/interfaces/parser.interface';
import Observer from './Observer';

class ParserObserver extends Observer {
  notify(
    event: string,
    payload: {
      command: string;
      opts: IParsedOption[];
      args: IParsedArgument[];
    }
  ) {
    this.subscriptions.get(event)?.forEach((subscriber) => {
      subscriber.notify(payload);
    });
  }
}

export default ParserObserver;
