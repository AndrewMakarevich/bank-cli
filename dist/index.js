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

/***/ "./src/Classes/Parser/Argument/CommandArgument.ts":
/*!********************************************************!*\
  !*** ./src/Classes/Parser/Argument/CommandArgument.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar CommandArgument = /** @class */ (function () {\r\n    function CommandArgument(name, description) {\r\n        this.name = name;\r\n        this.description = description;\r\n    }\r\n    return CommandArgument;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommandArgument);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/Parser/Argument/CommandArgument.ts?");

/***/ }),

/***/ "./src/Classes/Parser/Command/Command.ts":
/*!***********************************************!*\
  !*** ./src/Classes/Parser/Command/Command.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Observer_Subscriber_Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Observer/Subscriber/Subscriber */ \"./src/Classes/Observer/Subscriber/Subscriber.ts\");\n\r\nvar Command = /** @class */ (function () {\r\n    function Command(name, description) {\r\n        this.name = name;\r\n        this.description = description;\r\n        this.opts = [];\r\n        this.args = [];\r\n        this._observer = null;\r\n    }\r\n    Object.defineProperty(Command.prototype, \"options\", {\r\n        get: function () {\r\n            return this.opts;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Command.prototype, \"arguments\", {\r\n        get: function () {\r\n            return this.args;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Command.prototype, \"observer\", {\r\n        get: function () {\r\n            return this._observer;\r\n        },\r\n        /** Sets automatically, when command added through the parser */\r\n        set: function (observer) {\r\n            this._observer = observer;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Command.prototype.addOption = function (commandOption) {\r\n        this.opts.push(commandOption);\r\n        return this;\r\n    };\r\n    Command.prototype.addArgument = function (commandArgument) {\r\n        this.args.push(commandArgument);\r\n        return this;\r\n    };\r\n    Command.prototype.handle = function (callback) {\r\n        if (this._observer)\r\n            this._observer.observe(this.name, new _Observer_Subscriber_Subscriber__WEBPACK_IMPORTED_MODULE_0__[\"default\"](callback));\r\n    };\r\n    return Command;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Command);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/Parser/Command/Command.ts?");

/***/ }),

