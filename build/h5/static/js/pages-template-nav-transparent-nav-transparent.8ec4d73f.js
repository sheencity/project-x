(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-transparent-nav-transparent"],{3104:function(i,t,e){var n=e("24fb");t=n(!1),t.push([i.i,".img-view[data-v-108c951e],uni-image[data-v-108c951e],uni-swiper[data-v-108c951e]{width:%?750?%;height:%?500?%}.page-section-title[data-v-108c951e]{margin-top:%?50?%}",""]),i.exports=t},"45bc":function(i,t,e){"use strict";var n=e("5f5b"),a=e.n(n);a.a},4938:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{showSwiper:!1,imgUrls:["../../../static/shuijiao.jpg","https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg","https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"],items:[{value:"img",name:"静态图",checked:!0},{value:"swiper",name:"轮播图",checked:!1}]}},methods:{radioChange:function(i){this.showSwiper="swiper"===i.detail.value}}};t.default=n},"5e93":function(i,t,e){"use strict";e.r(t);var n=e("fd90"),a=e("8a95");for(var u in a)"default"!==u&&function(i){e.d(t,i,(function(){return a[i]}))}(u);e("45bc");var s,c=e("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"108c951e",null,!1,n["a"],s);t["default"]=r.exports},"5f5b":function(i,t,e){var n=e("3104");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=e("4f06").default;a("1fd7cef7",n,!0,{sourceMap:!1,shadowMode:!1})},"8a95":function(i,t,e){"use strict";e.r(t);var n=e("4938"),a=e.n(n);for(var u in n)"default"!==u&&function(i){e.d(t,i,(function(){return n[i]}))}(u);t["default"]=a.a},fd90:function(i,t,e){"use strict";var n,a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",{staticClass:"page"},[i.showSwiper?i._e():e("v-uni-view",{staticClass:"img-view"},[e("v-uni-image",{attrs:{src:i.imgUrls[0]}})],1),i.showSwiper?e("v-uni-swiper",{attrs:{"indicator-dots":"true"}},i._l(i.imgUrls,(function(i,t){return e("v-uni-swiper-item",{key:t},[e("v-uni-image",{attrs:{src:i}})],1)})),1):i._e(),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-title"},[e("v-uni-view",[i._v("在App端默认为标题栏透明，当用户向下滚动时，标题栏逐渐由透明转变为不透明；当用户再次向上滚动时，标题栏又从不透明变为透明状态。")]),e("v-uni-view",[i._v("在微信小程序端，导航栏始终为不透明样式。")])],1),e("v-uni-view",{staticClass:"uni-title uni-common-mt"},[i._v("图片类型")])],1),e("v-uni-view",{staticClass:"uni-list"},[e("v-uni-radio-group",{on:{change:function(t){arguments[0]=t=i.$handleEvent(t),i.radioChange.apply(void 0,arguments)}}},i._l(i.items,(function(t,n){return e("v-uni-label",{key:n,staticClass:"uni-list-cell uni-list-cell-pd"},[e("v-uni-view",[i._v(i._s(t.name))]),e("v-uni-view",[e("v-uni-radio",{attrs:{value:t.value,checked:t.checked}})],1)],1)})),1)],1),e("v-uni-view",{staticStyle:{height:"1000upx"}})],1)},u=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return n}))}}]);