function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(o)}function c(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n,e,o){if(t){const s=a(t,n,e,o);return t[0](s)}}function a(t,n,o,s){return t[1]&&s?e(o.ctx.slice(),t[1](s(n))):o.ctx}function f(t,n,e,o,s,r,c){const i=function(t,n,e,o){if(t[2]&&o){const s=t[2](o(e));if(void 0===n.dirty)return s;if("object"==typeof s){const t=[],e=Math.max(n.dirty.length,s.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|s[o];return t}return n.dirty|s}return n.dirty}(n,o,s,r);if(i){const s=a(n,e,o,c);t.p(s,i)}}const l="undefined"!=typeof window;let d=l?()=>window.performance.now():()=>Date.now(),h=l?t=>requestAnimationFrame(t):t;const p=new Set;function $(t){p.forEach((n=>{n.c(t)||(p.delete(n),n.f())})),0!==p.size&&h($)}function m(t,n){t.appendChild(n)}function g(t,n,e){t.insertBefore(n,e||null)}function _(t){t.parentNode.removeChild(t)}function y(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function b(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function x(){return v(" ")}function w(){return v("")}function E(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function k(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function A(t){return Array.from(t.childNodes)}function j(t,n,e,o){for(let s=0;s<t.length;s+=1){const o=t[s];if(o.nodeName===n){let n=0;const r=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||r.push(t.name)}for(let t=0;t<r.length;t++)o.removeAttribute(r[t]);return t.splice(s,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):b(n)}function C(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return v(n)}function O(t){return C(t," ")}function N(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function S(t,n){t.value=null==n?"":n}function z(t,n,e){t.classList[e?"add":"remove"](n)}function L(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}const P=new Set;let R,q=0;function D(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),s=e.length-o.length;s&&(t.style.animation=o.join(", "),q-=s,q||h((()=>{q||(P.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),P.clear())})))}function F(t){R=t}function M(){if(!R)throw new Error("Function called outside component initialization");return R}function T(t){M().$$.on_mount.push(t)}function B(t){M().$$.after_update.push(t)}function G(){const t=M();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const s=L(n,e);o.slice().forEach((n=>{n.call(t,s)}))}}}function H(t,n){M().$$.context.set(t,n)}function I(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach((t=>t(n)))}const J=[],K=[],Q=[],U=[],V=Promise.resolve();let W=!1;function X(t){Q.push(t)}let Y=!1;const Z=new Set;function tt(){if(!Y){Y=!0;do{for(let t=0;t<J.length;t+=1){const n=J[t];F(n),nt(n.$$)}for(F(null),J.length=0;K.length;)K.pop()();for(let t=0;t<Q.length;t+=1){const n=Q[t];Z.has(n)||(Z.add(n),n())}Q.length=0}while(J.length);for(;U.length;)U.pop()();W=!1,Y=!1,Z.clear()}}function nt(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(X)}}let et;function ot(t,n,e){t.dispatchEvent(L(`${n?"intro":"outro"}${e}`))}const st=new Set;let rt;function ct(){rt={r:0,c:[],p:rt}}function it(){rt.r||r(rt.c),rt=rt.p}function ut(t,n){t&&t.i&&(st.delete(t),t.i(n))}function at(t,n,e,o){if(t&&t.o){if(st.has(t))return;st.add(t),rt.c.push((()=>{st.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const ft={duration:0};function lt(e,o,s){let r,i,u=o(e,s),a=!1,f=0;function l(){r&&D(e,r)}function m(){const{delay:o=0,duration:s=300,easing:c=n,tick:m=t,css:g}=u||ft;g&&(r=function(t,n,e,o,s,r,c,i=0){const u=16.666/o;let a="{\n";for(let m=0;m<=1;m+=u){const t=n+(e-n)*r(m);a+=100*m+`%{${c(t,1-t)}}\n`}const f=a+`100% {${c(e,1-e)}}\n}`,l=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(f)}_${i}`,d=t.ownerDocument;P.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(b("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[l]||(p[l]=!0,h.insertRule(`@keyframes ${l} ${f}`,h.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${l} ${o}ms linear ${s}ms 1 both`,q+=1,l}(e,0,1,s,o,c,g,f++)),m(0,1);const _=d()+o,y=_+s;i&&i.abort(),a=!0,X((()=>ot(e,!0,"start"))),i=function(t){let n;return 0===p.size&&h($),{promise:new Promise((e=>{p.add(n={c:t,f:e})})),abort(){p.delete(n)}}}((t=>{if(a){if(t>=y)return m(1,0),ot(e,!0,"end"),l(),a=!1;if(t>=_){const n=c((t-_)/s);m(n,1-n)}}return a}))}let g=!1;return{start(){g||(D(e),c(u)?(u=u(),(et||(et=Promise.resolve(),et.then((()=>{et=null}))),et).then(m)):m())},invalidate(){g=!1},end(){a&&(l(),a=!1)}}}function dt(t,n){const e={},o={},s={$$scope:1};let r=t.length;for(;r--;){const c=t[r],i=n[r];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)s[t]||(e[t]=i[t],s[t]=1);t[r]=i}else for(const t in c)s[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function ht(t){return"object"==typeof t&&null!==t?t:{}}function pt(t){t&&t.c()}function $t(t,n){t&&t.l(n)}function mt(t,n,e,s){const{fragment:i,on_mount:u,on_destroy:a,after_update:f}=t.$$;i&&i.m(n,e),s||X((()=>{const n=u.map(o).filter(c);a?a.push(...n):r(n),t.$$.on_mount=[]})),f.forEach(X)}function gt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _t(t,n){-1===t.$$.dirty[0]&&(J.push(t),W||(W=!0,V.then(tt)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function yt(n,e,o,c,i,u,a=[-1]){const f=R;F(n);const l=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:s(),dirty:a,skip_bound:!1};let d=!1;if(l.ctx=o?o(n,e.props||{},((t,e,...o)=>{const s=o.length?o[0]:e;return l.ctx&&i(l.ctx[t],l.ctx[t]=s)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](s),d&&_t(n,t)),e})):[],l.update(),d=!0,r(l.before_update),l.fragment=!!c&&c(l.ctx),e.target){if(e.hydrate){const t=A(e.target);l.fragment&&l.fragment.l(t),t.forEach(_)}else l.fragment&&l.fragment.c();e.intro&&ut(n.$$.fragment),mt(n,e.target,e.anchor,e.customElement),tt()}F(f)}class bt{$destroy(){gt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const vt=[];function xt(n,e=t){let o;const s=[];function r(t){if(i(n,t)&&(n=t,o)){const t=!vt.length;for(let e=0;e<s.length;e+=1){const t=s[e];t[1](),vt.push(t,n)}if(t){for(let t=0;t<vt.length;t+=2)vt[t][0](vt[t+1]);vt.length=0}}}return{set:r,update:function(t){r(t(n))},subscribe:function(c,i=t){const u=[c,i];return s.push(u),1===s.length&&(o=e(r)||t),c(n),()=>{const t=s.indexOf(u);-1!==t&&s.splice(t,1),0===s.length&&(o(),o=null)}}}}export{e as A,ct as B,xt as C,u as D,f as E,m as F,t as G,G as H,E as I,X as J,lt as K,S as L,r as M,z as N,K as O,I as P,y as Q,bt as S,A as a,k as b,j as c,_ as d,b as e,g as f,C as g,N as h,yt as i,pt as j,x as k,w as l,$t as m,O as n,mt as o,dt as p,ht as q,at as r,i as s,v as t,it as u,ut as v,gt as w,H as x,B as y,T as z};
