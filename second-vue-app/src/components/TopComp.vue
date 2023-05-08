<template>
  <header>
    <ul class="gnb">
      <li v-for="(v,i) in this.$store.state.cityData" v-if="i!='인트로'" >
        <a href="#" v-on:click="chgImg(i)">{{ i }}</a>
      </li>
      <!-- <li v-on:click="chgImg('서울')">
        <a href="#">서울</a>
      </li>
      <li v-on:click="chgImg('부산')">
        <a href="#">부산</a>
      </li>
      <li v-on:click="chgImg('제주')">
        <a href="#">제주</a>
      </li> -->
    </ul>
    <div class="m2">
      <a href="#" v-on:click="chgMenu(num)" v-text="'메뉴'+num"></a>

    </div>
  </header>
</template>

<script>
import $ from "jquery";
export default {
  name: "TopArea",
  data() {
    return {
      num:2
    };
  },
  methods: {
    chgMenu(n){
      console.log(n);
      this.$store.commit('chgMenu',n);
      n===1? this.num=2:this.num=1;

      $(".gnb a").removeClass("on");
      this.setLink();
    },
    chgImg(n) {
      console.log(n);
      this.$store.commit('chgImg',n);
      
    },
    setLink(){
       $(".gnb a").click(function(e) {
      e.preventDefault();
      console.log(3333);
      $(this).addClass("on").parent().siblings().find("a").removeClass("on")

    });
    }
  },
  mounted() {
    this.setLink();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.m2{
  display: block;
  text-align: right;
}
.m2 a{
  font-size: 20px;
}
.m2 a:hover{
  text-decoration: underline;
  text-decoration-style: double;
  color: green;
}
header {
  padding: 15px;
  border: 2px solid #ccc;
}
header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 0 15px;
}
header a {
  font-size: 30px;
  color: #222;
  text-decoration: none;
}
header a:hover ,
header a.on {
  color: orangered;
  text-decoration: overline;
  text-decoration-style: wavy;
}
</style>
