import React from "react";

function Post ({depart = "Engineering", profilePic = "./images/ess-logo.png", postText = "content"}){
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
                        <p>{postText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;