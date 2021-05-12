<template>
  <div class="page">
    <h1>
      <p style="display:none">Торты на заказ в Краснодаре - </p> Baker Street Cake
    </h1>
    <h2>Авторская кондитерская в Краснодаре</h2>
  </div>
</template>
<style lang="scss" scoped>
.page {
  font-family: "Lora", serif;
  text-align: center;
  width: 100%;
  min-height: 100%;
  height: 100vh;
  background: url("/img/bg3.jpg") center center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  box-shadow: 0 14px 14px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  z-index: 1;
  h1 {
    text-shadow: 1px 1px 5px black, 0 0 1em rgba(1, 36, 1, 1); /* Параметры тени */
    font-size: 5rem;
    text-transform: uppercase;
    padding: 15px;
  }
  h2 {
    text-shadow: 1px 1px 5px black, 0 0 1em rgba(1, 36, 1, 1); /* Параметры тени */
    font-size: 1.5rem;
    text-transform: uppercase;
  }
}
@media screen and (max-width: 991px) {
  h1 {
    font-size: 3rem !important;
  }
  h2 {
    font-size: 1rem !important;
  }
}
</style>
