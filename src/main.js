import Vue from 'vue'
import '@/assets/css/reset.css'
import '@/plugins/iview.js'
// 按需引用仍要导入样式
import 'view-design/dist/styles/iview.css'
// 引入阿里字体图标样式
import '@/assets/icon/iconfont.css'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
