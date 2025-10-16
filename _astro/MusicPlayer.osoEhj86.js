import{o as Ma,a as Ba,i as ja}from"./lifecycle.Cb3YCe0s.js";import{$ as Pa,a6 as Da,aJ as za,aK as $a,aL as je,u as Pe,aM as Ia,ab as De,aN as Ra,U as ze,aO as mt,a4 as Wa,aP as Na,c as tt,f as H,a as P,p as Oa,b as Ya,s as c,m as L,aj as R,g as t,d as ct,h,e as n,r as i,n as qa,t as Ct}from"./template.q4GpDIBH.js";import{a as Ka,s as Y}from"./render.BY-tOgIh.js";import{i as M}from"./if.CwR50x5j.js";import{e as Ua,i as Ha}from"./each.BrbB1kxX.js";import{a as D,s as et,c as Ae}from"./props.BJSNG5D8.js";import{e as w}from"./utils.DwvnYssa.js";import{I as x}from"./Icon.BdwQhz7y.js";import"./config.7DeHPzYa.js";import{I as Xa}from"./zh_TW.D-6nPIns.js";import{i as Ga}from"./translation.DYpphiBH.js";const Ja=()=>performance.now(),q={tick:o=>requestAnimationFrame(o),now:()=>Ja(),tasks:new Set};function $e(){const o=q.now();q.tasks.forEach(r=>{r.c(o)||(q.tasks.delete(r),r.f())}),q.tasks.size!==0&&q.tick($e)}function Va(o){let r;return q.tasks.size===0&&q.tick($e),{promise:new Promise(d=>{q.tasks.add(r={c:o,f:d})}),abort(){q.tasks.delete(r)}}}function St(o,r){De(()=>{o.dispatchEvent(new CustomEvent(r))})}function Qa(o){if(o==="float")return"cssFloat";if(o==="offset")return"cssOffset";if(o.startsWith("--"))return o;const r=o.split("-");return r.length===1?r[0]:r[0]+r.slice(1).map(d=>d[0].toUpperCase()+d.slice(1)).join("")}function Ce(o){const r={},d=o.split(";");for(const g of d){const[m,p]=g.split(":");if(!m||p===void 0)break;const E=Qa(m.trim());r[E]=p.trim()}return r}const Za=o=>o;function tr(o,r,d,g){var m=(o&Ia)!==0,p="both",E,F=r.inert,B=r.style.overflow,_,v;function j(){return De(()=>E??=d()(r,g?.()??{},{direction:p}))}var C={is_global:m,in(){r.inert=F,St(r,"introstart"),_=Vt(r,j(),v,1,()=>{St(r,"introend"),_?.abort(),_=E=void 0,r.style.overflow=B})},out(b){r.inert=!0,St(r,"outrostart"),v=Vt(r,j(),_,0,()=>{St(r,"outroend"),b?.()})},stop:()=>{_?.abort(),v?.abort()}},W=Pa;if((W.transitions??=[]).push(C),Ka){var S=m;if(!S){for(var f=W.parent;f&&(f.f&Da)!==0;)for(;(f=f.parent)&&(f.f&za)===0;);S=!f||(f.f&$a)!==0}S&&je(()=>{Pe(()=>C.in())})}}function Vt(o,r,d,g,m){var p=g===1;if(Ra(r)){var E,F=!1;return ze(()=>{if(!F){var b=r({direction:p?"in":"out"});E=Vt(o,b,d,g,m)}}),{abort:()=>{F=!0,E?.abort()},deactivate:()=>E.deactivate(),reset:()=>E.reset(),t:()=>E.t()}}if(d?.deactivate(),!r?.duration)return m(),{abort:mt,deactivate:mt,reset:mt,t:()=>g};const{delay:B=0,css:_,tick:v,easing:j=Za}=r;var C=[];if(p&&d===void 0&&(v&&v(0,1),_)){var W=Ce(_(0,1));C.push(W,W)}var S=()=>1-g,f=o.animate(C,{duration:B,fill:"forwards"});return f.onfinish=()=>{f.cancel();var b=d?.t()??1-g;d?.abort();var u=g-b,a=r.duration*Math.abs(u),K=[];if(a>0){var X=!1;if(_)for(var bt=Math.ceil(a/16.666666666666668),dt=0;dt<=bt;dt+=1){var G=b+u*j(dt/bt),J=Ce(_(G,1-G));K.push(J),X||=J.overflow==="hidden"}X&&(o.style.overflow="hidden"),S=()=>{var V=f.currentTime;return b+u*j(V/a)},v&&Va(()=>{if(f.playState!=="running")return!1;var V=S();return v(V,1-V),!0})}f=o.animate(K,{duration:a,fill:"forwards"}),f.onfinish=()=>{S=()=>g,v?.(g,1-g),m()}},{abort:()=>{f&&(f.cancel(),f.effect=null,f.onfinish=mt)},deactivate:()=>{m=mt},reset:()=>{g===0&&v?.(1,0)},t:()=>S()}}function Se(o,r){return o===r||o?.[Na]===r}function Me(o={},r,d,g){return je(()=>{var m,p;return Wa(()=>{m=p,p=[],Pe(()=>{o!==d(...p)&&(r(o,...p),m&&Se(d(...m),o)&&r(null,...m))})}),()=>{ze(()=>{p&&Se(d(...p),o)&&r(null,...p)})}}),o}function Be(o){return function(...r){var d=r[0];return d.stopPropagation(),o?.apply(this,r)}}function er(o){const r=o-1;return r*r*r+1}function ar(o,{delay:r=0,duration:d=400,easing:g=er,axis:m="y"}={}){const p=getComputedStyle(o),E=+p.opacity,F=m==="y"?"height":"width",B=parseFloat(p[F]),_=m==="y"?["top","bottom"]:["left","right"],v=_.map(u=>`${u[0].toUpperCase()}${u.slice(1)}`),j=parseFloat(p[`padding${v[0]}`]),C=parseFloat(p[`padding${v[1]}`]),W=parseFloat(p[`margin${v[0]}`]),S=parseFloat(p[`margin${v[1]}`]),f=parseFloat(p[`border${v[0]}Width`]),b=parseFloat(p[`border${v[1]}Width`]);return{delay:r,duration:d,easing:g,css:u=>`overflow: hidden;opacity: ${Math.min(u*20,1)*E};${F}: ${u*B}px;padding-${_[0]}: ${u*j}px;padding-${_[1]}: ${u*C}px;margin-${_[0]}: ${u*W}px;margin-${_[1]}: ${u*S}px;border-${_[0]}-width: ${u*f}px;border-${_[1]}-width: ${u*b}px;min-${F}: 0`}}var rr=ct('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),ir=ct('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),nr=ct('<span class="text-sm text-[var(--content-meta)]"></span>'),sr=ct('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),or=ct('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),lr=ct(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        /*left: 8px !important;*/
        bottom: 8px !important;
        right: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 8px !important;*/
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 8px !important;*/
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function yr(o,r){Ya(r,!1);let d=L(!1),g=L(!1),m=L(!1),p=L(!1),E=L(0),F=L(0),B=L(.7),_=L(!1),v=L(!1),j=L(!1),C=L(0),W=L(""),S=L(!1),f=L({title:"示例歌曲",artist:"示例艺术家",cover:"/favicon/favicon-light-192.png",url:"",duration:0}),b=L([]),u=L(0),a=L(),K=L(),X=L();const bt=[{id:1,title:"春日影",artist:"Crychic",cover:"assets/music/cover/haru.webp",url:"assets/music/url/haru.mp3",duration:240}];function dt(){!t(a)||!t(f).url||(t(d)?t(a).pause():t(a).play())}function G(){c(g,!t(g)),t(g)&&(c(p,!1),c(m,!1))}function J(){c(m,!t(m)),t(m)&&(c(g,!1),c(p,!1))}function V(){c(p,!t(p))}function Ie(){c(j,!t(j))}function Re(){c(C,(t(C)+1)%3)}function We(){if(t(b).length<=1)return;const l=t(u)>0?t(u)-1:t(b).length-1;ht(l)}function Mt(){if(t(b).length<=1)return;let l;if(t(j))do l=Math.floor(Math.random()*t(b).length);while(l===t(u)&&t(b).length>1);else l=t(u)<t(b).length-1?t(u)+1:0;ht(l)}function ht(l){if(l<0||l>=t(b).length)return;const z=t(d);c(u,l),t(a)&&t(a).pause(),Qt(t(b)[t(u)]),(z||!t(d))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function gt(l){return l.startsWith("http://")||l.startsWith("https://")||l.startsWith("/")?l:`/${l}`}function Qt(l){!l||!t(a)||(c(f,{...l}),l.url?(c(v,!0),t(a).pause(),R(a,t(a).currentTime=0),c(E,0),c(F,l.duration??0),t(a).removeEventListener("loadeddata",Zt),t(a).removeEventListener("error",te),t(a).removeEventListener("loadstart",ee),t(a).addEventListener("loadeddata",Zt,{once:!0}),t(a).addEventListener("error",te,{once:!0}),t(a).addEventListener("loadstart",ee,{once:!0}),R(a,t(a).src=gt(l.url)),t(a).load()):c(v,!1))}function Zt(){c(v,!1),t(a)?.duration&&t(a).duration>1&&(c(F,Math.floor(t(a).duration)),t(b)[t(u)]&&R(b,t(b)[t(u)].duration=t(F)),R(f,t(f).duration=t(F)))}function te(l){c(v,!1),Bt(`无法播放 "${t(f).title}"，正在尝试下一首...`),t(b).length>1?setTimeout(()=>Mt(),1e3):Bt("播放列表中没有可用的歌曲")}function ee(){}function Bt(l){c(W,l),c(S,!0),setTimeout(()=>{c(S,!1)},3e3)}function Ne(){c(S,!1)}function Oe(l){if(!t(a)||!t(K))return;const z=t(K).getBoundingClientRect(),xt=(l.clientX-z.left)/z.width*t(F);R(a,t(a).currentTime=xt),c(E,xt)}function Ye(l){if(!t(a)||!t(X))return;const z=t(X).getBoundingClientRect(),Q=Math.max(0,Math.min(1,(l.clientX-z.left)/z.width));c(B,Q),R(a,t(a).volume=t(B)),c(_,t(B)===0)}function ae(){t(a)&&(c(_,!t(_)),R(a,t(a).muted=t(_)))}function re(l){if(!Number.isFinite(l)||l<0)return"0:00";const z=Math.floor(l/60),Q=Math.floor(l%60);return`${z}:${Q.toString().padStart(2,"0")}`}function qe(){t(a)&&(t(a).addEventListener("play",()=>{c(d,!0)}),t(a).addEventListener("pause",()=>{c(d,!1)}),t(a).addEventListener("timeupdate",()=>{c(E,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(C)===1?(R(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(C)===2||t(u)<t(b).length-1||t(j)?Mt():c(d,!1)}),t(a).addEventListener("error",l=>{c(v,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}Ma(()=>{c(a,new Audio),R(a,t(a).volume=t(B)),qe(),c(b,[...bt]),t(b).length>0?Qt(t(b)[0]):Bt("本地播放列表为空")}),Ba(()=>{t(a)&&(t(a).pause(),R(a,t(a).src=""))}),ja();var ie=tt(),Ke=H(ie);{var Ue=l=>{var z=lr(),Q=H(z);{var xt=e=>{var y=rr(),k=n(y),T=n(k);x(T,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var A=h(T,2),s=n(A,!0);i(A);var N=h(A,2),ot=n(N);x(ot,{icon:"material-symbols:close",class:"text-lg"}),i(N),i(k),i(y),Ct(()=>Y(s,t(W))),w("click",N,Ne),P(e,y)};M(Q,e=>{t(S)&&e(xt)})}var jt=h(Q,2);let ne;var at=n(jt);let se;var He=n(at);{var Xe=e=>{x(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},Ge=e=>{var y=tt(),k=H(y);{var T=s=>{var N=ir();P(s,N)},A=s=>{x(s,{icon:"material-symbols:music-note",class:"text-white text-lg"})};M(k,s=>{t(d)?s(T):s(A,!1)},!0)}P(e,y)};M(He,e=>{t(v)?e(Xe):e(Ge,!1)})}i(at);var rt=h(at,2);let oe;var le=n(rt),Pt=n(le),Dt=n(Pt);let ce;var de=h(Dt,2),Je=n(de);{var Ve=e=>{x(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},Qe=e=>{var y=tt(),k=H(y);{var T=s=>{x(s,{icon:"material-symbols:pause",class:"text-white text-xl"})},A=s=>{x(s,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};M(k,s=>{t(d)?s(T):s(A,!1)},!0)}P(e,y)};M(Je,e=>{t(v)?e(Ve):e(Qe,!1)})}i(de),i(Pt);var zt=h(Pt,2),$t=n(zt),Ze=n($t,!0);i($t);var ue=h($t,2),ta=n(ue,!0);i(ue),i(zt);var ve=h(zt,2),yt=n(ve),ea=n(yt);x(ea,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(yt);var It=h(yt,2),aa=n(It);x(aa,{icon:"material-symbols:expand-less",class:"text-lg"}),i(It),i(ve),i(le),i(rt);var _t=h(rt,2);let fe;var Rt=n(_t),Wt=n(Rt),pe=n(Wt);let me;i(Wt);var Nt=h(Wt,2),Ot=n(Nt),ra=n(Ot,!0);i(Ot);var Yt=h(Ot,2),ia=n(Yt,!0);i(Yt);var be=h(Yt,2),na=n(be);i(be),i(Nt);var he=h(Nt,2),wt=n(he),sa=n(wt);x(sa,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(wt);var qt=h(wt,2),oa=n(qt);x(oa,{icon:"material-symbols:expand-more",class:"text-lg"}),i(qt),i(he),i(Rt);var Kt=h(Rt,2),it=n(Kt),la=n(it);i(it),Me(it,e=>c(K,e),()=>t(K)),i(Kt);var Ut=h(Kt,2),nt=n(Ut);let ge;var ca=n(nt);x(ca,{icon:"material-symbols:shuffle",class:"text-lg"}),i(nt);var ut=h(nt,2),da=n(ut);x(da,{icon:"material-symbols:skip-previous",class:"text-xl"}),i(ut);var st=h(ut,2);let xe;var ua=n(st);{var va=e=>{x(e,{icon:"eos-icons:loading",class:"text-xl"})},fa=e=>{var y=tt(),k=H(y);{var T=s=>{x(s,{icon:"material-symbols:pause",class:"text-xl"})},A=s=>{x(s,{icon:"material-symbols:play-arrow",class:"text-xl"})};M(k,s=>{t(d)?s(T):s(A,!1)},!0)}P(e,y)};M(ua,e=>{t(v)?e(va):e(fa,!1)})}i(st);var vt=h(st,2),pa=n(vt);x(pa,{icon:"material-symbols:skip-next",class:"text-xl"}),i(vt);var kt=h(vt,2);let ye;var ma=n(kt);{var ba=e=>{x(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},ha=e=>{var y=tt(),k=H(y);{var T=s=>{x(s,{icon:"material-symbols:repeat",class:"text-lg"})},A=s=>{x(s,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};M(k,s=>{t(C)===2?s(T):s(A,!1)},!0)}P(e,y)};M(ma,e=>{t(C)===1?e(ba):e(ha,!1)})}i(kt),i(Ut);var _e=h(Ut,2),Et=n(_e),ga=n(Et);{var xa=e=>{x(e,{icon:"material-symbols:volume-off",class:"text-lg"})},ya=e=>{var y=tt(),k=H(y);{var T=s=>{x(s,{icon:"material-symbols:volume-down",class:"text-lg"})},A=s=>{x(s,{icon:"material-symbols:volume-up",class:"text-lg"})};M(k,s=>{t(B)<.5?s(T):s(A,!1)},!0)}P(e,y)};M(ga,e=>{t(_)||t(B)===0?e(xa):e(ya,!1)})}i(Et);var Z=h(Et,2),_a=n(Z);i(Z),Me(Z,e=>c(X,e),()=>t(X));var Ft=h(Z,2);let we;var wa=n(Ft);x(wa,{icon:"material-symbols:queue-music",class:"text-lg"}),i(Ft),i(_e),i(_t);var ka=h(_t,2);{var Ea=e=>{var y=or(),k=n(y),T=n(k),A=n(T,!0);i(T);var s=h(T,2),N=n(s);x(N,{icon:"material-symbols:close",class:"text-lg"}),i(s),i(k);var ot=h(k,2);Ua(ot,5,()=>t(b),Ha,(ft,U,$)=>{var O=sr();let Lt;var pt=n(O),Fa=n(pt);{var La=I=>{x(I,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Ta=I=>{var At=tt(),Gt=H(At);{var Jt=lt=>{x(lt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Sa=lt=>{var Te=nr();Te.textContent=$+1,P(lt,Te)};M(Gt,lt=>{$===t(u)?lt(Jt):lt(Sa,!1)},!0)}P(I,At)};M(Fa,I=>{$===t(u)&&t(d)?I(La):I(Ta,!1)})}i(pt);var Ht=h(pt,2),ke=n(Ht);i(Ht);var Ee=h(Ht,2),Tt=n(Ee);let Fe;var Aa=n(Tt,!0);i(Tt);var Xt=h(Tt,2);let Le;var Ca=n(Xt,!0);i(Xt),i(Ee),i(O),Ct((I,At,Gt,Jt)=>{Lt=D(O,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,Lt,I),et(O,"aria-label",`播放 ${t(U).title??""} - ${t(U).artist??""}`),et(ke,"src",At),et(ke,"alt",t(U).title),Fe=D(Tt,1,"font-medium truncate",null,Fe,Gt),Y(Aa,t(U).title),Le=D(Xt,1,"text-sm text-[var(--content-meta)] truncate",null,Le,Jt),Y(Ca,t(U).artist)},[()=>({"bg-[var(--btn-plain-bg)]":$===t(u),"text-[var(--primary)]":$===t(u)}),()=>gt(t(U).cover),()=>({"text-[var(--primary)]":$===t(u),"text-90":$!==t(u)}),()=>({"text-[var(--primary)]":$===t(u)})]),w("click",O,()=>ht($)),w("keydown",O,I=>{(I.key==="Enter"||I.key===" ")&&(I.preventDefault(),ht($))}),P(ft,O)}),i(ot),i(y),Ct(ft=>Y(A,ft),[()=>Ga(Xa.playlist)]),w("click",s,V),tr(3,y,()=>ar,()=>({duration:300,axis:"y"})),P(e,y)};M(ka,e=>{t(p)&&e(Ea)})}i(jt),qa(2),Ct((e,y,k,T,A,s,N,ot,ft,U,$,O,Lt,pt)=>{ne=D(jt,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,ne,e),se=D(at,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,se,y),oe=D(rt,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,oe,k),et(Dt,"src",T),ce=D(Dt,1,"w-full h-full object-cover transition-transform duration-300",null,ce,A),Y(Ze,t(f).title),Y(ta,t(f).artist),fe=D(_t,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,fe,s),et(pe,"src",N),me=D(pe,1,"w-full h-full object-cover transition-transform duration-300",null,me,ot),Y(ra,t(f).title),Y(ia,t(f).artist),Y(na,`${ft??""} / ${U??""}`),et(it,"aria-valuenow",t(F)>0?t(E)/t(F)*100:0),Ae(la,`width: ${t(F)>0?t(E)/t(F)*100:0}%`),ge=D(nt,1,"w-10 h-10 rounded-lg",null,ge,$),nt.disabled=t(b).length<=1,ut.disabled=t(b).length<=1,xe=D(st,1,"btn-regular w-12 h-12 rounded-full",null,xe,O),st.disabled=t(v),vt.disabled=t(b).length<=1,ye=D(kt,1,"w-10 h-10 rounded-lg",null,ye,Lt),et(Z,"aria-valuenow",t(B)*100),Ae(_a,`width: ${t(B)*100}%`),we=D(Ft,1,"btn-plain w-8 h-8 rounded-lg",null,we,pt)},[()=>({expanded:t(g),"hidden-mode":t(m)}),()=>({"opacity-0":!t(m),"scale-0":!t(m),"pointer-events-none":!t(m)}),()=>({"opacity-0":t(g)||t(m),"scale-95":t(g)||t(m),"pointer-events-none":t(g)||t(m)}),()=>gt(t(f).cover),()=>({spinning:t(d)&&!t(v),"animate-pulse":t(v)}),()=>({"opacity-0":!t(g),"scale-95":!t(g),"pointer-events-none":!t(g)}),()=>gt(t(f).cover),()=>({spinning:t(d)&&!t(v),"animate-pulse":t(v)}),()=>re(t(E)),()=>re(t(F)),()=>({"btn-regular":t(j),"btn-plain":!t(j)}),()=>({"opacity-50":t(v)}),()=>({"btn-regular":t(C)>0,"btn-plain":t(C)===0}),()=>({"text-[var(--primary)]":t(p)})]),w("click",at,J),w("keydown",at,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),J())}),w("click",yt,Be(J)),w("click",It,Be(G)),w("click",rt,G),w("keydown",rt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),G())}),w("click",wt,J),w("click",qt,G),w("click",it,Oe),w("keydown",it,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(K).getBoundingClientRect();const k=.5*t(F);t(a)&&(R(a,t(a).currentTime=k),c(E,k))}}),w("click",nt,Ie),w("click",ut,We),w("click",st,dt),w("click",vt,Mt),w("click",kt,Re),w("click",Et,ae),w("click",Z,Ye),w("keydown",Z,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&ae())}),w("click",Ft,V),P(l,z)};M(Ke,l=>{l(Ue)})}P(o,ie),Oa()}export{yr as default};
