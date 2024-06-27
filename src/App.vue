<template>
  <div id="app">
    <div v-for="(item, index) in $store.state.cart" :key="index">
      {{ item.name }}
    </div>
    <label for="itemName">商品名</label>
    <input name="itemName" type="text" v-model="itemName" />
    <button @click="addItem">追加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemName: "",
    };
  },
  methods: {
    addItem() {
      this.$store.commit("addItemToCart", { name: this.itemName });
      //commitメソッドは、Vuexストアのミューテーションを呼び出す
      //name: this.itemNameは、ミューテーションに渡されるpayloadで、
      //ここではテキストフィールドに入力された文字列がnameプロパティとして渡される
      this.itemName = "";
      //次の入力のためテキストをクリアしておく
    },
  },
};
</script>