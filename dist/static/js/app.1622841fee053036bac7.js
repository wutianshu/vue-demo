webpackJsonp([1],{"+BTi":function(e,t){},0:function(e,t){},"8ozr":function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("7+uW"),a=r("zL8q"),l=r.n(a),n=(r("tvR6"),r("Zcwg")),s=r.n(n),i=(r("+BTi"),{name:"navTool",data:function(){return{activeIndex:"1",activeIndex2:"1"}},methods:{handleSelect:function(e,t){console.log(e,t)}}}),d={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":e.activeIndex2,mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{select:e.handleSelect}},[r("el-menu-item",{attrs:{index:"1"}},[r("router-link",{attrs:{to:"/order"}},[r("div",[e._v("我的订单")])])],1),e._v(" "),r("el-submenu",{attrs:{index:"2"}},[r("template",{slot:"title"},[e._v("我的工作台")]),e._v(" "),r("el-menu-item",{attrs:{index:"2-1"}},[r("router-link",{attrs:{to:"/order"}},[r("div",[e._v("选项1")])])],1),e._v(" "),r("el-menu-item",{attrs:{index:"2-2"}},[r("router-link",{attrs:{to:"/order"}},[r("div",[e._v("选项2")])])],1),e._v(" "),r("el-menu-item",{attrs:{index:"2-3"}},[r("div",[e._v("选项3")])]),e._v(" "),r("el-submenu",{attrs:{index:"2-4"}},[r("template",{slot:"title"},[e._v("选项4")]),e._v(" "),r("el-menu-item",{attrs:{index:"2-4-1"}},[e._v("选项1")]),e._v(" "),r("el-menu-item",{attrs:{index:"2-4-2"}},[e._v("选项2")]),e._v(" "),r("el-menu-item",{attrs:{index:"2-4-3"}},[e._v("选项3")])],2)],2),e._v(" "),r("el-menu-item",{attrs:{index:"3",disabled:""}},[e._v("消息中心")]),e._v(" "),r("el-menu-item",{attrs:{index:"4"}},[r("a",{attrs:{href:"https://element.eleme.cn",target:"_blank"}},[e._v("element-ui")])])],1)],1)},staticRenderFns:[]},c=r("VU/8")(i,d,!1,null,null,null).exports,u={name:"CreateOrder",props:["categories","workingModes"],data:function(){return{orderCreateform:this.initForm(),rules:{phone:[{required:!0,message:"请输入电话号码！",trigger:"blur"},{min:11,max:11,message:"请输入11位手机号码！",trigger:"blur"}]},loadingFlag:!1,results:this.initResults(),provices:[],errorMsg:"",errorFlag:!1}},mounted:function(){this.getProvices()},methods:{loadingHandle:function(){this.loadingFlag=!this.loadingFlag},initForm:function(){return{phone:"15377319326",env:"betaa",orderId:"1000000001",provice:"",category:"",workingMode:""}},getProvices:function(){var e=this;this.$http.get("/common/province/all").then(function(t){e.provices=t.body.data,console.log(t)},function(e){console.log(e)})},initResults:function(){return{result1:"",result2:""}},initError:function(){this.errorMsg="",this.errorFlag=!1},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.initError(),t.loadingHandle(),t.$http.post("/api/tools/smscode",{phoneno:t.orderCreateform.phone,env:t.orderCreateform.env,provice:t.orderCreateform.provice,category:t.orderCreateform.category,workingMode:t.orderCreateform.workingMode,orderId:t.orderCreateform.orderId},{emulateJSON:!0}).then(function(e){!1===e.body.cstest_status?(t.errorMsg=e.body.cstest_message,t.loadingHandle(),t.errorFlag=!0,console.log(e.body.cstest_message)):(t.results.result1=e.body.cstest_data[0].msgCode,t.loadingHandle(),console.log(e))},function(e){console.log(e),this.loadingHandle()})})},resetForm:function(e){this.$refs[e].resetFields()}}},m={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingFlag,expression:"loadingFlag"}],staticClass:"box-card",staticStyle:{width:"100%"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("创建订单")]),e._v(" "),r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[e._v("操作按钮")])],1),e._v(" "),r("el-form",{ref:"orderCreateform",staticClass:"demo-ruleForm",attrs:{model:e.orderCreateform,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"手机",prop:"phone"}},[r("el-input",{model:{value:e.orderCreateform.phone,callback:function(t){e.$set(e.orderCreateform,"phone",t)},expression:"orderCreateform.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"环境",prop:"env"}},[r("el-select",{attrs:{placeholder:"请选择环境"},model:{value:e.orderCreateform.env,callback:function(t){e.$set(e.orderCreateform,"env",t)},expression:"orderCreateform.env"}},[r("el-option",{attrs:{label:"stable",value:"stable"}}),e._v(" "),r("el-option",{attrs:{label:"betaa",value:"betaa"}}),e._v(" "),r("el-option",{attrs:{label:"betab",value:"betab"}}),e._v(" "),r("el-option",{attrs:{label:"betac",value:"betac"}}),e._v(" "),r("el-option",{attrs:{label:"offline",value:"offline"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"省份",prop:"provice"}},[r("el-select",{attrs:{placeholder:"请选择省份"},model:{value:e.orderCreateform.provice,callback:function(t){e.$set(e.orderCreateform,"provice",t)},expression:"orderCreateform.provice"}},e._l(e.provices,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"品类",prop:"category"}},[r("el-select",{attrs:{placeholder:"请选择品类"},model:{value:e.orderCreateform.category,callback:function(t){e.$set(e.orderCreateform,"category",t)},expression:"orderCreateform.category"}},e._l(e.categories,function(e){return r("el-option",{key:e.value,attrs:{label:e.text,value:e.value}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"工作模式",prop:"workingMode"}},[r("el-radio-group",{model:{value:e.orderCreateform.workingMode,callback:function(t){e.$set(e.orderCreateform,"workingMode",t)},expression:"orderCreateform.workingMode"}},e._l(e.workingModes,function(t){return r("el-radio",{key:t.value,attrs:{label:t.value}},[e._v("\n              "+e._s(t.text)+"\n            ")])}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"订单号",prop:"orderId"}},[r("el-input",{model:{value:e.orderCreateform.orderId,callback:function(t){e.$set(e.orderCreateform,"orderId",t)},expression:"orderCreateform.orderId"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("orderCreateform")}}},[e._v("立即创建")]),e._v(" "),r("el-button",{on:{click:function(t){return e.resetForm("orderCreateform")}}},[e._v("重置")])],1)],1),e._v(" "),r("p",[r("i",{directives:[{name:"show",rawName:"v-show",value:e.errorFlag,expression:"errorFlag"}],staticClass:"el-icon-warning",staticStyle:{color:"#F56C6C"}}),e._v(" "),r("small",{directives:[{name:"show",rawName:"v-show",value:e.errorFlag,expression:"errorFlag"}],staticStyle:{color:"#F56C6C"}},[e._v(e._s(e.errorMsg))])]),e._v(" "),r("el-card",{staticClass:"box-card"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-input",{attrs:{placeholder:"",disabled:!0},model:{value:e.results.result1,callback:function(t){e.$set(e.results,"result1",t)},expression:"results.result1"}},[r("template",{slot:"prepend"},[e._v("返回结果1")])],2)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-input",{attrs:{placeholder:"",disabled:!0},model:{value:e.results.result2,callback:function(t){e.$set(e.results,"result2",t)},expression:"results.result2"}},[r("template",{slot:"prepend"},[e._v("返回结果2")])],2)],1)],1)],1)],1)],1)},staticRenderFns:[]};var f={name:"QueryOrder",data:function(){return{orderCreateform:this.initForm(),rules:{phone:[{required:!0,message:"请输入电话号码！",trigger:"blur"},{min:11,max:11,message:"请输入11位手机号码！",trigger:"blur"}]},loadingFlag:!1,results:this.initResults()}},mounted:function(){this.getMsg()},methods:{getMsg:function(){var e=this;this.$http.get("/client/test").then(function(t){e.orderCreateform.msg=t.body.message,console.log(t)},function(e){console.log(e)})},loadingHandle:function(){this.loadingFlag=!this.loadingFlag},initForm:function(){return{phone:"15377319326",env:"betaa",orderId:"1000000001",msg:""}},initResults:function(){return{result1:"",result2:""}},submit:function(){var e=this;this.loadingHandle(),this.$http.get("/api/tools/smscode",{params:{phoneno:this.form.input1,env:"offline"}}).then(function(t){e.form.result=t.body.cstest_data[0].msgCode,e.loadingHandle(),console.log(t)},function(e){console.log(e),this.loadingHandle()})},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;t.loadingHandle(),t.$http.get("/api/tools/smscode",{params:{phoneno:t.orderCreateform.phone,env:"offline",msg:t.orderCreateform.msg}}).then(function(e){t.results.result1=e.body.cstest_data[0].msgCode,t.loadingHandle(),console.log(e)},function(e){console.log(e),this.loadingHandle()})})},resetForm:function(e){this.$refs[e].resetFields()}}},v={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-card",{directives:[{name:"loading",rawName:"v-loading",value:e.loadingFlag,expression:"loadingFlag"}],staticClass:"box-card",staticStyle:{width:"100%"}},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("查询订单")]),e._v(" "),r("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"}},[e._v("操作按钮")])],1),e._v(" "),r("div",{staticStyle:{margin:"20px"}}),e._v(" "),r("el-form",{ref:"orderCreateform",staticClass:"demo-ruleForm",attrs:{model:e.orderCreateform,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"手机",prop:"phone"}},[r("el-input",{model:{value:e.orderCreateform.phone,callback:function(t){e.$set(e.orderCreateform,"phone",t)},expression:"orderCreateform.phone"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"环境",prop:"env"}},[r("el-select",{attrs:{placeholder:"请选择环境"},model:{value:e.orderCreateform.env,callback:function(t){e.$set(e.orderCreateform,"env",t)},expression:"orderCreateform.env"}},[r("el-option",{attrs:{label:"stable",value:"stable"}}),e._v(" "),r("el-option",{attrs:{label:"betaa",value:"betaa"}}),e._v(" "),r("el-option",{attrs:{label:"betab",value:"betab"}}),e._v(" "),r("el-option",{attrs:{label:"betac",value:"betac"}}),e._v(" "),r("el-option",{attrs:{label:"betad",value:"betad"}})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"订单号",prop:"orderId"}},[r("el-input",{model:{value:e.orderCreateform.orderId,callback:function(t){e.$set(e.orderCreateform,"orderId",t)},expression:"orderCreateform.orderId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"从服务端返回数据",prop:"msg"}},[r("el-input",{model:{value:e.orderCreateform.msg,callback:function(t){e.$set(e.orderCreateform,"msg",t)},expression:"orderCreateform.msg"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("orderCreateform")}}},[e._v("立即创建")]),e._v(" "),r("el-button",{on:{click:function(t){return e.resetForm("orderCreateform")}}},[e._v("重置")])],1)],1),e._v(" "),r("el-card",{staticClass:"box-card"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-input",{attrs:{placeholder:"",disabled:!0},model:{value:e.results.result1,callback:function(t){e.$set(e.results,"result1",t)},expression:"results.result1"}},[r("template",{slot:"prepend"},[e._v("返回结果1")])],2)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-input",{attrs:{placeholder:"",disabled:!0},model:{value:e.results.result2,callback:function(t){e.$set(e.results,"result2",t)},expression:"results.result2"}},[r("template",{slot:"prepend"},[e._v("返回结果2")])],2)],1)],1)],1)],1)],1)},staticRenderFns:[]};var p={name:"order",components:{CreateOrder:r("VU/8")(u,m,!1,function(e){r("uWlx")},"data-v-0de88ac7",null).exports,QueryOrder:r("VU/8")(f,v,!1,function(e){r("enJN")},"data-v-6da32f51",null).exports},data:function(){return{categories:[],workingModes:[]}},mounted:function(){this.getDict()},methods:{getDict:function(){var e=this;this.$http.get("/common/dict/config").then(function(t){0===t.body.data.status?console.log(t.body.data.message):(console.log(t.body.data.crm.category.option),console.log(t.body.data.crm.workingMode.option),e.categories=t.body.data.crm.category.option,e.workingModes=t.body.data.crm.workingMode.option)},function(e){console.log(e)})}}},g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:18,offset:3}},[t("CreateOrder",{attrs:{categories:this.categories,workingModes:this.workingModes}})],1),this._v(" "),t("el-col",{attrs:{span:18,offset:3}},[t("QueryOrder")],1)],1)],1)},staticRenderFns:[]};var b=r("VU/8")(p,g,!1,function(e){r("8ozr")},"data-v-09ebb4b4",null).exports,h={name:"App",data:function(){return{}},components:{NavTool:c,Order:b}},_={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("el-container",[t("el-header",[t("NavTool")],1),this._v(" "),t("el-main",[t("router-view")],1),this._v(" "),t("el-footer",[t("small",[this._v("测试数据%测试数据")])])],1)],1)},staticRenderFns:[]};var C=r("VU/8")(h,_,!1,function(e){r("OnCl")},"data-v-0f16cad5",null).exports,x=r("/ocq");o.default.use(x.a);var y=new x.a({mode:"hash",routes:[{path:"/order",name:"order",component:b},{path:"",redirect:"/order"}]}),k=r("8+8L");o.default.component(s.a.name,s.a),o.default.config.productionTip=!1,o.default.use(k.a),o.default.use(l.a),new o.default({el:"#app",router:y,components:{App:C},template:"<App/>"})},OnCl:function(e,t){},enJN:function(e,t){},tvR6:function(e,t){},uWlx:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.1622841fee053036bac7.js.map