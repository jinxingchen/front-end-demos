<template>
  <div class="main ta-c p-20rem">
    首页
	
	<van-row>
	  <van-col span="6">
	  	<van-button plain type="primary" @click="$router.push('/demo/button')">按钮</van-button>
	  </van-col>
	  <van-col span="6">
	  	<van-button plain type="primary" @click="$router.push('/demo/cell')">单元格</van-button>
	  </van-col>
	  <van-col span="6">
	  	<van-button plain type="primary" @click="$router.push('/demo/icon')">图标</van-button>
	  </van-col>
	  <van-col span="6">
	  	<van-button plain type="primary" @click="$router.push('/demo/layout')">布局</van-button>
	  </van-col>
	  <van-col span="6">
	  	<van-button plain type="primary" @click="$router.push('/demo/popup')">弹出层</van-button>
	  </van-col>
	  <van-col span="6">
	  	<van-button plain type="primary" @click="$router.push('/demo/checkbox')">复选框</van-button>
	  </van-col>
	  <van-col span="6">
	  	<van-button plain type="primary" @click="$router.push('/demo/datetimepicker')">时间选择</van-button>
	  </van-col>
	  <van-col span="6">
	  	<van-button plain type="primary" @click="$router.push('/demo/field')">输入框</van-button>
	  </van-col>
	  <van-col span="6">
	  	<van-button plain type="primary" @click="$router.push('/demo/numberkeyboard')">数字键盘</van-button>
	  </van-col>
	  <van-col span="6">
	  	<van-button plain type="primary" @click="$router.push('/demo/passwordinput')">密码输入框</van-button>
	  </van-col>
	  <van-col span="6">
	  	<van-button plain type="primary" @click="$router.push('/demo/picker')">选择器</van-button>
	  </van-col>
	  
	</van-row>
    <div>
    	
    </div>
  </div>
</template>

<script src="./main.js"></script>

<style scoped src="./style.css"></style>