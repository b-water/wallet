<template>
  <v-row>
    <v-col class="mt-4">
      <nuxt-link to="/accounts">
        <v-btn>Back</v-btn>
      </nuxt-link>
      <h5 class="text-secondary">Create new Account</h5>
      <v-form @submit="save" class="mt-4 form">
        <v-text-field
          id="input-name"
          v-model="form.name"
          placeholder="Enter name of the Account"
          :trim="true"
          required
        ></v-text-field>

        <currency-select
          :initalValue="this.form.currencyId"
          v-on:change="changeCurrency($event)"
        ></currency-select>

        <v-btn type="submit" variant="primary">
          <span v-if="this.type === 'new'">Create</span>
          <span v-else>Update</span>
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import CurrencySelect from "../../components/CurrencySelect.vue";
export default {
  name: "NewEditAccountPage",
  components: {
    CurrencySelect,
  },
  data() {
    return {
      type: "",
      form: {
        name: "",
        currencyId: null,
      },
      result: {
        state: null,
        data: null,
      },
    };
  },
  async fetch() {
    if (this.type === "edit") {
      this.form = await this.$repositories.account.show(this.$route.params.id);
    }
  },
  created() {
    if (this.$route.params.id === "0") {
      this.type = "new";
    } else {
      this.type = "edit";
    }
  },
  methods: {
    async save(event) {
      event.preventDefault();

      const result = await this.$repositories.account.create(this.form);
      this.result.data = result;

      if (result.id > 0) {
        this.result.state = true;

        if (this.type === "new") {
          /**
           * if new row is created, switch to edit page
           */
          this.$router.push({
            path: "/accounts/" + result.id,
            replace: true,
          });
        } else {
          this.result.state = false;
        }
      }
    },
    changeCurrency(currencyId) {
      if (currencyId > 0) {
        this.form.currencyId = currencyId;
      }
    },
  },
};
</script>
