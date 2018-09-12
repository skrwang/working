<template>
    <div class="box">
        <div class="header">
            <div class="profile-header">
                <div class="profile-header-avatar">
                    <div class="lc-avatar">
                        <span class="lc-avatar-def">
                            <div class="ng-binding">
                                聪聪
                            </div>
                        </span>
                    </div>
                </div>
                <div class="profile-header-profiles">
                    <div class="display_name">
                        刑聪聪
                        <span class="name">@skrxing</span>
                        <a href="javascript:;" class="following">
                            <i class="wtf-star-o iconfont icon-star"></i>
                        </a>
                    </div>
                    <ul>
                        <li>
                            <i class="iconfont icon-tongxunlu1"></i>
                            <span class="empty-value">暂无</span>
                        </li>
                        <li class="line"> </li>
                        <li>
                            <i class="iconfont icon-xinfeng"></i>
                            <span class="empty-value">暂无</span>
                        </li>
                        <li class="line"> </li>
                        <li>
                            <i class="iconfont icon-dianhua"></i>
                            <span class="empty-value">18235950405</span>
                        </li>
                    </ul>
                    <div class="profile-header-action">
                        <button class="btn .m-r-10 btn-primary">
                            <i></i>
                            <span>发消息</span>
                        </button>
                        <a href="javascript:;" class="btn btn-outline-default btn-md ng-scope">
                            分配任务
                        </a>
                    </div>
                </div>
            </div>
            <div class="profile-body">
                <div class="profile-body-content" style="background-color: #fdfdfd">
                    <div class="panel">
                        <div class="panel-heading">
                            <span class="panel-title ">刑聪聪 的任务</span>
                            <div class="header-btn">
                                <button class="btn btn-outline-default btn-sm">
                                    <i class="iconfont icon-icon_category" style="color: #22d7bb;"></i>按处理优先级
                                    <span class="caret"></span>
                                </button>
                            </div>
                        </div>
                        <div class="panel-body">
                            <div class="profile-task-wrap">
                                <div class="empty-state">
                                    <span class="empty-icon">
                                        <i class="iconfont icon-fq_changxieguanli"></i>
                                    </span>
                                    <p class="empty-text">没有任务</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="profile-body-side">
                    <div class="panel ng-isolate-scope">
                        <div class="panel-body panel-body--clear-padding-lr">
                            <div class="status-overview-warpper ng-scope">
                                <ul style="height: 48px;">
                                    <li class="ng-binding">
                                        <div class="count-number text-primary ng-binding">0</div>
                                        已完成
                                    </li>
                                    <li class="line"> </li>
                                    <li class="ng-binding">
                                        <div class="count-number text-primary ng-binding">0</div>
                                        待完成
                                    </li>
                                    <li class="line"> </li>
                                    <li class="ng-binding">
                                        <div class="count-number text-primary ng-binding">0</div>
                                        延期
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel ng-isolate-scope">
                        <div class="panel-heading">
                            <span class="panel-title ng-scope">今日日程</span>
                        </div>
                        <div class="panel-body panel-body--clear-padding">
                            <div class="ng-scope ng-isolate-scope empty-state" style="margin-top: 26.5px;">
                                <span class="empty-icon">
                                    <i class="iconfont icon-fq_changxieguanli"></i>
                                </span>
                                <p class="empty-text ng-binding">没有数据</p>
                            </div>
                        </div>
                    </div>
                    <div class="panel" style="margin-bottom: 0px;">
                        <div class="panel-heading">
                            <span class="panel-title ng-binding">详细资料</span>
                        </div>
                        <div class="panel-body" style="margin-top: 20px;">
                            <div class="profile-detail-list">
                                <div class="profile-row">
                                    <div class="title ng-scope">
                                        手机
                                    </div>
                                    <div class="content ng-binding ng-scope">18235950405</div>
                                </div>
                                <div class="profile-row">
                                    <div class="title ng-scope">
                                        邮箱
                                    </div>
                                    <div class="content ng-binding ng-scope">暂无</div>
                                </div>
                                <div class="profile-row">
                                    <div class="title ng-scope">
                                        部门
                                    </div>
                                    <div class="content ng-binding ng-scope">暂无</div>
                                </div>
                                <div class="profile-row">
                                    <div class="title ng-scope">
                                        职位
                                    </div>
                                    <div class="content ng-binding ng-scope">暂无</div>
                                </div>
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
    
}
</script>

