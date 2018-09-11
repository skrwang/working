<template>
    <div>
        <div class="rili_left1">
            <aside class='aside'>
                <div class='header'>
                     <span class='tit-rili'>日历</span>
                     <div class='more-rili' @click='xjrl'>123</div>
                </div>
                <div class='aside-wrap'>
                    <div class='aside-rili'>
                        <p class="jianting">
                            <span @click="jian" class='btn-left'> < </span>
                            <strong>{{year}}年{{month}}月</strong>
                            <span @click="jia" class='btn-right'>></span>
                        </p>
                       <div class='calender'>
                            <table>
                                <thead>
                                    <th>日</th>
                                    <th>一</th>
                                    <th>二</th>
                                    <th>三</th>
                                    <th>四</th>
                                    <th>五</th>
                                    <th>六</th>
                                </thead>
                                <tbody>
                                  <!-- index从0开始，i从1开始 -->
                                   <tr v-for='(item,index) of calender.length /7'>
                                     <td v-for='i of 7' :class="{'cur':calender[index * 7 + (i-1)].cur}">{{calender[index * 7 + (i-1)].fullDay}}</td>
                                   </tr>
                                </tbody>
                            </table>
                      </div>
                    </div>
                </div>   
            </aside>
            <ul>
                <li v-for="item of vRili" :class="{cur : $route.name == item.title}">
                    <router-link :to='item.url' class='iconfont' :class='item.icon'>
                        {{item.title}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="rili_right">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            year:2018,
            month:9,
            active:0,
            vRili:[
                {
                    title:'我的日程',
                    icon:"icon-rili",
                    url:'/rili/wdrc/'
                },
                {
                    title:'团队日程',
                    icon:"icon-rili",
                    url:'/rili/tdrc'
                    
                },
                {
                    title:'成员日程',
                    icon:"icon-rili",
                    url:'/rili/cyrc'
                }
            ]
        }
    },
    computed:{
            calender(){
              var arr=[];
              // new Date 有三个参数，1. 年 2，月， 3，默认1，如果是0，表示上个与的最后一天，-1，前两天，3后天
                var nowMonthLength=new Date(this.year,this.month,0).getDate();
                var nowMonthFirstWeek=new Date(this.year,this.month-1).getDay();
                var lastMonthLength=new Date(this.year,this.month-1,0).getDate();
                // console.log('本月'+nowMonthLength+"本月第一周"+nowMonthLength+"上个月长度"+lastMonthLength);
                // 补充上个月的最后几天
                
                  // this.month=parseInt(this.month);
                  
                  
                    function buling(n){
                      return n.toString().length> 1?n.toString():"0"+n.toString();
                    }
                while(nowMonthFirstWeek--){
                  arr.unshift({
                    day:lastMonthLength,
                    cur:true,
                        fullDay:`${buling(lastMonthLength)}`
                  });
                  lastMonthLength--
                }
                   // 本月天数
                var _a=1;
               while (nowMonthLength--) {
              arr.push({
                day:_a,
                cur:false,
                        fullDay:`${buling(_a)}`
              });
              _a++;
           }  
                // 下个月补全
                var nextLength=arr.length >35 ? 42 -arr.length : 35 - arr.length;
                _a=1;
                while(nextLength--){
                  arr.push({
                    day:_a,
                    cur:true,
                    fullDay:`${buling(_a)}`
                  });
                  _a++;
                }
                 // console.log(arr); 
              return arr;
            }
    },
    watch:{
          month(newVal,oldVal){
              if(newVal > 12){
                  this.month = 1;
                  this.year++
              }
              if(newVal < 1){
                  this.month = 12;
                  this.year--
              }
          }
    },
    filters:{
        daxie(str){
            return str.toUpperCase()
        }
    },
    methods:{
        jian(){
            this.month--
        },
        jia(){
            this.month++
        },
        xjrl(){
          alert(111);
        }
    }

}
</script>


<style lang = 'scss' scoped>
    .rili_left1{
        float: left;
        position: relative;
        width: 240px;
        height:100%;
        background: #fcfcfc;
        border-right: 1px solid #ddd;
    }
    .rili_left1 > ul{
        width: 240px;
        list-style: none;
    }
    .rili_left1 > ul > li{ 
        height: 40px;
        line-height: 40px;
        box-sizing: border-box;
        padding-left: 20px;
     }
    .rili_left1 > ul > li.cur{
        background: #e7f9f6;
        border-right: 4px solid #22d7bb;
    }
    .rili_left1 > ul > li > a{
        text-decoration: none;
        color:#333;
        font-size: 13px;
        display: inline-block;
        width: 200px;
    }
    .rili_right {
        float: left;
        width: calc(100% - 240px - 1px);
        height: 100%;
        background: #eee;
    }
    .aside .header{
        height:50px;
        box-sizing: border-box;
    }
    .aside-rili{
         margin-left: 10px;
         margin-right: 10px;
         height:230px;
         margin-top:15px;
    }
    .tit-rili{
        float:left;
        margin: 0 20px;
        color: #333;
        line-height: 50px;
        font-size: 16px;
    }
    .more-rili{
        float: right;
        margin: 0 20px;
        line-height: 50px;
    }
    .calender table{
        width:220px;
    }
    .calender table, .calender th , .calender tr, .calender td{
        border-collapse: collapse;
        font-weight: normal;
        font-size: 13px;
        line-height: 35px;
    }
   .rili_left1 ul li .icon-rili:before {
       margin-right: 6px;
     }
     .rili_left1 ul li:hover{
        box-shadow: -4px -2px 14px #ccc;
     }
    .calender td{
      vertical-align: top;
      text-align: center;
      padding: 3px;
      font-size: 12px;
      line-height: 21px;
      width: 20px;
      height: 20px;
    }
    .calender td.cur{
      color:#666;
    } 
    .active{
        border-radius: 50%;
        background: #22d7bb;
    }
    .jianting{
       width:220px;
       text-align: center;
       cursor: pointer;
       margin-bottom: 10px;
    }
    .jianting strong{
       font-size:.875rem;
    }
     .btn-left{
      float: left;
      margin-left:11px; 
     }
     .btn-right{
      float:right;
      margin-right: 11px;
     }
</style>


