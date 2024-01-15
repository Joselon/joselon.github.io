var Tc=Object.defineProperty;var zc=(n,e,t)=>e in n?Tc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var V=(n,e,t)=>(zc(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const is=window,mo=is.ShadowRoot&&(is.ShadyCSS===void 0||is.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_o=Symbol(),cl=new WeakMap;let zh=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==_o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(mo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=cl.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&cl.set(t,e))}return e}toString(){return this.cssText}};const jc=n=>new zh(typeof n=="string"?n:n+"",void 0,_o),Lc=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new zh(t,n,_o)},Ic=(n,e)=>{mo?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=is.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},ul=mo?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return jc(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dn;const vs=window,pl=vs.trustedTypes,Bc=pl?pl.emptyScript:"",vl=vs.reactiveElementPolyfillSupport,br={toAttribute(n,e){switch(e){case Boolean:n=n?Bc:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},jh=(n,e)=>e!==n&&(e==e||n==n),cn={attribute:!0,type:String,converter:br,reflect:!1,hasChanged:jh},Ar="finalized";let et=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=cn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||cn}static finalize(){if(this.hasOwnProperty(Ar))return!1;this[Ar]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(ul(s))}else e!==void 0&&t.push(ul(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Ic(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=cn){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:br).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:br;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||jh)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};et[Ar]=!0,et.elementProperties=new Map,et.elementStyles=[],et.shadowRootOptions={mode:"open"},vl==null||vl({ReactiveElement:et}),((dn=vs.reactiveElementVersions)!==null&&dn!==void 0?dn:vs.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var un;const $s=window,pt=$s.trustedTypes,$l=pt?pt.createPolicy("lit-html",{createHTML:n=>n}):void 0,wr="$lit$",Q=`lit$${(Math.random()+"").slice(9)}$`,Lh="?"+Q,Dc=`<${Lh}>`,Te=document,mi=()=>Te.createComment(""),_i=n=>n===null||typeof n!="object"&&typeof n!="function",Ih=Array.isArray,Vc=n=>Ih(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",pn=`[ 	
\f\r]`,Qt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fl=/-->/g,gl=/>/g,pe=RegExp(`>|${pn}(?:([^\\s"'>=/]+)(${pn}*=${pn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ml=/'/g,_l=/"/g,Bh=/^(?:script|style|textarea|title)$/i,Wc=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),qc=Wc(1),vt=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),yl=new WeakMap,Se=Te.createTreeWalker(Te,129,null,!1);function Dh(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return $l!==void 0?$l.createHTML(e):e}const Zc=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=Qt;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===Qt?d[1]==="!--"?o=fl:d[1]!==void 0?o=gl:d[2]!==void 0?(Bh.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=pe):d[3]!==void 0&&(o=pe):o===pe?d[0]===">"?(o=s??Qt,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?pe:d[3]==='"'?_l:ml):o===_l||o===ml?o=pe:o===fl||o===gl?o=Qt:(o=pe,s=void 0);const p=o===pe&&n[a+1].startsWith("/>")?" ":"";r+=o===Qt?l+Dc:c>=0?(i.push(h),l.slice(0,c)+wr+l.slice(c)+Q+p):l+Q+(c===-2?(i.push(void 0),a):p)}return[Dh(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let Er=class Vh{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=Zc(e,t);if(this.el=Vh.createElement(h,i),Se.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=Se.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(wr)||u.startsWith(Q)){const p=d[o++];if(c.push(u),p!==void 0){const f=s.getAttribute(p.toLowerCase()+wr).split(Q),$=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:$[2],strings:f,ctor:$[1]==="."?Kc:$[1]==="?"?Yc:$[1]==="@"?Gc:Ds})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(Bh.test(s.tagName)){const c=s.textContent.split(Q),u=c.length-1;if(u>0){s.textContent=pt?pt.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],mi()),Se.nextNode(),l.push({type:2,index:++r});s.append(c[u],mi())}}}else if(s.nodeType===8)if(s.data===Lh)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(Q,c+1))!==-1;)l.push({type:7,index:r}),c+=Q.length-1}r++}}static createElement(e,t){const i=Te.createElement("template");return i.innerHTML=e,i}};function $t(n,e,t=n,i){var s,r,o,a;if(e===vt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=_i(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=$t(n,l._$AS(n,e.values),l,i)),e}let Fc=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Te).importNode(i,!0);Se.currentNode=r;let o=Se.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new yo(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new Xc(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=Se.nextNode(),a++)}return Se.currentNode=Te,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},yo=class Wh{constructor(e,t,i,s){var r;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=$t(this,e,t),_i(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==vt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Vc(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==x&&_i(this._$AH)?this._$AA.nextSibling.data=e:this.$(Te.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Er.createElement(Dh(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new Fc(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=yl.get(e.strings);return t===void 0&&yl.set(e.strings,t=new Er(e)),t}T(e){Ih(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Wh(this.k(mi()),this.k(mi()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ds=class{constructor(e,t,i,s,r){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=$t(this,e,t,0),o=!_i(e)||e!==this._$AH&&e!==vt,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=$t(this,a[i+l],t,l),h===vt&&(h=this._$AH[l]),o||(o=!_i(h)||h!==this._$AH[l]),h===x?e=x:e!==x&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Kc=class extends Ds{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}};const Jc=pt?pt.emptyScript:"";let Yc=class extends Ds{constructor(){super(...arguments),this.type=4}j(e){e&&e!==x?this.element.setAttribute(this.name,Jc):this.element.removeAttribute(this.name)}},Gc=class extends Ds{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=$t(this,e,t,0))!==null&&i!==void 0?i:x)===vt)return;const s=this._$AH,r=e===x&&s!==x||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==x&&(s===x||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Xc=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){$t(this,e)}};const bl=$s.litHtmlPolyfillSupport;bl==null||bl(Er,yo),((un=$s.litHtmlVersions)!==null&&un!==void 0?un:$s.litHtmlVersions=[]).push("2.8.0");const Qc=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new yo(e.insertBefore(mi(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vn,$n;let di=class extends et{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qc(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return vt}};di.finalized=!0,di._$litElement$=!0,(vn=globalThis.litElementHydrateSupport)===null||vn===void 0||vn.call(globalThis,{LitElement:di});const Al=globalThis.litElementPolyfillSupport;Al==null||Al({LitElement:di});(($n=globalThis.litElementVersions)!==null&&$n!==void 0?$n:globalThis.litElementVersions=[]).push("3.3.3");class eu extends di{static get styles(){return Lc`
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
      `}static get properties(){return{menu:{type:String,reflect:!0}}}constructor(){super(),this.menu="left"}render(){return qc`
      <div class="menu"><slot name="menu"></slot></div>
      <div class="title"><slot name="title"></slot></div>
      <div class="actions"><slot name="actions"></slot></div>
    `}}window.customElements.define("dile-nav",eu);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ss=window,bo=ss.ShadowRoot&&(ss.ShadyCSS===void 0||ss.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ao=Symbol(),wl=new WeakMap;let qh=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Ao)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(bo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=wl.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&wl.set(t,e))}return e}toString(){return this.cssText}};const tu=n=>new qh(typeof n=="string"?n:n+"",void 0,Ao),Zh=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new qh(t,n,Ao)},iu=(n,e)=>{bo?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=ss.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},El=bo?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return tu(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fn;const fs=window,Sl=fs.trustedTypes,su=Sl?Sl.emptyScript:"",xl=fs.reactiveElementPolyfillSupport,Sr={toAttribute(n,e){switch(e){case Boolean:n=n?su:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Fh=(n,e)=>e!==n&&(e==e||n==n),gn={attribute:!0,type:String,converter:Sr,reflect:!1,hasChanged:Fh},xr="finalized";let tt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=gn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||gn}static finalize(){if(this.hasOwnProperty(xr))return!1;this[xr]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(El(s))}else e!==void 0&&t.push(El(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return iu(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=gn){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Sr).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:Sr;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Fh)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};tt[xr]=!0,tt.elementProperties=new Map,tt.elementStyles=[],tt.shadowRootOptions={mode:"open"},xl==null||xl({ReactiveElement:tt}),((fn=fs.reactiveElementVersions)!==null&&fn!==void 0?fn:fs.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var mn;const gs=window,ft=gs.trustedTypes,Cl=ft?ft.createPolicy("lit-html",{createHTML:n=>n}):void 0,Cr="$lit$",ee=`lit$${(Math.random()+"").slice(9)}$`,Kh="?"+ee,nu=`<${Kh}>`,ze=document,yi=()=>ze.createComment(""),bi=n=>n===null||typeof n!="object"&&typeof n!="function",Jh=Array.isArray,ru=n=>Jh(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",_n=`[ 	
\f\r]`,ei=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kl=/-->/g,Rl=/>/g,ve=RegExp(`>|${_n}(?:([^\\s"'>=/]+)(${_n}*=${_n}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pl=/'/g,Ol=/"/g,Yh=/^(?:script|style|textarea|title)$/i,ou=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),lu=ou(1),gt=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),Hl=new WeakMap,xe=ze.createTreeWalker(ze,129,null,!1);function Gh(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Cl!==void 0?Cl.createHTML(e):e}const au=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ei;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===ei?d[1]==="!--"?o=kl:d[1]!==void 0?o=Rl:d[2]!==void 0?(Yh.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=ve):d[3]!==void 0&&(o=ve):o===ve?d[0]===">"?(o=s??ei,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?ve:d[3]==='"'?Ol:Pl):o===Ol||o===Pl?o=ve:o===kl||o===Rl?o=ei:(o=ve,s=void 0);const p=o===ve&&n[a+1].startsWith("/>")?" ":"";r+=o===ei?l+nu:c>=0?(i.push(h),l.slice(0,c)+Cr+l.slice(c)+ee+p):l+ee+(c===-2?(i.push(void 0),a):p)}return[Gh(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let kr=class Xh{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=au(e,t);if(this.el=Xh.createElement(h,i),xe.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=xe.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(Cr)||u.startsWith(ee)){const p=d[o++];if(c.push(u),p!==void 0){const f=s.getAttribute(p.toLowerCase()+Cr).split(ee),$=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:$[2],strings:f,ctor:$[1]==="."?du:$[1]==="?"?uu:$[1]==="@"?pu:Vs})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(Yh.test(s.tagName)){const c=s.textContent.split(ee),u=c.length-1;if(u>0){s.textContent=ft?ft.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],yi()),xe.nextNode(),l.push({type:2,index:++r});s.append(c[u],yi())}}}else if(s.nodeType===8)if(s.data===Kh)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(ee,c+1))!==-1;)l.push({type:7,index:r}),c+=ee.length-1}r++}}static createElement(e,t){const i=ze.createElement("template");return i.innerHTML=e,i}};function mt(n,e,t=n,i){var s,r,o,a;if(e===gt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=bi(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=mt(n,l._$AS(n,e.values),l,i)),e}let hu=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:ze).importNode(i,!0);xe.currentNode=r;let o=xe.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new wo(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new vu(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=xe.nextNode(),a++)}return xe.currentNode=ze,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},wo=class Qh{constructor(e,t,i,s){var r;this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=mt(this,e,t),bi(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==gt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ru(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==C&&bi(this._$AH)?this._$AA.nextSibling.data=e:this.$(ze.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=kr.createElement(Gh(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new hu(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=Hl.get(e.strings);return t===void 0&&Hl.set(e.strings,t=new kr(e)),t}T(e){Jh(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Qh(this.k(yi()),this.k(yi()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Vs=class{constructor(e,t,i,s,r){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=C}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=mt(this,e,t,0),o=!bi(e)||e!==this._$AH&&e!==gt,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=mt(this,a[i+l],t,l),h===gt&&(h=this._$AH[l]),o||(o=!bi(h)||h!==this._$AH[l]),h===C?e=C:e!==C&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},du=class extends Vs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}};const cu=ft?ft.emptyScript:"";let uu=class extends Vs{constructor(){super(...arguments),this.type=4}j(e){e&&e!==C?this.element.setAttribute(this.name,cu):this.element.removeAttribute(this.name)}},pu=class extends Vs{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=mt(this,e,t,0))!==null&&i!==void 0?i:C)===gt)return;const s=this._$AH,r=e===C&&s!==C||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==C&&(s===C||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},vu=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){mt(this,e)}};const Ul=gs.litHtmlPolyfillSupport;Ul==null||Ul(kr,wo),((mn=gs.litHtmlVersions)!==null&&mn!==void 0?mn:gs.litHtmlVersions=[]).push("2.8.0");const $u=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new wo(e.insertBefore(yi(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var yn,bn;let ct=class extends tt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$u(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return gt}};ct.finalized=!0,ct._$litElement$=!0,(yn=globalThis.litElementHydrateSupport)===null||yn===void 0||yn.call(globalThis,{LitElement:ct});const Ml=globalThis.litElementPolyfillSupport;Ml==null||Ml({LitElement:ct});((bn=globalThis.litElementVersions)!==null&&bn!==void 0?bn:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns=window,Eo=ns.ShadowRoot&&(ns.ShadyCSS===void 0||ns.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ed=Symbol(),Nl=new WeakMap;let fu=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ed)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Eo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Nl.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Nl.set(t,e))}return e}toString(){return this.cssText}};const gu=n=>new fu(typeof n=="string"?n:n+"",void 0,ed),mu=(n,e)=>{Eo?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=ns.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},Tl=Eo?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return gu(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var An;const ms=window,zl=ms.trustedTypes,_u=zl?zl.emptyScript:"",jl=ms.reactiveElementPolyfillSupport,Rr={toAttribute(n,e){switch(e){case Boolean:n=n?_u:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},td=(n,e)=>e!==n&&(e==e||n==n),wn={attribute:!0,type:String,converter:Rr,reflect:!1,hasChanged:td},Pr="finalized";let it=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=wn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||wn}static finalize(){if(this.hasOwnProperty(Pr))return!1;this[Pr]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Tl(s))}else e!==void 0&&t.push(Tl(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return mu(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=wn){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Rr).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:Rr;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||td)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};it[Pr]=!0,it.elementProperties=new Map,it.elementStyles=[],it.shadowRootOptions={mode:"open"},jl==null||jl({ReactiveElement:it}),((An=ms.reactiveElementVersions)!==null&&An!==void 0?An:ms.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var En;const _s=window,_t=_s.trustedTypes,Ll=_t?_t.createPolicy("lit-html",{createHTML:n=>n}):void 0,Or="$lit$",te=`lit$${(Math.random()+"").slice(9)}$`,id="?"+te,yu=`<${id}>`,je=document,Ai=()=>je.createComment(""),wi=n=>n===null||typeof n!="object"&&typeof n!="function",sd=Array.isArray,bu=n=>sd(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Sn=`[ 	
\f\r]`,ti=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Il=/-->/g,Bl=/>/g,$e=RegExp(`>|${Sn}(?:([^\\s"'>=/]+)(${Sn}*=${Sn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Dl=/'/g,Vl=/"/g,nd=/^(?:script|style|textarea|title)$/i,Au=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),wu=Au(1),yt=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),Wl=new WeakMap,Ce=je.createTreeWalker(je,129,null,!1);function rd(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ll!==void 0?Ll.createHTML(e):e}const Eu=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ti;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===ti?d[1]==="!--"?o=Il:d[1]!==void 0?o=Bl:d[2]!==void 0?(nd.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=$e):d[3]!==void 0&&(o=$e):o===$e?d[0]===">"?(o=s??ti,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?$e:d[3]==='"'?Vl:Dl):o===Vl||o===Dl?o=$e:o===Il||o===Bl?o=ti:(o=$e,s=void 0);const p=o===$e&&n[a+1].startsWith("/>")?" ":"";r+=o===ti?l+yu:c>=0?(i.push(h),l.slice(0,c)+Or+l.slice(c)+te+p):l+te+(c===-2?(i.push(void 0),a):p)}return[rd(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let Hr=class od{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=Eu(e,t);if(this.el=od.createElement(h,i),Ce.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=Ce.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(Or)||u.startsWith(te)){const p=d[o++];if(c.push(u),p!==void 0){const f=s.getAttribute(p.toLowerCase()+Or).split(te),$=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:$[2],strings:f,ctor:$[1]==="."?xu:$[1]==="?"?ku:$[1]==="@"?Ru:Ws})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(nd.test(s.tagName)){const c=s.textContent.split(te),u=c.length-1;if(u>0){s.textContent=_t?_t.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],Ai()),Ce.nextNode(),l.push({type:2,index:++r});s.append(c[u],Ai())}}}else if(s.nodeType===8)if(s.data===id)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(te,c+1))!==-1;)l.push({type:7,index:r}),c+=te.length-1}r++}}static createElement(e,t){const i=je.createElement("template");return i.innerHTML=e,i}};function bt(n,e,t=n,i){var s,r,o,a;if(e===yt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=wi(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=bt(n,l._$AS(n,e.values),l,i)),e}let Su=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:je).importNode(i,!0);Ce.currentNode=r;let o=Ce.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new So(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new Pu(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=Ce.nextNode(),a++)}return Ce.currentNode=je,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},So=class ld{constructor(e,t,i,s){var r;this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=bt(this,e,t),wi(e)?e===k||e==null||e===""?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==yt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):bu(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==k&&wi(this._$AH)?this._$AA.nextSibling.data=e:this.$(je.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Hr.createElement(rd(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new Su(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=Wl.get(e.strings);return t===void 0&&Wl.set(e.strings,t=new Hr(e)),t}T(e){sd(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new ld(this.k(Ai()),this.k(Ai()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ws=class{constructor(e,t,i,s,r){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=k}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=bt(this,e,t,0),o=!wi(e)||e!==this._$AH&&e!==yt,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=bt(this,a[i+l],t,l),h===yt&&(h=this._$AH[l]),o||(o=!wi(h)||h!==this._$AH[l]),h===k?e=k:e!==k&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},xu=class extends Ws{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}};const Cu=_t?_t.emptyScript:"";let ku=class extends Ws{constructor(){super(...arguments),this.type=4}j(e){e&&e!==k?this.element.setAttribute(this.name,Cu):this.element.removeAttribute(this.name)}},Ru=class extends Ws{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=bt(this,e,t,0))!==null&&i!==void 0?i:k)===yt)return;const s=this._$AH,r=e===k&&s!==k||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==k&&(s===k||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Pu=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){bt(this,e)}};const ql=_s.litHtmlPolyfillSupport;ql==null||ql(Hr,So),((En=_s.litHtmlVersions)!==null&&En!==void 0?En:_s.litHtmlVersions=[]).push("2.8.0");const Ou=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new So(e.insertBefore(Ai(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xn,Cn;let rs=class extends it{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ou(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return yt}};rs.finalized=!0,rs._$litElement$=!0,(xn=globalThis.litElementHydrateSupport)===null||xn===void 0||xn.call(globalThis,{LitElement:rs});const Zl=globalThis.litElementPolyfillSupport;Zl==null||Zl({LitElement:rs});((Cn=globalThis.litElementVersions)!==null&&Cn!==void 0?Cn:globalThis.litElementVersions=[]).push("3.3.3");const ad=n=>class extends n{static get properties(){return{selected:{type:String},attrForSelected:{type:String},selectorId:{type:String},hashSelection:{type:Boolean}}}constructor(){super(),this._items=[],this.hashSelection=!1,this.itemSelectedChangedHandler=this._itemSelectedChanged.bind(this),this.onHashChangeHandler=this._onHashChange.bind(this)}_onHashChange(){if(this.hashSelection){let e=this.getItems(),t=this.getCleanHash(),i,s=e.find((r,o)=>{let a=this.getItemValueComputed(r,o);return i=o,a==t});if(s){let r=this.getItemValueComputed(s,i);this.selected!=r&&(this.selected=r,this.setSelectedItem(),this.dispatchSelectedChanged())}}}getCleanHash(){let e=window.location.hash;return e.length>1&&(e=e.substring(1)),e}getItemValueComputed(e,t){return this.attrForSelected?e.getAttribute(this.attrForSelected):t}connectedCallback(){super.connectedCallback(),this.addEventListener("dile-item-selected",this.itemSelectedChangedHandler),window.addEventListener("hashchange",this.onHashChangeHandler)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("dile-item-selected",this.itemSelectedChangedHandler),window.removeEventListener("hashchange",this.onHashChangeHandler)}firstUpdated(){super.firstUpdated(),this._items=this.getItems();let e=0;this._items.forEach(t=>{t._assignedIndex=e,e++}),this._onHashChange(),this.setSelectedItem(),this.selected!==void 0&&setTimeout(()=>this.dispatchSelectedChanged(),500)}render(){return wu`
        <slot></slot>
      `}setSelectedItem(){if(this.attrForSelected)this._items.forEach(e=>{e.getAttribute(this.attrForSelected)==this.selected?e.selected=!0:e.selected=!1});else{let e=parseInt(this.selected);!isNaN(e)&&this._items[e]&&this._items.forEach((t,i)=>{i==e?t.selected=!0:t.selected=!1})}this.hashSelection&&this.selected!=null&&(window.location.hash=this.selected)}_itemSelectedChanged(e){this.attrForSelected?this.selected=e.detail.getAttribute(this.attrForSelected):this.selected=e.detail._assignedIndex,this.dispatchSelectedChanged()}dispatchSelectedChanged(){this.dispatchEvent(new CustomEvent("dile-selected-changed",{bubbles:!0,composed:!0,detail:{selected:this.selected,selectorId:this.selectorId}}))}updated(e){this.setSelectedItem()}getItems(){return this.shadowRoot.querySelector("slot").assignedElements({flatten:!0})}},hd=n=>class extends n{static get properties(){return{selected:{type:Boolean,reflect:!0},index:{type:Number}}}constructor(){super(),this.selected=!1}select(){this.dispatchEvent(new CustomEvent("dile-item-selected",{bubbles:!0,composed:!0,detail:this}))}};class Hu extends hd(ct){static get styles(){return Zh`
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
    `}render(){return lu`
      <article @click='${this.select}' class="${this.selected?"selected":""}">
        <div class="label"><slot></slot></div>
        <div class="line">
          <span class="${this.selected?"markselected":""}"></span>
        </div>
      </article>
    `}}window.customElements.define("dile-tab",Hu);class Uu extends ad(ct){static get styles(){return Zh`
      :host {
        display: flex;
      }
    `}}window.customElements.define("dile-tabs",Uu);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const os=window,xo=os.ShadowRoot&&(os.ShadyCSS===void 0||os.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Co=Symbol(),Fl=new WeakMap;let dd=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Co)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(xo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Fl.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Fl.set(t,e))}return e}toString(){return this.cssText}};const Mu=n=>new dd(typeof n=="string"?n:n+"",void 0,Co),Nu=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new dd(t,n,Co)},Tu=(n,e)=>{xo?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=os.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},Kl=xo?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Mu(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var kn;const ys=window,Jl=ys.trustedTypes,zu=Jl?Jl.emptyScript:"",Yl=ys.reactiveElementPolyfillSupport,Ur={toAttribute(n,e){switch(e){case Boolean:n=n?zu:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},cd=(n,e)=>e!==n&&(e==e||n==n),Rn={attribute:!0,type:String,converter:Ur,reflect:!1,hasChanged:cd},Mr="finalized";let st=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=Rn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Rn}static finalize(){if(this.hasOwnProperty(Mr))return!1;this[Mr]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Kl(s))}else e!==void 0&&t.push(Kl(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Tu(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Rn){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Ur).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:Ur;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||cd)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};st[Mr]=!0,st.elementProperties=new Map,st.elementStyles=[],st.shadowRootOptions={mode:"open"},Yl==null||Yl({ReactiveElement:st}),((kn=ys.reactiveElementVersions)!==null&&kn!==void 0?kn:ys.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pn;const bs=window,At=bs.trustedTypes,Gl=At?At.createPolicy("lit-html",{createHTML:n=>n}):void 0,Nr="$lit$",ie=`lit$${(Math.random()+"").slice(9)}$`,ud="?"+ie,ju=`<${ud}>`,Le=document,Ei=()=>Le.createComment(""),Si=n=>n===null||typeof n!="object"&&typeof n!="function",pd=Array.isArray,Lu=n=>pd(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",On=`[ 	
\f\r]`,ii=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Xl=/-->/g,Ql=/>/g,fe=RegExp(`>|${On}(?:([^\\s"'>=/]+)(${On}*=${On}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ea=/'/g,ta=/"/g,vd=/^(?:script|style|textarea|title)$/i,Iu=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),Bu=Iu(1),wt=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),ia=new WeakMap,ke=Le.createTreeWalker(Le,129,null,!1);function $d(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Gl!==void 0?Gl.createHTML(e):e}const Du=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ii;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===ii?d[1]==="!--"?o=Xl:d[1]!==void 0?o=Ql:d[2]!==void 0?(vd.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=fe):d[3]!==void 0&&(o=fe):o===fe?d[0]===">"?(o=s??ii,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?fe:d[3]==='"'?ta:ea):o===ta||o===ea?o=fe:o===Xl||o===Ql?o=ii:(o=fe,s=void 0);const p=o===fe&&n[a+1].startsWith("/>")?" ":"";r+=o===ii?l+ju:c>=0?(i.push(h),l.slice(0,c)+Nr+l.slice(c)+ie+p):l+ie+(c===-2?(i.push(void 0),a):p)}return[$d(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let Tr=class fd{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=Du(e,t);if(this.el=fd.createElement(h,i),ke.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=ke.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(Nr)||u.startsWith(ie)){const p=d[o++];if(c.push(u),p!==void 0){const f=s.getAttribute(p.toLowerCase()+Nr).split(ie),$=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:$[2],strings:f,ctor:$[1]==="."?Wu:$[1]==="?"?Zu:$[1]==="@"?Fu:qs})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(vd.test(s.tagName)){const c=s.textContent.split(ie),u=c.length-1;if(u>0){s.textContent=At?At.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],Ei()),ke.nextNode(),l.push({type:2,index:++r});s.append(c[u],Ei())}}}else if(s.nodeType===8)if(s.data===ud)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(ie,c+1))!==-1;)l.push({type:7,index:r}),c+=ie.length-1}r++}}static createElement(e,t){const i=Le.createElement("template");return i.innerHTML=e,i}};function Et(n,e,t=n,i){var s,r,o,a;if(e===wt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=Si(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Et(n,l._$AS(n,e.values),l,i)),e}let Vu=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Le).importNode(i,!0);ke.currentNode=r;let o=ke.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new ko(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new Ku(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=ke.nextNode(),a++)}return ke.currentNode=Le,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},ko=class gd{constructor(e,t,i,s){var r;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Et(this,e,t),Si(e)?e===R||e==null||e===""?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==wt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Lu(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==R&&Si(this._$AH)?this._$AA.nextSibling.data=e:this.$(Le.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Tr.createElement($d(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new Vu(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=ia.get(e.strings);return t===void 0&&ia.set(e.strings,t=new Tr(e)),t}T(e){pd(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new gd(this.k(Ei()),this.k(Ei()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},qs=class{constructor(e,t,i,s,r){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Et(this,e,t,0),o=!Si(e)||e!==this._$AH&&e!==wt,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=Et(this,a[i+l],t,l),h===wt&&(h=this._$AH[l]),o||(o=!Si(h)||h!==this._$AH[l]),h===R?e=R:e!==R&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Wu=class extends qs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}};const qu=At?At.emptyScript:"";let Zu=class extends qs{constructor(){super(...arguments),this.type=4}j(e){e&&e!==R?this.element.setAttribute(this.name,qu):this.element.removeAttribute(this.name)}},Fu=class extends qs{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Et(this,e,t,0))!==null&&i!==void 0?i:R)===wt)return;const s=this._$AH,r=e===R&&s!==R||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==R&&(s===R||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Ku=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Et(this,e)}};const sa=bs.litHtmlPolyfillSupport;sa==null||sa(Tr,ko),((Pn=bs.litHtmlVersions)!==null&&Pn!==void 0?Pn:bs.litHtmlVersions=[]).push("2.8.0");const Ju=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new ko(e.insertBefore(Ei(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Hn,Un;let ci=class extends st{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ju(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return wt}};ci.finalized=!0,ci._$litElement$=!0,(Hn=globalThis.litElementHydrateSupport)===null||Hn===void 0||Hn.call(globalThis,{LitElement:ci});const na=globalThis.litElementPolyfillSupport;na==null||na({LitElement:ci});((Un=globalThis.litElementVersions)!==null&&Un!==void 0?Un:globalThis.litElementVersions=[]).push("3.3.3");class Yu extends ci{static get properties(){return{attrForSelected:{type:String},selected:{type:String},selectorId:{type:String},showDisplay:{type:String}}}render(){return Bu`
    <slot></slot>
    `}constructor(){super(),this.transitionTime=1e3,this.selected=0,this._pageInitialization(),this._onSelectorIdChangedHandler=this._onSelectorIdChanged.bind(this),this.showDisplay="block"}static get styles(){return Nu`
      :host {
        display: block;
      }
    `}_pageInitialization(){this.pages=[];let e=this.children;for(let t of e)t.style.display="none",t.style.transition=`opacity ${this.transitionTime}ms`,t.style.opacity="0",this.pages.push(t)}initializeExternalPages(e){this.innerHTML=e,this._pageInitialization()}firstUpdated(){let e=this._selectPage(this.selected,this.attrForSelected);e&&(e.style.display=this.showDisplay),this.selectorId&&document.addEventListener("dile-selected-changed",this._onSelectorIdChangedHandler)}disconnectedCallback(){super.disconnectedCallback(),this.selectorId&&document.removeEventListener("dile-selected-changed",this._onSelectorIdChangedHandler)}updated(e){if(this._updatedAndNotUndefined(e,"selected")||this._updatedAndNotUndefined(e,"attrForSelected")){let t=this._getLastValueProperty(e,"selected"),i=this._getLastValueProperty(e,"attrForSelected");this.hidePage(t,i)}this._showCurrentPage()}_selectPage(e,t){let i;if(!t)i=this.pages[e];else for(let s of this.pages)if(s.getAttribute(t)==e){i=s;break}return i}_showCurrentPage(){let e=this._selectPage(this.selected,this.attrForSelected);e&&(e.style.display=this.showDisplay,setTimeout(()=>{e.style.opacity="1"},50))}hidePage(e,t){let i=this._selectPage(e,t);i&&(i.style.display="none",i.style.opacity="0")}_updatedAndNotUndefined(e,t){return e.has(t)&&e.get(t)!=null}_getLastValueProperty(e,t){return e.has(t)?e.get(t):this[t]}_onSelectorIdChanged(e){e.detail.selectorId==this.selectorId&&(this.selected=e.detail.selected)}}window.customElements.define("dile-pages",Yu);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ls=window,Ro=ls.ShadowRoot&&(ls.ShadyCSS===void 0||ls.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Po=Symbol(),ra=new WeakMap;let md=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Po)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ro&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ra.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ra.set(t,e))}return e}toString(){return this.cssText}};const Gu=n=>new md(typeof n=="string"?n:n+"",void 0,Po),Xu=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new md(t,n,Po)},Qu=(n,e)=>{Ro?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=ls.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},oa=Ro?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Gu(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Mn;const As=window,la=As.trustedTypes,ep=la?la.emptyScript:"",aa=As.reactiveElementPolyfillSupport,zr={toAttribute(n,e){switch(e){case Boolean:n=n?ep:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},_d=(n,e)=>e!==n&&(e==e||n==n),Nn={attribute:!0,type:String,converter:zr,reflect:!1,hasChanged:_d},jr="finalized";let nt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=Nn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Nn}static finalize(){if(this.hasOwnProperty(jr))return!1;this[jr]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(oa(s))}else e!==void 0&&t.push(oa(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Qu(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Nn){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:zr).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:zr;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||_d)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};nt[jr]=!0,nt.elementProperties=new Map,nt.elementStyles=[],nt.shadowRootOptions={mode:"open"},aa==null||aa({ReactiveElement:nt}),((Mn=As.reactiveElementVersions)!==null&&Mn!==void 0?Mn:As.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Tn;const ws=window,St=ws.trustedTypes,ha=St?St.createPolicy("lit-html",{createHTML:n=>n}):void 0,Lr="$lit$",se=`lit$${(Math.random()+"").slice(9)}$`,yd="?"+se,tp=`<${yd}>`,Ie=document,xi=()=>Ie.createComment(""),Ci=n=>n===null||typeof n!="object"&&typeof n!="function",bd=Array.isArray,ip=n=>bd(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",zn=`[ 	
\f\r]`,si=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,da=/-->/g,ca=/>/g,ge=RegExp(`>|${zn}(?:([^\\s"'>=/]+)(${zn}*=${zn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ua=/'/g,pa=/"/g,Ad=/^(?:script|style|textarea|title)$/i,sp=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),np=sp(1),xt=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),va=new WeakMap,Re=Ie.createTreeWalker(Ie,129,null,!1);function wd(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ha!==void 0?ha.createHTML(e):e}const rp=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=si;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===si?d[1]==="!--"?o=da:d[1]!==void 0?o=ca:d[2]!==void 0?(Ad.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=ge):d[3]!==void 0&&(o=ge):o===ge?d[0]===">"?(o=s??si,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?ge:d[3]==='"'?pa:ua):o===pa||o===ua?o=ge:o===da||o===ca?o=si:(o=ge,s=void 0);const p=o===ge&&n[a+1].startsWith("/>")?" ":"";r+=o===si?l+tp:c>=0?(i.push(h),l.slice(0,c)+Lr+l.slice(c)+se+p):l+se+(c===-2?(i.push(void 0),a):p)}return[wd(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let Ir=class Ed{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=rp(e,t);if(this.el=Ed.createElement(h,i),Re.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=Re.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(Lr)||u.startsWith(se)){const p=d[o++];if(c.push(u),p!==void 0){const f=s.getAttribute(p.toLowerCase()+Lr).split(se),$=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:$[2],strings:f,ctor:$[1]==="."?lp:$[1]==="?"?hp:$[1]==="@"?dp:Zs})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(Ad.test(s.tagName)){const c=s.textContent.split(se),u=c.length-1;if(u>0){s.textContent=St?St.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],xi()),Re.nextNode(),l.push({type:2,index:++r});s.append(c[u],xi())}}}else if(s.nodeType===8)if(s.data===yd)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(se,c+1))!==-1;)l.push({type:7,index:r}),c+=se.length-1}r++}}static createElement(e,t){const i=Ie.createElement("template");return i.innerHTML=e,i}};function Ct(n,e,t=n,i){var s,r,o,a;if(e===xt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=Ci(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Ct(n,l._$AS(n,e.values),l,i)),e}let op=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ie).importNode(i,!0);Re.currentNode=r;let o=Re.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new Oo(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new cp(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=Re.nextNode(),a++)}return Re.currentNode=Ie,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Oo=class Sd{constructor(e,t,i,s){var r;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ct(this,e,t),Ci(e)?e===P||e==null||e===""?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==xt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ip(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==P&&Ci(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ie.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Ir.createElement(wd(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new op(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=va.get(e.strings);return t===void 0&&va.set(e.strings,t=new Ir(e)),t}T(e){bd(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Sd(this.k(xi()),this.k(xi()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Zs=class{constructor(e,t,i,s,r){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Ct(this,e,t,0),o=!Ci(e)||e!==this._$AH&&e!==xt,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=Ct(this,a[i+l],t,l),h===xt&&(h=this._$AH[l]),o||(o=!Ci(h)||h!==this._$AH[l]),h===P?e=P:e!==P&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},lp=class extends Zs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}};const ap=St?St.emptyScript:"";let hp=class extends Zs{constructor(){super(...arguments),this.type=4}j(e){e&&e!==P?this.element.setAttribute(this.name,ap):this.element.removeAttribute(this.name)}},dp=class extends Zs{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Ct(this,e,t,0))!==null&&i!==void 0?i:P)===xt)return;const s=this._$AH,r=e===P&&s!==P||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==P&&(s===P||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},cp=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ct(this,e)}};const $a=ws.litHtmlPolyfillSupport;$a==null||$a(Ir,Oo),((Tn=ws.litHtmlVersions)!==null&&Tn!==void 0?Tn:ws.litHtmlVersions=[]).push("2.8.0");const up=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Oo(e.insertBefore(xi(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var jn,Ln;let ui=class extends nt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=up(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return xt}};ui.finalized=!0,ui._$litElement$=!0,(jn=globalThis.litElementHydrateSupport)===null||jn===void 0||jn.call(globalThis,{LitElement:ui});const fa=globalThis.litElementPolyfillSupport;fa==null||fa({LitElement:ui});((Ln=globalThis.litElementVersions)!==null&&Ln!==void 0?Ln:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const as=window,Ho=as.ShadowRoot&&(as.ShadyCSS===void 0||as.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Uo=Symbol(),ga=new WeakMap;let xd=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Uo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ho&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=ga.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ga.set(t,e))}return e}toString(){return this.cssText}};const pp=n=>new xd(typeof n=="string"?n:n+"",void 0,Uo),vp=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new xd(t,n,Uo)},$p=(n,e)=>{Ho?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=as.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},ma=Ho?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return pp(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var In;const Es=window,_a=Es.trustedTypes,fp=_a?_a.emptyScript:"",ya=Es.reactiveElementPolyfillSupport,Br={toAttribute(n,e){switch(e){case Boolean:n=n?fp:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Cd=(n,e)=>e!==n&&(e==e||n==n),Bn={attribute:!0,type:String,converter:Br,reflect:!1,hasChanged:Cd},Dr="finalized";let rt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=Bn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Bn}static finalize(){if(this.hasOwnProperty(Dr))return!1;this[Dr]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(ma(s))}else e!==void 0&&t.push(ma(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return $p(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Bn){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Br).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:Br;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Cd)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};rt[Dr]=!0,rt.elementProperties=new Map,rt.elementStyles=[],rt.shadowRootOptions={mode:"open"},ya==null||ya({ReactiveElement:rt}),((In=Es.reactiveElementVersions)!==null&&In!==void 0?In:Es.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Dn;const Ss=window,kt=Ss.trustedTypes,ba=kt?kt.createPolicy("lit-html",{createHTML:n=>n}):void 0,Vr="$lit$",ne=`lit$${(Math.random()+"").slice(9)}$`,kd="?"+ne,gp=`<${kd}>`,Be=document,ki=()=>Be.createComment(""),Ri=n=>n===null||typeof n!="object"&&typeof n!="function",Rd=Array.isArray,mp=n=>Rd(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Vn=`[ 	
\f\r]`,ni=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Aa=/-->/g,wa=/>/g,me=RegExp(`>|${Vn}(?:([^\\s"'>=/]+)(${Vn}*=${Vn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ea=/'/g,Sa=/"/g,Pd=/^(?:script|style|textarea|title)$/i,_p=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),xa=_p(1),Rt=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),Ca=new WeakMap,Pe=Be.createTreeWalker(Be,129,null,!1);function Od(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ba!==void 0?ba.createHTML(e):e}const yp=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ni;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===ni?d[1]==="!--"?o=Aa:d[1]!==void 0?o=wa:d[2]!==void 0?(Pd.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=me):d[3]!==void 0&&(o=me):o===me?d[0]===">"?(o=s??ni,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?me:d[3]==='"'?Sa:Ea):o===Sa||o===Ea?o=me:o===Aa||o===wa?o=ni:(o=me,s=void 0);const p=o===me&&n[a+1].startsWith("/>")?" ":"";r+=o===ni?l+gp:c>=0?(i.push(h),l.slice(0,c)+Vr+l.slice(c)+ne+p):l+ne+(c===-2?(i.push(void 0),a):p)}return[Od(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let Wr=class Hd{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=yp(e,t);if(this.el=Hd.createElement(h,i),Pe.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=Pe.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(Vr)||u.startsWith(ne)){const p=d[o++];if(c.push(u),p!==void 0){const f=s.getAttribute(p.toLowerCase()+Vr).split(ne),$=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:$[2],strings:f,ctor:$[1]==="."?Ap:$[1]==="?"?Ep:$[1]==="@"?Sp:Fs})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(Pd.test(s.tagName)){const c=s.textContent.split(ne),u=c.length-1;if(u>0){s.textContent=kt?kt.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],ki()),Pe.nextNode(),l.push({type:2,index:++r});s.append(c[u],ki())}}}else if(s.nodeType===8)if(s.data===kd)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(ne,c+1))!==-1;)l.push({type:7,index:r}),c+=ne.length-1}r++}}static createElement(e,t){const i=Be.createElement("template");return i.innerHTML=e,i}};function Pt(n,e,t=n,i){var s,r,o,a;if(e===Rt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=Ri(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Pt(n,l._$AS(n,e.values),l,i)),e}let bp=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Be).importNode(i,!0);Pe.currentNode=r;let o=Pe.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new Mo(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new xp(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=Pe.nextNode(),a++)}return Pe.currentNode=Be,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Mo=class Ud{constructor(e,t,i,s){var r;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Pt(this,e,t),Ri(e)?e===O||e==null||e===""?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==Rt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):mp(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==O&&Ri(this._$AH)?this._$AA.nextSibling.data=e:this.$(Be.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Wr.createElement(Od(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new bp(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=Ca.get(e.strings);return t===void 0&&Ca.set(e.strings,t=new Wr(e)),t}T(e){Rd(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Ud(this.k(ki()),this.k(ki()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Fs=class{constructor(e,t,i,s,r){this.type=1,this._$AH=O,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Pt(this,e,t,0),o=!Ri(e)||e!==this._$AH&&e!==Rt,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=Pt(this,a[i+l],t,l),h===Rt&&(h=this._$AH[l]),o||(o=!Ri(h)||h!==this._$AH[l]),h===O?e=O:e!==O&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ap=class extends Fs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===O?void 0:e}};const wp=kt?kt.emptyScript:"";let Ep=class extends Fs{constructor(){super(...arguments),this.type=4}j(e){e&&e!==O?this.element.setAttribute(this.name,wp):this.element.removeAttribute(this.name)}},Sp=class extends Fs{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Pt(this,e,t,0))!==null&&i!==void 0?i:O)===Rt)return;const s=this._$AH,r=e===O&&s!==O||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==O&&(s===O||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},xp=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Pt(this,e)}};const ka=Ss.litHtmlPolyfillSupport;ka==null||ka(Wr,Mo),((Dn=Ss.litHtmlVersions)!==null&&Dn!==void 0?Dn:Ss.litHtmlVersions=[]).push("2.8.0");const Cp=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Mo(e.insertBefore(ki(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Wn,qn;let pi=class extends rt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Cp(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Rt}};pi.finalized=!0,pi._$litElement$=!0,(Wn=globalThis.litElementHydrateSupport)===null||Wn===void 0||Wn.call(globalThis,{LitElement:pi});const Ra=globalThis.litElementPolyfillSupport;Ra==null||Ra({LitElement:pi});((qn=globalThis.litElementVersions)!==null&&qn!==void 0?qn:globalThis.litElementVersions=[]).push("3.3.3");const kp=n=>class extends n{constructor(){super(),this.closeOnEscHandler=this.escClose.bind(this)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.closeOnEscHandler)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.closeOnEscHandler)}escClose(e){e.key==="Escape"&&this.opened&&this.close()}close(){console.log("You need to implement a close method!")}},Rp="dile-app-drawer-click-outside",Pp="dile-app-drawer-closed";class Op extends kp(pi){static get properties(){return{direction:{type:String,reflect:!0},opened:{type:Boolean,reflect:!0},noModal:{type:Boolean,attribute:"no-modal"}}}constructor(){super(),this.direction="top",this.opened=!1,this._documentClose=this._documentClose.bind(this)}static get styles(){return vp`
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
    `}get modalTemplate(){return this.noModal?"":xa`<div class="modal" @click=${this._documentClose}></div>`}_documentClose(){this.opened&&(this.close(),this.dispatchEvent(new CustomEvent(Rp,{bubbles:!0,composed:!0})))}toggle(){this.opened=!this.opened}open(){this.opened=!0}close(){this.opened=!1,this.dispatchEvent(new CustomEvent(Pp,{bubbles:!0,composed:!0}))}_contentClick(e){e.stopPropagation()}}customElements.define("dile-app-drawer",Op);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hs=window,No=hs.ShadowRoot&&(hs.ShadyCSS===void 0||hs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,To=Symbol(),Pa=new WeakMap;let Md=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==To)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(No&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Pa.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Pa.set(t,e))}return e}toString(){return this.cssText}};const Hp=n=>new Md(typeof n=="string"?n:n+"",void 0,To),Up=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new Md(t,n,To)},Mp=(n,e)=>{No?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=hs.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},Oa=No?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Hp(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Zn;const xs=window,Ha=xs.trustedTypes,Np=Ha?Ha.emptyScript:"",Ua=xs.reactiveElementPolyfillSupport,qr={toAttribute(n,e){switch(e){case Boolean:n=n?Np:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Nd=(n,e)=>e!==n&&(e==e||n==n),Fn={attribute:!0,type:String,converter:qr,reflect:!1,hasChanged:Nd},Zr="finalized";let ot=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=Fn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Fn}static finalize(){if(this.hasOwnProperty(Zr))return!1;this[Zr]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Oa(s))}else e!==void 0&&t.push(Oa(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Mp(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Fn){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:qr).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:qr;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Nd)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ot[Zr]=!0,ot.elementProperties=new Map,ot.elementStyles=[],ot.shadowRootOptions={mode:"open"},Ua==null||Ua({ReactiveElement:ot}),((Zn=xs.reactiveElementVersions)!==null&&Zn!==void 0?Zn:xs.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Kn;const Cs=window,Ot=Cs.trustedTypes,Ma=Ot?Ot.createPolicy("lit-html",{createHTML:n=>n}):void 0,Fr="$lit$",re=`lit$${(Math.random()+"").slice(9)}$`,Td="?"+re,Tp=`<${Td}>`,De=document,Pi=()=>De.createComment(""),Oi=n=>n===null||typeof n!="object"&&typeof n!="function",zd=Array.isArray,zp=n=>zd(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Jn=`[ 	
\f\r]`,ri=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Na=/-->/g,Ta=/>/g,_e=RegExp(`>|${Jn}(?:([^\\s"'>=/]+)(${Jn}*=${Jn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),za=/'/g,ja=/"/g,jd=/^(?:script|style|textarea|title)$/i,jp=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),Lp=jp(1),Ht=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),La=new WeakMap,Oe=De.createTreeWalker(De,129,null,!1);function Ld(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ma!==void 0?Ma.createHTML(e):e}const Ip=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ri;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===ri?d[1]==="!--"?o=Na:d[1]!==void 0?o=Ta:d[2]!==void 0?(jd.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=_e):d[3]!==void 0&&(o=_e):o===_e?d[0]===">"?(o=s??ri,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?_e:d[3]==='"'?ja:za):o===ja||o===za?o=_e:o===Na||o===Ta?o=ri:(o=_e,s=void 0);const p=o===_e&&n[a+1].startsWith("/>")?" ":"";r+=o===ri?l+Tp:c>=0?(i.push(h),l.slice(0,c)+Fr+l.slice(c)+re+p):l+re+(c===-2?(i.push(void 0),a):p)}return[Ld(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let Kr=class Id{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=Ip(e,t);if(this.el=Id.createElement(h,i),Oe.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=Oe.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(Fr)||u.startsWith(re)){const p=d[o++];if(c.push(u),p!==void 0){const f=s.getAttribute(p.toLowerCase()+Fr).split(re),$=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:$[2],strings:f,ctor:$[1]==="."?Dp:$[1]==="?"?Wp:$[1]==="@"?qp:Ks})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(jd.test(s.tagName)){const c=s.textContent.split(re),u=c.length-1;if(u>0){s.textContent=Ot?Ot.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],Pi()),Oe.nextNode(),l.push({type:2,index:++r});s.append(c[u],Pi())}}}else if(s.nodeType===8)if(s.data===Td)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(re,c+1))!==-1;)l.push({type:7,index:r}),c+=re.length-1}r++}}static createElement(e,t){const i=De.createElement("template");return i.innerHTML=e,i}};function Ut(n,e,t=n,i){var s,r,o,a;if(e===Ht)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=Oi(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Ut(n,l._$AS(n,e.values),l,i)),e}let Bp=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:De).importNode(i,!0);Oe.currentNode=r;let o=Oe.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new zo(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new Zp(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=Oe.nextNode(),a++)}return Oe.currentNode=De,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},zo=class Bd{constructor(e,t,i,s){var r;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ut(this,e,t),Oi(e)?e===H||e==null||e===""?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==Ht&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):zp(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==H&&Oi(this._$AH)?this._$AA.nextSibling.data=e:this.$(De.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Kr.createElement(Ld(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new Bp(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=La.get(e.strings);return t===void 0&&La.set(e.strings,t=new Kr(e)),t}T(e){zd(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Bd(this.k(Pi()),this.k(Pi()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ks=class{constructor(e,t,i,s,r){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Ut(this,e,t,0),o=!Oi(e)||e!==this._$AH&&e!==Ht,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=Ut(this,a[i+l],t,l),h===Ht&&(h=this._$AH[l]),o||(o=!Oi(h)||h!==this._$AH[l]),h===H?e=H:e!==H&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Dp=class extends Ks{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}};const Vp=Ot?Ot.emptyScript:"";let Wp=class extends Ks{constructor(){super(...arguments),this.type=4}j(e){e&&e!==H?this.element.setAttribute(this.name,Vp):this.element.removeAttribute(this.name)}},qp=class extends Ks{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Ut(this,e,t,0))!==null&&i!==void 0?i:H)===Ht)return;const s=this._$AH,r=e===H&&s!==H||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==H&&(s===H||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Zp=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ut(this,e)}};const Ia=Cs.litHtmlPolyfillSupport;Ia==null||Ia(Kr,zo),((Kn=Cs.litHtmlVersions)!==null&&Kn!==void 0?Kn:Cs.litHtmlVersions=[]).push("2.8.0");const Fp=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new zo(e.insertBefore(Pi(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Yn,Gn;let vi=class extends ot{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fp(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Ht}};vi.finalized=!0,vi._$litElement$=!0,(Yn=globalThis.litElementHydrateSupport)===null||Yn===void 0||Yn.call(globalThis,{LitElement:vi});const Ba=globalThis.litElementPolyfillSupport;Ba==null||Ba({LitElement:vi});((Gn=globalThis.litElementVersions)!==null&&Gn!==void 0?Gn:globalThis.litElementVersions=[]).push("3.3.3");class Kp extends vi{static get properties(){return{active:{type:Boolean}}}static get styles(){return Up`
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
    `}render(){return Lp`
      <button
        class="hamburger hamburger--squeeze ${this.active?"is-active":""}"
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    `}}window.customElements.define("dile-hamburger",Kp);class Jp extends ui{static get properties(){return{direction:{type:String,reflect:!0},opened:{type:Boolean,reflect:!0},hamburgerAlwaysVisible:{type:Boolean,reflect:!0}}}static get styles(){return Xu`
      :host {
        display: flex;
        align-items: center;
      }
      :host([hamburgerAlwaysVisible]) dile-hamburger {
        position: relative;
        z-index: 100020;
      }
    `}constructor(){super(),this.direction="top",this.opened=!1,this.hamburgerAlwaysVisible=!1}firstUpdated(){this.drawer=this.shadowRoot.getElementById("drawer");let e=this.querySelector("[dile-cloak]");e&&e.removeAttribute("dile-cloak")}updated(e){if(e.has("opened")){let t=this.opened?"dile-menu-hamburger-opened":"dile-menu-hamburger-closed";this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0,detail:{opened:this.opened}}))}}render(){return np`
      <dile-hamburger @click="${this.toggle}" ?active="${this.opened}"></dile-hamburger>
      <dile-app-drawer 
        id="drawer" 
        ?opened="${this.opened}" 
        direction="${this.direction}"
        @dile-app-drawer-closed="${this.close}"
      >
        <slot name="menu"></slot>
      </dile-app-drawer>
    `}toggle(){this.opened=!this.opened}open(){this.opened=!0}close(){this.opened=!1}}window.customElements.define("dile-menu-hamburger",Jp);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ds=window,jo=ds.ShadowRoot&&(ds.ShadyCSS===void 0||ds.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Lo=Symbol(),Da=new WeakMap;let Dd=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Lo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(jo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Da.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Da.set(t,e))}return e}toString(){return this.cssText}};const Yp=n=>new Dd(typeof n=="string"?n:n+"",void 0,Lo),Vd=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new Dd(t,n,Lo)},Gp=(n,e)=>{jo?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=ds.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},Va=jo?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Yp(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xn;const ks=window,Wa=ks.trustedTypes,Xp=Wa?Wa.emptyScript:"",qa=ks.reactiveElementPolyfillSupport,Jr={toAttribute(n,e){switch(e){case Boolean:n=n?Xp:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Wd=(n,e)=>e!==n&&(e==e||n==n),Qn={attribute:!0,type:String,converter:Jr,reflect:!1,hasChanged:Wd},Yr="finalized";let lt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=Qn){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Qn}static finalize(){if(this.hasOwnProperty(Yr))return!1;this[Yr]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Va(s))}else e!==void 0&&t.push(Va(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Gp(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=Qn){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:Jr).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:Jr;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Wd)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};lt[Yr]=!0,lt.elementProperties=new Map,lt.elementStyles=[],lt.shadowRootOptions={mode:"open"},qa==null||qa({ReactiveElement:lt}),((Xn=ks.reactiveElementVersions)!==null&&Xn!==void 0?Xn:ks.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var er;const Rs=window,Mt=Rs.trustedTypes,Za=Mt?Mt.createPolicy("lit-html",{createHTML:n=>n}):void 0,Gr="$lit$",oe=`lit$${(Math.random()+"").slice(9)}$`,qd="?"+oe,Qp=`<${qd}>`,Ve=document,Hi=()=>Ve.createComment(""),Ui=n=>n===null||typeof n!="object"&&typeof n!="function",Zd=Array.isArray,ev=n=>Zd(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",tr=`[ 	
\f\r]`,oi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fa=/-->/g,Ka=/>/g,ye=RegExp(`>|${tr}(?:([^\\s"'>=/]+)(${tr}*=${tr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ja=/'/g,Ya=/"/g,Fd=/^(?:script|style|textarea|title)$/i,tv=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),J=tv(1),Nt=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),Ga=new WeakMap,He=Ve.createTreeWalker(Ve,129,null,!1);function Kd(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Za!==void 0?Za.createHTML(e):e}const iv=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=oi;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===oi?d[1]==="!--"?o=Fa:d[1]!==void 0?o=Ka:d[2]!==void 0?(Fd.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=ye):d[3]!==void 0&&(o=ye):o===ye?d[0]===">"?(o=s??oi,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?ye:d[3]==='"'?Ya:Ja):o===Ya||o===Ja?o=ye:o===Fa||o===Ka?o=oi:(o=ye,s=void 0);const p=o===ye&&n[a+1].startsWith("/>")?" ":"";r+=o===oi?l+Qp:c>=0?(i.push(h),l.slice(0,c)+Gr+l.slice(c)+oe+p):l+oe+(c===-2?(i.push(void 0),a):p)}return[Kd(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let Xr=class Jd{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=iv(e,t);if(this.el=Jd.createElement(h,i),He.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=He.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(Gr)||u.startsWith(oe)){const p=d[o++];if(c.push(u),p!==void 0){const f=s.getAttribute(p.toLowerCase()+Gr).split(oe),$=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:$[2],strings:f,ctor:$[1]==="."?nv:$[1]==="?"?ov:$[1]==="@"?lv:Js})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(Fd.test(s.tagName)){const c=s.textContent.split(oe),u=c.length-1;if(u>0){s.textContent=Mt?Mt.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],Hi()),He.nextNode(),l.push({type:2,index:++r});s.append(c[u],Hi())}}}else if(s.nodeType===8)if(s.data===qd)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(oe,c+1))!==-1;)l.push({type:7,index:r}),c+=oe.length-1}r++}}static createElement(e,t){const i=Ve.createElement("template");return i.innerHTML=e,i}};function Tt(n,e,t=n,i){var s,r,o,a;if(e===Nt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=Ui(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Tt(n,l._$AS(n,e.values),l,i)),e}let sv=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ve).importNode(i,!0);He.currentNode=r;let o=He.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new Io(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new av(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=He.nextNode(),a++)}return He.currentNode=Ve,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Io=class Yd{constructor(e,t,i,s){var r;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Tt(this,e,t),Ui(e)?e===U||e==null||e===""?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==Nt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):ev(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==U&&Ui(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ve.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Xr.createElement(Kd(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new sv(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=Ga.get(e.strings);return t===void 0&&Ga.set(e.strings,t=new Xr(e)),t}T(e){Zd(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new Yd(this.k(Hi()),this.k(Hi()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Js=class{constructor(e,t,i,s,r){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Tt(this,e,t,0),o=!Ui(e)||e!==this._$AH&&e!==Nt,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=Tt(this,a[i+l],t,l),h===Nt&&(h=this._$AH[l]),o||(o=!Ui(h)||h!==this._$AH[l]),h===U?e=U:e!==U&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},nv=class extends Js{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}};const rv=Mt?Mt.emptyScript:"";let ov=class extends Js{constructor(){super(...arguments),this.type=4}j(e){e&&e!==U?this.element.setAttribute(this.name,rv):this.element.removeAttribute(this.name)}},lv=class extends Js{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Tt(this,e,t,0))!==null&&i!==void 0?i:U)===Nt)return;const s=this._$AH,r=e===U&&s!==U||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==U&&(s===U||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},av=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Tt(this,e)}};const Xa=Rs.litHtmlPolyfillSupport;Xa==null||Xa(Xr,Io),((er=Rs.litHtmlVersions)!==null&&er!==void 0?er:Rs.litHtmlVersions=[]).push("2.8.0");const hv=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Io(e.insertBefore(Hi(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ir,sr;let ut=class extends lt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=hv(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Nt}};ut.finalized=!0,ut._$litElement$=!0,(ir=globalThis.litElementHydrateSupport)===null||ir===void 0||ir.call(globalThis,{LitElement:ut});const Qa=globalThis.litElementPolyfillSupport;Qa==null||Qa({LitElement:ut});((sr=globalThis.litElementVersions)!==null&&sr!==void 0?sr:globalThis.litElementVersions=[]).push("3.3.3");class dv extends ad(ut){static get styles(){return Vd`
      :host {
        display: block;
      }
    `}}window.customElements.define("dile-selector",dv);const cv={navigate_next:J`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>`,arrow_forward:J`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>`,star:J`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#f26"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,label_important:J`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3.5 18.99l11 .01c.67 0 1.27-.33 1.63-.84L20.5 12l-4.37-6.16c-.36-.51-.96-.84-1.63-.84l-11 .01L8.34 12 3.5 18.99z"/></svg>`,add:J`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>`};class uv extends hd(ut){static get styles(){return Vd`
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
    `}static get properties(){return{icon:{type:String},href:{type:String}}}constructor(){super(),this.href=""}render(){return J`
      ${this.href==""?this.itemTemplate:J`<a href="${this.href}">${this.itemTemplate}</a>`}
    `}get itemTemplate(){return J`
      <article @click='${this.select}' class="${this.selected?"selected":""}">
        ${this.icon?J`<div class="icon">${this.iconElement(this.icon)}</div>`:""}
        <div class="line"><slot></slot></div>
      </article>
    `}iconElement(e){return cv[e]}}window.customElements.define("dile-selector-item",uv);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const cs=globalThis,Bo=cs.ShadowRoot&&(cs.ShadyCSS===void 0||cs.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Do=Symbol(),eh=new WeakMap;let Gd=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Do)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Bo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=eh.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&eh.set(t,e))}return e}toString(){return this.cssText}};const pv=n=>new Gd(typeof n=="string"?n:n+"",void 0,Do),Ge=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new Gd(t,n,Do)},vv=(n,e)=>{if(Bo)n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),s=cs.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)}},th=Bo?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return pv(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$v,defineProperty:fv,getOwnPropertyDescriptor:gv,getOwnPropertyNames:mv,getOwnPropertySymbols:_v,getPrototypeOf:yv}=Object,de=globalThis,ih=de.trustedTypes,bv=ih?ih.emptyScript:"",nr=de.reactiveElementPolyfillSupport,$i=(n,e)=>n,Qr={toAttribute(n,e){switch(e){case Boolean:n=n?bv:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Xd=(n,e)=>!$v(n,e),sh={attribute:!0,type:String,converter:Qr,reflect:!1,hasChanged:Xd};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),de.litPropertyMetadata??(de.litPropertyMetadata=new WeakMap);class at extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=sh){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);s!==void 0&&fv(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:r}=gv(this.prototype,e)??{get(){return this[t]},set(o){this[t]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){const a=s==null?void 0:s.call(this);r.call(this,o),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??sh}static _$Ei(){if(this.hasOwnProperty($i("elementProperties")))return;const e=yv(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty($i("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty($i("properties"))){const t=this.properties,i=[...mv(t),..._v(t)];for(const s of i)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,s]of t)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const s=this._$Eu(t,i);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(th(s))}else e!==void 0&&t.push(th(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$E_??(this._$E_=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$E_)==null||t.delete(e)}_$ES(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vv(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$E_)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t){var r;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:Qr).toAttribute(t,i.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){var r;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:Qr;this._$Em=s,this[s]=a.fromAttribute(t,o.type),this._$Em=null}}requestUpdate(e,t,i,s=!1,r){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??Xd)(s?r:this[e],t))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,o]of s)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.C(r,this[r],o)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$E_)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(t)):this._$ET()}catch(s){throw e=!1,this._$ET(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$E_)==null||t.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(t=>this._$EO(t,this[t]))),this._$ET()}updated(e){}firstUpdated(e){}}at.elementStyles=[],at.shadowRootOptions={mode:"open"},at[$i("elementProperties")]=new Map,at[$i("finalized")]=new Map,nr==null||nr({ReactiveElement:at}),(de.reactiveElementVersions??(de.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fi=globalThis,Ps=fi.trustedTypes,nh=Ps?Ps.createPolicy("lit-html",{createHTML:n=>n}):void 0,Qd="$lit$",le=`lit$${(Math.random()+"").slice(9)}$`,ec="?"+le,Av=`<${ec}>`,We=document,Mi=()=>We.createComment(""),Ni=n=>n===null||typeof n!="object"&&typeof n!="function",tc=Array.isArray,wv=n=>tc(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",rr=`[ 	
\f\r]`,li=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rh=/-->/g,oh=/>/g,be=RegExp(`>|${rr}(?:([^\\s"'>=/]+)(${rr}*=${rr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lh=/'/g,ah=/"/g,ic=/^(?:script|style|textarea|title)$/i,Ev=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),L=Ev(1),zt=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),hh=new WeakMap,Ue=We.createTreeWalker(We,129);function sc(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return nh!==void 0?nh.createHTML(e):e}const Sv=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=li;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===li?d[1]==="!--"?o=rh:d[1]!==void 0?o=oh:d[2]!==void 0?(ic.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=be):d[3]!==void 0&&(o=be):o===be?d[0]===">"?(o=s??li,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?be:d[3]==='"'?ah:lh):o===ah||o===lh?o=be:o===rh||o===oh?o=li:(o=be,s=void 0);const p=o===be&&n[a+1].startsWith("/>")?" ":"";r+=o===li?l+Av:c>=0?(i.push(h),l.slice(0,c)+Qd+l.slice(c)+le+p):l+le+(c===-2?a:p)}return[sc(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let eo=class nc{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=Sv(e,t);if(this.el=nc.createElement(h,i),Ue.currentNode=this.el.content,t===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=Ue.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(Qd)){const u=d[o++],p=s.getAttribute(c).split(le),f=/([.?@])?(.*)/.exec(u);l.push({type:1,index:r,name:f[2],strings:p,ctor:f[1]==="."?Cv:f[1]==="?"?kv:f[1]==="@"?Rv:Ys}),s.removeAttribute(c)}else c.startsWith(le)&&(l.push({type:6,index:r}),s.removeAttribute(c));if(ic.test(s.tagName)){const c=s.textContent.split(le),u=c.length-1;if(u>0){s.textContent=Ps?Ps.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],Mi()),Ue.nextNode(),l.push({type:2,index:++r});s.append(c[u],Mi())}}}else if(s.nodeType===8)if(s.data===ec)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(le,c+1))!==-1;)l.push({type:7,index:r}),c+=le.length-1}r++}}static createElement(e,t){const i=We.createElement("template");return i.innerHTML=e,i}};function jt(n,e,t=n,i){var o,a;if(e===zt)return e;let s=i!==void 0?(o=t._$Co)==null?void 0:o[i]:t._$Cl;const r=Ni(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=s:t._$Cl=s),s!==void 0&&(e=jt(n,s._$AS(n,e.values),s,i)),e}let xv=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??We).importNode(t,!0);Ue.currentNode=s;let r=Ue.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new Vo(r,r.nextSibling,this,e):l.type===1?h=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(h=new Pv(r,this,e)),this._$AV.push(h),l=i[++a]}o!==(l==null?void 0:l.index)&&(r=Ue.nextNode(),o++)}return Ue.currentNode=We,s}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Vo=class rc{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=jt(this,e,t),Ni(e)?e===M||e==null||e===""?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==zt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):wv(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==M&&Ni(this._$AH)?this._$AA.nextSibling.data=e:this.$(We.createTextNode(e)),this._$AH=e}g(e){var r;const{values:t,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=eo.createElement(sc(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(t);else{const o=new xv(s,this),a=o.u(this.options);o.p(t),this.$(a),this._$AH=o}}_$AC(e){let t=hh.get(e.strings);return t===void 0&&hh.set(e.strings,t=new eo(e)),t}T(e){tc(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new rc(this.k(Mi()),this.k(Mi()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Ys=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,r){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=M}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=jt(this,e,t,0),o=!Ni(e)||e!==this._$AH&&e!==zt,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=jt(this,a[i+l],t,l),h===zt&&(h=this._$AH[l]),o||(o=!Ni(h)||h!==this._$AH[l]),h===M?e=M:e!==M&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.O(e)}O(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Cv=class extends Ys{constructor(){super(...arguments),this.type=3}O(e){this.element[this.name]=e===M?void 0:e}},kv=class extends Ys{constructor(){super(...arguments),this.type=4}O(e){this.element.toggleAttribute(this.name,!!e&&e!==M)}},Rv=class extends Ys{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){if((e=jt(this,e,t,0)??M)===zt)return;const i=this._$AH,s=e===M&&i!==M||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==M&&(i===M||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Pv=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){jt(this,e)}};const or=fi.litHtmlPolyfillSupport;or==null||or(eo,Vo),(fi.litHtmlVersions??(fi.litHtmlVersions=[])).push("3.1.0");const Ov=(n,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const r=(t==null?void 0:t.renderBefore)??null;i._$litPart$=s=new Vo(e.insertBefore(Mi(),r),r,void 0,t??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Z=class extends at{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ov(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return zt}};var Th;Z._$litElement$=!0,Z.finalized=!0,(Th=globalThis.litElementHydrateSupport)==null||Th.call(globalThis,{LitElement:Z});const lr=globalThis.litElementPolyfillSupport;lr==null||lr({LitElement:Z});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");class to extends Z{constructor(){super(),this.msg="Nuevo componente Lit",this.show=!1}render(){return L`
        <div>${this.msg}</div>
        <button @click=${this.toogle}> ${this.show?"Ocultar":"Mostrar"}</button>
        `}toogle(){this.show=!this.show}}V(to,"styles",Ge`
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
    `),V(to,"properties",{msg:{type:String,attribute:"message",state:!1},show:{type:Boolean,reflect:!0}});customElements.define("dw-message",to);const Ee={done:L`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>`,search:L`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>`,checked:L`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`,unchecked:L`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`};class oc extends Z{render(){return L`
        <div>
            <input type="text" id="searchinput">
            <span>${Ee.search}</span>
        </div>
        `}}V(oc,"styles",[Ge`
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
        `]);customElements.define("eit-todo-search",oc);class io extends Z{constructor(){super(),this.completed=!1,this.todoItems=[{title:"Agregar tareas",completed:!1},{title:'Aplicar botón "Completar" a todos los elementos',completed:!0},{title:"Implementar búsqueda de elementos",completed:!1},{title:"Empezar el curso de Lit",completed:!0}]}render(){return L`
            ${this.headingTemplate}
            <eit-todo-search></eit-todo-search>
            ${this.bodyTemplate}
        `}get headingTemplate(){return L`
            <h1>ToDo List</h1>
        `}get bodyTemplate(){return L`
        <ul>
            ${this.todoItems.map(e=>L`
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
    `}changeCompleted(e){this.completed=e.detail.checked}changeItemCompleted(e){return()=>{e.completed=!e.completed,this.todoItems=[...this.todoItems]}}}V(io,"styles",[Ge`
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
        `]),V(io,"properties",{completed:{type:Boolean},todoItems:{type:Array}});customElements.define("eit-todo-list",io);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const us=window,Wo=us.ShadowRoot&&(us.ShadyCSS===void 0||us.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qo=Symbol(),dh=new WeakMap;let lc=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==qo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Wo&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=dh.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&dh.set(t,e))}return e}toString(){return this.cssText}};const Hv=n=>new lc(typeof n=="string"?n:n+"",void 0,qo),m=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new lc(t,n,qo)},Uv=(n,e)=>{Wo?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=us.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},ch=Wo?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return Hv(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ar;const Os=window,uh=Os.trustedTypes,Mv=uh?uh.emptyScript:"",ph=Os.reactiveElementPolyfillSupport,so={toAttribute(n,e){switch(e){case Boolean:n=n?Mv:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},ac=(n,e)=>e!==n&&(e==e||n==n),hr={attribute:!0,type:String,converter:so,reflect:!1,hasChanged:ac},no="finalized";let ht=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=hr){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||hr}static finalize(){if(this.hasOwnProperty(no))return!1;this[no]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(ch(s))}else e!==void 0&&t.push(ch(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Uv(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=hr){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:so).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:so;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||ac)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ht[no]=!0,ht.elementProperties=new Map,ht.elementStyles=[],ht.shadowRootOptions={mode:"open"},ph==null||ph({ReactiveElement:ht}),((ar=Os.reactiveElementVersions)!==null&&ar!==void 0?ar:Os.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dr;const Hs=window,Lt=Hs.trustedTypes,vh=Lt?Lt.createPolicy("lit-html",{createHTML:n=>n}):void 0,ro="$lit$",ae=`lit$${(Math.random()+"").slice(9)}$`,hc="?"+ae,Nv=`<${hc}>`,qe=document,Ti=()=>qe.createComment(""),zi=n=>n===null||typeof n!="object"&&typeof n!="function",dc=Array.isArray,Tv=n=>dc(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",cr=`[ 	
\f\r]`,ai=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$h=/-->/g,fh=/>/g,Ae=RegExp(`>|${cr}(?:([^\\s"'>=/]+)(${cr}*=${cr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gh=/'/g,mh=/"/g,cc=/^(?:script|style|textarea|title)$/i,zv=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),g=zv(1),It=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),_h=new WeakMap,Me=qe.createTreeWalker(qe,129,null,!1);function uc(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return vh!==void 0?vh.createHTML(e):e}const jv=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=ai;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===ai?d[1]==="!--"?o=$h:d[1]!==void 0?o=fh:d[2]!==void 0?(cc.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=Ae):d[3]!==void 0&&(o=Ae):o===Ae?d[0]===">"?(o=s??ai,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?Ae:d[3]==='"'?mh:gh):o===mh||o===gh?o=Ae:o===$h||o===fh?o=ai:(o=Ae,s=void 0);const p=o===Ae&&n[a+1].startsWith("/>")?" ":"";r+=o===ai?l+Nv:c>=0?(i.push(h),l.slice(0,c)+ro+l.slice(c)+ae+p):l+ae+(c===-2?(i.push(void 0),a):p)}return[uc(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};let oo=class pc{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=jv(e,t);if(this.el=pc.createElement(h,i),Me.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=Me.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith(ro)||u.startsWith(ae)){const p=d[o++];if(c.push(u),p!==void 0){const f=s.getAttribute(p.toLowerCase()+ro).split(ae),$=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:$[2],strings:f,ctor:$[1]==="."?Iv:$[1]==="?"?Dv:$[1]==="@"?Vv:Gs})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(cc.test(s.tagName)){const c=s.textContent.split(ae),u=c.length-1;if(u>0){s.textContent=Lt?Lt.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],Ti()),Me.nextNode(),l.push({type:2,index:++r});s.append(c[u],Ti())}}}else if(s.nodeType===8)if(s.data===hc)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(ae,c+1))!==-1;)l.push({type:7,index:r}),c+=ae.length-1}r++}}static createElement(e,t){const i=qe.createElement("template");return i.innerHTML=e,i}};function Bt(n,e,t=n,i){var s,r,o,a;if(e===It)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=zi(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Bt(n,l._$AS(n,e.values),l,i)),e}let Lv=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:qe).importNode(i,!0);Me.currentNode=r;let o=Me.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new Zo(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new Wv(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=Me.nextNode(),a++)}return Me.currentNode=qe,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Zo=class vc{constructor(e,t,i,s){var r;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Bt(this,e,t),zi(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==It&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Tv(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==N&&zi(this._$AH)?this._$AA.nextSibling.data=e:this.$(qe.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=oo.createElement(uc(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new Lv(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=_h.get(e.strings);return t===void 0&&_h.set(e.strings,t=new oo(e)),t}T(e){dc(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new vc(this.k(Ti()),this.k(Ti()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Gs=class{constructor(e,t,i,s,r){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Bt(this,e,t,0),o=!zi(e)||e!==this._$AH&&e!==It,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=Bt(this,a[i+l],t,l),h===It&&(h=this._$AH[l]),o||(o=!zi(h)||h!==this._$AH[l]),h===N?e=N:e!==N&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Iv=class extends Gs{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}};const Bv=Lt?Lt.emptyScript:"";let Dv=class extends Gs{constructor(){super(...arguments),this.type=4}j(e){e&&e!==N?this.element.setAttribute(this.name,Bv):this.element.removeAttribute(this.name)}},Vv=class extends Gs{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Bt(this,e,t,0))!==null&&i!==void 0?i:N)===It)return;const s=this._$AH,r=e===N&&s!==N||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==N&&(s===N||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},Wv=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Bt(this,e)}};const yh=Hs.litHtmlPolyfillSupport;yh==null||yh(oo,Zo),((dr=Hs.litHtmlVersions)!==null&&dr!==void 0?dr:Hs.litHtmlVersions=[]).push("2.8.0");const qv=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new Zo(e.insertBefore(Ti(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ur,pr;let Y=class extends ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qv(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return It}};Y.finalized=!0,Y._$litElement$=!0,(ur=globalThis.litElementHydrateSupport)===null||ur===void 0||ur.call(globalThis,{LitElement:Y});const bh=globalThis.litElementPolyfillSupport;bh==null||bh({LitElement:Y});((pr=globalThis.litElementVersions)!==null&&pr!==void 0?pr:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=n=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(n,e):((t,i)=>{const{kind:s,elements:r}=i;return{kind:s,elements:r,finisher(o){customElements.define(t,o)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zv=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},Fv=(n,e,t)=>{e.constructor.createProperty(t,n)};function v(n){return(e,t)=>t!==void 0?Fv(n,e,t):Zv(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kv(n){return v({...n,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Jv=({finisher:n,descriptor:e})=>(t,i)=>{var s;if(i===void 0){const r=(s=t.originalKey)!==null&&s!==void 0?s:t.key,o=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:{...t,key:r};return n!=null&&(o.finisher=function(a){n(a,r)}),o}{const r=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),n==null||n(r,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function S(n,e){return Jv({descriptor:t=>{const i={get(){var s,r;return(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const s=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var r,o;return this[s]===void 0&&(this[s]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n))!==null&&o!==void 0?o:null),this[s]}}return i}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vr;((vr=window.HTMLSlotElement)===null||vr===void 0?void 0:vr.prototype.assignedElements)!=null;var Yv=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Gv=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};const A=m`
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
`;class w extends Y{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){const t=this.canvasSize();if(!e&&t[0]===this.lastSize[0]&&t[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${t[0]}`),this.svg.setAttribute("height",`${t[1]}`),this.draw(this.svg,t),this.lastSize=t,this.classList.add("wired-rendered")}}fire(e,t){Fo(this,e,t)}}Yv([S("svg"),Gv("design:type",SVGSVGElement)],w.prototype,"svg",void 0);function Xv(){return Math.floor(Math.random()*2**31)}function Fo(n,e,t){n.dispatchEvent(new CustomEvent(e,{composed:!0,bubbles:!0,detail:t}))}function lo(n,e,t){if(n&&n.length){const[i,s]=e,r=Math.PI/180*t,o=Math.cos(r),a=Math.sin(r);for(const l of n){const[h,d]=l;l[0]=(h-i)*o-(d-s)*a+i,l[1]=(h-i)*a+(d-s)*o+s}}}function Qv(n,e,t){const i=[];n.forEach(s=>i.push(...s)),lo(i,e,t)}function e$(n,e){return n[0]===e[0]&&n[1]===e[1]}function t$(n,e,t,i=1){const s=t,r=Math.max(e,.1),o=n[0]&&n[0][0]&&typeof n[0][0]=="number"?[n]:n,a=[0,0];if(s)for(const h of o)lo(h,a,s);const l=i$(o,r,i);if(s){for(const h of o)lo(h,a,-s);Qv(l,a,-s)}return l}function i$(n,e,t){const i=[];for(const h of n){const d=[...h];e$(d[0],d[d.length-1])||d.push([d[0][0],d[0][1]]),d.length>2&&i.push(d)}const s=[];e=Math.max(e,.1);const r=[];for(const h of i)for(let d=0;d<h.length-1;d++){const c=h[d],u=h[d+1];if(c[1]!==u[1]){const p=Math.min(c[1],u[1]);r.push({ymin:p,ymax:Math.max(c[1],u[1]),x:p===c[1]?c[0]:u[0],islope:(u[0]-c[0])/(u[1]-c[1])})}}if(r.sort((h,d)=>h.ymin<d.ymin?-1:h.ymin>d.ymin?1:h.x<d.x?-1:h.x>d.x?1:h.ymax===d.ymax?0:(h.ymax-d.ymax)/Math.abs(h.ymax-d.ymax)),!r.length)return s;let o=[],a=r[0].ymin,l=0;for(;o.length||r.length;){if(r.length){let h=-1;for(let c=0;c<r.length&&!(r[c].ymin>a);c++)h=c;r.splice(0,h+1).forEach(c=>{o.push({s:a,edge:c})})}if(o=o.filter(h=>!(h.edge.ymax<=a)),o.sort((h,d)=>h.edge.x===d.edge.x?0:(h.edge.x-d.edge.x)/Math.abs(h.edge.x-d.edge.x)),(t!==1||l%e===0)&&o.length>1)for(let h=0;h<o.length;h=h+2){const d=h+1;if(d>=o.length)break;const c=o[h].edge,u=o[d].edge;s.push([[Math.round(c.x),a],[Math.round(u.x),a]])}a+=t,o.forEach(h=>{h.edge.x=h.edge.x+t*h.edge.islope}),l++}return s}function $c(n,e){var t;const i=e.hachureAngle+90;let s=e.hachureGap;s<0&&(s=e.strokeWidth*4),s=Math.round(Math.max(s,.1));let r=1;return e.roughness>=1&&(((t=e.randomizer)===null||t===void 0?void 0:t.next())||Math.random())>.7&&(r=s),t$(n,s,i,r||1)}class s${constructor(e){this.helper=e}fillPolygons(e,t){return this._fillPolygons(e,t)}_fillPolygons(e,t){const i=$c(e,t);return{type:"fillSketch",ops:this.renderLines(i,t)}}renderLines(e,t){const i=[];for(const s of e)i.push(...this.helper.doubleLineOps(s[0][0],s[0][1],s[1][0],s[1][1],t));return i}}function n$(n){const e=n[0],t=n[1];return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}class r$ extends s${fillPolygons(e,t){let i=t.hachureGap;i<0&&(i=t.strokeWidth*4),i=Math.max(i,.1);const s=Object.assign({},t,{hachureGap:i}),r=$c(e,s),o=Math.PI/180*t.hachureAngle,a=[],l=i*.5*Math.cos(o),h=i*.5*Math.sin(o);for(const[c,u]of r)n$([c,u])&&a.push([[c[0]-l,c[1]+h],[...u]],[[c[0]+l,c[1]-h],[...u]]);return{type:"fillSketch",ops:this.renderLines(a,t)}}}class o${constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function fc(n,e,t,i,s){return{type:"path",ops:Us(n,e,t,i,s)}}function l$(n,e,t){const i=(n||[]).length;if(i>2){const s=[];for(let r=0;r<i-1;r++)s.push(...Us(n[r][0],n[r][1],n[r+1][0],n[r+1][1],t));return e&&s.push(...Us(n[i-1][0],n[i-1][1],n[0][0],n[0][1],t)),{type:"path",ops:s}}else if(i===2)return fc(n[0][0],n[0][1],n[1][0],n[1][1],t);return{type:"path",ops:[]}}function gc(n,e){return l$(n,!0,e)}function a$(n,e,t,i,s){const r=[[n,e],[n+t,e],[n+t,e+i],[n,e+i]];return gc(r,s)}function mc(n,e,t,i,s){const r=_c(t,i,s);return h$(n,e,s,r).opset}function _c(n,e,t){const i=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(n/2,2)+Math.pow(e/2,2))/2)),s=Math.ceil(Math.max(t.curveStepCount,t.curveStepCount/Math.sqrt(200)*i)),r=Math.PI*2/s;let o=Math.abs(n/2),a=Math.abs(e/2);const l=1-t.curveFitting;return o+=y(o*l,t),a+=y(a*l,t),{increment:r,rx:o,ry:a}}function h$(n,e,t,i){const[s,r]=wh(i.increment,n,e,i.rx,i.ry,1,i.increment*ao(.1,ao(.4,1,t),t),t);let o=Ah(s,null,t);if(!t.disableMultiStroke&&t.roughness!==0){const[a]=wh(i.increment,n,e,i.rx,i.ry,1.5,0,t),l=Ah(a,null,t);o=o.concat(l)}return{estimatedPoints:r,opset:{type:"path",ops:o}}}function d$(n,e,t,i,s){return Us(n,e,t,i,s,!0)}function yc(n){return n.randomizer||(n.randomizer=new o$(n.seed||0)),n.randomizer.next()}function ao(n,e,t,i=1){return t.roughness*i*(yc(t)*(e-n)+n)}function y(n,e,t=1){return ao(-n,n,e,t)}function Us(n,e,t,i,s,r=!1){const o=r?s.disableMultiStrokeFill:s.disableMultiStroke,a=ho(n,e,t,i,s,!0,!1);if(o)return a;const l=ho(n,e,t,i,s,!0,!0);return a.concat(l)}function ho(n,e,t,i,s,r,o){const a=Math.pow(n-t,2)+Math.pow(e-i,2),l=Math.sqrt(a);let h=1;l<200?h=1:l>500?h=.4:h=-.0016668*l+1.233334;let d=s.maxRandomnessOffset||0;d*d*100>a&&(d=l/10);const c=d/2,u=.2+yc(s)*.2;let p=s.bowing*s.maxRandomnessOffset*(i-e)/200,f=s.bowing*s.maxRandomnessOffset*(n-t)/200;p=y(p,s,h),f=y(f,s,h);const $=[],G=()=>y(c,s,h),Qe=()=>y(d,s,h),X=s.preserveVertices;return r&&(o?$.push({op:"move",data:[n+(X?0:G()),e+(X?0:G())]}):$.push({op:"move",data:[n+(X?0:y(d,s,h)),e+(X?0:y(d,s,h))]})),o?$.push({op:"bcurveTo",data:[p+n+(t-n)*u+G(),f+e+(i-e)*u+G(),p+n+2*(t-n)*u+G(),f+e+2*(i-e)*u+G(),t+(X?0:G()),i+(X?0:G())]}):$.push({op:"bcurveTo",data:[p+n+(t-n)*u+Qe(),f+e+(i-e)*u+Qe(),p+n+2*(t-n)*u+Qe(),f+e+2*(i-e)*u+Qe(),t+(X?0:Qe()),i+(X?0:Qe())]}),$}function Ah(n,e,t){const i=n.length,s=[];if(i>3){const r=[],o=1-t.curveTightness;s.push({op:"move",data:[n[1][0],n[1][1]]});for(let a=1;a+2<i;a++){const l=n[a];r[0]=[l[0],l[1]],r[1]=[l[0]+(o*n[a+1][0]-o*n[a-1][0])/6,l[1]+(o*n[a+1][1]-o*n[a-1][1])/6],r[2]=[n[a+1][0]+(o*n[a][0]-o*n[a+2][0])/6,n[a+1][1]+(o*n[a][1]-o*n[a+2][1])/6],r[3]=[n[a+1][0],n[a+1][1]],s.push({op:"bcurveTo",data:[r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]})}if(e&&e.length===2){const a=t.maxRandomnessOffset;s.push({op:"lineTo",data:[e[0]+y(a,t),e[1]+y(a,t)]})}}else i===3?(s.push({op:"move",data:[n[1][0],n[1][1]]}),s.push({op:"bcurveTo",data:[n[1][0],n[1][1],n[2][0],n[2][1],n[2][0],n[2][1]]})):i===2&&s.push(...ho(n[0][0],n[0][1],n[1][0],n[1][1],t,!0,!0));return s}function wh(n,e,t,i,s,r,o,a){const l=a.roughness===0,h=[],d=[];if(l){n=n/4,d.push([e+i*Math.cos(-n),t+s*Math.sin(-n)]);for(let c=0;c<=Math.PI*2;c=c+n){const u=[e+i*Math.cos(c),t+s*Math.sin(c)];h.push(u),d.push(u)}d.push([e+i*Math.cos(0),t+s*Math.sin(0)]),d.push([e+i*Math.cos(n),t+s*Math.sin(n)])}else{const c=y(.5,a)-Math.PI/2;d.push([y(r,a)+e+.9*i*Math.cos(c-n),y(r,a)+t+.9*s*Math.sin(c-n)]);const u=Math.PI*2+c-.01;for(let p=c;p<u;p=p+n){const f=[y(r,a)+e+i*Math.cos(p),y(r,a)+t+s*Math.sin(p)];h.push(f),d.push(f)}d.push([y(r,a)+e+i*Math.cos(c+Math.PI*2+o*.5),y(r,a)+t+s*Math.sin(c+Math.PI*2+o*.5)]),d.push([y(r,a)+e+.98*i*Math.cos(c+o),y(r,a)+t+.98*s*Math.sin(c+o)]),d.push([y(r,a)+e+.9*i*Math.cos(c+o*.5),y(r,a)+t+.9*s*Math.sin(c+o*.5)])}return[d,h]}const c$={randOffset(n,e){return n},randOffsetWithRange(n,e,t){return(n+e)/2},ellipse(n,e,t,i,s){return mc(n,e,t,i,s)},doubleLineOps(n,e,t,i,s){return d$(n,e,t,i,s)}};function Kt(n){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:n}}function u$(n,e){let t="";for(const i of n.ops){const s=i.data;switch(i.op){case"move":if(e&&t)break;t+=`M${s[0]} ${s[1]} `;break;case"bcurveTo":t+=`C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;break;case"lineTo":t+=`L${s[0]} ${s[1]} `;break}}return t.trim()}function Dt(n,e){const t=document.createElementNS("http://www.w3.org/2000/svg",n);if(e)for(const i in e)t.setAttributeNS(null,i,e[i]);return t}function Fi(n,e,t=!1){const i=Dt("path",{d:u$(n,t)});return e&&e.appendChild(i),i}function I(n,e,t,i,s,r){return Fi(a$(e+2,t+2,i-4,s-4,Kt(r)),n)}function b(n,e,t,i,s,r){return Fi(fc(e,t,i,s,Kt(r)),n)}function p$(n,e,t){return Fi(gc(e,Kt(t)),n,!0)}function Ze(n,e,t,i,s,r){return i=Math.max(i>10?i-4:i-1,1),s=Math.max(s>10?s-4:s-1,1),Fi(mc(e,t,i,s,Kt(r)),n)}function Xs(n,e){const i=new r$(c$).fillPolygon(n,Kt(e));return Fi(i,null)}function Ko(n,e,t,i,s){const r=Kt(s),o=_c(t,i,r),a=[];let l=0;for(;l<=Math.PI*2;)a.push([n+o.rx*Math.cos(l),e+o.ry*Math.sin(l)]),l+=o.increment;return Xs(a,s)}var Qs=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},en=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let ji=class extends w{constructor(){super(),this.elevation=1,this.disabled=!1,this.roAttached=!1,window.ResizeObserver&&(this.ro=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[A,m`
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
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),i=e.width+(t-1)*2,s=e.height+(t-1)*2;return[i,s]}return this.lastSize}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5),s={width:t[0]-(i-1)*2,height:t[1]-(i-1)*2};I(e,0,0,s.width,s.height,this.seed);for(let r=1;r<i;r++)b(e,r*2,s.height+r*2,s.width+r*2,s.height+r*2,this.seed).style.opacity=`${(75-r*10)/100}`,b(e,s.width+r*2,s.height+r*2,s.width+r*2,r*2,this.seed).style.opacity=`${(75-r*10)/100}`,b(e,r*2,s.height+r*2,s.width+r*2,s.height+r*2,this.seed).style.opacity=`${(75-r*10)/100}`,b(e,s.width+r*2,s.height+r*2,s.width+r*2,r*2,this.seed).style.opacity=`${(75-r*10)/100}`}updated(){super.updated(),this.roAttached||this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.ro&&(this.ro.observe(this.button),this.roAttached=!0)}detachResizeListener(){this.button&&this.ro&&this.ro.unobserve(this.button),this.roAttached=!1}};Qs([v({type:Number}),en("design:type",Object)],ji.prototype,"elevation",void 0);Qs([v({type:Boolean,reflect:!0}),en("design:type",Object)],ji.prototype,"disabled",void 0);Qs([S("button"),en("design:type",HTMLButtonElement)],ji.prototype,"button",void 0);ji=Qs([_("wired-button"),en("design:paramtypes",[])],ji);var Jo=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Yo=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Li=class extends w{constructor(){super(),this.elevation=1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[A,m`
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
    `}updated(e){const t=e.has("fill");this.wiredRender(t),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),i=e.width+(t-1)*2,s=e.height+(t-1)*2;return[i,s]}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5),s={width:t[0]-(i-1)*2,height:t[1]-(i-1)*2};if(this.fill&&this.fill.trim()){const r=Xs([[2,2],[s.width-4,2],[s.width-2,s.height-4],[2,s.height-4]],this.seed);r.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(r)}I(e,2,2,s.width-4,s.height-4,this.seed);for(let r=1;r<i;r++)b(e,r*2,s.height-4+r*2,s.width-4+r*2,s.height-4+r*2,this.seed).style.opacity=`${(85-r*10)/100}`,b(e,s.width-4+r*2,s.height-4+r*2,s.width-4+r*2,r*2,this.seed).style.opacity=`${(85-r*10)/100}`,b(e,r*2,s.height-4+r*2,s.width-4+r*2,s.height-4+r*2,this.seed).style.opacity=`${(85-r*10)/100}`,b(e,s.width-4+r*2,s.height-4+r*2,s.width-4+r*2,r*2,this.seed).style.opacity=`${(85-r*10)/100}`}};Jo([v({type:Number}),Yo("design:type",Object)],Li.prototype,"elevation",void 0);Jo([v({type:String}),Yo("design:type",String)],Li.prototype,"fill",void 0);Li=Jo([_("wired-card"),Yo("design:paramtypes",[])],Li);var Ki=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},tn=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Vt=class extends w{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[A,m`
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
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){I(e,0,0,t[0],t[1],this.seed),this.svgCheck=Dt("g"),e.appendChild(this.svgCheck),b(this.svgCheck,t[0]*.3,t[1]*.4,t[0]*.5,t[1]*.7,this.seed),b(this.svgCheck,t[0]*.5,t[1]*.7,t[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};Ki([v({type:Boolean}),tn("design:type",Object)],Vt.prototype,"checked",void 0);Ki([v({type:Boolean,reflect:!0}),tn("design:type",Object)],Vt.prototype,"disabled",void 0);Ki([Kv(),tn("design:type",Object)],Vt.prototype,"focused",void 0);Ki([S("input"),tn("design:type",HTMLInputElement)],Vt.prototype,"input",void 0);Vt=Ki([_("wired-checkbox")],Vt);var sn=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Go=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Ii=class extends w{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[A,m`
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
    </button>`}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){const i=Xs([[0,0],[t[0],0],[t[0],t[1]],[0,t[1]]],this.seed);e.appendChild(i)}};sn([v(),Go("design:type",Object)],Ii.prototype,"value",void 0);sn([v(),Go("design:type",Object)],Ii.prototype,"name",void 0);sn([v({type:Boolean}),Go("design:type",Object)],Ii.prototype,"selected",void 0);Ii=sn([_("wired-item")],Ii);var Jt=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Ji=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Fe=class extends Y{constructor(){super(...arguments),this.disabled=!1,this.seed=Xv(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return m`
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
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",()=>{this.cardShowing&&this.setCardShowing(!1)}),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0);break}})}updated(e){e.has("disabled")&&this.refreshDisabledState();const t=this.svg;for(;t.hasChildNodes();)t.removeChild(t.lastChild);const i=this.shadowRoot.getElementById("container").getBoundingClientRect();t.setAttribute("width",`${i.width}`),t.setAttribute("height",`${i.height}`);const s=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=s.height+"px",I(t,0,0,s.width,s.height,this.seed);const r=s.width-4;I(t,r,0,34,s.height,this.seed);const o=Math.max(0,Math.abs((s.height-24)/2)),a=p$(t,[[r+8,5+o],[r+26,5+o],[r+17,o+Math.min(s.height,18)]],this.seed);if(a.style.fill="currentColor",a.style.pointerEvents=this.disabled?"none":"auto",a.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];const l=this.shadowRoot.getElementById("slot").assignedNodes();if(l&&l.length)for(let h=0;h<l.length;h++){const d=l[h];d.tagName==="WIRED-ITEM"&&(d.setAttribute("role","option"),this.itemNodes.push(d))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let i=null;for(let s=0;s<t.length;s++){const r=t[s];if(r.tagName==="WIRED-ITEM"){const o=r.value||r.getAttribute("value")||"";if(this.selected&&o===this.selected){i=r;break}}}this.lastSelectedItem=i||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),i?this.value={value:i.value||"",text:i.textContent||""}:this.value=void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(i=>i.nodeType===Node.ELEMENT_NODE).forEach(i=>{const s=i;s.requestUpdate&&s.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout(()=>{this.setCardShowing(!1)})}fireSelected(){Fo(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}};Jt([v({type:Object}),Ji("design:type",Object)],Fe.prototype,"value",void 0);Jt([v({type:String,reflect:!0}),Ji("design:type",String)],Fe.prototype,"selected",void 0);Jt([v({type:Boolean,reflect:!0}),Ji("design:type",Object)],Fe.prototype,"disabled",void 0);Jt([S("svg"),Ji("design:type",SVGSVGElement)],Fe.prototype,"svg",void 0);Jt([S("#card"),Ji("design:type",HTMLDivElement)],Fe.prototype,"card",void 0);Fe=Jt([_("wired-combo")],Fe);var nn=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Xo=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Bi=class extends Y{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return m`
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
    `}updated(){this.card&&this.card.wiredRender(!0)}};nn([v({type:Number}),Xo("design:type",Object)],Bi.prototype,"elevation",void 0);nn([v({type:Boolean,reflect:!0}),Xo("design:type",Object)],Bi.prototype,"open",void 0);nn([S("wired-card"),Xo("design:type",Li)],Bi.prototype,"card",void 0);Bi=nn([_("wired-dialog")],Bi);var bc=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},v$=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let co=class extends w{constructor(){super(...arguments),this.elevation=1,this.roAttached=!1}static get styles(){return[A,m`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return g`<svg></svg>`}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width,t*6]}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5);for(let s=0;s<i;s++)b(e,0,s*6+3,t[0],s*6+3,this.seed)}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}};bc([v({type:Number}),v$("design:type",Object)],co.prototype,"elevation",void 0);co=bc([_("wired-divider")],co);var Qo=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Ac=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Ms=class extends w{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[A,m`
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
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){const i=Math.min(t[0],t[1]);e.setAttribute("width",`${i}`),e.setAttribute("height",`${i}`),Ze(e,i/2,i/2,i,i,this.seed)}};el([v({type:Boolean,reflect:!0}),wc("design:type",Object)],Ns.prototype,"disabled",void 0);el([S("button"),wc("design:type",HTMLButtonElement)],Ns.prototype,"button",void 0);Ns=el([_("wired-icon-button")],Ns);var tl=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},il=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};const $$="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";let Ts=class extends w{constructor(){super(),this.elevation=1,this.src=$$,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[A,m`
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
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),i=e.width+(t-1)*2,s=e.height+(t-1)*2;return[i,s]}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5),s={width:t[0]-(i-1)*2,height:t[1]-(i-1)*2};I(e,2,2,s.width-4,s.height-4,this.seed);for(let r=1;r<i;r++)b(e,r*2,s.height-4+r*2,s.width-4+r*2,s.height-4+r*2,this.seed).style.opacity=`${(85-r*10)/100}`,b(e,s.width-4+r*2,s.height-4+r*2,s.width-4+r*2,r*2,this.seed).style.opacity=`${(85-r*10)/100}`,b(e,r*2,s.height-4+r*2,s.width-4+r*2,s.height-4+r*2,this.seed).style.opacity=`${(85-r*10)/100}`,b(e,s.width-4+r*2,s.height-4+r*2,s.width-4+r*2,r*2,this.seed).style.opacity=`${(85-r*10)/100}`}};tl([v({type:Number}),il("design:type",Object)],Ts.prototype,"elevation",void 0);tl([v({type:String}),il("design:type",String)],Ts.prototype,"src",void 0);Ts=tl([_("wired-image"),il("design:paramtypes",[])],Ts);var z=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},j=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let E=class extends w{constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[A,m`
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
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;if(t){t.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){I(e,2,2,t[0]-2,t[1]-2,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.textInput&&this.resizeObserver&&this.resizeObserver.observe(this.textInput),this.roAttached=!0)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve(this.textInput),this.roAttached=!1}};z([v({type:Boolean,reflect:!0}),j("design:type",Object)],E.prototype,"disabled",void 0);z([v({type:String}),j("design:type",Object)],E.prototype,"placeholder",void 0);z([v({type:String}),j("design:type",String)],E.prototype,"name",void 0);z([v({type:String}),j("design:type",String)],E.prototype,"min",void 0);z([v({type:String}),j("design:type",String)],E.prototype,"max",void 0);z([v({type:String}),j("design:type",String)],E.prototype,"step",void 0);z([v({type:String}),j("design:type",Object)],E.prototype,"type",void 0);z([v({type:String}),j("design:type",Object)],E.prototype,"autocomplete",void 0);z([v({type:String}),j("design:type",Object)],E.prototype,"autocapitalize",void 0);z([v({type:String}),j("design:type",Object)],E.prototype,"autocorrect",void 0);z([v({type:Boolean}),j("design:type",Object)],E.prototype,"required",void 0);z([v({type:Boolean}),j("design:type",Object)],E.prototype,"autofocus",void 0);z([v({type:Boolean}),j("design:type",Object)],E.prototype,"readonly",void 0);z([v({type:Number}),j("design:type",Number)],E.prototype,"minlength",void 0);z([v({type:Number}),j("design:type",Number)],E.prototype,"maxlength",void 0);z([v({type:Number}),j("design:type",Number)],E.prototype,"size",void 0);z([S("input"),j("design:type",HTMLInputElement)],E.prototype,"textInput",void 0);E=z([_("wired-input"),j("design:paramtypes",[])],E);var Yi=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},rn=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Wt=class extends w{constructor(){super(...arguments),this.elevation=1}static get styles(){return[A,m`
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
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){const e=this.anchor.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),i=e.width,s=e.height+(t-1)*2;return[i,s]}return this.lastSize}draw(e,t){const i=Math.min(Math.max(1,this.elevation),5),s={width:t[0],height:t[1]-(i-1)*2};for(let r=0;r<i;r++)b(e,0,s.height+r*2-2,s.width,s.height+r*2-2,this.seed),b(e,0,s.height+r*2-2,s.width,s.height+r*2-2,this.seed)}};Yi([v({type:Number}),rn("design:type",Object)],Wt.prototype,"elevation",void 0);Yi([v({type:String}),rn("design:type",String)],Wt.prototype,"href",void 0);Yi([v({type:String}),rn("design:type",String)],Wt.prototype,"target",void 0);Yi([S("a"),rn("design:type",HTMLAnchorElement)],Wt.prototype,"anchor",void 0);Wt=Yi([_("wired-link")],Wt);var on=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},sl=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Di=class extends w{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[A,m`
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
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let t=0;t<e.length;t++){const i=e[t];i.tagName==="WIRED-ITEM"&&(i.setAttribute("role","option"),this.itemNodes.push(i))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let i=null;for(let s=0;s<t.length;s++){const r=t[s];if(r.tagName==="WIRED-ITEM"){const o=r.value||"";if(this.selected&&o===this.selected){i=r;break}}}this.lastSelectedItem=i||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),i?this.value={value:i.value||"",text:i.textContent||""}:this.value=void 0}}fireSelected(){this.fire("selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){I(e,0,0,t[0],t[1],this.seed)}};on([v({type:Object}),sl("design:type",Object)],Di.prototype,"value",void 0);on([v({type:String}),sl("design:type",String)],Di.prototype,"selected",void 0);on([v({type:Boolean}),sl("design:type",Object)],Di.prototype,"horizontal",void 0);Di=on([_("wired-listbox")],Di);var Gi=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},ln=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Ke=class extends w{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[A,m`
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
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){I(e,2,2,t[0]-2,t[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0;const t=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);const i=t.width*Math.max(0,Math.min(e,100));this.progBox=Xs([[0,0],[i,0],[i,t.height],[0,t.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}};Gi([v({type:Number}),ln("design:type",Object)],Ke.prototype,"value",void 0);Gi([v({type:Number}),ln("design:type",Object)],Ke.prototype,"min",void 0);Gi([v({type:Number}),ln("design:type",Object)],Ke.prototype,"max",void 0);Gi([v({type:Boolean}),ln("design:type",Object)],Ke.prototype,"percentage",void 0);Ke=Gi([_("wired-progress")],Ke);var Yt=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Xi=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Je=class extends w{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[A,m`
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
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){Ze(e,t[0]/2,t[1]/2,t[0],t[1],this.seed),this.svgCheck=Dt("g"),e.appendChild(this.svgCheck);const i=Math.max(t[0]*.6,5),s=Math.max(t[1]*.6,5);Ze(this.svgCheck,t[0]/2,t[1]/2,i,s,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};Yt([v({type:Boolean}),Xi("design:type",Object)],Je.prototype,"checked",void 0);Yt([v({type:Boolean,reflect:!0}),Xi("design:type",Object)],Je.prototype,"disabled",void 0);Yt([v({type:String}),Xi("design:type",String)],Je.prototype,"name",void 0);Yt([v(),Xi("design:type",Object)],Je.prototype,"focused",void 0);Yt([S("input"),Xi("design:type",HTMLInputElement)],Je.prototype,"input",void 0);Je=Yt([_("wired-radio")],Je);var Ec=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},f$=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let uo=class extends Y{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return m`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return g`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){const t=e.detail.checked,i=e.target,s=i.name||"";t?(this.selected=t&&s||"",this.fireSelected()):i.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const t=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],t&&t.length)for(let i=0;i<t.length;i++){const s=t[i];if(s.tagName==="WIRED-RADIO"){this.radioNodes.push(s);const r=s.name||"";this.selected&&r===this.selected?s.checked=!0:s.checked=!1}}}selectPrevious(){const e=this.radioNodes;if(e.length){let t=null,i=-1;if(this.selected){for(let s=0;s<e.length;s++)if(e[s].name===this.selected){i=s;break}i<0?t=e[0]:(i--,i<0&&(i=e.length-1),t=e[i])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}selectNext(){const e=this.radioNodes;if(e.length){let t=null,i=-1;if(this.selected){for(let s=0;s<e.length;s++)if(e[s].name===this.selected){i=s;break}i<0?t=e[0]:(i++,i>=e.length&&(i=0),t=e[i])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}fireSelected(){Fo(this,"selected",{selected:this.selected})}};Ec([v({type:String}),f$("design:type",String)],uo.prototype,"selected",void 0);uo=Ec([_("wired-radio-group")],uo);var Xe=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Gt=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let ce=class extends w{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[A,m`
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
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;t&&(t.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){I(e,2,2,t[0]-2,t[1]-2,this.seed),this.searchIcon=Dt("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),Ze(this.searchIcon,t[0]-30,(t[1]-30)/2+10,20,20,this.seed),b(this.searchIcon,t[0]-10,(t[1]-30)/2+30,t[0]-25,(t[1]-30)/2+15,this.seed),this.closeIcon=Dt("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),b(this.closeIcon,t[0]-33,(t[1]-30)/2+2,t[0]-7,(t[1]-30)/2+28,this.seed),b(this.closeIcon,t[0]-7,(t[1]-30)/2+2,t[0]-33,(t[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};Xe([v({type:Boolean,reflect:!0}),Gt("design:type",Object)],ce.prototype,"disabled",void 0);Xe([v({type:String}),Gt("design:type",Object)],ce.prototype,"placeholder",void 0);Xe([v({type:String}),Gt("design:type",Object)],ce.prototype,"autocomplete",void 0);Xe([v({type:String}),Gt("design:type",Object)],ce.prototype,"autocorrect",void 0);Xe([v({type:Boolean}),Gt("design:type",Object)],ce.prototype,"autofocus",void 0);Xe([S("input"),Gt("design:type",HTMLInputElement)],ce.prototype,"textInput",void 0);ce=Xe([_("wired-search-input")],ce);var Xt=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Qi=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let ue=class extends w{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[A,m`
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
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&this.fire("change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){this.canvasWidth=t[0];const i=Math.round(t[1]/2);b(e,0,i,t[0],i,this.seed).classList.add("bar"),this.knob=Ze(e,10,i,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){const e=+this.input.value,t=Math.max(this.step,this.max-this.min),i=(e-this.min)/t;this.knob&&(this.knob.style.transform=`translateX(${i*(this.canvasWidth-20)}px)`)}}};Xt([v({type:Number}),Qi("design:type",Object)],ue.prototype,"min",void 0);Xt([v({type:Number}),Qi("design:type",Object)],ue.prototype,"max",void 0);Xt([v({type:Number}),Qi("design:type",Object)],ue.prototype,"step",void 0);Xt([v({type:Boolean,reflect:!0}),Qi("design:type",Object)],ue.prototype,"disabled",void 0);Xt([S("input"),Qi("design:type",HTMLInputElement)],ue.prototype,"input",void 0);ue=Xt([_("wired-slider")],ue);var nl=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},Sc=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let zs=class extends w{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[A,m`
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
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){I(e,2,2,t[0]-4,t[1]-4,this.seed)}};rl([v({type:String}),ol("design:type",Object)],js.prototype,"name",void 0);rl([v({type:String}),ol("design:type",Object)],js.prototype,"label",void 0);js=rl([_("wired-tab"),ol("design:paramtypes",[])],js);var ll=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},xc=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Ls=class extends Y{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[A,m`
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
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){const e=this.slotElement.assignedNodes();if(e&&e.length){for(let t=0;t<e.length;t++){const i=e[t];if(i.nodeType===Node.ELEMENT_NODE&&i.tagName.toLowerCase()==="wired-tab"){const s=i;this.pages.push(s);const r=s.getAttribute("name")||"";r&&r.trim().split(" ").forEach(o=>{o&&this.pageMap.set(o,s)})}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const e=this.getElement();for(let t=0;t<this.pages.length;t++){const i=this.pages[t];i===e?i.classList.remove("hidden"):i.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.current.wiredRender()))}getElement(){let e;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){const e=this.pages;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.current){t=i;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].name||""}}selectNext(){const e=this.pages;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.current){t=i;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].name||""}}};ll([v({type:String}),xc("design:type",String)],Ls.prototype,"selected",void 0);ll([S("slot"),xc("design:type",HTMLSlotElement)],Ls.prototype,"slotElement",void 0);Ls=ll([_("wired-tabs")],Ls);var D=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},q=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let B=class extends w{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[A,m`
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
    `}get textarea(){return this.textareaInput}get value(){const e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.textarea;if(t){t.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){I(e,4,4,t[0]-4,t[1]-4,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};D([v({type:Boolean,reflect:!0}),q("design:type",Object)],B.prototype,"disabled",void 0);D([v({type:Number}),q("design:type",Object)],B.prototype,"rows",void 0);D([v({type:Number}),q("design:type",Object)],B.prototype,"maxrows",void 0);D([v({type:String}),q("design:type",Object)],B.prototype,"autocomplete",void 0);D([v({type:Boolean}),q("design:type",Object)],B.prototype,"autofocus",void 0);D([v({type:String}),q("design:type",Object)],B.prototype,"inputmode",void 0);D([v({type:String}),q("design:type",Object)],B.prototype,"placeholder",void 0);D([v({type:Boolean}),q("design:type",Object)],B.prototype,"required",void 0);D([v({type:Boolean}),q("design:type",Object)],B.prototype,"readonly",void 0);D([v({type:Number}),q("design:type",Number)],B.prototype,"minlength",void 0);D([v({type:Number}),q("design:type",Number)],B.prototype,"maxlength",void 0);D([S("textarea"),q("design:type",HTMLTextAreaElement)],B.prototype,"textareaInput",void 0);B=D([_("wired-textarea")],B);var an=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},al=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let Vi=class extends w{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[A,m`
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
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),this.fire("change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,t){I(e,16,8,t[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=Dt("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);const s=Ko(16,16,32,32,this.seed);s.classList.add("knobfill"),this.knob.appendChild(s),Ze(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){const e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}};an([v({type:Boolean}),al("design:type",Object)],Vi.prototype,"checked",void 0);an([v({type:Boolean,reflect:!0}),al("design:type",Object)],Vi.prototype,"disabled",void 0);an([S("input"),al("design:type",HTMLInputElement)],Vi.prototype,"input",void 0);Vi=an([_("wired-toggle")],Vi);var F=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(o=n[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},K=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)};let W=class extends w{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[A,m`
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
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){I(e,2,2,t[0]-4,t[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){const t=Math.floor(e/60),i=Math.round(e-t*60);return`${t}:${i}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=this.video.volume*100)}};F([v({type:String}),K("design:type",Object)],W.prototype,"src",void 0);F([v({type:Boolean}),K("design:type",Object)],W.prototype,"autoplay",void 0);F([v({type:Boolean}),K("design:type",Object)],W.prototype,"loop",void 0);F([v({type:Boolean}),K("design:type",Object)],W.prototype,"muted",void 0);F([v({type:Boolean}),K("design:type",Object)],W.prototype,"playsinline",void 0);F([v(),K("design:type",Object)],W.prototype,"playing",void 0);F([v(),K("design:type",Object)],W.prototype,"timeDisplay",void 0);F([S("wired-progress"),K("design:type",Ke)],W.prototype,"progressBar",void 0);F([S("wired-slider"),K("design:type",ue)],W.prototype,"slider",void 0);F([S("video"),K("design:type",HTMLVideoElement)],W.prototype,"video",void 0);W=F([_("wired-video"),K("design:paramtypes",[])],W);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ps=window,hl=ps.ShadowRoot&&(ps.ShadyCSS===void 0||ps.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dl=Symbol(),Eh=new WeakMap;let Cc=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==dl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(hl&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=Eh.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Eh.set(t,e))}return e}toString(){return this.cssText}};const g$=n=>new Cc(typeof n=="string"?n:n+"",void 0,dl),kc=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new Cc(t,n,dl)},m$=(n,e)=>{hl?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=ps.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},Sh=hl?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return g$(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var $r;const Is=window,xh=Is.trustedTypes,_$=xh?xh.emptyScript:"",Ch=Is.reactiveElementPolyfillSupport,po={toAttribute(n,e){switch(e){case Boolean:n=n?_$:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Rc=(n,e)=>e!==n&&(e==e||n==n),fr={attribute:!0,type:String,converter:po,reflect:!1,hasChanged:Rc},vo="finalized";let dt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))}),e}static createProperty(e,t=fr){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||fr}static finalize(){if(this.hasOwnProperty(vo))return!1;this[vo]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Sh(s))}else e!==void 0&&t.push(Sh(e));return t}static _$Ep(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return m$(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=fr){var s;const r=this.constructor._$Ep(e,i);if(r!==void 0&&i.reflect===!0){const o=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:po).toAttribute(t,i.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var i;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:po;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||Rc)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,i)=>this._$EO(i,this[i],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};dt[vo]=!0,dt.elementProperties=new Map,dt.elementStyles=[],dt.shadowRootOptions={mode:"open"},Ch==null||Ch({ReactiveElement:dt}),(($r=Is.reactiveElementVersions)!==null&&$r!==void 0?$r:Is.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gr;const Bs=window,qt=Bs.trustedTypes,kh=qt?qt.createPolicy("lit-html",{createHTML:n=>n}):void 0,$o="$lit$",he=`lit$${(Math.random()+"").slice(9)}$`,Pc="?"+he,y$=`<${Pc}>`,Ye=document,Wi=()=>Ye.createComment(""),qi=n=>n===null||typeof n!="object"&&typeof n!="function",Oc=Array.isArray,b$=n=>Oc(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",mr=`[ 	
\f\r]`,hi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rh=/-->/g,Ph=/>/g,we=RegExp(`>|${mr}(?:([^\\s"'>=/]+)(${mr}*=${mr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oh=/'/g,Hh=/"/g,Hc=/^(?:script|style|textarea|title)$/i,A$=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),ts=A$(1),Zt=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),Uh=new WeakMap,Ne=Ye.createTreeWalker(Ye,129,null,!1);function Uc(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return kh!==void 0?kh.createHTML(e):e}const w$=(n,e)=>{const t=n.length-1,i=[];let s,r=e===2?"<svg>":"",o=hi;for(let a=0;a<t;a++){const l=n[a];let h,d,c=-1,u=0;for(;u<l.length&&(o.lastIndex=u,d=o.exec(l),d!==null);)u=o.lastIndex,o===hi?d[1]==="!--"?o=Rh:d[1]!==void 0?o=Ph:d[2]!==void 0?(Hc.test(d[2])&&(s=RegExp("</"+d[2],"g")),o=we):d[3]!==void 0&&(o=we):o===we?d[0]===">"?(o=s??hi,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?we:d[3]==='"'?Hh:Oh):o===Hh||o===Oh?o=we:o===Rh||o===Ph?o=hi:(o=we,s=void 0);const p=o===we&&n[a+1].startsWith("/>")?" ":"";r+=o===hi?l+y$:c>=0?(i.push(h),l.slice(0,c)+$o+l.slice(c)+he+p):l+he+(c===-2?(i.push(void 0),a):p)}return[Uc(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),i]};class Zi{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[h,d]=w$(e,t);if(this.el=Zi.createElement(h,i),Ne.currentNode=this.el.content,t===2){const c=this.el.content,u=c.firstChild;u.remove(),c.append(...u.childNodes)}for(;(s=Ne.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const c=[];for(const u of s.getAttributeNames())if(u.endsWith($o)||u.startsWith(he)){const p=d[o++];if(c.push(u),p!==void 0){const f=s.getAttribute(p.toLowerCase()+$o).split(he),$=/([.?@])?(.*)/.exec(p);l.push({type:1,index:r,name:$[2],strings:f,ctor:$[1]==="."?S$:$[1]==="?"?C$:$[1]==="@"?k$:hn})}else l.push({type:6,index:r})}for(const u of c)s.removeAttribute(u)}if(Hc.test(s.tagName)){const c=s.textContent.split(he),u=c.length-1;if(u>0){s.textContent=qt?qt.emptyScript:"";for(let p=0;p<u;p++)s.append(c[p],Wi()),Ne.nextNode(),l.push({type:2,index:++r});s.append(c[u],Wi())}}}else if(s.nodeType===8)if(s.data===Pc)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(he,c+1))!==-1;)l.push({type:7,index:r}),c+=he.length-1}r++}}static createElement(e,t){const i=Ye.createElement("template");return i.innerHTML=e,i}}function Ft(n,e,t=n,i){var s,r,o,a;if(e===Zt)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl;const h=qi(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==h&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Ft(n,l._$AS(n,e.values),l,i)),e}class E${constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Ye).importNode(i,!0);Ne.currentNode=r;let o=Ne.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new es(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new R$(o,this,e)),this._$AV.push(d),h=s[++l]}a!==(h==null?void 0:h.index)&&(o=Ne.nextNode(),a++)}return Ne.currentNode=Ye,r}v(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class es{constructor(e,t,i,s){var r;this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ft(this,e,t),qi(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==Zt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):b$(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==T&&qi(this._$AH)?this._$AA.nextSibling.data=e:this.$(Ye.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Zi.createElement(Uc(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(i);else{const o=new E$(r,this),a=o.u(this.options);o.v(i),this.$(a),this._$AH=o}}_$AC(e){let t=Uh.get(e.strings);return t===void 0&&Uh.set(e.strings,t=new Zi(e)),t}T(e){Oc(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new es(this.k(Wi()),this.k(Wi()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class hn{constructor(e,t,i,s,r){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(r===void 0)e=Ft(this,e,t,0),o=!qi(e)||e!==this._$AH&&e!==Zt,o&&(this._$AH=e);else{const a=e;let l,h;for(e=r[0],l=0;l<r.length-1;l++)h=Ft(this,a[i+l],t,l),h===Zt&&(h=this._$AH[l]),o||(o=!qi(h)||h!==this._$AH[l]),h===T?e=T:e!==T&&(e+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class S$ extends hn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}}const x$=qt?qt.emptyScript:"";class C$ extends hn{constructor(){super(...arguments),this.type=4}j(e){e&&e!==T?this.element.setAttribute(this.name,x$):this.element.removeAttribute(this.name)}}class k$ extends hn{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=(i=Ft(this,e,t,0))!==null&&i!==void 0?i:T)===Zt)return;const s=this._$AH,r=e===T&&s!==T||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==T&&(s===T||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}}class R${constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ft(this,e)}}const Mh=Bs.litHtmlPolyfillSupport;Mh==null||Mh(Zi,es),((gr=Bs.litHtmlVersions)!==null&&gr!==void 0?gr:Bs.litHtmlVersions=[]).push("2.8.0");const P$=(n,e,t)=>{var i,s;const r=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new es(e.insertBefore(Wi(),a),a,void 0,t??{})}return o._$AI(n),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var _r,yr;class gi extends dt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=P$(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Zt}}gi.finalized=!0,gi._$litElement$=!0,(_r=globalThis.litElementHydrateSupport)===null||_r===void 0||_r.call(globalThis,{LitElement:gi});const Nh=globalThis.litElementPolyfillSupport;Nh==null||Nh({LitElement:gi});((yr=globalThis.litElementVersions)!==null&&yr!==void 0?yr:globalThis.litElementVersions=[]).push("3.3.3");const O$=n=>class extends n{emmitChange(){this.dispatchEvent(new CustomEvent("element-changed",{bubbles:!0,composed:!0,detail:{name:this.name,value:this.value}}))}},H$=kc`
  .message span {
    display: block;
    padding-top: var(--dile-input-message-padding-top, 4px);
    font-size: var(--dile-input-message-font-size, 0.875rem);
    color: var(--dile-input-message-color, #888);

  }
  .errored-msg span {
    color: var(--dile-input-message-error-color, #c00);
  }
`;class U$ extends O$(gi){static get properties(){return{label:{type:String},type:{type:String},placeholder:{type:String},disabled:{type:Boolean},value:{type:String},name:{type:String},errored:{type:Boolean},disableAutocomplete:{type:Boolean},readonly:{type:Boolean},selectOnFocus:{type:Boolean},message:{type:String},labelRight:{type:String},hideErrorOnInput:{type:Boolean}}}updated(e){e.has("value")&&this.emmitChange()}constructor(){super(),this.placeholder="",this.label="",this.labelRight="",this.value="",this.disabled=!1,this.disableAutocomplete=!1,this.name="",this.type="text",this.types=["text","password","email","number","tel","url","search","date","time","datetime","datetime-local","month","week"]}static get styles(){return[H$,kc`
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
        `}_lookForEnter(e){(e.keyCode?e.keyCode:e.which)=="13"&&this.dispatchEvent(new CustomEvent("enter-pressed"))}_input(e){this.value=e.target.value,this.hideErrorOnInput&&this.errored&&(this.errored=!1,this.message="")}availableType(e){return this.types.includes(e)?e:"text"}get el(){return this.shadowRoot.querySelector("input")}doBlur(){}doFocus(){this.selectOnFocus&&this.el.select()}computeValue(e){return e}focus(){this.el.focus()}}window.customElements.define("dile-input",U$);class fo extends Z{constructor(){super(),this.counter=0,this.quantity=1,this.active=!0}render(){return L`
            <wired-card elevation="3">
                <p><eit-switch ?checked=${this.active} @click=${this.changeActive}></eit-switch>
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
        `}doChangeQuantity(e){this.quantity=e.detail.value}increment(){this.active&&(this.counter+=parseInt(this.quantity))}decrement(){this.active&&(this.counter-=parseInt(this.quantity))}changeActive(){this.active=!this.active}}V(fo,"styles",[Ge`
            :host {
                display: flex;
                align-items: center;
            }
            h2 {
                color: red;
            }
            .contador {
                color: blue;
                background-color: white;
                border-radius: 25px;
                font-size: 2.5em;
                margin-inline-start: 1em;
                margin-inline-end: 1em;
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

            wired-slider {
                margin-left: 10%;
                margin-right: 10%;
            }
            
            @media(max-width: 500px) {
                .contador {
                    font-size: 3em;
                    margin-inline-start: 1em;
                    margin-inline-end: 1em
                }
            }
        `]),V(fo,"properties",{counter:{type:Number,reflect:!0},quantity:{type:Number},active:{type:Boolean}});customElements.define("eit-counter",fo);class go extends Z{constructor(){super(),this.checked=!1}render(){return L`
         <section @click=${this.toggle}>
                <span></span><slot></slot>
            </section>
        `}toggle(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("eit-switch-changed",{bubbles:!0,composed:!0,detail:{checked:this.checked}}))}}V(go,"styles",[Ge`
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
        `]),V(go,"properties",{checked:{type:Boolean,reflect:!0}});customElements.define("eit-switch",go);class Mc extends Z{static get properties(){return{opened:{type:Boolean}}}constructor(){super(),this.opened=!1,this.clickHandler=this.close.bind(this)}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this.clickHandler)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.clickHandler)}render(){return L`
        <span @click=${this.toggle}>
            <slot name="trigger"></slot>
        </span>
        <div class="overlay ${this.opened?"opened":""}">
            <slot name="overlay"></slot>
        </div>
        `}toggle(e){this.opened=!this.opened,e.stopPropagation()}close(){this.opened=!1}}V(Mc,"styles",[Ge`
            :host {
                display: block;
                position: relative;
            }

            .overlay {
                display: none;
                position: absolute;
                z-index:99;
                background-color: var(--eit-overlay-bg-color,beige);
                padding: 1rem;
                border: 1px solid #ddd;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                width: 75%;

            }

            .opened {
                display: block;
            }

            ::slotted(div) {
                background-color: white;
            }

            ::slotted(span) {
                font-weight: bolder;
                background-color: #ccc;
            }
        `]);customElements.define("eit-overlay",Mc);class Nc extends Z{static get properties(){return{clickX:{type:Number,hasChanged:(e,t)=>e%5===0},clickY:{type:Number}}}constructor(){super(),this.clickX=0,this.clickY=0,this.clickHandler=this.updateClickPosition.bind(this),console.log(`(constructor):Click en coordenadas (x,y) = (${this.clickX},${this.clickY})`)}connectedCallback(){super.connectedCallback(),console.log("connectedCallback ejecutado..."),console.log(`(connected):Click en coordenadas (x,y) = (${this.clickX},${this.clickY})`),document.addEventListener("click",this.clickHandler)}disconnectedCallback(){super.disconnectedCallback(),console.log("disconnectedCallback ejecutado..."),document.removeEventListener("click",this.clickHandler)}firstUpdated(){console.log(`(firstUpdated):Click en coordenadas (x,y) = (${this.clickX},${this.clickY})`),console.log(this.shadowRoot.getElementById("test"))}updated(e){e.has("clickX")&&console.log(`Ha cambiado x: ${e.get("clickX")} -> ${this.clickX} (multiplo de 5)`)}render(){return L`
            <p id='test'> Click en coordenadas (x,y) = (${this.clickX},${this.clickY}) </p>
        `}updateClickPosition(e){this.clickX=e.clientX,this.clickY=e.clientY}}V(Nc,"styles",[Ge`
            :host {
                display: block;
                background-color: #ccc;
            }
        `]);customElements.define("eit-show-click",Nc);document.getElementById("selector").addEventListener("dile-selected-changed",function(){document.querySelector("dile-menu-hamburger").close(),document.querySelector("dile-tabs").selected=document.getElementById("selector").selected});
