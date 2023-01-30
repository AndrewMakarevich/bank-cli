/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Classes/Command/Command.ts":
/*!****************************************!*\
  !*** ./src/Classes/Command/Command.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Observer_Subscriber_Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observer/Subscriber/Subscriber */ \"./src/Classes/Observer/Subscriber/Subscriber.ts\");\n/* harmony import */ var _CommandArgument_CommandArgumentInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommandArgument/CommandArgumentInterface */ \"./src/Classes/Command/CommandArgument/CommandArgumentInterface.ts\");\n/* harmony import */ var _CommandOption_CommandOptionInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommandOption/CommandOptionInterface */ \"./src/Classes/Command/CommandOption/CommandOptionInterface.ts\");\n\r\n\r\n\r\nvar Command = /** @class */ (function () {\r\n    function Command(name, description, optionsArr, argumentsArr) {\r\n        if (optionsArr === void 0) { optionsArr = []; }\r\n        if (argumentsArr === void 0) { argumentsArr = []; }\r\n        this.name = name;\r\n        this.description = description;\r\n        this._options = optionsArr;\r\n        this._arguments = argumentsArr;\r\n        this._observer = null;\r\n    }\r\n    Object.defineProperty(Command.prototype, \"options\", {\r\n        get: function () {\r\n            return this._options;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Command.prototype, \"arguments\", {\r\n        get: function () {\r\n            return this._arguments;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Command.prototype, \"observer\", {\r\n        get: function () {\r\n            return this._observer;\r\n        },\r\n        /** Sets automatically, when command added through the parser */\r\n        set: function (observer) {\r\n            this._observer = observer;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Command.prototype.addOption = function (commandOption) {\r\n        var newOption = new _CommandOption_CommandOptionInterface__WEBPACK_IMPORTED_MODULE_2__[\"default\"](commandOption);\r\n        this._options.push(newOption);\r\n        return this;\r\n    };\r\n    Command.prototype.addArgument = function (commandArgument) {\r\n        var newArgument = new _CommandArgument_CommandArgumentInterface__WEBPACK_IMPORTED_MODULE_1__[\"default\"](commandArgument);\r\n        this._arguments.push(newArgument);\r\n        return this;\r\n    };\r\n    Command.prototype.handle = function (callback) {\r\n        if (this._observer)\r\n            this._observer.observe(this.name, new _Observer_Subscriber_Subscriber__WEBPACK_IMPORTED_MODULE_0__[\"default\"](callback));\r\n    };\r\n    return Command;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Command);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/Command/Command.ts?");

/***/ }),

/***/ "./src/Classes/Command/CommandArgument/CommandArgument.ts":
/*!****************************************************************!*\
  !*** ./src/Classes/Command/CommandArgument/CommandArgument.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar CommandArgument = /** @class */ (function () {\r\n    function CommandArgument(name, description) {\r\n        this.name = name;\r\n        this.description = description;\r\n    }\r\n    return CommandArgument;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommandArgument);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/Command/CommandArgument/CommandArgument.ts?");

/***/ }),

/***/ "./src/Classes/Command/CommandArgument/CommandArgumentInterface.ts":
/*!*************************************************************************!*\
  !*** ./src/Classes/Command/CommandArgument/CommandArgumentInterface.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar CommandArgumentInterface = /** @class */ (function () {\r\n    function CommandArgumentInterface(argument) {\r\n        this.argument = argument;\r\n    }\r\n    Object.defineProperty(CommandArgumentInterface.prototype, \"name\", {\r\n        get: function () {\r\n            return this.argument.name;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(CommandArgumentInterface.prototype, \"description\", {\r\n        get: function () {\r\n            return this.argument.description;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    return CommandArgumentInterface;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommandArgumentInterface);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/Command/CommandArgument/CommandArgumentInterface.ts?");

/***/ }),

/***/ "./src/Classes/Command/CommandInterface.ts":
/*!*************************************************!*\
  !*** ./src/Classes/Command/CommandInterface.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar CommandInterface = /** @class */ (function () {\r\n    function CommandInterface(command) {\r\n        this.command = command;\r\n    }\r\n    Object.defineProperty(CommandInterface.prototype, \"name\", {\r\n        get: function () {\r\n            return this.command.name;\r\n        },\r\n        set: function (name) {\r\n            this.command.name = name;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(CommandInterface.prototype, \"description\", {\r\n        get: function () {\r\n            return this.command.description;\r\n        },\r\n        set: function (description) {\r\n            this.command.description = description;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(CommandInterface.prototype, \"observer\", {\r\n        get: function () {\r\n            return this.command.observer;\r\n        },\r\n        set: function (observer) {\r\n            this.command.observer = observer;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(CommandInterface.prototype, \"options\", {\r\n        get: function () {\r\n            return this.command.options;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(CommandInterface.prototype, \"arguments\", {\r\n        get: function () {\r\n            return this.command.arguments;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    CommandInterface.prototype.addOption = function (commandOption) {\r\n        return this.command.addOption(commandOption);\r\n    };\r\n    CommandInterface.prototype.addArgument = function (commandArgument) {\r\n        return this.command.addArgument(commandArgument);\r\n    };\r\n    return CommandInterface;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommandInterface);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/Command/CommandInterface.ts?");

/***/ }),

