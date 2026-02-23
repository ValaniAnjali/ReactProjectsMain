import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Signup from './components/Signup'

function App() {
// Using Form Actions - Letting React Handle Form Submissions

//---Form Actions vs Custom Submission Handling
//---Extracting Values & Managing Form State
//---Synchronous & Asynchronous Actions
//---Optimistic UI Updating

  return (
    <>
      <Header/>
      <main>
        <Signup/>
      </main>
    </>
  )
}

export default App
