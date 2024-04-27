import { useState } from 'react'
import Configitems from './components/Configitems';
import Signup from './lib/Signup';
import './App.css'

function App() {
  return (
    <>
      <Signup />
      <Configitems />
    </>
  )
}

export default App
