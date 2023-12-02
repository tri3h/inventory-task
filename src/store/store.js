import { createStore } from "vuex";

const defaultState = { items: Array(25).fill(null) };
const storageState = JSON.parse(localStorage.getItem("state"));

export const store = createStore({
  state: storageState || defaultState,
  mutations: {
    ADD_ITEM(state, item) {
      const index = state.items.findIndex((x) => x == null);
      state.items[index] = item;
    },

    SET_ITEM_AMOUNT(state, { amount, index }) {
      state.items[index].amount = amount;
    },

    SET_ITEM_INDEX(state, { oldIndex, newIndex }) {
      const oldItem = state.items[oldIndex];
      const newItem = state.items[newIndex];
      state.items[oldIndex] = newItem;
      state.items[newIndex] = oldItem;
    },
  },
});
