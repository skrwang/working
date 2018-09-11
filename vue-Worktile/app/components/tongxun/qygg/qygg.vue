<template>
    <div class="box">
        <div class="module-header">
            <div class="title">
                <span class="channel-icon">
                    <i class="iconfont icon-jinghao"></i>
                </span>
                <a href="javascript:;">企业公告</a>
            </div>
            <div class="secondary-text">
                2
                <span>人</span>
            </div>
        </div>
        <div class="module-body">
            <div class="content">
                <ul style="margin: 10px 15px;">
                    <li class="ng-scope">
                        <a href="javascript:;">
                            <div class="lc-avatar">
                                <span class="p_logo">SK</span>
                            </div>
                            <span class="channel-member-name">skrwang</span>
                        </a>
                    </li>
                    <li class="ng-scope">
                        <a href="javascript:;">
                            <div class="lc-avatar">
                                <span class="p_logo">SK</span>
                            </div>
                            <span class="channel-member-name">skrwang</span>
                        </a>
                    </li>
                </ul>
                <div class="p-l-20">
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
    .module-header {
        display: block;
        height: 50px;
        margin: 0;
        padding: 0 15px;
        position: relative;
        background: rgba(253,253,253,.95);
    }
    .module-header .title {
        line-height: 50px;
        font-size: 16px;
        float: left;
        color: #333;
    }
    .channel-icon {
        display: inline-block;
        line-height: 24px;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        vertical-align: middle;
        width: 24px;
        height: 24px;
    }
    .module-header .title .channel-icon {
        margin: 0 6px 4px 0;
        vertical-align: middle;
        line-height: 100%;
        background: rgb(34, 215, 187);
    }
    .module-header .title .channel-icon i {
        margin-top: 4px;
        margin-right: 0;
        font-size: 14px;
        color: #fff;
        line-height: 26px;
    }
    .module-header .title .channel-icon i.fonticon{
        margin: 0 10px 4px 0;
        vertical-align: middle;
    }
    .module-header .title a {
        color: #333;
    }
    .module-header .secondary-text {
        float: left;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: block;
        line-height: 50px;
        padding: 0 10px;
        color: #aaa;
    }
    .module-body {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 0px;
        flex: 1 1 0;
        -webkit-flex: 1 1 0;
        position: relative;
        overflow-y: auto;
        overflow-x: auto;
        padding: 15px 15px 0;
        height: 100%;
        
    }
    .module-body .content{
        background: rgb(253,253,253);
        width: 100%;
        height: 100%;
    }
    .content .ng-scope{
        display: inline-block;
        margin: 20px 10px;
    }
    .content .ng-scope > a{
        display: block;
        width: 90px;
        text-align: center;
        color: rgb(102, 102, 102);
        text-decoration: none;
    }
    .p_logo{
        display: inline-block;
        vertical-align: middle;
        text-shadow: transparent 0px 0px 0px;
        text-align: center !important;
        color: rgb(255, 255, 255) !important;
        overflow: hidden;
        padding: 0px !important;
        width: 48px;
        height: 48px;
        line-height: 48px;
        font-size: 12px;
        border-radius: 48px;
        background-color: rgb(44, 204, 218);
    }
    .channel-member-name {
        display: block;
        margin-top: 10px;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 90px;
        overflow: hidden;
    }
    .p-l-20 {
        padding-left: 20px !important;
    }
    .btn {
        display: inline-block;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        font-size: 0.875rem;
        line-height: 1.5;
        min-width: 106px;
        border-width: 1px;
        border-style: solid;
        border-color: transparent;
        border-image: initial;
        padding: 0.469rem 26px;
        border-radius: 1.25rem;
        transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
        font-weight: 400px;
        text-align: center;
        color: rgb(255, 255, 255);
        background-color: rgb(34, 215, 187);
        border-color: rgb(34, 215, 187);
        outline: none;
    }
    .btn:hover {
        box-shadow: rgba(34, 215, 187, 0.6) 0px 2px 5px 1px;
    }
</style>


