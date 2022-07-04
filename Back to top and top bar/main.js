/* PrismJS 1.14.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript */
var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-([\w-]+)\b/i,t=0,n=_self.Prism={manual:_self.Prism&&_self.Prism.manual,disableWorkerMessageHandler:_self.Prism&&_self.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e,t){var r=n.util.type(e);switch(t=t||{},r){case"Object":if(t[n.util.objId(e)])return t[n.util.objId(e)];var a={};t[n.util.objId(e)]=a;for(var l in e)e.hasOwnProperty(l)&&(a[l]=n.util.clone(e[l],t));return a;case"Array":if(t[n.util.objId(e)])return t[n.util.objId(e)];var a=[];return t[n.util.objId(e)]=a,e.forEach(function(e,r){a[r]=n.util.clone(e,t)}),a}return e}},languages:{extend:function(e,t){var r=n.util.clone(n.languages[e]);for(var a in t)r[a]=t[a];return r},insertBefore:function(e,t,r,a){a=a||n.languages;var l=a[e];if(2==arguments.length){r=arguments[1];for(var i in r)r.hasOwnProperty(i)&&(l[i]=r[i]);return l}var o={};for(var s in l)if(l.hasOwnProperty(s)){if(s==t)for(var i in r)r.hasOwnProperty(i)&&(o[i]=r[i]);o[s]=l[s]}return n.languages.DFS(n.languages,function(t,n){n===a[e]&&t!=e&&(this[t]=o)}),a[e]=o},DFS:function(e,t,r,a){a=a||{};for(var l in e)e.hasOwnProperty(l)&&(t.call(e,l,e[l],r||l),"Object"!==n.util.type(e[l])||a[n.util.objId(e[l])]?"Array"!==n.util.type(e[l])||a[n.util.objId(e[l])]||(a[n.util.objId(e[l])]=!0,n.languages.DFS(e[l],t,l,a)):(a[n.util.objId(e[l])]=!0,n.languages.DFS(e[l],t,null,a)))}},plugins:{},highlightAll:function(e,t){n.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,r){var a={callback:r,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",a);for(var l,i=a.elements||e.querySelectorAll(a.selector),o=0;l=i[o++];)n.highlightElement(l,t===!0,a.callback)},highlightElement:function(t,r,a){for(var l,i,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(l=(o.className.match(e)||[,""])[1].toLowerCase(),i=n.languages[l]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+l,t.parentNode&&(o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+l));var s=t.textContent,u={element:t,language:l,grammar:i,code:s};if(n.hooks.run("before-sanity-check",u),!u.code||!u.grammar)return u.code&&(n.hooks.run("before-highlight",u),u.element.textContent=u.code,n.hooks.run("after-highlight",u)),n.hooks.run("complete",u),void 0;if(n.hooks.run("before-highlight",u),r&&_self.Worker){var g=new Worker(n.filename);g.onmessage=function(e){u.highlightedCode=e.data,n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a&&a.call(u.element),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=n.highlight(u.code,u.grammar,u.language),n.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a&&a.call(t),n.hooks.run("after-highlight",u),n.hooks.run("complete",u)},highlight:function(e,t,a){var l={code:e,grammar:t,language:a};return n.hooks.run("before-tokenize",l),l.tokens=n.tokenize(l.code,l.grammar),n.hooks.run("after-tokenize",l),r.stringify(n.util.encode(l.tokens),l.language)},matchGrammar:function(e,t,r,a,l,i,o){var s=n.Token;for(var u in r)if(r.hasOwnProperty(u)&&r[u]){if(u==o)return;var g=r[u];g="Array"===n.util.type(g)?g:[g];for(var c=0;c<g.length;++c){var h=g[c],f=h.inside,d=!!h.lookbehind,m=!!h.greedy,p=0,y=h.alias;if(m&&!h.pattern.global){var v=h.pattern.toString().match(/[imuy]*$/)[0];h.pattern=RegExp(h.pattern.source,v+"g")}h=h.pattern||h;for(var b=a,k=l;b<t.length;k+=t[b].length,++b){var w=t[b];if(t.length>e.length)return;if(!(w instanceof s)){if(m&&b!=t.length-1){h.lastIndex=k;var _=h.exec(e);if(!_)break;for(var j=_.index+(d?_[1].length:0),P=_.index+_[0].length,A=b,x=k,O=t.length;O>A&&(P>x||!t[A].type&&!t[A-1].greedy);++A)x+=t[A].length,j>=x&&(++b,k=x);if(t[b]instanceof s)continue;I=A-b,w=e.slice(k,x),_.index-=k}else{h.lastIndex=0;var _=h.exec(w),I=1}if(_){d&&(p=_[1]?_[1].length:0);var j=_.index+p,_=_[0].slice(p),P=j+_.length,N=w.slice(0,j),S=w.slice(P),C=[b,I];N&&(++b,k+=N.length,C.push(N));var E=new s(u,f?n.tokenize(_,f):_,y,_,m);if(C.push(E),S&&C.push(S),Array.prototype.splice.apply(t,C),1!=I&&n.matchGrammar(e,t,r,b,k,!0,u),i)break}else if(i)break}}}}},tokenize:function(e,t){var r=[e],a=t.rest;if(a){for(var l in a)t[l]=a[l];delete t.rest}return n.matchGrammar(e,r,t,0,0,!1),r},hooks:{all:{},add:function(e,t){var r=n.hooks.all;r[e]=r[e]||[],r[e].push(t)},run:function(e,t){var r=n.hooks.all[e];if(r&&r.length)for(var a,l=0;a=r[l++];)a(t)}}},r=n.Token=function(e,t,n,r,a){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length,this.greedy=!!a};if(r.stringify=function(e,t,a){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return r.stringify(n,t,e)}).join("");var l={type:e.type,content:r.stringify(e.content,t,a),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:a};if(e.alias){var i="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(l.classes,i)}n.hooks.run("wrap",l);var o=Object.keys(l.attributes).map(function(e){return e+'="'+(l.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+l.tag+' class="'+l.classes.join(" ")+'"'+(o?" "+o:"")+">"+l.content+"</"+l.tag+">"},!_self.document)return _self.addEventListener?(n.disableWorkerMessageHandler||_self.addEventListener("message",function(e){var t=JSON.parse(e.data),r=t.language,a=t.code,l=t.immediateClose;_self.postMessage(n.highlight(a,n.languages[r],r)),l&&_self.close()},!1),_self.Prism):_self.Prism;var a=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return a&&(n.filename=a.src,n.manual||a.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism);
Prism.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/(^|[^\\])["']/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup;
Prism.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^{}\s][^{};]*?(?=\s*\{)/,string:{pattern:/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.languages.css,Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\s\S]*?>)[\s\S]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css",greedy:!0}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag));
Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(?:true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/};
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,"function":/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*\()/i,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[[^\]\r\n]+]|\\.|[^\/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i,alias:"function"},constant:/\b[A-Z][A-Z\d_]*\b/}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}}}),Prism.languages.javascript["template-string"].inside.interpolation.inside.rest=Prism.languages.javascript,Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript",greedy:!0}}),Prism.languages.js=Prism.languages.javascript;

