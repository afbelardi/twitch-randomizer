import React, { useState, useEffect } from 'react'
import './App.css';
import SideBar from './components/SideBar'
import StreamAndChat from './components/StreamAndChat'

function App() {
  const classes = useStyles();
  return (
    <div>
      <SideBar/>
      <main>
        <div className='stream'>
            <StreamAndChat />
        </div>
        <aside className='chat'>

        </aside>
      </main>
    </div>
  );
}

export default App;
