import React from "react";

function CreatePost() {
    //simple text form for just typing in textbox
    //no functionality connected to save post button yet
    return(
        <>
        <form>
            <h1>Create New Post</h1>
            <br />
            <textarea placeholder="contents" rows="8" cols="40"required></textarea>
            <br />
            <br />
            <button >Save Post</button>
        </form>
        </>
    );
}

export default CreatePost