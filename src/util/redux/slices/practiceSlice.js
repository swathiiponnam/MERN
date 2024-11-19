import { createSlice } from "@reduxjs/toolkit";

const practiceSlice = createSlice({
    name : "practice",
    initialState : {
        item : []
    },
    reducers : {
        addList : (state,action)=>{
            state.item.push(action.payload)
        },
        deleteList : (state,action)=>{
            state.item.pop()
        }
    }
})

export const {addList,deleteList} = practiceSlice.actions
export default practiceSlice.reducer