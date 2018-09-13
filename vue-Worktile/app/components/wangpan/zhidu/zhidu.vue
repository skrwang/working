<template>
    <div>
        <div class="header_qiye">
            <div class="qiyeL">
                <a href="javascript:">
                    <i class="iconfont icon-weibiaoti5"></i>
                    <router-link :to="qiye.url">企业网盘</router-link>
                    <i class="iconfont icon-jiantou2"></i>
                    公司制度
                    <i class="iconfont icon-jiantouarrow483"></i>
                </a>
            </div>
            <div class="qiyeR">
                <div class="btn-group">
                    <a href="" download="" class="btn xiazai">下载</a>
                    <button type="button" class="del btn" >删除</button>
                    <button class="gengduo btn" type="button">更多</button>
                </div>
                <button class="xinjian btn">
                    <i class="iconfont icon-jiahao"></i>
                    新建
                </button>
                <div class="shangchuan">
                    <button class="btn btn_primary" @click="fileClick">
                        <i class="iconfont icon-shangchuan"></i>
                        上传文件
                        <input type="file" id="upload_file" @change="fileChange($event)">
                    </button>
                    <button class="btn btn_toggle" @click="shangchuan = !shangchuan">
                        <i class="iconfont icon-jiantouarrow486"></i>
                    </button>
                    <div class="pbox" :class="!shangchuan ? 'show' : ''">
                        <div class="pop-menu">
                            <ul>
                                <li>
                                    <a href="javascript:" @click="fileClick">上传文件</a>
                                </li>
                                <li>
                                    <a href="javascript:" @click="fileClick">上传文件夹</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="file-body">
            <div class="file-body-content">
                <div class="file-list-header">
                    <p class="file-name">文件名</p>
                    <p class="file-size">大小</p>
                    <p class="file-updated-by">更新人</p>
                    <p class="file-time">更新时间
                        <i class="iconfont icon-jiantou1"></i>
                    </p>
                </div>
                <ul>
                    <li class="file-item" v-for="item of list" v-if="item.judge == 'zhidu'">
                        <div class="file-name">
                            <i class="iconfont" :class="item.icon"></i>
                            {{item.title}}
                        </div>
                        <div class="file-size">
                            <span v-if="item.size == '-'">{{item.size}}</span>
                            <span v-else="item.size != '-'">{{bytesToSize(item.size)}}</span>
                        </div>
                        <div class="file-updated-by">
                            <span class="portrait">SK</span>
                            <span class="name">{{item.updated}}</span>
                        </div>
                        <div class="file-time">
                            {{item.time}}
                            <div class="file-action">
                                <i class="iconfont icon-unie122"></i>
                                &nbsp;&nbsp;
                                <i class="iconfont icon-transverse" @click="delShow(index)"></i>
                                <div class="pop-menu" v-show="!delshow">
                                    <ul>
                                        <li>
                                            <a href="javascript:">新建文件夹</a>
                                        </li>
                                        <li>
                                            <a href="javascript:">设置权限</a>
                                        </li>
                                        <!-- <li>
                                            <a href="javascript:">公开链接</a>
                                        </li> -->
                                        <!-- <li>
                                            <a href="javascript:">移动</a>
                                        </li> -->
                                        <li>
                                            <a href="javascript:">复制</a>
                                        </li>
                                        <li>
                                            <a href="javascript:">下载</a>
                                        </li>
                                        <li>
                                            <a href="javascript:">重命名</a>
                                        </li>
                                        <!-- <li>
                                            <a href="javascript:">修改颜色</a>
                                        </li> -->
                                        <li >
                                            <a href="javascript:" @click="tanToggle">删除</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- 弹出删除 -->
                        <div class="alertBox" v-show="alertShow">
                            <div class="alertCon">
                                <div class="Atop">
                                    <h3>删除文件</h3>
                                    <a href="javascript:" class="guanbi" @click="delToggle"><i class="iconfont icon-close"></i></a>
                                </div>
                                <div class="Abottom">
                                    <p>
                                        <span>确认要删除文件：</span>
                                        <span class="delTxt">{{item.title}}</span>
                                    </p>
                                    <button class="delBtn" @click="del(item.id)">确认删除</button>
                                    <a href="javascript:" class="quxiao" @click="delToggle">取消</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                state:'all',
                shangchuan:true,
                imgList:{},
                file:-1,
                delshow:true,
                alertShow:false,
                qiye:{
                    icon:"icon-jiantou",
                    wangpan:"icon-weibiaoti5",
                    title:"企业网盘",
                    url:"/wangpan/qiye/"
                },
            }
        },
        methods:{
            tanToggle: function() {
                this.alertShow = !this.alertShow;
                this.delshow  = !this.delshow;
            },
            delToggle: function() {
                this.alertShow = !this.alertShow;
            },
            delShow(index){
                this.delshow = !this.delshow
            },
            // 删除
			del(id){
                // 只需要一个id就行了
                this.alertShow = !this.alertShow;
				this.$store.dispatch("XDEL",{
					id : id
				})
			},
            fileClick(){
                document.getElementById('upload_file').click();
            },
            fileChange(el) {
                if (!el.target.files[0].size) return;
                this.fileList(el.target);
                el.target.value = "";
            },
            fileDel(index) {
                this.imgList.splice(index, 1);
            },
            fileList(fileList) {
                let files = fileList.files;
                for (let i = 0; i < files.length; i++) {
                    //判断是否为文件夹
                    if (files[i].type != "") {
                        this.fileAdd(files[i]);
                    } else {
                    //文件夹处理
                        this.folders(fileList.items[i]);
                    }
                }
            },
                //文件夹处理
            fileList(fileList) {
                let files = fileList.files;
                for (let i = 0; i < files.length; i++) {
                    //判断是否为文件夹
                    if (files[i].type != "") {
                        this.fileAdd(files[i]);
                    } else {
                    //文件夹处理
                        this.folders(fileList.items[i]);
                    }
                }
            },
            fileAdd(file) {
                //总大小
                this.size = this.size + file.size;
                //判断是否为图片文件
                var time = new Date();
                var m = time.getMonth()+1;
                var d = time.getDate();
                var h = time.getHours();
                var s = time.getMinutes();
                this.imgList = {
                    title:file.name,
                    icon:"icon-fq_changxieguanli",
                    size:file.size,
                    updated:"skrwang",
                    time:m + '月' + d + '日' + h + ":"+s,
                    judge:"zhidu"
                }
                if (file.type.indexOf("image") == -1) {
                    
                    this.$store.dispatch("XADD",this.imgList);
                } else {
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    this.$store.dispatch("XADD",this.imgList);
                }
            },
            fileDel(index) {
                this.size = this.size - this.list[index].file.size;//总大小
                this.list.splice(index, 1);
            },
            bytesToSize(bytes) {
                if (bytes === 0) return '0 B';
                let k = 1000, // or 1024
                    sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                    i = Math.floor(Math.log(bytes) / Math.log(k));
                return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
            }
        },
        computed:{
            list(){
                // 此处向vuex中state拿取数据
                // 此处向vuex中state拿取数据
                if(this.state == "all"){
					return this.$store.state.wangpan
				}else if(this.state == "ziliao"){
					return this.$store.getters.ziliao
				}else if(this.state == "zhaopian"){
					return this.$store.getters.zhaopian
				}else if(this.state == "zhidu"){
					return this.$store.getters.zhidu
				}
            },
        },
        created(){
            // 发送action异步请求数据
            this.$store.dispatch('XGETALL');
        },
    }
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
        color: #333;
        font-size: 14px;
    }
    .btn {
        display: inline-block;
        margin-bottom: 0;
        text-align: center;
        vertical-align: middle;
        -ms-touch-action: manipulation;
        touch-action: manipulation;
        cursor: pointer;
        border: 1px solid transparent;
        white-space: nowrap;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        line-height: 20px;  
        outline: none;
    }
    input {
        outline: none;
    }
    .header_qiye {
        height: 50px;
        margin: 0;
        padding: 0 15px;
        position: relative;
        background: rgba(253,253,253,.95);
        .qiyeL {
            float: left;
            color: #333;
            line-height: 50px;
            a .icon-weibiaoti5{
                color: rgb(34, 215, 187);
                font-size: 20px;
                margin: 0 10px 4px 0;
            }
            a .icon-jiantouarrow483 {
                margin-left: 5px;
                color: #333;
            }
        }
        .qiyeR {
            float: right;
            // overflow: hidden;
            margin-top: 10px;
            .btn-group {
                line-height: 20px;
                margin-right: 10px;
                overflow: hidden;
                float: left;
                .btn {
                    padding: 3px 20px;
                    font-size: 14px;
                    // display: inline-block;
                    float: left;
                    color: #22d7bb;
                    background-color: #fff;
                    border-color: #22d7bb;
                }
                .xiazai {
                    border-bottom-left-radius: 4px;
                    border-top-left-radius: 4px;
                    margin-right: -1px;
                }
                .gengduo {
                    border-bottom-right-radius: 4px;
                    border-top-right-radius: 4px;
                    margin-left: -1px;
                }
            }
            .xinjian {
                padding: 3px 20px;
                font-size: 14px;
                color: #22d7bb;
                background-color: #fff;
                border-color: #22d7bb;
                float: left;
                border-radius: 5px;
                margin-right: 10px;
                &:hover {
                    color: #fff;
                    background-color: #22d7bb;
                    border-color: #22d7bb;
                }
            }
            .shangchuan {
                float: left;
                // overflow: hidden;
                position: relative;
                .btn {
                    padding: 3px 10px;
                    color: #fff;
                    background-color: #22d7bb;
                    border-color: #22d7bb;
                    border-radius: 20px;
                    float: left;
                    line-height: 20px;
                    &:hover {
                        box-shadow: 0 2px 5px 1px rgba(24,191,164,.45);
                    }
                }
                .btn_primary{
                    border-bottom-right-radius: 0;
                    border-top-right-radius: 0;
                    position: relative;
                    input {
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 73px;
                        height: 22px;
                        display: none;
                    }
                }
                .btn_toggle{
                    border-bottom-left-radius: 0;
                    border-top-left-radius: 0;
                    position: relative;
                }
                .pbox {
                    position: absolute;
                    display: none;
                    text-align: left;
                    font-size: 14px;
                    background: #FFF;
                    box-shadow: 0 0 24px rgba(0,0,0,.18);
                    border-radius: 0;
                    border: 0;
                    min-width: 230px;
                    z-index: 1100;
                    top: 31px;
                    right: 7.0156px;
                    &.show{
                        display: block;
                    }
                    .pop-menu {
                        display: block;
                        padding: 5px 0;
                        min-width: 240px;
                        ul li {
                            display: block;
                            padding: 0;
                            margin: 0 0 2px;
                            cursor: pointer;
                            transition: background .2s;
                            &:hover {
                                background: #f3f3f3;
                            }
                            &:hover a {
                                color: #333;
                                padding-left: 26px;
                            }
                            a {
                                display: block;
                                padding: 5px 18px;
                                line-height: 30px;
                                color: #666;
                                text-decoration: none;
                                box-sizing: border-box;
                                transition: padding-left .2s;
                            }
                        }
                    }
                }
            }
        }
    }
    .file-body {
        padding: 15px 15px 0;
        height: 551px;
        .file-body-content {
            -webkit-box-flex: 1;
            -ms-flex: 1;
            flex: 1;
            -webkit-flex: 1;
            margin-bottom: 15px;
            background: #fdfdfd;
            font-size: 14px;
            height: 100%;
            .cur {
                background: #22d7bb;
            }
            .file-list-header,.file-item {
                line-height: 27px;
                color: #666;
                display: -webkit-flex;
                flex-direction: row;    
                position: relative;
                padding: 14px 35px;
                border-bottom: 1px solid #eee;
                .file-name{
                    -webkit-box-flex: 1;
                    -ms-flex: 1 1 0px;
                    flex: 1 1 0;
                    -webkit-flex: 1 1 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    cursor: pointer;
                }
                .file-size {
                    width: 120px;
                    cursor: pointer;
                }
                .file-updated-by {
                    width: 130px;
                }
                .file-time {
                    width: 170px;
                    cursor: pointer;
                    position: relative;
                    .pop-menu {
                        padding: 5px 0;
                        min-width: 203px;
                        position: absolute;
                        right: -36px;
                        top: 20px;
                        background: #fff;
                        z-index: 9999;
                        text-align: left;
                        ul li{
                            display: block;
                            padding: 0;
                            margin: 0 0 2px;
                            cursor: pointer;
                            -webkit-transition: background .2s;
                            transition: background .2s;
                            a {
                                display: block;
                                padding: 5px 18px;
                                line-height: 30px;
                                color: #666;
                                text-decoration: none;
                                -webkit-box-sizing: border-box;
                                box-sizing: border-box;
                                -webkit-transition: padding-left .2s;
                                transition: padding-left .2s;
                            }
                            &:hover {
                                box-shadow: 0 0 8px 2px #eee;
                            }
                            &:hover a {
                                color: #333;
                                padding-left: 26px;
                            }
                        }
                    }
                }
                .file-action {
                    width: 75px;
                    text-align: right;
                    visibility: visible;
                    display: none;
                    i {
                        color: #22d7bb;
                    }
                }
            }
            .file-item:hover {
                box-shadow: 0 0 8px 2px #eee;
                background: 0 0;
            }
            .file-item:hover .file-action {
                display: inline-block;
            }
            .alertBox {
                width: 100%;
                height: 100%;
                background:rgba(0,0,0,.2);
                position: fixed;
                top: 0;
                left: 0;
                .alertCon {
                        width: 660px;
                        height: 185px;
                        background-color: #fff;
                        box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.3);
                        border-radius: .3rem;
                        position: absolute;
                        top: 69px;
                        left: 331px;
                    .Atop {
                        padding: 0 1.875rem;
                        height: 50px;
                        align-items: center;
                        border-bottom: 1px solid #eee;
                        position: relative;
                        h3 {
                            font-size: 18px;
                            font-weight: 500;
                            float: left;
                            line-height: 50px;
                        }
                        i{
                            float: right;
                            font-size: 16px;
                            color: #ddd;
                            line-height: 50px;
                        }
                    }
                    .Abottom {
                        padding: 1.25rem 1.875rem 1.875rem;
                        p {
                            margin-bottom: 20px;
                            .delTxt {
                                color: #ff5b57;
                            }
                        }
                        .delBtn{
                            color: #fff;
                            background-color: #ff5b57;
                            border-color: #ff5b57;
                            width: 115px;
                            height: 40px;
                            text-align: center;
                            line-height: 40px;
                            outline: none;
                            border-radius: 40px;
                            border: none;
                        }
                        a {
                            color: #aaa;
                            margin-left: 10px;
                        }
                    }
                }
            }
        }
    }
</style>

