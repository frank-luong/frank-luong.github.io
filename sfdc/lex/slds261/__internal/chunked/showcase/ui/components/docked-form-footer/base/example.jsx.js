var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/docked-form-footer/base/example.jsx.js"]=function(e){function t(t){for(var o,l,a=t[0],u=t[1],d=t[2],i=0,f=[];i<a.length;i++)l=a[i],n[l]&&f.push(n[l][0]),n[l]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);for(c&&c(t);f.length;)f.shift()();return s.push.apply(s,d||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],o=!0,a=1;a<r.length;a++){var u=r[a];0!==n[u]&&(o=!1)}o&&(s.splice(t--,1),e=l(l.s=r[0]))}return e}var o={},n={81:0,4:0,5:0,11:0,12:0,17:0,26:0,32:0,35:0,38:0,40:0,45:0,48:0,49:0,53:0,54:0,57:0,60:0,62:0,64:0,65:0,70:0,72:0,73:0,78:0,84:0,85:0,88:0,89:0,95:0,98:0,99:0,105:0,106:0,107:0,108:0,109:0,110:0,114:0,117:0,118:0,129:0,137:0,141:0,143:0,144:0,145:0,150:0,153:0,154:0},s=[];function l(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=o,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},l.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/assets/scripts/bundle/";var a=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var c=u;return s.push([130,0]),r()}({0:function(e,t){e.exports=React},130:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.states=t.Context=void 0;var o=a(r(0)),n=a(r(3)),s=(a(r(2)),r(10)),l=r(31);function a(e){return e&&e.__esModule?e:{default:e}}var u=a(r(4)).default.uniqueId("dialog-heading-id-");t.Context=function(e){return o.default.createElement("div",{style:{height:"180px"}},e.children)};t.default=o.default.createElement("div",{className:"slds-docked-form-footer"},o.default.createElement("button",{type:"button",className:"slds-button slds-button_neutral"},"Cancel"),o.default.createElement("button",{type:"button",className:"slds-button slds-button_brand"},"Save"));t.states=[{id:"docked-form-footer-with-error",label:"With error(s)",element:o.default.createElement("div",{className:"slds-docked-form-footer"},o.default.createElement(n.default,{assistiveText:"Resolve error",className:"slds-button_icon slds-button_icon-error",iconClassName:"slds-button__icon_large",symbol:"error",title:"Resolve error"}),o.default.createElement("button",{type:"button",className:"slds-button slds-button_neutral"},"Cancel"),o.default.createElement("button",{type:"button",className:"slds-button slds-button_brand"},"Save"))},{id:"docked-form-footer-with-popover",label:"With error popover",element:o.default.createElement("div",{className:"slds-docked-form-footer"},o.default.createElement(n.default,{assistiveText:"Resolve error",className:"slds-button_icon slds-button_icon-error",iconClassName:"slds-button__icon_large",symbol:"error",title:"Resolve error"}),o.default.createElement("button",{type:"button",className:"slds-button slds-button_neutral"},"Cancel"),o.default.createElement("button",{type:"button",className:"slds-button slds-button_brand"},"Save"),o.default.createElement(s.Popover,{className:"slds-popover_error slds-nubbin_bottom-left",headingId:u,header:o.default.createElement(l.FeedbackHeader,{headingId:u,title:"Resolve error",symbol:"error"}),closeButton:!0,inverse:!0,style:{position:"absolute",bottom:"56px",left:"50%",marginLeft:"62px",transform:"translateX(-50%)"}},o.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore."," ",o.default.createElement("a",{href:"javascript:void(0);",title:"Learn More"},"Learn More"))))}]}});