"use strict";(globalThis["webpackChunkmonbarar"]=globalThis["webpackChunkmonbarar"]||[]).push([[997],{5997:(e,l,o)=>{o.r(l),o.d(l,{default:()=>ve});var a=o(9835),s=(o(9665),o(6970)),t=o(499),n=o(1957),u=o(8339),i=o(9302),m=o(628),d=o(7097);o(6330);const c={class:"row justify-center q-mt-none"},r={class:"col-8 column"},p={class:"q-mt-xl text-bold"},b=(0,a._)("div",{class:"q-my-lg text-h5 text-bold"},"Company Information",-1),y={key:0,class:"q-py-lg"},U={class:"col q-mt-lg column"},v=(0,a._)("label",{class:"q-mb-sm",for:"certificate"}," Company Name ",-1),S={class:"col q-mt-lg column"},_=(0,a._)("label",{class:"q-mb-sm",for:"certificate"}," You Role ",-1),g={class:"col q-mt-md column"},q=(0,a._)("label",{class:"q-mb-sm",for:"Identity"}," Company Logo ",-1),V={class:"q-px-lg file_container",style:{border:"1px dashed lightskyblue","border-radius":"10px"}},x={class:"col column q-mt-md"},h=(0,a._)("label",{class:"q-mb-sm",for:"website"}," Company Website ",-1),f={class:"col column"},k=(0,a._)("label",{class:"q-mb-sm",for:"location"}," Company Location ",-1),w={key:1,class:""},W={class:"col q-mt-xl column"},E=(0,a._)("label",{class:"",for:"jobCat"}," Job Categories ",-1),H={class:"col q-mt-xl column"},C=(0,a._)("label",{class:"",for:"numEmpoye"}," Number Of Employee ",-1),j={key:2,class:"column justify-between"},F={class:"col q-mt-xl column"},R=(0,a._)("label",{class:"",for:"jobTitle"}," Job Tittle ",-1),Q={class:"col q-mt-xl column"},Z={class:"col q-mt-xl column"},J=(0,a._)("label",{class:"",for:"jobTitle"}," Job Position ",-1),L={key:3,class:"column justify-between"},T=(0,a._)("label",{class:"",for:"salary"}," Salary per month ",-1),D={class:"col row"},I={class:"col"},N={class:"col q-mx-md"},P=(0,a._)("span",{class:"text-body1"},"Minimum",-1),M={class:"col"},z=(0,a._)("span",{class:"text-body1"},"Maximum",-1),A={class:"col q-mt-xl column"},B=(0,a._)("label",{class:"",for:"wrokEperience"}," Work Experience ",-1),O={class:"col q-mt-xl column"},Y=(0,a._)("label",{class:"",for:"wrokEperience"}," Job Skill Requirement ",-1),G={class:"q-mt-sm"},K={__name:"FormAddJob",setup(e){(0,i.Z)();const l=(0,u.tv)();let o=(0,t.iH)(0),K=((0,t.iH)(""),(0,t.iH)({}));(0,t.iH)(!0);K.value.accept=!1;(0,t.iH)(!1),(0,t.iH)(!1),(0,t.iH)(null),(0,t.iH)(!1);(0,t.iH)();const X=(0,t.iH)(null),$=((0,t.iH)(m.iV),(0,t.iH)(m.Mu),(0,t.iH)(m.sw),(0,t.iH)(d.vi),(0,t.iH)(d.U8),(0,t.iH)(d.gQ),(0,t.iH)(d.iL),e=>{o.value<=3&&(o.value+=1),o.value>3&&l.push("/home"),console.log("step.value",o.value)}),ee=()=>{o.value>0&&(o.value-=1),console.log("onReset")};return(e,l)=>{const u=(0,a.up)("q-linear-progress"),i=(0,a.up)("q-input"),m=(0,a.up)("q-icon"),d=(0,a.up)("q-file"),le=(0,a.up)("q-editor"),oe=(0,a.up)("q-select"),ae=(0,a.up)("q-btn"),se=(0,a.up)("q-form");return(0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",r,[(0,a._)("div",p,[(0,a.Uk)(" Step "+(0,s.zw)((0,t.SU)(o)+1)+" of 4 ",1),(0,a.Wm)(u,{value:((0,t.SU)(o)+1)/4,rounded:"",color:"primary","track-color":"primary",class:"",size:"10px"},null,8,["value"])]),(0,a.Wm)(se,{onSubmit:(0,n.iM)($,["prevent"]),onReset:ee,class:"q-gutter-md text-bold text-subtitle1",ref_key:"myForm",ref:X},{default:(0,a.w5)((()=>[b,0===(0,t.SU)(o)?((0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("div",U,[v,(0,a.Wm)(i,{outlined:"",modelValue:(0,t.SU)(K).companyName,"onUpdate:modelValue":l[0]||(l[0]=e=>(0,t.SU)(K).companyName=e),label:"Enter your company name"},null,8,["modelValue"])]),(0,a._)("div",S,[_,(0,a.Wm)(i,{outlined:"",modelValue:(0,t.SU)(K).yourRole,"onUpdate:modelValue":l[1]||(l[1]=e=>(0,t.SU)(K).yourRole=e),label:"Enter your company name"},null,8,["modelValue"])]),(0,a._)("div",g,[q,(0,a._)("div",V,[(0,a.Wm)(d,{modelValue:(0,t.SU)(K).companyLogo,"onUpdate:modelValue":l[2]||(l[2]=e=>(0,t.SU)(K).companyLogo=e),label:"Drop a file here or click to upload","use-chips":"",multiple:"",append:"",class:"myFile"},{append:(0,a.w5)((()=>[(0,a.Wm)(m,{name:"img:icons/Iconupload.png"})])),_:1},8,["modelValue"])])]),(0,a._)("div",x,[h,(0,a.Wm)(i,{outlined:"",modelValue:(0,t.SU)(K).companyWebsite,"onUpdate:modelValue":l[3]||(l[3]=e=>(0,t.SU)(K).companyWebsite=e),label:"Enter your website"},null,8,["modelValue"])]),(0,a._)("div",f,[k,(0,a.Wm)(i,{outlined:"",modelValue:(0,t.SU)(K).companyLocation,"onUpdate:modelValue":l[4]||(l[4]=e=>(0,t.SU)(K).companyLocation=e),label:"Enter your location"},null,8,["modelValue"])])])):(0,a.kq)("",!0),1===(0,t.SU)(o)?((0,a.wg)(),(0,a.iD)("div",w,[(0,a._)("div",W,[E,(0,a.Wm)(i,{outlined:"",modelValue:(0,t.SU)(K).jobCategories,"onUpdate:modelValue":l[5]||(l[5]=e=>(0,t.SU)(K).jobCategories=e),placeholder:"Job Categories",class:"",rules:[e=>e&&e.length>0||" Required Fields"]},null,8,["modelValue","rules"])]),(0,a._)("div",H,[C,(0,a.Wm)(i,{outlined:"",modelValue:(0,t.SU)(K).numEmploye,"onUpdate:modelValue":l[6]||(l[6]=e=>(0,t.SU)(K).numEmploye=e),placeholder:"Number Of Employee",type:"number",class:"",rules:[e=>e&&e.length>0||" Required Fields"]},null,8,["modelValue","rules"])])])):(0,a.kq)("",!0),2===(0,t.SU)(o)?((0,a.wg)(),(0,a.iD)("div",j,[(0,a._)("div",F,[R,(0,a.Wm)(i,{outlined:"",modelValue:(0,t.SU)(K).jobTitle,"onUpdate:modelValue":l[7]||(l[7]=e=>(0,t.SU)(K).jobTitle=e),placeholder:"Job Tittle",class:"",rules:[e=>e&&e.length>0||" Required Fields"]},null,8,["modelValue","rules"])]),(0,a._)("div",Q,[(0,a.Wm)(le,{modelValue:(0,t.SU)(K).editor,"onUpdate:modelValue":l[8]||(l[8]=e=>(0,t.SU)(K).editor=e),definitions:{bold:{label:"Bold",icon:null,tip:"My bold tooltip"}}},null,8,["modelValue"])]),(0,a._)("div",Z,[J,(0,a.Wm)(i,{outlined:"",modelValue:(0,t.SU)(K).Position,"onUpdate:modelValue":l[9]||(l[9]=e=>(0,t.SU)(K).Position=e),placeholder:"Job Position",class:"",rules:[e=>e&&e.length>0||" Required Fields"]},null,8,["modelValue","rules"])])])):(0,a.kq)("",!0),3===(0,t.SU)(o)?((0,a.wg)(),(0,a.iD)("div",L,[T,(0,a._)("div",D,[(0,a._)("div",I,[(0,a.Wm)(oe,{outlined:"",modelValue:(0,t.SU)(K).currency,"onUpdate:modelValue":l[10]||(l[10]=e=>(0,t.SU)(K).currency=e),options:e.optionsCurrency,label:"Select Currency",class:"text-bold"},null,8,["modelValue","options"])]),(0,a._)("div",N,[(0,a.Wm)(i,{outlined:"",modelValue:e.number,"onUpdate:modelValue":l[11]||(l[11]=l=>e.number=l),type:"number"},{append:(0,a.w5)((()=>[P])),_:1},8,["modelValue"])]),(0,a._)("div",M,[(0,a.Wm)(i,{outlined:"",modelValue:e.number,"onUpdate:modelValue":l[12]||(l[12]=l=>e.number=l),type:"number"},{append:(0,a.w5)((()=>[z])),_:1},8,["modelValue"])])]),(0,a._)("div",A,[B,(0,a.Wm)(i,{outlined:"",modelValue:(0,t.SU)(K).workExperience,"onUpdate:modelValue":l[13]||(l[13]=e=>(0,t.SU)(K).workExperience=e),placeholder:"Enter your answer",class:"",rules:[e=>e&&e.length>0||" Required Fields"]},null,8,["modelValue","rules"])]),(0,a._)("div",O,[Y,(0,a.Wm)(i,{outlined:"",modelValue:(0,t.SU)(K).jobSkillExperience,"onUpdate:modelValue":l[14]||(l[14]=e=>(0,t.SU)(K).jobSkillExperience=e),placeholder:"Enter your answer",class:"",rules:[e=>e&&e.length>0||" Required Fields"]},null,8,["modelValue","rules"])])])):(0,a.kq)("",!0),(0,a._)("div",G,[(0,t.SU)(o)>0?((0,a.wg)(),(0,a.j4)(ae,{key:0,label:"Previous Step",type:"reset",color:"blue-grey-1","text-color":"black",unelevated:"",class:"text-bold text-subtitle1 q-mr-xl",padding:"12px 45px"})):(0,a.kq)("",!0),(0,a.Wm)(ae,{label:3===(0,t.SU)(o)?"Finish":"Next Step","no-caps":"",padding:"12px 45px",type:"submit",unelevated:"",disable:!(0,t.SU)(K),color:""!==(0,t.SU)(K)?"primary":"blue-grey-2",class:(0,s.C_)(""!==(0,t.SU)(K)?"text-bold text-subtitle1":" text-black ")},null,8,["label","disable","color","class"])])])),_:1},8,["onSubmit"])])])}}};var X=o(8289),$=o(8326),ee=o(3119),le=o(3837),oe=o(2857),ae=o(2400),se=o(2259),te=o(8879),ne=o(8149),ue=o(9984),ie=o.n(ue);const me=K,de=me;ie()(K,"components",{QLinearProgress:X.Z,QForm:$.Z,QInput:ee.Z,QFile:le.Z,QIcon:oe.Z,QEditor:ae.Z,QSelect:se.Z,QBtn:te.Z,QField:ne.Z});const ce={class:"row",style:{height:"100vh"}},re={class:"col-4"},pe={class:"col"},be={__name:"indexAddJob",setup(e){return(e,l)=>{const o=(0,a.up)("q-img");return(0,a.wg)(),(0,a.iD)("div",ce,[(0,a._)("div",re,[(0,a.Wm)(o,{src:"img/vecteur-1.svg",ratio:"1",width:"100%",height:"100%",position:"40% 100%"})]),(0,a._)("div",pe,[(0,a.Wm)(de)])])}}};var ye=o(335);const Ue=be,ve=Ue;ie()(be,"components",{QImg:ye.Z})}}]);