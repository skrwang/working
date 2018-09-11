<template>
    <div>
        <ul>
            <li v-for="item of tabNav" :class="{cur : item.title==$route.name}">
                <router-link :to='item.url'>
                    {{item.title}}
                </router-link>
            </li>
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
                url:'/xiangmu/peizhi/anquan/juese',
                title:"角色管理",
                },{
                url:'/xiangmu/peizhi/anquan/anquan',
                title:"安全管理"
                },{
                url:'/xiangmu/peizhi/anquan/quanxian',
                title:"权限管理"
                }
            ]
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
