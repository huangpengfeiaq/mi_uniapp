import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
Vue.prototype.$token = 'D434AD7C50859B02D93784D9EEE93DA47e8796035fbd4183ac25bc48d4cbbb46';
Vue.prototype.$tempUrl = 'http://localhost:8088/';

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