/***/ "./src/Classes/Command/CommandOption/CommandOption.ts":
/*!************************************************************!*\
  !*** ./src/Classes/Command/CommandOption/CommandOption.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar CommandOption = /** @class */ (function () {\r\n    function CommandOption(optionPattern, description) {\r\n        var _a = this.parseOptionPattern(optionPattern), availableNames = _a.availableNames, mainName = _a.mainName;\r\n        this.availableNames = availableNames;\r\n        this.mainName = mainName;\r\n        this.description = description;\r\n    }\r\n    CommandOption.prototype.parseOptionPattern = function (optionPattern) {\r\n        var options = optionPattern.split('|');\r\n        var availableNames = [];\r\n        var mainName = '';\r\n        options.forEach(function (option) {\r\n            var parsedOption;\r\n            if (/(?<=-|--)@?[a-zA-Z0-9]+/.test(option)) {\r\n                parsedOption = option.replace(/-|--/g, '').trim();\r\n                if (/^@/.test(parsedOption)) {\r\n                    parsedOption = parsedOption.slice(1).trim();\r\n                    mainName = parsedOption;\r\n                }\r\n                availableNames.push(parsedOption);\r\n            }\r\n        });\r\n        if (!availableNames.length && !mainName) {\r\n            throw Error(\"Incorrect option patern recieved(\".concat(optionPattern, \")\"));\r\n        }\r\n        if (!mainName)\r\n            mainName = availableNames[0];\r\n        return { availableNames: availableNames, mainName: mainName };\r\n    };\r\n    return CommandOption;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommandOption);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/Command/CommandOption/CommandOption.ts?");

/***/ }),

/***/ "./src/Classes/Command/CommandOption/CommandOptionInterface.ts":
/*!*********************************************************************!*\
  !*** ./src/Classes/Command/CommandOption/CommandOptionInterface.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar CommandOptionInterface = /** @class */ (function () {\r\n    function CommandOptionInterface(commandOption) {\r\n        this.option = commandOption;\r\n    }\r\n    Object.defineProperty(CommandOptionInterface.prototype, \"availableNames\", {\r\n        get: function () {\r\n            return this.option.availableNames;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(CommandOptionInterface.prototype, \"mainName\", {\r\n        get: function () {\r\n            return this.option.mainName;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(CommandOptionInterface.prototype, \"description\", {\r\n        get: function () {\r\n            return this.option.description;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    CommandOptionInterface.prototype.parseOptionPattern = function (optionPattern) {\r\n        return this.option.parseOptionPattern(optionPattern);\r\n    };\r\n    return CommandOptionInterface;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommandOptionInterface);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/Command/CommandOption/CommandOptionInterface.ts?");

/***/ }),

/***/ "./src/Classes/Command/GetBanksClientsCommand.ts":
/*!*******************************************************!*\
  !*** ./src/Classes/Command/GetBanksClientsCommand.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Command */ \"./src/Classes/Command/Command.ts\");\n/* harmony import */ var _CommandArgument_CommandArgument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommandArgument/CommandArgument */ \"./src/Classes/Command/CommandArgument/CommandArgument.ts\");\n/* harmony import */ var _CommandArgument_CommandArgumentInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommandArgument/CommandArgumentInterface */ \"./src/Classes/Command/CommandArgument/CommandArgumentInterface.ts\");\n/* harmony import */ var _CommandOption_CommandOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommandOption/CommandOption */ \"./src/Classes/Command/CommandOption/CommandOption.ts\");\n/* harmony import */ var _CommandOption_CommandOptionInterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommandOption/CommandOptionInterface */ \"./src/Classes/Command/CommandOption/CommandOptionInterface.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\n\r\nvar GetBanksClientsCommand = /** @class */ (function (_super) {\r\n    __extends(GetBanksClientsCommand, _super);\r\n    function GetBanksClientsCommand(name) {\r\n        var _this = _super.call(this, name, 'Lists matched banks clients') || this;\r\n        _this.addDefaultOptions();\r\n        _this.addDefaultArguments();\r\n        _this.addDefaultHandler();\r\n        return _this;\r\n    }\r\n    GetBanksClientsCommand.prototype.addDefaultOptions = function () {\r\n        var option = function (optionPattern, description) {\r\n            return new _CommandOption_CommandOptionInterface__WEBPACK_IMPORTED_MODULE_4__[\"default\"](new _CommandOption_CommandOption__WEBPACK_IMPORTED_MODULE_3__[\"default\"](optionPattern, description));\r\n        };\r\n        this.addOption(option('-n|--@name', 'Specify name of the clients')).addOption(option('-bi|-@bankId', 'Specify id of the bank'));\r\n    };\r\n    GetBanksClientsCommand.prototype.addDefaultArguments = function () {\r\n        var argument = function (name, description) {\r\n            return new _CommandArgument_CommandArgumentInterface__WEBPACK_IMPORTED_MODULE_2__[\"default\"](new _CommandArgument_CommandArgument__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name, description));\r\n        };\r\n        this.addArgument(argument('queryString', 'Specify common query string for clients query'));\r\n    };\r\n    GetBanksClientsCommand.prototype.addDefaultHandler = function () {\r\n        this.handle(function (_a) {\r\n            var command = _a.command, optionsObj = _a.optionsObj, argumentsObj = _a.argumentsObj;\r\n            console.log('Get banks clients command executed with:', optionsObj, argumentsObj);\r\n        });\r\n    };\r\n    return GetBanksClientsCommand;\r\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetBanksClientsCommand);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/Command/GetBanksClientsCommand.ts?");

/***/ }),

