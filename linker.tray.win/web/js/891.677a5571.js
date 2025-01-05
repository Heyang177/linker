"use strict";(self["webpackChunklinker_web"]=self["webpackChunklinker_web"]||[]).push([[891],{9232:function(e,l,a){a.d(l,{W4:function(){return o},q:function(){return n},uQ:function(){return r}});var t=a(4);const n=e=>(0,t.zG)("relay/SetServers",e),o=()=>(0,t.zG)("relay/Subscribe"),r=e=>(0,t.zG)("relay/Connect",e)},743:function(e,l,a){a.d(l,{Ap:function(){return n},Co:function(){return o},DY:function(){return u},Qs:function(){return i},a9:function(){return s},eX:function(){return c},gz:function(){return d},pY:function(){return r}});var t=a(4);const n=()=>(0,t.zG)("sforward/GetSecretKey"),o=e=>(0,t.zG)("sforward/SetSecretKey",e),r=e=>(0,t.zG)("sforward/get",e),s=()=>(0,t.zG)("sforward/refresh"),d=(e="0")=>(0,t.zG)("sforward/getcount",e),u=e=>(0,t.zG)("sforward/remove",e),i=e=>(0,t.zG)("sforward/add",e),c=e=>(0,t.zG)("sforward/TestLocal",e)},920:function(e,l,a){a.d(l,{BJ:function(){return c},Ce:function(){return g},NS:function(){return r},PY:function(){return u},UB:function(){return p},Vk:function(){return i},aP:function(){return m},ir:function(){return d},lJ:function(){return o},mK:function(){return n},y2:function(){return h},yN:function(){return s}});var t=a(4);const n=(e="0")=>(0,t.zG)("updater/get",e),o=e=>(0,t.zG)("updater/confirm",e),r=e=>(0,t.zG)("updater/exit",e),s=()=>(0,t.zG)("updater/GetSecretKey"),d=e=>(0,t.zG)("updater/SetSecretKey",e),u=e=>(0,t.zG)("updater/SetInterval",e),i=()=>(0,t.zG)("updater/getcurrent"),c=()=>(0,t.zG)("updater/getserver"),h=e=>(0,t.zG)("updater/confirmserver",e),m=()=>(0,t.zG)("updater/exitserver"),p=()=>(0,t.zG)("updater/Subscribe"),g=e=>(0,t.zG)("updater/check",e)},2891:function(e,l,a){a.r(l),a.d(l,{default:function(){return se}});var t=a(6768);const n={class:"servers-wrap"};function o(e,l,a,o,r,s){const d=(0,t.g2)("SignInServers"),u=(0,t.g2)("el-tab-pane"),i=(0,t.g2)("Groups"),c=(0,t.g2)("Async"),h=(0,t.g2)("el-tabs");return(0,t.uX)(),(0,t.CE)("div",n,[(0,t.bF)(h,{type:"border-card",style:{width:"100%"},modelValue:o.state.tab,"onUpdate:modelValue":l[0]||(l[0]=e=>o.state.tab=e)},{default:(0,t.k6)((()=>[o.hasConfig?((0,t.uX)(),(0,t.Wv)(u,{key:0,label:"信标服务器",name:"signin"},{default:(0,t.k6)((()=>[(0,t.bF)(d)])),_:1})):(0,t.Q3)("",!0),o.hasGroup?((0,t.uX)(),(0,t.Wv)(u,{key:1,label:"分组设置",name:"groups"},{default:(0,t.k6)((()=>[(0,t.bF)(i)])),_:1})):(0,t.Q3)("",!0),o.hasSync?((0,t.uX)(),(0,t.Wv)(u,{key:2,label:"配置同步",name:"async"},{default:(0,t.k6)((()=>[(0,t.bF)(c)])),_:1})):(0,t.Q3)("",!0)])),_:1},8,["modelValue"])])}var r=a(144),s=a(3830),d=a(4232);const u={class:"flex"},i=(0,t.Lk)("span",null,"服务器地址。ip:端口 或者 域名:端口",-1),c={class:"flex"},h=(0,t.Lk)("span",null,"密钥正确时可连接服务器",-1),m={class:"t-c"};function p(e,l,a,n,o,r){const s=(0,t.g2)("el-input"),p=(0,t.g2)("el-form-item"),g=(0,t.g2)("RelayServers"),k=(0,t.g2)("SForward"),f=(0,t.g2)("Updater"),b=(0,t.g2)("el-form"),y=(0,t.g2)("el-button"),w=(0,t.g2)("el-card");return(0,t.uX)(),(0,t.CE)("div",{class:"signin-wrap",style:(0,d.Tr)({height:`${n.state.height}px`})},[(0,t.bF)(w,{shadow:"never"},{header:(0,t.k6)((()=>[(0,t.eW)("服务器相关设置")])),footer:(0,t.k6)((()=>[(0,t.Lk)("div",m,[(0,t.bF)(y,{type:"success",onClick:n.handleSave},{default:(0,t.k6)((()=>[(0,t.eW)("确定更改")])),_:1},8,["onClick"])])])),default:(0,t.k6)((()=>[(0,t.Lk)("div",null,[(0,t.bF)(b,{"label-width":"auto"},{default:(0,t.k6)((()=>[(0,t.bF)(p,{label:"服务器地址"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",u,[(0,t.bF)(s,{class:"flex-1",modelValue:n.state.list.Host,"onUpdate:modelValue":l[0]||(l[0]=e=>n.state.list.Host=e),onChange:n.handleSave},null,8,["modelValue","onChange"]),i])])),_:1}),(0,t.bF)(p,{label:"信标密钥"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",c,[(0,t.bF)(s,{class:"flex-1",type:"password","show-password":"",maxlength:"36",modelValue:n.state.list.SecretKey,"onUpdate:modelValue":l[1]||(l[1]=e=>n.state.list.SecretKey=e),onChange:n.handleSave},null,8,["modelValue","onChange"]),h])])),_:1}),(0,t.bF)(g),(0,t.bF)(k),(0,t.bF)(f)])),_:1})])])),_:1})],4)}var g=a(9299),k=a(1219);const f={class:"flex"},b=(0,t.Lk)("span",null,"密钥正确时可使用内网穿透",-1);function y(e,l,a,n,o,r){const s=(0,t.g2)("el-input"),d=(0,t.g2)("el-form-item");return(0,t.uX)(),(0,t.Wv)(d,{label:"服务器穿透密钥"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",f,[(0,t.bF)(s,{class:"flex-1",type:"password","show-password":"",modelValue:n.state.SForwardSecretKey,"onUpdate:modelValue":l[0]||(l[0]=e=>n.state.SForwardSecretKey=e),maxlength:"36",onBlur:n.handleChange},null,8,["modelValue","onBlur"]),b])])),_:1})}var w=a(743),v={setup(e){const l=(0,r.Kh)({SForwardSecretKey:""}),a=()=>{(0,w.Ap)().then((e=>{l.SForwardSecretKey=e}))},n=()=>{l.SForwardSecretKey&&(0,w.Co)(l.SForwardSecretKey).then((()=>{k.nk.success("已操作")})).catch((e=>{console.log(e),k.nk.error("操作失败")}))},o=()=>{n()};return(0,t.sV)((()=>{a()})),{state:l,handleChange:o}}},C=a(1241);const S=(0,C.A)(v,[["render",y]]);var V=S;const F={class:"flex"},_=(0,t.Lk)("span",null,"密钥正确时可更新服务端",-1);function G(e,l,a,n,o,r){const s=(0,t.g2)("el-input"),d=(0,t.g2)("el-form-item"),u=(0,t.g2)("el-input-number");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.bF)(d,{label:"服务器更新密钥"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",F,[(0,t.bF)(s,{class:"flex-1",type:"password","show-password":"",modelValue:n.state.secretKey,"onUpdate:modelValue":l[0]||(l[0]=e=>n.state.secretKey=e),maxlength:"36",onBlur:n.handleChange},null,8,["modelValue","onBlur"]),_])])),_:1}),(0,t.bF)(d,{label:"客户端更新检测频率"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",null,[(0,t.Lk)("div",null,[(0,t.bF)(u,{modelValue:n.state.year,"onUpdate:modelValue":l[1]||(l[1]=e=>n.state.year=e),min:0,max:99,style:{width:"12rem"},onChange:n.handleSecChange},null,8,["modelValue","onChange"]),(0,t.eW)(" 年 "),(0,t.bF)(u,{modelValue:n.state.month,"onUpdate:modelValue":l[2]||(l[2]=e=>n.state.month=e),min:0,max:99,style:{width:"12rem"},onChange:n.handleSecChange},null,8,["modelValue","onChange"]),(0,t.eW)(" 月 "),(0,t.bF)(u,{modelValue:n.state.day,"onUpdate:modelValue":l[3]||(l[3]=e=>n.state.day=e),min:0,max:99,style:{width:"12rem"},onChange:n.handleSecChange},null,8,["modelValue","onChange"]),(0,t.eW)(" 日 ")]),(0,t.Lk)("div",null,[(0,t.bF)(u,{modelValue:n.state.hour,"onUpdate:modelValue":l[4]||(l[4]=e=>n.state.hour=e),min:0,max:99,style:{width:"12rem"},onChange:n.handleSecChange},null,8,["modelValue","onChange"]),(0,t.eW)(" 时 "),(0,t.bF)(u,{modelValue:n.state.min,"onUpdate:modelValue":l[5]||(l[5]=e=>n.state.min=e),min:0,max:99,style:{width:"12rem"},onChange:n.handleSecChange},null,8,["modelValue","onChange"]),(0,t.eW)(" 分 "),(0,t.bF)(u,{modelValue:n.state.sec,"onUpdate:modelValue":l[6]||(l[6]=e=>n.state.sec=e),min:0,max:99,style:{width:"12rem"},onChange:n.handleSecChange},null,8,["modelValue","onChange"]),(0,t.eW)(" 秒 ")])])])),_:1})],64)}var x=a(920),K={setup(e){const l=(0,s.B)(),a=(0,r.Kh)({secretKey:"",year:0,month:0,day:0,hour:0,min:1,sec:0}),n=()=>{(0,x.yN)().then((e=>{a.secretKey=e}))},o=()=>{a.secretKey&&(0,x.ir)(a.secretKey).then((()=>{k.nk.success("已操作")})).catch((e=>{console.log(e),k.nk.error("操作失败")}))},d=()=>{const e=31536e3*a.year+2592e3*a.month+86400*a.day+3600*a.hour+60*a.min+a.sec;(0,x.PY)(e).then((()=>{k.nk.success("已操作")})).catch((e=>{console.log(e),k.nk.error("操作失败")}))},u=()=>{d()},i=()=>{o()};return(0,t.sV)((()=>{n();let e=l.value.config.Common.UpdateIntervalSeconds;a.year=Math.floor(e/31536e3),e%=31536e3,a.month=Math.floor(e/2592e3),e%=2592e3,a.day=Math.floor(e/86400),e%=86400,a.hour=Math.floor(e/3600),e%=3600,a.min=Math.floor(e/60),e%=60,a.sec=e})),{state:a,handleChange:i,handleSecChange:u}}};const z=(0,C.A)(K,[["render",G]]);var B=z;const E={key:0},W={key:1},U={key:0},X={key:1},L={key:0},A={key:1};function I(e,l,a,n,o,r){const s=(0,t.g2)("el-input"),u=(0,t.g2)("el-checkbox"),i=(0,t.g2)("el-form-item"),c=(0,t.g2)("el-table-column"),h=(0,t.g2)("el-switch"),m=(0,t.g2)("el-table"),p=(0,t.g2)("el-dialog");return(0,t.uX)(),(0,t.CE)(t.FK,null,[(0,t.bF)(i,{label:"中继密钥"},{default:(0,t.k6)((()=>[(0,t.bF)(s,{type:"password","show-password":"",modelValue:n.state.list.SecretKey,"onUpdate:modelValue":l[0]||(l[0]=e=>n.state.list.SecretKey=e),maxlength:"36",onChange:n.handleSave},null,8,["modelValue","onChange"]),(0,t.bF)(u,{modelValue:n.state.list.SSL,"onUpdate:modelValue":l[1]||(l[1]=e=>n.state.list.SSL=e),label:"使用ssl",size:"large",onChange:n.handleSave},null,8,["modelValue","onChange"]),(0,t.bF)(u,{modelValue:n.state.list.Disabled,"onUpdate:modelValue":l[2]||(l[2]=e=>n.state.list.Disabled=e),label:"禁用中继",size:"large",onChange:n.handleSave},null,8,["modelValue","onChange"]),(0,t.Lk)("a",{href:"javascript:;",onClick:l[3]||(l[3]=e=>n.state.show=!0),class:(0,d.C4)(["delay a-line",{red:0==n.state.nodes.length,green:n.state.nodes.length>0}])}," 中继节点 : "+(0,d.v_)(n.state.nodes.length),3)])),_:1}),(0,t.bF)(p,{modelValue:n.state.show,"onUpdate:modelValue":l[4]||(l[4]=e=>n.state.show=e),title:"中继节点",width:"760",top:"2vh"},{default:(0,t.k6)((()=>[(0,t.Lk)("div",null,[(0,t.bF)(m,{data:n.state.nodes,size:"small",border:"",height:"500"},{default:(0,t.k6)((()=>[(0,t.bF)(c,{property:"Name",label:"名称"}),(0,t.bF)(c,{property:"MaxGbTotal",label:"月流量",width:"160"},{default:(0,t.k6)((e=>[0==e.row.MaxGbTotal?((0,t.uX)(),(0,t.CE)("span",E,"无限制")):((0,t.uX)(),(0,t.CE)("span",W,(0,d.v_)((e.row.MaxGbTotalLastBytes/1024/1024/1024).toFixed(2))+"GB / "+(0,d.v_)(e.row.MaxGbTotal)+"GB",1))])),_:1}),(0,t.bF)(c,{property:"MaxBandwidth",label:"连接带宽",width:"80"},{default:(0,t.k6)((e=>[0==e.row.MaxBandwidth?((0,t.uX)(),(0,t.CE)("span",U,"无限制")):((0,t.uX)(),(0,t.CE)("span",X,(0,d.v_)(e.row.MaxBandwidth)+"Mbps",1))])),_:1}),(0,t.bF)(c,{property:"MaxBandwidthTotal",label:"总带宽",width:"80"},{default:(0,t.k6)((e=>[0==e.row.MaxBandwidthTotal?((0,t.uX)(),(0,t.CE)("span",L,"无限制")):((0,t.uX)(),(0,t.CE)("span",A,(0,d.v_)(e.row.MaxBandwidthTotal)+"Mbps",1))])),_:1}),(0,t.bF)(c,{property:"BandwidthRatio",label:"带宽速率",width:"66"},{default:(0,t.k6)((e=>[(0,t.Lk)("span",null,(0,d.v_)(100*e.row.BandwidthRatio)+"%",1)])),_:1}),(0,t.bF)(c,{property:"ConnectionRatio",label:"连接数",width:"60"},{default:(0,t.k6)((e=>[(0,t.Lk)("span",null,(0,d.v_)(100*e.row.ConnectionRatio)+"%",1)])),_:1}),(0,t.bF)(c,{property:"Delay",label:"延迟",width:"60"},{default:(0,t.k6)((e=>[(0,t.Lk)("span",null,(0,d.v_)(e.row.Delay)+"ms",1)])),_:1}),(0,t.bF)(c,{property:"Public",label:"公开",width:"60"},{default:(0,t.k6)((e=>[(0,t.bF)(h,{disabled:"",modelValue:e.row.Public,"onUpdate:modelValue":l=>e.row.Public=l,size:"small"},null,8,["modelValue","onUpdate:modelValue"])])),_:1})])),_:1},8,["data"])])])),_:1},8,["modelValue"])],64)}var M=a(9232),P={setup(e){const l=(0,s.B)(),a=(0,r.Kh)({list:l.value.config.Client.Relay.Server,show:!1,nodes:[],timer:0});(0,t.wB)((()=>l.value.config.Client.Relay.Server),(()=>{a.list.Delay=l.value.config.Client.Relay.Server.Delay}));const n=()=>{(0,M.q)(a.list).then((()=>{k.nk.success("已操作")})).catch((e=>{console.log(e),k.nk.error("操作失败")}))},o=()=>{(0,M.W4)().then((e=>{a.nodes=e,a.timer=setTimeout(o,1e3)})).catch((()=>{a.timer=setTimeout(o,1e3)}))};return(0,t.sV)((()=>{o()})),(0,t.hi)((()=>{clearTimeout(a.timer)})),{state:a,handleSave:n}}};const T=(0,C.A)(P,[["render",I],["__scopeId","data-v-3a883663"]]);var N=T,D={components:{SForward:V,Updater:B,RelayServers:N},setup(e){const l=(0,s.B)(),a=(0,r.Kh)({list:l.value.config.Client.Server,height:(0,t.EW)((()=>l.value.height-90))}),n=()=>{(0,g.jU)(a.list).then((()=>{k.nk.success("已操作，请在右下角【信标服务器】重连")})).catch((e=>{console.log(e),k.nk.error("操作失败")}))};return{state:a,handleSave:n}}};const R=(0,C.A)(D,[["render",p]]);var $=R;function Q(e,l,a,n,o,r){const s=(0,t.g2)("el-input"),u=(0,t.g2)("el-table-column"),i=(0,t.g2)("Delete"),c=(0,t.g2)("el-icon"),h=(0,t.g2)("el-button"),m=(0,t.g2)("el-popconfirm"),p=(0,t.g2)("Plus"),g=(0,t.g2)("el-table");return(0,t.uX)(),(0,t.Wv)(g,{stripe:"",data:n.state.list,border:"",size:"small",width:"100%",height:`${n.state.height}px`,onCellDblclick:n.handleCellClick},{default:(0,t.k6)((()=>[(0,t.bF)(u,{prop:"Name",label:"名称",width:"100"},{default:(0,t.k6)((e=>[e.row.NameEditing?((0,t.uX)(),(0,t.Wv)(s,{key:0,autofocus:"",size:"small",modelValue:e.row.Name,"onUpdate:modelValue":l=>e.row.Name=l,onBlur:l=>n.handleEditBlur(e.row,"Name")},null,8,["modelValue","onUpdate:modelValue","onBlur"])):((0,t.uX)(),(0,t.CE)(t.FK,{key:1},[(0,t.eW)((0,d.v_)(e.row.Name),1)],64))])),_:1}),(0,t.bF)(u,{prop:"Id",label:"Id"},{default:(0,t.k6)((e=>[e.row.IdEditing?((0,t.uX)(),(0,t.Wv)(s,{key:0,autofocus:"",size:"small",modelValue:e.row.Id,"onUpdate:modelValue":l=>e.row.Id=l,onBlur:l=>n.handleEditBlur(e.row,"Id")},null,8,["modelValue","onUpdate:modelValue","onBlur"])):((0,t.uX)(),(0,t.CE)(t.FK,{key:1},[(0,t.eW)((0,d.v_)(e.row.Id),1)],64))])),_:1}),(0,t.bF)(u,{prop:"Password",label:"密码"},{default:(0,t.k6)((e=>[e.row.PasswordEditing?((0,t.uX)(),(0,t.Wv)(s,{key:0,type:"password","show-password":"",size:"small",modelValue:e.row.Password,"onUpdate:modelValue":l=>e.row.Password=l,onBlur:l=>n.handleEditBlur(e.row,"Password")},null,8,["modelValue","onUpdate:modelValue","onBlur"])):((0,t.uX)(),(0,t.CE)(t.FK,{key:1},[(0,t.eW)((0,d.v_)(e.row.Password.replace(/.{1}/g,"*")),1)],64))])),_:1}),(0,t.bF)(u,{prop:"Oper",label:"操作",width:"110"},{default:(0,t.k6)((e=>[(0,t.Lk)("div",null,[(0,t.bF)(m,{title:"删除不可逆，是否确认?",onConfirm:l=>n.handleDel(e.$index)},{reference:(0,t.k6)((()=>[(0,t.bF)(h,{type:"danger",size:"small"},{default:(0,t.k6)((()=>[(0,t.bF)(c,null,{default:(0,t.k6)((()=>[(0,t.bF)(i)])),_:1})])),_:1})])),_:2},1032,["onConfirm"]),(0,t.bF)(h,{type:"primary",size:"small",onClick:l=>n.handleAdd(e.$index)},{default:(0,t.k6)((()=>[(0,t.bF)(c,null,{default:(0,t.k6)((()=>[(0,t.bF)(p)])),_:1})])),_:2},1032,["onClick"])])])),_:1})])),_:1},8,["data","height","onCellDblclick"])}var Y=a(7477),j={components:{Delete:Y.epd,Plus:Y.FWt,Select:Y.l6P},setup(e){const l=(0,s.B)(),a=(0,r.Kh)({list:l.value.config.Client.Groups||[],height:(0,t.EW)((()=>l.value.height-90))});(0,t.wB)((()=>l.value.config.Client.Groups),(()=>{0==a.list.filter((e=>e["__editing"])).length&&(a.list=l.value.config.Client.Groups)}));const n=(e,l)=>{o(e,l.property)},o=(e,l)=>{a.list.forEach((e=>{e["NameEditing"]=!1,e["IdEditing"]=!1,e["PasswordEditing"]=!1})),e[`${l}Editing`]=!0,e["__editing"]=!0},d=(e,l)=>{e[`${l}Editing`]=!1,e["__editing"]=!1,c()},u=e=>{a.list.splice(e,1),c()},i=e=>{a.list.filter((e=>""==e.Id||""==e.Name)).length>0||(a.list.splice(e+1,0,{Name:"",Id:"",Password:""}),c())},c=()=>{(0,g.zp)(a.list).then((()=>{k.nk.success("已操作，请在右下角【信标服务器】重连")})).catch((e=>{console.log(e),k.nk.error("操作失败")}))};return{state:a,handleCellClick:n,handleEditBlur:d,handleDel:u,handleAdd:i}}};const q=(0,C.A)(j,[["render",Q]]);var H=q;const J={class:"t-c"};function O(e,l,a,n,o,r){const s=(0,t.g2)("el-checkbox"),u=(0,t.g2)("el-col"),i=(0,t.g2)("el-row"),c=(0,t.g2)("el-checkbox-group"),h=(0,t.g2)("el-button"),m=(0,t.g2)("el-card");return(0,t.uX)(),(0,t.CE)("div",{style:(0,d.Tr)({height:`${n.state.height}px`})},[(0,t.bF)(m,{shadow:"never"},{header:(0,t.k6)((()=>[(0,t.eW)("选择你需要同步的项，将这些配置同步到本组所有客户端")])),footer:(0,t.k6)((()=>[(0,t.Lk)("div",J,[(0,t.bF)(h,{type:"success",onClick:n.handleSync},{default:(0,t.k6)((()=>[(0,t.eW)("确定同步")])),_:1},8,["onClick"])])])),default:(0,t.k6)((()=>[(0,t.Lk)("div",null,[(0,t.bF)(s,{modelValue:n.state.checkAll,"onUpdate:modelValue":l[0]||(l[0]=e=>n.state.checkAll=e),indeterminate:n.state.isIndeterminate,onChange:n.handleCheckAllChange},{default:(0,t.k6)((()=>[(0,t.eW)("全选")])),_:1},8,["modelValue","indeterminate","onChange"]),(0,t.bF)(c,{modelValue:n.state.checkeds,"onUpdate:modelValue":l[1]||(l[1]=e=>n.state.checkeds=e),onChange:n.handleCheckedsChange},{default:(0,t.k6)((()=>[(0,t.bF)(i,null,{default:(0,t.k6)((()=>[((0,t.uX)(!0),(0,t.CE)(t.FK,null,(0,t.pI)(n.state.names,(e=>((0,t.uX)(),(0,t.Wv)(u,{span:8},{default:(0,t.k6)((()=>[((0,t.uX)(),(0,t.Wv)(s,{key:e.name,label:e.label,value:e.name},{default:(0,t.k6)((()=>[(0,t.eW)((0,d.v_)(e.label),1)])),_:2},1032,["label","value"]))])),_:2},1024)))),256))])),_:1})])),_:1},8,["modelValue","onChange"])])])),_:1})],4)}var Z=a(4);const ee=()=>(0,Z.zG)("sync/Names"),le=e=>(0,Z.zG)("sync/Sync",e);var ae={label:"同步配置",name:"async",order:7,setup(e){const l=(0,s.B)(),a=(0,r.Kh)({names:[],checkAll:!1,isIndeterminate:!1,checkeds:[],height:(0,t.EW)((()=>l.value.height-90))}),n=e=>{a.checkeds=e?a.names.map((e=>e.name)):[],a.isIndeterminate=!1},o=e=>{const l=e.length;a.checkAll=l===a.names.length,a.isIndeterminate=l>0&&l<a.names.length},d={SignInSecretKey:"当前信标密钥",GroupSecretKey:"当前分组密码",RelaySecretKey:"当前中继密钥",SForwardSecretKey:"当前服务器穿透密钥",UpdaterSecretKey:"服务器更新密钥",TunnelTransports:"打洞协议列表"};(0,t.sV)((()=>{ee().then((e=>{a.names=e.map((e=>({name:e,label:d[e]})))}))}));const u=()=>{0!=a.checkeds.length?le(a.checkeds).then((e=>{k.nk.success("已操作")})):k.nk.error("至少选择一个")};return{state:a,handleCheckAllChange:n,handleCheckedsChange:o,handleSync:u}}};const te=(0,C.A)(ae,[["render",O]]);var ne=te,oe={components:{SignInServers:$,Groups:H,Async:ne},setup(e){const l=(0,s.B)(),a=(0,t.EW)((()=>l.value.hasAccess("Config"))),n=(0,t.EW)((()=>l.value.hasAccess("Sync"))),o=(0,t.EW)((()=>l.value.hasAccess("Group"))),d=(0,r.Kh)({tab:"signin"});return(0,t.sV)((()=>{d.tab=a.value?"signin":o.value?"groups":"async"})),{state:d,hasConfig:a,hasSync:n,hasGroup:o}}};const re=(0,C.A)(oe,[["render",o],["__scopeId","data-v-228f71ce"]]);var se=re}}]);