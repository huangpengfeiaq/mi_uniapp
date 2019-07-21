import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
Vue.prototype.$token = '1444E7305696166FE27549B73599259Df949bd4442d54f2aaf8cf81ad2b91656';
Vue.prototype.$tempUrl = 'http://localhost:8088/';

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
