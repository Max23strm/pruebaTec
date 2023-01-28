import {useEffect} from 'react'
import {CartCard} from './components';
import { useDispatch } from 'react-redux'
import { getCart } from './redux/cartSlice.js'

import './App.css';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCart())
    // eslint-disable-next-line
  },[])

  return (
    <div className="App">
      <CartCard/>
    </div>
  );
}

export default App;
