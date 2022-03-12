import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

import router from '../router'
import store from '/store'
import base from 'assets/js/base.js'
import 'tinymce'

Vue.use(base)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

router.beforeEach((to, from, next) => {
  store.commit('getToken');
  let token = store.state.user.token
  if (!token && to.name !== 'login') {
    next('/login')
  } else {
    next()
  }
})