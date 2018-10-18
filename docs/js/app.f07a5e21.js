(function(t){function e(e){for(var s,r,o=e[0],l=e[1],p=e[2],u=0,h=[];u<o.length;u++)r=o[u],a[r]&&h.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(h.length)h.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/splitpanes/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var p=0;p<o.length;p++)e(o[p]);var c=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var s=n("2b0e"),a=n("ce5b"),i=n.n(a);n("bf40"),n("15f5");s["default"].use(i.a,{iconfont:["md","fa"],theme:{primary:"#42b983",lightgrey:"#eee"}});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{staticClass:"white"},[s("v-container",[s("div",{staticClass:"text-xs-center"},[s("img",{attrs:{alt:"Vue logo",src:n("cf05"),height:"40"}}),s("h1",{staticClass:"mb-3 headline"},[t._v("Vue Split Panes")]),s("p",{staticClass:"subheading"},[t._v("A Vue JS reliable, simple and touch-ready panes splitter / resizer.")])]),s("v-layout",{attrs:{row:""}},[s("v-flex",[s("h2",{staticClass:"mt-5 mb-2 title"},[t._v("Features")]),s("ul",[s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Nesting supported")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Light weight & no dependencies other than Vue JS")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Support for touch devices")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Push other panes or not")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("Simple yet efficient")],1),s("li",[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",size:"20"}},[t._v("check")]),t._v("More features to come!")],1)])]),s("div",[s("div",{staticClass:"mt-5 mb-3 title"},[t._v("Github project")]),s("v-layout",{staticClass:"mb-5",attrs:{"align-center":"",shrink:""}},[s("v-icon",{staticClass:"pr-4 lightgrey--text",attrs:{"x-large":""}},[t._v("fab fa-github")]),s("a",{attrs:{href:"https://github.com/antoniandre/splitpanes",target:"_blank"}},[t._v("//github.com/antoniandre/splitpanes "),s("v-icon",{attrs:{small:"",color:"primary"}},[t._v("open_in_new")])],1)],1)],1)],1),s("p",{staticClass:"mt-5 subheading"},[t._v("# Demo 1")]),s("splitpanes",{staticClass:"example",staticStyle:{height:"400px"}},[s("span",[t._v("1")]),s("splitpanes",{staticClass:"example",attrs:{horizontal:""}},[s("span",[t._v("2")]),s("span",[t._v("3")]),s("span",[t._v("4")])]),s("span",[t._v("5")])],1),s("ssh-pre",{pre:!0,attrs:{language:"html-vue",label:"HTML Vue Template"}},[t._v('<splitpanes style="height: 400px">\n  <span>1</span>\n  <splitpanes horizontal>\n    <span>2</span>\n    <span>3</span>\n    <span>4</span>\n  </splitpanes>\n  <span>5</span>\n</splitpanes>')]),s("ssh-pre",{pre:!0,attrs:{language:"css",label:"CSS"}},[t._v(".splitpanes {background-color: #f2f2f2;}\n\n.splitpanes__pane {\n  box-shadow: 0 0 3px rgba(0, 0, 0, .2) inset;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n}\n\n.splitpanes__splitter {background-color: #fff;}\n.splitpanes--vertical > .splitpanes__splitter {width: 10px;}\n.splitpanes--horizontal > .splitpanes__splitter {height: 10px;}\n\n.splitpanes span {\n  font-family: Helvetica, Arial, sans-serif;\n  color: #fff;\n  font-size: 5em;\n  opacity: 0.6;\n}\n")]),s("h2",{staticClass:"mt-5 mb-2 headline"},[s("a",{attrs:{href:"#installation"}},[t._v("Installation")]),s("a",{attrs:{name:"installation"}})]),s("p",[t._v("You have two options: "),s("em",[t._v("NPM")]),s("strong",{staticClass:"mx-2"},[t._v("or")]),s("span",{staticClass:"code"},[t._v("<script>")]),t._v(" tag.")]),s("h3",[t._v("Via NPM")]),s("ssh-pre",{attrs:{language:"shell",label:"Shell"}},[t._v("npm install splitpanes --save-dev")]),s("p",[t._v("Then import the 2 components and use it:")]),s("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[t._v("// In your VueJS component.\nimport { Splitpanes } from 'splitpanes'\nimport 'splitpanes/dist/splitpanes.min.css'\n\nexport default {\n  components: { Splitpanes },\n  ...\n}\n")]),s("h3",[t._v("Via "),s("span",{staticClass:"code"},[t._v("<script>")]),t._v(" tag")]),s("p",[t._v("Include the Splitpanes script in your document "),s("span",{staticClass:"code"},[t._v("<head>")]),t._v(" as follows:")]),s("ssh-pre",{attrs:{language:"html",label:"HTML"}},[t._v('<head>\n  ...\n  <script src="https://unpkg.com/vue/dist/vue.min.js"><\/script>\n  <script src="https://unpkg.com/splitpanes/dist/splitpanes.umd.min.js"><\/script>\n  <link href="https://unpkg.com/splitpanes/dist/splitpanes.css" rel="stylesheet">\n</head>\n')]),s("h2",{staticClass:"mt-5 mb-2"},[s("a",{staticClass:"headline",attrs:{href:"#how-to-use"}},[t._v("How to use")]),s("a",{attrs:{name:"how-to-use"}})]),s("p",[t._v("Once included in your project, use as follows."),s("br"),t._v("\nThe splitters will be added automatically between all the direct children.\n")]),s("highlight-message",{attrs:{type:"tips"}},[t._v("By default the layout is 'column' (vertical), if you need you can set the attribute\n"),s("span",{staticClass:"code"},[t._v("horizontal")]),t._v(" on the "),s("span",{staticClass:"code"},[t._v("<splitpanes>")]),t._v(" tag to change the layout to rows.\n")]),s("ssh-pre",{pre:!0,attrs:{language:"html-vue",label:"HTML Vue Template"}},[t._v('<splitpanes>\n  <div v-for="i in 3" :key="i">{{ i.toString() }}</splitpanes>\n</splitpanes>\n')]),s("h2",{staticClass:"mt-5 mb-2"},[s("a",{staticClass:"headline",attrs:{href:"#more-examples"}},[t._v("More examples")]),s("a",{attrs:{name:"more-examples"}})]),s("p",{staticClass:"mt-5 subheading"},[t._v("# Horizontal layout & push other panes")]),s("splitpanes",{staticClass:"example",staticStyle:{height:"400px"},attrs:{horizontal:""}},[s("span",[t._v("1")]),s("span",[t._v("2")]),s("span",[t._v("3")])]),s("p",{staticClass:"mt-5 subheading"},[t._v("# Mix layout with nested splitpanes & prevent pushing other panes")]),s("p",[t._v("try it yourself:"),s("a",{staticClass:"ml-2",attrs:{href:"https://codepen.io/antoniandre/pen/PypgKY",target:"_blank"}},[t._v("//codepen.io/antoniandre/pen/PypgKY "),s("v-icon",{attrs:{small:"",color:"primary"}},[t._v("open_in_new")])],1)]),s("splitpanes",{staticClass:"example",staticStyle:{height:"400px"},attrs:{horizontal:"","push-other-panes":!1}},[s("span",[t._v("1")]),s("splitpanes",{staticClass:"example",attrs:{"push-other-panes":!1}},[s("span",[t._v("2")]),s("span",[t._v("3")]),s("span",[t._v("4")])]),s("span",[t._v("5")])],1),s("p",{staticClass:"mt-5 subheading"},[t._v("# Lots of splitters & push other panes")]),s("splitpanes",{staticClass:"example",staticStyle:{height:"400px"}},[s("span",[t._v("1")]),s("span",[t._v("2")]),s("span",[t._v("3")]),s("span",[t._v("4")]),s("span",[t._v("5")]),s("span",[t._v("6")]),s("span",[t._v("7")]),s("span",[t._v("8")])]),s("p",{staticClass:"mt-5 subheading"},[t._v("# Increased reactive touch zone for touch devices")]),s("p",[t._v("try it yourself:"),s("a",{staticClass:"ml-2",attrs:{href:"https://codepen.io/antoniandre/pen/XxRZmB",target:"_blank"}},[t._v("//codepen.io/antoniandre/pen/XxRZmB "),s("v-icon",{attrs:{small:"",color:"primary"}},[t._v("open_in_new")])],1)]),s("splitpanes",{staticClass:"touch-example",staticStyle:{height:"400px"},attrs:{horizontal:""}},[s("splitpanes",{staticClass:"touch-example",attrs:{vertical:""}},[s("span",[t._v("1")]),s("span",[t._v("2")]),s("span",[t._v("3")])]),s("span",{staticClass:"text"},[t._v("In this example the splitters are thin lines but the reactive touch zone is spread to 30 pixels all around!\n"),s("em",[t._v("Hover a splitter to see the Fat-fingers reactive zone.")])])],1)],1)],1)},o=[];function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),s.forEach(function(e){p(t,e,n[e])})}return t}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){return f(t)||h(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function f(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var v,d,m={props:{horizontal:{type:Boolean,default:!1},pushOtherPanes:{type:Boolean,default:!0}},data:function(){return{container:{vnode:null,offsetLeft:null,offsetTop:null},panesCount:(this.$slots.default||[]).length,panes:[],splitters:[],touch:{mouseDown:!1,dragging:!1,activeSplitter:null,sumOfWidths:0}}},methods:{bindEvents:function(){var t=this,e="ontouchstart"in window,n={start:e?"touchstart":"mousedown",move:e?"touchmove":"mousemove",end:e?"touchend":"mouseup"};this.splitters.forEach(function(e){t.$refs[e.id].addEventListener(n.start,function(n){return t.onMouseDown(n,e)})}),document.addEventListener(n.move,this.onMouseMove,{passive:!1}),document.addEventListener(n.end,this.onMouseUp)},onMouseDown:function(t,e){this.touch.mouseDown=!0,this.touch.activeSplitter=e;var n=this.touch.activeSplitter.index;this.touch.sumOfWidths=this.panes[n].width+this.panes[n+1].width,this.touch.sumOfHeights=this.touch.sumOfWidths},onMouseMove:function(t){this.touch.mouseDown&&(t.preventDefault(),this.touch.dragging=!0,this.calculatePanesSize(this.getCurrentMouseDrag(t)))},onMouseUp:function(){this.touch.mouseDown=!1,this.touch.dragging=!1},getCurrentMouseDrag:function(t){return{x:"ontouchstart"in window?t.touches[0].clientX:t.clientX,y:"ontouchstart"in window?t.touches[0].clientY:t.clientY}},getContainerOffsetTop:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(null===this.container.offsetTop||t){var e=this.container.vnode,n=e.offsetTop;while(e=e.offsetParent)n+=e.offsetTop;this.container.offsetTop=n}return this.container.offsetTop},getContainerOffsetLeft:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(null===this.container.offsetLeft||t){var e=this.container.vnode,n=e.offsetLeft;while(e=e.offsetParent)n+=e.offsetLeft;this.container.offsetLeft=n}return this.container.offsetLeft},getCurrentDragPercentage:function(t){var e=this.touch.activeSplitter.index,n=document.documentElement,s=this.horizontal?(window.pageYOffset||n.scrollTop)-(n.clientTop||0):null,a=this["getContainerOffset".concat(this.horizontal?"Top":"Left")]();t=t[this.horizontal?"y":"x"]-a+s;var i=this.container.vnode[this.horizontal?"clientHeight":"clientWidth"],r=0;return this.panes.forEach(function(t,n){return r+=n<e?t.width:0}),100*t/i},calculatePanesSize:function(t){var e=this.touch.activeSplitter.index,n=this.totalPrevPanesSize(e),s=this.totalNextPanesSize(e),a=0+(this.pushOtherPanes?0:n),i=100-(this.pushOtherPanes?0:s),r=Math.max(Math.min(this.getCurrentDragPercentage(t),i),a),o=[e,e+1];this.pushOtherPanes&&(r<n&&(o[0]=this.findPrevExpandedPane(e).index,n=this.totalPrevPanesSize(o[0])),r>100-s&&(o[1]=this.findNextExpandedPane(e).index,s=this.totalNextPanesSize(o[1]-1))),void 0!==o[0]&&(this.panes[o[0]].width=Math.max(r-n,0)),void 0!==o[1]&&(this.panes[o[1]].width=Math.max(100-r-s,0))},totalPrevPanesSize:function(t){return this.panes.reduce(function(e,n,s){return e+(s<t?n.width:0)},0)},totalNextPanesSize:function(t){return this.panes.reduce(function(e,n,s){return e+(s>t+1?n.width:0)},0)},findPrevExpandedPane:function(t){var e=null,n=c(this.panes);return n.reverse().some(function(n){return n.index<t&&n.width&&(e=n),n.index<t&&n.width}),e},findNextExpandedPane:function(t){var e=null;return this.panes.some(function(n){return n.index>t+1&&n.width&&(e=n),n.index>t+1&&n.width}),e}},created:function(){if(this.$slots.default)for(var t=0,e=this.$slots.default.length;t<e;t++)this.$set(this.panes,t,{width:this.defaultWidth,index:t}),t&&this.$set(this.splitters,t-1,{id:"splitter-".concat(t-1),index:t-1})},mounted:function(){this.container.vnode=this.$refs.container,this.bindEvents()},computed:{defaultWidth:function(){return 100/this.panesCount}},render:function(t){var e=this,n=[];this.$slots.default?this.$slots.default.forEach(function(s,a){if(s.tag||s.text){if(a){var i={id:a-1,class:"splitpanes__splitter",ref:"splitter-".concat(a-1)};n.push(t("div",i))}var r={id:a-1,class:"splitpanes__pane",style:l({},e.horizontal?{height:"".concat(e.panes[a].width,"%")}:null,e.horizontal?null:{width:"".concat(e.panes[a].width,"%")})};n.push(t("div",r,[s]))}}):n.push(t("div","Splitpanes needs some contents here."));var s={class:["splitpanes","splitpanes--".concat(this.horizontal?"horizontal":"vertical"),this.touch.dragging?"splitpanes--dragging":""],ref:"container"};return t("div",s,n)}},g=m,_=(n("5b84"),n("2877")),y=Object(_["a"])(g,v,d,!1,null,null,null);y.options.__file="splitpanes.vue";var b=y.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.tag,{tag:"component",class:"highlight "+t.type},[n("v-icon",[t._v(t._s(t.icon))]),t._t("default")],2)},w=[],C={props:{tag:{type:String,default:"p"},type:{type:String,default:"info"}},computed:{icon:function(){switch(this.type){case"success":return"check";case"error":return"close";case"warning":return"priority_high";case"tips":return"wb_incandescent";case"info":default:return"priority_high"}}}},S=C,P=(n("aef5"),Object(_["a"])(S,x,w,!1,null,null,null));P.options.__file="highlight-message.vue";var z=P.exports,O=n("40bd"),M=(n("b565"),{name:"app",components:{Splitpanes:b,sshPre:O["simpleSyntaxHighlighter"],highlightMessage:z}}),j=M,k=(n("6294"),Object(_["a"])(j,r,o,!1,null,null,null));k.options.__file="app.vue";var T=k.exports;n("d5e8"),n("d1e7");s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(T)}}).$mount("#app")},"5b84":function(t,e,n){"use strict";var s=n("92c6"),a=n.n(s);a.a},6294:function(t,e,n){"use strict";var s=n("ced8"),a=n.n(s);a.a},"6bec":function(t,e,n){},"92c6":function(t,e,n){},aef5:function(t,e,n){"use strict";var s=n("6bec"),a=n.n(s);a.a},ced8:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.f07a5e21.js.map