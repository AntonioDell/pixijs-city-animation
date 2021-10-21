(()=>{"use strict";var t,e={458:(t,e,n)=>{var o=n(320),r=n(426),i=n(295);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function f(t,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}var d=[new i.E9(100,25)],p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(r,t);var e,n,o=(e=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=h(e);if(n){var r=h(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return f(this,t)});function r(t,e){var n;c(this,r),(n=o.call(this)).tmpVelovcity=0,n.speed=t;var u=d[Math.floor(Math.random()*d.length)],a=d[Math.floor(Math.random()*d.length)],l=new i.E9(.5*u.x,.5*(1==Math.round(Math.random())?-1:1)*u.y),s=Math.floor(e/3);return n.y=Math.floor(Math.random()*s)+s,n.x-=.5*u.x+a.x,n.beginFill(16777215).drawRect(0,0,u.x,u.y).drawRect(l.x,l.y,a.x,a.y),n}return l(r,[{key:"onUpdate",value:function(t,e){if(this.x>this.canvasWidth)return e.removeChild(this),void this.destroy();this.tmpVelovcity+=this.speed*t,Math.floor(this.tmpVelovcity)>0&&(this.x+=Math.floor(this.tmpVelovcity),this.tmpVelovcity=0)}}]),r}(r.TC),y=function(){function t(e,n,o){c(this,t),this.scrollingSpeed=e,this.maxBuildOffset=n,this.canvasHeight=o}return l(t,[{key:"buildIfPossible",value:function(){if(null==this.lastCloud||this.lastCloud.x>0+this.buildOffset){var t=new p(this.scrollingSpeed,this.canvasHeight);return this.lastCloud=t,this.randomizeBuildOffset(),t}}},{key:"randomizeBuildOffset",value:function(){this.buildOffset=Math.floor(Math.random()*this.maxBuildOffset)}}]),t}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function g(t,e,n){return e&&m(t.prototype,e),n&&m(t,n),t}function O(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&R(t,e)}function R(t,e){return R=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},R(t,e)}function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=S(t);if(e){var r=S(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return x(this,n)}}function x(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var _=16777215,M=32,P=function(t){O(n,t);var e=j(n);function n(t){var o;return v(this,n),(o=e.call(this)).isLit=!1,o.onceToggled=!1,o.toggleDistance=t,o.lastUpdate=0,o.lineStyle(2,_).beginFill(0).drawRect(0,0,16,M).endFill(),o}return g(n,[{key:"toggleLight",value:function(){this.isLit=!this.isLit,this.isLit?this.clear().lineStyle(2,_).beginFill(16777215).drawRect(0,0,16,M).endFill():this.clear().lineStyle(2,_).beginFill(0).drawRect(0,0,16,M).endFill()}},{key:"onUpdate",value:function(t){if(!this.onceToggled&&this.toggleDistance){if(!this.parent)throw new Error("onUpdate failed. HouseWindow not connected to parent.");this.lastUpdate+=t,this.lastUpdate>=75&&this.parent.x>=this.toggleDistance&&(this.toggleLight(),this.onceToggled=!0)}}}]),n}(r.TC),E=function(t){O(n,t);var e=j(n);function n(t,o,r,i,u,c){var a,l,s;v(this,n),(l=e.call(this)).tmpVelovcity=0,l.speed=i,l.windows=t,l.canvasWidth=u,l.initWindowPositions(o,r),(a=l).addChild.apply(a,function(t){if(Array.isArray(t))return w(t)}(s=l.windows)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(s)||function(t,e){if(t){if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(t,e):void 0}}(s)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());var f=16*o+8*(o+2),h=r*M+8*(r+2);return l.x=-f,l.y=c-h,l.lineStyle(2,_).beginFill(0).drawRect(0,0,f,h),l}return g(n,[{key:"initWindowPositions",value:function(t,e){if(this.windows.length!=t*e)throw new Error("initWindowPositions failed. windows.length != windowsPerColumn * windowsPerRow is false! windowList.length is ".concat(this.windows.length," but should be ").concat(t*e));for(var n=0;n<e;n++)for(var o=0;o<t;o++){var r=n*t,i=this.windows[r+o];i.x=8*(o+1)+16*o,i.y=8*(n+1)+n*M}}},{key:"onUpdate",value:function(t,e){if(this.x>this.canvasWidth)return e.removeChild(this),void this.destroy({children:!0});this.tmpVelovcity+=this.speed*t,Math.floor(this.tmpVelovcity)>0&&(this.x+=Math.floor(this.tmpVelovcity),this.tmpVelovcity=0),this.windows.forEach((function(e){return e.onUpdate(t)}))}}]),n}(r.TC),k=function(){function t(e,n,o,r){v(this,t),this.scrollingSpeed=e,this.buildOffset=0,this.maxBuildOffset=n,this.lastHouse=null,this.canvasWidth=o,this.canvasHeight=r,this.maxWindowRows=Math.floor(r/M*.2),this.minWindowRows=Math.max(3,Math.floor(this.maxWindowRows/3)),this.maxWindowColumns=4,this.minWindowColumns=2}return g(t,[{key:"buildIfPossible",value:function(){if(null==this.lastHouse||this.lastHouse.x>0+this.buildOffset){var t=this.randomizeHouse();return this.lastHouse=t,this.randomizeBuildOffset(),t}}},{key:"randomizeHouse",value:function(){for(var t=Math.floor(Math.random()*this.maxWindowRows)+this.minWindowRows,e=Math.floor(Math.random()*this.maxWindowColumns)+this.minWindowColumns,n=t*e,o=[],r=0;r<n;r++)o.push(new P(this.getRandomToggleDistance()));return function(t,e){var n=new Array(e),o=t.length,r=new Array(o);if(e>o)throw new RangeError("getRandom: more elements taken than available");for(;e--;){var i=Math.floor(Math.random()*o);n[e]=t[i in r?r[i]:i],r[i]=--o in r?r[o]:o}return n}(o,Math.round(.5*Math.random()*n)).forEach((function(t){t.toggleLight()})),new E(o,e,t,this.scrollingSpeed,this.canvasWidth,this.canvasHeight)}},{key:"randomizeBuildOffset",value:function(){this.buildOffset=Math.floor(Math.random()*this.maxBuildOffset)}},{key:"getRandomToggleDistance",value:function(){return 1===Math.round(Math.random())?Math.floor(Math.random()*this.canvasWidth):null}}]),t}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function T(t,e){return T=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},T(t,e)}function W(t,e){if(e&&("object"===C(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function B(t){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},B(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&T(t,e)}(r,t);var e,n,o=(e=r,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,o=B(e);if(n){var r=B(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return W(this,t)});function r(t,e){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(n=o.call(this)).x=0,n.y=0,n.width=t;for(var u=[],c=0;c<200;c++){var a=new i.E9(Math.floor(Math.random()*t),Math.floor(Math.random()*e));n.lineStyle(1,16777215).drawStar(a.x,a.y,5,2),u.push(a)}return n}return r}(r.TC);function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function F(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function U(t,e){return U=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},U(t,e)}function z(t,e){if(e&&("object"===H(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return A(t)}function A(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var V=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&U(t,e)}(a,t);var e,n,o,u,c=(o=a,u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(o);if(u){var n=D(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return z(this,t)});function a(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),e=c.call(this,{width:window.innerWidth,height:window.innerHeight,resolution:window.devicePixelRatio||1,autoResize:!0}),t.appendChild(e.view),e.init(),window.addEventListener("resize",e.onResize.bind(A(e))),e}return e=a,(n=[{key:"init",value:function(){this.houseBuilder=new k(1,350,window.innerWidth,window.innerHeight),this.houseList=[],this.cloudBuilder=new y(1/3,200,window.innerHeight),this.cloudList=[],this.loader.load(this.draw.bind(this))}},{key:"draw",value:function(){var t=new i.Ae(0,0,window.innerWidth,window.innerHeight);this.background=new r.TC,this.background.beginFill(0).drawRect(t.x,t.y,t.width,t.height).endFill(),this.stars=new L(window.innerWidth,window.innerHeight/3),this.stage.addChild(this.background,this.stars),this.ticker.add(this.onUpdate.bind(this))}},{key:"onUpdate",value:function(t){var e=this;this.buildScollElements(),this.houseList.forEach((function(n){return n.onUpdate(t,e.stage)})),this.cloudList.forEach((function(n){return n.onUpdate(t,e.stage)})),this.houseList=this.houseList.filter((function(t){return!t._destroyed})),this.cloudList=this.cloudList.filter((function(t){return!t._destroyed}))}},{key:"buildScollElements",value:function(){var t=this.houseBuilder.buildIfPossible();t&&(this.houseList.push(t),this.stage.addChild(t));var e=this.cloudBuilder.buildIfPossible();e&&(this.cloudList.push(e),this.stage.addChild(e))}},{key:"onResize",value:function(){this.renderer.resize(window.innerWidth,window.innerHeight)}}])&&F(e.prototype,n),a}(o.Mx);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function N(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function $(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function q(t){var e="function"==typeof Map?new Map:void 0;return q=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,o)}function o(){return G(t,arguments,Q(this).constructor)}return o.prototype=Object.create(t.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),K(o,t)},q(t)}function G(t,e,n){return G=J()?Reflect.construct:function(t,e,n){var o=[null];o.push.apply(o,e);var r=new(Function.bind.apply(t,o));return n&&K(r,n.prototype),r},G.apply(null,arguments)}function J(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function K(t,e){return K=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},K(t,e)}function Q(t){return Q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Q(t)}var X=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&K(t,e)}(u,t);var e,n,o,r,i=(e=u,n=J(),function(){var t,o=Q(e);if(n){var r=Q(this).constructor;t=Reflect.construct(o,arguments,r)}else t=o.apply(this,arguments);return $(this,t)});function u(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this)}return o=u,(r=[{key:"connectedCallback",value:function(){this.hasChildNodes()||new V(this)}}])&&N(o.prototype,r),u}(q(HTMLElement));document.createElement("template").innerHTML='\n<div id="animationContainer">\n\n</div>\n',window.customElements.define("city-animation",X)}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={id:t,loaded:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=e,t=[],o.O=(e,n,r,i)=>{if(!n){var u=1/0;for(s=0;s<t.length;s++){for(var[n,r,i]=t[s],c=!0,a=0;a<n.length;a++)(!1&i||u>=i)&&Object.keys(o.O).every((t=>o.O[t](n[a])))?n.splice(a--,1):(c=!1,i<u&&(u=i));if(c){t.splice(s--,1);var l=r();void 0!==l&&(e=l)}}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[n,r,i]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{var t={179:0};o.O.j=e=>0===t[e];var e=(e,n)=>{var r,i,[u,c,a]=n,l=0;if(u.some((e=>0!==t[e]))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(a)var s=a(o)}for(e&&e(n);l<u.length;l++)i=u[l],o.o(t,i)&&t[i]&&t[i][0](),t[u[l]]=0;return o.O(s)},n=self.webpackChunkpixijs_city_animation=self.webpackChunkpixijs_city_animation||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var r=o.O(void 0,[320],(()=>o(458)));r=o.O(r)})();
//# sourceMappingURL=main.0e3ba02d68599b295242.js.map