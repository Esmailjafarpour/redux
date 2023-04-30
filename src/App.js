import './App.css';
import Counter from "./Counter";
import Number from './Number';
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {

  return (

    <Provider store={store}>
       <div className="App">
        <Counter/>
        <Number/>
      </div>
    </Provider>

  );
  
}

export default App;
