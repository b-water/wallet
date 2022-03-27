<template>
  <div>
    <b-row>
      <b-col class="mt-4">
        <b-card-group deck>
          <b-card
          bg-variant="dark" text-variant="white"
            header-tag="header"
            footer-tag="footer"
            v-for="account in this.accounts"
            :key="account.id"
          >
            <template #header>
              <h6 class="mb-0">Header Slot</h6>
            </template>
            <b-card-body>
              <b-card-title>{{ account.name }}</b-card-title>
              <b-card-sub-title class="mb-2"
                >Account Balance:
                {{
                  Math.floor(Math.random() * (3000 - 1)) + 1
                }}</b-card-sub-title
              >
              <b-card-text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </b-card-text>
              <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card-body>
            <template #footer>
              <em>Footer Slot</em>
            </template>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="mt-4">
        <nuxt-link to="/accounts/0">
          <b-button variant="primary">Create</b-button>
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
