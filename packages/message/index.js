import MessageComponent from './src/index.vue'
import $Message from './src'

MessageComponent.install = Vue => {
  Vue.component(MessageComponent.name, MessageComponent)
  Vue.prototype.$message = $Message
}
export default MessageComponent
