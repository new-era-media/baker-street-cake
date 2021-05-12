<template>
  <div class="bg">
    <div class="content" id="CandyCake">
      <div class="modalBlock" v-show="modal" @click="close($event)">
        <i class="el-icon-close icon" @click="modal = false"></i>
        <transition name="fade">
          <div class="modal" v-show="modal">
            <h2>Заказать трайфлы</h2>
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
                v-model="macaron"
                clearable
                placeholder="Выбирите начинку"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
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
                  size="mini"
                  v-for="item1 in options1"
                  :key="item1.value"
                  :label="item1.label"
                  :value="item1.value"
                >
                </el-option>
              </el-select>
              <p class="mini">
                Нажимая "отправить" вы автоматически соглашаетесь на обработку
                <a href="/politica.pdf" download style="color:red;"
                  >персональных данных</a
                >
              </p>
              <el-button class="formElButton" @click="onSubmit"
                >Отправить</el-button
              >
            </div>
          </div>
        </transition>
      </div>
      <h2 data-aos="fade-right">Трайфлы</h2>
      <div class="cards">
        <div
          class="card"
          v-for="(candy, i) in candys"
          :key="candy.title"
          data-aos="fade-up"
        >
          <div
            class="img"
            :style="{ 'background-image': 'url(' + candy.url + ')' }"
          ></div>
          <h3>{{ candy.title }}</h3>
          <p>
            Цена: <span>{{ candy.price }}</span>
          </p>
          <el-button style="margin: 5px;" type="danger" @click="pay(i)"
            >Заказать</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { required, minLength, between } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      candys: [
        {
          url: "/img/Trafl/1.jpg",
          title: "2001",
          price: "230р/шт"
        },
        {
          url: "/img/Trafl/2.jpg",
          title: "2002",
          price: "230р/шт"
        },
        {
          url: "/img/Trafl/3.jpg",
          title: "2003",
          price: "230р/шт"
        },
        {
          url: "/img/Trafl/4.jpg",
          title: "2004",
          price: "230р/шт"
        }
      ],
      options: [
        {
          value:
            "Шоколадная основа, вишнёвая фружелина, сливочно-сырный крем, вишнёвая пропитка с коньяком",
          label:
            "Шоколадная основа, вишнёвая фружелина, сливочно-сырный крем, вишнёвая пропитка с коньяком"
        },
        {
          value: "Красный бархат, ягодное конфи, сливочно-сырный крем",
          label: "Красный бархат, ягодное конфи, сливочно-сырный крем"
        },
        {
          value:
            "Пряная морковно-ореховая основа, сливочно-сырный крем, лимонный курд",
          label:
            "Пряная морковно-ореховая основа, сливочно-сырный крем, лимонный курд"
        },
        {
          value: "Медовая основа, крем пломбир, бананы в карамели",
          label: "Медовая основа, крем пломбир, бананы в карамели"
        },
        {
          value:
            "Ванильный бисквит, кокосовая начинка «Рафаэлло», сливочно-сырный крем",
          label:
            "Ванильный бисквит, кокосовая начинка «Рафаэлло», сливочно-сырный крем"
        },
        {
          value:
            "Шоколадная основа, шоколадно-сливочный крем, арахис в карамели",
          label:
            "Шоколадная основа, шоколадно-сливочный крем, арахис в карамели"
        }
      ],
      options1: [
        {
          value: "6",
          label: "6"
        },
        {
          value: "9",
          label: "9"
        },
        {
          value: "12",
          label: "12"
        },
        {
          value: "15",
          label: "15"
        },
        {
          value: "18",
          label: "18"
        },
        {
          value: "более 18",
          label: "более 18"
        }
      ],
      macaron: "",
      col: "",
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
            this.macaron +
            " | Кол-во  -" +
            this.col +
            " | Кол-во -" +
            this.candys[this.i].title
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
    macaron: {
      required
    },
    col: {
      required
    }
  }
};
</script>
<style lang="scss" scoped>
.bg {
  background-color: #fff;
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
    width: 82%;
    padding: 10px 0;
    font-family: "Lora", serif;
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
.content {
  width: 100%;
  max-width: 1400px;
  position: relative;
  padding-bottom: 40px;
  margin: 0 auto;
  font-family: "Lora", serif;
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
  .cards {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    // padding: 20px;
  }
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
    background: url("/img/bg2.jpg") center center no-repeat;
    background-size: cover;
  }
}
@media screen and (max-width: 1450px) {
  .card {
    margin: 0 10px 25px 10px !important;
  }
}
@media screen and (max-width: 771px) {
  .formElButton {
    width: 82% !important;
  }
}
</style>
