<template>
  <div id="app">
    <h1>hello amz-ui</h1>
    <test />
  </div>
</template>

<script>
import test from './test'
export default {
  name: 'App',
  components: { test }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
