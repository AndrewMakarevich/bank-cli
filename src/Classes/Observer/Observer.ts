import { IObserver } from './interfaces/observer.interface';
import { ISubscriber } from './interfaces/subscriber.interface';
import SubscriberInterface from './Subscriber/SubscriberInterface';

class Observer implements IObserver {
  private readonly _subscriptions: Map<string, SubscriberInterface[]>;

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

    const newSubscriber = new SubscriberInterface(subscriber);
    subscriptionEvent?.push(newSubscriber);
  }

  unobserve(event: string, subscriberToDelete: ISubscriber) {
    const subscriptionEvent = this._subscriptions.get(event);

    subscriptionEvent?.filter(
      (subscriberInterface) =>
        subscriberInterface.subscriber !== subscriberToDelete
    );
  }

  notify(event: string, payload: any) {
    this._subscriptions.get(event)?.forEach((subscriber) => {
      subscriber.notify(payload);
    });
  }
}

export default Observer;
