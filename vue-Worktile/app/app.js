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
    // name:'消息',
    children:[
      //配置孙子路由
      {
        path:'/xiaoxi/qygg/',
        component:require('./components/xiaoxi/qygg/qygg.vue').default,
        // name:"企业公告",
        children:[
          {
            path:'/xiaoxi/qygg/xx/',
            component:require('./components/xiaoxi/qygg/xx/xx.vue').default,
            // name:'消息'
          },
          {
            path:'/xiaoxi/qygg/file',
            component:require('./components/xiaoxi/qygg/file/file.vue').default,
            // name:'文件'
          },
          {
            path:'/xiaoxi/qygg/gdxx',
            component:require('./components/xiaoxi/qygg/gdxx/gdxx.vue').default,
            // name:'固定消息'
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
        // name:"小特机器人",
        children:[
          {
            path:'/xiaoxi/xtjqr/xx/',
            component:require('./components/xiaoxi/xtjqr/xx/xx.vue').default,
            // name:'消息'
          },
          {
            path:'/xiaoxi/xtjqr/file',
            component:require('./components/xiaoxi/xtjqr/file/file.vue').default,
            // name:'文件'
          },
          {
            path:'/xiaoxi/xtjqr/gdxx',
            component:require('./components/xiaoxi/xtjqr/gdxx/gdxx.vue').default,
            // name:'固定消息'
          },
          {
            //如果用户随便输入地址，转到首页
            path:'*',
            redirect:'/xiaoxi/xtjqr/xx/'
          }
        ]
      },
      {
        path:'/xiaoxi/rczs',
        component:require('./components/xiaoxi/rczs/rczs.vue').default,
        // name:"日程助手",
        children:[
          {
            path:'/xiaoxi/rczs/wd/',
            component:require('./components/xiaoxi/rczs/wd/wd.vue').default,
            // name:'未读'
          },
          {
            path:'/xiaoxi/rczs/yd',
            component:require('./components/xiaoxi/rczs/yd/yd.vue').default,
            // name:'已读'
          },
          {
            path:'/xiaoxi/rczs/dcl',
            component:require('./components/xiaoxi/rczs/dcl/dcl.vue').default,
            // name:'待处理'
          },
          {
            //如果用户随便输入地址，转到首页
            path:'*',
            redirect:'/xiaoxi/rczs/wd/'
          }
        ]
      },
      {
        path:'/xiaoxi/wpzs',
        component:require('./components/xiaoxi/wpzs/wpzs.vue').default,
        // name:"网盘助手",
        children:[
          {
            path:'/xiaoxi/wpzs/wd/',
            component:require('./components/xiaoxi/wpzs/wd/wd.vue').default,
            // name:'未读'
          },
          {
            path:'/xiaoxi/wpzs/yd',
            component:require('./components/xiaoxi/wpzs/yd/yd.vue').default,
            // name:'已读'
          },
          {
            path:'/xiaoxi/wpzs/dcl',
            component:require('./components/xiaoxi/wpzs/dcl/dcl.vue').default,
            // name:'待处理'
          },
          {
            //如果用户随便输入地址，转到首页
            path:'*',
            redirect:'/xiaoxi/wpzs/wd/'
          }
        ]
      },
      {
        path:'/xiaoxi/xmzs',
        component:require('./components/xiaoxi/xmzs/xmzs.vue').default,
        // name:"项目助手",
        children:[
          {
            path:'/xiaoxi/xmzs/wd/',
            component:require('./components/xiaoxi/xmzs/wd/wd.vue').default,
            // name:'未读'
          },
          {
            path:'/xiaoxi/xmzs/yd',
            component:require('./components/xiaoxi/xmzs/yd/yd.vue').default,
            // name:'已读'
          },
          {
            path:'/xiaoxi/xmzs/dcl',
            component:require('./components/xiaoxi/xmzs/dcl/dcl.vue').default,
            // name:'待处理'
          },
          {
            //如果用户随便输入地址，转到首页
            path:'*',
            redirect:'/xiaoxi/xmzs/wd/'
          }
        ]
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
        path:'/xiangmu/wode',
        name:'我的项目',
        component: require('./components/xiangmu/wode/wode.vue').default,
        children:[
          {
            path:'/xiangmu/wode/fuze',
            name:'我负责的',
            component: require('./components/xiangmu/wode/fuze/fuze.vue').default,
          },
          {
            path:'/xiangmu/wode/fenpei',
            name:'我分配的',
            component: require('./components/xiangmu/wode/fenpei/fenpei.vue').default,
          },
          {
            path:'/xiangmu/wode/canyu',
            name:'我参与的',
            component: require('./components/xiangmu/wode/canyu/canyu.vue').default,
          },
          {
            path:'/xiangmu/wode/chuangjian',
            name:'我创建的',
            component: require('./components/xiangmu/wode/chuangjian/chuangjian.vue').default,
          }
        ]
      },
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
            children:[
              {
                path: '/xiangmu/peizhi/quanju/gongzuo',
                name: '工作组件',
                component: require('./components/xiangmu/peizhi/quanju/gongzuo/gongzuo.vue').default,
              }
            ]
          }
        ]
      },
      {
        path: '/xiangmu/huishou',
        name: '回收站',
        component: require('./components/xiangmu/huishou/huishou.vue').default,
      },
      {
        //如果用户随便输入地址，转到首页
        path: '*',
        redirect: '/xiangmu/wode/'
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
    wangpan:[],
    corporator:[]
  },
  mutations:{
    GETALL(state,payload){
      state.wangpan = payload;
    },
    CGETALL(state,payload){
      state.corporator = payload;
    },
    CADD(state,payload){
      state.corporator.push(payload);
    }
  },
  actions:{
    async GETALL(context,payload){
      // 请求数据
      var data = await fetch('/XCC/').then(res => res.json());
      context.commit('GETALL',data);
    },
    async CGETALL(context,payload){
      // 请求数据
      var data = await fetch('/corporator/').then(res => res.json());
      console.log(data,'woshidata');
      context.commit('CGETALL',data);
    },
    async CADD({commit},payload){
      // 上传数据
      var data = await fetch('/corporator/',{
          "method":"POST",
          "headers":{
              "Content-Type":"application/json"
          },
          "body":JSON.stringify(payload)
      }).then(res => res.json());

      commit('CADD',data);
  }
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
