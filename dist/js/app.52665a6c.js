(function(e){function t(t){for(var o,s,u=t[0],c=t[1],l=t[2],p=0,d=[];p<u.length;p++)s=u[p],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);a&&a(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,u=1;u<n.length;u++){var c=n[u];0!==i[c]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var a=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},5509:function(e,t,n){"use strict";n("bcbd")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-header"),n("div",{attrs:{id:"appContainer"}},[n("speech",{attrs:{addNote:e.addNote,deleteNote:e.deleteNote,removeAllNotes:e.removeAllNotes}}),e._l(e.notes,(function(e){return n("note-item",{key:e.id,attrs:{noteItem:e}})}))],2)],1)},r=[],s=(n("c740"),n("a434"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[e._v(" Speech Recognition | Vue | Xeorleon ")])}),u=[],c=n("2877"),l={},a=Object(c["a"])(l,s,u,!1,null,null,null),p=a.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"note_item"},[n("div",{staticClass:"id_content"},[n("span",[e._v(" #"+e._s(e.noteItem.id)+" ")])]),n("div",{staticClass:"note_content"},[e._v(" "+e._s(e.noteItem.note)+" ")])])},f=[],h={props:{noteItem:{type:Object,required:!0}}},v=h,m=Object(c["a"])(v,d,f,!1,null,null,null),F=m.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"speech_container"},[n("i",{staticClass:"fa fa-microphone fa-3x",class:{isListening:e.isListening},on:{click:e.listen}}),null!=e.speechToText?n("p",{staticClass:"speechToText"},[e._v(" "+e._s(e.speechToText)+" ")]):e._e()])},b=[],_=(n("ac1f"),n("9558")),x={props:{addNote:{type:Function,required:!0},deleteNote:{type:Function,required:!0},removeAllNotes:{type:Function,required:!0}},data:function(){return{speechToText:null,isListening:!1,recognition:null}},methods:{listen:function(){this.isListening=!0,this.recognition.start()},record:function(e){var t=this;this.isListening=!1,this.speechToText=e.results[0][0].transcript;var n=Object(_["a"])(/(([0-9]*))[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF](?=nolu)(?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*(([s\u017F]il))$/gi,{id:1,command:3}),o=n.exec(this.speechToText),i=/t\xFCm notlar\u0131 [s\u017F]il/gi,r=i.test(this.speechToText);setTimeout((function(){o&&o.groups.id&&o.groups.command?t.deleteNote(o.groups.id):r?t.removeAllNotes():t.addNote(e.results[0][0].transcript),t.speechToText=null}),1e3)}},mounted:function(){this.recognition=new webkitSpeechRecognition,this.recognition.lang="tr",this.recognition.onresult=this.record}},y=x,T=(n("5509"),Object(c["a"])(y,g,b,!1,null,"4caae31c",null)),O=T.exports,j={components:{appHeader:p,noteItem:F,speech:O},data:function(){return{notes:[],nnotes:[{id:1,note:"note 1"},{id:2,note:"note 2"},{id:3,note:"note 3"},{id:4,note:"note 4"}]}},methods:{addNote:function(e){this.notes.push({id:this.notes.length+1,note:e})},deleteNote:function(e){this.notes.splice(this.notes.findIndex((function(t){return t.id==e})),1)},removeAllNotes:function(){this.notes=[]}}},N=j,w=Object(c["a"])(N,i,r,!1,null,null,null),D=w.exports;n("7d05");o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(D)}}).$mount("#app")},"7d05":function(e,t,n){},bcbd:function(e,t,n){}});
//# sourceMappingURL=app.52665a6c.js.map