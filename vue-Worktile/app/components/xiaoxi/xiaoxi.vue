<template>
    <div>
        <div class="rili_left">
            <ul>
                <li v-for="item of vList" :class="{cur : $route.name == item.title}">
                    <router-link :to='item.url'>
                         {{item.title}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="zs">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            vList:[
                {
                    title:'企业公告',
                    url:'/xiaoxi/qygg/'
                },
                {
                    title:'小特机器人',
                    url:'/xiaoxi/xtjqr'
                }
            ]
        }
    }
}
</script>


<style lang = 'scss' scoped>
    .rili_left{
        float: left;
        position: relative;
        width: 240px;
        background: rgba(253,253,253,.95);
        border-right: 1px solid #ddd;
    }
    .rili_left > ul{
        width: 240px;
        list-style: none;
    }
    .rili_left > ul > li{ 
        height: 50px;
        line-height: 50px;
        text-align: center;
    }
    .rili_left > ul > li.cur{
        background: #18bfa4;
    }
    .rili_left > ul > li > a{
        text-decoration: none;
    }
    .zs {
        float: left;
        width: calc(100% - 240px - 1px);
        height: 100%;
        background: brown;
    }
</style>