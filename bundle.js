!function(t){var e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=35)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",s=t[3];if(!s)return n;if(e&&"function"==typeof btoa){var o=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(s),i=s.sources.map(function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var s={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(s[i]=!0)}for(o=0;o<t.length;o++){var r=t[o];"number"==typeof r[0]&&s[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},function(t,e,n){var s={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var s=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(t){s=null}e[t]=s}return e[t]}}(),r=null,a=0,l=[],d=n(8);function c(t,e){for(var n=0;n<t.length;n++){var o=t[n],i=s[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(g(o.parts[r],e))}else{var a=[];for(r=0;r<o.parts.length;r++)a.push(g(o.parts[r],e));s[o.id]={id:o.id,refs:1,parts:a}}}}function h(t,e){for(var n=[],s={},o=0;o<t.length;o++){var i=t[o],r=e.base?i[0]+e.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};s[r]?s[r].parts.push(a):n.push(s[r]={id:r,parts:[a]})}return n}function u(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var s=l[l.length-1];if("top"===t.insertAt)s?s.nextSibling?n.insertBefore(e,s.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),l.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertAt.before,n);n.insertBefore(e,o)}}function p(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function f(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var s=function(){0;return n.nc}();s&&(t.attrs.nonce=s)}return m(e,t.attrs),u(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,s,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var l=a++;n=r||(r=f(e)),s=y.bind(null,n,l,!1),o=y.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),u(t,e),e}(e),s=function(t,e,n){var s=n.css,o=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(s=d(s));o&&(s+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([s],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}.bind(null,n,e),o=function(){p(n),n.href&&URL.revokeObjectURL(n.href)}):(n=f(e),s=function(t,e){var n=e.css,s=e.media;s&&t.setAttribute("media",s);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){p(n)});return s(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;s(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return c(n,e),function(t){for(var o=[],i=0;i<n.length;i++){var r=n[i];(a=s[r.id]).refs--,o.push(a)}t&&c(h(t,e),e);for(i=0;i<o.length;i++){var a;if(0===(a=o[i]).refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete s[a.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function y(t,e,n,s){var o=n?"":s.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var i=document.createTextNode(o),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(i,r[e]):t.appendChild(i)}}},,,,,function(t,e,n){var s=n(7);"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(s,o);s.locals&&(t.exports=s.locals)},function(t,e,n){(t.exports=n(0)(!1)).push([t.i,"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}\n",""])},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,s=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:s+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,n){var s=n(10);"string"==typeof s&&(s=[[t.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(s,o);s.locals&&(t.exports=s.locals)},function(t,e,n){var s=n(11);(t.exports=n(0)(!1)).push([t.i,"body{background:url("+s(n(12))+");background-repeat:no-repeat;background-size:cover}.main-div{display:flex;justify-content:space-between}.header{height:80px;width:100%;background:#212021;text-align:center}.header h1{font-family:'Hammersmith One';color:#BD246C;font-size:50px;padding-top:15px;text-shadow:-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white}.instructions{width:600px;height:400px;position:relative;text-align:center;display:flex;justify-content:center;align-items:center}.text{position:absolute;bottom:-50px;left:-75px;width:720px;z-index:-1}.cat{position:absolute;bottom:-90px;left:130px;width:150px}.instructions-box{position:absolute;top:70px;font-family:'Hammersmith One';font-size:20px;width:400px;line-height:2em;text-align:center}.demo-btn{position:absolute;bottom:-100px;right:60px;width:150px;height:40px;border-radius:20px;font-family:'Hammersmith One';font-size:20px;transition:.5s}.start-btn{position:absolute;bottom:-40px;right:60px;width:150px;height:40px;border-radius:20px;font-family:'Hammersmith One';font-size:20px;transition:.5s}.start-btn:hover{cursor:pointer;background:lightcoral;color:white}.demo-btn:hover{cursor:pointer;background:lightcoral;color:white}.start-btn:disabled,.demo-btn:disabled{background:darkgrey;color:white}.start-btn:disabled:hover,.demo-btn:disabled:hover{cursor:not-allowed}.instructions button:focus,.instructions button:active{outline:none}.canvas-container{width:800px !important;height:500px;background:white;border-bottom-left-radius:10px;border:8px solid black;border-top:none;border-right:none;position:relative}.canvas{position:absolute;bottom:100px;right:60px}.canvas2{position:absolute;bottom:100px;right:60px;background:transparent;z-index:1}.canvas-container img{position:absolute;width:550px;bottom:33px;right:105px}.letter-shower{font-family:\"Hammersmith One\";font-size:100px;text-align:center;padding-top:20px;padding-right:30px}.message-box{text-align:center;font-family:\"Hammersmith One\";font-size:30px;padding-top:30px;color:#B03F90}.bad{color:#E75F23}.good{color:#16BD99}.hidden{display:none}\n",""])},function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},function(t,e,n){t.exports=n.p+"assets/images/Relay.jpg"},function(t,e,n){t.exports=n.p+"assets/images/catty-t.png"},function(t,e,n){t.exports=n.p+"assets/images/catty.png"},function(t,e,n){t.exports=n.p+"assets/images/gradient.png"},function(t,e,n){t.exports=n.p+"assets/images/keyhelper.png"},function(t,e,n){t.exports=n.p+"assets/images/piano-cat.png"},function(t,e,n){t.exports=n.p+"assets/images/spritesheet.png"},function(t,e,n){t.exports=n.p+"assets/images/spritesheet1.png"},function(t,e,n){t.exports=n.p+"assets/images/text-box.png"},function(t,e,n){t.exports=n.p+"assets/images/Wiretap.jpg"},function(t,e,n){t.exports=n.p+"assets/sounds/a.wav"},function(t,e,n){t.exports=n.p+"assets/sounds/asharp.wav"},function(t,e,n){t.exports=n.p+"assets/sounds/b.wav"},function(t,e,n){t.exports=n.p+"assets/sounds/c.wav"},function(t,e,n){t.exports=n.p+"assets/sounds/csharp.wav"},function(t,e,n){t.exports=n.p+"assets/sounds/d.wav"},function(t,e,n){t.exports=n.p+"assets/sounds/dsharp.wav"},function(t,e,n){t.exports=n.p+"assets/sounds/e.wav"},function(t,e,n){t.exports=n.p+"assets/sounds/f.wav"},function(t,e,n){t.exports=n.p+"assets/sounds/fsharp.wav"},function(t,e,n){t.exports=n.p+"assets/sounds/g.wav"},function(t,e,n){t.exports=n.p+"assets/sounds/gsharp.wav"},function(t,e,n){t.exports=n.p+"assets/sounds/hiC.wav"},function(t,e,n){"use strict";n.r(e);n(6),n(9),n(13),n(14),n(15),n(16),n(17),n(18),n(19),n(20),n(21),n(22),n(23),n(24),n(25),n(26),n(27),n(28),n(29),n(30),n(31),n(32),n(33),n(34);var s=class{constructor(t,e,n,s,o,i){this.xpos=t,this.ypos=e,this.note=n,this.name=s,this.color=o,this.key=i,this.audio=new Audio,this.audio.src=`../assets/sounds/${this.note}.wav`,this.image=new Image,this.image.src="https://github.com/amanpriya-k/piano-cat/blob/master/assets/images/spritesheet.png",this.onKeyDown=this.onKeyDown.bind(this),this.draw=this.draw.bind(this)}onKeyDown(t,e,n){if(!this.audio)return;this.audio.currentTime=0,this.audio.play(),this.image=new Image,this.image.src="../assets/images/spritesheet.png";const s=document.getElementById("letter-shower");s.innerHTML=this.name,this.image.onload=(()=>{"white"===this.color?"green"==n?t.drawImage(this.image,100,0,70,300,this.xpos,this.ypos,50,200):t.drawImage(this.image,200,0,70,300,this.xpos,this.ypos,50,200):"green"==n?e.drawImage(this.image,440,0,50,300,this.xpos,this.ypos+2,50,140):e.drawImage(this.image,503,0,50,300,this.xpos,this.ypos+2,50,140)}),window.setTimeout(()=>{this.draw(t,e),s.innerHTML=""},200)}draw(t,e){this.image=new Image,this.image.src="../assets/images/spritesheet.png",this.image.onload=(()=>{"white"===this.color?t.drawImage(this.image,0,0,70,300,this.xpos,this.ypos,50,200):e.drawImage(this.image,380,0,50,300,this.xpos,this.ypos+2,50,140)})}};var o=class{constructor(){this.keys={},this.addKeys(),this.handleKeyDown=this.handleKeyDown.bind(this)}handleKeyDown(t,e,n,s){switch(t){case"s":this.keys.c.onKeyDown(e,n,s);break;case"e":this.keys.cS.onKeyDown(e,n,s);break;case"d":this.keys.d.onKeyDown(e,n,s);break;case"r":this.keys.dS.onKeyDown(e,n,s);break;case"f":this.keys.e.onKeyDown(e,n,s);break;case"g":this.keys.f.onKeyDown(e,n,s);break;case"y":this.keys.fS.onKeyDown(e,n,s);break;case"h":this.keys.g.onKeyDown(e,n,s);break;case"u":this.keys.gS.onKeyDown(e,n,s);break;case"j":this.keys.a.onKeyDown(e,n,s);break;case"i":this.keys.aS.onKeyDown(e,n,s);break;case"k":this.keys.b.onKeyDown(e,n,s);break;case"l":this.keys.hiC.onKeyDown(e,n,s)}}addKeys(){this.keys.c=new s(0,0,"c","C","white","s"),this.keys.cS=new s(33,0,"csharp","C#","black","e"),this.keys.d=new s(50,0,"d","D","white","d"),this.keys.dS=new s(83,0,"dsharp","D#","black","r"),this.keys.e=new s(100,0,"e","E","white","f"),this.keys.f=new s(150,0,"f","F","white","g"),this.keys.fS=new s(184,0,"fsharp","F#","black","y"),this.keys.g=new s(200,0,"g","G","white","h"),this.keys.gS=new s(232,0,"gsharp","G#","black","u"),this.keys.a=new s(250,0,"a","A","white","j"),this.keys.aS=new s(283,0,"asharp","A#","black","i"),this.keys.b=new s(300,0,"b","B","white","k"),this.keys.hiC=new s(350,0,"hic","C","white","l")}draw(t,e){Object.values(this.keys).forEach(n=>{n.draw(t,e)})}};var i=class{constructor({number:t,demo:e,notes:n,timeouts:s,instructions:i},r,a){this.number=t,this.demo=e,this.notes=n,this.timeouts=s,this.instructions=i,this.ctx=r,this.ctx2=a,this.instructionsEl=document.getElementById("instructions-el"),this.startBtnEl=document.getElementById("start-btn"),this.demoBtnEl=document.getElementById("demo-btn"),this.messageEl=document.getElementById("message-box"),this.startBtnEl.innerHTML="next",0!=this.number&&(this.startBtnEl.disabled=!0),this.play=this.play.bind(this),this.demoSounds=this.demoSounds.bind(this),this.displayInstructions=this.displayInstructions.bind(this),this.startListening=this.startListening.bind(this),this.handleListen=this.handleListen.bind(this),this.piano=new o,this.piano.draw(r,a),document.addEventListener("keypress",t=>{this.piano.handleKeyDown(t.key,r,a,"green")})}newLevel({number:t,demo:e,notes:n,timeouts:s,instructions:o}){this.startBtnEl.disabled=!0,this.demoBtnEl.disabled=!0,this.number=t,this.demo=e,this.notes=n,this.timeouts=s,this.instructions=o}displayInstructions(){this.instructionsEl.innerHTML=this.instructions,0!==this.number?this.messageEl.innerHTML=`level ${this.number}`:this.messageEl.innerHTML="try out the piano or click next to start!"}demoSounds(){this.demo.forEach((t,e)=>{let n=this.timeouts[e];console.log(n),window.setTimeout(()=>this.piano.handleKeyDown(t,this.ctx,this.ctx2,"green"),n)}),0!=this.number&&(this.demoBtnEl.disabled=!1)}startListening(){if(console.log("listening"),0===this.number)return void(this.startBtnEl.disabled=!1);let t=[];this.messageEl.innerHTML=`level ${this.number} - your turn!`,document.addEventListener("keypress",e=>t=this.handleListen(e,t))}handleListen(t,e){if(t.stopPropagation(),t.preventDefault(),e.length!=this.notes.length){let n;e.push(t.key),this.notes[e.length-1]!=t.key?(n="red",this.messageEl.innerHTML="uh oh - start over!",this.messageEl.classList.remove("good"),this.messageEl.classList.add("bad"),e=[]):(n="green",this.messageEl.innerHTML="nice!",this.messageEl.classList.remove("bad"),this.messageEl.classList.add("good")),this.piano.handleKeyDown(t.key,this.ctx,this.ctx2,n)}return e.length===this.notes.length?(this.startBtnEl.disabled=!1,this.messageEl.innerHTML="great job! click 'next' to go to the next level.",this.messageEl.classList.add("good"),e):e}play(){this.displayInstructions(),this.demoBtnEl.innerHTML="play it again",this.demoBtnEl.disabled=!0,this.demoBtnEl.addEventListener("click",this.demoSounds),window.setTimeout(this.demoSounds,1e3);let t=2e3+1e3*this.timeouts.slice(-1)[0];return window.setTimeout(this.startListening,t),!0}};const r=[{number:0,demo:[],notes:[],timeouts:[],instructions:"How To Play: There are 5 levels of the game! In each level you will learn a basic piano skill. I will play the notes for you, and you can play them back to me to go to the next level!"},{number:1,demo:["s","d","f","g","h","j","k","l"],notes:["s","d","f","g","h","j","k","l"],timeouts:[1e3,2e3,3e3,4e3,5e3,6e3,7e3,8e3],instructions:"Welcome! In this first level, you will be playing a simple major scale on the piano. Watch the keys light up and play, and then using your keyboard, play <br> 'C D E F G A B'."},{number:3,demo:["s","f","h","s","f","h"],notes:["s","f","h"],timeouts:[1e3,2e3,3e3,4e3,4e3,4e3],instructions:"Great job! In this level, you will learn to play a C major chord. Play <br> 'C E G '"},{number:4,demo:["d","y","j","d","y","j"],notes:["d","y","j"],timeouts:[1e3,2e3,3e3,4e3,4e3,4e3],instructions:"Awesome! Now I'll show you a D chord. Play the notes <br> 'D F# A."},{number:5,demo:["l","k","j","h","g"],notes:["d","y","j"],timeouts:[1e3,1750,2500,3250,2550],instructions:"You're ready to start playing a song! Follow after me: <br> 'C B A G F'"}];window.LEVELS=r;window.CURRENT_LEVEL=0,document.addEventListener("DOMContentLoaded",()=>{console.log("webpack is working! !!!");const t=document.getElementById("canvas"),e=document.getElementById("canvas2"),n=t.getContext("2d"),s=e.getContext("2d"),o=document.getElementById("start-btn");document.getElementById("demo-btn").classList.add("hidden");const l=new i(r[0],n,s);o.addEventListener("click",()=>{0!=window.CURRENT_LEVEL&&(o.disabled=!0),a(l)})});const a=function(t){0===window.CURRENT_LEVEL?t.play():(document.getElementById("demo-btn").classList.remove("hidden"),t.newLevel(window.LEVELS[window.CURRENT_LEVEL]),t.play()),window.CURRENT_LEVEL+=1}}]);
//# sourceMappingURL=bundle.js.map