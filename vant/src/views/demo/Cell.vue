<template>
	<div class="main">
		<h2 class="demo__title">基本用法</h2>
		<!-- Cell可以单独使用，也可以与CellGroup搭配使用。CellGroup可以为Cell提供上下外边框。 -->
		<div>
			<van-cell-group>
			  <van-cell title="单元格" value="内容" />
			  <van-cell title="单元格" value="内容" label="描述信息" />
			</van-cell-group>
		</div>

		<h2 class="demo__title">单元格大小</h2>
			<!-- 通过size属性可以控制单元格的大小 -->
		<div>
			<van-cell title="单元格" value="内容" size="large" />
			<van-cell title="单元格" value="内容" size="small" label="描述信息" />
		</div>

		<h2 class="demo__title">展示图片</h2>
		<!-- 通过icon属性在标题左侧展示图标 -->
			<div>
				<van-cell title="单元格" value="内容" icon="location" />
			</div>

		<h2 class="demo__title">只设置value</h2>
		<!-- 只设置value时会向左对齐 -->
		<div>
			<van-cell value="内容" />
		</div>

		<h2 class="demo__title">展示箭头</h2>
		<!-- 传入is-link属性则会在右侧显示箭头，并且可以通过传入arrow-direction属性控制箭头方向 -->
		<div>
			<van-cell title="单元格" is-link />
			<van-cell title="单元格" is-link value="内容" />
			<van-cell title="单元格" is-link arrow-direction="down" value="内容" />
		</div>

		<h2 class="demo__title">页面跳转</h2>
		<!-- 可以通过url属性进行页面跳转，或通过to属性进行 vue-router 跳转 -->
		<div>
			<van-cell title="单元格" is-link url="//youzan.github.io/vant/mobile.html" />
			<van-cell title="单元格" is-link to="index" />
		</div>

		<h2 class="demo__title">高级用法</h2>
		<div>
			<van-cell value="内容" icon="shop" is-link>
			  <template slot="title">
			  	<span class="custom-text">单元格</span>
			  	<van-tag type="danger">标签</van-tag>
			  </template>
			</van-cell>
			<van-cell title="单元格"  icon="location" is-link />
			<van-cell title="单元格">
				<van-icon slot="right-icon" name="search" class="custom-icon" />
			</van-cell>
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

<style scoped>

</style>