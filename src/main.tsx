import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider, useDispatch, useSelector } from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice(
  {
    name: 'counter',
    initialState: {
      value: 0,
    },
    reducers: {
      increment: (state)=>{state.value+=1}
      ,
      decrement: (state)=>{state.value-=1}
      ,
      incrementByAmount: (state,action)=>{state.value+=action.payload}
    }
  },
)

const store = configureStore({reducer:{
  counter:counterSlice.reducer
},})

const Prueba = () => {
  const counter = useSelector((state:any) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <>
    <div>
        <p>{counter}</p>
        <button onClick={()=>dispatch(counterSlice.actions.increment())}>+</button>
        <button  onClick={()=>dispatch(counterSlice.actions.decrement())}>-</button>
        <button onClick={()=>dispatch(counterSlice.actions.incrementByAmount(3))}>+3</button>
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store} >
      <Prueba />
    </Provider>
  </React.StrictMode>,
)