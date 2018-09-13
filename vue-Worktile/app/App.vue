<template>
  <div>
    <header>
        <div class="top-area">
          <a href="javascript:;" class="logo" @click="Back = !Back">
            <img src="https://s3.cn-north-1.amazonaws.com.cn/lclogo/team_logo_default.png" alt="">
          </a>
        </div>
        <div class="middle-area">
            <ul>
                <!-- cur 样式要在点击的标题与路由中的挑剔匹配时展示 -->
                <li v-for="item of tabNav" :class="{cur:$route.path.indexOf(item.url) != -1}">
                    <!-- 做跳转 -->
                    <router-link :to='item.url' class="app-item">
                        <i class="iconfont item-icon" :class="$route.path.indexOf(item.url) != -1 ? item.icon1 : item.icon"></i>
                        <span class="name">{{item.title}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="bottom-area">
            <ul class="nav-apps">
                <li v-for="item of bottom_area" :class="{cur:$route.path.indexOf(item.url) != -1}">
                    <router-link :to='item.url' class="app-item">
                        <i class="iconfont item-icon" :class="$route.path.indexOf(item.url) != -1 ? item.icon1 : item.icon"></i>
                        <span class="name">{{item.title}}</span>
                    </router-link>
                </li>
            </ul>
            <a href="javascript:;" class="user">
                <span class="avatar-default">
                    <div>SK</div>
                </span>
            </a>
        </div>
    </header>
    <!-- 用于展示路由连接的组件 -->
    <router-view class="right">

    </router-view>


    <div class="Backstage" v-if="Back">
      <div class="pop-box-content">
        <div class="action-menu">
            <a href="javascript:;" class="action-menu-item" v-for="item of Backstage">
                <span class="icon">
                    <i class="iconfont ic" :class="item.icon"></i>
                </span>
                <span class="name">{{item.title}}</span>
            </a>
        </div>
      </div>
    </div>  

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        Back:false,
        Backstage:[
            {
                icon : "icon-48dashboard",
                title:"进入企业后台"
            },
            {
                icon : "icon-useradd",
                title:"管理企业成员"
            },
            {
                icon : "icon-viewlistalt",
                title:"应用管理"
            },
            {
                icon : "icon-banshouwrenches",
                title:"配置服务集成"
            },
            {
                icon : "icon-setting",
                title:"企业设置"
            },
            {
                icon : "icon-exchange4jiaohuan",
                title:"登录另一个企业"
            },
            {
                icon : "icon-exit",
                title:"登出当前企业"
            }
        ],
        tabNav:[
            {
                title:'消息',
                icon:"icon-xiaoxi",
                icon1:"icon-xiaoxi2",
                url:'/xiaoxi/'
            },
            {
                title:'项目',
                icon:"icon-wangpan",
                icon1:"icon-project-o",
                url:'/xiangmu'
            },
            {
                title:'日历',
                icon:"icon-rili",
                icon1:"icon-rili2",
                url:'/rili'
            },
            {
                title:'网盘',
                icon:"icon-folder_icon",
                icon1:"icon-wenjianjia",
                url:'/wangpan/'
            },
            {
                path:'*',
                redirect:'/xiaoxi/qygg/xx'
            }
        ],
      bottom_area:[
          {
            title:'通讯录',
            icon:"icon-tongxunlu",
            icon1:"icon-51",
            url:'/tongxun/'
          }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    img {
      border: 0;
      vertical-align: middle;
    }
    a{
      text-decoration: none;
    }
    header{
      float: left;
      position: relative;
      width: 70px;
      background: #22d7bb;
      overflow-y: hidden;
      height: 100%;
    }
    header .logo{
      margin: 18px 0;
      text-align: center;
      display: block;
      background-color: transparent;
    }
    header .logo img{
      width: 50px;
      height: 50px;
      border-radius: 12px;
    }
    header .middle-area{
      text-align: center;
    }
    .middle-area ul{
      list-style:none;
    }
    .middle-area ul li {
        cursor: pointer;
        position: relative;
        overflow: hidden;
        &:hover{
          background: #18bfa4;
        }
        &:hover a.app-item{
          box-shadow: 0 0 2px 2px #18bfa4;
        }
        &:hover a.app-item .item-icon {
          opacity: 1;
          -webkit-transform: translateY(-19px);
          transform: translateY(-19px);
        }
        &:hover a.app-item .name{
            height: auto;
            -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
        }
        .app-item {
          .item-icon {
              margin-top: 5px;
              display: inline-block;
              color: #fff;
              font-size: 24px;
              opacity: .8;
              -webkit-transition: opacity .5s,-webkit-transform .5s;
              transition: opacity .5s,-webkit-transform .5s;
              transition: transform .5s,opacity .5s;
              transition: transform .5s,opacity .5s,-webkit-transform .5s;
          }
          .name {
              display: block;
              height: 0;
              overflow: hidden;
              font-size: 12px;
              color: #fff;
              -webkit-transform: translateY(0);
              transform: translateY(0);
              -webkit-transition: height .5s,-webkit-transform .5s;
              transition: height .5s,-webkit-transform .5s;
              transition: height .5s,transform .5s;
              transition: height .5s,transform .5s,-webkit-transform .5s;
          }
        }
    }
    .middle-area ul li > a,.bottom-area ul li > a{
        width: 70px;
        display: block;
        text-decoration: none;
        height: 70px;
        transition: box-shadow .3s,-webkit-box-shadow .3s;
        line-height: 70px;
        font-weight: 400;
    }
    .middle-area ul li.cur > a,.bottom-area ul li.cur > a{
        background: #18bfa4;
    }
    .cur a:after {
        content: "";
        position: absolute;
        right: 0;
        top: 30px;
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-right: 5px solid #fdfdfd;
        border-bottom: 6px solid transparent;
    }
    .iconfont:before {
        color: white;
        font-size: 23px;
         font-weight: bold;
    }
    .icon-51::before {
      font-size: 30px;
    }
    .bottom-area {
        text-align: center;
        position: absolute;
        bottom: 20px;
        width: 100%;
    }
    .bottom-area .nav-apps{
        margin-bottom: 10px;
        list-style: none;
        li {
          cursor: pointer;
        position: relative;
        overflow: hidden;
        &:hover{
          background: #18bfa4;
        }
        &:hover a.app-item{
          box-shadow: 0 0 2px 2px #18bfa4;
        }
        &:hover a.app-item .item-icon {
          opacity: 1;
          -webkit-transform: translateY(-19px);
          transform: translateY(-19px);
        }
        &:hover a.app-item .name{
            height: auto;
            -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
        }
        .app-item {
          .item-icon {
              margin-top: 5px;
              display: inline-block;
              color: #fff;
              font-size: 24px;
              opacity: .8;
              -webkit-transition: opacity .5s,-webkit-transform .5s;
              transition: opacity .5s,-webkit-transform .5s;
              transition: transform .5s,opacity .5s;
              transition: transform .5s,opacity .5s,-webkit-transform .5s;
          }
          .name {
              display: block;
              height: 0;
              overflow: hidden;
              font-size: 12px;
              color: #fff;
              -webkit-transform: translateY(0);
              transform: translateY(0);
              -webkit-transition: height .5s,-webkit-transform .5s;
              transition: height .5s,-webkit-transform .5s;
              transition: height .5s,transform .5s;
              transition: height .5s,transform .5s,-webkit-transform .5s;
          }
        }
        }
    }
    .user:hover{
        opacity: 0.7;
        position: relative;
        display: block;
    }
    .avatar-default{
        text-align: center;
        overflow: hidden;
        zoom: 1;
        color: #fff;
        text-shadow: transparent 0 0 0;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        line-height: 48px;
        font-size: 12px;
        vertical-align: middle;
        background-color: rgb(44, 204, 218);
        display: inline-block;
    }
    .right{
      float: left;
      width: calc(100% - 70px);
      background: gray;
      height: 100%;
    }

    // 后台列表
    .Backstage{
        z-index: 1080;
        position: absolute;
        left: 70px;
    }
    .Backstage .pop-box-content {
        min-width: 240px;
        background: #fff;
        box-shadow: 0 0 24px rgba(0,0,0,.18);
        margin-top: 4px;
    }
    .action-menu {
      padding: 5px 0;
      display: block;
      width: 240px;
      background: #fff;
  }
    .Backstage .action-menu-item {
        display: flex;
        flex-wrap: wrap;
        padding: 10px 20px;
        position: relative;
        line-height: 20px;
        color: #666;
        align-items: center;
        cursor: pointer;
        text-decoration: none;
        transition: all .2s;
    }
    .Backstage .action-menu-item .icon {
        margin-right: 5px;
        color: #888;
        transition: margin-left .2s;
    }
    .Backstage .action-menu-item .name {
        flex: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: margin-left .2s;
    }
    .Backstage .action-menu-item .ic:before{
        color: #888;
        font-size: 15px;
        font-weight: 100;
    }
    .action-menu-item:hover{
        margin-left: 8px;
        background: #f3f3f3;
        color: #333
    }
</style>
