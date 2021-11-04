<template>
  <div class="d-flex align-center fill-height justify-center">
    <User v-if="user" :user="user" />
    <div v-else>Не найдено или удалено</div>
  </div>
</template>

<script>
import User from "../components/User.vue";
import { mapState } from "vuex";
export default {
  props: {
    id: {
      required: true,
    },
  },
  components: {
    User,
  },
  computed: {
    ...mapState("users", ["users"]),
    user() {
      return this.users.find((user) => user.id == Number.parseInt(this.id));
    },
  },
};
</script>

<style>
</style>