import{S as t,i as e,s as n,l as o,f as s,B as l,r as i,u as a,v as r,d as c,H as d,D as u,e as m,c as f,a as p,I as h,E as g,J as $,K as v,L as y,G as k,M as C,t as b,g as E,h as I,k as L,j as w,n as V,m as x,b as N,N as D,F as P,o as A,w as S,O as T,P as U,Q as j}from"../chunks/vendor-190594a2.js";var O,R=new Uint8Array(16);function B(){if(!O&&!(O="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return O(R)}var M=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Y(t){return"string"==typeof t&&M.test(t)}for(var z=[],F=0;F<256;++F)z.push((F+256).toString(16).substr(1));function G(t,e,n){var o=(t=t||{}).random||(t.rng||B)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){n=n||0;for(var s=0;s<16;++s)e[n+s]=o[s];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(z[t[e+0]]+z[t[e+1]]+z[t[e+2]]+z[t[e+3]]+"-"+z[t[e+4]]+z[t[e+5]]+"-"+z[t[e+6]]+z[t[e+7]]+"-"+z[t[e+8]]+z[t[e+9]]+"-"+z[t[e+10]]+z[t[e+11]]+z[t[e+12]]+z[t[e+13]]+z[t[e+14]]+z[t[e+15]]).toLowerCase();if(!Y(n))throw TypeError("Stringified UUID is invalid");return n}(o)}function H(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function J(t,{delay:e=0,duration:n=400,easing:o=H,amount:s=5,opacity:l=0}={}){const i=getComputedStyle(t),a=+i.opacity,r="none"===i.filter?"":i.filter,c=a*(1-l);return{delay:e,duration:n,easing:o,css:(t,e)=>`opacity: ${a-c*e}; filter: ${r} blur(${e*s}px);`}}function K(t){let e,n,o,l,a;const d=t[6].default,y=u(d,t,t[5],null),k=y||function(t){let e;return{c(){e=b(t[1])},l(n){e=E(n,t[1])},m(t,n){s(t,e,n)},p(t,n){2&n&&I(e,t[1])},d(t){t&&c(e)}}}(t);return{c(){e=m("span"),k&&k.c()},l(t){e=f(t,"SPAN",{});var n=p(e);k&&k.l(n),n.forEach(c)},m(n,i){s(n,e,i),k&&k.m(e,null),o=!0,l||(a=h(e,"click",t[3]),l=!0)},p(t,e){y?y.p&&32&e&&g(y,d,t,t[5],e,null,null):k&&k.p&&2&e&&k.p(t,e)},i(t){o||(r(k,t),n||$((()=>{n=v(e,J,{}),n.start()})),o=!0)},o(t){i(k,t),o=!1},d(t){t&&c(e),k&&k.d(t),l=!1,a()}}}function Q(t){let e,n,o,l;return{c(){e=m("input"),this.h()},l(t){e=f(t,"INPUT",{autofocus:!0}),this.h()},h(){e.autofocus=!0},m(n,i){s(n,e,i),y(e,t[1]),e.focus(),o||(l=[h(e,"input",t[7]),h(e,"keydown",t[2]),h(e,"blur",t[4])],o=!0)},p(t,n){2&n&&e.value!==t[1]&&y(e,t[1])},i(t){n||$((()=>{n=v(e,J,{}),n.start()}))},o:k,d(t){t&&c(e),o=!1,C(l)}}}function q(t){let e,n,d,u;const m=[Q,K],f=[];function p(t,e){return t[0]?0:1}return e=p(t),n=f[e]=m[e](t),{c(){n.c(),d=o()},l(t){n.l(t),d=o()},m(t,n){f[e].m(t,n),s(t,d,n),u=!0},p(t,[o]){let s=e;e=p(t),e===s?f[e].p(t,o):(l(),i(f[s],1,1,(()=>{f[s]=null})),a(),n=f[e],n?n.p(t,o):(n=f[e]=m[e](t),n.c()),r(n,1),n.m(d.parentNode,d))},i(t){u||(r(n),u=!0)},o(t){i(n),u=!1},d(t){f[e].d(t),t&&c(d)}}}function W(t,e,n){let{$$slots:o={},$$scope:s}=e;const l=d();let{editing:i=!1}=e,{value:a=""}=e,r="";const c=()=>{n(0,i=!1),l("value-changed",a)},u=()=>{n(0,i=!1),n(1,a=r)};return t.$$set=t=>{"editing"in t&&n(0,i=t.editing),"value"in t&&n(1,a=t.value),"$$scope"in t&&n(5,s=t.$$scope)},[i,a,t=>{i&&13===t.keyCode?c():i&&27===t.keyCode&&u()},()=>{r=a,n(0,i=!0)},c,s,o,function(){a=this.value,n(1,a)}]}class X extends t{constructor(t){super(),e(this,t,W,q,n,{editing:0,value:1})}}function Z(t){let e,n,o,l,a,d,u,g,$;return d=new X({props:{value:t[0].caption}}),d.$on("value-changed",t[3]),{c(){e=m("li"),n=m("input"),l=L(),a=m("span"),w(d.$$.fragment),this.h()},l(t){e=f(t,"LI",{});var o=p(e);n=f(o,"INPUT",{type:!0,checked:!0}),l=V(o),a=f(o,"SPAN",{class:!0});var s=p(a);x(d.$$.fragment,s),s.forEach(c),o.forEach(c),this.h()},h(){N(n,"type","checkbox"),n.checked=o=t[0].completed,N(a,"class","svelte-1i3avza"),D(a,"done",t[0].completed)},m(o,i){s(o,e,i),P(e,n),P(e,l),P(e,a),A(d,a,null),u=!0,g||($=h(n,"click",t[2]),g=!0)},p(t,[e]){(!u||1&e&&o!==(o=t[0].completed))&&(n.checked=o);const s={};1&e&&(s.value=t[0].caption),d.$set(s),1&e&&D(a,"done",t[0].completed)},i(t){u||(r(d.$$.fragment,t),u=!0)},o(t){i(d.$$.fragment,t),u=!1},d(t){t&&c(e),S(d),g=!1,$()}}}function _(t,e,n){const o=d();let{item:s}=e;return t.$$set=t=>{"item"in t&&n(0,s=t.item)},[s,o,()=>o("item-toggled",{id:s.id}),t=>o("item-renamed",{id:s.id,name:t.detail})]}class tt extends t{constructor(t){super(),e(this,t,_,Z,n,{item:0})}}function et(t){let e,n,o,l,i,a,r,d;return{c(){e=m("div"),n=m("input"),o=L(),l=m("button"),i=b("Add"),this.h()},l(t){e=f(t,"DIV",{});var s=p(e);n=f(s,"INPUT",{}),o=V(s),l=f(s,"BUTTON",{disabled:!0});var a=p(l);i=E(a,"Add"),a.forEach(c),s.forEach(c),this.h()},h(){l.disabled=a=0===t[0].length},m(a,c){s(a,e,c),P(e,n),y(n,t[0]),t[5](n),P(e,o),P(e,l),P(l,i),r||(d=[h(n,"input",t[4]),h(n,"keydown",t[2]),h(l,"click",t[3])],r=!0)},p(t,[e]){1&e&&n.value!==t[0]&&y(n,t[0]),1&e&&a!==(a=0===t[0].length)&&(l.disabled=a)},i:k,o:k,d(n){n&&c(e),t[5](null),r=!1,C(d)}}}function nt(t,e,n){const o=d();let s,l="";const i=()=>{o("item-created",l),n(0,l=""),s.focus()};return[l,s,t=>{13===t.keyCode&&l.length>0&&i()},i,function(){l=this.value,n(0,l)},function(t){T[t?"unshift":"push"]((()=>{s=t,n(1,s)}))}]}class ot extends t{constructor(t){super(),e(this,t,nt,et,n,{})}}function st(t,e,n){const o=t.slice();return o[7]=e[n],o}function lt(t){let e,n,o=t[0].items,d=[];for(let s=0;s<o.length;s+=1)d[s]=rt(st(t,o,s));const u=t=>i(d[t],1,1,(()=>{d[t]=null}));return{c(){e=m("ul");for(let t=0;t<d.length;t+=1)d[t].c()},l(t){e=f(t,"UL",{});var n=p(e);for(let e=0;e<d.length;e+=1)d[e].l(n);n.forEach(c)},m(t,o){s(t,e,o);for(let n=0;n<d.length;n+=1)d[n].m(e,null);n=!0},p(t,n){if(1&n){let s;for(o=t[0].items,s=0;s<o.length;s+=1){const l=st(t,o,s);d[s]?(d[s].p(l,n),r(d[s],1)):(d[s]=rt(l),d[s].c(),r(d[s],1),d[s].m(e,null))}for(l(),s=o.length;s<d.length;s+=1)u(s);a()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)r(d[t]);n=!0}},o(t){d=d.filter(Boolean);for(let e=0;e<d.length;e+=1)i(d[e]);n=!1},d(t){t&&c(e),j(d,t)}}}function it(t){let e;return{c(){e=b("Plan your next step!")},l(t){e=E(t,"Plan your next step!")},m(t,n){s(t,e,n)},p:k,i:k,o:k,d(t){t&&c(e)}}}function at(t){let e,n;return e=new tt({props:{item:t[7]}}),e.$on("item-toggled",t[4]),e.$on("item-renamed",t[5]),{c(){w(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,o){A(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.item=t[7]),e.$set(o)},i(t){n||(r(e.$$.fragment,t),n=!0)},o(t){i(e.$$.fragment,t),n=!1},d(t){S(e,t)}}}function rt(t){let e,n,d=(!t[7].completed||!t[0].hideCompleted)&&at(t);return{c(){d&&d.c(),e=o()},l(t){d&&d.l(t),e=o()},m(t,o){d&&d.m(t,o),s(t,e,o),n=!0},p(t,n){t[7].completed&&t[0].hideCompleted?d&&(l(),i(d,1,1,(()=>{d=null})),a()):d?(d.p(t,n),1&n&&r(d,1)):(d=at(t),d.c(),r(d,1),d.m(e.parentNode,e))},i(t){n||(r(d),n=!0)},o(t){i(d),n=!1},d(t){d&&d.d(t),t&&c(e)}}}function ct(t){let e,n,o,l,i,a=t[1]>1?"s":"";return{c(){e=b("Total of "),n=b(t[1]),o=b(" item"),l=b(a),i=b(" to do.")},l(s){e=E(s,"Total of "),n=E(s,t[1]),o=E(s," item"),l=E(s,a),i=E(s," to do.")},m(t,a){s(t,e,a),s(t,n,a),s(t,o,a),s(t,l,a),s(t,i,a)},p(t,e){2&e&&I(n,t[1]),2&e&&a!==(a=t[1]>1?"s":"")&&I(l,a)},d(t){t&&c(e),t&&c(n),t&&c(o),t&&c(l),t&&c(i)}}}function dt(t){let e;return{c(){e=b("You have completed all tasks, time to rest!")},l(t){e=E(t,"You have completed all tasks, time to rest!")},m(t,n){s(t,e,n)},p:k,d(t){t&&c(e)}}}function ut(t){let e,n,o,d,u,g,$,v,y,k,C,D,T,U,j,O,R,B,M,Y,z,F,G=t[0].name+"";const H=[it,lt],J=[];function K(t,e){return 0==t[0].items.length||t[0].hideCompleted&&0===t[1]?0:1}function Q(t,e){return 0===t[1]?dt:ct}U=K(t),j=J[U]=H[U](t),R=new ot({}),R.$on("item-created",t[6]);let q=Q(t),W=q(t);return{c(){e=m("div"),n=m("div"),o=m("span"),d=b(G),u=L(),g=m("div"),$=m("span"),v=b("hide completed"),y=L(),k=m("input"),D=L(),T=m("div"),j.c(),O=L(),w(R.$$.fragment),B=L(),M=m("div"),W.c(),this.h()},l(t){e=f(t,"DIV",{class:!0});var s=p(e);n=f(s,"DIV",{class:!0});var l=p(n);o=f(l,"SPAN",{class:!0});var i=p(o);d=E(i,G),i.forEach(c),u=V(l),g=f(l,"DIV",{class:!0});var a=p(g);$=f(a,"SPAN",{});var r=p($);v=E(r,"hide completed"),r.forEach(c),y=V(a),k=f(a,"INPUT",{type:!0,checked:!0}),a.forEach(c),l.forEach(c),D=V(s),T=f(s,"DIV",{class:!0});var m=p(T);j.l(m),m.forEach(c),O=V(s),x(R.$$.fragment,s),B=V(s),M=f(s,"DIV",{class:!0});var h=p(M);W.l(h),h.forEach(c),s.forEach(c),this.h()},h(){N(o,"class","name svelte-mk06fh"),N(k,"type","checkbox"),k.checked=C=t[0].hideCompleted,N(g,"class","hide-completed svelte-mk06fh"),N(n,"class","header svelte-mk06fh"),N(T,"class","content"),N(M,"class","footer svelte-mk06fh"),N(e,"class","container svelte-mk06fh")},m(l,i){s(l,e,i),P(e,n),P(n,o),P(o,d),P(n,u),P(n,g),P(g,$),P($,v),P(g,y),P(g,k),P(e,D),P(e,T),J[U].m(T,null),P(e,O),A(R,e,null),P(e,B),P(e,M),W.m(M,null),Y=!0,z||(F=h(k,"click",t[3]),z=!0)},p(t,[e]){(!Y||1&e)&&G!==(G=t[0].name+"")&&I(d,G),(!Y||1&e&&C!==(C=t[0].hideCompleted))&&(k.checked=C);let n=U;U=K(t),U===n?J[U].p(t,e):(l(),i(J[n],1,1,(()=>{J[n]=null})),a(),j=J[U],j?j.p(t,e):(j=J[U]=H[U](t),j.c()),r(j,1),j.m(T,null)),q===(q=Q(t))&&W?W.p(t,e):(W.d(1),W=q(t),W&&(W.c(),W.m(M,null)))},i(t){Y||(r(j),r(R.$$.fragment,t),Y=!0)},o(t){i(j),i(R.$$.fragment,t),Y=!1},d(t){t&&c(e),J[U].d(),S(R),W.d(),z=!1,F()}}}function mt(t,e,n){const o=d();let{todoList:s}=e,{todoCount:l}=e;return t.$$set=t=>{"todoList"in t&&n(0,s=t.todoList),"todoCount"in t&&n(1,l=t.todoCount)},[s,l,o,()=>o("hide-toggled"),function(e){U(t,e)},function(e){U(t,e)},function(e){U(t,e)}]}class ft extends t{constructor(t){super(),e(this,t,mt,ut,n,{todoList:0,todoCount:1})}}const pt=()=>({id:G(),name:"My first list",hideCompleted:!1,items:[]});function ht(t,e,n){const o=t.slice();return o[1]=e[n],o}function gt(t){let e,n,o,l,i,a,r,d=t[1].id+"",u=t[1].caption+"",p=t[1].completed?"":"not";return{c(){e=b(d),n=b(": '"),o=b(u),l=b("' is "),i=b(p),a=b(" done"),r=m("br")},l(t){e=E(t,d),n=E(t,": '"),o=E(t,u),l=E(t,"' is "),i=E(t,p),a=E(t," done"),r=f(t,"BR",{})},m(t,c){s(t,e,c),s(t,n,c),s(t,o,c),s(t,l,c),s(t,i,c),s(t,a,c),s(t,r,c)},p(t,n){1&n&&d!==(d=t[1].id+"")&&I(e,d),1&n&&u!==(u=t[1].caption+"")&&I(o,u),1&n&&p!==(p=t[1].completed?"":"not")&&I(i,p)},d(t){t&&c(e),t&&c(n),t&&c(o),t&&c(l),t&&c(i),t&&c(a),t&&c(r)}}}function $t(t){let e,n,o,l=t[0].items,i=[];for(let s=0;s<l.length;s+=1)i[s]=gt(ht(t,l,s));return{c(){e=m("div"),n=b("All tasks:\n\t"),o=m("div");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){e=f(t,"DIV",{class:!0});var s=p(e);n=E(s,"All tasks:\n\t"),o=f(s,"DIV",{});var l=p(o);for(let e=0;e<i.length;e+=1)i[e].l(l);l.forEach(c),s.forEach(c),this.h()},h(){N(e,"class","container svelte-ylfni3")},m(t,l){s(t,e,l),P(e,n),P(e,o);for(let e=0;e<i.length;e+=1)i[e].m(o,null)},p(t,[e]){if(1&e){let n;for(l=t[0].items,n=0;n<l.length;n+=1){const s=ht(t,l,n);i[n]?i[n].p(s,e):(i[n]=gt(s),i[n].c(),i[n].m(o,null))}for(;n<i.length;n+=1)i[n].d(1);i.length=l.length}},i:k,o:k,d(t){t&&c(e),j(i,t)}}}function vt(t,e,n){let{todoList:o=pt()}=e;return t.$$set=t=>{"todoList"in t&&n(0,o=t.todoList)},[o]}class yt extends t{constructor(t){super(),e(this,t,vt,$t,n,{todoList:0})}}function kt(t){let e,n,o,l,a;return n=new ft({props:{todoList:t[0],todoCount:t[1]}}),n.$on("hide-toggled",t[2]),n.$on("item-toggled",t[3]),n.$on("item-renamed",t[4]),n.$on("item-created",t[5]),l=new yt({props:{todoList:t[0]}}),{c(){e=m("div"),w(n.$$.fragment),o=L(),w(l.$$.fragment)},l(t){e=f(t,"DIV",{});var s=p(e);x(n.$$.fragment,s),o=V(s),x(l.$$.fragment,s),s.forEach(c)},m(t,i){s(t,e,i),A(n,e,null),P(e,o),A(l,e,null),a=!0},p(t,[e]){const o={};1&e&&(o.todoList=t[0]),2&e&&(o.todoCount=t[1]),n.$set(o);const s={};1&e&&(s.todoList=t[0]),l.$set(s)},i(t){a||(r(n.$$.fragment,t),r(l.$$.fragment,t),a=!0)},o(t){i(n.$$.fragment,t),i(l.$$.fragment,t),a=!1},d(t){t&&c(e),S(n),S(l)}}}function Ct(t,e,n){let o,s={id:G(),name:"my first list",hideCompleted:!1,items:[{id:G(),caption:"a task",completed:!1},{id:G(),caption:"a task",completed:!0},{id:G(),caption:"other task",completed:!1}]};return t.$$.update=()=>{1&t.$$.dirty&&n(1,o=s.items.filter((t=>!t.completed)).length)},[s,o,()=>n(0,s.hideCompleted=!s.hideCompleted,s),t=>{n(0,s.items=s.items.map((e=>e.id===t.detail.id?Object.assign(Object.assign({},e),{completed:!e.completed}):e)),s)},t=>{n(0,s.items=s.items.map((e=>e.id===t.detail.id?Object.assign(Object.assign({},e),{caption:t.detail.name}):e)),s)},t=>{const e={id:G(),caption:t.detail,completed:!1};n(0,s.items=[...s.items,e],s)}]}export default class extends t{constructor(t){super(),e(this,t,Ct,kt,n,{})}}
