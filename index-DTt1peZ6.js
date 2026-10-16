(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const mm=()=>{};var Tl={};/**
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
 */const _h=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},gm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},yh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,m=i>>2,g=(i&3)<<4|c>>4;let w=(c&15)<<2|d>>6,R=d&63;u||(R=64,a||(w=64)),r.push(t[m],t[g],t[w],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(_h(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||g==null)throw new _m;const w=i<<2|c>>4;if(r.push(w),d!==64){const R=c<<4&240|d>>2;if(r.push(R),g!==64){const C=d<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class _m extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ym=function(n){const e=_h(n);return yh.encodeByteArray(e,!0)},vh=function(n){return ym(n).replace(/\./g,"")},wh=function(n){try{return yh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wm=()=>vm().__FIREBASE_DEFAULTS__,Em=()=>{if(typeof process>"u"||typeof Tl>"u")return;const n=Tl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Tm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&wh(n[1]);return e&&JSON.parse(e)},sa=()=>{try{return mm()||wm()||Em()||Tm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Eh=()=>{var n;return(n=sa())===null||n===void 0?void 0:n.config},Im=n=>{var e;return(e=sa())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class bm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Am(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Sm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Le())}function Rm(){var n;const e=(n=sa())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function km(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Cm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nm(){const n=Le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Vm(){return!Rm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Th(){try{return typeof indexedDB=="object"}catch{return!1}}function Ih(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function Dm(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Om="FirebaseError";class st extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Om,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cn.prototype.create)}}class cn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Lm(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new st(s,c,r)}}function Lm(n,e){return n.replace(Mm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Mm=/\{\$([^}]+)}/g;function Er(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Il(i)&&Il(a)){if(!Er(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Il(n){return n!==null&&typeof n=="object"}/**
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
 */function bh(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ar(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function cr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function xm(n,e){const t=new Fm(n,e);return t.subscribe.bind(t)}class Fm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Um(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=to),s.error===void 0&&(s.error=to),s.complete===void 0&&(s.complete=to);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Um(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function to(){}/**
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
 */function he(n){return n&&n._delegate?n._delegate:n}class We{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wt="[DEFAULT]";/**
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
 */class $m{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new bm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jm(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bm(n){return n===Wt?void 0:n}function jm(n){return n.instantiationMode==="EAGER"}/**
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
 */class qm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $m(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var W;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(W||(W={}));const zm={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},Wm=W.INFO,Hm={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},Km=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Hm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ia{constructor(e){this.name=e,this._logLevel=Wm,this._logHandler=Km,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const Gm=(n,e)=>e.some(t=>n instanceof t);let bl,Al;function Qm(){return bl||(bl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jm(){return Al||(Al=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ah=new WeakMap,Ao=new WeakMap,Sh=new WeakMap,no=new WeakMap,oa=new WeakMap;function Ym(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(dt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ah.set(t,n)}).catch(()=>{}),oa.set(e,n),e}function Xm(n){if(Ao.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ao.set(n,e)}let So={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ao.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Sh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return dt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Zm(n){So=n(So)}function eg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ro(this),e,...t);return Sh.set(r,e.sort?e.sort():[e]),dt(r)}:Jm().includes(n)?function(...e){return n.apply(ro(this),e),dt(Ah.get(this))}:function(...e){return dt(n.apply(ro(this),e))}}function tg(n){return typeof n=="function"?eg(n):(n instanceof IDBTransaction&&Xm(n),Gm(n,Qm())?new Proxy(n,So):n)}function dt(n){if(n instanceof IDBRequest)return Ym(n);if(no.has(n))return no.get(n);const e=tg(n);return e!==n&&(no.set(n,e),oa.set(e,n)),e}const ro=n=>oa.get(n);function ti(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=dt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(dt(a.result),u.oldVersion,u.newVersion,dt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}function so(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),dt(t).then(()=>{})}const ng=["get","getKey","getAll","getAllKeys","count"],rg=["put","add","delete","clear"],io=new Map;function Sl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(io.get(e))return io.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=rg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ng.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return io.set(e,i),i}Zm(n=>({...n,get:(e,t,r)=>Sl(e,t)||n.get(e,t,r),has:(e,t)=>!!Sl(e,t)||n.has(e,t)}));/**
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
 */class sg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ig(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ig(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ro="@firebase/app",Rl="0.13.2";/**
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
 */const pt=new ia("@firebase/app"),og="@firebase/app-compat",ag="@firebase/analytics-compat",cg="@firebase/analytics",lg="@firebase/app-check-compat",ug="@firebase/app-check",hg="@firebase/auth",dg="@firebase/auth-compat",fg="@firebase/database",pg="@firebase/data-connect",mg="@firebase/database-compat",gg="@firebase/functions",_g="@firebase/functions-compat",yg="@firebase/installations",vg="@firebase/installations-compat",wg="@firebase/messaging",Eg="@firebase/messaging-compat",Tg="@firebase/performance",Ig="@firebase/performance-compat",bg="@firebase/remote-config",Ag="@firebase/remote-config-compat",Sg="@firebase/storage",Rg="@firebase/storage-compat",Pg="@firebase/firestore",kg="@firebase/ai",Cg="@firebase/firestore-compat",Ng="firebase",Vg="11.10.0";/**
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
 */const Po="[DEFAULT]",Dg={[Ro]:"fire-core",[og]:"fire-core-compat",[cg]:"fire-analytics",[ag]:"fire-analytics-compat",[ug]:"fire-app-check",[lg]:"fire-app-check-compat",[hg]:"fire-auth",[dg]:"fire-auth-compat",[fg]:"fire-rtdb",[pg]:"fire-data-connect",[mg]:"fire-rtdb-compat",[gg]:"fire-fn",[_g]:"fire-fn-compat",[yg]:"fire-iid",[vg]:"fire-iid-compat",[wg]:"fire-fcm",[Eg]:"fire-fcm-compat",[Tg]:"fire-perf",[Ig]:"fire-perf-compat",[bg]:"fire-rc",[Ag]:"fire-rc-compat",[Sg]:"fire-gcs",[Rg]:"fire-gcs-compat",[Pg]:"fire-fst",[Cg]:"fire-fst-compat",[kg]:"fire-vertex","fire-js":"fire-js",[Ng]:"fire-js-all"};/**
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
 */const Ps=new Map,Og=new Map,ko=new Map;function Pl(n,e){try{n.container.addComponent(e)}catch(t){pt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function et(n){const e=n.name;if(ko.has(e))return pt.debug(`There were multiple attempts to register component ${e}.`),!1;ko.set(e,n);for(const t of Ps.values())Pl(t,n);for(const t of Og.values())Pl(t,n);return!0}function Mr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ut(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Lg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pt=new cn("app","Firebase",Lg);/**
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
 */class Mg{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new We("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
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
 */const ni=Vg;function Rh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Po,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Pt.create("bad-app-name",{appName:String(s)});if(t||(t=Eh()),!t)throw Pt.create("no-options");const i=Ps.get(s);if(i){if(Er(t,i.options)&&Er(r,i.config))return i;throw Pt.create("duplicate-app",{appName:s})}const a=new qm(s);for(const u of ko.values())a.addComponent(u);const c=new Mg(t,r,a);return Ps.set(s,c),c}function xg(n=Po){const e=Ps.get(n);if(!e&&n===Po&&Eh())return Rh();if(!e)throw Pt.create("no-app",{appName:n});return e}function Ue(n,e,t){var r;let s=(r=Dg[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pt.warn(c.join(" "));return}et(new We(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Fg="firebase-heartbeat-database",Ug=1,Tr="firebase-heartbeat-store";let oo=null;function Ph(){return oo||(oo=ti(Fg,Ug,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Tr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Pt.create("idb-open",{originalErrorMessage:n.message})})),oo}async function $g(n){try{const t=(await Ph()).transaction(Tr),r=await t.objectStore(Tr).get(kh(n));return await t.done,r}catch(e){if(e instanceof st)pt.warn(e.message);else{const t=Pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pt.warn(t.message)}}}async function kl(n,e){try{const r=(await Ph()).transaction(Tr,"readwrite");await r.objectStore(Tr).put(e,kh(n)),await r.done}catch(t){if(t instanceof st)pt.warn(t.message);else{const r=Pt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});pt.warn(r.message)}}}function kh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Bg=1024,jg=30;class qg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Wg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Cl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>jg){const a=Hg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){pt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Cl(),{heartbeatsToSend:r,unsentEntries:s}=zg(this._heartbeatsCache.heartbeats),i=vh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return pt.warn(t),""}}}function Cl(){return new Date().toISOString().substring(0,10)}function zg(n,e=Bg){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Nl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Nl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Wg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Th()?Ih().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await $g(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return kl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return kl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Nl(n){return vh(JSON.stringify({version:2,heartbeats:n})).length}function Hg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Kg(n){et(new We("platform-logger",e=>new sg(e),"PRIVATE")),et(new We("heartbeat",e=>new qg(e),"PRIVATE")),Ue(Ro,Rl,n),Ue(Ro,Rl,"esm2017"),Ue("fire-js","")}Kg("");function Ch(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Nh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gg=Nh,Vh=new cn("auth","Firebase",Nh());/**
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
 */const ks=new ia("@firebase/auth");function Qg(n,...e){ks.logLevel<=W.WARN&&ks.warn(`Auth (${ni}): ${n}`,...e)}function ws(n,...e){ks.logLevel<=W.ERROR&&ks.error(`Auth (${ni}): ${n}`,...e)}/**
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
 */function Sn(n,...e){throw ca(n,...e)}function aa(n,...e){return ca(n,...e)}function Dh(n,e,t){const r=Object.assign(Object.assign({},Gg()),{[e]:t});return new cn("auth","Firebase",r).create(e,{appName:n.name})}function En(n){return Dh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ca(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Vh.create(n,...e)}function G(n,e,...t){if(!n)throw ca(e,...t)}function ht(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ws(e),new Error(e)}function Cs(n,e){n||ht(e)}function Jg(){return Vl()==="http:"||Vl()==="https:"}function Vl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Yg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jg()||km()||"connection"in navigator)?navigator.onLine:!0}function Xg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class xr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Cs(t>e,"Short delay should be less than long delay!"),this.isMobile=Sm()||Cm()}get(){return Yg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Zg(n,e){Cs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Oh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const e_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const t_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],n_=new xr(3e4,6e4);function Mn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ln(n,e,t,r,s={}){return Lh(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=bh(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return Pm()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&ei(n.emulatorConfig.host)&&(d.credentials="include"),Oh.fetch()(await Mh(n,n.config.apiHost,t,c),d)})}async function Lh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},e_),e);try{const s=new s_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ds(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ds(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ds(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ds(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Dh(n,m,d);Sn(n,m)}}catch(s){if(s instanceof st)throw s;Sn(n,"network-request-failed",{message:String(s)})}}async function la(n,e,t,r,s={}){const i=await ln(n,e,t,r,s);return"mfaPendingCredential"in i&&Sn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Mh(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Zg(n.config,s):`${n.config.apiScheme}://${s}`;return t_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function r_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class s_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(aa(this.auth,"network-request-failed")),n_.get())})}}function ds(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=aa(n,e,r);return s.customData._tokenResponse=t,s}function Dl(n){return n!==void 0&&n.enterprise!==void 0}class i_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return r_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function o_(n,e){return ln(n,"GET","/v2/recaptchaConfig",Mn(n,e))}/**
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
 */async function a_(n,e){return ln(n,"POST","/v1/accounts:delete",e)}async function Ns(n,e){return ln(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function fr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function c_(n,e=!1){const t=he(n),r=await t.getIdToken(e),s=xh(r);G(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:fr(ao(s.auth_time)),issuedAtTime:fr(ao(s.iat)),expirationTime:fr(ao(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ao(n){return Number(n)*1e3}function xh(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ws("JWT malformed, contained fewer than 3 sections"),null;try{const s=wh(t);return s?JSON.parse(s):(ws("Failed to decode base64 JWT payload"),null)}catch(s){return ws("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ol(n){const e=xh(n);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Co(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof st&&l_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function l_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class u_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class No{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fr(this.lastLoginAt),this.creationTime=fr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Vs(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Co(n,Ns(t,{idToken:r}));G(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Fh(i.providerUserInfo):[],c=d_(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),m=u?d:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new No(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(n,g)}async function h_(n){const e=he(n);await Vs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function d_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Fh(n){return n.map(e=>{var{providerId:t}=e,r=Ch(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function f_(n,e){const t=await Lh(n,{},async()=>{const r=bh({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Mh(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&ei(n.emulatorConfig.host)&&(u.credentials="include"),Oh.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function p_(n,e){return ln(n,"POST","/v2/accounts:revokeToken",Mn(n,e))}/**
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
 */class Tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ol(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){G(e.length!==0,"internal-error");const t=Ol(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await f_(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Tn;return r&&(G(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tn,this.toJSON())}_performRefresh(){return ht("not implemented")}}/**
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
 */function It(n,e){G(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class qe{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Ch(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new u_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new No(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Co(this,this.stsTokenManager.getToken(this.auth,e));return G(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return c_(this,e)}reload(){return h_(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new qe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Vs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ut(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await Co(this,a_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,d,m;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(s=t.email)!==null&&s!==void 0?s:void 0,R=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,V=(c=t.tenantId)!==null&&c!==void 0?c:void 0,N=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,j=(d=t.createdAt)!==null&&d!==void 0?d:void 0,B=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:z,emailVerified:ne,isAnonymous:Pe,providerData:re,stsTokenManager:T}=t;G(z&&T,e,"internal-error");const _=Tn.fromJSON(this.name,T);G(typeof z=="string",e,"internal-error"),It(g,e.name),It(w,e.name),G(typeof ne=="boolean",e,"internal-error"),G(typeof Pe=="boolean",e,"internal-error"),It(R,e.name),It(C,e.name),It(V,e.name),It(N,e.name),It(j,e.name),It(B,e.name);const y=new qe({uid:z,auth:e,email:w,emailVerified:ne,displayName:g,isAnonymous:Pe,photoURL:C,phoneNumber:R,tenantId:V,stsTokenManager:_,createdAt:j,lastLoginAt:B});return re&&Array.isArray(re)&&(y.providerData=re.map(E=>Object.assign({},E))),N&&(y._redirectEventId=N),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new Tn;s.updateFromServerResponse(t);const i=new qe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Vs(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];G(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Fh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Tn;c.updateFromIdToken(r);const u=new qe({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new No(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const Ll=new Map;function Ht(n){Cs(n instanceof Function,"Expected a class definition");let e=Ll.get(n);return e?(Cs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ll.set(n,e),e)}/**
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
 */class Uh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Uh.type="NONE";const Ml=Uh;/**
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
 */function co(n,e,t){return`firebase:${n}:${e}:${t}`}class In{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=co(this.userKey,s.apiKey,i),this.fullPersistenceKey=co("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ns(this.auth,{idToken:e}).catch(()=>{});return t?qe._fromGetAccountInfoResponse(this.auth,t,e):null}return qe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new In(Ht(Ml),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Ht(Ml);const a=co(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(a);if(m){let g;if(typeof m=="string"){const w=await Ns(e,{idToken:m}).catch(()=>{});if(!w)break;g=await qe._fromGetAccountInfoResponse(e,w,m)}else g=qe._fromJSON(e,m);d!==i&&(c=g),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new In(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new In(i,e,r))}}/**
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
 */function xl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($h(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(m_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jh(e))return"Blackberry";if(qh(e))return"Webos";if(g_(e))return"Safari";if((e.includes("chrome/")||__(e))&&!e.includes("edge/"))return"Chrome";if(Bh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function m_(n=Le()){return/firefox\//i.test(n)}function g_(n=Le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function __(n=Le()){return/crios\//i.test(n)}function $h(n=Le()){return/iemobile/i.test(n)}function Bh(n=Le()){return/android/i.test(n)}function jh(n=Le()){return/blackberry/i.test(n)}function qh(n=Le()){return/webos/i.test(n)}function y_(n=Le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function v_(){return Nm()&&document.documentMode===10}function w_(n=Le()){return y_(n)||Bh(n)||qh(n)||jh(n)||/windows phone/i.test(n)||$h(n)}/**
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
 */function zh(n,e=[]){let t;switch(n){case"Browser":t=xl(Le());break;case"Worker":t=`${xl(Le())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ni}/${r}`}/**
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
 */class E_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(n,e={}){return ln(n,"GET","/v2/passwordPolicy",Mn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=6;class b_{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:I_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class A_{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fl(this),this.idTokenSubscription=new Fl(this),this.beforeStateQueue=new E_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Vh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ht(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await In.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ns(this,{idToken:e}),r=await qe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ut(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ut(this.app))return Promise.reject(En(this));const t=e?he(e):null;return t&&G(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ut(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ut(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await T_(this),t=new b_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new cn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await p_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ht(e)||this._popupRedirectResolver;G(t,this,"argument-error"),this.redirectPersistenceManager=await In.create(this,[Ht(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Qg(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ri(n){return he(n)}class Fl{constructor(e){this.auth=e,this.observer=null,this.addObserver=xm(t=>this.observer=t)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ua={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function S_(n){ua=n}function R_(n){return ua.loadJS(n)}function P_(){return ua.recaptchaEnterpriseScript}class k_{constructor(){this.enterprise=new C_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class C_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const N_="recaptcha-enterprise",Wh="NO_RECAPTCHA";class V_{constructor(e){this.type=N_,this.auth=ri(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{o_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new i_(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Dl(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Wh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new k_().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Dl(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=P_();u.length!==0&&(u+=c),R_(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function Ul(n,e,t,r=!1,s=!1){const i=new V_(n);let a;if(s)a=Wh;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function $l(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Ul(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Ul(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
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
 */function D_(n,e){const t=Mr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Er(i,e??{}))return s;Sn(s,"already-initialized")}return t.initialize({options:e})}function O_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Ht);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */class L_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ht("not implemented")}_getIdTokenResponse(e){return ht("not implemented")}_linkToIdToken(e,t){return ht("not implemented")}_getReauthenticationResolver(e){return ht("not implemented")}}async function M_(n,e){return ln(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function x_(n,e){return la(n,"POST","/v1/accounts:signInWithPassword",Mn(n,e))}/**
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
 */async function F_(n,e){return la(n,"POST","/v1/accounts:signInWithEmailLink",Mn(n,e))}async function U_(n,e){return la(n,"POST","/v1/accounts:signInWithEmailLink",Mn(n,e))}/**
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
 */class Ir extends L_{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Ir(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Ir(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $l(e,t,"signInWithPassword",x_);case"emailLink":return F_(e,{email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $l(e,r,"signUpPassword",M_);case"emailLink":return U_(e,{idToken:t,email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */function $_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function B_(n){const e=ar(cr(n)).link,t=e?ar(cr(e)).deep_link_id:null,r=ar(cr(n)).deep_link_id;return(r?ar(cr(r)).link:null)||r||t||e||n}class ha{constructor(e){var t,r,s,i,a,c;const u=ar(cr(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,m=(r=u.oobCode)!==null&&r!==void 0?r:null,g=$_((s=u.mode)!==null&&s!==void 0?s:null);G(d&&m&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=m,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.lang)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=B_(e);try{return new ha(t)}catch{return null}}}/**
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
 */class xn{constructor(){this.providerId=xn.PROVIDER_ID}static credential(e,t){return Ir._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ha.parseLink(t);return G(r,"argument-error"),Ir._fromEmailAndCode(e,r.code,r.tenantId)}}xn.PROVIDER_ID="password";xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await qe._fromIdTokenResponse(e,r,s),a=Bl(r);return new Ds({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Bl(r);return new Ds({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Bl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Os extends st{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Os.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Os(e,t,r,s)}}function j_(n,e,t,r){return t._getIdTokenResponse(n).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Os._fromErrorAndOperation(n,i,e,r):i})}/**
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
 */async function q_(n,e,t=!1){if(ut(n.app))return Promise.reject(En(n));const r="signIn",s=await j_(n,r,e),i=await Ds._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function z_(n,e){return q_(ri(n),e)}/**
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
 */async function W_(n){const e=ri(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function jl(n,e,t){return ut(n.app)?Promise.reject(En(n)):z_(he(n),xn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&W_(n),r})}function H_(n,e,t,r){return he(n).onAuthStateChanged(e,t,r)}function Hh(n){return he(n).signOut()}const Ls="__sak";/**
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
 */class Kh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ls,"1"),this.storage.removeItem(Ls),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const K_=1e3,G_=10;class Gh extends Kh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=w_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);v_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,G_):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},K_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gh.type="LOCAL";const Q_=Gh;/**
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
 */class J_ extends Kh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}J_.type="SESSION";/**
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
 */function Y_(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class si{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new si(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await Y_(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}si.receivers=[];/**
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
 */function X_(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Z_{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=X_("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const w=g;if(w.data.eventId===d)switch(w.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(w.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function ql(){return window}/**
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
 */function Qh(){return typeof ql().WorkerGlobalScope<"u"&&typeof ql().importScripts=="function"}async function ey(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ty(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ny(){return Qh()?self:null}/**
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
 */const Jh="firebaseLocalStorageDb",ry=1,Ms="firebaseLocalStorage",Yh="fbase_key";class Fr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ii(n,e){return n.transaction([Ms],e?"readwrite":"readonly").objectStore(Ms)}function sy(){const n=indexedDB.deleteDatabase(Jh);return new Fr(n).toPromise()}function Vo(){const n=indexedDB.open(Jh,ry);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ms,{keyPath:Yh})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ms)?e(r):(r.close(),await sy(),e(await Vo()))})})}async function zl(n,e,t){const r=ii(n,!0).put({[Yh]:e,value:t});return new Fr(r).toPromise()}async function iy(n,e){const t=ii(n,!1).get(e),r=await new Fr(t).toPromise();return r===void 0?null:r.value}function Wl(n,e){const t=ii(n,!0).delete(e);return new Fr(t).toPromise()}const oy=800,ay=3;class Xh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>ay)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=si._getInstance(ny()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ey(),!this.activeServiceWorker)return;this.sender=new Z_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ty()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vo();return await zl(e,Ls,"1"),await Wl(e,Ls),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>zl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>iy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ii(s,!1).getAll();return new Fr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xh.type="LOCAL";const cy=Xh;new xr(3e4,6e4);/**
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
 */new xr(2e3,1e4);/**
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
 */new xr(3e4,6e4);/**
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
 */new xr(5e3,15e3);var Hl="@firebase/auth",Kl="1.10.8";/**
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
 */class ly{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hy(n){et(new We("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;G(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zh(n)},d=new A_(r,s,i,u);return O_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),et(new We("auth-internal",e=>{const t=ri(e.getProvider("auth").getImmediate());return(r=>new ly(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ue(Hl,Kl,uy(n)),Ue(Hl,Kl,"esm2017")}/**
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
 */const dy=300;Im("authIdTokenMaxAge");function fy(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}S_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=aa("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",fy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hy("Browser");const oi="Streak",py="Europe/Berlin",lo={year:2026,month:10,day:31},tt=30,Zh=22,ed=21,my=21,ye=[{name:"Noob 1",group:"noob",level:1,days:1},{name:"Noob 2",group:"noob",level:2,days:1},{name:"Noob 3",group:"noob",level:3,days:1},{name:"Advanced 1",group:"advanced",level:1,days:1},{name:"Advanced 2",group:"advanced",level:2,days:1},{name:"Advanced 3",group:"advanced",level:3,days:2},{name:"Pro 1",group:"pro",level:1,days:2},{name:"Pro 2",group:"pro",level:2,days:3},{name:"Elite",group:"elite",level:0,days:4},{name:"Unreal",group:"unreal",level:0,days:6},{name:"Hacker",group:"hacker",level:0,days:8},{name:"Gotti",group:"gotti",level:0,days:null}],ai={noob:{main:"#5ad35a",dark:"#2a7a2a",light:"#b8ffb0"},advanced:{main:"#3fa9ff",dark:"#1a4f9c",light:"#bfe3ff"},pro:{main:"#a45bff",dark:"#5226a0",light:"#e2c9ff"},elite:{main:"#ff9a2e",dark:"#a8520a",light:"#ffd9a8"},unreal:{main:"#ff4fa3",dark:"#9c1858",light:"#ffc2e0"},hacker:{main:"#22e3c4",dark:"#0b7565",light:"#b5fff2"},gotti:{main:"#ffd23f",dark:"#a87a00",light:"#fff3b0"}},fs=300,gy=["tryitgx"],or=60,td=864e5;let uo;function _y(){return uo||(uo=new Intl.DateTimeFormat("en-GB",{timeZone:py,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})),uo}function un(n){const e={};for(const t of _y().formatToParts(new Date(n)))t.type!=="literal"&&(e[t.type]=parseInt(t.value,10));return e.hour===24&&(e.hour=0),{year:e.year,month:e.month,day:e.day,hour:e.hour,minute:e.minute,second:e.second}}function Gl(n){const e=un(n);return Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)-Math.floor(n/1e3)*1e3}function nd({year:n,month:e,day:t,hour:r=0,minute:s=0}){const i=Date.UTC(n,e-1,t,r,s);let a=i-Gl(i);const c=Gl(a);return i-c!==a&&(a=i-c),a}const rd=Date.UTC(lo.year,lo.month-1,lo.day);function da(n){return Math.round((Date.UTC(n.year,n.month-1,n.day)-rd)/td)}function sd(n){return da(un(n))}function yy(n){const e=new Date(rd+n*td);return{year:e.getUTCFullYear(),month:e.getUTCMonth()+1,day:e.getUTCDate()}}function Jt(n,e,t=0){return nd({...yy(n),hour:e,minute:t})}const fa=n=>Jt(n,Zh),id=n=>fa(n-1),vy=()=>id(1);function Rn(n){const e=un(n);return da(e)+(e.hour>=Zh?1:0)}function od(n){const e=un(n);if(e.hour<ed)return null;const t=da(e);return t>=1&&t<=tt?t:null}const ho=n=>Jt(n,ed),wy=n=>Jt(n+1,0),fo=n=>Jt(n+1,my),xs=n=>String(n).padStart(2,"0");function ad(n){const e=un(n);return`${xs(e.hour)}:${xs(e.minute)}`}function pa(n){const e=un(n);return`${xs(e.day)}.${xs(e.month)}.`}function br(n){return`${pa(n)} ${ad(n)}`}const Ey=1e-9;function ci(n,e){const t=n.rankIndex||0,r=ye[t],s=ye[t+1]||null,i=n.days||{},a=n.joinedDay||1;if(r.days==null)return{rankIndex:t,rank:r,next:s,pct:100,rest:0,full:!0,final:!0,provisional:0};let c=0;const u=Rn(e);u>=1&&u<=tt&&u>=a&&!i[u]&&(c+=Math.min(1,Math.max(0,(e-id(u))/864e5)));const d=u-1;d>=1&&d<=tt&&d>=a&&!i[d]&&e<wy(d)&&(c+=1);const m=(n.progress||0)+c,g=Math.min(1,m/r.days),w=Math.floor(g*1e3)/10;return{rankIndex:t,rank:r,next:s,pct:w,rest:Math.round((100-w)*10)/10,full:m>=r.days-Ey,final:!1,provisional:c}}function Ql(n){var e;return((e=ye[n])==null?void 0:e.name)||"?"}var Ty="firebase",Iy="11.10.0";/**
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
 */Ue(Ty,Iy,"app");var Jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kt,cd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function y(){}y.prototype=_.prototype,T.D=_.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(E,I,A){for(var v=Array(arguments.length-2),it=2;it<arguments.length;it++)v[it-2]=arguments[it];return _.prototype[I].apply(E,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,y){y||(y=0);var E=Array(16);if(typeof _=="string")for(var I=0;16>I;++I)E[I]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(I=0;16>I;++I)E[I]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=T.g[0],y=T.g[1],I=T.g[2];var A=T.g[3],v=_+(A^y&(I^A))+E[0]+3614090360&4294967295;_=y+(v<<7&4294967295|v>>>25),v=A+(I^_&(y^I))+E[1]+3905402710&4294967295,A=_+(v<<12&4294967295|v>>>20),v=I+(y^A&(_^y))+E[2]+606105819&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(_^I&(A^_))+E[3]+3250441966&4294967295,y=I+(v<<22&4294967295|v>>>10),v=_+(A^y&(I^A))+E[4]+4118548399&4294967295,_=y+(v<<7&4294967295|v>>>25),v=A+(I^_&(y^I))+E[5]+1200080426&4294967295,A=_+(v<<12&4294967295|v>>>20),v=I+(y^A&(_^y))+E[6]+2821735955&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(_^I&(A^_))+E[7]+4249261313&4294967295,y=I+(v<<22&4294967295|v>>>10),v=_+(A^y&(I^A))+E[8]+1770035416&4294967295,_=y+(v<<7&4294967295|v>>>25),v=A+(I^_&(y^I))+E[9]+2336552879&4294967295,A=_+(v<<12&4294967295|v>>>20),v=I+(y^A&(_^y))+E[10]+4294925233&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(_^I&(A^_))+E[11]+2304563134&4294967295,y=I+(v<<22&4294967295|v>>>10),v=_+(A^y&(I^A))+E[12]+1804603682&4294967295,_=y+(v<<7&4294967295|v>>>25),v=A+(I^_&(y^I))+E[13]+4254626195&4294967295,A=_+(v<<12&4294967295|v>>>20),v=I+(y^A&(_^y))+E[14]+2792965006&4294967295,I=A+(v<<17&4294967295|v>>>15),v=y+(_^I&(A^_))+E[15]+1236535329&4294967295,y=I+(v<<22&4294967295|v>>>10),v=_+(I^A&(y^I))+E[1]+4129170786&4294967295,_=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(_^y))+E[6]+3225465664&4294967295,A=_+(v<<9&4294967295|v>>>23),v=I+(_^y&(A^_))+E[11]+643717713&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^_&(I^A))+E[0]+3921069994&4294967295,y=I+(v<<20&4294967295|v>>>12),v=_+(I^A&(y^I))+E[5]+3593408605&4294967295,_=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(_^y))+E[10]+38016083&4294967295,A=_+(v<<9&4294967295|v>>>23),v=I+(_^y&(A^_))+E[15]+3634488961&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^_&(I^A))+E[4]+3889429448&4294967295,y=I+(v<<20&4294967295|v>>>12),v=_+(I^A&(y^I))+E[9]+568446438&4294967295,_=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(_^y))+E[14]+3275163606&4294967295,A=_+(v<<9&4294967295|v>>>23),v=I+(_^y&(A^_))+E[3]+4107603335&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^_&(I^A))+E[8]+1163531501&4294967295,y=I+(v<<20&4294967295|v>>>12),v=_+(I^A&(y^I))+E[13]+2850285829&4294967295,_=y+(v<<5&4294967295|v>>>27),v=A+(y^I&(_^y))+E[2]+4243563512&4294967295,A=_+(v<<9&4294967295|v>>>23),v=I+(_^y&(A^_))+E[7]+1735328473&4294967295,I=A+(v<<14&4294967295|v>>>18),v=y+(A^_&(I^A))+E[12]+2368359562&4294967295,y=I+(v<<20&4294967295|v>>>12),v=_+(y^I^A)+E[5]+4294588738&4294967295,_=y+(v<<4&4294967295|v>>>28),v=A+(_^y^I)+E[8]+2272392833&4294967295,A=_+(v<<11&4294967295|v>>>21),v=I+(A^_^y)+E[11]+1839030562&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^_)+E[14]+4259657740&4294967295,y=I+(v<<23&4294967295|v>>>9),v=_+(y^I^A)+E[1]+2763975236&4294967295,_=y+(v<<4&4294967295|v>>>28),v=A+(_^y^I)+E[4]+1272893353&4294967295,A=_+(v<<11&4294967295|v>>>21),v=I+(A^_^y)+E[7]+4139469664&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^_)+E[10]+3200236656&4294967295,y=I+(v<<23&4294967295|v>>>9),v=_+(y^I^A)+E[13]+681279174&4294967295,_=y+(v<<4&4294967295|v>>>28),v=A+(_^y^I)+E[0]+3936430074&4294967295,A=_+(v<<11&4294967295|v>>>21),v=I+(A^_^y)+E[3]+3572445317&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^_)+E[6]+76029189&4294967295,y=I+(v<<23&4294967295|v>>>9),v=_+(y^I^A)+E[9]+3654602809&4294967295,_=y+(v<<4&4294967295|v>>>28),v=A+(_^y^I)+E[12]+3873151461&4294967295,A=_+(v<<11&4294967295|v>>>21),v=I+(A^_^y)+E[15]+530742520&4294967295,I=A+(v<<16&4294967295|v>>>16),v=y+(I^A^_)+E[2]+3299628645&4294967295,y=I+(v<<23&4294967295|v>>>9),v=_+(I^(y|~A))+E[0]+4096336452&4294967295,_=y+(v<<6&4294967295|v>>>26),v=A+(y^(_|~I))+E[7]+1126891415&4294967295,A=_+(v<<10&4294967295|v>>>22),v=I+(_^(A|~y))+E[14]+2878612391&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~_))+E[5]+4237533241&4294967295,y=I+(v<<21&4294967295|v>>>11),v=_+(I^(y|~A))+E[12]+1700485571&4294967295,_=y+(v<<6&4294967295|v>>>26),v=A+(y^(_|~I))+E[3]+2399980690&4294967295,A=_+(v<<10&4294967295|v>>>22),v=I+(_^(A|~y))+E[10]+4293915773&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~_))+E[1]+2240044497&4294967295,y=I+(v<<21&4294967295|v>>>11),v=_+(I^(y|~A))+E[8]+1873313359&4294967295,_=y+(v<<6&4294967295|v>>>26),v=A+(y^(_|~I))+E[15]+4264355552&4294967295,A=_+(v<<10&4294967295|v>>>22),v=I+(_^(A|~y))+E[6]+2734768916&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~_))+E[13]+1309151649&4294967295,y=I+(v<<21&4294967295|v>>>11),v=_+(I^(y|~A))+E[4]+4149444226&4294967295,_=y+(v<<6&4294967295|v>>>26),v=A+(y^(_|~I))+E[11]+3174756917&4294967295,A=_+(v<<10&4294967295|v>>>22),v=I+(_^(A|~y))+E[2]+718787259&4294967295,I=A+(v<<15&4294967295|v>>>17),v=y+(A^(I|~_))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(I+(v<<21&4294967295|v>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var y=_-this.blockSize,E=this.B,I=this.h,A=0;A<_;){if(I==0)for(;A<=y;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<_;)if(E[I++]=T.charCodeAt(A++),I==this.blockSize){s(this,E),I=0;break}}else for(;A<_;)if(E[I++]=T[A++],I==this.blockSize){s(this,E),I=0;break}}this.h=I,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var y=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=y&255,y/=256;for(this.u(T),T=Array(16),_=y=0;4>_;++_)for(var E=0;32>E;E+=8)T[y++]=this.g[_]>>>E&255;return T};function i(T,_){var y=c;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=_(T)}function a(T,_){this.h=_;for(var y=[],E=!0,I=T.length-1;0<=I;I--){var A=T[I]|0;E&&A==_||(y[I]=A,E=!1)}this.g=y}var c={};function u(T){return-128<=T&&128>T?i(T,function(_){return new a([_|0],0>_?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return N(d(-T));for(var _=[],y=1,E=0;T>=y;E++)_[E]=T/y|0,y*=4294967296;return new a(_,0)}function m(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return N(m(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(_,8)),E=g,I=0;I<T.length;I+=8){var A=Math.min(8,T.length-I),v=parseInt(T.substring(I,I+A),_);8>A?(A=d(Math.pow(_,A)),E=E.j(A).add(d(v))):(E=E.j(y),E=E.add(d(v)))}return E}var g=u(0),w=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(V(this))return-N(this).m();for(var T=0,_=1,y=0;y<this.g.length;y++){var E=this.i(y);T+=(0<=E?E:4294967296+E)*_,_*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(V(this))return"-"+N(this).toString(T);for(var _=d(Math.pow(T,6)),y=this,E="";;){var I=ne(y,_).g;y=j(y,I.j(_));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=I,C(y))return A+E;for(;6>A.length;)A="0"+A;E=A+E}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function V(T){return T.h==-1}n.l=function(T){return T=j(this,T),V(T)?-1:C(T)?0:1};function N(T){for(var _=T.g.length,y=[],E=0;E<_;E++)y[E]=~T.g[E];return new a(y,~T.h).add(w)}n.abs=function(){return V(this)?N(this):this},n.add=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],E=0,I=0;I<=_;I++){var A=E+(this.i(I)&65535)+(T.i(I)&65535),v=(A>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);E=v>>>16,A&=65535,v&=65535,y[I]=v<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function j(T,_){return T.add(N(_))}n.j=function(T){if(C(this)||C(T))return g;if(V(this))return V(T)?N(this).j(N(T)):N(N(this).j(T));if(V(T))return N(this.j(N(T)));if(0>this.l(R)&&0>T.l(R))return d(this.m()*T.m());for(var _=this.g.length+T.g.length,y=[],E=0;E<2*_;E++)y[E]=0;for(E=0;E<this.g.length;E++)for(var I=0;I<T.g.length;I++){var A=this.i(E)>>>16,v=this.i(E)&65535,it=T.i(I)>>>16,qn=T.i(I)&65535;y[2*E+2*I]+=v*qn,B(y,2*E+2*I),y[2*E+2*I+1]+=A*qn,B(y,2*E+2*I+1),y[2*E+2*I+1]+=v*it,B(y,2*E+2*I+1),y[2*E+2*I+2]+=A*it,B(y,2*E+2*I+2)}for(E=0;E<_;E++)y[E]=y[2*E+1]<<16|y[2*E];for(E=_;E<2*_;E++)y[E]=0;return new a(y,0)};function B(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function z(T,_){this.g=T,this.h=_}function ne(T,_){if(C(_))throw Error("division by zero");if(C(T))return new z(g,g);if(V(T))return _=ne(N(T),_),new z(N(_.g),N(_.h));if(V(_))return _=ne(T,N(_)),new z(N(_.g),_.h);if(30<T.g.length){if(V(T)||V(_))throw Error("slowDivide_ only works with positive integers.");for(var y=w,E=_;0>=E.l(T);)y=Pe(y),E=Pe(E);var I=re(y,1),A=re(E,1);for(E=re(E,2),y=re(y,2);!C(E);){var v=A.add(E);0>=v.l(T)&&(I=I.add(y),A=v),E=re(E,1),y=re(y,1)}return _=j(T,I.j(_)),new z(I,_)}for(I=g;0<=T.l(_);){for(y=Math.max(1,Math.floor(T.m()/_.m())),E=Math.ceil(Math.log(y)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),A=d(y),v=A.j(_);V(v)||0<v.l(T);)y-=E,A=d(y),v=A.j(_);C(A)&&(A=w),I=I.add(A),T=j(T,v)}return new z(I,T)}n.A=function(T){return ne(this,T).h},n.and=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],E=0;E<_;E++)y[E]=this.i(E)&T.i(E);return new a(y,this.h&T.h)},n.or=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],E=0;E<_;E++)y[E]=this.i(E)|T.i(E);return new a(y,this.h|T.h)},n.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],E=0;E<_;E++)y[E]=this.i(E)^T.i(E);return new a(y,this.h^T.h)};function Pe(T){for(var _=T.g.length+1,y=[],E=0;E<_;E++)y[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(y,T.h)}function re(T,_){var y=_>>5;_%=32;for(var E=T.g.length-y,I=[],A=0;A<E;A++)I[A]=0<_?T.i(A+y)>>>_|T.i(A+y+1)<<32-_:T.i(A+y);return new a(I,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,cd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,kt=a}).apply(typeof Jl<"u"?Jl:typeof self<"u"?self:typeof window<"u"?window:{});var ps=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ld,lr,ud,Es,Do,hd,dd,fd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ps=="object"&&ps];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break e;h=h[b]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,p=!1,b={next:function(){if(!p&&h<o.length){var S=h++;return{value:l(S,o[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function m(o,l,h){return o.call.apply(o.bind,arguments)}function g(o,l,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(l,b)}}return function(){return o.apply(l,arguments)}}function w(o,l,h){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:g,w.apply(null,arguments)}function R(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function C(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,b,S){for(var D=Array(arguments.length-2),X=2;X<arguments.length;X++)D[X-2]=arguments[X];return l.prototype[b].apply(p,D)}}function V(o){const l=o.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function N(o,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const b=o.length||0,S=p.length||0;o.length=b+S;for(let D=0;D<S;D++)o[b+D]=p[D]}else o.push(p)}}class j{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function B(o){return/^[\s\xa0]*$/.test(o)}function z(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function ne(o){return ne[" "](o),o}ne[" "]=function(){};var Pe=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function re(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function T(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function _(o){const l={};for(const h in o)l[h]=o[h];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let S=0;S<y.length;S++)h=y[S],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function I(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function A(o){c.setTimeout(()=>{throw o},0)}function v(){var o=Ni;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class it{constructor(){this.h=this.g=null}add(l,h){const p=qn.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var qn=new j(()=>new Op,o=>o.reset());class Op{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let zn,Wn=!1,Ni=new it,Tc=()=>{const o=c.Promise.resolve(void 0);zn=()=>{o.then(Lp)}};var Lp=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(h){A(h)}var l=qn;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Wn=!1};function vt(){this.s=this.s,this.C=this.C}vt.prototype.s=!1,vt.prototype.ma=function(){this.s||(this.s=!0,this.N())},vt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function we(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}we.prototype.h=function(){this.defaultPrevented=!0};var Mp=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o})();function Hn(o,l){if(we.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(Pe){e:{try{ne(l.nodeName);var b=!0;break e}catch{}b=!1}b||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:xp[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Hn.aa.h.call(this)}}C(Hn,we);var xp={2:"touch",3:"pen",4:"mouse"};Hn.prototype.h=function(){Hn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Kr="closure_listenable_"+(1e6*Math.random()|0),Fp=0;function Up(o,l,h,p,b){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=b,this.key=++Fp,this.da=this.fa=!1}function Gr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Qr(o){this.src=o,this.g={},this.h=0}Qr.prototype.add=function(o,l,h,p,b){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var D=Di(o,l,p,b);return-1<D?(l=o[D],h||(l.fa=!1)):(l=new Up(l,this.src,S,!!p,b),l.fa=h,o.push(l)),l};function Vi(o,l){var h=l.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,l,void 0),S;(S=0<=b)&&Array.prototype.splice.call(p,b,1),S&&(Gr(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Di(o,l,h,p){for(var b=0;b<o.length;++b){var S=o[b];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==p)return b}return-1}var Oi="closure_lm_"+(1e6*Math.random()|0),Li={};function Ic(o,l,h,p,b){if(Array.isArray(l)){for(var S=0;S<l.length;S++)Ic(o,l[S],h,p,b);return null}return h=Sc(h),o&&o[Kr]?o.K(l,h,d(p)?!!p.capture:!1,b):$p(o,l,h,!1,p,b)}function $p(o,l,h,p,b,S){if(!l)throw Error("Invalid event type");var D=d(b)?!!b.capture:!!b,X=xi(o);if(X||(o[Oi]=X=new Qr(o)),h=X.add(l,h,p,D,S),h.proxy)return h;if(p=Bp(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)Mp||(b=D),b===void 0&&(b=!1),o.addEventListener(l.toString(),p,b);else if(o.attachEvent)o.attachEvent(Ac(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Bp(){function o(h){return l.call(o.src,o.listener,h)}const l=jp;return o}function bc(o,l,h,p,b){if(Array.isArray(l))for(var S=0;S<l.length;S++)bc(o,l[S],h,p,b);else p=d(p)?!!p.capture:!!p,h=Sc(h),o&&o[Kr]?(o=o.i,l=String(l).toString(),l in o.g&&(S=o.g[l],h=Di(S,h,p,b),-1<h&&(Gr(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete o.g[l],o.h--)))):o&&(o=xi(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Di(l,h,p,b)),(h=-1<o?l[o]:null)&&Mi(h))}function Mi(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Kr])Vi(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(Ac(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=xi(l))?(Vi(h,o),h.h==0&&(h.src=null,l[Oi]=null)):Gr(o)}}}function Ac(o){return o in Li?Li[o]:Li[o]="on"+o}function jp(o,l){if(o.da)o=!0;else{l=new Hn(l,this);var h=o.listener,p=o.ha||o.src;o.fa&&Mi(o),o=h.call(p,l)}return o}function xi(o){return o=o[Oi],o instanceof Qr?o:null}var Fi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sc(o){return typeof o=="function"?o:(o[Fi]||(o[Fi]=function(l){return o.handleEvent(l)}),o[Fi])}function Ee(){vt.call(this),this.i=new Qr(this),this.M=this,this.F=null}C(Ee,vt),Ee.prototype[Kr]=!0,Ee.prototype.removeEventListener=function(o,l,h,p){bc(this,o,l,h,p)};function ke(o,l){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new we(l,o);else if(l instanceof we)l.target=l.target||o;else{var b=l;l=new we(p,o),E(l,b)}if(b=!0,h)for(var S=h.length-1;0<=S;S--){var D=l.g=h[S];b=Jr(D,p,!0,l)&&b}if(D=l.g=o,b=Jr(D,p,!0,l)&&b,b=Jr(D,p,!1,l)&&b,h)for(S=0;S<h.length;S++)D=l.g=h[S],b=Jr(D,p,!1,l)&&b}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],p=0;p<h.length;p++)Gr(h[p]);delete o.g[l],o.h--}}this.F=null},Ee.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},Ee.prototype.L=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function Jr(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var b=!0,S=0;S<l.length;++S){var D=l[S];if(D&&!D.da&&D.capture==h){var X=D.listener,me=D.ha||D.src;D.fa&&Vi(o.i,D),b=X.call(me,p)!==!1&&b}}return b&&!p.defaultPrevented}function Rc(o,l,h){if(typeof o=="function")h&&(o=w(o,h));else if(o&&typeof o.handleEvent=="function")o=w(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Pc(o){o.g=Rc(()=>{o.g=null,o.i&&(o.i=!1,Pc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class qp extends vt{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Pc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kn(o){vt.call(this),this.h=o,this.g={}}C(Kn,vt);var kc=[];function Cc(o){re(o.g,function(l,h){this.g.hasOwnProperty(h)&&Mi(l)},o),o.g={}}Kn.prototype.N=function(){Kn.aa.N.call(this),Cc(this)},Kn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ui=c.JSON.stringify,zp=c.JSON.parse,Wp=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function $i(){}$i.prototype.h=null;function Nc(o){return o.h||(o.h=o.i())}function Vc(){}var Gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Bi(){we.call(this,"d")}C(Bi,we);function ji(){we.call(this,"c")}C(ji,we);var Bt={},Dc=null;function Yr(){return Dc=Dc||new Ee}Bt.La="serverreachability";function Oc(o){we.call(this,Bt.La,o)}C(Oc,we);function Qn(o){const l=Yr();ke(l,new Oc(l))}Bt.STAT_EVENT="statevent";function Lc(o,l){we.call(this,Bt.STAT_EVENT,o),this.stat=l}C(Lc,we);function Ce(o){const l=Yr();ke(l,new Lc(l,o))}Bt.Ma="timingevent";function Mc(o,l){we.call(this,Bt.Ma,o),this.size=l}C(Mc,we);function Jn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function Yn(){this.g=!0}Yn.prototype.xa=function(){this.g=!1};function Hp(o,l,h,p,b,S){o.info(function(){if(o.g)if(S)for(var D="",X=S.split("&"),me=0;me<X.length;me++){var Q=X[me].split("=");if(1<Q.length){var Te=Q[0];Q=Q[1];var Ie=Te.split("_");D=2<=Ie.length&&Ie[1]=="type"?D+(Te+"="+Q+"&"):D+(Te+"=redacted&")}}else D=null;else D=S;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+l+`
`+h+`
`+D})}function Kp(o,l,h,p,b,S,D){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+l+`
`+h+`
`+S+" "+D})}function fn(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Qp(o,h)+(p?" "+p:"")})}function Gp(o,l){o.info(function(){return"TIMEOUT: "+l})}Yn.prototype.info=function(){};function Qp(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var S=b[0];if(S!="noop"&&S!="stop"&&S!="close")for(var D=1;D<b.length;D++)b[D]=""}}}}return Ui(h)}catch{return l}}var Xr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qi;function Zr(){}C(Zr,$i),Zr.prototype.g=function(){return new XMLHttpRequest},Zr.prototype.i=function(){return{}},qi=new Zr;function wt(o,l,h,p){this.j=o,this.i=l,this.l=h,this.R=p||1,this.U=new Kn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fc}function Fc(){this.i=null,this.g="",this.h=!1}var Uc={},zi={};function Wi(o,l,h){o.L=1,o.v=rs(ot(l)),o.m=h,o.P=!0,$c(o,null)}function $c(o,l){o.F=Date.now(),es(o),o.A=ot(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),el(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Fc,o.g=yl(o.j,h?l:null,!o.m),0<o.O&&(o.M=new qp(w(o.Y,o,o.g),o.O)),l=o.U,h=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(kc[0]=b.toString()),b=kc);for(var S=0;S<b.length;S++){var D=Ic(h,b[S],p||l.handleEvent,!1,l.h||l);if(!D)break;l.g[D.key]=D}l=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Qn(),Hp(o.i,o.u,o.A,o.l,o.R,o.m)}wt.prototype.ca=function(o){o=o.target;const l=this.M;l&&at(o)==3?l.j():this.Y(o)},wt.prototype.Y=function(o){try{if(o==this.g)e:{const Ie=at(this.g);var l=this.g.Ba();const gn=this.g.Z();if(!(3>Ie)&&(Ie!=3||this.g&&(this.h.h||this.g.oa()||al(this.g)))){this.J||Ie!=4||l==7||(l==8||0>=gn?Qn(3):Qn(2)),Hi(this);var h=this.g.Z();this.X=h;t:if(Bc(this)){var p=al(this.g);o="";var b=p.length,S=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jt(this),Xn(this);var D="";break t}this.h.i=new c.TextDecoder}for(l=0;l<b;l++)this.h.h=!0,o+=this.h.i.decode(p[l],{stream:!(S&&l==b-1)});p.length=0,this.h.g+=o,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=h==200,Kp(this.i,this.u,this.A,this.l,this.R,Ie,h),this.o){if(this.T&&!this.K){t:{if(this.g){var X,me=this.g;if((X=me.g?me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(X)){var Q=X;break t}}Q=null}if(h=Q)fn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ki(this,h);else{this.o=!1,this.s=3,Ce(12),jt(this),Xn(this);break e}}if(this.P){h=!0;let $e;for(;!this.J&&this.C<D.length;)if($e=Jp(this,D),$e==zi){Ie==4&&(this.s=4,Ce(14),h=!1),fn(this.i,this.l,null,"[Incomplete Response]");break}else if($e==Uc){this.s=4,Ce(15),fn(this.i,this.l,D,"[Invalid Chunk]"),h=!1;break}else fn(this.i,this.l,$e,null),Ki(this,$e);if(Bc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||D.length!=0||this.h.h||(this.s=1,Ce(16),h=!1),this.o=this.o&&h,!h)fn(this.i,this.l,D,"[Invalid Chunked Response]"),jt(this),Xn(this);else if(0<D.length&&!this.W){this.W=!0;var Te=this.j;Te.g==this&&Te.ba&&!Te.M&&(Te.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),Zi(Te),Te.M=!0,Ce(11))}}else fn(this.i,this.l,D,null),Ki(this,D);Ie==4&&jt(this),this.o&&!this.J&&(Ie==4?pl(this.j,this):(this.o=!1,es(this)))}else fm(this.g),h==400&&0<D.indexOf("Unknown SID")?(this.s=3,Ce(12)):(this.s=0,Ce(13)),jt(this),Xn(this)}}}catch{}finally{}};function Bc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Jp(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?zi:(h=Number(l.substring(h,p)),isNaN(h)?Uc:(p+=1,p+h>l.length?zi:(l=l.slice(p,p+h),o.C=p+h,l)))}wt.prototype.cancel=function(){this.J=!0,jt(this)};function es(o){o.S=Date.now()+o.I,jc(o,o.I)}function jc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Jn(w(o.ba,o),l)}function Hi(o){o.B&&(c.clearTimeout(o.B),o.B=null)}wt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Gp(this.i,this.A),this.L!=2&&(Qn(),Ce(17)),jt(this),this.s=2,Xn(this)):jc(this,this.S-o)};function Xn(o){o.j.G==0||o.J||pl(o.j,o)}function jt(o){Hi(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Cc(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Ki(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Gi(h.h,o))){if(!o.K&&Gi(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)ls(h),as(h);else break e;Xi(h),Ce(18)}}else h.za=b[1],0<h.za-h.T&&37500>b[2]&&h.F&&h.v==0&&!h.C&&(h.C=Jn(w(h.Za,h),6e3));if(1>=Wc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else zt(h,11)}else if((o.K||h.g==o)&&ls(h),!B(l))for(b=h.Da.g.parse(l),l=0;l<b.length;l++){let Q=b[l];if(h.T=Q[0],Q=Q[1],h.G==2)if(Q[0]=="c"){h.K=Q[1],h.ia=Q[2];const Te=Q[3];Te!=null&&(h.la=Te,h.j.info("VER="+h.la));const Ie=Q[4];Ie!=null&&(h.Aa=Ie,h.j.info("SVER="+h.Aa));const gn=Q[5];gn!=null&&typeof gn=="number"&&0<gn&&(p=1.5*gn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const $e=o.g;if($e){const hs=$e.g?$e.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hs){var S=p.h;S.g||hs.indexOf("spdy")==-1&&hs.indexOf("quic")==-1&&hs.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Qi(S,S.h),S.h=null))}if(p.D){const eo=$e.g?$e.g.getResponseHeader("X-HTTP-Session-Id"):null;eo&&(p.ya=eo,ee(p.I,p.D,eo))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var D=o;if(p.qa=_l(p,p.J?p.ia:null,p.W),D.K){Hc(p.h,D);var X=D,me=p.L;me&&(X.I=me),X.B&&(Hi(X),es(X)),p.g=D}else dl(p);0<h.i.length&&cs(h)}else Q[0]!="stop"&&Q[0]!="close"||zt(h,7);else h.G==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?zt(h,7):Yi(h):Q[0]!="noop"&&h.l&&h.l.ta(Q),h.v=0)}}Qn(4)}catch{}}var Yp=class{constructor(o,l){this.g=o,this.map=l}};function qc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function zc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Wc(o){return o.h?1:o.g?o.g.size:0}function Gi(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Qi(o,l){o.g?o.g.add(l):o.h=l}function Hc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}qc.prototype.cancel=function(){if(this.i=Kc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Kc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return V(o.i)}function Xp(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,p=0;p<h;p++)l.push(o[p]);return l}l=[],h=0;for(p in o)l[h++]=o[p];return l}function Zp(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const p in o)l[h++]=p;return l}}}function Gc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=Zp(o),p=Xp(o),b=p.length,S=0;S<b;S++)l.call(void 0,p[S],h&&h[S],o)}var Qc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function em(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),b=null;if(0<=p){var S=o[h].substring(0,p);b=o[h].substring(p+1)}else S=o[h];l(S,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function qt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof qt){this.h=o.h,ts(this,o.j),this.o=o.o,this.g=o.g,ns(this,o.s),this.l=o.l;var l=o.i,h=new tr;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Jc(this,h),this.m=o.m}else o&&(l=String(o).match(Qc))?(this.h=!1,ts(this,l[1]||"",!0),this.o=Zn(l[2]||""),this.g=Zn(l[3]||"",!0),ns(this,l[4]),this.l=Zn(l[5]||"",!0),Jc(this,l[6]||"",!0),this.m=Zn(l[7]||"")):(this.h=!1,this.i=new tr(null,this.h))}qt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(er(l,Yc,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(er(l,Yc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(er(h,h.charAt(0)=="/"?rm:nm,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",er(h,im)),o.join("")};function ot(o){return new qt(o)}function ts(o,l,h){o.j=h?Zn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function ns(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Jc(o,l,h){l instanceof tr?(o.i=l,om(o.i,o.h)):(h||(l=er(l,sm)),o.i=new tr(l,o.h))}function ee(o,l,h){o.i.set(l,h)}function rs(o){return ee(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Zn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function er(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,tm),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function tm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Yc=/[#\/\?@]/g,nm=/[#\?:]/g,rm=/[#\?]/g,sm=/[#\?@]/g,im=/#/g;function tr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Et(o){o.g||(o.g=new Map,o.h=0,o.i&&em(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=tr.prototype,n.add=function(o,l){Et(this),this.i=null,o=pn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Xc(o,l){Et(o),l=pn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Zc(o,l){return Et(o),l=pn(o,l),o.g.has(l)}n.forEach=function(o,l){Et(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(l,b,p,this)},this)},this)},n.na=function(){Et(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const b=o[p];for(let S=0;S<b.length;S++)h.push(l[p])}return h},n.V=function(o){Et(this);let l=[];if(typeof o=="string")Zc(this,o)&&(l=l.concat(this.g.get(pn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return Et(this),this.i=null,o=pn(this,o),Zc(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function el(o,l,h){Xc(o,l),0<h.length&&(o.i=null,o.g.set(pn(o,l),V(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const S=encodeURIComponent(String(p)),D=this.V(p);for(p=0;p<D.length;p++){var b=S;D[p]!==""&&(b+="="+encodeURIComponent(String(D[p]))),o.push(b)}}return this.i=o.join("&")};function pn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function om(o,l){l&&!o.j&&(Et(o),o.i=null,o.g.forEach(function(h,p){var b=p.toLowerCase();p!=b&&(Xc(this,p),el(this,b,h))},o)),o.j=l}function am(o,l){const h=new Yn;if(c.Image){const p=new Image;p.onload=R(Tt,h,"TestLoadImage: loaded",!0,l,p),p.onerror=R(Tt,h,"TestLoadImage: error",!1,l,p),p.onabort=R(Tt,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=R(Tt,h,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function cm(o,l){const h=new Yn,p=new AbortController,b=setTimeout(()=>{p.abort(),Tt(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(b),S.ok?Tt(h,"TestPingServer: ok",!0,l):Tt(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),Tt(h,"TestPingServer: error",!1,l)})}function Tt(o,l,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function lm(){this.g=new Wp}function um(o,l,h){const p=h||"";try{Gc(o,function(b,S){let D=b;d(b)&&(D=Ui(b)),l.push(p+S+"="+encodeURIComponent(D))})}catch(b){throw l.push(p+"type="+encodeURIComponent("_badmap")),b}}function ss(o){this.l=o.Ub||null,this.j=o.eb||!1}C(ss,$i),ss.prototype.g=function(){return new is(this.l,this.j)},ss.prototype.i=(function(o){return function(){return o}})({});function is(o,l){Ee.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(is,Ee),n=is.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,rr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,rr(this)),this.g&&(this.readyState=3,rr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function tl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?nr(this):rr(this),this.readyState==3&&tl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,nr(this))},n.Qa=function(o){this.g&&(this.response=o,nr(this))},n.ga=function(){this.g&&nr(this)};function nr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,rr(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function rr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(is.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function nl(o){let l="";return re(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function Ji(o,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=nl(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ee(o,l,h))}function ie(o){Ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ie,Ee);var hm=/^https?$/i,dm=["POST","PUT"];n=ie.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qi.g(),this.v=this.o?Nc(this.o):Nc(qi),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){rl(this,S);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),b=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(dm,l,void 0))||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,D]of h)this.g.setRequestHeader(S,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ol(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){rl(this,S)}};function rl(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,sl(o),os(o)}function sl(o){o.A||(o.A=!0,ke(o,"complete"),ke(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ke(this,"complete"),ke(this,"abort"),os(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),os(this,!0)),ie.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?il(this):this.bb())},n.bb=function(){il(this)};function il(o){if(o.h&&typeof a<"u"&&(!o.v[1]||at(o)!=4||o.Z()!=2)){if(o.u&&at(o)==4)Rc(o.Ea,0,o);else if(ke(o,"readystatechange"),at(o)==4){o.h=!1;try{const D=o.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=D===0){var b=String(o.D).match(Qc)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),p=!hm.test(b?b.toLowerCase():"")}h=p}if(h)ke(o,"complete"),ke(o,"success");else{o.m=6;try{var S=2<at(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",sl(o)}}finally{os(o)}}}}function os(o,l){if(o.g){ol(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||ke(o,"ready");try{h.onreadystatechange=p}catch{}}}function ol(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function at(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),zp(l)}};function al(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function fm(o){const l={};o=(o.g&&2<=at(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(B(o[p]))continue;var h=I(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[b]||[];l[b]=S,S.push(h)}T(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function sr(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function cl(o){this.Aa=0,this.i=[],this.j=new Yn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sr("baseRetryDelayMs",5e3,o),this.cb=sr("retryDelaySeedMs",1e4,o),this.Wa=sr("forwardChannelMaxRetries",2,o),this.wa=sr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new qc(o&&o.concurrentRequestLimit),this.Da=new lm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=cl.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,p){Ce(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=_l(this,null,this.W),cs(this)};function Yi(o){if(ll(o),o.G==3){var l=o.U++,h=ot(o.I);if(ee(h,"SID",o.K),ee(h,"RID",l),ee(h,"TYPE","terminate"),ir(o,h),l=new wt(o,o.j,l),l.L=2,l.v=rs(ot(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=yl(l.j,null),l.g.ea(l.v)),l.F=Date.now(),es(l)}gl(o)}function as(o){o.g&&(Zi(o),o.g.cancel(),o.g=null)}function ll(o){as(o),o.u&&(c.clearTimeout(o.u),o.u=null),ls(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function cs(o){if(!zc(o.h)&&!o.s){o.s=!0;var l=o.Ga;zn||Tc(),Wn||(zn(),Wn=!0),Ni.add(l,o),o.B=0}}function pm(o,l){return Wc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Jn(w(o.Ga,o,l),ml(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new wt(this,this.j,o);let S=this.o;if(this.S&&(S?(S=_(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(b.H=S,S=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=hl(this,b,l),h=ot(this.I),ee(h,"RID",o),ee(h,"CVER",22),this.D&&ee(h,"X-HTTP-Session-Id",this.D),ir(this,h),S&&(this.O?l="headers="+encodeURIComponent(String(nl(S)))+"&"+l:this.m&&Ji(h,this.m,S)),Qi(this.h,b),this.Ua&&ee(h,"TYPE","init"),this.P?(ee(h,"$req",l),ee(h,"SID","null"),b.T=!0,Wi(b,h,null)):Wi(b,h,l),this.G=2}}else this.G==3&&(o?ul(this,o):this.i.length==0||zc(this.h)||ul(this))};function ul(o,l){var h;l?h=l.l:h=o.U++;const p=ot(o.I);ee(p,"SID",o.K),ee(p,"RID",h),ee(p,"AID",o.T),ir(o,p),o.m&&o.o&&Ji(p,o.m,o.o),h=new wt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=hl(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Qi(o.h,h),Wi(h,p,l)}function ir(o,l){o.H&&re(o.H,function(h,p){ee(l,p,h)}),o.l&&Gc({},function(h,p){ee(l,p,h)})}function hl(o,l,h){h=Math.min(o.i.length,h);var p=o.l?w(o.l.Na,o.l,o):null;e:{var b=o.i;let S=-1;for(;;){const D=["count="+h];S==-1?0<h?(S=b[0].g,D.push("ofs="+S)):S=0:D.push("ofs="+S);let X=!0;for(let me=0;me<h;me++){let Q=b[me].g;const Te=b[me].map;if(Q-=S,0>Q)S=Math.max(0,b[me].g-100),X=!1;else try{um(Te,D,"req"+Q+"_")}catch{p&&p(Te)}}if(X){p=D.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,p}function dl(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;zn||Tc(),Wn||(zn(),Wn=!0),Ni.add(l,o),o.v=0}}function Xi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Jn(w(o.Fa,o),ml(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,fl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Jn(w(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ce(10),as(this),fl(this))};function Zi(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function fl(o){o.g=new wt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=ot(o.qa);ee(l,"RID","rpc"),ee(l,"SID",o.K),ee(l,"AID",o.T),ee(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ee(l,"TO",o.ja),ee(l,"TYPE","xmlhttp"),ir(o,l),o.m&&o.o&&Ji(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=rs(ot(l)),h.m=null,h.P=!0,$c(h,o)}n.Za=function(){this.C!=null&&(this.C=null,as(this),Xi(this),Ce(19))};function ls(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function pl(o,l){var h=null;if(o.g==l){ls(o),Zi(o),o.g=null;var p=2}else if(Gi(o.h,l))h=l.D,Hc(o.h,l),p=1;else return;if(o.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var b=o.B;p=Yr(),ke(p,new Mc(p,h)),cs(o)}else dl(o);else if(b=l.s,b==3||b==0&&0<l.X||!(p==1&&pm(o,l)||p==2&&Xi(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),b){case 1:zt(o,5);break;case 4:zt(o,10);break;case 3:zt(o,6);break;default:zt(o,2)}}}function ml(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function zt(o,l){if(o.j.info("Error code "+l),l==2){var h=w(o.fb,o),p=o.Xa;const b=!p;p=new qt(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ts(p,"https"),rs(p),b?am(p.toString(),h):cm(p.toString(),h)}else Ce(2);o.G=0,o.l&&o.l.sa(l),gl(o),ll(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ce(2)):(this.j.info("Failed to ping google.com"),Ce(1))};function gl(o){if(o.G=0,o.ka=[],o.l){const l=Kc(o.h);(l.length!=0||o.i.length!=0)&&(N(o.ka,l),N(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function _l(o,l,h){var p=h instanceof qt?ot(h):new qt(h);if(p.g!="")l&&(p.g=l+"."+p.g),ns(p,p.s);else{var b=c.location;p=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;var S=new qt(null);p&&ts(S,p),l&&(S.g=l),b&&ns(S,b),h&&(S.l=h),p=S}return h=o.D,l=o.ya,h&&l&&ee(p,h,l),ee(p,"VER",o.la),ir(o,p),p}function yl(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ie(new ss({eb:h})):new ie(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function vl(){}n=vl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function us(){}us.prototype.g=function(o,l){return new Me(o,l)};function Me(o,l){Ee.call(this),this.g=new cl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!B(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!B(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new mn(this)}C(Me,Ee),Me.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Me.prototype.close=function(){Yi(this.g)},Me.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ui(o),o=h);l.i.push(new Yp(l.Ya++,o)),l.G==3&&cs(l)},Me.prototype.N=function(){this.g.l=null,delete this.j,Yi(this.g),delete this.g,Me.aa.N.call(this)};function wl(o){Bi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}C(wl,Bi);function El(){ji.call(this),this.status=1}C(El,ji);function mn(o){this.g=o}C(mn,vl),mn.prototype.ua=function(){ke(this.g,"a")},mn.prototype.ta=function(o){ke(this.g,new wl(o))},mn.prototype.sa=function(o){ke(this.g,new El)},mn.prototype.ra=function(){ke(this.g,"b")},us.prototype.createWebChannel=us.prototype.g,Me.prototype.send=Me.prototype.o,Me.prototype.open=Me.prototype.m,Me.prototype.close=Me.prototype.close,fd=function(){return new us},dd=function(){return Yr()},hd=Bt,Do={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Xr.NO_ERROR=0,Xr.TIMEOUT=8,Xr.HTTP_ERROR=6,Es=Xr,xc.COMPLETE="complete",ud=xc,Vc.EventType=Gn,Gn.OPEN="a",Gn.CLOSE="b",Gn.ERROR="c",Gn.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,lr=Vc,ie.prototype.listenOnce=ie.prototype.L,ie.prototype.getLastError=ie.prototype.Ka,ie.prototype.getLastErrorCode=ie.prototype.Ba,ie.prototype.getStatus=ie.prototype.Z,ie.prototype.getResponseJson=ie.prototype.Oa,ie.prototype.getResponseText=ie.prototype.oa,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Ha,ld=ie}).apply(typeof ps<"u"?ps:typeof self<"u"?self:typeof window<"u"?window:{});const Yl="@firebase/firestore",Xl="4.8.0";/**
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
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
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
 */let Fn="11.10.0";/**
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
 */const Zt=new ia("@firebase/firestore");function _n(){return Zt.logLevel}function L(n,...e){if(Zt.logLevel<=W.DEBUG){const t=e.map(ma);Zt.debug(`Firestore (${Fn}): ${n}`,...t)}}function mt(n,...e){if(Zt.logLevel<=W.ERROR){const t=e.map(ma);Zt.error(`Firestore (${Fn}): ${n}`,...t)}}function en(n,...e){if(Zt.logLevel<=W.WARN){const t=e.map(ma);Zt.warn(`Firestore (${Fn}): ${n}`,...t)}}function ma(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function F(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,pd(n,r,t)}function pd(n,e,t){let r=`FIRESTORE (${Fn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw mt(r),new Error(r)}function J(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||pd(e,s,r)}function $(n,e){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends st{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ct{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class by{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ay{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ve.UNAUTHENTICATED)))}shutdown(){}}class Sy{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){J(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Ct;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ct,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ct)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string",31837,{l:r}),new by(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string",2055,{h:e}),new Ve(e)}}class Ry{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Py{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Ry(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Ve.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Zl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ky{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ut(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){J(this.o===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Zl(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(J(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Zl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Cy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(){return new TextEncoder}/**
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
 */class ga{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Cy(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function q(n,e){return n<e?-1:n>e?1:0}function Oo(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return q(r,s);{const i=md(),a=Ny(i.encode(eu(n,t)),i.encode(eu(e,t)));return a!==0?a:q(r,s)}}t+=r>65535?2:1}return q(n.length,e.length)}function eu(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function Ny(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return q(n[t],e[t]);return q(n.length,e.length)}function Pn(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const tu="__name__";class Ke{constructor(e,t,r){t===void 0?t=0:t>e.length&&F(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&F(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ke.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ke?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Ke.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return q(e.length,t.length)}static compareSegments(e,t){const r=Ke.isNumericId(e),s=Ke.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ke.extractNumericId(e).compare(Ke.extractNumericId(t)):Oo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return kt.fromString(e.substring(4,e.length-2))}}class Z extends Ke{construct(e,t,r){return new Z(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Z(t)}static emptyPath(){return new Z([])}}const Vy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _e extends Ke{construct(e,t,r){return new _e(e,t,r)}static isValidIdentifier(e){return Vy.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_e.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===tu}static keyField(){return new _e([tu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new O(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new O(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _e(t)}static emptyPath(){return new _e([])}}/**
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
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(Z.fromString(e))}static fromName(e){return new M(Z.fromString(e).popFirst(5))}static empty(){return new M(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Z.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new Z(e.slice()))}}/**
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
 */function gd(n,e,t){if(!t)throw new O(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Dy(n,e,t,r){if(e===!0&&r===!0)throw new O(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function nu(n){if(!M.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ru(n){if(M.isDocumentKey(n))throw new O(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _d(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function li(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":F(12329,{type:typeof n})}function ft(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=li(n);throw new O(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Oy(n,e){if(e<=0)throw new O(P.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ur(n,e){if(!_d(n))throw new O(P.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new O(P.INVALID_ARGUMENT,t);return!0}/**
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
 */const su=-62135596800,iu=1e6;class te{static now(){return te.fromMillis(Date.now())}static fromDate(e){return te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*iu);return new te(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<su)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/iu}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ur(e,te._jsonSchema))return new te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-su;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}te._jsonSchemaVersion="firestore/timestamp/1.0",te._jsonSchema={type:le("string",te._jsonSchemaVersion),seconds:le("number"),nanoseconds:le("number")};/**
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
 */class U{static fromTimestamp(e){return new U(e)}static min(){return new U(new te(0,0))}static max(){return new U(new te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ar=-1;function Ly(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=U.fromTimestamp(r===1e9?new te(t+1,0):new te(t,r));return new Vt(s,M.empty(),e)}function My(n){return new Vt(n.readTime,n.key,Ar)}class Vt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Vt(U.min(),M.empty(),Ar)}static max(){return new Vt(U.max(),M.empty(),Ar)}}function xy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(n.documentKey,e.documentKey),t!==0?t:q(n.largestBatchId,e.largestBatchId))}/**
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
 */const Fy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Uy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Un(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==Fy)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&F(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):k.reject(t)}static resolve(e){return new k(((t,r)=>{t(e)}))}static reject(e){return new k(((t,r)=>{r(e)}))}static waitFor(e){return new k(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(u=>r(u)))})),a=!0,i===s&&t()}))}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next((s=>s?k.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new k(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next((m=>{a[d]=m,++c,c===i&&r(a)}),(m=>s(m)))}}))}static doWhile(e,t){return new k(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function $y(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function $n(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ui{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ui.ue=-1;/**
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
 */const _a=-1;function hi(n){return n==null}function Fs(n){return n===0&&1/n==-1/0}function By(n){return typeof n=="number"&&Number.isInteger(n)&&!Fs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const yd="";function jy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ou(e)),e=qy(n.get(t),e);return ou(e)}function qy(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case yd:t+="";break;default:t+=i}}return t}function ou(n){return n+yd+""}/**
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
 */function au(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ft(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function vd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class se{constructor(e,t){this.comparator=e,this.root=t||ge.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ge.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ge.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ms(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ms(this.root,e,this.comparator,!1)}getReverseIterator(){return new ms(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ms(this.root,e,this.comparator,!0)}}class ms{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ge{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ge.RED,this.left=s??ge.EMPTY,this.right=i??ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ge(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ge.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw F(43730,{key:this.key,value:this.value});if(this.right.isRed())throw F(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw F(27949);return e+(this.isRed()?0:1)}}ge.EMPTY=null,ge.RED=!0,ge.BLACK=!1;ge.EMPTY=new class{constructor(){this.size=0}get key(){throw F(57766)}get value(){throw F(16141)}get color(){throw F(16727)}get left(){throw F(29726)}get right(){throw F(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new ge(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class de{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new cu(this.data.getIterator())}getIteratorFrom(e){return new cu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof de)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new de(this.comparator);return t.data=e,t}}class cu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class xe{constructor(e){this.fields=e,e.sort(_e.comparator)}static empty(){return new xe([])}unionWith(e){let t=new de(_e.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new xe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Pn(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new wd("Invalid base64 string: "+i):i}})(e);return new ve(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const zy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dt(n){if(J(!!n,39018),typeof n=="string"){let e=0;const t=zy.exec(n);if(J(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ot(n){return typeof n=="string"?ve.fromBase64String(n):ve.fromUint8Array(n)}/**
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
 */const Ed="server_timestamp",Td="__type__",Id="__previous_value__",bd="__local_write_time__";function ya(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Td])===null||t===void 0?void 0:t.stringValue)===Ed}function di(n){const e=n.mapValue.fields[Id];return ya(e)?di(e):e}function Sr(n){const e=Dt(n.mapValue.fields[bd].timestampValue);return new te(e.seconds,e.nanos)}/**
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
 */class Wy{constructor(e,t,r,s,i,a,c,u,d,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m}}const Us="(default)";class Rr{constructor(e,t){this.projectId=e,this.database=t||Us}static empty(){return new Rr("","")}get isDefaultDatabase(){return this.database===Us}isEqual(e){return e instanceof Rr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ad="__type__",Hy="__max__",gs={mapValue:{}},Sd="__vector__",$s="value";function Lt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ya(n)?4:Gy(n)?9007199254740991:Ky(n)?10:11:F(28295,{value:n})}function nt(n,e){if(n===e)return!0;const t=Lt(n);if(t!==Lt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Sr(n).isEqual(Sr(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Dt(s.timestampValue),c=Dt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Ot(s.bytesValue).isEqual(Ot(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return oe(s.geoPointValue.latitude)===oe(i.geoPointValue.latitude)&&oe(s.geoPointValue.longitude)===oe(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return oe(s.integerValue)===oe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=oe(s.doubleValue),c=oe(i.doubleValue);return a===c?Fs(a)===Fs(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return Pn(n.arrayValue.values||[],e.arrayValue.values||[],nt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(au(a)!==au(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!nt(a[u],c[u])))return!1;return!0})(n,e);default:return F(52216,{left:n})}}function Pr(n,e){return(n.values||[]).find((t=>nt(t,e)))!==void 0}function kn(n,e){if(n===e)return 0;const t=Lt(n),r=Lt(e);if(t!==r)return q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=oe(i.integerValue||i.doubleValue),u=oe(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return lu(n.timestampValue,e.timestampValue);case 4:return lu(Sr(n),Sr(e));case 5:return Oo(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Ot(i),u=Ot(a);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const m=q(c[d],u[d]);if(m!==0)return m}return q(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=q(oe(i.latitude),oe(a.latitude));return c!==0?c:q(oe(i.longitude),oe(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return uu(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,u,d,m;const g=i.fields||{},w=a.fields||{},R=(c=g[$s])===null||c===void 0?void 0:c.arrayValue,C=(u=w[$s])===null||u===void 0?void 0:u.arrayValue,V=q(((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0,((m=C==null?void 0:C.values)===null||m===void 0?void 0:m.length)||0);return V!==0?V:uu(R,C)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===gs.mapValue&&a===gs.mapValue)return 0;if(i===gs.mapValue)return 1;if(a===gs.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let g=0;g<u.length&&g<m.length;++g){const w=Oo(u[g],m[g]);if(w!==0)return w;const R=kn(c[u[g]],d[m[g]]);if(R!==0)return R}return q(u.length,m.length)})(n.mapValue,e.mapValue);default:throw F(23264,{le:t})}}function lu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return q(n,e);const t=Dt(n),r=Dt(e),s=q(t.seconds,r.seconds);return s!==0?s:q(t.nanos,r.nanos)}function uu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=kn(t[s],r[s]);if(i)return i}return q(t.length,r.length)}function Cn(n){return Lo(n)}function Lo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Dt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ot(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return M.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Lo(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Lo(t.fields[a])}`;return s+"}"})(n.mapValue):F(61005,{value:n})}function Ts(n){switch(Lt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=di(n);return e?16+Ts(e):16;case 5:return 2*n.stringValue.length;case 6:return Ot(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Ts(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Ft(r.fields,((i,a)=>{s+=i.length+Ts(a)})),s})(n.mapValue);default:throw F(13486,{value:n})}}function hu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Mo(n){return!!n&&"integerValue"in n}function va(n){return!!n&&"arrayValue"in n}function du(n){return!!n&&"nullValue"in n}function fu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Is(n){return!!n&&"mapValue"in n}function Ky(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ad])===null||t===void 0?void 0:t.stringValue)===Sd}function pr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ft(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=pr(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=pr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Gy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Hy}/**
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
 */class Oe{constructor(e){this.value=e}static empty(){return new Oe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Is(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=pr(t)}setAll(e){let t=_e.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=pr(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Is(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return nt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Is(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ft(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Oe(pr(this.value))}}function Rd(n){const e=[];return Ft(n.fields,((t,r)=>{const s=new _e([t]);if(Is(r)){const i=Rd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new xe(e)}/**
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
 */class Ae{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Ae(e,0,U.min(),U.min(),U.min(),Oe.empty(),0)}static newFoundDocument(e,t,r,s){return new Ae(e,1,t,U.min(),r,s,0)}static newNoDocument(e,t){return new Ae(e,2,t,U.min(),U.min(),Oe.empty(),0)}static newUnknownDocument(e,t){return new Ae(e,3,t,U.min(),U.min(),Oe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(U.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Oe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Oe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bs{constructor(e,t){this.position=e,this.inclusive=t}}function pu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=M.comparator(M.fromName(a.referenceValue),t.key):r=kn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function mu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!nt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class kr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Qy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Pd{}class ce extends Pd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Yy(e,t,r):t==="array-contains"?new ev(e,r):t==="in"?new tv(e,r):t==="not-in"?new nv(e,r):t==="array-contains-any"?new rv(e,r):new ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Xy(e,r):new Zy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(kn(t,this.value)):t!==null&&Lt(this.value)===Lt(t)&&this.matchesComparison(kn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class He extends Pd{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new He(e,t)}matches(e){return kd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function kd(n){return n.op==="and"}function Cd(n){return Jy(n)&&kd(n)}function Jy(n){for(const e of n.filters)if(e instanceof He)return!1;return!0}function xo(n){if(n instanceof ce)return n.field.canonicalString()+n.op.toString()+Cn(n.value);if(Cd(n))return n.filters.map((e=>xo(e))).join(",");{const e=n.filters.map((t=>xo(t))).join(",");return`${n.op}(${e})`}}function Nd(n,e){return n instanceof ce?(function(r,s){return s instanceof ce&&r.op===s.op&&r.field.isEqual(s.field)&&nt(r.value,s.value)})(n,e):n instanceof He?(function(r,s){return s instanceof He&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&Nd(a,s.filters[c])),!0):!1})(n,e):void F(19439)}function Vd(n){return n instanceof ce?(function(t){return`${t.field.canonicalString()} ${t.op} ${Cn(t.value)}`})(n):n instanceof He?(function(t){return t.op.toString()+" {"+t.getFilters().map(Vd).join(" ,")+"}"})(n):"Filter"}class Yy extends ce{constructor(e,t,r){super(e,t,r),this.key=M.fromName(r.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class Xy extends ce{constructor(e,t){super(e,"in",t),this.keys=Dd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Zy extends ce{constructor(e,t){super(e,"not-in",t),this.keys=Dd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Dd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>M.fromName(r.referenceValue)))}class ev extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return va(t)&&Pr(t.arrayValue,this.value)}}class tv extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Pr(this.value.arrayValue,t)}}class nv extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(Pr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Pr(this.value.arrayValue,t)}}class rv extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!va(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Pr(this.value.arrayValue,r)))}}/**
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
 */class sv{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function gu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new sv(n,e,t,r,s,i,a)}function wa(n){const e=$(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>xo(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),hi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Cn(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Cn(r))).join(",")),e.Pe=t}return e.Pe}function Ea(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Qy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Nd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!mu(n.startAt,e.startAt)&&mu(n.endAt,e.endAt)}function Fo(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Bn{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function iv(n,e,t,r,s,i,a,c){return new Bn(n,e,t,r,s,i,a,c)}function Ta(n){return new Bn(n)}function _u(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Od(n){return n.collectionGroup!==null}function mr(n){const e=$(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new de(_e.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new kr(i,r))})),t.has(_e.keyField().canonicalString())||e.Te.push(new kr(_e.keyField(),r))}return e.Te}function Je(n){const e=$(n);return e.Ie||(e.Ie=ov(e,mr(n))),e.Ie}function ov(n,e){if(n.limitType==="F")return gu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new kr(s.field,i)}));const t=n.endAt?new Bs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Bs(n.startAt.position,n.startAt.inclusive):null;return gu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Uo(n,e){const t=n.filters.concat([e]);return new Bn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function js(n,e,t){return new Bn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function fi(n,e){return Ea(Je(n),Je(e))&&n.limitType===e.limitType}function Ld(n){return`${wa(Je(n))}|lt:${n.limitType}`}function yn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Vd(s))).join(", ")}]`),hi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Cn(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Cn(s))).join(",")),`Target(${r})`})(Je(n))}; limitType=${n.limitType})`}function pi(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):M.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of mr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,u){const d=pu(a,c,u);return a.inclusive?d<=0:d<0})(r.startAt,mr(r),s)||r.endAt&&!(function(a,c,u){const d=pu(a,c,u);return a.inclusive?d>=0:d>0})(r.endAt,mr(r),s))})(n,e)}function av(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Md(n){return(e,t)=>{let r=!1;for(const s of mr(n)){const i=cv(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function cv(n,e,t){const r=n.field.isKeyField()?M.comparator(e.key,t.key):(function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?kn(u,d):F(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return F(19790,{direction:n.dir})}}/**
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
 */class hn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ft(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return vd(this.inner)}size(){return this.innerSize}}/**
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
 */const lv=new se(M.comparator);function gt(){return lv}const xd=new se(M.comparator);function ur(...n){let e=xd;for(const t of n)e=e.insert(t.key,t);return e}function Fd(n){let e=xd;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Kt(){return gr()}function Ud(){return gr()}function gr(){return new hn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const uv=new se(M.comparator),hv=new de(M.comparator);function H(...n){let e=hv;for(const t of n)e=e.add(t);return e}const dv=new de(q);function fv(){return dv}/**
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
 */function Ia(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fs(e)?"-0":e}}function $d(n){return{integerValue:""+n}}function pv(n,e){return By(e)?$d(e):Ia(n,e)}/**
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
 */class mi{constructor(){this._=void 0}}function mv(n,e,t){return n instanceof Cr?(function(s,i){const a={fields:{[Td]:{stringValue:Ed},[bd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ya(i)&&(i=di(i)),i&&(a.fields[Id]=i),{mapValue:a}})(t,e):n instanceof Nr?jd(n,e):n instanceof Vr?qd(n,e):(function(s,i){const a=Bd(s,i),c=yu(a)+yu(s.Ee);return Mo(a)&&Mo(s.Ee)?$d(c):Ia(s.serializer,c)})(n,e)}function gv(n,e,t){return n instanceof Nr?jd(n,e):n instanceof Vr?qd(n,e):t}function Bd(n,e){return n instanceof qs?(function(r){return Mo(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Cr extends mi{}class Nr extends mi{constructor(e){super(),this.elements=e}}function jd(n,e){const t=zd(e);for(const r of n.elements)t.some((s=>nt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Vr extends mi{constructor(e){super(),this.elements=e}}function qd(n,e){let t=zd(e);for(const r of n.elements)t=t.filter((s=>!nt(s,r)));return{arrayValue:{values:t}}}class qs extends mi{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function yu(n){return oe(n.integerValue||n.doubleValue)}function zd(n){return va(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class _v{constructor(e,t){this.field=e,this.transform=t}}function yv(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Nr&&s instanceof Nr||r instanceof Vr&&s instanceof Vr?Pn(r.elements,s.elements,nt):r instanceof qs&&s instanceof qs?nt(r.Ee,s.Ee):r instanceof Cr&&s instanceof Cr})(n.transform,e.transform)}class vv{constructor(e,t){this.version=e,this.transformResults=t}}class ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class gi{}function Wd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ba(n.key,ze.none()):new $r(n.key,n.data,ze.none());{const t=n.data,r=Oe.empty();let s=new de(_e.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Ut(n.key,r,new xe(s.toArray()),ze.none())}}function wv(n,e,t){n instanceof $r?(function(s,i,a){const c=s.value.clone(),u=wu(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Ut?(function(s,i,a){if(!bs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=wu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Hd(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function _r(n,e,t,r){return n instanceof $r?(function(i,a,c,u){if(!bs(i.precondition,a))return c;const d=i.value.clone(),m=Eu(i.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof Ut?(function(i,a,c,u){if(!bs(i.precondition,a))return c;const d=Eu(i.fieldTransforms,u,a),m=a.data;return m.setAll(Hd(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(n,e,t,r):(function(i,a,c){return bs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function Ev(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Bd(r.transform,s||null);i!=null&&(t===null&&(t=Oe.empty()),t.set(r.field,i))}return t||null}function vu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Pn(r,s,((i,a)=>yv(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class $r extends gi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ut extends gi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Hd(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function wu(n,e,t){const r=new Map;J(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,gv(a,c,t[s]))}return r}function Eu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,mv(i,a,e))}return r}class ba extends gi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Tv extends gi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Iv{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&wv(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=_r(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=_r(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ud();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=Wd(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(U.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),H())}isEqual(e){return this.batchId===e.batchId&&Pn(this.mutations,e.mutations,((t,r)=>vu(t,r)))&&Pn(this.baseMutations,e.baseMutations,((t,r)=>vu(t,r)))}}class Aa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){J(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return uv})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Aa(e,t,r,s)}}/**
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
 */class bv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Av{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ae,K;function Sv(n){switch(n){case P.OK:return F(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return F(15467,{code:n})}}function Kd(n){if(n===void 0)return mt("GRPC error has no .code"),P.UNKNOWN;switch(n){case ae.OK:return P.OK;case ae.CANCELLED:return P.CANCELLED;case ae.UNKNOWN:return P.UNKNOWN;case ae.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case ae.INTERNAL:return P.INTERNAL;case ae.UNAVAILABLE:return P.UNAVAILABLE;case ae.UNAUTHENTICATED:return P.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case ae.NOT_FOUND:return P.NOT_FOUND;case ae.ALREADY_EXISTS:return P.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return P.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case ae.ABORTED:return P.ABORTED;case ae.OUT_OF_RANGE:return P.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return P.UNIMPLEMENTED;case ae.DATA_LOSS:return P.DATA_LOSS;default:return F(39323,{code:n})}}(K=ae||(ae={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Rv=new kt([4294967295,4294967295],0);function Tu(n){const e=md().encode(n),t=new cd;return t.update(e),new Uint8Array(t.digest())}function Iu(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new kt([t,r],0),new kt([s,i],0)]}class Sa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new hr(`Invalid padding: ${t}`);if(r<0)throw new hr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new hr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new hr(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=kt.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(kt.fromNumber(r)));return s.compare(Rv)===1&&(s=new kt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Tu(e),[r,s]=Iu(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Sa(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const t=Tu(e),[r,s]=Iu(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class hr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class _i{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Br.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new _i(U.min(),s,new se(q),gt(),H())}}class Br{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Br(r,t,H(),H(),H())}}/**
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
 */class As{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class Gd{constructor(e,t){this.targetId=e,this.De=t}}class Qd{constructor(e,t,r=ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class bu{constructor(){this.ve=0,this.Ce=Au(),this.Fe=ve.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=H(),t=H(),r=H();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:F(38017,{changeType:i})}})),new Br(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Au()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,J(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Pv{constructor(e){this.We=e,this.Ge=new Map,this.ze=gt(),this.je=_s(),this.Je=_s(),this.He=new se(q)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:F(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(Fo(i))if(r===0){const a=new M(i.path);this.Xe(t,a,Ae.newNoDocument(a,U.min()))}else J(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const c=this._t(e),u=c?this.ut(c,e,a):1;if(u!==0){this.rt(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Ot(r).toUint8Array()}catch(u){if(u instanceof wd)return en("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Sa(a,s,i)}catch(u){return en(u instanceof hr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&Fo(c.target)){const u=new M(c.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,Ae.newNoDocument(u,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=H();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((u=>{const d=this.st(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new _i(e,t,this.He,this.ze,r);return this.ze=gt(),this.je=_s(),this.Je=_s(),this.He=new se(q),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new bu,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new de(q),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new de(q),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new bu),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function _s(){return new se(M.comparator)}function Au(){return new se(M.comparator)}const kv={asc:"ASCENDING",desc:"DESCENDING"},Cv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Nv={and:"AND",or:"OR"};class Vv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function $o(n,e){return n.useProto3Json||hi(e)?e:{value:e}}function zs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Jd(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Dv(n,e){return zs(n,e.toTimestamp())}function Ye(n){return J(!!n,49232),U.fromTimestamp((function(t){const r=Dt(t);return new te(r.seconds,r.nanos)})(n))}function Ra(n,e){return Bo(n,e).canonicalString()}function Bo(n,e){const t=(function(s){return new Z(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Yd(n){const e=Z.fromString(n);return J(nf(e),10190,{key:e.toString()}),e}function jo(n,e){return Ra(n.databaseId,e.path)}function po(n,e){const t=Yd(e);if(t.get(1)!==n.databaseId.projectId)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new M(Zd(t))}function Xd(n,e){return Ra(n.databaseId,e)}function Ov(n){const e=Yd(n);return e.length===4?Z.emptyPath():Zd(e)}function qo(n){return new Z(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Zd(n){return J(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Su(n,e,t){return{name:jo(n,e),fields:t.value.mapValue.fields}}function Lv(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:F(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(d,m){return d.useProto3Json?(J(m===void 0||typeof m=="string",58123),ve.fromBase64String(m||"")):(J(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),ve.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(d){const m=d.code===void 0?P.UNKNOWN:Kd(d.code);return new O(m,d.message||"")})(a);t=new Qd(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=po(n,r.document.name),i=Ye(r.document.updateTime),a=r.document.createTime?Ye(r.document.createTime):U.min(),c=new Oe({mapValue:{fields:r.document.fields}}),u=Ae.newFoundDocument(s,i,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];t=new As(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=po(n,r.document),i=r.readTime?Ye(r.readTime):U.min(),a=Ae.newNoDocument(s,i),c=r.removedTargetIds||[];t=new As([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=po(n,r.document),i=r.removedTargetIds||[];t=new As([],i,s,null)}else{if(!("filter"in e))return F(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Av(s,i),c=r.targetId;t=new Gd(c,a)}}return t}function Mv(n,e){let t;if(e instanceof $r)t={update:Su(n,e.key,e.value)};else if(e instanceof ba)t={delete:jo(n,e.key)};else if(e instanceof Ut)t={update:Su(n,e.key,e.data),updateMask:Wv(e.fieldMask)};else{if(!(e instanceof Tv))return F(16599,{Rt:e.type});t={verify:jo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof Cr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Nr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Vr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof qs)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw F(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Dv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F(27497)})(n,e.precondition)),t}function xv(n,e){return n&&n.length>0?(J(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?Ye(s.updateTime):Ye(i);return a.isEqual(U.min())&&(a=Ye(i)),new vv(a,s.transformResults||[])})(t,e)))):[]}function Fv(n,e){return{documents:[Xd(n,e.path)]}}function Uv(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Xd(n,s);const i=(function(d){if(d.length!==0)return tf(He.create(d,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((m=>(function(w){return{field:vn(w.field),direction:jv(w.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=$o(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{Vt:t,parent:s}}function $v(n){let e=Ov(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){J(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=(function(g){const w=ef(g);return w instanceof He&&Cd(w)?w.getFilters():[w]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((w=>(function(C){return new kr(wn(C.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(w)))})(t.orderBy));let c=null;t.limit&&(c=(function(g){let w;return w=typeof g=="object"?g.value:g,hi(w)?null:w})(t.limit));let u=null;t.startAt&&(u=(function(g){const w=!!g.before,R=g.values||[];return new Bs(R,w)})(t.startAt));let d=null;return t.endAt&&(d=(function(g){const w=!g.before,R=g.values||[];return new Bs(R,w)})(t.endAt)),iv(e,s,a,i,c,"F",u,d)}function Bv(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return F(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ef(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=wn(t.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=wn(t.unaryFilter.field);return ce.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=wn(t.unaryFilter.field);return ce.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=wn(t.unaryFilter.field);return ce.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return F(61313);default:return F(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ce.create(wn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return F(58110);default:return F(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return He.create(t.compositeFilter.filters.map((r=>ef(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return F(1026)}})(t.compositeFilter.op))})(n):F(30097,{filter:n})}function jv(n){return kv[n]}function qv(n){return Cv[n]}function zv(n){return Nv[n]}function vn(n){return{fieldPath:n.canonicalString()}}function wn(n){return _e.fromServerFormat(n.fieldPath)}function tf(n){return n instanceof ce?(function(t){if(t.op==="=="){if(fu(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NAN"}};if(du(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(fu(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NOT_NAN"}};if(du(t.value))return{unaryFilter:{field:vn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vn(t.field),op:qv(t.op),value:t.value}}})(n):n instanceof He?(function(t){const r=t.getFilters().map((s=>tf(s)));return r.length===1?r[0]:{compositeFilter:{op:zv(t.op),filters:r}}})(n):F(54877,{filter:n})}function Wv(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function nf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class At{constructor(e,t,r,s,i=U.min(),a=U.min(),c=ve.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new At(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new At(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Hv{constructor(e){this.gt=e}}function Kv(n){const e=$v({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?js(e,e.limit,"L"):e}/**
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
 */class Gv{constructor(){this.Dn=new Qv}addToCollectionParentIndex(e,t){return this.Dn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Vt.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Vt.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class Qv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new de(Z.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new de(Z.comparator)).toArray()}}/**
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
 */const Ru={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rf=41943040;class De{static withCacheSize(e){return new De(e,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */De.DEFAULT_COLLECTION_PERCENTILE=10,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,De.DEFAULT=new De(rf,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),De.DISABLED=new De(-1,0,0);/**
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
 */class Nn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Nn(0)}static ur(){return new Nn(-1)}}/**
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
 */const Pu="LruGarbageCollector",sf=1048576;function ku([n,e],[t,r]){const s=q(n,t);return s===0?q(e,r):s}class Jv{constructor(e){this.Tr=e,this.buffer=new de(ku),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ku(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Yv{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){L(Pu,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){$n(t)?L(Pu,"Ignoring IndexedDB error during garbage collection: ",t):await Un(t)}await this.Rr(3e5)}))}}class Xv{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return k.resolve(ui.ue);const r=new Jv(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(Ru)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ru):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,c,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(r=g,c=Date.now(),this.removeTargets(e,r,t)))).next((g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((g=>(d=Date.now(),_n()<=W.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${g} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function Zv(n,e){return new Xv(n,e)}/**
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
 */class ew{constructor(){this.changes=new hn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class tw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class nw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&_r(r.mutation,s,xe.empty(),te.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,H()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=H()){const s=Kt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=ur();return i.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Kt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,H())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=gt();const a=gr(),c=(function(){return gr()})();return t.forEach(((u,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Ut)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),_r(m.mutation,d,m.mutation.getFieldMask(),te.now())):a.set(d.key,xe.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((d,m)=>a.set(d,m))),t.forEach(((d,m)=>{var g;return c.set(d,new tw(m,(g=a.get(d))!==null&&g!==void 0?g:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=gr();let s=new se(((a,c)=>a-c)),i=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let m=r.get(u)||xe.empty();m=c.applyToLocalView(d,m),r.set(u,m);const g=(s.get(c.batchId)||H()).add(u);s=s.insert(c.batchId,g)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,m=u.value,g=Ud();m.forEach((w=>{if(!i.has(w)){const R=Wd(t.get(w),r.get(w));R!==null&&g.set(w,R),i=i.add(w)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return k.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return M.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Od(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(Kt());let c=Ar,u=i;return a.next((d=>k.forEach(d,((m,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(m)?k.resolve():this.remoteDocumentCache.getEntry(e,m).next((w=>{u=u.insert(m,w)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,u,d,H()))).next((m=>({batchId:c,changes:Fd(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next((r=>{let s=ur();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=ur();return this.indexManager.getCollectionParents(e,i).next((c=>k.forEach(c,(u=>{const d=(function(g,w){return new Bn(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next((m=>{m.forEach(((g,w)=>{a=a.insert(g,w)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Ae.newInvalidDocument(m)))}));let c=ur();return a.forEach(((u,d)=>{const m=i.get(u);m!==void 0&&_r(m.mutation,d,xe.empty(),te.now()),pi(t,d)&&(c=c.insert(u,d))})),c}))}}/**
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
 */class rw{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return k.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Ye(s.createTime)}})(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:Kv(s.bundledQuery),readTime:Ye(s.readTime)}})(t)),k.resolve()}}/**
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
 */class sw{constructor(){this.overlays=new se(M.comparator),this.kr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Kt();return k.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=Kt(),i=t.length+1,a=new M(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new se(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=i.get(d.largestBatchId);m===null&&(m=Kt(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=Kt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=s)););return k.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new bv(t,r));let i=this.kr.get(t);i===void 0&&(i=H(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iw{constructor(){this.sessionToken=ve.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
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
 */class Pa{constructor(){this.qr=new de(pe.Qr),this.$r=new de(pe.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new pe(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new pe(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new M(new Z([])),r=new pe(t,e),s=new pe(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new M(new Z([])),r=new pe(t,e),s=new pe(t,e+1);let i=H();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new pe(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class pe{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return M.comparator(e.key,t.key)||q(e.Hr,t.Hr)}static Ur(e,t){return q(e.Hr,t.Hr)||M.comparator(e.key,t.key)}}/**
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
 */class ow{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new de(pe.Qr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Iv(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new pe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?_a:this.er-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new pe(t,0),s=new pe(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new de(q);return t.forEach((s=>{const i=new pe(s,0),a=new pe(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),k.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;M.isDocumentKey(i)||(i=i.child(""));const a=new pe(new M(i),0);let c=new de(q);return this.Yr.forEachWhile((u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.Hr)),!0)}),a),k.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){J(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return k.forEach(t.mutations,(s=>{const i=new pe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new pe(t,0),s=this.Yr.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class aw{constructor(e){this.ni=e,this.docs=(function(){return new se(M.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():Ae.newInvalidDocument(t))}getEntries(e,t){let r=gt();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ae.newInvalidDocument(s))})),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=gt();const a=t.path,c=new M(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||xy(My(m),r)<=0||(s.has(m.key)||pi(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){F(9500)}ri(e,t){return k.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new cw(this)}getSize(e){return k.resolve(this.size)}}class cw extends ew{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),k.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class lw{constructor(e){this.persistence=e,this.ii=new hn((t=>wa(t)),Ea),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.si=0,this.oi=new Pa,this.targetCount=0,this._i=Nn.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),k.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Nn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.hr(t),k.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),k.waitFor(i).next((()=>s))}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.oi.containsKey(t))}}/**
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
 */class of{constructor(e,t){this.ai={},this.overlays={},this.ui=new ui(0),this.ci=!1,this.ci=!0,this.li=new iw,this.referenceDelegate=e(this),this.hi=new lw(this),this.indexManager=new Gv,this.remoteDocumentCache=(function(s){return new aw(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new Hv(t),this.Ti=new rw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new sw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new ow(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){L("MemoryPersistence","Starting transaction:",e);const s=new uw(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return k.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class uw extends Uy{constructor(e){super(),this.currentSequenceNumber=e}}class ka{constructor(e){this.persistence=e,this.Ai=new Pa,this.Ri=null}static Vi(e){return new ka(e)}get mi(){if(this.Ri)return this.Ri;throw F(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.mi,(r=>{const s=M.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,U.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return k.or([()=>k.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ws{constructor(e,t){this.persistence=e,this.gi=new hn((r=>jy(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Zv(this,t)}static Vi(e,t){return new Ws(e,t)}Ii(){}di(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return k.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?k.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((c=>{c||(r++,i.removeEntry(a,U.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ts(e.data.value)),t}Sr(e,t,r){return k.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ca{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=H(),s=H();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ca(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dw{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Vm()?8:$y(Le())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new hw;return this.ws(e,t,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(_n()<=W.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",yn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(_n()<=W.DEBUG&&L("QueryEngine","Query:",yn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(_n()<=W.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",yn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Je(t))):k.resolve())}ps(e,t){if(_u(t))return k.resolve(null);let r=Je(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=js(t,null,"F"),r=Je(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=H(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((u=>{const d=this.bs(t,c);return this.Ds(t,d,a,u.readTime)?this.ps(e,js(t,null,"F")):this.vs(e,d,t,u)}))))})))))}ys(e,t,r,s){return _u(t)||s.isEqual(U.min())?k.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?k.resolve(null):(_n()<=W.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),yn(t)),this.vs(e,a,t,Ly(s,Ar)).next((c=>c)))}))}bs(e,t){let r=new de(Md(e));return t.forEach(((s,i)=>{pi(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return _n()<=W.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",yn(t)),this.gs.getDocumentsMatchingQuery(e,t,Vt.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const Na="LocalStore",fw=3e8;class pw{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new se(q),this.Ms=new hn((i=>wa(i)),Ea),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nw(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function mw(n,e,t,r){return new pw(n,e,t,r)}async function af(n,e){const t=$(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let u=H();for(const d of s){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){c.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function gw(n,e){const t=$(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,u,d,m){const g=d.batch,w=g.keys();let R=k.resolve();return w.forEach((C=>{R=R.next((()=>m.getEntry(u,C))).next((V=>{const N=d.docVersions.get(C);J(N!==null,48541),V.version.compareTo(N)<0&&(g.applyToRemoteDocument(V,d),V.isValidDocument()&&(V.setReadTime(d.commitVersion),m.addEntry(V)))}))})),R.next((()=>c.mutationQueue.removeMutationBatch(u,g)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=H();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function cf(n){const e=$(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function _w(n,e){const t=$(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const c=[];e.targetChanges.forEach(((m,g)=>{const w=s.get(g);if(!w)return;c.push(t.hi.removeMatchingKeys(i,m.removedDocuments,g).next((()=>t.hi.addMatchingKeys(i,m.addedDocuments,g))));let R=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(ve.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):m.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(m.resumeToken,r)),s=s.insert(g,R),(function(V,N,j){return V.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=fw?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0})(w,R,m)&&c.push(t.hi.updateTargetData(i,R))}));let u=gt(),d=H();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))})),c.push(yw(i,a,e.documentUpdates).next((m=>{u=m.Ls,d=m.ks}))),!r.isEqual(U.min())){const m=t.hi.getLastRemoteSnapshotVersion(i).next((g=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(m)}return k.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,d))).next((()=>u))})).then((i=>(t.Fs=s,i)))}function yw(n,e,t){let r=H(),s=H();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=gt();return t.forEach(((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(U.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):L(Na,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)})),{Ls:a,ks:s}}))}function vw(n,e){const t=$(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=_a),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function ww(n,e){const t=$(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,k.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new At(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function zo(n,e,t){const r=$(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!$n(a))throw a;L(Na,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Cu(n,e,t){const r=$(n);let s=U.min(),i=H();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,m){const g=$(u),w=g.Ms.get(m);return w!==void 0?k.resolve(g.Fs.get(w)):g.hi.getTargetData(d,m)})(r,a,Je(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((u=>{i=u}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:U.min(),t?i:H()))).next((c=>(Ew(r,av(e),c),{documents:c,qs:i})))))}function Ew(n,e,t){let r=n.xs.get(e)||U.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class Nu{constructor(){this.activeTargetIds=fv()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Tw{constructor(){this.Fo=new Nu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Nu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Iw{xo(e){}shutdown(){}}/**
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
 */const Vu="ConnectivityMonitor";class Du{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){L(Vu,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){L(Vu,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys=null;function Wo(){return ys===null?ys=(function(){return 268435456+Math.round(2147483648*Math.random())})():ys++,"0x"+ys.toString(16)}/**
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
 */const mo="RestConnection",bw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Aw{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Us?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Wo(),c=this.Go(e,t.toUriEncodedString());L(mo,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,i);const{host:d}=new URL(c),m=ei(d);return this.jo(e,c,u,r,m).then((g=>(L(mo,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw en(mo,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",r),g}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Fn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=bw[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Sw{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const be="WebChannelConnection";class Rw extends Aw{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=Wo();return new Promise(((c,u)=>{const d=new ld;d.setWithCredentials(!0),d.listenOnce(ud.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Es.NO_ERROR:const g=d.getResponseJson();L(be,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case Es.TIMEOUT:L(be,`RPC '${e}' ${a} timed out`),u(new O(P.DEADLINE_EXCEEDED,"Request time out"));break;case Es.HTTP_ERROR:const w=d.getStatus();if(L(be,`RPC '${e}' ${a} failed with status:`,w,"response text:",d.getResponseText()),w>0){let R=d.getResponseJson();Array.isArray(R)&&(R=R[0]);const C=R==null?void 0:R.error;if(C&&C.status&&C.message){const V=(function(j){const B=j.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(B)>=0?B:P.UNKNOWN})(C.status);u(new O(V,C.message))}else u(new O(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new O(P.UNAVAILABLE,"Connection failed."));break;default:F(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{L(be,`RPC '${e}' ${a} completed.`)}}));const m=JSON.stringify(s);L(be,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",m,r,15)}))}P_(e,t,r){const s=Wo(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=fd(),c=dd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=i.join("");L(be,`Creating RPC '${e}' stream ${s}: ${m}`,u);const g=a.createWebChannel(m,u);this.T_(g);let w=!1,R=!1;const C=new Sw({Ho:N=>{R?L(be,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(w||(L(be,`Opening RPC '${e}' stream ${s} transport.`),g.open(),w=!0),L(be,`RPC '${e}' stream ${s} sending:`,N),g.send(N))},Yo:()=>g.close()}),V=(N,j,B)=>{N.listen(j,(z=>{try{B(z)}catch(ne){setTimeout((()=>{throw ne}),0)}}))};return V(g,lr.EventType.OPEN,(()=>{R||(L(be,`RPC '${e}' stream ${s} transport opened.`),C.s_())})),V(g,lr.EventType.CLOSE,(()=>{R||(R=!0,L(be,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(g))})),V(g,lr.EventType.ERROR,(N=>{R||(R=!0,en(be,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),C.__(new O(P.UNAVAILABLE,"The operation could not be completed")))})),V(g,lr.EventType.MESSAGE,(N=>{var j;if(!R){const B=N.data[0];J(!!B,16349);const z=B,ne=(z==null?void 0:z.error)||((j=z[0])===null||j===void 0?void 0:j.error);if(ne){L(be,`RPC '${e}' stream ${s} received error:`,ne);const Pe=ne.status;let re=(function(y){const E=ae[y];if(E!==void 0)return Kd(E)})(Pe),T=ne.message;re===void 0&&(re=P.INTERNAL,T="Unknown error status: "+Pe+" with message "+ne.message),R=!0,C.__(new O(re,T)),g.close()}else L(be,`RPC '${e}' stream ${s} received:`,B),C.a_(B)}})),V(c,hd.STAT_EVENT,(N=>{N.stat===Do.PROXY?L(be,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Do.NOPROXY&&L(be,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.o_()}),0),C}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function go(){return typeof document<"u"?document:null}/**
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
 */function yi(n){return new Vv(n,!0)}/**
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
 */class lf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Ou="PersistentStream";class uf{constructor(e,t,r,s,i,a,c,u){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new lf(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(mt(t.toString()),mt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new O(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return L(Ou,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(L(Ou,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Pw extends uf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Lv(this.serializer,e),r=(function(i){if(!("targetChange"in i))return U.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?U.min():a.readTime?Ye(a.readTime):U.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=qo(this.serializer),t.addTarget=(function(i,a){let c;const u=a.target;if(c=Fo(u)?{documents:Fv(i,u)}:{query:Uv(i,u).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Jd(i,a.resumeToken);const d=$o(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(U.min())>0){c.readTime=zs(i,a.snapshotVersion.toTimestamp());const d=$o(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const r=Bv(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=qo(this.serializer),t.removeTarget=e,this.k_(t)}}class kw extends uf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return J(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,J(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){J(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=xv(e.writeResults,e.commitTime),r=Ye(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=qo(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Mv(this.serializer,r)))};this.k_(t)}}/**
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
 */class Cw{}class Nw extends Cw{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,Bo(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(P.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,Bo(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(P.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Vw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(mt(t),this._a=!1):L("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const tn="RemoteStore";class Dw{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{dn(this)&&(L(tn,"Restarting streams for network reachability change."),await(async function(u){const d=$(u);d.Ia.add(4),await jr(d),d.Aa.set("Unknown"),d.Ia.delete(4),await vi(d)})(this))}))})),this.Aa=new Vw(r,s)}}async function vi(n){if(dn(n))for(const e of n.da)await e(!0)}async function jr(n){for(const e of n.da)await e(!1)}function hf(n,e){const t=$(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),La(t)?Oa(t):jn(t).x_()&&Da(t,e))}function Va(n,e){const t=$(n),r=jn(t);t.Ta.delete(e),r.x_()&&df(t,e),t.Ta.size===0&&(r.x_()?r.B_():dn(t)&&t.Aa.set("Unknown"))}function Da(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(U.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}jn(n).H_(e)}function df(n,e){n.Ra.$e(e),jn(n).Y_(e)}function Oa(n){n.Ra=new Pv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),jn(n).start(),n.Aa.aa()}function La(n){return dn(n)&&!jn(n).M_()&&n.Ta.size>0}function dn(n){return $(n).Ia.size===0}function ff(n){n.Ra=void 0}async function Ow(n){n.Aa.set("Online")}async function Lw(n){n.Ta.forEach(((e,t)=>{Da(n,e)}))}async function Mw(n,e){ff(n),La(n)?(n.Aa.la(e),Oa(n)):n.Aa.set("Unknown")}async function xw(n,e,t){if(n.Aa.set("Online"),e instanceof Qd&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,e)}catch(r){L(tn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Hs(n,r)}else if(e instanceof As?n.Ra.Ye(e):e instanceof Gd?n.Ra.it(e):n.Ra.et(e),!t.isEqual(U.min()))try{const r=await cf(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ta.get(d);m&&i.Ta.set(d,m.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,d)=>{const m=i.Ta.get(u);if(!m)return;i.Ta.set(u,m.withResumeToken(ve.EMPTY_BYTE_STRING,m.snapshotVersion)),df(i,u);const g=new At(m.target,u,d,m.sequenceNumber);Da(i,g)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){L(tn,"Failed to raise snapshot:",r),await Hs(n,r)}}async function Hs(n,e,t){if(!$n(e))throw e;n.Ia.add(1),await jr(n),n.Aa.set("Offline"),t||(t=()=>cf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{L(tn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await vi(n)}))}function pf(n,e){return e().catch((t=>Hs(n,t,e)))}async function wi(n){const e=$(n),t=Mt(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:_a;for(;Fw(e);)try{const s=await vw(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,Uw(e,s)}catch(s){await Hs(e,s)}mf(e)&&gf(e)}function Fw(n){return dn(n)&&n.Pa.length<10}function Uw(n,e){n.Pa.push(e);const t=Mt(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function mf(n){return dn(n)&&!Mt(n).M_()&&n.Pa.length>0}function gf(n){Mt(n).start()}async function $w(n){Mt(n).na()}async function Bw(n){const e=Mt(n);for(const t of n.Pa)e.X_(t.mutations)}async function jw(n,e,t){const r=n.Pa.shift(),s=Aa.from(r,e,t);await pf(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await wi(n)}async function qw(n,e){e&&Mt(n).Z_&&await(async function(r,s){if((function(a){return Sv(a)&&a!==P.ABORTED})(s.code)){const i=r.Pa.shift();Mt(r).N_(),await pf(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await wi(r)}})(n,e),mf(n)&&gf(n)}async function Lu(n,e){const t=$(n);t.asyncQueue.verifyOperationInProgress(),L(tn,"RemoteStore received new credentials");const r=dn(t);t.Ia.add(3),await jr(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await vi(t)}async function zw(n,e){const t=$(n);e?(t.Ia.delete(2),await vi(t)):e||(t.Ia.add(2),await jr(t),t.Aa.set("Unknown"))}function jn(n){return n.Va||(n.Va=(function(t,r,s){const i=$(t);return i.ia(),new Pw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:Ow.bind(null,n),e_:Lw.bind(null,n),n_:Mw.bind(null,n),J_:xw.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),La(n)?Oa(n):n.Aa.set("Unknown")):(await n.Va.stop(),ff(n))}))),n.Va}function Mt(n){return n.ma||(n.ma=(function(t,r,s){const i=$(t);return i.ia(),new kw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:$w.bind(null,n),n_:qw.bind(null,n),ea:Bw.bind(null,n),ta:jw.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await wi(n)):(await n.ma.stop(),n.Pa.length>0&&(L(tn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class Ma{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Ma(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xa(n,e){if(mt("AsyncQueue",`${e}: ${n}`),$n(n))return new O(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class bn{static emptySet(e){return new bn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||M.comparator(t.key,r.key):(t,r)=>M.comparator(t.key,r.key),this.keyedMap=ur(),this.sortedSet=new se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof bn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new bn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Mu{constructor(){this.fa=new se(M.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):F(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Vn{constructor(e,t,r,s,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new Vn(e,t,bn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Ww{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class Hw{constructor(){this.queries=xu(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=$(t),i=s.queries;s.queries=xu(),i.forEach(((a,c)=>{for(const u of c.wa)u.onError(r)}))})(this,new O(P.ABORTED,"Firestore shutting down"))}}function xu(){return new hn((n=>Ld(n)),fi)}async function _f(n,e){const t=$(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new Ww,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=xa(a,`Initialization of query '${yn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Fa(t)}async function yf(n,e){const t=$(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Kw(n,e){const t=$(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&Fa(t)}function Gw(n,e,t){const r=$(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function Fa(n){n.Da.forEach((e=>{e.next()}))}var Ho,Fu;(Fu=Ho||(Ho={})).Fa="default",Fu.Cache="cache";class vf{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Vn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Vn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ho.Cache}}/**
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
 */class wf{constructor(e){this.key=e}}class Ef{constructor(e){this.key=e}}class Qw{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=H(),this.mutatedKeys=H(),this.Xa=Md(e),this.eu=new bn(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Mu,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,g)=>{const w=s.get(m),R=pi(this.query,g)?g:null,C=!!w&&this.mutatedKeys.has(w.key),V=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let N=!1;w&&R?w.data.isEqual(R.data)?C!==V&&(r.track({type:3,doc:R}),N=!0):this.iu(w,R)||(r.track({type:2,doc:R}),N=!0,(u&&this.Xa(R,u)>0||d&&this.Xa(R,d)<0)&&(c=!0)):!w&&R?(r.track({type:0,doc:R}),N=!0):w&&!R&&(r.track({type:1,doc:w}),N=!0,(u||d)&&(c=!0)),N&&(R?(a=a.add(R),i=V?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((m,g)=>(function(R,C){const V=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F(20277,{At:N})}};return V(R)-V(C)})(m.type,g.type)||this.Xa(m.doc,g.doc))),this.su(r),s=s!=null&&s;const c=t&&!s?this.ou():[],u=this.Za.size===0&&this.current&&!s?1:0,d=u!==this.Ya;return this.Ya=u,a.length!==0||d?{snapshot:new Vn(this.query,e.eu,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Mu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=H(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new Ef(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new wf(r))})),t}uu(e){this.Ha=e.qs,this.Za=H();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Vn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Ua="SyncEngine";class Jw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Yw{constructor(e){this.key=e,this.lu=!1}}class Xw{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new hn((c=>Ld(c)),fi),this.Tu=new Map,this.Iu=new Set,this.du=new se(M.comparator),this.Eu=new Map,this.Au=new Pa,this.Ru={},this.Vu=new Map,this.mu=Nn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Zw(n,e,t=!0){const r=Rf(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Tf(r,e,t,!0),s}async function eE(n,e){const t=Rf(n);await Tf(t,e,!0,!1)}async function Tf(n,e,t,r){const s=await ww(n.localStore,Je(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await tE(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&hf(n.remoteStore,s),c}async function tE(n,e,t,r,s){n.gu=(g,w,R)=>(async function(V,N,j,B){let z=N.view.nu(j);z.Ds&&(z=await Cu(V.localStore,N.query,!1).then((({documents:T})=>N.view.nu(T,z))));const ne=B&&B.targetChanges.get(N.targetId),Pe=B&&B.targetMismatches.get(N.targetId)!=null,re=N.view.applyChanges(z,V.isPrimaryClient,ne,Pe);return $u(V,N.targetId,re._u),re.snapshot})(n,g,w,R);const i=await Cu(n.localStore,e,!0),a=new Qw(e,i.qs),c=a.nu(i.documents),u=Br.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);$u(n,t,d._u);const m=new Jw(e,t,a);return n.Pu.set(e,m),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function nE(n,e,t){const r=$(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!fi(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await zo(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Va(r.remoteStore,s.targetId),Ko(r,s.targetId)})).catch(Un)):(Ko(r,s.targetId),await zo(r.localStore,s.targetId,!0))}async function rE(n,e){const t=$(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Va(t.remoteStore,r.targetId))}async function sE(n,e,t){const r=hE(n);try{const s=await(function(a,c){const u=$(a),d=te.now(),m=c.reduce(((R,C)=>R.add(C.key)),H());let g,w;return u.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let C=gt(),V=H();return u.Os.getEntries(R,m).next((N=>{C=N,C.forEach(((j,B)=>{B.isValidDocument()||(V=V.add(j))}))})).next((()=>u.localDocuments.getOverlayedDocuments(R,C))).next((N=>{g=N;const j=[];for(const B of c){const z=Ev(B,g.get(B.key).overlayedDocument);z!=null&&j.push(new Ut(B.key,z,Rd(z.value.mapValue),ze.exists(!0)))}return u.mutationQueue.addMutationBatch(R,d,j,c)})).next((N=>{w=N;const j=N.applyToLocalDocumentSet(g,V);return u.documentOverlayCache.saveOverlays(R,N.batchId,j)}))})).then((()=>({batchId:w.batchId,changes:Fd(g)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,u){let d=a.Ru[a.currentUser.toKey()];d||(d=new se(q)),d=d.insert(c,u),a.Ru[a.currentUser.toKey()]=d})(r,s.batchId,t),await qr(r,s.changes),await wi(r.remoteStore)}catch(s){const i=xa(s,"Failed to persist write");t.reject(i)}}async function If(n,e){const t=$(n);try{const r=await _w(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(J(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?J(a.lu,14607):s.removedDocuments.size>0&&(J(a.lu,42227),a.lu=!1))})),await qr(t,r,e)}catch(r){await Un(r)}}function Uu(n,e,t){const r=$(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const u=$(a);u.onlineState=c;let d=!1;u.queries.forEach(((m,g)=>{for(const w of g.wa)w.va(c)&&(d=!0)})),d&&Fa(u)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function iE(n,e,t){const r=$(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new se(M.comparator);a=a.insert(i,Ae.newNoDocument(i,U.min()));const c=H().add(i),u=new _i(U.min(),new Map,new se(q),a,c);await If(r,u),r.du=r.du.remove(i),r.Eu.delete(e),$a(r)}else await zo(r.localStore,e,!1).then((()=>Ko(r,e,t))).catch(Un)}async function oE(n,e){const t=$(n),r=e.batch.batchId;try{const s=await gw(t.localStore,e);Af(t,r,null),bf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await qr(t,s)}catch(s){await Un(s)}}async function aE(n,e,t){const r=$(n);try{const s=await(function(a,c){const u=$(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return u.mutationQueue.lookupMutationBatch(d,c).next((g=>(J(g!==null,37113),m=g.keys(),u.mutationQueue.removeMutationBatch(d,g)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>u.localDocuments.getDocuments(d,m)))}))})(r.localStore,e);Af(r,e,t),bf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await qr(r,s)}catch(s){await Un(s)}}function bf(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function Af(n,e,t){const r=$(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Ko(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||Sf(n,r)}))}function Sf(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Va(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),$a(n))}function $u(n,e,t){for(const r of t)r instanceof wf?(n.Au.addReference(r.key,e),cE(n,r)):r instanceof Ef?(L(Ua,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Sf(n,r.key)):F(19791,{yu:r})}function cE(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(L(Ua,"New document in limbo: "+t),n.Iu.add(r),$a(n))}function $a(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new M(Z.fromString(e)),r=n.mu.next();n.Eu.set(r,new Yw(t)),n.du=n.du.insert(t,r),hf(n.remoteStore,new At(Je(Ta(t.path)),r,"TargetPurposeLimboResolution",ui.ue))}}async function qr(n,e,t){const r=$(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,u)=>{a.push(r.gu(u,e,t).then((d=>{var m;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){s.push(d);const g=Ca.Es(u.targetId,d);i.push(g)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(u,d){const m=$(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>k.forEach(d,(w=>k.forEach(w.Is,(R=>m.persistence.referenceDelegate.addReference(g,w.targetId,R))).next((()=>k.forEach(w.ds,(R=>m.persistence.referenceDelegate.removeReference(g,w.targetId,R)))))))))}catch(g){if(!$n(g))throw g;L(Na,"Failed to update sequence numbers: "+g)}for(const g of d){const w=g.targetId;if(!g.fromCache){const R=m.Fs.get(w),C=R.snapshotVersion,V=R.withLastLimboFreeSnapshotVersion(C);m.Fs=m.Fs.insert(w,V)}}})(r.localStore,i))}async function lE(n,e){const t=$(n);if(!t.currentUser.isEqual(e)){L(Ua,"User change. New user:",e.toKey());const r=await af(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((u=>{u.reject(new O(P.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qr(t,r.Bs)}}function uE(n,e){const t=$(n),r=t.Eu.get(e);if(r&&r.lu)return H().add(r.key);{let s=H();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const c=t.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function Rf(n){const e=$(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=If.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=iE.bind(null,e),e.hu.J_=Kw.bind(null,e.eventManager),e.hu.pu=Gw.bind(null,e.eventManager),e}function hE(n){const e=$(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aE.bind(null,e),e}class Ks{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yi(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return mw(this.persistence,new dw,e.initialUser,this.serializer)}Du(e){return new of(ka.Vi,this.serializer)}bu(e){return new Tw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ks.provider={build:()=>new Ks};class dE extends Ks{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){J(this.persistence.referenceDelegate instanceof Ws,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Yv(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new of((r=>Ws.Vi(r,t)),this.serializer)}}class Go{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Uu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=lE.bind(null,this.syncEngine),await zw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Hw})()}createDatastore(e){const t=yi(e.databaseInfo.databaseId),r=(function(i){return new Rw(i)})(e.databaseInfo);return(function(i,a,c,u){return new Nw(i,a,c,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new Dw(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Uu(this.syncEngine,t,0)),(function(){return Du.C()?new Du:new Iw})())}createSyncEngine(e,t){return(function(s,i,a,c,u,d,m){const g=new Xw(s,i,a,c,u,d);return m&&(g.fu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=$(s);L(tn,"RemoteStore shutting down."),i.Ia.add(5),await jr(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Go.provider={build:()=>new Go};/**
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
 *//**
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
 */class Pf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):mt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const xt="FirestoreClient";class fE{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ve.UNAUTHENTICATED,this.clientId=ga.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{L(xt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(L(xt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=xa(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function _o(n,e){n.asyncQueue.verifyOperationInProgress(),L(xt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await af(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{en("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{L("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{en("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Bu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await pE(n);L(xt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Lu(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Lu(e.remoteStore,s))),n._onlineComponents=e}async function pE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(xt,"Using user provided OfflineComponentProvider");try{await _o(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;en("Error using user provided cache. Falling back to memory cache: "+t),await _o(n,new Ks)}}else L(xt,"Using default OfflineComponentProvider"),await _o(n,new dE(void 0));return n._offlineComponents}async function kf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(xt,"Using user provided OnlineComponentProvider"),await Bu(n,n._uninitializedComponentsProvider._online)):(L(xt,"Using default OnlineComponentProvider"),await Bu(n,new Go))),n._onlineComponents}function mE(n){return kf(n).then((e=>e.syncEngine))}async function Qo(n){const e=await kf(n),t=e.eventManager;return t.onListen=Zw.bind(null,e.syncEngine),t.onUnlisten=nE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=eE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=rE.bind(null,e.syncEngine),t}function gE(n,e,t={}){const r=new Ct;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,d){const m=new Pf({next:w=>{m.Ou(),a.enqueueAndForget((()=>yf(i,g))),w.fromCache&&u.source==="server"?d.reject(new O(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),g=new vf(c,m,{includeMetadataChanges:!0,ka:!0});return _f(i,g)})(await Qo(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const ju=new Map;/**
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
 */const _E="firestore.googleapis.com",qu=!0;class zu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_E,this.ssl=qu}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:qu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sf)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Dy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new O(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ba{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Ay;switch(r.type){case"firstParty":return new Py(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=ju.get(t);r&&(L("ComponentProvider","Removing Datastore"),ju.delete(t),r.terminate())})(this),Promise.resolve()}}/**
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
 */class _t{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _t(this.firestore,e,this._query)}}class ue{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ue(this.firestore,e,this._key)}toJSON(){return{type:ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ur(t,ue._jsonSchema))return new ue(e,r||null,new M(Z.fromString(t.referencePath)))}}ue._jsonSchemaVersion="firestore/documentReference/1.0",ue._jsonSchema={type:le("string",ue._jsonSchemaVersion),referencePath:le("string")};class Nt extends _t{constructor(e,t,r){super(e,t,Ta(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ue(this.firestore,null,new M(e))}withConverter(e){return new Nt(this.firestore,e,this._path)}}function nn(n,e,...t){if(n=he(n),gd("collection","path",e),n instanceof Ba){const r=Z.fromString(e,...t);return ru(r),new Nt(n,null,r)}{if(!(n instanceof ue||n instanceof Nt))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return ru(r),new Nt(n.firestore,null,r)}}function Ei(n,e,...t){if(n=he(n),arguments.length===1&&(e=ga.newId()),gd("doc","path",e),n instanceof Ba){const r=Z.fromString(e,...t);return nu(r),new ue(n,null,new M(r))}{if(!(n instanceof ue||n instanceof Nt))throw new O(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Z.fromString(e,...t));return nu(r),new ue(n.firestore,n instanceof Nt?n.converter:null,new M(r))}}/**
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
 */const Wu="AsyncQueue";class Hu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new lf(this,"async_queue_retry"),this.oc=()=>{const r=go();r&&L(Wu,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=go();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=go();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ct;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!$n(e))throw e;L(Wu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,mt("INTERNAL UNHANDLED ERROR: ",Ku(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Ma.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&F(47125,{hc:Ku(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ku(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
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
 */function Gu(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class rn extends Ba{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Hu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hu(e),this._firestoreClient=void 0,await e}}}function yE(n,e,t){t||(t=Us);const r=Mr(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(Er(i,e))return s;throw new O(P.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new O(P.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sf)throw new O(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&ei(e.host)&&Am(e.host),r.initialize({options:e,instanceIdentifier:t})}function ja(n){if(n._terminated)throw new O(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||vE(n),n._firestoreClient}function vE(n){var e,t,r;const s=n._freezeSettings(),i=(function(c,u,d,m){return new Wy(c,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Cf(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new fE(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class Fe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Fe(ve.fromBase64String(e))}catch(t){throw new O(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Fe(ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Fe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ur(e,Fe._jsonSchema))return Fe.fromBase64String(e.bytes)}}Fe._jsonSchemaVersion="firestore/bytes/1.0",Fe._jsonSchema={type:le("string",Fe._jsonSchemaVersion),bytes:le("string")};/**
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
 */class Ti{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _e(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ii{constructor(e){this._methodName=e}}/**
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
 */class Xe{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xe._jsonSchemaVersion}}static fromJSON(e){if(Ur(e,Xe._jsonSchema))return new Xe(e.latitude,e.longitude)}}Xe._jsonSchemaVersion="firestore/geoPoint/1.0",Xe._jsonSchema={type:le("string",Xe._jsonSchemaVersion),latitude:le("number"),longitude:le("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Ze._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ur(e,Ze._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Ze(e.vectorValues);throw new O(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ze._jsonSchemaVersion="firestore/vectorValue/1.0",Ze._jsonSchema={type:le("string",Ze._jsonSchemaVersion),vectorValues:le("object")};/**
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
 */const wE=/^__.*__$/;class EE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ut(e,this.data,this.fieldMask,t,this.fieldTransforms):new $r(e,this.data,t,this.fieldTransforms)}}class Nf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ut(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Vf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F(40011,{Ec:n})}}class qa{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new qa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Gs(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Vf(this.Ec)&&wE.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class TE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||yi(e)}Dc(e,t,r,s=!1){return new qa({Ec:e,methodName:t,bc:r,path:_e.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function za(n){const e=n._freezeSettings(),t=yi(n._databaseId);return new TE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function IE(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);Ha("Data must be an object, but it was:",a,r);const c=Df(r,a);let u,d;if(i.merge)u=new xe(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const w=Jo(e,g,t);if(!a.contains(w))throw new O(P.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Lf(m,w)||m.push(w)}u=new xe(m),d=a.fieldTransforms.filter((g=>u.covers(g.field)))}else u=null,d=a.fieldTransforms;return new EE(new Oe(c),u,d)}class bi extends Ii{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bi}}class Wa extends Ii{_toFieldTransform(e){return new _v(e.path,new Cr)}isEqual(e){return e instanceof Wa}}function bE(n,e,t,r){const s=n.Dc(1,e,t);Ha("Data must be an object, but it was:",s,r);const i=[],a=Oe.empty();Ft(r,((u,d)=>{const m=Ka(e,u,t);d=he(d);const g=s.gc(m);if(d instanceof bi)i.push(m);else{const w=zr(d,g);w!=null&&(i.push(m),a.set(m,w))}}));const c=new xe(i);return new Nf(a,c,s.fieldTransforms)}function AE(n,e,t,r,s,i){const a=n.Dc(1,e,t),c=[Jo(e,r,t)],u=[s];if(i.length%2!=0)throw new O(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<i.length;w+=2)c.push(Jo(e,i[w])),u.push(i[w+1]);const d=[],m=Oe.empty();for(let w=c.length-1;w>=0;--w)if(!Lf(d,c[w])){const R=c[w];let C=u[w];C=he(C);const V=a.gc(R);if(C instanceof bi)d.push(R);else{const N=zr(C,V);N!=null&&(d.push(R),m.set(R,N))}}const g=new xe(d);return new Nf(m,g,a.fieldTransforms)}function SE(n,e,t,r=!1){return zr(t,n.Dc(r?4:3,e))}function zr(n,e){if(Of(n=he(n)))return Ha("Unsupported field value:",e,n),Df(n,e);if(n instanceof Ii)return(function(r,s){if(!Vf(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let u=zr(c,s.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=he(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=te.fromDate(r);return{timestampValue:zs(s.serializer,i)}}if(r instanceof te){const i=new te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:zs(s.serializer,i)}}if(r instanceof Xe)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Fe)return{bytesValue:Jd(s.serializer,r._byteString)};if(r instanceof ue){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ra(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ze)return(function(a,c){return{mapValue:{fields:{[Ad]:{stringValue:Sd},[$s]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw c.wc("VectorValues must only contain numeric values.");return Ia(c.serializer,d)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${li(r)}`)})(n,e)}function Df(n,e){const t={};return vd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ft(n,((r,s)=>{const i=zr(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Of(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof te||n instanceof Xe||n instanceof Fe||n instanceof ue||n instanceof Ii||n instanceof Ze)}function Ha(n,e,t){if(!Of(t)||!_d(t)){const r=li(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Jo(n,e,t){if((e=he(e))instanceof Ti)return e._internalPath;if(typeof e=="string")return Ka(n,e);throw Gs("Field path arguments must be of type string or ",n,!1,void 0,t)}const RE=new RegExp("[~\\*/\\[\\]]");function Ka(n,e,t){if(e.search(RE)>=0)throw Gs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ti(...e.split("."))._internalPath}catch{throw Gs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Gs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new O(P.INVALID_ARGUMENT,c+n+u)}function Lf(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class Mf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ai("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class PE extends Mf{data(){return super.data()}}function Ai(n,e){return typeof e=="string"?Ka(n,e):e instanceof Ti?e._internalPath:e._delegate._internalPath}/**
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
 */function kE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ga{}class Qa extends Ga{}function Si(n,e,...t){let r=[];e instanceof Ga&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((u=>u instanceof Ja)).length,c=i.filter((u=>u instanceof Ri)).length;if(a>1||a>0&&c>0)throw new O(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Ri extends Qa{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ri(e,t,r)}_apply(e){const t=this._parse(e);return Ff(e._query,t),new _t(e.firestore,e.converter,Uo(e._query,t))}_parse(e){const t=za(e.firestore);return(function(i,a,c,u,d,m,g){let w;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new O(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ju(g,m);const C=[];for(const V of g)C.push(Qu(u,i,V));w={arrayValue:{values:C}}}else w=Qu(u,i,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ju(g,m),w=SE(c,a,g,m==="in"||m==="not-in");return ce.create(d,m,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function CE(n,e,t){const r=e,s=Ai("where",n);return Ri._create(s,r,t)}class Ja extends Ga{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ja(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:He.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Ff(a,u),a=Uo(a,u)})(e._query,t),new _t(e.firestore,e.converter,Uo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ya extends Qa{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ya(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new O(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new O(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new kr(i,a)})(e._query,this._field,this._direction);return new _t(e.firestore,e.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new Bn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function Xa(n,e="asc"){const t=e,r=Ai("orderBy",n);return Ya._create(r,t)}class Za extends Qa{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Za(e,t,r)}_apply(e){return new _t(e.firestore,e.converter,js(e._query,this._limit,this._limitType))}}function xf(n){return Oy("limit",n),Za._create("limit",n,"F")}function Qu(n,e,t){if(typeof(t=he(t))=="string"){if(t==="")throw new O(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Od(e)&&t.indexOf("/")!==-1)throw new O(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Z.fromString(t));if(!M.isDocumentKey(r))throw new O(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return hu(n,new M(r))}if(t instanceof ue)return hu(n,t._key);throw new O(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${li(t)}.`)}function Ju(n,e){if(!Array.isArray(n)||n.length===0)throw new O(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ff(n,e){const t=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new O(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class NE{convertValue(e,t="none"){switch(Lt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ot(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw F(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ft(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[$s].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>oe(a.doubleValue)));return new Ze(i)}convertGeoPoint(e){return new Xe(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=di(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Sr(e));default:return null}}convertTimestamp(e){const t=Dt(e);return new te(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Z.fromString(e);J(nf(r),9688,{name:e});const s=new Rr(r.get(1),r.get(3)),i=new M(r.popFirst(5));return s.isEqual(t)||mt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function VE(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class dr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Yt extends Mf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ss(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ai("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Yt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Yt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Yt._jsonSchema={type:le("string",Yt._jsonSchemaVersion),bundleSource:le("string","DocumentSnapshot"),bundleName:le("string"),bundle:le("string")};class Ss extends Yt{data(e={}){return super.data(e)}}class Xt{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new dr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Ss(this._firestore,this._userDataWriter,r.key,r,new dr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const u=new Ss(s._firestore,s._userDataWriter,c.doc.key,c.doc,new dr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new Ss(s._firestore,s._userDataWriter,c.doc.key,c.doc,new dr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:DE(c.type),doc:u,oldIndex:d,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Xt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ga.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function DE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F(61501,{type:n})}}Xt._jsonSchemaVersion="firestore/querySnapshot/1.0",Xt._jsonSchema={type:le("string",Xt._jsonSchemaVersion),bundleSource:le("string","QuerySnapshot"),bundleName:le("string"),bundle:le("string")};class ec extends NE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Fe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ue(this.firestore,null,t)}}function OE(n){n=ft(n,_t);const e=ft(n.firestore,rn),t=ja(e),r=new ec(e);return gE(t,n._query,{source:"server"}).then((s=>new Xt(e,r,n,s)))}function LE(n,e,t,...r){n=ft(n,ue);const s=ft(n.firestore,rn),i=za(s);let a;return a=typeof(e=he(e))=="string"||e instanceof Ti?AE(i,"updateDoc",n._key,e,t,r):bE(i,"updateDoc",n._key,e),tc(s,[a.toMutation(n._key,ze.exists(!0))])}function ME(n){return tc(ft(n.firestore,rn),[new ba(n._key,ze.none())])}function xE(n,e){const t=ft(n.firestore,rn),r=Ei(n),s=VE(n.converter,e);return tc(t,[IE(za(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,ze.exists(!1))]).then((()=>r))}function Dn(n,...e){var t,r,s;n=he(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Gu(e[a])||(i=e[a++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Gu(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let u,d,m;if(n instanceof ue)d=ft(n.firestore,rn),m=Ta(n._key.path),u={next:g=>{e[a]&&e[a](FE(d,n,g))},error:e[a+1],complete:e[a+2]};else{const g=ft(n,_t);d=ft(g.firestore,rn),m=g._query;const w=new ec(d);u={next:R=>{e[a]&&e[a](new Xt(d,w,g,R))},error:e[a+1],complete:e[a+2]},kE(n._query)}return(function(w,R,C,V){const N=new Pf(V),j=new vf(R,N,C);return w.asyncQueue.enqueueAndForget((async()=>_f(await Qo(w),j))),()=>{N.Ou(),w.asyncQueue.enqueueAndForget((async()=>yf(await Qo(w),j)))}})(ja(d),m,c,u)}function tc(n,e){return(function(r,s){const i=new Ct;return r.asyncQueue.enqueueAndForget((async()=>sE(await mE(r),s,i))),i.promise})(ja(n),e)}function FE(n,e,t){const r=t.docs.get(e._key),s=new ec(n);return new Yt(n,s,e._key,r,new dr(t.hasPendingWrites,t.fromCache),e.converter)}function UE(){return new Wa("serverTimestamp")}(function(e,t=!0){(function(s){Fn=s})(ni),et(new We("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new rn(new Sy(r.getProvider("auth-internal")),new ky(a,r.getProvider("app-check-internal")),(function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rr(d.options.projectId,m)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Ue(Yl,Xl,e),Ue(Yl,Xl,"esm2017")})();const $E={apiKey:"AIzaSyAwiBCbhMbj8KH89ECm34cBp7kJHLlEtAE",authDomain:"streak-jf-2026.firebaseapp.com",projectId:"streak-jf-2026",messagingSenderId:"944365168378",appId:"1:944365168378:web:176cd7569b1b88e084cb43"},BE="https://streak-worker.janis-rohde.workers.dev",jE=!1,qE=$E,Wr=Rh(qE),On=D_(Wr,{persistence:[cy,Q_]}),rt=yE(Wr,{experimentalAutoDetectLongPolling:!0}),Yu=n=>`${String(n).trim().toLowerCase()}@app.local`,Uf=BE;let $f=0,nc=!1,Yo=!1,Xo=0;const Bf=new Set,fe=()=>Date.now()+$f,zE=n=>Bf.add(n);async function Ln(){try{const n=Date.now(),e=await fetch(`${Uf}/time`,{cache:"no-store"}),t=Date.now(),r=await e.json();return $f=r.now-(n+t)/2,nc=!!r.testMode,Yo=!!r.shifted,Xo=t,Bf.forEach(s=>s()),!0}catch{return!1}}function WE(){setInterval(()=>{(nc||Date.now()-Xo>180*1e3)&&Ln()},2e4),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Date.now()-Xo>2e4&&Ln()})}class yo extends Error{}async function Ne(n,e={},{authed:t=!0}={}){var a;const r={"content-type":"application/json"};if(t){const c=await((a=On.currentUser)==null?void 0:a.getIdToken());if(!c)throw new yo("Bitte neu einloggen");r.authorization=`Bearer ${c}`}let s;try{s=await fetch(`${Uf}${n}`,{method:"POST",headers:r,body:JSON.stringify(e)})}catch{throw new yo("Keine Verbindung. Bist du online?")}const i=await s.json().catch(()=>({}));if(!s.ok)throw new yo(i.error||`Fehler ${s.status}`);return i}function f(n,e={},...t){const r=document.createElement(n);for(const[s,i]of Object.entries(e||{}))i==null||i===!1||(s==="class"?r.className=i:s==="style"&&typeof i=="object"?Object.assign(r.style,i):s.startsWith("on")?r.addEventListener(s.slice(2).toLowerCase(),i):s==="html"?r.innerHTML=i:s in r&&s!=="list"&&s!=="form"?r[s]=i:r.setAttribute(s,i===!0?"":i));return HE(r,t),r}function HE(n,e){for(const t of e.flat(1/0))t==null||t===!1||n.append(t instanceof Node?t:document.createTextNode(String(t)))}const St=n=>{const e=document.createElement("template");return e.innerHTML=n.trim(),e.content.firstChild};function Y(n,e="info"){const t=f("div",{class:`toast toast-${e}`},n);document.body.append(t),requestAnimationFrame(()=>t.classList.add("show")),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},e==="error"?4500:2800)}const KE=()=>document.getElementById("overlay");function yt(n,{sheet:e=!1,full:t=!1,onClose:r,dismissable:s=!0}={}){const i=f("div",{class:`backdrop ${e?"is-sheet":""} ${t?"is-full":""}`}),a=f("div",{class:e?"sheet":t?"fullscreen":"modal"});let c=!1;const u=()=>{c||(c=!0,i.classList.remove("show"),setTimeout(()=>i.remove(),250),r==null||r())};return s&&i.addEventListener("click",d=>{d.target===i&&u()}),a.append(typeof n=="function"?n(u):n),i.append(a),KE().append(i),requestAnimationFrame(()=>i.classList.add("show")),u}function rc(n,e,t="OK",r="gold"){return new Promise(s=>{yt(i=>f("div",{class:"stack"},f("h2",{class:"title"},n),e&&f("p",{class:"muted center"},e),f("div",{class:"row gap"},f("button",{class:"btn btn-grey",onclick:()=>{s(!1),i()}},"Abbrechen"),f("button",{class:`btn btn-${r}`,onclick:()=>{s(!0),i()}},t))),{onClose:()=>s(!1)})})}function Se(n,e,t){e?(n.dataset.label=n.innerHTML,n.disabled=!0,n.innerHTML=`<span class="spinner"></span> ${t||""}`):(n.disabled=!1,n.dataset.label&&(n.innerHTML=n.dataset.label))}function GE(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function Zo(n){return n.toFixed(1).replace(".",",")}function Pi(n,e){const t=Math.max(0,Math.floor((e-n)/1e3));if(t<60)return"gerade eben";const r=Math.floor(t/60);if(r<60)return`vor ${r} Min.`;const s=Math.floor(r/60);if(s<24)return`vor ${s} Std.`;const i=Math.floor(s/24);return i===1?"gestern":`vor ${i} Tagen`}function sc(n){if(!("speechSynthesis"in window)){Y("Vorlesen geht auf diesem Gerät nicht","error");return}speechSynthesis.cancel();const e=new SpeechSynthesisUtterance(n);e.lang="de-DE";const t=speechSynthesis.getVoices().find(r=>{var s;return(s=r.lang)==null?void 0:s.startsWith("de")});t&&(e.voice=t),speechSynthesis.speak(e)}const QE=()=>/iphone|ipad|ipod/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,JE=()=>/android/i.test(navigator.userAgent),YE=()=>window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0;let XE=0;function Qs(n,e,t,r,s,i=-90){const a=[];for(let c=0;c<s*2;c++){const u=c%2?r:t,d=(i+c*180/s)*Math.PI/180;a.push(`${(n+u*Math.cos(d)).toFixed(1)},${(e+u*Math.sin(d)).toFixed(1)}`)}return a.join(" ")}const Xu={noob:'<circle cx="50" cy="50" r="40"/>',advanced:'<path d="M50 7 L87 20 V47 C87 72 69 88 50 95 C31 88 13 72 13 47 V20 Z"/>',pro:'<polygon points="50,5 89,27 89,73 50,95 11,73 11,27"/>',elite:`<polygon points="${Qs(50,50,46,37,10)}"/>`,unreal:'<polygon points="50,3 93,50 50,97 7,50"/>',hacker:'<polygon points="27,7 73,7 95,50 73,93 27,93 5,50"/>',gotti:`<polygon points="${Qs(50,50,48,39,16)}"/>`},ZE={noob:'<path d="M50 74 V50" stroke-width="7" fill="none"/><path d="M50 54 C37 54 28 45 28 32 C41 32 50 41 50 54 Z M50 50 C50 37 59 28 72 28 C72 41 63 50 50 50 Z"/>',advanced:'<path d="M57 14 L29 55 H47 L41 86 L71 43 H53 Z"/>',pro:`<polygon points="${Qs(50,51,30,13,5)}"/>`,elite:'<path d="M50 16 C59 31 73 40 71 61 C70 75 61 84 50 84 C39 84 30 75 29 62 C28 49 38 43 40 32 C45 41 47 45 50 48 C53 37 48 27 50 16 Z"/>',unreal:'<path d="M16 50 C29 30 71 30 84 50 C71 70 29 70 16 50 Z"/><circle cx="50" cy="50" r="11" fill="#1a0b2e" stroke="none"/><circle cx="54" cy="46" r="4" fill="#fff" stroke="none"/>',hacker:'<path d="M38 32 L20 50 L38 68 M62 32 L80 50 L62 68 M56 27 L44 73" fill="none" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>',gotti:'<path d="M20 68 L15 32 L35 47 L50 22 L65 47 L85 32 L80 68 Z"/><rect x="20" y="70" width="60" height="9" rx="3"/><circle cx="50" cy="56" r="5" fill="#ff4fa3"/>'};function yr(n){const e=ye[n]||ye[0],t=ai[e.group],r=`bg${++XE}`,s=e.level>0?Array.from({length:e.level},(i,a)=>{const c=50+(a-(e.level-1)/2)*17;return`<polygon points="${Qs(c,90,9,4,5)}" fill="#ffd23f" stroke="#1a0b2e" stroke-width="2.5" stroke-linejoin="round"/>`}).join(""):"";return`<svg class="badge-svg" viewBox="0 0 100 104" xmlns="http://www.w3.org/2000/svg" aria-label="${GE(e.name)}">
  <defs>
    <linearGradient id="${r}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${t.light}"/><stop offset="0.45" stop-color="${t.main}"/><stop offset="1" stop-color="${t.dark}"/>
    </linearGradient>
  </defs>
  <g stroke="#1a0b2e" stroke-width="5" stroke-linejoin="round" fill="url(#${r})">${Xu[e.group]}</g>
  <g transform="translate(50 50) scale(0.82) translate(-50 -50)" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="3">${Xu[e.group]}</g>
  <g transform="translate(50 50) scale(0.62) translate(-50 -50)" fill="#fff" stroke="#1a0b2e" stroke-width="4" stroke-linejoin="round">${ZE[e.group]}</g>
  ${s}
</svg>`}function Hr(n,e=40){const t=St(yr(n));return t.style.width=`${e}px`,t.style.height=`${e}px`,t}function ic(n,e,t=140,r){const s=ye[n]||ye[0],i=ai[s.group],a=2*Math.PI*45,c=f("div",{class:"ringbadge",style:{width:`${t}px`,height:`${t}px`,"--rank":i.main}});r&&(c.dataset.ring=r),c.append(St(`<svg class="ring" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="none" stroke="#0c0624" stroke-width="9"/>
    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="6"/>
    <circle class="ring-fill" cx="50" cy="50" r="45" fill="none" stroke="${i.main}" stroke-width="6" stroke-linecap="round"
      stroke-dasharray="${a}" stroke-dashoffset="${a*(1-e/100)}" transform="rotate(-90 50 50)"/>
  </svg>`));const u=f("div",{class:"ringbadge-inner"});return u.append(Hr(n,t*.66)),c.append(u),c}function eT(n,e){const t=n.querySelector(".ring-fill");if(!t)return;const r=2*Math.PI*45;t.setAttribute("stroke-dashoffset",String(r*(1-e/100)))}function $t(n,e=40){const t=(n==null?void 0:n.name)||"?";if(n!=null&&n.photoURL)return f("img",{class:"avatar",src:n.photoURL,alt:t,loading:"lazy",style:{width:`${e}px`,height:`${e}px`}});const r=[...(n==null?void 0:n.username)||t].reduce((s,i)=>s+i.charCodeAt(0),0)%360;return f("div",{class:"avatar avatar-initial",style:{width:`${e}px`,height:`${e}px`,fontSize:`${e*.45}px`,background:`hsl(${r} 70% 45%)`}},t.slice(0,1).toUpperCase())}const tT='<svg viewBox="0 0 40 40" class="goonie-ico"><path d="M20 4 C30 4 35 12 35 21 C35 31 28 37 20 37 C12 37 5 31 5 21 C5 12 10 4 20 4 Z" fill="#a45bff" stroke="#1a0b2e" stroke-width="3"/><path d="M12 9 C14 6 18 5 20 5" stroke="#e2c9ff" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="14.5" cy="20" r="4" fill="#fff" stroke="#1a0b2e" stroke-width="2"/><circle cx="25.5" cy="20" r="4" fill="#fff" stroke="#1a0b2e" stroke-width="2"/><circle cx="15.5" cy="20.5" r="1.8" fill="#1a0b2e"/><circle cx="26.5" cy="20.5" r="1.8" fill="#1a0b2e"/><path d="M15 28 Q20 32 25 28" stroke="#1a0b2e" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>',x={uid:null,me:null,users:new Map,posts:[],notifs:[],usersLoaded:!1,postsLoaded:!1},ea=new Set,nT=n=>(ea.add(n),()=>ea.delete(n));let Zu=0;function Dr(n){cancelAnimationFrame(Zu),Zu=requestAnimationFrame(()=>ea.forEach(e=>e(n)))}const vr=n=>n!=null&&n.toMillis?n.toMillis():typeof n=="number"?n:0,oc=n=>{const e=n.data();return{id:n.id,...e,createdAt:vr(e.createdAt),punDeadline:vr(e.punDeadline),punDoneAt:vr(e.punDoneAt)}};let Js=[];const ac=80;let Ys=ac,Rt=null;function jf(){Rt==null||Rt(),Rt=Dn(Si(nn(rt,"posts"),Xa("createdAt","desc"),xf(Ys)),n=>{x.posts=n.docs.map(oc),x.postsLoaded=!0,x.feedHasMore=n.size>=Ys,Dr("posts")},n=>console.warn("posts",n))}function rT(){Ys+=ac,jf()}function sT(n,e){qf(),x.uid=n,Js.push(Dn(nn(rt,"users"),t=>{x.users=new Map(t.docs.map(r=>[r.id,{id:r.id,...r.data()}])),x.me=x.users.get(n)||null,x.usersLoaded=!0,x.me||e==null||e(),Dr("users")},t=>console.warn("users",t))),Ys=ac,jf(),Js.push(Dn(Si(nn(rt,"notifications",n,"items"),Xa("createdAt","desc"),xf(60)),t=>{x.notifs=t.docs.map(r=>({id:r.id,...r.data(),createdAt:vr(r.data().createdAt)})),Dr("notifs")},t=>console.warn("notifs",t)))}function qf(){Js.forEach(n=>n()),Js=[],Rt==null||Rt(),Rt=null,Object.assign(x,{uid:null,me:null,users:new Map,posts:[],notifs:[],usersLoaded:!1,postsLoaded:!1})}async function iT(){const n=await OE(nn(rt,"users"));x.users=new Map(n.docs.map(e=>[e.id,{id:e.id,...e.data()}])),x.me=x.users.get(x.uid)||null,Dr("users")}function zf(){Dr("tick")}function oT(n,e){return Dn(Si(nn(rt,"posts"),CE("uid","==",n)),t=>{e(t.docs.map(oc).sort((r,s)=>s.day-r.day))})}function aT(n,e){return Dn(Ei(rt,"posts",n),t=>e(t.exists()?oc(t):null))}function cT(n,e){return Dn(Si(nn(rt,"posts",n,"comments"),Xa("createdAt","asc")),t=>{e(t.docs.map(r=>({id:r.id,...r.data(),createdAt:vr(r.data().createdAt)||Date.now()})))})}async function lT(n,e){return(await xE(nn(rt,"posts",n,"comments"),{uid:x.uid,text:e,createdAt:UE()})).id}const uT=(n,e)=>ME(Ei(rt,"posts",n,"comments",e)),Wf=n=>LE(Ei(rt,"users",x.uid),n),Hf="@firebase/installations",cc="0.6.18";/**
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
 */const Kf=1e4,Gf=`w:${cc}`,Qf="FIS_v2",hT="https://firebaseinstallations.googleapis.com/v1",dT=3600*1e3,fT="installations",pT="Installations";/**
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
 */const mT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},sn=new cn(fT,pT,mT);function Jf(n){return n instanceof st&&n.code.includes("request-failed")}/**
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
 */function Yf({projectId:n}){return`${hT}/projects/${n}/installations`}function Xf(n){return{token:n.token,requestStatus:2,expiresIn:_T(n.expiresIn),creationTime:Date.now()}}async function Zf(n,e){const r=(await e.json()).error;return sn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ep({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function gT(n,{refreshToken:e}){const t=ep(n);return t.append("Authorization",yT(e)),t}async function tp(n){const e=await n();return e.status>=500&&e.status<600?n():e}function _T(n){return Number(n.replace("s","000"))}function yT(n){return`${Qf} ${n}`}/**
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
 */async function vT({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Yf(n),s=ep(n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:t,authVersion:Qf,appId:n.appId,sdkVersion:Gf},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await tp(()=>fetch(r,c));if(u.ok){const d=await u.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:Xf(d.authToken)}}else throw await Zf("Create Installation",u)}/**
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
 */function np(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function wT(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ET=/^[cdef][\w-]{21}$/,ta="";function TT(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=IT(n);return ET.test(t)?t:ta}catch{return ta}}function IT(n){return wT(n).substr(0,22)}/**
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
 */function ki(n){return`${n.appName}!${n.appId}`}/**
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
 */const rp=new Map;function sp(n,e){const t=ki(n);ip(t,e),bT(t,e)}function ip(n,e){const t=rp.get(n);if(t)for(const r of t)r(e)}function bT(n,e){const t=AT();t&&t.postMessage({key:n,fid:e}),ST()}let Gt=null;function AT(){return!Gt&&"BroadcastChannel"in self&&(Gt=new BroadcastChannel("[Firebase] FID Change"),Gt.onmessage=n=>{ip(n.data.key,n.data.fid)}),Gt}function ST(){rp.size===0&&Gt&&(Gt.close(),Gt=null)}/**
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
 */const RT="firebase-installations-database",PT=1,on="firebase-installations-store";let vo=null;function lc(){return vo||(vo=ti(RT,PT,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(on)}}})),vo}async function Xs(n,e){const t=ki(n),s=(await lc()).transaction(on,"readwrite"),i=s.objectStore(on),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&sp(n,e.fid),e}async function op(n){const e=ki(n),r=(await lc()).transaction(on,"readwrite");await r.objectStore(on).delete(e),await r.done}async function Ci(n,e){const t=ki(n),s=(await lc()).transaction(on,"readwrite"),i=s.objectStore(on),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!a||a.fid!==c.fid)&&sp(n,c.fid),c}/**
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
 */async function uc(n){let e;const t=await Ci(n.appConfig,r=>{const s=kT(r),i=CT(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===ta?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function kT(n){const e=n||{fid:TT(),registrationStatus:0};return ap(e)}function CT(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(sn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=NT(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:VT(n)}:{installationEntry:e}}async function NT(n,e){try{const t=await vT(n,e);return Xs(n.appConfig,t)}catch(t){throw Jf(t)&&t.customData.serverCode===409?await op(n.appConfig):await Xs(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function VT(n){let e=await eh(n.appConfig);for(;e.registrationStatus===1;)await np(100),e=await eh(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await uc(n);return r||t}return e}function eh(n){return Ci(n,e=>{if(!e)throw sn.create("installation-not-found");return ap(e)})}function ap(n){return DT(n)?{fid:n.fid,registrationStatus:0}:n}function DT(n){return n.registrationStatus===1&&n.registrationTime+Kf<Date.now()}/**
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
 */async function OT({appConfig:n,heartbeatServiceProvider:e},t){const r=LT(n,t),s=gT(n,t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:Gf,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await tp(()=>fetch(r,c));if(u.ok){const d=await u.json();return Xf(d)}else throw await Zf("Generate Auth Token",u)}function LT(n,{fid:e}){return`${Yf(n)}/${e}/authTokens:generate`}/**
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
 */async function hc(n,e=!1){let t;const r=await Ci(n.appConfig,i=>{if(!cp(i))throw sn.create("not-registered");const a=i.authToken;if(!e&&FT(a))return i;if(a.requestStatus===1)return t=MT(n,e),i;{if(!navigator.onLine)throw sn.create("app-offline");const c=$T(i);return t=xT(n,c),c}});return t?await t:r.authToken}async function MT(n,e){let t=await th(n.appConfig);for(;t.authToken.requestStatus===1;)await np(100),t=await th(n.appConfig);const r=t.authToken;return r.requestStatus===0?hc(n,e):r}function th(n){return Ci(n,e=>{if(!cp(e))throw sn.create("not-registered");const t=e.authToken;return BT(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function xT(n,e){try{const t=await OT(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await Xs(n.appConfig,r),t}catch(t){if(Jf(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await op(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Xs(n.appConfig,r)}throw t}}function cp(n){return n!==void 0&&n.registrationStatus===2}function FT(n){return n.requestStatus===2&&!UT(n)}function UT(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+dT}function $T(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function BT(n){return n.requestStatus===1&&n.requestTime+Kf<Date.now()}/**
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
 */async function jT(n){const e=n,{installationEntry:t,registrationPromise:r}=await uc(e);return r?r.catch(console.error):hc(e).catch(console.error),t.fid}/**
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
 */async function qT(n,e=!1){const t=n;return await zT(t),(await hc(t,e)).token}async function zT(n){const{registrationPromise:e}=await uc(n);e&&await e}/**
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
 */function WT(n){if(!n||!n.options)throw wo("App Configuration");if(!n.name)throw wo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw wo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function wo(n){return sn.create("missing-app-config-values",{valueName:n})}/**
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
 */const lp="installations",HT="installations-internal",KT=n=>{const e=n.getProvider("app").getImmediate(),t=WT(e),r=Mr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},GT=n=>{const e=n.getProvider("app").getImmediate(),t=Mr(e,lp).getImmediate();return{getId:()=>jT(t),getToken:s=>qT(t,s)}};function QT(){et(new We(lp,KT,"PUBLIC")),et(new We(HT,GT,"PRIVATE"))}QT();Ue(Hf,cc);Ue(Hf,cc,"esm2017");/**
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
 */const JT="/firebase-messaging-sw.js",YT="/firebase-cloud-messaging-push-scope",up="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",XT="https://fcmregistrations.googleapis.com/v1",hp="google.c.a.c_id",ZT="google.c.a.c_l",eI="google.c.a.ts",tI="google.c.a.e",nh=1e4;var rh;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(rh||(rh={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Or;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Or||(Or={}));/**
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
 */function lt(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function nI(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const Eo="fcm_token_details_db",rI=5,sh="fcm_token_object_Store";async function sI(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Eo))return null;let e=null;return(await ti(Eo,rI,{upgrade:async(r,s,i,a)=>{var c;if(s<2||!r.objectStoreNames.contains(sh))return;const u=a.objectStore(sh),d=await u.index("fcmSenderId").get(n);if(await u.clear(),!!d){if(s===2){const m=d;if(!m.auth||!m.p256dh||!m.endpoint)return;e={token:m.fcmToken,createTime:(c=m.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:m.auth,p256dh:m.p256dh,endpoint:m.endpoint,swScope:m.swScope,vapidKey:typeof m.vapidKey=="string"?m.vapidKey:lt(m.vapidKey)}}}else if(s===3){const m=d;e={token:m.fcmToken,createTime:m.createTime,subscriptionOptions:{auth:lt(m.auth),p256dh:lt(m.p256dh),endpoint:m.endpoint,swScope:m.swScope,vapidKey:lt(m.vapidKey)}}}else if(s===4){const m=d;e={token:m.fcmToken,createTime:m.createTime,subscriptionOptions:{auth:lt(m.auth),p256dh:lt(m.p256dh),endpoint:m.endpoint,swScope:m.swScope,vapidKey:lt(m.vapidKey)}}}}}})).close(),await so(Eo),await so("fcm_vapid_details_db"),await so("undefined"),iI(e)?e:null}function iI(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const oI="firebase-messaging-database",aI=1,an="firebase-messaging-store";let To=null;function dc(){return To||(To=ti(oI,aI,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(an)}}})),To}async function dp(n){const e=pc(n),r=await(await dc()).transaction(an).objectStore(an).get(e);if(r)return r;{const s=await sI(n.appConfig.senderId);if(s)return await fc(n,s),s}}async function fc(n,e){const t=pc(n),s=(await dc()).transaction(an,"readwrite");return await s.objectStore(an).put(e,t),await s.done,e}async function cI(n){const e=pc(n),r=(await dc()).transaction(an,"readwrite");await r.objectStore(an).delete(e),await r.done}function pc({appConfig:n}){return n.appId}/**
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
 */const lI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Re=new cn("messaging","Messaging",lI);/**
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
 */async function uI(n,e){const t=await gc(n),r=pp(e),s={method:"POST",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(mc(n.appConfig),s)).json()}catch(a){throw Re.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw Re.create("token-subscribe-failed",{errorInfo:a})}if(!i.token)throw Re.create("token-subscribe-no-token");return i.token}async function hI(n,e){const t=await gc(n),r=pp(e.subscriptionOptions),s={method:"PATCH",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${mc(n.appConfig)}/${e.token}`,s)).json()}catch(a){throw Re.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw Re.create("token-update-failed",{errorInfo:a})}if(!i.token)throw Re.create("token-update-no-token");return i.token}async function fp(n,e){const r={method:"DELETE",headers:await gc(n)};try{const i=await(await fetch(`${mc(n.appConfig)}/${e}`,r)).json();if(i.error){const a=i.error.message;throw Re.create("token-unsubscribe-failed",{errorInfo:a})}}catch(s){throw Re.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function mc({projectId:n}){return`${XT}/projects/${n}/registrations`}async function gc({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function pp({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const s={web:{endpoint:t,auth:e,p256dh:n}};return r!==up&&(s.web.applicationPubKey=r),s}/**
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
 */const dI=10080*60*1e3;async function fI(n){const e=await gI(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:lt(e.getKey("auth")),p256dh:lt(e.getKey("p256dh"))},r=await dp(n.firebaseDependencies);if(r){if(_I(r.subscriptionOptions,t))return Date.now()>=r.createTime+dI?mI(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await fp(n.firebaseDependencies,r.token)}catch(s){console.warn(s)}return ih(n.firebaseDependencies,t)}else return ih(n.firebaseDependencies,t)}async function pI(n){const e=await dp(n.firebaseDependencies);e&&(await fp(n.firebaseDependencies,e.token),await cI(n.firebaseDependencies));const t=await n.swRegistration.pushManager.getSubscription();return t?t.unsubscribe():!0}async function mI(n,e){try{const t=await hI(n.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await fc(n.firebaseDependencies,r),t}catch(t){throw t}}async function ih(n,e){const r={token:await uI(n,e),createTime:Date.now(),subscriptionOptions:e};return await fc(n,r),r.token}async function gI(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:nI(e)})}function _I(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,s=e.auth===n.auth,i=e.p256dh===n.p256dh;return t&&r&&s&&i}/**
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
 */function oh(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return yI(e,n),vI(e,n),wI(e,n),e}function yI(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const s=e.notification.image;s&&(n.notification.image=s);const i=e.notification.icon;i&&(n.notification.icon=i)}function vI(n,e){e.data&&(n.data=e.data)}function wI(n,e){var t,r,s,i,a;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const c=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;c&&(n.fcmOptions.link=c);const u=(a=e.fcmOptions)===null||a===void 0?void 0:a.analytics_label;u&&(n.fcmOptions.analyticsLabel=u)}/**
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
 */function EI(n){return typeof n=="object"&&!!n&&hp in n}/**
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
 */function TI(n){if(!n||!n.options)throw Io("App Configuration Object");if(!n.name)throw Io("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw Io(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Io(n){return Re.create("missing-app-config-values",{valueName:n})}/**
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
 */class II{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=TI(e);this.firebaseDependencies={app:e,appConfig:s,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function mp(n){try{n.swRegistration=await navigator.serviceWorker.register(JT,{scope:YT}),n.swRegistration.update().catch(()=>{}),await bI(n.swRegistration)}catch(e){throw Re.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function bI(n){return new Promise((e,t)=>{const r=setTimeout(()=>t(new Error(`Service worker not registered after ${nh} ms`)),nh),s=n.installing||n.waiting;n.active?(clearTimeout(r),e()):s?s.onstatechange=i=>{var a;((a=i.target)===null||a===void 0?void 0:a.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),t(new Error("No incoming service worker found.")))})}/**
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
 */async function AI(n,e){if(!e&&!n.swRegistration&&await mp(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Re.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function SI(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=up)}/**
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
 */async function gp(n,e){if(!navigator)throw Re.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Re.create("permission-blocked");return await SI(n,e==null?void 0:e.vapidKey),await AI(n,e==null?void 0:e.serviceWorkerRegistration),fI(n)}/**
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
 */async function RI(n,e,t){const r=PI(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[hp],message_name:t[ZT],message_time:t[eI],message_device_time:Math.floor(Date.now()/1e3)})}function PI(n){switch(n){case Or.NOTIFICATION_CLICKED:return"notification_open";case Or.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function kI(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Or.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(oh(t)):n.onMessageHandler.next(oh(t)));const r=t.data;EI(r)&&r[tI]==="1"&&await RI(n,t.messageType,r)}const ah="@firebase/messaging",ch="0.12.22";/**
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
 */const CI=n=>{const e=new II(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>kI(e,t)),e},NI=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>gp(e,r)}};function VI(){et(new We("messaging",CI,"PUBLIC")),et(new We("messaging-internal",NI,"PRIVATE")),Ue(ah,ch),Ue(ah,ch,"esm2017")}/**
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
 */async function _p(){try{await Ih()}catch{return!1}return typeof window<"u"&&Th()&&Dm()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */async function DI(n){if(!navigator)throw Re.create("only-available-in-window");return n.swRegistration||await mp(n),pI(n)}/**
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
 */function _c(n=xg()){return _p().then(e=>{if(!e)throw Re.create("unsupported-browser")},e=>{throw Re.create("indexed-db-unsupported")}),Mr(he(n),"messaging").getImmediate()}async function yp(n,e){return n=he(n),gp(n,e)}function OI(n){return n=he(n),DI(n)}VI();let Zs=null;async function yc(){if(!("serviceWorker"in navigator))return null;try{return Zs=await navigator.serviceWorker.register("./sw.js",{scope:"./"}),navigator.serviceWorker.addEventListener("message",n=>{var e;((e=n.data)==null?void 0:e.type)==="open"&&n.data.link&&(location.hash=n.data.link.replace(/^#/,""))}),Zs}catch{return null}}async function vp(){if(!("Notification"in window)||!("serviceWorker"in navigator)||!("PushManager"in window))return!1;try{return await _p()}catch{return!1}}const wp=()=>"Notification"in window?Notification.permission:"unsupported";async function Ep(){if(!await vp())throw new Error("Push geht hier nicht. Auf dem iPhone: App erst zum Home-Bildschirm hinzufügen.");if(await Notification.requestPermission()!=="granted")throw new Error("Benachrichtigungen wurden nicht erlaubt. Du kannst das in den Handy-Einstellungen ändern.");const e=Zs||await yc(),t=await yp(_c(Wr),{serviceWorkerRegistration:e});if(!t)throw new Error("Kein Push-Token erhalten");return localStorage.setItem("pushToken",t),await Ne("/push/register",{token:t,enabled:!0}),!0}async function LI(){const n=localStorage.getItem("pushToken");await Ne("/push/register",{token:n,remove:!0,enabled:!1});try{jE||await OI(_c(Wr))}catch{}localStorage.removeItem("pushToken")}async function MI(){if(!(wp()!=="granted"||localStorage.getItem("pushOff")==="1"))try{const n=Zs||await yc(),e=await yp(_c(Wr),{serviceWorkerRegistration:n});e&&e!==localStorage.getItem("pushToken")&&(localStorage.setItem("pushToken",e),await Ne("/push/register",{token:e,enabled:!0}))}catch{}}function xI(){try{let n=localStorage.getItem("deviceId");return n||(n=crypto.randomUUID(),localStorage.setItem("deviceId",n)),n}catch{return""}}function lh(n){const e=(n==null?void 0:n.code)||"";return e.includes("invalid-credential")||e.includes("wrong-password")||e.includes("user-not-found")||e.includes("invalid-email")?"Username oder Passwort falsch":e.includes("too-many-requests")?"Zu viele Versuche. Bitte kurz warten.":e.includes("network")?"Keine Verbindung":(n==null?void 0:n.message)||"Login fehlgeschlagen"}function FI(){const n=f("div",{class:"auth"}),e=f("div",{class:"auth-logo"},Hr(11,96),f("h1",{class:"logo-text"},oi),f("p",{class:"muted"},"November-Streak mit deinen Leuten")),t=f("div",{class:"card auth-card"}),r=(c,u)=>f("label",{class:"field"},f("span",{class:"label"},c),u),s=()=>{t.replaceChildren(f("button",{class:"btn btn-gold btn-big",onclick:i},"Einloggen"),f("button",{class:"btn btn-blue btn-big",onclick:a},"Neu registrieren"))},i=()=>{const c=f("input",{class:"input",autocomplete:"username",autocapitalize:"none",spellcheck:!1,placeholder:"dein_username"}),u=f("input",{class:"input",type:"password",autocomplete:"current-password",placeholder:"••••••"}),d=f("button",{class:"btn btn-gold btn-big",type:"submit"},"Einloggen"),m=f("form",{class:"stack"},f("h2",{class:"title"},"Einloggen"),r("Username",c),r("Passwort",u),d,f("button",{class:"btn btn-grey",type:"button",onclick:s},"Zurück"));m.onsubmit=async g=>{g.preventDefault(),Se(d,!0);try{history.replaceState(null,"","#/"),await jl(On,Yu(c.value),u.value)}catch(w){Se(d,!1),Y(lh(w),"error")}},t.replaceChildren(m),c.focus()},a=()=>{const c=f("input",{class:"input",maxLength:24,placeholder:"z. B. Freddi"}),u=f("input",{class:"input",maxLength:20,autocomplete:"username",autocapitalize:"none",spellcheck:!1,placeholder:"nur a–z, 0–9, _ und ."}),d=f("input",{class:"input",type:"password",autocomplete:"new-password",placeholder:"mind. 6 Zeichen"}),m=f("input",{class:"input",type:"password",autocomplete:"off",placeholder:"bekommst du von der Gruppe"}),g=f("button",{class:"btn btn-blue btn-big",type:"submit"},"Registrieren"),w=f("form",{class:"stack"},f("h2",{class:"title"},"Neu registrieren"),r("Name (wird angezeigt)",c),r("Username (zum Einloggen)",u),r("Passwort",d),r("Website-Code",m),g,f("button",{class:"btn btn-grey",type:"button",onclick:s},"Zurück"));w.onsubmit=async R=>{R.preventDefault(),Se(g,!0);try{await Ne("/register",{name:c.value,username:u.value,password:d.value,code:m.value,deviceId:xI()},{authed:!1}),localStorage.removeItem("onboarded"),history.replaceState(null,"","#/"),await jl(On,Yu(u.value),d.value),Y("Willkommen! 🎉","success")}catch(C){Se(g,!1),Y(C.code?lh(C):C.message,"error")}},t.replaceChildren(w),c.focus()};return s(),n.append(e,t),n}function UI(n){const e=f("div",{class:"auth onboarding"}),t=QE(),r=JE(),s=YE();let i=s?1:0;const a=[()=>f("div",{class:"stack"},f("div",{class:"big-emoji"},"📲"),f("h2",{class:"title"},"App auf den Home-Bildschirm"),f("p",{class:"muted center"},t?"Auf dem iPhone kommen Push-Nachrichten nur, wenn die App auf dem Home-Bildschirm ist.":"Dann startest du die App mit einem Tipp, wie eine normale App."),t?f("ol",{class:"howto"},f("li",{},"Öffne diese Seite in ",f("b",{},"Safari"),"."),f("li",{},"Tippe unten auf ",f("b",{},"Teilen")," (Quadrat mit Pfeil nach oben ⬆️)."),f("li",{},"Scrolle runter und tippe ",f("b",{},"„Zum Home-Bildschirm“"),"."),f("li",{},"Tippe oben rechts auf ",f("b",{},"„Hinzufügen“"),"."),f("li",{},"Öffne die App jetzt über das neue Symbol auf dem Home-Bildschirm und logge dich dort ein.")):f("ol",{class:"howto"},f("li",{},"Öffne diese Seite in ",f("b",{},"Chrome"),"."),f("li",{},"Tippe oben rechts auf ",f("b",{},"⋮")," (drei Punkte)."),f("li",{},"Tippe ",f("b",{},"„Zum Startbildschirm hinzufügen“")," oder ",f("b",{},"„App installieren“"),"."),f("li",{},"Bestätige mit ",f("b",{},"„Installieren“"),"."),f("li",{},"Öffne die App über das neue Symbol.")),f("button",{class:"btn btn-gold btn-big",onclick:()=>{i=1,u()}},t?"Schon erledigt / weiter":"Weiter"),!r&&!t?f("p",{class:"muted small center"},"Am PC kannst du einfach weitermachen."):null),()=>{const d=f("button",{class:"btn btn-gold btn-big"},"🔔 Benachrichtigungen erlauben"),m=f("div",{class:"stack"},f("div",{class:"big-emoji"},"🔔"),f("h2",{class:"title"},"Push-Nachrichten"),f("p",{class:"muted center"},"Du bekommst eine Erinnerung um 21, 22 und 23 Uhr (nur wenn du noch nicht abgehakt hast) und siehst, wenn jemand postet, kommentiert oder dir ein Goonie gibt."),d,f("button",{class:"btn btn-grey",onclick:c},"Später"));return d.onclick=async()=>{Se(d,!0);try{await Ep(),localStorage.removeItem("pushOff"),Y("Push ist an ✅","success"),c()}catch(g){Se(d,!1),Y(g.message,"error")}},vp().then(g=>{g||(d.disabled=!0,d.textContent=t&&!s?"Erst zum Home-Bildschirm hinzufügen":"Push geht in diesem Browser nicht")}),m}];function c(){try{localStorage.setItem("onboarded","1")}catch{}n()}function u(){e.replaceChildren(f("div",{class:"card auth-card"},a[i]()))}return u(),e}function $I(n=2600){const e=f("canvas",{class:"confetti"});document.body.append(e);const t=e.getContext("2d"),r=Math.min(2,window.devicePixelRatio||1);e.width=innerWidth*r,e.height=innerHeight*r,t.scale(r,r);const s=["#ffd23f","#3fa9ff","#a45bff","#ff4fa3","#5ad35a","#fff"],i=Array.from({length:140},()=>({x:innerWidth/2+(Math.random()-.5)*80,y:innerHeight*.38,vx:(Math.random()-.5)*14,vy:-Math.random()*15-5,r:Math.random()*Math.PI,vr:(Math.random()-.5)*.4,w:6+Math.random()*7,c:s[Math.floor(Math.random()*s.length)]})),a=performance.now(),c=u=>{t.clearRect(0,0,innerWidth,innerHeight);for(const d of i)d.vy+=.42,d.vx*=.99,d.x+=d.vx,d.y+=d.vy,d.r+=d.vr,t.save(),t.translate(d.x,d.y),t.rotate(d.r),t.fillStyle=d.c,t.fillRect(-d.w/2,-d.w/4,d.w,d.w/2),t.restore();u-a<n?requestAnimationFrame(c):e.remove()};requestAnimationFrame(c)}function vc(n){var e;try{(e=navigator.vibrate)==null||e.call(navigator,n)}catch{}}function wc(n,e){const t=ai[ye[e].group].main;yt(r=>{const s=f("div",{class:"fx-stage"}),i=St(yr(e));return i.classList.add("fx-badge","fx-spin"),s.append(f("div",{class:"fx-rays",style:{"--c":t}}),i),setTimeout(()=>{$I(),vc([40,60,40])},700),f("div",{class:"fx"},f("div",{class:"fx-label"},"AUFSTIEG!"),s,f("div",{class:"fx-name",style:{color:t}},ye[e].name),f("div",{class:"muted center"},`von ${ye[n].name}`),f("button",{class:"btn btn-gold btn-big",onclick:r},"Weiter"))},{full:!0})}function Tp(n,e,t,r){yt(s=>{const i=f("div",{class:"fx-stage"}),a=St(yr(n)),c=St(yr(n));a.classList.add("fx-badge","fx-half","fx-left"),c.classList.add("fx-badge","fx-half","fx-right");const u=St('<svg class="fx-crack" viewBox="0 0 100 104"><path d="M50 0 L44 22 L56 38 L45 55 L57 72 L48 104" fill="none" stroke="#1a0b2e" stroke-width="4"/></svg>'),d=St(yr(e));return d.classList.add("fx-badge","fx-next"),i.append(a,c,u,d),setTimeout(()=>vc([120,50,200]),600),f("div",{class:"fx fx-down"},f("div",{class:"fx-label fx-label-red"},"ABSTIEG"),i,f("div",{class:"fx-name"},ye[e].name),f("div",{class:"muted center"},`von ${ye[n].name} · Ring auf 0 %`),r?f("div",{class:"fx-reason"},r):null,f("button",{class:"btn btn-blue btn-big",onclick:s},"Weiter"))},{full:!0,onClose:t})}function BI(n){n.classList.remove("pop"),n.offsetWidth,n.classList.add("pop");const e=f("span",{class:"plus-one"},"+1");n.append(e),setTimeout(()=>e.remove(),900),vc(25)}function jI(n){var c,u;if(!n)return;const e=`seenRank:${n.id}`;let t=null;try{t=localStorage.getItem(e)}catch{}const r=n.rankIndex||0;try{localStorage.setItem(e,String(r))}catch{}if(t==null)return;const s=String(((u=(c=n.resetAt)==null?void 0:c.toMillis)==null?void 0:u.call(c))||0);let i=null;try{i=localStorage.getItem(`seenReset:${n.id}`),localStorage.setItem(`seenReset:${n.id}`,s)}catch{}if(i!==s&&s!=="0")return;const a=Number(t);r>a?wc(a,r):r<a&&Tp(a,r,null,n.punishmentOpen?"Grund: Bestrafung nicht bis 21:00 gemacht (−50 % Ring)":"Grund: Tag nicht geschafft oder nicht beantwortet")}function Ip(n,e){try{localStorage.setItem(`seenRank:${n.id}`,String(e))}catch{}}function qI(){return window.MediaRecorder?["video/mp4;codecs=avc1","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"].find(e=>{var t;return(t=MediaRecorder.isTypeSupported)==null?void 0:t.call(MediaRecorder,e)})||"":null}const uh=()=>{var n;return!!((n=navigator.mediaDevices)!=null&&n.getUserMedia&&window.MediaRecorder)};function wr(n,e){let t=null,r=null,s=[],i=null,a=0,c="user";const u=()=>{t==null||t.getTracks().forEach(d=>d.stop()),t=null};yt(d=>{const m=f("div",{class:"rec"}),g=f("video",{class:"rec-video",playsInline:!0,muted:!0,autoplay:!0});g.setAttribute("playsinline","");const w=f("div",{class:"rec-clock"},`0 / ${or} s`),R=f("div",{class:"rec-controls"}),C=f("div",{class:"rec-head"},f("div",{class:"pun-text small"},e),f("div",{class:"row gap"},f("button",{class:"btn btn-blue btn-small",onclick:()=>sc(`Bestrafung: ${e}`)},"🔊"),f("button",{class:"btn btn-grey btn-small",onclick:()=>{u(),clearInterval(a),d()}},"✕"))),V=f("div",{class:"rec-hint"},"⚠️ Nur bekleidet filmen, nichts Gefährliches. Max. 60 Sekunden.");m.append(C,f("div",{class:"rec-stage"},g,w),V,R);const N=f("input",{type:"file",accept:"video/*",capture:"user",style:{display:"none"}});N.onchange=async()=>{var y;const T=(y=N.files)==null?void 0:y[0];if(!T)return;if(await zI(T)>or+1.5){Y("Das Video ist länger als 60 Sekunden","error");return}i=T,Pe()},m.append(N);const j=async()=>{u();try{t=await navigator.mediaDevices.getUserMedia({video:{facingMode:c,width:{ideal:720},height:{ideal:1280}},audio:!0}),g.srcObject=t,g.muted=!0,await g.play().catch(()=>{}),B()}catch{R.replaceChildren(f("p",{class:"muted center"},"Kein Zugriff auf die Kamera. Erlaube die Kamera in den Einstellungen oder nimm das Video mit der Kamera-App auf."),f("button",{class:"btn btn-gold btn-big",onclick:()=>N.click()},"📹 Video aufnehmen"))}},B=()=>{w.textContent=`0 / ${or} s`,R.replaceChildren(f("button",{class:"btn btn-grey btn-round",title:"Kamera wechseln",onclick:()=>{c=c==="user"?"environment":"user",j()}},"🔄"),f("button",{class:"rec-btn","aria-label":"Aufnahme starten",onclick:z}),f("button",{class:"btn btn-grey btn-round",title:"Datei wählen",onclick:()=>N.click()},"📁"))},z=()=>{s=[];const T=qI();try{r=new MediaRecorder(t,{...T?{mimeType:T}:{},videoBitsPerSecond:15e5})}catch{r=new MediaRecorder(t)}r.ondataavailable=y=>y.data.size&&s.push(y.data),r.onstop=()=>{i=new Blob(s,{type:r.mimeType||T||"video/webm"}),Pe()},r.start(1e3);const _=Date.now();w.classList.add("live"),a=setInterval(()=>{const y=Math.floor((Date.now()-_)/1e3);w.textContent=`● ${y} / ${or} s`,y>=or&&ne()},250),R.replaceChildren(f("button",{class:"btn btn-red btn-big",onclick:ne},"■ Fertig"))},ne=()=>{clearInterval(a),w.classList.remove("live"),(r==null?void 0:r.state)==="recording"&&r.stop()},Pe=()=>{u(),g.srcObject=null,g.src=URL.createObjectURL(i),g.muted=!1,g.controls=!0,g.loop=!0,g.play().catch(()=>{}),w.textContent="Vorschau";const T=f("button",{class:"btn btn-gold btn-big"},"⬆️ Hochladen und posten"),_=f("div",{class:"progress"},f("div",{class:"progress-fill"}));T.onclick=()=>re(T,_),R.replaceChildren(f("button",{class:"btn btn-grey",onclick:()=>{g.controls=!1,g.removeAttribute("src"),uh()?j():N.click()}},"Nochmal"),T,_)},re=async(T,_)=>{Se(T,!0,"Lädt hoch …");try{const y=await Ne("/upload/sign",{kind:"video",day:n});y.mock||await bp(y,i,I=>{_.firstChild.style.width=`${I}%`});const E=await Ne("/punishment/done",{day:n,publicId:y.publicId});d(),x.me&&Ip(x.me,E.after.rankIndex),E.repaired&&E.after.rankIndex>E.before.rankIndex?wc(E.before.rankIndex,E.after.rankIndex):Y(E.repaired?`Tag ${n} wiedergutgemacht ✅`:"Bestrafung erledigt 💪","success")}catch(y){Se(T,!1),Y(y.message||"Upload fehlgeschlagen","error")}};return uh()?j():R.replaceChildren(f("button",{class:"btn btn-gold btn-big",onclick:()=>N.click()},"📹 Video aufnehmen")),m},{full:!0,dismissable:!1,onClose:()=>{u(),clearInterval(a)}})}function zI(n){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.onloadedmetadata=()=>{e(t.duration||0),URL.revokeObjectURL(t.src)},t.onerror=()=>e(0),t.src=URL.createObjectURL(n)})}function bp(n,e,t){return new Promise((r,s)=>{const i=new FormData;i.append("file",e),i.append("api_key",n.apiKey),i.append("timestamp",String(n.timestamp)),i.append("public_id",n.publicId),i.append("signature",n.signature);const a=new XMLHttpRequest;a.open("POST",`https://api.cloudinary.com/v1_1/${n.cloudName}/${n.resourceType}/upload`),a.upload.onprogress=c=>c.lengthComputable&&(t==null?void 0:t(Math.round(c.loaded/c.total*100))),a.onload=()=>a.status<300?r(JSON.parse(a.responseText)):s(new Error("Upload fehlgeschlagen")),a.onerror=()=>s(new Error("Upload fehlgeschlagen, Verbindung prüfen")),a.send(i)})}const hh={done:{label:"Geschafft",cls:"st-done",icon:"✅"},fail:{label:"Nicht geschafft",cls:"st-fail",icon:"❌"},open:{label:"Offen",cls:"st-open",icon:"⏳"}},dh=new Map,WI=(n,e)=>JSON.stringify([n.type,n.videoUrl,n.gooniedBy,n.commentCount,n.repaired,n.final,e==null?void 0:e.name,e==null?void 0:e.photoURL,n.rankIndex,x.uid]);function Ec(n,{detail:e=!1}={}){const t=x.users.get(n.uid),r=WI(n,t),s=dh.get(n.id);if(!e&&s&&s.k===r)return s.el.querySelector(".post-time").textContent=Pi(n.createdAt,fe()),s.el;const i=HI(n,t);return e||dh.set(n.id,{k:r,el:i}),i}function HI(n,e){const t=hh[n.type]||hh.open,r=n.uid===x.uid,s=(e==null?void 0:e.name)||"Unbekannt",i=n.type==="done"?n.repaired?`${s} hat Tag ${n.day} wiedergutgemacht`:`${s} hat Tag ${n.day} geschafft`:n.type==="fail"?n.auto?`${s} hat Tag ${n.day} nicht beantwortet`:`${s} hat Tag ${n.day} nicht geschafft`:`${s}: Tag ${n.day} – Nein – offen (nicht geantwortet)`,a=f("article",{class:`card post ${t.cls}`});if(a.append(f("header",{class:"post-head"},f("a",{href:`#/u/${n.uid}`,class:"post-ava"},$t(e,46)),f("div",{class:"post-meta"},f("a",{href:`#/u/${n.uid}`,class:"post-name"},s," ",Hr(n.rankIndex??0,22)),f("div",{class:"post-sub"},`Tag ${n.day} · `,f("span",{class:"post-time"},Pi(n.createdAt,fe())))),f("span",{class:`pill ${t.cls}`},`${t.icon} ${n.repaired?"Wiedergutgemacht":t.label}`)),f("div",{class:"post-title"},i)),n.promoted&&a.append(f("div",{class:"post-rank up"},"⬆️ Aufstieg auf ",f("b",{},Ql(n.rankIndex)))),n.demoted&&a.append(f("div",{class:"post-rank down"},"⬇️ Abstieg auf ",f("b",{},Ql(n.rankIndex)))),n.reason&&a.append(f("div",{class:"qa"},f("div",{class:"qa-q"},"Woran lag es?"),f("div",{class:"qa-a"},n.reason))),n.better&&a.append(f("div",{class:"qa"},f("div",{class:"qa-q"},"Was mache ich nächstes Mal besser?"),f("div",{class:"qa-a"},n.better))),n.punishment){const g=f("div",{class:"pun-box"},f("div",{class:"pun-row"},f("div",{class:"pun-label"},f("b",{},"Bestrafung: "),n.punishment),f("button",{class:"btn btn-blue btn-icon",title:"Vorlesen",onclick:()=>sc(`Bestrafung: ${n.punishment}`)},"🔊")));if(n.videoUrl&&n.videoUrl!=="mock"){const w=f("video",{class:"pun-video",src:n.videoUrl,poster:n.posterUrl||void 0,controls:!0,preload:"none",playsInline:!0});w.setAttribute("playsinline",""),g.append(w)}else if(n.videoUrl==="mock")g.append(f("div",{class:"pun-missing"},"🎥 (Testmodus: Video simuliert)"));else{const w=n.punDeadline&&fe()>n.punDeadline;g.append(f("div",{class:`pun-missing ${w?"late":""}`},w?"❗ Bestrafung offen – Frist verpasst":`🎥 Video fehlt noch · Frist ${br(n.punDeadline)} Uhr`)),r&&g.append(f("button",{class:"btn btn-gold",onclick:()=>wr(n.day,n.punishment)},n.type==="open"&&!w?"🎥 Wiedergutmachen":"🎥 Bestrafung machen"))}a.append(g)}const c=(n.gooniedBy||[]).length,u=(n.gooniedBy||[]).includes(x.uid),d=f("button",{class:`goonie-btn ${u?"on":""} ${r?"own":""}`,"aria-label":"Goonie geben"});d.append(St(tT),f("span",{class:"g-count"},String(c)),f("span",{class:"g-label"},c===1?"Goonie":"Goonies")),d.onclick=async()=>{if(r){KI(n);return}const g=!d.classList.contains("on");d.classList.toggle("on",g);const w=d.querySelector(".g-count");w.textContent=String(Number(w.textContent)+(g?1:-1)),g&&BI(d);try{await Ne("/goonie",{postId:n.id,on:g})}catch(R){d.classList.toggle("on",!g),w.textContent=String(Number(w.textContent)+(g?-1:1)),Y(R.message,"error")}};const m=f("button",{class:"comment-btn",onclick:()=>GI(n)},"💬 ",String(n.commentCount||0));return a.append(f("footer",{class:"post-foot"},d,m)),a}function KI(n){const e=(n.gooniedBy||[]).map(t=>x.users.get(t)).filter(Boolean);yt(f("div",{class:"stack"},f("h2",{class:"title"},"Goonies von"),e.length?f("div",{class:"list"},e.map(t=>f("a",{class:"list-row",href:`#/u/${t.id}`},$t(t,36),f("span",{},t.name)))):f("p",{class:"muted center"},"Noch keine. Eigene Posts kannst du nicht goonien.")),{sheet:!0})}function GI(n){let e=null;yt(t=>{const r=f("div",{class:"comments"},f("p",{class:"muted center"},"Lädt …")),s=f("textarea",{class:"input",rows:2,maxLength:fs,placeholder:"Kommentar schreiben …"}),i=f("span",{class:"muted small"},`0/${fs}`);s.oninput=()=>{i.textContent=`${s.value.length}/${fs}`};const a=f("button",{class:"btn btn-gold"},"Senden");return a.onclick=async()=>{const c=s.value.trim();if(c){a.disabled=!0;try{const u=await lT(n.id,c);s.value="",i.textContent=`0/${fs}`,Ne("/comment/notify",{postId:n.id,commentId:u}).catch(()=>{})}catch{Y("Kommentar konnte nicht gesendet werden","error")}a.disabled=!1}},e=cT(n.id,c=>{r.replaceChildren(...c.length?c.map(u=>{const d=x.users.get(u.uid);return f("div",{class:"comment"},$t(d,32),f("div",{class:"comment-body"},f("div",{class:"comment-head"},f("b",{},(d==null?void 0:d.name)||"?")," ",f("span",{class:"muted small"},Pi(u.createdAt,fe()))),f("div",{class:"comment-text"},u.text)),u.uid===x.uid&&f("button",{class:"comment-del",title:"Löschen",onclick:async()=>{await rc("Kommentar löschen?",null,"Löschen","red")&&(await uT(n.id,u.id),Ne("/comment/notify",{postId:n.id}).catch(()=>{}))}},"🗑"))}):[f("p",{class:"muted center"},"Noch keine Kommentare.")]),r.scrollTop=r.scrollHeight}),f("div",{class:"stack"},f("div",{class:"row between"},f("h2",{class:"title"},"Kommentare"),f("button",{class:"btn btn-grey btn-icon",onclick:t},"✕")),r,s,f("div",{class:"row between"},i,a))},{sheet:!0,onClose:()=>e==null?void 0:e()})}let Be=null;function Lr(n){(Be==null?void 0:Be.id)!==n&&(Lr.leave(),Be={id:n,post:void 0},Be.unsub=aT(n,t=>{Be.post=t,zf()}));const e=Be.post;return f("div",{class:"page"},f("a",{class:"back",href:"#/"},"← Zum Feed"),e===void 0?f("p",{class:"muted center"},"Lädt …"):e?Ec(e):f("p",{class:"muted center"},"Post nicht gefunden."))}Lr.live=!0;Lr.leave=()=>{Be==null||Be.unsub(),Be=null};function Ap(n){yt(e=>{const t=f("div",{class:"stack"}),r=()=>{t.replaceChildren(f("div",{class:"eyebrow"},`Tag ${n}`),f("h2",{class:"title"},"Hast du es heute geschafft?"),f("p",{class:"muted center"},"Nur eine Antwort pro Tag. Sei ehrlich."),f("button",{class:"btn btn-green btn-big",onclick:a=>i(a.currentTarget,{result:"done"})},"Geschafft ✅"),f("button",{class:"btn btn-red btn-big",onclick:s},"Nicht geschafft ❌"))},s=()=>{const a=f("textarea",{class:"input",rows:3,maxLength:300,placeholder:"Woran lag es?"}),c=f("textarea",{class:"input",rows:3,maxLength:300,placeholder:"Was machst du nächstes Mal besser?"}),u=f("button",{class:"btn btn-red btn-big"},"Fertig");u.onclick=()=>{if(!a.value.trim()||!c.value.trim()){Y("Bitte beide Felder ausfüllen","error");return}i(u,{result:"fail",reason:a.value,better:c.value})},t.replaceChildren(f("div",{class:"eyebrow"},`Tag ${n}`),f("h2",{class:"title"},"Nicht geschafft"),f("label",{class:"label"},"Woran lag es?"),a,f("label",{class:"label"},"Was machst du nächstes Mal besser?"),c,u,f("button",{class:"btn btn-grey",onclick:r},"Zurück")),a.focus()},i=async(a,c)=>{Se(a,!0);try{const u=await Ne("/checkin",c);e(),x.me&&Ip(x.me,u.after.rankIndex),c.result==="done"?u.after.rankIndex>u.before.rankIndex?wc(u.before.rankIndex,u.after.rankIndex):Y(`Tag ${u.day} geschafft! 🔥`,"success"):u.after.rankIndex<u.before.rankIndex?Tp(u.before.rankIndex,u.after.rankIndex,()=>fh(u.day,u.punishment)):fh(u.day,u.punishment)}catch(u){Se(a,!1),Y(u.message,"error")}};return r(),t})}function fh(n,e){yt(t=>f("div",{class:"stack"},f("div",{class:"eyebrow eyebrow-red"},"Deine Bestrafung"),f("div",{class:"pun-card"},f("div",{class:"pun-text"},e),f("button",{class:"btn btn-blue btn-small",onclick:()=>sc(`Bestrafung: ${e}`)},"🔊 Vorlesen")),f("p",{class:"muted center"},"Zeit bis morgen 21:00. Sonst: −50 % Ring und „Bestrafung offen“."),f("button",{class:"btn btn-gold btn-big",onclick:()=>{t(),wr(n,e)}},"🎥 Bestrafung machen"),f("button",{class:"btn btn-grey",onclick:t},"Später")))}function Sp(n){return n.final?"Endrang erreicht 👑":`${Zo(n.pct)} % ${n.rank.name} – noch ${Zo(n.rest)} % bis ${n.next.name}`}function Rp(){return[...x.users.values()].sort((n,e)=>e.rankIndex-n.rankIndex||e.progress-n.progress||e.doneCount-n.doneCount||n.name.localeCompare(e.name))}function bo(n){const e=f("span",{class:"countdown"});return e.dataset.until=String(n),e.textContent=Pp(n-fe()),e}function Pp(n){if(n<=0)return"0:00:00";const e=Math.floor(n/1e3),t=Math.floor(e/86400),r=Math.floor(e%86400/3600),s=String(Math.floor(e%3600/60)).padStart(2,"0"),i=String(e%60).padStart(2,"0");return t>0?`${t} T ${r}:${s}:${i}`:`${r}:${s}:${i}`}function QI(n){const e=n.days||{};for(let t=tt;t>=1;t--){const r=e[t];if(r&&r.pun&&!r.punDone)return{day:t,e:r}}return null}function JI(n,e){const t=Rn(e),r=od(e),s=n.days||{},i=n.joinedDay||1,a=[];if(t<1)return a.push(f("div",{class:"action-info"},f("div",{class:"eyebrow"},"Start am 31.10. um 22:00"),f("div",{class:"big-count"},bo(vy())))),a;r&&r>=i&&!s[r]&&a.push(f("button",{class:"btn btn-gold btn-huge pulse",onclick:()=>Ap(r)},"Heute abhaken",f("small",{},`Tag ${r} · bis 23:59`)));const c=QI(n);if(c){const u=e>=fo(c.day)||c.e.pen;c.e.s==="open"&&!u?a.push(f("div",{class:"alert alert-orange"},f("div",{},f("b",{},`Tag ${c.day} vergessen?`),` Mach es bis ${br(fo(c.day))} Uhr wieder gut: Bestrafung filmen, dann zählt der Tag als geschafft.`),f("div",{class:"pun-mini"},`Bestrafung: ${c.e.punText}`),f("button",{class:"btn btn-orange",onclick:()=>wr(c.day,c.e.punText)},"🎥 Wiedergutmachen"))):u?a.push(f("div",{class:"alert alert-red"},f("div",{},f("b",{},"Bestrafung offen ❗")," Frist verpasst (−50 % Ring). Nachholen entfernt den roten Hinweis."),f("div",{class:"pun-mini"},`Bestrafung: ${c.e.punText}`),f("button",{class:"btn btn-red",onclick:()=>wr(c.day,c.e.punText)},"🎥 Bestrafung nachholen"))):a.push(f("div",{class:"alert alert-purple"},f("div",{},f("b",{},"Bestrafung machen")," – Frist: ",bo(fo(c.day))),f("div",{class:"pun-mini"},c.e.punText),f("button",{class:"btn btn-gold",onclick:()=>wr(c.day,c.e.punText)},"🎥 Bestrafung machen")))}if(r&&s[r]){const u=s[r].s==="done";a.push(f("div",{class:`done-note ${u?"ok":"no"}`},u?`Tag ${r} abgehakt ✅`:`Tag ${r}: nicht geschafft ❌`))}if((!a.length||!r&&t<=tt)&&!(t>tt)){if(!r){const u=sd(e),d=e<ho(u)?ho(u):ho(u+1);a.push(f("div",{class:"action-info"},f("div",{class:"eyebrow"},`Abhaken ab ${ad(d)} Uhr`),f("div",{class:"big-count"},bo(d))))}}return a}function YI(){const n=Rp();return f("section",{class:"card final"},f("h2",{class:"title"},"🏆 Endstand"),f("div",{class:"list"},n.map((e,t)=>f("a",{class:"list-row",href:`#/u/${e.id}`},f("span",{class:`place place-${t+1}`},String(t+1)),$t(e,36),f("span",{class:"grow"},e.name),Hr(e.rankIndex,30),f("span",{class:"muted small"},`${e.doneCount}/${tt}`)))))}function XI(n,e){const t=ci(n,e),r=ye[t.rankIndex];return f("section",{class:"card status"},f("div",{class:"status-top"},f("a",{href:"#/me"},ic(t.rankIndex,t.pct,132,n.id)),f("div",{class:"status-info"},f("div",{class:"status-rank"},r.name),f("div",{class:"status-ring-text"},Sp(t)),t.full&&!t.final?f("div",{class:"tag tag-gold"},"⏳ Aufstieg wartet auf Bestätigung"):null,f("div",{class:"status-stats"},f("span",{class:"stat-chip"},"🔥 ",f("b",{},String(n.streak||0))," Streak"),f("span",{class:"stat-chip"},"💜 ",f("b",{},String(n.goonies||0)))))),n.punishmentOpen?f("div",{class:"red-flag"},"❗ Bestrafung offen"):null,f("div",{class:"status-actions"},JI(n,e)))}function kp(){const n=x.me,e=fe(),t=f("div",{class:"page"});if(!n)return t;if(t.append(XI(n,e)),Rn(e)>tt&&t.append(YI()),t.append(f("h3",{class:"section-title"},"Feed")),!x.postsLoaded)t.append(f("p",{class:"muted center"},"Lädt …"));else if(!x.posts.length)t.append(f("div",{class:"card empty"},f("div",{class:"empty-ico"},"🔥"),f("p",{},Rn(e)<1?"Noch ist es ruhig. Ab dem Start erscheinen hier alle Abhaken-Posts.":"Noch keine Posts.")));else{let r=null;for(const s of x.posts)s.day!==r&&(r=s.day,t.append(f("div",{class:"day-sep"},f("span",{},`Tag ${s.day}`),f("small",{},pa(fa(s.day)))))),t.append(Ec(s));x.feedHasMore&&t.append(f("button",{class:"btn btn-grey btn-big",style:{marginTop:"6px"},onclick:s=>{s.currentTarget.disabled=!0,s.currentTarget.textContent="Lädt …",rT()}},"Ältere Posts laden"))}return t}kp.live=!0;function Cp(){const n=f("input",{type:"file",accept:"image/*",style:{display:"none"}});document.body.append(n),n.onchange=()=>{var t;const e=(t=n.files)==null?void 0:t[0];n.remove(),e&&ZI(e)},n.click()}function ZI(n){const e=new Image,t=URL.createObjectURL(n);e.onload=()=>yt(r=>{const s=Math.min(300,window.innerWidth-80),i=Math.max(s/e.width,s/e.height);let a=1,c=(s-e.width*i)/2,u=(s-e.height*i)/2;const d=f("img",{src:t,class:"crop-img",draggable:!1}),m=f("div",{class:"crop-view",style:{width:`${s}px`,height:`${s}px`}},d),g=()=>{const V=i*a;c=Math.min(0,Math.max(s-e.width*V,c)),u=Math.min(0,Math.max(s-e.height*V,u)),d.style.width=`${e.width*V}px`,d.style.transform=`translate(${c}px, ${u}px)`};g();let w=null;m.addEventListener("pointerdown",V=>{w={sx:V.clientX,sy:V.clientY,x:c,y:u},m.setPointerCapture(V.pointerId)}),m.addEventListener("pointermove",V=>{w&&(c=w.x+V.clientX-w.sx,u=w.y+V.clientY-w.sy,g())}),m.addEventListener("pointerup",()=>{w=null});const R=f("input",{type:"range",min:1,max:4,step:.01,value:1,class:"slider"});R.oninput=()=>{const V=(s/2-c)/(i*a),N=(s/2-u)/(i*a);a=Number(R.value),c=s/2-V*i*a,u=s/2-N*i*a,g()};const C=f("button",{class:"btn btn-gold btn-big"},"Speichern");return C.onclick=async()=>{Se(C,!0,"Lädt hoch …");try{const V=i*a,N=document.createElement("canvas");N.width=512,N.height=512,N.getContext("2d").drawImage(e,-c/V,-u/V,s/V,s/V,0,0,512,512);const j=await new Promise(z=>N.toBlob(z,"image/jpeg",.88)),B=await Ne("/upload/sign",{kind:"avatar"});B.mock?Y("Testmodus: Bild wird nicht hochgeladen"):(await bp(B,j),await Wf({photoURL:`https://res.cloudinary.com/${B.cloudName}/image/upload/c_fill,w_256,h_256,q_auto/${B.publicId}.jpg`}),Y("Profilbild gespeichert","success")),r()}catch(V){Se(C,!1),Y(V.message||"Fehler beim Hochladen","error")}},f("div",{class:"stack center-items"},f("h2",{class:"title"},"Bild zuschneiden"),f("p",{class:"muted center"},"Verschieben mit dem Finger, zoomen mit dem Regler."),m,R,C,f("button",{class:"btn btn-grey",onclick:r},"Abbrechen"))},{onClose:()=>URL.revokeObjectURL(t)}),e.src=t}function eb(n,e){const t=Rn(e),r=n.days||{},s=n.joinedDay||1,i=[];for(let a=1;a<=tt;a++){const c=r[a];let u="cal-future",d="kommt noch";(c==null?void 0:c.s)==="done"?(u="cal-done",d=c.repaired?"geschafft (wiedergutgemacht)":"geschafft"):(c==null?void 0:c.s)==="fail"?(u="cal-fail",d="nicht geschafft"):(c==null?void 0:c.s)==="open"?(u="cal-open",d="offen"):a<s?(u="cal-skip",d="vor dem Beitritt"):(a===t||a===t-1)&&(u="cal-now",d="läuft"),i.push(f("div",{class:`cal-tile ${u}`,title:`Tag ${a} (${pa(fa(a))}): ${d}`},f("span",{},String(a)),c!=null&&c.repaired?f("i",{},"↺"):null))}return f("div",{class:"calendar"},i)}function Qt(n){const e=x.users.get(n),t=f("div",{class:"page"});if(!e)return t.append(f("p",{class:"muted center"},x.usersLoaded?"Mitglied nicht gefunden.":"Lädt …")),t;const r=fe(),s=ci(e,r),i=n===x.uid,a=f("div",{class:"profile-ava"},$t(e,84));i&&a.append(f("button",{class:"ava-edit",title:"Profilbild ändern",onclick:Cp},"📷")),(je==null?void 0:je.uid)!==n&&(Qt.leave(),je={uid:n,posts:null},je.unsub=oT(n,d=>{je.posts=d,zf()}));const c=je.posts,u=f("div",{class:"stack"},c==null?f("p",{class:"muted center"},"Lädt …"):c.length?c.map(d=>Ec(d)):f("p",{class:"muted center"},"Noch keine Posts."));return t.append(f("section",{class:"card profile"},f("div",{class:"profile-head"},a,f("div",{},f("div",{class:"profile-name"},e.name),f("div",{class:"muted"},`@${e.username}`))),e.punishmentOpen?f("div",{class:"red-flag"},"❗ Bestrafung offen"):null,f("div",{class:"profile-badge"},ic(s.rankIndex,s.pct,190,e.id),f("div",{class:"profile-rank",style:{color:`var(--r-${ye[s.rankIndex].group})`}},ye[s.rankIndex].name),f("div",{class:"status-ring-text center"},Sp(s)),s.full&&!s.final?f("div",{class:"tag tag-gold"},"⏳ Aufstieg wartet auf Bestätigung"):null),f("div",{class:"stats"},vs("🔥",e.streak||0,"Aktuelle Streak"),vs("🏅",e.bestStreak||0,"Beste Streak"),vs("✅",e.doneCount||0,"Geschaffte Tage"),vs("💜",e.goonies||0,"Goonies")),f("h3",{class:"section-title small"},"Kalender"),eb(e,r),f("div",{class:"legend"},f("span",{class:"lg cal-done"}),"geschafft",f("span",{class:"lg cal-fail"}),"nicht geschafft",f("span",{class:"lg cal-open"}),"offen",f("span",{class:"lg cal-future"}),"kommt noch")),f("h3",{class:"section-title"},i?"Meine Posts":`Posts von ${e.name}`),u),t}Qt.live=!0;let je=null;Qt.leave=()=>{je==null||je.unsub(),je=null};function vs(n,e,t){return f("div",{class:"stat"},f("div",{class:"stat-val"},n," ",String(e)),f("div",{class:"stat-label"},t))}function Np(){const n=fe(),e=f("div",{class:"page"},f("h2",{class:"page-title"},"Mitglieder")),t=Rp();return e.append(f("div",{class:"stack"},t.map((r,s)=>{const i=ci(r,n);return f("a",{class:"card member",href:`#/u/${r.id}`},f("span",{class:"place"},String(s+1)),$t(r,48),f("div",{class:"grow"},f("div",{class:"member-name"},r.name,r.id===x.uid?f("span",{class:"you"},"Du"):null),f("div",{class:"muted small"},`${ye[r.rankIndex].name} · ${i.final?"100":Zo(i.pct)} %`),f("div",{class:"muted small"},`🔥 ${r.streak||0}   ✅ ${r.doneCount||0}   💜 ${r.goonies||0}`),r.punishmentOpen?f("div",{class:"red-mini"},"❗ Bestrafung offen"):null),ic(r.rankIndex,i.pct,58,r.id))}))),e}Np.live=!0;function tb(){const n=Rn(fe())>tt,e=f("div",{class:"page"},f("h2",{class:"page-title"},n?"Ränge · Endstand":"Ränge"));e.append(f("p",{class:"muted center"},"Am Anfang geht es schnell, am Ende langsam. Wer jeden Tag schafft, ist nach 30 Tagen Gotti."));let t=0;const r=ye.map((s,i)=>{const a=[...x.users.values()].filter(u=>u.rankIndex===i),c=f("div",{class:"card rank-row",style:{"--c":ai[s.group].main}},Hr(i,58),f("div",{class:"grow"},f("div",{class:"rank-name"},s.name),f("div",{class:"muted small"},t===0?"Startrang":`nach ${t} geschafften Tagen am Stück`," · ",s.days==null?"Endrang 👑":`${s.days} ${s.days===1?"Tag":"Tage"} bis zum nächsten`),a.length?f("div",{class:"rank-members"},a.map(u=>f("a",{href:`#/u/${u.id}`,title:u.name},$t(u,30)))):null));return t+=s.days||0,c});return e.append(f("div",{class:"stack"},r.reverse())),e}function nb(){const n=f("div",{class:"page"},f("h2",{class:"page-title"},"Benachrichtigungen"));let e=0;try{e=Number(localStorage.getItem("notifSeen")||0)}catch{}x.notifs.length||n.append(f("div",{class:"card empty"},f("div",{class:"empty-ico"},"🔔"),f("p",{},"Noch nichts da."))),n.append(f("div",{class:"stack"},x.notifs.map(t=>f("a",{class:`card notif ${t.createdAt>e?"unread":""}`,href:t.link||"#/"},f("div",{class:"notif-ico"},rb[t.type]||"🔔"),f("div",{class:"grow"},f("div",{class:"notif-title"},t.title),f("div",{class:"muted small"},t.body),f("div",{class:"muted tiny"},Pi(t.createdAt,fe())))))));try{localStorage.setItem("notifSeen",String(fe()+1e3))}catch{}return n}const rb={done:"✅",fail:"❌",open:"⏳",goonie:"💜",comment:"💬",penalty:"❗",punishment:"🎥",remind:"⏰"};function sb(){let n=0;try{n=Number(localStorage.getItem("notifSeen")||0)}catch{}return x.notifs.filter(e=>e.createdAt>n).length}function ib(){const n=x.me,e=f("div",{class:"page"},f("h2",{class:"page-title"},"Einstellungen"));if(!n)return e;const t=f("input",{class:"input",value:n.name,maxLength:24}),r=f("button",{class:"btn btn-blue"},"Speichern");r.onclick=async()=>{const a=t.value.trim();if(!a)return Y("Name darf nicht leer sein","error");Se(r,!0);try{await Wf({name:a}),Y("Name gespeichert","success")}catch{Y("Speichern fehlgeschlagen","error")}Se(r,!1)};const s=wp()==="granted"&&localStorage.getItem("pushOff")!=="1",i=f("button",{class:`toggle ${s?"on":""}`,"aria-label":"Push an/aus"},f("span",{}));return i.onclick=async()=>{const a=!i.classList.contains("on");i.disabled=!0;try{a?(await Ep(),localStorage.removeItem("pushOff")):(await LI(),localStorage.setItem("pushOff","1")),i.classList.toggle("on",a),Y(a?"Push ist an":"Push ist aus","success")}catch(c){Y(c.message,"error")}i.disabled=!1},e.append(f("section",{class:"card stack"},f("h3",{class:"section-title small"},"Profilbild"),f("div",{class:"row gap"},$t(n,64),f("button",{class:"btn btn-gold",onclick:Cp},"📷 Bild auswählen"))),f("section",{class:"card stack"},f("h3",{class:"section-title small"},"Name"),t,r,f("p",{class:"muted small"},`Username: @${n.username} (kann nicht geändert werden)`)),f("section",{class:"card"},f("div",{class:"row between"},f("div",{},f("div",{class:"setting-title"},"🔔 Push-Nachrichten"),f("div",{class:"muted small"},"Erinnerungen, Posts, Goonies, Kommentare")),i),f("button",{class:"btn btn-blue btn-small",style:{marginTop:"12px",width:"100%"},onclick:async a=>{const c=a.currentTarget;Se(c,!0);try{const u=await Ne("/push/test");Y(u.tokens?"Test-Push gesendet, kommt gleich an":"Push ist auf diesem Gerät noch nicht eingeschaltet",u.tokens?"success":"error")}catch(u){Y(u.message,"error")}Se(c,!1)}},"🔔 Test-Push senden")),f("section",{class:"card stack"},f("button",{class:"btn btn-grey",onclick:()=>{localStorage.removeItem("onboarded"),location.hash="#/",location.reload()}},"📲 Anleitung: App installieren"),f("button",{class:"btn btn-red",onclick:async()=>{await rc("Abmelden?","Du kannst dich jederzeit wieder mit Username und Passwort einloggen.","Abmelden","red")&&await Hh(On)}},"Abmelden"))),e}let ph=!1,bt=null;const ob=()=>["localhost","127.0.0.1"].includes(location.hostname);function mh(n){n&&!bt?(bt=f("div",{class:"test-banner"},"🧪 Testmodus: Uhrzeit ist vorgespult"),document.body.append(bt)):!n&&bt&&(bt.remove(),bt=null),bt&&(bt.textContent=`🧪 Testmodus · App-Zeit ${br(fe())}`)}function ab(n,e){if(ph||!ob()&&!(n&&gy.includes(n.username)))return;ph=!0;const t=f("div",{class:"tp-clock"}),r=f("div",{class:"tiny"}),s=f("div",{class:"testpanel hidden"}),i=f("button",{class:"tp-fab",title:"Testmodus",onclick:()=>s.classList.toggle("hidden")},"🧪");let a=!1;const c=async g=>{if(!a){a=!0,s.classList.add("busy");try{let w=await Ne("/test/advance",g),R=w.processed||0,C=0;for(;w.pending>0&&C++<400;)r.textContent=`Arbeite Ereignisse ab … noch ${w.pending}`,w=await Ne("/test/advance",{to:w.now}),R+=w.processed||0;r.textContent=w.error?`Fehler: ${w.error}`:"",await Ln(),e(),Y(`Jetzt: ${br(w.now)} · ${R} Ereignisse`,"info")}catch(w){Y(w.message,"error")}a=!1,s.classList.remove("busy")}},u=(g,w=0)=>{const R=fe();let C=sd(R);return Jt(C,g,w)<=R&&C++,Jt(C,g,w)},d=f("input",{type:"datetime-local",class:"input"}),m=async g=>{if(await rc(g?"Alles zurücksetzen?":"Echte Zeit?",g?"Uhr zurück auf die echte Zeit und ALLE Spielstände, Posts, Kommentare und Benachrichtigungen löschen. Konten, Namen und Profilbilder bleiben.":"Uhr zurück auf die echte Zeit. Die Spieldaten bleiben (können dann aber zur echten Zeit nicht passen).",g?"Zurücksetzen":"Echte Zeit","red"))try{await Ne("/test/reset",{wipe:g}),await Ln(),e(),Y(g?"Zurückgesetzt. Spiel startet frisch.":"Echte Zeit aktiv","success")}catch(R){Y(R.message,"error")}};s.append(f("b",{},"🧪 Testmodus (deutsche Zeit)"),t,r,f("div",{class:"tp-grid"},f("button",{onclick:()=>c({by:36e5})},"+1 Std"),f("button",{onclick:()=>c({by:6*36e5})},"+6 Std"),f("button",{onclick:()=>c({by:864e5})},"+1 Tag"),f("button",{onclick:()=>c({to:u(21,0)})},"→ 21:00"),f("button",{onclick:()=>c({to:u(22,0)})},"→ 22:00"),f("button",{onclick:()=>c({to:u(23,59)})},"→ 23:59"),f("button",{onclick:()=>c({to:u(0,1)})},"→ 00:01"),f("button",{onclick:()=>c({to:u(20,59)})},"→ 20:59")),f("button",{class:"tp-wide",onclick:()=>c({to:Jt(1,21,0)})},"▶ Zum Tag 1, 21:00 (1.11.)"),f("div",{class:"row gap"},d,f("button",{onclick:()=>{if(!d.value)return;const[g,w]=d.value.split("T"),[R,C,V]=g.split("-").map(Number),[N,j]=w.split(":").map(Number);c({to:nd({year:R,month:C,day:V,hour:N,minute:j})})}},"Springen")),f("div",{class:"tp-grid2"},f("button",{onclick:()=>m(!1)},"⏪ Echte Zeit"),f("button",{class:"danger",onclick:()=>m(!0)},"🗑 Alles zurücksetzen")),f("p",{class:"tiny"},"Vorspulen gilt für alle Spieler. Zurück geht nur über „Echte Zeit“.")),setInterval(()=>{t.textContent=`${br(fe())} (${un(fe()).second}s)`},1e3),document.body.append(i,s)}const cb=180*1e3;let Vp=0;async function Rs(){Vp=Date.now();try{const n=await fetch(`./version.json?t=${Date.now()}`,{cache:"no-store"});if(!n.ok)return;const{build:e}=await n.json();if(!e||e==="1792169973809")return;if(document.querySelector(".backdrop")){setTimeout(Rs,3e4);return}location.replace(`${location.pathname}?v=${e}${location.hash}`)}catch{}}function lb(){setInterval(Rs,cb),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Date.now()-Vp>2e4&&Rs()}),setTimeout(Rs,5e3)}document.title=oi;const na=document.getElementById("app"),ub=[{hash:"#/",icon:"🏠",label:"Home"},{hash:"#/me",icon:"👤",label:"Mein Profil"},{hash:"#/members",icon:"👥",label:"Mitglieder"},{hash:"#/ranks",icon:"🏆",label:"Ränge"},{hash:"#/notifications",icon:"🔔",label:"Benachrichtigungen"},{hash:"#/settings",icon:"⚙️",label:"Einstellungen"}];function hb(){const n=location.hash||"#/",[,e,t]=n.split("/");switch(e){case"me":return{key:"me",view:()=>Qt(x.uid),leave:Qt.leave,live:!0};case"u":return{key:`u/${t}`,view:()=>Qt(t),leave:Qt.leave,live:!0};case"members":return{key:"members",view:Np,live:!0};case"ranks":return{key:"ranks",view:tb,live:!0};case"notifications":return{key:"notifications",view:nb,live:!0};case"settings":return{key:"settings",view:ib};case"post":return{key:`post/${t}`,view:()=>Lr(t),leave:Lr.leave,live:!0};default:return{key:"home",view:kp,live:!0}}}let Ge=null,Qe=null,ct=null;function db(){const n=f("nav",{class:"drawer"}),e=f("div",{class:"scrim",onclick:()=>ra(!1)}),t=f("button",{class:"icon-btn","aria-label":"Menü",onclick:()=>ra(!0)},f("span",{class:"burger"}),f("span",{class:"dot hidden"})),r=f("button",{class:"icon-btn","aria-label":"Aktualisieren",onclick:()=>Dp(r)},"⟳"),s=f("header",{class:"topbar"},t,f("a",{href:"#/",class:"brand"},oi),r),i=f("div",{class:"ptr"},"⟳");Qe=f("main",{class:"main"}),Ge=f("div",{class:"shell"},s,i,Qe,e,n),Ge.drawer=n,Ge.menuBtn=t,Ge.ptr=i,na.replaceChildren(Ge),pb(i,r)}function fb(){const n=`#/${(location.hash||"#/").split("/")[1]||""}`,e=sb();Ge.drawer.replaceChildren(f("div",{class:"drawer-head"},oi),...ub.map(t=>f("a",{class:`nav-item ${n===t.hash||t.hash==="#/"&&n==="#/"?"active":""}`,href:t.hash,onclick:()=>ra(!1)},f("span",{class:"nav-ico"},t.icon),f("span",{},t.label),t.hash==="#/notifications"&&e?f("span",{class:"count"},String(e)):null))),Ge.menuBtn.querySelector(".dot").classList.toggle("hidden",!e)}function ra(n){Ge.classList.toggle("menu-open",n)}function An(n=!1){var s;if(!Ge)return;const e=hb();ct&&ct.key!==e.key&&((s=ct.leave)==null||s.call(ct));const t=!ct||ct.key!==e.key;if(!t&&!e.live&&n!=="hard")return;const r=t?0:Qe.scrollTop;ct=e,Qe.replaceChildren(e.view()),Qe.scrollTop=r,fb()}async function Dp(n){n==null||n.classList.add("spin"),await Ln();try{await iT()}catch{}An("hard"),setTimeout(()=>n==null?void 0:n.classList.remove("spin"),500)}function pb(n,e){let t=null,r=0;Qe.addEventListener("touchstart",s=>{t=Qe.scrollTop<=0?s.touches[0].clientY:null,r=0},{passive:!0}),Qe.addEventListener("touchmove",s=>{t!=null&&(r=Math.max(0,s.touches[0].clientY-t),n.style.transform=`translateY(${Math.min(80,r*.5)}px) rotate(${r*2}deg)`,n.classList.toggle("ready",r>120))},{passive:!0}),Qe.addEventListener("touchend",()=>{t!=null&&r>120&&Dp(e),t=null,n.style.transform="",n.classList.remove("ready")})}setInterval(()=>{const n=fe();document.querySelectorAll("[data-until]").forEach(e=>{const t=Number(e.dataset.until)-n;e.textContent=Pp(t),t<=0&&!e.dataset.fired&&(e.dataset.fired="1",setTimeout(()=>An(!0),1200))})},1e3);setInterval(()=>{document.querySelectorAll("[data-ring]").forEach(n=>{const e=x.users.get(n.dataset.ring);e&&eT(n,ci(e,fe()).pct)})},15e3);let gh=0;setInterval(()=>{const n=Math.floor(fe()/6e4);n!==gh&&(gh=n,An(!0))},5e3);async function mb(){yc(),await Ln(),WE();const n=()=>{mh(Yo),nc&&x.me&&ab(x.me,()=>An(!0))};zE(n),setInterval(()=>mh(Yo),1e3),lb(),nT(()=>{x.me&&(An(!0),jI(x.me),n())}),window.addEventListener("hashchange",()=>{var e;if(location.hash==="#/checkin"){location.hash="#/";const t=od(fe());t&&x.me&&!((e=x.me.days)!=null&&e[t])&&setTimeout(()=>Ap(t),300);return}An()}),H_(On,e=>{if(qf(),Ge=null,ct=null,!e){na.replaceChildren(FI());return}const t=()=>{db(),Qe.replaceChildren(f("div",{class:"boot"},f("div",{class:"boot-flame"}))),sT(e.uid,()=>{Y("Profil nicht gefunden","error"),Hh(On)}),MI()};let r=!1;try{r=localStorage.getItem("onboarded")==="1"}catch{}r?t():na.replaceChildren(UI(t))})}mb();
