import React from 'react';
import './App.css';
import './style.css';
import NewsFeed from './components/NewsFeed';

import Amplify, {API} from 'aws-amplify';

const myAPI = "rhapsodyRest";
const path = "/postsId";
import Engineering from './departments/Engineering';

function App() {
  return (
      <div className="App">
        {/* <div className="Left-side">
          <Sidebar />
        </div> */}
        <div className='News-Feed'>
          <NewsFeed />
          <Engineering />
        </div>
      </div>
  );  
}

export default App;
