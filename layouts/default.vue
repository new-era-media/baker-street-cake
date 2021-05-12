<template>
  <div  @click="handleScroll($event)">
    <nav>
        <div class="phone"> <a href="tel:+79996338571" style="color: white" > +7 (999) 633-85-71 </a></div>
      <div class="logo" ref="logo"></div>
    
      <div class="promo">
        <p class="header-one">BAKER STREET CAKE</p>
        <p class="header-two">Торты на заказ в Краснодаре</p>
      </div>
      <ul>
        <li> <a href="#Catalog">Меню</a> </li>
        <li><a href="#Reviews"> Отзывы</a></li>
        <li><a href="#footer">Контакты</a></li>
      </ul>
    </nav>
    <nuxt />
  </div>
</template>
<script>
export default {
    methods: {
    handleScroll(event) {
      if(pageYOffset!=0){
        this.$refs.logo.style.height = 50 + 'px'
      } else {
        this.$refs.logo.style.height = 100 + 'px'
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
}
</script>
<style lang="scss" scoped> 
nav {
  z-index: 900;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  font-family: "Playfair Display", serif;
  background-color: rgba(0, 0, 0, 0.5);
  // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.5);
  color: white;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: auto;
}
.logo {
  width: 10%;
  min-width: 100px;
  height: 100px;
  background: url("/img/logo.png") center center no-repeat;
  background-size: contain;
  margin: 10px;
  transition: .5s;
}
.phone{
  font-family: 'PT Serif', serif;
  text-align: center;
  width: 13%;
  min-width: 200px;
  font-size: 26px;
}
.promo {
  width: 35%;
  min-width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px;
  text-shadow: 1px 1px 5px black, 0 0 10px rgba(1, 36, 1, 1); /* Параметры тени */
  .header-one {
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 1.5rem;
    margin: 0 10px 0 10px;
    text-align: center;
  }
  .header-two {
    font-weight: normal;
    font-size: 18px;
    margin: 0 10px 0 10px;
  }
}
ul {
  width: 28.3%;
  min-width: 450px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    color: white;
  }
  li {
    font-weight: 600;
    text-shadow: 1px 1px 5px black, 0 0 10px rgba(1, 36, 1, 1); /* Параметры тени */
    text-transform: uppercase;
    font-size: 18px;
    margin: 10px;
    cursor: pointer;
    transition: .1s;
    &:hover{
          transform: scale(1.05);      
    }
  }
}
@media screen and (max-width: 1600px) {
    .phone{
    font-size: 18px;
    min-width: 150px !important;
  }
}
@media screen and (max-width: 1100px) {
  .phone{
    font-size: 16px;
    min-width: 150px !important;
  }
  .logo {
    width: 33.3%;
    min-width: 75px;
  }
  .promo {
    width: 20%;
    min-width: 200px;
    .header-one {
      font-size: 15px;
      line-height: 1.5rem;
      margin: 0 10px 0 10px;
    }
    .header-two {
      font-size: 13px;
      margin: 0 10px 0 10px;
    }
  }
  ul {
    width: 30%;
    min-width: 300px;
    justify-content: center;
    li {
      font-size: 12px;
    }
  }
}
@media screen and (max-width: 767px) {
  .logo {
    display: none;
  }
  .promo {
    width: 20%;
    min-width: 250px;
    .header-one {
      font-size: 16px;
      line-height: 1.5rem;
      margin: 0 10px 0 10px;
    }
    .header-two {
      font-size: 14px;
      margin: 0 10px 0 10px;
    }
  }
  ul {
   display: none;
  }
}
@media screen and (max-width: 767px) {

  .promo {
    width: 20%;
    min-width: 150px;
    .header-one {
      font-size: 12px;
      line-height: 1.5rem;
      margin: 0 10px 0 10px;
    }
    .header-two {
      text-align: center;
      font-size: 10px;
      margin: 0 10px 0 10px;
    }
  }
  .phone{
    font-size: 14px !important;
  }
}
</style>
</style>
