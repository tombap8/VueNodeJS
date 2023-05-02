<template>
  <main>
    <img v-bind:src="store.state.imgsrc" alt="이미지" />
  </main>
</template>

<script>
export default {  
  name: "MainArea",
  data() {
    return {
      
    };
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
