import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue } from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
// Vue.use(DropdownPlugin)

import 'bootstrap/scss/bootstrap.scss'

new Vue({
  render: h => h(App),
}).$mount('#app')
