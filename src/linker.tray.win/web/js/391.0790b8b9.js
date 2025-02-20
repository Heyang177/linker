"use strict";(self["webpackChunklinker_web"]=self["webpackChunklinker_web"]||[]).push([[391],{5096:function(e,t,a){a.d(t,{A:function(){return p}});var l=a(6768);const o=e=>((0,l.Qi)("data-v-4892cd3c"),e=e(),(0,l.jt)(),e),s=o((()=>(0,l.Lk)("input",{type:"file",id:"file-input"},null,-1)));function n(e,t,a,o,n,r){const i=(0,l.g2)("PictureRounded"),d=(0,l.g2)("el-icon");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("a",{href:"javascript:;",onClick:t[0]||(t[0]=(...e)=>o.handleBg&&o.handleBg(...e))},[(0,l.bF)(d,null,{default:(0,l.k6)((()=>[(0,l.bF)(i)])),_:1})]),s],64)}var r=a(7477),i=a(2933),d={components:{PictureRounded:r.syp},props:["name"],setup(e){const t=`bg-${e.name}`,a=()=>{localStorage.getItem(t)?i.s.confirm("清除背景？","Warning",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{s()})).catch((()=>{})):document.getElementById("file-input").click()},o=e=>{const t=e.target.files[0];if(t)try{const e=new FileReader;e.onload=function(e){s(e.target.result)},e.readAsDataURL(t)}catch(a){}e.target.value=""},s=e=>{e?(document.body.className="sunny",localStorage.setItem(t,e),document.body.style=`background-image:url(${e})`):(document.body.className="",document.body.style="",localStorage.setItem(t,""))};return(0,l.sV)((()=>{document.getElementById("file-input").addEventListener("change",o),s(localStorage.getItem(t))})),{handleBg:a}}},u=a(1241);const c=(0,u.A)(d,[["render",n],["__scopeId","data-v-4892cd3c"]]);var p=c},2710:function(e,t,a){a.d(t,{A:function(){return rt}});var l=a(6768),o=a(4232),s=a.p+"img/coin.6431311b.svg",n=a.p+"img/qr.a05c5f6e.jpg";const r=e=>((0,l.Qi)("data-v-81a12f1c"),e=e(),(0,l.jt)(),e),i={class:"status-wrap flex"},d={class:"copy"},u=["title"],c=r((()=>(0,l.Lk)("img",{src:s,alt:"memory"},null,-1))),p={href:"https://github.com/snltty/linker",target:"_blank"},g=r((()=>(0,l.Lk)("div",{class:"flex-1"},null,-1))),m={class:"export"},f={class:"api"},v={class:"server"},h=r((()=>(0,l.Lk)("div",{class:"pay"},[(0,l.Lk)("img",{src:n,alt:""})],-1)));function w(e,t,a,s,n,r){const w=(0,l.g2)("Export"),y=(0,l.g2)("Api"),k=(0,l.g2)("Server"),b=(0,l.g2)("el-dialog");return(0,l.uX)(),(0,l.CE)("div",i,[(0,l.Lk)("div",d,[(0,l.Lk)("a",{href:"javascript:;",class:"memory",title:e.$t("status.support"),onClick:t[0]||(t[0]=e=>s.state.showPay=!0)},[c,(0,l.Lk)("span",null,(0,o.v_)(e.$t("status.support")),1)],8,u),(0,l.Lk)("a",p,"©linker "+(0,o.v_)(s.self.Version),1)]),g,(0,l.Lk)("div",m,[(0,l.bF)(w,{config:s.config},null,8,["config"])]),(0,l.Lk)("div",f,[(0,l.bF)(y,{config:s.config},null,8,["config"])]),(0,l.Lk)("div",v,[(0,l.bF)(k,{config:s.config},null,8,["config"])]),(0,l.bF)(b,{modelValue:s.state.showPay,"onUpdate:modelValue":t[1]||(t[1]=e=>s.state.showPay=e),title:e.$t("status.support"),width:"400"},{default:(0,l.k6)((()=>[h])),_:1},8,["modelValue","title"])])}var y=a(144);const k={href:"javascript:;"};function b(e,t,a,s,n,r){const i=(0,l.g2)("Tools"),d=(0,l.g2)("el-icon"),u=(0,l.g2)("el-popconfirm");return s.config?((0,l.uX)(),(0,l.CE)("div",{key:0,class:(0,o.C4)(["status-api-wrap",{connected:s.connected}])},[(0,l.bF)(u,{"confirm-button-text":e.$t("status.apiClear"),"cancel-button-text":e.$t("status.apiAlter"),title:e.$t("status.apiAlterConfirm"),onCancel:s.handleShow,onConfirm:s.handleResetConnect},{reference:(0,l.k6)((()=>[(0,l.Lk)("a",k,[(0,l.bF)(d,{size:"16"},{default:(0,l.k6)((()=>[(0,l.bF)(i)])),_:1}),(0,l.eW)(" "+(0,o.v_)(e.$t("status.api")),1)])])),_:1},8,["confirm-button-text","cancel-button-text","title","onCancel","onConfirm"])],2)):(0,l.Q3)("",!0)}var S=a(3830),B=a(4),$=a(7477),_={components:{Tools:$.S0q},props:["config"],setup(e){const t=(0,S.B)(),a=(0,l.EW)((()=>t.value.api.connected)),o=()=>{localStorage.setItem("api-cache",""),sessionStorage.setItem("api-cache",""),window.location.reload()},s=()=>{(0,B.e3)(),(0,B.a1)(`ws${"https:"===window.location.protocol?"s":""}://${window.location.hostname}:12345`,"snltty")};return{config:e.config,connected:a,handleShow:s,handleResetConnect:o}}},C=a(1241);const F=(0,C.A)(_,[["render",b],["__scopeId","data-v-439c62dc"]]);var V=F;const x={class:"status-server-wrap"};function T(e,t,a,o,s,n){const r=(0,l.g2)("ServerConfig"),i=(0,l.g2)("ServerVersion"),d=(0,l.g2)("ServerFlow");return(0,l.uX)(),(0,l.CE)("div",x,[(0,l.bF)(r,{config:o.config},null,8,["config"]),(0,l.bF)(i,{config:o.config},null,8,["config"]),o.config&&o.hasFlow?((0,l.uX)(),(0,l.Wv)(d,{key:0,config:o.config},null,8,["config"])):(0,l.Q3)("",!0)])}const R=["title"],I={class:"dialog-footer t-c"};function P(e,t,a,s,n,r){const i=(0,l.g2)("Promotion"),d=(0,l.g2)("el-icon"),u=(0,l.g2)("el-input"),c=(0,l.g2)("el-form-item"),p=(0,l.g2)("el-option"),g=(0,l.g2)("el-select"),m=(0,l.g2)("el-form"),f=(0,l.g2)("el-button"),v=(0,l.g2)("el-dialog");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("a",{href:"javascript:;",class:(0,o.C4)({connected:s.state.connected}),title:e.$t("status.messengerChange"),onClick:t[0]||(t[0]=(...e)=>s.handleConfig&&s.handleConfig(...e))},[(0,l.bF)(d,{size:"16"},{default:(0,l.k6)((()=>[(0,l.bF)(i)])),_:1}),(0,l.eW)(),(0,l.Lk)("span",null,(0,o.v_)(e.$t("status.messenger")),1)],10,R),(0,l.bF)(v,{modelValue:s.state.show,"onUpdate:modelValue":t[4]||(t[4]=e=>s.state.show=e),title:e.$t("common.setting"),width:"300","append-to-body":""},{footer:(0,l.k6)((()=>[(0,l.Lk)("div",I,[(0,l.bF)(f,{onClick:t[3]||(t[3]=e=>s.state.show=!1),loading:s.state.loading},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.$t("common.cancel")),1)])),_:1},8,["loading"]),(0,l.bF)(f,{type:"primary",onClick:s.handleSave,loading:s.state.loading},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.$t("common.confirm")),1)])),_:1},8,["onClick","loading"])])])),default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.bF)(m,{model:s.state.form,rules:s.state.rules,"label-width":"6rem"},{default:(0,l.k6)((()=>[s.hasRenameSelf?((0,l.uX)(),(0,l.Wv)(c,{key:0,label:e.$t("status.messengerName"),prop:"name"},{default:(0,l.k6)((()=>[(0,l.bF)(u,{modelValue:s.state.form.name,"onUpdate:modelValue":t[1]||(t[1]=e=>s.state.form.name=e),maxlength:"32","show-word-limit":""},null,8,["modelValue"])])),_:1},8,["label"])):(0,l.Q3)("",!0),s.hasGroup?((0,l.uX)(),(0,l.Wv)(c,{key:1,label:e.$t("status.messengerGroup"),prop:"groupid"},{default:(0,l.k6)((()=>[(0,l.bF)(g,{modelValue:s.state.groupid,"onUpdate:modelValue":t[2]||(t[2]=e=>s.state.groupid=e),onChange:s.handleGroupChange},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(s.state.form.groups,(e=>((0,l.uX)(),(0,l.Wv)(p,{key:e.Id,label:e.Name,value:e.Id},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1},8,["label"])):(0,l.Q3)("",!0)])),_:1},8,["model","rules"])])])),_:1},8,["modelValue","title"])],64)}var A=a(9299),D=a(1219),W=a(5931),z={components:{Promotion:$.Yk4,CirclePlus:$.HxT},props:["config"],setup(e){const{t:t}=(0,W.s9)(),a=(0,S.B)(),o=(0,l.EW)((()=>a.value.hasAccess("RenameSelf"))),s=(0,l.EW)((()=>a.value.hasAccess("Group"))),n=(0,y.Kh)({show:!1,loading:!1,connected:(0,l.EW)((()=>a.value.signin.Connected)),groupid:a.value.config.Client.Group.Id,form:{name:a.value.config.Client.Name,groups:a.value.config.Client.Groups},rules:{}}),r=()=>{e.config&&(s.value||o.value)&&(n.form.name=a.value.config.Client.Name,n.form.groups=a.value.config.Client.Groups,n.groupid=a.value.config.Client.Group.Id,n.show=!0)},i=e=>{const t=n.form.groups.map(((e,t)=>(e.$index=t,e))).filter((t=>t.Id==e))[0].$index,a=n.form.groups[t];n.form.groups[t]=n.form.groups[0],n.form.groups[0]=a},d=()=>{n.loading=!0,(0,A.rd)(n.form).then((()=>{n.loading=!1,n.show=!1,D.nk.success(t("common.oper")),setTimeout((()=>{window.location.reload()}),1e3)})).catch((e=>{console.log(e),n.loading=!1,D.nk.error(t("common.operFail"))}))};return{config:e.config,hasRenameSelf:o,hasGroup:s,state:n,handleConfig:r,handleSave:d,handleGroupChange:i}}};const U=(0,C.A)(z,[["render",P],["__scopeId","data-v-4c2d9648"]]);var E=U;const O={key:0,class:"flow-wrap"},K=["title"],M=["title"],X=["title"],j=["title"];function G(e,t,a,s,n,r){const i=(0,l.g2)("el-table-column"),d=(0,l.g2)("el-button"),u=(0,l.g2)("el-table"),c=(0,l.g2)("el-dialog"),p=(0,l.g2)("ServerFlowMessenger"),g=(0,l.g2)("ServerFlowSForward"),m=(0,l.g2)("ServerFlowRelay"),f=(0,l.g2)("OnlineMap"),v=(0,l.g2)("OnlineAllMap");return(0,l.uX)(),(0,l.CE)(l.FK,null,[s.config?((0,l.uX)(),(0,l.CE)("div",O,[(0,l.Lk)("p",null,[(0,l.eW)((0,o.v_)(e.$t("status.flowOnline"))+" ",1),(0,l.Lk)("a",{href:"javascript:;",onClick:t[0]||(t[0]=e=>s.state.showMap=!0),title:`${e.$t("status.flowThisServer")}\r\n${e.$t("status.flowOnline")}/${e.$t("status.flowOnline7Day")}`},(0,o.v_)(s.state.overallOnline),9,K),(0,l.Lk)("a",{href:"javascript:;",onClick:t[1]||(t[1]=e=>s.state.showAllMap=!0),title:`${e.$t("status.flowAllServer")}\r\n${e.$t("status.flowOnline")}/${e.$t("status.flowOnline7Day")}/${e.$t("status.flowServer")}`},(0,o.v_)(s.state.serverOnline),9,M)]),(0,l.Lk)("p",null,[(0,l.eW)((0,o.v_)(e.$t("status.flowUpload"))+" ",1),(0,l.Lk)("a",{href:"javascript:;",title:`${e.$t("status.flowThisServer")}\r\n${e.$t("status.flowAllSend")}`,onClick:t[2]||(t[2]=(...e)=>s.handleShow&&s.handleShow(...e))},(0,o.v_)(s.state.overallSendtSpeed)+"/s",9,X)]),(0,l.Lk)("p",null,[(0,l.eW)((0,o.v_)(e.$t("status.flowDownload"))+" ",1),(0,l.Lk)("a",{href:"javascript:;",title:`${e.$t("status.flowThisServer")}\r\n${e.$t("status.flowAllReceive")}`,onClick:t[3]||(t[3]=(...e)=>s.handleShow&&s.handleShow(...e))},(0,o.v_)(s.state.overallReceiveSpeed)+"/s",9,j)])])):(0,l.Q3)("",!0),(0,l.bF)(c,{title:s.state.time,"destroy-on-close":"",modelValue:s.state.show,"onUpdate:modelValue":t[4]||(t[4]=e=>s.state.show=e),width:"640"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.bF)(u,{data:s.state.list,border:"",size:"small",width:"100%"},{default:(0,l.k6)((()=>[(0,l.bF)(i,{prop:"text",label:e.$t("status.flowType")},null,8,["label"]),(0,l.bF)(i,{prop:"sendtBytes",label:e.$t("status.flowUpload"),sortable:""},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.sendtBytesText),1)])),_:1},8,["label"]),(0,l.bF)(i,{prop:"sendtSpeed",label:e.$t("status.flowUpload"),sortable:""},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.sendtSpeedText)+"/s",1)])),_:1},8,["label"]),(0,l.bF)(i,{prop:"receiveBytes",label:e.$t("status.flowDownload"),sortable:""},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.receiveBytesText),1)])),_:1},8,["label"]),(0,l.bF)(i,{prop:"receiveSpeed",label:e.$t("status.flowDownload"),sortable:""},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.receiveSpeedText)+"/s",1)])),_:1},8,["label"]),(0,l.bF)(i,{prop:"oper",label:e.$t("status.flowOper"),width:"70"},{default:(0,l.k6)((t=>[t.row.detail?((0,l.uX)(),(0,l.Wv)(d,{key:0,size:"small",onClick:e=>s.handleShowDetail(t.row.id)},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.$t("status.flowDetail")),1)])),_:2},1032,["onClick"])):(0,l.Q3)("",!0)])),_:1},8,["label"])])),_:1},8,["data"])])])),_:1},8,["title","modelValue"]),s.state.details.Messenger?((0,l.uX)(),(0,l.Wv)(p,{key:1,config:s.config,modelValue:s.state.details.Messenger,"onUpdate:modelValue":t[5]||(t[5]=e=>s.state.details.Messenger=e)},null,8,["config","modelValue"])):(0,l.Q3)("",!0),s.state.details.SForward?((0,l.uX)(),(0,l.Wv)(g,{key:2,config:s.config,modelValue:s.state.details.SForward,"onUpdate:modelValue":t[6]||(t[6]=e=>s.state.details.SForward=e)},null,8,["config","modelValue"])):(0,l.Q3)("",!0),s.state.details.Relay?((0,l.uX)(),(0,l.Wv)(m,{key:3,config:s.config,modelValue:s.state.details.Relay,"onUpdate:modelValue":t[7]||(t[7]=e=>s.state.details.Relay=e)},null,8,["config","modelValue"])):(0,l.Q3)("",!0),s.state.showMap?((0,l.uX)(),(0,l.Wv)(f,{key:4,config:s.config,modelValue:s.state.showMap,"onUpdate:modelValue":t[8]||(t[8]=e=>s.state.showMap=e)},null,8,["config","modelValue"])):(0,l.Q3)("",!0),s.state.showAllMap?((0,l.uX)(),(0,l.Wv)(v,{key:5,config:s.config,modelValue:s.state.showAllMap,"onUpdate:modelValue":t[9]||(t[9]=e=>s.state.showAllMap=e)},null,8,["config","modelValue"])):(0,l.Q3)("",!0)],64)}a(4114);const N=()=>(0,B.zG)("flow/GetFlows"),Q=()=>(0,B.zG)("flow/GetMessengerFlows"),Y=e=>(0,B.zG)("flow/GetSForwardFlows",e),Z=e=>(0,B.zG)("flow/GetRelayFlows",e),q=()=>(0,B.zG)("flow/GetCitys");function H(e,t,a,s,n,r){const i=(0,l.g2)("el-table-column"),d=(0,l.g2)("el-table"),u=(0,l.g2)("el-dialog");return(0,l.uX)(),(0,l.Wv)(u,{title:e.$t("status.flowMessenger"),class:"options-center",top:"1vh","destroy-on-close":"",modelValue:s.state.show,"onUpdate:modelValue":t[0]||(t[0]=e=>s.state.show=e),width:"680"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.bF)(d,{data:s.state.list,stripe:"",border:"",size:"small",width:"100%",height:"60vh"},{default:(0,l.k6)((()=>[(0,l.bF)(i,{prop:"id",label:"id",width:"200"}),(0,l.bF)(i,{prop:"sendtBytes",label:e.$t("status.flowUpload"),sortable:""},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.sendtBytesText),1)])),_:1},8,["label"]),(0,l.bF)(i,{prop:"sendtSpeed",label:e.$t("status.flowUpload"),sortable:""},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.sendtSpeedText)+"/s",1)])),_:1},8,["label"]),(0,l.bF)(i,{prop:"receiveBytes",label:e.$t("status.flowDownload"),sortable:""},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.receiveBytesText),1)])),_:1},8,["label"]),(0,l.bF)(i,{prop:"receiveSpeed",label:e.$t("status.flowDownload"),sortable:""},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.receiveSpeedText)+"/s",1)])),_:1},8,["label"])])),_:1},8,["data"])])])),_:1},8,["title","modelValue"])}var J={props:["modelValue","config"],emits:["update:modelValue"],setup(e,{emit:t}){const a=(0,y.Kh)({show:!0,timer:0,list:[],old:null});(0,l.wB)((()=>a.show),(e=>{e||setTimeout((()=>{t("update:modelValue",e)}),300)}));const o={0:"登入信标",1:"客户端列表",2:"客户端删除",4:"客户端改名(转发)",7:"获取服务器版本",8:"客户端搜索ids",9:"客户端id列表",10:"客户端排序",11:"客户端在线",12:"生成客户端id",13:"登入信标V_1_3_1",2001:"外网端口(转发)",2002:"外网端口(转发)",2003:"开始打洞(转发)",2004:"开始打洞(转发)",2005:"打洞失败(转发)",2006:"打洞失败(转发)",2007:"打洞成功(转发)",2008:"打洞成功(转发)",2009:"隧道配置(转发)",2010:"隧道配置(转发)",2012:"隧道同步(转发)",2101:"中继通知(转发)",2102:"中继通知(转发)",2103:"中继请求",2105:"中继连通测试",2201:"运行网卡(转发)",2203:"停止网卡(转发)",2204:"更新网卡",2205:"更新网卡(转发)",2208:"配置网卡网络",2209:"获取网卡网络",2210:"分配IP",2211:"网卡变化",2212:"网卡变化(转发)",2213:"IP续约",2214:"网卡端口转发检测",2215:"网卡端口转发检测(转发)",2301:"添加内网穿透",2302:"移除内网穿透",2303:"通知内网穿透(转发)",2304:"通知内网穿透UDP(转发)",2305:"获取穿透列表(转发)",2401:"测试端口转发(转发)",2403:"获取端口转发(转发)",2507:"同步配置",2508:"同步配置(转发)",2601:"更新信息(转发)",2602:"更新信息(转发)",2603:"确认更新(转发)",2604:"确认更新(转发)",2605:"重启(转发)",2606:"重启",2607:"服务器更新信息",2608:"确认服务器更新",2609:"服务器重启",2610:"订阅更新信息(转发)",2611:"订阅更新信息(转发)",2612:"检查更新",2613:"检查更新(转发)",2701:"服务器流量",2702:"服务器信标流量",2703:"服务器中继流量",2704:"服务器内网穿透流量",2807:"同步配置",2808:"同步配置(转发)",2900:"运行socks5",2901:"运行socks5(转发)",2902:"停止socks5",2903:"停止socks5(转发)",2904:"更新socks5",2905:"更新socks5(转发)",3003:"获取权限",3004:"获取权限(转发)",3005:"更新权限",3006:"更新权限(转发)"},s=()=>{Q().then((e=>{const t=a.old||e,l=[];for(let a in e){const s=e[a],r=t[a],i=`[${a}]${o[`${a}`]||"未知"}`;l.push({id:i,sendtBytes:s.SendtBytes,sendtBytesText:n(s.SendtBytes),sendtSpeed:s.SendtBytes-r.SendtBytes,sendtSpeedText:n(s.SendtBytes-r.SendtBytes),receiveBytes:s.ReceiveBytes,receiveBytesText:n(s.ReceiveBytes),receiveSpeed:s.ReceiveBytes-r.ReceiveBytes,receiveSpeedText:n(s.ReceiveBytes-r.ReceiveBytes)})}a.list=l.filter((e=>!!e.id)),a.old=e,a.timer=setTimeout(s,1e3)})).catch((e=>{a.timer=setTimeout(s,1e3)}))},n=e=>{let t=0;while(e>=1024)e/=1024,t++;return`${e.toFixed(2)}${["B","KB","MB","GB","TB"][t]}`};return(0,l.sV)((()=>{s()})),(0,l.hi)((()=>{clearTimeout(a.timer)})),{config:e.config,state:a}}};const ee=(0,C.A)(J,[["render",H],["__scopeId","data-v-6cee4920"]]);var te=ee;const ae={class:"head"},le={class:"page t-c"},oe={class:"page-wrap"};function se(e,t,a,s,n,r){const i=(0,l.g2)("el-input"),d=(0,l.g2)("el-table-column"),u=(0,l.g2)("el-table"),c=(0,l.g2)("el-pagination"),p=(0,l.g2)("el-dialog");return(0,l.uX)(),(0,l.Wv)(p,{title:e.$t("status.flowServerForward"),class:"options-center",top:"1vh","destroy-on-close":"",modelValue:s.state.show,"onUpdate:modelValue":t[1]||(t[1]=e=>s.state.show=e),width:"680"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.Lk)("div",ae,[(0,l.bF)(i,{modelValue:s.state.page.Key,"onUpdate:modelValue":t[0]||(t[0]=e=>s.state.page.Key=e),placeholder:e.$t("status.flowSearchDomainPort")},null,8,["modelValue","placeholder"])]),(0,l.bF)(u,{data:s.state.list,stripe:"",border:"",size:"small",width:"100%",height:"60vh",onSortChange:s.handleSort},{default:(0,l.k6)((()=>[(0,l.bF)(d,{prop:"Key",label:e.$t("status.flowSearchDomainPort"),width:"200"},null,8,["label"]),(0,l.bF)(d,{prop:"SendtBytes",label:e.$t("status.flowUpload"),sortable:"custom"},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.SendtBytesText),1)])),_:1},8,["label"]),(0,l.bF)(d,{prop:"DiffSendtBytes",label:e.$t("status.flowUpload"),sortable:"custom"},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.DiffSendtBytesText)+"/s",1)])),_:1},8,["label"]),(0,l.bF)(d,{prop:"ReceiveBytes",label:e.$t("status.flowDownload"),sortable:"custom"},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.ReceiveBytesText),1)])),_:1},8,["label"]),(0,l.bF)(d,{prop:"DiffReceiveBytes",label:e.$t("status.flowDownload"),sortable:"custom"},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.DiffReceiveBytesText)+"/s",1)])),_:1},8,["label"])])),_:1},8,["data","onSortChange"]),(0,l.Lk)("div",le,[(0,l.Lk)("div",oe,[(0,l.bF)(c,{small:"",background:"",layout:"total,prev,pager, next",total:s.state.page.Count,"page-size":s.state.page.PageSize,"current-page":s.state.page.Page,onCurrentChange:s.handlePageChange},null,8,["total","page-size","current-page","onCurrentChange"])])])])])),_:1},8,["title","modelValue"])}var ne={props:["modelValue","config"],emits:["update:modelValue"],setup(e,{emit:t}){const a=(0,y.Kh)({show:!0,timer:0,list:[],page:{Key:"",Page:1,PageSize:15,Count:0,Order:1,OrderType:0}});(0,l.wB)((()=>a.show),(e=>{e||setTimeout((()=>{t("update:modelValue",e)}),300)}));const o=()=>{Y({Key:a.page.Key,Page:a.page.Page,PageSize:a.page.PageSize,Order:a.page.Order,OrderType:a.page.OrderType}).then((e=>{try{a.page.Page=e.Page,a.page.PageSize=e.PageSize,a.page.Count=e.Count;const t=[];for(let a=0;a<e.Data.length;a++){const l=e.Data[a];Object.assign(l,{SendtBytesText:s(l.SendtBytes),ReceiveBytesText:s(l.ReceiveBytes),DiffSendtBytesText:s(l.DiffSendtBytes),DiffReceiveBytesText:s(l.DiffReceiveBytes)}),t.push(l)}a.list=t}catch(t){console.log(t)}a.timer=setTimeout(o,1e3)})).catch((e=>{a.timer=setTimeout(o,1e3)}))},s=e=>{let t=0;while(e>=1024)e/=1024,t++;return`${e.toFixed(2)}${["B","KB","MB","GB","TB"][t]}`},n=e=>{e&&(a.page.Page=e)},r=e=>{const t={ascending:1,descending:0}[e.order],l={SendtBytes:1,DiffSendtBytes:2,ReceiveBytes:3,DiffReceiveBytes:4}[e.prop];a.page.Order=l,a.page.OrderType=t};return(0,l.sV)((()=>{o()})),(0,l.hi)((()=>{clearTimeout(a.timer)})),{config:e.config,state:a,handlePageChange:n,handleSort:r}}};const re=(0,C.A)(ne,[["render",se],["__scopeId","data-v-bd2e39b0"]]);var ie=re;const de={class:"head"},ue={class:"page t-c"},ce={class:"page-wrap"};function pe(e,t,a,s,n,r){const i=(0,l.g2)("el-input"),d=(0,l.g2)("el-table-column"),u=(0,l.g2)("el-table"),c=(0,l.g2)("el-pagination"),p=(0,l.g2)("el-dialog");return(0,l.uX)(),(0,l.Wv)(p,{title:e.$t("status.flowRelay"),class:"options-center",top:"1vh","destroy-on-close":"",modelValue:s.state.show,"onUpdate:modelValue":t[1]||(t[1]=e=>s.state.show=e),width:"680"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",null,[(0,l.Lk)("div",de,[(0,l.bF)(i,{modelValue:s.state.page.Key,"onUpdate:modelValue":t[0]||(t[0]=e=>s.state.page.Key=e),placeholder:"名字搜索"},null,8,["modelValue"])]),(0,l.bF)(u,{data:s.state.list,stripe:"",border:"",size:"small",width:"100%",height:"60vh",onSortChange:s.handleSort},{default:(0,l.k6)((()=>[(0,l.bF)(d,{prop:"FromName",label:e.$t("status.flowRelaySource"),width:"120"},null,8,["label"]),(0,l.bF)(d,{prop:"ToName",label:e.$t("status.flowRelayTarget"),width:"120"},null,8,["label"]),(0,l.bF)(d,{prop:"SendtBytes",label:e.$t("status.flowUpload"),sortable:"custom"},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.SendtBytesText),1)])),_:1},8,["label"]),(0,l.bF)(d,{prop:"DiffSendtBytes",label:e.$t("status.flowUpload"),sortable:"custom"},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.DiffSendtBytesText)+"/s",1)])),_:1},8,["label"]),(0,l.bF)(d,{prop:"ReceiveBytes",label:e.$t("status.flowDownload"),sortable:"custom"},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.ReceiveBytesText),1)])),_:1},8,["label"]),(0,l.bF)(d,{prop:"DiffReceiveBytes",label:e.$t("status.flowDownload"),sortable:"custom"},{default:(0,l.k6)((e=>[(0,l.Lk)("span",null,(0,o.v_)(e.row.DiffReceiveBytesText)+"/s",1)])),_:1},8,["label"])])),_:1},8,["data","onSortChange"]),(0,l.Lk)("div",ue,[(0,l.Lk)("div",ce,[(0,l.bF)(c,{small:"",background:"",layout:"total,prev,pager, next",total:s.state.page.Count,"page-size":s.state.page.PageSize,"current-page":s.state.page.Page,onCurrentChange:s.handlePageChange},null,8,["total","page-size","current-page","onCurrentChange"])])])])])),_:1},8,["title","modelValue"])}var ge={props:["modelValue","config"],emits:["update:modelValue"],setup(e,{emit:t}){const a=(0,y.Kh)({show:!0,timer:0,list:[],page:{Key:"",Page:1,PageSize:15,Count:0,Order:1,OrderType:0}});(0,l.wB)((()=>a.show),(e=>{e||setTimeout((()=>{t("update:modelValue",e)}),300)}));const o=()=>{Z({Key:a.page.Key,Page:a.page.Page,PageSize:a.page.PageSize,Order:a.page.Order,OrderType:a.page.OrderType}).then((e=>{try{a.page.Page=e.Page,a.page.PageSize=e.PageSize,a.page.Count=e.Count;const t=[];for(let a=0;a<e.Data.length;a++){const l=e.Data[a];Object.assign(l,{SendtBytesText:s(l.SendtBytes),ReceiveBytesText:s(l.ReceiveBytes),DiffSendtBytesText:s(l.DiffSendtBytes),DiffReceiveBytesText:s(l.DiffReceiveBytes)}),t.push(l)}a.list=t}catch(t){console.log(t)}a.timer=setTimeout(o,1e3)})).catch((e=>{a.timer=setTimeout(o,1e3)}))},s=e=>{let t=0;while(e>=1024)e/=1024,t++;return`${e.toFixed(2)}${["B","KB","MB","GB","TB"][t]}`},n=e=>{e&&(a.page.Page=e)},r=e=>{const t={ascending:1,descending:0}[e.order],l={SendtBytes:1,DiffSendtBytes:2,ReceiveBytes:3,DiffReceiveBytes:4}[e.prop];a.page.Order=l,a.page.OrderType=t};return(0,l.sV)((()=>{o()})),(0,l.hi)((()=>{clearTimeout(a.timer)})),{config:e.config,state:a,handlePageChange:n,handleSort:r}}};const me=(0,C.A)(ge,[["render",pe],["__scopeId","data-v-e241ce02"]]);var fe=me;const ve=e=>((0,l.Qi)("data-v-3f8bb922"),e=e(),(0,l.jt)(),e),he=ve((()=>(0,l.Lk)("div",{class:"map-wrap",id:"map"},null,-1)));function we(e,t,a,o,s,n){const r=(0,l.g2)("el-dialog");return(0,l.uX)(),(0,l.Wv)(r,{class:"options-center",title:e.$t("status.flowOnline"),"destroy-on-close":"",modelValue:o.state.show,"onUpdate:modelValue":t[0]||(t[0]=e=>o.state.show=e),width:"77rem",top:"2vh"},{default:(0,l.k6)((()=>[he])),_:1},8,["title","modelValue"])}var ye=a(83),ke={props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:t}){const{t:a}=(0,W.s9)(),o=(0,y.Kh)({show:!0});(0,l.wB)((()=>o.show),(e=>{e||setTimeout((()=>{t("update:modelValue",e)}),300)}));const s=(e,t)=>{const l=L.map("map").setView([38,105],4);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"linker",maxZoom:17}).addTo(l);for(let o=0;o<t.length;o++){const s=t[o],n=e[s.MachineId].Net,r=new L.Icon({iconSize:[18,28],iconAnchor:[9,28],shadowAnchor:[0,0],popupAnchor:[0,-27],shadowSize:[0,0],iconUrl:s.Online?"/marker-green.png":"/marker-grey.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png"}),i=`\n                    <div class="marker-content" >\n                        <h3 class="marker-title" style="font-size:1.6rem">${s.MachineName}</h3>\n                        <div class="marker-text" style="font-size:1.3rem">${a("status.flowArea")} : ${n.Country}(${n.CountryCode})、${n.RegionName}(${n.Region})、${n.City}</div>\n                        <div class="marker-text" style="font-size:1.3rem">${a("status.flowNet")} : ${n.Isp}、${n.Org}、${n.As}</div>\n                    </div>\n                `;new L.marker(new L.latLng([n.Lat,n.Lon]),{icon:r}).bindPopup(i,{}).on("mouseover",(function(e){this.openPopup()})).on("mouseout",(function(e){this.closePopup()})).addTo(l)}};return(0,l.sV)((()=>{(0,l.dY)((()=>{(0,ye.r7)().then((e=>{(0,A.NT)().then((t=>{s(e.List,t)})).catch((()=>{}))})).catch((()=>{}))}))})),{state:o}}};const be=(0,C.A)(ke,[["render",we],["__scopeId","data-v-3f8bb922"]]);var Se=be;const Be=e=>((0,l.Qi)("data-v-c7a27a24"),e=e(),(0,l.jt)(),e),$e=Be((()=>(0,l.Lk)("div",{class:"map-wrap",id:"map"},null,-1)));function _e(e,t,a,o,s,n){const r=(0,l.g2)("el-dialog");return(0,l.uX)(),(0,l.Wv)(r,{class:"options-center",title:e.$t("status.flowOnline"),"destroy-on-close":"",modelValue:o.state.show,"onUpdate:modelValue":t[0]||(t[0]=e=>o.state.show=e),width:"77rem",top:"2vh"},{default:(0,l.k6)((()=>[$e])),_:1},8,["title","modelValue"])}var Ce={props:["modelValue"],emits:["update:modelValue"],setup(e,{emit:t}){const{t:a}=(0,W.s9)(),o=(0,y.Kh)({show:!0});(0,l.wB)((()=>o.show),(e=>{e||setTimeout((()=>{t("update:modelValue",e)}),300)}));const s=e=>{const t=L.map("map").setView([38,105],4);L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"linker",maxZoom:17}).addTo(t);for(let a=0;a<e.length;a++){const l=e[a],o=new L.Icon({iconSize:[18,28],iconAnchor:[9,28],shadowAnchor:[0,0],popupAnchor:[0,-27],shadowSize:[0,0],iconUrl:"/marker-green.png",shadowUrl:"https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png"}),s=`\n                    <div class="marker-content" >\n                        <h3 class="marker-title" style="font-size:1.6rem">${l.City} ${l.Count}</h3>\n                    </div>\n                `;new L.marker(new L.latLng([l.Lat,l.Lon]),{icon:o}).bindPopup(s,{}).on("mouseover",(function(e){this.openPopup()})).on("mouseout",(function(e){this.closePopup()})).addTo(t)}};return(0,l.sV)((()=>{(0,l.dY)((()=>{q().then((e=>{s(e)})).catch((()=>{}))}))})),{state:o}}};const Fe=(0,C.A)(Ce,[["render",_e],["__scopeId","data-v-c7a27a24"]]);var Ve=Fe,xe={props:["config"],components:{ServerFlowMessenger:te,ServerFlowSForward:ie,ServerFlowRelay:fe,OnlineMap:Se,OnlineAllMap:Ve},setup(e){const{t:t}=(0,W.s9)(),a=(0,S.B)(),o=(0,l.EW)((()=>a.value.hasAccess("SForwardFlow"))),s=(0,l.EW)((()=>a.value.hasAccess("RelayFlow"))),n=(0,l.EW)((()=>a.value.hasAccess("SigninFlow"))),r=(0,y.Kh)({show:!1,timer:0,overallSendtSpeed:"0000.00KB",overallReceiveSpeed:"0000.00KB",overallOnline:"0/0",serverOnline:"",time:"",list:[],old:null,details:{Messenger:!1,SForward:!1,Relay:!1},showMap:!1,showAllMap:!1}),i=()=>{r.show=!0},d=e=>{r.details[e]=!0},u={External:{text:t("status.flowWanPort"),detail:!1},RelayReport:{text:t("status.flowRelayNode"),detail:!1},Relay:{text:t("status.flowRelay"),detail:s.value},Messenger:{text:t("status.flowMessenger"),detail:n.value},SForward:{text:t("status.flowServerForward"),detail:o.value},flow:{text:"",detail:!1}},c=()=>{N().then((e=>{const t=r.old||e;if(e.Items["_"]&&(r.overallOnline=`${e.Items["_"].SendtBytes}/${e.Items["_"].ReceiveBytes}`,delete e.Items["_"]),e.Items["flow"]&&e.Items["flow"].ReceiveBytes>0){const t=(BigInt(e.Items["flow"].ReceiveBytes)>>BigInt(32)).toString(),a=(BigInt(e.Items["flow"].ReceiveBytes)&BigInt(4294967295)).toString(),l=e.Items["flow"].SendtBytes;r.serverOnline=`、${t}/${a}/${l}`,delete e.Items["flow"]}let a=0,l=0,o=0,s=0;for(let r in t.Items)a+=t.Items[r].ReceiveBytes,l+=t.Items[r].SendtBytes;for(let r in e.Items)o+=e.Items[r].ReceiveBytes,s+=e.Items[r].SendtBytes;r.overallSendtSpeed=p(s-l),r.overallReceiveSpeed=p(o-a),r.time=`${e.Start}`;const n=[];for(let r in e.Items){const a=e.Items[r],l=t.Items[r],o=u[`${r}`]||{text:`Unknow${r}`,detail:!1};n.push({id:r,text:o.text,detail:o.detail,sendtBytes:a.SendtBytes,sendtBytesText:p(a.SendtBytes),sendtSpeed:a.SendtBytes-l.SendtBytes,sendtSpeedText:p(a.SendtBytes-l.SendtBytes),receiveBytes:a.ReceiveBytes,receiveBytesText:p(a.ReceiveBytes),receiveSpeed:a.ReceiveBytes-l.ReceiveBytes,receiveSpeedText:p(a.ReceiveBytes-l.ReceiveBytes)})}r.list=n.filter((e=>!!e.id)),r.old=e,r.timer=setTimeout(c,1e3)})).catch((e=>{r.timer=setTimeout(c,1e3)}))},p=e=>{let t=0;while(e>=1024)e/=1024,t++;return`${e.toFixed(2)}${["B","KB","MB","GB","TB"][t]}`};return(0,l.sV)((()=>{c()})),(0,l.hi)((()=>{clearTimeout(r.timer)})),{hasSForwardFlow:o,config:e.config,state:r,handleShow:i,handleShowDetail:d}}};const Le=(0,C.A)(xe,[["render",G],["__scopeId","data-v-dae021fc"]]);var Te=Le;const Re=["title"],Ie={key:0,class:"progress"},Pe={key:1,class:"progress"};function Ae(e,t,a,s,n,r){const i=(0,l.g2)("Loading"),d=(0,l.g2)("el-icon"),u=(0,l.g2)("Download"),c=(0,l.g2)("CircleCheck");return(0,l.uX)(),(0,l.CE)("a",{href:"javascript:;",onClick:t[0]||(t[0]=(...e)=>s.handleUpdate&&s.handleUpdate(...e)),class:(0,o.C4)(["download",s.updateColor()]),title:s.updateText()},[(0,l.Lk)("span",null,(0,o.v_)(s.state.version),1),s.updaterCurrent.Version?((0,l.uX)(),(0,l.CE)(l.FK,{key:0},[1==s.updaterCurrent.Status?((0,l.uX)(),(0,l.Wv)(d,{key:0,size:"14",class:"loading"},{default:(0,l.k6)((()=>[(0,l.bF)(i)])),_:1})):2==s.updaterServer.Status?((0,l.uX)(),(0,l.Wv)(d,{key:1,size:"14"},{default:(0,l.k6)((()=>[(0,l.bF)(u)])),_:1})):3==s.updaterServer.Status||5==s.updaterServer.Status?((0,l.uX)(),(0,l.CE)(l.FK,{key:2},[(0,l.bF)(d,{size:"14",class:"loading"},{default:(0,l.k6)((()=>[(0,l.bF)(i)])),_:1}),0==s.updaterServer.Length?((0,l.uX)(),(0,l.CE)("span",Ie,"0%")):((0,l.uX)(),(0,l.CE)("span",Pe,(0,o.v_)(parseInt(s.updaterServer.Current/s.updaterServer.Length*100))+"%",1))],64)):6==s.updaterServer.Status?((0,l.uX)(),(0,l.Wv)(d,{key:3,size:"14",class:"yellow"},{default:(0,l.k6)((()=>[(0,l.bF)(c)])),_:1})):(0,l.Q3)("",!0)],64)):((0,l.uX)(),(0,l.Wv)(d,{key:1,size:"14"},{default:(0,l.k6)((()=>[(0,l.bF)(u)])),_:1}))],10,Re)}var De=a(2933),We=a(920),ze={components:{Promotion:$.Yk4,Download:$.f5X,Loading:$.Rhj,CircleCheck:$.rW7,ServerFlow:Te},props:["config"],setup(e){const{t:t}=(0,W.s9)(),a=(0,S.B)(),o=(0,l.EW)((()=>a.value.hasAccess("UpdateServer"))),s=(0,y.KR)({Version:"",Msg:[],DateTime:"",Status:0,Length:0,Current:0}),n=(0,y.KR)({Version:"",Status:0,Length:0,Current:0}),r=(0,l.EW)((()=>`${s.value.Version}->${s.value.DateTime}\n${s.value.Msg.map(((e,t)=>`${t+1}、${e}`)).join("\n")}`)),i=(0,y.Kh)({show:!1,loading:!1,connected:(0,l.EW)((()=>a.value.signin.Connected)),version:(0,l.EW)((()=>a.value.signin.Version))}),d=()=>{(0,We.Vk)().then((e=>{s.value.DateTime=e.DateTime,s.value.Version=e.Version,s.value.Status=e.Status,s.value.Length=e.Length,s.value.Current=e.Current,s.value.Msg=e.Msg,setTimeout((()=>{d()}),1e3)})).catch((()=>{setTimeout((()=>{d()}),1e3)}))},u=()=>{(0,We.BJ)().then((e=>{n.value.Version=e.Version,n.value.Status=e.Status,n.value.Length=e.Length,n.value.Current=e.Current,n.value.Status>2&&n.value.Status<6&&setTimeout((()=>{u()}),1e3)})).catch((()=>{setTimeout((()=>{u()}),1e3)}))},c=()=>s.value.Version?n.value.Status<=2?i.version!=s.value.Version?`${t("status.serverNotNew")}(${s.value.Version})\n${r.value}`:`${t("status.serverNew")}\n${r.value}`:{3:t("status.serverDownloading"),4:t("status.serverDownloaded"),5:t("status.serverUnZipIng"),6:t("status.serverUnZip")}[n.value.Status]:t("status.serverNoUpdate"),p=()=>i.version!=s.value.Version?"yellow":"green",g=()=>{e.config&&o.value&&([0,1,3,5].indexOf(n.value.Status)>=0?D.nk.error(t("common.operating")):6!=n.value.Status?2==s.value.Status&&De.s.confirm(t("status.serverConfirm"),t("common.tips"),{confirmButtonText:t("common.confirm"),cancelButtonText:t("common.cancel"),type:"warning"}).then((()=>{(0,We.y2)(s.value.Version||a.value.signin.Version).then((()=>{setTimeout((()=>{u()}),1e3)}))})).catch((()=>{})):De.s.confirm(t("status.serverCloseConfirm"),t("common.tips"),{confirmButtonText:t("common.confirm"),cancelButtonText:t("common.cancel"),type:"warning"}).then((()=>{(0,We.aP)()})).catch((()=>{})))};return(0,l.sV)((()=>{d(),u()})),{config:e.config,state:i,updaterCurrent:s,updaterServer:n,handleUpdate:g,updateText:c,updateColor:p}}};const Ue=(0,C.A)(ze,[["render",Ae],["__scopeId","data-v-1b4c7f6e"]]);var Ee=Ue,Oe={components:{ServerConfig:E,ServerFlow:Te,ServerVersion:Ee},props:["config"],setup(e){const t=(0,S.B)(),a=(0,l.EW)((()=>t.value.hasAccess("Flow"))),o=(0,y.Kh)({show:!1,loading:!1});return{config:e.config,hasFlow:a,state:o}}};const Ke=(0,C.A)(Oe,[["render",T],["__scopeId","data-v-2d85a782"]]);var Me=Ke;const Xe={key:0,class:"status-export-wrap"},je=["title"],Ge={class:"port-wrap"},Ne={class:"text"},Qe={class:"body"},Ye={class:"card-header"},Ze={class:"flex"},qe={style:{"margin-left":"2rem"}};function He(e,t,a,s,n,r){const i=(0,l.g2)("Share"),d=(0,l.g2)("el-icon"),u=(0,l.g2)("el-checkbox"),c=(0,l.g2)("el-input"),p=(0,l.g2)("Access"),g=(0,l.g2)("el-card"),m=(0,l.g2)("el-button"),f=(0,l.g2)("el-dialog");return s.config&&s.hasExport?((0,l.uX)(),(0,l.CE)("div",Xe,[(0,l.Lk)("a",{href:"javascript:;",title:e.$t("status.export"),onClick:t[0]||(t[0]=e=>s.state.show=!0)},[(0,l.bF)(d,{size:"16"},{default:(0,l.k6)((()=>[(0,l.bF)(i)])),_:1}),(0,l.eW)(" "+(0,o.v_)(e.$t("status.export")),1)],8,je),(0,l.bF)(f,{class:"options-center",title:e.$t("status.export"),"destroy-on-close":"",modelValue:s.state.show,"onUpdate:modelValue":t[5]||(t[5]=e=>s.state.show=e),center:"",width:"580",top:"1vh"},{footer:(0,l.k6)((()=>[(0,l.bF)(m,{plain:"",onClick:t[4]||(t[4]=e=>s.state.show=!1),loading:s.state.loading},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.$t("common.cancel")),1)])),_:1},8,["loading"]),(0,l.bF)(m,{type:"success",plain:"",onClick:s.handleExport,loading:s.state.loading},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.$t("common.confirm")),1)])),_:1},8,["onClick","loading"])])),default:(0,l.k6)((()=>[(0,l.Lk)("div",Ge,[(0,l.Lk)("div",Ne,(0,o.v_)(e.$t("status.exportText")),1),(0,l.Lk)("div",Qe,[(0,l.bF)(g,{shadow:"never"},{header:(0,l.k6)((()=>[(0,l.Lk)("div",Ye,[(0,l.Lk)("div",Ze,[(0,l.Lk)("div",null,[(0,l.bF)(u,{disabled:s.onlyNode,modelValue:s.state.single,"onUpdate:modelValue":t[1]||(t[1]=e=>s.state.single=e),label:e.$t("status.exportSingle")},null,8,["disabled","modelValue","label"])]),(0,l.Lk)("div",qe,[(0,l.Lk)("span",null,(0,o.v_)(e.$t("status.exportName"))+" : ",1),(0,l.bF)(c,{disabled:!s.state.single,modelValue:s.state.name,"onUpdate:modelValue":t[2]||(t[2]=e=>s.state.name=e),maxlength:"32","show-word-limit":"",style:{width:"15rem"}},null,8,["disabled","modelValue"])]),(0,l.Lk)("div",null,[(0,l.Lk)("span",null,(0,o.v_)(e.$t("status.exportApiPassword"))+" : ",1),(0,l.bF)(c,{type:"password","show-password":"",disabled:s.onlyNode,modelValue:s.state.apipassword,"onUpdate:modelValue":t[3]||(t[3]=e=>s.state.apipassword=e),maxlength:"36","show-word-limit":"",style:{width:"15rem"}},null,8,["disabled","modelValue"])])])])])),default:(0,l.k6)((()=>[(0,l.bF)(p,{ref:"accessDom",machineid:s.machineId},null,8,["machineid"])])),_:1})])])])),_:1},8,["title","modelValue"])])):(0,l.Q3)("",!0)}var Je=a(8835),et=a(6158),tt={components:{Share:$.SYj,Access:et.A},props:["config"],setup(e){const{t:t}=(0,W.s9)(),a=(0,S.B)(),o=(0,l.EW)((()=>a.value.hasAccess("Export"))),s=(0,l.EW)((()=>a.value.config.Client.OnlyNode)),n=(0,l.EW)((()=>a.value.config.Client.Id)),r=(0,y.Kh)({show:!1,loading:!1,single:!0,name:"",apipassword:""}),i=(0,y.KR)(null),d=()=>{if(!o.value)return;const e={access:i.value.getValue(),single:r.single,name:r.name,apipassword:r.apipassword};if(e.single){if(!e.name)return void D.nk.error(t("status.exportNamePlease"))}else e.name="";if(r.apipassword)return e;D.nk.error(t("status.exportApiPasswordPlease"))},u=()=>{const e=document.createElement("a");r.single?e.download=`client-node-export-${r.name}.zip`:e.download="client-node-export.zip",e.href="/client-node-export.zip",document.body.appendChild(e),e.click(),document.body.removeChild(e)},c=()=>{const e=d();e&&(r.loading=!0,(0,Je.P$)(e).then((()=>{r.loading=!1,r.show=!1,D.nk.success(t("common.oper")),u()})).catch((()=>{D.nk.error(t("common.operFail")),r.loading=!1})))};return{config:e.config,onlyNode:s,hasExport:o,machineId:n,state:r,accessDom:i,handleExport:c}}};const at=(0,C.A)(tt,[["render",He],["__scopeId","data-v-844ab17c"]]);var lt=at,ot=a(4001),st={components:{Api:V,Server:Me,Export:lt,UpdaterBtn:ot.A},props:["config"],setup(e){const t=(0,S.B)(),a=(0,l.EW)((()=>t.value.self)),o=(0,y.Kh)({showPay:!1});return{state:o,config:e.config,self:a}}};const nt=(0,C.A)(st,[["render",w],["__scopeId","data-v-81a12f1c"]]);var rt=nt}}]);