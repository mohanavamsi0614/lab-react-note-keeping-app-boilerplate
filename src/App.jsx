import { useState } from 'react'
import './App.css'

function App() {
  const [value, setCount] = useState()

  return (
    <div>
    <h4>Input</h4>
    <div className='flex'>
    
    <textarea onChange={(e)=>{setCount(e.target.value)}}>
    {value}
    </textarea>
    <div>
    <div className='area'>

      <h3 className='h3'>
        {value}
      </h3>
    </div>
    </div>
    </div>
    </div>
  )
}

export default App
