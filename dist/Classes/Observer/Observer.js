"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Observer {
    constructor() {
        this._subscriptions = new Map();
    }
    get subscriptions() {
        return this._subscriptions;
    }
    observe(event, subscriber) {
        let subscriptionEvent = this._subscriptions.get(event);
        if (!subscriptionEvent) {
            this._subscriptions.set(event, []);
            subscriptionEvent = this._subscriptions.get(event);
        }
        subscriptionEvent?.push(subscriber);
    }
    unobserver(event, subscriberToDelete) {
        const subscriptionEvent = this._subscriptions.get(event);
        subscriptionEvent?.filter((subscriber) => subscriber !== subscriberToDelete);
    }
    notify(event, payload) {
        this._subscriptions.get(event)?.forEach((subscriber) => {
            subscriber.notify(payload);
        });
    }
}
exports.default = Observer;
