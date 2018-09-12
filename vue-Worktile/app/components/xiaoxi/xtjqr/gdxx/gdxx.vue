<template>
    <div class="box">
        <div class="top">
            <span>固定消息</span>
        </div>
        <div class="bottom">
            <img src="../../imgs/wjds.png">
            <p>没有固定的消息!</p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style lang = 'scss' scoped>
    .box{
        margin: 13px;
        width: 98%;
        height: 84%;
        box-sizing: border-box;
        background-color: #fdfdfd;
    }
    .box .top{
        padding: 10px 20px 0;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        box-sizing: border-box;
        border-bottom: none;
        span{
            display: inline-block;
            padding-left: 8px;
            line-height: 1;
            color: #333;
            font-size: 14px;
            border-left: solid 3px #22d7bb;
        }
    }
    .box .bottom{
        margin-top: 180px;
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
</style>


