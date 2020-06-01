var SLDS=SLDS||{};SLDS["__internal/chunked/docs/ui/utilities/layout/docs.mdx.js"]=function(e){function t(t){for(var a,o,r=t[0],c=t[1],i=t[2],u=0,f=[];u<r.length;u++)o=r[u],l[o]&&f.push(l[o][0]),l[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(d&&d(t);f.length;)f.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==l[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},l={20:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},o.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var r=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var i=0;i<r.length;i++)t(r[i]);var d=c;return s.push([167,0]),n()}({0:function(e,t){e.exports=React},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Magnet=void 0;var a=s(n(0)),l=s(n(1));function s(e){return e&&e.__esModule?e:{default:e}}t.Magnet=function(e){return a.default.createElement("div",{className:(0,l.default)("slds-card",e.className)},a.default.createElement("div",{className:"slds-p-around_medium"},"My Component"))}},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getContents=t.getElement=void 0;var a=n(0),l=(i(a),n(6)),s=i(l),o=i(n(5)),r=n(166),c=i(n(7));function i(e){return e&&e.__esModule?e:{default:e}}var d=l.factories.a,u=l.factories.code,f=l.factories.h2,p=l.factories.li,m=l.factories.p,h=l.factories.ul,g=t.getElement=function(){return(0,a.createElement)(s.default,{},(0,a.createElement)("div",{className:"lead"},"Layout utility classes will help you to achieve layouts found within the Salesforce Platform."),f({id:"Magnets"},"Magnets"),m({},"The magnet utilities are used to vertically attach adjacent card-like components."),m({},"The components/utilities that provide a card-like look are the following:"),h({},p({},d({href:"/components/cards/"},"Cards")),p({},d({href:"/components/page-headers"},"Page Headers")),p({},d({href:"/utilities/box"},"Box"))),m({},"If you need a card-like component to appear flush to the card-like component below, you can add the classes  ",u({},"slds-has-bottom-magnet")," and ",u({},"slds-has-top-magnet"),"."),(0,a.createElement)(c.default,{title:"layout card"},(0,a.createElement)("div",{className:"slds-grid slds-grid_pull-padded slds-wrap"},(0,a.createElement)("div",{className:"slds-col slds-size_1-of-1 slds-large-size_1-of-2 slds-p-horizontal_medium"},(0,a.createElement)("strong",null,"Before"),(0,a.createElement)(o.default,{toggleCode:!1},(0,a.createElement)("div",null,(0,a.createElement)(r.Magnet,null),(0,a.createElement)(r.Magnet,null)))),(0,a.createElement)("div",{className:"slds-col slds-size_1-of-1 slds-large-size_1-of-2 slds-p-horizontal_medium"},(0,a.createElement)("strong",null,"After"),(0,a.createElement)(o.default,{toggleCode:!1},(0,a.createElement)("div",null,(0,a.createElement)(r.Magnet,{className:"slds-has-bottom-magnet"}),(0,a.createElement)(r.Magnet,{className:"slds-has-top-magnet"})))))),m({},"In the after example, you'll notice the component's top and bottom side are flattened out and appear connected."))};t.getContents=function(){return(0,l.createTableOfContents)(g())}},4:function(e,t){e.exports=JSBeautify}});