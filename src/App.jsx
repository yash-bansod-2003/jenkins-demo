import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello , Jenkins</h1>
      <div className="card">
        <p>
          Demo Webapp for Jenkins
        </p>
      </div>
    </>
  )
}

export default App
