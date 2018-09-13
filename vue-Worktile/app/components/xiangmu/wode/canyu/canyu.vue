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
                url:'/xiangmu/wode/canyu/hdrw',
                title:"活动任务",
                },{
                url:'/xiangmu/wode/canyu/wcrw',
                title:"完成任务"
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
