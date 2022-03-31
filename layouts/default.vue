<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>