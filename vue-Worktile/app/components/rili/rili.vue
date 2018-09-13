<template>
    <div>
        <div class="rili_left1">
            <aside class='aside'>
                <div class='header'>
                     <span class='tit-rili'>日历</span>
                     <div class='more-rili iconfont icon-rili1' @click='xjrl'></div>
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
         <!-- 新建日历 -->
         <div class='rilixj-wp' v-show="isShow">
          <transition name="fade">
             <div class='rilixj' v-show="isShow">
                 <div class='model-header'>
                     <i @click='xjrl'></i>
                     <h3>新建日历</h3>
                 </div>
                 <div class='model-body'>
                   <form action="">
                      <div class='form-group moby-input'>
                          <input type="text" placeholder="日历名称">
                      </div>
                      <div class='form-group'>
                          <ul>
                            <li v-for='items of color'  :class='{active: activeName == items}' @click='selected(items)' :style="{'background-color':items.yanse}">

                               </li>
                          </ul>
                      </div>
                      <div class='form-group kejian'>
                        <label for="">可见范围</label>
                         <select name="" id="">
                           <option value="1">公开：企业所有成员都可以看见此日历</option>
                           <option value="0">私有：只有加入的成员才能看见此日历</option>
                         </select>
                      </div>
                      <div class='form-group cyrl'>
                        <label for="">日历成员</label>
                          <ul>
                            <li>sk</li>
                            <li class='last' @click='xuanze()'>+</li>
                          </ul>
                      </div>
                      <div class='xuancy' v-show="isShow1">
                          <div class='model-header'>
                           <i @click='xuanze'></i>
                           <h3>选择成员</h3>
                          </div>
                          <div class='tab-wrap'>
                             <div class='tabs'>
                                <ul>
                                  <li v-for='(itemss,index) of tabs' :class='{active1: active == index}' @click='tabclick(index)'>{{itemss.name}}</li>
                                </ul>
                                <div class='tab-1' v-show='active==0'>
                                    <div class='los'>
                                       <input type="text"placeholder='搜索成员'>
                                       <i class='iconfont  icon-icon-' ></i>
                                    </div>
                                    <ul>
                                      <li style='font-size: 14px;'>全部联系人</li>
                                      <li style='font-size: 14px; color:black'><span class='icons'>聪聪</span>   聪聪</li>
                                    </ul>
                                </div>
                                <div class='tab-2' v-show='active==1'>
                                     <ul>
                                       <li class='iconfont icon-jiantou'><i class='iconfont icon-qiyeguanli'></i>王氏集团<span>(2人)</span></li>
                                     </ul>
                                </div>
                                <p class='button-bar' style='margin-top:10px;display: inline-block;'>
                                   <button>确定</button>
                                   <a @click='xuanze'>取消</a>
                               </p>
                             </div>
                             <div class='tab-right'>
                                 <div class='tabrt-header'>
                                  <p><span>已选择成员</span><i>(1)</i></p>
                                 </div>
                                 <div class='tabrt-main'>
                                 <ul>
                                    <li><span class='icons'>sk</span>   skrwang</li>
                                 </ul>
                                   
                                 </div>
                                
                             </div>
                          </div>
                      </div>
                      <div class='form-group button-bar'>
                           <span></span>
                           <button>确定</button>
                           <a @click='xjrl'>取消</a>
                      </div>
                   </form>
                 </div>
             </div>
          </transition>
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
              isShow:false,
              isShow1:false,
              activeName: '',
              vRili:[
                  {
                      title:'我的日程',
                      icon:"icon-rili1",
                      url:'/rili/wdrc/'
                  },
                  {
                      title:'团队日程',
                      icon:"icon-jiantou",
                      url:'/rili/tdrc'
                      
                  },
                  {
                      title:'成员日程',
                      icon:"icon-jiantou",
                      url:'/rili/cyrc'
                  }
              ],
              color:[
                {yanse:'#22D7BB'},
                {yanse:'#18BFA4'},
                {yanse:'#2CCCDA'},
                {yanse:'#2DBCFF'},
                {yanse:'#4E8AF9'},
                {yanse:'#7076FA'},
                {yanse:'#9473FD'},
                {yanse:'#C472EE'},
                {yanse:'#EF7EDE'},
                {yanse:'#F969AA'},
                {yanse:'#FC587B'},
                {yanse:'#FA5A55'},
                {yanse:'#FF7747'},
                {yanse:'#FFA415'},
                {yanse:'#FFD234'},
                {yanse:'#99D75A'},
                {yanse:'#66C060'},
                {yanse:'#39BA5D'}
              ],
              tabs:[
                {name:'团队'},
                {name:'部门'}
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
            this.isShow = !this.isShow;
          },
         selected(items) {
           this.activeName = items
         },
         xuanze(){
            this.isShow1 = !this.isShow1;
          },
         tabclick(index){
          this.active = index;
         }
      }
  }
</script>


