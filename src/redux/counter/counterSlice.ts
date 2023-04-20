import { createSlice } from '@reduxjs/toolkit'
import { reducers } from './reducer'

const initialState:{value:number} = {
    value:0
}

export const counterSlice = createSlice(
    {
        name:'counter',
        initialState,
        reducers: reducers
    },
)

export const {decrement,increment,incrementByAmount} = counterSlice.actions