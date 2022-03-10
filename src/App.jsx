import { useState } from 'react'
import './App.css'
import './css/botoes.scss'
import CascoDaCalculadora from './components/CascoDaCalculadora/CascoDaCalculadora'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <p>Hello, it's me</p>
        <CascoDaCalculadora/>
      </header>
    </div>
  )
}

export default App
