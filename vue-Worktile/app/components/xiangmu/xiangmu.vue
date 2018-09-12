<template>
    <div class="body">
        <div class="left">
            <div class="header">
                <span>项目</span>
                <div class="more"><!---->
                    <button class="btn-icon-lg btn btn-icon btn-icon-light"><!---->
                        <i class="iconfont wtf wtf-project-add-o icon-jijinxiangmu"></i>
                    </button>
                </div>
            </div>
            <div class="body-list">
                <div class="search">
                    <i class="iconfont icon-icon-"></i>
                    <input type="text" placeholder="搜索任务">
                </div>
                <ul>
                    <li  v-for="item of tabNav1" :class="{cur : $route.name.indexOf(item.title) != -1}">
                        <i :class="item.leiming"></i> 
                        <router-link :to='item.url'>
                            {{item.title}}
                        </router-link>
                    </li>
                </ul>
                <ul>
                    <li  v-for="item of tabNav" :class="{cur : $route.name.indexOf(item.title) != -1}">
                        <i :class="item.leiming"></i> 
                        <router-link :to='item.url'>
                            {{item.title}}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="right">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            tabNav1:[
                {
                url:'/xiangmu/wode',
                title:"我的任务",
                leiming:'iconfont icon-xintubiao-'
                }
            ],
            tabNav:[
                {
                url:'/xiangmu/peizhi',
                title:"配置中心",
                leiming:'iconfont icon-gongxiangtubiaozhuangtaileicaozuolei34'
                },{
                url:'/xiangmu/huishou',
                title:"回收站",
                leiming:'iconfont icon-huishouzhan'
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped >
.body{
    width: calc(100% - 70px) !important;
    height: 100%;
}
.left{
    float: left;
    position: relative;
    width: 240px;
    background: rgba(253,253,253,.95);
    border-right: 1px solid #ddd;
    height: 100%;
    .header{
        width: 100%;
        height: 50px;
        span{
            float: left;
            margin: 0 20px;
            color: #333;
            line-height: 50px;
            font-size: 16px;
        }
        .more{
            float: right;
            margin: 0 20px;
            line-height: 50px;
            z-index: 100;
            .btn {
                display: inline-block;
                white-space: nowrap;
                vertical-align: middle;
                user-select: none;
                border: 1px solid transparent;
                font-size: .875rem;
                line-height: 1.5;
                border-radius: 1.25rem;
                transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s     ease-in-out;
                font-weight: 400;
                text-align: center;
                background-color: transparent;
                color: #ddd;
                .btn-icon i {
                    display: inline-block;
                    line-height: 1;
                    margin: 0;
                    font-size: 1.25rem;
                }
            }
        }
    }
    .more .btn:hover{
        color:#18bfa4;
    }
    .body-list{
        .search{
            position: relative;
            padding: 0 20px 10px;
            i{
                position: absolute;
                top: 7px;
                left: 30px;
                font-size: 20px;
            }
            input{
                background: #f3f3f3;
                box-shadow: none;
                color: #666;
                height: 36px;
                font-size: 14px;
                padding-left: 28px;
                border-radius: 20px;
                border: 1px solid transparent;
                outline: none;
                transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

            }
            input:hover{
                background: #fdfdfd;
                border: 1px solid #ddd;
            }
            input:focus{
                background: #fdfdfd;
                border: 1px solid #18bfa4;;
            }
        }
        ul li{
            width: 100%;
            box-sizing: border-box;
            margin-bottom: 2px;
            padding: 8px 20px;
            position: relative;
            cursor: pointer;
            font-size: 14px;
            a{
                font-size: 14px;
                color: black;
            }
        }
        ul li:hover{
            box-shadow: 5px 0 8px 2px #eee;
        }
        ul li.cur{
            background: #e7f9f6;
            border-right: 4px solid #22d7bb;
        }
    }
}
.right{
    float: left;
    width: calc(100% - 241px);
    height: 100%;
    background-color:rgb(238, 238, 238);
}
</style>
