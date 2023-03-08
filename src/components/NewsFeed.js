import React from "react";

function sayHello() {
    alert('You clicked me!');
  }

function NewsFeed(){
    return(
        <div className="feed">
            <div className="title">
                <div>
                    <button onClick={sayHello}>Log In</button>
                </div>
                <h2>What's New in Rhapsody</h2>
            </div>
        </div>
    );
}

export default NewsFeed