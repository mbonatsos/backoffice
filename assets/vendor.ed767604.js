function e(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t=e("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt"),n=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function r(e){if(T(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=r(A(s)?o(s):s);if(i)for(const e in i)t[e]=i[e]}return t}if(O(e))return e}const s=/;(?![^(]*\))/g,i=/:(.+)/;function o(e){const t={};return e.split(s).forEach((e=>{if(e){const n=e.split(i);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function a(e){let t="";if(A(e))t=e;else if(T(e))for(let n=0;n<e.length;n++){const r=a(e[n]);r&&(t+=r+" ")}else if(O(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function c(e,t){if(e===t)return!0;let n=k(e),r=k(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=T(e),r=T(t),n||r)return!(!n||!r)&&function(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=c(e[r],t[r]);return n}(e,t);if(n=O(e),r=O(t),n||r){if(!n||!r)return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e){const r=e.hasOwnProperty(n),s=t.hasOwnProperty(n);if(r&&!s||!r&&s||!c(e[n],t[n]))return!1}}return String(e)===String(t)}function l(e,t){return e.findIndex((e=>c(e,t)))}const u=e=>null==e?"":O(e)?JSON.stringify(e,h,2):String(e),h=(e,t)=>I(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:S(t)?{[`Set(${t.size})`]:[...t.values()]}:!O(t)||T(t)||P(t)?t:String(t),d={},f=[],p=()=>{},g=()=>!1,m=/^on[^a-z]/,y=e=>m.test(e),v=e=>e.startsWith("onUpdate:"),w=Object.assign,_=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},b=Object.prototype.hasOwnProperty,E=(e,t)=>b.call(e,t),T=Array.isArray,I=e=>"[object Map]"===x(e),S=e=>"[object Set]"===x(e),k=e=>e instanceof Date,C=e=>"function"==typeof e,A=e=>"string"==typeof e,N=e=>"symbol"==typeof e,O=e=>null!==e&&"object"==typeof e,R=e=>O(e)&&C(e.then)&&C(e.catch),D=Object.prototype.toString,x=e=>D.call(e),P=e=>"[object Object]"===x(e),L=e=>A(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,M=e(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),U=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},V=/-(\w)/g,F=U((e=>e.replace(V,((e,t)=>t?t.toUpperCase():"")))),j=/\B([A-Z])/g,B=U((e=>e.replace(j,"-$1").toLowerCase())),q=U((e=>e.charAt(0).toUpperCase()+e.slice(1))),$=U((e=>e?`on${q(e)}`:"")),K=(e,t)=>e!==t&&(e==e||t==t),H=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},z=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},G=e=>{const t=parseFloat(e);return isNaN(t)?e:t},W=new WeakMap,J=[];let Q;const X=Symbol(""),Y=Symbol("");function Z(e,t=d){(function(e){return e&&!0===e._isEffect})(e)&&(e=e.raw);const n=function(e,t){const n=function(){if(!n.active)return t.scheduler?void 0:e();if(!J.includes(n)){ne(n);try{return se.push(re),re=!0,J.push(n),Q=n,e()}finally{J.pop(),oe(),Q=J[J.length-1]}}};return n.id=te++,n.allowRecurse=!!t.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=e,n.deps=[],n.options=t,n}(e,t);return t.lazy||n(),n}function ee(e){e.active&&(ne(e),e.options.onStop&&e.options.onStop(),e.active=!1)}let te=0;function ne(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let re=!0;const se=[];function ie(){se.push(re),re=!1}function oe(){const e=se.pop();re=void 0===e||e}function ae(e,t,n){if(!re||void 0===Q)return;let r=W.get(e);r||W.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=new Set),s.has(Q)||(s.add(Q),Q.deps.push(s))}function ce(e,t,n,r,s,i){const o=W.get(e);if(!o)return;const a=new Set,c=e=>{e&&e.forEach((e=>{(e!==Q||e.allowRecurse)&&a.add(e)}))};if("clear"===t)o.forEach(c);else if("length"===n&&T(e))o.forEach(((e,t)=>{("length"===t||t>=r)&&c(e)}));else switch(void 0!==n&&c(o.get(n)),t){case"add":T(e)?L(n)&&c(o.get("length")):(c(o.get(X)),I(e)&&c(o.get(Y)));break;case"delete":T(e)||(c(o.get(X)),I(e)&&c(o.get(Y)));break;case"set":I(e)&&c(o.get(X))}a.forEach((e=>{e.options.scheduler?e.options.scheduler(e):e()}))}const le=e("__proto__,__v_isRef,__isVue"),ue=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(N)),he=me(),de=me(!1,!0),fe=me(!0),pe=me(!0,!0),ge={};function me(e=!1,t=!1){return function(n,r,s){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_raw"===r&&s===(e?t?ze:He:t?Ke:$e).get(n))return n;const i=T(n);if(!e&&i&&E(ge,r))return Reflect.get(ge,r,s);const o=Reflect.get(n,r,s);if(N(r)?ue.has(r):le(r))return o;if(e||ae(n,0,r),t)return o;if(nt(o)){return!i||!L(r)?o.value:o}return O(o)?e?Je(o):We(o):o}}["includes","indexOf","lastIndexOf"].forEach((e=>{const t=Array.prototype[e];ge[e]=function(...e){const n=et(this);for(let t=0,s=this.length;t<s;t++)ae(n,0,t+"");const r=t.apply(n,e);return-1===r||!1===r?t.apply(n,e.map(et)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{const t=Array.prototype[e];ge[e]=function(...e){ie();const n=t.apply(this,e);return oe(),n}}));function ye(e=!1){return function(t,n,r,s){let i=t[n];if(!e&&(r=et(r),i=et(i),!T(t)&&nt(i)&&!nt(r)))return i.value=r,!0;const o=T(t)&&L(n)?Number(n)<t.length:E(t,n),a=Reflect.set(t,n,r,s);return t===et(s)&&(o?K(r,i)&&ce(t,"set",n,r):ce(t,"add",n,r)),a}}const ve={get:he,set:ye(),deleteProperty:function(e,t){const n=E(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ce(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return N(t)&&ue.has(t)||ae(e,0,t),n},ownKeys:function(e){return ae(e,0,T(e)?"length":X),Reflect.ownKeys(e)}},we={get:fe,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},_e=w({},ve,{get:de,set:ye(!0)});w({},we,{get:pe});const be=e=>O(e)?We(e):e,Ee=e=>O(e)?Je(e):e,Te=e=>e,Ie=e=>Reflect.getPrototypeOf(e);function Se(e,t,n=!1,r=!1){const s=et(e=e.__v_raw),i=et(t);t!==i&&!n&&ae(s,0,t),!n&&ae(s,0,i);const{has:o}=Ie(s),a=r?Te:n?Ee:be;return o.call(s,t)?a(e.get(t)):o.call(s,i)?a(e.get(i)):void 0}function ke(e,t=!1){const n=this.__v_raw,r=et(n),s=et(e);return e!==s&&!t&&ae(r,0,e),!t&&ae(r,0,s),e===s?n.has(e):n.has(e)||n.has(s)}function Ce(e,t=!1){return e=e.__v_raw,!t&&ae(et(e),0,X),Reflect.get(e,"size",e)}function Ae(e){e=et(e);const t=et(this);return Ie(t).has.call(t,e)||(t.add(e),ce(t,"add",e,e)),this}function Ne(e,t){t=et(t);const n=et(this),{has:r,get:s}=Ie(n);let i=r.call(n,e);i||(e=et(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?K(t,o)&&ce(n,"set",e,t):ce(n,"add",e,t),this}function Oe(e){const t=et(this),{has:n,get:r}=Ie(t);let s=n.call(t,e);s||(e=et(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&ce(t,"delete",e,void 0),i}function Re(){const e=et(this),t=0!==e.size,n=e.clear();return t&&ce(e,"clear",void 0,void 0),n}function De(e,t){return function(n,r){const s=this,i=s.__v_raw,o=et(i),a=t?Te:e?Ee:be;return!e&&ae(o,0,X),i.forEach(((e,t)=>n.call(r,a(e),a(t),s)))}}function xe(e,t,n){return function(...r){const s=this.__v_raw,i=et(s),o=I(i),a="entries"===e||e===Symbol.iterator&&o,c="keys"===e&&o,l=s[e](...r),u=n?Te:t?Ee:be;return!t&&ae(i,0,c?Y:X),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Pe(e){return function(...t){return"delete"!==e&&this}}const Le={get(e){return Se(this,e)},get size(){return Ce(this)},has:ke,add:Ae,set:Ne,delete:Oe,clear:Re,forEach:De(!1,!1)},Me={get(e){return Se(this,e,!1,!0)},get size(){return Ce(this)},has:ke,add:Ae,set:Ne,delete:Oe,clear:Re,forEach:De(!1,!0)},Ue={get(e){return Se(this,e,!0)},get size(){return Ce(this,!0)},has(e){return ke.call(this,e,!0)},add:Pe("add"),set:Pe("set"),delete:Pe("delete"),clear:Pe("clear"),forEach:De(!0,!1)},Ve={get(e){return Se(this,e,!0,!0)},get size(){return Ce(this,!0)},has(e){return ke.call(this,e,!0)},add:Pe("add"),set:Pe("set"),delete:Pe("delete"),clear:Pe("clear"),forEach:De(!0,!0)};function Fe(e,t){const n=t?e?Ve:Me:e?Ue:Le;return(t,r,s)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(E(n,r)&&r in t?n:t,r,s)}["keys","values","entries",Symbol.iterator].forEach((e=>{Le[e]=xe(e,!1,!1),Ue[e]=xe(e,!0,!1),Me[e]=xe(e,!1,!0),Ve[e]=xe(e,!0,!0)}));const je={get:Fe(!1,!1)},Be={get:Fe(!1,!0)},qe={get:Fe(!0,!1)},$e=new WeakMap,Ke=new WeakMap,He=new WeakMap,ze=new WeakMap;function Ge(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>x(e).slice(8,-1))(e))}function We(e){return e&&e.__v_isReadonly?e:Qe(e,!1,ve,je,$e)}function Je(e){return Qe(e,!0,we,qe,He)}function Qe(e,t,n,r,s){if(!O(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Ge(e);if(0===o)return e;const a=new Proxy(e,2===o?r:n);return s.set(e,a),a}function Xe(e){return Ye(e)?Xe(e.__v_raw):!(!e||!e.__v_isReactive)}function Ye(e){return!(!e||!e.__v_isReadonly)}function Ze(e){return Xe(e)||Ye(e)}function et(e){return e&&et(e.__v_raw)||e}const tt=e=>O(e)?We(e):e;function nt(e){return Boolean(e&&!0===e.__v_isRef)}class rt{constructor(e,t=!1){this._rawValue=e,this._shallow=t,this.__v_isRef=!0,this._value=t?e:tt(e)}get value(){return ae(et(this),0,"value"),this._value}set value(e){K(et(e),this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:tt(e),ce(et(this),"set","value",e))}}function st(e,t=!1){return nt(e)?e:new rt(e,t)}function it(e){return nt(e)?e.value:e}const ot={get:(e,t,n)=>it(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return nt(s)&&!nt(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function at(e){return Xe(e)?e:new Proxy(e,ot)}class ct{constructor(e,t){this._object=e,this._key=t,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(e){this._object[this._key]=e}}class lt{constructor(e,t,n){this._setter=t,this._dirty=!0,this.__v_isRef=!0,this.effect=Z(e,{lazy:!0,scheduler:()=>{this._dirty||(this._dirty=!0,ce(et(this),"set","value"))}}),this.__v_isReadonly=n}get value(){const e=et(this);return e._dirty&&(e._value=this.effect(),e._dirty=!1),ae(e,0,"value"),e._value}set value(e){this._setter(e)}}function ut(e,t,n,r){let s;try{s=r?e(...r):e()}catch(i){dt(i,t,n)}return s}function ht(e,t,n,r){if(C(e)){const s=ut(e,t,n,r);return s&&R(s)&&s.catch((e=>{dt(e,t,n)})),s}const s=[];for(let i=0;i<e.length;i++)s.push(ht(e[i],t,n,r));return s}function dt(e,t,n,r=!0){t&&t.vnode;if(t){let r=t.parent;const s=t.proxy,i=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,s,i))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void ut(o,null,10,[e,s,i])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let ft=!1,pt=!1;const gt=[];let mt=0;const yt=[];let vt=null,wt=0;const _t=[];let bt=null,Et=0;const Tt=Promise.resolve();let It=null,St=null;function kt(e){const t=It||Tt;return e?t.then(this?e.bind(this):e):t}function Ct(e){if(!(gt.length&&gt.includes(e,ft&&e.allowRecurse?mt+1:mt)||e===St)){const t=function(e){let t=mt+1,n=gt.length;const r=Dt(e);for(;t<n;){const e=t+n>>>1;Dt(gt[e])<r?t=e+1:n=e}return t}(e);t>-1?gt.splice(t,0,e):gt.push(e),At()}}function At(){ft||pt||(pt=!0,It=Tt.then(xt))}function Nt(e,t,n,r){T(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),At()}function Ot(e,t=null){if(yt.length){for(St=t,vt=[...new Set(yt)],yt.length=0,wt=0;wt<vt.length;wt++)vt[wt]();vt=null,wt=0,St=null,Ot(e,t)}}function Rt(e){if(_t.length){const e=[...new Set(_t)];if(_t.length=0,bt)return void bt.push(...e);for(bt=e,bt.sort(((e,t)=>Dt(e)-Dt(t))),Et=0;Et<bt.length;Et++)bt[Et]();bt=null,Et=0}}const Dt=e=>null==e.id?1/0:e.id;function xt(e){pt=!1,ft=!0,Ot(e),gt.sort(((e,t)=>Dt(e)-Dt(t)));try{for(mt=0;mt<gt.length;mt++){const e=gt[mt];e&&ut(e,null,14)}}finally{mt=0,gt.length=0,Rt(),ft=!1,It=null,(gt.length||_t.length)&&xt(e)}}function Pt(e,t,...n){const r=e.vnode.props||d;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const e=`${"modelValue"===o?"model":o}Modifiers`,{number:t,trim:i}=r[e]||d;i?s=n.map((e=>e.trim())):t&&(s=n.map(G))}let a,c=r[a=$(t)]||r[a=$(F(t))];!c&&i&&(c=r[a=$(B(t))]),c&&ht(c,e,6,s);const l=r[a+"Once"];if(l){if(e.emitted){if(e.emitted[a])return}else(e.emitted={})[a]=!0;ht(l,e,6,s)}}function Lt(e,t,n=!1){if(!t.deopt&&void 0!==e.__emits)return e.__emits;const r=e.emits;let s={},i=!1;if(!C(e)){const r=e=>{const n=Lt(e,t,!0);n&&(i=!0,w(s,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return r||i?(T(r)?r.forEach((e=>s[e]=null)):w(s,r),e.__emits=s):e.__emits=null}function Mt(e,t){return!(!e||!y(t))&&(t=t.slice(2).replace(/Once$/,""),E(e,t[0].toLowerCase()+t.slice(1))||E(e,B(t))||E(e,t))}let Ut=0;const Vt=e=>Ut+=e;let Ft=null,jt=null;function Bt(e){const t=Ft;return Ft=e,jt=e&&e.type.__scopeId||null,t}function qt(e){jt=e}function $t(){jt=null}function Kt(e,t=Ft){if(!t)return e;const n=(...n)=>{Ut||Qn(!0);const r=Bt(t),s=e(...n);return Bt(r),Ut||Xn(),s};return n._c=!0,n}function Ht(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:p}=e;let g;const m=Bt(e);try{let e;if(4&n.shapeFlag){const t=s||r;g=cr(u.call(t,t,h,i,f,d,p)),e=c}else{const n=t;0,g=cr(n.length>1?n(i,{attrs:c,slots:a,emit:l}):n(i,null)),e=t.props?c:Gt(c)}let m=g;if(!1!==t.inheritAttrs&&e){const t=Object.keys(e),{shapeFlag:n}=m;t.length&&(1&n||6&n)&&(o&&t.some(v)&&(e=Wt(e,o)),m=ir(m,e))}n.dirs&&(m.dirs=m.dirs?m.dirs.concat(n.dirs):n.dirs),n.transition&&(m.transition=n.transition),g=m}catch(y){Wn.length=0,dt(y,e,1),g=sr(zn)}return Bt(m),g}function zt(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(!Zn(r))return;if(r.type!==zn||"v-if"===r.children){if(t)return;t=r}}return t}const Gt=e=>{let t;for(const n in e)("class"===n||"style"===n||y(n))&&((t||(t={}))[n]=e[n]);return t},Wt=(e,t)=>{const n={};for(const r in e)v(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Jt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Mt(n,i))return!0}return!1}function Qt(e){if(C(e)&&(e=e()),T(e)){e=zt(e)}return cr(e)}function Xt(e,t,n,r=!1){const s={},i={};z(i,tr,1),e.propsDefaults=Object.create(null),Yt(e,t,s,i),n?e.props=r?s:Qe(s,!1,_e,Be,Ke):e.type.props?e.props=s:e.props=i,e.attrs=i}function Yt(e,t,n,r){const[s,i]=e.propsOptions;if(t)for(const o in t){const i=t[o];if(M(o))continue;let a;s&&E(s,a=F(o))?n[a]=i:Mt(e.emitsOptions,o)||(r[o]=i)}if(i){const t=et(n);for(let r=0;r<i.length;r++){const o=i[r];n[o]=Zt(s,t,o,t[o],e)}}}function Zt(e,t,n,r,s){const i=e[n];if(null!=i){const e=E(i,"default");if(e&&void 0===r){const e=i.default;if(i.type!==Function&&C(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(Ar(s),r=i[n]=e(t),Ar(null))}else r=e}i[0]&&(E(t,n)||e?!i[1]||""!==r&&r!==B(n)||(r=!0):r=!1)}return r}function en(e,t,n=!1){if(!t.deopt&&e.__props)return e.__props;const r=e.props,s={},i=[];let o=!1;if(!C(e)){const r=e=>{o=!0;const[n,r]=en(e,t,!0);w(s,n),r&&i.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!r&&!o)return e.__props=f;if(T(r))for(let a=0;a<r.length;a++){const e=F(r[a]);tn(e)&&(s[e]=d)}else if(r)for(const a in r){const e=F(a);if(tn(e)){const t=r[a],n=s[e]=T(t)||C(t)?{type:t}:t;if(n){const t=sn(Boolean,n.type),r=sn(String,n.type);n[0]=t>-1,n[1]=r<0||t<r,(t>-1||E(n,"default"))&&i.push(e)}}}return e.__props=[s,i]}function tn(e){return"$"!==e[0]}function nn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function rn(e,t){return nn(e)===nn(t)}function sn(e,t){return T(t)?t.findIndex((t=>rn(t,e))):C(t)&&rn(t,e)?0:-1}function on(e,t,n=Cr,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;ie(),Ar(n);const s=ht(t,n,e,r);return Ar(null),oe(),s});return r?s.unshift(i):s.push(i),i}}const an=e=>(t,n=Cr)=>!Or&&on(e,t,n),cn=an("bm"),ln=an("m"),un=an("bu"),hn=an("u"),dn=an("bum"),fn=an("um"),pn=an("rtg"),gn=an("rtc"),mn={};function yn(e,t,n){return vn(e,t,n)}function vn(e,t,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=d,a=Cr){let c,l,u=!1;if(nt(e)?(c=()=>e.value,u=!!e._shallow):Xe(e)?(c=()=>e,r=!0):c=T(e)?()=>e.map((e=>nt(e)?e.value:Xe(e)?_n(e):C(e)?ut(e,a,2,[a&&a.proxy]):void 0)):C(e)?t?()=>ut(e,a,2,[a&&a.proxy]):()=>{if(!a||!a.isUnmounted)return l&&l(),ht(e,a,3,[h])}:p,t&&r){const e=c;c=()=>_n(e())}let h=e=>{l=y.options.onStop=()=>{ut(e,a,4)}},f=T(e)?[]:mn;const g=()=>{if(y.active)if(t){const e=y();(r||u||K(e,f))&&(l&&l(),ht(t,a,3,[e,f===mn?void 0:f,h]),f=e)}else y()};let m;g.allowRecurse=!!t,m="sync"===s?g:"post"===s?()=>Mn(g,a&&a.suspense):()=>{!a||a.isMounted?function(e){Nt(e,vt,yt,wt)}(g):g()};const y=Z(c,{lazy:!0,onTrack:i,onTrigger:o,scheduler:m});return xr(y,a),t?n?g():f=y():"post"===s?Mn(y,a&&a.suspense):y(),()=>{ee(y),a&&_(a.effects,y)}}function wn(e,t,n){const r=this.proxy;return vn(A(e)?()=>r[e]:e.bind(r),t.bind(r),n,this)}function _n(e,t=new Set){if(!O(e)||t.has(e))return e;if(t.add(e),nt(e))_n(e.value,t);else if(T(e))for(let n=0;n<e.length;n++)_n(e[n],t);else if(S(e)||I(e))e.forEach((e=>{_n(e,t)}));else for(const n in e)_n(e[n],t);return e}const bn=e=>e.type.__isKeepAlive;function En(e,t,n=Cr){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}e()});if(on(t,r,n),n){let e=n.parent;for(;e&&e.parent;)bn(e.parent.vnode)&&Tn(r,t,n,e),e=e.parent}}function Tn(e,t,n,r){const s=on(t,e,r,!0);fn((()=>{_(r[t],s)}),n)}const In=e=>"_"===e[0]||"$stable"===e,Sn=e=>T(e)?e.map(cr):[cr(e)],kn=(e,t,n)=>Kt((e=>Sn(t(e))),n),Cn=(e,t)=>{const n=e._ctx;for(const r in e){if(In(r))continue;const s=e[r];if(C(s))t[r]=kn(0,s,n);else if(null!=s){const e=Sn(s);t[r]=()=>e}}},An=(e,t)=>{const n=Sn(t);e.slots.default=()=>n};function Nn(e,t){if(null===Ft)return e;const n=Ft.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,i,o,a=d]=t[s];C(e)&&(e={mounted:e,updated:e}),r.push({dir:e,instance:n,value:i,oldValue:void 0,arg:o,modifiers:a})}return e}function On(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);const c=a.dir[r];c&&ht(c,n,8,[e.el,a,e,t])}}function Rn(){return{app:null,config:{isNativeTag:g,performance:!1,globalProperties:{},optionMergeStrategies:{},isCustomElement:g,errorHandler:void 0,warnHandler:void 0},mixins:[],components:{},directives:{},provides:Object.create(null)}}let Dn=0;function xn(e,t){return function(n,r=null){null==r||O(r)||(r=null);const s=Rn(),i=new Set;let o=!1;const a=s.app={_uid:Dn++,_component:n,_props:r,_container:null,_context:s,version:Vr,get config(){return s.config},set config(e){},use:(e,...t)=>(i.has(e)||(e&&C(e.install)?(i.add(e),e.install(a,...t)):C(e)&&(i.add(e),e(a,...t))),a),mixin:e=>(s.mixins.includes(e)||(s.mixins.push(e),(e.props||e.emits)&&(s.deopt=!0)),a),component:(e,t)=>t?(s.components[e]=t,a):s.components[e],directive:(e,t)=>t?(s.directives[e]=t,a):s.directives[e],mount(i,c,l){if(!o){const u=sr(n,r);return u.appContext=s,c&&t?t(u,i):e(u,i,l),o=!0,a._container=i,i.__vue_app__=a,u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(s.provides[e]=t,a)};return a}}function Pn(e){return C(e)?{setup:e,name:e.name}:e}const Ln={scheduler:Ct,allowRecurse:!0},Mn=function(e,t){t&&t.pendingBranch?T(e)?t.effects.push(...e):t.effects.push(e):Nt(e,bt,_t,Et)},Un=(e,t,n,r)=>{if(T(e))return void e.forEach(((e,s)=>Un(e,t&&(T(t)?t[s]:t),n,r)));let s;if(r){if(r.type.__asyncLoader)return;s=4&r.shapeFlag?r.component.exposed||r.component.proxy:r.el}else s=null;const{i:i,r:o}=e,a=t&&t.r,c=i.refs===d?i.refs={}:i.refs,l=i.setupState;if(null!=a&&a!==o&&(A(a)?(c[a]=null,E(l,a)&&(l[a]=null)):nt(a)&&(a.value=null)),A(o)){const e=()=>{c[o]=s,E(l,o)&&(l[o]=s)};s?(e.id=-1,Mn(e,n)):e()}else if(nt(o)){const e=()=>{o.value=s};s?(e.id=-1,Mn(e,n)):e()}else C(o)&&ut(o,i,12,[s,c])};function Vn(e){return function(e,t){const{insert:n,remove:r,patchProp:s,forcePatchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:g,setScopeId:m=p,cloneNode:y,insertStaticContent:v}=e,_=(e,t,n,r=null,s=null,i=null,o=!1,a=null,c=!1)=>{e&&!er(e,t)&&(r=re(e),Q(e,s,i,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=t;switch(l){case Hn:b(e,t,n,r);break;case zn:T(e,t,n,r);break;case Gn:null==e&&I(t,n,r,o);break;case Kn:L(e,t,n,r,s,i,o,a,c);break;default:1&h?C(e,t,n,r,s,i,o,a,c):6&h?U(e,t,n,r,s,i,o,a,c):(64&h||128&h)&&l.process(e,t,n,r,s,i,o,a,c,ae)}null!=u&&s&&Un(u,e&&e.ref,i,t)},b=(e,t,r,s)=>{if(null==e)n(t.el=a(t.children),r,s);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},T=(e,t,r,s)=>{null==e?n(t.el=c(t.children||""),r,s):t.el=e.el},I=(e,t,n,r)=>{[e.el,e.anchor]=v(e.children,t,n,r)},S=({el:e,anchor:t},r,s)=>{let i;for(;e&&e!==t;)i=g(e),n(e,r,s),e=i;n(t,r,s)},k=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=g(e),r(e),e=n;r(t)},C=(e,t,n,r,s,i,o,a,c)=>{o=o||"svg"===t.type,null==e?A(t,n,r,s,i,o,a,c):D(e,t,s,i,o,a,c)},A=(e,t,r,i,a,c,l,h)=>{let d,f;const{type:p,props:g,shapeFlag:m,transition:v,patchFlag:w,dirs:_}=e;if(e.el&&void 0!==y&&-1===w)d=e.el=y(e.el);else{if(d=e.el=o(e.type,c,g&&g.is,g),8&m?u(d,e.children):16&m&&O(e.children,d,null,i,a,c&&"foreignObject"!==p,l,h||!!e.dynamicChildren),_&&On(e,null,i,"created"),g){for(const t in g)M(t)||s(d,t,null,g[t],c,e.children,i,a,ne);(f=g.onVnodeBeforeMount)&&Fn(f,i,e)}N(d,e,e.scopeId,l,i)}_&&On(e,null,i,"beforeMount");const b=(!a||a&&!a.pendingBranch)&&v&&!v.persisted;b&&v.beforeEnter(d),n(d,t,r),((f=g&&g.onVnodeMounted)||b||_)&&Mn((()=>{f&&Fn(f,i,e),b&&v.enter(d),_&&On(e,null,i,"mounted")}),a)},N=(e,t,n,r,s)=>{if(n&&m(e,n),r)for(let i=0;i<r.length;i++)m(e,r[i]);if(s){if(t===s.subTree){const t=s.vnode;N(e,t,t.scopeId,t.slotScopeIds,s.parent)}}},O=(e,t,n,r,s,i,o,a,c=0)=>{for(let l=c;l<e.length;l++){const c=e[l]=o?lr(e[l]):cr(e[l]);_(null,c,t,n,r,s,i,o,a)}},D=(e,t,n,r,o,a,c)=>{const l=t.el=e.el;let{patchFlag:h,dynamicChildren:f,dirs:p}=t;h|=16&e.patchFlag;const g=e.props||d,m=t.props||d;let y;if((y=m.onVnodeBeforeUpdate)&&Fn(y,n,t,e),p&&On(t,e,n,"beforeUpdate"),h>0){if(16&h)P(l,t,g,m,n,r,o);else if(2&h&&g.class!==m.class&&s(l,"class",null,m.class,o),4&h&&s(l,"style",g.style,m.style,o),8&h){const a=t.dynamicProps;for(let t=0;t<a.length;t++){const c=a[t],u=g[c],h=m[c];(h!==u||i&&i(l,c))&&s(l,c,u,h,o,e.children,n,r,ne)}}1&h&&e.children!==t.children&&u(l,t.children)}else c||null!=f||P(l,t,g,m,n,r,o);const v=o&&"foreignObject"!==t.type;f?x(e.dynamicChildren,f,l,n,r,v,a):c||K(e,t,l,null,n,r,v,a,!1),((y=m.onVnodeUpdated)||p)&&Mn((()=>{y&&Fn(y,n,t,e),p&&On(t,e,n,"updated")}),r)},x=(e,t,n,r,s,i,o)=>{for(let a=0;a<t.length;a++){const c=e[a],l=t[a],u=c.type===Kn||!er(c,l)||6&c.shapeFlag||64&c.shapeFlag?h(c.el):n;_(c,l,u,null,r,s,i,o,!0)}},P=(e,t,n,r,o,a,c)=>{if(n!==r){for(const l in r){if(M(l))continue;const u=r[l],h=n[l];(u!==h||i&&i(e,l))&&s(e,l,h,u,c,t.children,o,a,ne)}if(n!==d)for(const i in n)M(i)||i in r||s(e,i,n[i],null,c,t.children,o,a,ne)}},L=(e,t,r,s,i,o,c,l,u)=>{const h=t.el=e?e.el:a(""),d=t.anchor=e?e.anchor:a("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;f>0&&(u=!0),g&&(l=l?l.concat(g):g),null==e?(n(h,r,s),n(d,r,s),O(t.children,r,d,i,o,c,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(x(e.dynamicChildren,p,r,i,o,c,l),(null!=t.key||i&&t===i.subTree)&&jn(e,t,!0)):K(e,t,r,d,i,o,c,l,u)},U=(e,t,n,r,s,i,o,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?s.ctx.activate(t,n,r,o,c):V(t,n,r,s,i,o,c):j(e,t,c)},V=(e,t,n,r,s,i,o)=>{const a=e.component=function(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Sr,i={uid:kr++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,update:null,render:null,proxy:null,exposed:null,withProxy:null,effects:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:en(r,s),emitsOptions:Lt(r,s),emit:null,emitted:null,propsDefaults:d,ctx:d,data:d,props:d,attrs:d,slots:d,refs:d,setupState:d,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Pt.bind(null,i),i}(e,r,s);if(bn(e)&&(a.ctx.renderer=ae),function(e,t=!1){Or=t;const{props:n,children:r}=e.vnode,s=Nr(e);Xt(e,n,s,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=t,z(t,"_",n)):Cn(t,e.slots={})}else e.slots={},t&&An(e,t);z(e.slots,tr,1)})(e,r);const i=s?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Tr);const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=at(t)};return{attrs:e.attrs,slots:e.slots,emit:e.emit,expose:t}}(e):null;Cr=e,ie();const s=ut(r,e,0,[e.props,n]);if(oe(),Cr=null,R(s)){if(t)return s.then((t=>{Rr(e,t)})).catch((t=>{dt(t,e,0)}));e.asyncDep=s}else Rr(e,s)}else Dr(e)}(e,t):void 0;Or=!1}(a),a.asyncDep){if(s&&s.registerDep(a,q),!e.el){const e=a.subTree=sr(zn);T(null,e,t,n)}}else q(a,e,t,n,s,i,o)},j=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||Jt(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?Jt(r,o,l):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!Mt(l,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void $(r,t,n);r.next=t,function(e){const t=gt.indexOf(e);t>mt&&gt.splice(t,1)}(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},q=(e,t,n,r,s,i,o)=>{e.update=Z((function(){if(e.isMounted){let t,{next:n,bu:r,u:a,parent:c,vnode:l}=e,u=n;n?(n.el=l.el,$(e,n,o)):n=l,r&&H(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Fn(t,c,n,l);const d=Ht(e),f=e.subTree;e.subTree=d,_(f,d,h(f.el),re(f),e,s,i),n.el=d.el,null===u&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,d.el),a&&Mn(a,s),(t=n.props&&n.props.onVnodeUpdated)&&Mn((()=>{Fn(t,c,n,l)}),s)}else{let o;const{el:a,props:c}=t,{bm:l,m:u,parent:h}=e;l&&H(l),(o=c&&c.onVnodeBeforeMount)&&Fn(o,h,t);const d=e.subTree=Ht(e);if(a&&ue?ue(t.el,d,e,s,null):(_(null,d,n,r,e,s,i),t.el=d.el),u&&Mn(u,s),o=c&&c.onVnodeMounted){const e=t;Mn((()=>{Fn(o,h,e)}),s)}const{a:f}=e;f&&256&t.shapeFlag&&Mn(f,s),e.isMounted=!0,t=n=r=null}}),Ln)},$=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=et(s),[c]=e.propsOptions;if(!(r||o>0)||16&o){let r;Yt(e,t,s,i);for(const i in a)t&&(E(t,i)||(r=B(i))!==i&&E(t,r))||(c?!n||void 0===n[i]&&void 0===n[r]||(s[i]=Zt(c,t||d,i,void 0,e)):delete s[i]);if(i!==a)for(const e in i)t&&E(t,e)||delete i[e]}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){const o=n[r],l=t[o];if(c)if(E(i,o))i[o]=l;else{const t=F(o);s[t]=Zt(c,a,t,l,e)}else i[o]=l}}ce(e,"set","$attrs")}(e,t.props,r,n),((e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=d;if(32&r.shapeFlag){const e=t._;e?n&&1===e?i=!1:(w(s,t),n||1!==e||delete s._):(i=!t.$stable,Cn(t,s)),o=t}else t&&(An(e,t),o={default:1});if(i)for(const a in s)In(a)||a in o||delete s[a]})(e,t.children,n),ie(),Ot(void 0,e.update),oe()},K=(e,t,n,r,s,i,o,a,c=!1)=>{const l=e&&e.children,h=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void W(l,d,n,r,s,i,o,a,c);if(256&f)return void G(l,d,n,r,s,i,o,a,c)}8&p?(16&h&&ne(l,s,i),d!==l&&u(n,d)):16&h?16&p?W(l,d,n,r,s,i,o,a,c):ne(l,s,i,!0):(8&h&&u(n,""),16&p&&O(d,n,r,s,i,o,a,c))},G=(e,t,n,r,s,i,o,a,c)=>{t=t||f;const l=(e=e||f).length,u=t.length,h=Math.min(l,u);let d;for(d=0;d<h;d++){const r=t[d]=c?lr(t[d]):cr(t[d]);_(e[d],r,n,null,s,i,o,a,c)}l>u?ne(e,s,i,!0,!1,h):O(t,n,r,s,i,o,a,c,h)},W=(e,t,n,r,s,i,o,a,c)=>{let l=0;const u=t.length;let h=e.length-1,d=u-1;for(;l<=h&&l<=d;){const r=e[l],u=t[l]=c?lr(t[l]):cr(t[l]);if(!er(r,u))break;_(r,u,n,null,s,i,o,a,c),l++}for(;l<=h&&l<=d;){const r=e[h],l=t[d]=c?lr(t[d]):cr(t[d]);if(!er(r,l))break;_(r,l,n,null,s,i,o,a,c),h--,d--}if(l>h){if(l<=d){const e=d+1,h=e<u?t[e].el:r;for(;l<=d;)_(null,t[l]=c?lr(t[l]):cr(t[l]),n,h,s,i,o,a,c),l++}}else if(l>d)for(;l<=h;)Q(e[l],s,i,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const e=t[l]=c?lr(t[l]):cr(t[l]);null!=e.key&&m.set(e.key,l)}let y,v=0;const w=d-g+1;let b=!1,E=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=h;l++){const r=e[l];if(v>=w){Q(r,s,i,!0);continue}let u;if(null!=r.key)u=m.get(r.key);else for(y=g;y<=d;y++)if(0===T[y-g]&&er(r,t[y])){u=y;break}void 0===u?Q(r,s,i,!0):(T[u-g]=l+1,u>=E?E=u:b=!0,_(r,t[u],n,null,s,i,o,a,c),v++)}const I=b?function(e){const t=e.slice(),n=[0];let r,s,i,o,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(s=n[n.length-1],e[s]<c){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=(i+o)/2|0,e[n[a]]<c?i=a+1:o=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];for(;i-- >0;)n[i]=o,o=t[o];return n}(T):f;for(y=I.length-1,l=w-1;l>=0;l--){const e=g+l,h=t[e],d=e+1<u?t[e+1].el:r;0===T[l]?_(null,h,n,d,s,i,o,a,c):b&&(y<0||l!==I[y]?J(h,n,d,2):y--)}}},J=(e,t,r,s,i=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=e;if(6&u)return void J(e.component.subTree,t,r,s);if(128&u)return void e.suspense.move(t,r,s);if(64&u)return void a.move(e,t,r,ae);if(a===Kn){n(o,t,r);for(let e=0;e<l.length;e++)J(l[e],t,r,s);return void n(e.anchor,t,r)}if(a===Gn)return void S(e,t,r);if(2!==s&&1&u&&c)if(0===s)c.beforeEnter(o),n(o,t,r),Mn((()=>c.enter(o)),i);else{const{leave:e,delayLeave:s,afterLeave:i}=c,a=()=>n(o,t,r),l=()=>{e(o,(()=>{a(),i&&i()}))};s?s(o,a,l):l()}else n(o,t,r)},Q=(e,t,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Un(a,null,n,null),256&u)return void t.ctx.deactivate(e);const f=1&u&&d;let p;if((p=o&&o.onVnodeBeforeUnmount)&&Fn(p,t,e),6&u)te(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&On(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,s,ae,r):l&&(i!==Kn||h>0&&64&h)?ne(l,t,n,!1,!0):(i===Kn&&(128&h||256&h)||!s&&16&u)&&ne(c,t,n),r&&X(e)}((p=o&&o.onVnodeUnmounted)||f)&&Mn((()=>{p&&Fn(p,t,e),f&&On(e,null,t,"unmounted")}),n)},X=e=>{const{type:t,el:n,anchor:s,transition:i}=e;if(t===Kn)return void Y(n,s);if(t===Gn)return void k(e);const o=()=>{r(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,s=()=>t(n,o);r?r(e.el,o,s):s()}else o()},Y=(e,t)=>{let n;for(;e!==t;)n=g(e),r(e),e=n;r(t)},te=(e,t,n)=>{const{bum:r,effects:s,update:i,subTree:o,um:a}=e;if(r&&H(r),s)for(let c=0;c<s.length;c++)ee(s[c]);i&&(ee(i),Q(o,e,t,n)),a&&Mn(a,t),Mn((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},ne=(e,t,n,r=!1,s=!1,i=0)=>{for(let o=i;o<e.length;o++)Q(e[o],t,n,r,s)},re=e=>6&e.shapeFlag?re(e.component.subTree):128&e.shapeFlag?e.suspense.next():g(e.anchor||e.el),se=(e,t,n)=>{null==e?t._vnode&&Q(t._vnode,null,null,!0):_(t._vnode||null,e,t,null,null,null,n),Rt(),t._vnode=e},ae={p:_,um:Q,m:J,r:X,mt:V,mc:O,pc:K,pbc:x,n:re,o:e};let le,ue;t&&([le,ue]=t(ae));return{render:se,hydrate:le,createApp:xn(se,le)}}(e)}function Fn(e,t,n,r=null){ht(e,t,7,[n,r])}function jn(e,t,n=!1){const r=e.children,s=t.children;if(T(r)&&T(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=lr(s[i]),t.el=e.el),n||jn(e,t))}}function Bn(e,t){return function(e,t,n=!0,r=!1){const s=Ft||Cr;if(s){const n=s.type;if("components"===e){const e=Pr(n);if(e&&(e===t||e===F(t)||e===q(F(t))))return n}const i=$n(s[e]||n[e],t)||$n(s.appContext[e],t);return!i&&r?n:i}}("components",e,!0,t)||e}const qn=Symbol();function $n(e,t){return e&&(e[t]||e[F(t)]||e[q(F(t))])}const Kn=Symbol(void 0),Hn=Symbol(void 0),zn=Symbol(void 0),Gn=Symbol(void 0),Wn=[];let Jn=null;function Qn(e=!1){Wn.push(Jn=e?null:[])}function Xn(){Wn.pop(),Jn=Wn[Wn.length-1]||null}function Yn(e,t,n,r,s){const i=sr(e,t,n,r,s,!0);return i.dynamicChildren=Jn||f,Xn(),Jn&&Jn.push(i),i}function Zn(e){return!!e&&!0===e.__v_isVNode}function er(e,t){return e.type===t.type&&e.key===t.key}const tr="__vInternal",nr=({key:e})=>null!=e?e:null,rr=({ref:e})=>null!=e?A(e)||nt(e)||C(e)?{i:Ft,r:e}:e:null,sr=function(e,t=null,n=null,s=0,i=null,o=!1){e&&e!==qn||(e=zn);if(Zn(e)){const r=ir(e,t,!0);return n&&ur(r,n),r}c=e,C(c)&&"__vccOpts"in c&&(e=e.__vccOpts);var c;if(t){(Ze(t)||tr in t)&&(t=w({},t));let{class:e,style:n}=t;e&&!A(e)&&(t.class=a(e)),O(n)&&(Ze(n)&&!T(n)&&(n=w({},n)),t.style=r(n))}const l=A(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:O(e)?4:C(e)?2:0,u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&nr(t),ref:t&&rr(t),scopeId:jt,slotScopeIds:null,children:null,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null};if(ur(u,n),128&l){const{content:e,fallback:t}=function(e){const{shapeFlag:t,children:n}=e;let r,s;return 32&t?(r=Qt(n.default),s=Qt(n.fallback)):(r=Qt(n),s=cr(null)),{content:r,fallback:s}}(u);u.ssContent=e,u.ssFallback=t}!o&&Jn&&(s>0||6&l)&&32!==s&&Jn.push(u);return u};function ir(e,t,n=!1){const{props:s,ref:i,patchFlag:o,children:c}=e,l=t?function(...e){const t=w({},e[0]);for(let n=1;n<e.length;n++){const s=e[n];for(const e in s)if("class"===e)t.class!==s.class&&(t.class=a([t.class,s.class]));else if("style"===e)t.style=r([t.style,s.style]);else if(y(e)){const n=t[e],r=s[e];n!==r&&(t[e]=n?[].concat(n,s[e]):r)}else""!==e&&(t[e]=s[e])}return t}(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&nr(l),ref:t&&t.ref?n&&i?T(i)?i.concat(rr(t)):[i,rr(t)]:rr(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Kn?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ir(e.ssContent),ssFallback:e.ssFallback&&ir(e.ssFallback),el:e.el,anchor:e.anchor}}function or(e=" ",t=0){return sr(Hn,null,e,t)}function ar(e="",t=!1){return t?(Qn(),Yn(zn,null,e)):sr(zn,null,e)}function cr(e){return null==e||"boolean"==typeof e?sr(zn):T(e)?sr(Kn,null,e):"object"==typeof e?null===e.el?e:ir(e):sr(Hn,null,String(e))}function lr(e){return null===e.el?e:ir(e)}function ur(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(T(t))n=16;else if("object"==typeof t){if(1&r||64&r){const n=t.default;return void(n&&(n._c&&Vt(1),ur(e,n()),n._c&&Vt(-1)))}{n=32;const r=t._;r||tr in t?3===r&&Ft&&(1024&Ft.vnode.patchFlag?(t._=2,e.patchFlag|=1024):t._=1):t._ctx=Ft}}else C(t)?(t={default:t,_ctx:Ft},n=32):(t=String(t),64&r?(n=16,t=[or(t)]):n=8);e.children=t,e.shapeFlag|=n}function hr(e,t){if(Cr){let n=Cr.provides;const r=Cr.parent&&Cr.parent.provides;r===n&&(n=Cr.provides=Object.create(r)),n[e]=t}else;}function dr(e,t,n=!1){const r=Cr||Ft;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&C(t)?t():t}}let fr=!0;function pr(e,t,n=[],r=[],s=[],i=!1){const{mixins:o,extends:a,data:c,computed:l,methods:u,watch:h,provide:f,inject:g,components:m,directives:y,beforeMount:v,mounted:_,beforeUpdate:b,updated:E,activated:I,deactivated:S,beforeDestroy:k,beforeUnmount:A,destroyed:N,unmounted:R,render:D,renderTracked:x,renderTriggered:P,errorCaptured:L,expose:M}=t,U=e.proxy,V=e.ctx,F=e.appContext.mixins;if(i&&D&&e.render===p&&(e.render=D),i||(fr=!1,gr("beforeCreate","bc",t,e,F),fr=!0,yr(e,F,n,r,s)),a&&pr(e,a,n,r,s,!0),o&&yr(e,o,n,r,s),g)if(T(g))for(let d=0;d<g.length;d++){const e=g[d];V[e]=dr(e)}else for(const d in g){const e=g[d];O(e)?V[d]=dr(e.from||d,e.default,!0):V[d]=dr(e)}if(u)for(const d in u){const e=u[d];C(e)&&(V[d]=e.bind(U))}if(i?c&&n.push(c):(n.length&&n.forEach((t=>vr(e,t,U))),c&&vr(e,c,U)),l)for(const d in l){const e=l[d],t=Lr({get:C(e)?e.bind(U,U):C(e.get)?e.get.bind(U,U):p,set:!C(e)&&C(e.set)?e.set.bind(U):p});Object.defineProperty(V,d,{enumerable:!0,configurable:!0,get:()=>t.value,set:e=>t.value=e})}var j;if(h&&r.push(h),!i&&r.length&&r.forEach((e=>{for(const t in e)wr(e[t],V,U,t)})),f&&s.push(f),!i&&s.length&&s.forEach((e=>{const t=C(e)?e.call(U):e;Reflect.ownKeys(t).forEach((e=>{hr(e,t[e])}))})),i&&(m&&w(e.components||(e.components=w({},e.type.components)),m),y&&w(e.directives||(e.directives=w({},e.type.directives)),y)),i||gr("created","c",t,e,F),v&&cn(v.bind(U)),_&&ln(_.bind(U)),b&&un(b.bind(U)),E&&hn(E.bind(U)),I&&En(I.bind(U),"a",j),S&&function(e,t){En(e,"da",t)}(S.bind(U)),L&&((e,t=Cr)=>{on("ec",e,t)})(L.bind(U)),x&&gn(x.bind(U)),P&&pn(P.bind(U)),A&&dn(A.bind(U)),R&&fn(R.bind(U)),T(M)&&!i)if(M.length){const t=e.exposed||(e.exposed=at({}));M.forEach((e=>{t[e]=function(e,t){return nt(e[t])?e[t]:new ct(e,t)}(U,e)}))}else e.exposed||(e.exposed=d)}function gr(e,t,n,r,s){for(let i=0;i<s.length;i++)mr(e,t,s[i],r);mr(e,t,n,r)}function mr(e,t,n,r){const{extends:s,mixins:i}=n,o=n[e];if(s&&mr(e,t,s,r),i)for(let a=0;a<i.length;a++)mr(e,t,i[a],r);o&&ht(o.bind(r.proxy),r,t)}function yr(e,t,n,r,s){for(let i=0;i<t.length;i++)pr(e,t[i],n,r,s,!0)}function vr(e,t,n){fr=!1;const r=t.call(n,n);fr=!0,O(r)&&(e.data===d?e.data=We(r):w(e.data,r))}function wr(e,t,n,r){const s=r.includes(".")?function(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}(n,r):()=>n[r];if(A(e)){const n=t[e];C(n)&&yn(s,n)}else if(C(e))yn(s,e.bind(n));else if(O(e))if(T(e))e.forEach((e=>wr(e,t,n,r)));else{const r=C(e.handler)?e.handler.bind(n):t[e.handler];C(r)&&yn(s,r,e)}}function _r(e,t,n){const r=n.appContext.config.optionMergeStrategies,{mixins:s,extends:i}=t;i&&_r(e,i,n),s&&s.forEach((t=>_r(e,t,n)));for(const o in t)r&&E(r,o)?e[o]=r[o](e[o],t[o],n.proxy,o):e[o]=t[o]}const br=e=>e?Nr(e)?e.exposed?e.exposed:e.proxy:br(e.parent):null,Er=w(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>br(e.parent),$root:e=>br(e.root),$emit:e=>e.emit,$options:e=>function(e){const t=e.type,{__merged:n,mixins:r,extends:s}=t;if(n)return n;const i=e.appContext.mixins;if(!i.length&&!r&&!s)return t;const o={};return i.forEach((t=>_r(o,t,e))),_r(o,t,e),t.__merged=o}(e),$forceUpdate:e=>()=>Ct(e.update),$nextTick:e=>kt.bind(e.proxy),$watch:e=>wn.bind(e)}),Tr={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=e;if("__v_skip"===t)return!0;let l;if("$"!==t[0]){const a=o[t];if(void 0!==a)switch(a){case 0:return r[t];case 1:return s[t];case 3:return n[t];case 2:return i[t]}else{if(r!==d&&E(r,t))return o[t]=0,r[t];if(s!==d&&E(s,t))return o[t]=1,s[t];if((l=e.propsOptions[0])&&E(l,t))return o[t]=2,i[t];if(n!==d&&E(n,t))return o[t]=3,n[t];fr&&(o[t]=4)}}const u=Er[t];let h,f;return u?("$attrs"===t&&ae(e,0,t),u(e)):(h=a.__cssModules)&&(h=h[t])?h:n!==d&&E(n,t)?(o[t]=3,n[t]):(f=c.config.globalProperties,E(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;if(s!==d&&E(s,t))s[t]=n;else if(r!==d&&E(r,t))r[t]=n;else if(E(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return void 0!==n[o]||e!==d&&E(e,o)||t!==d&&E(t,o)||(a=i[0])&&E(a,o)||E(r,o)||E(Er,o)||E(s.config.globalProperties,o)}},Ir=w({},Tr,{get(e,t){if(t!==Symbol.unscopables)return Tr.get(e,t,e)},has:(e,n)=>"_"!==n[0]&&!t(n)}),Sr=Rn();let kr=0;let Cr=null;const Ar=e=>{Cr=e};function Nr(e){return 4&e.vnode.shapeFlag}let Or=!1;function Rr(e,t,n){C(t)?e.render=t:O(t)&&(e.setupState=at(t)),Dr(e)}function Dr(e,t){const n=e.type;e.render||(e.render=n.render||p,e.render._rc&&(e.withProxy=new Proxy(e.ctx,Ir))),Cr=e,ie(),pr(e,n),oe(),Cr=null}function xr(e,t=Cr){t&&(t.effects||(t.effects=[])).push(e)}function Pr(e){return C(e)&&e.displayName||e.name}function Lr(e){const t=function(e){let t,n;return C(e)?(t=e,n=p):(t=e.get,n=e.set),new lt(t,n,C(e)||!e.set)}(e);return xr(t.effect),t}function Mr(e,t,n){const r=arguments.length;return 2===r?O(t)&&!T(t)?Zn(t)?sr(e,null,[t]):sr(e,t):sr(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Zn(n)&&(n=[n]),sr(e,t,n))}function Ur(e,t){let n;if(T(e)||A(e)){n=new Array(e.length);for(let r=0,s=e.length;r<s;r++)n[r]=t(e[r],r)}else if("number"==typeof e){n=new Array(e);for(let r=0;r<e;r++)n[r]=t(r+1,r)}else if(O(e))if(e[Symbol.iterator])n=Array.from(e,t);else{const r=Object.keys(e);n=new Array(r.length);for(let s=0,i=r.length;s<i;s++){const i=r[s];n[s]=t(e[i],i,s)}}else n=[];return n}const Vr="3.0.11",Fr="http://www.w3.org/2000/svg",jr="undefined"!=typeof document?document:null;let Br,qr;const $r={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?jr.createElementNS(Fr,e):jr.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:e=>jr.createTextNode(e),createComment:e=>jr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>jr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const s=r?qr||(qr=jr.createElementNS(Fr,"svg")):Br||(Br=jr.createElement("div"));s.innerHTML=e;const i=s.firstChild;let o=i,a=o;for(;o;)a=o,$r.insert(o,t,n),o=s.firstChild;return[i,a]}};const Kr=/\s*!important$/;function Hr(e,t,n){if(T(n))n.forEach((n=>Hr(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=Gr[t];if(n)return n;let r=F(t);if("filter"!==r&&r in e)return Gr[t]=r;r=q(r);for(let s=0;s<zr.length;s++){const n=zr[s]+r;if(n in e)return Gr[t]=n}return t}(e,t);Kr.test(n)?e.setProperty(B(r),n.replace(Kr,""),"important"):e[r]=n}}const zr=["Webkit","Moz","ms"],Gr={};const Wr="http://www.w3.org/1999/xlink";let Jr=Date.now,Qr=!1;if("undefined"!=typeof window){Jr()>document.createEvent("Event").timeStamp&&(Jr=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Qr=!!(e&&Number(e[1])<=53)}let Xr=0;const Yr=Promise.resolve(),Zr=()=>{Xr=0};function es(e,t,n,r){e.addEventListener(t,n,r)}function ts(e,t,n,r,s=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(ns.test(e)){let n;for(t={};n=e.match(ns);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[B(e.slice(2)),t]}(t);if(r){es(e,n,i[t]=function(e,t){const n=e=>{const r=e.timeStamp||Jr();(Qr||r>=n.attached-1)&&ht(function(e,t){if(T(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=(()=>Xr||(Yr.then(Zr),Xr=Jr()))(),n}(r,s),a)}else o&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),i[t]=void 0)}}const ns=/(?:Once|Passive|Capture)$/;const rs=/^on[a-z]/;const ss=e=>{const t=e.props["onUpdate:modelValue"];return T(t)?e=>H(t,e):t};function is(e){e.target.composing=!0}function os(e){const t=e.target;t.composing&&(t.composing=!1,function(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}(t,"input"))}const as={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e._assign=ss(s);const i=r||"number"===e.type;es(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n?r=r.trim():i&&(r=G(r)),e._assign(r)})),n&&es(e,"change",(()=>{e.value=e.value.trim()})),t||(es(e,"compositionstart",is),es(e,"compositionend",os),es(e,"change",os))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{trim:n,number:r}},s){if(e._assign=ss(s),e.composing)return;if(document.activeElement===e){if(n&&e.value.trim()===t)return;if((r||"number"===e.type)&&G(e.value)===t)return}const i=null==t?"":t;e.value!==i&&(e.value=i)}},cs={created(e,t,n){e._assign=ss(n),es(e,"change",(()=>{const t=e._modelValue,n=ds(e),r=e.checked,s=e._assign;if(T(t)){const e=l(t,n),i=-1!==e;if(r&&!i)s(t.concat(n));else if(!r&&i){const n=[...t];n.splice(e,1),s(n)}}else if(S(t)){const e=new Set(t);r?e.add(n):e.delete(n),s(e)}else s(fs(e,r))}))},mounted:ls,beforeUpdate(e,t,n){e._assign=ss(n),ls(e,t,n)}};function ls(e,{value:t,oldValue:n},r){e._modelValue=t,T(t)?e.checked=l(t,r.props.value)>-1:S(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=c(t,fs(e,!0)))}const us={created(e,{value:t,modifiers:{number:n}},r){const s=S(t);es(e,"change",(()=>{const t=Array.prototype.filter.call(e.options,(e=>e.selected)).map((e=>n?G(ds(e)):ds(e)));e._assign(e.multiple?s?new Set(t):t:t[0])})),e._assign=ss(r)},mounted(e,{value:t}){hs(e,t)},beforeUpdate(e,t,n){e._assign=ss(n)},updated(e,{value:t}){hs(e,t)}};function hs(e,t){const n=e.multiple;if(!n||T(t)||S(t)){for(let r=0,s=e.options.length;r<s;r++){const s=e.options[r],i=ds(s);if(n)T(t)?s.selected=l(t,i)>-1:s.selected=t.has(i);else if(c(ds(s),t))return void(e.selectedIndex=r)}n||(e.selectedIndex=-1)}}function ds(e){return"_value"in e?e._value:e.value}function fs(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const ps={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},gs=(e,t)=>n=>{if(!("key"in n))return;const r=B(n.key);return t.some((e=>e===r||ps[e]===r))?e(n):void 0},ms={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):ys(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),ys(e,!0),r.enter(e)):r.leave(e,(()=>{ys(e,!1)})):ys(e,t))},beforeUnmount(e,{value:t}){ys(e,t)}};function ys(e,t){e.style.display=t?e._vod:"none"}const vs=w({patchProp:(e,t,r,s,i=!1,o,a,c,l)=>{switch(t){case"class":!function(e,t,n){if(null==t&&(t=""),n)e.setAttribute("class",t);else{const n=e._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),e.className=t}}(e,s,i);break;case"style":!function(e,t,n){const r=e.style;if(n)if(A(n)){if(t!==n){const t=r.display;r.cssText=n,"_vod"in e&&(r.display=t)}}else{for(const e in n)Hr(r,e,n[e]);if(t&&!A(t))for(const e in t)null==n[e]&&Hr(r,e,"")}else e.removeAttribute("style")}(e,r,s);break;default:y(t)?v(t)||ts(e,t,0,s,a):function(e,t,n,r){if(r)return"innerHTML"===t||!!(t in e&&rs.test(t)&&C(n));if("spellcheck"===t||"draggable"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(rs.test(t)&&A(n))return!1;return t in e}(e,t,s,i)?function(e,t,n,r,s,i,o){if("innerHTML"===t||"textContent"===t)return r&&o(r,s,i),void(e[t]=null==n?"":n);if("value"!==t||"PROGRESS"===e.tagName){if(""===n||null==n){const r=typeof e[t];if(""===n&&"boolean"===r)return void(e[t]=!0);if(null==n&&"string"===r)return e[t]="",void e.removeAttribute(t);if("number"===r)return e[t]=0,void e.removeAttribute(t)}try{e[t]=n}catch(a){}}else{e._value=n;const t=null==n?"":n;e.value!==t&&(e.value=t)}}(e,t,s,o,a,c,l):("true-value"===t?e._trueValue=s:"false-value"===t&&(e._falseValue=s),function(e,t,r,s){if(s&&t.startsWith("xlink:"))null==r?e.removeAttributeNS(Wr,t.slice(6,t.length)):e.setAttributeNS(Wr,t,r);else{const s=n(t);null==r||s&&!1===r?e.removeAttribute(t):e.setAttribute(t,s?"":r)}}(e,t,s,i))}},forcePatchProp:(e,t)=>"value"===t},$r);let ws;const _s=(...e)=>{const t=(ws||(ws=Vn(vs))).createApp(...e),{mount:n}=t;return t.mount=e=>{const r=function(e){if(A(e)){return document.querySelector(e)}return e}
/*!
  * vue-router v4.0.6
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */(e);if(!r)return;const s=t._component;C(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},t};const bs="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,Es=e=>bs?Symbol(e):"_vr_"+e,Ts=Es("rvlm"),Is=Es("rvd"),Ss=Es("r"),ks=Es("rl"),Cs=Es("rvl"),As="undefined"!=typeof window;const Ns=Object.assign;function Os(e,t){const n={};for(const r in t){const s=t[r];n[r]=Array.isArray(s)?s.map(e):e(s)}return n}let Rs=()=>{};const Ds=/\/$/;function xs(e,t,n="/"){let r,s={},i="",o="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),i=t.slice(a+1,c>-1?c:t.length),s=e(i)),c>-1&&(r=r||t.slice(0,c),o=t.slice(c,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s,i,o=n.length-1;for(s=0;s<r.length;s++)if(i=r[s],1!==o&&"."!==i){if(".."!==i)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Ps(e,t){return!t||e.toLowerCase().indexOf(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ls(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ms(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let n in e)if(!Us(e[n],t[n]))return!1;return!0}function Us(e,t){return Array.isArray(e)?Vs(e,t):Array.isArray(t)?Vs(t,e):e===t}function Vs(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var Fs,js,Bs,qs;function $s(e){if(!e)if(As){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(Ds,"")}(js=Fs||(Fs={})).pop="pop",js.push="push",(qs=Bs||(Bs={})).back="back",qs.forward="forward",qs.unknown="";const Ks=/^[^#]+#/;function Hs(e,t){return e.replace(Ks,"#")+t}const zs=()=>({left:window.pageXOffset,top:window.pageYOffset});function Gs(e){let t;if("el"in e){let n=e.el;const r="string"==typeof n&&n.startsWith("#"),s="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function Ws(e,t){return(history.state?history.state.position-t:-1)+e}const Js=new Map;function Qs(e,t){const{pathname:n,search:r,hash:s}=t;if(e.indexOf("#")>-1){let e=s.slice(1);return"/"!==e[0]&&(e="/"+e),Ps(e,"")}return Ps(n,e)+r+s}function Xs(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?zs():null}}function Ys(e){const{history:t,location:n}=window;let r={value:Qs(e,n)},s={value:t.state};function i(r,i,o){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:location.protocol+"//"+location.host+e+r;try{t[o?"replaceState":"pushState"](i,"",c),s.value=i}catch(l){console.error(l),n[o?"replace":"assign"](c)}}return s.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:s,push:function(e,n){const o=Ns({},s.value,t.state,{forward:e,scroll:zs()});i(o.current,o,!0),i(e,Ns({},Xs(r.value,e,null),{position:o.position+1},n),!1),r.value=e},replace:function(e,n){i(e,Ns({},t.state,Xs(s.value.back,e,s.value.forward,!0),n,{position:s.value.position}),!0),r.value=e}}}function Zs(e){const t=Ys(e=$s(e)),n=function(e,t,n,r){let s=[],i=[],o=null;const a=({state:i})=>{const a=Qs(e,location),c=n.value,l=t.value;let u=0;if(i){if(n.value=a,t.value=i,o&&o===c)return void(o=null);u=l?i.position-l.position:0}else r(a);s.forEach((e=>{e(n.value,c,{delta:u,type:Fs.pop,direction:u?u>0?Bs.forward:Bs.back:Bs.unknown})}))};function c(){const{history:e}=window;e.state&&e.replaceState(Ns({},e.state,{scroll:zs()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c),{pauseListeners:function(){o=n.value},listen:function(e){s.push(e);const t=()=>{const t=s.indexOf(e);t>-1&&s.splice(t,1)};return i.push(t),t},destroy:function(){for(const e of i)e();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}}}(e,t.state,t.location,t.replace);const r=Ns({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:Hs.bind(null,e)},t,n);return Object.defineProperty(r,"location",{get:()=>t.location.value}),Object.defineProperty(r,"state",{get:()=>t.state.value}),r}function ei(e){return"string"==typeof e||"symbol"==typeof e}const ti={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ni=Es("nf");var ri,si;function ii(e,t){return Ns(new Error,{type:e,[ni]:!0},t)}function oi(e,t){return e instanceof Error&&ni in e&&(null==t||!!(e.type&t))}(si=ri||(ri={}))[si.aborted=4]="aborted",si[si.cancelled=8]="cancelled",si[si.duplicated=16]="duplicated";const ai={sensitive:!1,strict:!1,start:!0,end:!0},ci=/[.+*?^${}()[\]/\\]/g;function li(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function ui(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const e=li(r[n],s[n]);if(e)return e;n++}return s.length-r.length}const hi={type:0,value:""},di=/[a-zA-Z0-9_]/;function fi(e,t,n){const r=function(e,t){const n=Ns({},ai,t);let r=[],s=n.start?"^":"";const i=[];for(const c of e){const e=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let t=0;t<c.length;t++){const r=c[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(s+="/"),s+=r.value.replace(ci,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:u}=r;i.push({name:e,repeatable:n,optional:l});const h=u||"[^/]+?";if("[^/]+?"!==h){o+=10;try{new RegExp(`(${h})`)}catch(a){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+a.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=l&&c.length<2?`(?:/${d})`:"/"+d),l&&(d+="?"),s+=d,o+=20,l&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");return{re:o,score:r,keys:i,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",s=i[r-1];n[s.name]=e&&s.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const s of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of s)if(0===e.type)n+=e.value;else if(1===e.type){const{value:i,repeatable:o,optional:a}=e,c=i in t?t[i]:"";if(Array.isArray(c)&&!o)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const l=Array.isArray(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${i}"`);s.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[hi]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a,c=0,l="",u="";function h(){l&&(0===n?i.push({type:0,value:l}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),l="")}function d(){l+=a}for(;c<e.length;)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:di.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}(e.path),n),s=Ns(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function pi(e,t){const n=[],r=new Map;function s(e,n,r){let a=!r,c=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:gi(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);c.aliasOf=r&&r.record;const l=vi(t,e),u=[c];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(Ns({},c,{components:r?r.record.components:c.components,path:e,aliasOf:r?r.record:c}))}let h,d;for(const t of u){let{path:u}=t;if(n&&"/"!==u[0]){let e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=fi(t,n,l),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),a&&e.name&&!mi(h)&&i(e.name)),"children"in c){let e=c.children;for(let t=0;t<e.length;t++)s(e[t],h,r&&r.children[t])}r=r||h,o(h)}return d?()=>{i(d)}:Rs}function i(e){if(ei(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(i),t.alias.forEach(i))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(i),e.alias.forEach(i))}}function o(e){let t=0;for(;t<n.length&&ui(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!mi(e)&&r.set(e.record.name,e)}return t=vi({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:function(e,t){let s,i,o,a={};if("name"in e&&e.name){if(s=r.get(e.name),!s)throw ii(1,{location:e});o=s.record.name,a=Ns(function(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}(t.params,s.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),i=s.stringify(a)}else if("path"in e)i=e.path,s=n.find((e=>e.re.test(i))),s&&(a=s.parse(i),o=s.record.name);else{if(s=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!s)throw ii(1,{location:e,currentLocation:t});o=s.record.name,a=Ns({},t.params,e.params),i=s.stringify(a)}const c=[];let l=s;for(;l;)c.unshift(l.record),l=l.parent;return{name:o,path:i,params:a,matched:c,meta:yi(c)}},removeRoute:i,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function gi(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(let r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function mi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function yi(e){return e.reduce(((e,t)=>Ns(e,t.meta)),{})}function vi(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}const wi=/#/g,_i=/&/g,bi=/\//g,Ei=/=/g,Ti=/\?/g,Ii=/\+/g,Si=/%5B/g,ki=/%5D/g,Ci=/%5E/g,Ai=/%60/g,Ni=/%7B/g,Oi=/%7C/g,Ri=/%7D/g,Di=/%20/g;function xi(e){return encodeURI(""+e).replace(Oi,"|").replace(Si,"[").replace(ki,"]")}function Pi(e){return xi(e).replace(Ii,"%2B").replace(Di,"+").replace(wi,"%23").replace(_i,"%26").replace(Ai,"`").replace(Ni,"{").replace(Ri,"}").replace(Ci,"^")}function Li(e){return function(e){return xi(e).replace(wi,"%23").replace(Ti,"%3F")}(e).replace(bi,"%2F")}function Mi(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Ui(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(Ii," ");let s=e.indexOf("="),i=Mi(s<0?e:e.slice(0,s)),o=s<0?null:Mi(e.slice(s+1));if(i in t){let e=t[i];Array.isArray(e)||(e=t[i]=[e]),e.push(o)}else t[i]=o}return t}function Vi(e){let t="";for(let n in e){t.length&&(t+="&");const r=e[n];if(n=Pi(n).replace(Ei,"%3D"),null==r){void 0!==r&&(t+=n);continue}let s=Array.isArray(r)?r.map((e=>e&&Pi(e))):[r&&Pi(r)];for(let e=0;e<s.length;e++)t+=(e?"&":"")+n,null!=s[e]&&(t+="="+s[e])}return t}function Fi(e){const t={};for(let n in e){let r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function ji(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function Bi(e,t,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise(((o,a)=>{const c=e=>{var c;!1===e?a(ii(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(c=e)||c&&"object"==typeof c?a(ii(2,{from:t,to:e})):(i&&r.enterCallbacks[s]===i&&"function"==typeof e&&i.push(e),o())},l=e.call(r&&r.instances[s],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch((e=>a(e)))}))}function qi(e,t,n,r){const s=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if("object"==typeof(i=a)||"displayName"in i||"props"in i||"__vccOpts"in i){const i=(a.__vccOpts||a)[t];i&&s.push(Bi(i,n,r,o,e))}else{let i=a();i=i.catch(console.error),s.push((()=>i.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const i=(a=s).__esModule||bs&&"Module"===a[Symbol.toStringTag]?s.default:s;var a;o.components[e]=i;const c=(i.__vccOpts||i)[t];return c&&Bi(c,n,r,o,e)()}))))}}var i;return s}function $i(e){const t=dr(Ss),n=dr(ks),r=Lr((()=>t.resolve(it(e.to)))),s=Lr((()=>{let{matched:e}=r.value,{length:t}=e;const s=e[t-1];let i=n.matched;if(!s||!i.length)return-1;let o=i.findIndex(Ls.bind(null,s));if(o>-1)return o;let a=Hi(e[t-2]);return t>1&&Hi(s)===a&&i[i.length-1].path!==a?i.findIndex(Ls.bind(null,e[t-2])):o})),i=Lr((()=>s.value>-1&&function(e,t){for(let n in t){let r=t[n],s=e[n];if("string"==typeof r){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some(((e,t)=>e!==s[t])))return!1}return!0}(n.params,r.value.params))),o=Lr((()=>s.value>-1&&s.value===n.matched.length-1&&Ms(n.params,r.value.params)));return{route:r,href:Lr((()=>r.value.href)),isActive:i,isExactActive:o,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[it(e.replace)?"replace":"push"](it(e.to)):Promise.resolve()}}}const Ki=Pn({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},setup(e,{slots:t}){const n=We($i(e)),{options:r}=dr(Ss),s=Lr((()=>({[zi(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[zi(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:Mr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},r)}}});function Hi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const zi=(e,t,n)=>null!=e?e:null!=t?t:n;function Gi(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Wi=Pn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=dr(Cs),s=Lr((()=>e.route||r.value)),i=dr(Is,0),o=Lr((()=>s.value.matched[i]));hr(Is,i+1),hr(Ts,o),hr(Cs,s);const a=st(c);var c;return yn((()=>[a.value,o.value,e.name]),(([e,t,n],[r,s,i])=>{t&&(t.instances[n]=e,s&&s!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=s.leaveGuards),t.updateGuards.size||(t.updateGuards=s.updateGuards))),!e||!t||s&&Ls(t,s)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=s.value,i=o.value,c=i&&i.components[e.name],l=e.name;if(!c)return Gi(n.default,{Component:c,route:r});const u=i.props[e.name],h=u?!0===u?r.params:"function"==typeof u?u(r):u:null,d=Mr(c,Ns({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(i.instances[l]=null)},ref:a}));return Gi(n.default,{Component:d,route:r})||d}}});function Ji(e){const t=pi(e.routes,e);let n=e.parseQuery||Ui,r=e.stringifyQuery||Vi,s=e.history;const i=ji(),o=ji(),a=ji(),c=st(ti,!0);let l=ti;As&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Os.bind(null,(e=>""+e)),h=Os.bind(null,Li),d=Os.bind(null,Mi);function f(e,i){if(i=Ns({},i||c.value),"string"==typeof e){let r=xs(n,e,i.path),o=t.resolve({path:r.path},i),a=s.createHref(r.fullPath);return Ns(r,o,{params:d(o.params),hash:Mi(r.hash),redirectedFrom:void 0,href:a})}let o;"path"in e?o=Ns({},e,{path:xs(n,e.path,i.path).path}):(o=Ns({},e,{params:h(e.params)}),i.params=h(i.params));let a=t.resolve(o,i);const l=e.hash||"";a.params=u(d(a.params));const f=function(e,t){let n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(r,Ns({},e,{hash:(p=l,xi(p).replace(Ni,"{").replace(Ri,"}").replace(Ci,"^")),path:a.path}));var p;let g=s.createHref(f);return Ns({fullPath:f,hash:l,query:r===Vi?Fi(e.query):e.query},a,{redirectedFrom:void 0,href:g})}function p(e){return"string"==typeof e?xs(n,e,c.value.path):Ns({},e)}function g(e,t){if(l!==e)return ii(8,{from:t,to:e})}function m(e){return v(e)}function y(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.indexOf("?")>-1||r.indexOf("#")>-1?r=p(r):{path:r}),Ns({query:e.query,hash:e.hash,params:e.params},r)}}function v(e,t){const n=l=f(e),s=c.value,i=e.state,o=e.force,a=!0===e.replace,u=y(n);if(u)return v(Ns(p(u),{state:i,force:o,replace:a}),t||n);const h=n;let d;return h.redirectedFrom=t,!o&&function(e,t,n){let r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ls(t.matched[r],n.matched[s])&&Ms(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(r,s,n)&&(d=ii(16,{to:h,from:s}),O(s,s,!0,!1)),(d?Promise.resolve(d):_(h,s)).catch((e=>oi(e)?e:A(e))).then((e=>{if(e){if(oi(e,2))return v(Ns(p(e.to),{state:i,force:o,replace:a}),t||h)}else e=E(h,s,!0,a,i);return b(h,s,e),e}))}function w(e,t){const n=g(e,t);return n?Promise.reject(n):Promise.resolve()}function _(e,t){let n;const[r,s,a]=function(e,t){const n=[],r=[],s=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const i=t.matched[o];i&&(e.matched.find((e=>Ls(e,i)))?r.push(i):n.push(i));const a=e.matched[o];a&&(t.matched.find((e=>Ls(e,a)))||s.push(a))}return[n,r,s]}
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
 */(e,t);n=qi(r.reverse(),"beforeRouteLeave",e,t);for(const i of r)i.leaveGuards.forEach((r=>{n.push(Bi(r,e,t))}));const c=w.bind(null,e,t);return n.push(c),Qi(n).then((()=>{n=[];for(const r of i.list())n.push(Bi(r,e,t));return n.push(c),Qi(n)})).then((()=>{n=qi(s,"beforeRouteUpdate",e,t);for(const r of s)r.updateGuards.forEach((r=>{n.push(Bi(r,e,t))}));return n.push(c),Qi(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&t.matched.indexOf(r)<0)if(Array.isArray(r.beforeEnter))for(const s of r.beforeEnter)n.push(Bi(s,e,t));else n.push(Bi(r.beforeEnter,e,t));return n.push(c),Qi(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=qi(a,"beforeRouteEnter",e,t),n.push(c),Qi(n)))).then((()=>{n=[];for(const r of o.list())n.push(Bi(r,e,t));return n.push(c),Qi(n)})).catch((e=>oi(e,8)?e:Promise.reject(e)))}function b(e,t,n){for(const r of a.list())r(e,t,n)}function E(e,t,n,r,i){const o=g(e,t);if(o)return o;const a=t===ti,l=As?history.state:{};n&&(r||a?s.replace(e.fullPath,Ns({scroll:a&&l&&l.scroll},i)):s.push(e.fullPath,i)),c.value=e,O(e,t,n,a),N()}let T;function I(){T=s.listen(((e,t,n)=>{let r=f(e);const i=y(r);if(i)return void v(Ns(i,{replace:!0}),r).catch(Rs);l=r;const o=c.value;var a,u;As&&(a=Ws(o.fullPath,n.delta),u=zs(),Js.set(a,u)),_(r,o).catch((e=>oi(e,12)?e:oi(e,2)?(v(e.to,r).catch(Rs),Promise.reject()):(n.delta&&s.go(-n.delta,!1),A(e)))).then((e=>{(e=e||E(r,o,!1))&&n.delta&&s.go(-n.delta,!1),b(r,o,e)})).catch(Rs)}))}let S,k=ji(),C=ji();function A(e){return N(e),C.list().forEach((t=>t(e))),Promise.reject(e)}function N(e){S||(S=!0,I(),k.list().forEach((([t,n])=>e?n(e):t())),k.reset())}function O(t,n,r,s){const{scrollBehavior:i}=e;if(!As||!i)return Promise.resolve();let o=!r&&function(e){const t=Js.get(e);return Js.delete(e),t}(Ws(t.fullPath,0))||(s||!r)&&history.state&&history.state.scroll||null;return kt().then((()=>i(t,n,o))).then((e=>e&&Gs(e))).catch(A)}const R=e=>s.go(e);let D;const x=new Set;return{currentRoute:c,addRoute:function(e,n){let r,s;return ei(e)?(r=t.getRecordMatcher(e),s=n):s=e,t.addRoute(s,r)},removeRoute:function(e){let n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:f,options:e,push:m,replace:function(e){return m(Ns(p(e),{replace:!0}))},go:R,back:()=>R(-1),forward:()=>R(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:C.add,isReady:function(){return S&&c.value!==ti?Promise.resolve():new Promise(((e,t)=>{k.add([e,t])}))},install(e){e.component("RouterLink",Ki),e.component("RouterView",Wi),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{get:()=>it(c)}),As&&!D&&c.value===ti&&(D=!0,m(s.location).catch((e=>{})));const t={};for(let r in ti)t[r]=Lr((()=>c.value[r]));e.provide(Ss,this),e.provide(ks,We(t)),e.provide(Cs,c);let n=e.unmount;x.add(e),e.unmount=function(){x.delete(e),x.size<1&&(T(),c.value=ti,D=!1,S=!1),n()}}}}function Qi(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}const Xi=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++r)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},Yi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const t=e[s],i=s+1<e.length,o=i?e[s+1]:0,a=s+2<e.length,c=a?e[s+2]:0,l=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),r.push(n[l],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Xi(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const t=n[e.charAt(s++)],i=s<e.length?n[e.charAt(s)]:0;++s;const o=s<e.length?n[e.charAt(s)]:64;++s;const a=s<e.length?n[e.charAt(s)]:64;if(++s,null==t||null==i||null==o||null==a)throw Error();const c=t<<2|i>>4;if(r.push(c),64!==o){const e=i<<4&240|o>>2;if(r.push(e),64!==a){const e=o<<6&192|a;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Zi=function(e){const t=Xi(e);return Yi.encodeByteArray(t,!0)};
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
class eo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
 */function to(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function no(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(to())}function ro(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function so(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function io(){const e=to();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}class oo extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,oo.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ao.prototype.create)}}class ao{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],i=s?function(e,t){return e.replace(co,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new oo(r,o,n)}}const co=/\{\$([^}]+)}/g;function lo(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const n=e[s],i=t[s];if(uo(n)&&uo(i)){if(!lo(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function uo(e){return null!==e&&"object"==typeof e}
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
 */function ho(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class fo{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=po),void 0===r.error&&(r.error=po),void 0===r.complete&&(r.complete=po);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),s}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function po(){}
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
 */function go(e){return e&&e._delegate?e._delegate:e}class mo{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
class yo{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new eo;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,i]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(s)&&i.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(s){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class vo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new yo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */var wo,_o;(_o=wo||(wo={}))[_o.DEBUG=0]="DEBUG",_o[_o.VERBOSE=1]="VERBOSE",_o[_o.INFO=2]="INFO",_o[_o.WARN=3]="WARN",_o[_o.ERROR=4]="ERROR",_o[_o.SILENT=5]="SILENT";const bo={debug:wo.DEBUG,verbose:wo.VERBOSE,info:wo.INFO,warn:wo.WARN,error:wo.ERROR,silent:wo.SILENT},Eo=wo.INFO,To={[wo.DEBUG]:"log",[wo.VERBOSE]:"log",[wo.INFO]:"info",[wo.WARN]:"warn",[wo.ERROR]:"error"},Io=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),s=To[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${r}]  ${e.name}:`,...n)};class So{constructor(e){this.name=e,this._logLevel=Eo,this._logHandler=Io,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in wo))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?bo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,wo.DEBUG,...e),this._logHandler(this,wo.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,wo.VERBOSE,...e),this._logHandler(this,wo.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,wo.INFO,...e),this._logHandler(this,wo.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,wo.WARN,...e),this._logHandler(this,wo.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,wo.ERROR,...e),this._logHandler(this,wo.ERROR,...e)}}function ko(e){return Array.prototype.slice.call(e)}function Co(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function Ao(e,t,n){var r,s=new Promise((function(s,i){Co(r=e[t].apply(e,n)).then(s,i)}));return s.request=r,s}function No(e,t,n){var r=Ao(e,t,n);return r.then((function(e){if(e)return new Lo(e,r.request)}))}function Oo(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function Ro(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return Ao(this[t],r,arguments)})}))}function Do(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function xo(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return No(this[t],r,arguments)})}))}function Po(e){this._index=e}function Lo(e,t){this._cursor=e,this._request=t}function Mo(e){this._store=e}function Uo(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function Vo(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new Uo(n)}function Fo(e){this._db=e}Oo(Po,"_index",["name","keyPath","multiEntry","unique"]),Ro(Po,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),xo(Po,"_index",IDBIndex,["openCursor","openKeyCursor"]),Oo(Lo,"_cursor",["direction","key","primaryKey","value"]),Ro(Lo,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(Lo.prototype[e]=function(){var t=this,n=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,n),Co(t._request).then((function(e){if(e)return new Lo(e,t._request)}))}))})})),Mo.prototype.createIndex=function(){return new Po(this._store.createIndex.apply(this._store,arguments))},Mo.prototype.index=function(){return new Po(this._store.index.apply(this._store,arguments))},Oo(Mo,"_store",["name","keyPath","indexNames","autoIncrement"]),Ro(Mo,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),xo(Mo,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),Do(Mo,"_store",IDBObjectStore,["deleteIndex"]),Uo.prototype.objectStore=function(){return new Mo(this._tx.objectStore.apply(this._tx,arguments))},Oo(Uo,"_tx",["objectStoreNames","mode"]),Do(Uo,"_tx",IDBTransaction,["abort"]),Vo.prototype.createObjectStore=function(){return new Mo(this._db.createObjectStore.apply(this._db,arguments))},Oo(Vo,"_db",["name","version","objectStoreNames"]),Do(Vo,"_db",IDBDatabase,["deleteObjectStore","close"]),Fo.prototype.transaction=function(){return new Uo(this._db.transaction.apply(this._db,arguments))},Oo(Fo,"_db",["name","version","objectStoreNames"]),Do(Fo,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[Mo,Po].forEach((function(t){e in t.prototype&&(t.prototype[e.replace("open","iterate")]=function(){var t=ko(arguments),n=t[t.length-1],r=this._store||this._index,s=r[e].apply(r,t.slice(0,-1));s.onsuccess=function(){n(s.result)}})}))})),[Po,Mo].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(s){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():s(r)):s(r)}))}))})}));
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
class jo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Bo="@firebase/app",qo=new So("@firebase/app"),$o={[Bo]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ko=new Map,Ho=new Map;function zo(e,t){try{e.container.addComponent(t)}catch(n){qo.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Go(e){const t=e.name;if(Ho.has(t))return qo.debug(`There were multiple attempts to register component ${t}.`),!1;Ho.set(t,e);for(const n of Ko.values())zo(n,e);return!0}function Wo(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
 */const Jo=new ao("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
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
class Qo{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new mo("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jo.create("app-deleted",{appName:this._name})}}
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
 */function Xo(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw Jo.create("bad-app-name",{appName:String(r)});const s=Ko.get(r);if(s){if(lo(e,s.options)&&lo(n,s.config))return s;throw Jo.create("duplicate-app",{appName:r})}const i=new vo(r);for(const a of Ho.values())i.addComponent(a);const o=new Qo(e,n,i);return Ko.set(r,o),o}function Yo(e="[DEFAULT]"){const t=Ko.get(e);if(!t)throw Jo.create("no-app",{appName:e});return t}function Zo(e,t,n){var r;let s=null!==(r=$o[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${s}" with version "${t}":`];return i&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void qo.warn(e.join(" "))}Go(new mo(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
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
 */const ea="firebase-heartbeat-store";let ta=null;function na(){var e,t,n,r,s;return ta||(ta=(e="firebase-heartbeat-database",t=1,n=e=>{switch(e.oldVersion){case 0:e.createObjectStore(ea)}},r=Ao(indexedDB,"open",[e,t]),s=r.request,s&&(s.onupgradeneeded=function(e){n&&n(new Vo(s.result,e.oldVersion,s.transaction))}),r.then((function(e){return new Fo(e)}))).catch((e=>{throw Jo.create("storage-open",{originalErrorMessage:e.message})}))),ta}async function ra(e,t){try{const n=(await na()).transaction(ea,"readwrite"),r=n.objectStore(ea);return await r.put(t,sa(e)),n.complete}catch(n){throw Jo.create("storage-set",{originalErrorMessage:n.message})}}function sa(e){return`${e.name}!${e.options.appId}`}
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
 */class ia{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new oa(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=(new Date).toISOString().substring(0,10);if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!this._heartbeatsCache.some((e=>e.date===t)))return this._heartbeatsCache.push({date:t,userAgent:e}),this._heartbeatsCache=this._heartbeatsCache.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache)return"";const{heartbeatsToSend:e,unsentEntries:t}=function(e,t=1024){const n=[];let r=e.slice();for(const s of e){const e=n.find((e=>e.userAgent===s.userAgent));if(e){if(e.dates.push(s.date),aa(n)>t){e.dates.pop();break}}else if(n.push({userAgent:s.userAgent,dates:[s.date]}),aa(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache),n=Zi(JSON.stringify({version:2,heartbeats:e}));return t.length>0?(this._heartbeatsCache=t,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache=null,this._storage.deleteAll()),n}}class oa{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{return(await na()).transaction(ea).objectStore(ea).get(sa(e))}catch(t){throw Jo.create("storage-get",{originalErrorMessage:t.message})}}(this.app);return(null==e?void 0:e.heartbeats)||[]}return[]}async overwrite(e){return await this._canUseIndexedDBPromise?ra(this.app,{heartbeats:e}):void 0}async add(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return ra(this.app,{heartbeats:[...t,...e]})}}async delete(e){if(await this._canUseIndexedDBPromise){const t=await this.read();return ra(this.app,{heartbeats:t.filter((t=>!e.includes(t)))})}}async deleteAll(){return await this._canUseIndexedDBPromise?async function(e){try{const t=(await na()).transaction(ea,"readwrite");return await t.objectStore(ea).delete(sa(e)),t.complete}catch(t){throw Jo.create("storage-delete",{originalErrorMessage:t.message})}}(this.app):void 0}}function aa(e){return Zi(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var ca;
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
function la(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}function ua(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}ca="",Go(new mo("platform-logger",(e=>new jo(e)),"PRIVATE")),Go(new mo("heartbeat",(e=>new ia(e)),"PRIVATE")),Zo(Bo,"0.7.18",ca),Zo(Bo,"0.7.18","esm2017"),Zo("fire-js","");const ha=ua,da=new ao("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),fa=new So("@firebase/auth");function pa(e,...t){fa.logLevel<=wo.ERROR&&fa.error(`Auth (9.6.8): ${e}`,...t)}
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
 */function ga(e,...t){throw va(e,...t)}function ma(e,...t){return va(e,...t)}function ya(e,t,n){const r=Object.assign(Object.assign({},ha()),{[t]:n});return new ao("auth","Firebase",r).create(t,{appName:e.name})}function va(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return da.create(e,...t)}function wa(e,t,...n){if(!e)throw va(t,...n)}function _a(e){const t="INTERNAL ASSERTION FAILED: "+e;throw pa(t),new Error(t)}function ba(e,t){e||_a(t)}
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
 */const Ea=new Map;function Ta(e){ba(e instanceof Function,"Expected a class definition");let t=Ea.get(e);return t?(ba(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ea.set(e,t),t)}
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
function Ia(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Sa(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function ka(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Sa()&&"https:"!==Sa()&&!ro()&&!("connection"in navigator)||navigator.onLine}
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
class Ca{constructor(e,t){this.shortDelay=e,this.longDelay=t,ba(t>e,"Short delay should be less than long delay!"),this.isMobile=no()||so()}get(){return ka()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function Aa(e,t){ba(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Na{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void _a("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void _a("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void _a("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Oa={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ra=new Ca(3e4,6e4);
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
 */async function Da(e,t,n,r,s={}){return xa(e,s,(async()=>{let s={},i={};r&&("GET"===t?i=r:s={body:JSON.stringify(r)});const o=ho(Object.assign({key:e.config.apiKey},i)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Na.fetch()(Pa(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},s))}))}async function xa(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Oa),t);try{const t=new La(e),s=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await s.json();if("needConfirmation"in i)throw Ma(e,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const t=s.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ma(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw Ma(e,"email-already-in-use",i);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw ya(e,a,o);ga(e,a)}}catch(s){if(s instanceof oo)throw s;ga(e,"network-request-failed")}}function Pa(e,t,n,r){const s=`${t}${n}?${r}`;return e.config.emulator?Aa(e.config,s):`${e.config.apiScheme}://${s}`}class La{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(ma(this.auth,"network-request-failed"))),Ra.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ma(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ma(e,t,r);return s.customData._tokenResponse=n,s}
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
function Ua(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function Va(e){return 1e3*Number(e)}function Fa(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return pa("JWT malformed, contained fewer than 3 sections"),null;try{const e=function(e){try{return Yi.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(n);return e?JSON.parse(e):(pa("Failed to decode base64 JWT payload"),null)}catch(s){return pa("Caught error parsing JWT payload as JSON",s),null}}
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
async function ja(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof oo&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class Ba{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
 */class qa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ua(this.lastLoginAt),this.creationTime=Ua(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function $a(e){var t;const n=e.auth,r=await e.getIdToken(),s=await ja(e,async function(e,t){return Da(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));wa(null==s?void 0:s.users.length,n,"internal-error");const i=s.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?i.providerUserInfo.map((e=>{var{providerId:t}=e,n=la(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&i.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new qa(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class Ka{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){wa(e.idToken,"internal-error"),wa(void 0!==e.idToken,"internal-error"),wa(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Fa(e);return wa(t,"internal-error"),wa(void 0!==t.exp,"internal-error"),wa(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return wa(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await
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
async function(e,t){const n=await xa(e,{},(async()=>{const n=ho({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:s}=e.config,i=Pa(e,r,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Na.fetch()(i,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,i=new Ka;return n&&(wa("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),r&&(wa("string"==typeof r,"internal-error",{appName:e}),i.accessToken=r),s&&(wa("number"==typeof s,"internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ka,this.toJSON())}_performRefresh(){return _a("not implemented")}}
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
 */function Ha(e,t){wa("string"==typeof e||void 0===e,"internal-error",{appName:t})}class za{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,s=la(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ba(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new qa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await ja(this,this.stsTokenManager.getToken(this.auth,e));return wa(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=go(e),r=await n.getIdToken(t),s=Fa(r);wa(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i="object"==typeof s.firebase?s.firebase:void 0,o=null==i?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ua(Va(s.auth_time)),issuedAtTime:Ua(Va(s.iat)),expirationTime:Ua(Va(s.exp)),signInProvider:o||null,signInSecondFactor:(null==i?void 0:i.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=go(e);await $a(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(wa(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new za(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){wa(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await $a(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ja(this,async function(e,t){return Da(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,s,i,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(s=t.phoneNumber)&&void 0!==s?s:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:_,providerData:b,stsTokenManager:E}=t;wa(v&&E,e,"internal-error");const T=Ka.fromJSON(this.name,E);wa("string"==typeof v,e,"internal-error"),Ha(u,e.name),Ha(h,e.name),wa("boolean"==typeof w,e,"internal-error"),wa("boolean"==typeof _,e,"internal-error"),Ha(d,e.name),Ha(f,e.name),Ha(p,e.name),Ha(g,e.name),Ha(m,e.name),Ha(y,e.name);const I=new za({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return b&&Array.isArray(b)&&(I.providerData=b.map((e=>Object.assign({},e)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new Ka;r.updateFromServerResponse(t);const s=new za({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await $a(s),s}}
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
 */class Ga{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ga.type="NONE";const Wa=Ga;
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
 */function Ja(e,t,n){return`firebase:${e}:${t}:${n}`}class Qa{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=Ja(this.userKey,r.apiKey,s),this.fullPersistenceKey=Ja("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?za._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Qa(Ta(Wa),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let s=r[0]||Ta(Wa);const i=Ja(n,e.config.apiKey,e.name);let o=null;for(const l of t)try{const t=await l._get(i);if(t){const n=za._fromJSON(e,t);l!==s&&(o=n),s=l;break}}catch(c){}const a=r.filter((e=>e._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==s)try{await e._remove(i)}catch(c){}}))),new Qa(s,e,n)):new Qa(s,e,n)}}
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
 */function Xa(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(tc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ya(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(rc(t))return"Blackberry";if(sc(t))return"Webos";if(Za(t))return"Safari";if((t.includes("chrome/")||ec(t))&&!t.includes("edge/"))return"Chrome";if(nc(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ya(e=to()){return/firefox\//i.test(e)}function Za(e=to()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ec(e=to()){return/crios\//i.test(e)}function tc(e=to()){return/iemobile/i.test(e)}function nc(e=to()){return/android/i.test(e)}function rc(e=to()){return/blackberry/i.test(e)}function sc(e=to()){return/webos/i.test(e)}function ic(e=to()){return/iphone|ipad|ipod/i.test(e)}function oc(e=to()){return ic(e)||nc(e)||sc(e)||rc(e)||/windows phone/i.test(e)||tc(e)}
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
function ac(e,t=[]){let n;switch(e){case"Browser":n=Xa(to());break;case"Worker":n=`${Xa(to())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.8/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class cc{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new uc(this),this.idTokenSubscription=new uc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=da,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ta(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await Qa.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e)):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,i=await this.tryRedirectSignIn(e);r&&r!==s||!(null==i?void 0:i.user)||(n=i.user)}return n?n._redirectEventId?(wa(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await $a(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?go(e):null;return t&&wa(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&wa(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Ta(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ao("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ta(e)||this._popupRedirectResolver;wa(t,this,"argument-error"),this.redirectPersistenceManager=await Qa.create(this,[Ta(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s="function"==typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return wa(i,this,"internal-error"),i.then((()=>s(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return wa(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ac(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function lc(e){return go(e)}class uc{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new fo(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return wa(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */class hc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _a("not implemented")}_getIdTokenResponse(e){return _a("not implemented")}_linkToIdToken(e,t){return _a("not implemented")}_getReauthenticationResolver(e){return _a("not implemented")}}
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
 */async function dc(e,t){return async function(e,t,n,r,s={}){const i=await Da(e,t,n,r,s);return"mfaPendingCredential"in i&&ga(e,"multi-factor-auth-required",{_serverResponse:i}),i}(e,"POST","/v1/accounts:signInWithIdp",function(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}(e,t))}
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
 */class fc extends hc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new fc(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ga("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,s=la(t,["providerId","signInMethod"]);if(!n||!r)return null;const i=new fc(n,r);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){return dc(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,dc(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,dc(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ho(t)}return e}}
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
 */class pc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class gc extends pc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class mc extends gc{constructor(){super("facebook.com")}static credential(e){return fc._fromParams({providerId:mc.PROVIDER_ID,signInMethod:mc.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mc.credentialFromTaggedObject(e)}static credentialFromError(e){return mc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mc.credential(e.oauthAccessToken)}catch(t){return null}}}mc.FACEBOOK_SIGN_IN_METHOD="facebook.com",mc.PROVIDER_ID="facebook.com";
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
class yc extends gc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return fc._fromParams({providerId:yc.PROVIDER_ID,signInMethod:yc.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return yc.credentialFromTaggedObject(e)}static credentialFromError(e){return yc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return yc.credential(t,n)}catch(r){return null}}}yc.GOOGLE_SIGN_IN_METHOD="google.com",yc.PROVIDER_ID="google.com";
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
class vc extends gc{constructor(){super("github.com")}static credential(e){return fc._fromParams({providerId:vc.PROVIDER_ID,signInMethod:vc.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vc.credentialFromTaggedObject(e)}static credentialFromError(e){return vc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return vc.credential(e.oauthAccessToken)}catch(t){return null}}}vc.GITHUB_SIGN_IN_METHOD="github.com",vc.PROVIDER_ID="github.com";
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
class wc extends gc{constructor(){super("twitter.com")}static credential(e,t){return fc._fromParams({providerId:wc.PROVIDER_ID,signInMethod:wc.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wc.credentialFromTaggedObject(e)}static credentialFromError(e){return wc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return wc.credential(t,n)}catch(r){return null}}}wc.TWITTER_SIGN_IN_METHOD="twitter.com",wc.PROVIDER_ID="twitter.com";
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
class _c{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await za._fromIdTokenResponse(e,n,r),i=bc(n);return new _c({user:s,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=bc(n);return new _c({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function bc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class Ec extends oo{constructor(e,t,n,r){var s;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ec.prototype),this.customData={appName:e.name,tenantId:null!==(s=e.tenantId)&&void 0!==s?s:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ec(e,t,n,r)}}function Tc(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ec._fromErrorAndOperation(e,n,t,r);throw n}))}function Ic(e,t,n,r){return go(e).onAuthStateChanged(t,n,r)}
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
class Sc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class kc extends Sc{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=to();return Za(e)||ic(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=oc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},s=this.storage.getItem(n);io()&&10===document.documentMode&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kc.type="LOCAL";const Cc=kc;
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
 */class Ac extends Sc{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ac.type="SESSION";const Nc=Ac;
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
class Oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Oc(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,i=this.handlersMap[r];if(!(null==i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(i).map((async e=>e(t.origin,s))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Rc(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */Oc.receivers=[];class Dc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,i;return new Promise(((o,a)=>{const c=Rc("",20);r.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(t.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
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
 */function xc(){return window}
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
function Pc(){return void 0!==xc().WorkerGlobalScope&&"function"==typeof xc().importScripts}
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
const Lc="firebaseLocalStorageDb";class Mc{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Uc(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Vc(){const e=indexedDB.open(Lc,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Lc);return new Mc(e).toPromise()}(),t(await Vc()))}))}))}async function Fc(e,t,n){const r=Uc(e,!0).put({fbase_key:t,value:n});return new Mc(r).toPromise()}function jc(e,t){const n=Uc(e,!0).delete(t);return new Mc(n).toPromise()}class Bc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Vc()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oc._getInstance(Pc()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Dc(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vc();return await Fc(e,"__sak","1"),await jc(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Fc(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Uc(e,!1).get(t),r=await new Mc(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>jc(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Uc(e,!1).getAll();return new Mc(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Bc.type="LOCAL";const qc=Bc;
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
 */function $c(e){return new Promise(((t,n)=>{const r=document.createElement("script");var s,i;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=ma("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(i=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==i?i:document).appendChild(r)}))}
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
function Kc(e,t){return t?Ta(t):(wa(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */new Ca(3e4,6e4);class Hc extends hc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return dc(e,this._buildIdpRequest())}_linkToIdToken(e,t){return dc(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return dc(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function zc(e){
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
return async function(e,t,n=!1){const r="signIn",s=await Tc(e,r,t),i=await _c._fromIdTokenResponse(e,r,s);return n||await e._updateCurrentUser(i.user),i}(e.auth,new Hc(e),e.bypassAuthState)}function Gc(e){const{auth:t,user:n}=e;return wa(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e,s="reauthenticate";try{const i=await ja(e,Tc(r,s,t,e),n);wa(i.idToken,r,"internal-error");const o=Fa(i.idToken);wa(o,r,"internal-error");const{sub:a}=o;return wa(e.uid===a,r,"user-mismatch"),_c._forOperation(e,s,i)}catch(i){throw"auth/user-not-found"===(null==i?void 0:i.code)&&ga(r,"user-mismatch"),i}}(n,new Hc(e),e.bypassAuthState)}async function Wc(e){const{auth:t,user:n}=e;return wa(n,t,"internal-error"),async function(e,t,n=!1){const r=await ja(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return _c._forOperation(e,"link",r)}(n,new Hc(e),e.bypassAuthState)}
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
 */class Jc{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return zc;case"linkViaPopup":case"linkViaRedirect":return Wc;case"reauthViaPopup":case"reauthViaRedirect":return Gc;default:ga(this.auth,"internal-error")}}resolve(e){ba(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ba(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Qc=new Ca(2e3,1e4);async function Xc(e,t,n){const r=lc(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&ga(e,"argument-error"),ya(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,pc);const s=Kc(r,n);return new Yc(r,"signInViaPopup",t,s).executeNotNull()}class Yc extends Jc{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,Yc.currentPopupAction&&Yc.currentPopupAction.cancel(),Yc.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return wa(e,this.auth,"internal-error"),e}async onExecution(){ba(1===this.filter.length,"Popup operations only handle one event");const e=Rc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(ma(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ma(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yc.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ma(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Qc.get())};e()}}Yc.currentPopupAction=null;
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
const Zc=new Map;class el extends Jc{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Zc.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Ja("pendingRedirect",e.config.apiKey,e.name)}(t),r=function(e){return Ta(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const s="true"===await r._get(n);return await r._remove(n),s}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Zc.set(this.auth._key(),e)}return this.bypassAuthState||Zc.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function tl(e,t,n=!1){const r=lc(e),s=Kc(r,t),i=new el(r,s,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
 */class nl{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sl(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!sl(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ma(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(rl(e))}saveEventToCache(e){this.cachedEventUids.add(rl(e)),this.lastProcessedEventTime=Date.now()}}function rl(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function sl({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const il=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ol=/^https?/;async function al(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Da(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(cl(r))return}catch(n){}ga(e,"unauthorized-domain")}function cl(e){const t=Ia(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return""===s.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===r}if(!ol.test(n))return!1;if(il.test(e))return r===e;const s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}
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
 */const ll=new Ca(3e4,6e4);function ul(){const e=xc().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function hl(e){return new Promise(((t,n)=>{var r,s,i;function o(){ul(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ul(),n(ma(e,"network-request-failed"))},timeout:ll.get()})}if(null===(s=null===(r=xc().gapi)||void 0===r?void 0:r.iframes)||void 0===s?void 0:s.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=xc().gapi)||void 0===i?void 0:i.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return xc()[t]=()=>{gapi.load?o():n(ma(e,"network-request-failed"))},$c(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw dl=null,e}))}let dl=null;
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
const fl=new Ca(5e3,15e3),pl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ml(e){const t=e.config;wa(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Aa(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.6.8"},s=gl.get(e.config.apiHost);s&&(r.eid=s);const i=e._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ho(r).slice(1)}`}async function yl(e){const t=await function(e){return dl=dl||hl(e),dl}(e),n=xc().gapi;return wa(n,e,"internal-error"),t.open({where:document.body,url:ml(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pl,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const s=ma(e,"network-request-failed"),i=xc().setTimeout((()=>{r(s)}),fl.get());function o(){xc().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{r(s)}))}))))}
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
 */const vl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class wl{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function _l(e,t,n,r=500,s=600){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},vl),{width:r.toString(),height:s.toString(),top:i,left:o}),l=to().toLowerCase();n&&(a=ec(l)?"_blank":n),Ya(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=to()){var t;return ic(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new wl(null);const h=window.open(t||"",a,u);wa(h,e,"popup-blocked");try{h.focus()}catch(d){}return new wl(h)}function bl(e,t,n,r,s,i){wa(e.config.authDomain,e,"auth-domain-config-required"),wa(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.6.8",eventId:s};if(t instanceof pc){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(i||{}))o[e]=t}if(t instanceof gc){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))void 0===a[c]&&delete a[c];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return Aa(e,"emulator/auth/handler")}
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
 */(e)}?${ho(a).slice(1)}`}const El=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Nc,this._completeRedirectFn=tl}async _openPopup(e,t,n,r){var s;ba(null===(s=this.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return _l(e,bl(e,t,n,Ia(),r),Rc())}async _openRedirect(e,t,n,r){var s;return await this._originValidation(e),s=bl(e,t,n,Ia(),r),xc().location.href=s,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(ba(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await yl(e),n=new nl(e);return t.register("authEvent",(t=>{wa(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const s=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==s&&t(!!s),ga(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=al(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return oc()||Za()||ic()}};var Tl;
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
class Il{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){wa(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
function Sl(e=Yo()){const t=Wo(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Wo(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(lo(n.getOptions(),null!=t?t:{}))return e;ga(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:El,persistence:[qc,Cc,Nc]})}Tl="Browser",Go(new mo("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:s}=n.options;return(e=>{wa(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),wa(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:s,clientPlatform:Tl,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ac(Tl)},i=new cc(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ta);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,t),i})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Go(new mo("auth-internal",(e=>{const t=lc(e.getProvider("auth").getImmediate());return new Il(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Zo("@firebase/auth","0.19.9",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Tl)),Zo("@firebase/auth","0.19.9","esm2017");
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
Zo("firebase","9.6.8","app");var kl,Cl="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Al=Al||{},Nl=Cl||self;function Ol(){}function Rl(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Dl(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var xl="closure_uid_"+(1e9*Math.random()>>>0),Pl=0;function Ll(e,t,n){return e.call.apply(e.bind,arguments)}function Ml(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Ul(e,t,n){return(Ul=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ll:Ml).apply(null,arguments)}function Vl(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Fl(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}function jl(){this.s=this.s,this.o=this.o}var Bl={};jl.prototype.s=!1,jl.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,xl)&&e[xl]||(e[xl]=++Pl)}(this);delete Bl[e]}},jl.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ql=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},$l=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,s="string"==typeof e?e.split(""):e;for(let i=0;i<r;i++)i in s&&t.call(n,s[i],i,e)};function Kl(e){return Array.prototype.concat.apply([],arguments)}function Hl(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function zl(e){return/^[\s\xa0]*$/.test(e)}var Gl,Wl=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Jl(e,t){return-1!=e.indexOf(t)}function Ql(e,t){return e<t?-1:e>t?1:0}e:{var Xl=Nl.navigator;if(Xl){var Yl=Xl.userAgent;if(Yl){Gl=Yl;break e}}Gl=""}function Zl(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function eu(e){const t={};for(const n in e)t[n]=e[n];return t}var tu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nu(e,t){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)e[n]=r[n];for(let t=0;t<tu.length;t++)n=tu[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function ru(e){return ru[" "](e),e}ru[" "]=Ol;var su,iu,ou=Jl(Gl,"Opera"),au=Jl(Gl,"Trident")||Jl(Gl,"MSIE"),cu=Jl(Gl,"Edge"),lu=cu||au,uu=Jl(Gl,"Gecko")&&!(Jl(Gl.toLowerCase(),"webkit")&&!Jl(Gl,"Edge"))&&!(Jl(Gl,"Trident")||Jl(Gl,"MSIE"))&&!Jl(Gl,"Edge"),hu=Jl(Gl.toLowerCase(),"webkit")&&!Jl(Gl,"Edge");function du(){var e=Nl.document;return e?e.documentMode:void 0}e:{var fu="",pu=(iu=Gl,uu?/rv:([^\);]+)(\)|;)/.exec(iu):cu?/Edge\/([\d\.]+)/.exec(iu):au?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(iu):hu?/WebKit\/(\S+)/.exec(iu):ou?/(?:Version)[ \/]?(\S+)/.exec(iu):void 0);if(pu&&(fu=pu?pu[1]:""),au){var gu=du();if(null!=gu&&gu>parseFloat(fu)){su=String(gu);break e}}su=fu}var mu,yu={};function vu(){return function(e){var t=yu;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){let e=0;const t=Wl(String(su)).split("."),n=Wl("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var s=t[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;e=Ql(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||Ql(0==s[2].length,0==i[2].length)||Ql(s[2],i[2]),s=s[3],i=i[3]}while(0==e)}return 0<=e}))}if(Nl.document&&au){var wu=du();mu=wu||(parseInt(su,10)||void 0)}else mu=void 0;var _u=mu,bu=function(){if(!Nl.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Nl.addEventListener("test",Ol,t),Nl.removeEventListener("test",Ol,t)}catch(n){}return e}();function Eu(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function Tu(e,t){if(Eu.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(uu){e:{try{ru(t.nodeName);var s=!0;break e}catch(i){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:Iu[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Tu.Z.h.call(this)}}Eu.prototype.h=function(){this.defaultPrevented=!0},Fl(Tu,Eu);var Iu={2:"touch",3:"pen",4:"mouse"};Tu.prototype.h=function(){Tu.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Su="closure_listenable_"+(1e6*Math.random()|0),ku=0;function Cu(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=s,this.key=++ku,this.ca=this.fa=!1}function Au(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function Nu(e){this.src=e,this.g={},this.h=0}function Ou(e,t){var n=t.type;if(n in e.g){var r,s=e.g[n],i=ql(s,t);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Au(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Ru(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.ca&&i.listener==t&&i.capture==!!n&&i.ia==r)return s}return-1}Nu.prototype.add=function(e,t,n,r,s){var i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);var o=Ru(e,t,r,s);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new Cu(t,this.src,i,!!r,s)).fa=n,e.push(t)),t};var Du="closure_lm_"+(1e6*Math.random()|0),xu={};function Pu(e,t,n,r,s){if(r&&r.once)return Mu(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Pu(e,t[i],n,r,s);return null}return n=$u(n),e&&e[Su]?e.N(t,n,Dl(r)?!!r.capture:!!r,s):Lu(e,t,n,!1,r,s)}function Lu(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Dl(s)?!!s.capture:!!s,a=Bu(e);if(a||(e[Du]=a=new Nu(e)),(n=a.add(t,n,r,o,i)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=ju;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)bu||(s=o),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Fu(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function Mu(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Mu(e,t[i],n,r,s);return null}return n=$u(n),e&&e[Su]?e.O(t,n,Dl(r)?!!r.capture:!!r,s):Lu(e,t,n,!0,r,s)}function Uu(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Uu(e,t[i],n,r,s);else r=Dl(r)?!!r.capture:!!r,n=$u(n),e&&e[Su]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Ru(i=e.g[t],n,r,s))&&(Au(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=Bu(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Ru(t,n,r,s)),(n=-1<e?t[e]:null)&&Vu(n))}function Vu(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Su])Ou(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Fu(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Bu(t))?(Ou(n,e),0==n.h&&(n.src=null,t[Du]=null)):Au(e)}}}function Fu(e){return e in xu?xu[e]:xu[e]="on"+e}function ju(e,t){if(e.ca)e=!0;else{t=new Tu(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&Vu(e),e=n.call(r,t)}return e}function Bu(e){return(e=e[Du])instanceof Nu?e:null}var qu="__closure_events_fn_"+(1e9*Math.random()>>>0);function $u(e){return"function"==typeof e?e:(e[qu]||(e[qu]=function(t){return e.handleEvent(t)}),e[qu])}function Ku(){jl.call(this),this.i=new Nu(this),this.P=this,this.I=null}function Hu(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new Eu(t,e);else if(t instanceof Eu)t.target=t.target||e;else{var s=t;nu(t=new Eu(r,e),s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=zu(o,r,!0,t)&&s}if(s=zu(o=t.g=e,r,!0,t)&&s,s=zu(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)s=zu(o=t.g=n[i],r,!1,t)&&s}function zu(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&Ou(e.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}Fl(Ku,jl),Ku.prototype[Su]=!0,Ku.prototype.removeEventListener=function(e,t,n,r){Uu(this,e,t,n,r)},Ku.prototype.M=function(){if(Ku.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Au(n[r]);delete t.g[e],t.h--}}this.I=null},Ku.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Ku.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Gu=Nl.JSON.stringify;function Wu(){var e=th;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Ju,Qu=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Xu),(e=>e.reset()));class Xu{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Yu(e){Nl.setTimeout((()=>{throw e}),0)}function Zu(e,t){Ju||function(){var e=Nl.Promise.resolve(void 0);Ju=function(){e.then(nh)}}(),eh||(Ju(),eh=!0),th.add(e,t)}var eh=!1,th=new class{constructor(){this.h=this.g=null}add(e,t){const n=Qu.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function nh(){for(var e;e=Wu();){try{e.h.call(e.g)}catch(n){Yu(n)}var t=Qu;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}eh=!1}function rh(e,t){Ku.call(this),this.h=e||1,this.g=t||Nl,this.j=Ul(this.kb,this),this.l=Date.now()}function sh(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function ih(e,t,n){if("function"==typeof e)n&&(e=Ul(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Ul(e.handleEvent,e)}return 2147483647<Number(t)?-1:Nl.setTimeout(e,t||0)}function oh(e){e.g=ih((()=>{e.g=null,e.i&&(e.i=!1,oh(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Fl(rh,Ku),(kl=rh.prototype).da=!1,kl.S=null,kl.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Hu(this,"tick"),this.da&&(sh(this),this.start()))}},kl.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},kl.M=function(){rh.Z.M.call(this),sh(this),delete this.g};class ah extends jl{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:oh(this)}M(){super.M(),this.g&&(Nl.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ch(e){jl.call(this),this.h=e,this.g={}}Fl(ch,jl);var lh=[];function uh(e,t,n,r){Array.isArray(n)||(n&&(lh[0]=n.toString()),n=lh);for(var s=0;s<n.length;s++){var i=Pu(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function hh(e){Zl(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Vu(e)}),e),e.g={}}function dh(){this.g=!0}function fh(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return Gu(n)}catch(a){return t}}(e,n)+(r?" "+r:"")}))}ch.prototype.M=function(){ch.Z.M.call(this),hh(this)},ch.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},dh.prototype.Aa=function(){this.g=!1},dh.prototype.info=function(){};var ph={},gh=null;function mh(){return gh=gh||new Ku}function yh(e){Eu.call(this,ph.Ma,e)}function vh(e){const t=mh();Hu(t,new yh(t,e))}function wh(e,t){Eu.call(this,ph.STAT_EVENT,e),this.stat=t}function _h(e){const t=mh();Hu(t,new wh(t,e))}function bh(e,t){Eu.call(this,ph.Na,e),this.size=t}function Eh(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Nl.setTimeout((function(){e()}),t)}ph.Ma="serverreachability",Fl(yh,Eu),ph.STAT_EVENT="statevent",Fl(wh,Eu),ph.Na="timingevent",Fl(bh,Eu);var Th={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Ih={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Sh(){}function kh(e){return e.h||(e.h=e.i())}function Ch(){}Sh.prototype.h=null;var Ah,Nh={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Oh(){Eu.call(this,"d")}function Rh(){Eu.call(this,"c")}function Dh(){}function xh(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new ch(this),this.P=Lh,e=lu?125:void 0,this.W=new rh(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ph}function Ph(){this.i=null,this.g="",this.h=!1}Fl(Oh,Eu),Fl(Rh,Eu),Fl(Dh,Sh),Dh.prototype.g=function(){return new XMLHttpRequest},Dh.prototype.i=function(){return{}},Ah=new Dh;var Lh=45e3,Mh={},Uh={};function Vh(e,t,n){e.K=1,e.v=ad(td(t)),e.s=n,e.U=!0,Fh(e,null)}function Fh(e,t){e.F=Date.now(),$h(e),e.A=td(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),_d(n.h,"t",r),e.C=0,n=e.l.H,e.h=new Ph,e.g=bf(e.l,n?t:null,!e.s),0<e.O&&(e.L=new ah(Ul(e.Ia,e,e.g),e.O)),uh(e.V,e.g,"readystatechange",e.gb),t=e.H?eu(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),vh(1),function(e,t,n,r,s,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function jh(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Bh(e,t,n){let r,s=!0;for(;!e.I&&e.C<n.length;){if(r=qh(e,n),r==Uh){4==t&&(e.o=4,_h(14),s=!1),fh(e.j,e.m,null,"[Incomplete Response]");break}if(r==Mh){e.o=4,_h(15),fh(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}fh(e.j,e.m,r,null),Wh(e,r)}jh(e)&&r!=Uh&&r!=Mh&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,_h(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),ff(t),t.L=!0,_h(11))):(fh(e.j,e.m,n,"[Invalid Chunked Response]"),Gh(e),zh(e))}function qh(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Uh:(n=Number(t.substring(n,r)),isNaN(n)?Mh:(r+=1)+n>t.length?Uh:(t=t.substr(r,n),e.C=r+n,t))}function $h(e){e.Y=Date.now()+e.P,Kh(e,e.P)}function Kh(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Eh(Ul(e.eb,e),t)}function Hh(e){e.B&&(Nl.clearTimeout(e.B),e.B=null)}function zh(e){0==e.l.G||e.I||mf(e.l,e)}function Gh(e){Hh(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,sh(e.W),hh(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Wh(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||kd(n.i,e)))if(n.I=e.N,!e.J&&kd(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;gf(n),rf(n)}df(n),_h(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=Eh(Ul(n.ab,n),6e3));if(1>=Sd(n.i)&&n.ka){try{n.ka()}catch(l){}n.ka=void 0}}else vf(n,11)}else if((e.J||n.g==e)&&gf(n),!zl(t))for(s=n.Ca.g.parse(t),t=0;t<s.length;t++){let l=s[t];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const t=l[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const s=l[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.i;!i.g&&(Jl(e,"spdy")||Jl(e,"quic")||Jl(e,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(Cd(i,i.h),i.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,od(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=e;if((r=n).oa=_f(r,r.H?r.la:null,r.W),o.J){Ad(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Hh(a),$h(a)),r.g=o}else hf(r);0<n.l.length&&af(n)}else"stop"!=l[0]&&"close"!=l[0]||vf(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?vf(n,7):nf(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}vh(4)}catch(l){}}function Jh(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Rl(e)||"string"==typeof e)$l(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(Rl(e)||"string"==typeof e){n=[];for(var r=e.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,e)n[r++]=s;s=(r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(Rl(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e)).length;for(var i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}}function Qh(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof Qh)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Xh(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Yh(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var s={};for(n=t=0;t<e.g.length;)Yh(s,r=e.g[t])||(e.g[n++]=r,s[r]=1),t++;e.g.length=n}}function Yh(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(kl=xh.prototype).setTimeout=function(e){this.P=e},kl.gb=function(e){e=e.target;const t=this.L;t&&3==Xd(e)?t.l():this.Ia(e)},kl.Ia=function(e){try{if(e==this.g)e:{const u=Xd(this.g);var t=this.g.Da();const h=this.g.ba();if(!(3>u)&&(3!=u||lu||this.g&&(this.h.h||this.g.ga()||Yd(this.g)))){this.I||4!=u||7==t||vh(8==t||0>=h?3:2),Hh(this);var n=this.g.ba();this.N=n;t:if(jh(this)){var r=Yd(this.g);e="";var s=r.length,i=4==Xd(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Gh(this),zh(this);var o="";break t}this.h.i=new Nl.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.splice(0,s),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(e,t,n,r,s,i,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zl(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,_h(12),Gh(this),zh(this);break e}fh(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Wh(this,n)}this.U?(Bh(this,u,o),lu&&this.i&&3==u&&(uh(this.V,this.W,"tick",this.fb),this.W.start())):(fh(this.j,this.m,o,null),Wh(this,o)),4==u&&Gh(this),this.i&&!this.I&&(4==u?mf(this.l,this):(this.i=!1,$h(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,_h(12)):(this.o=0,_h(13)),Gh(this),zh(this)}}}catch(u){}},kl.fb=function(){if(this.g){var e=Xd(this.g),t=this.g.ga();this.C<t.length&&(Hh(this),Bh(this,e,t),this.i&&4!=e&&$h(this))}},kl.cancel=function(){this.I=!0,Gh(this)},kl.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(vh(3),_h(17)),Gh(this),this.o=2,zh(this)):Kh(this,this.Y-e)},(kl=Qh.prototype).R=function(){Xh(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},kl.T=function(){return Xh(this),this.g.concat()},kl.get=function(e,t){return Yh(this.h,e)?this.h[e]:t},kl.set=function(e,t){Yh(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},kl.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);e.call(t,i,s,this)}};var Zh=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ed(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof ed){this.g=void 0!==t?t:e.g,nd(this,e.j),this.s=e.s,rd(this,e.i),sd(this,e.m),this.l=e.l,t=e.h;var n=new md;n.i=t.i,t.g&&(n.g=new Qh(t.g),n.h=t.h),id(this,n),this.o=e.o}else e&&(n=String(e).match(Zh))?(this.g=!!t,nd(this,n[1]||"",!0),this.s=cd(n[2]||""),rd(this,n[3]||"",!0),sd(this,n[4]),this.l=cd(n[5]||"",!0),id(this,n[6]||"",!0),this.o=cd(n[7]||"")):(this.g=!!t,this.h=new md(null,this.g))}function td(e){return new ed(e)}function nd(e,t,n){e.j=n?cd(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function rd(e,t,n){e.i=n?cd(t,!0):t}function sd(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function id(e,t,n){t instanceof md?(e.h=t,function(e,t){t&&!e.j&&(yd(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(vd(this,t),_d(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=ld(t,pd)),e.h=new md(t,e.g))}function od(e,t,n){e.h.set(t,n)}function ad(e){return od(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function cd(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ld(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ud),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ud(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}ed.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ld(t,hd,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(ld(t,hd,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(ld(n,"/"==n.charAt(0)?fd:dd,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ld(n,gd)),e.join("")};var hd=/[#\/\?@]/g,dd=/[#\?:]/g,fd=/[#\?]/g,pd=/[#\?@]/g,gd=/#/g;function md(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function yd(e){e.g||(e.g=new Qh,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function vd(e,t){yd(e),t=bd(e,t),Yh(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,Yh((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Xh(e)))}function wd(e,t){return yd(e),t=bd(e,t),Yh(e.g.h,t)}function _d(e,t,n){vd(e,t),0<n.length&&(e.i=null,e.g.set(bd(e,t),Hl(n)),e.h+=n.length)}function bd(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(kl=md.prototype).add=function(e,t){yd(this),this.i=null,e=bd(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},kl.forEach=function(e,t){yd(this),this.g.forEach((function(n,r){$l(n,(function(n){e.call(t,n,r,this)}),this)}),this)},kl.T=function(){yd(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var s=e[r],i=0;i<s.length;i++)n.push(t[r]);return n},kl.R=function(e){yd(this);var t=[];if("string"==typeof e)wd(this,e)&&(t=Kl(t,this.g.get(bd(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=Kl(t,e[n])}return t},kl.set=function(e,t){return yd(this),this.i=null,wd(this,e=bd(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},kl.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},kl.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),e.push(o)}}return this.i=e.join("&")};function Ed(e){this.l=e||Td,Nl.PerformanceNavigationTiming?e=0<(e=Nl.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Nl.g&&Nl.g.Ea&&Nl.g.Ea()&&Nl.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Td=10;function Id(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Sd(e){return e.h?1:e.g?e.g.size:0}function kd(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Cd(e,t){e.g?e.g.add(t):e.h=t}function Ad(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Nd(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Hl(e.i)}function Od(){}function Rd(){this.g=new Od}function Dd(e,t,n){const r=n||"";try{Jh(e,(function(e,n){let s=e;Dl(e)&&(s=Gu(e)),t.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function xd(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch(i){}}function Pd(e){this.l=e.$b||null,this.j=e.ib||!1}function Ld(e,t){Ku.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Md,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ed.prototype.cancel=function(){if(this.i=Nd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},Od.prototype.stringify=function(e){return Nl.JSON.stringify(e,void 0)},Od.prototype.parse=function(e){return Nl.JSON.parse(e,void 0)},Fl(Pd,Sh),Pd.prototype.g=function(){return new Ld(this.l,this.j)},Pd.prototype.i=function(e){return function(){return e}}({}),Fl(Ld,Ku);var Md=0;function Ud(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function Vd(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Fd(e)}function Fd(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(kl=Ld.prototype).open=function(e,t){if(this.readyState!=Md)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Fd(this)},kl.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||Nl).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},kl.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Vd(this)),this.readyState=Md},kl.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Fd(this)),this.g&&(this.readyState=3,Fd(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==Nl.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ud(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},kl.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Vd(this):Fd(this),3==this.readyState&&Ud(this)}},kl.Ua=function(e){this.g&&(this.response=this.responseText=e,Vd(this))},kl.Ta=function(e){this.g&&(this.response=e,Vd(this))},kl.ha=function(){this.g&&Vd(this)},kl.setRequestHeader=function(e,t){this.v.append(e,t)},kl.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},kl.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Ld.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var jd=Nl.JSON.parse;function Bd(e){Ku.call(this),this.headers=new Qh,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=qd,this.K=this.L=!1}Fl(Bd,Ku);var qd="",$d=/^https?$/i,Kd=["POST","PUT"];function Hd(e){return"content-type"==e.toLowerCase()}function zd(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Gd(e),Jd(e)}function Gd(e){e.D||(e.D=!0,Hu(e,"complete"),Hu(e,"error"))}function Wd(e){if(e.h&&void 0!==Al&&(!e.C[1]||4!=Xd(e)||2!=e.ba()))if(e.v&&4==Xd(e))ih(e.Fa,0,e);else if(Hu(e,"readystatechange"),4==Xd(e)){e.h=!1;try{const c=e.ba();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===c){var s=String(e.H).match(Zh)[1]||null;if(!s&&Nl.self&&Nl.self.location){var i=Nl.self.location.protocol;s=i.substr(0,i.length-1)}r=!$d.test(s?s.toLowerCase():"")}n=r}if(n)Hu(e,"complete"),Hu(e,"success");else{e.m=6;try{var o=2<Xd(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.ba()+"]",Gd(e)}}finally{Jd(e)}}}function Jd(e,t){if(e.g){Qd(e);const r=e.g,s=e.C[0]?Ol:null;e.g=null,e.C=null,t||Hu(e,"ready");try{r.onreadystatechange=s}catch(n){}}}function Qd(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Nl.clearTimeout(e.A),e.A=null)}function Xd(e){return e.g?e.g.readyState:0}function Yd(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case qd:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Zd(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){let t="";return Zl(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):od(e,t,n))}function ef(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function tf(e){this.za=0,this.l=[],this.h=new dh,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=ef("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=ef("baseRetryDelayMs",5e3,e),this.$a=ef("retryDelaySeedMs",1e4,e),this.Ya=ef("forwardChannelMaxRetries",2,e),this.ra=ef("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Ed(e&&e.concurrentRequestLimit),this.Ca=new Rd,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function nf(e){if(sf(e),3==e.G){var t=e.V++,n=td(e.F);od(n,"SID",e.J),od(n,"RID",t),od(n,"TYPE","terminate"),lf(e,n),(t=new xh(e,e.h,t,void 0)).K=2,t.v=ad(td(n)),n=!1,Nl.navigator&&Nl.navigator.sendBeacon&&(n=Nl.navigator.sendBeacon(t.v.toString(),"")),!n&&Nl.Image&&((new Image).src=t.v,n=!0),n||(t.g=bf(t.l,null),t.g.ea(t.v)),t.F=Date.now(),$h(t)}wf(e)}function rf(e){e.g&&(ff(e),e.g.cancel(),e.g=null)}function sf(e){rf(e),e.u&&(Nl.clearTimeout(e.u),e.u=null),gf(e),e.i.cancel(),e.m&&("number"==typeof e.m&&Nl.clearTimeout(e.m),e.m=null)}function of(e,t){e.l.push(new class{constructor(e,t){this.h=e,this.g=t}}(e.Za++,t)),3==e.G&&af(e)}function af(e){Id(e.i)||e.m||(e.m=!0,Zu(e.Ha,e),e.C=0)}function cf(e,t){var n;n=t?t.m:e.V++;const r=td(e.F);od(r,"SID",e.J),od(r,"RID",n),od(r,"AID",e.U),lf(e,r),e.o&&e.s&&Zd(r,e.o,e.s),n=new xh(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=uf(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Cd(e.i,n),Vh(n,r,t)}function lf(e,t){e.j&&Jh({},(function(e,n){od(t,n,e)}))}function uf(e,t,n){n=Math.min(e.l.length,n);var r=e.j?Ul(e.j.Oa,e.j,e):null;e:{var s=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=s[a].h;const c=s[a].g;if(n-=t,0>n)t=Math.max(0,s[a].h-100),o=!1;else try{Dd(c,e,"req"+n+"_")}catch(i){r&&r(c)}}if(o){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function hf(e){e.g||e.u||(e.Y=1,Zu(e.Ga,e),e.A=0)}function df(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=Eh(Ul(e.Ga,e),yf(e,e.A)),e.A++,!0)}function ff(e){null!=e.B&&(Nl.clearTimeout(e.B),e.B=null)}function pf(e){e.g=new xh(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=td(e.oa);od(t,"RID","rpc"),od(t,"SID",e.J),od(t,"CI",e.N?"0":"1"),od(t,"AID",e.U),lf(e,t),od(t,"TYPE","xmlhttp"),e.o&&e.s&&Zd(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=ad(td(t)),n.s=null,n.U=!0,Fh(n,e)}function gf(e){null!=e.v&&(Nl.clearTimeout(e.v),e.v=null)}function mf(e,t){var n=null;if(e.g==t){gf(e),ff(e),e.g=null;var r=2}else{if(!kd(e.i,t))return;n=t.D,Ad(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var s=e.C;Hu(r=mh(),new bh(r,n,t,s)),af(e)}else hf(e);else if(3==(s=t.o)||0==s&&0<e.I||!(1==r&&function(e,t){return!(Sd(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=Eh(Ul(e.Ha,e,t),yf(e,e.C)),e.C++,0)))}(e,t)||2==r&&df(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:vf(e,5);break;case 4:vf(e,10);break;case 3:vf(e,6);break;default:vf(e,2)}}function yf(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function vf(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=Ul(e.jb,e);n||(n=new ed("//www.google.com/images/cleardot.gif"),Nl.location&&"http"==Nl.location.protocol||nd(n,"https"),ad(n)),function(e,t){const n=new dh;if(Nl.Image){const r=new Image;r.onload=Vl(xd,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Vl(xd,n,r,"TestLoadImage: error",!1,t),r.onabort=Vl(xd,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Vl(xd,n,r,"TestLoadImage: timeout",!1,t),Nl.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else _h(2);e.G=0,e.j&&e.j.va(t),wf(e),sf(e)}function wf(e){e.G=0,e.I=-1,e.j&&(0==Nd(e.i).length&&0==e.l.length||(e.i.i.length=0,Hl(e.l),e.l.length=0),e.j.ua())}function _f(e,t,n){let r=function(e){return e instanceof ed?td(e):new ed(e,void 0)}(n);if(""!=r.i)t&&rd(r,t+"."+r.i),sd(r,r.m);else{const e=Nl.location;r=function(e,t,n,r){var s=new ed(null,void 0);return e&&nd(s,e),t&&rd(s,t),n&&sd(s,n),r&&(s.l=r),s}(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&Zl(e.aa,(function(e,t){od(r,t,e)})),t=e.D,n=e.sa,t&&n&&od(r,t,n),od(r,"VER",e.ma),lf(e,r),r}function bf(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new Bd(new Pd({ib:!0})):new Bd(e.qa)).L=e.H,t}function Ef(){}function Tf(){if(au&&!(10<=Number(_u)))throw Error("Environmental error: no available transport.")}function If(e,t){Ku.call(this),this.g=new tf(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!zl(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!zl(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Cf(this)}function Sf(e){Oh.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function kf(){Rh.call(this),this.status=1}function Cf(e){this.g=e}(kl=Bd.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ah.g(),this.C=this.u?kh(this.u):kh(Ah),this.g.onreadystatechange=Ul(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){return void zd(this,i)}e=n||"";const s=new Qh(this.headers);r&&Jh(r,(function(e,t){s.set(t,e)})),r=function(e){e:{var t=Hd;const n=e.length,r="string"==typeof e?e.split(""):e;for(let s=0;s<n;s++)if(s in r&&t.call(void 0,r[s],s,e)){t=s;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(s.T()),n=Nl.FormData&&e instanceof Nl.FormData,!(0<=ql(Kd,t))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qd(this),0<this.B&&((this.K=function(e){return au&&vu()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ul(this.pa,this)):this.A=ih(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){zd(this,i)}},kl.pa=function(){void 0!==Al&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Hu(this,"timeout"),this.abort(8))},kl.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Hu(this,"complete"),Hu(this,"abort"),Jd(this))},kl.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jd(this,!0)),Bd.Z.M.call(this)},kl.Fa=function(){this.s||(this.F||this.v||this.l?Wd(this):this.cb())},kl.cb=function(){Wd(this)},kl.ba=function(){try{return 2<Xd(this)?this.g.status:-1}catch(iu){return-1}},kl.ga=function(){try{return this.g?this.g.responseText:""}catch(iu){return""}},kl.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),jd(t)}},kl.Da=function(){return this.m},kl.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(kl=tf.prototype).ma=8,kl.G=1,kl.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},kl.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const s=new xh(this,this.h,e,void 0);let i=this.s;if(this.P&&(i?(i=eu(i),nu(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=uf(this,s,t),od(n=td(this.F),"RID",e),od(n,"CVER",22),this.D&&od(n,"X-HTTP-Session-Id",this.D),lf(this,n),this.o&&i&&Zd(n,this.o,i),Cd(this.i,s),this.Ra&&od(n,"TYPE","init"),this.ja?(od(n,"$req",t),od(n,"SID","null"),s.$=!0,Vh(s,n,null)):Vh(s,n,t),this.G=2}}else 3==this.G&&(e?cf(this,e):0==this.l.length||Id(this.i)||cf(this))},kl.Ga=function(){if(this.u=null,pf(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Eh(Ul(this.bb,this),e)}},kl.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,_h(10),rf(this),pf(this))},kl.ab=function(){null!=this.v&&(this.v=null,rf(this),df(this),_h(19))},kl.jb=function(e){e?(this.h.info("Successfully pinged google.com"),_h(2)):(this.h.info("Failed to ping google.com"),_h(1))},(kl=Ef.prototype).xa=function(){},kl.wa=function(){},kl.va=function(){},kl.ua=function(){},kl.Oa=function(){},Tf.prototype.g=function(e,t){return new If(e,t)},Fl(If,Ku),If.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Zu(Ul(e.hb,e,t))),_h(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=_f(e,null,e.W),af(e)},If.prototype.close=function(){nf(this.g)},If.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,of(this.g,t)}else this.v?((t={}).__data__=Gu(e),of(this.g,t)):of(this.g,e)},If.prototype.M=function(){this.g.j=null,delete this.j,nf(this.g),delete this.g,If.Z.M.call(this)},Fl(Sf,Oh),Fl(kf,Rh),Fl(Cf,Ef),Cf.prototype.xa=function(){Hu(this.g,"a")},Cf.prototype.wa=function(e){Hu(this.g,new Sf(e))},Cf.prototype.va=function(e){Hu(this.g,new kf(e))},Cf.prototype.ua=function(){Hu(this.g,"b")},Tf.prototype.createWebChannel=Tf.prototype.g,If.prototype.send=If.prototype.u,If.prototype.open=If.prototype.m,If.prototype.close=If.prototype.close,Th.NO_ERROR=0,Th.TIMEOUT=8,Th.HTTP_ERROR=6,Ih.COMPLETE="complete",Ch.EventType=Nh,Nh.OPEN="a",Nh.CLOSE="b",Nh.ERROR="c",Nh.MESSAGE="d",Ku.prototype.listen=Ku.prototype.N,Bd.prototype.listenOnce=Bd.prototype.O,Bd.prototype.getLastError=Bd.prototype.La,Bd.prototype.getLastErrorCode=Bd.prototype.Da,Bd.prototype.getStatus=Bd.prototype.ba,Bd.prototype.getResponseJson=Bd.prototype.Qa,Bd.prototype.getResponseText=Bd.prototype.ga,Bd.prototype.send=Bd.prototype.ea;var Af=Th,Nf=Ih,Of=ph,Rf=10,Df=11,xf=Pd,Pf=Ch,Lf=Bd;const Mf="@firebase/firestore";
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
 */class Uf{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Uf.UNAUTHENTICATED=new Uf(null),Uf.GOOGLE_CREDENTIALS=new Uf("google-credentials-uid"),Uf.FIRST_PARTY=new Uf("first-party-uid"),Uf.MOCK_USER=new Uf("mock-user");
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
let Vf="9.6.7";
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
 */const Ff=new So("@firebase/firestore");function jf(){return Ff.logLevel}function Bf(e,...t){if(Ff.logLevel<=wo.DEBUG){const n=t.map(Kf);Ff.debug(`Firestore (${Vf}): ${e}`,...n)}}function qf(e,...t){if(Ff.logLevel<=wo.ERROR){const n=t.map(Kf);Ff.error(`Firestore (${Vf}): ${e}`,...n)}}function $f(e,...t){if(Ff.logLevel<=wo.WARN){const n=t.map(Kf);Ff.warn(`Firestore (${Vf}): ${e}`,...n)}}function Kf(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(n){return e}
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
 */function Hf(e="Unexpected state"){const t=`FIRESTORE (${Vf}) INTERNAL ASSERTION FAILED: `+e;throw qf(t),new Error(t)}function zf(e,t){e||Hf()}function Gf(e,t){return e}
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
 */const Wf={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Jf extends oo{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Qf{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class Xf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Yf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Uf.UNAUTHENTICATED)))}shutdown(){}}class Zf{constructor(e){this.t=e,this.currentUser=Uf.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new Qf;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Qf,e.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const t=s;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{Bf("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Bf("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Qf)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Bf("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(zf("string"==typeof t.accessToken),new Xf(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return zf(null===e||"string"==typeof e),new Uf(e)}}class ep{constructor(e,t,n){this.type="FirstParty",this.user=Uf.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class tp{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new ep(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Uf.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class np{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rp{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&Bf("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,Bf("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{Bf("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):Bf("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(zf("string"==typeof e.token),this.p=e.token,new np(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
 */class sp{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.I(e),this.T=e=>t.writeSequenceNumber(e))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
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
 */function ip(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */sp.A=-1;class op{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=ip(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%e.length))}return n}}function ap(e,t){return e<t?-1:e>t?1:0}function cp(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
 */class lp{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Jf(Wf.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Jf(Wf.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Jf(Wf.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Jf(Wf.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return lp.fromMillis(Date.now())}static fromDate(e){return lp.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new lp(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ap(this.nanoseconds,e.nanoseconds):ap(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class up{constructor(e){this.timestamp=e}static fromTimestamp(e){return new up(e)}static min(){return new up(new lp(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function hp(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function dp(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function fp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class pp{constructor(e,t,n){void 0===t?t=0:t>e.length&&Hf(),void 0===n?n=e.length-t:n>e.length-t&&Hf(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===pp.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof pp?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),s=t.get(r);if(n<s)return-1;if(n>s)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class gp extends pp{construct(e,t,n){return new gp(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Jf(Wf.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new gp(t)}static emptyPath(){return new gp([])}}const mp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yp extends pp{construct(e,t,n){return new yp(e,t,n)}static isValidIdentifier(e){return mp.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yp.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new yp(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new Jf(Wf.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Jf(Wf.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Jf(Wf.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new Jf(Wf.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yp(t)}static emptyPath(){return new yp([])}}
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
 */class vp{constructor(e){this.fields=e,e.sort(yp.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return cp(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
 */class wp{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new wp(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new wp(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ap(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wp.EMPTY_BYTE_STRING=new wp("");const _p=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function bp(e){if(zf(!!e),"string"==typeof e){let t=0;const n=_p.exec(e);if(zf(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ep(e.seconds),nanos:Ep(e.nanos)}}function Ep(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Tp(e){return"string"==typeof e?wp.fromBase64String(e):wp.fromUint8Array(e)}
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
 */function Ip(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Sp(e){const t=e.mapValue.fields.__previous_value__;return Ip(t)?Sp(t):t}function kp(e){const t=bp(e.mapValue.fields.__local_write_time__.timestampValue);return new lp(t.seconds,t.nanos)}
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
 */class Cp{constructor(e,t,n,r,s,i,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ap{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ap("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Ap&&e.projectId===this.projectId&&e.database===this.database}}
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
 */function Np(e){return null==e}function Op(e){return 0===e&&1/e==-1/0}
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
class Rp{constructor(e){this.path=e}static fromPath(e){return new Rp(gp.fromString(e))}static fromName(e){return new Rp(gp.fromString(e).popFirst(5))}static empty(){return new Rp(gp.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===gp.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return gp.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Rp(new gp(e.slice()))}}function Dp(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ip(e)?4:10:Hf()}function xp(e,t){if(e===t)return!0;const n=Dp(e);if(n!==Dp(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return kp(e).isEqual(kp(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=bp(e.timestampValue),r=bp(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Tp(e.bytesValue).isEqual(Tp(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ep(e.geoPointValue.latitude)===Ep(t.geoPointValue.latitude)&&Ep(e.geoPointValue.longitude)===Ep(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ep(e.integerValue)===Ep(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ep(e.doubleValue),r=Ep(t.doubleValue);return n===r?Op(n)===Op(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return cp(e.arrayValue.values||[],t.arrayValue.values||[],xp);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(hp(n)!==hp(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!xp(n[s],r[s])))return!1;return!0}(e,t);default:return Hf()}var r}function Pp(e,t){return void 0!==(e.values||[]).find((e=>xp(e,t)))}function Lp(e,t){if(e===t)return 0;const n=Dp(e),r=Dp(t);if(n!==r)return ap(n,r);switch(n){case 0:return 0;case 1:return ap(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ep(e.integerValue||e.doubleValue),r=Ep(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Mp(e.timestampValue,t.timestampValue);case 4:return Mp(kp(e),kp(t));case 5:return ap(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Tp(e),r=Tp(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){const e=ap(n[s],r[s]);if(0!==e)return e}return ap(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=ap(Ep(e.latitude),Ep(t.latitude));return 0!==n?n:ap(Ep(e.longitude),Ep(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const e=Lp(n[s],r[s]);if(e)return e}return ap(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const e=ap(r[o],i[o]);if(0!==e)return e;const t=Lp(n[r[o]],s[i[o]]);if(0!==t)return t}return ap(r.length,i.length)}(e.mapValue,t.mapValue);default:throw Hf()}}function Mp(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ap(e,t);const n=bp(e),r=bp(t),s=ap(n.seconds,r.seconds);return 0!==s?s:ap(n.nanos,r.nanos)}function Up(e){return Vp(e)}function Vp(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=bp(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Tp(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Rp.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Vp(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${Vp(e.fields[s])}`;return n+"}"}(e.mapValue):Hf();var t,n}function Fp(e){return!!e&&"integerValue"in e}function jp(e){return!!e&&"arrayValue"in e}function Bp(e){return!!e&&"nullValue"in e}function qp(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function $p(e){return!!e&&"mapValue"in e}function Kp(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return dp(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Kp(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Kp(e.arrayValue.values[n]);return t}return Object.assign({},e)}
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
 */class Hp{constructor(e){this.value=e}static empty(){return new Hp({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!$p(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Kp(t)}setAll(e){let t=yp.emptyPath(),n={},r=[];e.forEach(((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=Kp(e):r.push(s.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());$p(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xp(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];$p(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){dp(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Hp(Kp(this.value))}}function zp(e){const t=[];return dp(e.fields,((e,n)=>{const r=new yp([e]);if($p(n)){const e=zp(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new vp(t)
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
 */}class Gp{constructor(e,t,n,r,s,i){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(e){return new Gp(e,0,up.min(),up.min(),Hp.empty(),0)}static newFoundDocument(e,t,n){return new Gp(e,1,t,up.min(),n,0)}static newNoDocument(e,t){return new Gp(e,2,t,up.min(),Hp.empty(),0)}static newUnknownDocument(e,t){return new Gp(e,3,t,up.min(),Hp.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Hp.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Hp.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Gp&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Gp(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Wp{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.P=null}}function Jp(e,t=null,n=[],r=[],s=null,i=null,o=null){return new Wp(e,t,n,r,s,i,o)}function Qp(e){const t=Gf(e);if(null===t.P){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+Up(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),Np(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Up(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Up(e))).join(",")),t.P=e}return t.P}function Xp(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let s=0;s<e.orderBy.length;s++)if(!ug(e.orderBy[s],t.orderBy[s]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let s=0;s<e.filters.length;s++)if(n=e.filters[s],r=t.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!xp(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!dg(e.startAt,t.startAt)&&dg(e.endAt,t.endAt)}function Yp(e){return Rp.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class Zp extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.v(e,t,n):new eg(e,t,n):"array-contains"===t?new sg(e,n):"in"===t?new ig(e,n):"not-in"===t?new og(e,n):"array-contains-any"===t?new ag(e,n):new Zp(e,t,n)}static v(e,t,n){return"in"===t?new tg(e,n):new ng(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.V(Lp(t,this.value)):null!==t&&Dp(this.value)===Dp(t)&&this.V(Lp(t,this.value))}V(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Hf()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class eg extends Zp{constructor(e,t,n){super(e,t,n),this.key=Rp.fromName(n.referenceValue)}matches(e){const t=Rp.comparator(e.key,this.key);return this.V(t)}}class tg extends Zp{constructor(e,t){super(e,"in",t),this.keys=rg("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ng extends Zp{constructor(e,t){super(e,"not-in",t),this.keys=rg("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function rg(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Rp.fromName(e.referenceValue)))}class sg extends Zp{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return jp(t)&&Pp(t.arrayValue,this.value)}}class ig extends Zp{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Pp(this.value.arrayValue,t)}}class og extends Zp{constructor(e,t){super(e,"not-in",t)}matches(e){if(Pp(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Pp(this.value.arrayValue,t)}}class ag extends Zp{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!jp(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Pp(this.value.arrayValue,e)))}}class cg{constructor(e,t){this.position=e,this.inclusive=t}}class lg{constructor(e,t="asc"){this.field=e,this.dir=t}}function ug(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function hg(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?Rp.comparator(Rp.fromName(o.referenceValue),n.key):Lp(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function dg(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!xp(e.position[n],t.position[n]))return!1;return!0}
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
 */class fg{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function pg(e){return new fg(e)}function gg(e){return!Np(e.limit)&&"F"===e.limitType}function mg(e){return!Np(e.limit)&&"L"===e.limitType}function yg(e){const t=Gf(e);if(null===t.D){t.D=[];const e=function(e){for(const t of e.filters)if(t.S())return t.field;return null}(t),n=function(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new lg(e)),t.D.push(new lg(yp.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new lg(yp.keyField(),e))}}}return t.D}function vg(e){const t=Gf(e);if(!t.C)if("F"===t.limitType)t.C=Jp(t.path,t.collectionGroup,yg(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const s of yg(t)){const t="desc"===s.dir?"asc":"desc";e.push(new lg(s.field,t))}const n=t.endAt?new cg(t.endAt.position,!t.endAt.inclusive):null,r=t.startAt?new cg(t.startAt.position,!t.startAt.inclusive):null;t.C=Jp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.C}function wg(e,t){return Xp(vg(e),vg(t))&&e.limitType===t.limitType}function _g(e){return`${Qp(vg(e))}|lt:${e.limitType}`}function bg(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Up(t.value)}`;var t})).join(", ")}]`),Np(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Up(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Up(e))).join(",")),`Target(${t})`}(vg(e))}; limitType=${e.limitType})`}function Eg(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Rp.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=hg(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,yg(n),r)||n.endAt&&!function(e,t,n){const r=hg(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,yg(n),r)));var n,r}function Tg(e){return(t,n)=>{let r=!1;for(const s of yg(e)){const e=Ig(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function Ig(e,t,n){const r=e.field.isKeyField()?Rp.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?Lp(r,s):Hf()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Hf()}}
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
 */function Sg(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Op(t)?"-0":t}}function kg(e){return{integerValue:""+e}}function Cg(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Op(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?kg(t):Sg(e,t)}
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
 */class Ag{constructor(){this._=void 0}}function Ng(e,t,n){return e instanceof Dg?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof xg?Pg(e,t):e instanceof Lg?Mg(e,t):function(e,t){const n=Rg(e,t),r=Vg(n)+Vg(e.k);return Fp(n)&&Fp(e.k)?kg(r):Sg(e.O,r)}(e,t)}function Og(e,t,n){return e instanceof xg?Pg(e,t):e instanceof Lg?Mg(e,t):n}function Rg(e,t){return e instanceof Ug?Fp(r=t)||(n=r)&&"doubleValue"in n?t:{integerValue:0}:null;var n,r}class Dg extends Ag{}class xg extends Ag{constructor(e){super(),this.elements=e}}function Pg(e,t){const n=Fg(t);for(const r of e.elements)n.some((e=>xp(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Lg extends Ag{constructor(e){super(),this.elements=e}}function Mg(e,t){let n=Fg(t);for(const r of e.elements)n=n.filter((e=>!xp(e,r)));return{arrayValue:{values:n}}}class Ug extends Ag{constructor(e,t){super(),this.O=e,this.k=t}}function Vg(e){return Ep(e.integerValue||e.doubleValue)}function Fg(e){return jp(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class jg{constructor(e,t){this.version=e,this.transformResults=t}}class Bg{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Bg}static exists(e){return new Bg(void 0,e)}static updateTime(e){return new Bg(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qg(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class $g{}function Kg(e,t,n){var r;e instanceof Jg?function(e,t,n){const r=e.value.clone(),s=Yg(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Qg?function(e,t,n){if(!qg(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Yg(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Xg(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function Hg(e,t,n){var r;e instanceof Jg?function(e,t,n){if(!qg(e.precondition,t))return;const r=e.value.clone(),s=Zg(e.fieldTransforms,n,t);r.setAll(s),t.convertToFoundDocument(Wg(t),r).setHasLocalMutations()}(e,t,n):e instanceof Qg?function(e,t,n){if(!qg(e.precondition,t))return;const r=Zg(e.fieldTransforms,n,t),s=t.data;s.setAll(Xg(e)),s.setAll(r),t.convertToFoundDocument(Wg(t),s).setHasLocalMutations()}(e,t,n):(r=t,qg(e.precondition,r)&&r.convertToNoDocument(up.min()))}function zg(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=Rg(r.transform,e||null);null!=s&&(null==n&&(n=Hp.empty()),n.set(r.field,s))}return n||null}function Gg(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&cp(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof xg&&r instanceof xg||n instanceof Lg&&r instanceof Lg?cp(n.elements,r.elements,xp):n instanceof Ug&&r instanceof Ug?xp(n.k,r.k):n instanceof Dg&&r instanceof Dg);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}function Wg(e){return e.isFoundDocument()?e.version:up.min()}class Jg extends $g{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Qg extends $g{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}}function Xg(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Yg(e,t,n){const r=new Map;zf(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Og(o,a,n[s]))}return r}function Zg(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,Ng(e,i,t))}return r}class em extends $g{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class tm extends $g{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
 */class nm{constructor(e){this.count=e}}
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
 */var rm,sm;function im(e){if(void 0===e)return qf("GRPC error has no .code"),Wf.UNKNOWN;switch(e){case rm.OK:return Wf.OK;case rm.CANCELLED:return Wf.CANCELLED;case rm.UNKNOWN:return Wf.UNKNOWN;case rm.DEADLINE_EXCEEDED:return Wf.DEADLINE_EXCEEDED;case rm.RESOURCE_EXHAUSTED:return Wf.RESOURCE_EXHAUSTED;case rm.INTERNAL:return Wf.INTERNAL;case rm.UNAVAILABLE:return Wf.UNAVAILABLE;case rm.UNAUTHENTICATED:return Wf.UNAUTHENTICATED;case rm.INVALID_ARGUMENT:return Wf.INVALID_ARGUMENT;case rm.NOT_FOUND:return Wf.NOT_FOUND;case rm.ALREADY_EXISTS:return Wf.ALREADY_EXISTS;case rm.PERMISSION_DENIED:return Wf.PERMISSION_DENIED;case rm.FAILED_PRECONDITION:return Wf.FAILED_PRECONDITION;case rm.ABORTED:return Wf.ABORTED;case rm.OUT_OF_RANGE:return Wf.OUT_OF_RANGE;case rm.UNIMPLEMENTED:return Wf.UNIMPLEMENTED;case rm.DATA_LOSS:return Wf.DATA_LOSS;default:return Hf()}}(sm=rm||(rm={}))[sm.OK=0]="OK",sm[sm.CANCELLED=1]="CANCELLED",sm[sm.UNKNOWN=2]="UNKNOWN",sm[sm.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",sm[sm.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",sm[sm.NOT_FOUND=5]="NOT_FOUND",sm[sm.ALREADY_EXISTS=6]="ALREADY_EXISTS",sm[sm.PERMISSION_DENIED=7]="PERMISSION_DENIED",sm[sm.UNAUTHENTICATED=16]="UNAUTHENTICATED",sm[sm.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",sm[sm.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",sm[sm.ABORTED=10]="ABORTED",sm[sm.OUT_OF_RANGE=11]="OUT_OF_RANGE",sm[sm.UNIMPLEMENTED=12]="UNIMPLEMENTED",sm[sm.INTERNAL=13]="INTERNAL",sm[sm.UNAVAILABLE=14]="UNAVAILABLE",sm[sm.DATA_LOSS=15]="DATA_LOSS";
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
class om{constructor(e,t){this.comparator=e,this.root=t||cm.EMPTY}insert(e,t){return new om(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,cm.BLACK,null,null))}remove(e){return new om(this.comparator,this.root.remove(e,this.comparator).copy(null,null,cm.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new am(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new am(this.root,e,this.comparator,!1)}getReverseIterator(){return new am(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new am(this.root,e,this.comparator,!0)}}class am{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class cm{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:cm.RED,this.left=null!=r?r:cm.EMPTY,this.right=null!=s?s:cm.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new cm(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return cm.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return cm.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,cm.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,cm.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Hf();if(this.right.isRed())throw Hf();const e=this.left.check();if(e!==this.right.check())throw Hf();return e+(this.isRed()?0:1)}}cm.EMPTY=null,cm.RED=!0,cm.BLACK=!1,cm.EMPTY=new class{constructor(){this.size=0}get key(){throw Hf()}get value(){throw Hf()}get color(){throw Hf()}get left(){throw Hf()}get right(){throw Hf()}copy(e,t,n,r,s){return this}insert(e,t,n){return new cm(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class lm{constructor(e){this.comparator=e,this.data=new om(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new um(this.data.getIterator())}getIteratorFrom(e){return new um(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof lm))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new lm(this.comparator);return t.data=e,t}}class um{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */const hm=new om(Rp.comparator);function dm(){return hm}const fm=new om(Rp.comparator);function pm(){return fm}const gm=new om(Rp.comparator),mm=new lm(Rp.comparator);function ym(...e){let t=mm;for(const n of e)t=t.add(n);return t}const vm=new lm(ap);function wm(){return vm}
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
 */class _m{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,bm.createSynthesizedTargetChangeForCurrentChange(e,t)),new _m(up.min(),n,wm(),dm(),ym())}}class bm{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t){return new bm(wp.EMPTY_BYTE_STRING,t,ym(),ym(),ym())}}
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
 */class Em{constructor(e,t,n,r){this.M=e,this.removedTargetIds=t,this.key=n,this.$=r}}class Tm{constructor(e,t){this.targetId=e,this.F=t}}class Im{constructor(e,t,n=wp.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Sm{constructor(){this.B=0,this.L=Am(),this.U=wp.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(e){e.approximateByteSize()>0&&(this.K=!0,this.U=e)}H(){let e=ym(),t=ym(),n=ym();return this.L.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Hf()}})),new bm(this.U,this.q,e,t,n)}J(){this.K=!1,this.L=Am()}Y(e,t){this.K=!0,this.L=this.L.insert(e,t)}X(e){this.K=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class km{constructor(e){this.nt=e,this.st=new Map,this.it=dm(),this.rt=Cm(),this.ot=new lm(ap)}ct(e){for(const t of e.M)e.$&&e.$.isFoundDocument()?this.ut(t,e.$):this.at(t,e.key,e.$);for(const t of e.removedTargetIds)this.at(t,e.key,e.$)}ht(e){this.forEachTarget(e,(t=>{const n=this.lt(t);switch(e.state){case 0:this.ft(t)&&n.W(e.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(e.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(t);break;case 3:this.ft(t)&&(n.et(),n.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),n.W(e.resumeToken));break;default:Hf()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach(((e,n)=>{this.ft(n)&&t(n)}))}_t(e){const t=e.targetId,n=e.F.count,r=this.wt(t);if(r){const e=r.target;if(Yp(e))if(0===n){const n=new Rp(e.path);this.at(t,n,Gp.newNoDocument(n,up.min()))}else zf(1===n);else this.gt(t)!==n&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach(((n,r)=>{const s=this.wt(r);if(s){if(n.current&&Yp(s.target)){const t=new Rp(s.target.path);null!==this.it.get(t)||this.It(r,t)||this.at(r,t,Gp.newNoDocument(t,e))}n.j&&(t.set(r,n.H()),n.J())}}));let n=ym();this.rt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.it.forEach(((t,n)=>n.setReadTime(e)));const r=new _m(e,t,this.ot,this.it,n);return this.it=dm(),this.rt=Cm(),this.ot=new lm(ap),r}ut(e,t){if(!this.ft(e))return;const n=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,n),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Et(t.key).add(e))}at(e,t,n){if(!this.ft(e))return;const r=this.lt(e);this.It(e,t)?r.Y(t,1):r.X(t),this.rt=this.rt.insert(t,this.Et(t).delete(e)),n&&(this.it=this.it.insert(t,n))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new Sm,this.st.set(e,t)),t}Et(e){let t=this.rt.get(e);return t||(t=new lm(ap),this.rt=this.rt.insert(e,t)),t}ft(e){const t=null!==this.wt(e);return t||Bf("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.G?null:this.nt.Tt(e)}dt(e){this.st.set(e,new Sm),this.nt.getRemoteKeysForTarget(e).forEach((t=>{this.at(e,t,null)}))}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function Cm(){return new om(Rp.comparator)}function Am(){return new om(Rp.comparator)}
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
 */const Nm={asc:"ASCENDING",desc:"DESCENDING"},Om={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Rm{constructor(e,t){this.databaseId=e,this.N=t}}function Dm(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function xm(e,t){return e.N?t.toBase64():t.toUint8Array()}function Pm(e,t){return Dm(e,t.toTimestamp())}function Lm(e){return zf(!!e),up.fromTimestamp(function(e){const t=bp(e);return new lp(t.seconds,t.nanos)}(e))}function Mm(e,t){return(n=e,new gp(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Um(e){const t=gp.fromString(e);return zf(ty(t)),t}function Vm(e,t){return Mm(e.databaseId,t.path)}function Fm(e,t){const n=Um(t);if(n.get(1)!==e.databaseId.projectId)throw new Jf(Wf.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Jf(Wf.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Rp(qm(n))}function jm(e,t){return Mm(e.databaseId,t)}function Bm(e){return new gp(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function qm(e){return zf(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function $m(e,t,n){return{name:Vm(e,t),fields:n.value.mapValue.fields}}function Km(e,t){return{documents:[jm(e,t.path)]}}function Hm(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=jm(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=jm(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(qp(e.value))return{unaryFilter:{field:Qm(e.field),op:"IS_NAN"}};if(Bp(e.value))return{unaryFilter:{field:Qm(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(qp(e.value))return{unaryFilter:{field:Qm(e.field),op:"IS_NOT_NAN"}};if(Bp(e.value))return{unaryFilter:{field:Qm(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qm(e.field),op:Jm(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);s&&(n.structuredQuery.where=s);const i=function(e){if(0!==e.length)return e.map((e=>{return{field:Qm((t=e).field),direction:Wm(t.dir)};var t}))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=(a=e,c=t.limit,a.N||Np(c)?c:{value:c});var a,c,l;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function zm(e){let t=function(e){const t=Um(e);return 4===t.length?gp.emptyPath():qm(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){zf(1===r);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=Gm(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>{return new lg(Xm((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Np(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new cg(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new cg(n,t)}(n.endAt)),function(e,t,n,r,s,i,o,a){return new fg(e,t,n,r,s,i,o,a)}(t,s,o,i,a,"F",c,l)}function Gm(e){return e?void 0!==e.unaryFilter?[Zm(e)]:void 0!==e.fieldFilter?[Ym(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>Gm(e))).reduce(((e,t)=>e.concat(t))):Hf():[]}function Wm(e){return Nm[e]}function Jm(e){return Om[e]}function Qm(e){return{fieldPath:e.canonicalString()}}function Xm(e){return yp.fromServerFormat(e.fieldPath)}function Ym(e){return Zp.create(Xm(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Hf()}}(e.fieldFilter.op),e.fieldFilter.value)}function Zm(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Xm(e.unaryFilter.field);return Zp.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Xm(e.unaryFilter.field);return Zp.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Xm(e.unaryFilter.field);return Zp.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Xm(e.unaryFilter.field);return Zp.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Hf()}}function ey(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function ty(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
class ny{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Hf(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ny(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ny?t:ny.resolve(t)}catch(t){return ny.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ny.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ny.reject(t)}static resolve(e){return new ny(((t,n)=>{t(e)}))}static reject(e){return new ny(((t,n)=>{n(e)}))}static waitFor(e){return new ny(((t,n)=>{let r=0,s=0,i=!1;e.forEach((e=>{++r,e.next((()=>{++s,i&&s===r&&t()}),(e=>n(e)))})),i=!0,s===r&&t()}))}static or(e){let t=ny.resolve(!1);for(const n of e)t=t.next((e=>e?ny.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}function ry(e){return"IndexedDbTransactionError"===e.name}
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
 */class sy{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&Kg(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Hg(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Hg(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(up.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ym())}isEqual(e){return this.batchId===e.batchId&&cp(this.mutations,e.mutations,((e,t)=>Gg(e,t)))&&cp(this.baseMutations,e.baseMutations,((e,t)=>Gg(e,t)))}}class iy{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){zf(e.mutations.length===n.length);let r=gm;const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new iy(e,t,n,r)}}
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
 */class oy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
 */class ay{constructor(e,t,n,r,s=up.min(),i=up.min(),o=wp.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o}withSequenceNumber(e){return new ay(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new ay(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ay(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
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
 */class cy{constructor(e){this.Ht=e}}function ly(e){const t=zm({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?function(e,t,n){return new fg(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}(t,t.limit,"L"):t}
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
 */class uy{constructor(){this.xe=new hy}addToCollectionParentIndex(e,t){return this.xe.add(t),ny.resolve()}getCollectionParents(e,t){return ny.resolve(this.xe.getEntries(t))}addFieldIndex(e,t){return ny.resolve()}deleteFieldIndex(e,t){return ny.resolve()}getDocumentsMatchingTarget(e,t,n){return ny.resolve(ym())}getFieldIndex(e,t){return ny.resolve(null)}getFieldIndexes(e,t){return ny.resolve([])}getNextCollectionGroupToUpdate(e){return ny.resolve(null)}updateCollectionGroup(e,t,n){return ny.resolve()}updateIndexEntries(e,t){return ny.resolve()}}class hy{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new lm(gp.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new lm(gp.comparator)).toArray()}}
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
 */class dy{constructor(e){this.ze=e}next(){return this.ze+=2,this.ze}static He(){return new dy(0)}static Je(){return new dy(-1)}}
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
 */async function fy(e){if(e.code!==Wf.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;Bf("LocalStore","Unexpectedly lost primary lease")}
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
 */class py{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){dp(this.inner,((t,n)=>{for(const[r,s]of n)e(r,s)}))}isEmpty(){return fp(this.inner)}}
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
class gy{constructor(e,t,n){this.qn=e,this.gs=t,this.indexManager=n}ys(e,t){return this.gs.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.ps(e,t,n)))}ps(e,t,n){return this.qn.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}Is(e,t){e.forEach(((e,n)=>{for(const r of t)r.applyToLocalView(n)}))}Es(e,t){return this.qn.getEntries(e,t).next((t=>this.Ts(e,t).next((()=>t))))}Ts(e,t){return this.gs.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.Is(t,e)))}As(e,t,n){return r=t,Rp.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.Rs(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.Ps(e,t,n):this.bs(e,t,n);var r}Rs(e,t){return this.ys(e,new Rp(t)).next((e=>{let t=pm();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Ps(e,t,n){const r=t.collectionGroup;let s=pm();return this.indexManager.getCollectionParents(e,r).next((i=>ny.forEach(i,(i=>{const o=(a=t,c=i.child(r),new fg(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.bs(e,o,n).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}bs(e,t,n){let r;return this.qn.getAll(e,t.path,n).next((n=>(r=n,this.gs.getAllMutationBatchesAffectingQuery(e,t)))).next((e=>{for(const t of e)for(const e of t.mutations){const n=e.key;let s=r.get(n);null==s&&(s=Gp.newInvalidDocument(n),r=r.insert(n,s)),Hg(e,s,t.localWriteTime),s.isFoundDocument()||(r=r.remove(n))}})).next((()=>(r.forEach(((e,n)=>{Eg(t,n)||(r=r.remove(e))})),r)))}}
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
 */class my{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.vs=n,this.Vs=r}static Ss(e,t){let n=ym(),r=ym();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new my(e,t.fromCache,n,r)}}
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
 */class yy{Ds(e){this.Cs=e}As(e,t,n,r){return 0===(s=t).filters.length&&null===s.limit&&null==s.startAt&&null==s.endAt&&(0===s.explicitOrderBy.length||1===s.explicitOrderBy.length&&s.explicitOrderBy[0].field.isKeyField())||n.isEqual(up.min())?this.Ns(e,t):this.Cs.Es(e,r).next((s=>{const i=this.xs(t,s);return(gg(t)||mg(t))&&this.ks(t.limitType,i,r,n)?this.Ns(e,t):(jf()<=wo.DEBUG&&Bf("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),bg(t)),this.Cs.As(e,t,n).next((e=>(i.forEach((t=>{e=e.insert(t.key,t)})),e))))}));var s}xs(e,t){let n=new lm(Tg(e));return t.forEach(((t,r)=>{Eg(e,r)&&(n=n.add(r))})),n}ks(e,t,n,r){if(n.size!==t.size)return!0;const s="F"===e?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ns(e,t){return jf()<=wo.DEBUG&&Bf("QueryEngine","Using full collection scan to execute query:",bg(t)),this.Cs.As(e,t,up.min())}}
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
 */class vy{constructor(e,t,n,r){this.persistence=e,this.Os=t,this.O=r,this.Ms=new om(ap),this.$s=new py((e=>Qp(e)),Xp),this.Fs=up.min(),this.Bs=e.getRemoteDocumentCache(),this.Un=e.getTargetCache(),this.Kn=e.getBundleCache(),this.Ls(n)}Ls(e){this.indexManager=this.persistence.getIndexManager(e),this.gs=this.persistence.getMutationQueue(e,this.indexManager),this.Us=new gy(this.Bs,this.gs,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Os.Ds(this.Us)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}async function wy(e,t){const n=Gf(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.gs.getAllMutationBatches(e).next((s=>(r=s,n.Ls(t),n.gs.getAllMutationBatches(e)))).next((t=>{const s=[],i=[];let o=ym();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.Us.Es(e,o).next((e=>({qs:e,removedBatchIds:s,addedBatchIds:i})))}))}))}function _y(e){const t=Gf(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Un.getLastRemoteSnapshotVersion(e)))}function by(e,t){const n=Gf(e),r=t.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.Bs.newChangeBuffer({trackRemovals:!0});s=n.Ms;const o=[];t.targetChanges.forEach(((i,a)=>{const c=s.get(a);if(!c)return;o.push(n.Un.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.Un.addMatchingKeys(e,i.addedDocuments,a))));let l=c.withSequenceNumber(e.currentSequenceNumber);var u,h,d;t.targetMismatches.has(a)?l=l.withResumeToken(wp.EMPTY_BYTE_STRING,up.min()).withLastLimboFreeSnapshotVersion(up.min()):i.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(i.resumeToken,r)),s=s.insert(a,l),h=l,d=i,(0===(u=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-u.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Un.updateTargetData(e,l))}));let a=dm();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(function(e,t,n){let r=ym();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=dm();return n.forEach(((n,s)=>{const i=e.get(n);s.isNoDocument()&&s.version.isEqual(up.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!i.isValidDocument()||s.version.compareTo(i.version)>0||0===s.version.compareTo(i.version)&&i.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):Bf("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",s.version)})),r}))}(e,i,t.documentUpdates).next((e=>{a=e}))),!r.isEqual(up.min())){const t=n.Un.getLastRemoteSnapshotVersion(e).next((t=>n.Un.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return ny.waitFor(o).next((()=>i.apply(e))).next((()=>n.Us.Ts(e,a))).next((()=>a))})).then((e=>(n.Ms=s,e)))}function Ey(e,t){const n=Gf(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.gs.getNextMutationBatchAfterBatchId(e,t))))}async function Ty(e,t,n){const r=Gf(e),s=r.Ms.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(e=>r.persistence.referenceDelegate.removeTarget(e,s)))}catch(o){if(!ry(o))throw o;Bf("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.Ms=r.Ms.remove(t),r.$s.delete(s.target)}function Iy(e,t,n){const r=Gf(e);let s=up.min(),i=ym();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Gf(e),s=r.$s.get(n);return void 0!==s?ny.resolve(r.Ms.get(s)):r.Un.getTargetData(t,n)}(r,e,vg(t)).next((t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.Un.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>r.Os.As(e,t,n?s:up.min(),n?i:ym()))).next((e=>({documents:e,Ks:i})))))}
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
 */class Sy{constructor(e){this.O=e,this.Ws=new Map,this.zs=new Map}getBundleMetadata(e,t){return ny.resolve(this.Ws.get(t))}saveBundleMetadata(e,t){var n;return this.Ws.set(t.id,{id:(n=t).id,version:n.version,createTime:Lm(n.createTime)}),ny.resolve()}getNamedQuery(e,t){return ny.resolve(this.zs.get(t))}saveNamedQuery(e,t){return this.zs.set(t.name,{name:(n=t).name,query:ly(n.bundledQuery),readTime:Lm(n.readTime)}),ny.resolve();var n}}
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
 */class ky{constructor(){this.overlays=new om(Rp.comparator),this.Hs=new Map}getOverlay(e,t){return ny.resolve(this.overlays.get(t))}saveOverlays(e,t,n){return n.forEach((n=>{this.Yt(e,t,n)})),ny.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Hs.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Hs.delete(n)),ny.resolve()}getOverlaysForCollection(e,t,n){const r=new Map,s=t.length+1,i=new Rp(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return ny.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new om(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=new Map,s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=new Map,a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(t,e))),!(o.size>=r)););return ny.resolve(o)}Yt(e,t,n){if(null===n)return;const r=this.overlays.get(n.key);null!==r&&this.Hs.get(r.largestBatchId).delete(n.key),this.overlays=this.overlays.insert(n.key,new oy(t,n));let s=this.Hs.get(t);void 0===s&&(s=new Set,this.Hs.set(t,s)),s.add(n.key)}}
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
 */class Cy{constructor(){this.Js=new lm(Ay.Ys),this.Xs=new lm(Ay.Zs)}isEmpty(){return this.Js.isEmpty()}addReference(e,t){const n=new Ay(e,t);this.Js=this.Js.add(n),this.Xs=this.Xs.add(n)}ti(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ei(new Ay(e,t))}ni(e,t){e.forEach((e=>this.removeReference(e,t)))}si(e){const t=new Rp(new gp([])),n=new Ay(t,e),r=new Ay(t,e+1),s=[];return this.Xs.forEachInRange([n,r],(e=>{this.ei(e),s.push(e.key)})),s}ii(){this.Js.forEach((e=>this.ei(e)))}ei(e){this.Js=this.Js.delete(e),this.Xs=this.Xs.delete(e)}ri(e){const t=new Rp(new gp([])),n=new Ay(t,e),r=new Ay(t,e+1);let s=ym();return this.Xs.forEachInRange([n,r],(e=>{s=s.add(e.key)})),s}containsKey(e){const t=new Ay(e,0),n=this.Js.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Ay{constructor(e,t){this.key=e,this.oi=t}static Ys(e,t){return Rp.comparator(e.key,t.key)||ap(e.oi,t.oi)}static Zs(e,t){return ap(e.oi,t.oi)||Rp.comparator(e.key,t.key)}}
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
 */class Ny{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.gs=[],this.ci=1,this.ui=new lm(Ay.Ys)}checkEmpty(e){return ny.resolve(0===this.gs.length)}addMutationBatch(e,t,n,r){const s=this.ci;this.ci++,this.gs.length>0&&this.gs[this.gs.length-1];const i=new sy(s,t,n,r);this.gs.push(i);for(const o of r)this.ui=this.ui.add(new Ay(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return ny.resolve(i)}lookupMutationBatch(e,t){return ny.resolve(this.ai(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.hi(n),s=r<0?0:r;return ny.resolve(this.gs.length>s?this.gs[s]:null)}getHighestUnacknowledgedBatchId(){return ny.resolve(0===this.gs.length?-1:this.ci-1)}getAllMutationBatches(e){return ny.resolve(this.gs.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ay(t,0),r=new Ay(t,Number.POSITIVE_INFINITY),s=[];return this.ui.forEachInRange([n,r],(e=>{const t=this.ai(e.oi);s.push(t)})),ny.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new lm(ap);return t.forEach((e=>{const t=new Ay(e,0),r=new Ay(e,Number.POSITIVE_INFINITY);this.ui.forEachInRange([t,r],(e=>{n=n.add(e.oi)}))})),ny.resolve(this.li(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;Rp.isDocumentKey(s)||(s=s.child(""));const i=new Ay(new Rp(s),0);let o=new lm(ap);return this.ui.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.oi)),!0)}),i),ny.resolve(this.li(o))}li(e){const t=[];return e.forEach((e=>{const n=this.ai(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){zf(0===this.fi(t.batchId,"removed")),this.gs.shift();let n=this.ui;return ny.forEach(t.mutations,(r=>{const s=new Ay(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ui=n}))}Qe(e){}containsKey(e,t){const n=new Ay(t,0),r=this.ui.firstAfterOrEqual(n);return ny.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.gs.length,ny.resolve()}fi(e,t){return this.hi(e)}hi(e){return 0===this.gs.length?0:e-this.gs[0].batchId}ai(e){const t=this.hi(e);return t<0||t>=this.gs.length?null:this.gs[t]}}
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
 */class Oy{constructor(e){this.di=e,this.docs=new om(Rp.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.di(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return ny.resolve(n?n.document.mutableCopy():Gp.newInvalidDocument(t))}getEntries(e,t){let n=dm();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Gp.newInvalidDocument(e))})),ny.resolve(n)}getAll(e,t,n){let r=dm();const s=new Rp(t.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:e,value:{document:s}}=i.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||s.readTime.compareTo(n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return ny.resolve(r)}_i(e,t){return ny.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Ry(this)}getSize(e){return ny.resolve(this.size)}}class Ry extends class{constructor(){this.changes=new py((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Gp.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?ny.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}{constructor(e){super(),this.Tn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Tn.addEntry(e,r)):this.Tn.removeEntry(n)})),ny.waitFor(t)}getFromCache(e,t){return this.Tn.getEntry(e,t)}getAllFromCache(e,t){return this.Tn.getEntries(e,t)}}
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
 */class Dy{constructor(e){this.persistence=e,this.wi=new py((e=>Qp(e)),Xp),this.lastRemoteSnapshotVersion=up.min(),this.highestTargetId=0,this.mi=0,this.gi=new Cy,this.targetCount=0,this.yi=dy.He()}forEachTarget(e,t){return this.wi.forEach(((e,n)=>t(n))),ny.resolve()}getLastRemoteSnapshotVersion(e){return ny.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ny.resolve(this.mi)}allocateTargetId(e){return this.highestTargetId=this.yi.next(),ny.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.mi&&(this.mi=t),ny.resolve()}Ze(e){this.wi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.yi=new dy(t),this.highestTargetId=t),e.sequenceNumber>this.mi&&(this.mi=e.sequenceNumber)}addTargetData(e,t){return this.Ze(t),this.targetCount+=1,ny.resolve()}updateTargetData(e,t){return this.Ze(t),ny.resolve()}removeTargetData(e,t){return this.wi.delete(t.target),this.gi.si(t.targetId),this.targetCount-=1,ny.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.wi.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.wi.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),ny.waitFor(s).next((()=>r))}getTargetCount(e){return ny.resolve(this.targetCount)}getTargetData(e,t){const n=this.wi.get(t)||null;return ny.resolve(n)}addMatchingKeys(e,t,n){return this.gi.ti(t,n),ny.resolve()}removeMatchingKeys(e,t,n){this.gi.ni(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((t=>{s.push(r.markPotentiallyOrphaned(e,t))})),ny.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.gi.si(t),ny.resolve()}getMatchingKeysForTargetId(e,t){const n=this.gi.ri(t);return ny.resolve(n)}containsKey(e,t){return ny.resolve(this.gi.containsKey(t))}}
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
 */class xy{constructor(e,t){this.pi={},this.overlays={},this.Nn=new sp(0),this.xn=!1,this.xn=!0,this.referenceDelegate=e(this),this.Un=new Dy(this),this.indexManager=new uy,this.qn=new Oy((e=>this.referenceDelegate.Ii(e))),this.O=new cy(t),this.Kn=new Sy(this.O)}start(){return Promise.resolve()}shutdown(){return this.xn=!1,Promise.resolve()}get started(){return this.xn}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ky,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.pi[e.toKey()];return n||(n=new Ny(t,this.referenceDelegate),this.pi[e.toKey()]=n),n}getTargetCache(){return this.Un}getRemoteDocumentCache(){return this.qn}getBundleCache(){return this.Kn}runTransaction(e,t,n){Bf("MemoryPersistence","Starting transaction:",e);const r=new Py(this.Nn.next());return this.referenceDelegate.Ei(),n(r).next((e=>this.referenceDelegate.Ti(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ai(e,t){return ny.or(Object.values(this.pi).map((n=>()=>n.containsKey(e,t))))}}class Py extends class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}{constructor(e){super(),this.currentSequenceNumber=e}}class Ly{constructor(e){this.persistence=e,this.Ri=new Cy,this.Pi=null}static bi(e){return new Ly(e)}get vi(){if(this.Pi)return this.Pi;throw Hf()}addReference(e,t,n){return this.Ri.addReference(n,t),this.vi.delete(n.toString()),ny.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.vi.add(n.toString()),ny.resolve()}markPotentiallyOrphaned(e,t){return this.vi.add(t.toString()),ny.resolve()}removeTarget(e,t){this.Ri.si(t.targetId).forEach((e=>this.vi.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.vi.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ei(){this.Pi=new Set}Ti(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ny.forEach(this.vi,(n=>{const r=Rp.fromPath(n);return this.Vi(e,r).next((e=>{e||t.removeEntry(r,up.min())}))})).next((()=>(this.Pi=null,t.apply(e))))}updateLimboDocument(e,t){return this.Vi(e,t).next((e=>{e?this.vi.delete(t.toString()):this.vi.add(t.toString())}))}Ii(e){return 0}Vi(e,t){return ny.or([()=>ny.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class My{constructor(){this.activeTargetIds=wm()}Ci(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ni(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Di(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Uy{constructor(){this._r=new My,this.wr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this._r.Ci(e),this.wr[e]||"not-current"}updateQueryState(e,t,n){this.wr[e]=t}removeLocalQueryTarget(e){this._r.Ni(e)}isLocalQueryTarget(e){return this._r.activeTargetIds.has(e)}clearQueryState(e){delete this.wr[e]}getAllActiveQueryTargets(){return this._r.activeTargetIds}isActiveQueryTarget(e){return this._r.activeTargetIds.has(e)}start(){return this._r=new My,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
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
 */class Vy{mr(e){}shutdown(){}}
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
 */class Fy{constructor(){this.gr=()=>this.yr(),this.pr=()=>this.Ir(),this.Er=[],this.Tr()}mr(e){this.Er.push(e)}shutdown(){window.removeEventListener("online",this.gr),window.removeEventListener("offline",this.pr)}Tr(){window.addEventListener("online",this.gr),window.addEventListener("offline",this.pr)}yr(){Bf("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Er)e(0)}Ir(){Bf("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Er)e(1)}static Vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const jy={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class By{constructor(e){this.Ar=e.Ar,this.Rr=e.Rr}Pr(e){this.br=e}vr(e){this.Vr=e}onMessage(e){this.Sr=e}close(){this.Rr()}send(e){this.Ar(e)}Dr(){this.br()}Cr(e){this.Vr(e)}Nr(e){this.Sr(e)}}
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
 */class qy extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.kr=t+"://"+e.host,this.Or="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Mr(e,t,n,r,s){const i=this.$r(e,t);Bf("RestConnection","Sending: ",i,n);const o={};return this.Fr(o,r,s),this.Br(e,i,o,n).then((e=>(Bf("RestConnection","Received: ",e),e)),(t=>{throw $f("RestConnection",`${e} failed with error: `,t,"url: ",i,"request:",n),t}))}Lr(e,t,n,r,s){return this.Mr(e,t,n,r,s)}Fr(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Vf,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}$r(e,t){const n=jy[e];return`${this.kr}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Br(e,t,n,r){return new Promise(((s,i)=>{const o=new Lf;o.listenOnce(Nf.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Af.NO_ERROR:const t=o.getResponseJson();Bf("Connection","XHR received:",JSON.stringify(t)),s(t);break;case Af.TIMEOUT:Bf("Connection",'RPC "'+e+'" timed out'),i(new Jf(Wf.DEADLINE_EXCEEDED,"Request time out"));break;case Af.HTTP_ERROR:const n=o.getStatus();if(Bf("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Wf).indexOf(t)>=0?t:Wf.UNKNOWN}(e.status);i(new Jf(t,e.message))}else i(new Jf(Wf.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new Jf(Wf.UNAVAILABLE,"Connection failed."));break;default:Hf()}}finally{Bf("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}Ur(e,t,n){const r=[this.kr,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=new Tf,i=mh(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new xf({})),this.Fr(o.initMessageHeaders,t,n),no()||so()||to().indexOf("Electron/")>=0||io()||to().indexOf("MSAppHost/")>=0||ro()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=r.join("");Bf("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let l=!1,u=!1;const h=new By({Ar:e=>{u?Bf("Connection","Not sending because WebChannel is closed:",e):(l||(Bf("Connection","Opening WebChannel transport."),c.open(),l=!0),Bf("Connection","WebChannel sending:",e),c.send(e))},Rr:()=>c.close()}),d=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,Pf.EventType.OPEN,(()=>{u||Bf("Connection","WebChannel transport opened.")})),d(c,Pf.EventType.CLOSE,(()=>{u||(u=!0,Bf("Connection","WebChannel transport closed"),h.Cr())})),d(c,Pf.EventType.ERROR,(e=>{u||(u=!0,$f("Connection","WebChannel transport errored:",e),h.Cr(new Jf(Wf.UNAVAILABLE,"The operation could not be completed")))})),d(c,Pf.EventType.MESSAGE,(e=>{var t;if(!u){const n=e.data[0];zf(!!n);const r=n,s=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(s){Bf("Connection","WebChannel received error:",s);const e=s.status;let t=function(e){const t=rm[e];if(void 0!==t)return im(t)}(e),n=s.message;void 0===t&&(t=Wf.INTERNAL,n="Unknown error status: "+e+" with message "+s.message),u=!0,h.Cr(new Jf(t,n)),c.close()}else Bf("Connection","WebChannel received:",n),h.Nr(n)}})),d(i,Of.STAT_EVENT,(e=>{e.stat===Rf?Bf("Connection","Detected buffering proxy"):e.stat===Df&&Bf("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.Dr()}),0),h}}function $y(){return"undefined"!=typeof document?document:null}
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
 */function Ky(e){return new Rm(e,!0)}class Hy{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Sn=e,this.timerId=t,this.qr=n,this.Kr=r,this.Gr=s,this.jr=0,this.Qr=null,this.Wr=Date.now(),this.reset()}reset(){this.jr=0}zr(){this.jr=this.Gr}Hr(e){this.cancel();const t=Math.floor(this.jr+this.Jr()),n=Math.max(0,Date.now()-this.Wr),r=Math.max(0,t-n);r>0&&Bf("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.jr} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Qr=this.Sn.enqueueAfterDelay(this.timerId,r,(()=>(this.Wr=Date.now(),e()))),this.jr*=this.Kr,this.jr<this.qr&&(this.jr=this.qr),this.jr>this.Gr&&(this.jr=this.Gr)}Yr(){null!==this.Qr&&(this.Qr.skipDelay(),this.Qr=null)}cancel(){null!==this.Qr&&(this.Qr.cancel(),this.Qr=null)}Jr(){return(Math.random()-.5)*this.jr}}
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
 */class zy{constructor(e,t,n,r,s,i,o,a){this.Sn=e,this.Xr=n,this.Zr=r,this.eo=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.no=0,this.so=null,this.io=null,this.stream=null,this.ro=new Hy(e,t)}oo(){return 1===this.state||5===this.state||this.co()}co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.uo()}async stop(){this.oo()&&await this.close(0)}ao(){this.state=0,this.ro.reset()}ho(){this.co()&&null===this.so&&(this.so=this.Sn.enqueueAfterDelay(this.Xr,6e4,(()=>this.lo())))}fo(e){this._o(),this.stream.send(e)}async lo(){if(this.co())return this.close(0)}_o(){this.so&&(this.so.cancel(),this.so=null)}wo(){this.io&&(this.io.cancel(),this.io=null)}async close(e,t){this._o(),this.wo(),this.ro.cancel(),this.no++,4!==e?this.ro.reset():t&&t.code===Wf.RESOURCE_EXHAUSTED?(qf(t.toString()),qf("Using maximum backoff delay to prevent overloading the backend."),this.ro.zr()):t&&t.code===Wf.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.mo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.vr(t)}mo(){}auth(){this.state=1;const e=this.yo(this.no),t=this.no;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.no===t&&this.po(e,n)}),(t=>{e((()=>{const e=new Jf(Wf.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Io(e)}))}))}po(e,t){const n=this.yo(this.no);this.stream=this.Eo(e,t),this.stream.Pr((()=>{n((()=>(this.state=2,this.io=this.Sn.enqueueAfterDelay(this.Zr,1e4,(()=>(this.co()&&(this.state=3),Promise.resolve()))),this.listener.Pr())))})),this.stream.vr((e=>{n((()=>this.Io(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}uo(){this.state=5,this.ro.Hr((async()=>{this.state=0,this.start()}))}Io(e){return Bf("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}yo(e){return t=>{this.Sn.enqueueAndForget((()=>this.no===e?t():(Bf("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Gy extends zy{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.O=s}Eo(e,t){return this.eo.Ur("Listen",e,t)}onMessage(e){this.ro.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:Hf(),i=t.targetChange.targetIds||[],o=function(e,t){return e.N?(zf(void 0===t||"string"==typeof t),wp.fromBase64String(t||"")):(zf(void 0===t||t instanceof Uint8Array),wp.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(e){const t=void 0===e.code?Wf.UNKNOWN:im(e.code);return new Jf(t,e.message||"")}(a);n=new Im(s,i,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Fm(e,r.document.name),i=Lm(r.document.updateTime),o=new Hp({mapValue:{fields:r.document.fields}}),a=Gp.newFoundDocument(s,i,o),c=r.targetIds||[],l=r.removedTargetIds||[];n=new Em(c,l,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Fm(e,r.document),i=r.readTime?Lm(r.readTime):up.min(),o=Gp.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Em([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Fm(e,r.document),i=r.removedTargetIds||[];n=new Em([],i,s,null)}else{if(!("filter"in t))return Hf();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,s=new nm(r),i=e.targetId;n=new Tm(i,s)}}var r;return n}(this.O,e),n=function(e){if(!("targetChange"in e))return up.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?up.min():t.readTime?Lm(t.readTime):up.min()}(e);return this.listener.To(t,n)}Ao(e){const t={};t.database=Bm(this.O),t.addTarget=function(e,t){let n;const r=t.target;return n=Yp(r)?{documents:Km(e,r)}:{query:Hm(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=xm(e,t.resumeToken):t.snapshotVersion.compareTo(up.min())>0&&(n.readTime=Dm(e,t.snapshotVersion.toTimestamp())),n}(this.O,e);const n=function(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Hf()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.O,e);n&&(t.labels=n),this.fo(t)}Ro(e){const t={};t.database=Bm(this.O),t.removeTarget=e,this.fo(t)}}class Wy extends zy{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.O=s,this.Po=!1}get bo(){return this.Po}start(){this.Po=!1,this.lastStreamToken=void 0,super.start()}mo(){this.Po&&this.vo([])}Eo(e,t){return this.eo.Ur("Write",e,t)}onMessage(e){if(zf(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Po){this.ro.reset();const t=function(e,t){return e&&e.length>0?(zf(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Lm(e.updateTime):Lm(t);return n.isEqual(up.min())&&(n=Lm(t)),new jg(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Lm(e.commitTime);return this.listener.Vo(n,t)}return zf(!e.writeResults||0===e.writeResults.length),this.Po=!0,this.listener.So()}Do(){const e={};e.database=Bm(this.O),this.fo(e)}vo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof Jg)n={update:$m(e,t.key,t.value)};else if(t instanceof em)n={delete:Vm(e,t.key)};else if(t instanceof Qg)n={update:$m(e,t.key,t.data),updateMask:ey(t.fieldMask)};else{if(!(t instanceof tm))return Hf();n={verify:Vm(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Dg)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof xg)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Lg)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ug)return{fieldPath:t.field.canonicalString(),increment:n.k};throw Hf()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(s=t.precondition).updateTime?{updateTime:Pm(r,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:Hf())),n;var r,s}(this.O,e)))};this.fo(t)}}
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
 */class Jy extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.eo=n,this.O=r,this.Co=!1}No(){if(this.Co)throw new Jf(Wf.FAILED_PRECONDITION,"The client has already been terminated.")}Mr(e,t,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.eo.Mr(e,t,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Wf.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Jf(Wf.UNKNOWN,e.toString())}))}Lr(e,t,n){return this.No(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.eo.Lr(e,t,n,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Wf.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Jf(Wf.UNKNOWN,e.toString())}))}terminate(){this.Co=!0}}class Qy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.xo=0,this.ko=null,this.Oo=!0}Mo(){0===this.xo&&(this.$o("Unknown"),this.ko=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ko=null,this.Fo("Backend didn't respond within 10 seconds."),this.$o("Offline"),Promise.resolve()))))}Bo(e){"Online"===this.state?this.$o("Unknown"):(this.xo++,this.xo>=1&&(this.Lo(),this.Fo(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.$o("Offline")))}set(e){this.Lo(),this.xo=0,"Online"===e&&(this.Oo=!1),this.$o(e)}$o(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}Fo(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Oo?(qf(t),this.Oo=!1):Bf("OnlineStateTracker",t)}Lo(){null!==this.ko&&(this.ko.cancel(),this.ko=null)}}
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
 */class Xy{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Uo=[],this.qo=new Map,this.Ko=new Set,this.Go=[],this.jo=s,this.jo.mr((e=>{n.enqueueAndForget((async()=>{ov(this)&&(Bf("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Gf(e);t.Ko.add(4),await Zy(t),t.Qo.set("Unknown"),t.Ko.delete(4),await Yy(t)}(this))}))})),this.Qo=new Qy(n,r)}}async function Yy(e){if(ov(e))for(const t of e.Go)await t(!0)}async function Zy(e){for(const t of e.Go)await t(!1)}function ev(e,t){const n=Gf(e);n.qo.has(t.targetId)||(n.qo.set(t.targetId,t),iv(n)?sv(n):Tv(n).co()&&nv(n,t))}function tv(e,t){const n=Gf(e),r=Tv(n);n.qo.delete(t),r.co()&&rv(n,t),0===n.qo.size&&(r.co()?r.ho():ov(n)&&n.Qo.set("Unknown"))}function nv(e,t){e.Wo.Z(t.targetId),Tv(e).Ao(t)}function rv(e,t){e.Wo.Z(t),Tv(e).Ro(t)}function sv(e){e.Wo=new km({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Tt:t=>e.qo.get(t)||null}),Tv(e).start(),e.Qo.Mo()}function iv(e){return ov(e)&&!Tv(e).oo()&&e.qo.size>0}function ov(e){return 0===Gf(e).Ko.size}function av(e){e.Wo=void 0}async function cv(e){e.qo.forEach(((t,n)=>{nv(e,t)}))}async function lv(e,t){av(e),iv(e)?(e.Qo.Bo(t),sv(e)):e.Qo.set("Unknown")}async function uv(e,t,n){if(e.Qo.set("Online"),t instanceof Im&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.qo.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.qo.delete(r),e.Wo.removeTarget(r))}(e,t)}catch(r){Bf("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await hv(e,r)}else if(t instanceof Em?e.Wo.ct(t):t instanceof Tm?e.Wo._t(t):e.Wo.ht(t),!n.isEqual(up.min()))try{const t=await _y(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Wo.yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.qo.get(r);s&&e.qo.set(r,s.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.qo.get(t);if(!n)return;e.qo.set(t,n.withResumeToken(wp.EMPTY_BYTE_STRING,n.snapshotVersion)),rv(e,t);const r=new ay(n.target,t,1,n.sequenceNumber);nv(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(s){Bf("RemoteStore","Failed to raise snapshot:",s),await hv(e,s)}}async function hv(e,t,n){if(!ry(t))throw t;e.Ko.add(1),await Zy(e),e.Qo.set("Offline"),n||(n=()=>_y(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Bf("RemoteStore","Retrying IndexedDB access"),await n(),e.Ko.delete(1),await Yy(e)}))}function dv(e,t){return t().catch((n=>hv(e,n,t)))}async function fv(e){const t=Gf(e),n=Iv(t);let r=t.Uo.length>0?t.Uo[t.Uo.length-1].batchId:-1;for(;pv(t);)try{const e=await Ey(t.localStore,r);if(null===e){0===t.Uo.length&&n.ho();break}r=e.batchId,gv(t,e)}catch(s){await hv(t,s)}mv(t)&&yv(t)}function pv(e){return ov(e)&&e.Uo.length<10}function gv(e,t){e.Uo.push(t);const n=Iv(e);n.co()&&n.bo&&n.vo(t.mutations)}function mv(e){return ov(e)&&!Iv(e).oo()&&e.Uo.length>0}function yv(e){Iv(e).start()}async function vv(e){Iv(e).Do()}async function wv(e){const t=Iv(e);for(const n of e.Uo)t.vo(n.mutations)}async function _v(e,t,n){const r=e.Uo.shift(),s=iy.from(r,t,n);await dv(e,(()=>e.remoteSyncer.applySuccessfulWrite(s))),await fv(e)}async function bv(e,t){t&&Iv(e).bo&&await async function(e,t){if(function(e){switch(e){default:return Hf();case Wf.CANCELLED:case Wf.UNKNOWN:case Wf.DEADLINE_EXCEEDED:case Wf.RESOURCE_EXHAUSTED:case Wf.INTERNAL:case Wf.UNAVAILABLE:case Wf.UNAUTHENTICATED:return!1;case Wf.INVALID_ARGUMENT:case Wf.NOT_FOUND:case Wf.ALREADY_EXISTS:case Wf.PERMISSION_DENIED:case Wf.FAILED_PRECONDITION:case Wf.ABORTED:case Wf.OUT_OF_RANGE:case Wf.UNIMPLEMENTED:case Wf.DATA_LOSS:return!0}}(n=t.code)&&n!==Wf.ABORTED){const n=e.Uo.shift();Iv(e).ao(),await dv(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await fv(e)}var n}(e,t),mv(e)&&yv(e)}async function Ev(e,t){const n=Gf(e);n.asyncQueue.verifyOperationInProgress(),Bf("RemoteStore","RemoteStore received new credentials");const r=ov(n);n.Ko.add(3),await Zy(n),r&&n.Qo.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ko.delete(3),await Yy(n)}function Tv(e){return e.zo||(e.zo=function(e,t,n){const r=Gf(e);return r.No(),new Gy(t,r.eo,r.authCredentials,r.appCheckCredentials,r.O,n)}(e.datastore,e.asyncQueue,{Pr:cv.bind(null,e),vr:lv.bind(null,e),To:uv.bind(null,e)}),e.Go.push((async t=>{t?(e.zo.ao(),iv(e)?sv(e):e.Qo.set("Unknown")):(await e.zo.stop(),av(e))}))),e.zo}function Iv(e){return e.Ho||(e.Ho=function(e,t,n){const r=Gf(e);return r.No(),new Wy(t,r.eo,r.authCredentials,r.appCheckCredentials,r.O,n)}(e.datastore,e.asyncQueue,{Pr:vv.bind(null,e),vr:bv.bind(null,e),So:wv.bind(null,e),Vo:_v.bind(null,e)}),e.Go.push((async t=>{t?(e.Ho.ao(),await fv(e)):(await e.Ho.stop(),e.Uo.length>0&&(Bf("RemoteStore",`Stopping write stream with ${e.Uo.length} pending writes`),e.Uo=[]))}))),e.Ho
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
 */}class Sv{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Qf,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new Sv(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Jf(Wf.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kv(e,t){if(qf("AsyncQueue",`${t}: ${e}`),ry(e))return new Jf(Wf.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class Cv{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Rp.comparator(t.key,n.key):(e,t)=>Rp.comparator(e.key,t.key),this.keyedMap=pm(),this.sortedSet=new om(this.comparator)}static emptySet(e){return new Cv(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Cv))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Cv;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class Av{constructor(){this.Jo=new om(Rp.comparator)}track(e){const t=e.doc.key,n=this.Jo.get(t);n?0!==e.type&&3===n.type?this.Jo=this.Jo.insert(t,e):3===e.type&&1!==n.type?this.Jo=this.Jo.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Jo=this.Jo.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Jo=this.Jo.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Jo=this.Jo.remove(t):1===e.type&&2===n.type?this.Jo=this.Jo.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Jo=this.Jo.insert(t,{type:2,doc:e.doc}):Hf():this.Jo=this.Jo.insert(t,e)}Yo(){const e=[];return this.Jo.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Nv{constructor(e,t,n,r,s,i,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new Nv(e,t,Cv.emptySet(t),s,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&wg(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class Ov{constructor(){this.Xo=void 0,this.listeners=[]}}class Rv{constructor(){this.queries=new py((e=>_g(e)),wg),this.onlineState="Unknown",this.Zo=new Set}}function Dv(e,t){const n=Gf(e);let r=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.ec(s)&&(r=!0);t.Xo=s}}r&&Pv(n)}function xv(e,t,n){const r=Gf(e),s=r.queries.get(t);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(t)}function Pv(e){e.Zo.forEach((e=>{e.next()}))}class Lv{constructor(e,t,n){this.query=e,this.nc=t,this.sc=!1,this.ic=null,this.onlineState="Unknown",this.options=n||{}}ec(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Nv(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.sc?this.rc(e)&&(this.nc.next(e),t=!0):this.oc(e,this.onlineState)&&(this.cc(e),t=!0),this.ic=e,t}onError(e){this.nc.error(e)}tc(e){this.onlineState=e;let t=!1;return this.ic&&!this.sc&&this.oc(this.ic,e)&&(this.cc(this.ic),t=!0),t}oc(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return!(this.options.uc&&n||e.docs.isEmpty()&&"Offline"!==t)}rc(e){if(e.docChanges.length>0)return!0;const t=this.ic&&this.ic.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}cc(e){e=Nv.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.sc=!0,this.nc.next(e)}}
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
 */class Mv{constructor(e){this.key=e}}class Uv{constructor(e){this.key=e}}class Vv{constructor(e,t){this.query=e,this.dc=t,this._c=null,this.current=!1,this.wc=ym(),this.mutatedKeys=ym(),this.mc=Tg(e),this.gc=new Cv(this.mc)}get yc(){return this.dc}Ic(e,t){const n=t?t.Ec:new Av,r=t?t.gc:this.gc;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a=gg(this.query)&&r.size===this.query.limit?r.last():null,c=mg(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const l=r.get(e),u=Eg(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Tc(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.mc(u,a)>0||c&&this.mc(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(i=i.add(u),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))})),gg(this.query)||mg(this.query))for(;i.size>this.query.limit;){const e=gg(this.query)?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{gc:i,Ec:n,ks:o,mutatedKeys:s}}Tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.gc;this.gc=e.gc,this.mutatedKeys=e.mutatedKeys;const s=e.Ec.Yo();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Hf()}};return n(e)-n(t)}(e.type,t.type)||this.mc(e.doc,t.doc))),this.Ac(n);const i=t?this.Rc():[],o=0===this.wc.size&&this.current?1:0,a=o!==this._c;return this._c=o,0!==s.length||a?{snapshot:new Nv(this.query,e.gc,r,s,e.mutatedKeys,0===o,a,!1),Pc:i}:{Pc:i}}tc(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({gc:this.gc,Ec:new Av,mutatedKeys:this.mutatedKeys,ks:!1},!1)):{Pc:[]}}bc(e){return!this.dc.has(e)&&!!this.gc.has(e)&&!this.gc.get(e).hasLocalMutations}Ac(e){e&&(e.addedDocuments.forEach((e=>this.dc=this.dc.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.dc=this.dc.delete(e))),this.current=e.current)}Rc(){if(!this.current)return[];const e=this.wc;this.wc=ym(),this.gc.forEach((e=>{this.bc(e.key)&&(this.wc=this.wc.add(e.key))}));const t=[];return e.forEach((e=>{this.wc.has(e)||t.push(new Uv(e))})),this.wc.forEach((n=>{e.has(n)||t.push(new Mv(n))})),t}vc(e){this.dc=e.Ks,this.wc=ym();const t=this.Ic(e.documents);return this.applyChanges(t,!0)}Vc(){return Nv.fromInitialDocuments(this.query,this.gc,this.mutatedKeys,0===this._c)}}class Fv{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class jv{constructor(e){this.key=e,this.Sc=!1}}class Bv{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Dc={},this.Cc=new py((e=>_g(e)),wg),this.Nc=new Map,this.xc=new Set,this.kc=new om(Rp.comparator),this.Oc=new Map,this.Mc=new Cy,this.$c={},this.Fc=new Map,this.Bc=dy.Je(),this.onlineState="Unknown",this.Lc=void 0}get isPrimaryClient(){return!0===this.Lc}}async function qv(e,t){const n=function(e){const t=Gf(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Hv.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=iw.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Gv.bind(null,t),t.Dc.To=Dv.bind(null,t.eventManager),t.Dc.qc=xv.bind(null,t.eventManager),t}(e);let r,s;const i=n.Cc.get(t);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Vc();else{const e=await function(e,t){const n=Gf(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Un.getTargetData(e,t).next((s=>s?(r=s,ny.resolve(r)):n.Un.allocateTargetId(e).next((s=>(r=new ay(t,s,0,e.currentSequenceNumber),n.Un.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.Ms.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(e.targetId,e),n.$s.set(t,e.targetId)),e}))}(n.localStore,vg(t));n.isPrimaryClient&&ev(n.remoteStore,e);const i=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,s=await async function(e,t,n,r){e.Uc=(t,n,r)=>async function(e,t,n,r){let s=t.view.Ic(n);s.ks&&(s=await Iy(e.localStore,t.query,!1).then((({documents:e})=>t.view.Ic(e,s))));const i=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(s,e.isPrimaryClient,i);return ew(e,t.targetId,o.Pc),o.snapshot}(e,t,n,r);const s=await Iy(e.localStore,t,!0),i=new Vv(t,s.Ks),o=i.Ic(s.documents),a=bm.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),c=i.applyChanges(o,e.isPrimaryClient,a);ew(e,n,c.Pc);const l=new Fv(t,n,i);return e.Cc.set(t,l),e.Nc.has(n)?e.Nc.get(n).push(t):e.Nc.set(n,[t]),c.snapshot}(n,t,r,"current"===i)}return s}async function $v(e,t){const n=Gf(e),r=n.Cc.get(t),s=n.Nc.get(r.targetId);if(s.length>1)return n.Nc.set(r.targetId,s.filter((e=>!wg(e,t)))),void n.Cc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ty(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),tv(n.remoteStore,r.targetId),Yv(n,r.targetId)})).catch(fy)):(Yv(n,r.targetId),await Ty(n.localStore,r.targetId,!0))}async function Kv(e,t,n){const r=function(e){const t=Gf(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Wv.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Jv.bind(null,t),t}(e);try{const e=await function(e,t){const n=Gf(e),r=lp.now(),s=t.reduce(((e,t)=>e.add(t.key)),ym());let i;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Us.Es(e,s).next((s=>{i=s;const o=[];for(const e of t){const t=zg(e,i.get(e.key));null!=t&&o.push(new Qg(e.key,t,zp(t.value.mapValue),Bg.exists(!0)))}return n.gs.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(i),{batchId:e.batchId,changes:i})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.$c[e.currentUser.toKey()];r||(r=new om(ap)),r=r.insert(t,n),e.$c[e.currentUser.toKey()]=r}(r,e.batchId,n),await rw(r,e.changes),await fv(r.remoteStore)}catch(s){const e=kv(s,"Failed to persist write");n.reject(e)}}async function Hv(e,t){const n=Gf(e);try{const e=await by(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Oc.get(t);r&&(zf(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Sc=!0:e.modifiedDocuments.size>0?zf(r.Sc):e.removedDocuments.size>0&&(zf(r.Sc),r.Sc=!1))})),await rw(n,e,t)}catch(r){await fy(r)}}function zv(e,t,n){const r=Gf(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Cc.forEach(((n,r)=>{const s=r.view.tc(t);s.snapshot&&e.push(s.snapshot)})),function(e,t){const n=Gf(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const s of n.listeners)s.tc(t)&&(r=!0)})),r&&Pv(n)}(r.eventManager,t),e.length&&r.Dc.To(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Gv(e,t,n){const r=Gf(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Oc.get(t),i=s&&s.key;if(i){let e=new om(Rp.comparator);e=e.insert(i,Gp.newNoDocument(i,up.min()));const n=ym().add(i),s=new _m(up.min(),new Map,new lm(ap),e,n);await Hv(r,s),r.kc=r.kc.remove(i),r.Oc.delete(t),nw(r)}else await Ty(r.localStore,t,!1).then((()=>Yv(r,t,n))).catch(fy)}async function Wv(e,t){const n=Gf(e),r=t.batch.batchId;try{const e=await function(e,t){const n=Gf(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),s=n.Bs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=ny.resolve();return i.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);zf(null!==i),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.gs.removeMutationBatch(t,s)))}(n,e,t,s).next((()=>s.apply(e))).next((()=>n.gs.performConsistencyCheck(e))).next((()=>n.Us.Es(e,r)))}))}(n.localStore,t);Xv(n,r,null),Qv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await rw(n,e)}catch(s){await fy(s)}}async function Jv(e,t,n){const r=Gf(e);try{const e=await function(e,t){const n=Gf(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.gs.lookupMutationBatch(e,t).next((t=>(zf(null!==t),r=t.keys(),n.gs.removeMutationBatch(e,t)))).next((()=>n.gs.performConsistencyCheck(e))).next((()=>n.Us.Es(e,r)))}))}(r.localStore,t);Xv(r,t,n),Qv(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await rw(r,e)}catch(s){await fy(s)}}function Qv(e,t){(e.Fc.get(t)||[]).forEach((e=>{e.resolve()})),e.Fc.delete(t)}function Xv(e,t,n){const r=Gf(e);let s=r.$c[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.$c[r.currentUser.toKey()]=s}}function Yv(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Nc.get(t))e.Cc.delete(r),n&&e.Dc.qc(r,n);e.Nc.delete(t),e.isPrimaryClient&&e.Mc.si(t).forEach((t=>{e.Mc.containsKey(t)||Zv(e,t)}))}function Zv(e,t){e.xc.delete(t.path.canonicalString());const n=e.kc.get(t);null!==n&&(tv(e.remoteStore,n),e.kc=e.kc.remove(t),e.Oc.delete(n),nw(e))}function ew(e,t,n){for(const r of n)r instanceof Mv?(e.Mc.addReference(r.key,t),tw(e,r)):r instanceof Uv?(Bf("SyncEngine","Document no longer in limbo: "+r.key),e.Mc.removeReference(r.key,t),e.Mc.containsKey(r.key)||Zv(e,r.key)):Hf()}function tw(e,t){const n=t.key,r=n.path.canonicalString();e.kc.get(n)||e.xc.has(r)||(Bf("SyncEngine","New document in limbo: "+n),e.xc.add(r),nw(e))}function nw(e){for(;e.xc.size>0&&e.kc.size<e.maxConcurrentLimboResolutions;){const t=e.xc.values().next().value;e.xc.delete(t);const n=new Rp(gp.fromString(t)),r=e.Bc.next();e.Oc.set(r,new jv(n)),e.kc=e.kc.insert(n,r),ev(e.remoteStore,new ay(vg(pg(n.path)),r,2,sp.A))}}async function rw(e,t,n){const r=Gf(e),s=[],i=[],o=[];r.Cc.isEmpty()||(r.Cc.forEach(((e,a)=>{o.push(r.Uc(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),s.push(e);const t=my.Ss(a.targetId,e);i.push(t)}})))})),await Promise.all(o),r.Dc.To(s),await async function(e,t){const n=Gf(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>ny.forEach(t,(t=>ny.forEach(t.vs,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>ny.forEach(t.Vs,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!ry(r))throw r;Bf("LocalStore","Failed to update sequence numbers: "+r)}for(const s of t){const e=s.targetId;if(!s.fromCache){const t=n.Ms.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.Ms=n.Ms.insert(e,s)}}}(r.localStore,i))}async function sw(e,t){const n=Gf(e);if(!n.currentUser.isEqual(t)){Bf("SyncEngine","User change. New user:",t.toKey());const e=await wy(n.localStore,t);n.currentUser=t,(r=n).Fc.forEach((e=>{e.forEach((e=>{e.reject(new Jf(Wf.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.Fc.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await rw(n,e.qs)}var r}function iw(e,t){const n=Gf(e),r=n.Oc.get(t);if(r&&r.Sc)return ym().add(r.key);{let e=ym();const r=n.Nc.get(t);if(!r)return e;for(const t of r){const r=n.Cc.get(t);e=e.unionWith(r.view.yc)}return e}}class ow{constructor(){this.synchronizeTabs=!1}async initialize(e){this.O=Ky(e.databaseInfo.databaseId),this.sharedClientState=this.Gc(e),this.persistence=this.jc(e),await this.persistence.start(),this.gcScheduler=this.Qc(e),this.localStore=this.Wc(e)}Qc(e){return null}Wc(e){return function(e,t,n,r){return new vy(e,t,n,r)}(this.persistence,new yy,e.initialUser,this.O)}jc(e){return new xy(Ly.bi,this.O)}Gc(e){return new Uy}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class aw{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>zv(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=sw.bind(null,this.syncEngine),await async function(e,t){const n=Gf(e);t?(n.Ko.delete(2),await Yy(n)):t||(n.Ko.add(2),await Zy(n),n.Qo.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Rv}createDatastore(e){const t=Ky(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new qy(r));var r,s,i;return s=e.authCredentials,i=e.appCheckCredentials,new Jy(s,i,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>zv(this.syncEngine,e,0),i=Fy.Vt()?new Fy:new Vy,new Xy(t,n,r,s,i);var t,n,r,s,i}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new Bv(e,t,n,r,s,i);return o&&(a.Lc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Gf(e);Bf("RemoteStore","RemoteStore shutting down."),t.Ko.add(5),await Zy(t),t.jo.shutdown(),t.Qo.set("Unknown")}(this.remoteStore)}}
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
 */class cw{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Hc(this.observer.next,e)}error(e){this.observer.error?this.Hc(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Jc(){this.muted=!0}Hc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
 */class lw{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Uf.UNAUTHENTICATED,this.clientId=op.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Bf("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Bf("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Jf(Wf.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qf;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=kv(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function uw(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){return e.offlineComponents||(Bf("FirestoreClient","Using default OfflineComponentProvider"),await async function(e,t){e.asyncQueue.verifyOperationInProgress(),Bf("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await wy(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}(e,new ow)),e.offlineComponents}(e);Bf("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>Ev(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Ev(t.remoteStore,n))),e.onlineComponents=t}async function hw(e){return e.onlineComponents||(Bf("FirestoreClient","Using default OnlineComponentProvider"),await uw(e,new aw)),e.onlineComponents}async function dw(e){const t=await hw(e),n=t.eventManager;return n.onListen=qv.bind(null,t.syncEngine),n.onUnlisten=$v.bind(null,t.syncEngine),n}function fw(e,t,n={}){const r=new Qf;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,s){const i=new cw({next:n=>{t.enqueueAndForget((()=>async function(e,t){const n=Gf(e),r=t.query;let s=!1;const i=n.queries.get(r);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),s=0===i.listeners.length)}if(s)return n.queries.delete(r),n.onUnlisten(r)}(e,o))),n.fromCache&&"server"===r.source?s.reject(new Jf(Wf.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new Lv(n,i,{includeMetadataChanges:!0,uc:!0});return async function(t,n){const r=Gf(t),s=n.query;let i=!1,o=r.queries.get(s);if(o||(i=!0,o=new Ov),i)try{o.Xo=await r.onListen(s)}catch(e){const r=kv(e,`Initialization of query '${bg(n.query)}' failed`);return void n.onError(r)}r.queries.set(s,o),o.listeners.push(n),n.tc(r.onlineState),o.Xo&&n.ec(o.Xo)&&Pv(r)}(e,o)}(await dw(e),e.asyncQueue,t,n,r))),r.promise}const pw=new Map;
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
 */function gw(e,t,n){if(!n)throw new Jf(Wf.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function mw(e){if(!Rp.isDocumentKey(e))throw new Jf(Wf.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function yw(e){if(Rp.isDocumentKey(e))throw new Jf(Wf.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function vw(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Hf()}function ww(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Jf(Wf.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vw(e);throw new Jf(Wf.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
 */class _w{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Jf(Wf.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Jf(Wf.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new Jf(Wf.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class bw{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _w({}),this._settingsFrozen=!1,e instanceof Ap?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Jf(Wf.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ap(e.options.projectId)}(e))}get app(){if(!this._app)throw new Jf(Wf.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Jf(Wf.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _w(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Yf;switch(e.type){case"gapi":const t=e.client;return zf(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new tp(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Jf(Wf.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=pw.get(e);t&&(Bf("ComponentProvider","Removing Datastore"),pw.delete(e),t.terminate())}(this),Promise.resolve()}}
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
 */class Ew{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Iw(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ew(this.firestore,e,this._key)}}class Tw{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Tw(this.firestore,e,this._query)}}class Iw extends Tw{constructor(e,t,n){super(e,t,pg(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ew(this.firestore,null,new Rp(e))}withConverter(e){return new Iw(this.firestore,e,this._path)}}function Sw(e,t,...n){if(e=go(e),gw("collection","path",t),e instanceof bw){const r=gp.fromString(t,...n);return yw(r),new Iw(e,null,r)}{if(!(e instanceof Ew||e instanceof Iw))throw new Jf(Wf.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(gp.fromString(t,...n));return yw(r),new Iw(e.firestore,null,r)}}function kw(e,t,...n){if(e=go(e),1===arguments.length&&(t=op.R()),gw("doc","path",t),e instanceof bw){const r=gp.fromString(t,...n);return mw(r),new Ew(e,null,new Rp(r))}{if(!(e instanceof Ew||e instanceof Iw))throw new Jf(Wf.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(gp.fromString(t,...n));return mw(r),new Ew(e.firestore,e instanceof Iw?e.converter:null,new Rp(r))}}
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
 */class Cw{constructor(){this.hu=Promise.resolve(),this.lu=[],this.fu=!1,this.du=[],this._u=null,this.wu=!1,this.mu=!1,this.gu=[],this.ro=new Hy(this,"async_queue_retry"),this.yu=()=>{const e=$y();e&&Bf("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ro.Yr()};const e=$y();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.yu)}get isShuttingDown(){return this.fu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.fu){this.fu=!0,this.mu=e||!1;const t=$y();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.yu)}}enqueue(e){if(this.pu(),this.fu)return new Promise((()=>{}));const t=new Qf;return this.Iu((()=>this.fu&&this.mu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.lu.push(e),this.Eu())))}async Eu(){if(0!==this.lu.length){try{await this.lu[0](),this.lu.shift(),this.ro.reset()}catch(e){if(!ry(e))throw e;Bf("AsyncQueue","Operation failed with retryable error: "+e)}this.lu.length>0&&this.ro.Hr((()=>this.Eu()))}}Iu(e){const t=this.hu.then((()=>(this.wu=!0,e().catch((e=>{this._u=e,this.wu=!1;throw qf("INTERNAL UNHANDLED ERROR: ",function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}(e)),e})).then((e=>(this.wu=!1,e))))));return this.hu=t,t}enqueueAfterDelay(e,t,n){this.pu(),this.gu.indexOf(e)>-1&&(t=0);const r=Sv.createAndSchedule(this,e,t,n,(e=>this.Tu(e)));return this.du.push(r),r}pu(){this._u&&Hf()}verifyOperationInProgress(){}async Au(){let e;do{e=this.hu,await e}while(e!==this.hu)}Ru(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}Pu(e){return this.Au().then((()=>{this.du.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.du)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Au()}))}bu(e){this.gu.push(e)}Tu(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class Aw extends bw{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Cw,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Rw(this),this._firestoreClient.terminate()}}function Nw(e=Yo()){return Wo(e,"firestore").getImmediate()}function Ow(e){return e._firestoreClient||Rw(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Rw(e){var t;const n=e._freezeSettings(),r=(s=e._databaseId,i=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",o=e._persistenceKey,new Cp(s,i,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var s,i,o,a;e._firestoreClient=new lw(e._authCredentials,e._appCheckCredentials,e._queue,r)}
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
 */class Dw{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Jf(Wf.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yp(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
 */class xw{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xw(wp.fromBase64String(e))}catch(t){throw new Jf(Wf.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new xw(wp.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class Pw{constructor(e){this._methodName=e}}
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
 */class Lw{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Jf(Wf.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Jf(Wf.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ap(this._lat,e._lat)||ap(this._long,e._long)}}
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
 */const Mw=/^__.*__$/;class Uw{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Qg(e,this.data,this.fieldMask,t,this.fieldTransforms):new Jg(e,this.data,t,this.fieldTransforms)}}function Vw(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Hf()}}class Fw{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.O=n,this.ignoreUndefinedProperties=r,void 0===s&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}Su(e){return new Fw(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.O,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Du(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Su({path:n,Cu:!1});return r.Nu(e),r}xu(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Su({path:n,Cu:!1});return r.vu(),r}ku(e){return this.Su({path:void 0,Cu:!0})}Ou(e){return Qw(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.$u)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Nu(this.path.get(e))}Nu(e){if(0===e.length)throw this.Ou("Document fields must not be empty");if(Vw(this.Vu)&&Mw.test(e))throw this.Ou('Document fields cannot begin and end with "__"')}}class jw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.O=n||Ky(e)}Fu(e,t,n,r=!1){return new Fw({Vu:e,methodName:t,$u:n,path:yp.emptyPath(),Cu:!1,Mu:r},this.databaseId,this.O,this.ignoreUndefinedProperties)}}function Bw(e){const t=e._freezeSettings(),n=Ky(e._databaseId);return new jw(e._databaseId,!!t.ignoreUndefinedProperties,n)}function qw(e,t,n,r,s,i={}){const o=e.Fu(i.merge||i.mergeFields?2:0,t,n,s);zw("Data must be an object, but it was:",o,r);const a=Kw(r,o);let c,l;if(i.merge)c=new vp(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=Gw(t,r,n);if(!o.contains(s))throw new Jf(Wf.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Xw(e,s)||e.push(s)}c=new vp(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new Uw(new Hp(a),c,l)}function $w(e,t){if(Hw(e=go(e)))return zw("Unsupported field value:",t,e),Kw(e,t);if(e instanceof Pw)return function(e,t){if(!Vw(t.Vu))throw t.Ou(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Ou(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Cu&&4!==t.Vu)throw t.Ou("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=$w(s,t.ku(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=go(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Cg(t.O,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=lp.fromDate(e);return{timestampValue:Dm(t.O,n)}}if(e instanceof lp){const n=new lp(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Dm(t.O,n)}}if(e instanceof Lw)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof xw)return{bytesValue:xm(t.O,e._byteString)};if(e instanceof Ew){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Ou(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Mm(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Ou(`Unsupported field value: ${vw(e)}`)}(e,t)}function Kw(e,t){const n={};return fp(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):dp(e,((e,r)=>{const s=$w(r,t.Du(e));null!=s&&(n[e]=s)})),{mapValue:{fields:n}}}function Hw(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof lp||e instanceof Lw||e instanceof xw||e instanceof Ew||e instanceof Pw)}function zw(e,t,n){if(!Hw(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=vw(n);throw"an object"===r?t.Ou(e+" a custom object"):t.Ou(e+" "+r)}var r}function Gw(e,t,n){if((t=go(t))instanceof Dw)return t._internalPath;if("string"==typeof t)return Jw(e,t);throw Qw("Field path arguments must be of type string or ",e,!1,void 0,n)}const Ww=new RegExp("[~\\*/\\[\\]]");function Jw(e,t,n){if(t.search(Ww)>=0)throw Qw(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Dw(...t.split("."))._internalPath}catch(r){throw Qw(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Qw(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Jf(Wf.INVALID_ARGUMENT,a+e+c)}function Xw(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class Yw{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ew(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Zw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(e_("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Zw extends Yw{data(){return super.data()}}function e_(e,t){return"string"==typeof t?Jw(e,t):t instanceof Dw?t._internalPath:t._delegate._internalPath}
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
 */class t_{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class n_ extends Yw{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new r_(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(e_("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class r_ extends n_{data(e={}){return super.data(e)}}class s_{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new t_(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new r_(this._firestore,this._userDataWriter,n.key,n,new t_(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Jf(Wf.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new r_(e._firestore,e._userDataWriter,n.doc.key,n.doc,new t_(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new r_(e._firestore,e._userDataWriter,t.doc.key,t.doc,new t_(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:i_(t.type),doc:r,oldIndex:s,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function i_(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Hf()}}
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
 */class o_ extends
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
class{convertValue(e,t="none"){switch(Dp(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ep(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Tp(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Hf()}}convertObject(e,t){const n={};return dp(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Lw(Ep(e.latitude),Ep(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Sp(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(kp(e));default:return null}}convertTimestamp(e){const t=bp(e);return new lp(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=gp.fromString(e);zf(ty(n));const r=new Ap(n.get(1),n.get(3)),s=new Rp(n.popFirst(5));return r.isEqual(t)||qf(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
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
 */{constructor(e){super(),this.firestore=e}convertBytes(e){return new xw(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ew(this.firestore,null,t)}}function a_(e){e=ww(e,Tw);const t=ww(e.firestore,Aw),n=Ow(t),r=new o_(t);return function(e){if(mg(e)&&0===e.explicitOrderBy.length)throw new Jf(Wf.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),fw(n,e._query).then((n=>new s_(t,r,e,n)))}function c_(e,t,n){e=ww(e,Ew);const r=ww(e.firestore,Aw),s=function(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}(e.converter,t,n);return function(e,t){return function(e,t){const n=new Qf;return e.asyncQueue.enqueueAndForget((async()=>Kv(await function(e){return hw(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(Ow(e),t)}(r,[qw(Bw(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,Bg.none())])}function l_(){return"undefined"!=typeof navigator&&"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}}!function(e,t=!0){Vf="9.6.8",Go(new mo("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=new Aw(r,new Zf(e.getProvider("auth-internal")),new rp(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),s._setSettings(n),s}),"PUBLIC")),Zo(Mf,"3.4.5",e),Zo(Mf,"3.4.5","esm2017")}();const u_="function"==typeof Proxy;let h_,d_;function f_(){return void 0!==h_||("undefined"!=typeof window&&window.performance?(h_=!0,d_=window.performance):"undefined"!=typeof global&&(null===(e=global.perf_hooks)||void 0===e?void 0:e.performance)?(h_=!0,d_=global.perf_hooks.performance):h_=!1),h_?d_.now():Date.now();var e}class p_{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const o in e.settings){const t=e.settings[o];n[o]=t.defaultValue}const r=`__vue-devtools-plugin-settings__${e.id}`;let s=Object.assign({},n);try{const e=localStorage.getItem(r),t=JSON.parse(e);Object.assign(s,t)}catch(i){}this.fallbacks={getSettings:()=>s,setSettings(e){try{localStorage.setItem(r,JSON.stringify(e))}catch(i){}s=e},now:()=>f_()},t&&t.on("plugin:settings:set",((e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)})),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise((n=>{this.targetQueue.push({method:t,args:e,resolve:n})}))})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function g_(e,t){const n=e,r=l_(),s=l_().__VUE_DEVTOOLS_GLOBAL_HOOK__,i=u_&&n.enableEarlyProxy;if(!s||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&i){const e=i?new p_(n,s):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:e}),e&&t(e.proxiedTarget)}else s.emit("devtools-plugin:setup",e,t)}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */function m_(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function y_(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function v_(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;__(e,n,[],e._modules.root,!0),w_(e,n,t)}function w_(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var s=e._wrappedGetters,i={};m_(s,(function(t,n){i[n]=function(e,t){return function(){return e(t)}}(t,e),Object.defineProperty(e.getters,n,{get:function(){return i[n]()},enumerable:!0})})),e._state=We({data:t}),e.strict&&function(e){yn((function(){return e._state.data}),(function(){}),{deep:!0,flush:"sync"})}(e),r&&n&&e._withCommit((function(){r.data=null}))}function __(e,t,n,r,s){var i=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!i&&!s){var a=E_(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){a[c]=r.state}))}var l=r.context=function(e,t,n){var r=""===t,s={dispatch:r?e.dispatch:function(n,r,s){var i=T_(n,r,s),o=i.payload,a=i.options,c=i.type;return a&&a.root||(c=t+c),e.dispatch(c,o)},commit:r?e.commit:function(n,r,s){var i=T_(n,r,s),o=i.payload,a=i.options,c=i.type;a&&a.root||(c=t+c),e.commit(c,o,a)}};return Object.defineProperties(s,{getters:{get:r?function(){return e.getters}:function(){return b_(e,t)}},state:{get:function(){return E_(e.state,n)}}}),s}(e,o,n);r.forEachMutation((function(t,n){!function(e,t,n,r){(e._mutations[t]||(e._mutations[t]=[])).push((function(t){n.call(e,r.state,t)}))}(e,o+n,t,l)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,s=t.handler||t;!function(e,t,n,r){(e._actions[t]||(e._actions[t]=[])).push((function(t){var s,i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return(s=i)&&"function"==typeof s.then||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}(e,r,s,l)})),r.forEachGetter((function(t,n){!function(e,t,n,r){if(e._wrappedGetters[t])return;e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}(e,o+n,t,l)})),r.forEachChild((function(r,i){__(e,t,n.concat(i),r,s)}))}function b_(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(s){if(s.slice(0,r)===t){var i=s.slice(r);Object.defineProperty(n,i,{get:function(){return e.getters[s]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function E_(e,t){return t.reduce((function(e,t){return e[t]}),e)}function T_(e,t,n){var r;return null!==(r=e)&&"object"==typeof r&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var I_=0;function S_(e,t){g_({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:["vuex bindings"]},(function(n){n.addTimelineLayer({id:"vuex:mutations",label:"Vuex Mutations",color:k_}),n.addTimelineLayer({id:"vuex:actions",label:"Vuex Actions",color:k_}),n.addInspector({id:"vuex",label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&"vuex"===n.inspectorId)if(n.filter){var r=[];O_(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[N_(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&"vuex"===n.inspectorId){var r=n.nodeId;b_(t,r),n.state=function(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),s={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var i=function(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var s=t,i=r.pop();r.forEach((function(e){s[e]||(s[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),s=s[e]._custom.value})),s[i]=R_((function(){return e[n]}))}else t[n]=R_((function(){return e[n]}))})),t}(t);s.getters=Object.keys(i).map((function(e){return{key:e.endsWith("/")?A_(e):e,editable:!1,value:R_((function(){return i[e]}))}}))}return s}((s=t._modules,(o=(i=r).split("/").filter((function(e){return e}))).reduce((function(e,t,n){var r=e[t];if(!r)throw new Error('Missing module "'+t+'" for path "'+i+'".');return n===o.length-1?r:r._children}),"root"===i?s:s.root._children)),"root"===r?t.getters:t._makeLocalGettersCache,r)}var s,i,o})),n.on.editInspectorState((function(n){if(n.app===e&&"vuex"===n.inspectorId){var r=n.nodeId,s=n.path;"root"!==r&&(s=r.split("/").filter(Boolean).concat(s)),t._withCommit((function(){n.set(t._state.data,s,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree("vuex"),n.sendInspectorState("vuex"),n.addTimelineEvent({layerId:"vuex:mutations",event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=I_++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:"vuex:actions",event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},s=Date.now()-e._time;r.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:"vuex:actions",event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var k_=8702998,C_={label:"namespaced",textColor:16777215,backgroundColor:6710886};function A_(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function N_(e,t){return{id:t||"root",label:A_(t),tags:e.namespaced?[C_]:[],children:Object.keys(e._children).map((function(n){return N_(e._children[n],t+n+"/")}))}}function O_(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[C_]:[]}),Object.keys(t._children).forEach((function(s){O_(e,t._children[s],n,r+s+"/")}))}function R_(e){try{return e()}catch(t){return t}}var D_=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"==typeof n?n():n)||{}},x_={namespaced:{configurable:!0}};x_.namespaced.get=function(){return!!this._rawModule.namespaced},D_.prototype.addChild=function(e,t){this._children[e]=t},D_.prototype.removeChild=function(e){delete this._children[e]},D_.prototype.getChild=function(e){return this._children[e]},D_.prototype.hasChild=function(e){return e in this._children},D_.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},D_.prototype.forEachChild=function(e){m_(this._children,e)},D_.prototype.forEachGetter=function(e){this._rawModule.getters&&m_(this._rawModule.getters,e)},D_.prototype.forEachAction=function(e){this._rawModule.actions&&m_(this._rawModule.actions,e)},D_.prototype.forEachMutation=function(e){this._rawModule.mutations&&m_(this._rawModule.mutations,e)},Object.defineProperties(D_.prototype,x_);var P_=function(e){this.register([],e,!1)};function L_(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;L_(e.concat(r),t.getChild(r),n.modules[r])}}function M_(e){return new U_(e)}P_.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},P_.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return e+((t=t.getChild(n)).namespaced?n+"/":"")}),"")},P_.prototype.update=function(e){L_([],this.root,e)},P_.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var s=new D_(t,n);0===e.length?this.root=s:this.get(e.slice(0,-1)).addChild(e[e.length-1],s);t.modules&&m_(t.modules,(function(t,s){r.register(e.concat(s),t,n)}))},P_.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},P_.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var U_=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var s=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new P_(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var i=this,o=this.dispatch,a=this.commit;this.dispatch=function(e,t){return o.call(i,e,t)},this.commit=function(e,t,n){return a.call(i,e,t,n)},this.strict=r;var c=this._modules.root.state;__(this,c,[],this._modules.root),w_(this,c),n.forEach((function(e){return e(t)}))},V_={state:{configurable:!0}};U_.prototype.install=function(e,t){e.provide(t||"store",this),e.config.globalProperties.$store=this,void 0!==this._devtools&&this._devtools&&S_(e,this)},V_.state.get=function(){return this._state.data},V_.state.set=function(e){},U_.prototype.commit=function(e,t,n){var r=this,s=T_(e,t,n),i=s.type,o=s.payload,a={type:i,payload:o},c=this._mutations[i];c&&(this._withCommit((function(){c.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},U_.prototype.dispatch=function(e,t){var n=this,r=T_(e,t),s=r.type,i=r.payload,o={type:s,payload:i},a=this._actions[s];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(l){}var c=a.length>1?Promise.all(a.map((function(e){return e(i)}))):a[0](i);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(l){}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(l){}t(e)}))}))}},U_.prototype.subscribe=function(e,t){return y_(e,this._subscribers,t)},U_.prototype.subscribeAction=function(e,t){return y_("function"==typeof e?{before:e}:e,this._actionSubscribers,t)},U_.prototype.watch=function(e,t,n){var r=this;return yn((function(){return e(r.state,r.getters)}),t,Object.assign({},n))},U_.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},U_.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"==typeof e&&(e=[e]),this._modules.register(e,t),__(this,this.state,e,this._modules.get(e),n.preserveState),w_(this,this.state)},U_.prototype.unregisterModule=function(e){var t=this;"string"==typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){delete E_(t.state,e.slice(0,-1))[e[e.length-1]]})),v_(this)},U_.prototype.hasModule=function(e){return"string"==typeof e&&(e=[e]),this._modules.isRegistered(e)},U_.prototype.hotUpdate=function(e){this._modules.update(e),v_(this,!0)},U_.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(U_.prototype,V_);export{Ur as A,as as B,cs as C,us as D,Ji as E,Kn as F,yc as G,Zs as H,_s as I,We as a,sr as b,Yn as c,ar as d,Nn as e,gs as f,Sl as g,or as h,Xo as i,Ic as j,Nw as k,M_ as l,c_ as m,Sw as n,Qn as o,kw as p,a_ as q,Bn as r,Xc as s,u as t,it as u,ms as v,Kt as w,qt as x,$t as y,Lr as z};
