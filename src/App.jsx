import { useState } from 'react'
import CascoDaCalculadora from './components/CascoDaCalculadora/CascoDaCalculadora'
import './css/botoes.scss'
import './css/cascoDaCalculadora.scss'
import './css/visor.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
        <CascoDaCalculadora/>
  )
}

export default App
