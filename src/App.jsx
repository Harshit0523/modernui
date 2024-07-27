import { useState } from 'react'
import Button from './componets/Button'
import ButtonSvg from './assets/svg/ButtonSvg'
import Header from './componets/Header'
import Hero from './componets/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    </>
  )
}

export default App
