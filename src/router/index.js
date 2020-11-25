import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../components/clickInHome/ClickInHome');
const CDActive = () => import('../components/cdActive/CDActive')

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// 使用router
Vue.use(Router)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
	name:'Home',
    component:Home
  },
  {
    path:'/cdactive',
	name:'CDActive',
    component:CDActive,
    meta: {
      title: '光盘行动'
    },
  }
]

const router = new Router({
  routes,
  mode:'history',
})

export default router