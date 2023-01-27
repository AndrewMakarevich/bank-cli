"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Observer_1 = __importDefault(require("./Observer"));
class ParserObserver extends Observer_1.default {
    notify(event, payload) {
        this.subscriptions.get(event)?.forEach((subscriber) => {
            subscriber.notify(payload);
        });
    }
}
exports.default = ParserObserver;
