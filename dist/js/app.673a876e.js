(()=>{"use strict";var t={8900:(t,e,n)=>{n(8984),n(1711),n(3883),n(9630);var i,o=n(307),s=(n(9804),n(5622),n(1025),n(259),function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"my-5 ms-5"},[e("div",{staticClass:"json-layout"},[e("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"application/json",name:"fileupload"},on:{change:t.importJSON}}),e("a",{staticClass:"font-caveat me-2",attrs:{href:"#"},on:{click:function(){return t.fileInput.click()}}},[t._v("Import Layout")]),e("a",{staticClass:"font-caveat me-2",attrs:{href:"#"},on:{click:t.exportAsJSON}},[t._v("Export Layout")])]),e("div",{staticClass:"row m-0 mb-2"},[e("div",{staticClass:"label font-caveat"},[t._v("ROW")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.rowSize,expression:"rowSize",modifiers:{number:!0}}],staticClass:"grid-size-input font-caveat",attrs:{type:"number"},domProps:{value:t.rowSize},on:{input:function(e){e.target.composing||(t.rowSize=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),e("div",{staticClass:"label font-caveat"},[t._v("COL")]),e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.columnSize,expression:"columnSize",modifiers:{number:!0}}],staticClass:"grid-size-input font-caveat",attrs:{type:"number"},domProps:{value:t.columnSize},on:{input:function(e){e.target.composing||(t.columnSize=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),e("button",{staticClass:"button",on:{click:t.resetLayout}},[t._v("Reset")]),e("button",{staticClass:"button ms-2",on:{click:t.findPath}},[t._v("Find Path")]),e("button",{staticClass:"button ms-2",on:{click:t.clearPath}},[t._v("Clear Path")])]),e("div",{staticClass:"main-section"},[e("div",{staticClass:"grid",style:"grid-template-columns: repeat("+t.columns+", 52px);"},[t._l(t.nodes,(function(n){return t._l(n,(function(n){return e("GridButton",{key:n.y.toString()+"x"+n.x.toString(),attrs:{type:t.nodes[n.y][n.x].type,y:n.y,x:n.x},on:{buttonClicked:t.handleClick,buttonEntered:t.handleEnter}})}))}))],2),e("AStarLogo")],1)])}),r=[],a=n(3381),u=n(2602),c=n(6789),l=n(4163),d=n(490),h=n(1248),f=n(962),p=n(9294),v=n(1991),y=n(81),m=(n(6385),n(7433),n(7529),n(2553),n(817),n(6424),n(1584),n(8897),n(8902),n(1603),n(8129),n(3749),n(8393),n(1832),n(4203),n(9694),n(7147),n(2579)),b=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("button",{class:t.className,on:{mouseenter:t.buttonEntered,mousedown:t.buttonClicked}})},g=[];(function(t){t["blank"]="blank",t["obstacle"]="obstacle",t["source"]="source",t["destination"]="destination",t["path"]="path",t["visited"]="visited"})(i||(i={}));var x=function(t,e,n,i){var o,s=arguments.length,r=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,y.Z)(Reflect))&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,n,r):o(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},w=function(t){(0,f.Z)(n,t);var e=(0,p.Z)(n);function n(){var t;(0,l.Z)(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=e.call.apply(e,[this].concat(o)),(0,v.Z)((0,h.Z)(t),"x",void 0),(0,v.Z)((0,h.Z)(t),"y",void 0),(0,v.Z)((0,h.Z)(t),"type",void 0),t}return(0,d.Z)(n,[{key:"className",get:function(){return this.type}},{key:"buttonEntered",value:function(){this.$emit("buttonEntered",{x:this.x,y:this.y})}},{key:"buttonClicked",value:function(){this.$emit("buttonClicked",{x:this.x,y:this.y})}}]),n}(m.w3);x([(0,m.fI)({default:0})],w.prototype,"x",void 0),x([(0,m.fI)({default:0})],w.prototype,"y",void 0),x([(0,m.fI)({default:i.blank})],w.prototype,"type",void 0),w=x([(0,m.wA)({})],w);const C=w,Z=C;var k=n(1068),S=(0,k.Z)(Z,b,g,!1,null,"38ada7b4",null);const P=S.exports;var _=function(){var t=this;t._self._c,t._self._setupProxy;return t._m(0)},O=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"parent"},[e("span",{attrs:{id:"A"}},[t._v(" A ")]),e("span",{staticClass:"star"},[t._v(" * ")])])}],z=function(t,e,n,i){var o,s=arguments.length,r=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,y.Z)(Reflect))&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,n,r):o(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},I=function(t){(0,f.Z)(n,t);var e=(0,p.Z)(n);function n(){var t;(0,l.Z)(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=e.call.apply(e,[this].concat(o)),(0,v.Z)((0,h.Z)(t),"changingFont","font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;"),(0,v.Z)((0,h.Z)(t),"fontNum",0),(0,v.Z)((0,h.Z)(t),"fonts",["'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif","'Verdana, Geneva, Tahoma, sans-serif","'Segoe UI', Tahoma, Geneva, Verdana, sans-serif","Helvetica"]),t}return(0,d.Z)(n,[{key:"mounted",value:function(){var t=this;setInterval((function(){t.fontNum=(t.fontNum+1)%t.fonts.length,document.querySelector("#A").style.fontFamily=t.fonts[t.fontNum]}),5e3)}}]),n}(m.w3);I=z([(0,m.wA)({})],I);const R=I,T=R;var j=(0,k.Z)(T,_,O,!1,null,"5874a870",null);const A=j.exports;var G;function L(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];var s=function(){clearTimeout(G),e.apply(void 0,i)};clearTimeout(G),G=setTimeout(s,t)}function N(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e4;o.ZP.$toast.open({message:t,type:e,duration:n})}function E(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:8e3;return new Promise((function(i,s){o.ZP.$toast.open({message:t,type:e,duration:n,onDismiss:function(){i()}})}))}var F=function(t,e,n,i){var o,s=arguments.length,r=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"===("undefined"===typeof Reflect?"undefined":(0,y.Z)(Reflect))&&"function"===typeof Reflect.decorate)r=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(s<3?o(r):s>3?o(e,n,r):o(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},D=function(t){(0,f.Z)(n,t);var e=(0,p.Z)(n);function n(){var t;(0,l.Z)(this,n);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=e.call.apply(e,[this].concat(o)),(0,v.Z)((0,h.Z)(t),"rowSize",0),(0,v.Z)((0,h.Z)(t),"columnSize",0),(0,v.Z)((0,h.Z)(t),"rows",0),(0,v.Z)((0,h.Z)(t),"columns",0),(0,v.Z)((0,h.Z)(t),"nodes",[]),(0,v.Z)((0,h.Z)(t),"source",{exists:!1}),(0,v.Z)((0,h.Z)(t),"destination",{exists:!1}),(0,v.Z)((0,h.Z)(t),"debounceWait",0),(0,v.Z)((0,h.Z)(t),"mouseIsDown",!1),(0,v.Z)((0,h.Z)(t),"fileInput",void 0),t}return(0,d.Z)(n,[{key:"onColSizeChanged",value:function(t){this.updateGridSize(t,105)}},{key:"onRowSizeChanged",value:function(t){this.updateGridSize(t,55)}},{key:"updateGridSize",value:function(t,e){!t||t<0||t>e||L(this.debounceWait,this.constructGrid,this.rowSize,this.columnSize)}},{key:"handleEnter",value:function(t){this.mouseIsDown&&this.handleClick(t)}},{key:"handleClick",value:function(t){var e=this.nodes[t.y][t.x];e.type!=i.blank?e.type==i.obstacle?(e.type=i.blank,this.source.exists?this.destination.exists||(e.type=i.destination,this.destination={x:e.x,y:e.y,exists:!0,type:i.destination,gCost:1/0,hCost:0,fCost:1/0,parent:null}):(e.type=i.source,this.source={x:e.x,y:e.y,exists:!0,type:i.source,gCost:0,hCost:0,fCost:0,parent:null})):e.type==i.source?(e.type=i.blank,this.source.exists=!1):(e.type=i.blank,this.destination.exists=!1):e.type=i.obstacle}},{key:"constructGrid",value:function(t,e){for(var n=0;n<t;n++){!this.nodes[n]&&this.nodes.push([]);for(var o=0;o<e;o++)this.nodes[n][o]||this.nodes[n].push({x:o,y:n,gCost:1/0,hCost:0,fCost:1/0,type:i.blank,parent:null})}if(this.columns>e)for(var s=0;s<this.rows;s++)this.nodes[s].splice(e,this.columns);this.rows>t&&this.nodes.splice(t,this.rows),(this.source.x>t-1||this.source.y>t-1)&&(this.source.exists=!1),(this.destination.x>t-1||this.destination.y>t-1)&&(this.destination.exists=!1),this.columns=e,this.rows=t}},{key:"mounted",value:function(){var t=(0,c.Z)((0,u.Z)().mark((function t(){var e=this;return(0,u.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return document.onmousedown=function(){return e.mouseIsDown=!0},document.onmouseup=function(){return e.mouseIsDown=!1},this.rowSize=8,this.columnSize=12,m.w3.nextTick((function(){return e.debounceWait=500})),t.next=7,E("Rows and Cols are editable ✏️","info");case 7:N("Tap Twice for Start/End Point 📌","info"),N("Tap once for Obstacles ⚫","info");case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"exportAsJSON",value:function(){var t=JSON.stringify({Title:"A* Path Finder Layout File",Author:"Keval Shah",nodes:this.nodes,source:this.source,destination:this.destination}),e=new Blob([t],{type:"application/json"}),n=document.createElement("a");n.setAttribute("href",window.URL.createObjectURL(e)),n.setAttribute("download","layout.json"),n.click()}},{key:"importJSON",value:function(){var t,e=this,n={};if(n=(null===(t=this.fileInput.files)||void 0===t?void 0:t.length)&&this.fileInput.files[0],n&&"application/json"==n.type){var i=new FileReader;i.readAsText(n),i.onload=function(t){var n=t.target?JSON.parse(t.target.result):{};"A* Path Finder Layout File"==n.Title?(e.debounceWait=0,e.rowSize=n.nodes.length,e.columnSize=n.nodes[0].length,setTimeout((function(){e.nodes=n.nodes,e.source=n.source,e.destination=n.destination,N("Imported the Layout","success")}),500),m.w3.nextTick((function(){return e.debounceWait=500}))):N("Invalid File or File Type.","error")}}else N("Invalid File or File Type.","error")}},{key:"resetLayout",value:function(){this.source.exists=!1,this.destination.exists=!1,this.nodes.forEach((function(t){t.forEach((function(t){t.type=i.blank,t.parent=null,t.gCost=1/0,t.hCost=0,t.fCost=1/0}))})),this.source.exists=!1,this.destination.exists=!1}},{key:"clearPath",value:function(){this.nodes.forEach((function(t){t.forEach((function(t){t.type!==i.visited&&t.type!==i.path||(t.type=i.blank,t.parent=null,t.gCost=1/0,t.hCost=0,t.fCost=1/0)}))}))}},{key:"findPath",value:function(){if(this.source&&this.destination){var t=[],e=[];t.push(this.nodes[this.source.y][this.source.x]);while(t.length>0){for(var n=t[0],o=1;o<t.length;o++)(t[o].fCost<n.fCost||t[o].fCost===n.fCost&&t[o].hCost<n.hCost)&&(n=t[o]);if(t.splice(t.indexOf(n),1),e.push(n),n.x===this.destination.x&&n.y===this.destination.y)return void this.retracePath(this.nodes[this.source.y][this.source.x],this.nodes[this.destination.y][this.destination.x]);var s,r=this.getNeighbors(n),u=(0,a.Z)(r);try{for(u.s();!(s=u.n()).done;){var c=s.value;if(!e.includes(c)&&"obstacle"!==c.type){c.type!=i.destination&&(c.type=i.visited);var l=n.gCost+this.getDistance(n,c);(l<c.gCost||!t.includes(c))&&(c.gCost=l,c.hCost=this.getDistance(c,this.destination),c.fCost=c.gCost+c.hCost,c.parent=n,t.includes(c)||t.push(c))}}}catch(d){u.e(d)}finally{u.f()}}console.log(this.source,this.destination)}}},{key:"getDistance",value:function(t,e){var n=Math.abs(t.x-e.x),i=Math.abs(t.y-e.y);return n+i}},{key:"getNeighbors",value:function(t){var e=[],n=t.x,i=t.y;return this.isInGrid(n-1,i)&&e.push(this.nodes[i][n-1]),this.isInGrid(n+1,i)&&e.push(this.nodes[i][n+1]),this.isInGrid(n,i-1)&&e.push(this.nodes[i-1][n]),this.isInGrid(n,i+1)&&e.push(this.nodes[i+1][n]),e}},{key:"isInGrid",value:function(t,e){return t>=0&&t<this.columnSize&&e>=0&&e<this.rowSize}},{key:"retracePath",value:function(t,e){var n=[],i=e;while(i!==t)n.push(i),i=i.parent;n.reverse();n.pop();this.highlightPath(n)}},{key:"highlightPath",value:function(t){var e=this;t.forEach((function(t){e.nodes[t.y][t.x].type=i.path}))}}]),n}(m.w3);F([(0,m.Rl)("fileInput")],D.prototype,"fileInput",void 0),F([(0,m.RL)("columnSize")],D.prototype,"onColSizeChanged",null),F([(0,m.RL)("rowSize")],D.prototype,"onRowSizeChanged",null),D=F([(0,m.wA)({components:{GridButton:P,AStarLogo:A}})],D);const $=D,J=$;var M=(0,k.Z)(J,s,r,!1,null,"c1e54c6e",null);const U=M.exports;var W=n(3486);o.ZP.use(W.ZP);var B=[{path:"/",name:"home",component:U}],V=new W.ZP({routes:B});const q=V;var H=n(371),K=n.n(H);o.ZP.config.productionTip=!1,o.ZP.use(K(),{position:"top-right",duration:4e3}),new o.ZP({router:q,render:function(t){return t(U)}}).$mount("#app")}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={id:i,loaded:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}n.m=t,(()=>{var t=[];n.O=(e,i,o,s)=>{if(!i){var r=1/0;for(l=0;l<t.length;l++){for(var[i,o,s]=t[l],a=!0,u=0;u<i.length;u++)(!1&s||r>=s)&&Object.keys(n.O).every((t=>n.O[t](i[u])))?i.splice(u--,1):(a=!1,s<r&&(r=s));if(a){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[i,o,s]}})(),(()=>{n.n=t=>{var e=t&&t.__esModule?()=>t["default"]:()=>t;return n.d(e,{a:e}),e}})(),(()=>{n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t)})(),(()=>{var t={143:0};n.O.j=e=>0===t[e];var e=(e,i)=>{var o,s,[r,a,u]=i,c=0;if(r.some((e=>0!==t[e]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(u)var l=u(n)}for(e&&e(i);c<r.length;c++)s=r[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(l)},i=self["webpackChunkpathfinder"]=self["webpackChunkpathfinder"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();var i=n.O(void 0,[998],(()=>n(8900)));i=n.O(i)})();
//# sourceMappingURL=app.673a876e.js.map