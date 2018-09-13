<template>
  <div>
    <header>
      <ul>
        <!-- cur 样式要在点击的标题与路由中的标题匹配是展示 -->
        <li v-for="item of tabNav" :class="{cur : $route.name.indexOf(item.title) != -1}" @click="routerGo(item.url)">
          {{item.title}}
        </li>
      </ul>
    </header>
    <!-- 用于展示路由链接的组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tabNav:[
        {
          title:'首页',
          url:'/index',
          flag:0,
        },
        {
          title:'新闻',
          url:'/news',
          flag:1,
        },
        {
          title:'视频',
          url:'/video/',
          flag:2,
        }
      ]
    }
  },
  methods:{
    routerGo(url){
      // 路由跳转
      console.log(this.$route);
      this.$router.push({path:url})
    }
  }
}
</script>

<style lang="scss" scoped>
  header ul{
    list-style: none;
  }
  header ul li{
    float: left;
    width: 33.333%;
    height: 40px;
    line-height: 40px;
    text-align: center;
  }
  li.cur{
    color: #fff;
    background-color: #f00;
  }
  
</style>
