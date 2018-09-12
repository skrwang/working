<template>
    <div class="box">
        <div class="header">
            <div class="head">
                <span>
                    <img src="../imgs/rczs.png">
                    日程助手
                    <i class="iconfont icon-jiantouarrow483"></i>
                </span>
                <span>
                    <a href="#">全部标记为已读</a>
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
                title:'未读',
                url:'/xiaoxi/rczs/wd',
                },
                {
                title:'已读',
                url:'/xiaoxi/rczs/yd',
                },
                {
                title:'待处理',
                url:'/xiaoxi/rczs/dcl',
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
        a{
            margin: 0 10px;
            position: relative;
            top: 2px;
            color: #22d7bb;
            font-size: 14px;
        }
        a:hover{
            text-decoration: underline;
        }
    }
    .head span:nth-child(1) img{
        position: relative;
        left: 0px;
        top: -2px;
    }
    .head span:nth-child(2) img{
        margin: 0 10px;
        padding: 0 10px;
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