/***/ "./src/Classes/Parser/Option/CommandOption/CommandOption.ts":
/*!******************************************************************!*\
  !*** ./src/Classes/Parser/Option/CommandOption/CommandOption.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar CommandOption = /** @class */ (function () {\r\n    function CommandOption(optionPattern, description) {\r\n        var _a = this.parseOptionPattern(optionPattern), availableNames = _a.availableNames, mainName = _a.mainName;\r\n        this.availableNames = availableNames;\r\n        this.mainName = mainName;\r\n        this.description = description;\r\n    }\r\n    CommandOption.prototype.parseOptionPattern = function (optionPattern) {\r\n        var options = optionPattern.split('|');\r\n        var availableNames = [];\r\n        var mainName = '';\r\n        options.forEach(function (option) {\r\n            var parsedOption;\r\n            if (/(?<=-|--)@?[a-zA-Z0-9]+/.test(option)) {\r\n                parsedOption = option.replace(/-|--/g, '').trim();\r\n                if (/^@/.test(parsedOption)) {\r\n                    parsedOption = parsedOption.slice(1).trim();\r\n                    mainName = parsedOption;\r\n                }\r\n                availableNames.push(parsedOption);\r\n            }\r\n        });\r\n        if (!availableNames.length && !mainName) {\r\n            throw Error(\"Incorrect option patern recieved(\".concat(optionPattern, \")\"));\r\n        }\r\n        if (!mainName)\r\n            mainName = availableNames[0];\r\n        return { availableNames: availableNames, mainName: mainName };\r\n    };\r\n    return CommandOption;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommandOption);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/Parser/Option/CommandOption/CommandOption.ts?");

/***/ }),

/***/ "./src/Classes/Parser/Parser.ts":
/*!**************************************!*\
  !*** ./src/Classes/Parser/Parser.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\nvar Parser = /** @class */ (function () {\r\n    function Parser(observer) {\r\n        this._observer = observer;\r\n        this._existCommands = new Map();\r\n    }\r\n    Object.defineProperty(Parser.prototype, \"existCommands\", {\r\n        get: function () {\r\n            return this._existCommands;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Parser.prototype, \"observer\", {\r\n        get: function () {\r\n            return this._observer;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Parser.prototype.addCommand = function (command) {\r\n        command.observer = this._observer;\r\n        this._existCommands.set(command.name, command);\r\n        return command;\r\n    };\r\n    Parser.prototype.parseAsOption = function (option, command) {\r\n        var _a;\r\n        var _b;\r\n        var match = option.match(/(?<=(--|-))(?<optName>[a-zA-Z0-9]+)(=(?<optArg>[a-zA-Z0-9]+))?/);\r\n        if (match === null || match === void 0 ? void 0 : match.groups) {\r\n            var _c = match.groups, newOptionName = _c.optName, newOptionArgument = _c.optArg;\r\n            var optionExists = false;\r\n            for (var _i = 0, _d = (_b = command.options) !== null && _b !== void 0 ? _b : []; _i < _d.length; _i++) {\r\n                var opt = _d[_i];\r\n                var newOptionNameExists = opt.availableNames.includes(newOptionName);\r\n                if (newOptionNameExists) {\r\n                    optionExists = true;\r\n                    newOptionName = opt.mainName;\r\n                    break;\r\n                }\r\n            }\r\n            return optionExists\r\n                ? (_a = {}, _a[newOptionName] = newOptionArgument || true, _a) : null;\r\n        }\r\n        return null;\r\n    };\r\n    Parser.prototype.parseAsArgument = function (arg, argumentsPattern) {\r\n        var _a;\r\n        if (/^[a-zA-Z0-9]+$/.test(arg)) {\r\n            var argName = argumentsPattern.shift();\r\n            if (argName)\r\n                return _a = {}, _a[argName] = arg, _a;\r\n            return null;\r\n        }\r\n        return null;\r\n    };\r\n    Parser.prototype.parseArgv = function () {\r\n        var _this = this;\r\n        var argv = process.argv.slice(2);\r\n        var withoutCommand = false;\r\n        var command = '';\r\n        if (argv[0].startsWith('-') || argv[0].startsWith('--')) {\r\n            withoutCommand = true;\r\n        }\r\n        else {\r\n            command = argv[0];\r\n        }\r\n        var currCommandInstance = this.existCommands.get(command);\r\n        if (!currCommandInstance)\r\n            throw Error('Icorrect command');\r\n        var currCommandArgumentsPattern = __spreadArray([], currCommandInstance.arguments.map(function (_a) {\r\n            var name = _a.name;\r\n            return name;\r\n        }), true);\r\n        var givenOpts = {};\r\n        var givenArgs = {};\r\n        argv.forEach(function (arg, index) {\r\n            if (index === 0 && !withoutCommand)\r\n                return;\r\n            var newOption = _this.parseAsOption(arg, currCommandInstance);\r\n            if (newOption) {\r\n                var newOptionName = Object.keys(newOption)[0];\r\n                if (!givenOpts[newOptionName])\r\n                    return (givenOpts[newOptionName] = newOption[newOptionName]);\r\n            }\r\n            if (currCommandArgumentsPattern.length === 0)\r\n                return;\r\n            var newArgument = _this.parseAsArgument(arg, currCommandArgumentsPattern);\r\n            if (newArgument) {\r\n                var newArgumentName = Object.keys(newArgument)[0];\r\n                if (!givenArgs[newArgumentName]) {\r\n                    givenArgs[newArgumentName] = newArgument[newArgumentName];\r\n                }\r\n            }\r\n        });\r\n        return { command: command, givenOpts: givenOpts, givenArgs: givenArgs };\r\n    };\r\n    Parser.prototype.parse = function () {\r\n        var parseRes = this.parseArgv();\r\n        var command = parseRes.command, args = parseRes.givenArgs, opts = parseRes.givenOpts;\r\n        this._observer.notify(command, { command: command, args: args, opts: opts });\r\n        return parseRes;\r\n    };\r\n    return Parser;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Parser);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/Parser/Parser.ts?");

/***/ }),

/***/ "./src/Classes/Parser/ParserInterface.ts":
/*!***********************************************!*\
  !*** ./src/Classes/Parser/ParserInterface.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ParserInterface = /** @class */ (function () {\r\n    function ParserInterface(parser) {\r\n        this.parser = parser;\r\n    }\r\n    Object.defineProperty(ParserInterface.prototype, \"existCommands\", {\r\n        get: function () {\r\n            return this.parser.existCommands;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(ParserInterface.prototype, \"observer\", {\r\n        get: function () {\r\n            return this.parser.observer;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    ParserInterface.prototype.addCommand = function (command) {\r\n        return this.parser.addCommand(command);\r\n    };\r\n    ParserInterface.prototype.parse = function () {\r\n        return this.parser.parse();\r\n    };\r\n    return ParserInterface;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParserInterface);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/Parser/ParserInterface.ts?");

/***/ }),

/***/ "./src/Classes/ProgramRouter/ProgramRouter.ts":
/*!****************************************************!*\
  !*** ./src/Classes/ProgramRouter/ProgramRouter.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ProgramRouter = /** @class */ (function () {\r\n    function ProgramRouter(commandPart, middlewares, commandParams) {\r\n        this.commandPart = commandPart;\r\n        this.middlewares = middlewares;\r\n        this.commandParams = commandParams;\r\n    }\r\n    return ProgramRouter;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgramRouter);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/ProgramRouter/ProgramRouter.ts?");

/***/ }),

/***/ "./src/Classes/ProgramRouter/ProgramRouterRoot.ts":
/*!********************************************************!*\
  !*** ./src/Classes/ProgramRouter/ProgramRouterRoot.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Parser_Argument_CommandArgument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Parser/Argument/CommandArgument */ \"./src/Classes/Parser/Argument/CommandArgument.ts\");\n/* harmony import */ var _Parser_Command_Command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser/Command/Command */ \"./src/Classes/Parser/Command/Command.ts\");\n/* harmony import */ var _Parser_Option_CommandOption_CommandOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Parser/Option/CommandOption/CommandOption */ \"./src/Classes/Parser/Option/CommandOption/CommandOption.ts\");\n/* harmony import */ var _ProgramRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProgramRouter */ \"./src/Classes/ProgramRouter/ProgramRouter.ts\");\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\r\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\r\n        if (ar || !(i in from)) {\r\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\r\n            ar[i] = from[i];\r\n        }\r\n    }\r\n    return to.concat(ar || Array.prototype.slice.call(from));\r\n};\r\n\r\n\r\n\r\n\r\nvar ProgramRouterRoot = /** @class */ (function () {\r\n    function ProgramRouterRoot(program, commandPart, middlewares, commandParams) {\r\n        this.program = program;\r\n        this.commandPart = commandPart;\r\n        this.middlewares = middlewares;\r\n        this.commandParams = commandParams;\r\n        this.flatRoutes();\r\n    }\r\n    ProgramRouterRoot.prototype.isDefaultMiddleware = function (middleware) {\r\n        return typeof middleware === 'function' && middleware.length === 2;\r\n    };\r\n    ProgramRouterRoot.prototype.isErrorMiddleware = function (middleware) {\r\n        return typeof middleware === 'function' && middleware.length === 3;\r\n    };\r\n    ProgramRouterRoot.prototype.divideMiddlewares = function (middlewares) {\r\n        var _this = this;\r\n        var defaultMiddlewares = [];\r\n        var errorMiddlewares = [];\r\n        middlewares.forEach(function (middleware) {\r\n            if (_this.isDefaultMiddleware(middleware)) {\r\n                defaultMiddlewares.push(middleware);\r\n            }\r\n            if (_this.isErrorMiddleware(middleware)) {\r\n                errorMiddlewares.push(middleware);\r\n            }\r\n        });\r\n        return { defaultMiddlewares: defaultMiddlewares, errorMiddlewares: errorMiddlewares };\r\n    };\r\n    ProgramRouterRoot.prototype.getNextFunction = function (payload, middlewares) {\r\n        console.log(middlewares);\r\n        var _a = this.divideMiddlewares(middlewares), defaultMiddlewares = _a.defaultMiddlewares, errorMiddlewares = _a.errorMiddlewares;\r\n        console.log(defaultMiddlewares, errorMiddlewares);\r\n        var currDefaultMiddlewareIndex = 0;\r\n        var currErrMiddlewareIndex = 0;\r\n        var next = function (err) {\r\n            if (err) {\r\n                var middleware = errorMiddlewares[currErrMiddlewareIndex++];\r\n                if (middleware)\r\n                    middleware(err, payload, next);\r\n            }\r\n            else {\r\n                var middleware = defaultMiddlewares[currDefaultMiddlewareIndex++];\r\n                if (middleware)\r\n                    middleware(payload, next);\r\n            }\r\n        };\r\n        return next;\r\n    };\r\n    ProgramRouterRoot.prototype.addCommandByParams = function (commandName, params, middlewares) {\r\n        var _this = this;\r\n        if (!this.program.parser)\r\n            return;\r\n        var newCommand = new _Parser_Command_Command__WEBPACK_IMPORTED_MODULE_1__[\"default\"](commandName, params.description);\r\n        this.program.parser.addCommand(newCommand);\r\n        params.opts.forEach(function (_a) {\r\n            var name = _a.name, description = _a.description;\r\n            newCommand.addOption(new _Parser_Option_CommandOption_CommandOption__WEBPACK_IMPORTED_MODULE_2__[\"default\"](name, description));\r\n        });\r\n        params.args.forEach(function (_a) {\r\n            var name = _a.name, description = _a.description;\r\n            newCommand.addArgument(new _Parser_Argument_CommandArgument__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, description));\r\n        });\r\n        newCommand.handle(function (payload) {\r\n            _this.getNextFunction(payload, middlewares)();\r\n        });\r\n    };\r\n    ProgramRouterRoot.prototype.flatRoutes = function () {\r\n        var _this = this;\r\n        var flat = function (currCommandName, currentRouter, globalMiddlewares) {\r\n            if (currCommandName === void 0) { currCommandName = ''; }\r\n            if (currentRouter === void 0) { currentRouter = _this; }\r\n            if (globalMiddlewares === void 0) { globalMiddlewares = []; }\r\n            var localMiddlewares = __spreadArray([], globalMiddlewares, true);\r\n            currentRouter.middlewares.forEach(function (middleware) {\r\n                if (middleware instanceof _ProgramRouter__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\r\n                    var newCommandName = currCommandName + middleware.commandPart;\r\n                    flat(newCommandName, middleware, __spreadArray([], localMiddlewares, true));\r\n                }\r\n                else if (typeof middleware === 'function') {\r\n                    localMiddlewares.push(middleware);\r\n                }\r\n            });\r\n            if (currentRouter.commandParams) {\r\n                _this.addCommandByParams(currCommandName, currentRouter.commandParams, __spreadArray([], localMiddlewares, true));\r\n            }\r\n        };\r\n        flat();\r\n    };\r\n    return ProgramRouterRoot;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgramRouterRoot);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/ProgramRouter/ProgramRouterRoot.ts?");

