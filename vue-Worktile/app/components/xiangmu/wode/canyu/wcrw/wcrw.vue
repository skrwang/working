
<template>
    <div style="padding:15px;box-sizing: border-box;">
        <div class="pad">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>编号</th>
                        <th>状态</th>
                        <th>标题</th>
                        <th>负责人</th>
                        <th>截止时间</th>
                        <th>任务类型</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="item of arr">

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
            
        }
    }
}
</script>
<style lang="scss" scoped >
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
                    background-color: #fff;
                    vertical-align: bottom;
                    font-weight: 400;
                    border-bottom: 1px solid #eee;
                }
            }
            table,th,td,tr{
                border: 1px solid #eee;
                background-color: #fff;
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
</style>
