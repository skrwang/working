<template>
    <div class="module">
        <div class="bj" v-show="isShow"></div>
        <div class="modal-backdrop" v-show="isShow">
            <header class="modal-header">
                    <a href="javascript:;" class="modal-close ng-scope" @click="showToggle"><i class="iconfont icon-close"></i></a>
                    <h3 class="modal-title ng-binding ng-scope">
                        新建项目模板
                    </h3>
            </header>
            <div class="modal-body">
                <div class="form-group">
                    <label class="col-sm-2 control-label ng-binding">模板名称</label>
                    <input type="text" class="form-control" id="name">
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label ng-binding">模板类型</label>
                    <input type="text" class="form-control" id="leixing">
                </div>
                <div class="form-group">
                    <label class="col-sm-2 control-label ng-binding">备注</label>
                    <input type="text" class="form-control" id="beizhu">
                </div>
                <div class="form-group">
                    <img src="1.png" alt="">
                </div>
                <div class="form-group">
                    <div class="offset-sm-2 col-sm-10 ">
                        <div class="btn-pair">
                            <button type="button" class="btn btn-primary ng-binding" @click="add">确定</button>
                            <button class="btn btn-link btn-link-info ng-binding" @click="showToggle">取消</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="left">
            <i class="iconfont icon-icon-"></i>
            <input type="text" placeholder="搜索项目模板" >
        </div>
        <div class="header-action-area">
            <button class="btn" @click="showToggle">
                <i ng-if="$ctrl.primaryIcon" ng-class="$ctrl.primaryIcon" class="iconfont icon-jiahao"></i>
                新建模板
            </button>
        </div>
        <div class="pad">
            <table>
                <thead>
                    <tr>
                        <th style="width:20%">项目模板</th>
                        <th>备注</th>
                        <th>类型</th>
                        <th>状态</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="item of this.$store.state.todos">
                        <td style="text-align:left">
                            <img :src="item.imgpath" alt="">
                            {{item.xiangmu}}
                        </td>
                        <td style="text-align:left">
                            {{item.beizhu}}
                        </td>
                        <td style="text-align:left">
                            {{item.leixing}}
                        </td>
                        <td style="">
                            <span style="background: #22d7bb;padding: 5px 10px;font-size: 12px;border-radius: 3px;color: #fff;box-sizing: border-box;">
                                {{item.zhuangtai}}
                            </span>
                        </td>
                        <td>
                            <span style="color:#22d7bb;">
                                <i class="iconfont icon-gongxiangtubiaozhuangtaileicaozuolei34"></i>
                                配置
                            </span>
                            <span>配置</span>
                            <span>修改</span>
                            <span @click="del(item.id)">删除</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isShow:false,
            
        }
    },
    created() {
        // 发送默认 GETALL
        this.$store.dispatch("YGETALL");
    },
    methods:{
        showToggle:function(){
            this.isShow = !this.isShow
        },
        del(id) {

          // 只需要一个id就行了
          this.$store.dispatch("YDEL", {
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
          var leixing=document.getElementById('leixing');
          var beizhu=document.getElementById('beizhu');
          this.$store.dispatch("YADD", {
            xiangmu: name.value,
            id: id,
            zhuangtai: '已启用',
            beizhu:beizhu.value,
            leixing:leixing.value
          });
          // 点击后 清空 文本框
          name.value = "";
          beizhu.value="";
          leixing.value="";
          this.isShow = !this.isShow;

        },

    }
}
</script>
<style lang="scss" scoped >
    .module{
        overflow: hidden;
        padding: 20px;
        box-sizing: border-box;
        width: 100%;
        background-color: #fff;
        .bj{
            width: 100%;
            height: 100%;;
            position: absolute;
            top: 0;
            left: 0;
            background-color: black;
            opacity: .5;
            z-index: 100;
        }
        .modal-backdrop{
            width: 800px;
            height: 650px;
            background-color: #fff;
            position: fixed;
            top: 300px;
            left: 35%;
            z-index: 200;
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
                position: absolute;
                right: 20px;
                top: 0px;
            }
            h3{
                float: left;
            }
            .modal-body {
                position: relative;
                flex: 1 1 auto;
                padding: 1.25rem 1.875rem 1.875rem;
            }
            .form-group {
                display: flex;
                flex-wrap: wrap;
                margin-left: -15px;
                margin-top: 15px;
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
                padding: .469rem .875rem;
                font-size: .875rem;
            }
            .btn {
                display: inline-block;
                white-space: nowrap;
                vertical-align: middle;
                border: 1px solid transparent;
                border-radius: 1.25rem;
                transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                color: #fff;
                background-color: #22d7bb;
                border-color: #22d7bb;
                font-size: .875rem;
                min-width: 70px;
                line-height: 1.5;
                padding: .407rem 22px;
                border-radius: 1.25rem;
                margin-right: 10px!important;
                cursor: pointer;
                outline: none;
            }
            .btn:hover{
                color: #fff;
                background-color: #22d7bb;
                border-color: #22d7bb;
            }
        }

        .left{
            float: left;
            width: 300px;
            position: relative;
            i{
                position: absolute;
                top: 7px;
                left: 10px;
                font-size: 20px;
            }
            input{
                padding: 8px 0;
                padding-left: 34px;
                padding-right: 14px;
                display: block;
                width: 100%;
                line-height: 1.5;
                color: #333;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #eee;
                border-radius: .25rem;
                transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                box-sizing: border-box;
                outline: none;
            }
            input:hover{
                border-color: #22d7bb;
            }
        }
        .header-action-area{
            float: right;
            margin-right: 0;
            .btn {
                display: inline-block;
                white-space: nowrap;
                vertical-align: middle;
                border: 1px solid transparent;
                border-radius: 1.25rem;
                transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                color: #fff;
                background-color: #22d7bb;
                border-color: #22d7bb;
                font-size: .875rem;
                min-width: 70px;
                line-height: 1.5;
                padding: .407rem 22px;
                border-radius: 1.25rem;
                margin-right: 10px!important;
                cursor: pointer;
                outline: none;
                i{
                    margin-right: 8px;
                }
            }
            .btn:hover{
                color: #fff;
                background-color: #22d7bb;
                border-color: #22d7bb;
            }
        }
        .pad{
            width: 100%;
            box-sizing: border-box;
            padding-top: 20px;
            background-color: #fff;
            float: left;
            table{
                width: 100%;
                box-sizing: border-box;
                border-collapse: collapse;
                thead th{
                    background-color: #f3f3f3;
                    vertical-align: bottom;
                    font-weight: 400;
                    border-bottom: 1px solid #eee;
                }
            }
            table,th,td,tr{
                border: 1px solid #eee;
            }
            th,td{
                font-size: 14px;
                padding: 12px 15px;
                display: table-cell;
                text-align: center;
                color: #666;
                img{
                    position: relative;
                    top: 7px;
                }
                span:hover{
                    color: #22d7bb;
                }
            }
        }
    }
</style>
