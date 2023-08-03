import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};



export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.products.find(
        (item) => item.id === action.payload.id && item.size === action.payload.size
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      const { id, size } = action.payload;
      state.products = state.products.filter(
        (item) => item.id !== id || item.size !== size
      );
    },
    resetCart: (state) => {
      state.products = []
    },
  },
});

export const { addToCart,removeItem,resetCart } = cartSlice.actions;

export default cartSlice.reducer;
