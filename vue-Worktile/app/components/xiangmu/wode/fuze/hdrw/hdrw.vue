<template>
    <div style="padding:15px;box-sizing: border-box;">
        <div class="thy-group-wrapper">
            <div class="thy-group">
                <div class="thy-group-header draggable">
                    <div class="thy-group-header-content">
                        <div class="thy-group-title">收件箱</div>
                        <div class="thy-group-count finished">0</div>
                        <div class="thy-group-count">/</div>
                        <div class="thy-group-count unfinished">0</div>
                        <div class="thy-group-count">/</div>
                        <div class="thy-group-count">0</div>
                    </div>
                </div>
                <div class="thy-group-body">
                    <div class="thy-group-list" id="000000000000000000000000">
                        <mission-board-add-task class="thy-group-list-item-add">
                            <textarea class="thy-group-card-add-name form-control ng-pristine ng-valid ng-touched" name="taskTitle"></textarea>
                            <div class="thy-group-card-add-aside"><!---->
                                <span class="select-task-type cursor-pointer">
                                    <img data-v-25f4dd50="" src="imgs/a1.png" alt="">任务 
                                    <i class="iconfont icon-jiantouarrow483"></i>
                                </span>
                                <thy-avatar class="cursor-pointer thy-avatar-22 thy-avatar" placement="right bottom" selectmember="" thysize="22">
                                    <span class="avatar-default" style="background-color: rgb(44, 204, 218);">
                                        <div>SK</div>
                                    </span>
                                </thy-avatar>
                            </div>
                            <div class="d-flex">
                                <div class="flex-grow-1 btn-pair-sm">
                                    <button thybutton="primary" thysize="sm" class="btn btn-primary btn-sm">确定</button>
                                    <a thybutton="link-secondary" thysize="sm" class="btn btn-link btn-link-info btn-sm">取消</a>
                                </div>
                                <div class="thy-group-card-add-aside-right"></div>
                            </div>
                        </mission-board-add-task>
                    </div>
                </div>
                <div class="thy-group-footer"><!---->
                    <a class="thy-group-footer-action" href="javascript:;">
                        <i class="iconfont icon-jiahao thy-group-footer-action-icon"></i> 添加新任务 
                    </a>
                </div>
            </div>
        </div>
        <div class="thy-group-wrapper">
            <div class="thy-group">
                <div class="thy-group-header draggable">
                    <div class="thy-group-header-content">
                        <div class="thy-group-title">今天要做</div>
                        <div class="thy-group-count finished">0</div>
                        <div class="thy-group-count">/</div>
                        <div class="thy-group-count unfinished">0</div>
                        <div class="thy-group-count">/</div>
                        <div class="thy-group-count">0</div>
                    </div>
                </div>
                <div class="thy-group-body">
                    <div class="thy-group-list" id="000000000000000000000000">
                        <mission-board-add-task class="thy-group-list-item-add">
                            <textarea class="thy-group-card-add-name form-control ng-pristine ng-valid ng-touched" name="taskTitle"></textarea>
                            <div class="thy-group-card-add-aside"><!---->
                                <span class="select-task-type cursor-pointer">
                                    <img data-v-25f4dd50="" src="imgs/a1.png" alt="">任务 
                                    <i class="iconfont icon-jiantouarrow483"></i>
                                </span>
                                <thy-avatar class="cursor-pointer thy-avatar-22 thy-avatar" placement="right bottom" selectmember="" thysize="22">
                                    <span class="avatar-default" style="background-color: rgb(44, 204, 218);">
                                        <div>SK</div>
                                    </span>
                                </thy-avatar>
                            </div>
                            <div class="d-flex">
                                <div class="flex-grow-1 btn-pair-sm">
                                    <button thybutton="primary" thysize="sm" class="btn btn-primary btn-sm">确定</button>
                                    <a thybutton="link-secondary" thysize="sm" class="btn btn-link btn-link-info btn-sm">取消</a>
                                </div>
                                <div class="thy-group-card-add-aside-right"></div>
                            </div>
                        </mission-board-add-task>
                    </div>
                </div>
                <div class="thy-group-footer"><!---->
                    <a class="thy-group-footer-action" href="javascript:;">
                        <i class="iconfont icon-jiahao thy-group-footer-action-icon"></i> 添加新任务 
                    </a>
                </div>
            </div>
        </div>
        <div class="thy-group-wrapper">
            <div class="thy-group">
                <div class="thy-group-header draggable">
                    <div class="thy-group-header-content">
                        <div class="thy-group-title">下一步要做</div>
                        <div class="thy-group-count finished">0</div>
                        <div class="thy-group-count">/</div>
                        <div class="thy-group-count unfinished">0</div>
                        <div class="thy-group-count">/</div>
                        <div class="thy-group-count">0</div>
                    </div>
                </div>
                <div class="thy-group-body">
                    <div class="thy-group-list" id="000000000000000000000000">
                        <mission-board-add-task class="thy-group-list-item-add">
                            <textarea class="thy-group-card-add-name form-control ng-pristine ng-valid ng-touched" name="taskTitle"></textarea>
                            <div class="thy-group-card-add-aside"><!---->
                                <span class="select-task-type cursor-pointer">
                                    <img data-v-25f4dd50="" src="imgs/a1.png" alt="">任务 
                                    <i class="iconfont icon-jiantouarrow483"></i>
                                </span>
                                <thy-avatar class="cursor-pointer thy-avatar-22 thy-avatar" placement="right bottom" selectmember="" thysize="22">
                                    <span class="avatar-default" style="background-color: rgb(44, 204, 218);">
                                        <div>SK</div>
                                    </span>
                                </thy-avatar>
                            </div>
                            <div class="d-flex">
                                <div class="flex-grow-1 btn-pair-sm">
                                    <button thybutton="primary" thysize="sm" class="btn btn-primary btn-sm">确定</button>
                                    <a thybutton="link-secondary" thysize="sm" class="btn btn-link btn-link-info btn-sm">取消</a>
                                </div>
                                <div class="thy-group-card-add-aside-right"></div>
                            </div>
                        </mission-board-add-task>
                    </div>
                </div>
                <div class="thy-group-footer"><!---->
                    <a class="thy-group-footer-action" href="javascript:;">
                        <i class="iconfont icon-jiahao thy-group-footer-action-icon"></i> 添加新任务 
                    </a>
                </div>
            </div>
        </div>
        <div class="thy-group-wrapper">
            <div class="thy-group">
                <div class="thy-group-header draggable">
                    <div class="thy-group-header-content">
                        <div class="thy-group-title">以后再做</div>
                        <div class="thy-group-count finished">0</div>
                        <div class="thy-group-count">/</div>
                        <div class="thy-group-count unfinished">0</div>
                        <div class="thy-group-count">/</div>
                        <div class="thy-group-count">0</div>
                    </div>
                </div>
                <div class="thy-group-body">
                    <div class="thy-group-list" id="000000000000000000000000">
                        <mission-board-add-task class="thy-group-list-item-add">
                            <textarea class="thy-group-card-add-name form-control ng-pristine ng-valid ng-touched" name="taskTitle"></textarea>
                            <div class="thy-group-card-add-aside"><!---->
                                <span class="select-task-type cursor-pointer">
                                    <img data-v-25f4dd50="" src="imgs/a1.png" alt="">任务 
                                    <i class="iconfont icon-jiantouarrow483"></i>
                                </span>
                                <thy-avatar class="cursor-pointer thy-avatar-22 thy-avatar" placement="right bottom" selectmember="" thysize="22">
                                    <span class="avatar-default" style="background-color: rgb(44, 204, 218);">
                                        <div>SK</div>
                                    </span>
                                </thy-avatar>
                            </div>
                            <div class="d-flex">
                                <div class="flex-grow-1 btn-pair-sm">
                                    <button thybutton="primary" thysize="sm" class="btn btn-primary btn-sm">确定</button>
                                    <a thybutton="link-secondary" thysize="sm" class="btn btn-link btn-link-info btn-sm">取消</a>
                                </div>
                                <div class="thy-group-card-add-aside-right"></div>
                            </div>
                        </mission-board-add-task>
                    </div>
                </div>
                <div class="thy-group-footer"><!---->
                    <a class="thy-group-footer-action" href="javascript:;">
                        <i class="iconfont icon-jiahao thy-group-footer-action-icon"></i> 添加新任务 
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>
<style lang="scss" scoped >
        .thy-group-wrapper {
            width: 280px;
            min-width: 280px;
            box-sizing: content-box;
            margin: 0 7px;
            float: left;
            .thy-group {
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                background: #fdfdfd;
                max-height: 100%;
                border-radius: 3px;
                .thy-group-header {
                    padding: 17px 10px 10px;
                    position: relative;
                    cursor: move;
                    .thy-group-header-content {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        align-items: center;
                        .thy-group-title {
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            color: #333;
                            font-size: 1rem;
                            max-width: 150px;
                            margin-right: 10px;
                        }
                        .thy-group-count {
                            font-size: .875rem;
                            font-weight: 400;
                            color: #aaa;
                            margin-right: 2px;
                        }
                        .finished {
                            color: #22d7bb;
                        }
                        .unfinished {
                            color: #ffc442;
                        }
                    }
                }
            }
        }
        .thy-group-body {
            overflow-y: auto;
            overflow-x: hidden;
            vertical-align: top;
            display: inline-block;
            zoom: 1;
            flex: 1 1 auto;
            .thy-group-list {
                padding: 0 10px;
                min-height: 5px;
                overflow: hidden;
            }
            .thy-group-list-item-add {
                padding: 0 10px 10px;
                display: block;
                .thy-group-card-add-name {
                    margin-bottom: 10px;
                    resize: vertical;
                }
                .form-control {
                    display: block;
                    width: 100%;
                    line-height: 1.5;
                    color: #333;
                    background-color: #fff;
                    background-clip: padding-box;
                    border: 1px solid #eee;
                    border-radius: .25rem;
                    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                }
                .thy-group-card-add-aside {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    margin-bottom: 10px;
                    .select-task-type {
                        display: flex;
                        align-items: center;
                        margin-right: 16px;
                        height: 24px;
        
                    }

                }
            }
        }
        .cursor-pointer, .hand {
            cursor: pointer;
        }
        .thy-avatar {
            position: relative;
        }
        .thy-avatar-22 .avatar-default {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            line-height: 22px;
            font-size: 12px;
            vertical-align: middle;
        }
        .thy-avatar .avatar-default {
            vertical-align: middle;
            text-align: center;
            overflow: hidden;
            zoom: 1;
            color: #fff;
            text-shadow: transparent 0 0 0;
        }
        .d-flex {
            display: flex!important;
        }
        .btn-primary:hover {
            box-shadow: 0 2px 5px 1px rgba(34,215,187,.6);
        }
        .btn-primary, .btn-primary:hover {
            color: #fff;
            background-color: #22d7bb;
            border-color: #22d7bb;
        }
        .btn-group-sm>.btn, .btn-sm {
            padding: .157rem 20px;
            border-radius: 1rem;
            display: inline-block;
            white-space: nowrap;
            vertical-align: middle;
            user-select: none;
            border: 1px solid transparent;
            transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
            outline: none;
        }
        .btn-pair-sm .btn+.btn {
            margin-left: 4px;
        }
        .btn-link.btn-link-info {
            color: #aaa;
        }
        .thy-group-footer {
            padding: 0 10px 10px;
            flex: 0 0 auto;
        }
        a.thy-group-footer-action {
            display: block;
            line-height: 32px;
            color: #666;
        }

</style>
