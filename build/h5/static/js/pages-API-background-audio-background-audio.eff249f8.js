(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-background-audio-background-audio"],{"325c":function(t,a,i){"use strict";function e(t){if("number"!==typeof t||t<0)return t;var a=parseInt(t/3600);t%=3600;var i=parseInt(t/60);t%=60;var e=t;return[a,i,e].map((function(t){return t=t.toString(),t[1]?t:"0"+t})).join(":")}function n(t,a){return"string"===typeof t&&"string"===typeof a&&(t=parseFloat(t),a=parseFloat(a)),t=t.toFixed(2),a=a.toFixed(2),{longitude:t.toString().split("."),latitude:a.toString().split(".")}}i("28a5"),i("6b54");var o={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var a="";for(var i in this.UNITS)if(t>=this.UNITS[i]){a=Math.floor(t/this.UNITS[i])+i+"前";break}return a||"刚刚"},format:function(t){var a=this.parse(t),i=Date.now()-a.getTime();if(i<this.UNITS["天"])return this.humanize(i);var e=function(t){return t<10?"0"+t:t};return a.getFullYear()+"/"+e(a.getMonth()+1)+"/"+e(a.getDate())+"-"+e(a.getHours())+":"+e(a.getMinutes())},parse:function(t){var a=t.split(/[^0-9]/);return new Date(a[0],a[1]-1,a[2],a[3],a[4],a[5])}};t.exports={formatTime:e,formatLocation:n,dateUtils:o}},"5c02":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=i("325c"),n={data:function(){return{title:"backgroundAudio",bgAudioMannager:null,dataUrl:"https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3",playing:!1,playTime:0,formatedPlayTime:"00:00:00"}},onLoad:function(){var t=this;this.playing=this.$backgroundAudioData.playing,this.playTime=this.$backgroundAudioData.playTime,this.formatedPlayTime=this.$backgroundAudioData.formatedPlayTime;var a=uni.getBackgroundAudioManager();a.title||(a.title="致爱丽丝"),a.singer||(a.singer="暂无"),a.coverImgUrl||(a.coverImgUrl="https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.jpg"),a.onPlay((function(){console.log("开始播放"),t.$backgroundAudioData.playing=t.playing=!0})),a.onPause((function(){console.log("暂停播放"),t.$backgroundAudioData.playing=t.playing=!1})),a.onEnded((function(){t.playing=!1,t.$backgroundAudioData.playing=!1,t.$backgroundAudioData.playTime=t.playTime=0,t.$backgroundAudioData.formatedPlayTime=t.formatedPlayTime=e.formatTime(0)})),a.onTimeUpdate((function(i){Math.floor(a.currentTime)>Math.floor(t.playTime)&&(t.$backgroundAudioData.formatedPlayTime=t.formatedPlayTime=e.formatTime(Math.floor(a.currentTime))),t.$backgroundAudioData.playTime=t.playTime=a.currentTime})),this.bgAudioMannager=a},methods:{play:function(t){this.bgAudioMannager.src?(this.bgAudioMannager.seek(this.playTime),this.bgAudioMannager.play()):(this.bgAudioMannager.startTime=this.playTime,this.bgAudioMannager.src=this.dataUrl)},seek:function(t){this.bgAudioMannager.seek(t.target.value)},pause:function(){this.bgAudioMannager.pause()},stop:function(){this.bgAudioMannager.stop(),this.$backgroundAudioData.playing=this.playing=!1,this.$backgroundAudioData.playTime=this.playTime=0,this.$backgroundAudioData.formatedPlayTime=this.formatedPlayTime=e.formatTime(0)}}};a.default=n},"682a":function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,"uni-image[data-v-92fd14e4]{width:%?150?%;height:%?150?%}.page-body-text[data-v-92fd14e4]{padding:0 %?30?%}.page-body-wrapper[data-v-92fd14e4]{margin-top:0}.page-body-info[data-v-92fd14e4]{padding-bottom:%?50?%}.time-big[data-v-92fd14e4]{font-size:%?60?%;margin:%?20?%}.slider[data-v-92fd14e4]{width:%?630?%}.play-time[data-v-92fd14e4]{font-size:%?28?%;width:100%;padding:%?20?% 0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;box-sizing:border-box}.page-body-buttons[data-v-92fd14e4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around;margin-top:%?100?%}.page-body-button[data-v-92fd14e4]{width:%?250?%;text-align:center}",""]),t.exports=a},"69ab":function(t,a,i){"use strict";var e,n=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap"},[i("v-uni-view",{staticClass:"uni-center"},[i("v-uni-text",{staticClass:"time-big"},[t._v(t._s(t.formatedPlayTime))])],1),i("v-uni-view",{staticClass:"uni-common-mt"},[i("v-uni-slider",{staticClass:"slider",attrs:{min:"0",max:"21",step:"1",value:t.playTime},on:{change:function(a){arguments[0]=a=t.$handleEvent(a),t.seek.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"play-time"},[i("v-uni-text",[t._v("00:00")]),i("v-uni-text",[t._v("00:21")])],1),i("v-uni-view",{staticClass:"uni-hello-text"},[t._v("注意：离开当前页面后背景音乐将保持播放，但退出uni-app将停止")]),i("v-uni-view",{staticClass:"page-body-buttons"},[t.playing?[i("v-uni-view",{staticClass:"page-body-button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.stop.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/stop.png"}})],1),i("v-uni-view",{staticClass:"page-body-button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.pause.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/pause.png"}})],1)]:t._e(),t.playing?t._e():[i("v-uni-view",{staticClass:"page-body-button"}),i("v-uni-view",{staticClass:"page-body-button",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.play.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:"/static/play.png"}})],1)],i("v-uni-view",{staticClass:"page-body-button"})],2)],1)],1)},o=[];i.d(a,"b",(function(){return n})),i.d(a,"c",(function(){return o})),i.d(a,"a",(function(){return e}))},b406:function(t,a,i){"use strict";i.r(a);var e=i("5c02"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=n.a},c086:function(t,a,i){var e=i("682a");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("6e24bf8e",e,!0,{sourceMap:!1,shadowMode:!1})},eedb:function(t,a,i){"use strict";var e=i("c086"),n=i.n(e);n.a},f136:function(t,a,i){"use strict";i.r(a);var e=i("69ab"),n=i("b406");for(var o in n)"default"!==o&&function(t){i.d(a,t,(function(){return n[t]}))}(o);i("eedb");var u,r=i("f0c5"),s=Object(r["a"])(n["default"],e["b"],e["c"],!1,null,"92fd14e4",null,!1,e["a"],u);a["default"]=s.exports}}]);