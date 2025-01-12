import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      //mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.card.info.id !== action.payload
      ); 
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addToCart, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
