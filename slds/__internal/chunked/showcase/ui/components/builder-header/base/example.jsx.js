var SLDS=SLDS||{};SLDS["__internal/chunked/showcase/ui/components/builder-header/base/example.jsx.js"]=function(e){function t(t){for(var a,r,d=t[0],i=t[1],o=t[2],c=0,m=[];c<d.length;c++)r=d[c],s[r]&&m.push(s[r][0]),s[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(u&&u(t);m.length;)m.shift()();return n.push.apply(n,o||[]),l()}function l(){for(var e,t=0;t<n.length;t++){for(var l=n[t],a=!0,d=1;d<l.length;d++){var i=l[d];0!==s[i]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=l[0]))}return e}var a={},s={130:0,4:0,5:0,11:0,12:0,17:0,26:0,32:0,35:0,38:0,40:0,45:0,48:0,49:0,53:0,54:0,57:0,60:0,62:0,64:0,65:0,70:0,72:0,73:0,78:0,84:0,85:0,88:0,89:0,95:0,98:0,99:0,105:0,106:0,107:0,108:0,109:0,110:0,114:0,117:0,118:0,129:0,137:0,141:0,143:0,144:0,145:0,150:0,153:0,154:0},n=[];function r(t){if(a[t])return a[t].exports;var l=a[t]={i:t,l:!1,exports:{}};return e[t].call(l.exports,l,l.exports,r),l.l=!0,l.exports}r.m=e,r.c=a,r.d=function(e,t,l){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var d=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],i=d.push.bind(d);d.push=t,d=d.slice();for(var o=0;o<d.length;o++)t(d[o]);var u=i;return n.push([181,0]),l()}({0:function(e,t){e.exports=React},180:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),s=l(0),n=o(s),r=(o(l(1)),o(l(2))),d=o(l(3)),i=l(5);function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function m(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=function(){return n.default.createElement("div",{className:"slds-builder-header__item"},n.default.createElement("div",{className:"slds-builder-header__item-label slds-media slds-media_center"},n.default.createElement("div",{className:"slds-media__figure"},n.default.createElement(i.UtilityIcon,{containerClassName:"slds-current-color",className:"slds-icon_x-small",symbol:"builder",assistiveText:!1,title:!1})),n.default.createElement("div",{className:"slds-media__body"},"App Name")))},b=function(e){return n.default.createElement("nav",{className:"slds-builder-header__item slds-builder-header__nav"},n.default.createElement("ul",{className:"slds-builder-header__nav-list"},n.default.createElement(_,{symbol:"settings"}),n.default.createElement(_,{symbol:"page",dropdown:!0})))},_=function(e){return n.default.createElement("li",{className:"slds-builder-header__nav-item"},e.dropdown?n.default.createElement("button",{className:"slds-button slds-builder-header__item-action slds-media slds-media_center","aria-haspopup":"true",title:"Click to open menu"},n.default.createElement("span",{className:"slds-media__figure"},n.default.createElement(i.UtilityIcon,{containerClassName:"slds-current-color",className:"slds-icon_x-small",symbol:e.symbol,assistiveText:!1,title:!1})),n.default.createElement("span",{className:"slds-media__body"},n.default.createElement("span",{className:"slds-truncate",title:"Dropdown"},"Dropdown"),n.default.createElement(i.UtilityIcon,{containerClassName:"slds-current-color slds-m-left_small",className:"slds-icon_x-small",symbol:"chevrondown",assistiveText:!1,title:!1}))):n.default.createElement("a",{href:"javascript:void(0);",className:"slds-builder-header__item-action slds-media slds-media_center"},n.default.createElement("span",{className:"slds-media__figure"},n.default.createElement(i.UtilityIcon,{containerClassName:"slds-current-color",className:"slds-icon_x-small",symbol:e.symbol,assistiveText:!1,title:!1})),n.default.createElement("span",{className:"slds-media__body"},n.default.createElement("span",{className:"slds-truncate",title:"Link"},"Link"))))},p=function(e){return n.default.createElement("div",{className:"slds-builder-header__item"},n.default.createElement("h1",{className:"slds-builder-header__item-label"},"Page Type"))},v=function(e){return n.default.createElement("div",{className:"slds-builder-header__utilities-item"},n.default.createElement("a",{href:"javascript:void(0);",className:"slds-builder-header__item-action slds-media slds-media_center"},n.default.createElement("div",{className:"slds-media__figure"},n.default.createElement(i.UtilityIcon,{containerClassName:"slds-current-color",className:"slds-icon_x-small",symbol:"back",assistiveText:!1,title:!1})),n.default.createElement("div",{className:"slds-media__body"},"Back")))},h=function(e){return n.default.createElement("div",{className:"slds-builder-header__utilities-item"},n.default.createElement("a",{href:"javascript:void(0);",className:"slds-builder-header__item-action slds-media slds-media_center"},n.default.createElement("div",{className:"slds-media__figure"},n.default.createElement(i.UtilityIcon,{containerClassName:"slds-current-color",className:"slds-icon_x-small",symbol:"help",assistiveText:!1,title:!1})),n.default.createElement("div",{className:"slds-media__body"},"Help")))},E=function(e){return n.default.createElement("div",{className:"slds-builder-toolbar__item-group","aria-label":"Canvas Actions"},n.default.createElement("div",{className:"slds-button-group"},n.default.createElement(d.default,{className:"slds-button_icon-border",symbol:"undo",assistiveText:"Undo",title:"Undo",tabIndex:"0"}),n.default.createElement(d.default,{className:"slds-button_icon-border",symbol:"redo",assistiveText:"Redo",title:"Redo",tabIndex:"-1"})))},y=function(e){return n.default.createElement("div",{className:"slds-builder-toolbar__item-group","aria-label":"Edit actions"},n.default.createElement("div",{className:"slds-button-group"},n.default.createElement(d.default,{className:"slds-button_icon-border",symbol:"cut",assistiveText:"Cut",title:"Cut",tabIndex:"-1"}),n.default.createElement(d.default,{className:"slds-button_icon-border",symbol:"copy",assistiveText:"Copy",title:"Copy",tabIndex:"-1"}),n.default.createElement(d.default,{className:"slds-button_icon-border",symbol:"paste",assistiveText:"Paste",title:"Paste",tabIndex:"-1"})))},N=function(e){return n.default.createElement("div",{className:"slds-builder-toolbar__actions","aria-label":"Document actions"},n.default.createElement("button",{className:"slds-button slds-button_neutral"},n.default.createElement(r.default,{className:"slds-button__icon slds-button__icon_left",sprite:"utility",symbol:"right"})," ","Run"),n.default.createElement("button",{className:"slds-button slds-button_neutral"},"Save As"),n.default.createElement("button",{className:"slds-button slds-button_brand"},"Save"))},x=function(e){function t(){return u(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,s.Component),a(t,[{key:"render",value:function(){return n.default.createElement("div",{className:"slds-builder-toolbar",role:"toolbar"},n.default.createElement(E,null),n.default.createElement(y,null),n.default.createElement(N,null))}}]),t}(),g=function(e){function t(){return u(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,s.Component),a(t,[{key:"render",value:function(){var e=this.props.showToolbar;return n.default.createElement("div",{className:"slds-builder-header_container"},n.default.createElement("header",{className:"slds-builder-header"},n.default.createElement(f,null),n.default.createElement(b,null),n.default.createElement(p,null),n.default.createElement("div",{className:"slds-builder-header__item slds-builder-header__utilities"},n.default.createElement(v,null),n.default.createElement(h,null))),e&&n.default.createElement(x,null))}}]),t}();t.default=g},181:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.examples=t.Context=void 0;var a=n(l(0)),s=n(l(180));function n(e){return e&&e.__esModule?e:{default:e}}t.Context=function(e){return a.default.createElement("div",{style:{position:"relative",height:"100px"}},e.children)};t.default=a.default.createElement(s.default,null);t.examples=[{id:"toolbar",label:"With Toolbar",element:a.default.createElement(s.default,{showToolbar:!0})}]}});