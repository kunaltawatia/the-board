(function(t){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],d=0,h=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},i=[];function a(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-270bd826":"a10a635f","chunk-2d216214":"49bf1fba","chunk-2d216257":"256ee085"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=a(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[t]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"16c0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("f6f1"),i=n.n(o),a=n("1881"),s=n.n(a),c=n("8e27"),l=n.n(c),d=n("5132"),u=n.n(d),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"join"}},[n("label",[t._v("Enter Board ID")]),n("form",[n("input",{attrs:{type:"text",name:"boardurl",required:""}}),n("button",{attrs:{id:"submit",type:"submit"},on:{click:t.show}},[t._v("Join")])]),n("modal",{attrs:{name:"board",width:"80%",height:"80%"}},[n("board",{attrs:{boardId:t.boardId,close:t.close}})],1)],1)},f=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"hotkey",rawName:"v-hotkey",value:t.keymap,expression:"keymap"}],staticClass:"board"},[n("div",{attrs:{id:"whiteboard-container"},on:{resize:t.resize}},[n("canvas",{ref:"wb",attrs:{id:"whiteboard"},on:{mousedown:t.mousedown,mouseup:t.mouseup,mouseout:t.mouseup,mousemove:t.throttle}})]),n("div",{staticClass:"action-container"},[n("div",[t._l(t.colors,(function(e){return n("button",{key:e,staticClass:"fab",style:{"background-color":e},on:{click:function(){return t.changeColor(e)}}},[n("span",[t._v(t._s(e)+" "+t._s("\n( "+t.key[e]+" )"))])])})),n("button",{staticClass:"fab",on:{click:function(){return t.clear(!0)}}},[n("span",[t._v(t._s("clear \n( "+t.key.clear+" )"))]),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"12",height:"12",viewBox:"0 0 21 22"}},[n("defs",[n("clipPath",{attrs:{id:"clip-path"}},[n("rect",{attrs:{width:"21",height:"22",fill:"none"}})])]),n("g",{attrs:{id:"x","clip-path":"url(#clip-path)"}},[n("line",{attrs:{id:"Line_1169","data-name":"Line 1169",x1:"21",y2:"22",fill:"none",stroke:"#707070","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}}),n("line",{attrs:{id:"Line_1170","data-name":"Line 1170",x2:"21",y2:"22",fill:"none",stroke:"#707070","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])]),n("button",{staticClass:"fab",on:{click:t.download}},[n("span",[t._v(t._s("download \n( "+t.key.download+" )"))]),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"12",height:"12",viewBox:"0 0 24 21"}},[n("defs",[n("clipPath",{attrs:{id:"clip-path"}},[n("rect",{attrs:{width:"24",height:"21",fill:"none"}})])]),n("g",{attrs:{id:"download","clip-path":"url(#clip-path)"}},[n("path",{attrs:{id:"Path_971","data-name":"Path 971",d:"M27,15v4c0,1.1-1.194,2-2.667,2H5.667C4.194,21,3,20.1,3,19V15",transform:"translate(-3)",fill:"none",stroke:"#707070","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}}),n("path",{attrs:{id:"Path_972","data-name":"Path 972",d:"M7,10l8,5,8-5",transform:"translate(-3 -1.385)",fill:"none",stroke:"#707070","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}}),n("line",{attrs:{id:"Line_980","data-name":"Line 980",y1:"12",transform:"translate(12)",fill:"none",stroke:"#707070","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])],2),n("div",[n("button",{staticClass:"fab",on:{click:t.decreaseStrokeWidth}},[n("span",[t._v(t._s("decrease stroke width \n( "+t.key["decrease stroke width"]+" )"))]),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"12",height:"2",viewBox:"0 0 21 2"}},[n("defs",[n("clipPath",{attrs:{id:"clip-path"}},[n("rect",{attrs:{width:"19",fill:"none"}})])]),n("g",{attrs:{id:"minus",transform:"translate(1 1)","clip-path":"url(#clip-path)"}},[n("line",{attrs:{id:"minus-2","data-name":"minus",x2:"19",fill:"none",stroke:"#707070","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])]),n("p",{staticStyle:{"font-family":"'Roboto', arial, sans-serif",color:"#707070"}},[t._v(" "+t._s(t.current.strokeWidth)+" ")]),n("button",{staticClass:"fab",on:{click:t.increaseStrokeWidth}},[n("span",[t._v(t._s("increase stroke width \n( "+t.key["increase stroke width"]+" )"))]),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"12",height:"12",viewBox:"0 0 25 25"}},[n("defs",[n("clipPath",{attrs:{id:"clip-path"}},[n("rect",{attrs:{width:"25",height:"25",fill:"none"}})])]),n("g",{attrs:{id:"plus","clip-path":"url(#clip-path)"}},[n("line",{attrs:{id:"Line_1082","data-name":"Line 1082",y2:"25",transform:"translate(13)",fill:"none",stroke:"#707070","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}}),n("line",{attrs:{id:"Line_1083","data-name":"Line 1083",x2:"25",transform:"translate(0 13)",fill:"none",stroke:"#707070","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}})])])])])])])},w=[],k=n("5530"),m=n("b85c"),g=n("8baf"),v={name:"Board",props:["boardId","close"],data:function(){return{isConnected:!1,drawing:!1,current:{color:"black",previousDrawTime:0,strokeWidth:2},colors:["black","red","blue","green","yellow","white"],key:{black:"p",red:"r",blue:"b",green:"g",yellow:"y",white:"e",clear:"c",download:"d","increase stroke width":"]","decrease stroke width":"["}}},mounted:function(){this.resize(),this.$socket.emit("getBoard",this.boardId)},sockets:{connect:function(){this.isConnected=!0},disconnect:function(){this.isConnected=!1},draw:function(t){var e=t.slug,n=t.action;this.boardId==e&&this.drawAction(n)},drawBurst:function(t){var e,n=Object(m["a"])(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;this.drawAction(r)}}catch(o){n.e(o)}finally{n.f()}},clear:function(){this.clear()}},methods:{decreaseStrokeWidth:function(){this.current.strokeWidth=Math.max(2,this.current.strokeWidth-2)},increaseStrokeWidth:function(){this.current.strokeWidth=Math.min(32,this.current.strokeWidth+2)},resize:function(){var t=this.$refs.wb;t.width=t.clientWidth,t.height=t.clientHeight-4;var e=t.getContext("2d");e.fillStyle="white",e.fillRect(0,0,t.width,t.height)},drawAction:function(t){var e=t.x0,n=t.y0,r=t.x1,o=t.y1,i=t.color,a=t.strokeWidth;this.drawLine(e,n,r,o,i,a,!1)},drawLine:function(t,e,n,r,o,i){var a=arguments.length>6&&void 0!==arguments[6]&&arguments[6],s=this.$refs.wb,c=s.getContext("2d"),l=s.width,d=s.height;c.beginPath(),c.moveTo(t*l,e*d),c.lineTo(n*l,r*d),c.strokeStyle=o,c.lineWidth=i,c.stroke(),c.closePath(),a&&this.$socket.emit("draw",{slug:this.boardId,action:{x0:t,y0:e,x1:n,y1:r,color:o,strokeWidth:i}})},normalizeMouse:function(t){var e=t.clientX,n=t.clientY,r=this.$refs.wb,o=r.getBoundingClientRect();return e-=o.x,e/=o.width,n-=o.y,n/=o.height,{x:e,y:n}},addStroke:function(t){var e=this.normalizeMouse(t);this.drawLine(this.current.x,this.current.y,e.x,e.y,this.current.color,this.current.strokeWidth,!0)},setCurrent:function(t){this.current=Object(k["a"])(Object(k["a"])({},this.current),t)},mousedown:function(t){this.drawing=!0,this.setCurrent(this.normalizeMouse(t))},mouseup:function(t){this.drawing&&(this.addStroke(t),this.drawing=!1)},mousemove:function(t){this.drawing&&(this.addStroke(t),this.setCurrent(this.normalizeMouse(t)))},throttle:function(t){var e=(new Date).getTime();e-this.current.previousDrawTime>=10&&(this.current.previousDrawTime=e,this.mousemove(t))},clear:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.resize(),t&&this.$socket.emit("clear",this.boardId)},changeColor:function(t){"white"===this.current.color&&"white"!==t?this.current.strokeWidth=2:"white"==t&&(this.current.strokeWidth=32),this.current.color=t},download:function(){var t=this.$refs.wb,e=t.toDataURL("image/jpeg",1),n=new g["a"],r=n.internal.pageSize.getWidth(),o=t.height*r/t.width;n.addImage(e,"JPEG",0,0,r,o),n.save("Canvas-".concat((new Date).toLocaleString(),".pdf"))}},computed:{keymap:function(){var t=this;return{"]":this.increaseStrokeWidth,"[":this.decreaseStrokeWidth,c:this.clear,d:this.download,r:function(){return t.changeColor("red")},g:function(){return t.changeColor("green")},b:function(){return t.changeColor("blue")},y:function(){return t.changeColor("yellow")},p:function(){return t.changeColor("black")},e:function(){return t.changeColor("white")}}}}},b=v,y=(n("b2e8"),n("2877")),x=Object(y["a"])(b,p,w,!1,null,null,null),_=x.exports,C={components:{Board:_},name:"App",data:function(){return{boardId:""}},methods:{show:function(t){t.preventDefault(),this.boardId=document.querySelector('input[name="boardurl"]').value,this.$modal.show("board")},close:function(){this.$modal.hide("board")}}},j=C,P=(n("e896"),Object(y["a"])(j,h,f,!1,null,"60e6b742",null)),S=P.exports,W=n("8c4f");r["a"].use(W["a"]);var L=new W["a"]({mode:"history"}),O=l()("https://extension.webug.space");r["a"].config.productionTip=!1,r["a"].use(i.a),r["a"].use(new u.a({debug:!0,connection:O})),r["a"].use(s.a),new r["a"]({router:L,render:function(t){return t(S)}}).$mount("#app")},b2e8:function(t,e,n){"use strict";n("16c0")},d68d:function(t,e,n){},e896:function(t,e,n){"use strict";n("d68d")}});
//# sourceMappingURL=app.12022e50.js.map