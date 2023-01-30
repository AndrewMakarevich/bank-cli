import { ISubscriber } from './subscriber.interface';

export interface IObserver {
  subscriptions: Map<string, ISubscriber[]>;
  observe: (event: string, subscriber: ISubscriber) => void;
  unobserve: (event: string, subscriber: ISubscriber) => void;
  notify: (event: string, payload: any) => void;
}
