(this["webpackJsonpassignment-blob-storage"]=this["webpackJsonpassignment-blob-storage"]||[]).push([[0],{4:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var l=n(0),a=n.n(l),i=n(3),o=n.n(i),r=n(1);var s=function(){var e=Object(l.useState)(null),t=Object(r.a)(e,2),n=t[0],i=t[1],o=Object(l.useState)([]),s=Object(r.a)(o,2),c=s[0],m=s[1];function b(){window.blobService&&window.blobService.listBlobsSegmented("images",null,(function(e,t){e||m(t.entries)}))}return Object(l.useEffect)((function(){b()}),[]),console.log(c),a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-start"}},a.a.createElement("h1",null,"Upload Image"),a.a.createElement("input",{type:"file",onChange:function(e){var t=Array.from(e.target.files)[0];i(t)}}),a.a.createElement("br",null),a.a.createElement("button",{type:"button",onClick:function(){if(n)if("image/png"===n.type||"image/jpeg"===n.type)if(n.size>=1048576)alert("File size must not smaller than 1MB!");else{var e=n.size>33554432?4194304:524288;window.blobService.singleBlobPutThresholdInBytes=e,window.blobService.createBlockBlobFromBrowserFile("images",n.name,n,{blockSize:e},(function(e,t,n){e||b()}))}else alert("File is not an image!");else alert("File is empty!")}},"Upload"),a.a.createElement("br",null),c.map((function(e,t){return a.a.createElement("div",{style:{display:"flex",alignItems:"flex-start"}},a.a.createElement("img",{key:t,alt:t,style:{width:300,display:"block"},src:"".concat(window.blobUri,"/images/").concat(e.name)}),a.a.createElement("button",{type:"button",onClick:(n=e.name,function(){window.blobService.deleteBlobIfExists("images",n,(function(e,t){e||b()})),console.log(n)})},"Delete"),a.a.createElement("br",null));var n})))};o.a.render(a.a.createElement(s,null),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.c3c9bf11.chunk.js.map