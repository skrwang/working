<template>
    <div style="padding:15px;box-sizing: border-box;">
        <div class="module">
        <div class="left">
             <i class="iconfont icon-icon-"></i>
            <input type="text" placeholder="搜索角色模式" >
        </div>
        <div class="pad">
            <table>
                <thead>
                    <tr>
                        <th style="width:20%">角色模式</th>
                        <th>备注</th>
                        <th>角色数量</th>
                        <th>默认</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="item of arr">
                        <td style="text-align:left">
                           {{item.anquan}}
                        </td>
                        <td style="text-align:left">
                            {{item.beizhu}}
                        </td>
                        <td >
                            {{item.shu}}
                        </td>
                        <td >
                              <div>
                                  <span></span>
                              </div>
                        </td>
                        <td >
                            {{item.caozuo}}
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[
                {
                    anquan:'通用角色模式',
                    beizhu:'通用角色模式',
                    shu:'3',
                    caozuo:'配置'
                },
                {
                    anquan:'软件权限模式',
                    beizhu:'适用于软件开发项目模板',
                    shu:'6',
                    caozuo:'配置'
                }
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
            position: relative;
            float: left;
            width: 300px;
            .icon-icon-{
                position: absolute;
                top: 10px;
                left: 10px;
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
            }
            img{
                vertical-align: -6px;
            }
            span{
                padding: 5px 10px;
            }
            .wancheng{
                background: rgb(232, 251, 248);
            }
            .weikaishi{
                background: rgb(254, 238, 238);
            }
            .jinxingzhong{
                background: rgb(255, 245, 231);
            }
            .guanbi{
                background: rgb(235, 248, 238);
            }
        }
    }
</style>
