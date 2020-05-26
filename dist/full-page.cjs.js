"use strict";var t=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)},n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e="object"==typeof n&&n&&n.Object===Object&&n,i="object"==typeof self&&self&&self.Object===Object&&self,o=e||i||Function("return this")(),r=function(){return o.Date.now()},a=o.Symbol,c=Object.prototype,u=c.hasOwnProperty,s=c.toString,f=a?a.toStringTag:void 0;var v=function(t){var n=u.call(t,f),e=t[f];try{t[f]=void 0;var i=!0}catch(t){}var o=s.call(t);return i&&(n?t[f]=e:delete t[f]),o},h=Object.prototype.toString;var l=function(t){return h.call(t)},d=a?a.toStringTag:void 0;var p=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":d&&d in Object(t)?v(t):l(t)};var g=function(t){return null!=t&&"object"==typeof t};var m=function(t){return"symbol"==typeof t||g(t)&&"[object Symbol]"==p(t)},y=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,x=/^0o[0-7]+$/i,T=parseInt;var j=function(n){if("number"==typeof n)return n;if(m(n))return NaN;if(t(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=t(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(y,"");var i=w.test(n);return i||x.test(n)?T(n.slice(2),i?2:8):b.test(n)?NaN:+n},E=Math.max,L=Math.min;var N=function(n,e,i){var o,a,c,u,s,f,v=0,h=!1,l=!1,d=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function p(t){var e=o,i=a;return o=a=void 0,v=t,u=n.apply(i,e)}function g(t){return v=t,s=setTimeout(y,e),h?p(t):u}function m(t){var n=t-f;return void 0===f||n>=e||n<0||l&&t-v>=c}function y(){var t=r();if(m(t))return b(t);s=setTimeout(y,function(t){var n=e-(t-f);return l?L(n,c-(t-v)):n}(t))}function b(t){return s=void 0,d&&o?p(t):(o=a=void 0,u)}function w(){var t=r(),n=m(t);if(o=arguments,a=this,f=t,n){if(void 0===s)return g(f);if(l)return clearTimeout(s),s=setTimeout(y,e),p(f)}return void 0===s&&(s=setTimeout(y,e)),u}return e=j(e)||0,t(i)&&(h=!!i.leading,c=(l="maxWait"in i)?E(j(i.maxWait)||0,e):c,d="trailing"in i?!!i.trailing:d),w.cancel=function(){void 0!==s&&clearTimeout(s),v=0,o=f=a=s=void 0},w.flush=function(){return void 0===s?u:b(r())},w},O=Math.max,I=Math.min;var S=function(n,e,i){var o,a,c,u,s,f,v=0,h=!1,l=!1,d=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function p(t){var e=o,i=a;return o=a=void 0,v=t,u=n.apply(i,e)}function g(t){return v=t,s=setTimeout(y,e),h?p(t):u}function m(t){var n=t-f;return void 0===f||n>=e||n<0||l&&t-v>=c}function y(){var t=r();if(m(t))return b(t);s=setTimeout(y,function(t){var n=e-(t-f);return l?I(n,c-(t-v)):n}(t))}function b(t){return s=void 0,d&&o?p(t):(o=a=void 0,u)}function w(){var t=r(),n=m(t);if(o=arguments,a=this,f=t,n){if(void 0===s)return g(f);if(l)return clearTimeout(s),s=setTimeout(y,e),p(f)}return void 0===s&&(s=setTimeout(y,e)),u}return e=j(e)||0,t(i)&&(h=!!i.leading,c=(l="maxWait"in i)?O(j(i.maxWait)||0,e):c,d="trailing"in i?!!i.trailing:d),w.cancel=function(){void 0!==s&&clearTimeout(s),v=0,o=f=a=s=void 0},w.flush=function(){return void 0===s?u:b(r())},w};var H=function(n,e,i){var o=!0,r=!0;if("function"!=typeof n)throw new TypeError("Expected a function");return t(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),S(n,e,{leading:o,maxWait:e,trailing:r})};function P(t,n){t.classList.contains(n)&&t.classList.remove(n)}function W(){return"innerHeight"in window?window.innerHeight:document.documentElement.offsetHeight}var Y={navigation:!0,containerSelector:"#full-page",sectionSelector:".section"},A=function(){function t(t){this.viewHeight=W(),this.pageNum=0,this.startY=0,this.activeIndex=0,"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),e=1;e<arguments.length;e++){var i=arguments[e];if(null!=i)for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},writable:!0,configurable:!0}),this.options=Object.assign(Y,t),this.container=document.querySelector(this.options.containerSelector),this.pageNum=document.querySelectorAll(this.options.sectionSelector).length,this.init()}return t.prototype.createNav=function(){var t=this,n=document.createElement("div");n.className="nav",this.container.appendChild(n);for(var e=0;e<this.pageNum;e++)n.innerHTML+='<p class="nav-dot"><span></span></p>';this.navList=document.querySelectorAll(".nav-dot"),this.navList[0].classList.add("active"),this.navList.forEach((function(n,e){n.onclick=function(){t.activeIndex=e,t.gotoPage(),t.navList.forEach((function(t){P(t,"active")})),n.classList.add("active")}}))},t.prototype.changeActiveNav=function(){this.options.navigation&&(this.navList.forEach((function(t){P(t,"active")})),this.navList[this.activeIndex].classList.add("active"))},t.prototype.gotoPage=function(){this.activeIndex<0&&(this.activeIndex=0),this.activeIndex>this.pageNum-1&&(this.activeIndex=this.pageNum-1);var t=this.activeIndex*this.viewHeight;this.container.style.top="-"+t+"px"},t.prototype.goDown=function(){this.activeIndex<this.pageNum-1&&(this.activeIndex++,this.gotoPage(),this.changeActiveNav())},t.prototype.goUp=function(){this.activeIndex>0&&(this.activeIndex--,this.gotoPage(),this.changeActiveNav())},t.prototype.handleWheelEvent=function(t){t.deltaY>0?this.goDown():this.goUp()},t.prototype.handleResize=function(){var t=this;this.viewHeight=W(),this.container.style.height=this.viewHeight+"px",this.navList.forEach((function(n,e){n.classList.contains("active")&&(t.activeIndex=e)})),this.gotoPage()},t.prototype.handleTouchEnd=function(t){t.changedTouches[0].pageY-this.startY<0?this.goDown():this.goUp()},t.prototype.init=function(){var t=this;this.container.style.height=this.viewHeight+"px",this.options.navigation&&this.createNav(),document.onwheel=H((function(n){return t.handleWheelEvent(n)}),200),window.onresize=N((function(){return t.handleResize()}),200),document.addEventListener("touchstart",(function(n){t.startY=n.touches[0].pageY})),document.addEventListener("touchend",H((function(n){return t.handleTouchEnd(n)}),200)),document.addEventListener("touchmove",(function(t){t.preventDefault()}))},t}();module.exports=A;
