<template>
  <div>
    <header>
        <ul>
            <!-- cur 样式要在点击的标题与路由中的挑剔匹配时展示 -->
            <li v-for="item of tabNav" :class="{cur:item.title == $route.name}">
                <!-- 做跳转 -->
            <router-link :to='item.url'>{{item.title}}</router-link>
            </li>
        </ul>
    </header>
    <!-- 用于展示路由连接的组件 -->
    <router-view>

    </router-view>
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

<style lang="scss">
    *{
      padding: 0;
      margin: 0;
    }
    header{
      height: 50px;
      border-bottom: 1px solid #eee;
    }
    header ul{
        list-style:none;
    }
    header ul li {
        float: left;
        width: 80px;
        height: 48.2px;
        line-height: 40px;
        text-align: center;
    }
    li.cur{
        color: #22d7bb;
        border-bottom: 2px solid #22d7bb;
    }
    a{
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: black;
    }
    .router-link-active{
        color: green;
    }
</style>