/*!
 * clipboard.js v1.7.1
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,o){function i(a,c){if(!n[a]){if(!e[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return i(n||t)},u,u.exports,t,e,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(t,e,n){function o(t,e){for(;t&&t.nodeType!==i;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var i=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}e.exports=o},{}],2:[function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}var r=t("./closest");e.exports=o},{"./closest":1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{}],4:[function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return i(t,e,n);if(c.nodeList(t))return r(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return l(document.body,t,e,n)}var c=t("./is"),l=t("delegate");e.exports=o},{"./is":3,delegate:2}],5:[function(t,e,n){function o(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(t),o.removeAllRanges(),o.addRange(i),e=o.toString()}return e}e.exports=o},{}],6:[function(t,e,n){function o(){}o.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;r<a;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},e.exports=o},{}],7:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","select"],r);else if(void 0!==o)r(n,e("select"));else{var a={exports:{}};r(a,i.select),i.clipboardAction=a.exports}}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function t(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function t(){var e=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function t(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function t(){this.selectedText=(0,i.default)(this.target),this.copyText()}},{key:"copyText",value:function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function t(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function t(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function t(){this.removeFake()}},{key:"action",set:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function t(){return this._target}}]),t}();t.exports=c})},{select:5}],8:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if(void 0!==o)r(n,e("./clipboard-action"),e("tiny-emitter"),e("good-listener"));else{var a={exports:{}};r(a,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=a.exports}}(this,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var s=i(e),u=i(n),f=i(o),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(t,n){r(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return c(e,t),h(e,[{key:"resolveOptions",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===d(e.container)?e.container:document.body}},{key:"listenClick",value:function t(e){var n=this;this.listener=(0,f.default)(e,"click",function(t){return n.onClick(t)})}},{key:"onClick",value:function t(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(n),target:this.target(n),text:this.text(n),container:this.container,trigger:n,emitter:this})}},{key:"defaultAction",value:function t(e){return l("action",e)}},{key:"defaultTarget",value:function t(e){var n=l("target",e);if(n)return document.querySelector(n)}},{key:"defaultText",value:function t(e){return l("text",e)}},{key:"destroy",value:function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],n="string"==typeof e?[e]:e,o=!!document.queryCommandSupported;return n.forEach(function(t){o=o&&!!document.queryCommandSupported(t)}),o}}]),e}(u.default);t.exports=p})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});

/* Elegant Scroll to Top – Back to Top JavaScript Plugin */
!function(){var o={id:null,title:"Scroll to top",displayOffset:1e3,scrollAnimationDuration:750,theme:"theme-black",position:"bottom-right",buttonAnimationType:"zoom",margin:"16px",width:"52px",height:"52px",zIndex:1e3,borderWidth:"3px",borderColor:"#fff",borderColorHover:"#fff",borderColorFocus:"#fff",borderColorActive:"#fff",borderRadius:"999px",bgColor:null,bgColorOpacity:1,bgColorHover:null,bgColorHoverOpacity:1,bgColorFocus:null,bgColorFocusOpacity:1,bgColorActive:null,bgColorActiveOpacity:1,boxShadowEnabled:!0,boxShadowHorizontalOffset:"0px",boxShadowVerticalOffset:"0px",boxShadowBlur:"10px",boxShadowSpread:"0px",boxShadowColor:"#000",boxShadowOpacity:.05,iconType:"icon1",iconCustomElement:null,iconSize:"16px",iconColor:null,iconColorHover:null,iconColorFocus:null,iconColorActive:null,onShow:null,onHide:null,onScrollStart:null,onScrollEnd:null};function t(t){var e;this.baseName="elegant-scroll-to-top",this.options=this.extend(!0,o,t),null===this.options.id?this.scrollToPos=0:(e=document.getElementById(this.options.id))&&(this.scrollToPos=(window.pageYOffset||window.pageYOffset||document.documentElement.scrollTop)+e.getBoundingClientRect().top)}t.prototype.init=function(){var o=this;o.addTpl(),o.scrollToTopDisplay(),o.addStyle(),o.el=document.getElementById(o.baseName),o.el.addEventListener("click",function(t){t.preventDefault(),"function"==typeof o.options.onScrollStart&&o.options.onScrollStart(),o.scrollTo(o.scrollToPos,o.options.scrollAnimationDuration,function(){"function"==typeof o.options.onScrollEnd&&o.options.onScrollEnd()})})},t.prototype.hideStatus=!1,t.prototype.showStatus=!1,t.prototype.extend=function(){var o={},t=!1,e=0;"boolean"==typeof arguments[0]&&!0===arguments[0]&&(t=arguments[0],e++);for(var n=function(e){for(var n in e)e.hasOwnProperty(n)&&(t&&"[object Object]"===Object.prototype.toString.call(e[n])?o[n]=this.extend(o[n],e[n]):o[n]=e[n])};e<arguments.length;e++)n(arguments[e]);return o},t.prototype.scrollToTopDisplay=function(){var o,t,e,n;function l(){if((window.scrollY||window.pageYOffset||document.documentElement.scrollTop)>n)return t.classList.add(e),void("function"!=typeof o.options.onShow||o.showStatus||(o.options.onShow(),o.showStatus=!0,o.hideStatus=!1));t.classList.contains(e)&&("function"!=typeof o.options.onHide||o.hideStatus||(o.options.onHide(),o.hideStatus=!0,o.showStatus=!1),t.classList.remove(e))}o=this,t=document.getElementById(this.baseName),e=this.baseName+"--is-active",n=window.parseInt(this.options.displayOffset,10),l(),window.addEventListener("scroll",l)},t.prototype.scrollTo=function(t,e,n){var l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(o){window.setTimeout(o,1e3/60)};var i=document.documentElement.scrollTop||document.body.scrollTop,r=t-i,s=0,c=this.baseName+"--is-animated";e=null==e?o.scrollAnimationDuration:e,document.documentElement.classList.add(c),document.body.classList.add(c);!function o(){var t,a,d=(t=s+=20,-r*(t/=e)*(t-2)+i);a=d,document.documentElement.scrollTop=a,document.body.scrollTop=a,s<e?l(o):n&&"function"==typeof n&&(document.documentElement.classList.remove(c),document.body.classList.remove(c),n())}()},t.prototype.getIcon=function(o){var t,e;return e="","custom"===o?e+=this.options.iconCustomElement?this.options.iconCustomElement:"":(t={icon1:'<path d="M3.6 18.4L12 10l8.4 8.4c.9.9 2.1.9 3 0 .9-.9.9-2.1 0-3l-9.9-9.9c-.9-.9-2.1-.9-3 0L.6 15.4c-.9.9-.9 2.1 0 3 .9.9 2.2.9 3 0z"/>',icon2:'<path d="M23.4,10.6l-9.9-9.9c-0.9-0.9-2.1-0.9-3,0l-9.9,9.9c-0.9,0.9-0.9,2.1,0,3c0.9,0.9,2.2,0.9,3,0l6.2-6.2v14.5 c0,1.3,0.8,2.1,2.1,2.1s2.2-0.9,2.1-2.1V7.2l6.4,6.4c0.9,0.9,2.1,0.9,3,0C24.3,12.7,24.3,11.5,23.4,10.6z"/>',icon3:'<path d="M23.4,20.3l-9.9-9.9c-0.9-0.9-2.1-0.9-3,0l-9.9,9.9c-0.9,0.9-0.9,2.1,0,3c0.9,0.9,2.2,0.9,3,0l8.4-8.4l8.4,8.4 c0.9,0.9,2.1,0.9,3,0C24.3,22.4,24.3,21.2,23.4,20.3z"/><path d="M2.1,4.2h5v0h14.7c1.3,0,2.1-0.8,2.1-2.1S23.1-0.1,21.9,0h-5v0H2.1C0.8,0,0,0.8,0,2.1S0.9,4.3,2.1,4.2z"/>',icon4:'<path d="M10.6,7.5l-6.9,6.9c-1.3,1.3-0.4,3.4,1.4,3.4h13.8c1.8,0,2.7-2.2,1.4-3.4l-6.9-6.9C12.6,6.8,11.4,6.8,10.6,7.5z"/>'},e+='<svg class="'+this.baseName+'__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">',e+=t[o],e+="</svg>"),e},t.prototype.getTpl=function(){var o,t;return o="",t=this.getIcon(this.options.iconType),o+='<div class="'+this.baseName+" "+this.baseName+"--"+(this.options.theme?this.options.theme:"theme-black")+" "+this.baseName+"--"+this.options.position+" "+this.baseName+"--"+this.options.buttonAnimationType+'" id="'+this.baseName+'">',o+='<a class="'+this.baseName+'__btn" aria-label="'+this.options.title+'" title="'+this.options.title+'" href="#">',o+=t,o+="</a>",o+="</div>"},t.prototype.hexToRgba=function(o,t){var e;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(o))return 3===(e=o.substring(1).split("")).length&&(e=[e[0],e[0],e[1],e[1],e[2],e[2]]),"rgba("+[(e="0x"+e.join(""))>>16&255,e>>8&255,255&e].join(",")+","+t+")";throw new Error("Bad hex value!")},t.prototype.getStyle=function(){var o,t;return o="",null!==(t=this.options).margin&&null!==t.zIndex&&(o+=".elegant-scroll-to-top { ",o+=t.margin?"margin: "+t.margin+"; ":"",o+=t.zIndex?"z-index: "+t.zIndex+"; ":"",o+="}\n"),o+=".elegant-scroll-to-top .elegant-scroll-to-top__btn { ",o+=t.width?"width: "+t.width+"; ":"",o+=t.height?"height: "+t.height+"; ":"",o+=window.parseInt(t.borderWidth,10)&&t.borderColor?"border: "+t.borderWidth+" solid "+t.borderColor+"; ":"",o+=t.borderRadius?"border-radius: "+t.borderRadius+"; ":"",t.bgColor&&(o+="background-color: "+this.hexToRgba(t.bgColor,t.bgColorOpacity)+"; "),t.boxShadowEnabled&&(o+="-webkit-box-shadow: "+t.boxShadowHorizontalOffset+" "+t.boxShadowVerticalOffset+" "+t.boxShadowBlur+" "+t.boxShadowSpread+" "+this.hexToRgba(t.boxShadowColor,t.boxShadowOpacity)+"; ",o+="box-shadow: "+t.boxShadowHorizontalOffset+" "+t.boxShadowVerticalOffset+" "+t.boxShadowBlur+" "+t.boxShadowSpread+" "+this.hexToRgba(t.boxShadowColor,t.boxShadowOpacity)+"; "),o+="}\n",(t.bgColorHover||t.borderColorHover)&&(o+=".elegant-scroll-to-top .elegant-scroll-to-top__btn:hover { ",t.bgColorHover&&(o+="background-color: "+this.hexToRgba(t.bgColorHover,t.bgColorHoverOpacity)+"; "),o+=window.parseInt(t.borderWidth,10)&&t.borderColorHover?"border: "+t.borderWidth+" solid "+t.borderColorHover+"; ":"",o+="}\n"),(t.bgColorFocus||t.borderColorFocus)&&(o+=".elegant-scroll-to-top .elegant-scroll-to-top__btn:focus { ",t.bgColorFocus&&(o+="background-color: "+this.hexToRgba(t.bgColorFocus,t.bgColorFocusOpacity)+"; "),o+=window.parseInt(t.borderWidth,10)&&t.borderColorFocus?"border: "+t.borderWidth+" solid "+t.borderColorFocus+"; ":"",o+="}\n"),(t.bgColorActive||t.borderColorActive)&&(o+=".elegant-scroll-to-top .elegant-scroll-to-top__btn:active { ",t.bgColorActive&&(o+="background-color: "+this.hexToRgba(t.bgColorActive,t.bgColorActiveOpacity)+"; "),o+=window.parseInt(t.borderWidth,10)&&t.borderColorActive?"border: "+t.borderWidth+" solid "+t.borderColorActive+"; ":"",o+="}\n"),(t.iconColor||t.iconSize)&&(o+=".elegant-scroll-to-top .elegant-scroll-to-top__btn .elegant-scroll-to-top__icon { ",t.iconColor&&("custom"===t.iconType?o+="color: "+t.iconColor+"; ":o+="fill: "+t.iconColor+"; "),t.iconSize&&("custom"===t.iconType?o+="font-size: "+t.iconSize+"; ":(o+="width: "+t.iconSize+"; ",o+="height: "+t.iconSize+"; ")),o+="}\n"),t.iconColorHover&&(o+=".elegant-scroll-to-top .elegant-scroll-to-top__btn:hover .elegant-scroll-to-top__icon { ","custom"===t.iconType?o+="color: "+t.iconColorHover+"; ":o+="fill: "+t.iconColorHover+"; ",o+="}\n"),t.iconColorFocus&&(o+=".elegant-scroll-to-top .elegant-scroll-to-top__btn:focus .elegant-scroll-to-top__icon { ","custom"===t.iconType?o+="color: "+t.iconColorFocus+"; ":o+="fill: "+t.iconColorFocus+"; ",o+="}\n"),t.iconColorActive&&(o+=".elegant-scroll-to-top .elegant-scroll-to-top__btn:active .elegant-scroll-to-top__icon { ","custom"===t.iconType?o+="color: "+t.iconColorActive+"; ":o+="fill: "+t.iconColorActive+"; ",o+="}\n"),o},t.prototype.addStyle=function(){var o=this.getStyle();o='<style id="'+this.baseName+'-style">'+o+"</style>",document.querySelector("head").insertAdjacentHTML("beforeend",o)},t.prototype.addTpl=function(){var o=this.getTpl();document.body.insertAdjacentHTML("beforeend",o)},window.ElegantScrollToTop=t}();

