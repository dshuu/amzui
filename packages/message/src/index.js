import Vue from 'vue'
import messageComponent from './index.vue'
const defaultOpts = {
  duration: 3
}
const messageConstructor = Vue.extend(messageComponent)

messageConstructor.prototype.close = function () {
  const vm = this
  this.$on('after-leave', _ => {
    if (vm.$el && vm.$el.parentNode) {
      vm.$el.parentNode.removeChild(vm.$el)
    }
    this.$destory()
  })
  vm.visible = false
}

const Message = (options = {}) => {
  if (Vue.prototype.$isServer) return
  options = Object.assign({}, defaultOpts, options)
  console.log('options==>', options)
  const instance = new messageConstructor({
    el: document.createElement('div'),
    data: options
  })
  document.body.appendChild(instance.$el)
  console.log('$el==>', instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
    if (options.duration != 0) {
      setTimeout(() => {
        instance.close()
      }, options.duration * 1000)
    }
  })
  return instance
}

export default Message
