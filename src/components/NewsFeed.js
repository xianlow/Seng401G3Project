import React from "react";
import {useNavigate} from "react-router-dom";
import "../styles/Newsfeed.css";

function NewsFeed(){
    const navigate = useNavigate();
    const navToLogin = () => {
        navigate('/Login');
    }  

    const navToHomepage = () => {
        navigate('/');
    }

    return(
        <div className="title">
            <div>
                <button onClick={navToLogin}>Log In</button>
            </div>
            <h2 onClick={navToHomepage}>What's New in Rhapsody</h2>
        </div>
    );
}

export default NewsFeed