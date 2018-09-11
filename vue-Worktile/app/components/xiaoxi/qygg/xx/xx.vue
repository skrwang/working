<template>
    <div class="box">
        <div class="top">
            <div>123</div>
        </div>
        <div class="bottom">
            <div>
                345
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
        margin-top: 15px;
        float: left;
        box-sizing: border-box;
        width: 99%;
        background-color: #fdfdfd;
        height: 581px;
    }
    .box .top{
        overflow:scroll; 
        width: 100%;
        height: 411px;
    }
    .box .bottom{
        border-top: solid 1px #eee;
        height: 170px;
        width: 100%;
    }
</style>


