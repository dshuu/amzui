import Vue from 'vue'
import App from './App.vue'
import AmzButton from '../packages/button'
import AmzMessage from '../packages/message'
Vue.use(AmzButton)
Vue.use(AmzMessage)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
