<template>
  <button class="amz-button" @click="onClick">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'AmzButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  },
  created () {},
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.amz-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  appearance: none;
  text-align: center;
  color: #606266;
  font-weight: bold;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  transition: all 0.1;
  user-select: none;
  font-size: 14px;
  padding: 12px 14px;
  &:hover {
    color: #409eff;
    border-color: #4093ff;
    background-color: #eef5ff;
  }
}
</style>
