import { IObserver } from './interfaces/observer.interface';
import { ISubscriber } from './interfaces/subscriber.interface';

class Observer implements IObserver {
  private readonly _subscriptions: Map<string, ISubscriber[]>;

  constructor() {
    this._subscriptions = new Map();
  }

  get subscriptions() {
    return this._subscriptions;
  }

  observe(event: string, subscriber: ISubscriber) {
    let subscriptionEvent = this._subscriptions.get(event);

    if (!subscriptionEvent) {
      this._subscriptions.set(event, []);
      subscriptionEvent = this._subscriptions.get(event);
    }

    subscriptionEvent?.push(subscriber);
  }

  unobserver(event: string, subscriberToDelete: ISubscriber) {
    const subscriptionEvent = this._subscriptions.get(event);

    subscriptionEvent?.filter(
      (subscriber) => subscriber !== subscriberToDelete
    );
  }

  notify(event: string, payload: any) {
    this._subscriptions.get(event)?.forEach((subscriber) => {
      subscriber.notify(payload);
    });
  }
}

export default Observer;
