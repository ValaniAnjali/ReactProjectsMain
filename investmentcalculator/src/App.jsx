
import { useState } from 'react';
import './App.css'
import Calc from './components/Calc'
import Header from './components/Header'
import InvestmentTable from './components/InvestmentTable'

function App() {

 const [result,setResult]=useState([]);
  return (
    <>
      <Header/>
      <Calc onCalculate={setResult}/>
      {result && <InvestmentTable data={result}/>}
    </>
  )
}

export default App
