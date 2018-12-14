<template>
	<div class="main demo__checkbox">
    <h2 class="demo__title">基础用法</h2>
    <!-- 通过v-model绑定 checkbox 的勾选状态 -->
		<div>
      <van-checkbox v-model="checked">复选框</van-checkbox>  
    </div>

    <h2 class="demo__title">禁用状态</h2>
    <div>
      <van-checkbox v-model="checked" disabled>复选框</van-checkbox>
    </div>

    <h2 class="demo__title">自定义颜色</h2>
    <div>
      <van-checkbox v-model="checked" checked-color="#4b0">复选框</van-checkbox>  
    </div>

    <h2 class="demo__title">自定义图标</h2>
    <div>
      <van-checkbox v-model="checked">
        自定义图标
        <img class="img" slot="icon" slot-scope="props" :src="props.checked ? icon.active : icon.normal" >
      </van-checkbox>
    </div>

    <h2 class="demo__title">复选框组</h2>
    <van-checkbox-group v-model="result">
      <van-checkbox 
       v-for="(item,index) in list"
       :key="item"
       :name="item"
      >
     复选框{{item}}
     </van-checkbox>
   </van-checkbox-group>

   <h2 class="demo__title">设置最大可选数</h2>
   <van-checkbox-group v-model="result" :max="2">
    <van-checkbox
      v-for="(item, index) in list"
      :key="item"
      :name="item"
    >
      复选框 {{ item }}
    </van-checkbox>
  </van-checkbox-group>

  <h2 class="demo__title">搭配单元格组件使用</h2>
  <van-checkbox-group v-model="result">
    <van-cell-group>
      <van-cell
       v-for="item in list"
       clickable
       :key="item"
       :title="`复选框 ${item}`"
       @click="toggle(index)"
      >
        <van-checkbox :name="item" ref="checkboxes" />
      </van-cell>
    </van-cell-group>
  </van-checkbox-group>
	</div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,

      icon:{
        normal: 'https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png',
        active: 'https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png'
      },
      list:['a','b','c'],
      result:['a','b']
    }  
  },
  methods: {
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
}
</script>

<style>
  .demo__checkbox .van-checkbox{
     margin: 10px 0 0 20px;
  }
</style>

<style scoped>
  .img{
    height: 20px;
  }
</style>