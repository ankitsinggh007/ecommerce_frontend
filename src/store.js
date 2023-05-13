import { configureStore } from "@reduxjs/toolkit";
import Userreducer from "./slices/User";
const store=configureStore({
    reducer: {
        User:Userreducer
    },
})
export default store;