/***/ "./src/Classes/Command/GetBanksCommand.ts":
/*!************************************************!*\
  !*** ./src/Classes/Command/GetBanksCommand.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Command */ \"./src/Classes/Command/Command.ts\");\n/* harmony import */ var _CommandArgument_CommandArgument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommandArgument/CommandArgument */ \"./src/Classes/Command/CommandArgument/CommandArgument.ts\");\n/* harmony import */ var _CommandArgument_CommandArgumentInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommandArgument/CommandArgumentInterface */ \"./src/Classes/Command/CommandArgument/CommandArgumentInterface.ts\");\n/* harmony import */ var _CommandOption_CommandOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CommandOption/CommandOption */ \"./src/Classes/Command/CommandOption/CommandOption.ts\");\n/* harmony import */ var _CommandOption_CommandOptionInterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommandOption/CommandOptionInterface */ \"./src/Classes/Command/CommandOption/CommandOptionInterface.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\n\r\n\r\n\r\nvar GetBanksCommand = /** @class */ (function (_super) {\r\n    __extends(GetBanksCommand, _super);\r\n    function GetBanksCommand(name) {\r\n        var _this = _super.call(this, name, 'Lists matched banks') || this;\r\n        _this.addDefaultOptions();\r\n        _this.addDefaultArguments();\r\n        _this.addDefaultHandler();\r\n        return _this;\r\n    }\r\n    GetBanksCommand.prototype.addDefaultOptions = function () {\r\n        var option = function (optionPattern, description) {\r\n            return new _CommandOption_CommandOptionInterface__WEBPACK_IMPORTED_MODULE_4__[\"default\"](new _CommandOption_CommandOption__WEBPACK_IMPORTED_MODULE_3__[\"default\"](optionPattern, description));\r\n        };\r\n        this.addOption(option('-n|--@name', 'Specify name of the banks')).addOption(option('-i|-@id|--identifier', 'Specify id of the bank'));\r\n    };\r\n    GetBanksCommand.prototype.addDefaultArguments = function () {\r\n        var argument = function (name, description) {\r\n            return new _CommandArgument_CommandArgumentInterface__WEBPACK_IMPORTED_MODULE_2__[\"default\"](new _CommandArgument_CommandArgument__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name, description));\r\n        };\r\n        this.addArgument(argument('queryString', 'Specify common query string for banks query'));\r\n    };\r\n    GetBanksCommand.prototype.addDefaultHandler = function () {\r\n        this.handle(function (_a) {\r\n            var command = _a.command, optionsObj = _a.optionsObj, argumentsObj = _a.argumentsObj;\r\n            console.log('Get banks command executed with :', optionsObj, argumentsObj);\r\n        });\r\n    };\r\n    return GetBanksCommand;\r\n}(_Command__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetBanksCommand);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/Command/GetBanksCommand.ts?");

/***/ }),

