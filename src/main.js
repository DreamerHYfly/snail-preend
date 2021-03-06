import Vue from 'vue'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router/index'


Vue.use(MintUI)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})