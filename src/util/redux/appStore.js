import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice'
import practiceReducer from './slices/practiceSlice'

const appStore = configureStore({
    reducer : {
        cart : cartReducer
    },
    reducer : {
        practice : practiceReducer
    }
})


export default appStore

// step 1 : install 2 libraries
// step 2 : create store by using configueStore, configureStore takes an object
// step5 : introduce the reducer to store  