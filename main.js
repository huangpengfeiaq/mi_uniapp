import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false;
Vue.prototype.$token = 'EF17F54E492B3B1AE490C6FB67685779948d292fa9c8470593c8e5112f1c292c';
Vue.prototype.$tempUrl = 'http://localhost:8088/';

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
