(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-search-input-nav-search-input"],{"079c":function(i,n,e){"use strict";e.r(n);var t=e("94d4"),u=e.n(t);for(var a in t)"default"!==a&&function(i){e.d(n,i,(function(){return t[i]}))}(a);n["default"]=u.a},"3bcd":function(i,n,e){var t=e("24fb");n=t(!1),n.push([i.i,".img-view[data-v-529ece2e],uni-image[data-v-529ece2e],uni-swiper[data-v-529ece2e]{width:%?750?%;height:%?500?%}.page-section-title[data-v-529ece2e]{margin-top:%?50?%}",""]),i.exports=n},"5e49":function(i,n,e){"use strict";var t,u=function(){var i=this,n=i.$createElement,e=i._self._c||n;return e("v-uni-view",{staticClass:"page"},[e("v-uni-swiper",{attrs:{"indicator-dots":"true"}},i._l(i.imgUrls,(function(i,n){return e("v-uni-swiper-item",{key:n},[e("v-uni-image",{attrs:{src:i}})],1)})),1),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-title"},[e("v-uni-view",[i._v("本示例为导航栏带搜索框完整功能演示，主要演示有：")]),e("v-uni-view",[i._v("1. 导航栏为 transparent 模式，向上滑动页面，导航栏会从透明变为实色。")]),e("v-uni-view",[i._v("2. 点击搜索框跳转到搜索页面。")]),e("v-uni-view",[i._v("3. 点击导航栏右侧按钮实现关联操作。")]),e("v-uni-view",[i._v("4. 搜索页面为提示词搜索，输入内容实时显示关联词。")]),e("v-uni-view",[i._v("5. 搜索结果根据搜索内容高亮显示文字。")]),e("v-uni-view",[i._v("6. 点击搜索列表或者软键盘搜索按钮，会将结果保存到搜索历史列表。")]),e("v-uni-view",[i._v("7. 点击删除图标，清空历史搜索列表。")]),e("v-uni-view",[i._v("Tips")]),e("v-uni-view",[i._v("1. 本示例目前仅支持 App 端")]),e("v-uni-view",[i._v("2. 所有示例均为演示使用，具体逻辑需要自己实现。")])],1)],1),e("v-uni-view",{staticStyle:{height:"1000upx"}})],1)},a=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return t}))},7848:function(i,n,e){var t=e("3bcd");"string"===typeof t&&(t=[[i.i,t,""]]),t.locals&&(i.exports=t.locals);var u=e("4f06").default;u("01433e70",t,!0,{sourceMap:!1,shadowMode:!1})},"94d4":function(i,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{showSwiper:!1,imgUrls:["https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg","https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"]}},onNavigationBarSearchInputClicked:function(i){console.log("事件执行了"),uni.navigateTo({url:"/pages/template/nav-search-input/detail/detail"})},onNavigationBarButtonTap:function(){uni.showModal({title:"提示",content:"用户点击了功能按钮，这里仅做展示。",success:function(i){i.confirm&&console.log("用户点击了确定")}})}};n.default=t},e479:function(i,n,e){"use strict";e.r(n);var t=e("5e49"),u=e("079c");for(var a in u)"default"!==a&&function(i){e.d(n,i,(function(){return u[i]}))}(a);e("ff39");var c,v=e("f0c5"),r=Object(v["a"])(u["default"],t["b"],t["c"],!1,null,"529ece2e",null,!1,t["a"],c);n["default"]=r.exports},ff39:function(i,n,e){"use strict";var t=e("7848"),u=e.n(t);u.a}}]);