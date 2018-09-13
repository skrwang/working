<template>
    <div class="box">
        <ul class="top">
            <p>这里是你和机器人<a href="#">小特机器人</a>的私聊，在当前对话中发送的消息只有你自己可以访问，其他成员无法看到。</p>
            <div><a href="#"><i></i></a><a href="#"><i></i></a></div>
            <div class="line">
                <hr>
                <span class="tim">9月13日 星期四</span>
            </div>
            <li v-for="item of xiaoxi">
                <span class="tx">SK</span>
                <p class="p1">
                    <a href="#">skrwang</a>
                    <span class="sj">{{item.time}}</span>
                    <br>
                    <span class="txt">{{item.title}}</span>
                </p>
            </li>
        </ul>
        <div class="bottom">
            <div>
                <i class="iconfont icon-xiaolian"></i>
                <i class="iconfont icon-guanlian"></i>
                <i class="iconfont icon-jiahao1"></i>
                <i class="iconfont icon-neirongqiehuan"></i>
            </div>
            <textarea cols="30" rows="10" placeholder="按Enter发送消息" @keyup.enter="Fadd" v-model="content">
            </textarea>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            content:'',
        }
    },
    created() {
        // 发送默认 GETALL
        this.$store.dispatch("FGETALL")
    },
    computed: {
        xiaoxi() {
            return this.$store.state.xiaoxi;
        }
    },
    methods: {
        Fadd() {
            // 如果为空 就 return 掉 什么都不做
            if(this.content == '') return
            // 随机一个8位id
            var id = '';
            var str = "741852qwertyuioplkjhgfdszxcvbnm0963";
            for(var i = 0; i < 8; i++) {
                //~~ 相当于parseInt
                id+= str[~~(Math.random() * str.length)]
            }
            function buling(n){
                return n.toString().length > 1?n.toString():'0'+n.toString();
            }
            var time = new Date().getHours()+':'+buling(new Date().getMinutes());
            // 发送add 新增命令
            this.$store.dispatch("FADD",{
                title:this.content,
                id : id,
                time:time,
            });
            // 点击后 清空 文本框
            this.content = ''
        },
    }
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
        overflow: scroll;
        overflow-x: hidden;
        width: 100%;
        position: relative;
        height: calc(100% - 212px);
        padding: 20px 25px;
        .line{
            height: 5px;
            hr{
                position: absolute;
                width: 100%;
                top: 138px;
                border: none;
                height: 1px;
                margin: 0;
                display: block;
                background-image: linear-gradient(to right,#fff,#eee 50%,#fff);
                background-repeat: no-repeat;
            }
            .tim{
                margin: auto;
                padding: 0 20px;
                display: inline-block;
                background-color: #fdfdfd;
                font-size: 16px;
                color: #aaa;
                text-align: center;
                line-height: 20px;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                box-sizing: border-box;
            }
        }
        p{
            color: #b9b9b9;
            font-size: 15px;
            a{
                font-size: 15px;
                color: #6f8092;
            }
        }
        div{
            margin-top: 20px;
            margin-bottom: 45px;
            a{
                color: #6f8092;
                margin-right: 30px;
                font-size: 15px;
            }
            a:hover{
                text-decoration: underline;
            }
        }
        li{
            margin-bottom: 30px;
            span{
                display: inline-block;
            }
            .p1{
                margin-left: 50px;
                margin-top: -2px;
            }
            a{
                color: #333;
                font-size: 12px;
                display: inline-block;
            }
            .sj{
                margin-left: 5px;
                color: #aaa;
                font-size: 12px;
            }
            .txt{
                color: #333;
                font-size: 14px;
            }
            .tx{
                background-color: rgb(44, 204, 218);
                float: left;
                width: 38px;
                height: 38px;
                line-height: 38px;
                font-size: 12px;
                border-radius: 38px;
                text-align: center!important;
                overflow: hidden;
                zoom: 1;
                vertical-align: middle;
                color: #fff!important;
                text-shadow: transparent 0 0 0;
                padding: 0!important;
            }
        }
    }
    .box .bottom{
        position: absolute;
        bottom: 0;
        border-top: solid 1px #eee;
        height: 170px;
        width: 100%;
        padding-left: 25px;
        i{
            cursor: pointer;
            float: left;
            color: #aaa;
            padding: 10px 12px 8px 13px;
        }
        i:nth-child(1){
            padding: 10px 12px 8px 0px;
        }
        i:hover{
            color: #22d7bb;
        }
        textarea{
            height: 124px;
            background: 0 0;
            border: 0;
            width: 100%;
            border-radius: 0;
            box-shadow: none;
            font-size: 14px;
            outline: none;
            resize: none;
        }
    }
</style>