<style lang = 'scss' scoped>
     i{
      font-style: normal;
     }
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
    .icon-rili1{
      color:#ccc;
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
    /* 模态框 */
    .rilixj-wp{
        width: 100%;
        height: 100%;
        /* background-color: black; */
        background: rgba(0,0,0,.4);
        position: absolute;
        z-index: 44;
        left:0;
    }
    .rilixj {
          width: 660px;
          height: 349px;
          border: 1px solid #ccc;
          background-color: #fff;
          position: absolute;
          top: 62px;
          left: 350px;
          z-index: 50;
          border-radius: 6px;
          box-shadow: 0 0 1.5rem rgba(0,0,0,.5);
        }
    .fade-enter-active,.fade-leave-active{
      transition: all 0.5s ease-out;
    }
    /* 进入开始 */
    .fade-enter{
      transform: translateY(-500px);
      opacity: 0;
    }
    /* 出去终点 */
    .fade-leave-active{
      transform: translateY(-500px);
      opacity: 0;
    }
    .model-header {
      display: flex;
      padding: 0 1.875rem;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      line-height: 50px;
      border:1px solid #ccc;
    }
    .model-header i{
       order: 1;
       &::before {
        content:'×';
        color:#ccc;
        font-size: 30px;
        };
    }
    .model-header h3{
       font-size: 1rem;
       font-weight: 500;
    }
    .model-body {
      padding: 1.25rem 1.875rem 1.875rem;
    }
    .moby-input input{
      display: block;
      width: 100%;
      line-height: 1.5;
      color: #ccc;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #eee;
      border-radius: .25rem;
      padding: .469rem .875rem;
      font-size: .875rem;
      outline: none;
    }
    .moby-input input:hover{
      border: 1px solid #22d7bb;
    }
    .form-group{
     /*  height:25px;
      line-height: 25px; */
      margin-top:15px;
      margin-bottom: 15px;
     }
    .form-group ul{
       display: flex;
    }
    .form-group ul li{
      width: 25px;
      height: 28px;
      border-radius: 50%;
      margin-right: 5px;
      float: left;
      flex: 1;
      text-align: center;
    }
   .form-group ul li.active{
      &::before {
        content:'✔';
        color:#fff;
        text-align: center;
        line-height: 28px;
      };
    }
  .kejian select{
      width: 82%;
      line-height: 1.5;
      color: black;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #eee;
      border-radius: .25rem;
      padding: .469rem .875rem;
      font-size: .875rem;
      outline: none;
      option{
        color:#ccc;
      }
  }
  .form-group label{
    padding-left:33px;
    color: rgb(136, 136, 136);
    font-size: 13px;
  }
  .cyrl ul{
    display: inline-block;
    vertical-align: middle;
  }
  .cyrl ul li{
    width:30px;
    height:30px;
    background-color: #2cccdc;
    border-radius: 50%;
    line-height: 30px;
    color:#fff;
    text-align: center;
    margin-right:5px;
  }
  .cyrl ul li.last{
    border:1px dotted #ccc;
    color:#d4d5d4;
    background-color: transparent;
    &:hover{
      color:#2cccdc;
      border:1px solid #2cccdc;
    }
   }
   .button-bar span{
     width:105px;
     height:38px;
     display: inline-block;
   }
   .button-bar button{
      width:106px;
      height:38px;
      border-radius: 10px;
      background-color:#22d7bb;
      color:#fff; 
      border:none;
      outline: none;
   }
   .button-bar a{
    margin-left: 10px;
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
        position: absolute;
        right: 0;
        z-index: 60;
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
  .xuancy{
      width:660px;
      height:552px;
      border: 1px solid #ccc;
      background-color: #fff;
      position: absolute;
      top: -3px;
      left: 0px;
      z-index: 50;
      border-radius: 6px;
      box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.5);
      .tab-wrap{
        padding: 20px 30px;
      }
      
      .tab-wrap{
          .tabs{
            width:280px;
            height: 360px;
            float:left;
          }
          .tab-right{
            width:280px;
            height: 360px;
            float:left;
            margin-left: 35px;
            .tabrt-header p{
              line-height: 45px;
            }
          }
      }
      .tabs ul {
        width:280px;
        height:45px;
      }
      .tabs ul li{
        display: inline-block;
        font-size:15px;
        width:calc(280px / 2);
        text-align: center;
        line-height: 45px;
      }
      .tabs ul li.active1{
          color:#62d7c1;
        }
      .tab-1{
        width:280px;
        height:360px;
        border:1px solid #ccc;
        .los{
            width: 280px;
            height: 40px;
            position: relative;
            text-align: center;
            margin-top: 20px;
            margin-bottom: 10px;
          input{
              border-radius: 40px;
              height: 40px;
              outline: none;
              border: 1px solid #ccc;
              padding-left: 30px;
          }
          i{
              position: absolute;
              left: 53px;
              top: 14px;
          }
        }
        ul{
          height:71px;
          font-size: 14px;
          color:#ccc;
        }
        ul li span.icons{
          height: 25px;
          width: 25px;
          display: inline-block;
          color: #fff;
          border-radius: 50%;
          background-color: lime;
          text-align: center;
          font-size: 12px;
          line-height: 25px;
        }
      }
      .tab-2{
        width:280px;
        height:360px;
        border:1px solid #ccc;
        ul li:hover{
           box-shadow: -4px -2px 14px #ccc;
        }
        ul li{
          width: 100%;
          text-align: left;
          box-sizing: border-box;
          margin-top: 15px;
          padding-left: 15px;
          i{
            color:#ccc;
          }
        }
      }
      .tabrt-main{
        width:280px;
        height:360px;
        border:1px solid #ccc;
        ul li{
          font-size: 14px; 
          color:black;
          margin-top: 18px;
          margin-left: 15px;
        }
        ul li span{
          height: 25px;
          width: 25px;
          display: inline-block;
          color: #fff;
          border-radius: 50%;
          background-color: #22d7bb;
          text-align: center;
          font-size: 12px;
          line-height: 25px;
        }
      }
   }
</style>


