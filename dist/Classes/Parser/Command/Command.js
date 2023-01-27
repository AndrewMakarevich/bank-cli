"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Subscriber_1 = __importDefault(require("../../Observer/Subscriber/Subscriber"));
class Command {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.opts = [];
        this.args = [];
        this._observer = null;
    }
    get options() {
        return this.opts;
    }
    get arguments() {
        return this.args;
    }
    get observer() {
        return this._observer;
    }
    /** Sets automatically, when command added through the parser */
    set observer(observer) {
        this._observer = observer;
    }
    addOption(commandOption) {
        this.opts.push(commandOption);
        return this;
    }
    addArgument(commandArgument) {
        this.args.push(commandArgument);
        return this;
    }
    handle(callback) {
        if (this._observer)
            this._observer.observe(this.name, new Subscriber_1.default(callback));
    }
}
exports.default = Command;
