import React, {useState} from 'react'
import './App.css';
import SideBar from './components/SideBar'
import StreamAndChat from './components/StreamAndChat'
import TheContext from './context/index'


function App() {
  const [viewerCount, setViewerCount] = useState('')

  return (
    <TheContext.Provider value={{
        viewerCount: viewerCount,
        setViewerCount: setViewerCount
    }} >
      <div>
        <SideBar/>
        <main className='main-body'>
          <aside className='chat'>

          </aside>
          <div className='stream'>
              <StreamAndChat />
          </div>
        </main>
      </div>
    </TheContext.Provider>
  );
}

export default App;
