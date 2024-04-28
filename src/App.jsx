import { useState } from 'react'
import pb from './lib/pocketbase'
import Configitems from './components/Configitems';
import Signup from './lib/Signup';
import UploadConfig from './components/UploadConfig';
import './App.css'
import Header from './components/Header';

function App() {
  return (
    <>
      
      <Header />
      <div className='absolute top-24'>
        {/* <div className="w-screen bg-primary dark:bg-dark-primary">
          <div className="bg-secondary dark:bg-dark-secondary py-12 text-center flex flex-row">
            {pb.authStore &&
              pb.authStore.model &&
              pb.authStore.model.username && <UploadConfig />}
          </div>
        </div> */}
        <Configitems/>
      </div>
    </>
  );
}

export default App