/* GDPR Cookie Law */
!function(t){var o,n,i,e;function a(t){this.element=document,this.options=this.extend(!0,e,t)}o="gdpr-cookie-law",i=["fade","slide","fade-slide"],e={expire:365,breakpoint:"768px",zIndex:1e9,delay:null,theme:null,animationStatus:!0,animationDuration:500,animationName:"fade",position:"bottom",margin:null,padding:"20px",width:"auto",bgColor:"#09a0e1",bgColorOpacity:1,boxShadowStatus:!0,boxShadowHorizonalOffset:"0px",boxShadowVerticalOffset:"0px",boxShadowBlur:"30px",boxShadowSpread:"0px",boxShadowColor:"#000",boxShadowOpacity:.05,fontFamily:null,fontSize:"16px",fontWeight:"normal",color:"#fff",contentWidth:"auto",iconStatus:!0,iconHideBelowBreakpointStatus:!1,iconHorizontalSpace:"1em",iconVerticalSpace:"0.5em",iconSize:"24px",iconColor:"currentColor",desc:"We use cookies to ensure that we give you the best experience on our website. By continuing to use our site, you accept our cookie policy.",contentAndBtnHorizontalSpace:"3em",contentAndBtnVerticalSpace:"2em",customAnchors:null,moreLinkStatus:!0,moreLinkDecorationStatus:!0,moreLinkDecorationType:"dotted",moreLinkText:"More information",moreLinkColor:"#fff",moreLinkFontFamily:null,moreLinkFontSize:"16px",moreLinkFontWeight:"bold",moreLinkHref:null,btnAcceptText:"Accept",btnAcceptPaddingTop:"15px",btnAcceptPaddingRight:"56px",btnAcceptPaddingBottom:"13px",btnAcceptPaddingLeft:"56px",btnAcceptBgColor:"#0780c0",btnAcceptBgColorHover:"#0670b0",btnAcceptBgColorFocus:"#0670b0",btnAcceptBgColorActive:"#0670b0",btnAcceptColor:"#fff",btnAcceptColorHover:"#fff",btnAcceptColorFocus:"#fff",btnAcceptColorActive:"#fff",btnAcceptBorderRadius:"999px",btnAcceptFontFamily:null,btnAcceptFontSize:"14px",btnAcceptFontWeight:"bold"},a.prototype.init=function(){var t,o,i;function e(){t.setStyle(o),t.setTpl(o),t.setAnimationName(n,o,"in"),t.accept(n,o),t.forceSmByWidth(n,o),t.resize(n,o)}o=(t=this).options,(i=parseInt(o.delay,10))?i>0&&setTimeout(e,i):e()},a.prototype.extend=function(){var t={},o=!1,n=0;"boolean"==typeof arguments[0]&&!0===arguments[0]&&(o=arguments[0],n++);for(var i=function(n){for(var i in n)n.hasOwnProperty(i)&&(o&&"[object Object]"===Object.prototype.toString.call(n[i])?t[i]=this.extend(t[i],n[i]):t[i]=n[i])};n<arguments.length;n++)i(arguments[n]);return t},a.prototype.hexToRgba=function(t,o){var n;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(t))return 3===(n=t.substring(1).split("")).length&&(n=[n[0],n[0],n[1],n[1],n[2],n[2]]),"rgba("+[(n="0x"+n.join(""))>>16&255,n>>8&255,255&n].join(",")+","+o+")";throw new Error("Bad hex value!")},a.prototype.one=function(t,o,n,i,e){t.addEventListener(o,function i(a){t.removeEventListener(o,i,e),n.apply(this,arguments)},i)},a.prototype.whichAnimationEndEvent=function(){var t,o=document.createElement("fakeelement"),n={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(t in n)if(void 0!==o.style[t])return n[t]},a.prototype.setAnimationName=function(t,n,e,a){var c,r,d,p,l,m;n.animationStatus&&(-1!==i.indexOf(n.animationName)&&("fade"===n.animationName?(r="fade-in",d="fade-out"):"slide"===n.animationName?/^top/.test(n.position)?(r="slide-in-down",d="slide-out-up"):/^bottom/.test(n.position)&&(r="slide-in-up",d="slide-out-down"):"fade-slide"===n.animationName&&(/^top/.test(n.position)?(r="fade-in-down",d="fade-out-up"):/^bottom/.test(n.position)&&(r="fade-in-up",d="fade-out-down")),"in"===e?c=r:"out"===e&&(c=d),l=o+"--animation-"+c,m=o+"--animated",[o+"--animation-fade-in",o+"--animation-fade-out",o+"--animation-slide-in-up",o+"--animation-slide-in-down",o+"--animation-slide-out-up",o+"--animation-slide-out-down"].forEach(function(o){t.classList.remove(o)}),t.classList.add(l),t.classList.add(m),p=this.whichAnimationEndEvent(),this.one(t,p,function(){this.classList.remove(l),this.classList.remove(m),a&&"function"==typeof a&&a()})))},a.prototype.setStyle=function(t){var n,i={animation:""};i.animation+=t.animationStatus?" -webkit-animation-duration: "+t.animationDuration+"ms; animation-duration: "+t.animationDuration+"ms;":"",i.zIndex="",i.zIndex+=" z-index: "+t.zIndex+";",i.top="",i.top+="top"===t.position?" top: 0; bottom: initial;":"",i.bottom="",i.bottom+="bottom"===t.position?" bottom: 0; top: initial;":"",i.bottomLeft="",i.bottomLeft+="bottom-left"===t.position?" bottom: "+(t.margin?t.margin+";":"0;")+" top: initial; left: "+(t.margin?t.margin+";":"0;")+" right: initial;":"",i.bottomCenter="",i.bottomCenter+="bottom-center"===t.position?" bottom: "+(t.margin?t.margin+";":"0;")+" top: initial; right: 0; left: 0; margin-left: auto; margin-right: auto;":"",i.bottomRight="",i.bottomRight+="bottom-right"===t.position?" bottom: "+(t.margin?t.margin+";":"0;")+" top: initial; right: "+(t.margin?t.margin+";":"0;")+" left: initial;":"",i.topLeft="",i.topLeft+="top-left"===t.position?" top: "+(t.margin?t.margin+";":"0;")+" bottom: initial; left: "+(t.margin?t.margin+";":"0;")+" right: initial; margin-left: auto; margin-right: auto;":"",i.topCenter="",i.topCenter+="top-center"===t.position?" top: "+(t.margin?t.margin+";":"0;")+" bottom: initial; right: 0; left: 0; margin-left: auto; margin-right: auto;":"",i.topRight="",i.topRight+="top-right"===t.position?" top: "+(t.margin?t.margin+";":"0;")+" bottom: initial; right: "+(t.margin?t.margin+";":"0;")+" left: initial;":"",i.padding="",i.padding+=t.padding?" padding: "+t.padding+";":"",i.width="",i.width+=t.width?" width: "+t.width+";":"",i.width+=t.margin?" max-width: -webkit-calc(100% - "+2*window.parseInt(t.margin,10)+"px); max-width: calc(100% - "+2*window.parseInt(t.margin,10)+"px);":"",i.bgColor="",i.bgColor+=t.bgColor?" background-color: "+this.hexToRgba(t.bgColor,t.bgColorOpacity)+";":"",i.boxShadow="",i.boxShadow+=t.boxShadowStatus?" -webkit-box-shadow: "+t.boxShadowHorizonalOffset+" "+t.boxShadowVerticalOffset+" "+t.boxShadowBlur+" "+t.boxShadowSpread+" "+this.hexToRgba(t.boxShadowColor,t.boxShadowOpacity)+";":"",i.boxShadow+=t.boxShadowStatus?" -moz-box-shadow: "+t.boxShadowHorizonalOffset+" "+t.boxShadowVerticalOffset+" "+t.boxShadowBlur+" "+t.boxShadowSpread+" "+this.hexToRgba(t.boxShadowColor,t.boxShadowOpacity)+";":"",i.boxShadow+=t.boxShadowStatus?" box-shadow: "+t.boxShadowHorizonalOffset+" "+t.boxShadowVerticalOffset+" "+t.boxShadowBlur+" "+t.boxShadowSpread+" "+this.hexToRgba(t.boxShadowColor,t.boxShadowOpacity)+";":"",i.fontFamily=t.fontFamily?" font-family: "+t.fontFamily+";":"",i.fontSize="",i.fontSize+=t.fontSize?" font-size: "+t.fontSize+";":"",i.fontWeight="",i.fontWeight+=t.fontWeight?" font-weight: "+t.fontWeight+";":"",i.color="",i.color+=t.color?" color: "+t.color+";":"",t.iconStatus&&(i.iconBoxHide="",i.iconBoxHide+=" display: none;",i.iconBoxSize="",i.iconBoxSize+=" width: "+t.iconSize+";",i.iconBoxSm="",i.iconBoxSm+=" margin-bottom: "+t.iconVerticalSpace+"; margin-left: auto; margin-right: auto;",i.iconBoxLg="",i.iconBoxLg+=" margin-bottom: 0; margin-left: 0; margin-right: "+t.iconHorizontalSpace+";",i.iconColor="",i.iconColor+=" color: "+t.iconColor+";",i.iconSize="",i.iconSize+=" width: "+t.iconSize+"; height: "+t.iconSize+";"),i.contentAndBtnHorizontalSpace="",i.contentAndBtnHorizontalSpace+=t.contentAndBtnHorizontalSpace?" padding-bottom: 0; padding-right: "+t.contentAndBtnHorizontalSpace+";":"",i.contentAndBtnVerticalSpace="",i.contentAndBtnVerticalSpace+=t.contentAndBtnVerticalSpace?" padding-right: 0; padding-bottom: "+t.contentAndBtnVerticalSpace+";":"",i.contentWidth="",i.contentWidth+=t.contentWidth?" width: "+t.contentWidth+";":"",i.moreLinkDecoration="",i.moreLinkDecoration+="none"!==t.moreLinkDecorationType?" border-bottom: 1px "+t.moreLinkDecorationType+" currentColor;":"",i.moreLinkColor="",i.moreLinkColor+=t.moreLinkColor?" color: "+t.moreLinkColor+";":"",i.moreLinkFontFamily="",i.moreLinkFontFamily+=t.moreLinkFontFamily?" font-family: "+t.moreLinkFontFamily+";":"",i.moreLinkFontSize="",i.moreLinkFontSize+=t.moreLinkFontSize?" font-size: "+t.moreLinkFontSize+";":"",i.moreLinkFontWeight="",i.moreLinkFontWeight+=t.moreLinkFontWeight?" font-weight: "+t.moreLinkFontWeight+";":"",i.btnAcceptPaddingTop="",i.btnAcceptPaddingTop+=t.btnAcceptPaddingTop?" padding-top: "+t.btnAcceptPaddingTop+";":"",i.btnAcceptPaddingRight="",i.btnAcceptPaddingRight+=t.btnAcceptPaddingRight?" padding-right: "+t.btnAcceptPaddingRight+";":"",i.btnAcceptPaddingBottom="",i.btnAcceptPaddingBottom+=t.btnAcceptPaddingBottom?" padding-bottom: "+t.btnAcceptPaddingBottom+";":"",i.btnAcceptPaddingLeft="",i.btnAcceptPaddingLeft+=t.btnAcceptPaddingLeft?" padding-left: "+t.btnAcceptPaddingLeft+";":"",i.btnAcceptBgColor="",i.btnAcceptBgColor+=t.btnAcceptBgColor?" background-color: "+t.btnAcceptBgColor+";":"",i.btnAcceptBgColorHover="",i.btnAcceptBgColorHover+=t.btnAcceptBgColorHover?" background-color: "+t.btnAcceptBgColorHover+";":"",i.btnAcceptBgColorFocus="",i.btnAcceptBgColorFocus+=t.btnAcceptBgColorFocus?" background-color: "+t.btnAcceptBgColorFocus+";":"",i.btnAcceptBgColorActive="",i.btnAcceptBgColorActive+=t.btnAcceptBgColorActive?" background-color: "+t.btnAcceptBgColorActive+";":"",i.btnAcceptColor="",i.btnAcceptColor+=t.btnAcceptColor?" color: "+t.btnAcceptColor+";":"",i.btnAcceptColorHover="",i.btnAcceptColorHover+=t.btnAcceptColorHover?" color: "+t.btnAcceptColorHover+";":"",i.btnAcceptColorFocus="",i.btnAcceptColorFocus+=t.btnAcceptColorFocus?" color: "+t.btnAcceptColorFocus+";":"",i.btnAcceptColorActive="",i.btnAcceptColorActive+=t.btnAcceptColorActive?" color: "+t.btnAcceptColorActive+";":"",i.btnAcceptBorderRadius="",i.btnAcceptBorderRadius+=t.btnAcceptBorderRadius?" border-radius: "+t.btnAcceptBorderRadius+";":"",i.btnAcceptFontFamily="",i.btnAcceptFontFamily+=t.btnAcceptFontFamily?" font-family: "+t.btnAcceptFontFamily+";":"",i.btnAcceptFontSize="",i.btnAcceptFontSize+=t.btnAcceptFontSize?" font-size: "+t.btnAcceptFontSize+";":"",i.btnAcceptFontWeight="",i.btnAcceptFontWeight+=t.btnAcceptFontWeight?" font-weight: "+t.btnAcceptFontWeight+";":"",n="",n+="."+o+" {"+i.animation+i.zIndex+i.top+i.bottom+i.bottomLeft+i.bottomCenter+i.bottomRight+i.topLeft+i.topCenter+i.topRight+i.padding+i.width+i.bgColor+i.boxShadow+i.fontFamily+i.fontSize+i.fontWeight+i.color+" }\r\n",t.animationStatus&&"fade"===t.animationName&&(n+="."+o+"--animation-fade-in { -webkit-animation-name: "+o+"-fade-in; animation-name: "+o+"-fade-in; }\r\n",n+="."+o+"--animation-fade-out { -webkit-animation-name: "+o+"-fade-out; animation-name: "+o+"-fade-out; }\r\n"),t.animationStatus&&"slide"===t.animationName&&(n+="."+o+"--animation-fade-slide-in-up { -webkit-animation-name: "+o+"-slide-in-up; animation-name: "+o+"-slide-in-up; }\r\n",n+="."+o+"--animation-fade-slide-in-down { -webkit-animation-name: "+o+"-slide-in-down; animation-name: "+o+"-slide-in-down; }\r\n",n+="."+o+"--animation-fade-slide-out-up { -webkit-animation-name: "+o+"-slide-out-up; animation-name: "+o+"-slide-out-up; }\r\n",n+="."+o+"--animation-fade-slide-out-down { -webkit-animation-name: "+o+"-slide-out-down; animation-name: "+o+"-slide-out-down; }\r\n"),n+="."+o+"__body {"+i.contentWidth+" }\r\n",t.iconStatus&&(n+="."+o+"__icon-box {"+i.iconBoxSize+" }\r\n",n+="."+o+"--sm ."+o+"__icon-box, ."+o+"--sm-fix ."+o+"__icon-box {"+i.iconBoxSm+" }\r\n",n+="."+o+":not(."+o+"--sm):not(."+o+"--sm-fix) ."+o+"__icon-box {"+i.iconBoxLg+" }\r\n",n+="."+o+"--sm ."+o+"__icon-box--sm-hide, ."+o+"--sm-fix ."+o+"__icon-box--sm-hide { "+i.iconBoxHide+" }\r\n",n+="."+o+"__icon {"+i.iconSize+i.iconColor+" }\r\n"),n+="."+o+"__desc {"+i.contentAndBtnHorizontalSpace+" }\r\n",n+="."+o+"--sm ."+o+"__desc, ."+o+"--sm-fix ."+o+"__desc {"+i.contentAndBtnVerticalSpace+" }\r\n",n+="."+o+"__link {"+i.moreLinkDecoration+i.moreLinkColor+i.moreLinkFontFamily+i.moreLinkFontSize+i.moreLinkFontWeight+" }\r\n",n+="."+o+"__btn--accept {"+i.btnAcceptPaddingTop+i.btnAcceptPaddingRight+i.btnAcceptPaddingBottom+i.btnAcceptPaddingLeft+i.btnAcceptBgColor+i.btnAcceptColor+i.btnAcceptBorderRadius+i.btnAcceptFontFamily+i.btnAcceptFontSize+i.btnAcceptFontWeight+" }\r\n",n+="."+o+"__btn--accept:hover {"+i.btnAcceptBgColorHover+i.btnAcceptColorHover+" }\r\n",n+="."+o+"__btn--accept:focus {"+i.btnAcceptBgColorFocus+i.btnAcceptColorFocus+" }\r\n",n+="."+o+"__btn--accept:active {"+i.btnAcceptBgColorActive+i.btnAcceptColorActive+" }\r\n",document.querySelector("head").insertAdjacentHTML("beforeend",'<style id="'+o+'-style">'+n+"</style>")},a.prototype.getTpl=function(t){var n="";return n+='<div class="'+o+(null!==this.getCookie(o)?" "+o+"--is-hidden":"")+(null!==t.theme?" "+o+"--"+t.theme:"")+'" id="'+o+'">',n+='<div class="'+o+'__body">',t.iconStatus&&(n+='<div class="'+o+"__icon-box"+(t.iconHideBelowBreakpointStatus?" "+o+"__icon-box--sm-hide":"")+'">',n+='<svg class="'+o+'__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">',n+='<path d="M19.098 11.266a3.809 3.809 0 01-.924-1.577 3.001 3.001 0 01-3.188-.679 3 3 0 01-.678-3.187 3.836 3.836 0 01-1.577-.923c-1.334-1.334-1.438-3.414-.346-4.882C12.259.016 12.131 0 12 0c-.646 0-1.277.063-1.896.165l-.02.003a13.098 13.098 0 00-1.119.234 12.557 12.557 0 00-1.094.343c-.34.124-.672.264-.997.417l-.058.028a12.348 12.348 0 00-1.007.545c-.284.17-.559.352-.827.545-.043.03-.084.063-.126.094-.252.187-.496.382-.732.586-.054.048-.106.098-.161.146-.217.197-.43.4-.633.612-.064.067-.125.138-.188.206-.184.202-.366.408-.537.623-.072.09-.138.185-.208.277-.151.203-.301.408-.441.621-.076.115-.143.236-.215.354-.122.2-.244.4-.354.608-.075.142-.14.29-.209.435-.093.194-.188.387-.271.586-.07.17-.128.347-.191.521-.066.184-.138.366-.195.554-.062.202-.107.41-.158.617-.042.169-.091.336-.126.508-.049.246-.08.498-.114.75-.019.14-.047.276-.062.417C.021 11.191 0 11.594 0 12c0 6.627 5.372 12 12 12 .406 0 .809-.021 1.204-.061.14-.015.272-.043.411-.062.253-.034.508-.065.756-.114.171-.035.337-.084.505-.125.208-.053.417-.099.62-.16.188-.058.369-.127.552-.193.177-.063.354-.121.524-.191.199-.082.389-.178.582-.27.146-.07.297-.137.438-.213.206-.108.404-.229.604-.351.119-.073.242-.142.359-.219.211-.138.414-.287.613-.438.096-.07.191-.139.284-.213.212-.168.416-.348.616-.531.07-.063.144-.127.213-.192.21-.202.41-.412.605-.628.051-.057.103-.109.15-.167.203-.233.396-.476.581-.726.032-.045.067-.088.101-.133.19-.267.371-.539.541-.82.02-.032.041-.064.059-.1.176-.294.338-.597.486-.906l.031-.066c.15-.321.29-.65.413-.987.005-.013.011-.024.015-.039a12.33 12.33 0 00.334-1.076c.094-.365.172-.734.232-1.111l.001-.008c.062-.379.103-.764.127-1.152l.001-.004c.021-.247.042-.493.042-.744 0-.132-.016-.259-.02-.391a3.737 3.737 0 01-4.882-.343zM6.001 15.5a3 3 0 11-.002-6 3 3 0 01.002 6zM7.5 7a1.5 1.5 0 113.001.001A1.5 1.5 0 017.5 7zM12 20a2 2 0 11.001-4.001A2 2 0 0112 20zm1-7a1 1 0 110-2 1 1 0 010 2zm5 4.5a1.5 1.5 0 11.001-3.001A1.5 1.5 0 0118 17.5z"></path>',n+='<circle cx="23" cy="6" r="1"></circle>',n+='<circle cx="18" cy="2" r="2"></circle>',n+="</svg>",n+="</div>"),n+='<div class="'+o+'__desc">',n+=t.desc,t.moreLinkStatus&&(n+=' <a class="'+o+'__link" href="'+(t.moreLinkHref?t.moreLinkHref:"#")+'" target="_blank">'+t.moreLinkText+"</a>"),n+="</div>",n+='<div class="'+o+'__btn-bar">',n+='<button class="'+o+"__btn "+o+'__btn--accept" id="'+o+'-accept-btn" type="button">'+t.btnAcceptText+"</button>",n+="</div>",n+="</div>",n+="</div>"},a.prototype.setCustomAnchors=function(t,n){var i;return n.forEach(function(n){i="<a ",i+='class="'+o+'__link " ',i+='href="'+(n.href?n.href:"#")+'" ',i+='target="'+(n.target?n.target:"_blank")+'" ',i+=n.title?'title="'+n.title+'"':"",i+=">",i+=n.text?n.text:"",i+="</a>",t=t.replace(new RegExp("{{"+n.id+"}}","mg"),i)}),t},a.prototype.setTpl=function(t){var i=this.getTpl(t);/\{\{|\}\}/gm.test(i)&&(i=this.setCustomAnchors(i,t.customAnchors)),document.querySelector("body").insertAdjacentHTML("beforeend",i),n=document.getElementById(o)},a.prototype.getCookie=function(t){var o=document.cookie.match("(^|;) ?"+t+"=([^;]*)(;|$)");return o?o[2]:null},a.prototype.setCookie=function(t,o,n){var i=new Date;i.setTime(i.getTime()+864e5*n),document.cookie=t+"="+o+";path=/;expires="+i.toGMTString()},a.prototype.accept=function(t,n){var e=this;t.querySelector("."+o+"__btn--accept").addEventListener("click",function(){if(this.blur(),n.animationStatus&&-1!==i.indexOf(n.animationName))n.animationStatus&&e.setAnimationName(t,n,"out",function(){t.classList.add(o+"--is-hidden"),null===e.getCookie(o)&&e.setCookie(o,"1",n.expire)});else{if(t.classList.add(o+"--is-hidden"),null!==e.getCookie(o))return;e.setCookie(o,"1",n.expire)}})},a.prototype.forceSmByWidth=function(t,n){var i,e;n.width&&"auto"!==n.width&&(i=window.parseInt(n.width,10),e=window.parseInt(n.breakpoint,10),t.classList.remove(o+"--sm-fix"),i>=e||t.classList.add(o+"--sm-fix"))},a.prototype.resize=function(t,n){var i;function e(){i=window.matchMedia("(min-width: "+n.breakpoint+")"),t.classList.remove(o+"--sm"),i.matches||t.classList.add(o+"--sm")}window.addEventListener("resize",e),e()},window.GDPRCookieLaw=a}();


