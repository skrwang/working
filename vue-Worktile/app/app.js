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
    path:'/xiaoxi/',
    component:xiaoxi.default,
    name:'消息',
    children:[
      //配置孙子路由
      {
        path:'/xiaoxi/qygg/',
        component:require('./components/xiaoxi/qygg/qygg.vue').default,
        name:"企业公告"
      },
      {
        path:'/xiaoxi/xtjqr',
        component:require('./components/xiaoxi/xtjqr/xtjqr.vue').default,
        name:"小特机器人"
      },
      {
        //如果用户随便输入地址，转到首页
        path:'*',
        redirect:'/xiaoxi/qygg'
      }
    ]
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
    name:'通讯录',
    children:[
      //配置子路由
      {
        path:'/tongxun/qygg/',
        component:require('./components/tongxun/qygg/qygg.vue').default,
        name:"企业公告"
      },
      {
        path:'/tongxun/imTime/',
        component:require('./components/tongxun/imTime/imTime.vue').default,
        name:"日程助手"
      },
      {
        path:'/tongxun/wpzs/',
        component:require('./components/tongxun/wpzs/wpzs.vue').default,
        name:"网盘助手"
      },
      {
        path:'/tongxun/xmzs/',
        component:require('./components/tongxun/xmzs/xmzs.vue').default,
        name:"项目助手"
      },
      {
        path:'/tongxun/xtjqr/',
        component:require('./components/tongxun/xtjqr/xtjqr.vue').default,
        name:"小特机器人"
      },
      {
        path:'/tongxun/xcc/',
        component:require('./components/tongxun/xcc/xcc.vue').default,
        name:"刑聪聪"
      },
      {
        path:'/tongxun/wzy/',
        component:require('./components/tongxun/wzy/wzy.vue').default,
        name:"王梓烨"
      }
    ]
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
