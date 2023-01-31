import { ISubscriber } from '../interfaces/subscriber.interface';

class SubscriberInterface {
  subscriber: ISubscriber;

  constructor(subscriber: ISubscriber) {
    this.subscriber = subscriber;
  }

  notify(payload: any) {
    this.subscriber.notify(payload);
  }
}

export default SubscriberInterface;
