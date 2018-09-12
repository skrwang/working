<template>
    <div>
        <div class="header_qiye">
            <div class="qiyeL">
                <a href="javascript:">
                    <i class="iconfont icon-weibiaoti5"></i>
                    企业网盘
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
                    <button class="btn btn_toggle">
                        <i class="iconfont icon-jiantouarrow486"></i>
                    </button>
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
                    <li class="file-item" v-for="item of list">
                        <!-- {{list}} -->
                        <div class="file-name">
                            <i class="iconfont" :class="item.icon"></i>
                            {{item.title}}
                        </div>
                        <div class="file-size">
                            <span>{{item.size}}</span>
                        </div>
                        <div class="file-updated-by">
                            <span class="portrait">SK</span>
                            <span class="name">{{item.updated}}</span>
                        </div>
                        <div class="file-time">
                            {{item.time}}
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
                state:'全部',
            }
        },
        methods:{
            fileClick(){
                document.getElementById('upload_file').click();
            },
            add() {
				// 如果为空 就 return 掉 什么都不做
				if(this.txt == '') return
				// 随机一个8位id
 				var id = '';
				var str = "741852qwertyuioplkjhgfdszxcvbnm0963";
				for(var i = 0; i < 8; i++) {
					//~~ 相当于parseInt
					id+= str[~~(Math.random() * str.length)]
				}
				// 发送add 新增命令
				this.$store.dispatch("ADD",{
					title:this.txt,
					id : id,
					done : false,
					time:new Date().getTime()
				});
				// 点击后 清空 文本框
				this.txt = ''
            },
            fileChange(el) {
              if (!el.target.files[0].size) return;
              this.fileList(el.target);
              console.log(el.target);
              el.target.value = ''
          },
          fileList(fileList) {
              let files = fileList.files;
              console.log(files);
              for (let i = 0; i < files.length; i++) {
                  //判断是否为文件夹
                  if (files[i].type != '') {
                      this.fileAdd(files[i]);
                  } else {
                      //文件夹处理
                      this.folders(fileList.items[i]);
                  }
              }
          },
          //文件夹处理
          folders(files) {
              let _this = this;
              //判断是否为原生file
              if (files.kind) {
                  files = files.webkitGetAsEntry();
              }
              files.createReader().readEntries(function (file) {
                  for (let i = 0; i < file.length; i++) {
                      if (file[i].isFile) {
                          _this.foldersAdd(file[i]);
                      } else {
                          _this.folders(file[i]);
                      }
                  }
              })
          },
          foldersAdd(entry) {
              let _this = this;
              entry.file(function (file) {
                  _this.fileAdd(file)
              })
          },
          fileAdd(file) {
              //总大小
              this.size = this.size + file.size;
              //判断是否为图片文件
              console.log(file);
              if (file.type.indexOf('image') == -1) {
                  file.src = 'wenjian.png';
                  this.$store.dispatch("ADD",{
                        icon: "icon-weibiaoti5",
                        size: "-",
                        title: "资料共享",
                        updated: "skrwang",
                        time: "9月11日14:35"
                  });
                  console.log(file);
              } else {
                  let reader = new FileReader();
                  reader.vue = this;
                  reader.readAsDataURL(file);
                    file.src = this.result;
                    this.$store.dispatch("ADD",{
                        file
                    });
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
          },
          dragenter(el) {
              el.stopPropagation();
              el.preventDefault();
          },
          dragover(el) {
              el.stopPropagation();
              el.preventDefault();
          },
          drop(el) {
              el.stopPropagation();
              el.preventDefault();
              this.fileList(el.dataTransfer);
          }
        },
        computed:{
            list(){
                // 此处向vuex中state拿取数据
                if(this.state == '全部'){
                    return this.$store.state.wangpan;
                }
            },
        },
        created(){
            // 发送action异步请求数据
            this.$store.dispatch('GETALL');
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
            overflow: hidden;
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
                overflow: hidden;
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

            .file-list-header,.file-item {
                line-height: 27px;
                color: #666;
                display: -webkit-flex;
                flex-direction: row;    
                position: relative;
                padding: 14px 35px;
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
                }
            }
        }
    }
</style>

