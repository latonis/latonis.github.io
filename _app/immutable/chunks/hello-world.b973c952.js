import{s as h,e as u,i as c,n as v}from"./scheduler.6860d270.js";import{S as g,i as $,r as w,u as C,v as y,d as M,t as b,w as j,g as d,s as H,h as m,D as f,c as S,a as _,f as i}from"./index.8b3f023b.js";import{g as k,a as p}from"./spread.8a54911c.js";import{M as q}from"./mdsvex.3a9c6353.js";function z(l){let e,o="Markdown",n,s,t="hello, world";return{c(){e=d("h2"),e.textContent=o,n=H(),s=d("p"),s.textContent=t},l(a){e=m(a,"H2",{"data-svelte-h":!0}),f(e)!=="svelte-10nzexj"&&(e.textContent=o),n=S(a),s=m(a,"P",{"data-svelte-h":!0}),f(s)!=="svelte-1yn70f0"&&(s.textContent=t)},m(a,r){_(a,e,r),_(a,n,r),_(a,s,r)},p:v,d(a){a&&(i(e),i(n),i(s))}}}function D(l){let e,o;const n=[l[0],x];let s={$$slots:{default:[z]},$$scope:{ctx:l}};for(let t=0;t<n.length;t+=1)s=u(s,n[t]);return e=new q({props:s}),{c(){w(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){y(e,t,a),o=!0},p(t,[a]){const r=a&1?k(n,[a&1&&p(t[0]),a&0&&p(x)]):{};a&2&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){o||(M(e.$$.fragment,t),o=!0)},o(t){b(e.$$.fragment,t),o=!1},d(t){j(e,t)}}}const x={title:"hello, world",description:"hello, world",date:"1970-01-01",categories:["hello world"],published:!0};function P(l,e,o){return l.$$set=n=>{o(0,e=u(u({},e),c(n)))},e=c(e),[e]}class G extends g{constructor(e){super(),$(this,e,P,D,h,{})}}export{G as default,x as metadata};
