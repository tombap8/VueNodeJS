import Vue from 'vue';
import Vuex from 'vuex';
import 'babel-polyfill';
import {myD0, myD1, myD2} from './jsData/cityData';

// Vuex 를 사용하는 곳에서만 아래코드를 넣는다!
Vue.use(Vuex)



 // 뷰엑스 스토어 - 전역뷰데이터 저장소!
 export default new Vuex.Store({
    state:{
        // 데이터
        cityData:{...myD0,...myD1},
        // 입력변수
        imgsrc : "",
        desc : "",
        myD0 : myD0,
        myD1 : myD1,
        myD2 : myD2,
        num : 1,
    },
    mutations:{
        initSet(헐){// 하나의 전달값 - 자신의 state
            console.log(333);
            헐.imgsrc = 헐.cityData.인트로.이미지;
            헐.desc = 헐.cityData.인트로.설명;
        },
        chgMenu(헐,슉){
            헐.cityData = 
            슉==1?
            {...헐.myD0,...헐.myD1}:
            {...헐.myD0,...헐.myD2};

            console.log(헐.cityData);

            헐.imgsrc = 헐.cityData.인트로.이미지;
            헐.desc = 헐.cityData.인트로.설명;
        },
        chgImg(헐,슉) {
            헐.imgsrc = 헐.cityData[슉].이미지;
            헐.desc = 헐.cityData[슉].설명;
          },
    }
})

// export default store;