/* Main */
var Main, main;

Main = function () {};

Main.prototype.init = function () {

    pluginConfig = {
        theme: 'theme-2',
        displayOffset: 500
    };

    this.codeBoxCopy();
    this.collapseNavByNavLink();
    this.collapseNavInSmallView('1200px');
    this.gdprCookieLawInit();

    var example = document.getElementById('elegant-scroll-to-top-example');

    if (!example) {
        this.pluginInit();
        this.pluginThemes();
        this.pluginPosition();
        this.pluginAnimation();
        this.pluginIconType();
    }
};

Main.prototype.initLoad = function () {
    this.loading();
};

Main.prototype.loading = function () {
    document.documentElement.classList.remove('loading');
};

Main.prototype.gdprCookieLawInit = function () {
    var gdprCookieLaw = new GDPRCookieLaw({
        moreLinkHref: 'https://jablonczay.com/privacy-policy',
        theme: 'theme-light-10',
        position: 'bottom-left',
        margin: '16px',
        width: '520px',
        animationName: 'fade-slide'
    });
    gdprCookieLaw.init();
};

Main.prototype.pluginDestroy = function () {

    var el, elStyle;

    el = document.getElementById('elegant-scroll-to-top');
    elStyle = document.getElementById('elegant-scroll-to-top-style');

    if (el) el.parentNode.removeChild(el);
    if (elStyle) elStyle.parentNode.removeChild(elStyle);
};

