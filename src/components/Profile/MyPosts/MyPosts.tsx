import React from "react";
import {Post} from "./Post/Post";
import classes from './MyPosts.module.css';

export let MyPosts = () => {
    return (
        <div className={classes.content}>
            <textarea></textarea>
            <div>
                <button>Add post</button>
            </div>

            <div className={classes.message}>
                <Post message={'Hellow!'}/>
                <Post message={"It's my first post!"}/>
            </div>
        </div>
    )
}

