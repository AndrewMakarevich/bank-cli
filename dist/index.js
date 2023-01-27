#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Observer_1 = __importDefault(require("./Classes/Observer/Observer"));
const CommandArgument_1 = __importDefault(require("./Classes/Parser/Argument/CommandArgument"));
const Command_1 = __importDefault(require("./Classes/Parser/Command/Command"));
const CommandOption_1 = __importDefault(require("./Classes/Parser/Option/CommandOption/CommandOption"));
const Parser_1 = __importDefault(require("./Classes/Parser/Parser"));
const ParserInterface_1 = __importDefault(require("./Classes/Parser/ParserInterface"));
const parser = new ParserInterface_1.default(new Parser_1.default(new Observer_1.default()));
parser
    .addCommand(new Command_1.default('split', 'Split given string'))
    .addOption(new CommandOption_1.default('-f | --@first', 'If therre are should be shown only first splitted chunk'))
    .addOption(new CommandOption_1.default('-s|--@silly'))
    .addArgument(new CommandArgument_1.default('string', 'String to split'))
    .addArgument(new CommandArgument_1.default('oneMore', 'One more string'))
    .handle((payload) => {
    const { command, opts, args } = payload;
    console.log('handle command execution', command, opts, args);
});
parser
    .addCommand(new Command_1.default('my'))
    .addOption(new CommandOption_1.default('-l|--@large'))
    .addArgument(new CommandArgument_1.default('amount'))
    .handle((payload) => {
    const { command, opts, args } = payload;
    console.log('handle my command execution', command, opts, args);
});
const parseRes = parser.parse();