/***/ }),

/***/ "./src/Classes/Program/Program.ts":
/*!****************************************!*\
  !*** ./src/Classes/Program/Program.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var colorette__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! colorette */ \"./node_modules/colorette/index.js\");\n/* harmony import */ var _Parser_Argument_CommandArgument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Parser/Argument/CommandArgument */ \"./src/Classes/Parser/Argument/CommandArgument.ts\");\n/* harmony import */ var _Parser_Command_Command__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Parser/Command/Command */ \"./src/Classes/Parser/Command/Command.ts\");\n\r\n\r\n\r\nvar Program = /** @class */ (function () {\r\n    function Program(name, description, parser) {\r\n        if (name === void 0) { name = ''; }\r\n        if (description === void 0) { description = ''; }\r\n        this.name = name;\r\n        this.description = description;\r\n        this.parser = parser !== null && parser !== void 0 ? parser : null;\r\n    }\r\n    Program.prototype.addHelpTableCommand = function () {\r\n        if (!this.parser)\r\n            return;\r\n        this.parser\r\n            .addCommand(new _Parser_Command_Command__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('help', 'Shows help table'))\r\n            .addArgument(new _Parser_Argument_CommandArgument__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('commandHelpWith'))\r\n            .handle(this.onShowHelpTable.bind(this));\r\n    };\r\n    Program.prototype.onShowHelpTable = function (payload) {\r\n        var _this = this;\r\n        if (!this.parser)\r\n            return;\r\n        var command = payload.command, opts = payload.opts, args = payload.args;\r\n        var commandToHelpWith = args.commandHelpWith;\r\n        if (commandToHelpWith) {\r\n            var command_1 = this.parser.existCommands.get(commandToHelpWith);\r\n            if (!command_1) {\r\n                console.log((0,colorette__WEBPACK_IMPORTED_MODULE_0__.redBright)(\"Such command(\".concat(String(commandToHelpWith), \") doesn't exists\")));\r\n                return;\r\n            }\r\n            var commandHelpStr = this.getCommandHelpString(command_1);\r\n            console.log(commandHelpStr);\r\n            return;\r\n        }\r\n        var applicationHeaderStr = \"Help node fore the \".concat(this.getProgramHeaderStr());\r\n        var commandsNames = Array.from(this.parser.existCommands.keys());\r\n        var commandsStrs = commandsNames\r\n            .map(function (commandName) {\r\n            var _a;\r\n            var command = (_a = _this.parser) === null || _a === void 0 ? void 0 : _a.existCommands.get(commandName);\r\n            if (!command)\r\n                return '';\r\n            return _this.getCommandHelpString(command);\r\n        })\r\n            .join('---------------------------------------------------\\n');\r\n        console.log(\"\".concat((0,colorette__WEBPACK_IMPORTED_MODULE_0__.redBright)(applicationHeaderStr), \"\\n\\n\").concat(commandsStrs));\r\n    };\r\n    Program.prototype.getProgramHeaderStr = function () {\r\n        // prettier-ignore\r\n        return \"\".concat(String(this.name), \" Application\\nDescription:\").concat(String(this.description));\r\n    };\r\n    Program.prototype.getCommandHelpString = function (_a) {\r\n        var _this = this;\r\n        var name = _a.name, description = _a.description, args = _a.arguments, opts = _a.options;\r\n        // prettier-ignore\r\n        var commandHeaderStr = \"\".concat((0,colorette__WEBPACK_IMPORTED_MODULE_0__.blue)(\"Command\"), \" \").concat((0,colorette__WEBPACK_IMPORTED_MODULE_0__.yellow)(name), \" \").concat(args.map(function (arg) { return \"<\".concat((0,colorette__WEBPACK_IMPORTED_MODULE_0__.greenBright)(arg.name), \">\"); }).join(\" \"), \" \").concat(description !== null && description !== void 0 ? description : '', \" \\n\\n\");\r\n        var argumentsString = args\r\n            .map(function (arg) { return _this.getArgumentStr(arg); })\r\n            .join('');\r\n        var commandArgumentsStr = argumentsString.trim()\r\n            ? (0,colorette__WEBPACK_IMPORTED_MODULE_0__.red)('Arguments:\\n') + argumentsString + '\\n'\r\n            : '';\r\n        var optionsString = opts.map(function (opt) { return _this.getOptionStr(opt); }).join('');\r\n        var commandOptsStr = optionsString\r\n            ? (0,colorette__WEBPACK_IMPORTED_MODULE_0__.magenta)('Options(starts with - or --):\\n') + optionsString\r\n            : '';\r\n        return commandHeaderStr + commandArgumentsStr + commandOptsStr;\r\n    };\r\n    Program.prototype.getOptionStr = function (opt) {\r\n        var _a;\r\n        return ('  ' +\r\n            (0,colorette__WEBPACK_IMPORTED_MODULE_0__.bold)(opt.availableNames.join('|')) +\r\n            '  ' +\r\n            ((_a = opt.description) !== null && _a !== void 0 ? _a : '') +\r\n            '\\n');\r\n    };\r\n    Program.prototype.getArgumentStr = function (arg) {\r\n        // prettier-ignore\r\n        return \"  \".concat(arg.description ? \"<\".concat((0,colorette__WEBPACK_IMPORTED_MODULE_0__.greenBright)(arg.name), \">  \").concat(arg.description) : '', \"\\n\");\r\n    };\r\n    return Program;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Program);\r\n\n\n//# sourceURL=webpack://bank-cli/./src/Classes/Program/Program.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Classes_Observer_Observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Classes/Observer/Observer */ \"./src/Classes/Observer/Observer.ts\");\n/* harmony import */ var _Classes_Parser_Parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Classes/Parser/Parser */ \"./src/Classes/Parser/Parser.ts\");\n/* harmony import */ var _Classes_Parser_ParserInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Classes/Parser/ParserInterface */ \"./src/Classes/Parser/ParserInterface.ts\");\n/* harmony import */ var _Classes_Program_Program__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Classes/Program/Program */ \"./src/Classes/Program/Program.ts\");\n/* harmony import */ var _Classes_ProgramRouter_ProgramRouter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Classes/ProgramRouter/ProgramRouter */ \"./src/Classes/ProgramRouter/ProgramRouter.ts\");\n/* harmony import */ var _Classes_ProgramRouter_ProgramRouterRoot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Classes/ProgramRouter/ProgramRouterRoot */ \"./src/Classes/ProgramRouter/ProgramRouterRoot.ts\");\n//#!/usr/bin/env node\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar parser = new _Classes_Parser_ParserInterface__WEBPACK_IMPORTED_MODULE_2__[\"default\"](new _Classes_Parser_Parser__WEBPACK_IMPORTED_MODULE_1__[\"default\"](new _Classes_Observer_Observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()));\r\n// parser\r\n//   .addCommand(new Command('split', 'Split given string'))\r\n//   .addOption(\r\n//     new CommandOption(\r\n//       '-f | --@first',\r\n//       'If therre are should be shown only first splitted chunk'\r\n//     )\r\n//   )\r\n//   .addOption(new CommandOption('-s|--@silly'))\r\n//   .addArgument(new CommandArgument('string', 'String to split'))\r\n//   .addArgument(new CommandArgument('oneMore', 'One more string'))\r\n//   .handle((payload) => {\r\n//     const { command, opts, args } = payload;\r\n//     console.log('handle command execution', command, opts, args);\r\n//   });\r\n// parser\r\n//   .addCommand(new Command('my'))\r\n//   .addOption(new CommandOption('-l|--@large'))\r\n//   .addArgument(new CommandArgument('amount', 'Amount of something'))\r\n//   .handle((payload) => {\r\n//     const { command, opts, args } = payload;\r\n//     console.log('handle my command execution', command, opts, args);\r\n//   });\r\nvar program = new _Classes_Program_Program__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('Bank-cli', 'CLI Application for bank management', parser);\r\nprogram.addHelpTableCommand();\r\nvar getCommentRouter = new _Classes_ProgramRouter_ProgramRouter__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('Comments', [\r\n    function (payload, next) {\r\n        console.log('get comm 1');\r\n        next('err');\r\n        console.log('after err');\r\n    },\r\n    function (payload, next) {\r\n        console.log('get comm 2');\r\n        next();\r\n    },\r\n    function (err, payload, next) {\r\n        console.log(\"Local err \".concat(String(err)));\r\n    },\r\n], {\r\n    description: 'Lists array of comments',\r\n    opts: [{ name: '-f|--@first', description: 'Only first comment' }],\r\n    args: [{ name: 'text', description: 'text to search by' }],\r\n});\r\nvar getRouter = new _Classes_ProgramRouter_ProgramRouter__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('get', [\r\n    function err(err, payload, next) {\r\n        console.log(\"Error \".concat(String(err)));\r\n        next(err);\r\n    },\r\n    function one(payload, next) {\r\n        console.log(1);\r\n        next();\r\n    },\r\n    getCommentRouter,\r\n    function two(payload, next) {\r\n        console.log(2);\r\n        next();\r\n    },\r\n], {\r\n    description: 'do something',\r\n    opts: [{ name: '-d|--@do', description: 'do something' }],\r\n    args: [{ name: 'text', description: 'text to search by' }],\r\n});\r\nvar routerRoot = new _Classes_ProgramRouter_ProgramRouterRoot__WEBPACK_IMPORTED_MODULE_5__[\"default\"](program, '', [getRouter]);\r\nparser.parse();\r\n\n\n//# sourceURL=webpack://bank-cli/./src/index.ts?");

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