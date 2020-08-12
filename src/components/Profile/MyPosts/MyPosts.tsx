import React from "react";
import {Post} from "./Post/Post";
import classes from './MyPosts.module.css';

type postData={
    id:number
    message:string
    likesCount:number
}

export let MyPosts = () => {
    let postData:Array<postData>=[
        {id:1,message:'Hellow',likesCount:12},
        {id:2,message:'It\'s my first post!',likesCount:11}
    ]
    return (

        <div className={classes.content}>
            <textarea></textarea>
            <div>
                <button>Add post</button>
            </div>

            <div className={classes.message}>
                {postData.map(m=>  <Post message={m.message} likesCount={m.likesCount}/>)}
            </div>
        </div>
    )
}

//=====================
// import React from "react";
// import {Post} from "./Post/Post";
// import classes from './MyPosts.module.css';
//
// type postData={
//     id:number
//     message:string
//     likesCount:number
// }
//
// export let MyPosts = () => {
//     let postData:Array<postData>=[
//         {id:1,message:'Hellow',likesCount:12},
//         {id:2,message:'It\'s my first post!',likesCount:11}
//     ]
//     return (
//
//         <div className={classes.content}>
//             <textarea></textarea>
//             <div>
//                 <button>Add post</button>
//             </div>
//
//             <div className={classes.message}>
//                 <Post message={'Hellow!'}/>
//                 <Post message={"It's my first post!"}/>
//             </div>
//         </div>
//     )
// }