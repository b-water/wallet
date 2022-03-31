<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Accounts</h1>
      </v-col>
      <v-col cols="12" v-for="account in this.accounts" :key="account.id">
        <v-card elevation="2">
          <v-row no-gutters>
            <v-col cols="4">
              <v-card-title> {{ account.name }}</v-card-title>
              <v-card-subtitle>
                <span>Balance:</span>
                <span>{{ Math.floor(Math.random() * (3000 - 1)) + 1 }}</span>
              </v-card-subtitle>
            </v-col>
            <v-col cols="8"></v-col>
          </v-row>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </v-card-text>
          <v-card-actions class="mt-2 ml-2 pb-4">
            <v-btn color="teal" @click="goToImport(account.id)" small depressed>
              <v-icon left> mdi-application-import</v-icon>
              Import</v-btn
            >
            <v-btn
              color="secondary"
              @click="goToEdit(account.id)"
              small
              depressed
            >
              <v-icon left>mdi-pencil</v-icon>
              Edit
            </v-btn>
            <v-btn
              @click="goToDelete(account.id)"
              color="error"
              small
              depressed
            >
              <v-icon left>mdi-delete</v-icon>
              Delete
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="mt-4">
        <v-btn color="indigo" @click="goToCreate()">
          <v-icon left>mdi-folder-plus</v-icon>
          Create
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import _ from "lodash";
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
  methods: {
    goToDelete(id) {
      if (id > 0) {
        this.$router.push("/accounts/delete/" + id);
      }
    },
    goToImport(id) {
      if (id > 0) {
        this.$router.push("/accounts/import/" + id);
      }
    },
    goToEdit(id) {
      if (id > 0) {
        this.$router.push("/accounts/" + id);
      }
    },
    goToCreate() {
      this.$router.push("/accounts/0");
    },
  },
};
</script>
