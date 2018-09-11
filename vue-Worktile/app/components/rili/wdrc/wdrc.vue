<template>
    <div>
        <div class='wdrc-nav'>
        	<div class='title'>
        		<i>123</i>
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
        		 <button class='wd-btn'>
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
</style>


