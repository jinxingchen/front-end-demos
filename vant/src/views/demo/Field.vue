<template>
	<div class="main">
    <h2 class="demo__title">基础用法</h2>
    <!-- 通过 v-model 绑定输入框的值 -->
    <van-cell-group>
      <van-field v-model="value" placeholder="请输入用户名"/>
    </van-cell-group>

    <h2 class="demo__title">自定义类型</h2>
    <!-- 根据type属性定义不同类型的输入框 -->
     <van-cell-group>
        <van-field 
          v-model="username"
          required   
          clearable
          label="用户名"
          icon="question"
          placeholder="请输入用户名"
          @click-icon="$toast('question')"
        />
        <!-- required 是否显示表单必填星号  默认false-->
        <!-- clearable 是否启用清除控件  默认false-->
        <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        />
     </van-cell-group>

    <h2 class="demo__title">禁用输入框</h2>
    <van-cell-group>
      <van-field 
        value="输入框已禁用"
        label="用户名"
        left-icon="contact"
        disabled
      />
      <!-- disabled 是否禁用输入框 默认false -->
    </van-cell-group>

    <h2 class="demo__title">错误提示</h2>
    <van-cell-group>
      <van-field 
        v-model="username"
        label="用户名"
        placeholder="请输入用户名"
        error
      />
      <!-- error 是否将输入内容标红 默认false -->
      <van-field
        v-model="phone"
        label="手机号"
        placeholder="请输入手机号"
        error-message="手机号格式错误"
      />
    </van-cell-group>

    <h2 class="demo__title">高度自适应</h2>
    <!-- 对于 textarea，可以通过autosize属性设置高度自适应 -->
    <van-cell-group>
      <van-field 
        v-model="message"
        label="留言"
        type="textarea"
        placeholder="请输入留言"
        rows="1"
        autosize
      />
      <!-- autosize 自适应内容高度，只对 textarea 有效，可传入对象, -->
      <!-- 如 { maxHeight: 100, minHeight: 50 }，单位为 px -->
    </van-cell-group>

    <h2 class="demo__title">插入按钮</h2>
    <!-- 通过 button slot 可以在输入框尾部插入按钮 -->
    <van-cell-group>
      <van-field 
        v-model="sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
      <van-button slot="button" size="small" type="primary">发送验证码</van-button>
    </van-field>
    </van-cell-group>

  </div>
</template>

<script>
export default {
  data() {
    return {

    }  
  },
  methods: {
    
  }
}
</script>

<style scoped>

</style>