<template>
    <div class="module">
        <div class="left">
            <i class="iconfont icon-icon-"></i>
            <input type="text" placeholder="搜索项目模板" >
        </div>
        <div class="pad">
            <table>
                <thead>
                    <tr>
                        <th style="width:20%">任务类型</th>
                        <th>备注</th>
                        <th>分组</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="item of arr">
                        <td style="text-align:left">
                            <img :src="item.i" alt="">
                            {{item.xiangmu}}
                        </td>
                        <td style="text-align:left">
                            {{item.beizhu}}
                        </td>
                        <td style="text-align:left">
                            {{item.leixing}}
                        </td>
                        <td>
                            <span style="color:#22d7bb;">
                                <i class="iconfont icon-gongxiangtubiaozhuangtaileicaozuolei34"></i>
                                配置
                            </span>
                            <span>配置</span>
                            <span>修改</span>
                            <span>删除</span>
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
            arr:[
                {
                    i:'imgs/a1.png',
                    xiangmu:'任务',
                    beizhu:'适用于最简单的事务管理',
                    leixing:'通用',
                    zhuangtai:'已启用'
                },
                {
                    i:'imgs/a2.png',
                    xiangmu:'事务',
                    beizhu:'适用于通用的项目管理',
                    leixing:'通用',
                    zhuangtai:'已启用'
                },
                {
                    i:'imgs/a3.png',
                    xiangmu:'工时任务',
                    beizhu:'适用于敏捷研发管理，包括迭代、需求和缺陷',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    i:'imgs/a4.png',
                    xiangmu:'敏捷需求',
                    beizhu:'适用于缺陷管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    i:'imgs/a5.png',
                    xiangmu:'敏捷任务',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    i:'imgs/a6.png',
                    xiangmu:'敏捷缺陷',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    i:'imgs/a7.png',
                    xiangmu:'Web缺陷',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    i:'imgs/a8.png',
                    xiangmu:'iOS缺陷',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    i:'imgs/a9.png',
                    xiangmu:'Android缺陷',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    i:'imgs/a10.png',
                    xiangmu:'测试用例',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    i:'imgs/a11.png',
                    xiangmu:'研发需求',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    i:'imgs/a12.png',
                    xiangmu:'研发任务',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    i:'imgs/a13.png',
                    xiangmu:'缺陷',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
            ]
        }
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
