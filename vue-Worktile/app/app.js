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
        name:"企业公告",
        children:[
          {
            path:'/xiaoxi/qygg/xx/',
            component:require('./components/xiaoxi/qygg/xx/xx.vue').default,
            name:'消息'
          },
          {
            path:'/xiaoxi/qygg/file',
            component:require('./components/xiaoxi/qygg/file/file.vue').default,
            name:'文件'
          },
          {
            path:'/xiaoxi/qygg/gdxx',
            component:require('./components/xiaoxi/qygg/gdxx/gdxx.vue').default,
            name:'固定消息'
          },
          {
            //如果用户随便输入地址，转到首页
            path:'*',
            redirect:'/xiaoxi/qygg/xx'
          }
        ]
      },
      {
        path:'/xiaoxi/xtjqr',
        component:require('./components/xiaoxi/xtjqr/xtjqr.vue').default,
        name:"小特机器人"
      },
      {
        path:'/xiaoxi/rczs',
        component:require('./components/xiaoxi/rczs/rczs.vue').default,
        name:"日程助手"
      },
      {
        path:'/xiaoxi/rczs',
        component:require('./components/xiaoxi/rczs/rczs.vue').default,
        name:"网盘助手"
      },
      {
        path:'/xiaoxi/rczs',
        component:require('./components/xiaoxi/rczs/rczs.vue').default,
        name:"项目助手"
      },
      {
        //如果用户随便输入地址，转到首页
        path:'*',
        redirect:'/xiaoxi/qygg/xx'
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
    path:'/rili/',
    component:rili.default,
    name:'日历',
    children:[
        {
        path:'/rili/wdrc/',
        component:require('./components/rili/wdrc/wdrc.vue').default,
        name:"我的日程"
        },
        {
          path:'/rili/tdrc',
          component:require('./components/rili/tdrc/tdrc.vue').default,
          name:"团队日程"
        },
        {
          path:'/rili/cyrc',
          component:require('./components/rili/cyrc/cyrc.vue').default,
          name:"成员日程"
        },
        {
          //如果用户随便输入地址，转到首页
          path:'*',
          redirect:'/rili/wdrc'
        }
    ]
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
        path:'/wangpan/ziliao',
        component:require('./components/wangpan/ziliao/ziliao.vue').default,
        name:"资料共享",
      },
      {
        path:'/wangpan/zhaopian',
        component:require('./components/wangpan/zhaopian/zhaopian.vue').default,
        name:"公司照片",
      },
      {
        path:'/wangpan/zhidu',
        component:require('./components/wangpan/zhidu/zhidu.vue').default,
        name:"公司制度",
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
    count:1,
    wangpan:[]
  },
  mutations:{
    GETALL(state,payload){
      state.wangpan = payload;
    },
    DEL(state,payload){
      state.wangpan = state.wangpan.filter(item => {
          return item.id != payload.id;
      })
    },
    ADD(state,payload){
        state.wangpan.push(payload);
    },
  },
  actions:{
    async GETALL(context,payload){
      // 请求数据
      var data = await fetch('/XCC/').then(res => res.json());
      context.commit('GETALL',data);
    },
    async DEL({commit},payload){
      // 发送delete请求到json-server服务器。自动帮我们删除这条数据，操作data.json文件
      var data = await fetch('/XCC/'+payload.id,{
          "method":"DELETE"
      }).then(res => res.json());
      commit('DEL',payload);
    },
    async ADD({commit},payload){
        // 上传数据
        var data = await fetch('XCC/',{
            "method":"POST",
            "headers":{
                "Content-Type":"application/json"
            },
            "body":JSON.stringify(payload)
        }).then(res => res.json());

        commit('ADD',data);
    },
  },
  getters:{
    zhaopian(state){
      return state.wangpan.filter(item => item.judge == 'zhaopian')
    },
    zhidu(state){
      return state.wangpan.filter(item => item.judge == 'zhidu')
    },
    ziliao(state){
      return state.wangpan.filter(item => item.judge == 'ziliao')
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
