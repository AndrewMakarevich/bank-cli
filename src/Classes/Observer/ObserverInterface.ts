import { IObserver } from './interfaces/observer.interface';
import { ISubscriber } from './interfaces/subscriber.interface';

class ObserverInterface {
  observer: IObserver;

  constructor(observer: IObserver) {
    this.observer = observer;
  }

  get subscriptions() {
    return this.observer.subscriptions;
  }

  notify(event: string, payload: any) {
    this.observer.notify(event, payload);
  }

  observe(event: string, subscriber: ISubscriber) {
    this.observer.observe(event, subscriber);
  }

  unobserve(event: string, subscriber: ISubscriber) {
    this.observer.unobserve(event, subscriber);
  }
}

export default ObserverInterface;
