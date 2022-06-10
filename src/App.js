import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { increase } from './redux/actions';
import { decrease } from './redux/actions';

function App() {

  const initialState = useSelector(state=>state)
  const dispatch = useDispatch()
  
  return (
    <div className="App">
    <button onClick={()=>dispatch(decrease(5))}>-</button> 
    {initialState} 
    <button onClick={()=>dispatch(increase(3))}>+</button>
    </div>
  );
}

export default App;
