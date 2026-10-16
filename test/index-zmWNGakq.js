(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Em=()=>{};var bl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Tm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Eh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,d=u?n[s+2]:0,m=i>>2,y=(i&3)<<4|c>>4;let T=(c&15)<<2|d>>6,k=d&63;u||(k=64,a||(T=64)),r.push(t[m],t[y],t[T],t[k])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(wh(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Tm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const y=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||d==null||y==null)throw new Im;const T=i<<2|c>>4;if(r.push(T),d!==64){const k=c<<4&240|d>>2;if(r.push(k),y!==64){const N=d<<6&192|y;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Im extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bm=function(n){const e=wh(n);return Eh.encodeByteArray(e,!0)},Th=function(n){return bm(n).replace(/\./g,"")},Ih=function(n){try{return Eh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Am(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sm=()=>Am().__FIREBASE_DEFAULTS__,km=()=>{if(typeof process>"u"||typeof bl>"u")return;const n=bl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Rm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ih(n[1]);return e&&JSON.parse(e)},aa=()=>{try{return Em()||Sm()||km()||Rm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},bh=()=>{var n;return(n=aa())===null||n===void 0?void 0:n.config},Pm=n=>{var e;return(e=aa())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ni(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dm(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Vm(){var n;const e=(n=aa())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Om(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Mm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xm(){const n=xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Fm(){return!Vm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ah(){try{return typeof indexedDB=="object"}catch{return!1}}function Sh(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function Um(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="FirebaseError";class at extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Bm,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,un.prototype.create)}}class un{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?$m(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new at(s,c,r)}}function $m(n,e){return n.replace(zm,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const zm=/\{\$([^}]+)}/g;function Tr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Al(i)&&Al(a)){if(!Tr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Al(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function lr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function jm(n,e){const t=new qm(n,e);return t.subscribe.bind(t)}class qm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Hm(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ro),s.error===void 0&&(s.error=ro),s.complete===void 0&&(s.complete=ro);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hm(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ro(){}/**
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
 */class Km{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Cm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Gm(e))try{this.getOrInitializeService({instanceIdentifier:Wt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wt){return this.instances.has(e)}getOptions(e=Wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wt){return this.component?this.component.multipleInstances?e:Wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wm(n){return n===Wt?void 0:n}function Gm(n){return n.instantiationMode==="EAGER"}/**
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
 */class Qm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Km(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const Jm={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Ym=H.INFO,Xm={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},Zm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Xm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ca{constructor(e){this.name=e,this._logLevel=Ym,this._logHandler=Zm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Jm[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const eg=(n,e)=>e.some(t=>n instanceof t);let Sl,kl;function tg(){return Sl||(Sl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ng(){return kl||(kl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rh=new WeakMap,Ro=new WeakMap,Ph=new WeakMap,so=new WeakMap,la=new WeakMap;function rg(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(pt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Rh.set(t,n)}).catch(()=>{}),la.set(e,n),e}function sg(n){if(Ro.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ro.set(n,e)}let Po={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ro.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ph.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ig(n){Po=n(Po)}function og(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(io(this),e,...t);return Ph.set(r,e.sort?e.sort():[e]),pt(r)}:ng().includes(n)?function(...e){return n.apply(io(this),e),pt(Rh.get(this))}:function(...e){return pt(n.apply(io(this),e))}}function ag(n){return typeof n=="function"?og(n):(n instanceof IDBTransaction&&sg(n),eg(n,tg())?new Proxy(n,Po):n)}function pt(n){if(n instanceof IDBRequest)return rg(n);if(so.has(n))return so.get(n);const e=ag(n);return e!==n&&(so.set(n,e),la.set(e,n)),e}const io=n=>la.get(n);function ri(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=pt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(pt(a.result),u.oldVersion,u.newVersion,pt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}function oo(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),pt(t).then(()=>{})}const cg=["get","getKey","getAll","getAllKeys","count"],lg=["put","add","delete","clear"],ao=new Map;function Rl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ao.get(e))return ao.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=lg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||cg.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&u.done]))[0]};return ao.set(e,i),i}ig(n=>({...n,get:(e,t,r)=>Rl(e,t)||n.get(e,t,r),has:(e,t)=>!!Rl(e,t)||n.has(e,t)}));/**
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
 */class ug{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(hg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function hg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Co="@firebase/app",Pl="0.13.2";/**
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
 */const gt=new ca("@firebase/app"),dg="@firebase/app-compat",fg="@firebase/analytics-compat",pg="@firebase/analytics",mg="@firebase/app-check-compat",gg="@firebase/app-check",_g="@firebase/auth",yg="@firebase/auth-compat",vg="@firebase/database",wg="@firebase/data-connect",Eg="@firebase/database-compat",Tg="@firebase/functions",Ig="@firebase/functions-compat",bg="@firebase/installations",Ag="@firebase/installations-compat",Sg="@firebase/messaging",kg="@firebase/messaging-compat",Rg="@firebase/performance",Pg="@firebase/performance-compat",Cg="@firebase/remote-config",Dg="@firebase/remote-config-compat",Ng="@firebase/storage",Vg="@firebase/storage-compat",Og="@firebase/firestore",Lg="@firebase/ai",Mg="@firebase/firestore-compat",xg="firebase",Fg="11.10.0";/**
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
 */const Do="[DEFAULT]",Ug={[Co]:"fire-core",[dg]:"fire-core-compat",[pg]:"fire-analytics",[fg]:"fire-analytics-compat",[gg]:"fire-app-check",[mg]:"fire-app-check-compat",[_g]:"fire-auth",[yg]:"fire-auth-compat",[vg]:"fire-rtdb",[wg]:"fire-data-connect",[Eg]:"fire-rtdb-compat",[Tg]:"fire-fn",[Ig]:"fire-fn-compat",[bg]:"fire-iid",[Ag]:"fire-iid-compat",[Sg]:"fire-fcm",[kg]:"fire-fcm-compat",[Rg]:"fire-perf",[Pg]:"fire-perf-compat",[Cg]:"fire-rc",[Dg]:"fire-rc-compat",[Ng]:"fire-gcs",[Vg]:"fire-gcs-compat",[Og]:"fire-fst",[Mg]:"fire-fst-compat",[Lg]:"fire-vertex","fire-js":"fire-js",[xg]:"fire-js-all"};/**
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
 */const Cs=new Map,Bg=new Map,No=new Map;function Cl(n,e){try{n.container.addComponent(e)}catch(t){gt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function rt(n){const e=n.name;if(No.has(e))return gt.debug(`There were multiple attempts to register component ${e}.`),!1;No.set(e,n);for(const t of Cs.values())Cl(t,n);for(const t of Bg.values())Cl(t,n);return!0}function Fr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function dt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const $g={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pt=new un("app","Firebase",$g);/**
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
 */class zg{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new We("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
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
 */const si=Fg;function Ch(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Do,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Pt.create("bad-app-name",{appName:String(s)});if(t||(t=bh()),!t)throw Pt.create("no-options");const i=Cs.get(s);if(i){if(Tr(t,i.options)&&Tr(r,i.config))return i;throw Pt.create("duplicate-app",{appName:s})}const a=new Qm(s);for(const u of No.values())a.addComponent(u);const c=new zg(t,r,a);return Cs.set(s,c),c}function jg(n=Do){const e=Cs.get(n);if(!e&&n===Do&&bh())return Ch();if(!e)throw Pt.create("no-app",{appName:n});return e}function $e(n,e,t){var r;let s=(r=Ug[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gt.warn(c.join(" "));return}rt(new We(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const qg="firebase-heartbeat-database",Hg=1,Ir="firebase-heartbeat-store";let co=null;function Dh(){return co||(co=ri(qg,Hg,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ir)}catch(t){console.warn(t)}}}}).catch(n=>{throw Pt.create("idb-open",{originalErrorMessage:n.message})})),co}async function Kg(n){try{const t=(await Dh()).transaction(Ir),r=await t.objectStore(Ir).get(Nh(n));return await t.done,r}catch(e){if(e instanceof at)gt.warn(e.message);else{const t=Pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gt.warn(t.message)}}}async function Dl(n,e){try{const r=(await Dh()).transaction(Ir,"readwrite");await r.objectStore(Ir).put(e,Nh(n)),await r.done}catch(t){if(t instanceof at)gt.warn(t.message);else{const r=Pt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gt.warn(r.message)}}}function Nh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Wg=1024,Gg=30;class Qg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Nl();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Gg){const a=Xg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){gt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Nl(),{heartbeatsToSend:r,unsentEntries:s}=Jg(this._heartbeatsCache.heartbeats),i=Th(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return gt.warn(t),""}}}function Nl(){return new Date().toISOString().substring(0,10)}function Jg(n,e=Wg){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Vl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Vl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Yg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ah()?Sh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Kg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vl(n){return Th(JSON.stringify({version:2,heartbeats:n})).length}function Xg(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function Zg(n){rt(new We("platform-logger",e=>new ug(e),"PRIVATE")),rt(new We("heartbeat",e=>new Qg(e),"PRIVATE")),$e(Co,Pl,n),$e(Co,Pl,"esm2017"),$e("fire-js","")}Zg("");function Vh(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Oh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const e_=Oh,Lh=new un("auth","Firebase",Oh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new ca("@firebase/auth");function t_(n,...e){Ds.logLevel<=H.WARN&&Ds.warn(`Auth (${si}): ${n}`,...e)}function Ts(n,...e){Ds.logLevel<=H.ERROR&&Ds.error(`Auth (${si}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(n,...e){throw ha(n,...e)}function ua(n,...e){return ha(n,...e)}function Mh(n,e,t){const r=Object.assign(Object.assign({},e_()),{[e]:t});return new un("auth","Firebase",r).create(e,{appName:n.name})}function In(n){return Mh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ha(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Lh.create(n,...e)}function Q(n,e,...t){if(!n)throw ha(e,...t)}function ft(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ts(e),new Error(e)}function Ns(n,e){n||ft(e)}function n_(){return Ol()==="http:"||Ol()==="https:"}function Ol(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(n_()||Lm()||"connection"in navigator)?navigator.onLine:!0}function s_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ns(t>e,"Short delay should be less than long delay!"),this.isMobile=Nm()||Mm()}get(){return r_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(n,e){Ns(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],c_=new Ur(3e4,6e4);function Fn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function hn(n,e,t,r,s={}){return Fh(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=kh(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:u},i);return Om()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&ni(n.emulatorConfig.host)&&(d.credentials="include"),xh.fetch()(await Uh(n,n.config.apiHost,t,c),d)})}async function Fh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},o_),e);try{const s=new u_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ps(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ps(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw ps(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw ps(n,"user-disabled",a);const m=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Mh(n,m,d);Rn(n,m)}}catch(s){if(s instanceof at)throw s;Rn(n,"network-request-failed",{message:String(s)})}}async function da(n,e,t,r,s={}){const i=await hn(n,e,t,r,s);return"mfaPendingCredential"in i&&Rn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Uh(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?i_(n.config,s):`${n.config.apiScheme}://${s}`;return a_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function l_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class u_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ua(this.auth,"network-request-failed")),c_.get())})}}function ps(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ua(n,e,r);return s.customData._tokenResponse=t,s}function Ll(n){return n!==void 0&&n.enterprise!==void 0}class h_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return l_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function d_(n,e){return hn(n,"GET","/v2/recaptchaConfig",Fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(n,e){return hn(n,"POST","/v1/accounts:delete",e)}async function Vs(n,e){return hn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function p_(n,e=!1){const t=he(n),r=await t.getIdToken(e),s=Bh(r);Q(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:pr(lo(s.auth_time)),issuedAtTime:pr(lo(s.iat)),expirationTime:pr(lo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function lo(n){return Number(n)*1e3}function Bh(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ts("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ih(t);return s?JSON.parse(s):(Ts("Failed to decode base64 JWT payload"),null)}catch(s){return Ts("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ml(n){const e=Bh(n);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vo(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof at&&m_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function m_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pr(this.lastLoginAt),this.creationTime=pr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Os(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Vo(n,Vs(t,{idToken:r}));Q(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?$h(i.providerUserInfo):[],c=y_(n.providerData,a),u=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),m=u?d:!1,y={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Oo(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(n,y)}async function __(n){const e=he(n);await Os(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function y_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function $h(n){return n.map(e=>{var{providerId:t}=e,r=Vh(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v_(n,e){const t=await Fh(n,{},async()=>{const r=kh({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Uh(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&ni(n.emulatorConfig.host)&&(u.credentials="include"),xh.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function w_(n,e){return hn(n,"POST","/v2/accounts:revokeToken",Fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ml(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Q(e.length!==0,"internal-error");const t=Ml(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await v_(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new bn;return r&&(Q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(Q(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(Q(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bn,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(n,e){Q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class He{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Vh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new g_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Oo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Vo(this,this.stsTokenManager.getToken(this.auth,e));return Q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return p_(this,e)}reload(){return __(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new He(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Os(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dt(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await Vo(this,f_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,d,m;const y=(r=t.displayName)!==null&&r!==void 0?r:void 0,T=(s=t.email)!==null&&s!==void 0?s:void 0,k=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,N=(a=t.photoURL)!==null&&a!==void 0?a:void 0,P=(c=t.tenantId)!==null&&c!==void 0?c:void 0,D=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,U=(d=t.createdAt)!==null&&d!==void 0?d:void 0,M=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:q,emailVerified:Y,isAnonymous:me,providerData:re,stsTokenManager:I}=t;Q(q&&I,e,"internal-error");const g=bn.fromJSON(this.name,I);Q(typeof q=="string",e,"internal-error"),bt(y,e.name),bt(T,e.name),Q(typeof Y=="boolean",e,"internal-error"),Q(typeof me=="boolean",e,"internal-error"),bt(k,e.name),bt(N,e.name),bt(P,e.name),bt(D,e.name),bt(U,e.name),bt(M,e.name);const v=new He({uid:q,auth:e,email:T,emailVerified:Y,displayName:y,isAnonymous:me,photoURL:N,phoneNumber:k,tenantId:P,stsTokenManager:g,createdAt:U,lastLoginAt:M});return re&&Array.isArray(re)&&(v.providerData=re.map(E=>Object.assign({},E))),D&&(v._redirectEventId=D),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new bn;s.updateFromServerResponse(t);const i=new He({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Os(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];Q(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?$h(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new bn;c.updateFromIdToken(r);const u=new He({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Oo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=new Map;function Gt(n){Ns(n instanceof Function,"Expected a class definition");let e=xl.get(n);return e?(Ns(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,xl.set(n,e),e)}/**
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
 */class zh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zh.type="NONE";const Fl=zh;/**
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
 */function uo(n,e,t){return`firebase:${n}:${e}:${t}`}class An{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=uo(this.userKey,s.apiKey,i),this.fullPersistenceKey=uo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Vs(this.auth,{idToken:e}).catch(()=>{});return t?He._fromGetAccountInfoResponse(this.auth,t,e):null}return He._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new An(Gt(Fl),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Gt(Fl);const a=uo(r,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(a);if(m){let y;if(typeof m=="string"){const T=await Vs(e,{idToken:m}).catch(()=>{});if(!T)break;y=await He._fromGetAccountInfoResponse(e,T,m)}else y=He._fromJSON(e,m);d!==i&&(c=y),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new An(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new An(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(E_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hh(e))return"Blackberry";if(Kh(e))return"Webos";if(T_(e))return"Safari";if((e.includes("chrome/")||I_(e))&&!e.includes("edge/"))return"Chrome";if(qh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function E_(n=xe()){return/firefox\//i.test(n)}function T_(n=xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function I_(n=xe()){return/crios\//i.test(n)}function jh(n=xe()){return/iemobile/i.test(n)}function qh(n=xe()){return/android/i.test(n)}function Hh(n=xe()){return/blackberry/i.test(n)}function Kh(n=xe()){return/webos/i.test(n)}function b_(n=xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function A_(){return xm()&&document.documentMode===10}function S_(n=xe()){return b_(n)||qh(n)||Kh(n)||Hh(n)||/windows phone/i.test(n)||jh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(n,e=[]){let t;switch(n){case"Browser":t=Ul(xe());break;case"Worker":t=`${Ul(xe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${si}/${r}`}/**
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
 */class k_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function R_(n,e={}){return hn(n,"GET","/v2/passwordPolicy",Fn(n,e))}/**
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
 */const P_=6;class C_{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:P_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bl(this),this.idTokenSubscription=new Bl(this),this.beforeStateQueue=new k_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Gt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await An.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Vs(this,{idToken:e}),r=await He._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(dt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Os(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=s_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(dt(this.app))return Promise.reject(In(this));const t=e?he(e):null;return t&&Q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return dt(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return dt(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await R_(this),t=new C_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new un("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await w_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Gt(e)||this._popupRedirectResolver;Q(t,this,"argument-error"),this.redirectPersistenceManager=await An.create(this,[Gt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(dt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&t_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ii(n){return he(n)}class Bl{constructor(e){this.auth=e,this.observer=null,this.addObserver=jm(t=>this.observer=t)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function N_(n){fa=n}function V_(n){return fa.loadJS(n)}function O_(){return fa.recaptchaEnterpriseScript}class L_{constructor(){this.enterprise=new M_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class M_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const x_="recaptcha-enterprise",Gh="NO_RECAPTCHA";class F_{constructor(e){this.type=x_,this.auth=ii(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{d_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new h_(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;Ll(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(Gh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new L_().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&Ll(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=O_();u.length!==0&&(u+=c),V_(u).then(()=>{s(c,i,a)}).catch(d=>{a(d)})}}).catch(c=>{a(c)})})}}async function $l(n,e,t,r=!1,s=!1){const i=new F_(n);let a;if(s)a=Gh;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function zl(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await $l(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await $l(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(n,e){const t=Fr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Tr(i,e??{}))return s;Rn(s,"already-initialized")}return t.initialize({options:e})}function B_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Gt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,t){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}async function z_(n,e){return hn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(n,e){return da(n,"POST","/v1/accounts:signInWithPassword",Fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q_(n,e){return da(n,"POST","/v1/accounts:signInWithEmailLink",Fn(n,e))}async function H_(n,e){return da(n,"POST","/v1/accounts:signInWithEmailLink",Fn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends $_{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new br(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new br(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zl(e,t,"signInWithPassword",j_);case"emailLink":return q_(e,{email:this._email,oobCode:this._password});default:Rn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return zl(e,r,"signUpPassword",z_);case"emailLink":return H_(e,{idToken:t,email:this._email,oobCode:this._password});default:Rn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function W_(n){const e=cr(lr(n)).link,t=e?cr(lr(e)).deep_link_id:null,r=cr(lr(n)).deep_link_id;return(r?cr(lr(r)).link:null)||r||t||e||n}class pa{constructor(e){var t,r,s,i,a,c;const u=cr(lr(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,m=(r=u.oobCode)!==null&&r!==void 0?r:null,y=K_((s=u.mode)!==null&&s!==void 0?s:null);Q(d&&m&&y,"argument-error"),this.apiKey=d,this.operation=y,this.code=m,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.lang)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=W_(e);try{return new pa(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(){this.providerId=Un.PROVIDER_ID}static credential(e,t){return br._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=pa.parseLink(t);return Q(r,"argument-error"),br._fromEmailAndCode(e,r.code,r.tenantId)}}Un.PROVIDER_ID="password";Un.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Un.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await He._fromIdTokenResponse(e,r,s),a=jl(r);return new Ls({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=jl(r);return new Ls({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function jl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends at{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ms.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Ms(e,t,r,s)}}function G_(n,e,t,r){return t._getIdTokenResponse(n).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ms._fromErrorAndOperation(n,i,e,r):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q_(n,e,t=!1){if(dt(n.app))return Promise.reject(In(n));const r="signIn",s=await G_(n,r,e),i=await Ls._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function J_(n,e){return Q_(ii(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(n){const e=ii(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function ql(n,e,t){return dt(n.app)?Promise.reject(In(n)):J_(he(n),Un.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Y_(n),r})}function X_(n,e,t,r){return he(n).onAuthStateChanged(e,t,r)}function Qh(n){return he(n).signOut()}const xs="__sak";/**
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
 */class Jh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xs,"1"),this.storage.removeItem(xs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=1e3,ey=10;class Yh extends Jh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=S_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);A_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ey):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Z_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yh.type="LOCAL";const ty=Yh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny extends Jh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ny.type="SESSION";/**
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
 */function ry(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class oi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new oi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async d=>d(t.origin,i)),u=await ry(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class iy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const d=sy("",20);s.port1.start();const m=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(y){const T=y;if(T.data.eventId===d)switch(T.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(T.data.response);break;default:clearTimeout(m),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(){return window}/**
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
 */function Xh(){return typeof Hl().WorkerGlobalScope<"u"&&typeof Hl().importScripts=="function"}async function oy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ay(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function cy(){return Xh()?self:null}/**
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
 */const Zh="firebaseLocalStorageDb",ly=1,Fs="firebaseLocalStorage",ed="fbase_key";class Br{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ai(n,e){return n.transaction([Fs],e?"readwrite":"readonly").objectStore(Fs)}function uy(){const n=indexedDB.deleteDatabase(Zh);return new Br(n).toPromise()}function Lo(){const n=indexedDB.open(Zh,ly);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Fs,{keyPath:ed})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Fs)?e(r):(r.close(),await uy(),e(await Lo()))})})}async function Kl(n,e,t){const r=ai(n,!0).put({[ed]:e,value:t});return new Br(r).toPromise()}async function hy(n,e){const t=ai(n,!1).get(e),r=await new Br(t).toPromise();return r===void 0?null:r.value}function Wl(n,e){const t=ai(n,!0).delete(e);return new Br(t).toPromise()}const dy=800,fy=3;class td{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Lo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>fy)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oi._getInstance(cy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await oy(),!this.activeServiceWorker)return;this.sender=new iy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ay()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Lo();return await Kl(e,xs,"1"),await Wl(e,xs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kl(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>hy(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wl(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ai(s,!1).getAll();return new Br(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}td.type="LOCAL";const py=td;new Ur(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Ur(2e3,1e4);/**
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
 */new Ur(3e4,6e4);/**
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
 */new Ur(5e3,15e3);var Gl="@firebase/auth",Ql="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function _y(n){rt(new We("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;Q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wh(n)},d=new D_(r,s,i,u);return B_(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),rt(new We("auth-internal",e=>{const t=ii(e.getProvider("auth").getImmediate());return(r=>new my(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),$e(Gl,Ql,gy(n)),$e(Gl,Ql,"esm2017")}/**
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
 */const yy=300;Pm("authIdTokenMaxAge");function vy(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}N_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ua("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",vy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});_y("Browser");const nd="Streak",wy="Europe/Berlin",ho={year:2026,month:10,day:31},st=30,rd=22,sd=21,Ey=21,Ee=[{name:"Noob 1",group:"noob",level:1,days:1},{name:"Noob 2",group:"noob",level:2,days:1},{name:"Noob 3",group:"noob",level:3,days:1},{name:"Advanced 1",group:"advanced",level:1,days:1},{name:"Advanced 2",group:"advanced",level:2,days:1},{name:"Advanced 3",group:"advanced",level:3,days:2},{name:"Pro 1",group:"pro",level:1,days:2},{name:"Pro 2",group:"pro",level:2,days:3},{name:"Elite",group:"elite",level:0,days:4},{name:"Unreal",group:"unreal",level:0,days:6},{name:"Hacker",group:"hacker",level:0,days:8},{name:"Gotti",group:"gotti",level:0,days:null}],ci={noob:{main:"#5ad35a",dark:"#2a7a2a",light:"#b8ffb0"},advanced:{main:"#3fa9ff",dark:"#1a4f9c",light:"#bfe3ff"},pro:{main:"#a45bff",dark:"#5226a0",light:"#e2c9ff"},elite:{main:"#ff9a2e",dark:"#a8520a",light:"#ffd9a8"},unreal:{main:"#ff4fa3",dark:"#9c1858",light:"#ffc2e0"},hacker:{main:"#22e3c4",dark:"#0b7565",light:"#b5fff2"},gotti:{main:"#ffd23f",dark:"#a87a00",light:"#fff3b0"}},ms=300,ar=60,Ty=!0,Iy={firebase:{apiKey:"AIzaSyAIPSPnepBy37FIPCz-deNHHLicYsNgObM",authDomain:"streak-jf-test.firebaseapp.com",projectId:"streak-jf-test",messagingSenderId:"1015283528708",appId:"1:1015283528708:web:58980a496aa79aad167151"},worker:"https://streak-worker-test.janis-rohde.workers.dev"},id=Iy,by=id.firebase,Ay=id.worker,od=864e5;let fo;function Sy(){return fo||(fo=new Intl.DateTimeFormat("en-GB",{timeZone:wy,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})),fo}function dn(n){const e={};for(const t of Sy().formatToParts(new Date(n)))t.type!=="literal"&&(e[t.type]=parseInt(t.value,10));return e.hour===24&&(e.hour=0),{year:e.year,month:e.month,day:e.day,hour:e.hour,minute:e.minute,second:e.second}}function Jl(n){const e=dn(n);return Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)-Math.floor(n/1e3)*1e3}function ad({year:n,month:e,day:t,hour:r=0,minute:s=0}){const i=Date.UTC(n,e-1,t,r,s);let a=i-Jl(i);const c=Jl(a);return i-c!==a&&(a=i-c),a}const cd=Date.UTC(ho.year,ho.month-1,ho.day);function ma(n){return Math.round((Date.UTC(n.year,n.month-1,n.day)-cd)/od)}function ld(n){return ma(dn(n))}function ky(n){const e=new Date(cd+n*od);return{year:e.getUTCFullYear(),month:e.getUTCMonth()+1,day:e.getUTCDate()}}function Xt(n,e,t=0){return ad({...ky(n),hour:e,minute:t})}const ga=n=>Xt(n,rd),ud=n=>ga(n-1),Ry=()=>ud(1);function Pn(n){const e=dn(n);return ma(e)+(e.hour>=rd?1:0)}function hd(n){const e=dn(n);if(e.hour<sd)return null;const t=ma(e);return t>=1&&t<=st?t:null}const po=n=>Xt(n,sd),Py=n=>Xt(n+1,0),mo=n=>Xt(n+1,Ey),Us=n=>String(n).padStart(2,"0");function dd(n){const e=dn(n);return`${Us(e.hour)}:${Us(e.minute)}`}function _a(n){const e=dn(n);return`${Us(e.day)}.${Us(e.month)}.`}function Ar(n){return`${_a(n)} ${dd(n)}`}const Cy=1e-9;function li(n,e){const t=n.rankIndex||0,r=Ee[t],s=Ee[t+1]||null,i=n.days||{},a=n.joinedDay||1;if(r.days==null)return{rankIndex:t,rank:r,next:s,pct:100,rest:0,full:!0,final:!0,provisional:0};let c=0;const u=Pn(e);u>=1&&u<=st&&u>=a&&!i[u]&&(c+=Math.min(1,Math.max(0,(e-ud(u))/864e5)));const d=u-1;d>=1&&d<=st&&d>=a&&!i[d]&&e<Py(d)&&(c+=1);const m=(n.progress||0)+c,y=Math.min(1,m/r.days),T=Math.floor(y*1e3)/10;return{rankIndex:t,rank:r,next:s,pct:T,rest:Math.round((100-T)*10)/10,full:m>=r.days-Cy,final:!1,provisional:c}}function Yl(n){var e;return((e=Ee[n])==null?void 0:e.name)||"?"}var Dy="firebase",Ny="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$e(Dy,Ny,"app");var Xl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ct,fd;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,g){function v(){}v.prototype=g.prototype,I.D=g.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(E,w,b){for(var _=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)_[_e-2]=arguments[_e];return g.prototype[w].apply(E,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,v){v||(v=0);var E=Array(16);if(typeof g=="string")for(var w=0;16>w;++w)E[w]=g.charCodeAt(v++)|g.charCodeAt(v++)<<8|g.charCodeAt(v++)<<16|g.charCodeAt(v++)<<24;else for(w=0;16>w;++w)E[w]=g[v++]|g[v++]<<8|g[v++]<<16|g[v++]<<24;g=I.g[0],v=I.g[1],w=I.g[2];var b=I.g[3],_=g+(b^v&(w^b))+E[0]+3614090360&4294967295;g=v+(_<<7&4294967295|_>>>25),_=b+(w^g&(v^w))+E[1]+3905402710&4294967295,b=g+(_<<12&4294967295|_>>>20),_=w+(v^b&(g^v))+E[2]+606105819&4294967295,w=b+(_<<17&4294967295|_>>>15),_=v+(g^w&(b^g))+E[3]+3250441966&4294967295,v=w+(_<<22&4294967295|_>>>10),_=g+(b^v&(w^b))+E[4]+4118548399&4294967295,g=v+(_<<7&4294967295|_>>>25),_=b+(w^g&(v^w))+E[5]+1200080426&4294967295,b=g+(_<<12&4294967295|_>>>20),_=w+(v^b&(g^v))+E[6]+2821735955&4294967295,w=b+(_<<17&4294967295|_>>>15),_=v+(g^w&(b^g))+E[7]+4249261313&4294967295,v=w+(_<<22&4294967295|_>>>10),_=g+(b^v&(w^b))+E[8]+1770035416&4294967295,g=v+(_<<7&4294967295|_>>>25),_=b+(w^g&(v^w))+E[9]+2336552879&4294967295,b=g+(_<<12&4294967295|_>>>20),_=w+(v^b&(g^v))+E[10]+4294925233&4294967295,w=b+(_<<17&4294967295|_>>>15),_=v+(g^w&(b^g))+E[11]+2304563134&4294967295,v=w+(_<<22&4294967295|_>>>10),_=g+(b^v&(w^b))+E[12]+1804603682&4294967295,g=v+(_<<7&4294967295|_>>>25),_=b+(w^g&(v^w))+E[13]+4254626195&4294967295,b=g+(_<<12&4294967295|_>>>20),_=w+(v^b&(g^v))+E[14]+2792965006&4294967295,w=b+(_<<17&4294967295|_>>>15),_=v+(g^w&(b^g))+E[15]+1236535329&4294967295,v=w+(_<<22&4294967295|_>>>10),_=g+(w^b&(v^w))+E[1]+4129170786&4294967295,g=v+(_<<5&4294967295|_>>>27),_=b+(v^w&(g^v))+E[6]+3225465664&4294967295,b=g+(_<<9&4294967295|_>>>23),_=w+(g^v&(b^g))+E[11]+643717713&4294967295,w=b+(_<<14&4294967295|_>>>18),_=v+(b^g&(w^b))+E[0]+3921069994&4294967295,v=w+(_<<20&4294967295|_>>>12),_=g+(w^b&(v^w))+E[5]+3593408605&4294967295,g=v+(_<<5&4294967295|_>>>27),_=b+(v^w&(g^v))+E[10]+38016083&4294967295,b=g+(_<<9&4294967295|_>>>23),_=w+(g^v&(b^g))+E[15]+3634488961&4294967295,w=b+(_<<14&4294967295|_>>>18),_=v+(b^g&(w^b))+E[4]+3889429448&4294967295,v=w+(_<<20&4294967295|_>>>12),_=g+(w^b&(v^w))+E[9]+568446438&4294967295,g=v+(_<<5&4294967295|_>>>27),_=b+(v^w&(g^v))+E[14]+3275163606&4294967295,b=g+(_<<9&4294967295|_>>>23),_=w+(g^v&(b^g))+E[3]+4107603335&4294967295,w=b+(_<<14&4294967295|_>>>18),_=v+(b^g&(w^b))+E[8]+1163531501&4294967295,v=w+(_<<20&4294967295|_>>>12),_=g+(w^b&(v^w))+E[13]+2850285829&4294967295,g=v+(_<<5&4294967295|_>>>27),_=b+(v^w&(g^v))+E[2]+4243563512&4294967295,b=g+(_<<9&4294967295|_>>>23),_=w+(g^v&(b^g))+E[7]+1735328473&4294967295,w=b+(_<<14&4294967295|_>>>18),_=v+(b^g&(w^b))+E[12]+2368359562&4294967295,v=w+(_<<20&4294967295|_>>>12),_=g+(v^w^b)+E[5]+4294588738&4294967295,g=v+(_<<4&4294967295|_>>>28),_=b+(g^v^w)+E[8]+2272392833&4294967295,b=g+(_<<11&4294967295|_>>>21),_=w+(b^g^v)+E[11]+1839030562&4294967295,w=b+(_<<16&4294967295|_>>>16),_=v+(w^b^g)+E[14]+4259657740&4294967295,v=w+(_<<23&4294967295|_>>>9),_=g+(v^w^b)+E[1]+2763975236&4294967295,g=v+(_<<4&4294967295|_>>>28),_=b+(g^v^w)+E[4]+1272893353&4294967295,b=g+(_<<11&4294967295|_>>>21),_=w+(b^g^v)+E[7]+4139469664&4294967295,w=b+(_<<16&4294967295|_>>>16),_=v+(w^b^g)+E[10]+3200236656&4294967295,v=w+(_<<23&4294967295|_>>>9),_=g+(v^w^b)+E[13]+681279174&4294967295,g=v+(_<<4&4294967295|_>>>28),_=b+(g^v^w)+E[0]+3936430074&4294967295,b=g+(_<<11&4294967295|_>>>21),_=w+(b^g^v)+E[3]+3572445317&4294967295,w=b+(_<<16&4294967295|_>>>16),_=v+(w^b^g)+E[6]+76029189&4294967295,v=w+(_<<23&4294967295|_>>>9),_=g+(v^w^b)+E[9]+3654602809&4294967295,g=v+(_<<4&4294967295|_>>>28),_=b+(g^v^w)+E[12]+3873151461&4294967295,b=g+(_<<11&4294967295|_>>>21),_=w+(b^g^v)+E[15]+530742520&4294967295,w=b+(_<<16&4294967295|_>>>16),_=v+(w^b^g)+E[2]+3299628645&4294967295,v=w+(_<<23&4294967295|_>>>9),_=g+(w^(v|~b))+E[0]+4096336452&4294967295,g=v+(_<<6&4294967295|_>>>26),_=b+(v^(g|~w))+E[7]+1126891415&4294967295,b=g+(_<<10&4294967295|_>>>22),_=w+(g^(b|~v))+E[14]+2878612391&4294967295,w=b+(_<<15&4294967295|_>>>17),_=v+(b^(w|~g))+E[5]+4237533241&4294967295,v=w+(_<<21&4294967295|_>>>11),_=g+(w^(v|~b))+E[12]+1700485571&4294967295,g=v+(_<<6&4294967295|_>>>26),_=b+(v^(g|~w))+E[3]+2399980690&4294967295,b=g+(_<<10&4294967295|_>>>22),_=w+(g^(b|~v))+E[10]+4293915773&4294967295,w=b+(_<<15&4294967295|_>>>17),_=v+(b^(w|~g))+E[1]+2240044497&4294967295,v=w+(_<<21&4294967295|_>>>11),_=g+(w^(v|~b))+E[8]+1873313359&4294967295,g=v+(_<<6&4294967295|_>>>26),_=b+(v^(g|~w))+E[15]+4264355552&4294967295,b=g+(_<<10&4294967295|_>>>22),_=w+(g^(b|~v))+E[6]+2734768916&4294967295,w=b+(_<<15&4294967295|_>>>17),_=v+(b^(w|~g))+E[13]+1309151649&4294967295,v=w+(_<<21&4294967295|_>>>11),_=g+(w^(v|~b))+E[4]+4149444226&4294967295,g=v+(_<<6&4294967295|_>>>26),_=b+(v^(g|~w))+E[11]+3174756917&4294967295,b=g+(_<<10&4294967295|_>>>22),_=w+(g^(b|~v))+E[2]+718787259&4294967295,w=b+(_<<15&4294967295|_>>>17),_=v+(b^(w|~g))+E[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(w+(_<<21&4294967295|_>>>11))&4294967295,I.g[2]=I.g[2]+w&4294967295,I.g[3]=I.g[3]+b&4294967295}r.prototype.u=function(I,g){g===void 0&&(g=I.length);for(var v=g-this.blockSize,E=this.B,w=this.h,b=0;b<g;){if(w==0)for(;b<=v;)s(this,I,b),b+=this.blockSize;if(typeof I=="string"){for(;b<g;)if(E[w++]=I.charCodeAt(b++),w==this.blockSize){s(this,E),w=0;break}}else for(;b<g;)if(E[w++]=I[b++],w==this.blockSize){s(this,E),w=0;break}}this.h=w,this.o+=g},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;var v=8*this.o;for(g=I.length-8;g<I.length;++g)I[g]=v&255,v/=256;for(this.u(I),I=Array(16),g=v=0;4>g;++g)for(var E=0;32>E;E+=8)I[v++]=this.g[g]>>>E&255;return I};function i(I,g){var v=c;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=g(I)}function a(I,g){this.h=g;for(var v=[],E=!0,w=I.length-1;0<=w;w--){var b=I[w]|0;E&&b==g||(v[w]=b,E=!1)}this.g=v}var c={};function u(I){return-128<=I&&128>I?i(I,function(g){return new a([g|0],0>g?-1:0)}):new a([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return y;if(0>I)return D(d(-I));for(var g=[],v=1,E=0;I>=v;E++)g[E]=I/v|0,v*=4294967296;return new a(g,0)}function m(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return D(m(I.substring(1),g));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(g,8)),E=y,w=0;w<I.length;w+=8){var b=Math.min(8,I.length-w),_=parseInt(I.substring(w,w+b),g);8>b?(b=d(Math.pow(g,b)),E=E.j(b).add(d(_))):(E=E.j(v),E=E.add(d(_)))}return E}var y=u(0),T=u(1),k=u(16777216);n=a.prototype,n.m=function(){if(P(this))return-D(this).m();for(var I=0,g=1,v=0;v<this.g.length;v++){var E=this.i(v);I+=(0<=E?E:4294967296+E)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(N(this))return"0";if(P(this))return"-"+D(this).toString(I);for(var g=d(Math.pow(I,6)),v=this,E="";;){var w=Y(v,g).g;v=U(v,w.j(g));var b=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=w,N(v))return b+E;for(;6>b.length;)b="0"+b;E=b+E}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function N(I){if(I.h!=0)return!1;for(var g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function P(I){return I.h==-1}n.l=function(I){return I=U(this,I),P(I)?-1:N(I)?0:1};function D(I){for(var g=I.g.length,v=[],E=0;E<g;E++)v[E]=~I.g[E];return new a(v,~I.h).add(T)}n.abs=function(){return P(this)?D(this):this},n.add=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],E=0,w=0;w<=g;w++){var b=E+(this.i(w)&65535)+(I.i(w)&65535),_=(b>>>16)+(this.i(w)>>>16)+(I.i(w)>>>16);E=_>>>16,b&=65535,_&=65535,v[w]=_<<16|b}return new a(v,v[v.length-1]&-2147483648?-1:0)};function U(I,g){return I.add(D(g))}n.j=function(I){if(N(this)||N(I))return y;if(P(this))return P(I)?D(this).j(D(I)):D(D(this).j(I));if(P(I))return D(this.j(D(I)));if(0>this.l(k)&&0>I.l(k))return d(this.m()*I.m());for(var g=this.g.length+I.g.length,v=[],E=0;E<2*g;E++)v[E]=0;for(E=0;E<this.g.length;E++)for(var w=0;w<I.g.length;w++){var b=this.i(E)>>>16,_=this.i(E)&65535,_e=I.i(w)>>>16,zt=I.i(w)&65535;v[2*E+2*w]+=_*zt,M(v,2*E+2*w),v[2*E+2*w+1]+=b*zt,M(v,2*E+2*w+1),v[2*E+2*w+1]+=_*_e,M(v,2*E+2*w+1),v[2*E+2*w+2]+=b*_e,M(v,2*E+2*w+2)}for(E=0;E<g;E++)v[E]=v[2*E+1]<<16|v[2*E];for(E=g;E<2*g;E++)v[E]=0;return new a(v,0)};function M(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function q(I,g){this.g=I,this.h=g}function Y(I,g){if(N(g))throw Error("division by zero");if(N(I))return new q(y,y);if(P(I))return g=Y(D(I),g),new q(D(g.g),D(g.h));if(P(g))return g=Y(I,D(g)),new q(D(g.g),g.h);if(30<I.g.length){if(P(I)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var v=T,E=g;0>=E.l(I);)v=me(v),E=me(E);var w=re(v,1),b=re(E,1);for(E=re(E,2),v=re(v,2);!N(E);){var _=b.add(E);0>=_.l(I)&&(w=w.add(v),b=_),E=re(E,1),v=re(v,1)}return g=U(I,w.j(g)),new q(w,g)}for(w=y;0<=I.l(g);){for(v=Math.max(1,Math.floor(I.m()/g.m())),E=Math.ceil(Math.log(v)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),b=d(v),_=b.j(g);P(_)||0<_.l(I);)v-=E,b=d(v),_=b.j(g);N(b)&&(b=T),w=w.add(b),I=U(I,_)}return new q(w,I)}n.A=function(I){return Y(this,I).h},n.and=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)&I.i(E);return new a(v,this.h&I.h)},n.or=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)|I.i(E);return new a(v,this.h|I.h)},n.xor=function(I){for(var g=Math.max(this.g.length,I.g.length),v=[],E=0;E<g;E++)v[E]=this.i(E)^I.i(E);return new a(v,this.h^I.h)};function me(I){for(var g=I.g.length+1,v=[],E=0;E<g;E++)v[E]=I.i(E)<<1|I.i(E-1)>>>31;return new a(v,I.h)}function re(I,g){var v=g>>5;g%=32;for(var E=I.g.length-v,w=[],b=0;b<E;b++)w[b]=0<g?I.i(b+v)>>>g|I.i(b+v+1)<<32-g:I.i(b+v);return new a(w,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,fd=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Ct=a}).apply(typeof Xl<"u"?Xl:typeof self<"u"?self:typeof window<"u"?window:{});var gs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pd,ur,md,Is,Mo,gd,_d,yd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof gs=="object"&&gs];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var A=o[p];if(!(A in h))break e;h=h[A]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,p=!1,A={next:function(){if(!p&&h<o.length){var S=h++;return{value:l(S,o[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function d(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function m(o,l,h){return o.call.apply(o.bind,arguments)}function y(o,l,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,p),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function T(o,l,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:y,T.apply(null,arguments)}function k(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function N(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,A,S){for(var V=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)V[Z-2]=arguments[Z];return l.prototype[A].apply(p,V)}}function P(o){const l=o.length;if(0<l){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function D(o,l){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const A=o.length||0,S=p.length||0;o.length=A+S;for(let V=0;V<S;V++)o[A+V]=p[V]}else o.push(p)}}class U{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function M(o){return/^[\s\xa0]*$/.test(o)}function q(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function Y(o){return Y[" "](o),o}Y[" "]=function(){};var me=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function re(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function I(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function g(o){const l={};for(const h in o)l[h]=o[h];return l}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,l){let h,p;for(let A=1;A<arguments.length;A++){p=arguments[A];for(h in p)o[h]=p[h];for(let S=0;S<v.length;S++)h=v[S],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function w(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function b(o){c.setTimeout(()=>{throw o},0)}function _(){var o=Vi;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class _e{constructor(){this.h=this.g=null}add(l,h){const p=zt.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var zt=new U(()=>new Bp,o=>o.reset());class Bp{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Hn,Kn=!1,Vi=new _e,bc=()=>{const o=c.Promise.resolve(void 0);Hn=()=>{o.then($p)}};var $p=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){b(h)}var l=zt;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Kn=!1};function wt(){this.s=this.s,this.C=this.C}wt.prototype.s=!1,wt.prototype.ma=function(){this.s||(this.s=!0,this.N())},wt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var zp=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o})();function Wn(o,l){if(Ie.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(me){e:{try{Y(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:jp[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Wn.aa.h.call(this)}}N(Wn,Ie);var jp={2:"touch",3:"pen",4:"mouse"};Wn.prototype.h=function(){Wn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Qr="closure_listenable_"+(1e6*Math.random()|0),qp=0;function Hp(o,l,h,p,A){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=A,this.key=++qp,this.da=this.fa=!1}function Jr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Yr(o){this.src=o,this.g={},this.h=0}Yr.prototype.add=function(o,l,h,p,A){var S=o.toString();o=this.g[S],o||(o=this.g[S]=[],this.h++);var V=Li(o,l,p,A);return-1<V?(l=o[V],h||(l.fa=!1)):(l=new Hp(l,this.src,S,!!p,A),l.fa=h,o.push(l)),l};function Oi(o,l){var h=l.type;if(h in o.g){var p=o.g[h],A=Array.prototype.indexOf.call(p,l,void 0),S;(S=0<=A)&&Array.prototype.splice.call(p,A,1),S&&(Jr(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Li(o,l,h,p){for(var A=0;A<o.length;++A){var S=o[A];if(!S.da&&S.listener==l&&S.capture==!!h&&S.ha==p)return A}return-1}var Mi="closure_lm_"+(1e6*Math.random()|0),xi={};function Ac(o,l,h,p,A){if(Array.isArray(l)){for(var S=0;S<l.length;S++)Ac(o,l[S],h,p,A);return null}return h=Rc(h),o&&o[Qr]?o.K(l,h,d(p)?!!p.capture:!1,A):Kp(o,l,h,!1,p,A)}function Kp(o,l,h,p,A,S){if(!l)throw Error("Invalid event type");var V=d(A)?!!A.capture:!!A,Z=Ui(o);if(Z||(o[Mi]=Z=new Yr(o)),h=Z.add(l,h,p,V,S),h.proxy)return h;if(p=Wp(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)zp||(A=V),A===void 0&&(A=!1),o.addEventListener(l.toString(),p,A);else if(o.attachEvent)o.attachEvent(kc(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Wp(){function o(h){return l.call(o.src,o.listener,h)}const l=Gp;return o}function Sc(o,l,h,p,A){if(Array.isArray(l))for(var S=0;S<l.length;S++)Sc(o,l[S],h,p,A);else p=d(p)?!!p.capture:!!p,h=Rc(h),o&&o[Qr]?(o=o.i,l=String(l).toString(),l in o.g&&(S=o.g[l],h=Li(S,h,p,A),-1<h&&(Jr(S[h]),Array.prototype.splice.call(S,h,1),S.length==0&&(delete o.g[l],o.h--)))):o&&(o=Ui(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Li(l,h,p,A)),(h=-1<o?l[o]:null)&&Fi(h))}function Fi(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[Qr])Oi(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(kc(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=Ui(l))?(Oi(h,o),h.h==0&&(h.src=null,l[Mi]=null)):Jr(o)}}}function kc(o){return o in xi?xi[o]:xi[o]="on"+o}function Gp(o,l){if(o.da)o=!0;else{l=new Wn(l,this);var h=o.listener,p=o.ha||o.src;o.fa&&Fi(o),o=h.call(p,l)}return o}function Ui(o){return o=o[Mi],o instanceof Yr?o:null}var Bi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rc(o){return typeof o=="function"?o:(o[Bi]||(o[Bi]=function(l){return o.handleEvent(l)}),o[Bi])}function be(){wt.call(this),this.i=new Yr(this),this.M=this,this.F=null}N(be,wt),be.prototype[Qr]=!0,be.prototype.removeEventListener=function(o,l,h,p){Sc(this,o,l,h,p)};function De(o,l){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new Ie(l,o);else if(l instanceof Ie)l.target=l.target||o;else{var A=l;l=new Ie(p,o),E(l,A)}if(A=!0,h)for(var S=h.length-1;0<=S;S--){var V=l.g=h[S];A=Xr(V,p,!0,l)&&A}if(V=l.g=o,A=Xr(V,p,!0,l)&&A,A=Xr(V,p,!1,l)&&A,h)for(S=0;S<h.length;S++)V=l.g=h[S],A=Xr(V,p,!1,l)&&A}be.prototype.N=function(){if(be.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],p=0;p<h.length;p++)Jr(h[p]);delete o.g[l],o.h--}}this.F=null},be.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},be.prototype.L=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function Xr(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,S=0;S<l.length;++S){var V=l[S];if(V&&!V.da&&V.capture==h){var Z=V.listener,ye=V.ha||V.src;V.fa&&Oi(o.i,V),A=Z.call(ye,p)!==!1&&A}}return A&&!p.defaultPrevented}function Pc(o,l,h){if(typeof o=="function")h&&(o=T(o,h));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Cc(o){o.g=Pc(()=>{o.g=null,o.i&&(o.i=!1,Cc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Qp extends wt{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Cc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Gn(o){wt.call(this),this.h=o,this.g={}}N(Gn,wt);var Dc=[];function Nc(o){re(o.g,function(l,h){this.g.hasOwnProperty(h)&&Fi(l)},o),o.g={}}Gn.prototype.N=function(){Gn.aa.N.call(this),Nc(this)},Gn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $i=c.JSON.stringify,Jp=c.JSON.parse,Yp=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function zi(){}zi.prototype.h=null;function Vc(o){return o.h||(o.h=o.i())}function Oc(){}var Qn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ji(){Ie.call(this,"d")}N(ji,Ie);function qi(){Ie.call(this,"c")}N(qi,Ie);var jt={},Lc=null;function Zr(){return Lc=Lc||new be}jt.La="serverreachability";function Mc(o){Ie.call(this,jt.La,o)}N(Mc,Ie);function Jn(o){const l=Zr();De(l,new Mc(l))}jt.STAT_EVENT="statevent";function xc(o,l){Ie.call(this,jt.STAT_EVENT,o),this.stat=l}N(xc,Ie);function Ne(o){const l=Zr();De(l,new xc(l,o))}jt.Ma="timingevent";function Fc(o,l){Ie.call(this,jt.Ma,o),this.size=l}N(Fc,Ie);function Yn(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function Xn(){this.g=!0}Xn.prototype.xa=function(){this.g=!1};function Xp(o,l,h,p,A,S){o.info(function(){if(o.g)if(S)for(var V="",Z=S.split("&"),ye=0;ye<Z.length;ye++){var J=Z[ye].split("=");if(1<J.length){var Ae=J[0];J=J[1];var Se=Ae.split("_");V=2<=Se.length&&Se[1]=="type"?V+(Ae+"="+J+"&"):V+(Ae+"=redacted&")}}else V=null;else V=S;return"XMLHTTP REQ ("+p+") [attempt "+A+"]: "+l+`
`+h+`
`+V})}function Zp(o,l,h,p,A,S,V){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+A+"]: "+l+`
`+h+`
`+S+" "+V})}function mn(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+tm(o,h)+(p?" "+p:"")})}function em(o,l){o.info(function(){return"TIMEOUT: "+l})}Xn.prototype.info=function(){};function tm(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var A=p[1];if(Array.isArray(A)&&!(1>A.length)){var S=A[0];if(S!="noop"&&S!="stop"&&S!="close")for(var V=1;V<A.length;V++)A[V]=""}}}}return $i(h)}catch{return l}}var es={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Uc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Hi;function ts(){}N(ts,zi),ts.prototype.g=function(){return new XMLHttpRequest},ts.prototype.i=function(){return{}},Hi=new ts;function Et(o,l,h,p){this.j=o,this.i=l,this.l=h,this.R=p||1,this.U=new Gn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bc}function Bc(){this.i=null,this.g="",this.h=!1}var $c={},Ki={};function Wi(o,l,h){o.L=1,o.v=is(ct(l)),o.m=h,o.P=!0,zc(o,null)}function zc(o,l){o.F=Date.now(),ns(o),o.A=ct(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),nl(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Bc,o.g=wl(o.j,h?l:null,!o.m),0<o.O&&(o.M=new Qp(T(o.Y,o,o.g),o.O)),l=o.U,h=o.g,p=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(Dc[0]=A.toString()),A=Dc);for(var S=0;S<A.length;S++){var V=Ac(h,A[S],p||l.handleEvent,!1,l.h||l);if(!V)break;l.g[V.key]=V}l=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),Jn(),Xp(o.i,o.u,o.A,o.l,o.R,o.m)}Et.prototype.ca=function(o){o=o.target;const l=this.M;l&&lt(o)==3?l.j():this.Y(o)},Et.prototype.Y=function(o){try{if(o==this.g)e:{const Se=lt(this.g);var l=this.g.Ba();const yn=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||ll(this.g)))){this.J||Se!=4||l==7||(l==8||0>=yn?Jn(3):Jn(2)),Gi(this);var h=this.g.Z();this.X=h;t:if(jc(this)){var p=ll(this.g);o="";var A=p.length,S=lt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qt(this),Zn(this);var V="";break t}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(p[l],{stream:!(S&&l==A-1)});p.length=0,this.h.g+=o,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=h==200,Zp(this.i,this.u,this.A,this.l,this.R,Se,h),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,ye=this.g;if((Z=ye.g?ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(Z)){var J=Z;break t}}J=null}if(h=J)mn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qi(this,h);else{this.o=!1,this.s=3,Ne(12),qt(this),Zn(this);break e}}if(this.P){h=!0;let ze;for(;!this.J&&this.C<V.length;)if(ze=nm(this,V),ze==Ki){Se==4&&(this.s=4,Ne(14),h=!1),mn(this.i,this.l,null,"[Incomplete Response]");break}else if(ze==$c){this.s=4,Ne(15),mn(this.i,this.l,V,"[Invalid Chunk]"),h=!1;break}else mn(this.i,this.l,ze,null),Qi(this,ze);if(jc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||V.length!=0||this.h.h||(this.s=1,Ne(16),h=!1),this.o=this.o&&h,!h)mn(this.i,this.l,V,"[Invalid Chunked Response]"),qt(this),Zn(this);else if(0<V.length&&!this.W){this.W=!0;var Ae=this.j;Ae.g==this&&Ae.ba&&!Ae.M&&(Ae.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),to(Ae),Ae.M=!0,Ne(11))}}else mn(this.i,this.l,V,null),Qi(this,V);Se==4&&qt(this),this.o&&!this.J&&(Se==4?gl(this.j,this):(this.o=!1,ns(this)))}else vm(this.g),h==400&&0<V.indexOf("Unknown SID")?(this.s=3,Ne(12)):(this.s=0,Ne(13)),qt(this),Zn(this)}}}catch{}finally{}};function jc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function nm(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?Ki:(h=Number(l.substring(h,p)),isNaN(h)?$c:(p+=1,p+h>l.length?Ki:(l=l.slice(p,p+h),o.C=p+h,l)))}Et.prototype.cancel=function(){this.J=!0,qt(this)};function ns(o){o.S=Date.now()+o.I,qc(o,o.I)}function qc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Yn(T(o.ba,o),l)}function Gi(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Et.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(em(this.i,this.A),this.L!=2&&(Jn(),Ne(17)),qt(this),this.s=2,Zn(this)):qc(this,this.S-o)};function Zn(o){o.j.G==0||o.J||gl(o.j,o)}function qt(o){Gi(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,Nc(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Qi(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Ji(h.h,o))){if(!o.K&&Ji(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var A=p;if(A[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)hs(h),ls(h);else break e;eo(h),Ne(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=Yn(T(h.Za,h),6e3));if(1>=Wc(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Kt(h,11)}else if((o.K||h.g==o)&&hs(h),!M(l))for(A=h.Da.g.parse(l),l=0;l<A.length;l++){let J=A[l];if(h.T=J[0],J=J[1],h.G==2)if(J[0]=="c"){h.K=J[1],h.ia=J[2];const Ae=J[3];Ae!=null&&(h.la=Ae,h.j.info("VER="+h.la));const Se=J[4];Se!=null&&(h.Aa=Se,h.j.info("SVER="+h.Aa));const yn=J[5];yn!=null&&typeof yn=="number"&&0<yn&&(p=1.5*yn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const ze=o.g;if(ze){const fs=ze.g?ze.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fs){var S=p.h;S.g||fs.indexOf("spdy")==-1&&fs.indexOf("quic")==-1&&fs.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(Yi(S,S.h),S.h=null))}if(p.D){const no=ze.g?ze.g.getResponseHeader("X-HTTP-Session-Id"):null;no&&(p.ya=no,te(p.I,p.D,no))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var V=o;if(p.qa=vl(p,p.J?p.ia:null,p.W),V.K){Gc(p.h,V);var Z=V,ye=p.L;ye&&(Z.I=ye),Z.B&&(Gi(Z),ns(Z)),p.g=V}else pl(p);0<h.i.length&&us(h)}else J[0]!="stop"&&J[0]!="close"||Kt(h,7);else h.G==3&&(J[0]=="stop"||J[0]=="close"?J[0]=="stop"?Kt(h,7):Zi(h):J[0]!="noop"&&h.l&&h.l.ta(J),h.v=0)}}Jn(4)}catch{}}var rm=class{constructor(o,l){this.g=o,this.map=l}};function Hc(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Kc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Wc(o){return o.h?1:o.g?o.g.size:0}function Ji(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Yi(o,l){o.g?o.g.add(l):o.h=l}function Gc(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}Hc.prototype.cancel=function(){if(this.i=Qc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Qc(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return P(o.i)}function sm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,p=0;p<h;p++)l.push(o[p]);return l}l=[],h=0;for(p in o)l[h++]=o[p];return l}function im(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const p in o)l[h++]=p;return l}}}function Jc(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=im(o),p=sm(o),A=p.length,S=0;S<A;S++)l.call(void 0,p[S],h&&h[S],o)}var Yc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function om(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),A=null;if(0<=p){var S=o[h].substring(0,p);A=o[h].substring(p+1)}else S=o[h];l(S,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ht(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ht){this.h=o.h,rs(this,o.j),this.o=o.o,this.g=o.g,ss(this,o.s),this.l=o.l;var l=o.i,h=new nr;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),Xc(this,h),this.m=o.m}else o&&(l=String(o).match(Yc))?(this.h=!1,rs(this,l[1]||"",!0),this.o=er(l[2]||""),this.g=er(l[3]||"",!0),ss(this,l[4]),this.l=er(l[5]||"",!0),Xc(this,l[6]||"",!0),this.m=er(l[7]||"")):(this.h=!1,this.i=new nr(null,this.h))}Ht.prototype.toString=function(){var o=[],l=this.j;l&&o.push(tr(l,Zc,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(tr(l,Zc,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(tr(h,h.charAt(0)=="/"?lm:cm,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",tr(h,hm)),o.join("")};function ct(o){return new Ht(o)}function rs(o,l,h){o.j=h?er(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function ss(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function Xc(o,l,h){l instanceof nr?(o.i=l,dm(o.i,o.h)):(h||(l=tr(l,um)),o.i=new nr(l,o.h))}function te(o,l,h){o.i.set(l,h)}function is(o){return te(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function er(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function tr(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,am),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function am(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Zc=/[#\/\?@]/g,cm=/[#\?:]/g,lm=/[#\?]/g,um=/[#\?@]/g,hm=/#/g;function nr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Tt(o){o.g||(o.g=new Map,o.h=0,o.i&&om(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=nr.prototype,n.add=function(o,l){Tt(this),this.i=null,o=gn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function el(o,l){Tt(o),l=gn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function tl(o,l){return Tt(o),l=gn(o,l),o.g.has(l)}n.forEach=function(o,l){Tt(this),this.g.forEach(function(h,p){h.forEach(function(A){o.call(l,A,p,this)},this)},this)},n.na=function(){Tt(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let p=0;p<l.length;p++){const A=o[p];for(let S=0;S<A.length;S++)h.push(l[p])}return h},n.V=function(o){Tt(this);let l=[];if(typeof o=="string")tl(this,o)&&(l=l.concat(this.g.get(gn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return Tt(this),this.i=null,o=gn(this,o),tl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function nl(o,l,h){el(o,l),0<h.length&&(o.i=null,o.g.set(gn(o,l),P(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var p=l[h];const S=encodeURIComponent(String(p)),V=this.V(p);for(p=0;p<V.length;p++){var A=S;V[p]!==""&&(A+="="+encodeURIComponent(String(V[p]))),o.push(A)}}return this.i=o.join("&")};function gn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function dm(o,l){l&&!o.j&&(Tt(o),o.i=null,o.g.forEach(function(h,p){var A=p.toLowerCase();p!=A&&(el(this,p),nl(this,A,h))},o)),o.j=l}function fm(o,l){const h=new Xn;if(c.Image){const p=new Image;p.onload=k(It,h,"TestLoadImage: loaded",!0,l,p),p.onerror=k(It,h,"TestLoadImage: error",!1,l,p),p.onabort=k(It,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=k(It,h,"TestLoadImage: timeout",!1,l,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function pm(o,l){const h=new Xn,p=new AbortController,A=setTimeout(()=>{p.abort(),It(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(S=>{clearTimeout(A),S.ok?It(h,"TestPingServer: ok",!0,l):It(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),It(h,"TestPingServer: error",!1,l)})}function It(o,l,h,p,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),p(h)}catch{}}function mm(){this.g=new Yp}function gm(o,l,h){const p=h||"";try{Jc(o,function(A,S){let V=A;d(A)&&(V=$i(A)),l.push(p+S+"="+encodeURIComponent(V))})}catch(A){throw l.push(p+"type="+encodeURIComponent("_badmap")),A}}function os(o){this.l=o.Ub||null,this.j=o.eb||!1}N(os,zi),os.prototype.g=function(){return new as(this.l,this.j)},os.prototype.i=(function(o){return function(){return o}})({});function as(o,l){be.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(as,be),n=as.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,sr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,rr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,sr(this)),this.g&&(this.readyState=3,sr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function rl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?rr(this):sr(this),this.readyState==3&&rl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,rr(this))},n.Qa=function(o){this.g&&(this.response=o,rr(this))},n.ga=function(){this.g&&rr(this)};function rr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,sr(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function sr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(as.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function sl(o){let l="";return re(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function Xi(o,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=sl(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):te(o,l,h))}function ie(o){be.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ie,be);var _m=/^https?$/i,ym=["POST","PUT"];n=ie.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Hi.g(),this.v=this.o?Vc(this.o):Vc(Hi),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(S){il(this,S);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var A in p)h.set(A,p[A]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())h.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(S=>S.toLowerCase()=="content-type"),A=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ym,l,void 0))||p||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,V]of h)this.g.setRequestHeader(S,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cl(this),this.u=!0,this.g.send(o),this.u=!1}catch(S){il(this,S)}};function il(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,ol(o),cs(o)}function ol(o){o.A||(o.A=!0,De(o,"complete"),De(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,De(this,"complete"),De(this,"abort"),cs(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cs(this,!0)),ie.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?al(this):this.bb())},n.bb=function(){al(this)};function al(o){if(o.h&&typeof a<"u"&&(!o.v[1]||lt(o)!=4||o.Z()!=2)){if(o.u&&lt(o)==4)Pc(o.Ea,0,o);else if(De(o,"readystatechange"),lt(o)==4){o.h=!1;try{const V=o.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=V===0){var A=String(o.D).match(Yc)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),p=!_m.test(A?A.toLowerCase():"")}h=p}if(h)De(o,"complete"),De(o,"success");else{o.m=6;try{var S=2<lt(o)?o.g.statusText:""}catch{S=""}o.l=S+" ["+o.Z()+"]",ol(o)}}finally{cs(o)}}}}function cs(o,l){if(o.g){cl(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||De(o,"ready");try{h.onreadystatechange=p}catch{}}}function cl(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function lt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<lt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Jp(l)}};function ll(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function vm(o){const l={};o=(o.g&&2<=lt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(M(o[p]))continue;var h=w(o[p]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const S=l[A]||[];l[A]=S,S.push(h)}I(l,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ir(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function ul(o){this.Aa=0,this.i=[],this.j=new Xn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ir("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ir("baseRetryDelayMs",5e3,o),this.cb=ir("retryDelaySeedMs",1e4,o),this.Wa=ir("forwardChannelMaxRetries",2,o),this.wa=ir("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Hc(o&&o.concurrentRequestLimit),this.Da=new mm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ul.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,p){Ne(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=vl(this,null,this.W),us(this)};function Zi(o){if(hl(o),o.G==3){var l=o.U++,h=ct(o.I);if(te(h,"SID",o.K),te(h,"RID",l),te(h,"TYPE","terminate"),or(o,h),l=new Et(o,o.j,l),l.L=2,l.v=is(ct(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=wl(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ns(l)}yl(o)}function ls(o){o.g&&(to(o),o.g.cancel(),o.g=null)}function hl(o){ls(o),o.u&&(c.clearTimeout(o.u),o.u=null),hs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function us(o){if(!Kc(o.h)&&!o.s){o.s=!0;var l=o.Ga;Hn||bc(),Kn||(Hn(),Kn=!0),Vi.add(l,o),o.B=0}}function wm(o,l){return Wc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Yn(T(o.Ga,o,l),_l(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new Et(this,this.j,o);let S=this.o;if(this.S&&(S?(S=g(S),E(S,this.S)):S=this.S),this.m!==null||this.O||(A.H=S,S=null),this.P)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,4096<l){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=fl(this,A,l),h=ct(this.I),te(h,"RID",o),te(h,"CVER",22),this.D&&te(h,"X-HTTP-Session-Id",this.D),or(this,h),S&&(this.O?l="headers="+encodeURIComponent(String(sl(S)))+"&"+l:this.m&&Xi(h,this.m,S)),Yi(this.h,A),this.Ua&&te(h,"TYPE","init"),this.P?(te(h,"$req",l),te(h,"SID","null"),A.T=!0,Wi(A,h,null)):Wi(A,h,l),this.G=2}}else this.G==3&&(o?dl(this,o):this.i.length==0||Kc(this.h)||dl(this))};function dl(o,l){var h;l?h=l.l:h=o.U++;const p=ct(o.I);te(p,"SID",o.K),te(p,"RID",h),te(p,"AID",o.T),or(o,p),o.m&&o.o&&Xi(p,o.m,o.o),h=new Et(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=fl(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Yi(o.h,h),Wi(h,p,l)}function or(o,l){o.H&&re(o.H,function(h,p){te(l,p,h)}),o.l&&Jc({},function(h,p){te(l,p,h)})}function fl(o,l,h){h=Math.min(o.i.length,h);var p=o.l?T(o.l.Na,o.l,o):null;e:{var A=o.i;let S=-1;for(;;){const V=["count="+h];S==-1?0<h?(S=A[0].g,V.push("ofs="+S)):S=0:V.push("ofs="+S);let Z=!0;for(let ye=0;ye<h;ye++){let J=A[ye].g;const Ae=A[ye].map;if(J-=S,0>J)S=Math.max(0,A[ye].g-100),Z=!1;else try{gm(Ae,V,"req"+J+"_")}catch{p&&p(Ae)}}if(Z){p=V.join("&");break e}}}return o=o.i.splice(0,h),l.D=o,p}function pl(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Hn||bc(),Kn||(Hn(),Kn=!0),Vi.add(l,o),o.v=0}}function eo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Yn(T(o.Fa,o),_l(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,ml(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Yn(T(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ne(10),ls(this),ml(this))};function to(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function ml(o){o.g=new Et(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=ct(o.qa);te(l,"RID","rpc"),te(l,"SID",o.K),te(l,"AID",o.T),te(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&te(l,"TO",o.ja),te(l,"TYPE","xmlhttp"),or(o,l),o.m&&o.o&&Xi(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=is(ct(l)),h.m=null,h.P=!0,zc(h,o)}n.Za=function(){this.C!=null&&(this.C=null,ls(this),eo(this),Ne(19))};function hs(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function gl(o,l){var h=null;if(o.g==l){hs(o),to(o),o.g=null;var p=2}else if(Ji(o.h,l))h=l.D,Gc(o.h,l),p=1;else return;if(o.G!=0){if(l.o)if(p==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;p=Zr(),De(p,new Fc(p,h)),us(o)}else pl(o);else if(A=l.s,A==3||A==0&&0<l.X||!(p==1&&wm(o,l)||p==2&&eo(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),A){case 1:Kt(o,5);break;case 4:Kt(o,10);break;case 3:Kt(o,6);break;default:Kt(o,2)}}}function _l(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function Kt(o,l){if(o.j.info("Error code "+l),l==2){var h=T(o.fb,o),p=o.Xa;const A=!p;p=new Ht(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||rs(p,"https"),is(p),A?fm(p.toString(),h):pm(p.toString(),h)}else Ne(2);o.G=0,o.l&&o.l.sa(l),yl(o),hl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function yl(o){if(o.G=0,o.ka=[],o.l){const l=Qc(o.h);(l.length!=0||o.i.length!=0)&&(D(o.ka,l),D(o.ka,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.ra()}}function vl(o,l,h){var p=h instanceof Ht?ct(h):new Ht(h);if(p.g!="")l&&(p.g=l+"."+p.g),ss(p,p.s);else{var A=c.location;p=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var S=new Ht(null);p&&rs(S,p),l&&(S.g=l),A&&ss(S,A),h&&(S.l=h),p=S}return h=o.D,l=o.ya,h&&l&&te(p,h,l),te(p,"VER",o.la),or(o,p),p}function wl(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ie(new os({eb:h})):new ie(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function El(){}n=El.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ds(){}ds.prototype.g=function(o,l){return new Fe(o,l)};function Fe(o,l){be.call(this),this.g=new ul(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!M(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!M(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new _n(this)}N(Fe,be),Fe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Fe.prototype.close=function(){Zi(this.g)},Fe.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=$i(o),o=h);l.i.push(new rm(l.Ya++,o)),l.G==3&&us(l)},Fe.prototype.N=function(){this.g.l=null,delete this.j,Zi(this.g),delete this.g,Fe.aa.N.call(this)};function Tl(o){ji.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}N(Tl,ji);function Il(){qi.call(this),this.status=1}N(Il,qi);function _n(o){this.g=o}N(_n,El),_n.prototype.ua=function(){De(this.g,"a")},_n.prototype.ta=function(o){De(this.g,new Tl(o))},_n.prototype.sa=function(o){De(this.g,new Il)},_n.prototype.ra=function(){De(this.g,"b")},ds.prototype.createWebChannel=ds.prototype.g,Fe.prototype.send=Fe.prototype.o,Fe.prototype.open=Fe.prototype.m,Fe.prototype.close=Fe.prototype.close,yd=function(){return new ds},_d=function(){return Zr()},gd=jt,Mo={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},es.NO_ERROR=0,es.TIMEOUT=8,es.HTTP_ERROR=6,Is=es,Uc.COMPLETE="complete",md=Uc,Oc.EventType=Qn,Qn.OPEN="a",Qn.CLOSE="b",Qn.ERROR="c",Qn.MESSAGE="d",be.prototype.listen=be.prototype.K,ur=Oc,ie.prototype.listenOnce=ie.prototype.L,ie.prototype.getLastError=ie.prototype.Ka,ie.prototype.getLastErrorCode=ie.prototype.Ba,ie.prototype.getStatus=ie.prototype.Z,ie.prototype.getResponseJson=ie.prototype.Oa,ie.prototype.getResponseText=ie.prototype.oa,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Ha,pd=ie}).apply(typeof gs<"u"?gs:typeof self<"u"?self:typeof window<"u"?window:{});const Zl="@firebase/firestore",eu="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Bn="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn=new ca("@firebase/firestore");function vn(){return tn.logLevel}function L(n,...e){if(tn.logLevel<=H.DEBUG){const t=e.map(ya);tn.debug(`Firestore (${Bn}): ${n}`,...t)}}function _t(n,...e){if(tn.logLevel<=H.ERROR){const t=e.map(ya);tn.error(`Firestore (${Bn}): ${n}`,...t)}}function nn(n,...e){if(tn.logLevel<=H.WARN){const t=e.map(ya);tn.warn(`Firestore (${Bn}): ${n}`,...t)}}function ya(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function B(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,vd(n,r,t)}function vd(n,e,t){let r=`FIRESTORE (${Bn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw _t(r),new Error(r)}function X(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||vd(e,s,r)}function z(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class O extends at{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Oy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Oe.UNAUTHENTICATED)))}shutdown(){}}class Ly{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Dt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Dt,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Dt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new Vy(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new Oe(e)}}class My{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class xy{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new My(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Oe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class tu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fy{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,dt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){X(this.o===void 0,3512);const r=i=>{i.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,L("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new tu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(X(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new tu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function wd(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Uy(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function j(n,e){return n<e?-1:n>e?1:0}function xo(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return j(r,s);{const i=wd(),a=By(i.encode(nu(n,t)),i.encode(nu(e,t)));return a!==0?a:j(r,s)}}t+=r>65535?2:1}return j(n.length,e.length)}function nu(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function By(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return j(n[t],e[t]);return j(n.length,e.length)}function Cn(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="__name__";class Je{constructor(e,t,r){t===void 0?t=0:t>e.length&&B(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&B(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Je.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Je?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Je.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return j(e.length,t.length)}static compareSegments(e,t){const r=Je.isNumericId(e),s=Je.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Je.extractNumericId(e).compare(Je.extractNumericId(t)):xo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Ct.fromString(e.substring(4,e.length-2))}}class ee extends Je{construct(e,t,r){return new ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new O(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ee(t)}static emptyPath(){return new ee([])}}const $y=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class we extends Je{construct(e,t,r){return new we(e,t,r)}static isValidIdentifier(e){return $y.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),we.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ru}static keyField(){return new we([ru])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new O(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new O(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new O(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new O(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new we(t)}static emptyPath(){return new we([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.path=e}static fromPath(e){return new x(ee.fromString(e))}static fromName(e){return new x(ee.fromString(e).popFirst(5))}static empty(){return new x(ee.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ee.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ee.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new x(new ee(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ed(n,e,t){if(!t)throw new O(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function zy(n,e,t,r){if(e===!0&&r===!0)throw new O(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function su(n){if(!x.isDocumentKey(n))throw new O(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function iu(n){if(x.isDocumentKey(n))throw new O(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Td(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ui(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B(12329,{type:typeof n})}function mt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new O(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ui(n);throw new O(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function jy(n,e){if(e<=0)throw new O(R.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function le(n,e){const t={typeString:n};return e&&(t.value=e),t}function $r(n,e){if(!Td(n))throw new O(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new O(R.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=-62135596800,au=1e6;class ne{static now(){return ne.fromMillis(Date.now())}static fromDate(e){return ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*au);return new ne(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new O(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new O(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ou)throw new O(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new O(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/au}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if($r(e,ne._jsonSchema))return new ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ou;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ne._jsonSchemaVersion="firestore/timestamp/1.0",ne._jsonSchema={type:le("string",ne._jsonSchemaVersion),seconds:le("number"),nanoseconds:le("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${static fromTimestamp(e){return new $(e)}static min(){return new $(new ne(0,0))}static max(){return new $(new ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Sr=-1;function qy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=$.fromTimestamp(r===1e9?new ne(t+1,0):new ne(t,r));return new Vt(s,x.empty(),e)}function Hy(n){return new Vt(n.readTime,n.key,Sr)}class Vt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Vt($.min(),x.empty(),Sr)}static max(){return new Vt($.max(),x.empty(),Sr)}}function Ky(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=x.comparator(n.documentKey,e.documentKey),t!==0?t:j(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Gy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $n(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==Wy)throw n;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):C.reject(t)}static resolve(e){return new C(((t,r)=>{t(e)}))}static reject(e){return new C(((t,r)=>{r(e)}))}static waitFor(e){return new C(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(u=>r(u)))})),a=!0,i===s&&t()}))}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next((s=>s?C.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new C(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;t(e[d]).next((m=>{a[d]=m,++c,c===i&&r(a)}),(m=>s(m)))}}))}static doWhile(e,t){return new C(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function Qy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function zn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class hi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}hi.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa=-1;function di(n){return n==null}function Bs(n){return n===0&&1/n==-1/0}function Jy(n){return typeof n=="number"&&Number.isInteger(n)&&!Bs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="";function Yy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=cu(e)),e=Xy(n.get(t),e);return cu(e)}function Xy(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Id:t+="";break;default:t+=i}}return t}function cu(n){return n+Id+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ut(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function bd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.comparator=e,this.root=t||ve.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ve.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ve.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _s(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _s(this.root,e,this.comparator,!1)}getReverseIterator(){return new _s(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _s(this.root,e,this.comparator,!0)}}class _s{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ve{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ve.RED,this.left=s??ve.EMPTY,this.right=i??ve.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ve(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ve.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ve.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ve.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ve.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw B(43730,{key:this.key,value:this.value});if(this.right.isRed())throw B(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw B(27949);return e+(this.isRed()?0:1)}}ve.EMPTY=null,ve.RED=!0,ve.BLACK=!1;ve.EMPTY=new class{constructor(){this.size=0}get key(){throw B(57766)}get value(){throw B(16141)}get color(){throw B(16727)}get left(){throw B(29726)}get right(){throw B(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new ve(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new uu(this.data.getIterator())}getIteratorFrom(e){return new uu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new fe(this.comparator);return t.data=e,t}}class uu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.fields=e,e.sort(we.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new fe(we.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Cn(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class Ad extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Ad("Invalid base64 string: "+i):i}})(e);return new Te(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const Zy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ot(n){if(X(!!n,39018),typeof n=="string"){let e=0;const t=Zy.exec(n);if(X(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Lt(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="server_timestamp",kd="__type__",Rd="__previous_value__",Pd="__local_write_time__";function Ea(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[kd])===null||t===void 0?void 0:t.stringValue)===Sd}function fi(n){const e=n.mapValue.fields[Rd];return Ea(e)?fi(e):e}function kr(n){const e=Ot(n.mapValue.fields[Pd].timestampValue);return new ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t,r,s,i,a,c,u,d,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=m}}const $s="(default)";class Rr{constructor(e,t){this.projectId=e,this.database=t||$s}static empty(){return new Rr("","")}get isDefaultDatabase(){return this.database===$s}isEqual(e){return e instanceof Rr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="__type__",tv="__max__",ys={mapValue:{}},Dd="__vector__",zs="value";function Mt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ea(n)?4:rv(n)?9007199254740991:nv(n)?10:11:B(28295,{value:n})}function it(n,e){if(n===e)return!0;const t=Mt(n);if(t!==Mt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return kr(n).isEqual(kr(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Ot(s.timestampValue),c=Ot(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Lt(s.bytesValue).isEqual(Lt(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return oe(s.geoPointValue.latitude)===oe(i.geoPointValue.latitude)&&oe(s.geoPointValue.longitude)===oe(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return oe(s.integerValue)===oe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=oe(s.doubleValue),c=oe(i.doubleValue);return a===c?Bs(a)===Bs(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return Cn(n.arrayValue.values||[],e.arrayValue.values||[],it);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(lu(a)!==lu(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!it(a[u],c[u])))return!1;return!0})(n,e);default:return B(52216,{left:n})}}function Pr(n,e){return(n.values||[]).find((t=>it(t,e)))!==void 0}function Dn(n,e){if(n===e)return 0;const t=Mt(n),r=Mt(e);if(t!==r)return j(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=oe(i.integerValue||i.doubleValue),u=oe(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return hu(n.timestampValue,e.timestampValue);case 4:return hu(kr(n),kr(e));case 5:return xo(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Lt(i),u=Lt(a);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),u=a.split("/");for(let d=0;d<c.length&&d<u.length;d++){const m=j(c[d],u[d]);if(m!==0)return m}return j(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=j(oe(i.latitude),oe(a.latitude));return c!==0?c:j(oe(i.longitude),oe(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return du(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,u,d,m;const y=i.fields||{},T=a.fields||{},k=(c=y[zs])===null||c===void 0?void 0:c.arrayValue,N=(u=T[zs])===null||u===void 0?void 0:u.arrayValue,P=j(((d=k==null?void 0:k.values)===null||d===void 0?void 0:d.length)||0,((m=N==null?void 0:N.values)===null||m===void 0?void 0:m.length)||0);return P!==0?P:du(k,N)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===ys.mapValue&&a===ys.mapValue)return 0;if(i===ys.mapValue)return 1;if(a===ys.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=a.fields||{},m=Object.keys(d);u.sort(),m.sort();for(let y=0;y<u.length&&y<m.length;++y){const T=xo(u[y],m[y]);if(T!==0)return T;const k=Dn(c[u[y]],d[m[y]]);if(k!==0)return k}return j(u.length,m.length)})(n.mapValue,e.mapValue);default:throw B(23264,{le:t})}}function hu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return j(n,e);const t=Ot(n),r=Ot(e),s=j(t.seconds,r.seconds);return s!==0?s:j(t.nanos,r.nanos)}function du(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Dn(t[s],r[s]);if(i)return i}return j(t.length,r.length)}function Nn(n){return Fo(n)}function Fo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Ot(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Lt(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return x.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Fo(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Fo(t.fields[a])}`;return s+"}"})(n.mapValue):B(61005,{value:n})}function bs(n){switch(Mt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=fi(n);return e?16+bs(e):16;case 5:return 2*n.stringValue.length;case 6:return Lt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+bs(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Ut(r.fields,((i,a)=>{s+=i.length+bs(a)})),s})(n.mapValue);default:throw B(13486,{value:n})}}function fu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Uo(n){return!!n&&"integerValue"in n}function Ta(n){return!!n&&"arrayValue"in n}function pu(n){return!!n&&"nullValue"in n}function mu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function As(n){return!!n&&"mapValue"in n}function nv(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Cd])===null||t===void 0?void 0:t.stringValue)===Dd}function mr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ut(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=mr(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=mr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function rv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===tv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.value=e}static empty(){return new Me({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!As(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=mr(t)}setAll(e){let t=we.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=mr(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());As(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return it(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];As(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ut(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Me(mr(this.value))}}function Nd(n){const e=[];return Ut(n.fields,((t,r)=>{const s=new we([t]);if(As(r)){const i=Nd(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Ue(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new Re(e,0,$.min(),$.min(),$.min(),Me.empty(),0)}static newFoundDocument(e,t,r,s){return new Re(e,1,t,$.min(),r,s,0)}static newNoDocument(e,t){return new Re(e,2,t,$.min(),$.min(),Me.empty(),0)}static newUnknownDocument(e,t){return new Re(e,3,t,$.min(),$.min(),Me.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Me.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Re&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Re(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class js{constructor(e,t){this.position=e,this.inclusive=t}}function gu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),t.key):r=Dn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function _u(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!it(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Cr{constructor(e,t="asc"){this.field=e,this.dir=t}}function sv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Vd{}class ce extends Vd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new ov(e,t,r):t==="array-contains"?new lv(e,r):t==="in"?new uv(e,r):t==="not-in"?new hv(e,r):t==="array-contains-any"?new dv(e,r):new ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new av(e,r):new cv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Dn(t,this.value)):t!==null&&Mt(this.value)===Mt(t)&&this.matchesComparison(Dn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ge extends Vd{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Ge(e,t)}matches(e){return Od(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Od(n){return n.op==="and"}function Ld(n){return iv(n)&&Od(n)}function iv(n){for(const e of n.filters)if(e instanceof Ge)return!1;return!0}function Bo(n){if(n instanceof ce)return n.field.canonicalString()+n.op.toString()+Nn(n.value);if(Ld(n))return n.filters.map((e=>Bo(e))).join(",");{const e=n.filters.map((t=>Bo(t))).join(",");return`${n.op}(${e})`}}function Md(n,e){return n instanceof ce?(function(r,s){return s instanceof ce&&r.op===s.op&&r.field.isEqual(s.field)&&it(r.value,s.value)})(n,e):n instanceof Ge?(function(r,s){return s instanceof Ge&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&Md(a,s.filters[c])),!0):!1})(n,e):void B(19439)}function xd(n){return n instanceof ce?(function(t){return`${t.field.canonicalString()} ${t.op} ${Nn(t.value)}`})(n):n instanceof Ge?(function(t){return t.op.toString()+" {"+t.getFilters().map(xd).join(" ,")+"}"})(n):"Filter"}class ov extends ce{constructor(e,t,r){super(e,t,r),this.key=x.fromName(r.referenceValue)}matches(e){const t=x.comparator(e.key,this.key);return this.matchesComparison(t)}}class av extends ce{constructor(e,t){super(e,"in",t),this.keys=Fd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class cv extends ce{constructor(e,t){super(e,"not-in",t),this.keys=Fd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Fd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>x.fromName(r.referenceValue)))}class lv extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ta(t)&&Pr(t.arrayValue,this.value)}}class uv extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Pr(this.value.arrayValue,t)}}class hv extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(Pr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Pr(this.value.arrayValue,t)}}class dv extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ta(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Pr(this.value.arrayValue,r)))}}/**
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
 */class fv{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function yu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new fv(n,e,t,r,s,i,a)}function Ia(n){const e=z(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Bo(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),di(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Nn(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Nn(r))).join(",")),e.Pe=t}return e.Pe}function ba(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!sv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Md(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!_u(n.startAt,e.startAt)&&_u(n.endAt,e.endAt)}function $o(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function pv(n,e,t,r,s,i,a,c){return new jn(n,e,t,r,s,i,a,c)}function Aa(n){return new jn(n)}function vu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ud(n){return n.collectionGroup!==null}function gr(n){const e=z(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new fe(we.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Cr(i,r))})),t.has(we.keyField().canonicalString())||e.Te.push(new Cr(we.keyField(),r))}return e.Te}function Ze(n){const e=z(n);return e.Ie||(e.Ie=mv(e,gr(n))),e.Ie}function mv(n,e){if(n.limitType==="F")return yu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Cr(s.field,i)}));const t=n.endAt?new js(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new js(n.startAt.position,n.startAt.inclusive):null;return yu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function zo(n,e){const t=n.filters.concat([e]);return new jn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function qs(n,e,t){return new jn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function pi(n,e){return ba(Ze(n),Ze(e))&&n.limitType===e.limitType}function Bd(n){return`${Ia(Ze(n))}|lt:${n.limitType}`}function wn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>xd(s))).join(", ")}]`),di(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Nn(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Nn(s))).join(",")),`Target(${r})`})(Ze(n))}; limitType=${n.limitType})`}function mi(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):x.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of gr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,u){const d=gu(a,c,u);return a.inclusive?d<=0:d<0})(r.startAt,gr(r),s)||r.endAt&&!(function(a,c,u){const d=gu(a,c,u);return a.inclusive?d>=0:d>0})(r.endAt,gr(r),s))})(n,e)}function gv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function $d(n){return(e,t)=>{let r=!1;for(const s of gr(n)){const i=_v(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function _v(n,e,t){const r=n.field.isKeyField()?x.comparator(e.key,t.key):(function(i,a,c){const u=a.data.field(i),d=c.data.field(i);return u!==null&&d!==null?Dn(u,d):B(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ut(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return bd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=new se(x.comparator);function yt(){return yv}const zd=new se(x.comparator);function hr(...n){let e=zd;for(const t of n)e=e.insert(t.key,t);return e}function jd(n){let e=zd;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Qt(){return _r()}function qd(){return _r()}function _r(){return new fn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const vv=new se(x.comparator),wv=new fe(x.comparator);function K(...n){let e=wv;for(const t of n)e=e.add(t);return e}const Ev=new fe(j);function Tv(){return Ev}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bs(e)?"-0":e}}function Hd(n){return{integerValue:""+n}}function Iv(n,e){return Jy(e)?Hd(e):Sa(n,e)}/**
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
 */class gi{constructor(){this._=void 0}}function bv(n,e,t){return n instanceof Dr?(function(s,i){const a={fields:{[kd]:{stringValue:Sd},[Pd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ea(i)&&(i=fi(i)),i&&(a.fields[Rd]=i),{mapValue:a}})(t,e):n instanceof Nr?Wd(n,e):n instanceof Vr?Gd(n,e):(function(s,i){const a=Kd(s,i),c=wu(a)+wu(s.Ee);return Uo(a)&&Uo(s.Ee)?Hd(c):Sa(s.serializer,c)})(n,e)}function Av(n,e,t){return n instanceof Nr?Wd(n,e):n instanceof Vr?Gd(n,e):t}function Kd(n,e){return n instanceof Hs?(function(r){return Uo(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Dr extends gi{}class Nr extends gi{constructor(e){super(),this.elements=e}}function Wd(n,e){const t=Qd(e);for(const r of n.elements)t.some((s=>it(s,r)))||t.push(r);return{arrayValue:{values:t}}}class Vr extends gi{constructor(e){super(),this.elements=e}}function Gd(n,e){let t=Qd(e);for(const r of n.elements)t=t.filter((s=>!it(s,r)));return{arrayValue:{values:t}}}class Hs extends gi{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function wu(n){return oe(n.integerValue||n.doubleValue)}function Qd(n){return Ta(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,t){this.field=e,this.transform=t}}function kv(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Nr&&s instanceof Nr||r instanceof Vr&&s instanceof Vr?Cn(r.elements,s.elements,it):r instanceof Hs&&s instanceof Hs?it(r.Ee,s.Ee):r instanceof Dr&&s instanceof Dr})(n.transform,e.transform)}class Rv{constructor(e,t){this.version=e,this.transformResults=t}}class Ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ke}static exists(e){return new Ke(void 0,e)}static updateTime(e){return new Ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ss(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class _i{}function Jd(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ka(n.key,Ke.none()):new zr(n.key,n.data,Ke.none());{const t=n.data,r=Me.empty();let s=new fe(we.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Bt(n.key,r,new Ue(s.toArray()),Ke.none())}}function Pv(n,e,t){n instanceof zr?(function(s,i,a){const c=s.value.clone(),u=Tu(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof Bt?(function(s,i,a){if(!Ss(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Tu(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Yd(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function yr(n,e,t,r){return n instanceof zr?(function(i,a,c,u){if(!Ss(i.precondition,a))return c;const d=i.value.clone(),m=Iu(i.fieldTransforms,u,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof Bt?(function(i,a,c,u){if(!Ss(i.precondition,a))return c;const d=Iu(i.fieldTransforms,u,a),m=a.data;return m.setAll(Yd(i)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((y=>y.field)))})(n,e,t,r):(function(i,a,c){return Ss(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function Cv(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Kd(r.transform,s||null);i!=null&&(t===null&&(t=Me.empty()),t.set(r.field,i))}return t||null}function Eu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Cn(r,s,((i,a)=>kv(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class zr extends _i{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Bt extends _i{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Yd(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Tu(n,e,t){const r=new Map;X(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Av(a,c,t[s]))}return r}function Iu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,bv(i,a,e))}return r}class ka extends _i{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Dv extends _i{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Pv(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=yr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=yr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=qd();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=Jd(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument($.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),K())}isEqual(e){return this.batchId===e.batchId&&Cn(this.mutations,e.mutations,((t,r)=>Eu(t,r)))&&Cn(this.baseMutations,e.baseMutations,((t,r)=>Eu(t,r)))}}class Ra{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){X(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return vv})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ra(e,t,r,s)}}/**
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
 */class Vv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ov{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae,W;function Lv(n){switch(n){case R.OK:return B(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return B(15467,{code:n})}}function Xd(n){if(n===void 0)return _t("GRPC error has no .code"),R.UNKNOWN;switch(n){case ae.OK:return R.OK;case ae.CANCELLED:return R.CANCELLED;case ae.UNKNOWN:return R.UNKNOWN;case ae.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ae.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ae.INTERNAL:return R.INTERNAL;case ae.UNAVAILABLE:return R.UNAVAILABLE;case ae.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ae.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ae.NOT_FOUND:return R.NOT_FOUND;case ae.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ae.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ae.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ae.ABORTED:return R.ABORTED;case ae.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ae.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ae.DATA_LOSS:return R.DATA_LOSS;default:return B(39323,{code:n})}}(W=ae||(ae={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Mv=new Ct([4294967295,4294967295],0);function bu(n){const e=wd().encode(n),t=new fd;return t.update(e),new Uint8Array(t.digest())}function Au(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ct([t,r],0),new Ct([s,i],0)]}class Pa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new dr(`Invalid padding: ${t}`);if(r<0)throw new dr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new dr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new dr(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Ct.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Ct.fromNumber(r)));return s.compare(Mv)===1&&(s=new Ct([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=bu(e),[r,s]=Au(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Pa(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const t=bu(e),[r,s]=Au(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class dr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,jr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new yi($.min(),s,new se(j),yt(),K())}}class jr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new jr(r,t,K(),K(),K())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class Zd{constructor(e,t){this.targetId=e,this.De=t}}class ef{constructor(e,t,r=Te.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Su{constructor(){this.ve=0,this.Ce=ku(),this.Fe=Te.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=K(),t=K(),r=K();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:B(38017,{changeType:i})}})),new jr(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=ku()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class xv{constructor(e){this.We=e,this.Ge=new Map,this.ze=yt(),this.je=vs(),this.Je=vs(),this.He=new se(j)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:B(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if($o(i))if(r===0){const a=new x(i.path);this.Xe(t,a,Re.newNoDocument(a,$.min()))}else X(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const c=this._t(e),u=c?this.ut(c,e,a):1;if(u!==0){this.rt(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Lt(r).toUint8Array()}catch(u){if(u instanceof Ad)return nn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Pa(a,s,i)}catch(u){return nn(u instanceof dr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&$o(c.target)){const u=new x(c.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,Re.newNoDocument(u,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=K();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((u=>{const d=this.st(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new yi(e,t,this.He,this.ze,r);return this.ze=yt(),this.je=vs(),this.Je=vs(),this.He=new se(j),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Su,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new fe(j),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new fe(j),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||L("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Su),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function vs(){return new se(x.comparator)}function ku(){return new se(x.comparator)}const Fv={asc:"ASCENDING",desc:"DESCENDING"},Uv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Bv={and:"AND",or:"OR"};class $v{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function jo(n,e){return n.useProto3Json||di(e)?e:{value:e}}function Ks(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function tf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function zv(n,e){return Ks(n,e.toTimestamp())}function et(n){return X(!!n,49232),$.fromTimestamp((function(t){const r=Ot(t);return new ne(r.seconds,r.nanos)})(n))}function Ca(n,e){return qo(n,e).canonicalString()}function qo(n,e){const t=(function(s){return new ee(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function nf(n){const e=ee.fromString(n);return X(cf(e),10190,{key:e.toString()}),e}function Ho(n,e){return Ca(n.databaseId,e.path)}function go(n,e){const t=nf(e);if(t.get(1)!==n.databaseId.projectId)throw new O(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new O(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new x(sf(t))}function rf(n,e){return Ca(n.databaseId,e)}function jv(n){const e=nf(n);return e.length===4?ee.emptyPath():sf(e)}function Ko(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function sf(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Ru(n,e,t){return{name:Ho(n,e),fields:t.value.mapValue.fields}}function qv(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:B(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(d,m){return d.useProto3Json?(X(m===void 0||typeof m=="string",58123),Te.fromBase64String(m||"")):(X(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Te.fromUint8Array(m||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(d){const m=d.code===void 0?R.UNKNOWN:Xd(d.code);return new O(m,d.message||"")})(a);t=new ef(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=go(n,r.document.name),i=et(r.document.updateTime),a=r.document.createTime?et(r.document.createTime):$.min(),c=new Me({mapValue:{fields:r.document.fields}}),u=Re.newFoundDocument(s,i,a,c),d=r.targetIds||[],m=r.removedTargetIds||[];t=new ks(d,m,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=go(n,r.document),i=r.readTime?et(r.readTime):$.min(),a=Re.newNoDocument(s,i),c=r.removedTargetIds||[];t=new ks([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=go(n,r.document),i=r.removedTargetIds||[];t=new ks([],i,s,null)}else{if(!("filter"in e))return B(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Ov(s,i),c=r.targetId;t=new Zd(c,a)}}return t}function Hv(n,e){let t;if(e instanceof zr)t={update:Ru(n,e.key,e.value)};else if(e instanceof ka)t={delete:Ho(n,e.key)};else if(e instanceof Bt)t={update:Ru(n,e.key,e.data),updateMask:ew(e.fieldMask)};else{if(!(e instanceof Dv))return B(16599,{Rt:e.type});t={verify:Ho(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof Dr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Nr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Vr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Hs)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw B(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:zv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B(27497)})(n,e.precondition)),t}function Kv(n,e){return n&&n.length>0?(X(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?et(s.updateTime):et(i);return a.isEqual($.min())&&(a=et(i)),new Rv(a,s.transformResults||[])})(t,e)))):[]}function Wv(n,e){return{documents:[rf(n,e.path)]}}function Gv(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=rf(n,s);const i=(function(d){if(d.length!==0)return af(Ge.create(d,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((m=>(function(T){return{field:En(T.field),direction:Yv(T.dir)}})(m)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=jo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{Vt:t,parent:s}}function Qv(n){let e=jv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){X(r===1,65062);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=(function(y){const T=of(y);return T instanceof Ge&&Ld(T)?T.getFilters():[T]})(t.where));let a=[];t.orderBy&&(a=(function(y){return y.map((T=>(function(N){return new Cr(Tn(N.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(N.direction))})(T)))})(t.orderBy));let c=null;t.limit&&(c=(function(y){let T;return T=typeof y=="object"?y.value:y,di(T)?null:T})(t.limit));let u=null;t.startAt&&(u=(function(y){const T=!!y.before,k=y.values||[];return new js(k,T)})(t.startAt));let d=null;return t.endAt&&(d=(function(y){const T=!y.before,k=y.values||[];return new js(k,T)})(t.endAt)),pv(e,s,a,i,c,"F",u,d)}function Jv(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function of(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Tn(t.unaryFilter.field);return ce.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Tn(t.unaryFilter.field);return ce.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Tn(t.unaryFilter.field);return ce.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Tn(t.unaryFilter.field);return ce.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return B(61313);default:return B(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ce.create(Tn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return B(58110);default:return B(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ge.create(t.compositeFilter.filters.map((r=>of(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B(1026)}})(t.compositeFilter.op))})(n):B(30097,{filter:n})}function Yv(n){return Fv[n]}function Xv(n){return Uv[n]}function Zv(n){return Bv[n]}function En(n){return{fieldPath:n.canonicalString()}}function Tn(n){return we.fromServerFormat(n.fieldPath)}function af(n){return n instanceof ce?(function(t){if(t.op==="=="){if(mu(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NAN"}};if(pu(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(mu(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NAN"}};if(pu(t.value))return{unaryFilter:{field:En(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:En(t.field),op:Xv(t.op),value:t.value}}})(n):n instanceof Ge?(function(t){const r=t.getFilters().map((s=>af(s)));return r.length===1?r[0]:{compositeFilter:{op:Zv(t.op),filters:r}}})(n):B(54877,{filter:n})}function ew(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function cf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t,r,s,i=$.min(),a=$.min(),c=Te.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new St(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{constructor(e){this.gt=e}}function nw(n){const e=Qv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qs(e,e.limit,"L"):e}/**
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
 */class rw{constructor(){this.Dn=new sw}addToCollectionParentIndex(e,t){return this.Dn.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(Vt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(Vt.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class sw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new fe(ee.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new fe(ee.comparator)).toArray()}}/**
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
 */const Pu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},lf=41943040;class Le{static withCacheSize(e){return new Le(e,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le.DEFAULT_COLLECTION_PERCENTILE=10,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Le.DEFAULT=new Le(lf,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Le.DISABLED=new Le(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Vn(0)}static ur(){return new Vn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="LruGarbageCollector",uf=1048576;function Du([n,e],[t,r]){const s=j(n,t);return s===0?j(e,r):s}class iw{constructor(e){this.Tr=e,this.buffer=new fe(Du),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Du(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ow{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){L(Cu,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){zn(t)?L(Cu,"Ignoring IndexedDB error during garbage collection: ",t):await $n(t)}await this.Rr(3e5)}))}}class aw{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return C.resolve(hi.ue);const r=new iw(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(L("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(Pu)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(L("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pu):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,c,u,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(L("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(e,s)))).next((y=>(r=y,c=Date.now(),this.removeTargets(e,r,t)))).next((y=>(i=y,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((y=>(d=Date.now(),vn()<=H.DEBUG&&L("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${y} documents in `+(d-u)+`ms
Total Duration: ${d-m}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:y}))))}}function cw(n,e){return new aw(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(){this.changes=new fn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class uw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&yr(r.mutation,s,Ue.empty(),ne.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,K()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=K()){const s=Qt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=hr();return i.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=Qt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,K())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=yt();const a=_r(),c=(function(){return _r()})();return t.forEach(((u,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Bt)?i=i.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),yr(m.mutation,d,m.mutation.getFieldMask(),ne.now())):a.set(d.key,Ue.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((d,m)=>a.set(d,m))),t.forEach(((d,m)=>{var y;return c.set(d,new uw(m,(y=a.get(d))!==null&&y!==void 0?y:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=_r();let s=new se(((a,c)=>a-c)),i=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((u=>{const d=t.get(u);if(d===null)return;let m=r.get(u)||Ue.empty();m=c.applyToLocalView(d,m),r.set(u,m);const y=(s.get(c.batchId)||K()).add(u);s=s.insert(c.batchId,y)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,m=u.value,y=qd();m.forEach((T=>{if(!i.has(T)){const k=Jd(t.get(T),r.get(T));k!==null&&y.set(T,k),i=i.add(T)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return C.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ud(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):C.resolve(Qt());let c=Sr,u=i;return a.next((d=>C.forEach(d,((m,y)=>(c<y.largestBatchId&&(c=y.largestBatchId),i.get(m)?C.resolve():this.remoteDocumentCache.getEntry(e,m).next((T=>{u=u.insert(m,T)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,u,d,K()))).next((m=>({batchId:c,changes:jd(m)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new x(t)).next((r=>{let s=hr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=hr();return this.indexManager.getCollectionParents(e,i).next((c=>C.forEach(c,(u=>{const d=(function(y,T){return new jn(T,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next((m=>{m.forEach(((y,T)=>{a=a.insert(y,T)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((u,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Re.newInvalidDocument(m)))}));let c=hr();return a.forEach(((u,d)=>{const m=i.get(u);m!==void 0&&yr(m.mutation,d,Ue.empty(),ne.now()),mi(t,d)&&(c=c.insert(u,d))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dw{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return C.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:et(s.createTime)}})(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:nw(s.bundledQuery),readTime:et(s.readTime)}})(t)),C.resolve()}}/**
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
 */class fw{constructor(){this.overlays=new se(x.comparator),this.kr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Qt();return C.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),C.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const s=Qt(),i=t.length+1,a=new x(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return C.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new se(((d,m)=>d-m));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=i.get(d.largestBatchId);m===null&&(m=Qt(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=Qt(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((d,m)=>c.set(d,m))),!(c.size()>=s)););return C.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Vv(t,r));let i=this.kr.get(t);i===void 0&&(i=K(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
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
 */class pw{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this.qr=new fe(ge.Qr),this.$r=new fe(ge.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new ge(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new ge(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new x(new ee([])),r=new ge(t,e),s=new ge(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new x(new ee([])),r=new ge(t,e),s=new ge(t,e+1);let i=K();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new ge(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ge{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return x.comparator(e.key,t.key)||j(e.Hr,t.Hr)}static Ur(e,t){return j(e.Hr,t.Hr)||x.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new fe(ge.Qr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Nv(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new ge(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return C.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?wa:this.er-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ge(t,0),s=new ge(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),C.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new fe(j);return t.forEach((s=>{const i=new ge(s,0),a=new ge(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),C.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;x.isDocumentKey(i)||(i=i.child(""));const a=new ge(new x(i),0);let c=new fe(j);return this.Yr.forEachWhile((u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.Hr)),!0)}),a),C.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){X(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return C.forEach(t.mutations,(s=>{const i=new ge(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new ge(t,0),s=this.Yr.firstAfterOrEqual(r);return C.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e){this.ni=e,this.docs=(function(){return new se(x.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let r=yt();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Re.newInvalidDocument(s))})),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=yt();const a=t.path,c=new x(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:m}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Ky(Hy(m),r)<=0||(s.has(m.key)||mi(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return C.resolve(i)}getAllFromCollectionGroup(e,t,r,s){B(9500)}ri(e,t){return C.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new _w(this)}getSize(e){return C.resolve(this.size)}}class _w extends lw{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),C.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){this.persistence=e,this.ii=new fn((t=>Ia(t)),ba),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.si=0,this.oi=new Da,this.targetCount=0,this._i=Vn.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),C.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Vn(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.hr(t),C.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),C.waitFor(i).next((()=>s))}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),C.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,t){this.ai={},this.overlays={},this.ui=new hi(0),this.ci=!1,this.ci=!0,this.li=new pw,this.referenceDelegate=e(this),this.hi=new yw(this),this.indexManager=new rw,this.remoteDocumentCache=(function(s){return new gw(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new tw(t),this.Ti=new dw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new fw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new mw(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){L("MemoryPersistence","Starting transaction:",e);const s=new vw(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return C.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class vw extends Gy{constructor(e){super(),this.currentSequenceNumber=e}}class Na{constructor(e){this.persistence=e,this.Ai=new Da,this.Ri=null}static Vi(e){return new Na(e)}get mi(){if(this.Ri)return this.Ri;throw B(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),C.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.mi,(r=>{const s=x.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,$.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return C.or([()=>C.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ws{constructor(e,t){this.persistence=e,this.gi=new fn((r=>Yy(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=cw(this,t)}static Vi(e,t){return new Ws(e,t)}Ii(){}di(e){return C.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return C.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?C.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((c=>{c||(r++,i.removeEntry(a,$.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),C.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),C.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),C.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),C.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=bs(e.data.value)),t}Sr(e,t,r){return C.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=K(),s=K();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Va(e,t.fromCache,r,s)}}/**
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
 */class ww{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ew{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Fm()?8:Qy(xe())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new ww;return this.ws(e,t,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(vn()<=H.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",wn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),C.resolve()):(vn()<=H.DEBUG&&L("QueryEngine","Query:",wn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(vn()<=H.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",wn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ze(t))):C.resolve())}ps(e,t){if(vu(t))return C.resolve(null);let r=Ze(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=qs(t,null,"F"),r=Ze(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=K(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((u=>{const d=this.bs(t,c);return this.Ds(t,d,a,u.readTime)?this.ps(e,qs(t,null,"F")):this.vs(e,d,t,u)}))))})))))}ys(e,t,r,s){return vu(t)||s.isEqual($.min())?C.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?C.resolve(null):(vn()<=H.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wn(t)),this.vs(e,a,t,qy(s,Sr)).next((c=>c)))}))}bs(e,t){let r=new fe($d(e));return t.forEach(((s,i)=>{mi(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return vn()<=H.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",wn(t)),this.gs.getDocumentsMatchingQuery(e,t,Vt.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="LocalStore",Tw=3e8;class Iw{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new se(j),this.Ms=new fn((i=>Ia(i)),ba),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hw(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function bw(n,e,t,r){return new Iw(n,e,t,r)}async function df(n,e){const t=z(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let u=K();for(const d of s){a.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}for(const d of i){c.push(d.batchId);for(const m of d.mutations)u=u.add(m.key)}return t.localDocuments.getDocuments(r,u).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:c})))}))}))}function Aw(n,e){const t=z(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,u,d,m){const y=d.batch,T=y.keys();let k=C.resolve();return T.forEach((N=>{k=k.next((()=>m.getEntry(u,N))).next((P=>{const D=d.docVersions.get(N);X(D!==null,48541),P.version.compareTo(D)<0&&(y.applyToRemoteDocument(P,d),P.isValidDocument()&&(P.setReadTime(d.commitVersion),m.addEntry(P)))}))})),k.next((()=>c.mutationQueue.removeMutationBatch(u,y)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=K();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function ff(n){const e=z(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Sw(n,e){const t=z(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const c=[];e.targetChanges.forEach(((m,y)=>{const T=s.get(y);if(!T)return;c.push(t.hi.removeMatchingKeys(i,m.removedDocuments,y).next((()=>t.hi.addMatchingKeys(i,m.addedDocuments,y))));let k=T.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(y)!==null?k=k.withResumeToken(Te.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):m.resumeToken.approximateByteSize()>0&&(k=k.withResumeToken(m.resumeToken,r)),s=s.insert(y,k),(function(P,D,U){return P.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=Tw?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0})(T,k,m)&&c.push(t.hi.updateTargetData(i,k))}));let u=yt(),d=K();if(e.documentUpdates.forEach((m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))})),c.push(kw(i,a,e.documentUpdates).next((m=>{u=m.Ls,d=m.ks}))),!r.isEqual($.min())){const m=t.hi.getLastRemoteSnapshotVersion(i).next((y=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(m)}return C.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,d))).next((()=>u))})).then((i=>(t.Fs=s,i)))}function kw(n,e,t){let r=K(),s=K();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=yt();return t.forEach(((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual($.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):L(Oa,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)})),{Ls:a,ks:s}}))}function Rw(n,e){const t=z(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=wa),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Pw(n,e){const t=z(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,C.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new St(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Wo(n,e,t){const r=z(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!zn(a))throw a;L(Oa,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Nu(n,e,t){const r=z(n);let s=$.min(),i=K();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,d,m){const y=z(u),T=y.Ms.get(m);return T!==void 0?C.resolve(y.Fs.get(T)):y.hi.getTargetData(d,m)})(r,a,Ze(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((u=>{i=u}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:$.min(),t?i:K()))).next((c=>(Cw(r,gv(e),c),{documents:c,qs:i})))))}function Cw(n,e,t){let r=n.xs.get(e)||$.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class Vu{constructor(){this.activeTargetIds=Tv()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Dw{constructor(){this.Fo=new Vu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Vu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Nw{xo(e){}shutdown(){}}/**
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
 */const Ou="ConnectivityMonitor";class Lu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){L(Ou,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){L(Ou,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ws=null;function Go(){return ws===null?ws=(function(){return 268435456+Math.round(2147483648*Math.random())})():ws++,"0x"+ws.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="RestConnection",Vw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ow{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===$s?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Go(),c=this.Go(e,t.toUriEncodedString());L(_o,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,i);const{host:d}=new URL(c),m=ni(d);return this.jo(e,c,u,r,m).then((y=>(L(_o,`Received RPC '${e}' ${a}: `,y),y)),(y=>{throw nn(_o,`RPC '${e}' ${a} failed with error: `,y,"url: ",c,"request:",r),y}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Bn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=Vw[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="WebChannelConnection";class Mw extends Ow{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=Go();return new Promise(((c,u)=>{const d=new pd;d.setWithCredentials(!0),d.listenOnce(md.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Is.NO_ERROR:const y=d.getResponseJson();L(ke,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),c(y);break;case Is.TIMEOUT:L(ke,`RPC '${e}' ${a} timed out`),u(new O(R.DEADLINE_EXCEEDED,"Request time out"));break;case Is.HTTP_ERROR:const T=d.getStatus();if(L(ke,`RPC '${e}' ${a} failed with status:`,T,"response text:",d.getResponseText()),T>0){let k=d.getResponseJson();Array.isArray(k)&&(k=k[0]);const N=k==null?void 0:k.error;if(N&&N.status&&N.message){const P=(function(U){const M=U.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(M)>=0?M:R.UNKNOWN})(N.status);u(new O(P,N.message))}else u(new O(R.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new O(R.UNAVAILABLE,"Connection failed."));break;default:B(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{L(ke,`RPC '${e}' ${a} completed.`)}}));const m=JSON.stringify(s);L(ke,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",m,r,15)}))}P_(e,t,r){const s=Go(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=yd(),c=_d(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const m=i.join("");L(ke,`Creating RPC '${e}' stream ${s}: ${m}`,u);const y=a.createWebChannel(m,u);this.T_(y);let T=!1,k=!1;const N=new Lw({Ho:D=>{k?L(ke,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(T||(L(ke,`Opening RPC '${e}' stream ${s} transport.`),y.open(),T=!0),L(ke,`RPC '${e}' stream ${s} sending:`,D),y.send(D))},Yo:()=>y.close()}),P=(D,U,M)=>{D.listen(U,(q=>{try{M(q)}catch(Y){setTimeout((()=>{throw Y}),0)}}))};return P(y,ur.EventType.OPEN,(()=>{k||(L(ke,`RPC '${e}' stream ${s} transport opened.`),N.s_())})),P(y,ur.EventType.CLOSE,(()=>{k||(k=!0,L(ke,`RPC '${e}' stream ${s} transport closed`),N.__(),this.I_(y))})),P(y,ur.EventType.ERROR,(D=>{k||(k=!0,nn(ke,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),N.__(new O(R.UNAVAILABLE,"The operation could not be completed")))})),P(y,ur.EventType.MESSAGE,(D=>{var U;if(!k){const M=D.data[0];X(!!M,16349);const q=M,Y=(q==null?void 0:q.error)||((U=q[0])===null||U===void 0?void 0:U.error);if(Y){L(ke,`RPC '${e}' stream ${s} received error:`,Y);const me=Y.status;let re=(function(v){const E=ae[v];if(E!==void 0)return Xd(E)})(me),I=Y.message;re===void 0&&(re=R.INTERNAL,I="Unknown error status: "+me+" with message "+Y.message),k=!0,N.__(new O(re,I)),y.close()}else L(ke,`RPC '${e}' stream ${s} received:`,M),N.a_(M)}})),P(c,gd.STAT_EVENT,(D=>{D.stat===Mo.PROXY?L(ke,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Mo.NOPROXY&&L(ke,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{N.o_()}),0),N}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function yo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi(n){return new $v(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&L("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mu="PersistentStream";class mf{constructor(e,t,r,s,i,a,c,u){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new pf(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(_t(t.toString()),_t("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new O(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return L(Mu,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(L(Mu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class xw extends mf{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=qv(this.serializer,e),r=(function(i){if(!("targetChange"in i))return $.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?$.min():a.readTime?et(a.readTime):$.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Ko(this.serializer),t.addTarget=(function(i,a){let c;const u=a.target;if(c=$o(u)?{documents:Wv(i,u)}:{query:Gv(i,u).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=tf(i,a.resumeToken);const d=jo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}else if(a.snapshotVersion.compareTo($.min())>0){c.readTime=Ks(i,a.snapshotVersion.toTimestamp());const d=jo(i,a.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,e);const r=Jv(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Ko(this.serializer),t.removeTarget=e,this.k_(t)}}class Fw extends mf{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Kv(e.writeResults,e.commitTime),r=et(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Ko(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Hv(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{}class Bw extends Uw{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new O(R.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,qo(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new O(R.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,qo(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new O(R.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class $w{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(_t(t),this._a=!1):L("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn="RemoteStore";class zw{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{pn(this)&&(L(rn,"Restarting streams for network reachability change."),await(async function(u){const d=z(u);d.Ia.add(4),await qr(d),d.Aa.set("Unknown"),d.Ia.delete(4),await wi(d)})(this))}))})),this.Aa=new $w(r,s)}}async function wi(n){if(pn(n))for(const e of n.da)await e(!0)}async function qr(n){for(const e of n.da)await e(!1)}function gf(n,e){const t=z(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Fa(t)?xa(t):qn(t).x_()&&Ma(t,e))}function La(n,e){const t=z(n),r=qn(t);t.Ta.delete(e),r.x_()&&_f(t,e),t.Ta.size===0&&(r.x_()?r.B_():pn(t)&&t.Aa.set("Unknown"))}function Ma(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo($.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}qn(n).H_(e)}function _f(n,e){n.Ra.$e(e),qn(n).Y_(e)}function xa(n){n.Ra=new xv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),qn(n).start(),n.Aa.aa()}function Fa(n){return pn(n)&&!qn(n).M_()&&n.Ta.size>0}function pn(n){return z(n).Ia.size===0}function yf(n){n.Ra=void 0}async function jw(n){n.Aa.set("Online")}async function qw(n){n.Ta.forEach(((e,t)=>{Ma(n,e)}))}async function Hw(n,e){yf(n),Fa(n)?(n.Aa.la(e),xa(n)):n.Aa.set("Unknown")}async function Kw(n,e,t){if(n.Aa.set("Online"),e instanceof ef&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,e)}catch(r){L(rn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gs(n,r)}else if(e instanceof ks?n.Ra.Ye(e):e instanceof Zd?n.Ra.it(e):n.Ra.et(e),!t.isEqual($.min()))try{const r=await ff(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const m=i.Ta.get(d);m&&i.Ta.set(d,m.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,d)=>{const m=i.Ta.get(u);if(!m)return;i.Ta.set(u,m.withResumeToken(Te.EMPTY_BYTE_STRING,m.snapshotVersion)),_f(i,u);const y=new St(m.target,u,d,m.sequenceNumber);Ma(i,y)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){L(rn,"Failed to raise snapshot:",r),await Gs(n,r)}}async function Gs(n,e,t){if(!zn(e))throw e;n.Ia.add(1),await qr(n),n.Aa.set("Offline"),t||(t=()=>ff(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{L(rn,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await wi(n)}))}function vf(n,e){return e().catch((t=>Gs(n,t,e)))}async function Ei(n){const e=z(n),t=xt(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:wa;for(;Ww(e);)try{const s=await Rw(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,Gw(e,s)}catch(s){await Gs(e,s)}wf(e)&&Ef(e)}function Ww(n){return pn(n)&&n.Pa.length<10}function Gw(n,e){n.Pa.push(e);const t=xt(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function wf(n){return pn(n)&&!xt(n).M_()&&n.Pa.length>0}function Ef(n){xt(n).start()}async function Qw(n){xt(n).na()}async function Jw(n){const e=xt(n);for(const t of n.Pa)e.X_(t.mutations)}async function Yw(n,e,t){const r=n.Pa.shift(),s=Ra.from(r,e,t);await vf(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Ei(n)}async function Xw(n,e){e&&xt(n).Z_&&await(async function(r,s){if((function(a){return Lv(a)&&a!==R.ABORTED})(s.code)){const i=r.Pa.shift();xt(r).N_(),await vf(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ei(r)}})(n,e),wf(n)&&Ef(n)}async function xu(n,e){const t=z(n);t.asyncQueue.verifyOperationInProgress(),L(rn,"RemoteStore received new credentials");const r=pn(t);t.Ia.add(3),await qr(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await wi(t)}async function Zw(n,e){const t=z(n);e?(t.Ia.delete(2),await wi(t)):e||(t.Ia.add(2),await qr(t),t.Aa.set("Unknown"))}function qn(n){return n.Va||(n.Va=(function(t,r,s){const i=z(t);return i.ia(),new xw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:jw.bind(null,n),e_:qw.bind(null,n),n_:Hw.bind(null,n),J_:Kw.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Fa(n)?xa(n):n.Aa.set("Unknown")):(await n.Va.stop(),yf(n))}))),n.Va}function xt(n){return n.ma||(n.ma=(function(t,r,s){const i=z(t);return i.ia(),new Fw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:Qw.bind(null,n),n_:Xw.bind(null,n),ea:Jw.bind(null,n),ta:Yw.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Ei(n)):(await n.ma.stop(),n.Pa.length>0&&(L(rn,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Dt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Ua(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new O(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ba(n,e){if(_t("AsyncQueue",`${e}: ${n}`),zn(n))return new O(R.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{static emptySet(e){return new Sn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||x.comparator(t.key,r.key):(t,r)=>x.comparator(t.key,r.key),this.keyedMap=hr(),this.sortedSet=new se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Sn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Sn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(){this.fa=new se(x.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):B(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class On{constructor(e,t,r,s,i,a,c,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new On(e,t,Sn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eE{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class tE{constructor(){this.queries=Uu(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=z(t),i=s.queries;s.queries=Uu(),i.forEach(((a,c)=>{for(const u of c.wa)u.onError(r)}))})(this,new O(R.ABORTED,"Firestore shutting down"))}}function Uu(){return new fn((n=>Bd(n)),pi)}async function Tf(n,e){const t=z(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new eE,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Ba(a,`Initialization of query '${wn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&$a(t)}async function If(n,e){const t=z(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function nE(n,e){const t=z(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&$a(t)}function rE(n,e,t){const r=z(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function $a(n){n.Da.forEach((e=>{e.next()}))}var Qo,Bu;(Bu=Qo||(Qo={})).Fa="default",Bu.Cache="cache";class bf{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new On(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=On.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Qo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(e){this.key=e}}class Sf{constructor(e){this.key=e}}class sE{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=K(),this.mutatedKeys=K(),this.Xa=$d(e),this.eu=new Sn(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Fu,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((m,y)=>{const T=s.get(m),k=mi(this.query,y)?y:null,N=!!T&&this.mutatedKeys.has(T.key),P=!!k&&(k.hasLocalMutations||this.mutatedKeys.has(k.key)&&k.hasCommittedMutations);let D=!1;T&&k?T.data.isEqual(k.data)?N!==P&&(r.track({type:3,doc:k}),D=!0):this.iu(T,k)||(r.track({type:2,doc:k}),D=!0,(u&&this.Xa(k,u)>0||d&&this.Xa(k,d)<0)&&(c=!0)):!T&&k?(r.track({type:0,doc:k}),D=!0):T&&!k&&(r.track({type:1,doc:T}),D=!0,(u||d)&&(c=!0)),D&&(k?(a=a.add(k),i=P?i.add(m):i.delete(m)):(a=a.delete(m),i=i.delete(m)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((m,y)=>(function(k,N){const P=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B(20277,{At:D})}};return P(k)-P(N)})(m.type,y.type)||this.Xa(m.doc,y.doc))),this.su(r),s=s!=null&&s;const c=t&&!s?this.ou():[],u=this.Za.size===0&&this.current&&!s?1:0,d=u!==this.Ya;return this.Ya=u,a.length!==0||d?{snapshot:new On(this.query,e.eu,i,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Fu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=K(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new Sf(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new Af(r))})),t}uu(e){this.Ha=e.qs,this.Za=K();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return On.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const za="SyncEngine";class iE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class oE{constructor(e){this.key=e,this.lu=!1}}class aE{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new fn((c=>Bd(c)),pi),this.Tu=new Map,this.Iu=new Set,this.du=new se(x.comparator),this.Eu=new Map,this.Au=new Da,this.Ru={},this.Vu=new Map,this.mu=Vn.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function cE(n,e,t=!0){const r=Nf(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await kf(r,e,t,!0),s}async function lE(n,e){const t=Nf(n);await kf(t,e,!0,!1)}async function kf(n,e,t,r){const s=await Pw(n.localStore,Ze(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await uE(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&gf(n.remoteStore,s),c}async function uE(n,e,t,r,s){n.gu=(y,T,k)=>(async function(P,D,U,M){let q=D.view.nu(U);q.Ds&&(q=await Nu(P.localStore,D.query,!1).then((({documents:I})=>D.view.nu(I,q))));const Y=M&&M.targetChanges.get(D.targetId),me=M&&M.targetMismatches.get(D.targetId)!=null,re=D.view.applyChanges(q,P.isPrimaryClient,Y,me);return zu(P,D.targetId,re._u),re.snapshot})(n,y,T,k);const i=await Nu(n.localStore,e,!0),a=new sE(e,i.qs),c=a.nu(i.documents),u=jr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(c,n.isPrimaryClient,u);zu(n,t,d._u);const m=new iE(e,t,a);return n.Pu.set(e,m),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function hE(n,e,t){const r=z(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!pi(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Wo(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&La(r.remoteStore,s.targetId),Jo(r,s.targetId)})).catch($n)):(Jo(r,s.targetId),await Wo(r.localStore,s.targetId,!0))}async function dE(n,e){const t=z(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),La(t.remoteStore,r.targetId))}async function fE(n,e,t){const r=wE(n);try{const s=await(function(a,c){const u=z(a),d=ne.now(),m=c.reduce(((k,N)=>k.add(N.key)),K());let y,T;return u.persistence.runTransaction("Locally write mutations","readwrite",(k=>{let N=yt(),P=K();return u.Os.getEntries(k,m).next((D=>{N=D,N.forEach(((U,M)=>{M.isValidDocument()||(P=P.add(U))}))})).next((()=>u.localDocuments.getOverlayedDocuments(k,N))).next((D=>{y=D;const U=[];for(const M of c){const q=Cv(M,y.get(M.key).overlayedDocument);q!=null&&U.push(new Bt(M.key,q,Nd(q.value.mapValue),Ke.exists(!0)))}return u.mutationQueue.addMutationBatch(k,d,U,c)})).next((D=>{T=D;const U=D.applyToLocalDocumentSet(y,P);return u.documentOverlayCache.saveOverlays(k,D.batchId,U)}))})).then((()=>({batchId:T.batchId,changes:jd(y)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,u){let d=a.Ru[a.currentUser.toKey()];d||(d=new se(j)),d=d.insert(c,u),a.Ru[a.currentUser.toKey()]=d})(r,s.batchId,t),await Hr(r,s.changes),await Ei(r.remoteStore)}catch(s){const i=Ba(s,"Failed to persist write");t.reject(i)}}async function Rf(n,e){const t=z(n);try{const r=await Sw(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?X(a.lu,14607):s.removedDocuments.size>0&&(X(a.lu,42227),a.lu=!1))})),await Hr(t,r,e)}catch(r){await $n(r)}}function $u(n,e,t){const r=z(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const u=z(a);u.onlineState=c;let d=!1;u.queries.forEach(((m,y)=>{for(const T of y.wa)T.va(c)&&(d=!0)})),d&&$a(u)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pE(n,e,t){const r=z(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new se(x.comparator);a=a.insert(i,Re.newNoDocument(i,$.min()));const c=K().add(i),u=new yi($.min(),new Map,new se(j),a,c);await Rf(r,u),r.du=r.du.remove(i),r.Eu.delete(e),ja(r)}else await Wo(r.localStore,e,!1).then((()=>Jo(r,e,t))).catch($n)}async function mE(n,e){const t=z(n),r=e.batch.batchId;try{const s=await Aw(t.localStore,e);Cf(t,r,null),Pf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Hr(t,s)}catch(s){await $n(s)}}async function gE(n,e,t){const r=z(n);try{const s=await(function(a,c){const u=z(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let m;return u.mutationQueue.lookupMutationBatch(d,c).next((y=>(X(y!==null,37113),m=y.keys(),u.mutationQueue.removeMutationBatch(d,y)))).next((()=>u.mutationQueue.performConsistencyCheck(d))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(d,m,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m))).next((()=>u.localDocuments.getDocuments(d,m)))}))})(r.localStore,e);Cf(r,e,t),Pf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Hr(r,s)}catch(s){await $n(s)}}function Pf(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function Cf(n,e,t){const r=z(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Jo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||Df(n,r)}))}function Df(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(La(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),ja(n))}function zu(n,e,t){for(const r of t)r instanceof Af?(n.Au.addReference(r.key,e),_E(n,r)):r instanceof Sf?(L(za,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Df(n,r.key)):B(19791,{yu:r})}function _E(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(L(za,"New document in limbo: "+t),n.Iu.add(r),ja(n))}function ja(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new x(ee.fromString(e)),r=n.mu.next();n.Eu.set(r,new oE(t)),n.du=n.du.insert(t,r),gf(n.remoteStore,new St(Ze(Aa(t.path)),r,"TargetPurposeLimboResolution",hi.ue))}}async function Hr(n,e,t){const r=z(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,u)=>{a.push(r.gu(u,e,t).then((d=>{var m;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(u.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){s.push(d);const y=Va.Es(u.targetId,d);i.push(y)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(u,d){const m=z(u);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>C.forEach(d,(T=>C.forEach(T.Is,(k=>m.persistence.referenceDelegate.addReference(y,T.targetId,k))).next((()=>C.forEach(T.ds,(k=>m.persistence.referenceDelegate.removeReference(y,T.targetId,k)))))))))}catch(y){if(!zn(y))throw y;L(Oa,"Failed to update sequence numbers: "+y)}for(const y of d){const T=y.targetId;if(!y.fromCache){const k=m.Fs.get(T),N=k.snapshotVersion,P=k.withLastLimboFreeSnapshotVersion(N);m.Fs=m.Fs.insert(T,P)}}})(r.localStore,i))}async function yE(n,e){const t=z(n);if(!t.currentUser.isEqual(e)){L(za,"User change. New user:",e.toKey());const r=await df(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((u=>{u.reject(new O(R.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Hr(t,r.Bs)}}function vE(n,e){const t=z(n),r=t.Eu.get(e);if(r&&r.lu)return K().add(r.key);{let s=K();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const c=t.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function Nf(n){const e=z(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Rf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pE.bind(null,e),e.hu.J_=nE.bind(null,e.eventManager),e.hu.pu=rE.bind(null,e.eventManager),e}function wE(n){const e=z(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=mE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=gE.bind(null,e),e}class Qs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=vi(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return bw(this.persistence,new Ew,e.initialUser,this.serializer)}Du(e){return new hf(Na.Vi,this.serializer)}bu(e){return new Dw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qs.provider={build:()=>new Qs};class EE extends Qs{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){X(this.persistence.referenceDelegate instanceof Ws,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ow(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Le.withCacheSize(this.cacheSizeBytes):Le.DEFAULT;return new hf((r=>Ws.Vi(r,t)),this.serializer)}}class Yo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>$u(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yE.bind(null,this.syncEngine),await Zw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new tE})()}createDatastore(e){const t=vi(e.databaseInfo.databaseId),r=(function(i){return new Mw(i)})(e.databaseInfo);return(function(i,a,c,u){return new Bw(i,a,c,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new zw(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>$u(this.syncEngine,t,0)),(function(){return Lu.C()?new Lu:new Nw})())}createSyncEngine(e,t){return(function(s,i,a,c,u,d,m){const y=new aE(s,i,a,c,u,d);return m&&(y.fu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=z(s);L(rn,"RemoteStore shutting down."),i.Ia.add(5),await qr(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Yo.provider={build:()=>new Yo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Vf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):_t("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="FirestoreClient";class TE{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Oe.UNAUTHENTICATED,this.clientId=va.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{L(Ft,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(L(Ft,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ba(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function vo(n,e){n.asyncQueue.verifyOperationInProgress(),L(Ft,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await df(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{nn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{L("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{nn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function ju(n,e){n.asyncQueue.verifyOperationInProgress();const t=await IE(n);L(Ft,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>xu(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>xu(e.remoteStore,s))),n._onlineComponents=e}async function IE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){L(Ft,"Using user provided OfflineComponentProvider");try{await vo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;nn("Error using user provided cache. Falling back to memory cache: "+t),await vo(n,new Qs)}}else L(Ft,"Using default OfflineComponentProvider"),await vo(n,new EE(void 0));return n._offlineComponents}async function Of(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(L(Ft,"Using user provided OnlineComponentProvider"),await ju(n,n._uninitializedComponentsProvider._online)):(L(Ft,"Using default OnlineComponentProvider"),await ju(n,new Yo))),n._onlineComponents}function bE(n){return Of(n).then((e=>e.syncEngine))}async function Xo(n){const e=await Of(n),t=e.eventManager;return t.onListen=cE.bind(null,e.syncEngine),t.onUnlisten=hE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=lE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=dE.bind(null,e.syncEngine),t}function AE(n,e,t={}){const r=new Dt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,d){const m=new Vf({next:T=>{m.Ou(),a.enqueueAndForget((()=>If(i,y))),T.fromCache&&u.source==="server"?d.reject(new O(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),y=new bf(c,m,{includeMetadataChanges:!0,ka:!0});return Tf(i,y)})(await Xo(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function Lf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE="firestore.googleapis.com",Hu=!0;class Ku{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new O(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=SE,this.ssl=Hu}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Hu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=lf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uf)throw new O(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}zy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Lf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new O(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new O(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new O(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qa{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ku({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new O(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new O(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ku(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Oy;switch(r.type){case"firstParty":return new xy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new O(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=qu.get(t);r&&(L("ComponentProvider","Removing Datastore"),qu.delete(t),r.terminate())})(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vt(this.firestore,e,this._query)}}class ue{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ue(this.firestore,e,this._key)}toJSON(){return{type:ue._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if($r(t,ue._jsonSchema))return new ue(e,r||null,new x(ee.fromString(t.referencePath)))}}ue._jsonSchemaVersion="firestore/documentReference/1.0",ue._jsonSchema={type:le("string",ue._jsonSchemaVersion),referencePath:le("string")};class Nt extends vt{constructor(e,t,r){super(e,t,Aa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ue(this.firestore,null,new x(e))}withConverter(e){return new Nt(this.firestore,e,this._path)}}function sn(n,e,...t){if(n=he(n),Ed("collection","path",e),n instanceof qa){const r=ee.fromString(e,...t);return iu(r),new Nt(n,null,r)}{if(!(n instanceof ue||n instanceof Nt))throw new O(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return iu(r),new Nt(n.firestore,null,r)}}function Ti(n,e,...t){if(n=he(n),arguments.length===1&&(e=va.newId()),Ed("doc","path",e),n instanceof qa){const r=ee.fromString(e,...t);return su(r),new ue(n,null,new x(r))}{if(!(n instanceof ue||n instanceof Nt))throw new O(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return su(r),new ue(n.firestore,n instanceof Nt?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wu="AsyncQueue";class Gu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new pf(this,"async_queue_retry"),this.oc=()=>{const r=yo();r&&L(Wu,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=yo();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=yo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Dt;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!zn(e))throw e;L(Wu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,_t("INTERNAL UNHANDLED ERROR: ",Qu(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Ua.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&B(47125,{hc:Qu(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Qu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Ju(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class on extends qa{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Gu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gu(e),this._firestoreClient=void 0,await e}}}function kE(n,e,t){t||(t=$s);const r=Fr(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(Tr(i,e))return s;throw new O(R.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new O(R.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uf)throw new O(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&ni(e.host)&&Dm(e.host),r.initialize({options:e,instanceIdentifier:t})}function Ha(n){if(n._terminated)throw new O(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||RE(n),n._firestoreClient}function RE(n){var e,t,r;const s=n._freezeSettings(),i=(function(c,u,d,m){return new ev(c,u,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,Lf(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new TE(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Be(Te.fromBase64String(e))}catch(t){throw new O(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Be(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Be._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if($r(e,Be._jsonSchema))return Be.fromBase64String(e.bytes)}}Be._jsonSchemaVersion="firestore/bytes/1.0",Be._jsonSchema={type:le("string",Be._jsonSchemaVersion),bytes:le("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new O(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new we(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new O(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new O(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:tt._jsonSchemaVersion}}static fromJSON(e){if($r(e,tt._jsonSchema))return new tt(e.latitude,e.longitude)}}tt._jsonSchemaVersion="firestore/geoPoint/1.0",tt._jsonSchema={type:le("string",tt._jsonSchemaVersion),latitude:le("number"),longitude:le("number")};/**
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
 */class nt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:nt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if($r(e,nt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new nt(e.vectorValues);throw new O(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}nt._jsonSchemaVersion="firestore/vectorValue/1.0",nt._jsonSchema={type:le("string",nt._jsonSchemaVersion),vectorValues:le("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=/^__.*__$/;class CE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Bt(e,this.data,this.fieldMask,t,this.fieldTransforms):new zr(e,this.data,t,this.fieldTransforms)}}class Mf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Bt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function xf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B(40011,{Ec:n})}}class Ka{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Ka(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Js(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(xf(this.Ec)&&PE.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class DE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||vi(e)}Dc(e,t,r,s=!1){return new Ka({Ec:e,methodName:t,bc:r,path:we.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wa(n){const e=n._freezeSettings(),t=vi(n._databaseId);return new DE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function NE(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);Qa("Data must be an object, but it was:",a,r);const c=Ff(r,a);let u,d;if(i.merge)u=new Ue(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const m=[];for(const y of i.mergeFields){const T=Zo(e,y,t);if(!a.contains(T))throw new O(R.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);Bf(m,T)||m.push(T)}u=new Ue(m),d=a.fieldTransforms.filter((y=>u.covers(y.field)))}else u=null,d=a.fieldTransforms;return new CE(new Me(c),u,d)}class Ai extends bi{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ai}}class Ga extends bi{_toFieldTransform(e){return new Sv(e.path,new Dr)}isEqual(e){return e instanceof Ga}}function VE(n,e,t,r){const s=n.Dc(1,e,t);Qa("Data must be an object, but it was:",s,r);const i=[],a=Me.empty();Ut(r,((u,d)=>{const m=Ja(e,u,t);d=he(d);const y=s.gc(m);if(d instanceof Ai)i.push(m);else{const T=Kr(d,y);T!=null&&(i.push(m),a.set(m,T))}}));const c=new Ue(i);return new Mf(a,c,s.fieldTransforms)}function OE(n,e,t,r,s,i){const a=n.Dc(1,e,t),c=[Zo(e,r,t)],u=[s];if(i.length%2!=0)throw new O(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let T=0;T<i.length;T+=2)c.push(Zo(e,i[T])),u.push(i[T+1]);const d=[],m=Me.empty();for(let T=c.length-1;T>=0;--T)if(!Bf(d,c[T])){const k=c[T];let N=u[T];N=he(N);const P=a.gc(k);if(N instanceof Ai)d.push(k);else{const D=Kr(N,P);D!=null&&(d.push(k),m.set(k,D))}}const y=new Ue(d);return new Mf(m,y,a.fieldTransforms)}function LE(n,e,t,r=!1){return Kr(t,n.Dc(r?4:3,e))}function Kr(n,e){if(Uf(n=he(n)))return Qa("Unsupported field value:",e,n),Ff(n,e);if(n instanceof bi)return(function(r,s){if(!xf(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let u=Kr(c,s.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=he(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Iv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ne.fromDate(r);return{timestampValue:Ks(s.serializer,i)}}if(r instanceof ne){const i=new ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ks(s.serializer,i)}}if(r instanceof tt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Be)return{bytesValue:tf(s.serializer,r._byteString)};if(r instanceof ue){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ca(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof nt)return(function(a,c){return{mapValue:{fields:{[Cd]:{stringValue:Dd},[zs]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw c.wc("VectorValues must only contain numeric values.");return Sa(c.serializer,d)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${ui(r)}`)})(n,e)}function Ff(n,e){const t={};return bd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ut(n,((r,s)=>{const i=Kr(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Uf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ne||n instanceof tt||n instanceof Be||n instanceof ue||n instanceof bi||n instanceof nt)}function Qa(n,e,t){if(!Uf(t)||!Td(t)){const r=ui(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Zo(n,e,t){if((e=he(e))instanceof Ii)return e._internalPath;if(typeof e=="string")return Ja(n,e);throw Js("Field path arguments must be of type string or ",n,!1,void 0,t)}const ME=new RegExp("[~\\*/\\[\\]]");function Ja(n,e,t){if(e.search(ME)>=0)throw Js(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ii(...e.split("."))._internalPath}catch{throw Js(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Js(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new O(R.INVALID_ARGUMENT,c+n+u)}function Bf(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ue(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new xE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Si("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class xE extends $f{data(){return super.data()}}function Si(n,e){return typeof e=="string"?Ja(n,e):e instanceof Ii?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new O(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ya{}class Xa extends Ya{}function ki(n,e,...t){let r=[];e instanceof Ya&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((u=>u instanceof Za)).length,c=i.filter((u=>u instanceof Ri)).length;if(a>1||a>0&&c>0)throw new O(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Ri extends Xa{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ri(e,t,r)}_apply(e){const t=this._parse(e);return jf(e._query,t),new vt(e.firestore,e.converter,zo(e._query,t))}_parse(e){const t=Wa(e.firestore);return(function(i,a,c,u,d,m,y){let T;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new O(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Xu(y,m);const N=[];for(const P of y)N.push(Yu(u,i,P));T={arrayValue:{values:N}}}else T=Yu(u,i,y)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Xu(y,m),T=LE(c,a,y,m==="in"||m==="not-in");return ce.create(d,m,T)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function UE(n,e,t){const r=e,s=Si("where",n);return Ri._create(s,r,t)}class Za extends Ya{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Za(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Ge.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)jf(a,u),a=zo(a,u)})(e._query,t),new vt(e.firestore,e.converter,zo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ec extends Xa{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ec(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new O(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new O(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Cr(i,a)})(e._query,this._field,this._direction);return new vt(e.firestore,e.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new jn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function tc(n,e="asc"){const t=e,r=Si("orderBy",n);return ec._create(r,t)}class nc extends Xa{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new nc(e,t,r)}_apply(e){return new vt(e.firestore,e.converter,qs(e._query,this._limit,this._limitType))}}function zf(n){return jy("limit",n),nc._create("limit",n,"F")}function Yu(n,e,t){if(typeof(t=he(t))=="string"){if(t==="")throw new O(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ud(e)&&t.indexOf("/")!==-1)throw new O(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ee.fromString(t));if(!x.isDocumentKey(r))throw new O(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fu(n,new x(r))}if(t instanceof ue)return fu(n,t._key);throw new O(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ui(t)}.`)}function Xu(n,e){if(!Array.isArray(n)||n.length===0)throw new O(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jf(n,e){const t=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new O(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new O(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class BE{convertValue(e,t="none"){switch(Mt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Lt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ut(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[zs].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>oe(a.doubleValue)));return new nt(i)}convertGeoPoint(e){return new tt(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=fi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(kr(e));default:return null}}convertTimestamp(e){const t=Ot(e);return new ne(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ee.fromString(e);X(cf(r),9688,{name:e});const s=new Rr(r.get(1),r.get(3)),i=new x(r.popFirst(5));return s.isEqual(t)||_t(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class fr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zt extends $f{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Rs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Si("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new O(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Zt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Zt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Zt._jsonSchema={type:le("string",Zt._jsonSchemaVersion),bundleSource:le("string","DocumentSnapshot"),bundleName:le("string"),bundle:le("string")};class Rs extends Zt{data(e={}){return super.data(e)}}class en{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new fr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Rs(this._firestore,this._userDataWriter,r.key,r,new fr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new O(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const u=new Rs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new fr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new Rs(s._firestore,s._userDataWriter,c.doc.key,c.doc,new fr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),m=a.indexOf(c.doc.key)),{type:zE(c.type),doc:u,oldIndex:d,newIndex:m}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new O(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=en._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=va.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function zE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B(61501,{type:n})}}en._jsonSchemaVersion="firestore/querySnapshot/1.0",en._jsonSchema={type:le("string",en._jsonSchemaVersion),bundleSource:le("string","QuerySnapshot"),bundleName:le("string"),bundle:le("string")};class rc extends BE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Be(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ue(this.firestore,null,t)}}function jE(n){n=mt(n,vt);const e=mt(n.firestore,on),t=Ha(e),r=new rc(e);return AE(t,n._query,{source:"server"}).then((s=>new en(e,r,n,s)))}function qE(n,e,t,...r){n=mt(n,ue);const s=mt(n.firestore,on),i=Wa(s);let a;return a=typeof(e=he(e))=="string"||e instanceof Ii?OE(i,"updateDoc",n._key,e,t,r):VE(i,"updateDoc",n._key,e),sc(s,[a.toMutation(n._key,Ke.exists(!0))])}function HE(n){return sc(mt(n.firestore,on),[new ka(n._key,Ke.none())])}function KE(n,e){const t=mt(n.firestore,on),r=Ti(n),s=$E(n.converter,e);return sc(t,[NE(Wa(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ke.exists(!1))]).then((()=>r))}function Ln(n,...e){var t,r,s;n=he(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Ju(e[a])||(i=e[a++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Ju(e[a])){const y=e[a];e[a]=(t=y.next)===null||t===void 0?void 0:t.bind(y),e[a+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),e[a+2]=(s=y.complete)===null||s===void 0?void 0:s.bind(y)}let u,d,m;if(n instanceof ue)d=mt(n.firestore,on),m=Aa(n._key.path),u={next:y=>{e[a]&&e[a](WE(d,n,y))},error:e[a+1],complete:e[a+2]};else{const y=mt(n,vt);d=mt(y.firestore,on),m=y._query;const T=new rc(d);u={next:k=>{e[a]&&e[a](new en(d,T,y,k))},error:e[a+1],complete:e[a+2]},FE(n._query)}return(function(T,k,N,P){const D=new Vf(P),U=new bf(k,D,N);return T.asyncQueue.enqueueAndForget((async()=>Tf(await Xo(T),U))),()=>{D.Ou(),T.asyncQueue.enqueueAndForget((async()=>If(await Xo(T),U)))}})(Ha(d),m,c,u)}function sc(n,e){return(function(r,s){const i=new Dt;return r.asyncQueue.enqueueAndForget((async()=>fE(await bE(r),s,i))),i.promise})(Ha(n),e)}function WE(n,e,t){const r=t.docs.get(e._key),s=new rc(n);return new Zt(n,s,e._key,r,new fr(t.hasPendingWrites,t.fromCache),e.converter)}function GE(){return new Ga("serverTimestamp")}(function(e,t=!0){(function(s){Bn=s})(si),rt(new We("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new on(new Ly(r.getProvider("auth-internal")),new Fy(a,r.getProvider("app-check-internal")),(function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new O(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rr(d.options.projectId,m)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),$e(Zl,eu,e),$e(Zl,eu,"esm2017")})();const QE=!1,JE=by,Wr=Ch(JE),Mn=U_(Wr,{persistence:[py,ty]}),ot=kE(Wr,{experimentalAutoDetectLongPolling:!0}),Zu=n=>`${String(n).trim().toLowerCase()}@app.local`,qf=Ay;let Hf=0,ic=!1,ea=!1,ta=0;const Kf=new Set,pe=()=>Date.now()+Hf,YE=n=>Kf.add(n);async function xn(){try{const n=Date.now(),e=await fetch(`${qf}/time`,{cache:"no-store"}),t=Date.now(),r=await e.json();return Hf=r.now-(n+t)/2,ic=!!r.testMode,ea=!!r.shifted,ta=t,Kf.forEach(s=>s()),!0}catch{return!1}}function XE(){setInterval(()=>{(ic||Date.now()-ta>180*1e3)&&xn()},2e4),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Date.now()-ta>2e4&&xn()})}class wo extends Error{}async function de(n,e={},{authed:t=!0}={}){var a;const r={"content-type":"application/json"};if(t){const c=await((a=Mn.currentUser)==null?void 0:a.getIdToken());if(!c)throw new wo("Bitte neu einloggen");r.authorization=`Bearer ${c}`}let s;try{s=await fetch(`${qf}${n}`,{method:"POST",headers:r,body:JSON.stringify(e)})}catch{throw new wo("Keine Verbindung. Bist du online?")}const i=await s.json().catch(()=>({}));if(!s.ok)throw new wo(i.error||`Fehler ${s.status}`);return i}function f(n,e={},...t){const r=document.createElement(n);for(const[s,i]of Object.entries(e||{}))i==null||i===!1||(s==="class"?r.className=i:s==="style"&&typeof i=="object"?Object.assign(r.style,i):s.startsWith("on")?r.addEventListener(s.slice(2).toLowerCase(),i):s==="html"?r.innerHTML=i:s in r&&s!=="list"&&s!=="form"?r[s]=i:r.setAttribute(s,i===!0?"":i));return ZE(r,t),r}function ZE(n,e){for(const t of e.flat(1/0))t==null||t===!1||n.append(t instanceof Node?t:document.createTextNode(String(t)))}const kt=n=>{const e=document.createElement("template");return e.innerHTML=n.trim(),e.content.firstChild};function G(n,e="info"){const t=f("div",{class:`toast toast-${e}`},n);document.body.append(t),requestAnimationFrame(()=>t.classList.add("show")),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},e==="error"?4500:2800)}const eT=()=>document.getElementById("overlay");function Qe(n,{sheet:e=!1,full:t=!1,onClose:r,dismissable:s=!0}={}){const i=f("div",{class:`backdrop ${e?"is-sheet":""} ${t?"is-full":""}`}),a=f("div",{class:e?"sheet":t?"fullscreen":"modal"});let c=!1;const u=()=>{c||(c=!0,i.classList.remove("show"),setTimeout(()=>i.remove(),250),r==null||r())};return s&&i.addEventListener("click",d=>{d.target===i&&u()}),a.append(typeof n=="function"?n(u):n),i.append(a),eT().append(i),requestAnimationFrame(()=>i.classList.add("show")),u}function Or(n,e,t="OK",r="gold"){return new Promise(s=>{Qe(i=>f("div",{class:"stack"},f("h2",{class:"title"},n),e&&f("p",{class:"muted center"},e),f("div",{class:"row gap"},f("button",{class:"btn btn-grey",onclick:()=>{s(!1),i()}},"Abbrechen"),f("button",{class:`btn btn-${r}`,onclick:()=>{s(!0),i()}},t))),{onClose:()=>s(!1)})})}function Pe(n,e,t){e?(n.dataset.label=n.innerHTML,n.disabled=!0,n.innerHTML=`<span class="spinner"></span> ${t||""}`):(n.disabled=!1,n.dataset.label&&(n.innerHTML=n.dataset.label))}function tT(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function na(n){return n.toFixed(1).replace(".",",")}function Pi(n,e){const t=Math.max(0,Math.floor((e-n)/1e3));if(t<60)return"gerade eben";const r=Math.floor(t/60);if(r<60)return`vor ${r} Min.`;const s=Math.floor(r/60);if(s<24)return`vor ${s} Std.`;const i=Math.floor(s/24);return i===1?"gestern":`vor ${i} Tagen`}const nT=()=>/iphone|ipad|ipod/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,rT=()=>/android/i.test(navigator.userAgent),sT=()=>window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0;let iT=0;function Ys(n,e,t,r,s,i=-90){const a=[];for(let c=0;c<s*2;c++){const u=c%2?r:t,d=(i+c*180/s)*Math.PI/180;a.push(`${(n+u*Math.cos(d)).toFixed(1)},${(e+u*Math.sin(d)).toFixed(1)}`)}return a.join(" ")}const eh={noob:'<circle cx="50" cy="50" r="40"/>',advanced:'<path d="M50 7 L87 20 V47 C87 72 69 88 50 95 C31 88 13 72 13 47 V20 Z"/>',pro:'<polygon points="50,5 89,27 89,73 50,95 11,73 11,27"/>',elite:`<polygon points="${Ys(50,50,46,37,10)}"/>`,unreal:'<polygon points="50,3 93,50 50,97 7,50"/>',hacker:'<polygon points="27,7 73,7 95,50 73,93 27,93 5,50"/>',gotti:`<polygon points="${Ys(50,50,48,39,16)}"/>`},oT={noob:'<path d="M50 74 V50" stroke-width="7" fill="none"/><path d="M50 54 C37 54 28 45 28 32 C41 32 50 41 50 54 Z M50 50 C50 37 59 28 72 28 C72 41 63 50 50 50 Z"/>',advanced:'<path d="M57 14 L29 55 H47 L41 86 L71 43 H53 Z"/>',pro:`<polygon points="${Ys(50,51,30,13,5)}"/>`,elite:'<path d="M50 16 C59 31 73 40 71 61 C70 75 61 84 50 84 C39 84 30 75 29 62 C28 49 38 43 40 32 C45 41 47 45 50 48 C53 37 48 27 50 16 Z"/>',unreal:'<path d="M16 50 C29 30 71 30 84 50 C71 70 29 70 16 50 Z"/><circle cx="50" cy="50" r="11" fill="#1a0b2e" stroke="none"/><circle cx="54" cy="46" r="4" fill="#fff" stroke="none"/>',hacker:'<path d="M38 32 L20 50 L38 68 M62 32 L80 50 L62 68 M56 27 L44 73" fill="none" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>',gotti:'<path d="M20 68 L15 32 L35 47 L50 22 L65 47 L85 32 L80 68 Z"/><rect x="20" y="70" width="60" height="9" rx="3"/><circle cx="50" cy="56" r="5" fill="#ff4fa3"/>'};function vr(n){const e=Ee[n]||Ee[0],t=ci[e.group],r=`bg${++iT}`,s=e.level>0?Array.from({length:e.level},(i,a)=>{const c=50+(a-(e.level-1)/2)*17;return`<polygon points="${Ys(c,90,9,4,5)}" fill="#ffd23f" stroke="#1a0b2e" stroke-width="2.5" stroke-linejoin="round"/>`}).join(""):"";return`<svg class="badge-svg" viewBox="0 0 100 104" xmlns="http://www.w3.org/2000/svg" aria-label="${tT(e.name)}">
  <defs>
    <linearGradient id="${r}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${t.light}"/><stop offset="0.45" stop-color="${t.main}"/><stop offset="1" stop-color="${t.dark}"/>
    </linearGradient>
  </defs>
  <g stroke="#1a0b2e" stroke-width="5" stroke-linejoin="round" fill="url(#${r})">${eh[e.group]}</g>
  <g transform="translate(50 50) scale(0.82) translate(-50 -50)" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="3">${eh[e.group]}</g>
  <g transform="translate(50 50) scale(0.62) translate(-50 -50)" fill="#fff" stroke="#1a0b2e" stroke-width="4" stroke-linejoin="round">${oT[e.group]}</g>
  ${s}
</svg>`}function Gr(n,e=40){const t=kt(vr(n));return t.style.width=`${e}px`,t.style.height=`${e}px`,t}function oc(n,e,t=140,r){const s=Ee[n]||Ee[0],i=ci[s.group],a=2*Math.PI*45,c=f("div",{class:"ringbadge",style:{width:`${t}px`,height:`${t}px`,"--rank":i.main}});r&&(c.dataset.ring=r),c.append(kt(`<svg class="ring" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="none" stroke="#0c0624" stroke-width="9"/>
    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="6"/>
    <circle class="ring-fill" cx="50" cy="50" r="45" fill="none" stroke="${i.main}" stroke-width="6" stroke-linecap="round"
      stroke-dasharray="${a}" stroke-dashoffset="${a*(1-e/100)}" transform="rotate(-90 50 50)"/>
  </svg>`));const u=f("div",{class:"ringbadge-inner"});return u.append(Gr(n,t*.66)),c.append(u),c}function aT(n,e){const t=n.querySelector(".ring-fill");if(!t)return;const r=2*Math.PI*45;t.setAttribute("stroke-dashoffset",String(r*(1-e/100)))}function $t(n,e=40){const t=(n==null?void 0:n.name)||"?";if(n!=null&&n.photoURL)return f("img",{class:"avatar",src:n.photoURL,alt:t,loading:"lazy",style:{width:`${e}px`,height:`${e}px`}});const r=[...(n==null?void 0:n.username)||t].reduce((s,i)=>s+i.charCodeAt(0),0)%360;return f("div",{class:"avatar avatar-initial",style:{width:`${e}px`,height:`${e}px`,fontSize:`${e*.45}px`,background:`hsl(${r} 70% 45%)`}},t.slice(0,1).toUpperCase())}const cT='<svg viewBox="0 0 40 40" class="goonie-ico"><path d="M20 4 C30 4 35 12 35 21 C35 31 28 37 20 37 C12 37 5 31 5 21 C5 12 10 4 20 4 Z" fill="#a45bff" stroke="#1a0b2e" stroke-width="3"/><path d="M12 9 C14 6 18 5 20 5" stroke="#e2c9ff" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="14.5" cy="20" r="4" fill="#fff" stroke="#1a0b2e" stroke-width="2"/><circle cx="25.5" cy="20" r="4" fill="#fff" stroke="#1a0b2e" stroke-width="2"/><circle cx="15.5" cy="20.5" r="1.8" fill="#1a0b2e"/><circle cx="26.5" cy="20.5" r="1.8" fill="#1a0b2e"/><path d="M15 28 Q20 32 25 28" stroke="#1a0b2e" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>',F={uid:null,me:null,users:new Map,posts:[],notifs:[],usersLoaded:!1,postsLoaded:!1},ra=new Set,lT=n=>(ra.add(n),()=>ra.delete(n));let th=0;function Lr(n){cancelAnimationFrame(th),th=requestAnimationFrame(()=>ra.forEach(e=>e(n)))}const wr=n=>n!=null&&n.toMillis?n.toMillis():typeof n=="number"?n:0,ac=n=>{const e=n.data();return{id:n.id,...e,createdAt:wr(e.createdAt),punDeadline:wr(e.punDeadline),punDoneAt:wr(e.punDoneAt)}};let Xs=[];const cc=80;let Zs=cc,Rt=null;function Wf(){Rt==null||Rt(),Rt=Ln(ki(sn(ot,"posts"),tc("createdAt","desc"),zf(Zs)),n=>{F.posts=n.docs.map(ac),F.postsLoaded=!0,F.feedHasMore=n.size>=Zs,Lr("posts")},n=>console.warn("posts",n))}function uT(){Zs+=cc,Wf()}function hT(n,e){Gf(),F.uid=n,Xs.push(Ln(sn(ot,"users"),t=>{F.users=new Map(t.docs.map(r=>[r.id,{id:r.id,...r.data()}])),F.me=F.users.get(n)||null,F.usersLoaded=!0,F.me||e==null||e(),Lr("users")},t=>console.warn("users",t))),Zs=cc,Wf(),Xs.push(Ln(ki(sn(ot,"notifications",n,"items"),tc("createdAt","desc"),zf(60)),t=>{F.notifs=t.docs.map(r=>({id:r.id,...r.data(),createdAt:wr(r.data().createdAt)})),Lr("notifs")},t=>console.warn("notifs",t)))}function Gf(){Xs.forEach(n=>n()),Xs=[],Rt==null||Rt(),Rt=null,Object.assign(F,{uid:null,me:null,users:new Map,posts:[],notifs:[],usersLoaded:!1,postsLoaded:!1})}async function dT(){const n=await jE(sn(ot,"users"));F.users=new Map(n.docs.map(e=>[e.id,{id:e.id,...e.data()}])),F.me=F.users.get(F.uid)||null,Lr("users")}function Qf(){Lr("tick")}function fT(n,e){return Ln(ki(sn(ot,"posts"),UE("uid","==",n)),t=>{e(t.docs.map(ac).sort((r,s)=>s.day-r.day))})}function pT(n,e){return Ln(Ti(ot,"posts",n),t=>e(t.exists()?ac(t):null))}function mT(n,e){return Ln(ki(sn(ot,"posts",n,"comments"),tc("createdAt","asc")),t=>{e(t.docs.map(r=>({id:r.id,...r.data(),createdAt:wr(r.data().createdAt)||Date.now()})))})}async function gT(n,e){return(await KE(sn(ot,"posts",n,"comments"),{uid:F.uid,text:e,createdAt:GE()})).id}const _T=(n,e)=>HE(Ti(ot,"posts",n,"comments",e)),Jf=n=>qE(Ti(ot,"users",F.uid),n),Yf="@firebase/installations",lc="0.6.18";/**
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
 */const Xf=1e4,Zf=`w:${lc}`,ep="FIS_v2",yT="https://firebaseinstallations.googleapis.com/v1",vT=3600*1e3,wT="installations",ET="Installations";/**
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
 */const TT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},an=new un(wT,ET,TT);function tp(n){return n instanceof at&&n.code.includes("request-failed")}/**
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
 */function np({projectId:n}){return`${yT}/projects/${n}/installations`}function rp(n){return{token:n.token,requestStatus:2,expiresIn:bT(n.expiresIn),creationTime:Date.now()}}async function sp(n,e){const r=(await e.json()).error;return an.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ip({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function IT(n,{refreshToken:e}){const t=ip(n);return t.append("Authorization",AT(e)),t}async function op(n){const e=await n();return e.status>=500&&e.status<600?n():e}function bT(n){return Number(n.replace("s","000"))}function AT(n){return`${ep} ${n}`}/**
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
 */async function ST({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=np(n),s=ip(n),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:t,authVersion:ep,appId:n.appId,sdkVersion:Zf},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await op(()=>fetch(r,c));if(u.ok){const d=await u.json();return{fid:d.fid||t,registrationStatus:2,refreshToken:d.refreshToken,authToken:rp(d.authToken)}}else throw await sp("Create Installation",u)}/**
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
 */function ap(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function kT(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const RT=/^[cdef][\w-]{21}$/,sa="";function PT(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=CT(n);return RT.test(t)?t:sa}catch{return sa}}function CT(n){return kT(n).substr(0,22)}/**
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
 */function Ci(n){return`${n.appName}!${n.appId}`}/**
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
 */const cp=new Map;function lp(n,e){const t=Ci(n);up(t,e),DT(t,e)}function up(n,e){const t=cp.get(n);if(t)for(const r of t)r(e)}function DT(n,e){const t=NT();t&&t.postMessage({key:n,fid:e}),VT()}let Jt=null;function NT(){return!Jt&&"BroadcastChannel"in self&&(Jt=new BroadcastChannel("[Firebase] FID Change"),Jt.onmessage=n=>{up(n.data.key,n.data.fid)}),Jt}function VT(){cp.size===0&&Jt&&(Jt.close(),Jt=null)}/**
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
 */const OT="firebase-installations-database",LT=1,cn="firebase-installations-store";let Eo=null;function uc(){return Eo||(Eo=ri(OT,LT,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(cn)}}})),Eo}async function ei(n,e){const t=Ci(n),s=(await uc()).transaction(cn,"readwrite"),i=s.objectStore(cn),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&lp(n,e.fid),e}async function hp(n){const e=Ci(n),r=(await uc()).transaction(cn,"readwrite");await r.objectStore(cn).delete(e),await r.done}async function Di(n,e){const t=Ci(n),s=(await uc()).transaction(cn,"readwrite"),i=s.objectStore(cn),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!a||a.fid!==c.fid)&&lp(n,c.fid),c}/**
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
 */async function hc(n){let e;const t=await Di(n.appConfig,r=>{const s=MT(r),i=xT(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===sa?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function MT(n){const e=n||{fid:PT(),registrationStatus:0};return dp(e)}function xT(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(an.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=FT(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:UT(n)}:{installationEntry:e}}async function FT(n,e){try{const t=await ST(n,e);return ei(n.appConfig,t)}catch(t){throw tp(t)&&t.customData.serverCode===409?await hp(n.appConfig):await ei(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function UT(n){let e=await nh(n.appConfig);for(;e.registrationStatus===1;)await ap(100),e=await nh(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await hc(n);return r||t}return e}function nh(n){return Di(n,e=>{if(!e)throw an.create("installation-not-found");return dp(e)})}function dp(n){return BT(n)?{fid:n.fid,registrationStatus:0}:n}function BT(n){return n.registrationStatus===1&&n.registrationTime+Xf<Date.now()}/**
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
 */async function $T({appConfig:n,heartbeatServiceProvider:e},t){const r=zT(n,t),s=IT(n,t),i=e.getImmediate({optional:!0});if(i){const d=await i.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:Zf,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await op(()=>fetch(r,c));if(u.ok){const d=await u.json();return rp(d)}else throw await sp("Generate Auth Token",u)}function zT(n,{fid:e}){return`${np(n)}/${e}/authTokens:generate`}/**
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
 */async function dc(n,e=!1){let t;const r=await Di(n.appConfig,i=>{if(!fp(i))throw an.create("not-registered");const a=i.authToken;if(!e&&HT(a))return i;if(a.requestStatus===1)return t=jT(n,e),i;{if(!navigator.onLine)throw an.create("app-offline");const c=WT(i);return t=qT(n,c),c}});return t?await t:r.authToken}async function jT(n,e){let t=await rh(n.appConfig);for(;t.authToken.requestStatus===1;)await ap(100),t=await rh(n.appConfig);const r=t.authToken;return r.requestStatus===0?dc(n,e):r}function rh(n){return Di(n,e=>{if(!fp(e))throw an.create("not-registered");const t=e.authToken;return GT(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function qT(n,e){try{const t=await $T(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await ei(n.appConfig,r),t}catch(t){if(tp(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await hp(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ei(n.appConfig,r)}throw t}}function fp(n){return n!==void 0&&n.registrationStatus===2}function HT(n){return n.requestStatus===2&&!KT(n)}function KT(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+vT}function WT(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function GT(n){return n.requestStatus===1&&n.requestTime+Xf<Date.now()}/**
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
 */async function QT(n){const e=n,{installationEntry:t,registrationPromise:r}=await hc(e);return r?r.catch(console.error):dc(e).catch(console.error),t.fid}/**
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
 */async function JT(n,e=!1){const t=n;return await YT(t),(await dc(t,e)).token}async function YT(n){const{registrationPromise:e}=await hc(n);e&&await e}/**
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
 */function XT(n){if(!n||!n.options)throw To("App Configuration");if(!n.name)throw To("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw To(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function To(n){return an.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="installations",ZT="installations-internal",eI=n=>{const e=n.getProvider("app").getImmediate(),t=XT(e),r=Fr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},tI=n=>{const e=n.getProvider("app").getImmediate(),t=Fr(e,pp).getImmediate();return{getId:()=>QT(t),getToken:s=>JT(t,s)}};function nI(){rt(new We(pp,eI,"PUBLIC")),rt(new We(ZT,tI,"PRIVATE"))}nI();$e(Yf,lc);$e(Yf,lc,"esm2017");/**
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
 */const rI="/firebase-messaging-sw.js",sI="/firebase-cloud-messaging-push-scope",mp="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",iI="https://fcmregistrations.googleapis.com/v1",gp="google.c.a.c_id",oI="google.c.a.c_l",aI="google.c.a.ts",cI="google.c.a.e",sh=1e4;var ih;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ih||(ih={}));/**
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
 */var Mr;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(Mr||(Mr={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function lI(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const Io="fcm_token_details_db",uI=5,oh="fcm_token_object_Store";async function hI(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Io))return null;let e=null;return(await ri(Io,uI,{upgrade:async(r,s,i,a)=>{var c;if(s<2||!r.objectStoreNames.contains(oh))return;const u=a.objectStore(oh),d=await u.index("fcmSenderId").get(n);if(await u.clear(),!!d){if(s===2){const m=d;if(!m.auth||!m.p256dh||!m.endpoint)return;e={token:m.fcmToken,createTime:(c=m.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:m.auth,p256dh:m.p256dh,endpoint:m.endpoint,swScope:m.swScope,vapidKey:typeof m.vapidKey=="string"?m.vapidKey:ht(m.vapidKey)}}}else if(s===3){const m=d;e={token:m.fcmToken,createTime:m.createTime,subscriptionOptions:{auth:ht(m.auth),p256dh:ht(m.p256dh),endpoint:m.endpoint,swScope:m.swScope,vapidKey:ht(m.vapidKey)}}}else if(s===4){const m=d;e={token:m.fcmToken,createTime:m.createTime,subscriptionOptions:{auth:ht(m.auth),p256dh:ht(m.p256dh),endpoint:m.endpoint,swScope:m.swScope,vapidKey:ht(m.vapidKey)}}}}}})).close(),await oo(Io),await oo("fcm_vapid_details_db"),await oo("undefined"),dI(e)?e:null}function dI(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const fI="firebase-messaging-database",pI=1,ln="firebase-messaging-store";let bo=null;function fc(){return bo||(bo=ri(fI,pI,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ln)}}})),bo}async function _p(n){const e=mc(n),r=await(await fc()).transaction(ln).objectStore(ln).get(e);if(r)return r;{const s=await hI(n.appConfig.senderId);if(s)return await pc(n,s),s}}async function pc(n,e){const t=mc(n),s=(await fc()).transaction(ln,"readwrite");return await s.objectStore(ln).put(e,t),await s.done,e}async function mI(n){const e=mc(n),r=(await fc()).transaction(ln,"readwrite");await r.objectStore(ln).delete(e),await r.done}function mc({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ce=new un("messaging","Messaging",gI);/**
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
 */async function _I(n,e){const t=await _c(n),r=vp(e),s={method:"POST",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(gc(n.appConfig),s)).json()}catch(a){throw Ce.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw Ce.create("token-subscribe-failed",{errorInfo:a})}if(!i.token)throw Ce.create("token-subscribe-no-token");return i.token}async function yI(n,e){const t=await _c(n),r=vp(e.subscriptionOptions),s={method:"PATCH",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${gc(n.appConfig)}/${e.token}`,s)).json()}catch(a){throw Ce.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw Ce.create("token-update-failed",{errorInfo:a})}if(!i.token)throw Ce.create("token-update-no-token");return i.token}async function yp(n,e){const r={method:"DELETE",headers:await _c(n)};try{const i=await(await fetch(`${gc(n.appConfig)}/${e}`,r)).json();if(i.error){const a=i.error.message;throw Ce.create("token-unsubscribe-failed",{errorInfo:a})}}catch(s){throw Ce.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function gc({projectId:n}){return`${iI}/projects/${n}/registrations`}async function _c({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function vp({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const s={web:{endpoint:t,auth:e,p256dh:n}};return r!==mp&&(s.web.applicationPubKey=r),s}/**
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
 */const vI=10080*60*1e3;async function wI(n){const e=await II(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:ht(e.getKey("auth")),p256dh:ht(e.getKey("p256dh"))},r=await _p(n.firebaseDependencies);if(r){if(bI(r.subscriptionOptions,t))return Date.now()>=r.createTime+vI?TI(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await yp(n.firebaseDependencies,r.token)}catch(s){console.warn(s)}return ah(n.firebaseDependencies,t)}else return ah(n.firebaseDependencies,t)}async function EI(n){const e=await _p(n.firebaseDependencies);e&&(await yp(n.firebaseDependencies,e.token),await mI(n.firebaseDependencies));const t=await n.swRegistration.pushManager.getSubscription();return t?t.unsubscribe():!0}async function TI(n,e){try{const t=await yI(n.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await pc(n.firebaseDependencies,r),t}catch(t){throw t}}async function ah(n,e){const r={token:await _I(n,e),createTime:Date.now(),subscriptionOptions:e};return await pc(n,r),r.token}async function II(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:lI(e)})}function bI(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,s=e.auth===n.auth,i=e.p256dh===n.p256dh;return t&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return AI(e,n),SI(e,n),kI(e,n),e}function AI(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const s=e.notification.image;s&&(n.notification.image=s);const i=e.notification.icon;i&&(n.notification.icon=i)}function SI(n,e){e.data&&(n.data=e.data)}function kI(n,e){var t,r,s,i,a;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const c=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;c&&(n.fcmOptions.link=c);const u=(a=e.fcmOptions)===null||a===void 0?void 0:a.analytics_label;u&&(n.fcmOptions.analyticsLabel=u)}/**
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
 */function RI(n){return typeof n=="object"&&!!n&&gp in n}/**
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
 */function PI(n){if(!n||!n.options)throw Ao("App Configuration Object");if(!n.name)throw Ao("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw Ao(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Ao(n){return Ce.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=PI(e);this.firebaseDependencies={app:e,appConfig:s,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(n){try{n.swRegistration=await navigator.serviceWorker.register(rI,{scope:sI}),n.swRegistration.update().catch(()=>{}),await DI(n.swRegistration)}catch(e){throw Ce.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function DI(n){return new Promise((e,t)=>{const r=setTimeout(()=>t(new Error(`Service worker not registered after ${sh} ms`)),sh),s=n.installing||n.waiting;n.active?(clearTimeout(r),e()):s?s.onstatechange=i=>{var a;((a=i.target)===null||a===void 0?void 0:a.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),t(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NI(n,e){if(!e&&!n.swRegistration&&await wp(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ce.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VI(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=mp)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ep(n,e){if(!navigator)throw Ce.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Ce.create("permission-blocked");return await VI(n,e==null?void 0:e.vapidKey),await NI(n,e==null?void 0:e.serviceWorkerRegistration),wI(n)}/**
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
 */async function OI(n,e,t){const r=LI(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[gp],message_name:t[oI],message_time:t[aI],message_device_time:Math.floor(Date.now()/1e3)})}function LI(n){switch(n){case Mr.NOTIFICATION_CLICKED:return"notification_open";case Mr.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MI(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===Mr.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(ch(t)):n.onMessageHandler.next(ch(t)));const r=t.data;RI(r)&&r[cI]==="1"&&await OI(n,t.messageType,r)}const lh="@firebase/messaging",uh="0.12.22";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI=n=>{const e=new CI(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>MI(e,t)),e},FI=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>Ep(e,r)}};function UI(){rt(new We("messaging",xI,"PUBLIC")),rt(new We("messaging-internal",FI,"PRIVATE")),$e(lh,uh),$e(lh,uh,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tp(){try{await Sh()}catch{return!1}return typeof window<"u"&&Ah()&&Um()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(n){if(!navigator)throw Ce.create("only-available-in-window");return n.swRegistration||await wp(n),EI(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yc(n=jg()){return Tp().then(e=>{if(!e)throw Ce.create("unsupported-browser")},e=>{throw Ce.create("indexed-db-unsupported")}),Fr(he(n),"messaging").getImmediate()}async function Ip(n,e){return n=he(n),Ep(n,e)}function $I(n){return n=he(n),BI(n)}UI();let ti=null;async function vc(){if(!("serviceWorker"in navigator))return null;try{return ti=await navigator.serviceWorker.register("./sw.js",{scope:"./"}),navigator.serviceWorker.addEventListener("message",n=>{var e;((e=n.data)==null?void 0:e.type)==="open"&&n.data.link&&(location.hash=n.data.link.replace(/^#/,""))}),ti}catch{return null}}async function bp(){if(!("Notification"in window)||!("serviceWorker"in navigator)||!("PushManager"in window))return!1;try{return await Tp()}catch{return!1}}const Ap=()=>"Notification"in window?Notification.permission:"unsupported";async function Sp(){if(!await bp())throw new Error("Push geht hier nicht. Auf dem iPhone: App erst zum Home-Bildschirm hinzufügen.");if(await Notification.requestPermission()!=="granted")throw new Error("Benachrichtigungen wurden nicht erlaubt. Du kannst das in den Handy-Einstellungen ändern.");const e=ti||await vc(),t=await Ip(yc(Wr),{serviceWorkerRegistration:e});if(!t)throw new Error("Kein Push-Token erhalten");return localStorage.setItem("pushToken",t),await de("/push/register",{token:t,enabled:!0}),!0}async function zI(){const n=localStorage.getItem("pushToken");await de("/push/register",{token:n,remove:!0,enabled:!1});try{QE||await $I(yc(Wr))}catch{}localStorage.removeItem("pushToken")}async function jI(){if(!(Ap()!=="granted"||localStorage.getItem("pushOff")==="1"))try{const n=ti||await vc(),e=await Ip(yc(Wr),{serviceWorkerRegistration:n});e&&e!==localStorage.getItem("pushToken")&&(localStorage.setItem("pushToken",e),await de("/push/register",{token:e,enabled:!0}))}catch{}}function qI(){try{let n=localStorage.getItem("deviceId");return n||(n=crypto.randomUUID(),localStorage.setItem("deviceId",n)),n}catch{return""}}function hh(n){const e=(n==null?void 0:n.code)||"";return e.includes("invalid-credential")||e.includes("wrong-password")||e.includes("user-not-found")||e.includes("invalid-email")?"Username oder Passwort falsch":e.includes("too-many-requests")?"Zu viele Versuche. Bitte kurz warten.":e.includes("network")?"Keine Verbindung":(n==null?void 0:n.message)||"Login fehlgeschlagen"}function HI(){const n=f("div",{class:"auth"}),e=f("div",{class:"auth-logo"},Gr(11,96),f("h1",{class:"logo-text"},nd),f("p",{class:"muted"},"November-Streak mit deinen Leuten")),t=f("div",{class:"card auth-card"}),r=(c,u)=>f("label",{class:"field"},f("span",{class:"label"},c),u),s=()=>{t.replaceChildren(f("button",{class:"btn btn-gold btn-big",onclick:i},"Einloggen"),f("button",{class:"btn btn-blue btn-big",onclick:a},"Neu registrieren"))},i=()=>{const c=f("input",{class:"input",autocomplete:"username",autocapitalize:"none",spellcheck:!1,placeholder:"dein_username"}),u=f("input",{class:"input",type:"password",autocomplete:"current-password",placeholder:"••••••"}),d=f("button",{class:"btn btn-gold btn-big",type:"submit"},"Einloggen"),m=f("form",{class:"stack"},f("h2",{class:"title"},"Einloggen"),r("Username",c),r("Passwort",u),d,f("button",{class:"btn btn-grey",type:"button",onclick:s},"Zurück"));m.onsubmit=async y=>{y.preventDefault(),Pe(d,!0);try{history.replaceState(null,"","#/"),await ql(Mn,Zu(c.value),u.value)}catch(T){Pe(d,!1),G(hh(T),"error")}},t.replaceChildren(m),c.focus()},a=()=>{const c=f("input",{class:"input",maxLength:24,placeholder:"z. B. Freddi"}),u=f("input",{class:"input",maxLength:20,autocomplete:"username",autocapitalize:"none",spellcheck:!1,placeholder:"nur a–z, 0–9, _ und ."}),d=f("input",{class:"input",type:"password",autocomplete:"new-password",placeholder:"mind. 6 Zeichen"}),m=f("input",{class:"input",type:"password",autocomplete:"off",placeholder:"bekommst du von der Gruppe"}),y=f("button",{class:"btn btn-blue btn-big",type:"submit"},"Registrieren"),T=f("form",{class:"stack"},f("h2",{class:"title"},"Neu registrieren"),r("Name (wird angezeigt)",c),r("Username (zum Einloggen)",u),r("Passwort",d),r("Website-Code",m),y,f("button",{class:"btn btn-grey",type:"button",onclick:s},"Zurück"));T.onsubmit=async k=>{k.preventDefault(),Pe(y,!0);try{await de("/register",{name:c.value,username:u.value,password:d.value,code:m.value,deviceId:qI()},{authed:!1}),localStorage.removeItem("onboarded"),history.replaceState(null,"","#/"),await ql(Mn,Zu(u.value),d.value),G("Willkommen! 🎉","success")}catch(N){Pe(y,!1),G(N.code?hh(N):N.message,"error")}},t.replaceChildren(T),c.focus()};return s(),n.append(e,t),n}function KI(n){const e=f("div",{class:"auth onboarding"}),t=nT(),r=rT(),s=sT();let i=s?1:0;const a=[()=>f("div",{class:"stack"},f("div",{class:"big-emoji"},"📲"),f("h2",{class:"title"},"App auf den Home-Bildschirm"),f("p",{class:"muted center"},t?"Auf dem iPhone kommen Push-Nachrichten nur, wenn die App auf dem Home-Bildschirm ist.":"Dann startest du die App mit einem Tipp, wie eine normale App."),t?f("ol",{class:"howto"},f("li",{},"Öffne diese Seite in ",f("b",{},"Safari"),"."),f("li",{},"Tippe unten auf ",f("b",{},"Teilen")," (Quadrat mit Pfeil nach oben ⬆️)."),f("li",{},"Scrolle runter und tippe ",f("b",{},"„Zum Home-Bildschirm“"),"."),f("li",{},"Tippe oben rechts auf ",f("b",{},"„Hinzufügen“"),"."),f("li",{},"Öffne die App jetzt über das neue Symbol auf dem Home-Bildschirm und logge dich dort ein.")):f("ol",{class:"howto"},f("li",{},"Öffne diese Seite in ",f("b",{},"Chrome"),"."),f("li",{},"Tippe oben rechts auf ",f("b",{},"⋮")," (drei Punkte)."),f("li",{},"Tippe ",f("b",{},"„Zum Startbildschirm hinzufügen“")," oder ",f("b",{},"„App installieren“"),"."),f("li",{},"Bestätige mit ",f("b",{},"„Installieren“"),"."),f("li",{},"Öffne die App über das neue Symbol.")),f("button",{class:"btn btn-gold btn-big",onclick:()=>{i=1,u()}},t?"Schon erledigt / weiter":"Weiter"),!r&&!t?f("p",{class:"muted small center"},"Am PC kannst du einfach weitermachen."):null),()=>{const d=f("button",{class:"btn btn-gold btn-big"},"🔔 Benachrichtigungen erlauben"),m=f("div",{class:"stack"},f("div",{class:"big-emoji"},"🔔"),f("h2",{class:"title"},"Push-Nachrichten"),f("p",{class:"muted center"},"Du bekommst eine Erinnerung um 21, 22 und 23 Uhr (nur wenn du noch nicht abgehakt hast) und siehst, wenn jemand postet, kommentiert oder dir ein Goonie gibt."),d,f("button",{class:"btn btn-grey",onclick:c},"Später"));return d.onclick=async()=>{Pe(d,!0);try{await Sp(),localStorage.removeItem("pushOff"),G("Push ist an ✅","success"),c()}catch(y){Pe(d,!1),G(y.message,"error")}},bp().then(y=>{y||(d.disabled=!0,d.textContent=t&&!s?"Erst zum Home-Bildschirm hinzufügen":"Push geht in diesem Browser nicht")}),m}];function c(){try{localStorage.setItem("onboarded","1")}catch{}n()}function u(){e.replaceChildren(f("div",{class:"card auth-card"},a[i]()))}return u(),e}const Ve="Handy so hinstellen, dass dein ganzer Körper im Bild ist.",WI=[{id:1,title:"30 Liegestütze am Stück",how:`30 saubere Liegestütze ohne Absetzen. Brust fast bis zum Boden, Arme oben ganz durchstrecken. Laut mitzählen. Wer absetzt, fängt bei 0 an. ${Ve}`},{id:2,title:"50 Kniebeugen",how:`50 Kniebeugen am Stück. Oberschenkel mindestens waagerecht, Fersen bleiben am Boden. Laut mitzählen. ${Ve}`},{id:3,title:"1 Minute Plank",how:`60 Sekunden Unterarmstütz. Körper gerade wie ein Brett, Po nicht hoch. Timer ins Bild halten oder laut mitzählen. ${Ve}`},{id:4,title:"40 Hampelmänner",how:`40 Hampelmänner am Stück. Hände klatschen über dem Kopf, Beine weit auseinander. Laut mitzählen. ${Ve}`},{id:5,title:"20 Burpees",how:`20 Burpees: in die Hocke, Beine nach hinten in den Liegestütz, 1 Liegestütz, Beine zurück, Strecksprung mit Klatschen über dem Kopf. Laut mitzählen. ${Ve}`},{id:6,title:"2 Minuten Wandsitzen",how:"Mit dem Rücken an die Wand, Knie im 90-Grad-Winkel, Arme vor der Brust verschränkt. 2 Minuten halten. Video: Anfang (erste 20 Sek) und Ende (letzte 20 Sek) mit Uhr im Bild."},{id:7,title:"30 Sit-ups",how:"30 Sit-ups: Füße am Boden, Hände an den Schläfen, Oberkörper bis die Ellbogen die Knie berühren. Laut mitzählen. Seitlich filmen."},{id:8,title:"20 Ausfallschritte pro Bein",how:`40 Ausfallschritte im Wechsel (20 pro Bein). Hinteres Knie fast bis zum Boden. Laut mitzählen. ${Ve}`},{id:9,title:"1 Minute Seilspringen",how:`60 Sekunden Seilspringen ohne Pause (ohne Seil: so tun als ob, Handgelenke kreisen mit). Füße immer in Bewegung. ${Ve}`},{id:10,title:"15 Dips am Stuhl",how:"Hände hinter dir auf eine feste Stuhlkante, Beine nach vorne gestreckt. 15 mal runter bis die Oberarme waagerecht sind und wieder hoch. Stuhl an die Wand stellen, damit er nicht wegrutscht. Seitlich filmen."},{id:11,title:"100 Mountain Climbers",how:"100 Mountain Climbers (jedes Knie zur Brust zählt 1). Liegestützposition, Po unten. Laut mitzählen. Seitlich filmen."},{id:12,title:"5x Treppe hoch und runter",how:"Eine ganze Treppe (mind. 10 Stufen) 5 mal hoch und wieder runter, zügig gehen, nicht rennen, Geländer benutzen. Video: Start unten und Ende unten, laut die Runden zählen."},{id:13,title:"30 Sek Seitstütz pro Seite",how:`Seitstütz auf dem Unterarm, Körper gerade. 30 Sekunden links, dann 30 Sekunden rechts. ${Ve}`},{id:14,title:"50 Russian Twists",how:"Hinsetzen, Füße leicht vom Boden heben, Oberkörper leicht zurück. Hände zusammen von links nach rechts zum Boden drehen. Jede Seite zählt 1, also 50 Berührungen. Laut mitzählen."},{id:15,title:"20 Sprung-Kniebeugen",how:`20 Kniebeugen, aus jeder Kniebeuge kraftvoll hochspringen und weich landen. Laut mitzählen. ${Ve}`},{id:16,title:"10 Klatsch-Liegestütze",how:`10 Liegestütze, bei denen du oben kurz in die Hände klatschst. Wer es nicht schafft: 25 normale Liegestütze. Laut mitzählen. ${Ve}`},{id:17,title:"25 Superman",how:"Auf den Bauch legen, Arme nach vorne. 25 mal gleichzeitig Arme, Brust und Beine vom Boden heben, 1 Sekunde halten, ablegen. Laut mitzählen. Seitlich filmen."},{id:18,title:"20 Liegestütze + 20 Kniebeugen + 20 Sit-ups",how:`Erst 20 Liegestütze, dann 20 Kniebeugen, dann 20 Sit-ups. Pausen nur zwischen den Übungen. Laut mitzählen. ${Ve}`},{id:19,title:"3x 30 Sek Plank",how:`3 Runden: 30 Sekunden Unterarmstütz, 15 Sekunden Pause. Laut die Runde ansagen. ${Ve}`},{id:20,title:"20 Meter Bärengang",how:"Auf Händen und Füßen gehen, Knie knapp über dem Boden, Po unten. 20 Meter (z. B. Flur hin und zurück, bis es 20 m sind). Strecke kurz ins Bild zeigen."},{id:21,title:"30 Schritte Entengang",how:`Tief in die Hocke, Hände hinter den Kopf, so 30 Schritte gehen. Laut mitzählen. ${Ve}`},{id:22,title:"20 Meter Krebsgang",how:"Hinsetzen, Hände hinter dir, Po hoch: so rückwärts auf Händen und Füßen 20 Meter laufen. Strecke kurz ins Bild zeigen."},{id:23,title:"50 Wadenheben",how:"Auf eine Treppenstufe stellen (Fersen frei), am Geländer festhalten. 50 mal ganz auf die Zehenspitzen und wieder runter. Laut mitzählen. Beine im Bild."},{id:24,title:"15 Pike-Liegestütze",how:"Liegestütz mit Po hoch (umgedrehtes V), Kopf zwischen den Händen Richtung Boden senken und wieder hoch. 15 Wiederholungen. Laut mitzählen. Seitlich filmen."},{id:25,title:"20 Kniebeugen mit vollem Rucksack",how:"Schulrucksack mit Büchern füllen (spürbar schwer), aufsetzen. 20 tiefe Kniebeugen. Am Anfang kurz zeigen, wie voll der Rucksack ist. Laut mitzählen."},{id:26,title:"1 Runde durch deine Straße joggen",how:"Joggen von deiner Haustür bis zum Ende deiner Straße und zurück (mind. 300 m insgesamt). Nur auf dem Gehweg, auf Verkehr achten. Video: Start an der Haustür (Straßenschild oder Hausnummer zeigen), Wendepunkt kurz filmen, Ende an der Haustür außer Atem."},{id:27,title:"60 Sek auf einem Bein, Augen zu",how:`Auf einem Bein stehen, Augen zu, Arme verschränkt. 60 Sekunden. Wer das Bein absetzt, fängt von vorn an. Neben einer Wand oder Couch, falls man kippt. ${Ve}`},{id:28,title:"Gedicht über deinen Fail vortragen",how:"Das Gedicht unten mit ernster Stimme und einer Hand auf dem Herzen vortragen. Am Ende verbeugen.",script:`Ich hatte einen klaren Plan,
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
Das waren die Nachrichten. Guten Abend.`},{id:42,title:"Jedem ein Kompliment",how:"Jedes Mitglied der Gruppe mit Namen ansprechen und ihm ein ehrliches Kompliment machen (mindestens ein ganzer Satz pro Person). Gesicht im Bild."},{id:43,title:"In eine Zitronenscheibe beißen",how:"Eine Zitrone aufschneiden, in eine Scheibe beißen und 5 Sekunden kauen, ohne das Gesicht zu verziehen. Gesicht nah im Bild. Wer das Gesicht verzieht, nimmt eine zweite Scheibe."},{id:44,title:"Zimmer aufräumen",how:"Dein Zimmer komplett aufräumen: Boden frei, Kleidung weg, Bett gemacht, Schreibtisch ordentlich. Video: 10 Sek Vorher-Rundgang, dann 10 Sek Nachher-Rundgang aus demselben Blickwinkel."},{id:45,title:"Bett frisch beziehen",how:"Bettwäsche abziehen und frisch beziehen (Bezug, Kissen, Laken). Video: altes Bett, Abziehen kurz zeigen, fertiges Bett."},{id:46,title:"Spülmaschine oder Abwasch",how:"Die Spülmaschine komplett ausräumen und alles einräumen, oder den kompletten Abwasch von Hand machen. Video: Vorher (volle Maschine/Spüle) und Nachher (leer)."},{id:47,title:"Müll rausbringen",how:"Alle Mülleimer im Haus leeren (Küche, Bad, dein Zimmer) und den Müll zur Tonne bringen. Video: volle Eimer, Weg zur Tonne, leere Eimer."},{id:48,title:"Schuhe putzen",how:"Mindestens 2 Paar Schuhe putzen (Dreck abbürsten, Sohlen sauber machen). Video: Schuhe vorher, beim Putzen, Schuhe nachher."},{id:49,title:"Schreibtisch aufräumen",how:"Schreibtisch komplett frei räumen, abwischen und ordentlich wieder einräumen. Video: Vorher und Nachher aus demselben Blickwinkel."},{id:50,title:"Doppelt",how:"Die App hat dir zwei neue Bestrafungen gezogen. Mach beide hintereinander im selben Video.",double:!0}],GI=n=>WI.find(e=>e.id===n)||null;function kp(n=[]){const e=n.map(GI).filter(Boolean),t=e.filter(r=>!r.double);return t.length?t:e}function Ni(n,e,{compact:t=!1}={}){const r=kp(n||[]),s=f("div",{class:`pun-details ${t?"compact":""}`});return r.length?(n&&n.length>1&&s.append(f("div",{class:"pun-double"},"✌️ Doppelt: beide Aufgaben im selben Video")),r.forEach((i,a)=>{s.append(f("div",{class:"pun-title"},r.length>1?`${a+1}. ${i.title}`:i.title),f("div",{class:"pun-how"},f("b",{},"So geht’s: "),i.how)),i.script&&s.append(f("div",{class:"pun-script"},f("div",{class:"pun-script-label"},"📜 Dein Text"),i.script))}),s.append(f("div",{class:"pun-safe"},"Nur bekleidet filmen, nichts Gefährliches. Max. 60 Sekunden.")),s):(s.append(f("div",{class:"pun-title"},e||"Bestrafung")),s)}function QI(n){return kp(n||[]).filter(e=>e.script).map(e=>e.script).join(`

`)}function JI(n=2600){const e=f("canvas",{class:"confetti"});document.body.append(e);const t=e.getContext("2d"),r=Math.min(2,window.devicePixelRatio||1);e.width=innerWidth*r,e.height=innerHeight*r,t.scale(r,r);const s=["#ffd23f","#3fa9ff","#a45bff","#ff4fa3","#5ad35a","#fff"],i=Array.from({length:140},()=>({x:innerWidth/2+(Math.random()-.5)*80,y:innerHeight*.38,vx:(Math.random()-.5)*14,vy:-Math.random()*15-5,r:Math.random()*Math.PI,vr:(Math.random()-.5)*.4,w:6+Math.random()*7,c:s[Math.floor(Math.random()*s.length)]})),a=performance.now(),c=u=>{t.clearRect(0,0,innerWidth,innerHeight);for(const d of i)d.vy+=.42,d.vx*=.99,d.x+=d.vx,d.y+=d.vy,d.r+=d.vr,t.save(),t.translate(d.x,d.y),t.rotate(d.r),t.fillStyle=d.c,t.fillRect(-d.w/2,-d.w/4,d.w,d.w/2),t.restore();u-a<n?requestAnimationFrame(c):e.remove()};requestAnimationFrame(c)}function wc(n){var e;try{(e=navigator.vibrate)==null||e.call(navigator,n)}catch{}}function Ec(n,e){const t=ci[Ee[e].group].main;Qe(r=>{const s=f("div",{class:"fx-stage"}),i=kt(vr(e));return i.classList.add("fx-badge","fx-spin"),s.append(f("div",{class:"fx-rays",style:{"--c":t}}),i),setTimeout(()=>{JI(),wc([40,60,40])},700),f("div",{class:"fx"},f("div",{class:"fx-label"},"AUFSTIEG!"),s,f("div",{class:"fx-name",style:{color:t}},Ee[e].name),f("div",{class:"muted center"},`von ${Ee[n].name}`),f("button",{class:"btn btn-gold btn-big",onclick:r},"Weiter"))},{full:!0})}function Rp(n,e,t,r){Qe(s=>{const i=f("div",{class:"fx-stage"}),a=kt(vr(n)),c=kt(vr(n));a.classList.add("fx-badge","fx-half","fx-left"),c.classList.add("fx-badge","fx-half","fx-right");const u=kt('<svg class="fx-crack" viewBox="0 0 100 104"><path d="M50 0 L44 22 L56 38 L45 55 L57 72 L48 104" fill="none" stroke="#1a0b2e" stroke-width="4"/></svg>'),d=kt(vr(e));return d.classList.add("fx-badge","fx-next"),i.append(a,c,u,d),setTimeout(()=>wc([120,50,200]),600),f("div",{class:"fx fx-down"},f("div",{class:"fx-label fx-label-red"},"ABSTIEG"),i,f("div",{class:"fx-name"},Ee[e].name),f("div",{class:"muted center"},`von ${Ee[n].name} · Ring auf 0 %`),r?f("div",{class:"fx-reason"},r):null,f("button",{class:"btn btn-blue btn-big",onclick:s},"Weiter"))},{full:!0,onClose:t})}function YI(n){n.classList.remove("pop"),n.offsetWidth,n.classList.add("pop");const e=f("span",{class:"plus-one"},"+1");n.append(e),setTimeout(()=>e.remove(),900),wc(25)}function XI(n){var c,u;if(!n)return;const e=`seenRank:${n.id}`;let t=null;try{t=localStorage.getItem(e)}catch{}const r=n.rankIndex||0;try{localStorage.setItem(e,String(r))}catch{}if(t==null)return;const s=String(((u=(c=n.resetAt)==null?void 0:c.toMillis)==null?void 0:u.call(c))||0);let i=null;try{i=localStorage.getItem(`seenReset:${n.id}`),localStorage.setItem(`seenReset:${n.id}`,s)}catch{}if(i!==s&&s!=="0")return;const a=Number(t);r>a?Ec(a,r):r<a&&Rp(a,r,null,n.punishmentOpen?"Grund: Bestrafung nicht bis 21:00 gemacht (−50 % Ring)":"Grund: Tag nicht geschafft oder nicht beantwortet")}function Pp(n,e){try{localStorage.setItem(`seenRank:${n.id}`,String(e))}catch{}}function ZI(){return window.MediaRecorder?["video/mp4;codecs=avc1","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"].find(e=>{var t;return(t=MediaRecorder.isTypeSupported)==null?void 0:t.call(MediaRecorder,e)})||"":null}const dh=()=>{var n;return!!((n=navigator.mediaDevices)!=null&&n.getUserMedia&&window.MediaRecorder)};function Er(n,e,t){let r=null,s=null,i=[],a=null,c=0,u="user";const d=()=>{r==null||r.getTracks().forEach(m=>m.stop()),r=null};Qe(m=>{const y=f("div",{class:"rec"}),T=f("video",{class:"rec-video",playsInline:!0,muted:!0,autoplay:!0});T.setAttribute("playsinline","");const k=f("div",{class:"rec-clock"},`0 / ${ar} s`),N=f("div",{class:"rec-controls"}),P=Ni(t,e,{compact:!0});P.classList.add("hidden");const D=f("div",{class:"rec-head"},f("div",{class:"pun-text small"},e),f("div",{class:"row gap"},f("button",{class:"btn btn-blue btn-small",onclick:()=>P.classList.toggle("hidden")},"📋 Anleitung"),f("button",{class:"btn btn-grey btn-small",onclick:()=>{d(),clearInterval(c),m()}},"✕"))),U=QI(t),M=U?f("div",{class:"rec-prompter"},U):null,q=f("div",{class:"rec-hint"},"⚠️ Nur bekleidet filmen, nichts Gefährliches. Max. 60 Sekunden.");y.append(D,P,f("div",{class:"rec-stage"},T,k,M),q,N),U||P.classList.remove("hidden");const Y=f("input",{type:"file",accept:"video/*",capture:"user",style:{display:"none"}});Y.onchange=async()=>{var _;const w=(_=Y.files)==null?void 0:_[0];if(!w)return;if(await eb(w)>ar+1.5){G("Das Video ist länger als 60 Sekunden","error");return}a=w,v()},y.append(Y);const me=async()=>{d();try{r=await navigator.mediaDevices.getUserMedia({video:{facingMode:u,width:{ideal:720},height:{ideal:1280}},audio:!0}),T.srcObject=r,T.muted=!0,await T.play().catch(()=>{}),re()}catch{N.replaceChildren(f("p",{class:"muted center"},"Kein Zugriff auf die Kamera. Erlaube die Kamera in den Einstellungen oder nimm das Video mit der Kamera-App auf."),f("button",{class:"btn btn-gold btn-big",onclick:()=>Y.click()},"📹 Video aufnehmen"))}},re=()=>{k.textContent=`0 / ${ar} s`,N.replaceChildren(f("button",{class:"btn btn-grey btn-round",title:"Kamera wechseln",onclick:()=>{u=u==="user"?"environment":"user",me()}},"🔄"),f("button",{class:"rec-btn","aria-label":"Aufnahme starten",onclick:I}),f("button",{class:"btn btn-grey btn-round",title:"Datei wählen",onclick:()=>Y.click()},"📁"))},I=()=>{i=[];const w=ZI();try{s=new MediaRecorder(r,{...w?{mimeType:w}:{},videoBitsPerSecond:15e5})}catch{s=new MediaRecorder(r)}s.ondataavailable=_=>_.data.size&&i.push(_.data),s.onstop=()=>{a=new Blob(i,{type:s.mimeType||w||"video/webm"}),v()},s.start(1e3);const b=Date.now();k.classList.add("live"),c=setInterval(()=>{const _=Math.floor((Date.now()-b)/1e3);k.textContent=`● ${_} / ${ar} s`,_>=ar&&g()},250),N.replaceChildren(f("button",{class:"btn btn-red btn-big",onclick:g},"■ Fertig"))},g=()=>{clearInterval(c),k.classList.remove("live"),(s==null?void 0:s.state)==="recording"&&s.stop()},v=()=>{M==null||M.classList.add("hidden"),d(),T.srcObject=null,T.src=URL.createObjectURL(a),T.muted=!1,T.controls=!0,T.loop=!0,T.play().catch(()=>{}),k.textContent="Vorschau";const w=f("button",{class:"btn btn-gold btn-big"},"⬆️ Hochladen und posten"),b=f("div",{class:"progress"},f("div",{class:"progress-fill"}));w.onclick=()=>E(w,b),N.replaceChildren(f("button",{class:"btn btn-grey",onclick:()=>{M==null||M.classList.remove("hidden"),T.controls=!1,T.removeAttribute("src"),dh()?me():Y.click()}},"Nochmal"),w,b)},E=async(w,b)=>{Pe(w,!0,"Lädt hoch …");try{const _=await de("/upload/sign",{kind:"video",day:n});_.mock||await Cp(_,a,zt=>{b.firstChild.style.width=`${zt}%`});const _e=await de("/punishment/done",{day:n,publicId:_.publicId});m(),F.me&&Pp(F.me,_e.after.rankIndex),_e.repaired&&_e.after.rankIndex>_e.before.rankIndex?Ec(_e.before.rankIndex,_e.after.rankIndex):G(_e.repaired?`Tag ${n} wiedergutgemacht ✅`:"Bestrafung erledigt 💪","success")}catch(_){Pe(w,!1),G(_.message||"Upload fehlgeschlagen","error")}};return dh()?me():N.replaceChildren(f("button",{class:"btn btn-gold btn-big",onclick:()=>Y.click()},"📹 Video aufnehmen")),y},{full:!0,dismissable:!1,onClose:()=>{d(),clearInterval(c)}})}function eb(n){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.onloadedmetadata=()=>{e(t.duration||0),URL.revokeObjectURL(t.src)},t.onerror=()=>e(0),t.src=URL.createObjectURL(n)})}function Cp(n,e,t){return new Promise((r,s)=>{const i=new FormData;i.append("file",e),i.append("api_key",n.apiKey),i.append("timestamp",String(n.timestamp)),i.append("public_id",n.publicId),i.append("signature",n.signature),n.type&&n.type!=="upload"&&i.append("type",n.type);const a=new XMLHttpRequest;a.open("POST",`https://api.cloudinary.com/v1_1/${n.cloudName}/${n.resourceType}/upload`),a.upload.onprogress=c=>c.lengthComputable&&(t==null?void 0:t(Math.round(c.loaded/c.total*100))),a.onload=()=>a.status<300?r(JSON.parse(a.responseText)):s(new Error("Upload fehlgeschlagen")),a.onerror=()=>s(new Error("Upload fehlgeschlagen, Verbindung prüfen")),a.send(i)})}const fh={done:{label:"Geschafft",cls:"st-done",icon:"✅"},fail:{label:"Nicht geschafft",cls:"st-fail",icon:"❌"},open:{label:"Offen",cls:"st-open",icon:"⏳"}},ph=new Map,tb=(n,e)=>JSON.stringify([n.type,n.videoUrl,n.videoId,n.viewedBy,F.users.size,n.gooniedBy,n.commentCount,n.repaired,n.final,e==null?void 0:e.name,e==null?void 0:e.photoURL,n.rankIndex,F.uid]);function Tc(n,{detail:e=!1}={}){const t=F.users.get(n.uid),r=tb(n,t),s=ph.get(n.id);if(!e&&s&&s.k===r)return s.el.querySelector(".post-time").textContent=Pi(n.createdAt,pe()),s.el;const i=nb(n,t);return e||ph.set(n.id,{k:r,el:i}),i}function nb(n,e){const t=fh[n.type]||fh.open,r=n.uid===F.uid,s=(e==null?void 0:e.name)||"Unbekannt",i=n.type==="done"?n.repaired?`${s} hat Tag ${n.day} wiedergutgemacht`:`${s} hat Tag ${n.day} geschafft`:n.type==="fail"?n.auto?`${s} hat Tag ${n.day} nicht beantwortet`:`${s} hat Tag ${n.day} nicht geschafft`:`${s}: Tag ${n.day} – Nein – offen (nicht geantwortet)`,a=f("article",{class:`card post ${t.cls}`});if(a.append(f("header",{class:"post-head"},f("a",{href:`#/u/${n.uid}`,class:"post-ava"},$t(e,46)),f("div",{class:"post-meta"},f("a",{href:`#/u/${n.uid}`,class:"post-name"},s," ",Gr(n.rankIndex??0,22)),f("div",{class:"post-sub"},`Tag ${n.day} · `,f("span",{class:"post-time"},Pi(n.createdAt,pe())))),f("span",{class:`pill ${t.cls}`},`${t.icon} ${n.repaired?"Wiedergutgemacht":t.label}`)),f("div",{class:"post-title"},i)),n.promoted&&a.append(f("div",{class:"post-rank up"},"⬆️ Aufstieg auf ",f("b",{},Yl(n.rankIndex)))),n.demoted&&a.append(f("div",{class:"post-rank down"},"⬇️ Abstieg auf ",f("b",{},Yl(n.rankIndex)))),n.reason&&a.append(f("div",{class:"qa"},f("div",{class:"qa-q"},"Woran lag es?"),f("div",{class:"qa-a"},n.reason))),n.better&&a.append(f("div",{class:"qa"},f("div",{class:"qa-q"},"Was mache ich nächstes Mal besser?"),f("div",{class:"qa-a"},n.better))),n.punishment){const y=f("div",{class:"pun-box"},f("div",{class:"pun-row"},f("div",{class:"pun-label"},f("b",{},"Bestrafung: "),n.punishment),f("button",{class:"btn btn-blue btn-icon",title:"Anleitung",onclick:()=>ib(n)},"📋")));if(n.videoId)y.append(ob(n,r));else if(n.videoUrl)y.append(f("div",{class:"pun-missing"},"🎥 Video vorhanden"));else{const T=n.punDeadline&&pe()>n.punDeadline;y.append(f("div",{class:`pun-missing ${T?"late":""}`},T?"❗ Bestrafung offen – Frist verpasst":`🎥 Video fehlt noch · Frist ${Ar(n.punDeadline)} Uhr`)),r&&y.append(f("button",{class:"btn btn-gold",onclick:()=>Er(n.day,n.punishment,n.punIds)},n.type==="open"&&!T?"🎥 Wiedergutmachen":"🎥 Bestrafung machen"))}a.append(y)}const c=(n.gooniedBy||[]).length,u=(n.gooniedBy||[]).includes(F.uid),d=f("button",{class:`goonie-btn ${u?"on":""} ${r?"own":""}`,"aria-label":"Goonie geben"});d.append(kt(cT),f("span",{class:"g-count"},String(c)),f("span",{class:"g-label"},c===1?"Goonie":"Goonies")),d.onclick=async()=>{if(r){rb(n);return}const y=!d.classList.contains("on");d.classList.toggle("on",y);const T=d.querySelector(".g-count");T.textContent=String(Number(T.textContent)+(y?1:-1)),y&&YI(d);try{await de("/goonie",{postId:n.id,on:y})}catch(k){d.classList.toggle("on",!y),T.textContent=String(Number(T.textContent)+(y?-1:1)),G(k.message,"error")}};const m=f("button",{class:"comment-btn",onclick:()=>sb(n)},"💬 ",String(n.commentCount||0));return a.append(f("footer",{class:"post-foot"},d,m)),a}function rb(n){const e=(n.gooniedBy||[]).map(t=>F.users.get(t)).filter(Boolean);Qe(f("div",{class:"stack"},f("h2",{class:"title"},"Goonies von"),e.length?f("div",{class:"list"},e.map(t=>f("a",{class:"list-row",href:`#/u/${t.id}`},$t(t,36),f("span",{},t.name)))):f("p",{class:"muted center"},"Noch keine. Eigene Posts kannst du nicht goonien.")),{sheet:!0})}function sb(n){let e=null;Qe(t=>{const r=f("div",{class:"comments"},f("p",{class:"muted center"},"Lädt …")),s=f("textarea",{class:"input",rows:2,maxLength:ms,placeholder:"Kommentar schreiben …"}),i=f("span",{class:"muted small"},`0/${ms}`);s.oninput=()=>{i.textContent=`${s.value.length}/${ms}`};const a=f("button",{class:"btn btn-gold"},"Senden");return a.onclick=async()=>{const c=s.value.trim();if(c){a.disabled=!0;try{const u=await gT(n.id,c);s.value="",i.textContent=`0/${ms}`,de("/comment/notify",{postId:n.id,commentId:u}).catch(()=>{})}catch{G("Kommentar konnte nicht gesendet werden","error")}a.disabled=!1}},e=mT(n.id,c=>{r.replaceChildren(...c.length?c.map(u=>{const d=F.users.get(u.uid);return f("div",{class:"comment"},$t(d,32),f("div",{class:"comment-body"},f("div",{class:"comment-head"},f("b",{},(d==null?void 0:d.name)||"?")," ",f("span",{class:"muted small"},Pi(u.createdAt,pe()))),f("div",{class:"comment-text"},u.text)),u.uid===F.uid&&f("button",{class:"comment-del",title:"Löschen",onclick:async()=>{await Or("Kommentar löschen?",null,"Löschen","red")&&(await _T(n.id,u.id),de("/comment/notify",{postId:n.id}).catch(()=>{}))}},"🗑"))}):[f("p",{class:"muted center"},"Noch keine Kommentare.")]),r.scrollTop=r.scrollHeight}),f("div",{class:"stack"},f("div",{class:"row between"},f("h2",{class:"title"},"Kommentare"),f("button",{class:"btn btn-grey btn-icon",onclick:t},"✕")),r,s,f("div",{class:"row between"},i,a))},{sheet:!0,onClose:()=>e==null?void 0:e()})}let je=null;function xr(n){(je==null?void 0:je.id)!==n&&(xr.leave(),je={id:n,post:void 0},je.unsub=pT(n,t=>{je.post=t,Qf()}));const e=je.post;return f("div",{class:"page"},f("a",{class:"back",href:"#/"},"← Zum Feed"),e===void 0?f("p",{class:"muted center"},"Lädt …"):e?Tc(e):f("p",{class:"muted center"},"Post nicht gefunden."))}xr.live=!0;xr.leave=()=>{je==null||je.unsub(),je=null};function ib(n){Qe(e=>f("div",{class:"stack"},f("div",{class:"eyebrow eyebrow-red"},`Bestrafung · Tag ${n.day}`),Ni(n.punIds,n.punishment),f("button",{class:"btn btn-grey",onclick:e},"Schließen")),{sheet:!0})}function ob(n,e){const t=n.viewedBy||[],r=Math.max(0,[...F.users.values()].filter(i=>i.id!==n.uid&&!i.bot).length),s=f("div",{class:"vid-tile"});return e?s.append(f("button",{class:"btn btn-blue",onclick:()=>mh(n,!0)},"▶ Dein Video ansehen"),f("div",{class:"muted small"},`👁 ${t.length} von ${r} haben es gesehen`)):t.includes(F.uid)?s.append(f("div",{class:"vid-seen"},"👁 Schon angesehen")):s.append(f("button",{class:"btn btn-gold",onclick:()=>mh(n,!1)},"▶ Video ansehen (nur 1x)"),f("div",{class:"muted small"},"Du kannst dieses Video nur einmal ansehen.")),s}async function mh(n,e){!e&&!await Or("Video jetzt ansehen?","Jedes Bestrafungsvideo kannst du nur einmal ansehen. Danach ist es für dich weg.","▶ Ansehen","gold")||Qe(t=>{const r=f("div",{class:"vp-stage"},f("div",{class:"boot-flame"})),s=f("div",{class:"vp-bar"},f("div",{class:"vp-fill"})),i=f("div",{class:"vp-info"},"Lädt …"),a=f("div",{class:"vp"},f("div",{class:"row between"},f("div",{class:"pun-text small"},n.punishment),f("button",{class:"btn btn-grey btn-small",onclick:t},"✕")),r,s,i);return de("/video/view",{postId:n.id}).then(c=>{if(c.mock){r.replaceChildren(f("div",{class:"vp-mock"},"🎥 Testmodus: hier würde das Video laufen")),i.textContent=e?"Dein Video":"Angesehen ✓";return}const u=f("video",{class:"vp-video",src:c.video,poster:c.poster,autoplay:!0,playsInline:!0,preload:"auto",disablePictureInPicture:!0});u.setAttribute("playsinline",""),u.setAttribute("controlslist","nodownload noplaybackrate"),u.addEventListener("contextmenu",m=>m.preventDefault());const d=f("div",{class:"vp-mark"},`${c.viewer} · ${new Date().toLocaleDateString("de-DE")}`);r.replaceChildren(u,d),u.onclick=()=>u.paused?u.play():u.pause(),u.ontimeupdate=()=>{u.duration&&(s.firstChild.style.width=`${u.currentTime/u.duration*100}%`)},u.onplay=()=>{i.textContent=e?"Dein Video · Tippen = Pause":"Nur 1x · Tippen = Pause"},u.onended=()=>{i.textContent=e?"Ende":"Ende. Dieses Video ist jetzt für dich weg.",e||setTimeout(t,1500)},u.play().catch(()=>{i.textContent="Tippe aufs Video zum Starten"})}).catch(c=>{r.replaceChildren(f("div",{class:"vp-mock"},c.message)),i.textContent=""}),a},{full:!0})}function Dp(n){Qe(e=>{const t=f("div",{class:"stack"}),r=()=>{t.replaceChildren(f("div",{class:"eyebrow"},`Tag ${n}`),f("h2",{class:"title"},"Hast du es heute geschafft?"),f("p",{class:"muted center"},"Nur eine Antwort pro Tag. Sei ehrlich."),f("button",{class:"btn btn-green btn-big",onclick:a=>i(a.currentTarget,{result:"done"})},"Geschafft ✅"),f("button",{class:"btn btn-red btn-big",onclick:s},"Nicht geschafft ❌"))},s=()=>{const a=f("textarea",{class:"input",rows:3,maxLength:300,placeholder:"Woran lag es?"}),c=f("textarea",{class:"input",rows:3,maxLength:300,placeholder:"Was machst du nächstes Mal besser?"}),u=f("button",{class:"btn btn-red btn-big"},"Fertig");u.onclick=()=>{if(!a.value.trim()||!c.value.trim()){G("Bitte beide Felder ausfüllen","error");return}i(u,{result:"fail",reason:a.value,better:c.value})},t.replaceChildren(f("div",{class:"eyebrow"},`Tag ${n}`),f("h2",{class:"title"},"Nicht geschafft"),f("label",{class:"label"},"Woran lag es?"),a,f("label",{class:"label"},"Was machst du nächstes Mal besser?"),c,u,f("button",{class:"btn btn-grey",onclick:r},"Zurück")),a.focus()},i=async(a,c)=>{Pe(a,!0);try{const u=await de("/checkin",c);e(),F.me&&Pp(F.me,u.after.rankIndex),c.result==="done"?u.after.rankIndex>u.before.rankIndex?Ec(u.before.rankIndex,u.after.rankIndex):G(`Tag ${u.day} geschafft! 🔥`,"success"):u.after.rankIndex<u.before.rankIndex?Rp(u.before.rankIndex,u.after.rankIndex,()=>gh(u.day,u.punishment,u.punIds)):gh(u.day,u.punishment,u.punIds)}catch(u){Pe(a,!1),G(u.message,"error")}};return r(),t})}function gh(n,e,t){Qe(r=>f("div",{class:"stack"},f("div",{class:"eyebrow eyebrow-red"},"Deine Bestrafung"),Ni(t,e),f("p",{class:"muted center"},"Zeit bis morgen 21:00. Sonst: −50 % Ring und „Bestrafung offen“."),f("button",{class:"btn btn-gold btn-big",onclick:()=>{r(),Er(n,e,t)}},"🎥 Bestrafung machen"),f("button",{class:"btn btn-grey",onclick:r},"Später")))}function Np(n){return n.final?"Endrang erreicht 👑":`${na(n.pct)} % ${n.rank.name} – noch ${na(n.rest)} % bis ${n.next.name}`}function Vp(){return[...F.users.values()].sort((n,e)=>e.rankIndex-n.rankIndex||e.progress-n.progress||e.doneCount-n.doneCount||n.name.localeCompare(e.name))}function So(n){const e=f("span",{class:"countdown"});return e.dataset.until=String(n),e.textContent=Op(n-pe()),e}function Op(n){if(n<=0)return"0:00:00";const e=Math.floor(n/1e3),t=Math.floor(e/86400),r=Math.floor(e%86400/3600),s=String(Math.floor(e%3600/60)).padStart(2,"0"),i=String(e%60).padStart(2,"0");return t>0?`${t} T ${r}:${s}:${i}`:`${r}:${s}:${i}`}function ko(n){const e=Ni(n.punIds,n.punText,{compact:!0});return e.classList.add("hidden"),f("div",{class:"pun-mini"},f("div",{},f("b",{},"Bestrafung: "),n.punText),f("button",{class:"link-btn",onclick:t=>{e.classList.toggle("hidden"),t.currentTarget.textContent=e.classList.contains("hidden")?"📋 Anleitung zeigen":"Anleitung ausblenden"}},"📋 Anleitung zeigen"),e)}function ab(n){const e=n.days||{};for(let t=st;t>=1;t--){const r=e[t];if(r&&r.pun&&!r.punDone)return{day:t,e:r}}return null}function cb(n,e){const t=Pn(e),r=hd(e),s=n.days||{},i=n.joinedDay||1,a=[];if(t<1)return a.push(f("div",{class:"action-info"},f("div",{class:"eyebrow"},"Start am 31.10. um 22:00"),f("div",{class:"big-count"},So(Ry())))),a;r&&r>=i&&!s[r]&&a.push(f("button",{class:"btn btn-gold btn-huge pulse",onclick:()=>Dp(r)},"Heute abhaken",f("small",{},`Tag ${r} · bis 23:59`)));const c=ab(n);if(c){const u=e>=mo(c.day)||c.e.pen;c.e.s==="open"&&!u?a.push(f("div",{class:"alert alert-orange"},f("div",{},f("b",{},`Tag ${c.day} vergessen?`),` Mach es bis ${Ar(mo(c.day))} Uhr wieder gut: Bestrafung filmen, dann zählt der Tag als geschafft.`),ko(c.e),f("button",{class:"btn btn-orange",onclick:()=>Er(c.day,c.e.punText,c.e.punIds)},"🎥 Wiedergutmachen"))):u?a.push(f("div",{class:"alert alert-red"},f("div",{},f("b",{},"Bestrafung offen ❗")," Frist verpasst (−50 % Ring). Nachholen entfernt den roten Hinweis."),ko(c.e),f("button",{class:"btn btn-red",onclick:()=>Er(c.day,c.e.punText,c.e.punIds)},"🎥 Bestrafung nachholen"))):a.push(f("div",{class:"alert alert-purple"},f("div",{},f("b",{},"Bestrafung machen")," – Frist: ",So(mo(c.day))),ko(c.e),f("button",{class:"btn btn-gold",onclick:()=>Er(c.day,c.e.punText,c.e.punIds)},"🎥 Bestrafung machen")))}if(r&&s[r]){const u=s[r].s==="done";a.push(f("div",{class:`done-note ${u?"ok":"no"}`},u?`Tag ${r} abgehakt ✅`:`Tag ${r}: nicht geschafft ❌`))}if((!a.length||!r&&t<=st)&&!(t>st)){if(!r){const u=ld(e),d=e<po(u)?po(u):po(u+1);a.push(f("div",{class:"action-info"},f("div",{class:"eyebrow"},`Abhaken ab ${dd(d)} Uhr`),f("div",{class:"big-count"},So(d))))}}return a}function lb(){const n=Vp();return f("section",{class:"card final"},f("h2",{class:"title"},"🏆 Endstand"),f("div",{class:"list"},n.map((e,t)=>f("a",{class:"list-row",href:`#/u/${e.id}`},f("span",{class:`place place-${t+1}`},String(t+1)),$t(e,36),f("span",{class:"grow"},e.name),Gr(e.rankIndex,30),f("span",{class:"muted small"},`${e.doneCount}/${st}`)))))}function ub(n,e){const t=li(n,e),r=Ee[t.rankIndex];return f("section",{class:"card status"},f("div",{class:"status-top"},f("a",{href:"#/me"},oc(t.rankIndex,t.pct,132,n.id)),f("div",{class:"status-info"},f("div",{class:"status-rank"},r.name),f("div",{class:"status-ring-text"},Np(t)),t.full&&!t.final?f("div",{class:"tag tag-gold"},"⏳ Aufstieg wartet auf Bestätigung"):null,f("div",{class:"status-stats"},f("span",{class:"stat-chip"},"🔥 ",f("b",{},String(n.streak||0))," Streak"),f("span",{class:"stat-chip"},"💜 ",f("b",{},String(n.goonies||0)))))),n.punishmentOpen?f("div",{class:"red-flag"},"❗ Bestrafung offen"):null,f("div",{class:"status-actions"},cb(n,e)))}function Lp(){const n=F.me,e=pe(),t=f("div",{class:"page"});if(!n)return t;if(t.append(ub(n,e)),Pn(e)>st&&t.append(lb()),t.append(f("h3",{class:"section-title"},"Feed")),!F.postsLoaded)t.append(f("p",{class:"muted center"},"Lädt …"));else if(!F.posts.length)t.append(f("div",{class:"card empty"},f("div",{class:"empty-ico"},"🔥"),f("p",{},Pn(e)<1?"Noch ist es ruhig. Ab dem Start erscheinen hier alle Abhaken-Posts.":"Noch keine Posts.")));else{let r=null;for(const s of F.posts)s.day!==r&&(r=s.day,t.append(f("div",{class:"day-sep"},f("span",{},`Tag ${s.day}`),f("small",{},_a(ga(s.day)))))),t.append(Tc(s));F.feedHasMore&&t.append(f("button",{class:"btn btn-grey btn-big",style:{marginTop:"6px"},onclick:s=>{s.currentTarget.disabled=!0,s.currentTarget.textContent="Lädt …",uT()}},"Ältere Posts laden"))}return t}Lp.live=!0;function Mp(){const n=f("input",{type:"file",accept:"image/*",style:{display:"none"}});document.body.append(n),n.onchange=()=>{var t;const e=(t=n.files)==null?void 0:t[0];n.remove(),e&&hb(e)},n.click()}function hb(n){const e=new Image,t=URL.createObjectURL(n);e.onload=()=>Qe(r=>{const s=Math.min(300,window.innerWidth-80),i=Math.max(s/e.width,s/e.height);let a=1,c=(s-e.width*i)/2,u=(s-e.height*i)/2;const d=f("img",{src:t,class:"crop-img",draggable:!1}),m=f("div",{class:"crop-view",style:{width:`${s}px`,height:`${s}px`}},d),y=()=>{const P=i*a;c=Math.min(0,Math.max(s-e.width*P,c)),u=Math.min(0,Math.max(s-e.height*P,u)),d.style.width=`${e.width*P}px`,d.style.transform=`translate(${c}px, ${u}px)`};y();let T=null;m.addEventListener("pointerdown",P=>{T={sx:P.clientX,sy:P.clientY,x:c,y:u},m.setPointerCapture(P.pointerId)}),m.addEventListener("pointermove",P=>{T&&(c=T.x+P.clientX-T.sx,u=T.y+P.clientY-T.sy,y())}),m.addEventListener("pointerup",()=>{T=null});const k=f("input",{type:"range",min:1,max:4,step:.01,value:1,class:"slider"});k.oninput=()=>{const P=(s/2-c)/(i*a),D=(s/2-u)/(i*a);a=Number(k.value),c=s/2-P*i*a,u=s/2-D*i*a,y()};const N=f("button",{class:"btn btn-gold btn-big"},"Speichern");return N.onclick=async()=>{Pe(N,!0,"Lädt hoch …");try{const P=i*a,D=document.createElement("canvas");D.width=512,D.height=512,D.getContext("2d").drawImage(e,-c/P,-u/P,s/P,s/P,0,0,512,512);const U=await new Promise(q=>D.toBlob(q,"image/jpeg",.88)),M=await de("/upload/sign",{kind:"avatar"});M.mock?G("Testmodus: Bild wird nicht hochgeladen"):(await Cp(M,U),await Jf({photoURL:`https://res.cloudinary.com/${M.cloudName}/image/upload/c_fill,w_256,h_256,q_auto/${M.publicId}.jpg`}),G("Profilbild gespeichert","success")),r()}catch(P){Pe(N,!1),G(P.message||"Fehler beim Hochladen","error")}},f("div",{class:"stack center-items"},f("h2",{class:"title"},"Bild zuschneiden"),f("p",{class:"muted center"},"Verschieben mit dem Finger, zoomen mit dem Regler."),m,k,N,f("button",{class:"btn btn-grey",onclick:r},"Abbrechen"))},{onClose:()=>URL.revokeObjectURL(t)}),e.src=t}function db(n,e){const t=Pn(e),r=n.days||{},s=n.joinedDay||1,i=[];for(let a=1;a<=st;a++){const c=r[a];let u="cal-future",d="kommt noch";(c==null?void 0:c.s)==="done"?(u="cal-done",d=c.repaired?"geschafft (wiedergutgemacht)":"geschafft"):(c==null?void 0:c.s)==="fail"?(u="cal-fail",d="nicht geschafft"):(c==null?void 0:c.s)==="open"?(u="cal-open",d="offen"):a<s?(u="cal-skip",d="vor dem Beitritt"):(a===t||a===t-1)&&(u="cal-now",d="läuft"),i.push(f("div",{class:`cal-tile ${u}`,title:`Tag ${a} (${_a(ga(a))}): ${d}`},f("span",{},String(a)),c!=null&&c.repaired?f("i",{},"↺"):null))}return f("div",{class:"calendar"},i)}function Yt(n){const e=F.users.get(n),t=f("div",{class:"page"});if(!e)return t.append(f("p",{class:"muted center"},F.usersLoaded?"Mitglied nicht gefunden.":"Lädt …")),t;const r=pe(),s=li(e,r),i=n===F.uid,a=f("div",{class:"profile-ava"},$t(e,84));i&&a.append(f("button",{class:"ava-edit",title:"Profilbild ändern",onclick:Mp},"📷")),(qe==null?void 0:qe.uid)!==n&&(Yt.leave(),qe={uid:n,posts:null},qe.unsub=fT(n,d=>{qe.posts=d,Qf()}));const c=qe.posts,u=f("div",{class:"stack"},c==null?f("p",{class:"muted center"},"Lädt …"):c.length?c.map(d=>Tc(d)):f("p",{class:"muted center"},"Noch keine Posts."));return t.append(f("section",{class:"card profile"},f("div",{class:"profile-head"},a,f("div",{},f("div",{class:"profile-name"},e.name),f("div",{class:"muted"},`@${e.username}`))),e.punishmentOpen?f("div",{class:"red-flag"},"❗ Bestrafung offen"):null,f("div",{class:"profile-badge"},oc(s.rankIndex,s.pct,190,e.id),f("div",{class:"profile-rank",style:{color:`var(--r-${Ee[s.rankIndex].group})`}},Ee[s.rankIndex].name),f("div",{class:"status-ring-text center"},Np(s)),s.full&&!s.final?f("div",{class:"tag tag-gold"},"⏳ Aufstieg wartet auf Bestätigung"):null),f("div",{class:"stats"},Es("🔥",e.streak||0,"Aktuelle Streak"),Es("🏅",e.bestStreak||0,"Beste Streak"),Es("✅",e.doneCount||0,"Geschaffte Tage"),Es("💜",e.goonies||0,"Goonies")),f("h3",{class:"section-title small"},"Kalender"),db(e,r),f("div",{class:"legend"},f("span",{class:"lg cal-done"}),"geschafft",f("span",{class:"lg cal-fail"}),"nicht geschafft",f("span",{class:"lg cal-open"}),"offen",f("span",{class:"lg cal-future"}),"kommt noch")),f("h3",{class:"section-title"},i?"Meine Posts":`Posts von ${e.name}`),u),t}Yt.live=!0;let qe=null;Yt.leave=()=>{qe==null||qe.unsub(),qe=null};function Es(n,e,t){return f("div",{class:"stat"},f("div",{class:"stat-val"},n," ",String(e)),f("div",{class:"stat-label"},t))}function xp(){const n=pe(),e=f("div",{class:"page"},f("h2",{class:"page-title"},"Mitglieder")),t=Vp();return e.append(f("div",{class:"stack"},t.map((r,s)=>{const i=li(r,n);return f("a",{class:"card member",href:`#/u/${r.id}`},f("span",{class:"place"},String(s+1)),$t(r,48),f("div",{class:"grow"},f("div",{class:"member-name"},r.name,r.id===F.uid?f("span",{class:"you"},"Du"):null),f("div",{class:"muted small"},`${Ee[r.rankIndex].name} · ${i.final?"100":na(i.pct)} %`),f("div",{class:"muted small"},`🔥 ${r.streak||0}   ✅ ${r.doneCount||0}   💜 ${r.goonies||0}`),r.punishmentOpen?f("div",{class:"red-mini"},"❗ Bestrafung offen"):null),oc(r.rankIndex,i.pct,58,r.id))}))),e}xp.live=!0;function fb(){const n=Pn(pe())>st,e=f("div",{class:"page"},f("h2",{class:"page-title"},n?"Ränge · Endstand":"Ränge"));e.append(f("p",{class:"muted center"},"Am Anfang geht es schnell, am Ende langsam. Wer jeden Tag schafft, ist nach 30 Tagen Gotti."));let t=0;const r=Ee.map((s,i)=>{const a=[...F.users.values()].filter(u=>u.rankIndex===i),c=f("div",{class:"card rank-row",style:{"--c":ci[s.group].main}},Gr(i,58),f("div",{class:"grow"},f("div",{class:"rank-name"},s.name),f("div",{class:"muted small"},t===0?"Startrang":`nach ${t} geschafften Tagen am Stück`," · ",s.days==null?"Endrang 👑":`${s.days} ${s.days===1?"Tag":"Tage"} bis zum nächsten`),a.length?f("div",{class:"rank-members"},a.map(u=>f("a",{href:`#/u/${u.id}`,title:u.name},$t(u,30)))):null));return t+=s.days||0,c});return e.append(f("div",{class:"stack"},r.reverse())),e}function pb(){const n=f("div",{class:"page"},f("h2",{class:"page-title"},"Benachrichtigungen"));let e=0;try{e=Number(localStorage.getItem("notifSeen")||0)}catch{}F.notifs.length||n.append(f("div",{class:"card empty"},f("div",{class:"empty-ico"},"🔔"),f("p",{},"Noch nichts da."))),n.append(f("div",{class:"stack"},F.notifs.map(t=>f("a",{class:`card notif ${t.createdAt>e?"unread":""}`,href:t.link||"#/"},f("div",{class:"notif-ico"},mb[t.type]||"🔔"),f("div",{class:"grow"},f("div",{class:"notif-title"},t.title),f("div",{class:"muted small"},t.body),f("div",{class:"muted tiny"},Pi(t.createdAt,pe())))))));try{localStorage.setItem("notifSeen",String(pe()+1e3))}catch{}return n}const mb={done:"✅",fail:"❌",open:"⏳",goonie:"💜",comment:"💬",penalty:"❗",punishment:"🎥",remind:"⏰"};function gb(){let n=0;try{n=Number(localStorage.getItem("notifSeen")||0)}catch{}return F.notifs.filter(e=>e.createdAt>n).length}function _b(){const n=F.me,e=f("div",{class:"page"},f("h2",{class:"page-title"},"Einstellungen"));if(!n)return e;const t=f("input",{class:"input",value:n.name,maxLength:24}),r=f("button",{class:"btn btn-blue"},"Speichern");r.onclick=async()=>{const a=t.value.trim();if(!a)return G("Name darf nicht leer sein","error");Pe(r,!0);try{await Jf({name:a}),G("Name gespeichert","success")}catch{G("Speichern fehlgeschlagen","error")}Pe(r,!1)};const s=Ap()==="granted"&&localStorage.getItem("pushOff")!=="1",i=f("button",{class:`toggle ${s?"on":""}`,"aria-label":"Push an/aus"},f("span",{}));return i.onclick=async()=>{const a=!i.classList.contains("on");i.disabled=!0;try{a?(await Sp(),localStorage.removeItem("pushOff")):(await zI(),localStorage.setItem("pushOff","1")),i.classList.toggle("on",a),G(a?"Push ist an":"Push ist aus","success")}catch(c){G(c.message,"error")}i.disabled=!1},e.append(f("section",{class:"card stack"},f("h3",{class:"section-title small"},"Profilbild"),f("div",{class:"row gap"},$t(n,64),f("button",{class:"btn btn-gold",onclick:Mp},"📷 Bild auswählen"))),f("section",{class:"card stack"},f("h3",{class:"section-title small"},"Name"),t,r,f("p",{class:"muted small"},`Username: @${n.username} (kann nicht geändert werden)`)),f("section",{class:"card"},f("div",{class:"row between"},f("div",{},f("div",{class:"setting-title"},"🔔 Push-Nachrichten"),f("div",{class:"muted small"},"Erinnerungen, Posts, Goonies, Kommentare")),i),f("button",{class:"btn btn-blue btn-small",style:{marginTop:"12px",width:"100%"},onclick:async a=>{const c=a.currentTarget;Pe(c,!0);try{const u=await de("/push/test");G(u.tokens?"Test-Push gesendet, kommt gleich an":"Push ist auf diesem Gerät noch nicht eingeschaltet",u.tokens?"success":"error")}catch(u){G(u.message,"error")}Pe(c,!1)}},"🔔 Test-Push senden")),f("section",{class:"card stack"},f("button",{class:"btn btn-grey",onclick:()=>{localStorage.removeItem("onboarded"),location.hash="#/",location.reload()}},"📲 Anleitung: App installieren"),f("button",{class:"btn btn-red",onclick:async()=>{await Or("Abmelden?","Du kannst dich jederzeit wieder mit Username und Passwort einloggen.","Abmelden","red")&&await Qh(Mn)}},"Abmelden"))),e}let _h=!1,At=null;const yb=()=>["localhost","127.0.0.1"].includes(location.hostname);function yh(n){n&&!At?(At=f("div",{class:"test-banner"},"🧪 Testmodus: Uhrzeit ist vorgespult"),document.body.append(At)):!n&&At&&(At.remove(),At=null),At&&(At.textContent=`🧪 Testmodus · App-Zeit ${Ar(pe())}`)}function vb(n,e){if(_h)return;const t=yb()||Ty;_h=!0;const r=f("div",{class:"tp-clock"}),s=f("div",{class:"tiny"}),i=f("div",{class:"testpanel hidden"}),a=f("button",{class:"tp-fab",title:"Testmodus",onclick:()=>i.classList.toggle("hidden")},"🧪");let c=!1;const u=async P=>{if(!c){c=!0,i.classList.add("busy");try{let D=await de("/test/advance",P),U=D.processed||0,M=0;for(;D.pending>0&&M++<400;)s.textContent=`Arbeite Ereignisse ab … noch ${D.pending}`,D=await de("/test/advance",{to:D.now}),U+=D.processed||0;s.textContent=D.error?`Fehler: ${D.error}`:"",t&&y.checked&&await T(),await xn(),e(),G(`Jetzt: ${Ar(D.now)} · ${U} Ereignisse`,"info")}catch(D){G(D.message,"error")}c=!1,i.classList.remove("busy")}},d=(P,D=0)=>{const U=pe();let M=ld(U);return Xt(M,P,D)<=U&&M++,Xt(M,P,D)},m=f("input",{type:"datetime-local",class:"input"}),y=f("input",{type:"checkbox",checked:!0});async function T(){let P,D=0;do P=await de("/test/bots",{action:"play"}),P.played&&(D++,s.textContent=`${P.played} hat abgehakt${P.failed?" (nicht geschafft)":""} …`);while(P.pending>0&&D<10);D&&G(`${D} Bots haben abgehakt`,"info"),s.textContent=P.info&&!D?P.info:""}const k=f("div",{class:"tp-bots"},f("b",{},"🤖 Bot-Spieler"),f("div",{class:"tp-grid2"},f("button",{onclick:async()=>{try{const P=await de("/test/bots",{action:"create",n:5});G(`${P.created} Bots neu, ${P.total} insgesamt`,"success"),e()}catch(P){G(P.message,"error")}}},"+ 5 Bots"),f("button",{onclick:async()=>{try{await T(),e()}catch(P){G(P.message,"error")}}},"Bots abhaken"),f("button",{onclick:async()=>{if(await Or("Bots entfernen?",null,"Entfernen","red"))try{await de("/test/bots",{action:"remove"}),e()}catch(P){G(P.message,"error")}}},"Bots entfernen"),f("label",{class:"tp-check"},y," Bots haken beim Vorspulen automatisch ab"))),N=async P=>{if(await Or(P?"Alles zurücksetzen?":"Echte Zeit?",P?"Uhr zurück auf die echte Zeit und ALLE Spielstände, Posts, Kommentare und Benachrichtigungen löschen. Konten, Namen und Profilbilder bleiben.":"Uhr zurück auf die echte Zeit. Die Spieldaten bleiben (können dann aber zur echten Zeit nicht passen).",P?"Zurücksetzen":"Echte Zeit","red"))try{await de("/test/reset",{wipe:P}),await xn(),e(),G(P?"Zurückgesetzt. Spiel startet frisch.":"Echte Zeit aktiv","success")}catch(U){G(U.message,"error")}};i.append(f("b",{},"🧪 Testmodus (deutsche Zeit)"),r,s,f("div",{class:"tp-grid"},f("button",{onclick:()=>u({by:36e5})},"+1 Std"),f("button",{onclick:()=>u({by:6*36e5})},"+6 Std"),f("button",{onclick:()=>u({by:864e5})},"+1 Tag"),f("button",{onclick:()=>u({to:d(21,0)})},"→ 21:00"),f("button",{onclick:()=>u({to:d(22,0)})},"→ 22:00"),f("button",{onclick:()=>u({to:d(23,59)})},"→ 23:59"),f("button",{onclick:()=>u({to:d(0,1)})},"→ 00:01"),f("button",{onclick:()=>u({to:d(20,59)})},"→ 20:59")),f("button",{class:"tp-wide",onclick:()=>u({to:Xt(1,21,0)})},"▶ Zum Tag 1, 21:00 (1.11.)"),f("div",{class:"row gap"},m,f("button",{onclick:()=>{if(!m.value)return;const[P,D]=m.value.split("T"),[U,M,q]=P.split("-").map(Number),[Y,me]=D.split(":").map(Number);u({to:ad({year:U,month:M,day:q,hour:Y,minute:me})})}},"Springen")),k,f("div",{class:"tp-grid2"},f("button",{onclick:()=>N(!1)},"⏪ Echte Zeit"),f("button",{class:"danger",onclick:()=>N(!0)},"🗑 Alles zurücksetzen")),f("p",{class:"tiny"},"Vorspulen gilt für alle Spieler. Zurück geht nur über „Echte Zeit“.")),setInterval(()=>{r.textContent=`${Ar(pe())} (${dn(pe()).second}s)`},1e3),document.body.append(a,i)}const wb=180*1e3;let Fp=0;async function Ps(){Fp=Date.now();try{const n=await fetch(`./version.json?t=${Date.now()}`,{cache:"no-store"});if(!n.ok)return;const{build:e}=await n.json();if(!e||e==="1792180344958")return;if(document.querySelector(".backdrop")){setTimeout(Ps,3e4);return}location.replace(`${location.pathname}?v=${e}${location.hash}`)}catch{}}function Eb(){setInterval(Ps,wb),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Date.now()-Fp>2e4&&Ps()}),setTimeout(Ps,5e3)}const Ic=`${nd} TEST`;document.title=Ic;document.body.classList.add("test-app"),document.body.append(f("div",{class:"test-app-band"},"🧪 TEST-APP · nichts hier zählt"));const ia=document.getElementById("app"),Tb=[{hash:"#/",icon:"🏠",label:"Home"},{hash:"#/me",icon:"👤",label:"Mein Profil"},{hash:"#/members",icon:"👥",label:"Mitglieder"},{hash:"#/ranks",icon:"🏆",label:"Ränge"},{hash:"#/notifications",icon:"🔔",label:"Benachrichtigungen"},{hash:"#/settings",icon:"⚙️",label:"Einstellungen"}];function Ib(){const n=location.hash||"#/",[,e,t]=n.split("/");switch(e){case"me":return{key:"me",view:()=>Yt(F.uid),leave:Yt.leave,live:!0};case"u":return{key:`u/${t}`,view:()=>Yt(t),leave:Yt.leave,live:!0};case"members":return{key:"members",view:xp,live:!0};case"ranks":return{key:"ranks",view:fb,live:!0};case"notifications":return{key:"notifications",view:pb,live:!0};case"settings":return{key:"settings",view:_b};case"post":return{key:`post/${t}`,view:()=>xr(t),leave:xr.leave,live:!0};default:return{key:"home",view:Lp,live:!0}}}let Ye=null,Xe=null,ut=null;function bb(){const n=f("nav",{class:"drawer"}),e=f("div",{class:"scrim",onclick:()=>oa(!1)}),t=f("button",{class:"icon-btn","aria-label":"Menü",onclick:()=>oa(!0)},f("span",{class:"burger"}),f("span",{class:"dot hidden"})),r=f("button",{class:"icon-btn","aria-label":"Aktualisieren",onclick:()=>Up(r)},"⟳"),s=f("header",{class:"topbar"},t,f("a",{href:"#/",class:"brand"},Ic),r),i=f("div",{class:"ptr"},"⟳");Xe=f("main",{class:"main"}),Ye=f("div",{class:"shell"},s,i,Xe,e,n),Ye.drawer=n,Ye.menuBtn=t,Ye.ptr=i,ia.replaceChildren(Ye),Sb(i,r)}function Ab(){const n=`#/${(location.hash||"#/").split("/")[1]||""}`,e=gb();Ye.drawer.replaceChildren(f("div",{class:"drawer-head"},Ic),...Tb.map(t=>f("a",{class:`nav-item ${n===t.hash||t.hash==="#/"&&n==="#/"?"active":""}`,href:t.hash,onclick:()=>oa(!1)},f("span",{class:"nav-ico"},t.icon),f("span",{},t.label),t.hash==="#/notifications"&&e?f("span",{class:"count"},String(e)):null))),Ye.menuBtn.querySelector(".dot").classList.toggle("hidden",!e)}function oa(n){Ye.classList.toggle("menu-open",n)}function kn(n=!1){var s;if(!Ye)return;const e=Ib();ut&&ut.key!==e.key&&((s=ut.leave)==null||s.call(ut));const t=!ut||ut.key!==e.key;if(!t&&!e.live&&n!=="hard")return;const r=t?0:Xe.scrollTop;ut=e,Xe.replaceChildren(e.view()),Xe.scrollTop=r,Ab()}async function Up(n){n==null||n.classList.add("spin"),await xn();try{await dT()}catch{}kn("hard"),setTimeout(()=>n==null?void 0:n.classList.remove("spin"),500)}function Sb(n,e){let t=null,r=0;Xe.addEventListener("touchstart",s=>{t=Xe.scrollTop<=0?s.touches[0].clientY:null,r=0},{passive:!0}),Xe.addEventListener("touchmove",s=>{t!=null&&(r=Math.max(0,s.touches[0].clientY-t),n.style.transform=`translateY(${Math.min(80,r*.5)}px) rotate(${r*2}deg)`,n.classList.toggle("ready",r>120))},{passive:!0}),Xe.addEventListener("touchend",()=>{t!=null&&r>120&&Up(e),t=null,n.style.transform="",n.classList.remove("ready")})}setInterval(()=>{const n=pe();document.querySelectorAll("[data-until]").forEach(e=>{const t=Number(e.dataset.until)-n;e.textContent=Op(t),t<=0&&!e.dataset.fired&&(e.dataset.fired="1",setTimeout(()=>kn(!0),1200))})},1e3);setInterval(()=>{document.querySelectorAll("[data-ring]").forEach(n=>{const e=F.users.get(n.dataset.ring);e&&aT(n,li(e,pe()).pct)})},15e3);let vh=0;setInterval(()=>{const n=Math.floor(pe()/6e4);n!==vh&&(vh=n,kn(!0))},5e3);async function kb(){vc(),await xn(),XE();const n=()=>{yh(ea),ic&&F.me&&vb(F.me,()=>kn(!0))};YE(n),setInterval(()=>yh(ea),1e3),Eb(),lT(()=>{F.me&&(kn(!0),XI(F.me),n())}),window.addEventListener("hashchange",()=>{var e;if(location.hash==="#/checkin"){location.hash="#/";const t=hd(pe());t&&F.me&&!((e=F.me.days)!=null&&e[t])&&setTimeout(()=>Dp(t),300);return}kn()}),X_(Mn,e=>{if(Gf(),Ye=null,ut=null,!e){ia.replaceChildren(HI());return}const t=()=>{bb(),Xe.replaceChildren(f("div",{class:"boot"},f("div",{class:"boot-flame"}))),hT(e.uid,()=>{G("Profil nicht gefunden","error"),Qh(Mn)}),jI()};let r=!1;try{r=localStorage.getItem("onboarded")==="1"}catch{}r?t():ia.replaceChildren(KI(t))})}kb();
