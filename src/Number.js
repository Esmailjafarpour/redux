import React from 'react';
import {increaseNumber , decreaseNumber} from "./redux/number/numberAction";
import {useSelector , useDispatch} from "react-redux";

const Number = () => {
     const state = useSelector(state => state);
     const dispatch = useDispatch();

     return (
          <div>
               <h2>Number - {state.numberState.number}</h2>
               <button onClick={() => dispatch(increaseNumber())}>IncreaseNumber</button>
               <button onClick={() => dispatch(decreaseNumber())}>decreaseNumber</button>
          </div>
     );
}

export default Number;
