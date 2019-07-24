import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
Vue.prototype.$token = '';
Vue.prototype.$tempUrl = 'http://localhost:8088/';

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
