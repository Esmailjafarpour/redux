// import React from 'react';
// import {increase} from "./redux/counter/counterAction";
// import {connect} from "react-redux";

// const Counter = (props) => {
//      return (
//           <div>
//                <h2>Counter{props.counter}</h2>
//                <button onClick={props.increase}>Increase</button>
//           </div>
//      );
// }

// const mapStateToProps = (state) => {

//      return{
//           counter : state.counter
//      }

// }


// const mapDispatchToProps = (dispatch) => {
//      return {
//           increase : () => dispatch(increase())
//      }
// }

// export default connect(mapStateToProps , mapDispatchToProps) (Counter);

//method Two
import React , {useState} from 'react';
import {increaseCounter , decreaseCounter} from "./redux/counter/counterAction";
import {useSelector , useDispatch} from "react-redux";


const Counter = () => {
     const [value, setValue] = useState(1);
     const state = useSelector(state => state);
     const dispatch = useDispatch();

     return (
          <div>
               <h2>Counter - {state.counterState.counter}</h2>
               <input type="text" value={value} onChange={(event) => setValue(event.target.value)}/>
               <button onClick={() => dispatch(increaseCounter(+value))}>increaseCounter</button>
               <button onClick={() => dispatch(decreaseCounter(+value))}>decreaseCounter</button>
          </div>
     );
}



export default Counter;
