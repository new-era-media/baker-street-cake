<template>
  <div class="content">
    <div class="modalBlock" v-show="modal" @click="close($event)">
      <i class="el-icon-close icon" @click="modal = false"></i>
      <transition name="fade">
        <div class="modal" v-show="modal">
          <h2>Заказать торт</h2>
          <div class="input" v-show="modalInp">
            <el-input
              class="formEl"
              placeholder="Как вас зовут?"
              v-model="name"
            ></el-input>
            <the-mask
              class="el-input__inner formEl"
              placeholder="Укажите ваш номер!"
              v-model="phone"
              :mask="['+7-(###)-###-##-##', '+7-(###)-###-##-##']"
            />
            <el-date-picker
              class="formEl"
              v-model="date"
              type="date"
              placeholder="Выбирите дату"
            >
            </el-date-picker>
            <el-button class="formEl" @click="onSubmit"
              >Выбрать начинку</el-button
            >
          </div>

          <div class="filling" v-show="modalFill">
            <div class="block sliderBlock">
              <span class="demonstration">Выберите весь торта</span>
              <el-slider
                class="formEl"
                v-model="weight"
                :min="2"
                :max="15"
                :step="0.5"
                show-input
              >
              </el-slider>
              <p class="title">Стоимость декора рассчитывается отдельно</p>
              <p class="price">Примерная стоимость: {{ priceFull }} руб.</p>
              <p class="dost">Бесплатная доставка в пределах г. Краснодара</p>
            </div>
            <div class="fillBlock" ref="size">
              <el-checkbox-group
                v-model="fill"
                :min="0"
                :max="4"
                class="inpForm"
              >
                <el-checkbox
                  v-for="filling in fillings"
                  :key="filling.title"
                  :label="filling.title"
                >
                  <div class="cardFill">
                    <div
                      class="imgFill"
                      :class="{
                        cardFillActive:
                          fill[0] === filling.title ||
                          fill[1] === filling.title ||
                          fill[2] === filling.title ||
                          fill[3] === filling.title
                      }"
                      :style="{
                        'background-image': 'url(' + filling.url + ')'
                      }"
                    ></div>
                    <div class="textP">{{ filling.title }}</div>
                  </div>
                </el-checkbox>
              </el-checkbox-group>
            </div>

            <div class="arrow" ref="svg" @click="allSize"></div>
            <p class="mini">
              Нажимая "отправить" вы автоматически соглашаетесь на обработку
              <a href="/politica.pdf" download style="color:red;"
                >персональных данных</a
              >
            </p>
            <el-button class="formEl" @click="payCake">Отправить</el-button>
          </div>
        </div>
      </transition>
    </div>

    <div
      class="card"
      v-for="(cake, i) in cakes"
      :key="cake.title"
  
    >
      <div
        class="img"
        :style="{ 'background-image': 'url(' + cake.url + ')' }"
      ></div>
      <h3>{{ cake.title }}</h3>
      <p>
        Вес: <span>{{ cake.weight }}</span>
      </p>
      <p>
        Цена: <span>{{ cake.PromoPrice }}</span>
      </p>
      <el-button type="danger" @click="pay(i)">Заказать</el-button>
    </div>
  </div>
