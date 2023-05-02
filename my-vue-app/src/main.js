// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store.js'

// 우선 npm install --save vuex 로 설치!!!

// 플러그인으로 등록록
// Vue.use(Vuex);

Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
})
