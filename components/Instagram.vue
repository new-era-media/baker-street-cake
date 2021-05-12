<template>
  <div class="container">
    <h2 data-aos="fade-right">Мы в Instagram</h2>
    <div class="plagin">
      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      <div class="elfsight-app-5e76d9dc-0300-460e-9bcc-03cf1d6343dd"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h2 {
  width: 100%;
  font-size: 30px;
  padding: 120px 0 90px 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 95px;
    left: 50%;
    transform: translateX(-75%);
    width: 160px;
    height: 3px;
    background-color: black;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-25%);
    width: 160px;
    height: 3px;
    background-color: black;
  }
}
.container {
  font-family: "Lora", serif;
  background-color: white;
  width: 100%;
  z-index: 1;
}
.plagin {
  display: flex;
  align-items: center;
  justify-content: center;
}
.elfsight-app-5e76d9dc-0300-460e-9bcc-03cf1d6343dd {
  margin: 0 auto !important;
  // width: 100%;
  // max-width: 1300px;
}
</style>
