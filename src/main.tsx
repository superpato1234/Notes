import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { increment,decrement,incrementByAmount } from './redux/counter/counterSlice'
import { store } from './redux/store'

const Prueba = () => {
  const counter = useSelector((state:any) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <>
    <div>
        <p>{counter}</p>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button  onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(incrementByAmount(3))}>+3</button>
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