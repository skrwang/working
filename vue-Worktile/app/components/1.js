import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(Vuex)
Vue.use(VueRouter) //安装路由

// 使用路由管理几个子组件
// 引入组件
const Index = require('./components/index/index.vue');
const News = require('./components/news/news.vue');
const Video = require('./components/video/video.vue');

// 路由配置
const r = [
    {
        path: '/index',
        component: Index.default,
        name: '首页'
    },
    {
        path: '/news',
        component: News.default,
        name: '新闻'
    },
    {
        path: '/video/',
        component: Video.default,
        name: '视频',
        children: [
            // 配置子路由
            {
                path: '/video/oumei',
                component: require('./components/video/oumei/oumei.vue').default,
                name: '欧美视频'
            },
            {
                path: '/video/guochan/',
                component: require('./components/video/guochan/guochan.vue').default,
                name: '国产视频',
                children: [
                    {
                        path: '/video/guochan/dalu',
                        component: require('./components/video/guochan/dalu/dalu.vue').default,
                        name: '大陆国产视频'
                    },
                    {
                        path: '/video/guochan/gangao',
                        component: require('./components/video/guochan/gangao/gangao.vue').default,
                        name: '港澳国产视频'
                    },
                    {
                        path: '*',
                        redirect: '/video/guochan/gangao'
                    }
                ]
            },
            {
                path: '*',
                redirect: '/video/guochan/dalu'
            }
        ]
    },
    {
        // 如果用随便输入地址，转到首页
        path: '*',
        redirect: '/index'
    }
]

// 路由初始化
const router = new VueRouter({
    // 这里的routes 键必须这么写
    routes: r
})

// 设置全局守卫
router.beforeEach((to, from, next) => {
    // console.log(from);
    // console.log(to);
    document.title = to.name;
    next();
})

// 配置vuex
const store = new Vuex.Store({
    state: {
        count: 1
    }
})

new Vue({
    el: '#app',
    store,
    router,
    // render: h => h(App)
    components: {
        App
    }
})
