<template>
    <div>
        <ul>
            <li @click="routerGo(item.url)" v-for="item of tabNav" :class="{cur:$route.path.indexOf(item.url) != -1}">{{item.title}}</li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
   data () {
        return {
            tabNav:[
                {
                url:'/xiangmu/peizhi/gaoji/tixing',
                title:"提醒管理",
                },{
                url:'/xiangmu/peizhi/gaoji/tongzhi',
                title:"通知管理"
                },{
                url:'/xiangmu/peizhi/gaoji/shijian',
                title:"事件管理"
                }
            ]
        }
    },
     methods:{
        routerGo(url){
        // 路由跳转
        this.$router.push({path:url});
        // console.log(this.$route)
        }
    }
}
</script>
<style lang="scss" scoped >
   ul{
        overflow: hidden;
        padding-left: 41px;
        height: 38px;
        line-height: 38px;
        background-color: #fff; 
        width: 100%;
       li{
           float: left;
           margin-right: 40px;
           font-size: 14px;
           color: #888;
           cursor: pointer;
       }
   }
   .cur{
        color: #22d7bb;
   }
</style>
