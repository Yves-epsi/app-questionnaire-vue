import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// 23/10 - J'ai choisi Bootstap-vue car il permet de styliser rapidement avec une grosse base de components
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
