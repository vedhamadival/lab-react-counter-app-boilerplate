import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Counter App</h1>
      <h3>{count}</h3>
      <div className="card">
        <button className='Button btn1' onClick={() => setCount((count) => count + 1)}>+</button>
        <button className='Button btn2' onClick={() => setCount((count) => count - 1)}>-</button>
        <button className='Button btn3' onClick={()=> setCount((0))}>Reset</button>
        </div>
    </>
  )
}

export default App
