<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{ user.first_name }} {{ user.last_name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey">
        <v-img :src="user.avatar"></v-img
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        v-if="$route.name == 'Users'"
        text
        :to="{ name: 'User', params: { id: user.id } }"
        >Подробнее</v-btn
      >
      <v-spacer />
      <v-btn color="error" @click="deleteUser(user.id)"> УДАЛИТЬ </v-btn>
    </v-card-actions>
  </v-card>
</template>
    
<script>
import { mapActions } from "vuex";
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions("users", ["deleteUser"]),
  },
};
</script>

<style>
</style>