<template>
  <div class="bg">
    <div class="container">
      <h2  data-aos="fade-right">Наш каталог</h2>
      <ul>
        <li  data-aos="fade-up">
          <a href="#CakePage">
            <p>Торты</p>
            <div class="img img1"></div>
          </a>
        </li>
        <li  data-aos="fade-up">
           <a href="#Capcake">
          <p >Капкейки</p>
          <div class="img img2"></div>
           </a>
        </li>
        <li  data-aos="fade-up">
          <a href="#Macarons">
            <p>Макаронс</p>
            <div class="img img3"></div>
          </a>
        </li>
        <li  data-aos="fade-up">
          <a href="#CandyCake">
            <p>Трайфлы</p>
            <div class="img img4"></div>
          </a>
        </li>
        <li  data-aos="fade-up">
          <a href="#Filling">
            <p>Начинки</p>
            <div class="img img5"></div>
          </a>
        </li>
        <li  data-aos="fade-up">
          <a href="#Idea">
            <p>Индивидуальный заказ</p>
            <div class="img img6"></div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.bg {
  background-color: white;
}
.container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 40px;
  max-width: 1300px;
  margin: 0 auto;
}
ul {
  font-family: "Lora", serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 390px;
    background-color: rgba(255, 255, 255, 0.7);
    position: relative;
    margin: 20px !important;
    a {
      width: 100%;
    }
    &::after {
      transition: 1s;
      content: "";
      position: absolute;
      left: 50%;
      top: 30px;
      transform: translateX(-50%);
      width: 0;
      height: 3px;
      background-color: black;
    }
    &:hover {
      &::after {
        transition: 1s;
        content: "";
        position: absolute;
        left: 50%;
        top: 30px;
        transform: translateX(-50%);
        width: 90% !important;
        height: 3px;
        background-color: black;
      }
    }
    p {
      font-size: 16px;
      height: 40px;
      text-align: center;
      text-transform: uppercase;
      font-weight: 600;
      padding-top: 10px;
    }
    .img {
      width: 100%;
      height: 140px;
      background: url("/img/bg2.jpg") center center no-repeat;
      background-size: 100%;
      transition: all 0.5s;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 50%;
      }
      &:hover {
        background-size: 125%;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
        }
      }
    }
  }
}
// .img1{
//   background: url('/img/BirthCake/24.jpg') center center no-repeat !important;
//   background-size: cover !important;
// }
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
@media screen and (max-width: 991px) {
  li {
    width: 300px !important;
    height: 180px !important;
  }
}
@media screen and (max-width: 767px) {
  li {
    width: 280px !important;
    height: 160px !important;
  }
}
</style>
