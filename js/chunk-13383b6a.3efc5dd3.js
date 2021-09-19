(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13383b6a"],{"0383":function(e,t,l){},"2a51":function(e,t,l){"use strict";var o=l("7a23");function n(e,t,l,n,a,c){const u=Object(o["z"])("ion-icon"),b=Object(o["z"])("ion-fab-button"),i=Object(o["z"])("ion-fab");return Object(o["s"])(),Object(o["e"])(i,{horizontal:"end",vertical:"bottom",slot:"fixed"},{default:Object(o["E"])(()=>[Object(o["j"])(b,{onClick:t[0]||(t[0]=e=>c.returnHome()),color:"grey"},{default:Object(o["E"])(()=>[Object(o["j"])(u,{icon:n.homeOutline},null,8,["icon"])]),_:1})]),_:1})}var a=l("d867"),c=l("ff79"),u={setup(){return{homeOutline:c["l"]}},components:{IonFab:a["h"],IonFabButton:a["i"],IonIcon:a["k"]},methods:{returnHome(){this.$router.replace("/")}}};u.render=n;t["a"]=u},5729:function(e,t,l){"use strict";l("0383")},"722c":function(e,t,l){"use strict";l.r(t);var o=l("7a23");Object(o["v"])("data-v-3f53bd1c");const n={id:"container"},a=Object(o["h"])("img",{class:"invert",src:"/img/stagnation.png",style:{"padding-left":"2%","padding-right":"2%"}},null,-1),c=Object(o["h"])("br",null,null,-1),u=Object(o["h"])("br",null,null,-1),b=Object(o["i"])("P"),i=Object(o["h"])("sub",null,"stag",-1),r=Object(o["i"])(" : "),s=Object(o["i"])("P      : "),j=Object(o["i"])("ρ      : "),h=Object(o["i"])("V      : "),O=Object(o["h"])("br",null,null,-1),d=Object(o["i"])("Clear");function p(e,t,l,p,m,v){const f=Object(o["z"])("Header"),g=Object(o["z"])("ion-label"),S=Object(o["z"])("ion-input"),y=Object(o["z"])("ion-item"),k=Object(o["z"])("ion-list"),w=Object(o["z"])("ion-button"),_=Object(o["z"])("home-button"),E=Object(o["z"])("ion-content"),I=Object(o["z"])("ion-page");return Object(o["s"])(),Object(o["e"])(I,null,{default:Object(o["E"])(()=>[Object(o["j"])(f,{title:"Stagnation Pressure",clear:e.clear},null,8,["clear"]),Object(o["j"])(E,{fullscreen:!0},{default:Object(o["E"])(()=>[Object(o["h"])("div",n,[a,c,u,Object(o["j"])(k,null,{default:Object(o["E"])(()=>[Object(o["j"])(y,null,{default:Object(o["E"])(()=>[Object(o["j"])(g,null,{default:Object(o["E"])(()=>[b,i,r]),_:1}),e.pStagShow?(Object(o["s"])(),Object(o["e"])(S,{key:1,type:"number",value:e.pStagShow,readonly:""},null,8,["value"])):(Object(o["s"])(),Object(o["e"])(S,{key:0,modelValue:e.pStag,"onUpdate:modelValue":t[0]||(t[0]=t=>e.pStag=t),type:"number",placeholder:"Stagnation Pressure ( kPa )"},null,8,["modelValue"]))]),_:1}),Object(o["j"])(y,null,{default:Object(o["E"])(()=>[Object(o["j"])(g,null,{default:Object(o["E"])(()=>[s]),_:1}),e.pShow?(Object(o["s"])(),Object(o["e"])(S,{key:1,type:"number",value:e.pShow,readonly:""},null,8,["value"])):(Object(o["s"])(),Object(o["e"])(S,{key:0,modelValue:e.p,"onUpdate:modelValue":t[1]||(t[1]=t=>e.p=t),type:"number",placeholder:"Static Pressure ( kPa )"},null,8,["modelValue"]))]),_:1}),Object(o["j"])(y,null,{default:Object(o["E"])(()=>[Object(o["j"])(g,null,{default:Object(o["E"])(()=>[j]),_:1}),e.rhoShow?(Object(o["s"])(),Object(o["e"])(S,{key:1,type:"number",value:e.rhoShow,readonly:""},null,8,["value"])):(Object(o["s"])(),Object(o["e"])(S,{key:0,modelValue:e.rho,"onUpdate:modelValue":t[2]||(t[2]=t=>e.rho=t),type:"number",placeholder:"Fluid Density ( kg/m^3 )"},null,8,["modelValue"]))]),_:1}),Object(o["j"])(y,null,{default:Object(o["E"])(()=>[Object(o["j"])(g,null,{default:Object(o["E"])(()=>[h]),_:1}),e.vShow?(Object(o["s"])(),Object(o["e"])(S,{key:1,type:"number",value:e.vShow,readonly:""},null,8,["value"])):(Object(o["s"])(),Object(o["e"])(S,{key:0,modelValue:e.v,"onUpdate:modelValue":t[3]||(t[3]=t=>e.v=t),type:"number",placeholder:"Fluid Velocity ( m/s )"},null,8,["modelValue"]))]),_:1})]),_:1}),O,Object(o["j"])(w,{color:"dark",onClick:t[4]||(t[4]=t=>e.clear()),id:"clear"},{default:Object(o["E"])(()=>[d]),_:1})]),Object(o["j"])(_)]),_:1})]),_:1})}Object(o["t"])();var m=l("d867"),v=l("71c2"),f=l("2a51"),g=Object(o["k"])({components:{IonPage:m["q"],IonContent:m["g"],IonButton:m["b"],IonInput:m["l"],IonList:m["o"],IonItem:m["m"],IonLabel:m["n"],Header:v["a"],HomeButton:f["a"]},data(){return{pStag:"",p:"",rho:"",v:""}},computed:{pStagShow(){return""!=this.p&&""!=this.rho&&""!=this.v?parseFloat(1e3*this.p+this.rho*this.v**2*1e3/2).toFixed(this.$store.state.decimal):""},pShow(){return""!=this.pStag&&""!=this.rho&&""!=this.v?parseFloat(1e3*this.pStag-this.rho*this.v**2*1e3/2).toFixed(this.$store.state.decimal):""},rhoShow(){return""!=this.pStag&&""!=this.p&&""!=this.v?parseFloat((this.pStag-this.p)/(this.v**2/2)).toFixed(this.$store.state.decimal):""},vShow(){return""!=this.pStag&&""!=this.p&&""!=this.rho?parseFloat(Math.sqrt(2/this.rho*(this.pStag-this.p)*1e3)).toFixed(this.$store.state.decimal):""}},methods:{clear(){this.pStag="",this.p="",this.rho="",this.v=""}}});l("5729");g.render=p,g.__scopeId="data-v-3f53bd1c";t["default"]=g}}]);
//# sourceMappingURL=chunk-13383b6a.3efc5dd3.js.map