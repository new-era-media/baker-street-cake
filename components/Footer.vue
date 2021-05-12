<template>
  <div class="container">
    <div class="content">
      <div class="footerImgBlock">
        <div class="footerImg"></div>
        <p></p>
      </div>
      <div class="footerText">
        <p>ИП “Слотина Екатерина Николаевна”</p>
        <p>ИНН: 790106924961</p>
        <p>ОГРНИП: 318790100002660</p>
        <p>г. Краснодар, ул. Тюляева, д. 8</p>
        <p>&copy;BAKER STREET CAKE, 2019</p>
      </div>
      <div class="icons">
        <a href="https://www.instagram.com/baker_streetcake/" target="_blank"
          ><div class="icon"></div
        ></a>
        <a href="https://wa.me/79996338571" target="_blank"
          ><div class="icon"></div
        ></a>
        <a href="https://vk.com/baker_street_school" target="_blank"
          ><div class="icon"></div
        ></a>
      </div>
    </div>
    <div class="newera">
      <a href="http://new-era-media.ru/" target="blank">
        <div class="text">
          Разработано New Era Media
          <div class="logo"></div>
        </div>
      </a>
    </div>
    <div class="text"></div>
  </div>
</template>
<style lang="scss" scoped>
.newera {
  font-family: "Lora", serif;
  display: flex;
  // align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  text-align: center;
  // padding-bottom: 10px;
  margin: 0 auto;
  height: 60px;
}
.logo {
  position: absolute;
  top: -15px;
  left: -60px;
  width: 50px;
  height: 50px;
  background: url(http://test.new-era-media.ru/exportimg/logo.png) center center
    no-repeat;
  background-size: cover;
}
.text {
  position: relative;
  color: #3336a7;
}

.content,
a {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-family: "Lora", serif;
  background-color: #f5f5f5;
  .icons {
    width: 33%;
    min-width: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
  }
  .icons a {
    margin: 0 20px;
    width: 40px;
    height: 40px;
    transition: 0.5s;
    // border-radius: 50%;
    &:hover {
      transform: scale(1.1);
    }
    &:nth-child(1) {
      background: url("/img/icon/instagram.png") center center no-repeat;
      background-size: cover;
    }
    &:nth-child(2) {
      background: url("/img/icon/whatsapp.png") center center no-repeat;
      background-size: cover;
    }
    &:nth-child(3) {
      background: url("/img/icon/vk.png") center center no-repeat;
      background-size: cover;
    }
  }
}

.footerImgBlock {
  min-width: 280px;
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px !important;
}
.footerImg {
  background: url("/img/logo.png") center center no-repeat;
  background-size: cover;
  width: 180px;
  height: 180px;
}
.footerText {
  text-align: center;
  padding: 10px;
  max-width: 280px;
  width: 33%;
  p {
    padding: 5px !important;
  }
}
@media screen and (max-width: 771px) {
  // .img {
  //   display: none !important;
  // }
  .footerText {
    text-align: center;
    padding: 10px;
    max-width: 280px;
    width: 100%;
    p {
      padding: 5px !important;
    }
  }
  .newera {
    padding-bottom: 50px;
    font-size: 14px;
    margin: 0 auto;
    height: 75px;
  }
  .logo {
    position: absolute;
    top: -10px;
    left: -50px;
    width: 40px;
    height: 40px;
    background: url(http://test.new-era-media.ru/exportimg/logo.png) center
      center no-repeat;
    background-size: cover;
  }
}
</style>
