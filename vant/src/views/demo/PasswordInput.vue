<template>
	<div class="main">
    <h2 class="demo__title">基础用法</h2>
    <!-- 密码输入框 -->
		<div>
      <van-password-input
        :value="value"
        info="密码为 6 位数字"
        @focus="showKeyboard = true"
      />  
    </div>
    <!-- 数字键盘 -->
    <van-number-keyboard
      :show="showKeyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="showKeyboard = false"
    />
	</div>
</template>

<script>
export default {
  data() {
    return {
      value:'123',
      showKeyboard: true
    }; 
  },
  methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    }
  }
} 
</script>

<style scoped>

</style>