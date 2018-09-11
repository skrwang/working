<template>
    <div class="box">
        <div class="contont">
            <div class="body-content">
                <div class="profile-detail-header">
                    <div class="lc-avatar">
                        <img src="https://s3.cn-north-1.amazonaws.com.cn/lcavatar/mission_160x160.png" alt="">
                    </div>
                    <div class="display_name ng-binding">项目助手</div>
                    <div class="username ng-binding">@bot_mission</div>
                </div>
                <div class="profile-detail-body">
                    <div class="profile-row">
                        <div class="title ng-scope">简介</div>
                        <div class="content">
                            <span class="ng-binding ng-scope">通过任务可以随时管理团队成员的工作，项目管理，跟踪任务进展。</span>
                        </div>
                    </div>
                </div>
                <div class="text-center m-t-30">
                    <button class="btn">发消息</button>
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
    }
    .box .contont{
        margin: 15px;
        height: 100%;
        overflow: hidden;
        background: rgba(255,255,255,.97);
    }
    .body-content {
        margin: 80px auto;
        width: 620px;
    }
    .profile-detail-header {
        text-align: center;
    }
    .lc-avatar{
        display: inline-block;
    }
    .display_name {
        color: #666;
        font-weight: 700;
        font-size: 24px;
        margin-top: 10px;
    }
    .username {
        color: #888;
        font-size: 16px;
        margin: 20px 0;
    }
    .profile-detail-body {
        padding: 30px 0;
        border-top: 1px solid #eee;
    }
    .profile-row {
        margin-bottom: 20px;
        margin-left: 30px;
    }
    .profile-row:before {
        content: " ";
        display: table;
    }
    .profile-row .title {
        float: left;
        width: 145px;
        font-weight: 700;
        text-align: right;
        color: #aaa;
    }
    .profile-row .content {
        float: left;
        margin-left: 45px;
        width: 300px;
        font-size: 15px;
        color: #666;
    }
    .m-t-30 {
        margin-top: 30px!important;
        text-align: center!important;
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
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;  
        padding: .5rem 2.215rem;
        font-size: 1.25rem;
        line-height: 1.5;
        min-width: 108px;
        border-radius: 1.25rem;
    }
</style>
