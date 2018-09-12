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
                        <th style="width:20%">任务属性</th>
                        <th>唯一标识</th>
                        <th>备注</th>
                        <th>类型</th>
                        <th>分组</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="item of arr">
                        <td style="text-align:left">
                           {{item.xiangmu}}
                        </td>
                        <td style="text-align:left">
                            {{item.biaoshi}}
                        </td>
                        <td >
                            {{item.beizhu}}
                        </td>
                        <td >
                            {{item.leixing}}
                        </td>
                        <td>
                             {{item.fenzu}}
                        </td>
                        <td>
                             {{item.caozuo}}
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
                    xiangmu:'编号',
                    biaoshi:'identifier',
                    beizhu:'',
                    leixing:'文本',
                    fenzu:'标准',
                    caozuo:'——'
                },
                {
                    xiangmu:'任务类型',
                    biaoshi:'type',
                    beizhu:'',
                    leixing:'类型',
                    fenzu:'标准',
                    caozuo:'——'
                },
                {
                    xiangmu:'状态',
                    biaoshi:'state',
                    beizhu:'',
                    leixing:'状态',
                    fenzu:'标准',
                    caozuo:'——'
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
