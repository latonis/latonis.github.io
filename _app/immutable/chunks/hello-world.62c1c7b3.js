import{s as g,d as C,u as b,g as y,f as j,e as i,i as f,n as H}from"./scheduler.35d2bb6c.js";import{S as h,i as v,d as x,t as w,r as M,u as S,v as k,w as q,g as c,s as z,h as d,D as m,c as D,a as u,f as _}from"./index.2a39c341.js";import{g as P,a as p}from"./spread.8a54911c.js";function A(o){let e;const n=o[1].default,a=C(n,o,o[0],null);return{c(){a&&a.c()},l(t){a&&a.l(t)},m(t,s){a&&a.m(t,s),e=!0},p(t,[s]){a&&a.p&&(!e||s&1)&&b(a,n,t,t[0],e?j(n,t[0],s,null):y(t[0]),null)},i(t){e||(x(a,t),e=!0)},o(t){w(a,t),e=!1},d(t){a&&a.d(t)}}}function B(o,e,n){let{$$slots:a={},$$scope:t}=e;return o.$$set=s=>{"$$scope"in s&&n(0,t=s.$$scope)},[t,a]}class E extends h{constructor(e){super(),v(this,e,B,A,g,{})}}function F(o){let e,n="Markdown",a,t,s="hello, world";return{c(){e=c("h2"),e.textContent=n,a=z(),t=c("p"),t.textContent=s},l(l){e=d(l,"H2",{"data-svelte-h":!0}),m(e)!=="svelte-10nzexj"&&(e.textContent=n),a=D(l),t=d(l,"P",{"data-svelte-h":!0}),m(t)!=="svelte-1yn70f0"&&(t.textContent=s)},m(l,r){u(l,e,r),u(l,a,r),u(l,t,r)},p:H,d(l){l&&(_(e),_(a),_(t))}}}function G(o){let e,n;const a=[o[0],$];let t={$$slots:{default:[F]},$$scope:{ctx:o}};for(let s=0;s<a.length;s+=1)t=i(t,a[s]);return e=new E({props:t}),{c(){M(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,l){k(e,s,l),n=!0},p(s,[l]){const r=l&1?P(a,[l&1&&p(s[0]),l&0&&p($)]):{};l&2&&(r.$$scope={dirty:l,ctx:s}),e.$set(r)},i(s){n||(x(e.$$.fragment,s),n=!0)},o(s){w(e.$$.fragment,s),n=!1},d(s){q(e,s)}}}const $={title:"hello, world",description:"hello, world",date:"1970-01-01",categories:["hello world"],published:!0};function I(o,e,n){return o.$$set=a=>{n(0,e=i(i({},e),f(a)))},e=f(e),[e]}class N extends h{constructor(e){super(),v(this,e,I,G,g,{})}}export{N as default,$ as metadata};