Main.prototype.pluginInit = function () {
    var elegantScrollToTop = new ElegantScrollToTop(pluginConfig);
    elegantScrollToTop.init();
};

Main.prototype.pluginThemes = function () {

    var that, list, items, theme, cls;

    that = this;
    list = document.getElementById('try-it-out__themes-list');

    if (!list) return;

    items = list.querySelectorAll('.try-it-out__themes-link');
    cls = 'try-it-out__themes-link--active';

    [].forEach.call(items, function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            that.pluginDestroy();

            [].forEach.call(items, function (item) {
                item.classList.remove(cls);
            });

            this.classList.add(cls);
            theme = this.getAttribute('data-theme');

            pluginConfig.theme = theme;

            that.pluginInit();
        });
    });
};
    
Main.prototype.pluginPosition = function () {

    var that, list, items, pos, cls;

    that = this;
    list = document.getElementById('try-it-out__position-list');

    if (!list) return;

    items = list.querySelectorAll('.try-it-out__position-link');
    cls = 'try-it-out__position-link--active';

    [].forEach.call(items, function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            that.pluginDestroy();

            [].forEach.call(items, function (item) {
                item.classList.remove(cls);
            });

            this.classList.add(cls);
            pos = this.getAttribute('data-position');
            pluginConfig.position = pos;

            that.pluginInit();
        });
    });
};

