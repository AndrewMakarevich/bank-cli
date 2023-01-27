import { ISubscriber } from '../interfaces/subscriber.interface';

class Subscriber implements ISubscriber {
  private readonly callback: ISubscriber['notify'];

  constructor(callback: ISubscriber['notify']) {
    this.callback = callback;
  }

  notify(payload: unknown) {
    this.callback(payload);
  }
}

export default Subscriber;
