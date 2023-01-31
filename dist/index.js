(()=>{"use strict";var e,t,n={},r={};function o(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return n[e](i,i.exports,o),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var i=Object.create(null);o.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>n[e]));return a.default=()=>n,o.d(i,a),i},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};const i=require("tty");var a=o.t(i,2);const{env:s={},argv:c=[],platform:u=""}="undefined"==typeof process?{}:process,p="NO_COLOR"in s||c.includes("--no-color"),m="FORCE_COLOR"in s||c.includes("--color"),l="win32"===u,d="dumb"===s.TERM,g=a&&i.isatty&&i.isatty(1)&&s.TERM&&!d,f=!p&&(m||l&&!d||g||"CI"in s&&("GITHUB_ACTIONS"in s||"GITLAB_CI"in s||"CIRCLECI"in s)),h=(e,t,n,r,o=t.substring(0,e)+r,i=t.substring(e+n.length),a=i.indexOf(n))=>o+(a<0?i:h(a,i,n,r)),b=(e,t,n)=>((e,t,n=e,r=e.length+1)=>o=>o||""!==o&&void 0!==o?((e,t,n,r,o)=>e<0?n+t+r:n+h(e,t,r,o)+r)((""+o).indexOf(t,r),o,e,t,n):"")(`[${e}m`,`[${t}m`,n),y={reset:b(0,0),bold:b(1,22,"[22m[1m"),dim:b(2,22,"[22m[2m"),italic:b(3,23),underline:b(4,24),inverse:b(7,27),hidden:b(8,28),strikethrough:b(9,29),black:b(30,39),red:b(31,39),green:b(32,39),yellow:b(33,39),blue:b(34,39),magenta:b(35,39),cyan:b(36,39),white:b(37,39),gray:b(90,39),bgBlack:b(40,49),bgRed:b(41,49),bgGreen:b(42,49),bgYellow:b(43,49),bgBlue:b(44,49),bgMagenta:b(45,49),bgCyan:b(46,49),bgWhite:b(47,49),blackBright:b(90,39),redBright:b(91,39),greenBright:b(92,39),yellowBright:b(93,39),blueBright:b(94,39),magentaBright:b(95,39),cyanBright:b(96,39),whiteBright:b(97,39),bgBlackBright:b(100,49),bgRedBright:b(101,49),bgGreenBright:b(102,49),bgYellowBright:b(103,49),bgBlueBright:b(104,49),bgMagentaBright:b(105,49),bgCyanBright:b(106,49),bgWhiteBright:b(107,49)},{reset:v,bold:w,dim:O,italic:B,underline:C,inverse:P,hidden:A,strikethrough:j,black:_,red:x,green:S,yellow:k,blue:M,magenta:N,cyan:E,white:H,gray:T,bgBlack:I,bgRed:R,bgGreen:W,bgYellow:L,bgBlue:G,bgMagenta:z,bgCyan:Y,bgWhite:Z,blackBright:D,redBright:F,greenBright:$,yellowBright:q,blueBright:U,magentaBright:J,cyanBright:K,whiteBright:Q,bgBlackBright:V,bgRedBright:X,bgGreenBright:ee,bgYellowBright:te,bgBlueBright:ne,bgMagentaBright:re,bgCyanBright:oe,bgWhiteBright:ie}=(({useColor:e=f}={})=>e?y:Object.keys(y).reduce(((e,t)=>({...e,[t]:String})),{}))(),ae=function(){function e(e){this.subscriber=e}return e.prototype.notify=function(e){this.subscriber.notify(e)},e}(),se=function(){function e(){this._subscriptions=new Map}return Object.defineProperty(e.prototype,"subscriptions",{get:function(){return this._subscriptions},enumerable:!1,configurable:!0}),e.prototype.observe=function(e,t){var n=this._subscriptions.get(e);n||(this._subscriptions.set(e,[]),n=this._subscriptions.get(e));var r=new ae(t);null==n||n.push(r)},e.prototype.unobserve=function(e,t){var n=this._subscriptions.get(e);null==n||n.filter((function(e){return e.subscriber!==t}))},e.prototype.notify=function(e,t){var n;null===(n=this._subscriptions.get(e))||void 0===n||n.forEach((function(e){e.notify(t)}))},e}(),ce=function(){function e(e){this.observer=e}return Object.defineProperty(e.prototype,"subscriptions",{get:function(){return this.observer.subscriptions},enumerable:!1,configurable:!0}),e.prototype.notify=function(e,t){this.observer.notify(e,t)},e.prototype.observe=function(e,t){this.observer.observe(e,t)},e.prototype.unobserve=function(e,t){this.observer.unobserve(e,t)},e}(),ue=function(){function e(e){this.command=e}return Object.defineProperty(e.prototype,"name",{get:function(){return this.command.name},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"description",{get:function(){return this.command.description},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.command.options},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"arguments",{get:function(){return this.command.arguments},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"observer",{get:function(){return this.command.observer},set:function(e){this.command.observer=e},enumerable:!1,configurable:!0}),e.prototype.addOption=function(e){return this.command.addOption(e)},e.prototype.addArgument=function(e){return this.command.addArgument(e)},e.prototype.handle=function(e){this.command.handle(e)},e}();const pe=function(){function e(e){this._observer=e,this._existCommands=new Map}return Object.defineProperty(e.prototype,"existCommands",{get:function(){return this._existCommands},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"observer",{get:function(){return this._observer},enumerable:!1,configurable:!0}),e.prototype.addCommand=function(e){var t=new ue(e);if(this._existCommands.get(t.name))throw Error("Command with such name ".concat(t.name," is already exists"));return t.observer=this._observer,this._existCommands.set(t.name,e),t},e.prototype.parseAsOption=function(e,t){var n,r,o=e.match(/(?<=(--|-))(?<optName>[a-zA-Z0-9]+)(=(?<optArg>[a-zA-Z0-9]+))?/);if(null==o?void 0:o.groups){for(var i=o.groups,a=i.optName,s=i.optArg,c=!1,u=0,p=null!==(r=t.options)&&void 0!==r?r:[];u<p.length;u++){var m=p[u];if(m.availableNames.includes(a)){c=!0,a=m.mainName;break}}return c?((n={})[a]=s||!0,n):null}return null},e.prototype.parseAsArgument=function(e,t){var n;if(/^[a-zA-Z0-9]+$/.test(e)){var r=t.shift();return r?((n={})[r]=e,n):null}return null},e.prototype.parseArguments=function(){var e=this,t=process.argv.slice(2),n=!1,r="";t[0].startsWith("-")||t[0].startsWith("--")?n=!0:r=t[0];var o=this.existCommands.get(r);if(!o)throw Error("Incorrect command");var i=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}([],o.arguments.map((function(e){return e.name})),!0),a={},s={};return t.forEach((function(t,r){if(0!==r||n){var c=e.parseAsOption(t,o);if(c){var u=Object.keys(c)[0];if(!a[u])return a[u]=c[u]}if(0!==i.length){var p=e.parseAsArgument(t,i);if(p){var m=Object.keys(p)[0];s[m]||(s[m]=p[m])}}}})),{command:r,givenOptions:a,givenArguments:s}},e.prototype.parse=function(){var e=this.parseArguments(),t=e.command,n=e.givenArguments,r=e.givenOptions;return this._observer.notify(t,{command:t,givenArguments:n,givenOptions:r}),e},e}(),me=function(){function e(e){this.parser=e}return Object.defineProperty(e.prototype,"existCommands",{get:function(){return this.parser.existCommands},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"observer",{get:function(){return this.parser.observer},enumerable:!1,configurable:!0}),e.prototype.addCommand=function(e){return this.parser.addCommand(e)},e.prototype.parse=function(){return this.parser.parse()},e}(),le=function(e,t){this.name=e,this.description=t},de=function(){function e(e){this.callback=e}return e.prototype.notify=function(e){this.callback(e)},e}(),ge=function(){function e(e){this.option=e}return Object.defineProperty(e.prototype,"availableNames",{get:function(){return this.option.availableNames},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mainName",{get:function(){return this.option.mainName},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"description",{get:function(){return this.option.description},enumerable:!1,configurable:!0}),e.prototype.parseOptionPattern=function(e){this.option.parseOptionPattern(e)},e}(),fe=function(){function e(e){this.argument=e}return Object.defineProperty(e.prototype,"name",{get:function(){return this.argument.name},set:function(e){this.argument.name=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"description",{get:function(){return this.argument.description},set:function(e){this.argument.description=e},enumerable:!1,configurable:!0}),e}(),he=function(){function e(e,t){this.name=e,this.description=t,this.optionsArr=[],this.argumentsArr=[],this._observer=null}return Object.defineProperty(e.prototype,"options",{get:function(){return this.optionsArr},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"arguments",{get:function(){return this.argumentsArr},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"observer",{get:function(){return this._observer},set:function(e){this._observer=e},enumerable:!1,configurable:!0}),e.prototype.addOption=function(e){var t=new ge(e);return this.optionsArr.push(t),this},e.prototype.addArgument=function(e){var t=new fe(e);return this.argumentsArr.push(t),this},e.prototype.handle=function(e){this._observer&&this._observer.observe(this.name,new de(e))},e}(),be=function(){function e(e,t,n){void 0===e&&(e=""),void 0===t&&(t=""),this.name=e,this.description=t,this.parser=null!=n?n:null}return e.prototype.addHelpTableCommand=function(){this.parser&&this.parser.addCommand(new he("help","Shows help table")).addArgument(new le("commandHelpWith")).handle(this.onShowHelpTable.bind(this))},e.prototype.onShowHelpTable=function(e){var t=this;if(this.parser){var n=e.givenArguments.commandHelpWith;if(n){var r=this.parser.existCommands.get(n);if(!r)return void console.log(F("Such command(".concat(String(n),") doesn't exists")));var o=this.getCommandHelpString(r);console.log(o)}else{var i="Help node fore the ".concat(this.getProgramHeaderStr()),a=Array.from(this.parser.existCommands.keys()).map((function(e){var n,r=null===(n=t.parser)||void 0===n?void 0:n.existCommands.get(e);return r?t.getCommandHelpString(r):""})).join("---------------------------------------------------\n");console.log("".concat(F(i),"\n\n").concat(a))}}},e.prototype.getProgramHeaderStr=function(){return"".concat(String(this.name)," Application\nDescription:").concat(String(this.description))},e.prototype.getCommandHelpString=function(e){var t=this,n=e.name,r=e.description,o=e.arguments,i=e.options,a="".concat(M("Command")," ").concat(k(n)," ").concat(o.map((function(e){return"<".concat($(e.name),">")})).join(" ")," ").concat(null!=r?r:""," \n\n"),s=o.map((function(e){return t.getArgumentStr(e)})).join(""),c=s.trim()?x("Arguments:\n")+s+"\n":"",u=i.map((function(e){return t.getOptionStr(e)})).join("");return a+c+(u?N("Options(starts with - or --):\n")+u:"")},e.prototype.getOptionStr=function(e){var t;return"  "+w(e.availableNames.join("|"))+"  "+(null!==(t=e.description)&&void 0!==t?t:"")+"\n"},e.prototype.getArgumentStr=function(e){return"  ".concat(e.description?"<".concat($(e.name),">  ").concat(e.description):"","\n")},e}();var ye=function(){function e(e){this.program=e}return Object.defineProperty(e.prototype,"name",{get:function(){return this.program.name},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"description",{get:function(){return this.program.description},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parser",{get:function(){return this.program.parser},enumerable:!1,configurable:!0}),e.prototype.addHelpTableCommand=function(){this.program.addHelpTableCommand()},e}();const ve=ye,we=function(e,t,n){this.commandPart=e,this.middlewares=t,this.commandParams=n},Oe=function(){function e(e,t){var n=this.parseOptionPattern(e),r=n.availableNames,o=n.mainName;this.availableNames=r,this.mainName=o,this.description=t}return e.prototype.parseOptionPattern=function(e){var t=e.split("|"),n=[],r="";if(t.forEach((function(e){var t;/(?<=-|--)@?[a-zA-Z0-9]+/.test(e)&&(t=e.replace(/-|--/g,"").trim(),/^@/.test(t)&&(t=t.slice(1).trim(),r=t),n.push(t))})),!n.length&&!r)throw Error("Incorrect option patern recieved(".concat(e,")"));return r||(r=n[0]),{availableNames:n,mainName:r}},e}();var Be=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},Ce=function(){function e(e,t,n,r){this.program=e,this.commandPart=t,this.middlewares=n,this.commandParams=r,this.formCommands()}return e.prototype.isDefaultMiddleware=function(e){return"function"==typeof e&&2===e.length},e.prototype.isErrorMiddleware=function(e){return"function"==typeof e&&3===e.length},e.prototype.divideMiddlewares=function(e){var t=this,n=[],r=[];return e.forEach((function(e){t.isDefaultMiddleware(e)&&n.push(e),t.isErrorMiddleware(e)&&r.push(e)})),{defaultMiddlewares:n,errorMiddlewares:r}},e.prototype.getNextFunction=function(e,t){var n=this.divideMiddlewares(t),r=n.defaultMiddlewares,o=n.errorMiddlewares,i=0,a=0,s=function(t){var n;t?(n=o[a++])&&n(t,e,s):(n=r[i++])&&n(e,s)};return s},e.prototype.addCommandByParams=function(e,t,n){var r=this;if(this.program.parser){var o=new he(e,t.description);this.program.parser.addCommand(o),t.opts.forEach((function(e){var t=e.name,n=e.description;o.addOption(new Oe(t,n))})),t.args.forEach((function(e){var t=e.name,n=e.description;o.addArgument(new le(t,n))})),o.handle((function(e){r.getNextFunction(e,n)()}))}},e.prototype.formCommands=function(e,t,n){var r=this;void 0===e&&(e=""),void 0===t&&(t=this),void 0===n&&(n=[]);var o=Be([],n,!0);t.middlewares.forEach((function(t){if(t instanceof we){var n=e+t.commandPart;r.formCommands(n,t,Be([],o,!0))}else"function"==typeof t&&o.push(t)})),t.commandParams&&this.addCommandByParams(e,t.commandParams,Be([],o,!0))},e}();const Pe=Ce;var Ae=new me(new pe(new ce(new se))),je=new ve(new be("Bank-cli","CLI Application for bank management",Ae));je.addHelpTableCommand();var _e=new we("Banks",[function(e,t){console.log("get banks first middleware"),t("err"),console.log("after err")},function(e,t){console.log("get banks second middleware"),t()},function(e,t,n){console.log("get banks local error middleware ".concat(String(e)))}],{description:"Lists array of banks",opts:[],args:[]}),xe=new we("Comments",[function(e,t){console.log("get commments first middleware"),t("err"),console.log("after err")},function(e,t){console.log("get comments second middleware"),t()},function(e,t,n){console.log("get comments local error middleware ".concat(String(e)))}],{description:"Lists array of comments",opts:[{name:"-f|--@first",description:"Only first comment"}],args:[{name:"text",description:"text to search by"}]});new Pe(je,"",[new we("get",[function(e,t,n){console.log("get error ".concat(String(e))),n(e)},function(e,t){console.log("first get middleware"),t()},xe,function(e,t){console.log("second get middleware"),t()},_e],{description:"get something",opts:[{name:"-d|--@do",description:"do something"}],args:[{name:"text",description:"text to search by"}]})]);try{Ae.parse()}catch(e){console.log(x(e.message))}})();