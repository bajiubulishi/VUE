// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'// 引入vue模块 npm i vue  script：src=vue.js
import App from './App'// 导入vue组件
import App1 from './App.1'// 导入App1组件
import router from './router'// 导入router/index.js

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({// 导入vue实例
  el: '#app1',
  // 这是es6简写（属性和值同名可以简写）
  router,
  // 组件声明当前可用组件（根组件）
  components: { App, App1 },
  // 声明默认加载的根组件
  template: '<App1/>'
})
