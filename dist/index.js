#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const program = new commander_1.Command('globalProgram');
program
    .command('getUsers')
    .description('Lists all dbUsers')
    .option('-u --username', 'Specify users username to find')
    .action((str, options) => {
    console.log(str);
})
    .parse();
const a = 5;
console.log('a');
