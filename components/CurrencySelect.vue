<template>
  <div>
    <b-form-select v-model="selected" :options="options"></b-form-select>
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
  /** 
  async asyncData() {
    this.currencys = await this.$currencyRepository.index();
  },*/
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
  methods: {},
};
</script>
