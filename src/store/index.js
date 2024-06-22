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
  }
})