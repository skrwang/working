<template>
    <div class="rbox">
        <div class="wpLeft">
            <div class="title">
                <p>网盘</p>
            </div>
            <div class="search-area">
                <i class="iconfont icon-icon-"></i>
                <input type="text" placeholder="搜索文件、文件夹">
                <i class="icondel">×</i>
            </div>
            <ul class="panList">
                <li v-for="item of wList">
                    <router-link :to='item.url' class="txt" :class="{cur : $route.name == item.title}">
                        <i class="iconfont jiantou" :class="item.icon"></i>
                        <i class="iconfont pan" :class="item.wangpan"></i>
                         {{item.title}}
                        <i class="iconfont tianjia" :class="item.tianjia"></i>
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
                wList:[
                    {
                        icon:"icon-jiantou",
                        wangpan:"icon-weibiaoti5",
                        title:"企业网盘",
                        url:"/wangpan/qiye/"
                    },
                    {
                        icon:"icon-jiantou",
                        wangpan:"icon-weibiaoti5",
                        title:"个人网盘",
                        url:"/wangpan/geren/"
                    },
                    {
                        icon:"icon-jiantou",
                        tianjia:"icon-jiahao1",
                        title:"成员",
                        url:"/wangpan/chengyuan/"
                    },
                    {
                        icon:"icon-jiantou",
                        tianjia:"icon-jiahao1",
                        title:"标签",
                        url:"/wangpan/biaoqian/"
                    },
                    {
                        icon:"icon-gongxiang",
                        title:"与我共享",
                        url:"/wangpan/gongxiang/"
                    },
                    {
                        icon:"icon-huishouzhan",
                        title:"回收站",
                        url:"/wangpan/huishouzhan/"
                    }
                ]
            }
        }
    }
</script>


<style lang = 'scss' scoped>
    a {
        text-decoration: none;
        color: #666;
    }
    .rbox {
        overflow: hidden;
        height: 100%;
        background: rgb(238, 238, 238);
    }
    .wpLeft{
        float: left;
        position: relative;
        width: 240px;
        height: 100%;
        background: rgba(253,253,253,.95);
        border-right: 1px solid #ddd;
        .title {
            height: 50px;
            p {
                float: left;
                margin: 0 20px;
                color: #333;
                line-height: 50px;
                font-size: 16px;
            }
        }
        .search-area {
            padding: 0 20px 10px;
            position: relative;
            .icon-icon- {
                position: absolute;
                top: 11px;
                left: 28px;
                color: #8f8f8f;
            }
            .icondel {
                position: absolute;
                top: 6px;
                right: 35px;
                font-style: normal;
            }
            input {
                background: #f3f3f3;
                -webkit-box-shadow: none;
                box-shadow: none;
                color: #666;
                height: 36px;
                font-size: 14px;
                padding-left: 28px;
                border-radius: 20px;
                border: 1px solid transparent;
                outline: none;
            }
        }
        .panList {
            width: 240px;
            list-style: none;
        }
        .panList li .txt{
            text-decoration: none;
            color: #666;
            cursor: pointer;
            padding: 8px 10px 8px 18px;
            line-height: 24px;
            transition: all .2s;
            display: -webkit-box;
            display: flex;
            display: -ms-flexbox;
            display: -webkit-flex;
            -ms-flex-direction: row;
            flex-direction: row;
            font-size: 14px;
            position: relative;
        }
        .panList li .txt .jiantou {
            padding-left: 20px;
            margin-right: 6px;
        }
        .panList li .txt:hover {
            box-shadow: 0 0 8px 2px #eee;
            background: 0 0!important;
            color: #333;
        }
        .panList li .cur{
            color: #22d7bb;
            border-right: 4px solid #22d7bb;
        }
        .panList li:nth-child(1) .txt .pan {
            color: rgb(34, 215, 187);
        }
        .panList li:nth-child(2) .txt .pan {
            color: rgb(249, 105, 170);
        }
        .panList li .txt .pan {
            margin-right: 4px;
        }
        .panList li .txt .tianjia {
            position: absolute;
            top: 8px;
            right: 10px;
            display: none;
            transition: all .2s;
        }
        .panList li:hover .txt .tianjia {
            display: block;
        }
    }
    .zs {
        float: left;
        width: calc(100% - 240px - 1px);
        height: 100%;
    }
</style>


