<template>
  <div class="d-flex justify-center align-center fill-height flex-column">
    <div>{{ value }}% (это v-model)</div>
    <RangeBar v-model="value" />
  </div>
</template>

<script>
import RangeBar from "../components/RangeBar.vue";
export default {
  components: {
    RangeBar,
  },
  data() {
    return {
      value: 50,
    };
  },
};
</script>

<style>
</style>