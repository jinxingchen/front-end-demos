<template>
	<div class="main demo-col">
    <h2 class="demo__title">基本用法</h2>
    <!-- Layout 组件提供了24列栅格，通过在Col上添加span属性设置列所占的宽度百分比 -->
    <!-- 此外，添加offset属性可以设置列的偏移宽度，计算方式与 span 相同 -->
    <div>
      <van-row>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
      </van-row>

      <van-row>
        <van-col span="4">span: 4</van-col>
        <van-col span="10" offset="4">offset: 4, span: 10</van-col>
      </van-row>

      <van-row>
        <van-col offset="12" span="12">offset: 12, span: 12</van-col>
      </van-row>
    </div>

    <h2 class="demo__title">设置列元素间距</h2>
    <!-- 通过gutter属性可以设置列元素之间的间距，默认间距为 0 -->
    <div>
      <van-row gutter="20">
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
        <van-col span="8">span: 8</van-col>
      </van-row>
    </div>

    <h2 class="demo__title">Flex布局</h2>
    <!-- 将 type 属性设置为 flex 可以启用 flex 布局，便于进行灵活的对齐 -->

    <div>
      <!-- 左对齐 -->
      <van-row type="flex">
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
      </van-row>

      <!-- 居中 -->
      <van-row type="flex" justify="center">
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
      </van-row>

      <!-- 右对齐 -->
      <van-row type="flex" justify="end">
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
      </van-row>

      <!-- 两端对齐 -->
      <van-row type="flex" justify="space-between">
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
      </van-row>

      <!-- 每个元素的两侧间隔相等 -->
      <van-row type="flex" justify="space-around">
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
        <van-col span="6">span: 6</van-col>
      </van-row>
    </div>

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

<style>
  .demo-col .van-col:nth-child(odd){
    background-color: #39a9ed;
  }

  .demo-col .van-col:nth-child(even){
    background-color: #66c6f2;
  }

  .demo-col .van-col{
    color: #fff;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 10px;
    background-clip: content-box;
  }
</style>

<style scoped>

</style>