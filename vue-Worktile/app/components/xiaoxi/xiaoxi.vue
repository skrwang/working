<template>
    <div class="box">
        <div class="rili_left">
            <p class="head">
                <span>消息<img src="./imgs/xx.png"></span>
                <span><img src="./imgs/tj1.png"></span>
            </p>
            <p class="sousuo">
                <i class="iconfont icon-icon-"></i>
                <input type="text" placeholder="搜索成员、消息">
            </p>
            <ul>
                <li v-for="item of vList" :class="{cur : $route.path.indexOf(item.url) != -1}">
                    <router-link :to='item.url' :class="{cur : $route.path.indexOf(item.url) != -1}">
                        <img :src="item.img">
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
                    url:'/xiaoxi/qygg/',
                    img:'app/components/xiaoxi/imgs/qygg.png'
                },
                {
                    title:'小特机器人',
                    url:'/xiaoxi/xtjqr/',
                    img:'app/components/xiaoxi/imgs/xtjqr.png'
                },
                {
                    title:'日程助手',
                    url:'/xiaoxi/rczs/',
                    img:'app/components/xiaoxi/imgs/rczs.png'
                },
                {
                    title:'网盘助手',
                    url:'/xiaoxi/wpzs/',
                    img:'app/components/xiaoxi/imgs/wpzs.png'
                },
                {
                    title:'项目助手',
                    url:'/xiaoxi/xmzs/',
                    img:'app/components/xiaoxi/imgs/xmzs.png'
                }
            ]
        }
    },
    methods:{
        
    }
}
</script>


<style lang = 'scss' scoped>
    .box .head{
        height: 50px;
        box-sizing: border-box;
        padding: 15px 20px;
        overflow: hidden;
    }
    .box .head span:nth-child(1){
        cursor: pointer;
        float: left;
    }
    .box .head span:nth-child(1) img{
        vertical-align: middle;
        margin-top: -4px;
        margin-left: 4px;
    }
    .box .head span:nth-child(2){
        cursor: pointer;
        float: right;
    }
    .rili_left{
        float: left;
        position: relative;
        width: 240px;
        height: 100%;
        background: rgb(252,252,252);
        border-right: 1px solid #ddd;
    }
    .rili_left .sousuo{
        position: relative;
        padding: 0px 20px 10px;
    }
    .rili_left .sousuo i{
        position: absolute;
        top: 7px;
        left: 28px;
        font-size: 20px;
        color: rgb(143, 143, 143);
    }
    .rili_left .sousuo input{
        width: 170px;
        box-shadow: none;
        color: rgb(102, 102, 102);
        height: 36px;
        font-size: 14px;
        padding-left: 28px;
        background: rgb(243, 243, 243);
        border-radius: 20px;
        border-width: 1px;
        border-style: solid;
        border-color: transparent;
        border-image: initial;
        outline: none;
    }
    .rili_left .sousuo input:hover{
        background: #fff;
        border: 1px solid rgb(221, 221, 221);
    }
    .rili_left > ul{
        width: 240px;
        list-style: none;
    }
    .rili_left > ul > li{ 
        height: 50px;
        text-align: left;
        border-radius: 0;
        color: #666;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        position: relative;
        padding: 11px 0 11px 30px;
        line-height: 23px;
        box-sizing: border-box;
        border-right: 4px solid transparent;
    }
    .rili_left > ul > li:hover{
        background-color: #fff;
        box-shadow: 3px 0 8px 2px #eee;
    }
    .rili_left > ul > li a{
        line-height: 30px;
        color: #666;
        font-size: 14px;
    }
    .rili_left > ul > li a img{
        vertical-align: middle;
        margin-right: 3px;
        border-radius: 50%;
    }
    .rili_left > ul > li.cur{
        border-right: 4px solid #22d7bb;
        background: #e7f9f6;
    }
    .rili_left > ul > li a.cur{
        color: #22d7bb;
    }
    .rili_left > ul > li > a{
        text-decoration: none;
    }
    .zs {
        float: left;
        width: calc(100% - 240px - 1px);
        height: 100%;
        background: rgb(238, 238, 238);
    }
</style>