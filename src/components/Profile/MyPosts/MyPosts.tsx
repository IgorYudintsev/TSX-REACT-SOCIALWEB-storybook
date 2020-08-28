import React from "react";
import {Post} from "./Post/Post";
import classes from './MyPosts.module.css';

type postDataType = {
    postData: Array<InArray>
}
export type InArray = {
    id: number
    message: string
    likesCount: number
}

export let MyPosts = (props: postDataType) => {
    return (
        <div className={classes.content}>
            <textarea></textarea>
            <div>
                <button>Add post</button>
            </div>

            <div className={classes.message}>
                {props.postData.map(m =>
                    <Post message={m.message} likesCount={m.likesCount}/>
                )
                }
            </div>
        </div>
    )
}
