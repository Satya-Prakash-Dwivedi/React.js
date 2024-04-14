import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter > 19) counter = 20;
    else setCounter(counter + 1);
  }

  const removeValue = () => {
    if(counter < 1) counter  = 0;
    else setCounter(counter - 1);
  }
  return (
    <>
      <h1>Counter Value {counter}</h1>
      <button onClick={addValue}>Add Value</button> <nbsp></nbsp>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
