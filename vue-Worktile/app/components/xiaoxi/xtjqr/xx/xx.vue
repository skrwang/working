<template>
    <div class="box">
        <div class="top">
            <div>qwe</div>
        </div>
        <div class="bottom">
            <div>
                asd
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
        margin: 13px;
        width: 98%;
        height: 84%;
        box-sizing: border-box;
        background-color: #fdfdfd;
    }
    .box .top{
        overflow:scroll; 
        width: 100%;
        padding: 20px 25px;
    }
    .box .bottom{
        position: absolute;
        bottom: 0;
        border-top: solid 1px #eee;
        overflow:scroll; 
        height: 170px;
        width: 100%;
    }
</style>


