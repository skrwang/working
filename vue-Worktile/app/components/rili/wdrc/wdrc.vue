<template>
    <div>
        <div class='wdrc-nav'>
        	<div class='title'>
        		<i class='iconfont icon-rili1'></i>
        		<span>我的日程</span>
        	</div>
        	<div class='secondary-text'>
    		   <p class="jianting">
                    <span @click="jian" class='btn-left'> < </span>
                    <strong>{{year}}年{{month}}月</strong>
                    <span @click="jia" class='btn-right'>></span>
                </p>
        	</div>
        	<div class='flex-panel'>
        		<button class='wd-btn' @click='ads'>
        		 	<i>+</i>
        		 	新建日历
        		</button>
        		 <div class='wd-group'>
        		 	<button class='month'>月</button>
        		 	<button class='week'>周</button>
        		 	<button class='day'>日</button>
        		 </div>
        	</div>
        </div>
        <div class='flex-wrp' v-if='isxian'>
            <transition name="fade">
               <div class='flex-mt' v-if='isxian'>
                  <div class='model-header'>
                     <i @click='ads'></i>
                     <h3>新建日程</h3>
                  </div>
                  <div class='model-body'>
                      <form action="">
                        <div class='group input'>
                              <input type="text" placeholder="日程安排，如下午2:00例会"> 
                        </div>
                        <div class='group rili'>
                            <label for="">日历</label>
                             <select name="" id="">
                               <option value="0">会议安排</option>
                              </select>
                        </div>
                        <div class='group kaishi'>
                             <div class='ri-left'>
                                 <label for="">开始日期</label>
                                  <input type="date">
                             </div>
                             <div class='ri-right'>
                                 <label for="">结束日期</label>
                                  <input type="date">
                             </div>
                        </div>
                        <div class='group quanxuan'>
                            <input type="checkbox"></input>全天
                        </div>
                        <div class='group canxuan'>
                            <label for="">参选人</label>
                            <ul><li>sk</li> <li @click='xuanze()' class="last">+</li></ul>
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
                         <div class='group quanxuan'>
                            <input type="checkbox"></input>参与人反馈
                        </div>
                        <div class='group quanxuan' style="color:#22d7bb">
                           <span style='margin-left:20px'></span> 添加更过选项
                        </div>
                        <div class='group button-bar'>
                           <span></span>
                           <button>确定</button>
                           <a @@click='ads'>取消</a>
                      </div>
                      </form>
                  </div>
               </div>
             </transition>
         </div>
        <div class='wdrc-main'>
        	<div class='calender'>
                <table>
                    <thead>
                        <th>周日</th>
                        <th>周一</th>
                        <th>周二</th>
                        <th>周三</th>
                        <th>周四</th>
                        <th>周五</th>
                        <th>周六</th>
                    </thead>
                    <tbody>
                      <!-- index从0开始，i从1开始 -->
                       <tr v-for='(item,index) of calender.length /7'>
                         <td v-for='i of 7' :class="{'cur':calender[index * 7 + (i-1)].cur}">{{calender[index * 7 + (i-1)].fullDay}}</td>
                       </tr>
                    </tbody>
                </table>
            </div>
             <div class="schedule">
	             <div class="box" v-for="item of schedule">
	                <table>
	                    <tr v-for="child of item">
	                        <td v-for="txt of child" :style="{width:1000 / 7 * txt.colspan + 'px'}" :colspan="txt.colspan" :class="{cur : txt.title}">{{txt.title}}</td>
	                    </tr>
	                </table>
	             </div>
             </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            year:2018,
            month:9,
            isxian:false,
            isShow1:false,
            active:0,
            things:[
                    {
                        title:"这是一个事务",
                        start:20180903,
                        end:20180905
                    },
                    {
                        title:"这是一个事务1",
                        start:20180907,
                        end:20180909
                    },
                    {
                        title:"这是一个事务3",
                        start:20180910,
                        end:20180915
                    }
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
               
                var nowMonthLength=new Date(this.year,this.month,0).getDate();
                var nowMonthFirstWeek=new Date(this.year,this.month-1).getDay();
                var lastMonthLength=new Date(this.year,this.month-1,0).getDate();  
                var pmonth = this.month == 1 ? 12 : this.month - 1;
                var nmonth = this.month == 12 ? 1 : this.month + 1;
                var pyear = this.month == 1 ? this.year - 1 : this.year;
                var nyear = this.month == 12 ? this.year + 1 : this.year;
                function buling(n){
                  return n.toString().length> 1?n.toString():"0"+n.toString();
                }
                while(nowMonthFirstWeek--){
                  arr.unshift({
                    day:lastMonthLength,
                    cur:true,
                        fullDay:`${pyear}${buling(pmonth)}${buling(lastMonthLength)}`
                  });
                  lastMonthLength--
                }
                var _a=1;
               while (nowMonthLength--) {
	              arr.push({
	                day:_a,
	                cur:false,
	                fullDay:`${this.year}${buling(this.month)}${buling(_a)}`
	              });
	              _a++;
                }  
                var nextLength=arr.length >35 ? 42 -arr.length : 35 - arr.length;
                _a=1;
                while(nextLength--){
                  arr.push({
                    day:_a,
                    cur:true,
                    fullDay:`${nyear}${buling(nmonth)}${buling(_a)}`
                  });
                  _a++;
                }
              return arr;
        },
        schedule(){
                    var arr = [];//里面放的是box
                    
                    for (var i=0;i<this.calender.length/7;i++){
                        // console.log(this.calender.length);
                        arr.push([]);//里面放tr
                        for(var j=0;j<3;j++){
                            arr[i].push([]);//td
                            for(var k=0;k<7;k++){
                                arr[i][j].push({
                                    colspan:1,
                                    fullDay:this.calender[i*7+k].fullDay,
                                    week:k
                                });
                            }
                        }
                    }
                    //处理事务  things
                    this.things.forEach(item => {
                        //开始日期时间戳
                        // console.log(item);
                        var start=new Date(item.start.toString().substr(0,4),item.start.toString().substr(4,2)-1,item.start.toString().substr(6,2))
                        // console.log(start)
                        //结束时间的时间戳
                        var end=new Date(item.end.toString().substr(0,4),item.end.toString().substr(4,2)-1,item.end.toString().substr(6,2))
                        // console.log(end)
                        //结束时间减去开始时间计算经历了几天
                        var during=(end-start)/86400000+1
                        //一个信号量
                        var flag=true;
                        arr.forEach((week,weekidx)=>{
                            //先遍历tr
                            for(var i =0;i<3;i++){
                                //遍历td
                            for(var j=0;j<7;j++){
                            if(week[i][j]){
                            //如果这个对象被删除了，就不存在了
                            if(week[i][j].fullDay==item.start&&flag&&!week[i][j].title){
                                // 第一周持续的时间
                                var nowWeekDuring=during + week[i][j].week <= 7 ? during : 7 - week[i][j].week;
                                //设置title
                                week[i][j].title=item.title;
                                //设置持续时间
                                week[i][j].colspan=nowWeekDuring;
                                //删除后边的
                                week[i].splice(j+1,nowWeekDuring-1);
                                //上锁，防止出现3行
                                flag=false;
                                // 一下内容就是后边跨周持续时间的内容，跟第一周没有关系
                                // 信号量，剩余的事务持续时间
                                var rest=during - nowWeekDuring;
                                var count =0;
                                while(rest > 0){
                                    count++;
                                    var nextWeekDuring=rest >= 7 ? 7 :rest;
                                    for(var n=0;n<3;n++){
                                        // 判断如果当前行有标题就去下一行
                                        if(arr[weekidx + count][n][0].title){
                                            continue;
                                        }
                                        //weekidx 是起始周 
                                        //count跨了几周
                                        arr[weekidx + count][n][0].title=item.title;
                                        arr[weekidx + count][n][0].colspan=nextWeekDuring;
                                        arr[weekidx + count][n].splice(1,nextWeekDuring-1)
                                        break;
                                    }
                                    rest-=7;
                                }
                            }
                            }
                            }
                            }
                        })

                    });
                    console.log(arr);
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
        ads(){
          this.isxian = !this.isxian;  
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
  /*   div{
        float: left;
    } */
    i{
    	font-style: normal;
    }
    .wdrc-nav{
    	height: 50px;
	    margin: 0;
	    padding: 0 15px;
	    position: relative;
	    line-height: 50px;
	    background: rgba(253,253,253,.95);
    }
    .wdrc-nav .icon-rili1{
        color:#4cd9bf;
    }
    .title, .secondary-text , .flex-panel{
    	width:calc(100% / 3);
    	float:left;
    }
    .wdrc-nav .title{
	    font-size: 16px;
 	    color: #333;
	    -webkit-box-flex: 1;
	    -ms-flex: 1 1 0px;
	    flex: 1 1 0;
	    -webkit-flex: 1 1 0;
    }
    .secondary-text{
    	text-align: center;
    }
    .secondary-text strong{
	    font-size: 16px;
	    font-weight: normal;
	    color: #333;
	    margin-left: 13px;
	    margin-right: 13px;
    }
    .flex-panel .wd-btn{
    	display: inline-block;
	    padding: 3px 20px;
	    font-size: 14px;
	    line-height: 1.42857143;
	    color: #fff;
	    background-color: #22d7bb;
	    border-color: #22d7bb;
	    border-radius: 1.25rem;
	    outline: none;
	    border: none;
	    cursor: pointer;
    }
    .wd-group{
	     border: 1px solid #ccc;
	    border-radius: 6px;
	    width: 208px;
	    height: 28px;
	    line-height: 5px;
	    display: inline-block;
	    vertical-align: middle;
    }
    .wd-group button{
	    width: calc(100% /3);
	    height: 28px;
	    border: none;
	    border-right: 1px solid #ccc;
	    background-color: transparent;
	    box-sizing: border-box;
	    float: left;
    }
    .wdrc-main{
    	position: relative;
        width: 100%;
        overflow-y: auto;
	    overflow-x: auto;
	    padding: 15px 15px 0;
	    height: 553px;
    }
    .wdrc-main .calender{
    	background-color: #fdfdfd;
    	height: 553px;
    	position: relative;
    }
    .wdrc-main .calender table{
    	width: 100%;
        font-size: 1em;
    }
    .wdrc-main  .calender table th {
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        text-align: center;
    }

    .wdrc-main  .calender table,
    .wdrc-main  .calender th,
    .wdrc-main  .calender tr,
    .wdrc-main  .calender td {
        border: 1px solid #f3f3f3;
        border-collapse: collapse;
        box-sizing: border-box;
    }

    .wdrc-main  .calender td {
        height: 85px;
        vertical-align: top;
        text-align: left;
        padding: 5px 5px 0 0;
        font-size: 12px;
    }

    .wdrc-main  .calender td.cur {
        color: #666;
    }

    .schedule{
        position: absolute;
        top: 58px;
        margin: 0 auto;

    }
    .schedule .box{
        height: 85px;
        width: 100%;
    }
    .schedule .box table{
        position: relative;
        top: 17px;
        width: 100%;
    }
    .schedule .box table tr{
        height: 21px;
        line-height: 21px;
    }
    .schedule .box table td.cur{
        background-color: #f3dce1;
        font-size:12px;
    }
    .flex-wrp{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.4);
        position: absolute;
        z-index: 44;
        left:0;
        top:0;
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
    .flex-mt{
        width: 660px;
        height: 483px;
        border: 1px solid #ccc;
        background-color: #fff;
        position: absolute;
        top: 62px;
        left: 350px;
        z-index: 50;
        border-radius: 6px;
        box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.5);
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
                position: relative;
                flex: 1 1 auto;
                padding: 1.25rem 1.875rem 1.875rem;
                width:600px;
                height:383px;
                .group{
                    display: flex;
                    flex-wrap: wrap;
                    margin-left: -15px;
                    margin-bottom:15px;
                    input{
                            display: block;
                            width: 100%;
                            line-height: 1.5;
                            color: #333;
                            background-color: #fff;
                            background-clip: padding-box;
                            border: 1px solid #eee;
                            border-radius: .25rem;
                            padding: .469rem .875rem;
                            font-size: .875rem;
                            outline: none;
                            &:hover{
                                border:1px solid #22d7bb;
                            }
                     }
               }
               .rili label{
                margin-left:60px;
                line-height: 40px;
                font-size: 13px;
               }
               .rili select{
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
                  margin-left: 16px;
                  option{
                    color:#ccc;
                  }
               }
               .kaishi div{
                   width:calc(100% / 2);
                   float:left;
                   display: flex;
                   label{
                    margin-left:30px;
                    width:109px;
                    margin-right: 10px;
                    font-size: 13px;
                    line-height: 40px;
                   }
               }
               .quanxuan{
                    padding-left: 72px;
                    font-size: 13px;
                    vertical-align: middle;
                   input{
                      width: 16px;
                      height: 16px;
                      /* -webkit-appearance: none; */
                      border: 1px solid #ccc;
                      position: relative;
                      margin-left::30px;
                      vertical-align: middle;
                      &:hover{
                        border:1px solid #22d7bb;
                      }
                   }
               }
               .canxuan label{
                padding-left: 33px;
                color: #888888;
                font-size: 13px;
                line-height: 33px;
               }
               .canxuan ul{
                display: inline-block;
                vertical-align: middle;
                 margin-left: 11px;
                  li{
                    width: 30px;
                    height: 30px;
                    background-color: #2cccdc;
                    border-radius: 50%;
                    line-height: 30px;
                    color: #fff;
                    text-align: center;
                    float:left;
                    margin-right: 5px;
                 }
                  li.last {
                    border: 1px dotted #ccc;
                    color: #d4d5d4;
                    background-color: transparent;
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
                line-height: 40px;
               }
            }
     }
    .xuancy{
      width:660px;
      height:552px;
      border: 1px solid #ccc;
      background-color: #fff;
      position: absolute;
      top: -53px;
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


