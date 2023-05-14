import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import Userreducer from "./slices/User";

const store = configureStore({
  reducer: {
    User:Userreducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export default store;