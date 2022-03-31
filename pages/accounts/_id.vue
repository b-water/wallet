<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-btn @click="goBack()">
          <v-icon left>mdi-arrow-left</v-icon>Back</v-btn
        >
      </v-col>
      <v-col class="mt-4">
        <h1 v-if="this.type === 'new'">Create new Account</h1>
        <h1 v-else>Update Account</h1>
        <v-form @submit="save" class="mt-4 form">
          <v-card class="pa-4 mb-4">
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
          </v-card>
          <v-btn type="submit" variant="primary">
            <span v-if="this.type === 'new'">Create</span>
            <span v-else>Update</span>
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
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
    goBack() {
      this.$router.push("/");
    },
  },
};
</script>
