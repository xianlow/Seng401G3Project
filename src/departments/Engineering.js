import React from "react"
import NewsFeed from "../components/NewsFeed"
import Post from "../components/Post";
import Sidebar from "../components/Sidebar";

const enggPfp = "./images/ess-logo.png"
function Engineering(){
    return(
        <div className="App" id="engg">
            <div className="Left-side">
                <Sidebar />
            </div>
            <div className='Right-side'>
                <NewsFeed />
                <Post depart = "Engineering" profilePic = {enggPfp} />
                <Post depart = "Engineering" profilePic = {enggPfp} />
                <Post depart = "Engineering" profilePic = {enggPfp} />
            </div>
      </div>
    );
}

export default Engineering