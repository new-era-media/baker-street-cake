<template>
  <div class="container">
    <div class="img">
      <nuxt-link to="/">на главную</nuxt-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .img {
    max-width: 1400px;
    width: 100%;
    height: 900px;
    background: url("/img/404.jpg") center center no-repeat;
    background-size: contain;
    display: flex;
    // align-items: center;
    justify-content: center;
  }
  a {
    padding: 50px;
    font-size: 18px;
  }
}
</style>
<script>
export default {
  layout: "space"
};
</script>
