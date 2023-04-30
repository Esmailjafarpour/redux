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
import React from 'react';
import {increase} from "./redux/counter/counterAction";
import {useSelector , useDispatch} from "react-redux";


const Counter = (props) => {

     const state = useSelector(state => state);
     const dispatch = useDispatch();
     
     return (
          <div>
               <h2>Counter{state.counter}</h2>
               <button onClick={() => dispatch(increase())}>Increase</button>
          </div>
     );
}



export default Counter;
