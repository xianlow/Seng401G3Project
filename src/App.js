import React from 'react';
import './App.css';
import './style.css';
import Sidebar from './components/Sidebar';
import NewsFeed from './components/NewsFeed';
function App() {
  return (
      <div className="App">
        <div className="Left-side">
          <Sidebar />
        </div>
        <div className='Right-side'>
          <NewsFeed />
        </div>
      </div>
  );
}

export default App;
