<template>
	<div class="main">
    <h2 class="demo__title">基础用法</h2>
    <van-picker :columns="columns1" @change="onChange" />

    <h2 class="demo__title">禁用选项</h2>
    <van-picker :columns="columns2" />

    <h2>展示顶部栏</h2>
    <van-picker
      show-toolbar
      title="标题"
      :columns="columns3"
      @cancel="onCancel"
      @confirm="onConfirm"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns1: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      columns2: [
      { text:'杭州', disabled: true },
      { text: '宁波' },
      { text: '温州' }
      ]
      columns3: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    }  
  },

  methods: {
    onChange(picker, value, index){
      this.$toast(this,$t('toastContent', value, index));
    }
  }
}
</script>

<style scoped>

</style>