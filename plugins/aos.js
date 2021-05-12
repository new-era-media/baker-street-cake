import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  disable: function() {
    var maxWidth = 768;
    return window.innerWidth < maxWidth;
  }
});
