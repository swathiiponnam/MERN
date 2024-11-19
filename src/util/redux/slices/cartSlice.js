// to create a slice we've to use a method called createSlice

// step4: creation of slice and it takes an object with key names as name,initialState,reducers

// and we've to export reducer and actions

import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name : "cart",
//     initialState : {
//         items : []
//     },
//     reducers : {
//         addItem : (state,action)=>{
//             state.items.push(action.payload)
//         },
//         deleteItem : (state,action)=>{
//             state.items = state.items.filter((val)=> val.id !== action.payload)
//         }
//     }
// })


const cartSlice = createSlice({
    name : "cart",
    initialState : {items : []},
    reducers : {
        addItem : (state,action)=>{
            state.items.push(action.payload)
        }
    }
})
export const {addItem,deleteItem} = cartSlice.actions
export default cartSlice.reducer