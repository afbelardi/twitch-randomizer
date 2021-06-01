import React, { useState, useEffect } from 'react'
import './App.css';
import SideBar from './components/SideBar'
import StreamAndChat from './components/StreamAndChat'

function App() {
  return (
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
  );
}

export default App;
