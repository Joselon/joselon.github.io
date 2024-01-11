var Mc=Object.defineProperty;var Nc=(n,e,t)=>e in n?Mc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var F=(n,e,t)=>(Nc(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const is=window,mo=is.ShadowRoot&&(is.ShadyCSS===void 0||is.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_o=Symbol(),cl=new WeakMap;let zh=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==_o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(mo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=cl.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&cl.set(t,e))}return e}toString(){return this.cssText}};const Tc=n=>new zh(typeof n=="string"?n:n+"",void 0,_o),zc=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new zh(t,n,_o)},jc=(n,e)=>{mo?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=is.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},ul=mo?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Tc(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dn;const vs=window,pl=vs.trustedTypes,Lc=pl?pl.emptyScript:"",vl=vs.reactiveElementPolyfillSupport,br={toAttribute(n,e){switch(e){case Boolean:n=n?Lc:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},jh=(n,e)=>e!==n&&(e==e||n==n),cn={attribute:!0,type:String,converter:br,reflect:!1,hasChanged:jh},Ar="finalized";let Qe=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=cn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||cn}static finalize(){if(this.hasOwnProperty(Ar))return!1;this[Ar]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(ul(s))}else e!==void 0&&t.push(ul(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return jc(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=cn){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:br).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:br;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||jh)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Qe[Ar]=!0,Qe.elementProperties=new Map,Qe.elementStyles=[],Qe.shadowRootOptions={mode:"open"},vl==null||vl({ReactiveElement:Qe}),((dn=vs.reactiveElementVersions)!==null&&dn!==void 0?dn:vs.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var un;const fs=window,ut=fs.trustedTypes,fl=ut?ut.createPolicy("lit-html",{createHTML:n=>n}):void 0,wr="$lit$",Q=`lit$${(Math.random()+"").slice(9)}$`,Lh="?"+Q,Ic=`<${Lh}>`,Te=document,gi=()=>Te.createComment(""),mi=n=>n===null||typeof n!="object"&&typeof n!="function",Ih=Array.isArray,Bc=n=>Ih(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",pn=`[ 	
\f\r]`,Xt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$l=/-->/g,gl=/>/g,pe=RegExp(`>|${pn}(?:([^\\s"'>=/]+)(${pn}*=${pn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ml=/'/g,_l=/"/g,Bh=/^(?:script|style|textarea|title)$/i,Dc=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),Vc=Dc(1),pt=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),yl=new WeakMap,Se=Te.createTreeWalker(Te,129,null,!1);function Dh(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return fl!==void 0?fl.createHTML(e):e}const Wc=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=Xt;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===Xt?d[1]==="!--"?o=$l:d[1]!==void 0?o=gl:d[2]!==void 0?(Bh.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=pe):d[3]!==void 0&&(o=pe):o===pe?d[0]===">"?(o=s??Xt,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?pe:d[3]==='"'?_l:ml):o===_l||o===ml?o=pe:o===$l||o===gl?o=Xt:(o=pe,s=void 0);const p=o===pe&&n[a+1].startsWith("/>")?" ":"";r+=o===Xt?l+Ic:c>=0?(i.push(h),l.slice(0,c)+wr+l.slice(c)+Q+p):l+Q+(c===-2?(i.push(void 0),a):p)}return[Dh(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let Er=class Vh{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=Wc(e,t);if(this.el=Vh.createElement(h,i),Se.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=Se.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(wr)||u.startsWith(Q)){const p=d[o++];if(c.push(u),p!==void 0){const $=s.getAttribute(p.toLowerCase()+wr).split(Q),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:f[2],strings:$,ctor:f[1]==="."?Zc:f[1]==="?"?Kc:f[1]==="@"?Jc:Ds})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(Bh.test(s.tagName)){const c=s.textContent.split(Q),u=c.length-1;if(u>0){s.textContent=ut?ut.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],gi()),Se.nextNode(),l.push({type:2,index:++r});s.append(c[u],gi())}}}else if(s.nodeType===8)if(s.data===Lh)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(Q,c+1))!==-1;)l.push({type:7,index:r}),c+=Q.length-1}r++}}static createElement(e,t){const i=Te.createElement("template");return i.innerHTML=e,i}};function vt(n,e,t=n,i){var s,r,o,a;if(e===pt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=mi(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=vt(n,l._$AS(n,e.values),l,i)),e}let qc=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Te).importNode(i,!0);Se.currentNode=r;let o=Se.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new yo(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new Gc(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=Se.nextNode(),a++)}return Se.currentNode=Te,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},yo=class Wh{constructor(e,t,i,s){var r;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=vt(this,e,t),mi(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==pt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Bc(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==x&&mi(this._$AH)?this._$AA.nextSibling.data=e:this.$(Te.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Er.createElement(Dh(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new qc(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=yl.get(e.strings);return t===void 0&&yl.set(e.strings,t=new Er(e)),t}T(e){Ih(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Wh(this.k(gi()),this.k(gi()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ds=class{constructor(e,t,i,s,r){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=vt(this,e,t,0),o=!mi(e)||e!==this._$AH&&e!==pt,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=vt(this,a[i+l],t,l),h===pt&&(h=this._$AH[l]),o||(o=!mi(h)||h!==this._$AH[l]),h===x?e=x:e!==x&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Zc=class extends Ds{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}};const Fc=ut?ut.emptyScript:"";let Kc=class extends Ds{constructor(){super(...arguments),this.type=4}j(e){e&&e!==x?this.element.setAttribute(this.name,Fc):this.element.removeAttribute(this.name)}},Jc=class extends Ds{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=vt(this,e,t,0))!==null&&i!==void 0?i:x)===pt)return;const s=this._$AH,r=e===x&&s!==x||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==x&&(s===x||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Gc=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){vt(this,e)}};const bl=fs.litHtmlPolyfillSupport;bl==null||bl(Er,yo),((un=fs.litHtmlVersions)!==null&&un!==void 0?un:fs.litHtmlVersions=[]).push("2.8.0");const Yc=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new yo(e.insertBefore(gi(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vn,fn;let hi=class extends Qe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Yc(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return pt}};hi.finalized=!0,hi._$litElement$=!0,(vn=globalThis.litElementHydrateSupport)===null||vn===void 0||vn.call(globalThis,{LitElement:hi});const Al=globalThis.litElementPolyfillSupport;Al==null||Al({LitElement:hi});((fn=globalThis.litElementVersions)!==null&&fn!==void 0?fn:globalThis.litElementVersions=[]).push("3.3.3");class Xc extends hi{static get styles(){return zc`
        :host {
          display: grid;
          grid-template-columns: auto 1fr auto;
          color: var(--dile-nav-color, #fff);
          background-color: var(--dile-nav-background-color, #666);
          align-items: var(--dile-nav-align-items, center);
          column-gap: var(--dile-nav-column-gap, 1rem);
          padding: var(--dile-nav-padding-y, 0.8rem) var(--dile-nav-padding-x, 0.6rem);
        }
        
        :host([menu="right"]) {
          grid-template-columns: 1fr auto auto;
        }

        :host([menu="right"]) .menu {
          grid-row-start: 1;
          grid-row-end: 2;
          grid-column-start: 3;
          grid-column-end: 4;
        }

        :host([menu="right"]) .title {
          grid-row-start: 1;
          grid-row-end: 2;
          grid-column-start: 1;
          grid-column-end: 2;
        }

        :host([menu="right"]) .actions {
          grid-row-start: 1;
          grid-row-end: 2;
          grid-column-start: 2;
          grid-column-end: 3;
        }

        .title {
          overflow: hidden;
        }
      `}static get properties(){return{menu:{type:String,reflect:!0}}}constructor(){super(),this.menu="left"}render(){return Vc`
      <div class="menu"><slot name="menu"></slot></div>
      <div class="title"><slot name="title"></slot></div>
      <div class="actions"><slot name="actions"></slot></div>
    `}}window.customElements.define("dile-nav",Xc);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ss=window,bo=ss.ShadowRoot&&(ss.ShadyCSS===void 0||ss.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ao=Symbol(),wl=new WeakMap;let qh=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ao)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(bo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=wl.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&wl.set(t,e))}return e}toString(){return this.cssText}};const Qc=n=>new qh(typeof n=="string"?n:n+"",void 0,Ao),Zh=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new qh(t,n,Ao)},eu=(n,e)=>{bo?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=ss.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},El=bo?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Qc(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $n;const $s=window,Sl=$s.trustedTypes,tu=Sl?Sl.emptyScript:"",xl=$s.reactiveElementPolyfillSupport,Sr={toAttribute(n,e){switch(e){case Boolean:n=n?tu:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Fh=(n,e)=>e!==n&&(e==e||n==n),gn={attribute:!0,type:String,converter:Sr,reflect:!1,hasChanged:Fh},xr="finalized";let et=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=gn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||gn}static finalize(){if(this.hasOwnProperty(xr))return!1;this[xr]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(El(s))}else e!==void 0&&t.push(El(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return eu(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=gn){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Sr).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:Sr;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Fh)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};et[xr]=!0,et.elementProperties=new Map,et.elementStyles=[],et.shadowRootOptions={mode:"open"},xl==null||xl({ReactiveElement:et}),(($n=$s.reactiveElementVersions)!==null&&$n!==void 0?$n:$s.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mn;const gs=window,ft=gs.trustedTypes,Cl=ft?ft.createPolicy("lit-html",{createHTML:n=>n}):void 0,Cr="$lit$",ee=`lit$${(Math.random()+"").slice(9)}$`,Kh="?"+ee,iu=`<${Kh}>`,ze=document,_i=()=>ze.createComment(""),yi=n=>n===null||typeof n!="object"&&typeof n!="function",Jh=Array.isArray,su=n=>Jh(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",_n=`[ 	
\f\r]`,Qt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rl=/-->/g,kl=/>/g,ve=RegExp(`>|${_n}(?:([^\\s"'>=/]+)(${_n}*=${_n}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pl=/'/g,Ol=/"/g,Gh=/^(?:script|style|textarea|title)$/i,nu=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),ru=nu(1),$t=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),Hl=new WeakMap,xe=ze.createTreeWalker(ze,129,null,!1);function Yh(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Cl!==void 0?Cl.createHTML(e):e}const ou=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=Qt;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===Qt?d[1]==="!--"?o=Rl:d[1]!==void 0?o=kl:d[2]!==void 0?(Gh.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=ve):d[3]!==void 0&&(o=ve):o===ve?d[0]===">"?(o=s??Qt,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?ve:d[3]==='"'?Ol:Pl):o===Ol||o===Pl?o=ve:o===Rl||o===kl?o=Qt:(o=ve,s=void 0);const p=o===ve&&n[a+1].startsWith("/>")?" ":"";r+=o===Qt?l+iu:c>=0?(i.push(h),l.slice(0,c)+Cr+l.slice(c)+ee+p):l+ee+(c===-2?(i.push(void 0),a):p)}return[Yh(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let Rr=class Xh{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=ou(e,t);if(this.el=Xh.createElement(h,i),xe.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=xe.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(Cr)||u.startsWith(ee)){const p=d[o++];if(c.push(u),p!==void 0){const $=s.getAttribute(p.toLowerCase()+Cr).split(ee),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:f[2],strings:$,ctor:f[1]==="."?au:f[1]==="?"?du:f[1]==="@"?cu:Vs})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(Gh.test(s.tagName)){const c=s.textContent.split(ee),u=c.length-1;if(u>0){s.textContent=ft?ft.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],_i()),xe.nextNode(),l.push({type:2,index:++r});s.append(c[u],_i())}}}else if(s.nodeType===8)if(s.data===Kh)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(ee,c+1))!==-1;)l.push({type:7,index:r}),c+=ee.length-1}r++}}static createElement(e,t){const i=ze.createElement("template");return i.innerHTML=e,i}};function gt(n,e,t=n,i){var s,r,o,a;if(e===$t)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=yi(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=gt(n,l._$AS(n,e.values),l,i)),e}let lu=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ze).importNode(i,!0);xe.currentNode=r;let o=xe.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new wo(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new uu(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=xe.nextNode(),a++)}return xe.currentNode=ze,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},wo=class Qh{constructor(e,t,i,s){var r;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=gt(this,e,t),yi(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==$t&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):su(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==C&&yi(this._$AH)?this._$AA.nextSibling.data=e:this.$(ze.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Rr.createElement(Yh(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new lu(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=Hl.get(e.strings);return t===void 0&&Hl.set(e.strings,t=new Rr(e)),t}T(e){Jh(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Qh(this.k(_i()),this.k(_i()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Vs=class{constructor(e,t,i,s,r){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=gt(this,e,t,0),o=!yi(e)||e!==this._$AH&&e!==$t,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=gt(this,a[i+l],t,l),h===$t&&(h=this._$AH[l]),o||(o=!yi(h)||h!==this._$AH[l]),h===C?e=C:e!==C&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},au=class extends Vs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}};const hu=ft?ft.emptyScript:"";let du=class extends Vs{constructor(){super(...arguments),this.type=4}j(e){e&&e!==C?this.element.setAttribute(this.name,hu):this.element.removeAttribute(this.name)}},cu=class extends Vs{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=gt(this,e,t,0))!==null&&i!==void 0?i:C)===$t)return;const s=this._$AH,r=e===C&&s!==C||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==C&&(s===C||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},uu=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){gt(this,e)}};const Ul=gs.litHtmlPolyfillSupport;Ul==null||Ul(Rr,wo),((mn=gs.litHtmlVersions)!==null&&mn!==void 0?mn:gs.litHtmlVersions=[]).push("2.8.0");const pu=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new wo(e.insertBefore(_i(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yn,bn;let dt=class extends et{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=pu(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return $t}};dt.finalized=!0,dt._$litElement$=!0,(yn=globalThis.litElementHydrateSupport)===null||yn===void 0||yn.call(globalThis,{LitElement:dt});const Ml=globalThis.litElementPolyfillSupport;Ml==null||Ml({LitElement:dt});((bn=globalThis.litElementVersions)!==null&&bn!==void 0?bn:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns=window,Eo=ns.ShadowRoot&&(ns.ShadyCSS===void 0||ns.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ed=Symbol(),Nl=new WeakMap;let vu=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ed)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Eo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Nl.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Nl.set(t,e))}return e}toString(){return this.cssText}};const fu=n=>new vu(typeof n=="string"?n:n+"",void 0,ed),$u=(n,e)=>{Eo?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=ns.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},Tl=Eo?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return fu(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var An;const ms=window,zl=ms.trustedTypes,gu=zl?zl.emptyScript:"",jl=ms.reactiveElementPolyfillSupport,kr={toAttribute(n,e){switch(e){case Boolean:n=n?gu:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},td=(n,e)=>e!==n&&(e==e||n==n),wn={attribute:!0,type:String,converter:kr,reflect:!1,hasChanged:td},Pr="finalized";let tt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=wn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||wn}static finalize(){if(this.hasOwnProperty(Pr))return!1;this[Pr]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Tl(s))}else e!==void 0&&t.push(Tl(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return $u(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=wn){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:kr).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:kr;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||td)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};tt[Pr]=!0,tt.elementProperties=new Map,tt.elementStyles=[],tt.shadowRootOptions={mode:"open"},jl==null||jl({ReactiveElement:tt}),((An=ms.reactiveElementVersions)!==null&&An!==void 0?An:ms.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var En;const _s=window,mt=_s.trustedTypes,Ll=mt?mt.createPolicy("lit-html",{createHTML:n=>n}):void 0,Or="$lit$",te=`lit$${(Math.random()+"").slice(9)}$`,id="?"+te,mu=`<${id}>`,je=document,bi=()=>je.createComment(""),Ai=n=>n===null||typeof n!="object"&&typeof n!="function",sd=Array.isArray,_u=n=>sd(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Sn=`[ 	
\f\r]`,ei=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Il=/-->/g,Bl=/>/g,fe=RegExp(`>|${Sn}(?:([^\\s"'>=/]+)(${Sn}*=${Sn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Dl=/'/g,Vl=/"/g,nd=/^(?:script|style|textarea|title)$/i,yu=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),bu=yu(1),_t=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),Wl=new WeakMap,Ce=je.createTreeWalker(je,129,null,!1);function rd(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ll!==void 0?Ll.createHTML(e):e}const Au=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ei;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===ei?d[1]==="!--"?o=Il:d[1]!==void 0?o=Bl:d[2]!==void 0?(nd.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=fe):d[3]!==void 0&&(o=fe):o===fe?d[0]===">"?(o=s??ei,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?fe:d[3]==='"'?Vl:Dl):o===Vl||o===Dl?o=fe:o===Il||o===Bl?o=ei:(o=fe,s=void 0);const p=o===fe&&n[a+1].startsWith("/>")?" ":"";r+=o===ei?l+mu:c>=0?(i.push(h),l.slice(0,c)+Or+l.slice(c)+te+p):l+te+(c===-2?(i.push(void 0),a):p)}return[rd(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let Hr=class od{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=Au(e,t);if(this.el=od.createElement(h,i),Ce.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=Ce.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(Or)||u.startsWith(te)){const p=d[o++];if(c.push(u),p!==void 0){const $=s.getAttribute(p.toLowerCase()+Or).split(te),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:f[2],strings:$,ctor:f[1]==="."?Eu:f[1]==="?"?xu:f[1]==="@"?Cu:Ws})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(nd.test(s.tagName)){const c=s.textContent.split(te),u=c.length-1;if(u>0){s.textContent=mt?mt.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],bi()),Ce.nextNode(),l.push({type:2,index:++r});s.append(c[u],bi())}}}else if(s.nodeType===8)if(s.data===id)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(te,c+1))!==-1;)l.push({type:7,index:r}),c+=te.length-1}r++}}static createElement(e,t){const i=je.createElement("template");return i.innerHTML=e,i}};function yt(n,e,t=n,i){var s,r,o,a;if(e===_t)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=Ai(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=yt(n,l._$AS(n,e.values),l,i)),e}let wu=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:je).importNode(i,!0);Ce.currentNode=r;let o=Ce.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new So(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new Ru(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=Ce.nextNode(),a++)}return Ce.currentNode=je,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},So=class ld{constructor(e,t,i,s){var r;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=yt(this,e,t),Ai(e)?e===R||e==null||e===""?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==_t&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):_u(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==R&&Ai(this._$AH)?this._$AA.nextSibling.data=e:this.$(je.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Hr.createElement(rd(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new wu(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=Wl.get(e.strings);return t===void 0&&Wl.set(e.strings,t=new Hr(e)),t}T(e){sd(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new ld(this.k(bi()),this.k(bi()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ws=class{constructor(e,t,i,s,r){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=yt(this,e,t,0),o=!Ai(e)||e!==this._$AH&&e!==_t,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=yt(this,a[i+l],t,l),h===_t&&(h=this._$AH[l]),o||(o=!Ai(h)||h!==this._$AH[l]),h===R?e=R:e!==R&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Eu=class extends Ws{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}};const Su=mt?mt.emptyScript:"";let xu=class extends Ws{constructor(){super(...arguments),this.type=4}j(e){e&&e!==R?this.element.setAttribute(this.name,Su):this.element.removeAttribute(this.name)}},Cu=class extends Ws{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=yt(this,e,t,0))!==null&&i!==void 0?i:R)===_t)return;const s=this._$AH,r=e===R&&s!==R||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==R&&(s===R||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Ru=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){yt(this,e)}};const ql=_s.litHtmlPolyfillSupport;ql==null||ql(Hr,So),((En=_s.litHtmlVersions)!==null&&En!==void 0?En:_s.litHtmlVersions=[]).push("2.8.0");const ku=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new So(e.insertBefore(bi(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xn,Cn;let rs=class extends tt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ku(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return _t}};rs.finalized=!0,rs._$litElement$=!0,(xn=globalThis.litElementHydrateSupport)===null||xn===void 0||xn.call(globalThis,{LitElement:rs});const Zl=globalThis.litElementPolyfillSupport;Zl==null||Zl({LitElement:rs});((Cn=globalThis.litElementVersions)!==null&&Cn!==void 0?Cn:globalThis.litElementVersions=[]).push("3.3.3");const ad=n=>class extends n{static get properties(){return{selected:{type:String},attrForSelected:{type:String},selectorId:{type:String},hashSelection:{type:Boolean}}}constructor(){super(),this._items=[],this.hashSelection=!1,this.itemSelectedChangedHandler=this._itemSelectedChanged.bind(this),this.onHashChangeHandler=this._onHashChange.bind(this)}_onHashChange(){if(this.hashSelection){let e=this.getItems(),t=this.getCleanHash(),i,s=e.find((r,o)=>{let a=this.getItemValueComputed(r,o);return i=o,a==t});if(s){let r=this.getItemValueComputed(s,i);this.selected!=r&&(this.selected=r,this.setSelectedItem(),this.dispatchSelectedChanged())}}}getCleanHash(){let e=window.location.hash;return e.length>1&&(e=e.substring(1)),e}getItemValueComputed(e,t){return this.attrForSelected?e.getAttribute(this.attrForSelected):t}connectedCallback(){super.connectedCallback(),this.addEventListener("dile-item-selected",this.itemSelectedChangedHandler),window.addEventListener("hashchange",this.onHashChangeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dile-item-selected",this.itemSelectedChangedHandler),window.removeEventListener("hashchange",this.onHashChangeHandler)}firstUpdated(){super.firstUpdated(),this._items=this.getItems();let e=0;this._items.forEach(t=>{t._assignedIndex=e,e++}),this._onHashChange(),this.setSelectedItem(),this.selected!==void 0&&setTimeout(()=>this.dispatchSelectedChanged(),500)}render(){return bu`
        <slot></slot>
      `}setSelectedItem(){if(this.attrForSelected)this._items.forEach(e=>{e.getAttribute(this.attrForSelected)==this.selected?e.selected=!0:e.selected=!1});else{let e=parseInt(this.selected);!isNaN(e)&&this._items[e]&&this._items.forEach((t,i)=>{i==e?t.selected=!0:t.selected=!1})}this.hashSelection&&this.selected!=null&&(window.location.hash=this.selected)}_itemSelectedChanged(e){this.attrForSelected?this.selected=e.detail.getAttribute(this.attrForSelected):this.selected=e.detail._assignedIndex,this.dispatchSelectedChanged()}dispatchSelectedChanged(){this.dispatchEvent(new CustomEvent("dile-selected-changed",{bubbles:!0,composed:!0,detail:{selected:this.selected,selectorId:this.selectorId}}))}updated(e){this.setSelectedItem()}getItems(){return this.shadowRoot.querySelector("slot").assignedElements({flatten:!0})}},hd=n=>class extends n{static get properties(){return{selected:{type:Boolean,reflect:!0},index:{type:Number}}}constructor(){super(),this.selected=!1}select(){this.dispatchEvent(new CustomEvent("dile-item-selected",{bubbles:!0,composed:!0,detail:this}))}};class Pu extends hd(dt){static get styles(){return Zh`
      :host {
        display: inline-block;
        margin: 0 3px;
      }
      article {
        border-top-left-radius: var(--dile-tab-border-radius, 4px);
        border-top-right-radius: var(--dile-tab-border-radius, 4px);
        transition: all 0.3s ease;
        color: var(--dile-tab-text-color, #666);
        background-color: var(--dile-tab-background-color, transparent);
        cursor: pointer;
        border: var(--dile-tab-border, none);
        font-weight: var(--dile-tab-font-weight, normal);
        font-size: var(--dile-tab-font-size, 1rem);
      }
      div.label {
        padding: var(--dile-tab-padding, 8px 12px 6px 12px);
        text-transform: var(--dile-tab-text-transform, uppercase);
        white-space: nowrap;
      }
      .selected {
        background-color: var(--dile-tab-selected-background-color, #039be5);
        color: var(--dile-tab-selected-text-color, #fff);
        border: var(--dile-tab-selected-border, none);
      }
      span {
        display: block;
        height: var(--dile-tab-selected-line-height, 5px);
        width: 0;
        background-color: var(--dile-tab-selected-line-color, #0070c0);
        transition: width 0.3s ease;
      }
      .markselected {
        width: 100%;
      }
      .line {
        display: flex;
        justify-content: center;
      }
    `}render(){return ru`
      <article @click='${this.select}' class="${this.selected?"selected":""}">
        <div class="label"><slot></slot></div>
        <div class="line">
          <span class="${this.selected?"markselected":""}"></span>
        </div>
      </article>
    `}}window.customElements.define("dile-tab",Pu);class Ou extends ad(dt){static get styles(){return Zh`
      :host {
        display: flex;
      }
    `}}window.customElements.define("dile-tabs",Ou);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const os=window,xo=os.ShadowRoot&&(os.ShadyCSS===void 0||os.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Co=Symbol(),Fl=new WeakMap;let dd=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Co)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(xo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Fl.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Fl.set(t,e))}return e}toString(){return this.cssText}};const Hu=n=>new dd(typeof n=="string"?n:n+"",void 0,Co),Uu=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new dd(t,n,Co)},Mu=(n,e)=>{xo?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=os.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},Kl=xo?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Hu(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Rn;const ys=window,Jl=ys.trustedTypes,Nu=Jl?Jl.emptyScript:"",Gl=ys.reactiveElementPolyfillSupport,Ur={toAttribute(n,e){switch(e){case Boolean:n=n?Nu:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},cd=(n,e)=>e!==n&&(e==e||n==n),kn={attribute:!0,type:String,converter:Ur,reflect:!1,hasChanged:cd},Mr="finalized";let it=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=kn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||kn}static finalize(){if(this.hasOwnProperty(Mr))return!1;this[Mr]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Kl(s))}else e!==void 0&&t.push(Kl(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Mu(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=kn){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Ur).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:Ur;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||cd)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};it[Mr]=!0,it.elementProperties=new Map,it.elementStyles=[],it.shadowRootOptions={mode:"open"},Gl==null||Gl({ReactiveElement:it}),((Rn=ys.reactiveElementVersions)!==null&&Rn!==void 0?Rn:ys.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pn;const bs=window,bt=bs.trustedTypes,Yl=bt?bt.createPolicy("lit-html",{createHTML:n=>n}):void 0,Nr="$lit$",ie=`lit$${(Math.random()+"").slice(9)}$`,ud="?"+ie,Tu=`<${ud}>`,Le=document,wi=()=>Le.createComment(""),Ei=n=>n===null||typeof n!="object"&&typeof n!="function",pd=Array.isArray,zu=n=>pd(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",On=`[ 	
\f\r]`,ti=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xl=/-->/g,Ql=/>/g,$e=RegExp(`>|${On}(?:([^\\s"'>=/]+)(${On}*=${On}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ea=/'/g,ta=/"/g,vd=/^(?:script|style|textarea|title)$/i,ju=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),Lu=ju(1),At=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),ia=new WeakMap,Re=Le.createTreeWalker(Le,129,null,!1);function fd(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Yl!==void 0?Yl.createHTML(e):e}const Iu=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ti;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===ti?d[1]==="!--"?o=Xl:d[1]!==void 0?o=Ql:d[2]!==void 0?(vd.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=$e):d[3]!==void 0&&(o=$e):o===$e?d[0]===">"?(o=s??ti,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?$e:d[3]==='"'?ta:ea):o===ta||o===ea?o=$e:o===Xl||o===Ql?o=ti:(o=$e,s=void 0);const p=o===$e&&n[a+1].startsWith("/>")?" ":"";r+=o===ti?l+Tu:c>=0?(i.push(h),l.slice(0,c)+Nr+l.slice(c)+ie+p):l+ie+(c===-2?(i.push(void 0),a):p)}return[fd(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let Tr=class $d{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=Iu(e,t);if(this.el=$d.createElement(h,i),Re.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=Re.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(Nr)||u.startsWith(ie)){const p=d[o++];if(c.push(u),p!==void 0){const $=s.getAttribute(p.toLowerCase()+Nr).split(ie),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:f[2],strings:$,ctor:f[1]==="."?Du:f[1]==="?"?Wu:f[1]==="@"?qu:qs})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(vd.test(s.tagName)){const c=s.textContent.split(ie),u=c.length-1;if(u>0){s.textContent=bt?bt.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],wi()),Re.nextNode(),l.push({type:2,index:++r});s.append(c[u],wi())}}}else if(s.nodeType===8)if(s.data===ud)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(ie,c+1))!==-1;)l.push({type:7,index:r}),c+=ie.length-1}r++}}static createElement(e,t){const i=Le.createElement("template");return i.innerHTML=e,i}};function wt(n,e,t=n,i){var s,r,o,a;if(e===At)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=Ei(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=wt(n,l._$AS(n,e.values),l,i)),e}let Bu=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Le).importNode(i,!0);Re.currentNode=r;let o=Re.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new Ro(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new Zu(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=Re.nextNode(),a++)}return Re.currentNode=Le,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Ro=class gd{constructor(e,t,i,s){var r;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=wt(this,e,t),Ei(e)?e===k||e==null||e===""?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==At&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):zu(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==k&&Ei(this._$AH)?this._$AA.nextSibling.data=e:this.$(Le.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Tr.createElement(fd(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new Bu(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=ia.get(e.strings);return t===void 0&&ia.set(e.strings,t=new Tr(e)),t}T(e){pd(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new gd(this.k(wi()),this.k(wi()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},qs=class{constructor(e,t,i,s,r){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=wt(this,e,t,0),o=!Ei(e)||e!==this._$AH&&e!==At,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=wt(this,a[i+l],t,l),h===At&&(h=this._$AH[l]),o||(o=!Ei(h)||h!==this._$AH[l]),h===k?e=k:e!==k&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Du=class extends qs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}};const Vu=bt?bt.emptyScript:"";let Wu=class extends qs{constructor(){super(...arguments),this.type=4}j(e){e&&e!==k?this.element.setAttribute(this.name,Vu):this.element.removeAttribute(this.name)}},qu=class extends qs{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=wt(this,e,t,0))!==null&&i!==void 0?i:k)===At)return;const s=this._$AH,r=e===k&&s!==k||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==k&&(s===k||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Zu=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){wt(this,e)}};const sa=bs.litHtmlPolyfillSupport;sa==null||sa(Tr,Ro),((Pn=bs.litHtmlVersions)!==null&&Pn!==void 0?Pn:bs.litHtmlVersions=[]).push("2.8.0");const Fu=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Ro(e.insertBefore(wi(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Hn,Un;let di=class extends it{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fu(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return At}};di.finalized=!0,di._$litElement$=!0,(Hn=globalThis.litElementHydrateSupport)===null||Hn===void 0||Hn.call(globalThis,{LitElement:di});const na=globalThis.litElementPolyfillSupport;na==null||na({LitElement:di});((Un=globalThis.litElementVersions)!==null&&Un!==void 0?Un:globalThis.litElementVersions=[]).push("3.3.3");class Ku extends di{static get properties(){return{attrForSelected:{type:String},selected:{type:String},selectorId:{type:String},showDisplay:{type:String}}}render(){return Lu`
    <slot></slot>
    `}constructor(){super(),this.transitionTime=1e3,this.selected=0,this._pageInitialization(),this._onSelectorIdChangedHandler=this._onSelectorIdChanged.bind(this),this.showDisplay="block"}static get styles(){return Uu`
      :host {
        display: block;
      }
    `}_pageInitialization(){this.pages=[];let e=this.children;for(let t of e)t.style.display="none",t.style.transition=`opacity ${this.transitionTime}ms`,t.style.opacity="0",this.pages.push(t)}initializeExternalPages(e){this.innerHTML=e,this._pageInitialization()}firstUpdated(){let e=this._selectPage(this.selected,this.attrForSelected);e&&(e.style.display=this.showDisplay),this.selectorId&&document.addEventListener("dile-selected-changed",this._onSelectorIdChangedHandler)}disconnectedCallback(){super.disconnectedCallback(),this.selectorId&&document.removeEventListener("dile-selected-changed",this._onSelectorIdChangedHandler)}updated(e){if(this._updatedAndNotUndefined(e,"selected")||this._updatedAndNotUndefined(e,"attrForSelected")){let t=this._getLastValueProperty(e,"selected"),i=this._getLastValueProperty(e,"attrForSelected");this.hidePage(t,i)}this._showCurrentPage()}_selectPage(e,t){let i;if(!t)i=this.pages[e];else for(let s of this.pages)if(s.getAttribute(t)==e){i=s;break}return i}_showCurrentPage(){let e=this._selectPage(this.selected,this.attrForSelected);e&&(e.style.display=this.showDisplay,setTimeout(()=>{e.style.opacity="1"},50))}hidePage(e,t){let i=this._selectPage(e,t);i&&(i.style.display="none",i.style.opacity="0")}_updatedAndNotUndefined(e,t){return e.has(t)&&e.get(t)!=null}_getLastValueProperty(e,t){return e.has(t)?e.get(t):this[t]}_onSelectorIdChanged(e){e.detail.selectorId==this.selectorId&&(this.selected=e.detail.selected)}}window.customElements.define("dile-pages",Ku);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ls=window,ko=ls.ShadowRoot&&(ls.ShadyCSS===void 0||ls.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Po=Symbol(),ra=new WeakMap;let md=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Po)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(ko&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ra.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ra.set(t,e))}return e}toString(){return this.cssText}};const Ju=n=>new md(typeof n=="string"?n:n+"",void 0,Po),Gu=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new md(t,n,Po)},Yu=(n,e)=>{ko?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=ls.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},oa=ko?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Ju(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Mn;const As=window,la=As.trustedTypes,Xu=la?la.emptyScript:"",aa=As.reactiveElementPolyfillSupport,zr={toAttribute(n,e){switch(e){case Boolean:n=n?Xu:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},_d=(n,e)=>e!==n&&(e==e||n==n),Nn={attribute:!0,type:String,converter:zr,reflect:!1,hasChanged:_d},jr="finalized";let st=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=Nn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Nn}static finalize(){if(this.hasOwnProperty(jr))return!1;this[jr]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(oa(s))}else e!==void 0&&t.push(oa(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Yu(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Nn){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:zr).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:zr;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||_d)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};st[jr]=!0,st.elementProperties=new Map,st.elementStyles=[],st.shadowRootOptions={mode:"open"},aa==null||aa({ReactiveElement:st}),((Mn=As.reactiveElementVersions)!==null&&Mn!==void 0?Mn:As.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Tn;const ws=window,Et=ws.trustedTypes,ha=Et?Et.createPolicy("lit-html",{createHTML:n=>n}):void 0,Lr="$lit$",se=`lit$${(Math.random()+"").slice(9)}$`,yd="?"+se,Qu=`<${yd}>`,Ie=document,Si=()=>Ie.createComment(""),xi=n=>n===null||typeof n!="object"&&typeof n!="function",bd=Array.isArray,ep=n=>bd(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",zn=`[ 	
\f\r]`,ii=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,da=/-->/g,ca=/>/g,ge=RegExp(`>|${zn}(?:([^\\s"'>=/]+)(${zn}*=${zn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ua=/'/g,pa=/"/g,Ad=/^(?:script|style|textarea|title)$/i,tp=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),ip=tp(1),St=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),va=new WeakMap,ke=Ie.createTreeWalker(Ie,129,null,!1);function wd(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ha!==void 0?ha.createHTML(e):e}const sp=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ii;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===ii?d[1]==="!--"?o=da:d[1]!==void 0?o=ca:d[2]!==void 0?(Ad.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=ge):d[3]!==void 0&&(o=ge):o===ge?d[0]===">"?(o=s??ii,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?ge:d[3]==='"'?pa:ua):o===pa||o===ua?o=ge:o===da||o===ca?o=ii:(o=ge,s=void 0);const p=o===ge&&n[a+1].startsWith("/>")?" ":"";r+=o===ii?l+Qu:c>=0?(i.push(h),l.slice(0,c)+Lr+l.slice(c)+se+p):l+se+(c===-2?(i.push(void 0),a):p)}return[wd(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let Ir=class Ed{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=sp(e,t);if(this.el=Ed.createElement(h,i),ke.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=ke.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(Lr)||u.startsWith(se)){const p=d[o++];if(c.push(u),p!==void 0){const $=s.getAttribute(p.toLowerCase()+Lr).split(se),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:f[2],strings:$,ctor:f[1]==="."?rp:f[1]==="?"?lp:f[1]==="@"?ap:Zs})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(Ad.test(s.tagName)){const c=s.textContent.split(se),u=c.length-1;if(u>0){s.textContent=Et?Et.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],Si()),ke.nextNode(),l.push({type:2,index:++r});s.append(c[u],Si())}}}else if(s.nodeType===8)if(s.data===yd)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(se,c+1))!==-1;)l.push({type:7,index:r}),c+=se.length-1}r++}}static createElement(e,t){const i=Ie.createElement("template");return i.innerHTML=e,i}};function xt(n,e,t=n,i){var s,r,o,a;if(e===St)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=xi(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=xt(n,l._$AS(n,e.values),l,i)),e}let np=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ie).importNode(i,!0);ke.currentNode=r;let o=ke.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new Oo(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new hp(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=ke.nextNode(),a++)}return ke.currentNode=Ie,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Oo=class Sd{constructor(e,t,i,s){var r;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=xt(this,e,t),xi(e)?e===P||e==null||e===""?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==St&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ep(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==P&&xi(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ie.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Ir.createElement(wd(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new np(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=va.get(e.strings);return t===void 0&&va.set(e.strings,t=new Ir(e)),t}T(e){bd(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Sd(this.k(Si()),this.k(Si()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Zs=class{constructor(e,t,i,s,r){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=xt(this,e,t,0),o=!xi(e)||e!==this._$AH&&e!==St,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=xt(this,a[i+l],t,l),h===St&&(h=this._$AH[l]),o||(o=!xi(h)||h!==this._$AH[l]),h===P?e=P:e!==P&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},rp=class extends Zs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}};const op=Et?Et.emptyScript:"";let lp=class extends Zs{constructor(){super(...arguments),this.type=4}j(e){e&&e!==P?this.element.setAttribute(this.name,op):this.element.removeAttribute(this.name)}},ap=class extends Zs{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=xt(this,e,t,0))!==null&&i!==void 0?i:P)===St)return;const s=this._$AH,r=e===P&&s!==P||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==P&&(s===P||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},hp=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){xt(this,e)}};const fa=ws.litHtmlPolyfillSupport;fa==null||fa(Ir,Oo),((Tn=ws.litHtmlVersions)!==null&&Tn!==void 0?Tn:ws.litHtmlVersions=[]).push("2.8.0");const dp=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Oo(e.insertBefore(Si(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jn,Ln;let ci=class extends st{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=dp(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return St}};ci.finalized=!0,ci._$litElement$=!0,(jn=globalThis.litElementHydrateSupport)===null||jn===void 0||jn.call(globalThis,{LitElement:ci});const $a=globalThis.litElementPolyfillSupport;$a==null||$a({LitElement:ci});((Ln=globalThis.litElementVersions)!==null&&Ln!==void 0?Ln:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const as=window,Ho=as.ShadowRoot&&(as.ShadyCSS===void 0||as.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Uo=Symbol(),ga=new WeakMap;let xd=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Uo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ho&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ga.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ga.set(t,e))}return e}toString(){return this.cssText}};const cp=n=>new xd(typeof n=="string"?n:n+"",void 0,Uo),up=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new xd(t,n,Uo)},pp=(n,e)=>{Ho?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=as.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},ma=Ho?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return cp(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var In;const Es=window,_a=Es.trustedTypes,vp=_a?_a.emptyScript:"",ya=Es.reactiveElementPolyfillSupport,Br={toAttribute(n,e){switch(e){case Boolean:n=n?vp:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Cd=(n,e)=>e!==n&&(e==e||n==n),Bn={attribute:!0,type:String,converter:Br,reflect:!1,hasChanged:Cd},Dr="finalized";let nt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=Bn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Bn}static finalize(){if(this.hasOwnProperty(Dr))return!1;this[Dr]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(ma(s))}else e!==void 0&&t.push(ma(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return pp(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Bn){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Br).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:Br;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Cd)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};nt[Dr]=!0,nt.elementProperties=new Map,nt.elementStyles=[],nt.shadowRootOptions={mode:"open"},ya==null||ya({ReactiveElement:nt}),((In=Es.reactiveElementVersions)!==null&&In!==void 0?In:Es.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Dn;const Ss=window,Ct=Ss.trustedTypes,ba=Ct?Ct.createPolicy("lit-html",{createHTML:n=>n}):void 0,Vr="$lit$",ne=`lit$${(Math.random()+"").slice(9)}$`,Rd="?"+ne,fp=`<${Rd}>`,Be=document,Ci=()=>Be.createComment(""),Ri=n=>n===null||typeof n!="object"&&typeof n!="function",kd=Array.isArray,$p=n=>kd(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Vn=`[ 	
\f\r]`,si=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Aa=/-->/g,wa=/>/g,me=RegExp(`>|${Vn}(?:([^\\s"'>=/]+)(${Vn}*=${Vn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ea=/'/g,Sa=/"/g,Pd=/^(?:script|style|textarea|title)$/i,gp=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),xa=gp(1),Rt=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),Ca=new WeakMap,Pe=Be.createTreeWalker(Be,129,null,!1);function Od(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ba!==void 0?ba.createHTML(e):e}const mp=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=si;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===si?d[1]==="!--"?o=Aa:d[1]!==void 0?o=wa:d[2]!==void 0?(Pd.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=me):d[3]!==void 0&&(o=me):o===me?d[0]===">"?(o=s??si,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?me:d[3]==='"'?Sa:Ea):o===Sa||o===Ea?o=me:o===Aa||o===wa?o=si:(o=me,s=void 0);const p=o===me&&n[a+1].startsWith("/>")?" ":"";r+=o===si?l+fp:c>=0?(i.push(h),l.slice(0,c)+Vr+l.slice(c)+ne+p):l+ne+(c===-2?(i.push(void 0),a):p)}return[Od(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let Wr=class Hd{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=mp(e,t);if(this.el=Hd.createElement(h,i),Pe.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=Pe.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(Vr)||u.startsWith(ne)){const p=d[o++];if(c.push(u),p!==void 0){const $=s.getAttribute(p.toLowerCase()+Vr).split(ne),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:f[2],strings:$,ctor:f[1]==="."?yp:f[1]==="?"?Ap:f[1]==="@"?wp:Fs})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(Pd.test(s.tagName)){const c=s.textContent.split(ne),u=c.length-1;if(u>0){s.textContent=Ct?Ct.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],Ci()),Pe.nextNode(),l.push({type:2,index:++r});s.append(c[u],Ci())}}}else if(s.nodeType===8)if(s.data===Rd)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(ne,c+1))!==-1;)l.push({type:7,index:r}),c+=ne.length-1}r++}}static createElement(e,t){const i=Be.createElement("template");return i.innerHTML=e,i}};function kt(n,e,t=n,i){var s,r,o,a;if(e===Rt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=Ri(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=kt(n,l._$AS(n,e.values),l,i)),e}let _p=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Be).importNode(i,!0);Pe.currentNode=r;let o=Pe.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new Mo(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new Ep(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=Pe.nextNode(),a++)}return Pe.currentNode=Be,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Mo=class Ud{constructor(e,t,i,s){var r;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=kt(this,e,t),Ri(e)?e===O||e==null||e===""?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==Rt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):$p(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==O&&Ri(this._$AH)?this._$AA.nextSibling.data=e:this.$(Be.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Wr.createElement(Od(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new _p(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=Ca.get(e.strings);return t===void 0&&Ca.set(e.strings,t=new Wr(e)),t}T(e){kd(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Ud(this.k(Ci()),this.k(Ci()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Fs=class{constructor(e,t,i,s,r){this.type=1,this._$AH=O,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=kt(this,e,t,0),o=!Ri(e)||e!==this._$AH&&e!==Rt,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=kt(this,a[i+l],t,l),h===Rt&&(h=this._$AH[l]),o||(o=!Ri(h)||h!==this._$AH[l]),h===O?e=O:e!==O&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},yp=class extends Fs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===O?void 0:e}};const bp=Ct?Ct.emptyScript:"";let Ap=class extends Fs{constructor(){super(...arguments),this.type=4}j(e){e&&e!==O?this.element.setAttribute(this.name,bp):this.element.removeAttribute(this.name)}},wp=class extends Fs{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=kt(this,e,t,0))!==null&&i!==void 0?i:O)===Rt)return;const s=this._$AH,r=e===O&&s!==O||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==O&&(s===O||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Ep=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){kt(this,e)}};const Ra=Ss.litHtmlPolyfillSupport;Ra==null||Ra(Wr,Mo),((Dn=Ss.litHtmlVersions)!==null&&Dn!==void 0?Dn:Ss.litHtmlVersions=[]).push("2.8.0");const Sp=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Mo(e.insertBefore(Ci(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wn,qn;let ui=class extends nt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Sp(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Rt}};ui.finalized=!0,ui._$litElement$=!0,(Wn=globalThis.litElementHydrateSupport)===null||Wn===void 0||Wn.call(globalThis,{LitElement:ui});const ka=globalThis.litElementPolyfillSupport;ka==null||ka({LitElement:ui});((qn=globalThis.litElementVersions)!==null&&qn!==void 0?qn:globalThis.litElementVersions=[]).push("3.3.3");const xp=n=>class extends n{constructor(){super(),this.closeOnEscHandler=this.escClose.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.closeOnEscHandler)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.closeOnEscHandler)}escClose(e){e.key==="Escape"&&this.opened&&this.close()}close(){console.log("You need to implement a close method!")}},Cp="dile-app-drawer-click-outside",Rp="dile-app-drawer-closed";class kp extends xp(ui){static get properties(){return{direction:{type:String,reflect:!0},opened:{type:Boolean,reflect:!0},noModal:{type:Boolean,attribute:"no-modal"}}}constructor(){super(),this.direction="top",this.opened=!1,this._documentClose=this._documentClose.bind(this)}static get styles(){return up`
      :host {
        display: block;
      }

      .modal {
        display: none;
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: var(--dile-app-drawer-modal-z-index, var(--dile-app-drawer-z-index, 10000));
        opacity: 0;
        transition: opacity 0.3s ease;
        background-color: var(
          --dile-app-drawer-modal-background-color,
          rgba(20, 20, 20, 0.7)
        );
      }

      .menu {
        position: fixed;
        box-sizing: border-box;
        z-index: var(--dile-app-drawer-z-index, 10000);
        background-color: var(--dile-app-drawer-background-color, #ddd);
        transition: transform 0.3s ease;
        overflow: auto;
      }

      section {
        transform: translateX(-100vw);
        transition: transform 0.2s ease 0.3s;
      }

      :host([opened]) .modal {
        display: block;
        opacity: 1;
      }

      :host([opened]) .menu {
        display: block;
      }

      :host([opened]) section {
        transform: translateX(0);
      }

      :host([direction="top"]) .menu {
        top: var(--dile-app-drawer-closed-top, -100vh);
        left: var(--dile-app-drawer-closed-left, 0);
        height: var(--dile-app-drawer-content-height, auto);
        width: var(--dile-app-drawer-content-width, 100vw);
        box-shadow: var(--dile-app-drawer-box-shadow, 0 1px 8px #000);
      }

      :host([direction="left"]) .menu {
        top: var(--dile-app-drawer-closed-top, 0);
        left: var(--dile-app-drawer-closed-left, -100vw);
        height: var(--dile-app-drawer-content-height, 100vh);
        width: var(--dile-app-drawer-content-width, auto);
        box-shadow: var(--dile-app-drawer-box-shadow, 1px 0 8px #000);
      }

      :host([direction="top"][opened]) .menu {
        transform: translateY(100vh);
      }

      :host([direction="left"][opened]) .menu {
        transform: translateX(100vw);
      }
    `}render(){return xa`
      ${this.modalTemplate}
      <div class="menu" @click="${this._contentClick}">
        <section>
          <slot></slot>
        </section>
      </div>
    `}get modalTemplate(){return this.noModal?"":xa`<div class="modal" @click=${this._documentClose}></div>`}_documentClose(){this.opened&&(this.close(),this.dispatchEvent(new CustomEvent(Cp,{bubbles:!0,composed:!0})))}toggle(){this.opened=!this.opened}open(){this.opened=!0}close(){this.opened=!1,this.dispatchEvent(new CustomEvent(Rp,{bubbles:!0,composed:!0}))}_contentClick(e){e.stopPropagation()}}customElements.define("dile-app-drawer",kp);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hs=window,No=hs.ShadowRoot&&(hs.ShadyCSS===void 0||hs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,To=Symbol(),Pa=new WeakMap;let Md=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==To)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(No&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Pa.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Pa.set(t,e))}return e}toString(){return this.cssText}};const Pp=n=>new Md(typeof n=="string"?n:n+"",void 0,To),Op=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new Md(t,n,To)},Hp=(n,e)=>{No?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=hs.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},Oa=No?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Pp(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Zn;const xs=window,Ha=xs.trustedTypes,Up=Ha?Ha.emptyScript:"",Ua=xs.reactiveElementPolyfillSupport,qr={toAttribute(n,e){switch(e){case Boolean:n=n?Up:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Nd=(n,e)=>e!==n&&(e==e||n==n),Fn={attribute:!0,type:String,converter:qr,reflect:!1,hasChanged:Nd},Zr="finalized";let rt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=Fn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Fn}static finalize(){if(this.hasOwnProperty(Zr))return!1;this[Zr]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Oa(s))}else e!==void 0&&t.push(Oa(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Hp(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Fn){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:qr).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:qr;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Nd)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};rt[Zr]=!0,rt.elementProperties=new Map,rt.elementStyles=[],rt.shadowRootOptions={mode:"open"},Ua==null||Ua({ReactiveElement:rt}),((Zn=xs.reactiveElementVersions)!==null&&Zn!==void 0?Zn:xs.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kn;const Cs=window,Pt=Cs.trustedTypes,Ma=Pt?Pt.createPolicy("lit-html",{createHTML:n=>n}):void 0,Fr="$lit$",re=`lit$${(Math.random()+"").slice(9)}$`,Td="?"+re,Mp=`<${Td}>`,De=document,ki=()=>De.createComment(""),Pi=n=>n===null||typeof n!="object"&&typeof n!="function",zd=Array.isArray,Np=n=>zd(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Jn=`[ 	
\f\r]`,ni=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Na=/-->/g,Ta=/>/g,_e=RegExp(`>|${Jn}(?:([^\\s"'>=/]+)(${Jn}*=${Jn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),za=/'/g,ja=/"/g,jd=/^(?:script|style|textarea|title)$/i,Tp=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),zp=Tp(1),Ot=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),La=new WeakMap,Oe=De.createTreeWalker(De,129,null,!1);function Ld(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ma!==void 0?Ma.createHTML(e):e}const jp=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ni;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===ni?d[1]==="!--"?o=Na:d[1]!==void 0?o=Ta:d[2]!==void 0?(jd.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=_e):d[3]!==void 0&&(o=_e):o===_e?d[0]===">"?(o=s??ni,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?_e:d[3]==='"'?ja:za):o===ja||o===za?o=_e:o===Na||o===Ta?o=ni:(o=_e,s=void 0);const p=o===_e&&n[a+1].startsWith("/>")?" ":"";r+=o===ni?l+Mp:c>=0?(i.push(h),l.slice(0,c)+Fr+l.slice(c)+re+p):l+re+(c===-2?(i.push(void 0),a):p)}return[Ld(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let Kr=class Id{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=jp(e,t);if(this.el=Id.createElement(h,i),Oe.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=Oe.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(Fr)||u.startsWith(re)){const p=d[o++];if(c.push(u),p!==void 0){const $=s.getAttribute(p.toLowerCase()+Fr).split(re),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:f[2],strings:$,ctor:f[1]==="."?Ip:f[1]==="?"?Dp:f[1]==="@"?Vp:Ks})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(jd.test(s.tagName)){const c=s.textContent.split(re),u=c.length-1;if(u>0){s.textContent=Pt?Pt.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],ki()),Oe.nextNode(),l.push({type:2,index:++r});s.append(c[u],ki())}}}else if(s.nodeType===8)if(s.data===Td)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(re,c+1))!==-1;)l.push({type:7,index:r}),c+=re.length-1}r++}}static createElement(e,t){const i=De.createElement("template");return i.innerHTML=e,i}};function Ht(n,e,t=n,i){var s,r,o,a;if(e===Ot)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=Pi(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Ht(n,l._$AS(n,e.values),l,i)),e}let Lp=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:De).importNode(i,!0);Oe.currentNode=r;let o=Oe.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new zo(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new Wp(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=Oe.nextNode(),a++)}return Oe.currentNode=De,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},zo=class Bd{constructor(e,t,i,s){var r;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ht(this,e,t),Pi(e)?e===H||e==null||e===""?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==Ot&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Np(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==H&&Pi(this._$AH)?this._$AA.nextSibling.data=e:this.$(De.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Kr.createElement(Ld(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new Lp(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=La.get(e.strings);return t===void 0&&La.set(e.strings,t=new Kr(e)),t}T(e){zd(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Bd(this.k(ki()),this.k(ki()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ks=class{constructor(e,t,i,s,r){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Ht(this,e,t,0),o=!Pi(e)||e!==this._$AH&&e!==Ot,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=Ht(this,a[i+l],t,l),h===Ot&&(h=this._$AH[l]),o||(o=!Pi(h)||h!==this._$AH[l]),h===H?e=H:e!==H&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ip=class extends Ks{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}};const Bp=Pt?Pt.emptyScript:"";let Dp=class extends Ks{constructor(){super(...arguments),this.type=4}j(e){e&&e!==H?this.element.setAttribute(this.name,Bp):this.element.removeAttribute(this.name)}},Vp=class extends Ks{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Ht(this,e,t,0))!==null&&i!==void 0?i:H)===Ot)return;const s=this._$AH,r=e===H&&s!==H||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==H&&(s===H||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Wp=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ht(this,e)}};const Ia=Cs.litHtmlPolyfillSupport;Ia==null||Ia(Kr,zo),((Kn=Cs.litHtmlVersions)!==null&&Kn!==void 0?Kn:Cs.litHtmlVersions=[]).push("2.8.0");const qp=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new zo(e.insertBefore(ki(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Gn,Yn;let pi=class extends rt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qp(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Ot}};pi.finalized=!0,pi._$litElement$=!0,(Gn=globalThis.litElementHydrateSupport)===null||Gn===void 0||Gn.call(globalThis,{LitElement:pi});const Ba=globalThis.litElementPolyfillSupport;Ba==null||Ba({LitElement:pi});((Yn=globalThis.litElementVersions)!==null&&Yn!==void 0?Yn:globalThis.litElementVersions=[]).push("3.3.3");class Zp extends pi{static get properties(){return{active:{type:Boolean}}}static get styles(){return Op`
      :host {
        display: inline-block;
      }
      .hamburger {
        padding: var(--dile-hamburger-padding-y, 15px) var(--dile-hamburger-padding-x, 15px);
        display: flex;
        align-items: center;
        cursor: pointer;
        transition-property: opacity, filter;
        transition-duration: 0.15s;
        transition-timing-function: linear;
        font: inherit;
        color: inherit;
        text-transform: none;
        background-color: transparent;
        border: 0;
        margin: 0;
        overflow: visible;
      }
      .hamburger:hover {
        opacity: 0.7;
      }
      .hamburger.is-active:hover {
        opacity: 0.7;
      }
      .hamburger.is-active .hamburger-inner,
      .hamburger.is-active .hamburger-inner::before,
      .hamburger.is-active .hamburger-inner::after {
        background-color: var(--dile-hamburger-active-color, #000);
      }

      .hamburger-box {
        width: var(--dile-hamburger-width, 24px);
        height: var(--dile-hamburger-height, 24px);
        display: inline-block;
        position: relative;
      }

      .hamburger-inner {
        display: block;
        top: 50%;
        margin-top: 0px;
      }
      .hamburger-inner,
      .hamburger-inner::before,
      .hamburger-inner::after {
        width: var(--dile-hamburger-width, 24px);
        height: var(--dile-hamburger-line-size, 3px);
        background-color: var(--dile-hamburger-color, #000);
        border-radius: var(--dile-hamburger-line-size, 3px);
        position: absolute;
        transition-property: transform;
        transition-duration: 0.15s;
        transition-timing-function: ease;
      }
      .hamburger-inner::before,
      .hamburger-inner::after {
        content: "";
        display: block;
      }
      .hamburger-inner::before {
        top: var(--dile-hamburger-line-separation, -6px);
      }
      .hamburger-inner::after {
        bottom: var(--dile-hamburger-line-separation, -6px);
      }

      /*
        * Squeeze
        */
      .hamburger--squeeze .hamburger-inner {
        transition-duration: 0.075s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
      .hamburger--squeeze .hamburger-inner::before {
        transition: top 0.075s 0.12s ease, opacity 0.075s ease;
      }
      .hamburger--squeeze .hamburger-inner::after {
        transition: bottom 0.075s 0.12s ease,
          transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }

      .hamburger--squeeze.is-active .hamburger-inner {
        transform: rotate(45deg);
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      }
      .hamburger--squeeze.is-active .hamburger-inner::before {
        top: 0;
        opacity: 0;
        transition: top 0.075s ease, opacity 0.075s 0.12s ease;
      }
      .hamburger--squeeze.is-active .hamburger-inner::after {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.075s ease,
          transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
      }

      button:focus {
        outline: none;
      }
    `}render(){return zp`
      <button
        class="hamburger hamburger--squeeze ${this.active?"is-active":""}"
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    `}}window.customElements.define("dile-hamburger",Zp);class Fp extends ci{static get properties(){return{direction:{type:String,reflect:!0},opened:{type:Boolean,reflect:!0},hamburgerAlwaysVisible:{type:Boolean,reflect:!0}}}static get styles(){return Gu`
      :host {
        display: flex;
        align-items: center;
      }
      :host([hamburgerAlwaysVisible]) dile-hamburger {
        position: relative;
        z-index: 100020;
      }
    `}constructor(){super(),this.direction="top",this.opened=!1,this.hamburgerAlwaysVisible=!1}firstUpdated(){this.drawer=this.shadowRoot.getElementById("drawer");let e=this.querySelector("[dile-cloak]");e&&e.removeAttribute("dile-cloak")}updated(e){if(e.has("opened")){let t=this.opened?"dile-menu-hamburger-opened":"dile-menu-hamburger-closed";this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:{opened:this.opened}}))}}render(){return ip`
      <dile-hamburger @click="${this.toggle}" ?active="${this.opened}"></dile-hamburger>
      <dile-app-drawer 
        id="drawer" 
        ?opened="${this.opened}" 
        direction="${this.direction}"
        @dile-app-drawer-closed="${this.close}"
      >
        <slot name="menu"></slot>
      </dile-app-drawer>
    `}toggle(){this.opened=!this.opened}open(){this.opened=!0}close(){this.opened=!1}}window.customElements.define("dile-menu-hamburger",Fp);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ds=window,jo=ds.ShadowRoot&&(ds.ShadyCSS===void 0||ds.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Lo=Symbol(),Da=new WeakMap;let Dd=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Lo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(jo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Da.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Da.set(t,e))}return e}toString(){return this.cssText}};const Kp=n=>new Dd(typeof n=="string"?n:n+"",void 0,Lo),Vd=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new Dd(t,n,Lo)},Jp=(n,e)=>{jo?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=ds.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},Va=jo?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Kp(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xn;const Rs=window,Wa=Rs.trustedTypes,Gp=Wa?Wa.emptyScript:"",qa=Rs.reactiveElementPolyfillSupport,Jr={toAttribute(n,e){switch(e){case Boolean:n=n?Gp:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Wd=(n,e)=>e!==n&&(e==e||n==n),Qn={attribute:!0,type:String,converter:Jr,reflect:!1,hasChanged:Wd},Gr="finalized";let ot=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=Qn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Qn}static finalize(){if(this.hasOwnProperty(Gr))return!1;this[Gr]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Va(s))}else e!==void 0&&t.push(Va(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Jp(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Qn){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Jr).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:Jr;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Wd)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ot[Gr]=!0,ot.elementProperties=new Map,ot.elementStyles=[],ot.shadowRootOptions={mode:"open"},qa==null||qa({ReactiveElement:ot}),((Xn=Rs.reactiveElementVersions)!==null&&Xn!==void 0?Xn:Rs.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var er;const ks=window,Ut=ks.trustedTypes,Za=Ut?Ut.createPolicy("lit-html",{createHTML:n=>n}):void 0,Yr="$lit$",oe=`lit$${(Math.random()+"").slice(9)}$`,qd="?"+oe,Yp=`<${qd}>`,Ve=document,Oi=()=>Ve.createComment(""),Hi=n=>n===null||typeof n!="object"&&typeof n!="function",Zd=Array.isArray,Xp=n=>Zd(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",tr=`[ 	
\f\r]`,ri=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fa=/-->/g,Ka=/>/g,ye=RegExp(`>|${tr}(?:([^\\s"'>=/]+)(${tr}*=${tr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ja=/'/g,Ga=/"/g,Fd=/^(?:script|style|textarea|title)$/i,Qp=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),K=Qp(1),Mt=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),Ya=new WeakMap,He=Ve.createTreeWalker(Ve,129,null,!1);function Kd(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Za!==void 0?Za.createHTML(e):e}const ev=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ri;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===ri?d[1]==="!--"?o=Fa:d[1]!==void 0?o=Ka:d[2]!==void 0?(Fd.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=ye):d[3]!==void 0&&(o=ye):o===ye?d[0]===">"?(o=s??ri,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?ye:d[3]==='"'?Ga:Ja):o===Ga||o===Ja?o=ye:o===Fa||o===Ka?o=ri:(o=ye,s=void 0);const p=o===ye&&n[a+1].startsWith("/>")?" ":"";r+=o===ri?l+Yp:c>=0?(i.push(h),l.slice(0,c)+Yr+l.slice(c)+oe+p):l+oe+(c===-2?(i.push(void 0),a):p)}return[Kd(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let Xr=class Jd{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=ev(e,t);if(this.el=Jd.createElement(h,i),He.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=He.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(Yr)||u.startsWith(oe)){const p=d[o++];if(c.push(u),p!==void 0){const $=s.getAttribute(p.toLowerCase()+Yr).split(oe),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:f[2],strings:$,ctor:f[1]==="."?iv:f[1]==="?"?nv:f[1]==="@"?rv:Js})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(Fd.test(s.tagName)){const c=s.textContent.split(oe),u=c.length-1;if(u>0){s.textContent=Ut?Ut.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],Oi()),He.nextNode(),l.push({type:2,index:++r});s.append(c[u],Oi())}}}else if(s.nodeType===8)if(s.data===qd)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(oe,c+1))!==-1;)l.push({type:7,index:r}),c+=oe.length-1}r++}}static createElement(e,t){const i=Ve.createElement("template");return i.innerHTML=e,i}};function Nt(n,e,t=n,i){var s,r,o,a;if(e===Mt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=Hi(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Nt(n,l._$AS(n,e.values),l,i)),e}let tv=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ve).importNode(i,!0);He.currentNode=r;let o=He.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new Io(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new ov(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=He.nextNode(),a++)}return He.currentNode=Ve,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Io=class Gd{constructor(e,t,i,s){var r;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Nt(this,e,t),Hi(e)?e===U||e==null||e===""?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==Mt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Xp(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==U&&Hi(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ve.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Xr.createElement(Kd(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new tv(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=Ya.get(e.strings);return t===void 0&&Ya.set(e.strings,t=new Xr(e)),t}T(e){Zd(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Gd(this.k(Oi()),this.k(Oi()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Js=class{constructor(e,t,i,s,r){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Nt(this,e,t,0),o=!Hi(e)||e!==this._$AH&&e!==Mt,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=Nt(this,a[i+l],t,l),h===Mt&&(h=this._$AH[l]),o||(o=!Hi(h)||h!==this._$AH[l]),h===U?e=U:e!==U&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},iv=class extends Js{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}};const sv=Ut?Ut.emptyScript:"";let nv=class extends Js{constructor(){super(...arguments),this.type=4}j(e){e&&e!==U?this.element.setAttribute(this.name,sv):this.element.removeAttribute(this.name)}},rv=class extends Js{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Nt(this,e,t,0))!==null&&i!==void 0?i:U)===Mt)return;const s=this._$AH,r=e===U&&s!==U||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==U&&(s===U||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},ov=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Nt(this,e)}};const Xa=ks.litHtmlPolyfillSupport;Xa==null||Xa(Xr,Io),((er=ks.litHtmlVersions)!==null&&er!==void 0?er:ks.litHtmlVersions=[]).push("2.8.0");const lv=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Io(e.insertBefore(Oi(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ir,sr;let ct=class extends ot{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=lv(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Mt}};ct.finalized=!0,ct._$litElement$=!0,(ir=globalThis.litElementHydrateSupport)===null||ir===void 0||ir.call(globalThis,{LitElement:ct});const Qa=globalThis.litElementPolyfillSupport;Qa==null||Qa({LitElement:ct});((sr=globalThis.litElementVersions)!==null&&sr!==void 0?sr:globalThis.litElementVersions=[]).push("3.3.3");class av extends ad(ct){static get styles(){return Vd`
      :host {
        display: block;
      }
    `}}window.customElements.define("dile-selector",av);const hv={navigate_next:K`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>`,arrow_forward:K`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>`,star:K`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#f26"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,label_important:K`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3.5 18.99l11 .01c.67 0 1.27-.33 1.63-.84L20.5 12l-4.37-6.16c-.36-.51-.96-.84-1.63-.84l-11 .01L8.34 12 3.5 18.99z"/></svg>`,add:K`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>`};class dv extends hd(ct){static get styles(){return Vd`
      :host {
        display: block;
        cursor: pointer;
      }
      article {
        display: flex;
        align-items: center;
        padding-top: var(--dile-selector-padding-y, 0.2rem); 
        padding-bottom: var(--dile-selector-padding-y, 0.2rem); 
        padding-left:  var(--dile-selector-padding-x, 0.5rem); 
        padding-right:  var(--dile-selector-padding-x, 0.5rem); 
        background-color: var(--dile-selector-background-color, transparent);
        color: var(--dile-selector-text-color, #000);
        transition: all 0.3s ease-in;
      }
      .selected {
        background-color: var(--dile-selector-selected-background-color, #039be5);
        color: var(--dile-selector-selected-text-color, #fff);
        font-weight: var(--dile-selector-selected-font-weight, normal);
        border-radius: var(--dile-selector-selected-border-radius, 0);
      }
      .icon {
        margin-right: 0.3rem;
        display: flex;
        align-items: center;
      }
      .icon svg {
        color: red;
        fill: var(--dile-selector-icon-color, #039be5);
        width: var(--dile-selector-icon-size, 20px);
        height: var(--dile-selector-icon-size, 20px);
      }
      .selected .icon svg {
        fill: var(--dile-selector-selected-icon-color, #fff);
      }
      a {
        display: block;
        text-decoration: var(--dile-selector-text-decoration, none);
      }
    `}static get properties(){return{icon:{type:String},href:{type:String}}}constructor(){super(),this.href=""}render(){return K`
      ${this.href==""?this.itemTemplate:K`<a href="${this.href}">${this.itemTemplate}</a>`}
    `}get itemTemplate(){return K`
      <article @click='${this.select}' class="${this.selected?"selected":""}">
        ${this.icon?K`<div class="icon">${this.iconElement(this.icon)}</div>`:""}
        <div class="line"><slot></slot></div>
      </article>
    `}iconElement(e){return hv[e]}}window.customElements.define("dile-selector-item",dv);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cs=globalThis,Bo=cs.ShadowRoot&&(cs.ShadyCSS===void 0||cs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Do=Symbol(),eh=new WeakMap;let Yd=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Do)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Bo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=eh.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&eh.set(t,e))}return e}toString(){return this.cssText}};const cv=n=>new Yd(typeof n=="string"?n:n+"",void 0,Do),Zi=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new Yd(t,n,Do)},uv=(n,e)=>{if(Bo)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=cs.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)}},th=Bo?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return cv(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pv,defineProperty:vv,getOwnPropertyDescriptor:fv,getOwnPropertyNames:$v,getOwnPropertySymbols:gv,getPrototypeOf:mv}=Object,de=globalThis,ih=de.trustedTypes,_v=ih?ih.emptyScript:"",nr=de.reactiveElementPolyfillSupport,vi=(n,e)=>n,Qr={toAttribute(n,e){switch(e){case Boolean:n=n?_v:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Xd=(n,e)=>!pv(n,e),sh={attribute:!0,type:String,converter:Qr,reflect:!1,hasChanged:Xd};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),de.litPropertyMetadata??(de.litPropertyMetadata=new WeakMap);class lt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=sh){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&vv(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:r}=fv(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const a=s==null?void 0:s.call(this);r.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??sh}static _$Ei(){if(this.hasOwnProperty(vi("elementProperties")))return;const e=mv(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(vi("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(vi("properties"))){const t=this.properties,i=[...$v(t),...gv(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(th(s))}else e!==void 0&&t.push(th(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return uv(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){var r;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:Qr).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var r;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:Qr;this._$Em=s,this[s]=a.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i,s=!1,r){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Xd)(s?r:this[e],t))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.C(r,this[r],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$E_)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(t)):this._$ET()}catch(s){throw e=!1,this._$ET(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EO(t,this[t]))),this._$ET()}updated(e){}firstUpdated(e){}}lt.elementStyles=[],lt.shadowRootOptions={mode:"open"},lt[vi("elementProperties")]=new Map,lt[vi("finalized")]=new Map,nr==null||nr({ReactiveElement:lt}),(de.reactiveElementVersions??(de.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fi=globalThis,Ps=fi.trustedTypes,nh=Ps?Ps.createPolicy("lit-html",{createHTML:n=>n}):void 0,Qd="$lit$",le=`lit$${(Math.random()+"").slice(9)}$`,ec="?"+le,yv=`<${ec}>`,We=document,Ui=()=>We.createComment(""),Mi=n=>n===null||typeof n!="object"&&typeof n!="function",tc=Array.isArray,bv=n=>tc(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",rr=`[ 	
\f\r]`,oi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rh=/-->/g,oh=/>/g,be=RegExp(`>|${rr}(?:([^\\s"'>=/]+)(${rr}*=${rr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lh=/'/g,ah=/"/g,ic=/^(?:script|style|textarea|title)$/i,Av=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),D=Av(1),Tt=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),hh=new WeakMap,Ue=We.createTreeWalker(We,129);function sc(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return nh!==void 0?nh.createHTML(e):e}const wv=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=oi;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===oi?d[1]==="!--"?o=rh:d[1]!==void 0?o=oh:d[2]!==void 0?(ic.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=be):d[3]!==void 0&&(o=be):o===be?d[0]===">"?(o=s??oi,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?be:d[3]==='"'?ah:lh):o===ah||o===lh?o=be:o===rh||o===oh?o=oi:(o=be,s=void 0);const p=o===be&&n[a+1].startsWith("/>")?" ":"";r+=o===oi?l+yv:c>=0?(i.push(h),l.slice(0,c)+Qd+l.slice(c)+le+p):l+le+(c===-2?a:p)}return[sc(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let eo=class nc{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=wv(e,t);if(this.el=nc.createElement(h,i),Ue.currentNode=this.el.content,t===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=Ue.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Qd)){const u=d[o++],p=s.getAttribute(c).split(le),$=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:$[2],strings:p,ctor:$[1]==="."?Sv:$[1]==="?"?xv:$[1]==="@"?Cv:Gs}),s.removeAttribute(c)}else c.startsWith(le)&&(l.push({type:6,index:r}),s.removeAttribute(c));if(ic.test(s.tagName)){const c=s.textContent.split(le),u=c.length-1;if(u>0){s.textContent=Ps?Ps.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],Ui()),Ue.nextNode(),l.push({type:2,index:++r});s.append(c[u],Ui())}}}else if(s.nodeType===8)if(s.data===ec)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(le,c+1))!==-1;)l.push({type:7,index:r}),c+=le.length-1}r++}}static createElement(e,t){const i=We.createElement("template");return i.innerHTML=e,i}};function zt(n,e,t=n,i){var o,a;if(e===Tt)return e;let s=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const r=Mi(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=zt(n,s._$AS(n,e.values),s,i)),e}let Ev=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??We).importNode(t,!0);Ue.currentNode=s;let r=Ue.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new Vo(r,r.nextSibling,this,e):l.type===1?h=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(h=new Rv(r,this,e)),this._$AV.push(h),l=i[++a]}o!==(l==null?void 0:l.index)&&(r=Ue.nextNode(),o++)}return Ue.currentNode=We,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Vo=class rc{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=zt(this,e,t),Mi(e)?e===M||e==null||e===""?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==Tt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):bv(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==M&&Mi(this._$AH)?this._$AA.nextSibling.data=e:this.$(We.createTextNode(e)),this._$AH=e}g(e){var r;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=eo.createElement(sc(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(t);else{const o=new Ev(s,this),a=o.u(this.options);o.p(t),this.$(a),this._$AH=o}}_$AC(e){let t=hh.get(e.strings);return t===void 0&&hh.set(e.strings,t=new eo(e)),t}T(e){tc(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new rc(this.k(Ui()),this.k(Ui()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Gs=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=zt(this,e,t,0),o=!Mi(e)||e!==this._$AH&&e!==Tt,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=zt(this,a[i+l],t,l),h===Tt&&(h=this._$AH[l]),o||(o=!Mi(h)||h!==this._$AH[l]),h===M?e=M:e!==M&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.O(e)}O(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Sv=class extends Gs{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===M?void 0:e}},xv=class extends Gs{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==M)}},Cv=class extends Gs{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=zt(this,e,t,0)??M)===Tt)return;const i=this._$AH,s=e===M&&i!==M||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==M&&(i===M||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Rv=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){zt(this,e)}};const or=fi.litHtmlPolyfillSupport;or==null||or(eo,Vo),(fi.litHtmlVersions??(fi.litHtmlVersions=[])).push("3.1.0");const kv=(n,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new Vo(e.insertBefore(Ui(),r),r,void 0,t??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let J=class extends lt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=kv(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Tt}};var Th;J._$litElement$=!0,J.finalized=!0,(Th=globalThis.litElementHydrateSupport)==null||Th.call(globalThis,{LitElement:J});const lr=globalThis.litElementPolyfillSupport;lr==null||lr({LitElement:J});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");class to extends J{constructor(){super(),this.msg="Nuevo componente Lit",this.show=!1}render(){return D`
        <div>${this.msg}</div>
        <button @click=${this.toogle}> ${this.show?"Ocultar":"Mostrar"}</button>
        `}toogle(){this.show=!this.show}}F(to,"styles",Zi`
        :host {
            display:block;
            border:1px solid #900;
            padding: 10px;
        }
        div {
            display: none;
            background-color:#900;
        }

        :host([show]) div {
            display:block;
        }
    `),F(to,"properties",{msg:{type:String,attribute:"message",state:!1},show:{type:Boolean,reflect:!0}});customElements.define("dw-message",to);const Ee={done:D`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>`,search:D`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>`,checked:D`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`,unchecked:D`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`};class oc extends J{render(){return D`
        <div>
            <input type="text" id="searchinput">
            <span>${Ee.search}</span>
        </div>
        `}}F(oc,"styles",[Zi`
            :host {
                display: block;
            }
            div {
                display:flex;
                align-items: center;
                border: 1px solid #eee;
                padding: 1rem;
                margin-bottom: 1rem;
            }
            input {
                flex-grow: 1;
                margin-right: 1rem;
            }
        `]);customElements.define("eit-todo-search",oc);class io extends J{constructor(){super(),this.completed=!1,this.todoItems=[{title:"Agregar tareas",completed:!1},{title:'Aplicar botón "Completar" a todos los elementos',completed:!0},{title:"Implementar búsqueda de elementos",completed:!1},{title:"Empezar el curso de Lit",completed:!0}]}render(){return D`
            ${this.headingTemplate}
            <eit-todo-search></eit-todo-search>
            ${this.bodyTemplate}
        `}get headingTemplate(){return D`
            <h1>ToDo List</h1>
        `}get bodyTemplate(){return D`
        <ul>
            ${this.todoItems.map(e=>D`
                <li>
                ${e.completed?Ee.checked:Ee.unchecked}
                <span>${e.title} </span>
                <eit-switch @eit-switch-changed=${this.changeItemCompleted(e)} ?checked=${e.completed}>${Ee.done}</eit-switch>
                </li>
            `)}
        </ul>        
        <div>
        ${this.completed?Ee.checked:Ee.unchecked} Nueva tarea
        <p><eit-switch @eit-switch-changed=${this.changeCompleted}>${Ee.done}</eit-switch></p>
        </div>
    `}changeCompleted(e){this.completed=e.detail.checked}changeItemCompleted(e){return()=>{e.completed=!e.completed,this.requestUpdate()}}}F(io,"styles",[Zi`
            :host {
                display: block;
                padding: 1rem;
                --eit-switch-on-state-color: #cccccc;
            }

            h1 {
                border-bottom: 1px solid #fff;
            }
            div {
                background-color:#eee;
                padding: 1rem
            }
            ul {
                margin: 1rem 0;
                padding: 0;
            }
            li {
                display: flex;
                align-items: center;
                list-style-type:none;
                margin-bottom: 0.8rem;
            }

            li span {
                margin-left: 0.5rem;
                margin-right: 0.5rem;
            }

            eit-switch {
                scale:0.5;
            }
        `]),F(io,"properties",{completed:{type:Boolean},todoItems:{type:Array}});customElements.define("eit-todo-list",io);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const us=window,Wo=us.ShadowRoot&&(us.ShadyCSS===void 0||us.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qo=Symbol(),dh=new WeakMap;let lc=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==qo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Wo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=dh.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&dh.set(t,e))}return e}toString(){return this.cssText}};const Pv=n=>new lc(typeof n=="string"?n:n+"",void 0,qo),m=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new lc(t,n,qo)},Ov=(n,e)=>{Wo?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=us.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},ch=Wo?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Pv(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ar;const Os=window,uh=Os.trustedTypes,Hv=uh?uh.emptyScript:"",ph=Os.reactiveElementPolyfillSupport,so={toAttribute(n,e){switch(e){case Boolean:n=n?Hv:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},ac=(n,e)=>e!==n&&(e==e||n==n),hr={attribute:!0,type:String,converter:so,reflect:!1,hasChanged:ac},no="finalized";let at=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=hr){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||hr}static finalize(){if(this.hasOwnProperty(no))return!1;this[no]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(ch(s))}else e!==void 0&&t.push(ch(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ov(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=hr){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:so).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:so;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||ac)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};at[no]=!0,at.elementProperties=new Map,at.elementStyles=[],at.shadowRootOptions={mode:"open"},ph==null||ph({ReactiveElement:at}),((ar=Os.reactiveElementVersions)!==null&&ar!==void 0?ar:Os.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dr;const Hs=window,jt=Hs.trustedTypes,vh=jt?jt.createPolicy("lit-html",{createHTML:n=>n}):void 0,ro="$lit$",ae=`lit$${(Math.random()+"").slice(9)}$`,hc="?"+ae,Uv=`<${hc}>`,qe=document,Ni=()=>qe.createComment(""),Ti=n=>n===null||typeof n!="object"&&typeof n!="function",dc=Array.isArray,Mv=n=>dc(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",cr=`[ 	
\f\r]`,li=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fh=/-->/g,$h=/>/g,Ae=RegExp(`>|${cr}(?:([^\\s"'>=/]+)(${cr}*=${cr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gh=/'/g,mh=/"/g,cc=/^(?:script|style|textarea|title)$/i,Nv=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),g=Nv(1),Lt=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),_h=new WeakMap,Me=qe.createTreeWalker(qe,129,null,!1);function uc(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return vh!==void 0?vh.createHTML(e):e}const Tv=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=li;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===li?d[1]==="!--"?o=fh:d[1]!==void 0?o=$h:d[2]!==void 0?(cc.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=Ae):d[3]!==void 0&&(o=Ae):o===Ae?d[0]===">"?(o=s??li,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?Ae:d[3]==='"'?mh:gh):o===mh||o===gh?o=Ae:o===fh||o===$h?o=li:(o=Ae,s=void 0);const p=o===Ae&&n[a+1].startsWith("/>")?" ":"";r+=o===li?l+Uv:c>=0?(i.push(h),l.slice(0,c)+ro+l.slice(c)+ae+p):l+ae+(c===-2?(i.push(void 0),a):p)}return[uc(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let oo=class pc{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=Tv(e,t);if(this.el=pc.createElement(h,i),Me.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=Me.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(ro)||u.startsWith(ae)){const p=d[o++];if(c.push(u),p!==void 0){const $=s.getAttribute(p.toLowerCase()+ro).split(ae),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:f[2],strings:$,ctor:f[1]==="."?jv:f[1]==="?"?Iv:f[1]==="@"?Bv:Ys})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(cc.test(s.tagName)){const c=s.textContent.split(ae),u=c.length-1;if(u>0){s.textContent=jt?jt.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],Ni()),Me.nextNode(),l.push({type:2,index:++r});s.append(c[u],Ni())}}}else if(s.nodeType===8)if(s.data===hc)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(ae,c+1))!==-1;)l.push({type:7,index:r}),c+=ae.length-1}r++}}static createElement(e,t){const i=qe.createElement("template");return i.innerHTML=e,i}};function It(n,e,t=n,i){var s,r,o,a;if(e===Lt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=Ti(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=It(n,l._$AS(n,e.values),l,i)),e}let zv=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:qe).importNode(i,!0);Me.currentNode=r;let o=Me.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new Zo(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new Dv(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=Me.nextNode(),a++)}return Me.currentNode=qe,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Zo=class vc{constructor(e,t,i,s){var r;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=It(this,e,t),Ti(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==Lt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Mv(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==N&&Ti(this._$AH)?this._$AA.nextSibling.data=e:this.$(qe.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=oo.createElement(uc(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new zv(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=_h.get(e.strings);return t===void 0&&_h.set(e.strings,t=new oo(e)),t}T(e){dc(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new vc(this.k(Ni()),this.k(Ni()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ys=class{constructor(e,t,i,s,r){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=It(this,e,t,0),o=!Ti(e)||e!==this._$AH&&e!==Lt,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=It(this,a[i+l],t,l),h===Lt&&(h=this._$AH[l]),o||(o=!Ti(h)||h!==this._$AH[l]),h===N?e=N:e!==N&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},jv=class extends Ys{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}};const Lv=jt?jt.emptyScript:"";let Iv=class extends Ys{constructor(){super(...arguments),this.type=4}j(e){e&&e!==N?this.element.setAttribute(this.name,Lv):this.element.removeAttribute(this.name)}},Bv=class extends Ys{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=It(this,e,t,0))!==null&&i!==void 0?i:N)===Lt)return;const s=this._$AH,r=e===N&&s!==N||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==N&&(s===N||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Dv=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){It(this,e)}};const yh=Hs.litHtmlPolyfillSupport;yh==null||yh(oo,Zo),((dr=Hs.litHtmlVersions)!==null&&dr!==void 0?dr:Hs.litHtmlVersions=[]).push("2.8.0");const Vv=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Zo(e.insertBefore(Ni(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ur,pr;let G=class extends at{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Vv(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Lt}};G.finalized=!0,G._$litElement$=!0,(ur=globalThis.litElementHydrateSupport)===null||ur===void 0||ur.call(globalThis,{LitElement:G});const bh=globalThis.litElementPolyfillSupport;bh==null||bh({LitElement:G});((pr=globalThis.litElementVersions)!==null&&pr!==void 0?pr:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=n=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(n,e):((t,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(o){customElements.define(t,o)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wv=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},qv=(n,e,t)=>{e.constructor.createProperty(t,n)};function v(n){return(e,t)=>t!==void 0?qv(n,e,t):Wv(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Zv(n){return v({...n,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fv=({finisher:n,descriptor:e})=>(t,i)=>{var s;if(i===void 0){const r=(s=t.originalKey)!==null&&s!==void 0?s:t.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:{...t,key:r};return n!=null&&(o.finisher=function(a){n(a,r)}),o}{const r=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),n==null||n(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S(n,e){return Fv({descriptor:t=>{const i={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const s=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var r,o;return this[s]===void 0&&(this[s]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n))!==null&&o!==void 0?o:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vr;((vr=window.HTMLSlotElement)===null||vr===void 0?void 0:vr.prototype.assignedElements)!=null;var Kv=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Jv=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};const A=m`
:host {
  opacity: 0;
}
:host(.wired-rendered) {
  opacity: 1;
}
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
svg {
  display: block;
}
path {
  stroke: currentColor;
  stroke-width: 0.7;
  fill: transparent;
}
.hidden {
  display: none !important;
}
`;class w extends G{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){const t=this.canvasSize();if(!e&&t[0]===this.lastSize[0]&&t[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${t[0]}`),this.svg.setAttribute("height",`${t[1]}`),this.draw(this.svg,t),this.lastSize=t,this.classList.add("wired-rendered")}}fire(e,t){Fo(this,e,t)}}Kv([S("svg"),Jv("design:type",SVGSVGElement)],w.prototype,"svg",void 0);function Gv(){return Math.floor(Math.random()*2**31)}function Fo(n,e,t){n.dispatchEvent(new CustomEvent(e,{composed:!0,bubbles:!0,detail:t}))}function lo(n,e,t){if(n&&n.length){const[i,s]=e,r=Math.PI/180*t,o=Math.cos(r),a=Math.sin(r);for(const l of n){const[h,d]=l;l[0]=(h-i)*o-(d-s)*a+i,l[1]=(h-i)*a+(d-s)*o+s}}}function Yv(n,e,t){const i=[];n.forEach(s=>i.push(...s)),lo(i,e,t)}function Xv(n,e){return n[0]===e[0]&&n[1]===e[1]}function Qv(n,e,t,i=1){const s=t,r=Math.max(e,.1),o=n[0]&&n[0][0]&&typeof n[0][0]=="number"?[n]:n,a=[0,0];if(s)for(const h of o)lo(h,a,s);const l=ef(o,r,i);if(s){for(const h of o)lo(h,a,-s);Yv(l,a,-s)}return l}function ef(n,e,t){const i=[];for(const h of n){const d=[...h];Xv(d[0],d[d.length-1])||d.push([d[0][0],d[0][1]]),d.length>2&&i.push(d)}const s=[];e=Math.max(e,.1);const r=[];for(const h of i)for(let d=0;d<h.length-1;d++){const c=h[d],u=h[d+1];if(c[1]!==u[1]){const p=Math.min(c[1],u[1]);r.push({ymin:p,ymax:Math.max(c[1],u[1]),x:p===c[1]?c[0]:u[0],islope:(u[0]-c[0])/(u[1]-c[1])})}}if(r.sort((h,d)=>h.ymin<d.ymin?-1:h.ymin>d.ymin?1:h.x<d.x?-1:h.x>d.x?1:h.ymax===d.ymax?0:(h.ymax-d.ymax)/Math.abs(h.ymax-d.ymax)),!r.length)return s;let o=[],a=r[0].ymin,l=0;for(;o.length||r.length;){if(r.length){let h=-1;for(let c=0;c<r.length&&!(r[c].ymin>a);c++)h=c;r.splice(0,h+1).forEach(c=>{o.push({s:a,edge:c})})}if(o=o.filter(h=>!(h.edge.ymax<=a)),o.sort((h,d)=>h.edge.x===d.edge.x?0:(h.edge.x-d.edge.x)/Math.abs(h.edge.x-d.edge.x)),(t!==1||l%e===0)&&o.length>1)for(let h=0;h<o.length;h=h+2){const d=h+1;if(d>=o.length)break;const c=o[h].edge,u=o[d].edge;s.push([[Math.round(c.x),a],[Math.round(u.x),a]])}a+=t,o.forEach(h=>{h.edge.x=h.edge.x+t*h.edge.islope}),l++}return s}function fc(n,e){var t;const i=e.hachureAngle+90;let s=e.hachureGap;s<0&&(s=e.strokeWidth*4),s=Math.round(Math.max(s,.1));let r=1;return e.roughness>=1&&(((t=e.randomizer)===null||t===void 0?void 0:t.next())||Math.random())>.7&&(r=s),Qv(n,s,i,r||1)}class tf{constructor(e){this.helper=e}fillPolygons(e,t){return this._fillPolygons(e,t)}_fillPolygons(e,t){const i=fc(e,t);return{type:"fillSketch",ops:this.renderLines(i,t)}}renderLines(e,t){const i=[];for(const s of e)i.push(...this.helper.doubleLineOps(s[0][0],s[0][1],s[1][0],s[1][1],t));return i}}function sf(n){const e=n[0],t=n[1];return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}class nf extends tf{fillPolygons(e,t){let i=t.hachureGap;i<0&&(i=t.strokeWidth*4),i=Math.max(i,.1);const s=Object.assign({},t,{hachureGap:i}),r=fc(e,s),o=Math.PI/180*t.hachureAngle,a=[],l=i*.5*Math.cos(o),h=i*.5*Math.sin(o);for(const[c,u]of r)sf([c,u])&&a.push([[c[0]-l,c[1]+h],[...u]],[[c[0]+l,c[1]-h],[...u]]);return{type:"fillSketch",ops:this.renderLines(a,t)}}}class rf{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function $c(n,e,t,i,s){return{type:"path",ops:Us(n,e,t,i,s)}}function of(n,e,t){const i=(n||[]).length;if(i>2){const s=[];for(let r=0;r<i-1;r++)s.push(...Us(n[r][0],n[r][1],n[r+1][0],n[r+1][1],t));return e&&s.push(...Us(n[i-1][0],n[i-1][1],n[0][0],n[0][1],t)),{type:"path",ops:s}}else if(i===2)return $c(n[0][0],n[0][1],n[1][0],n[1][1],t);return{type:"path",ops:[]}}function gc(n,e){return of(n,!0,e)}function lf(n,e,t,i,s){const r=[[n,e],[n+t,e],[n+t,e+i],[n,e+i]];return gc(r,s)}function mc(n,e,t,i,s){const r=_c(t,i,s);return af(n,e,s,r).opset}function _c(n,e,t){const i=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(n/2,2)+Math.pow(e/2,2))/2)),s=Math.ceil(Math.max(t.curveStepCount,t.curveStepCount/Math.sqrt(200)*i)),r=Math.PI*2/s;let o=Math.abs(n/2),a=Math.abs(e/2);const l=1-t.curveFitting;return o+=y(o*l,t),a+=y(a*l,t),{increment:r,rx:o,ry:a}}function af(n,e,t,i){const[s,r]=wh(i.increment,n,e,i.rx,i.ry,1,i.increment*ao(.1,ao(.4,1,t),t),t);let o=Ah(s,null,t);if(!t.disableMultiStroke&&t.roughness!==0){const[a]=wh(i.increment,n,e,i.rx,i.ry,1.5,0,t),l=Ah(a,null,t);o=o.concat(l)}return{estimatedPoints:r,opset:{type:"path",ops:o}}}function hf(n,e,t,i,s){return Us(n,e,t,i,s,!0)}function yc(n){return n.randomizer||(n.randomizer=new rf(n.seed||0)),n.randomizer.next()}function ao(n,e,t,i=1){return t.roughness*i*(yc(t)*(e-n)+n)}function y(n,e,t=1){return ao(-n,n,e,t)}function Us(n,e,t,i,s,r=!1){const o=r?s.disableMultiStrokeFill:s.disableMultiStroke,a=ho(n,e,t,i,s,!0,!1);if(o)return a;const l=ho(n,e,t,i,s,!0,!0);return a.concat(l)}function ho(n,e,t,i,s,r,o){const a=Math.pow(n-t,2)+Math.pow(e-i,2),l=Math.sqrt(a);let h=1;l<200?h=1:l>500?h=.4:h=-.0016668*l+1.233334;let d=s.maxRandomnessOffset||0;d*d*100>a&&(d=l/10);const c=d/2,u=.2+yc(s)*.2;let p=s.bowing*s.maxRandomnessOffset*(i-e)/200,$=s.bowing*s.maxRandomnessOffset*(n-t)/200;p=y(p,s,h),$=y($,s,h);const f=[],Y=()=>y(c,s,h),Xe=()=>y(d,s,h),X=s.preserveVertices;return r&&(o?f.push({op:"move",data:[n+(X?0:Y()),e+(X?0:Y())]}):f.push({op:"move",data:[n+(X?0:y(d,s,h)),e+(X?0:y(d,s,h))]})),o?f.push({op:"bcurveTo",data:[p+n+(t-n)*u+Y(),$+e+(i-e)*u+Y(),p+n+2*(t-n)*u+Y(),$+e+2*(i-e)*u+Y(),t+(X?0:Y()),i+(X?0:Y())]}):f.push({op:"bcurveTo",data:[p+n+(t-n)*u+Xe(),$+e+(i-e)*u+Xe(),p+n+2*(t-n)*u+Xe(),$+e+2*(i-e)*u+Xe(),t+(X?0:Xe()),i+(X?0:Xe())]}),f}function Ah(n,e,t){const i=n.length,s=[];if(i>3){const r=[],o=1-t.curveTightness;s.push({op:"move",data:[n[1][0],n[1][1]]});for(let a=1;a+2<i;a++){const l=n[a];r[0]=[l[0],l[1]],r[1]=[l[0]+(o*n[a+1][0]-o*n[a-1][0])/6,l[1]+(o*n[a+1][1]-o*n[a-1][1])/6],r[2]=[n[a+1][0]+(o*n[a][0]-o*n[a+2][0])/6,n[a+1][1]+(o*n[a][1]-o*n[a+2][1])/6],r[3]=[n[a+1][0],n[a+1][1]],s.push({op:"bcurveTo",data:[r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]})}if(e&&e.length===2){const a=t.maxRandomnessOffset;s.push({op:"lineTo",data:[e[0]+y(a,t),e[1]+y(a,t)]})}}else i===3?(s.push({op:"move",data:[n[1][0],n[1][1]]}),s.push({op:"bcurveTo",data:[n[1][0],n[1][1],n[2][0],n[2][1],n[2][0],n[2][1]]})):i===2&&s.push(...ho(n[0][0],n[0][1],n[1][0],n[1][1],t,!0,!0));return s}function wh(n,e,t,i,s,r,o,a){const l=a.roughness===0,h=[],d=[];if(l){n=n/4,d.push([e+i*Math.cos(-n),t+s*Math.sin(-n)]);for(let c=0;c<=Math.PI*2;c=c+n){const u=[e+i*Math.cos(c),t+s*Math.sin(c)];h.push(u),d.push(u)}d.push([e+i*Math.cos(0),t+s*Math.sin(0)]),d.push([e+i*Math.cos(n),t+s*Math.sin(n)])}else{const c=y(.5,a)-Math.PI/2;d.push([y(r,a)+e+.9*i*Math.cos(c-n),y(r,a)+t+.9*s*Math.sin(c-n)]);const u=Math.PI*2+c-.01;for(let p=c;p<u;p=p+n){const $=[y(r,a)+e+i*Math.cos(p),y(r,a)+t+s*Math.sin(p)];h.push($),d.push($)}d.push([y(r,a)+e+i*Math.cos(c+Math.PI*2+o*.5),y(r,a)+t+s*Math.sin(c+Math.PI*2+o*.5)]),d.push([y(r,a)+e+.98*i*Math.cos(c+o),y(r,a)+t+.98*s*Math.sin(c+o)]),d.push([y(r,a)+e+.9*i*Math.cos(c+o*.5),y(r,a)+t+.9*s*Math.sin(c+o*.5)])}return[d,h]}const df={randOffset(n,e){return n},randOffsetWithRange(n,e,t){return(n+e)/2},ellipse(n,e,t,i,s){return mc(n,e,t,i,s)},doubleLineOps(n,e,t,i,s){return hf(n,e,t,i,s)}};function Ft(n){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:n}}function cf(n,e){let t="";for(const i of n.ops){const s=i.data;switch(i.op){case"move":if(e&&t)break;t+=`M${s[0]} ${s[1]} `;break;case"bcurveTo":t+=`C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;break;case"lineTo":t+=`L${s[0]} ${s[1]} `;break}}return t.trim()}function Bt(n,e){const t=document.createElementNS("http://www.w3.org/2000/svg",n);if(e)for(const i in e)t.setAttributeNS(null,i,e[i]);return t}function Fi(n,e,t=!1){const i=Bt("path",{d:cf(n,t)});return e&&e.appendChild(i),i}function L(n,e,t,i,s,r){return Fi(lf(e+2,t+2,i-4,s-4,Ft(r)),n)}function b(n,e,t,i,s,r){return Fi($c(e,t,i,s,Ft(r)),n)}function uf(n,e,t){return Fi(gc(e,Ft(t)),n,!0)}function Ze(n,e,t,i,s,r){return i=Math.max(i>10?i-4:i-1,1),s=Math.max(s>10?s-4:s-1,1),Fi(mc(e,t,i,s,Ft(r)),n)}function Xs(n,e){const i=new nf(df).fillPolygon(n,Ft(e));return Fi(i,null)}function Ko(n,e,t,i,s){const r=Ft(s),o=_c(t,i,r),a=[];let l=0;for(;l<=Math.PI*2;)a.push([n+o.rx*Math.cos(l),e+o.ry*Math.sin(l)]),l+=o.increment;return Xs(a,s)}var Qs=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},en=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let zi=class extends w{constructor(){super(),this.elevation=1,this.disabled=!1,this.roAttached=!1,window.ResizeObserver&&(this.ro=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[A,m`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
      `]}render(){return g`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),i=e.width+(t-1)*2,s=e.height+(t-1)*2;return[i,s]}return this.lastSize}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5),s={width:t[0]-(i-1)*2,height:t[1]-(i-1)*2};L(e,0,0,s.width,s.height,this.seed);for(let r=1;r<i;r++)b(e,r*2,s.height+r*2,s.width+r*2,s.height+r*2,this.seed).style.opacity=`${(75-r*10)/100}`,b(e,s.width+r*2,s.height+r*2,s.width+r*2,r*2,this.seed).style.opacity=`${(75-r*10)/100}`,b(e,r*2,s.height+r*2,s.width+r*2,s.height+r*2,this.seed).style.opacity=`${(75-r*10)/100}`,b(e,s.width+r*2,s.height+r*2,s.width+r*2,r*2,this.seed).style.opacity=`${(75-r*10)/100}`}updated(){super.updated(),this.roAttached||this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.ro&&(this.ro.observe(this.button),this.roAttached=!0)}detachResizeListener(){this.button&&this.ro&&this.ro.unobserve(this.button),this.roAttached=!1}};Qs([v({type:Number}),en("design:type",Object)],zi.prototype,"elevation",void 0);Qs([v({type:Boolean,reflect:!0}),en("design:type",Object)],zi.prototype,"disabled",void 0);Qs([S("button"),en("design:type",HTMLButtonElement)],zi.prototype,"button",void 0);zi=Qs([_("wired-button"),en("design:paramtypes",[])],zi);var Jo=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Go=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let ji=class extends w{constructor(){super(),this.elevation=1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[A,m`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
        path.cardFill {
          stroke-width: 3.5;
          stroke: var(--wired-card-background-fill);
        }
        path {
          stroke: var(--wired-card-background-fill, currentColor);
        }
      `]}render(){return g`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(e){const t=e.has("fill");this.wiredRender(t),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),i=e.width+(t-1)*2,s=e.height+(t-1)*2;return[i,s]}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5),s={width:t[0]-(i-1)*2,height:t[1]-(i-1)*2};if(this.fill&&this.fill.trim()){const r=Xs([[2,2],[s.width-4,2],[s.width-2,s.height-4],[2,s.height-4]],this.seed);r.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(r)}L(e,2,2,s.width-4,s.height-4,this.seed);for(let r=1;r<i;r++)b(e,r*2,s.height-4+r*2,s.width-4+r*2,s.height-4+r*2,this.seed).style.opacity=`${(85-r*10)/100}`,b(e,s.width-4+r*2,s.height-4+r*2,s.width-4+r*2,r*2,this.seed).style.opacity=`${(85-r*10)/100}`,b(e,r*2,s.height-4+r*2,s.width-4+r*2,s.height-4+r*2,this.seed).style.opacity=`${(85-r*10)/100}`,b(e,s.width-4+r*2,s.height-4+r*2,s.width-4+r*2,r*2,this.seed).style.opacity=`${(85-r*10)/100}`}};Jo([v({type:Number}),Go("design:type",Object)],ji.prototype,"elevation",void 0);Jo([v({type:String}),Go("design:type",String)],ji.prototype,"fill",void 0);ji=Jo([_("wired-card"),Go("design:paramtypes",[])],ji);var Ki=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},tn=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Dt=class extends w{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[A,m`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-checkbox-icon-color, currentColor);
        stroke-width: var(--wired-checkbox-default-swidth, 0.7);
      }
      g path {
        stroke-width: 2.5;
      }
      #container.focused {
        --wired-checkbox-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return g`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){L(e,0,0,t[0],t[1],this.seed),this.svgCheck=Bt("g"),e.appendChild(this.svgCheck),b(this.svgCheck,t[0]*.3,t[1]*.4,t[0]*.5,t[1]*.7,this.seed),b(this.svgCheck,t[0]*.5,t[1]*.7,t[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};Ki([v({type:Boolean}),tn("design:type",Object)],Dt.prototype,"checked",void 0);Ki([v({type:Boolean,reflect:!0}),tn("design:type",Object)],Dt.prototype,"disabled",void 0);Ki([Zv(),tn("design:type",Object)],Dt.prototype,"focused",void 0);Ki([S("input"),tn("design:type",HTMLInputElement)],Dt.prototype,"input",void 0);Dt=Ki([_("wired-checkbox")],Dt);var sn=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Yo=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Li=class extends w{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[A,m`
      :host {
        display: inline-block;
        font-size: 14px;
        text-align: left;
      }
      button {
        cursor: pointer;
        outline: none;
        overflow: hidden;
        color: inherit;
        user-select: none;
        position: relative;
        font-family: inherit;
        text-align: inherit;
        font-size: inherit;
        letter-spacing: 1.25px;
        padding: 1px 10px;
        min-height: 36px;
        text-transform: inherit;
        background: none;
        border: none;
        transition: background-color 0.3s ease, color 0.3s ease;
        width: 100%;
        box-sizing: border-box;
        white-space: nowrap;
      }
      button.selected {
        color: var(--wired-item-selected-color, #fff);
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0;
      }
      button span {
        display: inline-block;
        transition: transform 0.2s ease;
        position: relative;
      }
      button:active span {
        transform: scale(1.02);
      }
      #overlay {
        display: none;
      }
      button.selected #overlay {
        display: block;
      }
      svg path {
        stroke: var(--wired-item-selected-bg, #000);
        stroke-width: 2.75;
        fill: transparent;
        transition: transform 0.05s ease;
      }
      @media (hover: hover) {
        button:hover::before {
          opacity: 0.05;
        }
      }
      `]}render(){return g`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){const i=Xs([[0,0],[t[0],0],[t[0],t[1]],[0,t[1]]],this.seed);e.appendChild(i)}};sn([v(),Yo("design:type",Object)],Li.prototype,"value",void 0);sn([v(),Yo("design:type",Object)],Li.prototype,"name",void 0);sn([v({type:Boolean}),Yo("design:type",Object)],Li.prototype,"selected",void 0);Li=sn([_("wired-item")],Li);var Kt=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Ji=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Fe=class extends G{constructor(){super(...arguments),this.disabled=!1,this.seed=Gv(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return m`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        outline: none;
        opacity: 0;
      }
    
      :host(.wired-disabled) {
        opacity: 0.5 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.02);
      }
      
      :host(.wired-rendered) {
        opacity: 1;
      }
  
      :host(:focus) path {
        stroke-width: 1.5;
      }
    
      #container {
        white-space: nowrap;
        position: relative;
      }
    
      .inline {
        display: inline-block;
        vertical-align: top
      }
    
      #textPanel {
        min-width: 90px;
        min-height: 18px;
        padding: 8px;
      }
    
      #dropPanel {
        width: 34px;
        cursor: pointer;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      #card {
        display: block;
        position: absolute;
        background: var(--wired-combo-popup-bg, white);
        z-index: 1;
        box-shadow: 1px 5px 15px -6px rgba(0, 0, 0, 0.8);
        padding: 8px;
      }
  
      ::slotted(wired-item) {
        display: block;
      }
    `}render(){return g`
    <div id="container" @click="${this.onCombo}">
      <div id="textPanel" class="inline">
        <span>${this.value&&this.value.text}</span>
      </div>
      <div id="dropPanel" class="inline"></div>
      <div class="overlay">
        <svg></svg>
      </div>
    </div>
    <wired-card id="card" tabindex="-1" role="listbox" @mousedown="${this.onItemClick}" @touchstart="${this.onItemClick}" style="display: none;">
      <slot id="slot"></slot>
    </wired-card>
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",()=>{this.cardShowing&&this.setCardShowing(!1)}),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0);break}})}updated(e){e.has("disabled")&&this.refreshDisabledState();const t=this.svg;for(;t.hasChildNodes();)t.removeChild(t.lastChild);const i=this.shadowRoot.getElementById("container").getBoundingClientRect();t.setAttribute("width",`${i.width}`),t.setAttribute("height",`${i.height}`);const s=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=s.height+"px",L(t,0,0,s.width,s.height,this.seed);const r=s.width-4;L(t,r,0,34,s.height,this.seed);const o=Math.max(0,Math.abs((s.height-24)/2)),a=uf(t,[[r+8,5+o],[r+26,5+o],[r+17,o+Math.min(s.height,18)]],this.seed);if(a.style.fill="currentColor",a.style.pointerEvents=this.disabled?"none":"auto",a.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];const l=this.shadowRoot.getElementById("slot").assignedNodes();if(l&&l.length)for(let h=0;h<l.length;h++){const d=l[h];d.tagName==="WIRED-ITEM"&&(d.setAttribute("role","option"),this.itemNodes.push(d))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let i=null;for(let s=0;s<t.length;s++){const r=t[s];if(r.tagName==="WIRED-ITEM"){const o=r.value||r.getAttribute("value")||"";if(this.selected&&o===this.selected){i=r;break}}}this.lastSelectedItem=i||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),i?this.value={value:i.value||"",text:i.textContent||""}:this.value=void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(i=>i.nodeType===Node.ELEMENT_NODE).forEach(i=>{const s=i;s.requestUpdate&&s.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout(()=>{this.setCardShowing(!1)})}fireSelected(){Fo(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}};Kt([v({type:Object}),Ji("design:type",Object)],Fe.prototype,"value",void 0);Kt([v({type:String,reflect:!0}),Ji("design:type",String)],Fe.prototype,"selected",void 0);Kt([v({type:Boolean,reflect:!0}),Ji("design:type",Object)],Fe.prototype,"disabled",void 0);Kt([S("svg"),Ji("design:type",SVGSVGElement)],Fe.prototype,"svg",void 0);Kt([S("#card"),Ji("design:type",HTMLDivElement)],Fe.prototype,"card",void 0);Fe=Kt([_("wired-combo")],Fe);var nn=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Xo=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Ii=class extends G{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return m`
      #container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: var(--wired-dialog-z-index, 100);
      }
      #container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.4);
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      #overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transform: translateY(150px);
        transition: transform 0.5s ease, opacity 0.5s ease;
      }
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }
      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }
      wired-card {
        display: inline-block;
        background: white;
        text-align: left;
      }

      :host([open]) #container {
        pointer-events: auto;
      }
      :host([open]) #container::before {
        opacity: 1;
      }
      :host([open]) #overlay {
        opacity: 1;
        transform: none;
      }
    `}render(){return g`
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}updated(){this.card&&this.card.wiredRender(!0)}};nn([v({type:Number}),Xo("design:type",Object)],Ii.prototype,"elevation",void 0);nn([v({type:Boolean,reflect:!0}),Xo("design:type",Object)],Ii.prototype,"open",void 0);nn([S("wired-card"),Xo("design:type",ji)],Ii.prototype,"card",void 0);Ii=nn([_("wired-dialog")],Ii);var bc=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},pf=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let co=class extends w{constructor(){super(...arguments),this.elevation=1,this.roAttached=!1}static get styles(){return[A,m`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return g`<svg></svg>`}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width,t*6]}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5);for(let s=0;s<i;s++)b(e,0,s*6+3,t[0],s*6+3,this.seed)}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}};bc([v({type:Number}),pf("design:type",Object)],co.prototype,"elevation",void 0);co=bc([_("wired-divider")],co);var Qo=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Ac=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Ms=class extends w{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[A,m`
        :host {
          display: inline-block;
          font-size: 14px;
          color: #fff;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 16px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
          transition: transform 0.2s ease, opacity 0.2s ease;
          opacity: 0.85;
        }
        path {
          stroke: var(--wired-fab-bg-color, #018786);
          stroke-width: 3;
          fill: transparent;
        }

        button:focus ::slotted(*) {
          opacity: 1;
        }
        button:active ::slotted(*) {
          opacity: 1;
          transform: scale(1.15);
        }
      `]}render(){return g`
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){const i=Math.min(t[0],t[1]),s=Ko(i/2,i/2,i,i,this.seed);e.appendChild(s)}};Qo([v({type:Boolean,reflect:!0}),Ac("design:type",Object)],Ms.prototype,"disabled",void 0);Qo([S("button"),Ac("design:type",HTMLButtonElement)],Ms.prototype,"button",void 0);Ms=Qo([_("wired-fab")],Ms);var el=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},wc=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Ns=class extends w{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[A,m`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
        }
      `]}render(){return g`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){const i=Math.min(t[0],t[1]);e.setAttribute("width",`${i}`),e.setAttribute("height",`${i}`),Ze(e,i/2,i/2,i,i,this.seed)}};el([v({type:Boolean,reflect:!0}),wc("design:type",Object)],Ns.prototype,"disabled",void 0);el([S("button"),wc("design:type",HTMLButtonElement)],Ns.prototype,"button",void 0);Ns=el([_("wired-icon-button")],Ns);var tl=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},il=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};const vf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";let Ts=class extends w{constructor(){super(),this.elevation=1,this.src=vf,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[A,m`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px;
        }
        img {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
      `]}render(){return g`
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),i=e.width+(t-1)*2,s=e.height+(t-1)*2;return[i,s]}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5),s={width:t[0]-(i-1)*2,height:t[1]-(i-1)*2};L(e,2,2,s.width-4,s.height-4,this.seed);for(let r=1;r<i;r++)b(e,r*2,s.height-4+r*2,s.width-4+r*2,s.height-4+r*2,this.seed).style.opacity=`${(85-r*10)/100}`,b(e,s.width-4+r*2,s.height-4+r*2,s.width-4+r*2,r*2,this.seed).style.opacity=`${(85-r*10)/100}`,b(e,r*2,s.height-4+r*2,s.width-4+r*2,s.height-4+r*2,this.seed).style.opacity=`${(85-r*10)/100}`,b(e,s.width-4+r*2,s.height-4+r*2,s.width-4+r*2,r*2,this.seed).style.opacity=`${(85-r*10)/100}`}};tl([v({type:Number}),il("design:type",Object)],Ts.prototype,"elevation",void 0);tl([v({type:String}),il("design:type",String)],Ts.prototype,"src",void 0);Ts=tl([_("wired-image"),il("design:paramtypes",[])],Ts);var z=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},j=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let E=class extends w{constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[A,m`
        :host {
          display: inline-block;
          position: relative;
          padding: 5px;
          font-family: sans-serif;
          width: 150px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        input:focus + div path {
          stroke-width: 1.5;
        }
      `]}render(){return g`
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;if(t){t.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){L(e,2,2,t[0]-2,t[1]-2,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.textInput&&this.resizeObserver&&this.resizeObserver.observe(this.textInput),this.roAttached=!0)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve(this.textInput),this.roAttached=!1}};z([v({type:Boolean,reflect:!0}),j("design:type",Object)],E.prototype,"disabled",void 0);z([v({type:String}),j("design:type",Object)],E.prototype,"placeholder",void 0);z([v({type:String}),j("design:type",String)],E.prototype,"name",void 0);z([v({type:String}),j("design:type",String)],E.prototype,"min",void 0);z([v({type:String}),j("design:type",String)],E.prototype,"max",void 0);z([v({type:String}),j("design:type",String)],E.prototype,"step",void 0);z([v({type:String}),j("design:type",Object)],E.prototype,"type",void 0);z([v({type:String}),j("design:type",Object)],E.prototype,"autocomplete",void 0);z([v({type:String}),j("design:type",Object)],E.prototype,"autocapitalize",void 0);z([v({type:String}),j("design:type",Object)],E.prototype,"autocorrect",void 0);z([v({type:Boolean}),j("design:type",Object)],E.prototype,"required",void 0);z([v({type:Boolean}),j("design:type",Object)],E.prototype,"autofocus",void 0);z([v({type:Boolean}),j("design:type",Object)],E.prototype,"readonly",void 0);z([v({type:Number}),j("design:type",Number)],E.prototype,"minlength",void 0);z([v({type:Number}),j("design:type",Number)],E.prototype,"maxlength",void 0);z([v({type:Number}),j("design:type",Number)],E.prototype,"size",void 0);z([S("input"),j("design:type",HTMLInputElement)],E.prototype,"textInput",void 0);E=z([_("wired-input"),j("design:paramtypes",[])],E);var Gi=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},rn=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Vt=class extends w{constructor(){super(...arguments),this.elevation=1}static get styles(){return[A,m`
        :host {
          display: inline-block;
          position: relative;
        }
        a, a:hover, a:visited {
          color: inherit;
          outline: none;
          display: inline-block;
          white-space: nowrap;
          text-decoration: none;
          border: none;
        }
        path {
          stroke: var(--wired-link-decoration-color, blue);
          stroke-opacity: 0.45;
        }
        a:focus path {
          stroke-opacity: 1;
        }
      `]}render(){return g`
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){const e=this.anchor.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),i=e.width,s=e.height+(t-1)*2;return[i,s]}return this.lastSize}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5),s={width:t[0],height:t[1]-(i-1)*2};for(let r=0;r<i;r++)b(e,0,s.height+r*2-2,s.width,s.height+r*2-2,this.seed),b(e,0,s.height+r*2-2,s.width,s.height+r*2-2,this.seed)}};Gi([v({type:Number}),rn("design:type",Object)],Vt.prototype,"elevation",void 0);Gi([v({type:String}),rn("design:type",String)],Vt.prototype,"href",void 0);Gi([v({type:String}),rn("design:type",String)],Vt.prototype,"target",void 0);Gi([S("a"),rn("design:type",HTMLAnchorElement)],Vt.prototype,"anchor",void 0);Vt=Gi([_("wired-link")],Vt);var on=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},sl=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Bi=class extends w{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[A,m`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        padding: 5px;
        outline: none;
      }
      :host(:focus) path {
        stroke-width: 1.5;
      }
      ::slotted(wired-item) {
        display: block;
      }
      :host(.wired-horizontal) ::slotted(wired-item) {
        display: inline-block;
      }
      `]}render(){return g`
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let t=0;t<e.length;t++){const i=e[t];i.tagName==="WIRED-ITEM"&&(i.setAttribute("role","option"),this.itemNodes.push(i))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let i=null;for(let s=0;s<t.length;s++){const r=t[s];if(r.tagName==="WIRED-ITEM"){const o=r.value||"";if(this.selected&&o===this.selected){i=r;break}}}this.lastSelectedItem=i||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),i?this.value={value:i.value||"",text:i.textContent||""}:this.value=void 0}}fireSelected(){this.fire("selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){L(e,0,0,t[0],t[1],this.seed)}};on([v({type:Object}),sl("design:type",Object)],Bi.prototype,"value",void 0);on([v({type:String}),sl("design:type",String)],Bi.prototype,"selected",void 0);on([v({type:Boolean}),sl("design:type",Object)],Bi.prototype,"horizontal",void 0);Bi=on([_("wired-listbox")],Bi);var Yi=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},ln=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Ke=class extends w{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[A,m`
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        height: 42px;
        font-family: sans-serif;
      }
      .labelContainer {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .progressLabel {
        color: var(--wired-progress-label-color, #000);
        font-size: var(--wired-progress-font-size, 14px);
        background: var(--wired-progress-label-background, rgba(255,255,255,0.9));
        padding: 2px 6px;
        border-radius: 4px;
        letter-spacing: 1.25px;
      }
      path.progbox {
        stroke: var(--wired-progress-color, rgba(0, 0, 200, 0.8));
        stroke-width: 2.75;
        fill: none;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
      `]}render(){return g`
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){L(e,2,2,t[0]-2,t[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0;const t=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);const i=t.width*Math.max(0,Math.min(e,100));this.progBox=Xs([[0,0],[i,0],[i,t.height],[0,t.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}};Yi([v({type:Number}),ln("design:type",Object)],Ke.prototype,"value",void 0);Yi([v({type:Number}),ln("design:type",Object)],Ke.prototype,"min",void 0);Yi([v({type:Number}),ln("design:type",Object)],Ke.prototype,"max",void 0);Yi([v({type:Boolean}),ln("design:type",Object)],Ke.prototype,"percentage",void 0);Ke=Yi([_("wired-progress")],Ke);var Jt=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Xi=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Je=class extends w{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[A,m`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-radio-icon-color, currentColor);
        stroke-width: var(--wired-radio-default-swidth, 0.7);
      }
      g path {
        stroke-width: 0;
        fill: var(--wired-radio-icon-color, currentColor);
      }
      #container.focused {
        --wired-radio-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return g`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){Ze(e,t[0]/2,t[1]/2,t[0],t[1],this.seed),this.svgCheck=Bt("g"),e.appendChild(this.svgCheck);const i=Math.max(t[0]*.6,5),s=Math.max(t[1]*.6,5);Ze(this.svgCheck,t[0]/2,t[1]/2,i,s,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};Jt([v({type:Boolean}),Xi("design:type",Object)],Je.prototype,"checked",void 0);Jt([v({type:Boolean,reflect:!0}),Xi("design:type",Object)],Je.prototype,"disabled",void 0);Jt([v({type:String}),Xi("design:type",String)],Je.prototype,"name",void 0);Jt([v(),Xi("design:type",Object)],Je.prototype,"focused",void 0);Jt([S("input"),Xi("design:type",HTMLInputElement)],Je.prototype,"input",void 0);Je=Jt([_("wired-radio")],Je);var Ec=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},ff=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let uo=class extends G{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return m`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return g`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){const t=e.detail.checked,i=e.target,s=i.name||"";t?(this.selected=t&&s||"",this.fireSelected()):i.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const t=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],t&&t.length)for(let i=0;i<t.length;i++){const s=t[i];if(s.tagName==="WIRED-RADIO"){this.radioNodes.push(s);const r=s.name||"";this.selected&&r===this.selected?s.checked=!0:s.checked=!1}}}selectPrevious(){const e=this.radioNodes;if(e.length){let t=null,i=-1;if(this.selected){for(let s=0;s<e.length;s++)if(e[s].name===this.selected){i=s;break}i<0?t=e[0]:(i--,i<0&&(i=e.length-1),t=e[i])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}selectNext(){const e=this.radioNodes;if(e.length){let t=null,i=-1;if(this.selected){for(let s=0;s<e.length;s++)if(e[s].name===this.selected){i=s;break}i<0?t=e[0]:(i++,i>=e.length&&(i=0),t=e[i])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}fireSelected(){Fo(this,"selected",{selected:this.selected})}};Ec([v({type:String}),ff("design:type",String)],uo.prototype,"selected",void 0);uo=Ec([_("wired-radio-group")],uo);var Ye=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Gt=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let ce=class extends w{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[A,m`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px 40px 10px 5px;
          font-family: sans-serif;
          width: 180px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        
        input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
        input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
          display: none;
        }

        .thicker path {
          stroke-width: 1.5;
        }

        button {
          position: absolute;
          top: 0;
          right: 2px;
          width: 32px;
          height: 100%;
          box-sizing: border-box;
          background: none;
          border: none;
          cursor: pointer;
          outline: none;
          opacity: 0;
        }
      `]}render(){return g`
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;t&&(t.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){L(e,2,2,t[0]-2,t[1]-2,this.seed),this.searchIcon=Bt("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),Ze(this.searchIcon,t[0]-30,(t[1]-30)/2+10,20,20,this.seed),b(this.searchIcon,t[0]-10,(t[1]-30)/2+30,t[0]-25,(t[1]-30)/2+15,this.seed),this.closeIcon=Bt("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),b(this.closeIcon,t[0]-33,(t[1]-30)/2+2,t[0]-7,(t[1]-30)/2+28,this.seed),b(this.closeIcon,t[0]-7,(t[1]-30)/2+2,t[0]-33,(t[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};Ye([v({type:Boolean,reflect:!0}),Gt("design:type",Object)],ce.prototype,"disabled",void 0);Ye([v({type:String}),Gt("design:type",Object)],ce.prototype,"placeholder",void 0);Ye([v({type:String}),Gt("design:type",Object)],ce.prototype,"autocomplete",void 0);Ye([v({type:String}),Gt("design:type",Object)],ce.prototype,"autocorrect",void 0);Ye([v({type:Boolean}),Gt("design:type",Object)],ce.prototype,"autofocus",void 0);Ye([S("input"),Gt("design:type",HTMLInputElement)],ce.prototype,"textInput",void 0);ce=Ye([_("wired-search-input")],ce);var Yt=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Qi=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let ue=class extends w{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[A,m`
      :host {
        display: inline-block;
        position: relative;
        width: 300px;
        box-sizing: border-box;
      }
      :host([disabled]) {
        opacity: 0.45 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.07);
        border-radius: 5px;
      }
      input[type=range] {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        margin: 0;
        -webkit-appearance: none;
        background: transparent;
        outline: none;
        position: relative;
      }
      input[type=range]:focus {
        outline: none;
      }
      input[type=range]::-ms-track {
        width: 100%;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }
      input[type=range]::-moz-focus-outer {
        outline: none;
        border: 0;
      }
      input[type=range]::-moz-range-thumb {
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        margin: 0;
        height: 20px;
        width: 20px;
        line-height: 1;
      }
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        height: 20px;
        width: 20px;
        margin: 0;
        line-height: 1;
      }
      .knob{
        fill: var(--wired-slider-knob-color, rgb(51, 103, 214));
        stroke: var(--wired-slider-knob-color, rgb(51, 103, 214));
      }
      .bar {
        stroke: var(--wired-slider-bar-color, rgb(0, 0, 0));
      }
      input:focus + div svg .knob {
        stroke: var(--wired-slider-knob-outline-color, #000);
        fill-opacity: 0.8;
      }
      `]}get value(){return this.input?+this.input.value:this.min}set value(e){this.input?this.input.value=`${e}`:this.pendingValue=e,this.updateThumbPosition()}firstUpdated(){this.value=this.pendingValue||+(this.getAttribute("value")||this.value||this.min),delete this.pendingValue}render(){return g`
    <div id="container">
      <input type="range" 
        min="${this.min}"
        max="${this.max}"
        step="${this.step}"
        ?disabled="${this.disabled}"
        @input="${this.onInput}">
      <div id="overlay">
        <svg></svg>
      </div>
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&this.fire("change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){this.canvasWidth=t[0];const i=Math.round(t[1]/2);b(e,0,i,t[0],i,this.seed).classList.add("bar"),this.knob=Ze(e,10,i,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){const e=+this.input.value,t=Math.max(this.step,this.max-this.min),i=(e-this.min)/t;this.knob&&(this.knob.style.transform=`translateX(${i*(this.canvasWidth-20)}px)`)}}};Yt([v({type:Number}),Qi("design:type",Object)],ue.prototype,"min",void 0);Yt([v({type:Number}),Qi("design:type",Object)],ue.prototype,"max",void 0);Yt([v({type:Number}),Qi("design:type",Object)],ue.prototype,"step",void 0);Yt([v({type:Boolean,reflect:!0}),Qi("design:type",Object)],ue.prototype,"disabled",void 0);Yt([S("input"),Qi("design:type",HTMLInputElement)],ue.prototype,"input",void 0);ue=Yt([_("wired-slider")],ue);var nl=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Sc=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let zs=class extends w{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[A,m`
        :host {
          display: inline-block;
          position: relative;
        }
        path {
          stroke: currentColor;
          stroke-opacity: 0.65;
          stroke-width: 1.5;
          fill: none;
        }
        .knob {
          stroke-width: 2.8 !important;
          stroke-opacity: 1;
        }
      `]}render(){return g`<svg></svg>`}canvasSize(){return[76,76]}draw(e,t){Ze(e,t[0]/2,t[1]/2,Math.floor(t[0]*.8),Math.floor(.8*t[1]),this.seed),this.knob=Ko(0,0,20,20,this.seed),this.knob.classList.add("knob"),e.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){const e=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(this.value*360*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame(e=>this.tick(e))}tick(e){this.spinning?(this.timerstart||(this.timerstart=e),this.value=Math.min(1,(e-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}};nl([v({type:Boolean}),Sc("design:type",Object)],zs.prototype,"spinning",void 0);nl([v({type:Number}),Sc("design:type",Object)],zs.prototype,"duration",void 0);zs=nl([_("wired-spinner")],zs);var rl=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},ol=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let js=class extends w{constructor(){super(),this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[A,m`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]}render(){return g`
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){L(e,2,2,t[0]-4,t[1]-4,this.seed)}};rl([v({type:String}),ol("design:type",Object)],js.prototype,"name",void 0);rl([v({type:String}),ol("design:type",Object)],js.prototype,"label",void 0);js=rl([_("wired-tab"),ol("design:paramtypes",[])],js);var ll=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},xc=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Ls=class extends G{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[A,m`
        :host {
          display: block;
          opacity: 1;
        }
        ::slotted(.hidden) {
          display: none !important;
        }
    
        :host ::slotted(.hidden) {
          display: none !important;
        }
        #bar {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
        }
      `]}render(){return g`
    <div id="bar">
      ${this.pages.map(e=>g`
      <wired-item role="tab" .value="${e.name}" .selected="${e.name===this.selected}" ?aria-selected="${e.name===this.selected}"
        @click="${()=>this.selected=e.name}">${e.label||e.name}</wired-item>
      `)}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){const e=this.slotElement.assignedNodes();if(e&&e.length){for(let t=0;t<e.length;t++){const i=e[t];if(i.nodeType===Node.ELEMENT_NODE&&i.tagName.toLowerCase()==="wired-tab"){const s=i;this.pages.push(s);const r=s.getAttribute("name")||"";r&&r.trim().split(" ").forEach(o=>{o&&this.pageMap.set(o,s)})}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const e=this.getElement();for(let t=0;t<this.pages.length;t++){const i=this.pages[t];i===e?i.classList.remove("hidden"):i.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.current.wiredRender()))}getElement(){let e;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){const e=this.pages;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.current){t=i;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].name||""}}selectNext(){const e=this.pages;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.current){t=i;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].name||""}}};ll([v({type:String}),xc("design:type",String)],Ls.prototype,"selected",void 0);ll([S("slot"),xc("design:type",HTMLSlotElement)],Ls.prototype,"slotElement",void 0);Ls=ll([_("wired-tabs")],Ls);var B=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},W=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let I=class extends w{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[A,m`
        :host {
          display: inline-block;
          position: relative;
          font-family: sans-serif;
          width: 400px;
          outline: none;
          padding: 4px;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        textarea {
          position: relative;
          outline: none;
          border: none;
          resize: none;
          background: inherit;
          color: inherit;
          width: 100%;
          font-size: inherit;
          font-family: inherit;
          line-height: inherit;
          text-align: inherit;
          padding: 10px;
          box-sizing: border-box;
        }
      `]}render(){return g`
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `}get textarea(){return this.textareaInput}get value(){const e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.textarea;if(t){t.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){L(e,4,4,t[0]-4,t[1]-4,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};B([v({type:Boolean,reflect:!0}),W("design:type",Object)],I.prototype,"disabled",void 0);B([v({type:Number}),W("design:type",Object)],I.prototype,"rows",void 0);B([v({type:Number}),W("design:type",Object)],I.prototype,"maxrows",void 0);B([v({type:String}),W("design:type",Object)],I.prototype,"autocomplete",void 0);B([v({type:Boolean}),W("design:type",Object)],I.prototype,"autofocus",void 0);B([v({type:String}),W("design:type",Object)],I.prototype,"inputmode",void 0);B([v({type:String}),W("design:type",Object)],I.prototype,"placeholder",void 0);B([v({type:Boolean}),W("design:type",Object)],I.prototype,"required",void 0);B([v({type:Boolean}),W("design:type",Object)],I.prototype,"readonly",void 0);B([v({type:Number}),W("design:type",Number)],I.prototype,"minlength",void 0);B([v({type:Number}),W("design:type",Number)],I.prototype,"maxlength",void 0);B([S("textarea"),W("design:type",HTMLTextAreaElement)],I.prototype,"textareaInput",void 0);I=B([_("wired-textarea")],I);var an=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},al=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Di=class extends w{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[A,m`
      :host {
        display: inline-block;
        cursor: pointer;
        position: relative;
        outline: none;
      }
      :host([disabled]) {
        opacity: 0.4 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        cursor: pointer;
        opacity: 0;
      }
      .knob {
        transition: transform 0.3s ease;
      }
      .knob path {
        stroke-width: 0.7;
      }
      .knob.checked {
        transform: translateX(48px);
      }
      path.knobfill {
        stroke-width: 3 !important;
        fill: transparent;
      }
      .knob.unchecked path.knobfill {
        stroke: var(--wired-toggle-off-color, gray);
      }
      .knob.checked path.knobfill {
        stroke: var(--wired-toggle-on-color, rgb(63, 81, 181));
      }
      `]}render(){return g`
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),this.fire("change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,t){L(e,16,8,t[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=Bt("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);const s=Ko(16,16,32,32,this.seed);s.classList.add("knobfill"),this.knob.appendChild(s),Ze(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){const e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}};an([v({type:Boolean}),al("design:type",Object)],Di.prototype,"checked",void 0);an([v({type:Boolean,reflect:!0}),al("design:type",Object)],Di.prototype,"disabled",void 0);an([S("input"),al("design:type",HTMLInputElement)],Di.prototype,"input",void 0);Di=an([_("wired-toggle")],Di);var q=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Z=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let V=class extends w{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[A,m`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px 3px 68px;
          --wired-progress-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
          --wired-slider-knob-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
        }
        video {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
        #controls {
          position: absolute;
          pointer-events: auto;
          left: 0;
          bottom: 0;
          width: 100%;
          box-sizing: border-box;
          height: 70px;
        }
        .layout.horizontal {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding: 5px 10px;
        }
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }
        wired-progress {
          display: block;
          width: 100%;
          box-sizing: border-box;
          height: 20px;
          --wired-progress-label-color: transparent;
          --wired-progress-label-background: transparent;
        }
        wired-icon-button span {
          font-size: 16px;
          line-height: 16px;
          width: 16px;
          height: 16px;
          padding: 0px;
          font-family: sans-serif;
          display: inline-block;
        }
        #timeDisplay {
          padding: 0 20px 0 8px;
          font-size: 13px;
        }
        wired-slider {
          display: block;
          max-width: 200px;
          margin: 0 6px 0 auto;
        }
      `]}render(){return g`
    <video 
      .autoplay="${this.autoplay}"
      .loop="${this.loop}"
      .muted="${this.muted}"
      .playsinline="${this.playsinline}"
      src="${this.src}"
      @play="${()=>this.playing=!0}"
      @pause="${()=>this.playing=!1}"
      @canplay="${this.canPlay}"
      @timeupdate="${this.updateTime}">
    </video>
    <div id="overlay">
      <svg></svg>
    </div>
    <div id="controls">
      <wired-progress></wired-progress>
      <div class="horizontal layout center">
        <wired-icon-button @click="${this.togglePause}">
          <span>${this.playing?"||":"▶"}</span>
        </wired-icon-button>
        <div id="timeDisplay">${this.timeDisplay}</div>
        <div class="flex">
          <wired-slider @change="${this.volumeChange}"></wired-slider>
        </div>
        <div style="width: 24px; height: 24px;">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path style="stroke: none; fill: currentColor;" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></g></svg>
        </div>
      </div>
    </div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){L(e,2,2,t[0]-4,t[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){const t=Math.floor(e/60),i=Math.round(e-t*60);return`${t}:${i}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=this.video.volume*100)}};q([v({type:String}),Z("design:type",Object)],V.prototype,"src",void 0);q([v({type:Boolean}),Z("design:type",Object)],V.prototype,"autoplay",void 0);q([v({type:Boolean}),Z("design:type",Object)],V.prototype,"loop",void 0);q([v({type:Boolean}),Z("design:type",Object)],V.prototype,"muted",void 0);q([v({type:Boolean}),Z("design:type",Object)],V.prototype,"playsinline",void 0);q([v(),Z("design:type",Object)],V.prototype,"playing",void 0);q([v(),Z("design:type",Object)],V.prototype,"timeDisplay",void 0);q([S("wired-progress"),Z("design:type",Ke)],V.prototype,"progressBar",void 0);q([S("wired-slider"),Z("design:type",ue)],V.prototype,"slider",void 0);q([S("video"),Z("design:type",HTMLVideoElement)],V.prototype,"video",void 0);V=q([_("wired-video"),Z("design:paramtypes",[])],V);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ps=window,hl=ps.ShadowRoot&&(ps.ShadyCSS===void 0||ps.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dl=Symbol(),Eh=new WeakMap;let Cc=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==dl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(hl&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Eh.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Eh.set(t,e))}return e}toString(){return this.cssText}};const $f=n=>new Cc(typeof n=="string"?n:n+"",void 0,dl),Rc=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new Cc(t,n,dl)},gf=(n,e)=>{hl?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=ps.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},Sh=hl?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return $f(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fr;const Is=window,xh=Is.trustedTypes,mf=xh?xh.emptyScript:"",Ch=Is.reactiveElementPolyfillSupport,po={toAttribute(n,e){switch(e){case Boolean:n=n?mf:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},kc=(n,e)=>e!==n&&(e==e||n==n),$r={attribute:!0,type:String,converter:po,reflect:!1,hasChanged:kc},vo="finalized";let ht=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=$r){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||$r}static finalize(){if(this.hasOwnProperty(vo))return!1;this[vo]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Sh(s))}else e!==void 0&&t.push(Sh(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return gf(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=$r){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:po).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:po;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||kc)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ht[vo]=!0,ht.elementProperties=new Map,ht.elementStyles=[],ht.shadowRootOptions={mode:"open"},Ch==null||Ch({ReactiveElement:ht}),((fr=Is.reactiveElementVersions)!==null&&fr!==void 0?fr:Is.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gr;const Bs=window,Wt=Bs.trustedTypes,Rh=Wt?Wt.createPolicy("lit-html",{createHTML:n=>n}):void 0,fo="$lit$",he=`lit$${(Math.random()+"").slice(9)}$`,Pc="?"+he,_f=`<${Pc}>`,Ge=document,Vi=()=>Ge.createComment(""),Wi=n=>n===null||typeof n!="object"&&typeof n!="function",Oc=Array.isArray,yf=n=>Oc(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",mr=`[ 	
\f\r]`,ai=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kh=/-->/g,Ph=/>/g,we=RegExp(`>|${mr}(?:([^\\s"'>=/]+)(${mr}*=${mr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oh=/'/g,Hh=/"/g,Hc=/^(?:script|style|textarea|title)$/i,bf=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),ts=bf(1),qt=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),Uh=new WeakMap,Ne=Ge.createTreeWalker(Ge,129,null,!1);function Uc(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Rh!==void 0?Rh.createHTML(e):e}const Af=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ai;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===ai?d[1]==="!--"?o=kh:d[1]!==void 0?o=Ph:d[2]!==void 0?(Hc.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=we):d[3]!==void 0&&(o=we):o===we?d[0]===">"?(o=s??ai,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?we:d[3]==='"'?Hh:Oh):o===Hh||o===Oh?o=we:o===kh||o===Ph?o=ai:(o=we,s=void 0);const p=o===we&&n[a+1].startsWith("/>")?" ":"";r+=o===ai?l+_f:c>=0?(i.push(h),l.slice(0,c)+fo+l.slice(c)+he+p):l+he+(c===-2?(i.push(void 0),a):p)}return[Uc(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};class qi{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=Af(e,t);if(this.el=qi.createElement(h,i),Ne.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=Ne.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(fo)||u.startsWith(he)){const p=d[o++];if(c.push(u),p!==void 0){const $=s.getAttribute(p.toLowerCase()+fo).split(he),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:f[2],strings:$,ctor:f[1]==="."?Ef:f[1]==="?"?xf:f[1]==="@"?Cf:hn})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(Hc.test(s.tagName)){const c=s.textContent.split(he),u=c.length-1;if(u>0){s.textContent=Wt?Wt.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],Vi()),Ne.nextNode(),l.push({type:2,index:++r});s.append(c[u],Vi())}}}else if(s.nodeType===8)if(s.data===Pc)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(he,c+1))!==-1;)l.push({type:7,index:r}),c+=he.length-1}r++}}static createElement(e,t){const i=Ge.createElement("template");return i.innerHTML=e,i}}function Zt(n,e,t=n,i){var s,r,o,a;if(e===qt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=Wi(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Zt(n,l._$AS(n,e.values),l,i)),e}class wf{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ge).importNode(i,!0);Ne.currentNode=r;let o=Ne.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new es(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new Rf(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=Ne.nextNode(),a++)}return Ne.currentNode=Ge,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class es{constructor(e,t,i,s){var r;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Zt(this,e,t),Wi(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==qt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):yf(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==T&&Wi(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ge.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=qi.createElement(Uc(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new wf(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=Uh.get(e.strings);return t===void 0&&Uh.set(e.strings,t=new qi(e)),t}T(e){Oc(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new es(this.k(Vi()),this.k(Vi()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class hn{constructor(e,t,i,s,r){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Zt(this,e,t,0),o=!Wi(e)||e!==this._$AH&&e!==qt,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=Zt(this,a[i+l],t,l),h===qt&&(h=this._$AH[l]),o||(o=!Wi(h)||h!==this._$AH[l]),h===T?e=T:e!==T&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ef extends hn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}}const Sf=Wt?Wt.emptyScript:"";class xf extends hn{constructor(){super(...arguments),this.type=4}j(e){e&&e!==T?this.element.setAttribute(this.name,Sf):this.element.removeAttribute(this.name)}}class Cf extends hn{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Zt(this,e,t,0))!==null&&i!==void 0?i:T)===qt)return;const s=this._$AH,r=e===T&&s!==T||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==T&&(s===T||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class Rf{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Zt(this,e)}}const Mh=Bs.litHtmlPolyfillSupport;Mh==null||Mh(qi,es),((gr=Bs.litHtmlVersions)!==null&&gr!==void 0?gr:Bs.litHtmlVersions=[]).push("2.8.0");const kf=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new es(e.insertBefore(Vi(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _r,yr;class $i extends ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=kf(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return qt}}$i.finalized=!0,$i._$litElement$=!0,(_r=globalThis.litElementHydrateSupport)===null||_r===void 0||_r.call(globalThis,{LitElement:$i});const Nh=globalThis.litElementPolyfillSupport;Nh==null||Nh({LitElement:$i});((yr=globalThis.litElementVersions)!==null&&yr!==void 0?yr:globalThis.litElementVersions=[]).push("3.3.3");const Pf=n=>class extends n{emmitChange(){this.dispatchEvent(new CustomEvent("element-changed",{bubbles:!0,composed:!0,detail:{name:this.name,value:this.value}}))}},Of=Rc`
  .message span {
    display: block;
    padding-top: var(--dile-input-message-padding-top, 4px);
    font-size: var(--dile-input-message-font-size, 0.875rem);
    color: var(--dile-input-message-color, #888);

  }
  .errored-msg span {
    color: var(--dile-input-message-error-color, #c00);
  }
`;class Hf extends Pf($i){static get properties(){return{label:{type:String},type:{type:String},placeholder:{type:String},disabled:{type:Boolean},value:{type:String},name:{type:String},errored:{type:Boolean},disableAutocomplete:{type:Boolean},readonly:{type:Boolean},selectOnFocus:{type:Boolean},message:{type:String},labelRight:{type:String},hideErrorOnInput:{type:Boolean}}}updated(e){e.has("value")&&this.emmitChange()}constructor(){super(),this.placeholder="",this.label="",this.labelRight="",this.value="",this.disabled=!1,this.disableAutocomplete=!1,this.name="",this.type="text",this.types=["text","password","email","number","tel","url","search","date","time","datetime","datetime-local","month","week"]}static get styles(){return[Of,Rc`
            * {
              box-sizing: border-box;
            }
            :host {
              display: block;
              margin-bottom: 10px;
            }
            main {
              width: var(--dile-input-section-width, 100%);
            }
            label {
              display: block;
              margin-bottom: var(--dile-input-label-margin-bottom, 4px);
              font-size: var(--dile-input-label-font-size, 1em);
              color: var(--dile-input-label-color, #59e);
              font-weight: var(--dile-input-label-font-weight, normal);
            }
            input {
              box-sizing: border-box;
              border-radius: var(--dile-input-border-radius, 5px);
              border: var(--dile-input-border-width, 1px) solid var(--dile-input-border-color, #888);
              font-size: var(--dile-input-font-size, 1em);
              line-height: var(--dile-input-line-height, 1.5em);
              padding: var(--dile-input-padding, 5px);
              background-color: var(--dile-input-background-color, #fff);
              color: var(--dile-input-color, #303030);
              text-align: var(--dile-input-text-align, left);
              width: 100%;
              flex-grow: 1;
            }
            input:focus {
              outline: none;
              border-color: var(--dile-input-focus-border-color, #6af)
            }
            input::placeholder {
              color: var(--dile-input-placeholder-color, #ccc);
            }
            input:disabled {
              background-color: #f5f5f5;
              border-color: var(--dile-input-disabled-border-color, #eee);
            }
            .errored {
              border-color: var(--dile-input-error-border-color, #c00);
            }
            section.for-input {
              display: flex;
              align-items: center;
              width: 100%;
            }
            .labelright {
              margin-left: var(--dile-input-label-right-margin-left, 10px);
              color: var(--dile-input-label-color, #59e);
              font-size: var(--dile-input-label-right-font-size, 1.2em);
            }
          `]}render(){return ts`
          <main>
            ${this.label?ts`<label for="textField">${this.label}</label>`:""}
             <section class="for-input">
              <input
                type="${this.availableType(this.type)}"
                id="textField"
                name="${this.name}"
                placeholder="${this.placeholder}"
                ?disabled="${this.disabled}"
                ?readonly="${this.readonly}"
                autocomplete="${this.disableAutocomplete?"off":"on"}"
                .value="${this.computeValue(this.value)}"
                class="${this.errored?"errored":""}"
                @keypress="${this._lookForEnter}"
                @input="${this._input}"
                @blur="${this.doBlur}"
                @focus="${this.doFocus}"
              /> 
              ${this.labelRight?ts`<span class="labelright">${this.labelRight}</span>`:""}
            </section>
            ${this.message?ts`<div class="message ${this.errored?"errored-msg":""}"><span>${this.message}</span></div>`:""}
          </main>
        `}_lookForEnter(e){(e.keyCode?e.keyCode:e.which)=="13"&&this.dispatchEvent(new CustomEvent("enter-pressed"))}_input(e){this.value=e.target.value,this.hideErrorOnInput&&this.errored&&(this.errored=!1,this.message="")}availableType(e){return this.types.includes(e)?e:"text"}get el(){return this.shadowRoot.querySelector("input")}doBlur(){}doFocus(){this.selectOnFocus&&this.el.select()}computeValue(e){return e}focus(){this.el.focus()}}window.customElements.define("dile-input",Hf);class $o extends J{constructor(){super(),this.counter=0,this.quantity=1,this.active=!0}render(){return D`
            <wired-card elevation="3">
                <p><eit-switch ?checked=${this.active}></eit-switch>
                <wired-button @click=${this.changeActive}>Activar/ Desactivar</wired-button></p>
                <p><slot></slot></p>
                <p class="contador">${this.counter}</p>
                <p>
                    <wired-button @click=${this.increment} ?disabled=${!this.active}>Incrementar</wired-button>
                    <wired-button @click=${this.decrement} class="decrement" ?disabled=${!this.active}>Decrementar</wired-button>
                </p>
                <p>
                    <dile-input id="quantity" type="number" value="${this.quantity}" label="Cantidad" disabled></dile-input>
                </p>
                <p>
                    <wired-slider 
                        value="1" 
                        min="1" 
                        max="100" 
                        @change=${this.doChangeQuantity}
                        ?disabled=${!this.active}
                    ></wired-slider>
                </p>
                
            </wired-card>
        `}doChangeQuantity(e){this.quantity=e.detail.value}increment(){this.active&&(this.counter+=parseInt(this.quantity))}decrement(){this.active&&(this.counter-=parseInt(this.quantity))}changeActive(){this.active=!this.active}}F($o,"styles",[Zi`
            :host {
                display: flex;
                align-items: center;
            }
            h2 {
                color: red;
            }
            .contador {
                color: blue;
                font-size: 1.5em;
            }
            dile-input {
                width: 55px;
                font-size: 1em;
                padding: 0.5em;
                --dile-input-text-align: center;
                --dile-input-label-color: #910;
            }
            wired-button {
                background-color: #8cf;
            }
            wired-button.decrement {
                background-color: #910;
            }
            wired-card {
                margin: 1em;
                padding: 1em;
            }

            wired-card p {
                display:flex;
                justify-content: space-around;
                align-items: center;
                
            }
            @media(min-width: 500px) {
                .contador {
                    font-size: 3em;
                }
            }
        `]),F($o,"properties",{counter:{type:Number,reflect:!0},quantity:{type:Number},active:{type:Boolean}});customElements.define("eit-counter",$o);class go extends J{constructor(){super(),this.checked=!1}render(){return D`
         <section @click=${this.toggle}>
                <span></span><slot></slot>
            </section>
        `}toggle(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("eit-switch-changed",{bubbles:!0,composed:!0,detail:{checked:this.checked}}))}}F(go,"styles",[Zi`
            :host {
                display: inline-block;
            }
            section {
                width: 64px;
                height: 20px;
                border-radius: 10px;
                background-color: #ccc;
                display: flex;
                align-items: center;
                justify-content: flex-start;  
            }
            span {
                width: 32px;
                height: 32px;
                left: 0px;
                position: relative;
                border-radius: 50%;
                background-color: var(--eit-switch-off-state-color,#910);
                transition: all 0.2s linear;
            }
            :host([checked]) span {
                left: 32px;
                background-color: var(--eit-switch-on-state-color,#69f);
            }
        `]),F(go,"properties",{checked:{type:Boolean,reflect:!0}});customElements.define("eit-switch",go);document.getElementById("selector").addEventListener("dile-selected-changed",function(){document.querySelector("dile-menu-hamburger").close(),document.querySelector("dile-tabs").selected=document.getElementById("selector").selected});
