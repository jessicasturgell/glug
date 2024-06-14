import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { VirtualPet } from "./components/VirtualPet.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <VirtualPet />
    </div>
    </>
  )
}

export default App
