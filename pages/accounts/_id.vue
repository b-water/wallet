<template>
  <div>
    <b-form @submit="save">
      <b-alert variant="success" v-model="this.result.state">Account saved</b-alert>
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
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group>
        <currency-select :selected="this.form.currencyId" v-on:change="changeCurrency($event)"></currency-select>
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
  </div>
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
        data: null
      }
    };
  },
  async fetch() {
    if (this.type === 'edit') {
      this.form = await this.$repositories.account.show(this.$route.params.id)
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
      console.log(result);
      if (result.id > 0) {
        this.result.state = true;
        //this.$router.push('/accounts/' + result.id);
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
