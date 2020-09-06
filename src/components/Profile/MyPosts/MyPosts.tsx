import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import classes from './MyPosts.module.css';
import {ActionsTypes} from "../../../redux/state";

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
        // props.addPost();
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = (event: ChangeEvent<HTMLInputElement>) => {
        // props.updateNewPostText(event.currentTarget.value)
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: event.currentTarget.value})
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

//======================================================
// import React, {ChangeEvent} from "react";
// import {Post} from "./Post/Post";
// import classes from './MyPosts.module.css';
//
// type postDataType = {
//     postData: Array<InArray>
//     newPostText: string
//     addPost: () => void
//     updateNewPostText: (newText: string) => void
// }
// export type InArray = {
//     id: number
//     message: string
//     likesCount: number
// }
//
//
// export let MyPosts = (props: postDataType) => {
//     let newPostElement = React.createRef<HTMLTextAreaElement>();
//
//     const addPost = () => {
//         let text = newPostElement.current?.value;
//         props.addPost();
//     }
//
//     let onPostChange = (event: ChangeEvent<HTMLInputElement>) => {
//         props.updateNewPostText(event.currentTarget.value)
//     }
//
//     return (
//         <div className={classes.content}>
//             <div>
//                 <input
//                     autoFocus
//                     onChange={onPostChange}
//                     value={props.newPostText}
//                     placeholder={'Add message'}
//                 />
//                 <div>
//                     <button onClick={addPost}>Add post</button>
//                 </div>
//             </div>
//
//             <div className={classes.message}>
//                 {props.postData.map(m => <Post message={m.message} likesCount={m.likesCount}/>
//                 )}
//             </div>
//         </div>
//     )
// }
