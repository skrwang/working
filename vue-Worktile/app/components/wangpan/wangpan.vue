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
            <!-- 文件夹 -->
            <div class="toc-section file-section">
                <ul class="qiyewangpan">
                    <li>
                        <router-link :to="wList[0].url" class="txt" :class="{cur : $route.path.indexOf(item.url) != -1}">
                            <i class="iconfont jiantou" :class="wList[0].icon" @click="isshow = !isshow"></i>
                            <i class="iconfont pan" :class="wList[0].wangpan"></i>
                            {{wList[0].title}}
                        </router-link>
                        <ul class="ng-scope" :class="!isshow ? 'show' : ''">
                            <li v-for="(item,index) of list2">
                                <a href="javascript:" @click="checkItem(index)" :class="{cur : index == active}"> 
                                    <i class="iconfont" :class="item.icon"></i>
                                    {{item.title}}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="gerenwangpan">
                    <li>
                        <router-link :to="wList[1].url" class="txt" :class="{cur : $route.path.indexOf(item.url) != -1}">
                            <i class="iconfont jiantou" :class="wList[1].icon" @click="isshow = !isshow"></i>
                            <i class="iconfont pan" :class="wList[1].wangpan"></i>
                            {{wList[1].title}}
                        </router-link>
                    </li>
                </ul>
            </div>
            <!-- 成员 -->
            <div class="toc-section">
                <a href="javascript:" class="section-header txt append">
                    <i class="iconfont" :class="wList[2].icon"></i>
                    {{wList[2].title}}
                    <i class="iconfont" :class="wList[2].tianjia"></i>
                </a>
            </div>
            <!-- 标签 -->
             <div class="toc-section">
                 <a href="javascript:" class="txt append">
                     <i class="iconfont" :class="wList[3].icon"></i>
                    {{wList[3].title}}
                    <i class="iconfont" :class="wList[3].tianjia"></i>
                 </a>
             </div>
             <!-- 与我共享 -->
             <div class="toc-section selectable">
                 <router-link :to="wList[4].url" class="txt" :class="{cur : $route.path.indexOf(item.url) != -1}">
                    <i class="iconfont jiantou" :class="wList[4].icon" @click="isshow = !isshow"></i>
                    {{wList[4].title}}
                </router-link>
             </div>
             <!-- 回收站 -->
             <div class="toc-section selectable">
                 <router-link :to="wList[5].url" class="txt" :class="{cur : $route.path.indexOf(item.url) != -1}">
                    <i class="iconfont jiantou" :class="wList[5].icon" @click="isshow = !isshow"></i>
                    {{wList[5].title}}
                </router-link>
             </div>
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
                isshow:true,
                active:-1,
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
                ],
                list2:[
                    {
                        title:"资料共享",
                        icon:"icon-weibiaoti5"
                    },
                    {
                        title:"公司照片",
                        icon:"icon-weibiaoti5"
                    },
                    {
                        title:"公司制度",
                        icon:"icon-weibiaoti5"
                    }
                ]
            }
        },
        methods:{
            checkItem(index){
                this.active = index;
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
        .toc-section {
            margin-bottom: 2px;
            width: 240px;
            .qiyewangpan .pan {
                color: rgb(34, 215, 187);
            }
            .gerenwangpan .pan {
                color: rgb(249, 105, 170);
            }
            ul li .cur {
                color: #22d7bb;
                background: rgb(231,249,246);
                border-right: 4px solid #22d7bb;
            }
            ul li {
                position: relative;
                .ng-scope {
                    width: 100%;
                    font-size: 14px;
                    display: none;
                    a {
                        display: -webkit-box;
                        display: flex;
                        display: -ms-flexbox;
                        display: -webkit-flex;
                        -ms-flex-direction: row;
                        flex-direction: row;
                        padding: 8px 10px 8px 18px;
                        line-height: 24px;
                        cursor: pointer;
                        color: #666;
                        transition: all .2s;
                        padding-left: 80px !important;
                        margin-bottom: 2px;
                        .iconfont {
                            margin-right: 5px;
                        }
                    }
                    a .cur {
                        color: #22d7bb;
                        background: rgb(231,249,246);
                        border-right: 4px solid #22d7bb;
                    }
                    li:nth-child(1) a .iconfont{
                        color: rgb(34, 215, 187);
                    }
                    li:nth-child(2) a .iconfont{
                        color: rgb(112, 118, 250);
                    }
                    li:nth-child(3) a .iconfont{
                        color: rgb(249, 105, 170);
                    }
                }
                .show{
                    display: block;
                }
            }
        }
        
        .toc-section .append {
            padding-left: 40px !important;
            .icon-jiahao1 {
                position: absolute;
                right: 20px;
                display: none;
            }
            &:hover .icon-jiahao1 {
                display: block;
            }
        }
        .toc-section .txt {
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
            .jiantou {
                padding-left: 20px;
                margin-right: 6px;
            }
            .pan {
                margin-right: 5px;
            }
            &:hover,.ng-scope a:hover{
                box-shadow: 0 0 8px 2px #eee;
                background: 0 0!important;
                /* color: #333; */
            }
        }
    }
    .zs {
        float: left;
        width: calc(100% - 240px - 1px);
        height: 100%;
    }
</style>


