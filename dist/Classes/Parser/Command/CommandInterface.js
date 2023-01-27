"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandInterface {
    constructor(command) {
        this.command = command;
    }
    get options() {
        return this.command.options;
    }
    get arguments() {
        return this.command.arguments;
    }
    addOption(commandOption) {
        return this.command.addOption(commandOption);
    }
    addArgument(commandArgument) {
        return this.command.addArgument(commandArgument);
    }
}
exports.default = CommandInterface;
