import { configureStore } from "@reduxjs/toolkit";
import limitSlice from "./features/limit/limitSlice";
import { api } from "./api";
import heartSlice from "./features/heart/heartSlice";
import productCategorySlice from "./features/product-category/productCategorySlice";
import cartSlice from "./features/cart/cartSlice";
import setToken from "./features/token/tokenSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      limit: limitSlice,
      heart: heartSlice,
      category: productCategorySlice,
      cart: cartSlice,
      token: setToken,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
};
