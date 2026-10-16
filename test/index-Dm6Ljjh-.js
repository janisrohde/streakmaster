(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const Lm=()=>{};var Vl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Mm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Dh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,h=u?n[s+2]:0,p=i>>2,g=(i&3)<<4|c>>4;let w=(c&15)<<2|h>>6,S=h&63;u||(S=64,a||(w=64)),r.push(t[p],t[g],t[w],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ch(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Mm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||g==null)throw new xm;const w=i<<2|c>>4;if(r.push(w),h!==64){const S=c<<4&240|h>>2;if(r.push(S),g!==64){const C=h<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class xm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fm=function(n){const e=Ch(n);return Dh.encodeByteArray(e,!0)},Nh=function(n){return Fm(n).replace(/\./g,"")},Vh=function(n){try{return Dh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Um(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bm=()=>Um().__FIREBASE_DEFAULTS__,$m=()=>{if(typeof process>"u"||typeof Vl>"u")return;const n=Vl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},zm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Vh(n[1]);return e&&JSON.parse(e)},_a=()=>{try{return Lm()||Bm()||$m()||zm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Oh=()=>{var n;return(n=_a())===null||n===void 0?void 0:n.config},jm=n=>{var e;return(e=_a())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function hi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Hm(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Km(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Wm(){var n;const e=(n=_a())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gm(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Qm(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Jm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ym(){const n=xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Xm(){return!Wm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Lh(){try{return typeof indexedDB=="object"}catch{return!1}}function Mh(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function Zm(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg="FirebaseError";class lt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=eg,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gn.prototype.create)}}class gn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?tg(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new lt(s,c,r)}}function tg(n,e){return n.replace(ng,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ng=/\{\$([^}]+)}/g;function Cr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Ol(i)&&Ol(a)){if(!Cr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ol(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function gr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function rg(n,e){const t=new sg(n,e);return t.subscribe.bind(t)}class sg{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");ig(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=po),s.error===void 0&&(s.error=po),s.complete===void 0&&(s.complete=po);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ig(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function po(){}/**
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
 */function fe(n){return n&&n._delegate?n._delegate:n}class Ge{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xt="[DEFAULT]";/**
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
 */class og{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new qm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cg(e))try{this.getOrInitializeService({instanceIdentifier:Xt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Xt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xt){return this.instances.has(e)}getOptions(e=Xt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ag(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xt){return this.component?this.component.multipleInstances?e:Xt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ag(n){return n===Xt?void 0:n}function cg(n){return n.instantiationMode==="EAGER"}/**
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
 */class lg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new og(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var K;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(K||(K={}));const ug={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},hg=K.INFO,dg={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},fg=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=dg[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ya{constructor(e){this.name=e,this._logLevel=hg,this._logHandler=fg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ug[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const pg=(n,e)=>e.some(t=>n instanceof t);let Ll,Ml;function mg(){return Ll||(Ll=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gg(){return Ml||(Ml=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fh=new WeakMap,Fo=new WeakMap,Uh=new WeakMap,mo=new WeakMap,va=new WeakMap;function _g(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(gt(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Fh.set(t,n)}).catch(()=>{}),va.set(e,n),e}function yg(n){if(Fo.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Fo.set(n,e)}let Uo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Fo.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Uh.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return gt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function vg(n){Uo=n(Uo)}function wg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(go(this),e,...t);return Uh.set(r,e.sort?e.sort():[e]),gt(r)}:gg().includes(n)?function(...e){return n.apply(go(this),e),gt(Fh.get(this))}:function(...e){return gt(n.apply(go(this),e))}}function Eg(n){return typeof n=="function"?wg(n):(n instanceof IDBTransaction&&yg(n),pg(n,mg())?new Proxy(n,Uo):n)}function gt(n){if(n instanceof IDBRequest)return _g(n);if(mo.has(n))return mo.get(n);const e=Eg(n);return e!==n&&(mo.set(n,e),va.set(e,n)),e}const go=n=>va.get(n);function di(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=gt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(gt(a.result),u.oldVersion,u.newVersion,gt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}function _o(n,{blocked:e}={}){const t=indexedDB.deleteDatabase(n);return e&&t.addEventListener("blocked",r=>e(r.oldVersion,r)),gt(t).then(()=>{})}const Tg=["get","getKey","getAll","getAllKeys","count"],bg=["put","add","delete","clear"],yo=new Map;function xl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(yo.get(e))return yo.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=bg.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Tg.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&u.done]))[0]};return yo.set(e,i),i}vg(n=>({...n,get:(e,t,r)=>xl(e,t)||n.get(e,t,r),has:(e,t)=>!!xl(e,t)||n.has(e,t)}));/**
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
 */class Ig{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ag(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ag(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bo="@firebase/app",Fl="0.13.2";/**
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
 */const vt=new ya("@firebase/app"),Sg="@firebase/app-compat",kg="@firebase/analytics-compat",Rg="@firebase/analytics",Pg="@firebase/app-check-compat",Cg="@firebase/app-check",Dg="@firebase/auth",Ng="@firebase/auth-compat",Vg="@firebase/database",Og="@firebase/data-connect",Lg="@firebase/database-compat",Mg="@firebase/functions",xg="@firebase/functions-compat",Fg="@firebase/installations",Ug="@firebase/installations-compat",Bg="@firebase/messaging",$g="@firebase/messaging-compat",zg="@firebase/performance",jg="@firebase/performance-compat",qg="@firebase/remote-config",Hg="@firebase/remote-config-compat",Kg="@firebase/storage",Wg="@firebase/storage-compat",Gg="@firebase/firestore",Qg="@firebase/ai",Jg="@firebase/firestore-compat",Yg="firebase",Xg="11.10.0";/**
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
 */const $o="[DEFAULT]",Zg={[Bo]:"fire-core",[Sg]:"fire-core-compat",[Rg]:"fire-analytics",[kg]:"fire-analytics-compat",[Cg]:"fire-app-check",[Pg]:"fire-app-check-compat",[Dg]:"fire-auth",[Ng]:"fire-auth-compat",[Vg]:"fire-rtdb",[Og]:"fire-data-connect",[Lg]:"fire-rtdb-compat",[Mg]:"fire-fn",[xg]:"fire-fn-compat",[Fg]:"fire-iid",[Ug]:"fire-iid-compat",[Bg]:"fire-fcm",[$g]:"fire-fcm-compat",[zg]:"fire-perf",[jg]:"fire-perf-compat",[qg]:"fire-rc",[Hg]:"fire-rc-compat",[Kg]:"fire-gcs",[Wg]:"fire-gcs-compat",[Gg]:"fire-fst",[Jg]:"fire-fst-compat",[Qg]:"fire-vertex","fire-js":"fire-js",[Yg]:"fire-js-all"};/**
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
 */const Fs=new Map,e_=new Map,zo=new Map;function Ul(n,e){try{n.container.addComponent(e)}catch(t){vt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function it(n){const e=n.name;if(zo.has(e))return vt.debug(`There were multiple attempts to register component ${e}.`),!1;zo.set(e,n);for(const t of Fs.values())Ul(t,n);for(const t of e_.values())Ul(t,n);return!0}function Hr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function pt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const t_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nt=new gn("app","Firebase",t_);/**
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
 */class n_{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nt.create("app-deleted",{appName:this._name})}}/**
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
 */const fi=Xg;function Bh(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$o,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Nt.create("bad-app-name",{appName:String(s)});if(t||(t=Oh()),!t)throw Nt.create("no-options");const i=Fs.get(s);if(i){if(Cr(t,i.options)&&Cr(r,i.config))return i;throw Nt.create("duplicate-app",{appName:s})}const a=new lg(s);for(const u of zo.values())a.addComponent(u);const c=new n_(t,r,a);return Fs.set(s,c),c}function r_(n=$o){const e=Fs.get(n);if(!e&&n===$o&&Oh())return Bh();if(!e)throw Nt.create("no-app",{appName:n});return e}function ze(n,e,t){var r;let s=(r=Zg[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vt.warn(c.join(" "));return}it(new Ge(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const s_="firebase-heartbeat-database",i_=1,Dr="firebase-heartbeat-store";let vo=null;function $h(){return vo||(vo=di(s_,i_,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Dr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Nt.create("idb-open",{originalErrorMessage:n.message})})),vo}async function o_(n){try{const t=(await $h()).transaction(Dr),r=await t.objectStore(Dr).get(zh(n));return await t.done,r}catch(e){if(e instanceof lt)vt.warn(e.message);else{const t=Nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vt.warn(t.message)}}}async function Bl(n,e){try{const r=(await $h()).transaction(Dr,"readwrite");await r.objectStore(Dr).put(e,zh(n)),await r.done}catch(t){if(t instanceof lt)vt.warn(t.message);else{const r=Nt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});vt.warn(r.message)}}}function zh(n){return`${n.name}!${n.options.appId}`}/**
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
 */const a_=1024,c_=30;class l_{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new h_(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=$l();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>c_){const a=d_(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){vt.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=$l(),{heartbeatsToSend:r,unsentEntries:s}=u_(this._heartbeatsCache.heartbeats),i=Nh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return vt.warn(t),""}}}function $l(){return new Date().toISOString().substring(0,10)}function u_(n,e=a_){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),zl(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),zl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class h_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lh()?Mh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await o_(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Bl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zl(n){return Nh(JSON.stringify({version:2,heartbeats:n})).length}function d_(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function f_(n){it(new Ge("platform-logger",e=>new Ig(e),"PRIVATE")),it(new Ge("heartbeat",e=>new l_(e),"PRIVATE")),ze(Bo,Fl,n),ze(Bo,Fl,"esm2017"),ze("fire-js","")}f_("");function jh(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function qh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const p_=qh,Hh=new gn("auth","Firebase",qh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new ya("@firebase/auth");function m_(n,...e){Us.logLevel<=K.WARN&&Us.warn(`Auth (${fi}): ${n}`,...e)}function Cs(n,...e){Us.logLevel<=K.ERROR&&Us.error(`Auth (${fi}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(n,...e){throw Ea(n,...e)}function wa(n,...e){return Ea(n,...e)}function Kh(n,e,t){const r=Object.assign(Object.assign({},p_()),{[e]:t});return new gn("auth","Firebase",r).create(e,{appName:n.name})}function Pn(n){return Kh(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ea(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Hh.create(n,...e)}function J(n,e,...t){if(!n)throw Ea(e,...t)}function mt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Cs(e),new Error(e)}function Bs(n,e){n||mt(e)}function g_(){return jl()==="http:"||jl()==="https:"}function jl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(g_()||Qm()||"connection"in navigator)?navigator.onLine:!0}function y_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Bs(t>e,"Short delay should be less than long delay!"),this.isMobile=Km()||Jm()}get(){return __()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(n,e){Bs(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],T_=new Kr(3e4,6e4);function jn(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function _n(n,e,t,r,s={}){return Gh(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=xh(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:u},i);return Gm()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&hi(n.emulatorConfig.host)&&(h.credentials="include"),Wh.fetch()(await Qh(n,n.config.apiHost,t,c),h)})}async function Gh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},w_),e);try{const s=new I_(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Es(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Es(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Es(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Es(n,"user-disabled",a);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Kh(n,p,h);Ln(n,p)}}catch(s){if(s instanceof lt)throw s;Ln(n,"network-request-failed",{message:String(s)})}}async function Ta(n,e,t,r,s={}){const i=await _n(n,e,t,r,s);return"mfaPendingCredential"in i&&Ln(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Qh(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?v_(n.config,s):`${n.config.apiScheme}://${s}`;return E_.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function b_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class I_{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(wa(this.auth,"network-request-failed")),T_.get())})}}function Es(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=wa(n,e,r);return s.customData._tokenResponse=t,s}function ql(n){return n!==void 0&&n.enterprise!==void 0}class A_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return b_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function S_(n,e){return _n(n,"GET","/v2/recaptchaConfig",jn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k_(n,e){return _n(n,"POST","/v1/accounts:delete",e)}async function $s(n,e){return _n(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function R_(n,e=!1){const t=fe(n),r=await t.getIdToken(e),s=Jh(r);J(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Er(wo(s.auth_time)),issuedAtTime:Er(wo(s.iat)),expirationTime:Er(wo(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wo(n){return Number(n)*1e3}function Jh(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Cs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Vh(t);return s?JSON.parse(s):(Cs("Failed to decode base64 JWT payload"),null)}catch(s){return Cs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hl(n){const e=Jh(n);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jo(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof lt&&P_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function P_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Er(this.lastLoginAt),this.creationTime=Er(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function zs(n){var e;const t=n.auth,r=await n.getIdToken(),s=await jo(n,$s(t,{idToken:r}));J(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Yh(i.providerUserInfo):[],c=N_(n.providerData,a),u=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),p=u?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new qo(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(n,g)}async function D_(n){const e=fe(n);await zs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function N_(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Yh(n){return n.map(e=>{var{providerId:t}=e,r=jh(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V_(n,e){const t=await Gh(n,{},async()=>{const r=xh({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Qh(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&hi(n.emulatorConfig.host)&&(u.credentials="include"),Wh.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function O_(n,e){return _n(n,"POST","/v2/accounts:revokeToken",jn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){J(e.length!==0,"internal-error");const t=Hl(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await V_(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Cn;return r&&(J(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(J(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cn,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(n,e){J(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ke{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=jh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new C_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new qo(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await jo(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return R_(this,e)}reload(){return D_(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ke(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await zs(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pt(this.auth.app))return Promise.reject(Pn(this.auth));const e=await this.getIdToken();return await jo(this,k_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,u,h,p;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(s=t.email)!==null&&s!==void 0?s:void 0,S=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,N=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,x=(h=t.createdAt)!==null&&h!==void 0?h:void 0,O=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:$,emailVerified:H,isAnonymous:me,providerData:te,stsTokenManager:b}=t;J($&&b,e,"internal-error");const _=Cn.fromJSON(this.name,b);J(typeof $=="string",e,"internal-error"),kt(g,e.name),kt(w,e.name),J(typeof H=="boolean",e,"internal-error"),J(typeof me=="boolean",e,"internal-error"),kt(S,e.name),kt(C,e.name),kt(D,e.name),kt(N,e.name),kt(x,e.name),kt(O,e.name);const v=new Ke({uid:$,auth:e,email:w,emailVerified:H,displayName:g,isAnonymous:me,photoURL:C,phoneNumber:S,tenantId:D,stsTokenManager:_,createdAt:x,lastLoginAt:O});return te&&Array.isArray(te)&&(v.providerData=te.map(T=>Object.assign({},T))),N&&(v._redirectEventId=N),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Cn;s.updateFromServerResponse(t);const i=new Ke({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await zs(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Yh(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Cn;c.updateFromIdToken(r);const u=new Ke({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new qo(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=new Map;function en(n){Bs(n instanceof Function,"Expected a class definition");let e=Kl.get(n);return e?(Bs(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Kl.set(n,e),e)}/**
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
 */class Xh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xh.type="NONE";const Wl=Xh;/**
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
 */function Eo(n,e,t){return`firebase:${n}:${e}:${t}`}class Dn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Eo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await $s(this.auth,{idToken:e}).catch(()=>{});return t?Ke._fromGetAccountInfoResponse(this.auth,t,e):null}return Ke._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Dn(en(Wl),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||en(Wl);const a=Eo(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const p=await h._get(a);if(p){let g;if(typeof p=="string"){const w=await $s(e,{idToken:p}).catch(()=>{});if(!w)break;g=await Ke._fromGetAccountInfoResponse(e,w,p)}else g=Ke._fromJSON(e,p);h!==i&&(c=g),i=h;break}}catch{}const u=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Dn(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Dn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Zh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(L_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(td(e))return"Blackberry";if(nd(e))return"Webos";if(M_(e))return"Safari";if((e.includes("chrome/")||x_(e))&&!e.includes("edge/"))return"Chrome";if(ed(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function L_(n=xe()){return/firefox\//i.test(n)}function M_(n=xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function x_(n=xe()){return/crios\//i.test(n)}function Zh(n=xe()){return/iemobile/i.test(n)}function ed(n=xe()){return/android/i.test(n)}function td(n=xe()){return/blackberry/i.test(n)}function nd(n=xe()){return/webos/i.test(n)}function F_(n=xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function U_(){return Ym()&&document.documentMode===10}function B_(n=xe()){return F_(n)||ed(n)||nd(n)||td(n)||/windows phone/i.test(n)||Zh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(n,e=[]){let t;switch(n){case"Browser":t=Gl(xe());break;case"Worker":t=`${Gl(xe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${fi}/${r}`}/**
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
 */class $_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function z_(n,e={}){return _n(n,"GET","/v2/passwordPolicy",jn(n,e))}/**
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
 */const j_=6;class q_{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:j_,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ql(this),this.idTokenSubscription=new Ql(this),this.beforeStateQueue=new $_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hh,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=en(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Dn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await $s(this,{idToken:e}),r=await Ke._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(pt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=y_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pt(this.app))return Promise.reject(Pn(this));const t=e?fe(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pt(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pt(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await z_(this),t=new q_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new gn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await O_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&en(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await Dn.create(this,[en(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(pt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&m_(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function pi(n){return fe(n)}class Ql{constructor(e){this.auth=e,this.observer=null,this.addObserver=rg(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ba={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function K_(n){ba=n}function W_(n){return ba.loadJS(n)}function G_(){return ba.recaptchaEnterpriseScript}class Q_{constructor(){this.enterprise=new J_}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class J_{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Y_="recaptcha-enterprise",sd="NO_RECAPTCHA";class X_{constructor(e){this.type=Y_,this.auth=pi(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{S_(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new A_(u);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(u=>{c(u)})})}function s(i,a,c){const u=window.grecaptcha;ql(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a(sd)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Q_().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!t&&ql(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=G_();u.length!==0&&(u+=c),W_(u).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function Jl(n,e,t,r=!1,s=!1){const i=new X_(n);let a;if(s)a=sd;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const c=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Yl(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Jl(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Jl(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(n,e){const t=Hr(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Cr(i,e??{}))return s;Ln(s,"already-initialized")}return t.initialize({options:e})}function ey(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(en);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mt("not implemented")}_getIdTokenResponse(e){return mt("not implemented")}_linkToIdToken(e,t){return mt("not implemented")}_getReauthenticationResolver(e){return mt("not implemented")}}async function ny(n,e){return _n(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ry(n,e){return Ta(n,"POST","/v1/accounts:signInWithPassword",jn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sy(n,e){return Ta(n,"POST","/v1/accounts:signInWithEmailLink",jn(n,e))}async function iy(n,e){return Ta(n,"POST","/v1/accounts:signInWithEmailLink",jn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends ty{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Nr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Nr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yl(e,t,"signInWithPassword",ry);case"emailLink":return sy(e,{email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yl(e,r,"signUpPassword",ny);case"emailLink":return iy(e,{idToken:t,email:this._email,oobCode:this._password});default:Ln(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ay(n){const e=mr(gr(n)).link,t=e?mr(gr(e)).deep_link_id:null,r=mr(gr(n)).deep_link_id;return(r?mr(gr(r)).link:null)||r||t||e||n}class Ia{constructor(e){var t,r,s,i,a,c;const u=mr(gr(e)),h=(t=u.apiKey)!==null&&t!==void 0?t:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,g=oy((s=u.mode)!==null&&s!==void 0?s:null);J(h&&p&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=p,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=u.lang)!==null&&a!==void 0?a:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=ay(e);try{return new Ia(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.providerId=qn.PROVIDER_ID}static credential(e,t){return Nr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Ia.parseLink(t);return J(r,"argument-error"),Nr._fromEmailAndCode(e,r.code,r.tenantId)}}qn.PROVIDER_ID="password";qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ke._fromIdTokenResponse(e,r,s),a=Xl(r);return new js({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Xl(r);return new js({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Xl(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs extends lt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new qs(e,t,r,s)}}function cy(n,e,t,r){return t._getIdTokenResponse(n).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qs._fromErrorAndOperation(n,i,e,r):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ly(n,e,t=!1){if(pt(n.app))return Promise.reject(Pn(n));const r="signIn",s=await cy(n,r,e),i=await js._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function uy(n,e){return ly(pi(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hy(n){const e=pi(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Zl(n,e,t){return pt(n.app)?Promise.reject(Pn(n)):uy(fe(n),qn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hy(n),r})}function dy(n,e,t,r){return fe(n).onAuthStateChanged(e,t,r)}function id(n){return fe(n).signOut()}const Hs="__sak";/**
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
 */class od{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Hs,"1"),this.storage.removeItem(Hs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=1e3,py=10;class ad extends od{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=B_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);U_()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,py):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},fy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ad.type="LOCAL";const my=ad;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy extends od{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}gy.type="SESSION";/**
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
 */function _y(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class mi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new mi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),u=await _y(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}mi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class vy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const h=yy("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const w=g;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(w.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){return window}/**
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
 */function cd(){return typeof eu().WorkerGlobalScope<"u"&&typeof eu().importScripts=="function"}async function wy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ey(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ty(){return cd()?self:null}/**
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
 */const ld="firebaseLocalStorageDb",by=1,Ks="firebaseLocalStorage",ud="fbase_key";class Wr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function gi(n,e){return n.transaction([Ks],e?"readwrite":"readonly").objectStore(Ks)}function Iy(){const n=indexedDB.deleteDatabase(ld);return new Wr(n).toPromise()}function Ho(){const n=indexedDB.open(ld,by);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ks,{keyPath:ud})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ks)?e(r):(r.close(),await Iy(),e(await Ho()))})})}async function tu(n,e,t){const r=gi(n,!0).put({[ud]:e,value:t});return new Wr(r).toPromise()}async function Ay(n,e){const t=gi(n,!1).get(e),r=await new Wr(t).toPromise();return r===void 0?null:r.value}function nu(n,e){const t=gi(n,!0).delete(e);return new Wr(t).toPromise()}const Sy=800,ky=3;class hd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ho(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>ky)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=mi._getInstance(Ty()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await wy(),!this.activeServiceWorker)return;this.sender=new vy(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ey()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ho();return await tu(e,Hs,"1"),await nu(e,Hs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>tu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ay(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>nu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=gi(s,!1).getAll();return new Wr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Sy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hd.type="LOCAL";const Ry=hd;new Kr(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Kr(2e3,1e4);/**
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
 */new Kr(3e4,6e4);/**
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
 */new Kr(5e3,15e3);var ru="@firebase/auth",su="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Dy(n){it(new Ge("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;J(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rd(n)},h=new H_(r,s,i,u);return ey(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),it(new Ge("auth-internal",e=>{const t=pi(e.getProvider("auth").getImmediate());return(r=>new Py(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(ru,su,Cy(n)),ze(ru,su,"esm2017")}/**
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
 */const Ny=300;jm("authIdTokenMaxAge");function Vy(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}K_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=wa("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Vy().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Dy("Browser");const dd="Streak",Oy="Europe/Berlin",Nn={year:2026,month:10,day:31},ot=30,fd=22,pd=21,Ly=21,_e=[{name:"Noob 1",group:"noob",level:1,days:1},{name:"Noob 2",group:"noob",level:2,days:1},{name:"Noob 3",group:"noob",level:3,days:1},{name:"Advanced 1",group:"advanced",level:1,days:1},{name:"Advanced 2",group:"advanced",level:2,days:1},{name:"Advanced 3",group:"advanced",level:3,days:2},{name:"Pro 1",group:"pro",level:1,days:2},{name:"Pro 2",group:"pro",level:2,days:3},{name:"Elite",group:"elite",level:0,days:4},{name:"Unreal",group:"unreal",level:0,days:6},{name:"Hacker",group:"hacker",level:0,days:8},{name:"Gotti",group:"gotti",level:0,days:null}],_i={noob:{main:"#5ad35a",dark:"#2a7a2a",light:"#b8ffb0"},advanced:{main:"#3fa9ff",dark:"#1a4f9c",light:"#bfe3ff"},pro:{main:"#a45bff",dark:"#5226a0",light:"#e2c9ff"},elite:{main:"#ff9a2e",dark:"#a8520a",light:"#ffd9a8"},unreal:{main:"#ff4fa3",dark:"#9c1858",light:"#ffc2e0"},hacker:{main:"#22e3c4",dark:"#0b7565",light:"#b5fff2"},gotti:{main:"#ffd23f",dark:"#a87a00",light:"#fff3b0"}},Ts=300,fr=60,My=!0,xy={firebase:{apiKey:"AIzaSyAIPSPnepBy37FIPCz-deNHHLicYsNgObM",authDomain:"streak-jf-test.firebaseapp.com",projectId:"streak-jf-test",messagingSenderId:"1015283528708",appId:"1:1015283528708:web:58980a496aa79aad167151"},worker:"https://streak-worker-test.janis-rohde.workers.dev"},md=xy,Fy=md.firebase,Uy=md.worker,gd=864e5;let To;function By(){return To||(To=new Intl.DateTimeFormat("en-GB",{timeZone:Oy,hourCycle:"h23",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})),To}function yn(n){const e={};for(const t of By().formatToParts(new Date(n)))t.type!=="literal"&&(e[t.type]=parseInt(t.value,10));return e.hour===24&&(e.hour=0),{year:e.year,month:e.month,day:e.day,hour:e.hour,minute:e.minute,second:e.second}}function iu(n){const e=yn(n);return Date.UTC(e.year,e.month-1,e.day,e.hour,e.minute,e.second)-Math.floor(n/1e3)*1e3}function _d({year:n,month:e,day:t,hour:r=0,minute:s=0}){const i=Date.UTC(n,e-1,t,r,s);let a=i-iu(i);const c=iu(a);return i-c!==a&&(a=i-c),a}let Aa=Date.UTC(Nn.year,Nn.month-1,Nn.day);function $y(n){const e=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(n||""));Aa=e?Date.UTC(Number(e[1]),Number(e[2])-1,Number(e[3])):Date.UTC(Nn.year,Nn.month-1,Nn.day)}function Sa(n){return Math.round((Date.UTC(n.year,n.month-1,n.day)-Aa)/gd)}function yd(n){return Sa(yn(n))}function zy(n){const e=new Date(Aa+n*gd);return{year:e.getUTCFullYear(),month:e.getUTCMonth()+1,day:e.getUTCDate()}}function Pt(n,e,t=0){return _d({...zy(n),hour:e,minute:t})}const ka=n=>Pt(n,fd),vd=n=>ka(n-1),Ws=()=>vd(1);function Mt(n){const e=yn(n);return Sa(e)+(e.hour>=fd?1:0)}function wd(n){const e=yn(n);if(e.hour<pd)return null;const t=Sa(e);return t>=1&&t<=ot?t:null}const bo=n=>Pt(n,pd),jy=n=>Pt(n+1,0),Io=n=>Pt(n+1,Ly),Gs=n=>String(n).padStart(2,"0");function Ed(n){const e=yn(n);return`${Gs(e.hour)}:${Gs(e.minute)}`}function Hn(n){const e=yn(n);return`${Gs(e.day)}.${Gs(e.month)}.`}function Vr(n){return`${Hn(n)} ${Ed(n)}`}const qy=1e-9;function yi(n,e){const t=n.rankIndex||0,r=_e[t],s=_e[t+1]||null,i=n.days||{},a=n.joinedDay||1;if(r.days==null)return{rankIndex:t,rank:r,next:s,pct:100,rest:0,full:!0,final:!0,provisional:0};let c=0;const u=Mt(e);u>=1&&u<=ot&&u>=a&&!i[u]&&(c+=Math.min(1,Math.max(0,(e-vd(u))/864e5)));const h=u-1;h>=1&&h<=ot&&h>=a&&!i[h]&&e<jy(h)&&(c+=1);const p=(n.progress||0)+c,g=Math.min(1,p/r.days),w=Math.floor(g*1e3)/10;return{rankIndex:t,rank:r,next:s,pct:w,rest:Math.round((100-w)*10)/10,full:p>=r.days-qy,final:!1,provisional:c}}function ou(n){var e;return((e=_e[n])==null?void 0:e.name)||"?"}var Hy="firebase",Ky="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ze(Hy,Ky,"app");var au=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Vt,Td;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,_){function v(){}v.prototype=_.prototype,b.D=_.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(T,E,I){for(var y=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)y[ye-2]=arguments[ye];return _.prototype[E].apply(T,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,_,v){v||(v=0);var T=Array(16);if(typeof _=="string")for(var E=0;16>E;++E)T[E]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(E=0;16>E;++E)T[E]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=b.g[0],v=b.g[1],E=b.g[2];var I=b.g[3],y=_+(I^v&(E^I))+T[0]+3614090360&4294967295;_=v+(y<<7&4294967295|y>>>25),y=I+(E^_&(v^E))+T[1]+3905402710&4294967295,I=_+(y<<12&4294967295|y>>>20),y=E+(v^I&(_^v))+T[2]+606105819&4294967295,E=I+(y<<17&4294967295|y>>>15),y=v+(_^E&(I^_))+T[3]+3250441966&4294967295,v=E+(y<<22&4294967295|y>>>10),y=_+(I^v&(E^I))+T[4]+4118548399&4294967295,_=v+(y<<7&4294967295|y>>>25),y=I+(E^_&(v^E))+T[5]+1200080426&4294967295,I=_+(y<<12&4294967295|y>>>20),y=E+(v^I&(_^v))+T[6]+2821735955&4294967295,E=I+(y<<17&4294967295|y>>>15),y=v+(_^E&(I^_))+T[7]+4249261313&4294967295,v=E+(y<<22&4294967295|y>>>10),y=_+(I^v&(E^I))+T[8]+1770035416&4294967295,_=v+(y<<7&4294967295|y>>>25),y=I+(E^_&(v^E))+T[9]+2336552879&4294967295,I=_+(y<<12&4294967295|y>>>20),y=E+(v^I&(_^v))+T[10]+4294925233&4294967295,E=I+(y<<17&4294967295|y>>>15),y=v+(_^E&(I^_))+T[11]+2304563134&4294967295,v=E+(y<<22&4294967295|y>>>10),y=_+(I^v&(E^I))+T[12]+1804603682&4294967295,_=v+(y<<7&4294967295|y>>>25),y=I+(E^_&(v^E))+T[13]+4254626195&4294967295,I=_+(y<<12&4294967295|y>>>20),y=E+(v^I&(_^v))+T[14]+2792965006&4294967295,E=I+(y<<17&4294967295|y>>>15),y=v+(_^E&(I^_))+T[15]+1236535329&4294967295,v=E+(y<<22&4294967295|y>>>10),y=_+(E^I&(v^E))+T[1]+4129170786&4294967295,_=v+(y<<5&4294967295|y>>>27),y=I+(v^E&(_^v))+T[6]+3225465664&4294967295,I=_+(y<<9&4294967295|y>>>23),y=E+(_^v&(I^_))+T[11]+643717713&4294967295,E=I+(y<<14&4294967295|y>>>18),y=v+(I^_&(E^I))+T[0]+3921069994&4294967295,v=E+(y<<20&4294967295|y>>>12),y=_+(E^I&(v^E))+T[5]+3593408605&4294967295,_=v+(y<<5&4294967295|y>>>27),y=I+(v^E&(_^v))+T[10]+38016083&4294967295,I=_+(y<<9&4294967295|y>>>23),y=E+(_^v&(I^_))+T[15]+3634488961&4294967295,E=I+(y<<14&4294967295|y>>>18),y=v+(I^_&(E^I))+T[4]+3889429448&4294967295,v=E+(y<<20&4294967295|y>>>12),y=_+(E^I&(v^E))+T[9]+568446438&4294967295,_=v+(y<<5&4294967295|y>>>27),y=I+(v^E&(_^v))+T[14]+3275163606&4294967295,I=_+(y<<9&4294967295|y>>>23),y=E+(_^v&(I^_))+T[3]+4107603335&4294967295,E=I+(y<<14&4294967295|y>>>18),y=v+(I^_&(E^I))+T[8]+1163531501&4294967295,v=E+(y<<20&4294967295|y>>>12),y=_+(E^I&(v^E))+T[13]+2850285829&4294967295,_=v+(y<<5&4294967295|y>>>27),y=I+(v^E&(_^v))+T[2]+4243563512&4294967295,I=_+(y<<9&4294967295|y>>>23),y=E+(_^v&(I^_))+T[7]+1735328473&4294967295,E=I+(y<<14&4294967295|y>>>18),y=v+(I^_&(E^I))+T[12]+2368359562&4294967295,v=E+(y<<20&4294967295|y>>>12),y=_+(v^E^I)+T[5]+4294588738&4294967295,_=v+(y<<4&4294967295|y>>>28),y=I+(_^v^E)+T[8]+2272392833&4294967295,I=_+(y<<11&4294967295|y>>>21),y=E+(I^_^v)+T[11]+1839030562&4294967295,E=I+(y<<16&4294967295|y>>>16),y=v+(E^I^_)+T[14]+4259657740&4294967295,v=E+(y<<23&4294967295|y>>>9),y=_+(v^E^I)+T[1]+2763975236&4294967295,_=v+(y<<4&4294967295|y>>>28),y=I+(_^v^E)+T[4]+1272893353&4294967295,I=_+(y<<11&4294967295|y>>>21),y=E+(I^_^v)+T[7]+4139469664&4294967295,E=I+(y<<16&4294967295|y>>>16),y=v+(E^I^_)+T[10]+3200236656&4294967295,v=E+(y<<23&4294967295|y>>>9),y=_+(v^E^I)+T[13]+681279174&4294967295,_=v+(y<<4&4294967295|y>>>28),y=I+(_^v^E)+T[0]+3936430074&4294967295,I=_+(y<<11&4294967295|y>>>21),y=E+(I^_^v)+T[3]+3572445317&4294967295,E=I+(y<<16&4294967295|y>>>16),y=v+(E^I^_)+T[6]+76029189&4294967295,v=E+(y<<23&4294967295|y>>>9),y=_+(v^E^I)+T[9]+3654602809&4294967295,_=v+(y<<4&4294967295|y>>>28),y=I+(_^v^E)+T[12]+3873151461&4294967295,I=_+(y<<11&4294967295|y>>>21),y=E+(I^_^v)+T[15]+530742520&4294967295,E=I+(y<<16&4294967295|y>>>16),y=v+(E^I^_)+T[2]+3299628645&4294967295,v=E+(y<<23&4294967295|y>>>9),y=_+(E^(v|~I))+T[0]+4096336452&4294967295,_=v+(y<<6&4294967295|y>>>26),y=I+(v^(_|~E))+T[7]+1126891415&4294967295,I=_+(y<<10&4294967295|y>>>22),y=E+(_^(I|~v))+T[14]+2878612391&4294967295,E=I+(y<<15&4294967295|y>>>17),y=v+(I^(E|~_))+T[5]+4237533241&4294967295,v=E+(y<<21&4294967295|y>>>11),y=_+(E^(v|~I))+T[12]+1700485571&4294967295,_=v+(y<<6&4294967295|y>>>26),y=I+(v^(_|~E))+T[3]+2399980690&4294967295,I=_+(y<<10&4294967295|y>>>22),y=E+(_^(I|~v))+T[10]+4293915773&4294967295,E=I+(y<<15&4294967295|y>>>17),y=v+(I^(E|~_))+T[1]+2240044497&4294967295,v=E+(y<<21&4294967295|y>>>11),y=_+(E^(v|~I))+T[8]+1873313359&4294967295,_=v+(y<<6&4294967295|y>>>26),y=I+(v^(_|~E))+T[15]+4264355552&4294967295,I=_+(y<<10&4294967295|y>>>22),y=E+(_^(I|~v))+T[6]+2734768916&4294967295,E=I+(y<<15&4294967295|y>>>17),y=v+(I^(E|~_))+T[13]+1309151649&4294967295,v=E+(y<<21&4294967295|y>>>11),y=_+(E^(v|~I))+T[4]+4149444226&4294967295,_=v+(y<<6&4294967295|y>>>26),y=I+(v^(_|~E))+T[11]+3174756917&4294967295,I=_+(y<<10&4294967295|y>>>22),y=E+(_^(I|~v))+T[2]+718787259&4294967295,E=I+(y<<15&4294967295|y>>>17),y=v+(I^(E|~_))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+_&4294967295,b.g[1]=b.g[1]+(E+(y<<21&4294967295|y>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+I&4294967295}r.prototype.u=function(b,_){_===void 0&&(_=b.length);for(var v=_-this.blockSize,T=this.B,E=this.h,I=0;I<_;){if(E==0)for(;I<=v;)s(this,b,I),I+=this.blockSize;if(typeof b=="string"){for(;I<_;)if(T[E++]=b.charCodeAt(I++),E==this.blockSize){s(this,T),E=0;break}}else for(;I<_;)if(T[E++]=b[I++],E==this.blockSize){s(this,T),E=0;break}}this.h=E,this.o+=_},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var _=1;_<b.length-8;++_)b[_]=0;var v=8*this.o;for(_=b.length-8;_<b.length;++_)b[_]=v&255,v/=256;for(this.u(b),b=Array(16),_=v=0;4>_;++_)for(var T=0;32>T;T+=8)b[v++]=this.g[_]>>>T&255;return b};function i(b,_){var v=c;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=_(b)}function a(b,_){this.h=_;for(var v=[],T=!0,E=b.length-1;0<=E;E--){var I=b[E]|0;T&&I==_||(v[E]=I,T=!1)}this.g=v}var c={};function u(b){return-128<=b&&128>b?i(b,function(_){return new a([_|0],0>_?-1:0)}):new a([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return g;if(0>b)return N(h(-b));for(var _=[],v=1,T=0;b>=v;T++)_[T]=b/v|0,v*=4294967296;return new a(_,0)}function p(b,_){if(b.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(b.charAt(0)=="-")return N(p(b.substring(1),_));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(_,8)),T=g,E=0;E<b.length;E+=8){var I=Math.min(8,b.length-E),y=parseInt(b.substring(E,E+I),_);8>I?(I=h(Math.pow(_,I)),T=T.j(I).add(h(y))):(T=T.j(v),T=T.add(h(y)))}return T}var g=u(0),w=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(D(this))return-N(this).m();for(var b=0,_=1,v=0;v<this.g.length;v++){var T=this.i(v);b+=(0<=T?T:4294967296+T)*_,_*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(C(this))return"0";if(D(this))return"-"+N(this).toString(b);for(var _=h(Math.pow(b,6)),v=this,T="";;){var E=H(v,_).g;v=x(v,E.j(_));var I=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=E,C(v))return I+T;for(;6>I.length;)I="0"+I;T=I+T}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function C(b){if(b.h!=0)return!1;for(var _=0;_<b.g.length;_++)if(b.g[_]!=0)return!1;return!0}function D(b){return b.h==-1}n.l=function(b){return b=x(this,b),D(b)?-1:C(b)?0:1};function N(b){for(var _=b.g.length,v=[],T=0;T<_;T++)v[T]=~b.g[T];return new a(v,~b.h).add(w)}n.abs=function(){return D(this)?N(this):this},n.add=function(b){for(var _=Math.max(this.g.length,b.g.length),v=[],T=0,E=0;E<=_;E++){var I=T+(this.i(E)&65535)+(b.i(E)&65535),y=(I>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);T=y>>>16,I&=65535,y&=65535,v[E]=y<<16|I}return new a(v,v[v.length-1]&-2147483648?-1:0)};function x(b,_){return b.add(N(_))}n.j=function(b){if(C(this)||C(b))return g;if(D(this))return D(b)?N(this).j(N(b)):N(N(this).j(b));if(D(b))return N(this.j(N(b)));if(0>this.l(S)&&0>b.l(S))return h(this.m()*b.m());for(var _=this.g.length+b.g.length,v=[],T=0;T<2*_;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var E=0;E<b.g.length;E++){var I=this.i(T)>>>16,y=this.i(T)&65535,ye=b.i(E)>>>16,Kt=b.i(E)&65535;v[2*T+2*E]+=y*Kt,O(v,2*T+2*E),v[2*T+2*E+1]+=I*Kt,O(v,2*T+2*E+1),v[2*T+2*E+1]+=y*ye,O(v,2*T+2*E+1),v[2*T+2*E+2]+=I*ye,O(v,2*T+2*E+2)}for(T=0;T<_;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=_;T<2*_;T++)v[T]=0;return new a(v,0)};function O(b,_){for(;(b[_]&65535)!=b[_];)b[_+1]+=b[_]>>>16,b[_]&=65535,_++}function $(b,_){this.g=b,this.h=_}function H(b,_){if(C(_))throw Error("division by zero");if(C(b))return new $(g,g);if(D(b))return _=H(N(b),_),new $(N(_.g),N(_.h));if(D(_))return _=H(b,N(_)),new $(N(_.g),_.h);if(30<b.g.length){if(D(b)||D(_))throw Error("slowDivide_ only works with positive integers.");for(var v=w,T=_;0>=T.l(b);)v=me(v),T=me(T);var E=te(v,1),I=te(T,1);for(T=te(T,2),v=te(v,2);!C(T);){var y=I.add(T);0>=y.l(b)&&(E=E.add(v),I=y),T=te(T,1),v=te(v,1)}return _=x(b,E.j(_)),new $(E,_)}for(E=g;0<=b.l(_);){for(v=Math.max(1,Math.floor(b.m()/_.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),I=h(v),y=I.j(_);D(y)||0<y.l(b);)v-=T,I=h(v),y=I.j(_);C(I)&&(I=w),E=E.add(I),b=x(b,y)}return new $(E,b)}n.A=function(b){return H(this,b).h},n.and=function(b){for(var _=Math.max(this.g.length,b.g.length),v=[],T=0;T<_;T++)v[T]=this.i(T)&b.i(T);return new a(v,this.h&b.h)},n.or=function(b){for(var _=Math.max(this.g.length,b.g.length),v=[],T=0;T<_;T++)v[T]=this.i(T)|b.i(T);return new a(v,this.h|b.h)},n.xor=function(b){for(var _=Math.max(this.g.length,b.g.length),v=[],T=0;T<_;T++)v[T]=this.i(T)^b.i(T);return new a(v,this.h^b.h)};function me(b){for(var _=b.g.length+1,v=[],T=0;T<_;T++)v[T]=b.i(T)<<1|b.i(T-1)>>>31;return new a(v,b.h)}function te(b,_){var v=_>>5;_%=32;for(var T=b.g.length-v,E=[],I=0;I<T;I++)E[I]=0<_?b.i(I+v)>>>_|b.i(I+v+1)<<32-_:b.i(I+v);return new a(E,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Td=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=p,Vt=a}).apply(typeof au<"u"?au:typeof self<"u"?self:typeof window<"u"?window:{});var bs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bd,_r,Id,Ds,Ko,Ad,Sd,kd;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,d){return o==Array.prototype||o==Object.prototype||(o[l]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof bs=="object"&&bs];for(var l=0;l<o.length;++l){var d=o[l];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var A=o[m];if(!(A in d))break e;d=d[A]}o=o[o.length-1],m=d[o],l=l(m),l!=m&&l!=null&&e(d,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var d=0,m=!1,A={next:function(){if(!m&&d<o.length){var k=d++;return{value:l(k,o[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function h(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function p(o,l,d){return o.call.apply(o.bind,arguments)}function g(o,l,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),o.apply(l,A)}}return function(){return o.apply(l,arguments)}}function w(o,l,d){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,w.apply(null,arguments)}function S(o,l){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function C(o,l){function d(){}d.prototype=l.prototype,o.aa=l.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,A,k){for(var V=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)V[Z-2]=arguments[Z];return l.prototype[A].apply(m,V)}}function D(o){const l=o.length;if(0<l){const d=Array(l);for(let m=0;m<l;m++)d[m]=o[m];return d}return[]}function N(o,l){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const A=o.length||0,k=m.length||0;o.length=A+k;for(let V=0;V<k;V++)o[A+V]=m[V]}else o.push(m)}}class x{constructor(l,d){this.i=l,this.j=d,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function O(o){return/^[\s\xa0]*$/.test(o)}function $(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var me=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function te(o,l,d){for(const m in o)l.call(d,o[m],m,o)}function b(o,l){for(const d in o)l.call(void 0,o[d],d,o)}function _(o){const l={};for(const d in o)l[d]=o[d];return l}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,l){let d,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(d in m)o[d]=m[d];for(let k=0;k<v.length;k++)d=v[k],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function E(o){var l=1;o=o.split(":");const d=[];for(;0<l&&o.length;)d.push(o.shift()),l--;return o.length&&d.push(o.join(":")),d}function I(o){c.setTimeout(()=>{throw o},0)}function y(){var o=ji;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class ye{constructor(){this.h=this.g=null}add(l,d){const m=Kt.get();m.set(l,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Kt=new x(()=>new em,o=>o.reset());class em{constructor(){this.next=this.g=this.h=null}set(l,d){this.h=l,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Yn,Xn=!1,ji=new ye,Vc=()=>{const o=c.Promise.resolve(void 0);Yn=()=>{o.then(tm)}};var tm=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){I(d)}var l=Kt;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}Xn=!1};function bt(){this.s=this.s,this.C=this.C}bt.prototype.s=!1,bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function be(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var nm=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,l),c.removeEventListener("test",d,l)}catch{}return o})();function Zn(o,l){if(be.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(me){e:{try{H(l.nodeName);var A=!0;break e}catch{}A=!1}A||(l=null)}}else d=="mouseover"?l=o.fromElement:d=="mouseout"&&(l=o.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:rm[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Zn.aa.h.call(this)}}C(Zn,be);var rm={2:"touch",3:"pen",4:"mouse"};Zn.prototype.h=function(){Zn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ns="closure_listenable_"+(1e6*Math.random()|0),sm=0;function im(o,l,d,m,A){this.listener=o,this.proxy=null,this.src=l,this.type=d,this.capture=!!m,this.ha=A,this.key=++sm,this.da=this.fa=!1}function rs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ss(o){this.src=o,this.g={},this.h=0}ss.prototype.add=function(o,l,d,m,A){var k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);var V=Hi(o,l,m,A);return-1<V?(l=o[V],d||(l.fa=!1)):(l=new im(l,this.src,k,!!m,A),l.fa=d,o.push(l)),l};function qi(o,l){var d=l.type;if(d in o.g){var m=o.g[d],A=Array.prototype.indexOf.call(m,l,void 0),k;(k=0<=A)&&Array.prototype.splice.call(m,A,1),k&&(rs(l),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Hi(o,l,d,m){for(var A=0;A<o.length;++A){var k=o[A];if(!k.da&&k.listener==l&&k.capture==!!d&&k.ha==m)return A}return-1}var Ki="closure_lm_"+(1e6*Math.random()|0),Wi={};function Oc(o,l,d,m,A){if(Array.isArray(l)){for(var k=0;k<l.length;k++)Oc(o,l[k],d,m,A);return null}return d=xc(d),o&&o[ns]?o.K(l,d,h(m)?!!m.capture:!1,A):om(o,l,d,!1,m,A)}function om(o,l,d,m,A,k){if(!l)throw Error("Invalid event type");var V=h(A)?!!A.capture:!!A,Z=Qi(o);if(Z||(o[Ki]=Z=new ss(o)),d=Z.add(l,d,m,V,k),d.proxy)return d;if(m=am(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)nm||(A=V),A===void 0&&(A=!1),o.addEventListener(l.toString(),m,A);else if(o.attachEvent)o.attachEvent(Mc(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function am(){function o(d){return l.call(o.src,o.listener,d)}const l=cm;return o}function Lc(o,l,d,m,A){if(Array.isArray(l))for(var k=0;k<l.length;k++)Lc(o,l[k],d,m,A);else m=h(m)?!!m.capture:!!m,d=xc(d),o&&o[ns]?(o=o.i,l=String(l).toString(),l in o.g&&(k=o.g[l],d=Hi(k,d,m,A),-1<d&&(rs(k[d]),Array.prototype.splice.call(k,d,1),k.length==0&&(delete o.g[l],o.h--)))):o&&(o=Qi(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Hi(l,d,m,A)),(d=-1<o?l[o]:null)&&Gi(d))}function Gi(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[ns])qi(l.i,o);else{var d=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(d,m,o.capture):l.detachEvent?l.detachEvent(Mc(d),m):l.addListener&&l.removeListener&&l.removeListener(m),(d=Qi(l))?(qi(d,o),d.h==0&&(d.src=null,l[Ki]=null)):rs(o)}}}function Mc(o){return o in Wi?Wi[o]:Wi[o]="on"+o}function cm(o,l){if(o.da)o=!0;else{l=new Zn(l,this);var d=o.listener,m=o.ha||o.src;o.fa&&Gi(o),o=d.call(m,l)}return o}function Qi(o){return o=o[Ki],o instanceof ss?o:null}var Ji="__closure_events_fn_"+(1e9*Math.random()>>>0);function xc(o){return typeof o=="function"?o:(o[Ji]||(o[Ji]=function(l){return o.handleEvent(l)}),o[Ji])}function Ie(){bt.call(this),this.i=new ss(this),this.M=this,this.F=null}C(Ie,bt),Ie.prototype[ns]=!0,Ie.prototype.removeEventListener=function(o,l,d,m){Lc(this,o,l,d,m)};function De(o,l){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new be(l,o);else if(l instanceof be)l.target=l.target||o;else{var A=l;l=new be(m,o),T(l,A)}if(A=!0,d)for(var k=d.length-1;0<=k;k--){var V=l.g=d[k];A=is(V,m,!0,l)&&A}if(V=l.g=o,A=is(V,m,!0,l)&&A,A=is(V,m,!1,l)&&A,d)for(k=0;k<d.length;k++)V=l.g=d[k],A=is(V,m,!1,l)&&A}Ie.prototype.N=function(){if(Ie.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var d=o.g[l],m=0;m<d.length;m++)rs(d[m]);delete o.g[l],o.h--}}this.F=null},Ie.prototype.K=function(o,l,d,m){return this.i.add(String(o),l,!1,d,m)},Ie.prototype.L=function(o,l,d,m){return this.i.add(String(o),l,!0,d,m)};function is(o,l,d,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var A=!0,k=0;k<l.length;++k){var V=l[k];if(V&&!V.da&&V.capture==d){var Z=V.listener,ve=V.ha||V.src;V.fa&&qi(o.i,V),A=Z.call(ve,m)!==!1&&A}}return A&&!m.defaultPrevented}function Fc(o,l,d){if(typeof o=="function")d&&(o=w(o,d));else if(o&&typeof o.handleEvent=="function")o=w(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function Uc(o){o.g=Fc(()=>{o.g=null,o.i&&(o.i=!1,Uc(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class lm extends bt{constructor(l,d){super(),this.m=l,this.l=d,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:Uc(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function er(o){bt.call(this),this.h=o,this.g={}}C(er,bt);var Bc=[];function $c(o){te(o.g,function(l,d){this.g.hasOwnProperty(d)&&Gi(l)},o),o.g={}}er.prototype.N=function(){er.aa.N.call(this),$c(this)},er.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Yi=c.JSON.stringify,um=c.JSON.parse,hm=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Xi(){}Xi.prototype.h=null;function zc(o){return o.h||(o.h=o.i())}function jc(){}var tr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zi(){be.call(this,"d")}C(Zi,be);function eo(){be.call(this,"c")}C(eo,be);var Wt={},qc=null;function os(){return qc=qc||new Ie}Wt.La="serverreachability";function Hc(o){be.call(this,Wt.La,o)}C(Hc,be);function nr(o){const l=os();De(l,new Hc(l))}Wt.STAT_EVENT="statevent";function Kc(o,l){be.call(this,Wt.STAT_EVENT,o),this.stat=l}C(Kc,be);function Ne(o){const l=os();De(l,new Kc(l,o))}Wt.Ma="timingevent";function Wc(o,l){be.call(this,Wt.Ma,o),this.size=l}C(Wc,be);function rr(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function sr(){this.g=!0}sr.prototype.xa=function(){this.g=!1};function dm(o,l,d,m,A,k){o.info(function(){if(o.g)if(k)for(var V="",Z=k.split("&"),ve=0;ve<Z.length;ve++){var Y=Z[ve].split("=");if(1<Y.length){var Ae=Y[0];Y=Y[1];var Se=Ae.split("_");V=2<=Se.length&&Se[1]=="type"?V+(Ae+"="+Y+"&"):V+(Ae+"=redacted&")}}else V=null;else V=k;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+l+`
`+d+`
`+V})}function fm(o,l,d,m,A,k,V){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+l+`
`+d+`
`+k+" "+V})}function En(o,l,d,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+mm(o,d)+(m?" "+m:"")})}function pm(o,l){o.info(function(){return"TIMEOUT: "+l})}sr.prototype.info=function(){};function mm(o,l){if(!o.g)return l;if(!l)return null;try{var d=JSON.parse(l);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var k=A[0];if(k!="noop"&&k!="stop"&&k!="close")for(var V=1;V<A.length;V++)A[V]=""}}}}return Yi(d)}catch{return l}}var as={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},to;function cs(){}C(cs,Xi),cs.prototype.g=function(){return new XMLHttpRequest},cs.prototype.i=function(){return{}},to=new cs;function It(o,l,d,m){this.j=o,this.i=l,this.l=d,this.R=m||1,this.U=new er(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Qc}function Qc(){this.i=null,this.g="",this.h=!1}var Jc={},no={};function ro(o,l,d){o.L=1,o.v=ds(ut(l)),o.m=d,o.P=!0,Yc(o,null)}function Yc(o,l){o.F=Date.now(),ls(o),o.A=ut(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),hl(d.i,"t",m),o.C=0,d=o.j.J,o.h=new Qc,o.g=Pl(o.j,d?l:null,!o.m),0<o.O&&(o.M=new lm(w(o.Y,o,o.g),o.O)),l=o.U,d=o.g,m=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(Bc[0]=A.toString()),A=Bc);for(var k=0;k<A.length;k++){var V=Oc(d,A[k],m||l.handleEvent,!1,l.h||l);if(!V)break;l.g[V.key]=V}l=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),nr(),dm(o.i,o.u,o.A,o.l,o.R,o.m)}It.prototype.ca=function(o){o=o.target;const l=this.M;l&&ht(o)==3?l.j():this.Y(o)},It.prototype.Y=function(o){try{if(o==this.g)e:{const Se=ht(this.g);var l=this.g.Ba();const In=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||yl(this.g)))){this.J||Se!=4||l==7||(l==8||0>=In?nr(3):nr(2)),so(this);var d=this.g.Z();this.X=d;t:if(Xc(this)){var m=yl(this.g);o="";var A=m.length,k=ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Gt(this),ir(this);var V="";break t}this.h.i=new c.TextDecoder}for(l=0;l<A;l++)this.h.h=!0,o+=this.h.i.decode(m[l],{stream:!(k&&l==A-1)});m.length=0,this.h.g+=o,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=d==200,fm(this.i,this.u,this.A,this.l,this.R,Se,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Z,ve=this.g;if((Z=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Z)){var Y=Z;break t}}Y=null}if(d=Y)En(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,io(this,d);else{this.o=!1,this.s=3,Ne(12),Gt(this),ir(this);break e}}if(this.P){d=!0;let je;for(;!this.J&&this.C<V.length;)if(je=gm(this,V),je==no){Se==4&&(this.s=4,Ne(14),d=!1),En(this.i,this.l,null,"[Incomplete Response]");break}else if(je==Jc){this.s=4,Ne(15),En(this.i,this.l,V,"[Invalid Chunk]"),d=!1;break}else En(this.i,this.l,je,null),io(this,je);if(Xc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||V.length!=0||this.h.h||(this.s=1,Ne(16),d=!1),this.o=this.o&&d,!d)En(this.i,this.l,V,"[Invalid Chunked Response]"),Gt(this),ir(this);else if(0<V.length&&!this.W){this.W=!0;var Ae=this.j;Ae.g==this&&Ae.ba&&!Ae.M&&(Ae.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),ho(Ae),Ae.M=!0,Ne(11))}}else En(this.i,this.l,V,null),io(this,V);Se==4&&Gt(this),this.o&&!this.J&&(Se==4?Al(this.j,this):(this.o=!1,ls(this)))}else Vm(this.g),d==400&&0<V.indexOf("Unknown SID")?(this.s=3,Ne(12)):(this.s=0,Ne(13)),Gt(this),ir(this)}}}catch{}finally{}};function Xc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function gm(o,l){var d=o.C,m=l.indexOf(`
`,d);return m==-1?no:(d=Number(l.substring(d,m)),isNaN(d)?Jc:(m+=1,m+d>l.length?no:(l=l.slice(m,m+d),o.C=m+d,l)))}It.prototype.cancel=function(){this.J=!0,Gt(this)};function ls(o){o.S=Date.now()+o.I,Zc(o,o.I)}function Zc(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=rr(w(o.ba,o),l)}function so(o){o.B&&(c.clearTimeout(o.B),o.B=null)}It.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(pm(this.i,this.A),this.L!=2&&(nr(),Ne(17)),Gt(this),this.s=2,ir(this)):Zc(this,this.S-o)};function ir(o){o.j.G==0||o.J||Al(o.j,o)}function Gt(o){so(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,$c(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function io(o,l){try{var d=o.j;if(d.G!=0&&(d.g==o||oo(d.h,o))){if(!o.K&&oo(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)ys(d),gs(d);else break e;uo(d),Ne(18)}}else d.za=A[1],0<d.za-d.T&&37500>A[2]&&d.F&&d.v==0&&!d.C&&(d.C=rr(w(d.Za,d),6e3));if(1>=nl(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Jt(d,11)}else if((o.K||d.g==o)&&ys(d),!O(l))for(A=d.Da.g.parse(l),l=0;l<A.length;l++){let Y=A[l];if(d.T=Y[0],Y=Y[1],d.G==2)if(Y[0]=="c"){d.K=Y[1],d.ia=Y[2];const Ae=Y[3];Ae!=null&&(d.la=Ae,d.j.info("VER="+d.la));const Se=Y[4];Se!=null&&(d.Aa=Se,d.j.info("SVER="+d.Aa));const In=Y[5];In!=null&&typeof In=="number"&&0<In&&(m=1.5*In,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const je=o.g;if(je){const ws=je.g?je.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ws){var k=m.h;k.g||ws.indexOf("spdy")==-1&&ws.indexOf("quic")==-1&&ws.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(ao(k,k.h),k.h=null))}if(m.D){const fo=je.g?je.g.getResponseHeader("X-HTTP-Session-Id"):null;fo&&(m.ya=fo,ne(m.I,m.D,fo))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var V=o;if(m.qa=Rl(m,m.J?m.ia:null,m.W),V.K){rl(m.h,V);var Z=V,ve=m.L;ve&&(Z.I=ve),Z.B&&(so(Z),ls(Z)),m.g=V}else bl(m);0<d.i.length&&_s(d)}else Y[0]!="stop"&&Y[0]!="close"||Jt(d,7);else d.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?Jt(d,7):lo(d):Y[0]!="noop"&&d.l&&d.l.ta(Y),d.v=0)}}nr(4)}catch{}}var _m=class{constructor(o,l){this.g=o,this.map=l}};function el(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function tl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function nl(o){return o.h?1:o.g?o.g.size:0}function oo(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function ao(o,l){o.g?o.g.add(l):o.h=l}function rl(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}el.prototype.cancel=function(){if(this.i=sl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function sl(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const d of o.g.values())l=l.concat(d.D);return l}return D(o.i)}function ym(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],d=o.length,m=0;m<d;m++)l.push(o[m]);return l}l=[],d=0;for(m in o)l[d++]=o[m];return l}function vm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var d=0;d<o;d++)l.push(d);return l}l=[],d=0;for(const m in o)l[d++]=m;return l}}}function il(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var d=vm(o),m=ym(o),A=m.length,k=0;k<A;k++)l.call(void 0,m[k],d&&d[k],o)}var ol=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wm(o,l){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),A=null;if(0<=m){var k=o[d].substring(0,m);A=o[d].substring(m+1)}else k=o[d];l(k,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Qt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Qt){this.h=o.h,us(this,o.j),this.o=o.o,this.g=o.g,hs(this,o.s),this.l=o.l;var l=o.i,d=new cr;d.i=l.i,l.g&&(d.g=new Map(l.g),d.h=l.h),al(this,d),this.m=o.m}else o&&(l=String(o).match(ol))?(this.h=!1,us(this,l[1]||"",!0),this.o=or(l[2]||""),this.g=or(l[3]||"",!0),hs(this,l[4]),this.l=or(l[5]||"",!0),al(this,l[6]||"",!0),this.m=or(l[7]||"")):(this.h=!1,this.i=new cr(null,this.h))}Qt.prototype.toString=function(){var o=[],l=this.j;l&&o.push(ar(l,cl,!0),":");var d=this.g;return(d||l=="file")&&(o.push("//"),(l=this.o)&&o.push(ar(l,cl,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(ar(d,d.charAt(0)=="/"?bm:Tm,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",ar(d,Am)),o.join("")};function ut(o){return new Qt(o)}function us(o,l,d){o.j=d?or(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function hs(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function al(o,l,d){l instanceof cr?(o.i=l,Sm(o.i,o.h)):(d||(l=ar(l,Im)),o.i=new cr(l,o.h))}function ne(o,l,d){o.i.set(l,d)}function ds(o){return ne(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function or(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ar(o,l,d){return typeof o=="string"?(o=encodeURI(o).replace(l,Em),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Em(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var cl=/[#\/\?@]/g,Tm=/[#\?:]/g,bm=/[#\?]/g,Im=/[#\?@]/g,Am=/#/g;function cr(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function At(o){o.g||(o.g=new Map,o.h=0,o.i&&wm(o.i,function(l,d){o.add(decodeURIComponent(l.replace(/\+/g," ")),d)}))}n=cr.prototype,n.add=function(o,l){At(this),this.i=null,o=Tn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(l),this.h+=1,this};function ll(o,l){At(o),l=Tn(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function ul(o,l){return At(o),l=Tn(o,l),o.g.has(l)}n.forEach=function(o,l){At(this),this.g.forEach(function(d,m){d.forEach(function(A){o.call(l,A,m,this)},this)},this)},n.na=function(){At(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),d=[];for(let m=0;m<l.length;m++){const A=o[m];for(let k=0;k<A.length;k++)d.push(l[m])}return d},n.V=function(o){At(this);let l=[];if(typeof o=="string")ul(this,o)&&(l=l.concat(this.g.get(Tn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)l=l.concat(o[d])}return l},n.set=function(o,l){return At(this),this.i=null,o=Tn(this,o),ul(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function hl(o,l,d){ll(o,l),0<d.length&&(o.i=null,o.g.set(Tn(o,l),D(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var d=0;d<l.length;d++){var m=l[d];const k=encodeURIComponent(String(m)),V=this.V(m);for(m=0;m<V.length;m++){var A=k;V[m]!==""&&(A+="="+encodeURIComponent(String(V[m]))),o.push(A)}}return this.i=o.join("&")};function Tn(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Sm(o,l){l&&!o.j&&(At(o),o.i=null,o.g.forEach(function(d,m){var A=m.toLowerCase();m!=A&&(ll(this,m),hl(this,A,d))},o)),o.j=l}function km(o,l){const d=new sr;if(c.Image){const m=new Image;m.onload=S(St,d,"TestLoadImage: loaded",!0,l,m),m.onerror=S(St,d,"TestLoadImage: error",!1,l,m),m.onabort=S(St,d,"TestLoadImage: abort",!1,l,m),m.ontimeout=S(St,d,"TestLoadImage: timeout",!1,l,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function Rm(o,l){const d=new sr,m=new AbortController,A=setTimeout(()=>{m.abort(),St(d,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(k=>{clearTimeout(A),k.ok?St(d,"TestPingServer: ok",!0,l):St(d,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(A),St(d,"TestPingServer: error",!1,l)})}function St(o,l,d,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(d)}catch{}}function Pm(){this.g=new hm}function Cm(o,l,d){const m=d||"";try{il(o,function(A,k){let V=A;h(A)&&(V=Yi(A)),l.push(m+k+"="+encodeURIComponent(V))})}catch(A){throw l.push(m+"type="+encodeURIComponent("_badmap")),A}}function fs(o){this.l=o.Ub||null,this.j=o.eb||!1}C(fs,Xi),fs.prototype.g=function(){return new ps(this.l,this.j)},fs.prototype.i=(function(o){return function(){return o}})({});function ps(o,l){Ie.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(ps,Ie),n=ps.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,ur(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ur(this)),this.g&&(this.readyState=3,ur(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dl(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function dl(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?lr(this):ur(this),this.readyState==3&&dl(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,lr(this))},n.Qa=function(o){this.g&&(this.response=o,lr(this))},n.ga=function(){this.g&&lr(this)};function lr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ur(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var d=l.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=l.next();return o.join(`\r
`)};function ur(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ps.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function fl(o){let l="";return te(o,function(d,m){l+=m,l+=":",l+=d,l+=`\r
`}),l}function co(o,l,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=fl(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ne(o,l,d))}function ie(o){Ie.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(ie,Ie);var Dm=/^https?$/i,Nm=["POST","PUT"];n=ie.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():to.g(),this.v=this.o?zc(this.o):zc(to),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(k){pl(this,k);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)d.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())d.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),A=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Nm,l,void 0))||m||A||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,V]of d)this.g.setRequestHeader(k,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_l(this),this.u=!0,this.g.send(o),this.u=!1}catch(k){pl(this,k)}};function pl(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,ml(o),ms(o)}function ml(o){o.A||(o.A=!0,De(o,"complete"),De(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,De(this,"complete"),De(this,"abort"),ms(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ms(this,!0)),ie.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?gl(this):this.bb())},n.bb=function(){gl(this)};function gl(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ht(o)!=4||o.Z()!=2)){if(o.u&&ht(o)==4)Fc(o.Ea,0,o);else if(De(o,"readystatechange"),ht(o)==4){o.h=!1;try{const V=o.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var d;if(!(d=l)){var m;if(m=V===0){var A=String(o.D).match(ol)[1]||null;!A&&c.self&&c.self.location&&(A=c.self.location.protocol.slice(0,-1)),m=!Dm.test(A?A.toLowerCase():"")}d=m}if(d)De(o,"complete"),De(o,"success");else{o.m=6;try{var k=2<ht(o)?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.Z()+"]",ml(o)}}finally{ms(o)}}}}function ms(o,l){if(o.g){_l(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||De(o,"ready");try{d.onreadystatechange=m}catch{}}}function _l(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ht(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ht(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),um(l)}};function yl(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Vm(o){const l={};o=(o.g&&2<=ht(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(O(o[m]))continue;var d=E(o[m]);const A=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=l[A]||[];l[A]=k,k.push(d)}b(l,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hr(o,l,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||l}function vl(o){this.Aa=0,this.i=[],this.j=new sr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hr("baseRetryDelayMs",5e3,o),this.cb=hr("retryDelaySeedMs",1e4,o),this.Wa=hr("forwardChannelMaxRetries",2,o),this.wa=hr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new el(o&&o.concurrentRequestLimit),this.Da=new Pm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=vl.prototype,n.la=8,n.G=1,n.connect=function(o,l,d,m){Ne(0),this.W=o,this.H=l||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Rl(this,null,this.W),_s(this)};function lo(o){if(wl(o),o.G==3){var l=o.U++,d=ut(o.I);if(ne(d,"SID",o.K),ne(d,"RID",l),ne(d,"TYPE","terminate"),dr(o,d),l=new It(o,o.j,l),l.L=2,l.v=ds(ut(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=l.v,d=!0),d||(l.g=Pl(l.j,null),l.g.ea(l.v)),l.F=Date.now(),ls(l)}kl(o)}function gs(o){o.g&&(ho(o),o.g.cancel(),o.g=null)}function wl(o){gs(o),o.u&&(c.clearTimeout(o.u),o.u=null),ys(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function _s(o){if(!tl(o.h)&&!o.s){o.s=!0;var l=o.Ga;Yn||Vc(),Xn||(Yn(),Xn=!0),ji.add(l,o),o.B=0}}function Om(o,l){return nl(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=rr(w(o.Ga,o,l),Sl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new It(this,this.j,o);let k=this.o;if(this.S&&(k?(k=_(k),T(k,this.S)):k=this.S),this.m!==null||this.O||(A.H=k,k=null),this.P)e:{for(var l=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=d;break e}if(l===4096||d===this.i.length-1){l=d+1;break e}}l=1e3}else l=1e3;l=Tl(this,A,l),d=ut(this.I),ne(d,"RID",o),ne(d,"CVER",22),this.D&&ne(d,"X-HTTP-Session-Id",this.D),dr(this,d),k&&(this.O?l="headers="+encodeURIComponent(String(fl(k)))+"&"+l:this.m&&co(d,this.m,k)),ao(this.h,A),this.Ua&&ne(d,"TYPE","init"),this.P?(ne(d,"$req",l),ne(d,"SID","null"),A.T=!0,ro(A,d,null)):ro(A,d,l),this.G=2}}else this.G==3&&(o?El(this,o):this.i.length==0||tl(this.h)||El(this))};function El(o,l){var d;l?d=l.l:d=o.U++;const m=ut(o.I);ne(m,"SID",o.K),ne(m,"RID",d),ne(m,"AID",o.T),dr(o,m),o.m&&o.o&&co(m,o.m,o.o),d=new It(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),l&&(o.i=l.D.concat(o.i)),l=Tl(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ao(o.h,d),ro(d,m,l)}function dr(o,l){o.H&&te(o.H,function(d,m){ne(l,m,d)}),o.l&&il({},function(d,m){ne(l,m,d)})}function Tl(o,l,d){d=Math.min(o.i.length,d);var m=o.l?w(o.l.Na,o.l,o):null;e:{var A=o.i;let k=-1;for(;;){const V=["count="+d];k==-1?0<d?(k=A[0].g,V.push("ofs="+k)):k=0:V.push("ofs="+k);let Z=!0;for(let ve=0;ve<d;ve++){let Y=A[ve].g;const Ae=A[ve].map;if(Y-=k,0>Y)k=Math.max(0,A[ve].g-100),Z=!1;else try{Cm(Ae,V,"req"+Y+"_")}catch{m&&m(Ae)}}if(Z){m=V.join("&");break e}}}return o=o.i.splice(0,d),l.D=o,m}function bl(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;Yn||Vc(),Xn||(Yn(),Xn=!0),ji.add(l,o),o.v=0}}function uo(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=rr(w(o.Fa,o),Sl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Il(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=rr(w(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ne(10),gs(this),Il(this))};function ho(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Il(o){o.g=new It(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=ut(o.qa);ne(l,"RID","rpc"),ne(l,"SID",o.K),ne(l,"AID",o.T),ne(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&ne(l,"TO",o.ja),ne(l,"TYPE","xmlhttp"),dr(o,l),o.m&&o.o&&co(l,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=ds(ut(l)),d.m=null,d.P=!0,Yc(d,o)}n.Za=function(){this.C!=null&&(this.C=null,gs(this),uo(this),Ne(19))};function ys(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Al(o,l){var d=null;if(o.g==l){ys(o),ho(o),o.g=null;var m=2}else if(oo(o.h,l))d=l.D,rl(o.h,l),m=1;else return;if(o.G!=0){if(l.o)if(m==1){d=l.m?l.m.length:0,l=Date.now()-l.F;var A=o.B;m=os(),De(m,new Wc(m,d)),_s(o)}else bl(o);else if(A=l.s,A==3||A==0&&0<l.X||!(m==1&&Om(o,l)||m==2&&uo(o)))switch(d&&0<d.length&&(l=o.h,l.i=l.i.concat(d)),A){case 1:Jt(o,5);break;case 4:Jt(o,10);break;case 3:Jt(o,6);break;default:Jt(o,2)}}}function Sl(o,l){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*l}function Jt(o,l){if(o.j.info("Error code "+l),l==2){var d=w(o.fb,o),m=o.Xa;const A=!m;m=new Qt(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||us(m,"https"),ds(m),A?km(m.toString(),d):Rm(m.toString(),d)}else Ne(2);o.G=0,o.l&&o.l.sa(l),kl(o),wl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Ne(2)):(this.j.info("Failed to ping google.com"),Ne(1))};function kl(o){if(o.G=0,o.ka=[],o.l){const l=sl(o.h);(l.length!=0||o.i.length!=0)&&(N(o.ka,l),N(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Rl(o,l,d){var m=d instanceof Qt?ut(d):new Qt(d);if(m.g!="")l&&(m.g=l+"."+m.g),hs(m,m.s);else{var A=c.location;m=A.protocol,l=l?l+"."+A.hostname:A.hostname,A=+A.port;var k=new Qt(null);m&&us(k,m),l&&(k.g=l),A&&hs(k,A),d&&(k.l=d),m=k}return d=o.D,l=o.ya,d&&l&&ne(m,d,l),ne(m,"VER",o.la),dr(o,m),m}function Pl(o,l,d){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ie(new fs({eb:d})):new ie(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Cl(){}n=Cl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function vs(){}vs.prototype.g=function(o,l){return new Fe(o,l)};function Fe(o,l){Ie.call(this),this.g=new vl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!O(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!O(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new bn(this)}C(Fe,Ie),Fe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Fe.prototype.close=function(){lo(this.g)},Fe.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Yi(o),o=d);l.i.push(new _m(l.Ya++,o)),l.G==3&&_s(l)},Fe.prototype.N=function(){this.g.l=null,delete this.j,lo(this.g),delete this.g,Fe.aa.N.call(this)};function Dl(o){Zi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const d in l){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}C(Dl,Zi);function Nl(){eo.call(this),this.status=1}C(Nl,eo);function bn(o){this.g=o}C(bn,Cl),bn.prototype.ua=function(){De(this.g,"a")},bn.prototype.ta=function(o){De(this.g,new Dl(o))},bn.prototype.sa=function(o){De(this.g,new Nl)},bn.prototype.ra=function(){De(this.g,"b")},vs.prototype.createWebChannel=vs.prototype.g,Fe.prototype.send=Fe.prototype.o,Fe.prototype.open=Fe.prototype.m,Fe.prototype.close=Fe.prototype.close,kd=function(){return new vs},Sd=function(){return os()},Ad=Wt,Ko={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},as.NO_ERROR=0,as.TIMEOUT=8,as.HTTP_ERROR=6,Ds=as,Gc.COMPLETE="complete",Id=Gc,jc.EventType=tr,tr.OPEN="a",tr.CLOSE="b",tr.ERROR="c",tr.MESSAGE="d",Ie.prototype.listen=Ie.prototype.K,_r=jc,ie.prototype.listenOnce=ie.prototype.L,ie.prototype.getLastError=ie.prototype.Ka,ie.prototype.getLastErrorCode=ie.prototype.Ba,ie.prototype.getStatus=ie.prototype.Z,ie.prototype.getResponseJson=ie.prototype.Oa,ie.prototype.getResponseText=ie.prototype.oa,ie.prototype.send=ie.prototype.ea,ie.prototype.setWithCredentials=ie.prototype.Ha,bd=ie}).apply(typeof bs<"u"?bs:typeof self<"u"?self:typeof window<"u"?window:{});const cu="@firebase/firestore",lu="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Kn="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new ya("@firebase/firestore");function An(){return cn.logLevel}function M(n,...e){if(cn.logLevel<=K.DEBUG){const t=e.map(Ra);cn.debug(`Firestore (${Kn}): ${n}`,...t)}}function wt(n,...e){if(cn.logLevel<=K.ERROR){const t=e.map(Ra);cn.error(`Firestore (${Kn}): ${n}`,...t)}}function ln(n,...e){if(cn.logLevel<=K.WARN){const t=e.map(Ra);cn.warn(`Firestore (${Kn}): ${n}`,...t)}}function Ra(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function B(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Rd(n,r,t)}function Rd(n,e,t){let r=`FIRESTORE (${Kn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw wt(r),new Error(r)}function X(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Rd(e,s,r)}function j(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends lt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Gy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Oe.UNAUTHENTICATED)))}shutdown(){}}class Qy{constructor(e){this.t=e,this.currentUser=Oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){X(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Ot;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ot,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const u=i;e.enqueueRetryable((async()=>{await u.promise,await s(this.currentUser)}))},c=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((u=>c(u))),setTimeout((()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ot)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string",31837,{l:r}),new Wy(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string",2055,{h:e}),new Oe(e)}}class Jy{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Oe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Yy{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new Jy(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(Oe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class uu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xy{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,pt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){X(this.o===void 0,3512);const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new uu(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(X(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new uu(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function Pd(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Zy(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function q(n,e){return n<e?-1:n>e?1:0}function Wo(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return q(r,s);{const i=Pd(),a=ev(i.encode(hu(n,t)),i.encode(hu(e,t)));return a!==0?a:q(r,s)}}t+=r>65535?2:1}return q(n.length,e.length)}function hu(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function ev(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return q(n[t],e[t]);return q(n.length,e.length)}function Mn(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="__name__";class Ye{constructor(e,t,r){t===void 0?t=0:t>e.length&&B(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&B(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ye.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ye?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Ye.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return q(e.length,t.length)}static compareSegments(e,t){const r=Ye.isNumericId(e),s=Ye.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Ye.extractNumericId(e).compare(Ye.extractNumericId(t)):Wo(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Vt.fromString(e.substring(4,e.length-2))}}class ee extends Ye{construct(e,t,r){return new ee(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new ee(t)}static emptyPath(){return new ee([])}}const tv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ee extends Ye{construct(e,t,r){return new Ee(e,t,r)}static isValidIdentifier(e){return tv.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ee.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===du}static keyField(){return new Ee([du])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new L(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new L(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ee(t)}static emptyPath(){return new Ee([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Cd(n,e,t){if(!t)throw new L(R.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function nv(n,e,t,r){if(e===!0&&r===!0)throw new L(R.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function fu(n){if(!F.isDocumentKey(n))throw new L(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pu(n){if(F.isDocumentKey(n))throw new L(R.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Dd(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function vi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":B(12329,{type:typeof n})}function _t(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=vi(n);throw new L(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function rv(n,e){if(e<=0)throw new L(R.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */function he(n,e){const t={typeString:n};return e&&(t.value=e),t}function Gr(n,e){if(!Dd(n))throw new L(R.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new L(R.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=-62135596800,gu=1e6;class re{static now(){return re.fromMillis(Date.now())}static fromDate(e){return re.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*gu);return new re(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<mu)throw new L(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gu}_compareTo(e){return this.seconds===e.seconds?q(this.nanoseconds,e.nanoseconds):q(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:re._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Gr(e,re._jsonSchema))return new re(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-mu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}re._jsonSchemaVersion="firestore/timestamp/1.0",re._jsonSchema={type:he("string",re._jsonSchemaVersion),seconds:he("number"),nanoseconds:he("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Or=-1;function sv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new re(t+1,0):new re(t,r));return new xt(s,F.empty(),e)}function iv(n){return new xt(n.readTime,n.key,Or)}class xt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new xt(z.min(),F.empty(),Or)}static max(){return new xt(z.max(),F.empty(),Or)}}function ov(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=F.comparator(n.documentKey,e.documentKey),t!==0?t:q(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(n){if(n.code!==R.FAILED_PRECONDITION||n.message!==av)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&B(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,r)=>{t(e)}))}static reject(e){return new P(((t,r)=>{r(e)}))}static waitFor(e){return new P(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(u=>r(u)))})),a=!0,i===s&&t()}))}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next((s=>s?P.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new P(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const h=u;t(e[h]).next((p=>{a[h]=p,++c,c===i&&r(a)}),(p=>s(p)))}}))}static doWhile(e,t){return new P(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function lv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Gn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class wi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}wi.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca=-1;function Ei(n){return n==null}function Qs(n){return n===0&&1/n==-1/0}function uv(n){return typeof n=="number"&&Number.isInteger(n)&&!Qs(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="";function hv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=_u(e)),e=dv(n.get(t),e);return _u(e)}function dv(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Nd:t+="";break;default:t+=i}}return t}function _u(n){return n+Nd+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function jt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Vd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new se(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Is(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Is(this.root,e,this.comparator,!1)}getReverseIterator(){return new Is(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Is(this.root,e,this.comparator,!0)}}class Is{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??we.RED,this.left=s??we.EMPTY,this.right=i??we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new we(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return we.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw B(43730,{key:this.key,value:this.value});if(this.right.isRed())throw B(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw B(27949);return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw B(57766)}get value(){throw B(16141)}get color(){throw B(16727)}get left(){throw B(29726)}get right(){throw B(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.comparator=e,this.data=new se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new vu(this.data.getIterator())}getIteratorFrom(e){return new vu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new pe(this.comparator);return t.data=e,t}}class vu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.fields=e,e.sort(Ee.comparator)}static empty(){return new Ue([])}unionWith(e){let t=new pe(Ee.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ue(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Mn(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class Od extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Od("Invalid base64 string: "+i):i}})(e);return new Te(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Te(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return q(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Te.EMPTY_BYTE_STRING=new Te("");const fv=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ft(n){if(X(!!n,39018),typeof n=="string"){let e=0;const t=fv.exec(n);if(X(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:oe(n.seconds),nanos:oe(n.nanos)}}function oe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ut(n){return typeof n=="string"?Te.fromBase64String(n):Te.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="server_timestamp",Md="__type__",xd="__previous_value__",Fd="__local_write_time__";function Da(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Md])===null||t===void 0?void 0:t.stringValue)===Ld}function Ti(n){const e=n.mapValue.fields[xd];return Da(e)?Ti(e):e}function Lr(n){const e=Ft(n.mapValue.fields[Fd].timestampValue);return new re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e,t,r,s,i,a,c,u,h,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=p}}const Js="(default)";class Mr{constructor(e,t){this.projectId=e,this.database=t||Js}static empty(){return new Mr("","")}get isDefaultDatabase(){return this.database===Js}isEqual(e){return e instanceof Mr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="__type__",mv="__max__",As={mapValue:{}},Bd="__vector__",Ys="value";function Bt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Da(n)?4:_v(n)?9007199254740991:gv(n)?10:11:B(28295,{value:n})}function at(n,e){if(n===e)return!0;const t=Bt(n);if(t!==Bt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Lr(n).isEqual(Lr(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Ft(s.timestampValue),c=Ft(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Ut(s.bytesValue).isEqual(Ut(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return oe(s.geoPointValue.latitude)===oe(i.geoPointValue.latitude)&&oe(s.geoPointValue.longitude)===oe(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return oe(s.integerValue)===oe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=oe(s.doubleValue),c=oe(i.doubleValue);return a===c?Qs(a)===Qs(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return Mn(n.arrayValue.values||[],e.arrayValue.values||[],at);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(yu(a)!==yu(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!at(a[u],c[u])))return!1;return!0})(n,e);default:return B(52216,{left:n})}}function xr(n,e){return(n.values||[]).find((t=>at(t,e)))!==void 0}function xn(n,e){if(n===e)return 0;const t=Bt(n),r=Bt(e);if(t!==r)return q(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return q(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=oe(i.integerValue||i.doubleValue),u=oe(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1})(n,e);case 3:return wu(n.timestampValue,e.timestampValue);case 4:return wu(Lr(n),Lr(e));case 5:return Wo(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Ut(i),u=Ut(a);return c.compareTo(u)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),u=a.split("/");for(let h=0;h<c.length&&h<u.length;h++){const p=q(c[h],u[h]);if(p!==0)return p}return q(c.length,u.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=q(oe(i.latitude),oe(a.latitude));return c!==0?c:q(oe(i.longitude),oe(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Eu(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,u,h,p;const g=i.fields||{},w=a.fields||{},S=(c=g[Ys])===null||c===void 0?void 0:c.arrayValue,C=(u=w[Ys])===null||u===void 0?void 0:u.arrayValue,D=q(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((p=C==null?void 0:C.values)===null||p===void 0?void 0:p.length)||0);return D!==0?D:Eu(S,C)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===As.mapValue&&a===As.mapValue)return 0;if(i===As.mapValue)return 1;if(a===As.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),h=a.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const w=Wo(u[g],p[g]);if(w!==0)return w;const S=xn(c[u[g]],h[p[g]]);if(S!==0)return S}return q(u.length,p.length)})(n.mapValue,e.mapValue);default:throw B(23264,{le:t})}}function wu(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return q(n,e);const t=Ft(n),r=Ft(e),s=q(t.seconds,r.seconds);return s!==0?s:q(t.nanos,r.nanos)}function Eu(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=xn(t[s],r[s]);if(i)return i}return q(t.length,r.length)}function Fn(n){return Go(n)}function Go(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Ft(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ut(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return F.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Go(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Go(t.fields[a])}`;return s+"}"})(n.mapValue):B(61005,{value:n})}function Ns(n){switch(Bt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ti(n);return e?16+Ns(e):16;case 5:return 2*n.stringValue.length;case 6:return Ut(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+Ns(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return jt(r.fields,((i,a)=>{s+=i.length+Ns(a)})),s})(n.mapValue);default:throw B(13486,{value:n})}}function Tu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Qo(n){return!!n&&"integerValue"in n}function Na(n){return!!n&&"arrayValue"in n}function bu(n){return!!n&&"nullValue"in n}function Iu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Vs(n){return!!n&&"mapValue"in n}function gv(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ud])===null||t===void 0?void 0:t.stringValue)===Bd}function Tr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return jt(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Tr(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Tr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function _v(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===mv}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.value=e}static empty(){return new Me({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Vs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Tr(t)}setAll(e){let t=Ee.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Tr(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Vs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return at(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Vs(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){jt(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Me(Tr(this.value))}}function $d(n){const e=[];return jt(n.fields,((t,r)=>{const s=new Ee([t]);if(Vs(r)){const i=$d(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Ue(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Xs{constructor(e,t){this.position=e,this.inclusive=t}}function Au(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=F.comparator(F.fromName(a.referenceValue),t.key):r=xn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Su(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!at(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Fr{constructor(e,t="asc"){this.field=e,this.dir=t}}function yv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class zd{}class ue extends zd{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new wv(e,t,r):t==="array-contains"?new bv(e,r):t==="in"?new Iv(e,r):t==="not-in"?new Av(e,r):t==="array-contains-any"?new Sv(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ev(e,r):new Tv(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(xn(t,this.value)):t!==null&&Bt(this.value)===Bt(t)&&this.matchesComparison(xn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qe extends zd{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Qe(e,t)}matches(e){return jd(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function jd(n){return n.op==="and"}function qd(n){return vv(n)&&jd(n)}function vv(n){for(const e of n.filters)if(e instanceof Qe)return!1;return!0}function Jo(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+Fn(n.value);if(qd(n))return n.filters.map((e=>Jo(e))).join(",");{const e=n.filters.map((t=>Jo(t))).join(",");return`${n.op}(${e})`}}function Hd(n,e){return n instanceof ue?(function(r,s){return s instanceof ue&&r.op===s.op&&r.field.isEqual(s.field)&&at(r.value,s.value)})(n,e):n instanceof Qe?(function(r,s){return s instanceof Qe&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&Hd(a,s.filters[c])),!0):!1})(n,e):void B(19439)}function Kd(n){return n instanceof ue?(function(t){return`${t.field.canonicalString()} ${t.op} ${Fn(t.value)}`})(n):n instanceof Qe?(function(t){return t.op.toString()+" {"+t.getFilters().map(Kd).join(" ,")+"}"})(n):"Filter"}class wv extends ue{constructor(e,t,r){super(e,t,r),this.key=F.fromName(r.referenceValue)}matches(e){const t=F.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ev extends ue{constructor(e,t){super(e,"in",t),this.keys=Wd("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Tv extends ue{constructor(e,t){super(e,"not-in",t),this.keys=Wd("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Wd(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>F.fromName(r.referenceValue)))}class bv extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Na(t)&&xr(t.arrayValue,this.value)}}class Iv extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&xr(this.value.arrayValue,t)}}class Av extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(xr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!xr(this.value.arrayValue,t)}}class Sv extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Na(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>xr(this.value.arrayValue,r)))}}/**
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
 */class kv{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function ku(n,e=null,t=[],r=[],s=null,i=null,a=null){return new kv(n,e,t,r,s,i,a)}function Va(n){const e=j(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Jo(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Ei(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Fn(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Fn(r))).join(",")),e.Pe=t}return e.Pe}function Oa(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!yv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Hd(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Su(n.startAt,e.startAt)&&Su(n.endAt,e.endAt)}function Yo(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function Rv(n,e,t,r,s,i,a,c){return new Qn(n,e,t,r,s,i,a,c)}function La(n){return new Qn(n)}function Ru(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gd(n){return n.collectionGroup!==null}function br(n){const e=j(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new pe(Ee.comparator);return a.filters.forEach((u=>{u.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Fr(i,r))})),t.has(Ee.keyField().canonicalString())||e.Te.push(new Fr(Ee.keyField(),r))}return e.Te}function tt(n){const e=j(n);return e.Ie||(e.Ie=Pv(e,br(n))),e.Ie}function Pv(n,e){if(n.limitType==="F")return ku(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Fr(s.field,i)}));const t=n.endAt?new Xs(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Xs(n.startAt.position,n.startAt.inclusive):null;return ku(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Xo(n,e){const t=n.filters.concat([e]);return new Qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Zs(n,e,t){return new Qn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function bi(n,e){return Oa(tt(n),tt(e))&&n.limitType===e.limitType}function Qd(n){return`${Va(tt(n))}|lt:${n.limitType}`}function Sn(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Kd(s))).join(", ")}]`),Ei(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Fn(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Fn(s))).join(",")),`Target(${r})`})(tt(n))}; limitType=${n.limitType})`}function Ii(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):F.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of br(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,u){const h=Au(a,c,u);return a.inclusive?h<=0:h<0})(r.startAt,br(r),s)||r.endAt&&!(function(a,c,u){const h=Au(a,c,u);return a.inclusive?h>=0:h>0})(r.endAt,br(r),s))})(n,e)}function Cv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Jd(n){return(e,t)=>{let r=!1;for(const s of br(n)){const i=Dv(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Dv(n,e,t){const r=n.field.isKeyField()?F.comparator(e.key,t.key):(function(i,a,c){const u=a.data.field(i),h=c.data.field(i);return u!==null&&h!==null?xn(u,h):B(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return B(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){jt(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Vd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=new se(F.comparator);function Et(){return Nv}const Yd=new se(F.comparator);function yr(...n){let e=Yd;for(const t of n)e=e.insert(t.key,t);return e}function Xd(n){let e=Yd;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function tn(){return Ir()}function Zd(){return Ir()}function Ir(){return new vn((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Vv=new se(F.comparator),Ov=new pe(F.comparator);function W(...n){let e=Ov;for(const t of n)e=e.add(t);return e}const Lv=new pe(q);function Mv(){return Lv}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qs(e)?"-0":e}}function ef(n){return{integerValue:""+n}}function xv(n,e){return uv(e)?ef(e):Ma(n,e)}/**
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
 */class Ai{constructor(){this._=void 0}}function Fv(n,e,t){return n instanceof Ur?(function(s,i){const a={fields:{[Md]:{stringValue:Ld},[Fd]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Da(i)&&(i=Ti(i)),i&&(a.fields[xd]=i),{mapValue:a}})(t,e):n instanceof Br?nf(n,e):n instanceof $r?rf(n,e):(function(s,i){const a=tf(s,i),c=Pu(a)+Pu(s.Ee);return Qo(a)&&Qo(s.Ee)?ef(c):Ma(s.serializer,c)})(n,e)}function Uv(n,e,t){return n instanceof Br?nf(n,e):n instanceof $r?rf(n,e):t}function tf(n,e){return n instanceof ei?(function(r){return Qo(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Ur extends Ai{}class Br extends Ai{constructor(e){super(),this.elements=e}}function nf(n,e){const t=sf(e);for(const r of n.elements)t.some((s=>at(s,r)))||t.push(r);return{arrayValue:{values:t}}}class $r extends Ai{constructor(e){super(),this.elements=e}}function rf(n,e){let t=sf(e);for(const r of n.elements)t=t.filter((s=>!at(s,r)));return{arrayValue:{values:t}}}class ei extends Ai{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Pu(n){return oe(n.integerValue||n.doubleValue)}function sf(n){return Na(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e,t){this.field=e,this.transform=t}}function $v(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof Br&&s instanceof Br||r instanceof $r&&s instanceof $r?Mn(r.elements,s.elements,at):r instanceof ei&&s instanceof ei?at(r.Ee,s.Ee):r instanceof Ur&&s instanceof Ur})(n.transform,e.transform)}class zv{constructor(e,t){this.version=e,this.transformResults=t}}class We{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new We}static exists(e){return new We(void 0,e)}static updateTime(e){return new We(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Os(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Si{}function of(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new xa(n.key,We.none()):new Qr(n.key,n.data,We.none());{const t=n.data,r=Me.empty();let s=new pe(Ee.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new qt(n.key,r,new Ue(s.toArray()),We.none())}}function jv(n,e,t){n instanceof Qr?(function(s,i,a){const c=s.value.clone(),u=Du(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof qt?(function(s,i,a){if(!Os(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Du(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(af(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Ar(n,e,t,r){return n instanceof Qr?(function(i,a,c,u){if(!Os(i.precondition,a))return c;const h=i.value.clone(),p=Nu(i.fieldTransforms,u,a);return h.setAll(p),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof qt?(function(i,a,c,u){if(!Os(i.precondition,a))return c;const h=Nu(i.fieldTransforms,u,a),p=a.data;return p.setAll(af(i)),p.setAll(h),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(n,e,t,r):(function(i,a,c){return Os(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function qv(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=tf(r.transform,s||null);i!=null&&(t===null&&(t=Me.empty()),t.set(r.field,i))}return t||null}function Cu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Mn(r,s,((i,a)=>$v(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Qr extends Si{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qt extends Si{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function af(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Du(n,e,t){const r=new Map;X(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,Uv(a,c,t[s]))}return r}function Nu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Fv(i,a,e))}return r}class xa extends Si{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Hv extends Si{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&jv(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ar(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ar(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Zd();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=of(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(z.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),W())}isEqual(e){return this.batchId===e.batchId&&Mn(this.mutations,e.mutations,((t,r)=>Cu(t,r)))&&Mn(this.baseMutations,e.baseMutations,((t,r)=>Cu(t,r)))}}class Fa{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){X(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return Vv})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Fa(e,t,r,s)}}/**
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
 */class Wv{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Gv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,Q;function Qv(n){switch(n){case R.OK:return B(64938);case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0;default:return B(15467,{code:n})}}function cf(n){if(n===void 0)return wt("GRPC error has no .code"),R.UNKNOWN;switch(n){case ce.OK:return R.OK;case ce.CANCELLED:return R.CANCELLED;case ce.UNKNOWN:return R.UNKNOWN;case ce.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case ce.INTERNAL:return R.INTERNAL;case ce.UNAVAILABLE:return R.UNAVAILABLE;case ce.UNAUTHENTICATED:return R.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case ce.NOT_FOUND:return R.NOT_FOUND;case ce.ALREADY_EXISTS:return R.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return R.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case ce.ABORTED:return R.ABORTED;case ce.OUT_OF_RANGE:return R.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return R.UNIMPLEMENTED;case ce.DATA_LOSS:return R.DATA_LOSS;default:return B(39323,{code:n})}}(Q=ce||(ce={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Jv=new Vt([4294967295,4294967295],0);function Vu(n){const e=Pd().encode(n),t=new Td;return t.update(e),new Uint8Array(t.digest())}function Ou(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Vt([t,r],0),new Vt([s,i],0)]}class Ua{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new vr(`Invalid padding: ${t}`);if(r<0)throw new vr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new vr(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Vt.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Vt.fromNumber(r)));return s.compare(Jv)===1&&(s=new Vt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Vu(e),[r,s]=Ou(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Ua(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const t=Vu(e),[r,s]=Ou(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class vr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Jr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ki(z.min(),s,new se(q),Et(),W())}}class Jr{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Jr(r,t,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class lf{constructor(e,t){this.targetId=e,this.De=t}}class uf{constructor(e,t,r=Te.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Lu{constructor(){this.ve=0,this.Ce=Mu(),this.Fe=Te.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=W(),t=W(),r=W();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:B(38017,{changeType:i})}})),new Jr(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Mu()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,X(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Yv{constructor(e){this.We=e,this.Ge=new Map,this.ze=Et(),this.je=Ss(),this.Je=Ss(),this.He=new se(q)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:B(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(Yo(i))if(r===0){const a=new F(i.path);this.Xe(t,a,Re.newNoDocument(a,z.min()))}else X(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const c=this._t(e),u=c?this.ut(c,e,a):1;if(u!==0){this.rt(t);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Ut(r).toUint8Array()}catch(u){if(u instanceof Od)return ln("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ua(a,s,i)}catch(u){return ln(u instanceof vr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&Yo(c.target)){const u=new F(c.target.path);this.Tt(u).has(a)||this.It(a,u)||this.Xe(a,u,Re.newNoDocument(u,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=W();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((u=>{const h=this.st(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new ki(e,t,this.He,this.ze,r);return this.ze=Et(),this.je=Ss(),this.Je=Ss(),this.He=new se(q),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Lu,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new pe(q),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new pe(q),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||M("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Lu),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Ss(){return new se(F.comparator)}function Mu(){return new se(F.comparator)}const Xv={asc:"ASCENDING",desc:"DESCENDING"},Zv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ew={and:"AND",or:"OR"};class tw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Zo(n,e){return n.useProto3Json||Ei(e)?e:{value:e}}function ti(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function hf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function nw(n,e){return ti(n,e.toTimestamp())}function nt(n){return X(!!n,49232),z.fromTimestamp((function(t){const r=Ft(t);return new re(r.seconds,r.nanos)})(n))}function Ba(n,e){return ea(n,e).canonicalString()}function ea(n,e){const t=(function(s){return new ee(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function df(n){const e=ee.fromString(n);return X(_f(e),10190,{key:e.toString()}),e}function ta(n,e){return Ba(n.databaseId,e.path)}function Ao(n,e){const t=df(e);if(t.get(1)!==n.databaseId.projectId)throw new L(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new F(pf(t))}function ff(n,e){return Ba(n.databaseId,e)}function rw(n){const e=df(n);return e.length===4?ee.emptyPath():pf(e)}function na(n){return new ee(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function pf(n){return X(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function xu(n,e,t){return{name:ta(n,e),fields:t.value.mapValue.fields}}function sw(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:B(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,p){return h.useProto3Json?(X(p===void 0||typeof p=="string",58123),Te.fromBase64String(p||"")):(X(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),Te.fromUint8Array(p||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const p=h.code===void 0?R.UNKNOWN:cf(h.code);return new L(p,h.message||"")})(a);t=new uf(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ao(n,r.document.name),i=nt(r.document.updateTime),a=r.document.createTime?nt(r.document.createTime):z.min(),c=new Me({mapValue:{fields:r.document.fields}}),u=Re.newFoundDocument(s,i,a,c),h=r.targetIds||[],p=r.removedTargetIds||[];t=new Ls(h,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ao(n,r.document),i=r.readTime?nt(r.readTime):z.min(),a=Re.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Ls([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ao(n,r.document),i=r.removedTargetIds||[];t=new Ls([],i,s,null)}else{if(!("filter"in e))return B(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new Gv(s,i),c=r.targetId;t=new lf(c,a)}}return t}function iw(n,e){let t;if(e instanceof Qr)t={update:xu(n,e.key,e.value)};else if(e instanceof xa)t={delete:ta(n,e.key)};else if(e instanceof qt)t={update:xu(n,e.key,e.data),updateMask:pw(e.fieldMask)};else{if(!(e instanceof Hv))return B(16599,{Rt:e.type});t={verify:ta(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof Ur)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Br)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof $r)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ei)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw B(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:nw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B(27497)})(n,e.precondition)),t}function ow(n,e){return n&&n.length>0?(X(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?nt(s.updateTime):nt(i);return a.isEqual(z.min())&&(a=nt(i)),new zv(a,s.transformResults||[])})(t,e)))):[]}function aw(n,e){return{documents:[ff(n,e.path)]}}function cw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ff(n,s);const i=(function(h){if(h.length!==0)return gf(Qe.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((p=>(function(w){return{field:kn(w.field),direction:hw(w.dir)}})(p)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Zo(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:s}}function lw(n){let e=rw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){X(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=(function(g){const w=mf(g);return w instanceof Qe&&qd(w)?w.getFilters():[w]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((w=>(function(C){return new Fr(Rn(C.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(w)))})(t.orderBy));let c=null;t.limit&&(c=(function(g){let w;return w=typeof g=="object"?g.value:g,Ei(w)?null:w})(t.limit));let u=null;t.startAt&&(u=(function(g){const w=!!g.before,S=g.values||[];return new Xs(S,w)})(t.startAt));let h=null;return t.endAt&&(h=(function(g){const w=!g.before,S=g.values||[];return new Xs(S,w)})(t.endAt)),Rv(e,s,a,i,c,"F",u,h)}function uw(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return B(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function mf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Rn(t.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Rn(t.unaryFilter.field);return ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rn(t.unaryFilter.field);return ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Rn(t.unaryFilter.field);return ue.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return B(61313);default:return B(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ue.create(Rn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return B(58110);default:return B(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Qe.create(t.compositeFilter.filters.map((r=>mf(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return B(1026)}})(t.compositeFilter.op))})(n):B(30097,{filter:n})}function hw(n){return Xv[n]}function dw(n){return Zv[n]}function fw(n){return ew[n]}function kn(n){return{fieldPath:n.canonicalString()}}function Rn(n){return Ee.fromServerFormat(n.fieldPath)}function gf(n){return n instanceof ue?(function(t){if(t.op==="=="){if(Iu(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NAN"}};if(bu(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Iu(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NOT_NAN"}};if(bu(t.value))return{unaryFilter:{field:kn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kn(t.field),op:dw(t.op),value:t.value}}})(n):n instanceof Qe?(function(t){const r=t.getFilters().map((s=>gf(s)));return r.length===1?r[0]:{compositeFilter:{op:fw(t.op),filters:r}}})(n):B(54877,{filter:n})}function pw(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function _f(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,t,r,s,i=z.min(),a=z.min(),c=Te.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Ct(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e){this.gt=e}}function gw(n){const e=lw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zs(e,e.limit,"L"):e}/**
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
 */class _w{constructor(){this.Dn=new yw}addToCollectionParentIndex(e,t){return this.Dn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(xt.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(xt.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class yw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new pe(ee.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new pe(ee.comparator)).toArray()}}/**
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
 */const Fu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},yf=41943040;class Le{static withCacheSize(e){return new Le(e,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Le.DEFAULT_COLLECTION_PERCENTILE=10,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Le.DEFAULT=new Le(yf,Le.DEFAULT_COLLECTION_PERCENTILE,Le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Le.DISABLED=new Le(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Un(0)}static ur(){return new Un(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="LruGarbageCollector",vf=1048576;function Bu([n,e],[t,r]){const s=q(n,t);return s===0?q(e,r):s}class vw{constructor(e){this.Tr=e,this.buffer=new pe(Bu),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Bu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class ww{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){M(Uu,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Gn(t)?M(Uu,"Ignoring IndexedDB error during garbage collection: ",t):await Wn(t)}await this.Rr(3e5)}))}}class Ew{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return P.resolve(wi.ue);const r=new vw(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(M("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Fu)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(M("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fu):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,c,u,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(M("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(r=g,c=Date.now(),this.removeTargets(e,r,t)))).next((g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,r)))).next((g=>(h=Date.now(),An()<=K.DEBUG&&M("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${g} documents in `+(h-u)+`ms
Total Duration: ${h-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function Tw(n,e){return new Ew(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(){this.changes=new vn((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Re.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Iw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Ar(r.mutation,s,Ue.empty(),re.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,W()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=W()){const s=tn();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=yr();return i.forEach(((c,u)=>{a=a.insert(c,u.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=tn();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,W())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=Et();const a=Ir(),c=(function(){return Ir()})();return t.forEach(((u,h)=>{const p=r.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof qt)?i=i.insert(h.key,h):p!==void 0?(a.set(h.key,p.mutation.getFieldMask()),Ar(p.mutation,h,p.mutation.getFieldMask(),re.now())):a.set(h.key,Ue.empty())})),this.recalculateAndSaveOverlays(e,i).next((u=>(u.forEach(((h,p)=>a.set(h,p))),t.forEach(((h,p)=>{var g;return c.set(h,new Iw(p,(g=a.get(h))!==null&&g!==void 0?g:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=Ir();let s=new se(((a,c)=>a-c)),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((u=>{const h=t.get(u);if(h===null)return;let p=r.get(u)||Ue.empty();p=c.applyToLocalView(h,p),r.set(u,p);const g=(s.get(c.batchId)||W()).add(u);s=s.insert(c.batchId,g)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,p=u.value,g=Zd();p.forEach((w=>{if(!i.has(w)){const S=of(t.get(w),r.get(w));S!==null&&g.set(w,S),i=i.add(w)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return P.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Gd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(tn());let c=Or,u=i;return a.next((h=>P.forEach(h,((p,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next((w=>{u=u.insert(p,w)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,u,h,W()))).next((p=>({batchId:c,changes:Xd(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new F(t)).next((r=>{let s=yr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=yr();return this.indexManager.getCollectionParents(e,i).next((c=>P.forEach(c,(u=>{const h=(function(g,w){return new Qn(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((p=>{p.forEach(((g,w)=>{a=a.insert(g,w)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((u,h)=>{const p=h.getKey();a.get(p)===null&&(a=a.insert(p,Re.newInvalidDocument(p)))}));let c=yr();return a.forEach(((u,h)=>{const p=i.get(u);p!==void 0&&Ar(p.mutation,h,Ue.empty(),re.now()),Ii(t,h)&&(c=c.insert(u,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return P.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:nt(s.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:gw(s.bundledQuery),readTime:nt(s.readTime)}})(t)),P.resolve()}}/**
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
 */class kw{constructor(){this.overlays=new se(F.comparator),this.kr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=tn();return P.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=tn(),i=t.length+1,a=new F(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new se(((h,p)=>h-p));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let p=i.get(h.largestBatchId);p===null&&(p=tn(),i=i.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const c=tn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach(((h,p)=>c.set(h,p))),!(c.size()>=s)););return P.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Wv(t,r));let i=this.kr.get(t);i===void 0&&(i=W(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
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
 */class Rw{constructor(){this.sessionToken=Te.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(){this.qr=new pe(ge.Qr),this.$r=new pe(ge.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new ge(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new ge(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new F(new ee([])),r=new ge(t,e),s=new ge(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new F(new ee([])),r=new ge(t,e),s=new ge(t,e+1);let i=W();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new ge(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ge{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return F.comparator(e.key,t.key)||q(e.Hr,t.Hr)}static Ur(e,t){return q(e.Hr,t.Hr)||F.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new pe(ge.Qr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Kv(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new ge(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Ca:this.er-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ge(t,0),s=new ge(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new pe(q);return t.forEach((s=>{const i=new ge(s,0),a=new ge(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),P.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;F.isDocumentKey(i)||(i=i.child(""));const a=new ge(new F(i),0);let c=new pe(q);return this.Yr.forEachWhile((u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(u.Hr)),!0)}),a),P.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){X(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return P.forEach(t.mutations,(s=>{const i=new ge(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new ge(t,0),s=this.Yr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.ni=e,this.docs=(function(){return new se(F.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Re.newInvalidDocument(t))}getEntries(e,t){let r=Et();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Re.newInvalidDocument(s))})),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Et();const a=t.path,c=new F(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||ov(iv(p),r)<=0||(s.has(p.key)||Ii(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){B(9500)}ri(e,t){return P.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new Dw(this)}getSize(e){return P.resolve(this.size)}}class Dw extends bw{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),P.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.persistence=e,this.ii=new vn((t=>Va(t)),Oa),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.si=0,this.oi=new $a,this.targetCount=0,this._i=Un.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),P.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Un(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.hr(t),P.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),P.waitFor(i).next((()=>s))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e,t){this.ai={},this.overlays={},this.ui=new wi(0),this.ci=!1,this.ci=!0,this.li=new Rw,this.referenceDelegate=e(this),this.hi=new Nw(this),this.indexManager=new _w,this.remoteDocumentCache=(function(s){return new Cw(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new mw(t),this.Ti=new Sw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new kw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Pw(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){M("MemoryPersistence","Starting transaction:",e);const s=new Vw(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return P.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Vw extends cv{constructor(e){super(),this.currentSequenceNumber=e}}class za{constructor(e){this.persistence=e,this.Ai=new $a,this.Ri=null}static Vi(e){return new za(e)}get mi(){if(this.Ri)return this.Ri;throw B(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.mi,(r=>{const s=F.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,z.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return P.or([()=>P.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ni{constructor(e,t){this.persistence=e,this.gi=new vn((r=>hv(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Tw(this,t)}static Vi(e,t){return new ni(e,t)}Ii(){}di(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return P.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?P.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((c=>{c||(r++,i.removeEntry(a,z.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),P.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ns(e.data.value)),t}Sr(e,t,r){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=W(),s=W();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ja(e,t.fromCache,r,s)}}/**
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
 */class Ow{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Lw{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Xm()?8:lv(xe())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Ow;return this.ws(e,t,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(An()<=K.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",Sn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(An()<=K.DEBUG&&M("QueryEngine","Query:",Sn(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(An()<=K.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",Sn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tt(t))):P.resolve())}ps(e,t){if(Ru(t))return P.resolve(null);let r=tt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=Zs(t,null,"F"),r=tt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=W(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((u=>{const h=this.bs(t,c);return this.Ds(t,h,a,u.readTime)?this.ps(e,Zs(t,null,"F")):this.vs(e,h,t,u)}))))})))))}ys(e,t,r,s){return Ru(t)||s.isEqual(z.min())?P.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?P.resolve(null):(An()<=K.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Sn(t)),this.vs(e,a,t,sv(s,Or)).next((c=>c)))}))}bs(e,t){let r=new pe(Jd(e));return t.forEach(((s,i)=>{Ii(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return An()<=K.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",Sn(t)),this.gs.getDocumentsMatchingQuery(e,t,xt.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="LocalStore",Mw=3e8;class xw{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new se(q),this.Ms=new vn((i=>Va(i)),Oa),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Aw(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function Fw(n,e,t,r){return new xw(n,e,t,r)}async function Ef(n,e){const t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let u=W();for(const h of s){a.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of i){c.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return t.localDocuments.getDocuments(r,u).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function Uw(n,e){const t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,u,h,p){const g=h.batch,w=g.keys();let S=P.resolve();return w.forEach((C=>{S=S.next((()=>p.getEntry(u,C))).next((D=>{const N=h.docVersions.get(C);X(N!==null,48541),D.version.compareTo(N)<0&&(g.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),p.addEntry(D)))}))})),S.next((()=>c.mutationQueue.removeMutationBatch(u,g)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let u=W();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(u=u.add(c.batch.mutations[h].key));return u})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Tf(n){const e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function Bw(n,e){const t=j(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const c=[];e.targetChanges.forEach(((p,g)=>{const w=s.get(g);if(!w)return;c.push(t.hi.removeMatchingKeys(i,p.removedDocuments,g).next((()=>t.hi.addMatchingKeys(i,p.addedDocuments,g))));let S=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(Te.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):p.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(p.resumeToken,r)),s=s.insert(g,S),(function(D,N,x){return D.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Mw?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0})(w,S,p)&&c.push(t.hi.updateTargetData(i,S))}));let u=Et(),h=W();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))})),c.push($w(i,a,e.documentUpdates).next((p=>{u=p.Ls,h=p.ks}))),!r.isEqual(z.min())){const p=t.hi.getLastRemoteSnapshotVersion(i).next((g=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(p)}return P.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,u,h))).next((()=>u))})).then((i=>(t.Fs=s,i)))}function $w(n,e,t){let r=W(),s=W();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=Et();return t.forEach(((c,u)=>{const h=i.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(z.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):M(qa,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)})),{Ls:a,ks:s}}))}function zw(n,e){const t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Ca),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function jw(n,e){const t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,P.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new Ct(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function ra(n,e,t){const r=j(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Gn(a))throw a;M(qa,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function $u(n,e,t){const r=j(n);let s=z.min(),i=W();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(u,h,p){const g=j(u),w=g.Ms.get(p);return w!==void 0?P.resolve(g.Fs.get(w)):g.hi.getTargetData(h,p)})(r,a,tt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((u=>{i=u}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:z.min(),t?i:W()))).next((c=>(qw(r,Cv(e),c),{documents:c,qs:i})))))}function qw(n,e,t){let r=n.xs.get(e)||z.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class zu{constructor(){this.activeTargetIds=Mv()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Hw{constructor(){this.Fo=new zu,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new zu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Kw{xo(e){}shutdown(){}}/**
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
 */const ju="ConnectivityMonitor";class qu{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){M(ju,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){M(ju,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ks=null;function sa(){return ks===null?ks=(function(){return 268435456+Math.round(2147483648*Math.random())})():ks++,"0x"+ks.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So="RestConnection",Ww={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Gw{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Js?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=sa(),c=this.Go(e,t.toUriEncodedString());M(So,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,s,i);const{host:h}=new URL(c),p=hi(h);return this.jo(e,c,u,r,p).then((g=>(M(So,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw ln(So,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",r),g}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Kn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=Ww[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="WebChannelConnection";class Jw extends Gw{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=sa();return new Promise(((c,u)=>{const h=new bd;h.setWithCredentials(!0),h.listenOnce(Id.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Ds.NO_ERROR:const g=h.getResponseJson();M(ke,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case Ds.TIMEOUT:M(ke,`RPC '${e}' ${a} timed out`),u(new L(R.DEADLINE_EXCEEDED,"Request time out"));break;case Ds.HTTP_ERROR:const w=h.getStatus();if(M(ke,`RPC '${e}' ${a} failed with status:`,w,"response text:",h.getResponseText()),w>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const D=(function(x){const O=x.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(O)>=0?O:R.UNKNOWN})(C.status);u(new L(D,C.message))}else u(new L(R.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new L(R.UNAVAILABLE,"Connection failed."));break;default:B(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{M(ke,`RPC '${e}' ${a} completed.`)}}));const p=JSON.stringify(s);M(ke,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",p,r,15)}))}P_(e,t,r){const s=sa(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=kd(),c=Sd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.zo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const p=i.join("");M(ke,`Creating RPC '${e}' stream ${s}: ${p}`,u);const g=a.createWebChannel(p,u);this.T_(g);let w=!1,S=!1;const C=new Qw({Ho:N=>{S?M(ke,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(w||(M(ke,`Opening RPC '${e}' stream ${s} transport.`),g.open(),w=!0),M(ke,`RPC '${e}' stream ${s} sending:`,N),g.send(N))},Yo:()=>g.close()}),D=(N,x,O)=>{N.listen(x,($=>{try{O($)}catch(H){setTimeout((()=>{throw H}),0)}}))};return D(g,_r.EventType.OPEN,(()=>{S||(M(ke,`RPC '${e}' stream ${s} transport opened.`),C.s_())})),D(g,_r.EventType.CLOSE,(()=>{S||(S=!0,M(ke,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(g))})),D(g,_r.EventType.ERROR,(N=>{S||(S=!0,ln(ke,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),C.__(new L(R.UNAVAILABLE,"The operation could not be completed")))})),D(g,_r.EventType.MESSAGE,(N=>{var x;if(!S){const O=N.data[0];X(!!O,16349);const $=O,H=($==null?void 0:$.error)||((x=$[0])===null||x===void 0?void 0:x.error);if(H){M(ke,`RPC '${e}' stream ${s} received error:`,H);const me=H.status;let te=(function(v){const T=ce[v];if(T!==void 0)return cf(T)})(me),b=H.message;te===void 0&&(te=R.INTERNAL,b="Unknown error status: "+me+" with message "+H.message),S=!0,C.__(new L(te,b)),g.close()}else M(ke,`RPC '${e}' stream ${s} received:`,O),C.a_(O)}})),D(c,Ad.STAT_EVENT,(N=>{N.stat===Ko.PROXY?M(ke,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Ko.NOPROXY&&M(ke,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.o_()}),0),C}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function ko(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(n){return new tw(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu="PersistentStream";class If{constructor(e,t,r,s,i,a,c,u){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new bf(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===R.RESOURCE_EXHAUSTED?(wt(t.toString()),wt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new L(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return M(Hu,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(M(Hu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Yw extends If{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=sw(this.serializer,e),r=(function(i){if(!("targetChange"in i))return z.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?nt(a.readTime):z.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=na(this.serializer),t.addTarget=(function(i,a){let c;const u=a.target;if(c=Yo(u)?{documents:aw(i,u)}:{query:cw(i,u).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=hf(i,a.resumeToken);const h=Zo(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(z.min())>0){c.readTime=ti(i,a.snapshotVersion.toTimestamp());const h=Zo(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=uw(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=na(this.serializer),t.removeTarget=e,this.k_(t)}}class Xw extends If{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return X(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,X(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){X(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=ow(e.writeResults,e.commitTime),r=nt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=na(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>iw(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{}class eE extends Zw{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new L(R.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,ea(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(R.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,ea(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(R.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class tE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(wt(t),this._a=!1):M("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="RemoteStore";class nE{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{wn(this)&&(M(un,"Restarting streams for network reachability change."),await(async function(u){const h=j(u);h.Ia.add(4),await Yr(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Pi(h)})(this))}))})),this.Aa=new tE(r,s)}}async function Pi(n){if(wn(n))for(const e of n.da)await e(!0)}async function Yr(n){for(const e of n.da)await e(!1)}function Af(n,e){const t=j(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Ga(t)?Wa(t):Jn(t).x_()&&Ka(t,e))}function Ha(n,e){const t=j(n),r=Jn(t);t.Ta.delete(e),r.x_()&&Sf(t,e),t.Ta.size===0&&(r.x_()?r.B_():wn(t)&&t.Aa.set("Unknown"))}function Ka(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Jn(n).H_(e)}function Sf(n,e){n.Ra.$e(e),Jn(n).Y_(e)}function Wa(n){n.Ra=new Yv({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Jn(n).start(),n.Aa.aa()}function Ga(n){return wn(n)&&!Jn(n).M_()&&n.Ta.size>0}function wn(n){return j(n).Ia.size===0}function kf(n){n.Ra=void 0}async function rE(n){n.Aa.set("Online")}async function sE(n){n.Ta.forEach(((e,t)=>{Ka(n,e)}))}async function iE(n,e){kf(n),Ga(n)?(n.Aa.la(e),Wa(n)):n.Aa.set("Unknown")}async function oE(n,e,t){if(n.Aa.set("Online"),e instanceof uf&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,e)}catch(r){M(un,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ri(n,r)}else if(e instanceof Ls?n.Ra.Ye(e):e instanceof lf?n.Ra.it(e):n.Ra.et(e),!t.isEqual(z.min()))try{const r=await Tf(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.Ta.get(h);p&&i.Ta.set(h,p.withResumeToken(u.resumeToken,a))}})),c.targetMismatches.forEach(((u,h)=>{const p=i.Ta.get(u);if(!p)return;i.Ta.set(u,p.withResumeToken(Te.EMPTY_BYTE_STRING,p.snapshotVersion)),Sf(i,u);const g=new Ct(p.target,u,h,p.sequenceNumber);Ka(i,g)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){M(un,"Failed to raise snapshot:",r),await ri(n,r)}}async function ri(n,e,t){if(!Gn(e))throw e;n.Ia.add(1),await Yr(n),n.Aa.set("Offline"),t||(t=()=>Tf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{M(un,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Pi(n)}))}function Rf(n,e){return e().catch((t=>ri(n,t,e)))}async function Ci(n){const e=j(n),t=$t(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Ca;for(;aE(e);)try{const s=await zw(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,cE(e,s)}catch(s){await ri(e,s)}Pf(e)&&Cf(e)}function aE(n){return wn(n)&&n.Pa.length<10}function cE(n,e){n.Pa.push(e);const t=$t(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Pf(n){return wn(n)&&!$t(n).M_()&&n.Pa.length>0}function Cf(n){$t(n).start()}async function lE(n){$t(n).na()}async function uE(n){const e=$t(n);for(const t of n.Pa)e.X_(t.mutations)}async function hE(n,e,t){const r=n.Pa.shift(),s=Fa.from(r,e,t);await Rf(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Ci(n)}async function dE(n,e){e&&$t(n).Z_&&await(async function(r,s){if((function(a){return Qv(a)&&a!==R.ABORTED})(s.code)){const i=r.Pa.shift();$t(r).N_(),await Rf(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ci(r)}})(n,e),Pf(n)&&Cf(n)}async function Ku(n,e){const t=j(n);t.asyncQueue.verifyOperationInProgress(),M(un,"RemoteStore received new credentials");const r=wn(t);t.Ia.add(3),await Yr(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Pi(t)}async function fE(n,e){const t=j(n);e?(t.Ia.delete(2),await Pi(t)):e||(t.Ia.add(2),await Yr(t),t.Aa.set("Unknown"))}function Jn(n){return n.Va||(n.Va=(function(t,r,s){const i=j(t);return i.ia(),new Yw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:rE.bind(null,n),e_:sE.bind(null,n),n_:iE.bind(null,n),J_:oE.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Ga(n)?Wa(n):n.Aa.set("Unknown")):(await n.Va.stop(),kf(n))}))),n.Va}function $t(n){return n.ma||(n.ma=(function(t,r,s){const i=j(t);return i.ia(),new Xw(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:lE.bind(null,n),n_:dE.bind(null,n),ea:uE.bind(null,n),ta:hE.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Ci(n)):(await n.ma.stop(),n.Pa.length>0&&(M(un,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new Qa(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ja(n,e){if(wt("AsyncQueue",`${e}: ${n}`),Gn(n))return new L(R.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{static emptySet(e){return new Vn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||F.comparator(t.key,r.key):(t,r)=>F.comparator(t.key,r.key),this.keyedMap=yr(),this.sortedSet=new se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Vn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(){this.fa=new se(F.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):B(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Bn{constructor(e,t,r,s,i,a,c,u,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new Bn(e,t,Vn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class mE{constructor(){this.queries=Gu(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=j(t),i=s.queries;s.queries=Gu(),i.forEach(((a,c)=>{for(const u of c.wa)u.onError(r)}))})(this,new L(R.ABORTED,"Firestore shutting down"))}}function Gu(){return new vn((n=>Qd(n)),bi)}async function Df(n,e){const t=j(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new pE,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Ja(a,`Initialization of query '${Sn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Ya(t)}async function Nf(n,e){const t=j(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function gE(n,e){const t=j(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&Ya(t)}function _E(n,e,t){const r=j(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function Ya(n){n.Da.forEach((e=>{e.next()}))}var ia,Qu;(Qu=ia||(ia={})).Fa="default",Qu.Cache="cache";class Vf{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Bn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Bn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==ia.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){this.key=e}}class Lf{constructor(e){this.key=e}}class yE{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=W(),this.mutatedKeys=W(),this.Xa=Jd(e),this.eu=new Vn(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Wu,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((p,g)=>{const w=s.get(p),S=Ii(this.query,g)?g:null,C=!!w&&this.mutatedKeys.has(w.key),D=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let N=!1;w&&S?w.data.isEqual(S.data)?C!==D&&(r.track({type:3,doc:S}),N=!0):this.iu(w,S)||(r.track({type:2,doc:S}),N=!0,(u&&this.Xa(S,u)>0||h&&this.Xa(S,h)<0)&&(c=!0)):!w&&S?(r.track({type:0,doc:S}),N=!0):w&&!S&&(r.track({type:1,doc:w}),N=!0,(u||h)&&(c=!0)),N&&(S?(a=a.add(S),i=D?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((p,g)=>(function(S,C){const D=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B(20277,{At:N})}};return D(S)-D(C)})(p.type,g.type)||this.Xa(p.doc,g.doc))),this.su(r),s=s!=null&&s;const c=t&&!s?this.ou():[],u=this.Za.size===0&&this.current&&!s?1:0,h=u!==this.Ya;return this.Ya=u,a.length!==0||h?{snapshot:new Bn(this.query,e.eu,i,a,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Wu,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=W(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new Lf(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new Of(r))})),t}uu(e){this.Ha=e.qs,this.Za=W();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Bn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Xa="SyncEngine";class vE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class wE{constructor(e){this.key=e,this.lu=!1}}class EE{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new vn((c=>Qd(c)),bi),this.Tu=new Map,this.Iu=new Set,this.du=new se(F.comparator),this.Eu=new Map,this.Au=new $a,this.Ru={},this.Vu=new Map,this.mu=Un.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function TE(n,e,t=!0){const r=$f(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Mf(r,e,t,!0),s}async function bE(n,e){const t=$f(n);await Mf(t,e,!0,!1)}async function Mf(n,e,t,r){const s=await jw(n.localStore,tt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await IE(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Af(n.remoteStore,s),c}async function IE(n,e,t,r,s){n.gu=(g,w,S)=>(async function(D,N,x,O){let $=N.view.nu(x);$.Ds&&($=await $u(D.localStore,N.query,!1).then((({documents:b})=>N.view.nu(b,$))));const H=O&&O.targetChanges.get(N.targetId),me=O&&O.targetMismatches.get(N.targetId)!=null,te=N.view.applyChanges($,D.isPrimaryClient,H,me);return Yu(D,N.targetId,te._u),te.snapshot})(n,g,w,S);const i=await $u(n.localStore,e,!0),a=new yE(e,i.qs),c=a.nu(i.documents),u=Jr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,u);Yu(n,t,h._u);const p=new vE(e,t,a);return n.Pu.set(e,p),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function AE(n,e,t){const r=j(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!bi(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ra(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Ha(r.remoteStore,s.targetId),oa(r,s.targetId)})).catch(Wn)):(oa(r,s.targetId),await ra(r.localStore,s.targetId,!0))}async function SE(n,e){const t=j(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ha(t.remoteStore,r.targetId))}async function kE(n,e,t){const r=OE(n);try{const s=await(function(a,c){const u=j(a),h=re.now(),p=c.reduce(((S,C)=>S.add(C.key)),W());let g,w;return u.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let C=Et(),D=W();return u.Os.getEntries(S,p).next((N=>{C=N,C.forEach(((x,O)=>{O.isValidDocument()||(D=D.add(x))}))})).next((()=>u.localDocuments.getOverlayedDocuments(S,C))).next((N=>{g=N;const x=[];for(const O of c){const $=qv(O,g.get(O.key).overlayedDocument);$!=null&&x.push(new qt(O.key,$,$d($.value.mapValue),We.exists(!0)))}return u.mutationQueue.addMutationBatch(S,h,x,c)})).next((N=>{w=N;const x=N.applyToLocalDocumentSet(g,D);return u.documentOverlayCache.saveOverlays(S,N.batchId,x)}))})).then((()=>({batchId:w.batchId,changes:Xd(g)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,u){let h=a.Ru[a.currentUser.toKey()];h||(h=new se(q)),h=h.insert(c,u),a.Ru[a.currentUser.toKey()]=h})(r,s.batchId,t),await Xr(r,s.changes),await Ci(r.remoteStore)}catch(s){const i=Ja(s,"Failed to persist write");t.reject(i)}}async function xf(n,e){const t=j(n);try{const r=await Bw(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(X(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?X(a.lu,14607):s.removedDocuments.size>0&&(X(a.lu,42227),a.lu=!1))})),await Xr(t,r,e)}catch(r){await Wn(r)}}function Ju(n,e,t){const r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const u=j(a);u.onlineState=c;let h=!1;u.queries.forEach(((p,g)=>{for(const w of g.wa)w.va(c)&&(h=!0)})),h&&Ya(u)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function RE(n,e,t){const r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new se(F.comparator);a=a.insert(i,Re.newNoDocument(i,z.min()));const c=W().add(i),u=new ki(z.min(),new Map,new se(q),a,c);await xf(r,u),r.du=r.du.remove(i),r.Eu.delete(e),Za(r)}else await ra(r.localStore,e,!1).then((()=>oa(r,e,t))).catch(Wn)}async function PE(n,e){const t=j(n),r=e.batch.batchId;try{const s=await Uw(t.localStore,e);Uf(t,r,null),Ff(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Xr(t,s)}catch(s){await Wn(s)}}async function CE(n,e,t){const r=j(n);try{const s=await(function(a,c){const u=j(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let p;return u.mutationQueue.lookupMutationBatch(h,c).next((g=>(X(g!==null,37113),p=g.keys(),u.mutationQueue.removeMutationBatch(h,g)))).next((()=>u.mutationQueue.performConsistencyCheck(h))).next((()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,c))).next((()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p))).next((()=>u.localDocuments.getDocuments(h,p)))}))})(r.localStore,e);Uf(r,e,t),Ff(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Xr(r,s)}catch(s){await Wn(s)}}function Ff(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function Uf(n,e,t){const r=j(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function oa(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||Bf(n,r)}))}function Bf(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Ha(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Za(n))}function Yu(n,e,t){for(const r of t)r instanceof Of?(n.Au.addReference(r.key,e),DE(n,r)):r instanceof Lf?(M(Xa,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Bf(n,r.key)):B(19791,{yu:r})}function DE(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(M(Xa,"New document in limbo: "+t),n.Iu.add(r),Za(n))}function Za(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new F(ee.fromString(e)),r=n.mu.next();n.Eu.set(r,new wE(t)),n.du=n.du.insert(t,r),Af(n.remoteStore,new Ct(tt(La(t.path)),r,"TargetPurposeLimboResolution",wi.ue))}}async function Xr(n,e,t){const r=j(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,u)=>{a.push(r.gu(u,e,t).then((h=>{var p;if((h||t)&&r.isPrimaryClient){const g=h?!h.fromCache:(p=t==null?void 0:t.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){s.push(h);const g=ja.Es(u.targetId,h);i.push(g)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(u,h){const p=j(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>P.forEach(h,(w=>P.forEach(w.Is,(S=>p.persistence.referenceDelegate.addReference(g,w.targetId,S))).next((()=>P.forEach(w.ds,(S=>p.persistence.referenceDelegate.removeReference(g,w.targetId,S)))))))))}catch(g){if(!Gn(g))throw g;M(qa,"Failed to update sequence numbers: "+g)}for(const g of h){const w=g.targetId;if(!g.fromCache){const S=p.Fs.get(w),C=S.snapshotVersion,D=S.withLastLimboFreeSnapshotVersion(C);p.Fs=p.Fs.insert(w,D)}}})(r.localStore,i))}async function NE(n,e){const t=j(n);if(!t.currentUser.isEqual(e)){M(Xa,"User change. New user:",e.toKey());const r=await Ef(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((u=>{u.reject(new L(R.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xr(t,r.Bs)}}function VE(n,e){const t=j(n),r=t.Eu.get(e);if(r&&r.lu)return W().add(r.key);{let s=W();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const c=t.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function $f(n){const e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=xf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VE.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RE.bind(null,e),e.hu.J_=gE.bind(null,e.eventManager),e.hu.pu=_E.bind(null,e.eventManager),e}function OE(n){const e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=PE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CE.bind(null,e),e}class si{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ri(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Fw(this.persistence,new Lw,e.initialUser,this.serializer)}Du(e){return new wf(za.Vi,this.serializer)}bu(e){return new Hw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}si.provider={build:()=>new si};class LE extends si{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){X(this.persistence.referenceDelegate instanceof ni,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ww(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Le.withCacheSize(this.cacheSizeBytes):Le.DEFAULT;return new wf((r=>ni.Vi(r,t)),this.serializer)}}class aa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ju(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=NE.bind(null,this.syncEngine),await fE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new mE})()}createDatastore(e){const t=Ri(e.databaseInfo.databaseId),r=(function(i){return new Jw(i)})(e.databaseInfo);return(function(i,a,c,u){return new eE(i,a,c,u)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new nE(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ju(this.syncEngine,t,0)),(function(){return qu.C()?new qu:new Kw})())}createSyncEngine(e,t){return(function(s,i,a,c,u,h,p){const g=new EE(s,i,a,c,u,h);return p&&(g.fu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=j(s);M(un,"RemoteStore shutting down."),i.Ia.add(5),await Yr(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}aa.provider={build:()=>new aa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class zf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):wt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="FirestoreClient";class ME{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Oe.UNAUTHENTICATED,this.clientId=Pa.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{M(zt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(M(zt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ja(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Ro(n,e){n.asyncQueue.verifyOperationInProgress(),M(zt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Ef(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{ln("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{M("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{ln("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Xu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await xE(n);M(zt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Ku(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Ku(e.remoteStore,s))),n._onlineComponents=e}async function xE(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M(zt,"Using user provided OfflineComponentProvider");try{await Ro(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===R.FAILED_PRECONDITION||s.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;ln("Error using user provided cache. Falling back to memory cache: "+t),await Ro(n,new si)}}else M(zt,"Using default OfflineComponentProvider"),await Ro(n,new LE(void 0));return n._offlineComponents}async function jf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M(zt,"Using user provided OnlineComponentProvider"),await Xu(n,n._uninitializedComponentsProvider._online)):(M(zt,"Using default OnlineComponentProvider"),await Xu(n,new aa))),n._onlineComponents}function FE(n){return jf(n).then((e=>e.syncEngine))}async function ca(n){const e=await jf(n),t=e.eventManager;return t.onListen=TE.bind(null,e.syncEngine),t.onUnlisten=AE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=bE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=SE.bind(null,e.syncEngine),t}function UE(n,e,t={}){const r=new Ot;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,u,h){const p=new zf({next:w=>{p.Ou(),a.enqueueAndForget((()=>Nf(i,g))),w.fromCache&&u.source==="server"?h.reject(new L(R.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(w)},error:w=>h.reject(w)}),g=new Vf(c,p,{includeMetadataChanges:!0,ka:!0});return Df(i,g)})(await ca(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function qf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE="firestore.googleapis.com",eh=!0;class th{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=BE,this.ssl=eh}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:eh;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=yf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<vf)throw new L(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nv("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=qf((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(R.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ec{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new th({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new th(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Gy;switch(r.type){case"firstParty":return new Yy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Zu.get(t);r&&(M("ComponentProvider","Removing Datastore"),Zu.delete(t),r.terminate())})(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Tt(this.firestore,e,this._query)}}class de{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new de(this.firestore,e,this._key)}toJSON(){return{type:de._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Gr(t,de._jsonSchema))return new de(e,r||null,new F(ee.fromString(t.referencePath)))}}de._jsonSchemaVersion="firestore/documentReference/1.0",de._jsonSchema={type:he("string",de._jsonSchemaVersion),referencePath:he("string")};class Lt extends Tt{constructor(e,t,r){super(e,t,La(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new de(this.firestore,null,new F(e))}withConverter(e){return new Lt(this.firestore,e,this._path)}}function hn(n,e,...t){if(n=fe(n),Cd("collection","path",e),n instanceof ec){const r=ee.fromString(e,...t);return pu(r),new Lt(n,null,r)}{if(!(n instanceof de||n instanceof Lt))throw new L(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return pu(r),new Lt(n.firestore,null,r)}}function Di(n,e,...t){if(n=fe(n),arguments.length===1&&(e=Pa.newId()),Cd("doc","path",e),n instanceof ec){const r=ee.fromString(e,...t);return fu(r),new de(n,null,new F(r))}{if(!(n instanceof de||n instanceof Lt))throw new L(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ee.fromString(e,...t));return fu(r),new de(n.firestore,n instanceof Lt?n.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="AsyncQueue";class rh{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new bf(this,"async_queue_retry"),this.oc=()=>{const r=ko();r&&M(nh,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=ko();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=ko();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new Ot;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Gn(e))throw e;M(nh,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,wt("INTERNAL UNHANDLED ERROR: ",sh(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Qa.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&B(47125,{hc:sh(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function sh(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function ih(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class dn extends ec{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new rh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rh(e),this._firestoreClient=void 0,await e}}}function $E(n,e,t){t||(t=Js);const r=Hr(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(Cr(i,e))return s;throw new L(R.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new L(R.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<vf)throw new L(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&hi(e.host)&&Hm(e.host),r.initialize({options:e,instanceIdentifier:t})}function tc(n){if(n._terminated)throw new L(R.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||zE(n),n._firestoreClient}function zE(n){var e,t,r;const s=n._freezeSettings(),i=(function(c,u,h,p){return new pv(c,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,qf(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new ME(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $e(Te.fromBase64String(e))}catch(t){throw new L(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new $e(Te.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:$e._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Gr(e,$e._jsonSchema))return $e.fromBase64String(e.bytes)}}$e._jsonSchemaVersion="firestore/bytes/1.0",$e._jsonSchema={type:he("string",$e._jsonSchemaVersion),bytes:he("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ee(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return q(this._lat,e._lat)||q(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rt._jsonSchemaVersion}}static fromJSON(e){if(Gr(e,rt._jsonSchema))return new rt(e.latitude,e.longitude)}}rt._jsonSchemaVersion="firestore/geoPoint/1.0",rt._jsonSchema={type:he("string",rt._jsonSchemaVersion),latitude:he("number"),longitude:he("number")};/**
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
 */class st{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:st._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Gr(e,st._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new st(e.vectorValues);throw new L(R.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}st._jsonSchemaVersion="firestore/vectorValue/1.0",st._jsonSchema={type:he("string",st._jsonSchemaVersion),vectorValues:he("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE=/^__.*__$/;class qE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new qt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Qr(e,this.data,t,this.fieldTransforms)}}class Hf{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new qt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Kf(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B(40011,{Ec:n})}}class nc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new nc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ii(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Kf(this.Ec)&&jE.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class HE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ri(e)}Dc(e,t,r,s=!1){return new nc({Ec:e,methodName:t,bc:r,path:Ee.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rc(n){const e=n._freezeSettings(),t=Ri(n._databaseId);return new HE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function KE(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);ic("Data must be an object, but it was:",a,r);const c=Wf(r,a);let u,h;if(i.merge)u=new Ue(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const g of i.mergeFields){const w=la(e,g,t);if(!a.contains(w))throw new L(R.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Qf(p,w)||p.push(w)}u=new Ue(p),h=a.fieldTransforms.filter((g=>u.covers(g.field)))}else u=null,h=a.fieldTransforms;return new qE(new Me(c),u,h)}class Oi extends Vi{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Oi}}class sc extends Vi{_toFieldTransform(e){return new Bv(e.path,new Ur)}isEqual(e){return e instanceof sc}}function WE(n,e,t,r){const s=n.Dc(1,e,t);ic("Data must be an object, but it was:",s,r);const i=[],a=Me.empty();jt(r,((u,h)=>{const p=oc(e,u,t);h=fe(h);const g=s.gc(p);if(h instanceof Oi)i.push(p);else{const w=Zr(h,g);w!=null&&(i.push(p),a.set(p,w))}}));const c=new Ue(i);return new Hf(a,c,s.fieldTransforms)}function GE(n,e,t,r,s,i){const a=n.Dc(1,e,t),c=[la(e,r,t)],u=[s];if(i.length%2!=0)throw new L(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<i.length;w+=2)c.push(la(e,i[w])),u.push(i[w+1]);const h=[],p=Me.empty();for(let w=c.length-1;w>=0;--w)if(!Qf(h,c[w])){const S=c[w];let C=u[w];C=fe(C);const D=a.gc(S);if(C instanceof Oi)h.push(S);else{const N=Zr(C,D);N!=null&&(h.push(S),p.set(S,N))}}const g=new Ue(h);return new Hf(p,g,a.fieldTransforms)}function QE(n,e,t,r=!1){return Zr(t,n.Dc(r?4:3,e))}function Zr(n,e){if(Gf(n=fe(n)))return ic("Unsupported field value:",e,n),Wf(n,e);if(n instanceof Vi)return(function(r,s){if(!Kf(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let u=Zr(c,s.yc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return xv(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=re.fromDate(r);return{timestampValue:ti(s.serializer,i)}}if(r instanceof re){const i=new re(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ti(s.serializer,i)}}if(r instanceof rt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $e)return{bytesValue:hf(s.serializer,r._byteString)};if(r instanceof de){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ba(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof st)return(function(a,c){return{mapValue:{fields:{[Ud]:{stringValue:Bd},[Ys]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return Ma(c.serializer,h)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${vi(r)}`)})(n,e)}function Wf(n,e){const t={};return Vd(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jt(n,((r,s)=>{const i=Zr(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Gf(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof re||n instanceof rt||n instanceof $e||n instanceof de||n instanceof Vi||n instanceof st)}function ic(n,e,t){if(!Gf(t)||!Dd(t)){const r=vi(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function la(n,e,t){if((e=fe(e))instanceof Ni)return e._internalPath;if(typeof e=="string")return oc(n,e);throw ii("Field path arguments must be of type string or ",n,!1,void 0,t)}const JE=new RegExp("[~\\*/\\[\\]]");function oc(n,e,t){if(e.search(JE)>=0)throw ii(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ni(...e.split("."))._internalPath}catch{throw ii(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ii(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new L(R.INVALID_ARGUMENT,c+n+u)}function Qf(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new de(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Li("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class YE extends Jf{data(){return super.data()}}function Li(n,e){return typeof e=="string"?oc(n,e):e instanceof Ni?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(R.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ac{}class cc extends ac{}function Mi(n,e,...t){let r=[];e instanceof ac&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((u=>u instanceof lc)).length,c=i.filter((u=>u instanceof xi)).length;if(a>1||a>0&&c>0)throw new L(R.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class xi extends cc{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new xi(e,t,r)}_apply(e){const t=this._parse(e);return Xf(e._query,t),new Tt(e.firestore,e.converter,Xo(e._query,t))}_parse(e){const t=rc(e.firestore);return(function(i,a,c,u,h,p,g){let w;if(h.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new L(R.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){ah(g,p);const C=[];for(const D of g)C.push(oh(u,i,D));w={arrayValue:{values:C}}}else w=oh(u,i,g)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||ah(g,p),w=QE(c,a,g,p==="in"||p==="not-in");return ue.create(h,p,w)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ZE(n,e,t){const r=e,s=Li("where",n);return xi._create(s,r,t)}class lc extends ac{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new lc(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Qe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)Xf(a,u),a=Xo(a,u)})(e._query,t),new Tt(e.firestore,e.converter,Xo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class uc extends cc{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new uc(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new L(R.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(R.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fr(i,a)})(e._query,this._field,this._direction);return new Tt(e.firestore,e.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new Qn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function hc(n,e="asc"){const t=e,r=Li("orderBy",n);return uc._create(r,t)}class dc extends cc{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new dc(e,t,r)}_apply(e){return new Tt(e.firestore,e.converter,Zs(e._query,this._limit,this._limitType))}}function Yf(n){return rv("limit",n),dc._create("limit",n,"F")}function oh(n,e,t){if(typeof(t=fe(t))=="string"){if(t==="")throw new L(R.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Gd(e)&&t.indexOf("/")!==-1)throw new L(R.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ee.fromString(t));if(!F.isDocumentKey(r))throw new L(R.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Tu(n,new F(r))}if(t instanceof de)return Tu(n,t._key);throw new L(R.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vi(t)}.`)}function ah(n,e){if(!Array.isArray(n)||n.length===0)throw new L(R.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xf(n,e){const t=(function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new L(R.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(R.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class eT{convertValue(e,t="none"){switch(Bt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ut(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw B(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return jt(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Ys].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>oe(a.doubleValue)));return new st(i)}convertGeoPoint(e){return new rt(oe(e.latitude),oe(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Ti(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Lr(e));default:return null}}convertTimestamp(e){const t=Ft(e);return new re(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ee.fromString(e);X(_f(r),9688,{name:e});const s=new Mr(r.get(1),r.get(3)),i=new F(r.popFirst(5));return s.isEqual(t)||wt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class wr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class sn extends Jf{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ms(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Li("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(R.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=sn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}sn._jsonSchemaVersion="firestore/documentSnapshot/1.0",sn._jsonSchema={type:he("string",sn._jsonSchemaVersion),bundleSource:he("string","DocumentSnapshot"),bundleName:he("string"),bundle:he("string")};class Ms extends sn{data(e={}){return super.data(e)}}class on{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new wr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Ms(this._firestore,this._userDataWriter,r.key,r,new wr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(R.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const u=new Ms(s._firestore,s._userDataWriter,c.doc.key,c.doc,new wr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const u=new Ms(s._firestore,s._userDataWriter,c.doc.key,c.doc,new wr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,p=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),p=a.indexOf(c.doc.key)),{type:nT(c.type),doc:u,oldIndex:h,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(R.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=on._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Pa.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function nT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B(61501,{type:n})}}on._jsonSchemaVersion="firestore/querySnapshot/1.0",on._jsonSchema={type:he("string",on._jsonSchemaVersion),bundleSource:he("string","QuerySnapshot"),bundleName:he("string"),bundle:he("string")};class fc extends eT{constructor(e){super(),this.firestore=e}convertBytes(e){return new $e(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new de(this.firestore,null,t)}}function rT(n){n=_t(n,Tt);const e=_t(n.firestore,dn),t=tc(e),r=new fc(e);return UE(t,n._query,{source:"server"}).then((s=>new on(e,r,n,s)))}function sT(n,e,t,...r){n=_t(n,de);const s=_t(n.firestore,dn),i=rc(s);let a;return a=typeof(e=fe(e))=="string"||e instanceof Ni?GE(i,"updateDoc",n._key,e,t,r):WE(i,"updateDoc",n._key,e),pc(s,[a.toMutation(n._key,We.exists(!0))])}function iT(n){return pc(_t(n.firestore,dn),[new xa(n._key,We.none())])}function oT(n,e){const t=_t(n.firestore,dn),r=Di(n),s=tT(n.converter,e);return pc(t,[KE(rc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,We.exists(!1))]).then((()=>r))}function $n(n,...e){var t,r,s;n=fe(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||ih(e[a])||(i=e[a++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(ih(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let u,h,p;if(n instanceof de)h=_t(n.firestore,dn),p=La(n._key.path),u={next:g=>{e[a]&&e[a](aT(h,n,g))},error:e[a+1],complete:e[a+2]};else{const g=_t(n,Tt);h=_t(g.firestore,dn),p=g._query;const w=new fc(h);u={next:S=>{e[a]&&e[a](new on(h,w,g,S))},error:e[a+1],complete:e[a+2]},XE(n._query)}return(function(w,S,C,D){const N=new zf(D),x=new Vf(S,N,C);return w.asyncQueue.enqueueAndForget((async()=>Df(await ca(w),x))),()=>{N.Ou(),w.asyncQueue.enqueueAndForget((async()=>Nf(await ca(w),x)))}})(tc(h),p,c,u)}function pc(n,e){return(function(r,s){const i=new Ot;return r.asyncQueue.enqueueAndForget((async()=>kE(await FE(r),s,i))),i.promise})(tc(n),e)}function aT(n,e,t){const r=t.docs.get(e._key),s=new fc(n);return new sn(n,s,e._key,r,new wr(t.hasPendingWrites,t.fromCache),e.converter)}function cT(){return new sc("serverTimestamp")}(function(e,t=!0){(function(s){Kn=s})(fi),it(new Ge("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new dn(new Qy(r.getProvider("auth-internal")),new Xy(a,r.getProvider("app-check-internal")),(function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new L(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mr(h.options.projectId,p)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),ze(cu,lu,e),ze(cu,lu,"esm2017")})();const lT=!1,uT=Fy,es=Bh(uT),zn=Z_(es,{persistence:[Ry,my]}),ct=$E(es,{experimentalAutoDetectLongPolling:!0}),ch=n=>`${String(n).trim().toLowerCase()}@app.local`,Zf=Uy;let ep=0,mc=!1,ua=!1,ha=0;const tp=new Set,ae=()=>Date.now()+ep,hT=n=>tp.add(n);async function an(){try{const n=Date.now(),e=await fetch(`${Zf}/time`,{cache:"no-store"}),t=Date.now(),r=await e.json();return ep=r.now-(n+t)/2,mc=!!r.testMode,ua=!!r.shifted,r.startDate&&$y(r.startDate),ha=t,tp.forEach(s=>s()),!0}catch{return!1}}function dT(){setInterval(()=>{(mc||Date.now()-ha>180*1e3)&&an()},2e4),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Date.now()-ha>2e4&&an()})}class Po extends Error{}async function le(n,e={},{authed:t=!0}={}){var a;const r={"content-type":"application/json"};if(t){const c=await((a=zn.currentUser)==null?void 0:a.getIdToken());if(!c)throw new Po("Bitte neu einloggen");r.authorization=`Bearer ${c}`}let s;try{s=await fetch(`${Zf}${n}`,{method:"POST",headers:r,body:JSON.stringify(e)})}catch{throw new Po("Keine Verbindung. Bist du online?")}const i=await s.json().catch(()=>({}));if(!s.ok)throw new Po(i.error||`Fehler ${s.status}`);return i}function f(n,e={},...t){const r=document.createElement(n);for(const[s,i]of Object.entries(e||{}))i==null||i===!1||(s==="class"?r.className=i:s==="style"&&typeof i=="object"?Object.assign(r.style,i):s.startsWith("on")?r.addEventListener(s.slice(2).toLowerCase(),i):s==="html"?r.innerHTML=i:s in r&&s!=="list"&&s!=="form"?r[s]=i:r.setAttribute(s,i===!0?"":i));return fT(r,t),r}function fT(n,e){for(const t of e.flat(1/0))t==null||t===!1||n.append(t instanceof Node?t:document.createTextNode(String(t)))}const Ze=n=>{const e=document.createElement("template");return e.innerHTML=n.trim(),e.content.firstChild};function G(n,e="info"){const t=f("div",{class:`toast toast-${e}`},n);document.body.append(t),requestAnimationFrame(()=>t.classList.add("show")),setTimeout(()=>{t.classList.remove("show"),setTimeout(()=>t.remove(),300)},e==="error"?4500:2800)}const pT=()=>document.getElementById("overlay");function Je(n,{sheet:e=!1,full:t=!1,onClose:r,dismissable:s=!0}={}){const i=f("div",{class:`backdrop ${e?"is-sheet":""} ${t?"is-full":""}`}),a=f("div",{class:e?"sheet":t?"fullscreen":"modal"});let c=!1;const u=()=>{c||(c=!0,i.classList.remove("show"),setTimeout(()=>i.remove(),250),r==null||r())};return s&&i.addEventListener("click",h=>{h.target===i&&u()}),a.append(typeof n=="function"?n(u):n),i.append(a),pT().append(i),requestAnimationFrame(()=>i.classList.add("show")),u}function Sr(n,e,t="OK",r="gold"){return new Promise(s=>{Je(i=>f("div",{class:"stack"},f("h2",{class:"title"},n),e&&f("p",{class:"muted center"},e),f("div",{class:"row gap"},f("button",{class:"btn btn-grey",onclick:()=>{s(!1),i()}},"Abbrechen"),f("button",{class:`btn btn-${r}`,onclick:()=>{s(!0),i()}},t))),{onClose:()=>s(!1)})})}function Pe(n,e,t){e?(n.dataset.label=n.innerHTML,n.disabled=!0,n.innerHTML=`<span class="spinner"></span> ${t||""}`):(n.disabled=!1,n.dataset.label&&(n.innerHTML=n.dataset.label))}function mT(n){return String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function da(n){return n.toFixed(1).replace(".",",")}function Fi(n,e){const t=Math.max(0,Math.floor((e-n)/1e3));if(t<60)return"gerade eben";const r=Math.floor(t/60);if(r<60)return`vor ${r} Min.`;const s=Math.floor(r/60);if(s<24)return`vor ${s} Std.`;const i=Math.floor(s/24);return i===1?"gestern":`vor ${i} Tagen`}const gT=()=>/iphone|ipad|ipod/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,_T=()=>/android/i.test(navigator.userAgent),yT=()=>window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0;let vT=0;function oi(n,e,t,r,s,i=-90){const a=[];for(let c=0;c<s*2;c++){const u=c%2?r:t,h=(i+c*180/s)*Math.PI/180;a.push(`${(n+u*Math.cos(h)).toFixed(1)},${(e+u*Math.sin(h)).toFixed(1)}`)}return a.join(" ")}const lh={noob:'<circle cx="50" cy="50" r="40"/>',advanced:'<path d="M50 7 L87 20 V47 C87 72 69 88 50 95 C31 88 13 72 13 47 V20 Z"/>',pro:'<polygon points="50,5 89,27 89,73 50,95 11,73 11,27"/>',elite:`<polygon points="${oi(50,50,46,37,10)}"/>`,unreal:'<polygon points="50,3 93,50 50,97 7,50"/>',hacker:'<polygon points="27,7 73,7 95,50 73,93 27,93 5,50"/>',gotti:`<polygon points="${oi(50,50,48,39,16)}"/>`},wT={noob:'<path d="M50 74 V50" stroke-width="7" fill="none"/><path d="M50 54 C37 54 28 45 28 32 C41 32 50 41 50 54 Z M50 50 C50 37 59 28 72 28 C72 41 63 50 50 50 Z"/>',advanced:'<path d="M57 14 L29 55 H47 L41 86 L71 43 H53 Z"/>',pro:`<polygon points="${oi(50,51,30,13,5)}"/>`,elite:'<path d="M50 16 C59 31 73 40 71 61 C70 75 61 84 50 84 C39 84 30 75 29 62 C28 49 38 43 40 32 C45 41 47 45 50 48 C53 37 48 27 50 16 Z"/>',unreal:'<path d="M16 50 C29 30 71 30 84 50 C71 70 29 70 16 50 Z"/><circle cx="50" cy="50" r="11" fill="#1a0b2e" stroke="none"/><circle cx="54" cy="46" r="4" fill="#fff" stroke="none"/>',hacker:'<path d="M38 32 L20 50 L38 68 M62 32 L80 50 L62 68 M56 27 L44 73" fill="none" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>',gotti:'<path d="M20 68 L15 32 L35 47 L50 22 L65 47 L85 32 L80 68 Z"/><rect x="20" y="70" width="60" height="9" rx="3"/><circle cx="50" cy="56" r="5" fill="#ff4fa3"/>'};function kr(n){const e=_e[n]||_e[0],t=_i[e.group],r=`bg${++vT}`,s=e.level>0?Array.from({length:e.level},(i,a)=>{const c=50+(a-(e.level-1)/2)*17;return`<polygon points="${oi(c,90,9,4,5)}" fill="#ffd23f" stroke="#1a0b2e" stroke-width="2.5" stroke-linejoin="round"/>`}).join(""):"";return`<svg class="badge-svg" viewBox="0 0 100 104" xmlns="http://www.w3.org/2000/svg" aria-label="${mT(e.name)}">
  <defs>
    <linearGradient id="${r}" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${t.light}"/><stop offset="0.45" stop-color="${t.main}"/><stop offset="1" stop-color="${t.dark}"/>
    </linearGradient>
  </defs>
  <g stroke="#1a0b2e" stroke-width="5" stroke-linejoin="round" fill="url(#${r})">${lh[e.group]}</g>
  <g transform="translate(50 50) scale(0.82) translate(-50 -50)" fill="none" stroke="rgba(255,255,255,.55)" stroke-width="3">${lh[e.group]}</g>
  <g transform="translate(50 50) scale(0.62) translate(-50 -50)" fill="#fff" stroke="#1a0b2e" stroke-width="4" stroke-linejoin="round">${wT[e.group]}</g>
  ${s}
</svg>`}function ts(n,e=40){const t=Ze(kr(n));return t.style.width=`${e}px`,t.style.height=`${e}px`,t}function gc(n,e,t=140,r){const s=_e[n]||_e[0],i=_i[s.group],a=2*Math.PI*45,c=f("div",{class:"ringbadge",style:{width:`${t}px`,height:`${t}px`,"--rank":i.main}});r&&(c.dataset.ring=r),c.append(Ze(`<svg class="ring" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="none" stroke="#0c0624" stroke-width="9"/>
    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,.08)" stroke-width="6"/>
    <circle class="ring-fill" cx="50" cy="50" r="45" fill="none" stroke="${i.main}" stroke-width="6" stroke-linecap="round"
      stroke-dasharray="${a}" stroke-dashoffset="${a*(1-e/100)}" transform="rotate(-90 50 50)"/>
  </svg>`));const u=f("div",{class:"ringbadge-inner"});return u.append(ts(n,t*.66)),c.append(u),c}function ET(n,e){const t=n.querySelector(".ring-fill");if(!t)return;const r=2*Math.PI*45;t.setAttribute("stroke-dashoffset",String(r*(1-e/100)))}function Ht(n,e=40){const t=(n==null?void 0:n.name)||"?";if(n!=null&&n.photoURL)return f("img",{class:"avatar",src:n.photoURL,alt:t,loading:"lazy",style:{width:`${e}px`,height:`${e}px`}});const r=[...(n==null?void 0:n.username)||t].reduce((s,i)=>s+i.charCodeAt(0),0)%360;return f("div",{class:"avatar avatar-initial",style:{width:`${e}px`,height:`${e}px`,fontSize:`${e*.45}px`,background:`hsl(${r} 70% 45%)`}},t.slice(0,1).toUpperCase())}const np='<svg viewBox="0 0 40 40" class="goonie-ico"><path d="M20 4 C30 4 35 12 35 21 C35 31 28 37 20 37 C12 37 5 31 5 21 C5 12 10 4 20 4 Z" fill="#a45bff" stroke="#1a0b2e" stroke-width="3"/><path d="M12 9 C14 6 18 5 20 5" stroke="#e2c9ff" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="14.5" cy="20" r="4" fill="#fff" stroke="#1a0b2e" stroke-width="2"/><circle cx="25.5" cy="20" r="4" fill="#fff" stroke="#1a0b2e" stroke-width="2"/><circle cx="15.5" cy="20.5" r="1.8" fill="#1a0b2e"/><circle cx="26.5" cy="20.5" r="1.8" fill="#1a0b2e"/><path d="M15 28 Q20 32 25 28" stroke="#1a0b2e" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>';function Ui(n=18){const e=Ze(np);return e.classList.add("goonie-inline"),e.style.width=`${n}px`,e.style.height=`${n}px`,e}const U={uid:null,me:null,users:new Map,posts:[],notifs:[],usersLoaded:!1,postsLoaded:!1},fa=new Set,TT=n=>(fa.add(n),()=>fa.delete(n));let uh=0;function zr(n){cancelAnimationFrame(uh),uh=requestAnimationFrame(()=>fa.forEach(e=>e(n)))}const Rr=n=>n!=null&&n.toMillis?n.toMillis():typeof n=="number"?n:0,_c=n=>{const e=n.data();return{id:n.id,...e,createdAt:Rr(e.createdAt),punDeadline:Rr(e.punDeadline),punDoneAt:Rr(e.punDoneAt)}};let ai=[];const yc=80;let ci=yc,Dt=null;function rp(){Dt==null||Dt(),Dt=$n(Mi(hn(ct,"posts"),hc("createdAt","desc"),Yf(ci)),n=>{U.posts=n.docs.map(_c),U.postsLoaded=!0,U.feedHasMore=n.size>=ci,zr("posts")},n=>console.warn("posts",n))}function bT(){ci+=yc,rp()}function IT(n,e){sp(),U.uid=n,ai.push($n(hn(ct,"users"),t=>{U.users=new Map(t.docs.map(r=>[r.id,{id:r.id,...r.data()}])),U.me=U.users.get(n)||null,U.usersLoaded=!0,U.me||e==null||e(),zr("users")},t=>console.warn("users",t))),ci=yc,rp(),ai.push($n(Mi(hn(ct,"notifications",n,"items"),hc("createdAt","desc"),Yf(60)),t=>{U.notifs=t.docs.map(r=>({id:r.id,...r.data(),createdAt:Rr(r.data().createdAt)})),zr("notifs")},t=>console.warn("notifs",t)))}function sp(){ai.forEach(n=>n()),ai=[],Dt==null||Dt(),Dt=null,Object.assign(U,{uid:null,me:null,users:new Map,posts:[],notifs:[],usersLoaded:!1,postsLoaded:!1})}async function AT(){const n=await rT(hn(ct,"users"));U.users=new Map(n.docs.map(e=>[e.id,{id:e.id,...e.data()}])),U.me=U.users.get(U.uid)||null,zr("users")}function ip(){zr("tick")}function ST(n,e){return $n(Mi(hn(ct,"posts"),ZE("uid","==",n)),t=>{e(t.docs.map(_c).sort((r,s)=>s.day-r.day))})}function kT(n,e){return $n(Di(ct,"posts",n),t=>e(t.exists()?_c(t):null))}function RT(n,e){return $n(Mi(hn(ct,"posts",n,"comments"),hc("createdAt","asc")),t=>{e(t.docs.map(r=>({id:r.id,...r.data(),createdAt:Rr(r.data().createdAt)||Date.now()})))})}async function PT(n,e){return(await oT(hn(ct,"posts",n,"comments"),{uid:U.uid,text:e,createdAt:cT()})).id}const CT=(n,e)=>iT(Di(ct,"posts",n,"comments",e)),op=n=>sT(Di(ct,"users",U.uid),n),ap="@firebase/installations",vc="0.6.18";/**
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
 */const cp=1e4,lp=`w:${vc}`,up="FIS_v2",DT="https://firebaseinstallations.googleapis.com/v1",NT=3600*1e3,VT="installations",OT="Installations";/**
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
 */const LT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fn=new gn(VT,OT,LT);function hp(n){return n instanceof lt&&n.code.includes("request-failed")}/**
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
 */function dp({projectId:n}){return`${DT}/projects/${n}/installations`}function fp(n){return{token:n.token,requestStatus:2,expiresIn:xT(n.expiresIn),creationTime:Date.now()}}async function pp(n,e){const r=(await e.json()).error;return fn.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function mp({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function MT(n,{refreshToken:e}){const t=mp(n);return t.append("Authorization",FT(e)),t}async function gp(n){const e=await n();return e.status>=500&&e.status<600?n():e}function xT(n){return Number(n.replace("s","000"))}function FT(n){return`${up} ${n}`}/**
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
 */async function UT({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=dp(n),s=mp(n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:t,authVersion:up,appId:n.appId,sdkVersion:lp},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await gp(()=>fetch(r,c));if(u.ok){const h=await u.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:fp(h.authToken)}}else throw await pp("Create Installation",u)}/**
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
 */function _p(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function BT(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const $T=/^[cdef][\w-]{21}$/,pa="";function zT(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=jT(n);return $T.test(t)?t:pa}catch{return pa}}function jT(n){return BT(n).substr(0,22)}/**
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
 */function Bi(n){return`${n.appName}!${n.appId}`}/**
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
 */const yp=new Map;function vp(n,e){const t=Bi(n);wp(t,e),qT(t,e)}function wp(n,e){const t=yp.get(n);if(t)for(const r of t)r(e)}function qT(n,e){const t=HT();t&&t.postMessage({key:n,fid:e}),KT()}let nn=null;function HT(){return!nn&&"BroadcastChannel"in self&&(nn=new BroadcastChannel("[Firebase] FID Change"),nn.onmessage=n=>{wp(n.data.key,n.data.fid)}),nn}function KT(){yp.size===0&&nn&&(nn.close(),nn=null)}/**
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
 */const WT="firebase-installations-database",GT=1,pn="firebase-installations-store";let Co=null;function wc(){return Co||(Co=di(WT,GT,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(pn)}}})),Co}async function li(n,e){const t=Bi(n),s=(await wc()).transaction(pn,"readwrite"),i=s.objectStore(pn),a=await i.get(t);return await i.put(e,t),await s.done,(!a||a.fid!==e.fid)&&vp(n,e.fid),e}async function Ep(n){const e=Bi(n),r=(await wc()).transaction(pn,"readwrite");await r.objectStore(pn).delete(e),await r.done}async function $i(n,e){const t=Bi(n),s=(await wc()).transaction(pn,"readwrite"),i=s.objectStore(pn),a=await i.get(t),c=e(a);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!a||a.fid!==c.fid)&&vp(n,c.fid),c}/**
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
 */async function Ec(n){let e;const t=await $i(n.appConfig,r=>{const s=QT(r),i=JT(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===pa?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function QT(n){const e=n||{fid:zT(),registrationStatus:0};return Tp(e)}function JT(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(fn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=YT(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:XT(n)}:{installationEntry:e}}async function YT(n,e){try{const t=await UT(n,e);return li(n.appConfig,t)}catch(t){throw hp(t)&&t.customData.serverCode===409?await Ep(n.appConfig):await li(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function XT(n){let e=await hh(n.appConfig);for(;e.registrationStatus===1;)await _p(100),e=await hh(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Ec(n);return r||t}return e}function hh(n){return $i(n,e=>{if(!e)throw fn.create("installation-not-found");return Tp(e)})}function Tp(n){return ZT(n)?{fid:n.fid,registrationStatus:0}:n}function ZT(n){return n.registrationStatus===1&&n.registrationTime+cp<Date.now()}/**
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
 */async function eb({appConfig:n,heartbeatServiceProvider:e},t){const r=tb(n,t),s=MT(n,t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:lp,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},u=await gp(()=>fetch(r,c));if(u.ok){const h=await u.json();return fp(h)}else throw await pp("Generate Auth Token",u)}function tb(n,{fid:e}){return`${dp(n)}/${e}/authTokens:generate`}/**
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
 */async function Tc(n,e=!1){let t;const r=await $i(n.appConfig,i=>{if(!bp(i))throw fn.create("not-registered");const a=i.authToken;if(!e&&sb(a))return i;if(a.requestStatus===1)return t=nb(n,e),i;{if(!navigator.onLine)throw fn.create("app-offline");const c=ob(i);return t=rb(n,c),c}});return t?await t:r.authToken}async function nb(n,e){let t=await dh(n.appConfig);for(;t.authToken.requestStatus===1;)await _p(100),t=await dh(n.appConfig);const r=t.authToken;return r.requestStatus===0?Tc(n,e):r}function dh(n){return $i(n,e=>{if(!bp(e))throw fn.create("not-registered");const t=e.authToken;return ab(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function rb(n,e){try{const t=await eb(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await li(n.appConfig,r),t}catch(t){if(hp(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Ep(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await li(n.appConfig,r)}throw t}}function bp(n){return n!==void 0&&n.registrationStatus===2}function sb(n){return n.requestStatus===2&&!ib(n)}function ib(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+NT}function ob(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function ab(n){return n.requestStatus===1&&n.requestTime+cp<Date.now()}/**
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
 */async function cb(n){const e=n,{installationEntry:t,registrationPromise:r}=await Ec(e);return r?r.catch(console.error):Tc(e).catch(console.error),t.fid}/**
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
 */async function lb(n,e=!1){const t=n;return await ub(t),(await Tc(t,e)).token}async function ub(n){const{registrationPromise:e}=await Ec(n);e&&await e}/**
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
 */function hb(n){if(!n||!n.options)throw Do("App Configuration");if(!n.name)throw Do("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Do(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Do(n){return fn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="installations",db="installations-internal",fb=n=>{const e=n.getProvider("app").getImmediate(),t=hb(e),r=Hr(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},pb=n=>{const e=n.getProvider("app").getImmediate(),t=Hr(e,Ip).getImmediate();return{getId:()=>cb(t),getToken:s=>lb(t,s)}};function mb(){it(new Ge(Ip,fb,"PUBLIC")),it(new Ge(db,pb,"PRIVATE"))}mb();ze(ap,vc);ze(ap,vc,"esm2017");/**
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
 */const gb="/firebase-messaging-sw.js",_b="/firebase-cloud-messaging-push-scope",Ap="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",yb="https://fcmregistrations.googleapis.com/v1",Sp="google.c.a.c_id",vb="google.c.a.c_l",wb="google.c.a.ts",Eb="google.c.a.e",fh=1e4;var ph;(function(n){n[n.DATA_MESSAGE=1]="DATA_MESSAGE",n[n.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ph||(ph={}));/**
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
 */var jr;(function(n){n.PUSH_RECEIVED="push-received",n.NOTIFICATION_CLICKED="notification-clicked"})(jr||(jr={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(n){const e=new Uint8Array(n);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Tb(n){const e="=".repeat((4-n.length%4)%4),t=(n+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(t),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const No="fcm_token_details_db",bb=5,mh="fcm_token_object_Store";async function Ib(n){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(No))return null;let e=null;return(await di(No,bb,{upgrade:async(r,s,i,a)=>{var c;if(s<2||!r.objectStoreNames.contains(mh))return;const u=a.objectStore(mh),h=await u.index("fcmSenderId").get(n);if(await u.clear(),!!h){if(s===2){const p=h;if(!p.auth||!p.p256dh||!p.endpoint)return;e={token:p.fcmToken,createTime:(c=p.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:p.auth,p256dh:p.p256dh,endpoint:p.endpoint,swScope:p.swScope,vapidKey:typeof p.vapidKey=="string"?p.vapidKey:ft(p.vapidKey)}}}else if(s===3){const p=h;e={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:ft(p.auth),p256dh:ft(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:ft(p.vapidKey)}}}else if(s===4){const p=h;e={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:ft(p.auth),p256dh:ft(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:ft(p.vapidKey)}}}}}})).close(),await _o(No),await _o("fcm_vapid_details_db"),await _o("undefined"),Ab(e)?e:null}function Ab(n){if(!n||!n.subscriptionOptions)return!1;const{subscriptionOptions:e}=n;return typeof n.createTime=="number"&&n.createTime>0&&typeof n.token=="string"&&n.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const Sb="firebase-messaging-database",kb=1,mn="firebase-messaging-store";let Vo=null;function bc(){return Vo||(Vo=di(Sb,kb,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(mn)}}})),Vo}async function kp(n){const e=Ac(n),r=await(await bc()).transaction(mn).objectStore(mn).get(e);if(r)return r;{const s=await Ib(n.appConfig.senderId);if(s)return await Ic(n,s),s}}async function Ic(n,e){const t=Ac(n),s=(await bc()).transaction(mn,"readwrite");return await s.objectStore(mn).put(e,t),await s.done,e}async function Rb(n){const e=Ac(n),r=(await bc()).transaction(mn,"readwrite");await r.objectStore(mn).delete(e),await r.done}function Ac({appConfig:n}){return n.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ce=new gn("messaging","Messaging",Pb);/**
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
 */async function Cb(n,e){const t=await kc(n),r=Pp(e),s={method:"POST",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(Sc(n.appConfig),s)).json()}catch(a){throw Ce.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw Ce.create("token-subscribe-failed",{errorInfo:a})}if(!i.token)throw Ce.create("token-subscribe-no-token");return i.token}async function Db(n,e){const t=await kc(n),r=Pp(e.subscriptionOptions),s={method:"PATCH",headers:t,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Sc(n.appConfig)}/${e.token}`,s)).json()}catch(a){throw Ce.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw Ce.create("token-update-failed",{errorInfo:a})}if(!i.token)throw Ce.create("token-update-no-token");return i.token}async function Rp(n,e){const r={method:"DELETE",headers:await kc(n)};try{const i=await(await fetch(`${Sc(n.appConfig)}/${e}`,r)).json();if(i.error){const a=i.error.message;throw Ce.create("token-unsubscribe-failed",{errorInfo:a})}}catch(s){throw Ce.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Sc({projectId:n}){return`${yb}/projects/${n}/registrations`}async function kc({appConfig:n,installations:e}){const t=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n.apiKey,"x-goog-firebase-installations-auth":`FIS ${t}`})}function Pp({p256dh:n,auth:e,endpoint:t,vapidKey:r}){const s={web:{endpoint:t,auth:e,p256dh:n}};return r!==Ap&&(s.web.applicationPubKey=r),s}/**
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
 */const Nb=10080*60*1e3;async function Vb(n){const e=await Mb(n.swRegistration,n.vapidKey),t={vapidKey:n.vapidKey,swScope:n.swRegistration.scope,endpoint:e.endpoint,auth:ft(e.getKey("auth")),p256dh:ft(e.getKey("p256dh"))},r=await kp(n.firebaseDependencies);if(r){if(xb(r.subscriptionOptions,t))return Date.now()>=r.createTime+Nb?Lb(n,{token:r.token,createTime:Date.now(),subscriptionOptions:t}):r.token;try{await Rp(n.firebaseDependencies,r.token)}catch(s){console.warn(s)}return gh(n.firebaseDependencies,t)}else return gh(n.firebaseDependencies,t)}async function Ob(n){const e=await kp(n.firebaseDependencies);e&&(await Rp(n.firebaseDependencies,e.token),await Rb(n.firebaseDependencies));const t=await n.swRegistration.pushManager.getSubscription();return t?t.unsubscribe():!0}async function Lb(n,e){try{const t=await Db(n.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:t,createTime:Date.now()});return await Ic(n.firebaseDependencies,r),t}catch(t){throw t}}async function gh(n,e){const r={token:await Cb(n,e),createTime:Date.now(),subscriptionOptions:e};return await Ic(n,r),r.token}async function Mb(n,e){const t=await n.pushManager.getSubscription();return t||n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Tb(e)})}function xb(n,e){const t=e.vapidKey===n.vapidKey,r=e.endpoint===n.endpoint,s=e.auth===n.auth,i=e.p256dh===n.p256dh;return t&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(n){const e={from:n.from,collapseKey:n.collapse_key,messageId:n.fcmMessageId};return Fb(e,n),Ub(e,n),Bb(e,n),e}function Fb(n,e){if(!e.notification)return;n.notification={};const t=e.notification.title;t&&(n.notification.title=t);const r=e.notification.body;r&&(n.notification.body=r);const s=e.notification.image;s&&(n.notification.image=s);const i=e.notification.icon;i&&(n.notification.icon=i)}function Ub(n,e){e.data&&(n.data=e.data)}function Bb(n,e){var t,r,s,i,a;if(!e.fcmOptions&&!(!((t=e.notification)===null||t===void 0)&&t.click_action))return;n.fcmOptions={};const c=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;c&&(n.fcmOptions.link=c);const u=(a=e.fcmOptions)===null||a===void 0?void 0:a.analytics_label;u&&(n.fcmOptions.analyticsLabel=u)}/**
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
 */function $b(n){return typeof n=="object"&&!!n&&Sp in n}/**
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
 */function zb(n){if(!n||!n.options)throw Oo("App Configuration Object");if(!n.name)throw Oo("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:t}=n;for(const r of e)if(!t[r])throw Oo(r);return{appName:n.name,projectId:t.projectId,apiKey:t.apiKey,appId:t.appId,senderId:t.messagingSenderId}}function Oo(n){return Ce.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,t,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=zb(e);this.firebaseDependencies={app:e,appConfig:s,installations:t,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cp(n){try{n.swRegistration=await navigator.serviceWorker.register(gb,{scope:_b}),n.swRegistration.update().catch(()=>{}),await qb(n.swRegistration)}catch(e){throw Ce.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function qb(n){return new Promise((e,t)=>{const r=setTimeout(()=>t(new Error(`Service worker not registered after ${fh} ms`)),fh),s=n.installing||n.waiting;n.active?(clearTimeout(r),e()):s?s.onstatechange=i=>{var a;((a=i.target)===null||a===void 0?void 0:a.state)==="activated"&&(s.onstatechange=null,clearTimeout(r),e())}:(clearTimeout(r),t(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hb(n,e){if(!e&&!n.swRegistration&&await Cp(n),!(!e&&n.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ce.create("invalid-sw-registration");n.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(n,e){e?n.vapidKey=e:n.vapidKey||(n.vapidKey=Ap)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dp(n,e){if(!navigator)throw Ce.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Ce.create("permission-blocked");return await Kb(n,e==null?void 0:e.vapidKey),await Hb(n,e==null?void 0:e.serviceWorkerRegistration),Vb(n)}/**
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
 */async function Wb(n,e,t){const r=Gb(e);(await n.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:t[Sp],message_name:t[vb],message_time:t[wb],message_device_time:Math.floor(Date.now()/1e3)})}function Gb(n){switch(n){case jr.NOTIFICATION_CLICKED:return"notification_open";case jr.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qb(n,e){const t=e.data;if(!t.isFirebaseMessaging)return;n.onMessageHandler&&t.messageType===jr.PUSH_RECEIVED&&(typeof n.onMessageHandler=="function"?n.onMessageHandler(_h(t)):n.onMessageHandler.next(_h(t)));const r=t.data;$b(r)&&r[Eb]==="1"&&await Wb(n,t.messageType,r)}const yh="@firebase/messaging",vh="0.12.22";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=n=>{const e=new jb(n.getProvider("app").getImmediate(),n.getProvider("installations-internal").getImmediate(),n.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",t=>Qb(e,t)),e},Yb=n=>{const e=n.getProvider("messaging").getImmediate();return{getToken:r=>Dp(e,r)}};function Xb(){it(new Ge("messaging",Jb,"PUBLIC")),it(new Ge("messaging-internal",Yb,"PRIVATE")),ze(yh,vh),ze(yh,vh,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Np(){try{await Mh()}catch{return!1}return typeof window<"u"&&Lh()&&Zm()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zb(n){if(!navigator)throw Ce.create("only-available-in-window");return n.swRegistration||await Cp(n),Ob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rc(n=r_()){return Np().then(e=>{if(!e)throw Ce.create("unsupported-browser")},e=>{throw Ce.create("indexed-db-unsupported")}),Hr(fe(n),"messaging").getImmediate()}async function Vp(n,e){return n=fe(n),Dp(n,e)}function eI(n){return n=fe(n),Zb(n)}Xb();let ui=null;async function Pc(){if(!("serviceWorker"in navigator))return null;try{return ui=await navigator.serviceWorker.register("./sw.js",{scope:"./"}),navigator.serviceWorker.addEventListener("message",n=>{var e;((e=n.data)==null?void 0:e.type)==="open"&&n.data.link&&(location.hash=n.data.link.replace(/^#/,""))}),ui}catch{return null}}async function Op(){if(!("Notification"in window)||!("serviceWorker"in navigator)||!("PushManager"in window))return!1;try{return await Np()}catch{return!1}}const Lp=()=>"Notification"in window?Notification.permission:"unsupported";async function Mp(){if(!await Op())throw new Error("Push geht hier nicht. Auf dem iPhone: App erst zum Home-Bildschirm hinzufügen.");if(await Notification.requestPermission()!=="granted")throw new Error("Benachrichtigungen wurden nicht erlaubt. Du kannst das in den Handy-Einstellungen ändern.");const e=ui||await Pc(),t=await Vp(Rc(es),{serviceWorkerRegistration:e});if(!t)throw new Error("Kein Push-Token erhalten");return localStorage.setItem("pushToken",t),await le("/push/register",{token:t,enabled:!0}),!0}async function tI(){const n=localStorage.getItem("pushToken");await le("/push/register",{token:n,remove:!0,enabled:!1});try{lT||await eI(Rc(es))}catch{}localStorage.removeItem("pushToken")}async function nI(){if(!(Lp()!=="granted"||localStorage.getItem("pushOff")==="1"))try{const n=ui||await Pc(),e=await Vp(Rc(es),{serviceWorkerRegistration:n});e&&e!==localStorage.getItem("pushToken")&&(localStorage.setItem("pushToken",e),await le("/push/register",{token:e,enabled:!0}))}catch{}}function rI(){try{let n=localStorage.getItem("deviceId");return n||(n=crypto.randomUUID(),localStorage.setItem("deviceId",n)),n}catch{return""}}function wh(n){const e=(n==null?void 0:n.code)||"";return e.includes("invalid-credential")||e.includes("wrong-password")||e.includes("user-not-found")||e.includes("invalid-email")?"Username oder Passwort falsch":e.includes("too-many-requests")?"Zu viele Versuche. Bitte kurz warten.":e.includes("network")?"Keine Verbindung":(n==null?void 0:n.message)||"Login fehlgeschlagen"}function sI(){const n=f("div",{class:"auth"}),e=f("div",{class:"auth-logo"},ts(11,96),f("h1",{class:"logo-text"},`${dd} TEST`),f("p",{class:"muted"},"Test-App: hier zählt nichts, niemand bekommt Nachrichten")),t=f("div",{class:"card auth-card"}),r=(c,u)=>f("label",{class:"field"},f("span",{class:"label"},c),u),s=()=>{t.replaceChildren(f("button",{class:"btn btn-gold btn-big",onclick:i},"Einloggen"),f("button",{class:"btn btn-blue btn-big",onclick:a},"Neu registrieren"))},i=()=>{const c=f("input",{class:"input",autocomplete:"username",autocapitalize:"none",spellcheck:!1,placeholder:"dein_username"}),u=f("input",{class:"input",type:"password",autocomplete:"current-password",placeholder:"••••••"}),h=f("button",{class:"btn btn-gold btn-big",type:"submit"},"Einloggen"),p=f("form",{class:"stack"},f("h2",{class:"title"},"Einloggen"),r("Username",c),r("Passwort",u),h,f("button",{class:"btn btn-grey",type:"button",onclick:s},"Zurück"));p.onsubmit=async g=>{g.preventDefault(),Pe(h,!0);try{history.replaceState(null,"","#/"),await Zl(zn,ch(c.value),u.value)}catch(w){Pe(h,!1),G(wh(w),"error")}},t.replaceChildren(p),c.focus()},a=()=>{const c=f("input",{class:"input",maxLength:24,placeholder:"z. B. Freddi"}),u=f("input",{class:"input",maxLength:20,autocomplete:"username",autocapitalize:"none",spellcheck:!1,placeholder:"nur a–z, 0–9, _ und ."}),h=f("input",{class:"input",type:"password",autocomplete:"new-password",placeholder:"mind. 6 Zeichen"}),p=f("input",{class:"input",type:"password",autocomplete:"off",placeholder:"bekommst du von der Gruppe"}),g=f("button",{class:"btn btn-blue btn-big",type:"submit"},"Registrieren"),w=f("form",{class:"stack"},f("h2",{class:"title"},"Neu registrieren"),r("Name (wird angezeigt)",c),r("Username (zum Einloggen)",u),r("Passwort",h),null,g,f("button",{class:"btn btn-grey",type:"button",onclick:s},"Zurück"));w.onsubmit=async S=>{S.preventDefault(),Pe(g,!0);try{await le("/register",{name:c.value,username:u.value,password:h.value,code:p.value,deviceId:rI()},{authed:!1}),localStorage.removeItem("onboarded"),history.replaceState(null,"","#/"),await Zl(zn,ch(u.value),h.value),G("Willkommen! 🎉","success")}catch(C){Pe(g,!1),G(C.code?wh(C):C.message,"error")}},t.replaceChildren(w),c.focus()};return s(),n.append(e,t),n}function iI(n){const e=f("div",{class:"auth onboarding"}),t=gT(),r=_T(),s=yT();let i=s?1:0;const a=[()=>f("div",{class:"stack"},f("div",{class:"big-emoji"},"📲"),f("h2",{class:"title"},"App auf den Home-Bildschirm"),f("p",{class:"muted center"},t?"Auf dem iPhone kommen Push-Nachrichten nur, wenn die App auf dem Home-Bildschirm ist.":"Dann startest du die App mit einem Tipp, wie eine normale App."),t?f("ol",{class:"howto"},f("li",{},"Öffne diese Seite in ",f("b",{},"Safari"),"."),f("li",{},"Tippe unten auf ",f("b",{},"Teilen")," (Quadrat mit Pfeil nach oben ⬆️)."),f("li",{},"Scrolle runter und tippe ",f("b",{},"„Zum Home-Bildschirm“"),"."),f("li",{},"Tippe oben rechts auf ",f("b",{},"„Hinzufügen“"),"."),f("li",{},"Öffne die App jetzt über das neue Symbol auf dem Home-Bildschirm und logge dich dort ein.")):f("ol",{class:"howto"},f("li",{},"Öffne diese Seite in ",f("b",{},"Chrome"),"."),f("li",{},"Tippe oben rechts auf ",f("b",{},"⋮")," (drei Punkte)."),f("li",{},"Tippe ",f("b",{},"„Zum Startbildschirm hinzufügen“")," oder ",f("b",{},"„App installieren“"),"."),f("li",{},"Bestätige mit ",f("b",{},"„Installieren“"),"."),f("li",{},"Öffne die App über das neue Symbol.")),f("button",{class:"btn btn-gold btn-big",onclick:()=>{i=1,u()}},t?"Schon erledigt / weiter":"Weiter"),!r&&!t?f("p",{class:"muted small center"},"Am PC kannst du einfach weitermachen."):null),()=>{const h=f("button",{class:"btn btn-gold btn-big"},"🔔 Benachrichtigungen erlauben"),p=f("div",{class:"stack"},f("div",{class:"big-emoji"},"🔔"),f("h2",{class:"title"},"Push-Nachrichten"),f("p",{class:"muted center"},"Du bekommst eine Erinnerung um 21, 22 und 23 Uhr (nur wenn du noch nicht abgehakt hast) und siehst, wenn jemand postet, kommentiert oder dir ein Goonie gibt."),h,f("button",{class:"btn btn-grey",onclick:c},"Später"));return h.onclick=async()=>{Pe(h,!0);try{await Mp(),localStorage.removeItem("pushOff"),G("Push ist an ✅","success"),c()}catch(g){Pe(h,!1),G(g.message,"error")}},Op().then(g=>{g||(h.disabled=!0,h.textContent=t&&!s?"Erst zum Home-Bildschirm hinzufügen":"Push geht in diesem Browser nicht")}),p}];function c(){try{localStorage.setItem("onboarded","1")}catch{}n()}function u(){e.replaceChildren(f("div",{class:"card auth-card"},a[i]()))}return u(),e}const Ve="Handy so hinstellen, dass dein ganzer Körper im Bild ist.",oI=[{id:1,title:"30 Liegestütze am Stück",how:`30 saubere Liegestütze ohne Absetzen. Brust fast bis zum Boden, Arme oben ganz durchstrecken. Laut mitzählen. Wer absetzt, fängt bei 0 an. ${Ve}`},{id:2,title:"50 Kniebeugen",how:`50 Kniebeugen am Stück. Oberschenkel mindestens waagerecht, Fersen bleiben am Boden. Laut mitzählen. ${Ve}`},{id:3,title:"1 Minute Plank",how:`60 Sekunden Unterarmstütz. Körper gerade wie ein Brett, Po nicht hoch. Timer ins Bild halten oder laut mitzählen. ${Ve}`},{id:4,title:"40 Hampelmänner",how:`40 Hampelmänner am Stück. Hände klatschen über dem Kopf, Beine weit auseinander. Laut mitzählen. ${Ve}`},{id:5,title:"20 Burpees",how:`20 Burpees: in die Hocke, Beine nach hinten in den Liegestütz, 1 Liegestütz, Beine zurück, Strecksprung mit Klatschen über dem Kopf. Laut mitzählen. ${Ve}`},{id:6,title:"2 Minuten Wandsitzen",how:"Mit dem Rücken an die Wand, Knie im 90-Grad-Winkel, Arme vor der Brust verschränkt. 2 Minuten halten. Video: Anfang (erste 20 Sek) und Ende (letzte 20 Sek) mit Uhr im Bild."},{id:7,title:"30 Sit-ups",how:"30 Sit-ups: Füße am Boden, Hände an den Schläfen, Oberkörper bis die Ellbogen die Knie berühren. Laut mitzählen. Seitlich filmen."},{id:8,title:"20 Ausfallschritte pro Bein",how:`40 Ausfallschritte im Wechsel (20 pro Bein). Hinteres Knie fast bis zum Boden. Laut mitzählen. ${Ve}`},{id:9,title:"1 Minute Seilspringen",how:`60 Sekunden Seilspringen ohne Pause (ohne Seil: so tun als ob, Handgelenke kreisen mit). Füße immer in Bewegung. ${Ve}`},{id:10,title:"15 Dips am Stuhl",how:"Hände hinter dir auf eine feste Stuhlkante, Beine nach vorne gestreckt. 15 mal runter bis die Oberarme waagerecht sind und wieder hoch. Stuhl an die Wand stellen, damit er nicht wegrutscht. Seitlich filmen."},{id:11,title:"100 Mountain Climbers",how:"100 Mountain Climbers (jedes Knie zur Brust zählt 1). Liegestützposition, Po unten. Laut mitzählen. Seitlich filmen."},{id:12,title:"5x Treppe hoch und runter",how:"Eine ganze Treppe (mind. 10 Stufen) 5 mal hoch und wieder runter, zügig gehen, nicht rennen, Geländer benutzen. Video: Start unten und Ende unten, laut die Runden zählen."},{id:13,title:"30 Sek Seitstütz pro Seite",how:`Seitstütz auf dem Unterarm, Körper gerade. 30 Sekunden links, dann 30 Sekunden rechts. ${Ve}`},{id:14,title:"50 Russian Twists",how:"Hinsetzen, Füße leicht vom Boden heben, Oberkörper leicht zurück. Hände zusammen von links nach rechts zum Boden drehen. Jede Seite zählt 1, also 50 Berührungen. Laut mitzählen."},{id:15,title:"20 Sprung-Kniebeugen",how:`20 Kniebeugen, aus jeder Kniebeuge kraftvoll hochspringen und weich landen. Laut mitzählen. ${Ve}`},{id:16,title:"10 Klatsch-Liegestütze",how:`10 Liegestütze, bei denen du oben kurz in die Hände klatschst. Wer es nicht schafft: 25 normale Liegestütze. Laut mitzählen. ${Ve}`},{id:17,title:"25 Superman",how:"Auf den Bauch legen, Arme nach vorne. 25 mal gleichzeitig Arme, Brust und Beine vom Boden heben, 1 Sekunde halten, ablegen. Laut mitzählen. Seitlich filmen."},{id:18,title:"20 Liegestütze + 20 Kniebeugen + 20 Sit-ups",how:`Erst 20 Liegestütze, dann 20 Kniebeugen, dann 20 Sit-ups. Pausen nur zwischen den Übungen. Laut mitzählen. ${Ve}`},{id:19,title:"3x 30 Sek Plank",how:`3 Runden: 30 Sekunden Unterarmstütz, 15 Sekunden Pause. Laut die Runde ansagen. ${Ve}`},{id:20,title:"20 Meter Bärengang",how:"Auf Händen und Füßen gehen, Knie knapp über dem Boden, Po unten. 20 Meter (z. B. Flur hin und zurück, bis es 20 m sind). Strecke kurz ins Bild zeigen."},{id:21,title:"30 Schritte Entengang",how:`Tief in die Hocke, Hände hinter den Kopf, so 30 Schritte gehen. Laut mitzählen. ${Ve}`},{id:22,title:"20 Meter Krebsgang",how:"Hinsetzen, Hände hinter dir, Po hoch: so rückwärts auf Händen und Füßen 20 Meter laufen. Strecke kurz ins Bild zeigen."},{id:23,title:"50 Wadenheben",how:"Auf eine Treppenstufe stellen (Fersen frei), am Geländer festhalten. 50 mal ganz auf die Zehenspitzen und wieder runter. Laut mitzählen. Beine im Bild."},{id:24,title:"15 Pike-Liegestütze",how:"Liegestütz mit Po hoch (umgedrehtes V), Kopf zwischen den Händen Richtung Boden senken und wieder hoch. 15 Wiederholungen. Laut mitzählen. Seitlich filmen."},{id:25,title:"20 Kniebeugen mit vollem Rucksack",how:"Schulrucksack mit Büchern füllen (spürbar schwer), aufsetzen. 20 tiefe Kniebeugen. Am Anfang kurz zeigen, wie voll der Rucksack ist. Laut mitzählen."},{id:26,title:"1 Runde durch deine Straße joggen",how:"Joggen von deiner Haustür bis zum Ende deiner Straße und zurück (mind. 300 m insgesamt). Nur auf dem Gehweg, auf Verkehr achten. Video: Start an der Haustür (Straßenschild oder Hausnummer zeigen), Wendepunkt kurz filmen, Ende an der Haustür außer Atem."},{id:27,title:"60 Sek auf einem Bein, Augen zu",how:`Auf einem Bein stehen, Augen zu, Arme verschränkt. 60 Sekunden. Wer das Bein absetzt, fängt von vorn an. Neben einer Wand oder Couch, falls man kippt. ${Ve}`},{id:28,title:"Gedicht über deinen Fail vortragen",how:"Das Gedicht unten mit ernster Stimme und einer Hand auf dem Herzen vortragen. Am Ende verbeugen.",script:`Ich hatte einen klaren Plan,
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
Das waren die Nachrichten. Guten Abend.`},{id:42,title:"Jedem ein Kompliment",how:"Jedes Mitglied der Gruppe mit Namen ansprechen und ihm ein ehrliches Kompliment machen (mindestens ein ganzer Satz pro Person). Gesicht im Bild."},{id:43,title:"In eine Zitronenscheibe beißen",how:"Eine Zitrone aufschneiden, in eine Scheibe beißen und 5 Sekunden kauen, ohne das Gesicht zu verziehen. Gesicht nah im Bild. Wer das Gesicht verzieht, nimmt eine zweite Scheibe."},{id:44,title:"Zimmer aufräumen",how:"Dein Zimmer komplett aufräumen: Boden frei, Kleidung weg, Bett gemacht, Schreibtisch ordentlich. Video: 10 Sek Vorher-Rundgang, dann 10 Sek Nachher-Rundgang aus demselben Blickwinkel."},{id:45,title:"Bett frisch beziehen",how:"Bettwäsche abziehen und frisch beziehen (Bezug, Kissen, Laken). Video: altes Bett, Abziehen kurz zeigen, fertiges Bett."},{id:46,title:"Spülmaschine oder Abwasch",how:"Die Spülmaschine komplett ausräumen und alles einräumen, oder den kompletten Abwasch von Hand machen. Video: Vorher (volle Maschine/Spüle) und Nachher (leer)."},{id:47,title:"Müll rausbringen",how:"Alle Mülleimer im Haus leeren (Küche, Bad, dein Zimmer) und den Müll zur Tonne bringen. Video: volle Eimer, Weg zur Tonne, leere Eimer."},{id:48,title:"Schuhe putzen",how:"Mindestens 2 Paar Schuhe putzen (Dreck abbürsten, Sohlen sauber machen). Video: Schuhe vorher, beim Putzen, Schuhe nachher."},{id:49,title:"Schreibtisch aufräumen",how:"Schreibtisch komplett frei räumen, abwischen und ordentlich wieder einräumen. Video: Vorher und Nachher aus demselben Blickwinkel."},{id:50,title:"Doppelt",how:"Die App hat dir zwei neue Bestrafungen gezogen. Mach beide hintereinander im selben Video.",double:!0}],aI=n=>oI.find(e=>e.id===n)||null;function xp(n=[]){const e=n.map(aI).filter(Boolean),t=e.filter(r=>!r.double);return t.length?t:e}function zi(n,e,{compact:t=!1}={}){const r=xp(n||[]),s=f("div",{class:`pun-details ${t?"compact":""}`});return r.length?(n&&n.length>1&&s.append(f("div",{class:"pun-double"},"✌️ Doppelt: beide Aufgaben im selben Video")),r.forEach((i,a)=>{s.append(f("div",{class:"pun-title"},r.length>1?`${a+1}. ${i.title}`:i.title),f("div",{class:"pun-how"},f("b",{},"So geht’s: "),i.how)),i.script&&s.append(f("div",{class:"pun-script"},f("div",{class:"pun-script-label"},"📜 Dein Text"),i.script))}),s.append(f("div",{class:"pun-safe"},"Nur bekleidet filmen, nichts Gefährliches. Max. 60 Sekunden.")),s):(s.append(f("div",{class:"pun-title"},e||"Bestrafung")),s)}function cI(n){return xp(n||[]).filter(e=>e.script).map(e=>e.script).join(`

`)}const Fp=(n,e)=>{try{const t=localStorage.getItem(n);return t==null?e:t==="1"}catch{return e}},Up=()=>Fp("sfxSound",!0),Bp=()=>Fp("sfxHaptic",!0);function lI(n){try{localStorage.setItem("sfxSound",n?"1":"0")}catch{}}function uI(n){try{localStorage.setItem("sfxHaptic",n?"1":"0")}catch{}}let pr=null;function Zt(){if(!Up())return null;try{return pr||(pr=new(window.AudioContext||window.webkitAudioContext)),pr.state==="suspended"&&pr.resume(),pr}catch{return null}}const $p=()=>{Zt(),window.removeEventListener("pointerdown",$p)};window.addEventListener("pointerdown",$p);function Be(n,{freq:e,to:t,type:r="sine",start:s=0,dur:i=.15,vol:a=.25}){const c=n.currentTime+s,u=n.createOscillator(),h=n.createGain();u.type=r,u.frequency.setValueAtTime(e,c),t&&u.frequency.exponentialRampToValueAtTime(t,c+i),h.gain.setValueAtTime(1e-4,c),h.gain.exponentialRampToValueAtTime(a,c+.01),h.gain.exponentialRampToValueAtTime(1e-4,c+i),u.connect(h).connect(n.destination),u.start(c),u.stop(c+i+.02)}function Rs(n,{start:e=0,dur:t=.3,vol:r=.3,freq:s=2e3,q:i=1,to:a}){const c=n.currentTime+e,u=Math.floor(n.sampleRate*t),h=n.createBuffer(1,u,n.sampleRate),p=h.getChannelData(0);for(let C=0;C<u;C++)p[C]=(Math.random()*2-1)*(1-C/u)**2;const g=n.createBufferSource();g.buffer=h;const w=n.createBiquadFilter();w.type="bandpass",w.frequency.setValueAtTime(s,c),a&&w.frequency.exponentialRampToValueAtTime(a,c+t),w.Q.value=i;const S=n.createGain();S.gain.setValueAtTime(r,c),g.connect(w).connect(S).connect(n.destination),g.start(c)}let Lo=null;function hI(){try{if(!Lo){const n=document.createElement("label");n.style.cssText="position:fixed;left:-100px;top:0;width:1px;height:1px;opacity:0;pointer-events:none";const e=document.createElement("input");e.type="checkbox",e.setAttribute("switch",""),n.append(e),document.body.append(n),Lo=n}Lo.click()}catch{}}function Yt(n){if(!Bp())return;if(navigator.vibrate){try{navigator.vibrate(n)}catch{}return}const e=Array.isArray(n)?n.filter((s,i)=>i%2===0).length:1;let t=0;const r=Array.isArray(n)?n:[n];for(let s=0;s<Math.min(e,3);s++)setTimeout(hI,t),t+=(r[s*2]||0)+(r[s*2+1]||60)}const yt={tap(){Yt(10)},done(){Yt([25,50,45]);const n=Zt();n&&(Be(n,{freq:880,type:"triangle",dur:.12,vol:.22}),Be(n,{freq:1318,type:"triangle",start:.1,dur:.22,vol:.22}),Be(n,{freq:2637,type:"sine",start:.1,dur:.25,vol:.05}))},fail(){Yt([180,70,260]);const n=Zt();n&&(Rs(n,{dur:.25,vol:.5,freq:4e3,to:800,q:2}),Rs(n,{start:.05,dur:.15,vol:.35,freq:6e3,q:4}),Be(n,{freq:220,to:55,type:"sawtooth",start:.08,dur:.7,vol:.18}),Be(n,{freq:110,to:40,type:"sine",start:.08,dur:.8,vol:.3}))},rankUp(){Yt([30,40,30,40,120]);const n=Zt();if(!n)return;[523,659,784,1047].forEach((t,r)=>Be(n,{freq:t,type:"square",start:r*.11,dur:.16,vol:.09})),Be(n,{freq:1047,type:"triangle",start:.44,dur:.6,vol:.2}),Be(n,{freq:1568,type:"triangle",start:.44,dur:.6,vol:.1}),Rs(n,{start:.44,dur:.5,vol:.06,freq:9e3,q:1})},rankDown(){Yt([220,80,320]);const n=Zt();n&&(Rs(n,{dur:.35,vol:.55,freq:3e3,to:500,q:1.5}),Be(n,{freq:392,to:98,type:"sawtooth",start:.1,dur:.9,vol:.12}),Be(n,{freq:196,to:49,type:"sine",start:.1,dur:1,vol:.3}))},goonie(){Yt(20);const n=Zt();n&&Be(n,{freq:600,to:1400,type:"sine",dur:.12,vol:.25})},success(){Yt([20,40,20]);const n=Zt();n&&[784,988,1175].forEach((e,t)=>Be(n,{freq:e,type:"triangle",start:t*.08,dur:.18,vol:.18}))}};function dI(n=2600){const e=f("canvas",{class:"confetti"});document.body.append(e);const t=e.getContext("2d"),r=Math.min(2,window.devicePixelRatio||1);e.width=innerWidth*r,e.height=innerHeight*r,t.scale(r,r);const s=["#ffd23f","#3fa9ff","#a45bff","#ff4fa3","#5ad35a","#fff"],i=Array.from({length:140},()=>({x:innerWidth/2+(Math.random()-.5)*80,y:innerHeight*.38,vx:(Math.random()-.5)*14,vy:-Math.random()*15-5,r:Math.random()*Math.PI,vr:(Math.random()-.5)*.4,w:6+Math.random()*7,c:s[Math.floor(Math.random()*s.length)]})),a=performance.now(),c=u=>{t.clearRect(0,0,innerWidth,innerHeight);for(const h of i)h.vy+=.42,h.vx*=.99,h.x+=h.vx,h.y+=h.vy,h.r+=h.vr,t.save(),t.translate(h.x,h.y),t.rotate(h.r),t.fillStyle=h.c,t.fillRect(-h.w/2,-h.w/4,h.w,h.w/2),t.restore();u-a<n?requestAnimationFrame(c):e.remove()};requestAnimationFrame(c)}function Cc(n,e){const t=_i[_e[e].group].main;Je(r=>{const s=f("div",{class:"fx-stage"}),i=Ze(kr(e));return i.classList.add("fx-badge","fx-spin"),s.append(f("div",{class:"fx-rays",style:{"--c":t}}),i),yt.rankUp(),setTimeout(()=>dI(),700),f("div",{class:"fx"},f("div",{class:"fx-label"},"AUFSTIEG!"),s,f("div",{class:"fx-name",style:{color:t}},_e[e].name),f("div",{class:"muted center"},`von ${_e[n].name}`),f("button",{class:"btn btn-gold btn-big",onclick:r},"Weiter"))},{full:!0})}function zp(n,e,t,r){Je(s=>{const i=f("div",{class:"fx-stage"}),a=Ze(kr(n)),c=Ze(kr(n));a.classList.add("fx-badge","fx-half","fx-left"),c.classList.add("fx-badge","fx-half","fx-right");const u=Ze('<svg class="fx-crack" viewBox="0 0 100 104"><path d="M50 0 L44 22 L56 38 L45 55 L57 72 L48 104" fill="none" stroke="#1a0b2e" stroke-width="4"/></svg>'),h=Ze(kr(e));return h.classList.add("fx-badge","fx-next"),i.append(a,c,u,h),setTimeout(()=>yt.rankDown(),450),f("div",{class:"fx fx-down"},f("div",{class:"fx-label fx-label-red"},"ABSTIEG"),i,f("div",{class:"fx-name"},_e[e].name),f("div",{class:"muted center"},`von ${_e[n].name} · Ring auf 0 %`),r?f("div",{class:"fx-reason"},r):null,f("button",{class:"btn btn-blue btn-big",onclick:s},"Weiter"))},{full:!0,onClose:t})}function fI(n){n.classList.remove("pop"),n.offsetWidth,n.classList.add("pop");const e=f("span",{class:"plus-one"},"+1");n.append(e),setTimeout(()=>e.remove(),900),yt.goonie()}function pI(n){var c,u;if(!n)return;const e=`seenRank:${n.id}`;let t=null;try{t=localStorage.getItem(e)}catch{}const r=n.rankIndex||0;try{localStorage.setItem(e,String(r))}catch{}if(t==null)return;const s=String(((u=(c=n.resetAt)==null?void 0:c.toMillis)==null?void 0:u.call(c))||0);let i=null;try{i=localStorage.getItem(`seenReset:${n.id}`),localStorage.setItem(`seenReset:${n.id}`,s)}catch{}if(i!==s&&s!=="0")return;const a=Number(t);r>a?Cc(a,r):r<a&&zp(a,r,null,n.punishmentOpen?"Grund: Bestrafung nicht bis 21:00 gemacht (−50 % Ring)":"Grund: Tag nicht geschafft oder nicht beantwortet")}function jp(n,e){try{localStorage.setItem(`seenRank:${n.id}`,String(e))}catch{}}function mI(){return window.MediaRecorder?["video/mp4;codecs=avc1","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"].find(e=>{var t;return(t=MediaRecorder.isTypeSupported)==null?void 0:t.call(MediaRecorder,e)})||"":null}const Eh=()=>{var n;return!!((n=navigator.mediaDevices)!=null&&n.getUserMedia&&window.MediaRecorder)};function Pr(n,e,t){let r=null,s=null,i=[],a=null,c=0,u="user";const h=()=>{r==null||r.getTracks().forEach(p=>p.stop()),r=null};Je(p=>{const g=f("div",{class:"rec"}),w=f("video",{class:"rec-video",playsInline:!0,muted:!0,autoplay:!0});w.setAttribute("playsinline","");const S=f("div",{class:"rec-clock"},`0 / ${fr} s`),C=f("div",{class:"rec-controls"}),D=zi(t,e,{compact:!0});D.classList.add("hidden");const N=f("div",{class:"rec-head"},f("div",{class:"pun-text small"},e),f("div",{class:"row gap"},f("button",{class:"btn btn-blue btn-small",onclick:()=>D.classList.toggle("hidden")},"📋 Anleitung"),f("button",{class:"btn btn-grey btn-small",onclick:()=>{h(),clearInterval(c),p()}},"✕"))),x=cI(t),O=x?f("div",{class:"rec-prompter"},x):null,$=f("div",{class:"rec-hint"},"⚠️ Nur bekleidet filmen, nichts Gefährliches. Max. 60 Sekunden.");g.append(N,D,f("div",{class:"rec-stage"},w,S,O),$,C),x||D.classList.remove("hidden");const H=f("input",{type:"file",accept:"video/*",capture:"user",style:{display:"none"}});H.onchange=async()=>{var y;const E=(y=H.files)==null?void 0:y[0];if(!E)return;if(await gI(E)>fr+1.5){G("Das Video ist länger als 60 Sekunden","error");return}a=E,v()},g.append(H);const me=async()=>{h();try{r=await navigator.mediaDevices.getUserMedia({video:{facingMode:u,width:{ideal:720},height:{ideal:1280}},audio:!0}),w.srcObject=r,w.muted=!0,await w.play().catch(()=>{}),te()}catch{C.replaceChildren(f("p",{class:"muted center"},"Kein Zugriff auf die Kamera. Erlaube die Kamera in den Einstellungen oder nimm das Video mit der Kamera-App auf."),f("button",{class:"btn btn-gold btn-big",onclick:()=>H.click()},"📹 Video aufnehmen"))}},te=()=>{S.textContent=`0 / ${fr} s`,C.replaceChildren(f("button",{class:"btn btn-grey btn-round",title:"Kamera wechseln",onclick:()=>{u=u==="user"?"environment":"user",me()}},"🔄"),f("button",{class:"rec-btn","aria-label":"Aufnahme starten",onclick:b}),f("button",{class:"btn btn-grey btn-round",title:"Datei wählen",onclick:()=>H.click()},"📁"))},b=()=>{i=[];const E=mI();try{s=new MediaRecorder(r,{...E?{mimeType:E}:{},videoBitsPerSecond:15e5})}catch{s=new MediaRecorder(r)}s.ondataavailable=y=>y.data.size&&i.push(y.data),s.onstop=()=>{a=new Blob(i,{type:s.mimeType||E||"video/webm"}),v()},s.start(1e3);const I=Date.now();S.classList.add("live"),c=setInterval(()=>{const y=Math.floor((Date.now()-I)/1e3);S.textContent=`● ${y} / ${fr} s`,y>=fr&&_()},250),C.replaceChildren(f("button",{class:"btn btn-red btn-big",onclick:_},"■ Fertig"))},_=()=>{clearInterval(c),S.classList.remove("live"),(s==null?void 0:s.state)==="recording"&&s.stop()},v=()=>{O==null||O.classList.add("hidden"),h(),w.srcObject=null,w.src=URL.createObjectURL(a),w.muted=!1,w.controls=!0,w.loop=!0,w.play().catch(()=>{}),S.textContent="Vorschau";const E=f("button",{class:"btn btn-gold btn-big"},"⬆️ Hochladen und posten"),I=f("div",{class:"progress"},f("div",{class:"progress-fill"}));E.onclick=()=>T(E,I),C.replaceChildren(f("button",{class:"btn btn-grey",onclick:()=>{O==null||O.classList.remove("hidden"),w.controls=!1,w.removeAttribute("src"),Eh()?me():H.click()}},"Nochmal"),E,I)},T=async(E,I)=>{Pe(E,!0,"Lädt hoch …");try{const y=await le("/upload/sign",{kind:"video",day:n});y.mock||await qp(y,a,Kt=>{I.firstChild.style.width=`${Kt}%`});const ye=await le("/punishment/done",{day:n,publicId:y.publicId});p(),U.me&&jp(U.me,ye.after.rankIndex),ye.repaired&&ye.after.rankIndex>ye.before.rankIndex?Cc(ye.before.rankIndex,ye.after.rankIndex):(yt.success(),G(ye.repaired?`Tag ${n} wiedergutgemacht ✅`:"Bestrafung erledigt 💪","success"))}catch(y){Pe(E,!1),G(y.message||"Upload fehlgeschlagen","error")}};return Eh()?me():C.replaceChildren(f("button",{class:"btn btn-gold btn-big",onclick:()=>H.click()},"📹 Video aufnehmen")),g},{full:!0,dismissable:!1,onClose:()=>{h(),clearInterval(c)}})}function gI(n){return new Promise(e=>{const t=document.createElement("video");t.preload="metadata",t.onloadedmetadata=()=>{e(t.duration||0),URL.revokeObjectURL(t.src)},t.onerror=()=>e(0),t.src=URL.createObjectURL(n)})}function qp(n,e,t){return new Promise((r,s)=>{const i=new FormData;i.append("file",e),i.append("api_key",n.apiKey),i.append("timestamp",String(n.timestamp)),i.append("public_id",n.publicId),i.append("signature",n.signature),n.type&&n.type!=="upload"&&i.append("type",n.type);const a=new XMLHttpRequest;a.open("POST",`https://api.cloudinary.com/v1_1/${n.cloudName}/${n.resourceType}/upload`),a.upload.onprogress=c=>c.lengthComputable&&(t==null?void 0:t(Math.round(c.loaded/c.total*100))),a.onload=()=>a.status<300?r(JSON.parse(a.responseText)):s(new Error("Upload fehlgeschlagen")),a.onerror=()=>s(new Error("Upload fehlgeschlagen, Verbindung prüfen")),a.send(i)})}const Th={done:{label:"Geschafft",cls:"st-done",icon:"✅"},fail:{label:"Nicht geschafft",cls:"st-fail",icon:"❌"},open:{label:"Offen",cls:"st-open",icon:"⏳"}},bh=new Map,_I=(n,e)=>JSON.stringify([n.type,n.videoUrl,n.videoId,n.viewedBy,U.users.size,n.gooniedBy,n.commentCount,n.repaired,n.final,e==null?void 0:e.name,e==null?void 0:e.photoURL,n.rankIndex,U.uid,!!(n.punDeadline&&ae()>n.punDeadline)]);function Dc(n,{detail:e=!1}={}){const t=U.users.get(n.uid),r=_I(n,t),s=bh.get(n.id);if(!e&&s&&s.k===r)return s.el.querySelector(".post-time").textContent=Fi(n.createdAt,ae()),s.el;const i=yI(n,t);return e||bh.set(n.id,{k:r,el:i}),i}function yI(n,e){const t=Th[n.type]||Th.open,r=n.uid===U.uid,s=(e==null?void 0:e.name)||"Unbekannt",i=n.type==="done"?n.repaired?`${s} hat Tag ${n.day} wiedergutgemacht`:`${s} hat Tag ${n.day} geschafft`:n.type==="fail"?n.auto?`${s} hat Tag ${n.day} nicht beantwortet`:`${s} hat Tag ${n.day} nicht geschafft`:`${s}: Tag ${n.day} – Nein – offen (nicht geantwortet)`,a=f("article",{class:`card post ${t.cls}`});if(a.append(f("header",{class:"post-head"},f("a",{href:`#/u/${n.uid}`,class:"post-ava"},Ht(e,46)),f("div",{class:"post-meta"},f("a",{href:`#/u/${n.uid}`,class:"post-name"},s," ",ts(n.rankIndex??0,22)),f("div",{class:"post-sub"},`Tag ${n.day} · `,f("span",{class:"post-time"},Fi(n.createdAt,ae())))),f("span",{class:`pill ${t.cls}`},`${t.icon} ${n.repaired?"Wiedergutgemacht":t.label}`)),f("div",{class:"post-title"},i)),n.promoted&&a.append(f("div",{class:"post-rank up"},"⬆️ Aufstieg auf ",f("b",{},ou(n.rankIndex)))),n.demoted&&a.append(f("div",{class:"post-rank down"},"⬇️ Abstieg auf ",f("b",{},ou(n.rankIndex)))),n.reason&&a.append(f("div",{class:"qa"},f("div",{class:"qa-q"},"Woran lag es?"),f("div",{class:"qa-a"},n.reason))),n.better&&a.append(f("div",{class:"qa"},f("div",{class:"qa-q"},"Was mache ich nächstes Mal besser?"),f("div",{class:"qa-a"},n.better))),n.punishment){const g=f("div",{class:"pun-box"},f("div",{class:"pun-row"},f("div",{class:"pun-label"},f("b",{},"Bestrafung: "),n.punishment),f("button",{class:"btn btn-blue btn-icon",title:"Anleitung",onclick:()=>EI(n)},"📋")));if(n.videoId)g.append(TI(n,r));else if(n.videoUrl)g.append(f("div",{class:"pun-missing"},"🎥 Video vorhanden"));else{const w=n.punDeadline&&ae()>n.punDeadline;g.append(f("div",{class:`pun-missing ${w?"late":""}`},w?"❗ Bestrafung offen – Frist verpasst":`🎥 Video fehlt noch · Frist ${Vr(n.punDeadline)} Uhr`)),r&&g.append(f("button",{class:"btn btn-gold",onclick:()=>Pr(n.day,n.punishment,n.punIds)},n.type==="open"&&!w?"🎥 Wiedergutmachen":"🎥 Bestrafung machen"))}a.append(g)}const c=(n.gooniedBy||[]).length,u=(n.gooniedBy||[]).includes(U.uid),h=f("button",{class:`goonie-btn ${u?"on":""} ${r?"own":""}`,"aria-label":"Goonie geben"});h.append(Ze(np),f("span",{class:"g-count"},String(c)),f("span",{class:"g-label"},c===1?"Goonie":"Goonies")),h.onclick=async()=>{if(r){vI(n);return}const g=!h.classList.contains("on");h.classList.toggle("on",g);const w=h.querySelector(".g-count");w.textContent=String(Number(w.textContent)+(g?1:-1)),g&&fI(h);try{await le("/goonie",{postId:n.id,on:g})}catch(S){h.classList.toggle("on",!g),w.textContent=String(Number(w.textContent)+(g?-1:1)),G(S.message,"error")}};const p=f("button",{class:"comment-btn",onclick:()=>wI(n)},"💬 ",String(n.commentCount||0));return a.append(f("footer",{class:"post-foot"},h,p)),a}function vI(n){const e=(n.gooniedBy||[]).map(t=>U.users.get(t)).filter(Boolean);Je(f("div",{class:"stack"},f("h2",{class:"title"},"Goonies von"),e.length?f("div",{class:"list"},e.map(t=>f("a",{class:"list-row",href:`#/u/${t.id}`},Ht(t,36),f("span",{},t.name)))):f("p",{class:"muted center"},"Noch keine. Eigene Posts kannst du nicht goonien.")),{sheet:!0})}function wI(n){let e=null;Je(t=>{const r=f("div",{class:"comments"},f("p",{class:"muted center"},"Lädt …")),s=f("textarea",{class:"input",rows:2,maxLength:Ts,placeholder:"Kommentar schreiben …"}),i=f("span",{class:"muted small"},`0/${Ts}`);s.oninput=()=>{i.textContent=`${s.value.length}/${Ts}`};const a=f("button",{class:"btn btn-gold"},"Senden");return a.onclick=async()=>{const c=s.value.trim();if(c){a.disabled=!0;try{const u=await PT(n.id,c);s.value="",i.textContent=`0/${Ts}`,le("/comment/notify",{postId:n.id,commentId:u}).catch(()=>{})}catch{G("Kommentar konnte nicht gesendet werden","error")}a.disabled=!1}},e=RT(n.id,c=>{r.replaceChildren(...c.length?c.map(u=>{const h=U.users.get(u.uid);return f("div",{class:"comment"},Ht(h,32),f("div",{class:"comment-body"},f("div",{class:"comment-head"},f("b",{},(h==null?void 0:h.name)||"?")," ",f("span",{class:"muted small"},Fi(u.createdAt,Date.now()))),f("div",{class:"comment-text"},u.text)),u.uid===U.uid&&f("button",{class:"comment-del",title:"Löschen",onclick:async()=>{await Sr("Kommentar löschen?",null,"Löschen","red")&&(await CT(n.id,u.id),le("/comment/notify",{postId:n.id}).catch(()=>{}))}},"🗑"))}):[f("p",{class:"muted center"},"Noch keine Kommentare.")]),r.scrollTop=r.scrollHeight}),f("div",{class:"stack"},f("div",{class:"row between"},f("h2",{class:"title"},"Kommentare"),f("button",{class:"btn btn-grey btn-icon",onclick:t},"✕")),r,s,f("div",{class:"row between"},i,a))},{sheet:!0,onClose:()=>e==null?void 0:e()})}let qe=null;function qr(n){(qe==null?void 0:qe.id)!==n&&(qr.leave(),qe={id:n,post:void 0},qe.unsub=kT(n,t=>{qe.post=t,ip()}));const e=qe.post;return f("div",{class:"page"},f("a",{class:"back",href:"#/"},"← Zum Feed"),e===void 0?f("p",{class:"muted center"},"Lädt …"):e?Dc(e):f("p",{class:"muted center"},"Post nicht gefunden."))}qr.live=!0;qr.leave=()=>{qe==null||qe.unsub(),qe=null};function EI(n){Je(e=>f("div",{class:"stack"},f("div",{class:"eyebrow eyebrow-red"},`Bestrafung · Tag ${n.day}`),zi(n.punIds,n.punishment),f("button",{class:"btn btn-grey",onclick:e},"Schließen")),{sheet:!0})}function TI(n,e){const t=n.viewedBy||[],r=Math.max(0,[...U.users.values()].filter(i=>i.id!==n.uid&&!i.bot).length),s=f("div",{class:"vid-tile"});return e?s.append(f("button",{class:"btn btn-blue",onclick:()=>Ih(n,!0)},"▶ Dein Video ansehen"),f("div",{class:"muted small"},`👁 ${t.length} von ${r} haben es gesehen`)):t.includes(U.uid)?s.append(f("div",{class:"vid-seen"},"👁 Schon angesehen")):s.append(f("button",{class:"btn btn-gold",onclick:()=>Ih(n,!1)},"▶ Video ansehen (nur 1x)"),f("div",{class:"muted small"},"Du kannst dieses Video nur einmal ansehen.")),s}function Ih(n,e){Je(t=>{const r=f("div",{class:"vp-stage"}),s=f("div",{class:"vp-bar"},f("div",{class:"vp-fill"})),i=f("div",{class:"vp-info"}),a=f("div",{class:"vp"},f("div",{class:"row between"},f("div",{class:"pun-text small"},n.punishment),f("button",{class:"btn btn-grey btn-small",onclick:t},"✕")),r,s,i),c=f("video",{class:"vp-video",playsInline:!0,preload:"auto",disablePictureInPicture:!0});c.setAttribute("playsinline",""),c.setAttribute("controlslist","nodownload noplaybackrate"),c.addEventListener("contextmenu",S=>S.preventDefault());const u=f("button",{class:"vp-big","aria-label":"Abspielen"},bI()),h=f("div",{class:"vp-spin hidden"},f("div",{class:"boot-flame"})),p=f("button",{class:"vp-mute hidden"},"🔇 Tippen für Ton"),g=()=>{r.replaceChildren(c,h,u,p),u.classList.add("hidden"),h.classList.remove("hidden"),i.textContent="Lädt …",c.play().catch(()=>{}),le("/video/view",{postId:n.id}).then(S=>{if(S.mock){r.replaceChildren(f("div",{class:"vp-mock"},"🎥 Testmodus: hier würde das Video laufen")),i.textContent=e?"Dein Video":"Angesehen ✓";return}r.append(f("div",{class:"vp-mark"},`${S.viewer} · ${new Date().toLocaleDateString("de-DE")}`)),c.poster=S.poster,c.src=S.video,c.play().catch(()=>{c.muted=!0,c.play().then(()=>p.classList.remove("hidden")).catch(()=>u.classList.remove("hidden"))})}).catch(S=>{r.replaceChildren(f("div",{class:"vp-mock"},S.message)),i.textContent=""})},w=()=>{if(c.muted&&!p.classList.contains("hidden")){c.muted=!1,p.classList.add("hidden");return}c.paused?c.play().catch(()=>{}):c.pause()};return u.onclick=S=>{S.stopPropagation(),c.play().catch(()=>{})},p.onclick=S=>{S.stopPropagation(),c.muted=!1,p.classList.add("hidden")},r.onclick=()=>{c.src&&w()},c.onplaying=()=>{h.classList.add("hidden"),u.classList.add("hidden"),i.textContent=e?"Dein Video · Tippen = Pause":"Nur 1x · Tippen = Pause"},c.onpause=()=>{c.ended||u.classList.remove("hidden")},c.onwaiting=()=>h.classList.remove("hidden"),c.ontimeupdate=()=>{c.duration&&(s.firstChild.style.width=`${c.currentTime/c.duration*100}%`)},c.onended=()=>{s.firstChild.style.width="100%",i.textContent=e?"Ende":"Ende. Dieses Video ist jetzt für dich weg.",e?u.classList.remove("hidden"):setTimeout(t,1500)},e?g():r.replaceChildren(f("div",{class:"vp-ask"},f("div",{class:"vp-ask-title"},"Nur 1x ansehen"),f("p",{class:"muted center"},"Jedes Bestrafungsvideo kannst du nur einmal ansehen. Danach ist es für dich weg."),f("button",{class:"btn btn-gold btn-big",onclick:S=>{S.stopPropagation(),g()}},"▶ Jetzt ansehen"))),a},{full:!0})}function bI(){return Ze('<svg viewBox="0 0 100 100" width="96" height="96"><circle cx="50" cy="50" r="46" fill="rgba(0,0,0,.55)" stroke="#fff" stroke-width="4"/><path d="M40 30 L72 50 L40 70 Z" fill="#fff"/></svg>')}function Hp(n){Je(e=>{const t=f("div",{class:"stack"}),r=()=>{t.replaceChildren(f("div",{class:"eyebrow"},`Tag ${n}`),f("h2",{class:"title"},"Hast du es heute geschafft?"),f("p",{class:"muted center"},"Nur eine Antwort pro Tag. Sei ehrlich."),f("button",{class:"btn btn-green btn-big",onclick:a=>i(a.currentTarget,{result:"done"})},"Geschafft ✅"),f("button",{class:"btn btn-red btn-big",onclick:s},"Nicht geschafft ❌"))},s=()=>{const a=f("textarea",{class:"input",rows:3,maxLength:300,placeholder:"Woran lag es?"}),c=f("textarea",{class:"input",rows:3,maxLength:300,placeholder:"Was machst du nächstes Mal besser?"}),u=f("button",{class:"btn btn-red btn-big"},"Fertig");u.onclick=()=>{if(!a.value.trim()||!c.value.trim()){G("Bitte beide Felder ausfüllen","error");return}i(u,{result:"fail",reason:a.value,better:c.value})},t.replaceChildren(f("div",{class:"eyebrow"},`Tag ${n}`),f("h2",{class:"title"},"Nicht geschafft"),f("label",{class:"label"},"Woran lag es?"),a,f("label",{class:"label"},"Was machst du nächstes Mal besser?"),c,u,f("button",{class:"btn btn-grey",onclick:r},"Zurück")),a.focus()},i=async(a,c)=>{yt.tap(),Pe(a,!0);try{const u=await le("/checkin",c);e(),U.me&&jp(U.me,u.after.rankIndex),c.result==="done"?u.after.rankIndex>u.before.rankIndex?Cc(u.before.rankIndex,u.after.rankIndex):(yt.done(),G(`Tag ${u.day} geschafft! 🔥`,"success")):(u.after.rankIndex>=u.before.rankIndex&&yt.fail(),u.after.rankIndex<u.before.rankIndex?zp(u.before.rankIndex,u.after.rankIndex,()=>Ah(u.day,u.punishment,u.punIds)):Ah(u.day,u.punishment,u.punIds))}catch(u){Pe(a,!1),G(u.message,"error")}};return r(),t})}function Ah(n,e,t){Je(r=>f("div",{class:"stack"},f("div",{class:"eyebrow eyebrow-red"},"Deine Bestrafung"),zi(t,e),f("p",{class:"muted center"},"Zeit bis morgen 21:00. Sonst: −50 % Ring und „Bestrafung offen“."),f("button",{class:"btn btn-gold btn-big",onclick:()=>{r(),Pr(n,e,t)}},"🎥 Bestrafung machen"),f("button",{class:"btn btn-grey",onclick:r},"Später")))}function Kp(n){return n.final?"Endrang erreicht 👑":Mt(ae())<1?`Der Ring startet mit der Challenge am ${Hn(Ws())} um 22:00`:`${da(n.pct)} % ${n.rank.name} – noch ${da(n.rest)} % bis ${n.next.name}`}function Wp(){return[...U.users.values()].sort((n,e)=>e.rankIndex-n.rankIndex||e.progress-n.progress||e.doneCount-n.doneCount||n.name.localeCompare(e.name))}function Mo(n){const e=f("span",{class:"countdown"});return e.dataset.until=String(n),e.textContent=Gp(n-ae()),e}function Gp(n){if(n<=0)return"0:00:00";const e=Math.floor(n/1e3),t=Math.floor(e/86400),r=Math.floor(e%86400/3600),s=String(Math.floor(e%3600/60)).padStart(2,"0"),i=String(e%60).padStart(2,"0");return t>0?`${t} T ${r}:${s}:${i}`:`${r}:${s}:${i}`}const II=new Intl.DateTimeFormat("de-DE",{timeZone:"Europe/Berlin",weekday:"long"});function AI(n){const e=ka(n);return`${II.format(new Date(e))}, ${Hn(e)}`}function xo(n){const e=zi(n.punIds,n.punText,{compact:!0});return e.classList.add("hidden"),f("div",{class:"pun-mini"},f("div",{},f("b",{},"Bestrafung: "),n.punText),f("button",{class:"link-btn",onclick:t=>{e.classList.toggle("hidden"),t.currentTarget.textContent=e.classList.contains("hidden")?"📋 Anleitung zeigen":"Anleitung ausblenden"}},"📋 Anleitung zeigen"),e)}function SI(n){const e=n.days||{};for(let t=ot;t>=1;t--){const r=e[t];if(r&&r.pun&&!r.punDone)return{day:t,e:r}}return null}function kI(n,e){const t=Mt(e),r=wd(e),s=n.days||{},i=n.joinedDay||1,a=[];if(t<1)return a.push(f("div",{class:"action-info"},f("div",{class:"eyebrow"},`Start am ${Hn(Ws())} um 22:00`),f("div",{class:"big-count"},Mo(Ws())))),a;r&&r>=i&&!s[r]&&a.push(f("button",{class:"btn btn-gold btn-huge pulse",onclick:()=>Hp(r)},"Heute abhaken",f("small",{},`Tag ${r} · bis 23:59`)));const c=SI(n);if(c){const u=e>=Io(c.day)||c.e.pen;c.e.s==="open"&&!u?a.push(f("div",{class:"alert alert-orange"},f("div",{},f("b",{},`Tag ${c.day} vergessen?`),` Mach es bis ${Vr(Io(c.day))} Uhr wieder gut: Bestrafung filmen, dann zählt der Tag als geschafft.`),xo(c.e),f("button",{class:"btn btn-orange",onclick:()=>Pr(c.day,c.e.punText,c.e.punIds)},"🎥 Wiedergutmachen"))):u?a.push(f("div",{class:"alert alert-red"},f("div",{},f("b",{},"Bestrafung offen ❗")," Frist verpasst (−50 % Ring). Nachholen entfernt den roten Hinweis."),xo(c.e),f("button",{class:"btn btn-red",onclick:()=>Pr(c.day,c.e.punText,c.e.punIds)},"🎥 Bestrafung nachholen"))):a.push(f("div",{class:"alert alert-purple"},f("div",{},f("b",{},"Bestrafung machen")," – Frist: ",Mo(Io(c.day))),xo(c.e),f("button",{class:"btn btn-gold",onclick:()=>Pr(c.day,c.e.punText,c.e.punIds)},"🎥 Bestrafung machen")))}if(r&&s[r]){const u=s[r].s==="done";a.push(f("div",{class:`done-note ${u?"ok":"no"}`},u?`Tag ${r} abgehakt ✅`:`Tag ${r}: nicht geschafft ❌`))}if((!a.length||!r&&t<=ot)&&!(t>ot)){if(!r){const u=yd(e),h=e<bo(u)?bo(u):bo(u+1);a.push(f("div",{class:"action-info"},f("div",{class:"eyebrow"},`Abhaken ab ${Ed(h)} Uhr`),f("div",{class:"big-count"},Mo(h))))}}return a}function RI(){const n=Wp();return f("section",{class:"card final"},f("h2",{class:"title"},"🏆 Endstand"),f("div",{class:"list"},n.map((e,t)=>f("a",{class:"list-row",href:`#/u/${e.id}`},f("span",{class:`place place-${t+1}`},String(t+1)),Ht(e,36),f("span",{class:"grow"},e.name),ts(e.rankIndex,30),f("span",{class:"muted small"},`${e.doneCount}/${ot}`)))))}function PI(n,e){const t=yi(n,e),r=_e[t.rankIndex];return f("section",{class:"card status"},f("div",{class:"status-top"},f("a",{href:"#/me"},gc(t.rankIndex,t.pct,132,n.id)),f("div",{class:"status-info"},f("div",{class:"status-rank"},r.name),f("div",{class:"status-ring-text"},Kp(t)),t.full&&!t.final?f("div",{class:"tag tag-gold"},"⏳ Aufstieg wartet auf Bestätigung"):null,f("div",{class:"status-stats"},f("span",{class:"stat-chip"},"🔥 ",f("b",{},String(n.streak||0))," Streak"),f("span",{class:"stat-chip"},Ui(18)," ",f("b",{},String(n.goonies||0)))))),n.punishmentOpen?f("div",{class:"red-flag"},"❗ Bestrafung offen"):null,f("div",{class:"status-actions"},kI(n,e)))}function Qp(){const n=U.me,e=ae(),t=f("div",{class:"page"});if(!n)return t;if(t.append(PI(n,e)),Mt(e)>ot&&t.append(RI()),t.append(f("h3",{class:"section-title"},"Feed")),!U.postsLoaded)t.append(f("p",{class:"muted center"},"Lädt …"));else if(!U.posts.length)t.append(f("div",{class:"card empty"},f("div",{class:"empty-ico"},"🔥"),f("p",{},Mt(e)<1?"Noch ist es ruhig. Ab dem Start erscheinen hier alle Abhaken-Posts.":"Noch keine Posts.")));else{const r=new Map;for(const i of U.posts)r.has(i.day)||r.set(i.day,[]),r.get(i.day).push(i);const s=[...r.keys()].sort((i,a)=>a-i);for(const i of s){const a=r.get(i),c=a.filter(u=>u.type==="done").length;t.append(f("section",{class:"day-box"},f("header",{class:"day-head"},f("div",{},f("div",{class:"day-date"},AI(i)),f("div",{class:"day-sub"},`Tag ${i} · ${c} von ${a.length} geschafft`)),f("div",{class:"day-num"},String(i))),a.map(u=>Dc(u))))}U.feedHasMore&&t.append(f("button",{class:"btn btn-grey btn-big",style:{marginTop:"6px"},onclick:i=>{i.currentTarget.disabled=!0,i.currentTarget.textContent="Lädt …",bT()}},"Ältere Posts laden"))}return t}Qp.live=!0;function Jp(){const n=f("input",{type:"file",accept:"image/*",style:{display:"none"}});document.body.append(n),n.onchange=()=>{var t;const e=(t=n.files)==null?void 0:t[0];n.remove(),e&&CI(e)},n.click()}function CI(n){const e=new Image,t=URL.createObjectURL(n);e.onload=()=>Je(r=>{const s=Math.min(300,window.innerWidth-80),i=Math.max(s/e.width,s/e.height);let a=1,c=(s-e.width*i)/2,u=(s-e.height*i)/2;const h=f("img",{src:t,class:"crop-img",draggable:!1}),p=f("div",{class:"crop-view",style:{width:`${s}px`,height:`${s}px`}},h),g=()=>{const D=i*a;c=Math.min(0,Math.max(s-e.width*D,c)),u=Math.min(0,Math.max(s-e.height*D,u)),h.style.width=`${e.width*D}px`,h.style.transform=`translate(${c}px, ${u}px)`};g();let w=null;p.addEventListener("pointerdown",D=>{w={sx:D.clientX,sy:D.clientY,x:c,y:u},p.setPointerCapture(D.pointerId)}),p.addEventListener("pointermove",D=>{w&&(c=w.x+D.clientX-w.sx,u=w.y+D.clientY-w.sy,g())}),p.addEventListener("pointerup",()=>{w=null});const S=f("input",{type:"range",min:1,max:4,step:.01,value:1,class:"slider"});S.oninput=()=>{const D=(s/2-c)/(i*a),N=(s/2-u)/(i*a);a=Number(S.value),c=s/2-D*i*a,u=s/2-N*i*a,g()};const C=f("button",{class:"btn btn-gold btn-big"},"Speichern");return C.onclick=async()=>{Pe(C,!0,"Lädt hoch …");try{const D=i*a,N=document.createElement("canvas");N.width=512,N.height=512,N.getContext("2d").drawImage(e,-c/D,-u/D,s/D,s/D,0,0,512,512);const x=await new Promise($=>N.toBlob($,"image/jpeg",.88)),O=await le("/upload/sign",{kind:"avatar"});O.mock?G("Testmodus: Bild wird nicht hochgeladen"):(await qp(O,x),await op({photoURL:`https://res.cloudinary.com/${O.cloudName}/image/upload/c_fill,w_256,h_256,q_auto/${O.publicId}.jpg`}),G("Profilbild gespeichert","success")),r()}catch(D){Pe(C,!1),G(D.message||"Fehler beim Hochladen","error")}},f("div",{class:"stack center-items"},f("h2",{class:"title"},"Bild zuschneiden"),f("p",{class:"muted center"},"Verschieben mit dem Finger, zoomen mit dem Regler."),p,S,C,f("button",{class:"btn btn-grey",onclick:r},"Abbrechen"))},{onClose:()=>URL.revokeObjectURL(t)}),e.src=t}function DI(n,e){const t=Mt(e),r=n.days||{},s=n.joinedDay||1,i=[];for(let a=1;a<=ot;a++){const c=r[a];let u="cal-future",h="kommt noch";(c==null?void 0:c.s)==="done"?(u="cal-done",h=c.repaired?"geschafft (wiedergutgemacht)":"geschafft"):(c==null?void 0:c.s)==="fail"?(u="cal-fail",h="nicht geschafft"):(c==null?void 0:c.s)==="open"?(u="cal-open",h="offen"):a<s?(u="cal-skip",h="vor dem Beitritt"):(a===t||a===t-1)&&(u="cal-now",h="läuft"),i.push(f("div",{class:`cal-tile ${u}`,title:`Tag ${a} (${Hn(ka(a))}): ${h}`},f("span",{},String(a)),c!=null&&c.repaired?f("i",{},"↺"):null))}return f("div",{class:"calendar"},i)}function rn(n){const e=U.users.get(n),t=f("div",{class:"page"});if(!e)return t.append(f("p",{class:"muted center"},U.usersLoaded?"Mitglied nicht gefunden.":"Lädt …")),t;const r=ae(),s=yi(e,r),i=n===U.uid,a=f("div",{class:"profile-ava"},Ht(e,84));i&&a.append(f("button",{class:"ava-edit",title:"Profilbild ändern",onclick:Jp},"📷")),(He==null?void 0:He.uid)!==n&&(rn.leave(),He={uid:n,posts:null},He.unsub=ST(n,h=>{He.posts=h,ip()}));const c=He.posts,u=f("div",{class:"stack"},c==null?f("p",{class:"muted center"},"Lädt …"):c.length?c.map(h=>Dc(h)):f("p",{class:"muted center"},"Noch keine Posts."));return t.append(f("section",{class:"card profile"},f("div",{class:"profile-head"},a,f("div",{},f("div",{class:"profile-name"},e.name),f("div",{class:"muted"},`@${e.username}`))),e.punishmentOpen?f("div",{class:"red-flag"},"❗ Bestrafung offen"):null,f("div",{class:"profile-badge"},gc(s.rankIndex,s.pct,190,e.id),f("div",{class:"profile-rank",style:{color:`var(--r-${_e[s.rankIndex].group})`}},_e[s.rankIndex].name),f("div",{class:"status-ring-text center"},Kp(s)),s.full&&!s.final?f("div",{class:"tag tag-gold"},"⏳ Aufstieg wartet auf Bestätigung"):null),f("div",{class:"stats"},Ps("🔥",e.streak||0,"Aktuelle Streak"),Ps("🏅",e.bestStreak||0,"Beste Streak"),Ps("✅",e.doneCount||0,"Geschaffte Tage"),Ps(Ui(24),e.goonies||0,"Goonies")),f("h3",{class:"section-title small"},"Kalender"),DI(e,r),f("div",{class:"legend"},f("span",{class:"lg cal-done"}),"geschafft",f("span",{class:"lg cal-fail"}),"nicht geschafft",f("span",{class:"lg cal-open"}),"offen",f("span",{class:"lg cal-future"}),"kommt noch")),f("h3",{class:"section-title"},i?"Meine Posts":`Posts von ${e.name}`),u),t}rn.live=!0;let He=null;rn.leave=()=>{He==null||He.unsub(),He=null};function Ps(n,e,t){return f("div",{class:"stat"},f("div",{class:"stat-val"},n," ",String(e)),f("div",{class:"stat-label"},t))}function Yp(){const n=ae(),e=f("div",{class:"page"},f("h2",{class:"page-title"},"Mitglieder")),t=Wp();return e.append(f("div",{class:"stack"},t.map((r,s)=>{const i=yi(r,n);return f("a",{class:"card member",href:`#/u/${r.id}`},f("span",{class:"place"},String(s+1)),Ht(r,48),f("div",{class:"grow"},f("div",{class:"member-name"},r.name,r.id===U.uid?f("span",{class:"you"},"Du"):null),f("div",{class:"muted small"},Mt(n)<1?`${_e[r.rankIndex].name} · Start ${Hn(Ws())}`:`${_e[r.rankIndex].name} · ${i.final?"100":da(i.pct)} %`),f("div",{class:"muted small member-stats"},`🔥 ${r.streak||0}   ✅ ${r.doneCount||0}   `,Ui(15),` ${r.goonies||0}`),r.punishmentOpen?f("div",{class:"red-mini"},"❗ Bestrafung offen"):null),gc(r.rankIndex,i.pct,58,r.id))}))),e}Yp.live=!0;function NI(){const n=Mt(ae())>ot,e=f("div",{class:"page"},f("h2",{class:"page-title"},n?"Ränge · Endstand":"Ränge"));e.append(f("p",{class:"muted center"},"Am Anfang geht es schnell, am Ende langsam. Wer jeden Tag schafft, ist nach 30 Tagen Gotti."));let t=0;const r=_e.map((s,i)=>{const a=[...U.users.values()].filter(u=>u.rankIndex===i),c=f("div",{class:"card rank-row",style:{"--c":_i[s.group].main}},ts(i,58),f("div",{class:"grow"},f("div",{class:"rank-name"},s.name),f("div",{class:"muted small"},t===0?"Startrang":`nach ${t} geschafften Tagen am Stück`," · ",s.days==null?"Endrang 👑":`${s.days} ${s.days===1?"Tag":"Tage"} bis zum nächsten`),a.length?f("div",{class:"rank-members"},a.map(u=>f("a",{href:`#/u/${u.id}`,title:u.name},Ht(u,30)))):null));return t+=s.days||0,c});return e.append(f("div",{class:"stack"},r.reverse())),e}function VI(){const n=f("div",{class:"page"},f("h2",{class:"page-title"},"Benachrichtigungen"));let e=0;try{e=Number(localStorage.getItem("notifSeen")||0)}catch{}U.notifs.length||n.append(f("div",{class:"card empty"},f("div",{class:"empty-ico"},"🔔"),f("p",{},"Noch nichts da."))),n.append(f("div",{class:"stack"},U.notifs.map(t=>f("a",{class:`card notif ${t.createdAt>e?"unread":""}`,href:t.link||"#/"},f("div",{class:"notif-ico"},t.type==="goonie"?Ui(28):OI[t.type]||"🔔"),f("div",{class:"grow"},f("div",{class:"notif-title"},t.title),f("div",{class:"muted small"},t.body),f("div",{class:"muted tiny"},Fi(t.createdAt,ae())))))));try{localStorage.setItem("notifSeen",String(ae()+1e3))}catch{}return n}const OI={done:"✅",fail:"❌",open:"⏳",goonie:null,comment:"💬",penalty:"❗",punishment:"🎥",remind:"⏰"};function LI(){let n=0;try{n=Number(localStorage.getItem("notifSeen")||0)}catch{}return U.notifs.filter(e=>e.createdAt>n).length}function MI(){const n=U.me,e=f("div",{class:"page"},f("h2",{class:"page-title"},"Einstellungen"));if(!n)return e;const t=f("input",{class:"input",value:n.name,maxLength:24}),r=f("button",{class:"btn btn-blue"},"Speichern");r.onclick=async()=>{const a=t.value.trim();if(!a)return G("Name darf nicht leer sein","error");Pe(r,!0);try{await op({name:a}),G("Name gespeichert","success")}catch{G("Speichern fehlgeschlagen","error")}Pe(r,!1)};const s=Lp()==="granted"&&localStorage.getItem("pushOff")!=="1",i=f("button",{class:`toggle ${s?"on":""}`,"aria-label":"Push an/aus"},f("span",{}));return i.onclick=async()=>{const a=!i.classList.contains("on");i.disabled=!0;try{a?(await Mp(),localStorage.removeItem("pushOff")):(await tI(),localStorage.setItem("pushOff","1")),i.classList.toggle("on",a),G(a?"Push ist an":"Push ist aus","success")}catch(c){G(c.message,"error")}i.disabled=!1},e.append(f("section",{class:"card stack"},f("h3",{class:"section-title small"},"Profilbild"),f("div",{class:"row gap"},Ht(n,64),f("button",{class:"btn btn-gold",onclick:Jp},"📷 Bild auswählen"))),f("section",{class:"card stack"},f("h3",{class:"section-title small"},"Name"),t,r,f("p",{class:"muted small"},`Username: @${n.username} (kann nicht geändert werden)`)),f("section",{class:"card"},f("div",{class:"row between"},f("div",{},f("div",{class:"setting-title"},"🔔 Push-Nachrichten"),f("div",{class:"muted small"},"Erinnerungen, Posts, Goonies, Kommentare")),i),f("button",{class:"btn btn-blue btn-small",style:{marginTop:"12px",width:"100%"},onclick:async a=>{const c=a.currentTarget;Pe(c,!0);try{const u=await le("/push/test");G(u.tokens?"Test-Push gesendet, kommt gleich an":"Push ist auf diesem Gerät noch nicht eingeschaltet",u.tokens?"success":"error")}catch(u){G(u.message,"error")}Pe(c,!1)}},"🔔 Test-Push senden")),f("section",{class:"card stack"},Sh("🔊 Töne","Sounds beim Abhaken, Aufstieg, Goonies",Up(),a=>{lI(a),a&&yt.done()}),Sh("📳 Vibration","Haptisches Feedback (iPhone: ab iOS 18 kurzer Tick)",Bp(),a=>{uI(a),a&&yt.done()})),f("section",{class:"card stack"},f("button",{class:"btn btn-grey",onclick:()=>{localStorage.removeItem("onboarded"),location.hash="#/",location.reload()}},"📲 Anleitung: App installieren"),f("button",{class:"btn btn-red",onclick:async()=>{await Sr("Abmelden?","Du kannst dich jederzeit wieder mit Username und Passwort einloggen.","Abmelden","red")&&await id(zn)}},"Abmelden"))),e}function Sh(n,e,t,r){const s=f("button",{class:`toggle ${t?"on":""}`,"aria-label":n},f("span",{}));return s.onclick=()=>{const i=!s.classList.contains("on");s.classList.toggle("on",i),r(i)},f("div",{class:"row between"},f("div",{},f("div",{class:"setting-title"},n),f("div",{class:"muted small"},e)),s)}let kh=!1,Rt=null;const xI=()=>["localhost","127.0.0.1"].includes(location.hostname);function Rh(n){n&&!Rt?(Rt=f("div",{class:"test-banner"},"🧪 Testmodus: Uhrzeit ist vorgespult"),document.body.append(Rt)):!n&&Rt&&(Rt.remove(),Rt=null),Rt&&(Rt.textContent=`🧪 Testmodus · App-Zeit ${Vr(ae())}`)}function FI(n,e){if(kh)return;const t=xI()||My;kh=!0;const r=f("div",{class:"tp-clock"}),s=f("div",{class:"tiny"}),i=f("div",{class:"testpanel hidden"}),a=f("button",{class:"tp-fab",title:"Testmodus",onclick:()=>i.classList.toggle("hidden")},"🧪");let c=!1;const u=async x=>{if(!c){c=!0,i.classList.add("busy");try{let O=await le("/test/advance",x),$=O.processed||0,H=0;for(;O.pending>0&&H++<400;)s.textContent=`Arbeite Ereignisse ab … noch ${O.pending}`,O=await le("/test/advance",{to:O.now}),$+=O.processed||0;s.textContent=O.error?`Fehler: ${O.error}`:"",t&&g.checked&&await w(),await an(),e(),G(`Jetzt: ${Vr(O.now)} · ${$} Ereignisse`,"info")}catch(O){G(O.message,"error")}c=!1,i.classList.remove("busy")}},h=(x,O=0)=>{const $=ae();let H=yd($);return Pt(H,x,O)<=$&&H++,Pt(H,x,O)},p=f("input",{type:"datetime-local",class:"input"}),g=f("input",{type:"checkbox",checked:!0});async function w(){let x,O=0;do x=await le("/test/bots",{action:"play"}),x.played&&(O++,s.textContent=`${x.played} hat abgehakt${x.failed?" (nicht geschafft)":""} …`);while(x.pending>0&&O<10);O&&G(`${O} Bots haben abgehakt`,"info"),s.textContent=x.info&&!O?x.info:""}const S=f("div",{class:"tp-bots"},f("b",{},"🤖 Bot-Spieler"),f("div",{class:"tp-grid2"},f("button",{onclick:async()=>{try{const x=await le("/test/bots",{action:"create",n:5});G(`${x.created} Bots neu, ${x.total} insgesamt`,"success"),e()}catch(x){G(x.message,"error")}}},"+ 5 Bots"),f("button",{onclick:async()=>{try{await w(),e()}catch(x){G(x.message,"error")}}},"Bots abhaken"),f("button",{onclick:async()=>{if(await Sr("Bots entfernen?",null,"Entfernen","red"))try{await le("/test/bots",{action:"remove"}),e()}catch(x){G(x.message,"error")}}},"Bots entfernen"),f("label",{class:"tp-check"},g," Bots haken beim Vorspulen automatisch ab"))),C=async x=>{if(await Sr("Echte Zeit?","Uhr zurück auf die echte Zeit. Die Spieldaten bleiben (können dann aber zur echten Zeit nicht passen).","Echte Zeit","red"))try{await le("/test/reset",{wipe:x}),await an(),e(),G(x?"Zurückgesetzt. Spiel startet frisch.":"Echte Zeit aktiv","success")}catch($){G($.message,"error")}};async function D(){if(await Sr("Neu starten?","Alle Spielstände, Posts, Kommentare und Benachrichtigungen der Test-App werden gelöscht. Tag 1 beginnt jetzt, die Uhr läuft wieder echt. Konten und Bots bleiben.","Neu starten","red"))try{await le("/test/restart",{}),await an(),e(),G("Neu gestartet: Tag 1 läuft","success")}catch(O){G(O.message,"error")}}i.append(f("b",{},"🧪 Testmodus (deutsche Zeit)"),r,s,f("div",{class:"tp-grid"},f("button",{onclick:()=>u({by:36e5})},"+1 Std"),f("button",{onclick:()=>u({by:6*36e5})},"+6 Std"),f("button",{onclick:()=>u({by:864e5})},"+1 Tag"),f("button",{onclick:()=>u({to:h(21,0)})},"→ 21:00"),f("button",{onclick:()=>u({to:h(22,0)})},"→ 22:00"),f("button",{onclick:()=>u({to:h(23,59)})},"→ 23:59"),f("button",{onclick:()=>u({to:h(0,1)})},"→ 00:01"),f("button",{onclick:()=>u({to:h(20,59)})},"→ 20:59")),f("button",{class:"tp-wide",onclick:()=>u({to:Pt(1,21,0)})},"▶ Zum Tag 1, 21:00"),f("div",{class:"row gap"},p,f("button",{onclick:()=>{if(!p.value)return;const[x,O]=p.value.split("T"),[$,H,me]=x.split("-").map(Number),[te,b]=O.split(":").map(Number);u({to:_d({year:$,month:H,day:me,hour:te,minute:b})})}},"Springen")),S,f("div",{class:"tp-grid2"},f("button",{onclick:()=>C(!1)},"⏪ Echte Zeit"),f("button",{class:"danger",onclick:D},"🔄 Neu starten (Tag 1 ab jetzt)")),f("p",{class:"tiny"},"Vorspulen gilt für alle Spieler. Zurück geht nur über „Echte Zeit“."));const N=f("div",{class:"tp-warn"},"⚠️ Die Challenge hat noch nicht begonnen: kein Ring, keine Erinnerungen, kein Abhaken. Tippe auf „▶ Zum Tag 1, 21:00“.");i.insertBefore(N,i.children[2]),setInterval(()=>{r.textContent=`${Vr(ae())} (${yn(ae()).second}s)`,N.classList.toggle("hidden",ae()>=Pt(0,22,0))},1e3),document.body.append(a,i)}const UI=180*1e3;let Xp=0;async function xs(){Xp=Date.now();try{const n=await fetch(`./version.json?t=${Date.now()}`,{cache:"no-store"});if(!n.ok)return;const{build:e}=await n.json();if(!e||e==="1792182929418")return;if(document.querySelector(".backdrop")){setTimeout(xs,3e4);return}location.replace(`${location.pathname}?v=${e}${location.hash}`)}catch{}}function BI(){setInterval(xs,UI),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Date.now()-Xp>2e4&&xs()}),setTimeout(xs,5e3)}const Nc=`${dd} TEST`;document.title=Nc;document.body.classList.add("test-app"),document.body.append(f("div",{class:"test-app-band"},"🧪 TEST-APP · nichts hier zählt"));const ma=document.getElementById("app"),$I=[{hash:"#/",icon:"🏠",label:"Home"},{hash:"#/me",icon:"👤",label:"Mein Profil"},{hash:"#/members",icon:"👥",label:"Mitglieder"},{hash:"#/ranks",icon:"🏆",label:"Ränge"},{hash:"#/notifications",icon:"🔔",label:"Benachrichtigungen"},{hash:"#/settings",icon:"⚙️",label:"Einstellungen"}];function zI(){const n=location.hash||"#/",[,e,t]=n.split("/");switch(e){case"me":return{key:"me",view:()=>rn(U.uid),leave:rn.leave,live:!0};case"u":return{key:`u/${t}`,view:()=>rn(t),leave:rn.leave,live:!0};case"members":return{key:"members",view:Yp,live:!0};case"ranks":return{key:"ranks",view:NI,live:!0};case"notifications":return{key:"notifications",view:VI,live:!0};case"settings":return{key:"settings",view:MI};case"post":return{key:`post/${t}`,view:()=>qr(t),leave:qr.leave,live:!0};default:return{key:"home",view:Qp,live:!0}}}let Xe=null,et=null,dt=null;function jI(){const n=f("nav",{class:"drawer"}),e=f("div",{class:"scrim",onclick:()=>ga(!1)}),t=f("button",{class:"icon-btn","aria-label":"Menü",onclick:()=>ga(!0)},f("span",{class:"burger"}),f("span",{class:"dot hidden"})),r=f("button",{class:"icon-btn","aria-label":"Aktualisieren",onclick:()=>Zp(r)},"⟳"),s=f("header",{class:"topbar"},t,f("a",{href:"#/",class:"brand"},Nc),r),i=f("div",{class:"ptr"},"⟳");et=f("main",{class:"main"}),Xe=f("div",{class:"shell"},s,i,et,e,n),Xe.drawer=n,Xe.menuBtn=t,Xe.ptr=i,ma.replaceChildren(Xe),HI(i,r)}function qI(){const n=`#/${(location.hash||"#/").split("/")[1]||""}`,e=LI();Xe.drawer.replaceChildren(f("div",{class:"drawer-head"},Nc),...$I.map(t=>f("a",{class:`nav-item ${n===t.hash||t.hash==="#/"&&n==="#/"?"active":""}`,href:t.hash,onclick:()=>ga(!1)},f("span",{class:"nav-ico"},t.icon),f("span",{},t.label),t.hash==="#/notifications"&&e?f("span",{class:"count"},String(e)):null))),Xe.menuBtn.querySelector(".dot").classList.toggle("hidden",!e)}function ga(n){Xe.classList.toggle("menu-open",n)}function On(n=!1){var s;if(!Xe)return;const e=zI();dt&&dt.key!==e.key&&((s=dt.leave)==null||s.call(dt));const t=!dt||dt.key!==e.key;if(!t&&!e.live&&n!=="hard")return;const r=t?0:et.scrollTop;dt=e,et.replaceChildren(e.view()),et.scrollTop=r,qI()}async function Zp(n){n==null||n.classList.add("spin"),await an();try{await AT()}catch{}On("hard"),setTimeout(()=>n==null?void 0:n.classList.remove("spin"),500)}function HI(n,e){let t=null,r=0;et.addEventListener("touchstart",s=>{t=et.scrollTop<=0?s.touches[0].clientY:null,r=0},{passive:!0}),et.addEventListener("touchmove",s=>{t!=null&&(r=Math.max(0,s.touches[0].clientY-t),n.style.transform=`translateY(${Math.min(80,r*.5)}px) rotate(${r*2}deg)`,n.classList.toggle("ready",r>120))},{passive:!0}),et.addEventListener("touchend",()=>{t!=null&&r>120&&Zp(e),t=null,n.style.transform="",n.classList.remove("ready")})}setInterval(()=>{const n=ae();document.querySelectorAll("[data-until]").forEach(e=>{const t=Number(e.dataset.until)-n;e.textContent=Gp(t),t<=0&&!e.dataset.fired&&(e.dataset.fired="1",setTimeout(()=>On(!0),1200))})},1e3);setInterval(()=>{document.querySelectorAll("[data-ring]").forEach(n=>{const e=U.users.get(n.dataset.ring);e&&ET(n,yi(e,ae()).pct)})},15e3);let Ph=0;setInterval(()=>{const n=Math.floor(ae()/6e4);n!==Ph&&(Ph=n,On(!0))},5e3);async function KI(){Pc(),await an(),dT();const n=()=>{Rh(ua),mc&&U.me&&FI(U.me,()=>On(!0))};hT(n),setInterval(()=>Rh(ua),1e3),BI(),TT(()=>{U.me&&(On(!0),pI(U.me),n())}),window.addEventListener("hashchange",()=>{var e;if(location.hash==="#/checkin"){location.hash="#/";const t=wd(ae());t&&U.me&&!((e=U.me.days)!=null&&e[t])&&setTimeout(()=>Hp(t),300);return}On()}),dy(zn,e=>{if(sp(),Xe=null,dt=null,!e){ma.replaceChildren(sI());return}const t=()=>{jI(),et.replaceChildren(f("div",{class:"boot"},f("div",{class:"boot-flame"}))),IT(e.uid,()=>{G("Profil nicht gefunden","error"),id(zn)}),nI()};let r=!1;try{r=localStorage.getItem("onboarded")==="1"}catch{}r?t():ma.replaceChildren(iI(t))})}KI();
