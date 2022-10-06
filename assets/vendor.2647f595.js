function e(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t=e("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt"),n=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function r(e){if(T(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=r(A(s)?o(s):s);if(i)for(const e in i)t[e]=i[e]}return t}if(O(e))return e}const s=/;(?![^(]*\))/g,i=/:(.+)/;function o(e){const t={};return e.split(s).forEach((e=>{if(e){const n=e.split(i);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function a(e){let t="";if(A(e))t=e;else if(T(e))for(let n=0;n<e.length;n++){const r=a(e[n]);r&&(t+=r+" ")}else if(O(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function c(e,t){if(e===t)return!0;let n=k(e),r=k(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=T(e),r=T(t),n||r)return!(!n||!r)&&function(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=c(e[r],t[r]);return n}(e,t);if(n=O(e),r=O(t),n||r){if(!n||!r)return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e){const r=e.hasOwnProperty(n),s=t.hasOwnProperty(n);if(r&&!s||!r&&s||!c(e[n],t[n]))return!1}}return String(e)===String(t)}function l(e,t){return e.findIndex((e=>c(e,t)))}const u=e=>null==e?"":O(e)?JSON.stringify(e,h,2):String(e),h=(e,t)=>I(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:S(t)?{[`Set(${t.size})`]:[...t.values()]}:!O(t)||T(t)||P(t)?t:String(t),d={},f=[],p=()=>{},g=()=>!1,m=/^on[^a-z]/,y=e=>m.test(e),v=e=>e.startsWith("onUpdate:"),w=Object.assign,_=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},b=Object.prototype.hasOwnProperty,E=(e,t)=>b.call(e,t),T=Array.isArray,I=e=>"[object Map]"===x(e),S=e=>"[object Set]"===x(e),k=e=>e instanceof Date,C=e=>"function"==typeof e,A=e=>"string"==typeof e,N=e=>"symbol"==typeof e,O=e=>null!==e&&"object"==typeof e,R=e=>O(e)&&C(e.then)&&C(e.catch),D=Object.prototype.toString,x=e=>D.call(e),P=e=>"[object Object]"===x(e),L=e=>A(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,M=e(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),U=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},V=/-(\w)/g,F=U((e=>e.replace(V,((e,t)=>t?t.toUpperCase():"")))),j=/\B([A-Z])/g,B=U((e=>e.replace(j,"-$1").toLowerCase())),q=U((e=>e.charAt(0).toUpperCase()+e.slice(1))),$=U((e=>e?`on${q(e)}`:"")),K=(e,t)=>e!==t&&(e==e||t==t),H=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},z=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},G=e=>{const t=parseFloat(e);return isNaN(t)?e:t},W=new WeakMap,J=[];let Q;const X=Symbol(""),Y=Symbol("");function Z(e,t=d){(function(e){return e&&!0===e._isEffect})(e)&&(e=e.raw);const n=function(e,t){const n=function(){if(!n.active)return t.scheduler?void 0:e();if(!J.includes(n)){ne(n);try{return se.push(re),re=!0,J.push(n),Q=n,e()}finally{J.pop(),oe(),Q=J[J.length-1]}}};return n.id=te++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}(e,t);return t.lazy||n(),n}function ee(e){e.active&&(ne(e),e.options.onStop&&e.options.onStop(),e.active=!1)}let te=0;function ne(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let re=!0;const se=[];function ie(){se.push(re),re=!1}function oe(){const e=se.pop();re=void 0===e||e}function ae(e,t,n){if(!re||void 0===Q)return;let r=W.get(e);r||W.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=new Set),s.has(Q)||(s.add(Q),Q.deps.push(s))}function ce(e,t,n,r,s,i){const o=W.get(e);if(!o)return;const a=new Set,c=e=>{e&&e.forEach((e=>{(e!==Q||e.allowRecurse)&&a.add(e)}))};if("clear"===t)o.forEach(c);else if("length"===n&&T(e))o.forEach(((e,t)=>{("length"===t||t>=r)&&c(e)}));else switch(void 0!==n&&c(o.get(n)),t){case"add":T(e)?L(n)&&c(o.get("length")):(c(o.get(X)),I(e)&&c(o.get(Y)));break;case"delete":T(e)||(c(o.get(X)),I(e)&&c(o.get(Y)));break;case"set":I(e)&&c(o.get(X))}a.forEach((e=>{e.options.scheduler?e.options.scheduler(e):e()}))}const le=e("__proto__,__v_isRef,__isVue"),ue=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(N)),he=me(),de=me(!1,!0),fe=me(!0),pe=me(!0,!0),ge={};function me(e=!1,t=!1){return function(n,r,s){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_raw"===r&&s===(e?t?ze:He:t?Ke:$e).get(n))return n;const i=T(n);if(!e&&i&&E(ge,r))return Reflect.get(ge,r,s);const o=Reflect.get(n,r,s);if(N(r)?ue.has(r):le(r))return o;if(e||ae(n,0,r),t)return o;if(nt(o)){return!i||!L(r)?o.value:o}return O(o)?e?Je(o):We(o):o}}["includes","indexOf","lastIndexOf"].forEach((e=>{const t=Array.prototype[e];ge[e]=function(...e){const n=et(this);for(let t=0,s=this.length;t<s;t++)ae(n,0,t+"");const r=t.apply(n,e);return-1===r||!1===r?t.apply(n,e.map(et)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{const t=Array.prototype[e];ge[e]=function(...e){ie();const n=t.apply(this,e);return oe(),n}}));function ye(e=!1){return function(t,n,r,s){let i=t[n];if(!e&&(r=et(r),i=et(i),!T(t)&&nt(i)&&!nt(r)))return i.value=r,!0;const o=T(t)&&L(n)?Number(n)<t.length:E(t,n),a=Reflect.set(t,n,r,s);return t===et(s)&&(o?K(r,i)&&ce(t,"set",n,r):ce(t,"add",n,r)),a}}const ve={get:he,set:ye(),deleteProperty:function(e,t){const n=E(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ce(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return N(t)&&ue.has(t)||ae(e,0,t),n},ownKeys:function(e){return ae(e,0,T(e)?"length":X),Reflect.ownKeys(e)}},we={get:fe,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},_e=w({},ve,{get:de,set:ye(!0)});w({},we,{get:pe});const be=e=>O(e)?We(e):e,Ee=e=>O(e)?Je(e):e,Te=e=>e,Ie=e=>Reflect.getPrototypeOf(e);function Se(e,t,n=!1,r=!1){const s=et(e=e.__v_raw),i=et(t);t!==i&&!n&&ae(s,0,t),!n&&ae(s,0,i);const{has:o}=Ie(s),a=r?Te:n?Ee:be;return o.call(s,t)?a(e.get(t)):o.call(s,i)?a(e.get(i)):void 0}function ke(e,t=!1){const n=this.__v_raw,r=et(n),s=et(e);return e!==s&&!t&&ae(r,0,e),!t&&ae(r,0,s),e===s?n.has(e):n.has(e)||n.has(s)}function Ce(e,t=!1){return e=e.__v_raw,!t&&ae(et(e),0,X),Reflect.get(e,"size",e)}function Ae(e){e=et(e);const t=et(this);return Ie(t).has.call(t,e)||(t.add(e),ce(t,"add",e,e)),this}function Ne(e,t){t=et(t);const n=et(this),{has:r,get:s}=Ie(n);let i=r.call(n,e);i||(e=et(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?K(t,o)&&ce(n,"set",e,t):ce(n,"add",e,t),this}function Oe(e){const t=et(this),{has:n,get:r}=Ie(t);let s=n.call(t,e);s||(e=et(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&ce(t,"delete",e,void 0),i}function Re(){const e=et(this),t=0!==e.size,n=e.clear();return t&&ce(e,"clear",void 0,void 0),n}function De(e,t){return function(n,r){const s=this,i=s.__v_raw,o=et(i),a=t?Te:e?Ee:be;return!e&&ae(o,0,X),i.forEach(((e,t)=>n.call(r,a(e),a(t),s)))}}function xe(e,t,n){return function(...r){const s=this.__v_raw,i=et(s),o=I(i),a="entries"===e||e===Symbol.iterator&&o,c="keys"===e&&o,l=s[e](...r),u=n?Te:t?Ee:be;return!t&&ae(i,0,c?Y:X),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Pe(e){return function(...t){return"delete"!==e&&this}}const Le={get(e){return Se(this,e)},get size(){return Ce(this)},has:ke,add:Ae,set:Ne,delete:Oe,clear:Re,forEach:De(!1,!1)},Me={get(e){return Se(this,e,!1,!0)},get size(){return Ce(this)},has:ke,add:Ae,set:Ne,delete:Oe,clear:Re,forEach:De(!1,!0)},Ue={get(e){return Se(this,e,!0)},get size(){return Ce(this,!0)},has(e){return ke.call(this,e,!0)},add:Pe("add"),set:Pe("set"),delete:Pe("delete"),clear:Pe("clear"),forEach:De(!0,!1)},Ve={get(e){return Se(this,e,!0,!0)},get size(){return Ce(this,!0)},has(e){return ke.call(this,e,!0)},add:Pe("add"),set:Pe("set"),delete:Pe("delete"),clear:Pe("clear"),forEach:De(!0,!0)};function Fe(e,t){const n=t?e?Ve:Me:e?Ue:Le;return(t,r,s)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(E(n,r)&&r in t?n:t,r,s)}["keys","values","entries",Symbol.iterator].forEach((e=>{Le[e]=xe(e,!1,!1),Ue[e]=xe(e,!0,!1),Me[e]=xe(e,!1,!0),Ve[e]=xe(e,!0,!0)}));const je={get:Fe(!1,!1)},Be={get:Fe(!1,!0)},qe={get:Fe(!0,!1)},$e=new WeakMap,Ke=new WeakMap,He=new WeakMap,ze=new WeakMap;function Ge(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>x(e).slice(8,-1))(e))}function We(e){return e&&e.__v_isReadonly?e:Qe(e,!1,ve,je,$e)}function Je(e){return Qe(e,!0,we,qe,He)}function Qe(e,t,n,r,s){if(!O(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Ge(e);if(0===o)return e;const a=new Proxy(e,2===o?r:n);return s.set(e,a),a}function Xe(e){return Ye(e)?Xe(e.__v_raw):!(!e||!e.__v_isReactive)}function Ye(e){return!(!e||!e.__v_isReadonly)}function Ze(e){return Xe(e)||Ye(e)}function et(e){return e&&et(e.__v_raw)||e}const tt=e=>O(e)?We(e):e;function nt(e){return Boolean(e&&!0===e.__v_isRef)}function rt(e){return it(e)}class st{constructor(e,t=!1){this._rawValue=e,this._shallow=t,this.__v_isRef=!0,this._value=t?e:tt(e)}get value(){return ae(et(this),0,"value"),this._value}set value(e){K(et(e),this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:tt(e),ce(et(this),"set","value",e))}}function it(e,t=!1){return nt(e)?e:new st(e,t)}function ot(e){return nt(e)?e.value:e}const at={get:(e,t,n)=>ot(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return nt(s)&&!nt(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function ct(e){return Xe(e)?e:new Proxy(e,at)}class lt{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}class ut{constructor(e,t,n){this._setter=t,this._dirty=!0,this.__v_isRef=!0,this.effect=Z(e,{lazy:!0,scheduler:()=>{this._dirty||(this._dirty=!0,ce(et(this),"set","value"))}}),this.__v_isReadonly=n}get value(){const e=et(this);return e._dirty&&(e._value=this.effect(),e._dirty=!1),ae(e,0,"value"),e._value}set value(e){this._setter(e)}}function ht(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){ft(i,t,n)}return s}function dt(e,t,n,r){if(C(e)){const s=ht(e,t,n,r);return s&&R(s)&&s.catch((e=>{ft(e,t,n)})),s}const s=[];for(let i=0;i<e.length;i++)s.push(dt(e[i],t,n,r));return s}function ft(e,t,n,r=!0){t&&t.vnode;if(t){let r=t.parent;const s=t.proxy,i=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,i))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void ht(o,null,10,[e,s,i])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let pt=!1,gt=!1;const mt=[];let yt=0;const vt=[];let wt=null,_t=0;const bt=[];let Et=null,Tt=0;const It=Promise.resolve();let St=null,kt=null;function Ct(e){const t=St||It;return e?t.then(this?e.bind(this):e):t}function At(e){if(!(mt.length&&mt.includes(e,pt&&e.allowRecurse?yt+1:yt)||e===kt)){const t=function(e){let t=yt+1,n=mt.length;const r=xt(e);for(;t<n;){const e=t+n>>>1;xt(mt[e])<r?t=e+1:n=e}return t}(e);t>-1?mt.splice(t,0,e):mt.push(e),Nt()}}function Nt(){pt||gt||(gt=!0,St=It.then(Pt))}function Ot(e,t,n,r){T(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),Nt()}function Rt(e,t=null){if(vt.length){for(kt=t,wt=[...new Set(vt)],vt.length=0,_t=0;_t<wt.length;_t++)wt[_t]();wt=null,_t=0,kt=null,Rt(e,t)}}function Dt(e){if(bt.length){const e=[...new Set(bt)];if(bt.length=0,Et)return void Et.push(...e);for(Et=e,Et.sort(((e,t)=>xt(e)-xt(t))),Tt=0;Tt<Et.length;Tt++)Et[Tt]();Et=null,Tt=0}}const xt=e=>null==e.id?1/0:e.id;function Pt(e){gt=!1,pt=!0,Rt(e),mt.sort(((e,t)=>xt(e)-xt(t)));try{for(yt=0;yt<mt.length;yt++){const e=mt[yt];e&&ht(e,null,14)}}finally{yt=0,mt.length=0,Dt(),pt=!1,St=null,(mt.length||bt.length)&&Pt(e)}}function Lt(e,t,...n){const r=e.vnode.props||d;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const e=`${"modelValue"===o?"model":o}Modifiers`,{number:t,trim:i}=r[e]||d;i?s=n.map((e=>e.trim())):t&&(s=n.map(G))}let a,c=r[a=$(t)]||r[a=$(F(t))];!c&&i&&(c=r[a=$(B(t))]),c&&dt(c,e,6,s);const l=r[a+"Once"];if(l){if(e.emitted){if(e.emitted[a])return}else(e.emitted={})[a]=!0;dt(l,e,6,s)}}function Mt(e,t,n=!1){if(!t.deopt&&void 0!==e.__emits)return e.__emits;const r=e.emits;let s={},i=!1;if(!C(e)){const r=e=>{const n=Mt(e,t,!0);n&&(i=!0,w(s,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return r||i?(T(r)?r.forEach((e=>s[e]=null)):w(s,r),e.__emits=s):e.__emits=null}function Ut(e,t){return!(!e||!y(t))&&(t=t.slice(2).replace(/Once$/,""),E(e,t[0].toLowerCase()+t.slice(1))||E(e,B(t))||E(e,t))}let Vt=0;const Ft=e=>Vt+=e;let jt=null,Bt=null;function qt(e){const t=jt;return jt=e,Bt=e&&e.type.__scopeId||null,t}function $t(e){Bt=e}function Kt(){Bt=null}const Ht=e=>zt;function zt(e,t=jt){if(!t)return e;const n=(...n)=>{Vt||Yn(!0);const r=qt(t),s=e(...n);return qt(r),Vt||Zn(),s};return n._c=!0,n}function Gt(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:p}=e;let g;const m=qt(e);try{let e;if(4&n.shapeFlag){const t=s||r;g=ur(u.call(t,t,h,i,f,d,p)),e=c}else{const n=t;0,g=ur(n.length>1?n(i,{attrs:c,slots:a,emit:l}):n(i,null)),e=t.props?c:Jt(c)}let m=g;if(!1!==t.inheritAttrs&&e){const t=Object.keys(e),{shapeFlag:n}=m;t.length&&(1&n||6&n)&&(o&&t.some(v)&&(e=Qt(e,o)),m=ar(m,e))}n.dirs&&(m.dirs=m.dirs?m.dirs.concat(n.dirs):n.dirs),n.transition&&(m.transition=n.transition),g=m}catch(y){Qn.length=0,ft(y,e,1),g=or(Wn)}return qt(m),g}function Wt(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(!tr(r))return;if(r.type!==Wn||"v-if"===r.children){if(t)return;t=r}}return t}const Jt=e=>{let t;for(const n in e)("class"===n||"style"===n||y(n))&&((t||(t={}))[n]=e[n]);return t},Qt=(e,t)=>{const n={};for(const r in e)v(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Xt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Ut(n,i))return!0}return!1}function Yt(e){if(C(e)&&(e=e()),T(e)){e=Wt(e)}return ur(e)}function Zt(e,t,n,r=!1){const s={},i={};z(i,rr,1),e.propsDefaults=Object.create(null),en(e,t,s,i),n?e.props=r?s:Qe(s,!1,_e,Be,Ke):e.type.props?e.props=s:e.props=i,e.attrs=i}function en(e,t,n,r){const[s,i]=e.propsOptions;if(t)for(const o in t){const i=t[o];if(M(o))continue;let a;s&&E(s,a=F(o))?n[a]=i:Ut(e.emitsOptions,o)||(r[o]=i)}if(i){const t=et(n);for(let r=0;r<i.length;r++){const o=i[r];n[o]=tn(s,t,o,t[o],e)}}}function tn(e,t,n,r,s){const i=e[n];if(null!=i){const e=E(i,"default");if(e&&void 0===r){const e=i.default;if(i.type!==Function&&C(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(Or(s),r=i[n]=e(t),Or(null))}else r=e}i[0]&&(E(t,n)||e?!i[1]||""!==r&&r!==B(n)||(r=!0):r=!1)}return r}function nn(e,t,n=!1){if(!t.deopt&&e.__props)return e.__props;const r=e.props,s={},i=[];let o=!1;if(!C(e)){const r=e=>{o=!0;const[n,r]=nn(e,t,!0);w(s,n),r&&i.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!r&&!o)return e.__props=f;if(T(r))for(let a=0;a<r.length;a++){const e=F(r[a]);rn(e)&&(s[e]=d)}else if(r)for(const a in r){const e=F(a);if(rn(e)){const t=r[a],n=s[e]=T(t)||C(t)?{type:t}:t;if(n){const t=an(Boolean,n.type),r=an(String,n.type);n[0]=t>-1,n[1]=r<0||t<r,(t>-1||E(n,"default"))&&i.push(e)}}}return e.__props=[s,i]}function rn(e){return"$"!==e[0]}function sn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function on(e,t){return sn(e)===sn(t)}function an(e,t){return T(t)?t.findIndex((t=>on(t,e))):C(t)&&on(t,e)?0:-1}function cn(e,t,n=Nr,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;ie(),Or(n);const s=dt(t,n,e,r);return Or(null),oe(),s});return r?s.unshift(i):s.push(i),i}}const ln=e=>(t,n=Nr)=>!Dr&&cn(e,t,n),un=ln("bm"),hn=ln("m"),dn=ln("bu"),fn=ln("u"),pn=ln("bum"),gn=ln("um"),mn=ln("rtg"),yn=ln("rtc"),vn={};function wn(e,t,n){return _n(e,t,n)}function _n(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=d,a=Nr){let c,l,u=!1;if(nt(e)?(c=()=>e.value,u=!!e._shallow):Xe(e)?(c=()=>e,r=!0):c=T(e)?()=>e.map((e=>nt(e)?e.value:Xe(e)?En(e):C(e)?ht(e,a,2,[a&&a.proxy]):void 0)):C(e)?t?()=>ht(e,a,2,[a&&a.proxy]):()=>{if(!a||!a.isUnmounted)return l&&l(),dt(e,a,3,[h])}:p,t&&r){const e=c;c=()=>En(e())}let h=e=>{l=y.options.onStop=()=>{ht(e,a,4)}},f=T(e)?[]:vn;const g=()=>{if(y.active)if(t){const e=y();(r||u||K(e,f))&&(l&&l(),dt(t,a,3,[e,f===vn?void 0:f,h]),f=e)}else y()};let m;g.allowRecurse=!!t,m="sync"===s?g:"post"===s?()=>Vn(g,a&&a.suspense):()=>{!a||a.isMounted?function(e){Ot(e,wt,vt,_t)}(g):g()};const y=Z(c,{lazy:!0,onTrack:i,onTrigger:o,scheduler:m});return Lr(y,a),t?n?g():f=y():"post"===s?Vn(y,a&&a.suspense):y(),()=>{ee(y),a&&_(a.effects,y)}}function bn(e,t,n){const r=this.proxy;return _n(A(e)?()=>r[e]:e.bind(r),t.bind(r),n,this)}function En(e,t=new Set){if(!O(e)||t.has(e))return e;if(t.add(e),nt(e))En(e.value,t);else if(T(e))for(let n=0;n<e.length;n++)En(e[n],t);else if(S(e)||I(e))e.forEach((e=>{En(e,t)}));else for(const n in e)En(e[n],t);return e}const Tn=e=>e.type.__isKeepAlive;function In(e,t,n=Nr){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}e()});if(cn(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Tn(e.parent.vnode)&&Sn(r,t,n,e),e=e.parent}}function Sn(e,t,n,r){const s=cn(t,e,r,!0);gn((()=>{_(r[t],s)}),n)}const kn=e=>"_"===e[0]||"$stable"===e,Cn=e=>T(e)?e.map(ur):[ur(e)],An=(e,t,n)=>zt((e=>Cn(t(e))),n),Nn=(e,t)=>{const n=e._ctx;for(const r in e){if(kn(r))continue;const s=e[r];if(C(s))t[r]=An(0,s,n);else if(null!=s){const e=Cn(s);t[r]=()=>e}}},On=(e,t)=>{const n=Cn(t);e.slots.default=()=>n};function Rn(e,t){if(null===jt)return e;const n=jt.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,i,o,a=d]=t[s];C(e)&&(e={mounted:e,updated:e}),r.push({dir:e,instance:n,value:i,oldValue:void 0,arg:o,modifiers:a})}return e}function Dn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);const c=a.dir[r];c&&dt(c,n,8,[e.el,a,e,t])}}function xn(){return{app:null,config:{isNativeTag:g,performance:!1,globalProperties:{},optionMergeStrategies:{},isCustomElement:g,errorHandler:void 0,warnHandler:void 0},mixins:[],components:{},directives:{},provides:Object.create(null)}}let Pn=0;function Ln(e,t){return function(n,r=null){null==r||O(r)||(r=null);const s=xn(),i=new Set;let o=!1;const a=s.app={_uid:Pn++,_component:n,_props:r,_container:null,_context:s,version:jr,get config(){return s.config},set config(e){},use:(e,...t)=>(i.has(e)||(e&&C(e.install)?(i.add(e),e.install(a,...t)):C(e)&&(i.add(e),e(a,...t))),a),mixin:e=>(s.mixins.includes(e)||(s.mixins.push(e),(e.props||e.emits)&&(s.deopt=!0)),a),component:(e,t)=>t?(s.components[e]=t,a):s.components[e],directive:(e,t)=>t?(s.directives[e]=t,a):s.directives[e],mount(i,c,l){if(!o){const u=or(n,r);return u.appContext=s,c&&t?t(u,i):e(u,i,l),o=!0,a._container=i,i.__vue_app__=a,u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(s.provides[e]=t,a)};return a}}function Mn(e){return C(e)?{setup:e,name:e.name}:e}const Un={scheduler:At,allowRecurse:!0},Vn=function(e,t){t&&t.pendingBranch?T(e)?t.effects.push(...e):t.effects.push(e):Ot(e,Et,bt,Tt)},Fn=(e,t,n,r)=>{if(T(e))return void e.forEach(((e,s)=>Fn(e,t&&(T(t)?t[s]:t),n,r)));let s;if(r){if(r.type.__asyncLoader)return;s=4&r.shapeFlag?r.component.exposed||r.component.proxy:r.el}else s=null;const{i:i,r:o}=e,a=t&&t.r,c=i.refs===d?i.refs={}:i.refs,l=i.setupState;if(null!=a&&a!==o&&(A(a)?(c[a]=null,E(l,a)&&(l[a]=null)):nt(a)&&(a.value=null)),A(o)){const e=()=>{c[o]=s,E(l,o)&&(l[o]=s)};s?(e.id=-1,Vn(e,n)):e()}else if(nt(o)){const e=()=>{o.value=s};s?(e.id=-1,Vn(e,n)):e()}else C(o)&&ht(o,i,12,[s,c])};function jn(e){return function(e,t){const{insert:n,remove:r,patchProp:s,forcePatchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:g,setScopeId:m=p,cloneNode:y,insertStaticContent:v}=e,_=(e,t,n,r=null,s=null,i=null,o=!1,a=null,c=!1)=>{e&&!nr(e,t)&&(r=re(e),Q(e,s,i,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Gn:b(e,t,n,r);break;case Wn:T(e,t,n,r);break;case Jn:null==e&&I(t,n,r,o);break;case zn:L(e,t,n,r,s,i,o,a,c);break;default:1&h?C(e,t,n,r,s,i,o,a,c):6&h?U(e,t,n,r,s,i,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,s,i,o,a,c,ae)}null!=u&&s&&Fn(u,e&&e.ref,i,t)},b=(e,t,r,s)=>{if(null==e)n(t.el=a(t.children),r,s);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},T=(e,t,r,s)=>{null==e?n(t.el=c(t.children||""),r,s):t.el=e.el},I=(e,t,n,r)=>{[e.el,e.anchor]=v(e.children,t,n,r)},S=({el:e,anchor:t},r,s)=>{let i;for(;e&&e!==t;)i=g(e),n(e,r,s),e=i;n(t,r,s)},k=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=g(e),r(e),e=n;r(t)},C=(e,t,n,r,s,i,o,a,c)=>{o=o||"svg"===t.type,null==e?A(t,n,r,s,i,o,a,c):D(e,t,s,i,o,a,c)},A=(e,t,r,i,a,c,l,h)=>{let d,f;const{type:p,props:g,shapeFlag:m,transition:v,patchFlag:w,dirs:_}=e;if(e.el&&void 0!==y&&-1===w)d=e.el=y(e.el);else{if(d=e.el=o(e.type,c,g&&g.is,g),8&m?u(d,e.children):16&m&&O(e.children,d,null,i,a,c&&"foreignObject"!==p,l,h||!!e.dynamicChildren),_&&Dn(e,null,i,"created"),g){for(const t in g)M(t)||s(d,t,null,g[t],c,e.children,i,a,ne);(f=g.onVnodeBeforeMount)&&Bn(f,i,e)}N(d,e,e.scopeId,l,i)}_&&Dn(e,null,i,"beforeMount");const b=(!a||a&&!a.pendingBranch)&&v&&!v.persisted;b&&v.beforeEnter(d),n(d,t,r),((f=g&&g.onVnodeMounted)||b||_)&&Vn((()=>{f&&Bn(f,i,e),b&&v.enter(d),_&&Dn(e,null,i,"mounted")}),a)},N=(e,t,n,r,s)=>{if(n&&m(e,n),r)for(let i=0;i<r.length;i++)m(e,r[i]);if(s){if(t===s.subTree){const t=s.vnode;N(e,t,t.scopeId,t.slotScopeIds,s.parent)}}},O=(e,t,n,r,s,i,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=o?hr(e[l]):ur(e[l]);_(null,c,t,n,r,s,i,o,a)}},D=(e,t,n,r,o,a,c)=>{const l=t.el=e.el;let{patchFlag:h,dynamicChildren:f,dirs:p}=t;h|=16&e.patchFlag;const g=e.props||d,m=t.props||d;let y;if((y=m.onVnodeBeforeUpdate)&&Bn(y,n,t,e),p&&Dn(t,e,n,"beforeUpdate"),h>0){if(16&h)P(l,t,g,m,n,r,o);else if(2&h&&g.class!==m.class&&s(l,"class",null,m.class,o),4&h&&s(l,"style",g.style,m.style,o),8&h){const a=t.dynamicProps;for(let t=0;t<a.length;t++){const c=a[t],u=g[c],h=m[c];(h!==u||i&&i(l,c))&&s(l,c,u,h,o,e.children,n,r,ne)}}1&h&&e.children!==t.children&&u(l,t.children)}else c||null!=f||P(l,t,g,m,n,r,o);const v=o&&"foreignObject"!==t.type;f?x(e.dynamicChildren,f,l,n,r,v,a):c||K(e,t,l,null,n,r,v,a,!1),((y=m.onVnodeUpdated)||p)&&Vn((()=>{y&&Bn(y,n,t,e),p&&Dn(t,e,n,"updated")}),r)},x=(e,t,n,r,s,i,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.type===zn||!nr(c,l)||6&c.shapeFlag||64&c.shapeFlag?h(c.el):n;_(c,l,u,null,r,s,i,o,!0)}},P=(e,t,n,r,o,a,c)=>{if(n!==r){for(const l in r){if(M(l))continue;const u=r[l],h=n[l];(u!==h||i&&i(e,l))&&s(e,l,h,u,c,t.children,o,a,ne)}if(n!==d)for(const i in n)M(i)||i in r||s(e,i,n[i],null,c,t.children,o,a,ne)}},L=(e,t,r,s,i,o,c,l,u)=>{const h=t.el=e?e.el:a(""),d=t.anchor=e?e.anchor:a("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;f>0&&(u=!0),g&&(l=l?l.concat(g):g),null==e?(n(h,r,s),n(d,r,s),O(t.children,r,d,i,o,c,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(x(e.dynamicChildren,p,r,i,o,c,l),(null!=t.key||i&&t===i.subTree)&&qn(e,t,!0)):K(e,t,r,d,i,o,c,l,u)},U=(e,t,n,r,s,i,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?s.ctx.activate(t,n,r,o,c):V(t,n,r,s,i,o,c):j(e,t,c)},V=(e,t,n,r,s,i,o)=>{const a=e.component=function(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Cr,i={uid:Ar++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,update:null,render:null,proxy:null,exposed:null,withProxy:null,effects:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:nn(r,s),emitsOptions:Mt(r,s),emit:null,emitted:null,propsDefaults:d,ctx:d,data:d,props:d,attrs:d,slots:d,refs:d,setupState:d,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Lt.bind(null,i),i}(e,r,s);if(Tn(e)&&(a.ctx.renderer=ae),function(e,t=!1){Dr=t;const{props:n,children:r}=e.vnode,s=Rr(e);Zt(e,n,s,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=t,z(t,"_",n)):Nn(t,e.slots={})}else e.slots={},t&&On(e,t);z(e.slots,rr,1)})(e,r);const i=s?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Sr);const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=ct(t)};return{attrs:e.attrs,slots:e.slots,emit:e.emit,expose:t}}(e):null;Nr=e,ie();const s=ht(r,e,0,[e.props,n]);if(oe(),Nr=null,R(s)){if(t)return s.then((t=>{xr(e,t)})).catch((t=>{ft(t,e,0)}));e.asyncDep=s}else xr(e,s)}else Pr(e)}(e,t):void 0;Dr=!1}(a),a.asyncDep){if(s&&s.registerDep(a,q),!e.el){const e=a.subTree=or(Wn);T(null,e,t,n)}}else q(a,e,t,n,s,i,o)},j=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||Xt(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?Xt(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!Ut(l,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void $(r,t,n);r.next=t,function(e){const t=mt.indexOf(e);t>yt&&mt.splice(t,1)}(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},q=(e,t,n,r,s,i,o)=>{e.update=Z((function(){if(e.isMounted){let t,{next:n,bu:r,u:a,parent:c,vnode:l}=e,u=n;n?(n.el=l.el,$(e,n,o)):n=l,r&&H(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Bn(t,c,n,l);const d=Gt(e),f=e.subTree;e.subTree=d,_(f,d,h(f.el),re(f),e,s,i),n.el=d.el,null===u&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,d.el),a&&Vn(a,s),(t=n.props&&n.props.onVnodeUpdated)&&Vn((()=>{Bn(t,c,n,l)}),s)}else{let o;const{el:a,props:c}=t,{bm:l,m:u,parent:h}=e;l&&H(l),(o=c&&c.onVnodeBeforeMount)&&Bn(o,h,t);const d=e.subTree=Gt(e);if(a&&ue?ue(t.el,d,e,s,null):(_(null,d,n,r,e,s,i),t.el=d.el),u&&Vn(u,s),o=c&&c.onVnodeMounted){const e=t;Vn((()=>{Bn(o,h,e)}),s)}const{a:f}=e;f&&256&t.shapeFlag&&Vn(f,s),e.isMounted=!0,t=n=r=null}}),Un)},$=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=et(s),[c]=e.propsOptions;if(!(r||o>0)||16&o){let r;en(e,t,s,i);for(const i in a)t&&(E(t,i)||(r=B(i))!==i&&E(t,r))||(c?!n||void 0===n[i]&&void 0===n[r]||(s[i]=tn(c,t||d,i,void 0,e)):delete s[i]);if(i!==a)for(const e in i)t&&E(t,e)||delete i[e]}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){const o=n[r],l=t[o];if(c)if(E(i,o))i[o]=l;else{const t=F(o);s[t]=tn(c,a,t,l,e)}else i[o]=l}}ce(e,"set","$attrs")}(e,t.props,r,n),((e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=d;if(32&r.shapeFlag){const e=t._;e?n&&1===e?i=!1:(w(s,t),n||1!==e||delete s._):(i=!t.$stable,Nn(t,s)),o=t}else t&&(On(e,t),o={default:1});if(i)for(const a in s)kn(a)||a in o||delete s[a]})(e,t.children,n),ie(),Rt(void 0,e.update),oe()},K=(e,t,n,r,s,i,o,a,c=!1)=>{const l=e&&e.children,h=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void W(l,d,n,r,s,i,o,a,c);if(256&f)return void G(l,d,n,r,s,i,o,a,c)}8&p?(16&h&&ne(l,s,i),d!==l&&u(n,d)):16&h?16&p?W(l,d,n,r,s,i,o,a,c):ne(l,s,i,!0):(8&h&&u(n,""),16&p&&O(d,n,r,s,i,o,a,c))},G=(e,t,n,r,s,i,o,a,c)=>{t=t||f;const l=(e=e||f).length,u=t.length,h=Math.min(l,u);let d;for(d=0;d<h;d++){const r=t[d]=c?hr(t[d]):ur(t[d]);_(e[d],r,n,null,s,i,o,a,c)}l>u?ne(e,s,i,!0,!1,h):O(t,n,r,s,i,o,a,c,h)},W=(e,t,n,r,s,i,o,a,c)=>{let l=0;const u=t.length;let h=e.length-1,d=u-1;for(;l<=h&&l<=d;){const r=e[l],u=t[l]=c?hr(t[l]):ur(t[l]);if(!nr(r,u))break;_(r,u,n,null,s,i,o,a,c),l++}for(;l<=h&&l<=d;){const r=e[h],l=t[d]=c?hr(t[d]):ur(t[d]);if(!nr(r,l))break;_(r,l,n,null,s,i,o,a,c),h--,d--}if(l>h){if(l<=d){const e=d+1,h=e<u?t[e].el:r;for(;l<=d;)_(null,t[l]=c?hr(t[l]):ur(t[l]),n,h,s,i,o,a,c),l++}}else if(l>d)for(;l<=h;)Q(e[l],s,i,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const e=t[l]=c?hr(t[l]):ur(t[l]);null!=e.key&&m.set(e.key,l)}let y,v=0;const w=d-g+1;let b=!1,E=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=h;l++){const r=e[l];if(v>=w){Q(r,s,i,!0);continue}let u;if(null!=r.key)u=m.get(r.key);else for(y=g;y<=d;y++)if(0===T[y-g]&&nr(r,t[y])){u=y;break}void 0===u?Q(r,s,i,!0):(T[u-g]=l+1,u>=E?E=u:b=!0,_(r,t[u],n,null,s,i,o,a,c),v++)}const I=b?function(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(s=n[n.length-1],e[s]<c){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=(i+o)/2|0,e[n[a]]<c?i=a+1:o=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];for(;i-- >0;)n[i]=o,o=t[o];return n}(T):f;for(y=I.length-1,l=w-1;l>=0;l--){const e=g+l,h=t[e],d=e+1<u?t[e+1].el:r;0===T[l]?_(null,h,n,d,s,i,o,a,c):b&&(y<0||l!==I[y]?J(h,n,d,2):y--)}}},J=(e,t,r,s,i=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void J(e.component.subTree,t,r,s);if(128&u)return void e.suspense.move(t,r,s);if(64&u)return void a.move(e,t,r,ae);if(a===zn){n(o,t,r);for(let e=0;e<l.length;e++)J(l[e],t,r,s);return void n(e.anchor,t,r)}if(a===Jn)return void S(e,t,r);if(2!==s&&1&u&&c)if(0===s)c.beforeEnter(o),n(o,t,r),Vn((()=>c.enter(o)),i);else{const{leave:e,delayLeave:s,afterLeave:i}=c,a=()=>n(o,t,r),l=()=>{e(o,(()=>{a(),i&&i()}))};s?s(o,a,l):l()}else n(o,t,r)},Q=(e,t,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Fn(a,null,n,null),256&u)return void t.ctx.deactivate(e);const f=1&u&&d;let p;if((p=o&&o.onVnodeBeforeUnmount)&&Bn(p,t,e),6&u)te(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&Dn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,s,ae,r):l&&(i!==zn||h>0&&64&h)?ne(l,t,n,!1,!0):(i===zn&&(128&h||256&h)||!s&&16&u)&&ne(c,t,n),r&&X(e)}((p=o&&o.onVnodeUnmounted)||f)&&Vn((()=>{p&&Bn(p,t,e),f&&Dn(e,null,t,"unmounted")}),n)},X=e=>{const{type:t,el:n,anchor:s,transition:i}=e;if(t===zn)return void Y(n,s);if(t===Jn)return void k(e);const o=()=>{r(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},Y=(e,t)=>{let n;for(;e!==t;)n=g(e),r(e),e=n;r(t)},te=(e,t,n)=>{const{bum:r,effects:s,update:i,subTree:o,um:a}=e;if(r&&H(r),s)for(let c=0;c<s.length;c++)ee(s[c]);i&&(ee(i),Q(o,e,t,n)),a&&Vn(a,t),Vn((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},ne=(e,t,n,r=!1,s=!1,i=0)=>{for(let o=i;o<e.length;o++)Q(e[o],t,n,r,s)},re=e=>6&e.shapeFlag?re(e.component.subTree):128&e.shapeFlag?e.suspense.next():g(e.anchor||e.el),se=(e,t,n)=>{null==e?t._vnode&&Q(t._vnode,null,null,!0):_(t._vnode||null,e,t,null,null,null,n),Dt(),t._vnode=e},ae={p:_,um:Q,m:J,r:X,mt:V,mc:O,pc:K,pbc:x,n:re,o:e};let le,ue;t&&([le,ue]=t(ae));return{render:se,hydrate:le,createApp:Ln(se,le)}}(e)}function Bn(e,t,n,r=null){dt(e,t,7,[n,r])}function qn(e,t,n=!1){const r=e.children,s=t.children;if(T(r)&&T(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=hr(s[i]),t.el=e.el),n||qn(e,t))}}function $n(e,t){return function(e,t,n=!0,r=!1){const s=jt||Nr;if(s){const n=s.type;if("components"===e){const e=Mr(n);if(e&&(e===t||e===F(t)||e===q(F(t))))return n}const i=Hn(s[e]||n[e],t)||Hn(s.appContext[e],t);return!i&&r?n:i}}("components",e,!0,t)||e}const Kn=Symbol();function Hn(e,t){return e&&(e[t]||e[F(t)]||e[q(F(t))])}const zn=Symbol(void 0),Gn=Symbol(void 0),Wn=Symbol(void 0),Jn=Symbol(void 0),Qn=[];let Xn=null;function Yn(e=!1){Qn.push(Xn=e?null:[])}function Zn(){Qn.pop(),Xn=Qn[Qn.length-1]||null}function er(e,t,n,r,s){const i=or(e,t,n,r,s,!0);return i.dynamicChildren=Xn||f,Zn(),Xn&&Xn.push(i),i}function tr(e){return!!e&&!0===e.__v_isVNode}function nr(e,t){return e.type===t.type&&e.key===t.key}const rr="__vInternal",sr=({key:e})=>null!=e?e:null,ir=({ref:e})=>null!=e?A(e)||nt(e)||C(e)?{i:jt,r:e}:e:null,or=function(e,t=null,n=null,s=0,i=null,o=!1){e&&e!==Kn||(e=Wn);if(tr(e)){const r=ar(e,t,!0);return n&&dr(r,n),r}c=e,C(c)&&"__vccOpts"in c&&(e=e.__vccOpts);var c;if(t){(Ze(t)||rr in t)&&(t=w({},t));let{class:e,style:n}=t;e&&!A(e)&&(t.class=a(e)),O(n)&&(Ze(n)&&!T(n)&&(n=w({},n)),t.style=r(n))}const l=A(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:O(e)?4:C(e)?2:0,u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&sr(t),ref:t&&ir(t),scopeId:Bt,slotScopeIds:null,children:null,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};if(dr(u,n),128&l){const{content:e,fallback:t}=function(e){const{shapeFlag:t,children:n}=e;let r,s;return 32&t?(r=Yt(n.default),s=Yt(n.fallback)):(r=Yt(n),s=ur(null)),{content:r,fallback:s}}(u);u.ssContent=e,u.ssFallback=t}!o&&Xn&&(s>0||6&l)&&32!==s&&Xn.push(u);return u};function ar(e,t,n=!1){const{props:s,ref:i,patchFlag:o,children:c}=e,l=t?function(...e){const t=w({},e[0]);for(let n=1;n<e.length;n++){const s=e[n];for(const e in s)if("class"===e)t.class!==s.class&&(t.class=a([t.class,s.class]));else if("style"===e)t.style=r([t.style,s.style]);else if(y(e)){const n=t[e],r=s[e];n!==r&&(t[e]=n?[].concat(n,s[e]):r)}else""!==e&&(t[e]=s[e])}return t}(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&sr(l),ref:t&&t.ref?n&&i?T(i)?i.concat(ir(t)):[i,ir(t)]:ir(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==zn?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ar(e.ssContent),ssFallback:e.ssFallback&&ar(e.ssFallback),el:e.el,anchor:e.anchor}}function cr(e=" ",t=0){return or(Gn,null,e,t)}function lr(e="",t=!1){return t?(Yn(),er(Wn,null,e)):or(Wn,null,e)}function ur(e){return null==e||"boolean"==typeof e?or(Wn):T(e)?or(zn,null,e):"object"==typeof e?null===e.el?e:ar(e):or(Gn,null,String(e))}function hr(e){return null===e.el?e:ar(e)}function dr(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(T(t))n=16;else if("object"==typeof t){if(1&r||64&r){const n=t.default;return void(n&&(n._c&&Ft(1),dr(e,n()),n._c&&Ft(-1)))}{n=32;const r=t._;r||rr in t?3===r&&jt&&(1024&jt.vnode.patchFlag?(t._=2,e.patchFlag|=1024):t._=1):t._ctx=jt}}else C(t)?(t={default:t,_ctx:jt},n=32):(t=String(t),64&r?(n=16,t=[cr(t)]):n=8);e.children=t,e.shapeFlag|=n}function fr(e,t){if(Nr){let n=Nr.provides;const r=Nr.parent&&Nr.parent.provides;r===n&&(n=Nr.provides=Object.create(r)),n[e]=t}else;}function pr(e,t,n=!1){const r=Nr||jt;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&C(t)?t():t}}let gr=!0;function mr(e,t,n=[],r=[],s=[],i=!1){const{mixins:o,extends:a,data:c,computed:l,methods:u,watch:h,provide:f,inject:g,components:m,directives:y,beforeMount:v,mounted:_,beforeUpdate:b,updated:E,activated:I,deactivated:S,beforeDestroy:k,beforeUnmount:A,destroyed:N,unmounted:R,render:D,renderTracked:x,renderTriggered:P,errorCaptured:L,expose:M}=t,U=e.proxy,V=e.ctx,F=e.appContext.mixins;if(i&&D&&e.render===p&&(e.render=D),i||(gr=!1,yr("beforeCreate","bc",t,e,F),gr=!0,wr(e,F,n,r,s)),a&&mr(e,a,n,r,s,!0),o&&wr(e,o,n,r,s),g)if(T(g))for(let d=0;d<g.length;d++){const e=g[d];V[e]=pr(e)}else for(const d in g){const e=g[d];O(e)?V[d]=pr(e.from||d,e.default,!0):V[d]=pr(e)}if(u)for(const d in u){const e=u[d];C(e)&&(V[d]=e.bind(U))}if(i?c&&n.push(c):(n.length&&n.forEach((t=>_r(e,t,U))),c&&_r(e,c,U)),l)for(const d in l){const e=l[d],t=Ur({get:C(e)?e.bind(U,U):C(e.get)?e.get.bind(U,U):p,set:!C(e)&&C(e.set)?e.set.bind(U):p});Object.defineProperty(V,d,{enumerable:!0,configurable:!0,get:()=>t.value,set:e=>t.value=e})}var j;if(h&&r.push(h),!i&&r.length&&r.forEach((e=>{for(const t in e)br(e[t],V,U,t)})),f&&s.push(f),!i&&s.length&&s.forEach((e=>{const t=C(e)?e.call(U):e;Reflect.ownKeys(t).forEach((e=>{fr(e,t[e])}))})),i&&(m&&w(e.components||(e.components=w({},e.type.components)),m),y&&w(e.directives||(e.directives=w({},e.type.directives)),y)),i||yr("created","c",t,e,F),v&&un(v.bind(U)),_&&hn(_.bind(U)),b&&dn(b.bind(U)),E&&fn(E.bind(U)),I&&In(I.bind(U),"a",j),S&&function(e,t){In(e,"da",t)}(S.bind(U)),L&&((e,t=Nr)=>{cn("ec",e,t)})(L.bind(U)),x&&yn(x.bind(U)),P&&mn(P.bind(U)),A&&pn(A.bind(U)),R&&gn(R.bind(U)),T(M)&&!i)if(M.length){const t=e.exposed||(e.exposed=ct({}));M.forEach((e=>{t[e]=function(e,t){return nt(e[t])?e[t]:new lt(e,t)}(U,e)}))}else e.exposed||(e.exposed=d)}function yr(e,t,n,r,s){for(let i=0;i<s.length;i++)vr(e,t,s[i],r);vr(e,t,n,r)}function vr(e,t,n,r){const{extends:s,mixins:i}=n,o=n[e];if(s&&vr(e,t,s,r),i)for(let a=0;a<i.length;a++)vr(e,t,i[a],r);o&&dt(o.bind(r.proxy),r,t)}function wr(e,t,n,r,s){for(let i=0;i<t.length;i++)mr(e,t[i],n,r,s,!0)}function _r(e,t,n){gr=!1;const r=t.call(n,n);gr=!0,O(r)&&(e.data===d?e.data=We(r):w(e.data,r))}function br(e,t,n,r){const s=r.includes(".")?function(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}(n,r):()=>n[r];if(A(e)){const n=t[e];C(n)&&wn(s,n)}else if(C(e))wn(s,e.bind(n));else if(O(e))if(T(e))e.forEach((e=>br(e,t,n,r)));else{const r=C(e.handler)?e.handler.bind(n):t[e.handler];C(r)&&wn(s,r,e)}}function Er(e,t,n){const r=n.appContext.config.optionMergeStrategies,{mixins:s,extends:i}=t;i&&Er(e,i,n),s&&s.forEach((t=>Er(e,t,n)));for(const o in t)r&&E(r,o)?e[o]=r[o](e[o],t[o],n.proxy,o):e[o]=t[o]}const Tr=e=>e?Rr(e)?e.exposed?e.exposed:e.proxy:Tr(e.parent):null,Ir=w(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Tr(e.parent),$root:e=>Tr(e.root),$emit:e=>e.emit,$options:e=>function(e){const t=e.type,{__merged:n,mixins:r,extends:s}=t;if(n)return n;const i=e.appContext.mixins;if(!i.length&&!r&&!s)return t;const o={};return i.forEach((t=>Er(o,t,e))),Er(o,t,e),t.__merged=o}(e),$forceUpdate:e=>()=>At(e.update),$nextTick:e=>Ct.bind(e.proxy),$watch:e=>bn.bind(e)}),Sr={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;if("__v_skip"===t)return!0;let l;if("$"!==t[0]){const a=o[t];if(void 0!==a)switch(a){case 0:return r[t];case 1:return s[t];case 3:return n[t];case 2:return i[t]}else{if(r!==d&&E(r,t))return o[t]=0,r[t];if(s!==d&&E(s,t))return o[t]=1,s[t];if((l=e.propsOptions[0])&&E(l,t))return o[t]=2,i[t];if(n!==d&&E(n,t))return o[t]=3,n[t];gr&&(o[t]=4)}}const u=Ir[t];let h,f;return u?("$attrs"===t&&ae(e,0,t),u(e)):(h=a.__cssModules)&&(h=h[t])?h:n!==d&&E(n,t)?(o[t]=3,n[t]):(f=c.config.globalProperties,E(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;if(s!==d&&E(s,t))s[t]=n;else if(r!==d&&E(r,t))r[t]=n;else if(E(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return void 0!==n[o]||e!==d&&E(e,o)||t!==d&&E(t,o)||(a=i[0])&&E(a,o)||E(r,o)||E(Ir,o)||E(s.config.globalProperties,o)}},kr=w({},Sr,{get(e,t){if(t!==Symbol.unscopables)return Sr.get(e,t,e)},has:(e,n)=>"_"!==n[0]&&!t(n)}),Cr=xn();let Ar=0;let Nr=null;const Or=e=>{Nr=e};function Rr(e){return 4&e.vnode.shapeFlag}let Dr=!1;function xr(e,t,n){C(t)?e.render=t:O(t)&&(e.setupState=ct(t)),Pr(e)}function Pr(e,t){const n=e.type;e.render||(e.render=n.render||p,e.render._rc&&(e.withProxy=new Proxy(e.ctx,kr))),Nr=e,ie(),mr(e,n),oe(),Nr=null}function Lr(e,t=Nr){t&&(t.effects||(t.effects=[])).push(e)}function Mr(e){return C(e)&&e.displayName||e.name}function Ur(e){const t=function(e){let t,n;return C(e)?(t=e,n=p):(t=e.get,n=e.set),new ut(t,n,C(e)||!e.set)}(e);return Lr(t.effect),t}function Vr(e,t,n){const r=arguments.length;return 2===r?O(t)&&!T(t)?tr(t)?or(e,null,[t]):or(e,t):or(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&tr(n)&&(n=[n]),or(e,t,n))}function Fr(e,t){let n;if(T(e)||A(e)){n=new Array(e.length);for(let r=0,s=e.length;r<s;r++)n[r]=t(e[r],r)}else if("number"==typeof e){n=new Array(e);for(let r=0;r<e;r++)n[r]=t(r+1,r)}else if(O(e))if(e[Symbol.iterator])n=Array.from(e,t);else{const r=Object.keys(e);n=new Array(r.length);for(let s=0,i=r.length;s<i;s++){const i=r[s];n[s]=t(e[i],i,s)}}else n=[];return n}const jr="3.0.11",Br="http://www.w3.org/2000/svg",qr="undefined"!=typeof document?document:null;let $r,Kr;const Hr={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?qr.createElementNS(Br,e):qr.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:e=>qr.createTextNode(e),createComment:e=>qr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>qr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const s=r?Kr||(Kr=qr.createElementNS(Br,"svg")):$r||($r=qr.createElement("div"));s.innerHTML=e;const i=s.firstChild;let o=i,a=o;for(;o;)a=o,Hr.insert(o,t,n),o=s.firstChild;return[i,a]}};const zr=/\s*!important$/;function Gr(e,t,n){if(T(n))n.forEach((n=>Gr(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=Jr[t];if(n)return n;let r=F(t);if("filter"!==r&&r in e)return Jr[t]=r;r=q(r);for(let s=0;s<Wr.length;s++){const n=Wr[s]+r;if(n in e)return Jr[t]=n}return t}(e,t);zr.test(n)?e.setProperty(B(r),n.replace(zr,""),"important"):e[r]=n}}const Wr=["Webkit","Moz","ms"],Jr={};const Qr="http://www.w3.org/1999/xlink";let Xr=Date.now,Yr=!1;if("undefined"!=typeof window){Xr()>document.createEvent("Event").timeStamp&&(Xr=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Yr=!!(e&&Number(e[1])<=53)}let Zr=0;const es=Promise.resolve(),ts=()=>{Zr=0};function ns(e,t,n,r){e.addEventListener(t,n,r)}function rs(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(ss.test(e)){let n;for(t={};n=e.match(ss);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[B(e.slice(2)),t]}(t);if(r){ns(e,n,i[t]=function(e,t){const n=e=>{const r=e.timeStamp||Xr();(Yr||r>=n.attached-1)&&dt(function(e,t){if(T(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=(()=>Zr||(es.then(ts),Zr=Xr()))(),n}(r,s),a)}else o&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),i[t]=void 0)}}const ss=/(?:Once|Passive|Capture)$/;const is=/^on[a-z]/;const os=e=>{const t=e.props["onUpdate:modelValue"];return T(t)?e=>H(t,e):t};function as(e){e.target.composing=!0}function cs(e){const t=e.target;t.composing&&(t.composing=!1,function(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}(t,"input"))}const ls={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=os(s);const i=r||"number"===e.type;ns(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n?r=r.trim():i&&(r=G(r)),e._assign(r)})),n&&ns(e,"change",(()=>{e.value=e.value.trim()})),t||(ns(e,"compositionstart",as),ns(e,"compositionend",cs),ns(e,"change",cs))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{trim:n,number:r}},s){if(e._assign=os(s),e.composing)return;if(document.activeElement===e){if(n&&e.value.trim()===t)return;if((r||"number"===e.type)&&G(e.value)===t)return}const i=null==t?"":t;e.value!==i&&(e.value=i)}},us={created(e,t,n){e._assign=os(n),ns(e,"change",(()=>{const t=e._modelValue,n=ps(e),r=e.checked,s=e._assign;if(T(t)){const e=l(t,n),i=-1!==e;if(r&&!i)s(t.concat(n));else if(!r&&i){const n=[...t];n.splice(e,1),s(n)}}else if(S(t)){const e=new Set(t);r?e.add(n):e.delete(n),s(e)}else s(gs(e,r))}))},mounted:hs,beforeUpdate(e,t,n){e._assign=os(n),hs(e,t,n)}};function hs(e,{value:t,oldValue:n},r){e._modelValue=t,T(t)?e.checked=l(t,r.props.value)>-1:S(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=c(t,gs(e,!0)))}const ds={created(e,{value:t,modifiers:{number:n}},r){const s=S(t);ns(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?G(ps(e)):ps(e)));e._assign(e.multiple?s?new Set(t):t:t[0])})),e._assign=os(r)},mounted(e,{value:t}){fs(e,t)},beforeUpdate(e,t,n){e._assign=os(n)},updated(e,{value:t}){fs(e,t)}};function fs(e,t){const n=e.multiple;if(!n||T(t)||S(t)){for(let r=0,s=e.options.length;r<s;r++){const s=e.options[r],i=ps(s);if(n)T(t)?s.selected=l(t,i)>-1:s.selected=t.has(i);else if(c(ps(s),t))return void(e.selectedIndex=r)}n||(e.selectedIndex=-1)}}function ps(e){return"_value"in e?e._value:e.value}function gs(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const ms={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ys=(e,t)=>n=>{if(!("key"in n))return;const r=B(n.key);return t.some((e=>e===r||ms[e]===r))?e(n):void 0},vs=w({patchProp:(e,t,r,s,i=!1,o,a,c,l)=>{switch(t){case"class":!function(e,t,n){if(null==t&&(t=""),n)e.setAttribute("class",t);else{const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),e.className=t}}(e,s,i);break;case"style":!function(e,t,n){const r=e.style;if(n)if(A(n)){if(t!==n){const t=r.display;r.cssText=n,"_vod"in e&&(r.display=t)}}else{for(const e in n)Gr(r,e,n[e]);if(t&&!A(t))for(const e in t)null==n[e]&&Gr(r,e,"")}else e.removeAttribute("style")}(e,r,s);break;default:y(t)?v(t)||rs(e,t,0,s,a):function(e,t,n,r){if(r)return"innerHTML"===t||!!(t in e&&is.test(t)&&C(n));if("spellcheck"===t||"draggable"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(is.test(t)&&A(n))return!1;return t in e}(e,t,s,i)?function(e,t,n,r,s,i,o){if("innerHTML"===t||"textContent"===t)return r&&o(r,s,i),void(e[t]=null==n?"":n);if("value"!==t||"PROGRESS"===e.tagName){if(""===n||null==n){const r=typeof e[t];if(""===n&&"boolean"===r)return void(e[t]=!0);if(null==n&&"string"===r)return e[t]="",void e.removeAttribute(t);if("number"===r)return e[t]=0,void e.removeAttribute(t)}try{e[t]=n}catch(a){}}else{e._value=n;const t=null==n?"":n;e.value!==t&&(e.value=t)}}(e,t,s,o,a,c,l):("true-value"===t?e._trueValue=s:"false-value"===t&&(e._falseValue=s),function(e,t,r,s){if(s&&t.startsWith("xlink:"))null==r?e.removeAttributeNS(Qr,t.slice(6,t.length)):e.setAttributeNS(Qr,t,r);else{const s=n(t);null==r||s&&!1===r?e.removeAttribute(t):e.setAttribute(t,s?"":r)}}(e,t,s,i))}},forcePatchProp:(e,t)=>"value"===t},Hr);let ws;const _s=(...e)=>{const t=(ws||(ws=jn(vs))).createApp(...e),{mount:n}=t;return t.mount=e=>{const r=function(e){if(A(e)){return document.querySelector(e)}return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);if(!r)return;const s=t._component;C(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};const bs=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},Es={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const t=e[s],i=s+1<e.length,o=i?e[s+1]:0,a=s+2<e.length,c=a?e[s+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(bs(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],i=s<e.length?n[e.charAt(s)]:0;++s;const o=s<e.length?n[e.charAt(s)]:64;++s;const a=s<e.length?n[e.charAt(s)]:64;if(++s,null==t||null==i||null==o||null==a)throw Error();const c=t<<2|i>>4;if(r.push(c),64!==o){const e=i<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ts=function(e){const t=bs(e);return Es.encodeByteArray(t,!0)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Is{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ks(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ss())}function Cs(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function As(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Ns(){const e=Ss();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}class Os extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Os.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rs.prototype.create)}}class Rs{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?function(e,t){return e.replace(Ds,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new Os(r,o,n)}}const Ds=/\{\$([^}]+)}/g;function xs(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(Ps(n)&&Ps(i)){if(!xs(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ps(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class Ms{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Us),void 0===r.error&&(r.error=Us),void 0===r.complete&&(r.complete=Us);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Us(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(e){return e&&e._delegate?e._delegate:e}class Fs{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class js{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Is;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,i]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(s)&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(s){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Bs{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new js(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qs,$s;($s=qs||(qs={}))[$s.DEBUG=0]="DEBUG",$s[$s.VERBOSE=1]="VERBOSE",$s[$s.INFO=2]="INFO",$s[$s.WARN=3]="WARN",$s[$s.ERROR=4]="ERROR",$s[$s.SILENT=5]="SILENT";const Ks={debug:qs.DEBUG,verbose:qs.VERBOSE,info:qs.INFO,warn:qs.WARN,error:qs.ERROR,silent:qs.SILENT},Hs=qs.INFO,zs={[qs.DEBUG]:"log",[qs.VERBOSE]:"log",[qs.INFO]:"info",[qs.WARN]:"warn",[qs.ERROR]:"error"},Gs=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=zs[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class Ws{constructor(e){this.name=e,this._logLevel=Hs,this._logHandler=Gs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in qs))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ks[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,qs.DEBUG,...e),this._logHandler(this,qs.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,qs.VERBOSE,...e),this._logHandler(this,qs.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,qs.INFO,...e),this._logHandler(this,qs.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,qs.WARN,...e),this._logHandler(this,qs.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,qs.ERROR,...e),this._logHandler(this,qs.ERROR,...e)}}function Js(e){return Array.prototype.slice.call(e)}function Qs(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function Xs(e,t,n){var r,s=new Promise((function(s,i){Qs(r=e[t].apply(e,n)).then(s,i)}));return s.request=r,s}function Ys(e,t,n){var r=Xs(e,t,n);return r.then((function(e){if(e)return new si(e,r.request)}))}function Zs(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function ei(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return Xs(this[t],r,arguments)})}))}function ti(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function ni(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return Ys(this[t],r,arguments)})}))}function ri(e){this._index=e}function si(e,t){this._cursor=e,this._request=t}function ii(e){this._store=e}function oi(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function ai(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new oi(n)}function ci(e){this._db=e}Zs(ri,"_index",["name","keyPath","multiEntry","unique"]),ei(ri,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),ni(ri,"_index",IDBIndex,["openCursor","openKeyCursor"]),Zs(si,"_cursor",["direction","key","primaryKey","value"]),ei(si,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(si.prototype[e]=function(){var t=this,n=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,n),Qs(t._request).then((function(e){if(e)return new si(e,t._request)}))}))})})),ii.prototype.createIndex=function(){return new ri(this._store.createIndex.apply(this._store,arguments))},ii.prototype.index=function(){return new ri(this._store.index.apply(this._store,arguments))},Zs(ii,"_store",["name","keyPath","indexNames","autoIncrement"]),ei(ii,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),ni(ii,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),ti(ii,"_store",IDBObjectStore,["deleteIndex"]),oi.prototype.objectStore=function(){return new ii(this._tx.objectStore.apply(this._tx,arguments))},Zs(oi,"_tx",["objectStoreNames","mode"]),ti(oi,"_tx",IDBTransaction,["abort"]),ai.prototype.createObjectStore=function(){return new ii(this._db.createObjectStore.apply(this._db,arguments))},Zs(ai,"_db",["name","version","objectStoreNames"]),ti(ai,"_db",IDBDatabase,["deleteObjectStore","close"]),ci.prototype.transaction=function(){return new oi(this._db.transaction.apply(this._db,arguments))},Zs(ci,"_db",["name","version","objectStoreNames"]),ti(ci,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[ii,ri].forEach((function(t){e in t.prototype&&(t.prototype[e.replace("open","iterate")]=function(){var t=Js(arguments),n=t[t.length-1],r=this._store||this._index,s=r[e].apply(r,t.slice(0,-1));s.onsuccess=function(){n(s.result)}})}))})),[ri,ii].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(s){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():s(r)):s(r)}))}))})}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class li{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const ui="@firebase/app",hi=new Ws("@firebase/app"),di={[ui]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},fi=new Map,pi=new Map;function gi(e,t){try{e.container.addComponent(t)}catch(n){hi.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function mi(e){const t=e.name;if(pi.has(t))return hi.debug(`There were multiple attempts to register component ${t}.`),!1;pi.set(t,e);for(const n of fi.values())gi(n,e);return!0}function yi(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new Rs("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wi{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Fs("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vi.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw vi.create("bad-app-name",{appName:String(r)});const s=fi.get(r);if(s){if(xs(e,s.options)&&xs(n,s.config))return s;throw vi.create("duplicate-app",{appName:r})}const i=new Bs(r);for(const a of pi.values())i.addComponent(a);const o=new wi(e,n,i);return fi.set(r,o),o}function bi(e="[DEFAULT]"){const t=fi.get(e);if(!t)throw vi.create("no-app",{appName:e});return t}function Ei(e,t,n){var r;let s=null!==(r=di[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${s}" with version "${t}":`];return i&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void hi.warn(e.join(" "))}mi(new Fs(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="firebase-heartbeat-store";let Ii=null;function Si(){var e,t,n,r,s;return Ii||(Ii=(e="firebase-heartbeat-database",t=1,n=e=>{switch(e.oldVersion){case 0:e.createObjectStore(Ti)}},r=Xs(indexedDB,"open",[e,t]),s=r.request,s&&(s.onupgradeneeded=function(e){n&&n(new ai(s.result,e.oldVersion,s.transaction))}),r.then((function(e){return new ci(e)}))).catch((e=>{throw vi.create("storage-open",{originalErrorMessage:e.message})}))),Ii}async function ki(e,t){try{const n=(await Si()).transaction(Ti,"readwrite"),r=n.objectStore(Ti);return await r.put(t,Ci(e)),n.complete}catch(n){throw vi.create("storage-set",{originalErrorMessage:n.message})}}function Ci(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Ni(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=(new Date).toISOString().substring(0,10);if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some((e=>e.date===t)))return this._heartbeatsCache.push({date:t,userAgent:e}),this._heartbeatsCache=this._heartbeatsCache.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache)return"";const{heartbeatsToSend:e,unsentEntries:t}=function(e,t=1024){const n=[];let r=e.slice();for(const s of e){const e=n.find((e=>e.userAgent===s.userAgent));if(e){if(e.dates.push(s.date),Oi(n)>t){e.dates.pop();break}}else if(n.push({userAgent:s.userAgent,dates:[s.date]}),Oi(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache),n=Ts(JSON.stringify({version:2,heartbeats:e}));return t.length>0?(this._heartbeatsCache=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),n}}class Ni{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{return(await Si()).transaction(Ti).objectStore(Ti).get(Ci(e))}catch(t){throw vi.create("storage-get",{originalErrorMessage:t.message})}}(this.app);return(null==e?void 0:e.heartbeats)||[]}return[]}async overwrite(e){return await this._canUseIndexedDBPromise?ki(this.app,{heartbeats:e}):void 0}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return ki(this.app,{heartbeats:[...t,...e]})}}async delete(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return ki(this.app,{heartbeats:t.filter((t=>!e.includes(t)))})}}async deleteAll(){return await this._canUseIndexedDBPromise?async function(e){try{const t=(await Si()).transaction(Ti,"readwrite");return await t.objectStore(Ti).delete(Ci(e)),t.complete}catch(t){throw vi.create("storage-delete",{originalErrorMessage:t.message})}}(this.app):void 0}}function Oi(e){return Ts(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ri;Ri="",mi(new Fs("platform-logger",(e=>new li(e)),"PRIVATE")),mi(new Fs("heartbeat",(e=>new Ai(e)),"PRIVATE")),Ei(ui,"0.7.18",Ri),Ei(ui,"0.7.18","esm2017"),Ei("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ei("firebase","9.6.8","app");var Di,xi="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Pi=Pi||{},Li=xi||self;function Mi(){}function Ui(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Vi(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Fi="closure_uid_"+(1e9*Math.random()>>>0),ji=0;function Bi(e,t,n){return e.call.apply(e.bind,arguments)}function qi(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function $i(e,t,n){return($i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Bi:qi).apply(null,arguments)}function Ki(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Hi(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}function zi(){this.s=this.s,this.o=this.o}var Gi={};zi.prototype.s=!1,zi.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,Fi)&&e[Fi]||(e[Fi]=++ji)}(this);delete Gi[e]}},zi.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Wi=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Ji=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,s="string"==typeof e?e.split(""):e;for(let i=0;i<r;i++)i in s&&t.call(n,s[i],i,e)};function Qi(e){return Array.prototype.concat.apply([],arguments)}function Xi(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Yi(e){return/^[\s\xa0]*$/.test(e)}var Zi,eo=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function to(e,t){return-1!=e.indexOf(t)}function no(e,t){return e<t?-1:e>t?1:0}e:{var ro=Li.navigator;if(ro){var so=ro.userAgent;if(so){Zi=so;break e}}Zi=""}function io(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function oo(e){const t={};for(const n in e)t[n]=e[n];return t}var ao="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function co(e,t){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)e[n]=r[n];for(let t=0;t<ao.length;t++)n=ao[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function lo(e){return lo[" "](e),e}lo[" "]=Mi;var uo,ho,fo=to(Zi,"Opera"),po=to(Zi,"Trident")||to(Zi,"MSIE"),go=to(Zi,"Edge"),mo=go||po,yo=to(Zi,"Gecko")&&!(to(Zi.toLowerCase(),"webkit")&&!to(Zi,"Edge"))&&!(to(Zi,"Trident")||to(Zi,"MSIE"))&&!to(Zi,"Edge"),vo=to(Zi.toLowerCase(),"webkit")&&!to(Zi,"Edge");function wo(){var e=Li.document;return e?e.documentMode:void 0}e:{var _o="",bo=(ho=Zi,yo?/rv:([^\);]+)(\)|;)/.exec(ho):go?/Edge\/([\d\.]+)/.exec(ho):po?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(ho):vo?/WebKit\/(\S+)/.exec(ho):fo?/(?:Version)[ \/]?(\S+)/.exec(ho):void 0);if(bo&&(_o=bo?bo[1]:""),po){var Eo=wo();if(null!=Eo&&Eo>parseFloat(_o)){uo=String(Eo);break e}}uo=_o}var To,Io={};function So(){return function(e){var t=Io;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=eo(String(uo)).split("."),n=eo("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var s=t[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;e=no(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||no(0==s[2].length,0==i[2].length)||no(s[2],i[2]),s=s[3],i=i[3]}while(0==e)}return 0<=e}))}if(Li.document&&po){var ko=wo();To=ko||(parseInt(uo,10)||void 0)}else To=void 0;var Co=To,Ao=function(){if(!Li.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Li.addEventListener("test",Mi,t),Li.removeEventListener("test",Mi,t)}catch(n){}return e}();function No(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function Oo(e,t){if(No.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(yo){e:{try{lo(t.nodeName);var s=!0;break e}catch(i){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Ro[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Oo.Z.h.call(this)}}No.prototype.h=function(){this.defaultPrevented=!0},Hi(Oo,No);var Ro={2:"touch",3:"pen",4:"mouse"};Oo.prototype.h=function(){Oo.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Do="closure_listenable_"+(1e6*Math.random()|0),xo=0;function Po(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=s,this.key=++xo,this.ca=this.fa=!1}function Lo(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Mo(e){this.src=e,this.g={},this.h=0}function Uo(e,t){var n=t.type;if(n in e.g){var r,s=e.g[n],i=Wi(s,t);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Lo(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Vo(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==r)return s}return-1}Mo.prototype.add=function(e,t,n,r,s){var i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);var o=Vo(e,t,r,s);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new Po(t,this.src,i,!!r,s)).fa=n,e.push(t)),t};var Fo="closure_lm_"+(1e6*Math.random()|0),jo={};function Bo(e,t,n,r,s){if(r&&r.once)return $o(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Bo(e,t[i],n,r,s);return null}return n=Qo(n),e&&e[Do]?e.N(t,n,Vi(r)?!!r.capture:!!r,s):qo(e,t,n,!1,r,s)}function qo(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Vi(s)?!!s.capture:!!s,a=Wo(e);if(a||(e[Fo]=a=new Mo(e)),(n=a.add(t,n,r,o,i)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=Go;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Ao||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(zo(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function $o(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)$o(e,t[i],n,r,s);return null}return n=Qo(n),e&&e[Do]?e.O(t,n,Vi(r)?!!r.capture:!!r,s):qo(e,t,n,!0,r,s)}function Ko(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Ko(e,t[i],n,r,s);else r=Vi(r)?!!r.capture:!!r,n=Qo(n),e&&e[Do]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Vo(i=e.g[t],n,r,s))&&(Lo(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=Wo(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Vo(t,n,r,s)),(n=-1<e?t[e]:null)&&Ho(n))}function Ho(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Do])Uo(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(zo(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Wo(t))?(Uo(n,e),0==n.h&&(n.src=null,t[Fo]=null)):Lo(e)}}}function zo(e){return e in jo?jo[e]:jo[e]="on"+e}function Go(e,t){if(e.ca)e=!0;else{t=new Oo(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&Ho(e),e=n.call(r,t)}return e}function Wo(e){return(e=e[Fo])instanceof Mo?e:null}var Jo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qo(e){return"function"==typeof e?e:(e[Jo]||(e[Jo]=function(t){return e.handleEvent(t)}),e[Jo])}function Xo(){zi.call(this),this.i=new Mo(this),this.P=this,this.I=null}function Yo(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new No(t,e);else if(t instanceof No)t.target=t.target||e;else{var s=t;co(t=new No(r,e),s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=Zo(o,r,!0,t)&&s}if(s=Zo(o=t.g=e,r,!0,t)&&s,s=Zo(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)s=Zo(o=t.g=n[i],r,!1,t)&&s}function Zo(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Uo(e.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}Hi(Xo,zi),Xo.prototype[Do]=!0,Xo.prototype.removeEventListener=function(e,t,n,r){Ko(this,e,t,n,r)},Xo.prototype.M=function(){if(Xo.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Lo(n[r]);delete t.g[e],t.h--}}this.I=null},Xo.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Xo.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var ea=Li.JSON.stringify;function ta(){var e=ca;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var na,ra=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new sa),(e=>e.reset()));class sa{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function ia(e){Li.setTimeout((()=>{throw e}),0)}function oa(e,t){na||function(){var e=Li.Promise.resolve(void 0);na=function(){e.then(la)}}(),aa||(na(),aa=!0),ca.add(e,t)}var aa=!1,ca=new class{constructor(){this.h=this.g=null}add(e,t){const n=ra.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function la(){for(var e;e=ta();){try{e.h.call(e.g)}catch(n){ia(n)}var t=ra;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}aa=!1}function ua(e,t){Xo.call(this),this.h=e||1,this.g=t||Li,this.j=$i(this.kb,this),this.l=Date.now()}function ha(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function da(e,t,n){if("function"==typeof e)n&&(e=$i(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=$i(e.handleEvent,e)}return 2147483647<Number(t)?-1:Li.setTimeout(e,t||0)}function fa(e){e.g=da((()=>{e.g=null,e.i&&(e.i=!1,fa(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Hi(ua,Xo),(Di=ua.prototype).da=!1,Di.S=null,Di.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Yo(this,"tick"),this.da&&(ha(this),this.start()))}},Di.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Di.M=function(){ua.Z.M.call(this),ha(this),delete this.g};class pa extends zi{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:fa(this)}M(){super.M(),this.g&&(Li.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ga(e){zi.call(this),this.h=e,this.g={}}Hi(ga,zi);var ma=[];function ya(e,t,n,r){Array.isArray(n)||(n&&(ma[0]=n.toString()),n=ma);for(var s=0;s<n.length;s++){var i=Bo(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function va(e){io(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Ho(e)}),e),e.g={}}function wa(){this.g=!0}function _a(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return ea(n)}catch(a){return t}}(e,n)+(r?" "+r:"")}))}ga.prototype.M=function(){ga.Z.M.call(this),va(this)},ga.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},wa.prototype.Aa=function(){this.g=!1},wa.prototype.info=function(){};var ba={},Ea=null;function Ta(){return Ea=Ea||new Xo}function Ia(e){No.call(this,ba.Ma,e)}function Sa(e){const t=Ta();Yo(t,new Ia(t,e))}function ka(e,t){No.call(this,ba.STAT_EVENT,e),this.stat=t}function Ca(e){const t=Ta();Yo(t,new ka(t,e))}function Aa(e,t){No.call(this,ba.Na,e),this.size=t}function Na(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Li.setTimeout((function(){e()}),t)}ba.Ma="serverreachability",Hi(Ia,No),ba.STAT_EVENT="statevent",Hi(ka,No),ba.Na="timingevent",Hi(Aa,No);var Oa={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ra={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Da(){}function xa(e){return e.h||(e.h=e.i())}function Pa(){}Da.prototype.h=null;var La,Ma={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ua(){No.call(this,"d")}function Va(){No.call(this,"c")}function Fa(){}function ja(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new ga(this),this.P=qa,e=mo?125:void 0,this.W=new ua(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ba}function Ba(){this.i=null,this.g="",this.h=!1}Hi(Ua,No),Hi(Va,No),Hi(Fa,Da),Fa.prototype.g=function(){return new XMLHttpRequest},Fa.prototype.i=function(){return{}},La=new Fa;var qa=45e3,$a={},Ka={};function Ha(e,t,n){e.K=1,e.v=pc(cc(t)),e.s=n,e.U=!0,za(e,null)}function za(e,t){e.F=Date.now(),Qa(e),e.A=cc(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),Cc(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Ba,e.g=Cl(e.l,n?t:null,!e.s),0<e.O&&(e.L=new pa($i(e.Ia,e,e.g),e.O)),ya(e.V,e.g,"readystatechange",e.gb),t=e.H?oo(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Sa(1),function(e,t,n,r,s,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function Ga(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Wa(e,t,n){let r,s=!0;for(;!e.I&&e.C<n.length;){if(r=Ja(e,n),r==Ka){4==t&&(e.o=4,Ca(14),s=!1),_a(e.j,e.m,null,"[Incomplete Response]");break}if(r==$a){e.o=4,Ca(15),_a(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}_a(e.j,e.m,r,null),tc(e,r)}Ga(e)&&r!=Ka&&r!=$a&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Ca(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),wl(t),t.L=!0,Ca(11))):(_a(e.j,e.m,n,"[Invalid Chunked Response]"),ec(e),Za(e))}function Ja(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Ka:(n=Number(t.substring(n,r)),isNaN(n)?$a:(r+=1)+n>t.length?Ka:(t=t.substr(r,n),e.C=r+n,t))}function Qa(e){e.Y=Date.now()+e.P,Xa(e,e.P)}function Xa(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Na($i(e.eb,e),t)}function Ya(e){e.B&&(Li.clearTimeout(e.B),e.B=null)}function Za(e){0==e.l.G||e.I||El(e.l,e)}function ec(e){Ya(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,ha(e.W),va(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function tc(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||xc(n.i,e)))if(n.I=e.N,!e.J&&xc(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;bl(n),ul(n)}vl(n),Ca(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=Na($i(n.ab,n),6e3));if(1>=Dc(n.i)&&n.ka){try{n.ka()}catch(l){}n.ka=void 0}}else Il(n,11)}else if((e.J||n.g==e)&&bl(n),!Yi(t))for(s=n.Ca.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const s=l[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.i;!i.g&&(to(e,"spdy")||to(e,"quic")||to(e,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Pc(i,i.h),i.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,fc(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((r=n).oa=kl(r,r.H?r.la:null,r.W),o.J){Lc(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Ya(a),Qa(a)),r.g=o}else yl(r);0<n.l.length&&fl(n)}else"stop"!=l[0]&&"close"!=l[0]||Il(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Il(n,7):ll(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}Sa(4)}catch(l){}}function nc(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Ui(e)||"string"==typeof e)Ji(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(Ui(e)||"string"==typeof e){n=[];for(var r=e.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,e)n[r++]=s;s=(r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(Ui(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e)).length;for(var i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}}function rc(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof rc)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function sc(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];ic(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var s={};for(n=t=0;t<e.g.length;)ic(s,r=e.g[t])||(e.g[n++]=r,s[r]=1),t++;e.g.length=n}}function ic(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(Di=ja.prototype).setTimeout=function(e){this.P=e},Di.gb=function(e){e=e.target;const t=this.L;t&&3==sl(e)?t.l():this.Ia(e)},Di.Ia=function(e){try{if(e==this.g)e:{const u=sl(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(3!=u||mo||this.g&&(this.h.h||this.g.ga()||il(this.g)))){this.I||4!=u||7==t||Sa(8==t||0>=h?3:2),Ya(this);var n=this.g.ba();this.N=n;t:if(Ga(this)){var r=il(this.g);e="";var s=r.length,i=4==sl(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ec(this),Za(this);var o="";break t}this.h.i=new Li.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,r,s,i,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Yi(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,Ca(12),ec(this),Za(this);break e}_a(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,tc(this,n)}this.U?(Wa(this,u,o),mo&&this.i&&3==u&&(ya(this.V,this.W,"tick",this.fb),this.W.start())):(_a(this.j,this.m,o,null),tc(this,o)),4==u&&ec(this),this.i&&!this.I&&(4==u?El(this.l,this):(this.i=!1,Qa(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ca(12)):(this.o=0,Ca(13)),ec(this),Za(this)}}}catch(u){}},Di.fb=function(){if(this.g){var e=sl(this.g),t=this.g.ga();this.C<t.length&&(Ya(this),Wa(this,e,t),this.i&&4!=e&&Qa(this))}},Di.cancel=function(){this.I=!0,ec(this)},Di.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Sa(3),Ca(17)),ec(this),this.o=2,Za(this)):Xa(this,this.Y-e)},(Di=rc.prototype).R=function(){sc(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Di.T=function(){return sc(this),this.g.concat()},Di.get=function(e,t){return ic(this.h,e)?this.h[e]:t},Di.set=function(e,t){ic(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Di.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);e.call(t,i,s,this)}};var oc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ac(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof ac){this.g=void 0!==t?t:e.g,lc(this,e.j),this.s=e.s,uc(this,e.i),hc(this,e.m),this.l=e.l,t=e.h;var n=new Tc;n.i=t.i,t.g&&(n.g=new rc(t.g),n.h=t.h),dc(this,n),this.o=e.o}else e&&(n=String(e).match(oc))?(this.g=!!t,lc(this,n[1]||"",!0),this.s=gc(n[2]||""),uc(this,n[3]||"",!0),hc(this,n[4]),this.l=gc(n[5]||"",!0),dc(this,n[6]||"",!0),this.o=gc(n[7]||"")):(this.g=!!t,this.h=new Tc(null,this.g))}function cc(e){return new ac(e)}function lc(e,t,n){e.j=n?gc(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function uc(e,t,n){e.i=n?gc(t,!0):t}function hc(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function dc(e,t,n){t instanceof Tc?(e.h=t,function(e,t){t&&!e.j&&(Ic(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Sc(this,t),Cc(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=mc(t,bc)),e.h=new Tc(t,e.g))}function fc(e,t,n){e.h.set(t,n)}function pc(e){return fc(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function gc(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function mc(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,yc),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function yc(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}ac.prototype.toString=function(){var e=[],t=this.j;t&&e.push(mc(t,vc,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(mc(t,vc,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(mc(n,"/"==n.charAt(0)?_c:wc,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",mc(n,Ec)),e.join("")};var vc=/[#\/\?@]/g,wc=/[#\?:]/g,_c=/[#\?]/g,bc=/[#\?@]/g,Ec=/#/g;function Tc(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Ic(e){e.g||(e.g=new rc,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Sc(e,t){Ic(e),t=Ac(e,t),ic(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,ic((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&sc(e)))}function kc(e,t){return Ic(e),t=Ac(e,t),ic(e.g.h,t)}function Cc(e,t,n){Sc(e,t),0<n.length&&(e.i=null,e.g.set(Ac(e,t),Xi(n)),e.h+=n.length)}function Ac(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Di=Tc.prototype).add=function(e,t){Ic(this),this.i=null,e=Ac(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Di.forEach=function(e,t){Ic(this),this.g.forEach((function(n,r){Ji(n,(function(n){e.call(t,n,r,this)}),this)}),this)},Di.T=function(){Ic(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var s=e[r],i=0;i<s.length;i++)n.push(t[r]);return n},Di.R=function(e){Ic(this);var t=[];if("string"==typeof e)kc(this,e)&&(t=Qi(t,this.g.get(Ac(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Qi(t,e[n])}return t},Di.set=function(e,t){return Ic(this),this.i=null,kc(this,e=Ac(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Di.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},Di.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),e.push(o)}}return this.i=e.join("&")};function Nc(e){this.l=e||Oc,Li.PerformanceNavigationTiming?e=0<(e=Li.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Li.g&&Li.g.Ea&&Li.g.Ea()&&Li.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Oc=10;function Rc(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Dc(e){return e.h?1:e.g?e.g.size:0}function xc(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Pc(e,t){e.g?e.g.add(t):e.h=t}function Lc(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Mc(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Xi(e.i)}function Uc(){}function Vc(){this.g=new Uc}function Fc(e,t,n){const r=n||"";try{nc(e,(function(e,n){let s=e;Vi(e)&&(s=ea(e)),t.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function jc(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch(i){}}function Bc(e){this.l=e.$b||null,this.j=e.ib||!1}function qc(e,t){Xo.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=$c,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Nc.prototype.cancel=function(){if(this.i=Mc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Uc.prototype.stringify=function(e){return Li.JSON.stringify(e,void 0)},Uc.prototype.parse=function(e){return Li.JSON.parse(e,void 0)},Hi(Bc,Da),Bc.prototype.g=function(){return new qc(this.l,this.j)},Bc.prototype.i=function(e){return function(){return e}}({}),Hi(qc,Xo);var $c=0;function Kc(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Hc(e){e.readyState=4,e.l=null,e.j=null,e.A=null,zc(e)}function zc(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Di=qc.prototype).open=function(e,t){if(this.readyState!=$c)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,zc(this)},Di.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Li).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Di.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Hc(this)),this.readyState=$c},Di.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,zc(this)),this.g&&(this.readyState=3,zc(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Li.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Kc(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Di.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Hc(this):zc(this),3==this.readyState&&Kc(this)}},Di.Ua=function(e){this.g&&(this.response=this.responseText=e,Hc(this))},Di.Ta=function(e){this.g&&(this.response=e,Hc(this))},Di.ha=function(){this.g&&Hc(this)},Di.setRequestHeader=function(e,t){this.v.append(e,t)},Di.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Di.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(qc.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Gc=Li.JSON.parse;function Wc(e){Xo.call(this),this.headers=new rc,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Jc,this.K=this.L=!1}Hi(Wc,Xo);var Jc="",Qc=/^https?$/i,Xc=["POST","PUT"];function Yc(e){return"content-type"==e.toLowerCase()}function Zc(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,el(e),nl(e)}function el(e){e.D||(e.D=!0,Yo(e,"complete"),Yo(e,"error"))}function tl(e){if(e.h&&void 0!==Pi&&(!e.C[1]||4!=sl(e)||2!=e.ba()))if(e.v&&4==sl(e))da(e.Fa,0,e);else if(Yo(e,"readystatechange"),4==sl(e)){e.h=!1;try{const c=e.ba();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var s=String(e.H).match(oc)[1]||null;if(!s&&Li.self&&Li.self.location){var i=Li.self.location.protocol;s=i.substr(0,i.length-1)}r=!Qc.test(s?s.toLowerCase():"")}n=r}if(n)Yo(e,"complete"),Yo(e,"success");else{e.m=6;try{var o=2<sl(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.ba()+"]",el(e)}}finally{nl(e)}}}function nl(e,t){if(e.g){rl(e);const r=e.g,s=e.C[0]?Mi:null;e.g=null,e.C=null,t||Yo(e,"ready");try{r.onreadystatechange=s}catch(n){}}}function rl(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Li.clearTimeout(e.A),e.A=null)}function sl(e){return e.g?e.g.readyState:0}function il(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Jc:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function ol(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){let t="";return io(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):fc(e,t,n))}function al(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function cl(e){this.za=0,this.l=[],this.h=new wa,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=al("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=al("baseRetryDelayMs",5e3,e),this.$a=al("retryDelaySeedMs",1e4,e),this.Ya=al("forwardChannelMaxRetries",2,e),this.ra=al("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Nc(e&&e.concurrentRequestLimit),this.Ca=new Vc,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function ll(e){if(hl(e),3==e.G){var t=e.V++,n=cc(e.F);fc(n,"SID",e.J),fc(n,"RID",t),fc(n,"TYPE","terminate"),gl(e,n),(t=new ja(e,e.h,t,void 0)).K=2,t.v=pc(cc(n)),n=!1,Li.navigator&&Li.navigator.sendBeacon&&(n=Li.navigator.sendBeacon(t.v.toString(),"")),!n&&Li.Image&&((new Image).src=t.v,n=!0),n||(t.g=Cl(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Qa(t)}Sl(e)}function ul(e){e.g&&(wl(e),e.g.cancel(),e.g=null)}function hl(e){ul(e),e.u&&(Li.clearTimeout(e.u),e.u=null),bl(e),e.i.cancel(),e.m&&("number"==typeof e.m&&Li.clearTimeout(e.m),e.m=null)}function dl(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&fl(e)}function fl(e){Rc(e.i)||e.m||(e.m=!0,oa(e.Ha,e),e.C=0)}function pl(e,t){var n;n=t?t.m:e.V++;const r=cc(e.F);fc(r,"SID",e.J),fc(r,"RID",n),fc(r,"AID",e.U),gl(e,r),e.o&&e.s&&ol(r,e.o,e.s),n=new ja(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=ml(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Pc(e.i,n),Ha(n,r,t)}function gl(e,t){e.j&&nc({},(function(e,n){fc(t,n,e)}))}function ml(e,t,n){n=Math.min(e.l.length,n);var r=e.j?$i(e.j.Oa,e.j,e):null;e:{var s=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=s[a].h;const c=s[a].g;if(n-=t,0>n)t=Math.max(0,s[a].h-100),o=!1;else try{Fc(c,e,"req"+n+"_")}catch(i){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function yl(e){e.g||e.u||(e.Y=1,oa(e.Ga,e),e.A=0)}function vl(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=Na($i(e.Ga,e),Tl(e,e.A)),e.A++,!0)}function wl(e){null!=e.B&&(Li.clearTimeout(e.B),e.B=null)}function _l(e){e.g=new ja(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=cc(e.oa);fc(t,"RID","rpc"),fc(t,"SID",e.J),fc(t,"CI",e.N?"0":"1"),fc(t,"AID",e.U),gl(e,t),fc(t,"TYPE","xmlhttp"),e.o&&e.s&&ol(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=pc(cc(t)),n.s=null,n.U=!0,za(n,e)}function bl(e){null!=e.v&&(Li.clearTimeout(e.v),e.v=null)}function El(e,t){var n=null;if(e.g==t){bl(e),wl(e),e.g=null;var r=2}else{if(!xc(e.i,t))return;n=t.D,Lc(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;Yo(r=Ta(),new Aa(r,n,t,s)),fl(e)}else yl(e);else if(3==(s=t.o)||0==s&&0<e.I||!(1==r&&function(e,t){return!(Dc(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=Na($i(e.Ha,e,t),Tl(e,e.C)),e.C++,0)))}(e,t)||2==r&&vl(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Il(e,5);break;case 4:Il(e,10);break;case 3:Il(e,6);break;default:Il(e,2)}}function Tl(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Il(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=$i(e.jb,e);n||(n=new ac("//www.google.com/images/cleardot.gif"),Li.location&&"http"==Li.location.protocol||lc(n,"https"),pc(n)),function(e,t){const n=new wa;if(Li.Image){const r=new Image;r.onload=Ki(jc,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Ki(jc,n,r,"TestLoadImage: error",!1,t),r.onabort=Ki(jc,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Ki(jc,n,r,"TestLoadImage: timeout",!1,t),Li.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Ca(2);e.G=0,e.j&&e.j.va(t),Sl(e),hl(e)}function Sl(e){e.G=0,e.I=-1,e.j&&(0==Mc(e.i).length&&0==e.l.length||(e.i.i.length=0,Xi(e.l),e.l.length=0),e.j.ua())}function kl(e,t,n){let r=function(e){return e instanceof ac?cc(e):new ac(e,void 0)}(n);if(""!=r.i)t&&uc(r,t+"."+r.i),hc(r,r.m);else{const e=Li.location;r=function(e,t,n,r){var s=new ac(null,void 0);return e&&lc(s,e),t&&uc(s,t),n&&hc(s,n),r&&(s.l=r),s}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&io(e.aa,(function(e,t){fc(r,t,e)})),t=e.D,n=e.sa,t&&n&&fc(r,t,n),fc(r,"VER",e.ma),gl(e,r),r}function Cl(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new Wc(new Bc({ib:!0})):new Wc(e.qa)).L=e.H,t}function Al(){}function Nl(){if(po&&!(10<=Number(Co)))throw Error("Environmental error: no available transport.")}function Ol(e,t){Xo.call(this),this.g=new cl(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Yi(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Yi(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new xl(this)}function Rl(e){Ua.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Dl(){Va.call(this),this.status=1}function xl(e){this.g=e}(Di=Wc.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():La.g(),this.C=this.u?xa(this.u):xa(La),this.g.onreadystatechange=$i(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){return void Zc(this,i)}e=n||"";const s=new rc(this.headers);r&&nc(r,(function(e,t){s.set(t,e)})),r=function(e){e:{var t=Yc;const n=e.length,r="string"==typeof e?e.split(""):e;for(let s=0;s<n;s++)if(s in r&&t.call(void 0,r[s],s,e)){t=s;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(s.T()),n=Li.FormData&&e instanceof Li.FormData,!(0<=Wi(Xc,t))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{rl(this),0<this.B&&((this.K=function(e){return po&&So()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$i(this.pa,this)):this.A=da(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Zc(this,i)}},Di.pa=function(){void 0!==Pi&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Yo(this,"timeout"),this.abort(8))},Di.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Yo(this,"complete"),Yo(this,"abort"),nl(this))},Di.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),nl(this,!0)),Wc.Z.M.call(this)},Di.Fa=function(){this.s||(this.F||this.v||this.l?tl(this):this.cb())},Di.cb=function(){tl(this)},Di.ba=function(){try{return 2<sl(this)?this.g.status:-1}catch(ho){return-1}},Di.ga=function(){try{return this.g?this.g.responseText:""}catch(ho){return""}},Di.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Gc(t)}},Di.Da=function(){return this.m},Di.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Di=cl.prototype).ma=8,Di.G=1,Di.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},Di.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new ja(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=oo(i),co(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ml(this,s,t),fc(n=cc(this.F),"RID",e),fc(n,"CVER",22),this.D&&fc(n,"X-HTTP-Session-Id",this.D),gl(this,n),this.o&&i&&ol(n,this.o,i),Pc(this.i,s),this.Ra&&fc(n,"TYPE","init"),this.ja?(fc(n,"$req",t),fc(n,"SID","null"),s.$=!0,Ha(s,n,null)):Ha(s,n,t),this.G=2}}else 3==this.G&&(e?pl(this,e):0==this.l.length||Rc(this.i)||pl(this))},Di.Ga=function(){if(this.u=null,_l(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Na($i(this.bb,this),e)}},Di.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ca(10),ul(this),_l(this))},Di.ab=function(){null!=this.v&&(this.v=null,ul(this),vl(this),Ca(19))},Di.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Ca(2)):(this.h.info("Failed to ping google.com"),Ca(1))},(Di=Al.prototype).xa=function(){},Di.wa=function(){},Di.va=function(){},Di.ua=function(){},Di.Oa=function(){},Nl.prototype.g=function(e,t){return new Ol(e,t)},Hi(Ol,Xo),Ol.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),oa($i(e.hb,e,t))),Ca(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=kl(e,null,e.W),fl(e)},Ol.prototype.close=function(){ll(this.g)},Ol.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,dl(this.g,t)}else this.v?((t={}).__data__=ea(e),dl(this.g,t)):dl(this.g,e)},Ol.prototype.M=function(){this.g.j=null,delete this.j,ll(this.g),delete this.g,Ol.Z.M.call(this)},Hi(Rl,Ua),Hi(Dl,Va),Hi(xl,Al),xl.prototype.xa=function(){Yo(this.g,"a")},xl.prototype.wa=function(e){Yo(this.g,new Rl(e))},xl.prototype.va=function(e){Yo(this.g,new Dl(e))},xl.prototype.ua=function(){Yo(this.g,"b")},Nl.prototype.createWebChannel=Nl.prototype.g,Ol.prototype.send=Ol.prototype.u,Ol.prototype.open=Ol.prototype.m,Ol.prototype.close=Ol.prototype.close,Oa.NO_ERROR=0,Oa.TIMEOUT=8,Oa.HTTP_ERROR=6,Ra.COMPLETE="complete",Pa.EventType=Ma,Ma.OPEN="a",Ma.CLOSE="b",Ma.ERROR="c",Ma.MESSAGE="d",Xo.prototype.listen=Xo.prototype.N,Wc.prototype.listenOnce=Wc.prototype.O,Wc.prototype.getLastError=Wc.prototype.La,Wc.prototype.getLastErrorCode=Wc.prototype.Da,Wc.prototype.getStatus=Wc.prototype.ba,Wc.prototype.getResponseJson=Wc.prototype.Qa,Wc.prototype.getResponseText=Wc.prototype.ga,Wc.prototype.send=Wc.prototype.ea;var Pl=Oa,Ll=Ra,Ml=ba,Ul=10,Vl=11,Fl=Bc,jl=Pa,Bl=Wc;const ql="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}$l.UNAUTHENTICATED=new $l(null),$l.GOOGLE_CREDENTIALS=new $l("google-credentials-uid"),$l.FIRST_PARTY=new $l("first-party-uid"),$l.MOCK_USER=new $l("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Kl="9.6.7";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl=new Ws("@firebase/firestore");function zl(){return Hl.logLevel}function Gl(e,...t){if(Hl.logLevel<=qs.DEBUG){const n=t.map(Ql);Hl.debug(`Firestore (${Kl}): ${e}`,...n)}}function Wl(e,...t){if(Hl.logLevel<=qs.ERROR){const n=t.map(Ql);Hl.error(`Firestore (${Kl}): ${e}`,...n)}}function Jl(e,...t){if(Hl.logLevel<=qs.WARN){const n=t.map(Ql);Hl.warn(`Firestore (${Kl}): ${e}`,...n)}}function Ql(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(n){return e}
/**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(e="Unexpected state"){const t=`FIRESTORE (${Kl}) INTERNAL ASSERTION FAILED: `+e;throw Wl(t),new Error(t)}function Yl(e,t){e||Xl()}function Zl(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class tu extends Os{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class su{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t($l.UNAUTHENTICATED)))}shutdown(){}}class iu{constructor(e){this.t=e,this.currentUser=$l.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new nu;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new nu,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Gl("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Gl("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new nu)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Gl("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Yl("string"==typeof t.accessToken),new ru(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Yl(null===e||"string"==typeof e),new $l(e)}}class ou{constructor(e,t,n){this.type="FirstParty",this.user=$l.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class au{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new ou(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t($l.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class cu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class lu{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&Gl("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,Gl("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Gl("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):Gl("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Yl("string"==typeof e.token),this.p=e.token,new cu(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */uu.A=-1;class du{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=hu(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function fu(e,t){return e<t?-1:e>t?1:0}function pu(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new tu(eu.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new tu(eu.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new tu(eu.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new tu(eu.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return gu.fromMillis(Date.now())}static fromDate(e){return gu.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new gu(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fu(this.nanoseconds,e.nanoseconds):fu(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e){this.timestamp=e}static fromTimestamp(e){return new mu(e)}static min(){return new mu(new gu(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function vu(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function wu(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t,n){void 0===t?t=0:t>e.length&&Xl(),void 0===n?n=e.length-t:n>e.length-t&&Xl(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===_u.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof _u?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),s=t.get(r);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class bu extends _u{construct(e,t,n){return new bu(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new tu(eu.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new bu(t)}static emptyPath(){return new bu([])}}const Eu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tu extends _u{construct(e,t,n){return new Tu(e,t,n)}static isValidIdentifier(e){return Eu.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tu.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Tu(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new tu(eu.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new tu(eu.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new tu(eu.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new tu(eu.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tu(t)}static emptyPath(){return new Tu([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e){this.fields=e,e.sort(Tu.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return pu(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Su(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Su(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fu(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Su.EMPTY_BYTE_STRING=new Su("");const ku=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cu(e){if(Yl(!!e),"string"==typeof e){let t=0;const n=ku.exec(e);if(Yl(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Au(e.seconds),nanos:Au(e.nanos)}}function Au(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Nu(e){return"string"==typeof e?Su.fromBase64String(e):Su.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ru(e){const t=e.mapValue.fields.__previous_value__;return Ou(t)?Ru(t):t}function Du(e){const t=Cu(e.mapValue.fields.__local_write_time__.timestampValue);return new gu(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e,t,n,r,s,i,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Pu{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Pu("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Pu&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(e){return null==e}function Mu(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uu{constructor(e){this.path=e}static fromPath(e){return new Uu(bu.fromString(e))}static fromName(e){return new Uu(bu.fromString(e).popFirst(5))}static empty(){return new Uu(bu.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===bu.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return bu.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Uu(new bu(e.slice()))}}function Vu(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ou(e)?4:10:Xl()}function Fu(e,t){if(e===t)return!0;const n=Vu(e);if(n!==Vu(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Du(e).isEqual(Du(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Cu(e.timestampValue),r=Cu(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Nu(e.bytesValue).isEqual(Nu(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Au(e.geoPointValue.latitude)===Au(t.geoPointValue.latitude)&&Au(e.geoPointValue.longitude)===Au(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Au(e.integerValue)===Au(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Au(e.doubleValue),r=Au(t.doubleValue);return n===r?Mu(n)===Mu(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return pu(e.arrayValue.values||[],t.arrayValue.values||[],Fu);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(yu(n)!==yu(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Fu(n[s],r[s])))return!1;return!0}(e,t);default:return Xl()}var r}function ju(e,t){return void 0!==(e.values||[]).find((e=>Fu(e,t)))}function Bu(e,t){if(e===t)return 0;const n=Vu(e),r=Vu(t);if(n!==r)return fu(n,r);switch(n){case 0:return 0;case 1:return fu(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Au(e.integerValue||e.doubleValue),r=Au(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return qu(e.timestampValue,t.timestampValue);case 4:return qu(Du(e),Du(t));case 5:return fu(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Nu(e),r=Nu(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){const e=fu(n[s],r[s]);if(0!==e)return e}return fu(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=fu(Au(e.latitude),Au(t.latitude));return 0!==n?n:fu(Au(e.longitude),Au(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const e=Bu(n[s],r[s]);if(e)return e}return fu(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const e=fu(r[o],i[o]);if(0!==e)return e;const t=Bu(n[r[o]],s[i[o]]);if(0!==t)return t}return fu(r.length,i.length)}(e.mapValue,t.mapValue);default:throw Xl()}}function qu(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return fu(e,t);const n=Cu(e),r=Cu(t),s=fu(n.seconds,r.seconds);return 0!==s?s:fu(n.nanos,r.nanos)}function $u(e){return Ku(e)}function Ku(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Cu(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Nu(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Uu.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Ku(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${Ku(e.fields[s])}`;return n+"}"}(e.mapValue):Xl();var t,n}function Hu(e){return!!e&&"integerValue"in e}function zu(e){return!!e&&"arrayValue"in e}function Gu(e){return!!e&&"nullValue"in e}function Wu(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ju(e){return!!e&&"mapValue"in e}function Qu(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return vu(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Qu(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Qu(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e){this.value=e}static empty(){return new Xu({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Ju(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qu(t)}setAll(e){let t=Tu.emptyPath(),n={},r=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=Qu(e):r.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());Ju(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fu(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Ju(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){vu(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Xu(Qu(this.value))}}function Yu(e){const t=[];return vu(e.fields,((e,n)=>{const r=new Tu([e]);if(Ju(n)){const e=Yu(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Iu(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Zu{constructor(e,t,n,r,s,i){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new Zu(e,0,mu.min(),mu.min(),Xu.empty(),0)}static newFoundDocument(e,t,n){return new Zu(e,1,t,mu.min(),n,0)}static newNoDocument(e,t){return new Zu(e,2,t,mu.min(),Xu.empty(),0)}static newUnknownDocument(e,t){return new Zu(e,3,t,mu.min(),Xu.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xu.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xu.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Zu&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zu(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.P=null}}function th(e,t=null,n=[],r=[],s=null,i=null,o=null){return new eh(e,t,n,r,s,i,o)}function nh(e){const t=Zl(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+$u(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),Lu(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>$u(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>$u(e))).join(",")),t.P=e}return t.P}function rh(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++)if(!mh(e.orderBy[s],t.orderBy[s]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],r=t.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Fu(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!vh(e.startAt,t.startAt)&&vh(e.endAt,t.endAt)}function sh(e){return Uu.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class ih extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.v(e,t,n):new oh(e,t,n):"array-contains"===t?new uh(e,n):"in"===t?new hh(e,n):"not-in"===t?new dh(e,n):"array-contains-any"===t?new fh(e,n):new ih(e,t,n)}static v(e,t,n){return"in"===t?new ah(e,n):new ch(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.V(Bu(t,this.value)):null!==t&&Vu(this.value)===Vu(t)&&this.V(Bu(t,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Xl()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class oh extends ih{constructor(e,t,n){super(e,t,n),this.key=Uu.fromName(n.referenceValue)}matches(e){const t=Uu.comparator(e.key,this.key);return this.V(t)}}class ah extends ih{constructor(e,t){super(e,"in",t),this.keys=lh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ch extends ih{constructor(e,t){super(e,"not-in",t),this.keys=lh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function lh(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Uu.fromName(e.referenceValue)))}class uh extends ih{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return zu(t)&&ju(t.arrayValue,this.value)}}class hh extends ih{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ju(this.value.arrayValue,t)}}class dh extends ih{constructor(e,t){super(e,"not-in",t)}matches(e){if(ju(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ju(this.value.arrayValue,t)}}class fh extends ih{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!zu(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ju(this.value.arrayValue,e)))}}class ph{constructor(e,t){this.position=e,this.inclusive=t}}class gh{constructor(e,t="asc"){this.field=e,this.dir=t}}function mh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function yh(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?Uu.comparator(Uu.fromName(o.referenceValue),n.key):Bu(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function vh(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Fu(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function _h(e){return new wh(e)}function bh(e){return!Lu(e.limit)&&"F"===e.limitType}function Eh(e){return!Lu(e.limit)&&"L"===e.limitType}function Th(e){const t=Zl(e);if(null===t.D){t.D=[];const e=function(e){for(const t of e.filters)if(t.S())return t.field;return null}(t),n=function(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new gh(e)),t.D.push(new gh(Tu.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new gh(Tu.keyField(),e))}}}return t.D}function Ih(e){const t=Zl(e);if(!t.C)if("F"===t.limitType)t.C=th(t.path,t.collectionGroup,Th(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of Th(t)){const t="desc"===s.dir?"asc":"desc";e.push(new gh(s.field,t))}const n=t.endAt?new ph(t.endAt.position,!t.endAt.inclusive):null,r=t.startAt?new ph(t.startAt.position,!t.startAt.inclusive):null;t.C=th(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.C}function Sh(e,t){return rh(Ih(e),Ih(t))&&e.limitType===t.limitType}function kh(e){return`${nh(Ih(e))}|lt:${e.limitType}`}function Ch(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${$u(t.value)}`;var t})).join(", ")}]`),Lu(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>$u(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>$u(e))).join(",")),`Target(${t})`}(Ih(e))}; limitType=${e.limitType})`}function Ah(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Uu.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=yh(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,Th(n),r)||n.endAt&&!function(e,t,n){const r=yh(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,Th(n),r)));var n,r}function Nh(e){return(t,n)=>{let r=!1;for(const s of Th(e)){const e=Oh(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function Oh(e,t,n){const r=e.field.isKeyField()?Uu.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?Bu(r,s):Xl()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Xl()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mu(t)?"-0":t}}function Dh(e){return{integerValue:""+e}}function xh(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Mu(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?Dh(t):Rh(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(){this._=void 0}}function Lh(e,t,n){return e instanceof Vh?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Fh?jh(e,t):e instanceof Bh?qh(e,t):function(e,t){const n=Uh(e,t),r=Kh(n)+Kh(e.k);return Hu(n)&&Hu(e.k)?Dh(r):Rh(e.O,r)}(e,t)}function Mh(e,t,n){return e instanceof Fh?jh(e,t):e instanceof Bh?qh(e,t):n}function Uh(e,t){return e instanceof $h?Hu(r=t)||(n=r)&&"doubleValue"in n?t:{integerValue:0}:null;var n,r}class Vh extends Ph{}class Fh extends Ph{constructor(e){super(),this.elements=e}}function jh(e,t){const n=Hh(t);for(const r of e.elements)n.some((e=>Fu(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Bh extends Ph{constructor(e){super(),this.elements=e}}function qh(e,t){let n=Hh(t);for(const r of e.elements)n=n.filter((e=>!Fu(e,r)));return{arrayValue:{values:n}}}class $h extends Ph{constructor(e,t){super(),this.O=e,this.k=t}}function Kh(e){return Au(e.integerValue||e.doubleValue)}function Hh(e){return zu(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class zh{constructor(e,t){this.version=e,this.transformResults=t}}class Gh{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Gh}static exists(e){return new Gh(void 0,e)}static updateTime(e){return new Gh(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wh(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Jh{}function Qh(e,t,n){var r;e instanceof td?function(e,t,n){const r=e.value.clone(),s=sd(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof nd?function(e,t,n){if(!Wh(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=sd(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(rd(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function Xh(e,t,n){var r;e instanceof td?function(e,t,n){if(!Wh(e.precondition,t))return;const r=e.value.clone(),s=id(e.fieldTransforms,n,t);r.setAll(s),t.convertToFoundDocument(ed(t),r).setHasLocalMutations()}(e,t,n):e instanceof nd?function(e,t,n){if(!Wh(e.precondition,t))return;const r=id(e.fieldTransforms,n,t),s=t.data;s.setAll(rd(e)),s.setAll(r),t.convertToFoundDocument(ed(t),s).setHasLocalMutations()}(e,t,n):(r=t,Wh(e.precondition,r)&&r.convertToNoDocument(mu.min()))}function Yh(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=Uh(r.transform,e||null);null!=s&&(null==n&&(n=Xu.empty()),n.set(r.field,s))}return n||null}function Zh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&pu(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Fh&&r instanceof Fh||n instanceof Bh&&r instanceof Bh?pu(n.elements,r.elements,Fu):n instanceof $h&&r instanceof $h?Fu(n.k,r.k):n instanceof Vh&&r instanceof Vh);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}function ed(e){return e.isFoundDocument()?e.version:mu.min()}class td extends Jh{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class nd extends Jh{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}}function rd(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function sd(e,t,n){const r=new Map;Yl(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Mh(o,a,n[s]))}return r}function id(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,Lh(e,i,t))}return r}class od extends Jh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class ad extends Jh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ld,ud;function hd(e){if(void 0===e)return Wl("GRPC error has no .code"),eu.UNKNOWN;switch(e){case ld.OK:return eu.OK;case ld.CANCELLED:return eu.CANCELLED;case ld.UNKNOWN:return eu.UNKNOWN;case ld.DEADLINE_EXCEEDED:return eu.DEADLINE_EXCEEDED;case ld.RESOURCE_EXHAUSTED:return eu.RESOURCE_EXHAUSTED;case ld.INTERNAL:return eu.INTERNAL;case ld.UNAVAILABLE:return eu.UNAVAILABLE;case ld.UNAUTHENTICATED:return eu.UNAUTHENTICATED;case ld.INVALID_ARGUMENT:return eu.INVALID_ARGUMENT;case ld.NOT_FOUND:return eu.NOT_FOUND;case ld.ALREADY_EXISTS:return eu.ALREADY_EXISTS;case ld.PERMISSION_DENIED:return eu.PERMISSION_DENIED;case ld.FAILED_PRECONDITION:return eu.FAILED_PRECONDITION;case ld.ABORTED:return eu.ABORTED;case ld.OUT_OF_RANGE:return eu.OUT_OF_RANGE;case ld.UNIMPLEMENTED:return eu.UNIMPLEMENTED;case ld.DATA_LOSS:return eu.DATA_LOSS;default:return Xl()}}(ud=ld||(ld={}))[ud.OK=0]="OK",ud[ud.CANCELLED=1]="CANCELLED",ud[ud.UNKNOWN=2]="UNKNOWN",ud[ud.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ud[ud.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ud[ud.NOT_FOUND=5]="NOT_FOUND",ud[ud.ALREADY_EXISTS=6]="ALREADY_EXISTS",ud[ud.PERMISSION_DENIED=7]="PERMISSION_DENIED",ud[ud.UNAUTHENTICATED=16]="UNAUTHENTICATED",ud[ud.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ud[ud.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ud[ud.ABORTED=10]="ABORTED",ud[ud.OUT_OF_RANGE=11]="OUT_OF_RANGE",ud[ud.UNIMPLEMENTED=12]="UNIMPLEMENTED",ud[ud.INTERNAL=13]="INTERNAL",ud[ud.UNAVAILABLE=14]="UNAVAILABLE",ud[ud.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dd{constructor(e,t){this.comparator=e,this.root=t||pd.EMPTY}insert(e,t){return new dd(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,pd.BLACK,null,null))}remove(e){return new dd(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pd.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fd(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fd(this.root,e,this.comparator,!1)}getReverseIterator(){return new fd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fd(this.root,e,this.comparator,!0)}}class fd{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pd{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:pd.RED,this.left=null!=r?r:pd.EMPTY,this.right=null!=s?s:pd.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new pd(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return pd.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return pd.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pd.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pd.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Xl();if(this.right.isRed())throw Xl();const e=this.left.check();if(e!==this.right.check())throw Xl();return e+(this.isRed()?0:1)}}pd.EMPTY=null,pd.RED=!0,pd.BLACK=!1,pd.EMPTY=new class{constructor(){this.size=0}get key(){throw Xl()}get value(){throw Xl()}get color(){throw Xl()}get left(){throw Xl()}get right(){throw Xl()}copy(e,t,n,r,s){return this}insert(e,t,n){return new pd(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gd{constructor(e){this.comparator=e,this.data=new dd(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new md(this.data.getIterator())}getIteratorFrom(e){return new md(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof gd))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new gd(this.comparator);return t.data=e,t}}class md{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd=new dd(Uu.comparator);function vd(){return yd}const wd=new dd(Uu.comparator);function _d(){return wd}const bd=new dd(Uu.comparator),Ed=new gd(Uu.comparator);function Td(...e){let t=Ed;for(const n of e)t=t.add(n);return t}const Id=new gd(fu);function Sd(){return Id}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Cd.createSynthesizedTargetChangeForCurrentChange(e,t)),new kd(mu.min(),n,Sd(),vd(),Td())}}class Cd{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Cd(Su.EMPTY_BYTE_STRING,t,Td(),Td(),Td())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,t,n,r){this.M=e,this.removedTargetIds=t,this.key=n,this.$=r}}class Nd{constructor(e,t){this.targetId=e,this.F=t}}class Od{constructor(e,t,n=Su.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Rd{constructor(){this.B=0,this.L=Pd(),this.U=Su.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=Td(),t=Td(),n=Td();return this.L.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Xl()}})),new Cd(this.U,this.q,e,t,n)}J(){this.K=!1,this.L=Pd()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Dd{constructor(e){this.nt=e,this.st=new Map,this.it=vd(),this.rt=xd(),this.ot=new gd(fu)}ct(e){for(const t of e.M)e.$&&e.$.isFoundDocument()?this.ut(t,e.$):this.at(t,e.key,e.$);for(const t of e.removedTargetIds)this.at(t,e.key,e.$)}ht(e){this.forEachTarget(e,(t=>{const n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:Xl()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach(((e,n)=>{this.ft(n)&&t(n)}))}_t(e){const t=e.targetId,n=e.F.count,r=this.wt(t);if(r){const e=r.target;if(sh(e))if(0===n){const n=new Uu(e.path);this.at(t,n,Zu.newNoDocument(n,mu.min()))}else Yl(1===n);else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach(((n,r)=>{const s=this.wt(r);if(s){if(n.current&&sh(s.target)){const t=new Uu(s.target.path);null!==this.it.get(t)||this.It(r,t)||this.at(r,t,Zu.newNoDocument(t,e))}n.j&&(t.set(r,n.H()),n.J())}}));let n=Td();this.rt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.it.forEach(((t,n)=>n.setReadTime(e)));const r=new kd(e,t,this.ot,this.it,n);return this.it=vd(),this.rt=xd(),this.ot=new gd(fu),r}ut(e,t){if(!this.ft(e))return;const n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Et(t.key).add(e))}at(e,t,n){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Et(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new Rd,this.st.set(e,t)),t}Et(e){let t=this.rt.get(e);return t||(t=new gd(fu),this.rt=this.rt.insert(e,t)),t}ft(e){const t=null!==this.wt(e);return t||Gl("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Tt(e)}dt(e){this.st.set(e,new Rd),this.nt.getRemoteKeysForTarget(e).forEach((t=>{this.at(e,t,null)}))}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function xd(){return new dd(Uu.comparator)}function Pd(){return new dd(Uu.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld={asc:"ASCENDING",desc:"DESCENDING"},Md={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Ud{constructor(e,t){this.databaseId=e,this.N=t}}function Vd(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Fd(e,t){return e.N?t.toBase64():t.toUint8Array()}function jd(e,t){return Vd(e,t.toTimestamp())}function Bd(e){return Yl(!!e),mu.fromTimestamp(function(e){const t=Cu(e);return new gu(t.seconds,t.nanos)}(e))}function qd(e,t){return(n=e,new bu(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function $d(e){const t=bu.fromString(e);return Yl(cf(t)),t}function Kd(e,t){return qd(e.databaseId,t.path)}function Hd(e,t){const n=$d(t);if(n.get(1)!==e.databaseId.projectId)throw new tu(eu.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new tu(eu.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Uu(Wd(n))}function zd(e,t){return qd(e.databaseId,t)}function Gd(e){return new bu(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Wd(e){return Yl(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Jd(e,t,n){return{name:Kd(e,t),fields:n.value.mapValue.fields}}function Qd(e,t){return{documents:[zd(e,t.path)]}}function Xd(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=zd(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=zd(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Wu(e.value))return{unaryFilter:{field:nf(e.field),op:"IS_NAN"}};if(Gu(e.value))return{unaryFilter:{field:nf(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Wu(e.value))return{unaryFilter:{field:nf(e.field),op:"IS_NOT_NAN"}};if(Gu(e.value))return{unaryFilter:{field:nf(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nf(e.field),op:tf(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);s&&(n.structuredQuery.where=s);const i=function(e){if(0!==e.length)return e.map((e=>{return{field:nf((t=e).field),direction:ef(t.dir)};var t}))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=(a=e,c=t.limit,a.N||Lu(c)?c:{value:c});var a,c,l;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Yd(e){let t=function(e){const t=$d(e);return 4===t.length?bu.emptyPath():Wd(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Yl(1===r);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=Zd(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new gh(rf((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Lu(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new ph(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new ph(n,t)}(n.endAt)),function(e,t,n,r,s,i,o,a){return new wh(e,t,n,r,s,i,o,a)}(t,s,o,i,a,"F",c,l)}function Zd(e){return e?void 0!==e.unaryFilter?[of(e)]:void 0!==e.fieldFilter?[sf(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Zd(e))).reduce(((e,t)=>e.concat(t))):Xl():[]}function ef(e){return Ld[e]}function tf(e){return Md[e]}function nf(e){return{fieldPath:e.canonicalString()}}function rf(e){return Tu.fromServerFormat(e.fieldPath)}function sf(e){return ih.create(rf(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Xl()}}(e.fieldFilter.op),e.fieldFilter.value)}function of(e){switch(e.unaryFilter.op){case"IS_NAN":const t=rf(e.unaryFilter.field);return ih.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=rf(e.unaryFilter.field);return ih.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=rf(e.unaryFilter.field);return ih.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=rf(e.unaryFilter.field);return ih.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Xl()}}function af(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function cf(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lf{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Xl(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new lf(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof lf?t:lf.resolve(t)}catch(t){return lf.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):lf.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):lf.reject(t)}static resolve(e){return new lf(((t,n)=>{t(e)}))}static reject(e){return new lf(((t,n)=>{n(e)}))}static waitFor(e){return new lf(((t,n)=>{let r=0,s=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++s,i&&s===r&&t()}),(e=>n(e)))})),i=!0,s===r&&t()}))}static or(e){let t=lf.resolve(!1);for(const n of e)t=t.next((e=>e?lf.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}function uf(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Qh(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Xh(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Xh(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(mu.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Td())}isEqual(e){return this.batchId===e.batchId&&pu(this.mutations,e.mutations,((e,t)=>Zh(e,t)))&&pu(this.baseMutations,e.baseMutations,((e,t)=>Zh(e,t)))}}class df{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Yl(e.mutations.length===n.length);let r=bd;const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new df(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,t,n,r,s=mu.min(),i=mu.min(),o=Su.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(e){return new pf(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new pf(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new pf(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this.Ht=e}}function mf(e){const t=Yd({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?function(e,t,n){return new wh(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this.xe=new vf}addToCollectionParentIndex(e,t){return this.xe.add(t),lf.resolve()}getCollectionParents(e,t){return lf.resolve(this.xe.getEntries(t))}addFieldIndex(e,t){return lf.resolve()}deleteFieldIndex(e,t){return lf.resolve()}getDocumentsMatchingTarget(e,t,n){return lf.resolve(Td())}getFieldIndex(e,t){return lf.resolve(null)}getFieldIndexes(e,t){return lf.resolve([])}getNextCollectionGroupToUpdate(e){return lf.resolve(null)}updateCollectionGroup(e,t,n){return lf.resolve()}updateIndexEntries(e,t){return lf.resolve()}}class vf{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new gd(bu.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new gd(bu.comparator)).toArray()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new wf(0)}static Je(){return new wf(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _f(e){if(e.code!==eu.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Gl("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){vu(this.inner,((t,n)=>{for(const[r,s]of n)e(r,s)}))}isEmpty(){return wu(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ef{constructor(e,t,n){this.qn=e,this.gs=t,this.indexManager=n}ys(e,t){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.ps(e,t,n)))}ps(e,t,n){return this.qn.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}Is(e,t){e.forEach(((e,n)=>{for(const r of t)r.applyToLocalView(n)}))}Es(e,t){return this.qn.getEntries(e,t).next((t=>this.Ts(e,t).next((()=>t))))}Ts(e,t){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.Is(t,e)))}As(e,t,n){return r=t,Uu.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.Rs(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.Ps(e,t,n):this.bs(e,t,n);var r}Rs(e,t){return this.ys(e,new Uu(t)).next((e=>{let t=_d();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Ps(e,t,n){const r=t.collectionGroup;let s=_d();return this.indexManager.getCollectionParents(e,r).next((i=>lf.forEach(i,(i=>{const o=(a=t,c=i.child(r),new wh(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.bs(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}bs(e,t,n){let r;return this.qn.getAll(e,t.path,n).next((n=>(r=n,this.gs.getAllMutationBatchesAffectingQuery(e,t)))).next((e=>{for(const t of e)for(const e of t.mutations){const n=e.key;let s=r.get(n);null==s&&(s=Zu.newInvalidDocument(n),r=r.insert(n,s)),Xh(e,s,t.localWriteTime),s.isFoundDocument()||(r=r.remove(n))}})).next((()=>(r.forEach(((e,n)=>{Ah(t,n)||(r=r.remove(e))})),r)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.vs=n,this.Vs=r}static Ss(e,t){let n=Td(),r=Td();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Tf(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{Ds(e){this.Cs=e}As(e,t,n,r){return 0===(s=t).filters.length&&null===s.limit&&null==s.startAt&&null==s.endAt&&(0===s.explicitOrderBy.length||1===s.explicitOrderBy.length&&s.explicitOrderBy[0].field.isKeyField())||n.isEqual(mu.min())?this.Ns(e,t):this.Cs.Es(e,r).next((s=>{const i=this.xs(t,s);return(bh(t)||Eh(t))&&this.ks(t.limitType,i,r,n)?this.Ns(e,t):(zl()<=qs.DEBUG&&Gl("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Ch(t)),this.Cs.As(e,t,n).next((e=>(i.forEach((t=>{e=e.insert(t.key,t)})),e))))}));var s}xs(e,t){let n=new gd(Nh(e));return t.forEach(((t,r)=>{Ah(e,r)&&(n=n.add(r))})),n}ks(e,t,n,r){if(n.size!==t.size)return!0;const s="F"===e?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ns(e,t){return zl()<=qs.DEBUG&&Gl("QueryEngine","Using full collection scan to execute query:",Ch(t)),this.Cs.As(e,t,mu.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t,n,r){this.persistence=e,this.Os=t,this.O=r,this.Ms=new dd(fu),this.$s=new bf((e=>nh(e)),rh),this.Fs=mu.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(n)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new Ef(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}async function kf(e,t){const n=Zl(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.gs.getAllMutationBatches(e).next((s=>(r=s,n.Ls(t),n.gs.getAllMutationBatches(e)))).next((t=>{const s=[],i=[];let o=Td();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.Us.Es(e,o).next((e=>({qs:e,removedBatchIds:s,addedBatchIds:i})))}))}))}function Cf(e){const t=Zl(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Un.getLastRemoteSnapshotVersion(e)))}function Af(e,t){const n=Zl(e),r=t.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.Ms;const o=[];t.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Un.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.Un.addMatchingKeys(e,i.addedDocuments,a))));let l=c.withSequenceNumber(e.currentSequenceNumber);var u,h,d;t.targetMismatches.has(a)?l=l.withResumeToken(Su.EMPTY_BYTE_STRING,mu.min()).withLastLimboFreeSnapshotVersion(mu.min()):i.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(i.resumeToken,r)),s=s.insert(a,l),h=l,d=i,(0===(u=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Un.updateTargetData(e,l))}));let a=vd();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(function(e,t,n){let r=Td();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=vd();return n.forEach(((n,s)=>{const i=e.get(n);s.isNoDocument()&&s.version.isEqual(mu.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!i.isValidDocument()||s.version.compareTo(i.version)>0||0===s.version.compareTo(i.version)&&i.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Gl("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",s.version)})),r}))}(e,i,t.documentUpdates).next((e=>{a=e}))),!r.isEqual(mu.min())){const t=n.Un.getLastRemoteSnapshotVersion(e).next((t=>n.Un.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return lf.waitFor(o).next((()=>i.apply(e))).next((()=>n.Us.Ts(e,a))).next((()=>a))})).then((e=>(n.Ms=s,e)))}function Nf(e,t){const n=Zl(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.gs.getNextMutationBatchAfterBatchId(e,t))))}async function Of(e,t,n){const r=Zl(e),s=r.Ms.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,s)))}catch(o){if(!uf(o))throw o;Gl("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ms=r.Ms.remove(t),r.$s.delete(s.target)}function Rf(e,t,n){const r=Zl(e);let s=mu.min(),i=Td();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Zl(e),s=r.$s.get(n);return void 0!==s?lf.resolve(r.Ms.get(s)):r.Un.getTargetData(t,n)}(r,e,Ih(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.Un.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.Os.As(e,t,n?s:mu.min(),n?i:Td()))).next((e=>({documents:e,Ks:i})))))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,t){return lf.resolve(this.Ws.get(t))}saveBundleMetadata(e,t){var n;return this.Ws.set(t.id,{id:(n=t).id,version:n.version,createTime:Bd(n.createTime)}),lf.resolve()}getNamedQuery(e,t){return lf.resolve(this.zs.get(t))}saveNamedQuery(e,t){return this.zs.set(t.name,{name:(n=t).name,query:mf(n.bundledQuery),readTime:Bd(n.readTime)}),lf.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(){this.overlays=new dd(Uu.comparator),this.Hs=new Map}getOverlay(e,t){return lf.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach((n=>{this.Yt(e,t,n)})),lf.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Hs.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Hs.delete(n)),lf.resolve()}getOverlaysForCollection(e,t,n){const r=new Map,s=t.length+1,i=new Uu(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return lf.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new dd(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=new Map,s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=new Map,a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(t,e))),!(o.size>=r)););return lf.resolve(o)}Yt(e,t,n){if(null===n)return;const r=this.overlays.get(n.key);null!==r&&this.Hs.get(r.largestBatchId).delete(n.key),this.overlays=this.overlays.insert(n.key,new ff(t,n));let s=this.Hs.get(t);void 0===s&&(s=new Set,this.Hs.set(t,s)),s.add(n.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(){this.Js=new gd(Lf.Ys),this.Xs=new gd(Lf.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,t){const n=new Lf(e,t);this.Js=this.Js.add(n),this.Xs=this.Xs.add(n)}ti(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ei(new Lf(e,t))}ni(e,t){e.forEach((e=>this.removeReference(e,t)))}si(e){const t=new Uu(new bu([])),n=new Lf(t,e),r=new Lf(t,e+1),s=[];return this.Xs.forEachInRange([n,r],(e=>{this.ei(e),s.push(e.key)})),s}ii(){this.Js.forEach((e=>this.ei(e)))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const t=new Uu(new bu([])),n=new Lf(t,e),r=new Lf(t,e+1);let s=Td();return this.Xs.forEachInRange([n,r],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new Lf(e,0),n=this.Js.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Lf{constructor(e,t){this.key=e,this.oi=t}static Ys(e,t){return Uu.comparator(e.key,t.key)||fu(e.oi,t.oi)}static Zs(e,t){return fu(e.oi,t.oi)||Uu.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.gs=[],this.ci=1,this.ui=new gd(Lf.Ys)}checkEmpty(e){return lf.resolve(0===this.gs.length)}addMutationBatch(e,t,n,r){const s=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const i=new hf(s,t,n,r);this.gs.push(i);for(const o of r)this.ui=this.ui.add(new Lf(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return lf.resolve(i)}lookupMutationBatch(e,t){return lf.resolve(this.ai(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.hi(n),s=r<0?0:r;return lf.resolve(this.gs.length>s?this.gs[s]:null)}getHighestUnacknowledgedBatchId(){return lf.resolve(0===this.gs.length?-1:this.ci-1)}getAllMutationBatches(e){return lf.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Lf(t,0),r=new Lf(t,Number.POSITIVE_INFINITY),s=[];return this.ui.forEachInRange([n,r],(e=>{const t=this.ai(e.oi);s.push(t)})),lf.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new gd(fu);return t.forEach((e=>{const t=new Lf(e,0),r=new Lf(e,Number.POSITIVE_INFINITY);this.ui.forEachInRange([t,r],(e=>{n=n.add(e.oi)}))})),lf.resolve(this.li(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;Uu.isDocumentKey(s)||(s=s.child(""));const i=new Lf(new Uu(s),0);let o=new gd(fu);return this.ui.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.oi)),!0)}),i),lf.resolve(this.li(o))}li(e){const t=[];return e.forEach((e=>{const n=this.ai(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Yl(0===this.fi(t.batchId,"removed")),this.gs.shift();let n=this.ui;return lf.forEach(t.mutations,(r=>{const s=new Lf(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ui=n}))}Qe(e){}containsKey(e,t){const n=new Lf(t,0),r=this.ui.firstAfterOrEqual(n);return lf.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.gs.length,lf.resolve()}fi(e,t){return this.hi(e)}hi(e){return 0===this.gs.length?0:e-this.gs[0].batchId}ai(e){const t=this.hi(e);return t<0||t>=this.gs.length?null:this.gs[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e){this.di=e,this.docs=new dd(Uu.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.di(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return lf.resolve(n?n.document.mutableCopy():Zu.newInvalidDocument(t))}getEntries(e,t){let n=vd();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Zu.newInvalidDocument(e))})),lf.resolve(n)}getAll(e,t,n){let r=vd();const s=new Uu(t.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:e,value:{document:s}}=i.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||s.readTime.compareTo(n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return lf.resolve(r)}_i(e,t){return lf.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Vf(this)}getSize(e){return lf.resolve(this.size)}}class Vf extends class{constructor(){this.changes=new bf((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Zu.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?lf.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}{constructor(e){super(),this.Tn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Tn.addEntry(e,r)):this.Tn.removeEntry(n)})),lf.waitFor(t)}getFromCache(e,t){return this.Tn.getEntry(e,t)}getAllFromCache(e,t){return this.Tn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e){this.persistence=e,this.wi=new bf((e=>nh(e)),rh),this.lastRemoteSnapshotVersion=mu.min(),this.highestTargetId=0,this.mi=0,this.gi=new Pf,this.targetCount=0,this.yi=wf.He()}forEachTarget(e,t){return this.wi.forEach(((e,n)=>t(n))),lf.resolve()}getLastRemoteSnapshotVersion(e){return lf.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return lf.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),lf.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.mi&&(this.mi=t),lf.resolve()}Ze(e){this.wi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.yi=new wf(t),this.highestTargetId=t),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,t){return this.Ze(t),this.targetCount+=1,lf.resolve()}updateTargetData(e,t){return this.Ze(t),lf.resolve()}removeTargetData(e,t){return this.wi.delete(t.target),this.gi.si(t.targetId),this.targetCount-=1,lf.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.wi.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.wi.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),lf.waitFor(s).next((()=>r))}getTargetCount(e){return lf.resolve(this.targetCount)}getTargetData(e,t){const n=this.wi.get(t)||null;return lf.resolve(n)}addMatchingKeys(e,t,n){return this.gi.ti(t,n),lf.resolve()}removeMatchingKeys(e,t,n){this.gi.ni(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((t=>{s.push(r.markPotentiallyOrphaned(e,t))})),lf.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.gi.si(t),lf.resolve()}getMatchingKeysForTargetId(e,t){const n=this.gi.ri(t);return lf.resolve(n)}containsKey(e,t){return lf.resolve(this.gi.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t){this.pi={},this.overlays={},this.Nn=new uu(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new Ff(this),this.indexManager=new yf,this.qn=new Uf((e=>this.referenceDelegate.Ii(e))),this.O=new gf(t),this.Kn=new Df(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new xf,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.pi[e.toKey()];return n||(n=new Mf(t,this.referenceDelegate),this.pi[e.toKey()]=n),n}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,t,n){Gl("MemoryPersistence","Starting transaction:",e);const r=new Bf(this.Nn.next());return this.referenceDelegate.Ei(),n(r).next((e=>this.referenceDelegate.Ti(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ai(e,t){return lf.or(Object.values(this.pi).map((n=>()=>n.containsKey(e,t))))}}class Bf extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}{constructor(e){super(),this.currentSequenceNumber=e}}class qf{constructor(e){this.persistence=e,this.Ri=new Pf,this.Pi=null}static bi(e){return new qf(e)}get vi(){if(this.Pi)return this.Pi;throw Xl()}addReference(e,t,n){return this.Ri.addReference(n,t),this.vi.delete(n.toString()),lf.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.vi.add(n.toString()),lf.resolve()}markPotentiallyOrphaned(e,t){return this.vi.add(t.toString()),lf.resolve()}removeTarget(e,t){this.Ri.si(t.targetId).forEach((e=>this.vi.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.vi.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ei(){this.Pi=new Set}Ti(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return lf.forEach(this.vi,(n=>{const r=Uu.fromPath(n);return this.Vi(e,r).next((e=>{e||t.removeEntry(r,mu.min())}))})).next((()=>(this.Pi=null,t.apply(e))))}updateLimboDocument(e,t){return this.Vi(e,t).next((e=>{e?this.vi.delete(t.toString()):this.vi.add(t.toString())}))}Ii(e){return 0}Vi(e,t){return lf.or([()=>lf.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class $f{constructor(){this.activeTargetIds=Sd()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Kf{constructor(){this._r=new $f,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,t,n){this.wr[e]=t}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new $f,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{mr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){Gl("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){Gl("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.kr=t+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,t,n,r,s){const i=this.$r(e,t);Gl("RestConnection","Sending: ",i,n);const o={};return this.Fr(o,r,s),this.Br(e,i,o,n).then((e=>(Gl("RestConnection","Received: ",e),e)),(t=>{throw Jl("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}Lr(e,t,n,r,s){return this.Mr(e,t,n,r,s)}Fr(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Kl,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}$r(e,t){const n=Gf[e];return`${this.kr}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,t,n,r){return new Promise(((s,i)=>{const o=new Bl;o.listenOnce(Ll.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Pl.NO_ERROR:const t=o.getResponseJson();Gl("Connection","XHR received:",JSON.stringify(t)),s(t);break;case Pl.TIMEOUT:Gl("Connection",'RPC "'+e+'" timed out'),i(new tu(eu.DEADLINE_EXCEEDED,"Request time out"));break;case Pl.HTTP_ERROR:const n=o.getStatus();if(Gl("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(eu).indexOf(t)>=0?t:eu.UNKNOWN}(e.status);i(new tu(t,e.message))}else i(new tu(eu.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new tu(eu.UNAVAILABLE,"Connection failed."));break;default:Xl()}}finally{Gl("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}Ur(e,t,n){const r=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=new Nl,i=Ta(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Fl({})),this.Fr(o.initMessageHeaders,t,n),ks()||As()||Ss().indexOf("Electron/")>=0||Ns()||Ss().indexOf("MSAppHost/")>=0||Cs()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");Gl("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let l=!1,u=!1;const h=new Wf({Ar:e=>{u?Gl("Connection","Not sending because WebChannel is closed:",e):(l||(Gl("Connection","Opening WebChannel transport."),c.open(),l=!0),Gl("Connection","WebChannel sending:",e),c.send(e))},Rr:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,jl.EventType.OPEN,(()=>{u||Gl("Connection","WebChannel transport opened.")})),d(c,jl.EventType.CLOSE,(()=>{u||(u=!0,Gl("Connection","WebChannel transport closed"),h.Cr())})),d(c,jl.EventType.ERROR,(e=>{u||(u=!0,Jl("Connection","WebChannel transport errored:",e),h.Cr(new tu(eu.UNAVAILABLE,"The operation could not be completed")))})),d(c,jl.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];Yl(!!n);const r=n,s=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(s){Gl("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=ld[e];if(void 0!==t)return hd(t)}(e),n=s.message;void 0===t&&(t=eu.INTERNAL,n="Unknown error status: "+e+" with message "+s.message),u=!0,h.Cr(new tu(t,n)),c.close()}else Gl("Connection","WebChannel received:",n),h.Nr(n)}})),d(i,Ml.STAT_EVENT,(e=>{e.stat===Ul?Gl("Connection","Detected buffering proxy"):e.stat===Vl&&Gl("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.Dr()}),0),h}}function Qf(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(e){return new Ud(e,!0)}class Yf{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Sn=e,this.timerId=t,this.qr=n,this.Kr=r,this.Gr=s,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const t=Math.floor(this.jr+this.Jr()),n=Math.max(0,Date.now()-this.Wr),r=Math.max(0,t-n);r>0&&Gl("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.jr} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,r,(()=>(this.Wr=Date.now(),e()))),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){null!==this.Qr&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){null!==this.Qr&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,t,n,r,s,i,o,a){this.Sn=e,this.Xr=n,this.Zr=r,this.eo=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new Yf(e,t)}oo(){return 1===this.state||5===this.state||this.co()}co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&null===this.so&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,(()=>this.lo())))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,t){this._o(),this.wo(),this.ro.cancel(),this.no++,4!==e?this.ro.reset():t&&t.code===eu.RESOURCE_EXHAUSTED?(Wl(t.toString()),Wl("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):t&&t.code===eu.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(t)}mo(){}auth(){this.state=1;const e=this.yo(this.no),t=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.no===t&&this.po(e,n)}),(t=>{e((()=>{const e=new tu(eu.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Io(e)}))}))}po(e,t){const n=this.yo(this.no);this.stream=this.Eo(e,t),this.stream.Pr((()=>{n((()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,(()=>(this.co()&&(this.state=3),Promise.resolve()))),this.listener.Pr())))})),this.stream.vr((e=>{n((()=>this.Io(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}uo(){this.state=5,this.ro.Hr((async()=>{this.state=0,this.start()}))}Io(e){return Gl("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return t=>{this.Sn.enqueueAndForget((()=>this.no===e?t():(Gl("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ep extends Zf{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.O=s}Eo(e,t){return this.eo.Ur("Listen",e,t)}onMessage(e){this.ro.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Xl(),i=t.targetChange.targetIds||[],o=function(e,t){return e.N?(Yl(void 0===t||"string"==typeof t),Su.fromBase64String(t||"")):(Yl(void 0===t||t instanceof Uint8Array),Su.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?eu.UNKNOWN:hd(e.code);return new tu(t,e.message||"")}(a);n=new Od(s,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Hd(e,r.document.name),i=Bd(r.document.updateTime),o=new Xu({mapValue:{fields:r.document.fields}}),a=Zu.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Ad(c,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Hd(e,r.document),i=r.readTime?Bd(r.readTime):mu.min(),o=Zu.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ad([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Hd(e,r.document),i=r.removedTargetIds||[];n=new Ad([],i,s,null)}else{if(!("filter"in t))return Xl();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,s=new cd(r),i=e.targetId;n=new Nd(i,s)}}var r;return n}(this.O,e),n=function(e){if(!("targetChange"in e))return mu.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?mu.min():t.readTime?Bd(t.readTime):mu.min()}(e);return this.listener.To(t,n)}Ao(e){const t={};t.database=Gd(this.O),t.addTarget=function(e,t){let n;const r=t.target;return n=sh(r)?{documents:Qd(e,r)}:{query:Xd(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Fd(e,t.resumeToken):t.snapshotVersion.compareTo(mu.min())>0&&(n.readTime=Vd(e,t.snapshotVersion.toTimestamp())),n}(this.O,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Xl()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.O,e);n&&(t.labels=n),this.fo(t)}Ro(e){const t={};t.database=Gd(this.O),t.removeTarget=e,this.fo(t)}}class tp extends Zf{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.O=s,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,t){return this.eo.Ur("Write",e,t)}onMessage(e){if(Yl(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const t=function(e,t){return e&&e.length>0?(Yl(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Bd(e.updateTime):Bd(t);return n.isEqual(mu.min())&&(n=Bd(t)),new zh(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Bd(e.commitTime);return this.listener.Vo(n,t)}return Yl(!e.writeResults||0===e.writeResults.length),this.Po=!0,this.listener.So()}Do(){const e={};e.database=Gd(this.O),this.fo(e)}vo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof td)n={update:Jd(e,t.key,t.value)};else if(t instanceof od)n={delete:Kd(e,t.key)};else if(t instanceof nd)n={update:Jd(e,t.key,t.data),updateMask:af(t.fieldMask)};else{if(!(t instanceof ad))return Xl();n={verify:Kd(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Vh)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Fh)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Bh)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof $h)return{fieldPath:t.field.canonicalString(),increment:n.k};throw Xl()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(s=t.precondition).updateTime?{updateTime:jd(r,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:Xl())),n;var r,s}(this.O,e)))};this.fo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.eo=n,this.O=r,this.Co=!1}No(){if(this.Co)throw new tu(eu.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,t,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.eo.Mr(e,t,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===eu.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new tu(eu.UNKNOWN,e.toString())}))}Lr(e,t,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.eo.Lr(e,t,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===eu.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new tu(eu.UNKNOWN,e.toString())}))}terminate(){this.Co=!0}}class rp{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){0===this.xo&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve()))))}Bo(e){"Online"===this.state?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,"Online"===e&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(Wl(t),this.Oo=!1):Gl("OnlineStateTracker",t)}Lo(){null!==this.ko&&(this.ko.cancel(),this.ko=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=s,this.jo.mr((e=>{n.enqueueAndForget((async()=>{fp(this)&&(Gl("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Zl(e);t.Ko.add(4),await op(t),t.Qo.set("Unknown"),t.Ko.delete(4),await ip(t)}(this))}))})),this.Qo=new rp(n,r)}}async function ip(e){if(fp(e))for(const t of e.Go)await t(!0)}async function op(e){for(const t of e.Go)await t(!1)}function ap(e,t){const n=Zl(e);n.qo.has(t.targetId)||(n.qo.set(t.targetId,t),dp(n)?hp(n):Op(n).co()&&lp(n,t))}function cp(e,t){const n=Zl(e),r=Op(n);n.qo.delete(t),r.co()&&up(n,t),0===n.qo.size&&(r.co()?r.ho():fp(n)&&n.Qo.set("Unknown"))}function lp(e,t){e.Wo.Z(t.targetId),Op(e).Ao(t)}function up(e,t){e.Wo.Z(t),Op(e).Ro(t)}function hp(e){e.Wo=new Dd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Tt:t=>e.qo.get(t)||null}),Op(e).start(),e.Qo.Mo()}function dp(e){return fp(e)&&!Op(e).oo()&&e.qo.size>0}function fp(e){return 0===Zl(e).Ko.size}function pp(e){e.Wo=void 0}async function gp(e){e.qo.forEach(((t,n)=>{lp(e,t)}))}async function mp(e,t){pp(e),dp(e)?(e.Qo.Bo(t),hp(e)):e.Qo.set("Unknown")}async function yp(e,t,n){if(e.Qo.set("Online"),t instanceof Od&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.qo.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.qo.delete(r),e.Wo.removeTarget(r))}(e,t)}catch(r){Gl("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await vp(e,r)}else if(t instanceof Ad?e.Wo.ct(t):t instanceof Nd?e.Wo._t(t):e.Wo.ht(t),!n.isEqual(mu.min()))try{const t=await Cf(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Wo.yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.qo.get(r);s&&e.qo.set(r,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.qo.get(t);if(!n)return;e.qo.set(t,n.withResumeToken(Su.EMPTY_BYTE_STRING,n.snapshotVersion)),up(e,t);const r=new pf(n.target,t,1,n.sequenceNumber);lp(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(s){Gl("RemoteStore","Failed to raise snapshot:",s),await vp(e,s)}}async function vp(e,t,n){if(!uf(t))throw t;e.Ko.add(1),await op(e),e.Qo.set("Offline"),n||(n=()=>Cf(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Gl("RemoteStore","Retrying IndexedDB access"),await n(),e.Ko.delete(1),await ip(e)}))}function wp(e,t){return t().catch((n=>vp(e,n,t)))}async function _p(e){const t=Zl(e),n=Rp(t);let r=t.Uo.length>0?t.Uo[t.Uo.length-1].batchId:-1;for(;bp(t);)try{const e=await Nf(t.localStore,r);if(null===e){0===t.Uo.length&&n.ho();break}r=e.batchId,Ep(t,e)}catch(s){await vp(t,s)}Tp(t)&&Ip(t)}function bp(e){return fp(e)&&e.Uo.length<10}function Ep(e,t){e.Uo.push(t);const n=Rp(e);n.co()&&n.bo&&n.vo(t.mutations)}function Tp(e){return fp(e)&&!Rp(e).oo()&&e.Uo.length>0}function Ip(e){Rp(e).start()}async function Sp(e){Rp(e).Do()}async function kp(e){const t=Rp(e);for(const n of e.Uo)t.vo(n.mutations)}async function Cp(e,t,n){const r=e.Uo.shift(),s=df.from(r,t,n);await wp(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await _p(e)}async function Ap(e,t){t&&Rp(e).bo&&await async function(e,t){if(function(e){switch(e){default:return Xl();case eu.CANCELLED:case eu.UNKNOWN:case eu.DEADLINE_EXCEEDED:case eu.RESOURCE_EXHAUSTED:case eu.INTERNAL:case eu.UNAVAILABLE:case eu.UNAUTHENTICATED:return!1;case eu.INVALID_ARGUMENT:case eu.NOT_FOUND:case eu.ALREADY_EXISTS:case eu.PERMISSION_DENIED:case eu.FAILED_PRECONDITION:case eu.ABORTED:case eu.OUT_OF_RANGE:case eu.UNIMPLEMENTED:case eu.DATA_LOSS:return!0}}(n=t.code)&&n!==eu.ABORTED){const n=e.Uo.shift();Rp(e).ao(),await wp(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await _p(e)}var n}(e,t),Tp(e)&&Ip(e)}async function Np(e,t){const n=Zl(e);n.asyncQueue.verifyOperationInProgress(),Gl("RemoteStore","RemoteStore received new credentials");const r=fp(n);n.Ko.add(3),await op(n),r&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ko.delete(3),await ip(n)}function Op(e){return e.zo||(e.zo=function(e,t,n){const r=Zl(e);return r.No(),new ep(t,r.eo,r.authCredentials,r.appCheckCredentials,r.O,n)}(e.datastore,e.asyncQueue,{Pr:gp.bind(null,e),vr:mp.bind(null,e),To:yp.bind(null,e)}),e.Go.push((async t=>{t?(e.zo.ao(),dp(e)?hp(e):e.Qo.set("Unknown")):(await e.zo.stop(),pp(e))}))),e.zo}function Rp(e){return e.Ho||(e.Ho=function(e,t,n){const r=Zl(e);return r.No(),new tp(t,r.eo,r.authCredentials,r.appCheckCredentials,r.O,n)}(e.datastore,e.asyncQueue,{Pr:Sp.bind(null,e),vr:Ap.bind(null,e),So:kp.bind(null,e),Vo:Cp.bind(null,e)}),e.Go.push((async t=>{t?(e.Ho.ao(),await _p(e)):(await e.Ho.stop(),e.Uo.length>0&&(Gl("RemoteStore",`Stopping write stream with ${e.Uo.length} pending writes`),e.Uo=[]))}))),e.Ho
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Dp{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new nu,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new Dp(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new tu(eu.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xp(e,t){if(Wl("AsyncQueue",`${t}: ${e}`),uf(e))return new tu(eu.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Uu.comparator(t.key,n.key):(e,t)=>Uu.comparator(e.key,t.key),this.keyedMap=_d(),this.sortedSet=new dd(this.comparator)}static emptySet(e){return new Pp(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Pp))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Pp;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(){this.Jo=new dd(Uu.comparator)}track(e){const t=e.doc.key,n=this.Jo.get(t);n?0!==e.type&&3===n.type?this.Jo=this.Jo.insert(t,e):3===e.type&&1!==n.type?this.Jo=this.Jo.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Jo=this.Jo.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Jo=this.Jo.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Jo=this.Jo.remove(t):1===e.type&&2===n.type?this.Jo=this.Jo.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Jo=this.Jo.insert(t,{type:2,doc:e.doc}):Xl():this.Jo=this.Jo.insert(t,e)}Yo(){const e=[];return this.Jo.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Mp{constructor(e,t,n,r,s,i,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Mp(e,t,Pp.emptySet(t),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Sh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(){this.Xo=void 0,this.listeners=[]}}class Vp{constructor(){this.queries=new bf((e=>kh(e)),Sh),this.onlineState="Unknown",this.Zo=new Set}}function Fp(e,t){const n=Zl(e);let r=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.ec(s)&&(r=!0);t.Xo=s}}r&&Bp(n)}function jp(e,t,n){const r=Zl(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function Bp(e){e.Zo.forEach((e=>{e.next()}))}class qp{constructor(e,t,n){this.query=e,this.nc=t,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=n||{}}ec(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Mp(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.sc?this.rc(e)&&(this.nc.next(e),t=!0):this.oc(e,this.onlineState)&&(this.cc(e),t=!0),this.ic=e,t}onError(e){this.nc.error(e)}tc(e){this.onlineState=e;let t=!1;return this.ic&&!this.sc&&this.oc(this.ic,e)&&(this.cc(this.ic),t=!0),t}oc(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.uc&&n||e.docs.isEmpty()&&"Offline"!==t)}rc(e){if(e.docChanges.length>0)return!0;const t=this.ic&&this.ic.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}cc(e){e=Mp.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.sc=!0,this.nc.next(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e){this.key=e}}class Kp{constructor(e){this.key=e}}class Hp{constructor(e,t){this.query=e,this.dc=t,this._c=null,this.current=!1,this.wc=Td(),this.mutatedKeys=Td(),this.mc=Nh(e),this.gc=new Pp(this.mc)}get yc(){return this.dc}Ic(e,t){const n=t?t.Ec:new Lp,r=t?t.gc:this.gc;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a=bh(this.query)&&r.size===this.query.limit?r.last():null,c=Eh(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),u=Ah(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Tc(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.mc(u,a)>0||c&&this.mc(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(i=i.add(u),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))})),bh(this.query)||Eh(this.query))for(;i.size>this.query.limit;){const e=bh(this.query)?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{gc:i,Ec:n,ks:o,mutatedKeys:s}}Tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.gc;this.gc=e.gc,this.mutatedKeys=e.mutatedKeys;const s=e.Ec.Yo();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Xl()}};return n(e)-n(t)}(e.type,t.type)||this.mc(e.doc,t.doc))),this.Ac(n);const i=t?this.Rc():[],o=0===this.wc.size&&this.current?1:0,a=o!==this._c;return this._c=o,0!==s.length||a?{snapshot:new Mp(this.query,e.gc,r,s,e.mutatedKeys,0===o,a,!1),Pc:i}:{Pc:i}}tc(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Lp,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(e){return!this.dc.has(e)&&!!this.gc.has(e)&&!this.gc.get(e).hasLocalMutations}Ac(e){e&&(e.addedDocuments.forEach((e=>this.dc=this.dc.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.dc=this.dc.delete(e))),this.current=e.current)}Rc(){if(!this.current)return[];const e=this.wc;this.wc=Td(),this.gc.forEach((e=>{this.bc(e.key)&&(this.wc=this.wc.add(e.key))}));const t=[];return e.forEach((e=>{this.wc.has(e)||t.push(new Kp(e))})),this.wc.forEach((n=>{e.has(n)||t.push(new $p(n))})),t}vc(e){this.dc=e.Ks,this.wc=Td();const t=this.Ic(e.documents);return this.applyChanges(t,!0)}Vc(){return Mp.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,0===this._c)}}class zp{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Gp{constructor(e){this.key=e,this.Sc=!1}}class Wp{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Dc={},this.Cc=new bf((e=>kh(e)),Sh),this.Nc=new Map,this.xc=new Set,this.kc=new dd(Uu.comparator),this.Oc=new Map,this.Mc=new Pf,this.$c={},this.Fc=new Map,this.Bc=wf.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return!0===this.Lc}}async function Jp(e,t){const n=function(e){const t=Zl(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Yp.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=dg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=eg.bind(null,t),t.Dc.To=Fp.bind(null,t.eventManager),t.Dc.qc=jp.bind(null,t.eventManager),t}(e);let r,s;const i=n.Cc.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Vc();else{const e=await function(e,t){const n=Zl(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Un.getTargetData(e,t).next((s=>s?(r=s,lf.resolve(r)):n.Un.allocateTargetId(e).next((s=>(r=new pf(t,s,0,e.currentSequenceNumber),n.Un.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ms.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(e.targetId,e),n.$s.set(t,e.targetId)),e}))}(n.localStore,Ih(t));n.isPrimaryClient&&ap(n.remoteStore,e);const i=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await async function(e,t,n,r){e.Uc=(t,n,r)=>async function(e,t,n,r){let s=t.view.Ic(n);s.ks&&(s=await Rf(e.localStore,t.query,!1).then((({documents:e})=>t.view.Ic(e,s))));const i=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i);return ag(e,t.targetId,o.Pc),o.snapshot}(e,t,n,r);const s=await Rf(e.localStore,t,!0),i=new Hp(t,s.Ks),o=i.Ic(s.documents),a=Cd.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=i.applyChanges(o,e.isPrimaryClient,a);ag(e,n,c.Pc);const l=new zp(t,n,i);return e.Cc.set(t,l),e.Nc.has(n)?e.Nc.get(n).push(t):e.Nc.set(n,[t]),c.snapshot}(n,t,r,"current"===i)}return s}async function Qp(e,t){const n=Zl(e),r=n.Cc.get(t),s=n.Nc.get(r.targetId);if(s.length>1)return n.Nc.set(r.targetId,s.filter((e=>!Sh(e,t)))),void n.Cc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Of(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),cp(n.remoteStore,r.targetId),ig(n,r.targetId)})).catch(_f)):(ig(n,r.targetId),await Of(n.localStore,r.targetId,!0))}async function Xp(e,t,n){const r=function(e){const t=Zl(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=tg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ng.bind(null,t),t}(e);try{const e=await function(e,t){const n=Zl(e),r=gu.now(),s=t.reduce(((e,t)=>e.add(t.key)),Td());let i;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Us.Es(e,s).next((s=>{i=s;const o=[];for(const e of t){const t=Yh(e,i.get(e.key));null!=t&&o.push(new nd(e.key,t,Yu(t.value.mapValue),Gh.exists(!0)))}return n.gs.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(i),{batchId:e.batchId,changes:i})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.$c[e.currentUser.toKey()];r||(r=new dd(fu)),r=r.insert(t,n),e.$c[e.currentUser.toKey()]=r}(r,e.batchId,n),await ug(r,e.changes),await _p(r.remoteStore)}catch(s){const e=xp(s,"Failed to persist write");n.reject(e)}}async function Yp(e,t){const n=Zl(e);try{const e=await Af(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Oc.get(t);r&&(Yl(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Sc=!0:e.modifiedDocuments.size>0?Yl(r.Sc):e.removedDocuments.size>0&&(Yl(r.Sc),r.Sc=!1))})),await ug(n,e,t)}catch(r){await _f(r)}}function Zp(e,t,n){const r=Zl(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Cc.forEach(((n,r)=>{const s=r.view.tc(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Zl(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const s of n.listeners)s.tc(t)&&(r=!0)})),r&&Bp(n)}(r.eventManager,t),e.length&&r.Dc.To(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function eg(e,t,n){const r=Zl(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Oc.get(t),i=s&&s.key;if(i){let e=new dd(Uu.comparator);e=e.insert(i,Zu.newNoDocument(i,mu.min()));const n=Td().add(i),s=new kd(mu.min(),new Map,new gd(fu),e,n);await Yp(r,s),r.kc=r.kc.remove(i),r.Oc.delete(t),lg(r)}else await Of(r.localStore,t,!1).then((()=>ig(r,t,n))).catch(_f)}async function tg(e,t){const n=Zl(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Zl(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),s=n.Bs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=lf.resolve();return i.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);Yl(null!==i),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.gs.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.gs.performConsistencyCheck(e))).next((()=>n.Us.Es(e,r)))}))}(n.localStore,t);sg(n,r,null),rg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ug(n,e)}catch(s){await _f(s)}}async function ng(e,t,n){const r=Zl(e);try{const e=await function(e,t){const n=Zl(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.gs.lookupMutationBatch(e,t).next((t=>(Yl(null!==t),r=t.keys(),n.gs.removeMutationBatch(e,t)))).next((()=>n.gs.performConsistencyCheck(e))).next((()=>n.Us.Es(e,r)))}))}(r.localStore,t);sg(r,t,n),rg(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ug(r,e)}catch(s){await _f(s)}}function rg(e,t){(e.Fc.get(t)||[]).forEach((e=>{e.resolve()})),e.Fc.delete(t)}function sg(e,t,n){const r=Zl(e);let s=r.$c[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.$c[r.currentUser.toKey()]=s}}function ig(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Nc.get(t))e.Cc.delete(r),n&&e.Dc.qc(r,n);e.Nc.delete(t),e.isPrimaryClient&&e.Mc.si(t).forEach((t=>{e.Mc.containsKey(t)||og(e,t)}))}function og(e,t){e.xc.delete(t.path.canonicalString());const n=e.kc.get(t);null!==n&&(cp(e.remoteStore,n),e.kc=e.kc.remove(t),e.Oc.delete(n),lg(e))}function ag(e,t,n){for(const r of n)r instanceof $p?(e.Mc.addReference(r.key,t),cg(e,r)):r instanceof Kp?(Gl("SyncEngine","Document no longer in limbo: "+r.key),e.Mc.removeReference(r.key,t),e.Mc.containsKey(r.key)||og(e,r.key)):Xl()}function cg(e,t){const n=t.key,r=n.path.canonicalString();e.kc.get(n)||e.xc.has(r)||(Gl("SyncEngine","New document in limbo: "+n),e.xc.add(r),lg(e))}function lg(e){for(;e.xc.size>0&&e.kc.size<e.maxConcurrentLimboResolutions;){const t=e.xc.values().next().value;e.xc.delete(t);const n=new Uu(bu.fromString(t)),r=e.Bc.next();e.Oc.set(r,new Gp(n)),e.kc=e.kc.insert(n,r),ap(e.remoteStore,new pf(Ih(_h(n.path)),r,2,uu.A))}}async function ug(e,t,n){const r=Zl(e),s=[],i=[],o=[];r.Cc.isEmpty()||(r.Cc.forEach(((e,a)=>{o.push(r.Uc(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),s.push(e);const t=Tf.Ss(a.targetId,e);i.push(t)}})))})),await Promise.all(o),r.Dc.To(s),await async function(e,t){const n=Zl(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>lf.forEach(t,(t=>lf.forEach(t.vs,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>lf.forEach(t.Vs,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!uf(r))throw r;Gl("LocalStore","Failed to update sequence numbers: "+r)}for(const s of t){const e=s.targetId;if(!s.fromCache){const t=n.Ms.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.Ms=n.Ms.insert(e,s)}}}(r.localStore,i))}async function hg(e,t){const n=Zl(e);if(!n.currentUser.isEqual(t)){Gl("SyncEngine","User change. New user:",t.toKey());const e=await kf(n.localStore,t);n.currentUser=t,(r=n).Fc.forEach((e=>{e.forEach((e=>{e.reject(new tu(eu.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.Fc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ug(n,e.qs)}var r}function dg(e,t){const n=Zl(e),r=n.Oc.get(t);if(r&&r.Sc)return Td().add(r.key);{let e=Td();const r=n.Nc.get(t);if(!r)return e;for(const t of r){const r=n.Cc.get(t);e=e.unionWith(r.view.yc)}return e}}class fg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=Xf(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return function(e,t,n,r){return new Sf(e,t,n,r)}(this.persistence,new If,e.initialUser,this.O)}jc(e){return new jf(qf.bi,this.O)}Gc(e){return new Kf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Zp(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=hg.bind(null,this.syncEngine),await async function(e,t){const n=Zl(e);t?(n.Ko.delete(2),await ip(n)):t||(n.Ko.add(2),await op(n),n.Qo.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Vp}createDatastore(e){const t=Xf(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Jf(r));var r,s,i;return s=e.authCredentials,i=e.appCheckCredentials,new np(s,i,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>Zp(this.syncEngine,e,0),i=zf.Vt()?new zf:new Hf,new sp(t,n,r,s,i);var t,n,r,s,i}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new Wp(e,t,n,r,s,i);return o&&(a.Lc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Zl(e);Gl("RemoteStore","RemoteStore shutting down."),t.Ko.add(5),await op(t),t.jo.shutdown(),t.Qo.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Hc(this.observer.next,e)}error(e){this.observer.error?this.Hc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Jc(){this.muted=!0}Hc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=$l.UNAUTHENTICATED,this.clientId=du.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Gl("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Gl("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new tu(eu.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nu;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=xp(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function yg(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){return e.offlineComponents||(Gl("FirestoreClient","Using default OfflineComponentProvider"),await async function(e,t){e.asyncQueue.verifyOperationInProgress(),Gl("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await kf(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}(e,new fg)),e.offlineComponents}(e);Gl("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Np(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Np(t.remoteStore,n))),e.onlineComponents=t}async function vg(e){return e.onlineComponents||(Gl("FirestoreClient","Using default OnlineComponentProvider"),await yg(e,new pg)),e.onlineComponents}async function wg(e){const t=await vg(e),n=t.eventManager;return n.onListen=Jp.bind(null,t.syncEngine),n.onUnlisten=Qp.bind(null,t.syncEngine),n}function _g(e,t,n={}){const r=new nu;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new gg({next:n=>{t.enqueueAndForget((()=>async function(e,t){const n=Zl(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}(e,o))),n.fromCache&&"server"===r.source?s.reject(new tu(eu.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new qp(n,i,{includeMetadataChanges:!0,uc:!0});return async function(t,n){const r=Zl(t),s=n.query;let i=!1,o=r.queries.get(s);if(o||(i=!0,o=new Up),i)try{o.Xo=await r.onListen(s)}catch(e){const r=xp(e,`Initialization of query '${Ch(n.query)}' failed`);return void n.onError(r)}r.queries.set(s,o),o.listeners.push(n),n.tc(r.onlineState),o.Xo&&n.ec(o.Xo)&&Bp(r)}(e,o)}(await wg(e),e.asyncQueue,t,n,r))),r.promise}const bg=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(e,t,n){if(!n)throw new tu(eu.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Tg(e){if(!Uu.isDocumentKey(e))throw new tu(eu.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ig(e){if(Uu.isDocumentKey(e))throw new tu(eu.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Sg(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Xl()}function kg(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new tu(eu.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Sg(e);throw new tu(eu.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new tu(eu.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new tu(eu.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new tu(eu.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cg({}),this._settingsFrozen=!1,e instanceof Pu?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new tu(eu.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pu(e.options.projectId)}(e))}get app(){if(!this._app)throw new tu(eu.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new tu(eu.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cg(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new su;switch(e.type){case"gapi":const t=e.client;return Yl(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new au(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new tu(eu.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=bg.get(e);t&&(Gl("ComponentProvider","Removing Datastore"),bg.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rg(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ng(this.firestore,e,this._key)}}class Og{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Og(this.firestore,e,this._query)}}class Rg extends Og{constructor(e,t,n){super(e,t,_h(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ng(this.firestore,null,new Uu(e))}withConverter(e){return new Rg(this.firestore,e,this._path)}}function Dg(e,t,...n){if(e=Vs(e),Eg("collection","path",t),e instanceof Ag){const r=bu.fromString(t,...n);return Ig(r),new Rg(e,null,r)}{if(!(e instanceof Ng||e instanceof Rg))throw new tu(eu.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(bu.fromString(t,...n));return Ig(r),new Rg(e.firestore,null,r)}}function xg(e,t,...n){if(e=Vs(e),1===arguments.length&&(t=du.R()),Eg("doc","path",t),e instanceof Ag){const r=bu.fromString(t,...n);return Tg(r),new Ng(e,null,new Uu(r))}{if(!(e instanceof Ng||e instanceof Rg))throw new tu(eu.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(bu.fromString(t,...n));return Tg(r),new Ng(e.firestore,e instanceof Rg?e.converter:null,new Uu(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new Yf(this,"async_queue_retry"),this.yu=()=>{const e=Qf();e&&Gl("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ro.Yr()};const e=Qf();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const t=Qf();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise((()=>{}));const t=new nu;return this.Iu((()=>this.fu&&this.mu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.lu.push(e),this.Eu())))}async Eu(){if(0!==this.lu.length){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!uf(e))throw e;Gl("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr((()=>this.Eu()))}}Iu(e){const t=this.hu.then((()=>(this.wu=!0,e().catch((e=>{this._u=e,this.wu=!1;throw Wl("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.wu=!1,e))))));return this.hu=t,t}enqueueAfterDelay(e,t,n){this.pu(),this.gu.indexOf(e)>-1&&(t=0);const r=Dp.createAndSchedule(this,e,t,n,(e=>this.Tu(e)));return this.du.push(r),r}pu(){this._u&&Xl()}verifyOperationInProgress(){}async Au(){let e;do{e=this.hu,await e}while(e!==this.hu)}Ru(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}Pu(e){return this.Au().then((()=>{this.du.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.du)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Au()}))}bu(e){this.gu.push(e)}Tu(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class Lg extends Ag{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Pg,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Vg(this),this._firestoreClient.terminate()}}function Mg(e=bi()){return yi(e,"firestore").getImmediate()}function Ug(e){return e._firestoreClient||Vg(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Vg(e){var t;const n=e._freezeSettings(),r=(s=e._databaseId,i=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new xu(s,i,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var s,i,o,a;e._firestoreClient=new mg(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new tu(eu.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tu(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e){this._byteString=e}static fromBase64String(e){try{return new jg(Su.fromBase64String(e))}catch(t){throw new tu(eu.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new jg(Su.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new tu(eu.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new tu(eu.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fu(this._lat,e._lat)||fu(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $g=/^__.*__$/;class Kg{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new nd(e,this.data,this.fieldMask,t,this.fieldTransforms):new td(e,this.data,t,this.fieldTransforms)}}function Hg(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Xl()}}class zg{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.O=n,this.ignoreUndefinedProperties=r,void 0===s&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(e){return new zg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Su({path:n,Cu:!1});return r.Nu(e),r}xu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Su({path:n,Cu:!1});return r.vu(),r}ku(e){return this.Su({path:void 0,Cu:!0})}Ou(e){return rm(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Nu(this.path.get(e))}Nu(e){if(0===e.length)throw this.Ou("Document fields must not be empty");if(Hg(this.Vu)&&$g.test(e))throw this.Ou('Document fields cannot begin and end with "__"')}}class Gg{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.O=n||Xf(e)}Fu(e,t,n,r=!1){return new zg({Vu:e,methodName:t,$u:n,path:Tu.emptyPath(),Cu:!1,Mu:r},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function Wg(e){const t=e._freezeSettings(),n=Xf(e._databaseId);return new Gg(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Jg(e,t,n,r,s,i={}){const o=e.Fu(i.merge||i.mergeFields?2:0,t,n,s);Zg("Data must be an object, but it was:",o,r);const a=Xg(r,o);let c,l;if(i.merge)c=new Iu(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=em(t,r,n);if(!o.contains(s))throw new tu(eu.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);sm(e,s)||e.push(s)}c=new Iu(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new Kg(new Xu(a),c,l)}function Qg(e,t){if(Yg(e=Vs(e)))return Zg("Unsupported field value:",t,e),Xg(e,t);if(e instanceof Bg)return function(e,t){if(!Hg(t.Vu))throw t.Ou(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Ou(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Cu&&4!==t.Vu)throw t.Ou("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=Qg(s,t.ku(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Vs(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return xh(t.O,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=gu.fromDate(e);return{timestampValue:Vd(t.O,n)}}if(e instanceof gu){const n=new gu(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Vd(t.O,n)}}if(e instanceof qg)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof jg)return{bytesValue:Fd(t.O,e._byteString)};if(e instanceof Ng){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Ou(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:qd(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Ou(`Unsupported field value: ${Sg(e)}`)}(e,t)}function Xg(e,t){const n={};return wu(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):vu(e,((e,r)=>{const s=Qg(r,t.Du(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function Yg(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof gu||e instanceof qg||e instanceof jg||e instanceof Ng||e instanceof Bg)}function Zg(e,t,n){if(!Yg(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=Sg(n);throw"an object"===r?t.Ou(e+" a custom object"):t.Ou(e+" "+r)}var r}function em(e,t,n){if((t=Vs(t))instanceof Fg)return t._internalPath;if("string"==typeof t)return nm(e,t);throw rm("Field path arguments must be of type string or ",e,!1,void 0,n)}const tm=new RegExp("[~\\*/\\[\\]]");function nm(e,t,n){if(t.search(tm)>=0)throw rm(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Fg(...t.split("."))._internalPath}catch(r){throw rm(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function rm(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new tu(eu.INVALID_ARGUMENT,a+e+c)}function sm(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ng(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new om(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(am("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class om extends im{data(){return super.data()}}function am(e,t){return"string"==typeof t?nm(e,t):t instanceof Fg?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lm extends im{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new um(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(am("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class um extends lm{data(e={}){return super.data(e)}}class hm{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new cm(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new um(this._firestore,this._userDataWriter,n.key,n,new cm(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new tu(eu.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new um(e._firestore,e._userDataWriter,n.doc.key,n.doc,new cm(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new um(e._firestore,e._userDataWriter,t.doc.key,t.doc,new cm(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:dm(t.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function dm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Xl()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm extends
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class{convertValue(e,t="none"){switch(Vu(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Au(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Nu(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Xl()}}convertObject(e,t){const n={};return vu(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new qg(Au(e.latitude),Au(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ru(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Du(e));default:return null}}convertTimestamp(e){const t=Cu(e);return new gu(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=bu.fromString(e);Yl(cf(n));const r=new Pu(n.get(1),n.get(3)),s=new Uu(n.popFirst(5));return r.isEqual(t)||Wl(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */{constructor(e){super(),this.firestore=e}convertBytes(e){return new jg(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ng(this.firestore,null,t)}}function pm(e){e=kg(e,Og);const t=kg(e.firestore,Lg),n=Ug(t),r=new fm(t);return function(e){if(Eh(e)&&0===e.explicitOrderBy.length)throw new tu(eu.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),_g(n,e._query).then((n=>new hm(t,r,e,n)))}function gm(e,t,n){e=kg(e,Ng);const r=kg(e.firestore,Lg),s=function(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}(e.converter,t,n);return function(e,t){return function(e,t){const n=new nu;return e.asyncQueue.enqueueAndForget((async()=>Xp(await function(e){return vg(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(Ug(e),t)}(r,[Jg(Wg(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,Gh.none())])}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function mm(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}function ym(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(e,t=!0){Kl="9.6.8",mi(new Fs("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=new Lg(r,new iu(e.getProvider("auth-internal")),new lu(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s}),"PUBLIC")),Ei(ql,"3.4.5",e),Ei(ql,"3.4.5","esm2017")}();const vm=ym,wm=new Rs("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),_m=new Ws("@firebase/auth");function bm(e,...t){_m.logLevel<=qs.ERROR&&_m.error(`Auth (9.6.8): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(e,...t){throw Sm(e,...t)}function Tm(e,...t){return Sm(e,...t)}function Im(e,t,n){const r=Object.assign(Object.assign({},vm()),{[t]:n});return new Rs("auth","Firebase",r).create(t,{appName:e.name})}function Sm(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return wm.create(e,...t)}function km(e,t,...n){if(!e)throw Sm(t,...n)}function Cm(e){const t="INTERNAL ASSERTION FAILED: "+e;throw bm(t),new Error(t)}function Am(e,t){e||Cm(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm=new Map;function Om(e){Am(e instanceof Function,"Expected a class definition");let t=Nm.get(e);return t?(Am(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Nm.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rm(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Dm(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Dm()&&"https:"!==Dm()&&!Cs()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pm{constructor(e,t){this.shortDelay=e,this.longDelay=t,Am(t>e,"Short delay should be less than long delay!"),this.isMobile=ks()||As()}get(){return xm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(e,t){Am(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Cm("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Cm("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Cm("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Um={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Vm=new Pm(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fm(e,t,n,r,s={}){return jm(e,s,(async()=>{let s={},i={};r&&("GET"===t?i=r:s={body:JSON.stringify(r)});const o=Ls(Object.assign({key:e.config.apiKey},i)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Mm.fetch()(Bm(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function jm(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Um),t);try{const t=new qm(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await s.json();if("needConfirmation"in i)throw $m(e,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const t=s.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw $m(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw $m(e,"email-already-in-use",i);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Im(e,a,o);Em(e,a)}}catch(s){if(s instanceof Os)throw s;Em(e,"network-request-failed")}}function Bm(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?Lm(e.config,s):`${e.config.apiScheme}://${s}`}class qm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Tm(this.auth,"network-request-failed"))),Vm.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function $m(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Tm(e,t,r);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Km(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function Hm(e){return 1e3*Number(e)}function zm(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return bm("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return Es.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(n);return e?JSON.parse(e):(bm("Failed to decode base64 JWT payload"),null)}catch(s){return bm("Caught error parsing JWT payload as JSON",s),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Gm(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Os&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class Wm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Km(this.lastLoginAt),this.creationTime=Km(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qm(e){var t;const n=e.auth,r=await e.getIdToken(),s=await Gm(e,async function(e,t){return Fm(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));km(null==s?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?i.providerUserInfo.map((e=>{var{providerId:t}=e,n=mm(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&i.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Jm(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xm{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){km(e.idToken,"internal-error"),km(void 0!==e.idToken,"internal-error"),km(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=zm(e);return km(t,"internal-error"),km(void 0!==t.exp,"internal-error"),km(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return km(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await jm(e,{},(async()=>{const n=Ls({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,i=Bm(e,r,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Mm.fetch()(i,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new Xm;return n&&(km("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(km("string"==typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(km("number"==typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xm,this.toJSON())}_performRefresh(){return Cm("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(e,t){km("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Zm{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,s=mm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Wm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Jm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Gm(this,this.stsTokenManager.getToken(this.auth,e));return km(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Vs(e),r=await n.getIdToken(t),s=zm(r);km(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i="object"==typeof s.firebase?s.firebase:void 0,o=null==i?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Km(Hm(s.auth_time)),issuedAtTime:Km(Hm(s.iat)),expirationTime:Km(Hm(s.exp)),signInProvider:o||null,signInSecondFactor:(null==i?void 0:i.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Vs(e);await Qm(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(km(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Zm(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){km(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Qm(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gm(this,async function(e,t){return Fm(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,s,i,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:E}=t;km(v&&E,e,"internal-error");const T=Xm.fromJSON(this.name,E);km("string"==typeof v,e,"internal-error"),Ym(u,e.name),Ym(h,e.name),km("boolean"==typeof w,e,"internal-error"),km("boolean"==typeof _,e,"internal-error"),Ym(d,e.name),Ym(f,e.name),Ym(p,e.name),Ym(g,e.name),Ym(m,e.name),Ym(y,e.name);const I=new Zm({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return b&&Array.isArray(b)&&(I.providerData=b.map((e=>Object.assign({},e)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new Xm;r.updateFromServerResponse(t);const s=new Zm({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Qm(s),s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ey.type="NONE";const ty=ey;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(e,t,n){return`firebase:${e}:${t}:${n}`}class ry{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=ny(this.userKey,r.apiKey,s),this.fullPersistenceKey=ny("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zm._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ry(Om(ty),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=r[0]||Om(ty);const i=ny(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(i);if(t){const n=Zm._fromJSON(e,t);l!==s&&(o=n),s=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(i)}catch(c){}}))),new ry(s,e,n)):new ry(s,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(cy(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(iy(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(uy(t))return"Blackberry";if(hy(t))return"Webos";if(oy(t))return"Safari";if((t.includes("chrome/")||ay(t))&&!t.includes("edge/"))return"Chrome";if(ly(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function iy(e=Ss()){return/firefox\//i.test(e)}function oy(e=Ss()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ay(e=Ss()){return/crios\//i.test(e)}function cy(e=Ss()){return/iemobile/i.test(e)}function ly(e=Ss()){return/android/i.test(e)}function uy(e=Ss()){return/blackberry/i.test(e)}function hy(e=Ss()){return/webos/i.test(e)}function dy(e=Ss()){return/iphone|ipad|ipod/i.test(e)}function fy(e=Ss()){return dy(e)||ly(e)||hy(e)||uy(e)||/windows phone/i.test(e)||cy(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function py(e,t=[]){let n;switch(e){case"Browser":n=sy(Ss());break;case"Worker":n=`${sy(Ss())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.8/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yy(this),this.idTokenSubscription=new yy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wm,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Om(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ry.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e)):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,i=await this.tryRedirectSignIn(e);r&&r!==s||!(null==i?void 0:i.user)||(n=i.user)}return n?n._redirectEventId?(km(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qm(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Vs(e):null;return t&&km(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&km(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Om(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rs("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Om(e)||this._popupRedirectResolver;km(t,this,"argument-error"),this.redirectPersistenceManager=await ry.create(this,[Om(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return km(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return km(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=py(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function my(e){return Vs(e)}class yy{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Ms(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return km(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Cm("not implemented")}_getIdTokenResponse(e){return Cm("not implemented")}_linkToIdToken(e,t){return Cm("not implemented")}_getReauthenticationResolver(e){return Cm("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wy(e,t){return async function(e,t,n,r,s={}){const i=await Fm(e,t,n,r,s);return"mfaPendingCredential"in i&&Em(e,"multi-factor-auth-required",{_serverResponse:i}),i}(e,"POST","/v1/accounts:signInWithIdp",function(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y extends vy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _y(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Em("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,s=mm(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new _y(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){return wy(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,wy(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,wy(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ls(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey extends by{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty extends Ey{constructor(){super("facebook.com")}static credential(e){return _y._fromParams({providerId:Ty.PROVIDER_ID,signInMethod:Ty.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ty.credentialFromTaggedObject(e)}static credentialFromError(e){return Ty.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ty.credential(e.oauthAccessToken)}catch(t){return null}}}Ty.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ty.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Iy extends Ey{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _y._fromParams({providerId:Iy.PROVIDER_ID,signInMethod:Iy.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Iy.credentialFromTaggedObject(e)}static credentialFromError(e){return Iy.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Iy.credential(t,n)}catch(r){return null}}}Iy.GOOGLE_SIGN_IN_METHOD="google.com",Iy.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sy extends Ey{constructor(){super("github.com")}static credential(e){return _y._fromParams({providerId:Sy.PROVIDER_ID,signInMethod:Sy.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sy.credentialFromTaggedObject(e)}static credentialFromError(e){return Sy.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Sy.credential(e.oauthAccessToken)}catch(t){return null}}}Sy.GITHUB_SIGN_IN_METHOD="github.com",Sy.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ky extends Ey{constructor(){super("twitter.com")}static credential(e,t){return _y._fromParams({providerId:ky.PROVIDER_ID,signInMethod:ky.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ky.credentialFromTaggedObject(e)}static credentialFromError(e){return ky.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ky.credential(t,n)}catch(r){return null}}}ky.TWITTER_SIGN_IN_METHOD="twitter.com",ky.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cy{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await Zm._fromIdTokenResponse(e,n,r),i=Ay(n);return new Cy({user:s,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ay(n);return new Cy({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ay(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny extends Os{constructor(e,t,n,r){var s;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ny.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ny(e,t,n,r)}}function Oy(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ny._fromErrorAndOperation(e,n,t,r);throw n}))}function Ry(e,t,n,r){return Vs(e).onAuthStateChanged(t,n,r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dy{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy extends Dy{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Ss();return oy(e)||dy(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=fy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);Ns()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xy.type="LOCAL";const Py=xy;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly extends Dy{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ly.type="SESSION";const My=Ly;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uy{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Uy(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Vy(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Uy.receivers=[];class Fy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const c=Vy("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function By(){return void 0!==jy().WorkerGlobalScope&&"function"==typeof jy().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qy="firebaseLocalStorageDb";class $y{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Ky(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Hy(){const e=indexedDB.open(qy,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(qy);return new $y(e).toPromise()}(),t(await Hy()))}))}))}async function zy(e,t,n){const r=Ky(e,!0).put({fbase_key:t,value:n});return new $y(r).toPromise()}function Gy(e,t){const n=Ky(e,!0).delete(t);return new $y(n).toPromise()}class Wy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Hy()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return By()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uy._getInstance(By()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Fy(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hy();return await zy(e,"__sak","1"),await Gy(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>zy(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Ky(e,!1).get(t),r=await new $y(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Gy(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Ky(e,!1).getAll();return new $y(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Wy.type="LOCAL";const Jy=Wy;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(e){return new Promise(((t,n)=>{const r=document.createElement("script");var s,i;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Tm("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(i=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==i?i:document).appendChild(r)}))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xy(e,t){return t?Om(t):(km(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Pm(3e4,6e4);class Yy extends vy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wy(e,this._buildIdpRequest())}_linkToIdToken(e,t){return wy(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return wy(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Zy(e){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t,n=!1){const r="signIn",s=await Oy(e,r,t),i=await Cy._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}(e.auth,new Yy(e),e.bypassAuthState)}function ev(e){const{auth:t,user:n}=e;return km(n,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await Gm(e,Oy(r,s,t,e),n);km(i.idToken,r,"internal-error");const o=zm(i.idToken);km(o,r,"internal-error");const{sub:a}=o;return km(e.uid===a,r,"user-mismatch"),Cy._forOperation(e,s,i)}catch(i){throw"auth/user-not-found"===(null==i?void 0:i.code)&&Em(r,"user-mismatch"),i}}(n,new Yy(e),e.bypassAuthState)}async function tv(e){const{auth:t,user:n}=e;return km(n,t,"internal-error"),async function(e,t,n=!1){const r=await Gm(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Cy._forOperation(e,"link",r)}(n,new Yy(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zy;case"linkViaPopup":case"linkViaRedirect":return tv;case"reauthViaPopup":case"reauthViaRedirect":return ev;default:Em(this.auth,"internal-error")}}resolve(e){Am(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Am(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv=new Pm(2e3,1e4);async function sv(e,t,n){const r=my(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&Em(e,"argument-error"),Im(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,by);const s=Xy(r,n);return new iv(r,"signInViaPopup",t,s).executeNotNull()}class iv extends nv{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,iv.currentPopupAction&&iv.currentPopupAction.cancel(),iv.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return km(e,this.auth,"internal-error"),e}async onExecution(){Am(1===this.filter.length,"Popup operations only handle one event");const e=Vy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Tm(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Tm(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,iv.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Tm(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,rv.get())};e()}}iv.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ov=new Map;class av extends nv{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ov.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return ny("pendingRedirect",e.config.apiKey,e.name)}(t),r=function(e){return Om(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const s="true"===await r._get(n);return await r._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}ov.set(this.auth._key(),e)}return this.bypassAuthState||ov.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function cv(e,t,n=!1){const r=my(e),s=Xy(r,t),i=new av(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hv(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!hv(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Tm(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(uv(e))}saveEventToCache(e){this.cachedEventUids.add(uv(e)),this.lastProcessedEventTime=Date.now()}}function uv(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function hv({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fv=/^https?/;async function pv(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Fm(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(gv(r))return}catch(n){}Em(e,"unauthorized-domain")}function gv(e){const t=Rm(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!fv.test(n))return!1;if(dv.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=new Pm(3e4,6e4);function yv(){const e=jy().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function vv(e){return new Promise(((t,n)=>{var r,s,i;function o(){yv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{yv(),n(Tm(e,"network-request-failed"))},timeout:mv.get()})}if(null===(s=null===(r=jy().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=jy().gapi)||void 0===i?void 0:i.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return jy()[t]=()=>{gapi.load?o():n(Tm(e,"network-request-failed"))},Qy(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw wv=null,e}))}let wv=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _v=new Pm(5e3,15e3),bv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ev=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Tv(e){const t=e.config;km(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Lm(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.6.8"},s=Ev.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ls(r).slice(1)}`}async function Iv(e){const t=await function(e){return wv=wv||vv(e),wv}(e),n=jy().gapi;return km(n,e,"internal-error"),t.open({where:document.body,url:Tv(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bv,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=Tm(e,"network-request-failed"),i=jy().setTimeout((()=>{r(s)}),_v.get());function o(){jy().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{r(s)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class kv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Cv(e,t,n,r=500,s=600){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Sv),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ss().toLowerCase();n&&(a=ay(l)?"_blank":n),iy(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Ss()){var t;return dy(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",a),new kv(null);const h=window.open(t||"",a,u);km(h,e,"popup-blocked");try{h.focus()}catch(d){}return new kv(h)}function Av(e,t,n,r,s,i){km(e.config.authDomain,e,"auth-domain-config-required"),km(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.6.8",eventId:s};if(t instanceof by){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(i||{}))o[e]=t}if(t instanceof Ey){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return Lm(e,"emulator/auth/handler")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Ls(a).slice(1)}`}const Nv=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=My,this._completeRedirectFn=cv}async _openPopup(e,t,n,r){var s;Am(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return Cv(e,Av(e,t,n,Rm(),r),Vy())}async _openRedirect(e,t,n,r){var s;return await this._originValidation(e),s=Av(e,t,n,Rm(),r),jy().location.href=s,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Am(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Iv(e),n=new lv(e);return t.register("authEvent",(t=>{km(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const s=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==s&&t(!!s),Em(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=pv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fy()||oy()||dy()}};var Ov,Rv="@firebase/auth";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){km(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xv(e=bi()){const t=yi(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=yi(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(xs(n.getOptions(),null!=t?t:{}))return e;Em(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Nv,persistence:[Jy,Py,My]})}function Pv(){return"undefined"!=typeof navigator&&"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}}Ov="Browser",mi(new Fs("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=n.options;return(e=>{km(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),km(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:s,clientPlatform:Ov,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:py(Ov)},i=new gy(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Om);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,t),i})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),mi(new Fs("auth-internal",(e=>{const t=my(e.getProvider("auth").getImmediate());return new Dv(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ei(Rv,"0.19.9",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ov)),Ei(Rv,"0.19.9","esm2017");const Lv="function"==typeof Proxy;let Mv,Uv;function Vv(){return void 0!==Mv||("undefined"!=typeof window&&window.performance?(Mv=!0,Uv=window.performance):"undefined"!=typeof global&&(null===(e=global.perf_hooks)||void 0===e?void 0:e.performance)?(Mv=!0,Uv=global.perf_hooks.performance):Mv=!1),Mv?Uv.now():Date.now();var e}class Fv{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(s,t)}catch(i){}this.fallbacks={getSettings:()=>s,setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(i){}s=e},now:()=>Vv()},t&&t.on("plugin:settings:set",((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function jv(e,t){const n=e,r=Pv(),s=Pv().__VUE_DEVTOOLS_GLOBAL_HOOK__,i=Lv&&n.enableEarlyProxy;if(!s||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&i){const e=i?new Fv(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else s.emit("devtools-plugin:setup",e,t)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */function Bv(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function qv(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function $v(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;Hv(e,n,[],e._modules.root,!0),Kv(e,n,t)}function Kv(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,i={};Bv(s,(function(t,n){i[n]=function(e,t){return function(){return e(t)}}(t,e),Object.defineProperty(e.getters,n,{get:function(){return i[n]()},enumerable:!0})})),e._state=We({data:t}),e.strict&&function(e){wn((function(){return e._state.data}),(function(){}),{deep:!0,flush:"sync"})}(e),r&&n&&e._withCommit((function(){r.data=null}))}function Hv(e,t,n,r,s){var i=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!i&&!s){var a=Gv(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){a[c]=r.state}))}var l=r.context=function(e,t,n){var r=""===t,s={dispatch:r?e.dispatch:function(n,r,s){var i=Wv(n,r,s),o=i.payload,a=i.options,c=i.type;return a&&a.root||(c=t+c),e.dispatch(c,o)},commit:r?e.commit:function(n,r,s){var i=Wv(n,r,s),o=i.payload,a=i.options,c=i.type;a&&a.root||(c=t+c),e.commit(c,o,a)}};return Object.defineProperties(s,{getters:{get:r?function(){return e.getters}:function(){return zv(e,t)}},state:{get:function(){return Gv(e.state,n)}}}),s}(e,o,n);r.forEachMutation((function(t,n){!function(e,t,n,r){(e._mutations[t]||(e._mutations[t]=[])).push((function(t){n.call(e,r.state,t)}))}(e,o+n,t,l)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,s=t.handler||t;!function(e,t,n,r){(e._actions[t]||(e._actions[t]=[])).push((function(t){var s,i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return(s=i)&&"function"==typeof s.then||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}(e,r,s,l)})),r.forEachGetter((function(t,n){!function(e,t,n,r){if(e._wrappedGetters[t])return;e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}(e,o+n,t,l)})),r.forEachChild((function(r,i){Hv(e,t,n.concat(i),r,s)}))}function zv(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(s){if(s.slice(0,r)===t){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return e.getters[s]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function Gv(e,t){return t.reduce((function(e,t){return e[t]}),e)}function Wv(e,t,n){var r;return null!==(r=e)&&"object"==typeof r&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var Jv=0;function Qv(e,t){jv({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:["vuex bindings"]},(function(n){n.addTimelineLayer({id:"vuex:mutations",label:"Vuex Mutations",color:Xv}),n.addTimelineLayer({id:"vuex:actions",label:"Vuex Actions",color:Xv}),n.addInspector({id:"vuex",label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&"vuex"===n.inspectorId)if(n.filter){var r=[];tw(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[ew(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&"vuex"===n.inspectorId){var r=n.nodeId;zv(t,r),n.state=function(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),s={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var i=function(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var s=t,i=r.pop();r.forEach((function(e){s[e]||(s[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),s=s[e]._custom.value})),s[i]=nw((function(){return e[n]}))}else t[n]=nw((function(){return e[n]}))})),t}(t);s.getters=Object.keys(i).map((function(e){return{key:e.endsWith("/")?Zv(e):e,editable:!1,value:nw((function(){return i[e]}))}}))}return s}((s=t._modules,(o=(i=r).split("/").filter((function(e){return e}))).reduce((function(e,t,n){var r=e[t];if(!r)throw new Error('Missing module "'+t+'" for path "'+i+'".');return n===o.length-1?r:r._children}),"root"===i?s:s.root._children)),"root"===r?t.getters:t._makeLocalGettersCache,r)}var s,i,o})),n.on.editInspectorState((function(n){if(n.app===e&&"vuex"===n.inspectorId){var r=n.nodeId,s=n.path;"root"!==r&&(s=r.split("/").filter(Boolean).concat(s)),t._withCommit((function(){n.set(t._state.data,s,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree("vuex"),n.sendInspectorState("vuex"),n.addTimelineEvent({layerId:"vuex:mutations",event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=Jv++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:"vuex:actions",event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},s=Date.now()-e._time;r.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:"vuex:actions",event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var Xv=8702998,Yv={label:"namespaced",textColor:16777215,backgroundColor:6710886};function Zv(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function ew(e,t){return{id:t||"root",label:Zv(t),tags:e.namespaced?[Yv]:[],children:Object.keys(e._children).map((function(n){return ew(e._children[n],t+n+"/")}))}}function tw(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[Yv]:[]}),Object.keys(t._children).forEach((function(s){tw(e,t._children[s],n,r+s+"/")}))}function nw(e){try{return e()}catch(t){return t}}var rw=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"==typeof n?n():n)||{}},sw={namespaced:{configurable:!0}};sw.namespaced.get=function(){return!!this._rawModule.namespaced},rw.prototype.addChild=function(e,t){this._children[e]=t},rw.prototype.removeChild=function(e){delete this._children[e]},rw.prototype.getChild=function(e){return this._children[e]},rw.prototype.hasChild=function(e){return e in this._children},rw.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},rw.prototype.forEachChild=function(e){Bv(this._children,e)},rw.prototype.forEachGetter=function(e){this._rawModule.getters&&Bv(this._rawModule.getters,e)},rw.prototype.forEachAction=function(e){this._rawModule.actions&&Bv(this._rawModule.actions,e)},rw.prototype.forEachMutation=function(e){this._rawModule.mutations&&Bv(this._rawModule.mutations,e)},Object.defineProperties(rw.prototype,sw);var iw=function(e){this.register([],e,!1)};function ow(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;ow(e.concat(r),t.getChild(r),n.modules[r])}}function aw(e){return new cw(e)}iw.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},iw.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return e+((t=t.getChild(n)).namespaced?n+"/":"")}),"")},iw.prototype.update=function(e){ow([],this.root,e)},iw.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var s=new rw(t,n);0===e.length?this.root=s:this.get(e.slice(0,-1)).addChild(e[e.length-1],s);t.modules&&Bv(t.modules,(function(t,s){r.register(e.concat(s),t,n)}))},iw.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},iw.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var cw=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new iw(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var i=this,o=this.dispatch,a=this.commit;this.dispatch=function(e,t){return o.call(i,e,t)},this.commit=function(e,t,n){return a.call(i,e,t,n)},this.strict=r;var c=this._modules.root.state;Hv(this,c,[],this._modules.root),Kv(this,c),n.forEach((function(e){return e(t)}))},lw={state:{configurable:!0}};cw.prototype.install=function(e,t){e.provide(t||"store",this),e.config.globalProperties.$store=this,void 0!==this._devtools&&this._devtools&&Qv(e,this)},lw.state.get=function(){return this._state.data},lw.state.set=function(e){},cw.prototype.commit=function(e,t,n){var r=this,s=Wv(e,t,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._mutations[i];c&&(this._withCommit((function(){c.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},cw.prototype.dispatch=function(e,t){var n=this,r=Wv(e,t),s=r.type,i=r.payload,o={type:s,payload:i},a=this._actions[s];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(l){}var c=a.length>1?Promise.all(a.map((function(e){return e(i)}))):a[0](i);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(l){}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(l){}t(e)}))}))}},cw.prototype.subscribe=function(e,t){return qv(e,this._subscribers,t)},cw.prototype.subscribeAction=function(e,t){return qv("function"==typeof e?{before:e}:e,this._actionSubscribers,t)},cw.prototype.watch=function(e,t,n){var r=this;return wn((function(){return e(r.state,r.getters)}),t,Object.assign({},n))},cw.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},cw.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"==typeof e&&(e=[e]),this._modules.register(e,t),Hv(this,this.state,e,this._modules.get(e),n.preserveState),Kv(this,this.state)},cw.prototype.unregisterModule=function(e){var t=this;"string"==typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){delete Gv(t.state,e.slice(0,-1))[e[e.length-1]]})),$v(this)},cw.prototype.hasModule=function(e){return"string"==typeof e&&(e=[e]),this._modules.isRegistered(e)},cw.prototype.hotUpdate=function(e){this._modules.update(e),$v(this,!0)},cw.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(cw.prototype,lw);
/*!
  * vue-router v4.0.6
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const uw="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,hw=e=>uw?Symbol(e):"_vr_"+e,dw=hw("rvlm"),fw=hw("rvd"),pw=hw("r"),gw=hw("rl"),mw=hw("rvl"),yw="undefined"!=typeof window;const vw=Object.assign;function ww(e,t){const n={};for(const r in t){const s=t[r];n[r]=Array.isArray(s)?s.map(e):e(s)}return n}let _w=()=>{};const bw=/\/$/;function Ew(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),s=e(i)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s,i,o=n.length-1;for(s=0;s<r.length;s++)if(i=r[s],1!==o&&"."!==i){if(".."!==i)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Tw(e,t){return!t||e.toLowerCase().indexOf(t.toLowerCase())?e:e.slice(t.length)||"/"}function Iw(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Sw(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(!kw(e[n],t[n]))return!1;return!0}function kw(e,t){return Array.isArray(e)?Cw(e,t):Array.isArray(t)?Cw(t,e):e===t}function Cw(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var Aw,Nw,Ow,Rw;function Dw(e){if(!e)if(yw){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(bw,"")}(Nw=Aw||(Aw={})).pop="pop",Nw.push="push",(Rw=Ow||(Ow={})).back="back",Rw.forward="forward",Rw.unknown="";const xw=/^[^#]+#/;function Pw(e,t){return e.replace(xw,"#")+t}const Lw=()=>({left:window.pageXOffset,top:window.pageYOffset});function Mw(e){let t;if("el"in e){let n=e.el;const r="string"==typeof n&&n.startsWith("#"),s="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function Uw(e,t){return(history.state?history.state.position-t:-1)+e}const Vw=new Map;function Fw(e,t){const{pathname:n,search:r,hash:s}=t;if(e.indexOf("#")>-1){let e=s.slice(1);return"/"!==e[0]&&(e="/"+e),Tw(e,"")}return Tw(n,e)+r+s}function jw(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?Lw():null}}function Bw(e){const{history:t,location:n}=window;let r={value:Fw(e,n)},s={value:t.state};function i(r,i,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:location.protocol+"//"+location.host+e+r;try{t[o?"replaceState":"pushState"](i,"",c),s.value=i}catch(l){console.error(l),n[o?"replace":"assign"](c)}}return s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:s,push:function(e,n){const o=vw({},s.value,t.state,{forward:e,scroll:Lw()});i(o.current,o,!0),i(e,vw({},jw(r.value,e,null),{position:o.position+1},n),!1),r.value=e},replace:function(e,n){i(e,vw({},t.state,jw(s.value.back,e,s.value.forward,!0),n,{position:s.value.position}),!0),r.value=e}}}function qw(e){const t=Bw(e=Dw(e)),n=function(e,t,n,r){let s=[],i=[],o=null;const a=({state:i})=>{const a=Fw(e,location),c=n.value,l=t.value;let u=0;if(i){if(n.value=a,t.value=i,o&&o===c)return void(o=null);u=l?i.position-l.position:0}else r(a);s.forEach((e=>{e(n.value,c,{delta:u,type:Aw.pop,direction:u?u>0?Ow.forward:Ow.back:Ow.unknown})}))};function c(){const{history:e}=window;e.state&&e.replaceState(vw({},e.state,{scroll:Lw()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:function(){o=n.value},listen:function(e){s.push(e);const t=()=>{const t=s.indexOf(e);t>-1&&s.splice(t,1)};return i.push(t),t},destroy:function(){for(const e of i)e();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}}}(e,t.state,t.location,t.replace);const r=vw({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:Pw.bind(null,e)},t,n);return Object.defineProperty(r,"location",{get:()=>t.location.value}),Object.defineProperty(r,"state",{get:()=>t.state.value}),r}function $w(e){return"string"==typeof e||"symbol"==typeof e}const Kw={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Hw=hw("nf");var zw,Gw;function Ww(e,t){return vw(new Error,{type:e,[Hw]:!0},t)}function Jw(e,t){return e instanceof Error&&Hw in e&&(null==t||!!(e.type&t))}(Gw=zw||(zw={}))[Gw.aborted=4]="aborted",Gw[Gw.cancelled=8]="cancelled",Gw[Gw.duplicated=16]="duplicated";const Qw={sensitive:!1,strict:!1,start:!0,end:!0},Xw=/[.+*?^${}()[\]/\\]/g;function Yw(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function Zw(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const e=Yw(r[n],s[n]);if(e)return e;n++}return s.length-r.length}const e_={type:0,value:""},t_=/[a-zA-Z0-9_]/;function n_(e,t,n){const r=function(e,t){const n=vw({},Qw,t);let r=[],s=n.start?"^":"";const i=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let t=0;t<c.length;t++){const r=c[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(s+="/"),s+=r.value.replace(Xw,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;i.push({name:e,repeatable:n,optional:l});const h=u||"[^/]+?";if("[^/]+?"!==h){o+=10;try{new RegExp(`(${h})`)}catch(a){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+a.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=l&&c.length<2?`(?:/${d})`:"/"+d),l&&(d+="?"),s+=d,o+=20,l&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");return{re:o,score:r,keys:i,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",s=i[r-1];n[s.name]=e&&s.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const s of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of s)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:o,optional:a}=e,c=i in t?t[i]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${i}"`);s.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[e_]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a,c=0,l="",u="";function h(){l&&(0===n?i.push({type:0,value:l}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}for(;c<e.length;)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:t_.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}(e.path),n),s=vw(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function r_(e,t){const n=[],r=new Map;function s(e,n,r){let a=!r,c=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:s_(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);c.aliasOf=r&&r.record;const l=a_(t,e),u=[c];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(vw({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let h,d;for(const t of u){let{path:u}=t;if(n&&"/"!==u[0]){let e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=n_(t,n,l),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),a&&e.name&&!i_(h)&&i(e.name)),"children"in c){let e=c.children;for(let t=0;t<e.length;t++)s(e[t],h,r&&r.children[t])}r=r||h,o(h)}return d?()=>{i(d)}:_w}function i(e){if($w(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(i),t.alias.forEach(i))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(i),e.alias.forEach(i))}}function o(e){let t=0;for(;t<n.length&&Zw(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!i_(e)&&r.set(e.record.name,e)}return t=a_({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:function(e,t){let s,i,o,a={};if("name"in e&&e.name){if(s=r.get(e.name),!s)throw Ww(1,{location:e});o=s.record.name,a=vw(function(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}(t.params,s.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),i=s.stringify(a)}else if("path"in e)i=e.path,s=n.find((e=>e.re.test(i))),s&&(a=s.parse(i),o=s.record.name);else{if(s=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!s)throw Ww(1,{location:e,currentLocation:t});o=s.record.name,a=vw({},t.params,e.params),i=s.stringify(a)}const c=[];let l=s;for(;l;)c.unshift(l.record),l=l.parent;return{name:o,path:i,params:a,matched:c,meta:o_(c)}},removeRoute:i,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function s_(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(let r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function i_(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function o_(e){return e.reduce(((e,t)=>vw(e,t.meta)),{})}function a_(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}const c_=/#/g,l_=/&/g,u_=/\//g,h_=/=/g,d_=/\?/g,f_=/\+/g,p_=/%5B/g,g_=/%5D/g,m_=/%5E/g,y_=/%60/g,v_=/%7B/g,w_=/%7C/g,__=/%7D/g,b_=/%20/g;function E_(e){return encodeURI(""+e).replace(w_,"|").replace(p_,"[").replace(g_,"]")}function T_(e){return E_(e).replace(f_,"%2B").replace(b_,"+").replace(c_,"%23").replace(l_,"%26").replace(y_,"`").replace(v_,"{").replace(__,"}").replace(m_,"^")}function I_(e){return function(e){return E_(e).replace(c_,"%23").replace(d_,"%3F")}(e).replace(u_,"%2F")}function S_(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function k_(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(f_," ");let s=e.indexOf("="),i=S_(s<0?e:e.slice(0,s)),o=s<0?null:S_(e.slice(s+1));if(i in t){let e=t[i];Array.isArray(e)||(e=t[i]=[e]),e.push(o)}else t[i]=o}return t}function C_(e){let t="";for(let n in e){t.length&&(t+="&");const r=e[n];if(n=T_(n).replace(h_,"%3D"),null==r){void 0!==r&&(t+=n);continue}let s=Array.isArray(r)?r.map((e=>e&&T_(e))):[r&&T_(r)];for(let e=0;e<s.length;e++)t+=(e?"&":"")+n,null!=s[e]&&(t+="="+s[e])}return t}function A_(e){const t={};for(let n in e){let r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function N_(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function O_(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise(((o,a)=>{const c=e=>{var c;!1===e?a(Ww(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(c=e)||c&&"object"==typeof c?a(Ww(2,{from:t,to:e})):(i&&r.enterCallbacks[s]===i&&"function"==typeof e&&i.push(e),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function R_(e,t,n,r){const s=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if("object"==typeof(i=a)||"displayName"in i||"props"in i||"__vccOpts"in i){const i=(a.__vccOpts||a)[t];i&&s.push(O_(i,n,r,o,e))}else{let i=a();i=i.catch(console.error),s.push((()=>i.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const i=(a=s).__esModule||uw&&"Module"===a[Symbol.toStringTag]?s.default:s;var a;o.components[e]=i;const c=(i.__vccOpts||i)[t];return c&&O_(c,n,r,o,e)()}))))}}var i;return s}function D_(e){const t=pr(pw),n=pr(gw),r=Ur((()=>t.resolve(ot(e.to)))),s=Ur((()=>{let{matched:e}=r.value,{length:t}=e;const s=e[t-1];let i=n.matched;if(!s||!i.length)return-1;let o=i.findIndex(Iw.bind(null,s));if(o>-1)return o;let a=P_(e[t-2]);return t>1&&P_(s)===a&&i[i.length-1].path!==a?i.findIndex(Iw.bind(null,e[t-2])):o})),i=Ur((()=>s.value>-1&&function(e,t){for(let n in t){let r=t[n],s=e[n];if("string"==typeof r){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some(((e,t)=>e!==s[t])))return!1}return!0}(n.params,r.value.params))),o=Ur((()=>s.value>-1&&s.value===n.matched.length-1&&Sw(n.params,r.value.params)));return{route:r,href:Ur((()=>r.value.href)),isActive:i,isExactActive:o,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[ot(e.replace)?"replace":"push"](ot(e.to)):Promise.resolve()}}}const x_=Mn({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},setup(e,{slots:t}){const n=We(D_(e)),{options:r}=pr(pw),s=Ur((()=>({[L_(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[L_(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:Vr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}});function P_(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const L_=(e,t,n)=>null!=e?e:null!=t?t:n;function M_(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const U_=Mn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=pr(mw),s=Ur((()=>e.route||r.value)),i=pr(fw,0),o=Ur((()=>s.value.matched[i]));fr(fw,i+1),fr(dw,o),fr(mw,s);const a=rt();return wn((()=>[a.value,o.value,e.name]),(([e,t,n],[r,s,i])=>{t&&(t.instances[n]=e,s&&s!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=s.leaveGuards),t.updateGuards.size||(t.updateGuards=s.updateGuards))),!e||!t||s&&Iw(t,s)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=s.value,i=o.value,c=i&&i.components[e.name],l=e.name;if(!c)return M_(n.default,{Component:c,route:r});const u=i.props[e.name],h=u?!0===u?r.params:"function"==typeof u?u(r):u:null,d=Vr(c,vw({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(i.instances[l]=null)},ref:a}));return M_(n.default,{Component:d,route:r})||d}}});function V_(e){const t=r_(e.routes,e);let n=e.parseQuery||k_,r=e.stringifyQuery||C_,s=e.history;const i=N_(),o=N_(),a=N_(),c=it(Kw,!0);let l=Kw;yw&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ww.bind(null,(e=>""+e)),h=ww.bind(null,I_),d=ww.bind(null,S_);function f(e,i){if(i=vw({},i||c.value),"string"==typeof e){let r=Ew(n,e,i.path),o=t.resolve({path:r.path},i),a=s.createHref(r.fullPath);return vw(r,o,{params:d(o.params),hash:S_(r.hash),redirectedFrom:void 0,href:a})}let o;"path"in e?o=vw({},e,{path:Ew(n,e.path,i.path).path}):(o=vw({},e,{params:h(e.params)}),i.params=h(i.params));let a=t.resolve(o,i);const l=e.hash||"";a.params=u(d(a.params));const f=function(e,t){let n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(r,vw({},e,{hash:(p=l,E_(p).replace(v_,"{").replace(__,"}").replace(m_,"^")),path:a.path}));var p;let g=s.createHref(f);return vw({fullPath:f,hash:l,query:r===C_?A_(e.query):e.query},a,{redirectedFrom:void 0,href:g})}function p(e){return"string"==typeof e?Ew(n,e,c.value.path):vw({},e)}function g(e,t){if(l!==e)return Ww(8,{from:t,to:e})}function m(e){return v(e)}function y(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.indexOf("?")>-1||r.indexOf("#")>-1?r=p(r):{path:r}),vw({query:e.query,hash:e.hash,params:e.params},r)}}function v(e,t){const n=l=f(e),s=c.value,i=e.state,o=e.force,a=!0===e.replace,u=y(n);if(u)return v(vw(p(u),{state:i,force:o,replace:a}),t||n);const h=n;let d;return h.redirectedFrom=t,!o&&function(e,t,n){let r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Iw(t.matched[r],n.matched[s])&&Sw(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(r,s,n)&&(d=Ww(16,{to:h,from:s}),O(s,s,!0,!1)),(d?Promise.resolve(d):_(h,s)).catch((e=>Jw(e)?e:A(e))).then((e=>{if(e){if(Jw(e,2))return v(vw(p(e.to),{state:i,force:o,replace:a}),t||h)}else e=E(h,s,!0,a,i);return b(h,s,e),e}))}function w(e,t){const n=g(e,t);return n?Promise.reject(n):Promise.resolve()}function _(e,t){let n;const[r,s,a]=function(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const i=t.matched[o];i&&(e.matched.find((e=>Iw(e,i)))?r.push(i):n.push(i));const a=e.matched[o];a&&(t.matched.find((e=>Iw(e,a)))||s.push(a))}return[n,r,s]}(e,t);n=R_(r.reverse(),"beforeRouteLeave",e,t);for(const i of r)i.leaveGuards.forEach((r=>{n.push(O_(r,e,t))}));const c=w.bind(null,e,t);return n.push(c),F_(n).then((()=>{n=[];for(const r of i.list())n.push(O_(r,e,t));return n.push(c),F_(n)})).then((()=>{n=R_(s,"beforeRouteUpdate",e,t);for(const r of s)r.updateGuards.forEach((r=>{n.push(O_(r,e,t))}));return n.push(c),F_(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&t.matched.indexOf(r)<0)if(Array.isArray(r.beforeEnter))for(const s of r.beforeEnter)n.push(O_(s,e,t));else n.push(O_(r.beforeEnter,e,t));return n.push(c),F_(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=R_(a,"beforeRouteEnter",e,t),n.push(c),F_(n)))).then((()=>{n=[];for(const r of o.list())n.push(O_(r,e,t));return n.push(c),F_(n)})).catch((e=>Jw(e,8)?e:Promise.reject(e)))}function b(e,t,n){for(const r of a.list())r(e,t,n)}function E(e,t,n,r,i){const o=g(e,t);if(o)return o;const a=t===Kw,l=yw?history.state:{};n&&(r||a?s.replace(e.fullPath,vw({scroll:a&&l&&l.scroll},i)):s.push(e.fullPath,i)),c.value=e,O(e,t,n,a),N()}let T;function I(){T=s.listen(((e,t,n)=>{let r=f(e);const i=y(r);if(i)return void v(vw(i,{replace:!0}),r).catch(_w);l=r;const o=c.value;var a,u;yw&&(a=Uw(o.fullPath,n.delta),u=Lw(),Vw.set(a,u)),_(r,o).catch((e=>Jw(e,12)?e:Jw(e,2)?(v(e.to,r).catch(_w),Promise.reject()):(n.delta&&s.go(-n.delta,!1),A(e)))).then((e=>{(e=e||E(r,o,!1))&&n.delta&&s.go(-n.delta,!1),b(r,o,e)})).catch(_w)}))}let S,k=N_(),C=N_();function A(e){return N(e),C.list().forEach((t=>t(e))),Promise.reject(e)}function N(e){S||(S=!0,I(),k.list().forEach((([t,n])=>e?n(e):t())),k.reset())}function O(t,n,r,s){const{scrollBehavior:i}=e;if(!yw||!i)return Promise.resolve();let o=!r&&function(e){const t=Vw.get(e);return Vw.delete(e),t}(Uw(t.fullPath,0))||(s||!r)&&history.state&&history.state.scroll||null;return Ct().then((()=>i(t,n,o))).then((e=>e&&Mw(e))).catch(A)}const R=e=>s.go(e);let D;const x=new Set;return{currentRoute:c,addRoute:function(e,n){let r,s;return $w(e)?(r=t.getRecordMatcher(e),s=n):s=e,t.addRoute(s,r)},removeRoute:function(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:f,options:e,push:m,replace:function(e){return m(vw(p(e),{replace:!0}))},go:R,back:()=>R(-1),forward:()=>R(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:C.add,isReady:function(){return S&&c.value!==Kw?Promise.resolve():new Promise(((e,t)=>{k.add([e,t])}))},install(e){e.component("RouterLink",x_),e.component("RouterView",U_),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{get:()=>ot(c)}),yw&&!D&&c.value===Kw&&(D=!0,m(s.location).catch((e=>{})));const t={};for(let r in Kw)t[r]=Ur((()=>c.value[r]));e.provide(pw,this),e.provide(gw,We(t)),e.provide(mw,c);let n=e.unmount;x.add(e),e.unmount=function(){x.delete(e),x.size<1&&(T(),c.value=Kw,D=!1,S=!1),n()}}}}function F_(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}export{aw as A,pm as B,Dg as C,gm as D,xg as E,zn as F,Iy as G,Ry as H,_s as I,Kt as a,$n as b,Ur as c,Mg as d,er as e,or as f,xv as g,lr as h,_i as i,cr as j,Fr as k,Rn as l,us as m,ds as n,Yn as o,$t as p,ys as q,We as r,rt as s,u as t,ot as u,ls as v,Ht as w,sv as x,V_ as y,qw as z};
