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
    name:'项目',
    children: [
      {
        path: '/xiangmu/peizhi',
        name: '配置中心',
        component: require('./components/xiangmu/peizhi/peizhi.vue').default,
        children: [
          {
            path: '/xiangmu/peizhi/xiangmu',
            name: '项目',
            component: require('./components/xiangmu/peizhi/xiangmu/xiangmu.vue').default,
            children: [
              {
                path: '/xiangmu/peizhi/xiangmu/xiangmu',
                name: '项目模板',
                component: require('./components/xiangmu/peizhi/xiangmu/xiangmu/xiangmu.vue').default,
              },
              {
                path: '/xiangmu/peizhi/xiangmu/zujian',
                name: '组件管理',
                component: require('./components/xiangmu/peizhi/xiangmu/zujian/zujian.vue').default,
              },
              {
                path: '/xiangmu/peizhi/xiangmu/baobiao',
                name: '报表',
                component: require('./components/xiangmu/peizhi/xiangmu/baobiao/baobiao.vue').default,
              }
            ]
          },
          {
            path: '/xiangmu/peizhi/renwu',
            name: '任务',
            component: require('./components/xiangmu/peizhi/renwu/renwu.vue').default,
            children: [
              {
                path: '/xiangmu/peizhi/renwu/renwu',
                name: '任务类型',
                component: require('./components/xiangmu/peizhi/renwu/renwu/renwu.vue').default,
              },
              {
                path: '/xiangmu/peizhi/renwu/shuxing',
                name: '属性管理',
                component: require('./components/xiangmu/peizhi/renwu/shuxing/shuxing.vue').default,
              },
              {
                path: '/xiangmu/peizhi/renwu/zhuangtai',
                name: '状态管理',
                component: require('./components/xiangmu/peizhi/renwu/zhuangtai/zhuangtai.vue').default,
              },
              {
                path: '/xiangmu/peizhi/renwu/shuju',
                name: '数据管理',
                component: require('./components/xiangmu/peizhi/renwu/shuju/shuju.vue').default,
              },
              {
                path: '/xiangmu/peizhi/renwu/biaoqian',
                name: '标签管理',
                component: require('./components/xiangmu/peizhi/renwu/biaoqian/biaoqian.vue').default,
              },
              {
                path: '/xiangmu/peizhi/renwu/youxianji',
                name: '优先级管理',
                component: require('./components/xiangmu/peizhi/renwu/youxianji/youxianji.vue').default,
              }
            ]
          },
          {
            path: '/xiangmu/peizhi/anquan',
            name: '安全',
            component: require('./components/xiangmu/peizhi/anquan/anquan.vue').default,
            children: [
              {
                path: '/xiangmu/peizhi/anquan/juese',
                name: '角色管理',
                component: require('./components/xiangmu/peizhi/anquan/juese/juese.vue').default,
              },
              {
                path: '/xiangmu/peizhi/anquan/anquan',
                name: '安全管理',
                component: require('./components/xiangmu/peizhi/anquan/anquan/anquan.vue').default,
              },
              {
                path: '/xiangmu/peizhi/anquan/quanxian',
                name: '权限管理',
                component: require('./components/xiangmu/peizhi/anquan/quanxian/quanxian.vue').default,
              },
            ]
          },
          {
            path: '/xiangmu/peizhi/gaoji',
            name: '高级',
            component: require('./components/xiangmu/peizhi/gaoji/gaoji.vue').default,
            children: [
              {
                path: '/xiangmu/peizhi/gaoji/tixing',
                name: '提醒管理',
                component: require('./components/xiangmu/peizhi/gaoji/tixing/tixing.vue').default,
              },
              {
                path: '/xiangmu/peizhi/gaoji/tongzhi',
                name: '通知管理',
                component: require('./components/xiangmu/peizhi/gaoji/tongzhi/tongzhi.vue').default,
              },
              {
                path: '/xiangmu/peizhi/gaoji/shijian',
                name: '事件管理',
                component: require('./components/xiangmu/peizhi/gaoji/shijian/shijian.vue').default,
              },
            ]
          },
          {
            path: '/xiangmu/peizhi/quanju',
            name: '全局',
            component: require('./components/xiangmu/peizhi/quanju/quanju.vue').default,
          }
        ]
      },
      {
        path: '/xiangmu/huishou',
        name: '回收站',
        component: require('./components/xiangmu/huishou/huishou.vue').default,
      }
    ]
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
