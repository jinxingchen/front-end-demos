require('@/assets/vendor/rem')

import Vue from 'vue'
Vue.config.productionTip = false

// vant ui
import Vant from 'vant'
import 'vant/lib/index.css'
import { Lazyload, Toast, ImagePreview } from 'vant';
Vue.use(Vant)
// lazyLoad https://www.youzanyun.com/zanui/vant#/zh-CN/lazyload
Vue.use(Lazyload, {
  // loading: '', // 加载中的图片样式
  // error: '' // 加载完成的图片样式
})

import {IMGS_PREFIX} from '@/setting'
Vue.prototype.$imgPrefix = IMGS_PREFIX
Vue.prototype.$preview = url => {
  if(typeof url !== 'string' ) {
    return
  }
  if(!/^http/.test(url.trim())) {
    url = `${IMGS_PREFIX}/${url}`
  }
  ImagePreview([url])
}

Vue.prototype.$showLoading = () => {
  Toast.loading({
    duration: 0,       // 持续展示 toast
    forbidClick: true, // 禁用背景点击
    mask: true,
    loadingType: 'spinner',
    message: '加载中'
  })
}

Vue.prototype.$hideLoading = () => {
  Toast.clear()
}

import axios from 'axios'
require('@/service/interceptor') // axios 拦截器，做通用报错等
Vue.prototype.$http = axios

require('@/filters')

import store from '@/store'

import router from './router'
router.afterEach((to,from,next) => { // 进入新页面时，页面总是滚动到顶部
  window.scrollTo(0,0);
})

import App from './App.vue'

var vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})

// 登录后才能跳转的页面
Vue.prototype.$loginedJump = function(url) {
  var jumpUrl = this.$store.state.user.id ? url : '/login'
  this.$router.push(jumpUrl)
}.bind(vm)

// 项目信息
console.group()
console.info('%c项目基本信息', 'font-size: 18px;font-weight:bold;')
console.info(`%c当前环境: ${process.env.NODE_ENV}`, 'font-size: 16px;font-weight:bold;')
console.info('%c所有接口地址:', 'font-size: 16px;font-weight:bold;')
import {urls} from '@/setting'
console.info(`
${JSON.stringify(urls, null, '\t')}
`)
console.info('%c所有路由:', 'font-size: 16px;font-weight:bold;')
import menu from '@/router/menu'
console.table(menu.map(item => {
  return {
    ...item,
    meta: JSON.stringify(item.meta)
  }
}))
console.groupEnd()
