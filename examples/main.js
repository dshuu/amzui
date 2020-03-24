import Vue from 'vue'
import App from './App.vue'
import AmzButton from '../packages/button'
Vue.use(AmzButton)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
