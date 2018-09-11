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
    path:'/wangpan/',
    component:wangpan.default,
    name:'网盘',
    children:[
      {
        path:'/wangpan/qiye/',
        component:require('./components/wangpan/qiye/qiye.vue').default,
        name:"企业网盘"
      },
      {
        path:'/wangpan/geren',
        component:require('./components/wangpan/geren/geren.vue').default,
        name:"个人网盘"
      },
      {
        path:'/wangpan/chengyuan',
        component:require('./components/wangpan/chengyuan/chengyuan.vue').default,
        name:"成员"
      },
      {
        path:'/wangpan/biaoqian',
        component:require('./components/wangpan/biaoqian/biaoqian.vue').default,
        name:"标签"
      },
      {
        path:'/wangpan/gongxiang',
        component:require('./components/wangpan/gongxiang/gongxiang.vue').default,
        name:"与我共享"
      },
      {
        path:'/wangpan/huishouzhan',
        component:require('./components/wangpan/huishouzhan/huishouzhan.vue').default,
        name:"回收站"
      },
      {
        //如果用户随便输入地址，转到首页
        path:'*',
        redirect:'/wangpan/qiye'
      }
    ]
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
    count:1,
    wangpan:[]
  },
  mutations:{
    GETALL(state,payload){
      state.wangpan = payload;
    },
  },
  actions:{
    async GETALL(context,payload){
      // 请求数据
      var data = await fetch('/XCC/').then(res => res.json());
      context.commit('GETALL',data);
    },
  }
})


var vm = new Vue({
  el: '#app',
  store,
  router,
  components:{
    App
  }
})
