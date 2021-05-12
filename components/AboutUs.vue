<template>
  <div class="container">
    <div class="about">
      <!-- <div class="photo"></div> -->
      <div class="text-block">
        <h2 data-aos="fade-up">Шеф-кондитер</h2>

        <div class="text">
          <p class="bold" data-aos="fade-up">
            Привет! Я - Катя, шеф-кондитер и основатель школы кондитерского
            искусства в г. Краснодаре.
          </p>
          <div class="face"></div>
          <p data-aos="fade-up">
            Показываю, как сделать самые популярные десерты, а также, вы можете
            заказать торт на день рождения, свадебный торт, детский торт,
            мужской или корпоративный.
          </p>
          <p data-aos="fade-up">
            В дополнение, можно заказать капкейки, макарон, имбирные пряники или
            сладкие наборы. От таких десертов не откажется ни один гость!
          </p>
          <p data-aos="fade-up">
            Я помогу вам с выбором начинки, оформлением торта и его доставкой к
            месту проведения праздника!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  position: relative;
  margin: 0 auto;
  font-family: "Lora", serif;
  background-color: #eee;
  width: 100%;
  display: flex;
  padding-bottom: 45px;
  .face {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: url("/img/face.jpg") center center no-repeat;
    background-size: cover;
    margin: 30px 0;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
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
  .about {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    font-size: 18px;
    line-height: 25px;
    .text-block {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .text {
      width: 100%;
      max-width: 1400px;
      text-align: center;
      .bold {
        font-size: 18px;
        font-weight: 600;
      }
      p {
        margin-bottom: 15px;
      }
    }
  }
}

@media screen and (max-width: 1700px) {
  .about {
    max-width: 100% !important;
  }
  .how {
    width: 100% !important;
    min-width: 280px !important;
    padding-bottom: 50px;
  }
  .text-block {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 0 !important;
  }
}
@media screen and (max-width: 991px) {
  .about {
    min-width: 280px !important;
  }
  .photo {
    display: none;
  }
  .text {
    width: 100% !important;
    min-width: 280px !important;
  }
}
</style>
