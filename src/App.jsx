import { useState } from 'react'
import pb from './lib/pocketbase'
import Configitems from './components/Configitems';
import Signup from './lib/Signup';
import UploadConfig from './components/UploadConfig';
import './App.css'

function App() {
  return (
    <>
    <div className='w-screen py-20 bg-primary dark:bg-dark-primary'>
        <div className='bg-secondary dark:bg-dark-secondary py-12 text-center flex flex-row'>
          <Signup />
          {pb.authStore && pb.authStore.model && pb.authStore.model.username && <UploadConfig />}
        </div>
      </div>
      <Configitems />
    </>
  )
}

export default App