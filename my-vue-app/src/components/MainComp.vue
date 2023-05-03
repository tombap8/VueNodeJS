<template>
  <main>
    <img v-bind:src="$store.state.imgsrc" alt="이미지" />
    <p v-text="$store.state.desc"></p>
  </main>
</template>

<script>
export default {
  name: "MainArea",
  data() {
    return {};
  },
  mounted(){
    store.commit('initSet');
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  padding: 10px;
}
main img {
  width: 100%;
}
</style>
