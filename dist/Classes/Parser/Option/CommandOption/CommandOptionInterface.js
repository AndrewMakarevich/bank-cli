"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandOptionInterface {
    constructor(commandOption) {
        this.commandOption = commandOption;
    }
    parseOptionPattern(optionPattern) {
        this.commandOption.parseOptionPattern(optionPattern);
    }
}
exports.default = CommandOptionInterface;
