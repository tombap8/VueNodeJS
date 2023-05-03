<template>
  <header>
    <ul class="gnb">
      <li v-on:click="chgImg('서울')">
        <a href="#">서울</a>
      </li>
      <li v-on:click="chgImg('부산')">
        <a href="#">부산</a>
      </li>
      <li v-on:click="chgImg('제주')">
        <a href="#">제주</a>
      </li>
    </ul>
  </header>
</template>

<script>
import $ from "jquery";
export default {
  name: "TopArea",
  data() {
    return {};
  },
  methods: {
    chgImg(n) {
      console.log(n, store.state.cityData[n].이미지);
      store.state.imgsrc = store.state.cityData[n].이미지;
      store.state.desc = store.state.cityData[n].설명;
    }
  },
  mounted() {
    $("a").mouseover(function() {
      console.log(3333);
      $(this).addClass("on").parent().siblings().find("a").removeClass("on")

    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
header a:hover {
  color: orangered;
  text-decoration: overline;
  text-decoration-style: wavy;
}
</style>
