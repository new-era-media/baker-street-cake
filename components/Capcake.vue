<template>
  <div class="content" id="Capcake">
    <div class="modalBlock" v-show="modal" @click="close($event)">
      <i class="el-icon-close icon" @click="modal = false"></i>
      <transition name="fade">
        <div class="modal" v-show="modal">
          <h2 data-aos="fade-right">Заказать капкейки</h2>
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
              class="formEl"
              v-model="col"
              clearable
              placeholder="Выбирите количество"
            >
              <el-option
                v-for="item1 in options4"
                :key="item1.value"
                :label="item1.label"
                :value="item1.value"
              >
              </el-option>
            </el-select>
            <el-button class="formEl" @click="fill">Выбрать начинку</el-button>
          </div>

          <div class="filling" v-show="modalFill">
            <div class="block">
              <el-select
                class="formEl"
                v-model="basis"
                clearable
                placeholder="Выбирите основу"
              >
                <el-option
                  v-for="item1 in options1"
                  :key="item1.value"
                  :label="item1.label"
                  :value="item1.value"
                >
                </el-option>
              </el-select>
              <el-select
                class="formEl"
                v-model="fills"
                clearable
                placeholder="Выбирите начинку"
              >
                <el-option
                  v-for="item2 in options2"
                  :key="item2.value"
                  :label="item2.label"
                  :value="item2.value"
                >
                </el-option>
              </el-select>
              <el-select
                class="formEl"
                v-model="cream"
                clearable
                placeholder="Выбирите крем"
              >
                <el-option
                  v-for="(item3, i) in options3"
                  :key="i"
                  :label="item3.label"
                  :value="item3.value"
                >
                </el-option>
              </el-select>
            </div>
            <p class="mini">
              Нажимая "отправить" вы автоматически соглашаетесь на обработку
              <a href="/politica.pdf" download style="color:red;"
                >персональных данных</a
              >
            </p>
            <el-button class="formEl" @click="payCapcake">Отправить</el-button>
          </div>
        </div>
      </transition>
    </div>
    <h2>Капкейки</h2>
    <div class="cards">
      <div
        class="card"
        v-for="(capcake, i) in capcakes"
        :key="i"
        data-aos="fade-up"
      >
        <div
          class="img"
          :style="{ 'background-image': 'url(' + capcake.url + ')' }"
        ></div>
        <h3 style="margin-top: 5px;">
          <span>
            {{ capcake.name }}
          </span>
        </h3>
        <p>
          <span>
            {{ capcake.col }}
          </span>
        </p>
        <p>
          {{ capcake.title }}
        </p>
        <el-button style="margin: 5px;" type="danger" @click="pay(i)"
          >Заказать</el-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { required, minLength, between } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      capcakes: [
        {
          name: 1001,
          url: "/img/Capcake/1.jpg",
          title: "Любое количество от 6 шт.",
          col: "150 р/шт"
        },
        {
          name: 1002,
          url: "/img/Capcake/2.jpg",
          title: "Любое количество от 6 шт.",
          col: "165 р/шт"
        },
        {
          name: 1003,
          url: "/img/Capcake/3.jpg",
          title: "Любое количество от 6 шт.",
          col: "180р/шт"
        },
        {
          name: 1004,
          url: "/img/Capcake/4.jpg",
          title: "Любое количество от 6 шт.",
          col: "220р/шт"
        },
        {
          name: 1005,
          url: "/img/Capcake/5.jpg",
          title: "Любое количество от 6 шт.",
          col: "190р/шт"
        },
        {
          name: 1006,
          url: "/img/Capcake/6.jpg",
          title: "Любое количество от 6 шт.",
          col: "195р/шт"
        },
        {
          name: 1007,
          url: "/img/Capcake/7.jpg",
          title: "Любое количество от 6 шт.",
          col: "190р/шт"
        },
        {
          name: 1008,
          url: "/img/Capcake/8.jpg",
          title: "Любое количество от 12 шт.",
          col: "180р/шт"
        }
      ],
      options1: [
        {
          value: "Шоколадная",
          label: "Шоколадная"
        },
        {
          value: "Ванильная",
          label: "Ванильная"
        },
        {
          value: "Красный бархат",
          label: "Красный бархат"
        },
        {
          value: "Морковная",
          label: "Морковная"
        },
        {
          value: "Банановая",
          label: "Банановая"
        }
      ],
      options2: [
        {
          value: "Варёная сгущёнка",
          label: "Варёная сгущёнка"
        },
        {
          value: "Лимонный курд",
          label: "Лимонный курд"
        },
        {
          value: "«Рафаэлло»",
          label: "«Рафаэлло»"
        },
        {
          value: "Сникерс",
          label: "Сникерс"
        },
        {
          value: "Шоколадная",
          label: "Шоколадная"
        },
        {
          value: "Ягодный конфитюр",
          label: "Ягодный конфитюр"
        },
        {
          value: "Ягодная фружелина",
          label: "Ягодная фружелина"
        },
        {
          value: "Клубничный курд",
          label: "Клубничный курд"
        }
      ],
      options3: [
        {
          value: "Шоколадный крем",
          label: "Шоколадный крем"
        },
        {
          value: "Cливочно-сырный крем",
          label: "Cливочно-сырный крем"
        }
      ],
      options4: [
        {
          value: "6",
          label: "6"
        },
        {
          value: "12",
          label: "12"
        },
        {
          value: "18",
          label: "18"
        },
        {
          value: "24",
          label: "24"
        },
        {
          value: "30",
          label: "30"
        },
        {
          value: "Больше 30",
          label: "Больше 30"
        }
      ],
      col: "",
      modalFill: false,
      modalInp: true,
      name: "",
      phone: "",
      modal: false,
      fills: "",
      cream: "",
      basis: "",
      i: null
    };
  },
  methods: {
    pay(i) {
      this.i = i;
      this.modal = true;
      this.modalInp = true;
      this.modalFill = false;
    },
    fill() {
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
    payCapcake() {
      if (this.basis == "" || this.fills == "" || this.cream == "") {
        this.$message({
          message: "Заполните все поля",
          type: "warning"
        });
      } else {
        this.modal = false;
        this.$message({
          message: "Заявка отправлена",
          type: "sacces"
        });
        this.$store.dispatch("ajax", {
          data:
            "Имя-" +
            this.name +
            " | Телефон-" +
            this.phone +
            " | Основа-" +
            this.basis +
            " | Начинка-" +
            this.fills +
            " | Крем-" +
            this.cream +
            " | Комплектация-" +
            this.capcakes[this.i].title +
            " | Кол-во -" +
            this.col
        });
      }
    },
    close(e) {
      if (e.target.classList.contains("modalBlock")) {
        this.modal = false;
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
    col: {
      required
    }
  }
};
</script>
<style lang="scss" scoped>
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
  // overflow-y: scroll;
  position: relative;
  h2 {
    padding: 5px !important;
    &::after {
      display: none !important;
    }
    &::before {
      display: none !important;
    }
  }
  input[type="radio"] {
    display: none;
  }
  .block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    // margin: 0 0 0 10px;
    // flex-direction: column;
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
    text-align: justify;
    margin: 20px;
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
    // color: #888585 !important;
  }
  input::placeholder {
    font-size: 14px;
  }
  input[type="text"] {
    padding-left: 15px;
    font-size: 14px;
  }
  button {
    margin: 10px 0;
  }
}
.title {
  font-size: 24px;
  margin-bottom: 70px;
  text-align: center;
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
.info {
  max-width: 1300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 50px;
  ul {
    padding: 10px;
    li {
      padding: 0 10px;
      font-size: 18px;
      list-style: none;
      position: relative;
      &::after {
        content: "";
        position: absolute;
        width: 25px;
        height: 25px;
        top: 0;
        left: -30px;
        // background: url("/img/icon/Mac.png") center center no-repeat;
        background-size: cover;
      }
    }
  }
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Lora", serif;
  width: 100%;
  height: auto;
  // background-color: #f5f5f5;
  background-color: #eee;
  position: relative;
  text-align: center;
  padding-bottom: 20px;
  .cards {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1400px;
    height: 100%;
    overflow: hidden;
    transition: all 1s;
    span {
      font-weight: 600;
    }
  }
  .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 30px 50px 30px;
    transition: 0.5s;
    padding-bottom: 15px;
    background-color: #fff;
    box-shadow: 0 5px 35px 0px rgba(0, 0, 0, 0.1);
    p {
      padding: 5px 0;
    }
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
    width: 280px;
    height: 280px;
    background: url("/img/bg2.jpg") center center no-repeat;
    background-size: cover;
  }
}
// @media screen and (max-width: 1637px) {
//   .img {
//     width: 340px !important;
//     height: 340px !important;
//     background: url("/img/bg2.jpg") center center no-repeat;
//     background-size: cover;
//   }
//   .cards {
//     justify-content: center !important;
//     max-height: 400px !important;
//   }
// }
// @media screen and (max-width: 991px) {
//   .cards {
//     justify-content: center !important;
//     max-height: 380px !important;
//   }

//   .img {
//     width: 320px !important;
//     height: 320px !important;
//     background: url("/img/bg2.jpg") center center no-repeat;
//     background-size: cover;
//   }
// }

// @media screen and (max-width: 480px) {
//   .cards {
//     justify-content: center !important;
//     max-height: 330px !important;
//   }
//   .img {
//     width: 280px !important;
//     height: 280px !important;
//     background: url("/img/bg2.jpg") center center no-repeat;
//     background-size: cover;
//   }
// }
@media screen and (max-width: 1637px) {
  li {
    font-size: 18px;
  }
}
@media screen and (max-width: 1450px) {
  .card {
    margin: 0 10px 25px 10px !important;
  }
}
@media screen and (max-width: 991px) {
  li {
    font-size: 16px !important;
  }
  .info {
    justify-content: center !important;
  }
}
@media screen and (max-width: 480px) {
  li {
    font-size: 14px !important;
  }
}
</style>
// имя - номер телефона - начинки
