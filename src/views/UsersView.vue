<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" md="4" offset-md="4">
        <v-text-field
          v-model="search"
          solo
          label="Поиск"
          append-icon="mdi-magnify"
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" offset-sm="3" sm="6" offset-md="4" md="4">
        <v-btn @click="isCreating = !isCreating">Создать пользователя</v-btn>
        <UserCreate v-show="isCreating" />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        sm="6"
        md="4"
        v-for="user in filteredUsers"
        :key="user.id"
      >
        <User :user="user" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import User from "../components/User.vue";
import UserCreate from "../components/UserCreate.vue";
import { mapState } from "vuex";

export default {
  components: {
    User,
    UserCreate,
  },
  data() {
    return {
      search: "",
      isCreating: false,
    };
  },
  computed: {
    ...mapState("users", ["users"]),
    filteredUsers() {
      if (this.search != "") {
        return this.users.filter(
          (x) =>
            x.first_name.toLowerCase().search(this.search.toLowerCase()) != -1
        );
      } else {
        return this.users;
      }
    },
  },
};
</script>

<style>
</style>