(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8e41"],{"578a":function(s,t,e){"use strict";e.r(t);var r=function(){var s=this,t=s._self._c;return t("div",{staticClass:"vue-tempalte"},[t("form",{on:{submit:function(t){return t.preventDefault(),s.userLogin.apply(null,arguments)}}},[t("h3",[s._v("Sign In")]),t("div",{staticClass:"form-group"},[t("label",[s._v("Email address")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"email"},domProps:{value:s.user.email},on:{input:function(t){t.target.composing||s.$set(s.user,"email",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",[s._v("Password")]),t("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password,expression:"user.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password"},domProps:{value:s.user.password},on:{input:function(t){t.target.composing||s.$set(s.user,"password",t.target.value)}}})]),t("button",{staticClass:"btn btn-dark btn-lg btn-block",attrs:{type:"submit"}},[s._v("Sign In")]),t("p",{staticClass:"forgot-password text-right mt-2 mb-4"},[t("router-link",{attrs:{to:"/forgot-password"}},[s._v("Forgot password ?")])],1)])])},a=[],o=(e("14d9"),e("2591")),n={data(){return{user:{email:"",password:""}}},methods:{userLogin(){o["a"].auth().signInWithEmailAndPassword(this.user.email,this.user.password).then(()=>{this.$router.push("/home")}).catch(s=>{alert(s.message)})}}},i=n,l=e("2877"),u=Object(l["a"])(i,r,a,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0c8e41.eeb7bf7e.js.map