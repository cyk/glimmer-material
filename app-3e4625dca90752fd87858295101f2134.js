(function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()})(0,function(){"use strict"
function t(t){return t[Ne]}function e(t,e){t[Ne]=e}function n(t){if(null===t||void 0===t)throw new Error("Expected value to be present")
return t}function i(t,e){if(null===t||void 0===t)throw new Error(e)
return t}function r(){return new Error("unreachable")}function o(t){return t-4}function s(t,e){if(!t)throw new Error(e||"assertion failure")}function a(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]
if(null!==n&&"object"===(void 0===n?"undefined":_e(n)))for(var i=Re(n),r=0;r<i.length;r++){var o=i[r]
t[o]=n[o]}}return t}function u(t){for(var e=new Array(t),n=0;n<t;n++)e[n]=null
return e}function p(t){return t._guid=++Me}function c(t){return t._guid||p(t)}function h(){}function l(){return new h}function f(t){var e=Ke.length
Ke.push(function(t){return t.value()}),$e.push(function(t,e){return t.validate(e)}),t.id=e}function d(t){for(var e=[],n=0,i=t.length;n<i;n++){var r=t[n].tag
if(r===tn)return tn
r!==Qe&&e.push(r)}return v(e)}function m(t){for(var e=[],n=t.head();null!==n;){var i=n.tag
if(i===tn)return tn
i!==Qe&&e.push(i),n=t.nextNode(n)}return v(e)}function y(t){for(var e=[],n=0,i=t.length;n<i;n++){var r=t[n]
if(r===tn)return tn
r!==Qe&&e.push(r)}return v(e)}function v(t){switch(t.length){case 0:return Qe
case 1:return t[0]
case 2:return on.create(t[0],t[1])
default:return sn.create(t)}}function g(t,e){return new cn(t,e)}function b(t){return t!==ln}function _(t){return t.tag===Qe}function k(t){return"function"!=typeof t.toString?"":String(t)}function S(t){for(var e=[],n=0;n<t.length;n++){var i=t[n].value()
!1!==i&&null!==i&&void 0!==i&&e.push(i)}return 0===e.length?null:e.join(" ")}function w(t){return JSON.stringify("<"+t.tagName.toLowerCase()+" />")}function E(t,e){return new Zn(t,e)}function C(t,e){for(var n=t.parentElement(),i=t.firstNode(),r=t.lastNode(),o=i;o;){var s=o.nextSibling
if(n.insertBefore(o,e),o===r)return s
o=s}return null}function A(t){for(var e=t.parentElement(),n=t.firstNode(),i=t.lastNode(),r=n;r;){var o=r.nextSibling
if(e.removeChild(r),r===i)return o
r=o}return null}function N(t){return"object"===(void 0===t?"undefined":_e(t))&&null!==t&&t[ai]}function x(t){return"object"===(void 0===t?"undefined":_e(t))&&null!==t&&"function"==typeof t.toHTML}function O(t){return"object"===(void 0===t?"undefined":_e(t))&&null!==t&&"number"==typeof t.nodeType}function T(t){return"string"==typeof t}function D(t,e,n){if(T(n))return ci.insert(t,e,n)
if(x(n))return li.insert(t,e,n)
if(O(n))return fi.insert(t,e,n)
throw r()}function R(t,e,n){if(T(n))return hi.insert(t,e,n)
if(O(n))return fi.insert(t,e,n)
throw r()}function M(t){return null===t||void 0===t||"function"!=typeof t.toString}function L(t){return M(t)?"":String(t)}function B(t){return M(t)?"":T(t)?t:x(t)?t.toHTML():O(t)?t:String(t)}function F(t){return M(t)?"":T(t)?t:x(t)||O(t)?t:String(t)}function I(t,e){console.info("Use `context`, and `get(<path>)` to debug this template."),e("this")}function P(t){return function(e){return Array.isArray(e)&&e[0]===t}}function j(t,e){var n=new Ti(e)
return t.compile(n),n.compile()}function U(t,e){return new ji(t,e)}function V(t){return"object"===(void 0===t?"undefined":_e(t))&&null!==t&&"function"==typeof t.compile}function H(t,e,n){var i=t[1],r=t[2],o=t[3]
z(r,n),o?n.dynamicAttrNS(i,o,e):n.dynamicAttr(i,e)}function z(t,e){Array.isArray(t)?Yi.compile(t,e):e.primitive(t)}function G(t,e){if(!t)return 0
for(var n=0;n<t.length;n++)z(t[n],e)
return t.length}function W(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new $i,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Qi
return t.add("if",function(t,e,i,r,o){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #if requires a single argument")
o.startLabels(),o.pushFrame(),o.returnTo("END"),z(t[0],o),o.test("environment"),o.enter(1),o.jumpUnless("ELSE"),o.invokeStatic(n(i)),r?(o.jump("EXIT"),o.label("ELSE"),o.invokeStatic(r),o.label("EXIT"),o.exit(),o.return()):(o.label("ELSE"),o.exit(),o.return()),o.label("END"),o.popFrame(),o.stopLabels()}),t.add("unless",function(t,e,i,r,o){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #unless requires a single argument")
o.startLabels(),o.pushFrame(),o.returnTo("END"),z(t[0],o),o.test("environment"),o.enter(1),o.jumpIf("ELSE"),o.invokeStatic(n(i)),r?(o.jump("EXIT"),o.label("ELSE"),o.invokeStatic(r),o.label("EXIT"),o.exit(),o.return()):(o.label("ELSE"),o.exit(),o.return()),o.label("END"),o.popFrame(),o.stopLabels()}),t.add("with",function(t,e,i,r,o){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #with requires a single argument")
o.startLabels(),o.pushFrame(),o.returnTo("END"),z(t[0],o),o.dup(),o.test("environment"),o.enter(2),o.jumpUnless("ELSE"),o.invokeStatic(n(i),1),r?(o.jump("EXIT"),o.label("ELSE"),o.invokeStatic(r),o.label("EXIT"),o.exit(),o.return()):(o.label("ELSE"),o.exit(),o.return()),o.label("END"),o.popFrame(),o.stopLabels()}),t.add("each",function(t,e,i,r,o){o.startLabels(),o.pushFrame(),o.returnTo("END"),e&&"key"===e[0][0]?z(e[1][0],o):o.primitive(null),z(t[0],o),o.enter(2),o.putIterator(),o.jumpUnless("ELSE"),o.pushFrame(),o.returnTo("ITER"),o.dup(He.fp,1),o.enterList("BODY"),o.label("ITER"),o.iterate("BREAK"),o.label("BODY"),o.invokeStatic(n(i),2),o.pop(2),o.exit(),o.return(),o.label("BREAK"),o.exitList(),o.popFrame(),r?(o.jump("EXIT"),o.label("ELSE"),o.invokeStatic(r),o.label("EXIT"),o.exit(),o.return()):(o.label("ELSE"),o.exit(),o.return()),o.label("END"),o.popFrame(),o.stopLabels()}),t.add("-in-element",function(t,e,i,r,o){if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #-in-element requires a single argument")
if(o.startLabels(),o.pushFrame(),o.returnTo("END"),e&&e[0].length){var s=e[0],a=e[1]
if(1!==s.length||"nextSibling"!==s[0])throw new Error("SYNTAX ERROR: #-in-element does not take a `"+s[0]+"` option")
z(a[0],o)}else z(null,o)
z(t[0],o),o.dup(),o.test("simple"),o.enter(3),o.jumpUnless("ELSE"),o.pushRemoteElement(),o.invokeStatic(n(i)),o.popRemoteElement(),o.label("ELSE"),o.exit(),o.return(),o.label("END"),o.popFrame(),o.stopLabels()}),t.add("-with-dynamic-vars",function(t,e,i,r,o){if(e){var s=e[0]
G(e[1],o),o.pushDynamicScope(),o.bindDynamicScope(s),o.invokeStatic(n(i)),o.popDynamicScope()}else o.invokeStatic(n(i))}),{blocks:t,inlines:e}}function J(t,e){zi.compile(t,e)}function q(t,e,n){for(var i=new ji(n,e),r=0;r<t.length;r++)J(t[r],i)
return i}function Y(t,e){for(var n=t[2],i=t[4],r=0;r<n.length;r++)e.push(n[r])
if(e.push([er.FlushElement]),i)for(var o=i.statements,s=0;s<o.length;s++)e.push(o[s])
e.push([er.CloseElement])}function X(t,e,n,i){var r=e.push(Vi)
i.push([er.ClientSideStatement,Ni.OpenComponentElement,t]),i.push([er.ClientSideStatement,Ni.DidCreateElement]),i.push([er.Yield,r,ze]),i.push.apply(i,n)}function K(t,e){return-1!==t.indexOf(e)}function $(t,e){return(null===t||K(or,t))&&K(ar,e)}function Z(t,e){return null!==t&&(K(sr,t)&&K(ur,e))}function Q(t,e){return $(t,e)||Z(t,e)}function tt(t,e,n,i){var r=null
if(null===i||void 0===i)return i
if(x(i))return i.toHTML()
r=e?e.tagName.toUpperCase():null
var o=L(i)
if($(r,n)){var s=t.protocolForURL(o)
if(K(rr,s))return"unsafe:"+o}return Z(r,n)?"unsafe:"+o:o}function et(t,e){var n=void 0,i=void 0
if(e in t)i=e,n="prop"
else{var r=e.toLowerCase()
r in t?(n="prop",i=r):(n="attr",i=e)}return"prop"!==n||"style"!==i.toLowerCase()&&!nt(t.tagName,i)||(n="attr"),{normalized:i,type:n}}function nt(t,e){var n=pr[t.toUpperCase()]
return n&&n[e.toLowerCase()]||!1}function it(t,e){if(!t)return e
if(!ot(t))return e
var n=t.createElement("div")
return function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e.prototype.insertHTMLBefore=function(e,i,r){if(null===r||""===r)return t.prototype.insertHTMLBefore.call(this,e,i,r)
var o=e.tagName.toLowerCase(),s=cr[o]
return void 0===s?t.prototype.insertHTMLBefore.call(this,e,i,r):rt(e,s,n,r,i)},e}(e)}function rt(t,e,n,i,r){var o=e.before+i+e.after
n.innerHTML=o
for(var s=n,a=0;a<e.depth;a++)s=s.childNodes[0]
var u=ht(s,t,r),p=u[0],c=u[1]
return new $n(t,p,c)}function ot(t){var e=t.createElement("table")
try{e.innerHTML="<tbody></tbody>"}catch(t){}finally{if(0!==e.childNodes.length)return!1}return!0}function st(t,e,n){if(!t)return e
if(!ut(t,n))return e
var i=t.createElement("div")
return function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e.prototype.insertHTMLBefore=function(e,r,o){return null===o||""===o?t.prototype.insertHTMLBefore.call(this,e,r,o):e.namespaceURI!==n?t.prototype.insertHTMLBefore.call(this,e,r,o):at(e,i,o,r)},e}(e)}function at(t,e,n,i){var r="<svg>"+n+"</svg>"
e.innerHTML=r
var o=ht(e.firstChild,t,i),s=o[0],a=o[1]
return new $n(t,s,a)}function ut(t,e){var i=t.createElementNS(e,"svg")
try{i.insertAdjacentHTML("beforeend","<circle></circle>")}catch(t){}finally{return 1!==i.childNodes.length||n(i.firstChild).namespaceURI!==hr}}function pt(t,e){return t&&ct(t)?function(t){function e(n){ke(this,e)
var i=Ee(this,t.call(this,n))
return i.uselessComment=i.createComment(""),i}return we(e,t),e.prototype.insertHTMLBefore=function(e,n,i){if(null===i)return t.prototype.insertHTMLBefore.call(this,e,n,i)
var r=!1,o=n?n.previousSibling:e.lastChild
o&&o instanceof Text&&(r=!0,e.insertBefore(this.uselessComment,n))
var s=t.prototype.insertHTMLBefore.call(this,e,n,i)
return r&&e.removeChild(this.uselessComment),s},e}(e):e}function ct(t){var e=t.createElement("div")
return e.innerHTML="first",e.insertAdjacentHTML("beforeend","second"),2!==e.childNodes.length}function ht(t,e,n){for(var i=t.firstChild,r=null,o=i;o;)r=o,o=o.nextSibling,e.insertBefore(r,n)
return[i,r]}function lt(t,e,n,i){var r=e,o=t,s=n,a=s?s.previousSibling:r.lastChild,u=void 0
if(null===i||""===i)return new $n(r,null,null)
null===s?(r.insertAdjacentHTML("beforeend",i),u=r.lastChild):s instanceof HTMLElement?(s.insertAdjacentHTML("beforebegin",i),u=s.previousSibling):(r.insertBefore(o,s),o.insertAdjacentHTML("beforebegin",i),u=o.previousSibling,r.removeChild(o))
var p=a?a.nextSibling:r.firstChild
return new $n(r,p,u)}function ft(t){return t.nodeType===Node.DOCUMENT_FRAGMENT_NODE}function dt(t,e,n,i){var r=t.tagName
if(t.namespaceURI===lr)return yt(r,e)
var o=et(t,e),s=o.type,a=o.normalized
return"attr"===s?yt(r,a):mt(r,a)}function mt(t,e){return Q(t,e)?new Cr(e):bt(t,e)?Nr:_t(t,e)?Or:new Er(e)}function yt(t,e){return Q(t,e)?new Tr(e):new wr(e)}function vt(t){return!1===t||void 0===t||null===t?null:!0===t?"":"function"==typeof t?null:String(t)}function gt(t){return null===t||void 0===t}function bt(t,e){return("INPUT"===t||"TEXTAREA"===t)&&"value"===e}function _t(t,e){return"OPTION"===t&&"selected"===e}function kt(t){var e=t.id,n=t.meta,i=t.block,r=void 0,o=e||"client-"+Yr++
return{id:o,meta:n,create:function(t,e){var s=e?a({},e,n):n
return r||(r=JSON.parse(i)),new Xr(o,s,t,r)}}}function St(){}function wt(t){return-1===t.indexOf(":")}function Et(t,e,n,i,r){var o=[t.slice(0,1),null,null,null],s=[t.slice(1),Nt(e),n,i]
return r.component.dynamic(o,At,s),!0}function Ct(t,e,n,i){var r=[e.slice(0,1),null,null,null],o=[e.slice(1),Nt(n),null,null]
return i.component.dynamic(r,At,o),!0}function At(t,e,n){var i=e.positional.at(0),r=t.env
return new fo(i,r,n)}function Nt(t){return null===t?null:[t[0].map(function(t){return"@"+t}),t[1]]}function xt(t,e){var n=t.getSelf(),i=e.capture(),r=i.positional.at(0).value()
return"function"!=typeof r&&Ot(r,i.positional.at(0)),new fn(function(){var t=i.positional.value()
t.shift(),t.push.apply(t,arguments),r.apply(n&&n.value(),t)})}function Ot(t,e){var n=Tt(e)
throw new Error("You tried to create an action with the {{action}} helper, but the first argument "+n+"was "+(void 0===t?"undefined":_e(t))+" instead of a function.")}function Tt(t){var e="",n=void 0,i=void 0
return null===t||void 0===t?e:("parent"in t&&"property"in t?(n=t.parent.value(),i=t.property):"_parentValue"in t&&"_propertyKey"in t&&(n=t._parentValue,i=t._propertyKey),void 0!==i&&(e+="('"+i+"' on "+Dt(n)+") "),e)}function Dt(t){var e=void 0===t?"undefined":_e(t)
if(null===t||void 0===t)return e
if("number"===e||"boolean"===e)return t.toString()
if(t.debugName)return t.debugName
try{return JSON.stringify(t)}catch(t){}return t.toString()}function Rt(t){return function(e,n){return new yo(t,n)}}function Mt(t,e){t.add("component",Et),e.add("component",Ct)}function Lt(t){return void 0!==t.createComponentDefinition}function Bt(){}function Ft(t){var e=t.split(":"),n=e[0],i=e[1]
return!!(n&&i&&0===i.indexOf("/")&&i.split("/").length>3)}function It(t){return void 0!==t.rootName&&void 0!==t.collection&&void 0!==t.name&&void 0!==t.type}function Pt(t){var e=t.type,n=jt(t)
return n?e+":"+n:e}function jt(t){var e=[]
if(t.rootName&&e.push(t.rootName),t.collection&&e.push(t.collection),t.namespace&&e.push(t.namespace),t.name&&e.push(t.name),e.length>0){var n=e.join("/")
return It(t)&&(n="/"+n),n}}function Ut(t){var e={}
if(t.indexOf(":")>-1){var n=t.split(":"),i=n[0],r=n[1]
e.type=i
var o=void 0
0===r.indexOf("/")?(o=r.substr(1).split("/"),e.rootName=o.shift(),e.collection=o.shift()):o=r.split("/"),o.length>0&&(e.name=o.pop(),o.length>0&&(e.namespace=o.join("/")))}else e.type=t
return e}function Vt(t,e){if(!e)throw new Error("Assertion Failed: "+t)}function Ht(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n]
var i=e[0],r=e[1],o=e[2]
return"string"==typeof i?function(t,n,i){return zt(t,n,i,e)}:o?zt(i,r,o,[]):void Gt(i,r)}function zt(t,e,n,i){var r=Jt(t)
return r.trackedProperties[e]=!0,r.trackedPropertyDependencies[e]=i||[],{enumerable:!0,configurable:!1,get:n.get,set:function(){Jt(this).dirtyableTagFor(e).inner.dirty(),n.set.apply(this,arguments),No()}}}function Gt(t,e){var n=Symbol(e)
Jt(t).trackedProperties[e]=!0,void 0!==t[e]&&t[e],Object.defineProperty(t,e,{configurable:!0,get:function(){return this[n]},set:function(t){Jt(this).dirtyableTagFor(e).inner.dirty(),this[n]=t,No()}})}function Wt(t,e,n){var i=[t.dirtyableTagFor(e)]
if(n&&n.length)for(var r=0;r<n.length;r++)i.push(t.tagFor(n[r]))
return y(i)}function Jt(t){var e=t[Co]
return e&&qt(t,Co)?e:t[Co]=new Eo(e)}function qt(t,e){return Ao.call(t,e)}function Yt(t,e){arguments.length>2&&void 0!==arguments[2]&&arguments[2]
if("object"===(void 0===t?"undefined":_e(t))&&t){return Jt(t).tagFor(e)}return Qe}function Xt(t,e){throw new xo(t,e,"The '"+e+"' property on the "+t+" was changed after it had been rendered. Properties that change after being rendered must be tracked. Use the @tracked decorator to mark this as a tracked property.")}function Kt(){var t=Uo(null)
return t.__=void 0,delete t.__,t}function $t(t,e,n){function i(i,r){var o=t+i
if(!r)return new Vo(o,e,n)
r($t(o,e,n))}return i}function Zt(t,e,n){for(var i=0,r=0;r<t.length;r++)i+=t[r].path.length
e=e.substr(i)
var o={path:e,handler:n}
t.push(o)}function Qt(t,e,n,i){for(var r=e.routes,o=Object.keys(r),s=0;s<o.length;s++){var a=o[s],u=t.slice()
Zt(u,a,r[a])
var p=e.children[a]
p?Qt(u,p,n,i):n.call(i,u)}}function te(t){return t.split("/").map(ee).join("/")}function ee(t){return t.length<3||-1===t.indexOf("%")?t:decodeURIComponent(t).replace(Go,encodeURIComponent)}function ne(t){return encodeURIComponent(t).replace(Wo,decodeURIComponent)}function ie(t,e){if("object"!==(void 0===t?"undefined":_e(t))||null===t)throw new Error("You must pass an object as the second argument to `generate`.")
if(!Yo.call(t,e))throw new Error("You must provide param `"+e+"` to `generate`.")
var n=t[e],i="string"==typeof n?n:""+n
if(0===i.length)throw new Error("You must provide a param `"+e+"`.")
return i}function re(t,e,n){e.length>0&&47===e.charCodeAt(0)&&(e=e.substr(1))
for(var i=e.split("/"),r=void 0,o=void 0,s=0;s<i.length;s++){var a=i[s],u=0,p=0
p=""===a?4:58===a.charCodeAt(0)?1:42===a.charCodeAt(0)?2:0,u=2<<p,12&u&&(a=a.slice(1),r=r||[],r.push(a),o=o||[],o.push(0!=(4&u))),14&u&&n[p]++,t.push({type:p,value:ee(a)})}return{names:r||Qo,shouldDecodes:o||Qo}}function oe(t,e,n){return t.char===e&&t.negate===n}function se(t,e){return t.negate?t.char!==e&&-1!==t.char:t.char===e||-1===t.char}function ae(t){return t.sort(function(t,e){var n=t.types||[0,0,0],i=n[0],r=n[1],o=n[2],s=e.types||[0,0,0],a=s[0],u=s[1],p=s[2]
if(o!==p)return o-p
if(o){if(i!==a)return a-i
if(r!==u)return u-r}return r!==u?r-u:i!==a?a-i:0})}function ue(t,e){for(var n=[],i=0,r=t.length;i<r;i++){var o=t[i]
n=n.concat(o.match(e))}return n}function pe(t,e,n){var i=t.handlers,r=t.regex()
if(!r||!i)throw new Error("state not initialized")
var o=e.match(r),s=1,a=new es(n)
a.length=i.length
for(var u=0;u<i.length;u++){var p=i[u],c=p.names,h=p.shouldDecodes,l=Zo,f=!1
if(c!==Qo&&h!==Qo)for(var d=0;d<c.length;d++){f=!0
var m=c[d],y=o&&o[s++]
l===Zo&&(l={}),ns.ENCODE_AND_DECODE_PATH_SEGMENTS&&h[d]?l[m]=y&&decodeURIComponent(y):l[m]=y}a[u]={handler:p.handler,params:l,isDynamic:f}}return a}function ce(t){t=t.replace(/\+/gm,"%20")
var e
try{e=decodeURIComponent(t)}catch(t){e=""}return e}function he(t){var e=t.href,n=e.indexOf("#")
return-1===n?"/":e.substr(n+1)}function le(){var t=he(window.location)
if(t!==os){os=t
var e=is.recognize(t)
rs(e[0].handler,e[0].params)}}function fe(t){rs=t,le(),window.addEventListener("hashchange",le)}function de(t){if(t.CSS&&"function"==typeof t.CSS.supports){var e=t.CSS.supports("--css-vars","yes"),n=t.CSS.supports("(--css-vars: yes)")&&t.CSS.supports("color","#00000000")
return e||n}}function me(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(void 0===ds||e){var n=!1
try{t.document.addEventListener("test",null,{get passive(){n=!0}})}catch(t){}ds=n}return!!ds&&{passive:!0}}function ye(t){return["webkitMatchesSelector","msMatchesSelector","matches"].filter(function(e){return e in t}).pop()}function ve(t,e,n){var i=e.x,r=e.y,o=i+n.left,s=r+n.top,a=void 0,u=void 0
return"touchstart"===t.type?(a=t.changedTouches[0].pageX-o,u=t.changedTouches[0].pageY-s):(a=t.pageX-o,u=t.pageY-s),{x:a,y:u}}function ge(t,e){return e}var be,_e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ke=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Se=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n]
i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),we=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},Ee=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return!e||"object"!=typeof e&&"function"!=typeof e?t:e},Ce=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
ke(this,t),this._registry=e,this._resolver=n,this._lookups={},this._factoryDefinitionLookups={}}return t.prototype.factoryFor=function(t){var e=this._factoryDefinitionLookups[t]
if(e||(this._resolver&&(e=this._resolver.retrieve(t)),e||(e=this._registry.registration(t)),e&&(this._factoryDefinitionLookups[t]=e)),e)return this.buildFactory(t,e)},t.prototype.lookup=function(t){var e=!1!==this._registry.registeredOption(t,"singleton")
if(e&&this._lookups[t])return this._lookups[t]
var n=this.factoryFor(t)
if(n){if(!1===this._registry.registeredOption(t,"instantiate"))return n.class
var i=n.create()
return e&&i&&(this._lookups[t]=i),i}},t.prototype.defaultInjections=function(t){return{}},t.prototype.buildInjections=function(t){for(var e=this.defaultInjections(t),n=this._registry.registeredInjections(t),i=void 0,r=0;r<n.length;r++)i=n[r],e[i.property]=this.lookup(i.source)
return e},t.prototype.buildFactory=function(t,e){var n=this.buildInjections(t)
return{class:e,create:function(t){var i=Object.assign({},n,t)
return e.create(i)}}},t}(),Ae=function(){function t(e){ke(this,t),this._registrations={},this._registeredOptions={},this._registeredInjections={},e&&e.fallback&&(this._fallback=e.fallback)}return t.prototype.register=function(t,e,n){this._registrations[t]=e,n&&(this._registeredOptions[t]=n)},t.prototype.registration=function(t){var e=this._registrations[t]
return void 0===e&&this._fallback&&(e=this._fallback.registration(t)),e},t.prototype.unregister=function(t){delete this._registrations[t],delete this._registeredOptions[t],delete this._registeredInjections[t]},t.prototype.registerOption=function(t,e,n){var i=this._registeredOptions[t]
i||(i={},this._registeredOptions[t]=i),i[e]=n},t.prototype.registeredOption=function(t,e){var n=void 0,i=this.registeredOptions(t)
return i&&(n=i[e]),void 0===n&&void 0!==this._fallback&&(n=this._fallback.registeredOption(t,e)),n},t.prototype.registeredOptions=function(t){var e=this._registeredOptions[t]
if(void 0===e){var n=t.split(":"),i=n[0]
e=this._registeredOptions[i]}return e},t.prototype.unregisterOption=function(t,e){var n=this._registeredOptions[t]
n&&delete n[e]},t.prototype.registerInjection=function(t,e,n){var i=this._registeredInjections[t]
void 0===i&&(this._registeredInjections[t]=i=[]),i.push({property:e,source:n})},t.prototype.registeredInjections=function(t){var e=t.split(":"),n=e[0],i=this._fallback?this._fallback.registeredInjections(t):[]
return Array.prototype.push.apply(i,this._registeredInjections[n]),Array.prototype.push.apply(i,this._registeredInjections[t]),i},t}(),Ne="__owner__";(function(t){t[t.Trace=0]="Trace",t[t.Debug=1]="Debug",t[t.Warn=2]="Warn",t[t.Error=3]="Error"})(be||(be={}))
var xe=function(){function t(){ke(this,t)}return t.prototype.log=function(t){},t.prototype.warn=function(t){},t.prototype.error=function(t){},t.prototype.trace=function(){},t}(),Oe=void 0,Te=function(){function t(e){var n=e.console,i=e.level
ke(this,t),this.f=Oe,this.force=Oe,this.console=n,this.level=i}return t.prototype.skipped=function(t){return t<this.level},t.prototype.trace=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.stackTrace,i=void 0!==n&&n
this.skipped(be.Trace)||(this.console.log(t),i&&this.console.trace())},t.prototype.debug=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.stackTrace,i=void 0!==n&&n
this.skipped(be.Debug)||(this.console.log(t),i&&this.console.trace())},t.prototype.warn=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.stackTrace,i=void 0!==n&&n
this.skipped(be.Warn)||(this.console.warn(t),i&&this.console.trace())},t.prototype.error=function(t){this.skipped(be.Error)||this.console.error(t)},t}(),De="undefined"==typeof console?new xe:console
Oe=new Te({console:De,level:be.Trace}),new Te({console:De,level:be.Debug})
var Re=Object.keys,Me=0,Le=Object.create(null,{constructor:{value:void 0,enumerable:!1,writable:!0}})
h.prototype=Le
var Be=function(){function t(){ke(this,t),this.dict=l()}return t.prototype.add=function(t){return"string"==typeof t?this.dict[t]=t:this.dict[c(t)]=t,this},t.prototype.delete=function(t){"string"==typeof t?delete this.dict[t]:t._guid&&delete this.dict[t._guid]},t.prototype.forEach=function(t){for(var e=this.dict,n=Object.keys(e),i=0;n.length;i++)t(e[n[i]])},t.prototype.toArray=function(){return Object.keys(this.dict)},t}(),Fe=function(){function t(){ke(this,t),this.stack=[],this.current=null}return t.prototype.toArray=function(){return this.stack},t.prototype.push=function(t){this.current=t,this.stack.push(t)},t.prototype.pop=function(){var t=this.stack.pop(),e=this.stack.length
return this.current=0===e?null:this.stack[e-1],void 0===t?null:t},t.prototype.isEmpty=function(){return 0===this.stack.length},t}(),Ie=function t(e){ke(this,t),this.next=null,this.prev=null,this.value=e},Pe=function(){function t(){ke(this,t),this.clear()}return t.fromSlice=function(e){var n=new t
return e.forEachNode(function(t){return n.append(t.clone())}),n},t.prototype.head=function(){return this._head},t.prototype.tail=function(){return this._tail},t.prototype.clear=function(){this._head=this._tail=null},t.prototype.isEmpty=function(){return null===this._head},t.prototype.toArray=function(){var t=[]
return this.forEachNode(function(e){return t.push(e)}),t},t.prototype.splice=function(t,e,n){var i=void 0
null===n?(i=this._tail,this._tail=e):(i=n.prev,e.next=n,n.prev=e),i&&(i.next=t,t.prev=i)},t.prototype.nextNode=function(t){return t.next},t.prototype.prevNode=function(t){return t.prev},t.prototype.forEachNode=function(t){for(var e=this._head;null!==e;)t(e),e=e.next},t.prototype.contains=function(t){for(var e=this._head;null!==e;){if(e===t)return!0
e=e.next}return!1},t.prototype.insertBefore=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
return null===e?this.append(t):(e.prev?e.prev.next=t:this._head=t,t.prev=e.prev,t.next=e,e.prev=t,t)},t.prototype.append=function(t){var e=this._tail
return e?(e.next=t,t.prev=e,t.next=null):this._head=t,this._tail=t},t.prototype.pop=function(){return this._tail?this.remove(this._tail):null},t.prototype.prepend=function(t){return this._head?this.insertBefore(t,this._head):this._head=this._tail=t},t.prototype.remove=function(t){return t.prev?t.prev.next=t.next:this._head=t.next,t.next?t.next.prev=t.prev:this._tail=t.prev,t},t}(),je=function(){function t(e,n){ke(this,t),this._head=e,this._tail=n}return t.toList=function(t){var e=new Pe
return t.forEachNode(function(t){return e.append(t.clone())}),e},t.prototype.forEachNode=function(t){for(var e=this._head;null!==e;)t(e),e=this.nextNode(e)},t.prototype.contains=function(t){for(var e=this._head;null!==e;){if(e===t)return!0
e=e.next}return!1},t.prototype.head=function(){return this._head},t.prototype.tail=function(){return this._tail},t.prototype.toArray=function(){var t=[]
return this.forEachNode(function(e){return t.push(e)}),t},t.prototype.nextNode=function(t){return t===this._tail?null:t.next},t.prototype.prevNode=function(t){return t===this._head?null:t.prev},t.prototype.isEmpty=function(){return!1},t}(),Ue=(new je(null,null),function(){if("function"!=typeof WeakMap)return!1
var t=new WeakMap
return"[object WeakMap]"===Object.prototype.toString.call(t)}()),Ve="undefined"!=typeof Uint32Array
Ve?Uint32Array:Array
var He,ze=Ue?Object.freeze([]):[];(function(t){t[t.pc=0]="pc",t[t.ra=1]="ra",t[t.fp=2]="fp",t[t.sp=3]="sp",t[t.s0=4]="s0",t[t.s1=5]="s1",t[t.t0=6]="t0",t[t.t1=7]="t1"})(He||(He={}))
var Ge=function(){function t(){ke(this,t),this.evaluateOpcode=u(72).slice()}return t.prototype.add=function(t,e){this.evaluateOpcode[t]=e},t.prototype.evaluate=function(t,e,n){(0,this.evaluateOpcode[n])(t,e)},t}(),We=new Ge,Je=function(){function t(){ke(this,t),p(this)}return t.prototype.toJSON=function(){return{guid:this._guid,type:this.type}},t}(),qe=function(t){function e(){ke(this,e)
var n=Ee(this,t.apply(this,arguments))
return n.next=null,n.prev=null,n}return we(e,t),e}(Je),Ye=1,Xe=function(){function t(){ke(this,t)}return t.prototype.validate=function(t){return this.value()===t},t}()
Xe.id=0
var Ke=[],$e=[],Ze=function(){function t(e,n){ke(this,t),this.type=e,this.inner=n}return t.prototype.value=function(){return(0,Ke[this.type])(this.inner)},t.prototype.validate=function(t){return(0,$e[this.type])(this.inner,t)},t}()
Ke.push(function(){return 0}),$e.push(function(t,e){return 0===e})
var Qe=new Ze(0,null)
Ke.push(function(){return NaN}),$e.push(function(t,e){return NaN===e})
var tn=new Ze(1,null)
Ke.push(function(){return en}),$e.push(function(t,e){return e===en})
var en=(new Ze(2,null),Ye),nn=function(t){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:en
ke(this,e)
var i=Ee(this,t.call(this))
return i.revision=n,i}return we(e,t),e.create=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:en
return new Ze(this.id,new e(t))},e.prototype.value=function(){return this.revision},e.prototype.dirty=function(){this.revision=++en},e}(Xe)
f(nn)
var rn=function(t){function e(){ke(this,e)
var n=Ee(this,t.apply(this,arguments))
return n.lastChecked=null,n.lastValue=null,n}return we(e,t),e.prototype.value=function(){var t=this.lastChecked
this.lastValue
return t!==en&&(this.lastChecked=en,this.lastValue=this.compute()),this.lastValue},e.prototype.invalidate=function(){this.lastChecked=null},e}(Xe),on=function(t){function e(n,i){ke(this,e)
var r=Ee(this,t.call(this))
return r.first=n,r.second=i,r}return we(e,t),e.create=function(t,n){return new Ze(this.id,new e(t,n))},e.prototype.compute=function(){return Math.max(this.first.value(),this.second.value())},e}(rn)
f(on)
var sn=function(t){function e(n){ke(this,e)
var i=Ee(this,t.call(this))
return i.tags=n,i}return we(e,t),e.create=function(t){return new Ze(this.id,new e(t))},e.prototype.compute=function(){for(var t=this.tags,e=-1,n=0;n<t.length;n++){var i=t[n].value()
e=Math.max(i,e)}return e},e}(rn)
f(sn)
var an=function(t){function e(n){ke(this,e)
var i=Ee(this,t.call(this))
return i.tag=n,i.lastUpdated=Ye,i}return we(e,t),e.create=function(t){return new Ze(this.id,new e(t))},e.prototype.compute=function(){return Math.max(this.lastUpdated,this.tag.value())},e.prototype.update=function(t){t!==this.tag&&(this.tag=t,this.lastUpdated=en,this.invalidate())},e}(rn)
f(an)
var un,pn=function(){function t(){ke(this,t),this.lastRevision=null,this.lastValue=null}return t.prototype.value=function(){var t=this.tag,e=this.lastRevision,n=this.lastValue
return e&&t.validate(e)||(n=this.lastValue=this.compute(),this.lastRevision=t.value()),n},t.prototype.invalidate=function(){this.lastRevision=null},t}(),cn=function(t){function e(n,i){ke(this,e)
var r=Ee(this,t.call(this))
return r.tag=n.tag,r.reference=n,r.mapper=i,r}return we(e,t),e.prototype.compute=function(){var t=this.reference
return(0,this.mapper)(t.value())},e}(pn),hn=function(){function t(e){ke(this,t),this.lastValue=null,this.lastRevision=null,this.initialized=!1,this.tag=e.tag,this.reference=e}return t.prototype.peek=function(){return this.initialized?this.lastValue:this.initialize()},t.prototype.revalidate=function(){if(!this.initialized)return this.initialize()
var t=this.reference,e=this.lastRevision,n=t.tag
if(n.validate(e))return ln
this.lastRevision=n.value()
var i=this.lastValue,r=t.value()
return r===i?ln:(this.lastValue=r,r)},t.prototype.initialize=function(){var t=this.reference,e=this.lastValue=t.value()
return this.lastRevision=t.tag.value(),this.initialized=!0,e},t}(),ln="adb3b78e-3d22-4e4b-877a-6317c2c5c145",fn=function(){function t(e){ke(this,t),this.inner=e,this.tag=Qe}return t.prototype.value=function(){return this.inner},t}(),dn=function(t){function e(n,i){ke(this,e)
var r=Ee(this,t.call(this,n.valueReferenceFor(i)))
return r.retained=!1,r.seen=!1,r.key=i.key,r.iterable=n,r.memo=n.memoReferenceFor(i),r}return we(e,t),e.prototype.update=function(t){this.retained=!0,this.iterable.updateValueReference(this.value,t),this.iterable.updateMemoReference(this.memo,t)},e.prototype.shouldRemove=function(){return!this.retained},e.prototype.reset=function(){this.retained=!1,this.seen=!1},e}(Ie),mn=function(){function t(e){ke(this,t),this.map=l(),this.list=new Pe,this.tag=e.tag,this.iterable=e}return t.prototype.isEmpty=function(){return(this.iterator=this.iterable.iterate()).isEmpty()},t.prototype.iterate=function(){var t=this.iterator||this.iterable.iterate()
return this.iterator=null,t},t.prototype.has=function(t){return!!this.map[t]},t.prototype.get=function(t){return this.map[t]},t.prototype.wasSeen=function(t){var e=this.map[t]
return e&&e.seen},t.prototype.append=function(t){var e=this.map,n=this.list,i=this.iterable,r=e[t.key]=new dn(i,t)
return n.append(r),r},t.prototype.insertBefore=function(t,e){var n=this.map,i=this.list,r=this.iterable,o=n[t.key]=new dn(r,t)
return o.retained=!0,i.insertBefore(o,e),o},t.prototype.move=function(t,e){var n=this.list
t.retained=!0,n.remove(t),n.insertBefore(t,e)},t.prototype.remove=function(t){this.list.remove(t),delete this.map[t.key]},t.prototype.nextNode=function(t){return this.list.nextNode(t)},t.prototype.head=function(){return this.list.head()},t}(),yn=function(){function t(e){ke(this,t),this.iterator=null
var n=new mn(e)
this.artifacts=n}return t.prototype.next=function(){var t=this.artifacts,e=this.iterator=this.iterator||t.iterate(),n=e.next()
return n?t.append(n):null},t}();(function(t){t[t.Append=0]="Append",t[t.Prune=1]="Prune",t[t.Done=2]="Done"})(un||(un={}))
var vn=function(){function t(e){var n=e.target,i=e.artifacts
ke(this,t),this.target=n,this.artifacts=i,this.iterator=i.iterate(),this.current=i.head()}return t.prototype.sync=function(){for(var t=un.Append;;)switch(t){case un.Append:t=this.nextAppend()
break
case un.Prune:t=this.nextPrune()
break
case un.Done:return void this.nextDone()}},t.prototype.advanceToKey=function(t){for(var e=this.current,n=this.artifacts,i=e;i&&i.key!==t;)i.seen=!0,i=n.nextNode(i)
this.current=i&&n.nextNode(i)},t.prototype.nextAppend=function(){var t=this.iterator,e=this.current,n=this.artifacts,i=t.next()
if(null===i)return this.startPrune()
var r=i.key
return e&&e.key===r?this.nextRetain(i):n.has(r)?this.nextMove(i):this.nextInsert(i),un.Append},t.prototype.nextRetain=function(t){var e=this.artifacts,n=this.current
n=i(n,"BUG: current is empty"),n.update(t),this.current=e.nextNode(n),this.target.retain(t.key,n.value,n.memo)},t.prototype.nextMove=function(t){var e=this.current,n=this.artifacts,i=this.target,r=t.key,o=n.get(t.key)
o.update(t),n.wasSeen(t.key)?(n.move(o,e),i.move(o.key,o.value,o.memo,e?e.key:null)):this.advanceToKey(r)},t.prototype.nextInsert=function(t){var e=this.artifacts,n=this.target,i=this.current,r=e.insertBefore(t,i)
n.insert(r.key,r.value,r.memo,i?i.key:null)},t.prototype.startPrune=function(){return this.current=this.artifacts.head(),un.Prune},t.prototype.nextPrune=function(){var t=this.artifacts,e=this.target,n=this.current
if(null===n)return un.Done
var i=n
return this.current=t.nextNode(i),i.shouldRemove()?(t.remove(i),e.delete(i.key)):i.reset(),un.Prune},t.prototype.nextDone=function(){this.target.done()},t}(),gn=function(t){function e(n){return ke(this,e),Ee(this,t.call(this,n))}return we(e,t),e.create=function(t){return void 0===t?kn:null===t?Sn:!0===t?wn:!1===t?En:"number"==typeof t?new _n(t):new bn(t)},e.prototype.get=function(t){return kn},e}(fn),bn=function(t){function e(){ke(this,e)
var n=Ee(this,t.apply(this,arguments))
return n.lengthReference=null,n}return we(e,t),e.prototype.get=function(e){if("length"===e){var n=this.lengthReference
return null===n&&(n=this.lengthReference=new _n(this.inner.length)),n}return t.prototype.get.call(this,e)},e}(gn),_n=function(t){function e(n){return ke(this,e),Ee(this,t.call(this,n))}return we(e,t),e}(gn),kn=new _n(void 0),Sn=new _n(null),wn=new _n(!0),En=new _n(!1),Cn=function(){function t(e){ke(this,t),this.inner=e,this.tag=e.tag}return t.prototype.value=function(){return this.toBool(this.inner.value())},t.prototype.toBool=function(t){return!!t},t}(),An=function(t){function e(n){ke(this,e)
var i=Ee(this,t.call(this))
return i.parts=n,i.tag=d(n),i}return we(e,t),e.prototype.compute=function(){for(var t=new Array,e=0;e<this.parts.length;e++){var n=this.parts[e].value()
null!==n&&void 0!==n&&(t[e]=k(n))}return t.length>0?t.join(""):null},e}(pn)
We.add(1,function(t,e){var n=e.op1,i=t.stack,r=t.constants.getFunction(n),o=i.pop(),s=r(t,o)
o.clear(),t.stack.push(s)}),We.add(2,function(t,e){var n=e.op1,i=t.constants.getFunction(n)
t.stack.push(i(t))}),We.add(5,function(t,e){var n=e.op1,i=t.referenceForSymbol(n)
t.stack.push(i)}),We.add(4,function(t,e){var n=e.op1,i=t.stack.pop()
t.scope().bindSymbol(n,i)}),We.add(70,function(t,e){var n=e.op1,i=t.constants.getString(n),r=t.scope().getPartialMap(),o=r[i]
void 0===o&&(o=t.getSelf().get(i)),t.stack.push(o)}),We.add(19,function(t,e){var n=e.op1,i=e.op2
t.pushRootScope(n,!!i)}),We.add(6,function(t,e){var n=e.op1,i=t.constants.getString(n),r=t.stack.pop()
t.stack.push(r.get(i))}),We.add(7,function(t,e){var n=e.op1,i=n?t.constants.getBlock(n):null
t.stack.push(i)}),We.add(8,function(t,e){var n=e.op1
t.stack.push(t.scope().getBlock(n))}),We.add(9,function(t,e){var n=e.op1,i=!!t.scope().getBlock(n)
t.stack.push(i?wn:En)}),We.add(10,function(t,e){var n=e.op1,i=t.scope().getBlock(n),r=i&&i.symbolTable.parameters.length
t.stack.push(r?wn:En)}),We.add(11,function(t,e){for(var n=e.op1,i=[],r=n;r>0;r--)i.push(t.stack.pop())
t.stack.push(new An(i.reverse()))})
var Nn=function(){function t(){ke(this,t),this.stack=null,this.positional=new xn,this.named=new Tn}return t.prototype.empty=function(){return this.setup(null,!0),this},t.prototype.setup=function(t,e){this.stack=t
var n=t.fromTop(0),i=n.length,r=t.fromTop(i+1),o=r+i+2
this.positional.setup(t,o,r),this.named.setup(t,i,n,e)},t.prototype.at=function(t){return this.positional.at(t)},t.prototype.get=function(t){return this.named.get(t)},t.prototype.capture=function(){return{tag:this.tag,length:this.length,positional:this.positional.capture(),named:this.named.capture()}},t.prototype.clear=function(){var t=this.stack,e=this.length
t.pop(e+2)},Se(t,[{key:"tag",get:function(){return d([this.positional,this.named])}},{key:"length",get:function(){return this.positional.length+this.named.length}}]),t}(),xn=function(){function t(){ke(this,t),this.length=0,this.stack=null,this.start=0,this._tag=null,this._references=null}return t.prototype.setup=function(t,e,n){this.stack=t,this.start=e,this.length=n,this._tag=null,this._references=null},t.prototype.at=function(t){var e=this.start,n=this.length
if(t<0||t>=n)return kn
var i=e-t-1
return this.stack.fromTop(i)},t.prototype.capture=function(){return new On(this.tag,this.references)},Se(t,[{key:"tag",get:function(){var t=this._tag
return t||(t=this._tag=d(this.references)),t}},{key:"references",get:function(){var t=this._references
if(!t){var e=this.length
t=this._references=new Array(e)
for(var n=0;n<e;n++)t[n]=this.at(n)}return t}}]),t}(),On=function(){function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.length
ke(this,t),this.tag=e,this.references=n,this.length=i}return t.prototype.at=function(t){return this.references[t]},t.prototype.value=function(){return this.references.map(this.valueOf)},t.prototype.get=function(t){var e=this.references,n=this.length
if("length"===t)return gn.create(n)
var i=parseInt(t,10)
return i<0||i>=n?kn:e[i]},t.prototype.valueOf=function(t){return t.value()},t}(),Tn=function(){function t(){ke(this,t),this.length=0,this._tag=null,this._references=null,this._names=null,this._realNames=ze}return t.prototype.setup=function(t,e,n,i){this.stack=t,this.length=e,this._tag=null,this._references=null,i?(this._names=n,this._realNames=ze):(this._names=null,this._realNames=n)},t.prototype.has=function(t){return-1!==this.names.indexOf(t)},t.prototype.get=function(t){var e=this.names,n=this.length,i=e.indexOf(t)
if(-1===i)return kn
var r=n-i
return this.stack.fromTop(r)},t.prototype.capture=function(){return new Dn(this.tag,this.names,this.references)},t.prototype.sliceName=function(t){return t.slice(1)},Se(t,[{key:"tag",get:function(){return d(this.references)}},{key:"names",get:function(){var t=this._names
return t||(t=this._names=this._realNames.map(this.sliceName)),t}},{key:"references",get:function(){var t=this._references
if(!t){var e=this.names,n=this.length
t=this._references=[]
for(var i=0;i<n;i++)t[i]=this.get(e[i])}return t}}]),t}(),Dn=function(){function t(e,n,i){ke(this,t),this.tag=e,this.names=n,this.references=i,this.length=n.length,this._map=null}return t.prototype.has=function(t){return-1!==this.names.indexOf(t)},t.prototype.get=function(t){var e=this.names,n=this.references,i=e.indexOf(t)
return-1===i?kn:n[i]},t.prototype.value=function(){for(var t=this.names,e=this.references,n=l(),i=0;i<t.length;i++){n[t[i]]=e[i].value()}return n},Se(t,[{key:"map",get:function(){var t=this._map
if(!t){var e=this.names,n=this.references
t=this._map=l()
for(var i=0;i<e.length;i++){t[e[i]]=n[i]}}return t}}]),t}(),Rn=new Nn
We.add(20,function(t){return t.pushChildScope()}),We.add(21,function(t){return t.popScope()}),We.add(39,function(t){return t.pushDynamicScope()}),We.add(40,function(t){return t.popDynamicScope()}),We.add(12,function(t,e){var n=e.op1
t.stack.push(n)}),We.add(13,function(t,e){var n=e.op1
t.stack.push(t.constants.getOther(n))}),We.add(14,function(t,e){var n=e.op1,i=t.stack,r=(n&3<<30)>>>30,o=n&~(3<<30)
switch(r){case 0:i.push(gn.create(o))
break
case 1:i.push(gn.create(t.constants.getString(o)))
break
case 2:switch(o){case 0:i.push(En)
break
case 1:i.push(wn)
break
case 2:i.push(Sn)
break
case 3:i.push(kn)}}}),We.add(15,function(t,e){var n=e.op1,i=e.op2,r=t.fetchValue(n)-i
t.stack.dup(r)}),We.add(16,function(t,e){var n=e.op1
return t.stack.pop(n)}),We.add(17,function(t,e){var n=e.op1
return t.load(n)}),We.add(18,function(t,e){var n=e.op1
return t.fetch(n)}),We.add(38,function(t,e){var n=e.op1,i=t.constants.getArray(n)
t.bindDynamicScope(i)}),We.add(47,function(t){return t.pushFrame()}),We.add(48,function(t){return t.popFrame()}),We.add(49,function(t,e){var n=e.op1
return t.enter(n)}),We.add(50,function(t){return t.exit()}),We.add(41,function(t){var e=t.stack,n=e.pop()
e.push(n?n.compileDynamic(t.env):null)}),We.add(42,function(t,e){var n=e.op1,i=t.constants.getBlock(n),r=i.compileStatic(t.env)
t.call(r.handle)}),We.add(43,function(t,e){var n=e.op1,i=t.constants.getOther(n),r=t.stack.pop()
i.invoke(t,r)}),We.add(44,function(t,e){var n=e.op1
return t.goto(n)}),We.add(45,function(t,e){var n=e.op1,i=t.stack.pop()
if(_(i))i.value()&&t.goto(n)
else{var r=new hn(i)
r.peek()&&t.goto(n),t.updateWith(new Fn(r))}}),We.add(46,function(t,e){var n=e.op1,i=t.stack.pop()
if(_(i))i.value()||t.goto(n)
else{var r=new hn(i)
r.peek()||t.goto(n),t.updateWith(new Fn(r))}}),We.add(22,function(t){return t.return()}),We.add(23,function(t,e){var n=e.op1
t.returnTo(n)})
var Mn=function(t,e){return new fn(!!t.value())},Ln=function(t,e){return t},Bn=function(t,e){return e.toConditionalReference(t)}
We.add(51,function(t,e){var n=e.op1,i=t.stack,r=i.pop(),o=t.constants.getFunction(n)
i.push(o(r,t.env))})
var Fn=function(t){function e(n){ke(this,e)
var i=Ee(this,t.call(this))
return i.type="assert",i.tag=n.tag,i.cache=n,i}return we(e,t),e.prototype.evaluate=function(t){b(this.cache.revalidate())&&t.throw()},e.prototype.toJSON=function(){var t=this.type,e=this._guid,n=this.cache,i=void 0
try{i=JSON.stringify(n.peek())}catch(t){i=String(n.peek())}return{args:[],details:{expected:i},guid:e,type:t}},e}(qe),In=function(t){function e(n,i){ke(this,e)
var r=Ee(this,t.call(this))
return r.target=i,r.type="jump-if-not-modified",r.tag=n,r.lastRevision=n.value(),r}return we(e,t),e.prototype.evaluate=function(t){var e=this.tag,n=this.target,i=this.lastRevision
!t.alwaysRevalidate&&e.validate(i)&&t.goto(n)},e.prototype.didModify=function(){this.lastRevision=this.tag.value()},e.prototype.toJSON=function(){return{args:[JSON.stringify(this.target.inspect())],guid:this._guid,type:this.type}},e}(qe),Pn=function(t){function e(n){ke(this,e)
var i=Ee(this,t.call(this))
return i.target=n,i.type="did-modify",i.tag=Qe,i}return we(e,t),e.prototype.evaluate=function(){this.target.didModify()},e}(qe),jn=function(){function t(e){ke(this,t),this.tag=Qe,this.type="label",this.label=null,this.prev=null,this.next=null,p(this),this.label=e}return t.prototype.evaluate=function(){},t.prototype.inspect=function(){return this.label+" ["+this._guid+"]"},t.prototype.toJSON=function(){return{args:[JSON.stringify(this.inspect())],guid:this._guid,type:this.type}},t}()
We.add(24,function(t,e){var n=e.op1
t.elements().appendText(t.constants.getString(n))}),We.add(25,function(t,e){var n=e.op1
t.elements().appendComment(t.constants.getString(n))}),We.add(27,function(t,e){var n=e.op1
t.elements().openElement(t.constants.getString(n))}),We.add(28,function(t,e){var n=e.op1,i=t.constants.getString(n),r=t.stack.pop()
t.elements().openElement(i,r)}),We.add(29,function(t){var e=t.stack.pop(),n=t.stack.pop().value()
t.elements().openElement(n,e)}),We.add(36,function(t){var e=t.stack.pop(),n=t.stack.pop(),i=void 0,r=void 0
if(_(e))i=e.value()
else{var o=new hn(e)
i=o.peek(),t.updateWith(new Fn(o))}if(_(n))r=n.value()
else{var s=new hn(n)
r=s.peek(),t.updateWith(new Fn(s))}t.elements().pushRemoteElement(i,r)}),We.add(37,function(t){return t.elements().popRemoteElement()})
var Un=function(){function t(){ke(this,t),this.list=null,this.isConst=!0}return t.prototype.append=function(t){var e=this.list,n=this.isConst
null===e&&(e=this.list=[]),e.push(t),this.isConst=n&&_(t)},t.prototype.toReference=function(){var t=this.list,e=this.isConst
return t?e?gn.create(S(t)):new Vn(t):Sn},t}(),Vn=function(t){function e(n){ke(this,e)
var i=Ee(this,t.call(this))
return i.list=[],i.tag=d(n),i.list=n,i}return we(e,t),e.prototype.compute=function(){return S(this.list)},e}(pn),Hn=function(){function t(e){ke(this,t),this.env=e,this.opcodes=null,this.classList=null}return t.prototype.addStaticAttribute=function(t,e,n){"class"===e?this.addClass(gn.create(n)):this.env.getAppendOperations().setAttribute(t,e,n)},t.prototype.addStaticAttributeNS=function(t,e,n,i){this.env.getAppendOperations().setAttribute(t,n,i,e)},t.prototype.addDynamicAttribute=function(t,e,n,i){if("class"===e)this.addClass(n)
else{var r=this.env.attributeFor(t,e,i),o=new Jn(t,r,e,n)
this.addAttribute(o)}},t.prototype.addDynamicAttributeNS=function(t,e,n,i,r){var o=this.env.attributeFor(t,n,r,e),s=new Jn(t,o,n,i,e)
this.addAttribute(s)},t.prototype.flush=function(t,e){for(var n=e.env,i=this.opcodes,r=this.classList,o=0;i&&o<i.length;o++)e.updateWith(i[o])
if(r){var s=n.attributeFor(t,"class",!1),a=new Jn(t,s,"class",r.toReference()),u=a.flush(n)
u&&e.updateWith(u)}this.opcodes=null,this.classList=null},t.prototype.addClass=function(t){var e=this.classList
e||(e=this.classList=new Un),e.append(t)},t.prototype.addAttribute=function(t){var e=t.flush(this.env)
if(e){var n=this.opcodes
n||(n=this.opcodes=[]),n.push(e)}},t}(),zn=function(){function t(e){ke(this,t),this.env=e,this.attributeNames=null,this.attributes=null,this.classList=null}return t.prototype.addStaticAttribute=function(t,e,n){"class"===e?this.addClass(gn.create(n)):this.shouldAddAttribute(e)&&this.addAttribute(e,new Wn(t,e,n))},t.prototype.addStaticAttributeNS=function(t,e,n,i){this.shouldAddAttribute(n)&&this.addAttribute(n,new Wn(t,n,i,e))},t.prototype.addDynamicAttribute=function(t,e,n,i){if("class"===e)this.addClass(n)
else if(this.shouldAddAttribute(e)){var r=this.env.attributeFor(t,e,i),o=new Jn(t,r,e,n)
this.addAttribute(e,o)}},t.prototype.addDynamicAttributeNS=function(t,e,n,i,r){if(this.shouldAddAttribute(n)){var o=this.env.attributeFor(t,n,r,e),s=new Jn(t,o,n,i,e)
this.addAttribute(n,s)}},t.prototype.flush=function(t,e){for(var n=this.env,i=this.attributes,r=this.classList,o=0;i&&o<i.length;o++){var s=i[o].flush(n)
s&&e.updateWith(s)}if(r){var a=n.attributeFor(t,"class",!1),u=new Jn(t,a,"class",r.toReference()),p=u.flush(n)
p&&e.updateWith(p)}},t.prototype.shouldAddAttribute=function(t){return!this.attributeNames||-1===this.attributeNames.indexOf(t)},t.prototype.addClass=function(t){var e=this.classList
e||(e=this.classList=new Un),e.append(t)},t.prototype.addAttribute=function(t,e){var i=this.attributeNames,r=this.attributes
i||(i=this.attributeNames=[],r=this.attributes=[]),i.push(t),n(r).push(e)},t}()
We.add(33,function(t){var e=t.elements(),n="FlushElementOpcode#evaluate"
e.expectOperations(n).flush(e.expectConstructing(n),t),e.flushElement()}),We.add(34,function(t){return t.elements().closeElement()}),We.add(30,function(t,e){var n=e.op1,i=e.op2,r=e.op3,o=t.constants.getString(n),s=t.constants.getString(i)
if(r){var a=t.constants.getString(r)
t.elements().setStaticAttributeNS(a,o,s)}else t.elements().setStaticAttribute(o,s)}),We.add(35,function(t,e){var n=e.op1,i=t.constants.getOther(n),r=t.stack,o=r.pop(),s=o.tag,a=t.elements(),u=a.constructing,p=a.updateOperations,c=t.dynamicScope(),h=i.create(u,o,c,p)
o.clear(),t.env.scheduleInstallModifier(h,i)
var l=i.getDestructor(h)
l&&t.newDestroyable(l),t.updateWith(new Gn(s,i,h))})
var Gn=function(t){function e(n,i,r){ke(this,e)
var o=Ee(this,t.call(this))
return o.tag=n,o.manager=i,o.modifier=r,o.type="update-modifier",o.lastUpdated=n.value(),o}return we(e,t),e.prototype.evaluate=function(t){var e=this.manager,n=this.modifier,i=this.tag,r=this.lastUpdated
i.validate(r)||(t.env.scheduleUpdateModifier(n,e),this.lastUpdated=i.value())},e.prototype.toJSON=function(){return{guid:this._guid,type:this.type}},e}(qe),Wn=function(){function t(e,n,i,r){ke(this,t),this.element=e,this.name=n,this.value=i,this.namespace=r}return t.prototype.flush=function(t){return t.getAppendOperations().setAttribute(this.element,this.name,this.value,this.namespace),null},t}(),Jn=function(){function t(e,n,i,r,o){ke(this,t),this.element=e,this.attributeManager=n,this.name=i,this.reference=r,this.namespace=o,this.cache=null,this.tag=r.tag}return t.prototype.patch=function(t){var e=this.element,n=this.cache,r=i(n,"must patch after flush").revalidate()
b(r)&&this.attributeManager.updateAttribute(t,e,r,this.namespace)},t.prototype.flush=function(t){var e=this.reference,n=this.element
if(_(e)){var i=e.value()
return this.attributeManager.setAttribute(t,n,i,this.namespace),null}var r=this.cache=new hn(e),o=r.peek()
return this.attributeManager.setAttribute(t,n,o,this.namespace),new qn(this)},t.prototype.toJSON=function(){var t=this.element,e=this.namespace,n=this.name,r=this.cache,o=w(t),s=i(r,"must serialize after flush").peek()
return e?{element:o,lastValue:s,name:n,namespace:e,type:"attribute"}:{element:o,lastValue:s,name:n,namespace:void 0===e?null:e,type:"attribute"}},t}()
We.add(32,function(t,e){var n=e.op1,i=e.op2,r=e.op3,o=t.constants.getString(n),s=t.constants.getString(i),a=t.stack.pop()
t.elements().setDynamicAttributeNS(s,o,a,!!r)}),We.add(31,function(t,e){var n=e.op1,i=e.op2,r=t.constants.getString(n),o=t.stack.pop()
t.elements().setDynamicAttribute(r,o,!!i)})
var qn=function(t){function e(n){ke(this,e)
var i=Ee(this,t.call(this))
return i.type="patch-element",i.tag=n.tag,i.operation=n,i}return we(e,t),e.prototype.evaluate=function(t){this.operation.patch(t.env)},e.prototype.toJSON=function(){var t=this._guid,e=this.type
return{details:this.operation.toJSON(),guid:t,type:e}},e}(qe)
We.add(56,function(t,e){var n=e.op1,i=t.constants.getOther(n)
t.stack.push({definition:i,manager:i.manager,component:null})}),We.add(57,function(t){var e=t.stack,n=e.pop(),i=_(n)?void 0:new hn(n),r=i?i.peek():n.value()
e.push({definition:r,manager:r.manager,component:null}),i&&t.updateWith(new Fn(i))}),We.add(58,function(t,e){var n=e.op1,i=t.stack
Rn.setup(i,!!n),i.push(Rn)}),We.add(59,function(t,e){var n=e.op1,i=t.stack,r=t.fetchValue(n),o=r.definition,s=r.manager,a=i.pop(),u=s.prepareArgs(o,a)
if(u){a.clear()
for(var p=u.positional,c=u.named,h=p.length,l=0;l<h;l++)i.push(p[l])
i.push(h)
for(var f=Object.keys(c),d=f.length,m=[],y=0;y<d;y++){var v=c[f[y]],g="@"+f[y]
i.push(v),m.push(g)}i.push(m),a.setup(i,!1)}i.push(a)}),We.add(60,function(t,e){var n,i=e.op1,r=e.op2,o=void 0,s=void 0,a=t.stack.pop(),u=t.dynamicScope(),p=(n=t.fetchValue(r),o=n.definition,s=n.manager,n),c=1&i,h=s.create(t.env,o,a,u,t.getSelf(),!!c)
p.component=h,t.updateWith(new Yn(a.tag,o.name,h,s,u))}),We.add(61,function(t,e){var n=e.op1,i=t.fetchValue(n),r=i.manager,o=i.component,s=r.getDestructor(o)
s&&t.newDestroyable(s)}),We.add(65,function(t){t.beginCacheGroup(),t.elements().pushSimpleBlock()}),We.add(62,function(t){t.stack.push(new zn(t.env))}),We.add(67,function(t,e){var n=e.op1,i=t.fetchValue(n),r=i.manager,o=i.component,s="DidCreateElementOpcode#evaluate"
r.didCreateElement(o,t.elements().expectConstructing(s),t.elements().expectOperations(s))}),We.add(63,function(t,e){var n=e.op1,i=t.fetchValue(n)
t.stack.push(i.manager.getSelf(i.component))}),We.add(64,function(t,e){var n=e.op1,i=t.fetchValue(n),r=i.manager,o=i.definition,s=i.component
t.stack.push(r.layoutFor(o,s,t.env))}),We.add(68,function(t,e){var n=e.op1,i=t.fetchValue(n),r=i.manager,o=i.component,s=t.elements().popBlock()
r.didRenderLayout(o,s),t.env.didCreate(o,r),t.updateWith(new Xn(r,o,s))}),We.add(66,function(t){return t.commitCacheGroup()})
var Yn=function(t){function e(n,i,r,o,s){ke(this,e)
var a=Ee(this,t.call(this))
a.name=i,a.component=r,a.manager=o,a.dynamicScope=s,a.type="update-component"
var u=o.getTag(r)
return a.tag=u?y([n,u]):n,a}return we(e,t),e.prototype.evaluate=function(t){var e=this.component,n=this.manager,i=this.dynamicScope
n.update(e,i)},e.prototype.toJSON=function(){return{args:[JSON.stringify(this.name)],guid:this._guid,type:this.type}},e}(qe),Xn=function(t){function e(n,i,r){ke(this,e)
var o=Ee(this,t.call(this))
return o.manager=n,o.component=i,o.bounds=r,o.type="did-update-layout",o.tag=Qe,o}return we(e,t),e.prototype.evaluate=function(t){var e=this.manager,n=this.component,i=this.bounds
e.didUpdateLayout(n,i),t.env.didUpdate(n,e)},e}(qe),Kn=function t(e,n){ke(this,t),this.element=e,this.nextSibling=n},$n=function(){function t(e,n,i){ke(this,t),this.parentNode=e,this.first=n,this.last=i}return t.prototype.parentElement=function(){return this.parentNode},t.prototype.firstNode=function(){return this.first},t.prototype.lastNode=function(){return this.last},t}(),Zn=function(){function t(e,n){ke(this,t),this.parentNode=e,this.node=n}return t.prototype.parentElement=function(){return this.parentNode},t.prototype.firstNode=function(){return this.node},t.prototype.lastNode=function(){return this.node},t}(),Qn=function(){function t(e){ke(this,t),this.node=e}return t.prototype.firstNode=function(){return this.node},t}(),ti=function(){function t(e){ke(this,t),this.node=e}return t.prototype.lastNode=function(){return this.node},t}(),ei=function(){function t(e){ke(this,t),this.bounds=e}return t.prototype.parentElement=function(){return this.bounds.parentElement()},t.prototype.firstNode=function(){return this.bounds.firstNode()},t.prototype.lastNode=function(){return this.bounds.lastNode()},t.prototype.update=function(t){this.bounds=t},t}(),ni=function(){function t(e,n,i){ke(this,t),this.constructing=null,this.operations=null,this.elementStack=new Fe,this.nextSiblingStack=new Fe,this.blockStack=new Fe,this.env=e,this.dom=e.getAppendOperations(),this.updateOperations=e.getDOM(),this.element=n,this.nextSibling=i,this.defaultOperations=new Hn(e),this.pushSimpleBlock(),this.elementStack.push(this.element),this.nextSiblingStack.push(this.nextSibling)}return t.forInitialRender=function(e,n,i){return new t(e,n,i)},t.resume=function(e,n,i){var r=n.parentElement(),o=new t(e,r,i)
return o.pushBlockTracker(n),o},t.prototype.expectConstructing=function(t){return i(this.constructing,t+" should only be called while constructing an element")},t.prototype.expectOperations=function(t){return i(this.operations,t+" should only be called while constructing an element")},t.prototype.block=function(){return i(this.blockStack.current,"Expected a current block tracker")},t.prototype.popElement=function(){var t=this.elementStack,e=this.nextSiblingStack,n=t.pop()
return e.pop(),this.element=i(t.current,"can't pop past the last element"),this.nextSibling=e.current,n},t.prototype.pushSimpleBlock=function(){var t=new ii(this.element)
return this.pushBlockTracker(t),t},t.prototype.pushUpdatableBlock=function(){var t=new oi(this.element)
return this.pushBlockTracker(t),t},t.prototype.pushBlockTracker=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.blockStack.current
return null!==n&&(n.newDestroyable(t),e||n.newBounds(t)),this.blockStack.push(t),t},t.prototype.pushBlockList=function(t){var e=new si(this.element,t),n=this.blockStack.current
return null!==n&&(n.newDestroyable(e),n.newBounds(e)),this.blockStack.push(e),e},t.prototype.popBlock=function(){return this.block().finalize(this),i(this.blockStack.pop(),"Expected popBlock to return a block")},t.prototype.openElement=function(t,e){var n=void 0===e?this.defaultOperations:e,i=this.dom.createElement(t,this.element)
return this.constructing=i,this.operations=n,i},t.prototype.flushElement=function(){var t=this.element,e=i(this.constructing,"flushElement should only be called when constructing an element")
this.dom.insertBefore(t,e,this.nextSibling),this.constructing=null,this.operations=null,this.pushElement(e,null),this.block().openElement(e)},t.prototype.pushRemoteElement=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null
this.pushElement(t,e)
var n=new ri(t)
this.pushBlockTracker(n,!0)},t.prototype.popRemoteElement=function(){this.popBlock(),this.popElement()},t.prototype.pushElement=function(t,e){this.element=t,this.elementStack.push(t),this.nextSibling=e,this.nextSiblingStack.push(e)},t.prototype.newDestroyable=function(t){this.block().newDestroyable(t)},t.prototype.newBounds=function(t){this.block().newBounds(t)},t.prototype.appendText=function(t){var e=this.dom,n=e.createTextNode(t)
return e.insertBefore(this.element,n,this.nextSibling),this.block().newNode(n),n},t.prototype.appendComment=function(t){var e=this.dom,n=e.createComment(t)
return e.insertBefore(this.element,n,this.nextSibling),this.block().newNode(n),n},t.prototype.setStaticAttribute=function(t,e){this.expectOperations("setStaticAttribute").addStaticAttribute(this.expectConstructing("setStaticAttribute"),t,e)},t.prototype.setStaticAttributeNS=function(t,e,n){this.expectOperations("setStaticAttributeNS").addStaticAttributeNS(this.expectConstructing("setStaticAttributeNS"),t,e,n)},t.prototype.setDynamicAttribute=function(t,e,n){this.expectOperations("setDynamicAttribute").addDynamicAttribute(this.expectConstructing("setDynamicAttribute"),t,e,n)},t.prototype.setDynamicAttributeNS=function(t,e,n,i){this.expectOperations("setDynamicAttributeNS").addDynamicAttributeNS(this.expectConstructing("setDynamicAttributeNS"),t,e,n,i)},t.prototype.closeElement=function(){this.block().closeElement(),this.popElement()},t}(),ii=function(){function t(e){ke(this,t),this.parent=e,this.first=null,this.last=null,this.destroyables=null,this.nesting=0}return t.prototype.destroy=function(){var t=this.destroyables
if(t&&t.length)for(var e=0;e<t.length;e++)t[e].destroy()},t.prototype.parentElement=function(){return this.parent},t.prototype.firstNode=function(){return this.first&&this.first.firstNode()},t.prototype.lastNode=function(){return this.last&&this.last.lastNode()},t.prototype.openElement=function(t){this.newNode(t),this.nesting++},t.prototype.closeElement=function(){this.nesting--},t.prototype.newNode=function(t){0===this.nesting&&(this.first||(this.first=new Qn(t)),this.last=new ti(t))},t.prototype.newBounds=function(t){0===this.nesting&&(this.first||(this.first=t),this.last=t)},t.prototype.newDestroyable=function(t){this.destroyables=this.destroyables||[],this.destroyables.push(t)},t.prototype.finalize=function(t){this.first||t.appendComment("")},t}(),ri=function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),A(this)},e}(ii),oi=function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e.prototype.reset=function(t){var e=this.destroyables
if(e&&e.length)for(var n=0;n<e.length;n++)t.didDestroy(e[n])
var i=A(this)
return this.first=null,this.last=null,this.destroyables=null,this.nesting=0,i},e}(ii),si=function(){function t(e,n){ke(this,t),this.parent=e,this.boundList=n,this.parent=e,this.boundList=n}return t.prototype.destroy=function(){this.boundList.forEachNode(function(t){return t.destroy()})},t.prototype.parentElement=function(){return this.parent},t.prototype.firstNode=function(){var t=this.boundList.head()
return t&&t.firstNode()},t.prototype.lastNode=function(){var t=this.boundList.tail()
return t&&t.lastNode()},t.prototype.openElement=function(t){s(!1,"Cannot openElement directly inside a block list")},t.prototype.closeElement=function(){s(!1,"Cannot closeElement directly inside a block list")},t.prototype.newNode=function(t){s(!1,"Cannot create a new node directly inside a block list")},t.prototype.newBounds=function(t){},t.prototype.newDestroyable=function(t){},t.prototype.finalize=function(t){},t}(),ai="COMPONENT DEFINITION [id=e59c754e-61eb-4392-8c4a-2c0ac72bfcd4]",ui=function t(e,n,i){ke(this,t),this[ai]=!0,this.name=e,this.manager=n,this.ComponentClass=i},pi=function t(e){ke(this,t),this.bounds=e},ci=function(t){function e(n,i){ke(this,e)
var r=Ee(this,t.call(this,n))
return r.textNode=i,r}return we(e,t),e.insert=function(t,n,i){var r=t.createTextNode(i)
return t.insertBefore(n.element,r,n.nextSibling),new e(new Zn(n.element,r),r)},e.prototype.update=function(t,e){if(T(e)){return this.textNode.nodeValue=e,!0}return!1},e}(pi),hi=function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e.insert=function(t,n,i){return new e(t.insertHTMLBefore(n.element,n.nextSibling,i))},e.prototype.update=function(t,e){if(T(e)){var n=this.bounds,i=n.parentElement(),r=A(n)
return this.bounds=t.insertHTMLBefore(i,r,e),!0}return!1},e}(pi),li=function(t){function e(n,i){ke(this,e)
var r=Ee(this,t.call(this,n))
return r.lastStringValue=i,r}return we(e,t),e.insert=function(t,n,i){var r=i.toHTML()
return new e(t.insertHTMLBefore(n.element,n.nextSibling,r),r)},e.prototype.update=function(t,e){if(x(e)){var n=e.toHTML()
if(n!==this.lastStringValue){var i=this.bounds,r=i.parentElement(),o=A(i)
this.bounds=t.insertHTMLBefore(r,o,n),this.lastStringValue=n}return!0}return!1},e}(pi),fi=function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e.insert=function(t,n,i){return t.insertBefore(n.element,i,n.nextSibling),new e(E(n.element,i))},e.prototype.update=function(t,e){if(O(e)){var n=this.bounds,i=n.parentElement(),r=A(n)
return this.bounds=t.insertNodeBefore(i,e,r),!0}return!1},e}(pi)
We.add(26,function(t,e){var n=e.op1
t.constants.getOther(n).evaluate(t)})
var di=function(){function t(){ke(this,t)}return t.prototype.evaluate=function(t){var e=t.stack.pop(),n=this.normalize(e),i=void 0,r=void 0
_(e)?i=n.value():(r=new hn(n),i=r.peek())
var o=t.elements(),s=this.insert(t.env.getAppendOperations(),o,i),a=new ei(s.bounds)
o.newBounds(a),r&&t.updateWith(this.updateWith(t,e,r,a,s))},t}(),mi=function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e.create=function(t){return new e(t)},e.prototype.toBool=function(t){return N(t)},e}(Cn),yi=function(t){function e(n,i,r){ke(this,e)
var o=Ee(this,t.call(this))
return o.cache=n,o.bounds=i,o.upsert=r,o.tag=n.tag,o}return we(e,t),e.prototype.evaluate=function(t){var e=this.cache.revalidate()
if(b(e)){var n=this.bounds,i=this.upsert,r=t.dom
if(!this.upsert.update(r,e)){var o=new Kn(n.parentElement(),A(n))
i=this.upsert=this.insert(t.env.getAppendOperations(),o,e)}n.update(i.bounds)}},e.prototype.toJSON=function(){var t=this._guid,e=this.type,n=this.cache
return{details:{lastValue:JSON.stringify(n.peek())},guid:t,type:e}},e}(qe),vi=function(t){function e(){ke(this,e)
var n=Ee(this,t.apply(this,arguments))
return n.type="optimized-cautious-append",n}return we(e,t),e.prototype.normalize=function(t){return g(t,F)},e.prototype.insert=function(t,e,n){return D(t,e,n)},e.prototype.updateWith=function(t,e,n,i,r){return new gi(n,i,r)},e}(di),gi=function(t){function e(){ke(this,e)
var n=Ee(this,t.apply(this,arguments))
return n.type="optimized-cautious-update",n}return we(e,t),e.prototype.insert=function(t,e,n){return D(t,e,n)},e}(yi),bi=function(t){function e(){ke(this,e)
var n=Ee(this,t.apply(this,arguments))
return n.type="optimized-trusting-append",n}return we(e,t),e.prototype.normalize=function(t){return g(t,B)},e.prototype.insert=function(t,e,n){return R(t,e,n)},e.prototype.updateWith=function(t,e,n,i,r){return new _i(n,i,r)},e}(di),_i=function(t){function e(){ke(this,e)
var n=Ee(this,t.apply(this,arguments))
return n.type="optimized-trusting-update",n}return we(e,t),e.prototype.insert=function(t,e,n){return R(t,e,n)},e}(yi),ki=I,Si=function(){function t(e,n,i){ke(this,t),this.scope=e,this.locals=l()
for(var r=0;r<i.length;r++){var o=i[r],s=n[o-1],a=e.getSymbol(o)
this.locals[s]=a}}return t.prototype.get=function(t){var e=this.scope,n=this.locals,i=t.split("."),r=t.split("."),o=r[0],s=r.slice(1),a=e.getEvalScope(),u=void 0
return"this"===o?u=e.getSelf():n[o]?u=n[o]:0===o.indexOf("@")&&a[o]?u=a[o]:(u=this.scope.getSelf(),s=i),s.reduce(function(t,e){return t.get(e)},u)},t}()
We.add(71,function(t,e){var n=e.op1,i=e.op2,r=t.constants.getOther(n),o=t.constants.getArray(i),s=new Si(t.scope(),r,o)
ki(t.getSelf().value(),function(t){return s.get(t).value()})}),We.add(69,function(t){var e=t.stack,n=e.pop()
e.push(n.value().template.asPartial())})
var wi=function(){function t(e){ke(this,t),this.tag=e.tag,this.artifacts=e}return t.prototype.value=function(){return!this.artifacts.isEmpty()},t}()
We.add(54,function(t){var e=t.stack,n=e.pop(),i=e.pop(),r=t.env.iterableFor(n,i.value()),o=new yn(r)
e.push(o),e.push(new wi(o.artifacts))}),We.add(52,function(t,e){var n=e.op1
t.enterList(n)}),We.add(53,function(t){return t.exitList()}),We.add(55,function(t,e){var n=e.op1,i=t.stack,r=i.peek().next()
if(r){var o=t.iterate(r.memo,r.value)
t.enterItem(r.key,o)}else t.goto(n)})
var Ei;(function(t){t[t.Text=0]="Text",t[t.Append=1]="Append",t[t.Comment=2]="Comment",t[t.Modifier=3]="Modifier",t[t.Block=4]="Block",t[t.Component=5]="Component",t[t.OpenElement=6]="OpenElement",t[t.FlushElement=7]="FlushElement",t[t.CloseElement=8]="CloseElement",t[t.StaticAttr=9]="StaticAttr",t[t.DynamicAttr=10]="DynamicAttr",t[t.Yield=11]="Yield",t[t.Partial=12]="Partial",t[t.DynamicArg=13]="DynamicArg",t[t.StaticArg=14]="StaticArg",t[t.TrustingAttr=15]="TrustingAttr",t[t.Debugger=16]="Debugger",t[t.ClientSideStatement=17]="ClientSideStatement",t[t.Unknown=18]="Unknown",t[t.Get=19]="Get",t[t.MaybeLocal=20]="MaybeLocal",t[t.FixThisBeforeWeMerge=21]="FixThisBeforeWeMerge",t[t.HasBlock=22]="HasBlock",t[t.HasBlockParams=23]="HasBlockParams",t[t.Undefined=24]="Undefined",t[t.Helper=25]="Helper",t[t.Concat=26]="Concat",t[t.ClientSideExpression=27]="ClientSideExpression"})(Ei||(Ei={}))
var Ci;(function(t){function e(t){return null===t||"object"!==(void 0===t?"undefined":_e(t))}t.isUnknown=P(Ei.Unknown),t.isGet=P(Ei.Get),t.isConcat=P(Ei.Concat),t.isHelper=P(Ei.Helper),t.isHasBlock=P(Ei.HasBlock),t.isHasBlockParams=P(Ei.HasBlockParams),t.isUndefined=P(Ei.Undefined),t.isClientSide=P(Ei.ClientSideExpression),t.isMaybeLocal=P(Ei.MaybeLocal),t.isPrimitiveValue=e})(Ci||(Ci={}))
var Ai;(function(t){function e(t){return t[0]===Ei.StaticAttr||t[0]===Ei.DynamicAttr||t[0]===Ei.TrustingAttr}function n(t){return t[0]===Ei.StaticArg||t[0]===Ei.DynamicArg}function i(t){return e(t)||n(t)}function r(t){return t[1]}t.isText=P(Ei.Text),t.isAppend=P(Ei.Append),t.isComment=P(Ei.Comment),t.isModifier=P(Ei.Modifier),t.isBlock=P(Ei.Block),t.isComponent=P(Ei.Component),t.isOpenElement=P(Ei.OpenElement),t.isFlushElement=P(Ei.FlushElement),t.isCloseElement=P(Ei.CloseElement),t.isStaticAttr=P(Ei.StaticAttr),t.isDynamicAttr=P(Ei.DynamicAttr),t.isYield=P(Ei.Yield),t.isPartial=P(Ei.Partial),t.isDynamicArg=P(Ei.DynamicArg),t.isStaticArg=P(Ei.StaticArg),t.isTrustingAttr=P(Ei.TrustingAttr),t.isDebugger=P(Ei.Debugger),t.isClientSide=P(Ei.ClientSideStatement),t.isAttribute=e,t.isArgument=n,t.isParameter=i,t.getParameterName=r})(Ai||(Ai={}))
var Ni;(function(t){t[t.OpenComponentElement=0]="OpenComponentElement",t[t.DidCreateElement=1]="DidCreateElement",t[t.DidRenderLayout=2]="DidRenderLayout",t[t.FunctionExpression=3]="FunctionExpression"})(Ni||(Ni={}))
var xi=function t(e){ke(this,t),this.handle=e},Oi=function t(e,n){ke(this,t),this.handle=e,this.symbolTable=n},Ti=function(){function t(e){ke(this,t),this.env=e}return t.prototype.wrapLayout=function(t){this.inner=new Di(this.env,t)},t.prototype.fromLayout=function(t,e){this.inner=new Ri(this.env,t,e)},t.prototype.compile=function(){return this.inner.compile()},Se(t,[{key:"tag",get:function(){return this.inner.tag}},{key:"attrs",get:function(){return this.inner.attrs}}]),t}(),Di=function(){function t(e,n){ke(this,t),this.env=e,this.layout=n,this.tag=new Mi,this.attrs=new Li}return t.prototype.compile=function(){var t=this.env,e=this.layout,n={templateMeta:e.meta,symbols:e.symbols,asPartial:!1},i=this.tag.getDynamic(),r=this.tag.getStatic(),o=U(t,n)
if(o.startLabels(),i?(o.fetch(He.s1),z(i,o),o.dup(),o.load(He.s1),o.test("simple"),o.jumpUnless("BODY"),o.fetch(He.s1),o.pushComponentOperations(),o.openDynamicElement()):r&&(o.pushComponentOperations(),o.openElementWithOperations(r)),i||r){o.didCreateElement(He.s0)
for(var s=this.attrs.buffer,a=0;a<s.length;a++)J(s[a],o)
o.flushElement()}o.label("BODY"),o.invokeStatic(e.asBlock()),i?(o.fetch(He.s1),o.test("simple"),o.jumpUnless("END"),o.closeElement()):r&&o.closeElement(),o.label("END"),o.didRenderLayout(He.s0),i&&o.load(He.s1),o.stopLabels()
var u=o.start
o.finalize()
return new Oi(u,{meta:n,hasEval:e.hasEval,symbols:e.symbols.concat([Vi])})},t}(),Ri=function(){function t(e,n,i){ke(this,t),this.env=e,this.componentName=n,this.layout=i,this.attrs=new Li}return t.prototype.compile=function(){var t=this.env
return this.layout.asLayout(this.componentName,this.attrs.buffer).compileDynamic(t)},Se(t,[{key:"tag",get:function(){throw new Error("BUG: Cannot call `tag` on an UnwrappedBuilder")}}]),t}(),Mi=function(){function t(){ke(this,t),this.isDynamic=null,this.isStatic=null,this.staticTagName=null,this.dynamicTagName=null}return t.prototype.getDynamic=function(){if(this.isDynamic)return this.dynamicTagName},t.prototype.getStatic=function(){if(this.isStatic)return this.staticTagName},t.prototype.static=function(t){this.isStatic=!0,this.staticTagName=t},t.prototype.dynamic=function(t){this.isDynamic=!0,this.dynamicTagName=[Ei.ClientSideExpression,Ni.FunctionExpression,t]},t}(),Li=function(){function t(){ke(this,t),this.buffer=[]}return t.prototype.static=function(t,e){this.buffer.push([Ei.StaticAttr,t,e,null])},t.prototype.dynamic=function(t,e){this.buffer.push([Ei.DynamicAttr,t,[Ei.ClientSideExpression,Ni.FunctionExpression,e],null])},t}(),Bi=function(){function t(e){ke(this,t),this.builder=e,this.env=e.env}return t.prototype.static=function(t,e){var n=e[0],i=e[1],r=e[2],o=e[3],s=this.builder
s.pushComponentManager(t),s.invokeComponent(null,n,i,r,o)},t.prototype.dynamic=function(t,e,n){function i(t,n){return e(t,n,p)}var r=n[0],o=n[1],s=n[2],a=n[3],u=this.builder
if(!t||0===t.length)throw new Error("Dynamic syntax without an argument")
var p=this.builder.meta.templateMeta
u.startLabels(),u.pushFrame(),u.returnTo("END"),u.compileArgs(t[0],t[1],!0),u.helper(i),u.dup(),u.test("simple"),u.enter(2),u.jumpUnless("ELSE"),u.pushDynamicComponentManager(),u.invokeComponent(null,r,o,s,a),u.label("ELSE"),u.exit(),u.return(),u.label("END"),u.popFrame(),u.stopLabels()},t}(),Fi=function(){function t(e,n,i){ke(this,t),this.meta=e,this.statements=n,this.parameters=i}return t.prototype.scan=function(){return new tr(this.statements,{parameters:this.parameters,meta:this.meta})},t}(),Ii=function(){function t(){ke(this,t),this.labels=l(),this.targets=[]}return t.prototype.label=function(t,e){this.labels[t]=e},t.prototype.target=function(t,e,n){this.targets.push({at:t,Target:e,target:n})},t.prototype.patch=function(t){for(var e=this.targets,n=this.labels,i=0;i<e.length;i++){var r=e[i],o=r.at,s=r.target,a=n[s]-o
t.heap.setbyaddr(o+1,a)}},t}(),Pi=function(){function t(e,n,i){ke(this,t),this.env=e,this.meta=n,this.program=i,this.labelsStack=new Fe,this.constants=i.constants,this.heap=i.heap,this.start=this.heap.malloc()}return t.prototype.upvars=function(t){return u(t)},t.prototype.reserve=function(t){this.push(t,0,0,0)},t.prototype.push=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0
this.heap.push(t),this.heap.push(e),this.heap.push(n),this.heap.push(i)},t.prototype.finalize=function(){return this.push(22),this.heap.finishMalloc(this.start),this.start},t.prototype.pushArgs=function(t){this.push(58,!0===t?1:0)},t.prototype.startLabels=function(){this.labelsStack.push(new Ii)},t.prototype.stopLabels=function(){i(this.labelsStack.pop(),"unbalanced push and pop labels").patch(this.program)},t.prototype.pushComponentManager=function(t){this.push(56,this.other(t))},t.prototype.pushDynamicComponentManager=function(){this.push(57)},t.prototype.prepareArgs=function(t){this.push(59,t)},t.prototype.createComponent=function(t,e,n){var i=(!0===e?1:0)|(!0===n?1:0)<<1
this.push(60,i,t)},t.prototype.registerComponentDestructor=function(t){this.push(61,t)},t.prototype.beginComponentTransaction=function(){this.push(65)},t.prototype.commitComponentTransaction=function(){this.push(66)},t.prototype.pushComponentOperations=function(){this.push(62)},t.prototype.getComponentSelf=function(t){this.push(63,t)},t.prototype.getComponentLayout=function(t){this.push(64,t)},t.prototype.didCreateElement=function(t){this.push(67,t)},t.prototype.didRenderLayout=function(t){this.push(68,t)},t.prototype.getPartialTemplate=function(){this.push(69)},t.prototype.resolveMaybeLocal=function(t){this.push(70,this.string(t))},t.prototype.debugger=function(t,e){this.push(71,this.constants.other(t),this.constants.array(e))},t.prototype.dynamicContent=function(t){this.push(26,this.other(t))},t.prototype.cautiousAppend=function(){this.dynamicContent(new vi)},t.prototype.trustingAppend=function(){this.dynamicContent(new bi)},t.prototype.text=function(t){this.push(24,this.constants.string(t))},t.prototype.openPrimitiveElement=function(t){this.push(27,this.constants.string(t))},t.prototype.openElementWithOperations=function(t){this.push(28,this.constants.string(t))},t.prototype.openDynamicElement=function(){this.push(29)},t.prototype.flushElement=function(){this.push(33)},t.prototype.closeElement=function(){this.push(34)},t.prototype.staticAttr=function(t,e,n){var i=this.constants.string(t),r=e?this.constants.string(e):0,o=this.constants.string(n)
this.push(30,i,o,r)},t.prototype.dynamicAttrNS=function(t,e,n){var i=this.constants.string(t),r=this.constants.string(e)
this.push(32,i,r,!0===n?1:0)},t.prototype.dynamicAttr=function(t,e){var n=this.constants.string(t)
this.push(31,n,!0===e?1:0)},t.prototype.comment=function(t){var e=this.constants.string(t)
this.push(25,e)},t.prototype.modifier=function(t){this.push(35,this.other(t))},t.prototype.putIterator=function(){this.push(54)},t.prototype.enterList=function(t){this.reserve(52),this.labels.target(this.pos,52,t)},t.prototype.exitList=function(){this.push(53)},t.prototype.iterate=function(t){this.reserve(55),this.labels.target(this.pos,55,t)},t.prototype.setVariable=function(t){this.push(4,t)},t.prototype.getVariable=function(t){this.push(5,t)},t.prototype.getProperty=function(t){this.push(6,this.string(t))},t.prototype.getBlock=function(t){this.push(8,t)},t.prototype.hasBlock=function(t){this.push(9,t)},t.prototype.hasBlockParams=function(t){this.push(10,t)},t.prototype.concat=function(t){this.push(11,t)},t.prototype.function=function(t){this.push(2,this.func(t))},t.prototype.load=function(t){this.push(17,t)},t.prototype.fetch=function(t){this.push(18,t)},t.prototype.dup=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He.sp,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return this.push(15,t,e)},t.prototype.pop=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
return this.push(16,t)},t.prototype.pushRemoteElement=function(){this.push(36)},t.prototype.popRemoteElement=function(){this.push(37)},t.prototype.label=function(t){this.labels.label(t,this.nextPos)},t.prototype.pushRootScope=function(t,e){this.push(19,t,e?1:0)},t.prototype.pushChildScope=function(){this.push(20)},t.prototype.popScope=function(){this.push(21)},t.prototype.returnTo=function(t){this.reserve(23),this.labels.target(this.pos,23,t)},t.prototype.pushDynamicScope=function(){this.push(39)},t.prototype.popDynamicScope=function(){this.push(40)},t.prototype.pushImmediate=function(t){this.push(13,this.other(t))},t.prototype.primitive=function(t){var e=0,n=void 0
switch(void 0===t?"undefined":_e(t)){case"number":n=t
break
case"string":n=this.string(t),e=1
break
case"boolean":n=0|t,e=2
break
case"object":n=2,e=2
break
case"undefined":n=3,e=2
break
default:throw new Error("Invalid primitive passed to pushPrimitive")}this.push(14,e<<30|n)},t.prototype.helper=function(t){this.push(1,this.func(t))},t.prototype.pushBlock=function(t){this.push(7,this.block(t))},t.prototype.bindDynamicScope=function(t){this.push(38,this.names(t))},t.prototype.enter=function(t){this.push(49,t)},t.prototype.exit=function(){this.push(50)},t.prototype.return=function(){this.push(22)},t.prototype.pushFrame=function(){this.push(47)},t.prototype.popFrame=function(){this.push(48)},t.prototype.compileDynamicBlock=function(){this.push(41)},t.prototype.invokeDynamic=function(t){this.push(43,this.other(t))},t.prototype.invokeStatic=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=t.symbolTable.parameters,i=n.length,r=Math.min(e,i)
if(this.pushFrame(),r){this.pushChildScope()
for(var o=0;o<r;o++)this.dup(He.fp,e-o),this.setVariable(n[o])}var s=this.constants.block(t)
this.push(42,s),r&&this.popScope(),this.popFrame()},t.prototype.test=function(t){var e=void 0
if("const"===t)e=Mn
else if("simple"===t)e=Ln
else if("environment"===t)e=Bn
else{if("function"!=typeof t)throw new Error("unreachable")
e=t}var n=this.constants.function(e)
this.push(51,n)},t.prototype.jump=function(t){this.reserve(44),this.labels.target(this.pos,44,t)},t.prototype.jumpIf=function(t){this.reserve(45),this.labels.target(this.pos,45,t)},t.prototype.jumpUnless=function(t){this.reserve(46),this.labels.target(this.pos,46,t)},t.prototype.string=function(t){return this.constants.string(t)},t.prototype.names=function(t){for(var e=[],n=0;n<t.length;n++){var i=t[n]
e[n]=this.constants.string(i)}return this.constants.array(e)},t.prototype.symbols=function(t){return this.constants.array(t)},t.prototype.other=function(t){return this.constants.other(t)},t.prototype.block=function(t){return t?this.constants.block(t):0},t.prototype.func=function(t){return this.constants.function(t)},Se(t,[{key:"pos",get:function(){return o(this.heap.size())}},{key:"nextPos",get:function(){return this.heap.size()}},{key:"labels",get:function(){return i(this.labelsStack.current,"bug: not in a label stack")}}]),t}(),ji=function(t){function e(n,i){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.program
ke(this,e)
var o=Ee(this,t.call(this,n,i,r))
return o.component=new Bi(o),o}return we(e,t),e.prototype.compileArgs=function(t,e,n){var i=0
if(t){for(var r=0;r<t.length;r++)z(t[r],this)
i=t.length}this.pushImmediate(i)
var o=ze
if(e){o=e[0]
for(var s=e[1],a=0;a<s.length;a++)z(s[a],this)}this.pushImmediate(o),this.pushArgs(n)},e.prototype.compile=function(t){return V(t)?t.compile(this):t},e.prototype.guardedAppend=function(t,e){this.startLabels(),this.pushFrame(),this.returnTo("END"),z(t,this),this.dup(),this.test(function(t){return mi.create(t)}),this.enter(2),this.jumpUnless("ELSE"),this.pushDynamicComponentManager(),this.invokeComponent(null,null,null,null,null),this.exit(),this.return(),this.label("ELSE"),e?this.trustingAppend():this.cautiousAppend(),this.exit(),this.return(),this.label("END"),this.popFrame(),this.stopLabels()},e.prototype.invokeComponent=function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null
this.fetch(He.s0),this.dup(He.sp,1),this.load(He.s0),this.pushBlock(i),this.pushBlock(r),this.compileArgs(e,n,!1),this.prepareArgs(He.s0),this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent(He.s0,null!==i,null!==r),this.registerComponentDestructor(He.s0),this.getComponentSelf(He.s0),this.getComponentLayout(He.s0),this.invokeDynamic(new Wi(t&&t.scan())),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction(),this.load(He.s0)},e.prototype.template=function(t){return t?new Fi(this.meta,t.statements,t.parameters):null},e}(Pi),Ui=Ei,Vi="&attrs",Hi=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0
ke(this,t),this.offset=e,this.names=l(),this.funcs=[]}return t.prototype.add=function(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1},t.prototype.compile=function(t,e){var n=t[this.offset],i=this.names[n],r=this.funcs[i]
s(!!r,"expected an implementation for "+(0===this.offset?Ui[t[0]]:Ni[t[1]])),r(t,e)},t}(),zi=new Hi,Gi=new Hi(1)
zi.add(Ui.Text,function(t,e){e.text(t[1])}),zi.add(Ui.Comment,function(t,e){e.comment(t[1])}),zi.add(Ui.CloseElement,function(t,e){e.closeElement()}),zi.add(Ui.FlushElement,function(t,e){e.flushElement()}),zi.add(Ui.Modifier,function(t,e){var n=e.env,i=e.meta,r=t[1],o=t[2],s=t[3]
if(!n.hasModifier(r,i.templateMeta))throw new Error("Compile Error "+r+" is not a modifier: Helpers may not be used in the element form.")
e.compileArgs(o,s,!0),e.modifier(n.lookupModifier(r,i.templateMeta))}),zi.add(Ui.StaticAttr,function(t,e){var n=t[1],i=t[2],r=t[3]
e.staticAttr(n,r,i)}),zi.add(Ui.DynamicAttr,function(t,e){H(t,!1,e)}),zi.add(Ui.TrustingAttr,function(t,e){H(t,!0,e)}),zi.add(Ui.OpenElement,function(t,e){e.openPrimitiveElement(t[1])}),Gi.add(Ni.OpenComponentElement,function(t,e){e.pushComponentOperations(),e.openElementWithOperations(t[2])}),Gi.add(Ni.DidCreateElement,function(t,e){e.didCreateElement(He.s0)}),Gi.add(Ni.DidRenderLayout,function(t,e){e.didRenderLayout(He.s0)}),zi.add(Ui.Append,function(t,e){var n=t[1],i=t[2]
if(!0!==(e.env.macros().inlines.compile(t,e)||n)){var r=Ki.isGet(n),o=Ki.isMaybeLocal(n)
i?e.guardedAppend(n,!0):r||o?e.guardedAppend(n,!1):(z(n,e),e.cautiousAppend())}}),zi.add(Ui.Block,function(t,e){var n=t[1],i=t[2],r=t[3],o=t[4],s=t[5],a=e.template(o),u=e.template(s),p=a&&a.scan(),c=u&&u.scan()
e.env.macros().blocks.compile(n,i,r,p,c,e)})
var Wi=function(){function t(e){ke(this,t),this.attrs=e}return t.prototype.invoke=function(t,e){var n=e.symbolTable,i=n.symbols,r=n.hasEval,o=t.stack,a=t.pushRootScope(i.length+1,!0)
a.bindSelf(o.pop()),a.bindBlock(i.indexOf(Vi)+1,this.attrs)
var u=null
r&&(i.indexOf("$eval")+1,u=l())
for(var p=o.pop(),c=p.length-1;c>=0;c--){var h=i.indexOf(p[c]),f=o.pop();-1!==h&&a.bindSymbol(h+1,f),r&&(u[p[c]]=f)}var d=o.pop()
s("number"==typeof d,"[BUG] Incorrect value of positional argument count found during invoke-dynamic-layout."),o.pop(d)
var m=i.indexOf("&inverse"),y=o.pop();-1!==m&&a.bindBlock(m+1,y),u&&(u["&inverse"]=y)
var v=i.indexOf("&default"),g=o.pop();-1!==v&&a.bindBlock(v+1,g),u&&(u["&default"]=g),u&&a.bindEvalScope(u),t.pushFrame(),t.call(e.handle)},t.prototype.toJSON=function(){return{GlimmerDebug:"<invoke-dynamic-layout>"}},t}()
zi.add(Ui.Component,function(t,e){var n=t[1],i=t[2],r=t[3],o=t[4]
if(e.env.hasComponentDefinition(n,e.meta.templateMeta)){var s=e.template(o),a=new Fi(e.meta,i,ze),u=e.env.getComponentDefinition(n,e.meta.templateMeta)
e.pushComponentManager(u),e.invokeComponent(a,null,r,s&&s.scan())}else{if(o&&o.parameters.length)throw new Error("Compile Error: Cannot find component "+n)
e.openPrimitiveElement(n)
for(var p=0;p<i.length;p++)zi.compile(i[p],e)
if(e.flushElement(),o)for(var c=o.statements,h=0;h<c.length;h++)zi.compile(c[h],e)
e.closeElement()}})
var Ji=function(){function t(e,n){ke(this,t),this.outerSymbols=e,this.evalInfo=n}return t.prototype.invoke=function(t,e){var i=n(e),r=i.symbolTable.symbols,o=t.scope(),s=t.pushRootScope(r.length,!1)
s.bindCallerScope(o.getCallerScope()),s.bindEvalScope(o.getEvalScope()),s.bindSelf(o.getSelf())
for(var a=this.evalInfo,u=this.outerSymbols,p=l(),c=0;c<a.length;c++){var h=a[c],f=u[h-1],d=o.getSymbol(h)
p[f]=d}for(var m=o.getEvalScope(),y=0;y<r.length;y++){var v=r[y],g=y+1,b=m[v]
void 0!==b&&s.bind(g,b)}s.bindPartialMap(p),t.pushFrame(),t.call(i.handle)},t}()
zi.add(Ui.Partial,function(t,e){function n(t,e){var n=t.env
return g(e.positional.at(0),function(t){if("string"==typeof t&&t){if(!n.hasPartial(t,s))throw new Error('Could not find a partial named "'+t+'"')
return n.lookupPartial(t,s)}if(t)throw new Error('Could not find a partial named "'+String(t)+'"')
return null})}var i=t[1],r=t[2],o=e.meta,s=o.templateMeta,a=o.symbols
e.startLabels(),e.pushFrame(),e.returnTo("END"),z(i,e),e.pushImmediate(1),e.pushImmediate(ze),e.pushArgs(!0),e.helper(n),e.dup(),e.test("simple"),e.enter(2),e.jumpUnless("ELSE"),e.getPartialTemplate(),e.compileDynamicBlock(),e.invokeDynamic(new Ji(a,r)),e.popScope(),e.popFrame(),e.label("ELSE"),e.exit(),e.return(),e.label("END"),e.popFrame(),e.stopLabels()})
var qi=function(){function t(e){ke(this,t),this.callerCount=e}return t.prototype.invoke=function(t,e){var n=this.callerCount,i=t.stack
if(!e)return t.pushFrame(),void t.pushCallerScope()
var r=e.symbolTable,o=r.parameters,s=o?o.length:0,a=Math.min(n,s)
t.pushFrame(),t.pushCallerScope(s>0)
for(var u=t.scope(),p=0;p<a;p++)u.bindSymbol(o[p],i.fromBase(n-p))
t.call(e.handle)},t.prototype.toJSON=function(){return{GlimmerDebug:"<invoke-dynamic-yield caller-count="+this.callerCount+">"}},t}()
zi.add(Ui.Yield,function(t,e){var n=t[1],i=t[2],r=G(i,e)
e.getBlock(n),e.compileDynamicBlock(),e.invokeDynamic(new qi(r)),e.popScope(),e.popFrame(),r&&e.pop(r)}),zi.add(Ui.Debugger,function(t,e){var n=t[1]
e.debugger(e.meta.symbols,n)}),zi.add(Ui.ClientSideStatement,function(t,e){Gi.compile(t,e)})
var Yi=new Hi,Xi=new Hi(1),Ki=Ci
Yi.add(Ui.Unknown,function(t,e){var n=t[1]
e.env.hasHelper(n,e.meta.templateMeta)?Yi.compile([Ui.Helper,n,ze,null],e):e.meta.asPartial?e.resolveMaybeLocal(n):(e.getVariable(0),e.getProperty(n))}),Yi.add(Ui.Concat,function(t,e){for(var n=t[1],i=0;i<n.length;i++)z(n[i],e)
e.concat(n.length)}),Xi.add(Ni.FunctionExpression,function(t,e){e.function(t[2])}),Yi.add(Ui.Helper,function(t,e){var n=e.env,i=e.meta,r=t[1],o=t[2],s=t[3]
if(!n.hasHelper(r,i.templateMeta))throw new Error("Compile Error: "+r+" is not a helper")
e.compileArgs(o,s,!0),e.helper(n.lookupHelper(r,i.templateMeta))}),Yi.add(Ui.Get,function(t,e){var n=t[1],i=t[2]
e.getVariable(n)
for(var r=0;r<i.length;r++)e.getProperty(i[r])}),Yi.add(Ui.MaybeLocal,function(t,e){var n=t[1]
if(e.meta.asPartial){var i=n[0]
n=n.slice(1),e.resolveMaybeLocal(i)}else e.getVariable(0)
for(var r=0;r<n.length;r++)e.getProperty(n[r])}),Yi.add(Ui.Undefined,function(t,e){return e.primitive(void 0)}),Yi.add(Ui.HasBlock,function(t,e){e.hasBlock(t[1])}),Yi.add(Ui.HasBlockParams,function(t,e){e.hasBlockParams(t[1])}),Yi.add(Ui.ClientSideExpression,function(t,e){Xi.compile(t,e)})
var $i=function(){function t(){ke(this,t),this.names=l(),this.funcs=[]}return t.prototype.add=function(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1},t.prototype.addMissing=function(t){this.missing=t},t.prototype.compile=function(t,e,n,i,r,o){var a=this.names[t]
if(void 0===a){s(!!this.missing,t+" not found, and no catch-all block handler was registered")
s(!!(0,this.missing)(t,e,n,i,r,o),t+" not found, and the catch-all block handler didn't handle it")}else{(0,this.funcs[a])(e,n,i,r,o)}},t}(),Zi=new $i,Qi=function(){function t(){ke(this,t),this.names=l(),this.funcs=[]}return t.prototype.add=function(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1},t.prototype.addMissing=function(t){this.missing=t},t.prototype.compile=function(t,e){var n=t[1]
if(!Array.isArray(n))return["expr",n]
var i=void 0,r=void 0,o=void 0
if(n[0]===Ui.Helper)i=n[1],r=n[2],o=n[3]
else{if(n[0]!==Ui.Unknown)return["expr",n]
i=n[1],r=o=null}var s=this.names[i]
if(void 0===s&&this.missing){var a=this.missing,u=a(i,r,o,e)
return!1===u?["expr",n]:u}if(void 0!==s){var p=this.funcs[s],c=p(i,r,o,e)
return!1===c?["expr",n]:c}return["expr",n]},t}()
W(Zi,new Qi)
var tr=function(){function t(e,n){ke(this,t),this.statements=e,this.symbolTable=n,this.compiledStatic=null,this.compiledDynamic=null}return t.prototype.compileStatic=function(t){var e=this.compiledStatic
if(!e){var n=q(this.statements,this.symbolTable.meta,t)
n.finalize()
var i=n.start
e=this.compiledStatic=new xi(i)}return e},t.prototype.compileDynamic=function(t){var e=this.compiledDynamic
if(!e){var n=this.compileStatic(t)
e=new Oi(n.handle,this.symbolTable)}return e},t}(),er=Ei,nr=function(){function t(e,n){ke(this,t),this.block=e,this.env=n}return t.prototype.scanEntryPoint=function(t){var e=this.block,n=e.statements,i=e.symbols,r=e.hasEval
return new tr(n,{meta:t,symbols:i,hasEval:r})},t.prototype.scanBlock=function(t){var e=this.block,n=e.statements
return new tr(n,{meta:t,parameters:ze})},t.prototype.scanLayout=function(t,e,n){for(var i=this.block,r=i.statements,o=i.symbols,s=i.hasEval,a={meta:t,hasEval:s,symbols:o},u=[],p=void 0,c=!1,h=0;h<r.length;h++){var l=r[h]
if(Ai.isComponent(l)){var f=l[1]
this.env.hasComponentDefinition(f,t.templateMeta)?void 0===p&&f===n?(p=f,X(f,o,e,u),Y(l,u)):u.push(l):(void 0!==p?u.push([er.OpenElement,f]):(p=f,X(f,o,e,u)),Y(l,u))}else if(void 0===p&&Ai.isOpenElement(l))p=l[1],c=!0,X(p,o,e,u)
else{if(c)if(Ai.isFlushElement(l))c=!1
else if(Ai.isModifier(l))throw Error('Found modifier "'+l[1]+'" on the top-level element of "'+n+'". Modifiers cannot be on the top-level element')
u.push(l)}}return u.push([er.ClientSideStatement,Ni.DidRenderLayout]),new tr(u,a)},t}(),ir=function(){function t(){ke(this,t),this.references=[],this.strings=[],this.expressions=[],this.arrays=[],this.blocks=[],this.functions=[],this.others=[]}return t.prototype.getReference=function(t){return this.references[t-1]},t.prototype.reference=function(t){var e=this.references.length
return this.references.push(t),e+1},t.prototype.getString=function(t){return this.strings[t-1]},t.prototype.string=function(t){var e=this.strings.length
return this.strings.push(t),e+1},t.prototype.getExpression=function(t){return this.expressions[t-1]},t.prototype.getArray=function(t){return this.arrays[t-1]},t.prototype.getNames=function(t){for(var e=[],n=this.getArray(t),i=0;i<n.length;i++){var r=n[i]
e[i]=this.getString(r)}return e},t.prototype.array=function(t){var e=this.arrays.length
return this.arrays.push(t),e+1},t.prototype.getBlock=function(t){return this.blocks[t-1]},t.prototype.block=function(t){var e=this.blocks.length
return this.blocks.push(t),e+1},t.prototype.getFunction=function(t){return this.functions[t-1]},t.prototype.function=function(t){var e=this.functions.length
return this.functions.push(t),e+1},t.prototype.getOther=function(t){return this.others[t-1]},t.prototype.other=function(t){var e=this.others.length
return this.others.push(t),e+1},t}(),rr=["javascript:","vbscript:"],or=["A","BODY","LINK","IMG","IFRAME","BASE","FORM"],sr=["EMBED"],ar=["href","src","background","action"],ur=["src"],pr={BUTTON:{type:!0,form:!0},INPUT:{type:!0,form:!0,autocorrect:!0,list:!0},SELECT:{form:!0},OPTION:{form:!0},TEXTAREA:{form:!0},LABEL:{form:!0},FIELDSET:{form:!0},LEGEND:{form:!0},OBJECT:{form:!0}},cr={colgroup:{depth:2,before:"<table><colgroup>",after:"</colgroup></table>"},table:{depth:1,before:"<table>",after:"</table>"},tbody:{depth:2,before:"<table><tbody>",after:"</tbody></table>"},tfoot:{depth:2,before:"<table><tfoot>",after:"</tfoot></table>"},thead:{depth:2,before:"<table><thead>",after:"</thead></table>"},tr:{depth:3,before:"<table><tbody><tr>",after:"</tr></tbody></table>"}},hr="http://www.w3.org/2000/svg",lr="http://www.w3.org/2000/svg",fr={foreignObject:1,desc:1,title:1},dr=Object.create(null);["b","big","blockquote","body","br","center","code","dd","div","dl","dt","em","embed","h1","h2","h3","h4","h5","h6","head","hr","i","img","li","listing","main","meta","nobr","ol","p","pre","ruby","s","small","span","strong","strike","sub","sup","table","tt","u","ul","var"].forEach(function(t){return dr[t]=1})
var mr,yr="undefined"==typeof document?null:document,vr=function(){function t(e){ke(this,t),this.document=e,this.setupUselessElement()}return t.prototype.setupUselessElement=function(){this.uselessElement=this.document.createElement("div")},t.prototype.createElement=function(t,e){var n=void 0,i=void 0
if(e?(n=e.namespaceURI===lr||"svg"===t,i=fr[e.tagName]):(n="svg"===t,i=!1),n&&!i){if(dr[t])throw new Error("Cannot create a "+t+" inside an SVG context")
return this.document.createElementNS(lr,t)}return this.document.createElement(t)},t.prototype.insertBefore=function(t,e,n){t.insertBefore(e,n)},t.prototype.insertHTMLBefore=function(t,e,n){return lt(this.uselessElement,t,e,n)},t.prototype.createTextNode=function(t){return this.document.createTextNode(t)},t.prototype.createComment=function(t){return this.document.createComment(t)},t}();(function(t){var e=function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e.prototype.createElementNS=function(t,e){return this.document.createElementNS(t,e)},e.prototype.setAttribute=function(t,e,n,i){i?t.setAttributeNS(i,e,n):t.setAttribute(e,n)},e}(vr)
t.TreeConstruction=e
var n=e
n=pt(yr,n),n=it(yr,n),n=st(yr,n,lr),t.DOMTreeConstruction=n})(mr||(mr={}))
var gr=function(t){function e(n){ke(this,e)
var i=Ee(this,t.call(this,n))
return i.document=n,i.namespace=null,i}return we(e,t),e.prototype.setAttribute=function(t,e,n){t.setAttribute(e,n)},e.prototype.setAttributeNS=function(t,e,n,i){t.setAttributeNS(e,n,i)},e.prototype.removeAttribute=function(t,e){t.removeAttribute(e)},e.prototype.removeAttributeNS=function(t,e,n){t.removeAttributeNS(e,n)},e.prototype.insertNodeBefore=function(t,e,n){if(ft(e)){var i=e.firstChild,r=e.lastChild
return this.insertBefore(t,e,n),new $n(t,i,r)}return this.insertBefore(t,e,n),new Zn(t,e)},e.prototype.insertTextBefore=function(t,e,n){var i=this.createTextNode(n)
return this.insertBefore(t,i,e),i},e.prototype.insertBefore=function(t,e,n){t.insertBefore(e,n)},e.prototype.insertAfter=function(t,e,n){this.insertBefore(t,e,n.nextSibling)},e}(vr),br=gr
br=function(t,e){return t&&ct(t)?function(t){function e(n){ke(this,e)
var i=Ee(this,t.call(this,n))
return i.uselessComment=n.createComment(""),i}return we(e,t),e.prototype.insertHTMLBefore=function(e,n,i){if(null===i)return t.prototype.insertHTMLBefore.call(this,e,n,i)
var r=!1,o=n?n.previousSibling:e.lastChild
o&&o instanceof Text&&(r=!0,e.insertBefore(this.uselessComment,n))
var s=t.prototype.insertHTMLBefore.call(this,e,n,i)
return r&&e.removeChild(this.uselessComment),s},e}(e):e}(yr,br),br=function(t,e){if(!t)return e
if(!ot(t))return e
var n=t.createElement("div")
return function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e.prototype.insertHTMLBefore=function(e,i,r){if(null===r||""===r)return t.prototype.insertHTMLBefore.call(this,e,i,r)
var o=e.tagName.toLowerCase(),s=cr[o]
return void 0===s?t.prototype.insertHTMLBefore.call(this,e,i,r):rt(e,s,n,r,i)},e}(e)}(yr,br),br=function(t,e,n){if(!t)return e
if(!ut(t,n))return e
var i=t.createElement("div")
return function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e.prototype.insertHTMLBefore=function(e,r,o){return null===o||""===o?t.prototype.insertHTMLBefore.call(this,e,r,o):e.namespaceURI!==n?t.prototype.insertHTMLBefore.call(this,e,r,o):at(e,i,o,r)},e}(e)}(yr,br,lr)
var _r,kr=br,Sr=mr.DOMTreeConstruction,wr=function(){function t(e){ke(this,t),this.attr=e}return t.prototype.setAttribute=function(t,e,n,i){var r=t.getAppendOperations(),o=vt(n)
gt(o)||r.setAttribute(e,this.attr,o,i)},t.prototype.updateAttribute=function(t,e,n,i){null===n||void 0===n||!1===n?i?t.getDOM().removeAttributeNS(e,i,this.attr):t.getDOM().removeAttribute(e,this.attr):this.setAttribute(t,e,n)},t}(),Er=function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e.prototype.setAttribute=function(t,e,n,i){gt(n)||(e[this.attr]=n)},e.prototype.removeAttribute=function(t,e,n){var i=this.attr
n?t.getDOM().removeAttributeNS(e,n,i):t.getDOM().removeAttribute(e,i)},e.prototype.updateAttribute=function(t,e,n,i){e[this.attr]=n,gt(n)&&this.removeAttribute(t,e,i)},e}(wr),Cr=function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e.prototype.setAttribute=function(e,n,i){t.prototype.setAttribute.call(this,e,n,tt(e,n,this.attr,i))},e.prototype.updateAttribute=function(e,n,i){t.prototype.updateAttribute.call(this,e,n,tt(e,n,this.attr,i))},e}(Er),Ar=function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e.prototype.setAttribute=function(t,e,n){e.value=L(n)},e.prototype.updateAttribute=function(t,e,n){var i=e,r=i.value,o=L(n)
r!==o&&(i.value=o)},e}(wr),Nr=new Ar("value"),xr=function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e.prototype.setAttribute=function(t,e,n){if(null!==n&&void 0!==n&&!1!==n){e.selected=!0}},e.prototype.updateAttribute=function(t,e,n){var i=e
i.selected=!!n},e}(Er),Or=new xr("selected"),Tr=function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e.prototype.setAttribute=function(e,n,i){t.prototype.setAttribute.call(this,e,n,tt(e,n,this.attr,i))},e.prototype.updateAttribute=function(e,n,i,r){t.prototype.updateAttribute.call(this,e,n,tt(e,n,this.attr,i))},e}(wr),Dr=function(){function t(e,n,i,r){ke(this,t),this.slots=e,this.callerScope=n,this.evalScope=i,this.partialMap=r}return t.root=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=new Array(n+1),r=0;r<=n;r++)i[r]=kn
return new t(i,null,null,null).init({self:e})},t.sized=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=new Array(e+1),i=0;i<=e;i++)n[i]=kn
return new t(n,null,null,null)},t.prototype.init=function(t){var e=t.self
return this.slots[0]=e,this},t.prototype.getSelf=function(){return this.get(0)},t.prototype.getSymbol=function(t){return this.get(t)},t.prototype.getBlock=function(t){return this.get(t)},t.prototype.getEvalScope=function(){return this.evalScope},t.prototype.getPartialMap=function(){return this.partialMap},t.prototype.bind=function(t,e){this.set(t,e)},t.prototype.bindSelf=function(t){this.set(0,t)},t.prototype.bindSymbol=function(t,e){this.set(t,e)},t.prototype.bindBlock=function(t,e){this.set(t,e)},t.prototype.bindEvalScope=function(t){this.evalScope=t},t.prototype.bindPartialMap=function(t){this.partialMap=t},t.prototype.bindCallerScope=function(t){this.callerScope=t},t.prototype.getCallerScope=function(){return this.callerScope},t.prototype.child=function(){return new t(this.slots.slice(),this.callerScope,this.evalScope,this.partialMap)},t.prototype.get=function(t){if(t>=this.slots.length)throw new RangeError("BUG: cannot get $"+t+" from scope; length="+this.slots.length)
return this.slots[t]},t.prototype.set=function(t,e){if(t>=this.slots.length)throw new RangeError("BUG: cannot get $"+t+" from scope; length="+this.slots.length)
this.slots[t]=e},t}(),Rr=function(){function t(){ke(this,t),this.scheduledInstallManagers=[],this.scheduledInstallModifiers=[],this.scheduledUpdateModifierManagers=[],this.scheduledUpdateModifiers=[],this.createdComponents=[],this.createdManagers=[],this.updatedComponents=[],this.updatedManagers=[],this.destructors=[]}return t.prototype.didCreate=function(t,e){this.createdComponents.push(t),this.createdManagers.push(e)},t.prototype.didUpdate=function(t,e){this.updatedComponents.push(t),this.updatedManagers.push(e)},t.prototype.scheduleInstallModifier=function(t,e){this.scheduledInstallManagers.push(e),this.scheduledInstallModifiers.push(t)},t.prototype.scheduleUpdateModifier=function(t,e){this.scheduledUpdateModifierManagers.push(e),this.scheduledUpdateModifiers.push(t)},t.prototype.didDestroy=function(t){this.destructors.push(t)},t.prototype.commit=function(){for(var t=this.createdComponents,e=this.createdManagers,n=0;n<t.length;n++){var i=t[n]
e[n].didCreate(i)}for(var r=this.updatedComponents,o=this.updatedManagers,s=0;s<r.length;s++){var a=r[s]
o[s].didUpdate(a)}for(var u=this.destructors,p=0;p<u.length;p++)u[p].destroy()
for(var c=this.scheduledInstallManagers,h=this.scheduledInstallModifiers,l=0;l<c.length;l++){var f=c[l],d=h[l]
f.install(d)}for(var m=this.scheduledUpdateModifierManagers,y=this.scheduledUpdateModifiers,v=0;v<m.length;v++){var g=m[v],b=y[v]
g.update(b)}},t}(),Mr=function(){function t(e){ke(this,t),this.heap=e,this.offset=0}return Se(t,[{key:"type",get:function(){return this.heap.getbyaddr(this.offset)}},{key:"op1",get:function(){return this.heap.getbyaddr(this.offset+1)}},{key:"op2",get:function(){return this.heap.getbyaddr(this.offset+2)}},{key:"op3",get:function(){return this.heap.getbyaddr(this.offset+3)}}]),t}();(function(t){t[t.Allocated=0]="Allocated",t[t.Freed=1]="Freed",t[t.Purged=2]="Purged",t[t.Pointer=3]="Pointer"})(_r||(_r={}))
var Lr,Br=function(){function t(){ke(this,t),this.heap=[],this.offset=0,this.handle=0,this.table=[]}return t.prototype.push=function(t){this.heap[this.offset++]=t},t.prototype.getbyaddr=function(t){return this.heap[t]},t.prototype.setbyaddr=function(t,e){this.heap[t]=e},t.prototype.malloc=function(){this.table.push(this.offset,0,0)
var t=this.handle
return this.handle+=3,t},t.prototype.finishMalloc=function(t){var e=this.table[t],n=this.offset
this.table[t+1]=n-e},t.prototype.size=function(){return this.offset},t.prototype.getaddr=function(t){return this.table[t]},t.prototype.gethandle=function(t){this.table.push(t,0,_r.Pointer)
var e=this.handle
return this.handle+=3,e},t.prototype.sizeof=function(t){return-1},t.prototype.free=function(t){this.table[t+2]=1},t.prototype.compact=function(){for(var t=0,e=this.table,n=this.table.length,i=this.heap,r=0;r<n;r+=3){var o=e[r],s=e[r+1],a=e[r+2]
if(a!==_r.Purged)if(a===_r.Freed)e[r+2]=2,t+=s
else if(a===_r.Allocated){for(var u=o;u<=r+s;u++)i[u-t]=i[u]
e[r]=o-t}else a===_r.Pointer&&(e[r]=o-t)}this.offset=this.offset-t},t}(),Fr=function(){function t(){ke(this,t),this.heap=new Br,this._opcode=new Mr(this.heap),this.constants=new ir}return t.prototype.opcode=function(t){return this._opcode.offset=t,this._opcode},t}(),Ir=function(){function t(e){var n=e.appendOperations,i=e.updateOperations
ke(this,t),this._macros=null,this._transaction=null,this.program=new Fr,this.appendOperations=n,this.updateOperations=i}return t.prototype.toConditionalReference=function(t){return new Cn(t)},t.prototype.getAppendOperations=function(){return this.appendOperations},t.prototype.getDOM=function(){return this.updateOperations},t.prototype.getIdentity=function(t){return c(t)+""},t.prototype.begin=function(){s(!this._transaction,"a glimmer transaction was begun, but one already exists. You may have a nested transaction"),this._transaction=new Rr},t.prototype.didCreate=function(t,e){this.transaction.didCreate(t,e)},t.prototype.didUpdate=function(t,e){this.transaction.didUpdate(t,e)},t.prototype.scheduleInstallModifier=function(t,e){this.transaction.scheduleInstallModifier(t,e)},t.prototype.scheduleUpdateModifier=function(t,e){this.transaction.scheduleUpdateModifier(t,e)},t.prototype.didDestroy=function(t){this.transaction.didDestroy(t)},t.prototype.commit=function(){var t=this.transaction
this._transaction=null,t.commit()},t.prototype.attributeFor=function(t,e,n,i){return dt(t,e,n,void 0===i?null:i)},t.prototype.macros=function(){var t=this._macros
return t||(this._macros=t=this.populateBuiltins()),t},t.prototype.populateBuiltins=function(){return W()},Se(t,[{key:"transaction",get:function(){return i(this._transaction,"must be in a transaction")}}]),t}(),Pr=function(){function t(e,n){var i=n.alwaysRevalidate,r=void 0!==i&&i
ke(this,t),this.frameStack=new Fe,this.env=e,this.constants=e.program.constants,this.dom=e.getDOM(),this.alwaysRevalidate=r}return t.prototype.execute=function(t,e){var n=this.frameStack
for(this.try(t,e);;){if(n.isEmpty())break
var i=this.frame.nextStatement()
null!==i?i.evaluate(this):this.frameStack.pop()}},t.prototype.goto=function(t){this.frame.goto(t)},t.prototype.try=function(t,e){this.frameStack.push(new zr(this,t,e))},t.prototype.throw=function(){this.frame.handleException(),this.frameStack.pop()},t.prototype.evaluateOpcode=function(t){t.evaluate(this)},Se(t,[{key:"frame",get:function(){return i(this.frameStack.current,"bug: expected a frame")}}]),t}(),jr=function(t){function e(n,i,r,o){ke(this,e)
var s=Ee(this,t.call(this))
s.start=n,s.type="block",s.next=null,s.prev=null
var a=i.env,u=i.scope,p=i.dynamicScope,c=i.stack
return s.children=o,s.env=a,s.scope=u,s.dynamicScope=p,s.stack=c,s.bounds=r,s}return we(e,t),e.prototype.parentElement=function(){return this.bounds.parentElement()},e.prototype.firstNode=function(){return this.bounds.firstNode()},e.prototype.lastNode=function(){return this.bounds.lastNode()},e.prototype.evaluate=function(t){t.try(this.children,null)},e.prototype.destroy=function(){this.bounds.destroy()},e.prototype.didDestroy=function(){this.env.didDestroy(this.bounds)},e.prototype.toJSON=function(){var t=l()
return t.guid=""+this._guid,{guid:this._guid,type:this.type,details:t,children:this.children.toArray().map(function(t){return t.toJSON()})}},e}(qe),Ur=function(t){function e(n,i,r,o){ke(this,e)
var s=Ee(this,t.call(this,n,i,r,o))
return s.type="try",s.tag=s._tag=an.create(Qe),s}return we(e,t),e.prototype.didInitializeChildren=function(){this._tag.inner.update(m(this.children))},e.prototype.evaluate=function(t){t.try(this.children,this)},e.prototype.handleException=function(){var t=this,e=this.env,n=this.bounds,i=this.children,r=this.scope,o=this.dynamicScope,s=this.start,a=this.stack,u=this.prev,p=this.next
i.clear()
var c=ni.resume(e,n,n.reset(e)),h=new Jr(e,r,o,c),l=new Pe
h.execute(s,function(e){e.stack=Wr.restore(a),e.updatingOpcodeStack.push(l),e.updateWith(t),e.updatingOpcodeStack.push(i)}),this.prev=u,this.next=p},e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this),n=e.details
return n||(n=e.details={}),t.prototype.toJSON.call(this)},e}(jr),Vr=function(){function t(e,n){ke(this,t),this.opcode=e,this.marker=n,this.didInsert=!1,this.didDelete=!1,this.map=e.map,this.updating=e.children}return t.prototype.insert=function(t,e,n,i){var r=this.map,o=this.opcode,s=this.updating,a=null,u=null
i?(u=r[i],a=u.bounds.firstNode()):a=this.marker
var p=o.vmForInsertion(a),c=null,h=o.start
p.execute(h,function(i){r[t]=c=i.iterate(n,e),i.updatingOpcodeStack.push(new Pe),i.updateWith(c),i.updatingOpcodeStack.push(c.children)}),s.insertBefore(c,u),this.didInsert=!0},t.prototype.retain=function(t,e,n){},t.prototype.move=function(t,e,n,i){var r=this.map,o=this.updating,s=r[t],a=r[i]||null
i?C(s,a.firstNode()):C(s,this.marker),o.remove(s),o.insertBefore(s,a)},t.prototype.delete=function(t){var e=this.map,n=e[t]
n.didDestroy(),A(n),this.updating.remove(n),delete e[t],this.didDelete=!0},t.prototype.done=function(){this.opcode.didInitializeChildren(this.didInsert||this.didDelete)},t}(),Hr=function(t){function e(n,i,r,o,s){ke(this,e)
var a=Ee(this,t.call(this,n,i,r,o))
a.type="list-block",a.map=l(),a.lastIterated=Ye,a.artifacts=s
var u=a._tag=an.create(Qe)
return a.tag=y([s.tag,u]),a}return we(e,t),e.prototype.didInitializeChildren=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
this.lastIterated=this.artifacts.tag.value(),t&&this._tag.inner.update(m(this.children))},e.prototype.evaluate=function(e){var n=this.artifacts,r=this.lastIterated
if(!n.tag.validate(r)){var o=this.bounds,s=e.dom,a=s.createComment("")
s.insertAfter(o.parentElement(),a,i(o.lastNode(),"can't insert after an empty bounds"))
var u=new Vr(this,a)
new vn({target:u,artifacts:n}).sync(),this.parentElement().removeChild(a)}t.prototype.evaluate.call(this,e)},e.prototype.vmForInsertion=function(t){var e=this.env,n=this.scope,i=this.dynamicScope,r=ni.forInitialRender(this.env,this.bounds.parentElement(),t)
return new Jr(e,n,i,r)},e.prototype.toJSON=function(){var e=t.prototype.toJSON.call(this),n=this.map,i=Object.keys(n).map(function(t){return JSON.stringify(t)+": "+n[t]._guid}).join(", "),r=e.details
return r||(r=e.details={}),r.map="{"+i+"}",e},e}(jr),zr=function(){function t(e,n,i){ke(this,t),this.vm=e,this.ops=n,this.exceptionHandler=i,this.vm=e,this.ops=n,this.current=n.head()}return t.prototype.goto=function(t){this.current=t},t.prototype.nextStatement=function(){var t=this.current,e=this.ops
return t&&(this.current=e.nextNode(t)),t},t.prototype.handleException=function(){this.exceptionHandler&&this.exceptionHandler.handleException()},t}(),Gr=function(){function t(e,n,i){ke(this,t),this.env=e,this.updating=n,this.bounds=i}return t.prototype.rerender=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{alwaysRevalidate:!1},e=t.alwaysRevalidate,n=void 0!==e&&e,i=this.env,r=this.updating
new Pr(i,{alwaysRevalidate:n}).execute(r,this)},t.prototype.parentElement=function(){return this.bounds.parentElement()},t.prototype.firstNode=function(){return this.bounds.firstNode()},t.prototype.lastNode=function(){return this.bounds.lastNode()},t.prototype.opcodes=function(){return this.updating},t.prototype.handleException=function(){throw"this should never happen"},t.prototype.destroy=function(){this.bounds.destroy(),A(this.bounds)},t}(),Wr=function(){function t(e,n,i){ke(this,t),this.stack=e,this.fp=n,this.sp=i}return t.empty=function(){return new this([],0,-1)},t.restore=function(t){return new this(t.slice(),0,t.length-1)},t.prototype.isEmpty=function(){return-1===this.sp},t.prototype.push=function(t){this.stack[++this.sp]=t},t.prototype.dup=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.sp
this.push(this.stack[t])},t.prototype.pop=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this.stack[this.sp]
return this.sp-=t,e},t.prototype.peek=function(){return this.stack[this.sp]},t.prototype.fromBase=function(t){return this.stack[this.fp-t]},t.prototype.fromTop=function(t){return this.stack[this.sp-t]},t.prototype.capture=function(t){var e=this.sp+1,n=e-t
return this.stack.slice(n,e)},t.prototype.reset=function(){this.stack.length=0},t.prototype.toArray=function(){return this.stack.slice(this.fp,this.sp+1)},t}(),Jr=function(){function t(e,n,i,r){ke(this,t),this.env=e,this.elementStack=r,this.dynamicScopeStack=new Fe,this.scopeStack=new Fe,this.updatingOpcodeStack=new Fe,this.cacheGroups=new Fe,this.listBlockStack=new Fe,this.stack=Wr.empty(),this.pc=-1,this.ra=-1,this.s0=null,this.s1=null,this.t0=null,this.t1=null,this.env=e,this.heap=e.program.heap,this.constants=e.program.constants,this.elementStack=r,this.scopeStack.push(n),this.dynamicScopeStack.push(i)}return t.prototype.fetch=function(t){this.stack.push(this[He[t]])},t.prototype.load=function(t){this[He[t]]=this.stack.pop()},t.prototype.fetchValue=function(t){return this[He[t]]},t.prototype.loadValue=function(t,e){this[He[t]]=e},t.prototype.pushFrame=function(){this.stack.push(this.ra),this.stack.push(this.fp),this.fp=this.sp-1},t.prototype.popFrame=function(){this.sp=this.fp-1,this.ra=this.stack.fromBase(0),this.fp=this.stack.fromBase(-1)},t.prototype.goto=function(t){this.pc=o(this.pc+t)},t.prototype.call=function(t){var e=this.heap.getaddr(t)
this.ra=this.pc,this.pc=e},t.prototype.returnTo=function(t){this.ra=o(this.pc+t)},t.prototype.return=function(){this.pc=this.ra},t.initial=function(e,n,i,r,o){var s=Dr.root(n,o.symbolTable.symbols.length),a=new t(e,s,i,r)
return a.pc=a.heap.getaddr(o.handle),a.updatingOpcodeStack.push(new Pe),a},t.prototype.capture=function(t){return{dynamicScope:this.dynamicScope(),env:this.env,scope:this.scope(),stack:this.stack.capture(t)}},t.prototype.beginCacheGroup=function(){this.cacheGroups.push(this.updating().tail())},t.prototype.commitCacheGroup=function(){var t=new jn("END"),e=this.updating(),n=this.cacheGroups.pop(),i=n?e.nextNode(n):e.head(),r=e.tail(),o=m(new je(i,r)),s=new In(o,t)
e.insertBefore(s,i),e.append(new Pn(s)),e.append(t)},t.prototype.enter=function(t){var e=new Pe,n=this.capture(t),i=this.elements().pushUpdatableBlock(),r=new Ur(this.heap.gethandle(this.pc),n,i,e)
this.didEnter(r)},t.prototype.iterate=function(t,e){var n=this.stack
n.push(e),n.push(t)
var i=this.capture(2),r=this.elements().pushUpdatableBlock()
return new Ur(this.heap.gethandle(this.pc),i,r,new Pe)},t.prototype.enterItem=function(t,e){this.listBlock().map[t]=e,this.didEnter(e)},t.prototype.enterList=function(t){var e=new Pe,n=this.capture(0),i=this.elements().pushBlockList(e),r=this.stack.peek().artifacts,s=this.heap.gethandle(o(this.pc+t)),a=new Hr(s,n,i,e,r)
this.listBlockStack.push(a),this.didEnter(a)},t.prototype.didEnter=function(t){this.updateWith(t),this.updatingOpcodeStack.push(t.children)},t.prototype.exit=function(){this.elements().popBlock(),this.updatingOpcodeStack.pop(),this.updating().tail().didInitializeChildren()},t.prototype.exitList=function(){this.exit(),this.listBlockStack.pop()},t.prototype.updateWith=function(t){this.updating().append(t)},t.prototype.listBlock=function(){return i(this.listBlockStack.current,"expected a list block")},t.prototype.updating=function(){return i(this.updatingOpcodeStack.current,"expected updating opcode on the updating opcode stack")},t.prototype.elements=function(){return this.elementStack},t.prototype.scope=function(){return i(this.scopeStack.current,"expected scope on the scope stack")},t.prototype.dynamicScope=function(){return i(this.dynamicScopeStack.current,"expected dynamic scope on the dynamic scope stack")},t.prototype.pushChildScope=function(){this.scopeStack.push(this.scope().child())},t.prototype.pushCallerScope=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=i(this.scope().getCallerScope(),"pushCallerScope is called when a caller scope is present")
this.scopeStack.push(t?e.child():e)},t.prototype.pushDynamicScope=function(){var t=this.dynamicScope().child()
return this.dynamicScopeStack.push(t),t},t.prototype.pushRootScope=function(t,e){var n=Dr.sized(t)
return e&&n.bindCallerScope(this.scope()),this.scopeStack.push(n),n},t.prototype.popScope=function(){this.scopeStack.pop()},t.prototype.popDynamicScope=function(){this.dynamicScopeStack.pop()},t.prototype.newDestroyable=function(t){this.elements().newDestroyable(t)},t.prototype.getSelf=function(){return this.scope().getSelf()},t.prototype.referenceForSymbol=function(t){return this.scope().getSymbol(t)},t.prototype.execute=function(t,e){this.pc=this.heap.getaddr(t),e&&e(this)
for(var n=void 0;;)if(n=this.next(),n.done)break
return n.value},t.prototype.next=function(){var t=this.env,e=this.updatingOpcodeStack,n=this.elementStack,r=this.nextStatement(t),o=void 0
return null!==r?(We.evaluate(this,r,r.type),o={done:!1,value:null}):(this.stack.reset(),o={done:!0,value:new Gr(t,i(e.pop(),"there should be a final updating opcode stack"),n.popBlock())}),o},t.prototype.nextStatement=function(t){var e=this.pc
if(-1===e)return null
var n=t.program
return this.pc+=4,n.opcode(e)},t.prototype.evaluateOpcode=function(t){We.evaluate(this,t,t.type)},t.prototype.bindDynamicScope=function(t){for(var e=this.dynamicScope(),n=t.length-1;n>=0;n--){var i=this.constants.getString(t[n])
e.set(i,this.stack.pop())}},Se(t,[{key:"fp",get:function(){return this.stack.fp},set:function(t){this.stack.fp=t}},{key:"sp",get:function(){return this.stack.sp},set:function(t){this.stack.sp=t}}]),t}(),qr=function(){function t(e){ke(this,t),this.vm=e}return t.prototype.next=function(){return this.vm.next()},t}(),Yr=0,Xr=function(){function t(e,n,i,r){ke(this,t),this.id=e,this.meta=n,this.env=i,this.entryPoint=null,this.layout=null,this.partial=null,this.block=null,this.scanner=new nr(r,i),this.symbols=r.symbols,this.hasEval=r.hasEval}return t.prototype.render=function(t,e,n){var i=this.env,r=ni.forInitialRender(i,e,null),o=this.asEntryPoint().compileDynamic(i),s=Jr.initial(i,t,n,r,o)
return new qr(s)},t.prototype.asEntryPoint=function(){return this.entryPoint||(this.entryPoint=this.scanner.scanEntryPoint(this.compilationMeta())),this.entryPoint},t.prototype.asLayout=function(t,e){return this.layout||(this.layout=this.scanner.scanLayout(this.compilationMeta(),e||ze,t)),this.layout},t.prototype.asPartial=function(){return this.partial||(this.partial=this.scanner.scanEntryPoint(this.compilationMeta(!0))),this.partial},t.prototype.asBlock=function(){return this.block||(this.block=this.scanner.scanBlock(this.compilationMeta())),this.block},t.prototype.compilationMeta=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
return{templateMeta:this.meta,symbols:this.symbols,asPartial:t}},t}();(function(t){t[t.Element=0]="Element",t[t.Attribute=1]="Attribute",t[t.Text=2]="Text",t[t.CdataSection=3]="CdataSection",t[t.EntityReference=4]="EntityReference",t[t.Entity=5]="Entity",t[t.ProcessingInstruction=6]="ProcessingInstruction",t[t.Comment=7]="Comment",t[t.Document=8]="Document",t[t.DocumentType=9]="DocumentType",t[t.DocumentFragment=10]="DocumentFragment",t[t.Notation=11]="Notation"})(Lr||(Lr={}))
var Kr=function(){function t(e,n){ke(this,t),this.cache=St,this.inner=null,this.chains=null,this.lastParentValue=St,this._guid=0,this.tag=tn,this.parent=e,this.property=n}return t.prototype.value=function(){var t=this.lastParentValue,e=this.property,n=this.inner,i=this._parentValue()
if(null===i||void 0===i)return this.cache=void 0
if(t===i)n=this.inner
else{var r="object"===(void 0===i?"undefined":_e(i))?ro.for(i).referenceTypeFor(e):oo
n=this.inner=new r(i,e,this)}return this.cache=n.value()},t.prototype.get=function(e){var n=this._getChains()
return e in n?n[e]:n[e]=new t(this,e)},t.prototype.label=function(){return"[reference Direct]"},t.prototype._getChains=function(){return this.chains?this.chains:this.chains=l()},t.prototype._parentValue=function(){var t=this.parent.value()
return this.lastParentValue=t,t},t}(),$r=function(){function t(e){ke(this,t),this.chains=l(),this.tag=tn,this.object=e}return t.prototype.value=function(){return this.object},t.prototype.update=function(t){this.object=t},t.prototype.get=function(t){var e=this.chains
return t in e?e[t]:e[t]=new Kr(this,t)},t.prototype.chainFor=function(t){var e=this.chains
return t in e?e[t]:null},t.prototype.path=function(t){return t.split(".").reduce(function(t,e){return t.get(e)},this)},t.prototype.referenceFromParts=function(t){return t.reduce(function(t,e){return t.get(e)},this)},t.prototype.label=function(){return"[reference Root]"},t}(),Zr={destroy:function(){}},Qr=function(){function t(e,n){ke(this,t),this.tag=tn,this.parent=e}return t.prototype.chain=function(){return Zr},t.prototype.notify=function(){},t.prototype.value=function(){return this.parent[this.property]},t.prototype.get=function(e){return new t(this.parent[this.property],e)},t}(),to=function(){function t(e){ke(this,t),this.tag=tn,this.inner=e}return t.prototype.update=function(t){this.inner=t},t.prototype.chain=function(){return Zr},t.prototype.notify=function(){},t.prototype.value=function(){return this.inner},t.prototype.referenceFromParts=function(t){throw new Error("Not implemented")},t.prototype.chainFor=function(t){throw new Error("Not implemented")},t.prototype.get=function(t){return new Qr(this.inner,t)},t}(),eo=function(){function t(e){ke(this,t),this.object=e}return t.prototype.root=function(){return new to(this.object)},t}(),no="df8be4c8-4e89-44e2-a8f9-550c8dacdca7",io=Object.hasOwnProperty,ro=function(){function t(e,n){var i=n.RootReferenceFactory,r=n.DefaultPathReferenceFactory
ke(this,t),this.references=null,this.slots=null,this.referenceTypes=null,this.propertyMetadata=null,this.object=e,this.RootReferenceFactory=i||$r,this.DefaultPathReferenceFactory=r||oo}return t.for=function(e){if(null===e||void 0===e)return new t(e,{})
if(io.call(e,"_meta")&&e._meta)return e._meta
if(!Object.isExtensible(e))return new eo(e)
var n=t
if(e.constructor&&e.constructor[no]){n=e.constructor[no].InstanceMetaConstructor}else e[no]&&(n=e[no].InstanceMetaConstructor)
return e._meta=new n(e,{})},t.exists=function(t){return"object"===(void 0===t?"undefined":_e(t))&&t._meta},t.metadataForProperty=function(t){return null},t.prototype.addReference=function(t,e){var n=this.references=this.references||l();(n[t]=n[t]||new Be).add(e)},t.prototype.addReferenceTypeFor=function(t,e){this.referenceTypes=this.referenceTypes||l(),this.referenceTypes[t]=e},t.prototype.referenceTypeFor=function(t){return this.referenceTypes?this.referenceTypes[t]||oo:oo},t.prototype.removeReference=function(t,e){if(this.references){this.references[t].delete(e)}},t.prototype.getReferenceTypes=function(){return this.referenceTypes=this.referenceTypes||l(),this.referenceTypes},t.prototype.referencesFor=function(t){return this.references?this.references[t]:null},t.prototype.getSlots=function(){return this.slots=this.slots||l()},t.prototype.root=function(){return this.rootCache=this.rootCache||new this.RootReferenceFactory(this.object)},t}(),oo=function(){function t(e,n,i){ke(this,t),this.tag=tn,this.object=e,this.property=n}return t.prototype.value=function(){return this.object[this.property]},t.prototype.label=function(){return"[reference Property]"},t}(),so=function(){function t(e,n){ke(this,t),this._registry=e,this._resolver=n}return t.prototype.register=function(t,e,n){var i=this._toAbsoluteSpecifier(t)
this._registry.register(i,e,n)},t.prototype.registration=function(t){var e=this._toAbsoluteSpecifier(t)
return this._registry.registration(e)},t.prototype.unregister=function(t){var e=this._toAbsoluteSpecifier(t)
this._registry.unregister(e)},t.prototype.registerOption=function(t,e,n){var i=this._toAbsoluteOrTypeSpecifier(t)
this._registry.registerOption(i,e,n)},t.prototype.registeredOption=function(t,e){var n=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredOption(n,e)},t.prototype.registeredOptions=function(t){var e=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredOptions(e)},t.prototype.unregisterOption=function(t,e){var n=this._toAbsoluteOrTypeSpecifier(t)
this._registry.unregisterOption(n,e)},t.prototype.registerInjection=function(t,e,n){var i=this._toAbsoluteOrTypeSpecifier(t),r=this._toAbsoluteSpecifier(n)
this._registry.registerInjection(i,e,r)},t.prototype.registeredInjections=function(t){var e=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredInjections(e)},t.prototype._toAbsoluteSpecifier=function(t,e){return this._resolver.identify(t,e)},t.prototype._toAbsoluteOrTypeSpecifier=function(t){return wt(t)?t:this._toAbsoluteSpecifier(t)},t}(),ao=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null
ke(this,t),this.bucket=e?a({},e):{}}return t.prototype.get=function(t){return this.bucket[t]},t.prototype.set=function(t,e){return this.bucket[t]=e},t.prototype.child=function(){return new t(this.bucket)},t}(),uo=function(){function t(e,n){ke(this,t),this.position=0,this.array=e,this.keyFor=n}return t.prototype.isEmpty=function(){return 0===this.array.length},t.prototype.next=function(){var t=this.position,e=this.array,n=this.keyFor
if(t>=e.length)return null
var i=e[t],r=n(i,t),o=t
return this.position++,{key:r,value:i,memo:o}},t}(),po=function(){function t(e,n,i){ke(this,t),this.position=0,this.keys=e,this.values=n,this.keyFor=i}return t.prototype.isEmpty=function(){return 0===this.keys.length},t.prototype.next=function(){var t=this.position,e=this.keys,n=this.values,i=this.keyFor
if(t>=e.length)return null
var r=n[t],o=e[t],s=i(r,o)
return this.position++,{key:s,value:r,memo:o}},t}(),co=function(){function t(){ke(this,t)}return t.prototype.isEmpty=function(){return!0},t.prototype.next=function(){throw new Error("Cannot call next() on an empty iterator")},t}(),ho=new co,lo=function(){function t(e,n){ke(this,t),this.tag=e.tag,this.ref=e,this.keyFor=n}return t.prototype.iterate=function(){var t=this.ref,e=this.keyFor,n=t.value()
if(Array.isArray(n))return n.length>0?new uo(n,e):ho
if(void 0===n||null===n)return ho
if(void 0!==n.forEach){var i=[]
return n.forEach(function(t){i.push(t)}),i.length>0?new uo(i,e):ho}if("object"===(void 0===n?"undefined":_e(n))){var r=Object.keys(n)
return r.length>0?new po(r,r.map(function(t){return n[t]}),e):ho}throw new Error("Don't know how to {{#each "+n+"}}")},t.prototype.valueReferenceFor=function(t){return new $r(t.value)},t.prototype.updateValueReference=function(t,e){t.update(e.value)},t.prototype.memoReferenceFor=function(t){return new $r(t.memo)},t.prototype.updateMemoReference=function(t,e){t.update(e.memo)},t}(),fo=function(){function t(e,n,i){ke(this,t),this.nameRef=e,this.env=n,this.meta=i,this.tag=e.tag}return t.prototype.value=function(){var t=this.env,e=this.nameRef,n=e.value()
return"string"==typeof n?t.getComponentDefinition(n,this.meta):null},t.prototype.get=function(){return kn},t}(),mo=function(){function t(e,n){ke(this,t),this.tag=tn,this.parent=e,this.property=n}return t.prototype.value=function(){return this.parent.value()[this.property]},t.prototype.get=function(e){return new t(this,e)},t}(),yo=function(){function t(e,n){ke(this,t),this.tag=tn,this.helper=e,this.args=n.capture()}return t.prototype.value=function(){var t=this.helper,e=this.args
return t(e.positional.value(),e.named.value())},t.prototype.get=function(t){return new mo(this,t)},t}(),vo=function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e.prototype.toJSON=function(){return"<default-component-definition name="+this.name+">"},e}(ui),go={action:xt},bo=function(n){function i(r){ke(this,i)
var o=Ee(this,n.call(this,{appendOperations:r.appendOperations,updateOperations:new kr(r.document||document)}))
return o.helpers=l(),o.modifiers=l(),o.components=l(),o.managers=l(),e(o,t(r)),o.uselessAnchor=r.document.createElement("a"),o}return we(i,n),i.create=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return t.document=t.document||self.document,t.appendOperations=t.appendOperations||new Sr(t.document),new i(t)},i.prototype.protocolForURL=function(t){return this.uselessAnchor.href=t,this.uselessAnchor.protocol},i.prototype.hasPartial=function(){return!1},i.prototype.lookupPartial=function(){},i.prototype.managerFor=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"main",n=void 0
if(!(n=this.managers[e])){var i=t(this)
if(!(n=this.managers[e]=t(this).lookup("component-manager:/"+i.rootName+"/component-managers/"+e)))throw new Error("No component manager found for ID "+e+".")}return n},i.prototype.hasComponentDefinition=function(t,e){return!!this.getComponentDefinition(t,e)},i.prototype.getComponentDefinition=function(e,n){var i=t(this),r="template:"+e,o=n.specifier,s=i.identify(r,o)
if(void 0===s)throw i.identify("component:"+e,o)?new Error("The component '"+e+"' is missing a template. All components must have a template. Make sure there is a template.hbs in the component directory."):new Error("Could not find template for "+e)
return this.components[s]?this.components[s]:this.registerComponent(e,s,n,i)},i.prototype.registerComponent=function(t,e,n,i){var r=i.lookup("template",e),o=i.identify("component",e),s=null
o&&(s=i.factoryFor(o))
var a=kt(r).create(this),u=this.managerFor(n.managerId),p=void 0
return p=Lt(u)?u.createComponentDefinition(t,a,s):new vo(t,u,s),this.components[e]=p,p},i.prototype.hasHelper=function(t,e){return!!this.lookupHelper(t,e)},i.prototype.lookupHelper=function(e,n){if(go[e])return go[e]
var i=t(this),r="helper:"+e,o=n.specifier,s=i.identify(r,o)
return void 0!==s?this.helpers[s]?this.helpers[s]:this.registerHelper(s,i):void 0},i.prototype.registerHelper=function(t,e){var n=e.lookup(t),i=Rt(n)
return this.helpers[t]=i,i},i.prototype.hasModifier=function(t,e){return 1===t.length&&t in this.modifiers},i.prototype.lookupModifier=function(t,e){var n=this.modifiers[t]
if(!n)throw new Error("Modifier for "+t+" not found.")
return n},i.prototype.iterableFor=function(t,e){var n=void 0
if(!e)throw new Error("Must specify a key for #each")
switch(e){case"@index":n=function(t,e){return String(e)}
break
case"@primitive":n=function(t){return String(t)}
break
default:n=function(t){return t[e]}}return new lo(t,n)},i.prototype.macros=function(){var t=n.prototype.macros.call(this)
return Mt(t.blocks,t.inlines),t},i}(Ir),_o={id:"UN61+JFU",block:'{"symbols":["root"],"statements":[[4,"each",[[19,0,["roots"]]],[["key"],["id"]],{"statements":[[4,"-in-element",[[19,1,["parent"]]],[["nextSibling"],[[19,1,["nextSibling"]]]],{"statements":[[1,[25,"component",[[19,1,["component"]]],null],false]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{specifier:"template:/-application/templates/main"}},ko=function(){function t(e){ke(this,t),this._roots=[],this._rootsIndex=0,this._initializers=[],this._initialized=!1,this._rendering=!1,this._rendered=!1,this._scheduled=!1,this._rerender=Bt,this.rootName=e.rootName,this.resolver=e.resolver,this.document=e.document||window.document}return t.prototype.registerInitializer=function(t){this._initializers.push(t)},t.prototype.initRegistry=function(){var t=this._registry=new Ae,e=new so(this._registry,this.resolver)
t.register("environment:/"+this.rootName+"/main/main",bo),t.registerOption("helper","instantiate",!1),t.registerOption("template","instantiate",!1),t.register("document:/"+this.rootName+"/main/main",this.document),t.registerOption("document","instantiate",!1),t.registerInjection("environment","document","document:/"+this.rootName+"/main/main"),t.registerInjection("component-manager","env","environment:/"+this.rootName+"/main/main")
for(var n=this._initializers,i=0;i<n.length;i++)n[i].initialize(e)
this._initialized=!0},t.prototype.initContainer=function(){var t=this
this._container=new Ce(this._registry,this.resolver),this._container.defaultInjections=function(n){var i={}
return e(i,t),i}},t.prototype.initialize=function(){this.initRegistry(),this.initContainer()},t.prototype.boot=function(){this.initialize(),this.env=this.lookup("environment:/"+this.rootName+"/main/main"),this.render()},t.prototype.render=function(){var t=this
this.env.begin()
var e=kt(_o).create(this.env),n=new $r({roots:this._roots}),i=this.document,r=i.body,o=new ao,s=e.render(n,r,o),a=void 0
do{a=s.next()}while(!a.done)
this.env.commit()
var u=a.value
this._rerender=function(){t.env.begin(),u.rerender(),t.env.commit(),t._didRender()},this._didRender()},t.prototype._didRender=function(){this._rendered=!0},t.prototype.renderComponent=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null
this._roots.push({id:this._rootsIndex++,component:t,parent:e,nextSibling:n}),this.scheduleRerender()},t.prototype.scheduleRerender=function(){var t=this
!this._scheduled&&this._rendered&&(this._rendering=!0,this._scheduled=!0,requestAnimationFrame(function(){t._scheduled=!1,t._rerender(),t._rendering=!1}))},t.prototype.identify=function(t,e){return this.resolver.identify(t,e)},t.prototype.factoryFor=function(t,e){return this._container.factoryFor(this.identify(t,e))},t.prototype.lookup=function(t,e){return this._container.lookup(this.identify(t,e))},t}(),So=function(){function t(e,n){ke(this,t),this.config=e,this.registry=n}return t.prototype.identify=function(t,e){if(Ft(t))return t
var n=Ut(t),i=void 0
if(e){var r=Ut(e)
if(It(r)){if(Vt("Specifier must not include a rootName, collection, or namespace when combined with an absolute referrer",void 0===n.rootName&&void 0===n.collection&&void 0===n.namespace),n.rootName=r.rootName,n.collection=r.collection,n.name?n.namespace=r.namespace?r.namespace+"/"+r.name:r.name:(n.namespace=r.namespace,n.name=r.name),i=this._serializeAndVerify(n))return i
var o=this._definitiveCollection(n.type)
if(o&&(n.namespace+="/-"+o,i=this._serializeAndVerify(n)))return i
n.rootName=n.collection=n.namespace=void 0}else Vt('Referrer must either be "absolute" or include a `type` to determine the associated type',r.type),n.collection=this._definitiveCollection(r.type),Vt("'"+r.type+"' does not have a definitive collection",n.collection)}if(n.collection||(n.collection=this._definitiveCollection(n.type),Vt("'"+n.type+"' does not have a definitive collection",n.collection)),!n.rootName){if(n.rootName=this.config.app.rootName||"app",i=this._serializeAndVerify(n))return i
n.namespace?(this.config.addons&&this.config.addons[n.namespace],n.rootName=n.namespace,n.namespace=void 0):(this.config.addons&&this.config.addons[n.name],n.rootName=n.name,n.name="main")}return(i=this._serializeAndVerify(n))?i:void 0},t.prototype.retrieve=function(t){return this.registry.get(t)},t.prototype.resolve=function(t,e){var n=this.identify(t,e)
if(n)return this.retrieve(n)},t.prototype._definitiveCollection=function(t){var e=this.config.types[t]
return Vt("'"+t+"' is not a recognized type",e),e.definitiveCollection},t.prototype._serializeAndVerify=function(t){var e=Pt(t)
if(this.registry.has(e))return e},t}(),wo=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
ke(this,t),this._entries=e}return t.prototype.has=function(t){return t in this._entries},t.prototype.get=function(t){return this._entries[t]},t}(),Eo=function(){function t(e){ke(this,t),this.tags=l(),this.computedPropertyTags=l(),this.trackedProperties=e?Object.create(e.trackedProperties):l(),this.trackedPropertyDependencies=e?Object.create(e.trackedPropertyDependencies):l()}return t.prototype.tagFor=function(t){var e=this.tags[t]
if(e)return e
var n=void 0
return(n=this.trackedPropertyDependencies[t])?this.tags[t]=Wt(this,t,n):this.tags[t]=nn.create()},t.prototype.dirtyableTagFor=function(t){var e=this.trackedPropertyDependencies[t]
return e?this.computedPropertyTags[t]||(this.computedPropertyTags[t]=nn.create()):this.tags[t]||(this.tags[t]=nn.create())},t}(),Co=Symbol("ember-object"),Ao=Object.prototype.hasOwnProperty,No=function(){},xo=function(t){function e(n,i,r){ke(this,e)
var o=Ee(this,t.call(this,r))
return o.target=n,o.key=i,o}return we(e,t),e.for=function(t,n){return new e(t,n,"The property '"+n+"' on "+t+" was changed after being rendered. If you want to change a property used in a template after the component has rendered, mark the property as a tracked property with the @tracked decorator.")},e}(Error),Oo=function(){function t(e){ke(this,t),this.element=null,this.debugName=null,this.__args__=null,Object.assign(this,e)}return t.create=function(t){return new this(t)},t.prototype.didInsertElement=function(){},t.prototype.didUpdate=function(){},t.prototype.willDestroy=function(){},t.prototype.destroy=function(){this.willDestroy()},t.prototype.toString=function(){return this.debugName+" component"},Se(t,[{key:"args",get:function(){return this.__args__},set:function(t){this.__args__=t,Jt(this).dirtyableTagFor("args").inner.dirty()}}]),t}(),To=function(t){function e(n,i,r,o){ke(this,e)
var s=Ee(this,t.call(this,n,i,o))
return s.template=r,s.componentFactory=o,s}return we(e,t),e.prototype.toJSON=function(){return{GlimmerDebug:'<component-definition name="'+this.name+'">'}},e}(ui),Do=function(){function t(){ke(this,t)}return t.prototype.get=function(t){return Lo.create(this,t)},t}(),Ro=function(t){function e(){ke(this,e)
var n=Ee(this,t.apply(this,arguments))
return n._lastRevision=null,n._lastValue=null,n}return we(e,t),e.prototype.value=function(){var t=this.tag,e=this._lastRevision,n=this._lastValue
return e&&t.validate(e)||(n=this._lastValue=this.compute(),this._lastRevision=t.value()),n},e}(Do),Mo=function(t){function e(){ke(this,e)
var n=Ee(this,t.apply(this,arguments))
return n.children=l(),n}return we(e,t),e.prototype.get=function(t){var e=this.children[t]
return e||(e=this.children[t]=new Bo(this.inner,t)),e},e}(fn),Lo=function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e.create=function(t,e){return _(t)?new Bo(t.value(),e):new Fo(t,e)},e.prototype.get=function(t){return new Fo(this,t)},e}(Ro),Bo=function(t){function e(n,i){ke(this,e)
var r=Ee(this,t.call(this))
return r._parentValue=n,r._propertyKey=i,r.tag=Yt(n,i,Xt),r}return we(e,t),e.prototype.compute=function(){return this._parentValue[this._propertyKey]},e}(Lo),Fo=function(t){function e(n,i){ke(this,e)
var r=Ee(this,t.call(this)),o=n.tag,s=an.create(Qe)
return r._parentReference=n,r._parentObjectTag=s,r._propertyKey=i,r.tag=y([o,s]),r}return we(e,t),e.prototype.compute=function(){var t=this._parentReference,e=this._parentObjectTag,n=this._propertyKey,i=t.value()
return e.inner.update(Yt(i,n)),"string"==typeof i&&"length"===n?i.length:"object"===(void 0===i?"undefined":_e(i))&&i?i[n]:void 0},e}(Lo),Io=(function(t){function e(n){ke(this,e)
var i=Ee(this,t.call(this))
return i.tag=nn.create(),i._value=n,i}we(e,t),e.prototype.value=function(){return this._value},e.prototype.update=function(t){t!==this._value&&(this.tag.inner.dirty(),this._value=t)}}(Do),function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}we(e,t),e.create=function(t){if(_(t)){var n=t.value()
return gn.create(n)}return new e(t)}}(Cn),function(){function t(n,i,r){ke(this,t)
var o=n.componentFactory,s=n.name
this.args=i
var a={debugName:s,args:this.namedArgsSnapshot()}
e(a,r),this.component=o.create(a)}return t.prototype.namedArgsSnapshot=function(){return Object.freeze(this.args.named.value())},t}()),Po=function(){function t(e,n){ke(this,t),this.template=n,this.name=e}return t.prototype.compile=function(t){t.fromLayout(this.name,this.template)},t}(),jo=function(){function e(t){ke(this,e),this.env=t.env}return e.create=function(t){return new e(t)},e.prototype.prepareArgs=function(t,e){return null},e.prototype.create=function(e,n,i){if(!n.componentFactory)return null
var r=t(this.env)
return new Io(n,i.capture(),r)},e.prototype.createComponentDefinition=function(t,e,n){return new To(t,this,e,n)},e.prototype.layoutFor=function(t,e,n){var i=t.template
return j(new Po(t.name,i),this.env)},e.prototype.getSelf=function(t){return t?new Mo(t.component):null},e.prototype.didCreateElement=function(t,e){t&&(t.component.element=e)},e.prototype.didRenderLayout=function(t,e){},e.prototype.didCreate=function(t){t&&t.component.didInsertElement()},e.prototype.getTag=function(){return null},e.prototype.update=function(t,e){if(t){var n=t.component
n.args=t.namedArgsSnapshot(),n.didUpdate()}},e.prototype.didUpdateLayout=function(){},e.prototype.didUpdate=function(t){},e.prototype.getDestructor=function(t){if(t)return t.component},e}(),Uo=Object.create,Vo=function(t,e,n){this.path=t,this.matcher=e,this.delegate=n}
Vo.prototype.to=function(t,e){var n=this.delegate
if(n&&n.willAddRoute&&(t=n.willAddRoute(this.matcher.target,t)),this.matcher.add(this.path,t),e){if(0===e.length)throw new Error("You must have an argument in the function passed to `to`")
this.matcher.addChild(this.path,t,e,this.delegate)}}
var Ho=function(t){this.routes=Kt(),this.children=Kt(),this.target=t}
Ho.prototype.add=function(t,e){this.routes[t]=e},Ho.prototype.addChild=function(t,e,n,i){var r=new Ho(e)
this.children[t]=r
var o=$t(t,r,i)
i&&i.contextEntered&&i.contextEntered(e,o),n(o)}
var zo=function(t,e){var n=new Ho
t($t("",n,this.delegate)),Qt([],n,function(t){e?e(this,t):this.add(t)},this)},Go=/%|\//g,Wo=/%(?:2(?:4|6|B|C)|3(?:B|D|A)|40)/g,Jo=/(\/|\.|\*|\+|\?|\||\(|\)|\[|\]|\{|\}|\\)/g,qo=Array.isArray,Yo=Object.prototype.hasOwnProperty,Xo=[]
Xo[0]=function(t,e){for(var n=e,i=t.value,r=0;r<i.length;r++){var o=i.charCodeAt(r)
n=n.put(o,!1,!1)}return n},Xo[1]=function(t,e){return e.put(47,!0,!0)},Xo[2]=function(t,e){return e.put(-1,!1,!0)},Xo[4]=function(t,e){return e}
var Ko=[]
Ko[0]=function(t){return t.value.replace(Jo,"\\$1")},Ko[1]=function(){return"([^/]+)"},Ko[2]=function(){return"(.+)"},Ko[4]=function(){return""}
var $o=[]
$o[0]=function(t){return t.value},$o[1]=function(t,e){var n=ie(e,t.value)
return ns.ENCODE_AND_DECODE_PATH_SEGMENTS?ne(n):n},$o[2]=function(t,e){return ie(e,t.value)},$o[4]=function(){return""}
var Zo=Object.freeze({}),Qo=Object.freeze([]),ts=function(t,e,n,i,r){this.states=t,this.id=e,this.char=n,this.negate=i,this.nextStates=r?e:null,this.pattern="",this._regex=void 0,this.handlers=void 0,this.types=void 0}
ts.prototype.regex=function(){return this._regex||(this._regex=new RegExp(this.pattern)),this._regex},ts.prototype.get=function(t,e){var n=this,i=this.nextStates
if(null!==i)if(qo(i))for(var r=0;r<i.length;r++){var o=n.states[i[r]]
if(oe(o,t,e))return o}else{var s=this.states[i]
if(oe(s,t,e))return s}},ts.prototype.put=function(t,e,n){var i
if(i=this.get(t,e))return i
var r=this.states
return i=new ts(r,r.length,t,e,n),r[r.length]=i,null==this.nextStates?this.nextStates=i.id:qo(this.nextStates)?this.nextStates.push(i.id):this.nextStates=[this.nextStates,i.id],i},ts.prototype.match=function(t){var e=this,n=this.nextStates
if(!n)return[]
var i=[]
if(qo(n))for(var r=0;r<n.length;r++){var o=e.states[n[r]]
se(o,t)&&i.push(o)}else{var s=this.states[n]
se(s,t)&&i.push(s)}return i}
var es=function(t){this.length=0,this.queryParams=t||{}}
es.prototype.splice=Array.prototype.splice,es.prototype.slice=Array.prototype.slice,es.prototype.push=Array.prototype.push
var ns=function(){this.names=Kt()
var t=[],e=new ts(t,0,-1,!0,!1)
t[0]=e,this.states=t,this.rootState=e}
ns.prototype.add=function(t,e){for(var n=this.rootState,i="^",r=[0,0,0],o=new Array(t.length),s=[],a=!0,u=0,p=0;p<t.length;p++){for(var c=t[p],h=re(s,c.path,r),l=h.names,f=h.shouldDecodes;u<s.length;u++){var d=s[u]
4!==d.type&&(a=!1,n=n.put(47,!1,!1),i+="/",n=Xo[d.type](d,n),i+=Ko[d.type](d))}o[p]={handler:c.handler,names:l,shouldDecodes:f}}a&&(n=n.put(47,!1,!1),i+="/"),n.handlers=o,n.pattern=i+"$",n.types=r
var m
"object"===(void 0===e?"undefined":_e(e))&&null!==e&&e.as&&(m=e.as),m&&(this.names[m]={segments:s,handlers:o})},ns.prototype.handlersFor=function(t){var e=this.names[t]
if(!e)throw new Error("There is no route named "+t)
for(var n=new Array(e.handlers.length),i=0;i<e.handlers.length;i++){var r=e.handlers[i]
n[i]=r}return n},ns.prototype.hasRoute=function(t){return!!this.names[t]},ns.prototype.generate=function(t,e){var n=this.names[t],i=""
if(!n)throw new Error("There is no route named "+t)
for(var r=n.segments,o=0;o<r.length;o++){var s=r[o]
4!==s.type&&(i+="/",i+=$o[s.type](s,e))}return"/"!==i.charAt(0)&&(i="/"+i),e&&e.queryParams&&(i+=this.generateQueryString(e.queryParams)),i},ns.prototype.generateQueryString=function(t){var e=[],n=Object.keys(t)
n.sort()
for(var i=0;i<n.length;i++){var r=n[i],o=t[r]
if(null!=o){var s=encodeURIComponent(r)
if(qo(o))for(var a=0;a<o.length;a++){var u=r+"[]="+encodeURIComponent(o[a])
e.push(u)}else s+="="+encodeURIComponent(o),e.push(s)}}return 0===e.length?"":"?"+e.join("&")},ns.prototype.parseQueryString=function(t){for(var e=t.split("&"),n={},i=0;i<e.length;i++){var r=e[i].split("="),o=ce(r[0]),s=o.length,a=!1,u=void 0
1===r.length?u="true":(s>2&&"[]"===o.slice(s-2)&&(a=!0,o=o.slice(0,s-2),n[o]||(n[o]=[])),u=r[1]?ce(r[1]):""),a?n[o].push(u):n[o]=u}return n},ns.prototype.recognize=function(t){var e,n=[this.rootState],i={},r=!1,o=t.indexOf("#");-1!==o&&(t=t.substr(0,o))
var s=t.indexOf("?")
if(-1!==s){var a=t.substr(s+1,t.length)
t=t.substr(0,s),i=this.parseQueryString(a)}"/"!==t.charAt(0)&&(t="/"+t)
var u=t
ns.ENCODE_AND_DECODE_PATH_SEGMENTS?t=te(t):(t=decodeURI(t),u=decodeURI(u))
var p=t.length
p>1&&"/"===t.charAt(p-1)&&(t=t.substr(0,p-1),u=u.substr(0,u.length-1),r=!0)
for(var c=0;c<t.length&&(n=ue(n,t.charCodeAt(c)),n.length);c++);for(var h=[],l=0;l<n.length;l++)n[l].handlers&&h.push(n[l])
n=ae(h)
var f=h[0]
return f&&f.handlers&&(r&&f.pattern&&"(.+)$"===f.pattern.slice(-5)&&(u+="/"),e=pe(f,u,i)),e},ns.VERSION="0.3.3",ns.ENCODE_AND_DECODE_PATH_SEGMENTS=!0,ns.Normalizer={normalizeSegment:ee,normalizePath:te,encodePathSegment:ne},ns.prototype.map=zo
var is=new ns
is.map(function(t){t("/buttons").to("route-buttons"),t("/cards").to("route-cards"),t("/").to("route-home")})
var rs=void 0,os=void 0,ss=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i
if("object"===("undefined"==typeof Reflect?"undefined":_e(Reflect))&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i)
else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s)
return o>3&&s&&Object.defineProperty(e,n,s),s},as=function(t){function e(n){ke(this,e)
var i=Ee(this,t.call(this,n))
return fe(function(t,e){i.currentRouteComponent=t,i.params=e}),i}return we(e,t),Se(e,[{key:"isCurrentRouteHome",get:function(){return"route-home"===this.currentRouteComponent}}]),e}(Oo)
ss([Ht],as.prototype,"currentRouteComponent",void 0),ss([Ht],as.prototype,"params",void 0),ss([Ht("currentRouteComponent")],as.prototype,"isCurrentRouteHome",null)
var us={id:"rsR8AFZD",block:'{"symbols":[],"statements":[[6,"div"],[9,"class","glimmer-material mdc-typography"],[7],[0,"\\n  "],[6,"nav"],[9,"class","toolbar-nav"],[7],[0,"\\n    "],[6,"a"],[9,"href","https://github.com/cyk/glimmer-material"],[7],[0,"GitHub"],[8],[0,"\\n"],[4,"unless",[[19,0,["isCurrentRouteHome"]]],null,{"statements":[[0,"      "],[6,"a"],[9,"class","back-link"],[9,"href","#"],[7],[0,"Back"],[8],[0,"\\n"]],"parameters":[]},null],[0,"  "],[8],[0,"\\n\\n  "],[1,[25,"component",[[19,0,["currentRouteComponent"]]],[["params"],[[19,0,["params"]]]]],false],[0,"\\n"],[8]],"hasEval":false}',meta:{specifier:"template:/glimmer-material/components/glimmer-material"}},ps=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
ke(this,t),this.adapter_=e}return Se(t,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),t.prototype.init=function(){},t.prototype.destroy=function(){},t}(),cs=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0
ke(this,t),this.root_=e
for(var i=arguments.length,r=Array(i>2?i-2:0),o=2;o<i;o++)r[o-2]=arguments[o]
this.initialize.apply(this,r),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return t.attachTo=function(e){return new t(e,new ps)},t.prototype.initialize=function(){},t.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},t.prototype.initialSyncWithDOM=function(){},t.prototype.destroy=function(){this.foundation_.destroy()},t.prototype.listen=function(t,e){this.root_.addEventListener(t,e)},t.prototype.unlisten=function(t,e){this.root_.removeEventListener(t,e)},t.prototype.emit=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=void 0
"function"==typeof CustomEvent?i=new CustomEvent(t,{detail:e,bubbles:n}):(i=document.createEvent("CustomEvent"),i.initCustomEvent(t,n,!1,e)),this.root_.dispatchEvent(i)},t}(),hs={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",BG_ACTIVE_FILL:"mdc-ripple-upgraded--background-active-fill",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},ls={VAR_SURFACE_WIDTH:"--mdc-ripple-surface-width",VAR_SURFACE_HEIGHT:"--mdc-ripple-surface-height",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},fs={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:300},ds=void 0,ms={mouseup:"mousedown",pointerup:"pointerdown",touchend:"touchstart",keyup:"keydown",blur:"focus"},ys=function(t){function e(n){ke(this,e)
var i=Ee(this,t.call(this,Object.assign(e.defaultAdapter,n)))
return i.layoutFrame_=0,i.frame_={width:0,height:0},i.activationState_=i.defaultActivationState_(),i.xfDuration_=0,i.initialSize_=0,i.maxRadius_=0,i.listenerInfos_=[{activate:"touchstart",deactivate:"touchend"},{activate:"pointerdown",deactivate:"pointerup"},{activate:"mousedown",deactivate:"mouseup"},{activate:"keydown",deactivate:"keyup"},{focus:"focus",blur:"blur"}],i.listeners_={activate:function(t){return i.activate_(t)},deactivate:function(t){return i.deactivate_(t)},focus:function(){return requestAnimationFrame(function(){return i.adapter_.addClass(e.cssClasses.BG_FOCUSED)})},blur:function(){return requestAnimationFrame(function(){return i.adapter_.removeClass(e.cssClasses.BG_FOCUSED)})}},i.resizeHandler_=function(){return i.layout()},i.unboundedCoords_={left:0,top:0},i.fgScale_=0,i.activationTimer_=0,i.activationAnimationHasEnded_=!1,i.activationTimerCallback_=function(){i.activationAnimationHasEnded_=!0,i.runDeactivationUXLogicIfReady_()},i}return we(e,t),Se(e,[{key:"isSupported_",get:function(){return this.adapter_.browserSupportsCssVars()}}],[{key:"cssClasses",get:function(){return hs}},{key:"strings",get:function(){return ls}},{key:"numbers",get:function(){return fs}},{key:"defaultAdapter",get:function(){return{browserSupportsCssVars:function(){},isUnbounded:function(){},isSurfaceActive:function(){},isSurfaceDisabled:function(){},addClass:function(){},removeClass:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},updateCssVariable:function(){},computeBoundingRect:function(){},getWindowPageOffset:function(){}}}}]),e.prototype.defaultActivationState_=function(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationStartTime:0,activationEvent:null,isProgrammatic:!1}},e.prototype.init=function(){var t=this
if(this.isSupported_){this.addEventListeners_()
var n=e.cssClasses,i=n.ROOT,r=n.UNBOUNDED
requestAnimationFrame(function(){t.adapter_.addClass(i),t.adapter_.isUnbounded()&&t.adapter_.addClass(r),t.layoutInternal_()})}},e.prototype.addEventListeners_=function(){var t=this
this.listenerInfos_.forEach(function(e){Object.keys(e).forEach(function(n){t.adapter_.registerInteractionHandler(e[n],t.listeners_[n])})}),this.adapter_.registerResizeHandler(this.resizeHandler_)},e.prototype.activate_=function(t){var e=this
if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_
n.isActivated||(n.isActivated=!0,n.isProgrammatic=null===t,n.activationEvent=t,n.wasActivatedByPointer=!n.isProgrammatic&&("mousedown"===t.type||"touchstart"===t.type||"pointerdown"===t.type),n.activationStartTime=Date.now(),requestAnimationFrame(function(){n.wasElementMadeActive=!t||"keydown"!==t.type||e.adapter_.isSurfaceActive(),n.wasElementMadeActive?e.animateActivation_():e.activationState_=e.defaultActivationState_()}))}},e.prototype.activate=function(){this.activate_(null)},e.prototype.animateActivation_=function(){var t=this,n=e.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,o=e.cssClasses,s=o.BG_ACTIVE_FILL,a=o.FG_DEACTIVATION,u=o.FG_ACTIVATION,p=e.numbers.DEACTIVATION_TIMEOUT_MS,c="",h=""
if(!this.adapter_.isUnbounded()){var l=this.getFgTranslationCoordinates_(),f=l.startPoint,d=l.endPoint
c=f.x+"px, "+f.y+"px",h=d.x+"px, "+d.y+"px"}this.adapter_.updateCssVariable(i,c),this.adapter_.updateCssVariable(r,h),clearTimeout(this.activationTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(a),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.adapter_.addClass(u),this.activationTimer_=setTimeout(function(){return t.activationTimerCallback_()},p)},e.prototype.getFgTranslationCoordinates_=function(){var t=this.activationState_,e=t.activationEvent,n=t.wasActivatedByPointer,i=void 0
return i=n?ve(e,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2},i={x:i.x-this.initialSize_/2,y:i.y-this.initialSize_/2},{startPoint:i,endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},e.prototype.runDeactivationUXLogicIfReady_=function(){var t=e.cssClasses.FG_DEACTIVATION,n=this.activationState_,i=n.hasDeactivationUXRun,r=n.isActivated;(i||!r)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(t))},e.prototype.rmBoundedActivationClasses_=function(){var t=e.cssClasses,n=t.BG_ACTIVE_FILL,i=t.FG_ACTIVATION
this.adapter_.removeClass(n),this.adapter_.removeClass(i),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()},e.prototype.deactivate_=function(t){var e=this,n=this.activationState_
if(n.isActivated){if(n.isProgrammatic){return requestAnimationFrame(function(){return e.animateDeactivation_(null,Object.assign({},n))}),void(this.activationState_=this.defaultActivationState_())}var i=ms[t.type],r=n.activationEvent.type,o=i===r,s=o
n.wasActivatedByPointer&&(s="mouseup"===t.type)
var a=Object.assign({},n)
requestAnimationFrame(function(){o&&(e.activationState_.hasDeactivationUXRun=!0,e.animateDeactivation_(t,a)),s&&(e.activationState_=e.defaultActivationState_())})}},e.prototype.deactivate=function(){this.deactivate_(null)},e.prototype.animateDeactivation_=function(t,n){var i=n.wasActivatedByPointer,r=n.wasElementMadeActive,o=e.cssClasses.BG_FOCUSED;(i||r)&&(this.adapter_.removeClass(o),this.runDeactivationUXLogicIfReady_())},e.prototype.destroy=function(){var t=this
if(this.isSupported_){this.removeEventListeners_()
var n=e.cssClasses,i=n.ROOT,r=n.UNBOUNDED
requestAnimationFrame(function(){t.adapter_.removeClass(i),t.adapter_.removeClass(r),t.removeCssVars_()})}},e.prototype.removeEventListeners_=function(){var t=this
this.listenerInfos_.forEach(function(e){Object.keys(e).forEach(function(n){t.adapter_.deregisterInteractionHandler(e[n],t.listeners_[n])})}),this.adapter_.deregisterResizeHandler(this.resizeHandler_)},e.prototype.removeCssVars_=function(){var t=this,n=e.strings
Object.keys(n).forEach(function(e){0===e.indexOf("VAR_")&&t.adapter_.updateCssVariable(n[e],null)})},e.prototype.layout=function(){var t=this
this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){t.layoutInternal_(),t.layoutFrame_=0})},e.prototype.layoutInternal_=function(){this.frame_=this.adapter_.computeBoundingRect()
var t=Math.max(this.frame_.height,this.frame_.width),n=Math.sqrt(Math.pow(this.frame_.width,2)+Math.pow(this.frame_.height,2))
this.initialSize_=t*e.numbers.INITIAL_ORIGIN_SCALE,this.maxRadius_=n+e.numbers.PADDING,this.fgScale_=this.maxRadius_/this.initialSize_,this.xfDuration_=1e3*Math.sqrt(this.maxRadius_/1024),this.updateLayoutCssVars_()},e.prototype.updateLayoutCssVars_=function(){var t=e.strings,n=t.VAR_SURFACE_WIDTH,i=t.VAR_SURFACE_HEIGHT,r=t.VAR_FG_SIZE,o=t.VAR_LEFT,s=t.VAR_TOP,a=t.VAR_FG_SCALE
this.adapter_.updateCssVariable(n,this.frame_.width+"px"),this.adapter_.updateCssVariable(i,this.frame_.height+"px"),this.adapter_.updateCssVariable(r,this.initialSize_+"px"),this.adapter_.updateCssVariable(a,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(o,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(s,this.unboundedCoords_.top+"px"))},e}(ps),vs=function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e.attachTo=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.isUnbounded,r=void 0===i?void 0:i,o=new e(t)
return void 0!==r&&(o.unbounded=r),o},e.createAdapter=function(t){var e=ye(HTMLElement.prototype)
return{browserSupportsCssVars:function(){return de(window)},isUnbounded:function(){return t.unbounded},isSurfaceActive:function(){return t.root_[e](":active")},isSurfaceDisabled:function(){return t.disabled},addClass:function(e){return t.root_.classList.add(e)},removeClass:function(e){return t.root_.classList.remove(e)},registerInteractionHandler:function(e,n){return t.root_.addEventListener(e,n,me())},deregisterInteractionHandler:function(e,n){return t.root_.removeEventListener(e,n,me())},registerResizeHandler:function(t){return window.addEventListener("resize",t)},deregisterResizeHandler:function(t){return window.removeEventListener("resize",t)},updateCssVariable:function(e,n){return t.root_.style.setProperty(e,n)},computeBoundingRect:function(){return t.root_.getBoundingClientRect()},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}}}},e.prototype.activate=function(){this.foundation_.activate()},e.prototype.deactivate=function(){this.foundation_.deactivate()},e.prototype.getDefaultFoundation=function(){return new ys(e.createAdapter(this))},e.prototype.initialSyncWithDOM=function(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset},Se(e,[{key:"unbounded",get:function(){return this.unbounded_},set:function(t){var e=ys.cssClasses.UNBOUNDED
this.unbounded_=Boolean(t),this.unbounded_?this.root_.classList.add(e):this.root_.classList.remove(e)}}]),e}(cs),gs=function(t){function e(){ke(this,e)
var n=Ee(this,t.apply(this,arguments))
return n.mdcProps=["accent","raised"],n}return we(e,t),e.prototype.didInsertElement=function(){this.args.ripple&&vs.attachTo(this.element)},Se(e,[{key:"mdcClassNames",get:function(){var t=this
return this.mdcProps.map(function(e){return t.args[e]&&"mdc-button--"+e}).join(" ")}}]),e}(Oo),bs={id:"0viiGrdw",block:'{"symbols":["&default"],"statements":[[6,"button"],[10,"class",[26,["mdc-button ",[18,"mdcClassNames"]]]],[7],[0,"\\n  "],[11,1],[0,"\\n"],[8]],"hasEval":false}',meta:{specifier:"template:/glimmer-material/components/gm-button"}},_s=function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e}(Oo),ks={id:"RpYui9CP",block:'{"symbols":["&default"],"statements":[[6,"div"],[9,"class","mdc-card"],[7],[0,"\\n"],[0,"  "],[11,1,[[25,"hash",null,[["primaryClass","titleClass","subtitleClass","supportingTextClass","actionsClass","actionClass"],["mdc-card__primary","mdc-card__title mdc-card__title--large","mdc-card__subtitle","mdc-card__supporting-text","mdc-card__actions","mdc-card__action"]]]]],[0,"\\n"],[8]],"hasEval":false}',meta:{specifier:"template:/glimmer-material/components/gm-card"}},Ss=function(t){function e(){ke(this,e)
var n=Ee(this,t.apply(this,arguments))
return n.mdcProps=["mini","plain"],n}return we(e,t),e.prototype.didInsertElement=function(){this.args.ripple&&vs.attachTo(this.element)},Se(e,[{key:"mdcClassNames",get:function(){var t=this
return this.mdcProps.map(function(e){return t.args[e]&&"mdc-fab--"+e}).join(" ")}}]),e}(Oo),ws={id:"3eRKzfpC",block:'{"symbols":["@icon"],"statements":[[6,"button"],[10,"class",[26,["mdc-fab material-icons ",[18,"mdcClassNames"]]]],[7],[0,"\\n  "],[6,"span"],[9,"class","mdc-fab__icon"],[7],[1,[19,1,[]],false],[8],[0,"\\n"],[8]],"hasEval":false}',meta:{specifier:"template:/glimmer-material/components/gm-fab"}},Es=function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e}(Oo),Cs={id:"zyc+0CGz",block:'{"symbols":[],"statements":[[6,"div"],[7],[0,"\\n  "],[6,"h2"],[7],[0,"Buttons"],[8],[0,"\\n  "],[6,"div"],[7],[0,"\\n    "],[5,"gm-button",[],[[],[]],{"statements":[[0,"Default"]],"parameters":[]}],[0,"\\n    "],[5,"gm-button",[],[["@raised","@ripple"],["true","true"]],{"statements":[[0,"Raised"]],"parameters":[]}],[0,"\\n    "],[5,"gm-button",[],[["@raised"],["true"]],{"statements":[[0,"Raised (No Ripple)"]],"parameters":[]}],[0,"\\n    "],[5,"gm-button",[],[["@accent","@raised","@ripple"],["true","true","true"]],{"statements":[[0,"Raised with Accent"]],"parameters":[]}],[0,"\\n  "],[8],[0,"\\n  "],[6,"div"],[7],[0,"\\n      "],[6,"pre"],[7],[6,"code"],[9,"class","language-markup"],[7],[0,"<gm-button>Default</gm-button>\\n<gm-button class=\\"mdc-button--raised\\">Raised</gm-button>\\n<gm-button class=\\"mdc-button--raised\\" @noRipple=true>Raised (No Ripple)</gm-button>\\n<gm-button class=\\"mdc-button--raised mdc-button--accent\\">Raised with Accent</gm-button>"],[8],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"div"],[7],[0,"\\n    "],[6,"h3"],[7],[0,"Floating Action Buttons"],[8],[0,"\\n    "],[5,"gm-fab",[[9,"aria-label","Favorite"]],[["@icon"],["favorite"]],{"statements":[],"parameters":[]}],[0,"\\n    "],[5,"gm-fab",[[9,"aria-label","Favorite"]],[["@icon","@plain"],["favorite","true"]],{"statements":[],"parameters":[]}],[0,"\\n    "],[5,"gm-fab",[[9,"aria-label","Favorite"]],[["@icon","@mini"],["favorite","true"]],{"statements":[],"parameters":[]}],[0,"\\n  "],[8],[0,"\\n  "],[6,"div"],[7],[0,"\\n      "],[6,"pre"],[7],[6,"code"],[9,"class","language-markup"],[7],[0,"<gm-fab @icon=\\"favorite\\" aria-label=\\"Favorite\\" />\\n<gm-fab @icon=\\"favorite\\" @plain=true aria-label=\\"Favorite\\" />\\n<gm-fab @icon=\\"favorite\\" @mini=true aria-label=\\"Favorite\\" />"],[8],[8],[0,"\\n  "],[8],[0,"\\n"],[8]],"hasEval":false}',meta:{specifier:"template:/glimmer-material/components/route-buttons"}},As=function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e}(Oo),Ns={id:"bCTZZTbF",block:'{"symbols":["card"],"statements":[[6,"div"],[7],[0,"\\n  "],[6,"h2"],[7],[0,"Cards"],[8],[0,"\\n  "],[6,"div"],[7],[0,"\\n    "],[5,"gm-card",[],[[],[]],{"statements":[[0,"\\n      "],[6,"section"],[10,"class",[26,[[19,1,["primaryClass"]]]]],[7],[0,"\\n        "],[6,"h1"],[10,"class",[26,[[19,1,["titleClass"]]]]],[7],[0,"Title goes here"],[8],[0,"\\n        "],[6,"h2"],[10,"class",[26,[[19,1,["subtitleClass"]]]]],[7],[0,"Subtitle here"],[8],[0,"\\n      "],[8],[0,"\\n      "],[6,"section"],[10,"class",[26,[[19,1,["supportingTextClass"]]]]],[7],[0,"\\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\n        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\\n        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\\n        commodo consequat.\\n      "],[8],[0,"\\n      "],[6,"section"],[10,"class",[26,[[19,1,["actionsClass"]]]]],[7],[0,"\\n        "],[5,"gm-button",[[10,"class",[26,[[19,1,["actionClass"]]]]]],[["@compact"],["true"]],{"statements":[[0,"Action 1"]],"parameters":[]}],[0,"\\n        "],[5,"gm-button",[[10,"class",[26,[[19,1,["actionClass"]]]]]],[["@compact"],["true"]],{"statements":[[0,"Action 2"]],"parameters":[]}],[0,"\\n      "],[8],[0,"\\n    "]],"parameters":[1]}],[0,"\\n  "],[8],[0,"\\n  "],[6,"div"],[7],[0,"\\n      "],[6,"pre"],[7],[6,"code"],[9,"class","language-markup"],[7],[0,"<gm-card as |card|>\\n  <section class=\\"{{card.primaryClass}}\\">\\n    <h1 class=\\"{{card.titleClass}}\\">Title goes here</h1>\\n    <h2 class=\\"{{card.subtitleClass}}\\">Subtitle here</h2>\\n  </section>\\n  <section class=\\"{{card.supportingTextClass}}\\">\\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\\n    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\\n    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\\n    commodo consequat.\\n  </section>\\n  <section class=\\"{{card.actionsClass}}\\">\\n    <gm-button class=\\"{{card.actionClass}}\\" @compact=true>Action 1</gm-button>\\n    <gm-button class=\\"{{card.actionClass}}\\" @compact=true>Action 2</gm-button>\\n  </section>\\n</gm-card>"],[8],[8],[0,"\\n  "],[8],[0,"\\n"],[8]],"hasEval":false}',meta:{specifier:"template:/glimmer-material/components/route-cards"}},xs=function(t){function e(){return ke(this,e),Ee(this,t.apply(this,arguments))}return we(e,t),e}(Oo),Os={id:"BFmS6JPS",block:'{"symbols":[],"statements":[[6,"h1"],[9,"class","title"],[7],[0,"\\n  Glimmer "],[6,"span"],[9,"class","title--accent"],[7],[0,"Material"],[8],[0,"\\n"],[8],[0,"\\n\\n"],[6,"section"],[9,"class","introduction"],[7],[0,"\\n  "],[6,"p"],[7],[0,"A "],[6,"a"],[9,"href","https://glimmerjs.com/"],[7],[0,"Glimmer.js"],[8],[0," wrapper for "],[6,"a"],[9,"href","https://material.io/components/web/"],[7],[0,"Material Components for the Web"],[8],[0,"."],[8],[0,"\\n  "],[6,"code"],[7],[6,"span"],[7],[0,"yarn add glimmer-material"],[8],[0," "],[6,"span"],[9,"class","lang"],[7],[0,"sh"],[8],[8],[0,"\\n  "],[6,"code"],[7],[6,"span"],[7],[0,"@import \\"glimmer-material/button\\""],[8],[0," "],[6,"span"],[9,"class","lang"],[7],[0,"scss"],[8],[8],[0,"\\n  "],[6,"code"],[7],[6,"span"],[7],[0,"<gm::button onclick={{action next}}>Next</gm::button>"],[8],[0," "],[6,"span"],[9,"class","lang"],[7],[0,"hbs"],[8],[8],[0,"\\n  "],[6,"p"],[7],[6,"small"],[7],[0,"⚠️ The quickstart above is an example and does not work yet!"],[8],[8],[0,"\\n"],[8],[0,"\\n\\n"],[6,"nav"],[9,"class","components"],[7],[0,"\\n  "],[6,"ul"],[9,"class","component-list"],[7],[0,"\\n    "],[6,"li"],[9,"class","component-list-item"],[7],[0,"\\n      "],[6,"a"],[9,"class","component-list-item__link icon-button"],[9,"href","#/buttons"],[7],[0,"\\n        "],[6,"div"],[7],[0,"\\n          "],[6,"h2"],[9,"class","component-list-item__title"],[7],[0,"Buttons"],[8],[0,"\\n          "],[6,"div"],[9,"class","component-list-item__description"],[7],[0," Material Design-styled buttons. "],[8],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"li"],[9,"class","component-list-item"],[7],[0,"\\n      "],[6,"a"],[9,"class","component-list-item__link icon-card"],[9,"href","#/cards"],[7],[0,"\\n        "],[6,"div"],[7],[0,"\\n          "],[6,"h2"],[9,"class","component-list-item__title"],[7],[0,"Cards"],[8],[0,"\\n          "],[6,"div"],[9,"class","component-list-item__description"],[7],[0," Cards for displaying content composed of different elements. "],[8],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"li"],[9,"class","component-list-item component-list-item--wip"],[7],[0,"\\n      "],[6,"a"],[9,"class","component-list-item__link icon-dialog"],[9,"href","#/dialogs"],[7],[0,"\\n        "],[6,"div"],[7],[0,"\\n          "],[6,"h2"],[9,"class","component-list-item__title"],[7],[0,"Dialogs"],[8],[0,"\\n          "],[6,"div"],[9,"class","component-list-item__description"],[7],[0," Modal dialogs. "],[8],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"li"],[9,"class","component-list-item component-list-item--wip"],[7],[0,"\\n      "],[6,"a"],[9,"class","component-list-item__link icon-drawer"],[9,"href","#/drawers"],[7],[0,"\\n        "],[6,"div"],[7],[0,"\\n          "],[6,"h2"],[9,"class","component-list-item__title"],[7],[0,"Drawers"],[8],[0,"\\n          "],[6,"div"],[9,"class","component-list-item__description"],[7],[0," Permanent, persistent, and temporary drawers. "],[8],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"li"],[9,"class","component-list-item component-list-item--wip"],[7],[0,"\\n      "],[6,"a"],[9,"class","component-list-item__link icon-elevation"],[9,"href","#/elevation"],[7],[0,"\\n        "],[6,"div"],[7],[0,"\\n          "],[6,"h2"],[9,"class","component-list-item__title"],[7],[0,"Elevation"],[8],[0,"\\n          "],[6,"div"],[9,"class","component-list-item__description"],[7],[0," Shadows and elevation as Sass mixins and CSS classes. "],[8],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"li"],[9,"class","component-list-item component-list-item--wip"],[7],[0,"\\n      "],[6,"a"],[9,"class","component-list-item__link icon-input"],[9,"href","#/input-controls"],[7],[0,"\\n        "],[6,"div"],[7],[0,"\\n          "],[6,"h2"],[9,"class","component-list-item__title"],[7],[0,"Inputs and Controls"],[8],[0,"\\n          "],[6,"div"],[9,"class","component-list-item__description"],[7],[0," Form fields, checkboxes, menus, and other input components. "],[8],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"li"],[9,"class","component-list-item component-list-item--wip"],[7],[0,"\\n      "],[6,"a"],[9,"class","component-list-item__link icon-progress"],[9,"href","#/linear-progress"],[7],[0,"\\n        "],[6,"div"],[7],[0,"\\n          "],[6,"h2"],[9,"class","component-list-item__title"],[7],[0,"Linear Progress"],[8],[0,"\\n          "],[6,"div"],[9,"class","component-list-item__description"],[7],[0," Material Design-styled linear progress indicators. "],[8],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"li"],[9,"class","component-list-item component-list-item--wip"],[7],[0,"\\n      "],[6,"a"],[9,"class","component-list-item__link icon-list"],[9,"href","#/lists"],[7],[0,"\\n        "],[6,"div"],[7],[0,"\\n          "],[6,"h2"],[9,"class","component-list-item__title"],[7],[0,"Lists"],[8],[0,"\\n          "],[6,"div"],[9,"class","component-list-item__description"],[7],[0," Lists present multiple line items vertically as a single continuous element. "],[8],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"li"],[9,"class","component-list-item component-list-item--wip"],[7],[0,"\\n      "],[6,"a"],[9,"class","component-list-item__link icon-menu"],[9,"href","#/menus"],[7],[0,"\\n        "],[6,"div"],[7],[0,"\\n          "],[6,"h2"],[9,"class","component-list-item__title"],[7],[0,"Menus"],[8],[0,"\\n          "],[6,"div"],[9,"class","component-list-item__description"],[7],[0," Non-cascading Material Design menus. "],[8],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"li"],[9,"class","component-list-item component-list-item--wip"],[7],[0,"\\n      "],[6,"a"],[9,"class","component-list-item__link icon-snackbar"],[9,"href","#/snackbars"],[7],[0,"\\n        "],[6,"div"],[7],[0,"\\n          "],[6,"h2"],[9,"class","component-list-item__title"],[7],[0,"Snackbars"],[8],[0,"\\n          "],[6,"div"],[9,"class","component-list-item__description"],[7],[0," Brief feedback for an action through a message at the bottom of the screen. "],[8],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"li"],[9,"class","component-list-item component-list-item--wip"],[7],[0,"\\n      "],[6,"a"],[9,"class","component-list-item__link icon-toolbar"],[9,"href","#/toolbar"],[7],[0,"\\n        "],[6,"div"],[7],[0,"\\n          "],[6,"h2"],[9,"class","component-list-item__title"],[7],[0,"Toolbars"],[8],[0,"\\n          "],[6,"div"],[9,"class","component-list-item__description"],[7],[0," A container for multiple rows of items such as application title, navigation menu, or tabs. "],[8],[0,"\\n        "],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8]],"hasEval":false}',meta:{specifier:"template:/glimmer-material/components/route-home"}},Ts={"component:/glimmer-material/components/glimmer-material":as,"template:/glimmer-material/components/glimmer-material":us,"component:/glimmer-material/components/gm-button":gs,"template:/glimmer-material/components/gm-button":bs,"component:/glimmer-material/components/gm-card":_s,"template:/glimmer-material/components/gm-card":ks,"component:/glimmer-material/components/gm-fab":Ss,"template:/glimmer-material/components/gm-fab":ws,"helper:/glimmer-material/components/hash":ge,"component:/glimmer-material/components/route-buttons":Es,"template:/glimmer-material/components/route-buttons":Cs,"component:/glimmer-material/components/route-cards":As,"template:/glimmer-material/components/route-cards":Ns,"component:/glimmer-material/components/route-home":xs,"template:/glimmer-material/components/route-home":Os},Ds={app:{name:"glimmer-material",rootName:"glimmer-material"},types:{application:{definitiveCollection:"main"},component:{definitiveCollection:"components"},helper:{definitiveCollection:"components"},renderer:{definitiveCollection:"main"},template:{definitiveCollection:"components"}},collections:{main:{types:["application","renderer"]},components:{group:"ui",types:["component","template","helper"],defaultType:"component",privateCollections:["utils"]},styles:{group:"ui",unresolvable:!0},utils:{unresolvable:!0}}},Rs=function(t){function e(){ke(this,e)
var n=new wo(Ts),i=new So(Ds,n)
return Ee(this,t.call(this,{rootName:Ds.app.rootName,resolver:i}))}return we(e,t),e}(ko),Ms=new Rs,Ls=document.getElementById("app");(function(t){No=t})(function(){Ms.scheduleRerender()}),Ms.registerInitializer({initialize:function(t){t.register("component-manager:/"+Ms.rootName+"/component-managers/main",jo)}}),Ms.renderComponent("glimmer-material",Ls,null),Ms.boot()})
