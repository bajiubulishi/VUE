//1.引入vue文件 vue.js vue 模块
import Vue from vue
//2.引入组件 App.vue
import App from './components/App'
//3.创建vue实例
new Vue({
    el:"#app",
    render:function(h){
        h(APP)
    }
})