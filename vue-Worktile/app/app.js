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
            path:'/xiaoxi/qygg/xx',
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
            children:[
              {
                path:'/xiangmu/wode/fuze/hdrw',
                name:'活动任务',
                component:require('./components/xiangmu/wode/fuze/hdrw/hdrw.vue').default
              },{
                path:'/xiangmu/wode/fuze/wcrw',
                name:'完成任务',
                component:require('./components/xiangmu/wode/fuze/wcrw/wcrw.vue').default
              },{
                path: '*',
                redirect: '/xiangmu/wode/fuze/hdrw'
              }
            ]
          },
          {
            path:'/xiangmu/wode/fenpei',
            name:'我分配的',
            component: require('./components/xiangmu/wode/fenpei/fenpei.vue').default,
            children: [
              {
                path: '/xiangmu/wode/fenpei/hdrw',
                name: '活动任务',
                component: require('./components/xiangmu/wode/fenpei/hdrw/hdrw.vue').default
              }, {
                path: '/xiangmu/wode/fenpei/wcrw',
                name: '完成任务',
                component: require('./components/xiangmu/wode/fenpei/wcrw/wcrw.vue').default
              }, {
                path: '*',
                redirect: '/xiangmu/wode/fenpei/hdrw'
              }
            ]
          },
          {
            path:'/xiangmu/wode/canyu',
            name:'我参与的',
            component: require('./components/xiangmu/wode/canyu/canyu.vue').default,
            children: [
              {
                path: '/xiangmu/wode/canyu/hdrw',
                name: '活动任务',
                component: require('./components/xiangmu/wode/canyu/hdrw/hdrw.vue').default
              }, {
                path: '/xiangmu/wode/canyu/wcrw',
                name: '完成任务',
                component: require('./components/xiangmu/wode/canyu/wcrw/wcrw.vue').default
              }, {
                path: '*',
                redirect: '/xiangmu/wode/canyu/hdrw'
              }
            ]
          },
          {
            path:'/xiangmu/wode/chuangjian',
            name:'我创建的',
            component: require('./components/xiangmu/wode/chuangjian/chuangjian.vue').default,
            children: [
              {
                path: '/xiangmu/wode/chuangjian/hdrw',
                name: '活动任务',
                component: require('./components/xiangmu/wode/chuangjian/hdrw/hdrw.vue').default
              }, {
                path: '/xiangmu/wode/chuangjian/wcrw',
                name: '完成任务',
                component: require('./components/xiangmu/wode/chuangjian/wcrw/wcrw.vue').default
              }, {
                path: '*',
                redirect: '/xiangmu/wode/chuangjian/hdrw'
              }
            ]
          },
          {
            //如果用户随便输入地址，转到首页
            path: '*',
            redirect: '/xiangmu/wode/fuze/'
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
              },
              {
                //如果用户随便输入地址，转到首页
                path: '*',
                redirect: '/xiangmu/peizhi/xiangmu/xiangmu'
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
              },
              {
                //如果用户随便输入地址，转到首页
                path: '*',
                redirect: '/xiangmu/peizhi/renwu/renwu'
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
              {
                //如果用户随便输入地址，转到首页
                path: '*',
                redirect: '/xiangmu/peizhi/anquan/juese'
              }
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
              {
                //如果用户随便输入地址，转到首页
                path: '*',
                redirect: '/xiangmu/peizhi/gaoji/tixing'
              }
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
              },
              {
                //如果用户随便输入地址，转到首页
                path: '*',
                redirect: '/xiangmu/peizhi/quanju/gongzuo'
              }
            ]
          },
          {
            //如果用户随便输入地址，转到首页
            path: '*',
            redirect:'/xiangmu/peizhi/xiangmu/xiangmu'
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
        redirect: '/xiangmu/wode/fuze/'
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
    path:"/tongxun/",
    component:tongxun.default,
    name:'通讯录',
    children:[
      //配置子路由
      {
        path:'/tongxun/qygg',
        component:require('./components/tongxun/qygg/qygg.vue').default,
        name:"企业公告"
      },
      {
        path:'/tongxun/imTime',
        component:require('./components/tongxun/imTime/imTime.vue').default,
        name:"日程助手"
      },
      {
        path:'/tongxun/wpzs',
        component:require('./components/tongxun/wpzs/wpzs.vue').default,
        name:"网盘助手"
      },
      {
        path:'/tongxun/xmzs',
        component:require('./components/tongxun/xmzs/xmzs.vue').default,
        name:"项目助手"
      },
      {
        path:'/tongxun/xtjqr',
        component:require('./components/tongxun/xtjqr/xtjqr.vue').default,
        name:"小特机器人"
      },
      {
        path:'/tongxun/xcc/',
        component:require('./components/tongxun/xcc/xcc.vue').default,
        name:"刑聪聪"
      },
      {
        path:'/tongxun/wzy',
        component:require('./components/tongxun/wzy/wzy.vue').default,
        name:"王梓烨"
      },
      {
        //如果用户随便输入地址，转到首页
        path:'*',
        redirect:'/tongxun/xcc/'
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
    corporator:[],
    todos:[],
    apy:[],
    apy1:[],
    apy2:[],
    apy3:[],
    xiaoxi:[],
    corporator:[],
    rili:[]
  },
  mutations:{
    XGETALL(state,payload){
      state.wangpan = payload;
    },
    XADD(state,payload){
      state.wangpan.push(payload);
    },
    XDEL(state,payload){
      state.wangpan = state.wangpan.filter(item => {
          return item.id != payload.id;
      })
    },
    FADD(state,payload){
      state.xiaoxi.push(payload);
    },
    FDEL(state,payload){
      state.xiaoxi = state.xiaoxi.filter(item => {
          return item.id != payload.id;
      })
    },
    FGETALL(state,payload){
      state.xiaoxi = payload;
    },
    CGETALL(state,payload){
      state.corporator = payload;
    },
    CADD(state,payload){
      state.corporator.push(payload);
    },
    MJD(state, payload) {
         state.rili = payload;
    },
    MADD(state, payload) {
      state.rili.push(payload)
    },
    YGETALL(state, payload) {
        state.todos = payload;
    },
    YDEL(state, payload) {
      state.todos = state.todos.filter(item => {
        return item.id != payload.id;
      })
    },
    YADD(state, payload) {
      state.todos.push(payload);
    },
    YUGETALL(state, payload) {
      state.apy = payload;
    },
    YUDEL(state, payload) {
      state.apy = state.apy.filter(item => {
        return item.id != payload.id;
      })
    },
    YUADD(state, payload) {
      state.apy.push(payload);
    },
    YU1GETALL(state, payload) {
      state.apy1 = payload;
    },
    YU1DEL(state, payload) {
      state.apy1 = state.apy1.filter(item => {
        return item.id != payload.id;
      })
    },
    YU1ADD(state, payload) {
      state.apy1.push(payload);
    },
    YU2GETALL(state, payload) {
      state.apy2 = payload;
    },
    YU2DEL(state, payload) {
      state.apy2 = state.apy2.filter(item => {
        return item.id != payload.id;
      })
    },
    YU2ADD(state, payload) {
      state.apy2.push(payload);
    },
    YU3GETALL(state, payload) {
      state.apy3 = payload;
    },
    YU3DEL(state, payload) {
      state.apy3 = state.apy3.filter(item => {
        return item.id != payload.id;
      })
    },
    YU3ADD(state, payload) {
      state.apy3.push(payload);
    },
  },
  actions:{
    async XGETALL(context,payload){
      // 请求数据
      var data = await fetch('/XCC/').then(res => res.json());
      context.commit('XGETALL',data);
    },
    async XADD({commit},payload){
      // 上传数据
      var data = await fetch('XCC/',{
          "method":"POST",
          "headers":{
              "Content-Type":"application/json"
          },
          "body":JSON.stringify(payload)
      }).then(res => res.json());

      commit('XADD',data);
    },
    async XDEL({commit},payload){
      // 发送delete请求到json-server服务器。自动帮我们删除这条数据，操作data.json文件
      var data = await fetch('/XCC/'+payload.id,{
          "method":"DELETE"
      }).then(res => res.json());
      commit('XDEL',payload);
    },
    async FGETALL(context,payload){
      // 请求数据
      var data = await fetch('/FXY/').then(res => res.json());
      context.commit('FGETALL',data);
    },
    async FADD({commit},payload){
      // 上传数据
      var data = await fetch('FXY/',{
          "method":"POST",
          "headers":{
              "Content-Type":"application/json"
          },
          "body":JSON.stringify(payload)
      }).then(res => res.json());

      commit('FADD',data);
    },
    async FDEL({commit},payload){
      // 发送delete请求到json-server服务器。自动帮我们删除这条数据，操作data.json文件
      var data = await fetch('/FXY/'+payload.id,{
          "method":"DELETE"
      }).then(res => res.json());
      commit('FDEL',payload);
    },
    async CGETALL(context,payload){
      // 请求数据
      var data = await fetch('/corporator/').then(res => res.json());
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
    },
    async MJD(context, payload) {
            //请求数据
             var data = await fetch('/MJL/').then(res => res.json());
            context.commit('MJD',data);
    },
    async MADD({ commit }, payload) {
            //上传数据
           var data = await fetch('MJL/',{
          "method":"POST",
          "headers":{
              'Content-Type': "application/json"
          },
          "body":JSON.stringify(payload)
      }).then(res => res.json());
           console.log(data,"woshicommit请求");
      commit('MADD',data);
    },
    async YGETALL(context, payload) {
      //请求数据
      console.log(context,'lalalal');
      var data = await fetch('/mapList/').then(res => res.json());
      console.log(data);
      context.commit('YGETALL', data);
    },
    async YUGETALL(context, payload) {
      //请求数据
      console.log(context,'lalalal');
      var data = await fetch('/mapList1/').then(res => res.json());
      console.log(data);
      context.commit('YUGETALL', data);
    },
    async YU1GETALL(context, payload) {
      //请求数据
      console.log(context,'lalalal');
      var data = await fetch('/mapList2/').then(res => res.json());
      console.log(data);
      context.commit('YU1GETALL', data);
    },
    async YU2GETALL(context, payload) {
      //请求数据
      console.log(context,'lalalal');
      var data = await fetch('/mapList3/').then(res => res.json());
      console.log(data);
      context.commit('YU2GETALL', data);
    },
    async YU3GETALL(context, payload) {
      //请求数据
      console.log(context,'lalalal');
      var data = await fetch('/mapList4/').then(res => res.json());
      console.log(data);
      context.commit('YU3GETALL', data);
    },
    async YDEL({ commit }, payload) {
      console.log(payload,'wowowow');
      //发送delete请求到json-server服务器,自动帮我删除这条数据,操作 data.json文件
      var data = await fetch('/mapList/' + payload.id, {
        "method": "DELETE"
      }).then(res => res.json());
      commit("YDEL", payload);
    },
    async YUDEL({ commit }, payload) {
      console.log(payload,'wowowow');
      //发送delete请求到json-server服务器,自动帮我删除这条数据,操作 data.json文件
      var data = await fetch('/mapList1/' + payload.id, {
        "method": "DELETE"
      }).then(res => res.json());
      commit("YUDEL", payload);
    },
    async YU1DEL({ commit }, payload) {
      console.log(payload,'wowowow');
      //发送delete请求到json-server服务器,自动帮我删除这条数据,操作 data.json文件
      var data = await fetch('/mapList2/' + payload.id, {
        "method": "DELETE"
      }).then(res => res.json());
      commit("YU1DEL", payload);
    },
    async YU2DEL({ commit }, payload) {
      console.log(payload,'wowowow');
      //发送delete请求到json-server服务器,自动帮我删除这条数据,操作 data.json文件
      var data = await fetch('/mapList3/' + payload.id, {
        "method": "DELETE"
      }).then(res => res.json());
      commit("YU2DEL", payload);
    },
    async YU3DEL({ commit }, payload) {
      console.log(payload,'wowowow');
      //发送delete请求到json-server服务器,自动帮我删除这条数据,操作 data.json文件
      var data = await fetch('/mapList4/' + payload.id, {
        "method": "DELETE"
      }).then(res => res.json());
      commit("YU3DEL", payload);
    },
    async YADD({ commit }, payload) {
      //上传数据
      var data = await fetch('/mapList/', {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(payload)
      }).then(res => res.json());
      commit("YADD", data)
    },
    async YUADD({ commit }, payload) {
      //上传数据
      var data = await fetch('/mapList1/', {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(payload)
      }).then(res => res.json());
      commit("YUADD", data)
    },
    async YU1ADD({ commit }, payload) {
      //上传数据
      var data = await fetch('/mapList2/', {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(payload)
      }).then(res => res.json());
      commit("YU1ADD", data)
    },
    async YU2ADD({ commit }, payload) {
      //上传数据
      var data = await fetch('/mapList3/', {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(payload)
      }).then(res => res.json());
      commit("YU2ADD", data)
    },
    async YU3ADD({ commit }, payload) {
      //上传数据
      var data = await fetch('/mapList4/', {
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(payload)
      }).then(res => res.json());
      commit("YU3ADD", data)
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
