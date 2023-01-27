export interface ISubscriber<T = any> {
  notify: (payload: T) => void;
}
