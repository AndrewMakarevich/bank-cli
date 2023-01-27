"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandOption {
    constructor(optionPattern, description) {
        const { availableNames, mainName } = this.parseOptionPattern(optionPattern);
        this.availableNames = availableNames;
        this.mainName = mainName;
        this.description = description;
    }
    parseOptionPattern(optionPattern) {
        const options = optionPattern.split('|');
        const availableNames = [];
        let mainName = '';
        options.forEach((option) => {
            let parsedOption;
            if (/(?<=-|--)@?[a-zA-Z0-9]+/.test(option)) {
                parsedOption = option.replace(/-|--/g, '').trim();
                if (/^@/.test(parsedOption)) {
                    parsedOption = parsedOption.slice(1).trim();
                    mainName = parsedOption;
                }
                availableNames.push(parsedOption);
            }
        });
        if (!availableNames.length && !mainName) {
            throw Error(`Incorrect option patern recieved(${optionPattern})`);
        }
        if (!mainName)
            mainName = availableNames[0];
        return { availableNames, mainName };
    }
}
exports.default = CommandOption;
