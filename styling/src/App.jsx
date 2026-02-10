import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import AuthInputs from './components/AuthInputs'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main>
        <AuthInputs/>
      </main>
    </>
  )
}

export default App
