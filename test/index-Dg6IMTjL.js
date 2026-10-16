(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Tm=()=>{};var Sl={};/**
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
 */const Th=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Im=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ih={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,m=i>>2,y=(i&3)<<4|c>>4;let T=(c&15)<<2|d>>6,k=d&63;u||(k=64,a||(T=64)),r.push(t[m],t[y],t[T],t[k])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Th(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Im(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||y==null)throw new bm;const T=i<<2|c>>4;if(r.push(T),d!==64){const k=c<<4&240|d>>2;if(r.push(k),y!==64){const C=d<<6&192|y;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Am=function(n){const e=Th(n);return Ih.encodeByteArray(e,!0)},bh=function(n){return Am(n).replace(/\./g,"")},Ah=function(n){try{return Ih.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Sm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const km=()=>Sm().__FIREBASE_DEFAULTS__,Rm=()=>{if(typeof process>"u"||typeof Sl>"u")return;const n=Sl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Pm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ah(n[1]);return e&&JSON.parse(e)},la=()=>{try{return Tm()||km()||Rm()||Pm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Sh=()=>{var n;return(n=la())===null||n===void 0?void 0:n.config},Cm=n=>{var e;return(e=la())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Dm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ii(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Nm(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Om(){var n;const e=(n=la())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function xm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fm(){const n=xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Um(){return!Om()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kh(){try{return typeof indexedDB=="object"}catch{return!1}}function Rh(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function Bm(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const $m="FirebaseError";class at extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=$m,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dn.prototype.create)}}class dn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?zm(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new at(s,c,r)}}function zm(n,e){return n.replace(jm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const jm=/\{\$([^}]+)}/g;function Ar(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(kl(i)&&kl(a)){if(!Ar(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function kl(n){return n!==null&&typeof n=="object"}/**
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
 */function Ph(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function hr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function dr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function qm(n,e){const t=new Hm(n,e);return t.subscribe.bind(t)}class Hm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Km(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=oo),s.error===void 0&&(s.error=oo),s.complete===void 0&&(s.complete=oo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Km(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function oo(){}/**
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
 */function fe(n){return n&&n._delegate?n._delegate:n}class We{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qt="[DEFAULT]";/**
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
 */class Wm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Dm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Qm(e))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qt){return this.instances.has(e)}getOptions(e=Qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qt){return this.component?this.component.multipleInstances?e:Qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gm(n){return n===Qt?void 0:n}function Qm(n){return n.instantiationMode==="EAGER"}/**
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
 */class Jm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Wm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const Ym={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},Xm=K.INFO,Zm={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},eg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Zm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ua{constructor(e){this.name=e,this._logLevel=Xm,this._logHandler=eg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ym[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const tg=(n,e)=>e.some(t=>n instanceof t);let Rl,Pl;function ng(){return Rl||(Rl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rg(){return Pl||(Pl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ch=new WeakMap,Co=new WeakMap,Dh=new WeakMap,ao=new WeakMap,ha=new WeakMap;function sg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(pt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ch.set(t,n)}).catch(()=>{}),ha.set(e,n),e}function ig(n){if(Co.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Co.set(n,e)}let Do={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Co.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Dh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function og(n){Do=n(Do)}function ag(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(co(this),e,...t);return Dh.set(r,e.sort?e.sort():[e]),pt(r)}:rg().includes(n)?function(...e){return n.apply(co(this),e),pt(Ch.get(this))}:function(...e){return pt(n.apply(co(this),e))}}function cg(n){return typeof n=="function"?ag(n):(n instanceof IDBTransaction&&ig(n),tg(n,ng())?new Proxy(n,Do):n)}function pt(n){if(n instanceof IDBRequest)return sg(n);if(ao.has(n))return ao.get(n);const e=cg(n);return e!==n&&(ao.set(n,e),ha.set(e,n)),e}const co=n=>ha.get(n);function oi(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=pt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(pt(a.result),u.oldVersion,u.newVersion,pt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}function lo(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),pt(t).then(()=>{})}const lg=["get","getKey","getAll","getAllKeys","count"],ug=["put","add","delete","clear"],uo=new Map;function Cl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(uo.get(e))return uo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=ug.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||lg.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return uo.set(e,i),i}og(n=>({...n,get:(e,t,r)=>Cl(e,t)||n.get(e,t,r),has:(e,t)=>!!Cl(e,t)||n.has(e,t)}));/**
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
 */class hg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function dg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const No="@firebase/app",Dl="0.13.2";/**
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
 */const gt=new ua("@firebase/app"),fg="@firebase/app-compat",pg="@firebase/analytics-compat",mg="@firebase/analytics",gg="@firebase/app-check-compat",_g="@firebase/app-check",yg="@firebase/auth",vg="@firebase/auth-compat",wg="@firebase/database",Eg="@firebase/data-connect",Tg="@firebase/database-compat",Ig="@firebase/functions",bg="@firebase/functions-compat",Ag="@firebase/installations",Sg="@firebase/installations-compat",kg="@firebase/messaging",Rg="@firebase/messaging-compat",Pg="@firebase/performance",Cg="@firebase/performance-compat",Dg="@firebase/remote-config",Ng="@firebase/remote-config-compat",Vg="@firebase/storage",Og="@firebase/storage-compat",Lg="@firebase/firestore",Mg="@firebase/ai",xg="@firebase/firestore-compat",Fg="firebase",Ug="11.10.0";/**
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
 */const Vo="[DEFAULT]",Bg={[No]:"fire-core",[fg]:"fire-core-compat",[mg]:"fire-analytics",[pg]:"fire-analytics-compat",[_g]:"fire-app-check",[gg]:"fire-app-check-compat",[yg]:"fire-auth",[vg]:"fire-auth-compat",[wg]:"fire-rtdb",[Eg]:"fire-data-connect",[Tg]:"fire-rtdb-compat",[Ig]:"fire-fn",[bg]:"fire-fn-compat",[Ag]:"fire-iid",[Sg]:"fire-iid-compat",[kg]:"fire-fcm",[Rg]:"fire-fcm-compat",[Pg]:"fire-perf",[Cg]:"fire-perf-compat",[Dg]:"fire-rc",[Ng]:"fire-rc-compat",[Vg]:"fire-gcs",[Og]:"fire-gcs-compat",[Lg]:"fire-fst",[xg]:"fire-fst-compat",[Mg]:"fire-vertex","fire-js":"fire-js",[Fg]:"fire-js-all"};/**
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
 */const Ns=new Map,$g=new Map,Oo=new Map;function Nl(n,e){try{n.container.addComponent(e)}catch(t){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function rt(n){const e=n.name;if(Oo.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;Oo.set(e,n);for(const t of Ns.values())Nl(t,n);for(const t of $g.values())Nl(t,n);return!0}function Br(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function dt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const zg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ct=new dn("app","Firebase",zg);/**
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
 */class jg{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new We("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ct.create("app-deleted",{appName:this._name})}}/**
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
 */const ai=Ug;function Nh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vo,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Ct.create("bad-app-name",{appName:String(s)});if(t||(t=Sh()),!t)throw Ct.create("no-options");const i=Ns.get(s);if(i){if(Ar(t,i.options)&&Ar(r,i.config))return i;throw Ct.create("duplicate-app",{appName:s})}const a=new Jm(s);for(const u of Oo.values())a.addComponent(u);const c=new jg(t,r,a);return Ns.set(s,c),c}function qg(n=Vo){const e=Ns.get(n);if(!e&&n===Vo&&Sh())return Nh();if(!e)throw Ct.create("no-app",{appName:n});return e}function $e(n,e,t){var r;let s=(r=Bg[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(c.join(" "));return}rt(new We(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Hg="firebase-heartbeat-database",Kg=1,Sr="firebase-heartbeat-store";let ho=null;function Vh(){return ho||(ho=oi(Hg,Kg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Sr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ct.create("idb-open",{originalErrorMessage:n.message})})),ho}async function Wg(n){try{const t=(await Vh()).transaction(Sr),r=await t.objectStore(Sr).get(Oh(n));return await t.done,r}catch(e){if(e instanceof at)gt.warn(e.message);else{const t=Ct.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gt.warn(t.message)}}}async function Vl(n,e){try{const r=(await Vh()).transaction(Sr,"readwrite");await r.objectStore(Sr).put(e,Oh(n)),await r.done}catch(t){if(t instanceof at)gt.warn(t.message);else{const r=Ct.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gt.warn(r.message)}}}function Oh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Gg=1024,Qg=30;class Jg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Xg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ol();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Qg){const a=Zg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){gt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ol(),{heartbeatsToSend:r,unsentEntries:s}=Yg(this._heartbeatsCache.heartbeats),i=bh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return gt.warn(t),""}}}function Ol(){return new Date().toISOString().substring(0,10)}function Yg(n,e=Gg){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ll(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ll(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Xg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kh()?Rh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Wg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ll(n){return bh(JSON.stringify({version:2,heartbeats:n})).length}function Zg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function e_(n){rt(new We("platform-logger",e=>new hg(e),"PRIVATE")),rt(new We("heartbeat",e=>new Jg(e),"PRIVATE")),$e(No,Dl,n),$e(No,Dl,"esm2017"),$e("fire-js","")}e_("");function Lh(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Mh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const t_=Mh,xh=new dn("auth","Firebase",Mh());/**
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
 */const Vs=new ua("@firebase/auth");function n_(n,...e){Vs.logLevel<=K.WARN&&Vs.warn(`Auth (${ai}): ${n}`,...e)}function bs(n,...e){Vs.logLevel<=K.ERROR&&Vs.error(`Auth (${ai}): ${n}`,...e)}/**
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
 */function Nn(n,...e){throw fa(n,...e)}function da(n,...e){return fa(n,...e)}function Fh(n,e,t){const r=Object.assign(Object.assign({},t_()),{[e]:t});return new dn("auth","Firebase",r).create(e,{appName:n.name})}function An(n){return Fh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return xh.create(n,...e)}function J(n,e,...t){if(!n)throw fa(e,...t)}function ft(n){const e="INTERNAL ASSERTION FAILED: "+n;throw bs(e),new Error(e)}function Os(n,e){n||ft(e)}function r_(){return Ml()==="http:"||Ml()==="https:"}function Ml(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function s_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(r_()||Mm()||"connection"in navigator)?navigator.onLine:!0}function i_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class $r{constructor(e,t){this.shortDelay=e,this.longDelay=t,Os(t>e,"Short delay should be less than long delay!"),this.isMobile=Vm()||xm()}get(){return s_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function o_(n,e){Os(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Uh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const a_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const c_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],l_=new $r(3e4,6e4);function Bn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function fn(n,e,t,r,s={}){return Bh(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=Ph(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return Lm()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&ii(n.emulatorConfig.host)&&(d.credentials="include"),Uh.fetch()(await $h(n,n.config.apiHost,t,c),d)})}async function Bh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},a_),e);try{const s=new h_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw gs(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw gs(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw gs(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw gs(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Fh(n,m,d);Nn(n,m)}}catch(s){if(s instanceof at)throw s;Nn(n,"network-request-failed",{message:String(s)})}}async function pa(n,e,t,r,s={}){const i=await fn(n,e,t,r,s);return"mfaPendingCredential"in i&&Nn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function $h(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?o_(n.config,s):`${n.config.apiScheme}://${s}`;return c_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function u_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class h_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(da(this.auth,"network-request-failed")),l_.get())})}}function gs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=da(n,e,r);return s.customData._tokenResponse=t,s}function xl(n){return n!==void 0&&n.enterprise!==void 0}class d_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return u_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function f_(n,e){return fn(n,"GET","/v2/recaptchaConfig",Bn(n,e))}/**
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
 */async function p_(n,e){return fn(n,"POST","/v1/accounts:delete",e)}async function Ls(n,e){return fn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function _r(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function m_(n,e=!1){const t=fe(n),r=await t.getIdToken(e),s=zh(r);J(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:_r(fo(s.auth_time)),issuedAtTime:_r(fo(s.iat)),expirationTime:_r(fo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function fo(n){return Number(n)*1e3}function zh(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return bs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ah(t);return s?JSON.parse(s):(bs("Failed to decode base64 JWT payload"),null)}catch(s){return bs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Fl(n){const e=zh(n);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Lo(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof at&&g_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function g_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class __{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Mo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_r(this.lastLoginAt),this.creationTime=_r(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ms(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Lo(n,Ls(t,{idToken:r}));J(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?jh(i.providerUserInfo):[],c=v_(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),m=u?d:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Mo(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(n,y)}async function y_(n){const e=fe(n);await Ms(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function v_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function jh(n){return n.map(e=>{var{providerId:t}=e,r=Lh(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function w_(n,e){const t=await Bh(n,{},async()=>{const r=Ph({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await $h(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&ii(n.emulatorConfig.host)&&(u.credentials="include"),Uh.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function E_(n,e){return fn(n,"POST","/v2/accounts:revokeToken",Bn(n,e))}/**
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
 */class Sn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){J(e.length!==0,"internal-error");const t=Fl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await w_(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Sn;return r&&(J(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Sn,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
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
 */function bt(n,e){J(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class He{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Lh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new __(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Lo(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return m_(this,e)}reload(){return y_(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new He(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ms(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dt(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await Lo(this,p_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,d,m;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,k=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,N=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,x=(d=t.createdAt)!==null&&d!==void 0?d:void 0,O=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:$,emailVerified:H,isAnonymous:me,providerData:te,stsTokenManager:I}=t;J($&&I,e,"internal-error");const g=Sn.fromJSON(this.name,I);J(typeof $=="string",e,"internal-error"),bt(y,e.name),bt(T,e.name),J(typeof H=="boolean",e,"internal-error"),J(typeof me=="boolean",e,"internal-error"),bt(k,e.name),bt(C,e.name),bt(D,e.name),bt(N,e.name),bt(x,e.name),bt(O,e.name);const v=new He({uid:$,auth:e,email:T,emailVerified:H,displayName:y,isAnonymous:me,photoURL:C,phoneNumber:k,tenantId:D,stsTokenManager:g,createdAt:x,lastLoginAt:O});return te&&Array.isArray(te)&&(v.providerData=te.map(E=>Object.assign({},E))),N&&(v._redirectEventId=N),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Sn;s.updateFromServerResponse(t);const i=new He({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ms(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?jh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Sn;c.updateFromIdToken(r);const u=new He({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Mo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const Ul=new Map;function Jt(n){Os(n instanceof Function,"Expected a class definition");let e=Ul.get(n);return e?(Os(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ul.set(n,e),e)}/**
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
 */class qh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}qh.type="NONE";const Bl=qh;/**
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
 */function po(n,e,t){return`firebase:${n}:${e}:${t}`}class kn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=po(this.userKey,s.apiKey,i),this.fullPersistenceKey=po("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ls(this.auth,{idToken:e}).catch(()=>{});return t?He._fromGetAccountInfoResponse(this.auth,t,e):null}return He._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new kn(Jt(Bl),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Jt(Bl);const a=po(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(a);if(m){let y;if(typeof m=="string"){const T=await Ls(e,{idToken:m}).catch(()=>{});if(!T)break;y=await He._fromGetAccountInfoResponse(e,T,m)}else y=He._fromJSON(e,m);d!==i&&(c=y),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new kn(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new kn(i,e,r))}}/**
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
 */function $l(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(T_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wh(e))return"Blackberry";if(Gh(e))return"Webos";if(I_(e))return"Safari";if((e.includes("chrome/")||b_(e))&&!e.includes("edge/"))return"Chrome";if(Kh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function T_(n=xe()){return/firefox\//i.test(n)}function I_(n=xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function b_(n=xe()){return/crios\//i.test(n)}function Hh(n=xe()){return/iemobile/i.test(n)}function Kh(n=xe()){return/android/i.test(n)}function Wh(n=xe()){return/blackberry/i.test(n)}function Gh(n=xe()){return/webos/i.test(n)}function A_(n=xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function S_(){return Fm()&&document.documentMode===10}function k_(n=xe()){return A_(n)||Kh(n)||Gh(n)||Wh(n)||/windows phone/i.test(n)||Hh(n)}/**
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
 */function Qh(n,e=[]){let t;switch(n){case"Browser":t=$l(xe());break;case"Worker":t=`${$l(xe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ai}/${r}`}/**
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
 */class R_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function P_(n,e={}){return fn(n,"GET","/v2/passwordPolicy",Bn(n,e))}/**
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
 */const C_=6;class D_{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:C_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class N_{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zl(this),this.idTokenSubscription=new zl(this),this.beforeStateQueue=new R_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Jt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await kn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ls(this,{idToken:e}),r=await He._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(dt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ms(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=i_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dt(this.app))return Promise.reject(An(this));const t=e?fe(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dt(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dt(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await P_(this),t=new D_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new dn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await E_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Jt(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await kn.create(this,[Jt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Qh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&n_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ci(n){return fe(n)}class zl{constructor(e){this.auth=e,this.observer=null,this.addObserver=qm(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ma={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function V_(n){ma=n}function O_(n){return ma.loadJS(n)}function L_(){return ma.recaptchaEnterpriseScript}class M_{constructor(){this.enterprise=new x_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class x_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const F_="recaptcha-enterprise",Jh="NO_RECAPTCHA";class U_{constructor(e){this.type=F_,this.auth=ci(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{f_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new d_(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;xl(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Jh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new M_().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&xl(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=L_();u.length!==0&&(u+=c),O_(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function jl(n,e,t,r=!1,s=!1){const i=new U_(n);let a;if(s)a=Jh;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ql(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await jl(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await jl(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
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
 */function B_(n,e){const t=Br(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ar(i,e??{}))return s;Nn(s,"already-initialized")}return t.initialize({options:e})}function $_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Jt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */class z_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,t){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}async function j_(n,e){return fn(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function q_(n,e){return pa(n,"POST","/v1/accounts:signInWithPassword",Bn(n,e))}/**
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
 */async function H_(n,e){return pa(n,"POST","/v1/accounts:signInWithEmailLink",Bn(n,e))}async function K_(n,e){return pa(n,"POST","/v1/accounts:signInWithEmailLink",Bn(n,e))}/**
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
 */class kr extends z_{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new kr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new kr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ql(e,t,"signInWithPassword",q_);case"emailLink":return H_(e,{email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ql(e,r,"signUpPassword",j_);case"emailLink":return K_(e,{idToken:t,email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */function W_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function G_(n){const e=hr(dr(n)).link,t=e?hr(dr(e)).deep_link_id:null,r=hr(dr(n)).deep_link_id;return(r?hr(dr(r)).link:null)||r||t||e||n}class ga{constructor(e){var t,r,s,i,a,c;const u=hr(dr(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,m=(r=u.oobCode)!==null&&r!==void 0?r:null,y=W_((s=u.mode)!==null&&s!==void 0?s:null);J(d&&m&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=m,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.lang)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=G_(e);try{return new ga(t)}catch{return null}}}/**
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
 */class $n{constructor(){this.providerId=$n.PROVIDER_ID}static credential(e,t){return kr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ga.parseLink(t);return J(r,"argument-error"),kr._fromEmailAndCode(e,r.code,r.tenantId)}}$n.PROVIDER_ID="password";$n.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$n.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class xs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await He._fromIdTokenResponse(e,r,s),a=Hl(r);return new xs({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Hl(r);return new xs({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Hl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Fs extends at{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Fs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Fs(e,t,r,s)}}function Q_(n,e,t,r){return t._getIdTokenResponse(n).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fs._fromErrorAndOperation(n,i,e,r):i})}/**
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
 */async function J_(n,e,t=!1){if(dt(n.app))return Promise.reject(An(n));const r="signIn",s=await Q_(n,r,e),i=await xs._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Y_(n,e){return J_(ci(n),e)}/**
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
 */async function X_(n){const e=ci(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Kl(n,e,t){return dt(n.app)?Promise.reject(An(n)):Y_(fe(n),$n.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&X_(n),r})}function Z_(n,e,t,r){return fe(n).onAuthStateChanged(e,t,r)}function Yh(n){return fe(n).signOut()}const Us="__sak";/**
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
 */class Xh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Us,"1"),this.storage.removeItem(Us),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ey=1e3,ty=10;class Zh extends Xh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=k_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);S_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ty):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ey)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zh.type="LOCAL";const ny=Zh;/**
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
 */class ry extends Xh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ry.type="SESSION";/**
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
 */function sy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class li{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new li(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await sy(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}li.receivers=[];/**
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
 */function iy(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class oy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=iy("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(y){const T=y;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(T.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Wl(){return window}/**
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
 */function ed(){return typeof Wl().WorkerGlobalScope<"u"&&typeof Wl().importScripts=="function"}async function ay(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ly(){return ed()?self:null}/**
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
 */const td="firebaseLocalStorageDb",uy=1,Bs="firebaseLocalStorage",nd="fbase_key";class zr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ui(n,e){return n.transaction([Bs],e?"readwrite":"readonly").objectStore(Bs)}function hy(){const n=indexedDB.deleteDatabase(td);return new zr(n).toPromise()}function xo(){const n=indexedDB.open(td,uy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Bs,{keyPath:nd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Bs)?e(r):(r.close(),await hy(),e(await xo()))})})}async function Gl(n,e,t){const r=ui(n,!0).put({[nd]:e,value:t});return new zr(r).toPromise()}async function dy(n,e){const t=ui(n,!1).get(e),r=await new zr(t).toPromise();return r===void 0?null:r.value}function Ql(n,e){const t=ui(n,!0).delete(e);return new zr(t).toPromise()}const fy=800,py=3;class rd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>py)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ed()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=li._getInstance(ly()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ay(),!this.activeServiceWorker)return;this.sender=new oy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xo();return await Gl(e,Us,"1"),await Ql(e,Us),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>dy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ql(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ui(s,!1).getAll();return new zr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rd.type="LOCAL";const my=rd;new $r(3e4,6e4);/**
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
 */new $r(2e3,1e4);/**
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
 */new $r(3e4,6e4);/**
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
 */new $r(5e3,15e3);var Jl="@firebase/auth",Yl="1.10.8";/**
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
 */class gy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _y(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function yy(n){rt(new We("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;J(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Qh(n)},d=new N_(r,s,i,u);return $_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),rt(new We("auth-internal",e=>{const t=ci(e.getProvider("auth").getImmediate());return(r=>new gy(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),$e(Jl,Yl,_y(n)),$e(Jl,Yl,"esm2017")}/**
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
 */const vy=300;Cm("authIdTokenMaxAge");function wy(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}V_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=da("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",wy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});yy("Browser");const sd="Streak",Ey="Europe/Berlin",Rn={year:2026,month:10,day:31},st=30,id=22,od=21,Ty=21,_e=[{name:"Noob 1",group:"noob",level:1,days:1},{name:"Noob 2",group:"noob",level:2,days:1},{name:"Noob 3",group:"noob",level:3,days:1},{name:"Advanced 1",group:"advanced",level:1,days:1},{name:"Advanced 2",group:"advanced",level:2,days:1},{name:"Advanced 3",group:"advanced",level:3,days:2},{name:"Pro 1",group:"pro",level:1,days:2},{name:"Pro 2",group:"pro",level:2,days:3},{name:"Elite",group:"elite",level:0,days:4},{name:"Unreal",group:"unreal",level:0,days:6},{name:"Hacker",group:"hacker",level:0,days:8},{name:"Gotti",group:"gotti",level:0,days:null}],hi={noob:{main:"#5ad35a",dark:"#2a7a2a",light:"#b8ffb0"},advanced:{main:"#3fa9ff",dark:"#1a4f9c",light:"#bfe3ff"},pro:{main:"#a45bff",dark:"#5226a0",light:"#e2c9ff"},elite:{main:"#ff9a2e",dark:"#a8520a",light:"#ffd9a8"},unreal:{main:"#ff4fa3",dark:"#9c1858",light:"#ffc2e0"},hacker:{main:"#22e3c4",dark:"#0b7565",light:"#b5fff2"},gotti:{main:"#ffd23f",dark:"#a87a00",light:"#fff3b0"}},_s=300,ur=60,Iy=!0,by={firebase:{apiKey:"AIzaSyAIPSPnepBy37FIPCz-deNHHLicYsNgObM",authDomain:"streak-jf-test.firebaseapp.com",projectId:"streak-jf-test",messagingSenderId:"1015283528708",appId:"1:1015283528708:web:58980a496aa79aad167151"},worker:"https://streak-worker-test.janis-rohde.workers.dev"},ad=by,Ay=ad.firebase,Sy=ad.worker,cd=864e5;let mo;function ky(){return mo||(mo=new Intl.DateTimeFormat("en-GB",{timeZone:Ey,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})),mo}function pn(n){const e={};for(const t of ky().formatToParts(new Date(n)))t.type!=="literal"&&(e[t.type]=parseInt(t.value,10));return e.hour===24&&(e.hour=0),{year:e.year,month:e.month,day:e.day,hour:e.hour,minute:e.minute,second:e.second}}function Xl(n){const e=pn(n);return Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)-Math.floor(n/1e3)*1e3}function ld({year:n,month:e,day:t,hour:r=0,minute:s=0}){const i=Date.UTC(n,e-1,t,r,s);let a=i-Xl(i);const c=Xl(a);return i-c!==a&&(a=i-c),a}let _a=Date.UTC(Rn.year,Rn.month-1,Rn.day);function Ry(n){const e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(n||""));_a=e?Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3])):Date.UTC(Rn.year,Rn.month-1,Rn.day)}function ya(n){return Math.round((Date.UTC(n.year,n.month-1,n.day)-_a)/cd)}function ud(n){return ya(pn(n))}function Py(n){const e=new Date(_a+n*cd);return{year:e.getUTCFullYear(),month:e.getUTCMonth()+1,day:e.getUTCDate()}}function St(n,e,t=0){return ld({...Py(n),hour:e,minute:t})}const va=n=>St(n,id),hd=n=>va(n-1),$s=()=>hd(1);function Ot(n){const e=pn(n);return ya(e)+(e.hour>=id?1:0)}function dd(n){const e=pn(n);if(e.hour<od)return null;const t=ya(e);return t>=1&&t<=st?t:null}const go=n=>St(n,od),Cy=n=>St(n+1,0),_o=n=>St(n+1,Ty),zs=n=>String(n).padStart(2,"0");function fd(n){const e=pn(n);return`${zs(e.hour)}:${zs(e.minute)}`}function zn(n){const e=pn(n);return`${zs(e.day)}.${zs(e.month)}.`}function Rr(n){return`${zn(n)} ${fd(n)}`}const Dy=1e-9;function di(n,e){const t=n.rankIndex||0,r=_e[t],s=_e[t+1]||null,i=n.days||{},a=n.joinedDay||1;if(r.days==null)return{rankIndex:t,rank:r,next:s,pct:100,rest:0,full:!0,final:!0,provisional:0};let c=0;const u=Ot(e);u>=1&&u<=st&&u>=a&&!i[u]&&(c+=Math.min(1,Math.max(0,(e-hd(u))/864e5)));const d=u-1;d>=1&&d<=st&&d>=a&&!i[d]&&e<Cy(d)&&(c+=1);const m=(n.progress||0)+c,y=Math.min(1,m/r.days),T=Math.floor(y*1e3)/10;return{rankIndex:t,rank:r,next:s,pct:T,rest:Math.round((100-T)*10)/10,full:m>=r.days-Dy,final:!1,provisional:c}}function Zl(n){var e;return((e=_e[n])==null?void 0:e.name)||"?"}var Ny="firebase",Vy="11.10.0";/**
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
 */$e(Ny,Vy,"app");var eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dt,pd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,g){function v(){}v.prototype=g.prototype,I.D=g.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(E,w,b){for(var _=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)_[ye-2]=arguments[ye];return g.prototype[w].apply(E,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,v){v||(v=0);var E=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)E[w]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(w=0;16>w;++w)E[w]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=I.g[0],v=I.g[1],w=I.g[2];var b=I.g[3],_=g+(b^v&(w^b))+E[0]+3614090360&4294967295;g=v+(_<<7&4294967295|_>>>25),_=b+(w^g&(v^w))+E[1]+3905402710&4294967295,b=g+(_<<12&4294967295|_>>>20),_=w+(v^b&(g^v))+E[2]+606105819&4294967295,w=b+(_<<17&4294967295|_>>>15),_=v+(g^w&(b^g))+E[3]+3250441966&4294967295,v=w+(_<<22&4294967295|_>>>10),_=g+(b^v&(w^b))+E[4]+4118548399&4294967295,g=v+(_<<7&4294967295|_>>>25),_=b+(w^g&(v^w))+E[5]+1200080426&4294967295,b=g+(_<<12&4294967295|_>>>20),_=w+(v^b&(g^v))+E[6]+2821735955&4294967295,w=b+(_<<17&4294967295|_>>>15),_=v+(g^w&(b^g))+E[7]+4249261313&4294967295,v=w+(_<<22&4294967295|_>>>10),_=g+(b^v&(w^b))+E[8]+1770035416&4294967295,g=v+(_<<7&4294967295|_>>>25),_=b+(w^g&(v^w))+E[9]+2336552879&4294967295,b=g+(_<<12&4294967295|_>>>20),_=w+(v^b&(g^v))+E[10]+4294925233&4294967295,w=b+(_<<17&4294967295|_>>>15),_=v+(g^w&(b^g))+E[11]+2304563134&4294967295,v=w+(_<<22&4294967295|_>>>10),_=g+(b^v&(w^b))+E[12]+1804603682&4294967295,g=v+(_<<7&4294967295|_>>>25),_=b+(w^g&(v^w))+E[13]+4254626195&4294967295,b=g+(_<<12&4294967295|_>>>20),_=w+(v^b&(g^v))+E[14]+2792965006&4294967295,w=b+(_<<17&4294967295|_>>>15),_=v+(g^w&(b^g))+E[15]+1236535329&4294967295,v=w+(_<<22&4294967295|_>>>10),_=g+(w^b&(v^w))+E[1]+4129170786&4294967295,g=v+(_<<5&4294967295|_>>>27),_=b+(v^w&(g^v))+E[6]+3225465664&4294967295,b=g+(_<<9&4294967295|_>>>23),_=w+(g^v&(b^g))+E[11]+643717713&4294967295,w=b+(_<<14&4294967295|_>>>18),_=v+(b^g&(w^b))+E[0]+3921069994&4294967295,v=w+(_<<20&4294967295|_>>>12),_=g+(w^b&(v^w))+E[5]+3593408605&4294967295,g=v+(_<<5&4294967295|_>>>27),_=b+(v^w&(g^v))+E[10]+38016083&4294967295,b=g+(_<<9&4294967295|_>>>23),_=w+(g^v&(b^g))+E[15]+3634488961&4294967295,w=b+(_<<14&4294967295|_>>>18),_=v+(b^g&(w^b))+E[4]+3889429448&4294967295,v=w+(_<<20&4294967295|_>>>12),_=g+(w^b&(v^w))+E[9]+568446438&4294967295,g=v+(_<<5&4294967295|_>>>27),_=b+(v^w&(g^v))+E[14]+3275163606&4294967295,b=g+(_<<9&4294967295|_>>>23),_=w+(g^v&(b^g))+E[3]+4107603335&4294967295,w=b+(_<<14&4294967295|_>>>18),_=v+(b^g&(w^b))+E[8]+1163531501&4294967295,v=w+(_<<20&4294967295|_>>>12),_=g+(w^b&(v^w))+E[13]+2850285829&4294967295,g=v+(_<<5&4294967295|_>>>27),_=b+(v^w&(g^v))+E[2]+4243563512&4294967295,b=g+(_<<9&4294967295|_>>>23),_=w+(g^v&(b^g))+E[7]+1735328473&4294967295,w=b+(_<<14&4294967295|_>>>18),_=v+(b^g&(w^b))+E[12]+2368359562&4294967295,v=w+(_<<20&4294967295|_>>>12),_=g+(v^w^b)+E[5]+4294588738&4294967295,g=v+(_<<4&4294967295|_>>>28),_=b+(g^v^w)+E[8]+2272392833&4294967295,b=g+(_<<11&4294967295|_>>>21),_=w+(b^g^v)+E[11]+1839030562&4294967295,w=b+(_<<16&4294967295|_>>>16),_=v+(w^b^g)+E[14]+4259657740&4294967295,v=w+(_<<23&4294967295|_>>>9),_=g+(v^w^b)+E[1]+2763975236&4294967295,g=v+(_<<4&4294967295|_>>>28),_=b+(g^v^w)+E[4]+1272893353&4294967295,b=g+(_<<11&4294967295|_>>>21),_=w+(b^g^v)+E[7]+4139469664&4294967295,w=b+(_<<16&4294967295|_>>>16),_=v+(w^b^g)+E[10]+3200236656&4294967295,v=w+(_<<23&4294967295|_>>>9),_=g+(v^w^b)+E[13]+681279174&4294967295,g=v+(_<<4&4294967295|_>>>28),_=b+(g^v^w)+E[0]+3936430074&4294967295,b=g+(_<<11&4294967295|_>>>21),_=w+(b^g^v)+E[3]+3572445317&4294967295,w=b+(_<<16&4294967295|_>>>16),_=v+(w^b^g)+E[6]+76029189&4294967295,v=w+(_<<23&4294967295|_>>>9),_=g+(v^w^b)+E[9]+3654602809&4294967295,g=v+(_<<4&4294967295|_>>>28),_=b+(g^v^w)+E[12]+3873151461&4294967295,b=g+(_<<11&4294967295|_>>>21),_=w+(b^g^v)+E[15]+530742520&4294967295,w=b+(_<<16&4294967295|_>>>16),_=v+(w^b^g)+E[2]+3299628645&4294967295,v=w+(_<<23&4294967295|_>>>9),_=g+(w^(v|~b))+E[0]+4096336452&4294967295,g=v+(_<<6&4294967295|_>>>26),_=b+(v^(g|~w))+E[7]+1126891415&4294967295,b=g+(_<<10&4294967295|_>>>22),_=w+(g^(b|~v))+E[14]+2878612391&4294967295,w=b+(_<<15&4294967295|_>>>17),_=v+(b^(w|~g))+E[5]+4237533241&4294967295,v=w+(_<<21&4294967295|_>>>11),_=g+(w^(v|~b))+E[12]+1700485571&4294967295,g=v+(_<<6&4294967295|_>>>26),_=b+(v^(g|~w))+E[3]+2399980690&4294967295,b=g+(_<<10&4294967295|_>>>22),_=w+(g^(b|~v))+E[10]+4293915773&4294967295,w=b+(_<<15&4294967295|_>>>17),_=v+(b^(w|~g))+E[1]+2240044497&4294967295,v=w+(_<<21&4294967295|_>>>11),_=g+(w^(v|~b))+E[8]+1873313359&4294967295,g=v+(_<<6&4294967295|_>>>26),_=b+(v^(g|~w))+E[15]+4264355552&4294967295,b=g+(_<<10&4294967295|_>>>22),_=w+(g^(b|~v))+E[6]+2734768916&4294967295,w=b+(_<<15&4294967295|_>>>17),_=v+(b^(w|~g))+E[13]+1309151649&4294967295,v=w+(_<<21&4294967295|_>>>11),_=g+(w^(v|~b))+E[4]+4149444226&4294967295,g=v+(_<<6&4294967295|_>>>26),_=b+(v^(g|~w))+E[11]+3174756917&4294967295,b=g+(_<<10&4294967295|_>>>22),_=w+(g^(b|~v))+E[2]+718787259&4294967295,w=b+(_<<15&4294967295|_>>>17),_=v+(b^(w|~g))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(w+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+w&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var v=g-this.blockSize,E=this.B,w=this.h,b=0;b<g;){if(w==0)for(;b<=v;)s(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<g;)if(E[w++]=I.charCodeAt(b++),w==this.blockSize){s(this,E),w=0;break}}else for(;b<g;)if(E[w++]=I[b++],w==this.blockSize){s(this,E),w=0;break}}this.h=w,this.o+=g},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var v=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=v&255,v/=256;for(this.u(I),I=Array(16),g=v=0;4>g;++g)for(var E=0;32>E;E+=8)I[v++]=this.g[g]>>>E&255;return I};function i(I,g){var v=c;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=g(I)}function a(I,g){this.h=g;for(var v=[],E=!0,w=I.length-1;0<=w;w--){var b=I[w]|0;E&&b==g||(v[w]=b,E=!1)}this.g=v}var c={};function u(I){return-128<=I&&128>I?i(I,function(g){return new a([g|0],0>g?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return y;if(0>I)return N(d(-I));for(var g=[],v=1,E=0;I>=v;E++)g[E]=I/v|0,v*=4294967296;return new a(g,0)}function m(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return N(m(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(g,8)),E=y,w=0;w<I.length;w+=8){var b=Math.min(8,I.length-w),_=parseInt(I.substring(w,w+b),g);8>b?(b=d(Math.pow(g,b)),E=E.j(b).add(d(_))):(E=E.j(v),E=E.add(d(_)))}return E}var y=u(0),T=u(1),k=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-N(this).m();for(var I=0,g=1,v=0;v<this.g.length;v++){var E=this.i(v);I+=(0<=E?E:4294967296+E)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(D(this))return"-"+N(this).toString(I);for(var g=d(Math.pow(I,6)),v=this,E="";;){var w=H(v,g).g;v=x(v,w.j(g));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=w,C(v))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function D(I){return I.h==-1}n.l=function(I){return I=x(this,I),D(I)?-1:C(I)?0:1};function N(I){for(var g=I.g.length,v=[],E=0;E<g;E++)v[E]=~I.g[E];return new a(v,~I.h).add(T)}n.abs=function(){return D(this)?N(this):this},n.add=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],E=0,w=0;w<=g;w++){var b=E+(this.i(w)&65535)+(I.i(w)&65535),_=(b>>>16)+(this.i(w)>>>16)+(I.i(w)>>>16);E=_>>>16,b&=65535,_&=65535,v[w]=_<<16|b}return new a(v,v[v.length-1]&-2147483648?-1:0)};function x(I,g){return I.add(N(g))}n.j=function(I){if(C(this)||C(I))return y;if(D(this))return D(I)?N(this).j(N(I)):N(N(this).j(I));if(D(I))return N(this.j(N(I)));if(0>this.l(k)&&0>I.l(k))return d(this.m()*I.m());for(var g=this.g.length+I.g.length,v=[],E=0;E<2*g;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var w=0;w<I.g.length;w++){var b=this.i(E)>>>16,_=this.i(E)&65535,ye=I.i(w)>>>16,qt=I.i(w)&65535;v[2*E+2*w]+=_*qt,O(v,2*E+2*w),v[2*E+2*w+1]+=b*qt,O(v,2*E+2*w+1),v[2*E+2*w+1]+=_*ye,O(v,2*E+2*w+1),v[2*E+2*w+2]+=b*ye,O(v,2*E+2*w+2)}for(E=0;E<g;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=g;E<2*g;E++)v[E]=0;return new a(v,0)};function O(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function $(I,g){this.g=I,this.h=g}function H(I,g){if(C(g))throw Error("division by zero");if(C(I))return new $(y,y);if(D(I))return g=H(N(I),g),new $(N(g.g),N(g.h));if(D(g))return g=H(I,N(g)),new $(N(g.g),g.h);if(30<I.g.length){if(D(I)||D(g))throw Error("slowDivide_ only works with positive integers.");for(var v=T,E=g;0>=E.l(I);)v=me(v),E=me(E);var w=te(v,1),b=te(E,1);for(E=te(E,2),v=te(v,2);!C(E);){var _=b.add(E);0>=_.l(I)&&(w=w.add(v),b=_),E=te(E,1),v=te(v,1)}return g=x(I,w.j(g)),new $(w,g)}for(w=y;0<=I.l(g);){for(v=Math.max(1,Math.floor(I.m()/g.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=d(v),_=b.j(g);D(_)||0<_.l(I);)v-=E,b=d(v),_=b.j(g);C(b)&&(b=T),w=w.add(b),I=x(I,_)}return new $(w,I)}n.A=function(I){return H(this,I).h},n.and=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)&I.i(E);return new a(v,this.h&I.h)},n.or=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)|I.i(E);return new a(v,this.h|I.h)},n.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)^I.i(E);return new a(v,this.h^I.h)};function me(I){for(var g=I.g.length+1,v=[],E=0;E<g;E++)v[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(v,I.h)}function te(I,g){var v=g>>5;g%=32;for(var E=I.g.length-v,w=[],b=0;b<E;b++)w[b]=0<g?I.i(b+v)>>>g|I.i(b+v+1)<<32-g:I.i(b+v);return new a(w,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,pd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Dt=a}).apply(typeof eu<"u"?eu:typeof self<"u"?self:typeof window<"u"?window:{});var ys=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var md,fr,gd,As,Fo,_d,yd,vd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ys=="object"&&ys];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var A=o[p];if(!(A in h))break e;h=h[A]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,p=!1,A={next:function(){if(!p&&h<o.length){var S=h++;return{value:l(S,o[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function m(o,l,h){return o.call.apply(o.bind,arguments)}function y(o,l,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,p),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function T(o,l,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,T.apply(null,arguments)}function k(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function C(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,A,S){for(var V=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)V[Z-2]=arguments[Z];return l.prototype[A].apply(p,V)}}function D(o){const l=o.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function N(o,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const A=o.length||0,S=p.length||0;o.length=A+S;for(let V=0;V<S;V++)o[A+V]=p[V]}else o.push(p)}}class x{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function O(o){return/^[\s\xa0]*$/.test(o)}function $(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var me=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function te(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function I(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function g(o){const l={};for(const h in o)l[h]=o[h];return l}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let h,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(h in p)o[h]=p[h];for(let S=0;S<v.length;S++)h=v[S],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function w(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function b(o){c.setTimeout(()=>{throw o},0)}function _(){var o=Mi;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class ye{constructor(){this.h=this.g=null}add(l,h){const p=qt.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var qt=new x(()=>new $p,o=>o.reset());class $p{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Gn,Qn=!1,Mi=new ye,Sc=()=>{const o=c.Promise.resolve(void 0);Gn=()=>{o.then(zp)}};var zp=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){b(h)}var l=qt;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Qn=!1};function wt(){this.s=this.s,this.C=this.C}wt.prototype.s=!1,wt.prototype.ma=function(){this.s||(this.s=!0,this.N())},wt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var jp=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o})();function Jn(o,l){if(Ie.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(me){e:{try{H(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:qp[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Jn.aa.h.call(this)}}C(Jn,Ie);var qp={2:"touch",3:"pen",4:"mouse"};Jn.prototype.h=function(){Jn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Yr="closure_listenable_"+(1e6*Math.random()|0),Hp=0;function Kp(o,l,h,p,A){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=A,this.key=++Hp,this.da=this.fa=!1}function Xr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Zr(o){this.src=o,this.g={},this.h=0}Zr.prototype.add=function(o,l,h,p,A){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var V=Fi(o,l,p,A);return-1<V?(l=o[V],h||(l.fa=!1)):(l=new Kp(l,this.src,S,!!p,A),l.fa=h,o.push(l)),l};function xi(o,l){var h=l.type;if(h in o.g){var p=o.g[h],A=Array.prototype.indexOf.call(p,l,void 0),S;(S=0<=A)&&Array.prototype.splice.call(p,A,1),S&&(Xr(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Fi(o,l,h,p){for(var A=0;A<o.length;++A){var S=o[A];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==p)return A}return-1}var Ui="closure_lm_"+(1e6*Math.random()|0),Bi={};function kc(o,l,h,p,A){if(Array.isArray(l)){for(var S=0;S<l.length;S++)kc(o,l[S],h,p,A);return null}return h=Cc(h),o&&o[Yr]?o.K(l,h,d(p)?!!p.capture:!1,A):Wp(o,l,h,!1,p,A)}function Wp(o,l,h,p,A,S){if(!l)throw Error("Invalid event type");var V=d(A)?!!A.capture:!!A,Z=zi(o);if(Z||(o[Ui]=Z=new Zr(o)),h=Z.add(l,h,p,V,S),h.proxy)return h;if(p=Gp(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)jp||(A=V),A===void 0&&(A=!1),o.addEventListener(l.toString(),p,A);else if(o.attachEvent)o.attachEvent(Pc(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Gp(){function o(h){return l.call(o.src,o.listener,h)}const l=Qp;return o}function Rc(o,l,h,p,A){if(Array.isArray(l))for(var S=0;S<l.length;S++)Rc(o,l[S],h,p,A);else p=d(p)?!!p.capture:!!p,h=Cc(h),o&&o[Yr]?(o=o.i,l=String(l).toString(),l in o.g&&(S=o.g[l],h=Fi(S,h,p,A),-1<h&&(Xr(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete o.g[l],o.h--)))):o&&(o=zi(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Fi(l,h,p,A)),(h=-1<o?l[o]:null)&&$i(h))}function $i(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Yr])xi(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(Pc(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=zi(l))?(xi(h,o),h.h==0&&(h.src=null,l[Ui]=null)):Xr(o)}}}function Pc(o){return o in Bi?Bi[o]:Bi[o]="on"+o}function Qp(o,l){if(o.da)o=!0;else{l=new Jn(l,this);var h=o.listener,p=o.ha||o.src;o.fa&&$i(o),o=h.call(p,l)}return o}function zi(o){return o=o[Ui],o instanceof Zr?o:null}var ji="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cc(o){return typeof o=="function"?o:(o[ji]||(o[ji]=function(l){return o.handleEvent(l)}),o[ji])}function be(){wt.call(this),this.i=new Zr(this),this.M=this,this.F=null}C(be,wt),be.prototype[Yr]=!0,be.prototype.removeEventListener=function(o,l,h,p){Rc(this,o,l,h,p)};function De(o,l){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new Ie(l,o);else if(l instanceof Ie)l.target=l.target||o;else{var A=l;l=new Ie(p,o),E(l,A)}if(A=!0,h)for(var S=h.length-1;0<=S;S--){var V=l.g=h[S];A=es(V,p,!0,l)&&A}if(V=l.g=o,A=es(V,p,!0,l)&&A,A=es(V,p,!1,l)&&A,h)for(S=0;S<h.length;S++)V=l.g=h[S],A=es(V,p,!1,l)&&A}be.prototype.N=function(){if(be.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],p=0;p<h.length;p++)Xr(h[p]);delete o.g[l],o.h--}}this.F=null},be.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},be.prototype.L=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function es(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,S=0;S<l.length;++S){var V=l[S];if(V&&!V.da&&V.capture==h){var Z=V.listener,ve=V.ha||V.src;V.fa&&xi(o.i,V),A=Z.call(ve,p)!==!1&&A}}return A&&!p.defaultPrevented}function Dc(o,l,h){if(typeof o=="function")h&&(o=T(o,h));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Nc(o){o.g=Dc(()=>{o.g=null,o.i&&(o.i=!1,Nc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Jp extends wt{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Nc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yn(o){wt.call(this),this.h=o,this.g={}}C(Yn,wt);var Vc=[];function Oc(o){te(o.g,function(l,h){this.g.hasOwnProperty(h)&&$i(l)},o),o.g={}}Yn.prototype.N=function(){Yn.aa.N.call(this),Oc(this)},Yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qi=c.JSON.stringify,Yp=c.JSON.parse,Xp=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Hi(){}Hi.prototype.h=null;function Lc(o){return o.h||(o.h=o.i())}function Mc(){}var Xn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ki(){Ie.call(this,"d")}C(Ki,Ie);function Wi(){Ie.call(this,"c")}C(Wi,Ie);var Ht={},xc=null;function ts(){return xc=xc||new be}Ht.La="serverreachability";function Fc(o){Ie.call(this,Ht.La,o)}C(Fc,Ie);function Zn(o){const l=ts();De(l,new Fc(l))}Ht.STAT_EVENT="statevent";function Uc(o,l){Ie.call(this,Ht.STAT_EVENT,o),this.stat=l}C(Uc,Ie);function Ne(o){const l=ts();De(l,new Uc(l,o))}Ht.Ma="timingevent";function Bc(o,l){Ie.call(this,Ht.Ma,o),this.size=l}C(Bc,Ie);function er(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function tr(){this.g=!0}tr.prototype.xa=function(){this.g=!1};function Zp(o,l,h,p,A,S){o.info(function(){if(o.g)if(S)for(var V="",Z=S.split("&"),ve=0;ve<Z.length;ve++){var Y=Z[ve].split("=");if(1<Y.length){var Ae=Y[0];Y=Y[1];var Se=Ae.split("_");V=2<=Se.length&&Se[1]=="type"?V+(Ae+"="+Y+"&"):V+(Ae+"=redacted&")}}else V=null;else V=S;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+l+`
`+h+`
`+V})}function em(o,l,h,p,A,S,V){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+l+`
`+h+`
`+S+" "+V})}function _n(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+nm(o,h)+(p?" "+p:"")})}function tm(o,l){o.info(function(){return"TIMEOUT: "+l})}tr.prototype.info=function(){};function nm(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var A=p[1];if(Array.isArray(A)&&!(1>A.length)){var S=A[0];if(S!="noop"&&S!="stop"&&S!="close")for(var V=1;V<A.length;V++)A[V]=""}}}}return qi(h)}catch{return l}}var ns={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$c={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Gi;function rs(){}C(rs,Hi),rs.prototype.g=function(){return new XMLHttpRequest},rs.prototype.i=function(){return{}},Gi=new rs;function Et(o,l,h,p){this.j=o,this.i=l,this.l=h,this.R=p||1,this.U=new Yn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zc}function zc(){this.i=null,this.g="",this.h=!1}var jc={},Qi={};function Ji(o,l,h){o.L=1,o.v=as(ct(l)),o.m=h,o.P=!0,qc(o,null)}function qc(o,l){o.F=Date.now(),ss(o),o.A=ct(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),sl(h.i,"t",p),o.C=0,h=o.j.J,o.h=new zc,o.g=Tl(o.j,h?l:null,!o.m),0<o.O&&(o.M=new Jp(T(o.Y,o,o.g),o.O)),l=o.U,h=o.g,p=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(Vc[0]=A.toString()),A=Vc);for(var S=0;S<A.length;S++){var V=kc(h,A[S],p||l.handleEvent,!1,l.h||l);if(!V)break;l.g[V.key]=V}l=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Zn(),Zp(o.i,o.u,o.A,o.l,o.R,o.m)}Et.prototype.ca=function(o){o=o.target;const l=this.M;l&&lt(o)==3?l.j():this.Y(o)},Et.prototype.Y=function(o){try{if(o==this.g)e:{const Se=lt(this.g);var l=this.g.Ba();const wn=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||hl(this.g)))){this.J||Se!=4||l==7||(l==8||0>=wn?Zn(3):Zn(2)),Yi(this);var h=this.g.Z();this.X=h;t:if(Hc(this)){var p=hl(this.g);o="";var A=p.length,S=lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),nr(this);var V="";break t}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(p[l],{stream:!(S&&l==A-1)});p.length=0,this.h.g+=o,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=h==200,em(this.i,this.u,this.A,this.l,this.R,Se,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,ve=this.g;if((Z=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Z)){var Y=Z;break t}}Y=null}if(h=Y)_n(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xi(this,h);else{this.o=!1,this.s=3,Ne(12),Kt(this),nr(this);break e}}if(this.P){h=!0;let ze;for(;!this.J&&this.C<V.length;)if(ze=rm(this,V),ze==Qi){Se==4&&(this.s=4,Ne(14),h=!1),_n(this.i,this.l,null,"[Incomplete Response]");break}else if(ze==jc){this.s=4,Ne(15),_n(this.i,this.l,V,"[Invalid Chunk]"),h=!1;break}else _n(this.i,this.l,ze,null),Xi(this,ze);if(Hc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||V.length!=0||this.h.h||(this.s=1,Ne(16),h=!1),this.o=this.o&&h,!h)_n(this.i,this.l,V,"[Invalid Chunked Response]"),Kt(this),nr(this);else if(0<V.length&&!this.W){this.W=!0;var Ae=this.j;Ae.g==this&&Ae.ba&&!Ae.M&&(Ae.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),so(Ae),Ae.M=!0,Ne(11))}}else _n(this.i,this.l,V,null),Xi(this,V);Se==4&&Kt(this),this.o&&!this.J&&(Se==4?yl(this.j,this):(this.o=!1,ss(this)))}else wm(this.g),h==400&&0<V.indexOf("Unknown SID")?(this.s=3,Ne(12)):(this.s=0,Ne(13)),Kt(this),nr(this)}}}catch{}finally{}};function Hc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function rm(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?Qi:(h=Number(l.substring(h,p)),isNaN(h)?jc:(p+=1,p+h>l.length?Qi:(l=l.slice(p,p+h),o.C=p+h,l)))}Et.prototype.cancel=function(){this.J=!0,Kt(this)};function ss(o){o.S=Date.now()+o.I,Kc(o,o.I)}function Kc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=er(T(o.ba,o),l)}function Yi(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Et.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(tm(this.i,this.A),this.L!=2&&(Zn(),Ne(17)),Kt(this),this.s=2,nr(this)):Kc(this,this.S-o)};function nr(o){o.j.G==0||o.J||yl(o.j,o)}function Kt(o){Yi(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Oc(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Xi(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Zi(h.h,o))){if(!o.K&&Zi(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)fs(h),hs(h);else break e;ro(h),Ne(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=er(T(h.Za,h),6e3));if(1>=Qc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Gt(h,11)}else if((o.K||h.g==o)&&fs(h),!O(l))for(A=h.Da.g.parse(l),l=0;l<A.length;l++){let Y=A[l];if(h.T=Y[0],Y=Y[1],h.G==2)if(Y[0]=="c"){h.K=Y[1],h.ia=Y[2];const Ae=Y[3];Ae!=null&&(h.la=Ae,h.j.info("VER="+h.la));const Se=Y[4];Se!=null&&(h.Aa=Se,h.j.info("SVER="+h.Aa));const wn=Y[5];wn!=null&&typeof wn=="number"&&0<wn&&(p=1.5*wn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const ze=o.g;if(ze){const ms=ze.g?ze.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ms){var S=p.h;S.g||ms.indexOf("spdy")==-1&&ms.indexOf("quic")==-1&&ms.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(eo(S,S.h),S.h=null))}if(p.D){const io=ze.g?ze.g.getResponseHeader("X-HTTP-Session-Id"):null;io&&(p.ya=io,ne(p.I,p.D,io))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var V=o;if(p.qa=El(p,p.J?p.ia:null,p.W),V.K){Jc(p.h,V);var Z=V,ve=p.L;ve&&(Z.I=ve),Z.B&&(Yi(Z),ss(Z)),p.g=V}else gl(p);0<h.i.length&&ds(h)}else Y[0]!="stop"&&Y[0]!="close"||Gt(h,7);else h.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Gt(h,7):no(h):Y[0]!="noop"&&h.l&&h.l.ta(Y),h.v=0)}}Zn(4)}catch{}}var sm=class{constructor(o,l){this.g=o,this.map=l}};function Wc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Qc(o){return o.h?1:o.g?o.g.size:0}function Zi(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function eo(o,l){o.g?o.g.add(l):o.h=l}function Jc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Wc.prototype.cancel=function(){if(this.i=Yc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Yc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return D(o.i)}function im(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,p=0;p<h;p++)l.push(o[p]);return l}l=[],h=0;for(p in o)l[h++]=o[p];return l}function om(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const p in o)l[h++]=p;return l}}}function Xc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=om(o),p=im(o),A=p.length,S=0;S<A;S++)l.call(void 0,p[S],h&&h[S],o)}var Zc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function am(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),A=null;if(0<=p){var S=o[h].substring(0,p);A=o[h].substring(p+1)}else S=o[h];l(S,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Wt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Wt){this.h=o.h,is(this,o.j),this.o=o.o,this.g=o.g,os(this,o.s),this.l=o.l;var l=o.i,h=new ir;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),el(this,h),this.m=o.m}else o&&(l=String(o).match(Zc))?(this.h=!1,is(this,l[1]||"",!0),this.o=rr(l[2]||""),this.g=rr(l[3]||"",!0),os(this,l[4]),this.l=rr(l[5]||"",!0),el(this,l[6]||"",!0),this.m=rr(l[7]||"")):(this.h=!1,this.i=new ir(null,this.h))}Wt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(sr(l,tl,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(sr(l,tl,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(sr(h,h.charAt(0)=="/"?um:lm,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",sr(h,dm)),o.join("")};function ct(o){return new Wt(o)}function is(o,l,h){o.j=h?rr(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function os(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function el(o,l,h){l instanceof ir?(o.i=l,fm(o.i,o.h)):(h||(l=sr(l,hm)),o.i=new ir(l,o.h))}function ne(o,l,h){o.i.set(l,h)}function as(o){return ne(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function rr(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function sr(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,cm),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function cm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var tl=/[#\/\?@]/g,lm=/[#\?:]/g,um=/[#\?]/g,hm=/[#\?@]/g,dm=/#/g;function ir(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Tt(o){o.g||(o.g=new Map,o.h=0,o.i&&am(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=ir.prototype,n.add=function(o,l){Tt(this),this.i=null,o=yn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function nl(o,l){Tt(o),l=yn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function rl(o,l){return Tt(o),l=yn(o,l),o.g.has(l)}n.forEach=function(o,l){Tt(this),this.g.forEach(function(h,p){h.forEach(function(A){o.call(l,A,p,this)},this)},this)},n.na=function(){Tt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const A=o[p];for(let S=0;S<A.length;S++)h.push(l[p])}return h},n.V=function(o){Tt(this);let l=[];if(typeof o=="string")rl(this,o)&&(l=l.concat(this.g.get(yn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return Tt(this),this.i=null,o=yn(this,o),rl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function sl(o,l,h){nl(o,l),0<h.length&&(o.i=null,o.g.set(yn(o,l),D(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const S=encodeURIComponent(String(p)),V=this.V(p);for(p=0;p<V.length;p++){var A=S;V[p]!==""&&(A+="="+encodeURIComponent(String(V[p]))),o.push(A)}}return this.i=o.join("&")};function yn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function fm(o,l){l&&!o.j&&(Tt(o),o.i=null,o.g.forEach(function(h,p){var A=p.toLowerCase();p!=A&&(nl(this,p),sl(this,A,h))},o)),o.j=l}function pm(o,l){const h=new tr;if(c.Image){const p=new Image;p.onload=k(It,h,"TestLoadImage: loaded",!0,l,p),p.onerror=k(It,h,"TestLoadImage: error",!1,l,p),p.onabort=k(It,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=k(It,h,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function mm(o,l){const h=new tr,p=new AbortController,A=setTimeout(()=>{p.abort(),It(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(A),S.ok?It(h,"TestPingServer: ok",!0,l):It(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),It(h,"TestPingServer: error",!1,l)})}function It(o,l,h,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(h)}catch{}}function gm(){this.g=new Xp}function _m(o,l,h){const p=h||"";try{Xc(o,function(A,S){let V=A;d(A)&&(V=qi(A)),l.push(p+S+"="+encodeURIComponent(V))})}catch(A){throw l.push(p+"type="+encodeURIComponent("_badmap")),A}}function cs(o){this.l=o.Ub||null,this.j=o.eb||!1}C(cs,Hi),cs.prototype.g=function(){return new ls(this.l,this.j)},cs.prototype.i=(function(o){return function(){return o}})({});function ls(o,l){be.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ls,be),n=ls.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,ar(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,or(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ar(this)),this.g&&(this.readyState=3,ar(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;il(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function il(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?or(this):ar(this),this.readyState==3&&il(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,or(this))},n.Qa=function(o){this.g&&(this.response=o,or(this))},n.ga=function(){this.g&&or(this)};function or(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ar(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function ar(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ol(o){let l="";return te(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function to(o,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=ol(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ne(o,l,h))}function ie(o){be.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ie,be);var ym=/^https?$/i,vm=["POST","PUT"];n=ie.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Gi.g(),this.v=this.o?Lc(this.o):Lc(Gi),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){al(this,S);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)h.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),A=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(vm,l,void 0))||p||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,V]of h)this.g.setRequestHeader(S,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ul(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){al(this,S)}};function al(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,cl(o),us(o)}function cl(o){o.A||(o.A=!0,De(o,"complete"),De(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,De(this,"complete"),De(this,"abort"),us(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),us(this,!0)),ie.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ll(this):this.bb())},n.bb=function(){ll(this)};function ll(o){if(o.h&&typeof a<"u"&&(!o.v[1]||lt(o)!=4||o.Z()!=2)){if(o.u&&lt(o)==4)Dc(o.Ea,0,o);else if(De(o,"readystatechange"),lt(o)==4){o.h=!1;try{const V=o.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=V===0){var A=String(o.D).match(Zc)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),p=!ym.test(A?A.toLowerCase():"")}h=p}if(h)De(o,"complete"),De(o,"success");else{o.m=6;try{var S=2<lt(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",cl(o)}}finally{us(o)}}}}function us(o,l){if(o.g){ul(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||De(o,"ready");try{h.onreadystatechange=p}catch{}}}function ul(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function lt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<lt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Yp(l)}};function hl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function wm(o){const l={};o=(o.g&&2<=lt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(O(o[p]))continue;var h=w(o[p]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[A]||[];l[A]=S,S.push(h)}I(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function cr(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function dl(o){this.Aa=0,this.i=[],this.j=new tr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=cr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=cr("baseRetryDelayMs",5e3,o),this.cb=cr("retryDelaySeedMs",1e4,o),this.Wa=cr("forwardChannelMaxRetries",2,o),this.wa=cr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Wc(o&&o.concurrentRequestLimit),this.Da=new gm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=dl.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,p){Ne(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=El(this,null,this.W),ds(this)};function no(o){if(fl(o),o.G==3){var l=o.U++,h=ct(o.I);if(ne(h,"SID",o.K),ne(h,"RID",l),ne(h,"TYPE","terminate"),lr(o,h),l=new Et(o,o.j,l),l.L=2,l.v=as(ct(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=Tl(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ss(l)}wl(o)}function hs(o){o.g&&(so(o),o.g.cancel(),o.g=null)}function fl(o){hs(o),o.u&&(c.clearTimeout(o.u),o.u=null),fs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function ds(o){if(!Gc(o.h)&&!o.s){o.s=!0;var l=o.Ga;Gn||Sc(),Qn||(Gn(),Qn=!0),Mi.add(l,o),o.B=0}}function Em(o,l){return Qc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=er(T(o.Ga,o,l),vl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new Et(this,this.j,o);let S=this.o;if(this.S&&(S?(S=g(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(A.H=S,S=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=ml(this,A,l),h=ct(this.I),ne(h,"RID",o),ne(h,"CVER",22),this.D&&ne(h,"X-HTTP-Session-Id",this.D),lr(this,h),S&&(this.O?l="headers="+encodeURIComponent(String(ol(S)))+"&"+l:this.m&&to(h,this.m,S)),eo(this.h,A),this.Ua&&ne(h,"TYPE","init"),this.P?(ne(h,"$req",l),ne(h,"SID","null"),A.T=!0,Ji(A,h,null)):Ji(A,h,l),this.G=2}}else this.G==3&&(o?pl(this,o):this.i.length==0||Gc(this.h)||pl(this))};function pl(o,l){var h;l?h=l.l:h=o.U++;const p=ct(o.I);ne(p,"SID",o.K),ne(p,"RID",h),ne(p,"AID",o.T),lr(o,p),o.m&&o.o&&to(p,o.m,o.o),h=new Et(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=ml(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),eo(o.h,h),Ji(h,p,l)}function lr(o,l){o.H&&te(o.H,function(h,p){ne(l,p,h)}),o.l&&Xc({},function(h,p){ne(l,p,h)})}function ml(o,l,h){h=Math.min(o.i.length,h);var p=o.l?T(o.l.Na,o.l,o):null;e:{var A=o.i;let S=-1;for(;;){const V=["count="+h];S==-1?0<h?(S=A[0].g,V.push("ofs="+S)):S=0:V.push("ofs="+S);let Z=!0;for(let ve=0;ve<h;ve++){let Y=A[ve].g;const Ae=A[ve].map;if(Y-=S,0>Y)S=Math.max(0,A[ve].g-100),Z=!1;else try{_m(Ae,V,"req"+Y+"_")}catch{p&&p(Ae)}}if(Z){p=V.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,p}function gl(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Gn||Sc(),Qn||(Gn(),Qn=!0),Mi.add(l,o),o.v=0}}function ro(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=er(T(o.Fa,o),vl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,_l(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=er(T(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ne(10),hs(this),_l(this))};function so(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function _l(o){o.g=new Et(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=ct(o.qa);ne(l,"RID","rpc"),ne(l,"SID",o.K),ne(l,"AID",o.T),ne(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ne(l,"TO",o.ja),ne(l,"TYPE","xmlhttp"),lr(o,l),o.m&&o.o&&to(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=as(ct(l)),h.m=null,h.P=!0,qc(h,o)}n.Za=function(){this.C!=null&&(this.C=null,hs(this),ro(this),Ne(19))};function fs(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function yl(o,l){var h=null;if(o.g==l){fs(o),so(o),o.g=null;var p=2}else if(Zi(o.h,l))h=l.D,Jc(o.h,l),p=1;else return;if(o.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;p=ts(),De(p,new Bc(p,h)),ds(o)}else gl(o);else if(A=l.s,A==3||A==0&&0<l.X||!(p==1&&Em(o,l)||p==2&&ro(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),A){case 1:Gt(o,5);break;case 4:Gt(o,10);break;case 3:Gt(o,6);break;default:Gt(o,2)}}}function vl(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function Gt(o,l){if(o.j.info("Error code "+l),l==2){var h=T(o.fb,o),p=o.Xa;const A=!p;p=new Wt(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||is(p,"https"),as(p),A?pm(p.toString(),h):mm(p.toString(),h)}else Ne(2);o.G=0,o.l&&o.l.sa(l),wl(o),fl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function wl(o){if(o.G=0,o.ka=[],o.l){const l=Yc(o.h);(l.length!=0||o.i.length!=0)&&(N(o.ka,l),N(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function El(o,l,h){var p=h instanceof Wt?ct(h):new Wt(h);if(p.g!="")l&&(p.g=l+"."+p.g),os(p,p.s);else{var A=c.location;p=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var S=new Wt(null);p&&is(S,p),l&&(S.g=l),A&&os(S,A),h&&(S.l=h),p=S}return h=o.D,l=o.ya,h&&l&&ne(p,h,l),ne(p,"VER",o.la),lr(o,p),p}function Tl(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ie(new cs({eb:h})):new ie(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Il(){}n=Il.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ps(){}ps.prototype.g=function(o,l){return new Fe(o,l)};function Fe(o,l){be.call(this),this.g=new dl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!O(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!O(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new vn(this)}C(Fe,be),Fe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Fe.prototype.close=function(){no(this.g)},Fe.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=qi(o),o=h);l.i.push(new sm(l.Ya++,o)),l.G==3&&ds(l)},Fe.prototype.N=function(){this.g.l=null,delete this.j,no(this.g),delete this.g,Fe.aa.N.call(this)};function bl(o){Ki.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}C(bl,Ki);function Al(){Wi.call(this),this.status=1}C(Al,Wi);function vn(o){this.g=o}C(vn,Il),vn.prototype.ua=function(){De(this.g,"a")},vn.prototype.ta=function(o){De(this.g,new bl(o))},vn.prototype.sa=function(o){De(this.g,new Al)},vn.prototype.ra=function(){De(this.g,"b")},ps.prototype.createWebChannel=ps.prototype.g,Fe.prototype.send=Fe.prototype.o,Fe.prototype.open=Fe.prototype.m,Fe.prototype.close=Fe.prototype.close,vd=function(){return new ps},yd=function(){return ts()},_d=Ht,Fo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ns.NO_ERROR=0,ns.TIMEOUT=8,ns.HTTP_ERROR=6,As=ns,$c.COMPLETE="complete",gd=$c,Mc.EventType=Xn,Xn.OPEN="a",Xn.CLOSE="b",Xn.ERROR="c",Xn.MESSAGE="d",be.prototype.listen=be.prototype.K,fr=Mc,ie.prototype.listenOnce=ie.prototype.L,ie.prototype.getLastError=ie.prototype.Ka,ie.prototype.getLastErrorCode=ie.prototype.Ba,ie.prototype.getStatus=ie.prototype.Z,ie.prototype.getResponseJson=ie.prototype.Oa,ie.prototype.getResponseText=ie.prototype.oa,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Ha,md=ie}).apply(typeof ys<"u"?ys:typeof self<"u"?self:typeof window<"u"?window:{});const tu="@firebase/firestore",nu="4.8.0";/**
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
 */class Oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Oe.UNAUTHENTICATED=new Oe(null),Oe.GOOGLE_CREDENTIALS=new Oe("google-credentials-uid"),Oe.FIRST_PARTY=new Oe("first-party-uid"),Oe.MOCK_USER=new Oe("mock-user");/**
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
 */let jn="11.10.0";/**
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
 */const rn=new ua("@firebase/firestore");function En(){return rn.logLevel}function M(n,...e){if(rn.logLevel<=K.DEBUG){const t=e.map(wa);rn.debug(`Firestore (${jn}): ${n}`,...t)}}function _t(n,...e){if(rn.logLevel<=K.ERROR){const t=e.map(wa);rn.error(`Firestore (${jn}): ${n}`,...t)}}function sn(n,...e){if(rn.logLevel<=K.WARN){const t=e.map(wa);rn.warn(`Firestore (${jn}): ${n}`,...t)}}function wa(n){if(typeof n=="string")return n;try{/**
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
 */function B(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,wd(n,r,t)}function wd(n,e,t){let r=`FIRESTORE (${jn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw _t(r),new Error(r)}function X(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||wd(e,s,r)}function j(n,e){return n}/**
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
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends at{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Oy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ly{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Oe.UNAUTHENTICATED)))}shutdown(){}}class My{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Nt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nt,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new Oy(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new Oe(e)}}class xy{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Fy{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new xy(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Oe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ru{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Uy{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){X(this.o===void 0,3512);const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ru(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(X(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ru(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function By(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function Ed(){return new TextEncoder}/**
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
 */class Ea{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=By(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function q(n,e){return n<e?-1:n>e?1:0}function Uo(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return q(r,s);{const i=Ed(),a=$y(i.encode(su(n,t)),i.encode(su(e,t)));return a!==0?a:q(r,s)}}t+=r>65535?2:1}return q(n.length,e.length)}function su(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function $y(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return q(n[t],e[t]);return q(n.length,e.length)}function Vn(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const iu="__name__";class Je{constructor(e,t,r){t===void 0?t=0:t>e.length&&B(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&B(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Je.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Je?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Je.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return q(e.length,t.length)}static compareSegments(e,t){const r=Je.isNumericId(e),s=Je.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Je.extractNumericId(e).compare(Je.extractNumericId(t)):Uo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dt.fromString(e.substring(4,e.length-2))}}class ee extends Je{construct(e,t,r){return new ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ee(t)}static emptyPath(){return new ee([])}}const zy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends Je{construct(e,t,r){return new Ee(e,t,r)}static isValidIdentifier(e){return zy.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===iu}static keyField(){return new Ee([iu])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new L(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new L(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(t)}static emptyPath(){return new Ee([])}}/**
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
 */class F{constructor(e){this.path=e}static fromPath(e){return new F(ee.fromString(e))}static fromName(e){return new F(ee.fromString(e).popFirst(5))}static empty(){return new F(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new F(new ee(e.slice()))}}/**
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
 */function Td(n,e,t){if(!t)throw new L(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function jy(n,e,t,r){if(e===!0&&r===!0)throw new L(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ou(n){if(!F.isDocumentKey(n))throw new L(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function au(n){if(F.isDocumentKey(n))throw new L(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Id(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function fi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B(12329,{type:typeof n})}function mt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=fi(n);throw new L(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function qy(n,e){if(e<=0)throw new L(R.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function he(n,e){const t={typeString:n};return e&&(t.value=e),t}function jr(n,e){if(!Id(n))throw new L(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new L(R.INVALID_ARGUMENT,t);return!0}/**
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
 */const cu=-62135596800,lu=1e6;class re{static now(){return re.fromMillis(Date.now())}static fromDate(e){return re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*lu);return new re(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<cu)throw new L(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/lu}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:re._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(jr(e,re._jsonSchema))return new re(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-cu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}re._jsonSchemaVersion="firestore/timestamp/1.0",re._jsonSchema={type:he("string",re._jsonSchemaVersion),seconds:he("number"),nanoseconds:he("number")};/**
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
 */class z{static fromTimestamp(e){return new z(e)}static min(){return new z(new re(0,0))}static max(){return new z(new re(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Pr=-1;function Hy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new re(t+1,0):new re(t,r));return new Lt(s,F.empty(),e)}function Ky(n){return new Lt(n.readTime,n.key,Pr)}class Lt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Lt(z.min(),F.empty(),Pr)}static max(){return new Lt(z.max(),F.empty(),Pr)}}function Wy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:q(n.largestBatchId,e.largestBatchId))}/**
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
 */const Gy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function qn(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==Gy)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,r)=>{t(e)}))}static reject(e){return new P(((t,r)=>{r(e)}))}static waitFor(e){return new P(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(u=>r(u)))})),a=!0,i===s&&t()}))}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next((s=>s?P.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new P(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next((m=>{a[d]=m,++c,c===i&&r(a)}),(m=>s(m)))}}))}static doWhile(e,t){return new P(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function Jy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Hn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class pi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}pi.ue=-1;/**
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
 */const Ta=-1;function mi(n){return n==null}function js(n){return n===0&&1/n==-1/0}function Yy(n){return typeof n=="number"&&Number.isInteger(n)&&!js(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const bd="";function Xy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=uu(e)),e=Zy(n.get(t),e);return uu(e)}function Zy(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case bd:t+="";break;default:t+=i}}return t}function uu(n){return n+bd+""}/**
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
 */function hu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function $t(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ad(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class se{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vs(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vs(this.root,e,this.comparator,!1)}getReverseIterator(){return new vs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vs(this.root,e,this.comparator,!0)}}class vs{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??we.RED,this.left=s??we.EMPTY,this.right=i??we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new we(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return we.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw B(43730,{key:this.key,value:this.value});if(this.right.isRed())throw B(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw B(27949);return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw B(57766)}get value(){throw B(16141)}get color(){throw B(16727)}get left(){throw B(29726)}get right(){throw B(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class pe{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new du(this.data.getIterator())}getIteratorFrom(e){return new du(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new pe(this.comparator);return t.data=e,t}}class du{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ue{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new pe(Ee.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vn(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class Sd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Sd("Invalid base64 string: "+i):i}})(e);return new Te(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const ev=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mt(n){if(X(!!n,39018),typeof n=="string"){let e=0;const t=ev.exec(n);if(X(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xt(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
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
 */const kd="server_timestamp",Rd="__type__",Pd="__previous_value__",Cd="__local_write_time__";function Ia(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Rd])===null||t===void 0?void 0:t.stringValue)===kd}function gi(n){const e=n.mapValue.fields[Pd];return Ia(e)?gi(e):e}function Cr(n){const e=Mt(n.mapValue.fields[Cd].timestampValue);return new re(e.seconds,e.nanos)}/**
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
 */class tv{constructor(e,t,r,s,i,a,c,u,d,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m}}const qs="(default)";class Dr{constructor(e,t){this.projectId=e,this.database=t||qs}static empty(){return new Dr("","")}get isDefaultDatabase(){return this.database===qs}isEqual(e){return e instanceof Dr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Dd="__type__",nv="__max__",ws={mapValue:{}},Nd="__vector__",Hs="value";function Ft(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ia(n)?4:sv(n)?9007199254740991:rv(n)?10:11:B(28295,{value:n})}function it(n,e){if(n===e)return!0;const t=Ft(n);if(t!==Ft(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Cr(n).isEqual(Cr(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Mt(s.timestampValue),c=Mt(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return xt(s.bytesValue).isEqual(xt(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return oe(s.geoPointValue.latitude)===oe(i.geoPointValue.latitude)&&oe(s.geoPointValue.longitude)===oe(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return oe(s.integerValue)===oe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=oe(s.doubleValue),c=oe(i.doubleValue);return a===c?js(a)===js(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return Vn(n.arrayValue.values||[],e.arrayValue.values||[],it);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(hu(a)!==hu(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!it(a[u],c[u])))return!1;return!0})(n,e);default:return B(52216,{left:n})}}function Nr(n,e){return(n.values||[]).find((t=>it(t,e)))!==void 0}function On(n,e){if(n===e)return 0;const t=Ft(n),r=Ft(e);if(t!==r)return q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=oe(i.integerValue||i.doubleValue),u=oe(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return fu(n.timestampValue,e.timestampValue);case 4:return fu(Cr(n),Cr(e));case 5:return Uo(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=xt(i),u=xt(a);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const m=q(c[d],u[d]);if(m!==0)return m}return q(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=q(oe(i.latitude),oe(a.latitude));return c!==0?c:q(oe(i.longitude),oe(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return pu(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,u,d,m;const y=i.fields||{},T=a.fields||{},k=(c=y[Hs])===null||c===void 0?void 0:c.arrayValue,C=(u=T[Hs])===null||u===void 0?void 0:u.arrayValue,D=q(((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0,((m=C==null?void 0:C.values)===null||m===void 0?void 0:m.length)||0);return D!==0?D:pu(k,C)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===ws.mapValue&&a===ws.mapValue)return 0;if(i===ws.mapValue)return 1;if(a===ws.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let y=0;y<u.length&&y<m.length;++y){const T=Uo(u[y],m[y]);if(T!==0)return T;const k=On(c[u[y]],d[m[y]]);if(k!==0)return k}return q(u.length,m.length)})(n.mapValue,e.mapValue);default:throw B(23264,{le:t})}}function fu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return q(n,e);const t=Mt(n),r=Mt(e),s=q(t.seconds,r.seconds);return s!==0?s:q(t.nanos,r.nanos)}function pu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=On(t[s],r[s]);if(i)return i}return q(t.length,r.length)}function Ln(n){return Bo(n)}function Bo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Mt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return xt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return F.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Bo(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Bo(t.fields[a])}`;return s+"}"})(n.mapValue):B(61005,{value:n})}function Ss(n){switch(Ft(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gi(n);return e?16+Ss(e):16;case 5:return 2*n.stringValue.length;case 6:return xt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Ss(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return $t(r.fields,((i,a)=>{s+=i.length+Ss(a)})),s})(n.mapValue);default:throw B(13486,{value:n})}}function mu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function $o(n){return!!n&&"integerValue"in n}function ba(n){return!!n&&"arrayValue"in n}function gu(n){return!!n&&"nullValue"in n}function _u(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ks(n){return!!n&&"mapValue"in n}function rv(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Dd])===null||t===void 0?void 0:t.stringValue)===Nd}function yr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return $t(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=yr(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=yr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function sv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===nv}/**
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
 */class Me{constructor(e){this.value=e}static empty(){return new Me({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ks(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=yr(t)}setAll(e){let t=Ee.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=yr(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ks(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return it(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ks(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){$t(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Me(yr(this.value))}}function Vd(n){const e=[];return $t(n.fields,((t,r)=>{const s=new Ee([t]);if(ks(r)){const i=Vd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Ue(e)}/**
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
 */class Re{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Re(e,0,z.min(),z.min(),z.min(),Me.empty(),0)}static newFoundDocument(e,t,r,s){return new Re(e,1,t,z.min(),r,s,0)}static newNoDocument(e,t){return new Re(e,2,t,z.min(),z.min(),Me.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,z.min(),z.min(),Me.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Me.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ks{constructor(e,t){this.position=e,this.inclusive=t}}function yu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),t.key):r=On(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function vu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!it(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Vr{constructor(e,t="asc"){this.field=e,this.dir=t}}function iv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Od{}class ue extends Od{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new av(e,t,r):t==="array-contains"?new uv(e,r):t==="in"?new hv(e,r):t==="not-in"?new dv(e,r):t==="array-contains-any"?new fv(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new cv(e,r):new lv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(On(t,this.value)):t!==null&&Ft(this.value)===Ft(t)&&this.matchesComparison(On(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ge extends Od{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Ge(e,t)}matches(e){return Ld(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Ld(n){return n.op==="and"}function Md(n){return ov(n)&&Ld(n)}function ov(n){for(const e of n.filters)if(e instanceof Ge)return!1;return!0}function zo(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+Ln(n.value);if(Md(n))return n.filters.map((e=>zo(e))).join(",");{const e=n.filters.map((t=>zo(t))).join(",");return`${n.op}(${e})`}}function xd(n,e){return n instanceof ue?(function(r,s){return s instanceof ue&&r.op===s.op&&r.field.isEqual(s.field)&&it(r.value,s.value)})(n,e):n instanceof Ge?(function(r,s){return s instanceof Ge&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&xd(a,s.filters[c])),!0):!1})(n,e):void B(19439)}function Fd(n){return n instanceof ue?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ln(t.value)}`})(n):n instanceof Ge?(function(t){return t.op.toString()+" {"+t.getFilters().map(Fd).join(" ,")+"}"})(n):"Filter"}class av extends ue{constructor(e,t,r){super(e,t,r),this.key=F.fromName(r.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class cv extends ue{constructor(e,t){super(e,"in",t),this.keys=Ud("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class lv extends ue{constructor(e,t){super(e,"not-in",t),this.keys=Ud("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Ud(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>F.fromName(r.referenceValue)))}class uv extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ba(t)&&Nr(t.arrayValue,this.value)}}class hv extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Nr(this.value.arrayValue,t)}}class dv extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(Nr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Nr(this.value.arrayValue,t)}}class fv extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ba(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Nr(this.value.arrayValue,r)))}}/**
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
 */class pv{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function wu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new pv(n,e,t,r,s,i,a)}function Aa(n){const e=j(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>zo(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),mi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Ln(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Ln(r))).join(",")),e.Pe=t}return e.Pe}function Sa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!iv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!xd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!vu(n.startAt,e.startAt)&&vu(n.endAt,e.endAt)}function jo(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Kn{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function mv(n,e,t,r,s,i,a,c){return new Kn(n,e,t,r,s,i,a,c)}function ka(n){return new Kn(n)}function Eu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Bd(n){return n.collectionGroup!==null}function vr(n){const e=j(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new pe(Ee.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Vr(i,r))})),t.has(Ee.keyField().canonicalString())||e.Te.push(new Vr(Ee.keyField(),r))}return e.Te}function Ze(n){const e=j(n);return e.Ie||(e.Ie=gv(e,vr(n))),e.Ie}function gv(n,e){if(n.limitType==="F")return wu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Vr(s.field,i)}));const t=n.endAt?new Ks(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ks(n.startAt.position,n.startAt.inclusive):null;return wu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function qo(n,e){const t=n.filters.concat([e]);return new Kn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ws(n,e,t){return new Kn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function _i(n,e){return Sa(Ze(n),Ze(e))&&n.limitType===e.limitType}function $d(n){return`${Aa(Ze(n))}|lt:${n.limitType}`}function Tn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Fd(s))).join(", ")}]`),mi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Ln(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Ln(s))).join(",")),`Target(${r})`})(Ze(n))}; limitType=${n.limitType})`}function yi(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):F.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of vr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,u){const d=yu(a,c,u);return a.inclusive?d<=0:d<0})(r.startAt,vr(r),s)||r.endAt&&!(function(a,c,u){const d=yu(a,c,u);return a.inclusive?d>=0:d>0})(r.endAt,vr(r),s))})(n,e)}function _v(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function zd(n){return(e,t)=>{let r=!1;for(const s of vr(n)){const i=yv(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yv(n,e,t){const r=n.field.isKeyField()?F.comparator(e.key,t.key):(function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?On(u,d):B(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B(19790,{direction:n.dir})}}/**
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
 */class mn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){$t(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Ad(this.inner)}size(){return this.innerSize}}/**
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
 */const vv=new se(F.comparator);function yt(){return vv}const jd=new se(F.comparator);function pr(...n){let e=jd;for(const t of n)e=e.insert(t.key,t);return e}function qd(n){let e=jd;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Yt(){return wr()}function Hd(){return wr()}function wr(){return new mn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const wv=new se(F.comparator),Ev=new pe(F.comparator);function W(...n){let e=Ev;for(const t of n)e=e.add(t);return e}const Tv=new pe(q);function Iv(){return Tv}/**
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
 */function Ra(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:js(e)?"-0":e}}function Kd(n){return{integerValue:""+n}}function bv(n,e){return Yy(e)?Kd(e):Ra(n,e)}/**
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
 */class vi{constructor(){this._=void 0}}function Av(n,e,t){return n instanceof Or?(function(s,i){const a={fields:{[Rd]:{stringValue:kd},[Cd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ia(i)&&(i=gi(i)),i&&(a.fields[Pd]=i),{mapValue:a}})(t,e):n instanceof Lr?Gd(n,e):n instanceof Mr?Qd(n,e):(function(s,i){const a=Wd(s,i),c=Tu(a)+Tu(s.Ee);return $o(a)&&$o(s.Ee)?Kd(c):Ra(s.serializer,c)})(n,e)}function Sv(n,e,t){return n instanceof Lr?Gd(n,e):n instanceof Mr?Qd(n,e):t}function Wd(n,e){return n instanceof Gs?(function(r){return $o(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Or extends vi{}class Lr extends vi{constructor(e){super(),this.elements=e}}function Gd(n,e){const t=Jd(e);for(const r of n.elements)t.some((s=>it(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Mr extends vi{constructor(e){super(),this.elements=e}}function Qd(n,e){let t=Jd(e);for(const r of n.elements)t=t.filter((s=>!it(s,r)));return{arrayValue:{values:t}}}class Gs extends vi{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Tu(n){return oe(n.integerValue||n.doubleValue)}function Jd(n){return ba(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class kv{constructor(e,t){this.field=e,this.transform=t}}function Rv(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Lr&&s instanceof Lr||r instanceof Mr&&s instanceof Mr?Vn(r.elements,s.elements,it):r instanceof Gs&&s instanceof Gs?it(r.Ee,s.Ee):r instanceof Or&&s instanceof Or})(n.transform,e.transform)}class Pv{constructor(e,t){this.version=e,this.transformResults=t}}class Ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ke}static exists(e){return new Ke(void 0,e)}static updateTime(e){return new Ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Rs(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class wi{}function Yd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Pa(n.key,Ke.none()):new qr(n.key,n.data,Ke.none());{const t=n.data,r=Me.empty();let s=new pe(Ee.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new zt(n.key,r,new Ue(s.toArray()),Ke.none())}}function Cv(n,e,t){n instanceof qr?(function(s,i,a){const c=s.value.clone(),u=bu(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof zt?(function(s,i,a){if(!Rs(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=bu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Xd(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Er(n,e,t,r){return n instanceof qr?(function(i,a,c,u){if(!Rs(i.precondition,a))return c;const d=i.value.clone(),m=Au(i.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof zt?(function(i,a,c,u){if(!Rs(i.precondition,a))return c;const d=Au(i.fieldTransforms,u,a),m=a.data;return m.setAll(Xd(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((y=>y.field)))})(n,e,t,r):(function(i,a,c){return Rs(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function Dv(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Wd(r.transform,s||null);i!=null&&(t===null&&(t=Me.empty()),t.set(r.field,i))}return t||null}function Iu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Vn(r,s,((i,a)=>Rv(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class qr extends wi{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zt extends wi{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xd(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function bu(n,e,t){const r=new Map;X(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Sv(a,c,t[s]))}return r}function Au(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Av(i,a,e))}return r}class Pa extends wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Nv extends wi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Vv{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Cv(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Er(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Er(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Hd();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=Yd(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(z.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),W())}isEqual(e){return this.batchId===e.batchId&&Vn(this.mutations,e.mutations,((t,r)=>Iu(t,r)))&&Vn(this.baseMutations,e.baseMutations,((t,r)=>Iu(t,r)))}}class Ca{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){X(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return wv})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ca(e,t,r,s)}}/**
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
 */class Ov{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Lv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ce,Q;function Mv(n){switch(n){case R.OK:return B(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return B(15467,{code:n})}}function Zd(n){if(n===void 0)return _t("GRPC error has no .code"),R.UNKNOWN;switch(n){case ce.OK:return R.OK;case ce.CANCELLED:return R.CANCELLED;case ce.UNKNOWN:return R.UNKNOWN;case ce.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ce.INTERNAL:return R.INTERNAL;case ce.UNAVAILABLE:return R.UNAVAILABLE;case ce.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ce.NOT_FOUND:return R.NOT_FOUND;case ce.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ce.ABORTED:return R.ABORTED;case ce.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ce.DATA_LOSS:return R.DATA_LOSS;default:return B(39323,{code:n})}}(Q=ce||(ce={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const xv=new Dt([4294967295,4294967295],0);function Su(n){const e=Ed().encode(n),t=new pd;return t.update(e),new Uint8Array(t.digest())}function ku(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dt([t,r],0),new Dt([s,i],0)]}class Da{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new mr(`Invalid padding: ${t}`);if(r<0)throw new mr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new mr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new mr(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Dt.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Dt.fromNumber(r)));return s.compare(xv)===1&&(s=new Dt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Su(e),[r,s]=ku(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Da(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const t=Su(e),[r,s]=ku(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class mr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ei{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Hr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ei(z.min(),s,new se(q),yt(),W())}}class Hr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Hr(r,t,W(),W(),W())}}/**
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
 */class Ps{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class ef{constructor(e,t){this.targetId=e,this.De=t}}class tf{constructor(e,t,r=Te.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ru{constructor(){this.ve=0,this.Ce=Pu(),this.Fe=Te.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=W(),t=W(),r=W();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:B(38017,{changeType:i})}})),new Hr(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Pu()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Fv{constructor(e){this.We=e,this.Ge=new Map,this.ze=yt(),this.je=Es(),this.Je=Es(),this.He=new se(q)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:B(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(jo(i))if(r===0){const a=new F(i.path);this.Xe(t,a,Re.newNoDocument(a,z.min()))}else X(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const c=this._t(e),u=c?this.ut(c,e,a):1;if(u!==0){this.rt(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=xt(r).toUint8Array()}catch(u){if(u instanceof Sd)return sn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Da(a,s,i)}catch(u){return sn(u instanceof mr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&jo(c.target)){const u=new F(c.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,Re.newNoDocument(u,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=W();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((u=>{const d=this.st(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new Ei(e,t,this.He,this.ze,r);return this.ze=yt(),this.je=Es(),this.Je=Es(),this.He=new se(q),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Ru,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new pe(q),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new pe(q),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Ru),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Es(){return new se(F.comparator)}function Pu(){return new se(F.comparator)}const Uv={asc:"ASCENDING",desc:"DESCENDING"},Bv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$v={and:"AND",or:"OR"};class zv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ho(n,e){return n.useProto3Json||mi(e)?e:{value:e}}function Qs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function nf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function jv(n,e){return Qs(n,e.toTimestamp())}function et(n){return X(!!n,49232),z.fromTimestamp((function(t){const r=Mt(t);return new re(r.seconds,r.nanos)})(n))}function Na(n,e){return Ko(n,e).canonicalString()}function Ko(n,e){const t=(function(s){return new ee(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function rf(n){const e=ee.fromString(n);return X(lf(e),10190,{key:e.toString()}),e}function Wo(n,e){return Na(n.databaseId,e.path)}function yo(n,e){const t=rf(e);if(t.get(1)!==n.databaseId.projectId)throw new L(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new F(of(t))}function sf(n,e){return Na(n.databaseId,e)}function qv(n){const e=rf(n);return e.length===4?ee.emptyPath():of(e)}function Go(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function of(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Cu(n,e,t){return{name:Wo(n,e),fields:t.value.mapValue.fields}}function Hv(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:B(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(d,m){return d.useProto3Json?(X(m===void 0||typeof m=="string",58123),Te.fromBase64String(m||"")):(X(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Te.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(d){const m=d.code===void 0?R.UNKNOWN:Zd(d.code);return new L(m,d.message||"")})(a);t=new tf(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=yo(n,r.document.name),i=et(r.document.updateTime),a=r.document.createTime?et(r.document.createTime):z.min(),c=new Me({mapValue:{fields:r.document.fields}}),u=Re.newFoundDocument(s,i,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];t=new Ps(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=yo(n,r.document),i=r.readTime?et(r.readTime):z.min(),a=Re.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Ps([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=yo(n,r.document),i=r.removedTargetIds||[];t=new Ps([],i,s,null)}else{if(!("filter"in e))return B(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Lv(s,i),c=r.targetId;t=new ef(c,a)}}return t}function Kv(n,e){let t;if(e instanceof qr)t={update:Cu(n,e.key,e.value)};else if(e instanceof Pa)t={delete:Wo(n,e.key)};else if(e instanceof zt)t={update:Cu(n,e.key,e.data),updateMask:tw(e.fieldMask)};else{if(!(e instanceof Nv))return B(16599,{Rt:e.type});t={verify:Wo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof Or)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Lr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Mr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Gs)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw B(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:jv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B(27497)})(n,e.precondition)),t}function Wv(n,e){return n&&n.length>0?(X(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?et(s.updateTime):et(i);return a.isEqual(z.min())&&(a=et(i)),new Pv(a,s.transformResults||[])})(t,e)))):[]}function Gv(n,e){return{documents:[sf(n,e.path)]}}function Qv(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=sf(n,s);const i=(function(d){if(d.length!==0)return cf(Ge.create(d,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((m=>(function(T){return{field:In(T.field),direction:Xv(T.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Ho(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{Vt:t,parent:s}}function Jv(n){let e=qv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){X(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=(function(y){const T=af(y);return T instanceof Ge&&Md(T)?T.getFilters():[T]})(t.where));let a=[];t.orderBy&&(a=(function(y){return y.map((T=>(function(C){return new Vr(bn(C.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(T)))})(t.orderBy));let c=null;t.limit&&(c=(function(y){let T;return T=typeof y=="object"?y.value:y,mi(T)?null:T})(t.limit));let u=null;t.startAt&&(u=(function(y){const T=!!y.before,k=y.values||[];return new Ks(k,T)})(t.startAt));let d=null;return t.endAt&&(d=(function(y){const T=!y.before,k=y.values||[];return new Ks(k,T)})(t.endAt)),mv(e,s,a,i,c,"F",u,d)}function Yv(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function af(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=bn(t.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=bn(t.unaryFilter.field);return ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=bn(t.unaryFilter.field);return ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=bn(t.unaryFilter.field);return ue.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return B(61313);default:return B(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ue.create(bn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return B(58110);default:return B(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ge.create(t.compositeFilter.filters.map((r=>af(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B(1026)}})(t.compositeFilter.op))})(n):B(30097,{filter:n})}function Xv(n){return Uv[n]}function Zv(n){return Bv[n]}function ew(n){return $v[n]}function In(n){return{fieldPath:n.canonicalString()}}function bn(n){return Ee.fromServerFormat(n.fieldPath)}function cf(n){return n instanceof ue?(function(t){if(t.op==="=="){if(_u(t.value))return{unaryFilter:{field:In(t.field),op:"IS_NAN"}};if(gu(t.value))return{unaryFilter:{field:In(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_u(t.value))return{unaryFilter:{field:In(t.field),op:"IS_NOT_NAN"}};if(gu(t.value))return{unaryFilter:{field:In(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:In(t.field),op:Zv(t.op),value:t.value}}})(n):n instanceof Ge?(function(t){const r=t.getFilters().map((s=>cf(s)));return r.length===1?r[0]:{compositeFilter:{op:ew(t.op),filters:r}}})(n):B(54877,{filter:n})}function tw(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function lf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class kt{constructor(e,t,r,s,i=z.min(),a=z.min(),c=Te.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new kt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class nw{constructor(e){this.gt=e}}function rw(n){const e=Jv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ws(e,e.limit,"L"):e}/**
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
 */class sw{constructor(){this.Dn=new iw}addToCollectionParentIndex(e,t){return this.Dn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(Lt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(Lt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class iw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new pe(ee.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new pe(ee.comparator)).toArray()}}/**
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
 */const Du={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},uf=41943040;class Le{static withCacheSize(e){return new Le(e,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Le.DEFAULT_COLLECTION_PERCENTILE=10,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Le.DEFAULT=new Le(uf,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Le.DISABLED=new Le(-1,0,0);/**
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
 */class Mn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Mn(0)}static ur(){return new Mn(-1)}}/**
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
 */const Nu="LruGarbageCollector",hf=1048576;function Vu([n,e],[t,r]){const s=q(n,t);return s===0?q(e,r):s}class ow{constructor(e){this.Tr=e,this.buffer=new pe(Vu),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Vu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class aw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){M(Nu,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Hn(t)?M(Nu,"Ignoring IndexedDB error during garbage collection: ",t):await qn(t)}await this.Rr(3e5)}))}}class cw{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return P.resolve(pi.ue);const r=new ow(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Du)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Du):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,c,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(e,s)))).next((y=>(r=y,c=Date.now(),this.removeTargets(e,r,t)))).next((y=>(i=y,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((y=>(d=Date.now(),En()<=K.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${y} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:y}))))}}function lw(n,e){return new cw(n,e)}/**
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
 */class uw{constructor(){this.changes=new mn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class dw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Er(r.mutation,s,Ue.empty(),re.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,W()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=W()){const s=Yt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=pr();return i.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Yt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,W())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=yt();const a=wr(),c=(function(){return wr()})();return t.forEach(((u,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof zt)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),Er(m.mutation,d,m.mutation.getFieldMask(),re.now())):a.set(d.key,Ue.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((d,m)=>a.set(d,m))),t.forEach(((d,m)=>{var y;return c.set(d,new hw(m,(y=a.get(d))!==null&&y!==void 0?y:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=wr();let s=new se(((a,c)=>a-c)),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let m=r.get(u)||Ue.empty();m=c.applyToLocalView(d,m),r.set(u,m);const y=(s.get(c.batchId)||W()).add(u);s=s.insert(c.batchId,y)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,m=u.value,y=Hd();m.forEach((T=>{if(!i.has(T)){const k=Yd(t.get(T),r.get(T));k!==null&&y.set(T,k),i=i.add(T)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return P.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Bd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(Yt());let c=Pr,u=i;return a.next((d=>P.forEach(d,((m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),i.get(m)?P.resolve():this.remoteDocumentCache.getEntry(e,m).next((T=>{u=u.insert(m,T)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,u,d,W()))).next((m=>({batchId:c,changes:qd(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next((r=>{let s=pr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=pr();return this.indexManager.getCollectionParents(e,i).next((c=>P.forEach(c,(u=>{const d=(function(y,T){return new Kn(T,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next((m=>{m.forEach(((y,T)=>{a=a.insert(y,T)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Re.newInvalidDocument(m)))}));let c=pr();return a.forEach(((u,d)=>{const m=i.get(u);m!==void 0&&Er(m.mutation,d,Ue.empty(),re.now()),yi(t,d)&&(c=c.insert(u,d))})),c}))}}/**
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
 */class fw{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return P.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:et(s.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:rw(s.bundledQuery),readTime:et(s.readTime)}})(t)),P.resolve()}}/**
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
 */class pw{constructor(){this.overlays=new se(F.comparator),this.kr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Yt();return P.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=Yt(),i=t.length+1,a=new F(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new se(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=i.get(d.largestBatchId);m===null&&(m=Yt(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=Yt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=s)););return P.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Ov(t,r));let i=this.kr.get(t);i===void 0&&(i=W(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
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
 */class mw{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class Va{constructor(){this.qr=new pe(ge.Qr),this.$r=new pe(ge.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new ge(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new ge(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new F(new ee([])),r=new ge(t,e),s=new ge(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new F(new ee([])),r=new ge(t,e),s=new ge(t,e+1);let i=W();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new ge(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ge{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return F.comparator(e.key,t.key)||q(e.Hr,t.Hr)}static Ur(e,t){return q(e.Hr,t.Hr)||F.comparator(e.key,t.key)}}/**
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
 */class gw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new pe(ge.Qr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Vv(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new ge(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Ta:this.er-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ge(t,0),s=new ge(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(q);return t.forEach((s=>{const i=new ge(s,0),a=new ge(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),P.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;F.isDocumentKey(i)||(i=i.child(""));const a=new ge(new F(i),0);let c=new pe(q);return this.Yr.forEachWhile((u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.Hr)),!0)}),a),P.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){X(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return P.forEach(t.mutations,(s=>{const i=new ge(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new ge(t,0),s=this.Yr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class _w{constructor(e){this.ni=e,this.docs=(function(){return new se(F.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let r=yt();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Re.newInvalidDocument(s))})),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=yt();const a=t.path,c=new F(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Wy(Ky(m),r)<=0||(s.has(m.key)||yi(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){B(9500)}ri(e,t){return P.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new yw(this)}getSize(e){return P.resolve(this.size)}}class yw extends uw{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),P.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class vw{constructor(e){this.persistence=e,this.ii=new mn((t=>Aa(t)),Sa),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.si=0,this.oi=new Va,this.targetCount=0,this._i=Mn.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),P.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Mn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.hr(t),P.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),P.waitFor(i).next((()=>s))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.oi.containsKey(t))}}/**
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
 */class df{constructor(e,t){this.ai={},this.overlays={},this.ui=new pi(0),this.ci=!1,this.ci=!0,this.li=new mw,this.referenceDelegate=e(this),this.hi=new vw(this),this.indexManager=new sw,this.remoteDocumentCache=(function(s){return new _w(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new nw(t),this.Ti=new fw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new pw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new gw(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const s=new ww(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return P.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class ww extends Qy{constructor(e){super(),this.currentSequenceNumber=e}}class Oa{constructor(e){this.persistence=e,this.Ai=new Va,this.Ri=null}static Vi(e){return new Oa(e)}get mi(){if(this.Ri)return this.Ri;throw B(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.mi,(r=>{const s=F.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,z.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return P.or([()=>P.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Js{constructor(e,t){this.persistence=e,this.gi=new mn((r=>Xy(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=lw(this,t)}static Vi(e,t){return new Js(e,t)}Ii(){}di(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return P.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?P.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((c=>{c||(r++,i.removeEntry(a,z.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),P.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ss(e.data.value)),t}Sr(e,t,r){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class La{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=W(),s=W();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new La(e,t.fromCache,r,s)}}/**
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
 */class Ew{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Tw{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Um()?8:Jy(xe())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Ew;return this.ws(e,t,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(En()<=K.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Tn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(En()<=K.DEBUG&&M("QueryEngine","Query:",Tn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(En()<=K.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Tn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ze(t))):P.resolve())}ps(e,t){if(Eu(t))return P.resolve(null);let r=Ze(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Ws(t,null,"F"),r=Ze(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=W(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((u=>{const d=this.bs(t,c);return this.Ds(t,d,a,u.readTime)?this.ps(e,Ws(t,null,"F")):this.vs(e,d,t,u)}))))})))))}ys(e,t,r,s){return Eu(t)||s.isEqual(z.min())?P.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?P.resolve(null):(En()<=K.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Tn(t)),this.vs(e,a,t,Hy(s,Pr)).next((c=>c)))}))}bs(e,t){let r=new pe(zd(e));return t.forEach(((s,i)=>{yi(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return En()<=K.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Tn(t)),this.gs.getDocumentsMatchingQuery(e,t,Lt.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const Ma="LocalStore",Iw=3e8;class bw{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new se(q),this.Ms=new mn((i=>Aa(i)),Sa),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dw(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Aw(n,e,t,r){return new bw(n,e,t,r)}async function ff(n,e){const t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let u=W();for(const d of s){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){c.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function Sw(n,e){const t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,u,d,m){const y=d.batch,T=y.keys();let k=P.resolve();return T.forEach((C=>{k=k.next((()=>m.getEntry(u,C))).next((D=>{const N=d.docVersions.get(C);X(N!==null,48541),D.version.compareTo(N)<0&&(y.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),m.addEntry(D)))}))})),k.next((()=>c.mutationQueue.removeMutationBatch(u,y)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=W();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function pf(n){const e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function kw(n,e){const t=j(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const c=[];e.targetChanges.forEach(((m,y)=>{const T=s.get(y);if(!T)return;c.push(t.hi.removeMatchingKeys(i,m.removedDocuments,y).next((()=>t.hi.addMatchingKeys(i,m.addedDocuments,y))));let k=T.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?k=k.withResumeToken(Te.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):m.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(m.resumeToken,r)),s=s.insert(y,k),(function(D,N,x){return D.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Iw?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0})(T,k,m)&&c.push(t.hi.updateTargetData(i,k))}));let u=yt(),d=W();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))})),c.push(Rw(i,a,e.documentUpdates).next((m=>{u=m.Ls,d=m.ks}))),!r.isEqual(z.min())){const m=t.hi.getLastRemoteSnapshotVersion(i).next((y=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(m)}return P.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,d))).next((()=>u))})).then((i=>(t.Fs=s,i)))}function Rw(n,e,t){let r=W(),s=W();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=yt();return t.forEach(((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(z.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):M(Ma,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)})),{Ls:a,ks:s}}))}function Pw(n,e){const t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Ta),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Cw(n,e){const t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,P.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new kt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Qo(n,e,t){const r=j(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Hn(a))throw a;M(Ma,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Ou(n,e,t){const r=j(n);let s=z.min(),i=W();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,m){const y=j(u),T=y.Ms.get(m);return T!==void 0?P.resolve(y.Fs.get(T)):y.hi.getTargetData(d,m)})(r,a,Ze(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((u=>{i=u}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:z.min(),t?i:W()))).next((c=>(Dw(r,_v(e),c),{documents:c,qs:i})))))}function Dw(n,e,t){let r=n.xs.get(e)||z.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class Lu{constructor(){this.activeTargetIds=Iv()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Nw{constructor(){this.Fo=new Lu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Lu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Vw{xo(e){}shutdown(){}}/**
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
 */const Mu="ConnectivityMonitor";class xu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){M(Mu,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){M(Mu,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ts=null;function Jo(){return Ts===null?Ts=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ts++,"0x"+Ts.toString(16)}/**
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
 */const vo="RestConnection",Ow={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Lw{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===qs?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Jo(),c=this.Go(e,t.toUriEncodedString());M(vo,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,i);const{host:d}=new URL(c),m=ii(d);return this.jo(e,c,u,r,m).then((y=>(M(vo,`Received RPC '${e}' ${a}: `,y),y)),(y=>{throw sn(vo,`RPC '${e}' ${a} failed with error: `,y,"url: ",c,"request:",r),y}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+jn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=Ow[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Mw{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const ke="WebChannelConnection";class xw extends Lw{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=Jo();return new Promise(((c,u)=>{const d=new md;d.setWithCredentials(!0),d.listenOnce(gd.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case As.NO_ERROR:const y=d.getResponseJson();M(ke,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),c(y);break;case As.TIMEOUT:M(ke,`RPC '${e}' ${a} timed out`),u(new L(R.DEADLINE_EXCEEDED,"Request time out"));break;case As.HTTP_ERROR:const T=d.getStatus();if(M(ke,`RPC '${e}' ${a} failed with status:`,T,"response text:",d.getResponseText()),T>0){let k=d.getResponseJson();Array.isArray(k)&&(k=k[0]);const C=k==null?void 0:k.error;if(C&&C.status&&C.message){const D=(function(x){const O=x.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(O)>=0?O:R.UNKNOWN})(C.status);u(new L(D,C.message))}else u(new L(R.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new L(R.UNAVAILABLE,"Connection failed."));break;default:B(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{M(ke,`RPC '${e}' ${a} completed.`)}}));const m=JSON.stringify(s);M(ke,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",m,r,15)}))}P_(e,t,r){const s=Jo(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=vd(),c=yd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=i.join("");M(ke,`Creating RPC '${e}' stream ${s}: ${m}`,u);const y=a.createWebChannel(m,u);this.T_(y);let T=!1,k=!1;const C=new Mw({Ho:N=>{k?M(ke,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(T||(M(ke,`Opening RPC '${e}' stream ${s} transport.`),y.open(),T=!0),M(ke,`RPC '${e}' stream ${s} sending:`,N),y.send(N))},Yo:()=>y.close()}),D=(N,x,O)=>{N.listen(x,($=>{try{O($)}catch(H){setTimeout((()=>{throw H}),0)}}))};return D(y,fr.EventType.OPEN,(()=>{k||(M(ke,`RPC '${e}' stream ${s} transport opened.`),C.s_())})),D(y,fr.EventType.CLOSE,(()=>{k||(k=!0,M(ke,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(y))})),D(y,fr.EventType.ERROR,(N=>{k||(k=!0,sn(ke,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),C.__(new L(R.UNAVAILABLE,"The operation could not be completed")))})),D(y,fr.EventType.MESSAGE,(N=>{var x;if(!k){const O=N.data[0];X(!!O,16349);const $=O,H=($==null?void 0:$.error)||((x=$[0])===null||x===void 0?void 0:x.error);if(H){M(ke,`RPC '${e}' stream ${s} received error:`,H);const me=H.status;let te=(function(v){const E=ce[v];if(E!==void 0)return Zd(E)})(me),I=H.message;te===void 0&&(te=R.INTERNAL,I="Unknown error status: "+me+" with message "+H.message),k=!0,C.__(new L(te,I)),y.close()}else M(ke,`RPC '${e}' stream ${s} received:`,O),C.a_(O)}})),D(c,_d.STAT_EVENT,(N=>{N.stat===Fo.PROXY?M(ke,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Fo.NOPROXY&&M(ke,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.o_()}),0),C}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function wo(){return typeof document<"u"?document:null}/**
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
 */function Ti(n){return new zv(n,!0)}/**
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
 */class mf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Fu="PersistentStream";class gf{constructor(e,t,r,s,i,a,c,u){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new mf(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(_t(t.toString()),_t("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new L(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return M(Fu,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(M(Fu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Fw extends gf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=Hv(this.serializer,e),r=(function(i){if(!("targetChange"in i))return z.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?et(a.readTime):z.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Go(this.serializer),t.addTarget=(function(i,a){let c;const u=a.target;if(c=jo(u)?{documents:Gv(i,u)}:{query:Qv(i,u).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=nf(i,a.resumeToken);const d=Ho(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo(z.min())>0){c.readTime=Qs(i,a.snapshotVersion.toTimestamp());const d=Ho(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const r=Yv(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Go(this.serializer),t.removeTarget=e,this.k_(t)}}class Uw extends gf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Wv(e.writeResults,e.commitTime),r=et(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Go(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Kv(this.serializer,r)))};this.k_(t)}}/**
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
 */class Bw{}class $w extends Bw{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new L(R.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,Ko(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(R.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,Ko(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(R.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class zw{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(_t(t),this._a=!1):M("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const on="RemoteStore";class jw{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{gn(this)&&(M(on,"Restarting streams for network reachability change."),await(async function(u){const d=j(u);d.Ia.add(4),await Kr(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Ii(d)})(this))}))})),this.Aa=new zw(r,s)}}async function Ii(n){if(gn(n))for(const e of n.da)await e(!0)}async function Kr(n){for(const e of n.da)await e(!1)}function _f(n,e){const t=j(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Ba(t)?Ua(t):Wn(t).x_()&&Fa(t,e))}function xa(n,e){const t=j(n),r=Wn(t);t.Ta.delete(e),r.x_()&&yf(t,e),t.Ta.size===0&&(r.x_()?r.B_():gn(t)&&t.Aa.set("Unknown"))}function Fa(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Wn(n).H_(e)}function yf(n,e){n.Ra.$e(e),Wn(n).Y_(e)}function Ua(n){n.Ra=new Fv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Wn(n).start(),n.Aa.aa()}function Ba(n){return gn(n)&&!Wn(n).M_()&&n.Ta.size>0}function gn(n){return j(n).Ia.size===0}function vf(n){n.Ra=void 0}async function qw(n){n.Aa.set("Online")}async function Hw(n){n.Ta.forEach(((e,t)=>{Fa(n,e)}))}async function Kw(n,e){vf(n),Ba(n)?(n.Aa.la(e),Ua(n)):n.Aa.set("Unknown")}async function Ww(n,e,t){if(n.Aa.set("Online"),e instanceof tf&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,e)}catch(r){M(on,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ys(n,r)}else if(e instanceof Ps?n.Ra.Ye(e):e instanceof ef?n.Ra.it(e):n.Ra.et(e),!t.isEqual(z.min()))try{const r=await pf(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ta.get(d);m&&i.Ta.set(d,m.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,d)=>{const m=i.Ta.get(u);if(!m)return;i.Ta.set(u,m.withResumeToken(Te.EMPTY_BYTE_STRING,m.snapshotVersion)),yf(i,u);const y=new kt(m.target,u,d,m.sequenceNumber);Fa(i,y)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){M(on,"Failed to raise snapshot:",r),await Ys(n,r)}}async function Ys(n,e,t){if(!Hn(e))throw e;n.Ia.add(1),await Kr(n),n.Aa.set("Offline"),t||(t=()=>pf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M(on,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Ii(n)}))}function wf(n,e){return e().catch((t=>Ys(n,t,e)))}async function bi(n){const e=j(n),t=Ut(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Ta;for(;Gw(e);)try{const s=await Pw(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,Qw(e,s)}catch(s){await Ys(e,s)}Ef(e)&&Tf(e)}function Gw(n){return gn(n)&&n.Pa.length<10}function Qw(n,e){n.Pa.push(e);const t=Ut(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Ef(n){return gn(n)&&!Ut(n).M_()&&n.Pa.length>0}function Tf(n){Ut(n).start()}async function Jw(n){Ut(n).na()}async function Yw(n){const e=Ut(n);for(const t of n.Pa)e.X_(t.mutations)}async function Xw(n,e,t){const r=n.Pa.shift(),s=Ca.from(r,e,t);await wf(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await bi(n)}async function Zw(n,e){e&&Ut(n).Z_&&await(async function(r,s){if((function(a){return Mv(a)&&a!==R.ABORTED})(s.code)){const i=r.Pa.shift();Ut(r).N_(),await wf(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await bi(r)}})(n,e),Ef(n)&&Tf(n)}async function Uu(n,e){const t=j(n);t.asyncQueue.verifyOperationInProgress(),M(on,"RemoteStore received new credentials");const r=gn(t);t.Ia.add(3),await Kr(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ii(t)}async function eE(n,e){const t=j(n);e?(t.Ia.delete(2),await Ii(t)):e||(t.Ia.add(2),await Kr(t),t.Aa.set("Unknown"))}function Wn(n){return n.Va||(n.Va=(function(t,r,s){const i=j(t);return i.ia(),new Fw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:qw.bind(null,n),e_:Hw.bind(null,n),n_:Kw.bind(null,n),J_:Ww.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Ba(n)?Ua(n):n.Aa.set("Unknown")):(await n.Va.stop(),vf(n))}))),n.Va}function Ut(n){return n.ma||(n.ma=(function(t,r,s){const i=j(t);return i.ia(),new Uw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Jw.bind(null,n),n_:Zw.bind(null,n),ea:Yw.bind(null,n),ta:Xw.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await bi(n)):(await n.ma.stop(),n.Pa.length>0&&(M(on,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class $a{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Nt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new $a(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function za(n,e){if(_t("AsyncQueue",`${e}: ${n}`),Hn(n))return new L(R.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Pn{static emptySet(e){return new Pn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||F.comparator(t.key,r.key):(t,r)=>F.comparator(t.key,r.key),this.keyedMap=pr(),this.sortedSet=new se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Pn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Pn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Bu{constructor(){this.fa=new se(F.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):B(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class xn{constructor(e,t,r,s,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new xn(e,t,Pn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&_i(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class tE{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class nE{constructor(){this.queries=$u(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=j(t),i=s.queries;s.queries=$u(),i.forEach(((a,c)=>{for(const u of c.wa)u.onError(r)}))})(this,new L(R.ABORTED,"Firestore shutting down"))}}function $u(){return new mn((n=>$d(n)),_i)}async function If(n,e){const t=j(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new tE,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=za(a,`Initialization of query '${Tn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&ja(t)}async function bf(n,e){const t=j(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function rE(n,e){const t=j(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&ja(t)}function sE(n,e,t){const r=j(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function ja(n){n.Da.forEach((e=>{e.next()}))}var Yo,zu;(zu=Yo||(Yo={})).Fa="default",zu.Cache="cache";class Af{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new xn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=xn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Yo.Cache}}/**
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
 */class Sf{constructor(e){this.key=e}}class kf{constructor(e){this.key=e}}class iE{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=W(),this.mutatedKeys=W(),this.Xa=zd(e),this.eu=new Pn(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Bu,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,y)=>{const T=s.get(m),k=yi(this.query,y)?y:null,C=!!T&&this.mutatedKeys.has(T.key),D=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let N=!1;T&&k?T.data.isEqual(k.data)?C!==D&&(r.track({type:3,doc:k}),N=!0):this.iu(T,k)||(r.track({type:2,doc:k}),N=!0,(u&&this.Xa(k,u)>0||d&&this.Xa(k,d)<0)&&(c=!0)):!T&&k?(r.track({type:0,doc:k}),N=!0):T&&!k&&(r.track({type:1,doc:T}),N=!0,(u||d)&&(c=!0)),N&&(k?(a=a.add(k),i=D?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((m,y)=>(function(k,C){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B(20277,{At:N})}};return D(k)-D(C)})(m.type,y.type)||this.Xa(m.doc,y.doc))),this.su(r),s=s!=null&&s;const c=t&&!s?this.ou():[],u=this.Za.size===0&&this.current&&!s?1:0,d=u!==this.Ya;return this.Ya=u,a.length!==0||d?{snapshot:new xn(this.query,e.eu,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Bu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=W(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new kf(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new Sf(r))})),t}uu(e){this.Ha=e.qs,this.Za=W();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return xn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const qa="SyncEngine";class oE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class aE{constructor(e){this.key=e,this.lu=!1}}class cE{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new mn((c=>$d(c)),_i),this.Tu=new Map,this.Iu=new Set,this.du=new se(F.comparator),this.Eu=new Map,this.Au=new Va,this.Ru={},this.Vu=new Map,this.mu=Mn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function lE(n,e,t=!0){const r=Vf(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Rf(r,e,t,!0),s}async function uE(n,e){const t=Vf(n);await Rf(t,e,!0,!1)}async function Rf(n,e,t,r){const s=await Cw(n.localStore,Ze(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await hE(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&_f(n.remoteStore,s),c}async function hE(n,e,t,r,s){n.gu=(y,T,k)=>(async function(D,N,x,O){let $=N.view.nu(x);$.Ds&&($=await Ou(D.localStore,N.query,!1).then((({documents:I})=>N.view.nu(I,$))));const H=O&&O.targetChanges.get(N.targetId),me=O&&O.targetMismatches.get(N.targetId)!=null,te=N.view.applyChanges($,D.isPrimaryClient,H,me);return qu(D,N.targetId,te._u),te.snapshot})(n,y,T,k);const i=await Ou(n.localStore,e,!0),a=new iE(e,i.qs),c=a.nu(i.documents),u=Hr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);qu(n,t,d._u);const m=new oE(e,t,a);return n.Pu.set(e,m),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function dE(n,e,t){const r=j(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!_i(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Qo(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&xa(r.remoteStore,s.targetId),Xo(r,s.targetId)})).catch(qn)):(Xo(r,s.targetId),await Qo(r.localStore,s.targetId,!0))}async function fE(n,e){const t=j(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),xa(t.remoteStore,r.targetId))}async function pE(n,e,t){const r=EE(n);try{const s=await(function(a,c){const u=j(a),d=re.now(),m=c.reduce(((k,C)=>k.add(C.key)),W());let y,T;return u.persistence.runTransaction("Locally write mutations","readwrite",(k=>{let C=yt(),D=W();return u.Os.getEntries(k,m).next((N=>{C=N,C.forEach(((x,O)=>{O.isValidDocument()||(D=D.add(x))}))})).next((()=>u.localDocuments.getOverlayedDocuments(k,C))).next((N=>{y=N;const x=[];for(const O of c){const $=Dv(O,y.get(O.key).overlayedDocument);$!=null&&x.push(new zt(O.key,$,Vd($.value.mapValue),Ke.exists(!0)))}return u.mutationQueue.addMutationBatch(k,d,x,c)})).next((N=>{T=N;const x=N.applyToLocalDocumentSet(y,D);return u.documentOverlayCache.saveOverlays(k,N.batchId,x)}))})).then((()=>({batchId:T.batchId,changes:qd(y)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,u){let d=a.Ru[a.currentUser.toKey()];d||(d=new se(q)),d=d.insert(c,u),a.Ru[a.currentUser.toKey()]=d})(r,s.batchId,t),await Wr(r,s.changes),await bi(r.remoteStore)}catch(s){const i=za(s,"Failed to persist write");t.reject(i)}}async function Pf(n,e){const t=j(n);try{const r=await kw(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?X(a.lu,14607):s.removedDocuments.size>0&&(X(a.lu,42227),a.lu=!1))})),await Wr(t,r,e)}catch(r){await qn(r)}}function ju(n,e,t){const r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const u=j(a);u.onlineState=c;let d=!1;u.queries.forEach(((m,y)=>{for(const T of y.wa)T.va(c)&&(d=!0)})),d&&ja(u)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mE(n,e,t){const r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new se(F.comparator);a=a.insert(i,Re.newNoDocument(i,z.min()));const c=W().add(i),u=new Ei(z.min(),new Map,new se(q),a,c);await Pf(r,u),r.du=r.du.remove(i),r.Eu.delete(e),Ha(r)}else await Qo(r.localStore,e,!1).then((()=>Xo(r,e,t))).catch(qn)}async function gE(n,e){const t=j(n),r=e.batch.batchId;try{const s=await Sw(t.localStore,e);Df(t,r,null),Cf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Wr(t,s)}catch(s){await qn(s)}}async function _E(n,e,t){const r=j(n);try{const s=await(function(a,c){const u=j(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return u.mutationQueue.lookupMutationBatch(d,c).next((y=>(X(y!==null,37113),m=y.keys(),u.mutationQueue.removeMutationBatch(d,y)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>u.localDocuments.getDocuments(d,m)))}))})(r.localStore,e);Df(r,e,t),Cf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Wr(r,s)}catch(s){await qn(s)}}function Cf(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function Df(n,e,t){const r=j(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Xo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||Nf(n,r)}))}function Nf(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(xa(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Ha(n))}function qu(n,e,t){for(const r of t)r instanceof Sf?(n.Au.addReference(r.key,e),yE(n,r)):r instanceof kf?(M(qa,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Nf(n,r.key)):B(19791,{yu:r})}function yE(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(M(qa,"New document in limbo: "+t),n.Iu.add(r),Ha(n))}function Ha(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new F(ee.fromString(e)),r=n.mu.next();n.Eu.set(r,new aE(t)),n.du=n.du.insert(t,r),_f(n.remoteStore,new kt(Ze(ka(t.path)),r,"TargetPurposeLimboResolution",pi.ue))}}async function Wr(n,e,t){const r=j(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,u)=>{a.push(r.gu(u,e,t).then((d=>{var m;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){s.push(d);const y=La.Es(u.targetId,d);i.push(y)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(u,d){const m=j(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>P.forEach(d,(T=>P.forEach(T.Is,(k=>m.persistence.referenceDelegate.addReference(y,T.targetId,k))).next((()=>P.forEach(T.ds,(k=>m.persistence.referenceDelegate.removeReference(y,T.targetId,k)))))))))}catch(y){if(!Hn(y))throw y;M(Ma,"Failed to update sequence numbers: "+y)}for(const y of d){const T=y.targetId;if(!y.fromCache){const k=m.Fs.get(T),C=k.snapshotVersion,D=k.withLastLimboFreeSnapshotVersion(C);m.Fs=m.Fs.insert(T,D)}}})(r.localStore,i))}async function vE(n,e){const t=j(n);if(!t.currentUser.isEqual(e)){M(qa,"User change. New user:",e.toKey());const r=await ff(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((u=>{u.reject(new L(R.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wr(t,r.Bs)}}function wE(n,e){const t=j(n),r=t.Eu.get(e);if(r&&r.lu)return W().add(r.key);{let s=W();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const c=t.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function Vf(n){const e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Pf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mE.bind(null,e),e.hu.J_=rE.bind(null,e.eventManager),e.hu.pu=sE.bind(null,e.eventManager),e}function EE(n){const e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_E.bind(null,e),e}class Xs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ti(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Aw(this.persistence,new Tw,e.initialUser,this.serializer)}Du(e){return new df(Oa.Vi,this.serializer)}bu(e){return new Nw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xs.provider={build:()=>new Xs};class TE extends Xs{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){X(this.persistence.referenceDelegate instanceof Js,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new aw(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Le.withCacheSize(this.cacheSizeBytes):Le.DEFAULT;return new df((r=>Js.Vi(r,t)),this.serializer)}}class Zo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ju(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vE.bind(null,this.syncEngine),await eE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new nE})()}createDatastore(e){const t=Ti(e.databaseInfo.databaseId),r=(function(i){return new xw(i)})(e.databaseInfo);return(function(i,a,c,u){return new $w(i,a,c,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new jw(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>ju(this.syncEngine,t,0)),(function(){return xu.C()?new xu:new Vw})())}createSyncEngine(e,t){return(function(s,i,a,c,u,d,m){const y=new cE(s,i,a,c,u,d);return m&&(y.fu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=j(s);M(on,"RemoteStore shutting down."),i.Ia.add(5),await Kr(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Zo.provider={build:()=>new Zo};/**
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
 */class Of{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):_t("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Bt="FirestoreClient";class IE{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Oe.UNAUTHENTICATED,this.clientId=Ea.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{M(Bt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(M(Bt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=za(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Eo(n,e){n.asyncQueue.verifyOperationInProgress(),M(Bt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await ff(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{sn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{M("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{sn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Hu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await bE(n);M(Bt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Uu(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Uu(e.remoteStore,s))),n._onlineComponents=e}async function bE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(Bt,"Using user provided OfflineComponentProvider");try{await Eo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;sn("Error using user provided cache. Falling back to memory cache: "+t),await Eo(n,new Xs)}}else M(Bt,"Using default OfflineComponentProvider"),await Eo(n,new TE(void 0));return n._offlineComponents}async function Lf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(Bt,"Using user provided OnlineComponentProvider"),await Hu(n,n._uninitializedComponentsProvider._online)):(M(Bt,"Using default OnlineComponentProvider"),await Hu(n,new Zo))),n._onlineComponents}function AE(n){return Lf(n).then((e=>e.syncEngine))}async function ea(n){const e=await Lf(n),t=e.eventManager;return t.onListen=lE.bind(null,e.syncEngine),t.onUnlisten=dE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=uE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=fE.bind(null,e.syncEngine),t}function SE(n,e,t={}){const r=new Nt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,d){const m=new Of({next:T=>{m.Ou(),a.enqueueAndForget((()=>bf(i,y))),T.fromCache&&u.source==="server"?d.reject(new L(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),y=new Af(c,m,{includeMetadataChanges:!0,ka:!0});return If(i,y)})(await ea(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function Mf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Ku=new Map;/**
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
 */const kE="firestore.googleapis.com",Wu=!0;class Gu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=kE,this.ssl=Wu}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Wu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=uf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hf)throw new L(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Mf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ka{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Ly;switch(r.type){case"firstParty":return new Fy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Ku.get(t);r&&(M("ComponentProvider","Removing Datastore"),Ku.delete(t),r.terminate())})(this),Promise.resolve()}}/**
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
 */class vt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vt(this.firestore,e,this._query)}}class de{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new de(this.firestore,e,this._key)}toJSON(){return{type:de._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(jr(t,de._jsonSchema))return new de(e,r||null,new F(ee.fromString(t.referencePath)))}}de._jsonSchemaVersion="firestore/documentReference/1.0",de._jsonSchema={type:he("string",de._jsonSchemaVersion),referencePath:he("string")};class Vt extends vt{constructor(e,t,r){super(e,t,ka(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new de(this.firestore,null,new F(e))}withConverter(e){return new Vt(this.firestore,e,this._path)}}function an(n,e,...t){if(n=fe(n),Td("collection","path",e),n instanceof Ka){const r=ee.fromString(e,...t);return au(r),new Vt(n,null,r)}{if(!(n instanceof de||n instanceof Vt))throw new L(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return au(r),new Vt(n.firestore,null,r)}}function Ai(n,e,...t){if(n=fe(n),arguments.length===1&&(e=Ea.newId()),Td("doc","path",e),n instanceof Ka){const r=ee.fromString(e,...t);return ou(r),new de(n,null,new F(r))}{if(!(n instanceof de||n instanceof Vt))throw new L(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return ou(r),new de(n.firestore,n instanceof Vt?n.converter:null,new F(r))}}/**
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
 */const Qu="AsyncQueue";class Ju{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new mf(this,"async_queue_retry"),this.oc=()=>{const r=wo();r&&M(Qu,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=wo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=wo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Nt;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Hn(e))throw e;M(Qu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,_t("INTERNAL UNHANDLED ERROR: ",Yu(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=$a.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&B(47125,{hc:Yu(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Yu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Xu(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class cn extends Ka{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Ju,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ju(e),this._firestoreClient=void 0,await e}}}function RE(n,e,t){t||(t=qs);const r=Br(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(Ar(i,e))return s;throw new L(R.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new L(R.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<hf)throw new L(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&ii(e.host)&&Nm(e.host),r.initialize({options:e,instanceIdentifier:t})}function Wa(n){if(n._terminated)throw new L(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||PE(n),n._firestoreClient}function PE(n){var e,t,r;const s=n._freezeSettings(),i=(function(c,u,d,m){return new tv(c,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Mf(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new IE(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}})(n._componentsProvider))}/**
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
 */class Be{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Be(Te.fromBase64String(e))}catch(t){throw new L(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Be(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Be._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(jr(e,Be._jsonSchema))return Be.fromBase64String(e.bytes)}}Be._jsonSchemaVersion="firestore/bytes/1.0",Be._jsonSchema={type:he("string",Be._jsonSchemaVersion),bytes:he("string")};/**
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
 */class Si{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ki{constructor(e){this._methodName=e}}/**
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
 */class tt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:tt._jsonSchemaVersion}}static fromJSON(e){if(jr(e,tt._jsonSchema))return new tt(e.latitude,e.longitude)}}tt._jsonSchemaVersion="firestore/geoPoint/1.0",tt._jsonSchema={type:he("string",tt._jsonSchemaVersion),latitude:he("number"),longitude:he("number")};/**
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
 */class nt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:nt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(jr(e,nt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new nt(e.vectorValues);throw new L(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}nt._jsonSchemaVersion="firestore/vectorValue/1.0",nt._jsonSchema={type:he("string",nt._jsonSchemaVersion),vectorValues:he("object")};/**
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
 */const CE=/^__.*__$/;class DE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new zt(e,this.data,this.fieldMask,t,this.fieldTransforms):new qr(e,this.data,t,this.fieldTransforms)}}class xf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new zt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ff(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B(40011,{Ec:n})}}class Ga{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Ga(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Zs(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Ff(this.Ec)&&CE.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class NE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ti(e)}Dc(e,t,r,s=!1){return new Ga({Ec:e,methodName:t,bc:r,path:Ee.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qa(n){const e=n._freezeSettings(),t=Ti(n._databaseId);return new NE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function VE(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);Ya("Data must be an object, but it was:",a,r);const c=Uf(r,a);let u,d;if(i.merge)u=new Ue(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const y of i.mergeFields){const T=ta(e,y,t);if(!a.contains(T))throw new L(R.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);$f(m,T)||m.push(T)}u=new Ue(m),d=a.fieldTransforms.filter((y=>u.covers(y.field)))}else u=null,d=a.fieldTransforms;return new DE(new Me(c),u,d)}class Ri extends ki{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ri}}class Ja extends ki{_toFieldTransform(e){return new kv(e.path,new Or)}isEqual(e){return e instanceof Ja}}function OE(n,e,t,r){const s=n.Dc(1,e,t);Ya("Data must be an object, but it was:",s,r);const i=[],a=Me.empty();$t(r,((u,d)=>{const m=Xa(e,u,t);d=fe(d);const y=s.gc(m);if(d instanceof Ri)i.push(m);else{const T=Gr(d,y);T!=null&&(i.push(m),a.set(m,T))}}));const c=new Ue(i);return new xf(a,c,s.fieldTransforms)}function LE(n,e,t,r,s,i){const a=n.Dc(1,e,t),c=[ta(e,r,t)],u=[s];if(i.length%2!=0)throw new L(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<i.length;T+=2)c.push(ta(e,i[T])),u.push(i[T+1]);const d=[],m=Me.empty();for(let T=c.length-1;T>=0;--T)if(!$f(d,c[T])){const k=c[T];let C=u[T];C=fe(C);const D=a.gc(k);if(C instanceof Ri)d.push(k);else{const N=Gr(C,D);N!=null&&(d.push(k),m.set(k,N))}}const y=new Ue(d);return new xf(m,y,a.fieldTransforms)}function ME(n,e,t,r=!1){return Gr(t,n.Dc(r?4:3,e))}function Gr(n,e){if(Bf(n=fe(n)))return Ya("Unsupported field value:",e,n),Uf(n,e);if(n instanceof ki)return(function(r,s){if(!Ff(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let u=Gr(c,s.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=re.fromDate(r);return{timestampValue:Qs(s.serializer,i)}}if(r instanceof re){const i=new re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Qs(s.serializer,i)}}if(r instanceof tt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Be)return{bytesValue:nf(s.serializer,r._byteString)};if(r instanceof de){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Na(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof nt)return(function(a,c){return{mapValue:{fields:{[Dd]:{stringValue:Nd},[Hs]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw c.wc("VectorValues must only contain numeric values.");return Ra(c.serializer,d)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${fi(r)}`)})(n,e)}function Uf(n,e){const t={};return Ad(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$t(n,((r,s)=>{const i=Gr(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Bf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof re||n instanceof tt||n instanceof Be||n instanceof de||n instanceof ki||n instanceof nt)}function Ya(n,e,t){if(!Bf(t)||!Id(t)){const r=fi(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function ta(n,e,t){if((e=fe(e))instanceof Si)return e._internalPath;if(typeof e=="string")return Xa(n,e);throw Zs("Field path arguments must be of type string or ",n,!1,void 0,t)}const xE=new RegExp("[~\\*/\\[\\]]");function Xa(n,e,t){if(e.search(xE)>=0)throw Zs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Si(...e.split("."))._internalPath}catch{throw Zs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Zs(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new L(R.INVALID_ARGUMENT,c+n+u)}function $f(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class zf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new de(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new FE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Pi("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class FE extends zf{data(){return super.data()}}function Pi(n,e){return typeof e=="string"?Xa(n,e):e instanceof Si?e._internalPath:e._delegate._internalPath}/**
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
 */function UE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Za{}class ec extends Za{}function Ci(n,e,...t){let r=[];e instanceof Za&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((u=>u instanceof tc)).length,c=i.filter((u=>u instanceof Di)).length;if(a>1||a>0&&c>0)throw new L(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Di extends ec{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Di(e,t,r)}_apply(e){const t=this._parse(e);return qf(e._query,t),new vt(e.firestore,e.converter,qo(e._query,t))}_parse(e){const t=Qa(e.firestore);return(function(i,a,c,u,d,m,y){let T;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new L(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){eh(y,m);const C=[];for(const D of y)C.push(Zu(u,i,D));T={arrayValue:{values:C}}}else T=Zu(u,i,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||eh(y,m),T=ME(c,a,y,m==="in"||m==="not-in");return ue.create(d,m,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function BE(n,e,t){const r=e,s=Pi("where",n);return Di._create(s,r,t)}class tc extends Za{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new tc(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Ge.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)qf(a,u),a=qo(a,u)})(e._query,t),new vt(e.firestore,e.converter,qo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class nc extends ec{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new nc(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new L(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Vr(i,a)})(e._query,this._field,this._direction);return new vt(e.firestore,e.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new Kn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function rc(n,e="asc"){const t=e,r=Pi("orderBy",n);return nc._create(r,t)}class sc extends ec{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new sc(e,t,r)}_apply(e){return new vt(e.firestore,e.converter,Ws(e._query,this._limit,this._limitType))}}function jf(n){return qy("limit",n),sc._create("limit",n,"F")}function Zu(n,e,t){if(typeof(t=fe(t))=="string"){if(t==="")throw new L(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Bd(e)&&t.indexOf("/")!==-1)throw new L(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ee.fromString(t));if(!F.isDocumentKey(r))throw new L(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mu(n,new F(r))}if(t instanceof de)return mu(n,t._key);throw new L(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${fi(t)}.`)}function eh(n,e){if(!Array.isArray(n)||n.length===0)throw new L(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qf(n,e){const t=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new L(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class $E{convertValue(e,t="none"){switch(Ft(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return $t(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Hs].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>oe(a.doubleValue)));return new nt(i)}convertGeoPoint(e){return new tt(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=gi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Cr(e));default:return null}}convertTimestamp(e){const t=Mt(e);return new re(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ee.fromString(e);X(lf(r),9688,{name:e});const s=new Dr(r.get(1),r.get(3)),i=new F(r.popFirst(5));return s.isEqual(t)||_t(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function zE(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class gr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class en extends zf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Cs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Pi("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=en._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}en._jsonSchemaVersion="firestore/documentSnapshot/1.0",en._jsonSchema={type:he("string",en._jsonSchemaVersion),bundleSource:he("string","DocumentSnapshot"),bundleName:he("string"),bundle:he("string")};class Cs extends en{data(e={}){return super.data(e)}}class tn{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new gr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Cs(this._firestore,this._userDataWriter,r.key,r,new gr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const u=new Cs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new gr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new Cs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new gr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:jE(c.type),doc:u,oldIndex:d,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=tn._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Ea.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function jE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B(61501,{type:n})}}tn._jsonSchemaVersion="firestore/querySnapshot/1.0",tn._jsonSchema={type:he("string",tn._jsonSchemaVersion),bundleSource:he("string","QuerySnapshot"),bundleName:he("string"),bundle:he("string")};class ic extends $E{constructor(e){super(),this.firestore=e}convertBytes(e){return new Be(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new de(this.firestore,null,t)}}function qE(n){n=mt(n,vt);const e=mt(n.firestore,cn),t=Wa(e),r=new ic(e);return SE(t,n._query,{source:"server"}).then((s=>new tn(e,r,n,s)))}function HE(n,e,t,...r){n=mt(n,de);const s=mt(n.firestore,cn),i=Qa(s);let a;return a=typeof(e=fe(e))=="string"||e instanceof Si?LE(i,"updateDoc",n._key,e,t,r):OE(i,"updateDoc",n._key,e),oc(s,[a.toMutation(n._key,Ke.exists(!0))])}function KE(n){return oc(mt(n.firestore,cn),[new Pa(n._key,Ke.none())])}function WE(n,e){const t=mt(n.firestore,cn),r=Ai(n),s=zE(n.converter,e);return oc(t,[VE(Qa(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ke.exists(!1))]).then((()=>r))}function Fn(n,...e){var t,r,s;n=fe(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Xu(e[a])||(i=e[a++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Xu(e[a])){const y=e[a];e[a]=(t=y.next)===null||t===void 0?void 0:t.bind(y),e[a+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),e[a+2]=(s=y.complete)===null||s===void 0?void 0:s.bind(y)}let u,d,m;if(n instanceof de)d=mt(n.firestore,cn),m=ka(n._key.path),u={next:y=>{e[a]&&e[a](GE(d,n,y))},error:e[a+1],complete:e[a+2]};else{const y=mt(n,vt);d=mt(y.firestore,cn),m=y._query;const T=new ic(d);u={next:k=>{e[a]&&e[a](new tn(d,T,y,k))},error:e[a+1],complete:e[a+2]},UE(n._query)}return(function(T,k,C,D){const N=new Of(D),x=new Af(k,N,C);return T.asyncQueue.enqueueAndForget((async()=>If(await ea(T),x))),()=>{N.Ou(),T.asyncQueue.enqueueAndForget((async()=>bf(await ea(T),x)))}})(Wa(d),m,c,u)}function oc(n,e){return(function(r,s){const i=new Nt;return r.asyncQueue.enqueueAndForget((async()=>pE(await AE(r),s,i))),i.promise})(Wa(n),e)}function GE(n,e,t){const r=t.docs.get(e._key),s=new ic(n);return new en(n,s,e._key,r,new gr(t.hasPendingWrites,t.fromCache),e.converter)}function QE(){return new Ja("serverTimestamp")}(function(e,t=!0){(function(s){jn=s})(ai),rt(new We("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new cn(new My(r.getProvider("auth-internal")),new Uy(a,r.getProvider("app-check-internal")),(function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new L(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dr(d.options.projectId,m)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),$e(tu,nu,e),$e(tu,nu,"esm2017")})();const JE=!1,YE=Ay,Qr=Nh(YE),Un=B_(Qr,{persistence:[my,ny]}),ot=RE(Qr,{experimentalAutoDetectLongPolling:!0}),th=n=>`${String(n).trim().toLowerCase()}@app.local`,Hf=Sy;let Kf=0,ac=!1,na=!1,ra=0;const Wf=new Set,ae=()=>Date.now()+Kf,XE=n=>Wf.add(n);async function nn(){try{const n=Date.now(),e=await fetch(`${Hf}/time`,{cache:"no-store"}),t=Date.now(),r=await e.json();return Kf=r.now-(n+t)/2,ac=!!r.testMode,na=!!r.shifted,r.startDate&&Ry(r.startDate),ra=t,Wf.forEach(s=>s()),!0}catch{return!1}}function ZE(){setInterval(()=>{(ac||Date.now()-ra>180*1e3)&&nn()},2e4),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Date.now()-ra>2e4&&nn()})}class To extends Error{}async function le(n,e={},{authed:t=!0}={}){var a;const r={"content-type":"application/json"};if(t){const c=await((a=Un.currentUser)==null?void 0:a.getIdToken());if(!c)throw new To("Bitte neu einloggen");r.authorization=`Bearer ${c}`}let s;try{s=await fetch(`${Hf}${n}`,{method:"POST",headers:r,body:JSON.stringify(e)})}catch{throw new To("Keine Verbindung. Bist du online?")}const i=await s.json().catch(()=>({}));if(!s.ok)throw new To(i.error||`Fehler ${s.status}`);return i}function f(n,e={},...t){const r=document.createElement(n);for(const[s,i]of Object.entries(e||{}))i==null||i===!1||(s==="class"?r.className=i:s==="style"&&typeof i=="object"?Object.assign(r.style,i):s.startsWith("on")?r.addEventListener(s.slice(2).toLowerCase(),i):s==="html"?r.innerHTML=i:s in r&&s!=="list"&&s!=="form"?r[s]=i:r.setAttribute(s,i===!0?"":i));return eT(r,t),r}function eT(n,e){for(const t of e.flat(1/0))t==null||t===!1||n.append(t instanceof Node?t:document.createTextNode(String(t)))}const Rt=n=>{const e=document.createElement("template");return e.innerHTML=n.trim(),e.content.firstChild};function G(n,e="info"){const t=f("div",{class:`toast toast-${e}`},n);document.body.append(t),requestAnimationFrame(()=>t.classList.add("show")),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},e==="error"?4500:2800)}const tT=()=>document.getElementById("overlay");function Qe(n,{sheet:e=!1,full:t=!1,onClose:r,dismissable:s=!0}={}){const i=f("div",{class:`backdrop ${e?"is-sheet":""} ${t?"is-full":""}`}),a=f("div",{class:e?"sheet":t?"fullscreen":"modal"});let c=!1;const u=()=>{c||(c=!0,i.classList.remove("show"),setTimeout(()=>i.remove(),250),r==null||r())};return s&&i.addEventListener("click",d=>{d.target===i&&u()}),a.append(typeof n=="function"?n(u):n),i.append(a),tT().append(i),requestAnimationFrame(()=>i.classList.add("show")),u}function Cn(n,e,t="OK",r="gold"){return new Promise(s=>{Qe(i=>f("div",{class:"stack"},f("h2",{class:"title"},n),e&&f("p",{class:"muted center"},e),f("div",{class:"row gap"},f("button",{class:"btn btn-grey",onclick:()=>{s(!1),i()}},"Abbrechen"),f("button",{class:`btn btn-${r}`,onclick:()=>{s(!0),i()}},t))),{onClose:()=>s(!1)})})}function Pe(n,e,t){e?(n.dataset.label=n.innerHTML,n.disabled=!0,n.innerHTML=`<span class="spinner"></span> ${t||""}`):(n.disabled=!1,n.dataset.label&&(n.innerHTML=n.dataset.label))}function nT(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function sa(n){return n.toFixed(1).replace(".",",")}function Ni(n,e){const t=Math.max(0,Math.floor((e-n)/1e3));if(t<60)return"gerade eben";const r=Math.floor(t/60);if(r<60)return`vor ${r} Min.`;const s=Math.floor(r/60);if(s<24)return`vor ${s} Std.`;const i=Math.floor(s/24);return i===1?"gestern":`vor ${i} Tagen`}const rT=()=>/iphone|ipad|ipod/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,sT=()=>/android/i.test(navigator.userAgent),iT=()=>window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0;let oT=0;function ei(n,e,t,r,s,i=-90){const a=[];for(let c=0;c<s*2;c++){const u=c%2?r:t,d=(i+c*180/s)*Math.PI/180;a.push(`${(n+u*Math.cos(d)).toFixed(1)},${(e+u*Math.sin(d)).toFixed(1)}`)}return a.join(" ")}const nh={noob:'<circle cx="50" cy="50" r="40"/>',advanced:'<path d="M50 7 L87 20 V47 C87 72 69 88 50 95 C31 88 13 72 13 47 V20 Z"/>',pro:'<polygon points="50,5 89,27 89,73 50,95 11,73 11,27"/>',elite:`<polygon points="${ei(50,50,46,37,10)}"/>`,unreal:'<polygon points="50,3 93,50 50,97 7,50"/>',hacker:'<polygon points="27,7 73,7 95,50 73,93 27,93 5,50"/>',gotti:`<polygon points="${ei(50,50,48,39,16)}"/>`},aT={noob:'<path d="M50 74 V50" stroke-width="7" fill="none"/><path d="M50 54 C37 54 28 45 28 32 C41 32 50 41 50 54 Z M50 50 C50 37 59 28 72 28 C72 41 63 50 50 50 Z"/>',advanced:'<path d="M57 14 L29 55 H47 L41 86 L71 43 H53 Z"/>',pro:`<polygon points="${ei(50,51,30,13,5)}"/>`,elite:'<path d="M50 16 C59 31 73 40 71 61 C70 75 61 84 50 84 C39 84 30 75 29 62 C28 49 38 43 40 32 C45 41 47 45 50 48 C53 37 48 27 50 16 Z"/>',unreal:'<path d="M16 50 C29 30 71 30 84 50 C71 70 29 70 16 50 Z"/><circle cx="50" cy="50" r="11" fill="#1a0b2e" stroke="none"/><circle cx="54" cy="46" r="4" fill="#fff" stroke="none"/>',hacker:'<path d="M38 32 L20 50 L38 68 M62 32 L80 50 L62 68 M56 27 L44 73" fill="none" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>',gotti:'<path d="M20 68 L15 32 L35 47 L50 22 L65 47 L85 32 L80 68 Z"/><rect x="20" y="70" width="60" height="9" rx="3"/><circle cx="50" cy="56" r="5" fill="#ff4fa3"/>'};function Tr(n){const e=_e[n]||_e[0],t=hi[e.group],r=`bg${++oT}`,s=e.level>0?Array.from({length:e.level},(i,a)=>{const c=50+(a-(e.level-1)/2)*17;return`<polygon points="${ei(c,90,9,4,5)}" fill="#ffd23f" stroke="#1a0b2e" stroke-width="2.5" stroke-linejoin="round"/>`}).join(""):"";return`<svg class="badge-svg" viewBox="0 0 100 104" xmlns="http://www.w3.org/2000/svg" aria-label="${nT(e.name)}">
  <defs>
    <linearGradient id="${r}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${t.light}"/><stop offset="0.45" stop-color="${t.main}"/><stop offset="1" stop-color="${t.dark}"/>
    </linearGradient>
  </defs>
  <g stroke="#1a0b2e" stroke-width="5" stroke-linejoin="round" fill="url(#${r})">${nh[e.group]}</g>
  <g transform="translate(50 50) scale(0.82) translate(-50 -50)" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="3">${nh[e.group]}</g>
  <g transform="translate(50 50) scale(0.62) translate(-50 -50)" fill="#fff" stroke="#1a0b2e" stroke-width="4" stroke-linejoin="round">${aT[e.group]}</g>
  ${s}
</svg>`}function Jr(n,e=40){const t=Rt(Tr(n));return t.style.width=`${e}px`,t.style.height=`${e}px`,t}function cc(n,e,t=140,r){const s=_e[n]||_e[0],i=hi[s.group],a=2*Math.PI*45,c=f("div",{class:"ringbadge",style:{width:`${t}px`,height:`${t}px`,"--rank":i.main}});r&&(c.dataset.ring=r),c.append(Rt(`<svg class="ring" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="none" stroke="#0c0624" stroke-width="9"/>
    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="6"/>
    <circle class="ring-fill" cx="50" cy="50" r="45" fill="none" stroke="${i.main}" stroke-width="6" stroke-linecap="round"
      stroke-dasharray="${a}" stroke-dashoffset="${a*(1-e/100)}" transform="rotate(-90 50 50)"/>
  </svg>`));const u=f("div",{class:"ringbadge-inner"});return u.append(Jr(n,t*.66)),c.append(u),c}function cT(n,e){const t=n.querySelector(".ring-fill");if(!t)return;const r=2*Math.PI*45;t.setAttribute("stroke-dashoffset",String(r*(1-e/100)))}function jt(n,e=40){const t=(n==null?void 0:n.name)||"?";if(n!=null&&n.photoURL)return f("img",{class:"avatar",src:n.photoURL,alt:t,loading:"lazy",style:{width:`${e}px`,height:`${e}px`}});const r=[...(n==null?void 0:n.username)||t].reduce((s,i)=>s+i.charCodeAt(0),0)%360;return f("div",{class:"avatar avatar-initial",style:{width:`${e}px`,height:`${e}px`,fontSize:`${e*.45}px`,background:`hsl(${r} 70% 45%)`}},t.slice(0,1).toUpperCase())}const lT='<svg viewBox="0 0 40 40" class="goonie-ico"><path d="M20 4 C30 4 35 12 35 21 C35 31 28 37 20 37 C12 37 5 31 5 21 C5 12 10 4 20 4 Z" fill="#a45bff" stroke="#1a0b2e" stroke-width="3"/><path d="M12 9 C14 6 18 5 20 5" stroke="#e2c9ff" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="14.5" cy="20" r="4" fill="#fff" stroke="#1a0b2e" stroke-width="2"/><circle cx="25.5" cy="20" r="4" fill="#fff" stroke="#1a0b2e" stroke-width="2"/><circle cx="15.5" cy="20.5" r="1.8" fill="#1a0b2e"/><circle cx="26.5" cy="20.5" r="1.8" fill="#1a0b2e"/><path d="M15 28 Q20 32 25 28" stroke="#1a0b2e" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>',U={uid:null,me:null,users:new Map,posts:[],notifs:[],usersLoaded:!1,postsLoaded:!1},ia=new Set,uT=n=>(ia.add(n),()=>ia.delete(n));let rh=0;function xr(n){cancelAnimationFrame(rh),rh=requestAnimationFrame(()=>ia.forEach(e=>e(n)))}const Ir=n=>n!=null&&n.toMillis?n.toMillis():typeof n=="number"?n:0,lc=n=>{const e=n.data();return{id:n.id,...e,createdAt:Ir(e.createdAt),punDeadline:Ir(e.punDeadline),punDoneAt:Ir(e.punDoneAt)}};let ti=[];const uc=80;let ni=uc,Pt=null;function Gf(){Pt==null||Pt(),Pt=Fn(Ci(an(ot,"posts"),rc("createdAt","desc"),jf(ni)),n=>{U.posts=n.docs.map(lc),U.postsLoaded=!0,U.feedHasMore=n.size>=ni,xr("posts")},n=>console.warn("posts",n))}function hT(){ni+=uc,Gf()}function dT(n,e){Qf(),U.uid=n,ti.push(Fn(an(ot,"users"),t=>{U.users=new Map(t.docs.map(r=>[r.id,{id:r.id,...r.data()}])),U.me=U.users.get(n)||null,U.usersLoaded=!0,U.me||e==null||e(),xr("users")},t=>console.warn("users",t))),ni=uc,Gf(),ti.push(Fn(Ci(an(ot,"notifications",n,"items"),rc("createdAt","desc"),jf(60)),t=>{U.notifs=t.docs.map(r=>({id:r.id,...r.data(),createdAt:Ir(r.data().createdAt)})),xr("notifs")},t=>console.warn("notifs",t)))}function Qf(){ti.forEach(n=>n()),ti=[],Pt==null||Pt(),Pt=null,Object.assign(U,{uid:null,me:null,users:new Map,posts:[],notifs:[],usersLoaded:!1,postsLoaded:!1})}async function fT(){const n=await qE(an(ot,"users"));U.users=new Map(n.docs.map(e=>[e.id,{id:e.id,...e.data()}])),U.me=U.users.get(U.uid)||null,xr("users")}function Jf(){xr("tick")}function pT(n,e){return Fn(Ci(an(ot,"posts"),BE("uid","==",n)),t=>{e(t.docs.map(lc).sort((r,s)=>s.day-r.day))})}function mT(n,e){return Fn(Ai(ot,"posts",n),t=>e(t.exists()?lc(t):null))}function gT(n,e){return Fn(Ci(an(ot,"posts",n,"comments"),rc("createdAt","asc")),t=>{e(t.docs.map(r=>({id:r.id,...r.data(),createdAt:Ir(r.data().createdAt)||Date.now()})))})}async function _T(n,e){return(await WE(an(ot,"posts",n,"comments"),{uid:U.uid,text:e,createdAt:QE()})).id}const yT=(n,e)=>KE(Ai(ot,"posts",n,"comments",e)),Yf=n=>HE(Ai(ot,"users",U.uid),n),Xf="@firebase/installations",hc="0.6.18";/**
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
 */const Zf=1e4,ep=`w:${hc}`,tp="FIS_v2",vT="https://firebaseinstallations.googleapis.com/v1",wT=3600*1e3,ET="installations",TT="Installations";/**
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
 */const IT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ln=new dn(ET,TT,IT);function np(n){return n instanceof at&&n.code.includes("request-failed")}/**
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
 */function rp({projectId:n}){return`${vT}/projects/${n}/installations`}function sp(n){return{token:n.token,requestStatus:2,expiresIn:AT(n.expiresIn),creationTime:Date.now()}}async function ip(n,e){const r=(await e.json()).error;return ln.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function op({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function bT(n,{refreshToken:e}){const t=op(n);return t.append("Authorization",ST(e)),t}async function ap(n){const e=await n();return e.status>=500&&e.status<600?n():e}function AT(n){return Number(n.replace("s","000"))}function ST(n){return`${tp} ${n}`}/**
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
 */async function kT({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=rp(n),s=op(n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:t,authVersion:tp,appId:n.appId,sdkVersion:ep},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await ap(()=>fetch(r,c));if(u.ok){const d=await u.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:sp(d.authToken)}}else throw await ip("Create Installation",u)}/**
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
 */function cp(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function RT(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const PT=/^[cdef][\w-]{21}$/,oa="";function CT(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=DT(n);return PT.test(t)?t:oa}catch{return oa}}function DT(n){return RT(n).substr(0,22)}/**
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
 */function Vi(n){return`${n.appName}!${n.appId}`}/**
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
 */const lp=new Map;function up(n,e){const t=Vi(n);hp(t,e),NT(t,e)}function hp(n,e){const t=lp.get(n);if(t)for(const r of t)r(e)}function NT(n,e){const t=VT();t&&t.postMessage({key:n,fid:e}),OT()}let Xt=null;function VT(){return!Xt&&"BroadcastChannel"in self&&(Xt=new BroadcastChannel("[Firebase] FID Change"),Xt.onmessage=n=>{hp(n.data.key,n.data.fid)}),Xt}function OT(){lp.size===0&&Xt&&(Xt.close(),Xt=null)}/**
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
 */const LT="firebase-installations-database",MT=1,un="firebase-installations-store";let Io=null;function dc(){return Io||(Io=oi(LT,MT,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(un)}}})),Io}async function ri(n,e){const t=Vi(n),s=(await dc()).transaction(un,"readwrite"),i=s.objectStore(un),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&up(n,e.fid),e}async function dp(n){const e=Vi(n),r=(await dc()).transaction(un,"readwrite");await r.objectStore(un).delete(e),await r.done}async function Oi(n,e){const t=Vi(n),s=(await dc()).transaction(un,"readwrite"),i=s.objectStore(un),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!a||a.fid!==c.fid)&&up(n,c.fid),c}/**
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
 */async function fc(n){let e;const t=await Oi(n.appConfig,r=>{const s=xT(r),i=FT(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===oa?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function xT(n){const e=n||{fid:CT(),registrationStatus:0};return fp(e)}function FT(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ln.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=UT(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:BT(n)}:{installationEntry:e}}async function UT(n,e){try{const t=await kT(n,e);return ri(n.appConfig,t)}catch(t){throw np(t)&&t.customData.serverCode===409?await dp(n.appConfig):await ri(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function BT(n){let e=await sh(n.appConfig);for(;e.registrationStatus===1;)await cp(100),e=await sh(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await fc(n);return r||t}return e}function sh(n){return Oi(n,e=>{if(!e)throw ln.create("installation-not-found");return fp(e)})}function fp(n){return $T(n)?{fid:n.fid,registrationStatus:0}:n}function $T(n){return n.registrationStatus===1&&n.registrationTime+Zf<Date.now()}/**
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
 */async function zT({appConfig:n,heartbeatServiceProvider:e},t){const r=jT(n,t),s=bT(n,t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:ep,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await ap(()=>fetch(r,c));if(u.ok){const d=await u.json();return sp(d)}else throw await ip("Generate Auth Token",u)}function jT(n,{fid:e}){return`${rp(n)}/${e}/authTokens:generate`}/**
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
 */async function pc(n,e=!1){let t;const r=await Oi(n.appConfig,i=>{if(!pp(i))throw ln.create("not-registered");const a=i.authToken;if(!e&&KT(a))return i;if(a.requestStatus===1)return t=qT(n,e),i;{if(!navigator.onLine)throw ln.create("app-offline");const c=GT(i);return t=HT(n,c),c}});return t?await t:r.authToken}async function qT(n,e){let t=await ih(n.appConfig);for(;t.authToken.requestStatus===1;)await cp(100),t=await ih(n.appConfig);const r=t.authToken;return r.requestStatus===0?pc(n,e):r}function ih(n){return Oi(n,e=>{if(!pp(e))throw ln.create("not-registered");const t=e.authToken;return QT(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function HT(n,e){try{const t=await zT(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await ri(n.appConfig,r),t}catch(t){if(np(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await dp(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ri(n.appConfig,r)}throw t}}function pp(n){return n!==void 0&&n.registrationStatus===2}function KT(n){return n.requestStatus===2&&!WT(n)}function WT(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+wT}function GT(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function QT(n){return n.requestStatus===1&&n.requestTime+Zf<Date.now()}/**
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
 */async function JT(n){const e=n,{installationEntry:t,registrationPromise:r}=await fc(e);return r?r.catch(console.error):pc(e).catch(console.error),t.fid}/**
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
 */async function YT(n,e=!1){const t=n;return await XT(t),(await pc(t,e)).token}async function XT(n){const{registrationPromise:e}=await fc(n);e&&await e}/**
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
 */function ZT(n){if(!n||!n.options)throw bo("App Configuration");if(!n.name)throw bo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw bo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function bo(n){return ln.create("missing-app-config-values",{valueName:n})}/**
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
 */const mp="installations",eI="installations-internal",tI=n=>{const e=n.getProvider("app").getImmediate(),t=ZT(e),r=Br(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},nI=n=>{const e=n.getProvider("app").getImmediate(),t=Br(e,mp).getImmediate();return{getId:()=>JT(t),getToken:s=>YT(t,s)}};function rI(){rt(new We(mp,tI,"PUBLIC")),rt(new We(eI,nI,"PRIVATE"))}rI();$e(Xf,hc);$e(Xf,hc,"esm2017");/**
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
 */const sI="/firebase-messaging-sw.js",iI="/firebase-cloud-messaging-push-scope",gp="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",oI="https://fcmregistrations.googleapis.com/v1",_p="google.c.a.c_id",aI="google.c.a.c_l",cI="google.c.a.ts",lI="google.c.a.e",oh=1e4;var ah;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ah||(ah={}));/**
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
 */var Fr;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Fr||(Fr={}));/**
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
 */function ht(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function uI(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const Ao="fcm_token_details_db",hI=5,ch="fcm_token_object_Store";async function dI(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Ao))return null;let e=null;return(await oi(Ao,hI,{upgrade:async(r,s,i,a)=>{var c;if(s<2||!r.objectStoreNames.contains(ch))return;const u=a.objectStore(ch),d=await u.index("fcmSenderId").get(n);if(await u.clear(),!!d){if(s===2){const m=d;if(!m.auth||!m.p256dh||!m.endpoint)return;e={token:m.fcmToken,createTime:(c=m.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:m.auth,p256dh:m.p256dh,endpoint:m.endpoint,swScope:m.swScope,vapidKey:typeof m.vapidKey=="string"?m.vapidKey:ht(m.vapidKey)}}}else if(s===3){const m=d;e={token:m.fcmToken,createTime:m.createTime,subscriptionOptions:{auth:ht(m.auth),p256dh:ht(m.p256dh),endpoint:m.endpoint,swScope:m.swScope,vapidKey:ht(m.vapidKey)}}}else if(s===4){const m=d;e={token:m.fcmToken,createTime:m.createTime,subscriptionOptions:{auth:ht(m.auth),p256dh:ht(m.p256dh),endpoint:m.endpoint,swScope:m.swScope,vapidKey:ht(m.vapidKey)}}}}}})).close(),await lo(Ao),await lo("fcm_vapid_details_db"),await lo("undefined"),fI(e)?e:null}function fI(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const pI="firebase-messaging-database",mI=1,hn="firebase-messaging-store";let So=null;function mc(){return So||(So=oi(pI,mI,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(hn)}}})),So}async function yp(n){const e=_c(n),r=await(await mc()).transaction(hn).objectStore(hn).get(e);if(r)return r;{const s=await dI(n.appConfig.senderId);if(s)return await gc(n,s),s}}async function gc(n,e){const t=_c(n),s=(await mc()).transaction(hn,"readwrite");return await s.objectStore(hn).put(e,t),await s.done,e}async function gI(n){const e=_c(n),r=(await mc()).transaction(hn,"readwrite");await r.objectStore(hn).delete(e),await r.done}function _c({appConfig:n}){return n.appId}/**
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
 */const _I={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ce=new dn("messaging","Messaging",_I);/**
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
 */async function yI(n,e){const t=await vc(n),r=wp(e),s={method:"POST",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(yc(n.appConfig),s)).json()}catch(a){throw Ce.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw Ce.create("token-subscribe-failed",{errorInfo:a})}if(!i.token)throw Ce.create("token-subscribe-no-token");return i.token}async function vI(n,e){const t=await vc(n),r=wp(e.subscriptionOptions),s={method:"PATCH",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${yc(n.appConfig)}/${e.token}`,s)).json()}catch(a){throw Ce.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw Ce.create("token-update-failed",{errorInfo:a})}if(!i.token)throw Ce.create("token-update-no-token");return i.token}async function vp(n,e){const r={method:"DELETE",headers:await vc(n)};try{const i=await(await fetch(`${yc(n.appConfig)}/${e}`,r)).json();if(i.error){const a=i.error.message;throw Ce.create("token-unsubscribe-failed",{errorInfo:a})}}catch(s){throw Ce.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function yc({projectId:n}){return`${oI}/projects/${n}/registrations`}async function vc({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function wp({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const s={web:{endpoint:t,auth:e,p256dh:n}};return r!==gp&&(s.web.applicationPubKey=r),s}/**
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
 */const wI=10080*60*1e3;async function EI(n){const e=await bI(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:ht(e.getKey("auth")),p256dh:ht(e.getKey("p256dh"))},r=await yp(n.firebaseDependencies);if(r){if(AI(r.subscriptionOptions,t))return Date.now()>=r.createTime+wI?II(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await vp(n.firebaseDependencies,r.token)}catch(s){console.warn(s)}return lh(n.firebaseDependencies,t)}else return lh(n.firebaseDependencies,t)}async function TI(n){const e=await yp(n.firebaseDependencies);e&&(await vp(n.firebaseDependencies,e.token),await gI(n.firebaseDependencies));const t=await n.swRegistration.pushManager.getSubscription();return t?t.unsubscribe():!0}async function II(n,e){try{const t=await vI(n.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await gc(n.firebaseDependencies,r),t}catch(t){throw t}}async function lh(n,e){const r={token:await yI(n,e),createTime:Date.now(),subscriptionOptions:e};return await gc(n,r),r.token}async function bI(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:uI(e)})}function AI(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,s=e.auth===n.auth,i=e.p256dh===n.p256dh;return t&&r&&s&&i}/**
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
 */function uh(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return SI(e,n),kI(e,n),RI(e,n),e}function SI(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const s=e.notification.image;s&&(n.notification.image=s);const i=e.notification.icon;i&&(n.notification.icon=i)}function kI(n,e){e.data&&(n.data=e.data)}function RI(n,e){var t,r,s,i,a;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const c=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;c&&(n.fcmOptions.link=c);const u=(a=e.fcmOptions)===null||a===void 0?void 0:a.analytics_label;u&&(n.fcmOptions.analyticsLabel=u)}/**
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
 */function PI(n){return typeof n=="object"&&!!n&&_p in n}/**
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
 */function CI(n){if(!n||!n.options)throw ko("App Configuration Object");if(!n.name)throw ko("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw ko(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function ko(n){return Ce.create("missing-app-config-values",{valueName:n})}/**
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
 */class DI{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=CI(e);this.firebaseDependencies={app:e,appConfig:s,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function Ep(n){try{n.swRegistration=await navigator.serviceWorker.register(sI,{scope:iI}),n.swRegistration.update().catch(()=>{}),await NI(n.swRegistration)}catch(e){throw Ce.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function NI(n){return new Promise((e,t)=>{const r=setTimeout(()=>t(new Error(`Service worker not registered after ${oh} ms`)),oh),s=n.installing||n.waiting;n.active?(clearTimeout(r),e()):s?s.onstatechange=i=>{var a;((a=i.target)===null||a===void 0?void 0:a.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),t(new Error("No incoming service worker found.")))})}/**
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
 */async function VI(n,e){if(!e&&!n.swRegistration&&await Ep(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ce.create("invalid-sw-registration");n.swRegistration=e}}/**
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
 */async function OI(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=gp)}/**
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
 */async function Tp(n,e){if(!navigator)throw Ce.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Ce.create("permission-blocked");return await OI(n,e==null?void 0:e.vapidKey),await VI(n,e==null?void 0:e.serviceWorkerRegistration),EI(n)}/**
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
 */async function LI(n,e,t){const r=MI(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[_p],message_name:t[aI],message_time:t[cI],message_device_time:Math.floor(Date.now()/1e3)})}function MI(n){switch(n){case Fr.NOTIFICATION_CLICKED:return"notification_open";case Fr.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function xI(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Fr.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(uh(t)):n.onMessageHandler.next(uh(t)));const r=t.data;PI(r)&&r[lI]==="1"&&await LI(n,t.messageType,r)}const hh="@firebase/messaging",dh="0.12.22";/**
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
 */const FI=n=>{const e=new DI(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>xI(e,t)),e},UI=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>Tp(e,r)}};function BI(){rt(new We("messaging",FI,"PUBLIC")),rt(new We("messaging-internal",UI,"PRIVATE")),$e(hh,dh),$e(hh,dh,"esm2017")}/**
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
 */async function Ip(){try{await Rh()}catch{return!1}return typeof window<"u"&&kh()&&Bm()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */async function $I(n){if(!navigator)throw Ce.create("only-available-in-window");return n.swRegistration||await Ep(n),TI(n)}/**
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
 */function wc(n=qg()){return Ip().then(e=>{if(!e)throw Ce.create("unsupported-browser")},e=>{throw Ce.create("indexed-db-unsupported")}),Br(fe(n),"messaging").getImmediate()}async function bp(n,e){return n=fe(n),Tp(n,e)}function zI(n){return n=fe(n),$I(n)}BI();let si=null;async function Ec(){if(!("serviceWorker"in navigator))return null;try{return si=await navigator.serviceWorker.register("./sw.js",{scope:"./"}),navigator.serviceWorker.addEventListener("message",n=>{var e;((e=n.data)==null?void 0:e.type)==="open"&&n.data.link&&(location.hash=n.data.link.replace(/^#/,""))}),si}catch{return null}}async function Ap(){if(!("Notification"in window)||!("serviceWorker"in navigator)||!("PushManager"in window))return!1;try{return await Ip()}catch{return!1}}const Sp=()=>"Notification"in window?Notification.permission:"unsupported";async function kp(){if(!await Ap())throw new Error("Push geht hier nicht. Auf dem iPhone: App erst zum Home-Bildschirm hinzufügen.");if(await Notification.requestPermission()!=="granted")throw new Error("Benachrichtigungen wurden nicht erlaubt. Du kannst das in den Handy-Einstellungen ändern.");const e=si||await Ec(),t=await bp(wc(Qr),{serviceWorkerRegistration:e});if(!t)throw new Error("Kein Push-Token erhalten");return localStorage.setItem("pushToken",t),await le("/push/register",{token:t,enabled:!0}),!0}async function jI(){const n=localStorage.getItem("pushToken");await le("/push/register",{token:n,remove:!0,enabled:!1});try{JE||await zI(wc(Qr))}catch{}localStorage.removeItem("pushToken")}async function qI(){if(!(Sp()!=="granted"||localStorage.getItem("pushOff")==="1"))try{const n=si||await Ec(),e=await bp(wc(Qr),{serviceWorkerRegistration:n});e&&e!==localStorage.getItem("pushToken")&&(localStorage.setItem("pushToken",e),await le("/push/register",{token:e,enabled:!0}))}catch{}}function HI(){try{let n=localStorage.getItem("deviceId");return n||(n=crypto.randomUUID(),localStorage.setItem("deviceId",n)),n}catch{return""}}function fh(n){const e=(n==null?void 0:n.code)||"";return e.includes("invalid-credential")||e.includes("wrong-password")||e.includes("user-not-found")||e.includes("invalid-email")?"Username oder Passwort falsch":e.includes("too-many-requests")?"Zu viele Versuche. Bitte kurz warten.":e.includes("network")?"Keine Verbindung":(n==null?void 0:n.message)||"Login fehlgeschlagen"}function KI(){const n=f("div",{class:"auth"}),e=f("div",{class:"auth-logo"},Jr(11,96),f("h1",{class:"logo-text"},`${sd} TEST`),f("p",{class:"muted"},"Test-App: hier zählt nichts, niemand bekommt Nachrichten")),t=f("div",{class:"card auth-card"}),r=(c,u)=>f("label",{class:"field"},f("span",{class:"label"},c),u),s=()=>{t.replaceChildren(f("button",{class:"btn btn-gold btn-big",onclick:i},"Einloggen"),f("button",{class:"btn btn-blue btn-big",onclick:a},"Neu registrieren"))},i=()=>{const c=f("input",{class:"input",autocomplete:"username",autocapitalize:"none",spellcheck:!1,placeholder:"dein_username"}),u=f("input",{class:"input",type:"password",autocomplete:"current-password",placeholder:"••••••"}),d=f("button",{class:"btn btn-gold btn-big",type:"submit"},"Einloggen"),m=f("form",{class:"stack"},f("h2",{class:"title"},"Einloggen"),r("Username",c),r("Passwort",u),d,f("button",{class:"btn btn-grey",type:"button",onclick:s},"Zurück"));m.onsubmit=async y=>{y.preventDefault(),Pe(d,!0);try{history.replaceState(null,"","#/"),await Kl(Un,th(c.value),u.value)}catch(T){Pe(d,!1),G(fh(T),"error")}},t.replaceChildren(m),c.focus()},a=()=>{const c=f("input",{class:"input",maxLength:24,placeholder:"z. B. Freddi"}),u=f("input",{class:"input",maxLength:20,autocomplete:"username",autocapitalize:"none",spellcheck:!1,placeholder:"nur a–z, 0–9, _ und ."}),d=f("input",{class:"input",type:"password",autocomplete:"new-password",placeholder:"mind. 6 Zeichen"}),m=f("input",{class:"input",type:"password",autocomplete:"off",placeholder:"bekommst du von der Gruppe"}),y=f("button",{class:"btn btn-blue btn-big",type:"submit"},"Registrieren"),T=f("form",{class:"stack"},f("h2",{class:"title"},"Neu registrieren"),r("Name (wird angezeigt)",c),r("Username (zum Einloggen)",u),r("Passwort",d),null,y,f("button",{class:"btn btn-grey",type:"button",onclick:s},"Zurück"));T.onsubmit=async k=>{k.preventDefault(),Pe(y,!0);try{await le("/register",{name:c.value,username:u.value,password:d.value,code:m.value,deviceId:HI()},{authed:!1}),localStorage.removeItem("onboarded"),history.replaceState(null,"","#/"),await Kl(Un,th(u.value),d.value),G("Willkommen! 🎉","success")}catch(C){Pe(y,!1),G(C.code?fh(C):C.message,"error")}},t.replaceChildren(T),c.focus()};return s(),n.append(e,t),n}function WI(n){const e=f("div",{class:"auth onboarding"}),t=rT(),r=sT(),s=iT();let i=s?1:0;const a=[()=>f("div",{class:"stack"},f("div",{class:"big-emoji"},"📲"),f("h2",{class:"title"},"App auf den Home-Bildschirm"),f("p",{class:"muted center"},t?"Auf dem iPhone kommen Push-Nachrichten nur, wenn die App auf dem Home-Bildschirm ist.":"Dann startest du die App mit einem Tipp, wie eine normale App."),t?f("ol",{class:"howto"},f("li",{},"Öffne diese Seite in ",f("b",{},"Safari"),"."),f("li",{},"Tippe unten auf ",f("b",{},"Teilen")," (Quadrat mit Pfeil nach oben ⬆️)."),f("li",{},"Scrolle runter und tippe ",f("b",{},"„Zum Home-Bildschirm“"),"."),f("li",{},"Tippe oben rechts auf ",f("b",{},"„Hinzufügen“"),"."),f("li",{},"Öffne die App jetzt über das neue Symbol auf dem Home-Bildschirm und logge dich dort ein.")):f("ol",{class:"howto"},f("li",{},"Öffne diese Seite in ",f("b",{},"Chrome"),"."),f("li",{},"Tippe oben rechts auf ",f("b",{},"⋮")," (drei Punkte)."),f("li",{},"Tippe ",f("b",{},"„Zum Startbildschirm hinzufügen“")," oder ",f("b",{},"„App installieren“"),"."),f("li",{},"Bestätige mit ",f("b",{},"„Installieren“"),"."),f("li",{},"Öffne die App über das neue Symbol.")),f("button",{class:"btn btn-gold btn-big",onclick:()=>{i=1,u()}},t?"Schon erledigt / weiter":"Weiter"),!r&&!t?f("p",{class:"muted small center"},"Am PC kannst du einfach weitermachen."):null),()=>{const d=f("button",{class:"btn btn-gold btn-big"},"🔔 Benachrichtigungen erlauben"),m=f("div",{class:"stack"},f("div",{class:"big-emoji"},"🔔"),f("h2",{class:"title"},"Push-Nachrichten"),f("p",{class:"muted center"},"Du bekommst eine Erinnerung um 21, 22 und 23 Uhr (nur wenn du noch nicht abgehakt hast) und siehst, wenn jemand postet, kommentiert oder dir ein Goonie gibt."),d,f("button",{class:"btn btn-grey",onclick:c},"Später"));return d.onclick=async()=>{Pe(d,!0);try{await kp(),localStorage.removeItem("pushOff"),G("Push ist an ✅","success"),c()}catch(y){Pe(d,!1),G(y.message,"error")}},Ap().then(y=>{y||(d.disabled=!0,d.textContent=t&&!s?"Erst zum Home-Bildschirm hinzufügen":"Push geht in diesem Browser nicht")}),m}];function c(){try{localStorage.setItem("onboarded","1")}catch{}n()}function u(){e.replaceChildren(f("div",{class:"card auth-card"},a[i]()))}return u(),e}const Ve="Handy so hinstellen, dass dein ganzer Körper im Bild ist.",GI=[{id:1,title:"30 Liegestütze am Stück",how:`30 saubere Liegestütze ohne Absetzen. Brust fast bis zum Boden, Arme oben ganz durchstrecken. Laut mitzählen. Wer absetzt, fängt bei 0 an. ${Ve}`},{id:2,title:"50 Kniebeugen",how:`50 Kniebeugen am Stück. Oberschenkel mindestens waagerecht, Fersen bleiben am Boden. Laut mitzählen. ${Ve}`},{id:3,title:"1 Minute Plank",how:`60 Sekunden Unterarmstütz. Körper gerade wie ein Brett, Po nicht hoch. Timer ins Bild halten oder laut mitzählen. ${Ve}`},{id:4,title:"40 Hampelmänner",how:`40 Hampelmänner am Stück. Hände klatschen über dem Kopf, Beine weit auseinander. Laut mitzählen. ${Ve}`},{id:5,title:"20 Burpees",how:`20 Burpees: in die Hocke, Beine nach hinten in den Liegestütz, 1 Liegestütz, Beine zurück, Strecksprung mit Klatschen über dem Kopf. Laut mitzählen. ${Ve}`},{id:6,title:"2 Minuten Wandsitzen",how:"Mit dem Rücken an die Wand, Knie im 90-Grad-Winkel, Arme vor der Brust verschränkt. 2 Minuten halten. Video: Anfang (erste 20 Sek) und Ende (letzte 20 Sek) mit Uhr im Bild."},{id:7,title:"30 Sit-ups",how:"30 Sit-ups: Füße am Boden, Hände an den Schläfen, Oberkörper bis die Ellbogen die Knie berühren. Laut mitzählen. Seitlich filmen."},{id:8,title:"20 Ausfallschritte pro Bein",how:`40 Ausfallschritte im Wechsel (20 pro Bein). Hinteres Knie fast bis zum Boden. Laut mitzählen. ${Ve}`},{id:9,title:"1 Minute Seilspringen",how:`60 Sekunden Seilspringen ohne Pause (ohne Seil: so tun als ob, Handgelenke kreisen mit). Füße immer in Bewegung. ${Ve}`},{id:10,title:"15 Dips am Stuhl",how:"Hände hinter dir auf eine feste Stuhlkante, Beine nach vorne gestreckt. 15 mal runter bis die Oberarme waagerecht sind und wieder hoch. Stuhl an die Wand stellen, damit er nicht wegrutscht. Seitlich filmen."},{id:11,title:"100 Mountain Climbers",how:"100 Mountain Climbers (jedes Knie zur Brust zählt 1). Liegestützposition, Po unten. Laut mitzählen. Seitlich filmen."},{id:12,title:"5x Treppe hoch und runter",how:"Eine ganze Treppe (mind. 10 Stufen) 5 mal hoch und wieder runter, zügig gehen, nicht rennen, Geländer benutzen. Video: Start unten und Ende unten, laut die Runden zählen."},{id:13,title:"30 Sek Seitstütz pro Seite",how:`Seitstütz auf dem Unterarm, Körper gerade. 30 Sekunden links, dann 30 Sekunden rechts. ${Ve}`},{id:14,title:"50 Russian Twists",how:"Hinsetzen, Füße leicht vom Boden heben, Oberkörper leicht zurück. Hände zusammen von links nach rechts zum Boden drehen. Jede Seite zählt 1, also 50 Berührungen. Laut mitzählen."},{id:15,title:"20 Sprung-Kniebeugen",how:`20 Kniebeugen, aus jeder Kniebeuge kraftvoll hochspringen und weich landen. Laut mitzählen. ${Ve}`},{id:16,title:"10 Klatsch-Liegestütze",how:`10 Liegestütze, bei denen du oben kurz in die Hände klatschst. Wer es nicht schafft: 25 normale Liegestütze. Laut mitzählen. ${Ve}`},{id:17,title:"25 Superman",how:"Auf den Bauch legen, Arme nach vorne. 25 mal gleichzeitig Arme, Brust und Beine vom Boden heben, 1 Sekunde halten, ablegen. Laut mitzählen. Seitlich filmen."},{id:18,title:"20 Liegestütze + 20 Kniebeugen + 20 Sit-ups",how:`Erst 20 Liegestütze, dann 20 Kniebeugen, dann 20 Sit-ups. Pausen nur zwischen den Übungen. Laut mitzählen. ${Ve}`},{id:19,title:"3x 30 Sek Plank",how:`3 Runden: 30 Sekunden Unterarmstütz, 15 Sekunden Pause. Laut die Runde ansagen. ${Ve}`},{id:20,title:"20 Meter Bärengang",how:"Auf Händen und Füßen gehen, Knie knapp über dem Boden, Po unten. 20 Meter (z. B. Flur hin und zurück, bis es 20 m sind). Strecke kurz ins Bild zeigen."},{id:21,title:"30 Schritte Entengang",how:`Tief in die Hocke, Hände hinter den Kopf, so 30 Schritte gehen. Laut mitzählen. ${Ve}`},{id:22,title:"20 Meter Krebsgang",how:"Hinsetzen, Hände hinter dir, Po hoch: so rückwärts auf Händen und Füßen 20 Meter laufen. Strecke kurz ins Bild zeigen."},{id:23,title:"50 Wadenheben",how:"Auf eine Treppenstufe stellen (Fersen frei), am Geländer festhalten. 50 mal ganz auf die Zehenspitzen und wieder runter. Laut mitzählen. Beine im Bild."},{id:24,title:"15 Pike-Liegestütze",how:"Liegestütz mit Po hoch (umgedrehtes V), Kopf zwischen den Händen Richtung Boden senken und wieder hoch. 15 Wiederholungen. Laut mitzählen. Seitlich filmen."},{id:25,title:"20 Kniebeugen mit vollem Rucksack",how:"Schulrucksack mit Büchern füllen (spürbar schwer), aufsetzen. 20 tiefe Kniebeugen. Am Anfang kurz zeigen, wie voll der Rucksack ist. Laut mitzählen."},{id:26,title:"1 Runde durch deine Straße joggen",how:"Joggen von deiner Haustür bis zum Ende deiner Straße und zurück (mind. 300 m insgesamt). Nur auf dem Gehweg, auf Verkehr achten. Video: Start an der Haustür (Straßenschild oder Hausnummer zeigen), Wendepunkt kurz filmen, Ende an der Haustür außer Atem."},{id:27,title:"60 Sek auf einem Bein, Augen zu",how:`Auf einem Bein stehen, Augen zu, Arme verschränkt. 60 Sekunden. Wer das Bein absetzt, fängt von vorn an. Neben einer Wand oder Couch, falls man kippt. ${Ve}`},{id:28,title:"Gedicht über deinen Fail vortragen",how:"Das Gedicht unten mit ernster Stimme und einer Hand auf dem Herzen vortragen. Am Ende verbeugen.",script:`Ich hatte einen klaren Plan,
doch dann fing ich das Zweifeln an.
Nun steh ich hier mit rotem Kopf
und bin ein schwacher armer Tropf.`},{id:29,title:"30 Sek Opern-Arie „Ich habe versagt“",how:"Den Text unten wie ein Opernsänger singen: laut, dramatisch, mit ausgestreckten Armen. Jede Zeile mindestens 5 Sekunden lang ziehen.",script:`Iiiich haaabe versaaagt!
Oooh weeeh, oooh weeeh!
Der Streak ist daaahiiin,
ich schäääme miiich so seeehr!
Vergeeebt miiir, Freuuunde!
Moooorgen wiiird besseeeer!`},{id:30,title:"30-Sek-Werbespot für die App",how:"Den Text unten wie in einer Fernsehwerbung sprechen: grinsen, Daumen hoch, Handy mit der App in die Kamera halten.",script:`Du willst endlich durchziehen?
Du willst Gotti werden?
Dann hol dir jetzt die Streak-App!
Abhaken, Goonies sammeln, aufsteigen.
Und wenn du versagst …
so wie ich gerade …
bekommst du eine Bestrafung.
Die Streak-App. Ehrlich bleiben lohnt sich.`},{id:31,title:"Entschuldigungs-Rap mit Kochlöffel",how:"Kochlöffel als Mikro nehmen und den Rap unten im Takt rappen. Mit der freien Hand Rapper-Bewegungen machen.",script:`Yo, yo, hier kommt mein Sorry-Track,
mein Streak ist leider komplett weg.
Ich hab gesagt, ich zieh es durch,
jetzt sitz ich hier und fühl mich schlecht wie ein Lurch.
An meine Crew, es tut mir leid,
ab morgen bin ich wieder bereit!
Kochlöffel runter, Mic drop – peace!`},{id:32,title:"1 Minute Hühnertanz",how:"Den Hühnertanz 60 Sekunden lang tanzen: Arme als Flügel, Kopf vor und zurück, dabei gackern. Ohne Pause. Ganzer Körper im Bild."},{id:33,title:"30 Sek Fortnite-Emote",how:"Den Fortnite-Emote „Default Dance“ 30 Sekunden lang nachtanzen (oder „Take the L“). Ganzer Körper im Bild, am Anfang sagen, welcher Emote es ist."},{id:34,title:"Zungenbrecher 3x fehlerfrei",how:"Den Satz unten 3 mal hintereinander schnell und ohne Fehler sagen. Bei einem Fehler zählt der Durchgang nicht, dann nochmal.",script:`Fischers Fritz fischt frische Fische,
frische Fische fischt Fischers Fritz.`},{id:35,title:"ABC rückwärts",how:"Das ABC von Z bis A rückwärts aufsagen, ohne abzulesen. Bei einem Fehler oder Hänger von vorn beginnen. Gesicht im Bild."},{id:36,title:"Mit der schwachen Hand schreiben",how:"Mit der Hand, mit der du NICHT schreibst, den Satz unten auf ein Blatt schreiben. Beim Schreiben filmen, am Ende das Blatt in die Kamera halten.",script:"Ich schaffe das. Morgen hake ich wieder ab."},{id:37,title:"1-Minuten-Vortrag über Socken",how:"Eine Socke in der Hand halten und den Vortrag unten mit ernster Lehrer-Stimme halten.",script:`Liebe Mitglieder, heute geht es um ein unterschätztes Kleidungsstück: die Socke.
Die Socke schützt unseren Fuß vor Kälte, Blasen und schlechten Gerüchen.
Sie wurde vermutlich schon vor über 2000 Jahren getragen.
Eine Socke allein ist traurig. Erst zu zweit ist sie vollständig.
Genau wie wir: Allein schafft man den Streak schwer, zusammen schaffen wir ihn.
Deshalb merkt euch: Seid wie eine Socke. Bleibt zusammen.
Vielen Dank für eure Aufmerksamkeit.`},{id:38,title:"Deinen Fail als Sportkommentator",how:"Den Text unten wie ein aufgeregter Fußball-Kommentator sprechen. Statt [NAME] deinen Namen sagen. Schnell und laut!",script:`Und hier kommt [NAME], der Favorit, die Fans jubeln!
Tag für Tag, eine perfekte Serie, unglaublich stark!
Doch was ist das? Er wird langsamer!
Die Konzentration lässt nach!
Nein! Nein! NEIN!
Da ist es passiert! Der Streak ist gerissen!
Das Stadion ist fassungslos!
Aber [NAME] steht wieder auf, meine Damen und Herren!
Das Comeback beginnt morgen!`},{id:39,title:"30 Sek Beatboxen",how:"Den Beat „Boots and Cats“ 30 Sekunden ohne Pause beatboxen: „Bum (Boots) – Tss – Ka (Cats) – Tss“ immer im Wechsel, mit einer Hand vor dem Mund. Gesicht im Bild."},{id:40,title:"30 Sek wie ein Affe",how:"Mach 30 Sekunden einen Affen nach: Affen-Geräusche, auf die Brust trommeln, mit den Armen schwingen, rumhüpfen. Ganzer Körper im Bild."},{id:41,title:"Nachrichtensprecher",how:"An einen Tisch setzen, gerade sitzen, ernst in die Kamera schauen und die Meldung unten wie in der Tagesschau vorlesen.",script:`Guten Abend, meine Damen und Herren.
Ich begrüße Sie zu den Nachrichten.
Eine Eilmeldung erreicht uns heute aus dem Kinderzimmer.
Der Streak eines bisher als stark geltenden Teilnehmers ist überraschend gerissen.
Augenzeugen berichten von großer Enttäuschung in der Gruppe.
Experten rechnen jedoch schon morgen mit einem Neuanfang.
Die Bestrafung wurde soeben vollzogen.
Das Wetter: Für morgen werden wieder Erfolge erwartet.
Das waren die Nachrichten. Guten Abend.`},{id:42,title:"Jedem ein Kompliment",how:"Jedes Mitglied der Gruppe mit Namen ansprechen und ihm ein ehrliches Kompliment machen (mindestens ein ganzer Satz pro Person). Gesicht im Bild."},{id:43,title:"In eine Zitronenscheibe beißen",how:"Eine Zitrone aufschneiden, in eine Scheibe beißen und 5 Sekunden kauen, ohne das Gesicht zu verziehen. Gesicht nah im Bild. Wer das Gesicht verzieht, nimmt eine zweite Scheibe."},{id:44,title:"Zimmer aufräumen",how:"Dein Zimmer komplett aufräumen: Boden frei, Kleidung weg, Bett gemacht, Schreibtisch ordentlich. Video: 10 Sek Vorher-Rundgang, dann 10 Sek Nachher-Rundgang aus demselben Blickwinkel."},{id:45,title:"Bett frisch beziehen",how:"Bettwäsche abziehen und frisch beziehen (Bezug, Kissen, Laken). Video: altes Bett, Abziehen kurz zeigen, fertiges Bett."},{id:46,title:"Spülmaschine oder Abwasch",how:"Die Spülmaschine komplett ausräumen und alles einräumen, oder den kompletten Abwasch von Hand machen. Video: Vorher (volle Maschine/Spüle) und Nachher (leer)."},{id:47,title:"Müll rausbringen",how:"Alle Mülleimer im Haus leeren (Küche, Bad, dein Zimmer) und den Müll zur Tonne bringen. Video: volle Eimer, Weg zur Tonne, leere Eimer."},{id:48,title:"Schuhe putzen",how:"Mindestens 2 Paar Schuhe putzen (Dreck abbürsten, Sohlen sauber machen). Video: Schuhe vorher, beim Putzen, Schuhe nachher."},{id:49,title:"Schreibtisch aufräumen",how:"Schreibtisch komplett frei räumen, abwischen und ordentlich wieder einräumen. Video: Vorher und Nachher aus demselben Blickwinkel."},{id:50,title:"Doppelt",how:"Die App hat dir zwei neue Bestrafungen gezogen. Mach beide hintereinander im selben Video.",double:!0}],QI=n=>GI.find(e=>e.id===n)||null;function Rp(n=[]){const e=n.map(QI).filter(Boolean),t=e.filter(r=>!r.double);return t.length?t:e}function Li(n,e,{compact:t=!1}={}){const r=Rp(n||[]),s=f("div",{class:`pun-details ${t?"compact":""}`});return r.length?(n&&n.length>1&&s.append(f("div",{class:"pun-double"},"✌️ Doppelt: beide Aufgaben im selben Video")),r.forEach((i,a)=>{s.append(f("div",{class:"pun-title"},r.length>1?`${a+1}. ${i.title}`:i.title),f("div",{class:"pun-how"},f("b",{},"So geht’s: "),i.how)),i.script&&s.append(f("div",{class:"pun-script"},f("div",{class:"pun-script-label"},"📜 Dein Text"),i.script))}),s.append(f("div",{class:"pun-safe"},"Nur bekleidet filmen, nichts Gefährliches. Max. 60 Sekunden.")),s):(s.append(f("div",{class:"pun-title"},e||"Bestrafung")),s)}function JI(n){return Rp(n||[]).filter(e=>e.script).map(e=>e.script).join(`

`)}function YI(n=2600){const e=f("canvas",{class:"confetti"});document.body.append(e);const t=e.getContext("2d"),r=Math.min(2,window.devicePixelRatio||1);e.width=innerWidth*r,e.height=innerHeight*r,t.scale(r,r);const s=["#ffd23f","#3fa9ff","#a45bff","#ff4fa3","#5ad35a","#fff"],i=Array.from({length:140},()=>({x:innerWidth/2+(Math.random()-.5)*80,y:innerHeight*.38,vx:(Math.random()-.5)*14,vy:-Math.random()*15-5,r:Math.random()*Math.PI,vr:(Math.random()-.5)*.4,w:6+Math.random()*7,c:s[Math.floor(Math.random()*s.length)]})),a=performance.now(),c=u=>{t.clearRect(0,0,innerWidth,innerHeight);for(const d of i)d.vy+=.42,d.vx*=.99,d.x+=d.vx,d.y+=d.vy,d.r+=d.vr,t.save(),t.translate(d.x,d.y),t.rotate(d.r),t.fillStyle=d.c,t.fillRect(-d.w/2,-d.w/4,d.w,d.w/2),t.restore();u-a<n?requestAnimationFrame(c):e.remove()};requestAnimationFrame(c)}function Tc(n){var e;try{(e=navigator.vibrate)==null||e.call(navigator,n)}catch{}}function Ic(n,e){const t=hi[_e[e].group].main;Qe(r=>{const s=f("div",{class:"fx-stage"}),i=Rt(Tr(e));return i.classList.add("fx-badge","fx-spin"),s.append(f("div",{class:"fx-rays",style:{"--c":t}}),i),setTimeout(()=>{YI(),Tc([40,60,40])},700),f("div",{class:"fx"},f("div",{class:"fx-label"},"AUFSTIEG!"),s,f("div",{class:"fx-name",style:{color:t}},_e[e].name),f("div",{class:"muted center"},`von ${_e[n].name}`),f("button",{class:"btn btn-gold btn-big",onclick:r},"Weiter"))},{full:!0})}function Pp(n,e,t,r){Qe(s=>{const i=f("div",{class:"fx-stage"}),a=Rt(Tr(n)),c=Rt(Tr(n));a.classList.add("fx-badge","fx-half","fx-left"),c.classList.add("fx-badge","fx-half","fx-right");const u=Rt('<svg class="fx-crack" viewBox="0 0 100 104"><path d="M50 0 L44 22 L56 38 L45 55 L57 72 L48 104" fill="none" stroke="#1a0b2e" stroke-width="4"/></svg>'),d=Rt(Tr(e));return d.classList.add("fx-badge","fx-next"),i.append(a,c,u,d),setTimeout(()=>Tc([120,50,200]),600),f("div",{class:"fx fx-down"},f("div",{class:"fx-label fx-label-red"},"ABSTIEG"),i,f("div",{class:"fx-name"},_e[e].name),f("div",{class:"muted center"},`von ${_e[n].name} · Ring auf 0 %`),r?f("div",{class:"fx-reason"},r):null,f("button",{class:"btn btn-blue btn-big",onclick:s},"Weiter"))},{full:!0,onClose:t})}function XI(n){n.classList.remove("pop"),n.offsetWidth,n.classList.add("pop");const e=f("span",{class:"plus-one"},"+1");n.append(e),setTimeout(()=>e.remove(),900),Tc(25)}function ZI(n){var c,u;if(!n)return;const e=`seenRank:${n.id}`;let t=null;try{t=localStorage.getItem(e)}catch{}const r=n.rankIndex||0;try{localStorage.setItem(e,String(r))}catch{}if(t==null)return;const s=String(((u=(c=n.resetAt)==null?void 0:c.toMillis)==null?void 0:u.call(c))||0);let i=null;try{i=localStorage.getItem(`seenReset:${n.id}`),localStorage.setItem(`seenReset:${n.id}`,s)}catch{}if(i!==s&&s!=="0")return;const a=Number(t);r>a?Ic(a,r):r<a&&Pp(a,r,null,n.punishmentOpen?"Grund: Bestrafung nicht bis 21:00 gemacht (−50 % Ring)":"Grund: Tag nicht geschafft oder nicht beantwortet")}function Cp(n,e){try{localStorage.setItem(`seenRank:${n.id}`,String(e))}catch{}}function eb(){return window.MediaRecorder?["video/mp4;codecs=avc1","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"].find(e=>{var t;return(t=MediaRecorder.isTypeSupported)==null?void 0:t.call(MediaRecorder,e)})||"":null}const ph=()=>{var n;return!!((n=navigator.mediaDevices)!=null&&n.getUserMedia&&window.MediaRecorder)};function br(n,e,t){let r=null,s=null,i=[],a=null,c=0,u="user";const d=()=>{r==null||r.getTracks().forEach(m=>m.stop()),r=null};Qe(m=>{const y=f("div",{class:"rec"}),T=f("video",{class:"rec-video",playsInline:!0,muted:!0,autoplay:!0});T.setAttribute("playsinline","");const k=f("div",{class:"rec-clock"},`0 / ${ur} s`),C=f("div",{class:"rec-controls"}),D=Li(t,e,{compact:!0});D.classList.add("hidden");const N=f("div",{class:"rec-head"},f("div",{class:"pun-text small"},e),f("div",{class:"row gap"},f("button",{class:"btn btn-blue btn-small",onclick:()=>D.classList.toggle("hidden")},"📋 Anleitung"),f("button",{class:"btn btn-grey btn-small",onclick:()=>{d(),clearInterval(c),m()}},"✕"))),x=JI(t),O=x?f("div",{class:"rec-prompter"},x):null,$=f("div",{class:"rec-hint"},"⚠️ Nur bekleidet filmen, nichts Gefährliches. Max. 60 Sekunden.");y.append(N,D,f("div",{class:"rec-stage"},T,k,O),$,C),x||D.classList.remove("hidden");const H=f("input",{type:"file",accept:"video/*",capture:"user",style:{display:"none"}});H.onchange=async()=>{var _;const w=(_=H.files)==null?void 0:_[0];if(!w)return;if(await tb(w)>ur+1.5){G("Das Video ist länger als 60 Sekunden","error");return}a=w,v()},y.append(H);const me=async()=>{d();try{r=await navigator.mediaDevices.getUserMedia({video:{facingMode:u,width:{ideal:720},height:{ideal:1280}},audio:!0}),T.srcObject=r,T.muted=!0,await T.play().catch(()=>{}),te()}catch{C.replaceChildren(f("p",{class:"muted center"},"Kein Zugriff auf die Kamera. Erlaube die Kamera in den Einstellungen oder nimm das Video mit der Kamera-App auf."),f("button",{class:"btn btn-gold btn-big",onclick:()=>H.click()},"📹 Video aufnehmen"))}},te=()=>{k.textContent=`0 / ${ur} s`,C.replaceChildren(f("button",{class:"btn btn-grey btn-round",title:"Kamera wechseln",onclick:()=>{u=u==="user"?"environment":"user",me()}},"🔄"),f("button",{class:"rec-btn","aria-label":"Aufnahme starten",onclick:I}),f("button",{class:"btn btn-grey btn-round",title:"Datei wählen",onclick:()=>H.click()},"📁"))},I=()=>{i=[];const w=eb();try{s=new MediaRecorder(r,{...w?{mimeType:w}:{},videoBitsPerSecond:15e5})}catch{s=new MediaRecorder(r)}s.ondataavailable=_=>_.data.size&&i.push(_.data),s.onstop=()=>{a=new Blob(i,{type:s.mimeType||w||"video/webm"}),v()},s.start(1e3);const b=Date.now();k.classList.add("live"),c=setInterval(()=>{const _=Math.floor((Date.now()-b)/1e3);k.textContent=`● ${_} / ${ur} s`,_>=ur&&g()},250),C.replaceChildren(f("button",{class:"btn btn-red btn-big",onclick:g},"■ Fertig"))},g=()=>{clearInterval(c),k.classList.remove("live"),(s==null?void 0:s.state)==="recording"&&s.stop()},v=()=>{O==null||O.classList.add("hidden"),d(),T.srcObject=null,T.src=URL.createObjectURL(a),T.muted=!1,T.controls=!0,T.loop=!0,T.play().catch(()=>{}),k.textContent="Vorschau";const w=f("button",{class:"btn btn-gold btn-big"},"⬆️ Hochladen und posten"),b=f("div",{class:"progress"},f("div",{class:"progress-fill"}));w.onclick=()=>E(w,b),C.replaceChildren(f("button",{class:"btn btn-grey",onclick:()=>{O==null||O.classList.remove("hidden"),T.controls=!1,T.removeAttribute("src"),ph()?me():H.click()}},"Nochmal"),w,b)},E=async(w,b)=>{Pe(w,!0,"Lädt hoch …");try{const _=await le("/upload/sign",{kind:"video",day:n});_.mock||await Dp(_,a,qt=>{b.firstChild.style.width=`${qt}%`});const ye=await le("/punishment/done",{day:n,publicId:_.publicId});m(),U.me&&Cp(U.me,ye.after.rankIndex),ye.repaired&&ye.after.rankIndex>ye.before.rankIndex?Ic(ye.before.rankIndex,ye.after.rankIndex):G(ye.repaired?`Tag ${n} wiedergutgemacht ✅`:"Bestrafung erledigt 💪","success")}catch(_){Pe(w,!1),G(_.message||"Upload fehlgeschlagen","error")}};return ph()?me():C.replaceChildren(f("button",{class:"btn btn-gold btn-big",onclick:()=>H.click()},"📹 Video aufnehmen")),y},{full:!0,dismissable:!1,onClose:()=>{d(),clearInterval(c)}})}function tb(n){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.onloadedmetadata=()=>{e(t.duration||0),URL.revokeObjectURL(t.src)},t.onerror=()=>e(0),t.src=URL.createObjectURL(n)})}function Dp(n,e,t){return new Promise((r,s)=>{const i=new FormData;i.append("file",e),i.append("api_key",n.apiKey),i.append("timestamp",String(n.timestamp)),i.append("public_id",n.publicId),i.append("signature",n.signature),n.type&&n.type!=="upload"&&i.append("type",n.type);const a=new XMLHttpRequest;a.open("POST",`https://api.cloudinary.com/v1_1/${n.cloudName}/${n.resourceType}/upload`),a.upload.onprogress=c=>c.lengthComputable&&(t==null?void 0:t(Math.round(c.loaded/c.total*100))),a.onload=()=>a.status<300?r(JSON.parse(a.responseText)):s(new Error("Upload fehlgeschlagen")),a.onerror=()=>s(new Error("Upload fehlgeschlagen, Verbindung prüfen")),a.send(i)})}const mh={done:{label:"Geschafft",cls:"st-done",icon:"✅"},fail:{label:"Nicht geschafft",cls:"st-fail",icon:"❌"},open:{label:"Offen",cls:"st-open",icon:"⏳"}},gh=new Map,nb=(n,e)=>JSON.stringify([n.type,n.videoUrl,n.videoId,n.viewedBy,U.users.size,n.gooniedBy,n.commentCount,n.repaired,n.final,e==null?void 0:e.name,e==null?void 0:e.photoURL,n.rankIndex,U.uid]);function bc(n,{detail:e=!1}={}){const t=U.users.get(n.uid),r=nb(n,t),s=gh.get(n.id);if(!e&&s&&s.k===r)return s.el.querySelector(".post-time").textContent=Ni(n.createdAt,ae()),s.el;const i=rb(n,t);return e||gh.set(n.id,{k:r,el:i}),i}function rb(n,e){const t=mh[n.type]||mh.open,r=n.uid===U.uid,s=(e==null?void 0:e.name)||"Unbekannt",i=n.type==="done"?n.repaired?`${s} hat Tag ${n.day} wiedergutgemacht`:`${s} hat Tag ${n.day} geschafft`:n.type==="fail"?n.auto?`${s} hat Tag ${n.day} nicht beantwortet`:`${s} hat Tag ${n.day} nicht geschafft`:`${s}: Tag ${n.day} – Nein – offen (nicht geantwortet)`,a=f("article",{class:`card post ${t.cls}`});if(a.append(f("header",{class:"post-head"},f("a",{href:`#/u/${n.uid}`,class:"post-ava"},jt(e,46)),f("div",{class:"post-meta"},f("a",{href:`#/u/${n.uid}`,class:"post-name"},s," ",Jr(n.rankIndex??0,22)),f("div",{class:"post-sub"},`Tag ${n.day} · `,f("span",{class:"post-time"},Ni(n.createdAt,ae())))),f("span",{class:`pill ${t.cls}`},`${t.icon} ${n.repaired?"Wiedergutgemacht":t.label}`)),f("div",{class:"post-title"},i)),n.promoted&&a.append(f("div",{class:"post-rank up"},"⬆️ Aufstieg auf ",f("b",{},Zl(n.rankIndex)))),n.demoted&&a.append(f("div",{class:"post-rank down"},"⬇️ Abstieg auf ",f("b",{},Zl(n.rankIndex)))),n.reason&&a.append(f("div",{class:"qa"},f("div",{class:"qa-q"},"Woran lag es?"),f("div",{class:"qa-a"},n.reason))),n.better&&a.append(f("div",{class:"qa"},f("div",{class:"qa-q"},"Was mache ich nächstes Mal besser?"),f("div",{class:"qa-a"},n.better))),n.punishment){const y=f("div",{class:"pun-box"},f("div",{class:"pun-row"},f("div",{class:"pun-label"},f("b",{},"Bestrafung: "),n.punishment),f("button",{class:"btn btn-blue btn-icon",title:"Anleitung",onclick:()=>ob(n)},"📋")));if(n.videoId)y.append(ab(n,r));else if(n.videoUrl)y.append(f("div",{class:"pun-missing"},"🎥 Video vorhanden"));else{const T=n.punDeadline&&ae()>n.punDeadline;y.append(f("div",{class:`pun-missing ${T?"late":""}`},T?"❗ Bestrafung offen – Frist verpasst":`🎥 Video fehlt noch · Frist ${Rr(n.punDeadline)} Uhr`)),r&&y.append(f("button",{class:"btn btn-gold",onclick:()=>br(n.day,n.punishment,n.punIds)},n.type==="open"&&!T?"🎥 Wiedergutmachen":"🎥 Bestrafung machen"))}a.append(y)}const c=(n.gooniedBy||[]).length,u=(n.gooniedBy||[]).includes(U.uid),d=f("button",{class:`goonie-btn ${u?"on":""} ${r?"own":""}`,"aria-label":"Goonie geben"});d.append(Rt(lT),f("span",{class:"g-count"},String(c)),f("span",{class:"g-label"},c===1?"Goonie":"Goonies")),d.onclick=async()=>{if(r){sb(n);return}const y=!d.classList.contains("on");d.classList.toggle("on",y);const T=d.querySelector(".g-count");T.textContent=String(Number(T.textContent)+(y?1:-1)),y&&XI(d);try{await le("/goonie",{postId:n.id,on:y})}catch(k){d.classList.toggle("on",!y),T.textContent=String(Number(T.textContent)+(y?-1:1)),G(k.message,"error")}};const m=f("button",{class:"comment-btn",onclick:()=>ib(n)},"💬 ",String(n.commentCount||0));return a.append(f("footer",{class:"post-foot"},d,m)),a}function sb(n){const e=(n.gooniedBy||[]).map(t=>U.users.get(t)).filter(Boolean);Qe(f("div",{class:"stack"},f("h2",{class:"title"},"Goonies von"),e.length?f("div",{class:"list"},e.map(t=>f("a",{class:"list-row",href:`#/u/${t.id}`},jt(t,36),f("span",{},t.name)))):f("p",{class:"muted center"},"Noch keine. Eigene Posts kannst du nicht goonien.")),{sheet:!0})}function ib(n){let e=null;Qe(t=>{const r=f("div",{class:"comments"},f("p",{class:"muted center"},"Lädt …")),s=f("textarea",{class:"input",rows:2,maxLength:_s,placeholder:"Kommentar schreiben …"}),i=f("span",{class:"muted small"},`0/${_s}`);s.oninput=()=>{i.textContent=`${s.value.length}/${_s}`};const a=f("button",{class:"btn btn-gold"},"Senden");return a.onclick=async()=>{const c=s.value.trim();if(c){a.disabled=!0;try{const u=await _T(n.id,c);s.value="",i.textContent=`0/${_s}`,le("/comment/notify",{postId:n.id,commentId:u}).catch(()=>{})}catch{G("Kommentar konnte nicht gesendet werden","error")}a.disabled=!1}},e=gT(n.id,c=>{r.replaceChildren(...c.length?c.map(u=>{const d=U.users.get(u.uid);return f("div",{class:"comment"},jt(d,32),f("div",{class:"comment-body"},f("div",{class:"comment-head"},f("b",{},(d==null?void 0:d.name)||"?")," ",f("span",{class:"muted small"},Ni(u.createdAt,ae()))),f("div",{class:"comment-text"},u.text)),u.uid===U.uid&&f("button",{class:"comment-del",title:"Löschen",onclick:async()=>{await Cn("Kommentar löschen?",null,"Löschen","red")&&(await yT(n.id,u.id),le("/comment/notify",{postId:n.id}).catch(()=>{}))}},"🗑"))}):[f("p",{class:"muted center"},"Noch keine Kommentare.")]),r.scrollTop=r.scrollHeight}),f("div",{class:"stack"},f("div",{class:"row between"},f("h2",{class:"title"},"Kommentare"),f("button",{class:"btn btn-grey btn-icon",onclick:t},"✕")),r,s,f("div",{class:"row between"},i,a))},{sheet:!0,onClose:()=>e==null?void 0:e()})}let je=null;function Ur(n){(je==null?void 0:je.id)!==n&&(Ur.leave(),je={id:n,post:void 0},je.unsub=mT(n,t=>{je.post=t,Jf()}));const e=je.post;return f("div",{class:"page"},f("a",{class:"back",href:"#/"},"← Zum Feed"),e===void 0?f("p",{class:"muted center"},"Lädt …"):e?bc(e):f("p",{class:"muted center"},"Post nicht gefunden."))}Ur.live=!0;Ur.leave=()=>{je==null||je.unsub(),je=null};function ob(n){Qe(e=>f("div",{class:"stack"},f("div",{class:"eyebrow eyebrow-red"},`Bestrafung · Tag ${n.day}`),Li(n.punIds,n.punishment),f("button",{class:"btn btn-grey",onclick:e},"Schließen")),{sheet:!0})}function ab(n,e){const t=n.viewedBy||[],r=Math.max(0,[...U.users.values()].filter(i=>i.id!==n.uid&&!i.bot).length),s=f("div",{class:"vid-tile"});return e?s.append(f("button",{class:"btn btn-blue",onclick:()=>_h(n,!0)},"▶ Dein Video ansehen"),f("div",{class:"muted small"},`👁 ${t.length} von ${r} haben es gesehen`)):t.includes(U.uid)?s.append(f("div",{class:"vid-seen"},"👁 Schon angesehen")):s.append(f("button",{class:"btn btn-gold",onclick:()=>_h(n,!1)},"▶ Video ansehen (nur 1x)"),f("div",{class:"muted small"},"Du kannst dieses Video nur einmal ansehen.")),s}async function _h(n,e){!e&&!await Cn("Video jetzt ansehen?","Jedes Bestrafungsvideo kannst du nur einmal ansehen. Danach ist es für dich weg.","▶ Ansehen","gold")||Qe(t=>{const r=f("div",{class:"vp-stage"},f("div",{class:"boot-flame"})),s=f("div",{class:"vp-bar"},f("div",{class:"vp-fill"})),i=f("div",{class:"vp-info"},"Lädt …"),a=f("div",{class:"vp"},f("div",{class:"row between"},f("div",{class:"pun-text small"},n.punishment),f("button",{class:"btn btn-grey btn-small",onclick:t},"✕")),r,s,i);return le("/video/view",{postId:n.id}).then(c=>{if(c.mock){r.replaceChildren(f("div",{class:"vp-mock"},"🎥 Testmodus: hier würde das Video laufen")),i.textContent=e?"Dein Video":"Angesehen ✓";return}const u=f("video",{class:"vp-video",src:c.video,poster:c.poster,autoplay:!0,playsInline:!0,preload:"auto",disablePictureInPicture:!0});u.setAttribute("playsinline",""),u.setAttribute("controlslist","nodownload noplaybackrate"),u.addEventListener("contextmenu",m=>m.preventDefault());const d=f("div",{class:"vp-mark"},`${c.viewer} · ${new Date().toLocaleDateString("de-DE")}`);r.replaceChildren(u,d),u.onclick=()=>u.paused?u.play():u.pause(),u.ontimeupdate=()=>{u.duration&&(s.firstChild.style.width=`${u.currentTime/u.duration*100}%`)},u.onplay=()=>{i.textContent=e?"Dein Video · Tippen = Pause":"Nur 1x · Tippen = Pause"},u.onended=()=>{i.textContent=e?"Ende":"Ende. Dieses Video ist jetzt für dich weg.",e||setTimeout(t,1500)},u.play().catch(()=>{i.textContent="Tippe aufs Video zum Starten"})}).catch(c=>{r.replaceChildren(f("div",{class:"vp-mock"},c.message)),i.textContent=""}),a},{full:!0})}function Np(n){Qe(e=>{const t=f("div",{class:"stack"}),r=()=>{t.replaceChildren(f("div",{class:"eyebrow"},`Tag ${n}`),f("h2",{class:"title"},"Hast du es heute geschafft?"),f("p",{class:"muted center"},"Nur eine Antwort pro Tag. Sei ehrlich."),f("button",{class:"btn btn-green btn-big",onclick:a=>i(a.currentTarget,{result:"done"})},"Geschafft ✅"),f("button",{class:"btn btn-red btn-big",onclick:s},"Nicht geschafft ❌"))},s=()=>{const a=f("textarea",{class:"input",rows:3,maxLength:300,placeholder:"Woran lag es?"}),c=f("textarea",{class:"input",rows:3,maxLength:300,placeholder:"Was machst du nächstes Mal besser?"}),u=f("button",{class:"btn btn-red btn-big"},"Fertig");u.onclick=()=>{if(!a.value.trim()||!c.value.trim()){G("Bitte beide Felder ausfüllen","error");return}i(u,{result:"fail",reason:a.value,better:c.value})},t.replaceChildren(f("div",{class:"eyebrow"},`Tag ${n}`),f("h2",{class:"title"},"Nicht geschafft"),f("label",{class:"label"},"Woran lag es?"),a,f("label",{class:"label"},"Was machst du nächstes Mal besser?"),c,u,f("button",{class:"btn btn-grey",onclick:r},"Zurück")),a.focus()},i=async(a,c)=>{Pe(a,!0);try{const u=await le("/checkin",c);e(),U.me&&Cp(U.me,u.after.rankIndex),c.result==="done"?u.after.rankIndex>u.before.rankIndex?Ic(u.before.rankIndex,u.after.rankIndex):G(`Tag ${u.day} geschafft! 🔥`,"success"):u.after.rankIndex<u.before.rankIndex?Pp(u.before.rankIndex,u.after.rankIndex,()=>yh(u.day,u.punishment,u.punIds)):yh(u.day,u.punishment,u.punIds)}catch(u){Pe(a,!1),G(u.message,"error")}};return r(),t})}function yh(n,e,t){Qe(r=>f("div",{class:"stack"},f("div",{class:"eyebrow eyebrow-red"},"Deine Bestrafung"),Li(t,e),f("p",{class:"muted center"},"Zeit bis morgen 21:00. Sonst: −50 % Ring und „Bestrafung offen“."),f("button",{class:"btn btn-gold btn-big",onclick:()=>{r(),br(n,e,t)}},"🎥 Bestrafung machen"),f("button",{class:"btn btn-grey",onclick:r},"Später")))}function Vp(n){return n.final?"Endrang erreicht 👑":Ot(ae())<1?`Der Ring startet mit der Challenge am ${zn($s())} um 22:00`:`${sa(n.pct)} % ${n.rank.name} – noch ${sa(n.rest)} % bis ${n.next.name}`}function Op(){return[...U.users.values()].sort((n,e)=>e.rankIndex-n.rankIndex||e.progress-n.progress||e.doneCount-n.doneCount||n.name.localeCompare(e.name))}function Ro(n){const e=f("span",{class:"countdown"});return e.dataset.until=String(n),e.textContent=Lp(n-ae()),e}function Lp(n){if(n<=0)return"0:00:00";const e=Math.floor(n/1e3),t=Math.floor(e/86400),r=Math.floor(e%86400/3600),s=String(Math.floor(e%3600/60)).padStart(2,"0"),i=String(e%60).padStart(2,"0");return t>0?`${t} T ${r}:${s}:${i}`:`${r}:${s}:${i}`}function Po(n){const e=Li(n.punIds,n.punText,{compact:!0});return e.classList.add("hidden"),f("div",{class:"pun-mini"},f("div",{},f("b",{},"Bestrafung: "),n.punText),f("button",{class:"link-btn",onclick:t=>{e.classList.toggle("hidden"),t.currentTarget.textContent=e.classList.contains("hidden")?"📋 Anleitung zeigen":"Anleitung ausblenden"}},"📋 Anleitung zeigen"),e)}function cb(n){const e=n.days||{};for(let t=st;t>=1;t--){const r=e[t];if(r&&r.pun&&!r.punDone)return{day:t,e:r}}return null}function lb(n,e){const t=Ot(e),r=dd(e),s=n.days||{},i=n.joinedDay||1,a=[];if(t<1)return a.push(f("div",{class:"action-info"},f("div",{class:"eyebrow"},`Start am ${zn($s())} um 22:00`),f("div",{class:"big-count"},Ro($s())))),a;r&&r>=i&&!s[r]&&a.push(f("button",{class:"btn btn-gold btn-huge pulse",onclick:()=>Np(r)},"Heute abhaken",f("small",{},`Tag ${r} · bis 23:59`)));const c=cb(n);if(c){const u=e>=_o(c.day)||c.e.pen;c.e.s==="open"&&!u?a.push(f("div",{class:"alert alert-orange"},f("div",{},f("b",{},`Tag ${c.day} vergessen?`),` Mach es bis ${Rr(_o(c.day))} Uhr wieder gut: Bestrafung filmen, dann zählt der Tag als geschafft.`),Po(c.e),f("button",{class:"btn btn-orange",onclick:()=>br(c.day,c.e.punText,c.e.punIds)},"🎥 Wiedergutmachen"))):u?a.push(f("div",{class:"alert alert-red"},f("div",{},f("b",{},"Bestrafung offen ❗")," Frist verpasst (−50 % Ring). Nachholen entfernt den roten Hinweis."),Po(c.e),f("button",{class:"btn btn-red",onclick:()=>br(c.day,c.e.punText,c.e.punIds)},"🎥 Bestrafung nachholen"))):a.push(f("div",{class:"alert alert-purple"},f("div",{},f("b",{},"Bestrafung machen")," – Frist: ",Ro(_o(c.day))),Po(c.e),f("button",{class:"btn btn-gold",onclick:()=>br(c.day,c.e.punText,c.e.punIds)},"🎥 Bestrafung machen")))}if(r&&s[r]){const u=s[r].s==="done";a.push(f("div",{class:`done-note ${u?"ok":"no"}`},u?`Tag ${r} abgehakt ✅`:`Tag ${r}: nicht geschafft ❌`))}if((!a.length||!r&&t<=st)&&!(t>st)){if(!r){const u=ud(e),d=e<go(u)?go(u):go(u+1);a.push(f("div",{class:"action-info"},f("div",{class:"eyebrow"},`Abhaken ab ${fd(d)} Uhr`),f("div",{class:"big-count"},Ro(d))))}}return a}function ub(){const n=Op();return f("section",{class:"card final"},f("h2",{class:"title"},"🏆 Endstand"),f("div",{class:"list"},n.map((e,t)=>f("a",{class:"list-row",href:`#/u/${e.id}`},f("span",{class:`place place-${t+1}`},String(t+1)),jt(e,36),f("span",{class:"grow"},e.name),Jr(e.rankIndex,30),f("span",{class:"muted small"},`${e.doneCount}/${st}`)))))}function hb(n,e){const t=di(n,e),r=_e[t.rankIndex];return f("section",{class:"card status"},f("div",{class:"status-top"},f("a",{href:"#/me"},cc(t.rankIndex,t.pct,132,n.id)),f("div",{class:"status-info"},f("div",{class:"status-rank"},r.name),f("div",{class:"status-ring-text"},Vp(t)),t.full&&!t.final?f("div",{class:"tag tag-gold"},"⏳ Aufstieg wartet auf Bestätigung"):null,f("div",{class:"status-stats"},f("span",{class:"stat-chip"},"🔥 ",f("b",{},String(n.streak||0))," Streak"),f("span",{class:"stat-chip"},"💜 ",f("b",{},String(n.goonies||0)))))),n.punishmentOpen?f("div",{class:"red-flag"},"❗ Bestrafung offen"):null,f("div",{class:"status-actions"},lb(n,e)))}function Mp(){const n=U.me,e=ae(),t=f("div",{class:"page"});if(!n)return t;if(t.append(hb(n,e)),Ot(e)>st&&t.append(ub()),t.append(f("h3",{class:"section-title"},"Feed")),!U.postsLoaded)t.append(f("p",{class:"muted center"},"Lädt …"));else if(!U.posts.length)t.append(f("div",{class:"card empty"},f("div",{class:"empty-ico"},"🔥"),f("p",{},Ot(e)<1?"Noch ist es ruhig. Ab dem Start erscheinen hier alle Abhaken-Posts.":"Noch keine Posts.")));else{let r=null;for(const s of U.posts)s.day!==r&&(r=s.day,t.append(f("div",{class:"day-sep"},f("span",{},`Tag ${s.day}`),f("small",{},zn(va(s.day)))))),t.append(bc(s));U.feedHasMore&&t.append(f("button",{class:"btn btn-grey btn-big",style:{marginTop:"6px"},onclick:s=>{s.currentTarget.disabled=!0,s.currentTarget.textContent="Lädt …",hT()}},"Ältere Posts laden"))}return t}Mp.live=!0;function xp(){const n=f("input",{type:"file",accept:"image/*",style:{display:"none"}});document.body.append(n),n.onchange=()=>{var t;const e=(t=n.files)==null?void 0:t[0];n.remove(),e&&db(e)},n.click()}function db(n){const e=new Image,t=URL.createObjectURL(n);e.onload=()=>Qe(r=>{const s=Math.min(300,window.innerWidth-80),i=Math.max(s/e.width,s/e.height);let a=1,c=(s-e.width*i)/2,u=(s-e.height*i)/2;const d=f("img",{src:t,class:"crop-img",draggable:!1}),m=f("div",{class:"crop-view",style:{width:`${s}px`,height:`${s}px`}},d),y=()=>{const D=i*a;c=Math.min(0,Math.max(s-e.width*D,c)),u=Math.min(0,Math.max(s-e.height*D,u)),d.style.width=`${e.width*D}px`,d.style.transform=`translate(${c}px, ${u}px)`};y();let T=null;m.addEventListener("pointerdown",D=>{T={sx:D.clientX,sy:D.clientY,x:c,y:u},m.setPointerCapture(D.pointerId)}),m.addEventListener("pointermove",D=>{T&&(c=T.x+D.clientX-T.sx,u=T.y+D.clientY-T.sy,y())}),m.addEventListener("pointerup",()=>{T=null});const k=f("input",{type:"range",min:1,max:4,step:.01,value:1,class:"slider"});k.oninput=()=>{const D=(s/2-c)/(i*a),N=(s/2-u)/(i*a);a=Number(k.value),c=s/2-D*i*a,u=s/2-N*i*a,y()};const C=f("button",{class:"btn btn-gold btn-big"},"Speichern");return C.onclick=async()=>{Pe(C,!0,"Lädt hoch …");try{const D=i*a,N=document.createElement("canvas");N.width=512,N.height=512,N.getContext("2d").drawImage(e,-c/D,-u/D,s/D,s/D,0,0,512,512);const x=await new Promise($=>N.toBlob($,"image/jpeg",.88)),O=await le("/upload/sign",{kind:"avatar"});O.mock?G("Testmodus: Bild wird nicht hochgeladen"):(await Dp(O,x),await Yf({photoURL:`https://res.cloudinary.com/${O.cloudName}/image/upload/c_fill,w_256,h_256,q_auto/${O.publicId}.jpg`}),G("Profilbild gespeichert","success")),r()}catch(D){Pe(C,!1),G(D.message||"Fehler beim Hochladen","error")}},f("div",{class:"stack center-items"},f("h2",{class:"title"},"Bild zuschneiden"),f("p",{class:"muted center"},"Verschieben mit dem Finger, zoomen mit dem Regler."),m,k,C,f("button",{class:"btn btn-grey",onclick:r},"Abbrechen"))},{onClose:()=>URL.revokeObjectURL(t)}),e.src=t}function fb(n,e){const t=Ot(e),r=n.days||{},s=n.joinedDay||1,i=[];for(let a=1;a<=st;a++){const c=r[a];let u="cal-future",d="kommt noch";(c==null?void 0:c.s)==="done"?(u="cal-done",d=c.repaired?"geschafft (wiedergutgemacht)":"geschafft"):(c==null?void 0:c.s)==="fail"?(u="cal-fail",d="nicht geschafft"):(c==null?void 0:c.s)==="open"?(u="cal-open",d="offen"):a<s?(u="cal-skip",d="vor dem Beitritt"):(a===t||a===t-1)&&(u="cal-now",d="läuft"),i.push(f("div",{class:`cal-tile ${u}`,title:`Tag ${a} (${zn(va(a))}): ${d}`},f("span",{},String(a)),c!=null&&c.repaired?f("i",{},"↺"):null))}return f("div",{class:"calendar"},i)}function Zt(n){const e=U.users.get(n),t=f("div",{class:"page"});if(!e)return t.append(f("p",{class:"muted center"},U.usersLoaded?"Mitglied nicht gefunden.":"Lädt …")),t;const r=ae(),s=di(e,r),i=n===U.uid,a=f("div",{class:"profile-ava"},jt(e,84));i&&a.append(f("button",{class:"ava-edit",title:"Profilbild ändern",onclick:xp},"📷")),(qe==null?void 0:qe.uid)!==n&&(Zt.leave(),qe={uid:n,posts:null},qe.unsub=pT(n,d=>{qe.posts=d,Jf()}));const c=qe.posts,u=f("div",{class:"stack"},c==null?f("p",{class:"muted center"},"Lädt …"):c.length?c.map(d=>bc(d)):f("p",{class:"muted center"},"Noch keine Posts."));return t.append(f("section",{class:"card profile"},f("div",{class:"profile-head"},a,f("div",{},f("div",{class:"profile-name"},e.name),f("div",{class:"muted"},`@${e.username}`))),e.punishmentOpen?f("div",{class:"red-flag"},"❗ Bestrafung offen"):null,f("div",{class:"profile-badge"},cc(s.rankIndex,s.pct,190,e.id),f("div",{class:"profile-rank",style:{color:`var(--r-${_e[s.rankIndex].group})`}},_e[s.rankIndex].name),f("div",{class:"status-ring-text center"},Vp(s)),s.full&&!s.final?f("div",{class:"tag tag-gold"},"⏳ Aufstieg wartet auf Bestätigung"):null),f("div",{class:"stats"},Is("🔥",e.streak||0,"Aktuelle Streak"),Is("🏅",e.bestStreak||0,"Beste Streak"),Is("✅",e.doneCount||0,"Geschaffte Tage"),Is("💜",e.goonies||0,"Goonies")),f("h3",{class:"section-title small"},"Kalender"),fb(e,r),f("div",{class:"legend"},f("span",{class:"lg cal-done"}),"geschafft",f("span",{class:"lg cal-fail"}),"nicht geschafft",f("span",{class:"lg cal-open"}),"offen",f("span",{class:"lg cal-future"}),"kommt noch")),f("h3",{class:"section-title"},i?"Meine Posts":`Posts von ${e.name}`),u),t}Zt.live=!0;let qe=null;Zt.leave=()=>{qe==null||qe.unsub(),qe=null};function Is(n,e,t){return f("div",{class:"stat"},f("div",{class:"stat-val"},n," ",String(e)),f("div",{class:"stat-label"},t))}function Fp(){const n=ae(),e=f("div",{class:"page"},f("h2",{class:"page-title"},"Mitglieder")),t=Op();return e.append(f("div",{class:"stack"},t.map((r,s)=>{const i=di(r,n);return f("a",{class:"card member",href:`#/u/${r.id}`},f("span",{class:"place"},String(s+1)),jt(r,48),f("div",{class:"grow"},f("div",{class:"member-name"},r.name,r.id===U.uid?f("span",{class:"you"},"Du"):null),f("div",{class:"muted small"},Ot(n)<1?`${_e[r.rankIndex].name} · Start ${zn($s())}`:`${_e[r.rankIndex].name} · ${i.final?"100":sa(i.pct)} %`),f("div",{class:"muted small"},`🔥 ${r.streak||0}   ✅ ${r.doneCount||0}   💜 ${r.goonies||0}`),r.punishmentOpen?f("div",{class:"red-mini"},"❗ Bestrafung offen"):null),cc(r.rankIndex,i.pct,58,r.id))}))),e}Fp.live=!0;function pb(){const n=Ot(ae())>st,e=f("div",{class:"page"},f("h2",{class:"page-title"},n?"Ränge · Endstand":"Ränge"));e.append(f("p",{class:"muted center"},"Am Anfang geht es schnell, am Ende langsam. Wer jeden Tag schafft, ist nach 30 Tagen Gotti."));let t=0;const r=_e.map((s,i)=>{const a=[...U.users.values()].filter(u=>u.rankIndex===i),c=f("div",{class:"card rank-row",style:{"--c":hi[s.group].main}},Jr(i,58),f("div",{class:"grow"},f("div",{class:"rank-name"},s.name),f("div",{class:"muted small"},t===0?"Startrang":`nach ${t} geschafften Tagen am Stück`," · ",s.days==null?"Endrang 👑":`${s.days} ${s.days===1?"Tag":"Tage"} bis zum nächsten`),a.length?f("div",{class:"rank-members"},a.map(u=>f("a",{href:`#/u/${u.id}`,title:u.name},jt(u,30)))):null));return t+=s.days||0,c});return e.append(f("div",{class:"stack"},r.reverse())),e}function mb(){const n=f("div",{class:"page"},f("h2",{class:"page-title"},"Benachrichtigungen"));let e=0;try{e=Number(localStorage.getItem("notifSeen")||0)}catch{}U.notifs.length||n.append(f("div",{class:"card empty"},f("div",{class:"empty-ico"},"🔔"),f("p",{},"Noch nichts da."))),n.append(f("div",{class:"stack"},U.notifs.map(t=>f("a",{class:`card notif ${t.createdAt>e?"unread":""}`,href:t.link||"#/"},f("div",{class:"notif-ico"},gb[t.type]||"🔔"),f("div",{class:"grow"},f("div",{class:"notif-title"},t.title),f("div",{class:"muted small"},t.body),f("div",{class:"muted tiny"},Ni(t.createdAt,ae())))))));try{localStorage.setItem("notifSeen",String(ae()+1e3))}catch{}return n}const gb={done:"✅",fail:"❌",open:"⏳",goonie:"💜",comment:"💬",penalty:"❗",punishment:"🎥",remind:"⏰"};function _b(){let n=0;try{n=Number(localStorage.getItem("notifSeen")||0)}catch{}return U.notifs.filter(e=>e.createdAt>n).length}function yb(){const n=U.me,e=f("div",{class:"page"},f("h2",{class:"page-title"},"Einstellungen"));if(!n)return e;const t=f("input",{class:"input",value:n.name,maxLength:24}),r=f("button",{class:"btn btn-blue"},"Speichern");r.onclick=async()=>{const a=t.value.trim();if(!a)return G("Name darf nicht leer sein","error");Pe(r,!0);try{await Yf({name:a}),G("Name gespeichert","success")}catch{G("Speichern fehlgeschlagen","error")}Pe(r,!1)};const s=Sp()==="granted"&&localStorage.getItem("pushOff")!=="1",i=f("button",{class:`toggle ${s?"on":""}`,"aria-label":"Push an/aus"},f("span",{}));return i.onclick=async()=>{const a=!i.classList.contains("on");i.disabled=!0;try{a?(await kp(),localStorage.removeItem("pushOff")):(await jI(),localStorage.setItem("pushOff","1")),i.classList.toggle("on",a),G(a?"Push ist an":"Push ist aus","success")}catch(c){G(c.message,"error")}i.disabled=!1},e.append(f("section",{class:"card stack"},f("h3",{class:"section-title small"},"Profilbild"),f("div",{class:"row gap"},jt(n,64),f("button",{class:"btn btn-gold",onclick:xp},"📷 Bild auswählen"))),f("section",{class:"card stack"},f("h3",{class:"section-title small"},"Name"),t,r,f("p",{class:"muted small"},`Username: @${n.username} (kann nicht geändert werden)`)),f("section",{class:"card"},f("div",{class:"row between"},f("div",{},f("div",{class:"setting-title"},"🔔 Push-Nachrichten"),f("div",{class:"muted small"},"Erinnerungen, Posts, Goonies, Kommentare")),i),f("button",{class:"btn btn-blue btn-small",style:{marginTop:"12px",width:"100%"},onclick:async a=>{const c=a.currentTarget;Pe(c,!0);try{const u=await le("/push/test");G(u.tokens?"Test-Push gesendet, kommt gleich an":"Push ist auf diesem Gerät noch nicht eingeschaltet",u.tokens?"success":"error")}catch(u){G(u.message,"error")}Pe(c,!1)}},"🔔 Test-Push senden")),f("section",{class:"card stack"},f("button",{class:"btn btn-grey",onclick:()=>{localStorage.removeItem("onboarded"),location.hash="#/",location.reload()}},"📲 Anleitung: App installieren"),f("button",{class:"btn btn-red",onclick:async()=>{await Cn("Abmelden?","Du kannst dich jederzeit wieder mit Username und Passwort einloggen.","Abmelden","red")&&await Yh(Un)}},"Abmelden"))),e}let vh=!1,At=null;const vb=()=>["localhost","127.0.0.1"].includes(location.hostname);function wh(n){n&&!At?(At=f("div",{class:"test-banner"},"🧪 Testmodus: Uhrzeit ist vorgespult"),document.body.append(At)):!n&&At&&(At.remove(),At=null),At&&(At.textContent=`🧪 Testmodus · App-Zeit ${Rr(ae())}`)}function wb(n,e){if(vh)return;const t=vb()||Iy;vh=!0;const r=f("div",{class:"tp-clock"}),s=f("div",{class:"tiny"}),i=f("div",{class:"testpanel hidden"}),a=f("button",{class:"tp-fab",title:"Testmodus",onclick:()=>i.classList.toggle("hidden")},"🧪");let c=!1;const u=async x=>{if(!c){c=!0,i.classList.add("busy");try{let O=await le("/test/advance",x),$=O.processed||0,H=0;for(;O.pending>0&&H++<400;)s.textContent=`Arbeite Ereignisse ab … noch ${O.pending}`,O=await le("/test/advance",{to:O.now}),$+=O.processed||0;s.textContent=O.error?`Fehler: ${O.error}`:"",t&&y.checked&&await T(),await nn(),e(),G(`Jetzt: ${Rr(O.now)} · ${$} Ereignisse`,"info")}catch(O){G(O.message,"error")}c=!1,i.classList.remove("busy")}},d=(x,O=0)=>{const $=ae();let H=ud($);return St(H,x,O)<=$&&H++,St(H,x,O)},m=f("input",{type:"datetime-local",class:"input"}),y=f("input",{type:"checkbox",checked:!0});async function T(){let x,O=0;do x=await le("/test/bots",{action:"play"}),x.played&&(O++,s.textContent=`${x.played} hat abgehakt${x.failed?" (nicht geschafft)":""} …`);while(x.pending>0&&O<10);O&&G(`${O} Bots haben abgehakt`,"info"),s.textContent=x.info&&!O?x.info:""}const k=f("div",{class:"tp-bots"},f("b",{},"🤖 Bot-Spieler"),f("div",{class:"tp-grid2"},f("button",{onclick:async()=>{try{const x=await le("/test/bots",{action:"create",n:5});G(`${x.created} Bots neu, ${x.total} insgesamt`,"success"),e()}catch(x){G(x.message,"error")}}},"+ 5 Bots"),f("button",{onclick:async()=>{try{await T(),e()}catch(x){G(x.message,"error")}}},"Bots abhaken"),f("button",{onclick:async()=>{if(await Cn("Bots entfernen?",null,"Entfernen","red"))try{await le("/test/bots",{action:"remove"}),e()}catch(x){G(x.message,"error")}}},"Bots entfernen"),f("label",{class:"tp-check"},y," Bots haken beim Vorspulen automatisch ab"))),C=async x=>{if(await Cn("Echte Zeit?","Uhr zurück auf die echte Zeit. Die Spieldaten bleiben (können dann aber zur echten Zeit nicht passen).","Echte Zeit","red"))try{await le("/test/reset",{wipe:x}),await nn(),e(),G(x?"Zurückgesetzt. Spiel startet frisch.":"Echte Zeit aktiv","success")}catch($){G($.message,"error")}};async function D(){if(await Cn("Neu starten?","Alle Spielstände, Posts, Kommentare und Benachrichtigungen der Test-App werden gelöscht. Tag 1 beginnt jetzt, die Uhr läuft wieder echt. Konten und Bots bleiben.","Neu starten","red"))try{await le("/test/restart",{}),await nn(),e(),G("Neu gestartet: Tag 1 läuft","success")}catch(O){G(O.message,"error")}}i.append(f("b",{},"🧪 Testmodus (deutsche Zeit)"),r,s,f("div",{class:"tp-grid"},f("button",{onclick:()=>u({by:36e5})},"+1 Std"),f("button",{onclick:()=>u({by:6*36e5})},"+6 Std"),f("button",{onclick:()=>u({by:864e5})},"+1 Tag"),f("button",{onclick:()=>u({to:d(21,0)})},"→ 21:00"),f("button",{onclick:()=>u({to:d(22,0)})},"→ 22:00"),f("button",{onclick:()=>u({to:d(23,59)})},"→ 23:59"),f("button",{onclick:()=>u({to:d(0,1)})},"→ 00:01"),f("button",{onclick:()=>u({to:d(20,59)})},"→ 20:59")),f("button",{class:"tp-wide",onclick:()=>u({to:St(1,21,0)})},"▶ Zum Tag 1, 21:00"),f("div",{class:"row gap"},m,f("button",{onclick:()=>{if(!m.value)return;const[x,O]=m.value.split("T"),[$,H,me]=x.split("-").map(Number),[te,I]=O.split(":").map(Number);u({to:ld({year:$,month:H,day:me,hour:te,minute:I})})}},"Springen")),k,f("div",{class:"tp-grid2"},f("button",{onclick:()=>C(!1)},"⏪ Echte Zeit"),f("button",{class:"danger",onclick:D},"🔄 Neu starten (Tag 1 ab jetzt)")),f("p",{class:"tiny"},"Vorspulen gilt für alle Spieler. Zurück geht nur über „Echte Zeit“."));const N=f("div",{class:"tp-warn"},"⚠️ Die Challenge hat noch nicht begonnen: kein Ring, keine Erinnerungen, kein Abhaken. Tippe auf „▶ Zum Tag 1, 21:00“.");i.insertBefore(N,i.children[2]),setInterval(()=>{r.textContent=`${Rr(ae())} (${pn(ae()).second}s)`,N.classList.toggle("hidden",ae()>=St(0,22,0))},1e3),document.body.append(a,i)}const Eb=180*1e3;let Up=0;async function Ds(){Up=Date.now();try{const n=await fetch(`./version.json?t=${Date.now()}`,{cache:"no-store"});if(!n.ok)return;const{build:e}=await n.json();if(!e||e==="1792181901672")return;if(document.querySelector(".backdrop")){setTimeout(Ds,3e4);return}location.replace(`${location.pathname}?v=${e}${location.hash}`)}catch{}}function Tb(){setInterval(Ds,Eb),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Date.now()-Up>2e4&&Ds()}),setTimeout(Ds,5e3)}const Ac=`${sd} TEST`;document.title=Ac;document.body.classList.add("test-app"),document.body.append(f("div",{class:"test-app-band"},"🧪 TEST-APP · nichts hier zählt"));const aa=document.getElementById("app"),Ib=[{hash:"#/",icon:"🏠",label:"Home"},{hash:"#/me",icon:"👤",label:"Mein Profil"},{hash:"#/members",icon:"👥",label:"Mitglieder"},{hash:"#/ranks",icon:"🏆",label:"Ränge"},{hash:"#/notifications",icon:"🔔",label:"Benachrichtigungen"},{hash:"#/settings",icon:"⚙️",label:"Einstellungen"}];function bb(){const n=location.hash||"#/",[,e,t]=n.split("/");switch(e){case"me":return{key:"me",view:()=>Zt(U.uid),leave:Zt.leave,live:!0};case"u":return{key:`u/${t}`,view:()=>Zt(t),leave:Zt.leave,live:!0};case"members":return{key:"members",view:Fp,live:!0};case"ranks":return{key:"ranks",view:pb,live:!0};case"notifications":return{key:"notifications",view:mb,live:!0};case"settings":return{key:"settings",view:yb};case"post":return{key:`post/${t}`,view:()=>Ur(t),leave:Ur.leave,live:!0};default:return{key:"home",view:Mp,live:!0}}}let Ye=null,Xe=null,ut=null;function Ab(){const n=f("nav",{class:"drawer"}),e=f("div",{class:"scrim",onclick:()=>ca(!1)}),t=f("button",{class:"icon-btn","aria-label":"Menü",onclick:()=>ca(!0)},f("span",{class:"burger"}),f("span",{class:"dot hidden"})),r=f("button",{class:"icon-btn","aria-label":"Aktualisieren",onclick:()=>Bp(r)},"⟳"),s=f("header",{class:"topbar"},t,f("a",{href:"#/",class:"brand"},Ac),r),i=f("div",{class:"ptr"},"⟳");Xe=f("main",{class:"main"}),Ye=f("div",{class:"shell"},s,i,Xe,e,n),Ye.drawer=n,Ye.menuBtn=t,Ye.ptr=i,aa.replaceChildren(Ye),kb(i,r)}function Sb(){const n=`#/${(location.hash||"#/").split("/")[1]||""}`,e=_b();Ye.drawer.replaceChildren(f("div",{class:"drawer-head"},Ac),...Ib.map(t=>f("a",{class:`nav-item ${n===t.hash||t.hash==="#/"&&n==="#/"?"active":""}`,href:t.hash,onclick:()=>ca(!1)},f("span",{class:"nav-ico"},t.icon),f("span",{},t.label),t.hash==="#/notifications"&&e?f("span",{class:"count"},String(e)):null))),Ye.menuBtn.querySelector(".dot").classList.toggle("hidden",!e)}function ca(n){Ye.classList.toggle("menu-open",n)}function Dn(n=!1){var s;if(!Ye)return;const e=bb();ut&&ut.key!==e.key&&((s=ut.leave)==null||s.call(ut));const t=!ut||ut.key!==e.key;if(!t&&!e.live&&n!=="hard")return;const r=t?0:Xe.scrollTop;ut=e,Xe.replaceChildren(e.view()),Xe.scrollTop=r,Sb()}async function Bp(n){n==null||n.classList.add("spin"),await nn();try{await fT()}catch{}Dn("hard"),setTimeout(()=>n==null?void 0:n.classList.remove("spin"),500)}function kb(n,e){let t=null,r=0;Xe.addEventListener("touchstart",s=>{t=Xe.scrollTop<=0?s.touches[0].clientY:null,r=0},{passive:!0}),Xe.addEventListener("touchmove",s=>{t!=null&&(r=Math.max(0,s.touches[0].clientY-t),n.style.transform=`translateY(${Math.min(80,r*.5)}px) rotate(${r*2}deg)`,n.classList.toggle("ready",r>120))},{passive:!0}),Xe.addEventListener("touchend",()=>{t!=null&&r>120&&Bp(e),t=null,n.style.transform="",n.classList.remove("ready")})}setInterval(()=>{const n=ae();document.querySelectorAll("[data-until]").forEach(e=>{const t=Number(e.dataset.until)-n;e.textContent=Lp(t),t<=0&&!e.dataset.fired&&(e.dataset.fired="1",setTimeout(()=>Dn(!0),1200))})},1e3);setInterval(()=>{document.querySelectorAll("[data-ring]").forEach(n=>{const e=U.users.get(n.dataset.ring);e&&cT(n,di(e,ae()).pct)})},15e3);let Eh=0;setInterval(()=>{const n=Math.floor(ae()/6e4);n!==Eh&&(Eh=n,Dn(!0))},5e3);async function Rb(){Ec(),await nn(),ZE();const n=()=>{wh(na),ac&&U.me&&wb(U.me,()=>Dn(!0))};XE(n),setInterval(()=>wh(na),1e3),Tb(),uT(()=>{U.me&&(Dn(!0),ZI(U.me),n())}),window.addEventListener("hashchange",()=>{var e;if(location.hash==="#/checkin"){location.hash="#/";const t=dd(ae());t&&U.me&&!((e=U.me.days)!=null&&e[t])&&setTimeout(()=>Np(t),300);return}Dn()}),Z_(Un,e=>{if(Qf(),Ye=null,ut=null,!e){aa.replaceChildren(KI());return}const t=()=>{Ab(),Xe.replaceChildren(f("div",{class:"boot"},f("div",{class:"boot-flame"}))),dT(e.uid,()=>{G("Profil nicht gefunden","error"),Yh(Un)}),qI()};let r=!1;try{r=localStorage.getItem("onboarded")==="1"}catch{}r?t():aa.replaceChildren(WI(t))})}Rb();
