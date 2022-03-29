<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="mt-4">
        <v-card v-for="account in this.accounts" :key="account.id">
          <v-card-text>{{ account.name }}</v-card-text>
          <v-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            {{ Math.floor(Math.random() * (3000 - 1)) + 1 }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="mt-4">
        <nuxt-link to="/accounts/0">
          <b-button variant="outline-primary">Create</b-button>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "AccountsPage",
  data() {
    return {
      accounts: [],
    };
  },
  computed: {},
  async fetch() {
    this.accounts = await this.$repositories.account.index();
  },
};
</script>
