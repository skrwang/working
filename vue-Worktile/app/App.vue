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
                    <router-link :to='item.url'  class="app-item">
                        
                    </router-link>
                </li>
            </ul>
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
          title:'项目',
          url:'/index'
        },
        {
          title:'任务',
          url:'/news'
        },
        {
          title:'安全',
          url:'/video'
        },
        {
          title:'高级',
          url:'/expert'
        },
        {
          title:'全局',
          url:'/boxs'
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
    .middle-area ul li.cur a.app-item{
        background: #18bfa4;
    }
    .app-item {
        display: block;
        text-decoration: none;
        height: 70px;
        transition: box-shadow .3s,-webkit-box-shadow .3s;
    }
    a.app-item:before {
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
    .item-icon {
        margin-top: 15px;
        display: inline-block;
        color: #fff;
        font-size: 24px;
        opacity: .8;
        -webkit-transition: opacity .5s,-webkit-transform .5s;
        transition: opacity .5s,-webkit-transform .5s;
        transition: transform .5s,opacity .5s;
        transition: transform .5s,opacity .5s,-webkit-transform .5s;
        opacity: 1;
        transform: translateY(0);
    }
</style>
