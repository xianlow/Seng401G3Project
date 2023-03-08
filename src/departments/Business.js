import React from "react"
import NewsFeed from "../components/NewsFeed"
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";
function Business(){
    return(
        <div className="App">
            <div className="Left-side">
                <Sidebar />
            </div>
            <div className='Right-side'>
                <NewsFeed />
                <Post depart = "Business" />
                <Post depart = "Business" />
                <Post depart = "Business" />
            </div>
      </div>
    );
}

export default Business