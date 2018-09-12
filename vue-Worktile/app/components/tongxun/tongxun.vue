<template>
    <div>
        <div class="rili_left">
            <div class="header">
                <span class="title">通讯录</span>
                <div class="dropdown">
                    <a href="javascript:;" class="btn iconfont icon-yaoqingchengyuan" @click="bh = true">
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


        <!-- 添加成员 -->
        <div class="modal" :class="{out:!bh}">
            
        </div>
        <div class="zz" :class="{out:!bh}">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header ng-scope">
                        <h3 class="modal-title ng-scope">添加成员</h3>
                        <a href="javascript:;" class="modal-close" @click="bh = false">
                            <i class="iconfont icon-close"></i>
                        </a>
                    </div>
                    <div class="modal-body ng-scope">
                        <div class="frame min-h-600 form-horizontal ng-scope">
                            <div class="thy-nav nav-thirdly justify-content-center ng-scope">
                                <a href="javascript:;" class="nav-link ng-scope active">快速添加成员</a>
                                <a href="javascript:;" class="nav-link ng-scope">通过邮件邀请</a>
                                <a href="javascript:;" class="nav-link ng-scope">通过链接注册</a>
                            </div>
                            <div class="ng-scope">
                                <p class="p-20 ng-scope">快速添加成员帐号，设置默认密码，首次登录时需要修改默认密码。</p>
                                <form action="">
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label label-required ng-scope">姓名</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" placeholder="请输入对方真实姓名">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label label-required ng-scope">登录用户名</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" placeholder="请输入对方用户名，如Lily">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label label-required ng-scope">邮箱或者手机号</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" placeholder="输入邮箱地址或者手机号">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label label-required ng-scope">默认密码</label>
                                        <div class="col-sm-9">
                                            <input type="password" class="form-control" placeholder="输入默认密码">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="col-sm-3 control-label label-required ng-scope">员工编号</label>
                                        <div class="col-sm-9">
                                            <input type="password" class="form-control" placeholder="输入员工编号">
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-sm-6 offset-sm-3">
                                            <button class="tjcy">添加成员</button>
                                        </div>
                                        <div class="col-sm-3 text-right p-t-10">
                                            <a href="javascript:;" style="color: #22d7bb;">批量导入</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
            bh:false,
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
    /* 保护层 */
    .modal-dialog{
        position: relative;
        width: auto;
        margin: .5rem;
        pointer-events: none;
        max-width: 660px;
        margin: 3.75rem auto;
    }
    .modal-content {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        pointer-events: auto;
        background-color: #fff;
        background-clip: padding-box;
        border: 0 solid rgba(0,0,0,.2);
        border-radius: .3rem;
        outline: 0;
        box-shadow: 0 0 1.5rem rgba(0,0,0,.5);
    }
    .modal.out,.zz.out{
        display: none;
    }
    .modal{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1050;
        outline: 0;
        display: block;
        opacity: 0.6;
        overflow-x: hidden;
        overflow-y: auto;
        background: #1d1c1c;
    }
    .zz{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        outline: 0;
        z-index: 9999;
    }
    .model.out{
        display: none;
    }
    .modal-header {
        padding: 0 1.875rem;
        align-items: center;
        height: 50px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
    }
    .modal-close {
        color: #ddd;
        line-height: 50px;
    }
    .modal-header h3 {
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 0;
        line-height: 1.5;
    }
    .modal-body {
        position: relative;
        flex: 1 1 auto;
        padding: 1.25rem 1.875rem 1.875rem;
    }
    .thy-nav {
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        display: flex;
        justify-content: center!important;
    }
    .nav-link {
        display: block;
        transform: translateY(1px);
        text-align: center;
        padding: .532rem 0;
        margin-right: 40px;
        position: relative;
        border-bottom: none;
        color: #888;
    }
    .nav-link.active{
        color: #22d7bb;
    }
    .p-20 {
        padding: 20px!important;
    }
    .form-group {
        margin-right: -15px;
        display: flex;
        flex-wrap: wrap;
        margin-left: -15px;
        margin-bottom: 1rem;
    }
    .label-required::before {
        content: '*';
        color: #ff5b57;
        margin-right: 3px;
        position: relative;
        top: 3px;
    }
    .control-label {
        padding-right: 0;
        padding-left: 0;
        color: #888;
        font-size: 14px;
        font-weight: 400;
        text-align: right;
        margin-bottom: 0;
        padding-top: 6px;
        flex: 0 0 25%;
        max-width: 25%;
    }
    .col-sm-9 {
        flex: 0 0 75%;
        max-width: 70%;
        padding-left: 20px;
    }
    .form-control {
        display: block;
        width: 91%;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #eee;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        padding: .469rem .875rem;
        font-size: .875rem;
    }
    .form-control:focus, .form-control:not(:disabled):hover {
        border-color: #22d7bb;
    }
    .offset-sm-3 {
        margin-left: 25%;
        flex: 0 0 50%;
        max-width: 50%;
        position: relative;
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }
    .p-t-10 {
        padding-top: 10px!important;
    }
    .text-right {
        text-align: right!important;
    }
    .tjcy{
        display: inline-block;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: .469rem 26px;
        font-size: .875rem;
        line-height: 1.5;
        min-width: 106px;
        border-radius: 1.25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
    }
    .tjcy:hover {
        box-shadow: 0 2px 5px 1px rgba(34,215,187,.6);
    }
</style>