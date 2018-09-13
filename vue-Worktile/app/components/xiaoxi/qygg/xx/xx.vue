<template>
    <div class="box">
        <ul class="top">
            <p>企业公告由系统自动创建，所有企业成员都会自动加入到当前群组，该群组无法删除。</p>
            <div>
                <a href="#"><i class="iconfont icon-jiahao1"></i> 添加服务集成</a>
                <a href="#"><i class="iconfont icon-jiahao"></i> 加入更多群组</a>
            </div>
            <div class="line">
                <hr>
                <span class="tim">9月13日 星期四</span>
            </div>
            <li v-for="item of xiaoxi">
                <span class="tx">SK</span>
                <p class="p1">
                    <a href="#">skrwang</a>
                    <span class="sj">{{item.time}}</span>
                    <i class="iconfont icon-jiantouarrow483 i1" @click="Fdel">
                        <ul class="ej" v-show="isShow">
                            <li><i class="iconfont icon-star i2"></i>收藏</li>
                            <li><i class="iconfont icon-star i2"></i>创建为任务</li>
                            <li><i class="iconfont icon-star i2"></i>固定</li>
                            <li><i class="iconfont icon-star i2"></i>编辑</li>
                            <li @click="Fdelete(item.id)"><i class="iconfont icon-star i2"></i>删除</li>
                        </ul>
                    </i>
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
        <div class="alert" v-show="alertShow">
            <div class="alt_box" :class="{tt: alertShow}">
                <p class="alt_head">
                    <span>删除消息</span>
                    <i class="cancel iconfont icon-close" @click="Fdelete"></i>
                </p>
                <div class="alt_con">
                    <p>确认要删除当前消息吗？</p>
                    <button @click="QDdel">确定删除</button>
                    <a href="#" @click="Fdelete">取消</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            content:'',
            isShow:false,
            alertShow:false,
            ID:''
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
        Fdel(){
            this.isShow = !this.isShow;
        },
        Fdelete(id){
            this.alertShow = !this.alertShow;
            this.ID = id;
        },
        QDdel(){
            this.$store.dispatch("FDEL",{
                id : this.ID
            })
            this.alertShow = false;
        }
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
        .alert{
            z-index: 999;
            background-color: rgba(0, 0, 0, 0.3);
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0;
            left: 0;
            .alt_box{
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: -200px;
                width: 660px;
                height: 180px;
                background-color: #fff;
                border-radius: 4px;
                transition: all .4s;
                opacity: 0;
                &.tt{
                    top: 70px; 
                    opacity: 1;
                }
                .alt_head{
                    padding: 0px 30px;
                    height: 50px;
                    line-height: 50px;
                    border-bottom: 1px solid #eee;
                    box-sizing: border-box;
                    span{
                        float: left;
                        color: #333;
                    }
                    .cancel{
                        float: right;
                        display: block;
                        height: 5px;
                        width: 5px;
                        cursor: pointer;
                        color: #ddd;
                    }
                    .cancel:hover{
                        color: #22d7bb;
                    }
                }
                .alt_con{
                    padding: 25px 15px;
                    box-sizing: border-box;
                    p{
                        color: #888;
                        font-size: 15px;
                        margin-bottom: 20px;
                    }
                    button{
                        color: #fff;
                        background-color: #ff5b57;
                        border-color: #ff5b57;
                        display: inline-block;
                        white-space: nowrap;
                        vertical-align: middle;
                        user-select: none;
                        border: 1px solid transparent;
                        padding: 9px 29px;
                        border-radius: 20px;
                        margin-right: 20px;
                    }
                    a{
                        color: #22d7bb;
                        font-size: 14px;
                    }
                }
            }
        }
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
                .i1{
                    display: none;
                    font-size: 12px;
                    cursor: pointer;
                    position: relative;
                    .ej{
                        padding-top: 5px;
                        height: 225px;
                        width: 241px;
                        background-color: #fff;
                        box-shadow: 0 0 24px rgba(0,0,0,.18);
                        position: absolute;
                        top: 15px;
                        left: -110px;
                        color: #444;
                        li{
                            padding-left: 20px;
                            box-sizing: border-box;
                            margin-bottom: 0;
                            height: 44px;
                            line-height: 44px;
                            font-size: 15px;
                            .i2{
                                display: inline-block;
                                width: 27px;
                                font-size: 20px;
                                position: relative;
                                top: 2px;
                                transition: all .2s;
                            }
                        }
                        li:hover{
                            box-shadow: 0 0 24px rgba(0,0,0,.18);
                        }
                        li:hover .i2{
                            margin-left: 10px;
                        }
                    }
                }
                .i1:hover{
                    color: #22d7bb;
                }
            }
            .p1:hover .i1{
                display: inline-block;
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


