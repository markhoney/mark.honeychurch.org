(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{169:function(t){t.exports=JSON.parse('{"a":0.08167,"b":0.01492,"c":0.02782,"d":0.04253,"e":0.12702,"f":0.02228,"g":0.02015,"h":0.06094,"i":0.06966,"j":0.00153,"k":0.00772,"l":0.04025,"m":0.02406,"n":0.06749,"o":0.07507,"p":0.01929,"q":0.00095,"r":0.05987,"s":0.06327,"t":0.09056,"u":0.02758,"v":0.00978,"w":0.0236,"x":0.0015,"y":0.01974,"z":0.00074}')},177:function(t,r,e){r.rotate=(t,r)=>{var e="";for(i=0;i<t.length;i++)64<t.charCodeAt(i)&&t.charCodeAt(i)<91?e+=String.fromCharCode((t.charCodeAt(i)-65+r)%26+65):96<t.charCodeAt(i)&&t.charCodeAt(i)<123?e+=String.fromCharCode((t.charCodeAt(i)-97+r)%26+97):e+=t.charAt(i);return e},r.rotation=t=>{for(var a={},o=0;o<26;o++)a[String.fromCharCode(97+o)]=0;const n=e(169);for(var i=[],c=0;c<26;c++){var s=Object.assign({},a);r.rotate(t,c).split("").forEach((function(t){t.toLowerCase()in s&&s[t.toLowerCase()]++}));var p=0;for(var u in s)p+=s[u];var l=0;for(u in s)l+=Math.abs(s[u]/p-n[u]);i.push(l)}return 26-i.indexOf(Math.min(...i))}},218:function(t,r,e){},543:function(t,r,e){"use strict";e(218)},578:function(t,r,e){"use strict";e.r(r);const a=e(177);var o={data:()=>({cypher:""}),computed:{rotation(){return a.rotation(this.cypher)},plain(){return a.rotate(this.cypher,26-this.rotation)}}},n=(e(543),e(5)),i=Object(n.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("form",[e("label",{attrs:{for:"caesar"}},[t._v("Rotation")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.rotation,expression:"rotation"}],attrs:{readonly:"",id:"caesar"},domProps:{value:t.rotation},on:{input:function(r){r.target.composing||(t.rotation=r.target.value)}}}),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.cypher,expression:"cypher"}],attrs:{id:"cypher"},domProps:{value:t.cypher},on:{input:function(r){r.target.composing||(t.cypher=r.target.value)}}}),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.plain,expression:"plain"}],attrs:{id:"plain",readonly:""},domProps:{value:t.plain},on:{input:function(r){r.target.composing||(t.plain=r.target.value)}}})])}),[],!1,null,"532f984f",null);r.default=i.exports}}]);