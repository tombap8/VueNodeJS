<template>
  <header>
    <ul class="gnb">
      <li v-on:click="chgImg(0)">
        <a href="#">서울</a>
      </li>
      <li v-on:click="chgImg(1)">
        <a href="#">부산</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "TopArea",
  data() {
    return {};
  },
  methods: {
    chgImg(n) {
      console.log(n, store.state.isrc[n]);
      store.state.imgsrc = store.state.isrc[n];
    }
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
