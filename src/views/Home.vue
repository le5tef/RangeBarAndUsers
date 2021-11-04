<template>
  <div class="d-flex align-center fill-height justify-center">
    <v-btn x-large class="mr-5" :to="{ name: 'RangeBar' }">Range Bar</v-btn>
    <v-btn x-large :to="{ name: 'Users' }">Users</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

