<template>
  <b-row>
    <b-col class="mt-4">
      <nuxt-link to="/accounts">
        <b-button>Back</b-button>
      </nuxt-link>
      <h5>Create new Account</h5>
      <b-form @submit="save" class="mt-4 form" bg-variant="dark">
        <b-form-group
          id="input-name-group"
          label="Name:"
          label-for="input-name"
          description="Choose something"
        >
          <b-form-input
            id="input-name"
            v-model="form.name"
            placeholder="Enter name of the Account"
            bg-variant="dark"
            class="form-white"
            :trim="true"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group>
          <currency-select
            :initalValue="this.form.currencyId"
            v-on:change="changeCurrency($event)"
          ></currency-select>
        </b-form-group>

        <b-form-group>
          <b-button type="submit" variant="primary">
            <span v-if="this.type === 'new'">Create</span>
            <span v-else>Update</span>
          </b-button>
        </b-form-group>
      </b-form>
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import NuxtLogo from "~/components/NuxtLogo.vue";
import CurrencySelect from "../../components/CurrencySelect.vue";
export default {
  name: "NewEditAccountPage",
  components: {
    CurrencySelect,
    NuxtLogo,
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
