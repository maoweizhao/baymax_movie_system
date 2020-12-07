import Vue from 'vue'
import '@/assets/css/reset.css'
// 按需引用仍要导入样式
import 'view-design/dist/styles/iview.css'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import { Input, Message, Avatar } from 'view-design'
Vue.component('Message', Message)
Vue.component('Input', Input)
Vue.component('Avatar', Avatar)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
