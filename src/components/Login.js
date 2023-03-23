import React from "react"
import NewsFeed from "./NewsFeed";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const navToAdmin = () => {
        navigate('/AdminPage');
    }  
    return(
        <div className = "News-Feed">
            <NewsFeed />
            <div className = "login">
            <form onSubmit={navToAdmin}>
                <label for="userName">Username:</label><br />
                <input type="text" id="userName" name="userName" required /><br />
                <label for="password">Password:</label><br />
                <input type="password" id="password" name="password" required /> <br />
                <input type="submit" value="Submit" />
            </form>
            </div>
        </div>
    )
}

export default Login;