function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var i,r,o,a,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,f=setTimeout(T,t),c?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=o}function T(){var e=g();if(j(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-u);return s?m(n,o-(e-l)):n}(e))}function w(e){return f=void 0,v&&i?y(e):(i=r=void 0,a)}function O(){var e=g(),n=j(e);if(i=arguments,r=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(T,t),y(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(b(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=r=f=void 0},O.flush=function(){return void 0===f?a:w(g())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),h={};y.addEventListener("submit",(function(e){e.preventDefault(),(""===e.target.email.value||""===e.target.message.value)&&alert("Please specify the all fields");console.log(h),e.currentTarget.reset(),h.email="",h.message="",localStorage.removeItem("feedback-form-state")})),y.addEventListener("input",e(t)((function(e){h[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);t&&(y.email.value=h.email=t.email?t.email:"",y.message.value=h.message=t.message?t.message:"")}();
//# sourceMappingURL=03-feedback.a989adc9.js.map
