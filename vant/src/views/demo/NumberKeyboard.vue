<template>
	<div class="main">
    <h2 class="demo__title">默认样式</h2>
    <div>
      <van-button @touchstart.native.stop="keyboard = 'default'">
        弹出默认键盘
      </van-button>
      
      <van-number-keyboard
        :show="keyboard === 'default'"
        extra-key="."
        close-button-text="完成"
        @blur="keyboard = ''"
        @input="onInput"
        @delete="onDelete"
      />
    </div>

    <h2 class="demo__title">自定义样式</h2>
    <div>
      <van-button @touchstart.native.stop="keyboard = 'custom'">弹出自定义键盘
      </van-button>

      <van-number-keyboard
        :show="keyboard === 'custom'"
        theme="custom"
        extra-key="."
        close-button-text="完成"
        @blur="keyboard = ''"
        @input="onInput"
        @delete="onDelete"
      />
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      keyboard: 'default',
      keyboard: 'custom'
      
    }  
  },
  methods: {
    onInput(value) {
      this.$toast('Input:' + value);
    },
    onDelete() {
      this.$toast('Delete');
    }
  }
}
</script>

<style scoped>

</style>