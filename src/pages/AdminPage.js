import React from "react"
import NewsFeed from "../components/NewsFeed"
import CreatePost from "../components/CreatePost"

function AdminPage(){
    return(
        <div className="News-Feed">
            <NewsFeed />
        <div>
            <CreatePost />
        </div>
        </div>
    )
}

export default AdminPage