/***/ "./src/Classes/Observer/Observer.ts":
/*!******************************************!*\
  !*** ./src/Classes/Observer/Observer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Observer = /** @class */ (function () {\r\n    function Observer() {\r\n        this._subscriptions = new Map();\r\n    }\r\n    Object.defineProperty(Observer.prototype, \"subscriptions\", {\r\n        get: function () {\r\n            return this._subscriptions;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Observer.prototype.observe = function (event, subscriber) {\r\n        var subscriptionEvent = this._subscriptions.get(event);\r\n        if (!subscriptionEvent) {\r\n            this._subscriptions.set(event, []);\r\n            subscriptionEvent = this._subscriptions.get(event);\r\n        }\r\n        subscriptionEvent === null || subscriptionEvent === void 0 ? void 0 : subscriptionEvent.push(subscriber);\r\n    };\r\n    Observer.prototype.unobserver = function (event, subscriberToDelete) {\r\n        var subscriptionEvent = this._subscriptions.get(event);\r\n        subscriptionEvent === null || subscriptionEvent === void 0 ? void 0 : subscriptionEvent.filter(function (subscriber) { return subscriber !== subscriberToDelete; });\r\n    };\r\n    Observer.prototype.notify = function (event, payload) {\r\n        var _a;\r\n        (_a = this._subscriptions.get(event)) === null || _a === void 0 ? void 0 : _a.forEach(function (subscriber) {\r\n            subscriber.notify(payload);\r\n        });\r\n    };\r\n    return Observer;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Observer);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/Observer/Observer.ts?");

/***/ }),

/***/ "./src/Classes/Observer/Subscriber/Subscriber.ts":
/*!*******************************************************!*\
  !*** ./src/Classes/Observer/Subscriber/Subscriber.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Subscriber = /** @class */ (function () {\r\n    function Subscriber(callback) {\r\n        this.callback = callback;\r\n    }\r\n    Subscriber.prototype.notify = function (payload) {\r\n        this.callback(payload);\r\n    };\r\n    return Subscriber;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Subscriber);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/Observer/Subscriber/Subscriber.ts?");

/***/ }),

/***/ "./src/Classes/Parser/Parser.ts":
/*!**************************************!*\
  !*** ./src/Classes/Parser/Parser.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Command_CommandInterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Command/CommandInterface */ \"./src/Classes/Command/CommandInterface.ts\");\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\n\r\nvar Parser = /** @class */ (function () {\r\n    function Parser(observer) {\r\n        this._observer = observer;\r\n        this._existCommands = new Map();\r\n    }\r\n    Object.defineProperty(Parser.prototype, \"existCommands\", {\r\n        get: function () {\r\n            return this._existCommands;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Parser.prototype, \"observer\", {\r\n        get: function () {\r\n            return this._observer;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Parser.prototype.addCommand = function (command) {\r\n        var newCommand = new _Command_CommandInterface__WEBPACK_IMPORTED_MODULE_0__[\"default\"](command);\r\n        newCommand.observer = this._observer;\r\n        this._existCommands.set(newCommand.name, newCommand);\r\n        return newCommand;\r\n    };\r\n    Parser.prototype.parseAsOption = function (option, command) {\r\n        var _a;\r\n        var _b;\r\n        var match = option.match(/(?<=(--|-))(?<optName>[a-zA-Z0-9]+)(=(?<optArg>[a-zA-Z0-9]+))?/);\r\n        if (match === null || match === void 0 ? void 0 : match.groups) {\r\n            var _c = match.groups, newOptionName = _c.optName, newOptionArgument = _c.optArg;\r\n            var optionExists = false;\r\n            for (var _i = 0, _d = (_b = command.options) !== null && _b !== void 0 ? _b : []; _i < _d.length; _i++) {\r\n                var opt = _d[_i];\r\n                var newOptionNameExists = opt.availableNames.includes(newOptionName);\r\n                if (newOptionNameExists) {\r\n                    optionExists = true;\r\n                    newOptionName = opt.mainName;\r\n                    break;\r\n                }\r\n            }\r\n            return optionExists\r\n                ? (_a = {}, _a[newOptionName] = newOptionArgument || true, _a) : null;\r\n        }\r\n        return null;\r\n    };\r\n    Parser.prototype.parseAsArgument = function (arg, argumentsPattern) {\r\n        var _a;\r\n        if (/^[a-zA-Z0-9]+$/.test(arg)) {\r\n            var argName = argumentsPattern.shift();\r\n            if (argName)\r\n                return _a = {}, _a[argName] = arg, _a;\r\n            return null;\r\n        }\r\n        return null;\r\n    };\r\n    Parser.prototype.parseArguments = function () {\r\n        var _this = this;\r\n        var recievedArguments = process.argv.slice(2);\r\n        var withoutCommand = false;\r\n        var command = '';\r\n        if (recievedArguments[0].startsWith('-') ||\r\n            recievedArguments[0].startsWith('--')) {\r\n            withoutCommand = true;\r\n        }\r\n        else {\r\n            command = recievedArguments[0];\r\n        }\r\n        var currCommandInstance = this.existCommands.get(command);\r\n        if (!currCommandInstance)\r\n            throw Error('Icorrect command');\r\n        var currCommandArgumentsPattern = __spreadArray([], currCommandInstance.arguments.map(function (_a) {\r\n            var name = _a.name;\r\n            return name;\r\n        }), true);\r\n        var givenOptions = {};\r\n        var givenArguments = {};\r\n        recievedArguments.forEach(function (arg, index) {\r\n            if (index === 0 && !withoutCommand)\r\n                return;\r\n            var newOption = _this.parseAsOption(arg, currCommandInstance);\r\n            if (newOption) {\r\n                var newOptionName = Object.keys(newOption)[0];\r\n                if (!givenOptions[newOptionName])\r\n                    return (givenOptions[newOptionName] = newOption[newOptionName]);\r\n            }\r\n            if (currCommandArgumentsPattern.length === 0)\r\n                return;\r\n            var newArgument = _this.parseAsArgument(arg, currCommandArgumentsPattern);\r\n            if (newArgument) {\r\n                var newArgumentName = Object.keys(newArgument)[0];\r\n                if (!givenArguments[newArgumentName]) {\r\n                    givenArguments[newArgumentName] = newArgument[newArgumentName];\r\n                }\r\n            }\r\n        });\r\n        return { command: command, givenOptions: givenOptions, givenArguments: givenArguments };\r\n    };\r\n    Parser.prototype.parse = function () {\r\n        var parseResult = this.parseArguments();\r\n        var command = parseResult.command, argumentsObj = parseResult.givenArguments, optionsObj = parseResult.givenOptions;\r\n        this._observer.notify(command, { command: command, argumentsObj: argumentsObj, optionsObj: optionsObj });\r\n        return parseResult;\r\n    };\r\n    return Parser;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Parser);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/Parser/Parser.ts?");

