<template>
  <div>
    <v-select
      v-model="selected"
      :items="options"
      @change="change($event)"
    ></v-select>
  </div>
</template>

<script>
export default {
  name: "CurrencySelect",
  props: {
    initalValue: {
      type: Number,
      require: false,
    },
  },
  data() {
    return {
      selected: null,
      currencys: [],
      options: [{ value: null, text: "Please select a currency" }],
    };
  },
  async fetch() {
    this.currencys = await this.$repositories.currency.index();

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
  created() {
    if (this.initalValue > 0) {
      this.selected = this.initalValue;
    }
  },
  methods: {
    change(currencyId) {
      this.selected = currencyId;
      this.$emit("change", currencyId);
    },
  },
  watch: {
    initalValue: {
      immediate: true,
      handler(value) {
        this.selected = value;
      },
    },
  },
};
</script>
