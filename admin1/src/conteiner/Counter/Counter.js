
// import{useDispatch, UseSelector}from 'react-redux';
import React from 'react';
import { useSelector,useDispatch } from 'react-redux'
import{incrementCounter,decrementCounter }from '../../Redux/action/Counter.action'

function Counter(props) {
const dispatch = useDispatch();
const c = useSelector (state => state.Counter)
const handleIncrement = () => {
    dispatch(incrementCounter())
}
const handleDecrement  = () => {
    dispatch( decrementCounter())
}

    return (
        <div>
            
            <button onClick={() => handleIncrement()}>+</button>
            <p>{c.Counter}</p>
            <button onClick={() => handleDecrement()}>-</button>
        </div>
        
    );
}

export default Counter;

