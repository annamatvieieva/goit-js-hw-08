!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),v=Object.prototype.toString,m=Math.max,d=Math.min,p=function(){return s.Date.now()};function y(e,t,n){var o,i,u,a,f,l,c=0,s=!1,v=!1,y=!0;if("function"!=typeof e)throw new TypeError(r);function S(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function j(e){return c=e,f=setTimeout(T,t),s?S(e):a}function O(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-c>=u}function T(){var e=p();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-l);return v?d(n,u-(e-c)):n}(e))}function h(e){return f=void 0,y&&o?S(e):(o=i=void 0,a)}function w(){var e=p(),n=O(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return j(l);if(v)return f=setTimeout(T,t),S(l)}return void 0===f&&(f=setTimeout(T,t)),a}return t=g(t)||0,b(n)&&(s=!!n.leading,u=(v="maxWait"in n)?m(g(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},w.flush=function(){return void 0===f?a:h(p())},w}function b(e){var r=void 0===e?"undefined":t(n)(e);return!!e&&("object"==r||"function"==r)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(n)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(b(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=b(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=u.test(e);return l||a.test(e)?f(e.slice(2),l?2:8):i.test(e)?NaN:+e}var S=document.querySelector(".feedback-form"),j=(document.querySelector('button[type="submit"]'),document.querySelector('input[type="email"]')),O=document.querySelector('textarea[name="message"]'),T="feedback-form-state",h=JSON.parse(localStorage.getItem(T));h&&(j.value=h.email,O.value=h.message),S.addEventListener("input",(function(){var e={email:event.currentTarget.elements.email.value,message:event.currentTarget.elements.message.value},t=JSON.stringify(e);localStorage.setItem(T,t)})),S.addEventListener("submit",(function(){event.preventDefault();var e={email:event.target.elements.email.value,message:event.target.elements.message.value};console.log(e),localStorage.removeItem(T),j.value="",O.value=""}))}();
//# sourceMappingURL=03-feedback.3d4fbb23.js.map
