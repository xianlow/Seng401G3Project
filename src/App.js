import React from 'react';
import './styles/App.css';
import Home from './pages/Homepage';
import Login from './components/Login';
import AdminPage from './pages/AdminPage';
import Engineering from './components/Engineering';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Router>
              <Routes>
                  <Route exact path="" element={<Home/>}></Route>
                  <Route exact path="/" element={<Home/>}></Route>
                  <Route exact path='/login' element={<Login/>}/>
                  <Route exact path='/adminpage' element={<AdminPage/>}/>
                  <Route exact path='/Engineering' element={<Engineering/>}/>
              </Routes>
          </Router>
      </div>
  );  
}

export default App;
