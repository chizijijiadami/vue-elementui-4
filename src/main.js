import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './data/store'
import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
// 使用Element UI
Vue.use(Element, {
  size: "small"
});
//样式
import "@/assets/styles/index.styl";
//路由过滤
import 'common/routerFilter'
// SVG 图标
import '@/assets/icons'
//注册全局组件
import './components'
// 注册全局filters过滤器
import filters from './common/filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// 全局校验
import Validate from '@/common/validate/index.js'
Vue.use(Validate)
//mockj数据
import 'data/mock'
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
