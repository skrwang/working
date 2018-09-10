import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueRouter)

//使用路由管理使用几个子组件
//引入子组件
const xiaoxi = require('./components/xiaoxi/xiaoxi.vue');
const xiangmu = require('./components/xiangmu/xiangmu.vue');
const rili = require('./components/rili/rili.vue');
const wangpan = require('./components/wangpan/wangpan.vue');
const tongxun = require('./components/tongxun/tongxun.vue');


//路由配置
const r = [
  {
    path:'/xiaoxi',
    component:xiaoxi.default,
    name:'消息'
  },
  {
    path:'/xiangmu',
    component:xiangmu.default,
    name:'项目'
  },
  {
    path:'/rili',
    component:rili.default,
    name:'日历'
  },
  {
    path:'/wangpan',
    component:wangpan.default,
    name:'网盘'
  },
  {
    path:"/tongxun",
    component:tongxun.default,
    name:'通讯录'
  },
  {
    //如果用户随便输入地址，转到首页
    path:'*',
    redirect:'/xiaoxi'
  }
]

//路由初始化
const router = new VueRouter({
  //这里的routes 键必须这么写
  routes : r
})
//配置vuex
const store =  new Vuex.Store({
  state:{
    count:1
  }
})


new Vue({
  el: '#app',
  store,
  router,
  components:{
    App
  }
})
