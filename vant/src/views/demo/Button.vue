<template>
  <div class="main">
  	<h2 class="demo__title">按钮类型</h2>
  	<div>
    	<van-button type="default">默认按钮</van-button>
  		<van-button type="primary">主要按钮</van-button>
  		<van-button type="warning">警告按钮</van-button>
  		<van-button type="danger">危险按钮</van-button>
  	</div>

  	<h2 class="demo__title">朴素按钮</h2>
    <div>
      <van-button plain type="primary">朴素按钮</van-button>
      <van-button plain type="danger">朴素按钮</van-button>
    </div>

    <h2 class="demo__title">禁用状态</h2>
    <!-- 通过disabled属性来禁用按钮，此时按钮不可点击 -->
    <div>
      <van-button disabled type="primary">禁用状态</van-button>
      <van-button disabled type="danger">禁用状态</van-button>
    </div>

    <h2 class="demo__title">加载状态</h2>
    <div>
      <van-button loading type="primary" />
      <van-button loading type="danger" />
    </div>

    <h2 class="demo__title">按钮形状</h2>
    <div>
      <van-button square type="primary">方形按钮</van-button>
      <van-button round type="danger">圆形按钮</van-button>
    </div>

    <h2 class="demo__title">按钮尺寸</h2>
    <div>
      <van-button size="large">大号按钮</van-button>
      <van-button size="normal">普通按钮</van-button>
      <van-button size="small">小型按钮</van-button>
      <van-button size="mini">迷你按钮</van-button>
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