/***/ }),

/***/ "./src/Classes/Parser/ParserInterface.ts":
/*!***********************************************!*\
  !*** ./src/Classes/Parser/ParserInterface.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ParserInterface = /** @class */ (function () {\r\n    function ParserInterface(parser) {\r\n        this.parser = parser;\r\n    }\r\n    Object.defineProperty(ParserInterface.prototype, \"existCommands\", {\r\n        get: function () {\r\n            return this.parser.existCommands;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(ParserInterface.prototype, \"observer\", {\r\n        get: function () {\r\n            return this.parser.observer;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    ParserInterface.prototype.addCommand = function (command) {\r\n        return this.parser.addCommand(command);\r\n    };\r\n    ParserInterface.prototype.parse = function () {\r\n        return this.parser.parse();\r\n    };\r\n    return ParserInterface;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParserInterface);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/Parser/ParserInterface.ts?");

/***/ }),

/***/ "./src/Classes/Program/Program.ts":
/*!****************************************!*\
  !*** ./src/Classes/Program/Program.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var colorette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! colorette */ \"./node_modules/colorette/index.js\");\n/* harmony import */ var _Command_Command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Command/Command */ \"./src/Classes/Command/Command.ts\");\n/* harmony import */ var _Command_CommandArgument_CommandArgument__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Command/CommandArgument/CommandArgument */ \"./src/Classes/Command/CommandArgument/CommandArgument.ts\");\n/* harmony import */ var _Command_CommandArgument_CommandArgumentInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Command/CommandArgument/CommandArgumentInterface */ \"./src/Classes/Command/CommandArgument/CommandArgumentInterface.ts\");\n\r\n\r\n\r\n\r\nvar Program = /** @class */ (function () {\r\n    function Program(name, description, parser) {\r\n        if (name === void 0) { name = ''; }\r\n        if (description === void 0) { description = ''; }\r\n        this.name = name;\r\n        this.description = description;\r\n        this.parser = parser !== null && parser !== void 0 ? parser : null;\r\n    }\r\n    Program.prototype.addHelpTableCommand = function () {\r\n        if (!this.parser)\r\n            return;\r\n        this.parser\r\n            .addCommand(new _Command_Command__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('help', 'Shows help table'))\r\n            .addArgument(new _Command_CommandArgument_CommandArgumentInterface__WEBPACK_IMPORTED_MODULE_3__[\"default\"](new _Command_CommandArgument_CommandArgument__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('commandHelpWith')))\r\n            .handle(this.onShowHelpTable.bind(this));\r\n    };\r\n    Program.prototype.onShowHelpTable = function (payload) {\r\n        var _this = this;\r\n        if (!this.parser)\r\n            return;\r\n        var command = payload.command, optionsObj = payload.optionsObj, argumentsObj = payload.argumentsObj;\r\n        var commandToHelpWith = argumentsObj.commandHelpWith;\r\n        if (commandToHelpWith) {\r\n            var command_1 = this.parser.existCommands.get(commandToHelpWith);\r\n            if (!command_1) {\r\n                console.log((0,colorette__WEBPACK_IMPORTED_MODULE_0__.redBright)(\"Such command(\".concat(String(commandToHelpWith), \") doesn't exists\")));\r\n                return;\r\n            }\r\n            var commandHelpStr = this.getCommandHelpString(command_1);\r\n            console.log(commandHelpStr);\r\n            return;\r\n        }\r\n        var applicationHeaderStr = \"Help node fore the \".concat(this.getProgramHeaderStr());\r\n        var commandsNames = Array.from(this.parser.existCommands.keys());\r\n        var commandsStrs = commandsNames\r\n            .map(function (commandName) {\r\n            var _a;\r\n            var command = (_a = _this.parser) === null || _a === void 0 ? void 0 : _a.existCommands.get(commandName);\r\n            if (!command)\r\n                return '';\r\n            return _this.getCommandHelpString(command);\r\n        })\r\n            .join('---------------------------------------------------\\n');\r\n        console.log(\"\".concat((0,colorette__WEBPACK_IMPORTED_MODULE_0__.redBright)(applicationHeaderStr), \"\\n\\n\").concat(commandsStrs));\r\n    };\r\n    Program.prototype.getProgramHeaderStr = function () {\r\n        // prettier-ignore\r\n        return \"\".concat(String(this.name), \" Application\\nDescription:\").concat(String(this.description));\r\n    };\r\n    Program.prototype.getCommandHelpString = function (_a) {\r\n        var _this = this;\r\n        var name = _a.name, description = _a.description, argumentsArr = _a.arguments, optionsArr = _a.options;\r\n        // prettier-ignore\r\n        var commandHeaderStr = \"\".concat((0,colorette__WEBPACK_IMPORTED_MODULE_0__.blue)(\"Command\"), \" \").concat((0,colorette__WEBPACK_IMPORTED_MODULE_0__.yellow)(name), \" \").concat(argumentsArr.map(function (arg) { return \"<\".concat((0,colorette__WEBPACK_IMPORTED_MODULE_0__.greenBright)(arg.name), \">\"); }).join(\" \"), \" \").concat(description !== null && description !== void 0 ? description : '', \" \\n\\n\");\r\n        var argumentsString = argumentsArr\r\n            .map(function (arg) { return _this.getArgumentStr(arg); })\r\n            .join('');\r\n        var commandArgumentsStr = argumentsString.trim()\r\n            ? (0,colorette__WEBPACK_IMPORTED_MODULE_0__.red)('Arguments:\\n') + argumentsString + '\\n'\r\n            : '';\r\n        var optionsString = optionsArr\r\n            .map(function (opt) { return _this.getOptionStr(opt); })\r\n            .join('');\r\n        var commandOptsStr = optionsString\r\n            ? (0,colorette__WEBPACK_IMPORTED_MODULE_0__.magenta)('Options(starts with - or --):\\n') + optionsString\r\n            : '';\r\n        return commandHeaderStr + commandArgumentsStr + commandOptsStr;\r\n    };\r\n    Program.prototype.getOptionStr = function (option) {\r\n        var _a;\r\n        return ('  ' +\r\n            (0,colorette__WEBPACK_IMPORTED_MODULE_0__.bold)(option.availableNames.join('|')) +\r\n            '  ' +\r\n            ((_a = option.description) !== null && _a !== void 0 ? _a : '') +\r\n            '\\n');\r\n    };\r\n    Program.prototype.getArgumentStr = function (argument) {\r\n        // prettier-ignore\r\n        return \"  \".concat(argument.description ? \"<\".concat((0,colorette__WEBPACK_IMPORTED_MODULE_0__.greenBright)(argument.name), \">  \").concat(argument.description) : '', \"\\n\");\r\n    };\r\n    return Program;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Program);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/Program/Program.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Classes_Command_GetBanksClientsCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes/Command/GetBanksClientsCommand */ \"./src/Classes/Command/GetBanksClientsCommand.ts\");\n/* harmony import */ var _Classes_Command_GetBanksCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Classes/Command/GetBanksCommand */ \"./src/Classes/Command/GetBanksCommand.ts\");\n/* harmony import */ var _Classes_Observer_Observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Classes/Observer/Observer */ \"./src/Classes/Observer/Observer.ts\");\n/* harmony import */ var _Classes_Parser_Parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Classes/Parser/Parser */ \"./src/Classes/Parser/Parser.ts\");\n/* harmony import */ var _Classes_Parser_ParserInterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Classes/Parser/ParserInterface */ \"./src/Classes/Parser/ParserInterface.ts\");\n/* harmony import */ var _Classes_Program_Program__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Classes/Program/Program */ \"./src/Classes/Program/Program.ts\");\n//#!/usr/bin/env node\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar parser = new _Classes_Parser_ParserInterface__WEBPACK_IMPORTED_MODULE_4__[\"default\"](new _Classes_Parser_Parser__WEBPACK_IMPORTED_MODULE_3__[\"default\"](new _Classes_Observer_Observer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()));\r\nparser.addCommand(new _Classes_Command_GetBanksCommand__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('getBanks'));\r\nparser.addCommand(new _Classes_Command_GetBanksClientsCommand__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('getBanksClients'));\r\nvar program = new _Classes_Program_Program__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('Bank-cli', 'CLI Application for bank management', parser);\r\nprogram.addHelpTableCommand();\r\nvar parseRes = parser.parse();\r\nconsole.log(parseRes);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/index.ts?");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "./node_modules/colorette/index.js":
