<template>
   <div>
       <mt-header fixed :title="title">
          <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
          </router-link>
       </mt-header>

       <mt-swipe :auto="4000">
         <mt-swipe-item><img :src="img" alt=""></mt-swipe-item>
         <mt-swipe-item><img :src="imgen" alt=""></mt-swipe-item>
      </mt-swipe>

      <mt-button class="photo"><img src="../../assets/images/btn/photo.png" height="40" width="40" slot="icon"> 点击拍照</mt-button>

      <div class="carediv">
        <div class="title"><h5>注意事项：</h5></div>
        <p v-for="(careItem) in carelist" :key=careItem.id>
          {{careItem.id}}：{{careItem.context}}
        </p>
      </div>

      <div class="friendsrange">
         <div class="title"><span>同项目战友</span></div>
         <div class="list">
         <table>
            <thead>
               <tr>
                  <th>姓名</th>
                  <th>完成状态</th>
                  <th>展示</th>
               </tr>
            </thead>
            <tbody class="tbody">
               <tr v-for="(liItem,index) in friendsCDlist" :key="index">
                  <td>{{liItem.name}}</td>
                  <td>{{liItem.state?'是':'否'}}</td>
                  <td class="img"><img v-if="liItem.state" width="20" height="20" :src="liItem.imgpath"><span v-else>无</span></td>
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
     data(){
       return {
        emptyimg:'../../assets/images/empty.png',
        img:img,
        imgen:imgen,
        title:'光盘行动',
        carelist:[
          {id:1,context:'餐具内无大量食物。'},
          {id:2,context:'照片应该尽量清晰。'},
          {id:3,context:'除了阴影的深度和子的。'},
          {id:4,context:'形状外，其角度也起着重要作。'},
          {id:5,context:'用，叉或其他器皿放在凹碗或盘。'},
        ],
        friendsCDlist:[
          {
            name:'张三',
            state:true,
            imgpath:'static/img/photo.png'
          },
          {
            name:'李四',
            state:false,
            imgpath:'static/img/photo.png'
          },
          {
            name:'王五',
            state:false,
            imgpath:'static/img/photo.png'
          },
          {
            name:'小明',
            state:true,
            imgpath:'static/img/photo.png'
          }
        ]
       }
     }
   }
</script>

<style scoped>
.mint-header {
  height: 49px;
  font-size: 18px;
  background-color: #fff;
  color: #000;
}

.mint-swipe{
   margin: 51px 0;
   height: 200px;
   border-radius: 10px;
   background-color: #fff;
   
}
.mint-swipe img {
   width: 100%;
   height: 100%;
}
.photo.mint-button {
  margin: 0 auto;
  width: 50%;
  height: 3em;
  font-size: 20px;
  vertical-align: middle;
}
.photo.mint-button--normal {
    display: block;
    padding: 0 12px;
}

.mint-button {
  background-color: #fff9f3;
  box-shadow: none;
}

.mint-button::after {
    background-color: #ffd4a7;
}

.carediv {
  width: 80%;
  background-color: #f1f1f1;
  margin: 10px auto;
  text-indent:2em;
  font-size: 14px;
  padding:1em
}

.friendsrange {
  margin: 40px 0;
   background-color: #fff;
   box-shadow: 0 1px 3px #ccc;
}
.friendsrange .title {
  text-align: center;
   font-size: 30px;
}
.friendsrange .title span {
  border-bottom: 3px solid skyblue;
   height: 36px;
   border-bottom: 10px;
}

.list {
   margin-top: 10px;
}
tbody.tbody {
   /* width: 85%; */
   margin: 0 auto;
   height: 100px;
   overflow-y: scroll;
   display: block;
   background-color: #fff5ea;
   border-radius: 5px;
   margin-bottom: 10px;
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



</style>