import React from "react";
import {Post} from "./Post/Post";



export let MyPosts = () => {
    return (
        <div className={'content'}>
            <textarea></textarea>
            <button>Add post</button>
            <Post message={'Hellow!'}/>
            <Post message={"It's my first post!"}/>
        </div>
    )
}

