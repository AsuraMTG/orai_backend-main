import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('')

  return (
    <>
      <from>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
        <p>kapott szöveg: {text}</p>
      </from>
    </>
  )
}

export default App
