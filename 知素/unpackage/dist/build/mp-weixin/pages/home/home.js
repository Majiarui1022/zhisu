(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/home/home"],{2881:function(n,t,e){"use strict";e.r(t);var u=e("9ea8"),o=e("86ae");for(var a in o)"default"!==a&&function(n){e.d(t,n,function(){return o[n]})}(a);e("3691");var i=e("2877"),c=Object(i["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},"2fc7":function(n,t,e){"use strict";(function(n){e("d864"),e("921b");u(e("66fd"));var t=u(e("2881"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},3691:function(n,t,e){"use strict";var u=e("b146"),o=e.n(u);o.a},"86ae":function(n,t,e){"use strict";e.r(t);var u=e("f793"),o=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=o.a},"9ea8":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},b146:function(n,t,e){},f793:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{windowHeight:null,navnarwidth:null}},onShow:function(){var n=this;wx.getSystemInfo({success:function(t){console.log(t.statusBarHeight),n.navnarwidth=t.statusBarHeight,n.windowHeight=t.windowHeight}})},onLoad:function(){},methods:{navTo:function(t){n.navigateTo({url:t})}},mounted:function(){}};t.default=e}).call(this,e("543d")["default"])}},[["2fc7","common/runtime","common/vendor"]]]);