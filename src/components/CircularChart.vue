<template>
<div class="circle-wrapper">
  <PercentageCircle :percent="percentage_result" active-color="blue" complete-color="red" :animate="true" :refresh-rate="10" :size="'big'"/>
</div>
</template>

<script>
import PercentageCircle from "vue-css-percentage-circle";

export default {
  components: {
    PercentageCircle
  },
  props: {
    percentage_result: {
      type: Number
    }
  },
  computed: {
    cssProps (){  // for passing datas var() in style css below
      return {
        "--percentage-result": this.percentage_result
      }
    }
  }
};
</script>

<style scoped>

.circle-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-left: 30px;
}

</style>