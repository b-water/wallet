<template>
  <div>
    <b-row>
      <b-col class="mt-4">
        <b-card-group deck>
          <b-card
            bg-variant="dark"
            text-variant="white"
            header-tag="header"
            footer-tag="footer"
            v-for="account in this.accounts"
            :key="account.id"
          >
            <template #header>
              <b-row no-gutters>
                <b-col cols="10" sm="9" md="10" lg="10" xl="11">
                  <b-card-title class="mb-0">{{ account.name }}</b-card-title>
                </b-col>
                <b-col cols="2" sm="3" md="2" lg="2" xl="1">
                  <nuxt-link :to="'/accounts/import/' + account.id">
                    <b-button size="sm">Import</b-button>
                  </nuxt-link>
                </b-col>
              </b-row>
            </template>
            <b-card-body>
              <b-card-sub-title class="mb-0"
                >Account Balance:
                {{ Math.floor(Math.random() * (3000 - 1)) + 1 }}
              </b-card-sub-title>
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>
            </b-card-body>
            <template #footer>
              <nuxt-link :to="'/accounts/' + account.id">
                <b-button size="sm">Edit</b-button>
              </nuxt-link>
              <nuxt-link :to="'/accounts/delete/' + account.id">
                <b-button size="sm" variant="danger">Delete</b-button>
              </nuxt-link>
            </template>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mt-4">
        <nuxt-link to="/accounts/0">
          <b-button variant="outline-primary">Create</b-button>
        </nuxt-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "AccountsPage",
  data() {
    return {
      accounts: [],
    };
  },
  async fetch() {
    this.accounts = await this.$repositories.account.index();
  },
};
</script>
