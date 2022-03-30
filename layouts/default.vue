<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">wallet</v-list-item-title>
          <v-list-item-subtitle> subtext </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer>
      <!-- -->
    </v-footer>
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