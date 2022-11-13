"use strict";(self.webpackChunkdiseaseTemplate=self.webpackChunkdiseaseTemplate||[]).push([[149],{7149:(e,n,t)=>{t.r(n);var r=t(2950),a=t.n(r),o=t(2181),i=t.n(o),c=t(3379),l=t.n(c),s=t(7795),u=t.n(s),f=t(569),d=t.n(f),m=t(3565),p=t.n(m),y=t(9216),v=t.n(y),h=t(4589),g=t.n(h),b=t(1383),_={};function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function E(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function j(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,a,o=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw a}}return o}}(e,n)||function(e,n){if(e){if("string"==typeof e)return E(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?E(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}_.styleTagTransform=g(),_.setAttributes=p(),_.insert=d().bind(null,"head"),_.domAPI=u(),_.insertStyleElement=v(),l()(b.Z,_),b.Z&&b.Z.locals&&b.Z.locals;var x=t(4941),C=t(2259),O=t(5440),S={};S.styleTagTransform=g(),S.setAttributes=p(),S.insert=d().bind(null,"head"),S.domAPI=u(),S.insertStyleElement=v(),l()(O.Z,S),O.Z&&O.Z.locals&&O.Z.locals;var T=t(9404),k=t.n(T);function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function N(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){w(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var I={diseaseName:"",introduction:"",diagnosis:"",ref:"",cause:""};const P=function(){var e=j((0,r.useState)(""),2),n=e[0],t=e[1],o=j((0,r.useState)(I),2),i=o[0],c=o[1],l=j((0,r.useState)([]),2),s=l[0],u=l[1],f=function(e){var n=e.target,t=n.name,r=n.value;c((function(e){return N(N({},e),{},w({},t,r))}))};return a().createElement("div",{className:"container"},a().createElement("div",{className:"inpt-container"},a().createElement(C.TextField,{name:"diseaseName",label:"Disease Name",value:i.e,style:{width:"20rem"},onChange:f}),a().createElement(C.TextField,{name:"introduction",label:"Introduction",value:i.introduction,style:{width:"20rem"},onChange:f}),a().createElement(C.TextField,{name:"diagnosis",label:"Diagnosis",value:i.diagnosis,style:{width:"20rem"},onChange:f}),a().createElement(C.TextField,{name:"ref",value:i.ref,label:"References",style:{width:"20rem"},onChange:f}),a().createElement(C.TextField,{name:"cause",value:i.cause,label:"Causes",style:{width:"20rem"},onChange:f}),a().createElement("div",{className:"syms-container"},s.map((function(e,n){return a().createElement("div",{key:n,className:"sym-container"},a().createElement(C.TextField,{name:"Symptoms ".concat(n+1),value:e,label:"symptoms",style:{width:"20rem"},onChange:function(e){return function(e,n){var t=e.target.value;u((function(e){return e.map((function(e,r){return r===n?t:e}))}))}(e,n)}}),a().createElement(C.IconButton,{onClick:function(){return e=n,void u((function(n){return n.filter((function(n,t){return t!==e}))}));var e}},a().createElement(x.Delete,{style:{color:"red"}})))})))),a().createElement("div",{className:"but-container"},a().createElement(C.Button,{variant:"outlined",onClick:function(){u((function(e){return e.concat("")}))}},"Add Symptom"),a().createElement(C.Button,{variant:"outlined",onClick:function(){c(I),u([]),t("")}},"Reset"),a().createElement(C.Button,{variant:"outlined",onClick:function(){t(JSON.stringify(N(N({},i),{},{symptoms:s})))}},"Submit")),a().createElement("div",null,n&&a().createElement(k(),{id:"json-pretty",data:n})))};var Z=function(){return a().createElement("div",{className:"container"},a().createElement(P,null))};i().render(a().createElement(Z,null),document.getElementById("app"))},5440:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(8081),a=t.n(r),o=t(3645),i=t.n(o)()(a());i.push([e.id,".__json-pretty__{line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;}.__json-pretty__ .__json-key__{color:#f92672}.__json-pretty__ .__json-value__{color:#a6e22e}.__json-pretty__ .__json-string__{color:#fd971f}.__json-pretty__ .__json-boolean__{color:#ac81fe}.__json-pretty-error__{line-height:1.3;color:#66d9ef;background:#272822;overflow:auto}\n",""]);const c=i},1383:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(8081),a=t.n(r),o=t(3645),i=t.n(o)()(a());i.push([e.id,"body {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.container {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 1rem;\n}\n.inpt-container {\n  display: flex;\n  flex-flow: row wrap;\n  /* flex-direction: column; */\n  align-items: center;\n  /* justify-content: space-between; */\n  gap: 1.5rem;\n  margin: auto;\n  width: 55%;\n}\n.but-container {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  gap: 1rem;\n}\n.but-container button {\n  padding: 0.5rem 1.5rem;\n}\n\n.sym-container {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.syms-container {\n  display: flex;\n  align-items: center;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  gap: 1rem;\n}\n.__json-pretty__ {\n  background: transparent !important;\n  font-size: 1rem !important;\n}\n",""]);const c=i},3645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),n.push(u))}},n}},8081:e=>{e.exports=function(e){return e[1]}},3379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],u=o[s]||0,f="".concat(s," ").concat(u);o[s]=u+1;var d=t(f),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)n[d].references++,n[d].updater(m);else{var p=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:f,updater:p,references:1})}i.push(f)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var l=r(e,a),s=0;s<o.length;s++){var u=t(o[s]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}o=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},9216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},3565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},7795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},4589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}}]);