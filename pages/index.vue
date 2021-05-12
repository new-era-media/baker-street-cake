<template>
  <div class="container">
    <div class="parallax" ref="parallax"></div>
    <div class="arrow" ref="arrow">
      <a href="#Start">
        <li class="el-icon-caret-top"></li>
      </a>
    </div>
    <MainPage id="Start" />
    <Catalog id="Catalog" />
    <Cake />
    <FillingCake />
    <Idea />
    <Capcake />
    <Macarons />
    <CandyPack />
    <AboutUs />
    <Reviews id="Reviews" />
    <Instagram />
    <Footer id="footer" />
    
    <script
      src="//code.jivosite.com/widget.js"
      data-jv-id="ZYad9AqDdW"
      async
    ></script>

    <!-- Yandex.Metrika counter -->
    <script type="text/javascript" >
      (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
      (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      ym(51613244, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true
      });
    </script>
    <noscript><div><img src="https://mc.yandex.ru/watch/51613244" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
    <!-- /Yandex.Metrika counter -->


    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-104065494-1%22%3E"
    ></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "UA-104065494-1");
    </script>
  </div>
</template>

<script>
import MainPage from "~/components/MainPage.vue";
import AboutUs from "~/components/AboutUs.vue";
import Catalog from "~/components/Catalog.vue";
import Cake from "~/components/Cake.vue";
import FillingCake from "~/components/FillingCake.vue";
import Idea from "~/components/Idea.vue";
import Instagram from "~/components/Instagram.vue";
import Macarons from "~/components/Macarons.vue";
import Capcake from "~/components/Capcake.vue";
import Reviews from "~/components/Reviews.vue";
import CandyPack from "~/components/CandyPack.vue";
import Footer from "~/components/Footer.vue";
export default {
  components: {
    MainPage,
    AboutUs,
    Catalog,
    Cake,
    FillingCake,
    Idea,
    Instagram,
    Macarons,
    Capcake,
    Reviews,
    CandyPack,
    Footer
  },
  methods: {
    handleScroll: function(event) {
      // console.log(window.pageYOffset, document.documentElement.scrollHeight/2)
      if (window.pageYOffset >= document.documentElement.scrollHeight / 1.5) {
        this.$refs.parallax.style.background =
          'url("/img/bgCom1.jpg") center center no-repeat';
      } else {
        this.$refs.parallax.style.background =
          'url("/img/bgCom.jpg") center center no-repeat';
      }

      if (window.pageYOffset >= 400) {
        this.$refs.arrow.classList.add("arrowShow");
      } else if (
        window.pageYOffset < 400 ||
        this.$refs.arrow.classList.contains("arrowShow")
      ) {
        this.$refs.arrow.classList.remove("arrowShow");
      }
    }
  },
  created: function() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="scss" scoped>
.parallax {
  // background: url("/img/bgCom1.jpg") center center no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: -1;
}
.arrow {
  position: fixed;
  opacity: 0;
  left: 15px;
  bottom: 15px;
  z-index: 999;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 50px;
  color: #7f3397 !important;
  transition: 0.1s;
}
a {
  color: #7f3397 !important;
}
.arrowShow {
  opacity: 1 !important;
}
@media screen and (max-width: 771px) {
  .arrow {
    display: none;
  }
}
</style>
