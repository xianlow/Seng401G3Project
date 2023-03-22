import React from "react"
import Post from "../components/Post";

function Engineering(){
    //fruits is just placeholder array for now
    const fruits = ["banana", "apple","kiwi","mango","pineapple"]; 
    //fetch text for each post then store in array which can then be mapped and formatted into a post
    return(
    //     <div className="App" id="engg">
    //         <div className="Left-side">
    //             <Sidebar />
    //         </div>
    //         <div className='Right-side'>
    //             <NewsFeed />
    //             <Post depart = "Engineering" profilePic = {enggPfp} />
    //             <Post depart = "Engineering" profilePic = {enggPfp} />
    //             <Post depart = "Engineering" profilePic = {enggPfp} />
    //         </div>
    //   </div>
        //map the post text to transform the array into post elements
        fruits.map((fruits) => <Post postText={fruits}/>));
}

export default Engineering