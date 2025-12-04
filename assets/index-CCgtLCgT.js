(function(){const w=document.createElement("link").relList;if(w&&w.supports&&w.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))p(O);new MutationObserver(O=>{for(const N of O)if(N.type==="childList")for(const G of N.addedNodes)G.tagName==="LINK"&&G.rel==="modulepreload"&&p(G)}).observe(document,{childList:!0,subtree:!0});function z(O){const N={};return O.integrity&&(N.integrity=O.integrity),O.referrerPolicy&&(N.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?N.credentials="include":O.crossOrigin==="anonymous"?N.credentials="omit":N.credentials="same-origin",N}function p(O){if(O.ep)return;O.ep=!0;const N=z(O);fetch(O.href,N)}})();function xp(A){return A&&A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A}var cs={exports:{}},Ci={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp;function tg(){if(gp)return Ci;gp=1;var A=Symbol.for("react.transitional.element"),w=Symbol.for("react.fragment");function z(p,O,N){var G=null;if(N!==void 0&&(G=""+N),O.key!==void 0&&(G=""+O.key),"key"in O){N={};for(var H in O)H!=="key"&&(N[H]=O[H])}else N=O;return O=N.ref,{$$typeof:A,type:p,key:G,ref:O!==void 0?O:null,props:N}}return Ci.Fragment=w,Ci.jsx=z,Ci.jsxs=z,Ci}var hp;function ag(){return hp||(hp=1,cs.exports=tg()),cs.exports}var E=ag(),rs={exports:{}},q={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function lg(){if(mp)return q;mp=1;var A=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),G=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),M=Symbol.for("react.activity"),Y=Symbol.iterator;function ee(o){return o===null||typeof o!="object"?null:(o=Y&&o[Y]||o["@@iterator"],typeof o=="function"?o:null)}var ve={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Le=Object.assign,Lt={};function We(o,b,D){this.props=o,this.context=b,this.refs=Lt,this.updater=D||ve}We.prototype.isReactComponent={},We.prototype.setState=function(o,b){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,b,"setState")},We.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function Wt(){}Wt.prototype=We.prototype;function Ne(o,b,D){this.props=o,this.context=b,this.refs=Lt,this.updater=D||ve}var rt=Ne.prototype=new Wt;rt.constructor=Ne,Le(rt,We.prototype),rt.isPureReactComponent=!0;var At=Array.isArray;function qe(){}var $={H:null,A:null,T:null,S:null},Ge=Object.prototype.hasOwnProperty;function Et(o,b,D){var L=D.ref;return{$$typeof:A,type:o,key:b,ref:L!==void 0?L:null,props:D}}function Qa(o,b){return Et(o.type,b,o.props)}function Tt(o){return typeof o=="object"&&o!==null&&o.$$typeof===A}function Qe(o){var b={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(D){return b[D]})}var ba=/\/+/g;function Ut(o,b){return typeof o=="object"&&o!==null&&o.key!=null?Qe(""+o.key):b.toString(36)}function vt(o){switch(o.status){case"fulfilled":return o.value;case"rejected":throw o.reason;default:switch(typeof o.status=="string"?o.then(qe,qe):(o.status="pending",o.then(function(b){o.status==="pending"&&(o.status="fulfilled",o.value=b)},function(b){o.status==="pending"&&(o.status="rejected",o.reason=b)})),o.status){case"fulfilled":return o.value;case"rejected":throw o.reason}}throw o}function v(o,b,D,L,k){var Z=typeof o;(Z==="undefined"||Z==="boolean")&&(o=null);var ie=!1;if(o===null)ie=!0;else switch(Z){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(o.$$typeof){case A:case w:ie=!0;break;case Q:return ie=o._init,v(ie(o._payload),b,D,L,k)}}if(ie)return k=k(o),ie=L===""?"."+Ut(o,0):L,At(k)?(D="",ie!=null&&(D=ie.replace(ba,"$&/")+"/"),v(k,b,D,"",function(Ml){return Ml})):k!=null&&(Tt(k)&&(k=Qa(k,D+(k.key==null||o&&o.key===k.key?"":(""+k.key).replace(ba,"$&/")+"/")+ie)),b.push(k)),1;ie=0;var Ie=L===""?".":L+":";if(At(o))for(var ye=0;ye<o.length;ye++)L=o[ye],Z=Ie+Ut(L,ye),ie+=v(L,b,D,Z,k);else if(ye=ee(o),typeof ye=="function")for(o=ye.call(o),ye=0;!(L=o.next()).done;)L=L.value,Z=Ie+Ut(L,ye++),ie+=v(L,b,D,Z,k);else if(Z==="object"){if(typeof o.then=="function")return v(vt(o),b,D,L,k);throw b=String(o),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.")}return ie}function T(o,b,D){if(o==null)return o;var L=[],k=0;return v(o,L,"","",function(Z){return b.call(D,Z,k++)}),L}function j(o){if(o._status===-1){var b=o._result;b=b(),b.then(function(D){(o._status===0||o._status===-1)&&(o._status=1,o._result=D)},function(D){(o._status===0||o._status===-1)&&(o._status=2,o._result=D)}),o._status===-1&&(o._status=0,o._result=b)}if(o._status===1)return o._result.default;throw o._result}var re=typeof reportError=="function"?reportError:function(o){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var b=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof o=="object"&&o!==null&&typeof o.message=="string"?String(o.message):String(o),error:o});if(!window.dispatchEvent(b))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",o);return}console.error(o)},de={map:T,forEach:function(o,b,D){T(o,function(){b.apply(this,arguments)},D)},count:function(o){var b=0;return T(o,function(){b++}),b},toArray:function(o){return T(o,function(b){return b})||[]},only:function(o){if(!Tt(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};return q.Activity=M,q.Children=de,q.Component=We,q.Fragment=z,q.Profiler=O,q.PureComponent=Ne,q.StrictMode=p,q.Suspense=x,q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,q.__COMPILER_RUNTIME={__proto__:null,c:function(o){return $.H.useMemoCache(o)}},q.cache=function(o){return function(){return o.apply(null,arguments)}},q.cacheSignal=function(){return null},q.cloneElement=function(o,b,D){if(o==null)throw Error("The argument must be a React element, but you passed "+o+".");var L=Le({},o.props),k=o.key;if(b!=null)for(Z in b.key!==void 0&&(k=""+b.key),b)!Ge.call(b,Z)||Z==="key"||Z==="__self"||Z==="__source"||Z==="ref"&&b.ref===void 0||(L[Z]=b[Z]);var Z=arguments.length-2;if(Z===1)L.children=D;else if(1<Z){for(var ie=Array(Z),Ie=0;Ie<Z;Ie++)ie[Ie]=arguments[Ie+2];L.children=ie}return Et(o.type,k,L)},q.createContext=function(o){return o={$$typeof:G,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null},o.Provider=o,o.Consumer={$$typeof:N,_context:o},o},q.createElement=function(o,b,D){var L,k={},Z=null;if(b!=null)for(L in b.key!==void 0&&(Z=""+b.key),b)Ge.call(b,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&(k[L]=b[L]);var ie=arguments.length-2;if(ie===1)k.children=D;else if(1<ie){for(var Ie=Array(ie),ye=0;ye<ie;ye++)Ie[ye]=arguments[ye+2];k.children=Ie}if(o&&o.defaultProps)for(L in ie=o.defaultProps,ie)k[L]===void 0&&(k[L]=ie[L]);return Et(o,Z,k)},q.createRef=function(){return{current:null}},q.forwardRef=function(o){return{$$typeof:H,render:o}},q.isValidElement=Tt,q.lazy=function(o){return{$$typeof:Q,_payload:{_status:-1,_result:o},_init:j}},q.memo=function(o,b){return{$$typeof:C,type:o,compare:b===void 0?null:b}},q.startTransition=function(o){var b=$.T,D={};$.T=D;try{var L=o(),k=$.S;k!==null&&k(D,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(qe,re)}catch(Z){re(Z)}finally{b!==null&&D.types!==null&&(b.types=D.types),$.T=b}},q.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},q.use=function(o){return $.H.use(o)},q.useActionState=function(o,b,D){return $.H.useActionState(o,b,D)},q.useCallback=function(o,b){return $.H.useCallback(o,b)},q.useContext=function(o){return $.H.useContext(o)},q.useDebugValue=function(){},q.useDeferredValue=function(o,b){return $.H.useDeferredValue(o,b)},q.useEffect=function(o,b){return $.H.useEffect(o,b)},q.useEffectEvent=function(o){return $.H.useEffectEvent(o)},q.useId=function(){return $.H.useId()},q.useImperativeHandle=function(o,b,D){return $.H.useImperativeHandle(o,b,D)},q.useInsertionEffect=function(o,b){return $.H.useInsertionEffect(o,b)},q.useLayoutEffect=function(o,b){return $.H.useLayoutEffect(o,b)},q.useMemo=function(o,b){return $.H.useMemo(o,b)},q.useOptimistic=function(o,b){return $.H.useOptimistic(o,b)},q.useReducer=function(o,b,D){return $.H.useReducer(o,b,D)},q.useRef=function(o){return $.H.useRef(o)},q.useState=function(o){return $.H.useState(o)},q.useSyncExternalStore=function(o,b,D){return $.H.useSyncExternalStore(o,b,D)},q.useTransition=function(){return $.H.useTransition()},q.version="19.2.1",q}var vp;function ps(){return vp||(vp=1,rs.exports=lg()),rs.exports}var bt=ps();const ig=xp(bt);var ss={exports:{}},bi={},us={exports:{}},os={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function ng(){return yp||(yp=1,(function(A){function w(v,T){var j=v.length;v.push(T);e:for(;0<j;){var re=j-1>>>1,de=v[re];if(0<O(de,T))v[re]=T,v[j]=de,j=re;else break e}}function z(v){return v.length===0?null:v[0]}function p(v){if(v.length===0)return null;var T=v[0],j=v.pop();if(j!==T){v[0]=j;e:for(var re=0,de=v.length,o=de>>>1;re<o;){var b=2*(re+1)-1,D=v[b],L=b+1,k=v[L];if(0>O(D,j))L<de&&0>O(k,D)?(v[re]=k,v[L]=j,re=L):(v[re]=D,v[b]=j,re=b);else if(L<de&&0>O(k,j))v[re]=k,v[L]=j,re=L;else break e}}return T}function O(v,T){var j=v.sortIndex-T.sortIndex;return j!==0?j:v.id-T.id}if(A.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var N=performance;A.unstable_now=function(){return N.now()}}else{var G=Date,H=G.now();A.unstable_now=function(){return G.now()-H}}var x=[],C=[],Q=1,M=null,Y=3,ee=!1,ve=!1,Le=!1,Lt=!1,We=typeof setTimeout=="function"?setTimeout:null,Wt=typeof clearTimeout=="function"?clearTimeout:null,Ne=typeof setImmediate<"u"?setImmediate:null;function rt(v){for(var T=z(C);T!==null;){if(T.callback===null)p(C);else if(T.startTime<=v)p(C),T.sortIndex=T.expirationTime,w(x,T);else break;T=z(C)}}function At(v){if(Le=!1,rt(v),!ve)if(z(x)!==null)ve=!0,qe||(qe=!0,Qe());else{var T=z(C);T!==null&&vt(At,T.startTime-v)}}var qe=!1,$=-1,Ge=5,Et=-1;function Qa(){return Lt?!0:!(A.unstable_now()-Et<Ge)}function Tt(){if(Lt=!1,qe){var v=A.unstable_now();Et=v;var T=!0;try{e:{ve=!1,Le&&(Le=!1,Wt($),$=-1),ee=!0;var j=Y;try{t:{for(rt(v),M=z(x);M!==null&&!(M.expirationTime>v&&Qa());){var re=M.callback;if(typeof re=="function"){M.callback=null,Y=M.priorityLevel;var de=re(M.expirationTime<=v);if(v=A.unstable_now(),typeof de=="function"){M.callback=de,rt(v),T=!0;break t}M===z(x)&&p(x),rt(v)}else p(x);M=z(x)}if(M!==null)T=!0;else{var o=z(C);o!==null&&vt(At,o.startTime-v),T=!1}}break e}finally{M=null,Y=j,ee=!1}T=void 0}}finally{T?Qe():qe=!1}}}var Qe;if(typeof Ne=="function")Qe=function(){Ne(Tt)};else if(typeof MessageChannel<"u"){var ba=new MessageChannel,Ut=ba.port2;ba.port1.onmessage=Tt,Qe=function(){Ut.postMessage(null)}}else Qe=function(){We(Tt,0)};function vt(v,T){$=We(function(){v(A.unstable_now())},T)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(v){v.callback=null},A.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ge=0<v?Math.floor(1e3/v):5},A.unstable_getCurrentPriorityLevel=function(){return Y},A.unstable_next=function(v){switch(Y){case 1:case 2:case 3:var T=3;break;default:T=Y}var j=Y;Y=T;try{return v()}finally{Y=j}},A.unstable_requestPaint=function(){Lt=!0},A.unstable_runWithPriority=function(v,T){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var j=Y;Y=v;try{return T()}finally{Y=j}},A.unstable_scheduleCallback=function(v,T,j){var re=A.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?re+j:re):j=re,v){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=j+de,v={id:Q++,callback:T,priorityLevel:v,startTime:j,expirationTime:de,sortIndex:-1},j>re?(v.sortIndex=j,w(C,v),z(x)===null&&v===z(C)&&(Le?(Wt($),$=-1):Le=!0,vt(At,j-re))):(v.sortIndex=de,w(x,v),ve||ee||(ve=!0,qe||(qe=!0,Qe()))),v},A.unstable_shouldYield=Qa,A.unstable_wrapCallback=function(v){var T=Y;return function(){var j=Y;Y=T;try{return v.apply(this,arguments)}finally{Y=j}}}})(os)),os}var Sp;function cg(){return Sp||(Sp=1,us.exports=ng()),us.exports}var ds={exports:{}},He={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function rg(){if(Cp)return He;Cp=1;var A=ps();function w(x){var C="https://react.dev/errors/"+x;if(1<arguments.length){C+="?args[]="+encodeURIComponent(arguments[1]);for(var Q=2;Q<arguments.length;Q++)C+="&args[]="+encodeURIComponent(arguments[Q])}return"Minified React error #"+x+"; visit "+C+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function z(){}var p={d:{f:z,r:function(){throw Error(w(522))},D:z,C:z,L:z,m:z,X:z,S:z,M:z},p:0,findDOMNode:null},O=Symbol.for("react.portal");function N(x,C,Q){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:M==null?null:""+M,children:x,containerInfo:C,implementation:Q}}var G=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function H(x,C){if(x==="font")return"";if(typeof C=="string")return C==="use-credentials"?C:""}return He.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=p,He.createPortal=function(x,C){var Q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!C||C.nodeType!==1&&C.nodeType!==9&&C.nodeType!==11)throw Error(w(299));return N(x,C,null,Q)},He.flushSync=function(x){var C=G.T,Q=p.p;try{if(G.T=null,p.p=2,x)return x()}finally{G.T=C,p.p=Q,p.d.f()}},He.preconnect=function(x,C){typeof x=="string"&&(C?(C=C.crossOrigin,C=typeof C=="string"?C==="use-credentials"?C:"":void 0):C=null,p.d.C(x,C))},He.prefetchDNS=function(x){typeof x=="string"&&p.d.D(x)},He.preinit=function(x,C){if(typeof x=="string"&&C&&typeof C.as=="string"){var Q=C.as,M=H(Q,C.crossOrigin),Y=typeof C.integrity=="string"?C.integrity:void 0,ee=typeof C.fetchPriority=="string"?C.fetchPriority:void 0;Q==="style"?p.d.S(x,typeof C.precedence=="string"?C.precedence:void 0,{crossOrigin:M,integrity:Y,fetchPriority:ee}):Q==="script"&&p.d.X(x,{crossOrigin:M,integrity:Y,fetchPriority:ee,nonce:typeof C.nonce=="string"?C.nonce:void 0})}},He.preinitModule=function(x,C){if(typeof x=="string")if(typeof C=="object"&&C!==null){if(C.as==null||C.as==="script"){var Q=H(C.as,C.crossOrigin);p.d.M(x,{crossOrigin:Q,integrity:typeof C.integrity=="string"?C.integrity:void 0,nonce:typeof C.nonce=="string"?C.nonce:void 0})}}else C==null&&p.d.M(x)},He.preload=function(x,C){if(typeof x=="string"&&typeof C=="object"&&C!==null&&typeof C.as=="string"){var Q=C.as,M=H(Q,C.crossOrigin);p.d.L(x,Q,{crossOrigin:M,integrity:typeof C.integrity=="string"?C.integrity:void 0,nonce:typeof C.nonce=="string"?C.nonce:void 0,type:typeof C.type=="string"?C.type:void 0,fetchPriority:typeof C.fetchPriority=="string"?C.fetchPriority:void 0,referrerPolicy:typeof C.referrerPolicy=="string"?C.referrerPolicy:void 0,imageSrcSet:typeof C.imageSrcSet=="string"?C.imageSrcSet:void 0,imageSizes:typeof C.imageSizes=="string"?C.imageSizes:void 0,media:typeof C.media=="string"?C.media:void 0})}},He.preloadModule=function(x,C){if(typeof x=="string")if(C){var Q=H(C.as,C.crossOrigin);p.d.m(x,{as:typeof C.as=="string"&&C.as!=="script"?C.as:void 0,crossOrigin:Q,integrity:typeof C.integrity=="string"?C.integrity:void 0})}else p.d.m(x)},He.requestFormReset=function(x){p.d.r(x)},He.unstable_batchedUpdates=function(x,C){return x(C)},He.useFormState=function(x,C,Q){return G.H.useFormState(x,C,Q)},He.useFormStatus=function(){return G.H.useHostTransitionStatus()},He.version="19.2.1",He}var bp;function sg(){if(bp)return ds.exports;bp=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(w){console.error(w)}}return A(),ds.exports=rg(),ds.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function ug(){if(Ap)return bi;Ap=1;var A=cg(),w=ps(),z=sg();function p(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function N(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function G(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function H(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(N(e)!==e)throw Error(p(188))}function C(e){var t=e.alternate;if(!t){if(t=N(e),t===null)throw Error(p(188));return t!==e?null:e}for(var a=e,l=t;;){var i=a.return;if(i===null)break;var n=i.alternate;if(n===null){if(l=i.return,l!==null){a=l;continue}break}if(i.child===n.child){for(n=i.child;n;){if(n===a)return x(i),e;if(n===l)return x(i),t;n=n.sibling}throw Error(p(188))}if(a.return!==l.return)a=i,l=n;else{for(var c=!1,r=i.child;r;){if(r===a){c=!0,a=i,l=n;break}if(r===l){c=!0,l=i,a=n;break}r=r.sibling}if(!c){for(r=n.child;r;){if(r===a){c=!0,a=n,l=i;break}if(r===l){c=!0,l=n,a=i;break}r=r.sibling}if(!c)throw Error(p(189))}}if(a.alternate!==l)throw Error(p(190))}if(a.tag!==3)throw Error(p(188));return a.stateNode.current===a?e:t}function Q(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Q(e),t!==null)return t;e=e.sibling}return null}var M=Object.assign,Y=Symbol.for("react.element"),ee=Symbol.for("react.transitional.element"),ve=Symbol.for("react.portal"),Le=Symbol.for("react.fragment"),Lt=Symbol.for("react.strict_mode"),We=Symbol.for("react.profiler"),Wt=Symbol.for("react.consumer"),Ne=Symbol.for("react.context"),rt=Symbol.for("react.forward_ref"),At=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),Qa=Symbol.for("react.memo_cache_sentinel"),Tt=Symbol.iterator;function Qe(e){return e===null||typeof e!="object"?null:(e=Tt&&e[Tt]||e["@@iterator"],typeof e=="function"?e:null)}var ba=Symbol.for("react.client.reference");function Ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ba?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Le:return"Fragment";case We:return"Profiler";case Lt:return"StrictMode";case At:return"Suspense";case qe:return"SuspenseList";case Et:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ve:return"Portal";case Ne:return e.displayName||"Context";case Wt:return(e._context.displayName||"Context")+".Consumer";case rt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return t=e.displayName||null,t!==null?t:Ut(e.type)||"Memo";case Ge:t=e._payload,e=e._init;try{return Ut(e(t))}catch{}}return null}var vt=Array.isArray,v=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=z.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},re=[],de=-1;function o(e){return{current:e}}function b(e){0>de||(e.current=re[de],re[de]=null,de--)}function D(e,t){de++,re[de]=e.current,e.current=t}var L=o(null),k=o(null),Z=o(null),ie=o(null);function Ie(e,t){switch(D(Z,t),D(k,e),D(L,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Id(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Id(t),e=jd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}b(L),D(L,e)}function ye(){b(L),b(k),b(Z)}function Ml(e){e.memoizedState!==null&&D(ie,e);var t=L.current,a=jd(t,e.type);t!==a&&(D(k,e),D(L,a))}function Ai(e){k.current===e&&(b(L),b(k)),ie.current===e&&(b(ie),mi._currentValue=j)}var Qn,fs;function Aa(e){if(Qn===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Qn=t&&t[1]||"",fs=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qn+e+fs}var Yn=!1;function kn(e,t){if(!e||Yn)return"";Yn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(h){var g=h}Reflect.construct(e,[],S)}else{try{S.call()}catch(h){g=h}e.call(S.prototype)}}else{try{throw Error()}catch(h){g=h}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(h){if(h&&g&&typeof h.stack=="string")return[h.stack,g.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=l.DetermineComponentFrameRoot(),c=n[0],r=n[1];if(c&&r){var s=c.split(`
`),_=r.split(`
`);for(i=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;i<_.length&&!_[i].includes("DetermineComponentFrameRoot");)i++;if(l===s.length||i===_.length)for(l=s.length-1,i=_.length-1;1<=l&&0<=i&&s[l]!==_[i];)i--;for(;1<=l&&0<=i;l--,i--)if(s[l]!==_[i]){if(l!==1||i!==1)do if(l--,i--,0>i||s[l]!==_[i]){var m=`
`+s[l].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),m}while(1<=l&&0<=i);break}}}finally{Yn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Aa(a):""}function Up(e,t){switch(e.tag){case 26:case 27:case 5:return Aa(e.type);case 16:return Aa("Lazy");case 13:return e.child!==t&&t!==null?Aa("Suspense Fallback"):Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 15:return kn(e.type,!1);case 11:return kn(e.type.render,!1);case 1:return kn(e.type,!0);case 31:return Aa("Activity");default:return""}}function _s(e){try{var t="",a=null;do t+=Up(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Xn=Object.prototype.hasOwnProperty,Vn=A.unstable_scheduleCallback,Zn=A.unstable_cancelCallback,Op=A.unstable_shouldYield,Bp=A.unstable_requestPaint,Fe=A.unstable_now,wp=A.unstable_getCurrentPriorityLevel,gs=A.unstable_ImmediatePriority,hs=A.unstable_UserBlockingPriority,Ei=A.unstable_NormalPriority,zp=A.unstable_LowPriority,ms=A.unstable_IdlePriority,Np=A.log,Hp=A.unstable_setDisableYieldValue,Rl=null,$e=null;function Ft(e){if(typeof Np=="function"&&Hp(e),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(Rl,e)}catch{}}var Pe=Math.clz32?Math.clz32:qp,Ip=Math.log,jp=Math.LN2;function qp(e){return e>>>=0,e===0?32:31-(Ip(e)/jp|0)|0}var Ti=256,Di=262144,xi=4194304;function Ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mi(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var i=0,n=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var r=l&134217727;return r!==0?(l=r&~n,l!==0?i=Ea(l):(c&=r,c!==0?i=Ea(c):a||(a=r&~e,a!==0&&(i=Ea(a))))):(r=l&~n,r!==0?i=Ea(r):c!==0?i=Ea(c):a||(a=l&~e,a!==0&&(i=Ea(a)))),i===0?0:t!==0&&t!==i&&(t&n)===0&&(n=i&-i,a=t&-t,n>=a||n===32&&(a&4194048)!==0)?t:i}function Ll(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Gp(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vs(){var e=xi;return xi<<=1,(xi&62914560)===0&&(xi=4194304),e}function Jn(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ul(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qp(e,t,a,l,i,n){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var r=e.entanglements,s=e.expirationTimes,_=e.hiddenUpdates;for(a=c&~a;0<a;){var m=31-Pe(a),S=1<<m;r[m]=0,s[m]=-1;var g=_[m];if(g!==null)for(_[m]=null,m=0;m<g.length;m++){var h=g[m];h!==null&&(h.lane&=-536870913)}a&=~S}l!==0&&ys(e,l,0),n!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=n&~(c&~t))}function ys(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Pe(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Ss(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-Pe(a),i=1<<l;i&t|e[l]&t&&(e[l]|=t),a&=~i}}function Cs(e,t){var a=t&-t;return a=(a&42)!==0?1:Kn(a),(a&(e.suspendedLanes|t))!==0?0:a}function Kn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Wn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function bs(){var e=T.p;return e!==0?e:(e=window.event,e===void 0?32:sp(e.type))}function As(e,t){var a=T.p;try{return T.p=e,t()}finally{T.p=a}}var $t=Math.random().toString(36).slice(2),Ue="__reactFiber$"+$t,Ye="__reactProps$"+$t,Ya="__reactContainer$"+$t,Fn="__reactEvents$"+$t,Yp="__reactListeners$"+$t,kp="__reactHandles$"+$t,Es="__reactResources$"+$t,Ol="__reactMarker$"+$t;function $n(e){delete e[Ue],delete e[Ye],delete e[Fn],delete e[Yp],delete e[kp]}function ka(e){var t=e[Ue];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ya]||a[Ue]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Vd(e);e!==null;){if(a=e[Ue])return a;e=Vd(e)}return t}e=a,a=e.parentNode}return null}function Xa(e){if(e=e[Ue]||e[Ya]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Bl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(p(33))}function Va(e){var t=e[Es];return t||(t=e[Es]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function xe(e){e[Ol]=!0}var Ts=new Set,Ds={};function Ta(e,t){Za(e,t),Za(e+"Capture",t)}function Za(e,t){for(Ds[e]=t,e=0;e<t.length;e++)Ts.add(t[e])}var Xp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xs={},Ms={};function Vp(e){return Xn.call(Ms,e)?!0:Xn.call(xs,e)?!1:Xp.test(e)?Ms[e]=!0:(xs[e]=!0,!1)}function Ri(e,t,a){if(Vp(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Li(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ot(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function st(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zp(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var i=l.get,n=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){a=""+c,n.call(this,c)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pn(e){if(!e._valueTracker){var t=Rs(e)?"checked":"value";e._valueTracker=Zp(e,t,""+e[t])}}function Ls(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Rs(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Ui(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Jp=/[\n"\\]/g;function ut(e){return e.replace(Jp,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ec(e,t,a,l,i,n,c,r){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+st(t)):e.value!==""+st(t)&&(e.value=""+st(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?tc(e,c,st(t)):a!=null?tc(e,c,st(a)):l!=null&&e.removeAttribute("value"),i==null&&n!=null&&(e.defaultChecked=!!n),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+st(r):e.removeAttribute("name")}function Us(e,t,a,l,i,n,c,r){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(e.type=n),t!=null||a!=null){if(!(n!=="submit"&&n!=="reset"||t!=null)){Pn(e);return}a=a!=null?""+st(a):"",t=t!=null?""+st(t):a,r||t===e.value||(e.value=t),e.defaultValue=t}l=l??i,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=r?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Pn(e)}function tc(e,t,a){t==="number"&&Ui(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ja(e,t,a,l){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&l&&(e[a].defaultSelected=!0)}else{for(a=""+st(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,l&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Os(e,t,a){if(t!=null&&(t=""+st(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+st(a):""}function Bs(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(p(92));if(vt(l)){if(1<l.length)throw Error(p(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=st(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Pn(e)}function Ka(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Kp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ws(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Kp.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function zs(e,t,a){if(t!=null&&typeof t!="object")throw Error(p(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var i in t)l=t[i],t.hasOwnProperty(i)&&a[i]!==l&&ws(e,i,l)}else for(var n in t)t.hasOwnProperty(n)&&ws(e,n,t[n])}function ac(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Oi(e){return Fp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bt(){}var lc=null;function ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wa=null,Fa=null;function Ns(e){var t=Xa(e);if(t&&(e=t.stateNode)){var a=e[Ye]||null;e:switch(e=t.stateNode,t.type){case"input":if(ec(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ut(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var i=l[Ye]||null;if(!i)throw Error(p(90));ec(l,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Ls(l)}break e;case"textarea":Os(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Ja(e,!!a.multiple,t,!1)}}}var nc=!1;function Hs(e,t,a){if(nc)return e(t,a);nc=!0;try{var l=e(t);return l}finally{if(nc=!1,(Wa!==null||Fa!==null)&&(Sn(),Wa&&(t=Wa,e=Fa,Fa=Wa=null,Ns(t),e)))for(t=0;t<e.length;t++)Ns(e[t])}}function wl(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Ye]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(p(231,t,typeof a));return a}var wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cc=!1;if(wt)try{var zl={};Object.defineProperty(zl,"passive",{get:function(){cc=!0}}),window.addEventListener("test",zl,zl),window.removeEventListener("test",zl,zl)}catch{cc=!1}var Pt=null,rc=null,Bi=null;function Is(){if(Bi)return Bi;var e,t=rc,a=t.length,l,i="value"in Pt?Pt.value:Pt.textContent,n=i.length;for(e=0;e<a&&t[e]===i[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===i[n-l];l++);return Bi=i.slice(e,1<l?1-l:void 0)}function wi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zi(){return!0}function js(){return!1}function ke(e){function t(a,l,i,n,c){this._reactName=a,this._targetInst=i,this.type=l,this.nativeEvent=n,this.target=c,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(a=e[r],this[r]=a?a(n):n[r]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?zi:js,this.isPropagationStopped=js,this}return M(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zi)},persist:function(){},isPersistent:zi}),t}var Da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ni=ke(Da),Nl=M({},Da,{view:0,detail:0}),$p=ke(Nl),sc,uc,Hl,Hi=M({},Nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hl&&(Hl&&e.type==="mousemove"?(sc=e.screenX-Hl.screenX,uc=e.screenY-Hl.screenY):uc=sc=0,Hl=e),sc)},movementY:function(e){return"movementY"in e?e.movementY:uc}}),qs=ke(Hi),Pp=M({},Hi,{dataTransfer:0}),ef=ke(Pp),tf=M({},Nl,{relatedTarget:0}),oc=ke(tf),af=M({},Da,{animationName:0,elapsedTime:0,pseudoElement:0}),lf=ke(af),nf=M({},Da,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cf=ke(nf),rf=M({},Da,{data:0}),Gs=ke(rf),sf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function df(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=of[e])?!!t[e]:!1}function dc(){return df}var pf=M({},Nl,{key:function(e){if(e.key){var t=sf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?uf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(e){return e.type==="keypress"?wi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ff=ke(pf),_f=M({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qs=ke(_f),gf=M({},Nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),hf=ke(gf),mf=M({},Da,{propertyName:0,elapsedTime:0,pseudoElement:0}),vf=ke(mf),yf=M({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sf=ke(yf),Cf=M({},Da,{newState:0,oldState:0}),bf=ke(Cf),Af=[9,13,27,32],pc=wt&&"CompositionEvent"in window,Il=null;wt&&"documentMode"in document&&(Il=document.documentMode);var Ef=wt&&"TextEvent"in window&&!Il,Ys=wt&&(!pc||Il&&8<Il&&11>=Il),ks=" ",Xs=!1;function Vs(e,t){switch(e){case"keyup":return Af.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $a=!1;function Tf(e,t){switch(e){case"compositionend":return Zs(t);case"keypress":return t.which!==32?null:(Xs=!0,ks);case"textInput":return e=t.data,e===ks&&Xs?null:e;default:return null}}function Df(e,t){if($a)return e==="compositionend"||!pc&&Vs(e,t)?(e=Is(),Bi=rc=Pt=null,$a=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ys&&t.locale!=="ko"?null:t.data;default:return null}}var xf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xf[e.type]:t==="textarea"}function Ks(e,t,a,l){Wa?Fa?Fa.push(l):Fa=[l]:Wa=l,t=xn(t,"onChange"),0<t.length&&(a=new Ni("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var jl=null,ql=null;function Mf(e){Od(e,0)}function Ii(e){var t=Bl(e);if(Ls(t))return e}function Ws(e,t){if(e==="change")return t}var Fs=!1;if(wt){var fc;if(wt){var _c="oninput"in document;if(!_c){var $s=document.createElement("div");$s.setAttribute("oninput","return;"),_c=typeof $s.oninput=="function"}fc=_c}else fc=!1;Fs=fc&&(!document.documentMode||9<document.documentMode)}function Ps(){jl&&(jl.detachEvent("onpropertychange",eu),ql=jl=null)}function eu(e){if(e.propertyName==="value"&&Ii(ql)){var t=[];Ks(t,ql,e,ic(e)),Hs(Mf,t)}}function Rf(e,t,a){e==="focusin"?(Ps(),jl=t,ql=a,jl.attachEvent("onpropertychange",eu)):e==="focusout"&&Ps()}function Lf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ii(ql)}function Uf(e,t){if(e==="click")return Ii(t)}function Of(e,t){if(e==="input"||e==="change")return Ii(t)}function Bf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var et=typeof Object.is=="function"?Object.is:Bf;function Gl(e,t){if(et(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var i=a[l];if(!Xn.call(t,i)||!et(e[i],t[i]))return!1}return!0}function tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function au(e,t){var a=tu(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=tu(a)}}function lu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function iu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ui(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Ui(e.document)}return t}function gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var wf=wt&&"documentMode"in document&&11>=document.documentMode,Pa=null,hc=null,Ql=null,mc=!1;function nu(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mc||Pa==null||Pa!==Ui(l)||(l=Pa,"selectionStart"in l&&gc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ql&&Gl(Ql,l)||(Ql=l,l=xn(hc,"onSelect"),0<l.length&&(t=new Ni("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Pa)))}function xa(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var el={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionrun:xa("Transition","TransitionRun"),transitionstart:xa("Transition","TransitionStart"),transitioncancel:xa("Transition","TransitionCancel"),transitionend:xa("Transition","TransitionEnd")},vc={},cu={};wt&&(cu=document.createElement("div").style,"AnimationEvent"in window||(delete el.animationend.animation,delete el.animationiteration.animation,delete el.animationstart.animation),"TransitionEvent"in window||delete el.transitionend.transition);function Ma(e){if(vc[e])return vc[e];if(!el[e])return e;var t=el[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in cu)return vc[e]=t[a];return e}var ru=Ma("animationend"),su=Ma("animationiteration"),uu=Ma("animationstart"),zf=Ma("transitionrun"),Nf=Ma("transitionstart"),Hf=Ma("transitioncancel"),ou=Ma("transitionend"),du=new Map,yc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yc.push("scrollEnd");function yt(e,t){du.set(e,t),Ta(t,[e])}var ji=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ot=[],tl=0,Sc=0;function qi(){for(var e=tl,t=Sc=tl=0;t<e;){var a=ot[t];ot[t++]=null;var l=ot[t];ot[t++]=null;var i=ot[t];ot[t++]=null;var n=ot[t];if(ot[t++]=null,l!==null&&i!==null){var c=l.pending;c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i}n!==0&&pu(a,i,n)}}function Gi(e,t,a,l){ot[tl++]=e,ot[tl++]=t,ot[tl++]=a,ot[tl++]=l,Sc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Cc(e,t,a,l){return Gi(e,t,a,l),Qi(e)}function Ra(e,t){return Gi(e,null,null,t),Qi(e)}function pu(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var i=!1,n=e.return;n!==null;)n.childLanes|=a,l=n.alternate,l!==null&&(l.childLanes|=a),n.tag===22&&(e=n.stateNode,e===null||e._visibility&1||(i=!0)),e=n,n=n.return;return e.tag===3?(n=e.stateNode,i&&t!==null&&(i=31-Pe(a),e=n.hiddenUpdates,l=e[i],l===null?e[i]=[t]:l.push(t),t.lane=a|536870912),n):null}function Qi(e){if(50<oi)throw oi=0,Lr=null,Error(p(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var al={};function If(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,a,l){return new If(e,t,a,l)}function bc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zt(e,t){var a=e.alternate;return a===null?(a=tt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function fu(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yi(e,t,a,l,i,n){var c=0;if(l=e,typeof e=="function")bc(e)&&(c=1);else if(typeof e=="string")c=Y_(e,a,L.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Et:return e=tt(31,a,t,i),e.elementType=Et,e.lanes=n,e;case Le:return La(a.children,i,n,t);case Lt:c=8,i|=24;break;case We:return e=tt(12,a,t,i|2),e.elementType=We,e.lanes=n,e;case At:return e=tt(13,a,t,i),e.elementType=At,e.lanes=n,e;case qe:return e=tt(19,a,t,i),e.elementType=qe,e.lanes=n,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ne:c=10;break e;case Wt:c=9;break e;case rt:c=11;break e;case $:c=14;break e;case Ge:c=16,l=null;break e}c=29,a=Error(p(130,e===null?"null":typeof e,"")),l=null}return t=tt(c,a,t,i),t.elementType=e,t.type=l,t.lanes=n,t}function La(e,t,a,l){return e=tt(7,e,l,t),e.lanes=a,e}function Ac(e,t,a){return e=tt(6,e,null,t),e.lanes=a,e}function _u(e){var t=tt(18,null,null,0);return t.stateNode=e,t}function Ec(e,t,a){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var gu=new WeakMap;function dt(e,t){if(typeof e=="object"&&e!==null){var a=gu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:_s(t)},gu.set(e,t),t)}return{value:e,source:t,stack:_s(t)}}var ll=[],il=0,ki=null,Yl=0,pt=[],ft=0,ea=null,Dt=1,xt="";function Nt(e,t){ll[il++]=Yl,ll[il++]=ki,ki=e,Yl=t}function hu(e,t,a){pt[ft++]=Dt,pt[ft++]=xt,pt[ft++]=ea,ea=e;var l=Dt;e=xt;var i=32-Pe(l)-1;l&=~(1<<i),a+=1;var n=32-Pe(t)+i;if(30<n){var c=i-i%5;n=(l&(1<<c)-1).toString(32),l>>=c,i-=c,Dt=1<<32-Pe(t)+i|a<<i|l,xt=n+e}else Dt=1<<n|a<<i|l,xt=e}function Tc(e){e.return!==null&&(Nt(e,1),hu(e,1,0))}function Dc(e){for(;e===ki;)ki=ll[--il],ll[il]=null,Yl=ll[--il],ll[il]=null;for(;e===ea;)ea=pt[--ft],pt[ft]=null,xt=pt[--ft],pt[ft]=null,Dt=pt[--ft],pt[ft]=null}function mu(e,t){pt[ft++]=Dt,pt[ft++]=xt,pt[ft++]=ea,Dt=t.id,xt=t.overflow,ea=e}var Oe=null,fe=null,P=!1,ta=null,_t=!1,xc=Error(p(519));function aa(e){var t=Error(p(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw kl(dt(t,e)),xc}function vu(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ue]=e,t[Ye]=l,a){case"dialog":K("cancel",t),K("close",t);break;case"iframe":case"object":case"embed":K("load",t);break;case"video":case"audio":for(a=0;a<pi.length;a++)K(pi[a],t);break;case"source":K("error",t);break;case"img":case"image":case"link":K("error",t),K("load",t);break;case"details":K("toggle",t);break;case"input":K("invalid",t),Us(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":K("invalid",t);break;case"textarea":K("invalid",t),Bs(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Nd(t.textContent,a)?(l.popover!=null&&(K("beforetoggle",t),K("toggle",t)),l.onScroll!=null&&K("scroll",t),l.onScrollEnd!=null&&K("scrollend",t),l.onClick!=null&&(t.onclick=Bt),t=!0):t=!1,t||aa(e,!0)}function yu(e){for(Oe=e.return;Oe;)switch(Oe.tag){case 5:case 31:case 13:_t=!1;return;case 27:case 3:_t=!0;return;default:Oe=Oe.return}}function nl(e){if(e!==Oe)return!1;if(!P)return yu(e),P=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Xr(e.type,e.memoizedProps)),a=!a),a&&fe&&aa(e),yu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));fe=Xd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(317));fe=Xd(e)}else t===27?(t=fe,ha(e.type)?(e=Wr,Wr=null,fe=e):fe=t):fe=Oe?ht(e.stateNode.nextSibling):null;return!0}function Ua(){fe=Oe=null,P=!1}function Mc(){var e=ta;return e!==null&&(Je===null?Je=e:Je.push.apply(Je,e),ta=null),e}function kl(e){ta===null?ta=[e]:ta.push(e)}var Rc=o(null),Oa=null,Ht=null;function la(e,t,a){D(Rc,t._currentValue),t._currentValue=a}function It(e){e._currentValue=Rc.current,b(Rc)}function Lc(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Uc(e,t,a,l){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var n=i.dependencies;if(n!==null){var c=i.child;n=n.firstContext;e:for(;n!==null;){var r=n;n=i;for(var s=0;s<t.length;s++)if(r.context===t[s]){n.lanes|=a,r=n.alternate,r!==null&&(r.lanes|=a),Lc(n.return,a,e),l||(c=null);break e}n=r.next}}else if(i.tag===18){if(c=i.return,c===null)throw Error(p(341));c.lanes|=a,n=c.alternate,n!==null&&(n.lanes|=a),Lc(c,a,e),c=null}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===e){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}}function cl(e,t,a,l){e=null;for(var i=t,n=!1;i!==null;){if(!n){if((i.flags&524288)!==0)n=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var c=i.alternate;if(c===null)throw Error(p(387));if(c=c.memoizedProps,c!==null){var r=i.type;et(i.pendingProps.value,c.value)||(e!==null?e.push(r):e=[r])}}else if(i===ie.current){if(c=i.alternate,c===null)throw Error(p(387));c.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(mi):e=[mi])}i=i.return}e!==null&&Uc(t,e,a,l),t.flags|=262144}function Xi(e){for(e=e.firstContext;e!==null;){if(!et(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ba(e){Oa=e,Ht=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Be(e){return Su(Oa,e)}function Vi(e,t){return Oa===null&&Ba(e),Su(e,t)}function Su(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Ht===null){if(e===null)throw Error(p(308));Ht=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ht=Ht.next=t;return a}var jf=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},qf=A.unstable_scheduleCallback,Gf=A.unstable_NormalPriority,be={$$typeof:Ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Oc(){return{controller:new jf,data:new Map,refCount:0}}function Xl(e){e.refCount--,e.refCount===0&&qf(Gf,function(){e.controller.abort()})}var Vl=null,Bc=0,rl=0,sl=null;function Qf(e,t){if(Vl===null){var a=Vl=[];Bc=0,rl=Nr(),sl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Bc++,t.then(Cu,Cu),t}function Cu(){if(--Bc===0&&Vl!==null){sl!==null&&(sl.status="fulfilled");var e=Vl;Vl=null,rl=0,sl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Yf(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(l.status="rejected",l.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),l}var bu=v.S;v.S=function(e,t){cd=Fe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Qf(e,t),bu!==null&&bu(e,t)};var wa=o(null);function wc(){var e=wa.current;return e!==null?e:pe.pooledCache}function Zi(e,t){t===null?D(wa,wa.current):D(wa,t.pool)}function Au(){var e=wc();return e===null?null:{parent:be._currentValue,pool:e}}var ul=Error(p(460)),zc=Error(p(474)),Ji=Error(p(542)),Ki={then:function(){}};function Eu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Bt,Bt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xu(e),e;default:if(typeof t.status=="string")t.then(Bt,Bt);else{if(e=pe,e!==null&&100<e.shellSuspendCounter)throw Error(p(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=l}},function(l){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,xu(e),e}throw Na=t,ul}}function za(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Na=a,ul):a}}var Na=null;function Du(){if(Na===null)throw Error(p(459));var e=Na;return Na=null,e}function xu(e){if(e===ul||e===Ji)throw Error(p(483))}var ol=null,Zl=0;function Wi(e){var t=Zl;return Zl+=1,ol===null&&(ol=[]),Tu(ol,e,t)}function Jl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Fi(e,t){throw t.$$typeof===Y?Error(p(525)):(e=Object.prototype.toString.call(t),Error(p(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Mu(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function a(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function l(d){for(var u=new Map;d!==null;)d.key!==null?u.set(d.key,d):u.set(d.index,d),d=d.sibling;return u}function i(d,u){return d=zt(d,u),d.index=0,d.sibling=null,d}function n(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=67108866,u):f):(d.flags|=67108866,u)):(d.flags|=1048576,u)}function c(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function r(d,u,f,y){return u===null||u.tag!==6?(u=Ac(f,d.mode,y),u.return=d,u):(u=i(u,f),u.return=d,u)}function s(d,u,f,y){var B=f.type;return B===Le?m(d,u,f.props.children,y,f.key):u!==null&&(u.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ge&&za(B)===u.type)?(u=i(u,f.props),Jl(u,f),u.return=d,u):(u=Yi(f.type,f.key,f.props,null,d.mode,y),Jl(u,f),u.return=d,u)}function _(d,u,f,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Ec(f,d.mode,y),u.return=d,u):(u=i(u,f.children||[]),u.return=d,u)}function m(d,u,f,y,B){return u===null||u.tag!==7?(u=La(f,d.mode,y,B),u.return=d,u):(u=i(u,f),u.return=d,u)}function S(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=Ac(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ee:return f=Yi(u.type,u.key,u.props,null,d.mode,f),Jl(f,u),f.return=d,f;case ve:return u=Ec(u,d.mode,f),u.return=d,u;case Ge:return u=za(u),S(d,u,f)}if(vt(u)||Qe(u))return u=La(u,d.mode,f,null),u.return=d,u;if(typeof u.then=="function")return S(d,Wi(u),f);if(u.$$typeof===Ne)return S(d,Vi(d,u),f);Fi(d,u)}return null}function g(d,u,f,y){var B=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return B!==null?null:r(d,u,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ee:return f.key===B?s(d,u,f,y):null;case ve:return f.key===B?_(d,u,f,y):null;case Ge:return f=za(f),g(d,u,f,y)}if(vt(f)||Qe(f))return B!==null?null:m(d,u,f,y,null);if(typeof f.then=="function")return g(d,u,Wi(f),y);if(f.$$typeof===Ne)return g(d,u,Vi(d,f),y);Fi(d,f)}return null}function h(d,u,f,y,B){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return d=d.get(f)||null,r(u,d,""+y,B);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ee:return d=d.get(y.key===null?f:y.key)||null,s(u,d,y,B);case ve:return d=d.get(y.key===null?f:y.key)||null,_(u,d,y,B);case Ge:return y=za(y),h(d,u,f,y,B)}if(vt(y)||Qe(y))return d=d.get(f)||null,m(u,d,y,B,null);if(typeof y.then=="function")return h(d,u,f,Wi(y),B);if(y.$$typeof===Ne)return h(d,u,f,Vi(u,y),B);Fi(u,y)}return null}function R(d,u,f,y){for(var B=null,te=null,U=u,V=u=0,F=null;U!==null&&V<f.length;V++){U.index>V?(F=U,U=null):F=U.sibling;var ae=g(d,U,f[V],y);if(ae===null){U===null&&(U=F);break}e&&U&&ae.alternate===null&&t(d,U),u=n(ae,u,V),te===null?B=ae:te.sibling=ae,te=ae,U=F}if(V===f.length)return a(d,U),P&&Nt(d,V),B;if(U===null){for(;V<f.length;V++)U=S(d,f[V],y),U!==null&&(u=n(U,u,V),te===null?B=U:te.sibling=U,te=U);return P&&Nt(d,V),B}for(U=l(U);V<f.length;V++)F=h(U,d,V,f[V],y),F!==null&&(e&&F.alternate!==null&&U.delete(F.key===null?V:F.key),u=n(F,u,V),te===null?B=F:te.sibling=F,te=F);return e&&U.forEach(function(Ca){return t(d,Ca)}),P&&Nt(d,V),B}function I(d,u,f,y){if(f==null)throw Error(p(151));for(var B=null,te=null,U=u,V=u=0,F=null,ae=f.next();U!==null&&!ae.done;V++,ae=f.next()){U.index>V?(F=U,U=null):F=U.sibling;var Ca=g(d,U,ae.value,y);if(Ca===null){U===null&&(U=F);break}e&&U&&Ca.alternate===null&&t(d,U),u=n(Ca,u,V),te===null?B=Ca:te.sibling=Ca,te=Ca,U=F}if(ae.done)return a(d,U),P&&Nt(d,V),B;if(U===null){for(;!ae.done;V++,ae=f.next())ae=S(d,ae.value,y),ae!==null&&(u=n(ae,u,V),te===null?B=ae:te.sibling=ae,te=ae);return P&&Nt(d,V),B}for(U=l(U);!ae.done;V++,ae=f.next())ae=h(U,d,V,ae.value,y),ae!==null&&(e&&ae.alternate!==null&&U.delete(ae.key===null?V:ae.key),u=n(ae,u,V),te===null?B=ae:te.sibling=ae,te=ae);return e&&U.forEach(function(eg){return t(d,eg)}),P&&Nt(d,V),B}function oe(d,u,f,y){if(typeof f=="object"&&f!==null&&f.type===Le&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ee:e:{for(var B=f.key;u!==null;){if(u.key===B){if(B=f.type,B===Le){if(u.tag===7){a(d,u.sibling),y=i(u,f.props.children),y.return=d,d=y;break e}}else if(u.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ge&&za(B)===u.type){a(d,u.sibling),y=i(u,f.props),Jl(y,f),y.return=d,d=y;break e}a(d,u);break}else t(d,u);u=u.sibling}f.type===Le?(y=La(f.props.children,d.mode,y,f.key),y.return=d,d=y):(y=Yi(f.type,f.key,f.props,null,d.mode,y),Jl(y,f),y.return=d,d=y)}return c(d);case ve:e:{for(B=f.key;u!==null;){if(u.key===B)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){a(d,u.sibling),y=i(u,f.children||[]),y.return=d,d=y;break e}else{a(d,u);break}else t(d,u);u=u.sibling}y=Ec(f,d.mode,y),y.return=d,d=y}return c(d);case Ge:return f=za(f),oe(d,u,f,y)}if(vt(f))return R(d,u,f,y);if(Qe(f)){if(B=Qe(f),typeof B!="function")throw Error(p(150));return f=B.call(f),I(d,u,f,y)}if(typeof f.then=="function")return oe(d,u,Wi(f),y);if(f.$$typeof===Ne)return oe(d,u,Vi(d,f),y);Fi(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,u!==null&&u.tag===6?(a(d,u.sibling),y=i(u,f),y.return=d,d=y):(a(d,u),y=Ac(f,d.mode,y),y.return=d,d=y),c(d)):a(d,u)}return function(d,u,f,y){try{Zl=0;var B=oe(d,u,f,y);return ol=null,B}catch(U){if(U===ul||U===Ji)throw U;var te=tt(29,U,null,d.mode);return te.lanes=y,te.return=d,te}finally{}}}var Ha=Mu(!0),Ru=Mu(!1),ia=!1;function Nc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ca(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(le&2)!==0){var i=l.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),l.pending=t,t=Qi(e),pu(e,null,a),t}return Gi(e,l,t,a),Qi(e)}function Kl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ss(e,a)}}function Ic(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var i=null,n=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};n===null?i=n=c:n=n.next=c,a=a.next}while(a!==null);n===null?i=n=t:n=n.next=t}else i=n=t;a={baseState:l.baseState,firstBaseUpdate:i,lastBaseUpdate:n,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var jc=!1;function Wl(){if(jc){var e=sl;if(e!==null)throw e}}function Fl(e,t,a,l){jc=!1;var i=e.updateQueue;ia=!1;var n=i.firstBaseUpdate,c=i.lastBaseUpdate,r=i.shared.pending;if(r!==null){i.shared.pending=null;var s=r,_=s.next;s.next=null,c===null?n=_:c.next=_,c=s;var m=e.alternate;m!==null&&(m=m.updateQueue,r=m.lastBaseUpdate,r!==c&&(r===null?m.firstBaseUpdate=_:r.next=_,m.lastBaseUpdate=s))}if(n!==null){var S=i.baseState;c=0,m=_=s=null,r=n;do{var g=r.lane&-536870913,h=g!==r.lane;if(h?(W&g)===g:(l&g)===g){g!==0&&g===rl&&(jc=!0),m!==null&&(m=m.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var R=e,I=r;g=t;var oe=a;switch(I.tag){case 1:if(R=I.payload,typeof R=="function"){S=R.call(oe,S,g);break e}S=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=I.payload,g=typeof R=="function"?R.call(oe,S,g):R,g==null)break e;S=M({},S,g);break e;case 2:ia=!0}}g=r.callback,g!==null&&(e.flags|=64,h&&(e.flags|=8192),h=i.callbacks,h===null?i.callbacks=[g]:h.push(g))}else h={lane:g,tag:r.tag,payload:r.payload,callback:r.callback,next:null},m===null?(_=m=h,s=S):m=m.next=h,c|=g;if(r=r.next,r===null){if(r=i.shared.pending,r===null)break;h=r,r=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);m===null&&(s=S),i.baseState=s,i.firstBaseUpdate=_,i.lastBaseUpdate=m,n===null&&(i.shared.lanes=0),da|=c,e.lanes=c,e.memoizedState=S}}function Lu(e,t){if(typeof e!="function")throw Error(p(191,e));e.call(t)}function Uu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Lu(a[e],t)}var dl=o(null),$i=o(0);function Ou(e,t){e=Zt,D($i,e),D(dl,t),Zt=e|t.baseLanes}function qc(){D($i,Zt),D(dl,dl.current)}function Gc(){Zt=$i.current,b(dl),b($i)}var at=o(null),gt=null;function ra(e){var t=e.alternate;D(Se,Se.current&1),D(at,e),gt===null&&(t===null||dl.current!==null||t.memoizedState!==null)&&(gt=e)}function Qc(e){D(Se,Se.current),D(at,e),gt===null&&(gt=e)}function Bu(e){e.tag===22?(D(Se,Se.current),D(at,e),gt===null&&(gt=e)):sa()}function sa(){D(Se,Se.current),D(at,at.current)}function lt(e){b(at),gt===e&&(gt=null),b(Se)}var Se=o(0);function Pi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Jr(a)||Kr(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var jt=0,X=null,se=null,Ae=null,en=!1,pl=!1,Ia=!1,tn=0,$l=0,fl=null,kf=0;function he(){throw Error(p(321))}function Yc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!et(e[a],t[a]))return!1;return!0}function kc(e,t,a,l,i,n){return jt=n,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,v.H=e===null||e.memoizedState===null?mo:nr,Ia=!1,n=a(l,i),Ia=!1,pl&&(n=zu(t,a,l,i)),wu(e),n}function wu(e){v.H=ti;var t=se!==null&&se.next!==null;if(jt=0,Ae=se=X=null,en=!1,$l=0,fl=null,t)throw Error(p(300));e===null||Ee||(e=e.dependencies,e!==null&&Xi(e)&&(Ee=!0))}function zu(e,t,a,l){X=e;var i=0;do{if(pl&&(fl=null),$l=0,pl=!1,25<=i)throw Error(p(301));if(i+=1,Ae=se=null,e.updateQueue!=null){var n=e.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}v.H=vo,n=t(a,l)}while(pl);return n}function Xf(){var e=v.H,t=e.useState()[0];return t=typeof t.then=="function"?Pl(t):t,e=e.useState()[0],(se!==null?se.memoizedState:null)!==e&&(X.flags|=1024),t}function Xc(){var e=tn!==0;return tn=0,e}function Vc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Zc(e){if(en){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}en=!1}jt=0,Ae=se=X=null,pl=!1,$l=tn=0,fl=null}function je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?X.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function Ce(){if(se===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=Ae===null?X.memoizedState:Ae.next;if(t!==null)Ae=t,se=e;else{if(e===null)throw X.alternate===null?Error(p(467)):Error(p(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},Ae===null?X.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function an(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pl(e){var t=$l;return $l+=1,fl===null&&(fl=[]),e=Tu(fl,e,t),t=X,(Ae===null?t.memoizedState:Ae.next)===null&&(t=t.alternate,v.H=t===null||t.memoizedState===null?mo:nr),e}function ln(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pl(e);if(e.$$typeof===Ne)return Be(e)}throw Error(p(438,String(e)))}function Jc(e){var t=null,a=X.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=X.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=an(),X.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Qa;return t.index++,a}function qt(e,t){return typeof t=="function"?t(e):t}function nn(e){var t=Ce();return Kc(t,se,e)}function Kc(e,t,a){var l=e.queue;if(l===null)throw Error(p(311));l.lastRenderedReducer=a;var i=e.baseQueue,n=l.pending;if(n!==null){if(i!==null){var c=i.next;i.next=n.next,n.next=c}t.baseQueue=i=n,l.pending=null}if(n=e.baseState,i===null)e.memoizedState=n;else{t=i.next;var r=c=null,s=null,_=t,m=!1;do{var S=_.lane&-536870913;if(S!==_.lane?(W&S)===S:(jt&S)===S){var g=_.revertLane;if(g===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),S===rl&&(m=!0);else if((jt&g)===g){_=_.next,g===rl&&(m=!0);continue}else S={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},s===null?(r=s=S,c=n):s=s.next=S,X.lanes|=g,da|=g;S=_.action,Ia&&a(n,S),n=_.hasEagerState?_.eagerState:a(n,S)}else g={lane:S,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},s===null?(r=s=g,c=n):s=s.next=g,X.lanes|=S,da|=S;_=_.next}while(_!==null&&_!==t);if(s===null?c=n:s.next=r,!et(n,e.memoizedState)&&(Ee=!0,m&&(a=sl,a!==null)))throw a;e.memoizedState=n,e.baseState=c,e.baseQueue=s,l.lastRenderedState=n}return i===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Wc(e){var t=Ce(),a=t.queue;if(a===null)throw Error(p(311));a.lastRenderedReducer=e;var l=a.dispatch,i=a.pending,n=t.memoizedState;if(i!==null){a.pending=null;var c=i=i.next;do n=e(n,c.action),c=c.next;while(c!==i);et(n,t.memoizedState)||(Ee=!0),t.memoizedState=n,t.baseQueue===null&&(t.baseState=n),a.lastRenderedState=n}return[n,l]}function Nu(e,t,a){var l=X,i=Ce(),n=P;if(n){if(a===void 0)throw Error(p(407));a=a()}else a=t();var c=!et((se||i).memoizedState,a);if(c&&(i.memoizedState=a,Ee=!0),i=i.queue,Pc(ju.bind(null,l,i,e),[e]),i.getSnapshot!==t||c||Ae!==null&&Ae.memoizedState.tag&1){if(l.flags|=2048,_l(9,{destroy:void 0},Iu.bind(null,l,i,a,t),null),pe===null)throw Error(p(349));n||(jt&127)!==0||Hu(l,t,a)}return a}function Hu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=X.updateQueue,t===null?(t=an(),X.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Iu(e,t,a,l){t.value=a,t.getSnapshot=l,qu(t)&&Gu(e)}function ju(e,t,a){return a(function(){qu(t)&&Gu(e)})}function qu(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!et(e,a)}catch{return!0}}function Gu(e){var t=Ra(e,2);t!==null&&Ke(t,e,2)}function Fc(e){var t=je();if(typeof e=="function"){var a=e;if(e=a(),Ia){Ft(!0);try{a()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:e},t}function Qu(e,t,a,l){return e.baseState=a,Kc(e,se,typeof l=="function"?l:qt)}function Vf(e,t,a,l,i){if(sn(e))throw Error(p(485));if(e=t.action,e!==null){var n={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){n.listeners.push(c)}};v.T!==null?a(!0):n.isTransition=!1,l(n),a=t.pending,a===null?(n.next=t.pending=n,Yu(t,n)):(n.next=a.next,t.pending=a.next=n)}}function Yu(e,t){var a=t.action,l=t.payload,i=e.state;if(t.isTransition){var n=v.T,c={};v.T=c;try{var r=a(i,l),s=v.S;s!==null&&s(c,r),ku(e,t,r)}catch(_){$c(e,t,_)}finally{n!==null&&c.types!==null&&(n.types=c.types),v.T=n}}else try{n=a(i,l),ku(e,t,n)}catch(_){$c(e,t,_)}}function ku(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Xu(e,t,l)},function(l){return $c(e,t,l)}):Xu(e,t,a)}function Xu(e,t,a){t.status="fulfilled",t.value=a,Vu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Yu(e,a)))}function $c(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,Vu(t),t=t.next;while(t!==l)}e.action=null}function Vu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zu(e,t){return t}function Ju(e,t){if(P){var a=pe.formState;if(a!==null){e:{var l=X;if(P){if(fe){t:{for(var i=fe,n=_t;i.nodeType!==8;){if(!n){i=null;break t}if(i=ht(i.nextSibling),i===null){i=null;break t}}n=i.data,i=n==="F!"||n==="F"?i:null}if(i){fe=ht(i.nextSibling),l=i.data==="F!";break e}}aa(l)}l=!1}l&&(t=a[0])}}return a=je(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zu,lastRenderedState:t},a.queue=l,a=_o.bind(null,X,l),l.dispatch=a,l=Fc(!1),n=ir.bind(null,X,!1,l.queue),l=je(),i={state:t,dispatch:null,action:e,pending:null},l.queue=i,a=Vf.bind(null,X,i,n,a),i.dispatch=a,l.memoizedState=e,[t,a,!1]}function Ku(e){var t=Ce();return Wu(t,se,e)}function Wu(e,t,a){if(t=Kc(e,t,Zu)[0],e=nn(qt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Pl(t)}catch(c){throw c===ul?Ji:c}else l=t;t=Ce();var i=t.queue,n=i.dispatch;return a!==t.memoizedState&&(X.flags|=2048,_l(9,{destroy:void 0},Zf.bind(null,i,a),null)),[l,n,e]}function Zf(e,t){e.action=t}function Fu(e){var t=Ce(),a=se;if(a!==null)return Wu(t,a,e);Ce(),t=t.memoizedState,a=Ce();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function _l(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=X.updateQueue,t===null&&(t=an(),X.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function $u(){return Ce().memoizedState}function cn(e,t,a,l){var i=je();X.flags|=e,i.memoizedState=_l(1|t,{destroy:void 0},a,l===void 0?null:l)}function rn(e,t,a,l){var i=Ce();l=l===void 0?null:l;var n=i.memoizedState.inst;se!==null&&l!==null&&Yc(l,se.memoizedState.deps)?i.memoizedState=_l(t,n,a,l):(X.flags|=e,i.memoizedState=_l(1|t,n,a,l))}function Pu(e,t){cn(8390656,8,e,t)}function Pc(e,t){rn(2048,8,e,t)}function Jf(e){X.flags|=4;var t=X.updateQueue;if(t===null)t=an(),X.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function eo(e){var t=Ce().memoizedState;return Jf({ref:t,nextImpl:e}),function(){if((le&2)!==0)throw Error(p(440));return t.impl.apply(void 0,arguments)}}function to(e,t){return rn(4,2,e,t)}function ao(e,t){return rn(4,4,e,t)}function lo(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function io(e,t,a){a=a!=null?a.concat([e]):null,rn(4,4,lo.bind(null,t,e),a)}function er(){}function no(e,t){var a=Ce();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Yc(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function co(e,t){var a=Ce();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Yc(t,l[1]))return l[0];if(l=e(),Ia){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l}function tr(e,t,a){return a===void 0||(jt&1073741824)!==0&&(W&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=sd(),X.lanes|=e,da|=e,a)}function ro(e,t,a,l){return et(a,t)?a:dl.current!==null?(e=tr(e,a,l),et(e,t)||(Ee=!0),e):(jt&42)===0||(jt&1073741824)!==0&&(W&261930)===0?(Ee=!0,e.memoizedState=a):(e=sd(),X.lanes|=e,da|=e,t)}function so(e,t,a,l,i){var n=T.p;T.p=n!==0&&8>n?n:8;var c=v.T,r={};v.T=r,ir(e,!1,t,a);try{var s=i(),_=v.S;if(_!==null&&_(r,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var m=Yf(s,l);ei(e,t,m,ct(e))}else ei(e,t,l,ct(e))}catch(S){ei(e,t,{then:function(){},status:"rejected",reason:S},ct())}finally{T.p=n,c!==null&&r.types!==null&&(c.types=r.types),v.T=c}}function Kf(){}function ar(e,t,a,l){if(e.tag!==5)throw Error(p(476));var i=uo(e).queue;so(e,i,t,j,a===null?Kf:function(){return oo(e),a(l)})}function uo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:j},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function oo(e){var t=uo(e);t.next===null&&(t=e.alternate.memoizedState),ei(e,t.next.queue,{},ct())}function lr(){return Be(mi)}function po(){return Ce().memoizedState}function fo(){return Ce().memoizedState}function Wf(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ct();e=na(a);var l=ca(t,e,a);l!==null&&(Ke(l,t,a),Kl(l,t,a)),t={cache:Oc()},e.payload=t;return}t=t.return}}function Ff(e,t,a){var l=ct();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},sn(e)?go(t,a):(a=Cc(e,t,a,l),a!==null&&(Ke(a,e,l),ho(a,t,l)))}function _o(e,t,a){var l=ct();ei(e,t,a,l)}function ei(e,t,a,l){var i={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(sn(e))go(t,i);else{var n=e.alternate;if(e.lanes===0&&(n===null||n.lanes===0)&&(n=t.lastRenderedReducer,n!==null))try{var c=t.lastRenderedState,r=n(c,a);if(i.hasEagerState=!0,i.eagerState=r,et(r,c))return Gi(e,t,i,0),pe===null&&qi(),!1}catch{}finally{}if(a=Cc(e,t,i,l),a!==null)return Ke(a,e,l),ho(a,t,l),!0}return!1}function ir(e,t,a,l){if(l={lane:2,revertLane:Nr(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},sn(e)){if(t)throw Error(p(479))}else t=Cc(e,a,l,2),t!==null&&Ke(t,e,2)}function sn(e){var t=e.alternate;return e===X||t!==null&&t===X}function go(e,t){pl=en=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function ho(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Ss(e,a)}}var ti={readContext:Be,use:ln,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useLayoutEffect:he,useInsertionEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useSyncExternalStore:he,useId:he,useHostTransitionStatus:he,useFormState:he,useActionState:he,useOptimistic:he,useMemoCache:he,useCacheRefresh:he};ti.useEffectEvent=he;var mo={readContext:Be,use:ln,useCallback:function(e,t){return je().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:Pu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,cn(4194308,4,lo.bind(null,t,e),a)},useLayoutEffect:function(e,t){return cn(4194308,4,e,t)},useInsertionEffect:function(e,t){cn(4,2,e,t)},useMemo:function(e,t){var a=je();t=t===void 0?null:t;var l=e();if(Ia){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=je();if(a!==void 0){var i=a(t);if(Ia){Ft(!0);try{a(t)}finally{Ft(!1)}}}else i=t;return l.memoizedState=l.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},l.queue=e,e=e.dispatch=Ff.bind(null,X,e),[l.memoizedState,e]},useRef:function(e){var t=je();return e={current:e},t.memoizedState=e},useState:function(e){e=Fc(e);var t=e.queue,a=_o.bind(null,X,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:er,useDeferredValue:function(e,t){var a=je();return tr(a,e,t)},useTransition:function(){var e=Fc(!1);return e=so.bind(null,X,e.queue,!0,!1),je().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=X,i=je();if(P){if(a===void 0)throw Error(p(407));a=a()}else{if(a=t(),pe===null)throw Error(p(349));(W&127)!==0||Hu(l,t,a)}i.memoizedState=a;var n={value:a,getSnapshot:t};return i.queue=n,Pu(ju.bind(null,l,n,e),[e]),l.flags|=2048,_l(9,{destroy:void 0},Iu.bind(null,l,n,a,t),null),a},useId:function(){var e=je(),t=pe.identifierPrefix;if(P){var a=xt,l=Dt;a=(l&~(1<<32-Pe(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=tn++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=kf++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:lr,useFormState:Ju,useActionState:Ju,useOptimistic:function(e){var t=je();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=ir.bind(null,X,!0,a),a.dispatch=t,[e,t]},useMemoCache:Jc,useCacheRefresh:function(){return je().memoizedState=Wf.bind(null,X)},useEffectEvent:function(e){var t=je(),a={impl:e};return t.memoizedState=a,function(){if((le&2)!==0)throw Error(p(440));return a.impl.apply(void 0,arguments)}}},nr={readContext:Be,use:ln,useCallback:no,useContext:Be,useEffect:Pc,useImperativeHandle:io,useInsertionEffect:to,useLayoutEffect:ao,useMemo:co,useReducer:nn,useRef:$u,useState:function(){return nn(qt)},useDebugValue:er,useDeferredValue:function(e,t){var a=Ce();return ro(a,se.memoizedState,e,t)},useTransition:function(){var e=nn(qt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:Pl(e),t]},useSyncExternalStore:Nu,useId:po,useHostTransitionStatus:lr,useFormState:Ku,useActionState:Ku,useOptimistic:function(e,t){var a=Ce();return Qu(a,se,e,t)},useMemoCache:Jc,useCacheRefresh:fo};nr.useEffectEvent=eo;var vo={readContext:Be,use:ln,useCallback:no,useContext:Be,useEffect:Pc,useImperativeHandle:io,useInsertionEffect:to,useLayoutEffect:ao,useMemo:co,useReducer:Wc,useRef:$u,useState:function(){return Wc(qt)},useDebugValue:er,useDeferredValue:function(e,t){var a=Ce();return se===null?tr(a,e,t):ro(a,se.memoizedState,e,t)},useTransition:function(){var e=Wc(qt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:Pl(e),t]},useSyncExternalStore:Nu,useId:po,useHostTransitionStatus:lr,useFormState:Fu,useActionState:Fu,useOptimistic:function(e,t){var a=Ce();return se!==null?Qu(a,se,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Jc,useCacheRefresh:fo};vo.useEffectEvent=eo;function cr(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:M({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var rr={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ct(),i=na(l);i.payload=t,a!=null&&(i.callback=a),t=ca(e,i,l),t!==null&&(Ke(t,e,l),Kl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ct(),i=na(l);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ca(e,i,l),t!==null&&(Ke(t,e,l),Kl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ct(),l=na(a);l.tag=2,t!=null&&(l.callback=t),t=ca(e,l,a),t!==null&&(Ke(t,e,a),Kl(t,e,a))}};function yo(e,t,a,l,i,n,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,n,c):t.prototype&&t.prototype.isPureReactComponent?!Gl(a,l)||!Gl(i,n):!0}function So(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&rr.enqueueReplaceState(t,t.state,null)}function ja(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=M({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function Co(e){ji(e)}function bo(e){console.error(e)}function Ao(e){ji(e)}function un(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Eo(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function sr(e,t,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){un(e,t)},a}function To(e){return e=na(e),e.tag=3,e}function Do(e,t,a,l){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var n=l.value;e.payload=function(){return i(n)},e.callback=function(){Eo(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Eo(t,a,l),typeof i!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function $f(e,t,a,l,i){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&cl(t,a,i,!0),a=at.current,a!==null){switch(a.tag){case 31:case 13:return gt===null?Cn():a.alternate===null&&me===0&&(me=3),a.flags&=-257,a.flags|=65536,a.lanes=i,l===Ki?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Br(e,l,i)),!1;case 22:return a.flags|=65536,l===Ki?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Br(e,l,i)),!1}throw Error(p(435,a.tag))}return Br(e,l,i),Cn(),!1}if(P)return t=at.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,l!==xc&&(e=Error(p(422),{cause:l}),kl(dt(e,a)))):(l!==xc&&(t=Error(p(423),{cause:l}),kl(dt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,l=dt(l,a),i=sr(e.stateNode,l,i),Ic(e,i),me!==4&&(me=2)),!1;var n=Error(p(520),{cause:l});if(n=dt(n,a),ui===null?ui=[n]:ui.push(n),me!==4&&(me=2),t===null)return!0;l=dt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=sr(a.stateNode,l,e),Ic(a,e),!1;case 1:if(t=a.type,n=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(pa===null||!pa.has(n))))return a.flags|=65536,i&=-i,a.lanes|=i,i=To(i),Do(i,e,a,l),Ic(a,i),!1}a=a.return}while(a!==null);return!1}var ur=Error(p(461)),Ee=!1;function we(e,t,a,l){t.child=e===null?Ru(t,null,a,l):Ha(t,e.child,a,l)}function xo(e,t,a,l,i){a=a.render;var n=t.ref;if("ref"in l){var c={};for(var r in l)r!=="ref"&&(c[r]=l[r])}else c=l;return Ba(t),l=kc(e,t,a,c,n,i),r=Xc(),e!==null&&!Ee?(Vc(e,t,i),Gt(e,t,i)):(P&&r&&Tc(t),t.flags|=1,we(e,t,l,i),t.child)}function Mo(e,t,a,l,i){if(e===null){var n=a.type;return typeof n=="function"&&!bc(n)&&n.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=n,Ro(e,t,n,l,i)):(e=Yi(a.type,null,l,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(n=e.child,!mr(e,i)){var c=n.memoizedProps;if(a=a.compare,a=a!==null?a:Gl,a(c,l)&&e.ref===t.ref)return Gt(e,t,i)}return t.flags|=1,e=zt(n,l),e.ref=t.ref,e.return=t,t.child=e}function Ro(e,t,a,l,i){if(e!==null){var n=e.memoizedProps;if(Gl(n,l)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=l=n,mr(e,i))(e.flags&131072)!==0&&(Ee=!0);else return t.lanes=e.lanes,Gt(e,t,i)}return or(e,t,a,l,i)}function Lo(e,t,a,l){var i=l.children,n=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(n=n!==null?n.baseLanes|a:a,e!==null){for(l=t.child=e.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;l=i&~n}else l=0,t.child=null;return Uo(e,t,n,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zi(t,n!==null?n.cachePool:null),n!==null?Ou(t,n):qc(),Bu(t);else return l=t.lanes=536870912,Uo(e,t,n!==null?n.baseLanes|a:a,a,l)}else n!==null?(Zi(t,n.cachePool),Ou(t,n),sa(),t.memoizedState=null):(e!==null&&Zi(t,null),qc(),sa());return we(e,t,i,a),t.child}function ai(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Uo(e,t,a,l,i){var n=wc();return n=n===null?null:{parent:be._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&Zi(t,null),qc(),Bu(t),e!==null&&cl(e,t,l,!0),t.childLanes=i,null}function on(e,t){return t=pn({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Oo(e,t,a){return Ha(t,e.child,null,a),e=on(t,t.pendingProps),e.flags|=2,lt(t),t.memoizedState=null,e}function Pf(e,t,a){var l=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(P){if(l.mode==="hidden")return e=on(t,l),t.lanes=536870912,ai(null,e);if(Qc(t),(e=fe)?(e=kd(e,_t),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ea!==null?{id:Dt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},a=_u(e),a.return=t,t.child=a,Oe=t,fe=null)):e=null,e===null)throw aa(t);return t.lanes=536870912,null}return on(t,l)}var n=e.memoizedState;if(n!==null){var c=n.dehydrated;if(Qc(t),i)if(t.flags&256)t.flags&=-257,t=Oo(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(p(558));else if(Ee||cl(e,t,a,!1),i=(a&e.childLanes)!==0,Ee||i){if(l=pe,l!==null&&(c=Cs(l,a),c!==0&&c!==n.retryLane))throw n.retryLane=c,Ra(e,c),Ke(l,e,c),ur;Cn(),t=Oo(e,t,a)}else e=n.treeContext,fe=ht(c.nextSibling),Oe=t,P=!0,ta=null,_t=!1,e!==null&&mu(t,e),t=on(t,l),t.flags|=4096;return t}return e=zt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function dn(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(p(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function or(e,t,a,l,i){return Ba(t),a=kc(e,t,a,l,void 0,i),l=Xc(),e!==null&&!Ee?(Vc(e,t,i),Gt(e,t,i)):(P&&l&&Tc(t),t.flags|=1,we(e,t,a,i),t.child)}function Bo(e,t,a,l,i,n){return Ba(t),t.updateQueue=null,a=zu(t,l,a,i),wu(e),l=Xc(),e!==null&&!Ee?(Vc(e,t,n),Gt(e,t,n)):(P&&l&&Tc(t),t.flags|=1,we(e,t,a,n),t.child)}function wo(e,t,a,l,i){if(Ba(t),t.stateNode===null){var n=al,c=a.contextType;typeof c=="object"&&c!==null&&(n=Be(c)),n=new a(l,n),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=rr,t.stateNode=n,n._reactInternals=t,n=t.stateNode,n.props=l,n.state=t.memoizedState,n.refs={},Nc(t),c=a.contextType,n.context=typeof c=="object"&&c!==null?Be(c):al,n.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(cr(t,a,c,l),n.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(c=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),c!==n.state&&rr.enqueueReplaceState(n,n.state,null),Fl(t,l,n,i),Wl(),n.state=t.memoizedState),typeof n.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){n=t.stateNode;var r=t.memoizedProps,s=ja(a,r);n.props=s;var _=n.context,m=a.contextType;c=al,typeof m=="object"&&m!==null&&(c=Be(m));var S=a.getDerivedStateFromProps;m=typeof S=="function"||typeof n.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,m||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(r||_!==c)&&So(t,n,l,c),ia=!1;var g=t.memoizedState;n.state=g,Fl(t,l,n,i),Wl(),_=t.memoizedState,r||g!==_||ia?(typeof S=="function"&&(cr(t,a,S,l),_=t.memoizedState),(s=ia||yo(t,a,s,l,g,_,c))?(m||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(t.flags|=4194308)):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=_),n.props=l,n.state=_,n.context=c,l=s):(typeof n.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{n=t.stateNode,Hc(e,t),c=t.memoizedProps,m=ja(a,c),n.props=m,S=t.pendingProps,g=n.context,_=a.contextType,s=al,typeof _=="object"&&_!==null&&(s=Be(_)),r=a.getDerivedStateFromProps,(_=typeof r=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c!==S||g!==s)&&So(t,n,l,s),ia=!1,g=t.memoizedState,n.state=g,Fl(t,l,n,i),Wl();var h=t.memoizedState;c!==S||g!==h||ia||e!==null&&e.dependencies!==null&&Xi(e.dependencies)?(typeof r=="function"&&(cr(t,a,r,l),h=t.memoizedState),(m=ia||yo(t,a,m,l,g,h,s)||e!==null&&e.dependencies!==null&&Xi(e.dependencies))?(_||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(l,h,s),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(l,h,s)),typeof n.componentDidUpdate=="function"&&(t.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof n.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=h),n.props=l,n.state=h,n.context=s,l=m):(typeof n.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),l=!1)}return n=l,dn(e,t),l=(t.flags&128)!==0,n||l?(n=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:n.render(),t.flags|=1,e!==null&&l?(t.child=Ha(t,e.child,null,i),t.child=Ha(t,null,a,i)):we(e,t,a,i),t.memoizedState=n.state,e=t.child):e=Gt(e,t,i),e}function zo(e,t,a,l){return Ua(),t.flags|=256,we(e,t,a,l),t.child}var dr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pr(e){return{baseLanes:e,cachePool:Au()}}function fr(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=nt),e}function No(e,t,a){var l=t.pendingProps,i=!1,n=(t.flags&128)!==0,c;if((c=n)||(c=e!==null&&e.memoizedState===null?!1:(Se.current&2)!==0),c&&(i=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(P){if(i?ra(t):sa(),(e=fe)?(e=kd(e,_t),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ea!==null?{id:Dt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},a=_u(e),a.return=t,t.child=a,Oe=t,fe=null)):e=null,e===null)throw aa(t);return Kr(e)?t.lanes=32:t.lanes=536870912,null}var r=l.children;return l=l.fallback,i?(sa(),i=t.mode,r=pn({mode:"hidden",children:r},i),l=La(l,i,a,null),r.return=t,l.return=t,r.sibling=l,t.child=r,l=t.child,l.memoizedState=pr(a),l.childLanes=fr(e,c,a),t.memoizedState=dr,ai(null,l)):(ra(t),_r(t,r))}var s=e.memoizedState;if(s!==null&&(r=s.dehydrated,r!==null)){if(n)t.flags&256?(ra(t),t.flags&=-257,t=gr(e,t,a)):t.memoizedState!==null?(sa(),t.child=e.child,t.flags|=128,t=null):(sa(),r=l.fallback,i=t.mode,l=pn({mode:"visible",children:l.children},i),r=La(r,i,a,null),r.flags|=2,l.return=t,r.return=t,l.sibling=r,t.child=l,Ha(t,e.child,null,a),l=t.child,l.memoizedState=pr(a),l.childLanes=fr(e,c,a),t.memoizedState=dr,t=ai(null,l));else if(ra(t),Kr(r)){if(c=r.nextSibling&&r.nextSibling.dataset,c)var _=c.dgst;c=_,l=Error(p(419)),l.stack="",l.digest=c,kl({value:l,source:null,stack:null}),t=gr(e,t,a)}else if(Ee||cl(e,t,a,!1),c=(a&e.childLanes)!==0,Ee||c){if(c=pe,c!==null&&(l=Cs(c,a),l!==0&&l!==s.retryLane))throw s.retryLane=l,Ra(e,l),Ke(c,e,l),ur;Jr(r)||Cn(),t=gr(e,t,a)}else Jr(r)?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,fe=ht(r.nextSibling),Oe=t,P=!0,ta=null,_t=!1,e!==null&&mu(t,e),t=_r(t,l.children),t.flags|=4096);return t}return i?(sa(),r=l.fallback,i=t.mode,s=e.child,_=s.sibling,l=zt(s,{mode:"hidden",children:l.children}),l.subtreeFlags=s.subtreeFlags&65011712,_!==null?r=zt(_,r):(r=La(r,i,a,null),r.flags|=2),r.return=t,l.return=t,l.sibling=r,t.child=l,ai(null,l),l=t.child,r=e.child.memoizedState,r===null?r=pr(a):(i=r.cachePool,i!==null?(s=be._currentValue,i=i.parent!==s?{parent:s,pool:s}:i):i=Au(),r={baseLanes:r.baseLanes|a,cachePool:i}),l.memoizedState=r,l.childLanes=fr(e,c,a),t.memoizedState=dr,ai(e.child,l)):(ra(t),a=e.child,e=a.sibling,a=zt(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function _r(e,t){return t=pn({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function pn(e,t){return e=tt(22,e,null,t),e.lanes=0,e}function gr(e,t,a){return Ha(t,e.child,null,a),e=_r(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ho(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Lc(e.return,t,a)}function hr(e,t,a,l,i,n){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:i,treeForkCount:n}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=a,c.tailMode=i,c.treeForkCount=n)}function Io(e,t,a){var l=t.pendingProps,i=l.revealOrder,n=l.tail;l=l.children;var c=Se.current,r=(c&2)!==0;if(r?(c=c&1|2,t.flags|=128):c&=1,D(Se,c),we(e,t,l,a),l=P?Yl:0,!r&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ho(e,a,t);else if(e.tag===19)Ho(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Pi(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),hr(t,!1,i,a,n,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Pi(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}hr(t,!0,a,null,n,l);break;case"together":hr(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Gt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),da|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(cl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(p(153));if(t.child!==null){for(e=t.child,a=zt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=zt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function mr(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Xi(e)))}function e_(e,t,a){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),la(t,be,e.memoizedState.cache),Ua();break;case 27:case 5:Ml(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:la(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Qc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ra(t),t.flags|=128,null):(a&t.child.childLanes)!==0?No(e,t,a):(ra(t),e=Gt(e,t,a),e!==null?e.sibling:null);ra(t);break;case 19:var i=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(cl(e,t,a,!1),l=(a&t.childLanes)!==0),i){if(l)return Io(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(Se,Se.current),l)break;return null;case 22:return t.lanes=0,Lo(e,t,a,t.pendingProps);case 24:la(t,be,e.memoizedState.cache)}return Gt(e,t,a)}function jo(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ee=!0;else{if(!mr(e,a)&&(t.flags&128)===0)return Ee=!1,e_(e,t,a);Ee=(e.flags&131072)!==0}else Ee=!1,P&&(t.flags&1048576)!==0&&hu(t,Yl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=za(t.elementType),t.type=e,typeof e=="function")bc(e)?(l=ja(e,l),t.tag=1,t=wo(null,t,e,l,a)):(t.tag=0,t=or(null,t,e,l,a));else{if(e!=null){var i=e.$$typeof;if(i===rt){t.tag=11,t=xo(null,t,e,l,a);break e}else if(i===$){t.tag=14,t=Mo(null,t,e,l,a);break e}}throw t=Ut(e)||e,Error(p(306,t,""))}}return t;case 0:return or(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,i=ja(l,t.pendingProps),wo(e,t,l,i,a);case 3:e:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(p(387));l=t.pendingProps;var n=t.memoizedState;i=n.element,Hc(e,t),Fl(t,l,null,a);var c=t.memoizedState;if(l=c.cache,la(t,be,l),l!==n.cache&&Uc(t,[be],a,!0),Wl(),l=c.element,n.isDehydrated)if(n={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=n,t.memoizedState=n,t.flags&256){t=zo(e,t,l,a);break e}else if(l!==i){i=dt(Error(p(424)),t),kl(i),t=zo(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(fe=ht(e.firstChild),Oe=t,P=!0,ta=null,_t=!0,a=Ru(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ua(),l===i){t=Gt(e,t,a);break e}we(e,t,l,a)}t=t.child}return t;case 26:return dn(e,t),e===null?(a=Wd(t.type,null,t.pendingProps,null))?t.memoizedState=a:P||(a=t.type,e=t.pendingProps,l=Mn(Z.current).createElement(a),l[Ue]=t,l[Ye]=e,ze(l,a,e),xe(l),t.stateNode=l):t.memoizedState=Wd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ml(t),e===null&&P&&(l=t.stateNode=Zd(t.type,t.pendingProps,Z.current),Oe=t,_t=!0,i=fe,ha(t.type)?(Wr=i,fe=ht(l.firstChild)):fe=i),we(e,t,t.pendingProps.children,a),dn(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&P&&((i=l=fe)&&(l=L_(l,t.type,t.pendingProps,_t),l!==null?(t.stateNode=l,Oe=t,fe=ht(l.firstChild),_t=!1,i=!0):i=!1),i||aa(t)),Ml(t),i=t.type,n=t.pendingProps,c=e!==null?e.memoizedProps:null,l=n.children,Xr(i,n)?l=null:c!==null&&Xr(i,c)&&(t.flags|=32),t.memoizedState!==null&&(i=kc(e,t,Xf,null,null,a),mi._currentValue=i),dn(e,t),we(e,t,l,a),t.child;case 6:return e===null&&P&&((e=a=fe)&&(a=U_(a,t.pendingProps,_t),a!==null?(t.stateNode=a,Oe=t,fe=null,e=!0):e=!1),e||aa(t)),null;case 13:return No(e,t,a);case 4:return Ie(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Ha(t,null,l,a):we(e,t,l,a),t.child;case 11:return xo(e,t,t.type,t.pendingProps,a);case 7:return we(e,t,t.pendingProps,a),t.child;case 8:return we(e,t,t.pendingProps.children,a),t.child;case 12:return we(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,la(t,t.type,l.value),we(e,t,l.children,a),t.child;case 9:return i=t.type._context,l=t.pendingProps.children,Ba(t),i=Be(i),l=l(i),t.flags|=1,we(e,t,l,a),t.child;case 14:return Mo(e,t,t.type,t.pendingProps,a);case 15:return Ro(e,t,t.type,t.pendingProps,a);case 19:return Io(e,t,a);case 31:return Pf(e,t,a);case 22:return Lo(e,t,a,t.pendingProps);case 24:return Ba(t),l=Be(be),e===null?(i=wc(),i===null&&(i=pe,n=Oc(),i.pooledCache=n,n.refCount++,n!==null&&(i.pooledCacheLanes|=a),i=n),t.memoizedState={parent:l,cache:i},Nc(t),la(t,be,i)):((e.lanes&a)!==0&&(Hc(e,t),Fl(t,null,null,a),Wl()),i=e.memoizedState,n=t.memoizedState,i.parent!==l?(i={parent:l,cache:l},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),la(t,be,l)):(l=n.cache,la(t,be,l),l!==i.cache&&Uc(t,[be],a,!0))),we(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(p(156,t.tag))}function Qt(e){e.flags|=4}function vr(e,t,a,l,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(pd())e.flags|=8192;else throw Na=Ki,zc}else e.flags&=-16777217}function qo(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!tp(t))if(pd())e.flags|=8192;else throw Na=Ki,zc}function fn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?vs():536870912,e.lanes|=t,vl|=t)}function li(e,t){if(!P)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function _e(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags&65011712,l|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,l|=i.subtreeFlags,l|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function t_(e,t,a){var l=t.pendingProps;switch(Dc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _e(t),null;case 1:return _e(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),It(be),ye(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nl(t)?Qt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mc())),_e(t),null;case 26:var i=t.type,n=t.memoizedState;return e===null?(Qt(t),n!==null?(_e(t),qo(t,n)):(_e(t),vr(t,i,null,l,a))):n?n!==e.memoizedState?(Qt(t),_e(t),qo(t,n)):(_e(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&Qt(t),_e(t),vr(t,i,e,l,a)),null;case 27:if(Ai(t),a=Z.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Qt(t);else{if(!l){if(t.stateNode===null)throw Error(p(166));return _e(t),null}e=L.current,nl(t)?vu(t):(e=Zd(i,l,a),t.stateNode=e,Qt(t))}return _e(t),null;case 5:if(Ai(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Qt(t);else{if(!l){if(t.stateNode===null)throw Error(p(166));return _e(t),null}if(n=L.current,nl(t))vu(t);else{var c=Mn(Z.current);switch(n){case 1:n=c.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:n=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":n=c.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":n=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":n=c.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild);break;case"select":n=typeof l.is=="string"?c.createElement("select",{is:l.is}):c.createElement("select"),l.multiple?n.multiple=!0:l.size&&(n.size=l.size);break;default:n=typeof l.is=="string"?c.createElement(i,{is:l.is}):c.createElement(i)}}n[Ue]=t,n[Ye]=l;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)n.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=n;e:switch(ze(n,i,l),i){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Qt(t)}}return _e(t),vr(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Qt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(p(166));if(e=Z.current,nl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,i=Oe,i!==null)switch(i.tag){case 27:case 5:l=i.memoizedProps}e[Ue]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Nd(e.nodeValue,a)),e||aa(t,!0)}else e=Mn(e).createTextNode(l),e[Ue]=t,t.stateNode=e}return _e(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=nl(t),a!==null){if(e===null){if(!l)throw Error(p(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(p(557));e[Ue]=t}else Ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),e=!1}else a=Mc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(lt(t),t):(lt(t),null);if((t.flags&128)!==0)throw Error(p(558))}return _e(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=nl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!i)throw Error(p(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(p(317));i[Ue]=t}else Ua(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;_e(t),i=!1}else i=Mc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(lt(t),t):(lt(t),null)}return lt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,i=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(i=l.alternate.memoizedState.cachePool.pool),n=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==i&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),fn(t,t.updateQueue),_e(t),null);case 4:return ye(),e===null&&qr(t.stateNode.containerInfo),_e(t),null;case 10:return It(t.type),_e(t),null;case 19:if(b(Se),l=t.memoizedState,l===null)return _e(t),null;if(i=(t.flags&128)!==0,n=l.rendering,n===null)if(i)li(l,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(n=Pi(e),n!==null){for(t.flags|=128,li(l,!1),e=n.updateQueue,t.updateQueue=e,fn(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)fu(a,e),a=a.sibling;return D(Se,Se.current&1|2),P&&Nt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Fe()>vn&&(t.flags|=128,i=!0,li(l,!1),t.lanes=4194304)}else{if(!i)if(e=Pi(n),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,fn(t,e),li(l,!0),l.tail===null&&l.tailMode==="hidden"&&!n.alternate&&!P)return _e(t),null}else 2*Fe()-l.renderingStartTime>vn&&a!==536870912&&(t.flags|=128,i=!0,li(l,!1),t.lanes=4194304);l.isBackwards?(n.sibling=t.child,t.child=n):(e=l.last,e!==null?e.sibling=n:t.child=n,l.last=n)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Fe(),e.sibling=null,a=Se.current,D(Se,i?a&1|2:a&1),P&&Nt(t,l.treeForkCount),e):(_e(t),null);case 22:case 23:return lt(t),Gc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(_e(t),t.subtreeFlags&6&&(t.flags|=8192)):_e(t),a=t.updateQueue,a!==null&&fn(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&b(wa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),It(be),_e(t),null;case 25:return null;case 30:return null}throw Error(p(156,t.tag))}function a_(e,t){switch(Dc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return It(be),ye(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ai(t),null;case 31:if(t.memoizedState!==null){if(lt(t),t.alternate===null)throw Error(p(340));Ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(lt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(p(340));Ua()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(Se),null;case 4:return ye(),null;case 10:return It(t.type),null;case 22:case 23:return lt(t),Gc(),e!==null&&b(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return It(be),null;case 25:return null;default:return null}}function Go(e,t){switch(Dc(t),t.tag){case 3:It(be),ye();break;case 26:case 27:case 5:Ai(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&lt(t);break;case 13:lt(t);break;case 19:b(Se);break;case 10:It(t.type);break;case 22:case 23:lt(t),Gc(),e!==null&&b(wa);break;case 24:It(be)}}function ii(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){l=void 0;var n=a.create,c=a.inst;l=n(),c.destroy=l}a=a.next}while(a!==i)}}catch(r){ce(t,t.return,r)}}function ua(e,t,a){try{var l=t.updateQueue,i=l!==null?l.lastEffect:null;if(i!==null){var n=i.next;l=n;do{if((l.tag&e)===e){var c=l.inst,r=c.destroy;if(r!==void 0){c.destroy=void 0,i=t;var s=a,_=r;try{_()}catch(m){ce(i,s,m)}}}l=l.next}while(l!==n)}}catch(m){ce(t,t.return,m)}}function Qo(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Uu(t,a)}catch(l){ce(e,e.return,l)}}}function Yo(e,t,a){a.props=ja(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ce(e,t,l)}}function ni(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(i){ce(e,t,i)}}function Mt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(i){ce(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){ce(e,t,i)}else a.current=null}function ko(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(i){ce(e,e.return,i)}}function yr(e,t,a){try{var l=e.stateNode;E_(l,e.type,a,t),l[Ye]=t}catch(i){ce(e,e.return,i)}}function Xo(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ha(e.type)||e.tag===4}function Sr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Xo(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cr(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Bt));else if(l!==4&&(l===27&&ha(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Cr(e,t,a),e=e.sibling;e!==null;)Cr(e,t,a),e=e.sibling}function _n(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(_n(e,t,a),e=e.sibling;e!==null;)_n(e,t,a),e=e.sibling}function Vo(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ze(t,l,a),t[Ue]=e,t[Ye]=a}catch(n){ce(e,e.return,n)}}var Yt=!1,Te=!1,br=!1,Zo=typeof WeakSet=="function"?WeakSet:Set,Me=null;function l_(e,t){if(e=e.containerInfo,Yr=zn,e=iu(e),gc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var i=l.anchorOffset,n=l.focusNode;l=l.focusOffset;try{a.nodeType,n.nodeType}catch{a=null;break e}var c=0,r=-1,s=-1,_=0,m=0,S=e,g=null;t:for(;;){for(var h;S!==a||i!==0&&S.nodeType!==3||(r=c+i),S!==n||l!==0&&S.nodeType!==3||(s=c+l),S.nodeType===3&&(c+=S.nodeValue.length),(h=S.firstChild)!==null;)g=S,S=h;for(;;){if(S===e)break t;if(g===a&&++_===i&&(r=c),g===n&&++m===l&&(s=c),(h=S.nextSibling)!==null)break;S=g,g=S.parentNode}S=h}a=r===-1||s===-1?null:{start:r,end:s}}else a=null}a=a||{start:0,end:0}}else a=null;for(kr={focusedElem:e,selectionRange:a},zn=!1,Me=t;Me!==null;)if(t=Me,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Me=e;else for(;Me!==null;){switch(t=Me,n=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&n!==null){e=void 0,a=t,i=n.memoizedProps,n=n.memoizedState,l=a.stateNode;try{var R=ja(a.type,i);e=l.getSnapshotBeforeUpdate(R,n),l.__reactInternalSnapshotBeforeUpdate=e}catch(I){ce(a,a.return,I)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Zr(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Zr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(p(163))}if(e=t.sibling,e!==null){e.return=t.return,Me=e;break}Me=t.return}}function Jo(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:Xt(e,a),l&4&&ii(5,a);break;case 1:if(Xt(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){ce(a,a.return,c)}else{var i=ja(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ce(a,a.return,c)}}l&64&&Qo(a),l&512&&ni(a,a.return);break;case 3:if(Xt(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Uu(e,t)}catch(c){ce(a,a.return,c)}}break;case 27:t===null&&l&4&&Vo(a);case 26:case 5:Xt(e,a),t===null&&l&4&&ko(a),l&512&&ni(a,a.return);break;case 12:Xt(e,a);break;case 31:Xt(e,a),l&4&&Fo(e,a);break;case 13:Xt(e,a),l&4&&$o(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=p_.bind(null,a),O_(e,a))));break;case 22:if(l=a.memoizedState!==null||Yt,!l){t=t!==null&&t.memoizedState!==null||Te,i=Yt;var n=Te;Yt=l,(Te=t)&&!n?Vt(e,a,(a.subtreeFlags&8772)!==0):Xt(e,a),Yt=i,Te=n}break;case 30:break;default:Xt(e,a)}}function Ko(e){var t=e.alternate;t!==null&&(e.alternate=null,Ko(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&$n(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ge=null,Xe=!1;function kt(e,t,a){for(a=a.child;a!==null;)Wo(e,t,a),a=a.sibling}function Wo(e,t,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Rl,a)}catch{}switch(a.tag){case 26:Te||Mt(a,t),kt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Te||Mt(a,t);var l=ge,i=Xe;ha(a.type)&&(ge=a.stateNode,Xe=!1),kt(e,t,a),_i(a.stateNode),ge=l,Xe=i;break;case 5:Te||Mt(a,t);case 6:if(l=ge,i=Xe,ge=null,kt(e,t,a),ge=l,Xe=i,ge!==null)if(Xe)try{(ge.nodeType===9?ge.body:ge.nodeName==="HTML"?ge.ownerDocument.body:ge).removeChild(a.stateNode)}catch(n){ce(a,t,n)}else try{ge.removeChild(a.stateNode)}catch(n){ce(a,t,n)}break;case 18:ge!==null&&(Xe?(e=ge,Qd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Dl(e)):Qd(ge,a.stateNode));break;case 4:l=ge,i=Xe,ge=a.stateNode.containerInfo,Xe=!0,kt(e,t,a),ge=l,Xe=i;break;case 0:case 11:case 14:case 15:ua(2,a,t),Te||ua(4,a,t),kt(e,t,a);break;case 1:Te||(Mt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Yo(a,t,l)),kt(e,t,a);break;case 21:kt(e,t,a);break;case 22:Te=(l=Te)||a.memoizedState!==null,kt(e,t,a),Te=l;break;default:kt(e,t,a)}}function Fo(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Dl(e)}catch(a){ce(t,t.return,a)}}}function $o(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Dl(e)}catch(a){ce(t,t.return,a)}}function i_(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Zo),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Zo),t;default:throw Error(p(435,e.tag))}}function gn(e,t){var a=i_(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var i=f_.bind(null,e,l);l.then(i,i)}})}function Ve(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var i=a[l],n=e,c=t,r=c;e:for(;r!==null;){switch(r.tag){case 27:if(ha(r.type)){ge=r.stateNode,Xe=!1;break e}break;case 5:ge=r.stateNode,Xe=!1;break e;case 3:case 4:ge=r.stateNode.containerInfo,Xe=!0;break e}r=r.return}if(ge===null)throw Error(p(160));Wo(n,c,i),ge=null,Xe=!1,n=i.alternate,n!==null&&(n.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Po(t,e),t=t.sibling}var St=null;function Po(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ve(t,e),Ze(e),l&4&&(ua(3,e,e.return),ii(3,e),ua(5,e,e.return));break;case 1:Ve(t,e),Ze(e),l&512&&(Te||a===null||Mt(a,a.return)),l&64&&Yt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var i=St;if(Ve(t,e),Ze(e),l&512&&(Te||a===null||Mt(a,a.return)),l&4){var n=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(l){case"title":n=i.getElementsByTagName("title")[0],(!n||n[Ol]||n[Ue]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(l),i.head.insertBefore(n,i.querySelector("head > title"))),ze(n,l,a),n[Ue]=e,xe(n),l=n;break e;case"link":var c=Pd("link","href",i).get(l+(a.href||""));if(c){for(var r=0;r<c.length;r++)if(n=c[r],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(r,1);break t}}n=i.createElement(l),ze(n,l,a),i.head.appendChild(n);break;case"meta":if(c=Pd("meta","content",i).get(l+(a.content||""))){for(r=0;r<c.length;r++)if(n=c[r],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(r,1);break t}}n=i.createElement(l),ze(n,l,a),i.head.appendChild(n);break;default:throw Error(p(468,l))}n[Ue]=e,xe(n),l=n}e.stateNode=l}else ep(i,e.type,e.stateNode);else e.stateNode=$d(i,l,e.memoizedProps);else n!==l?(n===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):n.count--,l===null?ep(i,e.type,e.stateNode):$d(i,l,e.memoizedProps)):l===null&&e.stateNode!==null&&yr(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ve(t,e),Ze(e),l&512&&(Te||a===null||Mt(a,a.return)),a!==null&&l&4&&yr(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ve(t,e),Ze(e),l&512&&(Te||a===null||Mt(a,a.return)),e.flags&32){i=e.stateNode;try{Ka(i,"")}catch(R){ce(e,e.return,R)}}l&4&&e.stateNode!=null&&(i=e.memoizedProps,yr(e,i,a!==null?a.memoizedProps:i)),l&1024&&(br=!0);break;case 6:if(Ve(t,e),Ze(e),l&4){if(e.stateNode===null)throw Error(p(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(R){ce(e,e.return,R)}}break;case 3:if(Un=null,i=St,St=Rn(t.containerInfo),Ve(t,e),St=i,Ze(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Dl(t.containerInfo)}catch(R){ce(e,e.return,R)}br&&(br=!1,ed(e));break;case 4:l=St,St=Rn(e.stateNode.containerInfo),Ve(t,e),Ze(e),St=l;break;case 12:Ve(t,e),Ze(e);break;case 31:Ve(t,e),Ze(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,gn(e,l)));break;case 13:Ve(t,e),Ze(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(mn=Fe()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,gn(e,l)));break;case 22:i=e.memoizedState!==null;var s=a!==null&&a.memoizedState!==null,_=Yt,m=Te;if(Yt=_||i,Te=m||s,Ve(t,e),Te=m,Yt=_,Ze(e),l&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||s||Yt||Te||qa(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){s=a=t;try{if(n=s.stateNode,i)c=n.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{r=s.stateNode;var S=s.memoizedProps.style,g=S!=null&&S.hasOwnProperty("display")?S.display:null;r.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(R){ce(s,s.return,R)}}}else if(t.tag===6){if(a===null){s=t;try{s.stateNode.nodeValue=i?"":s.memoizedProps}catch(R){ce(s,s.return,R)}}}else if(t.tag===18){if(a===null){s=t;try{var h=s.stateNode;i?Yd(h,!0):Yd(s.stateNode,!1)}catch(R){ce(s,s.return,R)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,gn(e,a))));break;case 19:Ve(t,e),Ze(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,gn(e,l)));break;case 30:break;case 21:break;default:Ve(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Xo(l)){a=l;break}l=l.return}if(a==null)throw Error(p(160));switch(a.tag){case 27:var i=a.stateNode,n=Sr(e);_n(e,n,i);break;case 5:var c=a.stateNode;a.flags&32&&(Ka(c,""),a.flags&=-33);var r=Sr(e);_n(e,r,c);break;case 3:case 4:var s=a.stateNode.containerInfo,_=Sr(e);Cr(e,_,s);break;default:throw Error(p(161))}}catch(m){ce(e,e.return,m)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ed(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ed(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Jo(e,t.alternate,t),t=t.sibling}function qa(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ua(4,t,t.return),qa(t);break;case 1:Mt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Yo(t,t.return,a),qa(t);break;case 27:_i(t.stateNode);case 26:case 5:Mt(t,t.return),qa(t);break;case 22:t.memoizedState===null&&qa(t);break;case 30:qa(t);break;default:qa(t)}e=e.sibling}}function Vt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,i=e,n=t,c=n.flags;switch(n.tag){case 0:case 11:case 15:Vt(i,n,a),ii(4,n);break;case 1:if(Vt(i,n,a),l=n,i=l.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(_){ce(l,l.return,_)}if(l=n,i=l.updateQueue,i!==null){var r=l.stateNode;try{var s=i.shared.hiddenCallbacks;if(s!==null)for(i.shared.hiddenCallbacks=null,i=0;i<s.length;i++)Lu(s[i],r)}catch(_){ce(l,l.return,_)}}a&&c&64&&Qo(n),ni(n,n.return);break;case 27:Vo(n);case 26:case 5:Vt(i,n,a),a&&l===null&&c&4&&ko(n),ni(n,n.return);break;case 12:Vt(i,n,a);break;case 31:Vt(i,n,a),a&&c&4&&Fo(i,n);break;case 13:Vt(i,n,a),a&&c&4&&$o(i,n);break;case 22:n.memoizedState===null&&Vt(i,n,a),ni(n,n.return);break;case 30:break;default:Vt(i,n,a)}t=t.sibling}}function Ar(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Xl(a))}function Er(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xl(e))}function Ct(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)td(e,t,a,l),t=t.sibling}function td(e,t,a,l){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ct(e,t,a,l),i&2048&&ii(9,t);break;case 1:Ct(e,t,a,l);break;case 3:Ct(e,t,a,l),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xl(e)));break;case 12:if(i&2048){Ct(e,t,a,l),e=t.stateNode;try{var n=t.memoizedProps,c=n.id,r=n.onPostCommit;typeof r=="function"&&r(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){ce(t,t.return,s)}}else Ct(e,t,a,l);break;case 31:Ct(e,t,a,l);break;case 13:Ct(e,t,a,l);break;case 23:break;case 22:n=t.stateNode,c=t.alternate,t.memoizedState!==null?n._visibility&2?Ct(e,t,a,l):ci(e,t):n._visibility&2?Ct(e,t,a,l):(n._visibility|=2,gl(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),i&2048&&Ar(c,t);break;case 24:Ct(e,t,a,l),i&2048&&Er(t.alternate,t);break;default:Ct(e,t,a,l)}}function gl(e,t,a,l,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var n=e,c=t,r=a,s=l,_=c.flags;switch(c.tag){case 0:case 11:case 15:gl(n,c,r,s,i),ii(8,c);break;case 23:break;case 22:var m=c.stateNode;c.memoizedState!==null?m._visibility&2?gl(n,c,r,s,i):ci(n,c):(m._visibility|=2,gl(n,c,r,s,i)),i&&_&2048&&Ar(c.alternate,c);break;case 24:gl(n,c,r,s,i),i&&_&2048&&Er(c.alternate,c);break;default:gl(n,c,r,s,i)}t=t.sibling}}function ci(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,i=l.flags;switch(l.tag){case 22:ci(a,l),i&2048&&Ar(l.alternate,l);break;case 24:ci(a,l),i&2048&&Er(l.alternate,l);break;default:ci(a,l)}t=t.sibling}}var ri=8192;function hl(e,t,a){if(e.subtreeFlags&ri)for(e=e.child;e!==null;)ad(e,t,a),e=e.sibling}function ad(e,t,a){switch(e.tag){case 26:hl(e,t,a),e.flags&ri&&e.memoizedState!==null&&k_(a,St,e.memoizedState,e.memoizedProps);break;case 5:hl(e,t,a);break;case 3:case 4:var l=St;St=Rn(e.stateNode.containerInfo),hl(e,t,a),St=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ri,ri=16777216,hl(e,t,a),ri=l):hl(e,t,a));break;default:hl(e,t,a)}}function ld(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function si(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Me=l,nd(l,e)}ld(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)id(e),e=e.sibling}function id(e){switch(e.tag){case 0:case 11:case 15:si(e),e.flags&2048&&ua(9,e,e.return);break;case 3:si(e);break;case 12:si(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,hn(e)):si(e);break;default:si(e)}}function hn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Me=l,nd(l,e)}ld(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ua(8,t,t.return),hn(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,hn(t));break;default:hn(t)}e=e.sibling}}function nd(e,t){for(;Me!==null;){var a=Me;switch(a.tag){case 0:case 11:case 15:ua(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Xl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Me=l;else e:for(a=e;Me!==null;){l=Me;var i=l.sibling,n=l.return;if(Ko(l),l===a){Me=null;break e}if(i!==null){i.return=n,Me=i;break e}Me=n}}}var n_={getCacheForType:function(e){var t=Be(be),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Be(be).controller.signal}},c_=typeof WeakMap=="function"?WeakMap:Map,le=0,pe=null,J=null,W=0,ne=0,it=null,oa=!1,ml=!1,Tr=!1,Zt=0,me=0,da=0,Ga=0,Dr=0,nt=0,vl=0,ui=null,Je=null,xr=!1,mn=0,cd=0,vn=1/0,yn=null,pa=null,De=0,fa=null,yl=null,Jt=0,Mr=0,Rr=null,rd=null,oi=0,Lr=null;function ct(){return(le&2)!==0&&W!==0?W&-W:v.T!==null?Nr():bs()}function sd(){if(nt===0)if((W&536870912)===0||P){var e=Di;Di<<=1,(Di&3932160)===0&&(Di=262144),nt=e}else nt=536870912;return e=at.current,e!==null&&(e.flags|=32),nt}function Ke(e,t,a){(e===pe&&(ne===2||ne===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),_a(e,W,nt,!1)),Ul(e,a),((le&2)===0||e!==pe)&&(e===pe&&((le&2)===0&&(Ga|=a),me===4&&_a(e,W,nt,!1)),Rt(e))}function ud(e,t,a){if((le&6)!==0)throw Error(p(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ll(e,t),i=l?u_(e,t):Or(e,t,!0),n=l;do{if(i===0){ml&&!l&&_a(e,t,0,!1);break}else{if(a=e.current.alternate,n&&!r_(a)){i=Or(e,t,!1),n=!1;continue}if(i===2){if(n=t,e.errorRecoveryDisabledLanes&n)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var r=e;i=ui;var s=r.current.memoizedState.isDehydrated;if(s&&(Sl(r,c).flags|=256),c=Or(r,c,!1),c!==2){if(Tr&&!s){r.errorRecoveryDisabledLanes|=n,Ga|=n,i=4;break e}n=Je,Je=i,n!==null&&(Je===null?Je=n:Je.push.apply(Je,n))}i=c}if(n=!1,i!==2)continue}}if(i===1){Sl(e,0),_a(e,t,0,!0);break}e:{switch(l=e,n=i,n){case 0:case 1:throw Error(p(345));case 4:if((t&4194048)!==t)break;case 6:_a(l,t,nt,!oa);break e;case 2:Je=null;break;case 3:case 5:break;default:throw Error(p(329))}if((t&62914560)===t&&(i=mn+300-Fe(),10<i)){if(_a(l,t,nt,!oa),Mi(l,0,!0)!==0)break e;Jt=t,l.timeoutHandle=qd(od.bind(null,l,a,Je,yn,xr,t,nt,Ga,vl,oa,n,"Throttled",-0,0),i);break e}od(l,a,Je,yn,xr,t,nt,Ga,vl,oa,n,null,-0,0)}}break}while(!0);Rt(e)}function od(e,t,a,l,i,n,c,r,s,_,m,S,g,h){if(e.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bt},ad(t,n,S);var R=(n&62914560)===n?mn-Fe():(n&4194048)===n?cd-Fe():0;if(R=X_(S,R),R!==null){Jt=n,e.cancelPendingCommit=R(vd.bind(null,e,t,n,a,l,i,c,r,s,m,S,null,g,h)),_a(e,n,c,!_);return}}vd(e,t,n,a,l,i,c,r,s)}function r_(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var i=a[l],n=i.getSnapshot;i=i.value;try{if(!et(n(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _a(e,t,a,l){t&=~Dr,t&=~Ga,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var i=t;0<i;){var n=31-Pe(i),c=1<<n;l[n]=-1,i&=~c}a!==0&&ys(e,a,t)}function Sn(){return(le&6)===0?(di(0),!1):!0}function Ur(){if(J!==null){if(ne===0)var e=J.return;else e=J,Ht=Oa=null,Zc(e),ol=null,Zl=0,e=J;for(;e!==null;)Go(e.alternate,e),e=e.return;J=null}}function Sl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,x_(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Jt=0,Ur(),pe=e,J=a=zt(e.current,null),W=t,ne=0,it=null,oa=!1,ml=Ll(e,t),Tr=!1,vl=nt=Dr=Ga=da=me=0,Je=ui=null,xr=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var i=31-Pe(l),n=1<<i;t|=e[i],l&=~n}return Zt=t,qi(),a}function dd(e,t){X=null,v.H=ti,t===ul||t===Ji?(t=Du(),ne=3):t===zc?(t=Du(),ne=4):ne=t===ur?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,it=t,J===null&&(me=1,un(e,dt(t,e.current)))}function pd(){var e=at.current;return e===null?!0:(W&4194048)===W?gt===null:(W&62914560)===W||(W&536870912)!==0?e===gt:!1}function fd(){var e=v.H;return v.H=ti,e===null?ti:e}function _d(){var e=v.A;return v.A=n_,e}function Cn(){me=4,oa||(W&4194048)!==W&&at.current!==null||(ml=!0),(da&134217727)===0&&(Ga&134217727)===0||pe===null||_a(pe,W,nt,!1)}function Or(e,t,a){var l=le;le|=2;var i=fd(),n=_d();(pe!==e||W!==t)&&(yn=null,Sl(e,t)),t=!1;var c=me;e:do try{if(ne!==0&&J!==null){var r=J,s=it;switch(ne){case 8:Ur(),c=6;break e;case 3:case 2:case 9:case 6:at.current===null&&(t=!0);var _=ne;if(ne=0,it=null,Cl(e,r,s,_),a&&ml){c=0;break e}break;default:_=ne,ne=0,it=null,Cl(e,r,s,_)}}s_(),c=me;break}catch(m){dd(e,m)}while(!0);return t&&e.shellSuspendCounter++,Ht=Oa=null,le=l,v.H=i,v.A=n,J===null&&(pe=null,W=0,qi()),c}function s_(){for(;J!==null;)gd(J)}function u_(e,t){var a=le;le|=2;var l=fd(),i=_d();pe!==e||W!==t?(yn=null,vn=Fe()+500,Sl(e,t)):ml=Ll(e,t);e:do try{if(ne!==0&&J!==null){t=J;var n=it;t:switch(ne){case 1:ne=0,it=null,Cl(e,t,n,1);break;case 2:case 9:if(Eu(n)){ne=0,it=null,hd(t);break}t=function(){ne!==2&&ne!==9||pe!==e||(ne=7),Rt(e)},n.then(t,t);break e;case 3:ne=7;break e;case 4:ne=5;break e;case 7:Eu(n)?(ne=0,it=null,hd(t)):(ne=0,it=null,Cl(e,t,n,7));break;case 5:var c=null;switch(J.tag){case 26:c=J.memoizedState;case 5:case 27:var r=J;if(c?tp(c):r.stateNode.complete){ne=0,it=null;var s=r.sibling;if(s!==null)J=s;else{var _=r.return;_!==null?(J=_,bn(_)):J=null}break t}}ne=0,it=null,Cl(e,t,n,5);break;case 6:ne=0,it=null,Cl(e,t,n,6);break;case 8:Ur(),me=6;break e;default:throw Error(p(462))}}o_();break}catch(m){dd(e,m)}while(!0);return Ht=Oa=null,v.H=l,v.A=i,le=a,J!==null?0:(pe=null,W=0,qi(),me)}function o_(){for(;J!==null&&!Op();)gd(J)}function gd(e){var t=jo(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?bn(e):J=t}function hd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Bo(a,t,t.pendingProps,t.type,void 0,W);break;case 11:t=Bo(a,t,t.pendingProps,t.type.render,t.ref,W);break;case 5:Zc(t);default:Go(a,t),t=J=fu(t,Zt),t=jo(a,t,Zt)}e.memoizedProps=e.pendingProps,t===null?bn(e):J=t}function Cl(e,t,a,l){Ht=Oa=null,Zc(t),ol=null,Zl=0;var i=t.return;try{if($f(e,i,t,a,W)){me=1,un(e,dt(a,e.current)),J=null;return}}catch(n){if(i!==null)throw J=i,n;me=1,un(e,dt(a,e.current)),J=null;return}t.flags&32768?(P||l===1?e=!0:ml||(W&536870912)!==0?e=!1:(oa=e=!0,(l===2||l===9||l===3||l===6)&&(l=at.current,l!==null&&l.tag===13&&(l.flags|=16384))),md(t,e)):bn(t)}function bn(e){var t=e;do{if((t.flags&32768)!==0){md(t,oa);return}e=t.return;var a=t_(t.alternate,t,Zt);if(a!==null){J=a;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);me===0&&(me=5)}function md(e,t){do{var a=a_(e.alternate,e);if(a!==null){a.flags&=32767,J=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=a}while(e!==null);me=6,J=null}function vd(e,t,a,l,i,n,c,r,s){e.cancelPendingCommit=null;do An();while(De!==0);if((le&6)!==0)throw Error(p(327));if(t!==null){if(t===e.current)throw Error(p(177));if(n=t.lanes|t.childLanes,n|=Sc,Qp(e,a,n,c,r,s),e===pe&&(J=pe=null,W=0),yl=t,fa=e,Jt=a,Mr=n,Rr=i,rd=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,__(Ei,function(){return Ad(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=v.T,v.T=null,i=T.p,T.p=2,c=le,le|=4;try{l_(e,t,a)}finally{le=c,T.p=i,v.T=l}}De=1,yd(),Sd(),Cd()}}function yd(){if(De===1){De=0;var e=fa,t=yl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=v.T,v.T=null;var l=T.p;T.p=2;var i=le;le|=4;try{Po(t,e);var n=kr,c=iu(e.containerInfo),r=n.focusedElem,s=n.selectionRange;if(c!==r&&r&&r.ownerDocument&&lu(r.ownerDocument.documentElement,r)){if(s!==null&&gc(r)){var _=s.start,m=s.end;if(m===void 0&&(m=_),"selectionStart"in r)r.selectionStart=_,r.selectionEnd=Math.min(m,r.value.length);else{var S=r.ownerDocument||document,g=S&&S.defaultView||window;if(g.getSelection){var h=g.getSelection(),R=r.textContent.length,I=Math.min(s.start,R),oe=s.end===void 0?I:Math.min(s.end,R);!h.extend&&I>oe&&(c=oe,oe=I,I=c);var d=au(r,I),u=au(r,oe);if(d&&u&&(h.rangeCount!==1||h.anchorNode!==d.node||h.anchorOffset!==d.offset||h.focusNode!==u.node||h.focusOffset!==u.offset)){var f=S.createRange();f.setStart(d.node,d.offset),h.removeAllRanges(),I>oe?(h.addRange(f),h.extend(u.node,u.offset)):(f.setEnd(u.node,u.offset),h.addRange(f))}}}}for(S=[],h=r;h=h.parentNode;)h.nodeType===1&&S.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<S.length;r++){var y=S[r];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}zn=!!Yr,kr=Yr=null}finally{le=i,T.p=l,v.T=a}}e.current=t,De=2}}function Sd(){if(De===2){De=0;var e=fa,t=yl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=v.T,v.T=null;var l=T.p;T.p=2;var i=le;le|=4;try{Jo(e,t.alternate,t)}finally{le=i,T.p=l,v.T=a}}De=3}}function Cd(){if(De===4||De===3){De=0,Bp();var e=fa,t=yl,a=Jt,l=rd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?De=5:(De=0,yl=fa=null,bd(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(pa=null),Wn(a),t=t.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Rl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=v.T,i=T.p,T.p=2,v.T=null;try{for(var n=e.onRecoverableError,c=0;c<l.length;c++){var r=l[c];n(r.value,{componentStack:r.stack})}}finally{v.T=t,T.p=i}}(Jt&3)!==0&&An(),Rt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Lr?oi++:(oi=0,Lr=e):oi=0,di(0)}}function bd(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Xl(t)))}function An(){return yd(),Sd(),Cd(),Ad()}function Ad(){if(De!==5)return!1;var e=fa,t=Mr;Mr=0;var a=Wn(Jt),l=v.T,i=T.p;try{T.p=32>a?32:a,v.T=null,a=Rr,Rr=null;var n=fa,c=Jt;if(De=0,yl=fa=null,Jt=0,(le&6)!==0)throw Error(p(331));var r=le;if(le|=4,id(n.current),td(n,n.current,c,a),le=r,di(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Rl,n)}catch{}return!0}finally{T.p=i,v.T=l,bd(e,t)}}function Ed(e,t,a){t=dt(a,t),t=sr(e.stateNode,t,2),e=ca(e,t,2),e!==null&&(Ul(e,2),Rt(e))}function ce(e,t,a){if(e.tag===3)Ed(e,e,a);else for(;t!==null;){if(t.tag===3){Ed(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(pa===null||!pa.has(l))){e=dt(a,e),a=To(2),l=ca(t,a,2),l!==null&&(Do(a,l,t,e),Ul(l,2),Rt(l));break}}t=t.return}}function Br(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new c_;var i=new Set;l.set(t,i)}else i=l.get(t),i===void 0&&(i=new Set,l.set(t,i));i.has(a)||(Tr=!0,i.add(a),e=d_.bind(null,e,t,a),t.then(e,e))}function d_(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,pe===e&&(W&a)===a&&(me===4||me===3&&(W&62914560)===W&&300>Fe()-mn?(le&2)===0&&Sl(e,0):Dr|=a,vl===W&&(vl=0)),Rt(e)}function Td(e,t){t===0&&(t=vs()),e=Ra(e,t),e!==null&&(Ul(e,t),Rt(e))}function p_(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Td(e,a)}function f_(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(p(314))}l!==null&&l.delete(t),Td(e,a)}function __(e,t){return Vn(e,t)}var En=null,bl=null,wr=!1,Tn=!1,zr=!1,ga=0;function Rt(e){e!==bl&&e.next===null&&(bl===null?En=bl=e:bl=bl.next=e),Tn=!0,wr||(wr=!0,h_())}function di(e,t){if(!zr&&Tn){zr=!0;do for(var a=!1,l=En;l!==null;){if(e!==0){var i=l.pendingLanes;if(i===0)var n=0;else{var c=l.suspendedLanes,r=l.pingedLanes;n=(1<<31-Pe(42|e)+1)-1,n&=i&~(c&~r),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(a=!0,Rd(l,n))}else n=W,n=Mi(l,l===pe?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(n&3)===0||Ll(l,n)||(a=!0,Rd(l,n));l=l.next}while(a);zr=!1}}function g_(){Dd()}function Dd(){Tn=wr=!1;var e=0;ga!==0&&D_()&&(e=ga);for(var t=Fe(),a=null,l=En;l!==null;){var i=l.next,n=xd(l,t);n===0?(l.next=null,a===null?En=i:a.next=i,i===null&&(bl=a)):(a=l,(e!==0||(n&3)!==0)&&(Tn=!0)),l=i}De!==0&&De!==5||di(e),ga!==0&&(ga=0)}function xd(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,i=e.expirationTimes,n=e.pendingLanes&-62914561;0<n;){var c=31-Pe(n),r=1<<c,s=i[c];s===-1?((r&a)===0||(r&l)!==0)&&(i[c]=Gp(r,t)):s<=t&&(e.expiredLanes|=r),n&=~r}if(t=pe,a=W,a=Mi(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(ne===2||ne===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Zn(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ll(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Zn(l),Wn(a)){case 2:case 8:a=hs;break;case 32:a=Ei;break;case 268435456:a=ms;break;default:a=Ei}return l=Md.bind(null,e),a=Vn(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Zn(l),e.callbackPriority=2,e.callbackNode=null,2}function Md(e,t){if(De!==0&&De!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(An()&&e.callbackNode!==a)return null;var l=W;return l=Mi(e,e===pe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(ud(e,l,t),xd(e,Fe()),e.callbackNode!=null&&e.callbackNode===a?Md.bind(null,e):null)}function Rd(e,t){if(An())return null;ud(e,t,!0)}function h_(){M_(function(){(le&6)!==0?Vn(gs,g_):Dd()})}function Nr(){if(ga===0){var e=rl;e===0&&(e=Ti,Ti<<=1,(Ti&261888)===0&&(Ti=256)),ga=e}return ga}function Ld(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Oi(""+e)}function Ud(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function m_(e,t,a,l,i){if(t==="submit"&&a&&a.stateNode===i){var n=Ld((i[Ye]||null).action),c=l.submitter;c&&(t=(t=c[Ye]||null)?Ld(t.formAction):c.getAttribute("formAction"),t!==null&&(n=t,c=null));var r=new Ni("action","action",null,l,i);e.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ga!==0){var s=c?Ud(i,c):new FormData(i);ar(a,{pending:!0,data:s,method:i.method,action:n},null,s)}}else typeof n=="function"&&(r.preventDefault(),s=c?Ud(i,c):new FormData(i),ar(a,{pending:!0,data:s,method:i.method,action:n},n,s))},currentTarget:i}]})}}for(var Hr=0;Hr<yc.length;Hr++){var Ir=yc[Hr],v_=Ir.toLowerCase(),y_=Ir[0].toUpperCase()+Ir.slice(1);yt(v_,"on"+y_)}yt(ru,"onAnimationEnd"),yt(su,"onAnimationIteration"),yt(uu,"onAnimationStart"),yt("dblclick","onDoubleClick"),yt("focusin","onFocus"),yt("focusout","onBlur"),yt(zf,"onTransitionRun"),yt(Nf,"onTransitionStart"),yt(Hf,"onTransitionCancel"),yt(ou,"onTransitionEnd"),Za("onMouseEnter",["mouseout","mouseover"]),Za("onMouseLeave",["mouseout","mouseover"]),Za("onPointerEnter",["pointerout","pointerover"]),Za("onPointerLeave",["pointerout","pointerover"]),Ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),S_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pi));function Od(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],i=l.event;l=l.listeners;e:{var n=void 0;if(t)for(var c=l.length-1;0<=c;c--){var r=l[c],s=r.instance,_=r.currentTarget;if(r=r.listener,s!==n&&i.isPropagationStopped())break e;n=r,i.currentTarget=_;try{n(i)}catch(m){ji(m)}i.currentTarget=null,n=s}else for(c=0;c<l.length;c++){if(r=l[c],s=r.instance,_=r.currentTarget,r=r.listener,s!==n&&i.isPropagationStopped())break e;n=r,i.currentTarget=_;try{n(i)}catch(m){ji(m)}i.currentTarget=null,n=s}}}}function K(e,t){var a=t[Fn];a===void 0&&(a=t[Fn]=new Set);var l=e+"__bubble";a.has(l)||(Bd(t,e,2,!1),a.add(l))}function jr(e,t,a){var l=0;t&&(l|=4),Bd(a,e,l,t)}var Dn="_reactListening"+Math.random().toString(36).slice(2);function qr(e){if(!e[Dn]){e[Dn]=!0,Ts.forEach(function(a){a!=="selectionchange"&&(S_.has(a)||jr(a,!1,e),jr(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Dn]||(t[Dn]=!0,jr("selectionchange",!1,t))}}function Bd(e,t,a,l){switch(sp(t)){case 2:var i=J_;break;case 8:i=K_;break;default:i=ts}a=i.bind(null,t,a,e),i=void 0,!cc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),l?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Gr(e,t,a,l,i){var n=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var r=l.stateNode.containerInfo;if(r===i)break;if(c===4)for(c=l.return;c!==null;){var s=c.tag;if((s===3||s===4)&&c.stateNode.containerInfo===i)return;c=c.return}for(;r!==null;){if(c=ka(r),c===null)return;if(s=c.tag,s===5||s===6||s===26||s===27){l=n=c;continue e}r=r.parentNode}}l=l.return}Hs(function(){var _=n,m=ic(a),S=[];e:{var g=du.get(e);if(g!==void 0){var h=Ni,R=e;switch(e){case"keypress":if(wi(a)===0)break e;case"keydown":case"keyup":h=ff;break;case"focusin":R="focus",h=oc;break;case"focusout":R="blur",h=oc;break;case"beforeblur":case"afterblur":h=oc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=qs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=ef;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=hf;break;case ru:case su:case uu:h=lf;break;case ou:h=vf;break;case"scroll":case"scrollend":h=$p;break;case"wheel":h=Sf;break;case"copy":case"cut":case"paste":h=cf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Qs;break;case"toggle":case"beforetoggle":h=bf}var I=(t&4)!==0,oe=!I&&(e==="scroll"||e==="scrollend"),d=I?g!==null?g+"Capture":null:g;I=[];for(var u=_,f;u!==null;){var y=u;if(f=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||f===null||d===null||(y=wl(u,d),y!=null&&I.push(fi(u,y,f))),oe)break;u=u.return}0<I.length&&(g=new h(g,R,null,a,m),S.push({event:g,listeners:I}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",g&&a!==lc&&(R=a.relatedTarget||a.fromElement)&&(ka(R)||R[Ya]))break e;if((h||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,h?(R=a.relatedTarget||a.toElement,h=_,R=R?ka(R):null,R!==null&&(oe=N(R),I=R.tag,R!==oe||I!==5&&I!==27&&I!==6)&&(R=null)):(h=null,R=_),h!==R)){if(I=qs,y="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(I=Qs,y="onPointerLeave",d="onPointerEnter",u="pointer"),oe=h==null?g:Bl(h),f=R==null?g:Bl(R),g=new I(y,u+"leave",h,a,m),g.target=oe,g.relatedTarget=f,y=null,ka(m)===_&&(I=new I(d,u+"enter",R,a,m),I.target=f,I.relatedTarget=oe,y=I),oe=y,h&&R)t:{for(I=C_,d=h,u=R,f=0,y=d;y;y=I(y))f++;y=0;for(var B=u;B;B=I(B))y++;for(;0<f-y;)d=I(d),f--;for(;0<y-f;)u=I(u),y--;for(;f--;){if(d===u||u!==null&&d===u.alternate){I=d;break t}d=I(d),u=I(u)}I=null}else I=null;h!==null&&wd(S,g,h,I,!1),R!==null&&oe!==null&&wd(S,oe,R,I,!0)}}e:{if(g=_?Bl(_):window,h=g.nodeName&&g.nodeName.toLowerCase(),h==="select"||h==="input"&&g.type==="file")var te=Ws;else if(Js(g))if(Fs)te=Of;else{te=Lf;var U=Rf}else h=g.nodeName,!h||h.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?_&&ac(_.elementType)&&(te=Ws):te=Uf;if(te&&(te=te(e,_))){Ks(S,te,a,m);break e}U&&U(e,g,_),e==="focusout"&&_&&g.type==="number"&&_.memoizedProps.value!=null&&tc(g,"number",g.value)}switch(U=_?Bl(_):window,e){case"focusin":(Js(U)||U.contentEditable==="true")&&(Pa=U,hc=_,Ql=null);break;case"focusout":Ql=hc=Pa=null;break;case"mousedown":mc=!0;break;case"contextmenu":case"mouseup":case"dragend":mc=!1,nu(S,a,m);break;case"selectionchange":if(wf)break;case"keydown":case"keyup":nu(S,a,m)}var V;if(pc)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else $a?Vs(e,a)&&(F="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(F="onCompositionStart");F&&(Ys&&a.locale!=="ko"&&($a||F!=="onCompositionStart"?F==="onCompositionEnd"&&$a&&(V=Is()):(Pt=m,rc="value"in Pt?Pt.value:Pt.textContent,$a=!0)),U=xn(_,F),0<U.length&&(F=new Gs(F,e,null,a,m),S.push({event:F,listeners:U}),V?F.data=V:(V=Zs(a),V!==null&&(F.data=V)))),(V=Ef?Tf(e,a):Df(e,a))&&(F=xn(_,"onBeforeInput"),0<F.length&&(U=new Gs("onBeforeInput","beforeinput",null,a,m),S.push({event:U,listeners:F}),U.data=V)),m_(S,e,_,a,m)}Od(S,t)})}function fi(e,t,a){return{instance:e,listener:t,currentTarget:a}}function xn(e,t){for(var a=t+"Capture",l=[];e!==null;){var i=e,n=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||n===null||(i=wl(e,a),i!=null&&l.unshift(fi(e,i,n)),i=wl(e,t),i!=null&&l.push(fi(e,i,n))),e.tag===3)return l;e=e.return}return[]}function C_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function wd(e,t,a,l,i){for(var n=t._reactName,c=[];a!==null&&a!==l;){var r=a,s=r.alternate,_=r.stateNode;if(r=r.tag,s!==null&&s===l)break;r!==5&&r!==26&&r!==27||_===null||(s=_,i?(_=wl(a,n),_!=null&&c.unshift(fi(a,_,s))):i||(_=wl(a,n),_!=null&&c.push(fi(a,_,s)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var b_=/\r\n?/g,A_=/\u0000|\uFFFD/g;function zd(e){return(typeof e=="string"?e:""+e).replace(b_,`
`).replace(A_,"")}function Nd(e,t){return t=zd(t),zd(e)===t}function ue(e,t,a,l,i,n){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ka(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ka(e,""+l);break;case"className":Li(e,"class",l);break;case"tabIndex":Li(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Li(e,a,l);break;case"style":zs(e,l,n);break;case"data":if(t!=="object"){Li(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Oi(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(a==="formAction"?(t!=="input"&&ue(e,t,"name",i.name,i,null),ue(e,t,"formEncType",i.formEncType,i,null),ue(e,t,"formMethod",i.formMethod,i,null),ue(e,t,"formTarget",i.formTarget,i,null)):(ue(e,t,"encType",i.encType,i,null),ue(e,t,"method",i.method,i,null),ue(e,t,"target",i.target,i,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Oi(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Bt);break;case"onScroll":l!=null&&K("scroll",e);break;case"onScrollEnd":l!=null&&K("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(p(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(p(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Oi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":K("beforetoggle",e),K("toggle",e),Ri(e,"popover",l);break;case"xlinkActuate":Ot(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ot(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ot(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ot(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ot(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ot(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ot(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ri(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wp.get(a)||a,Ri(e,a,l))}}function Qr(e,t,a,l,i,n){switch(a){case"style":zs(e,l,n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(p(61));if(a=l.__html,a!=null){if(i.children!=null)throw Error(p(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Ka(e,l):(typeof l=="number"||typeof l=="bigint")&&Ka(e,""+l);break;case"onScroll":l!=null&&K("scroll",e);break;case"onScrollEnd":l!=null&&K("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Bt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ds.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),n=e[Ye]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(t,n,i),typeof l=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,i);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Ri(e,a,l)}}}function ze(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":K("error",e),K("load",e);var l=!1,i=!1,n;for(n in a)if(a.hasOwnProperty(n)){var c=a[n];if(c!=null)switch(n){case"src":l=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:ue(e,t,n,c,a,null)}}i&&ue(e,t,"srcSet",a.srcSet,a,null),l&&ue(e,t,"src",a.src,a,null);return;case"input":K("invalid",e);var r=n=c=i=null,s=null,_=null;for(l in a)if(a.hasOwnProperty(l)){var m=a[l];if(m!=null)switch(l){case"name":i=m;break;case"type":c=m;break;case"checked":s=m;break;case"defaultChecked":_=m;break;case"value":n=m;break;case"defaultValue":r=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(p(137,t));break;default:ue(e,t,l,m,a,null)}}Us(e,n,r,s,_,c,i,!1);return;case"select":K("invalid",e),l=c=n=null;for(i in a)if(a.hasOwnProperty(i)&&(r=a[i],r!=null))switch(i){case"value":n=r;break;case"defaultValue":c=r;break;case"multiple":l=r;default:ue(e,t,i,r,a,null)}t=n,a=c,e.multiple=!!l,t!=null?Ja(e,!!l,t,!1):a!=null&&Ja(e,!!l,a,!0);return;case"textarea":K("invalid",e),n=i=l=null;for(c in a)if(a.hasOwnProperty(c)&&(r=a[c],r!=null))switch(c){case"value":l=r;break;case"defaultValue":i=r;break;case"children":n=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(p(91));break;default:ue(e,t,c,r,a,null)}Bs(e,l,i,n);return;case"option":for(s in a)if(a.hasOwnProperty(s)&&(l=a[s],l!=null))switch(s){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ue(e,t,s,l,a,null)}return;case"dialog":K("beforetoggle",e),K("toggle",e),K("cancel",e),K("close",e);break;case"iframe":case"object":K("load",e);break;case"video":case"audio":for(l=0;l<pi.length;l++)K(pi[l],e);break;case"image":K("error",e),K("load",e);break;case"details":K("toggle",e);break;case"embed":case"source":case"link":K("error",e),K("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in a)if(a.hasOwnProperty(_)&&(l=a[_],l!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(p(137,t));default:ue(e,t,_,l,a,null)}return;default:if(ac(t)){for(m in a)a.hasOwnProperty(m)&&(l=a[m],l!==void 0&&Qr(e,t,m,l,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null&&ue(e,t,r,l,a,null))}function E_(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,n=null,c=null,r=null,s=null,_=null,m=null;for(h in a){var S=a[h];if(a.hasOwnProperty(h)&&S!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":s=S;default:l.hasOwnProperty(h)||ue(e,t,h,null,l,S)}}for(var g in l){var h=l[g];if(S=a[g],l.hasOwnProperty(g)&&(h!=null||S!=null))switch(g){case"type":n=h;break;case"name":i=h;break;case"checked":_=h;break;case"defaultChecked":m=h;break;case"value":c=h;break;case"defaultValue":r=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(p(137,t));break;default:h!==S&&ue(e,t,g,h,l,S)}}ec(e,c,r,s,_,m,n,i);return;case"select":h=c=r=g=null;for(n in a)if(s=a[n],a.hasOwnProperty(n)&&s!=null)switch(n){case"value":break;case"multiple":h=s;default:l.hasOwnProperty(n)||ue(e,t,n,null,l,s)}for(i in l)if(n=l[i],s=a[i],l.hasOwnProperty(i)&&(n!=null||s!=null))switch(i){case"value":g=n;break;case"defaultValue":r=n;break;case"multiple":c=n;default:n!==s&&ue(e,t,i,n,l,s)}t=r,a=c,l=h,g!=null?Ja(e,!!a,g,!1):!!l!=!!a&&(t!=null?Ja(e,!!a,t,!0):Ja(e,!!a,a?[]:"",!1));return;case"textarea":h=g=null;for(r in a)if(i=a[r],a.hasOwnProperty(r)&&i!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:ue(e,t,r,null,l,i)}for(c in l)if(i=l[c],n=a[c],l.hasOwnProperty(c)&&(i!=null||n!=null))switch(c){case"value":g=i;break;case"defaultValue":h=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(p(91));break;default:i!==n&&ue(e,t,c,i,l,n)}Os(e,g,h);return;case"option":for(var R in a)if(g=a[R],a.hasOwnProperty(R)&&g!=null&&!l.hasOwnProperty(R))switch(R){case"selected":e.selected=!1;break;default:ue(e,t,R,null,l,g)}for(s in l)if(g=l[s],h=a[s],l.hasOwnProperty(s)&&g!==h&&(g!=null||h!=null))switch(s){case"selected":e.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:ue(e,t,s,g,l,h)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in a)g=a[I],a.hasOwnProperty(I)&&g!=null&&!l.hasOwnProperty(I)&&ue(e,t,I,null,l,g);for(_ in l)if(g=l[_],h=a[_],l.hasOwnProperty(_)&&g!==h&&(g!=null||h!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(p(137,t));break;default:ue(e,t,_,g,l,h)}return;default:if(ac(t)){for(var oe in a)g=a[oe],a.hasOwnProperty(oe)&&g!==void 0&&!l.hasOwnProperty(oe)&&Qr(e,t,oe,void 0,l,g);for(m in l)g=l[m],h=a[m],!l.hasOwnProperty(m)||g===h||g===void 0&&h===void 0||Qr(e,t,m,g,l,h);return}}for(var d in a)g=a[d],a.hasOwnProperty(d)&&g!=null&&!l.hasOwnProperty(d)&&ue(e,t,d,null,l,g);for(S in l)g=l[S],h=a[S],!l.hasOwnProperty(S)||g===h||g==null&&h==null||ue(e,t,S,g,l,h)}function Hd(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function T_(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var i=a[l],n=i.transferSize,c=i.initiatorType,r=i.duration;if(n&&r&&Hd(c)){for(c=0,r=i.responseEnd,l+=1;l<a.length;l++){var s=a[l],_=s.startTime;if(_>r)break;var m=s.transferSize,S=s.initiatorType;m&&Hd(S)&&(s=s.responseEnd,c+=m*(s<r?1:(r-_)/(s-_)))}if(--l,t+=8*(n+c)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Yr=null,kr=null;function Mn(e){return e.nodeType===9?e:e.ownerDocument}function Id(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Xr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Vr=null;function D_(){var e=window.event;return e&&e.type==="popstate"?e===Vr?!1:(Vr=e,!0):(Vr=null,!1)}var qd=typeof setTimeout=="function"?setTimeout:void 0,x_=typeof clearTimeout=="function"?clearTimeout:void 0,Gd=typeof Promise=="function"?Promise:void 0,M_=typeof queueMicrotask=="function"?queueMicrotask:typeof Gd<"u"?function(e){return Gd.resolve(null).then(e).catch(R_)}:qd;function R_(e){setTimeout(function(){throw e})}function ha(e){return e==="head"}function Qd(e,t){var a=t,l=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(i),Dl(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")_i(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,_i(a);for(var n=a.firstChild;n;){var c=n.nextSibling,r=n.nodeName;n[Ol]||r==="SCRIPT"||r==="STYLE"||r==="LINK"&&n.rel.toLowerCase()==="stylesheet"||a.removeChild(n),n=c}}else a==="body"&&_i(e.ownerDocument.body);a=i}while(a);Dl(t)}function Yd(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Zr(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zr(a),$n(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function L_(e,t,a,l){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ol])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(n=e.getAttribute("rel"),n==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(n!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(n=e.getAttribute("src"),(n!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&n&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var n=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===n)return e}else return e;if(e=ht(e.nextSibling),e===null)break}return null}function U_(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ht(e.nextSibling),e===null))return null;return e}function kd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ht(e.nextSibling),e===null))return null;return e}function Jr(e){return e.data==="$?"||e.data==="$~"}function Kr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function O_(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Wr=null;function Xd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ht(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Vd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Zd(e,t,a){switch(t=Mn(a),e){case"html":if(e=t.documentElement,!e)throw Error(p(452));return e;case"head":if(e=t.head,!e)throw Error(p(453));return e;case"body":if(e=t.body,!e)throw Error(p(454));return e;default:throw Error(p(451))}}function _i(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$n(e)}var mt=new Map,Jd=new Set;function Rn(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kt=T.d;T.d={f:B_,r:w_,D:z_,C:N_,L:H_,m:I_,X:q_,S:j_,M:G_};function B_(){var e=Kt.f(),t=Sn();return e||t}function w_(e){var t=Xa(e);t!==null&&t.tag===5&&t.type==="form"?oo(t):Kt.r(e)}var Al=typeof document>"u"?null:document;function Kd(e,t,a){var l=Al;if(l&&typeof t=="string"&&t){var i=ut(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Jd.has(i)||(Jd.add(i),e={rel:e,crossOrigin:a,href:t},l.querySelector(i)===null&&(t=l.createElement("link"),ze(t,"link",e),xe(t),l.head.appendChild(t)))}}function z_(e){Kt.D(e),Kd("dns-prefetch",e,null)}function N_(e,t){Kt.C(e,t),Kd("preconnect",e,t)}function H_(e,t,a){Kt.L(e,t,a);var l=Al;if(l&&e&&t){var i='link[rel="preload"][as="'+ut(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+ut(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+ut(a.imageSizes)+'"]')):i+='[href="'+ut(e)+'"]';var n=i;switch(t){case"style":n=El(e);break;case"script":n=Tl(e)}mt.has(n)||(e=M({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),mt.set(n,e),l.querySelector(i)!==null||t==="style"&&l.querySelector(gi(n))||t==="script"&&l.querySelector(hi(n))||(t=l.createElement("link"),ze(t,"link",e),xe(t),l.head.appendChild(t)))}}function I_(e,t){Kt.m(e,t);var a=Al;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+ut(l)+'"][href="'+ut(e)+'"]',n=i;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=Tl(e)}if(!mt.has(n)&&(e=M({rel:"modulepreload",href:e},t),mt.set(n,e),a.querySelector(i)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hi(n)))return}l=a.createElement("link"),ze(l,"link",e),xe(l),a.head.appendChild(l)}}}function j_(e,t,a){Kt.S(e,t,a);var l=Al;if(l&&e){var i=Va(l).hoistableStyles,n=El(e);t=t||"default";var c=i.get(n);if(!c){var r={loading:0,preload:null};if(c=l.querySelector(gi(n)))r.loading=5;else{e=M({rel:"stylesheet",href:e,"data-precedence":t},a),(a=mt.get(n))&&Fr(e,a);var s=c=l.createElement("link");xe(s),ze(s,"link",e),s._p=new Promise(function(_,m){s.onload=_,s.onerror=m}),s.addEventListener("load",function(){r.loading|=1}),s.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Ln(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:r},i.set(n,c)}}}function q_(e,t){Kt.X(e,t);var a=Al;if(a&&e){var l=Va(a).hoistableScripts,i=Tl(e),n=l.get(i);n||(n=a.querySelector(hi(i)),n||(e=M({src:e,async:!0},t),(t=mt.get(i))&&$r(e,t),n=a.createElement("script"),xe(n),ze(n,"link",e),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function G_(e,t){Kt.M(e,t);var a=Al;if(a&&e){var l=Va(a).hoistableScripts,i=Tl(e),n=l.get(i);n||(n=a.querySelector(hi(i)),n||(e=M({src:e,async:!0,type:"module"},t),(t=mt.get(i))&&$r(e,t),n=a.createElement("script"),xe(n),ze(n,"link",e),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(i,n))}}function Wd(e,t,a,l){var i=(i=Z.current)?Rn(i):null;if(!i)throw Error(p(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=El(a.href),a=Va(i).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=El(a.href);var n=Va(i).hoistableStyles,c=n.get(e);if(c||(i=i.ownerDocument||i,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(e,c),(n=i.querySelector(gi(e)))&&!n._p&&(c.instance=n,c.state.loading=5),mt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},mt.set(e,a),n||Q_(i,e,a,c.state))),t&&l===null)throw Error(p(528,""));return c}if(t&&l!==null)throw Error(p(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Tl(a),a=Va(i).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(p(444,e))}}function El(e){return'href="'+ut(e)+'"'}function gi(e){return'link[rel="stylesheet"]['+e+"]"}function Fd(e){return M({},e,{"data-precedence":e.precedence,precedence:null})}function Q_(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),ze(t,"link",a),xe(t),e.head.appendChild(t))}function Tl(e){return'[src="'+ut(e)+'"]'}function hi(e){return"script[async]"+e}function $d(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+ut(a.href)+'"]');if(l)return t.instance=l,xe(l),l;var i=M({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),xe(l),ze(l,"style",i),Ln(l,a.precedence,e),t.instance=l;case"stylesheet":i=El(a.href);var n=e.querySelector(gi(i));if(n)return t.state.loading|=4,t.instance=n,xe(n),n;l=Fd(a),(i=mt.get(i))&&Fr(l,i),n=(e.ownerDocument||e).createElement("link"),xe(n);var c=n;return c._p=new Promise(function(r,s){c.onload=r,c.onerror=s}),ze(n,"link",l),t.state.loading|=4,Ln(n,a.precedence,e),t.instance=n;case"script":return n=Tl(a.src),(i=e.querySelector(hi(n)))?(t.instance=i,xe(i),i):(l=a,(i=mt.get(n))&&(l=M({},a),$r(l,i)),e=e.ownerDocument||e,i=e.createElement("script"),xe(i),ze(i,"link",l),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(p(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Ln(l,a.precedence,e));return t.instance}function Ln(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=l.length?l[l.length-1]:null,n=i,c=0;c<l.length;c++){var r=l[c];if(r.dataset.precedence===t)n=r;else if(n!==i)break}n?n.parentNode.insertBefore(e,n.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Fr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $r(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Un=null;function Pd(e,t,a){if(Un===null){var l=new Map,i=Un=new Map;i.set(a,l)}else i=Un,l=i.get(a),l||(l=new Map,i.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var n=a[i];if(!(n[Ol]||n[Ue]||e==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var c=n.getAttribute(t)||"";c=e+c;var r=l.get(c);r?r.push(n):l.set(c,[n])}}return l}function ep(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Y_(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function tp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function k_(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=El(l.href),n=t.querySelector(gi(i));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=On.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=n,xe(n);return}n=t.ownerDocument||t,l=Fd(l),(i=mt.get(i))&&Fr(l,i),n=n.createElement("link"),xe(n);var c=n;c._p=new Promise(function(r,s){c.onload=r,c.onerror=s}),ze(n,"link",l),a.instance=n}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=On.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Pr=0;function X_(e,t){return e.stylesheets&&e.count===0&&wn(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&wn(e,e.stylesheets),e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}},6e4+t);0<e.imgBytes&&Pr===0&&(Pr=62500*T_());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&wn(e,e.stylesheets),e.unsuspend)){var n=e.unsuspend;e.unsuspend=null,n()}},(e.imgBytes>Pr?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(i)}}:null}function On(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)wn(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bn=null;function wn(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bn=new Map,t.forEach(V_,e),Bn=null,On.call(e))}function V_(e,t){if(!(t.state.loading&4)){var a=Bn.get(e);if(a)var l=a.get(null);else{a=new Map,Bn.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<i.length;n++){var c=i[n];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}i=t.instance,c=i.getAttribute("data-precedence"),n=a.get(c)||l,n===l&&a.set(null,i),a.set(c,i),this.count++,l=On.bind(this),i.addEventListener("load",l),i.addEventListener("error",l),n?n.parentNode.insertBefore(i,n.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var mi={$$typeof:Ne,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function Z_(e,t,a,l,i,n,c,r,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Jn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Jn(0),this.hiddenUpdates=Jn(null),this.identifierPrefix=l,this.onUncaughtError=i,this.onCaughtError=n,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function ap(e,t,a,l,i,n,c,r,s,_,m,S){return e=new Z_(e,t,a,c,s,_,m,S,r),t=1,n===!0&&(t|=24),n=tt(3,null,null,t),e.current=n,n.stateNode=e,t=Oc(),t.refCount++,e.pooledCache=t,t.refCount++,n.memoizedState={element:l,isDehydrated:a,cache:t},Nc(n),e}function lp(e){return e?(e=al,e):al}function ip(e,t,a,l,i,n){i=lp(i),l.context===null?l.context=i:l.pendingContext=i,l=na(t),l.payload={element:a},n=n===void 0?null:n,n!==null&&(l.callback=n),a=ca(e,l,t),a!==null&&(Ke(a,e,t),Kl(a,e,t))}function np(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function es(e,t){np(e,t),(e=e.alternate)&&np(e,t)}function cp(e){if(e.tag===13||e.tag===31){var t=Ra(e,67108864);t!==null&&Ke(t,e,67108864),es(e,67108864)}}function rp(e){if(e.tag===13||e.tag===31){var t=ct();t=Kn(t);var a=Ra(e,t);a!==null&&Ke(a,e,t),es(e,t)}}var zn=!0;function J_(e,t,a,l){var i=v.T;v.T=null;var n=T.p;try{T.p=2,ts(e,t,a,l)}finally{T.p=n,v.T=i}}function K_(e,t,a,l){var i=v.T;v.T=null;var n=T.p;try{T.p=8,ts(e,t,a,l)}finally{T.p=n,v.T=i}}function ts(e,t,a,l){if(zn){var i=as(l);if(i===null)Gr(e,t,l,Nn,a),up(e,l);else if(F_(i,e,t,a,l))l.stopPropagation();else if(up(e,l),t&4&&-1<W_.indexOf(e)){for(;i!==null;){var n=Xa(i);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var c=Ea(n.pendingLanes);if(c!==0){var r=n;for(r.pendingLanes|=2,r.entangledLanes|=2;c;){var s=1<<31-Pe(c);r.entanglements[1]|=s,c&=~s}Rt(n),(le&6)===0&&(vn=Fe()+500,di(0))}}break;case 31:case 13:r=Ra(n,2),r!==null&&Ke(r,n,2),Sn(),es(n,2)}if(n=as(l),n===null&&Gr(e,t,l,Nn,a),n===i)break;i=n}i!==null&&l.stopPropagation()}else Gr(e,t,l,null,a)}}function as(e){return e=ic(e),ls(e)}var Nn=null;function ls(e){if(Nn=null,e=ka(e),e!==null){var t=N(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=G(t),e!==null)return e;e=null}else if(a===31){if(e=H(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Nn=e,null}function sp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wp()){case gs:return 2;case hs:return 8;case Ei:case zp:return 32;case ms:return 268435456;default:return 32}default:return 32}}var is=!1,ma=null,va=null,ya=null,vi=new Map,yi=new Map,Sa=[],W_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function up(e,t){switch(e){case"focusin":case"focusout":ma=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":vi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(t.pointerId)}}function Si(e,t,a,l,i,n){return e===null||e.nativeEvent!==n?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:n,targetContainers:[i]},t!==null&&(t=Xa(t),t!==null&&cp(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function F_(e,t,a,l,i){switch(t){case"focusin":return ma=Si(ma,e,t,a,l,i),!0;case"dragenter":return va=Si(va,e,t,a,l,i),!0;case"mouseover":return ya=Si(ya,e,t,a,l,i),!0;case"pointerover":var n=i.pointerId;return vi.set(n,Si(vi.get(n)||null,e,t,a,l,i)),!0;case"gotpointercapture":return n=i.pointerId,yi.set(n,Si(yi.get(n)||null,e,t,a,l,i)),!0}return!1}function op(e){var t=ka(e.target);if(t!==null){var a=N(t);if(a!==null){if(t=a.tag,t===13){if(t=G(a),t!==null){e.blockedOn=t,As(e.priority,function(){rp(a)});return}}else if(t===31){if(t=H(a),t!==null){e.blockedOn=t,As(e.priority,function(){rp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=as(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);lc=l,a.target.dispatchEvent(l),lc=null}else return t=Xa(a),t!==null&&cp(t),e.blockedOn=a,!1;t.shift()}return!0}function dp(e,t,a){Hn(e)&&a.delete(t)}function $_(){is=!1,ma!==null&&Hn(ma)&&(ma=null),va!==null&&Hn(va)&&(va=null),ya!==null&&Hn(ya)&&(ya=null),vi.forEach(dp),yi.forEach(dp)}function In(e,t){e.blockedOn===t&&(e.blockedOn=null,is||(is=!0,A.unstable_scheduleCallback(A.unstable_NormalPriority,$_)))}var jn=null;function pp(e){jn!==e&&(jn=e,A.unstable_scheduleCallback(A.unstable_NormalPriority,function(){jn===e&&(jn=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],i=e[t+2];if(typeof l!="function"){if(ls(l||a)===null)continue;break}var n=Xa(a);n!==null&&(e.splice(t,3),t-=3,ar(n,{pending:!0,data:i,method:a.method,action:l},l,i))}}))}function Dl(e){function t(s){return In(s,e)}ma!==null&&In(ma,e),va!==null&&In(va,e),ya!==null&&In(ya,e),vi.forEach(t),yi.forEach(t);for(var a=0;a<Sa.length;a++){var l=Sa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Sa.length&&(a=Sa[0],a.blockedOn===null);)op(a),a.blockedOn===null&&Sa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var i=a[l],n=a[l+1],c=i[Ye]||null;if(typeof n=="function")c||pp(a);else if(c){var r=null;if(n&&n.hasAttribute("formAction")){if(i=n,c=n[Ye]||null)r=c.formAction;else if(ls(i)!==null)continue}else r=c.action;typeof r=="function"?a[l+1]=r:(a.splice(l,3),l-=3),pp(a)}}}function fp(){function e(n){n.canIntercept&&n.info==="react-transition"&&n.intercept({handler:function(){return new Promise(function(c){return i=c})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var n=navigation.currentEntry;n&&n.url!=null&&navigation.navigate(n.url,{state:n.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function ns(e){this._internalRoot=e}qn.prototype.render=ns.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(p(409));var a=t.current,l=ct();ip(a,l,e,t,null,null)},qn.prototype.unmount=ns.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ip(e.current,2,null,e,null,null),Sn(),t[Ya]=null}};function qn(e){this._internalRoot=e}qn.prototype.unstable_scheduleHydration=function(e){if(e){var t=bs();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Sa.length&&t!==0&&t<Sa[a].priority;a++);Sa.splice(a,0,e),a===0&&op(e)}};var _p=w.version;if(_p!=="19.2.1")throw Error(p(527,_p,"19.2.1"));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(p(188)):(e=Object.keys(e).join(","),Error(p(268,e)));return e=C(t),e=e!==null?Q(e):null,e=e===null?null:e.stateNode,e};var P_={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gn.isDisabled&&Gn.supportsFiber)try{Rl=Gn.inject(P_),$e=Gn}catch{}}return bi.createRoot=function(e,t){if(!O(e))throw Error(p(299));var a=!1,l="",i=Co,n=bo,c=Ao;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(n=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ap(e,1,!1,null,null,a,l,null,i,n,c,fp),e[Ya]=t.current,qr(e),new ns(t)},bi.hydrateRoot=function(e,t,a){if(!O(e))throw Error(p(299));var l=!1,i="",n=Co,c=bo,r=Ao,s=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=ap(e,1,!0,t,a??null,l,i,s,n,c,r,fp),t.context=lp(null),a=t.current,l=ct(),l=Kn(l),i=na(l),i.callback=null,ca(a,i,l),a=l,t.current.lanes=a,Ul(t,a),Rt(t),e[Ya]=t.current,qr(e),new qn(t)},bi.version="19.2.1",bi}var Ep;function og(){if(Ep)return ss.exports;Ep=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(w){console.error(w)}}return A(),ss.exports=ug(),ss.exports}var dg=og();const pg=xp(dg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fg=A=>A.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),_g=A=>A.replace(/^([A-Z])|[\s-_]+(\w)/g,(w,z,p)=>p?p.toUpperCase():z.toLowerCase()),Tp=A=>{const w=_g(A);return w.charAt(0).toUpperCase()+w.slice(1)},Mp=(...A)=>A.filter((w,z,p)=>!!w&&w.trim()!==""&&p.indexOf(w)===z).join(" ").trim(),gg=A=>{for(const w in A)if(w.startsWith("aria-")||w==="role"||w==="title")return!0};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hg={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=bt.forwardRef(({color:A="currentColor",size:w=24,strokeWidth:z=2,absoluteStrokeWidth:p,className:O="",children:N,iconNode:G,...H},x)=>bt.createElement("svg",{ref:x,...hg,width:w,height:w,stroke:A,strokeWidth:p?Number(z)*24/Number(w):z,className:Mp("lucide",O),...!N&&!gg(H)&&{"aria-hidden":"true"},...H},[...G.map(([C,Q])=>bt.createElement(C,Q)),...Array.isArray(N)?N:[N]]));/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=(A,w)=>{const z=bt.forwardRef(({className:p,...O},N)=>bt.createElement(mg,{ref:N,iconNode:w,className:Mp(`lucide-${fg(Tp(A))}`,`lucide-${A}`,p),...O}));return z.displayName=Tp(A),z};/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],yg=Re("arrow-right",vg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Cg=Re("check",Sg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ag=Re("chevron-down",bg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Tg=Re("chevron-right",Eg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],xg=Re("circle-check-big",Dg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Rg=Re("circle-check",Mg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Dp=Re("circle",Lg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Og=Re("copy",Ug);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],wg=Re("cpu",Bg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Ng=Re("external-link",zg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],Ig=Re("file-code",Hg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],qg=Re("menu",jg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Qg=Re("monitor",Gg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],kg=Re("panels-top-left",Yg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Vg=Re("settings",Xg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],Jg=Re("share-2",Zg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Wg=Re("shield",Kg);/**
 * @license lucide-react v0.555.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],$g=Re("x",Fg),Pg=({modules:A,activeLessonId:w,completedLessons:z,onSelectLesson:p,isOpen:O,onCloseMobile:N})=>{const G=H=>{switch(H){case"layout":return E.jsx(kg,{size:18});case"cpu":return E.jsx(wg,{size:18});case"share-2":return E.jsx(Jg,{size:18});case"monitor":return E.jsx(Qg,{size:18});case"shield":return E.jsx(Wg,{size:18});case"settings":return E.jsx(Vg,{size:18});default:return E.jsx(Dp,{size:18})}};return E.jsxs("aside",{className:`
      fixed inset-y-0 left-0 z-40 w-80 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out overflow-y-auto
      ${O?"translate-x-0":"-translate-x-full"}
      lg:translate-x-0 lg:static lg:block
    `,children:[E.jsxs("div",{className:"p-6 border-b border-slate-100 bg-brand-700 text-white",children:[E.jsx("h1",{className:"text-xl font-bold",children:"AwesomeBank Path"}),E.jsx("p",{className:"text-xs text-brand-100 mt-1 uppercase tracking-wider",children:"Project Reference"})]}),E.jsx("div",{className:"p-4 space-y-6",children:A.map(H=>E.jsxs("div",{children:[E.jsxs("div",{className:"flex items-center gap-2 mb-3 text-slate-800 font-bold px-2",children:[E.jsx("span",{className:"text-brand-600",children:G(H.icon)}),E.jsx("h2",{children:H.title})]}),E.jsx("div",{className:"space-y-1",children:H.lessons.map(x=>{const C=w===x.id,Q=z.has(x.id);return E.jsxs("button",{onClick:()=>{p(x.id),window.innerWidth<1024&&N()},className:`
                      w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors text-left
                      ${C?"bg-brand-50 text-brand-700 font-medium":"text-slate-600 hover:bg-slate-50 hover:text-slate-900"}
                    `,children:[E.jsx("div",{className:`${Q?"text-green-500":"text-slate-300"}`,children:Q?E.jsx(Rg,{size:16}):E.jsx(Dp,{size:16})}),E.jsx("span",{className:"flex-1 truncate",children:x.title}),E.jsx("span",{className:"text-xs text-slate-400",children:x.duration})]},x.id)})})]},H.id))})]})},Rp=({snippet:A})=>{const[w,z]=bt.useState(!1),p=()=>{navigator.clipboard.writeText(A.code),z(!0),setTimeout(()=>z(!1),2e3)},O=(N,G)=>{let H=N.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");if(G==="text")return H;const x=[],C=/('(?:\\'|[^'])*'|"(?:\\"|[^"])*"|\/\*[\s\S]*?\*\/|\/\/.*$)/gm;H=H.replace(C,Y=>(x.push(Y),`___TOKEN_${x.length-1}___`));const Q=["public","private","global","protected","static","final","void","class","extends","implements","interface","new","this","super","return","if","else","for","while","do","switch","case","break","continue","try","catch","finally","throw","trigger","on","before","after","insert","update","delete","undelete","with sharing","without sharing","inherited sharing","enum","get","set","null","true","false","List","Map","Set","ID","String","Integer","Decimal","Boolean","Date","Datetime","System","Database","Trigger","Test","Assert","Math","UserInfo","Limits","SELECT","FROM","WHERE","AND","OR","LIMIT","IN","NOT","GROUP BY","ORDER BY"],M=new RegExp(`\\b(${Q.join("|")})\\b`,"g");return H=H.replace(M,'<span class="___KW___">$1</span>'),H=H.replace(/(@\w+)/g,'<span class="___AN___">$1</span>'),H=H.replace(/\b(\d+)\b/g,'<span class="___NU___">$1</span>'),H=H.replace(/___TOKEN_(\d+)___/g,(Y,ee)=>{const ve=x[Number(ee)];return ve.startsWith("//")||ve.startsWith("/*")?`<span class="text-slate-500 italic">${ve}</span>`:`<span class="text-green-400">${ve}</span>`}),H=H.replace(/___KW___/g,"text-pink-400 font-semibold").replace(/___AN___/g,"text-yellow-400").replace(/___NU___/g,"text-purple-300"),H};return E.jsxs("div",{className:"my-6 rounded-lg overflow-hidden border border-slate-700 bg-slate-900 shadow-xl",children:[E.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700",children:[E.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-slate-400",children:[E.jsx(Ig,{size:14}),E.jsx("span",{children:A.filename||A.language.toUpperCase()})]}),E.jsxs("button",{onClick:p,className:"flex items-center gap-1.5 px-2 py-1 text-xs text-slate-400 hover:text-white bg-slate-700/50 hover:bg-slate-700 rounded transition-colors cursor-pointer",children:[w?E.jsx(Cg,{size:14,className:"text-green-400"}):E.jsx(Og,{size:14}),w?"Copied":"Copy"]})]}),E.jsx("div",{className:"p-4 overflow-x-auto",children:E.jsx("pre",{className:"font-mono text-sm leading-relaxed text-slate-200",children:E.jsx("code",{dangerouslySetInnerHTML:{__html:O(A.code,A.language)}})})})]})},eh=({data:A})=>{var p;const[w,z]=bt.useState(!1);return A?E.jsxs("div",{className:"border border-slate-200 rounded-lg mb-6 overflow-hidden",children:[E.jsxs("button",{onClick:()=>z(!w),className:"w-full flex items-center justify-between px-5 py-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left",type:"button",children:[E.jsx("span",{className:"font-semibold text-slate-800",children:A.title}),w?E.jsx(Ag,{size:20,className:"text-slate-500"}):E.jsx(Tg,{size:20,className:"text-slate-500"})]}),w&&E.jsx("div",{className:"p-5 bg-white border-t border-slate-200",children:(p=A.content)==null?void 0:p.map((O,N)=>O.type==="code"&&O.codeSnippet?E.jsx(Rp,{snippet:O.codeSnippet},N):O.type==="text"?E.jsx("p",{className:"mb-4 text-slate-700",children:O.content},N):null)})]}):null},th=({lesson:A,onComplete:w,isCompleted:z,onNext:p,hasNext:O})=>{const N=(G,H)=>{var x,C,Q,M;switch(G.type){case"text":return E.jsx("p",{className:"text-slate-700 leading-7 mb-6 text-lg",children:G.content},H);case"code":return G.codeSnippet?E.jsx(Rp,{snippet:G.codeSnippet},H):null;case"list":return E.jsx("ul",{className:"space-y-3 mb-8",children:(x=G.items)==null?void 0:x.map((Y,ee)=>E.jsxs("li",{className:"flex items-start gap-3",children:[E.jsx("div",{className:"mt-1.5 min-w-[6px] h-[6px] rounded-full bg-brand-500"}),E.jsx("span",{className:"text-slate-700",children:Y})]},ee))},H);case"table":return E.jsx("div",{className:"overflow-x-auto mb-8 border border-slate-200 rounded-lg shadow-sm",children:E.jsxs("table",{className:"w-full text-sm text-left",children:[E.jsx("thead",{className:"text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200",children:E.jsx("tr",{children:(C=G.tableData)==null?void 0:C.headers.map((Y,ee)=>E.jsx("th",{className:"px-6 py-3 font-bold tracking-wider",children:Y},ee))})}),E.jsx("tbody",{children:(Q=G.tableData)==null?void 0:Q.rows.map((Y,ee)=>E.jsx("tr",{className:"bg-white border-b border-slate-100 hover:bg-slate-50 last:border-0",children:Y.map((ve,Le)=>E.jsx("td",{className:"px-6 py-4 text-slate-600",children:ve},Le))},ee))})]})},H);case"diagram":return E.jsx("div",{className:"bg-slate-50 p-6 rounded-lg border-2 border-slate-200 mb-8 font-mono text-sm overflow-x-auto text-slate-700",children:(M=G.diagramLines)==null?void 0:M.map((Y,ee)=>E.jsx("div",{className:"whitespace-pre",children:Y},ee))},H);case"accordion":return G.accordionData?E.jsx(eh,{data:G.accordionData},H):null;default:return null}};return E.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-10 lg:px-12",children:[E.jsxs("div",{className:"mb-8 border-b border-slate-200 pb-6",children:[E.jsx("div",{className:"flex items-center gap-2 text-brand-600 text-sm font-semibold uppercase tracking-wide mb-2",children:E.jsx("span",{children:"Lesson"})}),E.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-slate-900",children:A.title}),E.jsxs("div",{className:"mt-2 flex items-center gap-4 flex-wrap",children:[E.jsxs("p",{className:"text-slate-500",children:["Estimated time: ",A.duration]}),A.salesforceLink&&E.jsxs("a",{href:A.salesforceLink,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700 font-medium text-sm transition-colors",children:[E.jsx("span",{children:"Salesforce Documentation"}),E.jsx(Ng,{size:14})]})]})]}),E.jsx("div",{className:"prose prose-slate max-w-none",children:A.content.map((G,H)=>N(G,H))}),E.jsxs("div",{className:"mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4",children:[E.jsxs("button",{onClick:w,className:`
            flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all w-full sm:w-auto justify-center
            ${z?"bg-green-100 text-green-700 hover:bg-green-200":"bg-white border-2 border-slate-200 text-slate-600 hover:border-brand-500 hover:text-brand-600"}
          `,children:[E.jsx(xg,{size:20,className:z?"fill-current":""}),z?"Completed":"Mark as Complete"]}),O&&E.jsxs("button",{onClick:p,className:"flex items-center gap-2 px-8 py-3 bg-brand-600 text-white rounded-full font-medium hover:bg-brand-700 shadow-lg shadow-brand-200 hover:shadow-xl transition-all w-full sm:w-auto justify-center",children:["Next Lesson",E.jsx(yg,{size:20})]})]})]})},xl=[{id:"module-1",title:"Foundations & Architecture",icon:"layout",lessons:[{id:"overview",title:"Project Overview",duration:"5 min",salesforceLink:"https://trailhead.salesforce.com/en/content/learn/get-started-with-salesforce",content:[{type:"text",content:"The AwesomeBank Credit Cards Division Salesforce Implementation is a greenfield project focused on the end-to-end management of credit card lifecycles."},{type:"text",content:"Key Achievements:"},{type:"list",items:["Complete security architecture with profiles and permission sets","End-to-end data model for credit card lifecycle","Automated workflow for application approval and card creation","Validation rules for data integrity","Tested end-to-end business process flow"]}]},{id:"architecture",title:"Security Architecture",duration:"10 min",salesforceLink:"https://developer.salesforce.com/docs/atlas.en-us.securityImplGuide.meta/securityImplGuide/users_profiles.htm",content:[{type:"text",content:"The security model is built on a strict hierarchy to ensure data privacy and proper access control."},{type:"diagram",diagramLines:["System Administrator (1)","└── IT Security Manager (2)","    └── Credit Cards Division Manager (3)","        ├── Credit Cards Sales Manager (4)","        │   ├── Senior Sales Representative (5)","        │   └── Junior Sales Representative (6)","        ├── Underwriting Manager (7)","        │   ├── Senior Underwriter (8)","        │   └── Underwriter (9)","        └── Customer Service Manager (10)","            ├── Level 2 Support (11)","            └── Level 1 Support (12)"]},{type:"table",tableData:{headers:["Profile Name","Cloned From","Purpose"],rows:[["AwesomeBank Credit Cards Basic User","Standard User","Base profile for division users"],["AwesomeBank Credit Cards Read Only","Read Only User","Auditors, compliance officers"],["AwesomeBank Credit Cards Marketing User","Marketing User","Marketing team members"],["AwesomeBank Credit Cards System Admin","System Administrator","Salesforce administrators"]]}}]},{id:"datamodel",title:"Data Model",duration:"15 min",salesforceLink:"https://developer.salesforce.com/docs/atlas.en-us.object_reference.meta/object_reference",content:[{type:"text",content:"The Core Object Architecture defined as Apex types for reference:"},{type:"accordion",accordionData:{title:"Credit Card Product (Credit_Card_Product__c)",content:[{type:"code",codeSnippet:{language:"apex",code:`public class Credit_Card_Product__c {
    // Fields
    public String Product_Code__c;          // Text(20) [Unique, Required]
    public String Card_Network__c;          // Picklist: Visa, MasterCard, Amex
    public String Card_Type__c;             // Picklist: Personal, Business
    public String Rewards_Program__c;       // Picklist: Cashback, Miles, Points
    public Decimal Annual_Fee__c;           // Currency(16, 2)
    public Decimal Minimum_Credit_Limit__c; // Currency(16, 0)
    public Decimal Maximum_Credit_Limit__c; // Currency(16, 0)
    public Decimal Introductory_APR__c;     // Percent(3, 2)
    public Decimal Standard_APR__c;         // Percent(3, 2)
    public Boolean Is_Active__c;            // Checkbox [Default: true]
}`}}]}},{type:"accordion",accordionData:{title:"Credit Card Application (Credit_Card_Application__c)",content:[{type:"code",codeSnippet:{language:"apex",code:`public class Credit_Card_Application__c {
    // Fields
    public Id Applicant__c;                 // Master-Detail(Contact)
    public Id Requested_Card_Product__c;    // Lookup(Credit_Card_Product__c)
    public String Application_Stage__c;     // Picklist: New, Under Review, Approved
    public Decimal Requested_Credit_Limit__c; // Currency(16, 0)
    public Decimal Approved_Credit_Limit__c;  // Currency(16, 0)
    public String Employment_Status__c;     // Picklist
    public Decimal Annual_Income__c;        // Currency(16, 0)
    public Decimal Risk_Score__c;           // Number(3, 0)
    public String Underwriting_Notes__c;    // Long Text Area
    
    // System Fields
    public String Name;                     // Auto Number: APP-{00000}
}`}}]}},{type:"accordion",accordionData:{title:"Credit Card (Credit_Card__c)",content:[{type:"code",codeSnippet:{language:"apex",code:`public class Credit_Card__c {
    // Fields
    public Id Primary_Cardholder__c;        // Master-Detail(Contact)
    public Id Credit_Card_Product__c;       // Lookup(Credit_Card_Product__c)
    public Id Source_Application__c;        // Lookup(Credit_Card_Application__c)
    public Decimal Credit_Limit__c;         // Currency(16, 0)
    public Decimal Current_Balance__c;      // Currency(16, 2)
    public Decimal Available_Credit__c;     // Formula: Credit_Limit__c - Current_Balance__c
    public String Account_Status__c;        // Picklist: Active, Closed, Fraud
    public Date Issue_Date__c;              // Date
    public Date Expiry_Date__c;             // Date
    
    // System Fields
    public String Name;                     // Auto Number: CARD-{00000}
}`}}]}},{type:"text",content:"Relationship Diagram:"},{type:"diagram",diagramLines:["Contact","├── Credit Card Applications (Master-Detail)","│   └── Credit Card Product (Lookup)","└── Credit Cards (Master-Detail)","    ├── Credit Card Product (Lookup)","    └── Source Application (Lookup)"]}]}]},{id:"module-2",title:"Automation & Logic",icon:"cpu",lessons:[{id:"automation",title:"Declarative Automation",duration:"10 min",salesforceLink:"https://trailhead.salesforce.com/en/content/learn/modules/flow-basics",content:[{type:"text",content:"Key Validation Rules & Flows implemented using system formulas."},{type:"accordion",accordionData:{title:"Validation: Prevent Stage Regression",content:[{type:"code",codeSnippet:{language:"apex",code:`// Validation Rule Formula
AND(
  ISCHANGED(Application_Stage__c),
  // Prevent moving back from these stages
  CASE(PRIORVALUE(Application_Stage__c),
    "Under Review", 1,
    "Additional Info Required", 1,
    "Approved", 1,
    "Declined", 1, 
    "Withdrawn", 1,
    0
  ) = 1,
  // To these stages
  CASE(Application_Stage__c,
    "New", 1,
    "Under Review", 1,
    0
  ) = 1
)`}}]}},{type:"accordion",accordionData:{title:"Flow: Auto-Create Credit Card",content:[{type:"text",content:"Trigger: Record-Triggered Flow on Application (After Update)"},{type:"code",codeSnippet:{language:"apex",code:`// Flow Entry Conditions
AND(
  {!$Record.Application_Stage__c} = "Approved",
  ISCHANGED({!$Record.Application_Stage__c})
)

// Create Record: Credit_Card__c
Credit_Card__c newCard = new Credit_Card__c();
newCard.Primary_Cardholder__c = {!$Record.Applicant__c};
newCard.Credit_Card_Product__c = {!$Record.Requested_Card_Product__c};
newCard.Credit_Limit__c = {!$Record.Approved_Credit_Limit__c};
newCard.Account_Status__c = "Active";
newCard.Issue_Date__c = {!$Flow.CurrentDate};`}}]}}]},{id:"triggers",title:"Apex Triggers & Handlers",duration:"20 min",salesforceLink:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers.htm",content:[{type:"text",content:"A robust, enterprise-grade trigger framework. This implementation includes Custom Settings to control trigger execution (helpful for Data Loads), separates concerns, and implements different processing paths for Single vs. Bulk operations to respect Governor Limits."},{type:"accordion",accordionData:{title:"Understanding the Trigger Handler Pattern",content:[{type:"text",content:"The Trigger Handler pattern creates a separation of concerns by moving business logic out of the trigger and into a dedicated Apex class. This makes the trigger itself logic-less, serving purely as a dispatcher."},{type:"text",content:"Key Benefits:"},{type:"list",items:["Testability: Handler methods can be unit tested without invoking the trigger.","Reusability: Logic in the handler can be called from other classes or batch jobs.","Maintainability: Keeps the trigger file small and cleaner."]},{type:"code",codeSnippet:{language:"apex",filename:"SimpleHandlerExample.cls",code:`public class SimpleHandler {
    public void onBeforeInsert(List<Account> newAccounts) {
        for(Account acc : newAccounts) {
            acc.Description = 'Default Description';
        }
    }
}`}}]}},{type:"code",codeSnippet:{language:"apex",filename:"CreditCardApplicationTrigger.trigger",code:`trigger CreditCardApplicationTrigger on Credit_Card_Application__c (
    before insert, before update,
    after insert, after update,
    after delete, after undelete
) {
    CreditCardApplicationTriggerHandler handler = new CreditCardApplicationTriggerHandler();
    
    if (Trigger.isBefore) {
        if (Trigger.isInsert) handler.onBeforeInsert(Trigger.new);
        if (Trigger.isUpdate) handler.onBeforeUpdate(Trigger.new, Trigger.oldMap);
    }
    
    if (Trigger.isAfter) {
        if (Trigger.isInsert) handler.onAfterInsert(Trigger.new);
        if (Trigger.isUpdate) handler.onAfterUpdate(Trigger.new, Trigger.oldMap);
        if (Trigger.isDelete) handler.onAfterDelete(Trigger.oldMap);
        if (Trigger.isUndelete) handler.onAfterUndelete(Trigger.new);
    }
}`}},{type:"text",content:'The Handler class implementing the sophisticated "Split Logic" pattern for Bulk vs Single operations:'},{type:"code",codeSnippet:{language:"apex",filename:"CreditCardApplicationTriggerHandler.cls",code:`public class CreditCardApplicationTriggerHandler {
    
    // Static flag to force exceptions during testing for 100% coverage
    @TestVisible private static Boolean throwTestException = false;
    
    // --- Entry Points ---

    public void onBeforeInsert(List<Credit_Card_Application__c> newApps) {
        // 1. Check Custom Settings
        if (isTriggerDisabled()) {
            System.debug('Trigger bypassed via custom setting');
            return;
        }
        
        // 2. Split Logic based on Volume
        if (isBulkOperation(newApps)) {
            handleBulkBeforeInsert(newApps);
        } else {
            handleSingleBeforeInsert(newApps);
        }
    }

    public void onBeforeUpdate(List<Credit_Card_Application__c> newApps, Map<Id, Credit_Card_Application__c> oldMap) {
        if (isTriggerDisabled()) return;

        if (isBulkOperation(newApps)) {
            handleBulkBeforeUpdate(newApps, oldMap);
        } else {
            handleSingleBeforeUpdate(newApps, oldMap);
        }
    }
    
    public void onAfterUpdate(List<Credit_Card_Application__c> newApps, Map<Id, Credit_Card_Application__c> oldMap) {
        if (isTriggerDisabled()) return;
        
        processApprovedApps(newApps, oldMap);
    }

    public void onAfterInsert(List<Credit_Card_Application__c> newApps) {
        // Placeholder for After Insert logic
    }
    
    public void onAfterDelete(Map<Id, Credit_Card_Application__c> oldMap) {
        // Placeholder for After Delete logic
    }
    
    public void onAfterUndelete(List<Credit_Card_Application__c> newApps) {
        // Placeholder for After Undelete logic
    }

    // --- Configuration Helpers ---

    private Boolean isTriggerDisabled() {
        Trigger_Settings__c settings = Trigger_Settings__c.getInstance();
        return settings != null && settings.Disable_Triggers_For_Data_Load__c;
    }

    private Boolean isBulkOperation(List<SObject> records) {
        Trigger_Settings__c settings = Trigger_Settings__c.getInstance();
        Integer threshold = (settings != null && settings.Allowed_Bulk_Operation_Size__c != null) 
            ? Integer.valueOf(settings.Allowed_Bulk_Operation_Size__c) 
            : 10; // Default threshold
        
        return records != null && records.size() > threshold;
    }

    // --- Single Record Logic (Optimized for User Experience) ---

    private void handleSingleBeforeInsert(List<Credit_Card_Application__c> newApps) {
        try {
            if(throwTestException) throw new CalloutException('Forced Error');
            
            // Standard Validation & Logic
            validateApplications(newApps);
            autoAssignUnderwriter(newApps);
            calculateRiskScores(newApps);
            
        } catch (Exception e) {
            handleSingleError(e, newApps);
        }
    }

    private void handleSingleBeforeUpdate(List<Credit_Card_Application__c> newApps, Map<Id, Credit_Card_Application__c> oldMap) {
        try {
             if(throwTestException) throw new CalloutException('Forced Error');
             
             trackStageChanges(newApps, oldMap);
             
        } catch (Exception e) {
            handleSingleError(e, newApps);
        }
    }

    // --- Bulk Record Logic (Optimized for Performance/Limits) ---

    private void handleBulkBeforeInsert(List<Credit_Card_Application__c> newApps) {
        try {
            if(throwTestException) throw new CalloutException('Forced Error');
            
            System.debug('Processing Bulk Insert: ' + newApps.size() + ' records');
            
            // Simplified logic or specific bulk handling to avoid limits
            validateApplications(newApps);
            autoAssignUnderwriter(newApps);
            calculateRiskScores(newApps);
            
        } catch (Exception e) {
            handleBulkError(e, newApps);
        }
    }

    private void handleBulkBeforeUpdate(List<Credit_Card_Application__c> newApps, Map<Id, Credit_Card_Application__c> oldMap) {
        try {
            if(throwTestException) throw new CalloutException('Forced Error');
            
            // Governor Limit Check
            if (Limits.getCpuTime() > 9500) {
                System.debug('Approaching CPU Limit in Bulk Operation - Aborting complex logic');
                return;
            }
            
            trackStageChanges(newApps, oldMap);
            
        } catch (Exception e) {
            handleBulkError(e, newApps);
        }
    }

    // --- Shared Business Logic ---

    private void validateApplications(List<Credit_Card_Application__c> apps) {
        for(Credit_Card_Application__c app : apps) {
             if(app.Annual_Income__c < 10000) app.addError('Minimum income requirement ($10,000) not met.');
        }
    }

    private void autoAssignUnderwriter(List<Credit_Card_Application__c> apps) {
        // Implementation: Assign to default underwriter queue or user
        // In production, we would query the specific user or queue ID here.
        // For this example, we assume assignments are handled by standard assignment rules
        // or we set a flag.
        for(Credit_Card_Application__c app : apps) {
            // Logic to set owner would go here
        }
    }
    
    private void calculateRiskScores(List<Credit_Card_Application__c> apps) {
        for(Credit_Card_Application__c app : apps) {
            if (app.Annual_Income__c != null) {
                // Simple risk calculation for demo
                app.Risk_Score__c = (app.Annual_Income__c > 50000) ? 750 : 600;
            }
        }
    }

    private void trackStageChanges(List<Credit_Card_Application__c> newApps, Map<Id, Credit_Card_Application__c> oldMap) {
        for (Credit_Card_Application__c app : newApps) {
            Credit_Card_Application__c oldApp = oldMap.get(app.Id);
            if (app.Application_Stage__c != oldApp.Application_Stage__c) {
                // Assuming a custom field for tracking
                // app.Last_Stage_Change_Date__c = Datetime.now();
            }
        }
    }

    private void processApprovedApps(List<Credit_Card_Application__c> newApps, Map<Id, Credit_Card_Application__c> oldMap) {
        List<Credit_Card_Application__c> approvedApps = new List<Credit_Card_Application__c>();
        for (Credit_Card_Application__c app : newApps) {
            Credit_Card_Application__c oldApp = oldMap.get(app.Id);
            if (app.Application_Stage__c == 'Approved' && oldApp.Application_Stage__c != 'Approved') {
                approvedApps.add(app);
            }
        }
        if (!approvedApps.isEmpty()) {
            // Enqueue asynchronous job
            // System.enqueueJob(new ProcessApprovedApplicationsQueueable(approvedApps));
        }
    }

    // --- Error Handling Strategies ---

    private void handleSingleError(Exception e, List<Credit_Card_Application__c> apps) {
        System.debug('Single Record Error: ' + e.getMessage());
        for(Credit_Card_Application__c app : apps) {
            app.addError('Unable to process application. Please try again or contact support.');
        }
    }

    private void handleBulkError(Exception e, List<Credit_Card_Application__c> apps) {
        System.debug('BULK OPERATION ERROR: ' + e.getMessage());
        // In bulk, we log heavily but might try to avoid failing the whole batch if possible,
        // or fail all with a system message.
        for(Credit_Card_Application__c app : apps) {
            app.addError('System error during bulk operation: ' + e.getMessage());
        }
    }
}`}},{type:"accordion",accordionData:{title:"Before Triggers - Insert and Update",content:[{type:"text",content:"Before triggers execute before records are saved to the database. Use them to update or validate record values before they're committed."},{type:"code",codeSnippet:{language:"apex",filename:"BeforeTriggerExample.trigger",code:`trigger ApplicationBeforeTrigger on Credit_Card_Application__c (
    before insert, before update
) {
    if (Trigger.isBefore && Trigger.isInsert) {
        ApplicationBeforeHandler.onBeforeInsert(Trigger.new);
    }
    
    if (Trigger.isBefore && Trigger.isUpdate) {
        ApplicationBeforeHandler.onBeforeUpdate(Trigger.new, Trigger.oldMap);
    }
}`}},{type:"code",codeSnippet:{language:"apex",filename:"ApplicationBeforeHandler.cls",code:`public class ApplicationBeforeHandler {
    
    // Before Insert: Set default values and validate
    public static void onBeforeInsert(List<Credit_Card_Application__c> newApps) {
        for (Credit_Card_Application__c app : newApps) {
            // Set default values
            if (app.Application_Stage__c == null) {
                app.Application_Stage__c = 'New';
            }
            
            // Validate business rules
            if (app.Annual_Income__c != null && app.Annual_Income__c < 10000) {
                app.addError('Annual income must be at least $10,000');
            }
            
            // Calculate derived fields
            if (app.Annual_Income__c != null) {
                app.Risk_Score__c = calculateRiskScore(app.Annual_Income__c);
            }
        }
    }
    
    // Before Update: Validate changes and prevent invalid transitions
    public static void onBeforeUpdate(
        List<Credit_Card_Application__c> newApps,
        Map<Id, Credit_Card_Application__c> oldMap
    ) {
        for (Credit_Card_Application__c app : newApps) {
            Credit_Card_Application__c oldApp = oldMap.get(app.Id);
            
            // Prevent stage regression
            if (isStageRegression(oldApp.Application_Stage__c, app.Application_Stage__c)) {
                app.addError('Cannot move application stage backwards from ' + 
                    oldApp.Application_Stage__c + ' to ' + app.Application_Stage__c);
            }
            
            // Auto-calculate approved credit limit if stage changed to Approved
            if (app.Application_Stage__c == 'Approved' && 
                oldApp.Application_Stage__c != 'Approved' &&
                app.Approved_Credit_Limit__c == null) {
                app.Approved_Credit_Limit__c = app.Requested_Credit_Limit__c;
            }
        }
    }
    
    private static Integer calculateRiskScore(Decimal annualIncome) {
        if (annualIncome > 100000) return 800;
        if (annualIncome > 50000) return 750;
        if (annualIncome > 30000) return 650;
        return 600;
    }
    
    private static Boolean isStageRegression(String oldStage, String newStage) {
        Map<String, Integer> stageOrder = new Map<String, Integer>{
            'New' => 1,
            'Under Review' => 2,
            'Additional Info Required' => 3,
            'Approved' => 4,
            'Declined' => 5,
            'Withdrawn' => 6
        };
        
        Integer oldOrder = stageOrder.get(oldStage);
        Integer newOrder = stageOrder.get(newStage);
        
        return oldOrder != null && newOrder != null && newOrder < oldOrder;
    }
}`}}]}},{type:"accordion",accordionData:{title:"After Triggers - Insert, Update, Delete, Undelete",content:[{type:"text",content:"After triggers execute after records are saved. Use them to access system fields (like Id) and to affect changes in other records. The records that fire the after trigger are read-only."},{type:"code",codeSnippet:{language:"apex",filename:"ApplicationAfterHandler.cls",code:`public class ApplicationAfterHandler {
    
    // After Insert: Create related records, send notifications
    public static void onAfterInsert(List<Credit_Card_Application__c> newApps) {
        List<Task> tasksToCreate = new List<Task>();
        List<Id> applicationIds = new List<Id>();
        
        for (Credit_Card_Application__c app : newApps) {
            // Now we have access to the Id field
            applicationIds.add(app.Id);
            
            // Create follow-up task
            tasksToCreate.add(new Task(
                WhatId = app.Id,
                Subject = 'Review Application: ' + app.Name,
                Status = 'Not Started',
                Priority = 'Normal',
                OwnerId = UserInfo.getUserId()
            ));
        }
        
        if (!tasksToCreate.isEmpty()) {
            insert tasksToCreate;
        }
        
        // Fire platform event for external systems
        publishApplicationCreatedEvent(applicationIds);
    }
    
    // After Update: Log changes, trigger workflows
    public static void onAfterUpdate(
        List<Credit_Card_Application__c> newApps,
        Map<Id, Credit_Card_Application__c> oldMap
    ) {
        List<Application_History__c> historyRecords = new List<Application_History__c>();
        List<Credit_Card_Application__c> approvedApps = new List<Credit_Card_Application__c>();
        
        for (Credit_Card_Application__c app : newApps) {
            Credit_Card_Application__c oldApp = oldMap.get(app.Id);
            
            // Track stage changes
            if (app.Application_Stage__c != oldApp.Application_Stage__c) {
                historyRecords.add(new Application_History__c(
                    Application__c = app.Id,
                    Previous_Stage__c = oldApp.Application_Stage__c,
                    New_Stage__c = app.Application_Stage__c,
                    Changed_By__c = UserInfo.getUserId(),
                    Changed_Date__c = System.now()
                ));
            }
            
            // Process approved applications
            if (app.Application_Stage__c == 'Approved' && 
                oldApp.Application_Stage__c != 'Approved') {
                approvedApps.add(app);
            }
        }
        
        if (!historyRecords.isEmpty()) {
            insert historyRecords;
        }
        
        if (!approvedApps.isEmpty()) {
            processApprovedApplications(approvedApps);
        }
    }
    
    // After Delete: Archive records, cleanup related data
    public static void onAfterDelete(Map<Id, Credit_Card_Application__c> oldMap) {
        List<Id> deletedAppIds = new List<Id>(oldMap.keySet());
        
        // Delete related tasks
        List<Task> relatedTasks = [
            SELECT Id FROM Task 
            WHERE WhatId IN :deletedAppIds
        ];
        
        if (!relatedTasks.isEmpty()) {
            delete relatedTasks;
        }
        
        // Archive to external system
        archiveApplications(deletedAppIds);
    }
    
    // After Undelete: Restore related records
    public static void onAfterUndelete(List<Credit_Card_Application__c> newApps) {
        List<Id> restoredAppIds = new List<Id>();
        
        for (Credit_Card_Application__c app : newApps) {
            restoredAppIds.add(app.Id);
        }
        
        // Restore in external system
        restoreApplications(restoredAppIds);
        
        // Recreate default tasks
        List<Task> tasksToCreate = new List<Task>();
        for (Credit_Card_Application__c app : newApps) {
            tasksToCreate.add(new Task(
                WhatId = app.Id,
                Subject = 'Review Restored Application: ' + app.Name,
                Status = 'Not Started',
                Priority = 'Normal'
            ));
        }
        
        if (!tasksToCreate.isEmpty()) {
            insert tasksToCreate;
        }
    }
    
    private static void processApprovedApplications(List<Credit_Card_Application__c> apps) {
        // Queue async job to create credit cards
        System.enqueueJob(new CreateCreditCardQueueable(apps));
    }
    
    private static void publishApplicationCreatedEvent(List<Id> appIds) {
        List<Application_Created_Event__e> events = new List<Application_Created_Event__e>();
        
        for (Id appId : appIds) {
            events.add(new Application_Created_Event__e(
                Application_ID__c = appId
            ));
        }
        
        List<Database.SaveResult> results = EventBus.publish(events);
        
        for (Database.SaveResult result : results) {
            if (!result.isSuccess()) {
                System.debug('Failed to publish event: ' + result.getErrors());
            }
        }
    }
    
    private static void archiveApplications(List<Id> appIds) {
        // Make async callout to archive
        System.enqueueJob(new ArchiveApplicationQueueable(appIds));
    }
    
    private static void restoreApplications(List<Id> appIds) {
        // Make async callout to restore
        System.enqueueJob(new RestoreApplicationQueueable(appIds));
    }
}`}}]}},{type:"accordion",accordionData:{title:"Merge Triggers",content:[{type:"text",content:"Merge operations fire both before and after delete triggers for losing records, and both before and after update triggers for the winning record."},{type:"code",codeSnippet:{language:"apex",filename:"AccountMergeHandler.cls",code:`public class AccountMergeHandler {
    
    public static void onBeforeUpdate(List<Account> newAccounts, Map<Id, Account> oldMap) {
        for (Account acc : newAccounts) {
            // Check if this is a merge operation
            if (Trigger.isUpdate && acc.MasterRecordId != null) {
                // This is the winning record in a merge
                System.debug('Processing merge - winning record: ' + acc.Id);
            }
        }
    }
    
    public static void onAfterDelete(Map<Id, Account> oldMap) {
        Set<Id> deletedAccountIds = new Set<Id>();
        
        for (Account acc : oldMap.values()) {
            if (acc.MasterRecordId != null) {
                deletedAccountIds.add(acc.Id);
                System.debug('Merge completed - deleted losing record: ' + acc.Id);
            }
        }
        
        if (!deletedAccountIds.isEmpty()) {
            // Archive merge history
            createMergeHistoryRecords(deletedAccountIds);
        }
    }
    
    private static void createMergeHistoryRecords(Set<Id> deletedAccountIds) {
        // Create audit trail for merges
        System.debug('Merge history created for ' + deletedAccountIds.size() + ' accounts');
    }
}`}}]}},{type:"accordion",accordionData:{title:"Upsert Triggers",content:[{type:"text",content:"Upsert operations fire both before and after insert triggers (for new records) or before and after update triggers (for existing records) as appropriate."},{type:"code",codeSnippet:{language:"apex",filename:"ContactUpsertHandler.cls",code:`public class ContactUpsertHandler {
    
    public static void onBeforeInsert(List<Contact> newContacts) {
        // Handle new contacts being inserted via upsert
        for (Contact con : newContacts) {
            // Set defaults for new records
            if (con.Description == null) {
                con.Description = 'Created via upsert operation';
            }
        }
    }
    
    public static void onBeforeUpdate(
        List<Contact> newContacts,
        Map<Id, Contact> oldMap
    ) {
        // Handle existing contacts being updated via upsert
        for (Contact con : newContacts) {
            Contact oldCon = oldMap.get(con.Id);
            
            // Track what changed
            if (con.Email != oldCon.Email) {
                con.Email_Changed_Date__c = System.now();
            }
        }
    }
    
    public static void onAfterInsert(List<Contact> newContacts) {
        // Process newly inserted contacts
        List<Id> newContactIds = new List<Id>();
        
        for (Contact con : newContacts) {
            newContactIds.add(con.Id);
        }
        
        // Create welcome tasks
        createWelcomeTasks(newContactIds);
    }
    
    private static void createWelcomeTasks(List<Id> contactIds) {
        List<Task> tasks = new List<Task>();
        
        for (Id contactId : contactIds) {
            tasks.add(new Task(
                WhoId = contactId,
                Subject = 'Welcome - New Contact Created',
                Status = 'Not Started',
                Priority = 'Normal'
            ));
        }
        
        if (!tasks.isEmpty()) {
            insert tasks;
        }
    }
}`}}]}},{type:"accordion",accordionData:{title:"Trigger Context Variables",content:[{type:"text",content:"Trigger context variables provide information about the trigger execution context. Use them to determine the trigger context and access record data."},{type:"code",codeSnippet:{language:"apex",filename:"TriggerContextHandler.cls",code:`public class TriggerContextHandler {
    
    public static void process() {
        // Check trigger operation type
        System.debug('isInsert: ' + Trigger.isInsert);
        System.debug('isUpdate: ' + Trigger.isUpdate);
        System.debug('isDelete: ' + Trigger.isDelete);
        System.debug('isUndelete: ' + Trigger.isUndelete);
        System.debug('isBefore: ' + Trigger.isBefore);
        System.debug('isAfter: ' + Trigger.isAfter);
        System.debug('isExecuting: ' + Trigger.isExecuting);
        
        // Access record collections
        if (Trigger.isInsert || Trigger.isUpdate) {
            System.debug('New records: ' + Trigger.new.size());
            System.debug('New map size: ' + Trigger.newMap.size());
            
            // Iterate through new records
            for (Credit_Card_Application__c app : (List<Credit_Card_Application__c>)Trigger.new) {
                System.debug('Processing record: ' + app.Id);
            }
        }
        
        if (Trigger.isUpdate || Trigger.isDelete) {
            System.debug('Old records: ' + Trigger.old.size());
            System.debug('Old map size: ' + Trigger.oldMap.size());
        }
        
        // Check if trigger is executing in a specific context
        if (Trigger.isBefore) {
            handleBeforeContext();
        }
        
        if (Trigger.isAfter) {
            handleAfterContext();
        }
        
        // Access size
        System.debug('Total records in trigger: ' + Trigger.size);
    }
    
    private static void handleBeforeContext() {
        // Before triggers: Can modify records
        if (Trigger.isInsert) {
            List<Credit_Card_Application__c> apps = 
                (List<Credit_Card_Application__c>)Trigger.new;
            
            for (Credit_Card_Application__c app : apps) {
                // Modify records before save
                if (app.Application_Stage__c == null) {
                    app.Application_Stage__c = 'New';
                }
            }
        }
    }
    
    private static void handleAfterContext() {
        // After triggers: Records are read-only
        if (Trigger.isInsert) {
            List<Credit_Card_Application__c> apps = 
                (List<Credit_Card_Application__c>)Trigger.new;
            
            for (Credit_Card_Application__c app : apps) {
                // Can read but not modify
                System.debug('New record ID: ' + app.Id);
                
                // Must use DML to modify other records
                createRelatedRecord(app.Id);
            }
        }
    }
    
    private static void createRelatedRecord(Id applicationId) {
        Task t = new Task(
            WhatId = applicationId,
            Subject = 'Follow up',
            Status = 'Not Started'
        );
        insert t;
    }
}`}}]}},{type:"accordion",accordionData:{title:"Common Bulk Trigger Idioms",content:[{type:"text",content:"Bulk triggers process multiple records efficiently. Use these patterns to avoid governor limits and improve performance."},{type:"code",codeSnippet:{language:"apex",filename:"BulkTriggerPatterns.cls",code:`public class BulkTriggerPatterns {
    
    // Pattern 1: Collect IDs and query once
    public static void pattern1_CollectAndQuery(List<Credit_Card_Application__c> apps) {
        Set<Id> contactIds = new Set<Id>();
        Set<Id> productIds = new Set<Id>();
        
        // Collect all IDs first
        for (Credit_Card_Application__c app : apps) {
            if (app.Applicant__c != null) {
                contactIds.add(app.Applicant__c);
            }
            if (app.Requested_Card_Product__c != null) {
                productIds.add(app.Requested_Card_Product__c);
            }
        }
        
        // Single query for all related records
        Map<Id, Contact> contactsMap = new Map<Id, Contact>([
            SELECT Id, Email, Phone FROM Contact WHERE Id IN :contactIds
        ]);
        
        Map<Id, Credit_Card_Product__c> productsMap = new Map<Id, Credit_Card_Product__c>([
            SELECT Id, Name, Minimum_Credit_Limit__c FROM Credit_Card_Product__c 
            WHERE Id IN :productIds
        ]);
        
        // Use maps for lookups
        for (Credit_Card_Application__c app : apps) {
            Contact con = contactsMap.get(app.Applicant__c);
            Credit_Card_Product__c prod = productsMap.get(app.Requested_Card_Product__c);
            // Process with related data
        }
    }
    
    // Pattern 2: Use Sets to avoid duplicates
    public static void pattern2_UseSets(List<Credit_Card_Application__c> apps) {
        Set<String> uniqueEmails = new Set<String>();
        Set<Id> uniqueContactIds = new Set<Id>();
        
        for (Credit_Card_Application__c app : apps) {
            if (app.Applicant__c != null) {
                uniqueContactIds.add(app.Applicant__c);
            }
        }
        
        // Query once for unique contacts
        List<Contact> contacts = [
            SELECT Id, Email FROM Contact WHERE Id IN :uniqueContactIds
        ];
        
        for (Contact con : contacts) {
            uniqueEmails.add(con.Email);
        }
        
        System.debug('Unique emails to process: ' + uniqueEmails.size());
    }
    
    // Pattern 3: Bulk DML operations
    public static void pattern3_BulkDML(List<Credit_Card_Application__c> apps) {
        List<Task> tasksToInsert = new List<Task>();
        
        for (Credit_Card_Application__c app : apps) {
            tasksToInsert.add(new Task(
                WhatId = app.Id,
                Subject = 'Review Application',
                Status = 'Not Started'
            ));
        }
        
        // Single DML operation for all records
        if (!tasksToInsert.isEmpty()) {
            insert tasksToInsert;
        }
    }
    
    // Pattern 4: Governor limit checks
    public static void pattern4_GovernorLimitChecks(List<Credit_Card_Application__c> apps) {
        // Check CPU time
        if (Limits.getCpuTime() > 8000) {
            System.debug('Approaching CPU limit: ' + Limits.getCpuTime());
            return;
        }
        
        // Check SOQL queries
        Integer queriesUsed = Limits.getQueries();
        Integer queriesLimit = Limits.getLimitQueries();
        
        if (queriesUsed > queriesLimit * 0.8) {
            System.debug('Approaching SOQL limit: ' + queriesUsed + '/' + queriesLimit);
        }
    }
}`}}]}},{type:"accordion",accordionData:{title:"Trigger Exceptions and Error Handling",content:[{type:"text",content:"Handle exceptions properly in triggers. Use addError() for validation errors and try-catch for system errors."},{type:"code",codeSnippet:{language:"apex",filename:"TriggerExceptionHandling.cls",code:`public class TriggerExceptionHandling {
    
    // Validation errors - use addError()
    public static void validateRecords(List<Credit_Card_Application__c> apps) {
        for (Credit_Card_Application__c app : apps) {
            // Business rule validation
            if (app.Annual_Income__c < 10000) {
                app.addError('Annual income must be at least $10,000');
            }
            
            // Field-level error
            if (app.Requested_Credit_Limit__c > 100000 && 
                app.Annual_Income__c < 50000) {
                app.Requested_Credit_Limit__c.addError(
                    'Credit limit cannot exceed $100,000 for applicants with income below $50,000'
                );
            }
        }
    }
    
    // System errors - use try-catch
    public static void processWithErrorHandling(List<Credit_Card_Application__c> apps) {
        for (Credit_Card_Application__c app : apps) {
            try {
                // Complex processing that might fail
                processApplication(app);
                
            } catch(DmlException e) {
                // DML-specific error
                System.debug('DML Error: ' + e.getMessage());
                app.addError('Failed to process application: ' + e.getMessage());
                
            } catch(CalloutException e) {
                // Callout error - queue for retry
                System.debug('Callout Error: ' + e.getMessage());
                queueForRetry(app, e.getMessage());
                
            } catch(Exception e) {
                // Generic error
                System.debug('Unexpected Error: ' + e.getMessage());
                app.addError('An unexpected error occurred. Please contact support.');
            }
        }
    }
    
    // Prevent infinite recursion
    public static Boolean isRecursive = false;
    
    public static void preventRecursion(List<Credit_Card_Application__c> apps) {
        if (isRecursive) {
            return; // Exit if already processing
        }
        
        isRecursive = true;
        
        try {
            // Process records
            processApplications(apps);
            
        } finally {
            isRecursive = false; // Always reset flag
        }
    }
    
    private static void processApplication(Credit_Card_Application__c app) {
        if (app.Annual_Income__c == null) {
            throw new IllegalArgumentException('Annual income is required');
        }
    }
    
    private static void processApplications(List<Credit_Card_Application__c> apps) {
        // Bulk processing
    }
    
    private static void queueForRetry(Credit_Card_Application__c app, String error) {
        // Create retry queue record
        Retry_Queue__c retry = new Retry_Queue__c(
            Record_ID__c = app.Id,
            Error_Message__c = error,
            Retry_Count__c = 0
        );
        insert retry;
    }
}`}}]}},{type:"accordion",accordionData:{title:"Trigger Best Practices",content:[{type:"text",content:"Follow these best practices to write efficient, maintainable triggers."},{type:"list",items:["One trigger per object - prevents execution order issues","Logic-less triggers - delegate to handler classes","Bulkify all code - process collections, not single records","Avoid SOQL/DML in loops - query once, use maps","Use static flags to prevent recursion","Check governor limits before heavy operations","Use try-catch for system errors, addError() for validation","Test with bulk data (200+ records)","Use Custom Settings to enable/disable triggers","Document trigger execution order dependencies"]},{type:"code",codeSnippet:{language:"apex",filename:"BestPracticesExample.cls",code:`public class BestPracticesExample {
    
    // Best Practice 1: One trigger per object
    // CreditCardApplicationTrigger.trigger - single entry point
    
    // Best Practice 2: Logic-less trigger delegates to handler
    // trigger CreditCardApplicationTrigger on Credit_Card_Application__c (...) {
    //     CreditCardApplicationTriggerHandler.handle();
    // }
    
    // Best Practice 3: Bulkify - process collections
    public static void bulkifiedMethod(List<Credit_Card_Application__c> apps) {
        // GOOD: Process all records together
        Set<Id> contactIds = new Set<Id>();
        for (Credit_Card_Application__c app : apps) {
            contactIds.add(app.Applicant__c);
        }
        
        Map<Id, Contact> contactsMap = new Map<Id, Contact>([
            SELECT Id, Email FROM Contact WHERE Id IN :contactIds
        ]);
        
        // BAD: Query in loop
        // for (Credit_Card_Application__c app : apps) {
        //     Contact con = [SELECT Email FROM Contact WHERE Id = :app.Applicant__c];
        // }
    }
    
    // Best Practice 4: Prevent recursion
    private static Boolean isProcessing = false;
    
    public static void preventRecursion() {
        if (isProcessing) {
            return;
        }
        
        isProcessing = true;
        try {
            // Process records
        } finally {
            isProcessing = false;
        }
    }
    
    // Best Practice 5: Check governor limits
    public static void checkLimits() {
        if (Limits.getCpuTime() > 8000) {
            System.debug('Approaching CPU limit');
            return;
        }
        
        if (Limits.getQueries() > Limits.getLimitQueries() * 0.9) {
            System.debug('Approaching SOQL limit');
            return;
        }
    }
    
    // Best Practice 6: Use Custom Settings for control
    public static Boolean isTriggerEnabled() {
        Trigger_Settings__c settings = Trigger_Settings__c.getInstance();
        return settings == null || settings.Enable_Triggers__c != false;
    }
    
    // Best Practice 7: Proper error handling
    public static void handleErrors(List<Credit_Card_Application__c> apps) {
        for (Credit_Card_Application__c app : apps) {
            try {
                processApp(app);
            } catch(Exception e) {
                app.addError('Error: ' + e.getMessage());
            }
        }
    }
    
    private static void processApp(Credit_Card_Application__c app) {
        // Processing logic
    }
}`}}]}}]}]},{id:"module-3",title:"Bulk Operations",icon:"server",lessons:[{id:"bulk-ops",title:"Bulk Sharing & Data Utils",duration:"20 min",salesforceLink:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch.htm",content:[{type:"text",content:"Enterprise implementations require handling large data volumes without hitting governor limits. We use bulk-safe patterns for sharing calculation and data processing."},{type:"accordion",accordionData:{title:"Bulk Sharing Service",content:[{type:"code",codeSnippet:{language:"apex",filename:"BulkSharingService.cls",code:`public with sharing class BulkSharingService {
    
    public static void shareApplicationsWithUnderwriters(List<Credit_Card_Application__c> applications, Set<Id> underwriterIds) {
        List<Credit_Card_Application__Share> sharesToCreate = new List<Credit_Card_Application__Share>();
        
        for (Credit_Card_Application__c app : applications) {
            for (Id underwriterId : underwriterIds) {
                if (app.OwnerId != underwriterId) {
                    Credit_Card_Application__Share appShare = new Credit_Card_Application__Share();
                    appShare.ParentId = app.Id;
                    appShare.UserOrGroupId = underwriterId;
                    appShare.AccessLevel = 'Edit';
                    appShare.RowCause = Schema.Credit_Card_Application__Share.RowCause.Manual;
                    sharesToCreate.add(appShare);
                }
            }
        }
        
        if (!sharesToCreate.isEmpty()) {
            Database.SaveResult[] results = Database.insert(sharesToCreate, false);
            // Handle results/errors logging
        }
    }
}`}}]}},{type:"accordion",accordionData:{title:"Batch Apex: Daily Review",content:[{type:"text",content:"A scheduled batch class to review pending applications and auto-approve high income applicants."},{type:"code",codeSnippet:{language:"apex",filename:"DailyCreditLimitReviewBatch.cls",code:`global class DailyCreditLimitReviewBatch implements Database.Batchable<SObject>, Schedulable {
    
    global Database.QueryLocator start(Database.BatchableContext BC) {
        // Query recent applications needing review from last 7 days
        return Database.getQueryLocator([
            SELECT Id, Annual_Income__c, Application_Stage__c 
            FROM Credit_Card_Application__c 
            WHERE Application_Stage__c = 'Under Review' 
            AND CreatedDate = LAST_N_DAYS:7
        ]);
    }

    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        List<Credit_Card_Application__c> toApprove = new List<Credit_Card_Application__c>();
        
        for(Credit_Card_Application__c app : scope) {
            // Business Rule: Auto-approve income > $100k
            if(app.Annual_Income__c != null && app.Annual_Income__c > 100000) {
                app.Application_Stage__c = 'Approved';
                toApprove.add(app);
            }
        }
        
        if(!toApprove.isEmpty()) {
            update toApprove;
        }
    }

    global void finish(Database.BatchableContext BC) {
        // Logic to send email confirmation or log completion
    }

    // Schedulable Interface - execute this daily
    global void execute(SchedulableContext SC) {
        Database.executeBatch(new DailyCreditLimitReviewBatch(), 200);
    }
}`}}]}},{type:"accordion",accordionData:{title:"Batch Apex: Basic Structure (start, execute, finish)",content:[{type:"text",content:"Batch Apex implements three methods: start() queries records, execute() processes batches, and finish() runs cleanup tasks. Each method has specific governor limits."},{type:"code",codeSnippet:{language:"apex",filename:"BasicBatchExample.cls",code:`global class BasicBatchExample implements Database.Batchable<SObject> {
    
    // START METHOD: Called once at the beginning
    // Returns QueryLocator or Iterable
    // Governor Limits: 1 query, 10,000 records max
    global Database.QueryLocator start(Database.BatchableContext BC) {
        System.debug('Batch Job ID: ' + BC.getJobId());
        System.debug('Child Job ID: ' + BC.getChildJobId());
        
        // Query records to process
        return Database.getQueryLocator([
            SELECT Id, Name, Application_Stage__c, Annual_Income__c
            FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Under Review'
            AND CreatedDate = LAST_N_DAYS:30
        ]);
    }
    
    // EXECUTE METHOD: Called multiple times for each batch
    // Processes up to 200 records per execution (default)
    // Governor Limits: Reset for each execute() call
    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        System.debug('Processing batch of ' + scope.size() + ' records');
        System.debug('Job ID: ' + BC.getJobId());
        
        List<Credit_Card_Application__c> appsToUpdate = new List<Credit_Card_Application__c>();
        
        for (Credit_Card_Application__c app : scope) {
            // Process each record
            if (app.Annual_Income__c != null && app.Annual_Income__c > 100000) {
                app.Application_Stage__c = 'Approved';
                app.Approved_Credit_Limit__c = app.Requested_Credit_Limit__c;
                appsToUpdate.add(app);
            }
        }
        
        if (!appsToUpdate.isEmpty()) {
            update appsToUpdate;
            System.debug('Updated ' + appsToUpdate.size() + ' applications');
        }
    }
    
    // FINISH METHOD: Called once at the end
    // Use for cleanup, notifications, chaining batches
    // Governor Limits: Same as execute()
    global void finish(Database.BatchableContext BC) {
        System.debug('Batch job completed: ' + BC.getJobId());
        
        // Send completion email
        AsyncApexJob job = [
            SELECT Id, Status, NumberOfErrors, JobItemsProcessed, TotalJobItems
            FROM AsyncApexJob
            WHERE Id = :BC.getJobId()
        ];
        
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new String[] { UserInfo.getUserEmail() });
        mail.setSubject('Batch Job Completed');
        mail.setPlainTextBody('Batch processed ' + job.JobItemsProcessed + 
            ' of ' + job.TotalJobItems + ' items with ' + job.NumberOfErrors + ' errors.');
        
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
    }
}`}}]}},{type:"accordion",accordionData:{title:"Stateful Batch Apex",content:[{type:"text",content:"Stateful batches maintain state across execute() calls using instance variables. Use this when you need to track progress or accumulate data across batches."},{type:"code",codeSnippet:{language:"apex",filename:"StatefulBatchExample.cls",code:`global class StatefulBatchExample implements Database.Batchable<SObject>, Database.Stateful {
    
    // Instance variables maintain state across execute() calls
    private Integer totalProcessed = 0;
    private Integer totalApproved = 0;
    private Integer totalDeclined = 0;
    private List<String> errorMessages = new List<String>();
    
    global Database.QueryLocator start(Database.BatchableContext BC) {
        return Database.getQueryLocator([
            SELECT Id, Application_Stage__c, Annual_Income__c, Risk_Score__c
            FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Under Review'
        ]);
    }
    
    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        List<Credit_Card_Application__c> appsToUpdate = new List<Credit_Card_Application__c>();
        
        for (Credit_Card_Application__c app : scope) {
            totalProcessed++;
            
            try {
                // Business logic
                if (app.Annual_Income__c > 100000 && app.Risk_Score__c > 700) {
                    app.Application_Stage__c = 'Approved';
                    totalApproved++;
                } else if (app.Risk_Score__c < 600) {
                    app.Application_Stage__c = 'Declined';
                    totalDeclined++;
                }
                
                appsToUpdate.add(app);
                
            } catch(Exception e) {
                errorMessages.add('Error processing ' + app.Id + ': ' + e.getMessage());
            }
        }
        
        if (!appsToUpdate.isEmpty()) {
            update appsToUpdate;
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        // Access accumulated state
        System.debug('Total Processed: ' + totalProcessed);
        System.debug('Total Approved: ' + totalApproved);
        System.debug('Total Declined: ' + totalDeclined);
        System.debug('Total Errors: ' + errorMessages.size());
        
        // Send summary email
        String emailBody = 'Batch Processing Summary:\\n';
        emailBody += 'Total Processed: ' + totalProcessed + '\\n';
        emailBody += 'Approved: ' + totalApproved + '\\n';
        emailBody += 'Declined: ' + totalDeclined + '\\n';
        emailBody += 'Errors: ' + errorMessages.size() + '\\n';
        
        if (!errorMessages.isEmpty()) {
            emailBody += '\\nError Details:\\n';
            for (String error : errorMessages) {
                emailBody += error + '\\n';
            }
        }
        
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new String[] { UserInfo.getUserEmail() });
        mail.setSubject('Batch Processing Summary');
        mail.setPlainTextBody(emailBody);
        
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
    }
}`}}]}},{type:"accordion",accordionData:{title:"Batch Chaining",content:[{type:"text",content:"Chain batches together to process complex workflows. Start the next batch in the finish() method of the current batch."},{type:"code",codeSnippet:{language:"apex",filename:"BatchChainingExample.cls",code:`global class BatchChainingExample implements Database.Batchable<SObject> {
    
    private Boolean shouldChain = true;
    
    global Database.QueryLocator start(Database.BatchableContext BC) {
        return Database.getQueryLocator([
            SELECT Id, Application_Stage__c
            FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Approved'
            AND Credit_Card_Created__c = false
        ]);
    }
    
    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        List<Credit_Card__c> cardsToCreate = new List<Credit_Card__c>();
        
        for (Credit_Card_Application__c app : scope) {
            // Create credit card for approved application
            Credit_Card__c card = new Credit_Card__c(
                Primary_Cardholder__c = app.Applicant__c,
                Credit_Card_Product__c = app.Requested_Card_Product__c,
                Credit_Limit__c = app.Approved_Credit_Limit__c,
                Source_Application__c = app.Id,
                Account_Status__c = 'Active'
            );
            cardsToCreate.add(card);
        }
        
        if (!cardsToCreate.isEmpty()) {
            insert cardsToCreate;
            
            // Mark applications as processed
            for (Credit_Card_Application__c app : scope) {
                app.Credit_Card_Created__c = true;
            }
            update scope;
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        // Chain to next batch: Send welcome emails
        if (shouldChain) {
            Database.executeBatch(new SendWelcomeEmailBatch(), 200);
        }
        
        System.debug('Batch chaining completed');
    }
}

// Second batch in the chain
global class SendWelcomeEmailBatch implements Database.Batchable<SObject> {
    
    global Database.QueryLocator start(Database.BatchableContext BC) {
        return Database.getQueryLocator([
            SELECT Id, Primary_Cardholder__c, Credit_Limit__c
            FROM Credit_Card__c
            WHERE CreatedDate = TODAY
            AND Welcome_Email_Sent__c = false
        ]);
    }
    
    global void execute(Database.BatchableContext BC, List<Credit_Card__c> scope) {
        List<Credit_Card__c> cardsToUpdate = new List<Credit_Card__c>();
        
        for (Credit_Card__c card : scope) {
            // Send welcome email (simplified)
            // EmailService.sendWelcomeEmail(card);
            card.Welcome_Email_Sent__c = true;
            cardsToUpdate.add(card);
        }
        
        if (!cardsToUpdate.isEmpty()) {
            update cardsToUpdate;
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        System.debug('Welcome email batch completed');
    }
}`}}]}},{type:"accordion",accordionData:{title:"Error Handling in Batches",content:[{type:"text",content:"Handle errors gracefully in batches. Use Database.executeBatch with scope size, and implement retry logic for failed records."},{type:"code",codeSnippet:{language:"apex",filename:"BatchErrorHandling.cls",code:`global class BatchErrorHandling implements Database.Batchable<SObject>, Database.Stateful {
    
    private List<Id> failedRecordIds = new List<Id>();
    private Integer totalErrors = 0;
    
    global Database.QueryLocator start(Database.BatchableContext BC) {
        return Database.getQueryLocator([
            SELECT Id, Application_Stage__c, Annual_Income__c
            FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Under Review'
        ]);
    }
    
    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        List<Credit_Card_Application__c> appsToUpdate = new List<Credit_Card_Application__c>();
        List<Credit_Card_Application__c> appsWithErrors = new List<Credit_Card_Application__c>();
        
        for (Credit_Card_Application__c app : scope) {
            try {
                // Validate before processing
                if (app.Annual_Income__c == null) {
                    throw new IllegalArgumentException('Annual income is required');
                }
                
                // Process record
                if (app.Annual_Income__c > 100000) {
                    app.Application_Stage__c = 'Approved';
                    appsToUpdate.add(app);
                }
                
            } catch(Exception e) {
                totalErrors++;
                failedRecordIds.add(app.Id);
                appsWithErrors.add(app);
                
                System.debug('Error processing ' + app.Id + ': ' + e.getMessage());
                System.debug('Stack trace: ' + e.getStackTraceString());
            }
        }
        
        // Update successful records
        if (!appsToUpdate.isEmpty()) {
            Database.SaveResult[] results = Database.update(appsToUpdate, false);
            
            // Check for partial failures
            for (Integer i = 0; i < results.size(); i++) {
                if (!results[i].isSuccess()) {
                    failedRecordIds.add(appsToUpdate[i].Id);
                    totalErrors++;
                }
            }
        }
        
        // Log errors
        if (!appsWithErrors.isEmpty()) {
            logErrors(appsWithErrors);
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        // Retry failed records if any
        if (!failedRecordIds.isEmpty() && failedRecordIds.size() < 1000) {
            System.debug('Retrying ' + failedRecordIds.size() + ' failed records');
            
            // Create retry batch with specific record IDs
            Database.executeBatch(new BatchRetryHandler(failedRecordIds), 50);
        }
        
        // Send error summary
        if (totalErrors > 0) {
            sendErrorSummary(totalErrors, failedRecordIds.size());
        }
    }
    
    private void logErrors(List<Credit_Card_Application__c> apps) {
        List<Error_Log__c> logs = new List<Error_Log__c>();
        
        for (Credit_Card_Application__c app : apps) {
            logs.add(new Error_Log__c(
                Record_ID__c = app.Id,
                Error_Type__c = 'Batch Processing Error',
                Error_Message__c = 'Failed to process in batch'
            ));
        }
        
        if (!logs.isEmpty()) {
            insert logs;
        }
    }
    
    private void sendErrorSummary(Integer errorCount, Integer failedRecordCount) {
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new String[] { UserInfo.getUserEmail() });
        mail.setSubject('Batch Processing Errors');
        mail.setPlainTextBody('Batch encountered ' + errorCount + 
            ' errors affecting ' + failedRecordCount + ' records.');
        
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
    }
}

// Retry handler for failed records
global class BatchRetryHandler implements Database.Batchable<SObject> {
    
    private Set<Id> recordIds;
    
    public BatchRetryHandler(Set<Id> ids) {
        this.recordIds = ids;
    }
    
    global Database.QueryLocator start(Database.BatchableContext BC) {
        return Database.getQueryLocator([
            SELECT Id, Application_Stage__c, Annual_Income__c
            FROM Credit_Card_Application__c
            WHERE Id IN :recordIds
        ]);
    }
    
    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        // Retry logic with additional error handling
        List<Credit_Card_Application__c> appsToUpdate = new List<Credit_Card_Application__c>();
        
        for (Credit_Card_Application__c app : scope) {
            try {
                if (app.Annual_Income__c > 100000) {
                    app.Application_Stage__c = 'Approved';
                    appsToUpdate.add(app);
                }
            } catch(Exception e) {
                System.debug('Retry failed for ' + app.Id + ': ' + e.getMessage());
            }
        }
        
        if (!appsToUpdate.isEmpty()) {
            update appsToUpdate;
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        System.debug('Retry batch completed');
    }
}`}}]}},{type:"accordion",accordionData:{title:"Iterable Batch (Custom Processing)",content:[{type:"text",content:"Use Iterable interface for custom data sources that aren't from SOQL queries, such as external API data or complex data transformations."},{type:"code",codeSnippet:{language:"apex",filename:"IterableBatchExample.cls",code:`global class IterableBatchExample implements Database.Batchable<String> {
    
    global Iterable<String> start(Database.BatchableContext BC) {
        // Return custom iterable instead of QueryLocator
        return new ApplicationNumberIterable();
    }
    
    global void execute(Database.BatchableContext BC, List<String> scope) {
        // Process list of application numbers
        List<Credit_Card_Application__c> appsToUpdate = new List<Credit_Card_Application__c>();
        
        for (String appNumber : scope) {
            // Query application by number
            List<Credit_Card_Application__c> apps = [
                SELECT Id, Application_Stage__c
                FROM Credit_Card_Application__c
                WHERE Name = :appNumber
                LIMIT 1
            ];
            
            if (!apps.isEmpty()) {
                Credit_Card_Application__c app = apps[0];
                app.Application_Stage__c = 'Processed';
                appsToUpdate.add(app);
            }
        }
        
        if (!appsToUpdate.isEmpty()) {
            update appsToUpdate;
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        System.debug('Iterable batch completed');
    }
}

// Custom Iterable class
global class ApplicationNumberIterable implements Iterable<String> {
    
    global Iterator<String> Iterator() {
        return new ApplicationNumberIterator();
    }
}

// Custom Iterator class
global class ApplicationNumberIterator implements Iterator<String> {
    
    private List<String> appNumbers;
    private Integer index = 0;
    
    global ApplicationNumberIterator() {
        // Load application numbers from custom source
        appNumbers = new List<String>();
        
        // Example: Get from custom setting or external source
        List<Credit_Card_Application__c> apps = [
            SELECT Name FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Pending'
            LIMIT 10000
        ];
        
        for (Credit_Card_Application__c app : apps) {
            appNumbers.add(app.Name);
        }
    }
    
    global Boolean hasNext() {
        return index < appNumbers.size();
    }
    
    global String next() {
        if (hasNext()) {
            return appNumbers[index++];
        }
        return null;
    }
}`}}]}},{type:"accordion",accordionData:{title:"Scheduling Batches",content:[{type:"text",content:"Schedule batches to run automatically using the Schedulable interface and System.schedule() method. Use cron expressions for scheduling."},{type:"code",codeSnippet:{language:"apex",filename:"ScheduledBatchExample.cls",code:`global class ScheduledBatchExample implements Database.Batchable<SObject>, Schedulable {
    
    // Batchable methods
    global Database.QueryLocator start(Database.BatchableContext BC) {
        return Database.getQueryLocator([
            SELECT Id, Application_Stage__c
            FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Under Review'
        ]);
    }
    
    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        // Process records
        List<Credit_Card_Application__c> appsToUpdate = new List<Credit_Card_Application__c>();
        
        for (Credit_Card_Application__c app : scope) {
            // Business logic
            appsToUpdate.add(app);
        }
        
        if (!appsToUpdate.isEmpty()) {
            update appsToUpdate;
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        System.debug('Scheduled batch completed');
    }
    
    // Schedulable method - called by the scheduler
    global void execute(SchedulableContext SC) {
        // Execute the batch with custom scope size
        Database.executeBatch(new ScheduledBatchExample(), 200);
    }
}

// Schedule the batch
// Run this in Anonymous Apex or from a Setup class:
/*
// Schedule to run daily at 2 AM
String cronExpression = '0 0 2 * * ?'; // Seconds Minutes Hours Day_of_month Month Day_of_week Year(optional)
String jobName = 'Daily Application Review';
ScheduledBatchExample batch = new ScheduledBatchExample();
String jobId = System.schedule(jobName, cronExpression, batch);
System.debug('Scheduled job ID: ' + jobId);
*/

// Cron Expression Examples:
// '0 0 2 * * ?' - Daily at 2 AM
// '0 0 12 ? * MON-FRI' - Weekdays at noon
// '0 0 0 1 * ?' - First day of every month at midnight
// '0 0 0/2 * * ?' - Every 2 hours
// '0 0 0 ? * SUN' - Every Sunday at midnight`}}]}},{type:"accordion",accordionData:{title:"Governor Limits in Batches",content:[{type:"text",content:"Batch Apex has higher governor limits than synchronous Apex. Limits reset for each execute() call, but start() and finish() share limits."},{type:"code",codeSnippet:{language:"apex",filename:"BatchGovernorLimits.cls",code:`global class BatchGovernorLimits implements Database.Batchable<SObject> {
    
    global Database.QueryLocator start(Database.BatchableContext BC) {
        // START limits:
        // - 1 SOQL query (can return up to 10,000 records)
        // - 10,000 DML rows
        // - 10 minutes CPU time
        
        System.debug('Start - CPU Time: ' + Limits.getCpuTime());
        System.debug('Start - Queries: ' + Limits.getQueries());
        
        return Database.getQueryLocator([
            SELECT Id, Application_Stage__c, Annual_Income__c
            FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Under Review'
            LIMIT 10000
        ]);
    }
    
    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        // EXECUTE limits (reset for each batch):
        // - 200 SOQL queries
        // - 150 DML statements
        // - 50,000 DML rows
        // - 10 minutes CPU time
        // - 1,000,000 lines of code executed
        
        System.debug('Execute - CPU Time: ' + Limits.getCpuTime());
        System.debug('Execute - Queries: ' + Limits.getQueries() + '/' + Limits.getLimitQueries());
        System.debug('Execute - DML Statements: ' + Limits.getDmlStatements() + '/' + Limits.getLimitDmlStatements());
        System.debug('Execute - DML Rows: ' + Limits.getDmlRows() + '/' + Limits.getLimitDmlRows());
        
        // Monitor limits
        if (Limits.getCpuTime() > 9000) {
            System.debug('WARNING: Approaching CPU limit');
        }
        
        if (Limits.getQueries() > Limits.getLimitQueries() * 0.9) {
            System.debug('WARNING: Approaching SOQL query limit');
        }
        
        // Process records efficiently
        List<Credit_Card_Application__c> appsToUpdate = new List<Credit_Card_Application__c>();
        Set<Id> contactIds = new Set<Id>();
        
        // Collect IDs first
        for (Credit_Card_Application__c app : scope) {
            if (app.Applicant__c != null) {
                contactIds.add(app.Applicant__c);
            }
        }
        
        // Single query for related records
        Map<Id, Contact> contactsMap = new Map<Id, Contact>([
            SELECT Id, Email FROM Contact WHERE Id IN :contactIds
        ]);
        
        // Process with related data
        for (Credit_Card_Application__c app : scope) {
            Contact con = contactsMap.get(app.Applicant__c);
            
            if (app.Annual_Income__c > 100000) {
                app.Application_Stage__c = 'Approved';
                appsToUpdate.add(app);
            }
        }
        
        // Single DML operation
        if (!appsToUpdate.isEmpty()) {
            update appsToUpdate;
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        // FINISH limits (same as execute):
        // - 200 SOQL queries
        // - 150 DML statements
        // - 50,000 DML rows
        // - 10 minutes CPU time
        
        System.debug('Finish - CPU Time: ' + Limits.getCpuTime());
        System.debug('Finish - Queries: ' + Limits.getQueries());
        
        // Query job status
        AsyncApexJob job = [
            SELECT Id, Status, NumberOfErrors, JobItemsProcessed, 
                   TotalJobItems, CreatedDate, CompletedDate
            FROM AsyncApexJob
            WHERE Id = :BC.getJobId()
        ];
        
        System.debug('Job Status: ' + job.Status);
        System.debug('Processed: ' + job.JobItemsProcessed + '/' + job.TotalJobItems);
        System.debug('Errors: ' + job.NumberOfErrors);
    }
}`}}]}},{type:"accordion",accordionData:{title:"Batch Apex Best Practices",content:[{type:"text",content:"Follow these best practices to write efficient, maintainable batch classes."},{type:"list",items:["Use QueryLocator for SOQL queries (up to 10,000 records)","Use Iterable for custom data sources or complex logic","Set appropriate batch size (default 200, max 2,000)","Implement Database.Stateful only when needed (has performance cost)","Handle errors gracefully - don't let one record fail the batch","Use finish() for cleanup, notifications, and chaining","Monitor governor limits in execute() method","Avoid SOQL/DML in loops - bulkify operations","Test with various batch sizes and data volumes","Use Custom Settings to control batch execution","Log batch progress for debugging","Consider using Queueable for smaller, simpler async operations"]},{type:"code",codeSnippet:{language:"apex",filename:"BatchBestPractices.cls",code:`global class BatchBestPractices implements Database.Batchable<SObject> {
    
    // Best Practice 1: Use Custom Settings for control
    private Boolean isEnabled() {
        Batch_Settings__c settings = Batch_Settings__c.getInstance();
        return settings != null && settings.Enable_Batch__c == true;
    }
    
    // Best Practice 2: Configurable batch size
    private Integer getBatchSize() {
        Batch_Settings__c settings = Batch_Settings__c.getInstance();
        return (settings != null && settings.Batch_Size__c != null) 
            ? Integer.valueOf(settings.Batch_Size__c) 
            : 200; // Default
    }
    
    global Database.QueryLocator start(Database.BatchableContext BC) {
        if (!isEnabled()) {
            throw new BatchException('Batch is disabled via Custom Settings');
        }
        
        // Best Practice 3: Efficient query with only needed fields
        return Database.getQueryLocator([
            SELECT Id, Application_Stage__c, Annual_Income__c, Applicant__c
            FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Under Review'
            AND CreatedDate = LAST_N_DAYS:30
            ORDER BY CreatedDate ASC
        ]);
    }
    
    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        // Best Practice 4: Bulkify operations
        Set<Id> contactIds = new Set<Id>();
        for (Credit_Card_Application__c app : scope) {
            if (app.Applicant__c != null) {
                contactIds.add(app.Applicant__c);
            }
        }
        
        // Single query for all related records
        Map<Id, Contact> contactsMap = new Map<Id, Contact>([
            SELECT Id, Email FROM Contact WHERE Id IN :contactIds
        ]);
        
        // Best Practice 5: Collect updates, single DML
        List<Credit_Card_Application__c> appsToUpdate = new List<Credit_Card_Application__c>();
        
        for (Credit_Card_Application__c app : scope) {
            // Process with error handling
            try {
                if (app.Annual_Income__c > 100000) {
                    app.Application_Stage__c = 'Approved';
                    appsToUpdate.add(app);
                }
            } catch(Exception e) {
                // Best Practice 6: Log errors, don't fail batch
                System.debug('Error processing ' + app.Id + ': ' + e.getMessage());
            }
        }
        
        // Best Practice 7: Use Database methods with allOrNone=false
        if (!appsToUpdate.isEmpty()) {
            Database.SaveResult[] results = Database.update(appsToUpdate, false);
            
            // Check for partial failures
            for (Integer i = 0; i < results.size(); i++) {
                if (!results[i].isSuccess()) {
                    System.debug('Failed to update ' + appsToUpdate[i].Id);
                }
            }
        }
        
        // Best Practice 8: Monitor limits
        if (Limits.getCpuTime() > 9000) {
            System.debug('WARNING: High CPU usage');
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        // Best Practice 9: Query job status
        AsyncApexJob job = [
            SELECT Id, Status, NumberOfErrors, JobItemsProcessed, TotalJobItems
            FROM AsyncApexJob
            WHERE Id = :BC.getJobId()
        ];
        
        // Best Practice 10: Send notification on completion
        if (job.NumberOfErrors > 0) {
            sendErrorNotification(job);
        } else {
            sendSuccessNotification(job);
        }
    }
    
    private void sendErrorNotification(AsyncApexJob job) {
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setToAddresses(new String[] { UserInfo.getUserEmail() });
        mail.setSubject('Batch Completed with Errors');
        mail.setPlainTextBody('Batch processed ' + job.JobItemsProcessed + 
            ' items with ' + job.NumberOfErrors + ' errors.');
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
    }
    
    private void sendSuccessNotification(AsyncApexJob job) {
        System.debug('Batch completed successfully: ' + job.JobItemsProcessed + ' items processed');
    }
    
    public class BatchException extends Exception {}
}`}}]}}]},{id:"bulk-sharing-guide",title:"Deep Dive: Bulk Sharing",duration:"25 min",salesforceLink:"https://trailhead.salesforce.com/en/content/learn/modules/data_security/data_security_sharing_rules",content:[{type:"text",content:"Understanding Bulk Sharing is critical for scalability. Unlike standard DML, sharing requires special considerations around security (`with sharing`), duplication handling, and avoiding limits loop."},{type:"code",codeSnippet:{language:"apex",filename:"BulkSharingExample.cls",code:`public with sharing class BulkSharingExample {

    public static void addReadAccess(Set<Id> accountIds, Id userId) {
        // 1. Create a list to hold all new shares
        List<AccountShare> accountSharesToCreate = new List<AccountShare>();

        // 2. Loop through the records and create share objects
        for (Id accId : accountIds) {
            AccountShare newShare = new AccountShare();
            newShare.ParentId = accId;
            newShare.UserOrGroupId = userId;
            newShare.AccessLevel = 'Read';
            // It's best practice to explicitly set the RowCause.
            newShare.RowCause = Schema.AccountShare.RowCause.Manual;
            accountSharesToCreate.add(newShare);
        }

        // 3. Handle errors for duplicate shares or access issues.
        // false parameter allows partial success
        List<Database.SaveResult> srList = Database.insert(accountSharesToCreate, false);

        // 4. Iterate through results to log or handle errors.
        for (Integer i = 0; i < srList.size(); i++) {
            Database.SaveResult sr = srList[i];
            if (!sr.isSuccess()) {
                // Get the first error
                Database.Error err = sr.getErrors()[0];
                if (err.getStatusCode() == StatusCode.DUPLICATE_VALUE) {
                    System.debug('Share already exists for account: ' + accountSharesToCreate[i].ParentId);
                } else {
                    System.debug('Error creating share: ' + err.getMessage());
                }
            }
        }
    }
}`}},{type:"text",content:"Key Takeaways: Always use `with sharing` for security. Use `Database.insert(list, false)` to handle duplicate share errors gracefully without failing the entire transaction."},{type:"accordion",accordionData:{title:"Manual Sharing via UI",content:[{type:"text",content:"Manual sharing allows record owners to grant access to specific users or groups. This is done through the Salesforce UI on individual records."},{type:"list",items:["Navigate to the record you want to share",'Click the "Sharing" button (or "Share" in Lightning Experience)','Click "Add" to add users, roles, or groups',"Select the users/groups and set access level (Read Only or Read/Write)",'Click "Save" to apply the sharing']},{type:"code",codeSnippet:{language:"text",filename:"Manual Sharing Steps",code:`Steps to Manually Share a Record:

1. Open the Credit Card Application record
2. Click the "Sharing" button (top right in Classic, or in the record header in Lightning)
3. Click "Add" button
4. In the "Add Users, Roles, or Groups" dialog:
   - Search for users, roles, or public groups
   - Select the desired users/groups
   - Choose access level: "Read Only" or "Read/Write"
5. Click "Share" to save

Note: Manual sharing is only available when org-wide defaults are:
- Private
- Public Read Only`}}]}},{type:"accordion",accordionData:{title:"Manual Sharing via Apex",content:[{type:"text",content:"Programmatically create manual shares using Apex. This is essential for bulk operations and automated sharing logic."},{type:"code",codeSnippet:{language:"apex",filename:"ManualSharingApex.cls",code:`public with sharing class ManualSharingApex {
    
    // Share single record with single user
    public static void shareRecordWithUser(Id recordId, Id userId, String accessLevel) {
        Credit_Card_Application__Share appShare = new Credit_Card_Application__Share();
        appShare.ParentId = recordId;
        appShare.UserOrGroupId = userId;
        appShare.AccessLevel = accessLevel; // 'Read' or 'Edit'
        appShare.RowCause = Schema.Credit_Card_Application__Share.RowCause.Manual;
        
        try {
            insert appShare;
            System.debug('Successfully shared record ' + recordId + ' with user ' + userId);
        } catch(DmlException e) {
            if (e.getDmlType(0) == StatusCode.DUPLICATE_VALUE) {
                System.debug('Share already exists');
            } else {
                System.debug('Error creating share: ' + e.getMessage());
                throw e;
            }
        }
    }
    
    // Bulk share multiple records with multiple users
    public static void bulkShareRecords(
        List<Id> recordIds, 
        Set<Id> userIds, 
        String accessLevel
    ) {
        List<Credit_Card_Application__Share> sharesToCreate = new List<Credit_Card_Application__Share>();
        
        for (Id recordId : recordIds) {
            for (Id userId : userIds) {
                Credit_Card_Application__Share share = new Credit_Card_Application__Share();
                share.ParentId = recordId;
                share.UserOrGroupId = userId;
                share.AccessLevel = accessLevel;
                share.RowCause = Schema.Credit_Card_Application__Share.RowCause.Manual;
                sharesToCreate.add(share);
            }
        }
        
        if (!sharesToCreate.isEmpty()) {
            Database.SaveResult[] results = Database.insert(sharesToCreate, false);
            
            // Handle results
            Integer successCount = 0;
            Integer errorCount = 0;
            
            for (Integer i = 0; i < results.size(); i++) {
                Database.SaveResult result = results[i];
                if (result.isSuccess()) {
                    successCount++;
                } else {
                    errorCount++;
                    Database.Error error = result.getErrors()[0];
                    System.debug('Error sharing ' + sharesToCreate[i].ParentId + 
                        ' with ' + sharesToCreate[i].UserOrGroupId + ': ' + error.getMessage());
                }
            }
            
            System.debug('Bulk sharing complete: ' + successCount + ' successful, ' + errorCount + ' errors');
        }
    }
    
    // Share records based on criteria
    public static void shareApplicationsWithUnderwriters() {
        // Query applications that need sharing
        List<Credit_Card_Application__c> apps = [
            SELECT Id, OwnerId, Application_Stage__c
            FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Under Review'
            AND Id NOT IN (
                SELECT ParentId FROM Credit_Card_Application__Share
                WHERE RowCause = 'Manual'
            )
        ];
        
        // Query underwriter users
        List<User> underwriters = [
            SELECT Id FROM User
            WHERE Profile.Name LIKE '%Underwriter%'
            AND IsActive = true
        ];
        
        Set<Id> underwriterIds = new Set<Id>();
        for (User u : underwriters) {
            underwriterIds.add(u.Id);
        }
        
        // Bulk share
        List<Id> appIds = new List<Id>();
        for (Credit_Card_Application__c app : apps) {
            appIds.add(app.Id);
        }
        
        bulkShareRecords(appIds, underwriterIds, 'Edit');
    }
}`}}]}},{type:"accordion",accordionData:{title:"Sharing Rules: Owner-Based",content:[{type:"text",content:"Owner-based sharing rules automatically share records owned by specific users with other users or groups. These are configured in Setup > Sharing Settings."},{type:"code",codeSnippet:{language:"text",filename:"Owner-Based Sharing Rule Setup",code:`Setup Steps for Owner-Based Sharing Rule:

1. Navigate to Setup > Sharing Settings
2. Select the object (e.g., Credit_Card_Application__c)
3. Click "New" in the Sharing Rules section
4. Configure the rule:
   - Rule Label: "Share Applications with Underwriters"
   - Rule Name: Auto-populated
   - Rule Type: "Based on record owner"
   - Select which records to share:
     * Category: "Public Groups"
     * Value: "All Internal Users" (or specific group)
   - Select users to share with:
     * "Underwriters" public group
   - Access Level: "Read/Write" or "Read Only"
5. Click "Save"

Example Rule:
- Share records owned by: "All Internal Users"
- Share with: "Underwriters" public group
- Access Level: "Read/Write"`}},{type:"code",codeSnippet:{language:"apex",filename:"SharingRuleHelper.cls",code:`public class SharingRuleHelper {
    
    // Query sharing rules programmatically
    public static void querySharingRules() {
        // Note: Sharing rules are metadata, not data
        // Use Metadata API or Tooling API to query them
        
        // Example: Check if manual shares exist (which sharing rules create)
        List<Credit_Card_Application__Share> shares = [
            SELECT Id, ParentId, UserOrGroupId, AccessLevel, RowCause
            FROM Credit_Card_Application__Share
            WHERE RowCause = 'Rule'
            LIMIT 100
        ];
        
        System.debug('Found ' + shares.size() + ' rule-based shares');
        
        for (Credit_Card_Application__Share share : shares) {
            System.debug('Record: ' + share.ParentId + 
                ', Shared with: ' + share.UserOrGroupId + 
                ', Access: ' + share.AccessLevel);
        }
    }
}`}}]}},{type:"accordion",accordionData:{title:"Sharing Rules: Criteria-Based",content:[{type:"text",content:"Criteria-based sharing rules share records that meet specific field criteria with users or groups. More flexible than owner-based rules."},{type:"code",codeSnippet:{language:"text",filename:"Criteria-Based Sharing Rule Setup",code:`Setup Steps for Criteria-Based Sharing Rule:

1. Navigate to Setup > Sharing Settings
2. Select the object (e.g., Credit_Card_Application__c)
3. Click "New" in the Sharing Rules section
4. Configure the rule:
   - Rule Label: "Share High Value Applications"
   - Rule Type: "Based on criteria"
   - Criteria:
     * Field: "Annual_Income__c"
     * Operator: "greater than"
     * Value: "100000"
   - Select users to share with:
     * "Senior Underwriters" public group
   - Access Level: "Read/Write"
5. Click "Save"

Example Rule:
- Share records where: Annual_Income__c > 100000
- Share with: "Senior Underwriters" public group
- Access Level: "Read/Write"

Note: Criteria-based rules can use:
- Field comparisons (equals, not equals, greater than, etc.)
- Multiple criteria with AND/OR logic
- Date fields with relative values (LAST_N_DAYS, NEXT_N_DAYS, etc.)`}}]}},{type:"accordion",accordionData:{title:"Public Groups",content:[{type:"text",content:"Public groups are collections of users, roles, territories, or other groups. They simplify sharing rule management by grouping users with common access needs."},{type:"code",codeSnippet:{language:"text",filename:"Public Group Setup",code:`Setup Steps for Public Group:

1. Navigate to Setup > Public Groups
2. Click "New"
3. Enter Group Label: "Underwriters"
4. Group Name: Auto-populated
5. Add members:
   - Click "Add Members"
   - Select member types:
     * Individual Users
     * Roles (e.g., "Senior Underwriter" role)
     * Roles and Subordinates (includes all users in role hierarchy)
     * Other Public Groups
   - Select specific users/roles/groups
6. Click "Save"

Example Public Group: "Underwriters"
Members:
- Role: "Senior Underwriter" (and subordinates)
- Role: "Underwriter" (and subordinates)
- Individual User: "John Doe"
- Public Group: "Credit Card Team"

Use Cases:
- Simplify sharing rule creation
- Group users with similar access needs
- Easier maintenance than individual user selection`}},{type:"code",codeSnippet:{language:"apex",filename:"PublicGroupHelper.cls",code:`public class PublicGroupHelper {
    
    // Query public group members
    public static Set<Id> getPublicGroupMemberIds(String groupName) {
        Set<Id> memberIds = new Set<Id>();
        
        // Query the group
        List<Group> groups = [
            SELECT Id FROM Group
            WHERE Name = :groupName
            AND Type = 'Regular'
            LIMIT 1
        ];
        
        if (groups.isEmpty()) {
            System.debug('Public group not found: ' + groupName);
            return memberIds;
        }
        
        Id groupId = groups[0].Id;
        
        // Query group members (users)
        List<GroupMember> groupMembers = [
            SELECT UserOrGroupId FROM GroupMember
            WHERE GroupId = :groupId
        ];
        
        for (GroupMember gm : groupMembers) {
            memberIds.add(gm.UserOrGroupId);
        }
        
        // Also check for nested groups
        for (GroupMember gm : groupMembers) {
            // Check if this is a nested group
            List<Group> nestedGroups = [
                SELECT Id FROM Group
                WHERE Id = :gm.UserOrGroupId
                AND Type = 'Regular'
            ];
            
            if (!nestedGroups.isEmpty()) {
                // Recursively get nested group members
                memberIds.addAll(getNestedGroupMembers(gm.UserOrGroupId));
            }
        }
        
        return memberIds;
    }
    
    private static Set<Id> getNestedGroupMembers(Id groupId) {
        Set<Id> memberIds = new Set<Id>();
        
        List<GroupMember> members = [
            SELECT UserOrGroupId FROM GroupMember
            WHERE GroupId = :groupId
        ];
        
        for (GroupMember gm : members) {
            memberIds.add(gm.UserOrGroupId);
        }
        
        return memberIds;
    }
    
    // Share records with public group
    public static void shareWithPublicGroup(List<Id> recordIds, String groupName, String accessLevel) {
        Set<Id> groupMemberIds = getPublicGroupMemberIds(groupName);
        
        if (groupMemberIds.isEmpty()) {
            System.debug('No members found in group: ' + groupName);
            return;
        }
        
        // Use bulk sharing method
        ManualSharingApex.bulkShareRecords(
            recordIds, 
            groupMemberIds, 
            accessLevel
        );
    }
}`}}]}},{type:"accordion",accordionData:{title:"Advanced: Custom Object Sharing (Upsert)",content:[{type:"text",content:"When managing shares for Custom Objects, using `Database.upsert` is a powerful pattern. It allows you to either create a new share or update an existing one (e.g., changing AccessLevel) in a single operation, without needing to query first."},{type:"code",codeSnippet:{language:"apex",filename:"CustomProjectSharing.cls",code:`public with sharing class CustomProjectSharing {
    
    public static void shareProjects(List<Project__c> projects, Map<Id, String> userAccessLevelMap) {
        List<Project__Share> sharesToUpsert = new List<Project__Share>();
        
        for (Project__c proj : projects) {
            for (Id userId : userAccessLevelMap.keySet()) {
                Project__Share share = new Project__Share();
                share.ParentId = proj.Id;
                share.UserOrGroupId = userId;
                share.AccessLevel = userAccessLevelMap.get(userId); // e.g., 'Edit', 'Read'
                
                // RowCause is crucial for distinguishing Manual shares from others
                // Only 'Manual' RowCause shares can be updated by this type of logic typically
                share.RowCause = Schema.Project__Share.RowCause.Manual;
                
                sharesToUpsert.add(share);
            }
        }
        
        if (!sharesToUpsert.isEmpty()) {
            // Upsert based on ParentId + UserOrGroupId to handle updates efficiently
            // This prevents "Duplicate Value" errors and updates access levels if a share exists
            Database.UpsertResult[] results = Database.upsert(sharesToUpsert, false);
            
            for(Database.UpsertResult res : results) {
                if(!res.isSuccess()) {
                    System.debug('Sharing Upsert Failed: ' + res.getErrors()[0].getMessage());
                }
            }
        }
    }
}`}}]}},{type:"accordion",accordionData:{title:"Batch Sharing for Large Volumes",content:[{type:"text",content:"Use Batch Apex to share large numbers of records efficiently, avoiding governor limits and processing timeouts."},{type:"code",codeSnippet:{language:"apex",filename:"BatchSharingService.cls",code:`global class BatchSharingService implements Database.Batchable<SObject> {
    
    private Set<Id> userIdsToShareWith;
    private String accessLevel;
    
    public BatchSharingService(Set<Id> userIds, String accessLevel) {
        this.userIdsToShareWith = userIds;
        this.accessLevel = accessLevel;
    }
    
    global Database.QueryLocator start(Database.BatchableContext BC) {
        // Query records that need sharing
        return Database.getQueryLocator([
            SELECT Id, OwnerId
            FROM Credit_Card_Application__c
            WHERE Application_Stage__c = 'Under Review'
            AND Id NOT IN (
                SELECT ParentId FROM Credit_Card_Application__Share
                WHERE UserOrGroupId IN :userIdsToShareWith
                AND RowCause = 'Manual'
            )
        ]);
    }
    
    global void execute(Database.BatchableContext BC, List<Credit_Card_Application__c> scope) {
        List<Credit_Card_Application__Share> sharesToCreate = new List<Credit_Card_Application__Share>();
        
        for (Credit_Card_Application__c app : scope) {
            for (Id userId : userIdsToShareWith) {
                // Skip if owner is the same as user
                if (app.OwnerId != userId) {
                    Credit_Card_Application__Share share = new Credit_Card_Application__Share();
                    share.ParentId = app.Id;
                    share.UserOrGroupId = userId;
                    share.AccessLevel = accessLevel;
                    share.RowCause = Schema.Credit_Card_Application__Share.RowCause.Manual;
                    sharesToCreate.add(share);
                }
            }
        }
        
        if (!sharesToCreate.isEmpty()) {
            Database.SaveResult[] results = Database.insert(sharesToCreate, false);
            
            Integer successCount = 0;
            Integer errorCount = 0;
            
            for (Integer i = 0; i < results.size(); i++) {
                if (results[i].isSuccess()) {
                    successCount++;
                } else {
                    errorCount++;
                    Database.Error error = results[i].getErrors()[0];
                    if (error.getStatusCode() != StatusCode.DUPLICATE_VALUE) {
                        System.debug('Error: ' + error.getMessage());
                    }
                }
            }
            
            System.debug('Batch sharing: ' + successCount + ' created, ' + errorCount + ' errors');
        }
    }
    
    global void finish(Database.BatchableContext BC) {
        System.debug('Batch sharing completed');
    }
}

// Usage:
// Set<Id> underwriterIds = new Set<Id>{userId1, userId2};
// Database.executeBatch(new BatchSharingService(underwriterIds, 'Edit'), 200);`}}]}},{type:"accordion",accordionData:{title:"Sharing Recalculation",content:[{type:"text",content:"When sharing rules or role hierarchies change, Salesforce recalculates sharing. You can also manually trigger recalculation for specific records or users."},{type:"code",codeSnippet:{language:"text",filename:"Sharing Recalculation Steps",code:`Manual Sharing Recalculation:

1. Navigate to Setup > Sharing Settings
2. Select the object
3. Click "Recalculate" button
4. Choose recalculation scope:
   - "All records" - Recalculates all records (can take time)
   - "Specific records" - Recalculates selected records
   - "Specific users" - Recalculates sharing for selected users

Note: Recalculation is automatic when:
- Sharing rules are created/modified
- Role hierarchy changes
- Territory model changes
- User roles change

Programmatic Recalculation:
- Use Apex Sharing Recalculation API
- Available in API version 40.0 and later
- Can be resource-intensive for large orgs`}},{type:"code",codeSnippet:{language:"apex",filename:"SharingRecalculationHelper.cls",code:`public class SharingRecalculationHelper {
    
    // Recalculate sharing for specific records
    public static void recalculateSharingForRecords(List<Id> recordIds) {
        // Note: This requires API version 40.0+
        // Use Database.recalculateSharing() method
        
        try {
            Database.recalculateSharing(recordIds);
            System.debug('Sharing recalculation initiated for ' + recordIds.size() + ' records');
        } catch(Exception e) {
            System.debug('Error recalculating sharing: ' + e.getMessage());
        }
    }
    
    // Recalculate sharing for specific users
    public static void recalculateSharingForUsers(List<Id> userIds) {
        try {
            Database.recalculateSharing(userIds);
            System.debug('Sharing recalculation initiated for ' + userIds.size() + ' users');
        } catch(Exception e) {
            System.debug('Error recalculating sharing: ' + e.getMessage());
        }
    }
    
    // Check if sharing recalculation is needed
    public static Boolean isRecalculationNeeded(Id recordId) {
        // Query sharing rules to see if they match current data
        Credit_Card_Application__c app = [
            SELECT Id, OwnerId, Application_Stage__c, Annual_Income__c
            FROM Credit_Card_Application__c
            WHERE Id = :recordId
            LIMIT 1
        ];
        
        // Check if criteria-based sharing rules should apply
        // This is a simplified check - actual logic depends on your rules
        if (app.Annual_Income__c > 100000) {
            // High value application - check if sharing exists
            List<Credit_Card_Application__Share> shares = [
                SELECT Id FROM Credit_Card_Application__Share
                WHERE ParentId = :recordId
                AND RowCause = 'Rule'
                LIMIT 1
            ];
            
            return shares.isEmpty(); // Recalculation needed if no rule-based shares exist
        }
        
        return false;
    }
}`}}]}},{type:"accordion",accordionData:{title:"Bulk Sharing Best Practices",content:[{type:"text",content:"Follow these best practices to ensure efficient and secure bulk sharing operations."},{type:"list",items:["Always use `with sharing` keyword for security context","Use `Database.insert(list, false)` to handle partial failures","Check for duplicate shares before creating (or handle DUPLICATE_VALUE errors)","Use Batch Apex for sharing more than 10,000 records","Set RowCause explicitly (Manual, Rule, etc.)","Query existing shares to avoid duplicates","Use public groups instead of individual users when possible","Monitor sharing table size (sharing records count toward data storage)","Use sharing rules instead of manual sharing when criteria are predictable","Recalculate sharing after role hierarchy or rule changes","Test with bulk data (200+ records)","Log errors but don't fail entire batch on single share failure"]},{type:"code",codeSnippet:{language:"apex",filename:"BulkSharingBestPractices.cls",code:`public with sharing class BulkSharingBestPractices {
    
    // Best Practice: Check for existing shares before creating
    public static void shareRecordsEfficiently(
        List<Id> recordIds, 
        Set<Id> userIds, 
        String accessLevel
    ) {
        // Query existing shares to avoid duplicates
        Set<String> existingShareKeys = new Set<String>();
        
        List<Credit_Card_Application__Share> existingShares = [
            SELECT ParentId, UserOrGroupId
            FROM Credit_Card_Application__Share
            WHERE ParentId IN :recordIds
            AND UserOrGroupId IN :userIds
            AND RowCause = 'Manual'
        ];
        
        for (Credit_Card_Application__Share share : existingShares) {
            String key = share.ParentId + '_' + share.UserOrGroupId;
            existingShareKeys.add(key);
        }
        
        // Create only new shares
        List<Credit_Card_Application__Share> sharesToCreate = new List<Credit_Card_Application__Share>();
        
        for (Id recordId : recordIds) {
            for (Id userId : userIds) {
                String key = recordId + '_' + userId;
                
                if (!existingShareKeys.contains(key)) {
                    Credit_Card_Application__Share share = new Credit_Card_Application__Share();
                    share.ParentId = recordId;
                    share.UserOrGroupId = userId;
                    share.AccessLevel = accessLevel;
                    share.RowCause = Schema.Credit_Card_Application__Share.RowCause.Manual;
                    sharesToCreate.add(share);
                }
            }
        }
        
        // Bulk insert with error handling
        if (!sharesToCreate.isEmpty()) {
            Database.SaveResult[] results = Database.insert(sharesToCreate, false);
            
            Integer successCount = 0;
            Integer duplicateCount = 0;
            Integer errorCount = 0;
            
            for (Integer i = 0; i < results.size(); i++) {
                Database.SaveResult result = results[i];
                if (result.isSuccess()) {
                    successCount++;
                } else {
                    Database.Error error = result.getErrors()[0];
                    if (error.getStatusCode() == StatusCode.DUPLICATE_VALUE) {
                        duplicateCount++;
                    } else {
                        errorCount++;
                        System.debug('Error: ' + error.getMessage());
                    }
                }
            }
            
            System.debug('Sharing Results: ' + successCount + ' created, ' + 
                duplicateCount + ' duplicates, ' + errorCount + ' errors');
        }
    }
    
    // Best Practice: Remove shares when no longer needed
    public static void removeShares(List<Id> recordIds, Set<Id> userIds) {
        List<Credit_Card_Application__Share> sharesToDelete = [
            SELECT Id FROM Credit_Card_Application__Share
            WHERE ParentId IN :recordIds
            AND UserOrGroupId IN :userIds
            AND RowCause = 'Manual'
        ];
        
        if (!sharesToDelete.isEmpty()) {
            delete sharesToDelete;
            System.debug('Removed ' + sharesToDelete.size() + ' shares');
        }
    }
    
    // Best Practice: Update access levels efficiently
    public static void updateAccessLevels(
        List<Id> recordIds, 
        Set<Id> userIds, 
        String newAccessLevel
    ) {
        // Query existing shares
        List<Credit_Card_Application__Share> existingShares = [
            SELECT Id, AccessLevel FROM Credit_Card_Application__Share
            WHERE ParentId IN :recordIds
            AND UserOrGroupId IN :userIds
            AND RowCause = 'Manual'
        ];
        
        // Update access levels
        List<Credit_Card_Application__Share> sharesToUpdate = new List<Credit_Card_Application__Share>();
        
        for (Credit_Card_Application__Share share : existingShares) {
            if (share.AccessLevel != newAccessLevel) {
                share.AccessLevel = newAccessLevel;
                sharesToUpdate.add(share);
            }
        }
        
        if (!sharesToUpdate.isEmpty()) {
            update sharesToUpdate;
            System.debug('Updated ' + sharesToUpdate.size() + ' share access levels');
        }
    }
}`}}]}}]}]},{id:"module-4",title:"Integration & CDC",icon:"share-2",lessons:[{id:"cdc",title:"Change Data Capture",duration:"15 min",salesforceLink:"https://developer.salesforce.com/docs/atlas.en-us.change_data_capture.meta/change_data_capture",content:[{type:"text",content:"Using Change Data Capture (CDC) to synchronize credit card data with external systems in real-time. Change Data Capture publishes change events for record creation, updates, deletion, and undeletion."},{type:"accordion",accordionData:{title:"Scenario 1: Subscribing to Change Events (Platform Event Trigger)",content:[{type:"text",content:"Subscribe to CDC events using a Platform Event trigger. This is the most common pattern for processing CDC events in Apex."},{type:"code",codeSnippet:{language:"apex",filename:"CreditCardApplicationChangeEventTrigger.trigger",code:`trigger CreditCardApplicationChangeEventTrigger on Credit_Card_Application__ChangeEvent (after insert) {
    CDCEventProcessor.processApplicationEvents(Trigger.new);
}`}},{type:"code",codeSnippet:{language:"apex",filename:"CDCEventProcessor.cls",code:`public without sharing class CDCEventProcessor {
    
    public static void processApplicationEvents(List<Credit_Card_Application__ChangeEvent> events) {
        List<Credit_Card_Application__ChangeEvent> createEvents = new List<Credit_Card_Application__ChangeEvent>();
        List<Credit_Card_Application__ChangeEvent> updateEvents = new List<Credit_Card_Application__ChangeEvent>();
        List<Credit_Card_Application__ChangeEvent> deleteEvents = new List<Credit_Card_Application__ChangeEvent>();
        List<Credit_Card_Application__ChangeEvent> undeleteEvents = new List<Credit_Card_Application__ChangeEvent>();
        
        // Categorize events by change type
        for(Credit_Card_Application__ChangeEvent event : events) {
            EventBus.ChangeEventHeader header = event.ChangeEventHeader;
            
            switch on header.changeType {
                when 'CREATE' {
                    createEvents.add(event);
                }
                when 'UPDATE' {
                    updateEvents.add(event);
                }
                when 'DELETE' {
                    deleteEvents.add(event);
                }
                when 'UNDELETE' {
                    undeleteEvents.add(event);
                }
            }
        }
        
        // Process each type of event
        if(!createEvents.isEmpty()) handleCreateEvents(createEvents);
        if(!updateEvents.isEmpty()) handleUpdateEvents(updateEvents);
        if(!deleteEvents.isEmpty()) handleDeleteEvents(deleteEvents);
        if(!undeleteEvents.isEmpty()) handleUndeleteEvents(undeleteEvents);
    }
    
    private static void handleCreateEvents(List<Credit_Card_Application__ChangeEvent> events) {
        // Handle new record creation
        for(Credit_Card_Application__ChangeEvent event : events) {
            System.debug('New application created: ' + event.Application_Number__c);
            // Sync to external system
            // ExternalSystemIntegrationService.createApplication(event);
        }
    }
    
    private static void handleUpdateEvents(List<Credit_Card_Application__ChangeEvent> events) {
        // Handle record updates
        for(Credit_Card_Application__ChangeEvent event : events) {
            EventBus.ChangeEventHeader header = event.ChangeEventHeader;
            
            // Check if stage changed to Approved
            if(event.Application_Stage__c == 'Approved') {
                System.debug('Application approved: ' + event.Application_Number__c);
                // Trigger downstream integration
                List<String> recordIds = header.recordIds;
                // ExternalSystemIntegrationService.syncApprovedApplications(recordIds);
            }
        }
    }
    
    private static void handleDeleteEvents(List<Credit_Card_Application__ChangeEvent> events) {
        // Handle record deletions
        for(Credit_Card_Application__ChangeEvent event : events) {
            EventBus.ChangeEventHeader header = event.ChangeEventHeader;
            System.debug('Application deleted: ' + header.recordIds);
            // Archive in external system
            // ExternalSystemIntegrationService.deleteApplication(header.recordIds);
        }
    }
    
    private static void handleUndeleteEvents(List<Credit_Card_Application__ChangeEvent> events) {
        // Handle record undeletions
        for(Credit_Card_Application__ChangeEvent event : events) {
            System.debug('Application undeleted: ' + event.Application_Number__c);
            // Restore in external system
            // ExternalSystemIntegrationService.undeleteApplication(event);
        }
    }
}`}}]}},{type:"accordion",accordionData:{title:"Scenario 2: Handling CREATE Events",content:[{type:"text",content:"When a new record is created, CDC publishes a CREATE event. Use this to sync new records to external systems immediately."},{type:"code",codeSnippet:{language:"apex",filename:"CDCCreateHandler.cls",code:`public class CDCCreateHandler {
    
    public static void handleCreateEvents(List<Credit_Card_Application__ChangeEvent> events) {
        List<Integration_Log__c> logs = new List<Integration_Log__c>();
        
        for(Credit_Card_Application__ChangeEvent event : events) {
            EventBus.ChangeEventHeader header = event.ChangeEventHeader;
            
            try {
                // Extract record data
                Map<String, Object> recordData = new Map<String, Object>{
                    'Application_Number__c' => event.Application_Number__c,
                    'Applicant__c' => event.Applicant__c,
                    'Requested_Card_Product__c' => event.Requested_Card_Product__c,
                    'Annual_Income__c' => event.Annual_Income__c,
                    'Application_Stage__c' => event.Application_Stage__c,
                    'CreatedDate' => header.commitTimestamp
                };
                
                // Callout to external system
                HttpRequest req = new HttpRequest();
                req.setEndpoint('https://external-system.com/api/applications');
                req.setMethod('POST');
                req.setHeader('Content-Type', 'application/json');
                req.setBody(JSON.serialize(recordData));
                
                Http http = new Http();
                HttpResponse res = http.send(req);
                
                if(res.getStatusCode() == 200 || res.getStatusCode() == 201) {
                    System.debug('Successfully synced application: ' + event.Application_Number__c);
                } else {
                    // Log error
                    logs.add(createErrorLog(event, res.getBody()));
                }
                
            } catch(Exception e) {
                logs.add(createErrorLog(event, e.getMessage()));
            }
        }
        
        if(!logs.isEmpty()) {
            insert logs;
        }
    }
    
    private static Integration_Log__c createErrorLog(Credit_Card_Application__ChangeEvent event, String error) {
        return new Integration_Log__c(
            Record_ID__c = event.Id,
            Error_Message__c = error,
            Event_Type__c = 'CREATE',
            Status__c = 'Failed'
        );
    }
}`}}]}},{type:"accordion",accordionData:{title:"Scenario 3: Handling UPDATE Events with Field Changes",content:[{type:"text",content:"UPDATE events include changed fields. Use the changedFields property to identify which fields were modified and process only relevant changes."},{type:"code",codeSnippet:{language:"apex",filename:"CDCUpdateHandler.cls",code:`public class CDCUpdateHandler {
    
    public static void handleUpdateEvents(List<Credit_Card_Application__ChangeEvent> events) {
        for(Credit_Card_Application__ChangeEvent event : events) {
            EventBus.ChangeEventHeader header = event.ChangeEventHeader;
            
            // Check which fields changed
            Set<String> changedFields = header.changedFields;
            
            // Only process if critical fields changed
            if(changedFields.contains('Application_Stage__c')) {
                handleStageChange(event, header);
            }
            
            if(changedFields.contains('Approved_Credit_Limit__c')) {
                handleCreditLimitChange(event, header);
            }
            
            if(changedFields.contains('Risk_Score__c')) {
                handleRiskScoreChange(event, header);
            }
        }
    }
    
    private static void handleStageChange(Credit_Card_Application__ChangeEvent event, EventBus.ChangeEventHeader header) {
        if(event.Application_Stage__c == 'Approved') {
            // Notify external system of approval
            Map<String, Object> payload = new Map<String, Object>{
                'applicationId' => header.recordIds[0],
                'stage' => event.Application_Stage__c,
                'approvedLimit' => event.Approved_Credit_Limit__c,
                'timestamp' => header.commitTimestamp
            };
            
            // Make callout to external system
            makeCallout('POST', '/api/applications/approve', payload);
        }
    }
    
    private static void handleCreditLimitChange(Credit_Card_Application__ChangeEvent event, EventBus.ChangeEventHeader header) {
        // Sync credit limit changes to external system
        Map<String, Object> payload = new Map<String, Object>{
            'applicationId' => header.recordIds[0],
            'creditLimit' => event.Approved_Credit_Limit__c,
            'timestamp' => header.commitTimestamp
        };
        
        makeCallout('PATCH', '/api/applications/credit-limit', payload);
    }
    
    private static void handleRiskScoreChange(Credit_Card_Application__ChangeEvent event, EventBus.ChangeEventHeader header) {
        // Update risk score in external system
        Map<String, Object> payload = new Map<String, Object>{
            'applicationId' => header.recordIds[0],
            'riskScore' => event.Risk_Score__c,
            'timestamp' => header.commitTimestamp
        };
        
        makeCallout('PATCH', '/api/applications/risk-score', payload);
    }
    
    private static void makeCallout(String method, String endpoint, Map<String, Object> payload) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://external-system.com' + endpoint);
        req.setMethod(method);
        req.setHeader('Content-Type', 'application/json');
        req.setBody(JSON.serialize(payload));
        req.setTimeout(12000);
        
        Http http = new Http();
        HttpResponse res = http.send(req);
        
        System.debug('Callout response: ' + res.getStatusCode() + ' - ' + res.getBody());
    }
}`}}]}},{type:"accordion",accordionData:{title:"Scenario 4: Handling DELETE and UNDELETE Events",content:[{type:"text",content:"DELETE events occur when records are deleted. UNDELETE events occur when records are restored from the Recycle Bin. Handle both to keep external systems synchronized."},{type:"code",codeSnippet:{language:"apex",filename:"CDCDeleteHandler.cls",code:`public class CDCDeleteHandler {
    
    public static void handleDeleteEvents(List<Credit_Card_Application__ChangeEvent> events) {
        List<String> deletedRecordIds = new List<String>();
        
        for(Credit_Card_Application__ChangeEvent event : events) {
            EventBus.ChangeEventHeader header = event.ChangeEventHeader;
            deletedRecordIds.addAll(header.recordIds);
        }
        
        if(!deletedRecordIds.isEmpty()) {
            // Archive records in external system
            archiveInExternalSystem(deletedRecordIds);
        }
    }
    
    public static void handleUndeleteEvents(List<Credit_Card_Application__ChangeEvent> events) {
        List<String> undeletedRecordIds = new List<String>();
        
        for(Credit_Card_Application__ChangeEvent event : events) {
            EventBus.ChangeEventHeader header = event.ChangeEventHeader;
            undeletedRecordIds.addAll(header.recordIds);
            
            // Restore record data
            Map<String, Object> recordData = new Map<String, Object>{
                'Application_Number__c' => event.Application_Number__c,
                'Application_Stage__c' => event.Application_Stage__c,
                'Annual_Income__c' => event.Annual_Income__c
            };
            
            restoreInExternalSystem(header.recordIds[0], recordData);
        }
    }
    
    private static void archiveInExternalSystem(List<String> recordIds) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://external-system.com/api/applications/archive');
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/json');
        req.setBody(JSON.serialize(new Map<String, Object>{
            'recordIds' => recordIds,
            'archivedAt' => Datetime.now().formatGmt('yyyy-MM-dd'T'HH:mm:ss.SSS'Z'')
        }));
        
        Http http = new Http();
        HttpResponse res = http.send(req);
        
        if(res.getStatusCode() == 200) {
            System.debug('Successfully archived ' + recordIds.size() + ' records');
        }
    }
    
    private static void restoreInExternalSystem(String recordId, Map<String, Object> recordData) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://external-system.com/api/applications/' + recordId + '/restore');
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/json');
        req.setBody(JSON.serialize(recordData));
        
        Http http = new Http();
        HttpResponse res = http.send(req);
        
        if(res.getStatusCode() == 200) {
            System.debug('Successfully restored record: ' + recordId);
        }
    }
}`}}]}},{type:"accordion",accordionData:{title:"Scenario 5: Handling Merged Change Events",content:[{type:"text",content:"Salesforce may merge multiple change events into one if the same change occurred in multiple records of the same object type within one second. Check the recordIds array to handle multiple records."},{type:"code",codeSnippet:{language:"apex",filename:"CDCMergedEventHandler.cls",code:`public class CDCMergedEventHandler {
    
    public static void handleMergedEvents(List<Credit_Card_Application__ChangeEvent> events) {
        for(Credit_Card_Application__ChangeEvent event : events) {
            EventBus.ChangeEventHeader header = event.ChangeEventHeader;
            
            // Check if this is a merged event (multiple record IDs)
            if(header.recordIds != null && header.recordIds.size() > 1) {
                System.debug('Processing merged event with ' + header.recordIds.size() + ' records');
                
                // Process each record ID in the merged event
                for(String recordId : header.recordIds) {
                    processMergedRecord(recordId, event, header);
                }
            } else {
                // Single record event - process normally
                processSingleRecord(event, header);
            }
        }
    }
    
    private static void processMergedRecord(String recordId, Credit_Card_Application__ChangeEvent event, EventBus.ChangeEventHeader header) {
        // For merged events, you may need to query the actual record
        // since the event object may not contain all record data
        try {
            Credit_Card_Application__c app = [
                SELECT Id, Application_Number__c, Application_Stage__c, 
                       Approved_Credit_Limit__c, Annual_Income__c
                FROM Credit_Card_Application__c
                WHERE Id = :recordId
                LIMIT 1
            ];
            
            // Process the individual record
            Map<String, Object> payload = new Map<String, Object>{
                'recordId' => recordId,
                'applicationNumber' => app.Application_Number__c,
                'stage' => app.Application_Stage__c,
                'changeType' => header.changeType,
                'timestamp' => header.commitTimestamp
            };
            
            syncToExternalSystem(payload);
            
        } catch(Exception e) {
            System.debug('Error processing merged record ' + recordId + ': ' + e.getMessage());
        }
    }
    
    private static void processSingleRecord(Credit_Card_Application__ChangeEvent event, EventBus.ChangeEventHeader header) {
        // Standard single record processing
        Map<String, Object> payload = new Map<String, Object>{
            'recordId' => header.recordIds[0],
            'applicationNumber' => event.Application_Number__c,
            'stage' => event.Application_Stage__c,
            'changeType' => header.changeType,
            'timestamp' => header.commitTimestamp
        };
        
        syncToExternalSystem(payload);
    }
    
    private static void syncToExternalSystem(Map<String, Object> payload) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://external-system.com/api/applications/sync');
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/json');
        req.setBody(JSON.serialize(payload));
        
        Http http = new Http();
        HttpResponse res = http.send(req);
        
        System.debug('Sync response: ' + res.getStatusCode());
    }
}`}}]}},{type:"accordion",accordionData:{title:"Scenario 6: Handling Gap and Overflow Events",content:[{type:"text",content:"Gap events indicate missing change events. Overflow events occur during high load. Handle these special event types to ensure data consistency."},{type:"code",codeSnippet:{language:"apex",filename:"CDCGapOverflowHandler.cls",code:`public class CDCGapOverflowHandler {
    
    public static void handleSpecialEvents(List<Credit_Card_Application__ChangeEvent> events) {
        for(Credit_Card_Application__ChangeEvent event : events) {
            EventBus.ChangeEventHeader header = event.ChangeEventHeader;
            
            // Check for gap events (indicates missing change events)
            if(header.replayId != null && isGapEvent(header)) {
                handleGapEvent(header);
            }
            
            // Check for overflow events (high load scenario)
            if(isOverflowEvent(header)) {
                handleOverflowEvent(header);
            }
        }
    }
    
    private static Boolean isGapEvent(EventBus.ChangeEventHeader header) {
        // Gap events typically have specific characteristics
        // You may need to compare replayIds or check for gap indicators
        // This is a simplified check - adjust based on your implementation
        return header.replayId != null && header.replayId.contains('GAP');
    }
    
    private static Boolean isOverflowEvent(EventBus.ChangeEventHeader header) {
        // Overflow events occur during high load
        // Check for overflow indicators in the header
        return header.replayId != null && header.replayId.contains('OVERFLOW');
    }
    
    private static void handleGapEvent(EventBus.ChangeEventHeader header) {
        System.debug('Gap event detected - missing change events may have occurred');
        
        // Query for records that may have been missed
        // Use the commitTimestamp to identify the time range
        Datetime gapStartTime = header.commitTimestamp.addMinutes(-5);
        Datetime gapEndTime = header.commitTimestamp;
        
        List<Credit_Card_Application__c> missedRecords = [
            SELECT Id, Application_Number__c, Application_Stage__c,
                   LastModifiedDate, CreatedDate
            FROM Credit_Card_Application__c
            WHERE LastModifiedDate >= :gapStartTime
            AND LastModifiedDate <= :gapEndTime
            ORDER BY LastModifiedDate ASC
        ];
        
        System.debug('Found ' + missedRecords.size() + ' records that may have been missed');
        
        // Sync these records to external system
        for(Credit_Card_Application__c app : missedRecords) {
            syncMissedRecord(app);
        }
    }
    
    private static void handleOverflowEvent(EventBus.ChangeEventHeader header) {
        System.debug('Overflow event detected - high load scenario');
        
        // During overflow, you may want to:
        // 1. Use batch processing instead of real-time sync
        // 2. Increase retry logic
        // 3. Log for later processing
        
        Integration_Log__c log = new Integration_Log__c(
            Event_Type__c = 'OVERFLOW',
            Status__c = 'Pending',
            Error_Message__c = 'High load detected - batch processing recommended',
            Timestamp__c = header.commitTimestamp
        );
        
        insert log;
        
        // Optionally, queue a batch job to process overflow events
        // System.enqueueJob(new CDCOverflowProcessor(log.Id));
    }
    
    private static void syncMissedRecord(Credit_Card_Application__c app) {
        Map<String, Object> payload = new Map<String, Object>{
            'recordId' => app.Id,
            'applicationNumber' => app.Application_Number__c,
            'stage' => app.Application_Stage__c,
            'lastModified' => app.LastModifiedDate.formatGmt('yyyy-MM-dd'T'HH:mm:ss.SSS'Z''),
            'isGapRecovery' => true
        };
        
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://external-system.com/api/applications/sync');
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/json');
        req.setBody(JSON.serialize(payload));
        
        Http http = new Http();
        HttpResponse res = http.send(req);
        
        System.debug('Gap recovery sync: ' + res.getStatusCode());
    }
}`}}]}},{type:"accordion",accordionData:{title:"Scenario 7: Monitoring CDC Usage with PlatformEventUsageMetric",content:[{type:"text",content:"Query PlatformEventUsageMetric to monitor event publishing and delivery usage. This helps track CDC performance and identify potential issues."},{type:"code",codeSnippet:{language:"apex",filename:"CDCUsageMonitor.cls",code:`public class CDCUsageMonitor {
    
    // Query usage metrics for the last 24 hours
    public static void checkRecentUsage() {
        Datetime endTime = Datetime.now();
        Datetime startTime = endTime.addHours(-24);
        
        List<PlatformEventUsageMetric> metrics = [
            SELECT Id, EventType, DailyEventUsage, DailyEventUsageLastUpdated,
                   HourlyEventUsage, HourlyEventUsageLastUpdated
            FROM PlatformEventUsageMetric
            WHERE EventType LIKE '%ChangeEvent%'
            AND DailyEventUsageLastUpdated >= :startTime
            ORDER BY DailyEventUsageLastUpdated DESC
            LIMIT 100
        ];
        
        System.debug('Found ' + metrics.size() + ' usage metric records');
        
        for(PlatformEventUsageMetric metric : metrics) {
            System.debug('Event Type: ' + metric.EventType);
            System.debug('Daily Usage: ' + metric.DailyEventUsage);
            System.debug('Hourly Usage: ' + metric.HourlyEventUsage);
            System.debug('Last Updated: ' + metric.DailyEventUsageLastUpdated);
            
            // Check if usage is approaching limits
            if(metric.DailyEventUsage > 1000000) {
                System.debug('WARNING: High daily usage detected for ' + metric.EventType);
            }
        }
    }
    
    // Get usage metrics for a specific time range
    public static Map<String, Integer> getUsageByEventType(Datetime startTime, Datetime endTime) {
        Map<String, Integer> usageMap = new Map<String, Integer>();
        
        List<PlatformEventUsageMetric> metrics = [
            SELECT EventType, DailyEventUsage
            FROM PlatformEventUsageMetric
            WHERE EventType LIKE '%ChangeEvent%'
            AND DailyEventUsageLastUpdated >= :startTime
            AND DailyEventUsageLastUpdated <= :endTime
        ];
        
        for(PlatformEventUsageMetric metric : metrics) {
            String eventType = metric.EventType;
            Integer currentUsage = usageMap.containsKey(eventType) 
                ? usageMap.get(eventType) 
                : 0;
            usageMap.put(eventType, currentUsage + Integer.valueOf(metric.DailyEventUsage));
        }
        
        return usageMap;
    }
    
    // Monitor and alert on high usage
    public static void monitorAndAlert() {
        Map<String, Integer> usage = getUsageByEventType(
            Datetime.now().addHours(-1),
            Datetime.now()
        );
        
        for(String eventType : usage.keySet()) {
            Integer eventCount = usage.get(eventType);
            
            // Alert if more than 100k events in the last hour
            if(eventCount > 100000) {
                sendAlert('High CDC usage detected', 
                    'Event Type: ' + eventType + ', Count: ' + eventCount);
            }
        }
    }
    
    private static void sendAlert(String subject, String message) {
        // Send email or create a case
        Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
        email.setSubject(subject);
        email.setPlainTextBody(message);
        email.setToAddresses(new String[] { UserInfo.getUserEmail() });
        
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { email });
    }
}`}}]}},{type:"accordion",accordionData:{title:"Scenario 8: CometD Client Subscription (JavaScript)",content:[{type:"text",content:"Subscribe to CDC events from a JavaScript client using CometD. This is useful for real-time updates in web applications."},{type:"code",codeSnippet:{language:"javascript",filename:"cdc-subscriber.js",code:`// CometD client subscription for Change Data Capture
import { LightningElement, wire } from 'lwc';
import { subscribe, unsubscribe, onError } from 'lightning/empApi';

export default class CDCSubscriber extends LightningElement {
    subscription = {};
    channel = '/data/Credit_Card_Application__ChangeEvent';

    connectedCallback() {
        this.registerErrorListener();
        this.subscribeToCDC();
    }

    disconnectedCallback() {
        this.unsubscribeFromCDC();
    }

    // Subscribe to CDC events
    subscribeToCDC() {
        const messageCallback = (response) => {
            console.log('CDC Event received:', JSON.stringify(response));
            
            const event = response.data.payload;
            const header = event.ChangeEventHeader;
            
            // Handle different change types
            switch(header.changeType) {
                case 'CREATE':
                    this.handleCreate(event);
                    break;
                case 'UPDATE':
                    this.handleUpdate(event);
                    break;
                case 'DELETE':
                    this.handleDelete(event);
                    break;
                case 'UNDELETE':
                    this.handleUndelete(event);
                    break;
            }
        };

        subscribe(this.channel, -1, messageCallback).then(response => {
            console.log('Subscription request sent to: ', JSON.stringify(response.channel));
            this.subscription = response;
        });
    }

    // Unsubscribe from CDC events
    unsubscribeFromCDC() {
        unsubscribe(this.subscription, response => {
            console.log('Unsubscribed from channel: ', JSON.stringify(response.channel));
        });
    }

    // Register error listener
    registerErrorListener() {
        onError(error => {
            console.log('Received error from server: ', JSON.stringify(error));
        });
    }

    handleCreate(event) {
        console.log('New application created:', event.Application_Number__c);
        // Update UI or call Apex method
        this.dispatchEvent(new CustomEvent('cdccreate', {
            detail: { record: event }
        }));
    }

    handleUpdate(event) {
        const header = event.ChangeEventHeader;
        const changedFields = header.changedFields || [];
        
        console.log('Application updated:', event.Application_Number__c);
        console.log('Changed fields:', changedFields);
        
        if(changedFields.includes('Application_Stage__c') && 
           event.Application_Stage__c === 'Approved') {
            console.log('Application approved!');
            this.dispatchEvent(new CustomEvent('cdcapprove', {
                detail: { record: event }
            }));
        }
    }

    handleDelete(event) {
        const header = event.ChangeEventHeader;
        console.log('Application deleted:', header.recordIds);
        this.dispatchEvent(new CustomEvent('cdcdelete', {
            detail: { recordIds: header.recordIds }
        }));
    }

    handleUndelete(event) {
        console.log('Application undeleted:', event.Application_Number__c);
        this.dispatchEvent(new CustomEvent('cdcundelete', {
            detail: { record: event }
        }));
    }
}`}}]}},{type:"accordion",accordionData:{title:"Scenario 9: Error Handling and Retry Logic",content:[{type:"text",content:"Implement robust error handling and retry logic for CDC event processing to ensure reliability when external systems are unavailable."},{type:"code",codeSnippet:{language:"apex",filename:"CDCRetryHandler.cls",code:`public class CDCRetryHandler {
    
    private static final Integer MAX_RETRIES = 3;
    private static final Integer RETRY_DELAY_SECONDS = 60;
    
    public static void processWithRetry(List<Credit_Card_Application__ChangeEvent> events) {
        List<CDC_Retry_Queue__c> retryQueue = new List<CDC_Retry_Queue__c>();
        
        for(Credit_Card_Application__ChangeEvent event : events) {
            try {
                processEvent(event);
            } catch(CalloutException e) {
                // Network error - add to retry queue
                retryQueue.add(createRetryRecord(event, e.getMessage()));
            } catch(Exception e) {
                // Other errors - log but don't retry
                logError(event, e);
            }
        }
        
        if(!retryQueue.isEmpty()) {
            insert retryQueue;
        }
    }
    
    private static void processEvent(Credit_Card_Application__ChangeEvent event) {
        EventBus.ChangeEventHeader header = event.ChangeEventHeader;
        
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://external-system.com/api/applications');
        req.setMethod('POST');
        req.setHeader('Content-Type', 'application/json');
        req.setBody(JSON.serialize(createPayload(event, header)));
        req.setTimeout(12000);
        
        Http http = new Http();
        HttpResponse res = http.send(req);
        
        if(res.getStatusCode() >= 400) {
            throw new CalloutException('HTTP Error: ' + res.getStatusCode() + ' - ' + res.getBody());
        }
    }
    
    private static CDC_Retry_Queue__c createRetryRecord(
        Credit_Card_Application__ChangeEvent event, 
        String errorMessage
    ) {
        EventBus.ChangeEventHeader header = event.ChangeEventHeader;
        
        return new CDC_Retry_Queue__c(
            Record_ID__c = header.recordIds != null && !header.recordIds.isEmpty() 
                ? header.recordIds[0] 
                : null,
            Event_Data__c = JSON.serialize(event),
            Error_Message__c = errorMessage,
            Retry_Count__c = 0,
            Next_Retry_Time__c = Datetime.now().addSeconds(RETRY_DELAY_SECONDS),
            Status__c = 'Pending'
        );
    }
    
    // Batch job to retry failed events
    public class CDCRetryBatch implements Database.Batchable<SObject> {
        public Database.QueryLocator start(Database.BatchableContext BC) {
            return Database.getQueryLocator([
                SELECT Id, Record_ID__c, Event_Data__c, Error_Message__c,
                       Retry_Count__c, Next_Retry_Time__c
                FROM CDC_Retry_Queue__c
                WHERE Status__c = 'Pending'
                AND Next_Retry_Time__c <= :Datetime.now()
                AND Retry_Count__c < :MAX_RETRIES
            ]);
        }
        
        public void execute(Database.BatchableContext BC, List<CDC_Retry_Queue__c> scope) {
            List<CDC_Retry_Queue__c> toUpdate = new List<CDC_Retry_Queue__c>();
            
            for(CDC_Retry_Queue__c retryRecord : scope) {
                try {
                    // Deserialize and process the event
                    Credit_Card_Application__ChangeEvent event = 
                        (Credit_Card_Application__ChangeEvent) JSON.deserialize(
                            retryRecord.Event_Data__c, 
                            Credit_Card_Application__ChangeEvent.class
                        );
                    
                    processEvent(event);
                    
                    // Success - mark as completed
                    retryRecord.Status__c = 'Completed';
                    retryRecord.Completed_At__c = Datetime.now();
                    
                } catch(Exception e) {
                    // Failed again - increment retry count
                    retryRecord.Retry_Count__c++;
                    retryRecord.Error_Message__c = e.getMessage();
                    
                    if(retryRecord.Retry_Count__c < MAX_RETRIES) {
                        // Schedule next retry with exponential backoff
                        Integer delaySeconds = RETRY_DELAY_SECONDS * 
                            (Integer)Math.pow(2, retryRecord.Retry_Count__c);
                        retryRecord.Next_Retry_Time__c = Datetime.now().addSeconds(delaySeconds);
                    } else {
                        // Max retries reached - mark as failed
                        retryRecord.Status__c = 'Failed';
                        retryRecord.Failed_At__c = Datetime.now();
                    }
                }
                
                toUpdate.add(retryRecord);
            }
            
            update toUpdate;
        }
        
        public void finish(Database.BatchableContext BC) {
            // Optionally send notification of completion
        }
    }
    
    private static Map<String, Object> createPayload(
        Credit_Card_Application__ChangeEvent event,
        EventBus.ChangeEventHeader header
    ) {
        return new Map<String, Object>{
            'recordId' => header.recordIds != null && !header.recordIds.isEmpty() 
                ? header.recordIds[0] 
                : null,
            'changeType' => header.changeType,
            'applicationNumber' => event.Application_Number__c,
            'stage' => event.Application_Stage__c,
            'timestamp' => header.commitTimestamp.formatGmt('yyyy-MM-dd'T'HH:mm:ss.SSS'Z'')
        };
    }
    
    private static void logError(Credit_Card_Application__ChangeEvent event, Exception e) {
        Integration_Log__c log = new Integration_Log__c(
            Record_ID__c = event.Id,
            Error_Message__c = e.getMessage(),
            Stack_Trace__c = e.getStackTraceString(),
            Event_Type__c = 'ERROR',
            Status__c = 'Failed'
        );
        insert log;
    }
}`}}]}}]}]},{id:"module-5",title:"Testing & QA",icon:"shield",lessons:[{id:"testing",title:"Unit Testing",duration:"20 min",salesforceLink:"https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing.htm",content:[{type:"text",content:"Comprehensive Unit Tests are required to deploy logic to production. We ensure 100% coverage by testing Single, Bulk, Disabled, and Error scenarios."},{type:"accordion",accordionData:{title:"Trigger Handler Tests",content:[{type:"code",codeSnippet:{language:"apex",filename:"CreditCardApplicationTriggerHandlerTest.cls",code:`@isTest
public class CreditCardApplicationTriggerHandlerTest {

    @testSetup
    static void setupData() {
        // Create base data for all tests
        Account acc = new Account(Name = 'Test Account');
        insert acc;
        
        Contact con = new Contact(
            LastName = 'Test', 
            AccountId = acc.Id, 
            Email='test@example.com'
        );
        insert con;
        
        Credit_Card_Product__c prod = new Credit_Card_Product__c(
            Name = 'Test Card',
            Product_Code__c = 'TEST-001',
            Minimum_Credit_Limit__c = 1000,
            Maximum_Credit_Limit__c = 50000,
            Is_Active__c = true
        );
        insert prod;
    }

    private static void configureSettings(Boolean disableTrigger, Integer bulkThreshold) {
        // Helper to insert Custom Settings
        Trigger_Settings__c settings = new Trigger_Settings__c(
            SetupOwnerId = UserInfo.getOrganizationId(),
            Disable_Triggers_For_Data_Load__c = disableTrigger,
            Allowed_Bulk_Operation_Size__c = bulkThreshold
        );
        insert settings;
    }

    @isTest
    static void testSingleInsert_Positive() {
        // Test Single Record Logic path
        configureSettings(false, 10);
        Contact con = [SELECT Id FROM Contact LIMIT 1];
        Credit_Card_Product__c prod = [SELECT Id FROM Credit_Card_Product__c LIMIT 1];

        Credit_Card_Application__c app = new Credit_Card_Application__c(
            Applicant__c = con.Id,
            Requested_Card_Product__c = prod.Id,
            Annual_Income__c = 60000,
            Application_Stage__c = 'New'
        );

        Test.startTest();
        insert app;
        Test.stopTest();

        // Verify Risk Score calculated (Logic ran)
        Credit_Card_Application__c result = [SELECT Risk_Score__c FROM Credit_Card_Application__c WHERE Id = :app.Id];
        System.assertEquals(750, result.Risk_Score__c, 'Risk score should be 750 for high income');
    }

    @isTest
    static void testBulkInsert_Positive() {
        // Test Bulk Logic path (Threshold = 5, Records = 10)
        configureSettings(false, 5);
        Contact con = [SELECT Id FROM Contact LIMIT 1];
        Credit_Card_Product__c prod = [SELECT Id FROM Credit_Card_Product__c LIMIT 1];

        List<Credit_Card_Application__c> apps = new List<Credit_Card_Application__c>();
        for(Integer i=0; i<10; i++) {
            apps.add(new Credit_Card_Application__c(
                Applicant__c = con.Id,
                Requested_Card_Product__c = prod.Id,
                Annual_Income__c = 60000,
                Application_Stage__c = 'New'
            ));
        }

        Test.startTest();
        insert apps;
        Test.stopTest();

        List<Credit_Card_Application__c> results = [SELECT Risk_Score__c FROM Credit_Card_Application__c];
        System.assertEquals(10, results.size());
        for(Credit_Card_Application__c r : results) {
            System.assertEquals(750, r.Risk_Score__c, 'Bulk processing should calculate scores');
        }
    }

    @isTest
    static void testTriggerDisabled() {
        // Test Trigger Bypass via Custom Setting
        configureSettings(true, 10); 
        Contact con = [SELECT Id FROM Contact LIMIT 1];
        Credit_Card_Product__c prod = [SELECT Id FROM Credit_Card_Product__c LIMIT 1];

        Credit_Card_Application__c app = new Credit_Card_Application__c(
            Applicant__c = con.Id,
            Requested_Card_Product__c = prod.Id,
            Annual_Income__c = 60000,
            Application_Stage__c = 'New'
        );

        Test.startTest();
        insert app;
        Test.stopTest();

        // Logic should NOT run
        Credit_Card_Application__c result = [SELECT Risk_Score__c FROM Credit_Card_Application__c WHERE Id = :app.Id];
        System.assertEquals(null, result.Risk_Score__c, 'Trigger logic should be skipped');
    }

    @isTest
    static void testValidationLogic() {
        // Test Business Logic Validation
        configureSettings(false, 10);
        Contact con = [SELECT Id FROM Contact LIMIT 1];
        Credit_Card_Product__c prod = [SELECT Id FROM Credit_Card_Product__c LIMIT 1];

        Credit_Card_Application__c app = new Credit_Card_Application__c(
            Applicant__c = con.Id,
            Requested_Card_Product__c = prod.Id,
            Annual_Income__c = 5000, // Below 10k limit
            Application_Stage__c = 'New'
        );

        Test.startTest();
        try {
            insert app;
            System.assert(false, 'Should have thrown exception');
        } catch(DmlException e) {
            System.assert(e.getMessage().contains('Minimum income requirement'), 'Expected validation error');
        }
        Test.stopTest();
    }

    @isTest
    static void testExceptionHandling_SingleInsert() {
        // Test Exception Handling in Single Path
        configureSettings(false, 10);
        Contact con = [SELECT Id FROM Contact LIMIT 1];
        Credit_Card_Product__c prod = [SELECT Id FROM Credit_Card_Product__c LIMIT 1];

        Credit_Card_Application__c app = new Credit_Card_Application__c(
            Applicant__c = con.Id,
            Requested_Card_Product__c = prod.Id,
            Annual_Income__c = 60000
        );

        // Force Exception via TestVisible flag
        CreditCardApplicationTriggerHandler.throwTestException = true;

        Test.startTest();
        try {
            insert app;
            System.assert(false, 'Should have caught exception and added error');
        } catch(Exception e) {
            System.assert(e.getMessage().contains('Unable to process application'), 'Expected user friendly error');
        }
        Test.stopTest();
    }

    @isTest
    static void testExceptionHandling_BulkInsert() {
        // Test Exception Handling in Bulk Path
        configureSettings(false, 5); // Force bulk
        Contact con = [SELECT Id FROM Contact LIMIT 1];
        Credit_Card_Product__c prod = [SELECT Id FROM Credit_Card_Product__c LIMIT 1];

        List<Credit_Card_Application__c> apps = new List<Credit_Card_Application__c>();
        for(Integer i=0; i<10; i++) {
            apps.add(new Credit_Card_Application__c(
                Applicant__c = con.Id,
                Requested_Card_Product__c = prod.Id,
                Annual_Income__c = 60000
            ));
        }

        CreditCardApplicationTriggerHandler.throwTestException = true;

        Test.startTest();
        try {
            insert apps;
            System.assert(false, 'Should have caught exception');
        } catch(Exception e) {
            // Bulk errors usually come back as DmlExceptions on the list
            System.assert(e.getMessage().contains('System error'), 'Expected bulk system error message');
        }
        Test.stopTest();
    }

    @isTest
    static void testBulkUpdate_Positive() {
        // Test Bulk Update Logic
        configureSettings(false, 5);
        Contact con = [SELECT Id FROM Contact LIMIT 1];
        Credit_Card_Product__c prod = [SELECT Id FROM Credit_Card_Product__c LIMIT 1];

        List<Credit_Card_Application__c> apps = new List<Credit_Card_Application__c>();
        for(Integer i=0; i<10; i++) {
            apps.add(new Credit_Card_Application__c(
                Applicant__c = con.Id,
                Requested_Card_Product__c = prod.Id,
                Annual_Income__c = 60000,
                Application_Stage__c = 'New'
            ));
        }
        insert apps;

        for(Credit_Card_Application__c a : apps) {
            a.Application_Stage__c = 'Under Review';
        }

        Test.startTest();
        update apps;
        Test.stopTest();
        
        // Verify no errors (implied by success)
    }
    
    @isTest
    static void testApprovedProcessing() {
        // Test After Update Logic (Approval Process)
        configureSettings(false, 10);
        Contact con = [SELECT Id FROM Contact LIMIT 1];
        Credit_Card_Product__c prod = [SELECT Id FROM Credit_Card_Product__c LIMIT 1];
        
        Credit_Card_Application__c app = new Credit_Card_Application__c(
            Applicant__c = con.Id,
            Requested_Card_Product__c = prod.Id,
            Annual_Income__c = 60000,
            Application_Stage__c = 'Under Review'
        );
        insert app;
        
        Test.startTest();
        app.Application_Stage__c = 'Approved';
        update app;
        Test.stopTest();
        
        // Logic would enqueue job here, we just ensure no errors
    }
}`}}]}},{type:"accordion",accordionData:{title:"Batch Apex Tests",content:[{type:"text",content:"Testing Batch Apex requires `Test.startTest()` and `Test.stopTest()` to force asynchronous execution. We also verify the `Schedulable` interface."},{type:"code",codeSnippet:{language:"apex",filename:"DailyCreditLimitReviewBatchTest.cls",code:`@isTest
public class DailyCreditLimitReviewBatchTest {

    @testSetup
    static void setupData() {
        // Create a mix of applications for testing
        List<Credit_Card_Application__c> apps = new List<Credit_Card_Application__c>();
        
        // 1. Target for Approval: Under Review + High Income + Recent
        apps.add(new Credit_Card_Application__c(
            Annual_Income__c = 150000, // > 100k
            Application_Stage__c = 'Under Review'
            // CreatedDate will be today by default
        ));

        // 2. Ignore: Low Income
        apps.add(new Credit_Card_Application__c(
            Annual_Income__c = 50000, // < 100k
            Application_Stage__c = 'Under Review'
        ));

        // 3. Ignore: Wrong Stage
        apps.add(new Credit_Card_Application__c(
            Annual_Income__c = 200000,
            Application_Stage__c = 'New'
        ));

        insert apps;
    }

    @isTest
    static void testBatchExecution() {
        Test.startTest();
        // Execute the batch
        DailyCreditLimitReviewBatch batch = new DailyCreditLimitReviewBatch();
        Database.executeBatch(batch);
        Test.stopTest();

        // Verify Results
        List<Credit_Card_Application__c> results = [SELECT Annual_Income__c, Application_Stage__c FROM Credit_Card_Application__c];
        
        for(Credit_Card_Application__c app : results) {
            if (app.Annual_Income__c == 150000) {
                System.assertEquals('Approved', app.Application_Stage__c, 'High income app should be approved');
            } else {
                System.assertNotEquals('Approved', app.Application_Stage__c, 'Other apps should not be auto-approved');
            }
        }
    }

    @isTest
    static void testSchedulable() {
        String cronExp = '0 0 0 15 3 ? 2099';
        
        Test.startTest();
        String jobId = System.schedule('TestLimitReview', cronExp, new DailyCreditLimitReviewBatch());
        Test.stopTest();
        
        // Verify job was scheduled
        CronTrigger ct = [SELECT Id, CronExpression, TimesTriggered, NextFireTime FROM CronTrigger WHERE Id = :jobId];
        System.assertEquals(cronExp, ct.CronExpression);
        System.assertEquals(0, ct.TimesTriggered);
    }
}`}}]}}]}]},{id:"module-6",title:"Advanced Integration Patterns",icon:"settings",lessons:[{id:"sap-identity",title:"SAP Identity Management",duration:"20 min",salesforceLink:"https://devcenter.heroku.com/articles/heroku-connect",content:[{type:"text",content:'Integrating Salesforce with SAP for Identity Management is a common enterprise requirement. The "UserOrGroupId" field in Share objects effectively acts as the "foreign key" linking record access to Users.'},{type:"accordion",accordionData:{title:"Option 1: Bulk Apex Sharing (LDAP)",content:[{type:"text",content:"Use Bulk Apex to sync LDAP groups to Salesforce groups and apply sharing. This is scalable and governor-limit friendly."},{type:"code",codeSnippet:{language:"apex",filename:"LDAPSharingService.cls",code:`public with sharing class LDAPSharingService {
    public static void syncLDAPGroupSharing(Map<String, List<Id>> ldapGroupToAccountIds) {
        // Map LDAP Groups to Salesforce Public Groups
        Map<String, Id> ldapGroupToSFGroup = getOrCreatePublicGroups(ldapGroupToAccountIds.keySet());
        List<AccountShare> allShares = new List<AccountShare>();
        
        for (String ldapGroup : ldapGroupToAccountIds.keySet()) {
            Id sfGroupId = ldapGroupToSFGroup.get(ldapGroup);
            for(Id accId : ldapGroupToAccountIds.get(ldapGroup)) {
                AccountShare share = new AccountShare();
                share.ParentId = accId;
                share.UserOrGroupId = sfGroupId;
                share.AccessLevel = 'Read';
                share.RowCause = Schema.AccountShare.RowCause.Manual;
                allShares.add(share);
            }
        }
        
        if (!allShares.isEmpty()) {
            Database.insert(allShares, false);
        }
    }
}`}}]}},{type:"accordion",accordionData:{title:"Option 2: Heroku Connect",content:[{type:"text",content:"For bi-directional, real-time synchronization of thousands of users without code, Heroku Connect is the recommended middleware."},{type:"list",items:["Syncs SAP tables to Heroku Postgres","Automatically syncs Postgres to Salesforce Objects","Handles millions of records without Apex limits","Supports data transformation via SQL or Python"]}]}}]},{id:"heroku-etl",title:"Heroku vs. Apex for ETL",duration:"15 min",salesforceLink:"https://devcenter.heroku.com/categories/heroku-architecture",content:[{type:"text",content:"For heavy data loads (ETL), Heroku often outperforms Apex Batch due to lack of governor limits on CPU time and heap size."},{type:"table",tableData:{headers:["Feature","Apex Batch","Heroku ETL"],rows:[["Data Volume","Max ~50M, Slow","Unlimited, Fast"],["Memory Limit","6MB Heap","GBs of RAM"],["External Calls","100 per tx","Unlimited"],["Complex Logic","Restricted","Full Python/Node/Java"]]}},{type:"text",content:"Example Python ETL script running on Heroku:"},{type:"code",codeSnippet:{language:"text",filename:"heroku_etl.py",code:`def migrate_all_customers():
    print("🚀 Starting bulk migration from SAP to Salesforce")
    
    # EXTRACT from SAP
    sap_customers = sap_service.get_all_customers()
    
    # TRANSFORM (Complex Logic)
    transformed = []
    for customer in sap_customers:
        # Complex transformations that would break Apex Heap
        sf_customer = transform_complex_logic(customer)
        transformed.append(sf_customer)
    
    # LOAD via Bulk API 2.0
    results = sf_bulk.insert('Account', transformed)
    print("✅ Migration Completed")`}}]}]},{id:"module-7",title:"Modern UI Development (LWC)",icon:"monitor",lessons:[{id:"lwc-basics",title:"Application Form Component",duration:"25 min",salesforceLink:"https://trailhead.salesforce.com/en/content/learn/modules/lightning-web-components-basics",content:[{type:"text",content:"Lightning Web Components (LWC) provide the standard modern interface. Here we build a custom application form that interacts with our Apex backend."},{type:"accordion",accordionData:{title:"HTML Template (applicationForm.html)",content:[{type:"code",codeSnippet:{language:"text",filename:"applicationForm.html",code:`<template>
    <lightning-card title="Apply for Credit Card" icon-name="custom:custom14">
        <div class="slds-p-around_medium">
            <!-- Loading Spinner -->
            <template if:true={isLoading}>
                <lightning-spinner alternative-text="Loading" size="medium"></lightning-spinner>
            </template>

            <!-- Input Form -->
            <lightning-record-edit-form object-api-name="Credit_Card_Application__c" onsuccess={handleSuccess} onsubmit={handleSubmit}>
                <lightning-messages></lightning-messages>
                <div class="slds-grid slds-gutters">
                    <div class="slds-col">
                        <lightning-input-field field-name="Applicant__c" value={applicantId}></lightning-input-field>
                        <lightning-input-field field-name="Annual_Income__c"></lightning-input-field>
                    </div>
                    <div class="slds-col">
                        <lightning-input-field field-name="Requested_Card_Product__c"></lightning-input-field>
                        <lightning-input-field field-name="Employment_Status__c"></lightning-input-field>
                    </div>
                </div>
                <div class="slds-m-top_medium slds-align_absolute-center">
                    <lightning-button variant="brand" type="submit" label="Submit Application"></lightning-button>
                </div>
            </lightning-record-edit-form>
        </div>
    </lightning-card>
</template>`}}]}},{type:"accordion",accordionData:{title:"JavaScript Controller (applicationForm.js)",content:[{type:"code",codeSnippet:{language:"javascript",filename:"applicationForm.js",code:`import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ApplicationForm extends LightningElement {
    @api applicantId; // Passed from parent or record page
    isLoading = false;

    handleSubmit(event) {
        event.preventDefault(); // Stop default submit to validate
        const fields = event.detail.fields;
        
        // Custom Client-Side Validation
        if(fields.Annual_Income__c < 10000) {
            this.showToast('Error', 'Income must be at least $10,000', 'error');
            return;
        }
        
        this.isLoading = true;
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

    handleSuccess(event) {
        this.isLoading = false;
        const appId = event.detail.id;
        this.showToast('Success', 'Application ' + appId + ' created!', 'success');
        
        // Reset form
        const inputFields = this.template.querySelectorAll('lightning-input-field');
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({
            title, message, variant
        }));
    }
}`}}]}}]}]},{id:"module-8",title:"DevOps & ALM",icon:"settings",lessons:[{id:"cicd",title:"CI/CD Pipeline",duration:"15 min",salesforceLink:"https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm",content:[{type:"text",content:"Modern Salesforce development requires robust ALM (Application Lifecycle Management). We use SFDX and GitHub Actions to automate deployments."},{type:"accordion",accordionData:{title:"Project Manifest (sfdx-project.json)",content:[{type:"code",codeSnippet:{language:"json",filename:"sfdx-project.json",code:`{
  "packageDirectories": [
    {
      "path": "force-app",
      "default": true,
      "package": "AwesomeBankCreditCards",
      "versionName": "Ver 1.0",
      "versionNumber": "1.0.0.NEXT"
    }
  ],
  "namespace": "",
  "sfdcLoginUrl": "https://login.salesforce.com",
  "sourceApiVersion": "58.0"
}`}}]}},{type:"accordion",accordionData:{title:"GitHub Action Workflow (deploy.yml)",content:[{type:"code",codeSnippet:{language:"yaml",filename:".github/workflows/deploy.yml",code:`name: Deploy to Production

on:
  push:
    branches: [ "main" ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Install Salesforce CLI
        run: npm install @salesforce/cli --global

      - name: Authenticate using JWT
        run: |
          echo "\${{ secrets.JWT_KEY_FILE }}" > server.key
          sf org login jwt --client-id \${{ secrets.CONSUMER_KEY }} --username \${{ secrets.USERNAME }} --jwt-key-file server.key --set-default --alias prod

      - name: Deploy Source
        run: sf project deploy start --target-org prod --wait 10

      - name: Run All Tests
        run: sf apex run test --target-org prod --test-level RunLocalTests --wait 10`}}]}}]}]},{id:"module-9",title:"Observability",icon:"monitor",lessons:[{id:"logging",title:"Enterprise Logging Framework",duration:"20 min",salesforceLink:"https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events",content:[{type:"text",content:"Debug logs are transient. For enterprise reliability, we need persistent logs that survive transaction rollbacks. We achieve this using Platform Events."},{type:"accordion",accordionData:{title:"Logger Utility Class",content:[{type:"code",codeSnippet:{language:"apex",filename:"Logger.cls",code:`public class Logger {
    // Buffer logs to avoid hitting limits
    private static List<Log_Event__e> logBuffer = new List<Log_Event__e>();

    public static void error(String message, Exception e) {
        logBuffer.add(new Log_Event__e(
            Level__c = 'ERROR',
            Message__c = message,
            Stack_Trace__c = e != null ? e.getStackTraceString() : null,
            User__c = UserInfo.getUserId()
        ));
        publish();
    }

    public static void info(String message) {
        logBuffer.add(new Log_Event__e(
            Level__c = 'INFO',
            Message__c = message,
            User__c = UserInfo.getUserId()
        ));
        publish();
    }

    private static void publish() {
        // Publish immediately - Platform Events persist even if the main transaction fails!
        if (!logBuffer.isEmpty()) {
            EventBus.publish(logBuffer);
            logBuffer.clear();
        }
    }
}`}}]}},{type:"text",content:"This `Logger` class publishes to a `Log_Event__e` Platform Event. A separate `Async Trigger` on this event then saves the data to a custom `Log__c` object for long-term storage and reporting."}]}]}],ah=()=>{const[A,w]=bt.useState(xl[0].lessons[0].id),[z,p]=bt.useState(new Set),[O,N]=bt.useState(!1),G=()=>{for(const M of xl){const Y=M.lessons.find(ee=>ee.id===A);if(Y)return Y}return xl[0].lessons[0]},H=()=>{const M=new Set(z);M.has(A)?M.delete(A):M.add(A),p(M)},x=()=>{const M=xl.flatMap(ee=>ee.lessons),Y=M.findIndex(ee=>ee.id===A);Y<M.length-1&&(w(M[Y+1].id),window.scrollTo(0,0))},C=()=>{const M=xl.flatMap(ee=>ee.lessons);return M.findIndex(ee=>ee.id===A)<M.length-1},Q=G();return E.jsxs("div",{className:"flex min-h-screen bg-white",children:[E.jsxs("div",{className:"lg:hidden fixed top-0 left-0 right-0 h-16 bg-brand-700 z-50 flex items-center px-4 justify-between text-white shadow-md",children:[E.jsx("span",{className:"font-bold text-lg",children:"AwesomeBank"}),E.jsx("button",{onClick:()=>N(!O),children:O?E.jsx($g,{}):E.jsx(qg,{})})]}),O&&E.jsx("div",{className:"fixed inset-0 bg-black/50 z-30 lg:hidden",onClick:()=>N(!1)}),E.jsx("div",{className:"pt-16 lg:pt-0",children:E.jsx(Pg,{modules:xl,activeLessonId:A,completedLessons:z,onSelectLesson:w,isOpen:O,onCloseMobile:()=>N(!1)})}),E.jsx("main",{className:"flex-1 w-full lg:w-auto pt-16 lg:pt-0 lg:ml-0 transition-all",children:E.jsx(th,{lesson:Q,onComplete:H,isCompleted:z.has(A),onNext:x,hasNext:C()})})]})},Lp=document.getElementById("root");if(!Lp)throw new Error("Could not find root element to mount to");const lh=pg.createRoot(Lp);lh.render(E.jsx(ig.StrictMode,{children:E.jsx(ah,{})}));
