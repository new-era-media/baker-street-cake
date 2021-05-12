<template>
  <div class="bg" id="Macarons">
    <template>
      <div class="container">
        <div class="modalBlock" v-show="modal" @click="close($event)">
          <i class="el-icon-close icon" @click="modal = false"></i>
          <transition name="fade">
            <div class="modal" v-show="modal">
              <h2 data-aos="fade-right">Заказать макарон</h2>
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
                  v-model="value"
                  clearable
                  placeholder="Выбирите начинку"
                >
                  <el-option
                    v-for="item1 in options"
                    :key="item1.value"
                    :label="item1.label"
                    :value="item1.value"
                  >
                  </el-option>
                </el-select>
                <el-select
                  class="formEl"
                  v-model="col"
                  clearable
                  placeholder="Выбирите количество"
                >
                  <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <p class="mini">
                  Нажимая "отправить" вы автоматически соглашаетесь на обработку
                  <a href="/politica.pdf" download style="color:red;"
                    >персональных данных</a
                  >
                </p>
                <el-button
                  class="formEl"
                  type="danger"
                  style="color: white"
                  @click="onSubmit"
                  >Отправить</el-button
                >
              </div>
            </div>
          </transition>
        </div>
        <h2 data-aos="fade-right">Макарон</h2>
        <div class="app" data-aos="fade-up">
          <div class="slider">
            <el-carousel indicator-position="outside">
              <el-carousel-item
                class="carousel"
                v-for="(Macaron, i) in Macarons"
                :key="Macaron.title"
              >
                <div
                  class="img"
                  :style="{ 'background-image': 'url(' + Macaron.url + ')' }"
                ></div>
                <div class="text">
                  <p>Кол-во: {{ Macaron.col }}</p>
                  <p>Цена: {{ Macaron.price }} руб.</p>
                  <el-button type="danger" @click="pay(i)">Заказать</el-button>
                </div>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="content">
            <p>
              <span class="bold">Начинка:</span><br />
              <ul class="spis">
                <li>{{options[0].label}}</li>
                <li>{{options[1].label}}</li>
                <li>{{options[2].label}}</li>
                <li>{{options[3].label}}</li>
                <li>{{options[4].label}}</li>
              </ul>
            </p>
            <p>
              <span class="bold">Минимальный заказ одного вида 12 шт.</span>
            </p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import { required, minLength, between } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      Macarons: [
        {
          url: "/img/Macaron/1.jpg",
          col: "от 12 шт.",
          price: '70р/шт'
        },
        {
          url: "/img/Macaron/2.jpg",
          col: "от 12 шт.",
          price: '70р/шт'
        }
      ],
      options: [
        {
          value: "Орех-шоколад",
          label: "Орех-шоколад"
        },
        {
          value: "Миндаль-кокос",
          label: "Миндаль-кокос"
        },
        {
          value: "Лимонный чиз",
          label: "Лимонный чиз"
        },
        {
          value: "Клубничный ням",
          label: "Клубничный ням"
        },
        {
          value: "Банан-карамель",
          label: "Банан-карамель"
        }
      ],
      options1: [
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
      value: "",
      name: "",
      phone: "",
      modal: false,
      modalInp: true,
      i: null
    };
  },
  methods: {
    pay(i) {
      console.log(i);
      this.modal = true;
      this.i = i;
    },
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$message({
          message: "Заполнены не все поля!",
          type: "warning"
        });
      } else {
        this.$store.dispatch("ajax", {
          data:
            "Имя -" +
            this.name +
            " | Телефон -" +
            this.phone +
            " | Начинка -" +
            this.value +
            " | Комплектация -" +
            this.Macarons[this.i].col +
            " |  кол-во -" +
            this.col
        });
        this.$message({
          message: "Заявка отправлена!",
          type: "succes"
        });
        this.modal = false;
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
    value: {
      required
    },
    col:{
      required
    }
  }
};
</script>
<style lang="scss" scoped>
.bg {
  background-color: white;
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
.bold {
  font-weight: bold;
}
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  font-family: "Lora", serif;
  padding-bottom: 40px;
}
.app {
  display: flex;
  // align-items: center;
  justify-content: center;
  flex-wrap: wrap-reverse;
}
.content {
  border: 3px black solid;
  display: flex;
  // align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
  padding: 20px;
  width: 100%;
  max-width: 650px;
  .spis{
    margin-top: 15px;
    margin-left: 40px;
  }
  p {
    padding: 20px;
  }
}
.slider {
  width: 100%;
  max-width: 650px;
}
.carousel {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.img {
  width: 300px;
  height: 300px;
  background: url("/img/bg2.jpg") center center no-repeat;
  background-size: cover;
}
.text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  p {
    padding: 10px;
  }
  button {
    margin: 10px;
  }
}
@media screen and (max-width: 771px) {
  // .img {
  //   display: none !important;
  // }
  .carousel {
    justify-content: center !important;
    // flex-wrap: wrap;
  }
  .text {
    text-align: center;
  }
}
</style>
// имя - номер телефона -> "выбрать начинку" основа - начинка - крем (
выпадающий список )
