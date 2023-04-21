import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../../redux/counter/counterSlice";

const Counter = () => {
  const counter = useSelector((state: any) => state.counter.value);
  const [amount,setAmount] = useState(0);
  const dispatch = useDispatch();

  function handleSubmit(event){
    event.preventDefault();
    dispatch(incrementByAmount(event.target.amount.value))
  }
  function handleChange(event){
    if(typeof +event.target.value){
      setAmount(event.target.value)
    }
  }
  return (
    <>
      <h2 className='text-amber-300 text-6xl font-Roboto font-extralight'>Counter</h2>
      <p className="text-white text-5xl font-extralight">{counter}</p>
      <div className="flex justify-between w-40 my-8">
        <button
          className="bg-slate-600 rounded text-slate-400 text-2xl font-extralight min-w-[3rem] max-w-md"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="bg-slate-600 rounded text-slate-400 text-2xl font-extralight min-w-[3rem] max-w-md"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <form onSubmit={handleSubmit}>
          <input
            name="amount"
            value={amount}
            placeholder=""
            onChange={handleChange}
            className="bg-slate-600 rounded text-slate-400 text-2xl font-extralight min-w-[3rem] max-w-[3rem] text-center"
          >
          </input>
        </form>
      </div>
    </>
  );
};

export default Counter;
