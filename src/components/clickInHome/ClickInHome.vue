<template>
   <div>
      <mt-swipe :auto="4000">
         <mt-swipe-item><img :src="img" alt=""></mt-swipe-item>
         <mt-swipe-item><img :src="imgen" alt=""></mt-swipe-item>
      </mt-swipe>

      <div class="grid">
         <ul>
            <li v-for="(module,index) in modules" :key="index">
               <a :href="module.route">
                  <span :class="module.className"></span>
                  <div>{{module.title}}</div>
               </a>
            </li>
         </ul>
      </div>


      <div class="friendsrange">
         <div class="title"><span>我的战友</span></div>
         <div class="list">
         <table>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>完成状态</th>
                  <th>操作</th>
               </tr>
            </thead>
            <tbody class="tbody">
               <tr v-for="(liItem,index) in friendslist" :key="index">
                  <td>{{liItem.name}}</td>
                  <td>{{liItem.state?'已完成':'未完成'}}</td>
                  <td class="btn"><img v-if="liItem.state" src="../../assets/images/btn/like.png" alt=""><img v-else src="../../assets/images/btn/remind.png" alt=""></td>
               </tr>
            </tbody>
         </table>
         </div>
      </div>

      <div class="manrange">
         <div class="title"><span>英雄榜</span></div>
         <div class="list">
         <table>
            <thead>
               <tr>
                  <th>ID</th>
                  <th>金币/个</th>
                  <th>可兑换</th>
               </tr>
            </thead>
            <tbody class="tbody">
               <tr v-for="(liItem,index) in manlist" :key="index">
                  <td>{{liItem.name}}</td>
                  <td>{{liItem.money}}</td>
                  <td>{{liItem.object}}</td>
               </tr>
            </tbody>
         </table>
         </div>
      </div>
      <div class="myrange">
         <div class="title"><span>我的排名</span></div>
         <div class="list" >
         <table>
            <thead>
               <tr>
                  <th>金币/个</th>
                  <th>兑换</th>
                  <th>击败</th>
               </tr>
            </thead>
            <tbody class="tbody">
               <tr v-for="(liItem,index) in mylist" :key="index">
                  <td>{{liItem.money}}</td>
                  <td>{{liItem.object}}</td>
                  <td>{{liItem.defeat}}%</td>
               </tr>
            </tbody>
         </table>
         </div>
      </div>
      
      
   </div>
</template>

<script>
import img from '../../assets/images/swiper1.jpg'
import imgen from '../../assets/images/小站英语.png'


   export default {
      name:'clickInHome',
      data(){
         return {
            isManMore:true,
            img:img,
            imgen:imgen,
            mylist:[{
               money:323,
               object:'Airpods1',
               defeat:29
            },{
               money:323,
               object:'Airpods1',
               defeat:29
            },{
               money:323,
               object:'Airpods1',
               defeat:29
            },{
               money:323,
               object:'Airpods1',
               defeat:29
            }],
            manlist:[{
               name:'张三',
               money:'123',
               object:'iphone12'
            },
            {
               name:'张三',
               money:'123435',
               object:'iphone12'
            },{
               name:'张三',
               money:'123',
               object:'iphone12'
            },{
               name:'张三',
               money:'123',
               object:'iphone12'
            }],
            friendslist:[
               {
                  name:'小明',
                  state:true
               },
               {
                  name:'小红',
                  state:false
               }
            ],
            modules:[
               {
                  title:'光盘行动',
                  className:'back-GP',
                  route:'cdactive'
               },
               {
                  title:'坚持早起',
                  className:'back-morning',
                  route:'#'
               },
               {
                  title:'背单词',
                  className:'back-Recite',
                  route:'#'
               },
               {
                  title:'坚持读书',
                  className:'back-read',
                  route:'#'
               },
               {
                  title:'记笔记',
                  className:'back-notes',
                  route:'#'
               },
               {
                  title:'自定义',
                  className:'back-custom',
                  route:'#'
               },
               {
                  title:'更多',
                  className:'back-more',
                  route:'#'
               },
               {
                  title:'赛季',
                  className:'back-season',
                  route:'#'
               }
            ]
         }
      },
      methods:{
         
      },
      components:{
      }
   }
</script>

<style scoped>
   .mint-button {
      margin: 10px auto;
      display: block;
   }
   .mint-swipe{
      margin: 2px;
      height: 200px;
      border-radius: 10px;
      background-color: #fff;
      
   }
   .mint-swipe img {
      width: 100%;
      height: 100%;
   }

   .grid {
      margin: 10px auto;
      background-color: #fff;
      border-radius: 5px;
      width: 98%;
      box-shadow: 0 1px 3px #ccc;
   }

   .grid span {
    display: inline-block;
    margin: 10px 0 0;
    width: 40px;
    height: 40px;
    background-repeat: round;
    border-radius: 10px;
}
.grid ul {
  margin:0;
  padding: 0;
  overflow: hidden;
}
.grid li {
    list-style: none;
    float: left;
    width: 25%;
    text-align: center;
    margin-bottom: 10px;
} 
a {
  text-decoration: none;
}

.back-GP {
  background-image: url('../../assets/images/grid/GP.png');
}
.back-morning {
  background-image: url('../../assets/images/grid/morning0.png');
}
.back-Recite {
  background-image: url('../../assets/images/grid/recite0.png');
}
.back-read {
  background-image: url('../../assets/images/grid/read0.png');
}
.back-notes {
  background-image: url('../../assets/images/grid/notes0.png');
}
.back-custom {
    background-image: url('../../assets/images/grid/custom0.png');
}
.back-more {
    background-image: url('../../assets/images/grid/more0.png');
}
.back-season {
    background-image: url('../../assets/images/grid/season.png');
}


.title {
   color: #fea03b;
}

.friendsrange,
.myrange,
.manrange {
   margin: 10px 0;
   background-color: #fff;
   box-shadow: 0 1px 3px #ccc;

}
.friendsrange .title,
.manrange .title,
.myrange .title {
   text-align: center;
   font-size: 30px;
}

.friendsrange .title span,
.manrange .title span,
.myrange .title span {
   border-bottom: 3px solid skyblue;
   height: 36px;
   border-bottom: 10px;
}

.list {
   margin-top: 10px;
}
tbody.tbody {
   width: 85%;
   margin: 0 auto;
   height: 50px;
   overflow-y: scroll;
   display: block;
   background-color: #fff5ea;
   border-radius: 5px;
   margin-bottom: 10px;
   
}
tbody .tbody ::-webkit-scrollbar { width: 0 !important }


tbody.tbody tr td:first-child {
   text-align: left;
}
tbody.tbody tr td:last-child {
   text-align: right;
   
}
.manrange tbody.tbody tr td:first-child ,
.friendsrange tbody.tbody tr td:first-child {
   padding-left: 13px;
}
.myrange tbody.tbody tr td:first-child  {
   padding-left: 16px;
}

.manrange tbody.tbody tr td:last-child{
padding-right: 6px;
}
.friendsrange tbody.tbody tr td:last-child{
   margin-right: 16px;
}
.myrange tbody.tbody tr td:last-child{
padding-right: 13px;
}

table {
   width: 100%;
   font-size: 16px;
}

tr {
   height: 25px;
   display: flex;
}

td,
th {
   text-align: center;
   flex: 1;
}
.btn img {
   width: 20px;
}
a {
    color: black!important;
}
</style>