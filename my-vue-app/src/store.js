import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'


const store = new Vuex.Store({
    state:{
        isrc:[
            "https://www.shutterstock.com/image-photo/songpagu-seoul-south-korea-september-260nw-2094838786.jpg",
            "https://imagescdn.gettyimagesbank.com/500/201901/jv11336724.jpg"
        ],
        imgsrc : "https://www.shutterstock.com/image-photo/songpagu-seoul-south-korea-september-260nw-2094838786.jpg"
    }
  })

  export default store;