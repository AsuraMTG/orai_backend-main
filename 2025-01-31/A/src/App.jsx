import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import comment from './components/comment'
import Post from './components/post'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        Módosult a fájl tartalma.
      </div>
      {comment()}
      <Post title="szia" content="vilag"></Post>
    </>
  )
}

export default App