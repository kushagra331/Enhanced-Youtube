import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import suggestSlice from "./suggestSlice";


const store=configureStore({
    reducer:{
        app:appSlice,
        suggest:suggestSlice,
    },
});

export default store;
