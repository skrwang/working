<template>
    <div>
        <div class="header">
            <span><i class="iconfont icon-gongxiangtubiaozhuangtaileicaozuolei34"></i> 配置中心</span>
            <ul>
               <li @click="routerGo(item.url)" v-for="item of tabNav" :class="{cur:$route.path.indexOf(item.url) != -1}">{{item.title}}</li>
            </ul>
        </div>
        <div class="body">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            tabNav:[
                {
                url:'/xiangmu/peizhi/xiangmu/',
                title:"项目",
                },{
                url:'/xiangmu/peizhi/renwu/',
                title:"任务"
                },{
                url:'/xiangmu/peizhi/anquan/',
                title:"安全"
                },{
                url:'/xiangmu/peizhi/gaoji/',
                title:"高级"
                },{
                url:'/xiangmu/peizhi/quanju/',
                title:"全局"
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
    .header{
        background: rgba(253,253,253,.97);
        padding: 0 15px;
        height: 50px;
        line-height: 50px;
        box-sizing: border-box;
        span{
            float: left;
        }
    }
    .icon-gongxiangtubiaozhuangtaileicaozuolei34{
        color: #22d7bb;
    }
    ul{
        overflow: hidden;
        float: right;
        width: 60%;
    }
    ul li{
        float: left;
        padding:0 20px;
        cursor: pointer;
        margin-right: 20px;
    }
    ul li.cur{
        color: #22d7bb;
        border-bottom: 2px solid #22d7bb;
    }
</style>
