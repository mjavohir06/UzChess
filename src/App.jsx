import { useState } from 'react'
import './index.css'
import Main from "./container/Asosiy/main.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <Main/>
    </div>
  )
}

export default App
