<template>
    <div>
        <div class="header_qiye">
            <div class="qiyeL">
                <a href="javascript:">
                    <i class="iconfont icon-gongxiang"></i>
                    与我共享
                    <i class="iconfont icon-jiantouarrow483"></i>
                </a>
            </div>
        </div>
        <div class="file-body">
            <div class="file-body-content">
                <div class="file-list-header">
                    <p class="file-name">文件名</p>
                    <p class="file-size">大小</p>
                    <p class="file-updated-by">更新人</p>
                    <p class="file-time">更新时间
                        <i class="iconfont icon-jiantou1"></i>
                    </p>
                </div>
                <ul>
                    <!-- <li class="file-item" v-for="item of list">
                        <div class="file-name">
                            <i class="iconfont" :class="item.icon"></i>
                            {{item.title}}
                        </div>
                        <div class="file-size">
                            <span>{{item.size}}</span>
                        </div>
                        <div class="file-updated-by">
                            <span class="portrait">SK</span>
                            <span class="name">{{item.updated}}</span>
                        </div>
                        <div class="file-time">
                            {{item.time}}
                        </div>
                    </li> -->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                state:'全部',
                shangchuan:true,
            }
        },
    }
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
        color: #333;
        font-size: 14px;
    }
    .btn {
        display: inline-block;
        margin-bottom: 0;
        text-align: center;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        border: 1px solid transparent;
        white-space: nowrap;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        line-height: 20px;  
        outline: none;
    }
    input {
        outline: none;
    }
    .header_qiye {
        height: 50px;
        margin: 0;
        padding: 0 15px;
        position: relative;
        background: rgba(253,253,253,.95);
        .qiyeL {
            float: left;
            color: #333;
            line-height: 50px;
            a {
                color: #aaa;
            }
            a .icon-gongxiang{
                color: rgb(34, 215, 187);
                font-size: 20px;
                margin: 0 10px 4px 0;
            }
            a .icon-jiantouarrow483 {
                margin-left: 5px;
                color: #333;
            }
        }
        .qiyeR {
            float: right;
            // overflow: hidden;
            margin-top: 10px;
            .btn-group {
                line-height: 20px;
                margin-right: 10px;
                overflow: hidden;
                float: left;
                .btn {
                    padding: 3px 20px;
                    font-size: 14px;
                    // display: inline-block;
                    float: left;
                    color: #22d7bb;
                    background-color: #fff;
                    border-color: #22d7bb;
                }
                .xiazai {
                    border-bottom-left-radius: 4px;
                    border-top-left-radius: 4px;
                    margin-right: -1px;
                }
                .gengduo {
                    border-bottom-right-radius: 4px;
                    border-top-right-radius: 4px;
                    margin-left: -1px;
                }
            }
            .xinjian {
                padding: 3px 20px;
                font-size: 14px;
                color: #22d7bb;
                background-color: #fff;
                border-color: #22d7bb;
                float: left;
                border-radius: 5px;
                margin-right: 10px;
                &:hover {
                    color: #fff;
                    background-color: #22d7bb;
                    border-color: #22d7bb;
                }
            }
            .shangchuan {
                float: left;
                // overflow: hidden;
                position: relative;
                .btn {
                    padding: 3px 10px;
                    color: #fff;
                    background-color: #22d7bb;
                    border-color: #22d7bb;
                    border-radius: 20px;
                    float: left;
                    line-height: 20px;
                    &:hover {
                        box-shadow: 0 2px 5px 1px rgba(24,191,164,.45);
                    }
                }
                .btn_primary{
                    border-bottom-right-radius: 0;
                    border-top-right-radius: 0;
                    position: relative;
                    input {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 73px;
                        height: 22px;
                        display: none;
                    }
                }
                .btn_toggle{
                    border-bottom-left-radius: 0;
                    border-top-left-radius: 0;
                    position: relative;
                }
                .pbox {
                    position: absolute;
                    display: none;
                    text-align: left;
                    font-size: 14px;
                    background: #FFF;
                    box-shadow: 0 0 24px rgba(0,0,0,.18);
                    border-radius: 0;
                    border: 0;
                    min-width: 230px;
                    z-index: 1100;
                    top: 31px;
                    right: 7.0156px;
                    &.show{
                        display: block;
                    }
                    .pop-menu {
                        display: block;
                        padding: 5px 0;
                        min-width: 240px;
                        ul li {
                            display: block;
                            padding: 0;
                            margin: 0 0 2px;
                            cursor: pointer;
                            transition: background .2s;
                            &:hover {
                                background: #f3f3f3;
                            }
                            &:hover a {
                                color: #333;
                                padding-left: 26px;
                            }
                            a {
                                display: block;
                                padding: 5px 18px;
                                line-height: 30px;
                                color: #666;
                                text-decoration: none;
                                box-sizing: border-box;
                                transition: padding-left .2s;
                            }
                        }
                    }
                }
            }
        }
    }
    .file-body {
        padding: 15px 15px 0;
        height: 551px;
        .file-body-content {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            -webkit-flex: 1;
            margin-bottom: 15px;
            background: #fdfdfd;
            font-size: 14px;
            height: 100%;

            .file-list-header,.file-item {
                line-height: 27px;
                color: #666;
                display: -webkit-flex;
                flex-direction: row;    
                position: relative;
                padding: 14px 35px;
                .file-name{
                    -webkit-box-flex: 1;
                    -ms-flex: 1 1 0px;
                    flex: 1 1 0;
                    -webkit-flex: 1 1 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    cursor: pointer;
                }
                .file-size {
                    width: 120px;
                    cursor: pointer;
                }
                .file-updated-by {
                    width: 130px;
                }
                .file-time {
                    width: 170px;
                    cursor: pointer;
                }
            }
        }
    }
</style>

