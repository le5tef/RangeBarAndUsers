<template>
  <div id="app">
    <RangeBar :max-width="'510px'" v-model="value" />
  </div>
</template>

<script>
import RangeBar from "./components/RangeBar.vue";

export default {
  data() {
    return {
      value: 20,
    };
  },
  name: "App",
  components: {
    RangeBar,
  },
};
</script>

<style>
body {
  background-color: #23283e;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}
</style>
