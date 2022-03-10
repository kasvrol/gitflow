import { useState } from 'react'
import './App.css'
import './css/botoes.scss'
import SomaBotao from './components/SomaBotao/SomaBotao'
import DivBotao from './components/DivBotao/DivBotao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
        <p>Hello, it's me</p>
        <SomaBotao/>
        <DivBotao/>
      </header>
    </div>
  )
}

export default App
