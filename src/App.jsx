import { useState } from 'react'
import RandomQuote from "./Components/RandomQuote/RandomQuote"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RandomQuote />
    </>
  )
}

export default App
