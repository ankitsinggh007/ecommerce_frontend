import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import Userreducer from "./slices/User";
import ProductReducer from './slices/Product'

const store = configureStore({
  reducer: {
    User:Userreducer,
    Product:ProductReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export default store;