(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-user-info-get-user-info"],{2059:function(e,t,n){"use strict";n.r(t);var r=n("d908"),i=n("6ce6");for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("3624");var s,a=n("f0c5"),u=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"f9c525ac",null,!1,r["a"],s);t["default"]=u.exports},3624:function(e,t,n){"use strict";var r=n("4700"),i=n.n(r);i.a},"374f":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".userinfo-avatar[data-v-f9c525ac]{border-radius:%?128?%;width:%?128?%;height:%?128?%}",""]),e.exports=t},4700:function(e,t,n){var r=n("374f");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var i=n("4f06").default;i("3e29e634",r,!0,{sourceMap:!1,shadowMode:!1})},"6ce6":function(e,t,n){"use strict";n.r(t);var r=n("aff4"),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},aff4:function(e,t,n){"use strict";var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("8e6e"),n("ac6a"),n("456d");var i=r(n("bd86")),o=n("2f62");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={data:function(){return{title:"getUserInfo",hasUserInfo:!1,userInfo:{}}},computed:a({},(0,o.mapState)({loginProvider:function(e){return e.loginProvider}})),methods:{getUserInfo:function(){var e=this;uni.getUserInfo({provider:this.loginProvider,success:function(t){console.log("getUserInfo success",t),e.hasUserInfo=!0,e.userInfo=t.userInfo},fail:function(e){console.log("getUserInfo fail",e);var t=e.errMsg;~t.indexOf("uni.login")&&(t="请在登录页面完成登录操作"),uni.getSetting({success:function(e){var n=e.authSetting["scope.userInfo"];n?uni.showModal({title:"获取用户信息失败",content:"错误原因"+t,showCancel:!1}):uni.showModal({title:"授权失败",content:"Hello uni-app需要获取您的用户信息，请在设置界面打开相关权限",success:function(e){e.confirm&&uni.openSetting()}})}})}})},mpGetUserInfo:function(e){console.log("mpGetUserInfo",e),"getUserInfo:ok"===e.detail.errMsg?(this.hasUserInfo=!0,this.userInfo=e.detail.userInfo):uni.showModal({title:"获取用户信息失败",content:"错误原因"+e.detail.errMsg,showCancel:!1})},clear:function(){this.hasUserInfo=!1,this.userInfo={}}}};t.default=u},d908:function(e,t,n){"use strict";var r,i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticStyle:{background:"#FFF",padding:"40upx"}},[!1===e.hasUserInfo?[n("v-uni-view",{staticClass:"uni-hello-text uni-center"},[n("v-uni-text",[e._v("请点击下方按钮获取用户头像及昵称")])],1)]:e._e(),!0===e.hasUserInfo?[n("v-uni-view",{staticClass:"uni-h4 uni-center uni-common-mt"},[e._v(e._s(e.userInfo.nickName||e.userInfo.email))]),n("v-uni-view",{staticStyle:{padding:"30upx 0","text-align":"center"}},[n("v-uni-image",{staticClass:"userinfo-avatar",attrs:{src:e.userInfo.avatarUrl}})],1)]:e._e()],2),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.clear.apply(void 0,arguments)}}},[e._v("清空")])],1)],1)],1)},o=[];n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}))}}]);