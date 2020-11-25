<template>
  <div id="app">
    
    <mt-tab-container class="page-tabbar-container" v-model="selected">
      <mt-tab-container-item id="tab1">
        <router-link to="/home"></router-link>
        <router-link to="/cdactive"></router-link>
        <!-- <clickInHome></clickInHome> -->
        <router-view></router-view>
      </mt-tab-container-item>
      <mt-tab-container-item id="打卡动态">
        tab2
      </mt-tab-container-item>
      <mt-tab-container-item id="全部功能">
     tab3
      </mt-tab-container-item>
      <mt-tab-container-item id="个人中心">
       tab4
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- <clickInHome></clickInHome> -->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="tab1" @click.native="toggleTab('C')">
        <img slot="icon" src="./assets/images/tabbar/clockin.png"  v-show="!s.isC">
        <img slot="icon" src="./assets/images/tabbar/clockin-active.png" v-show="s.isC">
        优秀打卡
      </mt-tab-item>
      <mt-tab-item id="tab2" @click.native="toggleTab('T')">
        <img slot="icon" src="./assets/images/tabbar/trends.png" v-show="!s.isT">
        <img slot="icon" src="./assets/images/tabbar/trends-active.png" v-show="s.isT">
        打卡动态
      </mt-tab-item>
      <mt-tab-item id="tab3" @click.native="toggleTab('A')">
        <img slot="icon" src="./assets/images/tabbar/allfunction.png" v-show="!s.isA">
        <img slot="icon" src="./assets/images/tabbar/allfunction-active.png" v-show="s.isA">
        全部功能
      </mt-tab-item>
      <mt-tab-item id="tab4" @click.native="toggleTab('M')">
        <img slot="icon" src="./assets/images/tabbar/mine.png" v-show="!s.isM">
        <img slot="icon" src="./assets/images/tabbar/mine-active.png" v-show="s.isM">
        个人中心
      </mt-tab-item>
    </mt-tabbar>
    
  </div>
</template>

<script>
import clickInHome from './components/clickInHome/ClickInHome'
export default {
  name: 'App',
  data(){
    return {
		s: { //分别对应四个 tab
		        isC: 1,
		        isT: 0,
		        isA: 0,
		        isM: 0
		      },
      selected:'tab1'
    }
  },
  methods: {
	  clear: function() { //清空状态
	        for (let k in this.s) 
			this.s[k]=0;
	      },
	      toggleTab: function(state) {  //更换图标
	        this.clear(); // 选中前先重置其他tab
	        this.s['is'+state]=1
	      }
  },
  components: {
    clickInHome,
  }
}
</script>

<style>
@import './assets/css/base.css';


</style>
