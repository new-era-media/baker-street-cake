<template>
  <div>
    <Countdown deadline="November 26, 2020"></Countdown>
  </div>
</template>

<script>
import Countdown from "vuejs-countdown";

export default {
  components: { Countdown }
};
</script>
<style lang="scss">
li .text {
  display: none;
}
</style>
