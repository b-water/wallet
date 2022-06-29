<template>
  <v-app>
    <v-main>
      <app-bar></app-bar>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  created() {
    this.$vuetify.theme.dark = true;
  },
};
</script>