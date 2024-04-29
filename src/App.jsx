import { useEffect, useState } from 'react'
import pb from './lib/pocketbase'
import Configitems from './components/Configitems';
import Signup from './lib/Signup';
import UploadConfig from './components/UploadConfig';
import './App.css'
import Header from './components/Header';
import CreateConfig from './components/CreateConfig';

function App() {
  const [showConfigItems, setShowConfigItems] = useState(true);
  const [showCreateConfig, setShowCreateConfig] = useState(true);

  useEffect(() => {
    if (window.location.hash == "#configs" || window.location.hash == "") {
      setShowCreateConfig(false)
    } else {
      setShowConfigItems(false);
    }
  })

  const configItemsTab = () => {
    setShowConfigItems(true);
    setShowCreateConfig(false);

    window.location.hash = "configs"
  };

  const createConfigsTab = () => {
    setShowConfigItems(false)
    setShowCreateConfig(true)

    window.location.hash = "create"
  }

  const homeTab = () => {
    setShowConfigItems(true);
    setShowCreateConfig(false);

    history.replaceState(null, "", window.location.pathname);
  }

  return (
    <>
      
      <Header configItemsTab={configItemsTab} createConfigsTab={createConfigsTab} homeTab={homeTab} />
      <div className='absolute top-24'>
        {showConfigItems && <div className=''>
          <div className="w-screen bg-primary dark:bg-dark-primary">
            <div className="bg-secondary dark:bg-dark-secondary text-center flex flex-row">
              {pb.authStore &&
                pb.authStore.model &&
                pb.authStore.model.username && <UploadConfig />}
            </div>
          </div>
          
          <Configitems/>
        </div>}
        {showCreateConfig && <div className=''>
          <CreateConfig></CreateConfig>
        </div>}
      </div>
    </>
  );
}

export default App