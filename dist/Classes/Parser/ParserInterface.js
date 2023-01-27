"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParserInterface {
    constructor(parser) {
        this.parser = parser;
    }
    get existsCommands() {
        return this.parser.existCommands;
    }
    get observer() {
        return this.parser.observer;
    }
    addCommand(command) {
        return this.parser.addCommand(command);
    }
    parse() {
        return this.parser.parse();
    }
}
exports.default = ParserInterface;
