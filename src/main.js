import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

// import axios from 'axios'
import router from '../router'
import store from '/store'
Vue.use(ElementUI)
// Vue.use(axios)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
