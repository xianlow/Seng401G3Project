import React from "react"
import Engineering from "../components/Engineering"
import NewsFeed from "../components/NewsFeed"
import "../styles/Homepage.css"
function Home(){
    return(
        <div className="News-Feed">
            <NewsFeed />
            <Engineering />
        </div>
    )
}

export default Home