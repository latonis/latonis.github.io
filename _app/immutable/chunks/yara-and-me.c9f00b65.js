import{s as Tt,C as bt,n as Pe,e as Oe,i as yt}from"./scheduler.6860d270.js";import{S as kt,i as Rt,g as o,h as a,k as J,a as i,f as n,r as $e,u as qe,v as Xe,d as Se,t as ze,w as Ee,s,D as u,c as r,j as Ct}from"./index.8b3f023b.js";import{g as Yt,a as _t}from"./spread.8a54911c.js";import"./paths.1708ebaf.js";import{M as Ht}from"./mdsvex.3a9c6353.js";function It(d){let l,c;return{c(){l=o("img"),this.h()},l(f){l=a(f,"IMG",{src:!0,alt:!0,loading:!0}),this.h()},h(){bt(l.src,c=d[0])||J(l,"src",c),J(l,"alt",d[1]),J(l,"loading","lazy")},m(f,m){i(f,l,m)},p(f,[m]){m&1&&!bt(l.src,c=f[0])&&J(l,"src",c),m&2&&J(l,"alt",f[1])},i:Pe,o:Pe,d(f){f&&n(l)}}}function Lt(d,l,c){let{src:f}=l,{alt:m}=l;return d.$$set=h=>{"src"in h&&c(0,f=h.src),"alt"in h&&c(1,m=h.alt)},[f,m]}class At extends kt{constructor(l){super(),Rt(this,l,Lt,It,Tt,{src:0,alt:1})}}function Pt(d){let l,c="YARA and Me",f,m,h="I’ve spent a fair amount of time lately developing bits and pieces of the <strong>Mach-O</strong> module for YARA-X, which is the next iteration of the YARA ecosystem that is likely nearing its first release in the near future. I began by starting to write features for YARA (the one written in C), but was advised by Victor Alvarez (the original author and continued maintainer of the YARA ecosystem) to focus on YARA-X, as YARA is nearing a change freeze of new features to focus on developing YARA-X and ensuring mirrored capabilities between YARA and YARA-X. I’m not sure when YARA-X will have a full-fledged release, but I want to have as much Mach-O capability as possible when it comes.",p,v,Ue="Additional Context",Z,w,Ne='If you’re unfamiliar with YARA but still have managed to find your way to this blog post of me ranting and musing, you can find out more about this wonderful pattern matching utility here: <a href="https://virustotal.github.io/yara/" rel="nofollow">https://virustotal.github.io/yara/</a>.',ee,x,Ve="In short, the tool is described as such:",te,g,We="<p>YARA is a tool aimed at (but not limited to) helping malware researchers to identify and classify malware samples. With YARA you can create descriptions of malware families (or whatever you want to describe) based on textual or binary patterns.</p>",ne,b,je="Where the <strong>Mach-O</strong> module is going",ie,y,De="There’s quite a few routes where development can continue, and I’m going to go over a few of them in this blog. A bit of context is needed before we dive into what I’d like to work on.",le,C,Be="First, I’m going to talk about the elephant in the room when it comes to YARA, YARA-X, and Mach-O. YARA (the one written in C) and Mach-O parsing did not have the healthiest of relationships. There were missing docs, security vulnerabilities due to improper parsing, and a bit more. If you’d like context on any of this, you can find more info and form your own opinions from these PRs and Issues:",oe,_,Fe='<li><a href="https://github.com/VirusTotal/yara/pull/1100" rel="nofollow">#1100</a></li> <li><a href="https://github.com/VirusTotal/yara/issues/1178" rel="nofollow">#1178</a></li> <li><a href="https://github.com/VirusTotal/yara/issues/1498" rel="nofollow">#1498</a></li>',ae,A,Ge=`Now that we’ve got the context out of the way, we can get into the fun stuff.
In YARA (again, the C one), the Mach-O module was not enabled and compiled with the main executable. You had to configure the Makefile to compile it with the needed capabilities and without any documentation readily accessible for it. The future for Mach-O and MacOS Security prospects in YARA were not looking so hot.`,se,M,Ke="This all changed with YARA-X (the one written in Rust). The memory and borrow checker system in Rust allowed for a safer port (is it a port if it is improved?) of the Mach-O module from C into Rust. With the added checking and memory safety, there comes a lot of increased confidence for the module. In fact, the Mach-O module is now included by default into YARA-X when compiled.",re,K,T,ue,k,Qe="This is fantastic news: no messing about with a custom Makefile and no recompiling. Assuming the defaults include Mach-O come release time, users will be able to use Mach-O module straight out of the box instead of it being tucked away in the corner and hidden.",he,R,Je="A lot of us (maybe this is too general of an assumption?) have no problem making a change in a config and recompiling for our specific use-cases. However, this prohibits a lot of people (and likely teams/orgs) from willingly using this in their environment.",fe,Y,Ze="The Mach-O module may still have a long way to go, but the progress from YARA-X alone is incredibly encouraging, and in my opinion, a massive step in the right direction. When it comes to the initial release for YARA-X, supporting Mach-O files and the landscape behind them is <strong>huge</strong>.",me,H,et="MacOS and iOS security folks probably feel pretty closely to how I feel right now:",ce,Q,I,de,L,tt="Now that we have all of that out of the way, let’s dive into what is coming in the near future or currently in progress.",pe,P,nt="Load Commands",ve,O,it="For the first steps forward, most (if not all) of the load commands should be parsed and available to the user for the ability to query and write rules on. A few come to mind for detection purposes, and those are the values that can be forged or modified (compile timestamps, UUIDs, etc.). Values like this can be used with other indicators to provide higher fidelity detections (ie, a certain threat actor may always compile their Mac malware with dylibs that have a compile timestamp of 2)",we,$,lt="I plan on iterating through most development wise, with the <code>LC_UUID</code> and <code>LC_MIN_VERSION*</code> load commands being the ones I am currently working on (either in development or in review to be merged). I would prefer to work on the ones that can help derive the most value from a detection perspective first (so if you have any use-cases, reach out and let me know!).",xe,q,ot="Code Signing",ge,X,at="The <code>CODE_SIGNATURE</code> segment in a Mach-O executable can really contain quite a lot. Apple requires signing of <em>all</em> executables to run seamlessly (otherwise the user will need to go into System Preferences and click that little annoying <code>allow</code> button).",be,S,st="There are two blobs in the code signing segment I would really like to parse out to make available to users: <strong>certificate chains</strong> and <strong>entitlements</strong>.",ye,z,rt="Certificate Chains",Ce,E,ut="With all this code signing business that Apple is rolling out (since Big Sur), a lot of malware authors are going to be signing binaries via adhoc certificates or stolen/compromised certificates. This allows another opporunity to cluster or detect on specific certificate chains or values in the chains. There’s a lot of data that can be bined here for correlation or detection. After load commands, I’d like to get these moving into a parsed and detectable state.",_e,U,ht='You can read more on Mach-O certificate chains and CMS blobs <a href="https://opensource.apple.com/source/dyld/dyld-433.5/interlinked-dylibs/CodeSigningTypes.h.auto.html" rel="nofollow">here</a> and <a href="https://redmaple.tech/blogs/macho-files/#apple-code-signing" rel="nofollow">more here</a>.',Ae,N,ft="Entitlements",Me,V,mt="Entitlements are a way for applications to ask for permission to use a service or piece of technology on the device it is running on. Entitlements are stored as key-value pairs in the code signature.",Te,W,ct="I would like to focus on these eventually to help discover and cluster on Mach-o executables that request similar (or the same) entitlements on the system. These entitlements allow developers to be granted specific permissions and can help indicate towards possible behaviors of an application before it is executed.",ke,j,dt='You can read more on Mach-O entitlements <a href="https://developer.apple.com/documentation/bundleresources/entitlements" rel="nofollow">here</a>.',Re,D,pt="Lots of Work Ahead",Ye,B,vt="Now that I’ve laid some of this out, I am going to save you the time of reading anymore of my diatribe and go write some Rust 🦀.",He,F,wt="A Bit of Fun",Ie,G,xt='<a href="https://adventofcode.com/2023" rel="nofollow">Advent of Code 2023 🎄</a> releases tonight (01 December 2023) at 12am ET. I highly encourage you to try it out if you haven’t in the past. Learn a new language; practice your coding problem skills; have fun. It’s a blast every year, and I can’t recommend it enough. I highly recommend checking out others’ solutions to problems as well; I can’t even begin to describe all I’ve learned from doing so.',Le;return T=new At({props:{src:"images/yara-and-me/image.png",alt:"screenshot of GitHub showing the default build features of YARA-X, which included Mach-O module"}}),I=new At({props:{src:"images/yara-and-me/celebration.gif",alt:"The Office celebration gif"}}),{c(){l=o("h1"),l.textContent=c,f=s(),m=o("p"),m.innerHTML=h,p=s(),v=o("h2"),v.textContent=Ue,Z=s(),w=o("p"),w.innerHTML=Ne,ee=s(),x=o("p"),x.textContent=Ve,te=s(),g=o("blockquote"),g.innerHTML=We,ne=s(),b=o("h2"),b.innerHTML=je,ie=s(),y=o("p"),y.textContent=De,le=s(),C=o("p"),C.textContent=Be,oe=s(),_=o("ul"),_.innerHTML=Fe,ae=s(),A=o("p"),A.textContent=Ge,se=s(),M=o("p"),M.textContent=Ke,re=s(),K=o("p"),$e(T.$$.fragment),ue=s(),k=o("p"),k.textContent=Qe,he=s(),R=o("p"),R.textContent=Je,fe=s(),Y=o("p"),Y.innerHTML=Ze,me=s(),H=o("p"),H.textContent=et,ce=s(),Q=o("p"),$e(I.$$.fragment),de=s(),L=o("p"),L.textContent=tt,pe=s(),P=o("h3"),P.textContent=nt,ve=s(),O=o("p"),O.textContent=it,we=s(),$=o("p"),$.innerHTML=lt,xe=s(),q=o("h3"),q.textContent=ot,ge=s(),X=o("p"),X.innerHTML=at,be=s(),S=o("p"),S.innerHTML=st,ye=s(),z=o("h4"),z.textContent=rt,Ce=s(),E=o("p"),E.textContent=ut,_e=s(),U=o("p"),U.innerHTML=ht,Ae=s(),N=o("h4"),N.textContent=ft,Me=s(),V=o("p"),V.textContent=mt,Te=s(),W=o("p"),W.textContent=ct,ke=s(),j=o("p"),j.innerHTML=dt,Re=s(),D=o("h2"),D.textContent=pt,Ye=s(),B=o("p"),B.textContent=vt,He=s(),F=o("h2"),F.textContent=wt,Ie=s(),G=o("p"),G.innerHTML=xt},l(e){l=a(e,"H1",{"data-svelte-h":!0}),u(l)!=="svelte-636d2i"&&(l.textContent=c),f=r(e),m=a(e,"P",{"data-svelte-h":!0}),u(m)!=="svelte-10qda9w"&&(m.innerHTML=h),p=r(e),v=a(e,"H2",{"data-svelte-h":!0}),u(v)!=="svelte-zxk5kc"&&(v.textContent=Ue),Z=r(e),w=a(e,"P",{"data-svelte-h":!0}),u(w)!=="svelte-oxgj1w"&&(w.innerHTML=Ne),ee=r(e),x=a(e,"P",{"data-svelte-h":!0}),u(x)!=="svelte-1xoa5rk"&&(x.textContent=Ve),te=r(e),g=a(e,"BLOCKQUOTE",{"data-svelte-h":!0}),u(g)!=="svelte-1yftvm5"&&(g.innerHTML=We),ne=r(e),b=a(e,"H2",{"data-svelte-h":!0}),u(b)!=="svelte-hh83ci"&&(b.innerHTML=je),ie=r(e),y=a(e,"P",{"data-svelte-h":!0}),u(y)!=="svelte-4nszw4"&&(y.textContent=De),le=r(e),C=a(e,"P",{"data-svelte-h":!0}),u(C)!=="svelte-2entzn"&&(C.textContent=Be),oe=r(e),_=a(e,"UL",{"data-svelte-h":!0}),u(_)!=="svelte-g5mm2z"&&(_.innerHTML=Fe),ae=r(e),A=a(e,"P",{"data-svelte-h":!0}),u(A)!=="svelte-1r0tyib"&&(A.textContent=Ge),se=r(e),M=a(e,"P",{"data-svelte-h":!0}),u(M)!=="svelte-1ory96k"&&(M.textContent=Ke),re=r(e),K=a(e,"P",{});var t=Ct(K);qe(T.$$.fragment,t),t.forEach(n),ue=r(e),k=a(e,"P",{"data-svelte-h":!0}),u(k)!=="svelte-xu9y0w"&&(k.textContent=Qe),he=r(e),R=a(e,"P",{"data-svelte-h":!0}),u(R)!=="svelte-1mwv36p"&&(R.textContent=Je),fe=r(e),Y=a(e,"P",{"data-svelte-h":!0}),u(Y)!=="svelte-9clksl"&&(Y.innerHTML=Ze),me=r(e),H=a(e,"P",{"data-svelte-h":!0}),u(H)!=="svelte-1ucbe5u"&&(H.textContent=et),ce=r(e),Q=a(e,"P",{});var gt=Ct(Q);qe(I.$$.fragment,gt),gt.forEach(n),de=r(e),L=a(e,"P",{"data-svelte-h":!0}),u(L)!=="svelte-1ph5tfx"&&(L.textContent=tt),pe=r(e),P=a(e,"H3",{"data-svelte-h":!0}),u(P)!=="svelte-64zwac"&&(P.textContent=nt),ve=r(e),O=a(e,"P",{"data-svelte-h":!0}),u(O)!=="svelte-19aapop"&&(O.textContent=it),we=r(e),$=a(e,"P",{"data-svelte-h":!0}),u($)!=="svelte-1jj0gap"&&($.innerHTML=lt),xe=r(e),q=a(e,"H3",{"data-svelte-h":!0}),u(q)!=="svelte-wzbg1e"&&(q.textContent=ot),ge=r(e),X=a(e,"P",{"data-svelte-h":!0}),u(X)!=="svelte-q9ex8s"&&(X.innerHTML=at),be=r(e),S=a(e,"P",{"data-svelte-h":!0}),u(S)!=="svelte-6ss75w"&&(S.innerHTML=st),ye=r(e),z=a(e,"H4",{"data-svelte-h":!0}),u(z)!=="svelte-gp47y9"&&(z.textContent=rt),Ce=r(e),E=a(e,"P",{"data-svelte-h":!0}),u(E)!=="svelte-spqfd2"&&(E.textContent=ut),_e=r(e),U=a(e,"P",{"data-svelte-h":!0}),u(U)!=="svelte-11bkrm0"&&(U.innerHTML=ht),Ae=r(e),N=a(e,"H4",{"data-svelte-h":!0}),u(N)!=="svelte-1xkg7bi"&&(N.textContent=ft),Me=r(e),V=a(e,"P",{"data-svelte-h":!0}),u(V)!=="svelte-13nh1h7"&&(V.textContent=mt),Te=r(e),W=a(e,"P",{"data-svelte-h":!0}),u(W)!=="svelte-1so7x1d"&&(W.textContent=ct),ke=r(e),j=a(e,"P",{"data-svelte-h":!0}),u(j)!=="svelte-pt7en5"&&(j.innerHTML=dt),Re=r(e),D=a(e,"H2",{"data-svelte-h":!0}),u(D)!=="svelte-1v4u789"&&(D.textContent=pt),Ye=r(e),B=a(e,"P",{"data-svelte-h":!0}),u(B)!=="svelte-4ulz5k"&&(B.textContent=vt),He=r(e),F=a(e,"H2",{"data-svelte-h":!0}),u(F)!=="svelte-33yqsm"&&(F.textContent=wt),Ie=r(e),G=a(e,"P",{"data-svelte-h":!0}),u(G)!=="svelte-1qf02t2"&&(G.innerHTML=xt)},m(e,t){i(e,l,t),i(e,f,t),i(e,m,t),i(e,p,t),i(e,v,t),i(e,Z,t),i(e,w,t),i(e,ee,t),i(e,x,t),i(e,te,t),i(e,g,t),i(e,ne,t),i(e,b,t),i(e,ie,t),i(e,y,t),i(e,le,t),i(e,C,t),i(e,oe,t),i(e,_,t),i(e,ae,t),i(e,A,t),i(e,se,t),i(e,M,t),i(e,re,t),i(e,K,t),Xe(T,K,null),i(e,ue,t),i(e,k,t),i(e,he,t),i(e,R,t),i(e,fe,t),i(e,Y,t),i(e,me,t),i(e,H,t),i(e,ce,t),i(e,Q,t),Xe(I,Q,null),i(e,de,t),i(e,L,t),i(e,pe,t),i(e,P,t),i(e,ve,t),i(e,O,t),i(e,we,t),i(e,$,t),i(e,xe,t),i(e,q,t),i(e,ge,t),i(e,X,t),i(e,be,t),i(e,S,t),i(e,ye,t),i(e,z,t),i(e,Ce,t),i(e,E,t),i(e,_e,t),i(e,U,t),i(e,Ae,t),i(e,N,t),i(e,Me,t),i(e,V,t),i(e,Te,t),i(e,W,t),i(e,ke,t),i(e,j,t),i(e,Re,t),i(e,D,t),i(e,Ye,t),i(e,B,t),i(e,He,t),i(e,F,t),i(e,Ie,t),i(e,G,t),Le=!0},p:Pe,i(e){Le||(Se(T.$$.fragment,e),Se(I.$$.fragment,e),Le=!0)},o(e){ze(T.$$.fragment,e),ze(I.$$.fragment,e),Le=!1},d(e){e&&(n(l),n(f),n(m),n(p),n(v),n(Z),n(w),n(ee),n(x),n(te),n(g),n(ne),n(b),n(ie),n(y),n(le),n(C),n(oe),n(_),n(ae),n(A),n(se),n(M),n(re),n(K),n(ue),n(k),n(he),n(R),n(fe),n(Y),n(me),n(H),n(ce),n(Q),n(de),n(L),n(pe),n(P),n(ve),n(O),n(we),n($),n(xe),n(q),n(ge),n(X),n(be),n(S),n(ye),n(z),n(Ce),n(E),n(_e),n(U),n(Ae),n(N),n(Me),n(V),n(Te),n(W),n(ke),n(j),n(Re),n(D),n(Ye),n(B),n(He),n(F),n(Ie),n(G)),Ee(T),Ee(I)}}}function Ot(d){let l,c;const f=[d[0],Mt];let m={$$slots:{default:[Pt]},$$scope:{ctx:d}};for(let h=0;h<f.length;h+=1)m=Oe(m,f[h]);return l=new Ht({props:m}),{c(){$e(l.$$.fragment)},l(h){qe(l.$$.fragment,h)},m(h,p){Xe(l,h,p),c=!0},p(h,[p]){const v=p&1?Yt(f,[p&1&&_t(h[0]),p&0&&_t(Mt)]):{};p&2&&(v.$$scope={dirty:p,ctx:h}),l.$set(v)},i(h){c||(Se(l.$$.fragment,h),c=!0)},o(h){ze(l.$$.fragment,h),c=!1},d(h){Ee(l,h)}}}const Mt={title:"YARA and Me: Contributing to YARA's Upcoming Release",description:"You may know YARA, which is written in C, but do you know YARA-X? YARA-X is written in Rust and is the new evolution (perhaps a revolution while we're at it) for the pattern matching utility.",date:"2023-11-30",categories:["YARA","YARA-X","software engineering"],published:!0},Ut=!0;function $t(d,l,c){return d.$$set=f=>{c(0,l=Oe(Oe({},l),yt(f)))},l=yt(l),[l]}class Nt extends kt{constructor(l){super(),Rt(this,l,$t,Ot,Tt,{})}}export{Nt as default,Mt as metadata,Ut as prerender};