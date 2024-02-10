import { createSlice } from "@reduxjs/toolkit";

const suggestSlice=createSlice({
    name:"suggest",
    initialState:{},
    reducers:{
        cacheResult:(state,action)=>{
            state=Object.assign(state, action.payload)
        }
    }
});

export const {cacheResult}=suggestSlice.actions;
export default suggestSlice.reducers;