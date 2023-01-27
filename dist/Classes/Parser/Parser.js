"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parser {
    constructor(observer) {
        this._observer = observer;
        this._existCommands = new Map();
    }
    get existCommands() {
        return this._existCommands;
    }
    get observer() {
        return this._observer;
    }
    addCommand(command) {
        command.observer = this._observer;
        this._existCommands.set(command.name, command);
        return command;
    }
    parseAsOption(option, command) {
        const match = option.match(/(?<=(--|-))(?<optName>[a-zA-Z0-9]+)(=(?<optArg>[a-zA-Z0-9]+))?/);
        if (match?.groups) {
            let { optName: newOptionName, optArg: newOptionArgument } = match.groups;
            let optionExists = false;
            for (const opt of command.options ?? []) {
                const newOptionNameExists = opt.availableNames.includes(newOptionName);
                if (newOptionNameExists) {
                    optionExists = true;
                    newOptionName = opt.mainName;
                    break;
                }
            }
            return optionExists
                ? { [newOptionName]: newOptionArgument || true }
                : null;
        }
        return null;
    }
    parseAsArgument(arg, argumentsPattern) {
        if (/^[a-zA-Z0-9]+$/.test(arg)) {
            const argName = argumentsPattern.shift();
            if (argName)
                return { [argName]: arg };
            return null;
        }
        return null;
    }
    parseArgv() {
        const argv = process.argv.slice(2);
        let withoutCommand = false;
        let command = '';
        if (argv[0].startsWith('-') || argv[0].startsWith('--')) {
            withoutCommand = true;
        }
        else {
            command = argv[0];
        }
        const currCommandInstance = this.existCommands.get(command);
        if (!currCommandInstance)
            throw Error('Icorrect command');
        const currCommandArgumentsPattern = [
            ...currCommandInstance.arguments.map(({ name }) => name),
        ];
        const givenOpts = {};
        const givenArgs = {};
        argv.forEach((arg, index) => {
            if (index === 0 && !withoutCommand)
                return;
            const newOption = this.parseAsOption(arg, currCommandInstance);
            if (newOption) {
                const newOptionName = Object.keys(newOption)[0];
                if (!givenOpts[newOptionName])
                    return (givenOpts[newOptionName] = newOption[newOptionName]);
            }
            if (currCommandArgumentsPattern.length === 0)
                return;
            const newArgument = this.parseAsArgument(arg, currCommandArgumentsPattern);
            if (newArgument) {
                const newArgumentName = Object.keys(newArgument)[0];
                if (!givenArgs[newArgumentName]) {
                    givenArgs[newArgumentName] = newArgument[newArgumentName];
                }
            }
        });
        return { command, givenOpts, givenArgs };
    }
    parse() {
        const parseRes = this.parseArgv();
        const { command, givenArgs: args, givenOpts: opts } = parseRes;
        this._observer.notify(command, { command, args, opts });
        return parseRes;
    }
}
exports.default = Parser;
