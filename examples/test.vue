<template>
  <div>
    <amz-button @click="fn">默认按钮</amz-button>
  </div>
</template>

<script>
import AmzButton from "../packages/button";
export default {
  name: "test",
  components: {
    AmzButton
  },
  data() {
    return {};
  },
  methods: {
    fn() {
      let a = this.$message({
        text: "this is my content",
        duration: 0,
        showMask: true
      });
    }
  }
};
</script>
