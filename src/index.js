import Button from '../packages/button'

const components = [Button]

const install = Vue => {
  if (install.installed) return
  components.map(conponent => Vue.use(conponent))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
