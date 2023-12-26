import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: JSON.parse(localStorage.getItem("cartProducts")) || [],
  // initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
      localStorage.setItem("cartProducts", JSON.stringify(state));
    },
    deleteFromCart: (state, action) => {
      const existingProduct = state.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        const newState = state.filter(
          (product) => product.id !== action.payload.id
        );
        localStorage.setItem("cartProducts", JSON.stringify(newState));
        return newState;
      }
      localStorage.setItem("cartProducts", JSON.stringify(state));
      return state;
    },

    clear: () => {
      localStorage.clear();
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, clear } = cartSlice.actions;
export default cartSlice.reducer;
