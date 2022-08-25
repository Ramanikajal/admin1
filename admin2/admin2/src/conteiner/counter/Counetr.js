import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { decrementAction, incrementAction } from '../Redux/action/counter.action';

function Counetr(props) {
    // const dispatch = useDispatch();
    const dispatch = useDispatch()
    // const co = useSelector(state => state.counter)
    const Co = useSelector(state => state.counter)

    const handleIncrement = () => {
        dispatch(incrementAction())
    }
    const handleDecrement = () => {
        dispatch(decrementAction())
    }

    console.log(Co);
    return (
        <div>
            <button onClick={() => handleIncrement()}>+</button>
            <p> {Co.counter}</p>
            <button onClick={() => handleDecrement()}>-</button>
        </div>
    );
}

export default Counetr;