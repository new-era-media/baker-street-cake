<template>
  <div class="content">
    <h2 data-aos="fade-right">Отзывы</h2>
    <!-- <div class="divz"></div> -->
    <el-carousel
      :interval="4000"
      type="card"
      height="300px"
      class="carousel-1"
      data-aos="fade-up"
    >
      <el-carousel-item v-for="review in reviews" :key="review.name">
        <el-card class="box-card" style="height: 200px">
          <div slot="header" class="clearfix">
            <span>
              <p style="font-size:20px; font-weight:700;">
                {{ review.name }}
              </p></span
            >
            <p class="datas">11.11.11</p>
          </div>
          <div>
            <p class="comment">{{ review.comment }}</p>
          </div>
        </el-card>
      </el-carousel-item>
    </el-carousel>

    <el-carousel indicator-position="outside" height="500px" class="carousel-2">
      <el-carousel-item v-for="review in reviews" :key="review.name">
        <div class="comments">
          <p class="name">{{ review.name }}</p>
          <p class="comment">{{ review.comment }}</p>
          <p class="data">{{ review.date }}</p>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="fosComment" data-aos="fade-up">
      <el-input
        class="inp"
        placeholder="Как вас зовут?"
        v-model="name"
      ></el-input>

      <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 10 }"
        resize="none"
        placeholder="Ваш комментарий"
        v-model="text"
      >
      </el-input>

      <div class="wrapper">
        <emoji-picker @emoji="append" :search="search">
          <div
            class="emoji-invoker"
            slot="emoji-invoker"
            slot-scope="{ events: { click: clickEvent } }"
            @click.stop="clickEvent"
          >
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
              />
            </svg>
          </div>
          <div slot="emoji-picker" slot-scope="{ emojis, insert, display }">
            <div
              class="emoji-picker"
              :style="{ top: display.y + 'px', left: display.x + 'px' }"
            >
              <div class="emoji-picker__search">
                <input type="text" v-model="search" v-focus />
              </div>
              <div>
                <div v-for="(emojiGroup, category) in emojis" :key="category">
                  <h5>{{ category }}</h5>
                  <div class="emojis">
                    <span
                      v-for="(emoji, emojiName) in emojiGroup"
                      :key="emojiName"
                      @click="insert(emoji)"
                      :title="emojiName"
                      >{{ emoji }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </emoji-picker>
      </div>

      <p class="mini">
        Нажимая "отправить" вы автоматически соглашаетесь на обработку
        <a href="/politica.pdf" download style="color:red;"
          >персональных данных</a
        >
      </p>

      <el-button style="margin: 5px;" type="danger" @click="send"
        >Отправить</el-button
      >
    </div>
  </div>
</template>
<script>
import EmojiPicker from "vue-emoji-picker";
export default {
  components: {
    EmojiPicker
  },
  data() {
    return {
      reviews: [
        {
          name: "Анна",
          comment:
            "Здравствуйте, у моего молодого человека было День Рождение, я решила ему подарить торт в виде солнышка. Торт получился яркий красивый и внушитеьно тяжелый. Когда он увидел торт, честно говоря расстроилася, сказав, почему я не подарила ему пирог с мясом.... Но когда он его попробовал, то он был в таком восторге, сказал, что съест его сам, что ни с кем не поделится!!! Спасибо огромное!!!",
          date: "11.11.11"
        },
        {
          name: "Александр",
          comment:
            "Заказала на 1 сентября торт, попросила сделать птичье молоко, ребенок у меня ни ест вообще ни чего, про торты я молчу, т.к. он не ест их совсем, сын идет во второй класс, хотелось сюрприза. Тортик привезли ко времени которому просила. И когда мы начали его резать, и дали попробовать кусочек сыну, он съел его полностью, съел все безе с верху. Я очень вредная, действительно вредная, но это ействительно был шедевр, я таких тортов не пробовала, спасибо Вашему кондитеру огромное!!!",
          date: "11.11.11"
        },
        {
          name: "Зина",
          comment: "Никада ни эла такых вкузных сладастей",
          date: "11.11.11"
        }
      ],
      name: "",
      text: "",
      input: "",
      search: ""
    };
  },
  methods: {
    append(emoji) {
      this.text += emoji;
    },
    send() {
      if (this.name == "" || this.text == "") {
        this.$message({
          message: "Заполнены не все поля",
          type: "warning"
        });
      } else {
        this.$store.dispatch("ajax", {
          data: "Имя - " + this.name + " комментарий - " + this.text
        });
        this.$message("Комментарий будет добавлен после проверки модератором");
        this.name = "";
        this.text = "";
      }
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.regular-input {
  padding: 0.5rem 1rem;
  border-radius: 3px;
  border: 1px solid #ccc;
  width: 20rem;
  height: 12rem;
  outline: none;
}

.regular-input:focus {
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
}

.emoji-invoker {
  // иконка
  position: absolute;
  top: -35px;
  right: 10px;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 999;
}
.emoji-invoker:hover {
  transform: scale(1.1);
}
.emoji-invoker > svg {
  fill: #7f3397;
}

.emoji-picker {
  margin-top: 100px;
  // right: 0px !important;
  // position: static;
  // top: 10px;
  // z-index: 1;
  font-family: "Lora", serif;
  border: 1px solid #ccc;
  width: 15rem;
  height: 20rem;
  overflow: scroll;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  background: #fff;
  box-shadow: 1px 1px 8px #c7dbe6;
  z-index: 999;
}
.emoji-picker__search {
  display: flex;
}
.emoji-picker__search > input {
  flex: 1;
  border-radius: 10rem;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  outline: none;
}
.emoji-picker h5 {
  margin-bottom: 0;
  color: #b1b1b1;
  text-transform: uppercase;
  font-size: 0.8rem;
  cursor: default;
}
.emoji-picker .emojis {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.emoji-picker .emojis:after {
  content: "";
  flex: auto;
}
.emoji-picker .emojis span {
  padding: 0.2rem;
  cursor: pointer;
  border-radius: 5px;
}
.emoji-picker .emojis span:hover {
  background: #ececec;
  cursor: pointer;
}

.mini {
  color: white !important;
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
.content {
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  font-family: "Lora", serif;
  padding: 10px;
}
.box-card {
  font-family: "Lora", serif;
}
.comments {
  width: 100%;
  min-width: 280px;
  min-height: 200px;
  height: auto;
  background-color: #eeeeee;
  margin: 0 auto;

  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.8), 23px 0 20px -23px rgba(0, 0, 0, 0.8),
    0 0 40px rgba(0, 0, 0, 0.1) inset;

  p {
    width: 100%;
    padding: 20px;
  }
  .name {
    font-size: 24px;
    font-weight: 700;
    color: #7f3397;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 5px;
      width: 50%;
      height: 2.5px;
      background-color: #7f3397;
      opacity: 0.5;
    }
  }
  .comment {
    font-size: 16px;
    height: 500px;
    overflow: hidden; /* Обрезаем все, что не помещается в область */
  }
  .data {
    text-align: right;
  }
}
.datas {
  float: right;
  margin-top: -20px;
}
.fosComment {
  margin: 0 auto;
  width: 100%;
  max-width: 750px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .inp {
    margin: 10px 0;
  }
}
.carousel-2 {
  display: none;
}
@media screen and (max-width: 771px) {
  .carousel-1 {
    display: none !important;
  }
  .carousel-2 {
    display: block !important;
  }
}
</style>