</template>
<script>
import { required, minLength, between } from "vuelidate/lib/validators";
export default {
  head () {
    return {
      title: "Свадебные торты"
    }
  },
  data() {
    return {
      cakes: [
        {
          url: "/img/BirthCake/18.jpg",
          title: "0053",
          weight: "15кг",
          PromoPrice: 16200,
          decor: 1200,
          price: 1000
        },
        {
          url: "/img/BirthCake/2.jpg",
          title: "0054",
          weight: "11кг",
          decor: 1970,
          PromoPrice: 12970,
          price: 1000 //
        },
        {
          url: "/img/BirthCake/3.jpg",
          title: "0055",
          weight: "4кг",
          PromoPrice: 4630,
          decor: 630,
          price: 1000
        },
        {
          url: "/img/BirthCake/4.jpg",
          title: "0056",
          price: 1000,
          weight: "7кг",
          decor: 560,
          PromoPrice: 7560
        },
        {
          url: "/img/BirthCake/5.jpg",
          title: "0057",
          weight: "10кг",
          price: 1000,
          PromoPrice: 21400,
          decor: 11400
        },
        {
          url: "/img/BirthCake/6.jpg",
          title: "0058",
          weight: "6кг",
          PromoPrice: 6500,
          decor: 500,
          price: 1000
        },
        {
          url: "/img/BirthCake/7.jpg",
          title: "0059",
          weight: "12кг",
          PromoPrice: 12550,
          decor: 550,
          price: 1000
        },
        {
          url: "/img/BirthCake/8.jpg",
          title: "0060",
          weight: "3.5кг",
          decor: 580,
          PromoPrice: 4080,
          price: 1000
        },
        {
          url: "/img/BirthCake/9.jpg",
          title: "0061",
          weight: "10кг",
          PromoPrice: 11000,
          decor: 1000,
          price: 1000
        },
        {
          url: "/img/BirthCake/10.jpg",
          title: "0062",
          weight: "7кг",
          PromoPrice: 8050,
          decor: 1050,
          price: 1000
        },
        {
          url: "/img/BirthCake/11.jpg",
          title: "0063",
          weight: "1кг",
          PromoPrice: 12450,
          decor: 450,
          price: 1000
        },
        {
          url: "/img/BirthCake/13.jpg",
          title: "0065",
          weight: "5кг",
          PromoPrice: 5600,
          decor: 600,
          price: 1000
        },
        {
          url: "/img/BirthCake/14.jpg",
          title: "0066",
          weight: "8кг",
          PromoPrice: 8800,
          decor: 880,
          price: 1000
        },
        {
          url: "/img/BirthCake/15.jpg",
          title: "0067",
          weight: "8кг",
          PromoPrice: 8350,
          decor: 350,
          price: 1000
        },
        {
          url: "/img/BirthCake/16.jpg",
          title: "0068",
          weight: "13кг",
          PromoPrice: 14450,
          decor: 1450,
          price: 1000
        },
        {
          url: "/img/BirthCake/1.jpg",
          title: "0070",
          weight: "3кг",
          PromoPrice: 4950,
          decor: 950,
          price: 1000
        },
        {
          url: "/img/BirthCake/19.jpg",
          title: "0071",
          weight: "9кг",
          PromoPrice: 9700,
          decor: 700,
          price: 1000
        },
        {
          url: "/img/BirthCake/22.jpg",
          title: "0074",
          weight: "9кг",
          PromoPrice: 10750,
          decor: 1750,
          price: 1000
        },
        {
          url: "/img/BirthCake/23.jpg",
          title: "0075",
          weight: "7кг",
          PromoPrice: 7650,
          decor: 650,
          price: 1000
        },
        {
          url: "/img/BirthCake/24.jpg",
          title: "0076",
          weight: "2.5кг",
          decor: 650,
          PromoPrice: 3150,
          price: 1000 //
        }
      ],
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
          url:
            "https://it.majentasolutions.com/wp-content/uploads/sites/3/storage.png",
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
          url:
            "https://it.majentasolutions.com/wp-content/uploads/sites/3/storage.png",
          title:
            "Воздушный миндальный бисквит, сливочно-сырный крем, кокосовая начинка «Рафаэлло», хрустящая начинка на основе настоящего бельгийского белого шоколада."
        },
        {
          url:
            "https://it.majentasolutions.com/wp-content/uploads/sites/3/storage.png",
          title:
            "Пористый маковый бисквит, творожно-сливочный крем, клюквенный конфитюр, лимонный чизкейк."
        },
        {
          url:
            "https://it.majentasolutions.com/wp-content/uploads/sites/3/storage.png",
          title:
            "Пышный кокосовый бисквит, крем «пломбир», нежный ганаш на молочном шоколаде, сливочно-кокосовая начинка, сырно-сливочный крем, алкогольная пропитка Пина Колада."
        }
      ],
      date: "",
      modal: false,
      i: null,
      name: "",
      phone: "",
      fill: [],
      modalInp: true,
      modalFill: false,
      weight: 2
    };
  },
  methods: {
    pay(i) {
      this.i = i;
      this.modal = true;
      this.modalInp = true;
      this.modalFill = false;
    },
    async allSize() {
      await this.$refs.size.classList.toggle("cardsActive");
      await this.$refs.svg.classList.toggle("svgScale");
    },
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$message({
          message: "Заполнены не все поля!",
          type: "warning"
        });
      } else {
        this.modalInp = false;
        this.modalFill = true;
      }
    },
    payCake() {
      if (this.fill != "") {
        this.modal = false;
        this.$message({
          message: "Заявка отправлена!",
          type: "succes"
        });
        this.$store.dispatch("ajax", {
          data:
            "Имя -" +
            this.name +
            " | Телефон-" +
            this.phone +
            " | Начинка-" +
            this.fill +
            " | Вес-" +
            this.weight +
            "кг. | Название-" +
            this.cakes[this.i].title +
            " | Дата -" +
            this.date
        });
        console.log(
          this.cakes[this.i].title,
          this.fill,
          this.weight,
          this.name,
          this.phone
        );
      } else {
        this.$message({
          message: "Выбирите начинку",
          type: "warning"
        });
      }
    },
    close(e) {
      if (e.target.classList.contains("modalBlock")) {
        this.modal = false;
      }
    }
  },
  computed: {
    priceFull() {
      if (this.modal == true) {
        return (
          this.weight * this.cakes[this.i].price + this.cakes[this.i].decor
        );
        // return this.weight * this.cakes[this.i].price;
      } else {
        return 0;
      }
    }
  },
  validations: {
    name: {
      required
    },
    phone: {
      required,
      minLength: minLength(10)
    },
    date: {
      required
    }
  }
};
</script>
<style lang="scss" scoped>
p {
  padding: 0 0 5px 0;
}
.inpForm {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.svgScale {
  transform: scale(1, -1);
  transform-origin: center center;
}
.arrow {
  margin: 20px auto;
  width: 64px;
  height: 32px;
  background: url("/img/icon/arrow.png") center center no-repeat;
  background-size: cover;
  transition: 1.5s;
}
.cardsActive {
  height: 100%;
  max-height: 9999px !important;
  transition: all 1.5s;
}
.icon {
  position: absolute;
  top: 15vh;
  right: 5px;
  width: 50px;
  height: 50px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
  background-color: #e4e7ed;
  border-radius: 50%;
}
.modalBlock {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  width: 90%;
  max-width: 900px;
  height: auto;
  max-height: 75vh;
  padding: 20px;
  background-color: #fff;
  text-align: center;
  transition: 1s;
  overflow-y: scroll;
  position: relative;
  .title {
    font-size: 18px;
    font-weight: 600px;
    margin: 20px 0;
  }
  .price {
    font-size: 18px;
    font-size: 24px;
    font-weight: 600px;
  }
  .imgFill {
    margin-bottom: 10px;
    width: 200px;
    height: 200px;
    background-position: center center;
    background-size: cover;
    position: relative;
  }

  .el-checkbox_input input[type="checkbox"] {
    display: none !important;
  }
  .fillBlock {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    max-height: 370px;
    overflow: hidden;
    transition: 2.5s;
  }

  .cardFill {
    width: 200px;
    // text-align: center;
    margin: 20px;
    font-size: 14px;
    .textP {
      width: 200px !important;
      height: 150px;
      overflow-wrap: break-word !important;
      word-wrap: break-word !important;
      word-break: keep-all !important;
      line-break: loose !important;
      white-space: pre-wrap;
    }
  }
  .cardFillActive {
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 200px;
      background-color: rgba(255, 0, 0, 0.2);
      top: 0;
      left: 0;
    }
    &::before {
      display: flex;
      align-items: center;
      justify-content: center;
      content: "✔";
      color: #fff;
      position: absolute;
      font-size: 200px;
      width: 100%;
      height: 200px;
      background-color: rgba(255, 0, 0, 0.411);
      top: 0;
      left: 0;
    }
  }
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .input {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .formEl {
    width: 100%;
    padding: 10px 0;
  }
  input::placeholder {
    font-size: 14px;
  }
  input[type="text"] {
    padding-left: 15px;
    font-size: 14px;
  }
  button {
    margin: 10px;
  }
}
.content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  position: relative;
  margin-bottom: 15px;
  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 25px 25px 25px;
    transition: 0.5s;
    padding-bottom: 15px;
    background-color: #fff;
    box-shadow: 0 5px 35px 0px rgba(0, 0, 0, 0.1);
    .el-button {
      opacity: 0;
    }
    &:hover {
      box-shadow: 0 5px 35px 0px rgba(0, 0, 0, 0.4);
      .el-button {
        opacity: 1;
      }
    }
  }
  .img {
    margin-bottom: 10px;
    width: 280px;
    height: 280px;
    background-position: center center;
    background-size: cover;
  }
}
@media screen and (max-width: 1450px) {
  .img {
    width: 280px !important;
    height: 280px !important;
  }
  .content {
    margin: 0 auto;
    width: 100%;
    display: flex;
    align-items: center;
    max-width: 1200px;
  }
  .card {
    margin: 0 10px 25px 10px !important;
  }
}
</style>
