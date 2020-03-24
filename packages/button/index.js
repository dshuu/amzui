import Button from './src/Button.vue'

Button.install = Vue => {
  console.log('Button===>', Button)
  Vue.component(Button.name, Button)
}

export default Button
