(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-web-view-web-view"],{"170d":function(n,t,e){"use strict";e.r(t);var u=e("90f5"),i=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,(function(){return u[n]}))}(r);t["default"]=i.a},8459:function(n,t,e){"use strict";var u,i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("v-uni-web-view",{attrs:{src:n.url},on:{message:function(t){arguments[0]=t=n.$handleEvent(t),n.getMessage.apply(void 0,arguments)}}})],1)},r=[];e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return u}))},"90f5":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{url:"https://uniapp.dcloud.io/static/web-view.html"}},onLoad:function(n){n&&n.url&&(this.url=n.url)},methods:{getMessage:function(n){uni.showModal({content:JSON.stringify(n.detail),showCancel:!1})}}};t.default=u},a094:function(n,t,e){"use strict";e.r(t);var u=e("8459"),i=e("170d");for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);var a,o=e("f0c5"),c=Object(o["a"])(i["default"],u["b"],u["c"],!1,null,"164d4268",null,!1,u["a"],a);t["default"]=c.exports}}]);