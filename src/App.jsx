import { useState } from 'react'
import Configitems from './components/Configitems';
import Signup from './lib/Signup';
import './App.css'

function App() {
  return (
    <>
    <div className='w-screen py-20 bg-primary dark:bg-dark-primary text-right'>
        <div className='bg-secondary dark:bg-dark-secondary py-12 text-center'>
          <Signup />
        </div>
      </div>
      <Configitems />
    </>
  )
}

export default App
