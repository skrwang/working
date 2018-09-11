<template>
    <div>
        <div class="rili_left">
            <div class="header">
                <span class="title">通讯录</span>
                <div class="dropdown">
                    <a href="javascript:;" class="btn iconfont icon-yaoqingchengyuan
">
                    </a>
                </div>
            </div>
            <div class="body-list">
                <div class="search-area">
                    <i class="iconfont icon-icon- cf"></i>
                    <input type="text" placeholder="搜索" class="search">
                </div>
            </div>
            <section>
                <ul class="filter">
                    <li :class="{active : filter}" @click="filter = true">
                        <i class="iconfont icon-renshu
">
                            
                        </i>
                    </li>
                    <li class="divider"></li>
                    <li :class="{active : !filter}" @click="filter = !true">
                        <i class="iconfont icon-chengyuanguanli cygl
">
                            
                        </i>
                    </li>
                </ul>
                <div class="ng-scope" v-if="filter">
                    <!-- 群组列表 -->
                    <div class="toc-section contact-list-warpper">
                        <div class="section-header" @click="jt = !jt">
                            <a href="javascript:;" class="expand-icon">
                                <i class="iconfont" :class="jt ?'icon-jiantou':'icon-jiantouarrow486'"></i>
                            </a>
                            <a href="javascript:;" class="title">群组</a>
                            <a href="javascript:;" class="action">
                                <i class="iconfont sd">##</i>
                            </a>
                        </div>
                        <div class="section-body collapse" :class="!jt ?'in' : ''">
                            <ul style="position: relative;top: 2px;">
                                <li v-for="item of qz" :class="{active:item.title == $route.name}">
                                    <router-link :to='item.url' class="qygg">
                                        <span class="channel-icon">
                                            <i class="iconfont icon-jinghao"></i>
                                        </span>
                                        <span class="name">企业公告</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 机器人列表 -->
                    <div class="toc-section">
                        <div class="section-header" @click="jt1 = !jt1">
                            <a href="javascript:;" class="expand-icon">
                                <i class="iconfont" :class="jt1 ?'icon-jiantou':'icon-jiantouarrow486'"></i>
                            </a>
                            <a href="javascript:;" class="title">机器人</a>
                            <a href="javascript:;" class="action">
                                <i class="iconfont sd">##</i>
                            </a>
                        </div>
                        <div class="section-body collapse" :class="!jt1 ?'down' : ''" :style="{width:people.length * 50}">
                            <ul>
                                <li v-for="item of people" :class="{active:item.title == $route.name}">
                                    <router-link :to='item.url' class="contact-list-item">
                                        <div class="lc-avatar">
                                            <img :src="item.photo" alt="">
                                        </div>
                                        <span class="name">{{item.title}}</span>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- 常用联系人 -->
                    <div class="toc-section">
                        <ul>
                            <li class="group-char">
                                <i class="iconfont icon-wujiaoxing"></i>
                                常用联系人
                            </li>
                            <li v-for="item of lxr" :class="{active:item.name == $route.name}">
                                <router-link :to='item.url' class="contact-list-item">
                                    <div>
                                        <div class="ng-scope">
                                            <div class="ng-binding">{{item.photo}}</div>
                                        </div>
                                        <span class="name">{{item.name}}</span>
                                    </div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <!-- 联系人列表 -->

                </div>
                <div class="department-list" v-else="filter">
                    <div class="toc-section">
                        <ul class="lc-tree" style="margin-left: 5px;">
                            <li style="padding: 0;">
                                <a href="javascript:;" class="lvl0" @click="jt2 = !jt2">
                                    <span>
                                        <i class="iconfont" :class="jt2 ?'icon-jiantou':'icon-jiantouarrow486'"></i>
                                    </span>
                                    <span>
                                        <i class="iconfont icon-jituanjiapuchaxun"></i>
                                    </span>
                                    <span class="title">
                                        <span class="ng-binding">王氏集团</span>
                                        <span class="title-desc">( 2人 )</span>
                                    </span>
                                </a>
                                <ul v-if="jt2">
                                    <li v-for="item of p_count" :class="{active:item.name == $route.name}" style="width: 192px;">
                                        <router-link :to='item.url' class="contact-list-item wsjt_a">
                                            <div>
                                                <div class="wsjt_img">
                                                    <div class="ng-binding">{{item.photo}}</div>
                                                </div>
                                                <span class="name">{{item.name}}</span>
                                            </div>
                                        </router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
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
            filter:true,
            jt:true,
            jt1:true,
            jt2:true,
            qz:[
                {
                    title:"企业公告",
                    url:'/tongxun/qygg/'
                }
            ],
            people:[
                {
                    title:"日程助手",
                    photo:"https://s3.cn-north-1.amazonaws.com.cn/lcavatar/calendar_40x40.png",
                    url:'/tongxun/imTime'
                },
                {
                    title:"网盘助手",
                    photo:"https://s3.cn-north-1.amazonaws.com.cn/lcavatar/drive_40x40.png",
                    url:'/tongxun/wpzs'
                },
                {
                    title:"项目助手",
                    photo:"https://s3.cn-north-1.amazonaws.com.cn/lcavatar/mission_40x40.png",
                    url:'/tongxun/xmzs'
                },
                {
                    title:"小特机器人",
                    photo:"https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png",
                    url:'/tongxun/xtjqr'
                }
            ],
            lxr:[
                {
                    photo:"聪聪",
                    name:"刑聪聪",
                    url:"/tongxun/xcc"
                }
            ],
            p_count:[
                {
                    photo:"聪聪",
                    name:"刑聪聪",
                    url:"/tongxun/xcc"
                },
                {
                    photo:"sk",
                    name:"王梓烨",
                    url:"/tongxun/wzy"
                }
            ]
        }
    }
}
</script>


