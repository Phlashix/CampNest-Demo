(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[57],{8599:function(e,t,r){Promise.resolve().then(r.bind(r,2924))},2924:function(e,t,r){"use strict";r.d(t,{default:function(){return d}});var n=r(7437),s=r(2265),a=r(7138),i=r(6463),o=r(3274),u=r(6127),c=r(4042),l=r(5869),f=r(6657),m=r(6191);function d(){let e=(0,i.useRouter)(),{token:t,isAuthenticated:r,loading:d}=(0,m.a)(),[h,p]=(0,s.useState)([]),[x,y]=(0,s.useState)(!0),[v,g]=(0,s.useState)(null),k=(0,s.useCallback)(async()=>{if(t)try{p(await f.hi.getFavorites(t))}catch(e){g(e.message)}finally{y(!1)}},[t]);async function w(e){p(t=>t.filter(t=>t.id!==e));try{await f.hi.removeFavorite(e,t)}catch(e){k()}}return((0,s.useEffect)(()=>{if(!d){if(!r){e.replace("/login?redirect=/favorites");return}k()}},[d,r,k,e]),d||x)?(0,n.jsx)("main",{className:"max-w-6xl mx-auto px-4 py-20 flex justify-center",children:(0,n.jsx)(o.Z,{className:"animate-spin text-forest",size:28})}):(0,n.jsxs)("main",{className:"max-w-7xl mx-auto px-4 md:px-8 py-8",children:[(0,n.jsx)("h1",{className:"font-heading font-extrabold text-2xl md:text-3xl text-slate",children:"Mes favoris"}),(0,n.jsx)("p",{className:"text-sm text-slate/60 mt-1",children:"Les emplacements que vous avez enregistr\xe9s pour vos prochaines escapades."}),v&&(0,n.jsxs)("p",{className:"alert-error flex items-start gap-2 mt-6",children:[(0,n.jsx)(u.Z,{size:15,className:"mt-0.5 shrink-0"})," ",v]}),0!==h.length||v?(0,n.jsx)("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 mt-8",children:h.map(e=>(0,n.jsx)(l.Z,{spot:e,isFavorite:!0,onToggleFavorite:w},e.id))}):(0,n.jsxs)("div",{className:"surface p-10 text-center mt-8",children:[(0,n.jsx)(c.Z,{className:"mx-auto text-slate/30",size:32}),(0,n.jsx)("h2",{className:"font-heading font-bold text-lg mt-3",children:"Aucun favori pour l'instant"}),(0,n.jsx)("p",{className:"text-sm text-slate/60 mt-2",children:"Cliquez sur le cœur d'une annonce pour la retrouver ici."}),(0,n.jsx)(a.default,{href:"/",className:"btn-primary text-sm mt-5",children:"Explorer les emplacements"})]})]})}},8030:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(2265);/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ")};/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,n.forwardRef)((e,t)=>{let{color:r="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:u,className:c="",children:l,iconNode:f,...m}=e;return(0,n.createElement)("svg",{ref:t,...i,width:s,height:s,stroke:r,strokeWidth:u?24*Number(o)/Number(s):o,className:a("lucide",c),...m},[...f.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(l)?l:[l]])}),u=(e,t)=>{let r=(0,n.forwardRef)((r,i)=>{let{className:u,...c}=r;return(0,n.createElement)(o,{ref:i,iconNode:t,className:a("lucide-".concat(s(e)),u),...c})});return r.displayName="".concat(e),r}},518:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},7592:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},4042:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]])},2874:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("ImageOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]])},3274:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},9338:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]])},6127:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.408.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(8030).Z)("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},7138:function(e,t,r){"use strict";r.d(t,{default:function(){return s.a}});var n=r(231),s=r.n(n)},6463:function(e,t,r){"use strict";var n=r(1169);r.o(n,"useParams")&&r.d(t,{useParams:function(){return n.useParams}}),r.o(n,"usePathname")&&r.d(t,{usePathname:function(){return n.usePathname}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}}),r.o(n,"useSearchParams")&&r.d(t,{useSearchParams:function(){return n.useSearchParams}})},357:function(e,t,r){"use strict";var n,s;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(s=r.g.process)?void 0:s.env)?r.g.process:r(8081)},8081:function(e){!function(){var t={229:function(e){var t,r,n,s=e.exports={};function a(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var u=[],c=!1,l=-1;function f(){c&&n&&(c=!1,n.length?u=n.concat(u):l=-1,u.length&&m())}function m(){if(!c){var e=o(f);c=!0;for(var t=u.length;t;){for(n=u,u=[];++l<t;)n&&n[l].run();l=-1,t=u.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function h(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new d(e,t)),1!==u.length||c||o(m)},d.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=h,s.addListener=h,s.once=h,s.off=h,s.removeListener=h,s.removeAllListeners=h,s.emit=h,s.prependListener=h,s.prependOnceListener=h,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}},r={};function n(e){var s=r[e];if(void 0!==s)return s.exports;var a=r[e]={exports:{}},i=!0;try{t[e](a,a.exports,n),i=!1}finally{i&&delete r[e]}return a.exports}n.ab="//";var s=n(229);e.exports=s}()}},function(e){e.O(0,[231,309,971,23,744],function(){return e(e.s=8599)}),_N_E=e.O()}]);