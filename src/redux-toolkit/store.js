import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/products-slice";
import cartSlice from "./slices/cart-slice";

export const myStore = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
});
