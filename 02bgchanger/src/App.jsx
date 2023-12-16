import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const [color, setColor] = useState("red");

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}> 
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-3 shadow-lg bg-white
    px-3 py-2 rounded-3xl'>
      <button onClick={() => {setColor("green")}}
      className='outline-none px-4 py-1 rounded-full shadow-lg'
      style={{backgroundColor:'green'}}>Green</button>
            <button onClick={() => {setColor("red")}}
      className='outline-none px-4 py-1 rounded-full shadow-lg'
      style={{backgroundColor:'red'}}>Red</button>
            <button onClick={() => {setColor("blue")}}
      className='outline-none px-4 py-1 rounded-full shadow-lg'
      style={{backgroundColor:'blue'}}>Blue</button>
    </div>

    </div>
  )
}

export default App
