import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import classes from './MyPosts.module.css';
import {ActionsTypes, addPostActionCreator, updateNewPostActionCreator,} from "../../../redux/state";

type postDataType = {
    postData: Array<InArray>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export type InArray = {
    id: number
    message: string
    likesCount: number
}
export let MyPosts = (props: postDataType) => {
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        let text = newPostElement.current?.value;
        //props.dispatch({type: 'ADD-POST'})//было раньше
        props.dispatch(addPostActionCreator());//вызываем создатель экшена
    }

    let onPostChange = (event: ChangeEvent<HTMLInputElement>) => {
        let text=event.currentTarget.value
        props.dispatch(updateNewPostActionCreator(text));//вызываем создатель экшена
    }

    return (
        <div className={classes.content}>
            <form>
                <input type={'text'}
                       autoFocus
                       onChange={onPostChange}
                       value={props.newPostText}
                       placeholder={'Add message'}
                />
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </form>

            <div className={classes.message}>
                {props.postData.map(m => <Post message={m.message} likesCount={m.likesCount}/>
                )}
            </div>
        </div>
    )
}

