<template>
	<div class="main demo__popup">
    <h2 class="demo__title">基本用法</h2>
    <div>
      <van-button @click="show1 = true">弹出层</van-button>
      <van-popup v-model="show1">弹出 popup</van-popup>
    </div>

    <h2 class="demo__title">弹出位置</h2>
    <!-- 通过position属性设置 Popup 弹出位置 -->
    <div>
      <van-button @click="show2 = true" >底部弹出</van-button>
      <van-popup v-model="show2" position="bottom" >
         <van-picker
          show-toolbar
          :columns="columns"
          @confirm="show2 = false"
          @cancel="show2 = false"
        />
      </van-popup>
    </div>

    <div>
      <van-button @click="show3 = true" >顶部弹出</van-button>
      <van-popup v-model="show3" position="top">内容内容内容内容</van-popup>
    </div>

    <div>
      <van-button @click="show4 = true" >右侧弹出</van-button>
      <van-popup v-model="show4" position="right">
        <van-button @click="show4 = false">关闭弹层</van-button>
        <van-button @click="show5 = true">右侧弹出</van-button>
        <van-popup v-model="show5" position="right">
          <van-button @click="show5 = false">关闭弹层</van-button>
        </van-popup>
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show1:false,
      show2:false,
      show3:false,
      show4:false,
      show5:false,
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    };
  },

   watch: {
    show3(val) {
      if (val) {
        setTimeout(() => {
          this.show3 = false;
        }, 2000);
      }
    }
  },

  methods: {
   
  }


}
</script>
<style>
.demo__popup .van-button{
   margin: 10px 0 10px 15px;
}
.demo__popup .van-popup--top{
    color: #fff;
    width: 100%;
    border-radius: 0;
    line-height: 20px;
    background-color: rgba(0, 0, 0, 0.8);
}

.demo__popup .van-popup--right{
    width: 100%;
    height: 100%;
}


</style>

<style scoped>

</style>