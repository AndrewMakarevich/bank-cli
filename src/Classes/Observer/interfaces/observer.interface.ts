import { ISubscriber } from './subscriber.interface';

export interface IObserver {
  observe: (event: string, subscriber: ISubscriber) => void;
  unobserver: (event: string, subscriber: ISubscriber) => void;
  notify: (event: string, payload: any) => void;
}
