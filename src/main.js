import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import router from '../router'
import store from '/store'
import server from 'assets/js/utils/axios.js'
import base from 'assets/js/base.js'
import 'tinymce'

Vue.use(base)
Vue.use(ElementUI)

Vue.prototype.$server = server
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