Main.prototype.pluginAnimation = function () {

    var that, list, items, animation, cls;

    that = this;
    list = document.getElementById('try-it-out__animation-list');

    if (!list) return;

    items = list.querySelectorAll('.try-it-out__animation-link');
    cls = 'try-it-out__animation-link--active';
    
    [].forEach.call(items, function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            that.pluginDestroy();

            [].forEach.call(items, function (item) {
                item.classList.remove(cls);
            });

            this.classList.add(cls);
            animation = this.getAttribute('data-animation');

            pluginConfig.buttonAnimationType = animation;

            that.pluginInit();
        });
    });
};

Main.prototype.pluginIconType = function () {

    var that, list, items, iconType, cls;

    that = this;
    list = document.getElementById('try-it-out__icon-list');

    if (!list) return;

    items = list.querySelectorAll('.try-it-out__icon-link');
    cls = 'try-it-out__icon-link--active';

    [].forEach.call(items, function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            that.pluginDestroy();

            [].forEach.call(items, function (item) {
                item.classList.remove(cls);
            });

            this.classList.add(cls);
            iconType = this.getAttribute('data-icon');

            pluginConfig.iconType = iconType;

            that.pluginInit();
        });
    });
};

Main.prototype.collapseNavByNavLink = function () {

    var els = document.querySelectorAll('.nav__link');

    if (els.length === 0) return;

    [].forEach.call(els, function (el) {
        el.addEventListener('click', function () {
            document.getElementById('nav-form-control-chk').checked = false;
        });
    });
};

