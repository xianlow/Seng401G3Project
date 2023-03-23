import React from "react";
import { Route, Routes, useNavigate, Link } from "react-router-dom";
import Login from "./Login";

function NewsFeed(){
    const navigate = useNavigate();
    const navToLogin = () => {
        navigate('/Login');
    }  
    return(
        <div className="feed">
            <div className="title">
                <div>
                    <button onClick={navToLogin}>Log In</button>
                    <Routes>
                    <Route exact path='/Login' element={<Login/>} />
                    </Routes>
                </div>
                <Link to="/"><h2>What's New in Rhapsody</h2></Link>
            </div>
        </div>
    );
}

export default NewsFeed