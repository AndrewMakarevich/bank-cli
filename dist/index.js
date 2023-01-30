(()=>{"use strict";var t,e,n={},r={};function o(t){var e=r[t];if(void 0!==e)return e.exports;var i=r[t]={exports:{}};return n[t](i,i.exports,o),i.exports}e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,o.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var i=Object.create(null);o.r(i);var a={};t=t||[null,e({}),e([]),e(e)];for(var s=2&r&&n;"object"==typeof s&&!~t.indexOf(s);s=e(s))Object.getOwnPropertyNames(s).forEach((t=>a[t]=()=>n[t]));return a.default=()=>n,o.d(i,a),i},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};const i=function(){function t(t){this.callback=t}return t.prototype.notify=function(t){this.callback(t)},t}(),a=function(){function t(t){this.argument=t}return Object.defineProperty(t.prototype,"name",{get:function(){return this.argument.name},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"description",{get:function(){return this.argument.description},enumerable:!1,configurable:!0}),t}(),s=function(){function t(t){this.option=t}return Object.defineProperty(t.prototype,"availableNames",{get:function(){return this.option.availableNames},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"mainName",{get:function(){return this.option.mainName},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"description",{get:function(){return this.option.description},enumerable:!1,configurable:!0}),t.prototype.parseOptionPattern=function(t){return this.option.parseOptionPattern(t)},t}(),u=function(){function t(t,e,n,r){void 0===n&&(n=[]),void 0===r&&(r=[]),this.name=t,this.description=e,this._options=n,this._arguments=r,this._observer=null}return Object.defineProperty(t.prototype,"options",{get:function(){return this._options},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"arguments",{get:function(){return this._arguments},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"observer",{get:function(){return this._observer},set:function(t){this._observer=t},enumerable:!1,configurable:!0}),t.prototype.addOption=function(t){var e=new s(t);return this._options.push(e),this},t.prototype.addArgument=function(t){var e=new a(t);return this._arguments.push(e),this},t.prototype.handle=function(t){this._observer&&this._observer.observe(this.name,new i(t))},t}(),c=function(t,e){this.name=t,this.description=e},p=function(){function t(t,e){var n=this.parseOptionPattern(t),r=n.availableNames,o=n.mainName;this.availableNames=r,this.mainName=o,this.description=e}return t.prototype.parseOptionPattern=function(t){var e=t.split("|"),n=[],r="";if(e.forEach((function(t){var e;/(?<=-|--)@?[a-zA-Z0-9]+/.test(t)&&(e=t.replace(/-|--/g,"").trim(),/^@/.test(e)&&(e=e.slice(1).trim(),r=e),n.push(e))})),!n.length&&!r)throw Error("Incorrect option patern recieved(".concat(t,")"));return r||(r=n[0]),{availableNames:n,mainName:r}},t}();var l,f=(l=function(t,e){return l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},l(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}l(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});const d=function(t){function e(e){var n=t.call(this,e,"Lists matched banks clients")||this;return n.addDefaultOptions(),n.addDefaultArguments(),n.addDefaultHandler(),n}return f(e,t),e.prototype.addDefaultOptions=function(){var t=function(t,e){return new s(new p(t,e))};this.addOption(t("-n|--@name","Specify name of the clients")).addOption(t("-bi|-@bankId","Specify id of the bank"))},e.prototype.addDefaultArguments=function(){this.addArgument(new a(new c("queryString","Specify common query string for clients query")))},e.prototype.addDefaultHandler=function(){this.handle((function(t){t.command;var e=t.optionsObj,n=t.argumentsObj;console.log("Get banks clients command executed with:",e,n)}))},e}(u);var m=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();const g=function(t){function e(e){var n=t.call(this,e,"Lists matched banks")||this;return n.addDefaultOptions(),n.addDefaultArguments(),n.addDefaultHandler(),n}return m(e,t),e.prototype.addDefaultOptions=function(){var t=function(t,e){return new s(new p(t,e))};this.addOption(t("-n|--@name","Specify name of the banks")).addOption(t("-i|-@id|--identifier","Specify id of the bank"))},e.prototype.addDefaultArguments=function(){this.addArgument(new a(new c("queryString","Specify common query string for banks query")))},e.prototype.addDefaultHandler=function(){this.handle((function(t){t.command;var e=t.optionsObj,n=t.argumentsObj;console.log("Get banks command executed with :",e,n)}))},e}(u),h=function(){function t(){this._subscriptions=new Map}return Object.defineProperty(t.prototype,"subscriptions",{get:function(){return this._subscriptions},enumerable:!1,configurable:!0}),t.prototype.observe=function(t,e){var n=this._subscriptions.get(t);n||(this._subscriptions.set(t,[]),n=this._subscriptions.get(t)),null==n||n.push(e)},t.prototype.unobserver=function(t,e){var n=this._subscriptions.get(t);null==n||n.filter((function(t){return t!==e}))},t.prototype.notify=function(t,e){var n;null===(n=this._subscriptions.get(t))||void 0===n||n.forEach((function(t){t.notify(e)}))},t}(),b=function(){function t(t){this.command=t}return Object.defineProperty(t.prototype,"name",{get:function(){return this.command.name},set:function(t){this.command.name=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"description",{get:function(){return this.command.description},set:function(t){this.command.description=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"observer",{get:function(){return this.command.observer},set:function(t){this.command.observer=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"options",{get:function(){return this.command.options},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"arguments",{get:function(){return this.command.arguments},enumerable:!1,configurable:!0}),t.prototype.addOption=function(t){return this.command.addOption(t)},t.prototype.addArgument=function(t){return this.command.addArgument(t)},t}();const y=function(){function t(t){this._observer=t,this._existCommands=new Map}return Object.defineProperty(t.prototype,"existCommands",{get:function(){return this._existCommands},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"observer",{get:function(){return this._observer},enumerable:!1,configurable:!0}),t.prototype.addCommand=function(t){var e=new b(t);return e.observer=this._observer,this._existCommands.set(e.name,e),e},t.prototype.parseAsOption=function(t,e){var n,r,o=t.match(/(?<=(--|-))(?<optName>[a-zA-Z0-9]+)(=(?<optArg>[a-zA-Z0-9]+))?/);if(null==o?void 0:o.groups){for(var i=o.groups,a=i.optName,s=i.optArg,u=!1,c=0,p=null!==(r=e.options)&&void 0!==r?r:[];c<p.length;c++){var l=p[c];if(l.availableNames.includes(a)){u=!0,a=l.mainName;break}}return u?((n={})[a]=s||!0,n):null}return null},t.prototype.parseAsArgument=function(t,e){var n;if(/^[a-zA-Z0-9]+$/.test(t)){var r=e.shift();return r?((n={})[r]=t,n):null}return null},t.prototype.parseArguments=function(){var t=this,e=process.argv.slice(2),n=!1,r="";e[0].startsWith("-")||e[0].startsWith("--")?n=!0:r=e[0];var o=this.existCommands.get(r);if(!o)throw Error("Icorrect command");var i=function(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}([],o.arguments.map((function(t){return t.name})),!0),a={},s={};return e.forEach((function(e,r){if(0!==r||n){var u=t.parseAsOption(e,o);if(u){var c=Object.keys(u)[0];if(!a[c])return a[c]=u[c]}if(0!==i.length){var p=t.parseAsArgument(e,i);if(p){var l=Object.keys(p)[0];s[l]||(s[l]=p[l])}}}})),{command:r,givenOptions:a,givenArguments:s}},t.prototype.parse=function(){var t=this.parseArguments(),e=t.command,n=t.givenArguments,r=t.givenOptions;return this._observer.notify(e,{command:e,argumentsObj:n,optionsObj:r}),t},t}();var v=function(){function t(t){this.parser=t}return Object.defineProperty(t.prototype,"existCommands",{get:function(){return this.parser.existCommands},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"observer",{get:function(){return this.parser.observer},enumerable:!1,configurable:!0}),t.prototype.addCommand=function(t){return this.parser.addCommand(t)},t.prototype.parse=function(){return this.parser.parse()},t}();const O=v,w=require("tty");var _=o.t(w,2);const{env:j={},argv:B=[],platform:C=""}="undefined"==typeof process?{}:process,A="NO_COLOR"in j||B.includes("--no-color"),P="FORCE_COLOR"in j||B.includes("--color"),S="win32"===C,k="dumb"===j.TERM,x=_&&w.isatty&&w.isatty(1)&&j.TERM&&!k,N=!A&&(P||S&&!k||x||"CI"in j&&("GITHUB_ACTIONS"in j||"GITLAB_CI"in j||"CIRCLECI"in j)),H=(t,e,n,r,o=e.substring(0,t)+r,i=e.substring(t+n.length),a=i.indexOf(n))=>o+(a<0?i:H(a,i,n,r)),D=(t,e,n)=>((t,e,n=t,r=t.length+1)=>o=>o||""!==o&&void 0!==o?((t,e,n,r,o)=>t<0?n+e+r:n+H(t,e,r,o)+r)((""+o).indexOf(e,r),o,t,e,n):"")(`[${t}m`,`[${e}m`,n),T={reset:D(0,0),bold:D(1,22,"[22m[1m"),dim:D(2,22,"[22m[2m"),italic:D(3,23),underline:D(4,24),inverse:D(7,27),hidden:D(8,28),strikethrough:D(9,29),black:D(30,39),red:D(31,39),green:D(32,39),yellow:D(33,39),blue:D(34,39),magenta:D(35,39),cyan:D(36,39),white:D(37,39),gray:D(90,39),bgBlack:D(40,49),bgRed:D(41,49),bgGreen:D(42,49),bgYellow:D(43,49),bgBlue:D(44,49),bgMagenta:D(45,49),bgCyan:D(46,49),bgWhite:D(47,49),blackBright:D(90,39),redBright:D(91,39),greenBright:D(92,39),yellowBright:D(93,39),blueBright:D(94,39),magentaBright:D(95,39),cyanBright:D(96,39),whiteBright:D(97,39),bgBlackBright:D(100,49),bgRedBright:D(101,49),bgGreenBright:D(102,49),bgYellowBright:D(103,49),bgBlueBright:D(104,49),bgMagentaBright:D(105,49),bgCyanBright:D(106,49),bgWhiteBright:D(107,49)},{reset:E,bold:I,dim:M,italic:R,underline:G,inverse:W,hidden:q,strikethrough:L,black:z,red:Y,green:Z,yellow:$,blue:F,magenta:U,cyan:J,white:K,gray:Q,bgBlack:V,bgRed:X,bgGreen:tt,bgYellow:et,bgBlue:nt,bgMagenta:rt,bgCyan:ot,bgWhite:it,blackBright:at,redBright:st,greenBright:ut,yellowBright:ct,blueBright:pt,magentaBright:lt,cyanBright:ft,whiteBright:dt,bgBlackBright:mt,bgRedBright:gt,bgGreenBright:ht,bgYellowBright:bt,bgBlueBright:yt,bgMagentaBright:vt,bgCyanBright:Ot,bgWhiteBright:wt}=(({useColor:t=N}={})=>t?T:Object.keys(T).reduce(((t,e)=>({...t,[e]:String})),{}))();var _t=function(){function t(t,e,n){void 0===t&&(t=""),void 0===e&&(e=""),this.name=t,this.description=e,this.parser=null!=n?n:null}return t.prototype.addHelpTableCommand=function(){this.parser&&this.parser.addCommand(new u("help","Shows help table")).addArgument(new a(new c("commandHelpWith"))).handle(this.onShowHelpTable.bind(this))},t.prototype.onShowHelpTable=function(t){var e=this;if(this.parser){t.command,t.optionsObj;var n=t.argumentsObj.commandHelpWith;if(n){var r=this.parser.existCommands.get(n);if(!r)return void console.log(st("Such command(".concat(String(n),") doesn't exists")));var o=this.getCommandHelpString(r);console.log(o)}else{var i="Help node fore the ".concat(this.getProgramHeaderStr()),a=Array.from(this.parser.existCommands.keys()).map((function(t){var n,r=null===(n=e.parser)||void 0===n?void 0:n.existCommands.get(t);return r?e.getCommandHelpString(r):""})).join("---------------------------------------------------\n");console.log("".concat(st(i),"\n\n").concat(a))}}},t.prototype.getProgramHeaderStr=function(){return"".concat(String(this.name)," Application\nDescription:").concat(String(this.description))},t.prototype.getCommandHelpString=function(t){var e=this,n=t.name,r=t.description,o=t.arguments,i=t.options,a="".concat(F("Command")," ").concat($(n)," ").concat(o.map((function(t){return"<".concat(ut(t.name),">")})).join(" ")," ").concat(null!=r?r:""," \n\n"),s=o.map((function(t){return e.getArgumentStr(t)})).join(""),u=s.trim()?Y("Arguments:\n")+s+"\n":"",c=i.map((function(t){return e.getOptionStr(t)})).join("");return a+u+(c?U("Options(starts with - or --):\n")+c:"")},t.prototype.getOptionStr=function(t){var e;return"  "+I(t.availableNames.join("|"))+"  "+(null!==(e=t.description)&&void 0!==e?e:"")+"\n"},t.prototype.getArgumentStr=function(t){return"  ".concat(t.description?"<".concat(ut(t.name),">  ").concat(t.description):"","\n")},t}();const jt=_t;var Bt=new O(new y(new h));Bt.addCommand(new g("getBanks")),Bt.addCommand(new d("getBanksClients")),new jt("Bank-cli","CLI Application for bank management",Bt).addHelpTableCommand();var Ct=Bt.parse();console.log(Ct)})();