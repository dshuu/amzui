<template>
  <div>
      <amz-button @click="fn">默认按钮</amz-button>
  </div>
</template>

<script>
import AmzButton from '../packages/button'
export default {
  name: 'test',
  components: {
    AmzButton
  },
  methods: {
    fn () {
      console.log('yep it works')
    }
  }
}
</script>
