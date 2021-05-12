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
            <el-select
              v-model="weight"
              clearable
              placeholder="Выбирите весь торта"
              class="formEl"
            >
              <el-option
                v-for="item in weights"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
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
            <div class="block">
              <p class="price">Примерная стоимость: {{ priceFull }} руб.</p>
              <p class="dost">Бесплатная доставка в пределах г. Краснодара</p>
            </div>
            <div class="fillBlock" ref="size">
              <div
                class="cardFill"
                v-for="filling in fillings"
                :key="filling.title"
              >
                <label>
                  <div
                    class="imgFill"
                    :class="{ cardFillActive: fill === filling.title }"
                    :style="{ 'background-image': 'url(' + filling.url + ')' }"
                  ></div>
                  <input type="radio" :value="filling.title" v-model="fill" />
                  {{ filling.title }}</label
                >
              </div>
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
      data-aos="fade-up"
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
      title: "Детские торты"
    }
  },
  data() {
    return {
      weights: [
        {
          value: 2,
          label: "2 кг."
        },
        {
          value: 2.5,
          label: "2.5 кг."
        },
        {
          value: 3,
          label: "3 кг."
        },
        {
          value: 3.5,
          label: "3.5 кг."
        },
        {
          value: 4,
          label: "4 кг."
        },
        {
          value: 4.5,
          label: "4.5 кг."
        }
      ],
      cakes: [
        {
          url: "/img/Kids/18.jpg",
          title: "0025",
          weight: "3кг",
          price: 1000,
          PromoPrice: 3300,
          decor: 300
        },
        {
          url: "/img/Kids/19.jpg",
          title: "0026",
          weight: "2.5кг",
          price: 1000,
          PromoPrice: 3100,
          decor: 600
        },
        {
          url: "/img/Kids/20.jpg",
          title: "0027",
          weight: "2.5кг",
          price: 1000,
          PromoPrice: 3130,
          decor: 630
        },
        {
          url: "/img/Kids/4.jpg",
          title: "0028",
          weight: "2.5кг",
          price: 1000,
          PromoPrice: 3050,
          decor: 530
        },
        {
          url: "/img/Kids/5.jpg",
          title: "0029",
          weight: "2кг",
          price: 1000,
          PromoPrice: 2350,
          decor: 350
        },
        {
          url: "/img/Kids/6.jpg",
          title: "0030",
          weight: "2.5кг",
          price: 1000,
          PromoPrice: 2870,
          decor: 370
        },
        {
          url: "/img/Kids/7.jpg",
          title: "0031",
          weight: "4кг",
          price: 1000,
          PromoPrice: 4450,
          decor: 450
        },
        {
          url: "/img/Kids/8.jpg",
          title: "0032",
          weight: "2.5кг",
          price: 1000,
          PromoPrice: 3240,
          decor: 740
        },
        {
          url: "/img/Kids/9.jpg",
          title: "0033",
          weight: "2кг",
          price: 1000,
          PromoPrice: 2450,
          decor: 450
        },
        {
          url: "/img/Kids/10.jpg",
          title: "0034",
          weight: "3кг",
          price: 1000,
          PromoPrice: 3580,
          decor: 580
        },
        {
          url: "/img/Kids/11.jpg",
          title: "0035",
          weight: "2.5кг",
          price: 1000,
          PromoPrice: 3050,
          decor: 550
        },
        {
          url: "/img/Kids/12.jpg",
          title: "0036",
          weight: "2.5кг",
          price: 1000,
          PromoPrice: 3080,
          decor: 580
        },
        {
          url: "/img/Kids/13.jpg",
          title: "0037",
          weight: "3кг",
          price: 1000,
          PromoPrice: 3380,
          decor: 380
        },
        {
          url: "/img/Kids/14.jpg",
          title: "0038",
          weight: "2.5кг",
          price: 1000,
          PromoPrice: 3230,
          decor: 730
        },
        {
          url: "/img/Kids/15.jpg",
          title: "0039",
          weight: "2кг",
          price: 1000,
          PromoPrice: 2650,
          decor: 650
        },
        {
          url: "/img/Kids/16.jpg",
          title: "0040",
          weight: "3кг",
          price: 1000,
          PromoPrice: 3550,
          decor: 550
        },
        {
          url: "/img/Kids/17.jpg",
          title: "0041",
          weight: "2кг",
          price: 1000,
          PromoPrice: 2740,
          decor: 740
        },
        {
          url: "/img/Kids/1.jpg",
          title: "0042",
          weight: "2.5кг",
          price: 1000,
          PromoPrice: 2850,
          decor: 350
        },
        {
          url: "/img/Kids/2.jpg",
          title: "0043",
          weight: "2.5кг",
          price: 1000,
          PromoPrice: 3700,
          decor: 1200
        },
        {
          url: "/img/Kids/3.jpg",
          title: "0044",
          weight: "3кг",
          price: 1000,
          PromoPrice: 3600,
          decor: 600
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
      fill: "",
      modalInp: true,
      modalFill: false,
      weight: ""
    };
  },
  methods: {
    pay(i) {
      this.i = i;
      this.modal = true;
      this.modalInp = true;
      this.modalFill = false;
    },
    allSize() {
      this.$refs.size.classList.toggle("cardsActive");
      this.$refs.svg.classList.toggle("svgScale");
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
            "Название торта -" +
            this.cakes[this.i].title +
            " | Начинка -" +
            this.fill +
            " | Вес -" +
            this.weight +
            "кг. | Имя-" +
            this.name +
            " | Телефон -" +
            this.phone +
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
        // if (this.weight <= 3) {
        //   return this.weight * this.cakes[this.i].price;
        // } else {
        //   return this.weight * this.cakes[this.i].price + 150;
        // }
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
  .price {
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
  input[type="radio"] {
    display: none;
  }

  .fillBlock {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    max-height: 350px;
    overflow: hidden;
    transition: 2.5s;
  }

  .cardFill {
    width: 200px;
    // text-align: center;
    margin: 20px;
    font-size: 14px;
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
