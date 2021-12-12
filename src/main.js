import Vue from 'vue'

import ElemenUI from './element'
import './assets/scss/index.scss'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.use(ElemenUI)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
