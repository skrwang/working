<template>
    <div class="box">
        <div class="header">
            <div class="head">
                <span>
                    <img src="../imgs/qygg.png">
                    企业公告
                    <i class="iconfont icon-jiantouarrow483"></i>
                    <b>用于全企业成员发布公告</b>
                </span>
                <span>
                    <img src="../imgs/cy.png">
                    <img src="../imgs/sz.png">
                </span>
            </div>
            <ul class="con">
                <li v-for="item of DataLis" :class="{cur : $route.path.indexOf(item.url) != -1}">
                    <router-link :to='item.url' :class="{cur : $route.path.indexOf(item.url) != -1}">
                    {{item.title}}
                    </router-link>
                </li>
            </ul>   
        </div> 
        <router-view></router-view>        
    </div>
</template>

<script>
export default {
    data(){
        return{
            DataLis:[
                {
                title:'消息',
                url:'/xiaoxi/qygg/xx',
                },
                {
                title:'文件',
                url:'/xiaoxi/qygg/file',
                },
                {
                title:'固定消息',
                url:'/xiaoxi/qygg/gdxx',
                },
            ]
        }
    }
}
</script>


<style lang = 'scss' scoped>
    .box{
        float: left;
        width: 100%;
        height: 100%; 
        position: relative;
        background-color: rgb(238,238,238); 
    }
    .header{
        width: 100%;
        height: 86px;
        padding: 0 0 0 15px;
        box-sizing: border-box;
        background: rgb(253,253,253);
    }
    ul li{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    .head{
        height: 50px;
        line-height: 50px;
        overflow: hidden;
    }
    .head span:nth-child(1){
        float: left;
    }
    .head span:nth-child(2){
        float: right;
        margin-right: 20px;
    }
    .head span:nth-child(1) img{
        position: relative;
        left: -2px;
        top: -3px;
    }
    .head span:nth-child(2) img{
        margin: 0 10px;
        padding: 0 10px;
    }
    .head span:nth-child(1) b{
        padding: 0 10px;
        color: #aaa;
        font-weight: normal;
        font-size: 14px;
    }
    .head span img{
        vertical-align: middle;
        cursor: pointer;
    }
    .con{
        overflow: hidden;
        padding: 0 20px;
        box-sizing: border-box;
    }
    .con li{
        height: 38px;
        float: left;
    }
    .con li a{
        display: inline-block;
        width: 80px;
        text-align: center;
        margin-right: 22px;
        padding: 5px 9px 9px;
        box-sizing: border-box;
        color: #333;
        font-size: 14px;
        border-bottom: solid 2px transparent;
    }
    .con li a.cur{
        color: #22d7bb;
        border-bottom: solid 2px #22d7bb;
    }

</style>


