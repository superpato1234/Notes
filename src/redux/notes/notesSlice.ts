import { createSlice } from "@reduxjs/toolkit"
import { reducers } from "./reducer"

export const initialState = {
    id:0,
    notes:[]
}

export const notesSlice = createSlice(
    {
        name:'notes',
        initialState,
        reducers: reducers
    },
)

export const {addNote, deleteNote} = notesSlice.actions