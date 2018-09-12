<template>
    <div class="box">
        <div class="out">
            <div class="top">
                <div>
                    <button>
                        <i class="iconfont icon-guanlian"></i>
                        上传文件
                    </button>
                </div>
            </div>
            <ul class="nav">
                 <li>文件名</li>
                 <li>大小</li>
                 <li>上传者</li>
                 <li>上传时间</li>
            </ul>
            <div class="bottom">
                <img src="../../imgs/wjds.png">
                <p>没有文件</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style lang = 'scss' scoped>
    .box{
        padding: 15px;
        width: 100%;
        height: 88%;
        box-sizing: border-box;
        background-color: rgb(238,238,238);
        .out{
            background-color: #fdfdfd;
            height: 100%;
            .top{
                padding: 20px 20px 0;
                height: 85px;
                line-height: 30px;
                box-sizing: border-box;
                div{
                    float: right;
                    margin-right: 20px;
                    button{
                        cursor: pointer;
                        font-size: 15px;
                        outline: none;
                        width: 118px;
                        line-height: 23px;
                        padding: 2px 20px;
                        border-radius: 20px;
                        color: #fff;
                        background-color: #22d7bb;
                        border-color: #22d7bb;
                        display: inline-block;
                        white-space: nowrap;
                        vertical-align: middle;
                        user-select: none;
                        border: 1px solid transparent;
                    }
                }
                
            }
            .nav{
                color: rgb(136, 136, 136);
                font-size: 13px;
                padding: 15px;
                height: 15px;
                border-bottom: 1px solid rgb(238, 238, 238);
                width: 100%;
                li{
                    float: left;
                }
                li:nth-child(1){
                    width: 25%;
                }
                li:nth-child(2){
                    width: 15%;
                }
                li:nth-child(3){
                    width: 20%;
                }
                li:nth-child(4){
                    width: 40%;
                }
            }
            .bottom{
                margin-top: 50px;
                text-align: center;
                height: 100%;
                width: 100%;
                position: relative;
                img{
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                }
                p{
                    color: #cacaca;
                    font-size: 16px;
                    position: relative;
                    top: 105px;
                }
            }
        }
    }
</style>


