<template>
  <div>
    <header>
        <div class="top-area">
          <a href="javascript:;" class="logo">
            <img src="https://s3.cn-north-1.amazonaws.com.cn/lclogo/team_logo_default.png" alt="">
          </a>
        </div>
        <div class="middle-area">
            <ul>
                <!-- cur 样式要在点击的标题与路由中的挑剔匹配时展示 -->
                <li v-for="item of tabNav" :class="{cur:item.title == $route.name}">
                    <!-- 做跳转 -->
                    <router-link :to='item.url' class="iconfont" :class="item.icon">
                        
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="bottom-area">
            <ul class="nav-apps">
                <li v-for="item of bottom_area" :class="{cur:item.title == $route.name}">
                    <router-link :to='item.url' class="iconfont" :class="item.icon">
                        
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
    <!-- <router-view>

    </router-view> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      tabNav:[
        {
          title:'消息',
          icon:"icon-xiaoxi",
          url:'/index'
        },
        {
          title:'项目',
          icon:"icon-jijinxiangmu",
          url:'/news'
        },
        {
          title:'日历',
          icon:"icon-rili",
          url:'/video'
        },
        {
          title:'网盘',
          icon:"icon-yunyingpan",
          url:'/expert'
        }
      ],
      bottom_area:[
          {
            title:'通讯录',
            icon:"icon-tongxunlu",
            url:'/tongxun'
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
    }
    .middle-area ul li > a,.bottom-area ul li > a{
        width: 70px;
        display: block;
        text-decoration: none;
        height: 70px;
        transition: box-shadow .3s,-webkit-box-shadow .3s;
        line-height: 70px;
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
    .bottom-area {
        text-align: center;
        position: absolute;
        bottom: 20px;
        width: 100%;
    }
    .bottom-area .nav-apps{
        margin-bottom: 10px;
        list-style: none;
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
</style>
