import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'
import App from './App'
import store from './store.js'

// Vue.use(Vuex)


// 우선 npm install --save vuex 로 설치!!!


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
})
