import React, {useEffect, useState} from "react"
import Post from "../components/Post";
import {Amplify, API} from 'aws-amplify';
import awsconfig from "./aws-exports.js";

Amplify.configure(awsconfig);
API.configure(awsconfig);
const myAPI = "rhapsodyRest";
const path = "/posts";


  
function Engineering(e){
  const [input, setInput] = useState("")
    const [posts, setPosts] = useState([])
    //fruits is just placeholder array for now
    const fruits = ["banana", "apple","kiwi","mango","pineapple"]; 
    

  //Function to fetch from our backend and update customers array
  /*
    let postsID = e.input
    API.get(myAPI, path + "/" + postsID)
       .then(response => {
         console.log(response)
         let newPosts = [...posts]
         newPosts.push(response)
         setPosts(newPosts)

       })
       .catch(error => {
         console.log(error)
       })
      */
    //fetch text for each post then store in array which can then be mapped and formatted into a post
    return(
    fruits.map((fruits) => <Post postText={fruits}/>));
      }

export default Engineering