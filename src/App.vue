<template>
  <v-app id="app">
    <v-main>
      <v-btn
        class="mt-10 mt-md-0"
        :fixed="$vuetify.breakpoint.mdAndUp"
        left
        top
        x-large
        :to="{ name: 'Home' }"
        v-if="$route.name != 'Home'"
        >Домой
      </v-btn>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  name: "App",
  components: {},
  mounted() {
    this.fetchUsers();
  },
  methods: {
    ...mapActions("users", ["fetchUsers"]),
  },
};
</script>

<style>
body {
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #23283e;
}
</style>
