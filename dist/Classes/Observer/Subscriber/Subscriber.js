"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Subscriber {
    constructor(callback) {
        this.callback = callback;
    }
    notify(payload) {
        this.callback(payload);
    }
}
exports.default = Subscriber;
