import React, {useState} from 'react'
import './App.css';
import SideBar from './components/SideBar'
import StreamAndChat from './components/StreamAndChat'
import TheContext from './context/index'
import axios from 'axios'




function App() {
  const [viewerCount, setViewerCount] = useState('')
  const [data, setData] = useState({})
  const [gameInput, setGameInput] = useState('')

const fetchStream = async () => {
    try{
      const response = await axios.get('http://localhost:3001/streams')
      if(response.status !== 200){
        console.log('Something went wrong')
      } else {
        await setData(response.data)
      }
    } catch (err) {
        console.error(err)
      }
}

  return (
    <TheContext.Provider value={{
        viewerCount: viewerCount,
        setViewerCount: setViewerCount
    }} >
      <div>
        <SideBar clickFn={fetchStream} gameInput={{
          gameInput: gameInput,
          setGameInput: setGameInput
        }} />
        <main className='main-body'>
          <aside className='chat'>

          </aside>
          <div className='stream'>
              <StreamAndChat data={data}/>
          </div>
        </main>
      </div>
    </TheContext.Provider>
  );
}

export default App;