<style lang = 'scss' scoped>
    a{
        text-decoration: none;
    }
    ul{
        list-style:none;
    }
    .box{
        width: 100%;
        height: 100%;
        overflow: scroll;
    }
    .header{
        position: relative;
        box-sizing: border-box;
    }
    .profile-header{
        display: flex;
        padding: 120px 0 0 15px;
        height: 130px;
        background: url(https://wsjt.worktile.com/image/app/contacts/profile-bg.jpg?t=1536662418992) top left repeat-x #fff;
        background-size: auto 200px;
    }
    .profile-header-avatar {
        margin-right: 20px;
        width: 120px;
        height: 120px;
        border-radius: 100%;
    }
    .lc-avatar {
        overflow: hidden;
        border: 5px solid #fff;
        border-radius: 100%;
    }
    .lc-avatar-def{
        display: block;
        text-align: center!important;
        overflow: hidden;
        zoom: 1;
        vertical-align: center;
        color: #fff!important;
        text-shadow: transparent 0 0 0;
        padding: 0!important;
        width: 110px;
        height: 110px;
        line-height: 110px;
        font-size: 45px;
        border-radius: 110px;
        background-color: rgb(153, 215, 90);
    }
    .profile-header-profiles {
        flex: 1 1 0;
        position: relative;
        height: 130px;
    }
    .profile-header-profiles .display_name {
        margin-bottom: 15px;
        padding-top: 35px;
        line-height: 1;
        font-size: 20px;
        color: #666;
    }
    .profile-header-profiles .display_name .name {
        font-size: 16px;
        color: #888;
    }
    .display_name .following {
        font-size: 0;
        cursor: pointer;
    }
    i.wtf-star-o {
        color: #ddd;
        font-size: 20px;
    }
    .display_name .following:hover i {
        color: #ffc442;
    }
    .profile-header-profiles ul {
        display: block;
        padding-top: 18px;
    }
    .profile-header-profiles ul li {
        display: inline-block;
        margin-right: 25px;
        color: #333;
        vertical-align: middle;
    }
    .profile-header-profiles ul li i {
        margin-right: 5px;
        font-size: 22px;
        color: #cacaca;
        vertical-align: -3px;
    }
    .profile-header-profiles ul li .empty-value {
        color: #cacaca;
    }
    .profile-header-profiles ul .line {
        width: 0;
        line-height: 16px;
        border-right: solid 1px #ddd;
    }
    .profile-header-action {
        width: 300px;
        text-align: right;
        position: absolute;
        right: 15px;
        bottom: 7px;
    }
    .btn {
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
        font-weight: 400;
        text-align: center;
        outline: none;
    }
    .btn-primary:hover {
        box-shadow: 0 2px 5px 1px rgba(34,215,187,.6);
    }
    .btn-primary{
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
    }
    .btn-md {
        padding: .407rem 22px;
        border-radius: 1.25rem;
        font-size: .875rem;
        min-width: 70px;
        line-height: 1.5;
    }
    .btn-outline-default {
        color: #888;
        background-color: transparent;
        background-image: none;
        border-color: #ddd;
    }
    .btn-outline-default:hover {
        color: #22d7bb;
        border-color: #22d7bb;
    }
    .profile-body {
        position: relative;
        padding: 15px;
        display: flex;
        flex-direction: row;
    }
    .profile-body-content {
        flex: 1 1 0;
    }
    .panel {
        margin-bottom: 15px;
        box-shadow: 0 0!important;
        border-radius: 2px;
        background-color: #fdfdfd;
        border: 1px solid transparent;
    }
    .panel .panel-heading {
        padding: 10px 20px 0;
        line-height: 30px;
        font-size: 14px;
        border-bottom: none;
    }
    .panel .panel-heading .panel-title {
        display: inline-block;
        padding-left: 8px;
        line-height: 1;
        color: #333;
        font-size: 14px;
        border-left: solid 3px #22d7bb;
    }
    .panel .panel-heading .header-btn {
        float: right;
        position: relative;
    }
    .header-btn .btn {
        padding: 3px 14px;
        border-radius: 4px;
        font-size: .875rem;
        min-width: 70px;
        line-height: 1.5;
    }
    .btn-outline-default {
        color: #888;
        background-color: transparent;
        background-image: none;
        border-color: #ddd;
    }
    .caret {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 2px;
        vertical-align: middle;
        border-top: 4px dashed;
        border-top: 4px solid\9;
        border-right: 4px solid transparent;
        border-left: 4px solid transparent;
        margin-left: 16px;
    }
    .btn-outline-default:hover {
        color: #22d7bb;
        border-color: #22d7bb;
    }
    .empty-state {
        text-align: center;
        margin-top: 120px;
    }
    .empty-state .empty-icon i {
        color: #eee;
        font-size: 5rem;
    }
    .empty-text {
        font-size: 1rem;
        color: #cacaca;
        margin-bottom: 1rem;
    }
    .profile-body-side {
        margin-left: 15px;
        width: 300px;
    }
    .panel-body--clear-padding-lr {
        padding: 15px 0;
    }
    .status-overview-warpper ul li {
        width: 98px;
        font-size: 12px;
        color: #888;
        text-align: center;
        float:left;
    }
    .status-overview-warpper ul li .count-number {
        font-size: 24px;
        font-family: lcletter;
    }
    .text-primary {
        color: #22d7bb!important;
    }
    .status-overview-warpper ul li.line {
        -webkit-box-flex: 0;
        -ms-flex: 0;
        flex: 0;
        margin-top: 6px;
        width: 0;
        height: 43px;
        border-right: solid 1px #eee;
    }
    .profile-detail-list .profile-row {
        margin-bottom: 34px;
        font-size: 14px;
        display: -webkit-box;
        display: flex;
        display: -ms-flexbox;
        display: -webkit-flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
    }
    .profile-detail-list .profile-row .title {
        margin-right: 20px;
        width: 60px;
        text-align: right;
        color: #aaa;
    }
    .profile-detail-list .profile-row .content {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-flex: 1 1 0;
        color: #666;
        text-align: left;
        word-break: break-all;
    }





</style>


