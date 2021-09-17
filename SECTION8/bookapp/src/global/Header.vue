<template>
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>
      <v-spacer></v-spacer>
      <v-btn color="error" @click="deleteLocalStorage">一括削除する</v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    deleteLocalStorage() {
      this.$emit('delete-local-storage');
    },
  },
};
</script>

<style></style>
