<template>
  <div class="container" id="CakePage">
    <h2 data-aos="fade-right">Торты</h2>
    <div class="cake">
      <div class="header" data-aos="fade-right">
        <li
          v-for="tab in tabs"
          :key="tab.title"
          v-bind:class="[{ active: currentTab === tab.comp }]"
          @click="currentTab = tab.comp"
        >
          {{ tab.title  }}
        </li>
      </div>
      <keep-alive>
        <transition name="fade">
          <component class="cake-body" v-bind:is="CakePage"></component>
        </transition>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import KidsCake from "~/components/cake/KidsCake.vue";
import MainCake from "~/components/cake/MainCake.vue";
import CoorpCake from "~/components/cake/CoorpCake.vue";
import BirthCake from "~/components/cake/BirthCake.vue";
export default {
  components: {
    KidsCake,
    MainCake,
    CoorpCake,
    BirthCake
  },
  data() {
    return {
      currentTab: "MainCake",
      tabs: [
        {
          comp: "MainCake",
          title: "Торты"
        },
        {
          comp: "KidsCake",
          title: "Детские"
        },
        {
          comp: "CoorpCake",
          title: "Мужские"
        },
        {
          comp: "BirthCake",
          title: "Свадебные"
        }
      ]
    };
  },
  computed: {
    CakePage() {
      return this.currentTab;
    }
  }
};
</script>
<style lang="scss" scoped>
.title {
  font-size: 24px;
  margin-bottom: 15px;
  text-align: center;
}
p {
  width: 100%;
  text-align: center;
  font-size: 18px;
  padding-bottom: 25px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.container {
  font-family: "Lora", serif;
  width: 100%;
  height: auto;
  background-color: #eee;
  position: relative;
  padding-bottom: 20px;
}
.cake {
  margin: 0 auto;
  width: 100%;
  max-width: 1400px;
  padding: 5px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 20px;
  li {
    margin: 0.5%;
    cursor: pointer;
    list-style: none;
    width: 24%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 18px;
    font-weight: 600;
    position: relative;
    &:hover {
      color: black;
      &::after {
        transition: 1s;
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        width: 100% !important;
        height: 3px;
        background-color: black;
      }
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 10%;
      height: 3px;
      background-color: black;
      transition: 1s;
    }
  }
}
.active {
  border: 3px solid black;
  &::after {
    transition: 1s;
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 0% !important;
    height: 1px;
  }
}
.cake-body {
  width: 100%;
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
@media screen and (max-width: 1637px) {
  li {
    font-size: 18px;
  }
}
@media screen and (max-width: 991px) {
  li {
    font-size: 16px !important;
  }
}
@media screen and (max-width: 480px) {
  li {
    font-size: 10px !important;
  }
}
</style>
//Имя - номер телефона  (торты, детские ,мужские - вес от 2 кг до 4.5 кг с  шагом в .5) 500р цена за декор от 2 до 3, от 3.5 до 4.5 - 650р, + цена за 1кг - 1000р.
//Имя - номер телефона  (свадебные - вес от 3.5 кг до 15 кг с  шагом в .5) цена декора считается отдельно , возможность выбора от 1 до 4 начинок.
