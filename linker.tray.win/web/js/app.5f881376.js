(function(){"use strict";var e={8835:function(e,n,t){t.d(n,{E1:function(){return a},Iv:function(){return u},P$:function(){return c},ai:function(){return i},zj:function(){return r}});var o=t(4);const r=()=>(0,o.zG)("configclient/get"),i=e=>(0,o.zG)("configclient/install",e),c=e=>(0,o.zG)("configclient/export",e),u=()=>(0,o.zG)("configclient/SyncNames"),a=e=>(0,o.zG)("configclient/Sync",e)},4:function(e,n,t){t.d(n,{a1:function(){return v},e3:function(){return b},jH:function(){return C},zG:function(){return y}});t(4114),t(6573),t(8100),t(7936);var o=t(1219);let r=0,i=null,c="",u=1,a="";const s={},l={connected:!1,connecting:!1},d=()=>{const e=Date.now();for(let n in s){const t=s[n];e-t.time>t.timeout&&(t.reject("超时~"),delete s[n])}setTimeout(d,1e3)};d();const f={subs:{},add:function(e,n){"function"==typeof n&&(this.subs[e]||(this.subs[e]=[]),this.subs[e].push(n))},remove(e,n){let t=this.subs[e]||[];for(let o=t.length-1;o>=0;o--)t[o]==n&&t.splice(o,1)},push(e,n){let t=this.subs[e]||[];for(let o=t.length-1;o>=0;o--)t[o](n)}},p=()=>{l.connected=!0,l.connecting=!1,f.push(w,l.connected)},h=e=>{l.connected=!1,l.connecting=!1,f.push(w,l.connected),setTimeout((()=>{v()}),1e3)},g=e=>{if("string"!=typeof e.data)return void e.data.arrayBuffer().then((n=>{const t=new DataView(n).getInt8(),o=new FileReader;o.readAsText(e.data.slice(4,4+t),"utf8"),o.onload=()=>{let r=JSON.parse(o.result);r.Content={Name:r.Content,Img:e.data.slice(4+t,e.data.length),ArrayBuffer:n},m(r)}}));let n=JSON.parse(e.data);m(n)},m=e=>{let n=s[e.RequestId];n?(0==e.Code?n.resolve(e.Content):1==e.Code?n.reject(e.Content):255==e.Code?(n.reject(e.Content),n.errHandle||o.nk.error(`${n.path}:${e.Content}`)):f.push(e.Path,e.Content),delete s[e.RequestId]):f.push(e.Path,e.Content)},v=(e=c,n=a)=>{if(a=n,c=e,l.connecting||l.connected)return;null!=i&&i.close(),l.connecting=!0;const t=n||"snltty";i=new WebSocket(c,[t]),i.iddd=++u,i.onopen=p,i.onclose=h,i.onmessage=g},b=()=>{i&&i.close()},y=(e,n={},t=!1,o=15e3)=>new Promise(((c,u)=>{let a=++r;try{s[a]={resolve:c,reject:u,errHandle:t,path:e,time:Date.now(),timeout:o};let r=JSON.stringify({Path:e,RequestId:a,Content:"string"==typeof n?n:JSON.stringify(n)});l.connected&&1==i.readyState?i.send(r):u("网络错误~")}catch(d){console.log(d),u("网络错误~"),delete s[a]}})),w=Symbol(),C=e=>{f.add(w,e)}},9299:function(e,n,t){t.d(n,{BS:function(){return s},SZ:function(){return c},Se:function(){return l},VN:function(){return u},gC:function(){return d},jU:function(){return i},nD:function(){return a},rd:function(){return r},zp:function(){return f}});var o=t(4);const r=e=>(0,o.zG)("signInclient/set",e),i=e=>(0,o.zG)("signInclient/setservers",e),c=()=>(0,o.zG)("signInclient/info"),u=e=>(0,o.zG)("signInclient/setorder",e),a=e=>(0,o.zG)("signInclient/List",e),s=e=>(0,o.zG)("signInclient/ids",e),l=e=>(0,o.zG)("signInclient/del",e),d=e=>(0,o.zG)("signInclient/setname",e),f=e=>(0,o.zG)("signInclient/SetGroups",e)},3616:function(e,n,t){var o=t(5130),r=t(6768);function i(e,n,t,o,i,c){const u=(0,r.g2)("router-view"),a=(0,r.g2)("Api");return(0,r.uX)(),(0,r.CE)("div",null,[o.configed?((0,r.uX)(),(0,r.Wv)(u,{key:0})):(0,r.Q3)("",!0),(0,r.bF)(a)])}var c=t(3830);const u={class:"port-wrap t-c"},a={class:"pdt-10"};function s(e,n,t,o,i,c){const s=(0,r.g2)("el-input"),l=(0,r.g2)("el-button"),d=(0,r.g2)("el-dialog");return(0,r.uX)(),(0,r.Wv)(d,{class:"options-center",title:"管理接口","destroy-on-close":"",modelValue:o.showPort,"onUpdate:modelValue":n[2]||(n[2]=e=>o.showPort=e),center:"","show-close":!1,"close-on-click-modal":!1,"align-center":"",width:"200"},{footer:(0,r.k6)((()=>[(0,r.bF)(l,{type:"success",onClick:o.handleConnect1,plain:""},{default:(0,r.k6)((()=>[(0,r.eW)("确 定")])),_:1},8,["onClick"])])),default:(0,r.k6)((()=>[(0,r.Lk)("div",u,[(0,r.Lk)("div",null,[(0,r.eW)(" 接口 : "),(0,r.bF)(s,{modelValue:o.state.api,"onUpdate:modelValue":n[0]||(n[0]=e=>o.state.api=e),style:{width:"70%"}},null,8,["modelValue"])]),(0,r.Lk)("div",a,[(0,r.eW)(" 秘钥 : "),(0,r.bF)(s,{type:"password",modelValue:o.state.psd,"onUpdate:modelValue":n[1]||(n[1]=e=>o.state.psd=e),style:{width:"70%"}},null,8,["modelValue"])])])])),_:1},8,["modelValue"])}var l=t(1387),d=t(144),f=t(4),p=t(9299),h=t(8835),g=t(7477),m={components:{Tools:g.S0q},props:["config"],setup(e){const n=(0,c.B)(),t=(0,l.rd)(),o=(0,l.lq)(),i={api:`${window.location.hostname}:1803`,psd:"snltty"},u=JSON.parse(localStorage.getItem("api-cache")||JSON.stringify(i)),a=(0,d.Kh)({api:u.api,psd:u.psd,showPort:!1}),s=(0,r.EW)((()=>0==n.value.api.connected&&a.showPort)),g=()=>{u.api=a.api,u.psd=a.psd,localStorage.setItem("api-cache",JSON.stringify(u)),(0,f.e3)();const e=`ws${"https:"===window.location.protocol?"s":""}://${a.api}`;(0,f.a1)(e,a.psd)},m=()=>{g(),window.location.reload()},v=()=>{(0,h.zj)().then((e=>{n.value.config.Common=e.Common,n.value.config.Client=e.Client,n.value.config.Server=e.Server,n.value.config.Running=e.Running,n.value.config.configed=!0,setTimeout((()=>{v()}),1e3)})).catch((e=>{setTimeout((()=>{v()}),1e3)}))},b=()=>{(0,p.SZ)().then((e=>{n.value.signin.Connected=e.Connected,n.value.signin.Connecting=e.Connecting,n.value.signin.Version=e.Version,setTimeout((()=>{b()}),1e3)})).catch((e=>{setTimeout((()=>{b()}),1e3)}))};return(0,r.sV)((()=>{setTimeout((()=>{a.showPort=!0}),500),(0,f.jH)((e=>{e&&(v(),b())})),t.isReady().then((()=>{a.api=o.query.api?`${window.location.hostname}:${o.query.api}`:a.api,a.psd=o.query.psd||a.psd,g()}))})),{state:a,showPort:s,handleConnect1:m}}},v=t(1241);const b=(0,v.A)(m,[["render",s],["__scopeId","data-v-08751c59"]]);var y=b,w={components:{Api:y},setup(e){const n=(0,c.v)(),t=(0,r.EW)((()=>n.value.config.configed));return{configed:t}}};const C=(0,v.A)(w,[["render",i]]);var S=C;const k=[{path:"/",name:"Full",component:()=>Promise.all([t.e(39),t.e(183),t.e(827)]).then(t.bind(t,3112)),redirect:"/full/index.html",children:[{path:"/full/index.html",name:"FullIndex",component:()=>Promise.all([t.e(39),t.e(110),t.e(457)]).then(t.bind(t,8908))},{path:"/full/servers.html",name:"FullServers",component:()=>t.e(256).then(t.bind(t,256))},{path:"/full/transport.html",name:"FullTransport",component:()=>t.e(225).then(t.bind(t,3225))},{path:"/full/action.html",name:"FullAction",component:()=>t.e(424).then(t.bind(t,6424))},{path:"/full/logger.html",name:"FullLogger",component:()=>t.e(352).then(t.bind(t,352))}]},{path:"/net/index.html",name:"Network",component:()=>Promise.all([t.e(39),t.e(183),t.e(110),t.e(76)]).then(t.bind(t,9256))},{path:"/no-permission.html",name:"NoPermission",component:()=>t.e(31).then(t.bind(t,4083))}],P=(0,l.aE)({history:(0,l.Bt)(),routes:k});var A=P,B=t(6161);t(4188),t(2355),t(1862);const I=(0,o.Ef)(S);I.use(B.A,{size:"default"}).use(A).mount("#app")},3830:function(e,n,t){t.d(n,{B:function(){return a},v:function(){return u}});var o=t(4),r=t(144),i=t(6768);const c=Symbol(),u=()=>{const e=(0,r.KR)({api:{connected:!1},height:0,config:{Common:{},Client:{Servers:[],Accesss:{}},Server:{},Running:{Relay:{Servers:[]},Tuntap:{IP:"",PrefixLength:24},Client:{Servers:[]},AutoSyncs:{}},configed:!1},signin:{Connected:!1,Connecting:!1,Version:"v1.0.0.0"},bufferSize:["1KB","2KB","4KB","8KB","16KB","32KB","64KB","128KB","256KB","512KB","1024KB"],updater:{},self:{},hasAccess(e){if(void 0==this.config.Client.Accesss[e])return!1;const n=this.config.Client.Accesss[e].Value||-1,t=this.config.Client.Access||-1;return t>=0&&(0==t||+(BigInt(t)&BigInt(n)).toString()==n)}});return(0,o.jH)((n=>{e.value.api.connected=n})),(0,i.Gt)(c,e),e},a=()=>(0,i.WQ)(c)}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,i){if(!o){var c=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var u=!0,a=0;a<o.length;a++)(!1&i||c>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[a])}))?o.splice(a--,1):(u=!1,i<c&&(c=i));if(u){e.splice(l--,1);var s=r();void 0!==s&&(n=s)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{31:"01e549ae",39:"695c2adf",76:"61170c94",110:"9a1f7113",183:"9a80af0b",225:"8a3da4f8",256:"8161f834",352:"678c694a",424:"f2a1d18e",457:"e1614c70",827:"ca8f5e05"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{31:"64181b05",76:"a8147928",225:"4f041b3c",256:"4e351ac8",352:"56e27aad",424:"a59dc963",457:"f507843b",827:"8be8ee26"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="linker.web:";t.l=function(o,r,i,c){if(e[o])e[o].push(r);else{var u,a;if(void 0!==i)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var d=s[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+i){u=d;break}}u||(a=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+i),u.src=o),e[o]=[r];var f=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),a&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,n,o,r,i){var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",t.nc&&(c.nonce=t.nc);var u=function(t){if(c.onerror=c.onload=null,"load"===t.type)r();else{var o=t&&t.type,u=t&&t.target&&t.target.href||n,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+u+")");a.name="ChunkLoadError",a.code="CSS_CHUNK_LOAD_FAILED",a.type=o,a.request=u,c.parentNode&&c.parentNode.removeChild(c),i(a)}};return c.onerror=c.onload=u,c.href=n,o?o.parentNode.insertBefore(c,o.nextSibling):document.head.appendChild(c),c},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var c=document.getElementsByTagName("style");for(o=0;o<c.length;o++){r=c[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var c=t.miniCssF(o),u=t.p+c;if(n(c,u))return r();e(o,u,null,r,i)}))},r={524:0};t.f.miniCss=function(e,n){var t={31:1,76:1,225:1,256:1,352:1,424:1,457:1,827:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var c=t.p+t.u(n),u=new Error,a=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+i+": "+c+")",u.name="ChunkLoadError",u.type=i,u.request=c,r[1](u)}};t.l(c,a,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,c=o[0],u=o[1],a=o[2],s=0;if(c.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(a)var l=a(t)}for(n&&n(o);s<c.length;s++)i=c[s],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},o=self["webpackChunklinker_web"]=self["webpackChunklinker_web"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(3616)}));o=t.O(o)})();