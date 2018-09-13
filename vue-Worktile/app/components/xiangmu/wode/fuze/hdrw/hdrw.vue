<template>
    <div style="padding:15px;box-sizing: border-box;">
        <div class="thy-group-wrapper">
            <div class="thy-group">
                <div class="thy-group-header draggable">
                    <div class="thy-group-header-content">
                        <div class="thy-group-title">收件箱</div>
                        <div class="thy-group-count finished">"{{this.$store.state.apy.length}}"</div>
                        <div class="thy-group-count">/</div>
                        <div class="thy-group-count unfinished">0</div>
                        <div class="thy-group-count">/</div>
                        <div class="thy-group-count">0</div>
                    </div>
                </div>
                <div class="ht"></div>
                <ul class="rwlie">
                    <li v-for="item of this.$store.state.apy">
                        <span>{{item.name}}</span>
                        <span>{{item.id}}</span>
                        <span @click="del(item.id)">{{item.shanchu}}</span>
                    </li>
                </ul>
                <div class="thy-group-body" v-show="isShow">
                    <div class="thy-group-list" id="000000000000000000000000">
                        <div class="thy-group-list-item-add">
                            <textarea class="thy-group-card-add-name form-control ng-pristine ng-valid ng-touched" name="taskTitle" id="name"></textarea>
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
                                    <button thybutton="primary" thysize="sm" class="btn btn-primary btn-sm" @click="add">确定</button>
                                    <a thybutton="link-secondary" thysize="sm" class="btn btn-link btn-link-info btn-sm" @click="showToggle">取消</a>
                                </div>
                                <div class="thy-group-card-add-aside-right"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="thy-group-footer" @click="showToggle"><!---->
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
                        <div class="thy-group-title">收件箱</div>
                        <div class="thy-group-count finished">"{{this.$store.state.apy1.length}}"</div>
                        <div class="thy-group-count">/</div>
                        <div class="thy-group-count unfinished">0</div>
                        <div class="thy-group-count">/</div>
                        <div class="thy-group-count">0</div>
                    </div>
                </div>
                <div class="ht"></div>
                <ul class="rwlie">
                    <li v-for="item of this.$store.state.apy1">
                        <span>{{item.name}}</span>
                        <span>{{item.id}}</span>
                        <span @click="del1(item.id)">{{item.shanchu}}</span>
                    </li>
                </ul>
                <div class="thy-group-body" v-show="isShow1">
                    <div class="thy-group-list" id="000000000000000000000000">
                        <div class="thy-group-list-item-add">
                            <textarea class="thy-group-card-add-name form-control ng-pristine ng-valid ng-touched" name="taskTitle" id="name2"></textarea>
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
                                    <button thybutton="primary" thysize="sm" class="btn btn-primary btn-sm" @click="add1">确定</button>
                                    <a thybutton="link-secondary" thysize="sm" class="btn btn-link btn-link-info btn-sm" @click="showToggle1">取消</a>
                                </div>
                                <div class="thy-group-card-add-aside-right"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="thy-group-footer" @click="showToggle1"><!---->
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
                        <div class="thy-group-title">收件箱</div>
                        <div class="thy-group-count finished">"{{this.$store.state.apy2.length}}"</div>
                        <div class="thy-group-count">/</div>
                        <div class="thy-group-count unfinished">0</div>
                        <div class="thy-group-count">/</div>
                        <div class="thy-group-count">0</div>
                    </div>
                </div>
                <div class="ht"></div>
                <ul class="rwlie">
                    <li v-for="item of this.$store.state.apy2">
                        <span>{{item.name}}</span>
                        <span>{{item.id}}</span>
                        <span @click="del2(item.id)">{{item.shanchu}}</span>
                    </li>
                </ul>
                <div class="thy-group-body" v-show="isShow2">
                    <div class="thy-group-list" id="000000000000000000000000">
                        <div class="thy-group-list-item-add">
                            <textarea class="thy-group-card-add-name form-control ng-pristine ng-valid ng-touched" name="taskTitle" id="name3"></textarea>
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
                                    <button thybutton="primary" thysize="sm" class="btn btn-primary btn-sm" @click="add2">确定</button>
                                    <a thybutton="link-secondary" thysize="sm" class="btn btn-link btn-link-info btn-sm" @click="showToggle2">取消</a>
                                </div>
                                <div class="thy-group-card-add-aside-right"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="thy-group-footer" @click="showToggle2"><!---->
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
                        <div class="thy-group-title">收件箱</div>
                        <div class="thy-group-count finished">"{{this.$store.state.apy3.length}}"</div>
                        <div class="thy-group-count">/</div>
                        <div class="thy-group-count unfinished">0</div>
                        <div class="thy-group-count">/</div>
                        <div class="thy-group-count">0</div>
                    </div>
                </div>
                <div class="ht"></div>
                <ul class="rwlie">
                    <li v-for="item of this.$store.state.apy3">
                        <span>{{item.name}}</span>
                        <span>{{item.id}}</span>
                        <span @click="del3(item.id)">{{item.shanchu}}</span>
                    </li>
                </ul>
                <div class="thy-group-body" v-show="isShow3">
                    <div class="thy-group-list" id="000000000000000000000000">
                        <div class="thy-group-list-item-add">
                            <textarea class="thy-group-card-add-name form-control ng-pristine ng-valid ng-touched" name="taskTitle" id="name4"></textarea>
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
                                    <button thybutton="primary" thysize="sm" class="btn btn-primary btn-sm" @click="add3">确定</button>
                                    <a thybutton="link-secondary" thysize="sm" class="btn btn-link btn-link-info btn-sm" @click="showToggle3">取消</a>
                                </div>
                                <div class="thy-group-card-add-aside-right"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="thy-group-footer" @click="showToggle3"><!---->
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
            isShow:false,
            isShow1:false,
            isShow2:false,
            isShow3:false,
        }
    }, 
    created() {
        // 发送默认 GETALL
        this.$store.dispatch("YUGETALL");
    },
    methods:{
        showToggle:function(){
            this.isShow = !this.isShow
        },
        showToggle1:function(){
            this.isShow1 = !this.isShow1
        },
        showToggle2:function(){
            this.isShow2 = !this.isShow2
        },
        showToggle3:function(){
            this.isShow3 = !this.isShow3
        },
        del(id) {

          // 只需要一个id就行了
          this.$store.dispatch("YUDEL", {
            id:id
          });
        },
        add() {
          // 如果为空 就 return 掉 什么都不做
          if (this.txt == "") return;
          // 随机一个8位id
          var id = "";
          var str = "741852qwertyuioplkjhgfdszxcvbnm0963";
          for (var i = 0; i < 8; i++) {
            //~~ 相当于parseInt
            id += str[~~(Math.random() * str.length)];
          }
          // 发送add 新增命令
          var name=document.getElementById('name');
          this.$store.dispatch("YUADD", {
            name: name.value,
            id: id,
            shanchu: '删除',
          });
          // 点击后 清空 文本框
          name.value = "";
          
          this.isShow = !this.isShow;

        },
        del1(id) {

          // 只需要一个id就行了
          this.$store.dispatch("YU1DEL", {
            id:id
          });
        },
        add1() {
          // 如果为空 就 return 掉 什么都不做
          if (this.txt == "") return;
          // 随机一个8位id
          var id = "";
          var str = "741852qwertyuioplkjhgfdszxcvbnm0963";
          for (var i = 0; i < 8; i++) {
            //~~ 相当于parseInt
            id += str[~~(Math.random() * str.length)];
          }
          // 发送add 新增命令
          var name2=document.getElementById('name2');
          this.$store.dispatch("YU1ADD", {
            name: name2.value,
            id: id,
            shanchu: '删除',
          });
          // 点击后 清空 文本框
          name2.value = "";
          
          this.isShow1 = !this.isShow1;

        },
        del2(id) {

          // 只需要一个id就行了
          this.$store.dispatch("YU2DEL", {
            id:id
          });
        },
        add2() {
          // 如果为空 就 return 掉 什么都不做
          if (this.txt == "") return;
          // 随机一个8位id
          var id = "";
          var str = "741852qwertyuioplkjhgfdszxcvbnm0963";
          for (var i = 0; i < 8; i++) {
            //~~ 相当于parseInt
            id += str[~~(Math.random() * str.length)];
          }
          // 发送add 新增命令
          var name3=document.getElementById('name3');
          this.$store.dispatch("YU2ADD", {
            name: name3.value,
            id: id,
            shanchu: '删除',
          });
          // 点击后 清空 文本框
          name3.value = "";
          
          this.isShow2 = !this.isShow2;

        },
        del3(id) {

          // 只需要一个id就行了
          this.$store.dispatch("YU3DEL", {
            id:id
          });
        },
        add3() {
          // 如果为空 就 return 掉 什么都不做
          if (this.txt == "") return;
          // 随机一个8位id
          var id = "";
          var str = "741852qwertyuioplkjhgfdszxcvbnm0963";
          for (var i = 0; i < 8; i++) {
            //~~ 相当于parseInt
            id += str[~~(Math.random() * str.length)];
          }
          // 发送add 新增命令
          var name4=document.getElementById('name4');
          this.$store.dispatch("YU3ADD", {
            name: name4.value,
            id: id,
            shanchu: '删除',
          });
          // 点击后 清空 文本框
          name4.value = "";
          this.isShow3 = !this.isShow3;

        },
    },
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
        .ht{
            width: 95%;
            margin: 0 auto;
            height: 5px;
            border-radius: 10%;
            background-color: #eee;
            margin-bottom: 15px;
        }
        .rwlie{
            width: 95%;
            margin: 0 auto;
            li{
                list-style: none;
                width: 100%;
                height: 30px;
                line-height: 30px;
                span {
                    margin-right: 10px;
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
