import { createStore } from "vuex";

const defaultState = { items: Array(25).fill({}) };
defaultState.items[0] = {
  src: "/images/item-green.png",
  amount: 4,
};
defaultState.items[1] = {
  src: "/images/item-orange.png",
  amount: 2,
};
defaultState.items[2] = {
  src: "/images/item-purple.png",
  amount: 5,
};

const storageState = JSON.parse(localStorage.getItem("state"));

export const store = createStore({
  state: storageState || defaultState,
  mutations: {
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
