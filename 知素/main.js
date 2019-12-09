import Vue from 'vue'
import App from './App'

import Json from './Json.js' //测试用数据

Vue.config.productionTip = false

App.mpType = 'app'

const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
}

const prePage = ()=>{
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}


Vue.prototype.$api = {json,prePage};
const app = new Vue({
    ...App
})
app.$mount()
