<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="options"
      @change="change($event)"
    ></b-form-select>
  </div>
</template>

<script>
export default {
  name: "CurrencySelect",
  data() {
    return {
      selected: null,
      currencys: [],
      options: [{ value: null, text: "Please select a currency" }],
    };
  },
  async fetch() {
    this.currencys = await this.$currencyRepository.index();

    if (this.currencys.length > 0) {
      this.currencys.forEach((element) => {
        const item = {
          value: element.id,
          text: element.name,
        };
        this.options.push(item);
      });
    }
  },
  created() {},
  methods: {
    change(currencyId) {
      this.$emit("change", currencyId);
    },
  },
};
</script>
