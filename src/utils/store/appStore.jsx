
import { configureStore } from "@reduxjs/toolkit";
import groceryReducer from "./grocerySlice"
const appStore = configureStore({
    reducer:{
    grocery:groceryReducer
    }
})
export default appStore;