/*!*****************************************!*\
  !*** ./node_modules/colorette/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("var tty__WEBPACK_IMPORTED_MODULE_0___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"bgBlack\": () => (/* binding */ bgBlack),\n/* harmony export */   \"bgBlackBright\": () => (/* binding */ bgBlackBright),\n/* harmony export */   \"bgBlue\": () => (/* binding */ bgBlue),\n/* harmony export */   \"bgBlueBright\": () => (/* binding */ bgBlueBright),\n/* harmony export */   \"bgCyan\": () => (/* binding */ bgCyan),\n/* harmony export */   \"bgCyanBright\": () => (/* binding */ bgCyanBright),\n/* harmony export */   \"bgGreen\": () => (/* binding */ bgGreen),\n/* harmony export */   \"bgGreenBright\": () => (/* binding */ bgGreenBright),\n/* harmony export */   \"bgMagenta\": () => (/* binding */ bgMagenta),\n/* harmony export */   \"bgMagentaBright\": () => (/* binding */ bgMagentaBright),\n/* harmony export */   \"bgRed\": () => (/* binding */ bgRed),\n/* harmony export */   \"bgRedBright\": () => (/* binding */ bgRedBright),\n/* harmony export */   \"bgWhite\": () => (/* binding */ bgWhite),\n/* harmony export */   \"bgWhiteBright\": () => (/* binding */ bgWhiteBright),\n/* harmony export */   \"bgYellow\": () => (/* binding */ bgYellow),\n/* harmony export */   \"bgYellowBright\": () => (/* binding */ bgYellowBright),\n/* harmony export */   \"black\": () => (/* binding */ black),\n/* harmony export */   \"blackBright\": () => (/* binding */ blackBright),\n/* harmony export */   \"blue\": () => (/* binding */ blue),\n/* harmony export */   \"blueBright\": () => (/* binding */ blueBright),\n/* harmony export */   \"bold\": () => (/* binding */ bold),\n/* harmony export */   \"createColors\": () => (/* binding */ createColors),\n/* harmony export */   \"cyan\": () => (/* binding */ cyan),\n/* harmony export */   \"cyanBright\": () => (/* binding */ cyanBright),\n/* harmony export */   \"dim\": () => (/* binding */ dim),\n/* harmony export */   \"gray\": () => (/* binding */ gray),\n/* harmony export */   \"green\": () => (/* binding */ green),\n/* harmony export */   \"greenBright\": () => (/* binding */ greenBright),\n/* harmony export */   \"hidden\": () => (/* binding */ hidden),\n/* harmony export */   \"inverse\": () => (/* binding */ inverse),\n/* harmony export */   \"isColorSupported\": () => (/* binding */ isColorSupported),\n/* harmony export */   \"italic\": () => (/* binding */ italic),\n/* harmony export */   \"magenta\": () => (/* binding */ magenta),\n/* harmony export */   \"magentaBright\": () => (/* binding */ magentaBright),\n/* harmony export */   \"red\": () => (/* binding */ red),\n/* harmony export */   \"redBright\": () => (/* binding */ redBright),\n/* harmony export */   \"reset\": () => (/* binding */ reset),\n/* harmony export */   \"strikethrough\": () => (/* binding */ strikethrough),\n/* harmony export */   \"underline\": () => (/* binding */ underline),\n/* harmony export */   \"white\": () => (/* binding */ white),\n/* harmony export */   \"whiteBright\": () => (/* binding */ whiteBright),\n/* harmony export */   \"yellow\": () => (/* binding */ yellow),\n/* harmony export */   \"yellowBright\": () => (/* binding */ yellowBright)\n/* harmony export */ });\n/* harmony import */ var tty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tty */ \"tty\");\n\n\nconst {\n  env = {},\n  argv = [],\n  platform = \"\",\n} = typeof process === \"undefined\" ? {} : process\n\nconst isDisabled = \"NO_COLOR\" in env || argv.includes(\"--no-color\")\nconst isForced = \"FORCE_COLOR\" in env || argv.includes(\"--color\")\nconst isWindows = platform === \"win32\"\nconst isDumbTerminal = env.TERM === \"dumb\"\n\nconst isCompatibleTerminal =\n  /*#__PURE__*/ (tty__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (tty__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(tty__WEBPACK_IMPORTED_MODULE_0__, 2))) && tty__WEBPACK_IMPORTED_MODULE_0__.isatty && tty__WEBPACK_IMPORTED_MODULE_0__.isatty(1) && env.TERM && !isDumbTerminal\n\nconst isCI =\n  \"CI\" in env &&\n  (\"GITHUB_ACTIONS\" in env || \"GITLAB_CI\" in env || \"CIRCLECI\" in env)\n\nconst isColorSupported =\n  !isDisabled &&\n  (isForced || (isWindows && !isDumbTerminal) || isCompatibleTerminal || isCI)\n\nconst replaceClose = (\n  index,\n  string,\n  close,\n  replace,\n  head = string.substring(0, index) + replace,\n  tail = string.substring(index + close.length),\n  next = tail.indexOf(close)\n) => head + (next < 0 ? tail : replaceClose(next, tail, close, replace))\n\nconst clearBleed = (index, string, open, close, replace) =>\n  index < 0\n    ? open + string + close\n    : open + replaceClose(index, string, close, replace) + close\n\nconst filterEmpty =\n  (open, close, replace = open, at = open.length + 1) =>\n  (string) =>\n    string || !(string === \"\" || string === undefined)\n      ? clearBleed(\n          (\"\" + string).indexOf(close, at),\n          string,\n          open,\n          close,\n          replace\n        )\n      : \"\"\n\nconst init = (open, close, replace) =>\n  filterEmpty(`\\x1b[${open}m`, `\\x1b[${close}m`, replace)\n\nconst colors = {\n  reset: init(0, 0),\n  bold: init(1, 22, \"\\x1b[22m\\x1b[1m\"),\n  dim: init(2, 22, \"\\x1b[22m\\x1b[2m\"),\n  italic: init(3, 23),\n  underline: init(4, 24),\n  inverse: init(7, 27),\n  hidden: init(8, 28),\n  strikethrough: init(9, 29),\n  black: init(30, 39),\n  red: init(31, 39),\n  green: init(32, 39),\n  yellow: init(33, 39),\n  blue: init(34, 39),\n  magenta: init(35, 39),\n  cyan: init(36, 39),\n  white: init(37, 39),\n  gray: init(90, 39),\n  bgBlack: init(40, 49),\n  bgRed: init(41, 49),\n  bgGreen: init(42, 49),\n  bgYellow: init(43, 49),\n  bgBlue: init(44, 49),\n  bgMagenta: init(45, 49),\n  bgCyan: init(46, 49),\n  bgWhite: init(47, 49),\n  blackBright: init(90, 39),\n  redBright: init(91, 39),\n  greenBright: init(92, 39),\n  yellowBright: init(93, 39),\n  blueBright: init(94, 39),\n  magentaBright: init(95, 39),\n  cyanBright: init(96, 39),\n  whiteBright: init(97, 39),\n  bgBlackBright: init(100, 49),\n  bgRedBright: init(101, 49),\n  bgGreenBright: init(102, 49),\n  bgYellowBright: init(103, 49),\n  bgBlueBright: init(104, 49),\n  bgMagentaBright: init(105, 49),\n  bgCyanBright: init(106, 49),\n  bgWhiteBright: init(107, 49),\n}\n\nconst createColors = ({ useColor = isColorSupported } = {}) =>\n  useColor\n    ? colors\n    : Object.keys(colors).reduce(\n        (colors, key) => ({ ...colors, [key]: String }),\n        {}\n      )\n\nconst {\n  reset,\n  bold,\n  dim,\n  italic,\n  underline,\n  inverse,\n  hidden,\n  strikethrough,\n  black,\n  red,\n  green,\n  yellow,\n  blue,\n  magenta,\n  cyan,\n  white,\n  gray,\n  bgBlack,\n  bgRed,\n  bgGreen,\n  bgYellow,\n  bgBlue,\n  bgMagenta,\n  bgCyan,\n  bgWhite,\n  blackBright,\n  redBright,\n  greenBright,\n  yellowBright,\n  blueBright,\n  magentaBright,\n  cyanBright,\n  whiteBright,\n  bgBlackBright,\n  bgRedBright,\n  bgGreenBright,\n  bgYellowBright,\n  bgBlueBright,\n  bgMagentaBright,\n  bgCyanBright,\n  bgWhiteBright,\n} = createColors()\n\n\n//# sourceURL=webpack://bank-cli/./node_modules/colorette/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;