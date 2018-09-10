import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueRouter)

//使用路由管理使用几个子组件
//引入子组件
const Index = require('./components/index/index.vue');
const news = require('./components/news/news.vue');
const video = require('./components/video/video.vue');
const expert = require('./components/expert/expert.vue');
const boxs = require('./components/boxs/boxs.vue');


//路由配置
const r = [
  {
    path:'/index',
    component:Index.default,
    name:'项目'
  },
  {
    path:'/news',
    component:news.default,
    name:'任务'
  },
  {
    path:'/video',
    component:video.default,
    name:'安全'
  },
  {
    path:'/expert',
    component:expert.default,
    name:'高级'
  },
  {
    path:'/boxs',
    component:boxs.default,
    name:'全局'
  },
  {
    //如果用户随便输入地址，转到首页
    path:'*',
    redirect:'/index'
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
