import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [
      { name: '商品名A' },
      { name: '商品名B' },
      { name: '商品名C' },
    ]
  },
  mutations: {
    addItemToCart(state, payload) {
      state.cart.push(payload);
    }
    //payloadはinputで入力したデータ、関数addItemToCartに渡されている（新しい商品をcart配列に追加するために使用される）
  }
})