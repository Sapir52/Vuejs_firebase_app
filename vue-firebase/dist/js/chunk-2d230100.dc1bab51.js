(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d230100"],{eb4a:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vue-tempalte"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.forgetPassword.apply(null,arguments)}}},[t("h3",[e._v("Forgot Password")]),t("div",{staticClass:"form-group"},[t("label",[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control form-control-lg",attrs:{type:"email"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}})]),t("button",{staticClass:"btn btn-dark btn-lg btn-block",attrs:{type:"submit"}},[e._v("Reset password")])])])},r=[],l=s("2591"),o={data(){return{user:{email:""}}},methods:{forgetPassword(){l["a"].auth().sendPasswordResetEmail(this.user.email).then(()=>{alert("Check your registered email to reset the password!"),this.user={email:""}}).catch(e=>{alert(e)})}}},n=o,i=s("2877"),u=Object(i["a"])(n,a,r,!1,null,null,null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d230100.dc1bab51.js.map