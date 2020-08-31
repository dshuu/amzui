<template>
  <transition name="message-fade">
    <div v-if="visible">
      <div v-if="showMask" class="amz-message-mask" @click="closeMsg"></div>
      <div class="amz-message-body flex-box flex-fdc flex-jcc flex-aic">
        <div class="content-desc">{{ text }}</div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Message",
  data() {
    return {
      showMask: false,
      text: "",
      visible: false,
      verticalOffse: "50%"
    };
  },
  methods: {
    closeMsg() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../style/main.scss";
.amz-message {
  &-mask {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background: rgba($color: #000000, $alpha: 0.35);
  }
  &-body {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 5000;
    text-align: center;
    width: 120px;
    height: 120px;
    background: $mainBg;
    color: rgba(255, 255, 255, 0.9);
    border-radius: 5px;
    user-select: none;
  }
}

.message-fade-enter-active,
.message-fade-leave-active {
  transition: opacity 0.5s;
}
.message-fade-enter,
.message-fade-leave-to {
  opacity: 0;
}
</style>
