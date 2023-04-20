import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter/counterSlice";
import { notesSlice } from "./notes/notesSlice";


export const store = configureStore({
    reducer:{
        counter:counterSlice.reducer,
        notes:notesSlice.reducer,
    },
})