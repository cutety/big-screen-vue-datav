import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import dataV from '@jiaminghi/data-view';
Vue.use(dataV);

// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chart-bar.js';
import 'vue-awesome/icons/chart-area.js';
import 'vue-awesome/icons/chart-pie.js';
import 'vue-awesome/icons/chart-line.js';
import 'vue-awesome/icons/align-left.js';

// 全局注册图标
Vue.component('icon', Icon);

// 适配flex
import '@/common/flexible.js';

// 引入全局css
import './assets/scss/style.scss';

//引入vchars
import VCharts from 'v-charts'
Vue.use(VCharts)

//引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);
//引入axios
import axios from 'axios';
Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios
axios.defaults.baseURL="/api" //baseURL
axios.defaults.withCredentials=true //跨域请求是否提供凭证


Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
