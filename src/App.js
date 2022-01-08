
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { INCREMENT, DECREMENT } from './action/index'
import  './App.css'

const App = () => {
  const myState = useSelector((state) => state.ChangeNumber);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>Increment and Decrement Counter </h1>
      <div className="quantity">
        <button>
          <a className="quantity_minus" title="Decrement"
            onClick={() => dispatch(DECREMENT())}>DECREMENT</a></button>
        <input name="quantity" type="text" className='quantity_input' value={myState} />
        <button>
          <a className="quantity_plus" title="Increment" 
            onClick={() => dispatch(INCREMENT())}>INCREMENT</a></button>
      </div>
    </div>
  )
}
export default App;
