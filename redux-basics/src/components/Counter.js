import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);

    const incrementHandler = () => {
        dispatch({type : 'increment'});
    }
    const increaseHandler = () => {
        dispatch({type : 'increase', amount: 5})
    }
    const decrementHandler = () => {
        dispatch({type : 'decrement'});
    }
  return (
    <div >
        <h1>Redux Counter</h1>
        <h3>{counter}</h3>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>

    </div>
  )
}

export default Counter;