import React from "react";

function Post ({depart, profilePic = "./images/UC-vert-rgb.jpg", imgSrc = "./images/stack-reviver-filler.jpg"}){
    return (
        <div className="post">
            <div class="post_profile_pic">
                <img src={profilePic} alt="profile_pic"/>
            </div>
            <div class="post_content">
                <div class="post_text_Container">
                    <div class="username">
                        <h3>{depart} Department</h3>
                    </div>
                    <div class="post_description">
                        <p>Content to be written</p>
                    </div>
                </div>
                <img src={imgSrc} alt="post_image"/>
            </div>
        </div>
    );
}

export default Post;