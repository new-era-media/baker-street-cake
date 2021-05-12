<template>
  <div class="container" id="Idea">
    <h2 data-aos="fade-right">Реализуем вашу идею</h2>
    <p class="text-show" data-aos="fade-right">
      Расскажите мне какой торт вы хотите и я примусь за его создание!
    </p>
    <div class="block" data-aos="fade-right">
      <div class="text">
        <p>
          Опишите вашу задумку по поводу декора торта, капкейков или других
          десертов! <br />
          Мы воплотим в реальность эту идею, поможем с выбором начинки и
          подскажем по стоимости!
        </p>
        <!-- <div class="img"></div> -->
        <el-image
          style="width: 300px; height: 300px"
          src="/img/logo.png"
          fit="cover"
        ></el-image>
      </div>
      <form>
        <el-input
          class="formEl"
          placeholder="Как вас зовут?"
          v-model="name"
        ></el-input>
        <el-select
          class="formEl"
          v-model="valuePrice"
          placeholder="В какую стоимость хотите уложиться?"
          style="width: 100%"
        >
          <el-option
            class="formEl"
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <the-mask
          class="el-input__inner formEl"
          placeholder="Укажите ваш номер!"
          v-model="phone"
          :mask="['+7-(###)-###-##-##', '+7-(###)-###-##-##']"
        />
        <el-input
          class="formEl"
          type="textarea"
          rows="8"
          placeholder="Какой дизайн вы хотите?"
          v-model="text"
        ></el-input>
        <p class="mini">
          Нажимая "отправить" вы автоматически соглашаетесь на обработку
          <a href="/politica.pdf" download style="color:red;"
            >персональных данных</a
          >
        </p>
        <el-button class="formEl" @click="onSubmit">Отправить</el-button>
      </form>
    </div>
  </div>
</template>
<script>
import { required, minLength, between } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      options: [
        {
          value: "<1000 рублей",
          label: "Менее 1000 рублей"
        },
        {
          value: "1000 - 2000",
          label: "1000 - 2000 рублей"
        },
        {
          value: "2000 - 5000",
          label: "2000 - 5000 рублей"
        },
        {
          value: ">5000",
          label: "Более 5000 рублей"
        }
      ],
      body: "",
      name: "",
      valuePrice: "",
      text: "",
      phone: "",
      submitStatus: null
    };
  },
  methods: {
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
            "Имя - " +
            this.name +
            "| Телефон - " +
            this.phone +
            "| Комментарий - " +
            this.text +
            "| Желаемая цена - " +
            this.valuePrice
        });
        this.$message({
          message: "Заявка оптравлена!",
          type: "succes"
        });
        this.name = " ";
        this.phone = " ";
        this.text = " ";
        this.valuePrice = " ";
      }
    }
  },
  validations: {
    name: {
      required
    },
    valuePrice: {
      required
    },
    text: {
      required
    },
    phone: {
      required,
      minLength: minLength(10)
    }
  }
};
</script>
<style lang="scss" scoped>
.el-button {
  cursor: pointer;
  background: #7f3397;
  border: 1px solid #dcdfe6;
  text-align: center;
  padding: 12px 20px;
  font-size: 17px;
  border-radius: 7px;
  letter-spacing: 1.5px;
  font-family: Lora, serif;
  text-transform: uppercase;
  font-family: "Lora", serif;
  color: white !important;
  &:hover {
    background: #7f3397;
  }
}

.container {
  color: white;
  // background-color: #eee;
  position: relative;
  margin: 0 auto;
  font-family: "Lora", serif;
  width: 100%;
  padding-bottom: 20px;
}
.text-show {
  width: 100%;
  text-align: center;
  padding: 0 20px;
  display: none;
}
.block {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
  margin: 0 auto;
  .text {
    margin: 20px 0;
    width: 100%;
    max-width: 650px;
    font-weight: bold;
    text-align: center;
  }
  p {
    padding: 10px;
  }
  // .img {
  //   width: 100%;
  //   height: 300px;
  //   background: url("/img/logo.png") center center no-repeat;
  //   background-size: contain;
  // }
}
h2 {
  width: 100%;
  font-size: 30px;
  padding: 120px 0 90px 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 95px;
    left: 50%;
    transform: translateX(-75%);
    width: 160px;
    height: 3px;
    background-color: white;
  }
  &:before {
    content: "";
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translateX(-25%);
    width: 160px;
    height: 3px;
    background-color: white;
  }
}
form {
  width: 100%;
  max-width: 650px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px;
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
@media screen and (max-width: 771px) {
  .text {
    display: none;
  }
  .text-show {
    display: block !important;
  }
}
</style>
