import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import WOW from 'wowjs'
import 'animate.css/animate.min.css'
import animated from 'wowjs/css/libs/animate.css'
import '../src/assets/styles/font.css'
import VueParticles from 'vue-particles'
import $ from 'jquery'
Vue.prototype.$ = $
Vue.use(VueParticles)

console.log(WOW);
//这里需要将样式用起来，
Vue.use(animated)
Vue.prototype.$wow = WOW
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
