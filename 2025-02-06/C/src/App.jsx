import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <>
      <form>
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)}/>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)}/>
        <p>Az összeg: {Number(num1) + Number(num2)}</p>
      </form>
    </>
  )
}

export default App