<style lang = 'scss' scoped>
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    .rili_left{
        float: left;
        position: relative;
        width: 240px;
        background: rgba(253,253,253,.95);
        border-right: 1px solid #ddd;
        height: 100%;
    }
    .header {
        height: 50px;
    }
    .header .title {
        float: left;
        margin: 0 20px;
        color: #333;
        line-height: 50px;
        font-size: 16px;
    }
    .header .dropdown {
        float: right;
        margin: 0 20px;
        line-height: 50px;
        position: relative;
    }
    .btn{
        text-align: center;
        font-weight: 400;
        display: inline-block;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        font-size: 22px;
        line-height: 1.5;
        border-radius: 1.25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        color: #ddd;
        padding: 0;
    }
    .btn:hover{
        color: #22d7bb;
        font-weight: bold;
    }
    .body-list {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-flex: 1 1 0;
        overflow: hidden;
        margin-bottom: 3px;
        
    }
    .search-area {
        padding: 0 20px 10px;
        position: relative;
    }
    .search{
        display: block;
        width: 95%;
        line-height: 1.5;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
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
    .cf{
        position: absolute;
        top: 10px;
        left: 28px;
    }
    .cygl{
        font-weight: bold;
        font-size: 18px;
    }
    .sd{
        margin-left: -5px;
    }
    .filter{
        display: -webkit-flex;
        padding: 0 20px;
        line-height: 18px;
        border-bottom: solid 1px #f3f3f3;
        list-style: none;
        text-align: center;
    }
    .filter > li.active{
        color: #22d7bb;
    }
    .filter > li{
        flex: 1 1 0;
        position: relative;
        padding-bottom: 10px;
        color: #ddd;
        border: none;
        cursor: pointer;
        list-style: none;
    }
    li.active:before {
        left: calc(50% - 10px);
        bottom: 0;
        margin-left: 2px;
        border-bottom: 6px solid #eee;
    }
    li.active:after{
        content: "";
        position: absolute;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
    }
    li.divider {
        -webkit-box-flex: 0;
        -ms-flex: 0;
        flex: 0;
        width: 0;
        height: 14px;
        overflow: hidden;
        border-right: solid 1px #eee;
    }
    .toc-section{
        padding: 2px 0;
        width: 240px;
        margin-bottom: 2px;
        overflow: hidden;
    }
    .toc-section .section-header{
        margin-bottom: 2px;
        padding: 8px 20px;
        position: relative;
        cursor: pointer;
    }
    .section-header .expand-icon {
        margin-right: 6px;
        color: #aaa;
        display: inline-block;
        width: 14px;
        vertical-align: middle;
    }
    .ng-scope .title{
        text-decoration: none;
        color: #333;
    }
    .toc-section .action{
        color: #626262;
        font-size: 18px;
        font-weight: 500;
        opacity: 0;
        position: absolute;
        right: 14px;
        top: 5px;
        width: 24px;
        text-align: center;
    }
    .toc-section .section-header:hover{
        text-decoration: none;
        box-shadow: 0 0 8px 2px #eee;
    }
    .section-header:hover .action {
        opacity: 1;
    }
    .toc-section .active{
        display: block;
        margin-bottom: 2px;
        padding: 0 20px;
        text-decoration: none;
        border-right: 3px solid #22d7bb;
        background: #e7f9f6;
    }
    .collapse{
        transition: all .5s;
        height: 0;
        overflow: hidden;
    }
    .collapse.in {
        height: 48px;
        display: block;
    }
    .collapse.down{
        height: calc(50px * 4);
        display: block;
    }
    .channel-icon {
        margin-right: 5px;
        display: inline-block;
        line-height: 24px;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        background: rgb(34, 215, 187);
        width: 24px;
        height: 24px;
    }
    .name {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 150px;
        display: inline-block;
        vertical-align: middle;
    }
    .toc-section ul li {
        display: block;
        margin-bottom: 2px;
        padding: 0 20px;
        border-right: 3px solid transparent;
    }
     ul li .contact-list-item {
        display: block;
        line-height: 48px;
        color: #666;
        font-size: 14px;
        text-decoration: none;
    }
    ul li .wsjt_a{
        line-height: 23px;
    }
    .contact-list-item .lc-avatar {
        margin-right: 15px;
        float: left;
        position: relative;
        top: 7px;
    }
    .lc-avatar img {
        width: 24px;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        border-radius: 24px;
    }
    .contact-list-warpper ul li.active {
        text-decoration: none;
        border-right: 3px solid #22d7bb;
        background: #e7f9f6;
    }
    li.group-char {
        padding: 10px 0;
        line-height: 32px;
        color: #888;
        border-bottom: solid 1px #eee;
        cursor: default;
    }
    li.group-char .iconfont {
        margin-right: 5px;
        font-size: 10px;
        vertical-align: middle;
    }
    .toc-section .ng-scope{
        text-align: center!important;
        overflow: hidden;
        zoom: 1;
        vertical-align: middle;
        color: #fff!important;
        text-shadow: transparent 0 0 0;
        padding: 0!important;
        width: 24px;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        border-radius: 24px;
        background-color: rgb(153, 215, 90);
        float: left;
        position: relative;
        top: 13px;
        margin-right: 10px;
    }
    .contact-list-item {
        display: block;
        line-height: 48px;
        color: #666;
        font-size: 14px;
        text-decoration: none;
    }
    .department-list {
        padding: 10px 0 0;
    }
    .lc-tree a{
        display: -webkit-flex;
        flex-direction: row;
        padding: 8px 10px 8px 18px;
        line-height: 24px;
        cursor: pointer;
        color: #666;
        transition: all .2s;
        margin-bottom: 2px;
    }
    .lc-tree a.wsjt_a{
        padding: 8px 10px 8px 6px;
    }
    .lc-tree a.lvl0 {
        padding-left: 10px!important;
    }
    .lc-tree a i {
        margin-right: 3px;
        font-size: 16px;
        vertical-align: middle;
        color: #aaa;
        margin-top: 2px;
    }
    .lc-tree a .title {
        padding-top: 3px;
        white-space: normal;
        -webkit-box-flex: 1;
        flex: 1 1 0;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .lc-tree a .title .title-desc {
        display: inline-block;
        margin-left: 3px;
        color: #888;
        font-size: 12px;
        line-height: 26px;
        vertical-align: top;
    }
    .wsjt_img{
        text-align: center !important;
        overflow: hidden;
        zoom: 1;
        vertical-align: middle;
        color: #fff !important;
        text-shadow: transparent 0 0 0;
        padding: 0 !important;
        width: 24px;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        border-radius: 24px;
        background-color: #99d75a;
        float: left;
        position: relative;
        top: 3px;
        margin-right: 10px;
    }
    .lc-tree li ul li{
        width: 100%;
    }
    .lc-tree li ul li:hover {
        background: 0 0!important;
        -webkit-box-shadow: 0 0 8px 2px #eee;
        box-shadow: 0 0 8px 2px #eee;
    }



    .zs {
        float: left;
        width: calc(100% - 240px - 1px);
        height: 100%;
        background:rgb(238, 238, 238);
    }
    .qygg{
        display: block;
        line-height: 48px;
        color: #666;
        font-size: 14px;
        text-decoration: none;
    }
</style>