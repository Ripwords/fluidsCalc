(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a965633"],{"6e09":function(t,e,s){"use strict";s("707e")},"707e":function(t,e,s){},a6e5:function(t,e,s){"use strict";s.r(e);var h=s("7a23");Object(h["v"])("data-v-a1054970");const l={id:"container"},i=Object(h["h"])("img",{class:"invert",src:"/img/energyHeadEqn.png",style:{"padding-left":"2%","padding-right":"2%"}},null,-1),a=Object(h["h"])("br",null,null,-1),o=Object(h["h"])("br",null,null,-1),u=Object(h["i"])("α   : "),r=Object(h["i"])("ḣ"),p=Object(h["h"])("sub",null,"p",-1),b=Object(h["i"])(" : "),n=Object(h["i"])("P"),c=Object(h["h"])("sub",null,"1",-1),j=Object(h["i"])(" : "),O=Object(h["i"])("P"),d=Object(h["h"])("sub",null,"2",-1),m=Object(h["i"])(" : "),v=Object(h["i"])("ρ"),z=Object(h["h"])("sub",null,"1",-1),y=Object(h["i"])(" : "),F=Object(h["i"])("ρ"),w=Object(h["h"])("sub",null,"2",-1),V=Object(h["i"])(" : "),E=Object(h["i"])("V"),S=Object(h["h"])("sub",null,"1",-1),k=Object(h["i"])(" : "),f=Object(h["i"])("V"),_=Object(h["h"])("sub",null,"2",-1),g=Object(h["i"])(" : "),x=Object(h["i"])("z"),U=Object(h["h"])("sub",null,"1",-1),$=Object(h["i"])(" : "),I=Object(h["i"])("z"),H=Object(h["h"])("sub",null,"2",-1),P=Object(h["i"])(" : "),q=Object(h["i"])("ḣ"),C=Object(h["h"])("sub",null,"t",-1),L=Object(h["i"])(" : "),D=Object(h["i"])("ḣ"),J=Object(h["h"])("sub",null,"L",-1),M=Object(h["i"])(" : "),B=Object(h["h"])("br",null,null,-1),R=Object(h["i"])("Clear");function T(t,e,s,T,A,G){const K=Object(h["z"])("Header"),N=Object(h["z"])("Exit"),Q=Object(h["z"])("ion-label"),W=Object(h["z"])("ion-input"),X=Object(h["z"])("ion-item"),Y=Object(h["z"])("ion-list"),Z=Object(h["z"])("ion-button"),tt=Object(h["z"])("ion-content"),et=Object(h["z"])("Help"),st=Object(h["z"])("ion-page");return Object(h["s"])(),Object(h["e"])(st,null,{default:Object(h["E"])(()=>[Object(h["j"])(K,{title:"Energy Head Equation",clear:t.clear},null,8,["clear"]),Object(h["j"])(tt,{fullscreen:!0},{default:Object(h["E"])(()=>[Object(h["j"])(N),Object(h["h"])("div",l,[i,a,o,Object(h["j"])(Y,null,{default:Object(h["E"])(()=>[Object(h["j"])(X,null,{default:Object(h["E"])(()=>[Object(h["j"])(Q,null,{default:Object(h["E"])(()=>[u]),_:1}),t.alphaShow?(Object(h["s"])(),Object(h["e"])(W,{key:1,type:"number",value:t.alphaShow,readonly:""},null,8,["value"])):(Object(h["s"])(),Object(h["e"])(W,{key:0,modelValue:t.alpha,"onUpdate:modelValue":e[0]||(e[0]=e=>t.alpha=e),type:"number",placeholder:"Enter Correction Factor"},null,8,["modelValue"])),Object(h["j"])(Q,null,{default:Object(h["E"])(()=>[r,p,b]),_:1}),t.pumpShow?(Object(h["s"])(),Object(h["e"])(W,{key:3,type:"number",value:t.pumpShow,readonly:""},null,8,["value"])):(Object(h["s"])(),Object(h["e"])(W,{key:2,modelValue:t.pump,"onUpdate:modelValue":e[1]||(e[1]=e=>t.pump=e),type:"number",placeholder:"Enter Pump Head ( m )"},null,8,["modelValue"]))]),_:1}),Object(h["j"])(X,null,{default:Object(h["E"])(()=>[Object(h["j"])(Q,null,{default:Object(h["E"])(()=>[n,c,j]),_:1}),t.p1Show?(Object(h["s"])(),Object(h["e"])(W,{key:1,type:"number",value:t.p1Show,readonly:""},null,8,["value"])):(Object(h["s"])(),Object(h["e"])(W,{key:0,modelValue:t.p1,"onUpdate:modelValue":e[2]||(e[2]=e=>t.p1=e),type:"number",placeholder:"Enter Pressure 1 ( kPa )"},null,8,["modelValue"])),Object(h["j"])(Q,null,{default:Object(h["E"])(()=>[O,d,m]),_:1}),t.p2Show?(Object(h["s"])(),Object(h["e"])(W,{key:3,type:"number",value:t.p2Show,readonly:""},null,8,["value"])):(Object(h["s"])(),Object(h["e"])(W,{key:2,modelValue:t.p2,"onUpdate:modelValue":e[3]||(e[3]=e=>t.p2=e),type:"number",placeholder:"Enter Pressure 2 ( kPa )"},null,8,["modelValue"]))]),_:1}),Object(h["j"])(X,null,{default:Object(h["E"])(()=>[Object(h["j"])(Q,null,{default:Object(h["E"])(()=>[v,z,y]),_:1}),t.rho1Show?(Object(h["s"])(),Object(h["e"])(W,{key:1,type:"number",value:t.rho1Show,readonly:""},null,8,["value"])):(Object(h["s"])(),Object(h["e"])(W,{key:0,modelValue:t.rho1,"onUpdate:modelValue":e[4]||(e[4]=e=>t.rho1=e),type:"number",placeholder:"Enter Density 1 ( kg/m^3 )"},null,8,["modelValue"])),Object(h["j"])(Q,null,{default:Object(h["E"])(()=>[F,w,V]),_:1}),t.rho2Show?(Object(h["s"])(),Object(h["e"])(W,{key:3,type:"number",value:t.rho2Show,readonly:""},null,8,["value"])):(Object(h["s"])(),Object(h["e"])(W,{key:2,modelValue:t.rho2,"onUpdate:modelValue":e[5]||(e[5]=e=>t.rho2=e),type:"number",placeholder:"Enter Density 2 ( kg/m^3 )"},null,8,["modelValue"]))]),_:1}),Object(h["j"])(X,null,{default:Object(h["E"])(()=>[Object(h["j"])(Q,null,{default:Object(h["E"])(()=>[E,S,k]),_:1}),t.v1Show?(Object(h["s"])(),Object(h["e"])(W,{key:1,type:"number",value:t.v1Show,readonly:""},null,8,["value"])):(Object(h["s"])(),Object(h["e"])(W,{key:0,modelValue:t.v1,"onUpdate:modelValue":e[6]||(e[6]=e=>t.v1=e),type:"number",placeholder:"Enter Velocity 1 ( m/s )"},null,8,["modelValue"])),Object(h["j"])(Q,null,{default:Object(h["E"])(()=>[f,_,g]),_:1}),t.v2Show?(Object(h["s"])(),Object(h["e"])(W,{key:3,type:"number",value:t.v2Show,readonly:""},null,8,["value"])):(Object(h["s"])(),Object(h["e"])(W,{key:2,modelValue:t.v2,"onUpdate:modelValue":e[7]||(e[7]=e=>t.v2=e),type:"number",placeholder:"Enter Velocity 2 ( m/s )"},null,8,["modelValue"]))]),_:1}),Object(h["j"])(X,null,{default:Object(h["E"])(()=>[Object(h["j"])(Q,null,{default:Object(h["E"])(()=>[x,U,$]),_:1}),t.z1Show?(Object(h["s"])(),Object(h["e"])(W,{key:1,type:"number",value:t.z1Show,readonly:""},null,8,["value"])):(Object(h["s"])(),Object(h["e"])(W,{key:0,modelValue:t.z1,"onUpdate:modelValue":e[8]||(e[8]=e=>t.z1=e),type:"number",placeholder:"Enter rel height 1 ( m )"},null,8,["modelValue"])),Object(h["j"])(Q,null,{default:Object(h["E"])(()=>[I,H,P]),_:1}),t.z2Show?(Object(h["s"])(),Object(h["e"])(W,{key:3,type:"number",value:t.z2Show,readonly:""},null,8,["value"])):(Object(h["s"])(),Object(h["e"])(W,{key:2,modelValue:t.z2,"onUpdate:modelValue":e[9]||(e[9]=e=>t.z2=e),type:"number",placeholder:"Enter rel height 2 ( m )"},null,8,["modelValue"]))]),_:1}),Object(h["j"])(X,null,{default:Object(h["E"])(()=>[Object(h["j"])(Q,null,{default:Object(h["E"])(()=>[q,C,L]),_:1}),t.turbineShow?(Object(h["s"])(),Object(h["e"])(W,{key:1,type:"number",value:t.turbineShow,readonly:""},null,8,["value"])):(Object(h["s"])(),Object(h["e"])(W,{key:0,modelValue:t.turbine,"onUpdate:modelValue":e[10]||(e[10]=e=>t.turbine=e),type:"number",placeholder:"Enter Turbine Head ( m )"},null,8,["modelValue"])),Object(h["j"])(Q,null,{default:Object(h["E"])(()=>[D,J,M]),_:1}),t.lossShow?(Object(h["s"])(),Object(h["e"])(W,{key:3,type:"number",value:t.lossShow,readonly:""},null,8,["value"])):(Object(h["s"])(),Object(h["e"])(W,{key:2,modelValue:t.loss,"onUpdate:modelValue":e[11]||(e[11]=e=>t.loss=e),type:"number",placeholder:"Enter head loss ( m )"},null,8,["modelValue"]))]),_:1})]),_:1}),B,Object(h["j"])(Z,{color:"dark",onClick:e[12]||(e[12]=e=>t.clear()),id:"clear"},{default:Object(h["E"])(()=>[R]),_:1})])]),_:1}),Object(h["j"])(et)]),_:1})}Object(h["t"])();var A=s("d867"),G=s("fbcc"),K=s("71c2"),N=s("070d"),Q=Object(h["k"])({components:{IonPage:A["r"],IonContent:A["g"],IonButton:A["b"],IonInput:A["m"],IonList:A["p"],IonItem:A["n"],IonLabel:A["o"],Help:G["a"],Header:K["a"],Exit:N["a"]},data(){return{alpha:"",p1:"",p2:"",rho1:"",rho2:"",v1:"",v2:"",z1:"",z2:"",pump:"",turbine:"",loss:""}},computed:{alphaShow(){return""!=this.p1&&""!=this.p2&&""!=this.rho1&&""!=this.rho2&&""!=this.v1&&""!=this.v2&&""!=this.z1&&""!=this.z2&&""!=this.pump&&""!=this.turbine&&""!=this.loss?parseFloat((1e3*this.p2/(9.81*this.rho2)-1e3*this.p1/(9.81*this.rho1)+parseFloat(this.z2)-this.z1+(parseFloat(this.turbine)+parseFloat(this.loss)-this.pump))/((this.v1**2-this.v2**2)/19.62)).toFixed(this.$store.state.decimal):""},p1Show(){return""!=this.alpha&&""!=this.p2&&""!=this.rho1&&""!=this.rho2&&""!=this.v1&&""!=this.v2&&""!=this.z1&&""!=this.z2&&""!=this.pump&&""!=this.turbine&&""!=this.loss?parseFloat(this.rho1/1e3*9.81*(1e3*this.p2/(9.81*this.rho2)+this.alpha/19.62*(this.v2**2-this.v1**2)+(this.z2-this.z1)+(parseFloat(this.turbine)+parseFloat(this.loss)-this.pump))).toFixed(this.$store.state.decimal):""},p2Show(){return""!=this.alpha&&""!=this.p1&&""!=this.rho1&&""!=this.rho2&&""!=this.v1&&""!=this.v2&&""!=this.z1&&""!=this.z2&&""!=this.pump&&""!=this.turbine&&""!=this.loss?parseFloat(this.rho2/1e3*9.81*(1e3*this.p1/(9.81*this.rho1)+this.alpha/19.62*(this.v1**2-this.v2**2)+(this.z1-this.z2)-(parseFloat(this.turbine)+parseFloat(this.loss)-this.pump))).toFixed(this.$store.state.decimal):""},rho1Show(){return""!=this.alpha&&""!=this.p1&&""!=this.p2&&""!=this.rho2&&""!=this.v1&&""!=this.v2&&""!=this.z1&&""!=this.z2&&""!=this.pump&&""!=this.turbine&&""!=this.loss?parseFloat(1e3*this.p1/(9.81*(1e3*this.p2/(9.81*this.rho2)+this.alpha/19.62*(this.v2**2-this.v1**2)+(this.z2-this.z1)+(parseFloat(this.turbine)+parseFloat(this.loss)-this.pump)))).toFixed(this.$store.state.decimal):""},rho2Show(){return""!=this.alpha&&""!=this.p1&&""!=this.p2&&""!=this.rho1&&""!=this.v1&&""!=this.v2&&""!=this.z1&&""!=this.z2&&""!=this.pump&&""!=this.turbine&&""!=this.loss?parseFloat(1e3*this.p2/(9.81*(1e3*this.p1/(9.81*this.rho1)+this.alpha/19.62*(this.v1**2-this.v2**2)+(this.z1-this.z2)-(parseFloat(this.turbine)+parseFloat(this.loss)-this.pump)))).toFixed(this.$store.state.decimal):""},v1Show(){return""!=this.alpha&&""!=this.p1&&""!=this.p2&&""!=this.rho2&&""!=this.rho1&&""!=this.v2&&""!=this.z1&&""!=this.z2&&""!=this.pump&&""!=this.turbine&&""!=this.loss?parseFloat(Math.sqrt((1e3*this.p2/(9.81*this.rho2)-1e3*this.p1/(9.81*this.rho1)+parseFloat(this.z2)-this.z1+(parseFloat(this.turbine)+parseFloat(this.loss)-this.pump))/(this.alpha/19.62)+this.v2**2)).toFixed(this.$store.state.decimal):""},v2Show(){return""!=this.alpha&&""!=this.p1&&""!=this.p2&&""!=this.rho2&&""!=this.rho1&&""!=this.v1&&""!=this.z1&&""!=this.z2&&""!=this.pump&&""!=this.turbine&&""!=this.loss?parseFloat(Math.sqrt(this.v1**2-(1e3*this.p2/(9.81*this.rho2)-1e3*this.p1/(9.81*this.rho1)+parseFloat(this.z2)-this.z1+(parseFloat(this.turbine)+parseFloat(this.loss)-this.pump))/(this.alpha/19.62))).toFixed(this.$store.state.decimal):""},z1Show(){return""!=this.alpha&&""!=this.p1&&""!=this.p2&&""!=this.rho2&&""!=this.rho1&&""!=this.v1&&""!=this.v2&&""!=this.z2&&""!=this.pump&&""!=this.turbine&&""!=this.loss?parseFloat(1e3*this.p2/(9.81*this.rho2)-1e3*this.p1/(9.81*this.rho1)+this.alpha/19.62*(this.v2**2-this.v1**2)+parseFloat(this.z2)+(parseFloat(this.turbine)+parseFloat(this.loss)-this.pump)).toFixed(this.$store.state.decimal):""},z2Show(){return""!=this.alpha&&""!=this.p1&&""!=this.p2&&""!=this.rho2&&""!=this.rho1&&""!=this.v1&&""!=this.v2&&""!=this.z1&&""!=this.pump&&""!=this.turbine&&""!=this.loss?parseFloat(this.z1-(1e3*this.p2/(9.81*this.rho2)-1e3*this.p1/(9.81*this.rho1)+this.alpha/19.62*(this.v2**2-this.v1**2)+(parseFloat(this.turbine)+parseFloat(this.loss)-this.pump))).toFixed(this.$store.state.decimal):""},pumpShow(){return""!=this.alpha&&""!=this.p1&&""!=this.p2&&""!=this.rho2&&""!=this.rho1&&""!=this.v1&&""!=this.v2&&""!=this.z1&&""!=this.z2&&""!=this.turbine&&""!=this.loss?parseFloat(1e3*this.p2/(9.81*this.rho2)-1e3*this.p1/(9.81*this.rho1)+this.alpha/19.62*(this.v2**2-this.v1**2)+parseFloat(this.z2)-this.z1+(parseFloat(this.turbine)+parseFloat(this.loss))).toFixed(this.$store.state.decimal):""},turbineShow(){return""!=this.alpha&&""!=this.p1&&""!=this.p2&&""!=this.rho2&&""!=this.rho1&&""!=this.v1&&""!=this.v2&&""!=this.z1&&""!=this.z2&&""!=this.pump&&""!=this.loss?parseFloat(this.p1/(.001*9.81*this.rho1)-this.p2/(.001*9.81*this.rho2)+this.alpha/19.62*(this.v1**2-this.v2**2)+(this.z1-this.z2)+(this.pump-this.loss)).toFixed(this.$store.state.decimal):""},lossShow(){return""!=this.alpha&&""!=this.p1&&""!=this.p2&&""!=this.rho2&&""!=this.rho1&&""!=this.v1&&""!=this.v2&&""!=this.z1&&""!=this.z2&&""!=this.pump&&""!=this.turbine?parseFloat(this.p1/(.001*9.81*this.rho1)-this.p2/(.001*9.81*this.rho2)+this.alpha/19.62*(this.v1**2-this.v2**2)+(this.z1-this.z2)+(this.pump-this.turbine)).toFixed(this.$store.state.decimal):""}},methods:{clear(){this.mFR="",this.alpha="",this.p1="",this.p2="",this.rho1="",this.rho2="",this.v1="",this.v2="",this.z1="",this.z2="",this.pump="",this.turbine="",this.loss=""}}});s("6e09");Q.render=T,Q.__scopeId="data-v-a1054970";e["default"]=Q}}]);
//# sourceMappingURL=chunk-7a965633.8aa1642e.js.map