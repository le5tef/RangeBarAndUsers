<template>
  <v-card class="my-4">
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="name"
          :counter="15"
          :rules="nameRules"
          label="Имя"
          required
        ></v-text-field>

        <v-text-field
          v-model="lastname"
          :counter="15"
          :rules="lastNameRules"
          label="Фамилия"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Создать
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset"> Сбросить </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    valid: false,
    name: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Имя Обязательно",
      (v) => (v && v.length <= 15) || "В имени не может быть больше 15 букв",
    ],
    lastNameRules: [
      (v) => !!v || "Фамилия обязательна",
      (v) => (v && v.length <= 15) || "В фамилии не может быть больше 15 букв",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Почта обязательна",
      (v) => /.+@.+\..+/.test(v) || "Некорректная почта",
    ],
  }),
  computed: {
    ...mapGetters("users", ["userGreatestId"]),
  },
  methods: {
    ...mapActions("users", ["addUser"]),
    validate() {
      if (this.$refs.form.validate()) {
        let user = {
          email: this.email,
          id: (this.userGreatestId || 0) + 1,
          first_name: this.name,
          last_name: this.lastname,
          avatar:
            "https://icon-library.com/images/user-icon-jpg/user-icon-jpg-4.jpg",
        };
        this.addUser(user);
        this.reset();
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style>
</style>