Main.prototype.collapseNavInSmallView = function(size) {

    var el = document.getElementById('nav-form-control-chk');

    if (!el) return;

    var mq;

    function removeCheckedState () {

        mq = window.matchMedia('(min-width: ' + size + ')');

        if (mq.matches) {
            el.checked = false;
        }
    }

    removeCheckedState(size);
    window.addEventListener('resize', function () {
        removeCheckedState(size);
    });
};

// Dependence: clipboard.js
Main.prototype.codeBoxCopy = function() {

    var triggerEl, tooltip, tooltipEl, btns, clipboard;

    btns = document.querySelectorAll('.code-box-copy__btn');

    if (btns.length === 0) return;

    tooltip = '<span class="code-box-copy__tooltip">Copied</span>';

    [].forEach.call(btns, function(btn) {

        clipboard = new Clipboard(btn);

        clipboard.on('success', function(e) { 

            triggerEl = e.trigger;
            triggerEl.disabled = true;
            triggerEl.insertAdjacentHTML('afterBegin', tooltip);
            tooltipEl = triggerEl.querySelector('.code-box-copy__tooltip');

            setTimeout(function() {
                triggerEl.disabled = false;
                triggerEl.removeChild(tooltipEl);
            }, 1000);
        });
    });
};

main = new Main();

if (document.readyState !== 'loading') {
    main.init();
} else {
    document.addEventListener('DOMContentLoaded', function () {
        main.init();   
    });
}

window.addEventListener('load', function () {
    main.initLoad();
});