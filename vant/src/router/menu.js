// 路由配置
var routes = [
  {
    path: '/',
    meta: {
      title: '首页',
      activeTypeIndex: 0,
    },
    component: resolve => {
      lazyLoading(resolve, 'index')
    },
  },
  {
    path: '/member-center',
    meta: {
      title: '个人中心',
      activeTypeIndex: 3,
    },
    component: resolve => {
      lazyLoading(resolve, 'member-center')
    },
  },
   {
    path: '/demo/button',
    meta: {
      title: '按钮',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'demo/Button', false)
    },
  },
    {
    path: '/demo/cell',
    meta: {
      title: '单元格',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'demo/Cell', false)
    },
  },
  {
    path: '/demo/icon',
    meta: {
      title: '图标',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'demo/Icon', false)
    },
  },
  {
    path: '/demo/layout',
    meta: {
      title: '布局',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'demo/Layout', false)
    },
  },
  {
    path: '/demo/popup',
    meta: {
      title: '弹出层',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'demo/Popup', false)
    },
  },
  {
    path: '/demo/checkbox',
    meta: {
      title: '复选框',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'demo/Checkbox', false)
    },
  },
  {
    path: '/demo/datetimepicker',
    meta: {
      title: '时间选择',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'demo/DatetimePicker', false)
    },
  },
  {
    path: '/demo/field',
    meta: {
      title: '输入框',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'demo/Field', false)
    },
  },
  {
    path: '/demo/numberkeyboard',
    meta: {
      title: '数字键盘',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'demo/NumberKeyboard', false)
    },
  },
  {
    path: '/demo/passwordinput',
    meta: {
      title: '密码输入框',
      activeTypeIndex: 1,
    },
    component: resolve => {
      lazyLoading(resolve, 'demo/PasswordInput', false)
    },
  },
]



const lazyLoading = (resolve, name, index = true) => {
  require.ensure([], function(require) {
    resolve(require(`@/views/${name}${index ? '/Index' : ''}.vue`));
  })
}

export default routes
