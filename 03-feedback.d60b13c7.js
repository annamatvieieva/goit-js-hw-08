!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,m=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,y=function(){return m.Date.now()};function p(e,t,n){var o,r,a,u,l,f,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,l=setTimeout(O,t),s?p(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-c>=a}function O(){var e=y();if(h(e))return w(e);l=setTimeout(O,function(e){var n=t-(e-f);return m?g(n,a-(e-c)):n}(e))}function w(e){return l=void 0,d&&o?p(e):(o=r=void 0,u)}function T(){var e=y(),n=h(e);if(o=arguments,r=this,f=e,n){if(void 0===l)return j(f);if(m)return l=setTimeout(O,t),p(f)}return void 0===l&&(l=setTimeout(O,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(m="maxWait"in n)?v(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=r=l=void 0},T.flush=function(){return void 0===l?u:w(y())},T}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||l.test(t)?f(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};var j,h=document.querySelector(".feedback-form"),O=(document.querySelector('button[type="submit"]'),document.querySelector('input[type="email"]')),w=document.querySelector('textarea[name="message"]'),T="feedback-form-state";try{j=JSON.parse(localStorage.getItem(T))}catch(e){console.log(e.name),console.log(e.message)}j&&(O.value=j.email,w.value=j.message),h.addEventListener("submit",(function(){event.preventDefault();var e={email:event.target.elements.email.value,message:event.target.elements.message.value};console.log(e),localStorage.removeItem(T),O.value="",w.value=""})),h.addEventListener("input",e(t)((function(e){var t=h.elements.email.value,n=h.elements.message.value,o={email:t,message:n},i=JSON.stringify(o);localStorage.setItem(T,i)}),500))}();
//# sourceMappingURL=03-feedback.d60b13c7.js.map
