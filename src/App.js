import './App.css';
import Counter from "./Counter";
import Number from './Number';
import Users from './Users';
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {

  return (

    <Provider store={store}>
       <div className="App">
        <Counter/>
        <Number/>
        <Users/>
      </div>
    </Provider>

  );
  
}

export default App;
