import React from "react";
import {Post} from "./Post/Post";
import classes from './MyPosts.module.css';

type postDataType = {
    postData: Array<InArray>
    addPost:(postMessage: string)=>void
}
export type InArray = {
    id: number
    message: string
    likesCount: number
}

type newPostElementType={
    newPostElement:string
}

export let MyPosts = (props: postDataType) => {
    let newPostElement=React.createRef<HTMLTextAreaElement>();
    const addPost=()=>{
        // alert(newPostElement.current?.value)
        if(newPostElement.current?.value){
            props.addPost(newPostElement.current?.value)
        }
    }
    return (
        <div className={classes.content}>
            <textarea ref={newPostElement}></textarea>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>

            <div className={classes.message}>
                {props.postData.map(m =>
                    <Post message={m.message} likesCount={m.likesCount}/>
                )}
            </div>
        </div>
    )
}
