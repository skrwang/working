<template>
    <div class="box">
        <div class="bottom">
            <img src="../../imgs/wjds.png">
            <p>没有未读消息!</p>
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


