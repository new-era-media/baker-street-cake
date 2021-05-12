<template>
  <div class="content" id="Filling">
    <h2 data-aos="fade-right">Начинки тортов</h2>
    <div class="cards" ref="size">
      <div class="card" v-for="filling in fillings" :key="filling.title" data-aos="fade-up">
        <div
          class="img"
          :style="{ 'background-image': 'url(' + filling.url + ')' }"
        ></div>
        <p>{{ filling.title }}</p>
      </div>
    </div>
    <div class="arrow" ref="svg" @click="allSize"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fillings: [
        {
          url: "/img/filling/Шоколадный.jpg",
          title:
            "Влажные шоколадные, бисквитные коржи, вишневая фружелина, ягодное компоте, сырно-сливочный крем, вишневая пропитка с коньяком."
        },
        {
          url: "/img/filling/Красный-бархат.jpg",
          title:
            "Бисквит красный бархат с шоколадной ноткой, сырно-сливочный крем, ягодное (Клубничное/вишнёвое/малиновое) конфи."
        },
        {
          url: "/img/filling/Молочная-девочка.jpg",
          title:
            "Коржи «Молочная девочка», йогуртовый мусс,  малиновая фружелина и сырно-сливочный крем."
        },
        {
          url: "https://it.majentasolutions.com/wp-content/uploads/sites/3/storage.png",
          title:
            "Банановый бисквит, клубничный сироп, сырно-сливочный крем, клубничный курд, банановый мусс."
        },
        {
          url: "/img/filling/Пряный.jpg",
          title:
            "Пряный морковно-ореховый бисквит, сливочно-лимонный курд, крем на основе маскарпоне."
        },
        {
          url: "/img/filling/Ореховый.jpg",
          title:
            "Ореховый бисквит, экстрашоколадный крем, арахис в карамели, тягучая нуга."
        },
        {
          url: "/img/filling/Медовик.jpg",
          title:
            "Классические медовые коржи, нежный заварной крем, бананы в карамели, карамельная начинка."
        },
        {
          url: "https://it.majentasolutions.com/wp-content/uploads/sites/3/storage.png",
          title:
            "Воздушный миндальный бисквит, сливочно-сырный крем, кокосовая начинка «Рафаэлло», хрустящая начинка на основе настоящего бельгийского белого шоколада."
        },
        {
          url: "https://it.majentasolutions.com/wp-content/uploads/sites/3/storage.png",
          title:
            "Пористый маковый бисквит, творожно-сливочный крем, клюквенный конфитюр, лимонный чизкейк."
        },
        {
          url: "https://it.majentasolutions.com/wp-content/uploads/sites/3/storage.png",
          title:
            "Пышный кокосовый бисквит, крем «пломбир», нежный ганаш на молочном шоколаде, сливочно-кокосовая начинка, сырно-сливочный крем, алкогольная пропитка Пина Колада."
        }
      ]
    };
  },
  methods: {
    allSize() {
      this.$refs.size.classList.toggle("cardsActive");
      this.$refs.svg.classList.toggle("svgScale");
    }
  }
};
</script>
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
.content {
  font-family: "Lora", serif;
  width: 100%;
  height: auto;
  background-color: #fff;
  position: relative;
  text-align: center;
  padding: 10px;
  .arrow {
    margin: 0 auto;
    width: 64px;
    height: 32px;
    background: url("/img/icon/arrow.png") center center no-repeat;
    background-size: cover;
    transition: 1.5s;
  }
  .cards {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1300px;
    height: 100%;
    overflow: hidden;
    transition: all 1s;
    max-height: 500px;
  }
  .cardsActive {
    height: 100%;
    max-height: 9999px !important;
    transition: all 1.5s;
  }
  .card {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 15px;
    max-width: 360px;
    height: 500px;
    p {
      font-size: 18px;
    }
  }
  .img {
    width: 360px;
    height: 360px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 5px;
  }
  span {
    font-weight: 600;
  }
  p {
    font-size: 20px;
    margin: 5px;
  }
  .svgScale {
    transform: scale(1, -1);
    transform-origin: center center;
  }
}
@media screen and (max-width: 1637px) {
  .img {
    width: 340px !important;
    height: 340px !important;
    background-size: cover;
  }
  .cards {
    justify-content: center !important;
  }
}
@media screen and (max-width: 991px) {
  .cards {
    justify-content: center !important;
  }
  .card {
    max-width: 320px !important;
  }
  .img {
    width: 320px !important;
    height: 320px !important;
    background-size: cover;
  }
}
@media screen and (max-width: 767px) {
   .cards {
    max-height: 450px !important;
  }
   .card {
    height: auto !important;
  }
}
@media screen and (max-width: 480px) {
  .cards {
    justify-content: center !important;
  }
  .card {
    max-width: 280px !important;
  }
  .img {
    width: 260px !important;
    height: 260px !important;
    background: url("/img/filling/https://it.majentasolutions.com/wp-content/uploads/sites/3/storage.png") center center no-repeat;
    background-size: cover;
  }
}
</style>
